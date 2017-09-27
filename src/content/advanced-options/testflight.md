+++
date            = "2017-09-19T11:31:19+02:00"
author          = "@patrickpietens"

title           = "Testflight"
description     = ""
keywords        = ["blokks", "configure", "schedule", "testflight", "debug"]
weight          = 615

[menu.main]
parent          = "advanced-options"

[[related]]
title = "Basic structure: Dashboard"
url = "basic-structure.md#dashboard"

[[related]]
title = "Basic structure: Time indicator"
url = "basic-structure.md#time-indicator"

[[related]]
title = "Advanced options: caching"
url = "caching.md"
+++

Some components, like the [Dashboard]({{< relref "basic-structure.md#dashboard" >}}) and [Time Indicator]({{< relref "basic-structure.md#time-indicator" >}}) are only visible during the day of your event. To make them visible set `data-testflight` to `true`. Setting `data-testflight` also disables caching.

<span class='note'>Important: Don’t forget to disable testflight on your production.</span>

| Option | Values | Default values |
|--------|--------|----------------|
| `data-testflight` | `true` `false` | `false` |

### Example

```html
<script	defer src='[path-to-embed]'
  data-blokks-id='[schedule-id]'
  data-testflight=‘true’>
</script>
```