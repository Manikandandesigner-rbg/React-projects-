import  { useState } from "react";

function List() {
  const [items, setItems] = useState([]);
  const [inputValue, setInputValue] = useState("");

  function setting(e) {
    let values = e.target.value;
    if(values.trim()===""){
      return;
    }
    setInputValue(values);
  }

  function adding() {
    setItems([...items, { text: inputValue, checked: false }]);
    setInputValue("");
  }

  function toggleCheck(index) {
    setItems(items.map((item, i) =>
      i === index ? { ...item, checked: !item.checked } : item
    ));
  }

  return (
    <>
      <div className="w-[450px] bg-white h-[300px] rounded-xl pt-8 pl-6 flex flex-col">
        <p className="text-black font-bold text-[24px]">
          To-Do List
          <i className="bx bx-notepad text-black ml-4 pt-1"></i>
        </p>
        <div className="mr-6 mt-4 bg-slate-200 rounded-full flex items-center">
          <input
            type="text"
            className="bg-slate-200 rounded-full px-4 py-2 w-[100%] h-[100%] text-black text-[16px] font-sans font-semibold border-none outline-none"
            placeholder="Add your text"
            value={inputValue}
            onChange={setting}
          />
          <button
            className="bg-orange-500 text-white rounded-full px-4 py-2 ml-2 border-none focus:outline-none"
            onClick={adding}
          >
            Add
          </button>
        </div>
        <div>
          <ul className="flex flex-col">
            {items.map((item, index) => (
              <div key={index} className="flex flex-row m-1 items-center">
                <button
                  className="mr-2 border-black border-[2px] border-none outline-none focus:outline-none inline-flex items-center justify-center w-3 h-3 rounded-full bg-orange-400"
                  onClick={() => toggleCheck(index)}
                >
                  {item.checked ? <i className="bx bx-move-vertical"></i> : null}
                </button>
                <li className={`text-black ${item.checked ? "line-through" : ""}`}>
                  {item.text}
                </li>
              </div>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default List;
