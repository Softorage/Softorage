---
title: "Skype"

description: "Skype allows users to communicate over the Internet by voice - using a microphone, by video - using a webcam, and by instant messaging."

image: "https://cdn.statically.io/img/img.softorage.com/software-logo/skype.png?h=64"

status: ["Active"]

website: "https://www.skype.com/"

get_it:
  - from: "Authentic"
    url: "https://www.skype.com/en/get-skype/"
  - from: "Web App | Authentic"
    url: "https://web.skype.com/"
    platform:
      - name: "Windows"
        hardware: ["dskp"]
        official: true
        portable: false
      - name: "Linux"
        hardware: ["dskp"]
        official: true
        portable: false
      - name: "macOS"
        hardware: ["dskp"]
        official: true
        portable: false
  - from: "FileHorse"
    url: "https://www.filehorse.com/download-skype/"
    platform:
      - name: "Windows"
        hardware: ["dskp"]
        official: true
        portable: false
  - from: "Softpedia"
    url: "https://www.softpedia.com/get/Office-tools/Fax-Telephony/Skype.shtml"
    platform:
      - name: "Windows"
        hardware: ["dskp"]
        official: true
        portable: false
  - from: "Softpedia"
    url: "https://www.softpedia.com/get/PORTABLE-SOFTWARE/Internet/Chat/Skype-Portable.shtml"
    platform:
      - name: "Windows"
        hardware: ["dskp"]
        official: true
        portable: true
  - from: "Uptodown"
    url: "https://skype.en.uptodown.com/windows"
    platform:
      - name: "Windows"
        hardware: ["dskp"]
        official: true
        portable: false
  - from: "TechSpot"
    url: "https://www.techspot.com/downloads/50-skype.html"
    platform:
      - name: "Windows"
        hardware: ["dskp"]
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
      - name: "Android"
        hardware: ["smptb"]
        official: true
        portable: false
  - from: "CNET"
    url: "https://download.cnet.com/Skype/3000-2349_4-77767311.html"
    platform:
      - name: "Windows"
        hardware: ["dskp"]
        official: true
        portable: false
  - from: "Softonic"
    url: "https://skype.en.softonic.com/"
    platform:
      - name: "Windows"
        hardware: ["dskp"]
        official: true
        portable: false
  - from: "Softonic (Win 10)"
    url: "https://skype-windows-10.en.softonic.com/"
    platform:
      - name: "Windows"
        hardware: ["dskp"]
        official: true
        portable: false
  - from: "FileHippo"
    url: "https://filehippo.com/download_skype/"
    platform:
      - name: "Windows"
        hardware: ["dskp"]
        official: true
        portable: false
  - from: "MacUpdate"
    url: "https://www.macupdate.com/app/mac/15805/skype"
    platform:
      - name: "macOS"
        hardware: ["dskp"]
        official: true
        portable: false
  - from: "Softonic"
    url: "https://skype.en.softonic.com/mac"
    platform:
      - name: "macOS"
        hardware: ["dskp"]
        official: true
        portable: false
  - from: "FileHorse"
    url: "https://mac.filehorse.com/download-skype/"
    platform:
      - name: "macOS"
        hardware: ["dskp"]
        official: true
        portable: false
  - from: "Google Play Store"
    url: "https://play.google.com/store/apps/details?id=com.skype.raider"
    platform:
      - name: "Android"
        hardware: ["smptb"]
        official: true
        portable: false
  - from: "Google Play Store (Lite)"
    url: "https://play.google.com/store/apps/details?id=com.skype.m2"
    platform:
      - name: "Android"
        hardware: ["smptb"]
        official: true
        portable: false
  - from: "Softonic"
    url: "https://skype.en.softonic.com/android"
    platform:
      - name: "Android"
        hardware: ["smptb"]
        official: true
        portable: false
  - from: "Apple App Store"
    url: "https://apps.apple.com/app/skype-for-iphone/id304878510"
    platform:
      - name: "iOS"
        hardware: ["smptb"]
        official: true
        portable: false
  - from: "Softonic"
    url: "https://skype.en.softonic.com/iphone"
    platform:
      - name: "iOS"
        hardware: ["smptb"]
        official: true
        portable: false
  - from: "CNET"
    url: "https://download.cnet.com/sPortable/3000-2349_4-10972596.html"
    platform:
      - name: "Windows"
        hardware: ["dskp"]
        official: true
        portable: true

