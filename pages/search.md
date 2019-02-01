---
layout: default
title: Search
description: Search invirds
permalink: /search/
---
{%- assign categs =  site.software | map: "categories" | join: ","  | split: "," | uniq | sort -%}

<div class="container-fluid bg-clr1-light text-clr1 text-center py-3 position-relative shadow-sm">
  
  <div style="height:3.5rem;"></div>
  <h1>{{ page.title }}</h1>
  <p>{{ page.description }}</p>

</div>

<!-- Modal -->
<div class="modal fade" id="filter-modal" tabindex="-1" role="dialog" aria-labelledby="filter-modal-label" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content bg-nav text-antinav">
      <div class="modal-header">
        <h5 class="modal-title" id="filter-modal-label">Filters</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
        <span class="text-antinav" aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body filter-modal-body" id="filter-list">
        <input type="text" class="bg-nav form-control fuzzy-search" placeholder="Search">
        <span class="small float-right">search by <a href="https://listjs.com/">List.js</a></span>
        <br><br>
        <div class="form-group list">
          {% for categ in categs %}
          <div class="form-check">
            <input type="checkbox" class="form-check-input" id="{{ categ | replace: " ", "_" | downcase }}">
            <label class="form-check-label" for="{{ categ | replace: " ", "_" | downcase }}"> <span class="category-filter">{{ categ }}</span></label>
          </div>
          {% endfor %}
        </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>

