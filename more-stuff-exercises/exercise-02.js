// What do the following error message and stack trace tell you?

$ node exercise2.js
  / Users / wolfy / tmp / exercise2.js: 4
console.log(greeting);
              ^

  ReferenceError: greeting is not defined
at hello(/Users/wolfy / tmp / exercise2.js: 4: 15)
at Object.<anonymous>(/Users/wolfy / tmp / exercise2.js: 13: 1)
at Module._compile(internal / modules / cjs / loader.js: 721: 30)
at Object.Module._extensions..js(internal / modules / cjs / loader.js: 732: 10)
at Module.load(internal / modules / cjs / loader.js: 620: 32)
at tryModuleLoad(internal / modules / cjs / loader.js: 560: 12)
at Function.Module._load(internal / modules / cjs / loader.js: 552: 3)
at Function.Module.runMain(internal / modules / cjs / loader.js: 774: 12)
at executeUserCode(internal / bootstrap / node.js: 342: 17)
at startExecution(internal / bootstrap / node.js: 276: 5)

    // Error message: ReferenceError: greeting is not defined
    // We are trying to print out the value of greeting but it is no defined
    // Location of the code that raises the error is exercise2.js:4:15 which is exercise2.js line 4:15