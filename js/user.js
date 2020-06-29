//Demo Data (data gets from the server with ajax call)
var articles = [
  {
    article:
      "Nature is the most beautiful and attractive surrounding around us which make us happy and provide us natural environment to live healthy. Our nature provides us variety of beautiful flowers, attractive birds, animals, green plants, blue sky, land, running rivers, sea, forests, air, mountains, valleys, hills and many more things. Our God has created a beautiful nature for the healthy living of us. All the things we use for our living are the assets of nature which we should not spoil and damage. Read more on Brainly",
    image:
      "https://img.freepik.com/free-photo/rocky-shore-cloudy-sky_198523-63.jpg?size=338&ext=jpg&uid=A&ga=GA1.2.1561619586.1593240951",
  },
  {
    article:
      "Nature is the most beautiful and attractive surrounding around us which make us happy and provide us natural environment to live healthy. Our nature provides us variety of beautiful flowers, attractive birds, animals, green plants, blue sky, land, running rivers, sea, forests, air, mountains, valleys, hills and many more things. Our God has created a beautiful nature for the healthy living of us. All the things we use for our living are the assets of nature which we should not spoil and damage. Read more on Brainly",
    image:
      "https://img.freepik.com/free-photo/man-sits-end-trolltunga-before-mountains_1304-5318.jpg?size=338&ext=jpg&uid=A&ga=GA1.2.1561619586.1593240951",
  },
  {
    article:
      "Nature is the most beautiful and attractive surrounding around us which make us happy and provide us natural environment to live healthy. Our nature provides us variety of beautiful flowers, attractive birds, animals, green plants, blue sky, land, running rivers, sea, forests, air, mountains, valleys, hills and many more things. Our God has created a beautiful nature for the healthy living of us. All the things we use for our living are the assets of nature which we should not spoil and damage. Read more on Brainly",
    image:
      "https://img.freepik.com/free-photo/beautiful-old-tree-grown-edge-rock-with-amazing-clouds-side-sunlight_181624-2512.jpg?size=338&ext=jpg&uid=A&ga=GA1.2.1561619586.1593240951",
  },
  {
    article:
      "Nature is the most beautiful and attractive surrounding around us which make us happy and provide us natural environment to live healthy. Our nature provides us variety of beautiful flowers, attractive birds, animals, green plants, blue sky, land, running rivers, sea, forests, air, mountains, valleys, hills and many more things. Our God has created a beautiful nature for the healthy living of us. All the things we use for our living are the assets of nature which we should not spoil and damage. Read more on Brainly",
    image:
      "https://img.freepik.com/free-photo/beautiful-white-apple-blossom-sprouts-branch-tree-during-beginning-spring_181624-5937.jpg?size=338&ext=jpg&uid=A&ga=GA1.2.1561619586.1593240951",
  },
  {
    article:
      "Nature is the most beautiful and attractive surrounding around us which make us happy and provide us natural environment to live healthy. Our nature provides us variety of beautiful flowers, attractive birds, animals, green plants, blue sky, land, running rivers, sea, forests, air, mountains, valleys, hills and many more things. Our God has created a beautiful nature for the healthy living of us. All the things we use for our living are the assets of nature which we should not spoil and damage. Read more on Brainly",
    image:
      "https://img.freepik.com/free-photo/flock-birds-flying-blue-sky-during-daytime_206273-24.jpg?size=338&ext=jpg&uid=A&ga=GA1.2.1561619586.1593240951",
  },
  {
    article:
      "Nature is the most beautiful and attractive surrounding around us which make us happy and provide us natural environment to live healthy. Our nature provides us variety of beautiful flowers, attractive birds, animals, green plants, blue sky, land, running rivers, sea, forests, air, mountains, valleys, hills and many more things. Our God has created a beautiful nature for the healthy living of us. All the things we use for our living are the assets of nature which we should not spoil and damage. Read more on Brainly",
    image:
      "https://img.freepik.com/free-photo/crop-hands-carrying-plant_23-2147826194.jpg?size=338&ext=jpg&uid=A&ga=GA1.2.1561619586.1593240951",
  },
  {
    article:
      "Nature is the most beautiful and attractive surrounding around us which make us happy and provide us natural environment to live healthy. Our nature provides us variety of beautiful flowers, attractive birds, animals, green plants, blue sky, land, running rivers, sea, forests, air, mountains, valleys, hills and many more things. Our God has created a beautiful nature for the healthy living of us. All the things we use for our living are the assets of nature which we should not spoil and damage. Read more on Brainly",
    image:
      "https://img.freepik.com/free-photo/pink-chrysanthemums-white-windowsill_176873-4810.jpg?size=338&ext=jpg&uid=A&ga=GA1.2.1561619586.1593240951",
  },
  {
    article:
      "Nature is the most beautiful and attractive surrounding around us which make us happy and provide us natural environment to live healthy. Our nature provides us variety of beautiful flowers, attractive birds, animals, green plants, blue sky, land, running rivers, sea, forests, air, mountains, valleys, hills and many more things. Our God has created a beautiful nature for the healthy living of us. All the things we use for our living are the assets of nature which we should not spoil and damage. Read more on Brainly",
    image:
      "https://img.freepik.com/free-photo/stones-pile_1122-411.jpg?size=338&ext=jpg&uid=A&ga=GA1.2.1561619586.1593240951",
  },
  {
    article:
      "Nature is the most beautiful and attractive surrounding around us which make us happy and provide us natural environment to live healthy. Our nature provides us variety of beautiful flowers, attractive birds, animals, green plants, blue sky, land, running rivers, sea, forests, air, mountains, valleys, hills and many more things. Our God has created a beautiful nature for the healthy living of us. All the things we use for our living are the assets of nature which we should not spoil and damage. Read more on Brainly",
    image:
      "https://img.freepik.com/free-photo/tasty-waffle-with-strawberries-sugar-top-view_116380-28.jpg?size=338&ext=jpg&uid=A&ga=GA1.2.1561619586.1593240951",
  },
  {
    article:
      "Nature is the most beautiful and attractive surrounding around us which make us happy and provide us natural environment to live healthy. Our nature provides us variety of beautiful flowers, attractive birds, animals, green plants, blue sky, land, running rivers, sea, forests, air, mountains, valleys, hills and many more things. Our God has created a beautiful nature for the healthy living of us. All the things we use for our living are the assets of nature which we should not spoil and damage. Read more on Brainly",
    image:
      "https://img.freepik.com/free-photo/dark-moody-food-image-fresh-ripe-orange-wooden-table-still-life-photography-vintage-style_1484-267.jpg?size=338&ext=jpg&uid=A&ga=GA1.2.1561619586.1593240951",
  },
  {
    article:
      "Nature is the most beautiful and attractive surrounding around us which make us happy and provide us natural environment to live healthy. Our nature provides us variety of beautiful flowers, attractive birds, animals, green plants, blue sky, land, running rivers, sea, forests, air, mountains, valleys, hills and many more things. Our God has created a beautiful nature for the healthy living of us. All the things we use for our living are the assets of nature which we should not spoil and damage. Read more on Brainly",
    image:
      "https://img.freepik.com/free-photo/pagoda-sunset_181624-4091.jpg?size=338&ext=jpg&uid=A&ga=GA1.2.1561619586.1593240951",
  },
]
// iterating Array
function renderArticels() {
  for (let i = 0; i < articles.length; i++) {
    addData(articles[i]);
  }
}
// Injecting data on Dynamic tags (DHTML)
function addData(data) {
  const day = new Date().getDate();
  const month = new Date().getMonth();
  const year = new Date().getFullYear();
  const time = `${day}/${month + 1}/${year}`;
  const divTag = $("<div></div>").addClass("post-block col-12");
  const header = $("<div></div>").addClass("header-block");
  const profileTag = $("<div></div>").addClass("profile");
  const imgTag1 = $("<img>").attr("src", "../image/kid11.jpg"); //here user image
  const nameTag = $("<span></span>").addClass("profile-name");
  profileTag.append(imgTag1, nameTag);
  nameTag.text(`Vamsi Chilukuri (${time})`);
  header.append(profileTag);
  const imgBlock = $("<div></div>").addClass("img-block");
  const articleBlock = $("<div></div>").addClass("article-block");
  const optBlock = $("<div></div>").addClass("opt-block");
  const li1 = $("<li></li>").addClass("like-btn");
  li1.text("Like");
  const i1 = $("<i></i>").addClass("fas fa-thumbs-up");
  li1.append(i1);
  const li2 = $("<li></li>").addClass("comment-btn");
  li2.text("Comment");
  const i2 = $("<i></i>").addClass("fas fa-comment");
  li2.append(i2);
  const li3 = $("<li></li>").addClass("share-btn");
  li3.text("Share");
  const i3 = $("<i></i>").addClass("fas fa-share");
  li3.append(i3);
  const imgTag = $("<img>").attr("src", data.image);
  imgTag.addClass("pic");
  imgBlock.append(imgTag);
  const pTag = $("<p></p>").addClass("article");
  pTag.text(data.article);
  
  articleBlock.append(pTag);
  optBlock.append(li1, li2, li3);
  divTag.append(imgBlock, articleBlock, optBlock);
  $("#new-posts").prepend(header, divTag);
}
// user new post selectors
function uploadPostNdImage() {
  var obj = {};
  obj.article = $("#article").val();
  obj.image = $("#file").val();
  addData(obj);
  document.querySelector("#article").value = "";
  document.querySelector("#file").value = "";
}
renderArticels();

//user profile in nav bar
document.querySelector(".profile-link").addEventListener("click", () => {
  document.querySelector("#mobile-user").style.display = "block";
});

//event listener
document.querySelector("#toggle-btn").addEventListener("click", () => {
  document.querySelector("#mobile-user").style.display = "none";
});
