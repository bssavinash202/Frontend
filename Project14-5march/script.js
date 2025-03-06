let employees=[
    {name:'Avinash',dept:"hr",batch:12},
    {name:'Shiva',dept:"IT",batch:11},
    {name:'sai',dept:"Finance",batch:9},
    {name:'Henry',dept:"marketing",batch:2}
];

function display(){

    let returnval = employees.reduce((acc,val,ind)=>{
        let tr = `
            <tr>
                <td>${val.name}</td>
                 <td>${val.dept}</td>
                  <td>${val.batch}</td>
                  <td><button onclick="deleteItem(${ind})">Delete</button></td>
                  <td><button onclick="editStudents(${ind})">Edit</button></td>
            </tr>        
        `
        acc+=tr
        return acc;
    },"")
    let table = `
        <tr>
            <th>Name</th>
            <th>department</th>
            <th>Batch</th>
            <th>Action</th>
            <th>Action</th>
        </tr> 
        ${returnval}
    `
    document.getElementById("details").innerHTML=table
}
display();
function add(){
    let name = document.getElementById("name").value
    let dept = document.getElementById("dept").value
    let batch = document.getElementById("batch").value
    let obj = {
        name:name,
        dept:dept,
        batch:batch
    }
    employees.push(obj)
    display()
}
const deleteItem=(ind)=>{
    employees.splice(ind,1)
    display()
}
const editStudents=(ind)=>{
   
    let namev = document.getElementById("name")
    let deptv = document.getElementById("dept")
    let batchv = document.getElementById("batch")
    let index = document.getElementById("ind")
    index.innerHTML = ind;
    namev.value = employees[ind].name
    deptv.value = employees[ind].dept
    batchv.value = employees[ind].batch
}
const edit = ()=>{
    let indEle = document.getElementById("ind")
    let ind = indEle.innerText
    let nameEle = document.getElementById("name")
    let deptEle = document.getElementById("dept")
    let batchEle = document.getElementById("batch")
    let name = nameEle.value
    let dept = deptEle.value
    let batch = batchEle.value
    let obj = {
        name,
        dept,
        batch
    }
    employees[Number(ind)]=obj
    display()
}