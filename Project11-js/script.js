// let a = 2;
// let b = "2";
// if(a===b){
//     console.log("equal")
// }
// else{
//     console.log(" not equal")
// }   
//----------------------------------------
// let FormEmail="abc@gmail.com"
// let FormPasswrod = "123abc"

// let DbEmail = "abc@gmail.com"
// let DbPassword = "123abc"


// if(FormEmail==DbEmail){
//     if(FormPasswrod==DbPassword){
//         console.log("Correct Details")
//     }
//     else{
//         console.log('Wrong Details')
//     }
// }
// else{
//     console.log('Wrong Details')
// }
// if(FormEmail!=DbEmail){
//     console.log('Wrong Details')
// }
// else if(FormPasswrod!=DbPassword){
//     console.log('Wrong Details')
// }
// else{
//     console.log("Correct Details")
// }
//------------------------------------------
// let a=1;
// let b=2;
// if(a==1&&b==1){
//     console.log('if condition')
// }
// else{
//     console.log('else')
// }
//--------------------------------------------
// let FormEmail="abc@gmail.com"
// let FormPasswrod = "123abc"

// let DbEmail = "abc@gmail.com"
// let DbPassword = "123abc"

// if(FormEmail==DbEmail&&FormPasswrod==DbPassword){
//     console.log('correct details')
// }
// else{
//     console.log('Invalid Details')
// }
//----------------------------------------
//even  or odd
// let num=0;
// if(num%2==0){
//     console.log('Even')
// }
// else{
//     console.log('odd')
// }
//-------------------
//Factor or not
// let num = 5;
// if(10%num==0){
//     console.log('Factor')
// }
// else{
//     console.log('Not a factor')
// }
// let a=1;
// a+=5;//a=a+5
// a++;// a+=1;==>a=a+1;
// let a;//undefined==>false,0==>false,''==>false, null==>false
// if(a){
//     console.log('if')
// }
// else{
//     console.log('else')
// }

//Object Syntax
// let objName={
//     property:value,
//     property2:value,
// }
// let userObje = {                    // Create
//     name: "Avinash",
//     email : "abc@gmail.com",
//     pass : "abc",
//     phno : 98987787,
//     age : 25
// }
// console.log(userObje);
// console.log(userObje.email);        // read
// console.log(userObje.pass);
// console.log(userObje['phno']);
// console.log(userObje.age);
// userObje.age = 22;                  // update
// console.log(userObje['age'])
// console.log(userObje);

// delete userObje.age;                // delete
// console.log(userObje);

//Arrays
// let arr = [1,2,3,4];
// console.log(arr);
// arr[4] = 10;
// console.log(arr);
// delete arr[0]
// console.log(arr)

// let details = {
//     name : "abc",
//     email: "abc@gmail.com",
//     password: "abc@123",
//     marks:{
//         phy:99,
//         maths:90,
//         chem:80
//     },
//     address:{
//         city:"Hyd",
//         state:"TG",
//         pincode:507101
//     },
//     hobbies:["anime","playing","Movies"]
// }
// console.log(details)
// console.log(details.name)
// console.log(details.email)
// console.log(details.password)
// console.log(details.marks)
// console.log(details.marks.phy)
// console.log(details.marks.chem)
// console.log(details.marks.maths)
// console.log(details.address.city)
// console.log(details.address.state)
// console.log(details.address.pincode)
// console.log(details.hobbies[0])
// console.log(details.hobbies[1])
// console.log(details.hobbies[2])
// let users = [
//     {
//       email: "user1@example.com",
//       password: "password123"
//     },
//     {
//       email: "user2@example.com",
//       password: "securePass456"
//     },
//     {
//       email: "user3@example.com",
//       password: "mySecret789"
//     }
//   ];
//   console.log(users[2].password)
// natural numbers
// let a =1;
// for( ;a<=20; a++)
//     {
//     console.log(a);
// }
// let start =10;
// let end = 30;
// let sum = 0;
// for(let i = start;i<=end;i++){
//     if(i%2==0){
//         sum+=i;
//     }
    
