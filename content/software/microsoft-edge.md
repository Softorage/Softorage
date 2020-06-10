---
title: "Microsoft Edge"

description: "Microsoft Edge is a web browser developed by Microsoft"

image: "https://cdn.statically.io/img/img.softorage.com/software-logo/microsoft-edge.png?h=64"

status: ["Active"]

website: "https://www.microsoft.com/edge"

get_it:
  - from: "Authentic"
    url: "https://www.microsoft.com/en-us/edge"
  - from: "Softpedia"
    url: "https://www.softpedia.com/get/Internet/Browsers/Microsoft-Edge.shtml"
    platform:
      - name: "Windows"
        hardware: ["dskp"]
        arch: ["x32"]
        official: true
        portable: false
  - from: "Softonic"
    url: "https://microsoft-edge.en.softonic.com/"
    platform:
      - name: "Windows"
        hardware: ["dskp"]
        official: true
        portable: false
  - from: "FileHorse"
    url: "https://www.filehorse.com/download-microsoft-edge/"
    platform:
      - name: "Windows"
        hardware: ["dskp"]
        arch: ["x64"]
        official: true
        portable: false
  - from: "FileHippo"
    url: "https://filehippo.com/download_edge-browser/"
    platform:
      - name: "Windows"
        hardware: ["dskp"]
        official: true
        portable: false
  - from: "TechSpot"
    url: "https://www.techspot.com/downloads/7158-microsoft-edge.html"
    platform:
      - name: "Windows"
        hardware: ["dskp"]
        official: true
        portable: false
      - name: "macOS"
        hardware: ["dskp"]
        official: true
        portable: false
  - from: "Softonic"
    url: "https://microsoft-edge.en.softonic.com/mac"
    platform:
      - name: "macOS"
        hardware: ["dskp"]
        official: true
        portable: false
  - from: "Google Play Store"
    url: "https://play.google.com/store/apps/details?id=com.microsoft.emmx"
    platform:
      - name: "Android"
        hardware: ["smptb"]
        official: true
        portable: false
  - from: "Uptodown"
    url: "https://microsoft-edge.en.uptodown.com/android"
    platform:
      - name: "Android"
        hardware: ["smptb"]
        official: true
        portable: false
  - from: "Softonic"
    url: "https://microsoft-edge.en.softonic.com/android"
    platform:
      - name: "Android"
        hardware: ["smptb"]
        official: true
        portable: false
  - from: "Apple App Store"
    url: "https://apps.apple.com/app/microsoft-edge/id1288723196"
    platform:
      - name: "iOS"
        hardware: ["smptb"]
        official: true
        portable: false
  - from: "Softonic"
    url: "https://microsoft-edge.en.softonic.com/iphone"
    platform:
      - name: "iOS"
        hardware: ["smptb"]
        official: true
        portable: false

sysreq:
  general:
    -
      min: "Computer/processor: 1 gigahertz (GHz) or faster (32-bit (x86) or 64-bit (x64))"
    -
      min: "Operating system: Windows 10 (32-bit or 64-bit); Windows 10 Mobile"
    -
      min: "Memory: Windows 10 (32-bit) - 1 GB; Windows 10 (64-bit) - 2 GB"
    -
      min: "Hard drive space: Windows 10 (32-bit) - 16 GB; Windows 10 (64-bit) - 20 GB"
    -
      min: "DVD drive: DVD-ROM drive (if installing from a DVD-ROM)  "
    -
      min: "Display: Super VGA (800 x 600) or higher-resolution monitor with 256 colors"
    -
      min: "Graphics card: Microsoft DirectX 9 or later with Windows Display Driver Model (WDDM) 1.0 driver"
    -
      min: "Peripherals: Internet connection and a compatible pointing device"

developer: ["Microsoft Corporation"]

initial_release: ["29 July 2015"]

platform:
  - dskp:
      - name: "Windows"
        official: true
        arch: ["x32", "x64"]
      - name: "macOS"
        official: true
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

categories: ["Web Browser"]

license: ["Proprietary", "Freemium"]

social:
  - name: "Facebook"
    url: "https://www.facebook.com/microsoftedge"
  - name: "Twitter"
    url: "https://twitter.com/microsoftedge"
  - name: "Wikipedia"
    url: "https://en.wikipedia.org/wiki/Microsoft_Edge"

