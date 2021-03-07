import React, {useState, useRef, useEffect } from 'react'
import "../../src/App.css"
function Dropdown({options, prompt, value, onChange, id, label, code}) {
const [open, setOpen ] = useState(false);
const ref = useRef(null)
const [ query, setQuery ] = useState("");
useEffect(()=>{
    document.addEventListener("click", close);
    return ()=> document.removeEventListener("click", close)
}, []);

function close(e){
    setOpen(e && e.target === ref.current);
}

function filter (options){
    return options.filter(option => option[label].toLowerCase().indexOf(query.toLowerCase()) > -1);
}

function displayValue(){
    if(query.length > 0) return query;
    if(value) return value[label];
    return ""
     
}
    return (
        <>
       <div className = "dropdown">

           <div className = "control" onClick ={()=>setOpen(prev => !prev)}>

               <div className = "selected-value"> 
               <input type="text" 
               placeholder = {value? value[label]: prompt} 
               value = {displayValue()} 
               onChange = {e =>{
                   setQuery(e.target.value)
                   onChange(null)
                }
                    }
                    
                ref={ref}
                onClick = {()=> setOpen(prev => !prev)}
                />
                </div>
               <div className = {`arrow ${open ? "open" : null}`}/>

           </div>

           <div key ={options[id]} className = {`options ${open ? "open" : null}`}>
               {
                   filter(options).map(option => (
                   <div className ={`option${value === option? "selected": null }`} onClick = {()=>{
                       setQuery("")
                       onChange(option);
                       setOpen(false);
                }}>
                    {option[label]}</div>
                   ))
               }
            
           </div>

       </div>
        </>
    )
}

export default Dropdown