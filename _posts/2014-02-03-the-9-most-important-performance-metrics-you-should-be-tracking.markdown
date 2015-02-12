---
layout: post
title:  "The 9 most important web performance metrics you should be tracking"
date:   2015-02-03
categories: [web performance]
author: Anh-Tuan Gai
---

If you doubt that web performance impacts acquisition costs, retention and conversion you should read our latest blog post: 4 reasons why your CEO should care about web performance optimization. If you are convinced that web performance is a key to success, you are looking for optimization tips. The first one we will provide is the main focus of this post: you should start tracking important metrics.

### Metrics categories:

There are tens of web performance monitoring software, self hosted or in the cloud. Each solution uses one or multiple monitoring technics focusing on the 4 components involved in displaying a web page or a content to a real user: server, network, application or browser. These solutions rely on three distinct approaches, i.e. synthetic monitoring (e.g. probe), backend monitoring (e.g. application performance monitoring, network monitoring) and Real User Monitoring (RUM). As a result, in web performance optimisation (WPO) like in web analytics, the problem is not the lack of data but data overwhelming. Efficient Web Performance Optimization requires 2 sets of performance metrics...

#### Users and business oriented performance metrics:

Users and business oriented performance metrics help you understand how your real users experience your website and if it matches business requirements. These metrics should answer the 3 following questions:
What is the perception of your users with regard to your website speed?
How long does it take for a user to get what he is looking for, i.e. to fulfill user expectation?
How long does it take to match business requirements, i.e. display page goal like the purchase button?

#### Development and operations oriented performance metrics:

Development and operations oriented performance metrics help you identify problems and optimization opportunities. These metrics should answer the following questions:
Does/Did your website have availability or performance issues?
For one particular page/content, which tier (network, server, application, browser) has/had the most impact on users and business performance metrics? i.e which team should work on performance optimization.

### The 9 web performance metrics

Optimizing Web Performance without one of these two sets will resulted in wasted resources and lost revenues. Using user and business oriented metrics alone means that every time you identify that a page should be optimized, you will lose time in problem resolution. Using development and operation oriented metrics alone you will lose time on optimizations that do not impact your company bottom line. To that end, here is the cheat sheet of the 9 most important web performance metrics to track:

####1. Availability
This metric is the most straightforward when monitoring performance: if your site or a corner of it is down it is the only metric you will get. It is also the metric everyone will instantly notice. It is a good candidate to set alerts on. You should monitor at least every endpoint: website, mobile site, API and mobile app backend. Additionally you should monitor every piece of your infrastructure (servers, network devices, tier web services). Optimizing availability and its impact on user satisfaction requires that any availability problem root cause is found and corrected, and that information is shared with end users (e.g. using status page).

####2. Lookup time
Before making a request to your servers, a browser must find them among the millions of servers connected to the internet. If a browser spend seconds looking for your servers IP adresses, code and infrastructure optimizations are useless. This metric mainly depends on latency between users and DNS servers. This metric helps operation teams with DNS performance optimization. Furthermore, you should monitor lookup time for all subdomains and external domains involved in delivering your website. Reducing the total number of domains involved (i.e. lookups) and good DNS provider selection is a simple way to improve total lookup times.

####3. Connection time
Even if a browser quickly finds your servers, it can not send any request until a connection is established. Connection time depends on latency, the browser of users and the load of servers. This metric helps the operations team optimize load balancers and proxies. You should monitor connection time for every domain involved. Reducing the total number of domain involved (i.e. connections establishment and warming up) and using fast HTTP proxies like Nginx are simple actions to improve total connections time as well as user related performance metrics.

####4. Response time
Initial actions when trying to optimize performance are generally on server response time. Response time depends on latency and on backend response time. Notice that it is important to include round trip time in the metric because servers can be as fast as they can, if latency is high it will impact user experience. This metric helps development and operations team optimize code, database, infrastructure and caching. Tracking tiers timing separately will help find the best optimization opportunities. Using proxy-caches (e.g. Varnish) and content delivery network efficiently for static content is a simple and efficient way to optimize response time as well as user perceived performance metrics.

####5. Response download time
Even if the response time is small, the browser will not display anything until the response is fully downloaded. Response downloading time depends on the response size and bandwidth throughput. It helps development and operations teams optimize code, delivery configuration and delivery infrastructure. Using compression, asynchronous loading of secondary content and an efficient delivery strategy (multi and hybrid content delivery networks) helps in reducing the response download time and the performance as perceived by your users.

####6. Above the fold loaded
This is the first impression of your website performance from your users’ perspective. It represents the time between the click on the referrer page (e.g. search engine, incoming link, ad, social network page) and the time to load the visible part of the page. It will depend on many criterion including code, media loading, external content loading (e.g. ads), browser, CPU and screen size. WebPageTest speed index is a good reference metric for above the fold loading time. However, user timings are a better way to measure above the fold loading time since it gives the real user perspective (i.e. taking into account all criteria mentioned above). Limiting the number of stylesheets, asynchronous script loading, and lazy loading of media and under the fold blocks are simple actions to optimize above the fold loading time.

####7. Main content loaded
This metric is the return on time investment of your users. When a user clicks on a link to get a product detailed description, the faster you fulfill his need, the most satisfied, engaged and willing to convert the user will be. User timing is the best way to measure it. Block loading prioritization is an efficient way to optimize main content loading time.

####8. Goal loaded
This metric ensures that performance matches business needs. If the block containing the stock status, the time to delivery and the purchase button takes seconds to display, your user will switch to your competitor’s website in his next browser’s tab. Block loading prioritization is an efficient way to optimize the Goal loading time.

####9. Page loaded
Page load time measures time to load every content on a webpage (except those loaded in the functions triggered at the onload event). From the user’s perspective, it is also the time when the browser tab spinning wheel is replaced by your favicon. Loading secondary content when the onload event is triggered is a simple way to reduce the user perception of loading time.

### What's next?
If you do not have any monitoring tool to collect these metrics or if your tools do not cover these needs, ask WebPerf IO for a trial account. Otherwise, start collecting these metrics, and next time we will tell you how to put these metrics in perspective (i.e segment by technical or business attributes, and correlate with usage, technical and business metrics) to make the best decisions out of them.
