+++
date            = "2017-09-13T11:31:19+02:00"
author          = "@patrickpietens"

title           = "Font properties"
description     = ""
keywords        = ["blokks", "design", "embed", "template", "layout", "fonts", "typekit", "adobe", "google fonts"]
weight          = 407

[menu.main]
parent          = "design-your-schedule"
+++

By now your schedule should match the identity of your conference/festival a lot better. But you may have noticed that by changing `--blokks-default-font`, some of the `font-size` and `letter-spacing` properties are all messed up. Let’s fix this.🔧

The bad news is, we cannot use *CSS variables* to do this. We need to target the text with CSS selectors. The good news is, it’s quite simple: *Right click* the text you want to change and select *Inspect*. This will open *Developer Tools* of your browser:

![Image: Chrome Developer Tools](https://blokks.co/docs/images/devtools.png)

Grab the `classname` of the element which you selected (in our case this is `.blokks-location__title`) and paste it together with your styling in the `<head>` of your page. For example, let’s make it `bold`, `underlined` and `italic`. And make the `font-size` bigger:

```css
.blokks-location__title {
  font-size: 18px;
  font-weight: 700;
  font-style: italic;
  text-decoration: underline;
}
```

Like *CSS variables* all CSS classnames begin with **blokks-** to avoid naming conflicts. But sometimes some of your existing website’s styling is accidentally used by the embed. Read more about this and [how to solve it](http://themes/bem).

Also, you should note that the order in which CSS rules are stated determines which ones take precedence: <cite>"CSS rules that appear later in the code override earlier rules if both have the same specificity."</cite> Basically this means that you should add the `<style>` tag after the Blokks import:

```html
<link href='https://templates.blokks.co/columns.css' rel='stylesheet' media=‘screen’>
```

## See also
- [Structure](http://themes/structure)
- [Block Element Modifier](http://themes/bem)
- [Conflicting styles](http://themes/conflicts)
- [!important](http://themes/avoindimportant)
- [Change colors](http://design/colors)
- [Use fonts](http://design/fonts)
- [Font shorthand](https://developer.mozilla.org/en-US/docs/Web/CSS/font)
