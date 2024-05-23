if("2" !== 2){
    console.log("executed");
}

const balance = 500

if( balance > 300 ) console.log("Eligible");  // short hand notation

const userLoggedIn = true
const debitCard = true
const loginFromGmail = true
const loginFromEmail = false


if(userLoggedIn && debitCard && loginFromEmail){
    console.log("user authenticated");
}
else{
    console.log("user is not authenticated");
}

if(userLoggedIn || loginFromEmail || loginFromGmail){
    console.log( "authorized");
}else{
    console.log("unauthorized");
}