<div class="container-fluid bg-clr2-light py-3">
  <div class="card mb-3">
    <div class="card-body" id="software-list">
      <div class="card-text">
        <div class="form-inline bg-nav p-2 shadow-sm menu" style="z-index:1030;">
        <!-- Button trigger modal -->
        <button type="button" class="btn btn-sm bg-clr2-light" data-toggle="modal" data-target="#filter-modal">
        <span class="fas fa-filter text-clr2"></span> <span class="text-clr2">Filter</span>
        </button>
        <input type="text" class="bg-nav form-control my-2 mx-sm-2 fuzzy-search" placeholder="Search">
        <span class="small">search by <a href="https://listjs.com/">List.js</a></span>
        </div>
        <br>
        <div class="table-responsive-md">
          <table class="table table-bordered">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Title &nbsp;<span class="btn btn-sm small sort asc" data-sort="name"><span class="fas fa-sort text-antinav"></span></span></th>
                <th scope="col">Info</th>
                <th scope="col">Available for</th>
              </tr>
            </thead>
            <tbody class="list">
              {% for software in site.software %}
              <tr>
                <th scope="row">{{ forloop.index }}</th>
                <td><a class="font-weight-bold text-antinav text-reset" href="{{ software.url | prepend: site.baseurl | prepend: site.url }}" target="_blank"><span class="name">{{ software.title }}</span></a>&nbsp;<span class="fas fa-external-link-alt small"></span></td>
                <td>
                  {% if software.info %}
                  <span class="info">{{ software.info }}</span>
                  {% else %}
                  <p>Not available</p>
                  {% endif %}
                  <br>
                  <div class="bg-clr2-light text-clr2 py-1 px-2 text-center rounded shadow-sm category">
                    {%- for soft_categ in software.categories -%}
                    {{ soft_categ }}{% unless forloop.last %} | {% endunless %}
                    {%- endfor -%}
                  </div>
                </td>
                <td>
                  {% for env in software.platform %}
                  {% if env.dskp %}
                  <a role="button" class="btn" tabindex="0" data-toggle="popover" data-trigger="focus" data-html="true" data-original-title="Desktop" data-content="
                  {% for os in env.dskp %}
                  {% if os[0] == "Windows" %}
                  {% if os[1] == "n" %}
                  <span class='fab fa-windows fa-2x border border-warning p-1'></span>&nbsp;&nbsp;
                  {% else %}
                  <span class='fab fa-windows fa-2x'></span>&nbsp;&nbsp;
                  {% endif %}
                  {% elsif os[0] == "Linux" %}
                  {% if os[1] == "n" %}
                  <span class='fab fa-linux fa-2x border border-warning p-1'></span>&nbsp;&nbsp;
                  {% else %}
                  <span class='fab fa-linux fa-2x'></span>&nbsp;&nbsp;
                  {% endif %}
                  {% elsif os[0] == "macOS" %}
                  {% if os[1] == "n" %}
                  <span class='fab fa-apple fa-2x border border-warning p-1'></span>&nbsp;&nbsp;
                  {% else %}
                  <span class='fab fa-apple fa-2x'></span>&nbsp;&nbsp;
                  {% endif %}
                  {% else %}
                  {% if os[1] == "n" %}
                  <span class='border border-warning shadow-sm p-2' style='margin-top:-1rem;'>{{ os[0] }}</span>&nbsp;&nbsp;
                  {% else %}
                  <span class='shadow-sm p-2' style='margin-top:-1rem;'>{{ os[0] }}</span>&nbsp;&nbsp;
                  {% endif %}
                  {% endif %}
                  {% endfor %}
                  "><span class="fas fa-desktop text-clr2"></span></a>
                  {% elsif env.smp %} 
                  <a role="button" class="btn" tabindex="0" data-toggle="popover" data-trigger="focus" data-html="true" data-original-title="Smartphone" data-content="
                  {% for os in env.smp %}
                  {% if os[0] == "Android" %}
                  {% if os[1] == "n" %}
                  <span class='fab fa-android fa-2x border border-warning p-1'></span>&nbsp;&nbsp;
                  {% else %}
                  <span class='fab fa-android fa-2x'></span>&nbsp;&nbsp;
                  {% endif %}
                  {% elsif os[0] == "iOS" %}
                  {% if os[1] == "n" %}
                  <span class='fab fa-apple fa-2x border border-warning p-1'></span>&nbsp;&nbsp;
                  {% else %}
                  <span class='fab fa-apple fa-2x'></span>&nbsp;&nbsp;
                  {% endif %}
                  {% else %}
                  {% if os[1] == "n" %}
                  <span class='border border-warning shadow-sm p-2' style='margin-top:-1rem;'>{{ os[0] }}</span>&nbsp;&nbsp;
                  {% else %}
                  <span class='shadow-sm p-2' style='margin-top:-1rem;'>{{ os[0] }}</span>&nbsp;&nbsp;
                  {% endif %}
                  {% endif %}
                  {% endfor %}
                  "><span class="fas fa-mobile-alt text-clr2"></span></a>          
                  {% elsif env.tab %} 
                  <a role="button" class="btn" tabindex="0" data-toggle="popover" data-trigger="focus" data-html="true" data-original-title="Tablet" data-content="
                  {% for os in env.tab %}
                  {% if os[0] == "Android" %}
                  {% if os[1] == "n" %}
                  <span class='fab fa-android fa-2x border border-warning p-1'></span>&nbsp;&nbsp;
                  {% else %}
                  <span class='fab fa-android fa-2x'></span>&nbsp;&nbsp;
                  {% endif %}
                  {% elsif os[0] == "iOS" %}
                  {% if os[1] == "n" %}
                  <span class='fab fa-apple fa-2x border border-warning p-1'></span>&nbsp;&nbsp;
                  {% else %}
                  <span class='fab fa-apple fa-2x'></span>&nbsp;&nbsp;
                  {% endif %}
                  {% else %}
                  {% if os[1] == "n" %}
                  <span class='border border-warning shadow-sm p-2' style='margin-top:-1rem;'>{{ os[0] }}</span>&nbsp;&nbsp;
                  {% else %}
                  <span class='shadow-sm p-2' style='margin-top:-1rem;'>{{ os[0] }}</span>&nbsp;&nbsp;
                  {% endif %}
                  {% endif %}
                  {% endfor %}
                  "><span class="fas fa-tablet-alt text-clr2"></span></a>
                  {% else %} 
                  <a role="button" class="btn" tabindex="0" data-toggle="popover" data-trigger="focus" data-html="true" data-original-title="Else" data-content="
                  {% for item in env.else %}
                  {% if item[1] == "n" %}
                  <span class='border border-warning shadow-sm p-2' style='margin-top:-1rem;'>{{ item[0] }}</span>&nbsp;&nbsp;
                  {% else %}
                  <span class='shadow-sm p-2' style='margin-top:-1rem;'>{{ item[0] }}</span>&nbsp;&nbsp;
                  {% endif %}
                  {% endfor %}
                  "><span class="fas fa-bars text-clr2"></span></a>
                  {% endif %}
                  {% endfor %}
                </td>
              </tr>
              {% endfor %}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</div>

