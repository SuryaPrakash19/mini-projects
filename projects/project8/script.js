let users = [];
const chats = document.querySelector(".chats");
let allChat;
const searchBox = document.querySelector("searchBox");
window.fetch("https://randomuser.me/api/?results=150").then((x) => {
  x.json().then((y) => {
    users = y.results;
    console.log(users);
    users.forEach((user) => {
      const chat = document.createElement("div");
      chat.classList.add("chat");
      const name = document.createElement("h4");
      name.classList.add("name");
      name.innerText = user.name.first + " " + user.name.last;
      const profilePic = document.createElement("img");
      profilePic.classList.add("profilePic");
      profilePic.src = user.picture.thumbnail;
      const location = document.createElement("p");
      location.classList.add("location");
      location.setAttribute("overflow", "hidden");
      location.innerText = user.location.state + ", " + user.location.country;
      chat.appendChild(profilePic);
      chat.appendChild(name);
      chat.appendChild(location);
      chats.appendChild(chat);
    });
    allChat = document.querySelectorAll(".chat");
  });
});
function inputChanged() {
  const text = this.searchBox.value;
  if (text) {
    allChat.forEach((chat) => {
      let name = String(chat.querySelector(".name").innerText);
      let location = String(chat.querySelector(".location").innerText);
      if (
        !name.toLowerCase().includes(text.toLowerCase()) &&
        !location.toLowerCase().includes(text.toLowerCase())
      ) {
        chat.classList.add("displayNone");
      } else {
        chat.classList.remove("displayNone");
      }
    });
  } else {
    allChat.forEach((chat) => {
      chat.classList.remove("displayNone");
    });
  }
}
