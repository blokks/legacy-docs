+++
date            = "2017-09-19T11:31:19+02:00"
author          = "@patrickpietens"

title           = "Print"
description     = ""
keywords        = ["blokks", "configure", "schedule", "print", "landscape", "portrait"]
weight          = 609

[menu.main]
parent          = "advanced-options"

[[related]]
title = 'Embed your schedule: Print schedule'
url = 'print-schedule.md'

[[related]]
title = 'Advanced options: Hide elements'
url = 'hide-components.md'
+++

Some visitors might want to print out the schedule. For this purpose, Blokks has a special print theme. This theme has a default layout, which can't be customized. You can however, set the print orientation to `landscape` or `portrait` mode:

| Option | Values | Default value |
|--------|--------|---------------|
| `data-print-orientation` | `landscape` `portrait` | `portrait` |
| `data-capture-print` | `true` `false` | `false` |

### Example

```html
<script	defer src='[path-to-embed]'
  data-blokks-id='[schedule-id]'
  data-print-orientation='landscape'
  data-capture-print='false'>
</script>
```