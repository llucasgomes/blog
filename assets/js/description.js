import { views } from "./functions.js";

const idPost = localStorage.getItem("selected");

const posts = JSON.parse(localStorage.getItem("posts"));
const users = JSON.parse(localStorage.getItem("users"));

const post = posts.find((item) => item.id == idPost);

const user = users.find((item) => item.userId == post.userId);

if (post.category == "Moda") {
  let banner = document.getElementById("header-banner");
  banner.style.backgroundColor = "#F593CE";
}

if (post.category == "Tecnologia" || post.category == "Desenvolvimento") {
  let banner = document.getElementById("header-banner");
  banner.style.backgroundColor = "#1E6AFF";
}

document.getElementById("title").innerHTML = post.title;
document.getElementById("desc").innerHTML = post.body;

document.getElementById("profile").src = user.picture;
document.getElementById(
  "nameUser"
).innerHTML = `${user.name.first} ${user.name.last}`;

views(post, posts);
