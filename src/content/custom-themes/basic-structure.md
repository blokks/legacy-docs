+++
date            = "2017-09-15T11:31:19+02:00"
author          = "@patrickpietens"

title           = "Basic structure"
description     = "The timetable embed is split into smaller, independent pieces called components, which in turn are split into even smaller components."
keywords        = ["blokks", "themes", "structure", "naming conventions", "bem"]
weight          = 503

[menu.main]
parent          = "custom-themes"

[[related]]
title = "Embed your schedule: Favorites"
url = "favorites.md"

[[related]]
title = "Advanced options: Date selector"
url = "date-selector.md"

[[related]]
title = "Advanced options: Hiding components"
url = "hide-components.md"

[[related]]
title = "Advanced options: Testflight"
url = "testflight.md"

[[related]]
title = "Custom themes: Block, Element, Modifier"
url = "bem.md"

[[related]]
title = "Custom themes: Animations"
url = "animations.md"

[[related]]
title = "Account settings: Upgrade your account"
url = "upgrade-your-account.md"
+++

The timetable embed is split into smaller, independent pieces called components, which in turn are split into even smaller components. Each component has [a unique CSS class]({{< relref "bem.md" >}}), which makes it easy to style them separately. 

{{< video src="videos/custom-themes-basic-structure.mp4" width="1172" height="658" title="Basic structure" >}}

The main components are:

## Date selector
The *Date Selector* component is visible when your event has multiple dates. Visitors can use this component to switch between dates. On desktop the *Date Selector* is shown as a *Button Bar*. On mobile, it switches to a *Dropdown* menu. [You can change this]({{< relref "date-selector.md" >}}) by setting the `date-selector-type` of the schedule.

![Date selector on desktop](images/custom-themes-basic-structure-desktop-02.jpg)

## Category filter
The *Category Filter* component shows all categories used by the schedule. Visitors can use this component to filter acts (speakers, talks or artists) by selecting categories. Acts that do not match the selected category are filtered out.

![Options on desktop](images/custom-themes-basic-structure-desktop-03.jpg)

This component will be automatically hidden when no categories have been added to the schedule.

## Options
The *Options* component lets visitors sign in to [add favorites]({{< relref "favorites.md" >}}), <!-- [see where friends are going]({{< relref "favorites.md#friends-activity" >}}), -->[print their schedule]({{< relref "print.md" >}}) or [add the schedule to their calendar]({{< relref "add-to-ical.md" >}}).

![Options on desktop](images/custom-themes-basic-structure-desktop-04.jpg)

## Controls
Visitors can scroll through [stages]({{< relref "basic-structure.md#location" >}}) with the control buttons. The *Controls* are visible on desktop when the `data-layout` option is set to `columns`.

![Controls on desktop](images/custom-themes-basic-structure-desktop-05.jpg)

In some cases it’s not necessary to show the controls. For example, when your event only has one or two stages. You can easily [hide the controls]({{< relref "hide-components.md" >}}) by setting `data-hide-controls`.

<span class='note'>Note: When the schedule is viewed on very large displays, the whole schedule might fit on a single screen. In those cases it's best to [hide the controls]({{< relref "hide-components.md" >}}) with media queries and CSS instead of setting `data-hide-controls`.</span>

## Timetable
A single day of your event is represented by the *Timetable* component, which consist of a *Dashboard*, *Locations*, *Activities* and *Time Indicator* component.

![Options on desktop](images/custom-themes-basic-structure-desktop-06.jpg)

If one of your schedule's dates is the same as today’s date, it's automatically selected. Also, the *Time Indicator* will then be visible and scrolled into view. That way, acts that are currently performing will be shown when the schedule is opened. You can [disable this]({{< relref "auto-scroll.md" >}}) by setting `data-autoscroll`.

<span class='note'>Some components, like the *Dashboard* and *Time Indicator*, are only visible during the event and difficult to test. However, you can [enable them]({{< relref "testflight.md" >}}) at any time by setting `data-testflight`.</span>

## Dashboard
During the event, the *Dashboard* component is shown on mobile devices. The component shows acts that are now active, and acts that are coming up next.

<span class='note'>You can [disable the Dashboard]({{< relref "hide-components.md" >}}) by setting `data-hide-dashboard` to `true`.</span>

{{< img src="images/customize-your-embed-choose-your-layout-dashboard.jpg" width="768" height="1362" alt="Image: Mobile dashboard" >}}

## Location
The *Location* component represents a single stage of your event. Basically, it’s a list of [Activities]({{< relref "basic-structure.md#activity" >}}), sorted by time.

![Location on desktop](images/custom-themes-basic-structure-desktop-09.jpg)

## Activity
Acts are represented by the *Activity* component. Its position and size show the start and duration of the activity and are automatically calculated by the embed.

![Activity](images/custom-themes-basic-structure-desktop-10.jpg)

Selecting an *Activity* will show the *Activity Details* component:

## Activity details
The *Activity Details* component is a modal presented when an *Activity* is selected. It shows all [information]({{< relref "manage-your-acts.md" >}}) about the selected act or talk. This includes titles, subtitles, times, descriptions, photos, links and embeds.

![Activity details](images/custom-themes-basic-structure-desktop-12.jpg)

## Notifications & Alerts
*Notifications* and *Alerts* are small modals used to show instructions when a visitor wants to sign in, or to display an an error when something went wrong.

![Alerts](images/custom-themes-basic-structure-desktop-13.jpg)

## Time indicator
The *Time Indicator* is only visible during the event and shows, as the name suggests, the current time. 

![Time indicator](images/custom-themes-basic-structure-desktop-08.jpg)

<span class='note'>You can [test the time indicator]({{< relref "testflight.md" >}}) by setting the `data-testflight` option</span>

## Trial bar
The *Trial bar* will remind you that you haven't [upgraded your account]({{< relref "upgrade-your-account.md" >}}) yet. And, that your schedule will only be visible to you and your teammates. The *Trial bar* will disappear once you've upgraded your account.

![Trial bar on desktop](images/custom-themes-basic-structure-desktop-11.jpg)