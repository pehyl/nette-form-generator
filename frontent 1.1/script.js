// let FORMEL_COUNT = 1;
// const addElement = document.querySelector(".btn-addEl");
// const container = document.querySelector(".container");
// const customForm = document.querySelector(".custom-form");

// const formControls = document.querySelector(".form-controls");
// const generateBtn = document.querySelector(".btn-submit");
// const btnCopyJson = document.querySelector(".btn-copy");
// // query selector alls (due to inserting more elements, they need to be updated each time)
// let formEls = [];
// let removeBtns = [];
// let toggleEl = [];
// let hiddenEl = [];
// let elementSelectorEls = [];
// let draggables = [];
// // -----------------------
// // OPTIONS VISIBILITY OF FORM ELEMENT TYPE

// // ADDING FORM ELEMENT
// const addLine = function () {
//   customForm.insertAdjacentHTML(
//     "beforeend",
//     `<div draggable="false" class="form-element draggable" data-count="${FORMEL_COUNT}">
//     <select class="element-selector">
//     <option value="null">Choose type</option>
//     <option value="text">Text</option>
//     <option value="textarea">Textarea</option>
//     <option class="option" value="selectbox">Selectbox</option>
//     <option value="checkbox">Checkbox</option>
//   </select>
//   <button type="button" class="control-btn btn-removeEl" title="Remove this form element" data-count="${FORMEL_COUNT}">-</button>
//   <div class="element-properties">
//   <label for="label">Label</label>
//   <input id="label" name="label" type="text" />
//   <label for="name">Field name</label>
//   <input id="name" name="name" type="text" />
//   <label for="required">Required</label>
//   <input id="required" name="required" type="checkbox" />
//   <div class="custom-properties">
//   <label for="prompt" class="toggle hidden">Prompt</label>
//   <input name="prompt" type="text" class="toggle hidden" />
//   <div class="select-options toggle hidden">
//     <p class="select-options__title">Selectbox options</p>
//     <div class="option-container" data-option="${FORMEL_COUNT}">
//     <label for="option" class="option-label">°</label>
//     <input
//       name="optionkey"
//       type="text"
//       class="option-key"
//       title="Database key for the option"
//     />
//     <label for="optionkey" class="option-key-label">:</label>
//     <input
//       name="option"
//       type="text"
//       class="option-name"
//       title="Option value"
//     />
//                     <div class="options-controls">
//                       <button type="button" class="control-btn btn-add-option" title="Add new selectbox option">
//                         +
//                       </button>
//                     </div>
//                   </div>
//     </div>
//   </div>
//   </div>
//   <div class="draggable-handle" title="Drag me!"><svg
//   xmlns="http://www.w3.org/2000/svg"
//   width="24"
//   height="24"
//   fill="currentColor"
//   class="bi bi-grip-vertical"
//   viewBox="0 0 16 16"
// >
//   <path
//     d="M7 2a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"
//   />
// </svg></div>
//   </div>`
//   );
//   updateEls();
//   let target = document;
//   customForm.querySelectorAll(".form-element").forEach((el) => {
//     if (el.dataset.count == FORMEL_COUNT) {
//       target = el.querySelector(".element-selector");
//     }
//   });
//   activateSelect(target);
//   FORMEL_COUNT++;
// };
// addElement.addEventListener("click", addLine);
// // ADDING OPTIONS
// const addOption = function (formElement) {
//   formElement.querySelector(".select-options").insertAdjacentHTML(
//     "beforeend",
//     `<div class="option-container" data-option="${formElement.dataset.count}">
//     <label for="option" class="option-label">°</label>
//     <input
//       name="optionkey"
//       type="text"
//       class="option-key"
//       title="Database key for the option"
//     />
//     <label for="optionkey" class="option-key-label">:</label>
//     <input
//       name="option"
//       type="text"
//       class="option-name"
//       title="Option value"
//     />
//       <div class="options-controls">
//         <button type="button" class="control-btn btn-add-option"
//         title="Add new selectbox option">
//           +
//         </button>
//         <button
//           type="button"
//           class="control-btn btn-remove-option"
//           title="Remove selectbox option"
//         >
//           -
//         </button>
//       </div>
//     </div>
//       `
//   );
//   removeOptionFn();
//   return;
// };
// // updating form elements
// const updateEls = function () {
//   removeBtns = [];
//   document
//     .querySelectorAll(".btn-removeEl")
//     .forEach((btn) => removeBtns.push(btn));
//   //console.log(removeBtns);
//   toggleEl = [];
//   document.querySelectorAll(".toggle").forEach((btn) => toggleEl.push(btn));
//   hiddenEl = [];
//   document.querySelectorAll(".hidden").forEach((btn) => hiddenEl.push(btn));
//   formEls = [];
//   document.querySelectorAll(".form-element").forEach((el) => formEls.push(el));
//   elementSelectorEls = [];
//   document
//     .querySelectorAll(".element-selector")
//     .forEach((selector) => elementSelectorEls.push(selector));
//   draggables = [];
//   draggables = document.querySelectorAll(".draggable");
//   removeELementFn();
//   removeOptionFn();
//   draggingFN();
// };
// const removeELementFn = function () {
//   for (let i = 0; i < removeBtns.length; i++) {
//     removeBtns.forEach((btn) => {
//       btn.addEventListener("click", function (e) {
//         //console.log("I was clicked");
//         if (btn.closest(".form-element").dataset.count === btn.dataset.count) {
//           const el = btn.closest(".form-element");
//           customForm.removeChild(el);
//         }
//       });
//     });
//   }
// };
// const removeOptionFn = function () {
//   document.querySelectorAll(".btn-remove-option").forEach((el) =>
//     el.addEventListener("click", function (e) {
//       if (
//         e.target.closest(".option-container").dataset.option ===
//         e.target.closest(".form-element").dataset.count
//       ) {
//         const elementToRemove = e.target.closest(".option-container");
//         e.target.closest(".select-options").removeChild(elementToRemove);
//       }
//     })
//   );
// };
// // activate selectability of dropdown menu in new element

