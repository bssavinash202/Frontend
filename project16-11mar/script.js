
// Asynchronous Operation
// let data
// setTimeout(()=>{
//     data='abc'
// },2000)
// console.log(data)


//global variable
// let data;
// function fun1() {
//     setTimeout(()=>{
//         data='abc'
//         fun2()
//     },2000)
// }
// fun1()
// function fun2(){
//     console.log(data)
// }


//local variable
// function fun1(call) {
//     let data;
//     setTimeout(()=>{
//         data='abc'
//         call(data)
//     },2000)
// }
// fun1(fun2)
// function fun2(d){
//     console.log(d)
// }

// let API = "https://fakestoreapi.com/products/1"

// let getData =()=>{
//     let res = fetch(API);
//     res.then((data)=>{
//         let val = data.json()
//         val.then((data)=>{
//             console.log(data)
//         })
//         val.catch((err)=>{
//             console.log(err)
//         })
//     })
//     res.catch((err)=>{
//         console.log(err)
//     })
// }
// getData()


// Async Await
let API = "https://fakestoreapi.com/products"
let getData = async()=>{
    let res = await fetch(API)
    let data= await res.json();
    let values;
    let keys;
    // console.log(data)
    let display = document.getElementById('display')
     let returnVal = data.reduce((acc,val,ind)=>{
      values = Object.values(val)
      keys = Object.keys(val)
      console.log(keys)
      let td = values.reduce((acc,val,ind)=>{
        if(keys[ind]=='image'){
            return acc+=`
            <td><img src="${val}" width="100px" height="100px"></img></td>
            `
        }else if(keys[ind]=='rating'){
            return acc+=`
            <td>${val.rate}</td>
            <td>${val.count}</td>
            `
        }else{
             return acc+=`
            <td>${val}</td>
            `
        }
         
      },"")
        let tr=`
        <tr>
            ${td}
        </tr>
        `
        return acc+=tr
     },"")
     
     let th = keys.reduce((acc,val)=>{
        if(val=='rating'){    
            return acc+=`
        <th style="background-color:#0d6efd; color: white;">${val}<br>Rate</th>
        <th style="background-color:#0d6efd; color: white;">${val}<br>reviews</th>
        `
        }else{
            return acc+=`
            <th style="background-color:#0d6efd; color: white;">${val}</th>
            `
        }
       
     },'')
     let total = `
        <tr>
            ${th}
        </tr>
        ${returnVal}
     `
     display.innerHTML=total
    
    
}
getData()