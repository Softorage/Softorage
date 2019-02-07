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

Thank you for giving time for the project. Contributors are the primary pillar of invirds, who keep it updated to latest advancements and with trends.  
  
We want to create a welcoming environment for everyone who is interested in contributing. Going through these guidelines ensures you and us are on the same page and that everyone's time and efforts are saved.

---

No matter how you want to contribute, we welcome new drive, ideas and any contributions to improve invirds.

To help us, you can:

1. **Spread the word**  
   This is one of the most appreciated way in which you can help us. Tell your relatives, family, friends and enemies about invirds. Also, every `softpage` has share buttons which allow to share that page's URL in various ways.
2. **Add softwares to invirds**  
   There is [a GUI available for adding softwares](/asti/) (called ASTi) and requires next to no technical skills. All documentation is provided as `i-buttons` in ASTi. [Check it out](/asti/).
3. **Help us maintain documentaion**  
   ASTi's documentation is primarily maintained at the ASTi's repo, and at reasonable intervals it is consolidated and used to update the documentation on invirds(that relates to ASTi). So, in case you want to help with ASTi's documentation, please see ASTi's docs and send pull requests there. Docs at invirds relating to ASTi will be updated based on ASTi's docs only.
4. **Help with development & feedback**  
   To help with development, you need to have some knowledge about Jekyll, Shopify's Liquid templating language, YAML and HTML, CSS and JavaScript+jQuery. In case you want to give feedback, submit bug reports or feature requests, please [file an issue on GitLab](https://gitlab.com/invirds/invirds.gitlab.io/issues). Helping us with development might mean that you would need to spend slightly more amount of time with us than other two methods above, but your help means a lot to us. If you are ready to dive into development, read below :)

---

**Contents**

1. Do not remove this line (it will not be displayed)
{:toc}

---

## Overview

