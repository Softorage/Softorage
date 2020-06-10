---
title: "LibreOffice"

description: "LibreOffice is a free and open-source office suite, comprising programs for word processing, the creation and editing of spreadsheets, slideshows, diagrams and drawings, working with databases, and composing mathematical formulae"

image: "https://cdn.statically.io/img/img.softorage.com/software-logo/libreoffice.png?h=64"

status: ["Active"]

website: "https://www.libreoffice.org/"

get_it:
  - from: "Authentic"
    url: "https://www.libreoffice.org/download/download/"
  - from: "FossHub"
    url: "https://www.fosshub.com/LibreOffice.html"
    platform:
      - name: "Windows"
        hardware: ["dskp"]
        arch: ["x32", "x64"]
        official: true
        portable: false
      - name: "macOS"
        hardware: ["dskp"]
        official: true
        portable: false
      - name: "Linux"
        hardware: ["dskp"]
        arch: ["x32", "x64"]
        official: true
        portable: false
  - from: "TechSpot"
    url: "https://www.techspot.com/downloads/5131-libreoffice-productivity-suite.html"
    platform:
      - name: "Windows"
        hardware: ["dskp"]
        arch: ["x32", "x64"]
        official: true
        portable: false
      - name: "macOS"
        hardware: ["dskp"]
        official: true
        portable: false
      - name: "Linux"
        hardware: ["dskp"]
        arch: ["x32", "x64"]
        official: true
        portable: false
  - from: "FileHorse"
    url: "https://www.filehorse.com/download-libreoffice-64/"
    platform:
      - name: "Windows"
        hardware: ["dskp"]
        arch: ["x64"]
        official: true
        portable: false
  - from: "Softonic"
    url: "https://libreoffice.en.softonic.com/"
    platform:
      - name: "Windows"
        hardware: ["dskp"]
        official: true
        portable: false
  - from: "FileHippo"
    url: "https://filehippo.com/download_libreoffice_32/"
    platform:
      - name: "Windows"
        hardware: ["dskp"]
        arch: ["x32"]
        official: true
        portable: false
  - from: "Uptodown"
    url: "https://libreoffice.en.uptodown.com/windows"
    platform:
      - name: "Windows"
        hardware: ["dskp"]
        official: true
        portable: false
  - from: "Malavida"
    url: "https://www.malavida.com/en/soft/libreoffice/"
    platform:
      - name: "Windows"
        hardware: ["dskp"]
        official: true
        portable: false
  - from: "Softpedia"
    url: "https://www.softpedia.com/get/Office-tools/Office-suites/LibreOffice.shtml"
    platform:
      - name: "Windows"
        hardware: ["dskp"]
        arch: ["x32"]
        official: true
        portable: false
  - from: "Softpedia"
    url: "https://linux.softpedia.com/get/Office/Office-Suites/LibreOffice-60713.shtml"
    platform:
      - name: "Windows"
        hardware: ["dskp"]
        arch: ["x64"]
        official: true
        portable: false
  - from: "Softonic"
    url: "https://libreoffice-mac.en.softonic.com/mac"
    platform:
      - name: "macOS"
        hardware: ["dskp"]
        official: true
        portable: false

sysreq:
  linux:
    -
      min: "OS: Linux kernel version 3.10 or higher"
      recm: ""
    -
      min: "Processor: Pentium-compatible PC"
      recm: "Processor: Pentium III, Athlon or more-recent system"
    -
      min: "RAM: 256 MB"
      recm: "RAM: 512 MB RAM"
    -
      min: "Hard disk space: Up to 1.55 GB available"
      recm: ""
    -
      min: "Screen resolution: X Server with 1024x768 resolution, with at least 256 colors"
      recm: "Screen resolution: Higher than 1024x768"
    -
      min: "Gnome 3.18 or higher, with the at-spi2 1.32 package (required for support for assistive technology [AT] tools), or another compatible GUI (such as KDE, among others)"
      recm: ""
    -
      min: "glibc2 version 2.17 or higher"
      recm: ""
  macos:
    -
      min: "OS: macOS 10.10 (Yosemite) or higher"
      recm: ""
    -
      min: "Processor: Intel processor"
      recm: ""
    -
      min: "RAM: 512 MB"
      recm: ""
    -
      min: "Hard disk space: Up to 800 MB available"
      recm: ""
    -
      min: "Screen resolution: 1024x768 graphic device with 256 colors"
      recm: "Screen resolution: Higher than 1024x768"
  windows:
    -
      min: "OS: Microsoft Windows 7 SP1, Windows 8, Windows Server 2012, or Windows 10"
      recm: ""
    -
      min: "Processor: Pentium-compatible PC for Windows"
      recm: "Processor: Pentium III, Athlon or more-recent system"
    -
      min: "RAM: 256 MB"
      recm: "RAM: 512 MB"
    -
      min: "Hard disk space: Up to 1.5 GB available"
      recm: ""
    -
      min: "Screen resolution: 1024x768 with 256 colors"
      recm: "Screen resolution: Higher than 1024x768"

