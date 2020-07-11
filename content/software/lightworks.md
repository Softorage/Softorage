---
title: "Lightworks"

description: "Lightworks is a non-linear editing system (NLE) for editing and mastering digital video"

image: "https://cdn.statically.io/img/img.softorage.com/software-logo/lightworks.png?h=64"

status: ["Active"]

website: "https://www.lwks.com/"

get_it:
  - from: "Authentic"
    url: "https://www.lwks.com/downloads"
  - from: "FileHorse"
    url: "https://www.filehorse.com/download-lightworks-32/"
    platform:
      - name: "Windows"
        hardware: ["dskp"]
        arch: ["x32"]
        official: true
        portable: false
  - from: "FileHorse"
    url: "https://www.filehorse.com/download-lightworks-64/"
    platform:
      - name: "Windows"
        hardware: ["dskp"]
        arch: ["x64"]
        official: true
        portable: false
  - from: "TechSpot"
    url: "https://www.techspot.com/downloads/6504-lightworks.html"
    platform:
      - name: "Windows"
        hardware: ["dskp"]
        arch: ["x32", "x64"]
        official: true
        portable: false
      - name: "macOS"
        hardware: ["dskp"]
        official: true
        portable: false
      - name: "Linux"
        hardware: ["dskp"]
        official: true
        portable: false
  - from: "Softpedia"
    url: "https://www.softpedia.com/get/Multimedia/Video/Video-Editors/Lightworks.shtml"
    platform:
      - name: "Windows"
        hardware: ["dskp"]
        arch: ["x32", "x64"]
        official: true
        portable: false
  - from: "Softonic"
    url: "https://lightworks.en.softonic.com/"
    platform:
      - name: "Windows"
        hardware: ["dskp"]
        official: true
        portable: false
  - from: "FileHippo"
    url: "https://filehippo.com/download_lightworks/"
    platform:
      - name: "Windows"
        hardware: ["dskp"]
        official: true
        portable: false
  - from: "Uptodown"
    url: "https://lightworks.en.uptodown.com/windows"
    platform:
      - name: "Windows"
        hardware: ["dskp"]
        official: true
        portable: false
  - from: "MacUpdate"
    url: "https://www.macupdate.com/app/mac/52053/lightworks"
    platform:
      - name: "macOS"
        hardware: ["dskp"]
        official: true
        portable: false
  - from: "Softonic"
    url: "https://lightworks.en.softonic.com/mac"
    platform:
      - name: "macOS"
        hardware: ["dskp"]
        official: true
        portable: false

sysreq:
  software:
    -
      min: "Windows Vista, Windows 7, Windows 8/8.1 and Windows 10"
    -
      min: "Linux Supported Debian Distros:\n* Ubuntu/Lubuntu/Xubuntu 14.04 and higher\n* Mint 17 and higher"
    -
      min: "Linux Supported RPM Distros:\n* Fedora 20 and higher"
    -
      min: "Mac 10.9 and higher"
  hardware:
    -
      min: "Processor: Intel i7 chipset or faster, fast AMD chipset"
      recm: ""
    -
      min: "RAM: 3GB RAM or higher"
      recm: ""
    -
      min: "Display: Two high-resolution displays (1920 x1080) or above"
      recm: ""
    -
      min: "Graphics Card: PCI Express graphics card (NVIDIA or AMD) with 1GB or higher and support for DirectX 9 (Windows only)"
      recm: "Although both NVIDIA and AMD graphics cards are supported, NVIDIA is recommended as the graphics card of choice.\n\nRecommended: NVIDIA cards K1200, K2200, K4200 and K5200"
    -
      min: "Separate media and system drives (these can be internal or external as long as the the interface is suitably fast)"
      recm: ""
    -
      min: "Compatible sound card"
      recm: ""
    -
      min: "Disk Space: 200MB Disk space for Lightworks installation"
      recm: ""
    -
      min: "(Optional) a Lightworks Console"
      recm: ""
    -
      min: "(Optional) a Lightworks keyboard"
      recm: ""

developer: ["EditShare LLC"]

initial_release: ["1990"]

platform:
  - dskp:
      - name: "Windows"
        official: true
        arch: ["x32", "x64"]
      - name: "Linux"
        official: true
      - name: "macOS"
        official: true

categories: ["Non-Linear Editing", "Video Editor"]

license: ["Proprietary", "Freemium", "Commercial"]

social:
  - name: "Facebook"
    url: "https://www.facebook.com/ESLightworks"
  - name: "Twitter"
    url: "https://twitter.com/ESLightworks"
  - name: "YouTube"
    url: "http://www.youtube.com/user/editshare?feature=watch"
  - name: "Wikipedia"
    url: "https://en.wikipedia.org/wiki/Lightworks"

