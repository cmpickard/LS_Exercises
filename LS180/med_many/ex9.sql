-- The company president is looking to increase revenue. As a prelude to his
-- decision making, he asks for two numbers: the amount of expected income from
-- "big ticket" services (those services that cost more than $100) and the maximum
-- income the company could achieve if it managed to convince all of its customers
-- to select all of the company's big ticket items (and only the big ticket items.)

-- For simplicity, your solution should involve two separate SQL queries: one that
-- reports the current expected income level, and one that reports the
-- hypothetical maximum. The outputs should look like this:

SELECT sum(s.price) FROM services s
  JOIN customers_services cs
    ON cs.service_id = s.id
  WHERE s.price > 100.00;

SELECT sum(s.price) * (SELECT count(*) FROM customers) FROM services s
  WHERE s.price > 100.00;

--  sum
-- --------
--  500.00
-- (1 row)

--    sum
-- ---------
--  10493.00
-- (1 row)

