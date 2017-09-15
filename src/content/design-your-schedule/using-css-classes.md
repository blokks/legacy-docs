+++
date            = "2017-09-13T11:31:19+02:00"
author          = "@patrickpietens"

title           = "Using CSS classes"
description     = "CSS variables are great! However, Internet Explorer does not support them yet. So we need a fallback if your visitors are using IE."
keywords        = ["blokks", "design", "embed", "template", "style", "class", "css"]
weight          = 409

[menu.main]
parent          = "design-your-schedule"

[[related]]
title = "Design your schedule: Changing colors"
url = "change-colors.md"

[[related]]
title = "Design your schedule: Replacing fonts"
url = "add-own-fonts.md"

[[related]]
title = "Design your schedule: Update row and column sizes"
url = "update-rows-and-columns.md"

[[related]]
title = "Create templates: Block-Element-Modifier"
url = "http://configure/bem"

[[related]]
title = "Browser support"
url = "http://browser-support/custom-properties"
+++

*CSS variables* are great! However, Internet Explorer does not support them yet. We need a fallback for when your visitors are using IE.

Another option to style your schedule, which is supported by all browsers, is using CSS classes. [Changing colors](http://design/colors), [updating sizes](http://design/sizes) and [replacing fonts](http://design/) with CSS classes can be a bit tedious compared to CSS Variables. But still, relatively easy to achieve.

<span class='note'>Note: You don’t need to set CSS variables if you use CSS classes as a fallback for IE. All browsers, legacy and modern ones, support classes.</span>

<span class='note'>On modern browsers, you can use CSS variables combined with CSS classes. It’s impossible to have every property as a CSS variable. See [*blokks-modifiers*](http://configure/blokks#modifiers) and [*data-attributes*](http://configure/blokks#data-atributes) for more styling options.</span>

<span class='note'>Microsoft Edge support CSS variables and is the default browser on Windows 10, Windows Mobile, and Xbox One consoles, replacing Internet Explorer.</span>

## Inspect elements
First, to style an element with classes we have to know its class name. The simplest way to do this is by selecting an element using the *Developer tools*. For example, right click a stage title and select *Inspect* from the context menu. This will open the Developer tools showing the HTML structure of the embed with the title highlighted:

![Image: Inspect elements](http://inspect.gif)

As you can see the selected title has a class named `.blokks-location__title`. We can use that to style all stage titles at once. Let’s change the font family, font size and color of the title:

```css
.blokks-location__title {
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 18px;
  color: rebeccapurple;
}
```

Looks great right? One thing you may have noticed is that only the selected stage titles are changed. Subtitles are still the same. Let’s update our example:

```css
.blokks-location__title,
.blokks-location__subtitle {
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 18px;
  color: rebeccapurple;
}
```

Boom! The same goes for styling other elements as well. Select the element you want to change, grab its class name and update its properties. Of course, you can change every available CSS property.