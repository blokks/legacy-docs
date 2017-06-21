+++
date            = "2016-10-20T11:31:19+02:00"
author          = "@patrickpietens"

title           = "Basics"
description     = "In this section, you’ll find information on how to create your first schedule."
keywords        = ["blokks", "documentation", "basics", "schedule"]
weight          = 1

[menu.main]
menu            = "main"
parent          = "manage-your-schedule"
+++

In this section, you’ll find information on how to create your first schedule.

## Settings
Your site’s settings are in a file called *sv_settings.txt*. Anything you change here you can also change in your admin page.

---

Your **sv_settings.txt** contains four things by default (some themes will have extra settings). Here is the settings file for this site:

| Attribute               | Type    | Description                                                                       |
|-------------------------|---------|-----------------------------------------------------------------------------------|
| **totalCount**          | integer | The total count of recipients                                                     |
| **totalSentCount**      | integer | The count of recipients that have the message pending and have status: *calling*  |
| **totalDeliveredCount** | integer | The recipients array.                                                             |
