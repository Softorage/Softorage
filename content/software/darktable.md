---
title: "darktable"

description: "darktable is a free and open-source post-photography workflow application and raw developer"

image: "https://cdn.statically.io/img/img.softorage.com/software-logo/darktable.png?h=64"

status: ["Active"]

website: "https://www.darktable.org/"

get_it:
  - from: "Authentic"
    url: "https://www.darktable.org/install/"
  - from: "FossHub"
    url: "https://www.fosshub.com/darktable.html"
    platform:
      - name: "Windows"
        hardware: ["dskp"]
        arch: ["x64"]
        official: true
        portable: false
      - name: "macOS"
        hardware: ["dskp"]
        official: true
        portable: false
  - from: "Malavida"
    url: "https://www.malavida.com/en/soft/darktable/linux/"
    platform:
      - name: "Linux"
        hardware: ["dskp"]
        arch: ["x64"]
        official: true
        portable: false
  - from: "FileHorse"
    url: "https://www.filehorse.com/download-darktable/"
    platform:
      - name: "Windows"
        hardware: ["dskp"]
        arch: ["x64"]
        official: true
        portable: false
  - from: "Softpedia"
    url: "https://www.softpedia.com/get/Multimedia/Graphic/Graphic-Editors/darktable.shtml"
    platform:
      - name: "Windows"
        hardware: ["dskp"]
        arch: ["x64"]
        official: true
        portable: false
  - from: "Softpedia"
    url: "https://linux.softpedia.com/get/Multimedia/Graphics/darktable-51811.shtml"
    platform:
      - name: "Linux"
        hardware: ["dskp"]
        official: true
        portable: false
  - from: "MacUpdate"
    url: "https://www.macupdate.com/app/mac/45193/darktable"
    platform:
      - name: "macOS"
        hardware: ["dskp"]
        official: true
        portable: false

sysreq:
  general:
    -
      min: "A CPU that supports SSE2 (almost all Intel CPUs after Pentium 4)"
      recm: "New generation CPUs"
    -
      min: "Less than 4GB RAM and more than 4 to 8GB swap space"
      recm: "4GB or more RAM and 4 to 8GB swap space"

developer: ["Johannes Hanika<OD>", "Others"]

initial_release: ["8 April 2009"]

repository: ["https://github.com/darktable-org/darktable"]

written_in: ["C", "Lua", "C++"]

platform:
  - dskp:
      - name: "Windows"
        official: true
      - name: "Linux"
        official: true
      - name: "macOS"
        official: true

categories: ["Photo post-Production", "Photography Workflow"]

license: ["GPL v3+"]

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
  overview: ["https://www.darktable.org/about/"]
  developer: ["https://www.darktable.org/contact/"]
  initial_release: ["https://en.wikipedia.org/w/index.php?title=Darktable&oldid=878467735", "http://www.darktable.org/news/8/", "http://www.darktable.org/blog/11/"]
  written_in: ["https://github.com/darktable-org/darktable"]
  platform:
    - dskp: ["https://www.darktable.org/install/"]
  sysreq:
    general: ["https://www.darktable.org/about/faq/#faq-sigill", "https://www.darktable.org/2012/03/darktable-and-memory/", "https://lewiscollard.com/computar/darktable-linux-review/"]
  license: ["https://www.darktable.org/about/"]
  rating:
    - name: "FossHub"
      type: "user"
      url: "https://www.fosshub.com/darktable.html"
    - name: "Malavida"
      type: "user"
      url: "https://www.malavida.com/en/soft/darktable/linux/"
      remarks: "Linux"
    - name: "FileHorse"
      type: "user"
      url: "https://www.filehorse.com/download-darktable/"
      remarks: "x64 bit Windows"
    - name: "Softpedia"
      type: "user"
      url: "https://www.softpedia.com/get/Multimedia/Graphic/Graphic-Editors/darktable.shtml"
      remarks: "x64 bit Windows"
    - name: "Softpedia"
      type: "user"
      url: "https://linux.softpedia.com/get/Multimedia/Graphics/darktable-51811.shtml"
      remarks: "Linux"
    - name: "MacUpdate"
      type: "user"
      url: "https://www.macupdate.com/app/mac/45193/darktable"
      remarks: "macOS"
  status: ["https://www.darktable.org/news/", "https://www.darktable.org/blog/"]

rating:
  - name: "FossHub"
    rate: [5, 5]
    num: 10
  - name: "Malavida"
    rate: [8, 10]
    num: 16
    remarks: "Linux"
  - name: "FileHorse"
    rate: [7.3, 10]
    num: 30
    remarks: "x64 bit Windows"
  - name: "Softpedia"
    rate: [3, 5]
    num: 10
    remarks: "x64 bit Windows"
  - name: "Softpedia"
    rate: [4.7, 5]
    num: 30
    remarks: "Linux"
  - name: "MacUpdate"
    rate: [4, 5]
    num: 30
    remarks: "macOS"

note: |
  * Detailed synopsis regarding [System Requirements](#sysreq) can be found at [this link](https://www.darktable.org/2012/03/darktable-and-memory/).
---
  darktable is a free and open-source [photography workflow](/categories/photography-workflow) application and raw developer. Rather than being a [raster graphics editor](raster-graphics-editor) like Adobe Photoshop or [GIMP](/software/gimp), it comprises a subset of image editing operations specifically aimed at non-destructive raw [photo post-production](photo-post-production). It is primarily focused on improving a photographer's workflow by facilitating the handling of large numbers of images.
  
  All editing is fully non-destructive and only operates on cached image buffers for display. The full image is only converted during export. Raw image loading is done using rawspeed, high-dynamic range and standard image formats such as jpeg are also supported. The core operates completely on floating point values, so darktable can not only be used for photography but also for scientifically acquired images or output of renderers (high dynamic range).
  
  [Blog](https://www.darktable.org/blog/)  I  [Forum](https://discuss.pixls.us/c/software/darktable)  I  [User Manual](http://www.darktable.org/usermanual/en/)  I  [News](https://www.darktable.org/news/)  I  [Users' Wiki](https://redmine.darktable.org/projects/users/wiki)  I  [Development Wiki](https://redmine.darktable.org/projects/darktable/wiki)  I  [FAQ](https://www.darktable.org/about/faq/)  I  [Mailing list](https://www.darktable.org/contact/)
  
