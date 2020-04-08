---
title: "Scribus"

description: "A free and open source desktop publishing (DTP) application, designed for layout, typesetting, and preparation of files for professional-quality image-setting equipment"

image: "https://cdn.statically.io/gl/Softorage/images/master/software-logo/scribus.png"

status: ["Active"]

website: "https://www.scribus.net/"

get_it:
  - from: "Authentic"
    url: "https://www.scribus.net/downloads/stable-branch/"
  - from: "TechSpot"
    url: "https://www.techspot.com/downloads/6110-scribus.html"
    platform:
      - name: "Windows"
        hardware: ["dskp"]
        arch: ["x32", "x64"]
        type: "official"
      - name: "Linux"
        hardware: ["dskp"]
        type: "official"
      - name: "macOS"
        hardware: ["dskp"]
        type: "official"
  - from: "FileHorse"
    url: "https://www.filehorse.com/download-scribus-32/"
    platform:
      - name: "Windows"
        hardware: ["dskp"]
        arch: ["x32"]
        type: "official"
  - from: "FileHippo"
    url: "https://filehippo.com/download_scribus/"
    platform:
      - name: "Windows"
        hardware: ["dskp"]
        type: "official"
  - from: "Softonic"
    url: "https://scribus.en.softonic.com/"
    platform:
      - name: "Windows"
        hardware: ["dskp"]
        type: "official"
  - from: "Malavida"
    url: "https://www.malavida.com/en/soft/scribus/"
    platform:
      - name: "Windows"
        hardware: ["dskp"]
        type: "official"
  - from: "MacUpdate"
    url: "https://www.macupdate.com/app/mac/22952/scribus"
    platform:
      - name: "macOS"
        hardware: ["dskp"]
        type: "official"
  - from: "Softonic"
    url: "https://scribus.en.softonic.com/mac"
    platform:
      - name: "macOS"
        hardware: ["dskp"]
        type: "official"
  - from: "FileHorse"
    url: "https://mac.filehorse.com/download-scribus/"
    platform:
      - name: "macOS"
        hardware: ["dskp"]
        type: "official"
  - from: "CNET"
    url: "https://download.cnet.com/Scribus/3000-6675_4-100490.html"
    platform:
      - name: "macOS"
        hardware: ["dskp"]
        type: "official"
  - from: "CNET"
    url: "https://download.cnet.com/Scribus/3000-6675_4-10655204.html"
    platform:
      - name: "Windows"
        hardware: ["dskp"]
        arch: ["x32"]
        type: "official"
  - from: "CNET"
    url: "https://download.cnet.com/Scribus-64-bit/3000-6675_4-75846779.html"
    platform:
      - name: "Windows"
        hardware: ["dskp"]
        arch: ["x64"]
        type: "official"
  - from: "Softpedia"
    url: "https://linux.softpedia.com/get/Text-Editing-Processing/Others/Scribus-2148.shtml"
    platform:
      - name: "Linux"
        hardware: ["dskp"]
        type: "official"

sysreq:
  -
    min: "Windows 2000 SP4, Windows XP, Vista or 7"
    recm: ""
  -
    min: "512MB RAM"
    recm: "1 to 2GB RAM for mac"
  -
    min: "Pentium III – 750MHz processor for Windows | PowerPC or Intel-based processor for mac"
    recm: "Dual Core Intel processors for mac"
  -
    min: "Ghostscript 8.7+ for Windows | Ghostscript 8.6+ for mac"
    recm: ""

developer: ["The Scribus Team"]

initial_release: ["21 June 2003"]

repository: ["https://sourceforge.net/p/scribus/trunk/ci/master/tree/"]

written_in: ["C++", "Qt"]

platform:
  - dskp:
      - name: "Windows"
        type: "official"
      - name: "Linux"
        type: "official"
      - name: "macOS"
        type: "official"
      - name: "Unix(like)"
        type: "official"

categories: ["Desktop Publishing"]

license: ["GPL v2+"]

social:
  - name: "Wikipedia"
    url: "https://en.wikipedia.org/wiki/Scribus"

