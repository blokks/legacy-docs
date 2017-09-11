+++
date            = "2017-09-11T11:31:19+02:00"
author          = "@niekdekker"

title           = "Editing acts"
description     = "After adding an act or selecting an existing one, a modal window is shown where you can add or edit its information."
keywords        = ["blokks", "getting started", "acts", "bands", "speakers", "activities", "artists"]
weight          = 9

[menu.main]
parent          = "manage-your-schedule"
+++

After [adding an act]({{< relref "manage-your-acts.md#adding-acts" >}}) or selecting an existing one, a modal window is shown where you can add or edit its information.

![Image: Editing acts](https://blokks.co/docs/images/image.png)

## Titles and subtitles
The <span class='feature'>title</span> of an act is required and can be anything you want. Most common titles are speakers names, title of their talks etc. If your event is a conference, you can additionally add a <span class='feature'>subtitle</span>. Again, this can be anything. Or just leave it blank if you don’t need it.

## Headliners
Sometimes you want to highlight a band or speaker. <span class='user-action'>By marking it as a <span class='feature'>headliner</span></span> you can do so. This enables you to have special acts really pop out on your schedule.

## Times

## Categories
Each act can have one or multiple <span class='feature'>categories</span>. These <span class='feature'>categories</span> can optionally be shown in your timetable. Additionally, you can use these <span class='feature'>categories</span> to <span class='action'>[customize the design of your timetable](http://themes/modififers).</span>

## Description
The <span class='feature'>description</span> will be the main bit of text shown when a visitor clicks on of your acts in your schedule. Usually this is short biography of the artist or speaker. Or a summary his talk. A <span class='feature'>description</span> can be as long as you prefer, but we recommend a maximum of 500 characters.

*Note: this is not a hard limit, you can go with as many characters as you need.*

<span class='feature'>Descriptions</span> support basic [Markdown](https://daringfireball.net/projects/markdown/). Markdown is a way to style text on the web. Markdown is just regular text with a few non-alphabetic characters thrown in, like <span class='label'>#</span> or <span class='label'>*</span>. Formatting words as bold or italic, adding images, and creating lists are just a few of the things we can do with Markdown.

Here’s a quick overview of Markdown syntax that you can use in the <span class='feature'>descriptions</span>:

#### Headers
```md
# This is an <h1> tag
## This is an <h2> tag
###### This is an <h6> tag
```

#### Emphasis
```md
*This text will be italic*
_This will also be italic_

**This text will be bold**
__This will also be bold__
```

#### Links
```md
[Blokks](https://blokks.co)
Format: [Text](url)
```

#### Images
```md
![Blokks](https://blokks.co/images/logo.png)
Format: ![Alt Text](url)
```

### Images
You can add a single <span class='feature'>image</span> to each of your acts by <span class='action'>dropping an image file on the drop area</span> or add one by <span class='action'>clicking that same area</span>. This <span class='feature'>image</span> will be your acts main visual and will be shown in the timetable embed.

*Images that are added to your act cannot be larger than 2MB. Images are resized and saved as JPG files by Blokks to optimize loading times.*

### Links
You can add multiple <span class='feature'>links</span> to each of your acts. This will allow visitors to discover more information about your act. Additional links can be added by <span class='action'>pressing the <span class='ui'>Add one more link</span> button</span>.

Instead of showing a full URL in your timetable embed for each link, you can show a label that describes that link or manually a custom label by <span class='action'>selecting <span class='ui'>Other…</span></span>.

### Embeds
In some cases, you might want to add a Youtube video, a Spotify track or another piece of media content to an act. <span class='action'>Just copy and paste its embed code</span>.

We support many different embeds. If you’re trying to add an embed code and are running into problems, [we’ll help you out](http://introduction/support).

*You can add multiple embeds, but we recommended only adding one. This helps your schedule load faster.*

### Disable user interaction
In some cases, it can be useful to show an act in your schedule without allowing your visitors to select it. For example, when an act is still being teased to your visitors.

### Published, unpublished and canceled
Initially, all acts are marked as <span class='input'>published</span>. When you change an act to <span class='input'>unpublished</span>, it won’t be visible in your timetable embed at all. This is useful when your schedule is live and you want to add new acts without showing them to your visitors.

Acts marked as <span class='input'>canceled</span> are still visible but can have custom styling in your timetable embed.

**See also**
- [Blokks modifiers](http://themes/modifiers)
- [Hiding stuff](http://configure/options)
- [Markdown](https://daringfireball.net/projects/markdown/)
- [Markdown cheatsheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)
