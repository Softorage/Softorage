---
title: "darktable"

info: "A free and open-source post-photography workflow application and raw developer"

image: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Darktable_icon.svg"

status: "Active"

website: ["https://www.darktable.org/"]

get_it:
  - ["Authentic", "https://www.darktable.org/install/"]

description: |
  darktable is a free and open-source [photography workflow](/search#photography_workflow) application and raw developer. Rather than being a [raster graphics editor](/search#raster_graphics_editor) like Adobe Photoshop or GIMP, it comprises a subset of image editing operations specifically aimed at non-destructive raw [photo post-production](/search#photo_post-production). It is primarily focused on improving a photographer's workflow by facilitating the handling of large numbers of images.
  
  All editing is fully non-destructive and only operates on cached image buffers for display. The full image is only converted during export. Raw image loading is done using rawspeed, high-dynamic range and standard image formats such as jpeg are also supported. The core operates completely on floating point values, so darktable can not only be used for photography but also for scientifically acquired images or output of renderers (high dynamic range).
  
  [Blog](https://www.darktable.org/blog/) I [Forum](https://discuss.pixls.us/c/software/darktable) I [User Manual](http://www.darktable.org/usermanual/en/) I [News](https://www.darktable.org/news/) I [Users' Wiki](https://redmine.darktable.org/projects/users/wiki) I [Development Wiki](https://redmine.darktable.org/projects/darktable/wiki) I [FAQ](https://www.darktable.org/about/faq/) I [Mailing list](https://www.darktable.org/contact/)

sysreq:
  -
    min: "A CPU that supports SSE2 (almost all Intel CPUs after Pentium 4)"
    recm: "New generation CPUs"
  -
    min: "Less than 4GB RAM and more than 4 to 8GB swap space"
    recm: "4GB or more RAM and 4 to 8GB swap space"

developer: ["Johannes Hanika(original developer) and others"]

initial_release: "8 April 2009"

repository: ["https://github.com/darktable-org/darktable"]

written_in: ["C", "Lua", "C++"]

platform:
  - dskp:
      - ["Windows", "o"]
      - ["Linux", "o"]
      - ["macOS", "o"]

categories: ["Photo post-Production", "Photography Workflow"]

license: ["GPL v3 or later"]

social:
  - name: "Facebook"
    url: "http://www.facebook.com/darktable"
  - name: "Twitter"
    url: "http://twitter.com/#!/darktable_org"
  - name: "Google+"
    url: "http://www.google.com/+darktable"
  - name: "Flickr"
    url: "http://www.flickr.com/groups/darktable/"
  - name: "Wikipedia"
    url: "https://en.wikipedia.org/wiki/Darktable"

source:
  description: ["https://www.darktable.org/about/"]
  developer: ["https://www.darktable.org/contact/"]
  initial_release: ["https://en.wikipedia.org/wiki/Darktable", "http://www.darktable.org/news/8/", "http://www.darktable.org/blog/11/"]
  written_in: ["https://github.com/darktable-org/darktable"]
  platform:
    - dskp: ["https://www.darktable.org/install/"]
  sysreq: ["https://www.darktable.org/about/faq/#faq-sigill", "https://www.darktable.org/2012/03/darktable-and-memory/", "https://lewiscollard.com/computar/darktable-linux-review/"]
  license: ["https://www.darktable.org/about/"]
  rating:
    - ["", "u", ""]
  status: ["https://www.darktable.org/news/", "https://www.darktable.org/blog/"]

---
* Detailed synopsis regarding [System Requirements](#sysreq) can be found at [this link](https://www.darktable.org/2012/03/darktable-and-memory/).