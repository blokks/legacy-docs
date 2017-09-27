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

We mentioned [layouts]({{< relref "choose-your-layout.md" >}}) before: out of the box Blokks supports `columns`, `rows` and `custom` layouts. Depending on your choice, elements are styled using [CSS Flexbox]({{< relref "known-issues.md#flexbox" >}}).

These styles are injected to the `<head>` of your document. The styling is minimal and won’t [conflict with your website]({{< relref "bem.md" >}}). Also, it’s added after the schedule is loaded, so it doesn’t effect your initial pageload.

<span class='note'>Note: Blokks automatically switches to a mobile view when viewed on a smaller devices. The breakpoint is `30em` or `480px`. You can change this value by setting `data-breakpoint`.</span>

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
