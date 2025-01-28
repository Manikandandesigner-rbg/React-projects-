import { useNavigate } from "react-router-dom";

function Yours() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/think");
  };
  return (
    <div className="flex justify-center flex-col ">
      <video src="/gifs/manja.webm" className="w-[200px] h-[200px] ml-[60px] mb-6" controls autoPlay loop muted>
      </video>
      <div className="flex flex-col justify-center items-center">
        <h2 className="text-3xl text-black font-mono font-semibold">Do you love me?</h2>
        <p className="text-black text-[24px] mt-4">~I am all yours.I am only yours</p>
      </div>
      <div className="flex gap-5 justify-center mt-5">
        <button className="text-black bg-white text-2xl p-2 rounded-lg w-[80px] transition-colors duration-400 hover:bg-black hover:text-white focus:outline-none">Yes</button>
        <button className="text-black bg-white text-2xl p-2 rounded-lg w-[80px] hover:bg-black hover:text-white focus:outline-none" onClick={handleClick}>No</button>
      </div>
    </div>
  );
}

export default Yours;