<script src="/assets/js/list.min.js"></script>

<!-- Initialize Popovers -->
<!-- 
  In Jekyll, one cannot access captured or assigned variable from a page/post's content area in the layout the page/post uses.
  " $(function(){$('[data-toggle="popover"]').popover()}); " has been converted into base64 format using https://www.base64encode.org/ and included as 'src' so that adding 'defer' attribute to <script> tag is allowed.
  This allows to place jQuery at the end of the document. Credit for idea to: https://stackoverflow.com/a/46088817
 -->
<!-- 
<script src="data:text/javascript;base64,JChmdW5jdGlvbigpeyQoJ1tkYXRhLXRvZ2dsZT0icG9wb3ZlciJdJykucG9wb3ZlcigpfSk7" defer></script>

have added code to default layout, in any case keeping this code in comments for some time

 -->

<!-- 
<script>
/* https://html-online.com/articles/get-url-parameters-javascript/ */
function getURLVars() {
  var vars = {};
  var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m, key, value) {
    vars[key] = value;
  });
  return vars;
}
/*
use:
if example URL- www.url.com/?num=3&text=three then
var number = getUrlVars()["num"]; var mytext = getUrlVars()["text"];
*/
var categoryStrFromURL = decodeURI(getURLVars()["category"]).toLowerCase().replace(/\s/g, "_");
/* categoryStrFromURL gets value undefined when there are no parameters in URL */
if (categoryStrFromURL != "undefined" && categoryStrFromURL != "") {
  var categoryArrFromURL = categoryStrFromURL.split("+");
  console.log(categoryArrFromURL);
}
/*
adding elements of one array at the end of another
https://stackoverflow.com/a/17368101
*/
Array.prototype.extend = function(other_array) {
  if (Array.isArray(other_array)) {
    /* a test to check whether other_array really is an array */
    other_array.forEach(function(v) {
      this.push(v)
    }, this);
  } else {
    console.log("Parameter of function is not an array. Please ensure that you are passing a valid array as a `parameter` into Array.extend(parameter)");
  }
}
/*
use:
var a = [1,2,3];
var b = [5,4,3];
a.extend(b);
*/
var softwareListOptions = {
  valueNames: ['name', 'info', 'category']
};
var filterListOptions = {
  valueNames: ['category-filter']
};
var softwareList = new List('software-list', softwareListOptions);
var filterList = new List('filter-list', filterListOptions);
/* selection array that holds the filter(category) values */
var selection = [];
/* do not extend selection array if categoryArrFromURL is undefined */
if (categoryArrFromURL) {
  selection.extend(categoryArrFromURL);
}
$("#filter-modal .list input.form-check-input").each(function() {
  for (var i = 0; i < selection.length; i++) {
    if ($(this).attr("id") == selection[i]) {
      $(this).attr("checked", "");
      return true;
      /* Returning non-false is the same as 'a continue statement in a for loop'; it will skip immediately to the next iteration */
    }
  }
});

