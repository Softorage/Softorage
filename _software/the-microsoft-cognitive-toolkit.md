---
title: "The Microsoft Cognitive Toolkit"

info: "A deep learning framework developed by Microsoft Research, previously known as CNTK"

status: "Active"

website: ["https://www.microsoft.com/en-us/cognitive-toolkit/"]

get_it:
  - ["Authentic", "https://docs.microsoft.com/en-us/cognitive-toolkit/Setup-CNTK-on-your-machine"]

description: |
  The Microsoft Cognitive Toolkit—previously known as CNTK—is an open-source toolkit for commercial-grade distributed deep learning. It describes neural networks as a series of computational steps via a directed graph. 
  
  The Microsoft Cognitive Toolkit enables to leverage the information within massive data-sets through deep learning by providing scaling, speed, and accuracy with commercial-grade quality and compatibility with the programming languages and algorithms already in use.
  
  [News](https://docs.microsoft.com/en-us/cognitive-toolkit/news) I [Documentation](https://docs.microsoft.com/en-us/cognitive-toolkit/) I [FAQ](https://docs.microsoft.com/en-us/cognitive-toolkit/CNTK-FAQ) I [Blog](https://www.microsoft.com/en-us/cognitive-toolkit/blog/)

sysreq:
  -
    recm: "OS: Windows 8.1 Pro (64 bit), Windows 10 (64 bit), Windows Server 2012 R2 Standard and later I Ubuntu 16.04 LTS (64 bit"
  -
    recm: "Compiler: Visual Studio Enterprise 2017 for Windows I GNU C++ 5.4.0 for Linux"
  -
    recm: "MPI: Microsoft MPI v. 7.0 for Windows I Open MPI v. 1.10.7 for Linux"
  -
    recm: "Math Library: Intel® MKLML library for Windows and Linux"
  -
    recm: "NVIDIA Components: NVIDIA CUDA 9.0, NVIDIA cuDNN 7.0 for CUDA 9.0, NVIDIA CUB 1.7.4 for Windows and Linux"
  -
    recm: "OpenCV: OpenCV v.3.1.0 for Windows and Linux"
  -
    recm: "zlib Library: zlib v.1.2.8 for Windows and Linux"
  -
    recm: "libzip Library: libzip v.1.1.3 for Windows I libzip v.1.1.2 for Linux"
  -
    recm: "Java: Java SE Development Kit 8 v1.8.0_131, 64-bit for Windows I OpenJDK 7, 64-bit for Linux"
  -
    recm: "Anaconda Python: Anaconda3 4.1.1 (64 bit) for Windows and Linux"

developer: ["Microsoft Research"]

initial_release: "26 January 2016"

repository: ["https://github.com/Microsoft/CNTK"]

written_in: ["C++", "Jupyter Notebook", "Python"]

platform:
  - dskp:
      - ["Linux", "o"]
      - ["Windows", "o"]
  - else:
      - ["Python", "o"]
      - ["C++", "o"]
      - ["C#", "o"]
      - ["BrainScript", "o"]

categories: ["Artificial Intelligence", "Machine Learning", "Deep Learning", "Framework"]

license: ["MIT"]

social:
  - name: "GitHub"
    url: "https://github.com/Microsoft/CNTK"
  - name: "Wikipedia"
    url: "https://en.wikipedia.org/wiki/Microsoft_Cognitive_Toolkit"

source:
  description: ["https://www.microsoft.com/en-us/cognitive-toolkit/"]
  developer: ["https://en.wikipedia.org/w/index.php?title=Microsoft_Cognitive_Toolkit&oldid=868040263"]
  initial_release: ["https://github.com/Microsoft/CNTK/releases?after=v1.7.1"]
  written_in: ["https://www.microsoft.com/en-us/cognitive-toolkit/", "https://github.com/Microsoft/CNTK"]
  platform:
    - dskp: ["https://docs.microsoft.com/en-us/cognitive-toolkit/", "https://docs.microsoft.com/en-us/cognitive-toolkit/Setup-CNTK-on-your-machine"]
    - else: ["https://www.microsoft.com/en-us/cognitive-toolkit/#features"]
  sysreq: ["https://docs.microsoft.com/en-us/cognitive-toolkit/test-configurations"]
  license: ["https://github.com/Microsoft/CNTK/blob/master/LICENSE.md"]
  rating:
    - ["Capterra", "u", "https://www.capterra.com/p/121790/False/"]
    - ["G2CROWD", "u", "https://www.g2crowd.com/products/microsoft-cognitive-toolkit-formerly-cntk/reviews"]
  status: ["https://github.com/Microsoft/CNTK/graphs/contributors"]

rating:
  - name: "Capterra"
    rate: [5, 5]
    num: 5
  - name: "G2CROWD"
    rate: [4.8, 5]
    num: 4

---
  * In [System Requirements](#sysreq), the presented set of product versions is not restrictive, i.e. CNTK may work well in many other configurations.