developer: ["The Document Foundation", "Star Division<OD>"]

initial_release: ["25 January 2011"]

repository: ["git.libreoffice.org/core"]

written_in: ["C++", "Java", "Python"]

platform:
  - dskp:
      - name: "Windows"
        official: true
      - name: "Linux"
        official: true
      - name: "macOS"
        official: true
  - smp:
      - name: "Android"
        official: true

categories: ["Office Suite"]

license: ["MPL v2", "Apache v2", "LGPL v3+"]

social:
  - name: "Facebook"
    url: "https://www.facebook.com/libreoffice.org"
  - name: "Google+"
    url: "https://plus.google.com/+libreoffice/"
  - name: "YouTube"
    url: "https://www.youtube.com/channel/UCQAClQkZEm2rkWvU5bvCAXQ"
  - name: "reddit"
    url: "https://www.reddit.com/r/libreoffice"
  - name: "Twitter"
    url: "https://twitter.com/libreoffice"
  - name: "Wikipedia"
    url: "https://en.wikipedia.org/wiki/LibreOffice"

source:
  overview: ["https://help.libreoffice.org/Common/About_Converting_Microsoft_Office_Documents", "https://www.libreoffice.org/discover/libreoffice/", "https://www.libreoffice.org/download/libreoffice-fresh/?lang=pick"]
  developer: ["https://www.libreoffice.org/discover/libreoffice/", "https://en.wikipedia.org/w/index.php?title=LibreOffice&oldid=877694401"]
  initial_release: ["https://www.libreoffice.org/about-us/libreoffice-timeline/", "https://en.wikipedia.org/w/index.php?title=LibreOffice&oldid=877694401"]
  written_in: ["https://en.wikipedia.org/w/index.php?title=LibreOffice&oldid=877694401", "https://wiki.documentfoundation.org/ReleaseNotes/4.0"]
  platform:
    - dskp: ["https://www.libreoffice.org/download/download/"]
  sysreq:
    general: ["https://www.libreoffice.org/get-help/system-requirements/"]
    linux: ["https://www.libreoffice.org/get-help/system-requirements/"]
    macos: ["https://www.libreoffice.org/get-help/system-requirements/"]
  license: ["https://www.libreoffice.org/about-us/licenses/"]
  rating:
    - name: "TechRadar"
      type: "expert"
      url: "https://www.techradar.com/reviews/libreoffice"
    - name: "PCWorld"
      type: "expert"
      url: "https://www.pcworld.com/article/3273896/software/libreoffice-6-review.html"
    - name: "Capterra"
      type: "user"
      url: "https://www.capterra.com/p/158981/LibreOffice/"
    - name: "G2CROWD"
      type: "user"
      url: "https://www.g2crowd.com/products/libreoffice/reviews"
    - name: "FossHub"
      type: "user"
      url: "https://www.fosshub.com/LibreOffice.html"
    - name: "TechSpot"
      type: "user"
      url: "https://www.techspot.com/downloads/5131-libreoffice-productivity-suite.html"
    - name: "FileHorse"
      type: "user"
      url: "https://www.filehorse.com/download-libreoffice-64/"
      remarks: "x64 bit Windows"
    - name: "Softonic"
      type: "user"
      url: "https://libreoffice.en.softonic.com/"
      remarks: "Windows"
    - name: "FileHippo"
      type: "user"
      url: "https://filehippo.com/download_libreoffice_32/"
      remarks: "x32 bit Windows"
    - name: "Malavida"
      type: "user"
      url: "https://www.malavida.com/en/soft/libreoffice/"
      remarks: "Windows"
    - name: "Softpedia"
      type: "user"
      url: "https://www.softpedia.com/get/Office-tools/Office-suites/LibreOffice.shtml"
      remarks: "x32 bit Windows"
    - name: "Softpedia"
      type: "user"
      url: "https://linux.softpedia.com/get/Office/Office-Suites/LibreOffice-60713.shtml"
      remarks: "x64 bit Linux"
    - name: "Softonic"
      type: "user"
      url: "https://libreoffice-mac.en.softonic.com/mac"
      remarks: "macOS"
    - name: "CNET"
      type: "expert"
      url: "https://download.cnet.com/LibreOffice/3000-18483_4-75337651.html"
      remarks: "Windows"
    - name: "CNET"
      type: "user"
      url: "https://download.cnet.com/LibreOffice/3000-18483_4-75337651.html"
      remarks: "Windows"
  status: ["https://blog.documentfoundation.org/", "https://gerrit.libreoffice.org/#/q/status:open"]

