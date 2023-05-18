//? 매개변수를 배열로 받을 예정
//? typeof(arrayData) === string
function first(arrayData) {
    //1. 첫번째 배열 인덱스의 변환하는 함수를 만들고 싶다 
    var result = 'JM';
    var arr = [];
    arr.unshift(result);
    return arr;
}
var data = ['DG', 'SC', 'J', 'SM'];
console.log(first(data));
