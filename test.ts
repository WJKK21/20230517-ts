//? 매개변수를 배열로 받을 예정
//? typeof(arrayData) === string

function first (arrayData : string[] ): string[] {
  //1. 첫번째 배열 인덱스의 변환하는 함수를 만들고 싶다 
  
  let result : string = 'JM';
  let arr : string[]
  
  arr = arrayData;
  arr.splice(0,1, result)
  //? 기존배열에 0번째를 최종저긍로 바꿔주는 형태 
  //? ...전개연산자
  //? reduce()
  //? map()
  //? push()
  
  //arr.unshift(result)

  return arr
}

let data = ['DG','SC','J','SM']

console.log(first(data))