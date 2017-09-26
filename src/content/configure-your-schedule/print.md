+++
date            = "2017-09-19T11:31:19+02:00"
author          = "@patrickpietens"

title           = "Print"
description     = ""
keywords        = ["blokks", "configure", "schedule", "print", "landscape", "portrait"]
weight          = 609

[menu.main]
parent          = "configure-your-schedule"

[[related]]
title = 'Hide elements'
url = 'hide-elements.md'
+++

Some of your visitors are oldschool and prefer a printed version over 

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