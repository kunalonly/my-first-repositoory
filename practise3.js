let users = [
  {
    username: "kunal",
    email: "kunalraipurkar31@gamil.com",
    password: "Kunal@123",
    userSubcriptionStatus: "VIP",
    userLessionComplited: [0, 1, 2],
  },
  {
    username: "kunal1",
    email: "kunalraipurkar3@gamil.com",
    userSubcriptionStatus: "VIP",
    userLessionComplited: [0, 1, 2],
  },
];

function login(email, password) {
  for (let i = 0; i < users.length; i++) {
    if (users[i].email === email) {
      console.log(
        "You are present in the database please provide password for login"
      );

      if (users[i].password === password) {
        console.log("You logged in Seccessfully");
      } else {
        console.log("Please provide Correct Password");
      }

      return;
    }
  }
  console.log("Could Not find This user");
}

login("kunalraipurkar31@gamil.com", "Kunal@13");
