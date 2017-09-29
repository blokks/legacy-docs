+++
date            = "2017-09-19T11:31:19+02:00"
author          = "@patrickpietens"

title           = "Measure activities"
description     = ""
keywords        = ["blokks", "configure", "schedule", "embed", "measure", "size"]
weight          = 612

[menu.main]
parent          = "advanced-options"

[[related]]
title = "Basic structure: Activity"
url = "basic-structure.md#activity"
+++

Blokks adds [CSS modifiers](bem.md) indicating the size of an *Activity*. Unfortunately, this isn’t done by magic. Matter of fact, computing the size of an element is a pretty intensive task for the browser. Although this option is enabled by default, we recommend to set it to `false` whenever possible.

| Options | Values | Default value |
|---------|--------|---------------|
| `data-auto-measure-size` | `true` `false` | `true` |

### Example

```html
<script	defer src='[path-to-embed]'
  data-blokks-id='[your-blokks-id]'
  data-measure-activities=‘false’>
</script>
```