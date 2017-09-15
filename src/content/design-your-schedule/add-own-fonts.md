+++
date            = "2017-09-13T11:31:19+02:00"
author          = "@patrickpietens"

title           = "Add own fonts"
description     = "You can add your own fonts in the same way you changed the colors and sizes of your schedule."
keywords        = ["blokks", "design", "embed", "template", "layout", "fonts", "typekit", "adobe", "google fonts"]
weight          = 406

[menu.main]
parent          = "design-your-schedule"

[[related]]
title = "Change colors"
url = "change-colors.md"

[[related]]
title = "Create your own template"
url = "http://themes/"

[[related]]
title = "Browser support"
url = "http://browsersupport#customproperties"

[[related]]
title = "MDN: @font-face"
url = "https://developer.mozilla.org/nl/docs/Web/CSS/@font-face"

[[related]]
title = "Google Fonts"
url = "https://fonts.google.com/"

[[related]]
title = "Adobe Typekit"
url = "https://typekit.com/"
+++

## Use system fonts
You can add your own fonts in the same way you [changed the colors]({{< relref "change-colors.md" >}}) and [sizes of your schedule]({{< relref "update-rows-and-columns.md" >}}). For example, the following snippet will show **Helvetica Neue** instead of **Blokks Sans**, which is Blokks default font.

```css
:root {
  --blokks-default-font: 'Helvetica Neue', Helvetica, sans-serif;
}
```

The embed will try to load **Helvetica Neue** first. If it wasn’t found it skips to next one. And so on. Finally falling back to system fonts. Using system fonts boosts performance because your browser doesn't have to download any font files. However, the number of available system fonts is limited.

## Import external fonts
Luckily we can use fonts from [Google Font](https://fonts.google.com/), [Adobe Typekit](https://typekit.com/) or other Type Foundries. Together they offer hundreds of great fonts to choose from.

### Google Font
When using [Google Font](https://fonts.google.com/), copy the following snippet into the **\<head\>** of your HTML page as described on their website:

```html
<link href='https://fonts.googleapis.com/css?family=Roboto' rel='stylesheet'>
```

But instead of setting `font-family: "Roboto", sans-serif;` set the *CSS variable* instead:

```css
:root {
  --blokks-default-font: 'Roboto', sans-serif;
}
```

<span class='note'>Note that [Google Fonts](https://fonts.google.com/) offer open source fonts which you are allowed to use on any website, whether it’s commercial or personal. Using fonts from other Type Foundries or self-hosted fonts sometimes require paid licenses. Even if a typeface is labeled as “free download”. Check each license based on how you will be using it.</span>

### Adobe Typekit
Using [Adobe Typekit](https://typekit.com/) fonts differs just a little bit from [Google Font](https://fonts.google.com/). Again, copy the embed code as described on their website:

```html
<script src='https://use.typekit.net/hjy6zgg.js'></script>
<script>try{Typekit.load({ async: true });}catch(e){}</script>
```

And instead of setting `font-family: "liberation-sans",sans-serif;` use our *CSS variable* instead:

```css
:root {
  --blokks-default-font: 'liberation-sans', sans-serif;
}
```

## Self-hosted fonts
Sometimes you already purchased and downloaded a font which you are using in your website or app. In that case you are self-hosting your fonts.

To use self-hosted fonts with Blokks we need a little bit of information about them. The `@font-face` CSS rule specifies the name of your font, its location and its font-weight. And looks something like this:

```css
@font-face {
  font-family: 'Blokks Sans';
  font-weight: 400;
  src: url('BlokksSans-Regular.woff') format('woff'),
       url('BlokksSans-Regular.woff2') format('woff2');
}
```

You can see that the name of the font is set to **BlokksSans-Regular**. This is the name that would be referenced in our custom property:

```css
:root {
  --blokks-default-font: "Blokks Sans", sans-serif;
}
```