// }
// console.log("Sum of even Numbers: "+sum)

// let start =10;
// let end = 30;
// let evenSum = 0;
// let oddSum = 0;
// for(let i = start;i<=end;i++){
//     if(i%2==0){
//         evenSum+=i;
//     }
//     else{
//         oddSum+=i;
//     }
    
// }
// console.log("Sum of even Numbers: "+evenSum);
// console.log("Sum of odd Numbers: "+oddSum);

// for(let i=10; i>0;i--){
//     console.log(i);
// }
// for(let i=10; i>0;i-=2){
//         console.log(i);
    
// }
//factors
// let giveNum =113;
// let count = 0;

// for(let i=1;i<=giveNum;i++){
//     if(giveNum%i==0){
//         count++;
//     }
// }
// if(count==2){
//     console.log(giveNum+" is a prime number")
// }
// else{
//     console.log(giveNum+" is  not a prime number")
// }
// let giveNum = 67;
// let count = 0;

// for(let i=2;i<giveNum;i++){
//     if(giveNum%i==0){
//         count++;
//     }
// }
// if(count==0){
//     console.log(giveNum+" is a prime number")
// }
// else{
//     console.log(giveNum+" is  not a prime number")
// }
// let giveNum = 6;
// let count = 0;

// for(let i=2;i<=Math.trunc(giveNum/2);i++){
//     if(giveNum%i==0){
//         count++;
//         break;
//     }
// }
// if(count==0){
//     console.log(giveNum+" is a prime number")
// }
// else{
//     console.log(giveNum+" is  not a prime number")
// }


// let arr = ['a','b','c'];
// console.log(arr)
// arr.shift();
// console.log(arr)

// let arr = ['a','b','g','d','e','f','g','h','i']
// console.log(arr)
// let returnValue = arr.sort();
// console.log(returnValue)
// console.log(arr)
// let str = 'abcdef';

// console.log(str)
// console.log(str.charAt(8));
// console.log(typeof str.charAt(8));
// let arr = ['a','b','c','d','e','f'];
// console.log(arr)
// newArr=arr.shift();
// console.log(arr)
// console.log(newArr)


// let arr = [8,9,10,11,12,13];
// newArr = Math.max.arr[];
// console.log(newArr)

// let otp = Math.trunc(Math.random()*10000);
// console.log(otp)

// function add(){
//     let a = 10;
//     let b =20;
//     console.log("Sum of a and b: "+(a+b));
// }
// function sub(){
//     let a = 10;
//     let b =20;
//     console.log("sub of a and b: "+(a-b));
// }
// function mul(){
//     let a = 10;
//     let b =20;
//     console.log("mul of a and b: "+(a*b));
// }
// add();
// sub();
// mul();
// let add = function()
// {
//     console.log("abcd")
// }
// add()
// function add(){
//     let a =10;
//     let b = 20;
//     let sum=a+b;
//     return sum;
// }
// let s = add();
// console.log(s)
// function add(){
//     let a =10;
//     let b = 20;
//     return "Sum of a and b "+(a+b);
// }
// function sub(){
//     let a =10;
//     let b = 20;
//     return "sub of a and b "+(a-b);
// }
// function mul(){
//     let a =10;
//     let b = 20;
//     return "mul of a and b "+(a*b);
// }
// console.log(add())
// console.log(sub())
// console.log(mul())

// function add(a,b){
//     return "sum of given values "+(a+b)
// }
// // let s = add(10,20)
// // console.log(s)
// console.log(add(10,20))
// function add(a=0,b=0){
//     return 'sum of given numbers: '+(a+b);
// }
// function mul(a=0,b=0){
//     return 'mul of given numbers: '+(a*b);
// }

// function sub(a=0,b=0){
//     return 'subtract of given numbers: '+(a-b);
// }

