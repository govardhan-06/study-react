const ClickBtn=(props)=>{
    const handleClick=()=>{
        alert("Button Clicked");
        props.setCount(props.count+1);
    }
    const handleReset=()=>{
        alert("Count reset");
        props.setCount(0);
    }
    return(
        <div>
            <button onClick={handleReset}>
                Reset
            </button>
            <button onClick={handleClick}>
                Click Me!
            </button>
        </div>
    )
}

export default ClickBtn;