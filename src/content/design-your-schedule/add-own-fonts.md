+++
date            = "2017-09-13T11:31:19+02:00"
author          = "@patrickpietens"

title           = "Adding fonts"
description     = "Changing fonts used in your schedule."
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

## System fonts
Changing the font used in your schedule works the same way as [changing colors]({{< relref "change-colors.md" >}}), by using *CSS custom properties*, or *CSS variables*. For example, the following snippet will demonstrate how to use **Helvetica Neue** instead of **Blokks Sans**, which is Blokks' default font.

```css
:root {
  --blokks-default-font: 'Helvetica Neue', Helvetica, sans-serif;
}
```

The embed will try to load **Helvetica Neue** first. If it wasn’t found it skips to next one. And so on. Finally falling back to system fonts. Using system fonts boosts performance because your browser doesn't have to download any font files. However, the number of available system fonts is limited.

---

## Import external fonts
Luckily we can import fonts from [Google Fonts](https://fonts.google.com/), [Adobe Typekit](https://typekit.com/) and other type foundries. Together they offer hundreds of great fonts to choose from.

### Google Fonts
When using [Google Fonts](https://fonts.google.com/), paste the following snippet into the **\<head\>** of your HTML page. In this example, we're importing **Roboto** as our font.

```html
<link href='https://fonts.googleapis.com/css?family=Roboto' rel='stylesheet'>
```

To use this font in your schedule, simply change the value of this *CSS variable*:

```css
:root {
  --blokks-default-font: 'Roboto', sans-serif;
}
```

<span class='note'>Note that [Google Fonts](https://fonts.google.com/) offer open source fonts which you are allowed to use on any website, whether it’s commercial or personal. Using fonts from other Type Foundries or self-hosted fonts sometimes require paid licenses. Sometimes even when a typeface is labeled as a “free download”. Make sure to check the license before using a font.</span>

### Adobe Typekit
Using [Adobe Typekit](https://typekit.com/) fonts differs just a little bit from using Google Fonts. To start, paste the following snippet into the **\<head\>** of your HTML page.

```html
<script src='https://use.typekit.net/hjy6zgg.js'></script>
<script>try{Typekit.load({ async: true });}catch(e){}</script>
```

And again, use our CSS variable to add the font:
And again, use our CSS variable to add the font:

```css
:root {
  --blokks-default-font: 'liberation-sans', sans-serif;
}
```

---

## Self-hosted fonts
If you have have already purchased and downloaded a font and are using it for your website or app, you are self-hosting your fonts.

To use self-hosted fonts with Blokks we need a little bit of information about them. The `@font-face` CSS rule specifies the name of your font, its location and its font-weight. It should look something like this:

```css
@font-face {
  font-family: 'Blokks Sans';
  font-weight: 400;
  src: url('BlokksSans-Regular.woff') format('woff'),
       url('BlokksSans-Regular.woff2') format('woff2');
}
```

You can see that the name of the font is set to **Blokks Sans**. To use this font for your schedule, add this name to our custom CSS property:

```css
:root {
  --blokks-default-font: "Blokks Sans", sans-serif;
}
```