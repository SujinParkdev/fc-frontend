# 2주차-180514(월) 
김데레사 강사님 : seulbinim@gmail.com / github.com/seulbinim

## [ 1 ] 웹의 역사 및 웹 기술 소개(Front-end) 

과거의 internet service
- telnet : 원격 접속 서비스
- e-mail : 우리가 지금 쓰는 메일은 웹메일. 예전에는 이메일 서비스가 독립적으로, e-mail client도 따로 있었다.
- Usenet : 관심 서비스 추가 같은 개념. 다양한 유즈넷 그룹 안에서 관심사를 찾아서 정보를 주고 받을 수 있었다
- FTP(file t? protocol)
- IRC : 채팅용 프로그램
- Archie/Gopher : 전문 검색을 할 때 사용
- WWW : 앞들의 거의 모든 서비스들이 www로 통합되었다.
    * 개발자분들이 현재 사용하는 기술만 사용하는데 웹개발자라면 웹의 역사에 대해서는 알아야

---
www
- who : Tim Berners-Lee
- why : connet! 
- wonder world : 

WEB
- back-end : server / database / Application layer
- front-end : Client / web browser / presentation Layer

---
Front-end

- HTML 5 :  건강한 신체. 구조적으로 탄탄하게 짜는 것. 가장 쉽기 때문에 쉽게 넘기는데 구조가 가장 어렵다. 구조적으로 다루는 방법을 알아야 한다.

- CSS 3 : 근사한 스타일링. 어떤 옷을 입히냐에 따라서 전혀 다르게 보인다. 

- JavaScript : 스마트한 두뇌. 생명력을 불어넣어 줌.

---
web standard
- world wide web consortiums에서 웹표준을 만들었다. (w3c)
ms, apple, mozila, opera, google : 메이저 벤더들로 인해 w3c
- 제프리 젤드만의 웹표준 가이드

---
web accessibility
- Tim Berners - Lee : the power of web is an accessibility... 웹은 누구나 접근 할 수 있어야 한다
- 내가 제공하는 서비스가 계단 밖에 제공되지 않는 서비스인지, 우회해서 다른 수단으로 이용할 수 있는 서비스인지 늘 확인하는 것. (자바스크립트는 대부분 마우스에 기반한 이벤트. 그러나 마우스를 쓸 수 없는 사용자층도 있다.) 특정 사용자를 배제하지 않는가? 라는 고민을 계속 고민해야 한다. 정말 좋은 개발자라면 그 기술의 중심에 사람이 있어야 한다. (맥 쓰면서 한국의 많은 서비스를 쓸 수 없었을 때 느꼈던 답답함.)
- 장애에 대한 이해 : 시각장애(전맹, 저시력), 청각 장애, 지체장애(절단 및 지체기능 장애), 뇌병변 장애
- 접근성을 항상 염두하라.
장애인에게 필요한 것은 줄기세포가 아니라 현실적인 정보기술(IT) : 서울대 이상묵 교수님.

---
환경에 대한 이해

- 다양한 platform
- corss browsing
- SEO(Search Engine Oprimization) : 검색 엔진 최적화. 구조, 디자인, 자스를 설계할 때 표준 설계를 지키고 구조를 탄탄하게 할 때 SEO를 끌어 올릴 수 있다. 
- 저사양 또는 저속회선

어떻게 하면 웹의 성능을 최적화할 수 있을지. 다양한 사용자가 만족할 수 있는 서비스를 만들어야 한다.

---
10번의 도전에 10번의 실패를 하셨는데도 계속 도전하시는 분 inspire 결과가 나쁘더라도 계속 시도하고 도전하는 것을 즐기는 삶
http://biz.heraldcorp.com/view.php?ud=20180513000157


---
## [ 2 ] HTML4.01, XHTML1.0과 HTML5의 차이점 (콘텐츠 모델, 아웃라인 알고리즘) 

