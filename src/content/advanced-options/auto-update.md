+++
date            = "2017-09-19T11:31:19+02:00"
author          = "@patrickpietens"

title           = "Auto update"
description     = ""
keywords        = ["blokks", "configure", "schedule", "embed", "update"]
weight          = 614

[menu.main]
parent          = "advanced-options"
+++

When `data-auto-update` is enabled, the schedule automatically updates after every 5 minutes of inactivity and everytime a visitor returns to your page.

When your visitor is signed in, their [favorites]({{< relref "favorites.md" >}}) are updated as well. This makes sure that your schedule and favorites are always in sync, whether it’s shown on desktop or mobile.

| Option | Values | Default value |
|--------|--------|---------------|
| `data-auto-update` | `true` `false` | `true`|

### Example

```html
<script	defer src='[path-to-embed]'
  data-blokks-id='[schedule-id]'
  data-auto-update='false'>
</script>
```
