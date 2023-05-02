// Write your solution in this file!
var customerName = 'bob';
const leastFavoriteCustomer = 'bobby';

function upperCaseCustomerName() {
    customerName = 'bob'.toUpperCase();
    return customerName
};

function setBestCustomer() {
    bestCustomer = 'not bob';
    console.log(bestCustomer);
    return bestCustomer;
};

function overwriteBestCustomer(newBest = 'maybe bob'){
    bestCustomer = `${newBest}`;
    console.log(bestCustomer);
    return bestCustomer;
};

function changeLeastFavoriteCustomer(){
    leastFavoriteCustomer = 'freddy';
    console.log(leastFavoriteCustomer);
    return leastFavoriteCustomer;
}

// setBestCustomer();
// console.log(bestCustomer);

// console.log(customerName);
// console.log(upperCaseCustomerName());
// console.log(customerName);

//console.log(bestCustomer); => undefined
// setBestCustomer();
// overwriteBestCustomer('maybe bob')


