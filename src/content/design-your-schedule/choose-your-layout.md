+++
date            = "2017-09-12T11:31:19+02:00"
author          = "@patrickpietens"

title           = "Layout"
description     = "On desktop, the embed has two layouts: a column layout and a row layout. On mobile, the schedule is shown in a list view."
keywords        = ["blokks", "design", "embed", "template", "layout", "colors", "fonts", "icons"]
weight          = 403

[menu.main]
parent          = "design-your-schedule"

[[related]]
title = "Create your own layout"
url = "http://themes/layout"

[[related]]
title = "Dashboard"
url = "http://themes/dashboard"

[[related]]
title = "Date selector"
url = "http://themes/dateselector"

[[related]]
title = "More configuration options"
url = "http://configure"

[[related]]
title = "Setting the default breakpoint"
url = "http://theme/breakpoint"

[[related]]
title = "Using media queries"
url = "MDN: https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries"
+++

## Desktop
On desktop, the embed has two layouts: the first direction being the *column* layout where stages are arranged horizontally. This is the default direction of the embed. The second is the *row layout* where stages are stacked vertically.

![Image: Row vs. column layout](https://blokks.co/docs/images/rowsandcolumns.gif)

You can change the layout direction at any time by switching the layout in the [embed tab]({{< relref "configure-your-embed.md" >}}) of our backend or by setting it manually with the **data-layout** option:

```html
<script defer src='https://themes.blokks.co/...'
  data-layout='rows'>
</script>
```

A good example of the column layout is the schedule that [The Next Web](https://blokks.co/schedules/tnw2017) built. An example of the row layout was implemented by [De Correspondent](https://decorrespondent.nl/evenementen/7/festival-der-vooruitgang/programma).

## Mobile
On mobile devices your schedule is automatically shown in a list view. However, visitors can switch back to the full schedule by rotating their device to *landscape mode*.

![Image: Portrait vs. landscape mode](https://blokks.co/docs/images/animation.gif)

The default breakpoint for switching between mobile and desktop view is **480px** or **16em**. This works best on all devices. If needed, you can [change this value](http://configure/breakpoints).

For events with a lot of stages and acts this list can become quite long. Therefore, during the day or days of your event the mobile version of the embed will show the [dashboard](http://design/dashboard). The dashboard is a summary of acts that are playing now and coming up next. Read more about the dashboard in [this section](http://themes/structure#dashboard).

![Image: Mobile dashboard](http://dashboard.png)

<span class='note'>Note: If you are [creating your own template](http://themes/intro) and don’t want to use the column or row layout, set the `data-layout` property to **custom**.</span>