(참고자료 : https://demun.github.io/vscode-tutorial/shortcuts/)

고정형 레이아웃과 반응형 레이아웃의 예제를 볼 수 있다
https://seulbinim.github.io/ 접속해서
- 고정형 레이아웃 : https://seulbinim.github.io/fundamental/index.html
- 반응형 레이아웃 : https://seulbinim.github.io/rwd/index.html
(브라우저를 줄이면 뷰포트가 변화하는 것을 알 수 있다.)

완성된 예제임. 필요한 자료를 가져다가 만들 것.
https://github.com/seulbinim/seulbinim.github.io.git

chrome/firefox 두 가지를 크로스 체크하자(opera는 chrome으로 자동으로 변환이 되기 때문에 잘 확인하지 않는다)

firefox : 네스케이프 오픈소스로 렌더링하기 때문에 여러 탭을 켜놔도 메모리를 많이 잡지 않는다. 빠르다.

## html의 탄생
- 최초 버전은 1993(XHTML 1.0), 최신버전은 1999년에 발표된 이후 거의 업데이트가 없었다. XHTML2.0 작업을 진행중이었으나 w3c는 이론적으로 접근하다보니 교과서적으로 정리하려고 노력했다. 하위 호환상에 치명적인 문제가 있었음. 
- 2004년 애플, 모질라 재단, 오페라 소프트웨어가 공동으로 설립한 공개그룹인 whatwg가 w3c와 별개로 web application 1.0과 web forms 2.0을 만들어 냄. 이러한 환경적인 부분을 이해해야 한다.
- 벤더가 주도적으로 만들어내고, 그것을 w3c가 반영하고 있는 추세로 과거와 다른 양상으로 변화함.
- 2007년 3월 w3c가 공개적으로 xhtml2.0의 실패를 인정한후 새롭게 html을 개발하기로 결정함. 원래 html은 구조를 설계해주는 언어였는데, html에는 css와 연관되고, api가 연관되고.. 하는 성격으로 바뀌었다.

## html4.01, xhtml1.0과 html5의 차이점

html은 대부분 더블사이드 요소들로 구성되어있다. <p></p> / 대소문자 구분 

html4.01에서는 종료태그의 생략을 허용 / 대소문자의 구분 없음 / 문법 자체가 느슨 
-> 개발하다보니 느슨한 언어로 인해 이슈 발생
-> xml 사용하여 텍스트 태그에 이름을 붙이자. html을 재정의하였다. 종료태그가 반드시 필요 / 소문자만 사용 / 언어
-> 그래서 브라우저에게 html or xml인지 알려줘야 한다

https://emmet.io/ 의 documentation
https://docs.emmet.io/cheat-sheet/ 에밋에서 사용할 수 있는 기본문법 시간 날 때마다 읽어보기

html4.01 검색
```
html:4t
Alias of !!!4t+doc4[lang=${lang}]

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html lang="en">
<head>
    <meta http-equiv="Content-Type" content="text/html;charset=UTF-8" />
    <title>Document</title>
</head>
<body>
    
</body>
</html>
```
DOCTYPE
PUBLIC은 
'-'는 업계표준 w3c가 공식적으로 인정한다는 뜻
그 뒤에 'DTD HTML 4.01'

```
html:xt
Alias of !!!xt+doc4[xmlns=http://www.w3.org/1999/xhtml xml:lang=${lang}]

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en">
<head>
    <meta http-equiv="Content-Type" content="text/html;charset=UTF-8" />
    <title>Document</title>
</head>
<body>
    
</body>
</html>
```
'http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd' 주소로 직접 접속하면 dtd문서가 열린다. 주석으로 확장한 html 1.0 버전인 것을 알 수 있다.

- html4.0,  html5 모두 표준이다. 어떤 것을 쓸지 선택하면 되는 것. 이런 문서 프린트해서 읽어보면 문법 오류가 발생했을 때 이슈 파악하기 쉬워쥔다.

---

## html5와 html4.01의 차이점

- html5 콘텐츠 모델 : interactive, heading, embedded, phrasing, metadata, sectioning으로 나뉨
- 그러나 이전에는 요소를 구분할 때 둘중에 하나였다. block이냐 inline이냐로만 나눴는데 html5에서는 여러가지 모델들이 겹치는 부분이 있기 때문에 마크업방법이 완전히 달라짐.
- 이제는 모델자체가 바뀌었기 때문에 누구를 포함할 수 있는지 생각해봐야 한다. 이런 개념을 모르고 마크업하면 이슈가 터지는 것. 


## 렌더링
'mozilla reflow repaint' 유투브에서 검색
https://www.youtube.com/watch?v=ZTnIxIA5KGw
파폭은 렌더링할 때 컨텀 엔진을 사용함. 이전에는 gecko엔진을 사용했었음. 렌더링은 화면에 그림을 그리는 역할. 어떻게 화면에 렌더링 하는지 보여주는 영상. mozilla는 gecko 렌더링. 각각 영역을 잡아 색칠함. 그래서 영역이 많을 수록 렌더링이 느려짐. 
(참고영상 올려주실 것 시간날 때 꼭 봐라)

브라우저가 해석하는 과정 : 파싱
파싱을 할 때 각각의 콘텐츠-모델 관점으로 해석하는게 가장 큰 차이점

## contents model

## markup
 컨텐츠에 의미를 부여하는 과정

---
## Sectioning 루트
- 섹션이나 아티클 요소와 같이 장이나 절과 같은 계층 구조로 구분되지 않고 독립적인 콘텐츠로 분위됨.

---

## [ 3 ] HTML5의 문법과 기본 요소 및 구조관련 요소 

## HTML의 Markup


## Outline Algorithm

- 과거에는 암묵적인 algorithm 사용했으나, 현재는 명시적인 outline algorithm을 사용하는 것. outline은 heading과 관련되어 있음 <h1>~<h6>

과거에 사용되던 방식 : 암묵적인 outline 
```
<h1>커피</h1>
<p>설명</p>
<p>설명</p>
<h1>역사</h1>
<p>설명</p>
<p>설명</p>

```

```
<h1>커피</h1>
<p>설명</p>
<p>설명</p>
<h2>역사</h2>
<p>설명</p>
<p>설명</p>

```
h2로 바뀌어서 역사가 '커피의' 역사가 되었다. 적절한 제목을 가져야만 검색 시에 좋은 점수를 얻을 수 있다. 제목을 달지 않으면 컴퓨터가 제목이 없는 문서로 문류한다. html5부터는 눈에 보이는 디자인 뿐만 아니라 명시적인 구조를 짤 수 있는 요소들이 등장했다

HTML5 : 명시적인  outline이 등장
```
<section>
<h1>coffee</h1>
<p>설명</p>
<section>
<h1>history</h1>
<p>설명</p>
</section>
</section>
```
메인섹션, 서브섹션이 되는 것. 부모가 누구냐에 따라서 달라지는 제목이 교정된다. 명시적으로 어떻게 접근할지 고민해야 한다. 가끔 html article을 디자인관점에서 이야기 한다. 구조설계는 디자인과 분리해서 봐야 한다. 디자인을 이렇게 하는 것 뿐, 컨텐츠의 성격을 가지고 태그를 결정하는 것. 컨텐츠를 알아야 제대로 된 구조를 설계할 수 있다. 컨텐츠에 따라서 모델이 결정되는 것이지, 있어야 할 위치, 디자인적으로 예쁜 위치 때문에 결정되는 것이 아니다. 

 스펙을 계속 읽어봐야 한다. 모르면 번역기를 돌리고, 모르는 문장을 독해하면서. 개발 스펙은 표현이 비슷해서 읽다보면 쉽게 느껴질 때가 있다.

---
## HTML5의 API
엄밀하게 말하면 javascript의 영역이다. 회사들이 html5를 내면서 마케팅적인 관점에서 접근했기 때문. 
- web storage : 브라우저에 데이터를 저장하기 위한 공간
- web sql database : 클라이언트에서 관리되는 데이터베이스를 제어할 수 있는 api로 구성되어 있다. 
- application cache : 웹 어플리케이션을 오프라인에서 사용하는데 필요한 리소스를 클라이언트 쪽에서 캐시하기 위한 기능으로 이를 활용하면 리소스가 로컬에 캐시된 상태에서 웹 브라우저가 네트워크에 접속하지 않고 캐시된 리소스를 이용할 수 있음. 
(시뮬레이션한 데이터를 캐싱할 수 있는 서비스가 이 기능 덕분.)
-web workers : 사람의 몸을 전신부터 발끝까지 스캔. 머리부터 스캔한 상태에서 렌더링을 보여주고 나머지를 위치를 렌터링 함. 이동했을 때 바로바로 뭔가가 보여진다는 것은 백단에서 데이터를 활용하는 것, 워커스를 사용해서. 
-web socket : 실시간 주식차트, 카카오 페이스톡
-device orientation : 디바이스의 기울기 값을 가져오는 것
(아이디어에 따라 이런 api를 활용하는 것.)
=> 점점 html이 어플리케이션에 맞게 진화하는 것. (w3c 주도가 아니라 벤더 주도의 html 변화였기 때문에 가능한 것.)

---
## html 서식
html5는 html4.01, xhtml1.0의 문법을 모두 허용함(그러나 가독성을 위해 통일성을 줄 것)
<img>는 셀프클로징 처리 x 
<input type="checkbox">일 때, checked를 주면 true => 체크상태로 렌더링됨
checked를 주지않으면 false가 되어 빈박스로 렌더링 되나 반드시 checkbox를 줄 것.
속성을 줄 때 ""로 할 것

네이버에서는 어떻게 html 서식 가이드를 주는가
http://nuli.navercorp.com/
http://nuli.navercorp.com/data/convention/NHN_Coding_Conventions_for_Markup_Languages.pdf
이런 문서에 맞춰서 해야 한다.
개발하기 전에 숙지해서 해야 협업할 수 있다. 문서화, 규칙화는 굉장히 중요하다.

---
## 요소 설명

- 첫줄에 dtd를 넣어야 하는 이유
html5은 첫 줄에 무조건 doctype이 있어야 한다. 5부터는 버전번호가 들어간다. 심지어 문서의 종류도 여러가지 
strict, transition(과도기형, 호환형), f...각각 쓸 수 있는 명령어가 다르다. 문법 검사를 헤보면 틀린게 나온다. 
s에서는 안되던 것이 t에서는 된다. 과도기 형이기 때무에. 의미는 없지만 장식적인 명령어가 있다. <font>의 속성값으로 size, face, color를 사용하는 것은 글자에 의미를 부여하는 것이 아니라 데코이다. html3.2부터 본격적으로 망가지기 시작하면서 font, center라는 요소가 들어가기 시작했다. html4로 들어서 이러한 요소는 css로 빼서 사용하는 것을 권고한다. 한국의 대부분은 transition dtd로 한다. 옛날 문서와 호환해야하기 때문에
frame dtd은 제외하고 s,t가 있었는데 브라우저에 렌더링 되는 모드가 표준모드냐 호환되는 종류냐 라는 것으로 바뀌었다. 

dtd를 생략하면 브라우저가 내장하고 있는 dtd로 해석해서 다르게 해석하게 된다. 익스플로어와 네트케이프는 서로 경쟁하기 위해 비표준적인 태그를 마구 추가했다. 서로 호환되지 않은 태그를.
그래서 dtd를 첫줄에서 선언하지 않으면 브라우저는 표준모드가 아닌 호환모드로 동작하기 때문에 내장된 dtd로 렌더링 하여 다르게 된다. 

이제는 strict, transition, frame dtd로 나누지 않고 html5, 최신 버전에서는 표준모드인지 호환모드인지만 구분한다. 
(그러니까 절대 첫 줄은 독타입, 스크립트 첫줄에 넣었던 나 반성해...)

- 두번째 줄에 lang 속성
 글로벌 속성 중에는 lang, title, class, id, data-*등 여러가지 속성이 있는데 lang은 언어를 결정하는 것. lang="ko(koera)-kr(korean)"

소리에 의존하는 사용자의 경우 읽어주는 언어가 매우 중요. 접근성 관점에서 영향을 주기 때문에 언어를 반드시 잘 설정해줘야 한다.

- <head>

<meta> 태그는 빈 요소이다. 각각 어떤 attribute가 들어갔는지에 따라서 다르다. 
before html5 : <meta http-equiv="content-type" content="text/html;charset=UTF-8">
html5 : <meta charset="UTF-8">
만약 <meta charset="UTF-8">보다 타이틀 태그가 올라가 있다면 문자가 인코딩 되기 전에 타이틀이 렌더링 되기 때문에 문자가 깨진다. html은 인터프리터 언어다. 컴파일언어가 아니라. 그래서 어플리케이션이 라인단위로 해석한다음에 결과를 내보내주기 때문에 선언 순서에 민감함. 문자 인코딩을 가장 먼저 해야 함. 

두번째 <meta>태그는     <meta name="viewport" content="width=device-width, initial-scale=1.0"> 에 대해서 설명.
모바일로 seulbinim.github.io에 들어가보면 
troy-resiponsible web tester에서 물리적인 해상도를 확인할 수 있다. 브라우저를 렌더링 하는 순간 가상 해상도가 동작되기 때문에 물리적 해상도와 설계된 해상도가 다르게 나오는 것. 그러나 contet의 넓이가 device-width. 뷰포트 메타태그 선언을 해주야 반응형 웹을 디자인 했을 때 반응형 웹이 먹힌다. 그 뒤에 있는 initial-scale=0을 하면 포인트인, 포인트아웃이 먹지 않는다. 사용자를 배려하지 않는 것. 

마지막 <meta> 태그는
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
user-agent / content의 edge브라우저가 아니다. edge를 8로 접근하면 익스플로러11로 접근하는 사용자도 익스플로러8로 보이게 된다. 임시로 속이는 것. 이걸 호환성보기라는 미명으로 보여주는 것. 8로 바꾸는 순간 과거의 스펙만 답습해야하는 것. 장기적인 안목으로는 좋은 선택이 아니다. 다시 edge가 의미하는 것은 깔려있는 브라우저의 최신버전의 렌더링 버전으로 보여달라는 것. 익스플로어 환경에서 동작하는 부분. 

<title>요소는 접근하는 순간 제일 먼저 읽히는 부분. 쓸데 없는 멘트가 아니라 중요하고 핵심적인 키워드를 넣어야 검색시 가장 잘 읽히게 된다. 
(야후닷컴에서 검색해보자. 구글은 전문 검색, 전체 글을 검색. 야후는 카테고리 검색. 필드 지향 검색 옵션이 있음. 타이틀과 컨텐츠를 나눠서 검색할 수 잇음. 그래서 키워드 앞에 t:를 붙여주면 <title> 태그 검색이 가능함. 이렇게 각 검색엔진마다 검색 알고리즘이 다르다.)

---이제 기본 템플렛에 없는 명령어
<title>태그 아래에 link를 쳐보라.falvincon
    <link rel="shortcut icon" href="favicon.ico" type="image/x-icon">
link로 연결할 타입은 이미지이면서 프로젝트
'go live' 버튼 클릭하면 vscode에 서버세팅을 하지 않아도 내장하고 있는 것으로 볼 수 있음 타이틀 앞에 아이콘에서 이미지를 확인할 수 있다. 북마크를 했을 때 아이콘이 드러나 가독성이 좋다.favicon을 제공하지 않아도 문제는 없으나 우리 페이지의 성격을 나타낼 수 있다. 

이번에는 link:touch -> tap 키 
    <link rel="apple-touch-icon" href="webcafe.png">
북마크에 등록하면 내가 등록해 놓은 이미지 아이콘이 북마크에 뜬다, (안드는 초록색 안드, 애플은 사과 기본모양.)

link:css
    <link rel="stylesheet" href="css/style.css">
스타일시트를 삽입하겠다는 것. 세이브하는 순간 브라우저창에 렌더링된다. 라이브 서버이기 때문이다. 어도비에서 만든 브라켓은 입력하는 이벤트값을 바로바로 렌더링 한다. 아주 곧바로 렌더링되지는 않지만 예전보다 개발하기 좋은 환경이 된 것. 


-<body>

콘텐츠 중심으로 설계해야하기 때문에 어떤 콘텐츠를 가졌는지 분석해야 함.
대부분의 웹서비스는 3단, 4단으로 베리에이션한다.

html 5: 3단 구조를 가지는 경우
머리말 / 콘텐츠 / 꼬리말
header / main / footer

(befor html : div.header / div.main / div.footer 로 마크업 했다. 시멘틱하지 않은, 중립적인 요소로 그룹핑만 해준 것. css는 기본적으로 상속되기 때문에 컨텐츠 영역을 묶어주거나 나눠주는 역할로 사용하는 것. 그래서 이름이 division)

html에서 이름을 부여하는 두가지 방식 id / class 예전에는 id를 변하지 않는 바깥 요소에 id를 부여했는데 이제는 거의 class를 쓴다. 부트스트랩, 시멘틱ui, foundation 꾸며주는 class 컴포넌트를 많이 만들어놓았다가 class로 바로바로 가져오면 스타일링이 바로 업데이트 된다. 이렇게 컴포넌트를 잘게 부술 수 있는 것, 모듈화해 놓은 것을 필요할 때가 가져와서 붙여놓는 것이 css 컴포넌트 방식.

그런데 클래스로 이름을 줬다고 해서 기계가 알아보지는 못한다. WAI-ARIA accessible reach internet ..? html이 화려한 인터페이스를 지원하지 못하니까 플래시 같은 기술이 등장. 그러나 플러그인을 깔고 그 위에 동작하는 것. 이것을 ria기술이라고 한다. 그런 기술 조차 접근할 수 있게 만드는 것이 wai-aria. 어떤 방식으로 가능하냐, 
div.header role="banner" //여기서 banner는 머릿말이라는 뜻!!!!
div.main role="main"
div.footer role="content-info" 와 같이 롤로 역할을 부여하면 header 태그를 준 것과 같다.

롤을 안쓰면 사람이 봤을 때 사람은 인식할 수 있으나, 기계는 어렵다.
'시멘틱 마크업' 의미에 맞는 마크업, 기계처리가 가능한 마크업. 
역할 모델을 주면 기계처리가 가능하다. banner, main, content-info를 landmark라고 한다. 해외에서 만들어진 html들이 aria코드들이 있는데, 뭔지 몰라서 이상하게 사용하는 경우가 있다. 그러나 더 쉬운것이 html5방식 )

