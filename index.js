// Code your solution in this file!
const returnFirstTwoDrivers = function (arr){
  const answer = function (){
    let result = [];
      result.push(arr[0]);
      result.push(arr[1]);
    return result;
  }
  return answer()
}

const returnLastTwoDrivers = function (arr){
    let result = [];
    result.push(arr[arr.length - 2]);
    result.push(arr[arr.length - 1]);
    return result;
}

const selectingDrivers = [
  returnFirstTwoDrivers,
  returnLastTwoDrivers
]

function createFareMultiplier(num){
  const multiplier = function (n){
    return num * n;
  }
  return multiplier;
}

function fareDoubler(num){
  return num * 2;
}

function fareTripler(num){
  return num * 3;
}

function selectDifferentDrivers(array, func){
  return func(array);
}