// function div(a=0,b=0){
//     return 'division of given numbers: '+(a/b);
// }

// function calculator(a,b){
//   return add(a,b);
// }
// console.log(calculator(20,10))

// function factorsCount(num){
//     let count = 0;
//     for(let i= 0;i<=num;i++){
//         if(num%i==0){
//             count++
//         }
//     }
//     return count;
// }
// function isPrime(num){
//     let count = factorsCount(num)
//     if(count==2){
//         console.log('prime')
//     }
//     else
//     {
//         console.log('not a prime')
//     }
// }
// isPrime(2)
// function outerFun(){
//     let count = 0;
//     function innerFun(){
//         count++;
//         console.log(count);
//     }
//     return innerFun;
// }
// let fun = outerFun();
// fun()
// fun()
// fun()
// function fun1(callBack){
//     callBack();
//     console.log('this is fun1')
// }
// let fun2 = function(){
//     console.log('this is fun 2')
// }
// fun1(fun2)
// function fun1(callBack){
//     callBack(100);
//     console.log('this is fun1')
// }
// let fun2 = function(a){
//     console.log(a)
// }
// fun1(fun2)

// let ele = document.getElementById("name");

// ele.innerText = "shivasai";
// console.log(ele);

// let ele = document.getElementsByClassName("name");
// console.log(ele[1].innerText)
// let ele =document.getElementsByTagName('h1');
// console.log(ele[0])

// let ele = document.getElementsByTagName('h1');
// ele[0].innerHTML='<h2>Avinash</h2>';
// console.log(ele)

// function display()
// {
// let arr = ['apple','banana','mango'];
// let ele = document.getElementById('fruits');
// ele.innerHTML = 
// `<ol>
//     <li>${arr[0]}</li>
//     <li>${arr[1]}</li>
//     <li>${arr[2]}</li>
//  </ol>`

// //  if(ele){
// //     let list ='';
// //     for(let i=0;i<arr.length;i++){
// //         list+=`<li>${arr[i]}</li>`
// //     }
// //     ele.innerHTML=`<ol>${list}</ol>`
// //  }
// }
// let num1,num2;
// function number(){
// num1 = document.getElementById('a').value;
// num2 = document.getElementById('b').value;
// }
// function add(){
//     number();
//     let result = document.getElementById('result');
//     result.innerText = Number(num1)+Number(num2);
    
// }
// function diff(){
//     number();
//      let result = document.getElementById('result');
//      result.innerText = Number(num1)-Number(num2);
     
//  }
// let i = 1;
// while(i<1){
//     console.log(i);
//     i++;
// }
// let i =1;
// do{
//     console.log(i)
//     i++;
// }while (i<1) 

// let a= 1;
// while(true){
//     console.log("asdf");
//     if (a==5) {
//         break;
//     }
//     a++;
// }

//print individual
// let num=-123;
// while(num!=0){
//     let rem=num%10;
//     console.log(rem);
//     num=Math.trunc(num/10);
//     // if(num==0){  //(num<=0)
//     //     break;
//     // }
// }
//Sum individual
// let num=-55;
// let sum=0;
// while(num!=0){
//     let rem = num%10;
//     sum = sum+rem;
//     num=Math.trunc(num/10);
// }
// console.log(sum)

// Multiply individual
// let num=123;
// let mul=1;
// while(num!=0){
//     let rem = num%10;
//     mul = mul*rem;//mul*=rem
//     num=Math.trunc(num/10);
// }
// console.log(mul)


//reverse
// let num=123;
// let rev=0;
// while(num!=0){
//     let rem = num%10;
//     rev = rev*10 +rem;
//     num=Math.trunc(num/10);
// }
// console.log(rev)
//multiply 2
// let num=2;
// for (let i = 0; i <= 10; i++) {
//    console.log(`${num} X ${i} = ${num*i}`)
// //    console.log(num+' X '+i+' = '+(num*i))
    
