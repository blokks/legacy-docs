+++
date            = "2017-09-25T11:31:19+02:00"
author          = "@patrickpietens"

title           = "Data attributes"
description     = "The schedule is split into smaller, independent pieces called components."
keywords        = ["blokks", "templates", "themes", "structure", "layout"]
weight          = 506

[menu.main]
parent          = "create-templates"

[[related]]
title = "Blokks styling"
url = "blokks-styling.md"

[[related]]
title = "Pseudo elements"
url = "pseudo-elements.md"

[[related]]
title = "Sitepoint: How to Use HTML5 Data Attributes"
url = "https://www.sitepoint.com/use-html5-data-attributes"

+++

Sometimes modifiers are insufficient to reflect the state of its component. In those case Blokks uses data-attributes instead. For example, [*Location*]({{< relref "basic-structure.md#location" >}}) and [*Activity*]({{< relref "basic-structure.md#activity" >}}) components add their categories as a data-attribute.

Because data-attributes are plain HTML attributes, you can use the attribute selectors in CSS to change styles according to its value:

```css
/* Targets all activities that span 1 hour */
.blokks-activity[data-duration="3600"] {
}

/* Targets delayed activities */
.blokks-activity[data-delay] {
}

/* Targets activities containing “keynote” category */
.blokks-activity[data-category*=‘keynote’] {
}
```

You can use the following `data-attributes` to style you *Location* components:

| Data attribute  | Values |
|-----------------|--------|
| `data-slug` | `columns` `rows` `custom` |
| `data-categories` | `columns` `rows` `custom` |
| `data-delay` | `columns` `rows` `custom` |

And the ones for *Activities* are:

| Data attribute | Values |
|----------------|--------|
| `data-slug` | `columns` `rows` `custom` |
| `data-categories` | `columns` `rows` `custom` |
| `data-delay` | `columns` `rows` `custom` |
| `data-duration` | `columns` `rows` `custom` |
| `data-starts-at` | `columns` `rows` `custom` |