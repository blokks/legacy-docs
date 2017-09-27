+++
date            = "2017-09-19T11:31:19+02:00"
author          = "@patrickpietens"

title           = "Date selector"
description     = ""
keywords        = ["blokks", "configure", "schedule", "embed", "date", "trashing"]
weight          = 606

[menu.main]
parent          = "advanced-options"

[[related]]
title = "Basic structure: Date selector"
url = "basic-structure.md#date-selector"
+++

By default the [Date selector]({{< relref "basic-structure.md#date-selector" >}}) is displayed as a *buttonbar* on desktop computers and switches to a *dropdown* menu on mobile devices. Set the `data-date-selector` option to override this default behavior.

| Option | Values | Default value |
|--------|--------|---------------|
| `data-date-selector` | `auto` `buttons` `dropdown` | `auto` |

### Example

```html
<script	defer src='[path-to-embed]'
  data-blokks-id='[schedule-id]'
  data-date-selector='dropdown'>
</script>
```