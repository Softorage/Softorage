---
title: "Internet Explorer"

description: "Internet Explorer is a series of graphical web browsers developed by Microsoft"

image: "https://cdn.statically.io/img/img.softorage.com/software-logo/internet-explorer.png?h=64"

status: ["Discontinued"]

website: "https://www.microsoft.com/ie"

get_it:
  - from: "Authentic"
    url: "https://support.microsoft.com/en-us/help/17621/internet-explorer-downloads"
  - from: "Microsoft Download Center | Authentic"
    url: "https://www.microsoft.com/en-in/download/internet-explorer.aspx"
    platform:
      - name: "Windows"
        hardware: ["dskp"]
        official: true
        portable: false
  - from: "FileHorse (IE 8/9/11)"
    url: "https://www.filehorse.com/download-internet-explorer/"
    platform:
      - name: "Windows"
        hardware: ["dskp"]
        arch: ["x32", "x64"]
        official: true
        portable: false
  - from: "Softonic (IE 7)"
    url: "https://internet-explorer-7.en.softonic.com/"
    platform:
      - name: "Windows"
        hardware: ["dskp"]
        official: true
        portable: false
  - from: "Softonic (IE 8)"
    url: "https://internet-explorer-8.en.softonic.com/"
    platform:
      - name: "Windows"
        hardware: ["dskp"]
        official: true
        portable: false
  - from: "Softonic (IE 9)"
    url: "https://internet-explorer-9.en.softonic.com/"
    platform:
      - name: "Windows"
        hardware: ["dskp"]
        official: true
        portable: false
  - from: "Softonic (IE 10)"
    url: "https://internet-explorer-10.en.softonic.com/"
    platform:
      - name: "Windows"
        hardware: ["dskp"]
        official: true
        portable: false
  - from: "Softonic (IE 11)"
    url: "https://internet-explorer-11-windows-7.en.softonic.com/"
    platform:
      - name: "Windows"
        hardware: ["dskp"]
        official: true
        portable: false
  - from: "FileHippo (IE 11)"
    url: "https://filehippo.com/download_internet_explorer_windows_7/"
    platform:
      - name: "Windows"
        hardware: ["dskp"]
        official: true
        portable: false
  - from: "Softonic"
    url: "https://internet-explorer-for-mac.en.softonic.com/mac"
    platform:
      - name: "macOS"
        hardware: ["dskp"]
        official: true
        portable: false

sysreq:
  general:
    -
      min: "Computer/processor: 1 gigahertz (GHz) 32-bit (x86) or 64-bit (x64)"
    -
      min: "Operating system: Windows 10 (32-bit or 64-bit); Windows 8.1 Update (32-bit or 64-bit); Windows 7 with SP1 (32-bit or 64-bit); Windows Server 2012 R2; Windows Server 2008 R2 with SP1 (64-bit only)"
    -
      min: "Memory: Windows 10 (32-bit)-1 GB; Windows 10 (64-bit)-2 GB; Windows 8.1 Update (32-bit)-1 GB; Windows 8.1 Update (64-bit)-2 GB; Windows 7 with SP1 (32-bit or 64-bit)-512 MB; Windows Server 2012 R2-512 MB; Windows Server 2008 R2 with SP1 (64-bit only)-512 MB"
    -
      min: "Hard drive space: Windows 10 (32-bit)-16 GB; Windows 10 (64-bit)-20 GB; Windows 8.1 Update (32-bit)-16 GB; Windows 8.1 Update (64-bit)-20 GB; Windows 7 with SP1 (32-bit)-70 MB; Windows 7 with SP1 (64-bit)-120 MB; Windows Server 2012 R2-32 GB; Windows Server 2008 R2 with SP1 (64-bit only)-200 MB"
    -
      min: "Drive: CD-ROM drive (if installing from a CD-ROM)"
    -
      min: "Display: Super VGA (800 x 600) or higher-resolution monitor with 256 colors"
    -
      min: "Peripherals: Internet connection and a compatible pointing device"

