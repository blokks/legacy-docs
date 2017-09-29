+++
date            = "2017-09-19T11:31:19+02:00"
author          = "@patrickpietens"

title           = "Accessibility"
description     = ""
keywords        = ["blokks", "configure", "schedule", "embed", "accessibility"]
weight          = 609

[menu.main]
parent          = "advanced-options"
+++

This enables keyboard navigation. Users can <kbd>TAB</kbd> through [Activities]({{< relref "basic-structure.md#activity" >}}) and hit <kbd>SPACE</kbd> or <kbd>ENTER</kbd> to select one. Pressing <kbd>L</kbd> will favorite the selected *Activity*. Hitting <kbd>CMD + P</kbd> or <kbd>CTRL + P</kbd> will [print your schedule.]({{< relref "print.md" >}})

| Option | Values | Default value |
|--------|--------|---------------|
| `data-accessibility` | `true` `false` | `true` |

### Example

```html
<script	defer src='[path-to-embed]'
  data-blokks-id='[schedule-id]'
  data-accessibility='false'>
</script>
```