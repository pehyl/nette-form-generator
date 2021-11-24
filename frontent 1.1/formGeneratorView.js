export default class FormGeneratorView {
  _parentElement = document.querySelector(".custom-form");
  //_data;
  constructor() {}
  render(state, id, handlerUpdate) {
    // generate general template
    const markup = this._generateFormElement(state.FORMEL_COUNT, id);
    this._parentElement.insertAdjacentHTML("beforeend", markup);
    //add options for selectbox
    if (id === "selectbox") {
      this.addOption(this._parentElement.lastChild);
    }
    // activating event listener for remove btn
    this.removeElementFn(
      this._parentElement.lastChild.querySelector(".btn-removeEl")
    );
    // activating event listener for dragging function
    this.dragElement(this._parentElement.lastChild);
    // update state
    if (!handlerUpdate) return;
    handlerUpdate();
  }
  removeElementFn(btn) {
    //console.log("I was clicked");
    btn.addEventListener("click", function () {
      const el = this.closest(".form-element");
      // console.log(el);
      document.querySelector(".custom-form").removeChild(el);
    });
  }
  dragElement(element) {
    element.addEventListener("mousedown", (e) => {
      if (e.target.classList.contains("draggable-handle")) {
        element.setAttribute("draggable", "true");

        element.addEventListener("dragstart", (e) => {
          console.log(e.target);
          element.classList.add("dragging");
        });
        element.addEventListener("dragend", () => {
          e.target.closest(".form-element").setAttribute("draggable", "false");
          element.classList.remove("dragging");
        });
      }
      return;
    });
    this._parentElement.addEventListener("dragover", (e) => {
      e.preventDefault();
      const afterElement = getDragAfterElement(this._parentElement, e.clientY);
      const draggable = document.querySelector(".dragging");
      if (afterElement == null) {
        this._parentElement.appendChild(draggable);
      } else {
        this._parentElement.insertBefore(draggable, afterElement);
      }
    });
    //});

    function getDragAfterElement(customForm, y) {
      const draggableElements = [
        ...customForm.querySelectorAll(".draggable:not(.dragging)"),
      ];
      return draggableElements.reduce(
        (closest, child) => {
          const box = child.getBoundingClientRect();
          const offset = y - box.top - box.height / 2;
          if (offset < 0 && offset > closest.offset) {
            return { offset: offset, element: child };
          } else {
            return closest;
          }
        },
        { offset: Number.NEGATIVE_INFINITY }
      ).element;
    }
  }
  // activating control buttons
  static formBtnControl() {
    document.querySelector(".container").addEventListener("click", function () {
      if (document.querySelector(".custom-form").childNodes.length !== 0) {
        document.querySelector(".btn-submit").removeAttribute("disabled", "");
      }
      if (document.querySelector(".custom-form").childNodes.length === 0) {
        document.querySelector(".btn-submit").setAttribute("disabled", "");
      }
    });
  }
}
