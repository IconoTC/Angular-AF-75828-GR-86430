import usersPromise, { type User } from "./03.data.js";

let users: User[] = [];

usersPromise
  .then((usersData) => {
    console.log("Fetched users:", usersData);
    users = usersData;
  })
  .catch((error: Error) => {
    console.error("Error fetching users:", error.message);
  });
