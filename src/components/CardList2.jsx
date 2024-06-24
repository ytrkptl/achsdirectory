/* eslint-disable react/prop-types */
import Card from "./Card";

const CardList2 = ({ contacts }) => {
  return (
    <div>
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
export default CardList2;