developer: ["Microsoft Corporation"]

initial_release: ["16 August 1995", "23 April 1996"]

written_in: ["C++ (Triedent, Chankra)", "JavaScript (Chakra)"]

platform:
  - dskp:
      - name: "Windows"
        official: true
        arch: ["x32", "x64"]
      - name: "macOS"
        official: true

categories: ["Web Browser"]

license: ["Proprietary"]

social:
  - name: "Wikipedia"
    url: "https://en.wikipedia.org/wiki/Internet_Explorer"
  - name: "Wikipedia"
    url: "https://en.wikipedia.org/wiki/Internet_Explorer_for_Mac_OS_X"

source:
  overview: ["https://www.bbc.co.uk/news/10095730", "https://web.archive.org/web/20160716113141/https://developer.microsoft.com/en-us/microsoft-edge/platform/faq/#will-internet-explorer-11-continue-to-re", "https://www.techradar.com/news/internet/microsoft-is-going-to-kill-internet-explorer-1288578"]
  developer: ["https://en.wikipedia.org/w/index.php?title=Internet_Explorer&oldid=936042677"]
  initial_release: ["https://www.cnet.com/news/at-15-microsofts-internet-explorer-at-a-crossroads/", "https://en.wikipedia.org/w/index.php?title=Internet_Explorer&oldid=936042677", "https://www.webdevelopersnotes.com/internet-explorer-for-mac-released"]
  written_in: ["https://en.wikipedia.org/w/index.php?title=Internet_Explorer&action=info", "https://en.wikipedia.org/w/index.php?title=Trident_(software)&oldid=915043098", "https://github.com/Microsoft/ChakraCore"]
  platform:
    - dskp: ["https://news.microsoft.com/2000/05/15/microsoft-unveils-internet-explorer-for-mac-os-x/", "https://support.microsoft.com/en-in/help/17621/internet-explorer-downloads", "https://www.webdevelopersnotes.com/internet-explorer-for-mac-released"]
  sysreq:
    general: ["https://docs.microsoft.com/en-us/internet-explorer/ie11-deploy-guide/system-requirements-and-language-support-for-ie11", "https://support.microsoft.com/en-us/help/11531/internet-explorer-system-requirements"]
  license: ["https://en.wikipedia.org/w/index.php?title=Internet_Explorer&oldid=936042677"]
  rating:
    - name: "FileHorse"
      type: "user"
      url: "https://www.filehorse.com/download-internet-explorer-vista/"
      remarks: "IE 9 x32 bit Windows"
    - name: "FileHorse"
      type: "user"
      url: "https://www.filehorse.com/download-internet-explorer-vista/"
      remarks: "IE 9 x64 bit Windows"
    - name: "FileHorse"
      type: "user"
      url: "https://www.filehorse.com/download-internet-explorer-windows7/"
      remarks: "IE 11 x32 bit Windows"
    - name: "FileHorse"
      type: "user"
      url: "https://www.filehorse.com/download-internet-explorer-windows7-64/"
      remarks: "IE 11 x64 bit Windows"
    - name: "FileHorse"
      type: "user"
      url: "https://www.filehorse.com/download-internet-explorer-xp/"
      remarks: "IE 8 Windows"
    - name: "Softonic"
      type: "user"
      url: "https://internet-explorer-7.en.softonic.com/"
      remarks: "IE 7 Windows"
    - name: "Softonic"
      type: "user"
      url: "https://internet-explorer-8.en.softonic.com/"
      remarks: "IE 8 Windows"
    - name: "Softonic"
      type: "user"
      url: "https://internet-explorer-9.en.softonic.com/"
      remarks: "IE 9 Windows"
    - name: "Softonic"
      type: "user"
      url: "https://internet-explorer-10.en.softonic.com/"
      remarks: "IE 10 Windows"
    - name: "Softonic"
      type: "user"
      url: "https://internet-explorer-11-windows-7.en.softonic.com/"
      remarks: "IE 11 Windows"
    - name: "FileHippo"
      type: "user"
      url: "https://filehippo.com/download_internet_explorer_windows_7/"
      remarks: "IE 11 Windows"
    - name: "Softonic"
      type: "user"
      url: "https://internet-explorer-for-mac.en.softonic.com/mac"
      remarks: "macOS"
    - name: "Cloudwards"
      type: "expert"
      url: "https://www.cloudwards.net/internet-explorer-review/"
    - name: "PCMag"
      type: "expert"
      url: "https://in.pcmag.com/internet/67188/microsoft-internet-explorer-11-for-windows-7"
      remarks: "IE 11 Windows"
    - name: "TopTenReviews"
      type: "expert"
      url: "https://www.toptenreviews.com/internet-browser-software-internet-explorer-review"
    - name: "G2CROWD"
      type: "user"
      url: "https://www.g2.com/products/internet-explorer/reviews"
  status: ["https://web.archive.org/web/20160716113141/https://developer.microsoft.com/en-us/microsoft-edge/platform/faq/#will-internet-explorer-11-continue-to-re"]

