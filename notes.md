HINT: Postman is an awesome tool to start making API Requests with to see what data comes back and how you'll want to manage that data in your React Components.

Wed 4/4/18 start: 6:30pm - 2:00am (7.5 hours; 1.5 hour of coding, 6 hours of fighting with Postman due to api changes, see note below) 
PART 1: Done. Listed the 50 beers and the 50 breweries
  TODO: trouble with pagination.
  NOTE: The bundle exec foreman start does not work
  NOTE: Found a bug, the api changed and no longer allows for /apo/beer/:name,      now they use :id, but that also doesn't work. 


Thurs 4/5/18 start: 8pm - 1:30am (5.5 hours)
  NOTE: figured out how to show 1 beer and 1 brewery without the broken api end points.
  NOTE: fought hard with pagination. I tried about 5 different approaches (infinate scroll, reactPaginate, and a few others I have now lost the names of, along with a few variations on each of these) and nothing worked, I finally tried a competely hacked way of doing it and I either got stuck in an endless loop (page numbers in the 3000's in my rails server) or I can't set the state at all (and can only get page number 1). Finally got something to work right at the end. Now I can change pages using previous or next, but it lags by 1 click, not sure why, but I'll take what I can get for now. (loading all 50 is actually faster, haha)
  TODO: work on styling tomorrow and try pagination one more time.