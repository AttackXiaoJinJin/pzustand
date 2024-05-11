import useArrayRerender from "../demo/useArrayRerender";
import useComputation from "../demo/useComputation";
import {useState} from "react";

function PageA(){
  useComputation()

  return <div>pageA</div>
}
function PageB(){
  useComputation()

  return <div>pageB</div>
}

function App() {
  const [page,setPage]=useState(0)
  // useArrayRerender()


  return (<div>
    <button onClick={()=>{
      setPage(0)
    }}>pageA</button>
    <button onClick={()=>{
      setPage(1)
    }}>pageB</button>
    {page===0&&<PageA/>}
    {page===1&&<PageB/>}
  </div>)
}

export default App
