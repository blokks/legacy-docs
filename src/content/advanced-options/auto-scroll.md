+++
date            = "2017-09-19T11:31:19+02:00"
author          = "@patrickpietens"

title           = "Auto scroll"
description     = ""
keywords        = ["blokks", "configure", "schedule", "embed", "scrolling"]
weight          = 613

[menu.main]
parent          = "advanced-options"

[[related]]
title = "Advanced options: Testflight"
url = "testflight.md"

[[related]]
title = "Advanced options: Hide components"
url = "hide-components.md"
+++

When enabled, the *Time indicator* is automatically scrolled into view when a visitor opens the schedule during the days of your event. This allows your visitors to quickly see which acts (speakers, talks or artists) are currently performing.

There are cases where you might want to disable this `data-auto-scroll` feature. For example, when your schedule is embedded on a one-page website and you don't want the whole page to scroll.

<span class='note'>Note: This feature is desktop only.</span>

| Option | Values | Default value |
|--------|--------|---------------|
| `data-auto-scroll` | `true` `false` | `true`|

### Example

```html
<script	defer src='[path-to-embed]'
  data-blokks-id='[schedule-id]'
  data-auto-scroll='false'>
</script>
```