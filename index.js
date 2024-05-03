// ANONYMOUS FUNCTION AND IIFE Q1 - ODD NUMBERS IN AN ARRAY

const a1 = [2,3,4,5,6,7]
const oddNum = ((array)=>{
    const odd = []
    for(let i of array)
    {
        if(i%2!==0)
        {
            odd.push(i)
        }
    }
    return odd
})(a1);

console.log(oddNum)

// ANONYMOUS FUNCTION AND IIFE Q2 - STRING TO TITLE CASE IN A STRING ARRAY

const strArray = ['sHoRt AnD sToUt', 'HERE IS MY HANDLE HERE IS MY SPOUT', 'I Am a little tea pot']
const titleCase = ((array)=>{
    const samArr = []
    for(let string of array)
    {
        string=string.toLowerCase()
        string=string.split(' ')
        for(let i=0;i<string.length;i++)
        {
            string[i]=string[i].charAt(0).toUpperCase()+string[i].slice(1)
        }
        string = string.join(' ')
        samArr.push(string)
    }
    return samArr
})(strArray);

console.log(titleCase)

// ANONYMOUS FUNCTION AND IIFE Q3 - SUM OF ALL NUMBERS IN AN ARRAY

const a3 = [2,3,4,5,6,7]
const sumOfArr = ((array)=>{
    let sum = 0
    for(let i of array)
    {
        sum += i
    }
    return sum
})(a3);

console.log(sumOfArr)

// ANONYMOUS FUNCTION AND IIFE Q4 - PRIME NUMBERS IN AN ARRAY

let a4 = [2,3,4,5,6,7,1,21,23,29]
let primeNum = ((array)=>{
    const prime = []
    for(let num of array)
    {
        flag = false
        if(num<=1)
        {
            flag = true
        }
        for(let i=2;i<num;i++)
        {
            if(num%i==0)
            {
                flag = true
                break
            }
        }
        if(flag===false)
        {
            prime.push(num)
        }      
    }
    return prime
})(a4);

console.log(primeNum)

// ANONYMOUS FUNCTION AND IIFE Q5 - PALINDROMES IN AN ARRAY

const strings = ["level", "radar", "hello", "madam", "12321", "apple"]
const palindromeArray = (function(stringArray) {
    const palindromes = []
    stringArray.forEach((string)=>{
        revStr = string.split('').reverse().join('')
        if(revStr===string) 
        {
            palindromes.push(string)
        }
    })
    return palindromes
})(strings);

console.log(palindromeArray)

// ANONYMOUS FUNCTION AND IIFE Q6 - MEDIAN OF TWO SORTED ARRAYS OF SAME SIZE

const arr1 = [1, 3, 5]
const arr2 = [2, 4, 6]
const mergeArrMedian = (function(arr1, arr2) {
    const mergeArr = []
    let i = 0, j = 0
    while (i < arr1.length && j < arr2.length) 
    {
        if (arr1[i] < arr2[j]) 
        {
            mergeArr.push(arr1[i])
            i++
        } else 
        {
            mergeArr.push(arr2[j])
            j++
        }
    }
    while (i < arr1.length) 
    {
        mergeArr.push(arr1[i])
        i++
    }
    while (j < arr2.length) 
    {
        mergeArr.push(arr2[j])
        j++
    }
    const n = mergeArr.length
    const median = (mergeArr[n/2-1]+mergeArr[n/2])/2
    return median
})(arr1, arr2);

console.log(mergeArrMedian)

// ANONYMOUS FUNCTION AND IIFE Q7 - REMOVE DUPLICATES FROM AN ARRAY

const a7 = [2,3,4,5,6,7,2,3]
const removeDup = (function(array) {
    const checkDup = []
    array.forEach((element)=>{
        if(!checkDup.includes(element))
        {
            checkDup.push(element)
        }
    })
    return checkDup
})(a7)

console.log(removeDup)

// ANONYMOUS FUNCTION AND IIFE Q8 - ROTATE AN ARRAY BY 3 TIMES

const a8 = [1,2,3,4,5,6,7]
const rotArr = (function(array) {
    const n = array.length
    const k = 3 % n
    const rotatedArr = []
    for (let i = 0; i < n; i++) 
    {
        if (i < k) 
        {
            rotatedArr.push(array[n + i - k])
        } else 
        {
            rotatedArr.push(array[i - k])
        }
    }
    return rotatedArr
})(a8);

console.log(rotArr)

// ARROW FUNCTION Q1 - ODD NUMBER IN AN ARRAY

const A1 = [2,3,4,5,6,7]
const OddNum = (array) => {
    const odd = []
    for(let i of array)
    {
        if(i%2!==0)
        {
            odd.push(i)
        }
    }
    return odd
}

console.log(OddNum(A1))

// ARROW FUNCTION Q2 - STRING TO TITLE CASE IN A STRING ARRAY

const StrArray = ['sHoRt AnD sToUt', 'HERE IS MY HANDLE HERE IS MY SPOUT', 'I Am a little tea pot']
const TitleCase = (array) => {
    const samArr = []
    for(let string of array)
    {
        string=string.toLowerCase()
        string=string.split(' ')
        for(let i=0;i<string.length;i++)
        {
            string[i]=string[i].charAt(0).toUpperCase()+string[i].slice(1)
        }
        string = string.join(' ')
        samArr.push(string)
    }
    return samArr
}

console.log(TitleCase(StrArray))

// ARROW FUNCTION Q3 - SUM OF ALL NUMBERS IN AN ARRAY

const A3 = [2,3,4,5,6,7]
const SumOfArr = (array) => {
    let sum = 0
    for(let i of array)
    {
        sum += i
    }
    return sum
}

console.log(SumOfArr(A3))

// ARROW FUNCTION Q4 - PRIME NUMBERS IN AN ARRAY

const A4 = [2,3,4,5,6,7,1,21,23,29]
const PrimeNum = (array) => {
    const prime = []
    for(let num of array)
    {
        flag = false
        if(num<=1)
        {
            flag = true
        }
        for(let i=2;i<num;i++)
        {
            if(num%i==0)
            {
                flag = true
                break
            }
        }
        if(flag===false)
        {
            prime.push(num)
        }      
    }
    return prime
}

console.log(PrimeNum(A4))

// ARROW FUNCTION Q5 - PALINDROMES IN AN ARRAY

const Strings = ["level", "radar", "hello", "madam", "12321", "apple"]
const PalindromeArray = (stringArray) => {
    const palindromes = []
    stringArray.forEach((string)=>{
        revStr = string.split('').reverse().join('')
        if(revStr===string) 
        {
            palindromes.push(string)
        }
    })
    return palindromes
}

console.log(PalindromeArray(Strings))






