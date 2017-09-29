+++
date            = "2017-09-12T11:31:19+02:00"
author          = "@patrickpietens"

title           = "Favorites"
description     = "Your users are able to save their favorite acts and see where friends are going by connecting with their Facebook, Twitter or LinkedIn account."
keywords        = ["blokks", "configure", "embed", "favorites", "friends"]
weight          = 303

[menu.main]
parent          = "embed-your-schedule"

[[related]]
title = "Advanced options: Adding a social provider"
url = "social-provider.md"

[[related]]
title = "Advanced options: Accessibility"
url = "accessibility.md"
+++

Your users are able to save their favorite acts (speakers/talks/artists) and see where their friends are going by connecting with their Facebook, Twitter or LinkedIn account. You can choose your social network using the [embed tab]({{< relref "configure-your-embed.md" >}}) or by [setting it manually]({{< relref "social-provider.md" >}}).

## Adding favorites
Once connected, users can click the *Add to favorites* button to favorite that act. Alternatively, they can double click acts or press the <kbd>L</kbd> key to add favorites straight from the schedule. [You can disable favorites]({{ relref "hide-components.md" }}) by setting `data-hide-favorites` in your embed code.

![Adding favorites](images/adding-favorites.gif)

## Friends activity
If some of your users' friends are attending the same event, they will popup in several places in your schedule. This will show your users which speaker, band or performance their friends will be going to. [Disable this feature]({{< relref "hide-components.md" >}}) by setting `data-hide-friends`.

<span class='note'>Note: Unfortunately LinkedIn does not allow us to see your users' connections. Because of this, we can't show friend activity when using LinkedIn as your social provider.</span>
