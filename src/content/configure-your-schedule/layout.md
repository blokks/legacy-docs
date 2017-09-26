+++
date            = "2017-09-19T11:31:19+02:00"
author          = "@patrickpietens"

title           = "Layout"
description     = ""
keywords        = ["blokks", "configure", "schedule", "layout", "columns", "rows", "custom"]
weight          = 603

[menu.main]
parent          = "configure-your-schedule"

[[related]]
title = "Choose your layout"
url = "choose-your-layout.md"

[[related]]
title = "Flexbox"
url = "known-issues.md#flexbox"
+++

We mentioned [layouts]({{< relref "choose-your-layout.md" >}}) before: out of the box Blokks supports `columns`, `rows` and `custom` layouts. Depending on your choice, elements are styled using [CSS Flexbox]({{< relref "known-issues.md#flexbox" >}}). 

These styles are injected to the `<head>` of your document. The styling is minimal and won’t [conflict with your website]({{< relref "bem.md" >}}). Also, it’s added after the schedule is loaded, so it doesn’t effect your initial pageload. 

You probably won’t even notice it’s there 👌

| Option | Values | Default value |
|--------|--------|---------------|
| `data-layout` | `columns` `rows` `custom` | `columns`|

### Example

```html
<script	defer src='[path-to-embed]'
  data-blokks-id='[schedule-id]'
  data-layout='columns'>
</script>
```
