import { useState } from "react"


function App() {
       const [color,setColor]=useState("Black");              
                 
  return (
    <>
      <div className="w-full h-screen duration-200 grid place-content-center fixed "style={{backgroundColor:color}}>
                  <div className="  bg-red-200 p-4   w-full mx-auto lg:flex justify-center items-center gap-12 flex-wrap md:flex-shrink  gap-y-4 ">
                  <button onClick={()=>setColor("red")}  className=" w-[200px] h-[50px] rounded-lg shadow-xl md:m-4  text-center bg-red-700 text-white sm:block m-4" >red</button>
                 <button onClick={()=>setColor("gray")}  className=" w-[200px] h-[50px] rounded-lg  shadow-xl  md:m-4  text-center bg-gray-700 text-white sm:block m-4" >gray</button>
                  <button onClick={()=>setColor("yellow")}  className="-20  w-[200px] h-[50px] rounded-lg shadow-xl  md:m-4  text-center bg-yellow-700 text-white  sm:block m-4" >yellow</button>
                   <button onClick={()=>setColor("blue")}  className="   w-[200px] h-[50px] rounded-lg  shadow-lg  md:m-4  text-center bg-blue-700 text-white sm:block m-4" >Blue</button>
                    <button onClick={()=>setColor("green")}  className="   w-[200px] h-[50px] rounded-lg shadow-lg  md:m-4   text-center bg-green-700 text-white sm:block m-4" >Green</button>
                 
                 
                 
                  </div>
      </div>
    </>
  )
}

export default App
