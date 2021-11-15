var printPlayerName = function(name) {
    console.log(name);
}
printPlayerName("abyaz")

// implicit example:1
var sakib ={
    name:'sakib',
    age:35,
    printPlayerName: function (){
        console.log(this.name);
    }
}

sakib.printPlayerName();

//exception: only work for normal function will not work for arrow function
// function kothai call hoyeche dekhe . er aghe jeta thakbe setai this.

// implicit example:2
var printPlayerNameFunction = function(obj) {
    obj.printPlayerName =function() 
    {
        console.log(this.name);
    }
};

var sakib ={
    name:'sakib',
    age:35,
};
var tamim ={
    name:'tamim',
    age:35,
};
printPlayerNameFunction(sakib);
printPlayerNameFunction(tamim);

sakib.printPlayerName();
tamim.printPlayerName();

// implicit example:3
var person = function(name, age) {
    return {
        name: name,
        age: age,
        printName: function() {
            console.log(this.name);
        },
        father: {
            name: 'abyaz',
            printName: function() {
                console.log(this.name);
            }
        }
    };
};

var sakib = person("sakib", 35);
sakib.printName();
sakib.father.printName();

