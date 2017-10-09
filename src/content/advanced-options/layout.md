+++
date            = "2017-09-19T11:31:19+02:00"
author          = "@patrickpietens"

title           = "Layout"
description     = ""
keywords        = ["blokks", "configure", "schedule", "layout", "columns", "rows", "custom"]
weight          = 603

[menu.main]
parent          = "advanced-options"

[[related]]
title = "Design your schedule: Choose your layout"
url = "choose-your-layout.md"

[[related]]
title = "Known issues: Flexbox"
url = "known-issues.md#flexbox"

[[related]]
title = "MDN: Using media queries"
url = "https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries"
+++

We have mentioned [layouts]({{< relref "choose-your-layout.md" >}}) before: Blokks supports `columns`, `rows` and `custom` layouts.

Each layout has different styles that are injected to the `<head>` of your document. The styling is minimal and won’t [conflict with your website]({{< relref "bem.md" >}}). Also, styles are added after the schedule is loaded, so it doesn’t effect your initial pageload.

Using a `custom` layout is useful when you want to [create your own theme]({{< relref "create-layout.md" >}}). Setting the `data-layout` to `custom` will strip all layout properties from the schedule, giving you a clean slate. 


<span class='note'>Note: Blokks automatically switches to a mobile layout when viewed on smaller devices. The breakpoint is `30em` or `480px`. You can change this value by setting `data-breakpoint`.</span>

| Option | Values | Default value |
|--------|--------|---------------|
| `data-breakpoint` | *string* | `30em` |
| `data-layout` | `columns` `rows` `custom` | `columns` |

### Example

```html
<script	defer src='[path-to-embed]'
  data-blokks-id='[schedule-id]'
  data-breakpoint='20em'
  data-layout='columns'>
</script>
```
