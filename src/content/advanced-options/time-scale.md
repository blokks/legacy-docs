+++
date            = "2017-09-19T11:31:19+02:00"
author          = "@patrickpietens"

title           = "Time scale"
description     = ""
keywords        = ["blokks", "configure", "schedule", "time", "sclaing"]
weight          = 610

[menu.main]
parent          = "advanced-options"

[[related]]
title = "Customize your embed: Row & column sizes"
url = "update-rows-and-columns.md"
+++

The `data-time-scale` option sets the duration of a single table cell. You can use this with [CSS variables]({{< relref "update-rows-and-columns.md" >}}) to change the height and width of [Activities]({{< relref "basic-structure.md#activity" >}}). The `data-time-scale` is set in seconds, so a value of `3600` equals an hour. `1800` seconds equals half an hour, etc.

| Option | Values | Default value |
|--------|--------|---------------|
| `data-time-scale` | *integer* | `1800`|

### Example

```html
<script	defer src='[path-to-embed]'
  data-blokks-id='[schedule-id]'
  data-time-scale='900'>
</script>
```
