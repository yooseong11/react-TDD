실제 서버가 아니라 모의 서버에서 모의 응답을 보낸다

### MSW 작동 방식

브라우저에 서비스 워커를 등록하여 외부로 나가는 네트워크 리퀘스트를 감지합니다. 그리고 그 요청을 실제 서버로 갈 때 중간에 가로채서(intercept) MSW 클라이언트 사이드 라이브러리로 보냅니다. 그 후 등록된 핸들러에서 요청을 처리한 후 모의 응답을 브라우저로 보낸다.

### MSW가 없다면?

데이터를 가져오는 비동기함수 테스트 한다면 응답을 내려주는 서버가 있어야한다. 서버가 완전하게 존재한다면 괜찮겠지만 만약 존재하지 않는다면 어떨까. 프론트엔드 개발자의 테스트를 위한 테스트용 서버를 따로 빌드해야한다. 

이 번거로움을 해결해주는 것이 msw이다. 실제 서버를 똑같이 따라하여(mock) 서버를 만들어준다.

### MSW 설정 방법

1. handler 생성

```jsx
handler.js

import { rest } from "msw";

export const handlers = [
  rest.get("http://localhost:5000/products", (req, res, ctx) => {
    return res(
      ctx.json([
        {
          name: "America",
          imagePath: "/images/america.jpeg",
        },
        {
          name: "England",
          imagePath: "/images/england.jpeg",
        },
      ])
    );
  }),
  rest.get("http://localhost:5000/options", (req, res, ctx) => {
    return res(
      ctx.json([
        {
          name: "Insurance",
        },
        {
          name: "Dinner",
        },
      ])
    );
  }),
  rest.post("http://localhost:5000/order", (req, res, ctx) => {
    let dummyData = [{orderNumber: 212121,price: 2000}]
    return res(ctx.json(dummyData));
  }),
];
```

handler 타입은 Rest 혹은 Graphql이다.

| req | 매칭 요청에 대한 정보 |
| --- | --- |
| res | 모의 응답을 생성하는 기능적 유틸리티 |
| ctx | 모의 응답의 상태 코드, 헤더, 본문 등에 도움이 되는 함수 그룹 |

```jsx
server.js

import { setupServer } from "msw/node";
import { handlers } from "./handlers";

// mocking server 생성
export const server = setupServer(...handlers)
```

서버 생성

```jsx
setupTests.js

// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';

import { server } from './mocks/server';

beforeAll(() => server.listen());

afterEach(() => server.resetHandlers);

afterAll(() => server.close());
```

API mocking 설정하면 테스트 API를 사용할 수 있다.