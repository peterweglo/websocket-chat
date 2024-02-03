const loginForm = document.getElementById('welcome-form');
const messagesSection = document.getElementById('messages-section');
const messagesList = document.getElementById('messages-list');
const addMessageForm = document.getElementById('add-messages-form');
const userNameInput = document.getElementById('username');
const messageContentInput = document.getElementById('message-content');

console.log('loginform', loginForm);
let userName = '';

const login = (e) => {
  e.preventDefault();
  if (userNameInput.value.length > 0) {
    userName = userNameInput.value;
    loginForm.classList.remove('show');
    messagesSection.classList.add('show');
  } else {
    alert('Please type your login');
  }
};

loginForm.addEventListener('submit', login);

const addMessage = (author, content) => {
  const message = document.createElement('li');
  message.classList.add('message', 'message--received');
  if (author === userName) {
    message.classList.add('message--self');
  }
  message.innerHTML = `<h3 class="message__author">${
    author === userName ? 'You' : author
  }</h3><div class="message__content">${content}</div>`;
  messagesList.appendChild(message);
};

const sendMesage = (e) => {
  e.preventDefault();
  if (messageContentInput.value.length > 0) {
    addMessage(userName, messageContentInput.value);
    messageContentInput.value = '';
  } else {
    alert('Type your message');
  }
};

addMessageForm.addEventListener('submit', sendMesage);
