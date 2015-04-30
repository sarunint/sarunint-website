//= require angular
//= require jquery
//= require bootstrap-sass
/// <reference path="all.ts" />

module sarunint_website {
  angular
    .module('sarunint-website', ['sarunint-website.widgets', 'sarunint-website.api', 'sarunint-website.config']);
}
