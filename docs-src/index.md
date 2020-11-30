---
layout: page.11ty.cjs
title: fawn-components / Home
---

# fawn-componets

`fawn-components` is a simple custom components package for the modern web. It is built on web components, so it is supported in web frameworks like react, vue, angular etc. 

## As easy as HTML

<section class="columns">
  <div>

`fawn-components` is just an HTML element. You can it anywhere you can use HTML!

```html
<fn-pwa-banner></fn-pwa-banner>
```

  </div>
  <div>

<fn-pwa-banner></fn-pwa-banner>

  </div>
</section>

## Configure with attributes

<section class="columns">
  <div>

`<fn-pwa-button>` can be configured with attributed in plain HTML.

```html
<fn-pwa-button background="red"></fn-pwa-button>
```

  </div>
  <div>

<fn-pwa-button background="red"></fn-pwa-button>

  </div>
</section>

## Declarative rendering

<section class="columns">
  <div>

`fawn-components` can be used with declarative rendering libraries like Angular, React, Vue, and lit-html

```js
import React from 'react';

const App = () => (
  <h2>This is fawn components</h2>
  <fn-pwa-button ></fn-pwa-button>
)
```

  </div>
  <div>

<h2>This is a &lt;my-element&gt;</h2>
<my-element name="lit-html"></my-element>

  </div>
</section>
