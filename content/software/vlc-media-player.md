---
title: "VLC Media Player"

description: "A free and open-source media player software and streaming media server developed by the VideoLAN project"

image: "https://cdn.statically.io/img/img.softorage.com/software-logo/vlc-media-player.png?h=64"

status: ["Active"]

website: "https://www.videolan.org/vlc/"

get_it:
  - from: "Authentic"
    url: "https://www.videolan.org/vlc/#download"
  - from: "FileHorse"
    url: "https://www.filehorse.com/download-vlc-32/"
    platform:
      - name: "Windows"
        hardware: ["dskp"]
        arch: ["x32"]
        official: true
  - from: "FileHorse"
    url: "https://www.filehorse.com/download-vlc-64/"
    platform:
      - name: "Windows"
        hardware: ["dskp"]
        arch: ["x64"]
        official: true
  - from: "Malavida"
    url: "https://www.malavida.com/en/soft/vlc/"
    platform:
      - name: "Windows"
        hardware: ["dskp"]
        official: true
  - from: "Uptodown"
    url: "https://vlc-media-player.en.uptodown.com/windows"
    platform:
      - name: "Windows"
        hardware: ["dskp"]
        arch: ["x64"]
        official: true
  - from: "FileHippo"
    url: "https://filehippo.com/download_vlc-media-player_32/"
    platform:
      - name: "Windows"
        hardware: ["dskp"]
        arch: ["x32"]
        official: true
  - from: "FileHippo"
    url: "https://filehippo.com/download_vlc_media_player_64/"
    platform:
      - name: "Windows"
        hardware: ["dskp"]
        arch: ["x64"]
        official: true
  - from: "TechSpot"
    url: "https://www.techspot.com/downloads/3562-vlc-media-player.html"
    platform:
      - name: "Windows"
        hardware: ["dskp"]
        arch: ["x32", "x64"]
        official: true
      - name: "macOS"
        hardware: ["dskp"]
        official: true
      - name: "Linux"
        hardware: ["dskp"]
        official: true
  - from: "CNET"
    url: "https://download.cnet.com/VLC-Media-Player-64-bit/3000-13632_4-75761094.html"
    platform:
      - name: "Windows"
        hardware: ["dskp"]
        arch: ["x64"]
        official: true
  - from: "Softonic"
    url: "https://vlc-media-player.en.softonic.com/"
    platform:
      - name: "Windows"
        hardware: ["dskp"]
        official: true
  - from: "Softonic"
    url: "https://vlc-media-player.en.softonic.com/mac"
    platform:
      - name: "macOS"
        hardware: ["dskp"]
        official: true
  - from: "Malavida"
    url: "https://www.malavida.com/en/soft/vlc/mac/"
    platform:
      - name: "macOS"
        hardware: ["dskp"]
        official: true
  - from: "FileHippo"
    url: "https://filehippo.com/mac/download_vlc_media_player-for_mac/"
    platform:
      - name: "macOS"
        hardware: ["dskp"]
        official: true
  - from: "FileHorse"
    url: "https://mac.filehorse.com/download-vlc/"
    platform:
      - name: "macOS"
        hardware: ["dskp"]
        official: true
  - from: "Softpedia"
    url: "https://linux.softpedia.com/get/Multimedia/Video/VLC-2608.shtml"
    platform:
      - name: "Linux"
        hardware: ["dskp"]
        official: true
  - from: "Google Play Store"
    url: "https://play.google.com/store/apps/details?id=org.videolan.vlc"
    platform:
      - name: "Android"
        hardware: ["smptb"]
        official: true
  - from: "Softonic"
    url: "https://vlc-media-player.en.softonic.com/android"
    platform:
      - name: "Android"
        hardware: ["smptb"]
        official: true
  - from: "Malavida"
    url: "https://www.malavida.com/en/soft/vlc/android/"
    platform:
      - name: "Android"
        hardware: ["smptb"]
        official: true
  - from: "Softonic"
    url: "https://vlc-media-player.en.softonic.com/iphone"
    platform:
      - name: "iOS"
        hardware: ["smptb"]
        official: true
  - from: "Malavida"
    url: "https://www.malavida.com/en/soft/vlc/iphone/"
    platform:
      - name: "iOS"
        hardware: ["smptb"]
        official: true

sysreq:
  general:
    -
      min: "Primarily vary by video being played, depending upon its quality"

