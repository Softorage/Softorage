---
title: "WinRAR"

description: "A trialware file archiver utility for Windows, developed by Eugene Roshal of win.rar GmbH"

image: "https://cdn.statically.io/img/img.softorage.com/software-logo/winrar.png?h=64"

status: ["Active"]

website: "https://www.win-rar.com/"

get_it:
  - from: "Authentic"
    url: "https://www.win-rar.com/download.html?L=0"
  - from: "FileHippo"
    url: "https://filehippo.com/download_winrar_32/"
    platform:
      - name: "Windows"
        hardware: ["dskp"]
        arch: ["x32"]
        official: true
  - from: "FileHippo"
    url: "https://filehippo.com/download_winrar_64/"
    platform:
      - name: "Windows"
        hardware: ["dskp"]
        arch: ["x64"]
        official: true
  - from: "TechSpot"
    url: "https://www.techspot.com/downloads/67-winrar.html"
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
        arch: ["x32", "x64"]
        official: true
      - name: "Android"
        hardware: ["smptb"]
        official: true
      - name: "FreeBSD"
        hardware: ["dskp"]
        arch: ["x32", "x64"]
        official: true
  - from: "CNET"
    url: "https://download.cnet.com/WinRAR-64-bit/3000-2250_4-10965579.html"
    platform:
      - name: "Windows"
        hardware: ["dskp"]
        arch: ["x64"]
        official: true
  - from: "FileHorse"
    url: "https://www.filehorse.com/download-winrar-64/"
    platform:
      - name: "Windows"
        hardware: ["dskp"]
        arch: ["x64"]
        official: true
  - from: "Uptodown"
    url: "https://winrar.en.uptodown.com/windows"
    platform:
      - name: "Windows"
        hardware: ["dskp"]
        arch: ["x64"]
        official: true
  - from: "Softonic"
    url: "https://winrar.en.softonic.com/download"
    platform:
      - name: "Windows"
        hardware: ["dskp"]
        arch: ["x32"]
        official: true
  - from: "Softonic"
    url: "https://winrar-64bit.en.softonic.com/download"
    platform:
      - name: "Windows"
        hardware: ["dskp"]
        arch: ["x64"]
        official: true
  - from: "Google Play Store"
    url: "https://play.google.com/store/apps/details?id=com.rarlab.rar&hl=en_IN"
    platform:
      - name: "Android"
        hardware: ["smptb"]
        official: true
  - from: "Uptodown"
    url: "https://rar-for-android.en.uptodown.com/android"
    platform:
      - name: "Android"
        hardware: ["smptb"]
        official: true
  - from: "TechSpot"
    url: "https://www.techspot.com/downloads/5169-winrar-for-mac.html"
    platform:
      - name: "macOS"
        hardware: ["dskp"]
        official: true
  - from: "FileHippo"
    url: "https://filehippo.com/mac/download_winrar_for_mac/"
    platform:
      - name: "macOS"
        hardware: ["dskp"]
        official: true
  - from: "FileHorse"
    url: "https://mac.filehorse.com/download-rar-for-mac/"
    platform:
      - name: "macOS"
        hardware: ["dskp"]
        official: true

sysreq:
  general:
    -
      min: "120 MB of free RAM (since v4.20)"

developer: ["Eugene Roshal<OD> of win.rar GmbH", "Alexander L. Roshal"]

initial_release: ["22 April 1995"]

written_in: ["C++"]

platform:
  - dskp:
      - name: "Windows"
        official: true
        arch: ["x32", "x64"]
      - name: "Linux"
        official: true
        arch: ["x32", "x64"]
      - name: "macOS"
        official: true
        arch: ["x64"]
      - name: "Unix(like)"
        official: true
        arch: ["x32", "x64"]
  - smp:
      - name: "Android"
        official: true
  - tab:
      - name: "Android"
        official: true

categories: ["File Archiver"]

license: ["Proprietary", "Trialware", "Adware (Android)", "Commercial"]

social:
  - name: "Facebook"
    url: "https://www.facebook.com/winrar/"
  - name: "Twitter"
    url: "https://twitter.com/winrar_rarlab"
  - name: "Wikipedia"
    url: "https://en.wikipedia.org/wiki/WinRAR"

