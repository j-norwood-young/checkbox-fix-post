class CheckboxFixPost {
    constructor(opts) {
        this.opts = Object.assign(opts || {}, {
            checkbox_selector: `input[type="checkbox"]`,
            selector: "form"
        });
        document.addEventListener("DOMContentLoaded", this.setup.bind(this));
    }

    onSubmit(e) {
        const data = e.formData;
        const checkboxes = e.currentTarget.querySelectorAll(this.opts.checkbox_selector);
        Array.from(checkboxes).forEach(checkbox => {
            const inverse_val = checkbox.getAttribute("inverse-value");
            if (!inverse_val) return;
            const name = checkbox.getAttribute("name");
            if (!name) return;
            const checked = checkbox.checked;
            if (checked) return;
            const val = inverse_val || 0;
            data.set(name, val);
        });
    }

    setupForm(form) {
        form.addEventListener("formdata", this.onSubmit.bind(this));
    }

    setup() {
        const forms = document.querySelectorAll(this.opts.selector);
        Array.from(forms).forEach(this.setupForm.bind(this))
    }
}

module.exports = CheckboxFixPost;