invirds primarily runs on [Jekyll](https://jekyllrb.com/). It leverages Jekyll's *collections feature*. You can read about Jekyll's collections [here](https://jekyllrb.com/docs/collections/).

<div class="alert alert-info" markdown="1">

_**TL;DR** : The data entered into collection file (or say software's markdown file located in `_software/` directory) is rendered into a web-page using already defined layout and permalink structure._

**collections in brief** :  
  collections in Jekyll are what *Custom post types* are in WordPress...almost. Collection is defined in [_config.yml](https://gitlab.com/invirds/invirds.gitlab.io/blob/master/_config.yml) file located at root. In case of invirds, we have defined collection as `software`. You can read more about what _config.yml is, its options and how it works [here](https://jekyllrb.com/docs/configuration/).

**How it works** :  
  While defining collections, setting `output` to `true` (see [_config.yml](https://gitlab.com/invirds/invirds.gitlab.io/blob/master/_config.yml)) tells Jekyll to render pages for each markdown file located in the _software directory. Default [YAML frontmatter](https://jekyllrb.com/docs/front-matter/) for a collection can be defined in _config.yml file; we have defined default permalink structure for `software` collection. There is a separate layout for `software` collection which uses [default layout](https://gitlab.com/invirds/invirds.gitlab.io/blob/master/_layouts/default.html) as base. [default layout](https://gitlab.com/invirds/invirds.gitlab.io/blob/master/_layouts/default.html) is a very basic one with navigation, footer, and linked common CSS, JS dependencies.

</div>

---

## Terminologies

*When a word is presented like `this` it means the word is in context of following terminologies. In case a word is presented normally like 'this', that means the meaning of the word in common parlance is expected to be conveyed.*
  
Let's take a look at some terminologies.
  
### Softpage
Each software's markdown file is rendered as a separate page. Such a page forms a dedicated page for that software where software's information is presented. Such a page is called `Softpage`.
  
  
### Characteristics
A software's markdown file stores information about the software in the form of [front-matter](https://jekyllrb.com/docs/front-matter/) variables. In a software's markdown file, these variables have been arranged in a systematic way forming levels of hierarchy, so that expected output is rendered on the softpage. The primary level of variables constitutes `charachteristics` of that software. From secondary level onward, the pattern of arrangement for variables and their values may differ from `characteristics` to `characteristics`.  
Following are primary `characteristics`, along with brief intro:  

1. `title`: Title of the software  
2. `info`: Information about software, in short. It is shown on `softpage` just below `title` and forms part of the table on Search page  
3. `image`: Logo image of software  
4. `status`: Whether the software or its development is *active*, *discontinued* or *unknown*  
5. `website`: Website URL of software  
6. `get_it`: Link to official Download page, or page from where software can be obtained  
7. `description`: Description of software, in brief but not in short  
8. `sysreq`: System requirements  
9. `developer`: Developer(s) of software  
10. `initial_release`: When was the software initially released  
11. `repository`: Where code is hosted, applies only for open-source softwares  
12. `written_in`: Computer languages the software is written in  
13. `platform`: Platform on which the software runs, usually Operating System for application software or computer language environment for software framework/library  
14. `categories`: What type of software it is. Helps with classification  
15. `license`: License under which the software's code is released  
16. `social`: Social presence of software, its developers or community behind it  
17. `source`: The source from where the information in an `infocard` or a `characteristic` is obtained. Discussed below  
18. `rating`: Ratings and Reviews  

*Currently, new entries for `characteristics` are not on the table, but if you have a related idea, feel free to [open an issue](https://gitlab.com/invirds/invirds.gitlab.io/issues).*
  
  
### Infocard
On a `softpage`, some of software's `characteristics` are presented as cards. Each such card is called an `infocard`.
  
  
### i-button, i-pop & i-content
There is an `i` button on almost every `infocard`, called as `i-button`. Clicking `i-button` of an `infocard` presents information as modal or popover or such. Such element which appears on clicking `i-button` is called `i-pop`, that is modal or popover is `i-pop`. And, content in `i-pop` is `i-content`.
  
  
---

ASTi specific:

*By ASTi specific, it is intended to mean that such terminologies primarily relate to ASTi. In any case, they convey same meaning even when used in context other then ASTi.*

### input-field, input-type, input-value & input-option
`input-field` is the form field given, for any `characteristic` in ASTi to input value. The value to be filled in `input-field` is the `input-value`. An `input-field` takes input of a certain type, which is that `input-field's` `input-type`. To avoid distorted output, `input-value` must in all cases correspond to `input-type` specified. In ASTi, options to choose `input-value` from, are usually provided in `input-field` with the help of `<datalist>` tag. Such options are termed `input-options`. For example, see license `characteristic` in ASTi.
  
  
### input-name-\*
`*` in `input-name-*` is either one of `field`, `type`, `value` & `option`. Let's take `input-name-option` as an example, which makes value of `*` equals `option` in our example.  
Now, in many cases, there are more than one `input-fields`, usually arranged in columns-rows or such systematic form. In such cases, it becomes essential to also identify which `input-field's` options are we referring to. `name` in `input-name-option` is that word which identifies the specific `input-field(s)` we are referring to. For example, see get_it `characteristic` in ASTi. There are 2 `input-fields` per record, viz. Name & URL. And, `input-field` in Name column also have `input-options`. So, when there is a need to mention `input-option` for `input-fields` in Name column, they are mentioned as `input-Name-option` to avoid unnecessary confusion.
  
  
### Source
`source` is the source from where the information in an `infocard` or a `characteristic` is obtained. An accepted `source` is a source which is as specific as possible and which is likely to be available or retrievable in future, and possibility of which to be unreachable in future is neglible at present. It may be a page of a website, or a page number of a book, or any globally traceable piece of information which can be retrieved later. In case source is a website page, just its URL can form part of `source` (see example 1).

<div class="alert alert-info" markdown="1">

Note: If using Wikipedia as source, it should be ensured that permanent link (which can be found under 'Tools' on the Wikipedia page's sidebar) is used.

</div>

However, in case a source is in a book, the format changes (see example 2).  

For example,  
1. URL1, URL2
2. URL1, ["URL-B", Specifications of source], URL2

2nd case is when a source is not a website. Say the information we are referring to can be found at line no. 12, page no.34, of The Example Book edition 5 by Author Example. Then 'Specification of source' is: "line no. 12, page no.34, of The Example Book edition 5 by Author Example". It should be noted that 'Specification of source' shall be as detailed as possible and needed. This includes specifying line number, page number, book name along with its edition details, author name, ISBN of the book, etc. URL-B is the URL on the web from where that book can be bought or downloaded or acquired for possession whether in electronic, physical or any such form. This include link to Amazon page of the book or official website for the book or else. In case there is no URL to be specified as URL-B, `#` shall be the URL-B.

<div class="alert alert-info" markdown="1">

It may be noted here that in case more than one URLs need to be specified as URL-B, an appropriate one shall be chosen among them and that chosen one shall be URL-B.

</div>

<div class="alert alert-danger" markdown="1">

Please note that form as follows must **not** be used in any case as it will render the output distorted.  
1. URL1, [["URL-B1", "URL-B2"], Specification of source], URL2

</div>

---

## Dive in

Thanks for going through above info. You are all set to help us in development. Take a look at the following:

  1. [Layout file of `softpage`](https://gitlab.com/invirds/invirds.gitlab.io/blob/master/_layouts/software.html)
  2. Format of markdown file for software (coming soon)
  3. [ASTi's code](https://gitlab.com/invirds/asti)

First two of these relate to invirds and third one to ASTi, of course.

Feel free to ([click here](https://gitlab.com/invirds/invirds.gitlab.io/issues) and) open new issue or work on exisitng one!

---
  
[Contributing Template](https://github.com/nayafia/contributing-template/blob/master/CONTRIBUTING-template.md)  
[Code of conduct](https://www.contributor-covenant.org/)

</div>