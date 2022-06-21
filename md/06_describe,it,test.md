# **describe, it, test**

똑같은 코드인데 it을 사용하는 사람도 있고 test를 사용하는 사람도 있고, describe를 쓰는 사람도 있어서 헷갈려서 정리했다.

## **test, it**

`test`의 별칭이 `it`이다. 즉 둘은 기능적인 차이점이 하나도 없다.

### **describe**

테스트 케이스가 비슷하면 `describe`로 그룹을 묶는다. 보기 좋게 테스트를 그룹화 하기 위한 키워드.

describe 안에 test(it)이 포함된다.

```jsx
describe('굿즈와 옵션의 총가격을 구합니다.',  () => {
	
	test('총 가격은 0으로 시작하고 상품을 추가할때 가격이 변경됩니다.', async () => { 
		// some test code
	})

	test("Update: 하나의 옵션을 추가할때 총 가격이 변경됩니다.", async () => {
		// some test code
  });
	
	test("Update: 옵션과 상품을 제거할 때 총 가격이 변경됩니다.", async () => {
		// some test code
  });

})
```