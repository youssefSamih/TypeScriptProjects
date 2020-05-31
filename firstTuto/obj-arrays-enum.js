"use strict";
// const person: {
//   name: string,
//   age: number
// } = {
var person = {
    name: 'youssef',
    age: 24,
    hobbies: ['Sports', 'Cooking'],
    role: [2, 'author']
};
person.role.push('admin');
// person.role[1] = 10;
var favoriteActivities;
favoriteActivities = ['Sports'];
console.log(person.name);
if (person.role === 'READ-ONLY-USER') {
    console.log('is read only user');
}
