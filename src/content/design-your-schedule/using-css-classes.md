+++
date            = "2017-09-13T11:31:19+02:00"
author          = "@patrickpietens"

title           = "Using CSS classes"
description     = ""
keywords        = ["blokks", "design", "embed", "template", "style", "class", "css"]
weight          = 409

[menu.main]
parent          = "design-your-schedule"
+++

*CSS variables* are great! However, Internet Explorer doesn’t support them. So we need a fallback if your visitors are using IE.

Another option to style your schedule, which is supported by all browsers, is using CSS classes. [Changing colors](http://design/colors), [updating sizes](http://design/sizes) and [replacing fonts](http://design/) with CSS classes can be a bit tedious compared to *CSS Variables*. But still, easy to achieve.

<span class='note'>Note: You don’t need to set *CSS variables*, if you use CSS classes as a fallback for IE. All browsers, legacy and modern ones, support classes.</span>

<span class='note'>On modern browsers, you can use *CSS variables* together with CSS classes. It’s impossible to have every property as *CSS variable*. See [*blokks-modifiers*](http://configure/blokks#modifiers) and [*data-attributes*](http://configure/blokks#data-atributes) for more styling options.</span>

<span class='note'>Microsoft Edge support *CSS variables* and is the default browser on Windows 10, Windows Mobile, and Xbox One consoles, replacing Internet Explorer.</span>

## Inspect elements
First, to style an element with classes we have to know its class name. The simplest way to do this is by selecting an element using the *Developer tools*. For example, *right + click* a stage title and select *Inspect* from the context menu. This will open the *Developer Tools* showing the HTML structure of the embed with the title highlighted:

![Image: Inspect elements](http://inspect.gif)

As you can see the selected title has a class named `.blokks-location__title`. We can use that to style all stage titles at once. Let’s change the `font-family`, `font-size` and `color` of the title:

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

## See also
- [Changing colors](http://design/changing-colors)
- [Replacing fonts](http://design/replacing-fonts)
- [Update row and column sizes](http://design/sizes)
- [Block-Element-Modifier](http://configure/bem)
- [Browser support](http://browser-support/custom-properties)
