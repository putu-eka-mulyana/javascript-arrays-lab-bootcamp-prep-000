const app = "I don't do much."
function destructivelyAppendKitten(name){
 kittens.push(name); 
}
function destructivelyPrependKitten(name){
  kittens.unshift(name);
}
function destructivelyRemoveLastKitten(){
  kittens.pop()
}
function destructivelyRemoveFirstKitten(){
  kittens.shift();
}
function appendKitten(name){
  let newArray=[...kittens];
  newArray.push(name);
  return newArray;
}
function prependKitten(name){
  let newArray=[...kittens];
  newArray.unshift(name);
  return newArray;
<<<<<<< HEAD
}
function removeLastKitten(){
  let newArray=[...kittens];
  newArray.pop();
  return newArray;
  
}
function removeFirstKitten(){
  let newArray=[...kittens];
  newArray.shift();
  return newArray;
=======
>>>>>>> 9bae014546b33801f76be9ffbe24ff81c59d40ac
}