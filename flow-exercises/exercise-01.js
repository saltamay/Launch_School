// What values do the following expressions evaluate to?

false || (true && false); // false
true || (1 + 2); // true 
(1 + 2) || true; // true
true && (1 + 2); // true
false && (1 + 2); // false
(1 + 2) && true; // true
(32 * 4) >= 129; // false
false !== !true; // false
true === 4; // false
false === (847 === '847'); // true
false === (847 == '847'); // false
(!true || (!(100 / 5) === 20) || ((328 / 4) === 82)) || false; //true; How? 
// (!(100 / 5) === 20) => false then !true || (!(100 / 5) === 20) evaluates to false
// (328 / 4) === 82) => true then (!true || (!(100 / 5) === 20) || ((328 / 4) === 82)) evaluates to true
// true || false => true
