const heroines = [
    {
      id:101,
      name: "Samantha Ruth Prabhu",
      age: 36,
      numberOfMovies: 50,
      latestMovie: "Kushi"
    },
    {
      id:265,
      name: "Rashmika Mandanna",
      age: 28,
      numberOfMovies: 15,
      latestMovie: "Animal"
    },
    {
      id:398,
      name: "Pooja Hegde",
      age: 33,
      numberOfMovies: 20,
      latestMovie: "Guntur Kaaram"
    },
    {
      id:454,
      name: "Keerthy Suresh",
      age: 31,
      numberOfMovies: 25,
      latestMovie: "Dasara"
    },
    {
      id:523,
      name: "Sai Pallavi",
      age: 32,
      numberOfMovies: 18,
      latestMovie: "Gargi"
    },
    {
      id:634,
      name: "Tamannaah Bhatia",
      age: 34,
      numberOfMovies: 65,
      latestMovie: "Bhola Shankar"
    },
    {
      id:734,
      name: "Anushka Shetty",
      age: 42,
      numberOfMovies: 48,
      latestMovie: "Miss Shetty Mr Polishetty"
    },
    {
      id:821,
      name: "Kajal Aggarwal",
      age: 39,
      numberOfMovies: 60,
      latestMovie: "Bhagavanth Kesari"
    },
    {
      id:954,
      name: "Nabha Natesh",
      age: 28,
      numberOfMovies: 10,
      latestMovie: "Maestro"
    }
  ];
  const display=()=>{
    let returnval = heroines.reduce((acc,val,ind)=>{
        let tr=`
            <tr>
                <td>${val.id}</td>
                <td>${val.name}</td>
                <td>${val.age}</td>
                <td>${val.numberOfMovies}</td>
                <td>${val.latestMovie}</td>
                <td><button onclick="deleteItem(${ind})" class="delete"><i class="fa-solid fa-trash"></i><span> Delete</span></button></td>
                <td><button onclick="EditItem(${val.id})"class="edit"><i class="fa-solid fa-pen-to-square"></i><span> Edit</span></button></td>
            </tr>
        `
        acc+=tr
        return acc;
      
        
    },"")
    let table = `
        <tr>
            <th>Serial No</th>
            <th>Name</th>
            <th>Age</th>
            <th>Movies Acted</th>
            <th>Latest Movie</th>
            <th colspan="2">Action</th>
       </tr>
    ${returnval}
    `
    document.getElementById("displayDetails").innerHTML = table
  }
  display();
  document.getElementById('editBtn').style.display="none";
  const deleteItem=(index)=>{
    heroines.splice(index,1)
    display()
  }
  const Add=()=>{
    let id = document.getElementById('id').value.trim()
    let name = document.getElementById('name').value.trim()
    let age = document.getElementById('age').value.trim()
    let Movie = document.getElementById('movies').value.trim()
    let latest =document.getElementById('latest').value.trim()
    let ageNum = Number(age)
    let MovieNum=Number(Movie)
    let idNum=Number(id)
    if(name===""||latest===""||isNaN(ageNum)||isNaN(MovieNum)||isNaN(idNum)){
      alert("Enter all the Fields")
    }else{
    let obj = {
        id:id,
        name:name,
        age:age,
        numberOfMovies:Movie,
        latestMovie:latest
    }
    heroines.push(obj)
    display()
  }
}
  const EditItem=(id)=>{
    document.getElementById('addBtn').style.display="none";
    document.getElementById('editBtn').style.display="block";
    document.getElementById('id').setAttribute('disabled','true')
    let idx = document.getElementById('id')
    let namex = document.getElementById('name')
    let agex = document.getElementById('age')
    let Moviex = document.getElementById('movies')
    let latestx =document.getElementById('latest')
    let heroine = heroines.find((val)=>{
      if(val.id===id){
        return val;
      }
    })
    console.log(heroine)
    
    if(heroine){
    idx.value = heroine.id
    namex.value=heroine.name
    agex.value=heroine.age
    Moviex.value = heroine.numberOfMovies
    latestx.value= heroine.latestMovie
    }
    document.getElementById('editBtn').onclick=(()=>Edit(id))
    
  }
  const Edit=(id)=>{
    let idx = document.getElementById('id').value
    let namex = document.getElementById('name').value
    let agex = document.getElementById('age').value
    let Moviex = document.getElementById('movies').value
    let latestx =document.getElementById('latest').value
    let obj={
      id:idx,
      name: namex,
      age:agex,
      numberOfMovies:Moviex,
      latestMovie:latestx
  }
    let index=heroines.findIndex((val)=>{
      if(val.id===id){
        return val
      }
    })
    console.log(index)
    if(index){
      heroines[index]=obj
    }
    alert("Successfully Updated")
    display();
    clearInputs();
  }
  const clearInputs = ()=>{
    document.getElementById('id').value=""
    document.getElementById('name').value=""
    document.getElementById('age').value=""
    document.getElementById('movies').value=""
    document.getElementById('latest').value=""
  }