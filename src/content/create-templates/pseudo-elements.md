+++
date            = "2017-09-15T11:31:19+02:00"
author          = "@patrickpietens"

title           = "Pseudo elements"
description     = "The schedule is split into smaller, independent pieces called components."
keywords        = ["blokks", "templates", "themes", "structure", "layout"]
weight          = 507

[menu.main]
parent          = "create-templates"

[[related]]
title = "Data attributes"
url = "data-attributes.md"


[[related]]
title = "Browser support"
url = "known-issues.md"

[[related]]
title = "CSS-Tricks: A Whole Bunch of Amazing Stuff Pseudo Elements Can Do"
url = "https://css-tricks.com/pseudo-element-roundup/"
+++

Using `pseudo-elements` you can extend the structure of the schedule with CSS. Pseudo-elements will add extra elements `:before` and `:after` the element’s content. These elements are visible to the user and are styleable with CSS. 

Adding `:before` and `:after` is basically the same as:

```html
<div>
  <span>Before pseudo-element</span> 
  This the main content. 
  <span>After pseudo-element</span>
</div>
```

Without the `content` property pseudo-elements won’t be rendered. To make them visible just set the `content` property of the selector. Once visible you can change its `color`, adding `background-image`, setting font properties, specify dimensions etc.

```css
.blokks-selector:before {
  display: block;
  width: 100px;
  height: 50px;
  background-color: rebeccapurple;
  content: "";
}

.blokks-selector:after {
  position: absolute;
  top: 0;
  left: 100px;
  content: "";
}
```

<span class='note'>Pseudo-elements are inline-level elements by default. Don’t forget to change its `display` to ` block` or `inline-block` if you want to set its dimensions.</span>