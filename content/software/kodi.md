---
title: "Kodi"

description: "A home theater and media player software application, formerly known as XBMC"

image: "https://cdn.statically.io/img/img.softorage.com/software-logo/kodi.png?h=64"

status: ["Active"]

website: "https://kodi.tv/"

get_it:
  - from: "Authentic"
    url: "https://kodi.tv/download"
  - from: "FileHippo"
    url: "https://filehippo.com/download_kodi/"
    platform:
      - name: "Windows"
        hardware: ["dskp"]
        official: true
  - from: "Malavida"
    url: "https://www.malavida.com/en/soft/kodi/"
    platform:
      - name: "Windows"
        hardware: ["dskp"]
        official: true
  - from: "CNET"
    url: "https://download.cnet.com/Kodi/3000-2139_4-10913726.html"
    platform:
      - name: "Windows"
        hardware: ["dskp"]
        official: true
  - from: "FileHorse"
    url: "https://www.filehorse.com/download-kodi/"
    platform:
      - name: "Windows"
        hardware: ["dskp"]
        official: true
  - from: "FossHub"
    url: "https://www.fosshub.com/Kodi.html"
    platform:
      - name: "Windows"
        hardware: ["dskp"]
        arch: ["x32", "x64"]
        official: true
      - name: "macOS"
        hardware: ["dskp"]
        official: true
  - from: "Uptodown"
    url: "https://xbmc.en.uptodown.com/android"
    platform:
      - name: "Windows"
        hardware: ["dskp"]
        official: true
  - from: "Softonic"
    url: "https://kodi.en.softonic.com/"
    platform:
      - name: "Windows"
        hardware: ["dskp"]
        official: true
  - from: "FileHorse"
    url: "https://mac.filehorse.com/download-kodi/"
    platform:
      - name: "macOS"
        hardware: ["dskp"]
        official: true
  - from: "Softonic"
    url: "https://kodi.en.softonic.com/mac"
    platform:
      - name: "macOS"
        hardware: ["dskp"]
        official: true
  - from: "Malavida"
    url: "https://www.malavida.com/en/soft/kodi/mac/"
    platform:
      - name: "macOS"
        hardware: ["dskp"]
        official: true
  - from: "Google Play Store"
    url: "https://play.google.com/store/apps/details?id=org.xbmc.kodi"
    platform:
      - name: "Android"
        hardware: ["smptb"]
        official: true
  - from: "Softonic"
    url: "https://kodi.en.softonic.com/android"
    platform:
      - name: "Android"
        hardware: ["smptb"]
        official: true
  - from: "Malavida"
    url: "https://www.malavida.com/en/soft/kodi/android/"
    platform:
      - name: "Android"
        hardware: ["smptb"]
        official: true
  - from: "APKPure"
    url: "https://apkpure.com/kodi/org.xbmc.kodi"
    platform:
      - name: "Android"
        hardware: ["smptb"]
        official: true
  - from: "Malavida"
    url: "https://www.malavida.com/en/soft/kodi/iphone/"
    platform:
      - name: "iOS"
        hardware: ["smptb"]
        official: true

sysreq:
  general:
    -
      min: "visit https://kodi.wiki/view/Supported_hardware"

developer: ["XBMC Foundation"]

initial_release: ["2003"]

repository: ["https://github.com/xbmc/xbmc"]

written_in: ["C++"]

platform:
  - dskp:
      - name: "Windows"
        official: true
        arch: ["x32", "x64"]
      - name: "Linux"
        official: true
      - name: "macOS"
        official: true
        arch: ["x64"]
  - smp:
      - name: "Android"
        official: true
      - name: "iOS"
        official: true
  - tab:
      - name: "Android"
        official: true
      - name: "iOS"
        official: true

categories: ["Media Player", "HTPC"]

license: ["GPL v2+"]

social:
  - name: "Facebook"
    url: "https://www.facebook.com/KodiEntertainment"
  - name: "Twitter"
    url: "https://twitter.com/KodiTV"
  - name: "YouTube"
    url: "http://www.youtube.com/user/teamxbmc"
  - name: "Wikipedia"
    url: "https://en.wikipedia.org/wiki/Kodi_(software)"

