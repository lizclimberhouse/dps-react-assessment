FOR GRADER:
  Totoal time spent: 24 hours
  PART 1, 2 (kinda), 3 done
  Bonus 1 (some of them), 2, 3 (for locations only), 4

  NOT DRY CODE, but it works!
  My pagination "looks like it works" but I had to hack it because I couldn't figure out a normal pagination option.
  Due to the api issues (combined with my pagination hack), if you refresh a brewery or beer display page all of the data doesn't persist.

PROJECT LOG:
  Wed 4/4/18 6:30pm - 2:00am (7.5 hours; 1.5 hour of coding, 6 hours of fighting with Postman)
    PART 1: Done. Listed the 50 beers and the 50 breweries
    TODO: trouble with pagination.
    NOTE: The bundle exec foreman start does not work
    NOTE: Found a bug, the api changed and no longer allows for /apo/beer/:name,      now they use :id, but that also doesn't work. 

  Thurs 4/5/18 8pm - 1:30am (5.5 hours)
    NOTE: figured out how to show 1 beer and 1 brewery without the broken api end points.
    NOTE: fought hard with pagination. I tried about 5 different approaches (infinate scroll, reactPaginate, and a few others I have now lost the names of, along with a few variations on each of these) and nothing worked, I finally tried a competely hacked way of doing it and I either got stuck in an endless loop (page numbers in the 3000's in my rails server) or I can't set the state at all (and can only get page number 1). Finally got something to work right at the end. Now I can change pages using previous or next, but it lags by 1 click, not sure why, but I'll take what I can get for now. (loading all 50 is actually faster, haha)
    TODO: work on styling tomorrow and try pagination one more time.

  Friday 4/6/18 6:30pm - 12:30am (6 hours)
    NOTE: Fixed by pagination (hack) so you can click once on a button to change pages.
    NOTE: Was able to style all of the pages. Still need to work on saving the "page" into state so I can refresh the brewery and beer pages. 
    TODO: would like to use other end points and possibly a search function and check the responsiveness again.

  Saturday 4/7/18 12noon - 1pm (1 hour)
    NOTE: got the random beer api to display on a single card in the beers component
    NOTE: Tried the single beer api again but still doesn't work.

  Sunday 4/8/18 9pm - 1am (4 hours)
    NOTE: Got the Breweries search working. It only searches by a full word exact match. Tried to put in an in/turnary statement that would show a message if nothing came back from the search but I couldn't get it to work.
    NOTE: Added the glassware page with the images from the beers page.
    NOTE: added brewery locations page and live search on that page. no pagination on this page.
