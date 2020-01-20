---
title: "Rufus"

description: "A free and open-source portable application for Microsoft Windows that can be used to format and create bootable USB flash drives or Live USBs"

image: "https://upload.wikimedia.org/wikipedia/commons/d/de/Rufus-logo.png"

status: ["Active"]

website: "https://rufus.ie/"

get_it:
  - from: "Authentic"
    url: "https://rufus.ie/downloads/"
  - from: "GitHub Releases | Authentic"
    platform:
      - name: "Windows"
        hardware: ["dskp"]
        type: "official"
    url: "https://github.com/pbatard/rufus/releases"
  - from: "FossHub"
    platform:
      - name: "Windows"
        hardware: ["dskp"]
        type: "official"
    url: "https://www.fosshub.com/Rufus.html"
  - from: "Malavida"
    platform:
      - name: "Windows"
        hardware: ["dskp"]
        type: "official"
    url: "https://www.malavida.com/en/soft/rufus-usb/"
  - from: "Softonic"
    platform:
      - name: "Windows"
        hardware: ["dskp"]
        type: "official"
    url: "https://rufus.en.softonic.com/"
  - from: "Uptodown"
    platform:
      - name: "Windows"
        hardware: ["dskp"]
        type: "official"
    url: "https://rufus-usb.en.uptodown.com/windows"
  - from: "TechSpot"
    platform:
      - name: "Windows"
        hardware: ["dskp"]
        type: "official"
    url: "https://www.techspot.com/downloads/6062-rufus.html"
  - from: "FileHorse"
    platform:
      - name: "Windows"
        hardware: ["dskp"]
        type: "official"
    url: "https://www.filehorse.com/download-rufus/"
  - from: "FileHippo"
    platform:
      - name: "Windows"
        hardware: ["dskp"]
        type: "official"
    url: "https://filehippo.com/download_rufus/"

sysreq:
  -
    min: "Windows 7 or later, 32 or 64 bit doesn't matter."

developer: ["Pete Batard of Akeo Consulting"]

initial_release: ["12 December 2011"]

repository: ["https://github.com/pbatard/rufus"]

written_in: ["C", "C++", "C#"]

platform:
  - dskp:
      - name: "Windows"
        type: "official"
        arch: ["x32"]

categories: ["Live USB Creator"]

license: ["GPL v3"]

social:
  - name: "Wikipedia"
    url: "https://en.wikipedia.org/wiki/Rufus_(software)"

source:
  overview: ["https://www.intowindows.com/rufus-to-create-windows-to-go-usb-drive/", "https://www.askvg.com/rufus-yet-another-free-portable-tool-to-create-bootable-usb-drive-to-install-windows-and-linux/", "https://en.wikipedia.org/w/index.php?title=Rufus_(software)&oldid=934821546", "https://github.com/pbatard/rufus/wiki/FAQ"]
  developer: ["https://en.wikipedia.org/w/index.php?title=Rufus_(software)&oldid=934821546", "https://github.com/pbatard"]
  initial_release: ["https://github.com/pbatard/rufus/blob/master/ChangeLog.txt"]
  written_in: ["https://github.com/pbatard/rufus"]
  platform:
    - dskp: ["https://rufus.ie/"]
  sysreq: ["https://rufus.ie/"]
  license: ["https://github.com/pbatard/rufus/blob/master/LICENSE.txt"]
  rating:
    - name: "FossHub"
      type: "user"
      url: "https://www.fosshub.com/Rufus.html"
      remarks: "Windows"
    - name: "Malavida"
      type: "user"
      url: "https://www.malavida.com/en/soft/rufus-usb/"
      remarks: "Windows"
    - name: "Softonic"
      type: "user"
      url: "https://rufus.en.softonic.com/"
      remarks: "Windows"
    - name: "Uptodown"
      type: "user"
      url: "https://rufus-usb.en.uptodown.com/windows"
      remarks: "Windows"
    - name: "TechSpot"
      type: "user"
      url: "https://www.techspot.com/downloads/6062-rufus.html"
      remarks: "Windows"
    - name: "FileHorse"
      type: "user"
      url: "https://www.filehorse.com/download-rufus/"
      remarks: "Windows"
    - name: "FileHippo"
      type: "user"
      url: "https://filehippo.com/download_rufus/"
      remarks: "Windows"
    - name: "CNET"
      type: "expert"
      url: "https://download.cnet.com/Rufus-Portable/3000-2094_4-75843894.html"
      remarks: "Windows"
  status: ["https://github.com/pbatard/rufus/commits/master"]

rating:
  - name: "FossHub"
    rate: [5, 5]
    num: 24
    remarks: "Windows"
  - name: "Malavida"
    rate: [8, 10]
    num: 26
    remarks: "Windows"
  - name: "Softonic"
    rate: [8, 10]
    num: 294
    remarks: "Windows"
  - name: "Uptodown"
    rate: [4, 5]
    num: 22
    remarks: "Windows"
  - name: "TechSpot"
    rate: [4.6, 5]
    num: 2436
    remarks: "Windows"
  - name: "FileHorse"
    rate: [8.3, 10]
    num: 529
    remarks: "Windows"
  - name: "FileHippo"
    rate: [7, 10]
    num: 363
    remarks: "Windows"
  - name: "CNET"
    rate: [4, 5]
    remarks: "Windows"

---
  Rufus is a free and open-source portable application developed by Pete Batard of Akeo Consulting for Microsoft Windows that can be used to format and create bootable USB flash drives or [Live USBs](/categories/live-usb-creator/).
  
  Rufus supports a variety of bootable .iso files, including various Linux distributions and Windows installation .iso files, as well as raw disk image files (including compressed ones). If needed, it can install a bootloader such as SYSLINUX or GRUB onto the flash drive to render it bootable. It also allows the installation of MS-DOS or FreeDOS onto a flash drive as well as the creation of Windows To Go bootable media. It supports formatting flash drives as FAT, FAT32, NTFS, exFAT, UDF or ReFS filesystems. Rufus can compute the MD5, SHA-1 and SHA-256 hashes of the currently selected image.
  
  [FAQ](https://github.com/pbatard/rufus/wiki/FAQ) 