# Embed

Ik denk dat we nog een hoofdstuk nodig hebben waarin we de embed beschrijven. Double clicks etc. De embedcode etc.

Dit is ook een goede brug van backend naar het volgende hoofdstuk.


# Design your schedule

## Introduction

So you’ve added all days, stages and acts and embedded the schedule on your website ✌️. Now it’s time to style and configure your schedule so it matches your conference’s identity and it embeds perfectly within your existing website or mobile app.

In the next chapters we explain how to [change the layout of your schedule](http://chooseyourlayout) , [set its colors](http://changecolors) or [add your own fonts](http://addownfonts) & [icons](http://addcustomicons). 

So, [no time to waste](http://chooseyourlayout).


## Choose your template

*[Not yet supported]*


## Choose your layout

### Desktop 

On desktop 🖥 our embed has two layout directions: the first direction is `columns` where stages are arranged horizontally. This is also the default direction of the embed. The second one is `rows` where stages are stacked vertically.  

![Row vs. column layout](https://blokks.co/docs/images/rowsandcolumns.png)

You can change the layout direction at any time by selecting the layout in [the design tab of our backend](http://gettingstarted/design) or by setting it manually with the [`data-layout` option](http://configure/options):

```
<script src=“”
	data-blokks-id=“1”
	data-layout=“rows"
></script>
```

**See also:**
- [More configuration options](http://configure)
- [Create your own layout](http://themeslayout)
- [Browser support](http://browsersupport)

### Mobile

On mobile devices 📱 your schedule is automatically shown in a list view. However, visitors can switch back to the full schedule by rotating their device to landscape mode:

![Portrait vs. landscape mode](https://blokks.co/docs/images/animation.gif)

The default breakpoint for switching between mobile and desktop view is `480px` or `16em`. This works best for support on all devices. Of course you [change this value](http://configure/breakpoints) if you want.

For events with a lot of stages or acts the list can become very long. Which can be quite annoying if you want to find out which speaker or band coming up next. On the day itself the mobile version of the embed will show our [dashboard](http://design/dashboard):

The dashboard is … 
*[TODO: Dashboard beschrijven]*

**See also:**
- [Dashboard](http://themes/dashboard)
- [Date selector](http://themes/dateselector)
- [Setting default breakpoint](http://theme/breakpoint)
- [Create your own layout](http://themes/layout)
- [Using media queryes](https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries)


## Change colors

You can change any color used in the embed. The prefered and easiest way to apply your own styling is to use CSS custom properties, or CSS variables. [Custom properties are supported by all modern browsers](http://configure/browsersupport).

The syntax for custom properties is straightforward:

```
<style media="screen">
	:root {
		--blokks-theme-color: palevioletred;
	}
</style>
```

In the above example `--blokks-theme-color` is a Blokks defined property with a value of `palevioletred`. You should note that all Blokks defined properties are prefixed with `--blokks`. Adding the above code in the `<head>` of your page will change the main color of the embed to `palevioletred`.

![Theme color set to palevioletred](https://blokks.co/docs/images/palevioletred.png)

*You should note that custom properties are case sensitive, so `--blokks-theme-color` and `--Blokks-Theme-Color` are different.*

Below you will find the complete list of colors which you can change with custom properties:

| Property | Description |
|----------|-------------|
| `--blokks-theme-color` | Lorem ipsum dolor sit amet, consectetur adipiscing elit. |
| `--blokks-default-background-color` | Suspendisse ornare posuere tellus et posuere. Donec dignissim, nibh quis tincidunt sollicitudin. |
| `--blokks-dark-background-color` | Suspendisse tellus nulla, interdum bibendum ultricies eu. |
| `--blokks-default-text-color` | Quisque eget erat ligula. Fusce blandit nisi id lobortis mollis. |
| `--blokks-light-text-color` | Pellentesque tincidunt mattis sagittis. |
| `--blokks-dimmed-text-color` | Fusce volutpat quam et lacus pharetra pellentesque at et orci. |
| `--blokks-stroke-color` | Duis ipsum tortor, interdum vel lorem eget. |
| `--blokks-default-icon-color` | Aliquam vulputate justo lorem, a pellentesque metus porttitor id. |
| `--blokks-light-icon-color` | Vivamus viverra erat id maximus blandit. |
| `--blokks-selection-color` | Etiam dignissim ut lorem non vulputate. |

![Colors used in the embed](http://blokks.co/docs/images/colors.png)

**See also**
- [Structure of our embed](http://structure)
- [Working with CSS Variables in JavaScript](http://cssproperties)
- [Browser support](http://browsersupport#customproperties)

## Update row and column sizes

Depending on [the chosen layout](http://design/layout), you can use `custom properties` to update the size of rows and columns of your schedule.  

For `column` layouts these properties are:

| Property | Description |
|----------|-------------|
| `--blokks-table-header-height` | Quisque eget erat ligula. Fusce blandit nisi id lobortis mollis. |
| `--blokks-table-cell-height` | Fusce volutpat quam et lacus pharetra pellentesque at et orci. |
| `--blokks-time-captions-width` | Duis ipsum tortor, interdum vel lorem eget. |
| `--blokks-table-column-width` | Vivamus viverra erat id maximus blandit. |

And for `row` layouts, they are:

| Property | Description |
|----------|-------------|
| `--blokks-table-header-width` | Suspendisse tellus nulla, interdum bibendum ultricies eu. |
| `--blokks-table-cell-width` | Pellentesque tincidunt mattis sagittis. |
| `--blokks-table-cell-height` | Fusce volutpat quam et lacus pharetra pellentesque at et orci. |
| `--blokks-time-captions-height` | Aliquam vulputate justo lorem, a pellentesque metus porttitor id. |
| `--blokks-table-column-height` | Etiam dignissim ut lorem non vulputate. |

Besides resizing it’s also possible to change the 

**See also**
- [Set the timescale of the embed](http://configure/timescale)
- [Working with CSS Variables in JavaScript](http://cssproperties)
- [Browser support](http://browsersupport#customproperties)


## Add own fonts

### Use system fonts

You can add your own fonts 🖊 in the same way you [changed the colors](http://design/colors) and [sizes of your schedule](http://design/sizes). For example,  the following snippet will show `Helvetica Neue` instead of `Liberation Sans`, Blokks default font.

```
<style media="screen">    
	:root {
		--blokks-default-font: "Helvetica Neue", Helvetica, Arial, sans-serif;
	}
</style>
```

The embed will try to load `Helvetica Neue` first. If it wasn’t found it skips to next one. And so on. Finally falling back to system fonts. 

Using system fonts boosts performance because the browser doesn't have to download any font files. However, the number of available system fonts is limited. 

### Import external fonts

Luckily we can use fonts from [Google Font](https://fonts.google.com/), [Adobe Typekit](https://typekit.com/) or otherr Type Foundries. Together they offer hundreds of great fonts to choose from. 

#### Google Font

When using [Google Font](https://fonts.google.com/), copy the following snippet into the `<head>` of your HTML page as described on their website:

```<link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet">```

But instead of setting the `font-family: "Roboto", sans-serif;` set the custom property instead: 

```
:root {
	--blokks-default-font: "Roboto", sans-serif;
}
```

#### Adobe Typekit

Using [Adobe Typekit](https://typekit.com/) fonts differs just a little bit from [Google Font](https://fonts.google.com/). Again, copy the embed code as described on their website:

```
<script src="https://use.typekit.net/hjy6zgg.js"></script>
<script>try{Typekit.load({ async: true });}catch(e){}</script>
```

And instead of setting `font-family: "liberation-sans",sans-serif;` use custom properties instead: 

```
:root {
	--blokks-default-font: "liberation-sans", sans-serif;
}
```

### Self-host fonts 

Maybe you already purchased and downloaded a font which you are using in your website or app. In that case you are self-hosting your fonts. 

To use self-hosted fonts with Blokks we need a little bit of information about those. The `@font-face` CSS rule specifies the name of your font, its location and its font-weight. It looks something like this:

```
@font-face {
	font-family: “Liberation Sans”;
	src: url(“liberation-sans.woff”) format('woff’),
		   url(“liberation-sans.woff2”) format('woff2’);
	font-weight: 400;
}
```

You can see that the name of the font is set to `Liberation Sans`. This is the name that would be referenced in our custom property:

```
:root {
	--blokks-default-font: “Liberation Sans", sans-serif;
}
```

**See also**
- [Change colors](http://design/colors)
- [Create your own template](http://themes/)
- [Working with CSS Variables in JavaScript](http://cssproperties)
- [Browser support](http://browsersupport#customproperties)
- [MDN: @font-face](https://developer.mozilla.org/nl/docs/Web/CSS/@font-face)
- [Google Fonts](https://fonts.google.com/)
- [Adobe Typekit](https://typekit.com/)

*Note that [Google Fonts](https://fonts.google.com/) offer open source fonts which you are allowed to use on any website, whether it’s commercial or personal.*

*Using fonts from other Type Foundries  or self-hosted fonts sometimes require paid licenses. Even if a typeface is labeled as “free download”. Check each license carefully based on how you will be using it.*


## Font properties

By now your schedule should match the identity of your conference/festival a lot better. But you may have noticed that by changing `--blokks-default-font`, some of the `font-size` and `letter-spacing` properties are all messed up. Let’s fix this.🔧

The bad news is, we cannot use custom properties to do this. We need to target the text with CSS selectors. The good news is, that it’s quite simple: `Right click` the text you want to change and select `Inspect element`. This will open `Developer Tools`:

![Chrome Developer Tools](https://blokks.co/docs/images/devtools.png)

Grab the `classname` of the element which you selected (in our case this is `.blokks-location__title`) and paste it together with your styling in the `<head>` of your page. For example, let’s make it `bold`, `underlined` and `italic`. And make the `font-size` somewhat bigger:

```
<style>
	.blokks-location__title {
		font-size: 18px;
	    font-weight: 700;
	    font-style: italic;
	    text-decoration: underline;
	}
</style>
```

Like custom properties all CSS classnames begin with `blokks-` to avoid naming conflicts. Sometimes some of your existing website’s styling is accidentally used by the embed. Read more about this and [how to solve it](http://themes/bem).

Also, you should note that the order in which CSS rules are stated determines which ones take precedence: *CSS rules that appear later in the code override earlier rules if both have the same specificity.* Which basically means that you should add the `<style>` tag after the BLOKKS import:

```
<link href='https://template.blokks.co/columns-1.0.0.css' rel='stylesheet' media=‘screen’>
```

**See also**
- [Structure](http://themes/structure)
- [Block Element Modifier](http://themes/bem)
- [Conflicting styles](http://themes/conflicts)
- [!important](http://themes/avoindimportant)
- [Change colors](http://design/colors)
- [Use fonts](http://design/fonts)
- [Font shorthand](https://developer.mozilla.org/en-US/docs/Web/CSS/font)


## Replace icons

All icons used in the schedule are SVGs. 

SVG files are vector based, which means your icons will look stellar on all devices and resolutions. Secondly, since SVGs are XML files, they’re highly compressible with tools like gzip. And last but not least, SVG files are styleable with CSS.

To replace the default icons we need to create our own icon set. An icon set contains the following icons:

| filename | description |
|----------|-------------|
| arrow-down-icon.svg | Down arrow used in the [`Controls`](http://themes/structure#controls) component |
| arrow-left-icon.svg | Left arrow used in the [`Controls`](http://themes/structure#controls) component |
| arrow-right-icon.svg | Right arrow used in the [`Controls`](http://themes/structure#controls) component |
| arrow-up-icon.svg | Up arrow used in the [`Controls`](http://themes/structure#controls) component |
| close-icon-small.svg | Small version of the close symbol. Is used in the [`Alert` popups](http://themes/structure#alerts) |
| close-icon.svg | The symbol used in the close button of the [`Activity Details` component](http://themes/structure#activity-details) |
| dropdown-icon.svg | Symbol used when the [`Date Selector` component](http://themes/structure#date-selector) is a dropdown menu |
| favorite-icon.svg | Symbol which is used to indicate the favorite action |
| unfavorite-icon.svg | Symbol which is used to indicate the unfavorite action |

*You should note that the embed uses the CSS `fill` property to style icons. Convert all shapes to fills when creating your own icons. Also, fill colors set in tools like [Sketch](https://www.sketchapp.com/) or [Adobe Illustrator](http://www.adobe.com/nl/products/illustrator.html) are overriden by CSS.*

**See also**
- [Icon System with SVG Sprites](https://css-tricks.com/svg-sprites-use-better-icon-fonts/)
- [SVG symbol a Good Choice for Icons](https://css-tricks.com/svg-symbol-good-choice-icons/)
- [Inline SVG vs Icon Fonts](https://css-tricks.com/icon-fonts-vs-svg/)

### Optimizing SVGs

SVG files, especially exported from tools like [Sketch](https://www.sketchapp.com/) or [Adobe Illustrator](http://www.adobe.com/nl/products/illustrator.html) contain a lot of data which can be safely removed or converted without affecting rendering result.

Optimizing and compressing your SVG’s is simply done with a command-line tool called `SVGO`. `SVGO` requires `[Node.js](https://nodejs.org/en/)` installed on your computer.

If `[Node.js](https://nodejs.org/en/)` is installed, run the following command from your console to install `SVGO`:

```
npm install -g svgo
```

At its most basic, `SVGO` can be run with the following command:

```
svgo -f path/to/folder/with/svg/files
```

This command will use the default `SVGO` settings to compress and override all files in the `path/to/folder/with/svg/files` folder.

*Make sure your replace `path/to/folder/with/svg/files` with the directory containing your svg files.*

!!!!!!FILMPJE HIERO!!!!!!

*[SVGOMG](https://jakearchibald.github.io/svgomg/) is a webbased interface which allows you to drag & drop your SVGs and get an optimised version. There are also `SVGO` plugins for both [Sketch](https://github.com/BohemianCoding/svgo-compressor) and [Adobe Illustrator](https://github.com/davidderaedt/SVG-NOW).*

**See also**
- [Node.js](https://nodejs.org/en)
- [SVGO](https://github.com/svg/svgo)
- [SVGOMG](https://jakearchibald.github.io/svgomg/)
- [SVGO Sketch Plugin](https://github.com/BohemianCoding/svgo-compressor)
- [SVGO Illustrator Plugin](https://github.com/davidderaedt/SVG-NOW)
- [PostCSS](http://configure/postcss)

### Create spritesheets
  
Spritesheets are a way of combining multiple images into a single file. A website using spritesheets loads faster because the browser only has to load just one, instead of multiple images.
  
To create a spritesheet we use another command-line tool named `svg-sprite`. Again, [Node.js](ttps://nodejs.org/en) is required for this.

First, install `svg-sprite` by running the following command:
  
```
npm install -g svg-sprite
```

After installing `svg-sprite`, run: 

```
svg-sprite --symbol --svg-xmldecl=false --shape-transform='' --symbol-dest='.' --symbol-sprite='icon-set.svg' --symbol-example=false path/to/folder/with/svg/files/*.svg
```

This will merge all the SVGs into one file named `icon-set.svg`. Only one thing left to do, tell the embed to use your icon set by setting the [`data-icon-set=“path/to/icon-set.png“`](http://configure/options#icon-set)

And that’s all there is to it! 🤘

*Make sure your replace `path/to/folder/with/svg/files/*.svg` with the directory containing your svg files.*

!!!!!!FILMPJE HIERO!!!!!!

*[IcoMoon](https://icomoon.io/app) is a webbased interface that does a great job of producing SVG spritesheets. Drag & drop your SVGs and export them as a spritesheet.*

!!!!!!FILMPJE HIERO!!!!!!

**See also**
- [Configure your embed](http://configure/options#icon-set)
- [SVG-Sprite](https://github.com/jkphl/svg-sprite)
- [IcoMoon](https://icomoon.io/app)
- [PostCSS](http://configure/postcss)

### Styling SVG’s

Replacing the icon set may cause the new icons to be too big or too small. Like [changing the fonts](http://design/fonts) we can fix this by selecting the icon in the `Developers Tools` and change its size. 

For example, this will resize the close icon to `50px`:

```
<style>
	.blokks-activity-details__close-button svg {
		width: 50px;
		height: 50px;
	}
</style>
```

**See also**
- [SVG and CSS](https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/SVG_and_CSS)

## All custom properties

Besides colors, fonts and sizes, there are more `custom properties` you can change. To get a list of all properties, right click anywhere on your page, select `Inspect element` and click the `<html>` tag.

![Selecting the HTML tag](http://blokks.co/docs/images/allproperties)

*Pro-tip: Browsers render updates to `custom properties` directly to screen. So changing properties via the `developers tools` are shown while editting. These changes are temporary and will be lost when refreshing or closing the window. So don’t forget to copy/paste them when you’re done.*

!!!!! Filmpje over protip !!!!!


## Printable version

You can [print the schedule](http://embed/printing) including your favorites by clicking the [print button](http://themes/navigation#options) or hitting `CTRL+P` on Windows or `Command+P` on OSX. It’s not possible to style the printed schedule.

**See also**
- [Print options](http://configure/print)
- [Structure](http://themes/structure#navigation)



# Create own template

## Getting started
- Introduction
	- So you want more styling blablaabla
	- set layout to custom


## Basic structure

Our schedule is split into smaller, independent pieces called components. Each component has [a unique CSS class](http://theme/bem) which makes it easy to style them separately. 

The schedule is built out of five main components (which in turn are split into smaller components as well):

- [`Navigation`](http://blokks.co/structure#navigation)
- [`Timetable`](http://blokks.co/structure#timetable)
- [`Stage`](http://blokks.co/structure#location) 
- [`Act`](http://blokks.co/structure#activity) 
- [`Act details`](http://blokks.co/structure#details)

![Basic structure for row and column layout](https//blokks.co/docs/structure-desktop.png)

**See also**
- [Block, Element, Modifier](http://themes/bem)
- [Hiding stuff](http://configure/hiding)
- [Setting date selector](http://configure/dateselector)

### Navigation

Visitors of your event use the `navigation` component [to switch between dates](http://themes/structures###navigation), sign in with their account and [add events to their calendar](http://addcal).

#### Date selector

The `dateselector` component is visible when your event has multiple dates. Use this component to switch between those 🤓 

On desktop computers the `dateselector` is shown as a `buttonbar`. On mobile devices dates are shown in a `dropdown` menu. You can change this by setting the [`date-selector-type` option](http://configure/options) of the schedule.

![Date selector on mobile and desktop](http://blokks.co/docs/images/dateselector.png)

**See also**
- [Setting date selector](http://configure/dateselector)

#### Options

`Options` lets users sign in to [add favorites](http://favorites) and [see where friends are going](http://friends), [print their schedule](http://configure/print) or import it in their calendar.

![Controls on mobile and desktop](http://blokks.co/docs/images/controls)

#### Controls

Users can scroll through [stages](http://themes/structure/locations) with the control buttons. The `controls` are visible on desktop when the [layout is set to `column`](http://design/layouts) and always on mobile devices.

![Controls on mobile and desktop](http://blokks.co/docs/images/controls)

### Timetables

A single day of a event is represented by the `timetable` component, which is made out of the [`dashboard`](http://themes/dashboard), [`locations`](http://themes/location), [`activities`](http://themes/activity) and a `time indicator` component.

![Timetable on desktop](https://blokks.co/docs/images/dashboard.png)

If a `timetable` has today’s date it is automatically selected. The `time indicator` is visible and scrolled into view so that current speakers are shown. You can disable this by setting the `data-autoscroll` option of the schedule.

**See also**
- [Setting testflight](http://configure/testflight)

### Dashboard

On days of the event the `dashboard` component is shown on mobile devices. The component shows now playing speakers or bands and the ones coming up next.

![Blokks mobile dashboard](https://blokks.co/docs/images/dashboard.png)

*Some components (for example, the `dashboard` and `time indicator`) are only visible during the event. And therefor difficult to test or to style. However you can enable them anytime by setting the [`data-testflight` option of the schedule](http://configure/options)*

**See also**
- [Block, Element, Modifier](http://themes/bem)
- [Favorites](http://favorites)
- [Setting testflight](http://configure/testflight)
  
### Locations

The `location` component represents a single stage of your event. Basically it’s a list of [`activities`](http://themes/activity) sorted by time.

![Blokks locations](https://blokks.co/docs/images/dashboard.png)

### Activities

`Activities` like speakers, talks, bands and singers are represented by the `activity` component. Its position and its size describe the start and duration of the activity.

![Blokks activities](https://blokks.co/docs/images/dashboard.png)

Selecting an activity will show the [`activity details`](http://themes/activitydetails) component:

**See also**
- [Activity popup](http://gettingstarted/activity)
- [Activity details](http://themes/activity-details)
- [Favorites](http://favorites)

### Activity details

The `activity details` component is a modal presented when an [`activity`](http://themes/activity) is selected. 

It shows all information about the selected speaker, talk, band or performance. This includes titles, subtitles, times, descriptions, photos, links and embeds.

![Blokks activity details](https://blokks.co/docs/images/details.png)

**See also**
- [Activity popup](http://gettingstarted/activity)
- [Favorites](http://favorites)

### Notifications & Alerts

`Notifications` and `alerts` are shown when we need immediate attention. For example, showing instructions when a user wants to [sign in](http://embed/favorites). Or displaying and error when something went wrong (user failed to sign in).

Like [`activity details`](http://themes/structure#activity-details), `notifications` and `alerts` are presented as a modal component.


## Block, Element, Modifier

Now that you’re familiar with [the structure of the embedded schedule](https://themes/structure) we can have a look at the clasnames of its HTML elements. We use a simple naming convention thought up by the guys at [Yandex](https://tech.yandex.com/bem/) called `Block, Element, Modifier`, or simply `BEM`. 

It provides a way to arrange your CSS classes into modules or components. Basically `BEM` follows this pattern:

```
<style>
	.block {
	}

	.block__element {
	}
	
	.block--modifier {
	}
</style>
```

| Classname | Description |
|-----------|-------------|
| `.block` | Represents the higher level of an abstraction or component. |
| `.block__element` | Represents a descendent of `.block` that helps form `.block` as a whole. |
| `.block--modifier` | Represents a different state or version of `.block`. |

Although `BEM` may look weird at first with its `__`, `--` and long classnames. It avoids nesting and provides scope by using unique CSS classes per element. 

Visit [the official `BEM` website](http://getbem.com/naming/) if you want learn more.

### CSS Specificity

If multiple CSS selectors are targeting the same HTML element and are trying to assign the same property, the selector with the highest CSS specificity value will “win”.

In other words, the most specific selector gets to assign its property values to the target element: 

```
<styles>
	#main .header > h1 {
		color: palevioletred;
	}
	
	.header h1.title {
		font-family: “Helvetica”;
		color: red;
	}
</styles>
```

In this case `#main .header > h1` is more specific than `.header h1.title`. So the text in `<h1 class=“title”>` is shown in `Helvetica` and `palevioletred`. 

Although the example is easy to understand, you can imagine that specific selectors like this adds complexity which can lead to conflicts and unwanted styling. 

`BEM` reduces style conflicts by keeping specificity to a minimum. With `BEM`, specificity is determined only by the order of the CSS rules. Rules which are defined later have higher precedence over those defined earlier. 

I guess that’s it ✌️ 

So add your `<style>` or `<link>` tag after the BLOKKS import and you’re good to go. 
  
### CSS Scoping

In addition to reducing specificity, `BEM` provides some sort of scope by using *unique* CSS classes per element. Together with prefixing our classes with `.blokks` it avoids conflicts with your existing classnames.

Unfortunately there are two exceptions which still can cause conflicts with your website’s styling: the `!important` rule and `type selectors`.

In general the `!important` rule is bad practice and should be avoided when styling your website:

> When an important rule is used on a style declaration, this declaration overrides any other declarations. 

> Although technically `!important` has nothing to do with specificity, it interacts directly with it. Using `!important`, however, is bad practice and should be avoided because it makes debugging more difficult by breaking the natural cascading in your stylesheets.

> Source: [Mozilla.org - The !important exception](https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity#The_!important_exception)

CSS `type selectors` match elements by node name. A `type selector` for a particular element selects all elements of that type. Although type selectors adds little specificity it can add unwanted stylinh because of the cascading nature of CSS. Therefor it’s recommended to apply styles by unique CSS classes instead of your element structure.

**See also**
- [Get BEM](http://getbem.com/)
- [CSS Specificity](https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity)
- [Understanding CSS: Selector Specificity](https://medium.com/@dte/understanding-css-selector-specificity-a02238a02a59)
- [Support for BEM Modules in Sass 3.3](http://mikefowler.me/journal/2013/10/17/support-for-bem-modules-sass-3.3)
- [PostCSS plugin implementing BEM as at-rules](https://github.com/kezzbracey/postcss-bem)

## Blokks styling


- BEM and Blokks
- CSS modifiers
- Pro-tip: Download CSS
- Note: `margin-top: -1px;` voor timeslots

**See also**
- [Block, element, modifier](http://themes/bem)
- [Template CSS](http://github.com/patrickpietens/blokks-template)
- 

## Preloader

One of our main priorities is to load your schedule as fast as possible on desktop and mobile devices. But it can happen, that during an event the internet connection is unreliable and slow. 

We’ve all been there.

In that case, you want to show a `preloader` to let your users know that it may take longer than expected. Just add your own `preloader` markup to the `<div id=“blokks”>` container. 

For example: 

```
<div id=‘blokks’>
	<span>Loading…</span>
	<svg><use xlink:href=“assets.svg#preloader”></use></svg>
</div>
```

*Please note that the `preloader` isn’t part of the [structure of the embed](http://theme/structure), and is replaced with the embed when all data is loaded.*

**See also**
- [Embedding your schedule](http://embed/code)
- [Replace icons](http://design/iconset#spritesheets)
- [Cache](http://configure/cache)
- [Offline support](http://configure/offline)


## Pseudo-elements

With `pseudo-elements` you can extend the structure of the schedule with CSS. `Pseudo-elements` will add extra elements *before* and *after* the element’s content. These elements are visible to the user and are styleable with CSS. 

Adding `:before` and `:after` is technically the same as:

```
<div>
	<span>:before</span> 
	  This the main content. 
	<span>:after</span>
</div>
```

Without the `content` property `pseudo-elements` won’t be rendered. To make them visible set the `content` property of the element. Once visible you can change its colors, adding background images, setting font properties, specify dimensions etc.

```
	.blokks-selector:before {
		display: block;
		width: 100px;
		height: 50px;
		background-color: palevioletred;
		content: “”;
	}
	
	.blokks-selector:after {
		position: absolute;
		top: 0;
		left: 100px;
		content: “”;
	}
```

*By default `pseudo-elements` are inline-level elements. Don’t forget to change it to `display: block` or `display: inline-block` when setting `width` and `height` properties.*

**See also**
- [A Whole Bunch of Amazing Stuff Pseudo Elements Can Do](https://css-tricks.com/pseudo-element-roundup/)
- [Browser support](http://configure/browsersupport)


## Showcase
TNW2017
Dutch Embassy













# Configure your schedule (Patje)

- Preloader
- Date selector
- Disabling features
  - Hide the controls
  - Hide the dashboard
    - Note: More information about the dashboard: 
      `> Design your schedule > Testflight`
  - Hide “export to ical” button
  - Hide images in acts
  - Hide print button
  - Note: More information about configuring your embed:
     `> Configure your schedule > Options`
- Update the timescale
- Accessibility
- Favorites
  - Choose your social provider
    - Facebook
    - Twitter
    - LinkedIn
  - Enable friends
    - Note: Friends don’t work with LinkedIn
- Auto scrolling
- Auto update
- Local scroll
  - Note: Sticky headers won’t work with localscrolling enabled:
     `> Configure your schedule > Browser support`
- Set date format
- Add your own copy and translations
- Print options
	- Orientation
	- disable print
- Caching
  - Why is caching enabled
  - Override cache with `?preview` querystring
  - Using CDN to deliver assets
- Testflight your embed
  - Dashboard
    - Note: More information about the dashboard:
      `Design your schedule > dashboard`
  - Time indicator
  - Note: Don’t forget to disable testflight on production
- Offline support with ServiceWorkers
  - Images are cached on the clientside
  - What do you need to enable offline support
  - Note: More information on ServiceWorkers: https://developers.google.com/web/fundamentals/getting-started/primers/service-workers
- Auto calculate size of acts
  - Adds modifiers describing the size of the act
  - Note: Disable this feature for faster rendering

- Browser  support
  - Modern browsers
  - Flexbox
    - http://caniuse.com/#feat=flexbox
	- Pseudo elements
  - CSS Variables
    - http://caniuse.com/#search=CSS%20Variables
    - Fallback: Use CSS classes to style the embed. For more information about styling using classes: `> Create your theme > Block Element Modifier`
    - Use PostCSS > PostCSS custom properties
	    - https://github.com/postcss/postcss-custom-properties
  - Sticky headers
    - Why doesn’t my headers stick
    - Sticky headers won’t work with local scrolling enabled
    - http://caniuse.com/#search=sticky
  - Fallback options 
  - Polyfills
    - https://github.com/mzabriskie/axios/blob/master/UPGRADE_GUIDE.md#es6-promise-polyfill
    - https://github.com/stefanpenner/es6-promise
    - https://github.com/paulirish/matchMedia.js/
    - https://github.com/WICG/IntersectionObserver/tree/gh-pages/polyfill
    - 
  - CORS problemen in browser uitleggen
    - Dat ene Chrome issue wat Niek had: `Menu → Settings → Show Advanced Settings... → Privacy: Content Settings` 
