+++
date            = "2017-09-13T11:31:19+02:00"
author          = "@patrickpietens"

title           = "Replace icons"
description     = "To replace the default icons we need to create a new own icon set."
keywords        = ["blokks", "design", "embed", "template", "icons", "svg"]
weight          = 408

[menu.main]
parent          = "design-your-schedule"

[[related]]
title = "Configure your embed"
url = "http://configure/options#icon-set"

[[related]]
title = "Icon System with SVG Sprites"
url = "https://css-tricks.com/svg-sprites-use-better-icon-fonts/"

[[related]]
title = "SVG symbol a Good Choice for Icons"
url = "https://css-tricks.com/svg-symbol-good-choice-icons/"

[[related]]
title = "Inline SVG vs Icon Fonts"
url = "https://css-tricks.com/icon-fonts-vs-svg/"

[[related]]
title = "SVG and CSS"
url = "https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/SVG_and_CSS"

[[related]]
title = "Installing Node.js"
url = "https://nodejs.org/en"

[[related]]
title = "Installing SVGO"
url = "https://github.com/svg/svgo"

[[related]]
title = "Installing SVGOMG"
url = "https://jakearchibald.github.io/svgomg/"

[[related]]
title = "Installing SVG-Sprite"
url = "https://github.com/jkphl/svg-sprite"

[[related]]
title = "SVGO Sketch Plugin"
url = "https://github.com/BohemianCoding/svgo-compressor"

[[related]]
title = "SVGO Illustrator Plugin"
url = "https://github.com/davidderaedt/SVG-NOW"
+++

All icons we use in our schedules are *SVG*. *SVG* files are vector based, which means your icons will look stellar on all devices and resolutions. Secondly, since *SVG* files are *XML* files, they’re are highly compressible and featherlight to load. And last but not least, *SVG* files are completely styleable with CSS.

To replace the default icons we need to create a new own icon set. An icon set contains the following files:

| filename | description |
|----------|-------------|
| **arrow-down-icon.svg** | Down arrow used in the [Controls](http://themes/structure#controls) component |
| **arrow-left-icon.svg** | Left arrow used in the [Controls](http://themes/structure#controls) component |
| **arrow-right-icon.svg** | Right arrow used in the [Controls](http://themes/structure#controls) component |
| **arrow-up-icon.svg** | Up arrow used in the [Controls](http://themes/structure#controls) component |
| **close-icon.svg** | The symbol used in the close button of the [Activity Details component](http://themes/structure#activity-details) |
| **dropdown-icon.svg** | Symbol used when the [Date Selector component](http://themes/structure#date-selector) is a dropdown menu |
| **favorite-icon.svg** | Symbol which is used to indicate the favorite action |
| **unfavorite-icon.svg** | Symbol which is used to indicate the unfavorite action |

<span class='note'>You should note that the embed uses the CSS `fill` property to style icons. Convert all shapes to fills when creating your own icons. Also, fill colors set in tools like [Sketch](https://www.sketchapp.com/) or [Adobe Illustrator](http://www.adobe.com/nl/products/illustrator.html) are overriden by CSS.</span>

## Optimizing SVGs
*SVG* files, especially exported from tools like [Sketch](https://www.sketchapp.com/) or [Adobe Illustrator](http://www.adobe.com/nl/products/illustrator.html) contain a lot of information which can be safely removed or converted without affecting rendering result. Optimizing and compressing your *SVGs* is simply done with a command-line tool called *SVGO*. *SVGO* requires [Node.js](https://nodejs.org/en/) installed on your computer.

If [Node.js](https://nodejs.org/en/) is installed, run the following command from your console:

```cli
npm install -g svgo
```

This will install *SVGO*. After installing, *SVGO* can be run with the following command:

```cli
svgo -f path/to/folder/with/svg/files
```

This command will use the default *SVGO* settings to compress and override all files in the **path/to/folder/with/svg/files** folder. Make sure your replace **path/to/folder/with/svg/files** with the directory containing your svg files.

![Image: Optimizing SVGs](http://images/optimizing-svgs.gif)

<span class='note'>[SVGOMG](https://jakearchibald.github.io/svgomg/) is a webbased interface which allows you to drag & drop your *SVG* files and get an optimized version. There are also *SVGO* plugins for both [Sketch](https://github.com/BohemianCoding/svgo-compressor) and [Adobe Illustrator](https://github.com/davidderaedt/SVG-NOW).</span>

## Create spritesheets
*Spritesheets* combine multiple images into a single file. A website using *spritesheets* loads faster because it has to load just one, instead of multiple images. To create a spritesheet we use another command-line tool named *svg-sprite*. Again, [Node.js](ttps://nodejs.org/en) is required for this.

First, install *svg-sprite* by running the following command:

```cli
npm install -g svg-sprite
```

After installing *svg-sprite*, run:

```cli
svg-sprite --symbol --svg-xmldecl=false --shape-transform='' --symbol-dest='.' --symbol-sprite='icon-set.svg' --symbol-example=false path/to/folder/with/svg/files/*.svg
```

This will merge all the *SVGs* into one file named **icon-set.svg**. Just one thing left to do: tell the embed to use the new icon set by setting the data-icon-set=“path/to/icon-set.png“. Make sure your replace **path/to/folder/with/svg/files/\*.svg**` with the directory containing your *SVG* files.

And that’s all there is to it! 🤘

![Image: Create spritesheets](http://images/optimizing-svgs.gif)

<span class='note'>[IcoMoon](https://icomoon.io/app) is a webbased interface that does a great job of producing *SVG* spritesheets. Drag & drop your *SVGs* and export them as a spritesheet.</span>

## Styling SVGs
Replacing icons may cause them to be too big or too small. Like [changing the fonts](http://design/fonts) we can fix this by selecting the icon in the *Developers Tools* and change its size.

For example, this will resize the close icon to `50px` of the *Activity details* component:

```css
.blokks-activity-details__close-button .svg-icon {
  width: 50px;
  height: 50px;
}
```