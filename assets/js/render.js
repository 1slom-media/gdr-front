import { enentNode, menuNode } from "./createNode.js";

export const eventRender = function (where, data) {
  let fragmant = document.createDocumentFragment();
  data?.forEach((data) => {
    let node = enentNode(data);
    fragmant.append(node);
  });
  where.innerHTML = "";
  where.append(fragmant);
};

export const menuRender = function (where, data) {
  let fragmant = document.createDocumentFragment();
  data?.forEach((data) => {
    let node = menuNode(data);
    fragmant.append(node);
  });
  where.innerHTML = "";
  where.append(fragmant);
};
