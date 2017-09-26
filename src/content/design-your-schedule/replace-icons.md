+++
date            = "2017-09-13T11:31:19+02:00"
author          = "@patrickpietens"

title           = "Icons"
description     = "Replacing the default Blokks icons."
keywords        = ["blokks", "design", "embed", "template", "icons", "svg"]
weight          = 408

[menu.main]
parent          = "design-your-schedule"

[[related]]
title = "MDN: SVG and CSS"
url = "https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/SVG_and_CSS"

[[related]]
title = "Github: SVGO Sketch Plugin"
url = "https://github.com/BohemianCoding/svgo-compressor"

[[related]]
title = "Github: SVGO Illustrator Plugin"
url = "https://github.com/davidderaedt/SVG-NOW"

[[related]]
title = "CSS-Tricks: Icon System with SVG Sprites"
url = "https://css-tricks.com/svg-sprites-use-better-icon-fonts/"

[[related]]
title = "CSS-Tricks: SVG symbol a Good Choice for Icons"
url = "https://css-tricks.com/svg-symbol-good-choice-icons/"

[[related]]
title = "CSS-Tricks: Inline SVG vs Icon Fonts"
url = "https://css-tricks.com/icon-fonts-vs-svg/"
+++

All icons used in the schedule are *SVG*. SVG files are vector based, which means your icons will look stellar on all devices and resolutions. Secondly, since SVG files are *XML* files, they’re are highly compressible and featherlight to load. And last but not least, SVG files are completely styleable with CSS.

To replace the default Blokks icons we need to create a new icon set. An icon set contains the following files:

| filename | description |
|----------|-------------|
| **arrow-down-icon.svg** | Down arrow used in the [Controls](http://themes/structure#controls) component |
| **arrow-left-icon.svg** | Left arrow used in the [Controls](http://themes/structure#controls) component |
| **arrow-right-icon.svg** | Right arrow used in the [Controls](http://themes/structure#controls) component |
| **arrow-up-icon.svg** | Up arrow used in the [Controls](http://themes/structure#controls) component |
| **close-icon.svg** | The symbol used in the close button of the [Activity Details component](http://themes/structure#activity-details) |
| **dropdown-icon.svg** | Symbol used when the [Date Selector component](http://themes/structure#date-selector) is a dropdown menu |
| **favorite-icon.svg** | Symbol used to indicate the favorite action |
| **unfavorite-icon.svg** | Symbol used to indicate the unfavorite action |

<span class='note'>You should note that the embed uses the CSS `fill` property to style icons. Convert all shapes to fills when creating your own icons. Also, fill colors set in tools like Sketch or Adobe Illustrator are overriden by CSS.</span>

## Optimizing SVGs
SVG files, especially when exported from tools like Sketch or Adobe Illustrator contain a lot of information that can be safely removed or converted without affecting rendering result. Optimizing and compressing your SVGs is simply done with a command-line tool called *SVGO*. SVGO requires you to have [Node.js](https://nodejs.org/en/) installed on your computer.

If Node.js is installed, run the following command from your console:

```cli
npm install -g svgo
```

This will install SVGO. After installing, SVGO can be run with the following command:

```cli
svgo -f path/to/folder/with/svg/files
```

This command will use the default SVGO settings to compress and override all files in the **path/to/folder/with/svg/files** folder. Make sure your replace **path/to/folder/with/svg/files** with the directory containing your svg files.

![Image: Optimizing SVGs](http://images/optimizing-svgs.gif)

<span class='note'>[SVGOMG](https://jakearchibald.github.io/svgomg/) is a webbased interface which allows you to drag & drop your SVG files and get an optimized version. There are also SVGO plugins for both Sketch and Adobe Illustrator.</span>

## Create spritesheets
*Spritesheets* combine multiple images into a single file. A website using spritesheets loads faster because it has to load just one, instead of multiple images. To create a spritesheet we use another command-line tool named *svg-sprite*. Again, [Node.js](ttps://nodejs.org/en) is required for this.

First, install svg-sprite by running the following command:

```cli
npm install -g svg-sprite
```

After installing svg-sprite, run:

```cli
svg-sprite --symbol --svg-xmldecl=false --shape-transform='' --symbol-dest='.' --symbol-sprite='icon-set.svg' --symbol-example=false path/to/folder/with/svg/files/*.svg
```

This will merge all the SVGs into one file named **icon-set.svg**. 

<span class='note'>[IcoMoon](https://icomoon.io/app) is a web-based interface that does a great job of producing SVG spritesheets. You can simply drag & drop your SVGs and export them as a single spritesheet.</span>

![Image: Create spritesheets](http://images/optimizing-svgs.gif)

## Link icons
There's just one thing left to do: tell the embed to use our new iconset. Simply add a link pointing to the iconset to the `<head>` of your page, like so:

```html
<link href='icons.svg' blokks-icons>
```

<<<<<<< HEAD
Make sure you replace `icons.svg` with the location of your iconset. And that’s all there is to it!

## Styling SVGs
Replacing icons can cause them to be too big or too small. Similar to [changing the fonts](http://design/fonts), we can fix this by selecting the icon in the *Developers Tools* and change its size. For example, here's how you can resize the close icon to `50px` of the *Activity details* component:
=======
## Styling SVGs
Replacing icons can cause them to be too big or too small. Similar to [changing fonts](http://design/fonts), we can fix this by selecting the icon in the *Developers Tools* and changing its size.

For example, here's how you can resize the close icon from the *Activity details* component to `50px`:
>>>>>>> copy-updates

```css
.blokks-activity-details__close-button .svg-icon {
  width: 50px;
  height: 50px;
}
```