// const activateSelect = function (element) {
//   const parentEl = element.closest(".form-element");
//   let ourHiddenEls = [];
//   let ourToggleEls = [];
//   for (let i = 0; i < hiddenEl.length; i++) {
//     if (!hiddenEl) break;
//     if (
//       hiddenEl[i].closest(".form-element").dataset.count ===
//       parentEl.dataset.count
//     ) {
//       ourHiddenEls.push(hiddenEl[i]);
//     }
//   }
//   const value = element.options[element.selectedIndex].value;

//   if (value !== null) {
//     if (value === "selectbox") {
//       ourHiddenEls.forEach((el) => el.classList.remove("hidden"));
//     }
//     for (let i = 0; i < toggleEl.length; i++) {
//       if (
//         toggleEl[i].closest(".form-element").dataset.count ===
//         parentEl.dataset.count
//       ) {
//         ourToggleEls.push(toggleEl[i]);
//       }
//     }
//     if (value !== "selectbox") {
//       ourToggleEls.forEach((el) => el.classList.add("hidden"));
//     }
//   }
// };

// //
// //event listener function
// //element-selector / change
// container.addEventListener("click", function (e) {
//   //console.log(elementSelectorEls);
//   for (let i = 0; i < elementSelectorEls.length; i++) {
//     //console.log(e.target);
//     if (e.target != elementSelectorEls[i]) continue;
//     if (e.target == elementSelectorEls[i]) {
//       //console.log("I am element selector");
//       activateSelect(e.target);
//     }
//   }
// });

// customForm.addEventListener("click", function (e) {
//   if (e.target.classList.contains("btn-add-option")) {
//     addOption(e.target.closest(".form-element"));
//     return;
//   }
//   if (e.target.classList.contains("btn-remove-option")) {
//     removeOptionFn();
//     return;
//   }
// });
// // DRAGGING
// const draggingFN = function () {
//   if (!draggables) return;
//   draggables.forEach((draggable) => {
//     draggable.addEventListener("mousedown", (e) => {
//       if (e.target.classList.contains("draggable-handle")) {
//         e.target.closest(".form-element").setAttribute("draggable", "true");
//         draggable.addEventListener("dragstart", (e) => {
//           console.log(e.target);
//           draggable.classList.add("dragging");
//         });

//         draggable.addEventListener("dragend", () => {
//           e.target.closest(".form-element").setAttribute("draggable", "false");
//           draggable.classList.remove("dragging");
//         });
//       }
//       return;
//     });
//   });

//   //containers.forEach((container) => {
//   customForm.addEventListener("dragover", (e) => {
//     e.preventDefault();
//     const afterElement = getDragAfterElement(customForm, e.clientY);
//     const draggable = document.querySelector(".dragging");
//     if (afterElement == null) {
//       customForm.appendChild(draggable);
//     } else {
//       customForm.insertBefore(draggable, afterElement);
//     }
//   });
//   //});

//   function getDragAfterElement(customForm, y) {
//     const draggableElements = [
//       ...customForm.querySelectorAll(".draggable:not(.dragging)"),
//     ];
//     return draggableElements.reduce(
//       (closest, child) => {
//         const box = child.getBoundingClientRect();
//         const offset = y - box.top - box.height / 2;
//         if (offset < 0 && offset > closest.offset) {
//           return { offset: offset, element: child };
//         } else {
//           return closest;
//         }
//       },
//       { offset: Number.NEGATIVE_INFINITY }
//     ).element;
//   }
// };

