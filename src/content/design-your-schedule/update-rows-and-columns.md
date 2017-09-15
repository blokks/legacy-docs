+++
date            = "2017-09-13T11:31:19+02:00"
author          = "@patrickpietens"

title           = "Update row & column sizes"
description     = "Depending on the chosen layout, you can use CSS variables to update the size of rows and columns of your schedule."
keywords        = ["blokks", "design", "embed", "template", "layout", "sizes", "row", "columns"]
weight          = 405

[menu.main]
parent          = "design-your-schedule"

[[related]]
title = "Configure your schedule: Set the timescale of the embed"
url = "http://configure/timescale"

[[related]]
title = "Configure your schedule: Browser support"
url = "http://browsersupport#customproperties"
+++

Depending on [the chosen layout]({{< relref "choose-your-layout.md" >}}), you can use CSS variables* to update the size of *rows* and *columns* of your schedule. These *CSS variables* are:

| Column properties | Description |
|-------------------|-------------|
| **--blokks-table-header-height** | Sets the height of the location title. Default value is `auto` |
| **--blokks-table-cell-height** | Sets the height of a single timeslot. Default value is `100px` |
| **--blokks-table-column-width** | Sets the width of a single location. Default value is `265px` |
| **--blokks-time-captions-width** | Sets the width of the sidebar represented by the sidebar. Default value is `60px` 

| Row properties | Description |
|----------------|-------------|
| **--blokks-table-header-width** | Sets the width of the location title represented by a table header. Default value is `120px`. Titles are truncated when they are too big to display. |
| **--blokks-table-cell-width** | Sets the width of a single timeslot represented by a table cell. Default value is `120px` |
| **--blokks-table-row-height** | Sets the height of a location represented by a table row. Default value is `115px` |
| **--blokks-time-captions-height** | Sets the height of the timecaptions represented the top bar. Default value is `30px` |

## Timescale
Sometimes changing the *width* or *height* alone doesn’t work. Some acts are too small while others are too big. This is where the `data-timescale` option comes in. Basically, the *timescale* sets the duration of a single timeslot. [Read more about timescale and how to use it.](http://configure/options#timescale)