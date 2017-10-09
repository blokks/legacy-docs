+++
date            = "2017-09-13T11:31:19+02:00"
author          = "@patrickpietens"

title           = "All CSS variables"
description     = "Use Developer tools to find a list of all CSS variables."
keywords        = ["blokks", "design", "embed", "template", "style", "class", "css"]
weight          = 409

[menu.main]
parent          = "customize-your-embed"
+++

Besides colors, fonts and sizes, there are more *CSS variables* that you can change. To get a list of all properties, right click anywhere on your page, open the *Developer tools* by clicking *Inspect* and select the `<html>` tag:

{{< video src="videos/customize-your-embed-all-css-variables.mp4" width="1794" height="1158" title="Showing all properties using the Inspector" >}}

<span class='note'>Pro-tip: Changes made to CSS variables are rendered live while adjusting them in the Developer tools. Note that these changes are temporary and will be lost when refreshing or closing the window. So don’t forget to copy and paste them in your code when you’re done.</span>

| CSS Variables                     | Description           |
|-----------------------------------|-----------------------|
`--blokks-default-font`             | The default font is used for stage names, the date selector, titles and descriptions.
`--blokks-secondary-font`           | The secondary font is used for times, categories, links and buttons.
`--blokks-theme-color`              | The theme color is used for titles, the date selector, favorites, hover states, etc. The default value is `#2e8cd2`.
`--blokks-default-background-color` | The default background color is the main background color used for your embed. The default value is `#fff`.
`--blokks-dark-background-color`    | The dark background color is used for activities. It's also the color shown behind images before they load or if the images have opacity. The default value is `#33363b`.
`--blokks-default-text-color`       | The default text color is used for subtitles and descriptions. The default value is `#33363b`.
`--blokks-light-text-color`         | The light text color is used for text shown in activities. The default value is `#fff`.
`--blokks-dimmed-text-color`        | The dimmed text color is used for times, categories, buttons and links. The default value is `#989da8`.
`--blokks-stroke-color`             | The stroke color is used for all strokes shown in the schedule. The default value is `hsla(221,8%,63%,.6)`.
`--blokks-table-header-border`      | The border styling used for the borders shown in the schedule header. The default value is `1px dashed hsla(221,8%,63%,.3)`.
`--blokks-table-cell-border`        | The border styling used for the borders on each cell in your schedule. The default value is `1px dashed hsla(221,8%,63%,.3)`.
`--blokks-table-header-height`      | This variable is used to adjust the height of your schedule header. The default value is `auto`.
`--blokks-table-cell-height`        | This variable is used to adjust the height of each cell. The default value is `100px`.
`--blokks-time-captions-width`      | This variable is used to adjust the width of the content shown on the left of your schedule. The default value is `60px`.
`--blokks-table-column-width`       | This variable is used to adjust the width of each column. The default value is `265px`.
