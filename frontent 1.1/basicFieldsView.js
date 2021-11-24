import formGeneratorView from "./formGeneratorView.js";

class BasicFieldsView extends formGeneratorView {
  constructor() {
    super();
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
export default new BasicFieldsView();
