let students = [
    {name:"abc", age:22,batch:"jfs-20"},
    {name:"xyc", age:22,batch:"jfs-20"},
    {name:"ddd", age:22,batch:"jfs-20"},
    {name:"hhh", age:22,batch:"jfs-20"},
    {name:"kjh", age:22,batch:"jfs-20"}
]
function getData(){
    let tr ="";
    
   let ele = document.getElementById('displayDetails');
    for(let val of students){
       tr=tr+`
        <tr>
            <td>${val.name}</td>
             <td>${val.age}</td>
              <td>${val.batch}</td>
        </tr>
       `
    }
    let table = `
    <table border = "2px">
        <tr>
        <th>Name</th>
        <th>Age</th>
        <th>batch</th>
        </tr>
        ${tr}
    </table>
    `
    ele.innerHTML=table
}
function applyStyle(){
    let box = document.getElementById('box')
    box.style.backgroundColor='green'
}

// function applyStyle(){
//     let box = document.getElementById('box')
//     // box.classList.add('box2')
//     // box.classList.remove('border')
//     // box.classList.toggle('box2')
//     box.classList.toggle('animate')
// }