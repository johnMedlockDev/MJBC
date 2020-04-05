document.title = "Promises";

// const makeDogPromise = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const rand = Math.random();
//       if (rand < 0.5) {
//         resolve();
//       } else {
//         reject();
//       }
//     }, 5000);
//   });
// };

// makeDogPromise()
//   .then(() => {
//     console.log("Yay we got a dog!!!!");
//   })
//   .catch(() => {
//     console.log(":( No Dog");
//   });

const fakeRequest = url => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const pages = {
        "/users": [
          { id: 1, username: "Bilbo" },
          { id: 5, username: "Esmerelda" }
        ],
        "/users/1": {
          id: 1,
          username: "Bilbo",
          upvotes: 360,
          city: "Lisbon",
          topPostId: 454321
        },
        "/users/5": {
          id: 5,
          username: "Esmerelda",
          upvotes: 571,
          city: "Honolulu"
        },
        "/posts/454321": {
          id: 454321,
          title: "Ladies & Gentlemen, may I introduce my pet pig, Hamlet"
        },
        "/about": "This is the about page!"
      };
      const data = pages[url];
      if (data) {
        resolve({ status: 200, data });
      } else {
        reject({ status: 404 });
      }
    }, 500);
  });
};

// fakeRequest("/users")
//   .then(res => {
//     const id = res.data[0].id;
//     fakeRequest(`/users/${id}`).then(res => {
//       const postId = res.data.topPostId;
//       fakeRequest(`/posts/${postId}`).then(res => {
//         console.log(res);
//       });
//     });
//   })
//   .catch(res => {
//     console.log("Oh No!", err);
//   });

fakeRequest("/users")
  .then(res => {
    const id = res.data[0].id;
    return fakeRequest(`/users/${id}`);
  })
  .then(res => {
    const postId = res.data.topPostId;
    return fakeRequest(`/posts/${postId}`);
  })
  .then(res => {
    console.log(res);
  })
  .catch(res => {
    console.log("Oh No!", err);
  });

//   you do it this way to avoid nested thens but also so you can only write one catch and apply it all the then statements.
