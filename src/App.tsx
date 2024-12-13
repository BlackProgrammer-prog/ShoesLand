// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css';
import "./index.css";
import Welcome from "./Welcome.tsx";
import {useState} from "react";
function App() {
    const [ShowHome,setShowHome] = useState<boolean>(false);
    const handelFinishLoading = ()=>{
        setShowHome(true);
    }
  return (
    <div>
        {ShowHome ? <div>parham</div> : <Welcome onFinish = {handelFinishLoading}></Welcome>}
    </div>
  )
}
export default App