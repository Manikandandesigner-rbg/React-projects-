import { useState } from "react";

function App() {
  const [ishoverd_about, set_about] = useState(false);

  return (
    <>
      <div className="flex items-center justify-between h-[100px] px-6">
        <div className="flex items-center gap-2">
          <i className="bx bxl-react text-blue-500 text-[32px]"></i>
          <p className="font-semibold text-[28px]">Liberetty</p>
        </div>
        <ul className="flex gap-4">
          <li className="flex items-center gap-1">
            <i className="bx bx-home"></i>
            <span>Home</span>
          </li>
          <li className="flex items-center gap-1">
            <i className="bx bx-box"></i>
            <span>Products</span>
          </li>
          <li className="flex items-center gap-1">
            <i className="bx bx-camera"></i>
            <span>Gallery</span>
          </li>
          <li
            className="flex items-center gap-1 relative" // Make this li relative
            onMouseEnter={() => set_about(true)}
            onMouseLeave={() => set_about(false)}
          >
            <i className="bx bx-info-circle"></i>
            <span>About</span>
            {}
            <div
              className={`absolute top-full left-0 mt-2 max-w-[200px] max-h-[200px] p-2 border-[4px] border-green-600 bg-white transition-opacity duration-300 ease-in-out ${
                ishoverd_about ? "opacity-100" : "opacity-0 pointer-events-none"
              }`}
            >
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil,
                possimus!
              </p>
            </div>
          </li>
          <li className="flex items-center gap-1">
            <i className="bx bx-envelope"></i>
            <span>Contact</span>
          </li>
        </ul>
        <div className="flex gap-2 items-center p-3">
          <p>
            <i className="bx bx-search mr-1"></i>
            cart
          </p>
          <div className="w-[20px] h-[20px] rounded-full bg-red-500">
            <p className="text-white text-center text-[14px]">1</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
