const formik = document.getElementById("form");
const formSubscribe = document.getElementById("form-subscribe");
const bot_id = "7092135193:AAH3klJM2Zbl1WrwRN16deORsvURSRdY0Xo";
const chat_id = -1002130662695;
// form
formik.addEventListener("submit", (e) => {
  e.preventDefault();
  const data = {
    name: e.target[0].value,
    phone_number: e.target[1].value,
    message: e.target[2].value,
  };

  fetch("http://localhost:3300/form", {
    method: "POST",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
    body: JSON.stringify(data),
  }).then((res) => res);

  let user_name = e.target[0].value;
  let phone_number = e.target[1].value;
  let message = e.target[2].value;
  const tg_ready = function () {
    message =
      "Saytning contact us qismidan qoldirilgan xabar:" +
      "\nName: " +
      user_name +
      "\nEmail: " +
      phone_number +
      "\nMessage: " +
      message;
  };

  const sender = function () {
    tg_ready();
    let settings = {
      async: true,
      crossDomain: true,
      url: "https://api.telegram.org/bot" + bot_id + "/sendMessage",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "cache-control": "no-cache",
      },
      data: JSON.stringify({
        chat_id: chat_id,
        text: message,
      }),
    };
    $.ajax(settings).done(function (response) {
      return;
    });
  };
  sender();
  e.target[0].value = "";
  e.target[1].value = "";
  e.target[2].value = "";
});

// subscribe
formSubscribe.addEventListener("submit", (e) => {
  e.preventDefault();
  let settings = {
    async: true,
    crossDomain: true,
    url: "https://api.telegram.org/bot" + bot_id + "/sendMessage",
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "cache-control": "no-cache",
    },
    data: JSON.stringify({
      chat_id: chat_id,
      text:
        "Saytning obuna bo`lish qismidan: " + "\nEmail: " + e.target[0].value,
    }),
  };
  $.ajax(settings).done(function (response) {
    return;
  });
  e.target[0].value = "";
});


