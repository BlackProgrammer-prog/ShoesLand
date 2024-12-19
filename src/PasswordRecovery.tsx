import {Button} from "antd";
import {LeftOutlined} from "@ant-design/icons";
import icon from "./assets/output.png";
function PasswordRecovery() {
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
                    <form className={"w-auto"} style={{direction: "rtl"}}>
                        <label>
                            <input/>
                        </label>
                        <div>
                            <Button>بازیابی رمز عبور</Button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        </div>
    );
}

export default PasswordRecovery;