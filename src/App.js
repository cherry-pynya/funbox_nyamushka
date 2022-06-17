import './App.css';
import Card from './components/card/card';
import data from './data';

function App() {
  return (
    <div className="App">
      <h1 className="header">Ты сегодня покормил кота?</h1>
      <div className="layout">
        {data.map((el, index) => <Card item={el} key={index}></Card>)}
      </div>
    </div>
  );
}

export default App;
