+++
date            = "2017-09-19T11:31:19+02:00"
author          = "@patrickpietens"

title           = "Print"
description     = ""
keywords        = ["blokks", "configure", "schedule", "print", "landscape", "portrait"]
weight          = 609

[menu.main]
parent          = "configure-your-schedule"
+++

Some of your visitors are oldschool and prefer a printed version over 


	- Orientation
	- disable print
	- preventDefaultPrint

| Option | Values | Default value |
|--------|--------|---------------|
| `data-hide-print` | `true` `false` | `false` |
| `data-print-orientation` | `landscape` `portrait` | `portrait` |
| `data-prevent-default-print` | `true` `false` | `false` |

### Example

```html
<script	defer src='[path-to-embed]'
  data-blokks-id='[schedule-id]'
  data-hide-print='false'
  data-print-orientation='landscape'
  data-prevent-default-print='linkedin'>
</script>
```