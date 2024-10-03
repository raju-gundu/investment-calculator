import { useState } from "react";

const INITIAL_DATA = {
    initialInvestment: 100,
    annualInvestment: 100,
    expectedReturn: 5,
    duration: 10
}
export default function Input() {
    const [userInput,setUserInput] = useState(INITIAL_DATA);
    function handleDataChange(inputIdentifier,newValue){
        setUserInput((prevUserInput) => {
            return{
                ...prevUserInput,
                [inputIdentifier]: newValue
            }; 
        });
    }
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>Initial Investment</label>
          <input type="number" value={userInput.initialInvestment} required onChange={(event)=>handleDataChange('initialInvestment',event.target.value)}/>
        </p>
        <p>
          <label>Annual Investment</label>
          <input type="number" value={userInput.annualInvestment} required onChange={(event)=>handleDataChange('annualInvestment',event.target.value)}/>
        </p>
        </div>
        <div className="input-group">
        <p>
          <label>Expected Return</label>
          <input type="number" value={userInput.expectedReturn} required onChange={(event)=>handleDataChange('expectedReturn',event.target.value)}/>
        </p>
        <p>
          <label>Duration</label>
          <input type="number" value={userInput.duration} required onChange={(event)=>handleDataChange('duration',event.target.value)}/>
        </p>
      </div>
    </section>
  );
}
