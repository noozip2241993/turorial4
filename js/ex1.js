const name1 = prompt("Enter your name: ");
const units = Number(prompt("Enter your total of units completed at college: "));
console.log(name1)
if ((units>=0) && (units<=30)){
    console.log("Your grade standing is Freshman");
} else if ((units>=31) && (units<=60)){
    console.log("Your grade standing is Sophomore"); 
} else if ((units>=61) && (units<=90)){
    console.log("Your grade standing is Junior"); 
} else {
    console.log("Your grade standing is Senior"); 
}
