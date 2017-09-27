+++
date            = "2017-09-12T11:31:19+02:00"
author          = "@patrickpietens"

title           = "Embed code"
description     = "Embedding your schedule requires you to insert three small code snippets."
keywords        = ["blokks", "configure", "embed", "embedding", "embed code"]
weight          = 302

[menu.main]
parent          = "embed-your-schedule"

[[related]]
title = "Advanced options: Lets get started"
url = "advanced-options.md"

[[related]]
title = "Custom themes: Getting started"
url = "custom-themes.md"

[[related]]
title = "Basic structure: Adding preloader"
url = "preloader.md"
+++

Embedding your schedule requires you to insert three small code snippets:

## CSS
The first one is a `<link>` to a stylesheet and is placed in the `<head>` of your page. If you [created your own template]({{< relref "custom-themes.md" >}}) just replace the `href` value with a link to your own CSS file.

```html
<link href="[path-to-theme]" media="screen" rel="stylesheet">
```

## Container
The second piece of code is even simpler. It’s the `<div>` container in which the schedule is embedded. You can add the container anywhere on your page as long as it is between `<body>` `</body>`:

```html
<div blokks-container></div>
```

## JavaScript
Finally, add the following `<script>` just above the `</body>` of the page:

```html
<script defer src="[path-to-embed]"
  data-blokks-id="[schedule-id]"
  data-layout="columns">
</script>
```

The `src` and `data-blokks-id` attributes are required. All other attributes are optional. You can [configure your schedule]({{< relref "advanced-options.md" >}}) any way you want by adding or removing options.

<span class='note'>All files are hosted on our servers and [delivered to your visitors using our CDN]({{< relref "caching.md" >}}). However, it’s possible to download all required files and host them on your own server:</span>

<button>[Download files <svg><use href="images/sprite.svg#arrow-next"></use></svg>](http://downloadlink)</button>