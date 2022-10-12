const emailRef = document.querySelector(".email");
const subStatus = document.querySelector(".subcription");

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

function getSubcriptionStatus() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Undefined");
    }, 2000);
  });
}

//getSubcriptionStatus().then(response=>console.log(response));

function getVideo(getSubcriptionStatus) {
  return new Promise((resolve, reject) => {
    if (getSubcriptionStatus === "VIP") {
      resolve("Show video");
    } else if (getSubcriptionStatus === "FREE") {
      resolve("Watch Trailer");
    } else {
      reject("No Video");
    }
  });
}

async function main() {
  const data = await getSubcriptionStatus();
  emailRef.innerHTML = data;
try {
    const data1 = await getVideo(data);
    subStatus.innerHTML = data1;
  }
 catch (error) {
    console.log(error)
    subStatus.innerHTML = error;
}
}
main();
