//Reverse a String

function reverseString(str) {
a = str.split('');
b = a.reverse();
c = b.join('');
return c;
}

//Factorialize a Number

function factorialize(num) {
var arr =[];
for (i=1;i<=num;i++){
arr.push(i);
}
return arr.reduce(function(a,b){
return a * b;
 }, 1);
}

//Check for Palindromes

function palindrome(str) {
ini = str.toLowerCase();
desym = ini.replace(/[\W_]/g,'');
a = desym.split('');
b = a.reverse();
c = b.join('');
if (c == desym){
return true;
  }else{
  return false;
 }
}

//Find the Longest Word in a String

function findLongestWord(str) {
var max = 0;
a = str.split(' ');
for (i=0;i<a.length;i++){
if (a[i].length>max){
max = a[i].length;
    }
  }
  return max;
}

//Title Case a Sentence

function titleCase(str) {
a = str.toLowerCase().split(' ');
var result=a.map(function(val){
return val.replace(val.charAt(0), val.charAt(0).toUpperCase());
  });
  return result.join(' ');
}

//Return Largest Numbers in Arrays

function largestOfFour(arr) {
  var res = [];
  for (i=0;i<arr.length;i++){
    var max = 0;
    for (j=0;j<arr[i].length;j++){
      if (arr[i][j] > max){
        max = arr[i][j];
      }
    }
    res.push(max);
  }
 return res;
Confirm the Ending

function confirmEnding(str, target) {
  if (str.substr(-1)==target|str.substr(str.length-target.length)==target){
    return true;
  }else{
    return false;
  }
}

//Repeat a string repeat a string

function repeatStringNumTimes(str, num) {
  if (num>=0){
  return str.repeat(num);
  }else{
    return '';
  }
}