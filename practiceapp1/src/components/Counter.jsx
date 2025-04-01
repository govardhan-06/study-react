import React,{useState} from "react";

export default function Counter(){
    var [name,setName]=useState("");
    var [age,setAge]=useState(0);
    var [isLoggedIn,setIsLoggedIn]=useState(false);

    function handleSubmit(e){
        e.preventDefault();
        console.log(name,age);
        setIsLoggedIn(!isLoggedIn);
    }

    function handleName(e){
        console.log(e.target.value);    
        setName(e.target.value);
    }

    function handleAge(e){
        console.log(e.target.value); 
        e.stopPropagation(); // stop bubbling up to the parent element   
        //if the same function is used for both inputs, then use this to prevent bubbling up
        // e.stopPropagation(); // stop bubbling up to the parent element
        setAge(e.target.value);
    }
    return(
        <div>
            <form>
                {/* below dont put handleName() <- triggers on-spot invocation */}
                <input type="text" onChange={handleName} />
                <input type="number" onChange={handleAge} />
                <button onClick={handleSubmit}>Submit</button>
            </form>
        </div>
    )
}