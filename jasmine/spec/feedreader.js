/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.AP
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */

        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        // Individually tests for the URL property of a single feed
        function urlCheckLoop(singleFeed, index) {
            it('Feed ' + index + ' has a valid URL', function() {
                expect(singleFeed.url).toBeDefined();
                expect(singleFeed.url.length).not.toBe(0);
            });
        };

        // Loops through the allFeeds array to parse out the individual feeds
        // Then calls the URL checking function for each
        for(c = 0; c < allFeeds.length; c++) {
            urlCheckLoop(allFeeds[c], c);
        };

        // Individually tests for the name property of a single feed
        function nameCheckLoop(singleFeed, index) {
            it('Feed ' + index + ' has a valid name', function() {
                expect(singleFeed.name).toBeDefined();
                expect(singleFeed.name.length).not.toBe(0);
            });
        };

        // Loops through the allFeeds array to parse out the individual feeds
        // Then calls the name checking function for each
        for(c = 0; c < allFeeds.length; c++) {
            nameCheckLoop(allFeeds[c], c);
        };
    });


    // Test suite to test the menu functionality
    describe('The menu', function() {
        var menuIcon = $('.menu-icon-link');

        //Checks if the menu is hidden on initial load
        it('is hidden by default', function() {
            expect($('body').attr('class')).toBe('menu-hidden');
        });

        // Checks that the initial load state for the menu is hidden
        // Then toggles the menu visible and checks it is visible
        // Finally toggles the menu back to hidden to ensure it returns to hidden
        it('toggles on click', function() {
            expect($('body').attr('class')).toBe('menu-hidden')
            menuIcon.click()
            expect($('body').attr('class')).toBe('')
            menuIcon.click()
            expect($('body').attr('class')).toBe('menu-hidden');
        });
    });

    // Test suite tests that the loadFeed function actually loads feeds
    describe('Initial Entries', function() {

        // Ensures that the first feed is loaded before conducting the test
        beforeEach(function(done) {
            loadFeed(0, function() {
                done();
            });
        });

        // Tests that more than 0 entries exist in the feed container
        it('has at least one entry', function(done) {
            expect($('.feed').has('.entry').length).not.toBe(0);
            done();
        });
    });

    // Test suite tests that new feeds are selected when the loadFeed function is called
    describe('New Feed Selection', function() {
        var feed1,
            feed2;

        // Ensures that loadFeed is called twice and completed before testing
        beforeEach(function(done) {
            loadFeed(0, function() {
                feed1 = document.querySelector('.entry-link').innerHTML;
                loadFeed(1, function() {
                    feed2 = document.querySelector('.entry-link').innerHTML;
                    done();
                })
            });
        });

        // Tests that feed1 and feed 2 are indeed different after loadFeed runs again
        it('changes when new content is loaded', function(done) {
            expect(feed1 !== feed2).toBe(true);
            done();
        })
    });
}());
