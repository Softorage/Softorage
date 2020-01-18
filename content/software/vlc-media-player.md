---
title: "VLC Media Player"

description: "A free and open-source media player software and streaming media server developed by the VideoLAN project"

image: "https://upload.wikimedia.org/wikipedia/commons/e/e6/VLC_Icon.svg"

status: ["Active"]

website: "https://www.videolan.org/vlc/"

get_it:
  - from: "Authentic"
    url: "https://www.videolan.org/vlc/#download"
  - from: "FileHorse"
    platform:
      - name: "Windows"
        hardware: ["dskp"]
        arch: ["x32"]
        type: "official"
    url: "https://www.filehorse.com/download-vlc-32/"
  - from: "FileHorse"
    platform:
      - name: "Windows"
        hardware: ["dskp"]
        arch: ["x64"]
        type: "official"
    url: "https://www.filehorse.com/download-vlc-64/"
  - from: "Malavida"
    platform:
      - name: "Windows"
        hardware: ["dskp"]
        type: "official"
    url: "https://www.malavida.com/en/soft/vlc/"
  - from: "Uptodown"
    platform:
      - name: "Windows"
        hardware: ["dskp"]
        arch: ["x64"]
        type: "official"
    url: "https://vlc-media-player.en.uptodown.com/windows"
  - from: "FileHippo"
    platform:
      - name: "Windows"
        hardware: ["dskp"]
        arch: ["x32"]
        type: "official"
    url: "https://filehippo.com/download_vlc-media-player_32/"
  - from: "FileHippo"
    platform:
      - name: "Windows"
        hardware: ["dskp"]
        arch: ["x64"]
        type: "official"
    url: "https://filehippo.com/download_vlc_media_player_64/"
  - from: "TechSpot"
    platform:
      - name: "Windows"
        hardware: ["dskp"]
        arch: ["x32", "x64"]
        type: "official"
      - name: "macOS"
        hardware: ["dskp"]
        type: "official"
      - name: "Linux"
        hardware: ["dskp"]
        type: "official"
    url: "https://www.techspot.com/downloads/3562-vlc-media-player.html"
  - from: "CNET"
    platform:
      - name: "Windows"
        hardware: ["dskp"]
        arch: ["x64"]
        type: "official"
    url: "https://download.cnet.com/VLC-Media-Player-64-bit/3000-13632_4-75761094.html"
  - from: "Softonic"
    platform:
      - name: "Windows"
        hardware: ["dskp"]
        type: "official"
    url: "https://vlc-media-player.en.softonic.com/"
  - from: "Softonic"
    platform:
      - name: "macOS"
        hardware: ["dskp"]
        type: "official"
    url: "https://vlc-media-player.en.softonic.com/mac"
  - from: "Malavida"
    platform:
      - name: "macOS"
        hardware: ["dskp"]
        type: "official"
    url: "https://www.malavida.com/en/soft/vlc/mac/"
  - from: "FileHippo"
    platform:
      - name: "macOS"
        hardware: ["dskp"]
        type: "official"
    url: "https://filehippo.com/mac/download_vlc_media_player-for_mac/"
  - from: "FileHorse"
    platform:
      - name: "macOS"
        hardware: ["dskp"]
        type: "official"
    url: "https://mac.filehorse.com/download-vlc/"
  - from: "Softpedia"
    platform:
      - name: "Linux"
        hardware: ["dskp"]
        type: "official"
    url: "https://linux.softpedia.com/get/Multimedia/Video/VLC-2608.shtml"
  - from: "Google Play Store"
    platform:
      - name: "Android"
        hardware: ["smptb"]
        type: "official"
    url: "https://play.google.com/store/apps/details?id=org.videolan.vlc"
  - from: "Softonic"
    platform:
      - name: "Android"
        hardware: ["smptb"]
        type: "official"
    url: "https://vlc-media-player.en.softonic.com/android"
  - from: "Malavida"
    platform:
      - name: "Android"
        hardware: ["smptb"]
        type: "official"
    url: "https://www.malavida.com/en/soft/vlc/android/"
  - from: "Softonic"
    platform:
      - name: "iOS"
        hardware: ["smptb"]
        type: "official"
    url: "https://vlc-media-player.en.softonic.com/iphone"
  - from: "Malavida"
    platform:
      - name: "iOS"
        hardware: ["smptb"]
        type: "official"
    url: "https://www.malavida.com/en/soft/vlc/iphone/"

sysreq:
  -
    min: "Primarily vary by video being played, depending upon its quality"

developer: ["The VideoLAN Project"]

initial_release: ["01 February 2001"]

repository: ["https://code.videolan.org/videolan/vlc", "https://code.videolan.org/explore/projects", "https://github.com/videolan/vlc"]

written_in: ["C", "C++", "Objective-C", "Kotlin (Android app only)", "Java (Android app only)", "Swift (iOS app only)"]

platform:
  - dskp:
      - name: "Windows"
        type: "official"
        arch: ["x32", "x64"]
      - name: "Linux"
        type: "official"
      - name: "macOS"
        type: "official"
      - name: "Unix(like)"
        type: "official"
  - smp:
      - name: "Android"
        type: "official"
      - name: "iOS"
        type: "official"
      - name: "Windows"
        type: "official"
  - tab:
      - name: "Android"
        type: "official"
      - name: "iOS"
        type: "official"
  - else:
      - name: "Apple TV"
        type: "official"

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
  
  [News](https://www.videolan.org/news.html) I [Forum](https://forum.videolan.org/) I [Wiki](https://wiki.videolan.org/) I [Documentation](https://wiki.videolan.org/Documentation) I [FAQ](https://www.videolan.org/support/faq.html) I [IRC](https://webchat.freenode.net/?channels=videolan)
  