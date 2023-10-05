function functionName() {
    console.log('functionName');
}

functionName(); // Бұл функцияны өзінің үстінен де шақыра аламыз, астынан да шақыра аламыз.

// ----------------------------------

let functionAsVariable = function() {
    console.log('functionAsVariable')
}

functionAsVariable(); // Бұл функциясын біздер тек өзінің астында ғана шақыра аламыз.

// -------------------------------------

function func(name) {
    console.log(`Hey, ${name}`);
}

func('Lemon');