rating:
  - name: "TechRadar"
    rate: [4.5, 5]
  - name: "PCWorld"
    rate: [4, 5]
  - name: "Capterra"
    rate: [4.5, 5]
    num: 394
  - name: "G2CROWD"
    rate: [4.4, 5]
    num: 96
  - name: "FossHub"
    rate: [5, 5]
    num: 15
  - name: "TechSpot"
    rate: [4.5, 5]
    num: 30
  - name: "FileHorse"
    rate: [8.6, 10]
    num: 70
    remarks: "x64 bit Windows"
  - name: "Softonic"
    rate: [8, 10]
    num: 3504
    remarks: "Windows"
  - name: "FileHippo"
    rate: [7.3, 10]
    num: 207
    remarks: "x32 bit Windows"
  - name: "Malavida"
    rate: [8, 10]
    num: 41
    remarks: "Windows"
  - name: "Softpedia"
    rate: [3.6, 5]
    num: 10794
    remarks: "x32 bit Windows"
  - name: "Softpedia"
    rate: [4.8, 5]
    num: 1376
    remarks: "x64 bit Linux"
  - name: "Softonic"
    rate: [7, 10]
    num: 244
    remarks: "macOS"
  - name: "CNET"
    rate: [4.5, 5]
    remarks: "Windows"
  - name: "CNET"
    rate: [4, 5]
    num: 179
    remarks: "Windows"

note: * [LibreOffice website](https://www.libreoffice.org/) mentions twitter handles [@tdforg](https://twitter.com/tdforg), [@libreoffice](https://twitter.com/libreoffice), [@AskLibreOffice](https://twitter.com/AskLibreOffice), [@LibreOfficeBugs](https://twitter.com/LibreOfficeBugs).

---
  LibreOffice is a free and open-source [office suite](/categories/office-suite), a project of The Document Foundation. It was forked from OpenOffice.org in 2010, which was an open-sourced version of the earlier StarOffice.
  
  LibreOffice uses the international ISO/IEC standard OpenDocument file format (ODF) as its native format to save documents for all of its applications. LibreOffice also supports the file formats of most other major office suites, including Microsoft Office(.doc, .docx, .xls, .xlsx, .ppt, .pptx), through a variety of import/export filters. You can export your work in many different formats including PDF.
  
   It is available in 115 languages.
   
   [Blog](https://blog.documentfoundation.org/)  I  [Forum](https://ask.libreoffice.org/en/questions/)  I  [Wiki](https://wiki.documentfoundation.org/Main_Page)  I  [Documentation](https://wiki.documentfoundation.org/Documentation/Publications)  I  [IRC](https://irc.documentfoundation.org/)  I  [Planet](https://planet.documentfoundation.org/)  I  [Mailing lists](https://www.libreoffice.org/get-help/mailing-lists/)  I  [FAQ](https://www.libreoffice.org/get-help/frequently-asked-questions/)
  

