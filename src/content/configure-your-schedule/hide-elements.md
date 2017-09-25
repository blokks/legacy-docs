+++
date            = "2017-09-19T11:31:19+02:00"
author          = "@patrickpietens"

title           = "Hide elements"
description     = ""
keywords        = ["blokks", "configure", "schedule", "hide", "elements", "components"]
weight          = 604

[menu.main]
parent          = "configure-your-schedule"

[[related]]
title = "Favorites"
url = "favorites.md"

[[related]]
title = "Basic structure"
url = "basic-structure.md"
+++

You can hide elements and disable features by setting one of the `data-hide-...` options. Although element can be hidden by setting the CSS `display: none` property, it’s better not to render them at all by using `data-hide-...` option.

| Option | Description |
|---------|--------------|
| `data-hide-controls` | Hides the [Controls]({{< relref "basic-structure.md#controls" >}}) when set to `true` |
| `data-hide-dashboard` | Hides the [Dashboard]({{< relref "basic-structure.md#dashboard" >}}) when set to `true` |
| `data-hide-export` | Hides the Export to iCal button when set to `true` |
| `data-hide-favorites` | Hides all [favorite related features]({{< relref "favorites.md" >}}) when set to `true` |
| `data-hide-filter` | Hides the [Category filter]({{< relref "basic-structure.md#category-filter" >}}) when set to `true` |
| `data-hide-images` | Doesn't load and display images when set to `true` |
| `data-hide-print` | Hide the print button when set to `true` |

### Example

```html
<script	defer src='[path-to-embed]'
  data-blokks-id='[schedule-id]'
  data-hide-controls='true'
  data-hide-dashboard='true'
  data-hide-export='true'
  data-hide-favorites='true'
  data-hide-filter='true'
  data-hide-images='true'
  data-hide-print='true'>
</script>
```
