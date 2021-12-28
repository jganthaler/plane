import '../scss/index.scss';
import { Rectangle } from './component';

const div = document.querySelector('#callout');
const rectangle = new Rectangle(10,20);
let number = rectangle.calculateArea();

div.innerHTML = `The number is ${number}!`;
