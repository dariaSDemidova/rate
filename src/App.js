import './App.css';
import Card from './components/Card';

const cards = [
  { title: "300", price: "300", speed: "10" },
  { title: "450", price: "450", speed: "50" },
  { title: "550", price: "550", speed: "100", isSelected: true },
  { title: "1000", price: "1000", speed: "200" }
];

function App() {
  return (
    <div className="App">
      {
        cards.map((card, index) =>
          <Card key={index} {...card}></Card>
        )
      }
    </div>
  );
}

export default App;