+++
date            = "2017-09-15T11:31:19+02:00"
author          = "@patrickpietens"

title           = "Known issues"
description     = "An overview of known browser issues."
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
*CSS Flexbox* is a layout mode that offers an alternative to traditional methods for positioning like `floats`. It provides a more efficient way to lay out, align and distribute items in a container. Blokks uses *Flexbox* to define the overall appearance of the embedded timetable. 

*Flexbox* is supported by all modern browsers. Only older Android browsers and Internet Explorer 8-9 lack support.

<span class='note'>Supported by: *Chrome 49+* *Edge 12+* *Internet Explorer 10+* *Firefox 31+* *Safari 6.1+*</span>

## Sticky headers
`Position: sticky` is a CSS property that allow elements to stick to the viewport edge as you scroll past them.

Blokks implements [sticky headers](https://developer.mozilla.org/en-US/docs/Web/CSS/position#Sticky_positioning) as a progressive enhancement. This means that if your browser does not support sticky headers, they simply won’t stick. No polyfill or fallback is required.

<span class='note'>Please note that there are limitations to sticky headers. For example, they will not work inside elements with `overflow: scroll` or `auto`. Therefore, headers will not stick if [data-local-scroll](http://configure/local-scroll) is enabled.</span>

<span class='note'>Supported by: *Chrome 58+* *Edge 16+* *Firefox32+* *Safari 7+*</span>

## CSS Variables
Blokks allows for easy customization through its use of *CSS Variables*. With these, it’s quite easy to, for example, [change colors]({{< relref "change-colors.md" >}}) and [add custom fonts]({{< relref "add-own-fonts.md" >}}).

*CSS Variables* are supported by all major browsers, including Microsoft Edge. However, Internet Explorer does not support them yet. A great solution for this is to use [CSS classes]({{< relref "using-css-classes.md" >}}).

<span class='note'>Supported by: *Chrome 49+* *Edge 15+* *Firefox 31+* *Safari 9.1+*</span>

## Promises
Blokks uses [Promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises) extensively to handle so called async operations. What they are and what they do is beyond the scope of this page. What you should know is that they aren’t supported by Internet Explorer. Luckily, adding the [Promise polyfill]({{< relref "using-polyfills.md#promises" >}}) will fix this.

If you want to know more about *Promises*, [this article](https://developers.google.com/web/fundamentals/getting-started/primers/promises) will bring you up to speed.

<span class='note'>Supported by: *Chrome 33+* *Edge 12+* *Firefox 29+* *Safari 7.1+*</span>

## MatchMedia
[MatchMedia](https://developer.mozilla.org/nl/docs/Web/API/Window/matchMedia) is an API for finding out whether or not a media query applies to the document. Blokks uses *MatchMedia* to change layout when switching between mobile and desktop. 

There is a [polyfill available]({{< relref "using-polyfills.md#matchmedia" >}}) if you need to support Internet Explorer 9 and lower.

<span class='note'>Supported by: *Chrome 9+* *Edge 12+* *IE10+* *Firefox 6+* *Safari 5.1+*</span>

## Modals
Support for `overflow: hidden;` on the `<body>` element is quite limited in *iOS* and *Android*. To that end, when you scroll past the top or bottom of a modal in either of those devices’ browsers, the `<body>` content will begin to scroll. See Chrome bug [#175502](https://bugs.chromium.org/p/chromium/issues/detail?id=175502) (fixed in Chrome v40) and WebKit bug [#153852](https://bugs.webkit.org/show_bug.cgi?id=153852).