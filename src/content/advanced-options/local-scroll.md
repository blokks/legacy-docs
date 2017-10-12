+++
date            = "2017-09-19T11:31:19+02:00"
author          = "@patrickpietens"

title           = "Local scroll"
description     = ""
keywords        = ["blokks", "configure", "schedule", "local", "scroll"]
weight          = 614

[menu.main]
parent          = "advanced-options"
+++

By default, Blokks uses page scrolling if it doesn’t fit your screen. In most cases this is the best method. But, there are cases where you might want to have visitors scroll within the embed. To do so, set `data-local-scroll` to `true`.

<span class='note'>Please note that by specification, sticky headers will not work inside elements with `overflow: scroll` or `auto`. Which is the case when `data-local-scroll` is enabled. So setting `data-local-scroll` to `true` will disable sticky headers automatically.</span>

| Option | Values | Default values |
|--------|--------|----------------|
| `data-local-scroll` | `true` `false` | `false` |

### Example

```html
<script	defer src='[path-to-embed]'
  data-blokks-id='[schedule-id]'
  data-local-scroll=‘true’>
</script>
```