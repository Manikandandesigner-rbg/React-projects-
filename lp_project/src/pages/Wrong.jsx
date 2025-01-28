import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Wrong() {
  const navigate = useNavigate();
  const [noButtonPosition, setNoButtonPosition] = useState({ top: '0', left: '0' });

  const handleYesClick = () => {
    navigate("/yes");
  };

  const handleNoHover = () => {
    const randomTop = Math.floor(Math.random() * 80) + '%';
    const randomLeft = Math.floor(Math.random() * 80) + '%';
    setNoButtonPosition({ top: randomTop, left: randomLeft });
  };

  return (
    <div className="flex justify-center flex-col">
      <video src="/gifs/peach-goma-phone.webm" className="w-[200px] h-[200px] ml-[200px] mb-6" controls autoPlay loop muted>
      </video>
      <div className="flex flex-col justify-center items-center">
        <h2 className="text-3xl text-black font-mono font-semibold">Baby Man go! How much emotion do you want?</h2>
        <p className="text-black text-[24px] mt-4">You are talking very wrong friend😭</p>
      </div>
      <div className="flex gap-5 justify-center mt-5 relative">
        <button
          className="text-black bg-white text-2xl p-2 rounded-lg w-[80px] transition-colors duration-400 hover:bg-black hover:text-white focus:outline-none"
          onClick={handleYesClick}
        >
          Yes
        </button>
        <button
          className="text-black bg-white text-2xl p-2 rounded-lg w-[80px] hover:bg-black hover:text-white focus:outline-none absolute"
          style={{ top: noButtonPosition.top, left: noButtonPosition.left }}
          onMouseEnter={handleNoHover}
        >
          No
        </button>
      </div>
    </div>
  );
}

export default Wrong;
