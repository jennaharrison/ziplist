"use strict";
function ziplist(list1, list2) {
    const bigList = [];
    if (list1.length !== list2.length) {
        return 'Error: Lists must be of the same length';
    }
    for (let i = 0; i < list1.length; i++) {
        bigList.push(list1[i]);
        bigList.push(list2[i]);
    }
    return bigList;
}
function zipListTheFunctionalWay(list1, list2) {
    if (list1.length !== list2.length) {
        return 'Error: Lists must be of the same length';
    }
    return list1.map((item, i) => [item, list2[i]]).reduce((result, pair) => result.concat(pair), []);
}
console.log(ziplist([1, 2, 3], ['a', 'b', 'c']));
console.log(zipListTheFunctionalWay([1, 2, 3], ['a', 'b', 'c']));
