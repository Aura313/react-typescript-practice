// Find the position of the first duplicate element in a string.
export const firstDupElem = (inputStr: string) => {

    console.log(inputStr, "inputStr");
    const keymaps = new Set();

    for (let i = 0; i < inputStr.length; i++) {
        if (keymaps.has(inputStr[i])) {
            return i;
        }
        keymaps.add(inputStr[i]);
    }
    return -1;

    // let seen = new Set();
    // for (let i = 0; i < inputStr.length; i++) {
    //     console.log(i, "index1")
    //     if (seen.has(inputStr[i])) {
    //         console.log(i, "index")
    //         return i;
    //     }
    //     seen.add(inputStr[i]);
    // }

    // console.log(seen, "seen")
    // return -1;
}

// Concatenate two arrays and find the unique element from it.
export const uniqElem = (arr1: number[], arr2: number[]) => {
    // console.log(arr1, arr2)
    let combinedArr = arr1.concat(arr2);
    // let freqMap: { [key: number]: number } = {}; 
    let freqMap = new Map<number, number>();
    let uniqElem: number[] = [];

    for (let i = 0; i < combinedArr.length; i++) {
        if (freqMap.has(combinedArr[i])) {
            freqMap.set(combinedArr[i], freqMap.get(combinedArr[i])! + 1)
        } else {
            freqMap.set(combinedArr[i], 1)
        }
    }

    freqMap.forEach((value, key) => {
        // console.log("key: ", key, " value: ", value);
        if (value === 1) {
            uniqElem.push(key);
        }
    })

    return uniqElem;
}

//uniqChars
export const uniqChars = (str: string) => {

    let uniq: any = {};

    for (let s of str) {
        console.log(s, "sss");
        if (!uniq[s]) uniq[s] = 1;
        else return false;
    }
    return true;
}