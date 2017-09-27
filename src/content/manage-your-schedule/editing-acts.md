+++
date            = "2017-09-11T11:31:19+02:00"
author          = "@niekdekker"

title           = "Editing acts"
description     = "After adding an act or selecting an existing one, a modal window is shown where you can add or edit its information."
keywords        = ["blokks", "getting started", "acts", "bands", "speakers", "activities", "artists"]
weight          = 204

[menu.main]
parent          = "manage-your-schedule"

[[related]]
title = "Daring Fireball: Markdown"
url = "https://daringfireball.net/projects/markdown/"

[[related]]
title = "Github: Markdown cheatsheet"
url = "https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet"
+++

After [adding an act]({{< relref "manage-your-acts.md#adding-acts" >}}) or selecting an existing one, a modal window is shown where you can add or edit its information.

![Image: Editing acts](https://blokks.co/docs/images/image.png)

## Titles and subtitles
The *title* of an act is required and can be anything you want. Most common titles are speakers names, title of their talks etc. If your event is a conference, you can also add a *subtitle*. This can be left blank if you don’t need it.

## Headliners
Sometimes you want to highlight a band or speaker. By marking it as a *headliner* you can do so. This enables you to have special acts really pop out on your schedule.

## Categories
Each act can have one or multiple *categories*. These categories can optionally be shown in your timetable. Additionally, you can use these categories to [customize the design of your timetable](http://themes/modififers).

## Description
The *description* will be the main bit of text shown when a visitor clicks on of your acts in your schedule. Usually this is short biography of the artist or a summary of the talk. The description can be as long as you prefer, but we recommend a maximum of 500 characters.

<span class='note'>Note: this is not a hard limit, you can go with as many characters as you need.</span>

Descriptions support basic [Markdown](https://daringfireball.net/projects/markdown/). Markdown is a way to style text on the web. Markdown is just regular text with a few non-alphabetic characters thrown in, like **#** or **\***. Formatting words as bold or italic, adding images, and creating lists are just a few of the things you can do with Markdown.

Here’s a quick overview of Markdown syntax that you can use in the descriptions:

### Headers
```md
# This is an <h1> tag
## This is an <h2> tag
###### This is an <h6> tag
```

### Emphasis
```md
*This text will be italic*
_This will also be italic_

**This text will be bold**
__This will also be bold__
```

### Links
```md
[Blokks](https://blokks.co)
Format: [Text](url)
```

### Images
```md
![Blokks](https://blokks.co/images/logo.png)
Format: ![Alt Text](url)
```

## Images
You can add a single *image* to each of your acts by dropping an image file on the drop area or by clicking that same area. This *image* will be your acts main visual and will be shown in the timetable embed.

<span class='note'>Note: Images that are added to your act cannot be larger than 2MB. Images are resized and saved as JPG files by Blokks to optimize loading times.</span>

## Links
You can add multiple *links* to each of your acts. This will allow users to discover more information about your act. Additional links can be added by pressing the *Add one more link* button.

Instead of showing a full URL in your timetable embed for each link, you can show a label that describes that link. These are labels like *Youtube*, *Facebook* or *Twitter*. It's also possible to add a custom label by selecting *Other…*.

## Embeds
In some cases, you might want to add a Youtube video, a Spotify track or another piece of media content to an act. To do this, just copy and paste its embed code. We support many different embeds, but if you’re trying to add an embed code and are running into problems, [let us know](http://introduction/support).

<span class='note'>You can add multiple embeds, but we recommended only adding one. This helps your schedule load faster.</span>

## Disable user interaction
In some cases, it can be useful to show an act in your schedule without allowing your users to select it. For example, when an act is still being teased to your users. Check this box to disable user interaction for that act. 

## Published, unpublished and canceled
Initially, all acts are marked as **published**. When you change an act to **unpublished**, it won’t be visible in your timetable embed. This is useful when your schedule is live and you want to add new acts without showing them to your users yet.

Acts marked as **canceled** are still visible but can have custom styling in your timetable embed.