import './App.css';
import Menu from "./components/Menu";
import data from './DATA.json'

function App() {
    return <div className="App">
        <Menu list={data}/>
    </div>;
}

export default App;
