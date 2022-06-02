import logo from './logo.svg';
import './App.css';



export function MyComponent(props) {
  return <form onSubmit={props.onSubmit}>

    <label> Foo<input type="text" name="foo" required/> </label>
    <button type="sumbit">Submit</button>
  </form>
}

function App() {
  return (
    <div className="App">
        <MyComponent onSubmit={(e) => console.log(e)}/>
    </div>
  );
}

export default App;
