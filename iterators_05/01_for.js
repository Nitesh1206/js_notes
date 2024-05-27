for (let i = 0; i <= 10; i++) {
    const element = i
    
    if(element === 5){
        console.log(`${i} is my favourite no`);
    }

    console.log(element);
}

for (let i = 0; i <=5; i++) {
    console.log(i);

    for (let j = 0; j <=10; j++) {
        console.log(`INNER LOOP ${j} OUTER LOOP ${i} `);
    }
    
}

const newArray = ["Ant Man", "Vision", "Falcon", "Ms Marvel", "Scarlet Witch"]

for (let hero = 0; hero < newArray.length; hero++) {
    const element = newArray[hero];
    console.log(element);
}


// break and continue ki kahani

for (let index = 1; index <= 10; index++) {
   if(index == 5){
    console.log("5 is detected");
    break; // break will terminate the execution and come out of program flow where condition is met
}
    console.log(index);
}


for (let index = 1; index <= 10; index++) {
    if(index == 5){
     console.log("5 is detected");
     continue; // continue will skip the current itteration and jump to the next if the particular condition is met
 }
     console.log(index);
 }


 // NOTE : break terminate the current flow and come out of that block or scope
 // continue skip the current itteration but doesn't come out or terminate that block or scope