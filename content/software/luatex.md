---
title: "LuaTeX"

description: "TeX-based computer typesetting system which is an extended version of pdfTeX using Lua as an embedded scripting language"

image: "https://upload.wikimedia.org/wikipedia/commons/d/d1/LuaTeX_logo.svg"

status: ["Active"]

website: "http://www.luatex.org"

get_it:
  - from: "Authentic"
    url: "http://www.luatex.org/download.html"

developer: ["Taco Hoekwater", "Hartmut Henkel", "Hans Hagen", "Others"]

repository: ["https://serveur-svn.lri.fr/svn/modhel/luatex/", "http://www.luatex.org/svn/trunk/", "https://github.com/TeX-Live/luatex"]

written_in: ["Lua", "C"]

platform:
  - dskp:
      - name: "Linux"
        type: "official"
      - name: "Windows"
        type: "official"
      - name: "macOS"
        type: "official"
      - name: "Unix(like)"
        type: "official"

categories: ["Typesetting"]

license: ["GPL v2"]

social:
  - name: "Wikipedia"
    url: "https://en.wikipedia.org/wiki/LuaTeX"

source:
  overview: ["http://www.luatex.org"]
  developer: ["https://en.wikipedia.org/w/index.php?title=LuaTeX&oldid=875132816"]
  written_in: ["https://github.com/TeX-Live/luatex", "https://en.wikipedia.org/w/index.php?title=LuaTeX&oldid=875132816"]
  platform:
    - dskp: ["http://www.luatex.org/download.html"]
  license: ["https://serveur-svn.lri.fr/svn/modhel/luatex/trunk/COPYING", "https://github.com/TeX-Live/luatex/blob/trunk/COPYING", "http://www.luatex.org/svn/trunk/COPYING"]
  status: ["https://serveur-svn.lri.fr/svn/modhel/luatex/trunk/source/texk/web2c/luatexdir/NEWS", "https://github.com/TeX-Live/luatex/graphs/contributors"]

note: |
  * Username and password for repository are [given on official website](http://www.luatex.org/download.html); both `anonsvn`.
---
  LuaTeX is a TeX-based computer typesetting system which is an extended version of pdfTeX using Lua as an embedded scripting language.
  
  > From the user perspective we have pdfTeX as stable and more or less frozen 8 bit engine, XeTeX as unicode input and font aware engine using libraries for font handling, and LuaTeX as engine that is programmable and delegates as much as possible to Lua, with the objective to keep the core engine lean and mean. Each engine has its benefits and drawbacks ([more details here](http://www.luatex.org/roadmap.html#tbp)). \- [Official website](http://www.luatex.org)
  
  See [XeTeX]({{< ref "xetex" >}}), [LuaTeX]({{< ref "luatex" >}}).
  
  [Mailing list](http://www.luatex.org/support.html) I [Wiki](http://wiki.luatex.org/index.php/Main_Page) I [Documentation](http://www.luatex.org/documentation.html) I [FAQ](http://www.luatex.org/faq.html) I [Stack Exchange](https://tex.stackexchange.com/questions/tagged/luatex)