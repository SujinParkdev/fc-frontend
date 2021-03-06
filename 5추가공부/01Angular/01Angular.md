1강. 식별자, 원시타입, 이스케이프
=============

### 1) 변수선언

ES6부터 var대신에 let, const를 통해 변수선언 

<pre><code>let aa; 
//아무 값도 없으니 undefined 출력
aa = 100 
console.log(aa) 
//100을 출력 
</pre></code>


한꺼번에 여러개의 변수를 할당할 수도 있다. 

<pre><code>let aaa=1000, bbb=1020; 
</pre></code>


let은 변수를 선언할 때 쓰는 예약어. 아무 값이 없으면 undefined가 뜬다. 얼마든지 값을 바꿀 수 있는게 변수.  

상수라는 것은 더이상 값을 바꾸지 않고 항상 일정하게 유지되는 것. 값을 바꾸지 말아야 하는 경우 사용됨. ES6부터 등장. 상수를 선언할 때는 대문자와 언더바를 이용하여 네이밍하고 예약어로는 const를 사용 


<pre><code>const AA_BB = 200; </pre></code>

만약 다른 수를 할당하려고 하면 에러가 난다. 


### 2) 식별자(identifier)

식별자(identifier)는 식별할 수 있는 도구를 말한다. 변수명, 상수명, 함수의 이름 등이 식별자의 역할을 한다. 식별자는 반드시 $, 문자, 언더바만 사용할 수 있다. 유니코드를 사용할 수 있는 경우는 극히 드물다. 내장된 예약어는 식별자로 사용할 수 없다. 식별자 이름을 사용할 때 camel case(varName), snake case(aa_bb_cc_, 밑줄을 이용해서 계속 쓰는)의 두가지 방법을 많이 사용한다. 그리고 대문자로 시작하지 않는 것이 일반적. 객체를 나타내는 클래스의 경우에는 대문자로 시작. 그리고 jQery에서 $로 식별자를 시작함.  

리터럴은 식별자 뒤에 할당되는 값을 말한다. 숫자형 리터럴, 문자형 리터럴("들어갈 값")이 있다. 

자바스크립트에는 원시타입(원시값)이 있다. 
* 원시타입(premitive) 6가지 : 
    1. 숫자 (파이, 원주율 등은 숫자라 원시타입)
    2. 문자열
    3. 불린
    4. null(아무 값을 갖지 않음)
    5. undefined
    6. 심볼 
    

원시타입 이외에는 객체(Object)가 있다. 객체의 경우에는 커스텀데이터타입을 만들어 사용할 수 있다. 
* 객체(Object) : Array, Date, RegExp(정규표현식), Map, Set, Weakset 

자스에서는 숫자를 나타낼 때 정수, 실수 등으로 분리되지 않는다. 특이하게 숫자를 나타내는 데이터타입이 하나밖에 없다. 대부분 다른 프로그래밍언어같은경우 세분화되어서 사용된다. 때문에 정밀한 연산이 요구되는 어플리케이션에서는 자스를 선택할 수 없음. 저장할 때는 더블형식으로 저장됨.  

지수형태, 음수, 무한대값(Infinity), NaN(숫자가 아님을 나타냄) 이렇게 숫자에 대응되는 Number객체에는 다양한 프로퍼티가 있다.  

문자열(String)은 unicode형태의 텍스트데이터를 사용한다. 다국어지원가능한 코드를 의미. " "나 ''를 통해 문자 리터럴을 표현. 

### 3) 이스케이프

특수문자를 나타낼 때는 이스케이프를 사용해야 한다.  

<pre><code>cost ddd = 'Sam looked up, and said "hello, old friend!", as Mas walked in.';</pre></code>  

문자열로 만든 '' 안에 ""가 들어가게 되면 그대로 출력 됨. 

그러나  

<pre><code>cost ddd = "Sam looked up, and said |"hello, old friend!|", as Mas walked in."; </pre></code>
의 경우에는 안에 들어가는 ""를 이스케이프 처리하기 위해 역슬레시를 앞에 달아준다. 

<pre><code>let n1 = 20; 
const message = "n1의 값은 "+n1; 
message 
//"n1의 값은 20" 이 뜸 </pre></code>

