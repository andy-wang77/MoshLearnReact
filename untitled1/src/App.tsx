import ListGroup from "./components/ListGroup.tsx";

function App() {
  const items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  return (
    <div>
      <ListGroup
        items={items}
        heading="Citites"
        onSelectItem={handleSelectItem}
      />
    </div>
  );
}

export default App;
