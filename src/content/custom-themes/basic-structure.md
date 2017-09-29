+++
date            = "2017-09-15T11:31:19+02:00"
author          = "@patrickpietens"

title           = "Basic structure"
description     = "The timetable embed is split into smaller, independent pieces called components, which in turn are split into even smaller components."
keywords        = ["blokks", "templates", "themes", "structure", "naming conventions", "bem"]
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

The timetable embed is split into smaller, independent pieces called components, which in turn are split into even smaller components. Each component has [a unique CSS class]({{< relref "bem.md" >}}), which makes is easy to style them separately. 

{{< video src="videos/custom-themes-basic-structure-desktop.mp4" width="1678" height="1264" title="Basic structure" >}}

The main components are:

## Date selector
The *Date Selector* component is visible when your event has multiple dates. Users will use this component to switch between dates. On desktop the Date Selector is shown as a *Button Bar*. On mobile, it switches to a *Dropdown* menu. [You can change this]({{< relref "date-selector.md" >}}) by setting the `date-selector-type` of the schedule.

![Date selector on desktop](images/custom-themes-basic-structure-desktop-02.jpg)

## Category filter
The *Category Filter* component shows all categories used by the schedule. Users can use this component to filter sessions or talks by selecting categories. Sessions that do not match the selected category are filtered out.

This component will be automatically hidden when there are no categories added to the schedule.

## Options
The *Options* component lets users sign in to [add favorites]({{< relref "favorites.md" >}}), [see where friends are going]({{< relref "favorites.md#friends-activity" >}}), [print their schedule]({{< relref "print.md" >}}) or add the schedule to their calendar.

![Options on desktop](images/custom-themes-basic-structure-desktop-03.jpg)

## Controls
Users can scroll through [stages]({{< relref "basic-structure.md#location" >}}) with the control buttons. The *Controls* are visible on desktop when [`data-layout`]({{< relref "choose-your-layout.md" >}}) option is set to `columns`. They're always visible on mobile devices.

![Controls on desktop](images/custom-themes-basic-structure-desktop-04.jpg)

In some cases it’s not necessary to show the controls. For example, when your event only has one or two stages. You can easily [hide the controls]({{< relref "hide-components.md" >}}) by setting the `data-hide-controls`.

<span class='note'>Note: When the schedule is viewed on very large displays, the whole schedule might fit on a single screen. In those cases it's best to [hide the controls]({{< relref "hide-components.md" >}}) with media queries and CSS instead of setting `data-hide-controls`.</span>

## Timetable
A single day of your event is represented by the *Timetable* component, which consist of a *Dashboard*, *Locations*, *Activities* and *Time Indicator* component.

![Options on desktop](images/custom-themes-basic-structure-desktop-05.jpg)

If one of your schedule's dates is the same as today’s date, it's automatically selected. Also, the Time Indicator will then be visible and scrolled into view. That way, acts (speakers/talks/artists) that are currently performing will be shown when the schedule is opened. You can [disable this]({{< relref "auto-scroll.md" >}}) by setting `data-autoscroll`.

<span class='note'>Some components, for example, the *Dashboard* and *Time Indicator*, are only visible during the event and difficult to test or style. However, you can [enable them]({{< relref "testflight.md" >}}) anytime by setting `data-testflight`.</span>

## Dashboard
During the event, the *Dashboard* component is shown on mobile devices. The component shows speakers or acts that are now active, and the ones that are coming up next.

<span class='note'>You can [disable the Dashboard]({{< relref "hide-components.md" >}}) by setting `data-hide-dashboard` to `true`.</span>

![Image: Blokks mobile dashboard](https://blokks.co/docs/images/dashboard.png)

## Location
The *Location* component represents a single stage of your event. Basically, it’s a list of [Activities]({{< relref "basic-structure.md#activity" >}}), sorted by time.

![Location on desktop](images/custom-themes-basic-structure-desktop-06.jpg)

## Activity
Acts (speakers/talks/artists) are represented by the *Activity* component. Its position and size show the start and duration of the activity and are automatically calculated by the embed.

![Activity on desktop](images/custom-themes-basic-structure-desktop-07.jpg)

Selecting an *Activity* will show the *Activity Details* component:

## Activity details
The *Activity Details* component is a modal presented when an *Activity* is selected. It shows all [information]({{< relref "manage-your-acts.md" >}}) about the selected act or talk. This includes titles, subtitles, times, descriptions, photos, links and embeds.

![Activity details on desktop](images/custom-themes-basic-structure-desktop-09.jpg)

## Notifications & Alerts
*Notifications* and *Alerts* are small modals used to show instructions when a visitor wants to sign in, or to display an an error when something went wrong.

![Alerts on desktop](images/custom-themes-basic-structure-desktop-10.jpg)

## Time indicator
The *Time Indicator* is only visible during the event and shows, as the name suggest, the current time. 

![Time indicator on desktop](images/custom-themes-basic-structure-desktop-?.jpg)

<span class='note'>You can test the time indicator by setting the [`data-testflight` option](http://configure/options#testflight)</span>

## Trial bar
The *Trial bar* will remember you that you haven't [upgraded your account]({{< relref "upgrade-your-account.md" >}}) yet. And that your schedule will only be visibile to you and your teammates. The *Trial bar* disappears once you're on a paid plan.

![Trial bar on desktop](images/custom-themes-basic-structure-desktop-08.jpg)