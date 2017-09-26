+++
date            = "2017-09-19T11:31:19+02:00"
author          = "@patrickpietens"

title           = "Offline"
description     = ""
keywords        = ["blokks", "configure", "schedule", "offline", "service workers"]
weight          = 617
draft 			= true

[menu.main]
parent          = "configure-your-schedule"
+++

As you probably know internet connections can be flaky during events. Too many people try to access the internet at one place/



A service worker is a script that stands between your website and the network, giving you, among other things, the ability to intercept network requests and respond to them in different ways.

Service Workers give you the control of a web page where you can programmatically select the components you want to cache. Keep in mind that it’ll run offline only on second or subsequent visits.

Blokks does all the heavy lifting. Registering, Installing And Activating A Service Worker. The only thing you need to do is download the serviceworker.js, upload it to your server and provide a secure connection.


One common problem that Service Workers have is that they only work in “secure origins” (HTTPS sites, basically) in line with a policy which prefers secure origins for powerful new features. However, even localhost is considered a secure origin, so developing on it is an easy way to avoid this error. If you prefer, you could also use GitHub Pages (as I did) since they’re served over HTTPs.

In the above code ./service-worker.js is the path of the Service Worker. The scope is the path on which the Service Worker will act. In this example the Service Worker will control the page having the path /about/. The scope is optional and has ./ by default. 

Stale and revalidate


Also, note that service workers require HTTPS to work. There is an important and useful exception to this rule: Service workers work for localhost on insecure http, which is a relief because setting up local SSL is sometimes a slog.

Using ServiceWorker you can hijack connections, respond differently, & filter responses. Powerful stuff. While you would use these powers for good, a man-in-the-middle might not. To avoid this, you can only register for ServiceWorkers on pages served over HTTPS, so we know the ServiceWorker the browser receives hasn't been tampered with during its journey through the network.

Fun fact: This project forced me to do something I’d been putting off for a while: getting and configuring SSL for the www subdomain of my website. This is something I urge folks to consider doing because pretty much all of the fun new stuff hitting the browser in the future will require SSL to be used.


Strategies:

cacheFirst: static, userinfo, api

networkFirst: favorites 


Disabling caching by not uploading the serviceworker.js


**See also**
- [Service Workers: an Introduction](https://developers.google.com/web/fundamentals/getting-started/primers/service-workers)
- [The ServiceWorker: The network layer is yours to own](https://www.youtube.com/watch?v=4uQMl7mFB6g)
- [https://jakearchibald.github.io/isserviceworkerready/](https://jakearchibald.github.io/isserviceworkerready/)
- [Let’s Encrypt - Free SSL/TLS Certificates](https://letsencrypt.org/)
- [Browser support](http://configure/browsersupport)