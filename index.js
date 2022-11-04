console.log('Hello world');

function greet(name = 'Guest') {
    return `Hello ${name}`;
}

console.log(greet('John'));

console.log(greet());

function add(a, b) {
    return a + b;
}

console.log(add(10, 20));

function mul(a, b) {
    return a * b;
}

console.log(mul(10, 20));