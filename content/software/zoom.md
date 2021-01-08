---
title: "Zoom"

description: "Zoom is a videoconferencing/videotelephony software"

image: "https://cdn.statically.io/img/img.softorage.com/software-logo/zoom.svg?h=64"

status: ["Active"]

website: "https://zoom.us/"

get_it:
  - from: "Authentic"
    url: "https://zoom.us/download"
  - from: "FileHorse"
    url: "https://www.filehorse.com/download-zoom-meetings/"
    platform:
      - name: "Windows"
        hardware: ["dskp"]
        arch: ["x32"]
        official: true
        portable: false
  - from: "Softonic"
    url: "https://zoom.en.softonic.com/"
    platform:
      - name: "Windows"
        hardware: ["dskp"]
        official: true
        portable: false
  - from: "TechSpot"
    url: "https://www.techspot.com/downloads/7240-zoom-chat.html"
    platform:
      - name: "Windows"
        hardware: ["dskp"]
        official: true
        portable: false
      - name: "macOS"
        hardware: ["dskp"]
        official: true
        portable: false
      - name: "Android"
        hardware: ["smptb"]
        official: true
        portable: false
      - name: "iOS"
        hardware: ["smptb"]
        official: true
        portable: false
  - from: "Uptodown"
    url: "https://zoom-us-zoom.en.uptodown.com/windows"
    platform:
      - name: "Windows"
        hardware: ["dskp"]
        official: true
        portable: false
  - from: "FileHorse"
    url: "https://mac.filehorse.com/download-zoom-meetings/"
    platform:
      - name: "macOS"
        hardware: ["dskp"]
        official: true
        portable: false
  - from: "Softonic"
    url: "https://zoom.en.softonic.com/mac"
    platform:
      - name: "macOS"
        hardware: ["dskp"]
        official: true
        portable: false
  - from: "CNET"
    url: "https://download.cnet.com/Zoom/3000-2348_4-78154370.html"
    platform:
      - name: "macOS"
        hardware: ["dskp"]
        official: true
        portable: false
  - from: "Google Play Store"
    url: "https://play.google.com/store/apps/details?id=us.zoom.videomeetings"
    platform:
      - name: "Android"
        hardware: ["smptb"]
        official: true
        portable: false
  - from: "Softonic"
    url: "https://zoom.en.softonic.com/android"
    platform:
      - name: "Android"
        hardware: ["smptb"]
        official: true
        portable: false
  - from: "CNET"
    url: "https://download.cnet.com/Zoom-Cloud-Meetings/3000-2064_4-75856307.html"
    platform:
      - name: "Android"
        hardware: ["smptb"]
        official: true
        portable: false
  - from: "Apple App Store"
    url: "https://apps.apple.com/app/id546505307"
    platform:
      - name: "iOS"
        hardware: ["smptb"]
        official: true
        portable: false
  - from: "Softonic"
    url: "https://zoom.en.softonic.com/iphone"
    platform:
      - name: "iOS"
        hardware: ["smptb"]
        official: true
        portable: false
  - from: "CNET"
    url: "https://download.cnet.com/Zoom-Cloud-Meetings/3000-2064_4-75926595.html"
    platform:
      - name: "iOS"
        hardware: ["smptb"]
        official: true
        portable: false

sysreq:
  hardware:
    -
      min: "An internet connection – broadband wired or wireless (3G or 4G/LTE)"
      recm: ""
    -
      min: "Speakers and a microphone – built-in, USB plug-in, or wireless Bluetooth"
      recm: ""
    -
      min: "A webcam or HD webcam - built-in, USB plug-in"
      recm: ""
    -
      min: "Processor: Single-core 1Ghz or higher"
      recm: "Processor: Dual-core 2Ghz or higher (Intel i3/i5/i7 or AMD equivalent)"
    -
      min: "RAM: N/A"
      recm: "RAM: 4 GB"
  operating systems:
    -
      min: "macOS: macOS X with macOS 10.9 or later"
    -
      min: "Windows: Windows 10, 8 or 8.1, 7\n\nDevices running Windows 10 must run Windows 10 Home, Pro, or Enterprise. S Mode is not supported."
    -
      min: "Linux: Ubuntu 12.04 or higher, Mint 17.1 or higher, Red Hat Enterprise Linux 6.4 or higher, Oracle Linux 6.4 or higher, CentOS 6.4 or higher, Fedora 21 or higher, OpenSUSE 13.2 or higher, ArchLinux (64-bit only)"
  web browsers:
    -
      min: "Windows: Internet Explorer 11+, Edge 12+, Firefox 27+, Chrome 30+\n\nSome features in the web client are not supported on Internet Explorer"
    -
      min: "macOS: Safari 7+, Firefox 27+, Chrome 30+"
    -
      min: "Linux: Firefox 27+, Chrome 30+"

developer: ["Zoom Video Communications Inc."]

initial_release: ["10 September 2012"]

platform:
  - dskp:
      - name: "Windows"
        official: true
      - name: "macOS"
        official: true
      - name: "Linux"
        official: true
        arch: ["x32", "x64"]
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

categories: ["Videoconference", "VoIP", "Instant Messenger"]

license: ["Freemium", "Proprietary", "Commercial"]

social:
  - name: "Facebook"
    url: "https://www.facebook.com/zoomvideocommunications"
  - name: "Twitter"
    url: "https://www.youtube.com/zoommeetings"
  - name: "YouTube"
    url: "https://www.twitter.com/zoom_us"
  - name: "LinkedIn"
    url: "http://www.linkedin.com/company/2532259"
  - name: "Wikipedia"
    url: "https://en.wikipedia.org/wiki/Zoom_(software)"

