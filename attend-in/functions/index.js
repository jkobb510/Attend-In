// This was the plan however it is no longer free so we need to find another way

// const functions = require('firebase-functions');
// const admin = require('firebase-admin');
// admin.initializeApp(functions.config().firebase);

// const createNotification = ((notification) => {
//   return admin.firestore().collection('notifications')
//     .add(notification)
//     .then(doc => console.log('notification added', doc));
// });


// exports.projectCreated = functions.firestore
//   .document('projects/{projectId}')
//   .onCreate(doc => {

//     const project = doc.data();
//     const notification = {
//       content: 'Added a new project',
//       user: `${project.authorFirstName} ${project.authorLastName}`,
//       time: admin.firestore.FieldValue.serverTimestamp()
//     }

//     return createNotification(notification);

// });

// exports.userJoined = functions.auth.user()
//   .onCreate(user => {

//     return admin.firestore().collection('users')
//       .doc(user.uid).get().then(doc => {

//         const newUser = doc.data();
//         const notification = {
//           content: 'Joined the party',
//           user: `${newUser.firstName} ${newUser.lastName}`,
//           time: admin.firestore.FieldValue.serverTimestamp()
//         };

//         return createNotification(notification);

//       });
// });


// exports.classAdded= functions.firestore
//   .document('studentClasses/{classId}')
//   .onCreate(doc => {

//       const courseInfo = doc.data();
//       console.log(courseInfo)
//       // const notification = {
//       //   content: 'Added a new project',
//       //   user: `${project.authorFirstName} ${project.authorLastName}`,
//       //   time: admin.firestore.FieldValue.serverTimestamp()
//       // }

//       // return createNotification(notification);

//   });
