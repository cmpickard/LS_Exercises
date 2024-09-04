-- This set of exercises will focus on an auction. Create a new database called 
-- auction. In this database there will be three tables, bidders, items, and bids.

-- After creating the database, set up the 3 tables using the following 
-- specifications:

-- bidders
    -- id of type SERIAL: this should be a primary key
    -- name of type text: this should be NOT NULL

-- items
    -- id of type SERIAL: this should be a primary key
    -- name of type text: this should be NOT NULL
    -- initial_price and sales_price: These two columns should both be of type numeric.
    --  Each column should be able to hold a positive number as high as 1000 dollars 
    --  with 2 decimal points of precision.
    -- The initial_price represents the starting price of an item when it is first 
    -- put up for auction. This column should never be NULL.
    -- The sales_price represents the final price at which the item was sold. This 
    -- column may be NULL, as it is possible to have an item that was never sold off.
    
-- bids
    -- id of type SERIAL: this should be a primary key
    -- bidder_id, item_id: These will be of type integer and should not be NULL. This
    --  table connects a bidder with an item and each row represents an individual 
    --  bid. There should never be a row that has bidder_id or item_id unknown or 
    --  NULL. Nor should there ever be a bid that references a nonexistent item or 
    --  bidder. If the item or bidder associated with a bid is removed, that bid 
    --  should also be removed from the database.
        -- Create your bids table so that both bidder_id and item_id together form a 
        -- composite index for faster lookup.
    -- amount - The amount of money placed for each individual bid by a bidder. 
    -- This column should be of the same type as items.initial_price and have the 
    -- same constraints.

CREATE TABLE bidders (
  id SERIAL PRIMARY KEY,
  name text NOT NULL
);

CREATE TABLE items (
  id SERIAL PRIMARY KEY,
  name text NOT NULL,
  initial_price decimal(6,2) NOT NULL,
  sales_price decimal(6,2)
);

ALTER TABLE items
  ADD CONSTRAINT initial_price_range CHECK (initial_price BETWEEN 0.00 AND 1000.00);
ALTER TABLE items
  ADD CONSTRAINT sales_price_range CHECK (sales_price BETWEEN 0.00 AND 1000.00);

CREATE TABLE bids (
 id SERIAL PRIMARY KEY,
 bidder_id int REFERENCES bidders(id) ON DELETE CASCADE NOT NULL ,
 item_id int REFERENCES items(id) ON DELETE CASCADE NOT NULL ,
 amount decimal(6,2) NOT NULL
);
ALTER TABLE bids
  ADD CONSTRAINT bids_price_range CHECK (amount BETWEEN 0.01 AND 1000.00)

CREATE INDEX ON bids (bidder_id, item_id);

-- Finally, use the \copy meta-command to import the below files into your 
-- auction database. You'll have to create these files yourself before you 
-- can import them with \copy.

\copy bidders FROM /home/cpickard/LSCode/LS_Exercises/LS180/med_many/bidders.csv WITH HEADER CSV
\copy items FROM /home/cpickard/LSCode/LS_Exercises/LS180/med_many/items.csv WITH HEADER CSV
\copy bids FROM /home/cpickard/LSCode/LS_Exercises/LS180/med_many/bids.csv WITH HEADER CSV