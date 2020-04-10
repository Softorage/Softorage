---
title: "mlpack"

description: "A scalable machine learning library in C++ with a modular C++ API for expert users"

image: "https://cdn.statically.io/img/img.softorage.com/software-logo/mlpack.png?h=64"

status: ["Active"]

website: "https://www.mlpack.org"

get_it:
  - from: "Authentic"
    url: "https://www.mlpack.org/download.html"

sysreq:
  -
    min: "Dependencies: Armadillo >= 6.500.0 (with LAPACK support), Boost (math_c99, program_options, serialization, unit_test_framework, heap, spirit) >= 1.49"
  -
    min: "For Python bindings: setuptools, cython >= 0.24, numpy, pandas >= 0.15.0, pytest-runner"

developer: ["FASTLab at Georgia Tech<OD>", "Other contributors"]

initial_release: ["17 December 2011"]

repository: ["https://github.com/mlpack/mlpack"]

written_in: ["C++"]

platform:
  - dskp:
      - name: "Linux"
        type: "official"
      - name: "macOS"
        type: "official"
      - name: "Windows"
        type: "official"
      - name: "Unix(like)"
        type: "official"
  - else:
      - name: "C++"
        type: "official"

categories: ["Machine Learning", "Framework"]

license: ["LGPL v3 till v1.0.12", "BSD-3 v1.0.12 onward"]

social:
  - name: "Wikipedia"
    url: "https://en.wikipedia.org/wiki/Mlpack"
  - name: "GitHub"
    url: "https://github.com/mlpack/mlpack"

source:
  overview: ["https://www.mlpack.org/about.html"]
  developer: ["https://www.mlpack.org/about.html"]
  initial_release: ["https://www.mlpack.org/history.html", "https://github.com/mlpack/mlpack/releases/tag/mlpack-1.0.0"]
  written_in: ["https://github.com/mlpack/mlpack"]
  platform:
    - dskp: ["https://www.mlpack.org/docs/mlpack-3.0.4/doxygen/build.html"]
    - else: ["https://www.mlpack.org/about.html"]
  sysreq: ["https://www.mlpack.org/docs/mlpack-3.0.4/doxygen/build.html"]
  license: ["https://www.mlpack.org/about.html"]
  rating:
    - name: "OpenReview"
      type: "user"
      url: "https://openreview.net/forum?id=ByltfevYt7"
    - name: "G2CROWD"
      type: "user"
      url: "https://www.g2crowd.com/products/mlpack/reviews"
  status: ["https://github.com/mlpack/mlpack/graphs/contributors", "https://www.mlpack.org/gsocblog/"]

rating:
  - name: "OpenReview"
    rate: [4, 5]
    num: 2
  - name: "G2CROWD"
    rate: [3.5, 5]
    num: 1
---
  > mlpack is a C++ machine learning library with emphasis on scalability, speed, and ease-of-use. Its aim is to make machine learning possible for novice users by means of a simple, consistent API, while simultaneously exploiting C++ language features to provide maximum performance and maximum flexibility for expert users. This is done by providing a set of command-line executables which can be used as black boxes, and a modular C++ API for expert users and researchers to easily make changes to the internals of the algorithms.
  > \- [Official website](https://www.mlpack.org/about.html)
  
  [Developement Blog](https://www.mlpack.org/gsocblog/) I [Documentation](https://www.mlpack.org/docs.html) I [Wiki](https://github.com/mlpack/mlpack/wiki) I [Mailing list](http://lists.mlpack.org/mailman/listinfo/mlpack) I [IRC](https://webchat.freenode.net/?channels=mlpack) I [Stack Overflow Q&A](https://stackoverflow.com/questions/tagged/mlpack)
  



