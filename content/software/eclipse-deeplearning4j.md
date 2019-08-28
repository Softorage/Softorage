---
title: "Eclipse Deeplearning4j"

description: "A distributed, deep learning library for Java virtual machine (JVM)"

status: ["Active"]

website: "https://deeplearning4j.org/"

get_it:
  - from: "Authentic"
    url: "https://deeplearning4j.org/docs/latest/deeplearning4j-quickstart"

sysreq:
  -
    min: "4 GB RAM"
    recm: "8 GB RAM"

developer: ["Adam Gibson", "Chris Nicholson", "Josh Patterson", "Others"]

initial_release: ["22 February 2014"]

repository: ["https://github.com/deeplearning4j/deeplearning4j"]

written_in: ["Java", "C++", "Python", "JavaScript", "Scala", "Cuda"]

platform:
  - dskp:
      - name: "Linux"
        type: "official"
      - name: "Windows"
        type: "official"
  - else:
      - name: "Java"
        type: "official"
      - name: "Scala"
        type: "official"
      - name: "Clojure"
        type: "official"

categories: ["Deep Learning", "Machine Learning", "Artificial Intelligence", "Framework"]

license: ["Apache v2"]

social:
  - name: "Facebook"
    url: "https://www.facebook.com/deeplearning4j/"
  - name: "Twitter"
    url: "https://twitter.com/deeplearning4j"
  - name: "Wikipedia"
    url: "https://en.wikipedia.org/wiki/Deeplearning4j"
  - name: "GitHub"
    url: "https://github.com/deeplearning4j/deeplearning4j"

source:
  overview: ["https://deeplearning4j.org/about", "https://www.youtube.com/watch?v=LCsc1hFuNac"]
  developer: ["https://en.wikipedia.org/w/index.php?title=Deeplearning4j&oldid=875142026", "https://github.com/deeplearning4j/deeplearning4j/graphs/contributors"]
  initial_release: ["https://github.com/deeplearning4j/deeplearning4j/releases/tag/deeplearning4j-parent-0.0.0.1"]
  written_in: ["https://github.com/deeplearning4j/deeplearning4j/"]
  platform:
    - dskp: ["https://deeplearning4j.org/docs/latest/deeplearning4j-quickstart"]
    - else: ["https://deeplearning4j.org/about"]
  sysreq: ["https://deeplearning4j.org/docs/latest/deeplearning4j-config-memory"]
  license: ["https://github.com/deeplearning4j/deeplearning4j/blob/master/LICENSE"]
  rating:
    - name: "PAT RESEARCH"
      type: "user"
      url: "https://www.predictiveanalyticstoday.com/deeplearning4j/"
    - name: "PAT RESEARCH"
      type: "expert"
      url: "https://www.predictiveanalyticstoday.com/deeplearning4j/"
    - name: "G2CROWD"
      type: "user"
      url: "https://www.g2crowd.com/products/deeplearning4j/reviews"
  status: ["https://github.com/deeplearning4j/deeplearning4j/graphs/contributors", "https://deeplearning4j.org/release-notes"]

rating:
  - name: "PAT RESEARCH"
    rate: [8.2, 10]
    num: 1
  - name: "PAT RESEARCH"
    rate: [7.8, 10]
  - name: "G2CROWD"
    rate: [3.5, 5]
    num: 1

note: |
  * Please read the docs [here](https://deeplearning4j.org/docs/latest/deeplearning4j-config-gpu-cpu) completely for proper understanding of [system requirements and configuration](#sysreq).
  * Eclipse Deeplearning4j will work on [platform](#platform) where you can have the [prerequisites](https://deeplearning4j.org/docs/latest/deeplearning4j-quickstart#prerequisites):
    * Java (developer version) 1.7 or later (Only 64-Bit versions supported)
    * Apache Maven (automated build and dependency manager)
    * IntelliJ IDEA or Eclipse
    * Git
---
  Eclipse Deeplearning4j is a deep learning programming library written for Java and Scala and a computing framework with wide support for deep learning algorithms.
  
  > There are a lot of knobs to turn when you’re training a distributed deep-learning network. We’ve done our best to explain them, so that Eclipse Deeplearning4j can serve as a DIY tool for Java, Scala and Clojure programmers working on Hadoop and other file systems.
  > \- [Official website](https://deeplearning4j.org/about)
  
  See [Apache Hadoop]({{< ref "apache-hadoop" >}}).
  
  Deeplearning4j includes implementations of the restricted Boltzmann machine, deep auto-encoder, deep belief net, stacked denoising auto-encoder and recursive neural tensor network, word2vec, doc2vec, and GloVe. These algorithms also include distributed parallel versions that integrate with [Apache Hadoop]({{< ref "apache-hadoop" >}}) and [Apache Spark]({{< ref "apache-spark" >}}).
  
  [Release Notes](https://deeplearning4j.org/release-notes) I [Gitter chat](https://gitter.im/deeplearning4j/deeplearning4j) I [Documentation](https://deeplearning4j.org/docs/latest/) I [Tutorials](https://deeplearning4j.org/tutorials/setup) I [API Reference](https://deeplearning4j.org/api/latest/) I [Sample Projects](https://github.com/deeplearning4j/dl4j-examples) I [FAQ](https://deeplearning4j.org/faq) I [Stack Overflow Q&A](https://stackoverflow.com/questions/tagged/deeplearning4j)