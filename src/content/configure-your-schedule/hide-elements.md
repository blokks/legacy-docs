+++
date            = "2017-09-19T11:31:19+02:00"
author          = "@patrickpietens"

title           = "Hide elements"
description     = ""
keywords        = ["blokks", "configure", "schedule", "hide", "elements", "components"]
weight          = 604

[menu.main]
parent          = "configure-your-schedule"

[[related]]
title = "Favorites"
url = "favorites.md"

[[related]]
title = "Controls"
url = "basic-structure.md#controls"

[[related]]
title = "Dashboard"
url = "basic-structure.md#dashboard"

[[related]]
title = "User options"
url = "basic-structure.md#options"

[[related]]
title = "Category filter"
url = "basic-structure.md#category-filter"
+++

You can hide elements and disable features by setting one of the `data-hide-...` options. 

<span class='note'>Although element can be hidden by setting the CSS `display: none` property, it’s better not to render them at all by using a `data-hide-...` option.</span>

| Option | Description |
|---------|--------------|
| `data-hide-controls` |  |
| `data-hide-dashboard` |  |
| `data-hide-export` |  |
| `data-hide-favorites` |  |
| `data-hide-filter` |  |
| `data-hide-images` |  |
| `data-hide-print` |  |

### Example

```html
<script	defer src='[path-to-embed]'
  data-hide-controls='true'
  data-hide-dashboard='true'
  data-hide-export='true'
  data-hide-favorites='true'
  data-hide-filter='true'
  data-hide-images='true'
  data-hide-print='true'>
</script>
```
