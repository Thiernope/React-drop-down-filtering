import React, { useState, useEffect }from 'react'
import data from "../countries.json";
import Dropdown from "./Dropdown";
function Form() {
    const [ name, setName ] = useState({firstName:"", lastName:""})
    const [value, setValue ] = useState(null);
    const label = "name";
    const submit = (e)=>{
        alert(`${name.firstName} ... ${name.lastName} ....${value[label]}`)
        e.preventDefault()
    }
    
    useEffect(()=>{
        document.title = "Signup form"
    })
    return (
        <>
            <form onSubmit = {submit} className ="form">
                <input type="text" value={name.firstName} placeholder="Enter first name" onChange ={e=>setName({...name, firstName: e.target.value})}/> <br/><br/>
                <input type="text" value={name.lastName} placeholder="Enter last name" onChange ={e=>setName({...name, lastName: e.target.value})}/><br/><br/>
                <Dropdown options = {data} code ="code" id = "id" label ="name" prompt ={"Select Country"} value = {value} onChange = {val => setValue(val)}/>
                <button type="submit">Submit</button>
            </form>
        </>
    )
}

export default Form