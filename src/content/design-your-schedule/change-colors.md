+++
date            = "2017-09-12T11:31:19+02:00"
author          = "@patrickpietens"

title           = "Change colors"
description     = "Change any color used in your embed."
keywords        = ["blokks", "design", "embed", "template", "layout", "colors", "fonts", "icons"]
weight          = 404

[menu.main]
parent          = "design-your-schedule"

[[related]]
title = "Create templates: Structure of our embed"
url = "http://structure"

[[related]]
title = "Configure your schedule: Browser support"
url = "http://browsersupport#customproperties"
+++

You can change any color used in the embed. The preferred and easiest way to apply your own styling is to use *CSS custom properties*, or *CSS variables*. CSS variables are [supported by all modern browsers](http://configure/browsersupport).

The syntax for CSS variables is pretty straightforward:

```css
:root {
  --blokks-theme-color: purple;
}
```

In the above example `--blokks-theme-color` is a Blokks defined property with a value of `purple`. You should note that all CSS variables are prefixed with **\-\-blokks**. Adding the above code to your page will change the main color of the embed to `purple`.

![Image: Changing theme color using CSS variables](https://blokks.co/docs/images/rebeccapurple.png)

Below you'll find a complete list of colors that you can change using CSS variables:

| Background colors | Description |
|-------------------|-------------|
| `--blokks-theme-color` | The theme color is used for favorites, hovers, highlighted text and titles. The default value is `#2e8cd2` |
| `--blokks-default-background-color` | The `background-color` used by the embed. The default value is `#fff` |
| `--blokks-dashboard-background-color` | The `background-color` used for the [dashboard](http://blokks). The default value is `#33363b` |
| `--blokks-time-indicator-background-color` | The `background-color` used for the [time indicator](http://plc). The default value is `#33363b` |
| `--blokks-modal-background-color` | The `background-color` used for modals like the [activity details](http://blokks). The default value is `#fff` |
| `--blokks-image-background-color` | The `background-color` used when a [poster image](http://blokks) is not yet loaded. The default value is `#33363b` |
| `--blokks-dimmed-background-color` | The `background-color` used when an activity does not match the category selected with the [category filter](http://). The default value is `#abb1bc` |

| Text colors | Description |
|-------------|-------------|
| `--blokks-default-text-color` | The default text `color`. The default value is `#33363b` |
| `--blokks-light-text-color` | The light text `color` is used in the schedule. The default value is `#fff` |
| `--blokks-dimmed-text-color` | Dimmed text `color` is used for metadata and when activities have ended. The default value is `#989da8` |

| Other colors | Description |
|--------------|-------------|
| `--blokks-stroke-color` | The color that is used for button borders. The default value is `#989da8` |
| `--blokks-default-icon-color` | Default `fill` color used for [icons](http://icons). The default value is `#33363b` |
| `--blokks-light-icon-color` | Light `fill` color used for [icons](http://icons) on darker backgrounds. The default value is `#abb1bc` |

<span class='note'>You should note that CSS variables are case sensitive. For example, `--blokks-theme-color` and `--Blokks-Theme-Color` are different variables.</span>