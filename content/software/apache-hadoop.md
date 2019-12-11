---
title: "Apache Hadoop"

description: "A software framework for distributed storage that facilitates using a network of many computers to solve problems involving massive amounts of data and computation using MapReduce programming model"

image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Hadoop_logo_new.svg/640px-Hadoop_logo_new.svg.png"

status: ["Active"]

website: "https://hadoop.apache.org/"

get_it:
  - from: "Authentic"
    url: "https://hadoop.apache.org/releases.html"

sysreq:
  -
    min: "Software: Java 7 for Apache Hadoop v2.7 or later | Java 6 is supported by v2.6 or earlier"
    optm: "Hardware: Intel Core 2  Duo/Quad/hex/Octa or higher end 64 bit processor PC or Laptop (Minimum operating frequency of 2.5GHz)"
  -
    min: "Software: SSH installed and SSHD running to use the Hadoop scripts that manage remote Hadoop daemons"
    optm: "Hardware: Hard Disk capacity of 1 - 4 TB"
  -
    min: ""
    optm: "Hardware: 64 - 512 GB RAM"
  -
    min: ""
    optm: "Hardware: 10 Gigabit Ethernet or Bonded Gigabit Ethernet"

developer: ["Apache Software Foundation"]

initial_release: ["1 April 2006"]

repository: ["https://git-wip-us.apache.org/repos/asf/hadoop.git", "https://github.com/apache/hadoop"]

written_in: ["Java", "C++", "C"]

platform:
  - dskp:
      - name: "Linux"
        type: "official"
      - name: "Windows"
        type: "official"

categories: ["Distributed File System", "Framework"]

license: ["Apache v2"]

social:
  - name: "Wikipedia"
    url: "https://en.wikipedia.org/wiki/Apache_Hadoop"
  - name: "Twitter"
    url: "https://twitter.com/hadoop"

source:
  overview: ["https://en.wikipedia.org/w/index.php?title=Apache_Hadoop&oldid=878713646", "https://hadoop.apache.org/", "https://hortonworks.com/apache/hadoop/"]
  developer: ["https://hadoop.apache.org/"]
  initial_release: ["https://archive.apache.org/dist/hadoop/common/"]
  written_in: ["https://github.com/apache/hadoop"]
  platform:
    - dskp: ["https://hadoop.apache.org/docs/current/hadoop-project-dist/hadoop-common/SingleCluster.html", "https://wiki.apache.org/hadoop/Hadoop2OnWindows"]
  sysreq: ["https://hadoop.apache.org/docs/current/hadoop-project-dist/hadoop-common/SingleCluster.html", "https://wiki.apache.org/hadoop/HadoopJavaVersions", "https://www.dezyre.com/article/what-are-the-pre-requisites-to-learn-hadoop/170"]
  license: ["https://hadoop.apache.org/releases.html", "https://github.com/apache/hadoop/blob/trunk/LICENSE.txt"]
  rating:
    - name: "TrustRadius"
      type: "user"
      url: "https://www.trustradius.com/products/hadoop/reviews"
    - name: "G2CROWD"
      type: "user"
      url: "https://www.g2crowd.com/products/hadoop-hdfs/reviews"
  status: ["https://blogs.apache.org/hadoop/", "https://hadoop.apache.org/"]

rating:
  - name: "TrustRadius"
    rate: [8, 10]
    num: 214
  - name: "G2CROWD"
    rate: [4.3, 5]
    num: 81

note: |
  * Apache, Apache Hadoop name and logo are trademarks of Apache Software Foundation.
  * Hardware [System requirements](#sysreq) *(optimal)* are not from [official website](https://hadoop.apache.org/).
---
  Apache(TM) Hadoop(R) is a library framework that facilitate using a network of many computers to solve problems involving massive amounts of data and computation providing for [distributed storage](/categories/distributed-file-system) and processing of big data using the MapReduce programming model.
  
  > It is designed to scale up from single servers to thousands of machines, each offering local computation and storage. Rather than rely on hardware to deliver high-availability, the library itself is designed to detect and handle failures at the application layer, so delivering a highly-available service on top of a cluster of computers, each of which may be prone to failures.  
  > \- [Official website](https://hadoop.apache.org/)
  
  When a node fails, processing is re-directed to the remaining nodes in the cluster and data is automatically re-replicated in preparation for future node failures, making Apache Hadoop resilient.
  
  [Blog](https://blogs.apache.org/hadoop/) I [News](https://hadoop.apache.org/news.html) I [Mailing lists](https://hadoop.apache.org/mailing_lists.html) I [Wiki](https://wiki.apache.org/hadoop) I [Documentation](https://hadoop.apache.org/docs/current/) I [FAQ](https://wiki.apache.org/hadoop/FAQ) I [IRC](https://webchat.freenode.net/?channels=hadoop)
