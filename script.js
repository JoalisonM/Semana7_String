const createList = (numberItems, text) => {
  const listItems = [];
  const list = document.createElement("ul");

  for (let i = 0; i < numberItems; i++) {
    if (text === undefined) {
      text = "Text"
    }

    listItems.push(`${text} ${i + 1}`);
  }

  for (let i = 0; i < listItems.length; i++) {
    const item = document.createElement("li");

    item.appendChild(document.createTextNode(listItems[i]));
    list.appendChild(item);
  }

  return list;
};

const list = createList(5, "Item");

document.getElementById("list").appendChild(list);