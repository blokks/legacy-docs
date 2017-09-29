+++
date            = "2017-09-15T11:31:19+02:00"
author          = "@patrickpietens"

title           = "Animation"
description     = "The animation property can be used to animate any CSS property such as color, background-color, width, height, etc."
keywords        = ["blokks", "templates", "themes", "structure", "layout"]
weight          = 508

[menu.main]
parent          = "custom-themes"

[[related]]
title = "Basic structure: Activity details"
url = "basic-structure.md#activity-details"

[[related]]
title = "MDN: Using CSS animations"
url = "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Animations/Using_CSS_animations"

[[related]]
title = "Chrome Developers: Inspect animations"
url = "https://developers.google.com/web/tools/chrome-devtools/inspect-styles/animations"

[[related]]
title = "Chrome Developers: Easing editor"
url = "https://developers.google.com/web/updates/2015/05/the-easing-editor"
+++

The `animation` property can be used to animate any CSS property such as `color`, `background-color`, `width`, `height`, etc. Each animation needs to be defined with the `@keyframes` at-rule which is then called with the `animation` property, like so:

```css
.element {
  animation: present-element 300ms ease-out-back;
  transform: translate3d(0, 100px, 0);
}

@keyframes present-element {
  to {
    transform: none;
  }
}
```

## Animating modals & alerts
The *Activity Details* components and all alerts animate in when they appear. To replace the animation with another one, you only need to update the start value of the `transform` property. 

For example, here's how to make the modal bounce onto the screen:

```css
.element {
  transform: scale3d(0.9, 0.9, 1);
}
```
You can configure your `animation` by setting its sub-properties. This lets you tweak the timing, duration, and other details of how the animation sequence should progress. Find out [more about CSS animation](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Animations/Using_CSS_animations).

{{< video src="videos/animation-animating-modals.mp4" width="1628" height="1072" title="Animating modals & alerts" >}}

## Animating other elements
Modals and alerts are currently the only components that have animation. But this doesn’t mean that you are limited to just those components. Matter of fact, [Embassy of Dutch Creativity](https://blokks.co/schedules/embassy-of-dutch-creativity) spiced up their schedule with all kinds of animations. Feel free to add animation to your schedule!
