+++
date            = "2017-09-19T11:31:19+02:00"
author          = "@patrickpietens"

title           = "Measure size"
description     = ""
keywords        = ["blokks", "configure", "schedule", "embed", "measure", "size"]
weight          = 610

[menu.main]
parent          = "configure-your-schedule"
+++

Blokks adds [CSS modifiers](http://themes/modifiers#size-modifiers) indicating the size of an [Activity]({{< relref "basic-structure.md#activity" >}}). Unfortunately, this isn’t done by magic. Matter of fact, computing the size of an HTML element is pretty intensive. 

Although this option is enabled by default, we recommend to set it to `false` whenever you can.

| Options | Values | Default |
|---------|--------|---------|
| `data-auto-measure-size` | `true` `false` | `true` |

### Example

```html
<script	defer src='[path-to-embed]'
  data-blokks-id='[your-blokks-id]'
  data-auto-measure-size=‘false’>
</script>
```