문자열 채우기라는 기능을 ES6에서는 interpolation이라고 한다. ${ }를 사용함. 

<pre><code>const message2 = "n1의 값은 ${n1}입니다."; 
message2 
//"n1의 값은 ${n1}입니다.";가 출력됨 </pre></code>

왜? 이렇게 하면 이스케이프 처리되기 때문에 큰따옴표 대신에 틸드키 밑에 보면 백틱을 넣어주면 된다.(물결표시 밑에 있는 것) 

<pre><code>const message3 = `n1의 값은 ${n1}입니다.`; 
message3 
//"n1의 값은 20입니다."라고 출력됨 </pre></code>

문자열을 출력할 때 멀티라인(여러 줄로 출력)하고 싶을 때는 

<pre><code>const multiline = "line1|nline2"; 
multiline 
//"line1 
line2" </pre></code>

가 출력됨. 역슬레시n을 사용한다. 
프로그램 상에서는 |r|n 이나 |n|r을 사용하기도 한다. 

백틱을 이용해보자 

<pre><code>const multiline2 = `line1 
line2 
line3`; 
multiline2 
//"line1 
line2 
line3" 가 출력된다.  </pre></code>

그러나 앞에 공백처리가 되어 있지 않아서 해주고 싶다면 

<pre><code>const multiline3 = "line1|n" +  
" line2|n" + 
" line3"; 
multiline3 
//"line1, 
// line2, 
// line3" 이렇게 앞에 들여쓰기가 들어간 상태로 예쁘게 출력됨. </pre></code>

다음 숫자와 문자열을 같이 사용하는 경우가 있다. 

<pre><code>const res1 = 10+'10'; 
res1 
//"1010"이 출력. 문자열과 문자열이 더해져 출력이 된다. </pre></code>

<pre><code>const res2 = 10*'10'; 
res2 
//100이 출력.  </pre></code>

숫자와 문자열을 더했을때는 숫자가 문자열이 되는데 곱하기를 할 경우에는 문자열이 숫자열이 됨. 이런 특징이 있는 것을 이해하라. 

심볼타입은 뒤에서 다시 설명할 것.심볼은 ES6에서 도입된 새로운 값. 유일함. 일종의 object와 비슷하다. 어떤 다른 심볼과도 일치하지 않는 특징이 있다. 객체는 각각의 다 다른 자신만의 객체라서 항상 유니크하다. 심볼 역시 그렇다. 그러나 원시타입이기 때문에 어떤 변화가 일어나지 않는 특징이 있다. 변하지 않는 값이라는 뜻에서 원시값. 심볼은 Symbol()이라는 생성자를 통해서 만들 수 있다. 다른 식별자(변수명, 상수명)와 혼동하지 않도록 하라.  

* null은 아무 값도 없도록 지정된 것. 

    aa = null; 로 지정하면 aa는 null의 값을 가지고 있다. 아직 어떤 값을 가지고 있지 않다. 프로그래머가 의도적으로 아직 어떤 값을 지정하지 않았다라는 뜻. 프로그래머에게 허용된 데이터타입 

* undefined는 자스 내에서 아직 아무값도 지정되지 않았다는 것. 자스 자체내에서 지정해준 데이터 타입.  

** 원시타입과 객체의 차이점 : 원시타입은 불변하는 개념. 숫자 3은 계속 숫자3이다. 객체는 여러가지 값이나 복잡한 값을 표현할 수 있고 얼마든지 변할 수 있다.  

일종의 하나의 컨테이너가 있으면 안에 여러 내용물을 담을 수 있다. 시간이 지나면 안의 내용물이 바뀔 수 있지만 컨테이너가 바뀌는 것은 아니다. 컨테이너를 객체라고 생각한다면 객체는 여러 값을 가질 수 있을 뿐 아니라 여러 복잡한 값을 나타낼 수 있다. 

객체를 표현할 때 사용하는 문법이 있는데 중괄호로 표현함. {객체의 시작 }객체의 끝을 알림.  

<pre><code>const myObj = {}; </pre></code>


객체는 기본적으로 프로퍼티(멤버, 필드라고도 부름. 객체의 컨텐츠를 말하는 것)와 메소드가 있다. 

