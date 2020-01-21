---
title: "Avast Antivirus"

description: "A family of internet security applications developed by Avast"

image: "https://upload.wikimedia.org/wikipedia/commons/4/4e/Avast_Software_white_logo.png"

status: ["Active"]

website: "https://www.avast.com/"

get_it:
  - from: "Authentic"
    url: "https://www.avast.com/store"
  - from: "TechSpot"
    platform:
      - name: "Windows"
        hardware: ["dskp"]
        type: "official"
      - name: "macOS"
        hardware: ["dskp"]
        type: "official"
      - name: "Android"
        hardware: ["smptb"]
        type: "official"
    url: "https://www.techspot.com/downloads/223-avast-home-edition.html"
  - from: "FileHippo"
    platform:
      - name: "Windows"
        hardware: ["dskp"]
        type: "official"
    url: "https://filehippo.com/download_avast_antivirus/"
  - from: "CNET"
    platform:
      - name: "Windows"
        hardware: ["dskp"]
        type: "official"
    url: "https://download.cnet.com/Avast-Free-Antivirus/3000-2239_4-10019223.html"
  - from: "Softonic"
    platform:
      - name: "Windows"
        hardware: ["dskp"]
        type: "official"
    url: "https://avast.en.softonic.com/"
  - from: "FileHorse"
    platform:
      - name: "Windows"
        hardware: ["dskp"]
        type: "official"
    url: "https://www.filehorse.com/download-avast-antivirus/"
  - from: "Softpedia"
    platform:
      - name: "Windows"
        hardware: ["dskp"]
        type: "official"
    url: "https://www.softpedia.com/get/Antivirus/Avast-Home-Edition.shtml"
  - from: "Google Play Store"
    platform:
      - name: "Android"
        hardware: ["smptb"]
        type: "official"
    url: "https://play.google.com/store/apps/details?id=com.avast.android.mobilesecurity"
  - from: "Softonic"
    platform:
      - name: "Android"
        hardware: ["smptb"]
        type: "official"
    url: "https://avast.en.softonic.com/android"
  - from: "MacUpdate"
    platform:
      - name: "macOS"
        hardware: ["dskp"]
        type: "official"
    url: "https://www.macupdate.com/app/mac/26644/avast"
  - from: "FileHorse"
    platform:
      - name: "macOS"
        hardware: ["dskp"]
        type: "official"
    url: "https://mac.filehorse.com/download-avast-mac-security/"
  - from: "Softonic"
    platform:
      - name: "macOS"
        hardware: ["dskp"]
        type: "official"
    url: "https://avast-2015.en.softonic.com/mac"
  - from: "Apple App Store"
    platform:
      - name: "iOS"
        hardware: ["smptb"]
        type: "official"
    url: "https://apps.apple.com/us/app/avast-security-photo-vault/id1276551855"
  - from: "Apple App Store (Passwords)"
    platform:
      - name: "iOS"
        hardware: ["smptb"]
        type: "official"
    url: "https://apps.apple.com/app/avast-passwords-secure-password/id1114498254"
  - from: "Softonic (VPN)"
    platform:
      - name: "iOS"
        hardware: ["smptb"]
        type: "official"
    url: "https://avast.en.softonic.com/iphone"
  - from: "Apple App Store (VPN)"
    platform:
      - name: "iOS"
        hardware: ["smptb"]
        type: "official"
    url: "https://apps.apple.com/us/app/avast-secureline-vpn-proxy/id793096595"

sysreq:
  -
    min: "Windows 10 except Mobile and IoT Edition (32 or 64-bit); Windows 8/8.1 except RT and Starter Edition (32 or 64-bit); Windows 7 SP1 or higher, any Edition (32 or 64-bit)"
  -
    min: "Windows fully compatible PC with Intel Pentium 4 / AMD Athlon 64 processor or above (must support SSE2 instructions); ARM-based devices are not supported"
  -
    min: "1 GB RAM or above"
  -
    min: "2 GB free space on the hard disk"
  -
    min: "Internet connection to download, activate, and maintain program updates and antivirus database"
  -
    min: "Optimally standard screen resolution no less than 1024 x 768 pixels"

developer: ["Avast Software s.r.o."]

platform:
  - dskp:
      - name: "Windows"
        type: "official"
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

categories: ["Security Software", "Antivirus Software"]

license: ["Proprietary", "Freemium"]

social:
  - name: "Facebook"
    url: "https://www.facebook.com/avast"
  - name: "Twitter"
    url: "https://twitter.com/avast_antivirus"
  - name: "LinkedIn"
    url: "https://www.linkedin.com/company/avast"
  - name: "YouTube"
    url: "https://www.youtube.com/avast"
  - name: "Wikipedia"
    url: "https://en.wikipedia.org/wiki/Avast_Antivirus"

