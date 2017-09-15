+++
date            = "2017-09-15T11:31:19+02:00"
author          = "@patrickpietens"

title           = "Known issues"
description     = "We test Blokks in all supported browsers, and we'll fix bugs that affect those."
keywords        = ["blokks", "support", "browsers", "Chrome", "Edge", "Internet Explorer", "IE", "Firefox", "Safari", "Issues"]
weight          = 702

[menu.main]
parent          = "supported-browsers"

[[related]]
title = "Local scrolling"
url = "http://configure/local-scroll"

[[related]]
title = "Using polyfills"
url = "using-polyfills.md"

[[related]]
title = "Caniuse: CSS Flexible Box Layout Module"
url = "http://caniuse.com/#feat=flexbox"

[[related]]
title = "Caniuse: CSS position: sticky"
url = "http://caniuse.com/#search=sticky"

[[related]]
title = "Caniuse: Promises"
url = "http://caniuse.com/#search=promises"

[[related]]
title = "Caniuse: matchMedia"
url = "http://caniuse.com/#search=matchmedia"
+++

## Flexbox
*CSS Flexbox* is a layout mode which offers an alternative to, for example `floats`. It provides a more efficient way to lay out, align and distribute items in a container. Blokks uses *Flexbox* to define the overall appearance of the embedded timetable. 

*Flexbox* is supported by all modern browsers. Only older Android Browsers and Internet Explorer 8-9 lack support. We recommend those people to update their browser as soon as possible.

<span class='note'>Supported by: *Chrome 49+* *Edge 12+* *Internet Explorer 10+* *Firefox 31+* *Safari 6.1+*</span>

---

## Sticky headers
`Position: sticky` is a CSS property which allow elements to stick to the viewport edge as you scroll past them.

Blokks implements [*sticky headers*](https://developer.mozilla.org/en-US/docs/Web/CSS/position#Sticky_positioning) as a progressive enhancement. Meaning that if your browser doesn’t support *sticky headers*, they simply won’t stick. No polyfill or fallback is required.

<span class='note'>Please note that there are limitations to sticky headers. For example, they will not work inside elements with `overflow: scroll` or `auto`. Therefor, headers will not stick if [*data-local-scroll*](http://configure/local-scroll) is enabled.</span>

<span class='note'>Supported by: *Chrome 58+* *Edge 16+* *Firefox32+* *Safari 7+*</span>

---

## CSS Variables
Blokks is highly customizable through *CSS Variables*. It doesn’t require *Less*, *Sass*, or any preprocessing at all. With *CSS variables* it’s quite easy to, for example, [change colors]({{< relref "change-colors.md" >}}) and [add own fonts]({{< relref "add-own-fonts.md" >}}).

*CSS Variables* are supported by all major browsers, including Microsoft Edge. However, Internet Explorer has no support. Have a look at [Using CSS classes]({{< relref "using-css-classes.md" >}}) if you need older browsers support.

<span class='note'>Supported by: *Chrome 49+* *Edge 15+* *Firefox 31+* *Safari 9.1+*</span>

---

## Promises
Blokks uses [*Promises*](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises) extensively to handle so called async operations. What they are and what they do is beyond the scope of this page. What you should know is that they aren’t supported by Internet Explorer. Luckily, adding the [Promise polyfill]({{< relref "using-polyfills.md#promises" >}}) will fix this 🤘.

If you want to know more about *Promises*, [this article](https://developers.google.com/web/fundamentals/getting-started/primers/promises) will bring you up to speed.

<span class='note'>Supported by: *Chrome 33+* *Edge 12+* *Firefox 29+* *Safari 7.1+*</span>

---

## MatchMedia
[*MatchMedia*](https://developer.mozilla.org/nl/docs/Web/API/Window/matchMedia) is an API for finding out whether or not a media query applies to the document. Blokks uses *MatchMedia* to change layout when switching between mobile and desktop. 

There is a [polyfill available]({{< relref "using-polyfills.md#matchmedia" >}}) if you need to support Internet Explorer 9 and lower.

<span class='note'>Supported by: *Chrome 9+* *Edge 12+* *IE10+* *Firefox 6+* *Safari 5.1+*</span>