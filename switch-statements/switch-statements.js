let day = "hjdkjdkdkdkl"

switch(day){
    case 'Monday':
        console.log("7am");
        break;
    case 'Tuesday':
    case 'Wednesday':
    case 'Thurday':
        console.log("4am");
        break;
    case 'Friday':
        console.log("8am");
        break;
    case 'Saturday':
    case 'Sunday':
        console.log("9am");
        break;
    default:
        console.log("sleep")
       
}

console.log("bye")