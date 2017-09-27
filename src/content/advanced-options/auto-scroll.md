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
title = "Testflight"
url = "testflight.md"

[[related]]
title = "Hide time indicator"
url = "hide-components.md"
+++

When enabled, the [time indicator]({{< relref "basic-structure.md#time-indicator" >}}) is automatically scrolled into view, showing speakers and bands that are currently playing. This option works on desktop and only during days of the event.

<span class='note'>Sometimes this feature can be cumbersome though. For example, when your schedule is embedded on a one-page website and you don't want the whole page to scroll. In those cases you want to disable the `data-auto-scroll` feature.</span>

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