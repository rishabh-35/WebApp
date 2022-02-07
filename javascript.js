var numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9']
cubeWrapper = document.getElementById('cube-container');

for(var i = 1; i<numbers.length+1;i++){
	cubeWrapper.innerHTML += '<li data-item=' + i + '>' + i + '</li>'
}

shuffleArray = function(){
  var index = 0
  numbers = numbers.sort(() => { return .5 - Math.random()});
  cubeWrapper.innerHTML = ''
  while (index < numbers.length) {
    var cubeItem = document.createElement("li");
    cubeItem.innerHTML = numbers[index]
    cubeItem.setAttribute('data-item', numbers[index])
    cubeWrapper.appendChild(cubeItem)
    ++index;
  }
}

sortArray = function() {
  var index = 0
  numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
  cubeWrapper.innerHTML = ''
  while (index < numbers.length) {
    var cubeItem = document.createElement("li");
    cubeItem.innerHTML = numbers[index]
    cubeItem.setAttribute('data-item', numbers[index])
    cubeWrapper.appendChild(cubeItem)
    ++index;
  }
}
