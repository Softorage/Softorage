---
title: "FontForge"

description: "A font editor which supports many common font formats."

image: "https://upload.wikimedia.org/wikipedia/commons/2/28/FontForge_Logo%2C_2015.svg"

status: ["Active"]

website: "https://fontforge.github.io/"

get_it:
  - from: "Authentic"
    url: "https://fontforge.github.io/en-US/downloads/"
  - from: "GitHub | Releases"
    url: "https://github.com/fontforge/fontforge/releases"

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
  overview: ["http://fontforge.github.io/en-US/documentation/scripting/", "http://fontforge.sourceforge.net/scripting.html", "http://fontforge.github.io/en-US/documentation/scripting/python/", "http://fontforge.sourceforge.net/python.html", "http://fontforge.github.io/featurefile.html", "http://fontforge.sourceforge.net/math.html", "http://fontforge.sourceforge.net/source-build.html#Dependencies", "https://github.com/fontforge/fontforge/releases", "http://fontforge.sourceforge.net/changelog.html", "http://www.luatex.org/talks/tug2008-taco-luatex.pdf", "https://fontforge.github.io/en-US/documentation/utilities/"]
  developer: ["https://en.wikipedia.org/w/index.php?title=FontForge&oldid=875122964", "http://fontforge.github.io/en-US/project/acknowledgements/"]
  initial_release: ["http://fontforge.github.io/oldchangelog.html"]
  written_in: ["https://github.com/fontforge/fontforge"]
  platform:
    - dskp: ["http://fontforge.github.io/en-US/downloads/"]
  sysreq: ["https://fontforge.github.io/faq.html#Minimum"]
  license: ["https://github.com/fontforge/fontforge/blob/master/LICENSE"]
  rating:
    - name: "OSDN"
      type: "user"
      url: "https://osdn.net/projects/sfnet_fontforge/reviews/"
    - name: "SourceForge"
      type: "user"
      url: "https://sourceforge.net/projects/fontforge/"
  status: ["https://github.com/fontforge/fontforge", "https://github.com/fontforge/fontforge/graphs/contributors", "https://github.com/fontforge/fontforge/releases"]

rating:
  - name: "OSDN"
    rate: [5, 5]
    num: 2
  - name: "SourceForge"
    rate: [4.3, 5]
    num: 65

---
  FontForge is a font editor which supports many common font formats. To facilitate automated format conversion and other repetitive tasks, FontForge implements two scripting languages: its own language and Python. FontForge can run scripts from its GUI, from the command line, and also offers its features as a Python module so it can be integrated into any Python program.
  
  FontForge supports Adobe's OpenType feature file specification (with its own extensions to the syntax). It also supports the unofficial Microsoft mathematical typesetting extensions (MATH table) introduced for Cambria Math and supported by Office 2007, [XeTeX]({{< ref "xetex" >}}) and [LuaTeX]({{< ref "luatex" >}}). At least one free OpenType mathematical font has been developed in FontForge.
  
  FontForge uses FreeType for rendering fonts on screen. Since the November 15, 2008 release, FontForge uses libcairo and libpango software libraries for graphics and text rendering providing anti-aliased graphics and complex text layout support.
  
  FontForge can use Potrace or AutoTrace to auto trace bitmap images and import them into a font.
  
  Parts of FontForge code are used by the [LuaTeX]({{< ref "luatex" >}}) typesetting engine for reading and parsing OpenType fonts.
  
  The FontForge source code includes a number of utility programs, including 'showttf' which shows the contents of binary font files, and a WOFF converter and deconverter.
  
  [Online Book](http://designwithfontforge.com/) I [Documentation](https://fontforge.github.io/en-US/documentation/) I [FAQ](https://fontforge.github.io/en-US/faq/) I [Wiki](https://github.com/fontforge/fontforge/wiki) I [Mailing list](https://sourceforge.net/projects/fontforge/lists/fontforge-users)
