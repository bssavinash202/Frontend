// function fun1(callback){
//     let c =3;
//     callback(c)
//     console.log("fun1")
// }
// function fun2(a){
//     console.log(a)
// }
// fun1(fun2)
//  let fruits = ['apple','mango','grape','banana']
//  let returnVal = fruits.map(function(val,index,arr){
//     return val+" abc";
//  })
//  console.log(returnVal)

//  let num = [1,2,3,4,5]
//  let numReturn = num.map(function(val){
//     return val+10;
//  })
//  console.log(numReturn)
//  console.log(num)

// let num = [1,2,3,4,5]
//  let numReturn = num.filter(function(val){
//     if(val%2==0){
//         return true
//     }
//  })
//  console.log(numReturn)
//  console.log(num)

// let num = [1,2,3,4,5]
//  let numReturn = num.reduce(function(total,val){
//     total=total+val
//     return total;
//  })
//  console.log(numReturn)
//  console.log(num)


//  let num = [1,2,3,4,5]
//  let numReturn = num.reduce(function(total,val){
//     if(val%2==0){
//         total=total+val
//     }
//     return total
//  },0)
//  console.log(numReturn)
//  console.log(num)

// let num = [1,2,5,3,4,5]
//  let numReturn = num.find(function(val,index,arr){
//     if(val==5){
//         arr[index] = 10;
//     }
//  })

//  console.log(num)

// let num = [1,2,3,4,5]
// let numReturn = num.forEach(function(val,index,arr){
//    console.log(val+10)
// })
// returns 
let fruits = ['apple','mango','grape','banana']
 let returnVal = fruits.find(function(val,index,arr){
    if(val=='grape'){
        return false
    }
 })
 console.log(returnVal)




