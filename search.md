---
layout: default
title: Search the invirds
description: Search through massive yet intelligently organised database
permalink: /search/
---
{% assign forcount = 1 %}
{% assign categs =  site.software | map: 'categories' | join: ','  | split: ',' | uniq %}

<div class="container-fluid bg-clr1 text-white text-center py-3">
  <div style="height:3.5rem;"></div>
  <h1>{{ page.title }}</h1>
  <p>{{ page.description }}</p>
</div>
<div class="container-fluid bg-clr2-light py-3">
  {% for categ in categs %}
  <div class="card mb-3">
    <div class="card-body">
      <span class="anchor" id ="{{ categ | replace: " ", "_" | downcase }}"></span>
      <h4 class="card-title">{{ categ }}</h4>
      <div class="card-text">
        <div class="table-responsive-md">
          <table class="table table-bordered">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Title</th>
                <th scope="col">Info</th>
                <th scope="col">Available for</th>
              </tr>
            </thead>
            <tbody>
              <!-- Ensure that variable forcount has value 1 for each category and such category's card -->
              {% if forcount != 1 %}
              {% assign forcount = 1 %}
              {% endif %}
              {% for software in site.software %}
              {% if software.categories contains categ %}
              <tr>
                <th scope="row">{{ forcount }}</th>
                <td><a class="font-weight-bold text-dark" href="{{ software.url | prepend: site.baseurl | prepend: site.url }}" target="_blank">{{ software.title }}</a>&nbsp;<span class="fas fa-external-link-alt small"></span></td>
                <td>
                  {% if software.info %}
                  {{ software.info }}
                  {% else %}
                  <p>Not available</p>
                  {% endif %}
                </td>
                <td>
                  {% for env in software.platform %}
                  {% if env.dskp %}
                  <a role="button" class="btn" tabindex="0" data-toggle="popover" data-trigger="focus" data-html="true" data-original-title="Desktop" data-content="
                  {% for os in env.dskp %}
                  {% if os[0] == "Windows" %}
                  {% if os[1] == "n" %}
                  <span class='fab fa-windows border border-warning p-1'></span>
                  {% else %}
                  <span class='fab fa-windows'></span>
                  {% endif %}
                  {% elsif os[0] == "Linux" %}
                  {% if os[1] == "n" %}
                  <span class='fab fa-linux border border-warning p-1'></span>
                  {% else %}
                  <span class='fab fa-linux'></span>
                  {% endif %}
                  {% elsif os[0] == "macOS" %}
                  {% if os[1] == "n" %}
                  <span class='fab fa-apple border border-warning p-1'></span>
                  {% else %}
                  <span class='fab fa-apple'></span>
                  {% endif %}
                  {% elsif os[0] == "FreeBSD" %}
                  {% if os[1] == "n" %}
                  <span class='fab fa-freebsd border border-warning p-1'></span>
                  {% else %}
                  <span class='fab fa-freebsd'></span>
                  {% endif %}
                  {% else %}
                  {% if os[1] == "n" %}
                  <span class='border border-warning shadow-sm p-2'>{{ os[0] }}</span>
                  {% else %}
                  <span class='shadow-sm p-2'>{{ os[0] }}</span>
                  {% endif %}
                  {% endif %}
                  {% endfor %}
                  "><span class="fas fa-desktop"></span></a>
                  {% elsif env.smp %} 
                  <a role="button" class="btn" tabindex="0" data-toggle="popover" data-trigger="focus" data-html="true" data-original-title="Smartphone" data-content="
                  {% for os in env.smp %}
                  {% if os[0] == "Android" %}
                  {% if os[1] == "n" %}
                  <span class='fab fa-android border border-warning p-1'></span>
                  {% else %}
                  <span class='fab fa-android'></span>
                  {% endif %}
                  {% elsif os[0] == "iOS" %}
                  {% if os[1] == "n" %}
                  <span class='fab fa-apple border border-warning p-1'></span>
                  {% else %}
                  <span class='fab fa-apple'></span>
                  {% endif %}
                  {% else %}
                  {% if os[1] == "n" %}
                  <span class='border border-warning shadow-sm p-2'>{{ os[0] }}</span>
                  {% else %}
                  <span class='shadow-sm p-2'>{{ os[0] }}</span>
                  {% endif %}
                  {% endif %}
                  {% endfor %}
                  "><span class="fas fa-mobile-alt"></span></a>          
                  {% elsif env.tab %} 
                  <a role="button" class="btn" tabindex="0" data-toggle="popover" data-trigger="focus" data-html="true" data-original-title="Tablet" data-content="
                  {% for os in env.tab %}
                  {% if os[0] == "Android" %}
                  {% if os[1] == "n" %}
                  <span class='fab fa-android border border-warning p-1'></span>
                  {% else %}
                  <span class='fab fa-android'></span>
                  {% endif %}
                  {% elsif os[0] == "iOS" %}
                  {% if os[1] == "n" %}
                  <span class='fab fa-apple border border-warning p-1'></span>
                  {% else %}
                  <span class='fab fa-apple'></span>
                  {% endif %}
                  {% else %}
                  {% if os[1] == "n" %}
                  <span class='border border-warning shadow-sm p-2'>{{ os[0] }}</span>
                  {% else %}
                  <span class='shadow-sm p-2'>{{ os[0] }}</span>
                  {% endif %}
                  {% endif %}
                  {% endfor %}
                  "><span class="fas fa-tablet-alt"></span></a>
                  {% else %} 
                  <a role="button" class="btn" tabindex="0" data-toggle="popover" data-trigger="focus" data-html="true" data-original-title="Else" data-content="
                  {% for item in env.else %}
                  {% if item[1] == "n" %}
                  <span class='border border-warning shadow-sm p-2'>{{ item[0] }}</span>
                  {% else %}
                  <span class='shadow-sm p-2'>{{ item[0] }}</span>
                  {% endif %}
                  {% endfor %}
                  "><span class="fas fa-bars"></span></a>
                  {% endif %}
                  {% endfor %}
                </td>
              </tr>
              <!-- Increment forcount by 1 for each software printed on a category's card -->
              {% assign forcount = forcount | plus: 1 %}
              {% endif %}
              {% endfor %}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
  {% endfor %}
</div>

<!-- Initialize Popovers -->
<!-- 
  " $(function(){$('[data-toggle="popover"]').popover()}); " has been converted into base64 format using https://www.base64encode.org/ and included as 'src' so that adding 'defer' attribute to <script> tag is allowed.
  This allows to place jQuery at the end of the document. Credit for idea to: https://stackoverflow.com/a/46088817
 -->
<script src="data:text/javascript;base64,JChmdW5jdGlvbigpeyQoJ1tkYXRhLXRvZ2dsZT0icG9wb3ZlciJdJykucG9wb3ZlcigpfSk7" defer></script>
