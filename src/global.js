// variables

var a; // declaracion;
var b = 'b'; // declaramos / asignamos
b = 'bb'; // reasignacion
var a = 'aa'; // redeclaracion

// Global Scope: se dice que cualquier variable que se encuente en el documento pasan a ser variables globales

var fruit = 'Apple; // global';

function bestFruit() {
    console.log(fruit)
}

bestFruit();

// tener cuidado de no declarar las variables no globales;

function countries() {
    countries = 'countries'; // global
    console.log(country);
}

countries();
console.log(countries);