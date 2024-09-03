// default 키워드는 한 파일에서 한 번만 사용할 수 있다.
// default 키워드로 내보내진 코드는 괄호 없이 가져올 수 있고, 이름은 원하는 대로 정할 수 있다.
// file1.js에서 내보낸 fun1 함수는 file2.js에서 myFunc1이라는 이름으로 가져왔다.
export default function func1() {}
export function func2() {}
export const variable1 = 123;
export let variable2 = 'hello';

// 코드를 내보낼 때는 export 키워드를 사용한다.