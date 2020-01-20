---
title: "WinRAR"

description: "A trialware file archiver utility for Windows, developed by Eugene Roshal of win.rar GmbH"

image: "https://upload.wikimedia.org/wikipedia/en/4/4f/WinRAR_Logo_2018.png"

status: ["Active"]

website: "https://www.win-rar.com/"

get_it:
  - from: "Authentic"
    url: "https://www.win-rar.com/download.html?L=0"
  - from: "FileHippo"
    platform:
      - name: "Windows"
        hardware: ["dskp"]
        arch: ["x32"]
        type: "official"
    url: "https://filehippo.com/download_winrar_32/"
  - from: "FileHippo"
    platform:
      - name: "Windows"
        hardware: ["dskp"]
        arch: ["x64"]
        type: "official"
    url: "https://filehippo.com/download_winrar_64/"
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
        arch: ["x32", "x64"]
        type: "official"
      - name: "Android"
        hardware: ["smptb"]
        type: "official"
      - name: "FreeBSD"
        hardware: ["dskp"]
        arch: ["x32", "x64"]
        type: "official"
    url: "https://www.techspot.com/downloads/67-winrar.html"
  - from: "CNET"
    platform:
      - name: "Windows"
        hardware: ["dskp"]
        arch: ["x64"]
        type: "official"
    url: "https://download.cnet.com/WinRAR-64-bit/3000-2250_4-10965579.html"
  - from: "FileHorse"
    platform:
      - name: "Windows"
        hardware: ["dskp"]
        arch: ["x64"]
        type: "official"
    url: "https://www.filehorse.com/download-winrar-64/"
  - from: "Uptodown"
    platform:
      - name: "Windows"
        hardware: ["dskp"]
        arch: ["x64"]
        type: "official"
    url: "https://winrar.en.uptodown.com/windows"
  - from: "Softonic"
    platform:
      - name: "Windows"
        hardware: ["dskp"]
        arch: ["x32"]
        type: "official"
    url: "https://winrar.en.softonic.com/download"
  - from: "Softonic"
    platform:
      - name: "Windows"
        hardware: ["dskp"]
        arch: ["x64"]
        type: "official"
    url: "https://winrar-64bit.en.softonic.com/download"
  - from: "Google Play Store"
    platform:
      - name: "Android"
        hardware: ["smptb"]
        type: "official"
    url: "https://play.google.com/store/apps/details?id=com.rarlab.rar&hl=en_IN"
  - from: "Uptodown"
    platform:
      - name: "Android"
        hardware: ["smptb"]
        type: "official"
    url: "https://rar-for-android.en.uptodown.com/android"
  - from: "TechSpot"
    platform:
      - name: "macOS"
        hardware: ["dskp"]
        type: "official"
    url: "https://www.techspot.com/downloads/5169-winrar-for-mac.html"
  - from: "FileHippo"
    platform:
      - name: "macOS"
        hardware: ["dskp"]
        type: "official"
    url: "https://filehippo.com/mac/download_winrar_for_mac/"
  - from: "FileHorse"
    platform:
      - name: "macOS"
        hardware: ["dskp"]
        type: "official"
    url: "https://mac.filehorse.com/download-rar-for-mac/"

sysreq:
  -
    min: "120 MB of free RAM (since v4.20)"

developer: ["Eugene Roshal<OD> of win.rar GmbH", "Alexander L. Roshal"]

initial_release: ["22 April 1995"]

written_in: ["C++"]

platform:
  - dskp:
      - name: "Windows"
        type: "official"
        arch: ["x32", "x64"]
      - name: "Linux"
        type: "official"
        arch: ["x32", "x64"]
      - name: "macOS"
        type: "official"
        arch: ["x64"]
      - name: "Unix(like)"
        type: "official"
        arch: ["x32", "x64"]
  - smp:
      - name: "Android"
        type: "official"
  - tab:
      - name: "Android"
        type: "official"

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
  sysreq: ["https://www.rarlab.com/rarnew.htm"]
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
  
  [News](https://www.win-rar.com/latestnews.html?&L=0) I [Manual](http://acritum.com/software/manuals/winrar/) I [documentation.HELP!](https://documentation.help/WinRAR/) I [FAQ](https://www.win-rar.com/faq.html?&L=0)
  