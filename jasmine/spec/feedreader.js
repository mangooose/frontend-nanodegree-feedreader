$(
  (function() {

    /*Test suite named "RSS Feeds" */
    describe("RSS Feeds", () => {
      /*Tests to make sure that the allFeeds variable
         *has been defined and that it is not empty.*/
      it("are defined", () => {
        expect(allFeeds).toBeDefined();
        expect(allFeeds.length).not.toBe(0);
      });

      /* Test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.*/
      function allFeedsURL(i) {
        var int = 1 + i;
        it("feed " + int + " has a URL", () => {
          expect(allFeeds[i].url).toBeDefined();
          expect(allFeeds[i].url.length).toBeGreaterThan(0);
        });
      }
      for (var i = 0; i < allFeeds.length; i++) {
        allFeedsURL(i);
      }

      /* Test that loops through each feed in the
         * allFeeds object and ensures it has a name defined
         * and that the name is not empty.*/
      function allFeedsName(j) {
        var int = 1 + j;
        it("feed " + int + " has a name", () => {
          expect(allFeeds[j].name).toBeDefined();
          expect(allFeeds[j].name).not.toBe();
        });
      }
      for (var j = 0; j < allFeeds.length; j++) {
        allFeedsName(j);
      }
    });

    /* Test suite named "The Menu" */
    describe("The Menu", () => {
      /* Test that ensures the menu element is
         * hidden by default.*/
      it("hidden by default", () => {
        expect(document.body.classList).toContain("menu-hidden");
      });

      /* Test that ensures the menu changes
          * visibility when the menu icon is clicked. Has
          * two expectations: Does the menu display when
          * clicked? Does it hide when clicked again?*/
      it("toggles when clicked", () => {
        $(".menu-icon-link").click();
        expect(document.body.classList).not.toContain("menu-hidden");
        $(".menu-icon-link").click();
        expect(document.body.classList).toContain("menu-hidden");
      });
    });
    /* Test suite named "Initial Entries" */
    describe("Initial Entries", () => {
      /* Test that ensures when the loadFeed function
         * is called and completes its work, there is at least
         * a single .entry element within the .feed container */
      beforeEach(done => {
        loadFeed(0, () => {
          done();
        });
      });

      it("feed container contains 1 or more entries", () => {
        var contents = document.querySelectorAll(".feed .entry").length;
        expect(contents).toBeGreaterThan(0);
      });
    });

    /* Test suite named "New Feed Selection" */
    describe("New Feed Selection", () => {
      var firstRun;
      var secondRun;

      /* Test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.*/

      beforeEach(done => {
        loadFeed(0, () => {
          firstRun = $(".feed").html();
          loadFeed(1, () => {
            done();
          });
        });
      });

      it("content changes when new feed is loaded", () => {
        expect(firstRun).toBeDefined();
        expect(secondRun).not.toBeDefined();
        secondRun = $(".feed").html();
        expect(secondRun).toBeDefined();
        expect(firstRun).not.toBe(secondRun);
      });
    });
  })()
);
