import Button from "./components/Button";
import { useCounter } from "./store";

function App() {
  //  const count = useCounter(state=> state.count) *first way of using our data*

  const { count } = useCounter(); // second way is to destructure

  return (
    <div className="bg-mint-100 bg-blur-sm flex flex-col items-center justify-center w-full h-screen ">
      <div className=" mt-12 border-t-2 shadow-md shadow-black/100 bg-blue-400 w-60 h-60 rounded-2xl  ">
        <h1 className=" text-center mt-5 p-2 font-poppins text-2xl">
          {" "}
          Count: {count}{" "}
        </h1>
        <Button/>
            </div>
    </div>
  );
}

export default App;
