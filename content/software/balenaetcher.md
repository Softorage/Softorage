---
title: "balenaEtcher"

description: "A free and open-source utility used for writing image files such as .iso and .img files, as well as zipped folders onto storage media to create live SD cards and USB flash drives"

image: "https://upload.wikimedia.org/wikipedia/commons/2/2d/Etcher-icon.png"

status: ["Active"]

website: "https://www.balena.io/etcher/"

get_it:
  - from: "Authentic"
    url: "https://www.balena.io/etcher/#download"
  - from: "GitHub Releases | Authentic"
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
    url: "https://github.com/balena-io/etcher/releases"
  - from: "Softpedia (Portable)"
    platform:
      - name: "Windows"
        hardware: ["dskp"]
        arch: ["x32"]
        type: "official"
    url: "https://www.softpedia.com/get/PORTABLE-SOFTWARE/CD-DVD-Tools/Etcher-Portable.shtml"
  - from: "Softpedia"
    platform:
      - name: "Windows"
        hardware: ["dskp"]
        arch: ["x32", "x64"]
        type: "official"
    url: "https://www.softpedia.com/get/CD-DVD-Tools/Data-CD-DVD-Burning/Etcher.shtml"
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
    url: "https://www.techspot.com/downloads/6931-etcher.html"
  - from: "Softonic (1)"
    platform:
      - name: "Windows"
        hardware: ["dskp"]
        type: "official"
    url: "https://etcher.en.softonic.com/"
  - from: "Softonic (2)"
    platform:
      - name: "Windows"
        hardware: ["dskp"]
        type: "official"
    url: "https://balenaetcher.en.softonic.com/"
  - from: "FileHorse"
    platform:
      - name: "Windows"
        hardware: ["dskp"]
        arch: ["x32"]
        type: "official"
    url: "https://www.filehorse.com/download-etcher/"
  - from: "MacUpdate"
    platform:
      - name: "macOS"
        hardware: ["dskp"]
        type: "official"
    url: "https://www.macupdate.com/app/mac/61189/balenaetcher"
  - from: "CNET"
    platform:
      - name: "macOS"
        hardware: ["dskp"]
        type: "official"
    url: "https://download.cnet.com/Etcher/3000-18511_4-77521842.html"
  - from: "Softonic"
    platform:
      - name: "macOS"
        hardware: ["dskp"]
        type: "official"
    url: "https://etcher.en.softonic.com/mac"

sysreq:
  -
    min: "Linux (most distros);   macOS 10.10 (Yosemite) and later;   Microsoft Windows 7 and later;     See Notes for more info."

developer: ["Balena Inc."]

initial_release: ["12 May 2017"]

repository: ["https://github.com/balena-io/etcher"]

written_in: ["JavaScript", "HTML", "CSS", "C++"]

platform:
  - dskp:
      - name: "Windows"
        type: "official"
        arch: ["x32", "x64"]
      - name: "macOS"
        type: "official"
      - name: "Linux"
        type: "official"
        arch: ["x32", "x64"]

categories: ["Live USB Creator"]

license: ["Apache v2"]

social:
  - name: "Wikipedia"
    url: "https://en.wikipedia.org/wiki/Etcher_(software)"

source:
  overview: ["https://www.omgubuntu.co.uk/2017/05/how-to-install-etcher-on-ubuntu", "https://www.balena.io/blog/resin-io-changes-name-to-balena-releases-open-source-edition/", "https://github.com/balena-io/etcher#etcher"]
  developer: ["https://en.wikipedia.org/w/index.php?title=Etcher_(software)&oldid=932197773"]
  initial_release: ["https://github.com/balena-io/etcher/blob/master/CHANGELOG.md#v100---2017-05-12"]
  written_in: ["https://github.com/balena-io/etcher", "https://en.wikipedia.org/w/index.php?title=Etcher_(software)&oldid=932197773"]
  platform:
    - dskp: ["https://github.com/balena-io/etcher#supported-operating-systems", "https://www.balena.io/etcher/#download"]
  sysreq: ["https://github.com/balena-io/etcher#supported-operating-systems", "https://etcher.download/#System_Requirements_Needed_To_Run_Etcher"]
  license: ["https://github.com/balena-io/etcher/blob/master/LICENSE"]
  rating:
    - name: "Softpedia"
      type: "user"
      url: "https://www.softpedia.com/get/PORTABLE-SOFTWARE/CD-DVD-Tools/Etcher-Portable.shtml"
      remarks: "Portable Windows"
    - name: "Softpedia"
      type: "user"
      url: "https://www.softpedia.com/get/PORTABLE-SOFTWARE/CD-DVD-Tools/Etcher-Portable.shtml"
      remarks: "Windows"
    - name: "TechSpot"
      type: "user"
      url: "https://www.techspot.com/downloads/6931-etcher.html"
    - name: "Softonic"
      type: "user"
      url: "https://etcher.en.softonic.com/"
      remarks: "Windows"
    - name: "Softonic"
      type: "user"
      url: "https://balenaetcher.en.softonic.com/"
      remarks: "Windows"
    - name: "FileHorse"
      type: "user"
      url: "https://www.filehorse.com/download-etcher/"
      remarks: "x32 bit Windows"
    - name: "MacUpdate"
      type: "user"
      url: "https://www.macupdate.com/app/mac/61189/balenaetcher"
      remarks: "macOS"
    - name: "Softonic"
      type: "user"
      url: "https://etcher.en.softonic.com/mac"
      remarks: "macOS"
  status: ["https://www.balena.io/blog/tag/etcher/", "https://github.com/balena-io/etcher/commits/master"]

rating:
  - name: "Softpedia"
    rate: [3.7, 5]
    num: 9
    remarks: "Portable Windows"
  - name: "Softpedia"
    rate: [3.9, 5]
    num: 23
    remarks: "Windows"
  - name: "TechSpot"
    rate: [4.1, 5]
    num: 45
  - name: "Softonic"
    rate: [8, 10]
    num: 66
    remarks: "Windows"
  - name: "Softonic"
    rate: [7, 10]
    num: 30
    remarks: "Windows"
  - name: "FileHorse"
    rate: [6.9, 10]
    num: 28
    remarks: "x32 bit Windows"
  - name: "MacUpdate"
    rate: [5, 5]
    num: 3
    remarks: "macOS"
  - name: "Softonic"
    rate: [8, 10]
    num: 10
    remarks: "macOS"

note: |
  * Etcher will run on any platform officially supported by [Electron](https://electronjs.org/). Read more in their [documentation](https://electronjs.org/docs/tutorial/support#supported-platforms).
---
  Etcher is a OS [image flasher](/categories/live-usb-creator/) built with web technologies, a utility used for writing image files such as .iso and .img files, as well as zipped folders onto storage media to create live SD cards and USB flash drives. It protects from accidentally writing to hard-drives and ensures every byte of data was written correctly. It can flash directly Raspberry Pi devices that support the usbboot protocol.
  
  Etcher was developed using the Electron framework. balenaEtcher was originally called Etcher, but its name was changed on October 29, 2018 when Resin.io changed its name to Balena.
  
  [Blog](https://www.balena.io/blog/tag/etcher/) I [Support](https://github.com/balena-io/etcher/blob/master/SUPPORT.md) I [Forum](https://forums.balena.io/c/etcher) I [Documentation](https://github.com/balena-io/etcher/blob/master/docs/USER-DOCUMENTATION.md) I [FAQ](https://www.balena.io/etcher/#faq) I [Mailing list](https://us3.list-manage.com/subscribe?u=87871f17defba2d203db77a92&id=1fc3119ed2)