---
title: "HandBrake"

description: "HandBrake is a free and open-source video transcoder to convert video from one format to another, and to rip CD/DVD to popular video formats."

image: "https://cdn.statically.io/img/img.softorage.com/software-logo/handbrake.png?h=64"

status: ["Active"]

website: "https://handbrake.fr"

get_it:
  - from: "Authentic"
    url: "https://handbrake.fr/downloads.php"
  - from: "Uptodown"
    url: "https://handbrake.en.uptodown.com/windows"
    platform:
      - name: "Windows"
        hardware: ["dskp"]
        official: true
        portable: false
  - from: "Softpedia"
    url: "https://www.softpedia.com/get/CD-DVD-Tools/CD-DVD-Rip-Other-Tools/HandBrake.shtml"
    platform:
      - name: "Windows"
        hardware: ["dskp"]
        official: true
        portable: false
  - from: "FossHub"
    url: "https://www.fosshub.com/HandBrake.html"
    platform:
      - name: "Windows"
        hardware: ["dskp"]
        arch: ["x64"]
        official: true
        portable: false
      - name: "Windows"
        hardware: ["dskp"]
        arch: ["x64"]
        official: true
        portable: true
      - name: "macOS"
        hardware: ["dskp"]
        official: true
        portable: false
  - from: "TechSpot"
    url: "https://www.techspot.com/downloads/4785-handbrake.html"
    platform:
      - name: "Windows"
        hardware: ["dskp"]
        arch: ["x32", "x64"]
        official: true
        portable: false
      - name: "Windows"
        hardware: ["dskp"]
        arch: ["x64"]
        official: true
        portable: true
      - name: "macOS"
        hardware: ["dskp"]
        official: true
        portable: false
      - name: "Linux"
        hardware: ["dskp"]
        official: true
        portable: false
  - from: "Softonic"
    url: "https://handbrake.en.softonic.com/"
    platform:
      - name: "Windows"
        hardware: ["dskp"]
        official: true
        portable: false
  - from: "CNET"
    url: "https://download.cnet.com/HandBrake/3000-2194_4-10808250.html"
    platform:
      - name: "Windows"
        hardware: ["dskp"]
        official: true
        portable: false
  - from: "FileHorse"
    url: "https://www.filehorse.com/download-handbrake-32/"
    platform:
      - name: "Windows"
        hardware: ["dskp"]
        arch: ["x32"]
        official: true
        portable: false
  - from: "FileHorse"
    url: "https://www.filehorse.com/download-handbrake-64/"
    platform:
      - name: "Windows"
        hardware: ["dskp"]
        arch: ["x64"]
        official: true
        portable: false
  - from: "FileHippo"
    url: "https://filehippo.com/download_handbrake_32/"
    platform:
      - name: "Windows"
        hardware: ["dskp"]
        arch: ["x32"]
        official: true
        portable: false
  - from: "FileHippo"
    url: "https://filehippo.com/download_handbrake_64/"
    platform:
      - name: "Windows"
        hardware: ["dskp"]
        arch: ["x64"]
        official: true
        portable: false
  - from: "MacUpdate"
    url: "https://www.macupdate.com/app/mac/12987/handbrake"
    platform:
      - name: "macOS"
        hardware: ["dskp"]
        official: true
        portable: false
  - from: "CNET"
    url: "https://download.cnet.com/HandBrake/3000-2140_4-43951.html"
    platform:
      - name: "macOS"
        hardware: ["dskp"]
        official: true
        portable: false
  - from: "Softonic"
    url: "https://handbrake.en.softonic.com/mac"
    platform:
      - name: "macOS"
        hardware: ["dskp"]
        official: true
        portable: false
  - from: "FileHorse"
    url: "https://mac.filehorse.com/download-handbrake/"
    platform:
      - name: "macOS"
        hardware: ["dskp"]
        official: true
        portable: false

sysreq:
  linux:
    -
      min: "Processor: Intel Core 2 Duo, AMD Athlon X2, or better"
    -
      min: "Free RAM: 
* 256 MB for transcoding standard definition video
* 1 GB for transcoding high definition video
* 2 GB or more for transcoding 4K video"
    -
      min: "Screen Resolution: 1024x768 or better"
    -
      min: "System Storage: 
