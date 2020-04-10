---
title: "Apache SystemML"

description: "A machine learning system with support for Java 8+, Scala 2.11+, Python 2.7/3.5+, Hadoop 2.6+, and Spark 2.1+"

image: "https://cdn.statically.io/img/img.softorage.com/software-logo/apache-systemml.png?h=64"

status: ["Active"]

website: "[https://systemml.apache.org/]"

get_it:
  - from: "Authentic"
    url: "https://systemml.apache.org/download"

developer: ["Apache Software Foundation"]

repository: ["https://github.com/apache/systemml"]

written_in: ["Java", "R", "Python", "Scala"]

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

categories: ["Machine Learning", "Deep Learning"]

license: ["Apache v2"]

social:
  - name: "Twitter"
    url: "https://twitter.com/ApacheSystemML"
  - name: "YouTube"
    url: "https://www.youtube.com/channel/UCQwUHIc5SjqNIppUH6xbxXQ"
  - name: "Medium"
    url: "https://medium.com/@apachesystemml"
  - name: "GitHub"
    url: "https://github.com/apache/systemml"
  - name: "Wikipedia"
    url: "https://en.wikipedia.org/wiki/Apache_SystemML"

source:
  overview: ["https://systemml.apache.org/", "https://github.com/apache/systemml"]
  developer: ["https://blogs.apache.org/foundation/entry/the-apache-software-foundation-announces13"]
  written_in: ["https://github.com/apache/systemml", "https://en.wikipedia.org/w/index.php?title=Apache_SystemML&oldid=789525799"]
  platform:
    - dskp: ["https://systemml.apache.org/install-systemml.html", "https://spark.apache.org/docs/latest/"]
  license: ["https://github.com/apache/systemml/blob/master/LICENSE", "https://www.apache.org/licenses/"]
  rating:
    - name: "G2CROWD"
      type: "user"
      url: "https://www.g2crowd.com/products/apache-systemml/reviews"
  status: ["https://github.com/apache/systemml/graphs/contributors"]

rating:
  - name: "G2CROWD"
    rate: [4, 5]
    num: 1

note: |
  * [Apache Spark](/software/apache-spark/) is a prerequisite for installing Apache SystemML. Hence, [platforms for which Apache Spark is available](/software/apache-spark/#platform) are considered for Apache SystemML.
  
---
  Apache SystemML is a [machine learning](/categories/machine-learning) system with support for Java 8+, Scala 2.11+, Python 2.7/3.5+, Hadoop 2.6+, and Spark 2.1+. It provides a workplace for [machine learning](/categories/machine-learning) using big data. As It runs on top of [Apache Spark](/software/apache-spark/), it automatically scales data, line by line, determining whether the code should be run on the driver or an [Apache Spark](/software/apache-spark/) cluster. Future releases may include additional deep learning with GPU capabilities such as importing and running neural network architectures and pre-trained models for training.
  
  Apache SystemML is customizable with R-like and Python-like languages. It also supports multiple execution modes, including Spark MLContext API, Spark Batch, Hadoop Batch, Standalone, and JMLC and automatic optimization based on data and cluster characteristics to ensure both efficiency and scalability.
  
  [Documentation](https://systemml.apache.org/documentation.html) I [Mailing lists](https://systemml.apache.org/community.html#mailing-list)



