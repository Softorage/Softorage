---
title: "Google Chrome"

description: "A cross-platform web browser developed by Google"

image: "https://upload.wikimedia.org/wikipedia/commons/a/a5/Google_Chrome_icon_%28September_2014%29.svg"

status: ["Active"]

website: "https://www.google.com/chrome/"

get_it:
  - from: "Authentic"
    url: "https://www.google.com/chrome/"
  - from: "Softonic"
    platform:
      - name: "Windows"
        hardware: ["dskp"]
        type: "official"
    url: "https://chrome.en.softonic.com/"
  - from: "Uptodown"
    platform:
      - name: "Windows"
        hardware: ["dskp"]
        type: "official"
    url: "https://google-chrome.en.uptodown.com/windows"
  - from: "Softonic"
    platform:
      - name: "Windows"
        hardware: ["dskp"]
        arch: ["x64"]
        type: "official"
    url: "https://chrome-64-bit.en.softonic.com/"
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
        type: "official"
    url: "https://www.techspot.com/downloads/4718-google-chrome-for-windows.html"
  - from: "Softpedia"
    platform:
      - name: "Windows"
        hardware: ["dskp"]
        arch: ["x32"]
        type: "official"
    url: "https://www.softpedia.com/get/Internet/Browsers/Google-Chrome.shtml"
  - from: "FileHorse"
    platform:
      - name: "Windows"
        hardware: ["dskp"]
        arch: ["x64"]
        type: "official"
    url: "https://www.filehorse.com/download-google-chrome-64/"
  - from: "FileHippo"
    platform:
      - name: "Windows"
        hardware: ["dskp"]
        type: "official"
    url: "https://filehippo.com/download_google_chrome/"
  - from: "FileHippo"
    platform:
      - name: "macOS"
        hardware: ["dskp"]
        type: "official"
    url: "https://filehippo.com/mac/download_google_chrome_for_mac/"
  - from: "Softonic"
    platform:
      - name: "macOS"
        hardware: ["dskp"]
        type: "official"
    url: "https://chrome.en.softonic.com/mac"
  - from: "Softonic"
    platform:
      - name: "Android"
        hardware: ["smptb"]
        type: "official"
    url: "https://chrome.en.softonic.com/android"
  - from: "Google Play Store"
    platform:
      - name: "Android"
        hardware: ["smptb"]
        type: "official"
    url: "https://play.google.com/store/apps/details?id=com.android.chrome"
  - from: "Softonic"
    platform:
      - name: "iOS"
        hardware: ["smptb"]
        type: "official"
    url: "https://chrome.en.softonic.com/iphone"
  - from: "Apple App Store"
    platform:
      - name: "iOS"
        hardware: ["smptb"]
        type: "official"
    url: "https://apps.apple.com/us/app/google-chrome/id535886823"

sysreq:
  -
    min: "Windows: Windows 7, Windows 8, Windows 8.1, Windows 10 or later (Servers require Windows Server 2008 R2, Windows Server 2012, Windows Server 2012 R2, or Windows Server 2016) | macOS: OS X Yosemite 10.10 or later | Linux: 64-bit Ubuntu 14.04+, Debian 8+, openSUSE 13.3+, or Fedora Linux 24+"
  -
    min: "Windows: An Intel Pentium 4 processor or later that's SSE2 capable | Linux: An Intel Pentium 4 processor or later that's SSE2 capable"

developer: ["Google LLC"]

initial_release: ["11 December 2008", "02 September 2008"]

written_in: ["C", "C++", "Java (Android app only)", "JavaScript", "Python"]

platform:
  - dskp:
      - name: "Windows"
        type: "official"
        arch: ["x32", "x64"]
      - name: "Linux"
        type: "official"
        arch: ["x64"]
      - name: "macOS"
        type: "official"
  - smp:
      - name: "Android"
        type: "official"
      - name: "iOS"
        type: "official"
  - tab:
      - name: "Android"
        type: "official"
      - name: "iOS"
        type: "official"

categories: ["Web Browser"]

license: ["Proprietary", "Freemium"]

social:
  - name: "Facebook"
    url: "https://www.facebook.com/googlechrome/"
  - name: "Twitter"
    url: "https://twitter.com/googlechrome"
  - name: "YouTube"
    url: "https://www.youtube.com/user/googlechrome"
  - name: "Wikipedia"
    url: "https://en.wikipedia.org/wiki/Google_Chrome"

