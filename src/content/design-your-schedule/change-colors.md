+++
date            = "2017-09-12T11:31:19+02:00"
author          = "@patrickpietens"

title           = "Change colors"
description     = ""
keywords        = ["blokks", "design", "embed", "template", "layout", "colors", "fonts", "icons"]
weight          = 404

[menu.main]
parent          = "design-your-schedule"

[[related]]
title = "Create templates: Structure of our embed"
url = "http://structure"

[[related]]
title = "Configur your schedule: Browser support"
url = "http://browsersupport#customproperties"
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

| Background colors | Description |
|-------------------|-------------|
| `--blokks-theme-color` | The theme color is used for indicating favorites, hovers, highlighted text, titles etc. Default value is `#2e8cd2` |
| `--blokks-default-background-color` | The default `background-color` used by the embed. Default value is `#fff` |
| `--blokks-dashboard-background-color` | The `background-color` used for the [dashboard](http://blokks). Default value is `#33363b` |
| `--blokks-time-indicator-background-color` | The `background-color` used for the [time indicator](http://plc). Default value is `#33363b` |
| `--blokks-modal-background-color` | The `background-color` used for modals like the [activity details](http://blokks). Default value is `#fff` |
| `--blokks-image-background-color` | The `background-color` used when a [poster image](http://blokks) is not yet loaded. Default value is `#33363b` |
| `--blokks-dimmed-background-color` | The `background-color` used when an activity does not match the category selected with the [category filter](http://). Default value is `#abb1bc` |

| Text colors | Description |
|-------------|-------------|
| `--blokks-default-text-color` | The default text `color`. This is used for displaying descriptions etc. Default value is `#33363b` |
| `--blokks-light-text-color` | The light text `color` is used in the schedule. Default value is `#fff` |
| `--blokks-dimmed-text-color` | Dimmed text `color` is used for metadata and when activities ended. Default value is `#989da8` |

| Other colors | Description |
|--------------|-------------|
| `--blokks-stroke-color` | The color that is used for button borders. Default value is `#989da8` |
| `--blokks-default-icon-color` | Default `fill` color used for [icons](http://icons). Default value is `#33363b` |
| `--blokks-light-icon-color` | Light `fill` color used for [icons](http://icons) on darker backgrounds. Default value is `#abb1bc` |

<span class='note'>You should note that *CSS variables* are case sensitive, so `--blokks-theme-color` and `--Blokks-Theme-Color` are different.</span>