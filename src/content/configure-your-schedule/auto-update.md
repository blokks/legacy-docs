+++
date            = "2017-09-19T11:31:19+02:00"
author          = "@patrickpietens"

title           = "Auto update"
description     = ""
keywords        = ["blokks", "configure", "schedule", "embed", "update"]
weight          = 614

[menu.main]
parent          = "configure-your-schedule"
+++

If `data-auto-update` is enabled, the schedule updates after the user returns to your page and every 5 minutes of inactivity. When signed in, [favorites]({{< relref "favorites.md" >}}) are updated as well. This makes sure that your schedule and favorites are always in sync, whether it’s shown on desktop, mobile or on a big screen.

| Option | Values | Default value |
|--------|--------|---------------|
| `data-auto-update` | `true` `false` | `true`|

### Example

```html
<script	defer src='[path-to-embed]'
  data-auto-update='false'>
</script>
```
