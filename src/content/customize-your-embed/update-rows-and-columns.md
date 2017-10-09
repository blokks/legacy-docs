+++
date            = "2017-09-13T11:31:19+02:00"
author          = "@patrickpietens"

title           = "Row & column sizes"
description     = "You can use CSS variables to adjust the size of the rows and columns of your schedule."
keywords        = ["blokks", "design", "embed", "template", "layout", "sizes", "row", "columns"]
weight          = 405

[menu.main]
parent          = "customize-your-embed"

[[related]]
title = "Customize your embed: Choose your layout"
url = "choose-your-layout.md"

[[related]]
title = "Advanced options: Set the timescale of the embed"
url = "time-scale.md"

[[related]]
title = "Customize your embed: Using CSS classes"
url = "using-css-classes.md"

[[related]]
title = "Known issues: CSS variables"
url = "known-issues.md#customproperties"
+++

Depending on [your layout]({{< relref "choose-your-layout.md" >}}), you can use *CSS variables* to update the size of the rows and columns of your schedule. These CSS variables are:

| Column properties | Description |
|-------------------|-------------|
| **--blokks-table-header-height** | Sets the height of the *Location* header. The default value is `auto`. |
| **--blokks-table-cell-height** | Sets the height of a single timeslot/table cell. The default value is `100px`. |
| **--blokks-table-column-width** | Sets the width of a single *Location*. The default value is `265px`. |
| **--blokks-time-captions-width** | Sets the width of the time captions represented by the sidebar. The default value is `60px`.

| Row properties | Description |
|----------------|-------------|
| **--blokks-table-header-width** | Sets the width of the location title represented by a table header. The default value is `120px`. Titles are truncated when they are too big to display. |
| **--blokks-table-cell-width** | Sets the width of a single timeslot/table cell. The default value is `120px`. |
| **--blokks-table-row-height** | Sets the height of a location represented by a table row. The default value is `115px`. |
| **--blokks-time-captions-height** | Sets the height of the time captions represented by the top bar. The default value is `30px`. |

## Timescale
Sometimes changing the width or height of elements is not sufficient. Some [activities]({{< relref "basic-structure.md#activity" >}}) are too small while others are too big. This is where `data-timescale` comes in. Basically, [the timescale option]({{< relref "time-scale.md" >}}) sets the duration of a single timeslot.