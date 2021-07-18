import './App.css';
import Container from './Container';
function App() {
  const items = [
    { title: "Pizza", value: "you have consumed 56 cals today" },
    { title: "Burger", value: "you have consumed 69 cals today" },
    { title: "Coke", value: "you have consumed 500 cals today" },
    { title: "Fried Rice", value: "you have consumed 90 cals today" },
  ];

  return (
    <div className="App">
      <Container cards={items}></Container>
    </div>
  );
}

export default App;
