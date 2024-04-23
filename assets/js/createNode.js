export const enentNode = function ({
  id,
  title_uz,
  title_en,
  title_ru,
  description_uz,
  description_en,
  description_ru,
  image,
  link,
  createdAt,
}) {
  let lang;
  let template = document.getElementById("template");
  let newTemplate = template.content.cloneNode(true);
  let date = new Date(createdAt).toLocaleDateString();

  let listItem = newTemplate.querySelector(".event-list-item");
  let itemImage = newTemplate.querySelector(".event-item-img");
  let itemLink = newTemplate.querySelector(".event-item-link");
  let itemDate = newTemplate.querySelector(".event-item-time");
  let itemDesc = newTemplate.querySelector(".event-item-text");
  let itemTitle = newTemplate.querySelector(".event-item-title");

  listItem.dataset.id = id;
  itemImage.src = image;
  itemLink.href = link;
  itemDate.innerText = date;
  itemDesc.innerText = description_en;
  itemTitle.innerText = title_en;
  const languageSelectTop = document.querySelector(".navbar-language");
  languageSelectTop.addEventListener("change", (e) => {
    lang = e.target.value;
    if (lang === "uz") {
      itemTitle.innerText = title_uz;
      itemDesc.innerText = description_uz;
    } else if (lang === "ru") {
      itemTitle.innerText = title_ru;
      itemDesc.innerText = description_ru;
    } else {
      itemTitle.innerText = title_en;
      itemDesc.innerText = description_en;
    }
  });
  return newTemplate;
};

export const menuNode = function ({
  id,
  title_uz,
  title_en,
  title_ru,
  description_uz,
  description_en,
  description_ru,
  image,
  link,
  createdAt,
}) {
  let lang;
  let template = document.getElementById("menu-template");
  let newTemplate = template.content.cloneNode(true);
  let date = new Date(createdAt).toLocaleDateString();

  let listItem = newTemplate.querySelector(".menu-list-item");
  let itemImage = newTemplate.querySelector(".menu-item-img");
  let itemLink = newTemplate.querySelector(".menu-item-link");
  let itemDate = newTemplate.querySelector(".menu-item-time");
  let itemDesc = newTemplate.querySelector(".menu-item-text");

  listItem.dataset.id = id;
  itemImage.src = image;
  itemLink.href = link;
  itemDate.innerText = date;
  itemLink.innerText = title_en;
  itemDesc.innerText = description_en;

  const languageSelectTop = document.querySelector(".navbar-language");
  languageSelectTop.addEventListener("change", (e) => {
    lang = e.target.value;
    if (lang === "uz") {
      itemLink.innerText = title_uz;
      itemDesc.innerText = description_uz;
    } else if (lang === "ru") {
      itemLink.innerText = title_ru;
      itemDesc.innerText = description_ru;
    } else {
      itemLink.innerText = title_en;
      itemDesc.innerText = description_en;
    }
  });
  return newTemplate;
};
