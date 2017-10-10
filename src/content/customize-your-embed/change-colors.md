+++
date            = "2017-09-12T11:31:19+02:00"
author          = "@patrickpietens"

title           = "Change colors"
extendedtitle	= "Change your schedule colors"
description     = "Change any color used in your embed."
keywords        = ["blokks", "design", "embed", "template", "layout", "colors", "fonts", "icons"]
weight          = 404

[menu.main]
parent          = "customize-your-embed"

[[related]]
title = "Customize your embed: Using CSS classes"
url = "using-css-classes.md"

[[related]]
title = "Known issues: CSS variables"
url = "known-issues.md#customproperties"
+++

You can change any color used in the embed. The preferred and easiest way to apply your own styling is to use *CSS custom properties*, or *CSS variables*. CSS variables are [supported by all modern browsers](http://configure/browsersupport).

The syntax for CSS variables is pretty straightforward:

```css
:root {
  --blokks-theme-color: rebeccapurple;
}
```

In the above example `--blokks-theme-color` is a Blokks defined property with a value of `rebeccapurple`. Adding the above code to your page will change the main color of the embed to `rebeccapurple`.

<span class='note'>Note: all CSS variables are prefixed with **\-\-blokks**. Also, CSS variables are case sensitive, so `--blokks-theme-color` and `--Blokks-Theme-Color` are different.</span>

To get a list of all properties, right click anywhere on your page, open the *Developer tools* by clicking *Inspect* and select the `<html>` tag:

{{< video src="videos/customize-your-embed-all-css-variables.mp4" width="1794" height="1168" title="Showing all properties using the Inspector" >}}

A complete list of colors that you can change with CSS variables:

| Background color | Description |
|------------------|-------------|
| `--blokks-theme-color` | The theme color is used for favorites, hovers, highlighted text and titles. The default value is `#2e8cd2`. |
| `--blokks-default-background-color` | The `background-color` used by the embed. The default value is `#fff`. |
| `--blokks-dashboard-background-color` | The `background-color` used for the *Dashboard*. The default value is `#33363b`. |
| `--blokks-time-indicator-background-color` | The `background-color` used for the *Time Indicator*. The default value is `#33363b`. |
| `--blokks-modal-background-color` | The `background-color` used for modals like the *Activity Details*. The default value is `#fff`. |
| `--blokks-image-background-color` | The `background-color` used when a *Poster Image* is not yet loaded. The default value is `#33363b`. |
| `--blokks-dimmed-background-color` | The `background-color` used when an activity does not match the category selected with the *Category Filter*. The default value is `#abb1bc`. |

| Text color | Description |
|------------|-------------|
| `--blokks-default-text-color` | The default text `color`. The default value is `#33363b`. |
| `--blokks-light-text-color` | The light text `color` is used in the schedule. The default value is `#fff`. |
| `--blokks-dimmed-text-color` | Dimmed text `color` is used for metadata and when activities have ended. The default value is `#989da8`. |

| Misc color | Description |
|------------|-------------|
| `--blokks-stroke-color` | The color that is used for button borders. The default value is `#989da8`. |
| `--blokks-default-icon-color` | Default `fill` color used for [icons]({{< relref "replace-icons.md" >}}). The default value is `#33363b`. |
| `--blokks-light-icon-color` | Light `fill` color used for [icons]({{< relref "replace-icons.md" >}}) on darker backgrounds. The default value is `#abb1bc`. |