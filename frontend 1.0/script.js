let FORMEL_COUNT = 1;
const addElement = document.querySelector(".btn-addEl");
const container = document.querySelector(".container");
const customForm = document.querySelector(".custom-form");

const formControls = document.querySelector(".form-controls");
const generateBtn = document.querySelector(".btn-submit");
// query selector alls (due to inserting more elements, they need to be updated each time)
let formEls = [];
let removeBtns = [];
let toggleEl = [];
let hiddenEl = [];
let elementSelectorEls = [];
// -----------------------
// OPTIONS VISIBILITY OF FORM ELEMENT TYPE

// ADDING FORM ELEMENT
addLine = function () {
  customForm.insertAdjacentHTML(
    "beforeend",
    `<div class="form-element draggable" data-count="${FORMEL_COUNT}">
    <select class="element-selector">
    <option value="null">Choose type</option>
    <option value="text">Text</option>
    <option value="textarea">Textarea</option>
    <option class="option" value="selectbox">Selectbox</option>
    <option value="checkbox">Checkbox</option>
  </select>
  <button type="button" class="control-btn btn-removeEl" data-count="${FORMEL_COUNT}">-</button>
  <div class="element-properties">
  <label for="label">Label</label>
  <input name="label" type="text">
  <label for="name">Field name</label>
  <input name="name" type="text">
  <label for="required">Required</label>
  <input name="required" type="checkbox">
  <label for="prompt" class="toggle hidden">Prompt</label>
  <input name="prompt" type="text" class="toggle hidden" />
  <div class="select-options toggle hidden">
    <p class="select-options__title">Selectbox options</p>
    <div class="option-container" data-option="${FORMEL_COUNT}">
                    <label for="option" class="option-label">°</label>
                    <input name="option" type="text" class="option-name" />
                    <div class="options-controls">
                      <button type="button" class="control-btn btn-add-option">
                        +
                      </button>
                    </div>
                  </div>
    </div>
  </div>
  </div>`
  );
  updateEls();
  let target = document;
  customForm.querySelectorAll(".form-element").forEach((el) => {
    if (el.dataset.count == FORMEL_COUNT) {
      target = el.querySelector(".element-selector");
    }
  });
  activateSelect(target);
  FORMEL_COUNT++;
};
addElement.addEventListener("click", addLine);
// ADDING OPTIONS
const addOption = function (formElement) {
  formElement.querySelector(".select-options").insertAdjacentHTML(
    "beforeend",
    `<div class="option-container" data-option="${formElement.dataset.count}">
      <label for="option" class="option-label">°</label>
      <input name="option" type="text" class="option-name" />
      <div class="options-controls">
        <button type="button" class="control-btn btn-add-option">
          +
        </button>
        <button
          type="button"
          class="control-btn btn-remove-option"
        >
          -
        </button>
      </div>
    </div>
      `
  );
  removeOptionFn();
  return;
};
// updating form elements
const updateEls = function () {
  removeBtns = [];
  document
    .querySelectorAll(".btn-removeEl")
    .forEach((btn) => removeBtns.push(btn));
  console.log(removeBtns);
  toggleEl = [];
  document.querySelectorAll(".toggle").forEach((btn) => toggleEl.push(btn));
  hiddenEl = [];
  document.querySelectorAll(".hidden").forEach((btn) => hiddenEl.push(btn));
  formEls = [];
  document.querySelectorAll(".form-element").forEach((el) => formEls.push(el));
  elementSelectorEls = [];
  document
    .querySelectorAll(".element-selector")
    .forEach((selector) => elementSelectorEls.push(selector));
  removeELementFn();
  removeOptionFn();
};
const removeELementFn = function () {
  for (i = 0; i < removeBtns.length; i++) {
    removeBtns.forEach((btn) => {
      btn.addEventListener("click", function (e) {
        console.log("I was clicked");
        if (btn.closest(".form-element").dataset.count === btn.dataset.count) {
          const el = btn.closest(".form-element");
          customForm.removeChild(el);
        }
      });
    });
  }
};
const removeOptionFn = function () {
  document.querySelectorAll(".btn-remove-option").forEach((el) =>
    el.addEventListener("click", function (e) {
      console.log("Clicked the option remover");
      console.log(e.target.closest(".option-container").dataset.option);
      if (
        e.target.closest(".option-container").dataset.option ===
        e.target.closest(".form-element").dataset.count
      ) {
        const elementToRemove = e.target.closest(".option-container");
        e.target.closest(".select-options").removeChild(elementToRemove);
      }
    })
  );
};
// activate selectability of dropdown menu in new element

const activateSelect = function (element) {
  const parentEl = element.closest(".form-element");

  // console.log(parentEl);
  // console.log(formEls);
  // console.log(hiddenEl);
  // console.log(toggleEl);
  let ourHiddenEls = [];
  let ourToggleEls = [];
  for (i = 0; i < hiddenEl.length; i++) {
    if (!hiddenEl) break;
    if (
      hiddenEl[i].closest(".form-element").dataset.count ===
      parentEl.dataset.count
    ) {
      ourHiddenEls.push(hiddenEl[i]);
    }
  }
  console.log(ourHiddenEls);
  console.log(element.closest(".form-element"));
  // works till here
  // we get value when we click the select option

  const value = element.options[element.selectedIndex].value;

  console.log(value);
  if (value !== null) {
    if (value === "selectbox") {
      ourHiddenEls.forEach((el) => el.classList.remove("hidden"));
    }
    for (i = 0; i < toggleEl.length; i++) {
      if (
        toggleEl[i].closest(".form-element").dataset.count ===
        parentEl.dataset.count
      ) {
        ourToggleEls.push(toggleEl[i]);
      }
    }
    // && value != null
    if (value !== "selectbox") {
      ourToggleEls.forEach((el) => el.classList.add("hidden"));
    }
  }
};

