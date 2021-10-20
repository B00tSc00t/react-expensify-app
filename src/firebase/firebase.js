import * as firebase from "firebase";

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUT_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
};

firebase.initializeApp(firebaseConfig);

const database = firebase.database();

export { firebase, database as default };

// // child_removed
// database.ref("expenses").on("child_removed", (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// // child_changed
// database.ref("expenses").on("child_changed", (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// // child_added
// database.ref("expenses").on("child_added", (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// database.ref("expenses").on("value", (snapshot) => {
//   const expenses = [];

//   snapshot.forEach((childSnapshot) => {
//     expenses.push({
//       id: childSnapshot.key,
//       ...childSnapshot.val(),
//     });
//   });
//   console.log(expenses);
// });

// database
//   .ref("expenses")
//   .once("value")
//   .then((snapshot) => {
//     const expenses = [];

//     snapshot.forEach((childSnapshot) => {
//       expenses.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val(),
//       });
//     });
//     console.log(expenses);
//   });

// database.ref("expenses").push({
//   description: "My First Expense",
//   note: "Cost is too high",
//   amount: 1234567,
//   createdAt: 12345,
// });

// Use .push to automatically generate the ID for an array in Firebase
// database.ref("notes").push({
//   title: "To Do",
//   body: "Gym stuff",
// });
// // This is how arrays are setup in Firebase
// const firebaseNotes = {
//   notes: {
//     asdlkf: {
//       title: "First note",
//       body: "This is my note section",
//     },
//   },
// };
// // Arrays don't work like this in Firebase
// const notes = [
//   {
//     id: "11",
//     title: "First note",
//     body: "This is my note section",
//   },
//   {
//     id: "13",
//     title: "Second note",
//     body: "Wasted duplicate note section",
//   },
// ];

// database.ref("notes").set(notes);

// database.ref().on("value", (snapshot) => {
//   const val = snapshot.val();
//   console.log(`${val.firstName} is a ${val.job.title} at ${val.job.company}.`);
// });

// // Callack function to show live changes using '.on'
// const onValueChange = database.ref().on(
//   "value",
//   (snapshot) => {
//     console.log(snapshot.val());
//   },
//   (e) => {
//     console.log("Error with fetching data.", e);
//   }
// );

// // setting up a subscription to show changes when they happen.
// setTimeout(() => {
//   database.ref("age").set(43);
// }, 3500);

// // Turn .off the subscription
// setTimeout(() => {
//   database.ref("age").off(onValueChange);
// }, 7000);

// setTimeout(() => {
//   database.ref("age").set(45);
// }, 10500);

// Query the database and get a return
// database
//   .ref("location/city")
//   .once("value")
//   .then((snapshot) => {
//     const val = snapshot.val();
//     console.log(val);
//   })
//   .catch((e) => {
//     console.log("Error fetching data.", e);
//   });

// database
//   .ref()
//   .set({
//     firstName: "Rick S",
//     age: 41,
//     stressLevel: 7,
//     job: {
//       title: "Software Dev",
//       company: "CCM",
//     },
//     location: {
//       city: "Salt Lake",
//       state: "Utah",
//     },
//   })
//   .then(() => {
//     console.log("Data is saved!");
//   })
//   .catch((e) => {
//     console.log("This failed.", e);
//   });

// database.ref().update({
//   stressLevel: 3,
//   "job/company": "Lews",
//   "location/city": "Ogden",
// });
// proper syntax when updating a 'child' without losing parent info
// database.ref().update({
//   job: "DishMan",
//   "location/city": "Murray",
// });

// Using .remove you can hone in on a single item
// database
//   .ref("isSingle")
//   .remove()
//   .then(() => {
//     console.log("Data was removed.");
//   })
//   .catch((e) => {
//     console.log("No data was removed.", e);
//   });
