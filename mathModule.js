// mathModule.js
export function add(a, b) {return a+b;}
export function subtract(a, b) {return a-b;}
export default function multiply(a, b) {return a*b;}

import { toUpperCase } from './stringModule.js';
export function addAndLogUpper(a, b) {
    const result = add(a, b);
    console.log(toUpperCase(result.toString()));
    console.log("What in the heck is an uppercase number? Is it meant to send [out-put]=>[put-out] for i=NUTCASE?")
}
