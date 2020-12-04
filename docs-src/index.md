---
layout: page.11ty.cjs
title: fawn-components / Home
---


# fawn-componets

`fawn-components` is a simple custom components package for the modern web. It is built on web components, so it is supported in web frameworks like react, vue, angular etc. 

### Collections

### `PWA Components`

- fn-pwa-button - A custom install button
- fn-pwa-banner - A custom install banner
- fn-pwa-status - A custom offline or online banner

### `Button`
- fn-ripple-btn - A button with ripple effect

## As easy as HTML

<section class="columns">
  <div>

`fawn-components` is just an HTML element. You can it anywhere you can use HTML!

```html
<fn-ripple-btn>Click me</fn-ripple-btn>
```

  </div>
  <div>

<fn-ripple-btn>Click me</fn-ripple-btn>

  </div>
</section>

## Configure with attributes

<section class="columns">
  <div>

`<fn-ripple-btn>` can be configured with attributed in plain HTML.

```html
<fn-ripple-btn background="red">Click me</fn-ripple-btn>
```

  </div>
  <div>

<fn-ripple-btn background="red">Click me</fn-ripple-btn>

  </div>
</section>

## Configure with events
<section class="columns">
  <div>

`<fn-ripple-btn>` can be configured to listen for click event

```html
<fn-ripple-btn>Click me</fn-ripple-btn>
```
In javascript
```js
const button = document.querySelector('fn-ripple-btn');
button.addEventListener('fn-click', () => console.log('button is clicked'))
```

  </div>

  <div>

<fn-ripple-btn>Click me</fn-ripple-btn>

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
  <fn-ripple-btn>Hurray</fn-ripple-btn>
)
```

  </div>
  <div>

<h2>This is fawn components</h2>
<fn-ripple-btn>Hurray</fn-ripple-btn>
  </div>
</section>
