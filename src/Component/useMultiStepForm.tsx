//This is to control every steps page 1,2,3 of the form 

import { ReactElement, useState } from "react";

export default function useMultiStepForm(steps: ReactElement[]) {
  //track which steps we are currently on

  const [currentStepIndex, setCurrentStepIndex] = useState(0) // by default we are going to start at 0 

  //next would be to read the current page and then add 1 to the index, however if its at the maximum page then we stop 
  function next() {
    setCurrentStepIndex(i => {
      if (i >= steps.length - 1) { return i }//if I am at the last step no need to add 1 
      else { return i + 1 }

    })
  }


  //back would be to go to previous page 
  function back() {
    setCurrentStepIndex(i => {
      if (i > 0) { return i - 1 }//if I am already at the step 0 then we will not -1 
      else { return i }
    })
  }


  //this is to update the counter of which page we are in right now

  function goTo(index: number) {
    setCurrentStepIndex(index)
  }

  return {
    // we want our hook to return all the below so we can use them in any page 
    currentStepIndex,
    step: steps[currentStepIndex],
    goTo,
    next,
    back,
    steps,
    isFirstStep: currentStepIndex === 0,
    isLastStep: currentStepIndex === steps.length - 1,
  }

}
