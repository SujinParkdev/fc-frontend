1. for문을 사용하여 0부터 10미만의 정수 중에서 짝수만을 작은 수부터 출력하시오.
0
2
4
6
8

for(i=0; i<10; i++){
  if (i%2===0){
    console.log(i);
  }
}

#2. for문을 사용하여 0부터 10미만의 정수 중에서 짝수만을 작은 수부터 문자열로 출력하시오.
02468

var str = '';

for(i=0; i<10; i++){
  if (i%2===0){
    str = str + i;
  }
}

console.log(str);

#3. for문을 사용하여 0부터 10미만의 정수 중에서 홀수만을 큰수부터 출력하시오.
9
7
5
3
1

var str = '';
for(i=0; i<10; i++){
  if (i%2===1){
    str = i + str;
  }
}
console.log(str);

#4. while문을 사용하여 0부터 10까지 정수 중에서 짝수만을 작은 수부터 출력하시오.
0
2
4
6
8

var n = 0;

while (n < 11) {  // n : 0 1 2 3 4 5 6 7 8 9 10
  n++; // n : 1 2 3 4 5 6 7 8 9 10 11
  if (n%2===0) { // n : 2 4 6 8 10 일때
    console.log(n);
  }
}

#5. while문을 사용하여 0부터 10미만의 정수 중에서 홀수만을 큰수부터 출력하시오.
9
7
5
3
1

홀수만 어레이에 넣고
포문 돌려서 순서대로 출력. (초기값을 10으로 주고 감소)

var find_odd = 0;
var odd_list = [];
while (find_odd<10){
  find_odd++;
  if (find_odd%2===1){
    odd_list = find_odd;
  };
}
for(i=10; 0<i<10; i--){
  console.log(odd_list[i]);
}

#6. for 문을 사용하여 0부터 10미만의 정수의 합을 출력하시오
45
#7. 1부터 20까지의 정수 중에서 2 또는 3의 배수가 아닌 수의 총합을 구하시오.
73
#8. 1부터 20까지의 정수 중에서 2 또는 3의 배수인 수의 총합을 구하시오.
137
#9. 두 개의 주사위를 던졌을 때, 눈의 합이 6이 되는 모든 경우의 수를 출력하시오.
[ 1, 5 ]
[ 2, 4 ]
[ 3, 3 ]
[ 4, 2 ]
[ 5, 1 ]
#10. 삼각형출력하기
다음을 참고하여 *(별)로 높이가 5인(var line = 5) 삼각형을 문자열로 완성하라. 개행문자('\n')를 사용하여 개행한다. 완성된 문자열의 마지막은 개행문자('\n')로 끝나도 관게없다.

// 높이(line)가 5
*
**
***
****
*****
#11. 트리 출력하기
다음을 참고하여 *(별)로 트리를 문자열로 완성하라. 개행문자('\n')를 사용하여 개행한다. 완성된 문자열의 마지막은 개행문자('\n')로 끝나도 관게없다.

// 높이(line)가 3일때 + 높이(line)가 5일때
*
**
***
*
**
***
****
*****