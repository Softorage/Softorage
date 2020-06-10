---
title: "Wings 3D"

description: "Wings 3D is a free and open-source subdivision modeler inspired by Nendo and Mirai from Izware"

image: "https://cdn.statically.io/img/img.softorage.com/software-logo/wings-3d.png?h=64"

status: ["Active"]

website: "http://www.wings3d.com/"

get_it:
  - from: "Authentic"
    url: "http://www.wings3d.com/?page_id=84"
  - from: "Softpedia"
    url: "https://www.softpedia.com/get/Multimedia/Graphic/Graphic-Editors/Wings-3D.shtml"
    platform:
      - name: "Windows"
        hardware: ["dskp"]
        arch: ["x32"]
        official: true
        portable: false
  - from: "Softonic"
    url: "https://wings-3d.en.softonic.com/"
    platform:
      - name: "Windows"
        hardware: ["dskp"]
        official: true
        portable: false
  - from: "Malavida"
    url: "https://www.malavida.com/en/soft/wings-3d/"
    platform:
      - name: "Windows"
        hardware: ["dskp"]
        official: true
        portable: false
  - from: "CNET"
    url: "https://download.cnet.com/Wings-3D/3000-6677_4-10514566.html"
    platform:
      - name: "Windows"
        hardware: ["dskp"]
        official: true
        portable: false
  - from: "Softonic"
    url: "https://wings-3d.en.softonic.com/mac"
    platform:
      - name: "macOS"
        hardware: ["dskp"]
        official: true
        portable: false

sysreq:
  linux:
    -
      min: "OS: Ubuntu 18.04"
    -
      min: "OpenGL 2.1 or Mesa"
  macos:
    -
      min: "OS: Mohave or Catalina"
    -
      min: "Intel mac"
  unix:
    -
      min: "Need to build from source"
    -
      min: "OpenGL-2.1"
  windows:
    -
      min: "OS: Windows 10 or later"
    -
      min: "OpenGL 2.1"

developer: ["Björn Gustavsson", "Dan Gudmundsson", "Others"]

initial_release: ["19 October 2001"]

repository: ["https://github.com/dgud/wings"]

written_in: ["Erlang", "GLSL", "C++"]

platform:
  - dskp:
      - name: "Windows"
        official: true
      - name: "macOS"
        official: true
      - name: "Linux"
        official: true
      - name: "Unix(like)"
        official: true

categories: ["3D Computing Graphics", "Subdivision Modeler"]

license: ["Tcl/Tk"]

social:
  - name: "Wikipedia"
    url: "https://en.wikipedia.org/wiki/Wings_3D"

source:
  overview: ["https://wings-3d.en.softonic.com/#app-softonic-review", "https://en.wikipedia.org/w/index.php?title=Wings_3D&oldid=875117731"]
  developer: ["https://github.com/dgud/wings/graphs/contributors"]
  initial_release: ["https://sourceforge.net/projects/wings/files/wings/"]
  written_in: ["https://github.com/dgud/wings"]
  platform:
    - dskp: ["http://www.wings3d.com/?page_id=84"]
  sysreq:
    linux: ["http://www.wings3d.com/?page_id=84"]
    macos: ["http://www.wings3d.com/?page_id=84"]
    unix: ["http://www.wings3d.com/?page_id=84"]
    windows: ["http://www.wings3d.com/?page_id=84"]
  license: ["https://github.com/dgud/wings/blob/master/license.terms", "https://en.wikipedia.org/w/index.php?title=Wings_3D&oldid=875117731"]
  rating:
    - name: "SourceForge"
      type: "user"
      url: "https://sourceforge.net/projects/wings/reviews/"
    - name: "Softonic"
      type: "user"
      url: "https://wings-3d.en.softonic.com/"
      remarks: "Windows"
    - name: "G2CROWD"
      type: "user"
      url: "https://www.g2crowd.com/products/wings-3d/reviews"
    - name: "CNET"
      type: "user"
      url: "https://download.cnet.com/Wings-3D/3000-6677_4-10514566.html"
      remarks: "Windows"
    - name: "AlternativeTo"
      type: "user"
      url: "https://alternativeto.net/software/wings-3d/reviews/"
    - name: "Softpedia"
      type: "user"
      url: "https://www.softpedia.com/get/Multimedia/Graphic/Graphic-Editors/Wings-3D.shtml"
      remarks: "x32 bit Windows"
    - name: "Malavida"
      type: "user"
      url: "https://www.malavida.com/en/soft/wings-3d/"
      remarks: "Windows"
    - name: "Softonic"
      type: "user"
      url: "https://wings-3d.en.softonic.com/mac"
      remarks: "macOS"
  status: ["https://sourceforge.net/projects/wings/files/wings/", "http://www.wings3d.com/forum/", "https://github.com/dgud/wings/graphs/contributors"]

rating:
  - name: "SourceForge"
    rate: [5, 5]
    num: 80
  - name: "Softonic"
    rate: [7, 10]
    num: 73
    remarks: "Windows"
  - name: "G2CROWD"
    rate: [4.5, 5]
    num: 1
  - name: "CNET"
    rate: [3.9, 5]
    num: 8
    remarks: "Windows"
  - name: "AlternativeTo"
    rate: [4, 5]
    num: 2
  - name: "Softpedia"
    rate: [3.8, 5]
    num: 24
    remarks: "x32 bit Windows"
  - name: "Malavida"
    rate: [9, 10]
    num: 3
    remarks: "Windows"
  - name: "Softonic"
    rate: [7, 10]
    num: 8
    remarks: "macOS"

note: |
  * To run Wing 3D on Unix(like) systems, it needs to built from source code.[[source]](http://www.wings3d.com/?page_id=84)
---
  Wings 3D is a tool specifically designed to import and modify models through subdivision - a polygonal modeling technique that allows very well-defined polygons.
  
  The program itself does not include tools to create it's own from scratch. Basically, Wings 3D can import models created by other design environments into polygonal meshes and then develop them through subdivision polygons. It also includes a series of tools that will help you allocate materials, textures and UV coordinates to your models, add lights to the scene and perform screenshots among other possibilities.
  
  Wings 3D is a [3D computer graphics](/categories/3d-computing-graphics) software and [subdivision modeler](/categories/subdivision-modeler), often used in combination with other software, whereby models made in Wings 3D are exported to applications more specialized in rendering and animation such as [Blender](/software/blender/).
  
  [Forum](http://www.wings3d.com/forum/)  I  [Documentation](http://www.wings3d.com/?page_id=87)  I  [News](http://www.wings3d.com/?page_id=76)  I  [User Manual](http://www.wings3d.com/?page_id=252)  I  [FAQ](http://www.wings3d.com/forum/archive/index.php?thread-1106.html)
  
