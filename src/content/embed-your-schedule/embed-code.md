+++
date            = "2017-09-12T11:31:19+02:00"
author          = "@patrickpietens"

title           = "Embed code"
description     = "Embedding your schedule requires you to insert three small snippets."
keywords        = ["blokks", "configure", "embed", "embedding", "embed code"]
weight          = 302

[menu.main]
parent          = "embed-your-schedule"

[[related]]
title = "Create your own template"
url = "http://themes/intro"

[[related]]
title = "Adding preloader"
url = "http://themes/structure#preloader"

[[related]]
title = "Schedule options"
url = "http://configure/options"

[[related]]
title = "Caching"
url = "http://configure/Caching"
+++

Embedding your schedule requires you to insert three small snippets:

## CSS
The first one is a `<link>` to a template file and it’s placed in the `<head>` of your page. If you [created your own template](http://themes/intro) just replace `href` value with a link to your own CSS file.

```html
<link href='https://themes.blokks.co/default/1.0.0/columns.css' rel='stylesheet'>
```

## Container
The second piece of code is even simpler. It’s the `<div>` container in which the schedule is embedded. You can add the container anywhere on your page as long as it is between `<body></body>`:

```html
<div blokks-container></div>
```

## JavaScript
Finally, add the following `<script>` just above the `</body>` of the page:

```html
<script defer src='https://themes.blokks.co/...'
  data-blokks-id=‘a34e542f’
  data-layout='columns'>
</script>
```

The `src` `data-blokks-id` `data-layout` attributes are required. All other attributes are optional. You can [configure your schedule](http://configure/options) any way you want by setting its options.

All files are hosted on our servers and [delivered to your visitors using our CDN](http://configure/caching). However it’s possible to download all required files and host them on your own server.

[<button>Download files</button>](http://downloadlink)