+++
date            = "2017-09-15T11:31:19+02:00"
author          = "@patrickpietens"

title           = "Block, Element, Modifier"
description     = "Blokks uses a simple naming convention for CSS classes, called Block, Element, Modifier, or simply BEM."
keywords        = ["blokks", "themes", "structure", "naming conventions", "bem", "conflicts"]
weight          = 504

[menu.main]
parent          = "custom-themes"

[[related]]
title = "Get BEM"
url = "http://getbem.com/"

[[related]]
title = "MDN: CSS Specificity"
url = "https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity"

[[related]]
title = "MDN: The !important exception"
url = "https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity#The_!important_exception"

[[related]]
title = "Medium: Understanding Selector Specificity"
url = "https://medium.com/@dte/understanding-css-selector-specificity-a02238a02a59"

[[related]]
title = "Mikefowler.me: Support for BEM Modules in Sass 3.3"
url = "http://mikefowler.me/journal/2013/10/17/support-for-bem-modules-sass-3.3"

[[related]]
title = "Github: PostCSS plugin implementing BEM as at-rules"
url = "https://github.com/kezzbracey/postcss-bem"
+++

Now that you’re familiar with the [structure of the timetable embed]({{< relref "basic-structure.md" >}}), let's have a look at the class names of its elements. Blokks uses a simple naming convention, invented by the people at [Yandex](https://tech.yandex.com/bem/) called *Block, Element, Modifier*, or simply *BEM*. 

BEM provides a way to arrange your CSS classes into modules or components. Basically, it follows this pattern:

```css
  /* Represents the higher level of an abstraction or component. */
  .block {
  }

  /* Represents a descendent of .block that helps form .block as a whole. */
  .block__element {
  }
	
  /* Represents a different state or version of `.block`/ */
  .block--modifier {
  }
```

Although BEM may look weird at first, with all its *_\_*, *-\-* and long classnames, it's worth it. Visit [the official BEM website](http://getbem.com/naming/) if you want learn more.

## CSS Specificity
If multiple CSS selectors are targeting the same HTML element and are trying to assign the same property, the selector with the highest CSS specificity value will 'win'. In other words, the most specific selector gets to assign its property values to the target element: 

```css
#main .header > h1 {
  color: rebeccapurple;
}

.header h1.title {
  font-family: “Helvetica”;
  color: red;
}
```

In this case `#main .header > h1` is more specific than `.header h1.title`. So the text in `<h1 class=“title”>` is shown in `Helvetica` and `rebeccapurple`. 
 
Although this example is easy to understand, you can imagine that more specific selectors can add complexity which can lead to conflicts and unwanted styling. 

This is where BEM comes in. BEM reduces style conflicts by keeping specificity to a minimum. With BEM, specificity is determined only by the order of the CSS rules. Rules which are defined later, have higher precedence over those defined earlier. So make sure to add your `<style>` or `<link>` tag after the Blokks import.

## CSS Scoping
In addition to reducing specificity, BEM provides a scope by using unique CSS classes for each element. Together with prefixing classes with `.blokks`, it avoids conflicts with your existing classnames.

Unfortunately there are two exceptions that still could cause conflicts with your website’s styling: the `!important` rule and *type selectors*.

In general, the `!important` rule is bad practice and should be avoided at all times:

> When an important rule is used on a style declaration, this declaration overrides any other declarations. Although technically !important has nothing to do with specificity, it interacts directly with it. Using !important however, is bad practice and should be avoided because it makes debugging more difficult by breaking the natural cascading in your stylesheets. Source: [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity#The_!important_exception)

CSS type selectors match elements by node name. A type selector for a particular element selects all elements of that type. For example, this selector underlines all `<p>` tags:

```css
p {
  text-decoration: underline;
}
```

Although type selectors add just little bit of specificity, it can add unwanted styling because of the cascading nature of CSS. It’s recommended to apply styles by unique CSS classes instead of your page structure.