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

Visitors are also able to navigate and view your schedule using their keyboard. They can <kbd>TAB</kbd> through [activities]({{< relref "basic-structure.md#activity" >}}) and hit <kbd>SPACE</kbd> or <kbd>ENTER</kbd> to select one. Pressing <kbd>L</kbd> will favorite the selected activity. Hitting <kbd>CMD + P</kbd> or <kbd>CTRL + P</kbd> will [print your schedule]({{< relref "print.md" >}}). This feature is turned on by default and can be turned off by setting `data-accessibility`.

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
