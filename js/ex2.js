let day = prompt("Enter three letter abbreviation in lower case: ");
console.log(`DayEntered is ${day}`)
switch(day){
    case "sun":
        console.log('FollowingDay is mon');
        break;
    case "mon":
        console.log('FollowingDay is tue');
        break;
    case "tue":
        console.log('FollowingDay is wed');
        break;
    case "wed":
        console.log('FollowingDay is thu');
        break;
    case "thu":
        console.log('FollowingDay is fri');
        break;
    case "fri":
        console.log('FollowingDay is sat');
        break;
    case "sat":
        console.log('FollowingDay is sun');
        break;
default:
    console.log('Not valid day')
break;
}