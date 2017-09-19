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
title = "Block, Element, Modifier"
url = "bem.md"

[[related]]
title = "Flexbox"
url = "known-issues.md#flexbox"
+++

We talked [about layouts]({{< relref "choose-your-layout.md" >}}) before - out of the box Blokks supports `columns`, `rows` and `custom` layouts. Blokks uses CSS [Flexbox]({{< relref "known-issues.md#flexbox" >}}) for its layouts. It injects an extra `<style>` to the `<head>` of your document. The styling is minimal and won’t [conflict with your website]({{< relref "bem.md" >}}). It’s added after the schedule is loaded, so it doesn’t effect your initial pageload. 

You probably won’t even notice it’s there 👌

| Option | Values | Default value |
|--------|--------|---------------|
| `data-layout` | `columns` `rows` `custom` | `columns`|

### Example

```html
<script	defer src='[path-to-embed]'
  data-layout='columns'>
</script>
```
