$(function() {
  /* Transition effect for navbar */
  $(window).scroll(function() {
    /* checks if window is scrolled more than 30px, adds/removes bg-white and shadow class */
    if ($(this).scrollTop() > 30) {
      $(".navbar").addClass("shadow").attr("style", "background: rgba(255,255,255,0.9);");
    } else {
      $(".navbar").removeClass("shadow").removeAttr("style");
    }
  });
  
  /* initialize popovers, used in navbar */
  $("[data-toggle='popover']").popover({ container: 'body', sanitize: false });
  /* initialize tooltips */
  $('[data-toggle="tooltip"]').tooltip({ container: 'body' });
  
  // PWA service worker
  // Thanks: 
  // https://github.com/wildhaber/offline-first-sw
  // https://blog.jeremylikness.com/blog/implement-progressive-web-app-hugo/
  
  // Service Worker file: {{ $js_sw := resources.Get "sw.js" | resources.ExecuteAsTemplate "/sw.js" . | minify }}
  if("serviceWorker" in navigator) {
    /**
      * Define if <link rel="next|prev|prefetch"> should
      * be preloaded when accessing this page
      */
    const PREFETCH = true;
    /**
      * Define which link-rel's should be preloaded if enabled.
      */
    const PREFETCH_LINK_RELS = ["index","next", "prev", "prefetch"];
    /**
      * prefetchCache
      */
    function prefetchCache() {
      if(navigator.serviceWorker.controller) {
        let links = document.querySelectorAll(
          PREFETCH_LINK_RELS.map((rel) => {
            return "link[rel='+rel+']";
          }).join(",")
        );
        if(links.length > 0) {
          Array.from(links)
          .map((link) => {
            let href = link.getAttribute("href");
            navigator.serviceWorker.controller.postMessage({
              action : "cache",
              url : href,
            });
          });
        }
      }
    }
    /**
      * Register Service Worker
      * 
      * since there are no script tags, we need to cover { $js_sw.RelPermalink } statement in quotes; had there been script tags, Hugo would've automatically added quotes
      */
    navigator.serviceWorker
      .register("{{ $js_sw.RelPermalink }}", { scope: "/" })
      .then(() => {
        console.info("Service Worker for {{ site.Title }} Registered!");
      }, err => console.error("Service Worker Registration for {{ site.Title }} Failed :( - ", err));

    /**
      * Wait if ServiceWorker is ready
      */
    navigator.serviceWorker
      .ready
      .then(() => {
        if(PREFETCH) {
          prefetchCache();
        }
        console.info("Service Worker for {{ site.Title }} Ready! :)");
    });
  }
});

{{ if eq site.Params.cookieConsent.switch "on" }}
/* OSANO Cookie consent initialisation */

/* for dark mode
 * 
var cookieconsent_popup_bg_light = {{ site.Data.themes.light.nav }};
var cookieconsent_popup_text_light = {{ site.Data.themes.light.antinav }};
var cookieconsent_button_bg_light = {{ site.Data.themes.light.clr2 }};
var cookieconsent_button_text_light = {{ site.Data.themes.light.nav }};

var cookieconsent_popup_bg_light = {{ site.Data.themes.dark.nav }};
var cookieconsent_popup_text_light = {{ site.Data.themes.dark.antinav }};
var cookieconsent_button_bg_light = {{ site.Data.themes.dark.clr2 }};
var cookieconsent_button_text_light = {{ site.Data.themes.dark.nav }};
*/

