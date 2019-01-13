---
title: "scikit-learn"

info: "A machine learning library for the Python programming language"

image: "https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg"

status: "Active"

website: ["https://scikit-learn.org/"]

get_it:
  - ["Authentic", "https://scikit-learn.org/stable/install.html"]

description: |
  scikit-learn is an open source [machine learning](/search#machine_learning) library featuring classification, regression, clustering, dimensionality reduction, model selection and preprocessing. It has tools for [data mining](/search#data_mining) and [data analysis](/search#data_analysis), and is built on [NumPy](/softwares/numpy/), [SciPy](/softwares/scipy/), and [matplotlib](/softwares/matplotlib/).
  
  As per [official website](https://scikit-learn.org/stable/index.html), it features:
  * Classification : Identifying to which category an object belongs to
  * Regression : Predicting a continuous-valued attribute associated with an object
  * Clustering : Automatic grouping of similar objects into sets
  * Dimensionality reduction : Reducing the number of random variables to consider
  * Model selection : Comparing, validating and choosing parameters and models
  * Preprocessing : Feature extraction and normalization
  
  [Documentation](https://scikit-learn.org/stable/documentation.html) I [Wiki](https://github.com/scikit-learn/scikit-learn/wiki) I [Mailing list](https://mail.python.org/mailman/listinfo/scikit-learn) I [Stack Overflow](https://stackoverflow.com/questions/tagged/scikit-learn) I [FAQ](https://scikit-learn.org/stable/faq.html) I [IRC](https://webchat.freenode.net/?channels=scikit-learn)

sysreq:
  -
    min: "Python (>= 2.7 or >= 3.4), NumPy (>= 1.8.2), SciPy (>= 0.13.3)."

developer: ["David Cournapeau(original developer)", "contributors"]

initial_release: "June 2007"

repository: ["https://github.com/scikit-learn/scikit-learn"]

written_in: ["Python", "Cython", "C", "C++"]

platform:
  - dskp:
      - ["Linux", "o"]
      - ["Windows", "o"]
      - ["macOS", "o"]
      - ["Unix(like)", "o"]

categories: ["Machine Learning", "Data Mining", "Data Analysis"]

license: ["BSD-3"]

social:
  - name: "Wikipedia"
    url: "https://en.wikipedia.org/wiki/Scikit-learn"
  - name: "GitHub"
    url: "https://github.com/scikit-learn/scikit-learn"

source:
  description: ["https://scikit-learn.org/stable/index.html"]
  developer: ["https://scikit-learn.org/stable/about.html", "https://github.com/scikit-learn/scikit-learn/graphs/contributors"]
  initial_release: ["https://scikit-learn.org/stable/about.html", "https://en.wikipedia.org/wiki/Scikit-learn"]
  written_in: ["https://github.com/scikit-learn/scikit-learn", "https://en.wikipedia.org/wiki/Scikit-learn"]
  platform:
    - dskp: ["https://scikit-learn.org/stable/install.html"]
  sysreq: ["https://scikit-learn.org/stable/install.html"]
  license: ["https://github.com/scikit-learn/scikit-learn/blob/master/COPYING"]
  rating:
    - ["InfoWorld", "e", "https://www.infoworld.com/article/3158509/analytics/review-scikit-learn-shines-for-simpler-machine-learning.html"]
    - ["G2CROWD", "u", "https://www.g2crowd.com/products/scikit-learn/reviews"]
  status: ["https://scikit-learn.org/dev/whats_new.html", "https://github.com/scikit-learn/scikit-learn/graphs/contributors"]

rating:
  - name: "InfoWorld"
    rate: [4.5, 5]
  - name: "G2CROWD"
    rate: [4.9, 5]
    num: 30

---
* Warning: scikit-learn 0.20 is the last version to support Python 2.7 and Python 3.4. scikit-learn 0.21 will require Python 3.5 or newer.