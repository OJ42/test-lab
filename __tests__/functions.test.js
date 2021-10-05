// const { TestWatcher } = require('@jest/core');
const {returnTwo, greeting, add, subtract, multiply, divide} = require('../function');

test('returnTwo should return 2', () =>{
    expect(returnTwo()).toBe(2);
})

test('greeting James should say "Hello, James"', () =>{
    expect(greeting('James')).toEqual("Hello, James");
})

test('greeting Jill should say "Hello, Jill"', () =>{
    expect(greeting('Jill')).toEqual("Hello, Jill");
})

describe('Math Functions', () => {    
    test('add should add 2 numbers', () =>{
        expect(add(1,2)).toBe(3);
    })

    test('subtract should subtract 2 numbers', () =>{
        expect(subtract(10,2)).toBe(8);
    })

    test('multiply should multiply 2 numbers', () =>{
        expect(multiply(10,2)).toBe(20);
    })

    test('divide should divide 2 numbers', () =>{
        expect(divide(10,2)).toBe(5);
    })
})
