// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }



//“When we want to compare one value with many possible options,
//  switch-case is easier and cleaner than multiple if-else.”

const month = "march"

switch (month) {
    case "jan":
        console.log("january");
        break;

    case "feb":
        console.log("feb");
        break;
        
        

    case "march":
        console.log("March");
        break;

    case "april":
        console.log("April");
        break;
        


    default:
        console.log("deafalut case match");
        
        break;
}

// “If we don't use break after the matched case,
//  JavaScript will execute all the cases below it,
//  including the default case,  until it finds a break.

