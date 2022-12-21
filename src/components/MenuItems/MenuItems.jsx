import "./menu-items.css";
import items from "../../data/items.json";
import MenuItem from "../MenuItem/MenuItem";
import { useEffect, useState } from "react";

export default function MenuItems({ searchValue }) {
  const [cardItems, setCardItems] = useState(items);

  useEffect(() => {
    cardItems.sort(() => Math.random() - 0.5);
  }, []);

  useEffect(() => {
    setCardItems(
      items.filter((item) => {
        return item.title.toLowerCase().includes(searchValue.toLowerCase());
      })
    );
  }, [searchValue]);

  return (
    <>
      {!cardItems.length ? (
        <h1 style={{ textAlign: "center", marginTop: "2rem" }}>
          No Cocktails Matched Your Search Criteria
        </h1>
      ) : (
        <div className="cocktails" id="cocktails">
          <div className="section-title">
            <h1>Cocktails</h1>
          </div>
          <div className="container">
            <div className="cards-wrapper">
              {cardItems.map((item, index) => {
                return <MenuItem item={item} index={index} key={item.id} />;
              })}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
