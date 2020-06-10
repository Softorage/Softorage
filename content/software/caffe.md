---
title: "Caffe"

description: "Caffe is a deep learning framework made with expression, speed, and modularity in mind"

status: ["Active"]

website: "http://caffe.berkeleyvision.org/"

get_it:
  - from: "Authentic"
    url: "http://caffe.berkeleyvision.org/installation.html"

sysreq:
  general:
    -
      min: "CUDA v5.5, and 5.0 (considered legacy)"
      recm: "CUDA v6.*"
      optm: "CUDA v7+"
    -
      min: "Basic Linear Algebra Subprograms via ATLAS, MKL, or OpenBLAS I Boost >= 1.55 I protobuf, glog, gflags, hdf5"
      recm: "Minimum plus (optional): OpenCV >= 2.4 including 3.0 I IO libraries: lmdb, leveldb (note: leveldb requires snappy) I cuDNN for GPU acceleration (v6)"
      optm: ""
    -
      min: "For Python Caffe: Python 2.7 or Python 3.3+, numpy (>= 1.7), boost-provided boost.python I For MATLAB Caffe: MATLAB with the mex compiler."
      recm: ""
      optm: ""

developer: ["Yangqing Jia<OD>", "Berkeley Vision and Learning Center(BVLC)/Berkeley AI Research(BAIR)"]

initial_release: ["10 October 2013"]

repository: ["https://github.com/BVLC/caffe"]

written_in: ["C++", "Python", "CUDA"]

platform:
  - dskp:
      - name: "Linux"
        official: true
      - name: "macOS"
        official: true
      - name: "Windows"
        official: true
  - else:
      - name: "Python"
        official: true
      - name: "MATLAB"
        official: true

categories: ["Deep Learning", "Framework"]

license: ["BSD-2"]

social:
  - name: "Wikipedia"
    url: "https://en.wikipedia.org/wiki/Caffe_(software)"
  - name: "GitHub"
    url: "https://github.com/BVLC/caffe"

source:
  overview: ["http://caffe.berkeleyvision.org/"]
  developer: ["http://caffe.berkeleyvision.org/", "https://github.com/BVLC/caffe/blob/master/README.md#caffe"]
  initial_release: ["https://github.com/BVLC/caffe/releases/tag/v0.1"]
  written_in: ["https://github.com/BVLC/caffe", "https://en.wikipedia.org/w/index.php?title=Caffe_(software)&oldid=881123611"]
  platform:
    - dskp: ["http://caffe.berkeleyvision.org/installation.html#installation"]
    - else: ["http://caffe.berkeleyvision.org/installation.html#python", "http://caffe.berkeleyvision.org/installation.html#matlab"]
  sysreq:
    general: ["http://caffe.berkeleyvision.org/installation.html#prerequisites"]
  license: ["https://github.com/BVLC/caffe/blob/master/LICENSE"]
  rating:
    - name: "InfoWorld"
      type: "expert"
      url: "https://www.infoworld.com/article/3154273/analytics/review-caffe-deep-learning-conquers-image-classification.html"
  status: ["https://github.com/BVLC/caffe/graphs/contributors"]

rating:
  - name: "InfoWorld"
    rate: [4, 5]
---
  Caffe (Convolutional Architecture for Fast Feature Embedding) is a [deep learning](/categories/deep-learning) framework, originally developed at University of California, Berkeley.
  
  > Caffe is a deep learning framework made with expression, speed, and modularity in mind. It is developed by Berkeley AI Research (BAIR) and by community contributors. Yangqing Jia created the project during his PhD at UC Berkeley.
  > \- [Official website](http://caffe.berkeleyvision.org/#caffe)
  
  Caffe allows switching between CPU and GPU by setting a single flag. Caffe is among the fastest ConvNet implementations available.
  > Caffe can process over 60M images per day with a single NVIDIA K40 GPU*. That’s 1 ms/image for inference and 4 ms/image for learning and more recent library versions and hardware are faster still. \- [Official website](http://caffe.berkeleyvision.org/#why-caffe)
  
  [Documentation](http://caffe.berkeleyvision.org/#Documentation)  I  [Mailing list - Users](https://groups.google.com/forum/#!forum/caffe-users)


