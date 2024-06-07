let value = 40
switch (typeof value) {
    case "number":
        console.log("good")
        break;
        case "string":
        console.log("wrong")
        break;

    default:
        console.log("fail")
        break;
}

let dayName = 2
switch (dayName) {
    case 1: 
        console.log("monday")
        
        break;
        case 2:
            console.log("tuesday")
            
            break;
    
    default:
        console.log("sunday") 
        break;
}
console.log("this is " + dayName)