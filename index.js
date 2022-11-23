// Code your solution in this file!
function distanceFromHqInBlocks (someValue){
    const hq = 42;
    let distance = someValue - hq
    if (someValue < hq){
        distance = Math.abs(someValue - hq)
    }
    else if (someValue >= hq){
        distance = someValue - hq;
    }
    return distance

}
function distanceFromHqInFeet(someValue){
    return (distanceFromHqInBlocks(someValue) * 264);
}
function distanceTravelledInFeet(start,destination){
     let y = destination - start;
     if(y < 0){
        y = Math.abs(y);
     }
     else if (y >= 0){
        y = y
     }
     return (y * 264);
}
console.log(distanceTravelledInFeet(43,50))

function calculatesFarePrice(start,destination){
     let y = distanceTravelledInFeet(start,destination)
     let price;
    if (y <= 400){
        price = 0;
      }
    else if (y > 400 && y < 2000){
        price = ((y - 400) * 2)/100;
    }
      else if (y > 2000 && y < 2500){
        price = 25;
      }
      else if ( y > 2500 ){
        price = ("cannot travel that far");
}
return price;
}
console.log(calculatesFarePrice(43,50))
