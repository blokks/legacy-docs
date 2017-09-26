+++
date            = "2017-09-19T11:31:19+02:00"
author          = "@patrickpietens"

title           = "Measure activities"
description     = ""
keywords        = ["blokks", "configure", "schedule", "embed", "measure", "size"]
weight          = 611

[menu.main]
parent          = "configure-your-schedule"
+++

Blokks adds [CSS modifiers](http://themes/modifiers#size-modifiers) indicating the size of an [*Activity*]({{< relref "basic-structure.md#activity" >}}). Unfortunately, this isn’t done by magic. Matter of fact, computing the size of an element is a pretty intensive task for the browser. Although this option is enabled by default, we recommend to set it to `false` whenever possible.

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