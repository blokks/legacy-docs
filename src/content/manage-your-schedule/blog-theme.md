+++
date            = "2016-10-20T11:31:19+02:00"
author          = "@patrickpietens"

title           = "Blog Theme"
description     = "The Blog theme renders markdown, HTML and text files. Each file you include will appear on the homepage and be rendered as its own post."
keywords        = ["blokks", "documentation"]
weight          = 3

[menu.main]
parent          = "manage-your-schedule"
+++

The Blog theme renders markdown, HTML and text files. Each file you include will appear on the homepage and be rendered as its own post.

![Blokks screenshot](images/screen.jpg)

By default they are ordered by filename. We found that using the date as your filename *(format: yyyymmdd)* is the best way to keep track of your files because it sorts nicely in your folder, but you can use any numeric or alphanumeric file naming you want. If you post a lot you can append the time to the date (we use military time, way more precise) separated by a dash. If you want to add a title to the filename put a space after the timestamp. Here are some sample filenames:

```Hello, your login token is 134436547```

~~~css
body {
  font-family: "Noto Sans", sans-serif;
}
~~~