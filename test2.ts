/* function first (arrayData : string[], insertSting: string ) : string[] {
  arrayData.pop()
  // 2
  let combineArray : string [] = []
  // 4
  combineArray = [insertSting, ...arrayData]
  // 5
  return combineArray
}

let date = ['최대건', ]
 */
/** 
 * @params {array} arrayData
 * @params {string} insertData
 * @return {array} 문자열로 된 배열입니다.
 * 
 *디그다 
 * 
 * 
 */
function first(arrayData: string[] , insertString : string): string[] {
  // 1.첫번째 배열 인덱스의 변환하는 함수를 만들고 싶다.
  // let result : string = arrayData[0];
  // result = "다른값";
  // let arr : string[] = arrayData.unshift();
  // return arr;
  let result: string = "강지민";
  // let arr: string[] = arrayData
  let arr: string[];
  arr = arrayData;
  // arr.splice(1,1,result);
  // ? 첫번째 자리에 위치, 두번째 자리에 배열에 있는 자리 , 세번째 데이터
  // const asd = arr.map(x => {
  //     return `${x}님`
  // });
  // ! 강사님
  arrayData.pop();
  let testArray : string[] = [];
  testArray = [insertString, ...arrayData]
  return testArray;
  // * 기존배열에 0번쨰를 최종적으로 바꿔주는 형태
  // * ...전개연산자
  // * reduce()
  // * map()
  // * push()
}
let data = ['최대건', '정성철', '허진', '이세민'];
//console.log(first(data,'kwon'));
console.log(first(data))
console.log(first())
console.log()

