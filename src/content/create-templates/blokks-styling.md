+++
date            = "2017-09-15T11:31:19+02:00"
author          = "@patrickpietens"

title           = "Block styling"
description     = "Blokks adds modifiers indicating the state of its component. You can use these modifiers to style your embed."
keywords        = ["blokks", "templates", "themes", "structure", "naming conventions", "bem", "conflicts"]
weight          = 505

[menu.main]
parent          = "create-templates"

[[related]]
title = "Structure"
url = "basic-structure.md"

[[related]]
title = "Responsive option"
url = "http://configure/responsive"

[[related]]
title = "Block, element, modifier"
url = "bem.md"

[[related]]
title = "Github: Template CSS"
url = "http://github.com/patrickpietens/blokks-template"

[[related]]
title = "Sitepoint: How to Use HTML5 Data Attributes"
url = "https://www.sitepoint.com/use-html5-data-attributes"

[[related]]
title = "On layout & web performance"
url = "http://kellegous.com/j/2013/01/26/layout-performance"
+++

Now that we understand [the structure]({{< relref "basic-structure.md" >}}) of the embed and are familiar with [the naming convention]({{< relref "bem.md" >}}) used by Blokks, it’s time to bring everything together:

## Blokks modifiers
Blokks adds modifiers indicating the state of its component. For example, modifiers are added when an [Activity]({{< relref "basic-structure.md#activity" >}}) is favorited, delayed or when it's a headliner. You can use these modifiers to style your embed. 

<span class='note'>Download the [CSS template]({{< relref "blokks-styling.md#css-template" >}}) to get a full list of modifiers used by Blokks.</span>

## Size modifiers
By default Blokks automatically calculates the size of an [Activity]({{< relref "basic-structure.md#activity" >}}) and adds class names indicating its measured size. Class names like `activity--small-size` (120px and smaller), `activity--smaller-size` (50px or smaller) and `activity--smallest-size` (35px or smaller) are added when the component becomes too small to display all its information. 

Computing element sizes forces the browser to reflow. This is also known as layout trashing and can cause performance problems when you add a lot of activities. If this is the case, we recommend disabling auto measuring by setting the [`data-auto-measure-size`](http://configure/measuring-size) to `false`.

<span class='note'>As an alternative, you can use the `data-duration` property to determine the size of an activity.</span>

## Data-attributes
Sometimes modifiers are insufficient to reflect the state of its component. In those cases Blokks uses data-attributes instead. For example, [Location]({{< relref "basic-structure.md#location" >}}) and [Activity]({{< relref "basic-structure.md#activity" >}}) components add their categories as a data-attribute.

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

You can use the following `data-attributes` to style *Location* components:

| Data attribute  | Values |
|-----------------|--------|
| `data-slug` | `columns` `rows` `custom` |
| `data-categories` | `columns` `rows` `custom` |
| `data-delay` | `columns` `rows` `custom` |

The `data-attributes` for *Activities* are:

| Data attribute | Values |
|----------------|--------|
| `data-slug` | `columns` `rows` `custom` |
| `data-categories` | `columns` `rows` `custom` |
| `data-delay` | `columns` `rows` `custom` |
| `data-duration` | `columns` `rows` `custom` |
| `data-starts-at` | `columns` `rows` `custom` |

## CSS Template
We've created a [CSS template](http://github.com/patrickpietens/blokks-template) containing separate files for all components with their elements and modifiers. The files don’t contain styling, but are simply a starting point to add your own styles. All components and modifiers are well documented with inline comments. You can use [SASS](http://sass-lang.com/) or [PostCSS](http://postcss.org/) to compile them.

[<button>Download the template <svg><use href="images/sprite.svg#arrow-next"></use></svg></button>](http://github.com/patrickpietens/blokks-template)