* 50 MB for the HandBrake app
* 2 GB or more recommended for processing and storing new videos"
  macos:
    -
      min: "Processor: Intel Core 2 Duo or better
* 32-bit Intel Macs (2007 and earlier) cannot run recent 64-bit HandBrake releases
* 2010 models and newer are recommended, as older Macs are often quite slow for processing video"
    -
      min: "Free RAM: 
* 256 MB for transcoding standard definition video
* 1 GB for transcoding high definition video
* 2 GB or more for transcoding 4K video  "
    -
      min: "Screen Resolution: 1024x768 or better"
    -
      min: "System Storage: 
* 50 MB for the HandBrake app
* 2 GB or more recommended for processing and storing new videos"
  windows:
    -
      min: "Processor: Intel Core 2 Duo, AMD Athlon X2, or better"
    -
      min: "Free RAM: 
* 256 MB for transcoding standard definition video
* 1 GB for transcoding high definition video
* 2 GB or more for transcoding 4K video"
    -
      min: "Screen Resolution: 1024x768 or better (higher if running in High-DPI Mode, above 96 DPI or 100%)"
    -
      min: "System Storage: 
* 50 MB for the HandBrake app
* 2 GB or more recommended for processing and storing new videos"
    -
      min: "See note."

developer: ["Eric Petit <OD>", "The HandBrake Team"]

initial_release: ["24 August 2003"]

repository: ["https://github.com/HandBrake/HandBrake"]

written_in: ["C", "C#", "Objective-C", "Python"]

platform:
  - dskp:
      - name: "Windows"
        official: true
        arch: ["x64"]
      - name: "Linux"
        official: true
        arch: ["x64"]
      - name: "macOS"
        official: true
        arch: ["x64"]

categories: ["Video Transcoder"]

license: ["GPL v2"]

social:
  - name: "Wikipedia"
    url: "https://en.wikipedia.org/wiki/HandBrake"

source:
  overview: ["https://handbrake.fr/", "https://www.pcworld.com/article/151744/article.html"]
  developer: ["https://github.com/HandBrake/HandBrake/blob/master/AUTHORS.markdown"]
  initial_release: ["https://www.leawo.org/tutorial/enable-nvenc-hardware-encoding-in-handbrake-1398.html"]
  written_in: ["https://github.com/HandBrake/HandBrake"]
  platform:
    - dskp: ["https://handbrake.fr/downloads.php"]
  sysreq:
    linux: ["https://handbrake.fr/docs/en/1.0.0/technical/system-requirements.html"]
    macos: ["https://handbrake.fr/docs/en/1.0.0/technical/system-requirements.html"]
    windows: ["https://handbrake.fr/docs/en/1.0.0/technical/system-requirements.html"]
  license: ["https://github.com/HandBrake/HandBrake/blob/master/LICENSE"]
  rating:
    - name: "Softpedia"
      type: "user"
      url: "https://www.softpedia.com/get/CD-DVD-Tools/CD-DVD-Rip-Other-Tools/HandBrake.shtml"
      remarks: "Windows"
    - name: "FossHub"
      type: "user"
      url: "https://www.fosshub.com/HandBrake.html"
      remarks: "Windows, macOS"
    - name: "TechSpot"
      type: "user"
      url: "https://www.techspot.com/downloads/4785-handbrake.html"
    - name: "Softonic"
      type: "user"
      url: "https://handbrake.en.softonic.com/"
      remarks: "Windows"
    - name: "CNET"
      type: "user"
      url: "https://download.cnet.com/HandBrake/3000-2194_4-10808250.html"
      remarks: "Windows"
    - name: "FileHorse"
      type: "user"
      url: "https://www.filehorse.com/download-handbrake-32/"
      remarks: "x32 - Windows"
    - name: "FileHorse"
      type: "user"
      url: "https://www.filehorse.com/download-handbrake-64/"
      remarks: "x64 - Windows"
    - name: "FileHippo"
      type: "user"
      url: "https://filehippo.com/download_handbrake_32/"
      remarks: "x32 - Windows"
    - name: "FileHippo"
      type: "user"
      url: "https://filehippo.com/download_handbrake_64/"
      remarks: "x64 - Windows"
    - name: "MacUpdate"
      type: "user"
      url: "https://www.macupdate.com/app/mac/12987/handbrake"
      remarks: "macOS"
    - name: "CNET"
      type: "user"
      url: "https://download.cnet.com/HandBrake/3000-2140_4-43951.html"
      remarks: "macOS"
    - name: "Softonic"
      type: "user"
      url: "https://handbrake.en.softonic.com/mac"
      remarks: "macOS"
    - name: "FileHorse"
      type: "user"
      url: "https://mac.filehorse.com/download-handbrake/"
      remarks: "macOS"
    - name: "CNET"
      type: "expert"
      url: "https://download.cnet.com/HandBrake/3000-2194_4-10808250.html"
      remarks: "Windows"
    - name: "CNET"
      type: "expert"
      url: "https://download.cnet.com/HandBrake/3000-2140_4-43951.html"
      remarks: "macOS"
    - name: "PCMag"
      type: "expert"
      url: "https://www.pcmag.com/reviews/handbrake-for-mac?test_uuid=06kBLZk02lnicdKVknWK9FI&test_variant=b"
      remarks: "macOS"
    - name: "G2CROWD"
      type: "user"
      url: "https://www.g2.com/products/handbrake/reviews"
    - name: "TechRadar"
      type: "expert"
      url: "https://www.techradar.com/reviews/handbrake"
  status: ["https://github.com/HandBrake/HandBrake/graphs/contributors"]

