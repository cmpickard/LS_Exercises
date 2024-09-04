-- We want to check that a given item is in our database. There is one problem 
-- though: we have all of the data for the item, but we don't know the id number.
-- Write an SQL query that will display the id for the item that matches all of
-- the data that we know, but does not use the AND keyword. 
-- Here is the data we know:

-- 'Painting', 100.00, 250.00

SELECT sales_price_search.id FROM
  (SELECT * FROM 
    (SELECT * FROM 
      (SELECT * FROM items
                          WHERE name = 'Painting') AS name_search 
                      WHERE initial_price = 100.00) AS initial_price_search
                  WHERE sales_price = 250.00) AS sales_price_search;