프로퍼티는 키와 값의 쌍으로 이루어져있음. 프로퍼티이름은 반드시 문자열이나 심볼로 이루어져야 한다. 객체에 어떤 내용물, 즉 프로퍼티를 담으려면  

<pre><code>myObj.color </pre></code>

이렇게 담아준다. 여기서 .은 접근 연산자라고 한다.(member access operater) color라는 멤버에 접근하기 위해 사용하는 연산자.  

<pre><code>const obj = {}; 
obj.color = "red"; 
obj.color 
//"red"가 출력됨. 프로터피 이름과 키가 color, 값이 red인 것. </pre></code>

<pre><code>obj["color"] 
//컬러프로퍼티를 출력할때 이렇게도 가능. 이렇게 하면 "red"가 출력됨 </pre></code>

참고로 프로퍼티는 심볼로도 이용가능하다. 

<pre><code>const SIZE = symbol(); 
obj[SIZE] = 100; 
obj[SIZE] 
//100이 출력됨 </pre></code>

SIZE가 심볼 프로퍼티가 되는 것. 

<pre><code>console.log(obj) 
//Object {color: "red", Symbol(): 100}이 출력됨. color가 키, red가 값이다. 아까 만들어 놓은 SIZE가 Symbol(): 100이다. 생성자가 나타남. 심볼 프로퍼티 SIZE에 접근할 때는 obj[SIZE]로 접근가능하다. </pre></code>

사람이라는 객체를 만들어보자 

<pre><code>const person1 = { 
name: '홍길동', 
age: 20, 
}; </pre></code>

이렇게 하면 person1에는 두개의 프로퍼티(멤버)가 들어가 있다. name, age는 키가 되고 '홍길동', 20은 값이 되는 것. 

그리고 객체 안에 또다른 객체가 멤버가 될 수도 있다. 

<pre><code>const person3 = { name: "강길동", classification: { 
a: 1, 
b: 2, 
c: 100, 
d: 200, 
e: 300 
} }; </pre></code>

classification이라는 또다른 객체를 넣어준 것.  

<pre><code>person3.name 
//"강길동" 출력됨 

person3.classification.b 
//2가 출력됨. 

person3["classification"].c 
//100가 출력된다. 

person3.classification["d"] 
//200이 출력된다. </pre></code>

또한 객체에 함수를 담을 수도 있다.  

<pre><code>person3.speak = function() {return "Hello";}; </pre></code>

이렇게 하면 person3의 speak프로퍼티에 함수를 담은 것. 

<pre><code>console.log(person3) 
//Object {name: "강길동", classification: Objext, speak: function}이 출력된다. </pre></code>

classification의 값은 객체이고, speak의 값은 함수라는 것. 함수를 호출하려면 

<pre><code>person3.speak() 
//함수가 동작하여 "Hello"라는 값이 출력 됨. </pre></code>

괄호가 없으면 
<pre><code>person3.speak 
//function (){return "Hello";}가 뜬다 </pre></code>

프로퍼티를 제거할 수도 있다. delete라는 명령어, 연산자를 이용하여. 

<pre><code>delete.person3.classification 
//제대로 작동하면 true값이 출력된다.  

console.log(person3) 
//Object {name: "강길동", speak: function} 만 출력된다. </pre></code>

함수를 삭제할 때에 ()필요없다. 프로퍼티 이름만 넣어주면 된다 

<pre><code>delete.person3.speak; 
//true출력된다. </pre></code>

**원시 타입의 종류에는 
1. 숫자 
2. 문자열 
3. 불린 
4. null 
5. undefined 
6. symbol 

 숫자, 문자열, 불린에 대응하는 객체도 있다. 
숫자는 Number, 문자열은 String, 불린은 Boolean  


* Number 
* String 
* Boolean 

이러한 객체 타입은 따로 타입을 지정하지 않더라도 자동으로 ES6에서 지정이 된다. 이런 타입을 동적으로 된다(동적 타이핑) 

예를들어 foo = 4; 하면 foo라는 변수가 자동으로 Number타입으로 변환이 됨. 자스에는 프로그램이 처리되는 과정에서 입력되는 각 타입에 맞춰서 자동으로 처리 된다. (원시형 타입임!!) 

