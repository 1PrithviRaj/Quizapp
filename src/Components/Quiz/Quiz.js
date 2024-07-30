import React from "react";
import { useState } from "react";

import './quiz.css' 
import {data} from '../../data';

export default function Quiz() {
  const[index,SetIndex] = useState(0)
  const[question,SetQuestion] = useState(data[index])
  const[score,SetScore] = useState(0)
  const[option,setSelectedOption]=useState(null)
  const correctAnswers = [
    'option1',
    'option1',
    'option1',
    'option1'
  ];
  
const handleNext=()=>{
if(correctAnswers[index]=== option){
  SetScore(score+1)
}
setSelectedOption(null);
  if(index<data.length-1){
  SetIndex(index+1)
  SetQuestion(data[index+1])
  }
  else{
SetIndex(index+1)
  }
}
const handleSelectedOption=(option)=>{
  setSelectedOption(option)
}

  return (
    <div className="quiz">
      <h1>Quiz App</h1>
      {index< data.length ? 
      (
        <>
      <h3>{question.question}</h3>
      <ul>
        <li className={option==='option1'?'selected':''}
         onClick={()=>handleSelectedOption ('option1')}>{question.option1}</li>
        <li className={option==='option2'?'selected':''}
        onClick={()=>handleSelectedOption('option2')}>{question.option2}</li>
        <li className={option==='option3'?'selected':''}
        onClick={()=>handleSelectedOption('option3')}>{question.option3}</li>
        <li className={option==='option4'?'selected':''}
        onClick={()=>handleSelectedOption('option4')}>{question.option4}</li>
      </ul>
      <button onClick={handleNext}>Next</button>
      <div> Question{index+1} of {data.length}</div>
</>
    ) : (
      <div>
        <h3>QUiZ FINISHED.....</h3>
        <p>Your score is {score} out of {data.length}</p>

      </div>
    )
  }
    </div>

  );
}
