---
layout: default
title: Articles
permalink: /articles/
---

<ul class="posts">
  {% for post in site.posts %}
    <li>
      <span class="post-date">{{ post.date | date_to_string }}</span>
      <a class="post-link" href="{{ post.url }}">{{ post.title }}</a>
    </li>
  {% endfor %}
</ul>
