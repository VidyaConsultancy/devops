console.log('Hello world');

function greet(name = 'Guest') {
    return `Hello ${name}`;
}

console.log(greet('John'));

console.log(greet());