rating:
  - name: "FileHorse"
    rate: [6.08, 10]
    num: 74
    remarks: "IE 9 x32 bit Windows"
  - name: "FileHorse"
    rate: [6.06, 10]
    num: 70
    remarks: "IE 9 x64 bit Windows"
  - name: "FileHorse"
    rate: [7.6, 10]
    num: 305
    remarks: "IE 11 x32 bit Windows"
  - name: "FileHorse"
    rate: [6.84, 10]
    num: 120
    remarks: "IE 11 x64 bit Windows"
  - name: "FileHorse"
    rate: [6.22, 10]
    num: 116
    remarks: "IE 8 Windows"
  - name: "Softonic"
    rate: [7, 10]
    num: 4451
    remarks: "IE 7 Windows"
  - name: "Softonic"
    rate: [7, 10]
    num: 6305
    remarks: "IE 8 Windows"
  - name: "Softonic"
    rate: [7, 10]
    num: 3876
    remarks: "IE 9 Windows"
  - name: "Softonic"
    rate: [6, 10]
    num: 3005
    remarks: "IE 10 Windows"
  - name: "Softonic"
    rate: [8, 10]
    num: 1904
    remarks: "IE 11 Windows"
  - name: "FileHippo"
    rate: [8, 10]
    num: 211
    remarks: "IE 11 Windows"
  - name: "Softonic"
    rate: [4, 10]
    num: 2069
    remarks: "macOS"
  - name: "Cloudwards"
    rate: [1.5, 5]
  - name: "PCMag"
    rate: [4, 5]
    remarks: "IE 11 Windows"
  - name: "TopTenReviews"
    rate: [4.4, 5]
  - name: "G2CROWD"
    rate: [2.4, 5]
    num: 160
---
  Internet Explorer(since v10) (formerly Microsoft Internet Explorer(v6 & earlier) and Windows Internet Explorer(v7, 8, 9), commonly abbreviated IE or MSIE) is a series of graphical [web browsers](/categories/web-browser/) developed by Microsoft and included in the Microsoft Windows line of operating systems. Internet Explorer was once the most widely used [web browser](/categories/web-browser/), attaining a peak of about 95% usage share by 2003. It is based on Trident layout engine and Chankra JavaScript engine. The browser is discontinued, but still maintained.
  
  On March 17, 2015, Microsoft announced that [Microsoft Edge](/software/microsoft-edge/) would replace Internet Explorer as the default browser on its Windows 10 devices.
  
  [Forum](https://social.technet.microsoft.com/Forums/ie/)  I  [Documentation](https://docs.microsoft.com/en-us/internet-explorer/)  I  [Lifecycle FAQ](https://support.microsoft.com/en-in/help/17454/lifecycle-faq-internet-explorer)  I  [FAQ for IT Pros](https://docs.microsoft.com/en-us/internet-explorer/ie11-faq/faq-for-it-pros-ie11)


