+++
date            = "2017-09-19T11:31:19+02:00"
author          = "@patrickpietens"

title           = "Social provider"
description     = ""
keywords        = ["blokks", "configure", "schedule", "favorites", "social", "provider", "twitter", "linkedin", "facebook"]
weight          = 605

[menu.main]
parent          = "configure-your-schedule"

[[related]]
title = "Favorites"
url = "favorites.md"

[[related]]
title = "Options"
url = "basic-structure.md#options"
+++

To enable [favorites]({{< relref "favorites.md" >}}), you have to set your social provider first. Your social provider is the network visitors use to sign in and add favorites. Set the `data-social-provider` to either `facebook`, `twitter` or `linkedin`. By default, users see what their friends and colleagues have favorited. To disable this feature set the `data-friends` option to `false`.

<span class='note'>Note: LinkedIn doesn’t allow us to see your connections. Therefor friends are automatically disabled when setting `data-social-provider` to `linkedin`. Even when `data-friends` is enabled.</span>

| Option | Values | Default value |
|--------|--------|---------------|
| `data-hide-favorites` | `true` `false` | `false` |
| `data-hide-friends` | `true` `false` | `false` |
| `data-social-provider` | `facebook` `twitter` `linkedin` | `facebook` |

### Example

```html
<script	defer src='[path-to-embed]'
  data-blokks-id='[schedule-id]'
  data-hide-favorites='false'
  data-social-provider='linkedin'>
</script>
```