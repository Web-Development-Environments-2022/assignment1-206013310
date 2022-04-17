const initApp = async () => {
  renderContacts();
  // add listeners
  listenForLikes();
};

document.addEventListener("DOMContentLoaded", initApp);

const renderContacts = () => {
  const main = document.querySelector("main");
  const cardsArray = [];
  const paths = ["1.jpg", "8.jpg", "2.jpg", "3.jpg", "5.jpg", "6.jpg", "7.jpg", "10.jpg", "11.jpg"];
  paths.forEach((path) => {
    const elemObj = createCardElements();
    const card = createPersonCard(elemObj, path);
    cardsArray.push(card);
  });

  cardsArray.forEach((card) => {
    main.appendChild(card);
  });
};

const createCardElements = () => {
  const article = document.createElement("article");
  const imgg = document.createElement("img");
  const like = document.createElement("div");
  return { article, imgg, like};
};

const createPersonCard = (elemObj, path) => {
  const { article, imgg, like} = elemObj;
  like.classList.add("like", "like-no");
  imgg.classList.add("imgg");
  imgg.src = path;

  article.appendChild(imgg);
  article.appendChild(like);
  return article;
};

const listenForLikes = () => {
  const likes = document.querySelectorAll(".like");
  likes.forEach(like => {
   like.addEventListener("click", (event) => {
     event.target.classList.toggle("like-no");
     event.target.classList.toggle("like-yes");
     if (event.target.classList.contains("like-yes")) {
       console.log("✅💾 Saving Favorite...");
       getFaveData(event.target);
     } else {
       console.log("❌ Removing Favorite...");
       getFaveData(event.target);
     }
   })
  })
}

const getFaveData = (elem) => {
  const parent = elem.parentElement;
  const imgg = parent.querySelector("img").src;
  const faveObj = { imgg };
  console.log(faveObj);
}
