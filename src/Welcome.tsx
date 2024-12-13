import React, {useEffect, useState} from 'react'
import './App.css';
import "./index.css";
import image from './assets/introduction1.jpg';
import image2 from './assets/introduction2.jpg';
import image3 from './assets/introduction3.jpg';
import image4 from './assets/icon load.jpg'
import Spinner from './spinner';
interface WelcomeProps {
    onFinish : ()=> void;
}
const Welcome :React.FC<WelcomeProps>= ({onFinish})=>{
    const [ClickCount,SetClickCount] = useState<number>(0);
    const [DisplayStarter,ChangeDisplayStarter] = useState<boolean>(true);
    const [Paragraph,ChangeParagraph] = useState<string>("Let's fulfill your fashion needs with shoearight now!");
    const [TextButton,ChangeTextButton] = useState<string>("Get Started");
    const [Image,ChangeImage] = useState<string>(image);
    const [showSection, setShowSection] = useState<boolean>(false);
    const [isLoading,SetIsLoading] = useState<boolean>(false);
    function PageWhiteStarter(){
        setShowSection(false);
        SetIsLoading(true);
        setTimeout(()=>{
            SetIsLoading(false);
            onFinish();
        },3000);
    }
    const handelClick = ()=>{
        SetClickCount((x)=>x+1);
    };
    useEffect(()=>{
        if (ClickCount===1){
            ChangeParagraph("Your satisfaction is our number one periority");
            ChangeTextButton("Next");
            ChangeImage(image2);
        }
        else if (ClickCount===2){
            ChangeParagraph("We provide high quality products just for you");
            ChangeTextButton("Next");
            ChangeImage(image3);
        }
        else if (ClickCount===3){
            ChangeDisplayStarter(false);
            setShowSection(true);
        }
    },[ClickCount]);
    return (
        <div>
            {DisplayStarter && (
                <div className={"m-auto w-full h-screen pt-[10px]"}
                     style={{backgroundColor: '#1E1E1E'}}>
                    <img src={Image} alt={"image introduction1"} className={"m-auto w-[290px] h-[375px]"}/>
                    <div className={"m-auto w-[290px] bg-white"}>
                        <div className={"flex justify-center items-center"}>
                            <div>
                                <div><p className={"text-center font-bold mb-[15px] mt-[10px]"}>{Paragraph}</p></div>
                                <div className={"m-auto flex justify-between w-[100px]"}>
                                    <div
                                        style={{backgroundColor: ClickCount === 1 ? "#868686" : ClickCount === 2 ? "#868686" : "black"}}
                                        className={"w-[30px] h-[10px] rounded-[10px]"}></div>
                                    <div
                                        style={{backgroundColor: ClickCount === 1 ? "black" : ClickCount === 2 ? "#868686" : "#868686"}}
                                        className={"w-[30px] h-[10px] rounded-[10px]"}></div>
                                    <div style={{backgroundColor: ClickCount === 2 ? "black" : "#868686"}}
                                         className={"w-[30px] h-[10px] rounded-[10px]"}></div>
                                </div>
                                <div className={"m-auto flex justify-center"}>
                                    <div
                                        className={"border-solid border-[2px] border-black rounded-[10px] text-white bg-black mb-[10px] mt-[15px] w-[235px]"}
                                        onClick={handelClick}><h3 className={"text-center"}>{TextButton}</h3></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            {!DisplayStarter && showSection && (
                <div className={"m-auto w-full h-screen pt-[10px] flex justify-center items-center"} style={{backgroundColor: '#1E1E1E'}}>
                    <div className={"m-auto w-[320px] z-auto h-[90%]"} style={{backgroundImage: `url('ImageShose.jpg')`}} onClick={PageWhiteStarter}>
                        <div className={"flex justify-center items-center"}>
                            <div className={"m-auto pl-[10px] pt-[85%]"}>
                                <h2 className={"text-white font-bold text-[35px]"}>Welcome to 👋</h2>
                                <h1 className={"text-white mt-[10px] font-bold text-[40px]"}>Shoea</h1>
                                <p className={"text-white mt[10px] font-serif"}>The best sneakers & shoes e-commerse app of the century
                                    for
                                    your fashion needs!</p>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            {!DisplayStarter && !showSection && isLoading &&(
                <div className={"w-full h-screen m-auto flex justify-center items-center bg-white"}>
                    <div className={"w-[50%] h-[50%]"}>
                        <div>
                            <img src={image4} alt={"icon"}/>
                        </div>
                        <Spinner></Spinner>
                    </div>
                </div>
            )}
        </div>
    )
}
export default Welcome;