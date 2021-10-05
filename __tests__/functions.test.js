// const { TestWatcher } = require('@jest/core');
const {returnTwo, greeting, add} = require('../function');

test('returnTwo should return 2', () =>{
    expect(returnTwo()).toBe(2);
})

test('greeting James should say "Hello, James"', () =>{
    expect(greeting('James')).toEqual("Hello, James");
})

test('greeting Jill should say "Hello, Jill"', () =>{
    expect(greeting('Jill')).toEqual("Hello, Jill");
})

test('add should add 2 numbers', () =>{
    expect(add(1,2)).toBe(3);
})

test('add should add 2 numbers', () =>{
    expect(add(5,9)).toBe(14);
})

