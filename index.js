// Code your solution here
function findMatching(drivers, string){
  let arr = drivers.filter(el =>{
     return el.downcase === string.downcase
  })
  return arr
}

function fuzzyMatch() {

}

function matchName() {

}
