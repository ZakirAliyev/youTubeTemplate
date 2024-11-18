import './App.css'
import Navbar from "./components/Navbar/index.jsx";
import Videos from "./components/Videos/index.jsx";
import LeftMenu from "./components/LeftMenu/index.jsx";

function App() {

    return (
        <>
            <Navbar/>
            <div id={"appWrapper"}>
                <LeftMenu/>
                <Videos/>
            </div>
        </>
    )
}

export default App
