+++
date            = "2017-09-19T11:31:19+02:00"
author          = "@patrickpietens"

title           = "Position activities"
description     = ""
keywords        = ["blokks", "configure", "schedule", "embed"]
weight          = 610

[menu.main]
parent          = "configure-your-schedule"

[[related]]
title = "Activity"
url = "basic-structure.md#activity"
+++

An [*Activity*]({{< relref "basic-structure.md#actvity" >}}) is automatically positioned using its start time and resized using its duration. However, sometimes you don’t want this. For example, in a single column layout positioning and resizing doesn’t make sense. In those cases disable `data-auto-layout` option.

| Option | Values | Default value |
|--------|--------|---------------|
| `data-auto-layout` | `true` `false` | `true` |

### Example

```html
<script	defer src='schedule.js'
  data-position-activities='false'>
</script>
```
