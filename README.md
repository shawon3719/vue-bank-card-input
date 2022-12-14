<p align="center">
  <img src="https://i.ibb.co/8NDbymc/ttt.png" alt="" />
  <img src="https://iili.io/68jmhB.png" alt="" />
</p>

# Vue Bank Card Input

[![Version (npm)][badge_npm_version]][link_npm]
![Vue.js version][badge_vue_version]
[![Build Status][badge_build_status]][link_build_status]
[![Coverage][badge_coverage]][link_coverage]
[![License][badge_license]][link_license]

> Vue Component for user data entry of the bank card

**Demonstration is [available here](https://shawon3719.github.io/vue-bank-card-input/).**

## Installation

```bash
npm i --save @shawon3719/vue-bank-card-input
```

or

```bash
yarn add @shawon3719/vue-bank-card-input
```

You can import the library and styles, then use it as a Vue plugin to enable the functionality globally on all components.

```js
import Vue from "vue"
import VueBankCard from "@shawon3719/vue-bank-card-input"
import "@shawon3719/vue-bank-card-input/dist/vue-bank-card-input.css"

Vue.component("VueBankCard", VueBankCard)
```

## Basic usage

```vue
<VueBankCard is-new />
```

## Properties

Name      | Required | Type           | Default | Description
:---      | :---     | :---           | :---    | :---
`card_number_label`  | no       | String | `"Card number"`    | You can use your locale text
`expiration_label`  | no       | String | `"MM/YY"`    | You can use your locale text
`cvv_label`  | no       | String | `"CVV"`    | You can use your locale text
`card_number_placeholder`  | no       | String | `"Enter Card Number"`    | You can use your locale text
`number_required`  | no       | String | `"You need to fill this field"`    | You can use your locale text
`expiration_invalid`  | no       | String | `"Date invalid"`    | You can use your locale text
`cvv_invalid`  | no       | String | `"Invalid data"`    | You can use your locale text
`number`  | no       | String, Object | `""`    | Number of card
`isSmall` | no       | Boolean        | `false` | View card controller: base or small
`isNew`   | no       | Boolean        | `false` | View card controller: saved or new
`disableDelete`   | no       | Boolean        | `false` | Disable delete option on small card
`errors`  | no       | Object         | `{}`    | Errors from outside the component. From server etc.
`isReset` | no       | Boolean        | `false` | Trigger for reset form
`isFocus` | no       | Boolean        | `false` | Card number field focus when component mounted (available if `isNew` is true)
`imagesBasePath` | no | String | [default](`https://cdn.jsdelivr.net/gh/shawon3719/vue-bank-card-input@master/public/images/`) | Base path and banks or payment systems logotypes

## Events

Name           | Type     | Parameters | Description
:---           | :---     | :---       | :---
`enter`        | Function | `event` - Event of keydown | Handler of keydown on enter event
`clear-errors` | Function | `errors` - Object of errors | Clearing errors from outside
`reset`        | Function | `isReset` - State of isReset property, type Boolean | Turn off isReset property
`delete-card`  | Function | `event` - Event of click | Handler of click on trash button
`getCardInfo`  | Function | `event` - get all input data

## Example

```vue
<template>
  <VueBankCard
    is-small
    is-new
    is-focus
    :errors="errors"
    :is-reset="resetForm"
    @enter="onEnter"
    @clear-errors="clearErrors"
    @reset="resetForm = $event"
  ></VueBankCard>
</template>

<script>
export default {
  data() {
    return {
      errors: {
          cardNumber: "Enter valid card",
          expDateMonth: "Card has been expired",
          cvv: "Invalid CVV"
      },
      resetForm: false
    }
  },
  methods: {
    onEnter(event) {
      event.preventDefault();
      console.log(event);
    },
    clearErrors(errors) {
      this.errors = { ...errors };
    }
  }
}
</script>
```
## Use your own logotypes

By default banks logos provided from CDN: `https://cdn.jsdelivr.net/gh/shawon3719/vue-bank-card-input@master/public/images/%image_path%`.

If you want to use your own logotypes you can pass base images path by prop `images-base-path`. For example:
```vue
<template>
  <VueBankCard
    is-new
    :images-base-path="imagesPath"
  ></VueBankCard>
</template>

<script>
export default {
  data() {
    return {
      imagesPath: "//your-own-cdn-or-host.com/path/to/assets/"
    }
  },
}
</script>
```

Now path to logotype would be `//your-own-cdn-or-host.com/path/to/assets/banks-logos/ru-sberbank.png`.

So you must have two folders in your defined path:
 - `banks-logos` - Must contain bank logos;
 - `brands-logos` - Must contain payment systems (VISA, Master Card, etc) logos.

Name of files with logotypes should be the same that come with this package.

## Testing

For package testing we use `jest` framework and `docker-ce` + `docker-compose` as develop environment. So, just write into your terminal after repository cloning:

```shell
$ make install
$ make test
```

## Changes log

[![Release date][badge_release_date]][link_releases]
[![Commits since latest release][badge_commits_since_release]][link_commits]

Changes log can be [found here][link_changes_log].

## Support

[![Issues][badge_issues]][link_issues]
[![Issues][badge_pulls]][link_pulls]

If you will find any package errors, please, [make an issue][link_create_issue] in current repository.

## License

This is open-sourced software licensed under the [MIT License][link_license].

[badge_npm_version]:https://img.shields.io/npm/v/@shawon3719/vue-bank-card-input.svg?maxAge=180
[badge_vue_version]:https://img.shields.io/github/package-json/dependency-version/shawon3719/vue-bank-card-input/vue.svg
[badge_build_status]:https://img.shields.io/github/workflow/status/shawon3719/vue-bank-card-input/tests/master
[badge_coverage]:https://img.shields.io/codecov/c/github/shawon3719/vue-bank-card-input/master.svg?maxAge=60
[badge_release_date]:https://img.shields.io/github/release-date/shawon3719/vue-bank-card-input.svg?style=flat-square&maxAge=180
[badge_commits_since_release]:https://img.shields.io/github/commits-since/shawon3719/vue-bank-card-input/latest.svg?style=flat-square&maxAge=180
[badge_issues]:https://img.shields.io/github/issues/shawon3719/vue-bank-card-input.svg?style=flat-square&maxAge=180
[badge_pulls]:https://img.shields.io/github/issues-pr/shawon3719/vue-bank-card-input.svg?style=flat-square&maxAge=180
[badge_license]:https://img.shields.io/github/license/shawon3719/vue-bank-card-input.svg?longCache=true
[link_releases]:https://github.com/shawon3719/vue-bank-card-input/releases
[link_commits]:https://github.com/shawon3719/vue-bank-card-input/commits
[link_changes_log]:https://github.com/shawon3719/vue-bank-card-input/blob/master/CHANGELOG.md
[link_issues]:https://github.com/shawon3719/vue-bank-card-input/issues
[link_pulls]:https://github.com/shawon3719/vue-bank-card-input/pulls
[link_build_status]:https://travis-ci.org/shawon3719/vue-bank-card-input
[link_coverage]:https://codecov.io/gh/shawon3719/vue-bank-card-input/
[link_npm]:https://www.npmjs.com/package/@shawon3719/vue-bank-card-input
[link_create_issue]:https://github.com/shawon3719/vue-bank-card-input/issues/new/choose
[link_license]:https://github.com/shawon3719/vue-bank-card-input/blob/master/LICENSE