rating:
  - name: "Softpedia"
    rate: [4.4, 5]
    num: 161
    remarks: "Windows"
  - name: "FossHub"
    rate: [5, 5]
    num: 40
    remarks: "Windows, macOS"
  - name: "TechSpot"
    rate: [4.5, 5]
    num: 14
  - name: "Softonic"
    rate: [8, 10]
    num: 821
    remarks: "Windows"
  - name: "CNET"
    rate: [3.5, 5]
    num: 155
    remarks: "Windows"
  - name: "FileHorse"
    rate: [8, 10]
    num: 206
    remarks: "x32 - Windows"
  - name: "FileHorse"
    rate: [7.8, 10]
    num: 118
    remarks: "x64 - Windows"
  - name: "FileHippo"
    rate: [7, 10]
    num: 441
    remarks: "x32 - Windows"
  - name: "FileHippo"
    rate: [7.3, 10]
    num: 161
    remarks: "x64 - Windows"
  - name: "MacUpdate"
    rate: [4.8, 5]
    num: 507
    remarks: "macOS"
  - name: "CNET"
    rate: [4.5, 5]
    num: 146
    remarks: "macOS"
  - name: "Softonic"
    rate: [8, 10]
    num: 404
    remarks: "macOS"
  - name: "FileHorse"
    rate: [7.1, 10]
    num: 25
    remarks: "macOS"
  - name: "CNET"
    rate: [4, 5]
    remarks: "Windows"
  - name: "CNET"
    rate: [3.5, 5]
    remarks: "macOS"
  - name: "PCMag"
    rate: [3.5, 5]
    remarks: "macOS"
  - name: "G2CROWD"
    rate: [4.6, 5]
    num: 86
  - name: "TechRadar"
    rate: [4, 5]

note: HandBrake’s QuickSync and OpenCL features are only supported on Windows. QuickSync requires a 2nd generation (Sandy Bridge) or newer Intel Core series processor with integrated Intel HD Graphics enabled and a directly connected display.1 OpenCL scaling is experimental and requires an AMD or Intel GPU with OpenCL 1.2 or later.

In lieu of a physically connected display, a display emulator adapter such as Headless Ghost will enable GPU functions such as QuickSync when connected to the Intel HD Graphics output port.

---
  HandBrake is a free and open-source [video transcoder](/categories/video-transcoder/) to convert video from one format to another, and to rip CD/DVD to popular video formats. It transcodes video and audio from nearly any format to a handful of modern ones, but it does not defeat or circumvent copy protection. Its developers removed libdvdcss (the open-source library responsible for unscrambling DVDs encrypted with the Content Scramble System (CSS)) from the application in version 0.9.2.
  
  [News](https://handbrake.fr/news.php)  I  [Forum](https://forum.handbrake.fr/)  I  [Documentation](https://handbrake.fr/docs)  I  [IRC](https://webchat.freenode.net/?channels=handbrake)
  

