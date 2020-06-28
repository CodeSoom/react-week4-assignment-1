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
    - 예시) updateTaskTitle, addTask, deleteTask
* dispatcher: store에 action을 보냄
* store: 상태 관리
    - reducer로 상태 업데이트
* **Provider**로 store를 전달함
    - useDispatch::
    - useSelector:: 기존에는 컴포넌트가 상태 관리함. redux로 상태를 관리하면서 useSelector로 상태 state에서 필요한 taskTitle, tasks를 꺼내올 수 있다.

## flux architecture 구현체:: Redux
#### Redux 장점:: ★ 관심사의 분리 ★
App 컴포넌트를 보자.
관심사는 다음과 같이 두 가지로 나눌 수 있다.
* 상태 관리
    - 초기 상태
    - 상태 관리 (추가, 수정, 삭제)
* 컴포넌트 화면에 그리기
    - page 구성 요소

## App 컴포넌트가 하는 Container 역할 분리하기
* ListContainer.jsx - ListContainer.test.jsx
* 
기존에는 App 컴포넌트가 모든 상태를 관리했다.
하지만 현재는 redux를 이용하여 상태를 관리하고 있기 때문에
상태를 가져오는 useSelector와 상태를 갱신하는 useDispatch가 있으면
다른 컴포넌트도 상태를 처리할 수 있는 container가 될 수 있다.