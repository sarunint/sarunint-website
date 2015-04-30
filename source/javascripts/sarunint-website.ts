//= require angular
//= require jquery
//= require bootstrap-sass
/// <reference path="../typings/tsd.d.ts" />

module sarunint_website {
  angular
    .module('sarunint-website', ['sarunint-website.widgets', 'sarunint-website.api', 'sarunint-website.config']);
}
