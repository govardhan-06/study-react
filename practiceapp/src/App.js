import './App.css';
// import Card from './components/Cards';
import Counter from './components/Counter';

function App() {
  return (
    <div className="App">
      {/* <Card/>
      <Card/>
      <Card/>
      <Card name="Sourabh" regno="23BCE1778"/>
      <Card name="Arun" regno="23BCE1778" style={{"backgroundColor":"blue"}}/> */}


      {/* Content written the two tags of component can be referenced as children*/}
      <Counter>Counter</Counter>
    </div>
  );
}

export default App;
