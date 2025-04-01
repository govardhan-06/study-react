import {useContext } from "react";
import {ThemeContext} from "../App";

const Button=()=>{
    const {theme,setTheme}=useContext(ThemeContext);

    const toggleTheme=()=>{
        setTheme((theme)=>theme==='light'?'dark':'light');
    }
    return(
        <button onClick={toggleTheme} className="btn btn-primary">
            {theme==='light'?'Switch to Dark Mode':'Switch to Light Mode'}
        </button>
    )
}

export default Button;