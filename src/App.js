import React , {useEffect , useState} from "react";
import "./index.css";
import { getAllService } from "./services";

function App() {
   const [is , setIs] = useState(null)
  useEffect(()=>{
    async function get (){
      await getAllService('/').then(d=>{ setIs(d)})
    }
    if(!is){
      get()
    }

  },[is])
  return <div className=''>
      <h1>Esto es app</h1>
  </div>;
}

export default App;
