+++
date            = "2017-09-19T11:31:19+02:00"
author          = "@patrickpietens"

title           = "Time format"
description     = ""
keywords        = ["blokks", "configure", "schedule", "embed", "date", "time", "format"]
weight          = 607

[menu.main]
parent          = "advanced-options"

[[related]]
title = "Date format"
url = "date-format.md"
+++

Like [`data-date-format`]({{< relref "date-format.md" >}}) you can change how times are displayed.:

| Hours |   |
|-------|---|
| *H* | 0 1 ... 22 23 |
| *HH* | 00 01 ... 22 23 |
| *h* | 1 2 ... 11 12 |
| *hh* | 01 02 ... 11 12 |
| *k* | 1 2 ... 23 24 |
| *kk* | 01 02 ... 23 24 |

| Minutes |   |
|---------|---|
| *m* | 0 1 ... 58 59 |
| *mm* | 00 01 ... 58 59 |

| Seconds |   |
|---------|---|
| *s* | 0 1 ... 58 59 |
| *ss* | 00 01 ... 58 59 |

| Extra |   |
|-------|---|
| *A* | AM PM |
| *a* | am pm |

### Example

```html
<script	defer src='[path-to-embed]'
  data-blokks-id='[schedule-id]'
  data-date-time='H:m a'>
</script>
```
