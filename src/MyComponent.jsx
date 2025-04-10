import React,{useState} from "react"

function MyComponent (){

    const [name,setName] = useState("guest");
    const [age,setAge] = useState(0);
    const [isEmployed,setIsEmployed] = useState(true);
 
    // const handleName = () => {
    //     setName("Boss Shohan")
    // }
    const handleName = (e) => {
        e.target.textContent = "updated",
        setName("Boss Shohan") 
    }
    const handleAge = (e) => {
        e.target.textContent = "incrementing",
        setAge(age+1);
    } 
    const handleIsEmployed = (e)=> {
        e.target.textContent = "changed",
        setIsEmployed(!isEmployed);
    }




    



    return(
        <div>
            <p>Name:{name} </p>
            <button onClick={handleName}>Update name</button>

            <p>Age: {age}</p>
            <button onClick={handleAge}>Increment age</button>

            <p>Is Employed: {isEmployed}</p>
            <button onClick={handleIsEmployed}>Toggle status</button>
        </div>
    )
}

export default MyComponent 