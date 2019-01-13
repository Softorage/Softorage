---
# 1 'title': Title of the software. It is mandatory, as it is vital.
title: "Blender"

# 2 'info': Information about software, in short. It forms part of the table on Search page.
info: "3D modeling software written in C, C++, and Python containing cloth, hair, fluid, particle, and rigid body simulation techniques."

# 3 'image':
image: "https://upload.wikimedia.org/wikipedia/commons/0/0c/Blender_logo_no_text.svg"

# 4 'status': Active, Discontinued, Unknown ; If none is written, that is page.status is false, page will show status 'Unknown'.
status: "Active"

# 5 'website':
website: "https://www.blender.org/"

# 6 'get_it': Link to official Download page, or page from where software can be obtained
get_it:
  - ["Authentic", "https://www.blender.org/download/"]

# 7 'description': Description of software, in brief but not in short. It's mandatory.
description: |
  Blender is a professional, free and open-source [3D computer graphics](/search#3d_computing_graphics) software toolset used for creating animated films, visual effects, art, 3D printed models, interactive 3D applications and video games. Blender's features include 3D modeling, UV unwrapping, texturing, raster graphics editing, rigging and skinning, fluid and smoke simulation, particle simulation, soft body simulation, sculpting, animating, match moving, camera tracking, rendering, motion graphics, video editing and compositing. It also features an integrated game engine.
  
  [Reference Manual](https://docs.blender.org/manual/en/latest/index.html) I [News](https://www.blender.org/news/) I [Community](https://www.blender.org/community/) I [Stack Exchange(QA)](https://blender.stackexchange.com/) I [Wiki](https://wiki.blender.org/wiki/Main_Page) I [Discord(community-managed)](https://discordapp.com/invite/blender) I [Developers Blog](https://code.blender.org/) I [Developers Forum](https://devtalk.blender.org/) I [IRC](https://wiki.blender.org/wiki/Communication/Contact/IRC)

# 8 'sysreq':
sysreq:
  - min: "32-bit dual core 2Ghz CPU with SSE2 support"
    recm: "64-bit quad core CPU"
    optm: "64-bit eight core CPU"
  - min: "2 GB RAM"
    recm: "8 GB RAM"
    optm: "16 GB RAM"
  - min: "1280×768 Display"
    recm: "Full HD Display"
    optm: "Full HD display"
  - min: "OpenGL 2.1 compatible graphics with 512 MB RAM"
    recm: "OpenGL 3.2 compatible graphics with 2 GB RAM"
    optm: "Dual OpenGL 3.2 compatible graphics cards with 4 GB RAM"
  - min: "Mouse or trackpad"
    recm: "Three button mouse"
    optm: "Three button mouse and graphics tablet"

# 9 'developer': Developer(s) of software. Mandatory.
developer: "Blender Foundation"

# 10 'initial_release': When was the software initially released
initial_release: "January 1998"

# 11 'repository': 
repository: "https://git.blender.org/blender.git"

# 12 'written_in':
written_in: ["C", "C++", "Python"]

# 13 'platform': Platform(Operating System) on which the software runs. It forms part of the table. dskp=desktop,smp=smartphone,tab=tablet. "n" is added as second element by creating array when that platform is supported by unofficial release, external efforts or was priorly supported but is now dicontinued.

# for an application softwrae choose between desktop,smartphone or tablet on which it is available. in case the software isnt an appplication sofwrae and ther is a need to indicate that software requires a language,framework or certain environment for the software to be properly used, `else` shall be chosen. eg, jquery is basically a javascript library. so for jquery to be used a program must be available which can run javascript code. hence in this case javascript might be included under `else` for jquery.
platform: 
  - dskp:
      - ["Windows","o"]
      - ["Linux","o"]
      - ["macOS","o"]
      - ["Unix(like)","o"]
  - smp:
      - ["Android","n"]
#  dskp:
#    windows
#    linux
#    macos
#    Unix(like)
#  smp:
#    android
#    ios
#  tab:
#    android
#    ios
#  else:
#    languages, frameworks, builders, environments, etc especially for libraries etc

# 14 'categories':
categories: ["3D Computing Graphics", "Computer Simulation"]

# 15 'license':
license: "GPL v2+"

# 16 'social': Social presence of software or community behind it. Supported parameters are(case-sensetive, watch for typos): wikipedia, youtube, facebook, twitter, pinterest. In case a non-supported parameter is used, it will shown as formatted text on website.
social:
  - name: "Wikipedia"
    url: "https://en.wikipedia.org/wiki/Blender_(software)"
  - name: "Youtube"
    url: "https://youtube.com/BlenderFoundation"
  - name: "Twitter"
    url: "https://twitter.com/blender_org"
  - name: "Facebook"
    url: "https://www.facebook.com/YourOwn3DSoftware/"
  - name: "reddit"
    url: "https://www.reddit.com/r/blender/"

# 17 'source': 
# {10 Initial Release} Sources for information shall be included wherever relevant. In case some information has been used from a source such as a website or a book, website address or its URL in case of website and book name in case of book (and page number from such book, if feasible, on which information may be found) may be treated as source.
# {9 Developer, 11 Repository} If information is existent truth, such as name of developer for which a source may not be found, in such case, website address of the developer and social presence such as Wikipedia page if any may be treated as source. In case website of such developer mentions the software, then URL of such website page would be preffered over simple website address of developer.
# {7 Description} In case information has been gathered from multiple sources, such multiple sources shall be mentioned. In case of Description taken from a collaborative work such as Wikipedia, URL of such (Wikipedia) page from which such information is taken and any sources mentioned on such (Wikipedia) page with regard to information used therefrom, may be treated as source.
# {14 Categories} Currently softwares are categorised as they are on Wikipedia to make sense and ensure uniformity. Also as softwares may be categorised differently using a different logic, categories may not necessarily conform with those present on Wikipedia in near future. So, mentioning source for categories is optional.
# {18 Rating} URL of website where rating can be found or page number of book along with name of book if rating is taken from a book, shall be treated as source. Source shall be as much specific as feasible.
# Usually reviews are found to be of two types, viz, Professional's review (say Editor's review) and user's reviews. Assuming Professional's review and user's reviews can co-exist at one reviewing entity as well, seperate provision for such case has been made. It has been assumed that one rating can be obtained from one source only, hence there can only be one source attributable to one rating; that is, one based on Professional's and one based on user reviews. Source for rating is to be entered as an array.
# In case the rating is based on reviewing entity's Professional's review, format for source is ["name of reviewer","e","url of source"]. In case a rating doesn't have 'num' attribute, such rating is taken to be Professional's review.
# In case the rating is based on a number of user reviews, format for source is ["name of reviewer","u","url of source"]. In case a rating has 'num' attribute, such rating is taken to be based on a number of user's review.
# source for desktop platforms shall be under dskp, smartphone or tablet under smptb, and others under else. Array can contain multiple sources.
source:
  description: "https://en.wikipedia.org/wiki/Blender_(software)"
  developer: ["https://www.blender.org/foundation/", "https://en.wikipedia.org/wiki/Blender_Foundation"]
  initial_release: ["https://www.blendernation.com/2014/01/02/happy-birthday-blender/#comment-629004", "https://docs.blender.org/manual/en/latest/getting_started/about/history.html#version-revision-milestones"]
  written_in: "https://www.blender.org/get-involved/"
  platform:
    - dskp: ["https://www.blender.org/download/"]
    - smptb: ["https://download.blender.org/demo/android/"]
  sysreq: "https://www.blender.org/download/requirements/"
  license: "https://www.blender.org/about/license/"
  rating:
    - ["G2CROWD","u","https://www.g2crowd.com/products/blender/reviews"]
    - ["Capterra","u","https://www.capterra.com/p/167519/Blender"]
    - ["PCWorld","e","https://www.pcworld.com/article/244442/blender.html"]
    - ["CNET","e","https://download.cnet.com/Blender/3000-6677_4-10514553.html"]
    - ["CNET","u","https://download.cnet.com/Blender/3000-6677_4-10514553.html"]

# 18 'rating': Ratings and Reviews - See if any of the given sites has review for the current software.
# Currently a policy of showing reviews from trusted sites is followed. In case, you want to insert review from a site that is not listed, please open an issue for inclusion of the site in the list. In such case, it shall be ensured that reviewing site is trustable. Trustability of a reviewing site may be ensured by study of policies of such site, its reviewing mechanism, its age, whether it is well established, or such other matters.
# 'name' is where you specify the name of the reviewing entity.
# 'rate' is an array with format as [rating, out of].
# Sometimes some entities ask users for reviews and average them to arrive at one rating. 'num' is the number of reviews upon which the rating by the entity is based. Some entities review softwares by asking professional reviewers (say Editor's review), in which case 'num' may not hold relevance. In such case 'num' shall be omitted.
rating:
  - name: "G2CROWD"
    rate: [4.5,5]
    num: 101
  - name: "Capterra"
    rate: [4.5,5]
    num: 162
  - name: "PCWorld"
    rate: [3.5,5]
  - name: "CNET"
    rate: [4,5]
    num: 147
  - name: "CNET"
    rate: [4.5,5]
---