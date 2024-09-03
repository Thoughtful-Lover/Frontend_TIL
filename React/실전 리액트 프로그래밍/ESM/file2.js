import myFunc1, { func2, variable1, variable2 } from './file1.js';

// 코드를 사용하는 쪽에서는 import, from  키워드를 사용한다.

// default 키워드로 내보내진 코드는 괄호 없이 가져올 수 있고, 이름은 원하는 대로 정할 수 있다.
// file1.js에서 내보낸 fun1 함수는 file2.js에서 myFunc1이라는 이름으로 가져왔다.

// default 키워드 없이 내보내진 코드는 괄호를 사용해서 가져온다. 가져올 때는 내보낼 때 사용된 이름 그대로 가져와야 한다.