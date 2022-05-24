# ESLint Prettier

날짜: 2022년 5월 20일
태그: React

## 테스팅에 도움을 주는 모듈

테스팅할 때 mathcer를 알맞게 쓰는지 확신이 들지 않을 때, 코드의 형식이나 자바스크립트 문법 등을 올바르게 쓰지 못할 때 도와주는 모듈

### ESLint

개발자가 특정한 규칙을 가지고 코드를 깔끔하게 짤 수 있도록 도와주는 라이브러리

자바스크립트를 쓰는 가이드 라인 제시, 문법에 오류가 나면 알려주는 역할 등등

포멧터 역할도 하지만 주요 기능은 문법 오류 잡아주는 것

### Prettier

주로 코드 형식을 맞추는데 사용

작은 따옴표를 사용할지 큰 따옴표를 사용할지, Indent 값을 2줄 4줄

### Eslint 익스텐션 걸치

이미 Creat React App으로 리액트를 설치할 때 기본 eslint가 설정되어 있다. 하지만 이 상태로는 Vs Code에서 바로 에러 확인이 불가능하다. 확장 프로그램을 다운 받아야한다.

1. eslint 설정 파일 생성
    - 이미 package.json에 존재하지만 그걸 지우고 `.eslintrc.json` 생성. 그 후에안에 있던 pakage.json에 있던 내용 수정
    
    ![Untitled](ESLint%20Prettier%20f9839f6e563f4d7a87b29b0b3bf86b8c/Untitled.png)
    
2. ESLint Testing Plugins 설치
    - Plugins 란?
        - eslint에서 기본으로 제공하지 않는 다양한 규칙을 플러그인을 통해 사용할 수 있습니다.
        - 예를 들어서 react에 관련된 린트설정을 위해서는 eslint-plugin-react를 사용하게 되며, reack hooks에 관련된 규칙을 적용시키려면 eslint-plugin-react-hooks를 사용하면 됩니다.
3. `npm install eslint-plugin-testing-library eslint-plugin-jest-dom --save-dev`
4. 설정하기
    
    ![Untitled](ESLint%20Prettier%20f9839f6e563f4d7a87b29b0b3bf86b8c/Untitled%201.png)
    
    다운로드만 해서는 사용할 수 없고 설정을 따로 해줘야한다.
    
    ![Untitled](ESLint%20Prettier%20f9839f6e563f4d7a87b29b0b3bf86b8c/Untitled%202.png)
    
    ![Untitled](ESLint%20Prettier%20f9839f6e563f4d7a87b29b0b3bf86b8c/Untitled%203.png)
    
    적용시 이런 식으로 작동
    

## Prettier 설치 및 설정

Prettier는 코드 형식을 맞추는데 사용합니다. 테스팅을 위해서 특화된 것은 아니지만 ESLint와 함께 자주 사용하기에 Prettier도 설치해보겠습니다.

1. Prettier 설치
    - npm으로 설치 → 여러 개발자에 같은 포맷 유지에 더 좋음
    - Vscode 익스텐션으로 설치 → 혼자서 편하게 설치해서 사용하기 좋음