// }
// let start =1;
// let end = 10;
// for(let num = start; num<=end;num++){
//     for(let i=1;i<=10;i++){
//         console.log(`${num} X ${i} = ${num*i}`)
//     }
//     console.log("-----------------------------")
// }
// prime numbers
// let start =2;
// let end = 10;

// for(let num = start; num<=end;num++){
//    let count=0;
//     for(let i=2;i<num;i++){
//         if(num%i==0){
//             count++;
//         }
//     }
//     if(count==0){
//         console.log(num)
//     }
// }

//Factorial
// let num=5;
// let fact =1;
// // for (let i = num; i>=1; i--) {
// //    fact*=i;
   
// // }
// while(num>0){
//     fact*=num
//     num--
// }
// console.log(fact)
// 10 fibonacci numbers
// let a =0;
// let b = 1;
// console.log(a)
// console.log(b)
// for (let i = 3; i <=10; i++) {
//     let c = a+b
//     console.log(c);
//     a=b
//     b=c
// }

// let a =0;
// let b = 1;
// console.log(a)
// console.log(b)
// for (;;) {
//     let c = a+b
//     if(c>100){
//         break
//     }
//     console.log(c);
//         a=b
//         b=c
   
// }

// let a =0;
// let b = 1;
// console.log(a)
// console.log(b)
// let c=0;
// while(c<100){
//     let c = a+b
//     console.log(c);
//     a=b
//     b=c
// }

// Find the number is palindrome or not

// let num = 500767005;
// let ogNum = num;
// let rev =0;

// while(num!=0){
//     let rem=num%10;
//     rev=rev*10+rem;
//     num=Math.trunc(num/10);
// }
// if(ogNum==rev){
//     console.log(ogNum+" is a Palindrome")
// }else{
//     console.log(ogNum+" is not a Palindrome")
// }

// Sum of Squares of each digit in a number
// let num = 143;
// let sqr = 0;
// while(num!=0){
// let rem = num%10;
// sqr = sqr+(rem**2); //rem*rem or Math.pow(rem,2)
// num = Math.trunc(num/10)
// }
// console.log(sqr);
//number with is count as power
// let num=123;
// let ogNum=num;
// let count = 0;
// while(num!=0){
//     count++
//     num= Math.trunc(num/10)
// }
// console.log(count)
// let power = 1
// for(let i=1;i<=count;i++){
//    power = power*ogNum;
// }
// console.log(power)

// . Check if a Number is a Perfect Number
// Input: An integer n
// Output: Sum of its proper divisors and check if it equals n
// Example:
//  Input: 6
//  Output: 1 + 2 + 3 = 6 (Perfect Number)

// 15. Check if a Number is an Armstrong Number
// Input: An integer n
// Output:sum of power of count of the given  
// Example:
//  Input: 153
//  Output: 1³ + 5³ + 3³ = 153 (Armstrong Number)
// let num =5;
// let str = "";
// for(let i=0;i<=num;i++){
//     for(let j=1;j<=num;j++){
//         str=str+"* "
//     } 
//     str+="\n"
// }
// console.log(str)
// let num =5;
// let str = "";
// for(let i=1;i<=num;i++){
//     for(let j=1;j<=i;j++){
//         str=str+"* "
//     } 
//     str+="\n"
// }
// console.log(str)

// let num =5;
// let str = "";
// for(let i=1;i<=num;i++){
//     for(let j=num;j>=i;j--){
//         str=str+"* "
//     } 
//     str+="\n"
// }
// console.log(str)
// let num =5;
// let str = "";
// for(let i=num;i>=1;i--){
//     for(let j=1;j<=i;j++){
//         str=str+"* "
//     } 
//     str+="\n"
// }
// console.log(str)
// let str = "";
// for(let i=5;i>=1;i--){
//     for(let j =1;j<=i;j++){
//     //    str = str+ j+" "
//           str+=`${j} `
//     }
//     str+="\n";
// }
// console.log(str)
// let str = "";
// for(let i=1;i<=5;i++){
//     for(let j =i;j<=5;j++){
//     //    str = str+ j+" "
//           str+=`${i} `
//     }
//     str+="\n";
// }
// console.log(str)

