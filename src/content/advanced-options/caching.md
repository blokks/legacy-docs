+++
date            = "2017-09-19T11:31:19+02:00"
author          = "@patrickpietens"

title           = "Caching"
description     = ""
keywords        = ["blokks", "configure", "schedule", "embed", "cache", "server", "browser"]
weight          = 616

[menu.main]
parent          = "advanced-options"
+++

  - Why is caching enabled
  - Override cache with `?preview` querystring
  - Using CDN to deliver assets
  - testflight
  server cache
  browser cache

| Option | Values | Default value |
|--------|--------|---------------|
| `data-caching` | `false` `true` | `true` |

### Example

```html
<script	defer src='[path-to-embed]'
  data-blokks-id='[schedule-id]'
  data-date-caching='false'>
</script>
```