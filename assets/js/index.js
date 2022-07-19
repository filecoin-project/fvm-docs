var suggestions = document.getElementById('suggestions');
var search = document.getElementById('search');

if (search !== null) {
  document.addEventListener('keydown', inputFocus);
}

function inputFocus(e) {
  if (e.ctrlKey && e.key === '/' ) {
    e.preventDefault();
    search.focus();
  }
  if (e.key === 'Escape' ) {
    search.blur();
    suggestions.classList.add('d-none');
  }
}

document.addEventListener('click', function(event) {

  var isClickInsideElement = suggestions.contains(event.target);

  if (!isClickInsideElement) {
    suggestions.classList.add('d-none');
  }

});

<<<<<<< HEAD
=======
// initialize bootstrap tooltips
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})

>>>>>>> parent of ed7d284 (Deletes most things, ready for staging merge.)
/*
Source:
  - https://dev.to/shubhamprakash/trap-focus-using-javascript-6a3
*/

document.addEventListener('keydown',suggestionFocus);

<<<<<<< HEAD
function suggestionFocus(e) {
  const suggestionsHidden = suggestions.classList.contains('d-none');
  if (suggestionsHidden) return;

  const focusableSuggestions= [...suggestions.querySelectorAll('a')];
  if (focusableSuggestions.length === 0) return;

  const index = focusableSuggestions.indexOf(document.activeElement);

  if (e.key === "ArrowUp") {
    e.preventDefault();
    const nextIndex = index > 0 ? index - 1 : 0;
    focusableSuggestions[nextIndex].focus();
  }
  else if (e.key === "ArrowDown") {
    e.preventDefault();
    const nextIndex= index + 1 < focusableSuggestions.length ? index + 1 : index;
=======
function suggestionFocus(e){

  const focusableSuggestions= suggestions.querySelectorAll('a');
  const focusable= [...focusableSuggestions];
  const index = focusable.indexOf(document.activeElement);

  const keyDefault = suggestions.classList.contains('d-none');

  let nextIndex = 0;

  if ((e.keyCode === 38) && (!keyDefault)) {
    e.preventDefault();
    nextIndex= index > 0 ? index-1 : 0;
    focusableSuggestions[nextIndex].focus();
  }
  else if ((e.keyCode === 40) && (!keyDefault)) {
    e.preventDefault();
    nextIndex= index+1 < focusable.length ? index+1 : index;
>>>>>>> parent of ed7d284 (Deletes most things, ready for staging merge.)
    focusableSuggestions[nextIndex].focus();
  }

}

/*
Source:
  - https://github.com/nextapps-de/flexsearch#index-documents-field-search
  - https://raw.githack.com/nextapps-de/flexsearch/master/demo/autocomplete.html
*/

(function(){

  var index = new FlexSearch.Document({
    tokenize: "forward",
    cache: 100,
    document: {
      id: 'id',
      store: [
        "href", "title", "description"
      ],
      index: ["title", "description", "content"]
    }
  });


  // Not yet supported: https://github.com/nextapps-de/flexsearch#complex-documents

  /*
  var docs = [
    {{ range $index, $page := (where .Site.Pages "Section" "docs") -}}
      {
        id: {{ $index }},
        href: "{{ .Permalink }}",
        title: {{ .Title | jsonify }},
        description: {{ .Params.description | jsonify }},
        content: {{ .Content | jsonify }}
      },
    {{ end -}}
  ];
  */

  // https://discourse.gohugo.io/t/range-length-or-last-element/3803/2

<<<<<<< HEAD
  {{ $list := (where .Site.Pages "Section" "docs") -}}
  {{ $len := (len $list) -}}

  {{ range $index, $element := $list -}}
    index.add(
      {
        id: {{ $index }},
        href: "{{ .RelPermalink }}",
        title: {{ .Title | jsonify }},
        {{ with .Description -}}
          description: {{ . | jsonify }},
        {{ else -}}
          description: {{ .Summary | plainify | jsonify }},
        {{ end -}}
        content: {{ .Plain | jsonify }}
      }
    );
  {{ end -}}

  search.addEventListener('input', show_results, true);

  function show_results(){
    const maxResult = 5;
    var searchQuery = this.value;
    var results = index.search(searchQuery, {limit: maxResult, enrich: true});

    // flatten results since index.search() returns results for each indexed field
    const flatResults = new Map(); // keyed by href to dedupe results
    for (const result of results.flatMap(r => r.result)) {
      if (flatResults.has(result.doc.href)) continue;
      flatResults.set(result.doc.href, result.doc);
    }

    suggestions.innerHTML = "";
    suggestions.classList.remove('d-none');

    // inform user that no results were found
    if (flatResults.size === 0 && searchQuery) {
      const noResultsMessage = document.createElement('div')
      noResultsMessage.innerHTML = `No results for "<strong>${searchQuery}</strong>"`
      noResultsMessage.classList.add("suggestion__no-results");
      suggestions.appendChild(noResultsMessage);
      return;
    }

    // construct a list of suggestions
    for(const [href, doc] of flatResults) {
        const entry = document.createElement('div');
        suggestions.appendChild(entry);

        const a = document.createElement('a');
        a.href = href;
        entry.appendChild(a);

        const title = document.createElement('span');
        title.textContent = doc.title;
        title.classList.add("suggestion__title");
        a.appendChild(title);

        const description = document.createElement('span');
        description.textContent = doc.description;
        description.classList.add("suggestion__description");
        a.appendChild(description);

        suggestions.appendChild(entry);

        if(suggestions.childElementCount == maxResult) break;
    }
  }
=======
  {{ $list := (.Site.Pages) -}}
  {{ $len := (len $list) -}}

  index.add(
    {{ range $index, $element := $list -}}
      {
        id: {{ $index }},
        href: "{{ .Permalink }}",
        title: {{ .Title | jsonify }},
        description: {{ .Params.description | jsonify }},
        content: {{ .Content | jsonify }}
      })
      {{ if ne (add $index 1) $len -}}
        .add(
      {{ end -}}
    {{ end -}}
  ;

  search.addEventListener('input', show_results, true);
  suggestions.addEventListener('click', accept_suggestion, true);

  function show_results(){
    const maxResult = 5;

    var value = this.value;
    var results = index.search(value, {limit: maxResult, enrich: true});

    suggestions.classList.remove('d-none');
    suggestions.innerHTML = "";

    //flatSearch now returns results for each index field. create a single list
    const flatResults = {}; //keyed by href to dedupe results
    results.forEach(result=>{
        result.result.forEach(r=>{
          flatResults[r.doc.href] = r.doc;
        });
    });

    //construct a list of suggestions list
    for(const href in flatResults) {
        const doc = flatResults[href];

        const entry = document.createElement('div');
        entry.innerHTML = '<a href><span></span><span></span></a>';

        entry.querySelector('a').href = href;
        entry.querySelector('span:first-child').textContent = doc.title;
        entry.querySelector('span:nth-child(2)').textContent = doc.description;

        suggestions.appendChild(entry);
        if(suggestions.childElementCount == maxResult) break;
    }
  }

  function accept_suggestion(){

      while(suggestions.lastChild){

          suggestions.removeChild(suggestions.lastChild);
      }

      return false;
  }

>>>>>>> parent of ed7d284 (Deletes most things, ready for staging merge.)
}());
