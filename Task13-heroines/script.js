const heroines = [
    {
      name: "Samantha Ruth Prabhu",
      age: 36,
      numberOfMovies: 50,
      latestMovie: "Kushi"
    },
    {
      name: "Rashmika Mandanna",
      age: 28,
      numberOfMovies: 15,
      latestMovie: "Animal"
    },
    {
      name: "Pooja Hegde",
      age: 33,
      numberOfMovies: 20,
      latestMovie: "Guntur Kaaram"
    },
    {
      name: "Keerthy Suresh",
      age: 31,
      numberOfMovies: 25,
      latestMovie: "Dasara"
    },
    {
      name: "Sai Pallavi",
      age: 32,
      numberOfMovies: 18,
      latestMovie: "Gargi"
    },
    {
      name: "Tamannaah Bhatia",
      age: 34,
      numberOfMovies: 65,
      latestMovie: "Bhola Shankar"
    },
    {
      name: "Anushka Shetty",
      age: 42,
      numberOfMovies: 48,
      latestMovie: "Miss Shetty Mr Polishetty"
    },
    {
      name: "Kajal Aggarwal",
      age: 39,
      numberOfMovies: 60,
      latestMovie: "Bhagavanth Kesari"
    },
    {
      name: "Nabha Natesh",
      age: 28,
      numberOfMovies: 10,
      latestMovie: "Maestro"
    }
  ];
let editIndex = -1;
  const display=()=>{
    let returnval = heroines.reduce((acc,val,ind)=>{
        let tr=`
            <tr>
                <td>${val.name}</td>
                <td>${val.age}</td>
                <td>${val.numberOfMovies}</td>
                <td>${val.latestMovie}</td>
                <td><button onclick="deleteItem(${ind})" class="delete"><i class="fa-solid fa-trash"></i><span> Delete</span></button></td>
                <td><button onclick="EditItem(${ind})"class="edit"><i class="fa-solid fa-pen-to-square"></i><span> Edit</span></button></td>
            </tr>
        `
        acc+=tr
        return acc;
      
        
    },"")
    let table = `
        <tr>
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
    
    let name = document.getElementById('name').value
    let age = document.getElementById('age').value
    let Movie = document.getElementById('movies').value
    let latest =document.getElementById('latest').value
    let obj = {
        name:name,
        age:age,
        numberOfMovies:Movie,
        latestMovie:latest
    }
    heroines.push(obj)
    display()
  }
  const EditItem=(index)=>{
    document.getElementById('addBtn').style.display="none";
    document.getElementById('editBtn').style.display="block";
    let namex = document.getElementById('name')
    let agex = document.getElementById('age')
    let Moviex = document.getElementById('movies')
    let latestx =document.getElementById('latest')
    editIndex = index;
    namex.value=heroines[index].name
    agex.value=heroines[index].age
    Moviex.value = heroines[index].numberOfMovies
    latestx.value= heroines[index].latestMovie
    console.log(editIndex)
  }
  const Edit=()=>{
    if(editIndex==-1){
      return;
    }
    let namex = document.getElementById('name').value
    let agex = document.getElementById('age').value
    let Moviex = document.getElementById('movies').value
    let latestx =document.getElementById('latest').value
   
    
    let obj={
       name: namex,
        age:agex,
        numberOfMovies:Moviex,
        latestMovie:latestx
    }
    heroines[editIndex]=obj;
    editIndex =-1;
    display()
  }
  