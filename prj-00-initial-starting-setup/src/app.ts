// import { ProjectInput } from "./components/project-input";
// import { ProjectList } from "./components/project-list";

// new ProjectInput();
// new ProjectList('active');
// new ProjectList('finished');

// import _ from 'lodash';

// console.log(_.shuffle([1, 2, 3]));
import "reflect-metadata";
import { plainToClass } from 'class-transformer';
import { Product } from "./product.model";


// const p1 = new Product('A Book', 12.99);
const products = [
  { title: 'A Carpet', price: 29.99 },
  { title: 'A Book', price: 10.99 }
];

// const loadedProducts = products.map(prod => {
//   return new Product(prod.title, prod.price);
// });

const loadedProducts = plainToClass(Product, products);

for (const prod of loadedProducts) {
  console.log(prod.getInformation());
}

