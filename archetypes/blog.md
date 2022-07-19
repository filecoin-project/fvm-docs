---
title: "{{ replace .Name "-" " " | title }}"
description: ""
lead: ""
date: {{ .Date }}
lastmod: {{ .Date }}
<<<<<<< HEAD
draft: true
=======
draft: false
>>>>>>> parent of ed7d284 (Deletes most things, ready for staging merge.)
weight: 50
images: ["{{ .Name | urlize }}.jpg"]
contributors: []
---
<<<<<<< HEAD
=======

{{< img src="{{ .Name | urlize }}.jpg" alt="{{ replace .Name "-" " " | title }}" caption="{{ replace .Name "-" " " | title }}" class="wide" >}}
>>>>>>> parent of ed7d284 (Deletes most things, ready for staging merge.)
