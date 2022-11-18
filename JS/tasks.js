const logins = ['m4ngoDoge', 'kiwida38t', 'poly1scute', 'aj4xth3m4n'];
const findLogin = function (allLogins, loginToFind) {
    for (const login of allLogins) {
        if (login === loginToFind) {
            return `User ${loginToFind} found`;
        }
    }
    return `User ${loginToFind} is not found`;
}

console.log(findLogin(logins, `avocad3r`));
console.log(findLogin(logins, `kiwida38t`));
console.log(findLogin(logins, `jam4`));
console.log(findLogin(logins, 'poly1scute'));

//Exercise

//Complete the code functions so that it returns the result of adding the settings of the three parameters a, b and c.

    function add(a, b, c) {
    // Change code below this line
  
    return a + b + c;
  
    // Change code above this line
  }
  
  add(2, 5, 8); // 15
  
  console.log(add(15, 27, 10));
  console.log(add(10, 20, 30));
  console.log(add(5, 10, 15));

//Exercise

//The makeMessage(name, price) function composes and returns a purchase message. It declares two parameters, the values of which will be set during its call.

//name - product name
//price - item price
//Complete the function code so that the string "You picked <product name>, price per item is <product price> credits" is written to the message variable, where <product name> and <product price> are the values of the name and price parameters. Use template string syntax.

function makeMessage (name, price) {
    // Change code below this line
const message = `You picked ${name}, price per item is ${price} credits`;
    // Change code above this line
    return message;
  };

//Exercise

//The calculateTotalPrice function calculates and returns the total purchase amount. It takes two parameters, the values of which will be set when it is called.

//orderedQuantity - the number of items in the order;
//pricePerItem - price of one item item.
//Complete the function code so that the totalPrice variable contains the total amount of the purchase, the result of multiplying the number of goods by the price of one.

function calculateTotalPrice (orderedQuantity, pricePerItem) {
    // Change code below this line
    const totalPrice = orderedQuantity * pricePerItem;
  
    // Change code above this line
    return totalPrice;
  };