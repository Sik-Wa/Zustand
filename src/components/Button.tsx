import { useCounter } from "../store"



const Button = () => {
    const { increment, decrement } = useCounter(); 
  return (
    <>
        <div className=" mt-10 flex items-center justify-evenly ">
          <button
            onClick={increment}
            className=" rounded-md bg-black/60 text-white hover:bg-green-500 hover:text-black px-2 py-1 "
          >
            inc +{" "}
          </button>
          <button
            onClick={decrement}
            className=" hover:bg-red-500 hover:text-black rounded-md bg-black/60 text-white px-2 py-1"
          >
            dec -
          </button>
        </div>

    </>
  )
}

export default Button
