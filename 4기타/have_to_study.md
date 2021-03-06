
[알고리즘 연습할 수 있는 사이트][hackkerrank]에서 문제 풀고 쌓기.
먼저 풀 것 : 30 days of code를 풀기
강의 다 듣고 풀 것 : cracking the coding interview challenges
(외국계 사이트에서 여기서 1차 코딩 테스트를 한다.)

[hackkerrank]: hackerrank.com "hackerrank"

이거 말고 [코딩도장][dojang]이라는 것도 있다.
[dojang]: http://codingdojang.com/

[EDX][EDX]기업, 비영리단체에서 제공하는 강의. 여기 강의 중에 [html/css fundamentals][fundemental]강의가 hrml을 개발한 곳에서 만든 강의. 
[EDX]: https://www.edx.org/
[fundemental]: https://www.edx.org/course/html5-css-fundamentals-w3cx-html5-0x-0


* Angular로 pwa(Progressive Web Apps) 구현
https://pwa.ng/
이것으로 뭘 할 수 있을까
https://developers.google.com/web/fundamentals/codelabs/your-first-pwapp/?hl=ko
: angular 끝내고 구글 디벨로퍼 코드랩스에 있는 pwa자료들 시작할 것. 트렌드임. 

* 도메인 구매
https://jinwoopark.com/2018/05/10/blog-http-to-https/

* 참고 블로그
https://github.com/wayhome25/TIL

* 깃 바꾸기

$ git config --rename-section user.name "old" "new"
$ git config --rename-section user.email "old" "new"

[html]

* 프론트엔드 후에 서버를 공부하려면 서버가 무엇인지부터 짚어보라
* 제프리 젤드만의 웹표준 가이드(김데레사강사님 추천)

(참고자료 : https://demun.github.io/vscode-tutorial/shortcuts/)

* 에밋 기본 문법
https://emmet.io/ 의 documentation
https://docs.emmet.io/cheat-sheet/ 에밋에서 사용할 수 있는 기본문법 시간 날 때마다 읽어보기
div.group.group${}


* 렌더링
https://www.youtube.com/watch?v=ZTnIxIA5KGw


* 네이버 html 서식가이드
네이버에서는 어떻게 html 서식 가이드를 주는가
http://nuli.navercorp.com/
http://nuli.navercorp.com/data/convention/NHN_Coding_Conventions_for_Markup_Languages.pdf
이런 문서에 맞춰서 해야 한다.
개발하기 전에 숙지해서 해야 협업할 수 있다. 문서화, 규칙화는 굉장히 중요하다.

* 다음의 html 서식가이드
다룸 : http://darum.daum.net/

이메일 바꾸기

* html -aria

* css framework
bootstrap : https://getbootstrap.com/
sementic-ui : https://semantic-ui.com/modules/modal.html
foundation : https://foundation.zurb.com/(강사님 추천)

* 이름 짓는 방식
파스칼 케이스 : MainContent
카멜케이스 : 자스 mainContent
케밥 케이스 : html main-content
언더바 : 스크립트 main_content
추가 키워드 : bem, smcss, oocss

* html 문법 검사
https://www.w3.org/
http://validator.w3.org/
http://jigsaw.w3.org/css-validator/

* 자스 동작원리
https://poiemaweb.com/js-syntax-basics

* 코드 참고할 수 있는 사이트
코드펜


* 목요일 참고 사이트

https://www.w3schools.com/howto/howto_css_parallax.asp
https://www.w3schools.com/cssref/pr_background-attachment.asp
http://www.sbs.com.au/theboat/
https://www.awwwards.com/30-great-websites-with-parallax-scrolling.html
http://lea.verou.me/css3patterns/
https://spoqa.github.io/spoqa-han-sans/ko-KR/
https://codepen.io/search/pens?q=text%20shadow&page=1&order=popularity&depth=everything&show_forks=false
https://fontawesome.com/icons?d=gallery
https://codepen.io/atnyman/pen/cgGuL



* flex box
https://css-tricks.com/snippets/css/a-guide-to-flexbox/
(그런데 이 사이트 자체가 되게 좋다 다른 글도 볼 것)


---
## 애니메이션

CSS 애니메이션 사용하기

https://developer.mozilla.org/ko/docs/Web/CSS/CSS_Animations/Using_CSS_animations

애니메이션 문법
https://developer.mozilla.org/ko/docs/Web/CSS/animation

* easings.net
https://easings.net/ko
* Ceaser - CSS EASING ANIMATION TOOL
https://matthewlein.com/tools/ceaser
* CSS Animation (실습 완료) by codepen
https://codepen.io/yamoo9/full/aYdaWw/


---
## JavaScript

REST APT : backend 부분도 frontend도 알아야 한다. 알아야 요청해는 걸 알고 응답하지!

정규표현식은 자스랑 아에 다른 언어. 어렵. 그러나 쓸 부분은 알아야 한다.

실행컨텍스트 배운지 일년이 넘으면
http://dmitrysoshnikov.com/ecmascript/chapter-1-execution-contexts/
http://dmitrysoshnikov.com/ecmascript/chapter-2-variable-object/
http://dmitrysoshnikov.com/ecmascript/chapter-3-this/
http://dmitrysoshnikov.com/ecmascript/chapter-4-scope-chain/
http://dmitrysoshnikov.com/ecmascript/chapter-5-functions/
http://dmitrysoshnikov.com/ecmascript/chapter-6-closures/
http://davidshariff.com/blog/what-is-the-execution-context-in-javascript/
http://jibbering.com/faq/notes/closures/
매개변수(parameter)와 인수(argument)
이걸 꼭 읽어볼 것


HTTP 책 따로 사서 꼭 읽어봐라. 웹프로그래머로서 기본소양이다.

---
문서객체모델 DOM Core : DOM methods and properties

강사님 추천! 정리 잘되어 있다.
https://quirksmode.org/dom/core/

---
ES5에서 router를 원시적으로 구성햅는 것을 해봐야 한다!
(이웅모 강사님 블로그에 있음)