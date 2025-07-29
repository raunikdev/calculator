import { useState, useRef, useEffect } from "react";
import "./calculator.css";
import { evaluate } from "mathjs";
function Calculator() {
  const [inputValue, setInputNumber] = useState("");
  const displayRef = useRef(null);

  const addvalueHandler = (value) => {
    setInputNumber((prev) => prev + value);
  };
  const answer = () => {
    try {
      const result = evaluate(inputValue);
      setInputNumber(result);
    } catch (error) {
      alert("Invalid expression!");
    }
  };

  useEffect(() => {
    const el = displayRef.current;
    if (el) {
      el.scrollLeft = el.scrollWidth;
    }
  }, [inputValue]);
  return (
    <>
      <div className="allcalculator">
        <div
          ref={displayRef}
          //   ref={inputRef}
          //   onFocus={handleFocus}
          className="hide-scroll display"
          style={{
            overflowX: "auto",
            whiteSpace: "nowrap",
            textAlign: "right",
            scrollbarWidth: "none", // for Firefox
            msOverflowStyle: "none", // for IE/Edge
          }}
          placeholder="0"
        >
          {inputValue}
        </div>

        <div className="all-buttons">
          <div className="grey" onClick={() => setInputNumber("")}>
            AC
          </div>
          <div
            className="grey"
            onClick={() => setInputNumber((prev) => prev.slice(0, -1))}
          >
            C
          </div>
          <div className="grey" onClick={() => addvalueHandler("%")}>
            %
          </div>
          <div className="orange" onClick={() => addvalueHandler("/")}>
            <span className="divide">&divide;</span>
          </div>

          <div className="black" onClick={() => addvalueHandler(7)}>
            7
          </div>
          <div className="black" onClick={() => addvalueHandler(8)}>
            8
          </div>
          <div className="black" onClick={() => addvalueHandler(9)}>
            9
          </div>
          <div className="orange" onClick={() => addvalueHandler("*")}>
            X
          </div>

          <div className="black" onClick={() => addvalueHandler(4)}>
            4
          </div>
          <div className="black" onClick={() => addvalueHandler(5)}>
            5
          </div>
          <div className="black" onClick={() => addvalueHandler(6)}>
            6
          </div>
          <div className="orange" onClick={() => addvalueHandler("-")}>
            -
          </div>

          <div className="black" onClick={() => addvalueHandler(1)}>
            1
          </div>
          <div className="black" onClick={() => addvalueHandler(2)}>
            2
          </div>
          <div className="black" onClick={() => addvalueHandler(3)}>
            3
          </div>
          <div className="orange" onClick={() => addvalueHandler("+")}>
            +
          </div>

          <div className="black" onClick={() => addvalueHandler("00")}>
            00
          </div>
          <div className="black" onClick={() => addvalueHandler(0)}>
            0
          </div>
          <div className="black" onClick={() => addvalueHandler(".")}>
            .
          </div>
          <div className="orange" onClick={answer}>
            =
          </div>
        </div>
      </div>
    </>
  );
}
export default Calculator;

// import {useState} from 'react'
// import {evaluate} from 'mathjs'
// function Calculator(){
//     const [inputNumber, setInputNumber] = useState(0);
//     let [value,setValue] = useState("");
//     // value = inputNumber;
//     const [isclicked,Setisclicked] = useState(false);

//     const inputNumberHandler=(event)=>{
//         setInputNumber(event.target.value);
//         setValue(event.target.value);
//         console.log(event.target.value);
//         console.log("value: " + value)
//     }
//     const plusAdd =()=>{
//         if(inputNumber===""){
//             alert("enter number")
//         }
//         else{
//             console.log(value)
//             setInputNumber((prev) => prev + "+");
//             setValue([inputNumber])

//             console.log(value)

//             Setisclicked((p)=>!p)

//         }

//     }
//     const answer =()=>{
//         setValue(evaluate(value))

//     }
//     return(
//         <>
//             <input value={inputNumber}
//                    onChange={inputNumberHandler}
//                    type="text"/>
//             <button onClick={plusAdd} style={{backgroundColor: isclicked === true? 'red': 'white'}}>+</button>
//             <button onClick={answer}>Enter</button>
//             <p>
//                 {value}
//             </p>
//         </>
//     )
// }
// export default Calculator;