source:
  overview: ["https://web.archive.org/web/20200502000327/https://kodi.tv/about"]
  developer: ["https://web.archive.org/web/20200502000327/https://kodi.tv/about", "https://web.archive.org/web/20200509113029/https://github.com/xbmc/xbmc/tree/master/LICENSES"]
  initial_release: ["https://web.archive.org/web/20200509115433/https://kodi.wiki/view/Kodi"]
  written_in: ["https://github.com/xbmc/xbmc", "https://web.archive.org/web/20200509115433/https://kodi.wiki/view/Kodi"]
  platform:
    - dskp: ["https://kodi.tv/download", "https://web.archive.org/web/20200509115646/https://kodi.tv/download/849", "https://web.archive.org/web/20200509115640/https://kodi.tv/download/851"]
    - smptb: ["https://kodi.tv/download"]
  license: ["https://web.archive.org/web/20200509113029/https://github.com/xbmc/xbmc/tree/master/LICENSES", "https://web.archive.org/web/20200509115433/https://kodi.wiki/view/Kodi"]
  rating:
    - name: "FileHippo"
      type: "user"
      url: "https://filehippo.com/download_kodi/"
      remarks: "Windows"
    - name: "Malavida"
      type: "user"
      url: "https://www.malavida.com/en/soft/kodi/"
      remarks: "Windows"
    - name: "CNET"
      type: "user"
      url: "https://download.cnet.com/Kodi/3000-2139_4-10913726.html"
      remarks: "Windows"
    - name: "CNET"
      type: "expert"
      url: "https://download.cnet.com/Kodi/3000-2139_4-10913726.html"
      remarks: "Windows"
    - name: "FileHorse"
      type: "user"
      url: "https://www.filehorse.com/download-kodi/"
      remarks: "Windows"
    - name: "FossHub"
      type: "user"
      url: "https://www.fosshub.com/Kodi.html"
      remarks: "x32/64 Windows, macOS"
    - name: "Uptodown"
      type: "user"
      url: "https://xbmc.en.uptodown.com/android"
      remarks: "Windows"
    - name: "Softonic"
      type: "user"
      url: "https://kodi.en.softonic.com/"
      remarks: "Windows"
    - name: "FileHorse"
      type: "user"
      url: "https://mac.filehorse.com/download-kodi/"
      remarks: "macOS"
    - name: "Softonic"
      type: "user"
      url: "https://kodi.en.softonic.com/mac"
      remarks: "macOS"
    - name: "Malavida"
      type: "user"
      url: "https://www.malavida.com/en/soft/kodi/mac/"
      remarks: "macOS"
    - name: "Google Play"
      type: "user"
      url: "https://play.google.com/store/apps/details?id=org.xbmc.kodi"
      remarks: "Android"
    - name: "Softonic"
      type: "user"
      url: "https://kodi.en.softonic.com/android"
      remarks: "Android"
    - name: "Malavida"
      type: "user"
      url: "https://www.malavida.com/en/soft/kodi/android/"
      remarks: "Android"
    - name: "APKPure"
      type: "user"
      url: "https://apkpure.com/kodi/org.xbmc.kodi"
      remarks: "Android"
    - name: "Malavida"
      type: "user"
      url: "https://www.malavida.com/en/soft/kodi/iphone/"
      remarks: "iOS"
    - name: "TechRadar"
      type: "expert"
      url: "https://www.techradar.com/in/reviews/kodi"
    - name: "G2CROWD"
      type: "user"
      url: "https://www.g2.com/products/kodi/reviews"
  status: ["https://github.com/xbmc/xbmc/graphs/contributors"]

rating:
  - name: "FileHippo"
    rate: [6, 10]
    num: 249
    remarks: "Windows"
  - name: "Malavida"
    rate: [9, 10]
    num: 605
    remarks: "Windows"
  - name: "CNET"
    rate: [3.5, 5]
    num: 19
    remarks: "Windows"
  - name: "CNET"
    rate: [4.5, 5]
    remarks: "Windows"
  - name: "FileHorse"
    rate: [7.8, 10]
    num: 706
    remarks: "Windows"
  - name: "FossHub"
    rate: [5, 5]
    num: 12
    remarks: "x32/64 Windows, macOS"
  - name: "Uptodown"
    rate: [4.4, 5]
    num: 30
    remarks: "Windows"
  - name: "Softonic"
    rate: [8, 10]
    num: 2083
    remarks: "Windows"
  - name: "FileHorse"
    rate: [7, 10]
    num: 57
    remarks: "macOS"
  - name: "Softonic"
    rate: [8, 10]
    num: 18
    remarks: "macOS"
  - name: "Malavida"
    rate: [9, 10]
    num: 20
    remarks: "macOS"
  - name: "Google Play"
    rate: [4.2, 5]
    num: 280910
    remarks: "Android"
  - name: "Softonic"
    rate: [8, 10]
    num: 69
    remarks: "Android"
  - name: "Malavida"
    rate: [7, 10]
    num: 336
    remarks: "Android"
  - name: "APKPure"
    rate: [8.7, 10]
    num: 65
    remarks: "Android"
  - name: "Malavida"
    rate: [9, 10]
    num: 37
    remarks: "iOS"
  - name: "TechRadar"
    rate: [4.5, 5]
  - name: "G2CROWD"
    rate: [4, 5]
    num: 11
---
  Kodi (formerly XBMC) is a [home theater](/categories/htpc/) and [media player](/categories/media-player/) software application developed by the XBMC Foundation, a non-profit technology consortium. It is available for multiple operating-systems and hardware platforms, with a 10-foot user interface for use with televisions and remote controls. It allows users to play and view most streaming media, such as videos, music, podcasts, and videos from the Internet, as well as all common digital media files from local and network storage media.
  
  [Blog/News](https://kodi.tv/blog)  I  [Forum](https://forum.kodi.tv/)  I  [Wiki](https://kodi.wiki/view/Main_Page)  I  [FAQ](https://kodi.wiki/view/FAQs)
