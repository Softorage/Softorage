---
title: "FontForge"

description: "A font editor which supports many common font formats."

image: "https://cdn.statically.io/img/img.softorage.com/software-logo/fontforge.png?h=80"

status: ["Active"]

website: "https://fontforge.org/"

get_it:
  - from: "Authentic"
    url: "https://fontforge.org/en-US/downloads/"
  - from: "GitHub Releases | Authentic"
    url: "https://github.com/fontforge/fontforge/releases"
  - from: "Softpedia"
    url: "https://www.softpedia.com/get/Others/Font-Utils/FontForge.shtml"
    platform:
      - name: "Windows"
        hardware: ["dskp"]
        type: "official"
  - from: "MacUpdate"
    url: "https://www.macupdate.com/app/mac/48689/fontforge"
    platform:
      - name: "macOS"
        hardware: ["dskp"]
        type: "official"

sysreq:
  -
    min: "192MB free RAM"
    recm: "512MB free RAM"
  -
    min: "A color monitor"
    recm: ""

developer: ["George Williams", "Frank Trampe", "Ben Martin", "Adrien Tétar", "Khaled Hosny", "Jeremy Tan"]

initial_release: ["2 March 2004"]

repository: ["https://github.com/fontforge/fontforge"]

written_in: ["C", "Python"]

platform:
  - dskp:
      - name: "Windows"
        type: "official"
      - name: "Linux"
        type: "official"
      - name: "macOS"
        type: "official"

categories: ["Font Editor"]

license: ["GPL v3", "BSD-3"]

social:
  - name: "GitHub"
    url: "https://github.com/fontforge"
  - name: "Facebook"
    url: "https://www.facebook.com/fontforge/"
  - name: "Twitter"
    url: "https://twitter.com/fontforge"
  - name: "Wikipedia"
    url: "https://en.wikipedia.org/wiki/FontForge"

source:
  overview: ["http://fontforge.org/en-US/documentation/scripting/", "http://fontforge.sourceforge.net/scripting.html", "http://fontforge.org/en-US/documentation/scripting/python/", "http://fontforge.sourceforge.net/python.html", "http://fontforge.org/featurefile.html", "http://fontforge.sourceforge.net/math.html", "http://fontforge.sourceforge.net/source-build.html#Dependencies", "https://github.com/fontforge/fontforge/releases", "http://fontforge.sourceforge.net/changelog.html", "http://www.luatex.org/talks/tug2008-taco-luatex.pdf", "https://fontforge.org/en-US/documentation/utilities/"]
  developer: ["https://en.wikipedia.org/w/index.php?title=FontForge&oldid=875122964", "http://fontforge.org/en-US/project/acknowledgements/"]
  initial_release: ["http://fontforge.org/oldchangelog.html"]
  written_in: ["https://github.com/fontforge/fontforge"]
  platform:
    - dskp: ["http://fontforge.org/en-US/downloads/"]
  sysreq: ["https://fontforge.org/faq.html#Minimum"]
  license: ["https://github.com/fontforge/fontforge/blob/master/LICENSE"]
  rating:
    - name: "OSDN"
      type: "user"
      url: "https://osdn.net/projects/sfnet_fontforge/reviews/"
    - name: "SourceForge"
      type: "user"
      url: "https://sourceforge.net/projects/fontforge/"
    - name: "Softpedia"
      type: "user"
      url: "https://www.softpedia.com/get/Others/Font-Utils/FontForge.shtml"
      remarks: "Windows"
    - name: "MacUpdate"
      type: "user"
      url: "https://www.macupdate.com/app/mac/48689/fontforge"
      remarks: "macOS"
  status: ["https://github.com/fontforge/fontforge", "https://github.com/fontforge/fontforge/graphs/contributors", "https://github.com/fontforge/fontforge/releases"]

rating:
  - name: "OSDN"
    rate: [5, 5]
    num: 2
  - name: "SourceForge"
    rate: [4.3, 5]
    num: 65
  - name: "Softpedia"
    rate: [4.8, 5]
    num: 126
    remarks: "Windows"
  - name: "MacUpdate"
    rate: [4.3, 5]
    num: 7
    remarks: "macOS"
---
  FontForge is a [font editor](/categories/font-editor) which supports many common font formats. To facilitate automated format conversion and other repetitive tasks, FontForge implements two scripting languages: its own language and Python. FontForge can run scripts from its GUI, from the command line, and also offers its features as a Python module so it can be integrated into any Python program.
  
  FontForge supports Adobe's OpenType feature file specification (with its own extensions to the syntax). It also supports the unofficial Microsoft mathematical typesetting extensions (MATH table) introduced for Cambria Math and supported by Office 2007, [XeTeX](/software/xetex/) and [LuaTeX](/software/luatex/). At least one free OpenType mathematical font has been developed in FontForge.
  
  FontForge uses FreeType for rendering fonts on screen. Since the November 15, 2008 release, FontForge uses libcairo and libpango software libraries for graphics and text rendering providing anti-aliased graphics and complex text layout support.
  
  FontForge can use Potrace or AutoTrace to auto trace bitmap images and import them into a font.
  
  Parts of FontForge code are used by the [LuaTeX](/software/luatex/) typesetting engine for reading and parsing OpenType fonts.
  
  The FontForge source code includes a number of utility programs, including 'showttf' which shows the contents of binary font files, and a WOFF converter and deconverter.
  
  [Online Book](http://designwithfontforge.com/) I [Documentation](https://fontforge.org/en-US/documentation/) I [FAQ](https://fontforge.org/en-US/faq/) I [Wiki](https://github.com/fontforge/fontforge/wiki) I [Mailing list](https://sourceforge.net/projects/fontforge/lists/fontforge-users)
  

