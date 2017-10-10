+++
date            = "2017-09-15T11:31:19+02:00"
author          = "@patrickpietens"

title           = "Block styling"
description     = "Blokks adds modifiers indicating the state of its component. You can use these modifiers to style your embed."
keywords        = ["blokks", "themes", "structure", "naming conventions", "bem", "conflicts"]
weight          = 505

[menu.main]
parent          = "custom-themes"

[[related]]
title = "Advanced options: Measure activities"
url = "measure-activities.md"

[[related]]
title = "Custom themes: Structure"
url = "basic-structure.md"

[[related]]
title = "Custom themes: Block, element, modifier"
url = "bem.md"

[[related]]
title = "Github: Template CSS"
url = "http://github.com/patrickpietens/blokks-template"

[[related]]
title = "Kellegous.com: On layout & web performance"
url = "http://kellegous.com/j/2013/01/26/layout-performance"
+++

Now that we understand [the structure]({{< relref "basic-structure.md" >}}) of the embed and are familiar with [the naming convention]({{< relref "bem.md" >}}) used by Blokks, it’s time to bring everything together:

## Blokks modifiers
Blokks adds modifiers indicating the state of its component. For example, modifiers are added when an *Activity* is favorited, delayed or when it's a headliner. You can use these modifiers to style your embed.

<span class='note'>Note: Download the [CSS template]({{< relref "blokks-styling.md#css-template" >}}) to get a full list of modifiers used by Blokks.</span>

## Size modifiers
By default Blokks automatically calculates the size of an *Activity* and adds class names indicating its measured size. Class names like `activity--small-size` (`120px` and smaller), `activity--smaller-size` (`50px` or smaller) and `activity--smallest-size` (`35px` or smaller) are added when the component becomes too small to display all of its information.

Computing element sizes forces the browser to reflow. This is also known as layout trashing and can cause performance problems when you add a lot of activities. If this is the case, we recommend [disabling auto measuring](http://configure/measuring-size) by setting the `data-auto-measure-size` to `false`.

<span class='note'>Note: As an alternative, you can use the `data-duration` property to determine the size of an *Activity*.</span>

## CSS Template
We've created a [CSS template](http://github.com/patrickpietens/blokks-template) containing separate files for all components with their elements and modifiers. The files don’t contain styling, but it's simply a starting point enabling you to add your own styles. All components and modifiers are well documented with inline comments. You can use [SASS](http://sass-lang.com/) or [PostCSS](http://postcss.org/) to compile them.

<button>[Download the template <svg><use href="images/sprite.svg#arrow-next"></use></svg>](http://github.com/patrickpietens/blokks-template)</button>