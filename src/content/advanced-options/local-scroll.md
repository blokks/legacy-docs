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


By default, Blokks uses standard page scrolling. In other words, when a visitor scrolls through your schedule, the entire page scrolls. 

In most cases this is the best method. But, there are cases where you might want to have visitors scroll within the embed. To do so, set `data-local-scroll` to `true`.

<span class='note'>Note: Setting `data-local-scroll` to `true` will disable sticky headers. This is because sticky headers will not work inside elements with `overflow: scroll` or `auto`, which is the case when this feature is enabled.</span>

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