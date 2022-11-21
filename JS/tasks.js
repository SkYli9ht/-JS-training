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


  //Exercise

//The makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee) function constructs and returns a repair droid purchase message. It declares three parameters whose values are set when it is called.

//orderQuantity - the number of droids in the order
//pricePerDroid - price of one droid
//deliveryFee - delivery cost
//Modify the function code so that it returns an order message in the format "You ordered droids for the amount of <total price> credits. Shipping (<shipping cost> credits) is included in the total price.". Don't forget the shipping cost when estimating the cost of the total cost.

function makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee) {
    // Change code below this line
  
    // const totlaPrice = orderedQuantity*pricePerDroid+deliveryFee;
  const message = `You ordered droids worth ${orderedQuantity*pricePerDroid+deliveryFee} credits. Delivery (${deliveryFee} credits) is included in total price.`;
  
    // Change code above this line
    return message;
  };

//Exercise

//The isAdult function declares one age parameter (age) whose value will be set at the time it is called. Assign the passed user age verification to the age of majority. A person is considered an adult at 18 years of age or older.

  function isAdult(age) {
    // Change code below this line
    const passed = age >= 18;
  
    // Change code above this line
    return passed;
  }

//Exercise

//The isValidPassword(password) function allows the saved and entered passwords to be equal and returns the validation result - true or false. The variable SAVED_PASSWORD stores the value of the previously saved password. The entered password is passed in the password parameter.

//Assign isMatch a check to validate the previously entered and saved passwords. The result of the validation check must be true if the value matches, and false if not.

function isValidPassword(password) {
    const SAVED_PASSWORD = 'jqueryismyjam';
    // Change code below this line
    const isMatch = SAVED_PASSWORD === password;
  
    // Change code above this line
    return isMatch;
  }

//Exercise

//Add an age check for the user value, a parameter age, a condition for the if statement.

//If the user is an adult, block if and the variable should include a message following the sequence "You are an adult".
//If present, the else blocking and closing of the "You are a minor" line should be performed.

function checkAge(age) {
    let message;
  
    if (age >= 18) { // Change this line
      message = 'You are an adult';
    } else {
      message = 'You are a minor';
    }
  
    return message;
  }

//Exercise
 
//The checkStorage(available, ordered) function checks the possibility of placing an order and returns a message about the result. It declares two parameters, the values of which will be set during its call:

//available - total number of items in stock
//ordered - items in the order
//Using branches, complete the function code so that:

//If the order contains a number that exceeds the number of goods in stock, the string "Not enough goods in stock!" is written to the message variable.
//Otherwise, the string "Order is processed, our manager will contact you." is written.

function checkStorage(available, ordered) {
    let message;
    // Change code below this line
  
    if (available >= ordered) {
      message = 'Order is processed, our manager will contact you.'
  } else {
      message = `Not enough goods in stock!`
  }
  
    // Change code above this line
    return message;
  }
  
//Exercise

//Replace expressions with standard math operators with a combined assignment operator with addition, subtraction, multiplication, and division.

 let a = 5;
 let b = 10;
 let c = 15;
 let d = 20;

 // Change code below this line
 a += 2;
 b -= 4;
 c *= 3;
 d /= 10;

//Exercise

//The repair droid sales station is ready to go, it remains to write software for the sales department.

//The makeTransaction(pricePerDroid, orderedQuantity, customerCredits) function executes a transaction to sell droids and returns a message about the result of the transaction. It declares three parameters, the values ​​of which will be set during its call:

//pricePerDroid - price of one droid
//orderedQuantity - number of ordered droids
//customerCredits - the amount of funds on the customer's account
//Complete it with the following functionality:

//Declare a variable totalPrice to store the total amount of the order and assign it an expression for calculating this amount.
//Add a check to see if the customer can pay for the order:
//if the amount to be paid exceeds the number of credits on the client's account, write the string "Insufficient funds!" to the message variable;
//otherwise, subtract the purchase amount from the customer's account and write the following message to the message variable: "You ordered <number> droids, you have <number> credits left".

function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
    let message;
    // Change code below this line
  
    const totalPrice = pricePerDroid * orderedQuantity;
  
    if (totalPrice <= customerCredits) {
      message = `You ordered ${orderedQuantity} droids, you have ${customerCredits - totalPrice} credits left`
    } else {
      message = `Insufficient funds!`
    }

//Exercise

//The checkPassword(password) function takes the user's password in the password parameter, checks it against the administrator's password in the ADMIN_PASSWORD variable, and returns a message about the result of the comparison stored in the message variable.

//If the value of the password parameter is null, then the user has canceled the operation and the message contains the string "Canceled by user!".
//If the value of the password parameter matches the value of ADMIN_PASSWORD, the string "Welcome!" is assigned to the message variable.
//If none of the previous conditions are true, the string "Access denied, wrong password!" is written to the message variable

function checkPassword(password) {
    const ADMIN_PASSWORD = 'jqueryismyjam';
    let message;
  
    if (password === null) { // Change this line
      message =  'Canceled by user!';
    } else if (ADMIN_PASSWORD === password) { // Change this line
      message = 'Welcome!';
    } else {
      message = 'Access denied, wrong password!';
    }
  
    return message;
  }

//Exercise

//The checkStorage(available, ordered) function checks the possibility of placing an order and returns a message about the result. It declares two parameters, the values ​​of which will be set during its call.

//available - available number of items in stock
//ordered - items in the order
//Using branches, complete the function code so that:

//If there are no products in the order yet, i.e. the value of the ordered parameter is 0, the string "There are no products in the order!" is assigned to the message variable.
//If there are more items in the order than there are available items in stock, then the string "Your order is too large, there are not enough items in stock!" is assigned to the message variable.
//Otherwise, the string "The order is accepted, our manager will contact you" is assigned to the message variable.

function checkStorage(available, ordered) {
    let message;
    // Change code below this line
  
    if (ordered === 0) {
      message = `There are no products in the order!`;
    } else if (ordered > available) {
       message = `Your order is too large, there are not enough items in stock!`;
    } else {
       message = `The order is accepted, our manager will contact you`;
    }
  
    // Change code above this line
    return message;
  }

//Exercise

//The isNumberInRange(start, end, number) function checks if a number is in a range. It declares three parameters, the values of which will be set during its call:

//number - the number whose occurrence is being checked
//start - the start of the numeric span
//end - the end of the numeric range
//Assign to the variable isInRange an expression to check if number is in the numeric range from start to end. That is, the number must be greater than or equal to start and less than or equal to end. The result of the test expression will be a boolean true or false.

function isNumberInRange(start, end, number) {
    const isInRange = (number >= start  &&  number <= end); // Change this line
  
    return isInRange;
  }