sysreq:
  windows:
    -
      recm: "Processor: At least 1 GHz"
    -
      recm: "RAM: At least 512 MB"
    -
      recm: "Additional software: DirectX v9.0 or higher"
    -
      recm: "For Windows 10: Skype's version 15 requires Windows 10 (version 1809) or higher"
  macos:
    -
      recm: "OS: Mac OS X 10.10 or higher"
    -
      recm: "Processor: At least 1 GHz Intel processor (Core 2 Duo)"
    -
      recm: "RAM: At least 1 GB"
    -
      recm: "Additional software: The latest version of QuickTime"
  linux:
    -
      recm: "OS:\n\n64-bit Ubuntu 14.04+,\n64-bit Debian 8.0+,\n64-bit OpenSUSE 13.3+,\n64-bit Fedora Linux 24+"
    -
      recm: "Processor: An Intel Pentium 4 processor or later that's SSE2 and SSE3 capable"
    -
      recm: "RAM: At least 512 MB"
    -
      recm: "Additional software: libappindicator1 or GtkStatusIcon to make the tray icon work (optional)"
  android:
    -
      recm: "OS:\n\nAndroid OS 4.0.4 or higher (Phones and tablets),\nChromeOS version M53 or higher (Chromebooks)"
    -
      recm: "Free Space: At least 32 MB"
  ios:
    -
      recm: "OS: iOS 10 or higher"

developer: ["Priit Kasesalu and Jaan Tallinn <OD>", "Skype Technologies (Microsoft)"]

initial_release: ["29 August 2003"]

platform:
  - dskp:
      - name: "Windows"
        official: true
      - name: "macOS"
        official: true
      - name: "Linux"
        official: true
      - name: "PWA"
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

categories: ["Videoconference", "VoIP", "Instant Messenger"]

license: ["Proprietary", "Freemium", "Commercial"]

social:
  - name: "Facebook"
    url: "https://www.facebook.com/Skype"
  - name: "Twitter"
    url: "https://twitter.com/Skype"
  - name: "YouTube"
    url: "https://www.youtube.com/Skype"
  - name: "Wikipedia"
    url: "https://en.wikipedia.org/wiki/Skype"

source:
  overview: ["https://www.skype.com/en/"]
  developer: ["https://www.microsoft.com/en-us/servicesagreement/", "https://www.zdnet.com/article/the-ghosts-of-skype-past-how-estonias-biggest-tech-export-is-still-powering-its-startup-scene-today/", "https://www.microsoft.com/en-us/stories/skype/skype-chapter-2-welcome-to-estonia.aspx"]
  initial_release: ["https://www.ingeniumweb.com/article/the-birth-of-skype-story/1063/", "https://voiceontheweb.biz/ip-based-communications/skype-its-been-a-10-year-ride/"]
  platform:
    - dskp: ["https://www.skype.com/en/get-skype/", "https://www.skype.com/en/features/skype-web/"]
    - smptb: ["https://www.skype.com/en/get-skype/", "https://www.skype.com/en/features/tablet-skype/", "https://www.skype.com/en/get-skype/skype-for-mobile/"]
  sysreq:
    windows: ["https://support.skype.com/en/faq/fa10328/what-are-the-system-requirements-for-skype"]
    macos: ["https://support.skype.com/en/faq/fa10328/what-are-the-system-requirements-for-skype"]
    linux: ["https://support.skype.com/en/faq/fa10328/what-are-the-system-requirements-for-skype"]
    android: ["https://support.skype.com/en/faq/fa10328/what-are-the-system-requirements-for-skype"]
    ios: ["https://support.skype.com/en/faq/fa10328/what-are-the-system-requirements-for-skype"]
  license: ["https://www.microsoft.com/en-us/servicesagreement/"]
  rating:
    - name: "FileHorse"
      type: "user"
      url: "https://www.filehorse.com/download-skype/"
      remarks: "Windows"
    - name: "Softpedia"
      type: "user"
      url: "https://www.softpedia.com/get/Office-tools/Fax-Telephony/Skype.shtml"
      remarks: "Windows"
    - name: "Softpedia"
      type: "user"
      url: "https://www.softpedia.com/get/PORTABLE-SOFTWARE/Internet/Chat/Skype-Portable.shtml"
      remarks: "Windows - Portable"
    - name: "Uptodown"
      type: "user"
      url: "https://skype.en.uptodown.com/windows#rating"
      remarks: "Windows"
    - name: "TechSpot"
      type: "user"
      url: "https://www.techspot.com/downloads/50-skype.html"
    - name: "CNET"
      type: "expert"
      url: "https://download.cnet.com/sPortable/3000-2349_4-10972596.html"
      remarks: "Windows - Portable"
    - name: "Softonic"
      type: "user"
      url: "https://skype.en.softonic.com/"
      remarks: "Windows"
    - name: "Softonic"
      type: "user"
      url: "https://skype-windows-10.en.softonic.com/"
      remarks: "Windows 10"
    - name: "FileHippo"
      type: "user"
      url: "https://filehippo.com/download_skype/"
      remarks: "Windows"
    - name: "MacUpdate"
      type: "user"
      url: "https://www.macupdate.com/app/mac/15805/skype"
      remarks: "macOS"
    - name: "Softonic"
      type: "user"
      url: "https://skype.en.softonic.com/mac"
      remarks: "macOS"
    - name: "FileHorse"
      type: "user"
      url: "https://mac.filehorse.com/download-skype/"
      remarks: "macOS"
    - name: "Google Play"
      type: "user"
      url: "https://play.google.com/store/apps/details?id=com.skype.raider"
      remarks: "Android"
    - name: "Google Play"
      type: "user"
      url: "https://play.google.com/store/apps/details?id=com.skype.m2"
      remarks: "Android - Lite"
    - name: "Softonic"
      type: "user"
      url: "https://skype.en.softonic.com/android"
      remarks: "Android"
    - name: "Apple App Store"
      type: "user"
      url: "https://apps.apple.com/app/skype-for-iphone/id304878510"
      remarks: "iOS"
    - name: "Softonic"
      type: "user"
      url: "https://skype.en.softonic.com/iphone"
      remarks: "iOS"
    - name: "TrustRadius"
      type: "user"
      url: "https://www.trustradius.com/products/skype/reviews"
    - name: "G2CROWD"
      type: "user"
      url: "https://www.g2.com/products/skype/reviews"
    - name: "PCMag"
      type: "expert"
      url: "https://in.pcmag.com/internet-telephony-voip/37723/microsoft-skype-for-windows"
    - name: "TechRadar"
      type: "expert"
      url: "https://www.techradar.com/in/reviews/skype"
    - name: "TrustPilot"
      type: "user"
      url: "https://www.trustpilot.com/review/www.skype.com"
  status: ["https://support.skype.com/en/faq/fa34778/what-s-new-in-skype-for-windows-mac-linux-and-web", "https://support.skype.com/en/faq/FA34770/what-s-new-in-skype-on-mobile"]

