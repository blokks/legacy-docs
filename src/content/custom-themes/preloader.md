+++
date            = "2017-09-15T11:31:19+02:00"
author          = "@patrickpietens"

title           = "Preloader"
description     = "Blokks loads your schedule as fast as possible. But during events with lots of attendees, the internet connection can be unreliable and slow. In those cases, you'll want to show a preloader to let your visitors know that loading the schedule may take longer than expected."
keywords        = ["blokks", "templates", "themes", "structure", "naming conventions", "bem"]
weight          = 502

[menu.main]
parent          = "custom-themes"

[[related]]
title = "Advanced options: Caching"
url = "caching.md"
+++

Blokks loads your schedule as fast as possible. But during events with lots of attendees, the internet connection can be unreliable and slow. In those cases, you'll want to show a *Preloader* to let your users know that loading the schedule may take longer than expected. 

To do this, simply add your preloader markup to the `<div blokks-container>` container. Here's an example:

```html
<div blokks-container>
  <span>Loading…</span>
  <svg><use xlink:href="assets.svg#preloader"></use></svg>
</div>
```

<span class='note'>Note: The preloader isn’t part of the [structure of the embed]({{< relref "basic-structure.md" >}}), and is replaced by the actual embed when all data is loaded.</span>