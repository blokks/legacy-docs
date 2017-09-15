+++
date            = "2017-09-15T11:31:19+02:00"
author          = "@patrickpietens"

title           = "Basic structure"
description     = "The schedule is split into smaller, independent pieces called components."
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

The embed is split into smaller, independent pieces called components (which in turn are split into smaller components). Each component has [a unique CSS class](http://) which makes them easy to style separately. The main components are:

![Image: Basic structure for row and column layout](https//blokks.co/docs/structure-desktop.gif)

## Date selector
The *Date Selector* component is visible when your event has multiple dates. Use this component to switch between those. On desktop computers the Date Selector is shown as a *Button Bar*. On mobile devices dates it switches to a *Dropdown* menu. 

<span class='note'>You can change this by setting the [`date-selector-type`](http://configure/options) of the schedule.</span>

![Image: Date selector on mobile and desktop](http://blokks.co/docs/images/dateselector.png)

## Category filter
The *Category Filter* component shows all categories used by the schedule. Users can filter sessions or talks by selecting a category. Sessions that do not match one of the selected categories are filtered out.

<span class='note'>The component wil automatically hide when there is no category added to the schedule.</span>

## Options
The *Options* component lets users sign in to [add favorites]({{< relref "favorites.md" >}}) and [see where friends are going](http://friends), [print their schedule](http://configure/print) or import the schedule to their calendar.

![Image: Controls on mobile and desktop](http://blokks.co/docs/images/controls)

## Controls
Users can scroll through [stages]({{< relref "basic-structure.md#location" >}}) with the control buttons. The *Controls* are visible on desktop when [`data-layout`]({{< relref "choose-your-layout.md" >}}) option is set to `columns`, and are always visible on mobile devices.

![Image: Controls on mobile and desktop](handheldttp://blokks.co/docs/images/controls)

<span class='note'>Sometimes it’s unnecessary to show the controls. For example, when your event has only one or two stages. Then, you can easily  hide them by setting the [`data-hide-controls`](http://configure/hidding-elements) option.</span>

<span class='note'>It can happen that someone visits your schedule on a large display. So big, that your whole schedule fits his screen easily. In those cases hide controls with media queries and CSS instead of the [`data-hide-controls`](http://configure/hidding-elements) options.</span>

## Timetable
A single day of your event is represented by the *Timetable* component, which consist out of a [*Dashboard*]({{< relref "basic-structure.md#dashboard" >}}), [*Locations*]({{< relref "basic-structure.md#location" >}}), [*Activities*]({{< relref "basic-structure.md#activities" >}}) and a [*Time Indicator*]({{< relref "basic-structure.md#time-indicator" >}}) component.

![Image: Timetable on desktop](https://blokks.co/docs/images/dashboard.png)

If a Timetable has today’s date it is automatically selected. The Time Indicator is visible and scrolled into view so that current speakers are shown. You can disable this by setting [`data-autoscroll`](http://configure/options).

<span class='note'>Some components (for example, the [Dashboard]({{< relref "basic-structure.md#dashboard" >}}) and [Time Indicator]({{< relref "basic-structure.md#time-indicator" >}}) are only visible during the event and therefor difficult to test or style. However you can enable them anytime by setting [`data-testflight`](http://configure/options).{{< relref "basic-structure.md#time-indicator" >}}</span>

## Dashboard
On days of the event the *Dashboard* component is shown on mobile devices. The component shows speakers or bands now playing and the ones coming up next. Make the dashboard visible anytime by setting [`data-testflight`](http://configure/options#testflight).

<span class='note'>You can disable the Dashboard component by setting [`data-hide-dashboard`](http://configure/hide-elements) to `true`.</span>

![Image: Blokks mobile dashboard](https://blokks.co/docs/images/dashboard.png)

## Location
The *Location* component represents a single stage of your event. Basically it’s a list of [*Activities*]({{< relref "basic-structure.md#activity" >}}) sorted by time.

![Image: Blokks locations](https://blokks.co/docs/images/dashboard.png)

## Activity
Speakers, talks, artists and performances are represented by the *Activity* component. Its position and its size describe the start and duration of the activity and it automatically calculated by the embed.

![Image: Blokks activities](https://blokks.co/docs/images/dashboard.png)

Selecting an *Activity* will show the [*Activity Details*](http://themes/activitydetails) component:

## Activity details
The *Activity Details* component is a modal presented when an [*Activity*]({{< relref "basic-structure.md#activity" >}}) is selected.  It shows all [information]({{< relref "manage-your-acts.md" >}}) about the selected speaker, talk, artist or performance. This includes titles, subtitles, times, descriptions, photos, links and embeds.

![Image: Blokks activity details](https://blokks.co/docs/images/details.png)

## Notifications & Alerts
*Notifications* and *Alerts* are shown when we need your immediate attention. For example, showing instructions when a user wants to [sign in](http://embed/favorites). Or displaying an error when something went wrong.

Like [*Activity Details*](http://themes/structure#activity-details), Notifications and Alerts are presented as a modals.

## Time indicator
The *Time Indicator* is only visible during the event and shows, as the name suggest, the current time. 

<span class='note'>You can show the time indicator by setting the [`data-testflight` option](http://configure/options#testflight)</span>