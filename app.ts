function flattenArray(nestedArray: any[]): any[] {
    const result: any[] = [];
    for (const item of nestedArray) {
        if (Array.isArray(item)) {
            result.push(...flattenArray(item));
        } else {
            result.push(item);
        }
    }
    return result;
}




function arrayToObject(arr: any[]): Record<number, any> {
    const result: Record<number, any> = {};
    for (let i = 0; i < arr.length; i++) {
        result[i] = arr[i];
    }
    return result;
}


function arrayToObjects(arr: any[]): Record<number, any> {
    const result: Record<number, any> = {};
    for (let i = 0; i < arr.length; i++) {
        result[i] = arr[i];
    }
    return result;
}

function mergeUnique(obj1: Record<string, any>, obj2: Record<string, any>): Record<string, any> {
    const result: Record<string, any> = {};
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


function filterNumbers(arr: number[], condition: 'positive' | 'negative'): number[] {
    const result: number[] = [];
    for (const num of arr) {
        if (condition === 'positive' && num > 0) {
            result.push(num);
        } else if (condition === 'negative' && num < 0) {
            result.push(num);
        }
    }
    return result;
}





function logDuplicates(arr: number[]): void {
    const seen: Record<number, boolean> = {};
    const duplicates: number[] = [];
    for (const num of arr) {
        if (seen[num]) {
            if (!duplicates.includes(num)) {
                duplicates.push(num);
            }
        } else {
            seen[num] = true;
        }
    }
    console.log(duplicates);
}








function sortArray(arr: number[]): number[] {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
                [arr[i], arr[j]] = [arr[j], arr[i]];
            }
        }
    }
    return arr;
}




function removeDuplicates(arr: number[]): number[] {
    const uniqueArray: number[] = [];
    for (const num of arr) {
        if (!uniqueArray.includes(num)) {
            uniqueArray.push(num);
        }
    }
    return uniqueArray;
}




function findMax(arr: number[]): number | null {
    if (arr.length === 0) return null;
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}
