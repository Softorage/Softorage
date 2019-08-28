---
title: "Apache Spark"

description: "Distributed general-purpose cluster-computing framework"

image: "https://upload.wikimedia.org/wikipedia/commons/e/ea/Spark-logo-192x100px.png"

status: ["Active"]

website: "https://spark.apache.org/"

get_it:
  - from: "Authentic"
    url: "https://spark.apache.org/downloads.html"

sysreq:
  -
    min: "Hard Disk: 4-8 disks per node"
  -
    min: "RAM: 8 GB to hundreds of GBs"
  -
    min: "Network connection: 10 Gigabit or higher network"
  -
    min: "Processor cores: 8-16 cores per machine"

developer: ["Matei Zaharia<OD> at UC", "Berkley's AMPLab", "Apache Software Foundation"]

initial_release: ["26 May 2014"]

repository: ["https://github.com/apache/spark"]

written_in: ["Scala", "Java", "Python", "R"]

platform:
  - dskp:
      - name: "Linux"
        type: "official"
      - name: "Windows"
        type: "official"
      - name: macOS"
        type: "official"
      - name: "Unix(like)"
        type: "official"
  - else:
      - name: "Scala"
        type: "official"
      - name: "Python"
        type: "official"
      - name: "Java"
        type: "official"
      - name: "R"
        type: "official"
      - name: "SQL"
        type: "official"

categories: ["Data Analytics", "Machine Learning", "Framework"]

license: ["Apache v2"]

social:
  - name: "Wikipedia"
    url: "https://en.wikipedia.org/wiki/Apache_Spark"

source:
  overview: ["https://jaceklaskowski.gitbooks.io/mastering-apache-spark/spark-overview.html", "https://spark.apache.org/"]
  developer: ["https://www.computerweekly.com/feature/Apache-Spark-speeds-up-big-data-decision-making", "https://spark.apache.org/history.html"]
  initial_release: ["https://github.com/apache/spark/releases/tag/v1.0.0"]
  written_in: ["https://github.com/apache/spark"]
  platform:
    - dskp: ["https://spark.apache.org/docs/latest/"]
    - else: ["https://jaceklaskowski.gitbooks.io/mastering-apache-spark/spark-overview.html"]
  sysreq: ["https://spark.apache.org/docs/2.4.0/hardware-provisioning.html"]
  license: ["https://github.com/apache/spark/blob/master/LICENSE"]
  rating:
    - name: "TrustRadius"
      type: "user"
      url: "https://www.trustradius.com/products/apache-spark/reviews"
    - name: "PAT RESEARCH"
      type: "expert"
      url: "https://www.predictiveanalyticstoday.com/apache-spark/"
    - name: "PAT RESEARCH"
      type: "user"
      url: "https://www.predictiveanalyticstoday.com/apache-spark/"
  status: ["https://spark.apache.org/news/", "https://github.com/apache/spark/graphs/contributors"]

rating:
  - name: "TrustRadius"
    rate: [8.6, 10]
    num: 101
  - name: "PAT RESEARCH"
    rate: [7.7, 10]
  - name: "PAT RESEARCH"
    rate: [8.2, 10]
    num: 2

---
  > Apache Spark(TM) is an open-source distributed general-purpose cluster computing framework with (mostly) in-memory data processing engine that can do ETL, analytics, machine learning and graph processing on large volumes of data at rest (batch processing) or in motion (streaming processing) with rich concise high-level APIs for the programming languages: Scala, Python, Java, R, and SQL.
  > 
  > In contrast to Hadoop’s two-stage disk-based MapReduce computation engine, Spark’s multi-stage (mostly) in-memory computing engine allows for running most computations in memory, and hence most of the time provides better performance for certain applications, e.g. iterative algorithms or interactive data mining.  
  > \- [Mastering Apache Spark](https://jaceklaskowski.gitbooks.io/mastering-apache-spark/spark-overview.html) by Jacek Laskowski
  
  See [Apache Hadoop]({{< ref "apache-hadoop" >}}).
  
  Libraries:
  1. [**Spark SQL**](https://spark.apache.org/sql/) is Apache Spark's module for working with structured data.
  2. [**Spark Streaming**](https://spark.apache.org/streaming/) makes it easy to build scalable fault-tolerant streaming applications.
  3. [**MLlib**](https://spark.apache.org/mllib/) is Apache Spark's scalable machine learning library.
  4. [**GraphX**](https://spark.apache.org/graphx/) is Apache Spark's API for graphs and graph-parallel computation.
  
  [News](https://spark.apache.org/news/) I [Stack Overflow Q&A](https://stackoverflow.com/questions/tagged/apache-spark) I [Community/Mailing Lists](https://spark.apache.org/community.html) I [Documentation](https://spark.apache.org/documentation.html) I [FAQ](https://spark.apache.org/faq.html) I [IRC](https://webchat.freenode.net/?channels=apache-spark)