// //format displayed JSON
// const jsonFormatter = function (string) {
//   //console.log(string);
//   const objects =
//     /*document
//     .querySelector(".json-preview")
//     .textContent*/
//     string.split("{");
//   //console.log(objects);
//   let formatted = ``;
//   //console.log(formatted);
//   for (let i = 0; i < objects.length; i++) {
//     let indent = "";
//     for (let j = 1; j <= i; j++) {
//       indent += `&emsp; `;
//     }

//     //console.log(indent);
//     formatted += `${indent}{${objects[i]}<br>`;
//   }
//   document.querySelector(".json-preview").innerHTML = formatted;
// };
// /// GENERATE JSON
// const generateFN = function (e) {
//   e.preventDefault();
//   const customForm = document.querySelector(".custom-form");
//   const finalArr = [];
//   // Loop through an array of form elements; for each element determine the type and get all the values
//   for (let i = 0; i < customForm.children.length; i++) {
//     //console.log(customForm.children[i].childNodes[3].children[1]);
//     switch (customForm.children[i].querySelector(".element-selector").value) {
//       case "text":
//         finalArr.push({
//           tag: customForm.children[i].querySelector(".element-selector").value,
//           name: customForm.children[i].querySelector("#name").value,
//           label: customForm.children[i].querySelector("#label").value,
//           required: customForm.children[i].querySelector("#required").checked,
//         });
//         break;
//       case "textarea":
//         finalArr.push({
//           tag: customForm.children[i].querySelector(".element-selector").value,
//           name: customForm.children[i].querySelector("#name").value,
//           label: customForm.children[i].querySelector("#label").value,
//           required: customForm.children[i].querySelector("#required").checked,
//         });
//         break;
//       case "selectbox":
//         let options = [];
//         const optionKeys = document
//           .querySelectorAll(".form-element")
//           [i].querySelectorAll(".option-key");
//         const optionNodes = document
//           .querySelectorAll(".form-element")
//           [i].querySelectorAll(".option-name");
//         //const uniqueOptions = [];
//         console.log(optionKeys, optionNodes);
//         for (const [i, v] of optionKeys.entries()) {
//           //options.push(optionNodes[z].value);
//           for (const [j, w] of optionNodes.entries()) {
//             if (optionKeys.entries[i] === optionNodes.entries[i]) {
//               options.push(`${v.value}: ${w.value}`);
//             }
//           }
//         }
//         let optionsObj = options.reduce(
//           (acc, cur, index) => ({
//             ...acc,
//             [`${cur.split(":")[0]}`]: `${cur.split(": ")[1]}`,
//           }),
//           {}
//         );

//         //console.log(optionsObj);

//         finalArr.push({
//           tag: customForm.children[i].querySelector(".element-selector").value,
//           name: customForm.children[i].querySelector("#name").value,
//           label: customForm.children[i].querySelector("#label").value,
//           required: customForm.children[i].querySelector("#required").checked,
//           prompt: customForm.children[i].querySelector(".prompt").value,
//           items: [optionsObj],
//         });
//         //console.log(finalArr);
//         break;
//       case "checkbox":
//         finalArr.push({
//           tag: customForm.children[i].querySelector(".element-selector").value,
//           name: customForm.children[i].querySelector("#name").value,
//           label: customForm.children[i].querySelector("#label").value,
//           required: customForm.children[i].querySelector("#required").checked,
//         });
//         break;
//     }
//   }
//   //console.log(JSON.parse(JSON.stringify({ finalArr })));
//   document.querySelector(".json-preview").innerHTML = JSON.stringify({
//     finalArr,
//   });
//   jsonFormatter(
//     JSON.stringify({
//       finalArr,
//     })
//   );
// };
// generateBtn.addEventListener("click", generateFN);

// // // copy JSON to clipboard
// const copyJSON = function () {
//   const copyText = document
//     .querySelector(".json-preview")
//     .innerHTML.replace(/<br\s*\/?>/gi, " ")
//     .replace(/\s*/gi, "");
//   //console.log(copyText);
//   navigator.clipboard
//     .writeText(copyText)
//     .then(() => {
//       document.querySelector(".success-message").style.display = "block";
//       setTimeout(function () {
//         document.querySelector(".success-message").style.display = "none";
//       }, 1000);
//     })
//     .catch((err) => {
//       document.querySelector(".failure-message").style.display = "block";
//       setTimeout(function () {
//         document.querySelector(".success-message").style.display = "none";
//       }, 1000);
//     });
// };
// btnCopyJson.addEventListener("click", copyJSON);

// /// INIT
// const init = function () {
//   document
//     .querySelector(".form-element")
//     .setAttribute("data-count", FORMEL_COUNT);
//   document
//     .querySelector(".btn-removeEl")
//     .setAttribute("data-count", FORMEL_COUNT);

//   updateEls();
//   activateSelect(document.querySelector(".element-selector"));
//   FORMEL_COUNT++;
//   //console.log(FORMEL_COUNT);
//   jsonFormatter(document.querySelector(".json-preview").textContent);
// };
// init();