rating:
  - name: "FileHorse"
    rate: [8.6, 10]
    num: 1937
    remarks: "Windows"
  - name: "Softpedia"
    rate: [4.1, 5]
    num: 2348
    remarks: "Windows"
  - name: "Softpedia"
    rate: [3.7, 5]
    num: 185
    remarks: "Windows - Portable"
  - name: "Uptodown"
    rate: [4.5, 5]
    num: 14
    remarks: "Windows"
  - name: "TechSpot"
    rate: [4.3, 5]
    num: 424
  - name: "CNET"
    rate: [4, 5]
    remarks: "Windows - Portable"
  - name: "Softonic"
    rate: [3.8, 5]
    num: 51879
    remarks: "Windows"
  - name: "Softonic"
    rate: [3.7, 5]
    num: 3255
    remarks: "Windows 10"
  - name: "FileHippo"
    rate: [5, 10]
    num: 1154
    remarks: "Windows"
  - name: "MacUpdate"
    rate: [1.7, 5]
    num: 1056
    remarks: "macOS"
  - name: "Softonic"
    rate: [3.6, 5]
    num: 3324
    remarks: "macOS"
  - name: "FileHorse"
    rate: [8, 10]
    num: 73
    remarks: "macOS"
  - name: "Google Play"
    rate: [4.3, 5]
    num: 11295720
    remarks: "Android"
  - name: "Google Play"
    rate: [4.1, 5]
    num: 44196
    remarks: "Android - Lite"
  - name: "Softonic"
    rate: [3.8, 5]
    num: 1577
    remarks: "Android"
  - name: "Apple App Store"
    rate: [4.5, 5]
    num: 55092
    remarks: "iOS"
  - name: "Softonic"
    rate: [3.5, 5]
    num: 386
    remarks: "iOS"
  - name: "TrustRadius"
    rate: [7.9, 10]
    num: 1930
  - name: "G2CROWD"
    rate: [4.3, 5]
    num: 18693
  - name: "PCMag"
    rate: [4.5, 5]
  - name: "TechRadar"
    rate: [4, 5]
  - name: "TrustPilot"
    rate: [1.7, 5]
    num: 1292

---
  Skype is a telecommunications application that specializes in providing video chat and voice calls between computers, tablets, mobile devices, the Xbox One console, and smartwatches over the Internet. It also allows video calling for 100 people, mobile screen sharing, Skype Number (allows to get a local phone number in another country or region and answer calls on Skype), use Skype to call phones (allows to call landlines and mobiles from anywhere in the world using Skype).
  
  [Blog](https://en.wikipedia.org/wiki/Skype)  I  [Forum](https://answers.microsoft.com/en-us/skype/forum)  I  [FAQ](https://support.skype.com/en/faq/FA34713/faq-and-known-issues-with-skype)
