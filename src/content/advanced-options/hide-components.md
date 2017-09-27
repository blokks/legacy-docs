+++
date            = "2017-09-19T11:31:19+02:00"
author          = "@patrickpietens"

title           = "Hide components"
description     = ""
keywords        = ["blokks", "configure", "schedule", "hide", "elements", "components"]
weight          = 604

[menu.main]
parent          = "advanced-options"

[[related]]
title = "Custom themes: Basic structure"
url = "basic-structure.md"
+++

You can hide elements and disable features by setting one of the `data-hide-...` options. Although element can be hidden by setting the CSS `display: none` property, it’s better not to render them at all by using `data-hide-...` option.

| Option | Description |
|---------|--------------|
| `data-hide-controls` | Hides the *Controls* when set to `true` |
| `data-hide-dashboard` | Hides the *Dashboard* when set to `true` |
| `data-hide-export` | Hides the *Export to iCal* button when set to `true` |
| `data-hide-favorites` | Hides all favorite related features when set to `true` |
| `data-hide-filter` | Hides the *Category filter* when set to `true` |
| `data-hide-images` | Doesn't load and display images when set to `true` |
| `data-hide-print` | Hide the *print* button when set to `true`. Hiding the print button also disables keyboard shortcuts. |

### Example

```html
<script	defer src='[path-to-embed]'
  data-blokks-id='[schedule-id]'
  data-hide-controls='true'
  data-hide-dashboard='true'
  data-hide-export='true'
  data-hide-favorites='true'
  data-hide-filter='true'
  data-hide-images='true'
  data-hide-print='true'>
</script>
```
