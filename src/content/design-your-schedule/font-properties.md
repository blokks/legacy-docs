+++
date            = "2017-09-13T11:31:19+02:00"
author          = "@patrickpietens"

title           = "Font properties"
description     = "Adding your own font may cause some properties to mess up. Fix this by setting properties on the embed root."
keywords        = ["blokks", "design", "embed", "template", "layout", "fonts", "typekit", "adobe", "google fonts"]
weight          = 407

[menu.main]
parent          = "design-your-schedule"

[[related]]
title = "Change colors"
url = "change-colors.md"

[[related]]
title = "Add own fonts"
url = "add-own-fonts.md"

[[related]]
title = "Structure"
url = "http://themes/structure"

[[related]]
title = "Block Element Modifier"
url = "http://themes/bem"

[[related]]
title = "Conflicting styles"
url = "http://themes/conflicts"

[[related]]
title = "!important"
url = "http://themes/avoindimportant"

[[related]]
title = "MDN: Font shorthand"
url = "https://developer.mozilla.org/en-US/docs/Web/CSS/font"

[[related]]
title = "Sitepoint: The Power of em Units in CSS"
url = "https://www.sitepoint.com/power-em-units-css/"
+++

By now your schedule should match the identity of your conference or festival a lot better. But you may have noticed that by changing `--blokks-default-font`, some properties, like for example `font-size`, are messed up. Let’s fix this.🔧

## Font scaling
Blokks uses `em` units to define its `font-sizes`. This means that all sizes are relative to its parent element, in our case the *embed root*. So, to change all `font-sizes` at once you can simply set the `--blokks-font-scale` variable:

```css
:root {
  /* This scales all fonts by 1.5 */
  --blokks-font-scale: 150%; 

  /* You can also use other units like px and pt*/
  --blokks-font-scale: 32px; 
  --blokks-font-scale: 16pt; 
}
```

Alternatively, you set the `font-size` property on the *embed root* directly:

```css
.blokks {
  /* Scaling using percentages */
  font-size: 150%;

  /* Or using absolute numbers */
  font-size: 32px;
  font-size: 16pt;
}
```

<span class='note'>Sometimes the result of using the `--blokks-font-scale` variable may differ from what you expect. This is caused when using relative scaling in combination with the [cascading nature of CSS](http://blokks/css). To fix this use absolute values for scaling, like `px` or `pt`.</span>

## Other properties
Font properties inherit its values from parent elements. So setting `letter-spacing: 1px;` on the `embed root` will automatically set the `letter-spacing` on all text elements in the embed. 
 
If you want to target individual elements we need to [target the text with CSS selectors]({{< relref "using-css-classes.md#inspect-elements" >}}). Grab the `classname` of the element which you selected (in our case this is `.blokks-location__title`) and paste it together with your styling in the `<head>` of your page. For example, let’s make it `bold`, `underlined` and `italic`. And make the `font-size` bigger:

```css
.blokks-location__title {
  font-size: 18px;
  font-weight: 700;
  font-style: italic;
  text-decoration: underline;
}
```

<span class='note'>Like [CSS variables]({{< relref "change-colors.md" >}}) all CSS classnames start with **.blokks-** to avoid naming conflicts. But sometimes some of your existing website’s styling is accidentally used by the embed. Read more about this and [how to solve it](http://themes/bem).</span>

<span class='note'>Also, you should note that the order in which CSS rules are stated determines which ones take precedence: <cite>"CSS rules that appear later in the code override earlier rules if both have the same specificity."</cite> Basically this means that you should add the `<style>` tag after the Blokks import:</span>

```html
<link href='columns.css' rel='stylesheet' media=‘screen’>
<style>
  .blokks-location__title {
    font-size: 2em;
    font-weight: 700;
    font-style: italic;
    text-decoration: underline;
  }
</style>
```