developer: ["The VideoLAN Project"]

initial_release: ["01 February 2001"]

repository: ["https://code.videolan.org/videolan/vlc", "https://code.videolan.org/explore/projects", "https://github.com/videolan/vlc"]

written_in: ["C", "C++", "Objective-C", "Kotlin (Android app only)", "Java (Android app only)", "Swift (iOS app only)"]

platform:
  - dskp:
      - name: "Windows"
        official: true
        arch: ["x32", "x64"]
      - name: "Linux"
        official: true
      - name: "macOS"
        official: true
      - name: "Unix(like)"
        official: true
  - smp:
      - name: "Android"
        official: true
      - name: "iOS"
        official: true
      - name: "Windows"
        official: true
  - tab:
      - name: "Android"
        official: true
      - name: "iOS"
        official: true
  - else:
      - name: "Apple TV"
        official: true

categories: ["Media Player"]

license: ["GPL v2", "Other open source licenses"]

social:
  - name: "Facebook"
    url: "http://www.facebook.com/vlc.media.player"
  - name: "Twitter"
    url: "http://www.twitter.com/videolan"
  - name: "Wikipedia"
    url: "https://en.wikipedia.org/wiki/VLC_media_player"

source:
  overview: ["https://www.videolan.org/vlc/", "https://fileinfo.com/software/videolan/vlc_media_player", "https://en.wikipedia.org/w/index.php?title=VLC_media_player&oldid=935254875"]
  developer: ["https://en.wikipedia.org/w/index.php?title=VLC_media_player&oldid=935254875", "https://www.videolan.org/legal.html"]
  initial_release: ["http://www.jbkempf.com/blog/post/2016/15-years-of-VLC", "https://en.wikipedia.org/w/index.php?title=VLC_media_player&oldid=935254875"]
  written_in: ["https://code.videolan.org/videolan/vlc", "https://code.videolan.org/videolan/vlc-android", "https://code.videolan.org/videolan/vlc-ios"]
  platform:
    - dskp: ["https://www.videolan.org/vlc/#download"]
  license: ["https://code.videolan.org/videolan/vlc/blob/master/COPYING", "https://code.videolan.org/explore/projects"]
  rating:
    - name: "FileHorse"
      type: "user"
      url: "https://www.filehorse.com/download-vlc-64/"
      remarks: "x64 bit Windows"
    - name: "FileHorse"
      type: "user"
      url: "https://www.filehorse.com/download-vlc-32/"
      remarks: "x32 bit Windows"
    - name: "Malavida"
      type: "user"
      url: "https://www.malavida.com/en/soft/vlc/"
      remarks: "Windows"
    - name: "Uptodown"
      type: "user"
      url: "https://vlc-media-player.en.uptodown.com/windows"
      remarks: "x64 bit Windows"
    - name: "FileHippo"
      type: "user"
      url: "https://filehippo.com/download_vlc-media-player_32/"
      remarks: "x32 bit Windows"
    - name: "FileHippo"
      type: "user"
      url: "https://www.filehorse.com/download-vlc-64/"
      remarks: "x64 bit Windows"
    - name: "TechSpot"
      type: "user"
      url: "https://www.techspot.com/downloads/3562-vlc-media-player.html"
    - name: "CNET"
      type: "expert"
      url: "https://download.cnet.com/VLC-Media-Player-64-bit/3000-13632_4-75761094.html"
      remarks: "x64 bit Windows"
    - name: "CNET"
      type: "user"
      url: "https://download.cnet.com/VLC-Media-Player-64-bit/3000-13632_4-75761094.html"
      remarks: "x64 bit Windows"
    - name: "CNET"
      type: "expert"
      url: "https://download.cnet.com/VLC-Media-Player-32-bit/3000-13632_4-10267151.html"
      remarks: "x32 bit Windows"
    - name: "CNET"
      type: "user"
      url: "https://download.cnet.com/VLC-Media-Player-32-bit/3000-13632_4-10267151.html"
      remarks: "x32 bit Windows"
    - name: "Softonic"
      type: "user"
      url: "https://vlc-media-player.en.softonic.com/"
      remarks: "Windows"
    - name: "Softonic"
      type: "user"
      url: "https://vlc-media-player.en.softonic.com/mac"
      remarks: "macOS"
    - name: "Malavida"
      type: "user"
      url: "https://www.malavida.com/en/soft/vlc/mac/"
      remarks: "macOS"
    - name: "FileHippo"
      type: "user"
      url: "https://filehippo.com/mac/download_vlc_media_player-for_mac/"
      remarks: "macOS"
    - name: "FileHorse"
      type: "user"
      url: "https://mac.filehorse.com/download-vlc/"
      remarks: "macOS"
    - name: "Softpedia"
      type: "user"
      url: "https://linux.softpedia.com/get/Multimedia/Video/VLC-2608.shtml"
      remarks: "Linux"
    - name: "Google Play"
      type: "user"
      url: "https://play.google.com/store/apps/details?id=org.videolan.vlc"
      remarks: "Android"
    - name: "Softonic"
      type: "user"
      url: "https://vlc-media-player.en.softonic.com/android"
      remarks: "Android"
    - name: "Softonic"
      type: "user"
      url: "https://vlc-media-player.en.softonic.com/iphone"
      remarks: "iOS"
    - name: "Malavida"
      type: "user"
      url: "https://www.malavida.com/en/soft/vlc/iphone/"
      remarks: "iOS"
  status: ["https://www.videolan.org/news.html"]

