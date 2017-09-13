+++
date            = "2017-09-13T11:31:19+02:00"
author          = "@patrickpietens"

title           = "Update row and column sizes"
description     = ""
keywords        = ["blokks", "design", "embed", "template", "layout", "sizes", "row", "columns"]
weight          = 405

[menu.main]
parent          = "design-your-schedule"
+++

Depending on [the chosen layout]({{< relref "choose-your-layout.md" >}}), you can use *CSS variables* to update the size of *rows* and *columns* of your schedule.

## Columns
For *columns* layout these properties are:

| Property | Description |
|----------|-------------|
| **--blokks-table-header-height** | Quisque eget erat ligula. Fusce blandit nisi id lobortis mollis. |
| **--blokks-table-cell-height** | Fusce volutpat quam et lacus pharetra pellentesque at et orci. |
| **--blokks-time-captions-width** | Duis ipsum tortor, interdum vel lorem eget. |
| **--blokks-table-column-width** | Vivamus viverra erat id maximus blandit. |

## Rows
And for *rows* layout they are:

| Property | Description |
|----------|-------------|
| **--blokks-table-header-width** | Suspendisse tellus nulla, interdum bibendum ultricies eu. |
| **--blokks-table-cell-width** | Pellentesque tincidunt mattis sagittis. |
| **--blokks-table-cell-height** | Fusce volutpat quam et lacus pharetra pellentesque at et orci. |
| **--blokks-time-captions-height** | Aliquam vulputate justo lorem, a pellentesque metus porttitor id. |
| **--blokks-table-column-height** | Etiam dignissim ut lorem non vulputate. |

## Timescale
Sometimes changing the *width* or *height* alone doesn’t work. Some acts are too small while others are too big. This is where the `data-timescale` option comes in. Basically, the *timescale* sets the duration of a single timeslot. [Read more about timescale and how to use it.](http://configure/options#timescale)

## See also
- [Set the timescale of the embed](http://configure/timescale)
- [Working with CSS Variables in JavaScript](http://cssproperties)
- [Browser support](http://browsersupport#customproperties)
