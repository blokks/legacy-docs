+++
date            = "2017-09-15T11:31:19+02:00"
author          = "@patrickpietens"

title           = "Basic structure"
description     = "The timetable embed is split into smaller, independent pieces called components, which in turn are split into even smaller components."
keywords        = ["blokks", "templates", "themes", "structure", "naming conventions", "bem"]
weight          = 503

[menu.main]
parent          = "create-templates"

[[related]]
title = "Block, Element, Modifier"
url = "http://themes/bem"

[[related]]
title = "Animations"
url = "http://themes/animations"

[[related]]
title = "Favorites"
url = "favorites.md"

[[related]]
title = "Activity details"
url = "basic-structure.md#activity-details"

[[related]]
title = "Setting date selector"
url = "http://configure/dateselector"

[[related]]
title = "Hiding components"
url = "http://configure/hiding-components"

[[related]]
title = "Media queries"
url = "http://configure/mq"

[[related]]
title = "Embed options"
url = "http://configure/options"

[[related]]
title = "Testflight"
url = "http://configure/options"

[[related]]
title = "Auto scrolling"
url = "http://configure/auto-scroll"
+++

The timetable embed is split into smaller, independent pieces called components, which in turn are split into even smaller components. Each component has [a unique CSS class](http://), which makes is easy to style them separately. 

The main components are:

![Image: Basic structure for row and column layout](https//blokks.co/docs/structure-desktop.gif)

## Date selector
The *Date Selector* component is visible when your event has multiple dates. Visitors will use this component to switch between dates. On desktop the Date Selector is shown as a *Button Bar*. On mobile, it switches to a *Dropdown* menu. You can change this by setting the [`date-selector-type`](http://configure/options) of the schedule.

![Image: Date selector on mobile and desktop](http://blokks.co/docs/images/dateselector.png)

## Category filter
The *Category Filter* component shows all categories used by the schedule. Visitors can use this component to filter sessions or talks by selecting categories. Sessions that do not match the selected category are filtered out.

This component will be automatically hidden when there are no categories added to the schedule.

## Options
The *Options* component lets visitors sign in to [add favorites]({{< relref "favorites.md" >}}), [see where friends are going](http://friends), [print their schedule](http://configure/print) or add the schedule to their calendar.

![Image: Controls on mobile and desktop](http://blokks.co/docs/images/controls)

## Controls
Visitors can scroll through [stages]({{< relref "basic-structure.md#location" >}}) with the control buttons. The *Controls* are visible on desktop when [`data-layout`]({{< relref "choose-your-layout.md" >}}) option is set to `columns`. They're always visible on mobile devices.

![Image: Controls on mobile and desktop](handheldttp://blokks.co/docs/images/controls)

In some cases it’s not necessary to show the controls. For example, when your event only has one or two stages. You can easily hide the controls by setting the [`data-hide-controls`](http://configure/hidding-elements) option.

<span class='note'>Note: When the schedule is viewed on very large displays, the whole schedule might fit on a single screen. In those cases it's best to hide the controls with media queries and CSS instead of the [`data-hide-controls`](http://configure/hidding-elements) option.</span>

## Timetable
A single day of your event is represented by the *Timetable* component, which consist of a [Dashboard]({{< relref "basic-structure.md#dashboard" >}}), [Locations]({{< relref "basic-structure.md#location" >}}), [Activities]({{< relref "basic-structure.md#activities" >}}) and [Time Indicator]({{< relref "basic-structure.md#time-indicator" >}}) component.

![Image: Timetable on desktop](https://blokks.co/docs/images/dashboard.png)

If one of your schedule's dates is the same as today’s date, it's automatically selected. Also, the Time Indicator will then be visible and scrolled into view. That way, speakers or acts that are currently performing will be shown when the schedule is opened. You can disable this by setting [`data-autoscroll`](http://configure/options).

<span class='note'>Some components, for example, the [Dashboard]({{< relref "basic-structure.md#dashboard" >}}) and [Time Indicator]({{< relref "basic-structure.md#time-indicator" >}}), are only visible during the event and difficult to test or style. However, you can enable them anytime by setting [`data-testflight`](http://configure/options).</span>

## Dashboard
During the event, the *Dashboard* component is shown on mobile devices. The component shows speakers or acts that are now active, and the ones that are coming up next.

<span class='note'>You can disable the Dashboard component by setting [`data-hide-dashboard`](http://configure/hide-elements) to `true`.</span>

![Image: Blokks mobile dashboard](https://blokks.co/docs/images/dashboard.png)

## Location
The *Location* component represents a single stage of your event. Basically, it’s a list of [Activities]({{< relref "basic-structure.md#activity" >}}), sorted by time.

![Image: Blokks locations](https://blokks.co/docs/images/dashboard.png)

## Activity
Speakers, talks, acts, artists and performances are represented by the *Activity* component. Its position and size show the start and duration of the activity and are automatically calculated by the embed.

![Image: Blokks activities](https://blokks.co/docs/images/dashboard.png)

Selecting an *Activity* will show the [Activity Details](http://themes/activitydetails) component:

## Activity details
The *Activity Details* component is a modal presented when an [Activity]({{< relref "basic-structure.md#activity" >}}) is selected. It shows all [information]({{< relref "manage-your-acts.md" >}}) about the selected act or talk. This includes titles, subtitles, times, descriptions, photos, links and embeds.

![Image: Blokks activity details](https://blokks.co/docs/images/details.png)

## Notifications & Alerts
*Notifications* and *Alerts* are small modals used to show instructions when a visitor wants to [sign in](http://embed/favorites), or to display an an error when something went wrong.

## Time indicator
The *Time Indicator* is only visible during the event and shows, as the name suggest, the current time. 

<span class='note'>You can test the time indicator by setting the [`data-testflight` option](http://configure/options#testflight)</span>