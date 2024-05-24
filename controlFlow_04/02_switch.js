let day = 2

switch(day){
    case 1 : console.log("monday")
    break;
    case 2 : console.log("tuesday")
    break;
    case 3 : console.log("wednesday");
    
    default : console.log("default case");   
}

// NOTE : break is used to terminate the execution if condition met, the flow separate the condition with the help of break
// if break is missing then the flow think the current and next case is same and print both the result
// in above eg. i miss to add the break in case 3, so the output is : wednesday and default case