function filterSoftwareList() {
  /*
  runs a filter on the list
  What it does is that, it loops through all the `items` and runs the function(item);
  item is shown if true is returned and not shown if false is returned
  also once true or false is returned, current iteration is skipped(kind of like continue in for loop)
  */
  softwareList.filter(function(item) {
    /* show all items if all checkboxes are unticked */
    if (selection.length == 0) {
      return true;
    } else {
      /*
      looks for something with class 
      of "category", then turns any 
      values to lowercase just to make 
      sure human error doesn't break this
      */
      var categoryString = item.values().category.toLowerCase().replace(/\s/g, "_");
      /*
      this turns multiple entries separated 
      by a comma and space into different
      elements in an array
      */
      var categoryArray = categoryString.split('_|_');
      /* we then loop through the array */
      for (var i = 0; i < categoryArray.length; i++) {
        /*
        this checks each possible "category"
        against the selection
        and filters the list based on the 
        one that matches
        */
        for (var j = 0; j < selection.length; j++) {
          if (categoryArray[i] == selection[j]) {
            return true;
          }
        }
      }
    }
    return false;
  });
}
filterSoftwareList();
$(".filter-modal-body input[type='checkbox']").on("change", function() {
  /*
  this sets the selection term
  based on special "id" on <li>s in filter <ul>
  */
  if ($(this).is(":checked")) {
    selection.push($(this).attr("id").toLowerCase().replace(/\s/g, "_"));
  } else {
    var selectionIndex = selection.indexOf($(this).attr("id").toLowerCase().replace(/\s/g, "_"));
    selection.splice(selectionIndex, 1);
  }
  filterSoftwareList();
  return false;
});
/*
$('#filter-none').click(function() {
  softwareList.filter();
  // $("input.form-check-input").removeAttr("checked");
  return false;
});
*/
</script>
 -->
