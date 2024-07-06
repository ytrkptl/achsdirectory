import Card from "./Card";
import "./CardList.css";

const CardList = ({ contacts }) => {
  return (
    <div className="cardList">
      {contacts.map((item, i) => {
        return (
          <Card
            contactInfoFromCardList={item.contacts}
            key={i}
            itemNum={i + 1}
          />
        );
      })}
    </div>
  );
};
export default CardList;
