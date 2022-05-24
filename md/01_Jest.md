# Jest

날짜: 2022년 5월 19일
태그: React

## jest란?

facebook에 의해서 만들어진 테스팅 프레임 워크

최소한의 설정으로 동작하며 Test Case를 만들어서 어플리케이션 코드가 잘 돌아가는지 확인

단위(Unit) 테스트를 위해서 이용한다.

- Jest가 Test 파일을 찾는 방법
    - 폴더명 test
    - 파일이름 test
    - 파일이름 spec
    
- Explain
    - expect
        - expect함수는 값을 테스트할 때마다 사용됩니다. 그리고 expect 함수 혼자서는 거의 사용 되지 않으며 matcher와 함께 사용된다
        - ex) expect
    - matcher
        - 다른 방법으로 값을 테스트 하도록 “매처”를 사용합니다.
        - ex) toBe
        

## React Testing Library 주요 API

### “Render” 함수

![Untitled](Jest%204d6cb6818d834a7388d13f63bab59346/Untitled.png)

DOM에서 컴포넌트를 랜더링하는 함수

인자로 랜더링할 React 컴포넌트가 들어감

Return은 RTL에서 제공하는 쿼리 함수와 기타 유틸리티 함수를 담고 있는 객체를 리턴(Destructuring 문법으로 원하는 쿼리 함수만 얻어올 수 있다.) ⇒ 소스 코드가 복잡해지면 비추천!! screen 객체를 사용하기. 왜냐하면 사용해야할 쿼리가 많아질수록 코드가 복잡해질 수 있음

![Untitled](Jest%204d6cb6818d834a7388d13f63bab59346/Untitled%201.png)

getByText = 쿼리함수

![Untitled](Jest%204d6cb6818d834a7388d13f63bab59346/Untitled%202.png)

여기 있는지 확인 근데 후자의 방법은 비추 screen 사용하는 걸 추천

- toBeInTheDocument 엘리먼트 존재 확인

## 쿼리함수

> 쿼리는 **페이지에서 요소를 찾기위해** 테스트 라이브러리가 제공하는 방법입니다. 여러 유형의 쿼리(get, find, query)가 있습니다. 이들 간의 차이점은 요소가 발견되지 않으면 퀴리에서 오류가 발생하는지 또는 Promise를 반환하고 다시 시도하는지 여부입니다. 선택하는 페이지 콘텐츠에 따라 다른 쿼리가 다소 적절할 수 있습니다.
> 

### get find query의 차이점

- getby
    - 쿼리에 대해 일치하는 노드를 반환하고 일치하는 요소가 없으면 둘 이상의 일치가 발견되면 설명 오류를 발생시킵니다. (둘 이상의 요소가 예상되는 경우 대신 getAllBy 사용)
    - 에러 반환
- queryBy
    - 쿼리에 대해 일치하는 노드를 반환하고 일치하는 요소가 없으면 null을 반환합니다. 이것은 존재하지 않는 요소를 어설션하는 데 유용합니다. 둘 이상의 일치 항목이 발견되면 오류가 발생합니다. (확인된 경우 대신 queryAllBy 사용)
    - null 반환
- findBy…
    - 주어진 쿼리와 일치하는 요소가 발견되면 Promise를 반환합니다. 요소가 발견되지 않거나 기본 제한 시간인 1000ms후에 둘 이상의 요소가 발견되면 약속이 거부됩니다. 둘 이상의 요소를 찾아야하는 경우 findAll by를 사용하십시오
    - Promise 반환, 재시도