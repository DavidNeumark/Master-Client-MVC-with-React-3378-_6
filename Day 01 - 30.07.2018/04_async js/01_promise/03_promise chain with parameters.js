let num = 4;
let prom1 = new Promise((resolve, reject) => { (num == 4) ? resolve("prom1 OK") : reject("prom1 NOT OK"); });


prom1
    .then((x) => {
        console.log(x);
        return "I am a parameter to the chained promise";
    })  //function for resolve -> EVERY THEN RETURNS A NEW PROMISE (VOID PROMISE BY DEFAULT)
    .then((z) => console.log(z))
    .catch((y) => console.log(y))  //function for reject


/*
OUTPUT:
_______________________________

prom1 OK
I am a parameter to the chained promise
*/