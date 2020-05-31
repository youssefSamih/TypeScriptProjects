// const person: {
//   name: string,
//   age: number
// } = {

const person: {
  name: string;
  age: number;
  hobbies: string[];
  role: [number, string];
} = {
  name: 'youssef',
  age: 24,
  hobbies: ['Sports', 'Cooking'],
  role: [2, 'author']
}

person.role.push('admin');
// person.role[1] = 10;

let favoriteActivities: string[];
favoriteActivities = ['Sports']

console.log(person.name);

if(person.role === 'READ-ONLY-USER') {
  console.log('is read only user')
}