# react-TDD 
![image](https://user-images.githubusercontent.com/82145837/174699536-f10e7ac8-1e5f-425f-bfd9-24b87896c02c.png)

[따라하며 배우는 리액트 테스트 - 인프런 ](https://www.inflearn.com/course/%EB%94%B0%EB%9D%BC%ED%95%98%EB%8A%94-%EB%A6%AC%EC%95%A1%ED%8A%B8-%ED%85%8C%EC%8A%A4%ED%8A%B8/dashboard) 강의를 보며 제작한 프로젝트입니다. 

Jest와 testing Library를 사용하여 테스트를 진행했으며 강의 이후에 `tailwind`를 적용하여 UI를 수정했습니다.

## ✔ 학습 내용 
- 리액트 테스트
- 리액트 Context
- Jest
- React Testing Library
- Mock Service Worker   

## ✨ 필기 노트
[01_Jest & React Testing Library](https://github.com/meteor-or/react-TDD/blob/main/md/01_Jest.md)  

[02_ESlint & Prettier](https://github.com/meteor-or/react-TDD/blob/main/md/02_ESLint%20Prettier.md)

[03_Test Drive Developmemt (TDD)란?](https://github.com/meteor-or/react-TDD/blob/main/md/03_TestDrivenDevelopment.md)  

[04_더나은리엑트테스트](https://github.com/meteor-or/react-TDD/blob/main/md/04_%EB%8D%94%EB%82%98%EC%9D%80%EB%A6%AC%EC%97%91%ED%8A%B8%ED%85%8C%EC%8A%A4%ED%8A%B8.md) 

[05_MockServiceWorker](https://github.com/meteor-or/react-TDD/blob/main/md/05_MockServiceWorker.md)  

[06_describe,it,test](https://github.com/meteor-or/react-TDD/blob/main/md/06_describe%2Cit%2Ctest.md)  

[07_Review](https://github.com/meteor-or/react-TDD/blob/main/md/07_Review.md)  

## 👀 프로젝트로 배운점  

1. **테스트 주도 개발 (TDD) 정의**
    
    코드로 테스트만 하면 다 TDD 인줄 알았다. 근데 전혀 아니었다.
    
    내가 했던 화면 UI를 클릭하는 무식한 방법이 테스트가 아니라고 생각했는데 이것도 수동 테스트라고 불리는 테스트 기법 중 하나였다.
    
    흔히 TDD를 떠올렸을 때 하는 것은 유닛 테스트 기법이고, 나중에 테스트 코드를 짜는 건 TDD가 아니다.
    
    TDD는 **테스트 코드를 먼저 작성한다.** 테스트가 실패하고 나서야 실제 코드를 짠다. 테스트가 통과하면 그 후에 리팩토링 하는 거였다.
    
2. **Jest와 React Testing Library로 간단한 테스트 코드를 작성할 수 있다.**
    
    화면 랜더링 → 화면 내 요소 선언 → 특정 동작 → 예상대로 변화 됐는지 확인 (Given → When → Then). 이런 식의 통상적으로 사용되는 테스트 코드 법칙을 알았다.
    
    Testing Library 공식문서를 활용하여 원하는 API를 확인할 수 있다. 화면 내 요소 엘리먼트 선언 할 때 role을 모른다면 그때 그때 확인해서 알아낼 수 있을 정도.
    
    서버에서 데이터를 가져오는 async await 함수 같은 경우는 `Mock Service Worker` 를 사용하여 작성할 수 있게 됐다.
    

1. **리액트 Context API가 익숙해졌다.**
    
    mobx나 redux만 사용해봤고 이번에 context를 처음 써봤다.
    
    개인적인 느낌은 큰 프로젝트에서는 사용하기 애매하고 작은 개인 프로젝트에서 사용할 만 한 것 같다. 
    
    상태 관리할 내용이 한 두개 정도인 지금과 같은 프로젝트에서 사용할 수 있을 것 같다.
    
## 🔍 더 공부하고 싶은 내용

1. **남의 테스트 코드가 보고 싶다.**

    나와 수준이 비슷한 프론트엔드 개발자의 코드부터 규모가 큰 사용 프로그램에서의 코드까지 궁금하다.  

2. **BDD**
 
    TDD의 단점인 느린 개발 속도를 보안한 개발론이라고 들었는데 TDD랑 정확히 차이점이 뭔지 궁금하다.
