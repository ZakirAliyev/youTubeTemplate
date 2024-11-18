import './App.css'
import Navbar from "./components/Navbar/index.jsx";
import Videos from "./components/Videos/index.jsx";
import LeftMenu from "./components/LeftMenu/index.jsx";
import Shorts from "./components/Shorts/index.jsx";

function App() {

    return (
        <>
            <Navbar/>
            <div id={"appWrapper"}>
                <LeftMenu/>
                <div className={"appWrapper1"}>
                    <Videos/>
                    <Shorts/>
                    <Videos/>
                </div>
            </div>
        </>
    )
}

export default App
