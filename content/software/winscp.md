---
title: "WinSCP"

description: "WinSCP is a SFTP, FTP, WebDAV, Amazon S3 and SCP client for Microsoft Windows"

image: "https://cdn.statically.io/img/img.softorage.com/software-logo/winscp.png?h=64"

status: ["Active"]

website: "https://winscp.net/"

get_it:
  - from: "Authentic"
    url: "https://winscp.net/eng/downloads.php"
  - from: "Uptodown"
    url: "https://winscp.en.uptodown.com/windows"
    platform:
      - name: "Windows"
        hardware: ["dskp"]
        official: true
        portable: false
  - from: "Softpedia"
    url: "https://www.softpedia.com/get/Internet/FTP-Clients/WinSCP.shtml"
    platform:
      - name: "Windows"
        hardware: ["dskp"]
        official: true
        portable: false
  - from: "Softpedia"
    url: "https://www.softpedia.com/get/PORTABLE-SOFTWARE/Internet/FTP-Clients/Portable-WinSCP.shtml"
    platform:
      - name: "Windows"
        hardware: ["dskp"]
        official: true
        portable: true
  - from: "FileHorse"
    url: "https://www.filehorse.com/download-winscp/"
    platform:
      - name: "Windows"
        hardware: ["dskp"]
        official: true
        portable: false
  - from: "FileHorse"
    url: "https://www.filehorse.com/download-winscp-portable/"
    platform:
      - name: "Windows"
        hardware: ["dskp"]
        official: true
        portable: true
  - from: "Softonic"
    url: "https://winscp.en.softonic.com/"
    platform:
      - name: "Windows"
        hardware: ["dskp"]
        official: true
        portable: false
  - from: "Softonic"
    url: "https://winscp-portable.en.softonic.com/"
    platform:
      - name: "Windows"
        hardware: ["dskp"]
        official: true
        portable: true
  - from: "FileHippo"
    url: "https://filehippo.com/download_winscp/"
    platform:
      - name: "Windows"
        hardware: ["dskp"]
        official: true
        portable: false
  - from: "TechSpot"
    url: "https://www.techspot.com/downloads/1487-winscp.html"
    platform:
      - name: "Windows"
        hardware: ["dskp"]
        official: true
        portable: false
      - name: "Windows"
        hardware: ["dskp"]
        official: true
        portable: true
  - from: "CNET"
    url: "https://download.cnet.com/WinSCP/3000-2160_4-10400769.html"
    platform:
      - name: "Windows"
        hardware: ["dskp"]
        official: true
        portable: false

sysreq:
  general:
    -
      min: "OS: Microsoft Windows XP SP2/Windows Server 2003 SP11 and newer, up to Windows 10/Windows Server 2019\n\nThe installer does not run on Windows XP/2003 anymore. WinSCP application itself still works. Use Portable executables download"
    -
      min: "Hard disk space: 35-70 MB"
    -
      min: "WinSCP is available as a 32 bit version only, which also runs on 64 bit architectures."

developer: ["Martin Přikryl"]

initial_release: ["30 September 2000"]

repository: ["https://github.com/winscp/winscp"]

written_in: ["C++", "Pascal"]

platform:
  - dskp:
      - name: "Windows"
        official: true

categories: ["FTP Client"]

license: ["GPL v3"]

social:
  - name: "Facebook"
    url: "https://www.facebook.com/winscp/"
  - name: "Twitter"
    url: "https://twitter.com/winscpnet"
  - name: "LinkedIn"
    url: "https://www.linkedin.com/company/winscp/"
  - name: "Wikipedia"
    url: "https://en.wikipedia.org/wiki/WinSCP"

source:
  overview: ["https://winscp.net/eng/docs/feature_index", "https://winscp.net/eng/index.php", "https://winscp.net/eng/docs/introduction"]
  developer: ["https://winscp.net/eng/docs/license"]
  initial_release: ["https://winscp.net/eng/docs/history_old#1.0"]
  written_in: ["https://github.com/winscp/winscp"]
  platform:
    - dskp: ["https://winscp.net/eng/downloads.php"]
  sysreq:
    general: ["https://winscp.net/eng/docs/requirements#client"]
  license: ["https://github.com/winscp/winscp/blob/master/license.txt", "https://winscp.net/eng/docs/license"]
  rating:
    - name: "Softpedia"
      type: "user"
      url: "https://www.softpedia.com/get/Internet/FTP-Clients/WinSCP.shtml"
    - name: "Softpedia"
      type: "user"
      url: "https://www.softpedia.com/get/PORTABLE-SOFTWARE/Internet/FTP-Clients/Portable-WinSCP.shtml"
      remarks: "Portable"
    - name: "FileHorse"
      type: "user"
      url: "https://www.filehorse.com/download-winscp/"
    - name: "FileHorse"
      type: "user"
      url: "https://www.filehorse.com/download-winscp-portable/"
      remarks: "Portable"
    - name: "Softonic"
      type: "user"
      url: "https://winscp.en.softonic.com/"
    - name: "Softonic"
      type: "user"
      url: "https://winscp-portable.en.softonic.com/"
      remarks: "Portable"
    - name: "FileHippo"
      type: "user"
      url: "https://filehippo.com/download_winscp/"
    - name: "TechSpot"
      type: "user"
      url: "https://www.techspot.com/downloads/1487-winscp.html"
      remarks: "Un/portable"
    - name: "CNET"
      type: "user"
      url: "https://download.cnet.com/WinSCP/3000-2160_4-10400769.html"
    - name: "CNET"
      type: "expert"
      url: "https://download.cnet.com/WinSCP/3000-2160_4-10400769.html"
    - name: "G2CROWD"
      type: "user"
      url: "https://www.g2.com/products/winscp/reviews"
    - name: "SourceForge"
      type: "user"
      url: "https://sourceforge.net/projects/winscp/reviews/"
  status: ["https://winscp.net/eng/news.php", "https://github.com/winscp/winscp/graphs/contributors", "https://winscp.net/eng/docs/history"]

rating:
  - name: "Softpedia"
    rate: [4.4, 5]
    num: 174
  - name: "Softpedia"
    rate: [4.4, 5]
    num: 75
    remarks: "Portable"
  - name: "FileHorse"
    rate: [7, 10]
    num: 45
  - name: "FileHorse"
    rate: [9.3, 10]
    num: 3
    remarks: "Portable"
  - name: "Softonic"
    rate: [8, 10]
    num: 230
  - name: "Softonic"
    rate: [9, 10]
    num: 16
    remarks: "Portable"
  - name: "FileHippo"
    rate: [7, 10]
    num: 279
  - name: "TechSpot"
    rate: [4.5, 5]
    num: 88
    remarks: "Un/portable"
  - name: "CNET"
    rate: [4, 5]
    num: 62
  - name: "CNET"
    rate: [3, 5]
  - name: "G2CROWD"
    rate: [4.6, 5]
    num: 120
  - name: "SourceForge"
    rate: [4.8, 5]
    num: 192

---
  WinSCP is a free and open-source SFTP, [FTP](/categories/ftp-client/), WebDAV, Amazon S3 and SCP client for Microsoft Windows. Its main function is file transfer between a local and a remote computer. It uses Secure Shell (SSH) and supports the SCP protocol in addition to SFTP. It also offers scripting and basic file manager functionality.
  
  [News](https://winscp.net/eng/news.php)  I  [Forum](https://winscp.net/forum/)  I  [Documentation](https://winscp.net/eng/docs/start)  I  [FAQ](https://winscp.net/eng/docs/faq)