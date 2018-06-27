// 7. 문자열을 숫자로 바꾸기
// strToInt 메소드는 문자열 str을 매개변수로 받는다. 
// str을 숫자로 변환한 결과를 반환하도록 strToInt를 작성하라. 
// 예를들어 str이 '1234'이면 1234를 반환하고, '-1234'이면 -1234를 반환한다. 
// str은 부호(+,-)와 숫자로만 구성되어 있고, 잘못된 값이 입력되는 경우는 없다.

function strToInt(str){
  return str-0;
}

console.log(strToInt('1234'));  // 1234
console.log(strToInt('-1234')); // -1234


// 8. 수박수박수박수박수박수?
// waterMelon 함수는 정수 n을 매개변수로 입력받는다. 
// 길이가 n이고, 수박수박수…와 같은 패턴을 유지하는 문자열을 리턴하도록 
// 함수를 완성하라.

// 예를들어 n이 4이면 '수박수박'을 리턴하고 3이라면 '수박수'를 리턴한다.

function waterMelon(n){
    var num = Math.floor(n/2);
    if (n%2===0) {
      var sb = '수박';
      for (i=0; i<num-1; i++){
        sb = sb + sb;
      };
      return sb;
    } else {
      var bs = '박수';
      for (i=0; i<num; i++){
        bs = '수' + bs;
      };
      return bs;
    }
  };
  
  console.log('n이 3인 경우: '+ waterMelon(3));
  console.log('n이 4인 경우: '+ waterMelon(8));