// let str = "";
// for(let i=1;i<=5;i++){
//     for(let j =1;j<=i;j++){
//     //    str = str+ j+" "
//           str+=`${i} `
//     }
//     str+="\n";
// }
// console.log(str)
// let str = "";
// for(let i=5;i>=1;i--){
//     for(let j =i;j<=5;j++){
//     //    str = str+ j+" "
//           str+=`${i} `
//     }
//     str+="\n";
// }
// console.log(str)


// let str="";
// for(let i =1;i<=5;i++){
//     for(let j=1;j<=5;j++){
//     if(i==1||i==5||j==1||j==5)
//         str=str+"* "
//     else{
//         str+="  "
//     }
//     }
//     str+="\n"
// }
// console.log(str)

// let str="";
// for(let i =1;i<=5;i++){
//     for(let j=1;j<=5;j++){
//     if(i==1||i==5||(j==5&&i==1)||(j==4&&i==2)||(j==3&&i==3)||(j==2&&i==4))
//         str=str+"* "
//     else{
//         str+="  "
//     }
//     }
//     str+="\n"
// }
// console.log(str)

// let str ="";
// let stars = 1;
// let spaces = 5-1;
// for(let i = 1;i<=5;i++){
//     for(let j= 1;j<=spaces;j++){
//         str = str+'  ';
//     }
//     for(let j =1;j<=stars;j++){
//         str = str+ "* "
//     }
//     str+="\n";
//     stars++
//     spaces--
// }
// console.log(str)

// let str ="";
// let stars = 5;
// let spaces = 1;
// for(let i = 1;i<=5;i++){
//     for(let j= 1;j<=spaces;j++){
//         str = str+'  ';
//     }
//     for(let j =1;j<=stars;j++){
//         str = str+ "*   "
//     }
//     str+="\n";
//     stars--
//     spaces++
// }
// console.log(str)

// let str ="";
// let stars = 1;
// let spaces = 5-1;
// for(let i = 1;i<=5;i++){
//     for(let j= 1;j<=spaces;j++){
//         str = str+'  ';
//     }
//     for(let j =1;j<=stars;j++){
//         str = str+ "*   "
//     }
//     str+="\n";
//     stars++
//     spaces--
// }
// console.log(str)


//removing spaces
// let str ="";
// let stars = 1;
// let spaces = 5-1;
// for(let i = 1;i<=5;i++){
//     for(let j= 1;j<=spaces;j++){
//         str = str+'  ';
//     }
//     for(let j =1;j<=stars;j++){
//         if(j==stars){
//             str = str+ "*"
//         }
//         else{
//             str = str+ "*   "
//         }
//     }
//     str+="\n";
//     stars++
//     spaces--
// }
// console.log(str)



// removing spaces reverse
// let str ="";
// let stars = 5;
// let spaces = 1;
// for(let i = 1;i<=5;i++){
//     for(let j= 1;j<=spaces;j++){
//         str = str+'  ';
//     }
//     for(let j =1;j<=stars;j++){
//         if(j==stars){
//             str = str+ "*"
//         }
//         else str = str+ "*   "
//     }
//     str+="\n";
//     stars--
//     spaces++
// }
// console.log(str)

// let arr= ["apple","banana","mango","orange"];
// // for (let fruits of arr) {
// //     console.log(fruits)
// // }

// for(let ind in arr){
//     //cnsole.log(ind)
//     console.log(arr[ind])
// }


// let obj = {
//     name:"Avinash",
//     age:25,
//     pro:"Student"
// }
// // for(let val in obj){
// //     console.log(obj[val])
// // }
// let key = "name";
// console.log(obj[key]) // this is how it works

