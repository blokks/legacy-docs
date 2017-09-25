+++
date            = "2017-09-15T11:31:19+02:00"
author          = "@patrickpietens"

title           = "Create your own layout"
description     = "The schedule is split into smaller, independent pieces called components."
keywords        = ["blokks", "templates", "themes", "structure", "layout"]
weight          = 509

[menu.main]
parent          = "create-templates"

[[related]]
title = "Choose your layout"
url = "choose-your-layout.md"

[[related]]
title = "Configure your layout"
url = "http://configure/layouts"
+++

When starting a new template you can choose to [use on of our existing layouts](choose-your-layout.md) or decide to implement your own. In that case set the [`data-layout`](http://configure/layouts) option of your embed code to `custom`. This will strip all layout properties from the schedule, giving you a clean slate.