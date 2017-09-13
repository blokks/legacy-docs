+++
date            = "2017-09-12T11:31:19+02:00"
author          = "@patrickpietens"

title           = "Change colors"
description     = ""
keywords        = ["blokks", "design", "embed", "template", "layout", "colors", "fonts", "icons"]
weight          = 404

[menu.main]
parent          = "design-your-schedule"
+++

You can change any color used in the embed. The prefered and easiest way to apply your own styling is to use *CSS custom properties*, or *CSS variables*. *CSS variables* are [supported by all modern browsers](http://configure/browsersupport).

The syntax for *CSS variables* is straightforward:

```css
:root {
  --blokks-theme-color: rebeccapurple;
}
```

In the above example `--blokks-theme-color` is a Blokks defined property with a value of `rebeccapurple`. You should note that all *CSS variables* are prefixed with **--blokks**. Adding the above code in the `<head>` of your page will change the main color of the embed to `rebeccapurple`.

![Image: Changing theme color using CSS variables](https://blokks.co/docs/images/rebeccapurple.png)

Below you will find the complete list of colors which you can change with *CSS variables*:

| Property | Description |
|----------|-------------|
| **--blokks-theme-color** | Lorem ipsum dolor sit amet, consectetur adipiscing elit. |
| **--blokks-default-background-color** | Suspendisse ornare posuere tellus et posuere. Donec dignissim, nibh quis tincidunt sollicitudin. |
| **--blokks-dark-background-color** | Suspendisse tellus nulla, interdum bibendum ultricies eu. |
| **--blokks-default-text-color** | Quisque eget erat ligula. Fusce blandit nisi id lobortis mollis. |
| **--blokks-light-text-color** | Pellentesque tincidunt mattis sagittis. |
| **--blokks-dimmed-text-color** | Fusce volutpat quam et lacus pharetra pellentesque at et orci. |
| **--blokks-stroke-color** | Duis ipsum tortor, interdum vel lorem eget. |
| **--blokks-default-icon-color** | Aliquam vulputate justo lorem, a pellentesque metus porttitor id. |
| **--blokks-light-icon-color** | Vivamus viverra erat id maximus blandit. |
| **--blokks-selection-color** | Etiam dignissim ut lorem non vulputate. |

<span class='note'>You should note that *CSS variables* are case sensitive, so `--blokks-theme-color` and `--Blokks-Theme-Color` are different.</span>

## See also
- [Structure of our embed](http://structure)
- [Working with CSS Variables in JavaScript](http://cssproperties)
- [Browser support](http://browsersupport#customproperties)
