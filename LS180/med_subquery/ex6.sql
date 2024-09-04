-- For this exercise, use a scalar subquery to determine the number of bids on 
-- each item. The entire query should return a table that has the name of each 
-- item along with the number of bids on an item.

-- Here is the expected output:

--     name      | count
-- --------------+-------
-- Video Game    |     4
-- Outdoor Grill |     1
-- Painting      |     8
-- Tent          |     4
-- Vase          |     9
-- Television    |     0
-- (6 rows)

SELECT name, (SELECT count(*) FROM bids WHERE items.id = bids.item_id) FROM items;


-- Further Exploration
-- If we wanted to get an equivalent result, without using a subquery, then we 
-- would have to use a LEFT OUTER JOIN. Can you come up with the equivalent 
-- query that uses LEFT OUTER JOIN?

SELECT items.name, count(bids.bidder_id) FROM items 
  LEFT JOIN bids ON bids.item_id = items.id 
  GROUP BY items.id 
  ORDER BY items.id;
