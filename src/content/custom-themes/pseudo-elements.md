+++
date            = "2017-09-15T11:31:19+02:00"
author          = "@patrickpietens"

title           = "Pseudo elements"
description     = "With pseudo-elements you can extend the structure of the schedule using only CSS."
keywords        = ["blokks", "themes", "structure", "layout"]
weight          = 507

[menu.main]
parent          = "custom-themes"

[[related]]
title = "Custom themes: Data attributes"
url = "data-attributes.md"

[[related]]
title = "Browsers & devices: Known issues"
url = "known-issues.md"

[[related]]
title = "CSS-Tricks: A Whole Bunch of Amazing Stuff Pseudo Elements Can Do"
url = "https://css-tricks.com/pseudo-element-roundup/"
+++

With *pseudo-elements* you can extend the structure of the schedule using only CSS. Pseudo elements will add extra elements `:before` and `:after` the element’s content. These pseudo elements are visible to the user and styleable with CSS.

Adding `:before` and `:after` works the same as the following:

```html
<div>
  <span><!-- Before pseudo-element --></span> 
  This the main content. 
  <span><!-- After pseudo-element --></span>
</div>
```

But, with *pseudo-elements*, we'd only need some CSS to achieve the same result:

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

Without the `content` property *pseudo-elements* won’t be rendered. To make them visible just set the `content` property. Once visible you can change its `color`, add a `background-image`, set font properties, specify dimensions, etc.

<span class='note'>*Pseudo-elements* are inline-level elements by default. Don’t forget to change their `display` to ` block` or `inline-block` if you want to set their dimensions.</span>