import { useState } from "react";

export default function SearchFilter() {
  // this is used to create a search bar

  const list = [
    "Apple",
    "Banana",
    "Cherry",
    "Dragon Fruit",
    "Elderberry",
    "Fig",
  ];
  const [filterList, setFilterList] = useState(list);

  function handleSearch(e: any) {
    if (e.target.value === "") {
      setFilterList(list);
      return;
    }
    const filtertedList = list.filter((item) =>
      item.toUpperCase().includes(e.target.value.toUpperCase())
    );
    setFilterList(filtertedList);
  }

  return (
    <div className="w-500px">
    
      <div>
        Search :{" "}
        <input
          className="max-w-[500px] outline-none border border-black rounded-lg p-3"
          type="text"
          onChange={handleSearch}
        />
      </div>
      {filterList.map((item: any, index: any) => (
        <div key={index}>{item}</div>
      ))}
    </div>
  );
}
