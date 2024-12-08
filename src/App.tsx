import {useEffect, useState} from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css';
import "./index.css";
import image from './assets/introduction1.jpg';
import image2 from './assets/introduction2.jpg';
import image3 from './assets/introduction3.jpg';
function App() {
    // const textButton :string = "Get Started";
    const [ClickCount,SetClickCount] = useState<number>(0);
    const [DisplayStarter,ChangeDisplayStarter] = useState<string>("block");
    const [Paragraph,ChangeParagraph] = useState<string>("Let's fulfill your fashion needs with shoearight now!");
    const [TextButton,ChangeTextButton] = useState<string>("Get Started");
    const [Image,ChangeImage] = useState<string>(image);
    const handelClick = ()=>{
        SetClickCount((x)=>x+1);
    };
    useEffect(()=>{
        if (ClickCount===1){
            ChangeParagraph("Your satisfaction is our number one periority");
            ChangeTextButton("Next");
            ChangeImage(image2);
        }
        if (ClickCount===2){
            ChangeParagraph("We provide high quality products just for you");
            ChangeTextButton("Next");
            ChangeImage(image3);
        }
    },[ClickCount]);
    if (ClickCount===3){
        ChangeDisplayStarter("none");
    }
  return (
    <>
        <div className={"m-auto w-full h-screen pt-[10px]"} style={{backgroundColor: '#1E1E1E',display: DisplayStarter}}>
            <img src={Image} alt={"image introduction1"} className={"m-auto w-[290px] h-[375px]"}/>
            <div className={"m-auto w-[290px] bg-white"}>
                <div className={"flex justify-center items-center"}>
                    <div>
                        <div><p className={"text-center font-bold mb-[15px] mt-[10px]"}>{Paragraph}</p></div>
                        <div className={"m-auto flex justify-between w-[100px]"}>
                            <div style={{backgroundColor: ClickCount===1 ? "#868686" : ClickCount===2 ? "#868686" : "black"}} className={"w-[30px] h-[10px] rounded-[10px]"}></div>
                            <div style={{backgroundColor: ClickCount===1 ? "black" : ClickCount===2 ? "#868686" : "#868686"}} className={"w-[30px] h-[10px] rounded-[10px]"}></div>
                            <div style={{backgroundColor: ClickCount===2 ? "black" : "#868686"}} className={"w-[30px] h-[10px] rounded-[10px]"}></div>
                        </div>
                        <div className={"m-auto flex justify-center"}>
                            <div className={"border-solid border-[2px] border-black rounded-[10px] text-white bg-black mb-[10px] mt-[15px] w-[235px]"} onClick={handelClick}><h3 className={"text-center"}>{TextButton}</h3></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </>
  )
}
export default App

{/*<div>*/
}
{/*  <a href="https://vite.dev" target="_blank">*/
}
{/*    <img src={viteLogo} className="logo" alt="Vite logo" />*/
}
{/*  </a>*/
}
{/*  <a href="https://react.dev" target="_blank">*/
}
{/*    <img src={reactLogo} className="logo react" alt="React logo" />*/
}
{/*  </a>*/
}
{/*</div>*/
}
{/*<h1>Vite + React</h1>*/
}
{/*<div className="card">*/
}
{/*  <button onClick={() => setCount((count) => count + 1)}>*/
}
{/*    count is {count}*/
}
{/*  </button>*/
}
{/*  <p>*/}
{/*    Edit <code>src/App.tsx</code> and save to test HMR*/}
{/*  </p>*/}
{/*</div>*/}
{/*<p className="read-the-docs">*/}
{/*  Click on the Vite and React logos to learn more*/}
{/*</p>*/}