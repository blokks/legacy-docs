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
.blokks-activity[data-category*="keynote"] {
}

/* Targets activities containing one or more categories */
.blokks-activity[data-category*=" "] {
}
```

### Location attributes
You can use the following `data-attributes` to style you [*Location*]({{< relref "basic-structure.md#location" >}}) components:

| Data attribute  | Description |
|-----------------|--------|
| `data-slug` | Unique string identifying the [*Location*]({{< relref "basic-structure.md#location" >}}). Use this attribute to target a single [*Location*]({{< relref "basic-structure.md#location" >}}). |
| `data-categories` | List of [*Location*]({{< relref "basic-structure.md#location" >}}) categories separated by spaces. Use this attribute to style [*Locations*]({{< relref "basic-structure.md#location" >}}) belonging to one or more categories. |
| `data-delay` | Number representing the delay in milliseconds. Use this attribute to target delayed [*Locations*]({{< relref "basic-structure.md#location" >}}).  |

### Activity attributes
And the ones for [*Activities*]({{< relref "basic-structure.md#activity" >}}) are:

| Data attribute | Values |
|----------------|--------|
| `data-slug` | Unique string identifying the [*Activity*]({{< relref "basic-structure.md#activity" >}}). Use this attribute to target a single [*Activity*]({{< relref "basic-structure.md#activity" >}}). |
| `data-categories` | List of [*Activity*]({{< relref "basic-structure.md#activity" >}}) categories separated by spaces. Use this attribute to style [*Activities*]({{< relref "basic-structure.md#activity" >}}) belonging to one or more categories. |
| `data-delay` | Number representing the delay in milliseconds. Use this attribute to style delayed [*Activities*]({{< relref "basic-structure.md#activity" >}}). |
| `data-duration` | Number representing the duration of the [*Activity*]({{< relref "basic-structure.md#activity" >}}) in milliseconds |
| `data-starts-at` | Timestamp representing the start time of the [*Activity*]({{< relref "basic-structure.md#activity" >}}) |