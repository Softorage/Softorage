---
title: "MALLET"

info: "A Java-based toolkit for machine learning applications on text"

status: "Active"

website: ["http://mallet.cs.umass.edu"]

get_it:
  - ["Authentic", "http://mallet.cs.umass.edu/download.php"]

description: |
  MALLET is MAchine Learning for LanguagE Toolkit.
  
  > MALLET is a Java-based package for statistical natural language processing, document classification, clustering, topic modeling, information extraction, and other machine learning applications to text.
  > \- [Official website](http://mallet.cs.umass.edu/)
  
  MALLET includes tools for document classification, sequence tagging, topic modeling.
  
  > Many of the algorithms in MALLET depend on numerical optimization. MALLET includes an efficient implementation of Limited Memory BFGS, among many other optimization methods.
  > In addition to sophisticated Machine Learning applications, MALLET includes routines for transforming text documents into numerical representations that can then be processed efficiently. This process is implemented through a flexible system of "pipes", which handle distinct tasks such as tokenizing strings, removing stopwords, and converting sequences into count vectors.
  > \- [Official website](http://mallet.cs.umass.edu/)
  
  [Stack Overflow Q&A](http://stackoverflow.com/questions/tagged/mallet) I [API Reference](http://mallet.cs.umass.edu/api)

developer: ["Andrew McCallum with contributions from several graduate students and staff"]

repository: ["https://github.com/mimno/Mallet"]

written_in: ["Java"]

platform:
  - dskp:
      - ["Linux", "o"]
      - ["macOS", "o"]
      - ["Windows", "o"]
      - ["Unix(like)", "o"]
  - else:
      - ["Java", "o"]

categories: ["Machine Learning", "Framework"]

license: ["Apache v2+"]

social:
  - name: "Wikipedia"
    url: "https://en.wikipedia.org/wiki/Mallet_(software_project)"
  - name: "GitHub"
    url: "https://github.com/mimno/Mallet"

source:
  description: ["http://mallet.cs.umass.edu/"]
  developer: ["http://mallet.cs.umass.edu/about.php"]
  written_in: ["https://github.com/mimno/Mallet"]
  platform:
    - else: ["http://mallet.cs.umass.edu/download.php"]
  license: ["https://github.com/mimno/Mallet/blob/master/LICENSE"]
  rating:
    - ["PAT RESEARCH", "e", "https://www.predictiveanalyticstoday.com/mallet/"]
    - ["PAT RESEARCH", "u", "https://www.predictiveanalyticstoday.com/mallet/"]
    - ["G2CROWD", "u", "https://www.g2crowd.com/products/mallet/reviews"]
  status: ["https://github.com/mimno/Mallet/graphs/contributors"]

rating:
  - name: "PAT RESEARCH"
    rate: [7.6, 10]
  - name: "PAT RESEARCH"
    rate: [8.2, 10]
    num: 1
  - name: "G2CROWD"
    rate: [3, 5]
    num: 1

---
  * On [official website](http://mallet.cs.umass.edu), [license](#license) for code is stated to be Common Public License v1, while at the repository on GitHub, it is Apache v2. The license is taken as Apache v2 considering [this commit on GitHub](https://github.com/mimno/Mallet/commit/35ea9c69ff566bb7975fdb84868da2e989292219).