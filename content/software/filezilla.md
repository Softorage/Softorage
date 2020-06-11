---
title: "FileZilla"

description: "FileZilla is a cross-platform FTP application, consisting of FileZilla Client and FileZilla Server"

image: "https://cdn.statically.io/img/img.softorage.com/software-logo/filezilla.png?h=64"

status: ["Active"]

website: "https://filezilla-project.org/"

get_it:
  - from: "FileZilla Client | Authentic"
    url: "https://filezilla-project.org/download.php?show_all=1"
  - from: "FileZilla Server | Authentic"
    url: "https://filezilla-project.org/download.php?show_all=1&type=server"
  - from: "FossHub"
    url: "https://www.fosshub.com/FileZilla.html"
    platform:
      - name: "Windows"
        hardware: ["dskp"]
        arch: ["x32", "x64"]
        official: true
        portable: true
      - name: "macOS"
        hardware: ["dskp"]
        official: true
        portable: false
      - name: "Linux"
        hardware: ["dskp"]
        arch: ["x32", "x64"]
        official: true
        portable: false
  - from: "CNET (Client)"
    url: "https://download.cnet.com/FileZilla/3000-2160_4-10308966.html"
    platform:
      - name: "Windows"
        hardware: ["dskp"]
        official: true
        portable: false
  - from: "CNET (Server)"
    url: "https://download.cnet.com/FileZilla-Server/3000-2160_4-75123212.html"
    platform:
      - name: "Windows"
        hardware: ["dskp"]
        official: true
        portable: false
  - from: "Softonic"
    url: "https://filezilla.en.softonic.com/"
    platform:
      - name: "Windows"
        hardware: ["dskp"]
        official: true
        portable: false
  - from: "TechSpot (Client/Server)"
    url: "https://www.techspot.com/downloads/612-filezilla.html"
    platform:
      - name: "Windows"
        hardware: ["dskp"]
        arch: ["x32", "x64"]
        official: true
        portable: true
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
  - from: "FileHippo"
    url: "https://filehippo.com/download_filezilla/"
    platform:
      - name: "Windows"
        hardware: ["dskp"]
        arch: ["x32"]
        official: true
        portable: false
  - from: "FileHippo"
    url: "https://filehippo.com/download_filezilla_64/"
    platform:
      - name: "Windows"
        hardware: ["dskp"]
        arch: ["x64"]
        official: true
        portable: false
  - from: "Softonic"
    url: "https://filezilla.en.softonic.com/mac"
    platform:
      - name: "macOS"
        hardware: ["dskp"]
        official: true
        portable: false
  - from: "Softonic (Server)"
    url: "https://filezilla-server.en.softonic.com/"
    platform:
      - name: "Windows"
        hardware: ["dskp"]
        official: true
        portable: false
  - from: "Softonic"
    url: "https://filezilla-portable.en.softonic.com/"
    platform:
      - name: "Windows"
        hardware: ["dskp"]
        official: true
        portable: true
  - from: "Download Archives | Authentic"
    url: "https://download.filezilla-project.org/"

developer: ["Tim Kosse", "Community"]

initial_release: ["22 June 2001"]

repository: ["https://svn.filezilla-project.org/filezilla/FileZilla3/trunk/", "https://svn.filezilla-project.org/svn/FileZilla3/trunk/"]

platform:
  - dskp:
      - name: "Windows"
        official: true
        arch: ["x32", "x64"]
      - name: "macOS"
        official: true
      - name: "Linux"
        official: true
        arch: ["x32", "x64"]

categories: ["FTP Client", "FTP Server"]

license: ["GPL v2+"]

social:
  - name: "Wikipedia"
    url: "https://en.wikipedia.org/wiki/FileZilla"

