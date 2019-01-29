---
layout: default
title: Get Involved
description: Help make invirds better
permalink: /get-involved/
---
<div class="container-fluid bg-nav text-clr1 text-center py-3 position-relative shadow-sm">
  <div style="height:3.5rem;"></div>
  <h1>{{ page.title }}</h1>
  <p>{{ page.description }}</p>
</div>

<div class="container-fluid bg-nav text-antinav p-3" markdown="1">

---

<div class="text-center">

Thank you for giving time for the project. Contributors are the primary pillar of invirds, who keep it updated to latest advancements and with trends.

We want to create a welcoming environment for everyone who is interested in contributing. Going through these guidelines ensures you and us are on the same page and that everyone's time and efforts are saved.

</div>

---

No matter how you want to contribute, we welcome new drive and ideas and any contributions to improve invirds.

1. **Spread the word**  
   This is one of the most appreciated way in which you can help us. Tell your relatives, family, friends and enemies about invirds. Also, every `softpage` has share buttons which allow to share that page's URL in various ways.
2. **Add softwares to invirds**  
   There is [a GUI available for adding softwares](/ASTi/) (called ASTi) and requires next to no technical skills. All documentation is provided as `i-buttons` in ASTi. Check it out.
3. **Help us maintain documentaion**  
   ASTi's documentation is primarily maintained at the ASTi's repo, and at reasonable intervals it is consolidated and used to update the documentation on invirds(that relates to ASTi). So, in case you want to help with ASTi's documentation, please see ASTi's docs and send pull requests there. Docs at invirds relating to ASTi will be updated based on ASTi's docs only.
4. **Help with developement & feedback**  
   To help with developement, you need to have some knowledge about Jekyll, Shopify's Liquid templating language, YAML and HTML, CSS and JavaScript+jQuery. In case you want to give feedback, submit bug reports or feature requests, please [file an issue on GitLab](https://gitlab.com/invirds/invirds.gitlab.io/issues). Helping us with developement might mean that you would need to spend slightly more amount of time with us than other two methods above, and hey, your help means a lot to us. If you are ready to dive into developement, read below :)

---
**Contents**
* Do not remove this line (it will not be displayed)
{:toc}
---

