# Checkbox Fix Post

This library fixes checkboxes so that they submit a value on a form submit, even if they are not selected.

It uses vanilla Javascript and does not rely on external libraries.

## Usage

```html
<script src="./bundle.js"></script>
<script>
    checkboxfixpost();
</script>
<form action="" method="get">
    <label for="checkbox1">
        <input type="checkbox" name="checkbox1" id="checkbox1" value="1">
        Checkbox 1
    </label>
    <br>
    <label for="checkbox1">
        <input type="checkbox" name="checkbox2" id="checkbox2" value="1">
        Checkbox 2
    </label>
    <br>
    <input type="submit" value="Submit">
</form>
<hr>
<form action="" method="get">
    <label for="checkbox3">
        <input type="checkbox" name="checkbox-inverse" id="checkbox-inverse" value="Blah" inverse-value="Yack">
        Checkbox with Inverse
    </label>
    <br>
    <input type="submit" value="Submit">
</form>
```

## Options

You can pass the following options when calling `checkboxfixpost()`:

_selector_

A selector for a form or forms you want to target. Defaults to `form`. Eg. `#myForm`.

_checkbox_selector_

A selector for the checkboxes you wish to target. Defaults to all checkboxes with `input[type="checkbox"]`.

## Specifying values

A value of 0 will always be returned if the checkbox is selected, unless you set the property `inverse-value` on the checkbox, in which case that value will be sent. 
```html
<input type="checkbox" name="checkbox-inverse" id="checkbox-inverse" value="Blah" inverse-value="Yack">
```

## Using as a library

You can use this as a library by simply requiring it.

```
npm i --save checkbox-fix-post
```

```javascript
const CheckboxFixPost = require("checkbox-fix-post");
const checkbox_fix_post = new CheckboxFixPost({
    selector: `form`,   // Default
    checkbox_selector: `input[type="checkbox"]` // Default
});
```