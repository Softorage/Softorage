---
layout: default
no-navbar-overlap: true
permalink: /contributing/
---
# Contributing (WIP)

Thank you for giving time for the project.

## Terminologies

*When a word is presented like `this` it means the word is in context of following terminologies. In case a word is presented normally like 'this', that means the meaning of the word in common parlance is expected to be conveyed.*
  
`Softpage`: Each software's markdown file is rendered as a seperate page. Such a page forms a dedicated page for that software where software's information is presented. Such a page is called `Softpage`.
  
  
`Characteristics`: A software's markdown file stores information about the software in the form of [front-matter](https://jekyllrb.com/docs/front-matter/) variables. In a software's markdown file, these variables have been arranged in a systematic way forming levels of hierarchy, so that expected output is rendered on the softpage. The primary level of variables constitutes `charachteristics` of that software. From secondary level onwards, the pattern of arrangement for variables and their values may differ from `characteristics` to `characteristics`.  
Following are primary `characteristics`, along with brief intro:  
\# 1 'title': Title of the software.  
\# 2 'info': Information about software, in short. It is shown on `softpage` just below `title` and forms part of the table on Search page.  
\# 3 'image': Logo image of software  
\# 4 'status': Whether the software or its developement is *active*, *discontinued* or *unknown*.  
\# 5 'website': Website URL of software  
\# 6 'get_it': Link to official Download page, or page from where software can be obtained  
\# 7 'description': Description of software, in brief but not in short.  
\# 8 'sysreq': System requirements  
\# 9 'developer': Developer(s) of software.  
\# 10 'initial_release': When was the software initially released  
\# 11 'repository': Where code is hosted, applies only for open-source softwares  
\# 12 'written_in': Computer languages the software is written in  
\# 13 'platform': Platform(Operating System) on which the software runs.  
\# 14 'categories': Whta type of software it is. Helps with classification  
\# 15 'license': License under which the software's code is released  
\# 16 'social': Social presence of software, its developers or community behind it.  
\# 17 'source': Discussed below  
\# 18 'rating': Ratings and Reviews  
*Currently, new entries for `characteristics` are not on the table, though if you have a related idea, feel free to [open an issue](https://gitlab.com/invirds/invirds.gitlab.io/issues).*
  
  
`Infocard`: On a `softpage`, some of software's `characteristics` are presented as cards. Each such card is called an `infocard`.
  
  
`source`: `source` is the source from where the information shown in infocard is obtained. An accepted `source` is a source which is as specific as possible and which is likely to be availabe or retrivable in future, and possibilty of which to be unreachable in future is neglible at present. It may be a page of a website, or a page number of a book, or any globally tracable piece of information which can be retrived later. In case source is a website page, just its URL can form part of `source`, however, in case a source is in a book, the format changes.  
For example,  
1. URL1, URL2
2. URL1, ["URL-B", Specifications of `source`], URL2
  
2nd case is when a source is not a website. Say the information we are referring to can be found at line no. 12, page no.34, of The Example Book edition 5 by Author Example. Then 'Specification of `source`' is: "line no. 12, page no.34, of The Example Book edition 5 by Author Example". It should be noted that 'Specification of `source`' shall be as detailed as possible and needed. This includes specifying line number, page number, book name along with its edition details, author name, etc. URL-B is the URL on the web from where that book can be bought or downloaded or acquired for possesion whether in electronic, physical or any such form. This include link to Amazon page of the book or official website for the book or else. It may be noted here that in case more than one URLs need to be specified as URL-B, they may be so as given in example below.  
Example,  
1. URL1, [[URL-B1, URL-B2], Specification of `source`], URL2
  
  
**There is a need to see whether above info about source applies to all of our infocards' sources.**
  
---
---
  
[Contributing Template](https://github.com/nayafia/contributing-template/blob/master/CONTRIBUTING-template.md)  
[Code of conduct](https://www.contributor-covenant.org/)