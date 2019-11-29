// Add a qux property with value 3 to the myObj object we created in the previous exercise. 
// Now, examine the following code snippets:

let myProtoObj = {
  foo: 1,
  bar: 2,
};

let myObj = Object.create(myProtoObj);

myObj.qux = 3;

Object.keys(myObj).forEach(function (key) {
  console.log(key);
});

for (key in myObj) {
  console.log(key);
}

// No, they will not produce the same result cause for..in loop also takes prototype properties into account