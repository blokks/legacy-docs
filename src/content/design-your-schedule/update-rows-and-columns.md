+++
date            = "2017-09-13T11:31:19+02:00"
author          = "@patrickpietens"

title           = "Row & column sizes"
description     = "You can use CSS variables to adjust the size of rows and columns of your schedule."
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

Depending on [your layout]({{< relref "choose-your-layout.md" >}}), you can use *CSS variables* to update the size of rows and columns of your schedule. These CSS variables are:

| Column properties | Description |
|-------------------|-------------|
| **--blokks-table-header-height** | Sets the height of the [Location]({{< relref "basic-structure.md#location" >}}) header. The default value is `auto` |
| **--blokks-table-cell-height** | Sets the height of a single timeslot/tablecell. The default value is `100px` |
| **--blokks-table-column-width** | Sets the width of a single *Location*. The default value is `265px` |
| **--blokks-time-captions-width** | Sets the width of the sidebar represented by the sidebar. The default value is `60px`

| Row properties | Description |
|----------------|-------------|
| **--blokks-table-header-width** | Sets the width of the location title represented by a table header. The default value is `120px`. Titles are truncated when they are too big to display. |
| **--blokks-table-cell-width** | Sets the width of a single timeslot represented by a table cell. The default value is `120px`. |
| **--blokks-table-row-height** | Sets the height of a location represented by a table row. The default value is `115px`. |
| **--blokks-time-captions-height** | Sets the height of the time captions represented the top bar. The default value is `30px`. |

## Timescale
Sometimes changing the width or height of elements is not sufficient. Some acts are too small while others are too big. This is where the [`data-timescale`]({{< relref "time-scale.md" >}}) option comes in. Basically, the timescale option sets the duration of a single timeslot/tablecell. [Read more about timescale and how to use it]({{< relref "time-scale.md" >}}).