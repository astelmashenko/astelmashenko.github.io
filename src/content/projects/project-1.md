---
title: 'Home page'
description: The home page is a static site, based on astro project and github pages
publishDate: 'Oct 08 2024'
seo:
  image:
    src: '/home.png'
    alt: Project preview
---

![Project preview](/home.png)

The first version of my home page was published as an application of Google App Engine, it is before clouds became popular.
It was written in python and an adopted for GAE version of web framework, and it is still working https://ja-tam-hrd.appspot.com/ !
Currently my script on deploying is not working anymore and it's time to try something new, because effort to learn how to re-deploy it on 
GCP (ancestor of GAE) is big enough.

After some time of researching I chose:
* [astro](https://astro.build/)
* github pages for hosting
* github actions to deploy it
* [github repo](https://github.com/astelmashenko/astelmashenko.github.io) to store code
* neovim to edit content

I'm pretty happy with my choices!
