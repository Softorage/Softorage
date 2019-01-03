---
title: "Xpdf"

info: "A free and open-source PDF viewer for operating systems supported by the Qt toolkit."

image: "https://upload.wikimedia.org/wikipedia/commons/9/90/Xpdf_logo.svg"

status: "Active"

website: ["https://www.xpdfreader.com/"]

get_it:
  - ["Authentic", "https://www.xpdfreader.com/download.html"]
  - ["Authentic (older versions)", "https://www.xpdfreader.com/old-versions.html"]

description: |
  Xpdf is a free and open-source PDF [document viewer](/search#document_viewer) for operating systems supported by the Qt toolkit. Versions prior to 4.00 were written for the X Window System and Motif.
  
  Xpdf runs on nearly any Unix-like operating system, but binaries are also available for Windows. Xpdf can decode LZW and read encrypted PDFs. The official version obeys the DRM restrictions of PDF files, which can prevent copying, printing, or converting some PDF files. There are patches that make Xpdf ignore these DRM restrictions, and these restrictions are patched out by the Debian distribution.
  
  Xpdf is also used as a back-end for other PDF readers frontends such as KPDF and GPDF, and its engine, without the X11 display components, is used for PDF viewers including BePDF on BeOS, '!PDF' on RISC OS, on PalmPDF on Palm OS and on Windows Mobile.
  
  [Forum](http://forum.xpdfreader.com/)

developer: ["Glyph & Cog", "Derek Noonburg"]

initial_release: "12 December 1995"

repository: ["https://github.com/kermitt2/xpdf-4.00"]

written_in: ["C++", "C", "Shell", "Qt"]

platform:
  - dskp:
      - ["Windows", "o"]
      - ["Linux", "o"]
      - ["macOS", "o"]
  - else:
      - ["Cross Platform", "o"]

categories: ["Document Viewer"]

license: ["GPL v2", "GPL v3"]

social:
  - name: "Wikipedia"
    url: "https://en.wikipedia.org/wiki/Xpdf"

source:
  description: ["https://www.linux.com/learn/survey-linux-pdf-viewers", "https://www.xpdfreader.com/", "http://www.cs.cmu.edu/~dst/Adobe/Gallery/xpdf-generic-patch.html", "https://lwn.net/Articles/335415/", "http://pocketxpdf.sourceforge.net/"]
  developer: ["https://www.xpdfreader.com/about.html"]
  initial_release: ["https://www.xpdfreader.com/about.html", "https://en.wikipedia.org/wiki/Xpdf", "http://www.glyphandcog.com/opensource.html"]
  written_in: ["https://github.com/tmyroadctfig/xpdf"]
  platform:
    - dskp: ["https://www.xpdfreader.com/download.html"]
    - else: ["https://en.wikipedia.org/wiki/Xpdf"]
  license: ["http://www.glyphandcog.com/opensource.html", "https://www.xpdfreader.com/opensource.html"]
  rating:
    - ["CandianContent", "u", "http://www.canadiancontent.net/tech/download/Xpdf.html"]
    - ["LO4D", "u", "https://xpdf.en.lo4d.com/#review_header"]
  status: ["https://www.xpdfreader.com/download.html"]

rating:
  - name: "CandianContent"
    rate: [4.5, 5]
    num: 13
  - name: "LO4D"
    rate: [4, 5]
    num: 1

---
* Repository - https://github.com/tmyroadctfig/xpdf hasn't been updated after 2012, hence not included.