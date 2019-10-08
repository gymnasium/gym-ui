# gym-ui

A React UI Library for [Gymnasium](https://thegymnasium.com)

[![CircleCI](https://circleci.com/gh/gymnasium/gym-ui.svg?style=svg)](https://circleci.com/gh/gymnasium/gym-ui) [![This project is using Percy.io for visual regression testing.](https://percy.io/static/images/percy-badge.svg)](https://percy.io/Gymnasium/gym-ui)
[![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-v1.4%20adopted-ff69b4.svg)](./CODE_OF_CONDUCT.md)

## Note about fonts

This library uses a licensed font called `brandon-grotesque`.  
If you don't have this font, the UI components will fall back to use Google font called `Josefin Sans` which is close enough.

To make `Josefin Sans` avaiable, insert the following into the <head> of your HTML document:

```
<link
  href="https://fonts.googleapis.com/css?family=Josefin+Sans&display=swap"
  rel="stylesheet"
/>
```

Next in line fallback fonts are `Helvetica Neue`, `Helvetica`, `sans-serif`.