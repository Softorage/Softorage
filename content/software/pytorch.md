---
title: "PyTorch"

description: "A machine learning library for Python, based on Torch"

image: "https://cdn.statically.io/gl/Softorage/images/master/software-logo/pytorch.png"

status: ["Active"]

website: "https://pytorch.org/"

get_it:
  - from: "Authentic"
    url: "https://pytorch.org/get-started/locally/"

sysreq:
  -
    min: "Linux distributions that use glibc >= v2.17 I macOS 10.10 (Yosemite) or above I Windows 7 and greater; Windows 10 or greater recommended, Windows Server 2008 r2 and greater"

developer: ["Adam Paszke<OD>", "Sam Gross<OD>", "Soumith Chintala<OD>", "Gregory Chanan<OD>", "Community"]

initial_release: ["24 August 2016"]

repository: ["https://github.com/pytorch/pytorch"]

written_in: ["Python", "C++", "CUDA", "C"]

platform:
  - dskp:
      - name: "Linux"
        type: "official"
      - name: "macOS"
        type: "official"
      - name: "Windows"
        type: "official"
  - else:
      - name: "Python"
        type: "official"
      - name: "C++"
        type: "official"

categories: ["Machine Learning", "Deep Learning", "Neural Networks", "Framework"]

license: ["BSD-3"]

social:
  - name: "Facebook"
    url: "https://www.facebook.com/pytorch"
  - name: "Twitter"
    url: "https://twitter.com/pytorch"
  - name: "Wikipedia"
    url: "https://en.wikipedia.org/wiki/PyTorch"
  - name: "GitHub"
    url: "https://github.com/pytorch/pytorch"

source:
  overview: ["https://github.com/pytorch/pytorch/blob/master/README.md#more-about-pytorch", "http://dl4nlp.info/en/latest/", "https://pytorch.org/", "https://github.com/pytorch/pytorch/blob/master/README.md", "https://docs.nvidia.com/deeplearning/dgx/pytorch-release-notes/overview.html"]
  developer: ["https://github.com/pytorch/pytorch/graphs/contributors", "https://en.wikipedia.org/w/index.php?title=PyTorch&oldid=881109145"]
  initial_release: ["https://github.com/pytorch/pytorch/releases/tag/v0.1.1"]
  written_in: ["https://github.com/pytorch/pytorch", "https://en.wikipedia.org/w/index.php?title=PyTorch&oldid=881109145"]
  platform:
    - dskp: ["https://pytorch.org/get-started/locally/"]
    - else: ["https://github.com/pytorch/pytorch/blob/master/README.md#extensions-without-pain", "https://github.com/pytorch/pytorch/blob/master/README.md#python-first"]
  sysreq: ["https://pytorch.org/get-started/locally/"]
  license: ["https://github.com/pytorch/pytorch/blob/master/LICENSE"]
  rating:
    - name: "InfoWorld"
      type: "expert"
      url: "https://www.infoworld.com/article/3289633/deep-learning/pytorch-review-a-deep-learning-framework-built-for-speed.html"
  status: ["https://github.com/pytorch/pytorch/graphs/contributors", "https://pytorch.org/blog/"]

rating:
  - name: "InfoWorld"
    rate: [4.5, 5]
---
  PyTorch is an open-source [machine learning](/categories/machine-learning) library for Python, based on [Torch](/software/torch/), used for applications such as natural language processing. One can also reuse Python packages such as [NumPy](/software/numpy/), [SciPy](/software/scipy-library/) and Cython to extend PyTorch when needed.
  
  > PyTorch provides two high-level features:
  > 
  > * Tensor computation (like NumPy) with strong GPU acceleration
  > * Deep neural networks built on a tape-based autodiff system
  > \- [README.md on GitHub repo](https://github.com/pytorch/pytorch/blob/master/README.md)
  
  > Automatic differentiation is done with a tape-based system at both a functional and neural network layer level. This functionality brings a high level of flexibility and speed as a deep learning framework and provides accelerated NumPy-like functionality.
  > 
  > PyTorch also includes standard defined neural network layers, deep learning optimizers, data loading utilities, and multi-gpu and multi-node support. Functions are executed immediately instead of enqueued in a static graph, improving ease of use and a sophisticated debugging experience.
  > \- [NVIDIA - DEEP LEARNING FRAMEWORKS DOCUMENTATION](https://docs.nvidia.com/deeplearning/dgx/pytorch-release-notes/overview.html)
  
  [Blog](https://pytorch.org/blog) I [Documentation](https://pytorch.org/docs) I [Slack](https://pytorch.slack.com/) I [FAQ](https://pytorch.org/docs/stable/notes/faq.html) I [PyTorch Discuss Q&A](https://discuss.pytorch.org/) I [Wiki](https://github.com/pytorch/pytorch/wiki)

