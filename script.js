const picture = document.querySelector("#profile-pic");
const dropdown = document.querySelector(".dropdown");
const darktheme = document.querySelector("#darkmode");
const messagesDropDown = document.querySelector(".messages-container");
const closeMsg = document.querySelector("#messages-close");
const right1 = document.querySelector("#right-1");
const right3 = document.querySelector("#right-3");
const chatBtn = document.querySelector("#chat-button");
const userInput = document.querySelector(".user-input");

//Darkmode
const banner = document.querySelector(".banner");
const sidebar = document.querySelector(".sidebar");
const mainInfo = document.querySelector(".main-info");
const chatMain = document.querySelector(".chat-main");
const bits = document.querySelector(".bits");
const searchInput = document.querySelector("#search-input");
const chatInput = document.querySelector("#chat-input");
const subs = document.querySelector(".subscription");
const gifts = document.querySelector(".gift");
const bell = document.querySelector("#bell");
const fav = document.querySelector("#fav");
const search = document.querySelector(".search-bar");
const mailNotify = document.querySelector("#mail-notification");
const messages = document.querySelector("#messages-icon");
const liveUpload = document.querySelector("#live-upload");
const liveMore = document.querySelector("#live-more");
const leaderboard = document.querySelector(".leaderboard");
const messagesInput = document.querySelector("input");
const period = document.querySelectorAll("#period");
const leftPart = document.querySelectorAll(".left-part");

picture.addEventListener("click", function () {
  dropdown.classList.toggle("show");
});

messages.addEventListener("click", function () {
  messagesDropDown.classList.toggle("show");
  mailNotify.remove();
  console.log("clicked");
});

closeMsg.addEventListener("click", function () {
  messagesDropDown.classList.toggle("show");
});

//DARKMODE//
darktheme.addEventListener("click", function () {
  document.body.classList.toggle("dark-theme");
  banner.classList.toggle("dark-theme");
  sidebar.classList.toggle("dark-theme");
  mainInfo.classList.toggle("dark-theme");
  chatMain.classList.toggle("dark-theme");
  bits.classList.toggle("dark-theme");
  searchInput.classList.toggle("dark-theme");
  chatInput.classList.toggle("dark-theme");
  dropdown.classList.toggle("dark-theme");
  subs.classList.toggle("dark-theme");
  gifts.classList.toggle("dark-theme");
  bell.classList.toggle("dark-theme");
  fav.classList.toggle("dark-theme");
  search.classList.toggle("dark-theme");
  mailNotify.classList.toggle("dark-theme");
  messagesDropDown.classList.toggle("dark-theme");
  liveUpload.classList.toggle("dark-theme");
  liveMore.classList.toggle("dark-theme");
  leaderboard.classList.toggle("dark-theme");
  right1.classList.toggle("dark-theme");
  messages.classList.toggle("dark-theme");
  right3.classList.toggle("dark-theme");
  messagesInput.classList.toggle("dark-theme");
  period.classList.toggle("dark-theme");
  leftPart.classList.toggle("dark-theme");
});

//CHAT//
const enterData = () => {
  let userChatMsg = document.createElement("p");
  if (chatInput.value === "") {
    return false;
  } else {
    userChatMsg.innerHTML = `<div class="chat-messages">
  <span class="material-symbols-outlined"> hotel_class </span>
  <h2><span id="name6">MauriceDR<span id="period">:</span></span>${chatInput.value}</h2>
</div>`;
    userInput.append(userChatMsg);
  }
  chatInput.value = "";
};

chatInput.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    enterData();
  }
});

chatBtn.addEventListener("click", enterData);
