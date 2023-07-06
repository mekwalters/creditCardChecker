// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8];
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9];
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6];
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5];
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6];

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5];
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3];
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4];
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5];
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4];

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4];
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9];
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3];
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3];
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3];

// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5];


// Add your functions below:

/* Luhn Algorithm JavaScript by childofcode.com */
function validateCred(num) {
  var inputNum = num.join(''); // Convert the array of digits to a string
  var sum = 0;
  var doubleUp = false;

  /* from the right to left, double every other digit starting with the second to last digit. */
  for (var i = inputNum.length - 1; i >= 0; i--) {
    var curDigit = parseInt(inputNum.charAt(i));

    /* double every other digit starting with the second to last digit */
    if (doubleUp) {
      /* doubled number is greater than 9 than subtracted 9 */
      if (curDigit * 2 > 9) {
        sum += curDigit * 2 - 9;
      } else {
        sum += curDigit * 2;
      }
    } else {
      sum += curDigit;
    }
    doubleUp = !doubleUp; // Fix the variable assignment here
  }

  /* sum and divide it by 10. If the remainder equals zero, the original credit card number is valid. */
  return sum % 10 === 0; // Simplify the condition
}

const invalidCard = [];
const validCard = [];
const findInvalidCards = numArray => {
  for (let i = 0; i < numArray.length; i++) {
    if (!validateCred(numArray[i])) {
      invalidCard.push(parseInt(numArray[i].join('')));;
    } else {
      validCard.push(parseInt(numArray[i].join('')));
    }
  }
};

findInvalidCards(batch);
console.log('These cards are invalid: ' + invalidCard);
console.log('These cards are valid: ' + validCard);

const companies = [];
const companiesToContact = [];

const idInvalidCardCompanies = invalidCard => {
  for (let i = 0; i < invalidCard.length; i++) {
    const cardNumber = invalidCard[i].toString();
    let company;

    if (cardNumber.startsWith('3')) {
      company = 'Amex';
    } else if (cardNumber.startsWith('4')) {
      company = 'Visa';
    } else if (cardNumber.startsWith('5')) {
      company = 'Mastercard';
    } else if (cardNumber.startsWith('6')) {
      company = 'Discover';
    } else {
      company = 'Company not found';
    }

    if (!companies.includes(company)) {
      companies.push(company);
      companiesToContact.push(company);
    }
  }
};

idInvalidCardCompanies(invalidCard);
console.log(`You need to contact these companies: ${companiesToContact.join(', ')} `);


/*My original code; hung up on visa
const companies = [];
const companiesToContact = [];
const idInvalidCardCompanies = invalidCard => {
  for (i= 0; i< invalidCard.length; i++) {
  let str = invalidCard.toString();
  let firstDigit = parseInt(str.substring(0, 1));
   console.log('First Digit Test = ' + firstDigit)
  if (firstDigit === 3) {
    companies.push('Amex')
    console.log (companies);
    } else if (firstDigit === 4) {
       companies.push('Visa')
       console.log(companies)
    } else if (firstDigit === 5) {
       companies.push('Mastercard') 
       console.log(companies)
    } else if (firstDigit === 6) {
        companies.push('Discover')
        console.log(companies)
     } else {
        return ('Company not found');
     } 
    //(!companies.includes(('Visa').companiesToContact.push('Visa'))
  } // end of iterator
 }//idinvalidCardCompnies

idInvalidCardCompanies(invalidCard);
//console.log('Please contact these companies ' + companies +' ');
  */


