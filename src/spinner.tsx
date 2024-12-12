import React from "react";
const Spinner :React.FC=()=>{
    return(
        <div className={"flex justify-center items-center mt-[60%]"}>
            <div className={"w-[30px] h-[30px] border-4 border-black border-t-white rounded-full animate-spin"}></div>
        </div>
    )
}
export default Spinner