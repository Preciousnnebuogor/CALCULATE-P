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