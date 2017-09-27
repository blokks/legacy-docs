+++
date            = "2017-09-19T11:31:19+02:00"
author          = "@patrickpietens"

title           = "Date format"
description     = ""
keywords        = ["blokks", "configure", "schedule", "embed", "date", "format"]
weight          = 607

[menu.main]
parent          = "advanced-options"

[[related]]
title = "Advanced options: Time format"
url = "time-format.md"
+++

You can change the way dates are displayed by setting `data-date-format`. It takes a string of tokens and replaces them with their corresponding values:

| Day of the week |   |
|-----------------|---|
| *dd* | Su Mo ... Fr Sa |
| *ddd*	| Sun Mon ... Fri Sat |
| *dddd* | Sunday Monday ... Friday Saturday |

| Day of the month |   |
|------------------|---|
| *D* | 1 2 ... 30 31 |
| *Do* | 1st 2nd ... 30th 31st |
| *DD* | 01 02 ... 30 31 |

| Month |   |
|-------|---|
| *M* | 1 2 ... 11 12 |
| *Mo* | 1st 2nd ... 11th 12th |
| *MM* | 01 02 ... 11 12 |
| *MMM* | Jan Feb ... Nov Dec |
| *MMMM* | January February ... November December |

| Year |   |
|------|---|
| *YY* | 70 71 ... 29 30 |
| *YYYY* | 1970 1971 ... 2029 2030 |
### Example

```html
<script	defer src='[path-to-embed]'
  data-blokks-id='[schedule-id]'
  data-date-format='Do MMM'>
</script>
```