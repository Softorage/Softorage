---
title: "WebTorrent"

description: "A peer-to-peer (P2P) streaming torrent client written in JavaScript by Feross Aboukhadijeh"

image: "https://cdn.statically.io/img/img.softorage.com/software-logo/webtorrent.png?h=64"

status: ["Active"]

website: "https://webtorrent.io/"

get_it:
  - from: "Authentic"
    url: "https://webtorrent.io/desktop/"
  - from: "GitHub Releases | Authentic"
    url: "https://github.com/webtorrent/webtorrent-desktop/releases"
    platform:
      - name: "Windows"
        hardware: ["dskp"]
        official: true
        portable: false
      - name: "Linux"
        hardware: ["dskp"]
        official: true
        portable: false
      - name: "macOS"
        hardware: ["dskp"]
        official: true
        portable: false
  - from: "FileHorse"
    url: "https://www.filehorse.com/download-webtorrent-64/"
    platform:
      - name: "Windows"
        hardware: ["dskp"]
        arch: ["x64"]
        official: true
        portable: false
  - from: "TechSpot"
    url: "https://www.techspot.com/downloads/6903-webtorrent-desktop.html"
    platform:
      - name: "Windows"
        hardware: ["dskp"]
        official: true
        portable: false
      - name: "Linux"
        hardware: ["dskp"]
        official: true
        portable: false
      - name: "macOS"
        hardware: ["dskp"]
        official: true
        portable: false
  - from: "FileHorse"
    url: "https://mac.filehorse.com/download-webtorrent/"
    platform:
      - name: "macOS"
        hardware: ["dskp"]
        official: true
        portable: false
  - from: "Softpedia"
    url: "https://mac.softpedia.com/get/Internet-Utilities/WebTorrent.shtml"
    platform:
      - name: "macOS"
        hardware: ["dskp"]
        official: true
        portable: false

developer: ["Feross Aboukhadijeh"]

initial_release: ["04 December 2013"]

repository: ["https://github.com/webtorrent/webtorrent", "https://github.com/webtorrent/webtorrent-desktop"]

written_in: ["Java"]

platform:
  - dskp:
      - name: "Windows"
        official: true
      - name: "Linux"
        official: true
      - name: "macOS"
        official: true
  - else:
      - name: "Web Browser"
        official: true

categories: ["BitTorrent Client", "WebRTC-Torrent Client"]

license: ["MIT"]

social:
  - name: "Twitter"
    url: "https://twitter.com/WebTorrentApp"
  - name: "Wikipedia"
    url: "https://en.wikipedia.org/wiki/WebTorrent"

source:
  overview: ["https://webtorrent.io/faq", "https://www.youtube.com/watch?v=B6eIOsvP6Jw"]
  developer: ["https://github.com/webtorrent/webtorrent/graphs/contributors"]
  initial_release: ["https://github.com/webtorrent/webtorrent/blob/master/CHANGELOG.md#previous-versions"]
  written_in: ["https://github.com/webtorrent/webtorrent", "https://github.com/webtorrent/webtorrent-desktop", "https://webtorrent.io/faq"]
  platform:
    - dskp: ["https://webtorrent.io/desktop", "https://github.com/webtorrent/webtorrent-desktop/releases"]
    - else: ["https://instant.io/"]
  license: ["https://github.com/webtorrent/webtorrent/blob/master/LICENSE"]
  rating:
    - name: "FileHorse"
      type: "user"
      url: "https://www.filehorse.com/download-webtorrent-64/"
      remarks: "x64 - Windows"
    - name: "FileHorse"
      type: "user"
      url: "https://mac.filehorse.com/download-webtorrent/"
      remarks: "macOS"
    - name: "Softpedia"
      type: "user"
      url: "https://mac.softpedia.com/get/Internet-Utilities/WebTorrent.shtml"
      remarks: "macOS"
  status: ["https://github.com/webtorrent/webtorrent/graphs/contributors", "https://github.com/webtorrent/webtorrent/pulse"]

rating:
  - name: "FileHorse"
    rate: [6, 10]
    num: 11
    remarks: "x64 - Windows"
  - name: "FileHorse"
    rate: [9.6, 10]
    num: 3
    remarks: "macOS"
  - name: "Softpedia"
    rate: [4.9, 5]
    num: 16
    remarks: "macOS"
---
  WebTorrent is a peer-to-peer (P2P) streaming [torrent client](/categories/bittorrent-client/) written in JavaScript by Feross Aboukhadijeh. WebTorrent uses the same protocol as BitTorrent but uses a different transport. WebTorrent primarily relies on WebRTC connections, while BitTorrent uses TCP connections and UDP datagrams directly.
  
  [Dev Documentation](https://webtorrent.io/docs)  I  [FAQ](https://webtorrent.io/faq)  I  [IRC](https://webchat.freenode.net/?channels=webtorrent)
