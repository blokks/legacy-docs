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

Blokks adds [CSS modifiers](bem.md) to indicate the size of each *Activity*. This is useful for determining, for example, if the activity is large enough to show a subtitle. Or, if an activity title should be truncated if the activity is too small to show the full title. 

<span class='note'>Note: computing the size of an element is a pretty intensive task for a browser. Although this option is enabled by default, we recommend to set it to `false` whenever possible.</span>

| Options | Values | Default value |
|---------|--------|---------------|
| `data-auto-measure-size` | `true` `false` | `true` |

### Example

```html
<script	defer src='[path-to-embed]'
  data-blokks-id='[your-blokks-id]'
  data-measure-activities='false'>
</script>
```