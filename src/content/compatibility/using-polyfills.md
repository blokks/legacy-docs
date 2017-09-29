+++
date            = "2017-09-15T11:31:19+02:00"
author          = "@patrickpietens"

title           = "Using polyfills"
description     = "A polyfill is a piece of code used to provide modern functionality to older browsers that do not natively support it. Polyfills are not bundled with the Blokks embed."
keywords        = ["blokks", "support", "browsers", "Chrome", "Edge", "Internet Explorer", "IE", "Firefox", "Safari", "Polyfills"]
weight          = 703

[menu.main]
parent          = "compatibility"

[[related]]
title = "Known issues"
url = "known-issues.md"

[[related]]
title = "Polyfill: ES6-style Promises"
url = "https://github.com/stefanpenner/es6-promise"

[[related]]
title = "Polyfill: matchMedia"
url = "https://github.com/paulirish/matchMedia.js/"

[[related]]
title = "Polyfill: IntersectionObserver"
url = "https://github.com/w3c/IntersectionObserver/tree/gh-pages/polyfill"
+++

A polyfill is a piece of code used to provide modern functionality to older browsers that do not natively support it. Polyfills are not bundled with the Blokks embed, because it forces all users to download the polyfills regardless of whether they are necessary.

Instead, you have to add them manually. For example, here's how you can add the *ES6 Promise* polyfill:

```
<script src="https://cdnjs.cloudflare.com/ajax/libs/es6-promise/4.1.1/es6-promise.auto.min.js"></script>

<script defer src='https://themes.blokks.co/default/...'
  data-blokks-id='a34e542f'
  data-blokks-layout='columns'
</script>
```

<span class='note'>Important: When you use polyfills, make sure they are loaded before you initialize the Blokks embed. You can add one or more polyfills depending on your browser coverage.</span>
