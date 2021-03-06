---
title: "Torch"

description: "Torch is a machine learning library and scientific computing framework for LuaJIT"

image: "https://cdn.statically.io/img/img.softorage.com/software-logo/torch.png?h=64"

status: ["Discontinued"]

website: "http://torch.ch/"

get_it:
  - from: "Authentic"
    url: "http://torch.ch/docs/getting-started.html#_"

sysreq:
  general:
    -
      recm: "NVIDIA® CUDA® 7.5 or newer (For Pascal GPUs, CUDA 8.0 or newer)"
    -
      recm: "cuDNN v5.0 or newer"
    -
      recm: "Ubuntu 14.x or newer (or any 64-bit Linux if you choose to build from source)"

developer: ["Ronan Collobert<OD>", "Koray Kavukcuoglu<OD>", "Clement Farabet<OD>", "Soumith Chintala", "Community"]

initial_release: ["October 2002"]

repository: ["https://github.com/torch/torch7"]

written_in: ["Lua", "C", "LuaJIT", "CUDA", "C++"]

platform:
  - dskp:
      - name: "Linux"
        official: true
      - name: "macOS"
        official: true
  - else:
      - name: "LuaJIT"
        official: true
      - name: "C"
        official: true

categories: ["Machine Learning", "Deep Learning", "Framework"]

license: ["BSD-3"]

social:
  - name: "Wikipedia"
    url: "https://en.wikipedia.org/wiki/Torch_(machine_learning)"
  - name: "GitHub"
    url: "https://github.com/torch/torch7"

source:
  overview: ["http://torch.ch/#what-is-torch"]
  developer: ["http://torch.ch/whoweare.html", "https://en.wikipedia.org/w/index.php?title=Torch_(machine_learning)&oldid=876975600"]
  initial_release: ["http://citeseerx.ist.psu.edu/viewdoc/download;jsessionid=CBB0C8A5FE34F6D6DAFF997F6B6A205A?doi=10.1.1.8.9850&rep=rep1&type=pdf"]
  written_in: ["https://github.com/torch/torch7", "https://en.wikipedia.org/w/index.php?title=Torch_(machine_learning)&oldid=876975600"]
  platform:
    - dskp: ["http://torch.ch/docs/getting-started.html#_"]
    - else: ["http://torch.ch/#what-is-torch"]
  sysreq:
    general: ["https://www.nvidia.com/en-gb/data-center/gpu-accelerated-applications/torch/"]
  license: ["https://github.com/torch/torch7/blob/master/COPYRIGHT.txt"]
  status: ["https://github.com/torch/torch7#development-status"]

note: |
  * Torch is not in active development. Check out actively maintained [ATen](https://github.com/pytorch/pytorch/tree/master/aten) (which is part of [PyTorch](/software/pytorch)).
  
---
  Torch is a scientific computing framework with support for [machine learning](/categories/machine-learning/) algorithms. It provides N-dimensional arrays, with support for routines for indexing, slicing, transposing, etc.
  
  Torch puts GPU first. It has an interface to C via LuaJIT, linear algebra & numeric optimization routines, [neural network](/categories/neural-networks/) and energy-based models. It is embeddable, with ports to iOS and Android backends.
  
  [Documentation](http://torch.ch/docs/getting-started.html#_)  I  [Wiki](https://github.com/torch/torch7/wiki/Cheatsheet)  I  [Mailing list](https://groups.google.com/forum/embed/?place=forum%2Ftorch7#!forum/torch7)  I  [Gitter chat](https://gitter.im/torch/torch7)
  
