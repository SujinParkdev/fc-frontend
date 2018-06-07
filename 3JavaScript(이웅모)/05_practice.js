


---
2. 짝수와 홀수
evenOrOdd 함수는 정수 num을 매개변수로 받는다. num은 1이상의 정수이며, num이 음수인 경우는 없다. 
num이 짝수일 경우 'Even'을 반환하고 홀수인 경우 'Odd'를 반환하도록 evenOrOdd에 코드를 작성하라.

단, if문을 사용한 답과 3항 연산자를 사용하는 답 두가지를 제시하여야 한다.

// if문
function evenOrOdd(num) {
  if (num%2===0) {
  return "Even"
  } else if (num%2===1) {
  return "Odd"};
  }

console.log(evenOrOdd(2)); // Even
console.log(evenOrOdd(3)); // Odd
console.log(evenOrOdd(1000)); // Even

// 3항 연산자
function evenOrOdd(num) {
 return (num%2===0) ? "Even" : "Odd";
}

---
// 3. 문자열 다루기
// alphaString46 함수는 문자열 s를 매개변수로 입력받는다. 
// s의 길이가 4 ~ 6이고, 숫자로만 구성되어 있는지 확인하는 함수를 완성하라. 
// 예를들어 s가 'a234'이면 false를 리턴하고 '1234'라면 true를 리턴한다

function alphaString46(s) {
  var al = 0;
  al = (4 <= s.length <= 6 && !isNaN(s)) ? true : false;
  return al;
  };

console.log(alphaString46('1234')); // true
console.log(alphaString46('9014')); // true
console.log(alphaString46('723'));  // false
console.log(alphaString46('a234')); // false
console.log(alphaString46(''));     // false
console.log(alphaString46());       // false

// TypeError : Cannot read property 'length' of undefined
// => s.length에서 에러가 난 것.
// 왜? 아무 값도 안 넣어줬기 때문에.
// 그렇다면 s가 undefind이면 false를 반환하도록 해야함

---
// 4. 문자열 내 p와 y의 개수
// numPY함수는 대문자와 소문자가 섞여있는 문자열 s를 매개변수로 입력받는다. 
// 대소문자를 구별하지 않으며 s에 'p'의 개수와 'y'의 갯수를 비교해 같으면 true, 
// 다르면 false를 리턴하도록 함수를 완성하라. 
// 'p', 'y' 모두 하나도 없는 경우는 항상 true를 리턴한다. 
// 예를들어 s가 'pPoooyY'면 true를 리턴하고 'Pyy'라면 false를 리턴한다.

function numPY(s) {
ss = '';
ss = s.lowcase;
countP = 0;
countY = 0;


for(i=0; i<s.length; i++) {
  if(s[i]==='p') {
    countP++;
  };
};
for(i=0; i<s.length; i++) {
  if(s[i]==='y') {
    countY++;
  };
};

result = 0;

if (countP==countY) {
  return result = true;
} else if (countP === countY === 0) {
  return result = true;
} else { return result = false; }

return result;
}

console.log(numPY('pPoooyY')); // true
console.log(numPY('Pyy'));     // false
console.log(numPY('ab'));      // true
console.log(numPY(''));        // true
console.log(numPY());          // true


---

// 5. 이상한 문자만들기
// toWeirdCase함수는 문자열 s를 매개변수로 입력받는다. 
// 문자열 s에 각 단어의 짝수번째 인덱스 문자는 대문자로, 
// 홀수번째 인덱스 문자는 소문자로 바꾼 문자열을 리턴하도록 함수를 완성하라. 
// 예를 들어 s가 'hello world'라면 첫번째 단어는 'HeLlO', 두번째 단어는 'WoRlD'로 바꿔 'HeLlO WoRlD'를 리턴한다.

// 주의) 문자열 전체의 짝/홀수 인덱스가 아니라 단어(공백을 기준)별로 짝/홀수 인덱스를 판단한다.

function toWeirdCase(s) {

  var change = '';
  for (i=0; i<s.length; i++){
    if (i%2==0){
      change = s.replace(s[i], s[i].uppercase);
    } if else (i%2===1) {
      change = s.replace(s[i], s[i].lowcase);
    }
  }
  return change;  
}

console.log(toWeirdCase('hello world'));    // 'HeLlO WoRlD'
console.log(toWeirdCase('my name is lee')); // 'My NaMe Is LeE'

---
// 6. 핸드폰번호 가리기
// 핸드폰 요금 고지서에 표시할 전화번호는 개인정보 보호를 위해 맨 뒷자리 4자리를 제외한 나머지를 *으로 바꿔야 한다. 전화번호를 나타내는 문자열 str을 입력받는 hideNumbers 함수를 완성하라 예를들어 s가 '01033334444'면 *******4444를 리턴하고, '027778888'인 경우는 *****8888을 리턴한다.

function hideNumbers(str) {
  var stars = '';
  var changed = [];
  changed = str.split(str[str.length-5], str[str.length-1]);

  for (var i=0; i <= changed[0].length; i++) {
    stars = stars + '*'
  }

  return stars + changed;
};

console.log(hideNumbers('01033334444')); // *******4444
console.log(hideNumbers('027778888'));   // *****8888