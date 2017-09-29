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

We spend a lot of time on making Blokks as fast as possible and keep load times to a minimum. Think of optimizing and [lazy loading images](https://www.sitepoint.com/five-techniques-lazy-load-images-website-performance/), using non-blocking minified scripts, [swapping web-fonts](https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display), gzipping text files and [serve assets using a CDN](https://www.cloudflare.com/).

Blokks also depends heavily on browser- and server caching to improve performance:

## Browser caching
The browser cache is a temporary storage on your computer for downloaded files by your browser. The browser is smart enought to only download updated files, or what is not already stored in the cache.

Blokks uses browser caching for loading static files like CSS, JavaScript, fonts and images. These assets are cached forever, only invalidating the cache when a file actually changes. This basically means that assets are loaded once.

<span class='note'>Note: you can bypass browser caching by force reloading the page. Depending on your browser, press <kbd>CMD + R</kbd> / <kbd>CTRL + R</kbd> or <kbd>CMD + F5</kbd> / <kbd>CTRL + F5</kbd>.</span>

## Server caching
Blokks leverages server caching to reduce bandwidth, server load, database connections and most importantly, latency. All of this makes sure that our servers respond faster to HTTP requests and stay online even during peak moments, like days of your event.

Blokks flushes its server cache every **15 minutes**. Because of this, it may take some minutes for your [saved changes]({{< relref "save-export.md" >}}) to become visible. This can be annoying when you are testing your embed. Therefor it's possible to bypass server caching by appending `?preview=true` to your website url.
