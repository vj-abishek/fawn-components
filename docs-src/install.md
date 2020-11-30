---
layout: page.11ty.cjs
title: fawn-components / Install
---

# Install

`fawn-components` is distributed on npm, so you can install it locally or use it via npm CDNs like unpkg.com.

## Local Installation

```bash
npm i fawn-components
```

## CDN

npm CDNs like [unpkg.com]() can directly serve files that have been published to npm. This works great for standard JavaScript modules that the browser can load natively.

For this element to work from unpkg.com specifically, you need to include the `?module` query parameter, which tells unpkg.com to rewrite "bare" module specificers to full URLs.

### HTML
```html
<script type="module" src="https://unpkg.com/fawn-components?module"></script>
```
This will import the whole components

### Seperate components
```html
<script type="module" src="https://unpkg.com/fawn-components@latest/lib/fn-pwa-banner.js?module"></script>
```
In place of `fn-pwa-banner` replace it with the component you want to you
### JavaScript
```html
import 'https://unpkg.com/fawn-components?module';
```
