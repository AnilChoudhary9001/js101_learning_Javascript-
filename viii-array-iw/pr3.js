// Given an array of numbers find the average of all the even numbers.
// Submission Link


let a=[1,2,3,4,5,6,7,9,8,10]
let sum=0;
let count=0;
for(let i=0;i<a.length;i++){
  sum=sum+a[i];
  count++
}
console.log(sum/count);