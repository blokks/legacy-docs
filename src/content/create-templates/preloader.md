+++
date            = "2017-09-15T11:31:19+02:00"
author          = "@patrickpietens"

title           = "Preloader"
description     = "Blokks loads your schedule as fast as possible. But during events with lots of attendees, the internet connection can be unreliable and slow. In those cases, you'll want to show a preloader to let your visitors know that loading the schedule may take longer than expected."
keywords        = ["blokks", "templates", "themes", "structure", "naming conventions", "bem"]
weight          = 502

[menu.main]
parent          = "create-templates"

[[related]]
title = "Cache"
url = "http://configure/cache"

[[related]]
title = "Offline support"
url = "http://configure/offline"
+++

Blokks loads your schedule as fast as possible. But during events with lots of attendees, the internet connection can be unreliable and slow. In those cases, you'll want to show a *preloader* to let your visitors know that loading the schedule may take longer than expected. 

To do this, simply add your preloader markup to the `<div id="blokks">` container. Here's an example:

```html
<div id='blokks'>
  <span>Loading…</span>
  <svg><use xlink:href="assets.svg#preloader"></use></svg>
</div>
```

<span class='note'>Note: The preloader isn’t part of the [structure of the embed]({{< relref "basic-structure.md" >}}), and is replaced by the embed when all data is loaded.</span>