이런 원시타입 이외에 왜 대응되는 객체가 필요하냐? 
1. 어떤 특별한 값을 저장하고자 할 때 이러한 객체를 이용한다. 
2. 어떤 필요한 함수 기능을 사용하고자 할때. 함수형태의 기능을 사용하기 위해서. 

원시타입에서는 활용할 수 없다. 특정한 값이 정해져있기만 하기 때문.  

<pre><code>const s = "Hello World"; </pre></code>
  
라고 하면 단순히 문자열 원시타입이다. 객체는 {}로 시작하니까. 이 원시타입의 상수를 객체처럼 사용할 수 있다. 

<pre><code>s.toUpperCase(); 
//"HELLO WORLD"가 출력됨. </pre></code>
앞에서 단순 상수를 만들었는데? 마치 s 객체가 toUpperCase라는 함수를 가지고 있는 것처럼. 어떻게 된 것일까? 

자스에서 원시타입에 대응되는 String타입의 객체를 일시적으로 만든 것이다. 그래서 실제로 String객체 안에 담고 있는 toUpperCase함수가 호출된 것. 그러나 이것은 일시적이다. 이 함수를 호출될 때만 만들어진 것이고 이 객체는 그 외에 존재하지 않는 것. 호출된 이후에는 이 객체가 파괴된다. 

<pre><code>console.log(s); 
//Hello World가 출력된다. </pre></code>
만약 객체가 생성된 것이라면 키-값 쌍으로 이루어진 객체가 표시가 되어야 하지만 단지 상수 s가 가지고 있는 문자열만 출력을 해주고 있음. 임시객체로 보면 된다.  

<pre><code>const s1 = "World"; 
s1.length 
//5가 출력됨. 문자열의 길이값인 5가 출력되는 것.  
s1.aa = "aa" 
//aa라는 프로퍼티에 값을 주고 출력해보면. 
s1.aa; 
//undefined가 출력됨. 일시적으로 객체를 만들었다가 프로퍼티나 함수를 호출하고 난 다음에 객체를 파괴하기 때문 </pre></code>

원시타입같은 경우는 이런 것을 적용할 수 없는데 객체를 이용하면 다양하게 적용해서 사용할 수 있기 때문.  

이 객체에 타입 중에 배열타입의 객체가 있다. 키는 순차적인 숫자값을 가지게 되고 여러 유용한 메소드를 가지고 있다. 배열의 크기가 고정되지 않아 추가하고 삭제할 수 있어서 다른 언어에 비해서 편리하다. 그리고 배열 안에 데이터 타입에 상관없이 다 넣을 수 있어서 편리하다. 그리고 0부터 출발한다. 

자스에서 배열의 리터럴을 표현할 때  

<pre><code>const a1 = [1, 2, 3, 4]; 
a1 
//(4) [1, 2, 3, 4] (전체의 길이값) [요소] 
0:1 
1:2 
2:3 
3:4 
length: 4 
__proto__ : Array(0) 
이 출력된다

const a2 [1, 'two', 'three', null] 
a2 
//(4) [1, 'two', 'three', null] </pre></code>

멀티라인으로도 적어줄 수 있다. 객체로도 값을 넣어줄 수 있다. 

