---
title: "Apache Mahout"

description: "A project of the Apache Software Foundation to produce free implementations of distributed or otherwise scalable machine learning algorithms"

image: "https://upload.wikimedia.org/wikipedia/commons/1/10/Apache_Mahout_Logo.png"

status: ["Active"]

website: "https://mahout.apache.org/"

get_it:
  - from: "Authentic"
    url: "https://mahout.apache.org/general/downloads"

sysreq:
  -
    min: "Java 1.6.x"
  -
    min: "Maven 3.x to build the source code"
  -
    min: "If implemented to work on Apache Hadoop clusters, Hadoop 0.20.0"

developer: ["Apache Software Foundation"]

initial_release: ["7 April 2009"]

repository: ["git://git.apache.org/mahout.git", "https://github.com/apache/mahout"]

written_in: ["Java", "Scala", "Perl 6"]

platform:
  - dskp:
      - name: "Linux"
        type: "official"
      - name: "macOS"
        type: "official"
  - else:
      - name: "Java"
        type: "official"
      - name: "Scala"
        type: "official"

categories: ["Machine Learning", "Framework"]

license: ["Apache v2"]

social:
  - name: "Twitter"
    url: "https://twitter.com/ApacheMahout"
  - name: "Wikipedia"
    url: "https://en.wikipedia.org/wiki/Apache_Mahout"

source:
  overview: ["https://en.wikipedia.org/w/index.php?title=Apache_Mahout&oldid=877076538", "https://www.tutorialspoint.com/mahout/mahout_introduction.htm"]
  developer: ["https://mahout.apache.org"]
  initial_release: ["http://mail-archives.apache.org/mod_mbox/www-announce/200904.mbox/%3C7EDF8CB8-388C-4A44-974E-6977E7AEB396@apache.org%3E"]
  written_in: ["https://github.com/apache/mahout"]
  platform:
    - dskp: ["https://mahout.apache.org/general/downloads#environment", "https://github.com/apache/mahout#setting-up-your-environment"]
    - else: ["https://mahout.apache.org/"]
  sysreq: ["https://mahout.apache.org/users/basics/system-requirements.html"]
  license: ["https://github.com/apache/mahout/blob/master/LICENSE.txt"]
  rating:
    - name: "G2CROWD"
      type: "user"
      url: "https://www.g2crowd.com/products/mahout/reviews"
  status: ["https://mahout.apache.org/", "https://github.com/apache/mahout/graphs/contributors"]

rating:
  - name: "G2CROWD"
    rate: [5, 5]
    num: 1

note: |
  * Apache, Apache Mahout name and logo are trademarks of Apache Software Foundation.
  

---
  Apache Mahout(TM) is an open source project that is primarily used for creating scalable machine learning algorithms. It implements machine learning techniques such as, collaborative filtering, clustering, recommendation and classification.
  
  It also provides Java libraries for common math operations (focused on linear algebra and statistics) and primitive Java collections.
  
  A *mahout* is a word used in South Asian countries to describe one who drives an elephant as its master. The name comes from its close association with [Apache Hadoop]({{< ref "apache-hadoop" >}}) which uses an elephant as its logo. Many of the implementations use the [Apache Hadoop]({{< ref "apache-hadoop" >}}) platform.
  
  [Documentation](https://mahout.apache.org/docs/latest/index.html) I [Mailing Lists/IRC](https://mahout.apache.org/general/mailing-lists) I [FAQ](https://mahout.apache.org/general/faq.html) I [Wiki](https://mahout.apache.org/general/mahout-wiki.html)
  