source:
  overview: ["https://www.avast.com/store", "https://www.avast.com"]
  developer: ["https://en.wikipedia.org/w/index.php?title=Etcher_(software)&oldid=932197773"]
  platform:
    - dskp: ["https://www.avast.com/store", "https://www.avast.com/free-antivirus-download", "https://www.avast.com/free-mac-security"]
    - smptb: ["https://www.avast.com/store", "https://www.avast.com/free-mobile-security", "https://www.avast.com/free-ios-security"]
  sysreq: ["https://support.avast.com/article/Antivirus-FAQ/#requirements"]
  license: ["https://en.wikipedia.org/w/index.php?title=Antivirus_software&oldid=934192056", "https://www.avast.com/en-in/eula"]
  rating:
    - name: "TechSpot"
      type: "user"
      url: "https://www.techspot.com/downloads/223-avast-home-edition.html"
    - name: "FileHippo"
      type: "user"
      url: "https://filehippo.com/download_avast_antivirus/"
      remarks: "Windows"
    - name: "CNET"
      type: "user"
      url: "https://download.cnet.com/Avast-Free-Antivirus/3000-2239_4-10019223.html"
      remarks: "Windows"
    - name: "CNET"
      type: "expert"
      url: "https://download.cnet.com/Avast-Free-Antivirus/3000-2239_4-10019223.html"
      remarks: "Windows"
    - name: "Softonic"
      type: "user"
      url: "https://avast.en.softonic.com/"
      remarks: "Windows"
    - name: "FileHorse"
      type: "user"
      url: "https://www.filehorse.com/download-avast-antivirus/"
      remarks: "Windows"
    - name: "Softpedia"
      type: "user"
      url: "https://www.softpedia.com/get/Antivirus/Avast-Home-Edition.shtml"
      remarks: "Windows"
    - name: "Google Play"
      type: "user"
      url: "https://play.google.com/store/apps/details?id=com.avast.android.mobilesecurity"
      remarks: "Android"
    - name: "Softonic"
      type: "user"
      url: "https://avast.en.softonic.com/android"
      remarks: "Android"
    - name: "MacUpdate"
      type: "user"
      url: "https://www.macupdate.com/app/mac/26644/avast"
      remarks: "macOS"
    - name: "FileHorse"
      type: "user"
      url: "https://mac.filehorse.com/download-avast-mac-security/"
      remarks: "macOS"
    - name: "Softonic"
      type: "user"
      url: "https://avast-2015.en.softonic.com/mac"
      remarks: "macOS"
    - name: "Apple App Store"
      type: "user"
      url: "https://apps.apple.com/us/app/avast-security-photo-vault/id1276551855"
      remarks: "iOS"
  status: ["https://blog.avast.com/"]

rating:
  - name: "TechSpot"
    rate: [4.6, 5]
    num: 436
  - name: "FileHippo"
    rate: [9, 10]
    num: 506
    remarks: "Windows"
  - name: "CNET"
    rate: [4.5, 5]
    num: 27410
    remarks: "Windows"
  - name: "CNET"
    rate: [4, 5]
    remarks: "Windows"
  - name: "Softonic"
    rate: [8, 10]
    num: 120345
    remarks: "Windows"
  - name: "FileHorse"
    rate: [8.8, 10]
    num: 2487
    remarks: "Windows"
  - name: "Softpedia"
    rate: [4, 5]
    num: 16572
    remarks: "Windows"
  - name: "Google Play"
    rate: [4.7, 5]
    num: 5907173
    remarks: "Android"
  - name: "Softonic"
    rate: [8, 10]
    num: 1182
    remarks: "Android"
  - name: "MacUpdate"
    rate: [3.1, 5]
    num: 77
    remarks: "macOS"
  - name: "FileHorse"
    rate: [8.9, 10]
    num: 85
    remarks: "macOS"
  - name: "Softonic"
    rate: [6, 10]
    num: 206
    remarks: "macOS"
  - name: "Apple App Store"
    rate: [4.7, 5]
    num: 13423
    remarks: "iOS"

---
  Avast Antivirus is a family of internet [security applications](/categories/security-software/) developed by Avast for Microsoft Windows, macOS, Android and iOS. The Avast Antivirus products include free and proprietary versions that provide [computer security](/categories/security-software/), [browser](/categories/web-browser/) security, [antivirus software](/categories/antivirus-software/), firewall, anti-phishing, antispyware, and anti-spam among other services.
  
  [Blog](https://blog.avast.com/) I [Forum](https://forum.avast.com/) I [Documentation](https://www.avast.com/download-documentation) I [FAQ](https://support.avast.com/article/Antivirus-FAQ/)
