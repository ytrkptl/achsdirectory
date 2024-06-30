import CardList from "@/components/CardList.jsx";

const FilteredCardList = ({ contacts }) => {
  return (
    <>
      {contacts.length > 0 ? (
        <CardList contacts={contacts} />
      ) : (
        <h1 style={{ color: "hotpink" }}>
          {console.log(contacts)}
          No matches found. Try searching again!
        </h1>
      )}
    </>
  );
};

export default FilteredCardList;
