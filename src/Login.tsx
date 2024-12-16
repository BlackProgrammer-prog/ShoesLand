import icon from './assets/output.png';
import {Button} from 'antd';
import {LeftOutlined} from '@ant-design/icons';
import {MailOutlined,LockOutlined,EyeTwoTone,EyeInvisibleOutlined} from '@ant-design/icons'
import './App.css';
import './index.css';
import React, {useState} from "react";
function Login() {
    const [PasswordVisible,setPasswordVisible] = useState<boolean>(false);
    const [email,setEmail] = useState<string>("");
    const [password,setPassword] = useState<string>("");
    const [emailError,setEmailError] = useState<string>("");
    const [passwordError,setPasswordError] = useState<string>("");
    const CheckEmail = (email:string):boolean=>{
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };
    const CheckPassword = (password:string):boolean=>{
        const passwordRegex = /[@#$!]/;
        return passwordRegex.test(password);
    };
    const handelSubmit = (event:React.FormEvent)=>{
        event.preventDefault();
        if (!CheckEmail(email)){
            setEmailError("ایمیل معتبر نیست");
            console.log("ایمیل معتبر نیست")
        }
        else {
            setEmailError("");
        }
        if (!CheckPassword(password)){
            setPasswordError("پسورد باید حداقل یکی از کاراکترهای @#$! را شامل باشد");
            console.log("پسورد باید حداقل یکی از کاراکترهای @#$! را شامل باشد")
        }
        else {
            setPasswordError("");
        }
    };
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
                    <h1 className={"text-center font-bold mt-[10px] text-[27px]"}>Login to Your Account</h1>
                </div>
                <div className={"flex justify-center items-center w-full"}>
                    <form className={"w-[80%]"}>
                        <label
                            className={"block mt-[10px] w-[340px] focus:outline-none focus-within:ring-2 focus-within:ring-black"}
                            style={{backgroundColor: "#fafafa"}}>
                            <MailOutlined></MailOutlined>
                            <input type={"email"} placeholder={"Email"} style={{backgroundColor: "#fafafa"}} className={"w-[95%] outline-none"} onChange={(e)=> setEmail(e.target.value)}></input>
                            {emailError && <div><p className={"text-center text-red-600 font-bold"} style={{fontSize : "small"}}>{emailError}</p></div>}
                        </label>
                        <label
                            className={"block mt-[15px] w-[340px] focus:outline-none focus-within:ring-2 focus-within:ring-black"}
                            style={{backgroundColor: "#fafafa"}}>
                            <LockOutlined></LockOutlined>
                            <input type={PasswordVisible ? "text" : "password"} placeholder={"Password"} style={{backgroundColor: "#fafafa"}} className={"w-[90%] outline-none"} onChange={(pas)=> setPassword(pas.target.value)}/>
                            <span onClick={() => setPasswordVisible(!PasswordVisible)}>
                                {PasswordVisible ? <EyeTwoTone></EyeTwoTone> : <EyeInvisibleOutlined></EyeInvisibleOutlined>}
                            </span>
                            {passwordError && <div><p className={"text-center text-red-600 font-bold"} style={{fontSize : "small"}}>{passwordError}</p></div>}
                        </label>
                        <label className={"block mt-[15px] w-[340px]"}>
                            <input type={"checkbox"}/>
                            <p className={"inline"}>Remember me</p>
                        </label>
                    </form>
                </div>
                <div className={"m-auto flex justify-center items-center w-full"}>
                    <Button style={{backgroundColor: "#6e7174"}} className={"text-white w-[90%] m-auto top-[140px]"} onClick={handelSubmit}>Sing in</Button>
                </div>
            </div>
        </div>
    );
}

export default Login;