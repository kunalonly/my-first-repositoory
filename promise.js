const emailRef = document.querySelector(".email");

// fetch("https://jsonplaceholder.typicode.com/users/1")
//   .then((response) => {
//     return response.json();
//   })
//  .then((data) => {
//     console.log(data);
//     emailRef.innerHTML = data.address;
//   });

// async function main()
// {
//     const response=await fetch("https://jsonplaceholder.typicode.com/users/1");
//    const data= await(response.json());
//    emailRef.innerHTML=data.name;

// }


function getSubcriptionStatus()
{
    return new Promise ((resolve,reject)=>{
        resolve('VIP')

    })
}

getSubcriptionStatus().then(response=>console.log(response));

async function main()
{
   const data=await getSubcriptionStatus();

   emailRef.innerHTML=data
}
main();

