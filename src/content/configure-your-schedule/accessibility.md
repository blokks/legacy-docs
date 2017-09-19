+++
date            = "2017-09-19T11:31:19+02:00"
author          = "@patrickpietens"

title           = "Accessibility"
description     = ""
keywords        = ["blokks", "configure", "schedule", "embed", "accessibility"]
weight          = 606

[menu.main]
parent          = "configure-your-schedule"
+++

Enables keyboard navigation. Users can press <kbd>left</kbd> and <kbd>right</kbd> to switch [*locations*]({{< relref "basic-structure.md#location" >}}), <kbd>tab</kbd> through the activities and hit <kbd>space</kbd> to select one. Pressing <kbd>L</kbd>  will favorite the selected activity. 

| Option | Values | Default value |
|--------|--------|---------------|
| `data-accessibility` | `true` `false` | `true` |

### Example

```html
<script	defer src='[path-to-embed]'
  data-blokks-id='[your-blokks-id]'
  data-accessibility='false'>
</script>
```
