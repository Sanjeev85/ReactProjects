import React from "react";
import "./App.css";

const peaks = [
  { name: "Freel", elevation: 10891 },
  { name: "Monument", elevation: 10067 },
  { name: "Pyramid", elevation: 9983 },
  { name: "Tallac", elevation: 9735 },
];

function List({ data, renderItem, renderEmpty }) {
  console.log(data);
  return !data.length ? (
    renderEmpty
  ) : (
    <ul>
      {data.map((item) => {
        return <li key={item.name}>{renderItem(item)}</li>;
      })}
    </ul>
  );
}

function App() {
  return (
    <List
      data={peaks}
      renderEmpty={<p>List is Empty</p>}
      renderItem={(item) => (
        <>
          {item.name} -- {item.elevation} ft.
        </>
      )}
    />
  );
}

export default App;
