import { useEffect, useState } from "react";
import "./App.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Color from "./Color";
import { generatePallete } from "./utils";

function App() {
  const [colorPallete, setColorPallete] = useState([]);

  useEffect(() => {
    setColorPallete(generatePallete);
  }, []);
  const handleClick = () => {
    setColorPallete(generatePallete);
  };

  const showToast = (code) =>
    toast.success(`Color Copied: ${code}`, {
      position: "top-left",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

  return (
    <>
      <ToastContainer
        position="top-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <div className="container">
        <div className="title">Click the button to generate random colors.</div>
        <div className="pallete-container">
          {colorPallete.map((color, indx) => {
            return <Color code={color} key={indx} showToast={showToast} />;
          })}
        </div>
        <button onClick={handleClick}>Generate Color Pallete</button>
      </div>
    </>
  );
}

export default App;
