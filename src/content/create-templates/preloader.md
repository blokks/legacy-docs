+++
date            = "2017-09-15T11:31:19+02:00"
author          = "@patrickpietens"

title           = "Preloader"
description     = "One of our main priorities is to load your schedule as fast as possible on desktop computers and mobile devices. But it can happen, that during an event the internet connection is unreliable and slow."
keywords        = ["blokks", "templates", "themes", "structure", "naming conventions", "bem"]
weight          = 502

[menu.main]
parent          = "create-templates"

[[related]]
title = "Embedding your schedule"
url = "embed-code.md"

[[related]]
title = "Cache"
url = "http://configure/cache"

[[related]]
title = "Offline support"
url = "http://configure/offline"
+++

One of our main priorities is to load your schedule as fast as possible on desktop computers and mobile devices. But it can happen, that during an event the internet connection is unreliable and slow. We’ve all been there. In those cases, you want to show a *preloader* to let your users know that it may take longer than expected. 

This is really simple. Just add your *preloader* markup to the `<div id="blokks">` container. For example: 

```html
<div id='blokks'>
  <span>Loading…</span>
  <svg><use xlink:href="assets.svg#preloader"></use></svg>
</div>
```

<span class='note'>Please note that the *preloader* isn’t part of the [structure of the embed]({{< relref "basic-structure.md" >}}), and is replaced by the embed when all data is loaded.</span>