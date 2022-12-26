const posts = [
  {
    name: "Vincent van Gogh",
    username: "vincey1853",
    location: "Zundert, Netherlands",
    avatar: "images/avatar-vangogh.jpg",
    post: "images/post-vangogh.jpg",
    comment: "just took a few mushrooms lol",
    likes: 21,
  },
  {
    name: "Onur Saygı",
    username: "onrsaygi",
    location: "Antalya, Turkey",
    avatar: "images/avatar-onur.jpg",
    post: "images/post-onur.jpg",
    comment: "my next project is starry night!",
    likes: 9999,
  },
  {
    name: "Gustave Courbet",
    username: "gus1819",
    location: "Ornans, France",
    avatar: "images/avatar-courbet.jpg",
    post: "images/post-courbet.jpg",
    comment: "i'm feelin a bit stressed tbh",
    likes: 4,
  },
  {
    name: "Joseph Ducreux",
    username: "jd1735",
    location: "Paris, France",
    avatar: "images/avatar-ducreux.jpg",
    post: "images/post-ducreux.jpg",
    comment:
      "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
    likes: 152,
  },
];


//   => Write a loop that loops the html elemets 3 (post lenght) times <=//
//   => Declare an empty variable for storing all the html <=//

// => Declare a variable for main div container <=//
const mainContainer = document.getElementById("main-container");
let containerHtml = "";
for (let i = 0; i < posts.length; i++) {
  containerHtml += `
  <section>
    <div class="post-container">
      <div class="user-info">
        <img
          class="avatar"
          src="${posts[i].avatar}"
          alt="${posts[i].name} avatar"
        />
        <h3>${posts[i].name}<span>${posts[i].location}</span></h3>
      </div>
      <img
        class="post-image"
        src="${posts[i].post}"
        alt="${posts[i].name} Selfie"
      />
      <div class="post-bottom">
        <div class="icons">
          <img src="images/icon-heart.png" alt="" id="like-icon" onclick="changeHeart()" />
          <img src="images/icon-comment.png" alt="" />
          <img src="images/icon-dm.png" alt="" />
        </div>
        <p id="like-count">${posts[i].likes} likes</p>
        <p id="caption">
          <span>${posts[i].username}</span> ${posts[i].comment}
        </p>
      </div>
    </div>
  </section>`;
}
mainContainer.innerHTML = containerHtml;
