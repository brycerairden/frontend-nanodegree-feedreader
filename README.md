# Project Overview

This project conducts tests on a RSS Feed Reader to ensure it is working as expected.

## Table of Contents

* [Project Details](#project-details)
* [How to Run](#how-to-run)
* [Dependencies](#dependencies)

## Project Details

The initial codebase was provided as part of the Udacity Front End Developer Nanodegree program, forked from https://github.com/udacity/frontend-nanodegree-feedreader. The task at hand was to edit the feedreader.js to provide test coverage for a given set of scenarios that could be run within Jasmine.

## How to Run

In order to run this project, you must run it on your local machine. First, click on the "Clone or download" button on the main repository page (https://github.com/brycerairden/frontend-nanodegree-feedreader) and select "Download ZIP". Open the downloaded file and unzip it to a local location (such as the desktop). Once unzipped, open "index.html" in the browser and the test suite will run automatically.

Ideally, all tests will successfully pass. This information will show up within the Jasmine section near the bottom of the page, with details on what was tested and passed.

Alternatively, parameters can be changed within the jasmine/spec/feedreader.js file to cause failures, which would then show in the Jasmine section once the page is reloaded with details of the error(s) encountered. The allFeeds array within the js/app.js file could also be edited to cause errors.

## Dependencies

Browser support for HTML5, CSS3, and Javascript, including ES6, JQuery 2.1.1, and Jasmine 2.1.2
Access to fonts.googleapis.com to load the Roboto font

