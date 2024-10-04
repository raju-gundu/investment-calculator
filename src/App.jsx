import { useState } from "react";
import Header from "./components/Header/Header";
import Input from "./components/Input/Input";
import Results from "./components/Results/Results";

const INITIAL_DATA = {
  initialInvestment: 100,
  annualInvestment: 100,
  expectedReturn: 5,
  duration: 10
}
function App() {
  const [userInput,setUserInput] = useState(INITIAL_DATA);

  const inputIsValid = userInput.duration >=1;

  function handleDataChange(inputIdentifier,newValue){
    setUserInput((prevUserInput) => {
        return{
            ...prevUserInput,
            [inputIdentifier]: +newValue
        }; 
    });
}
  return (
    <>
      <Header />
      <Input onChangeInput = {handleDataChange} userInput={userInput}/>
      {!inputIsValid && <p className="center">Please enter a duration greater than 0</p>}
      { inputIsValid && <Results userInput={userInput}/>}
    </>
  );
}

export default App;
