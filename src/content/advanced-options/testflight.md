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

Some components, like the *Dashboard* and *Time Indicator* are only visible during the days of your event. To enable these for testing purposes, set `data-testflight` to `true`. Setting `data-testflight` also disables caching.

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