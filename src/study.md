## 기존 TODO 리스트는..
App에서 모든 이벤트와 데이터 상태 처리하고 있다. 로그인 등 기능이 추가되면 App에서 관리해야할 상태가 많아진다.

## 보완이 필요한 부분!
App 중심 상태 관리에서 조금 더 낮은 레벨에서 상태 관리가 필요하다.

## flux architecture:: 
기본 cycle
#### action - dispatcher - store - view
view에서 '할 일 추가' 버튼을 클릭한다면 또 다른 action 발생
#### view - action - dispatcher - store - view

* action: helper 메소드인 action-creator로 생성
* dispatcher: store에 action을 보냄
* store: 상태 업데이트

## flux architecture 구현체:: Redux
#### Redux 장점:: ★관심사의 분리★
App 컴포넌트를 보자.
관심사는 다음과 같이 두 가지로 나눌 수 있다.
* 이벤트 처리
* 컴포넌트 화면에 그리기