rating:
  - name: "FileHorse"
    rate: [8, 10]
    num: 1181
    remarks: "x64 bit Windows"
  - name: "FileHorse"
    rate: [8.2, 10]
    num: 2768
    remarks: "x32 bit Windows"
  - name: "Malavida"
    rate: [9, 10]
    num: 1655
    remarks: "Windows"
  - name: "Uptodown"
    rate: [4.1, 5]
    num: 53
    remarks: "x64 bit Windows"
  - name: "FileHippo"
    rate: [9, 10]
    num: 511
    remarks: "x32 bit Windows"
  - name: "FileHippo"
    rate: [7.9, 10]
    num: 513
    remarks: "x64 bit Windows"
  - name: "TechSpot"
    rate: [4.5, 5]
    num: 204
  - name: "CNET"
    rate: [4.5, 5]
    remarks: "x64 bit Windows"
  - name: "CNET"
    rate: [4.5, 5]
    num: 37
    remarks: "x64 bit Windows"
  - name: "CNET"
    rate: [3.5, 5]
    remarks: "x32 bit Windows"
  - name: "CNET"
    rate: [4, 5]
    num: 3673
    remarks: "x32 bit Windows"
  - name: "Softonic"
    rate: [8, 10]
    num: 63712
    remarks: "Windows"
  - name: "Softonic"
    rate: [8, 10]
    num: 3621
    remarks: "macOS"
  - name: "Malavida"
    rate: [8, 10]
    num: 44
    remarks: "macOS"
  - name: "FileHippo"
    rate: [8, 10]
    num: 734
    remarks: "macOS"
  - name: "FileHorse"
    rate: [7.88, 10]
    num: 117
    remarks: "macOS"
  - name: "Softpedia"
    rate: [4.2, 5]
    num: 640
    remarks: "Linux"
  - name: "Google Play"
    rate: [4.4, 5]
    num: 1279218
    remarks: "Android"
  - name: "Softonic"
    rate: [8, 10]
    num: 1098
    remarks: "Android"
  - name: "Softonic"
    rate: [7, 10]
    num: 521
    remarks: "iOS"
  - name: "Malavida"
    rate: [8, 10]
    num: 91
    remarks: "iOS"
---
  VLC is a free and open source cross-platform [multimedia player](/categories/media-player/) and framework, developed by the VideoLAN project, that plays most multimedia files as well as DVDs, Audio CDs, VCDs, and various streaming protocols. It can read a large number of popular video and audio formats, such as MPEG, MKV, MP4, MOV, WMV, H.264, WAV, FLV, AVI, etc. It can also convert media into many of the same formats that it is able to read, including the MPEG, ASF, AAC, and MP3 formats. See [this Wikipedia page](https://en.wikipedia.org/wiki/VLC_media_player#Format_support) for format support.
  
  [News](https://www.videolan.org/news.html)  I  [Forum](https://forum.videolan.org/)  I  [Wiki](https://wiki.videolan.org/)  I  [Documentation](https://wiki.videolan.org/Documentation)  I  [FAQ](https://www.videolan.org/support/faq.html)  I  [IRC](https://webchat.freenode.net/?channels=videolan)
  
