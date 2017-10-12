+++
date            = "2017-09-19T11:31:19+02:00"
author          = "@patrickpietens"

title           = "Layout activities"
description     = ""
keywords        = ["blokks", "configure", "schedule", "embed"]
weight          = 611

[menu.main]
parent          = "advanced-options"

[[related]]
title = "Basic structure: Activity"
url = "basic-structure.md#activity"
+++

Each *Activity* is automatically positioned based on its start and end time. However, there are situations were this isn't needed. For example, for events that only have one stage, you might want each act to have the same size and be positioned directly underneath each other. 

To do this, disable `data-auto-layout`.

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
