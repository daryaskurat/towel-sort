
// You should implement your task here.

module.exports = function towelSort (matrix) {
    if (matrix == undefined || matrix ==null && matrix.length === 0) return [];
 let arr = [];
 matrix.forEach((value,index) => {
    if (index %2 === 1) {
       value.sort((a,b) => b - a)
    }
    arr.push(...value)
 });
 return arr
}
