+++
date            = "2017-09-19T11:31:19+02:00"
author          = "@patrickpietens"

title           = "Auto scrolling"
description     = ""
keywords        = ["blokks", "configure", "schedule", "embed", "scrolling"]
weight          = 611

[menu.main]
parent          = "configure-your-schedule"
+++

When enabled, the [*time indicator*]({{< relref "basic-structure.md#time-indicator" >}}) is automatically scrolled into view, showing speakers and bands that are now playing. This option works on desktop and only during days of the event.

Sometimes this feature can be cumbersome though. For example, when your schedule is embedded on a one-page website. In that case you simply don’t want to auto scroll the page.

| Option | Values | Default value |
|--------|--------|---------------|
| `data-auto-scroll` | `true` `false` | `true`|

### Example

```html
<script	defer src='[path-to-embed]'
  data-blokks-id='[your-blokks-id]'
  data-auto-scroll='false'>
</script>
```