source:
  overview: ["https://sourceforge.net/projects/scribus/", "https://wiki.scribus.net/canvas/Books", "https://web.archive.org/web/20100106230447/http://www.flesbooks.com/scribus1.3manual/"]
  developer: ["https://wiki.scribus.net/canvas/Help:About_Scribus_Copyright"]
  initial_release: ["https://wiki.scribus.net/canvas/Help:About_Releases", "https://en.wikipedia.org/w/index.php?title=Scribus&oldid=877865744"]
  written_in: ["https://www.scribus.net/contribute/"]
  platform:
    - dskp: ["https://www.scribus.net/downloads/stable-branch/"]
  sysreq: ["https://wiki.scribus.net/canvas/Official:Windows", "https://wiki.scribus.net/canvas/Official:MacOS_Readme"]
  license: ["https://wiki.scribus.net/canvas/Help:About_Scribus_Copyright"]
  rating:
    - name: "TechRadar"
      type: "expert"
      url: "https://www.techradar.com/reviews/scribus"
    - name: "SourceForge"
      type: "user"
      url: "https://sourceforge.net/projects/scribus/reviews"
    - name: "G2CROWD"
      type: "user"
      url: "https://www.g2crowd.com/products/scribus/reviews"
    - name: "CNET"
      type: "user"
      url: "https://download.cnet.com/Scribus/3000-6675_4-10655204.html"
      remarks: "Windows"
    - name: "CNET"
      type: "expert"
      url: "https://download.cnet.com/Scribus/3000-6675_4-10655204.html"
      remarks: "Windows"
    - name: "TechSpot"
      type: "user"
      url: "https://www.techspot.com/downloads/6110-scribus.html"
    - name: "FileHorse"
      type: "user"
      url: "https://www.filehorse.com/download-scribus-32/"
      remarks: "x32 bit Windows"
    - name: "FileHippo"
      type: "user"
      url: "https://filehippo.com/download_scribus/"
      remarks: "Windows"
    - name: "Softonic"
      type: "user"
      url: "https://scribus.en.softonic.com/"
      remarks: "Windows"
    - name: "Malavida"
      type: "user"
      url: "https://www.malavida.com/en/soft/scribus/"
      remarks: "Windows"
    - name: "MacUpdate"
      type: "user"
      url: "https://www.macupdate.com/app/mac/22952/scribus"
      remarks: "macOS"
    - name: "Softonic"
      type: "user"
      url: "https://scribus.en.softonic.com/mac"
      remarks: "macOS"
    - name: "FileHorse"
      type: "user"
      url: "https://mac.filehorse.com/download-scribus/"
      remarks: "macOS"
    - name: "CNET"
      type: "expert"
      url: "https://download.cnet.com/Scribus/3000-6675_4-100490.html"
      remarks: "macOS"
    - name: "Softpedia"
      type: "user"
      url: "https://linux.softpedia.com/get/Text-Editing-Processing/Others/Scribus-2148.shtml"
      remarks: "Linux"
  status: ["https://wiki.scribus.net/canvas/Announcements", "https://sourceforge.net/p/scribus/activity/?page=0&limit=100#5c16e3f7ee24ca0774041f9f"]

rating:
  - name: "TechRadar"
    rate: [4.5, 5]
  - name: "SourceForge"
    rate: [4.7, 5]
    num: 143
  - name: "G2CROWD"
    rate: [4.1, 5]
    num: 16
  - name: "CNET"
    rate: [3.2, 5]
    num: 36
    remarks: "Windows"
  - name: "CNET"
    rate: [3.5, 5]
    remarks: "Windows"
  - name: "TechSpot"
    rate: [4.4, 5]
    num: 19
  - name: "FileHorse"
    rate: [8.6, 10]
    num: 16
    remarks: "x32 bit Windows"
  - name: "FileHippo"
    rate: [7.1, 10]
    num: 270
    remarks: "Windows"
  - name: "Softonic"
    rate: [7, 10]
    num: 678
    remarks: "Windows"
  - name: "Malavida"
    rate: [8, 10]
    num: 4
    remarks: "Windows"
  - name: "MacUpdate"
    rate: [3.8, 5]
    num: 15
    remarks: "macOS"
  - name: "Softonic"
    rate: [6, 10]
    num: 90
    remarks: "macOS"
  - name: "FileHorse"
    rate: [6.7, 10]
    num: 11
    remarks: "macOS"
  - name: "CNET"
    rate: [4.5, 5]
    remarks: "macOS"
  - name: "Softpedia"
    rate: [4.2, 5]
    num: 51
    remarks: "Linux"
---
  Scribus is an Open Source program that brings professional page layout to Linux, BSD UNIX, Solaris, OpenIndiana, GNU/Hurd, Mac OS X, OS/2 Warp 4, eComStation, and Windows desktops with a combination of press-ready output and new approaches to page design.
  
  Underneath a modern and user-friendly interface, Scribus supports professional [desktop publishing](/categories/desktop-publishing) features, such as color separations, CMYK and spot colors, ICC color management, and versatile PDF creation.
  
  Books about Scribus are available in several languages, including an official manual for v1.3, published through FLES Books in 2009.
  
  [Blog](https://rants.scribus.net/) I [Forum](http://forums.scribus.net/) I [News](https://www.scribus.net/category/news/) I [Wiki](https://wiki.scribus.net/canvas/Scribus) I [Video Tutorials](https://wiki.scribus.net/canvas/Scribus_Video_Tutorials) I [Get Stated](https://wiki.scribus.net/canvas/Get_Started_with_Scribus) I [Docs](https://wiki.scribus.net/canvas/Help:TOC) I [Mailing list](http://lists.scribus.net/mailman/listinfo) I [FAQ](https://wiki.scribus.net/canvas/Category:FAQ) I [IRC](https://webchat.freenode.net/?channels=scribus)
  
