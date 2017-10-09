+++
date            = "2017-09-13T11:31:19+02:00"
author          = "@patrickpietens"

title           = "Font properties"
description     = "Changing various font properties in your schedule embed."
keywords        = ["blokks", "design", "embed", "template", "layout", "fonts", "typekit", "adobe", "google fonts"]
weight          = 407

[menu.main]
parent          = "customize-your-embed"

[[related]]
title = "Custom themes: Block, Element, Modifier"
url = "bem.md"

[[related]]
title = "Sitepoint: The Power of em Units in CSS"
url = "https://www.sitepoint.com/power-em-units-css/"

[[related]]
title = "MDN: Font shorthand"
url = "https://developer.mozilla.org/en-US/docs/Web/CSS/font"
+++

After you've [added your fonts]({{< relref "add-own-fonts.md" >}}), you may have noticed that after changing `--blokks-default-font`, some properties, for example `font-size`, need adjusting.

## Font scaling
Blokks uses `em` units to define its font sizes. This means that all sizes are relative to its parent element, which in our case is the embed root. So, to change all `font-sizes` at once you can simply set the `--blokks-font-scale` variable:

```css
:root {
  /* This scales all fonts by 1.5 */
  --blokks-font-scale: 150%;

  /* You can also use other units like px and pt*/
  --blokks-font-scale: 32px;
  --blokks-font-scale: 16pt;
}
```

Alternatively, you can set the `font-size` property on the embed root directly:

```css
.blokks {
  /* Scaling using percentages */
  font-size: 150%;

  /* Or using absolute numbers */
  font-size: 32px;
  font-size: 16pt;
}
```

<span class='note'>Sometimes the result of using the `--blokks-font-scale` variable may differ from what you expect. This is caused when using relative scaling in combination with the cascading nature of CSS. To fix this, use absolute values for scaling, like `px` or `pt`.</span>

## Other properties
Font properties inherit its values from parent elements. So setting `letter-spacing: 1px;` on the embed root will automatically set the `letter-spacing` on all text elements in the embed.

If you want to target individual elements we need to [target the text with CSS selectors]({{< relref "using-css-classes.md#inspect-elements" >}}). Grab the class name of the element you've selected (in our case this is `.blokks-location__title`) and add it to the CSS of your page. For example, let’s make it `bold`, `underline` and `italic`. Also, let's make the font size bigger:

```css
.blokks-location__title {
  font-size: 18px;
  font-weight: 700;
  font-style: italic;
  text-decoration: underline;
}
```

Like *CSS variables* all CSS classnames start with **.blokks-** to avoid naming conflicts. But sometimes some of your existing website's styling will accidentally be used by the embed. [Read more here]({{< relref "bem.md" >}}) on how to solve this.

<span class='note'>Note: the order in which CSS rules are stated determines which ones take precedence: "CSS rules that appear later in the code override earlier rules if both have the same specificity." Basically this means that you should add the `<style>` tag after the Blokks import. For example:</span>

```html
<!-- Link to the Blokks theme -->
<link href='schedule.css' rel='stylesheet' media=‘screen’>

<!-- Add your own styling -->
<style>
  .blokks-location__title {
    font-size: 2em;
    font-weight: 700;
    font-style: italic;
    text-decoration: underline;
  }
</style>

<!-- Or link to your own stylesheet -->
<link href='custom.css' rel='stylesheet' media=‘screen’>
```