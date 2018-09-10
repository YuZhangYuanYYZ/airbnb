function filter(array, cb) {
  let i = 0;
  for (i = 0; i < array.length; i++) {
    // if (array[i] == 4) 
    // if (array[i] > 2) 
    if (cb(array[i])) {

      return array;
    }
  }
}

filter((new Array(0, 3, 4, 4)), 3);


filter([1, 2, 3], function (a) {
  return a > 2;
})

filter([1, 2, 3], function (a) {
  return a == 4;
})

filter([1, 2, 3], function (a) {
  return a <= 3;
})

function forEach(array, cb) {
  let i = 0;
  for (i = 0; i < array.length; i++) {
    cb(array[i], i)
  }
}


forEach([1, 2, 3], function (item, index) {
  if (item > 2) {
    console.log(item);
  }
})


forEach([1, 2, 3, 4], function (item, index) {
  if (item + index == 3) {
    console.log(item, index);
  }
})


function myMap(array, cb) {
  let i = 0;
  for (i = 0; i < array.length; i++) {
    array[i] = cb(array[i], i);
  }
  array.push(array.length);
  return array;
}


myMap([1, 2, 3], function (item, index) {
  return item * 2;
})
// [2,4,6]


myMap([1, 2, 3], function (item, index) {
  return item + 2;
})
// [3,4,5]
myMap([1, 2, 3], function (item, index) {
  return item - 1;
})

var num = 5,
  i;

function secondcount() {
  console.log(num);
  document.getElementsByClassName("code-tips-title")[0].innertText = num;
  num = num - 1;
  if (num === 0) {
    console.log(num, '++++');
   return;
    clearTimeout(i);
  }
  i = setTimeout(secondcount, 100);
  
}