source:
  overview: ["https://searchmobilecomputing.techtarget.com/definition/Google-Chrome-browser"]
  developer: ["https://en.wikipedia.org/w/index.php?title=Google_Chrome&oldid=933899946", "https://www.google.com/chrome/"]
  initial_release: ["https://thisdayintechhistory.com/12/11/google-releases-chrome/", "https://dayintechhistory.com/dith/september-1-2008-google-chrome-accidentally-released/", "https://en.wikipedia.org/w/index.php?title=Google_Chrome&oldid=933899946", "https://blog.chromium.org/2008/09/welcome-to-chromium_02.html"]
  written_in: ["https://en.wikipedia.org/w/index.php?title=Google_Chrome&oldid=933899946", "http://www.ohloh.net/p/chrome/analyses/latest", "https://chromium.googlesource.com/chromium/src/+/master/styleguide/styleguide.md", "https://archive.is/20120530/http://www.lextrait.com/Vincent/implementations.html"]
  platform:
    - dskp: ["https://www.google.com/chrome/", "https://support.google.com/chrome/forum/AAAAP1KN0B0oufeqVTMll8"]
  sysreq: ["https://support.google.com/chrome/a/answer/7100626?hl=en"]
  license: ["https://www.google.com/intl/en/chrome/privacy/eula_text.html", "https://en.wikipedia.org/w/index.php?title=Google_Chrome&oldid=933899946"]
  rating:
    - name: "Softonic"
      type: "user"
      url: "https://chrome.en.softonic.com/"
      remarks: "x32 bit Windows"
    - name: "Uptodown"
      type: "user"
      url: "https://google-chrome.en.uptodown.com/windows"
      remarks: "Windows"
    - name: "Softonic"
      type: "user"
      url: "https://chrome-64-bit.en.softonic.com/"
      remarks: "x64 bit Windows"
    - name: "TechSpot"
      type: "user"
      url: "https://www.techspot.com/downloads/4718-google-chrome-for-windows.html"
    - name: "Softpedia"
      type: "user"
      url: "https://www.softpedia.com/get/Internet/Browsers/Google-Chrome.shtml"
      remarks: "x32 bit Windows"
    - name: "FileHorse"
      type: "user"
      url: "https://www.filehorse.com/download-google-chrome-64/"
      remarks: "x64 bit Windows"
    - name: "FileHippo"
      type: "user"
      url: "https://filehippo.com/download_google_chrome/"
      remarks: "Windows"
    - name: "FileHippo"
      type: "user"
      url: "https://filehippo.com/mac/download_google_chrome_for_mac/"
      remarks: "macOS"
    - name: "Softonic"
      type: "user"
      url: "https://chrome.en.softonic.com/mac"
      remarks: "macOS"
    - name: "Softonic"
      type: "user"
      url: "https://chrome.en.softonic.com/android"
      remarks: "Android"
    - name: "Google Play"
      type: "user"
      url: "https://play.google.com/store/apps/details?id=com.android.chrome"
      remarks: "Android"
    - name: "Softonic"
      type: "user"
      url: "https://chrome.en.softonic.com/iphone"
      remarks: "iOS"
    - name: "Apple App Store"
      type: "user"
      url: "https://apps.apple.com/us/app/google-chrome/id535886823"
      remarks: "iOS"
    - name: "CNET"
      type: "expert"
      url: "https://download.cnet.com/Google-Chrome/3000-2356_4-10881381.html"
      remarks: "Windows"
    - name: "CNET"
      type: "user"
      url: "https://download.cnet.com/Google-Chrome/3000-2356_4-10881381.html"
      remarks: "Windows"
    - name: "TopTenReviews"
      type: "expert"
      url: "https://www.toptenreviews.com/internet-browser-software-google-chrome-review"
    - name: "Cloudwards"
      type: "expert"
      url: "https://www.cloudwards.net/google-chrome-review/"
    - name: "PCMag"
      type: "expert"
      url: "https://www.pcmag.com/review/257704/google-chrome"
  status: ["https://blog.google/products/chrome/", "https://www.google.com/chrome/"]

rating:
  - name: "Softonic"
    rate: [8, 10]
    num: 54669
    remarks: "x32 bit Windows"
  - name: "Uptodown"
    rate: [4.2, 5]
    num: 56
    remarks: "Windows"
  - name: "Softonic"
    rate: [7, 10]
    num: 19185
    remarks: "x64 bit Windows"
  - name: "TechSpot"
    rate: [4.1, 5]
    num: 324
  - name: "Softpedia"
    rate: [3.8, 5]
    num: 10506
    remarks: "x32 bit Windows"
  - name: "FileHorse"
    rate: [8, 10]
    num: 970
    remarks: "x64 bit Windows"
  - name: "FileHippo"
    rate: [10, 10]
    num: 574
    remarks: "Windows"
  - name: "FileHippo"
    rate: [8, 10]
    num: 532
    remarks: "macOS"
  - name: "Softonic"
    rate: [8, 10]
    num: 3095
    remarks: "macOS"
  - name: "Softonic"
    rate: [8, 10]
    num: 4932
    remarks: "Android"
  - name: "Google Play"
    rate: [4.4, 5]
    num: 18457221
    remarks: "Android"
  - name: "Softonic"
    rate: [8, 10]
    num: 553
    remarks: "iOS"
  - name: "Apple App Store"
    rate: [3.7, 5]
    num: 63727
    remarks: "iOS"
  - name: "CNET"
    rate: [4.5, 5]
    remarks: "Windows"
  - name: "CNET"
    rate: [3.5, 5]
    num: 3097
    remarks: "Windows"
  - name: "TopTenReviews"
    rate: [4.4, 5]
  - name: "Cloudwards"
    rate: [4, 5]
  - name: "PCMag"
    rate: [4, 5]

note: |
  * Google Chrome was mistakenly released on 02 September 2008. Its first stable public version was released on 11 December 2008. See [Initial Release](#initial_release).
  
---
  The Google Chrome [Web browser](/categories/web-browser) is based on the open source [Chromium](/software/chromium-web-browser) project. Google released Chrome in 2008 and issues several updates a year. It is available for Windows, macOS, Linux, Android and iOS operating systems. The Google Chrome browser takes a sandboxing-based approach to Web security. Each open website runs as its own process, which helps prevent malicious code on one page from affecting others (or the computer operating system at large). The browser also supports Web standards such as HTML5 and cascading style sheets (CSS).
  
  [Blog](https://blog.google/products/chrome/) I [Help Community](https://support.google.com/chrome/community) I [Enterprise Community](https://support.google.com/chrome/a/threads) I [API Index](https://developer.chrome.com/apps/api_index) I [Chrome & Chrome Web Store FAQ](https://developer.chrome.com/webstore/faq) I [Mobile Chrome FAQ](https://developer.chrome.com/multidevice/faq) I [Extensions FAQ](https://developer.chrome.com/extensions/faq)
  