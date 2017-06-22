+++
date            = "2016-10-20T11:31:19+02:00"
author          = "@patrickpietens"

title           = "Campaign Theme"
description     = "The campaign theme is perfect for launching a new company or product. It displays a MailChimp sign-up form, a full-size background image, your site title and description, and a link list."
keywords        = ["blokks", "documentation"]
weight          = 4

[menu.main]
parent          = "manage-your-schedule"
+++

The campaign theme is perfect for launching a new company or product. It displays a [MailChimp](http://www.mailchimp.com) sign-up form, a full-size background image, your site title and description, and a link list. `Hoi niekie`

~~~css
<link rel='stylesheet' href='scripts/blokks.css' media='screen'>
<style media='screen'>
    .dashboard,
    .activity__subtitle {
        display: none;
    }
</style>
~~~

~~~html
<div id='blokks-schedule'></div>
~~~

~~~html
<script
    src='scripts/schedule-1.0.4.js'
    data-blokks-id='26'
    data-layout='vertical'
    data-timescale='1800'
    data-color='#8C5DA5'
    defer>
</script>
~~~

~~~JavaScript
window.blokks = window.blokks || {};
window.blokks.schedule = new Schedule(myId, myTarget, myOptions, myData); const schedule = myIdentifier;
~~~

The campaign theme is perfect for launching a new company or product. It displays a [MailChimp](http://www.mailchimp.com) sign-up form, a full-size background image, your site title and description, and a link list.
