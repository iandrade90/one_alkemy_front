import React from "react";
import Loader from "react-loader-spinner";

const position = {
    display:"flex",
    justifyContent:"space-around"
}

//Por defecto su tamaño es 100 * 100 al mandar un obj de config se permite modificar tamaño y posición.
const Spinner =(props)=>{
    return(
       <div style={props.position ? props.position : position }>
            <Loader
                type='TailSpin'
                color="#00BFFF"
                height={props.height ? props.position.height : 100}
                width={props.width ? props.position.width : 100}
            // timeout={3000} //3 secs
            />      
        </div> 
    )
}

export default Spinner;