const URL = "https://cat-fact.herokuapp.com/facts";

const factpara =document.querySelector("#fact");
const btn=document.querySelector("#btn");

 

 const getFacts = async () => {
    console.log("getting data ...");
    
  let response = await fetch(URL);
 console.log(response);// jason fromat
  let data =await response.json();// return second promise

  factpara.innerText= data[0].text;
  };

// using chain promise

// function getFacts(){
//   fetch(URL).then((response)=> {
//    return  response.json();

//   }).then((data) =>{
//     console.log(data);
//     factpara.innerText =data[2].text;
//   });
// }



  btn.addEventListener("click",getFacts);