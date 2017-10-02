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

Besides colors, fonts and sizes, there are more *CSS variables* for you to change. To get a list of all properties, right click anywhere on your page, open the *Developer tools* by clicking *Inspect* and select the `<html>` tag:

{{< video src="videos/customize-your-embed-all-css-variables.mp4" width="1794" height="1158" title="Showing all properties using the Inspector" >}}

<span class='note'>Pro-tip: Changes made to CSS variables are rendered live while adjusting them in the Developer tools. Note that these changes are temporary and will be lost when refreshing or closing the window. So don’t forget to copy and paste them in your code when you’re done.</span>

<!-- | CSS Variables              | Default value         |
|---------------------------------|-----------------------|
--blokks-default-font             | "Liberation Sans Regular",Helvetica,Arial,sans-serif;
--blokks-secondary-font           | "Liberation Mono Regular",Courier,monospace;
--blokks-theme-color              | #2e8cd2
--blokks-default-background-color | #fff
--blokks-dark-background-color    | #33363b
--blokks-default-text-color       | #33363b
--blokks-light-text-color         | #fff
--blokks-dimmed-text-color        | #989da8
--blokks-stroke-color             | hsla(221,8%,63%,.6)
--blokks-table-header-border      | 1px dashed hsla(221,8%,63%,.3)
--blokks-table-cell-border        | 1px dashed hsla(221,8%,63%,.3)
--blokks-table-header-height      | auto
--blokks-table-cell-height        | 100px
--blokks-time-captions-width      | 60px
--blokks-table-column-width       | 265px -->

| CSS Variables                     | Description           |
|-----------------------------------|-----------------------|
`--blokks-default-font`             | Default font
`--blokks-secondary-font`           | Secondary font
`--blokks-theme-color`              | Main color, also used for titles, date selector, favorites, hover states, etc.
`--blokks-default-background-color` | Main background color
`--blokks-dark-background-color`    | Dark background color used for activities, etc.
`--blokks-default-text-color`       | Default text color
`--blokks-light-text-color`         | Light text color used for text shown in activities
`--blokks-dimmed-text-color`        | Dimmed text color used for buttons, times, etc.
`--blokks-stroke-color`             | The stroke color
`--blokks-table-header-border`      | Border styling for the schedule header
`--blokks-table-cell-border`        | Border styling for each cell
`--blokks-table-header-height`      | The height of the header
`--blokks-table-cell-height`        | The height of each cell
`--blokks-time-captions-width`      | The width of the labels shown on the left of the schedule
`--blokks-table-column-width`       | The width of each column