4단 구조를 가지는 경우
header / nav / main / footer (nav는 왼,오,위,아래 자유롭게 배치 가능. 

(body도 하나의 section이다. section 안에서도 header와 footer사용이 가능하다. 그러면 section-header / section-footer가 되는 것. )


---
## 고정형 레이아웃 시안을 바탕으로 실습

header.header
    nav
div.visual  //ad가 들어갈 자리. 이름을 ad로 하면 광고 차단이 될 수 있기에 visual로 함
main
    div.group  //세 칼럼이 있다. 세로로 길쭉하게 세개의
    div.group
    div.group
article.slogan  // 웹사이트의 목표가 들어있는 것
footer.footer

(뭔가를 선택할 때는 클래스로 하는 것이 좋다. div.group처럼)
(header태그와 header클래스는 완전히 다르다. 섹션 안에도 섹션헤더가 들어갈 수 잇는데 그럴 때 헤더끼리 묶을 수 있기 위한 것. )
게다가 전체적으로 넓이 제한을 줄 것인데, header, footer의 배경색은 디자인 이슈때문에 길게 늘여놓아야 하기 때문에 div로 푸터 밖을 묶는 것.

이제 바디 부분을 만들어 보자
DOM에서는 부모형제요소들의 관계를 이해해야..

* html 문법 검사
section, article, nav, aside는 아웃라인에 영향을 주는 요소. 이름을 줘야 한다
