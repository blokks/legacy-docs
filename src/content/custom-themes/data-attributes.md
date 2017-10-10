+++
date            = "2017-09-25T11:31:19+02:00"
author          = "@patrickpietens"

title           = "Data attributes"
description     = "The schedule is split into smaller, independent pieces called components."
keywords        = ["blokks", "themes", "structure", "layout"]
weight          = 506

[menu.main]
parent          = "custom-themes"

[[related]]
title = "Custom themes: Blokks styling"
url = "blokks-styling.md"

[[related]]
title = "Custom themes: Pseudo elements"
url = "pseudo-elements.md"

[[related]]
title = "Sitepoint: How to Use HTML5 Data Attributes"
url = "https://www.sitepoint.com/use-html5-data-attributes"
+++

Sometimes modifiers are insufficient to reflect the state of its component. In those case Blokks uses *data-attributes* instead. For example, *Locations* and *Activities* add their categories as a *data-attributes*.

Because *data-attributes* are plain HTML attributes, you can use the attribute selectors in CSS to change styles:

```css
/* Targets all activities that span 1 hour */
.blokks-activity[data-duration="3600"] {
}

/* Targets delayed activities */
.blokks-activity[data-delay] {
}

/* Targets activities containing “keynote” category */
.blokks-activity[data-category*="keynote"] {
}

/* Targets activities containing one or more categories */
.blokks-activity[data-category*=" "] {
}
```

### Location attributes
You can use the following *data-attributes* to style your *Location* components:

| Data attribute  | Description |
|-----------------|--------|
| `data-slug` | Unique string identifying the *Location*. Use this attribute to target a single *Location*. |
| `data-categories` | List of *Location* categories separated by spaces. Use this attribute to style *Locations* belonging to one or more categories. |
| `data-delay` | Number representing the delay in milliseconds. Use this attribute to target delayed *Locations*.  |

### Activity attributes
The *data-attributes* you can use to style your *Activities* are:

| Data attribute | Values |
|----------------|--------|
| `data-slug` | Unique string identifying the *Activity*. Use this attribute to target a single *Activity*. |
| `data-categories` | List of *Activity* categories separated by spaces. Use this attribute to style *Activities* belonging to one or more categories. |
| `data-delay` | Number representing the delay in milliseconds. Use this attribute to style delayed *Activities*. |
| `data-duration` | Number representing the duration of the *Activity* in milliseconds. |
| `data-starts-at` | Timestamp representing the start time of the *Activity*. |