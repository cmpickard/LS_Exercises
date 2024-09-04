-- In this exercise, we'll use EXPLAIN ANALYZE to compare the efficiency of two 
-- SQL statements. These two statements are actually from the "Query From a
-- Virtual Table" exercise in this set. In that exercise, we stated that our
-- subquery-based solution:

-- SELECT MAX(bid_counts.count) FROM
--   (SELECT COUNT(bidder_id) FROM bids GROUP BY bidder_id) AS bid_counts;

-- was actually faster than the simpler equivalent without subqueries:

-- SELECT COUNT(bidder_id) AS max_bid FROM bids
--   GROUP BY bidder_id
--   ORDER BY max_bid DESC
--   LIMIT 1;

-- In this exercise, we will demonstrate this fact.
-- Run EXPLAIN ANALYZE on the two statements above. Compare the planning time,
-- execution time, and the total time required to run these two statements.
-- Also compare the total "costs". Which statement is more efficient and why?

EXPLAIN ANALYZE SELECT MAX(bid_counts.count) FROM
  (SELECT COUNT(bidder_id) FROM bids GROUP BY bidder_id) AS bid_counts;
-- TOOK .076ms to plan and .049ms to execute
-- COST 37.15

EXPLAIN ANALYZE SELECT COUNT(bidder_id) AS max_bid FROM bids
  GROUP BY bidder_id
  ORDER BY max_bid DESC
  LIMIT 1;
-- TOOK .218ms to plan and .089ms to execute
-- COST 35.65

-- The former is more efficient. We can TELL that's it's more efficient from
-- the EXPLAIN ANLYZE results, which list a shorter time span to execute the
-- the query. As for WHY the former is more efficient, I'm not sure.


-- Further Exploration
-- We mentioned earlier that using a scalar subquery was faster than using an
-- equivalent JOIN clause. Determining that JOIN statement was part of the
-- "Further Exploration" for that exercise. For this "Further Exploration",
-- compare the times and costs of those two statements. The SQL statement
-- that uses a scalar subquery is listed below.

-- Scalar Subquery:

EXPLAIN ANALYZE SELECT name,
(SELECT COUNT(item_id) FROM bids WHERE item_id = items.id)
FROM items;
-- PLANNING TIME: .082ms
-- EXECUTION TIME: .057ms
-- COST: 0..25455.2

EXPLAIN ANALYZE SELECT items.name, count(bids.bidder_id) FROM items 
  LEFT JOIN bids ON bids.item_id = items.id 
  GROUP BY items.id 
  ORDER BY items.id;
--PLANNING TIME: .923ms
--EXECUTION TIME: .187ms
--COST:119.27..120.47