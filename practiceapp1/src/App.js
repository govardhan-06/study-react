import { createContext, useState } from 'react';
import './App.css';
import Button from './components/Button';
import UniversalCounter from './components/UniversalCounter';
// import Card from './components/Card';
// import Counter from './components/Counter';
// import AlwaysUp from './components/AlwaysUp';
// import SingleEffect from './components/SingleEffect';
// import SingleVar from './components/SingleVar';
// import MulitEffect from './components/MulitEffect';
// import AutomatedCounter from './components/AutomatedCounter';

const ThemeContext = createContext();

function App() {
  //State Lifting between Parent and Child Components
  // var [name,setName]=useState("Govardhan");
  // //Conditional rendering
  // var [isLoggedIn,setIsLoggedIn]=useState(true);

  //if-else
  // if(isLoggedIn){
  //   return <h1>Welcome User</h1>
  // }
  // else{
  //   return <h1>Welcome Guest</h1>
  // }

  //early return
  // if(isLoggedIn){
  //   return <h1>Welcome User</h1>
  // }
  // return (
  //   <div className="App">
  //     <Counter/>
  //     {/* <input type="text" value={name} onChange={(e)=>setName(e.target.value)}/>
  //     <Card title="Card1" name={name} setName={setName}/>
  //     <Card title="Card2" name={name} setName={setName}/> */}

  //     {/* Conditional rendering */}
  //     {/* Ternary Operator */}
  //     {isLoggedIn?<h1>Welcome User</h1>:<h1>Welcome Guest</h1>}
  //     {/* Logical Operator */}
  //     {isLoggedIn&&<h1>Welcome User</h1>}
  //     {isLoggedIn||<h1>Welcome User</h1>}
  //   </div>
  // );

  const [theme, setTheme] = useState("light");

  return(
    // <AlwaysUp/>
    // <SingleEffect/>
    // <SingleVar/>
    // <MulitEffect/>
    // <AutomatedCounter/>
    // <ThemeContext.Provider value={{theme,setTheme}}>
    //   <div id="container" style={{backgroundColor: (theme==="light"?"beige":"black")}}>
    //     <Button/>
    //   </div>
    // </ThemeContext.Provider>
    <UniversalCounter/>
  )
}

export default App
export {ThemeContext}