source:
  overview: ["https://zoom.us/"]
  developer: ["https://zoom.us/terms"]
  initial_release: ["https://web.archive.org/web/20200408153945/https://www.wsj.com/articles/SB10000872396390444443504577603383238616426"]
  platform:
    - dskp: ["https://zoom.us/download?os=windows", "https://zoom.us/download?os=mac", "https://zoom.us/download?os=linux"]
    - smptb: ["https://zoom.us/download?os=android", "https://zoom.us/download"]
  sysreq:
    hardware: ["https://support.zoom.us/hc/en-us/articles/201362023-System-requirements-for-Windows-macOS-and-Linux"]
    operating systems: ["https://support.zoom.us/hc/en-us/articles/201362023-System-requirements-for-Windows-macOS-and-Linux"]
    web browsers: ["https://support.zoom.us/hc/en-us/articles/201362023-System-requirements-for-Windows-macOS-and-Linux"]
  license: ["https://zoom.us/pricing", "https://zoom.us/terms"]
  rating:
    - name: "FileHorse"
      type: "user"
      url: "https://www.filehorse.com/download-zoom-meetings/"
      remarks: "Windows"
    - name: "Softonic"
      type: "user"
      url: "https://zoom.en.softonic.com/"
      remarks: "Windows"
    - name: "TechSpot"
      type: "user"
      url: "https://www.techspot.com/downloads/7240-zoom-chat.html"
    - name: "Uptodown"
      type: "user"
      url: "https://zoom-us-zoom.en.uptodown.com/windows#rating"
      remarks: "Windows"
    - name: "FileHorse"
      type: "user"
      url: "https://mac.filehorse.com/download-zoom-meetings/"
      remarks: "macOS"
    - name: "Softonic"
      type: "user"
      url: "https://zoom.en.softonic.com/mac"
      remarks: "macOS"
    - name: "Google Play"
      type: "user"
      url: "https://play.google.com/store/apps/details?id=us.zoom.videomeetings"
      remarks: "Android"
    - name: "Softonic"
      type: "user"
      url: "https://zoom.en.softonic.com/android"
      remarks: "Android"
    - name: "Apple App Store"
      type: "user"
      url: "https://apps.apple.com/app/id546505307"
      remarks: "iOS"
    - name: "Softonic"
      type: "user"
      url: "https://zoom.en.softonic.com/iphone"
      remarks: "iOS"
    - name: "TechRadar"
      type: "expert"
      url: "https://www.techradar.com/in/reviews/zoom"
    - name: "G2CROWD"
      type: "user"
      url: "https://www.g2.com/products/zoom/reviews"
    - name: "TrustRadius"
      type: "user"
      url: "https://www.trustradius.com/products/zoom/reviews"
    - name: "Reviews.org"
      type: "expert"
      url: "https://www.reviews.org/internet-service/zoom-review/"
    - name: "Capterra"
      type: "user"
      url: "https://www.capterra.com/p/144037/Zoom-Video-Conferencing/"
    - name: "PCMag"
      type: "expert"
      url: "https://in.pcmag.com/videoconferencing/135850/zoom-meetings"
  status: ["https://support.zoom.us/hc/en-us/sections/360008531132-Zoom-Releases-By-Date", "https://support.zoom.us/hc/en-us/sections/201214205-Release-Notes"]

rating:
  - name: "FileHorse"
    rate: [8.6, 10]
    num: 818
    remarks: "Windows"
  - name: "Softonic"
    rate: [4.3, 5]
    num: 30552
    remarks: "Windows"
  - name: "TechSpot"
    rate: [4.4, 5]
    num: 22
  - name: "Uptodown"
    rate: [4.5, 5]
    num: 26
    remarks: "Windows"
  - name: "FileHorse"
    rate: [8.2, 10]
    num: 59
    remarks: "macOS"
  - name: "Softonic"
    rate: [4.1, 5]
    num: 552
    remarks: "macOS"
  - name: "Google Play"
    rate: [3.6, 5]
    num: 1695959
    remarks: "Android"
  - name: "Softonic"
    rate: [4.1, 5]
    num: 2018
    remarks: "Android"
  - name: "Apple App Store"
    rate: [4.5, 5]
    num: 1523764
    remarks: "iOS"
  - name: "Softonic"
    rate: [4.4, 5]
    num: 81
    remarks: "iOS"
  - name: "TechRadar"
    rate: [4.5, 5]
  - name: "G2CROWD"
    rate: [4.5, 5]
    num: 31862
  - name: "TrustRadius"
    rate: [8.8, 10]
    num: 1866
  - name: "Reviews.org"
    rate: [4, 5]
  - name: "Capterra"
    rate: [4.6, 5]
    num: 7435
  - name: "PCMag"
    rate: [4.5, 5]

---
  Zoom is a videoconferencing/videotelephoning software. It supports Meetings & Chat, Video Webinar, Conference Rooms, Integrations and bots.
  
  [Blog](https://blog.zoom.us/)  I  [Dev Forum](https://devforum.zoom.us/)  I  [Dev Guide](https://marketplace.zoom.us/docs/guides)  I  [Help Center](https://support.zoom.us/hc)  I  [FAQ](https://support.zoom.us/hc/en-us/articles/206175806-Top-Questions)