source:
  overview: ["https://www.theverge.com/2020/1/15/21066767/microsoft-edge-chromium-new-browser-windows-mac-download-os", "https://blogs.windows.com/msedgedev/2020/01/15/upgrading-new-microsoft-edge-79-chromium/", "https://en.wikipedia.org/w/index.php?title=Microsoft_Edge&oldid=936188132", "https://blogs.windows.com/windowsexperience/2018/12/06/microsoft-edge-making-the-web-better-through-more-open-source-collaboration"]
  developer: ["https://en.wikipedia.org/w/index.php?title=Microsoft_Edge&oldid=936188132", "https://www.microsoft.com/en-us/edge"]
  initial_release: ["https://news.microsoft.com/en-nz/2015/06/01/windows-10-available-as-a-free-upgrade-on-july-29-2015/", "https://news.microsoft.com/2015/06/01/windows-10-available-as-a-free-upgrade-on-july-29/", "https://en.wikipedia.org/w/index.php?title=Microsoft_Edge&oldid=936188132"]
  platform:
    - dskp: ["https://www.microsoft.com/en-us/edge", "https://windowsedition.com/install-microsoft-edge-chromium-windows-10-32-bit/"]
    - smptb: ["https://www.microsoft.com/en-us/edge"]
  sysreq:
    general: ["https://docs.microsoft.com/en-us/microsoft-edge/deploy/about-microsoft-edge"]
  license: ["https://en.wikipedia.org/w/index.php?title=Microsoft_Edge&oldid=936188132"]
  rating:
    - name: "Softpedia"
      type: "user"
      url: "https://www.softpedia.com/get/Internet/Browsers/Microsoft-Edge.shtml"
      remarks: "x32 bit Windows"
    - name: "Softonic"
      type: "user"
      url: "https://microsoft-edge.en.softonic.com/"
      remarks: "Windows"
    - name: "FileHorse"
      type: "user"
      url: "https://www.filehorse.com/download-microsoft-edge/"
      remarks: "x64 bit Windows"
    - name: "FileHippo"
      type: "user"
      url: "https://filehippo.com/download_edge-browser/"
      remarks: "Windows"
    - name: "TechSpot"
      type: "user"
      url: "https://www.techspot.com/downloads/7158-microsoft-edge.html"
      remarks: "Windows & macOS"
    - name: "Softonic"
      type: "user"
      url: "https://microsoft-edge.en.softonic.com/mac"
      remarks: "macOS"
    - name: "Google Play"
      type: "user"
      url: "https://play.google.com/store/apps/details?id=com.microsoft.emmx"
      remarks: "Android"
    - name: "Uptodown"
      type: "user"
      url: "https://microsoft-edge.en.uptodown.com/android"
      remarks: "Android"
    - name: "Softonic"
      type: "user"
      url: "https://microsoft-edge.en.softonic.com/android"
      remarks: "Android"
    - name: "Apple App Store"
      type: "user"
      url: "https://apps.apple.com/app/microsoft-edge/id1288723196"
      remarks: "iOS"
    - name: "Softonic"
      type: "user"
      url: "https://microsoft-edge.en.softonic.com/iphone"
      remarks: "iOS"
    - name: "Cloudwards"
      type: "expert"
      url: "https://www.cloudwards.net/microsoft-edge-review/"
    - name: "TopTenReviews"
      type: "expert"
      url: "https://www.toptenreviews.com/internet-browser-software-microsoft-edge-review"
  status: ["https://blogs.windows.com/msedgedev/"]

rating:
  - name: "Softpedia"
    rate: [4.5, 5]
    num: 73
    remarks: "x32 bit Windows"
  - name: "Softonic"
    rate: [7, 10]
    num: 2683
    remarks: "Windows"
  - name: "FileHorse"
    rate: [9, 10]
    num: 22
    remarks: "x64 bit Windows"
  - name: "FileHippo"
    rate: [6, 10]
    num: 341
    remarks: "Windows"
  - name: "TechSpot"
    rate: [4.4, 5]
    num: 82
    remarks: "Windows & macOS"
  - name: "Softonic"
    rate: [7, 10]
    num: 206
    remarks: "macOS"
  - name: "Google Play"
    rate: [4.5, 5]
    num: 93093
    remarks: "Android"
  - name: "Uptodown"
    rate: [4.7, 5]
    num: 19
    remarks: "Android"
  - name: "Softonic"
    rate: [8, 10]
    num: 34
    remarks: "Android"
  - name: "Apple App Store"
    rate: [4.6, 5]
    num: 31517
    remarks: "iOS"
  - name: "Softonic"
    rate: [9, 10]
    num: 11
    remarks: "iOS"
  - name: "Cloudwards"
    rate: [3, 5]
  - name: "TopTenReviews"
    rate: [4.5, 5]

note: * For specific Windows 10 Mobile requirements, see the [Minimum hardware requirements for Windows 10 Mobile](https://docs.microsoft.com/en-us/windows-hardware/design/minimum/minimum-hardware-requirements-overview) topic on Microsoft Docs website.
* After installation of Microsoft Edge, license terms are viewable in Microsoft Edge at [edge://terms](edge://terms).

---
  Microsoft Edge is a [web browser](/categories/web-browser) developed by Microsoft. Edge includes integration with Cortana and has extensions hosted on the Microsoft Store. Unlike [Internet Explorer](/software/internet-explorer/), Edge does not support the legacy ActiveX and BHO technologies. Originally built with Microsoft's own EdgeHTML and Chakra engines, in 2019 Edge was rebuilt as a [Chromium](/software/chromium-web-browser/)-based browser, using the Blink and V8 engines. Though, for iOS, Microsoft Edge is based on WebKit. Microsoft released the first [Chromium](/software/chromium-web-browser/)-based Edge version on January 15, 2020.
  
  [Devs Blog](https://blogs.windows.com/msedgedev/)  I  [Forum](https://answers.microsoft.com/en-us/edge/forum)  I  [Documentation](https://docs.microsoft.com/en-us/microsoft-edge/)  I  [Deploy Documentation](https://docs.microsoft.com/en-us/deployedge/)  I  [FAQ for IT Pros](https://docs.microsoft.com/en-us/microsoft-edge/deploy/microsoft-edge-faq)  I  [FAQ for Enterprise](https://docs.microsoft.com/en-us/deployedge/faqs-edge-in-the-enterprise)


