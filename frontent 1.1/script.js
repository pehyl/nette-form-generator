import basicFieldsView from "./basicFieldsView.js";
import selectboxView from "./selectboxView.js";
import JsonView from "./jsonView.js";
import { state } from "./model.js";
import FormGeneratorView from "./formGeneratorView.js";

const elementChoice = document.querySelector(".element-choice");
const generateBtn = document.querySelector(".btn-submit");
const resetBtn = document.querySelector(".btn-clear");
const btnCopyJson = document.querySelector(".btn-copy");
const editBtn = document.querySelector(".btn-edit");

// add element menu control
document.querySelector(".btn-addEl").addEventListener("click", function () {
  menuPosition();
  elementChoice.classList.remove("hidden");
});
// add element render control
document.querySelectorAll(".element-choice__value").forEach((el) =>
  el.addEventListener("click", function () {
    switch (el.id) {
      case "text":
        basicFieldsView.render(state, el.id, updateState);
        break;
      case "textarea":
        basicFieldsView.render(state, el.id, updateState);
        break;
      case "selectbox":
        selectboxView.render(state, el.id, updateState);
        break;
      case "checkbox":
        basicFieldsView.render(state, el.id, updateState);
        break;
    }
    //FormGeneratorView.render(state, el.id, updateState);
    elementChoice.classList.add("hidden");
    elementChoice.style.bottom = 0;
    elementChoice.style.top = "auto";
  })
);
// add element menu control
const menuPosition = function () {
  if (document.querySelector(".form-element")) return;
  const position = document
    .querySelector(".element-choice")
    .getBoundingClientRect().bottom;
  elementChoice.style.top = 0;
  elementChoice.style.bottom = "auto";
};
// resetting state arrays
// const resetStateArrays = function () {
//   state.removeBtns = [];
//   state.toggleEl = [];
//   state.hiddenEl = [];
//   state.formEls = [];
//   state.draggables = [];
// };
// update state
const updateState = function () {
  // resetStateArrays();
  state.FORMEL_COUNT++;
  // document
  //   .querySelectorAll(".btn-removeEl")
  //   .forEach((btn) => state.removeBtns.push(btn));
  // document
  //   .querySelectorAll(".toggle")
  //   .forEach((btn) => state.toggleEl.push(btn));
  // document
  //   .querySelectorAll(".hidden")
  //   .forEach((btn) => state.hiddenEl.push(btn));
  // document
  //   .querySelectorAll(".form-element")
  //   .forEach((el) => state.formEls.push(el));
  // state.draggables = document.querySelectorAll(".draggable");
  console.log(state);
};

// generate JSON
const generateFN = function () {
  //e.preventDefault();
  const customForm = document.querySelector(".custom-form");
  const finalArr = [];
  // Loop through an array of form elements; for each element determine the type and get all the values
  for (let i = 0; i < customForm.children.length; i++) {
    console.log(
      customForm.children[i].querySelector(".element-selector").textContent
    );
    switch (
      customForm.children[i]
        .querySelector(".element-selector")
        .textContent.toLowerCase()
    ) {
      case "text":
        finalArr.push({
          tag: "text",
          name: customForm.children[i].querySelector("#name").value,
          label: customForm.children[i].querySelector("#label").value,
          required: customForm.children[i].querySelector("#required").checked,
        });
        break;
      case "textarea":
        finalArr.push({
          tag: "textarea",
          name: customForm.children[i].querySelector("#name").value,
          label: customForm.children[i].querySelector("#label").value,
          required: customForm.children[i].querySelector("#required").checked,
        });
        break;
      case "selectbox":
        let options = [];
        const optionKeys = document
          .querySelectorAll(".form-element")
          [i].querySelectorAll(".option-key");
        const optionNodes = document
          .querySelectorAll(".form-element")
          [i].querySelectorAll(".option-name");
        console.log(optionKeys, optionNodes);
        for (const [i, v] of optionKeys.entries()) {
          for (const [j, w] of optionNodes.entries()) {
            if (i === j) {
              options.push(`${v.value}: ${w.value}`);
            }
          }
        }
        console.log(options);
        let optionsObj = options.reduce(
          (acc, cur, index) => ({
            ...acc,
            [`${cur.split(":")[0]}`]: `${cur.split(": ")[1]}`,
          }),
          {}
        );

        //console.log(optionsObj);

        finalArr.push({
          tag: "selectbox",
          name: customForm.children[i].querySelector("#name").value,
          label: customForm.children[i].querySelector("#label").value,
          required: customForm.children[i].querySelector("#required").checked,
          prompt: customForm.children[i].querySelector("#prompt").value,
          items: [optionsObj],
        });
        //console.log(finalArr);
        break;
      case "checkbox":
        finalArr.push({
          tag: "checkbox",
          name: customForm.children[i].querySelector("#name").value,
          label: customForm.children[i].querySelector("#label").value,
          required: customForm.children[i].querySelector("#required").checked,
        });
        break;
    }
  }
  console.log(finalArr);
  console.log(JSON.parse(JSON.stringify({ finalArr })));

  return finalArr;
};
// Generating JSON
generateBtn.addEventListener("click", function (e) {
  e.preventDefault();
  JsonView.generateJSON(generateFN);
});
// copying JSON
btnCopyJson.addEventListener("click", function () {
  JsonView.copyJSON.call(JsonView);
});

