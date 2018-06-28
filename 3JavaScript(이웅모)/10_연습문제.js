var todos = [
  { id: 3, content: 'HTML', completed: false },
  { id: 2, content: 'CSS', completed: true },
  { id: 1, content: 'Javascript', completed: false }
];

// 1. todos의 각 요소 중, id 프로퍼티의 값만을 추출한 배열을 생성하는 함수를 작성하라.
// => [3, 2, 1]

var getIds = todos.map(function(todo) {
  return getTodosId = todo.id;
})

// 2. 1에서 생성한 배열의 최대값을 구하는 함수를 작성하라.
// => 3



// 3. todos에 선두에 새로운 요소로서 객체 { id: 4, content: 'Test', completed: false }를 추가하는 함수를 작성하라
// todos = [
//   { id: 4, content: 'Test', completed: false },
//   { id: 3, content: 'HTML', completed: false },
//   { id: 2, content: 'CSS', completed: true },
//   { id: 1, content: 'Javascript', completed: false }
// ];

var todos = [
  { id: 3, content: 'HTML', completed: false },
  { id: 2, content: 'CSS', completed: true },
  { id: 1, content: 'Javascript', completed: false }
];


var newTodo = 
	[{ id: 4, content: 'Test', completed: false }];

function addTodo(todo) {
return newTodo.concat(todos); 
};

console.log(addTodo(todos));


// 4. todos에서 id가 4인 요소를 삭제하는 함수를 작성하라
// todos = [
//   { id: 3, content: 'HTML', completed: false },
//   { id: 2, content: 'CSS', completed: true },
//   { id: 1, content: 'Javascript', completed: false }
// ];


// 5. todos에서 id가 3인 요소의 completed 프로퍼티 값을 반전하는 함수를 작성하라
// todos = [
//   { id: 3, content: 'HTML', completed: true },
//   { id: 2, content: 'CSS', completed: true },
//   { id: 1, content: 'Javascript', completed: false }
// ];

forEach는 원본 자체를 바꾸기 때문에 foreach를 사용하지 말 것!

object.assign을 사용



// 6. todos에서 모든 요소의 completed 프로퍼티 값을 true로 설정하는 함수를 작성하라
// todos = [
//   { id: 3, content: 'HTML', completed: true },
//   { id: 2, content: 'CSS', completed: true },
//   { id: 1, content: 'Javascript', completed: true }
// ];

var truetodos = todos.map(function (todo) {
  return Object.assign({}, todo, { completed: true })
});

console.log(truetodos)


// 7. todos에서 완료(completed: true)한 할일의 갯수를 구하는 함수를 작성하라
