// function hoursIntoSeconds(hours)
// {
//     return hours*60*60;
// }

// console.log(hoursIntoSeconds(10))

// function calPerimeter( heigth,length)
// {
//     return 2*(heigth+length)
// }

// console.log( calPerimeter(10,20))

// function calcAreaTriangle(base,heigth)
// {
//     return 0.5*base*heigth
// }

// console.log(calcAreaTriangle(10,20))

// function appendString(givenStr)
// {
//     let str="Simplified";
//     return givenStr+" "+str
// }

// console.log( appendString("apple"));

// function sumGreaterThan100(num1, num2) {
//   let sum = num1 + num2;
//   if (sum > 100) {
//     return("The Sum is Greater than 100");
//   } else {
//     return("The Sum is Less than 100");
//   }
// }

// console.log(sumGreaterThan100(100, -50));

// function sumGreaterThan100(num1 ,num2)
// {
//     return num1+num2>100
// }

// console.log( sumGreaterThan100(100,20))

// function lessThanIsEqualtoZero(num1)
// {
//     return num1<=0;
// }

// console.log(lessThanIsEqualtoZero(0))

// function opposite(input)
// {
//     return !input
// }

// console.log(opposite(false))

// function calcReminder(num1,num2)
// {
//     return num1 % num2;

// }

// console.log(calcReminder(24,5))

// function isNumberOdd(num1)
// {
//     return num1%2!==0
// }

// console.log(isNumberOdd(2));

// function isEven(num1)
// {
//    const num2= num1 % 2===0? 1:-1;
//    return num2;

// }

// console.log(isEven(1))

// function getLoggedInStatus(str1,str2)
// {
// if (str1==='Logged_In' && str2==='Subscribed')
// {
// return true;
// }
// return false

// }

// console.log(getLoggedInStatus("Logged_In","Subscribe"))

// function addArrayElement(arr)
// {
//     let sum=0;
//     const length=arr.length;

// for (let i=0; i<length;i++)
// {
// sum+=arr[i];
// }
// return sum;
// }

// console.log(addArrayElement([10,20,30,40,50]))

// function calcTime(time)
// {
// let second=time % 60;

// let minite= Math.floor(time / 60) ;

// if(minite.toString().length===1)
// {
//  minite='0'+minite;
// }

// return `${minite}:${second}`
// }
// console.log(calcTime(10))

// function largestNumber(arr) {
//   let max = arr[0];

//   let length = arr.length;
//   for (let i = 0; i < length; i++) {
//     if (max < arr[i]) {
//       max = arr[i];
//     }
//   }
//   return max;
// }

// console.log(largestNumber([10, 20, 590, 22, 70]));

// function reverseString(str)
// {

// let letter= str.length
// console.log(letter)
// let str1=''
// for (let i=letter-1 ;i>=0 ;i--)
// {
// str1+=str[i]
// }
// return str1;
// }

// console.log(reverseString('I am Kunal'))


// function reverseString(str)
// {
// return (str.split('').reverse().join(''))
    
// }


// console.log(reverseString("I am Kunal"))


// function arrZero(arr)
// {
// return arr.map((element)=>
//     element*19 
// );
// }

// console.log(arrZero([1,2,3,4,5]))


// function removeArrayElement(arr)
// {
//  let noApple=[]
// for (let i=0;i<arr.length;i++)
// {
//     if(arr[i]==='apple'){
//         continue;
// }
// noApple.push(arr[i])
    
// }
// return noApple;
// }

// console.log(removeArrayElement(['banana','apple','mango']))



// function arrayFilter(arr)
// {
// return arr.filter(element=> element !=='apple')
// }

// console.log(arrayFilter(['apple','mango','banana']))


// 

// function rating(num1)
// {
//     let str="";
// for (let i=0;i<num1;i++)
// {
//     str=str+' *';
// }
// if(!Number.isInteger(num1))
// {
//     str=str+' .'
// }
// return str
// }

// console.log(rating(.5))


// function sortLowToHigh(arr)
// {
// return arr.sort((a,b)=>{
//  return b.price-a.price
// })
// }

// console.log(sortLowToHigh([
// {
//     id:1,
//     price:200,
// },
// {
//     id:2,
//     price:100,
// },
// {
//     id:3,
//     price:400,
// }

// ]))

// async function postByUser(userId)
// {
//     const responce=await fetch("https://jsonplaceholder.typicode.com/posts");

//     const data =await responce.json()
   
//     const result=data.filter((element)=> element.userId===userId)

// console.log(result)
// }

// postByUser(4)


async function notDo(userId)
{

    const response=await fetch("https://jsonplaceholder.typicode.com/todos")
    
    const data= await response.json()

    //console.log(data)
 const result =data.filter(element=> !element.complited).slice(0,6);
  console.log(result)
}

console.log(notDo(5))