invirds primarily runs on Jekyll. It leverages [collections](https://jekyllrb.com/docs/collections/) feature in Jekyll.

`collections` in brief:  
  collections in Jekyll are what *Custom post types* are in WordPress...almost. Collection is defined in [_config.yml](https://gitlab.com/invirds/invirds.gitlab.io/blob/master/_config.yml) file located at root. In case of invirds, we have defined `collection` as `software`. While defining collections, setting `output` to `true`(look [_config.yml](https://gitlab.com/invirds/invirds.gitlab.io/blob/master/_config.yml)) tells Jekyll to render pages for each collection file located in the _software directory. Default YAML frontmatter for a collection can be defined in _config.yml file; we have defined default permalink structure for `software` `collection`. There is a separate layout for software collection which uses default layout as base. default layout is a very basic one with navigation, footer, and linked CSS, JS dependencies.
  
*TL;DR : The data entered into collection file is rendered into a webpage using already defined layout and permalink structure.*

There are 3 primary elements, understanding of which would enable you to help us in developement.
  1. [Layout file of `softpage`](https://gitlab.com/invirds/invirds.gitlab.io/blob/master/_layouts/software.html)
  2. Format of markdown file for software
  3. ASTi's code

First two of these relate to invirds and third one to ASTi, of course.

---

Let's take a look at some terminologies.

## Terminologies

*When a word is presented like `this` it means the word is in context of following terminologies. In case a word is presented normally like 'this', that means the meaning of the word in common parlance is expected to be conveyed.*
  
### Softpage
Each software's markdown file is rendered as a seperate page. Such a page forms a dedicated page for that software where software's information is presented. Such a page is called `Softpage`.
  
  
### Characteristics
A software's markdown file stores information about the software in the form of [front-matter](https://jekyllrb.com/docs/front-matter/) variables. In a software's markdown file, these variables have been arranged in a systematic way forming levels of hierarchy, so that expected output is rendered on the softpage. The primary level of variables constitutes `charachteristics` of that software. From secondary level onwards, the pattern of arrangement for variables and their values may differ from `characteristics` to `characteristics`.  
Following are primary `characteristics`, along with brief intro:  

1. 'title': Title of the software.  
2. 'info': Information about software, in short. It is shown on `softpage` just below `title` and forms part of the table on Search page.  
3. 'image': Logo image of software  
4. 'status': Whether the software or its developement is *active*, *discontinued* or *unknown*.  
5. 'website': Website URL of software  
6. 'get_it': Link to official Download page, or page from where software can be obtained  
7. 'description': Description of software, in brief but not in short.  
8. 'sysreq': System requirements  
9. 'developer': Developer(s) of software.  
10. 'initial_release': When was the software initially released  
11. 'repository': Where code is hosted, applies only for open-source softwares  
12. 'written_in': Computer languages the software is written in  
13. 'platform': Platform(Operating System) on which the software runs.  
14. 'categories': Whta type of software it is. Helps with classification  
15. 'license': License under which the software's code is released  
16. 'social': Social presence of software, its developers or community behind it.  
17. 'source': Discussed below  
18. 'rating': Ratings and Reviews  

*Currently, new entries for `characteristics` are not on the table, though if you have a related idea, feel free to [open an issue](https://gitlab.com/invirds/invirds.gitlab.io/issues).*
  
  
### Infocard
On a `softpage`, some of software's `characteristics` are presented as cards. Each such card is called an `infocard`.
  
  
### i-button, i-pop & i-content
There is an `i` button on almost every `infocard`, called as `i-button`. Clicking `i-button` of an `infocard` presents information as modal or popover or such. Such element which appears on clicking `i-button` is called `i-pop`, that is modal or popover is `i-pop`. And, content in `i-pop` is `i-content`.
  
  
---

ASTi specific:

### input-field, input-type, input-value & input-option
`input-field` is the form field give in ASTi to input value. The value to be filled in `input-field` is the `input-value`. An `input-field` takes input of a certain type, which is that `input-field`'s `input-type`. To avoid distorted output, `input-value` must in all cases correspond to `input-type` specified. In ASTi, options to choose `input-value` from, are usually provided in `input-field` with the help of `<datalist>` tag. Such options are termed `input-option`s. For example, see license `characteristic` in ASTi.
  
  
### input-name-\*
`*` in `input-name-*` is either one of `field`, `type`, `value` & `option`. Let's take `input-name-option` as an example, which makes value of `*` equals `option` in our example.  
Now, in many cases, there are more than one `input-field`s, usually arranged in columns-rows or such systematic form. In such cases, it becomes essential to also identify which `input-field`'s options are we referring to. `name` in `input-name-option` is that word which identifies the specific `input-field`(s) we are referring to. For example, see get_it `characteristic` in ASTi. There are 2 `input-field`s per record, viz. Name & URL. And, `input-field` in Name column also have `input-option`s. So, when there is a need to mention `input-option` for `input-field`s in Name column, they are mentioned as `input-Name-option` to avoid unnecessary confusion.

---
  
  
### Source
`source` is the source from where the information shown in `infocard` is obtained. An accepted `source` is a source which is as specific as possible and which is likely to be available or retrivable in future, and possibilty of which to be unreachable in future is neglible at present. It may be a page of a website, or a page number of a book, or any globally tracable piece of information which can be retrived later. In case source is a website page, just its URL can form part of `source`, however, in case a source is in a book, the format changes.  
For example,  
1. URL1, URL2
2. URL1, ["URL-B", Specifications of `source`], URL2

2nd case is when a source is not a website. Say the information we are referring to can be found at line no. 12, page no.34, of The Example Book edition 5 by Author Example. Then 'Specification of `source`' is: "line no. 12, page no.34, of The Example Book edition 5 by Author Example". It should be noted that 'Specification of `source`' shall be as detailed as possible and needed. This includes specifying line number, page number, book name along with its edition details, author name, etc. URL-B is the URL on the web from where that book can be bought or downloaded or acquired for possesion whether in electronic, physical or any such form. This include link to Amazon page of the book or official website for the book or else. In case there is no URL to be specified as URL-B, `#` shall be the URL-B.

It may be noted here that in case more than one URLs need to be specified as URL-B, an appropriate one shall be chosen among them and that chosen one shall be `URL-B`. Please note that form as follws must not be used in any case as it will render the output distorted.  
1. URL1, [["URL-B1", "URL-B2"], Specification of `source`], URL2

Note: If using Wikipedia as source, it should be ensured that permanent link(can be found under 'Tools' on the Wikipedia page's sidebar) is used.

  
---
---
  
[Contributing Template](https://github.com/nayafia/contributing-template/blob/master/CONTRIBUTING-template.md)  
[Code of conduct](https://www.contributor-covenant.org/)

</div>