<pre><code>const a4 = [ 
{name: "javascript', level: 3}, 
{name: "java", level: 5}, 
{name: "C", level: 4} 
}; 
a4 
//(3) [Object, Object, Object] 
0: Object 
1: Object 
2: Object 
length: 3 
__proto__: Array(0) </pre></code>

배열 안에 배열을 넣을 수도 있다 

<pre><code>const a5 = [ 
[1, 3, 5, 7], 
[2, 4, 6, 8], 
]; 
a5 
//(2) [Array(4), Array(4)] 출력 </pre></code>

배열의 요소에 각각 접근할 때는 대괄호를 하고 안에 인덱스의 숫자를 넣어주면 된다. 

<pre><code>a5[1] 
//0부터 시작하니까 두번째 요소는 1로 불러올 수 있음 (4) [2, 4, 6, 8] 출력 </pre></code>

배열의 길이를 모르는데 마지막 요소를 가지고 오고 싶다면  

<pre><code>a3[a3.length-1] 
//이렇게 하면 마지막 요소에 해당되는 값을 불러올 수 있다. </pre></code>

5강. 데이터타입변환 
=============

ES6에서 새롭게 나온 타입 Map, Set과 대응 되는 것은 Week, WeekSet이 있다.  

실질적으로 많이 사용하는 것 중에 데이터타입변환이 있다. 해당 문자열 타입을 숫자로 바꾸는 등의 타입변환을 이야기 한다. 그대로 쓸 수 없는 경우에 새롭게 변환해서 사용하는 경우. 주로 문자를 숫자로 바꾸는 경우가 많다 

<pre><code>const number = "440"; 
number 
//"440"  </pre></code>

이 값을 숫자로 바꾸고 싶은 경우 number객체의 생성자 Number를 사용하는 것. 

<pre><code>const num = Number(number); 
num 
//440 (숫자로 바뀜/만약 숫자로 바꿀 수 없는 경우 NaN로 반환됨) </pre></code>

parseInt, parseFlot 와는 약간의 차이가 있다 

<pre><code>const a = parseInt(num) 
a 
//440 </pre></code>

<pre><code>const a100 = parseIt("120vv"); </pre></code>
문자열이 들어가 있을 경우에도 바뀌나? 
<pre><code>a100 
//120 <-숫자만 인식해서 숫자로 바꾸어줌. 뒤에 문자열은 완전히 무시. 숫자를 바꿀 때 16 진수로 바꿀 것인지, 10진수로 바꿀 것인지 결정할 수 있음. 기본적으로 10진수로 바꾸긴 한다. </pre></code>

<pre><code>const i1 =parseInt("120vv", 10); 
i1 
//십진수로 출력하여 120 출력 </pre></code>

<pre><code>const i2 = parseInst("3a", 16); 
//16진수로 변환해서 또다시 10진수로 변환  
i2 
//58 출력 

const i3 = parseFloat("12.2KW"); 
i3 
//12.2 <-마찬가지로 뒤에 나오는 문자를 무시 . 마찬가지로 기수가 10으로 설정이 되어있음(기본적으로 십진수로 변환한다는 뜻) </pre></code>

Number 생성자는 이런 기수를 사용하지 않음. 우리가 보통 객체를 생성할 때는 new 객체이름 을 사용하는데 Number, String같은 경우는 new를 생략하고 바로 사용하는 것. new를 생략하는 것을 잘 생각하기.  

자스에서 날짜와 시간은 Date객체에서 사용한다. Date객체는 자바에서 가져온 객체. 사용하기 조금 불편한 점이 있다. new 연산자를 사용해서 만들면 된다. 

<pre><code>const now = new Date(); 
now 
//현재시간 날짜를 표시해 줌. 보기가 조금 불편함. 날짜를 안에 넣어서 만들 수도 있음 

const childDay = new Date(2017, 5, 5); 
childDay 
//Mon Jun 05 2017 00:00:00 </pre></code> 

이렇게 뜬다. 오월은 May인데 6월이 뜸. 월은 0부터 시작한다. 0이 1월인것. 

<pre><code>const childDay1 = new Date(2017, 4, 5); 
childDay1 
//Fri May 05 2017 00:00:00 이렇게 해야 맞음! </pre></code>

시간까지 표현하고 싶다면 

<pre><code>const childDayTime = new Date(2017, 4, 5, 18, 0); 
childDayTime 
//Fri May 05 2017 18:00:00 </pre></code>

이렇게 만들어놓고 Date객체에 접근 가능함. childDay에서 월을 얻어오고 싶다고 한다면 

<pre><code>childDay1.getMonth(); 
//4 <-월은 0부터 시작이므로 5월임 </pre></code>

get뒤에 Year(연도), Day(요일), Date(일자) 
를 넣으면 됨. 요일도 0이 일요일로 시작하는 것을 유의하면 됨.  

이 Date객체를 숫자로 바꾸는 것이 vauleof 

<pre><code>const d = new Date(); 
//Wed Jul 19 2017 15:28...(현재시간 나옴) 

const dd = d.valueOf(); 
dd 
//1500445688177 </pre></code>

이 숫자는 1970.1.1부터 지나온 시간을 초단위로 계산해서 보여준 것 

불리언 같은 경우 

<pre><code>const bool = true; 
bool 
//true  </pre></code>

자스에서 true는 1, false는 0으로 계산한다. 

조건연산자로 변환할 수 있다. 

<pre><code>const nn = bool ? 1:0; 
//bool의 값이 참이면 1, 아니면 0 
nn 
//참이기 때문에 1을 출력. </pre></code>

문자열로 변환할 때는 toString()메소드을 사용. 많이 사용하지는 않음 

<pre><code>const num1 = 14.1; 
num1 
//14.1 

const strNum = num1.toString(); 
strNum 
//"14.1"이라는 문자열을 얻을 수 있다.  </pre></code>

Date객체도 문자열로 바꿀 수 있다. 

<pre><code>const strDate = childDay1.getDay(); 
strDate 
//"Fri May 05 2017 ..." </pre></code>

배열 같은 경우에는 문자열로 바꾸면 좀 쓸모가 있을 것이다 

<pre><code>const array1 = [1, "hello", 100]; 
array1.toString(); 
"1,hello,100"</pre></code> 

불리언으로 변환하는 방법에는, 

<pre><code>let ii = 0; </pre></code>
부정연산자를

6강. 연산자
========

연산자 : 산술(+ - * / %와 -+ ++ --) , 비교, 논리, 할당 ..

단항 연산자

<pre><code>i1 = 120
i11 = 200- -i1;
//마이너스 두개 중간에 띄워쓰기가 있으면 뒤에 마이너스가 +로 전환해주는 단항연산자의 역할을 함.
//320을 출력

const ss = "5";
//문자열 "5" 출력
y = 3 + +ss;
//플러스 두개 사이에 띄워쓰기가 있으면 뒤에 플러스가 문자열 "5"를 숫자로 바꾸어줘서
//8을 출력

y = 3 + ss;
//"35" 문자열이 병합되어 출력

y = 3 + +ss;
//y의 값을 8로 바꿔줌
r1 = y--
//8에 --를 했으나 그대로 8
r1 = y-- + y--;
//13이 출력. 왜?? 모르겠음 ㅠㅠ
//제일 처음 y는 8이었는데 r1으</pre></code>


앵귤러
========

npm사용하는 법

1. 프로젝트 폴더 생성

mkdir test_web_app
test_web_app

npm install jquery 
//최신버전 jquery설치하는 것 pakage.json파일이 없어서 warn이 뜨는데 설치된 것. jquery패키지가 설치된 것을 확인하려면 dir로 보면 node_module이 설치된 것을 확인할 수 있다
dir
dir/w
//제이쿼리 패키지에 들어가서 확인해봐라
jquery 디렉터리
cd src
//src에 제이쿼스 소스가 들어있음. 여기서 확인할 수 있다. 
cd ..
dir/w
cd dir
cd dist
//다시 test_web_app까지 나와서 
npm list
//설치된 제이쿼리패키지를 확인할 수 있다

3강. npm사용해보기

vscode로 코딩할 것
탐색기로 우리가 만든 test_web_app 폴더를 열어준다
자동으로 설치된 jquery패키지를 확인할 수 있다

test_web_app에서 index.html로 새파일을 만들어준다

[index.html]
```
<!doctype html>
<html>
<head>
<title>Test Web APP</title>
<meta charset="utf-8">
<mata name="viewport" content="width=device-width, initial-scale=1">
</head>

<body>

<h4>
<span id="display-name"></span>님 반갑습니다.
</h4>
<div class="contents">
<label for="userName">사용자 이름 : </label>
<input type="text" name="userName" id="userName">
<button type="button">입력하기</button>
</div>

<script src="./jquery/dist/jquery.min.js"></script>
<script>
$(document).ready(function(){
	$("button").on('click', function(){
	var userName = $("#userName").val();
	$("#dispaly-name").text(userName)
	});
});
</script>

</body>
</html>
```
앞에서 만들었던 제이쿼리패키지를 불러오려고 스크립트 태그를 만든 것.
우리가 같은 노드모듈 안에 있는 jquery.mon.js가 필요해.

폴더를 열어서 index파일에 들어가서 크롬으로 연결해서 보자
 16:55까지 들음