import {Button} from "antd";
import {LeftOutlined,EyeTwoTone,EyeInvisibleOutlined} from "@ant-design/icons";
import icon from "./assets/output.png";
import React, {useRef, useState} from "react";
import axios from "axios";
function CreateAccount() {
    const [PasswordVisibel,setPasswordVisibel] = useState<boolean>(false);
    const [name,setname] = useState<string>("");
    const [family,setfamily] = useState<string>("");
    const [username,setusername] = useState<string>("");
    const [email,setemail] = useState<string>("");
    const [telphone,setTelphone] = useState<string>("");
    const [password,setpassword] = useState<string>("");
    const [AgainPassword,setAgainPassword] = useState<string>("");
    const [men,setMen] = useState<boolean>(false);
    const [women,setWomen] = useState<boolean>(false);
    const [emailError,setEmailError] = useState<string>("");
    const [passwordError,setPasswordError] = useState<string>("");
    const [ErrorLengthPassword,setErrorLengthPassword] = useState<string>("");
    const [ErrorLengthName,setErrorLengthName] = useState<string>("");
    const [ErrorLengthFamily,setErrorLengthFamily] = useState<string>("");
    const [ErrorLengthUsername,setErrorLengthUsername] = useState<string>("");
    const [ErrorLengthEmail,setErrorLengthError] = useState<string>("");
    const [ErrorLengthGender,setErrorLengthGender] = useState<string>("");
    const [ErrorLengthTelphone,setErrorLengthTelphone] = useState<string>("");
    const [ErrorPasAgain,setErrorPasAgain] = useState<string>("");
    const [ErrorTwoLengthTelphone,setErrorTwoLengthTelphone] = useState<string>("");
    const [Gender,setGender] = useState<string>("");
    const CheckEmail = (email:string):boolean=>{
        const RegexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return RegexEmail.test(email);
    };
    const CheckPassword = (password:string):boolean=>{
        const RegexPassword = /[@#$!]/;
        return RegexPassword.test(password);
    }
    const nameRef = useRef<HTMLInputElement>(null);
    const familyRef = useRef<HTMLInputElement>(null);
    const usernameRef = useRef<HTMLInputElement>(null);
    const emailRef = useRef<HTMLInputElement>(null);
    const MenRef = useRef<HTMLInputElement>(null);
    const WomenRef = useRef<HTMLInputElement>(null);
    const telphoneRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    const AgainPasswordRef = useRef<HTMLInputElement>(null);
    const handelClickSubmit = async (event:React.FormEvent)=>{
        event.preventDefault();
        if (!CheckEmail(email)){
            setEmailError("ایمیل معتبر نیست");
            console.log("ایمیل معتبر نیست");
        }
        else {
            setEmailError("");
        }
        if (!CheckPassword(password)){
            setPasswordError("پسورد باید حداقل یکی از کاراکترهای @#$! را شامل باشد");
            console.log("پسورد باید حداقل یکی از کاراکترهای @#$! را شامل باشد");
        }
        else {
            setPasswordError("");
        }
        if (password.length<8){
            setErrorLengthPassword("طول رمز عبور کمتر از 8 کارکتر است");
        }
        else {
            setErrorLengthPassword("");
        }
        if (name.length === 0){
            setErrorLengthName("اسم خود را وارد کنید");
        }
        else {
            setErrorLengthName("");
        }
        if (family.length === 0){
            setErrorLengthFamily(" نام خانوادگی خود را وارد کنید");
        }
        else {
            setErrorLengthFamily("");
        }
        if (username.length === 0){
            setErrorLengthUsername("نام کاربری خود را وارد کنید");
        }
        else {
            setErrorLengthUsername("");
        }
        if (email.length === 0){
            setErrorLengthError("ایمیل خود را وارد کنید");
        }
        else {
            setErrorLengthError("");
        }
        if (telphone.length === 0){
            setErrorLengthTelphone("شماره تلفن خود را وارد کنید");
        }
        else {
            setErrorLengthTelphone("");
        }
        if (men && women){
            setErrorLengthGender("جنسیت خود را وارد کنید")
        }
        else if (men){
            setGender("مرد");
        }
        else if (women){
            setGender("زن");
        }
        if (password !== AgainPassword){
            setErrorPasAgain("رمز عبور با تکراز آن مطابقت ندارد");
        }
        else {
            setErrorPasAgain("");
        }
        if (telphone.length !== 11){
            setErrorTwoLengthTelphone("شماره تلفن باید 11 رقمی باشد");
        }
        else {
            setErrorTwoLengthTelphone("");
        }
        const UserData = {
            "name" : name,
            "family" : family,
            "username" : username,
            "email" : email,
            "TelPhone" : telphone,
            "password" : password,
            "gender" : Gender
        }
        if (CheckEmail(email) && CheckPassword(password) && password.length>7 && name.length !== 0 && family.length !== 0
            && username.length !== 0 && email.length !== 0 &&  telphone.length === 11 && password === AgainPassword
        ){
            try {
                const response = await axios.post("http://localhost:3000/users",UserData);
                console.log("User Created:",response.data);
                alert("ثبت نام با موفقیت انجام شد");
            }catch (error){
                console.error("Error Create User:",error);
                alert("مشکلی پیش آمد مجدد تلاش کنید");
            }
            if (nameRef.current){
                nameRef.current.value="";
            }
            if (familyRef.current){
                familyRef.current.value = "";
            }
            if (usernameRef.current){
                usernameRef.current.value = "";
            }
            if (emailRef.current){
                emailRef.current.value = "";
            }
            if (MenRef.current){
                MenRef.current.checked = false;
            }
            if (WomenRef.current){
                WomenRef.current.checked = false;
            }
            if (telphoneRef.current){
                telphoneRef.current.value = "";
            }
            if (passwordRef.current){
                passwordRef.current.value = "";
            }
            if (AgainPasswordRef.current){
                AgainPasswordRef.current.value = "";
            }
            setname("");
            setfamily("");
            setemail("");
            setTelphone("");
            setusername("");
            setWomen(false);
            setMen(false);
            setGender("");
            setpassword("");
            setAgainPassword("");
        }
        if (MenRef.current){
            MenRef.current.checked = false;
        }
        if (WomenRef.current){
            WomenRef.current.checked = false;
        }
        setWomen(false);
        setMen(false);
    }
    return (
        <div>
            <div className={"h-screen w-full"}>
                <div className={"mt-[4px] ml-[4px]"}>
                    <Button className={"w-[25px] h-[25px]"}>
                        <LeftOutlined></LeftOutlined>
                    </Button>
                </div>
                <div className={"w-[100px] h-[100px] m-auto"}>
                    <img src={icon} alt={"icon"}/>
                </div>
                <div className={"flex justify-center items-center"}>
                    <h1 className={"text-center font-bold mt-[10px] text-[27px]"}>Create an New Account</h1>
                </div>
                <div className={"m-auto flex justify-center items-center w-full h-auto pt-[10px]"}>
                    <div className={"m-auto border-solid border-[2px] border-black p-[5px] rounded-[10px]"}>
                        <form className={"w-auto grid grid-cols-2 grid-rows-4 h-auto gap-[5px] rounded-[10px]"}
                              style={{direction: "rtl"}}>
                            <label htmlFor="name" className={"w-auto h-auto"}>
                                <p className={"mb-[5px] w-[100%]"}>نام:</p>
                                <input className={"w-[100%] border-solid border-black border-[2px] rounded-[8px]"}
                                       placeholder={"نام"} type={"text"} name={"name"} onChange={(event)=>setname(event.target.value)} ref={nameRef}/>
                                <span>
                                    <p className={"font-mono text-red-600 text-[10px]"}>{ErrorLengthName}</p>
                                </span>
                            </label>
                            <label htmlFor="family" className={"w-auto h-auto"}>
                                <p className={"mb-[5px] w-[100%]"}>نام خانوادگی:</p>
                                <input className={"w-[100%] border-solid border-black border-[2px] rounded-[8px]"}
                                       placeholder={"نام خانوادگی"} type={"text"} name={"family"} onChange={(event)=>setfamily(event.target.value)} ref={familyRef}/>
                                <span>
                                    <p className={"font-mono text-red-600 text-[10px]"}>{ErrorLengthFamily}</p>
                                </span>
                            </label>
                            <label htmlFor="username" className={"w-auto h-auto"}>
                                <p className={"mb-[5px] w-[100%]"}>نام کاربری:</p>
                                <input className={"w-[100%] border-solid border-black border-[2px] rounded-[8px]"}
                                       placeholder={"نام کاربری"} type={"text"} minLength={5} name={"username"} onChange={(event)=>setusername(event.target.value)}
                                ref={usernameRef}/>
                                <span>
                                    <p className={"font-mono text-red-600 text-[10px]"}>{ErrorLengthUsername}</p>
                                </span>
                            </label>
                            <label htmlFor="email" className={"w-auto h-auto"}>
                                <p className={"mb-[5px] w-[100%]"}>ایمیل:</p>
                                <input className={"w-[100%] border-solid border-black border-[2px] rounded-[8px]"}
                                       placeholder={"ایمیل"} type={"email"} name={"email"}
                                       onChange={(event) => setemail(event.target.value)} ref={emailRef}/>
                                <span>
                                    <p className={"font-mono text-red-600 text-[10px]"}>{ErrorLengthEmail}</p>
                                </span>
                                <span>
                                    <p className={"font-mono text-red-600 text-[10px]"}>{emailError}</p>
                                </span>
                            </label>
                            <label htmlFor="gender" className={"w-auto h-auto"}>
                            <p className={"mb-[5px] w-[100%]"}>جنسیت:</p>
                                <div className={"border-solid border-black border-[2px] rounded-[8px]"}>
                                    <input className={"border-solid border-black border-[2px] rounded-[8px]"}
                                           type={"radio"} name={"gender"} onChange={(event)=>setMen(event.target.checked)} ref={MenRef}/>
                                    <p className={"inline"}>مرد</p>
                                    <input className={"border-solid border-black border-[2px] rounded-[8px]"}
                                           type={"radio"} name={"gender"} onChange={(event)=>setWomen(event.target.checked)} ref={WomenRef}/>
                                    <p className={"inline"}>زن</p>
                                </div>
                                <span>
                                    <p className={"font-mono text-red-600 text-[10px]"}>{ErrorLengthGender}</p>
                                </span>
                            </label>
                            <label htmlFor="phone" className={"w-auto h-auto"}>
                                <p className={"mb-[5px] w-[100%]"}>شماره تلفن:</p>
                                <input className={"w-[100%] border-solid border-black border-[2px] rounded-[8px]"}
                                       placeholder={"شماره تلفن"} type={"tel"} minLength={11} maxLength={11}
                                       name={"phone"} onChange={(event) => setTelphone(event.target.value)} ref={telphoneRef}/>
                                <span>
                                    <p className={"font-mono text-red-600 text-[10px]"}>{ErrorLengthTelphone}</p>
                                </span>
                                <span>
                                    <p className={"font-mono text-red-600 text-[10px]"}>{ErrorTwoLengthTelphone}</p>
                                </span>
                            </label>
                            <label htmlFor="password" className={"w-auto h-auto"}>
                                <p className={"mb-[5px] w-[100%]"}>رمز عبور</p>
                                <div className={"border-solid border-black border-[2px] rounded-[8px]"}>
                                    <input className={"w-[90%] outline-none rounded-[8px]"} placeholder={"رمز عبور"}
                                           type={PasswordVisibel ? "text" : "password"} minLength={8}
                                           maxLength={16} name={"password"} onChange={(event)=>setpassword(event.target.value)} ref={passwordRef}></input>
                                    <span onClick={() => setPasswordVisibel(!PasswordVisibel)} className={"w-[10%]"}>
                                        {PasswordVisibel ? <EyeTwoTone className={"w-[10%]"}></EyeTwoTone> :
                                            <EyeInvisibleOutlined className={"w-[10%]"}></EyeInvisibleOutlined>}
                                    </span>
                                </div>
                                <span>
                                    <p className={"font-mono text-red-600 text-[10px]"}>{passwordError}</p>
                                </span>
                                <span>
                                    <p className={"font-mono text-red-600 text-[10px]"}>{ErrorLengthPassword}</p>
                                </span>
                            </label>
                            <label htmlFor="againPassword" className={"w-auto h-auto"}>
                                <p className={"mb-[5px] w-[100%]"}>تکرار رمز عبور:</p>
                                <div className={"border-solid border-black border-[2px] rounded-[8px]"}>
                                    <input className={"w-[90%] outline-none rounded-[8px]"}
                                           placeholder={"تکرار رمز عبور"} type={PasswordVisibel ? "text" : "password"}
                                           minLength={8} maxLength={16} name={"againPassword"} onChange={(event)=>setAgainPassword(event.target.value)}
                                     ref={AgainPasswordRef}/>
                                    <span onClick={() => setPasswordVisibel(!PasswordVisibel)} className={"w-[10%]"}>
                                        {PasswordVisibel ? <EyeTwoTone className={"w-[10%]"}></EyeTwoTone> :
                                            <EyeInvisibleOutlined className={"w-[10%]"}></EyeInvisibleOutlined>}
                                    </span>
                                </div>
                                <span>
                                    <p className={"font-mono text-red-600 text-[10px]"}>{ErrorPasAgain}</p>
                                </span>
                            </label>
                        </form>
                        <div className={"m-auto flex justify-center items-center"}>
                            <Button className={"w-[100%] mt-[15px]"} onClick={handelClickSubmit}>
                                <p className={"font-bold"}>Create Account</p>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CreateAccount;