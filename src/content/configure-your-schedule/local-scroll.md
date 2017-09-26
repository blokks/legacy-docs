+++
date            = "2017-09-19T11:31:19+02:00"
author          = "@patrickpietens"

title           = "Local scroll"
description     = ""
keywords        = ["blokks", "configure", "schedule", "local", "scroll"]
weight          = 614

[menu.main]
parent          = "configure-your-schedule"
+++

By default Blokks uses page scrolling if it doesn’t fit your screen. In most cases this is desired. But, can be annoying from time to time. For example when it's embedded on a one-page website. By setting `data-local-scroll` to `true` scrolling is done within the embed.

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