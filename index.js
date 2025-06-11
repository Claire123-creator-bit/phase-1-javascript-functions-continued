// Define a function using function declaration
function saturdayFun(activity = "roller-skate") {
  return `This Saturday, I want to ${activity}!`;
}

// Define a function using a function expression
const mondayWork = function(activity = "go to the office") {
  return `This Monday, I will ${activity}.`;
};

// Define a function that returns another function (closure)
function wrapAdjective(flair = "*") {
  return function(adjective = "special") {
    return `You are ${flair}${adjective}${flair}!`;
  };
}

// Example usage:
// console.log(saturdayFun()); // "This Saturday, I want to roller-skate!"
// console.log(saturdayFun("go hiking")); // "This Saturday, I want to go hiking!"
// console.log(mondayWork()); // "This Monday, I will go to the office."
// console.log(mondayWork("work from home")); // "This Monday, I will work from home."
// const wrapWithPercent = wrapAdjective("%");
// console.log(wrapWithPercent("a dedicated programmer")); // "You are %a dedicated programmer%!"

