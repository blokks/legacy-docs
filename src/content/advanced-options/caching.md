+++
date            = "2017-09-19T11:31:19+02:00"
author          = "@patrickpietens"

title           = "Caching"
description     = ""
keywords        = ["blokks", "configure", "schedule", "embed", "cache", "server", "browser"]
weight          = 616

[menu.main]
parent          = "advanced-options"

[[related]]
title = "Manage your schedule: Saving & exporting"
url = "save-export.md"

[[related]]
title = "Custom themes: Preloader"
url = "preloader.md"

[[related]]
title = "Advanced options: Testflight"
url = "testflight.md"
+++

We've spent a lot of time making Blokks as fast as possible and keeping load times to a minimum. We're optimizing and [lazy loading](https://www.sitepoint.com/five-techniques-lazy-load-images-website-performance/) images, using non-blocking minified scripts, [swapping web-fonts](https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display), gzipping text files and [serving assets using a CDN](https://www.cloudflare.com/).

Next to this, Blokks also depends heavily on browser- and server caching to improve performance.

## Browser caching
The browser cache is a temporary storage on your computer for files the browser has downloaded. The browser is smart enought to only download updated files, or files that have not been stored in the cache yet.

Blokks uses browser caching to loading static files like CSS, JavaScript, fonts and images. These assets are cached forever, only invalidating the cache when a file actually changes. This basically means that assets are only loaded once.

<span class='note'>Note: you can bypass browser caching by force reloading the page. Depending on your browser, you can do this by pressing <kbd>CMD + R</kbd> / <kbd>CTRL + R</kbd> or <kbd>CMD + F5</kbd> / <kbd>CTRL + F5</kbd>.</span>

## Server caching
Blokks uses server caching to reduce bandwidth, server load, database connections and most importantly, latency. All of this makes sure that our servers respond faster to HTTP requests and stay online even during peak usage, like during the days of your event.

Blokks flushes its server cache every **15 minutes**. Because of this, it may take some minutes for your [saved changes]({{< relref "save-export.md" >}}) to become visible. 

This can be annoying when you are testing your schedule. To avoid this, you can bypass server caching by appending `?preview=true` to your website url.
