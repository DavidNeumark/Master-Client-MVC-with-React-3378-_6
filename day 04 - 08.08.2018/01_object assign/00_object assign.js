
class Country {

    constructor(){
        this.flag;
        this.name;
        this.alpha3Code;
        this.borders;
    }
    


    getFormatBorders(){
        return (this.borders) ? this.borders.join(" | ") : "";
    }
}



let jsonData={"flag":"https://restcountries.eu/data/isr.svg","name":"Israel","alpha3Code":"ISR","borders":["EGY","JOR","LBN","SYR"]};

//----------------------first way to add function to json object (adding per object)--------------------
let c0=jsonData;
c0.getFormatBorders=function(){
    return (this.borders) ? this.borders.join(" | ") : "";
}


//----------------------second way to add function to json object (adding per object)--------------------
let seedObj={
    getFormatBorders(){return (this.borders) ? this.borders.join(" | ") : "";}
}

let c1=jsonData;
c1.__proto__=seedObj;

//----------------------third way to add function to json object (adding per class)--------------------
let c2=new Country();
c2.alpha3Code=jsonData.alpha3Code;
c2.flag=jsonData.flag;
c2.name=jsonData.name;
c2.borders=jsonData.borders;


//----------------------fourth way to add function to json object (adding per class)--------------------
let c3=new Country();
Object.assign(c3,jsonData);


//------------------------------------------TEST ALL 4 WAYS----------------------------------------------
console.log(c0.getFormatBorders());  //--> EGY | JOR | LBN | SYR
console.log(c1.getFormatBorders());  //--> EGY | JOR | LBN | SYR
console.log(c2.getFormatBorders());  //--> EGY | JOR | LBN | SYR
console.log(c3.getFormatBorders());  //--> EGY | JOR | LBN | SYR