window.cookieconsent.initialise({
  "palette": {
    "popup": {
      "background": "{{ site.Params.cookieConsent.colors.banner.background }}",
      "text": "{{ site.Params.cookieConsent.colors.banner.text }}"
    },
    "button": {
      "background": "{{ site.Params.cookieConsent.colors.button.background }}",
      "text": "{{ site.Params.cookieConsent.colors.button.text }}"
    }
  },
  "content": {
    "message": "{{ site.Params.cookieConsent.content.message | safeHTMLAttr }}",
    "dismiss": "{{ default `Close` site.Params.cookieConsent.content.dismiss }}",
    "link": "{{ default `Learn More` site.Params.cookieConsent.content.linkText }}",
    "href": "{{ site.Params.cookieConsent.content.linkURL }}",
    "allow": "{{ default `Allow` site.Params.cookieConsent.content.allow }}",
    "deny": "{{ default `Decline` site.Params.cookieConsent.content.deny }}",
    "policy": "{{ default `Cookie Policy` site.Params.cookieConsent.content.policy }}"
  },
  {{ if site.Params.cookieConsent.revokable }}
  "revokable": {{ default true site.Params.cookieConsent.revokable }},
  {{ end }}
  "type": "{{ site.Params.cookieConsent.type }}",
  
  onInitialise: function (status) {
    var type = this.options.type;
    var didConsent = this.hasConsented();
    if (type == 'opt-in' && didConsent) {
      // enable cookies
      // https://developers.google.com/analytics/devguides/collection/gtagjs/user-opt-out
      window['{{ printf "%s%s" "ga-disable-" site.GoogleAnalytics }}'] = false;
    }
    if (type == 'opt-out' && !didConsent) {
      // disable cookies
      window['{{ printf "%s%s" "ga-disable-" site.GoogleAnalytics }}'] = true;
    }
  },
  onStatusChange: function(status, chosenBefore) {
    var type = this.options.type;
    var didConsent = this.hasConsented();
    if (type == 'opt-in' && didConsent) {
      // enable cookies
      window['{{ printf "%s%s" "ga-disable-" site.GoogleAnalytics }}'] = false;
    }
    if (type == 'opt-out' && !didConsent) {
      // disable cookies
      window['{{ printf "%s%s" "ga-disable-" site.GoogleAnalytics }}'] = true;
    }
  },
  onRevokeChoice: function() {
    var type = this.options.type;
    if (type == 'opt-in') {
      // disable cookies
      window['{{ printf "%s%s" "ga-disable-" site.GoogleAnalytics }}'] = true;
    }
    if (type == 'opt-out') {
      // enable cookies
      window['{{ printf "%s%s" "ga-disable-" site.GoogleAnalytics }}'] = false;
    }
  }
});
{{ end }}

{{/*

for opt-in type of cookie consent; to comply with stricter privacy requirements

https://stackoverflow.com/questions/60173853/how-to-set-the-google-analytics-cookie-only-after-another-consent-cookie-is-set
https://web.archive.org/web/20200503103417/https://www.osano.com/cookieconsent/documentation/disabling-cookies/
https://web.archive.org/web/20200503103410/https://cookieconsent.freshdesk.com/support/solutions/articles/43000002898-google-analytics-gtag-

https://support.google.com/analytics/answer/9019185?hl=en&ref_topic=2919631


in head:
// Disable tracking by default
window[{{ printf "%s%s" "ga-disable-" site.GoogleAnalytics }}] = true;

// Initialize gtag
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());

-----------------------------------------

window.cookieconsent.initialise({

  "palette": {
    "popup": {
      "background": "#fafafa",
      "text": "#343434"
    },
    "button": {
      "background": "#3f5efb",
      "text": "#fbfbfb"
    }
  },
  "content": {
    "message": "We use cookies to ensure you get the best user experience on our website. By continuing to use this site, you agree to the use of these cookies and that you have read and understood <a href='{{ site.BaseURL }}legal/cookie-policy/'>Cookie Policy</a>, <a href='{{ site.BaseURL }}legal/privacy-policy/'>Privacy Poilcy</a> and our <a href='{{ site.BaseURL }}legal/terms-and-conditions/'>Terms and Conditions</a>.",
    "dismiss": "Okay. Got it!",
    "link": "Find more about cookies in our Privacy Policy.",
    "href": "{{ site.BaseURL }}legal/privacy-policy/",
    
    "allow": 'Allow cookies',
    "deny": 'Decline',
    "policy": 'Cookie Consent'
  },
  
  "revokable": true,
  "type": "opt-in",
  
  onInitialise: function (status) {
    var type = this.options.type;
    var didConsent = this.hasConsented();
    if (type == 'opt-in' && didConsent) {
      // enable cookies
      // https://developers.google.com/analytics/devguides/collection/gtagjs/user-opt-out
      window['{{ printf "%s%s" "ga-disable-" site.GoogleAnalytics }}'] = false;
    }
    if (type == 'opt-out' && !didConsent) {
      // disable cookies
      window['{{ printf "%s%s" "ga-disable-" site.GoogleAnalytics }}'] = true;
    }
  },
  onStatusChange: function(status, chosenBefore) {
    var type = this.options.type;
    var didConsent = this.hasConsented();
    if (type == 'opt-in' && didConsent) {
      // enable cookies
      window['{{ printf "%s%s" "ga-disable-" site.GoogleAnalytics }}'] = false;
    }
    if (type == 'opt-out' && !didConsent) {
      // disable cookies
      window['{{ printf "%s%s" "ga-disable-" site.GoogleAnalytics }}'] = true;
    }
  },
  onRevokeChoice: function() {
    var type = this.options.type;
    if (type == 'opt-in') {
      // disable cookies
      window['{{ printf "%s%s" "ga-disable-" site.GoogleAnalytics }}'] = true;
    }
    if (type == 'opt-out') {
      // enable cookies
      window['{{ printf "%s%s" "ga-disable-" site.GoogleAnalytics }}'] = false;
    }
  }
});

*/}}