<script src="data:text/javascript;base64,ZnVuY3Rpb24gZ2V0VVJMVmFycygpe3ZhciBlPXt9O3dpbmRvdy5sb2NhdGlvbi5ocmVmLnJlcGxhY2UoL1s/Jl0rKFtePSZdKyk9KFteJl0qKS9naSxmdW5jdGlvbih0LHIsbyl7ZVtyXT1vfSk7cmV0dXJuIGV9dmFyIGNhdGVnb3J5U3RyRnJvbVVSTD1kZWNvZGVVUkkoZ2V0VVJMVmFycygpLmNhdGVnb3J5KS50b0xvd2VyQ2FzZSgpLnJlcGxhY2UoL1xzL2csIl8iKTtpZigidW5kZWZpbmVkIiE9Y2F0ZWdvcnlTdHJGcm9tVVJMJiYiIiE9Y2F0ZWdvcnlTdHJGcm9tVVJMKXt2YXIgY2F0ZWdvcnlBcnJGcm9tVVJMPWNhdGVnb3J5U3RyRnJvbVVSTC5zcGxpdCgiKyIpO2NvbnNvbGUubG9nKGNhdGVnb3J5QXJyRnJvbVVSTCl9QXJyYXkucHJvdG90eXBlLmV4dGVuZD1mdW5jdGlvbihlKXtBcnJheS5pc0FycmF5KGUpP2UuZm9yRWFjaChmdW5jdGlvbihlKXt0aGlzLnB1c2goZSl9LHRoaXMpOmNvbnNvbGUubG9nKCJQYXJhbWV0ZXIgb2YgZnVuY3Rpb24gaXMgbm90IGFuIGFycmF5LiBQbGVhc2UgZW5zdXJlIHRoYXQgeW91IGFyZSBwYXNzaW5nIGEgdmFsaWQgYXJyYXkgYXMgYSBgcGFyYW1ldGVyYCBpbnRvIEFycmF5LmV4dGVuZChwYXJhbWV0ZXIpIil9O3ZhciBzb2Z0d2FyZUxpc3RPcHRpb25zPXt2YWx1ZU5hbWVzOlsibmFtZSIsImluZm8iLCJjYXRlZ29yeSJdfSxmaWx0ZXJMaXN0T3B0aW9ucz17dmFsdWVOYW1lczpbImNhdGVnb3J5LWZpbHRlciJdfSxzb2Z0d2FyZUxpc3Q9bmV3IExpc3QoInNvZnR3YXJlLWxpc3QiLHNvZnR3YXJlTGlzdE9wdGlvbnMpLGZpbHRlckxpc3Q9bmV3IExpc3QoImZpbHRlci1saXN0IixmaWx0ZXJMaXN0T3B0aW9ucyksc2VsZWN0aW9uPVtdO2Z1bmN0aW9uIGZpbHRlclNvZnR3YXJlTGlzdCgpe3NvZnR3YXJlTGlzdC5maWx0ZXIoZnVuY3Rpb24oZSl7aWYoMD09c2VsZWN0aW9uLmxlbmd0aClyZXR1cm4hMDtmb3IodmFyIHQ9ZS52YWx1ZXMoKS5jYXRlZ29yeS50b0xvd2VyQ2FzZSgpLnJlcGxhY2UoL1xzL2csIl8iKS5zcGxpdCgiX3xfIikscj0wO3I8dC5sZW5ndGg7cisrKWZvcih2YXIgbz0wO288c2VsZWN0aW9uLmxlbmd0aDtvKyspaWYodFtyXT09c2VsZWN0aW9uW29dKXJldHVybiEwO3JldHVybiExfSl9Y2F0ZWdvcnlBcnJGcm9tVVJMJiZzZWxlY3Rpb24uZXh0ZW5kKGNhdGVnb3J5QXJyRnJvbVVSTCksJCgiI2ZpbHRlci1tb2RhbCAubGlzdCBpbnB1dC5mb3JtLWNoZWNrLWlucHV0IikuZWFjaChmdW5jdGlvbigpe2Zvcih2YXIgZT0wO2U8c2VsZWN0aW9uLmxlbmd0aDtlKyspaWYoJCh0aGlzKS5hdHRyKCJpZCIpPT1zZWxlY3Rpb25bZV0pcmV0dXJuICQodGhpcykuYXR0cigiY2hlY2tlZCIsIiIpLCEwfSksZmlsdGVyU29mdHdhcmVMaXN0KCksJCgiLmZpbHRlci1tb2RhbC1ib2R5IGlucHV0W3R5cGU9J2NoZWNrYm94J10iKS5vbigiY2hhbmdlIixmdW5jdGlvbigpe2lmKCQodGhpcykuaXMoIjpjaGVja2VkIikpc2VsZWN0aW9uLnB1c2goJCh0aGlzKS5hdHRyKCJpZCIpLnRvTG93ZXJDYXNlKCkucmVwbGFjZSgvXHMvZywiXyIpKTtlbHNle3ZhciBlPXNlbGVjdGlvbi5pbmRleE9mKCQodGhpcykuYXR0cigiaWQiKS50b0xvd2VyQ2FzZSgpLnJlcGxhY2UoL1xzL2csIl8iKSk7c2VsZWN0aW9uLnNwbGljZShlLDEpfXJldHVybiBmaWx0ZXJTb2Z0d2FyZUxpc3QoKSwhMX0pOw" defer></script>

<!-- 
var stickyMenu = $('.menu').offset().top;

$(window).scroll(function() {  
    if ($(window).scrollTop() > stickyMenu-56) {
        $('.menu').removeClass('shadow-sm').addClass('shadow stick');
    }
    else {
        $('.menu').removeClass('shadow stick').addClass('shadow-sm');
    }  
});
 -->
<script src="data:text/javascript;base64,dmFyIHN0aWNreU1lbnU9JCgiLm1lbnUiKS5vZmZzZXQoKS50b3A7JCh3aW5kb3cpLnNjcm9sbChmdW5jdGlvbigpeyQod2luZG93KS5zY3JvbGxUb3AoKT5zdGlja3lNZW51LTU2PyQoIi5tZW51IikucmVtb3ZlQ2xhc3MoInNoYWRvdy1zbSIpLmFkZENsYXNzKCJzaGFkb3cgc3RpY2siKTokKCIubWVudSIpLnJlbW92ZUNsYXNzKCJzaGFkb3cgc3RpY2siKS5hZGRDbGFzcygic2hhZG93LXNtIil9KTs=" defer></script>