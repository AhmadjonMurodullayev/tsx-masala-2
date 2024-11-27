"use strict";
function flattenArray(nestedArray) {
    const result = [];
    for (const item of nestedArray) {
        if (Array.isArray(item)) {
            result.push(...flattenArray(item));
        }
        else {
            result.push(item);
        }
    }
    return result;
}
function arrayToObject(arr) {
    const result = {};
    for (let i = 0; i < arr.length; i++) {
        result[i] = arr[i];
    }
    return result;
}
function arrayToObjects(arr) {
    const result = {};
    for (let i = 0; i < arr.length; i++) {
        result[i] = arr[i];
    }
    return result;
}
function mergeUnique(obj1, obj2) {
    const result = {};
    for (const key in obj1) {
        if (!(key in obj2)) {
            result[key] = obj1[key];
        }
    }
    for (const key in obj2) {
        if (!(key in obj1)) {
            result[key] = obj2[key];
        }
    }
    return result;
}
function filterNumbers(arr, condition) {
    const result = [];
    for (const num of arr) {
        if (condition === 'positive' && num > 0) {
            result.push(num);
        }
        else if (condition === 'negative' && num < 0) {
            result.push(num);
        }
    }
    return result;
}
function logDuplicates(arr) {
    const seen = {};
    const duplicates = [];
    for (const num of arr) {
        if (seen[num]) {
            if (!duplicates.includes(num)) {
                duplicates.push(num);
            }
        }
        else {
            seen[num] = true;
        }
    }
    console.log(duplicates);
}
function sortArray(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
                [arr[i], arr[j]] = [arr[j], arr[i]];
            }
        }
    }
    return arr;
}
function removeDuplicates(arr) {
    const uniqueArray = [];
    for (const num of arr) {
        if (!uniqueArray.includes(num)) {
            uniqueArray.push(num);
        }
    }
    return uniqueArray;
}
function findMax(arr) {
    if (arr.length === 0)
        return null;
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}
