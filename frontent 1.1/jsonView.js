export default class JsonView {
  constructor() {
    this.editor;
  }

  //setup editor
  static editorSetup(handler) {
    return (this.editor = handler());
  }
  // clear editor value
  static clear() {
    this.editor.setValue("");
  }
  // getting editor value
  static getEditorValue() {
    return this.editor.getValue();
  }
  //method for generating JSON
  static generateJSON(handler) {
    const text = handler();
    this.editor.setValue(
      js_beautify(
        JSON.stringify({
          text,
        }),
        {
          indent_size: "2",
          indent_char: " ",
          max_preserve_newlines: "5",
          preserve_newlines: true,
          keep_array_indentation: false,
          break_chained_methods: false,
          indent_scripts: "normal",
          brace_style: "expand",
          space_before_conditional: true,
          unescape_strings: false,
          jslint_happy: false,
          end_with_newline: false,
          wrap_line_length: "0",
          indent_inner_html: false,
          comma_first: false,
          e4x: false,
          indent_empty_lines: false,
        }
      )
    );
  }
  // undo formatting of JSON
  static normalizeJSON() {
    const copyText = this.editor
      .getValue()
      .replace(/\s+/g, "")
      .replace(/\n+/g, "");
    return copyText;
  }
  // copy json
  static copyJSON() {
    console.log(this.editor);

    const copyText = this.normalizeJSON();
    navigator.clipboard
      .writeText(copyText)
      .then(() => {
        document.querySelector(".success-message").style.display = "block";
        setTimeout(function () {
          document.querySelector(".success-message").style.display = "none";
        }, 1000);
      })
      .catch((err) => {
        document.querySelector(".failure-message").style.display = "block";
        setTimeout(function () {
          document.querySelector(".success-message").style.display = "none";
        }, 1000);
      });
  }
  static jsonBtnControl() {
    console.log(this.editor);
    this.editor.addEventListener("change", function () {
      console.log(JsonView.editor.getValue());
      if (JsonView.editor.getValue() !== "") {
        document.querySelector(".btn-copy").removeAttribute("disabled", "");
        document.querySelector(".btn-edit").removeAttribute("disabled", "");
      }
      if (JsonView.editor.getValue() === "") {
        document.querySelector(".btn-copy").setAttribute("disabled", "");
        document.querySelector(".btn-edit").setAttribute("disabled", "");
      }
    });
  }
}
