// Code your solution in this file!
function distanceFromHqInBlocks(block){
    return Math.abs (42 - block);
}
//
function distanceFromHqInFeet(feet){
    distanceFromHqInBlocks(feet);
    return Math.abs ((42 - feet) * 264);
}
//
function distanceTravelledInFeet(start, destination){
    return Math.abs((destination - start) * 264);
}
//
function calculatesFarePrice(start,destination){
    let distance = distanceTravelledInFeet(start,destination);
    if (distance<= 400){
      return 0;
    }
    if (distance>=400 && distance<=2000){
      return (distance-400)* 0.02;
    }
    else if(distance>=2000&& distance<=2500){
      return 25;
    }
    else if (distance > 2500){
      return "cannot travel that far";
    }
  }