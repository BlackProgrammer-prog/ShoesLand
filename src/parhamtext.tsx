// 'react';
// import './App.css';
// import "./index.css";
// import image from './assets/introduction1.jpg';
// import image2 from './assets/introduction2.jpg';
// import image3 from './assets/introduction3.jpg';
// import image4 from './assets/ImageShose.jpg';
//
// function App() {
//     const [ClickCount, setClickCount] = useState<number>(0);
//     const [DisplayStarter, setDisplayStarter] = useState<boolean>(true); // مدیریت نمایش بخش اول
//     const [Paragraph, setParagraph] = useState<string>("Let's fulfill your fashion needs with shoearight now!");
//     const [TextButton, setTextButton] = useState<string>("Get Started");
//     const [Image, setImage] = useState<string>(image);
//     const [showSection, setShowSection] = useState<boolean>(true); // مدیریت نمایش بخش‌های دیگر
//
//     const handleClick = () => {
//         setClickCount((prev) => prev + 1);
//     };
//
//     useEffect(() => {
//         if (ClickCount === 1) {
//             setParagraph("Your satisfaction is our number one priority");
//             setTextButton("Next");
//             setImage(image2);
//         } else if (ClickCount === 2) {
//             setParagraph("We provide high-quality products just for you");
//             setTextButton("Next");
//             setImage(image3);
//         } else if (ClickCount === 3) {
//             setDisplayStarter(false); // مخفی‌کردن بخش اول
//             setShowSection(false);   // مخفی کردن بخش دوم نیز
//         }
//     }, [ClickCount]);
//
//     return (
//         <div>
//             {DisplayStarter && ( // مدیریت نمایش بخش اول
//                 <div className={"m-auto w-full h-screen pt-[10px]"} style={{ backgroundColor: '#1E1E1E' }}>
//                     <img src={Image} alt={"image introduction1"} className={"m-auto w-[290px] h-[375px]"} />
//                     <div className={"m-auto w-[290px] bg-white"}>
//                         <div className={"flex justify-center items-center"}>
//                             <div>
//                                 <div><p className={"text-center font-bold mb-[15px] mt-[10px]"}>{Paragraph}</p></div>
//                                 <div className={"m-auto flex justify-between w-[100px]"}>
//                                     <div style={{ backgroundColor: ClickCount === 1 ? "#868686" : ClickCount === 2 ? "#868686" : "black" }} className={"w-[30px] h-[10px] rounded-[10px]"}></div>
//                                     <div style={{ backgroundColor: ClickCount === 1 ? "black" : ClickCount === 2 ? "#868686" : "#868686" }} className={"w-[30px] h-[10px] rounded-[10px]"}></div>
//                                     <div style={{ backgroundColor: ClickCount === 2 ? "black" : "#868686" }} className={"w-[30px] h-[10px] rounded-[10px]"}></div>
//                                 </div>
//                                 <div className={"m-auto flex justify-center"}>
//                                     <div className={"border-solid border-[2px] border-black rounded-[10px] text-white bg-black mb-[10px] mt-[15px] w-[235px]"} onClick={handleClick}>
//                                         <h3 className={"text-center"}>{TextButton}</h3>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             )}
//
//             {!DisplayStarter && showSection && ( // مدیریت نمایش بخش دوم
//                 <div className={"m-auto w-full h-screen pt-[10px]"} style={{ backgroundColor: '#1E1E1E' }}>
//                     <div className={"m-auto w-[290px] flex justify-center items-center"} style={{ backgroundImage: image4 }}>
//                         <div>
//                             <h2 className={"text-white"}>Welcome to 👋</h2>
//                             <h1 className={"text-white mt-[10px]"}>Shoea</h1>
//                             <p className={"text-white mt[10px]"}>The best sneakers & shoes e-commerce app of the century for your fashion needs!</p>
//                         </div>
//                     </div>
//                 </div>
//             )}
//         </div>
//     );
// }
//
// export default App;