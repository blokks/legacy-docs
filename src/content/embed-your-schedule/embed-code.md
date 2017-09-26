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
title = "Create templates"
url = "getting-started.md"

[[related]]
title = "Adding preloader"
url = "preloader.md"

[[related]]
title = "Configure your schedule"
url = "lets-get-started.md"

[[related]]
title = "Caching"
url = "caching.md"
+++

Embedding your schedule requires you to insert three small code snippets:

## CSS
The first one is a `<link>` to a stylesheet and is placed in the `<head>` of your page. If you [created your own template]({{< relref "getting-started.md" >}}) just replace the `href` value with a link to your own CSS file.

```html
<!-- Add this to the <head> of your page -->
<link href="columns.css" media="screen" rel="stylesheet">
```

<span class='note'>Note: If you've [created your own template](http://themes/intro) just replace the `href` value with a link to your own CSS file.</span>

## Container
The second piece of code is even simpler. It’s the `<div>` container in which the schedule is embedded. You can add the container anywhere on your page as long as it is between `<body></body>`:

```html
<!-- Add this anywhere in the <body> -->
<div blokks-container></div>
```

## JavaScript
Finally, add the following `<script>` just above the `</body>` of the page:

```html
<!-- Add this just above the </body> of your page -->
<script defer src="main.js"
  data-blokks-id="a34e542f"
  data-layout="columns">
</script>
```

The `src` `data-blokks-id` `data-layout` attributes are required. All other attributes are optional. You can [configure your schedule]({{< relref "lets-get-started.md" >}}) any way you want by adding or removing other options.

All files are hosted on our servers and [delivered to your visitors using our CDN]({{< relref "caching.md" >}}). However, it’s possible to download all required files and host them on your own server.

[<button>Download files <svg><use href="images/sprite.svg#arrow-next"></use></svg></button>](http://downloadlink)