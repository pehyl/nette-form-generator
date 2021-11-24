import formGeneratorView from "./formGeneratorView.js";

class SelectboxView extends formGeneratorView {
  constructor() {
    super();
  }

  addOption(formElement) {
    // state.addOptionBtns = formElement.querySelectorAll(".btn-add-option");
    const adding = function (formElement) {
      //   console.log(this);
      const markup = this._generateOption(formElement);
      //const markup = "I am an idiot";
      formElement
        .querySelector(".select-options")
        .insertAdjacentHTML("beforeend", markup);
    };
    formElement
      .querySelector(".select-options")
      .addEventListener("click", function (e) {
        if (!e.target.classList.contains("btn-add-option")) return;
        adding.call(SelectboxView, formElement);
      });
    this.removeOption.call(SelectboxView, formElement);
  }
  removeOption = function (formElement) {
    const removing = function (e) {
      const elementToRemove = e.target.closest(".option-container");
      e.target.closest(".select-options").removeChild(elementToRemove);
    };
    formElement
      .querySelector(".select-options")
      .addEventListener("click", function (e) {
        if (!e.target.classList.contains("btn-remove-option")) return;
        removing(e);
      });
  };
  static _generateOption(formElement) {
    return `<div class="option-container" data-option="${formElement.dataset.count}">
    <label for="option" class="option-label">°</label>
    <input
      name="optionkey"
      type="text"
      class="option-key"
      title="Database key for the option"
    />
    <label for="optionkey" class="option-key-label">:</label>
    <input
      name="option"
      type="text"
      class="option-name"
      title="Option value"
    />
      <div class="options-controls">
        <button type="button" class="control-btn btn-add-option"
        title="Add new selectbox option">
          +
        </button>
        <button
          type="button"
          class="control-btn btn-remove-option"
          title="Remove selectbox option"
        >
          -
        </button>
      </div>
    </div>
      `;
  }
  _generateFormElement(FORMEL_COUNT, id) {
    return `<div class="form-element draggable" data-count="${FORMEL_COUNT}">
      <p class="element-selector">${
        id.slice(0, 1).toUpperCase() + id.slice(1)
      }</p>
    <button type="button" class="control-btn btn-removeEl" title="Remove this form element" data-count="${FORMEL_COUNT}">-</button>
    <div class="element-properties">
    <label for="label">Label</label>
    <input id="label" name="label" type="text" />
    <label for="name">Field name</label>
    <input id="name" name="name" type="text" />
    <label for="required">Required</label>
    <input id="required" name="required" type="checkbox" />
    <div class="custom-properties">
    <label for="prompt">Prompt</label>
                  <input name="prompt" type="text" class="prompt" id="prompt"/>
                  <div class="select-options">
                    <p class="select-options__title">Selectbox options</p>
                    <div class="option-container" data-option="${FORMEL_COUNT}">
                      <label for="option" class="option-label">°</label>
                      <input
                        name="optionkey"
                        type="text"
                        class="option-key"
                        title="Database key for the option"
                      />
                      <label for="optionkey" class="option-key-label">:</label>
                      <input
                        name="option"
                        type="text"
                        class="option-name"
                        title="Option value"
                      />
                      <div class="options-controls">
                        <button
                          type="button"
                          class="control-btn btn-add-option"
                          title="Add new selectbox option"
                        >
                          +
                        </button>
                        
                      </div>
                    </div>
                  </div>
    </div>
    </div>
    <div class="draggable-handle" title="Drag me!"><svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    fill="currentColor"
    class="bi bi-grip-vertical"
    viewBox="0 0 16 16"
  >
    <path
      d="M7 2a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"
    />
  </svg></div>
    </div>`;
  }
}
export default new SelectboxView();
