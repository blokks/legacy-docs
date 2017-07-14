
- Ik denk dat we nog een hoofdstuk nodig hebben waarin we de embed beschrijven. Double clicks etc. De embedcode etc. Dit is ook een goede brug van backend naar het volgende hoofdstuk.
- Idee. Vraagtekentjes plaatsen bij ingewikkelde onderdelen in forms in de backend (act modal & embed tab). Die vraagtekentjes direct doorlinken naar het deel van de docs waar we dat uitleggen. We kunnen ook nog steeds on hover een korte beschrijving tonen, maar on click kunnen we naar de uitgebreidere uitleg in de docs.

——




# Introduction

## Welcome
We’re glad you made it here. We’ll explain everything there is to know about Blokks. From creating your first schedule to advanced customization for developers. 

Before you get started, we advise you to have a look at these two tutorial videos, as they will explain the basics behind Blokks.

![Blokks 101: Creating and updating your schedule](video)

![Blokks for developers: How to embed and customize your schedule](video)


## Support
If you have any questions after reading the docs, don’t hesitate to let us know. Send us an [email](mailto:support@blokks.co), shoot us a message on [twitter](http://twitter.com/blokkshq) or use the little support bubble shown on the bottom right to speak to us directly.

For now, let’s get started by [creating your account](http://gettingstarted/signingup).




# Getting started

## Signing up
Creating a new Blokks account is easy. Simply go to [blokks.co/signup](https://blokks.co/signup) and send us your name and email address. You’ll receive your login info and instructions how to [create your first event](http://gettingstarted/createfirstevent)

*Your password is auto-generated to speed things up. You can [change your password](http://gettingstarted/settings) at any time.*


## Creating your first event
Let’s create your first event. To do so, we need to know some basic info about your event. We’ll take you through a series of pages and ask things like your event’s name, what kind of event you’re organising, dates, times etc.

Again, super easy.

### Dates & times
Choose the date of your event by selecting them in the calendar. You can select multiple dates if necessary. You can also set a start and end time for your event. 

*If you’re not yet sure about the date or time for your event, no worries, you can easily [change them later](http://manageevent/datestimes).*

### Adding stages
The next step is adding stages or areas for your event. If you need more stages simply click the `Add another stage` button.

*Don’t worry if you’re not sure about which stages your event will have. You can always [add new ones](http://manage/stages) at later moment.*

### Your team
In many cases, more than one person will be responsible for updating your event timetable. Or more than one developer might want to work on your timetable. 

You can invite one or more persons to your team. They will receive an email with their own login information and gain full access to your schedule. 

*You can [add and remove team members](http://settings/team) at a later moment. If you’re on a free plan only team members can see the embedded schedule. [Read more about plan](http://plans).*

### All done!
And that’s it. Your schedule has now been set up and you’re ready to [dive in!](http://manage/days)




# Manage your schedule

## Managing your days
Your conference or festival can be a single or multiple day event. The dates can be found at the top of your schedule. 

[FILMPJE OVER DAGEN]

### Adding days
Adding extra days to your event is simple. Just hit the `+ Add day` button. Blokks will automatically pick the date that follows the last one. 

*Note that your current stages will also be copied to your added days.*

### Changing and removing days
`Right-click` any date will show the datepicker, allowing you to change the selected date.

Click the `Remove` button right below the datepicker to delete that specific day. Removing days will also delete the acts added to that day. 

![Datepicker and remove button](https://blokks.co/docs/images/datepicker.png)

*Pro-tip: You can always `undo` any action by clicking the Undo button in the top right or by using the shortcut `CTRL+~` / `CMD-Z`.*

### Adjusting your start and end time
If you want your days to start earlier or end later, you can do so by clicking the `•••` button.

Changing the the start or end time of the day may remove acts from your schedule. Make sure that you don’t have any active acts during the times you’re removing.

*You can always take a step back by clicking the `Undo` button in the top right or by hitting `CTRL-Z` / `CMD-Z`.*


## Managing your stages
The columns shown in your schedule represent the various stages or areas that will be used during your event. 

![GIF: Adding and moving stages](https://blokks.co/docs/images/image.gif)

### Adding stages
You can add stages by simply clicking the `+ Add new stage` button. The new stage will appear on the right of your current stages. 

*You should note that new stages are only added to your currently selected date.*

### Ordering stages
The order of stages can be changed by drag ’n dropping them to the preferred position. Releasing the stage will make it snap into position.

### Titles and subtitles
![Your stage options](https://blokks.co/docs/images/image.png)

`Right-click` a stage or press the `•••` button to bring up the various options for that stage. You can adjust the following fields:
- Title
- Subtitle
- Categories
- Delay

The title field is, forgive us for being obvious, the main title of your stage. This title will also appear in your timetable embed and will be visible to your visitors. 

The stage subtitle is an optional field and it will not automatically show in your timetable embed. This field can be used for events where you need to show a bit more context for each stage. For example, your stage name could be `The Red Stage` and its subtitle could be `Sponsored by Red Bull`. 

More info on how to show your stage subtitles in your embed can be found in [this section](#).

By the way, here’s a pro-tip: if you press `cmd` and click on a stage title, you can edit it directly. 

### Categories
You can add multiple categories to each stage. By itself, these categories have no direct impact on the design of your timetable. But: categories can be used for styling purposes during development, allowing you to adjust the look and feel of each individual stage. 

More information on customizing the design of your stages can be found in [this section](#).

### Delays
Live events can be pretty hectic and can get messy at times. Speakers or artists can get delayed for various reasons, causing your schedule to get out of sync. 

For this purpose, we’ve built in a delay function. By adding a delay of, for example, `15 minutes` to your stage, the times for all acts on that stage will be pushed by 15 minutes. Your visitors will then see the updates times in their schedule, making sure they won’t be waiting around or be late to see their favorite acts. Important note: the times shown in the backend will still be the initially set times.

*@patrick, klopt dit tekstje? Of mis ik nog iets. Moeten we nog iets zeggen over hoe we dat laten zien in de embed en hoe dat te customizen?*


## Managing your acts

Adding acts to your event is probably the most important part of building your schedule. Which is why Blokks allows you to add all the information your visitors will need.

### Adding acts
![GIF: Adding acts](https://blokks.co/docs/images/image.gif)

To add an act, simply click on an empty slot in your timetable. This will bring up a screen where you can add all your act info in one place. 

### Moving and resizing acts
![GIF: Moving and resizing acts](https://blokks.co/docs/images/image.gif)

You can move acts to a different slot by dragging and dropping them. Pick up an act by hovering over the top section of that act and start dragging. When you release the act, it will snap into place. 

One way to adjust an acts start and end time, is by hovering over the bottom right of an act and dragging it up or down. This will change the acts time by increments of 15 minutes. 

If you need to make a more specific change in the acts time, you can do so by clicking the acts and adjusting the time there.

### Titles and subtitles
![The act modal](https://blokks.co/docs/images/image.png)

After adding an act or clicking on an existing act, you can edit your acts content. First up is your acts title. This is the main title, that will be shown for each act in your timetable embed.

If your event is a conference, you can additionally add a subtitle. Choosing to show the subtitle in your timetable embed can be done while [designing your schedule](#), more info on how to do that can be found in that section. 

### Headliners  
You can make your act a `headliner` which will allow you to highlight this act in your timetable embed. This enables you to have special acts really pop out on your schedule by adding custom styling.
  
Note: In our standard Blokks theme, headliners will not be highlighted. Custom highlight styling can easily be added by adjusting your code. More detailed info on how to do so can be found in [this section](#).

### Categories
Each act can have multiple categories. These categories can optionally be shown in your timetable, after a user clicks on an act. Additionally, you can use these categories to adjust the design of individual acts. 

More information on using categories to customize your design can be found in [this section](#).

### Description
Each of your acts can have a description. This will be the main bit of text shown when a visitor clicks on of your acts in your schedule. Your description can be as long as you prefer, but we recommend a maximum of 500 characters. Note: this is not a hard limit, you can go with as many characters as you need. 

Here’s a pro-tip: it’s possible to add formatting to this text by using [markdown](#). Markdown is a super simple text-based method to add custom styles to plain text. Styles that can be added using this method:
- Bold text
- Italic text
- Headers and subheaders
- Quotes
- Dividers
- Links
- Lists

*@Niek, Ik denk dat de we hier markdown uitgebreid moeten bescrhijven. Dat wil ik wel doen.*

You can show these styles in your timetable embed by adjusting your code and customizing their design. Our guide on using markdown:
→ [Markdown](#)

### Images
You can add a single image to each of your acts by dragging an image file on the drop area or add one by clicking that area. 

This image will be your acts main visual and can be shown in the timetable embed. Choosing to hide or show this image can be done in your [embed settings](#). 

The images that are added to your act cannot be larger than 2MB. 
Our recommended file format is JPG (instead of PNG), since this helps your schedule load faster. 

### Links
You can add multiple links to each of your acts. This will allow visitors to discover more information about your act. Additional links can be added by pressing the `Add one more link` button.

Instead of showing a full URL in your timetable embed for each link, you can show a label that describes that link. You can choose from the following labels:
- Website
- Youtube
- Soundcloud
- Spotify
- Twitter
- Facebook
- Instagram
- Other..

When you select the `- Other..` label, you can manually add a custom text label.

### Embeds
In some cases, you might want to add a Youtube video, Spotify embed or other piece of media content to an act in your timetable embed. This is possible by copying and pasting its embed code. 

You can add multiple embeds, but we recommended only adding one. This helps your schedule load faster.  

We support many different embeds. But if you’re trying to add an embed code and are running into problems, send us an [email](mailto:support@blokks.co), tweet or use the support bubble on the bottom right. We’ll help you out.

### Deleting acts
You can delete an act by pressing the `Delete` button at the bottom while editing an act. Alternatively, you can right-click on any act in your schedule to find another `Delete` button. 

### Disable user interaction
In some cases it can be useful to show an act in your schedule without allowing your visitors to click on it. For example, when an act is still being teased to your adience, this feature would allow you to show the act in your schedule, but prevent visitors to view its info. 

### Published, unpublished and canceled
Initially, all acts are marked as `published`. When you change an act to `unpublished`, it won’t be visible in your timetable embed. This is useful when your schedule is live and you want to add new acts without showing them to your visitors. 

Acts marked as `canceled` can have custom styling in your timetable embed, allowing you to show your visitors when acts are canceled. Visit [this section](#) to learn more on how to do this. 

*@patrick, klopt dit? Of hebben we dit nu nog niet.*

### Custom fields
It’s possible to add custom for fields to your schedule. In order to do so.. 

*@patrick, ik weet nog niet precies hoe dit in z’n werk gaat. Kan jij evt. aanvullen, of zullen we het weglaten voor nu.*


## Autosaving
When using Blokks, you data will be automatically saved every 15 minutes. You can always manually save your data by pressing the `Save` button in the top right. 

*@patrick, klopt dit?*

When you accidentally close Blokks before saving, Blokks will show you a popup reminding you to save your data before leaving. 

## Exporting your data
It’s possible to export all the data in your schedule to a single Excel file. You can download this file by clicking the `Export` button on the top right. 

The Excel file consists of two different types of data, each shown on different sheets in your file.

![Your lineup sheet](https://blokks.co/docs/images/image.png)

### Lineup
On this sheet you will find all the acts that have been added to your schedule, including all their relevant data:
- Title
- Subtitle
- Description
- Stage
- Times
- Categories
- Image

![Your day sheet](https://blokks.co/docs/images/image.png)

### Days
Each of your days will have its own sheet in your Excel file. On those sheets, you will find a full schedule divided in different cells. 



# Your embed settings
*Dit onderdeel was eerst “Design your schedule”. Misschien moeten we dit voor nu anders noemen, nu de embed tab nog geen ‘Design’ heet en je daar eigenlijk niet aan het ontwerpen bent, meer settings van je embed aanpassen *

When you’re ready to start implementing your schedule on your website or mobile app, head over to the embed tab.

![The embed tab](https://blokks.co/docs/images/image.png)

Here you’ll find various settings that will allow you to customize both the design and functionality of your timetable embed. After adjusting the settings on the left, the embed code shown on the right will automatically update.

Let’s dig in. 


## Select your layout
Your timetable embed can have different layouts. Here you can select the layout that best suits your event schedule. Currently, we offer two different layouts:

1. Columns

![Column layout](https://blokks.co/docs/images/image.png)

In this layout, all your stages are placed on columns. This layout works best if you have a small number of stages. Also, it allows you to show a lot of info on your acts, since your acts will be larger.

An example of this layout in use would be the schedule that [The Next Web](https://blokks.co/schedules/tnw2017) built. 

2. Rows

![Row layout](https://blokks.co/docs/images/image.png)

In this layout, your stages will be placed on rows. This is a great layout for events that have a lot of stages, since you can have more stages visible at the same time. 

A good example of this layout in use is the schedule that [De Correspondent](https://decorrespondent.nl/evenementen/7/festival-der-vooruitgang/programma) built.

The above layouts are fully customizable. More information on how to do so can be found in [this section](#).

After selecting a layout, the corresponding values will be adjusted in your embed code. For example, after selecting the Rows layout, your embed will load a different CSS file:
```<link href='https://themes.blokks.co/rows-1.0.0.css' rel='stylesheet'>```

And, the `data-layout` value will be adjusted accordingly:
```data-layout='rows’```


## Favorites
Your visitors are able to save their favorite acts by connecting their Facebook, Twitter or LinkedIn accounts. This allows them to create a personal schedule, highlighting the acts they want to see during your event.

Blokks currently supports the following social networks:
- Facebook
- Twitter
- LinkedIn

After selecting one of these options, the `data-social-provider` tag will be adjusted in your embed.

---

To give you some more insight on how saving favorites works for your visitors, here’s an overview:

![GIF: Saving favorites](https://blokks.co/docs/images/image.gif)

When users visit your schedule, they’ll find a `Save your favorites` button at the top of the schedule. 

When clicked, they’ll see a modal that explains the functionality and allows them to connect to their social network. 

When connected, users can add acts to their favorites by clicking the `Add to favorites` button in the act modals. Alternatively, they can double click acts to add favorites straight from the schedule.


## Mobile dashboard
![The mobile dashboard](https://blokks.co/docs/images/image.png)

The mobile dashboard, or the ‘Now & Next’ section, is a way for your mobile visitors to quickly see what's currently playing and what's next up. This section is *only shown during your event*, and only visible on mobile. 

When disabled, the following value will be added to your embed code: 
```data-hide-dashboard='true'```


## Scroll buttons
![GIF: Scroll buttons](https://blokks.co/docs/images/image.gif)

Scroll buttons allow your desktop users to scroll through your timetable horizontally. 

![GIF: Mobile scroll buttons](https://blokks.co/docs/images/image.gif)

On mobile, the scroll buttons allow users to quickly switch between your stages.

When disabled, the following value will be added to your embed code: 
```data-hide-controls='true'```


## Add to calendar
When enabled, an `Add to calendar` button will be shown at the top of your schedule. This button allows your visitors to download calendar entries for your event. 

The download includes two types of calendar entries:
1. Entries for each of your event days.
2. Entries for each of your visitors favorite acts.

The calendar entries for each of your visitors favorite acts can be used as reminders, as they will trigger a notification once their favorite acts start.

On mobile, the `Add to calendar` button will automatically open your users calender app, allowing them to add the calendar entries there.

*@patrick, klopt dit?*

When disabled, the following value will be added to your embed code: 
```data-hide-export='true'```


## Customize your acts
![GIF: Customize your acts (showing various states)](https://blokks.co/docs/images/image.gif)

You can customize the look of the acts shown in your schedule by adjusting the following settings.

### Hide images
Initially, each act will show the image you added to that act as a background image. 

When disabled, the following value will be added to your embed code:
```data-hide-images='true'```

### Hide subtitles
This setting allows you to hide the subtitle shown below the title in each act. 

When disabled, the following value will be added to your embed code: 
```data-hide-subtitles='true'```

Note: This setting will only affect the act shown in the schedule overview. When a user clicks on an act, the subtitle will still be visible in the act modal. 

*@patrick, dit klopt, toch?*

### Hide start & end times
Initially, each act in your schedule will also show its start and end time. You can use this setting to hide these times.

When disabled, the following value will be added to your embed code: 
```data-hide-times='true'```


## Other options

### Hide "Built with Blokks" link
You can choose to hide the `Built with Blokks` link that is shown at the bottom of your schedule using this setting. 

When disabled, the following value will be added to your embed code: 
```data-hide-blokks-link='true'```




# Embed your schedule

*@patje, ik heb deze sectie nog niet geschreven omdat ik verwacht dat er veel overlap zal zijn met wat jij hebt geschreven. Het enige wat ik hierover kan schrijven is hoe je de embed code toevoegt aan je site, maar dat wordt al snel een technisch verhaal denk ik*




# Account settings & teams
Follow this link to visit your account settings:
→ [blokks.co/manage/account](https://blokks.co/manage/account)

Here, you can change your full name, email address and password. 


## Change your password
Changing your Blokks password is simple. Just add your new password to the password field and hit save!


## Adding team members
In the `Team` tab, you’ll find all the teams you’re currently a part of. You can invite new members by clicking the `Invite member` button. Simply add their email and hit send. Your new team member will then receive an email with their login credentials. 


## Removing team members
To remove a member from your team, hover over their name and click the `x` button that appears on the right. 




# Upgrading & invoices 

## Free accounts vs. upgraded accounts
After first signing up to Blokks, you’ll be on a free account. 

With a free account, you’ll have access to all of Blokks’ features: you can add your schedule data, embed your schedule and customize it fully. But, *your schedule will only be visible to you and your team members*.

Once you’re ready to go live and share your schedule with your visitors, you can upgrade to a paid account using the following link:
→ [blokks.co/manage/upgrades](https://blokks.co/manage/upgrades)
 
Here you’ll find an overview of your events that have not been upgraded yet. Follow the `Upgrade` link to start the upgrade process.

## Upgrading your account
![Upgrading your account](https://blokks.co/docs/images/image.png)

Upgrading is quite simple. Just add your payment information, optionally add a coupon code, and you’re good to go! After processing your payment data, your schedule will be upgraded and visible to the public!

A few notes:
- If you have a coupon code, please add it here to apply it. 
- If you’re a business customer, please add your VAT information so we can add that to your invoice. 

## Invoices
On the `Invoices` tab, you’ll find your invoice after upgrading your schedule. Click `View invoice` to download a copy of your invoice. 





---

*@patrick, deze twee onderdelen wist ik niet zo goed te plaatsen, wat denk jij?*





---

*Toevoegen: Embedding your schedule*

---


————————————————————————————————————————————————————————————————


# Design your schedule

## Introduction
So you’ve added all days, stages and acts and embedded the schedule on your website ✌️. Now it’s time to style and configure your schedule so it matches your conference’s identity and it embeds perfectly within your existing website or mobile app.

In the next chapters we explain how to [change the layout of your schedule](http://chooseyourlayout) , [set its colors](http://changecolors) or [add your own fonts](http://addownfonts) & [icons](http://addcustomicons). 

So, [no time to waste](http://chooseyourlayout).


## Choose your template

*[Not yet supported]*


## Choose your layout

### Desktop 
On desktop our embed has two layout directions: the first direction is `columns` where stages are arranged horizontally. This is also the default direction of the embed. The second one is `rows` where stages are stacked vertically.  

![Row vs. column layout](https://blokks.co/docs/images/rowsandcolumns.png)

You can change the layout direction at any time by selecting the layout in [the design tab of our backend](http://gettingstarted/design) or by setting it manually with the [`data-layout` option](http://configure/options):

```
<script src=“”
	data-blokks-id=“1”
	data-layout=“rows"
></script>
```

**See also:**
- [More configuration options](http://configure)
- [Create your own layout](http://themeslayout)
- [Browser support](http://browsersupport)

### Mobile
On mobile devices your schedule is automatically shown in a list view. However, visitors can switch back to the full schedule by rotating their device to landscape mode:

![Portrait vs. landscape mode](https://blokks.co/docs/images/animation.gif)

The default breakpoint for switching between mobile and desktop view is `480px` or `16em`. This works best for support on all devices. Of course you [change this value](http://configure/breakpoints) if you want.

For events with a lot of stages and acts the list can become long. Which can be quite annoying if you want to find out which speaker or band is coming up next. Therefor, on the day itself the mobile version of the embed will show our [dashboard](http://design/dashboard):

The dashboard is a summary of acts which are playing now and coming up next. Read more about the dashboard in [create templates](http://themes/structure#dashboard). 

**See also:**
- [Dashboard](http://themes/dashboard)
- [Date selector](http://themes/dateselector)
- [Setting default breakpoint](http://theme/breakpoint)
- [Create your own layout](http://themes/layout)
- [Using media queryes](https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries)


## Change colors
You can change any color used in the embed. The prefered and easiest way to apply your own styling is to use *CSS custom properties*, or CSS variables. [*Custom properties* are supported by all modern browsers](http://configure/browsersupport).

The syntax for *custom properties* is straightforward:

```
<style media="screen">
	:root {
		--blokks-theme-color: palevioletred;
	}
</style>
```

In the above example `--blokks-theme-color` is a Blokks defined property with a value of `palevioletred`. You should note that all *custom properties* are prefixed with `--blokks`. Adding the above code in the `<head>` of your page will change the main color of the embed to `palevioletred`.

![Theme color set to palevioletred](https://blokks.co/docs/images/palevioletred.png)

*You should note that custom properties are case sensitive, so `--blokks-theme-color` and `--Blokks-Theme-Color` are different.*

Below you will find the complete list of colors which you can change with *custom properties*:

| Property | Description |
|----------|-------------|
| `--blokks-theme-color` | Lorem ipsum dolor sit amet, consectetur adipiscing elit. |
| `--blokks-default-background-color` | Suspendisse ornare posuere tellus et posuere. Donec dignissim, nibh quis tincidunt sollicitudin. |
| `--blokks-dark-background-color` | Suspendisse tellus nulla, interdum bibendum ultricies eu. |
| `--blokks-default-text-color` | Quisque eget erat ligula. Fusce blandit nisi id lobortis mollis. |
| `--blokks-light-text-color` | Pellentesque tincidunt mattis sagittis. |
| `--blokks-dimmed-text-color` | Fusce volutpat quam et lacus pharetra pellentesque at et orci. |
| `--blokks-stroke-color` | Duis ipsum tortor, interdum vel lorem eget. |
| `--blokks-default-icon-color` | Aliquam vulputate justo lorem, a pellentesque metus porttitor id. |
| `--blokks-light-icon-color` | Vivamus viverra erat id maximus blandit. |
| `--blokks-selection-color` | Etiam dignissim ut lorem non vulputate. |

![Colors used in the embed](http://blokks.co/docs/images/colors.png)

**See also**
- [Structure of our embed](http://structure)
- [Working with CSS Variables in JavaScript](http://cssproperties)
- [Browser support](http://browsersupport#customproperties)


## Update row and column sizes
Depending on [the chosen layout](http://design/layout), you can use *custom properties* to update the size of rows and columns of your schedule.  

For `columns` layout these properties are:

| Property | Description |
|----------|-------------|
| `--blokks-table-header-height` | Quisque eget erat ligula. Fusce blandit nisi id lobortis mollis. |
| `--blokks-table-cell-height` | Fusce volutpat quam et lacus pharetra pellentesque at et orci. |
| `--blokks-time-captions-width` | Duis ipsum tortor, interdum vel lorem eget. |
| `--blokks-table-column-width` | Vivamus viverra erat id maximus blandit. |

And for `rows` layout they are:

| Property | Description |
|----------|-------------|
| `--blokks-table-header-width` | Suspendisse tellus nulla, interdum bibendum ultricies eu. |
| `--blokks-table-cell-width` | Pellentesque tincidunt mattis sagittis. |
| `--blokks-table-cell-height` | Fusce volutpat quam et lacus pharetra pellentesque at et orci. |
| `--blokks-time-captions-height` | Aliquam vulputate justo lorem, a pellentesque metus porttitor id. |
| `--blokks-table-column-height` | Etiam dignissim ut lorem non vulputate. |

Sometimes changing the `width` or `height` alone doesn’t work. Some acts are too small while others are too big. This is where the `data-timescale` option comes in. Basically, the *timescale* sets the duration of a single timeslot. 

Read more about *timescale* and how to use it.

**See also**
- [Set the timescale of the embed](http://configure/timescale)
- [Working with CSS Variables in JavaScript](http://cssproperties)
- [Browser support](http://browsersupport#customproperties)


## Add own fonts

### Use system fonts
You can add your own fonts in the same way you [changed the colors](http://design/colors) and [sizes of your schedule](http://design/sizes). For example,  the following snippet will show `Helvetica Neue` instead of `Liberation Sans`, which is Blokks default font.

```
<style media="screen">    
	:root {
		--blokks-default-font: "Helvetica Neue", Helvetica, Arial, sans-serif;
	}
</style>
```

The embed will try to load `Helvetica Neue` first. If it wasn’t found it skips to next one. And so on. Finally falling back to system fonts. 

Using system fonts boosts performance because your browser doesn't have to download any font files. However, the number of available system fonts is limited. 

### Import external fonts
Luckily we can use fonts from [Google Font](https://fonts.google.com/), [Adobe Typekit](https://typekit.com/) or other Type Foundries. Together they offer hundreds of great fonts to choose from. 

#### Google Font
When using [Google Font](https://fonts.google.com/), copy the following snippet into the `<head>` of your HTML page as described on their website:

```<link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet">```

But instead of setting `font-family: "Roboto", sans-serif;` set the *custom property* instead: 

```
:root {
	--blokks-default-font: "Roboto", sans-serif;
}
```

#### Adobe Typekit
Using [Adobe Typekit](https://typekit.com/) fonts differs just a little bit from [Google Font](https://fonts.google.com/). Again, copy the embed code as described on their website:

```
<script src="https://use.typekit.net/hjy6zgg.js"></script>
<script>try{Typekit.load({ async: true });}catch(e){}</script>
```

And instead of setting `font-family: "liberation-sans",sans-serif;` use our *custom property* instead: 

```
:root {
	--blokks-default-font: "liberation-sans", sans-serif;
}
```

### Self-host fonts 
Sometimes you already purchased and downloaded a font which you are using in your website or app. In that case you are self-hosting your fonts. 

To use self-hosted fonts with Blokks we need a little bit of information about them. The `@font-face` CSS rule specifies the name of your font, its location and its font-weight. And looks something like this:

```
@font-face {
	font-family: “Liberation Sans”;
	src: url(“liberation-sans.woff”) format('woff’),
		   url(“liberation-sans.woff2”) format('woff2’);
	font-weight: 400;
}
```

You can see that the name of the font is set to `Liberation Sans`. This is the name that would be referenced in our custom property:

```
:root {
	--blokks-default-font: “Liberation Sans", sans-serif;
}
```

**See also**
- [Change colors](http://design/colors)
- [Create your own template](http://themes/)
- [Working with CSS Variables in JavaScript](http://cssproperties)
- [Browser support](http://browsersupport#customproperties)
- [MDN: @font-face](https://developer.mozilla.org/nl/docs/Web/CSS/@font-face)
- [Google Fonts](https://fonts.google.com/)
- [Adobe Typekit](https://typekit.com/)

*Note that [Google Fonts](https://fonts.google.com/) offer open source fonts which you are allowed to use on any website, whether it’s commercial or personal.*

*Using fonts from other Type Foundries  or self-hosted fonts sometimes require paid licenses. Even if a typeface is labeled as “free download”. Check each license based on how you will be using it.*


## Font properties
By now your schedule should match the identity of your conference/festival a lot better. But you may have noticed that by changing `--blokks-default-font`, some of the `font-size` and `letter-spacing` properties are all messed up. Let’s fix this.🔧

The bad news is, we cannot use custom properties to do this. We need to target the text with CSS selectors. The good news is, it’s quite simple: *Right click* the text you want to change and select *Inspect element*. This will open *Developer Tools* of your browser:

![Chrome Developer Tools](https://blokks.co/docs/images/devtools.png)

Grab the `classname` of the element which you selected (in our case this is `.blokks-location__title`) and paste it together with your styling in the `<head>` of your page. For example, let’s make it `bold`, `underlined` and `italic`. And make the `font-size` bigger:

```
<style>
	.blokks-location__title {
		font-size: 18px;
	    font-weight: 700;
	    font-style: italic;
	    text-decoration: underline;
	}
</style>
```

Like custom properties all CSS classnames begin with `blokks-` to avoid naming conflicts. But sometimes some of your existing website’s styling is accidentally used by the embed. Read more about this and [how to solve it](http://themes/bem).

Also, you should note that the order in which CSS rules are stated determines which ones take precedence: *”CSS rules that appear later in the code override earlier rules if both have the same specificity.”* Basically this means that you should add the `<style>` tag after the BLOKKS import:

```
<link href='https://templates.blokks.co/columns.css' rel='stylesheet' media=‘screen’>
```

**See also**
- [Structure](http://themes/structure)
- [Block Element Modifier](http://themes/bem)
- [Conflicting styles](http://themes/conflicts)
- [!important](http://themes/avoindimportant)
- [Change colors](http://design/colors)
- [Use fonts](http://design/fonts)
- [Font shorthand](https://developer.mozilla.org/en-US/docs/Web/CSS/font)


## Replace icons
All icons we use in our schedules are SVGs. 

SVG files are vector based, which means your icons will look stellar on all devices and resolutions. Secondly, since SVGs are XML files, they’re are highly compressible and featherlight to load. And last but not least, SVG files are completely styleable with CSS.

To replace the default icons we need to create a new own icon set. An icon set contains the following files:

| filename | description |
|----------|-------------|
| arrow-down-icon.svg | Down arrow used in the [`Controls`](http://themes/structure#controls) component |
| arrow-left-icon.svg | Left arrow used in the [`Controls`](http://themes/structure#controls) component |
| arrow-right-icon.svg | Right arrow used in the [`Controls`](http://themes/structure#controls) component |
| arrow-up-icon.svg | Up arrow used in the [`Controls`](http://themes/structure#controls) component |
| close-icon-small.svg | Small version of the close symbol. Is used in the [`Alert` popups](http://themes/structure#alerts) |
| close-icon.svg | The symbol used in the close button of the [`Activity Details` component](http://themes/structure#activity-details) |
| dropdown-icon.svg | Symbol used when the [`Date Selector` component](http://themes/structure#date-selector) is a dropdown menu |
| favorite-icon.svg | Symbol which is used to indicate the favorite action |
| unfavorite-icon.svg | Symbol which is used to indicate the unfavorite action |

*You should note that the embed uses the CSS `fill` property to style icons. Convert all shapes to fills when creating your own icons. Also, fill colors set in tools like [Sketch](https://www.sketchapp.com/) or [Adobe Illustrator](http://www.adobe.com/nl/products/illustrator.html) are overriden by CSS.*

**See also**
- [Icon System with SVG Sprites](https://css-tricks.com/svg-sprites-use-better-icon-fonts/)
- [SVG symbol a Good Choice for Icons](https://css-tricks.com/svg-symbol-good-choice-icons/)
- [Inline SVG vs Icon Fonts](https://css-tricks.com/icon-fonts-vs-svg/)

### Optimizing SVGs
SVG files, especially exported from tools like [Sketch](https://www.sketchapp.com/) or [Adobe Illustrator](http://www.adobe.com/nl/products/illustrator.html) contain a lot of information which can be safely removed or converted without affecting rendering result.

Optimizing and compressing your SVGs is simply done with a command-line tool called *SVGO*. *SVGO* requires `[Node.js](https://nodejs.org/en/)` installed on your computer.

If `[Node.js](https://nodejs.org/en/)` is installed, run the following command from your console:

```
npm install -g svgo
```

This will install *SVGO*. After installing, *SVGO* can be run with the following command:

```
svgo -f path/to/folder/with/svg/files
```

This command will use the default *SVGO* settings to compress and override all files in the `path/to/folder/with/svg/files` folder.

*Make sure your replace `path/to/folder/with/svg/files` with the directory containing your svg files.*

!!!!!!FILMPJE HIERO!!!!!!

*[SVGOMG](https://jakearchibald.github.io/svgomg/) is a webbased interface which allows you to drag & drop your SVGs and get an optimized version. There are also *SVGO* plugins for both [Sketch](https://github.com/BohemianCoding/svgo-compressor) and [Adobe Illustrator](https://github.com/davidderaedt/SVG-NOW).*

**See also**
- [Node.js](https://nodejs.org/en)
- [SVGO](https://github.com/svg/svgo)
- [SVGOMG](https://jakearchibald.github.io/svgomg/)
- [SVGO Sketch Plugin](https://github.com/BohemianCoding/svgo-compressor)
- [SVGO Illustrator Plugin](https://github.com/davidderaedt/SVG-NOW)
- [PostCSS](http://configure/postcss)

### Create spritesheets
Spritesheets combine multiple images into a single file. A website using spritesheets loads faster it has to load just one, instead of multiple images.
  
To create a spritesheet we use another command-line tool named *svg-sprite*. Again, [Node.js](ttps://nodejs.org/en) is required for this.

First, install *svg-sprite* by running the following command:
  
```
npm install -g svg-sprite
```

After installing *svg-sprite*, run: 

```
svg-sprite --symbol --svg-xmldecl=false --shape-transform='' --symbol-dest='.' --symbol-sprite='icon-set.svg' --symbol-example=false path/to/folder/with/svg/files/*.svg
```

This will merge all the SVGs into one file named `icon-set.svg`. Just one thing left to do: tell the embed to use the new icon set by setting the [`data-icon-set=“path/to/icon-set.png“`](http://configure/options#icon-set)

And that’s all there is to it! 🤘

*Make sure your replace `path/to/folder/with/svg/files/*.svg` with the directory containing your svg files.*

!!!!!!FILMPJE HIERO!!!!!!

*[IcoMoon](https://icomoon.io/app) is a webbased interface that does a great job of producing SVG spritesheets. Drag & drop your SVGs and export them as a spritesheet.*

!!!!!!FILMPJE HIERO!!!!!!

**See also**
- [Configure your embed](http://configure/options#icon-set)
- [SVG-Sprite](https://github.com/jkphl/svg-sprite)
- [IcoMoon](https://icomoon.io/app)
- [PostCSS](http://configure/postcss)

### Styling SVG’s
Replacing icons may cause them to be too big or too small. Like [changing the fonts](http://design/fonts) we can fix this by selecting the icon in the *Developers Tools* and change its size. 

For example, this will resize the close icon to `50px` of the [*Activity details* component](http://themes/structure#activity-details):

```
<style>
	.blokks-activity-details__close-button svg {
		width: 50px;
		height: 50px;
	}
</style>
```

**See also**
- [SVG and CSS](https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/SVG_and_CSS)


## All properties
Besides colors, fonts and sizes, there are more *custom properties* for you to change. To get a list of all properties, *right click* anywhere on your page, open the *Developer tools* by clicking *Inspect element* and select the `<html>` tag:

![Selecting the HTML tag](http://blokks.co/docs/images/allproperties)

*Pro-tip: Changes made to custom properties are rendered live to screen while editting in the Developer tools. However, these changes are temporary and will be lost when refreshing or closing the window. So don’t forget to copy/paste them when you’re done.*

!!!!! Filmpje over protip !!!!!


## Printable version

You can [print the schedule](http://embed/printing) including your favorites by clicking the [print button](http://themes/navigation#options) or hitting `CTRL+P` on Windows or `Command+P` on OSX. Unfortunately, it’s not possible to style the printed schedule.

**See also**
- [Print options](http://configure/print)
- [Structure](http://themes/structure#navigation)


————————————————————————————————————————————————————————————————


# Create templates

## Getting started
- Introduction
	- So you want more styling blablaabla
	- set layout to custom


## Basic structure
The schedule is split into smaller, independent pieces called components. Each component has [a unique CSS class](http://theme/bem) which makes them easy to style separately. 

The schedule is built out of five main components (which in turn are split into smaller components):

- [`Navigation`](http://blokks.co/structure#navigation)
- [`Timetable`](http://blokks.co/structure#timetable)
- [`Stage`](http://blokks.co/structure#location) 
- [`Act`](http://blokks.co/structure#activity) 
- [`Act details`](http://blokks.co/structure#details)

![Basic structure for row and column layout](https//blokks.co/docs/structure-desktop.png)

**See also**
- [Block, Element, Modifier](http://themes/bem)
- [Hiding stuff](http://configure/hiding)
- [Setting date selector](http://configure/dateselector)

### Navigation
Visitors of your event use the *navigation* component [to switch between dates](http://themes/structures###navigation), sign in with their account and [add events to their calendar](http://addcal).

#### Date selector
The *date selector* component is visible when your event has multiple dates. Use this component to switch between those 🤓 

On desktop computers the *date selector* is shown as a *button bar*. On mobile devices dates it switches to a *dropdown* menu. You can change this by setting the [`date-selector-type` option](http://configure/options) of the schedule.

![Date selector on mobile and desktop](http://blokks.co/docs/images/dateselector.png)

**See also**
- [Setting date selector](http://configure/dateselector)

#### Options
*Options* lets users sign in to [add favorites](http://favorites) and [see where friends are going](http://friends), [print their schedule](http://configure/print) or import the schedule to their calendar.

![Controls on mobile and desktop](http://blokks.co/docs/images/controls)

#### Controls
Users can scroll through [stages](http://themes/structure/locations) with the control buttons. The *controls* are visible on desktop when the [`data-layout` option is set to `columns`](http://design/layouts) and are always visible on mobile devices.

![Controls on mobile and desktop](http://blokks.co/docs/images/controls)

### Timetables
A single day of your event is represented by the *timetable* component, which consist out of a [*dashboard*](http://themes/dashboard), [*locations*](http://themes/location), [*activities*](http://themes/activity) and a *time indicator* component.

![Timetable on desktop](https://blokks.co/docs/images/dashboard.png)

If a *timetable* has today’s date it is automatically selected. The *time indicator* is visible and scrolled into view so that current speakers are shown. You can disable this by setting the [`data-autoscroll` option](http://configure/options) of the schedule.

*Some components (for example, the dashboard and time indicator) are only visible during the event and therefor difficult to test or style. However you can enable them anytime by setting the [`data-testflight` option of the schedule](http://configure/options)*

**See also**
- [Embed options](http://configure/options)
- [Setting testflight](http://configure/testflight)

### Dashboard
On days of the event the *dashboard* component is shown on mobile devices. The component shows speakers or bands now playing and the ones coming up next.

*Make the dashboard visible anytime by setting the [`data-testflight` options](http://configure/options#testflight)

![Blokks mobile dashboard](https://blokks.co/docs/images/dashboard.png)

**See also**
- [Block, Element, Modifier](http://themes/bem)
- [Favorites](http://favorites)
- [Setting testflight](http://configure/testflight)
  
### Locations
The *location* component represents a single stage of your event. Basically it’s a list of [*activities*](http://themes/activity) sorted by time.

![Blokks locations](https://blokks.co/docs/images/dashboard.png)

### Activities
Speakers, talks, artists and performances are represented by the *activity* component. Its position and its size describe the start and duration of the activity and it automatically calculated by the embed.

![Blokks activities](https://blokks.co/docs/images/dashboard.png)

Selecting an *activity* will show the [*activity details*](http://themes/activitydetails) component:

**See also**
- [Activity popup](http://gettingstarted/activity)
- [Activity details](http://themes/activity-details)
- [Favorites](http://favorites)

### Activity details
The *activity details* component is a modal presented when an [*activity*](http://themes/activity) is selected. 

It shows all information about the selected speaker, talk, artist or performance. This includes titles, subtitles, times, descriptions, photos, links and embeds.

![Blokks activity details](https://blokks.co/docs/images/details.png)

**See also**
- [Activity popup](http://gettingstarted/activity)
- [Favorites](http://favorites)

### Notifications & Alerts
*Notifications* and *alerts* are shown when we need your immediate attention. For example, showing instructions when a user wants to [sign in](http://embed/favorites). Or displaying an error when something went wrong.

Like [*activity details*](http://themes/structure#activity-details), *notifications* and *alerts* are presented as a modals.


## Preloader
One of our main priorities is to load your schedule as fast as possible on desktop and mobile devices. But it can happen, that during an event the internet connection is unreliable and slow. 

We’ve all been there.

In that case, you want to show a `preloader` to let your users know that it may take longer than expected. Just add your own `preloader` markup to the `<div id=“blokks”>` container. 

For example: 

```
<div id=‘blokks’>
	<span>Loading…</span>
	<svg><use xlink:href=“assets.svg#preloader”></use></svg>
</div>
```

*Please note that the `preloader` isn’t part of the [structure of the embed](http://theme/structure), and is replaced with the embed when all data is loaded.*

**See also**
- [Embedding your schedule](http://embed/code)
- [Replace icons](http://design/iconset#spritesheets)
- [Cache](http://configure/cache)
- [Offline support](http://configure/offline)


## Block, Element, Modifier
Now that you’re familiar with [the structure of the schedule](https://themes/structure) we can have a look at the clasnames of its elements. We use a simple naming convention thought up by the guys at [Yandex](https://tech.yandex.com/bem/) called *Block, Element, Modifier*, or simply *BEM*. 

*BEM* provides a way to arrange your CSS classes into modules or components. Basically it follows this pattern:

```
<style>
	.block {
	}

	.block__element {
	}
	
	.block--modifier {
	}
</style>
```

| Classname | Description |
|-----------|-------------|
| `.block` | Represents the higher level of an abstraction or component. |
| `.block__element` | Represents a descendent of `.block` that helps form `.block` as a whole. |
| `.block--modifier` | Represents a different state or version of `.block`. |

Although *BEM* may look weird at first with all its *__*, *--* and long classnames. You should trust us, it worth it 😎

*Visit [the official `BEM` website](http://getbem.com/naming/) if you want learn more.*

### CSS Specificity
If multiple CSS selectors are targeting the same HTML element and are trying to assign the same property, the selector with the highest CSS specificity value will “win”.

In other words, the most specific selector gets to assign its property values to the target element: 

```
<styles>
	#main .header > h1 {
		color: palevioletred;
	}
	
	.header h1.title {
		font-family: “Helvetica”;
		color: red;
	}
</styles>
```

In this case `#main .header > h1` is more specific than `.header h1.title`. So the text in `<h1 class=“title”>` is shown in `Helvetica` and `palevioletred`. 

Although the example is easy to understand, you can imagine that specific selectors like this adds complexity which can lead to conflicts and unwanted styling. 

*BEM* reduces style conflicts by keeping specificity to a minimum. With *BEM*, specificity is determined only by the order of the CSS rules. Rules which are defined later have higher precedence over those defined earlier. 

So add your `<style>` or `<link>` tag after the BLOKKS import and you’re good to go. 

That’s it ✌️ 
  
### CSS Scoping
In addition to [reducing specificity](http://themes/bem#specificy), *BEM* provides a scope by using *unique* CSS classes per element. Together with prefixing our classes with `.blokks` it avoids conflicts with your existing classnames.

Unfortunately there are two exceptions which still can cause conflicts with your website’s styling: the `!important` rule and `type selectors`.

In general the `!important` rule is bad practice and should be avoided at all time:

> When an important rule is used on a style declaration, this declaration overrides any other declarations. 
> Although technically `!important` has nothing to do with specificity, it interacts directly with it. Using `!important`, however, is bad practice and should be avoided because it makes debugging more difficult by breaking the natural cascading in your stylesheets.
> Source: [Mozilla.org - The !important exception](https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity#The_!important_exception)

CSS `type selectors` match elements by node name. A `type selector` for a particular element selects all elements of that type. For example, this selector underlines all `<p>` tags:

```
<style>
	p {
		text-decoration: underline;
	}
</style>
```

Although type selectors adds just little bit of specificity it can add unwanted styling because of the cascading nature of CSS. It’s recommended to apply styles by unique CSS classes instead of your element structure.

**See also**
- [Get BEM](http://getbem.com/)
- [CSS Specificity](https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity)
- [Understanding CSS: Selector Specificity](https://medium.com/@dte/understanding-css-selector-specificity-a02238a02a59)
- [Support for BEM Modules in Sass 3.3](http://mikefowler.me/journal/2013/10/17/support-for-bem-modules-sass-3.3)
- [PostCSS plugin implementing BEM as at-rules](https://github.com/kezzbracey/postcss-bem)


## Blokks styling
- BEM and Blokks
- CSS modifiers
- Pro-tip: Download CSS
- Note: `margin-top: -1px;` voor timeslots

**See also**
- [Block, element, modifier](http://themes/bem)
- [Template CSS](http://github.com/patrickpietens/blokks-template)


## Animations


## Pseudo-elements
With *pseudo-elements* you can extend the structure of the schedule with CSS. *Pseudo-elements* will add extra elements *before* and *after* the element’s content. These elements are visible to the user and are styleable with CSS. 

Adding `:before` and `:after` is basically the same as:

```
<div>
	<span>:before</span> 
	  This the main content. 
	<span>:after</span>
</div>
```

Without the `content` property *pseudo-elements* won’t be rendered. To make them visible just set the `content` property of the selector. 

Once visible you can change its colors, adding background images, setting font properties, specify dimensions etc.

```
	.blokks-selector:before {
		display: block;
		width: 100px;
		height: 50px;
		background-color: palevioletred;
		content: “”;
	}
	
	.blokks-selector:after {
		position: absolute;
		top: 0;
		left: 100px;
		content: “”;
	}
```

*Pseudo-elements are inline-level elements by default. Don’t forget to change it to `display: block` or `display: inline-block` if you want to set its dimensions.*

**See also**
- [A Whole Bunch of Amazing Stuff Pseudo Elements Can Do](https://css-tricks.com/pseudo-element-roundup/)
- [Browser support](http://configure/browsersupport)


## Showcase
TNW2017
Dutch Embassy


————————————————————————————————————————————————————————————————


# Configure your schedule (Patje)
- Accessibility
- Auto scrolling
- Auto update
- Date selector
- Disabling features
  - Hide the controls
  - Hide the dashboard
    - Note: More information about the dashboard: 
      `> Design your schedule > Testflight`
  - Hide “export to ical” button
  - Hide images in acts
  - Hide print button
  - Note: More information about configuring your embed:
     `> Configure your schedule > Options`
- Favorites
  - Choose your social provider
    - Facebook
    - Twitter
    - LinkedIn
  - Enable friends
    - Note: Friends don’t work with LinkedIn
- Set date format
- Add your own copy and translations
- Update timescale
- Local scroll
  - Note: Sticky headers won’t work with localscrolling enabled:
     `> Configure your schedule > Browser support`
- Print options
	- Orientation
	- disable print
- Testflight your embed
  - Dashboard
    - Note: More information about the dashboard:
      `Design your schedule > dashboard`
  - Time indicator
  - Note: Don’t forget to disable testflight on production
- Auto calculate size of acts
  - Adds modifiers describing the size of the act
  - Note: Disable this feature for faster rendering
- Caching
  - Why is caching enabled
  - Override cache with `?preview` querystring
  - Using CDN to deliver assets
- Offline support with ServiceWorkers
  - Images are cached on the clientside
  - What do you need to enable offline support
  - Note: More information on ServiceWorkers: https://developers.google.com/web/fundamentals/getting-started/primers/service-workers

- Browser  support
  - Modern browsers
  - Flexbox
    - http://caniuse.com/#feat=flexbox
	- Pseudo elements
  - CSS Variables
    - http://caniuse.com/#search=CSS%20Variables
    - Fallback: Use CSS classes to style the embed. For more information about styling using classes: `> Create your theme > Block Element Modifier`
    - Use PostCSS > PostCSS custom properties
	    - https://github.com/postcss/postcss-custom-properties
  - Sticky headers
    - Why doesn’t my headers stick
    - Sticky headers won’t work with local scrolling enabled
    - http://caniuse.com/#search=sticky
  - Fallback options 
  - Polyfills
    - https://github.com/mzabriskie/axios/blob/master/UPGRADE_GUIDE.md#es6-promise-polyfill
    - https://github.com/stefanpenner/es6-promise
    - https://github.com/paulirish/matchMedia.js/
    - https://github.com/WICG/IntersectionObserver/tree/gh-pages/polyfill
    - 
  - CORS problemen in browser uitleggen
    - Dat ene Chrome issue wat Niek had: `Menu → Settings → Show Advanced Settings... → Privacy: Content Settings` 
