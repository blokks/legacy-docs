+++
date            = "2017-09-19T11:31:19+02:00"
author          = "@patrickpietens"

title           = "Layout"
description     = ""
keywords        = ["blokks", "configure", "schedule", "layout", "columns", "rows", "custom"]
weight          = 602

[menu.main]
parent          = "configure-your-schedule"
+++

We talked [about layouts](http://themes/layout) before - out of the box Blokks supports `columns`, `rows` and `custom` layouts. 

<span class='note'>Some options, like `data-layout` injects an extra `<style>` to the `<head>` of your document. The styling is minimal and won’t conflict with your website or Blokks styles. It’s added after the schedule is loaded, so it doesn’t effect your initial pageload. You probably won’t even notice it’s there.</span>

| Option | Values | Default value |
|--------|--------|---------------|
| `data-layout` | `columns` `rows` `custom` | `columns`|

### Example

```html
<script	defer src='[path-to-embed]'
  data-blokks-id='[your-blokks-id]'
  data-layout='columns'>
</script>
```
