---
title: "Ardour"

info: "A hard disk recorder and digital audio workstation application. It runs on Linux, MacOS, FreeBSD and Microsoft Windows."

image: "https://upload.wikimedia.org/wikipedia/commons/e/ee/Ardour-icon.png"

status: "Active"

website: ["https://ardour.org"]

get_it:
  - ["Authentic", "https://community.ardour.org/download"]

description: |
  Ardour is a hard disk recorder and [digital audio workstation](/search#digital_audio_workstation) application. It runs on Linux, macOS, FreeBSD and Microsoft Windows. Its primary author is Paul Davis, who is also responsible for the JACK Audio Connection Kit. Ardour is intended to be digital audio workstation software suitable for professional use.
  
  Released under the terms of the GNU General Public License (version two or any later version), Ardour is free software. Users who download from the project's website are asked to pay at least $1 for downloading prebuilt binaries of Ardour; those users then have the right to obtain minor updates until the next major release. Another option is to subscribe, paying $1, $4 or $10 per month. Subscribers can download prebuilt binaries of all updates during the subscription period. (This makes Ardour an example of commercial free-libre software.) Without paying, users can download the full source code for all platforms, or a prebuilt demo binary which ceases playback after various time periods. Several Linux distributions also provide prebuilt binaries, free of any software restrictions, as part of their repositories.
  
  [IRC](http://webchat.freenode.net/?channels=ardour) I [Blog](https://discourse.ardour.org/c/blog) I [News](https://community.ardour.org/news) I [Forum](https://discourse.ardour.org/) I [Manual](http://manual.ardour.org/toc/) I [FAQ](https://community.ardour.org/realfaq) I [Mailing lists](https://ardour.org/community.html#mailinglists)

sysreq:
  -
    min: "400mhz Intel Pentium equivalent CPU"
    recm: "1-3GHz Processor, Athlons dual CPU system"
  -
    min: "1GB RAM"
    recm: "2GB RAM or more"
  -
    min: "JACK Audio Connection Kit"
    recm: "Rui Nuno Capela's GUI for JACK: qjackctl"
  -
    min: "350MB for linux & 600MB for macOS of disk storage available"
    recm: ""
  -
    min: "Any of the audio cards based on the ICE1712 or ICE1724 chipsets will work well (Terratec and M-Audio use these, as well as the EZ8), and the Ensoniq cards and onboard chipsets"
    recm: "The RME Hammerfall series and the M-Audio Delta series audio interface"
  -
    min: "2-4 channels: M-Audio Delta 44, 66 or 2496; 2-12 channels: M-Audio Delta 1010"
    recm: "more than 12 channels: RME HDSP, RME HDSPe; more than 26 channels: RME MADI"

developer: ["Paul Davis", "David Robillard", "Robin Gareus", "Nick Mainsbridge", "Colin Fletcher", "Ben Loftis", "Tim Mayberry and others"]

initial_release: "23 September 2005"

repository: ["git://git.ardour.org/ardour/ardour.git", "https://github.com/Ardour/ardour"]

written_in: ["C++", "C", "Python", "Lua", "Shell", "GTK+"]

platform:
  - dskp:
      - ["Windows", "o"]
      - ["Linux", "o"]
      - ["macOS", "o"]
      - ["Unix(like)", "n"]

categories: ["Digital Audio Workstation"]

license: ["GPL v2"]

social:
  - name: "Wikipedia"
    url: "https://en.wikipedia.org/wiki/Ardour_(software)"

source:
  description: ["http://ardour.org/system_requirements", "http://www.freshports.org/audio/ardour/", "https://community.ardour.org/download"]
  developer: ["https://ardour.org/credits.html"]
  initial_release: ["https://web.archive.org/web/20120212212315/http://osdir.com/ml/audio.ardour.devel/2005-09/msg00084.html"]
  written_in: ["https://github.com/Ardour/ardour"]
  platform:
    - dskp: ["https://community.ardour.org/download"]
  sysreq: ["https://community.ardour.org/linux_system_requirements", "https://ardour.org/requirements.html"]
  license: ["https://community.ardour.org/download", "https://ardour.org/copying.html"]
  rating:
    - ["G2CROWD", "u", "https://www.g2crowd.com/products/ardour/reviews"]
  status: ["https://en.wikipedia.org/w/index.php?title=Ardour_(software)&oldid=877631152", "https://discourse.ardour.org/c/blog"]

rating:
  - name: "G2CROWD"
    rate: [4.2, 5]
    num: 5

---
  * [System Requirements](#sysreq) in detail can be seen [here](https://community.ardour.org/linux_system_requirements) & [here](https://ardour.org/requirements.html)
  * Ardour is an "unsigned application", so OS X and later might ask for extra confirmation the first time you run it.