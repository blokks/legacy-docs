+++
date            = "2017-09-12T11:31:19+02:00"
author          = "@patrickpietens"

title           = "Choose your layout"
description     = "On desktop our embed has two layout directions: columns and rows."
keywords        = ["blokks", "design", "embed", "template", "layout", "colors", "fonts", "icons"]
weight          = 403

[menu.main]
parent          = "design-your-schedule"

[[related]]
title = "Create templates: Create your own layout"
url = "http://themes/layout"

[[related]]
title = "Create templates: Dashboard"
url = "http://themes/dashboard"

[[related]]
title = "Create templates: Date selector"
url = "http://themes/dateselector"

[[related]]
title = "Configure your schedule: More configuration options"
url = "http://configure"

[[related]]
title = "Configure your schedule: Setting default breakpoint"
url = "http://theme/breakpoint"

[[related]]
title = "Browser support"
url = "http://browsersupport"

[[related]]
title = "Using media queries"
url = "https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries"
+++

## Desktop
On desktop our embed has two layout directions: the first direction is **columns** where stages are arranged horizontally. This is also the default direction of the embed. The second one is **rows** where stages are stacked vertically.

![Image: Row vs. column layout](https://blokks.co/docs/images/rowsandcolumns.gif)

You can change the layout direction at any time by selecting the layout in the [*design tab*]({{< relref "configure-your-embed.md" >}}) of our backend or by setting it manually with the [**data-layout**](http://configure/options) option:

```html
<script defer src='https://themes.blokks.co/...'
  data-blokks-id='1'
  data-layout='rows'>
</script>
```

A good example of the **columns** layout is the schedule that [The Next Web](https://blokks.co/schedules/tnw2017) built. The **rows** layout is implemented by [De Correspondent](https://decorrespondent.nl/evenementen/7/festival-der-vooruitgang/programma) built.

## Mobile
On mobile devices your schedule is automatically shown in a list view. However, visitors can switch back to the full schedule by rotating their device to *landscape mode*:

![Image: Portrait vs. landscape mode](https://blokks.co/docs/images/animation.gif)

The default breakpoint for switching between mobile and desktop view is **480px** or **16em**. This works best for support on all devices. Of course you [change this value](http://configure/breakpoints) if you want.

For events with a lot of stages and acts the list can become long. Which can be quite annoying if you want to find out which speaker or band is coming up next. Therefor, on the day itself the mobile version of the embed will show our [*dashboard*](http://design/dashboard):

![Image: Mobile dashboard](http://dashboard.png)

The dashboard is a summary of acts which are playing now and coming up next. Read more about the dashboard in [create templates](http://themes/structure#dashboard).

<span class='note'>If you are [creating your own template](http://themes/intro) and don’t want to use the **columns** or **rows** layout, set the `data-layout` property to **custom**.</span>