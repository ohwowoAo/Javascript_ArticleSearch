# The NYTimes Search Web

<br />

### 프로젝트 소개

JavaScript를 이용한 뉴욕타임즈 기사검색웹 미니프로젝트 입니다.  
뉴욕타임즈 API를 활용해 구현하였습니다.
Dark모드와 Light모드를 구현하였습니다.

<br />
<br />

## 개발 체크리스트

### clip

- [x] 'clip' 버튼을 클릭하여 clip을 추가하고, 'clip한 기사만 보기' 버튼 클릭시 확인가능여부
- [x] 'unclip' 버튼 클릭시 'clip한 기사만 보기' 상태에서 노출되지 않는 여부
- [x] 'clip' 버튼과 'unclip' 버튼 토글 가능 여부

<br />

### search

- [x] 검색시 search history에 추가
- [x] search history가 존재하는 경우만 노출
- [x] input에 focus중일 때만 search history 노출
- [x] search history는 최대 5개까지만 저장

<br />

### news

- [x] news 리스트 렌더
- [x] 각각의 news 카드는 타이틀, 날짜, clip하기버튼, 자세히 보기 버튼을 포함
- [x] input에서 enter나 검색 버튼을 누르지 않아도 api 호출
- [x] 자세히보기 버튼 클릭 시 해당 기사를 새탭에서 open
- [x] 뉴스를 추가로 불러오는지 여부(button을 클릭해서라도)

<br />

### 프로젝트 완성도

- [x] scroll을 내리는 경우 추가로 뉴스를 불러오는지 여부
- [x] input 입력 후 0.5초동안 추가입력이 없는 경우에만 api를 호출
- [x] input value가 있는 경우만 api를 호출

<br />

### 개발과정

- [ ] 각 작업에 대하여 commit message를 잘 작성했는지 여부
- [x] 아무 commit이나 checkout 하여도 빌드에러가 나지않고 잘 실행되는지 여부
- [x] api token이 git에 포함되지 않았으며, 쉽게 교체할 수 있는 구조인지 여부
- [x] 코드가 목적에 따라 적절히 분리되어있는지 여부

<br />

### JavaScript를 활용한 미니프로젝트

- 뉴욕타임즈 API를 이용하여 검색어에 맞는 기사가 노출되도록 구현
- 아이콘을 통해 기사를 북마크하고 북마크한 기사만 모아서 볼수 있도록 구현
- Dark모드 구현
- delay를 활용해 검색어 입력이 멈춘 후 0.5초 이후에 자동 검색되도록 구현
- 최근 검색어 5개까지 저장 구현
- focus를 활용해 input에 focus될때만 최근검색어 노출되도록 구현
- Infinite scroll 구현

<br />

### 이슈사항

- git commit 하는 부분 부족