// reset
resetBtn.addEventListener("click", function () {
  document.querySelector(".custom-form").innerHTML = "";
  state.FORMEL_COUNT = 1;
  JsonView.clear();
});

// generate form element fields from pasted JSON
const jsonEditFn = function () {
  const data = JsonView.getEditorValue.call(JsonView);
  const json = Object.values(JSON.parse(data))[0];
  for (let i = 0; i < json.length; i++) {
    state.FORMEL_COUNT = i + 1;
    switch (json[i].tag) {
      case "text":
        basicFieldsView.render(state, "text", undefined);
        const curElement = document.querySelector(".custom-form").lastChild;
        curElement.querySelector("#name").value = json[i].name;
        curElement.querySelector("#label").value = json[i].label;
        curElement.querySelector("#required").checked = json[i].required;
        break;
      case "textarea":
        basicFieldsView.render(state, "textarea", undefined);
        const curElement1 = document.querySelector(".custom-form").lastChild;
        curElement1.querySelector("#name").value = json[i].name;
        curElement1.querySelector("#label").value = json[i].label;
        curElement1.querySelector("#required").checked = json[i].required;
        break;
      case "selectbox":
        selectboxView.render(state, "selectbox", undefined);
        const curElement3 = document.querySelector(".custom-form").lastChild;
        curElement3.querySelector("#name").value = json[i].name;
        curElement3.querySelector("#label").value = json[i].label;
        curElement3.querySelector("#required").checked = json[i].required;
        curElement3.querySelector("#prompt").value = json[i].prompt;
        const options = Object.entries(json[i].items[0]);
        // console.log(options);
        // adding option lines
        for (let j = 0; j < options.length; j++) {
          curElement3.querySelectorAll(".option-key")[j].value = options[j][0];
          curElement3.querySelectorAll(".option-name")[j].value = options[j][1];
          if (j === options.length - 1) break;
          curElement3.querySelector(".btn-add-option").click();
        }
        break;
      case "checkbox":
        basicFieldsView.render(state, "checkbox", undefined);
        const curElement2 = document.querySelector(".custom-form").lastChild;
        curElement2.querySelector("#name").value = json[i].name;
        curElement2.querySelector("#label").value = json[i].label;
        curElement2.querySelector("#required").checked = json[i].required;
        break;
    }
  }
};
// edit json button event
editBtn.addEventListener("click", function () {
  document.querySelector(".custom-form").innerHTML = "";
  state.FORMEL_COUNT = 1;
  jsonEditFn();
});
// editor setup handled by the JsonView
const setupEditor = function () {
  const editor = ace.edit("editor");
  editor.setTheme("ace/theme/monokai");
  editor.session.setMode("ace/mode/javascript");
  editor.setOptions({
    autoScrollEditorIntoView: true,
  });
  editor.session.setUseWrapMode(true);
  return editor;
};
//init FN
const init = function () {
  console.log(state);
  menuPosition();
  //ace editor setup
  JsonView.editorSetup(setupEditor);
  JsonView.jsonBtnControl.call(JsonView);
  FormGeneratorView.formBtnControl();
};
init();