source:
  overview: ["https://www.lwks.com/index.php?option=com_content&view=article&id=98&Itemid=209", "https://www.lwks.com/index.php?option=com_content&view=article&id=102&Itemid=213"]
  developer: ["https://www.lwks.com/index.php?option=com_docman&task=doc_download&gid=220"]
  initial_release: ["https://lwn.net/Articles/584002/"]
  platform:
    - dskp: ["https://www.lwks.com/index.php?option=com_lwks&view=download&Itemid=206"]
  sysreq:
    software: ["https://www.lwks.com/index.php?option=com_content&view=article&id=100&Itemid=211"]
    hardware: ["https://www.lwks.com/index.php?option=com_content&view=article&id=100&Itemid=211"]
  license: ["https://www.lwks.com/index.php?option=com_docman&task=doc_download&gid=220"]
  rating:
    - name: "FileHorse"
      type: "user"
      url: "https://www.filehorse.com/download-lightworks-32/"
      remarks: "x32 - Windows"
    - name: "FileHorse"
      type: "user"
      url: "https://www.filehorse.com/download-lightworks-64/"
      remarks: "x64 - Windows"
    - name: "Softpedia"
      type: "user"
      url: "https://www.softpedia.com/get/Multimedia/Video/Video-Editors/Lightworks.shtml"
      remarks: "x32/64 - Windows"
    - name: "Softonic"
      type: "user"
      url: "https://lightworks.en.softonic.com/"
      remarks: "Windows"
    - name: "FileHippo"
      type: "user"
      url: "https://filehippo.com/download_lightworks/"
      remarks: "Windows"
    - name: "MacUpdate"
      type: "user"
      url: "https://www.macupdate.com/app/mac/52053/lightworks"
      remarks: "macOS"
    - name: "Softonic"
      type: "user"
      url: "https://lightworks.en.softonic.com/mac"
      remarks: "macOS"
    - name: "TechRadar"
      type: "expert"
      url: "https://www.techradar.com/in/reviews/lightworks"
    - name: "G2CROWD"
      type: "user"
      url: "https://www.g2.com/products/lightworks/reviews"
    - name: "Capterra"
      type: "user"
      url: "https://www.capterra.com/p/173468/Lightworks/"
    - name: "PCWorld"
      type: "expert"
      url: "https://www.pcworld.com/article/3236187/lightworks-for-windows-review.html"
      remarks: "Windows"
    - name: "TopTenReviews"
      type: "expert"
      url: "https://www.toptenreviews.com/professional-video-editing-software-lightworks-review"
    - name: "Macworld"
      type: "expert"
      url: "https://www.macworld.com/article/3201013/lightworks-14-review-free-video-editing-software-lacks-proper-mac-decorum.html"
  status: ["https://www.lwks.com/index.php?option=com_kunena&func=showcat&catid=19&Itemid=81"]

rating:
  - name: "FileHorse"
    rate: [7, 10]
    num: 41
    remarks: "x32 - Windows"
  - name: "FileHorse"
    rate: [6.6, 10]
    num: 31
    remarks: "x64 - Windows"
  - name: "Softpedia"
    rate: [4, 5]
    num: 11
    remarks: "x32/64 - Windows"
  - name: "Softonic"
    rate: [6, 10]
    num: 1699
    remarks: "Windows"
  - name: "FileHippo"
    rate: [4, 10]
    num: 428
    remarks: "Windows"
  - name: "MacUpdate"
    rate: [4.5, 5]
    num: 4
    remarks: "macOS"
  - name: "Softonic"
    rate: [6, 10]
    num: 34
    remarks: "macOS"
  - name: "TechRadar"
    rate: [5, 5]
  - name: "G2CROWD"
    rate: [3.5, 5]
    num: 20
  - name: "Capterra"
    rate: [4.4, 5]
    num: 21
  - name: "PCWorld"
    rate: [2, 5]
    remarks: "Windows"
  - name: "TopTenReviews"
    rate: [3.5, 5]
  - name: "Macworld"
    rate: [3, 5]

---
  Lightworks is a [non-linear editing system](/categories/non-linear-editing/) (NLE) for editing and mastering digital video. Its features include relatively simple user interface, multiple effects and multiple output formats (Pro version).
  
  [Forum](https://www.lwks.com/index.php?option=com_kunena&view=listcat&Itemid=82)  I  [Documentation](https://www.lwks.com/index.php?option=com_lwks&view=download&Itemid=206&tab=4)  I  [FAQ](https://www.lwks.com/index.php?option=com_content&view=article&id=104&Itemid=220)
