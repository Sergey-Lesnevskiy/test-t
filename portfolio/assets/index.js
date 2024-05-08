const BTN_BURGER = document.querySelector(".menu__burger");
const BTN_CROSS = document.querySelector(".menu__cross");
const MENU = document.querySelector(".menu");
const SOCIAL_LINKS = document.querySelector(".menu__socials");
const OVERLAY_CONTENT = document.querySelector(".menu__overlay");
const BODY = document.querySelector("body");
const FORM_BUTTON = document.querySelector(".contacts__button");
const INPUT_MAIL = document.querySelector("#email");
const EMAIL_LABEL = document.querySelector(".email");

const INPUT_NAME = document.querySelector("#name");
const NAME_LABEL = document.querySelector(".name");

const TEXT_SMS = document.querySelector("#textarea");
const SMS_LABEL = document.querySelector(".form__label-textarea");

const BTNS_HERO = document.querySelectorAll(".button--portfolio");
const CONTAINER_BTN = document.querySelector(".hero__buttons");

const LIST_MENU = document.querySelector(".menu__list");

//menu
BTN_BURGER.addEventListener("click", addBurgerMenu);

BTN_CROSS.addEventListener("click", removeBurgerMenu);

OVERLAY_CONTENT.addEventListener("click", removeBurgerMenu);

LIST_MENU.addEventListener("click", removeBurgerMenu);


function addBurgerMenu() {
  MENU.classList.add("active__menu");
  SOCIAL_LINKS.classList.add("active__menu");
  OVERLAY_CONTENT.classList.add("active__menu");
  BODY.classList.add("lock");
  disableScroll();
}
function removeBurgerMenu() {
  MENU.classList.remove("active__menu");
  SOCIAL_LINKS.classList.remove("active__menu");
  OVERLAY_CONTENT.classList.remove("active__menu");
  BODY.classList.remove("lock");
  enableScroll();
}
//validation

FORM_BUTTON.addEventListener("click", (e) => {
  e.preventDefault();
  const email = validationEmail();
  const name = validationName();
  const sms = validationSms();
  if (sms && name && email) {
    fetch("https://jsonplaceholder.typicode.com/users/", {
      method: "POST",
      body: JSON.stringify({
        id: 1,
        name: name,
        username: sms,
        email: email,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        alert(
          `Вы отправили следующие данные:\n имя: ${data.name}\n email: ${data.email} \n cообщение: ${data.username}\n Я обязательно отвечу вам!`
        );
      });
      INPUT_MAIL.value = "";
      TEXT_SMS.value = "";
      INPUT_NAME.value = "";
  } else {
    alert(`Введите корректные данные`);
  }

});
INPUT_MAIL.addEventListener("focus", () => {
  INPUT_MAIL.classList.remove("red");
  EMAIL_LABEL.textContent = "Ваша почта";
  EMAIL_LABEL.classList.remove("red-label");
});
INPUT_NAME.addEventListener("focus", () => {
  INPUT_NAME.classList.remove("red");
  NAME_LABEL.textContent = "Ваша имя";
  NAME_LABEL.classList.remove("red-label");
});
TEXT_SMS.addEventListener("focus", () => {
  TEXT_SMS.classList.remove("red");
  SMS_LABEL.textContent = "Ваша сообщение";
  SMS_LABEL.classList.remove("red-label");
});

function validationEmail() {
  if (handlerValidateEmail(INPUT_MAIL.value)) {
    return INPUT_MAIL.value;
  } else {
    INPUT_MAIL.classList.add("red");
    EMAIL_LABEL.textContent = "Вы ввели неверные данные";
    EMAIL_LABEL.classList.add("red-label");
    return false;
  }
}
function validationName() {
  if (handlerValidateName(INPUT_NAME.value)) {
    return INPUT_NAME.value;
  } else {
    INPUT_NAME.classList.add("red");
    NAME_LABEL.textContent = "Вы ввели неверные данные";
    NAME_LABEL.classList.add("red-label");
    return false;
  }
}
function validationSms() {
  if (TEXT_SMS.value.trim()) {
    return TEXT_SMS.value.trim();
  } else {
    TEXT_SMS.classList.add("red");
    SMS_LABEL.textContent = "Вы ввели неверные данные";
    SMS_LABEL.classList.add("red-label");
    return false;
  }
}

const handlerValidateEmail = (email) => {
  return email.match(
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
};
const handlerValidateName = (name) => {
  return name.match(/[^а-яА-Я]\D|[^a-zA-Z]\D+/g);
};

//scroll
let paddingOffset = window.innerWidth - document.body.offsetWidth;

let disableScroll = function () {
  document.body.style.paddingRight = paddingOffset + "px";
  BTN_BURGER.style.right = 28 + paddingOffset + "px";
};

let enableScroll = function () {
  document.body.style.paddingRight = "0px";
  BTN_BURGER.style.right = 28 + "px";
};

// buttons hero
CONTAINER_BTN.addEventListener('click',(e)=>{
  let target = e.target;
  if (e.target.tagName === "A") {
    highlight(target);
  };
})

function highlight(el) {
  BTNS_HERO.forEach(item=> {
  item.classList.remove("active");
  });
  el.classList.add("active"); 
}


// animation
function onEntry(entry) {
  entry.forEach((change) => {
    if (change.isIntersecting) {
      change.target.classList.add("element-show");
    } else {
      change.target.classList.remove("element-show");
    }
  });
}

let options = {
  threshold: [0.5],
};
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll(".element-animation");

for (let elm of elements) {
  observer.observe(elm);
}
