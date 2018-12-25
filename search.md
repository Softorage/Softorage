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
  
  <div class="card shadow-sm mb-3">
  
    <div class="card-body">
    
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

                  <a role="button" class="btn" tabindex="0" data-toggle="popover" data-html="true" data-original-title="Desktop" data-content="
                  {% for os in env.dskp %}
                  {% if os[0] == "windows" %}
                  {% if os[1] == "n" %}
                  <span class='fab fa-windows border border-rounded border-warning'></span>
                  {% else %}
                  <span class='fab fa-windows'></span>
                  {% endif %}
                  {% elsif os[0] == "linux" %}
                  {% if os[1] == "n" %}
                  <span class='fab fa-linux border border-rounded border-warning'></span>
                  {% else %}
                  <span class='fab fa-linux'></span>
                  {% endif %}
                  {% elsif os[0] == "mac" %}
                  {% if os[1] == "n" %}
                  <span class='fab fa-apple border border-rounded border-warning'></span>
                  {% else %}
                  <span class='fab fa-apple'></span>
                  {% endif %}
                  {% elsif os[0] == "freebsd" %}
                  {% if os[1] == "n" %}
                  <span class='fab fa-freebsd border border-rounded border-warning'></span>
                  {% else %}
                  <span class='fab fa-freebsd'></span>
                  {% endif %}
                  {% endif %}
                  {% endfor %}
                  "><span class="fas fa-desktop"></span></a>
                  
                  {% elsif env.smp %}        
                    
                  <a role="button" class="btn" tabindex="0" data-toggle="popover" data-html="true" data-original-title="Smartphone" data-content="
                  {% for os in env.smp %}
                  {% if os[0] == "android" %}
                  {% if os[1] == "n" %}
                  <span class='fab fa-android border border-rounded border-warning'></span>
                  {% else %}
                  <span class='fab fa-android'></span>
                  {% endif %}
                  {% elsif os[0] == "ios" %}
                  {% if os[1] == "n" %}
                  <span class='fab fa-apple border border-rounded border-warning'></span>
                  {% else %}
                  <span class='fab fa-apple'></span>
                  {% endif %}
                  {% endif %}
                  {% endfor %}
                  "><span class="fas fa-mobile-alt"></span></a>
                  {% elsif env.tab %}          
                  <a role="button" class="btn" tabindex="0" data-toggle="popover" data-html="true" data-original-title="Tablet" data-content="
                  {% for os in env.tab %}
                  {% if os[0] == "android" %}
                  {% if os[1] == "n" %}
                  <span class='fab fa-android border border-rounded border-warning'></span>
                  {% else %}
                  <span class='fab fa-android'></span>
                  {% endif %}
                  {% elsif os[0] == "ios" %}
                  {% if os[1] == "n" %}
                  <span class='fab fa-apple border border-rounded border-warning'></span>
                  {% else %}
                  <span class='fab fa-apple'></span>
                  {% endif %}
                  {% endif %}
                  {% endfor %}
                  "><span class="fas fa-tablet-alt"></span></a>

                  {% endif %}
                  {% endfor %}

                </td>

              </tr>
              
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