source:
  overview: ["https://filezilla-project.org/"]
  developer: ["https://medium.com/@jaelee0409/filezilla-tutorial-505ccb10817d", "https://web.archive.org/web/20091001110046/http://filezilla.sourceforge.net:80/documentation/history.htm"]
  initial_release: ["https://medium.com/@jaelee0409/filezilla-tutorial-505ccb10817d"]
  platform:
    - dskp: ["https://filezilla-project.org/download.php?show_all=1"]
  license: ["https://filezilla-project.org/license.php"]
  rating:
    - name: "FossHub"
      type: "user"
      url: "https://www.fosshub.com/FileZilla.html"
      remarks: "Client"
    - name: "CNET"
      type: "user"
      url: "https://download.cnet.com/FileZilla/3000-2160_4-10308966.html"
      remarks: "Client - Windows"
    - name: "CNET"
      type: "expert"
      url: "https://download.cnet.com/FileZilla/3000-2160_4-10308966.html"
      remarks: "Client - Windows"
    - name: "Softonic"
      type: "user"
      url: "https://filezilla.en.softonic.com/"
      remarks: "Client - Windows"
    - name: "Softonic"
      type: "user"
      url: "https://filezilla-server.en.softonic.com/"
      remarks: "Server - Windows"
    - name: "Softonic"
      type: "user"
      url: "https://filezilla-portable.en.softonic.com/"
      remarks: "Portable - Windows"
    - name: "TechSpot"
      type: "user"
      url: "https://www.techspot.com/downloads/612-filezilla.html"
    - name: "FileHippo"
      type: "user"
      url: "https://filehippo.com/download_filezilla/"
      remarks: "x32 Client - Windows"
    - name: "FileHippo"
      type: "user"
      url: "https://filehippo.com/download_filezilla_64/"
      remarks: "x64 Client - Windows"
    - name: "SourceForge"
      type: "user"
      url: "https://sourceforge.net/projects/filezilla/reviews/"
    - name: "TrustRadius"
      type: "user"
      url: "https://www.trustradius.com/products/filezilla/reviews"
    - name: "G2CROWD"
      type: "user"
      url: "https://www.g2.com/products/filezilla/reviews"
  status: ["https://filezilla-project.org/changelog.php", "https://filezilla-project.org/versions.php"]

rating:
  - name: "FossHub"
    rate: [5, 5]
    num: 31
    remarks: "Client"
  - name: "CNET"
    rate: [4, 5]
    num: 551
    remarks: "Client - Windows"
  - name: "CNET"
    rate: [4.5, 5]
    remarks: "Client - Windows"
  - name: "Softonic"
    rate: [8, 10]
    num: 1470
    remarks: "Client - Windows"
  - name: "Softonic"
    rate: [8, 10]
    num: 110
    remarks: "Server - Windows"
  - name: "Softonic"
    rate: [7, 10]
    num: 110
    remarks: "Portable - Windows"
  - name: "TechSpot"
    rate: [4.7, 5]
    num: 35
  - name: "FileHippo"
    rate: [9, 10]
    num: 798
    remarks: "x32 Client - Windows"
  - name: "FileHippo"
    rate: [7.6, 10]
    num: 200
    remarks: "x64 Client - Windows"
  - name: "SourceForge"
    rate: [4.3, 5]
    num: 1110
  - name: "TrustRadius"
    rate: [9, 10]
    num: 69
  - name: "G2CROWD"
    rate: [4.5, 5]
    num: 580

---
  FileZilla is a free and open source software, cross-platform [FTP application](/categories/), consisting of FileZilla Client and FileZilla Server. Client supports FTP, FTP over TLS (FTPS) and SFTP. FileZilla Server is an FTP and FTPS Server.
  
  [Forum](https://forum.filezilla-project.org/)  I  [Wiki](https://wiki.filezilla-project.org/Main_Page)  I  [Documentation](https://wiki.filezilla-project.org/Documentation)  I  [FAQ](https://filezilla-project.org/faq.php)  I  [IRC](https://webchat.freenode.net/?channels=filezilla)