source:
  overview: ["http://www.qbssoftware.com/products/WinRAR/overview/_prodwinrar", "https://www.win-rar.com/features.html?&L=0"]
  developer: ["https://en.wikipedia.org/w/index.php?title=WinRAR&oldid=930943091", "https://www.rarlab.com/license.htm"]
  initial_release: ["https://en.wikipedia.org/w/index.php?title=WinRAR&oldid=930943091", "https://softcamel.com/winrar/", "https://www.stemjar.com/winrar-how-it-works/"]
  written_in: ["https://en.wikipedia.org/w/index.php?title=WinRAR&oldid=930943091"]
  platform:
    - dskp: ["https://www.win-rar.com/download.html?&L=0"]
  sysreq:
    general: ["https://www.rarlab.com/rarnew.htm"]
  license: ["https://www.rarlab.com/license.htm", "https://en.wikipedia.org/w/index.php?title=WinRAR&oldid=930943091", "https://play.google.com/store/apps/details?id=com.rarlab.rar&hl=en_IN"]
  rating:
    - name: "FileHippo"
      type: "user"
      url: "https://filehippo.com/download_winrar_32/"
      remarks: "x32 bit Windows"
    - name: "TechSpot"
      type: "user"
      url: "https://www.techspot.com/downloads/67-winrar.html"
    - name: "Softonic"
      type: "user"
      url: "https://winrar.en.softonic.com/"
      remarks: "x32 bit Windows"
    - name: "Softonic"
      type: "user"
      url: "https://winrar-64bit.en.softonic.com/"
      remarks: "x64 bit Windows"
    - name: "CNET"
      type: "user"
      url: "https://download.cnet.com/WinRAR-64-bit/3000-2250_4-10965579.html"
      remarks: "x64 bit Windows"
    - name: "CNET"
      type: "expert"
      url: "https://download.cnet.com/WinRAR-64-bit/3000-2250_4-10965579.html"
      remarks: "x64 bit Windows"
    - name: "Uptodown"
      type: "user"
      url: "https://winrar.en.uptodown.com/windows"
      remarks: "x64 bit Windows"
    - name: "FileHorse"
      type: "user"
      url: "https://www.filehorse.com/download-winrar-64/"
      remarks: "x64 bit Windows"
    - name: "Softpedia"
      type: "user"
      url: "https://www.softpedia.com/get/Compression-tools/WinRAR.shtml"
    - name: "Uptodown"
      type: "user"
      url: "https://rar-for-android.en.uptodown.com/android"
      remarks: "Android"
    - name: "Google Play"
      type: "user"
      url: "https://play.google.com/store/apps/details?id=com.rarlab.rar&hl=en_IN"
      remarks: "Android"
    - name: "TechSpot"
      type: "user"
      url: "https://www.techspot.com/downloads/5169-winrar-for-mac.html"
      remarks: "macOS"
    - name: "FileHippo"
      type: "user"
      url: "https://filehippo.com/mac/download_winrar_for_mac/"
      remarks: "macOS"
    - name: "FileHorse"
      type: "user"
      url: "https://mac.filehorse.com/download-rar-for-mac/"
      remarks: "macOS"
  status: ["https://www.win-rar.com/news.html?L=0", "https://www.win-rar.com/latestnews.html?&L=0", "https://www.win-rar.com/whatsnew.html?&L=0"]

rating:
  - name: "FileHippo"
    rate: [8, 10]
    num: 722
    remarks: "x32 bit Windows"
  - name: "TechSpot"
    rate: [4.5, 5]
    num: 87
  - name: "Softonic"
    rate: [8, 10]
    num: 25710
    remarks: "x32 bit Windows"
  - name: "Softonic"
    rate: [8, 10]
    num: 3223
    remarks: "x64 bit Windows"
  - name: "CNET"
    rate: [4.5, 5]
    num: 192
    remarks: "x64 bit Windows"
  - name: "CNET"
    rate: [4, 5]
    remarks: "x64 bit Windows"
  - name: "Uptodown"
    rate: [4, 5]
    num: 30
    remarks: "x64 bit Windows"
  - name: "FileHorse"
    rate: [7.1, 10]
    num: 521
    remarks: "x64 bit Windows"
  - name: "Softpedia"
    rate: [4.5, 5]
    num: 2406
  - name: "Uptodown"
    rate: [4.9, 5]
    num: 23
    remarks: "Android"
  - name: "Google Play"
    rate: [4.4, 5]
    num: 726788
    remarks: "Android"
  - name: "TechSpot"
    rate: [4.3, 5]
    num: 1908
    remarks: "macOS"
  - name: "FileHippo"
    rate: [7, 10]
    num: 691
    remarks: "macOS"
  - name: "FileHorse"
    rate: [7.9, 10]
    num: 41
    remarks: "macOS"
---
  WinRAR is an [archive manager](/categories/file-archiver) for backing up data and reducing the size of e-mail attachments. Decompress files downloaded from the internet and create new archives in RAR and ZIP file format. Support is provided for RAR, ZIP, CAB, ARJ, LZH, ACE, TAR, GZip, UUE, ISO, BZIP2, Z and 7-Zip file formats.
  
  WinRAR recognises and selects the best compression method for decompressing multi-media files; the compression algorithm compresses multi-media files, executables and object libraries. Split archives into separate volumes in order to save them on several disks. 128 bit and 256 bit password encryption and authenticated signature technology is included.
  
  [News](https://www.win-rar.com/latestnews.html?&L=0)  I  [Manual](http://acritum.com/software/manuals/winrar/)  I  [documentation.HELP!](https://documentation.help/WinRAR/)  I  [FAQ](https://www.win-rar.com/faq.html?&L=0)
  
