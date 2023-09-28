#!/usr/bin/env node

const { year, y, month, m, date, d, _ } = require('yargs').argv;
const moment = require('moment');

let result = new Date().toISOString();

if (year || y) {
    result = dateUpdate('year', 'YYYY');
}

else if (month || m) {
    result = dateUpdate('month', 'MM');
}

else if (date || d) {
    result = dateUpdate('day', 'DD');
}

function dateUpdate(type, format) {
    if (_.includes('add')) {
        let add = _[_.indexOf('add') + 1];
        return moment().add(add, type).format(format);
    } else if (_.includes('sub')) {
        let sub = _[_.indexOf('sub') + 1];
        return moment().subtract(sub, type).format(format);
    } else {
        return moment().format(format);
    }
}

console.log(result)