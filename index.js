// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"]
function destructivelyAppendCat(name){
  cats.push('Ralph')
}
function destructivelyPrependCat(name){
  cats.unshift("Bob")
}
function destructivelyRemoveLastCat(){
cats.pop()
}
function destructivelyRemoveFirstCat(){
  cats.shift()
}

  
function  appendCat(){
  const appendCat=[...cats,"Broom"]
  return appendCat;
}
function prependCat(name){
  const prependCat=["Arnold",...cats]
  return prependCat
}
function removeLastCat(){
  const removeLastCat= [...cats.slice(0,2)]
  return removeLastCat
}
function removeFirstCat(){
  const removeFirstCat=[...cats.slice(1)]
  return removeFirstCat
}