//
//event listener function
//element-selector / change
container.addEventListener("click", function (e) {
  console.log(elementSelectorEls);
  for (i = 0; i < elementSelectorEls.length; i++) {
    console.log(e.target);
    if (e.target != elementSelectorEls[i]) continue;
    if (e.target == elementSelectorEls[i]) {
      console.log("I am element selector");
      activateSelect(e.target);
    }
  }
});

customForm.addEventListener("click", function (e) {
  if (e.target.classList.contains("btn-add-option")) {
    addOption(e.target.closest(".form-element"));
    return;
  }
  if (e.target.classList.contains("btn-remove-option")) {
    removeOptionFn();
    return;
  }
});
// DRAGGING
// const draggables = document.querySelectorAll(".draggable");
// const containers = document.querySelectorAll(".container");

// draggables.forEach((draggable) => {
//   draggable.addEventListener("dragstart", () => {
//     draggable.classList.add("dragging");
//   });

//   draggable.addEventListener("dragend", () => {
//     draggable.classList.remove("dragging");
//   });
// });

// containers.forEach((container) => {
//   container.addEventListener("dragover", (e) => {
//     e.preventDefault();
//     const afterElement = getDragAfterElement(container, e.clientY);
//     const draggable = document.querySelector(".dragging");
//     if (afterElement == null) {
//       container.appendChild(draggable);
//     } else {
//       container.insertBefore(draggable, afterElement);
//     }
//   });
// });

// function getDragAfterElement(container, y) {
//   const draggableElements = [
//     ...container.querySelectorAll(".draggable:not(.dragging)"),
//   ];

//   return draggableElements.reduce(
//     (closest, child) => {
//       const box = child.getBoundingClientRect();
//       const offset = y - box.top - box.height / 2;
//       if (offset < 0 && offset > closest.offset) {
//         return { offset: offset, element: child };
//       } else {
//         return closest;
//       }
//     },
//     { offset: Number.NEGATIVE_INFINITY }
//   ).element;
// }
/// GENERATE JSON
const generateFN = function (e) {
  e.preventDefault();
  const customForm = document.querySelector(".custom-form");
  const finalArr = [];
  for (i = 0; i < customForm.children.length; i++) {
    console.log(customForm.children[i].childNodes[3].children[1]);
    switch (customForm.children[i].childNodes[1].value) {
      case "text":
        finalArr.push({
          tag: customForm.children[i].childNodes[1].value,
          name: customForm.children[i].childNodes[5].children[3].value,
          label: customForm.children[i].childNodes[5].children[1].value,
          required: customForm.children[i].childNodes[5].children[5].checked,
        });
        break;
      case "textarea":
        finalArr.push({
          tag: customForm.children[i].childNodes[1].value,
          name: customForm.children[i].childNodes[5].children[3].value,
          label: customForm.children[i].childNodes[5].children[1].value,
          required: customForm.children[i].childNodes[5].children[5].checked,
        });
        break;
      case "selectbox":
        let options = [];
        const optionNodes = document
          .querySelectorAll(".form-element")
          [i].querySelectorAll(".option-name");
        //const uniqueOptions = [];
        console.log(optionNodes);
        for (let z = 0; z < optionNodes.length; z++) {
          options.push(optionNodes[z].value);
        }
        let optionsObj = options.reduce(
          (acc, cur, index) => ({
            ...acc,
            [`option${index + 1}`]: cur,
          }),
          {}
        );

        console.log(optionsObj);

        finalArr.push({
          tag: customForm.children[i].childNodes[1].value,
          name: customForm.children[i].childNodes[5].children[3].value,
          label: customForm.children[i].childNodes[5].children[1].value,
          required: customForm.children[i].childNodes[5].children[5].checked,
          prompt: customForm.children[i].childNodes[5].children[7].value,
          items: [optionsObj],
        });
        console.log(finalArr);
        break;
      case "checkbox":
        finalArr.push({
          tag: customForm.children[i].childNodes[1].value,
          name: customForm.children[i].childNodes[5].children[3].value,
          label: customForm.children[i].childNodes[5].children[1].value,
          required: customForm.children[i].childNodes[5].children[5].checked,
        });
        break;
    }
  }
  console.log(JSON.parse(JSON.stringify({ finalArr })));
  document.querySelector(".json-preview").textContent = JSON.stringify({
    finalArr,
  });
};
generateBtn.addEventListener("click", generateFN);
/// INIT
const init = function () {
  document
    .querySelector(".form-element")
    .setAttribute("data-count", FORMEL_COUNT);
  document
    .querySelector(".btn-removeEl")
    .setAttribute("data-count", FORMEL_COUNT);

  updateEls();
  activateSelect(document.querySelector(".element-selector"));
  FORMEL_COUNT++;
  console.log(FORMEL_COUNT);
};
init();
