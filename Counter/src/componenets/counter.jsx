import { useState } from "react";
function Name() {
    const [value,setvalue] = useState(0);
  return (
    <>
      <div className="w-[200px] h-[200px] bg-red-400 text-center rounded-lg relative">
        <h2 className="text-3xl font-serif pt-2 ">Counter</h2>
        <div className="m-7">
          <i className="bx bx-minus-circle bg-white absolute text-[48px]  text-black  shadow-md rounded-md left-[-10%] transition-colors duration-400 hover:cursor-pointer hover:bg-black hover:text-white" onClick={()=>{
            if(value>0){setvalue(value-1)}}}></i>
        </div>
        <div className="m-7">
          <i className="bx bx-plus-circle bg-white absolute text-[48px] text-black  shadow-md rounded-md right-[-10%] transition-colors duration-400 hover:cursor-pointer hover:bg-black hover:text-white" onClick={()=>{setvalue(value+1)}}></i>
        </div>
        <h2 className="text-5xl">{value}</h2>
      </div>
    </>
  );
}

export default Name;
