+++
date            = "2017-09-19T11:31:19+02:00"
author          = "@patrickpietens"

title           = "Layout activities"
description     = ""
keywords        = ["blokks", "configure", "schedule", "embed"]
weight          = 611

[menu.main]
parent          = "configure-your-schedule"

[[related]]
title = "Activity"
url = "basic-structure.md#activity"
+++

An [Activity]({{< relref "basic-structure.md#actvity" >}}) is automatically positioned using its start time. And automatically resized using its duration. However, there are situations were this isn't desired. For example, in a single column layout positioning and resizing doesn’t make sense. In those cases disable `data-auto-layout`.

| Option | Values | Default value |
|--------|--------|---------------|
| `data-auto-layout` | `true` `false` | `true` |

### Example

```html
<script	defer src='schedule.js'
  data-blokks-id='[schedule-id]'
  data-layout-activities='false'>
</script>
```
