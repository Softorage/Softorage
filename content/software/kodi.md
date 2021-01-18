---
title: "Kodi"

description: "Kodi is a home theater and media player software application, formerly known as XBMC"

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
  linux:
    -
      min: "CPU: x86 or x86-64 processor such as: Intel Pentium 4/ Pentium M, AMD Athlon 64 / Opteron, or newer CPU (that support SSE2, which all CPUs made within the last 10-years does).\n* If your GPU/VPU does not support hardware video decoding then you will require a fast modern processor is required to decode some 1080p videos encoded in H.264, VC-1/WMV9, HEVC/H.265 VP9, etc"
      recm: ""
    -
      min: "RAM: 1GB or more in a HTPC media player appliance-like computer dedicated for Kodi"
      recm: "RAM: 2GB or more in a computer for multipurpose use"
    -
      min: "Graphics: AMD/Intel\n* Mesa 11.3 or later"
      recm: "Graphics: AMD/ATI, Intel, or NVIDIA which support OpenGL 2.0 or later.\n\nAMD/Intel\n*  Mesa 17.1 or later (required for 10 bit HEVC)"
    -
      min: "Video decoding: See https://kodi.wiki/view/Supported_hardware#Linux."
      recm: ""
    -
      min: "Drive space: The Kodi application generally only takes up between 100 to 200 MB of space, depending on how the binary is compiled. 4 to 8GB depending on how big your video library is."
      recm: "Drive space: 16GB or more depending on how big your video library is."
  macos:
    -
      min: "Kodi v17 requires Mac OS X 10.8 or later"
    -
      min: "Kodi v18 (and its nightlies) will at least require 10.9)"
    -
      min: "All hardware requirements are the same as those for OS X 10.8. If your computer can run OS X 10.8 or later then your hardware should work just fine with Kodi"
  windows:
    -
      min: "OS: Windows 7"
      recm: "OS: Windows 10"
    -
      min: "CPU: x86 or x86-64 processor such as: Intel Pentium 4/ Pentium M, AMD Athlon 64 / Opteron, or newer CPU (that support SSE2, which all CPUs made within the last 10-years does).\n* If your GPU/VPU does not support hardware video decoding then you will require a fast modern processor is required to decode some 1080p videos encoded in H.264, VC-1/WMV9, HEVC/H.265 VP9, etc"
      recm: ""
    -
      min: "RAM: 1GB or more in a HTPC media player appliance-like computer dedicated for Kodi"
      recm: "RAM: 2GB or more in a computer for multipurpose use"
    -
      min: "Graphics: GPU hardware must support at least level DirectX version 9.0c however the GPU software drivers must support the DirectX 11 Feature Level 9.1 (which means the DX11 API has been implemented in the GPU software driver to be compatible with DX9 hardware)"
      recm: ""
    -
      min: "Video decoding: On low-performance CPUs to playback 1080p content then hardware video decoding maybe necessary. See https://kodi.wiki/view/Supported_hardware#Windows for more."
      recm: ""
    -
      min: "Drive space: The Kodi application generally only takes up between 100 to 200 MB of space, depending on how the binary is compiled. 4 to 8GB depending on how big your video library is."
      recm: "Drive space: 16GB or more depending on how big your video library is."

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
  sysreq:
    linux: ["https://kodi.wiki/view/Supported_hardware#Linux"]
    macos: ["https://kodi.wiki/view/Supported_hardware#Mac_OS_X"]
    windows: ["https://kodi.wiki/view/Supported_hardware#Windows"]
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
  
