import { MouseEvent } from "react";

function ListGroup() {
  let items = ["New york", "San Francisco", "Tokyo", "London", "Paris"];
  let selectedIndex = 2;
  const handleClick = (event: MouseEvent) => console.log(event);

  return (
    <>
      <h1>List</h1>
      {items.length === 0 && <p>No item found </p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            onClick={handleClick}
            key={item}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
