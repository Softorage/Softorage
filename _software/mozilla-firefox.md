---
title: "Mozilla Firefox"

info: "An open source web browser developed by The Mozilla Foundation and its subsidiary, Mozilla Corporation"

image: "https://upload.wikimedia.org/wikipedia/commons/6/67/Firefox_Logo%2C_2017.svg"

status: "Active"

website: ["https://www.mozilla.org/en-US/firefox/"]

get_it:
  - ["Authentic", "https://www.mozilla.org/en-US/firefox/new/"]

description: |
  Mozilla Firefox (or simply Firefox) is a free and open-source [web browser](/search#web_browser) developed by The Mozilla Foundation and its subsidiary, Mozilla Corporation. Firefox is available for Windows, macOS, Linux, BSD illumos and Solaris operating systems. Its sibling, Firefox for Android, is also available. Firefox uses the Gecko layout engine to render web pages, which implements current and anticipated web standards. In 2017, Firefox began incorporating new technology under the code name Quantum to promote parallelism and a more intuitive user interface. An additional version, Firefox for iOS, was released on November 12, 2015. Due to platform restrictions, it uses the WebKit layout engine instead of Gecko, as with all other iOS web browsers.
  
  [Blog](https://blog.mozilla.org/) I [Forum](https://support.mozilla.org/en-US/questions) I [News/Announcements](https://blog.mozilla.org/press/) I [Wiki](https://wiki.mozilla.org/Firefox) I [Mailing list](https://groups.google.com/a/mozilla.com/forum/#!aboutgroup/fx-onboarding) I [FAQ](https://support.mozilla.org/en-US/kb/frequently-asked-questions)

sysreq:
  -
    min: ""
    recm: "Windows 7, 8, 10 | macOS 10.9, macOS 10.10, macOS 10.11, macOS 10.12, macOS 10.13 | GNU/Linux"
  -
    min: "For GNU/Linux: Firefox will not run at all without the following libraries or packages- GTK+ 3.4 or higher, GLib 2.22 or higher, Pango 1.22 or higher, X.Org 1.0 or higher (1.7 or higher is recommended), libstdc++ 4.6.1 or higher"
    recm: "For GNU/Linux: Minimum required packages plus- NetworkManager 0.7 or higher, DBus 1.0 or higher, GNOME 2.16 or higher, PulseAudio"
  -
    min: ""
    recm: "Pentium 4 or newer processor that supports SSE2 for Windows | Macintosh computer with an Intel x86 processor for macOS"
  -
    min: ""
    recm: "512MB RAM / 2GB for 64bit version"
  -
    min: ""
    recm: "200MB free hard disk space"

developer: ["Mozilla Foundation and its contributors", "Mozilla Corporation"]

initial_release: "23 September 2002"

repository: ["https://hg.mozilla.org/mozilla-central/", "https://github.com/mozilla/gecko-dev"]

written_in: ["C", "C++", "HTML", "JavaScript", "Rust"]

platform:
  - dskp:
      - ["Windows", "o"]
      - ["Linux", "o"]
      - ["macOS", "o"]
      - ["Unix(like)", "n"]
  - smp:
      - ["Android", "o"]
      - ["iOS", "o"]
  - tab:
      - ["Android", "o"]
      - ["iOS", "o"]

categories: ["Web Browser"]

license: ["MPL v2"]

social:
  - name: "Wikipedia"
    url: "https://en.wikipedia.org/wiki/Firefox"
  - name: "Twitter"
    url: "https://twitter.com/firefox"
  - name: "Youtube"
    url: "https://www.youtube.com/firefoxchannel"

source:
  description: ["https://lwn.net/Articles/118268/", "https://www.mozilla.org/en-US/foundation/licensing/", "https://www.mozilla.org/en-US/about/legal/eula/", "https://blog.mozilla.org/blog/2017/11/14/introducing-firefox-quantum/", "https://web.archive.org/web/20100615131607/http://download-firefox.org/spread-firefox/gecko-layout-engine-and-mozilla-firefox/", "https://svnweb.freebsd.org/ports/head/www/firefox/", "http://cvsweb.openbsd.org/cgi-bin/cvsweb/ports/www/mozilla-firefox/", "http://cvsweb.netbsd.org/bsdweb.cgi/pkgsrc/www/firefox/", "https://wiki.openindiana.org/oi/Firefox", "https://github.com/oracle/solaris-userland/tree/master/components/desktop/firefox"]
  initial_release: ["https://en.wikipedia.org/w/index.php?title=Firefox&oldid=878328541"]
  written_in: ["https://en.wikipedia.org/w/index.php?title=Firefox&oldid=878328541", "http://www.infoworld.com/article/3165424/web-browsers/mozilla-binds-firefoxs-fate-to-the-rust-language.html"]
  platform:
    - dskp: ["https://www.mozilla.org/en-US/firefox/new/", "https://en.wikipedia.org/w/index.php?title=Firefox&oldid=878328541", "https://svnweb.freebsd.org/ports/head/www/firefox/", "http://cvsweb.openbsd.org/cgi-bin/cvsweb/ports/www/mozilla-firefox/", "http://cvsweb.netbsd.org/bsdweb.cgi/pkgsrc/www/firefox/", "https://wiki.openindiana.org/oi/Firefox", "https://pkgsrc.joyent.com/install-on-illumos/", "https://github.com/oracle/solaris-userland/tree/master/components/desktop/firefox", "https://ftp.mozilla.org/pub/firefox/releases/52.0esr/contrib/solaris_pkgadd/README.txt"]
    - smptb: ["https://www.mozilla.org/en-US/firefox/new/"]
  sysreq: ["https://www.mozilla.org/en-US/firefox/62.0/system-requirements/"]
  license: ["https://www.mozilla.org/foundation/licensing.html", "https://www.mozilla.org/en-US/about/legal/eula/"]
  rating:
    - ["G2CROWD", "u", "https://www.g2crowd.com/products/mozilla-firefox/reviews"]
    - ["TopTenReviews", "e", "https://www.toptenreviews.com/software/internet/best-internet-browser-software/mozilla-firefox-review/"]
  status: ["https://hg.mozilla.org/mozilla-central/log", "https://github.com/mozilla/gecko-dev/graphs/contributors"]

rating:
  - name: "G2CROWD"
    rate: [4.3, 5]
    num: 142
  - name: "TopTenReviews"
    rate: [9.85, 10]

---
  * Please note that GNU/Linux distributors may provide packages for your distribution which have different requirements. [[^]](#sysreq)
  * Modern GNU/Linux distributions may automatically install required minimum and recommended packages. [[^]](#sysreq)