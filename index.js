#!/usr/bin/env node

const prompt = require('prompt-sync')();

const number = Math.floor(Math.random() * 99) + 1;
let attempt = prompt('Занадано число от 1 до 100: ')

while (Number(attempt) !== number) {
    if (attempt === null) process.exit();
    if (/[^0-9]/.test(attempt)) {
        attempt = prompt('Нужно ввести число! ');
        continue;
    }

    if (Number(attempt) < number) {
        attempt = prompt(`Больше чем ${attempt}: `);
    } else {
        attempt = prompt(`Меньше чем ${attempt}: `);
    }
}
console.log('Вы угадали!');