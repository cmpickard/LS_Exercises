-- Write a query that displays the description for every service that is
-- subscribed to by at least 3 customers. Include the customer count for each
-- description in the report. The report should look like this:

--  description  | count
-- --------------+-------
--  DNS          |     3
--  Unix Hosting |     5
-- (2 rows)

SELECT s.description, count(*) FROM services s
  JOIN customers_services cs
    ON cs.service_id = s.id
  JOIN customers c
    ON c.id = cs.customer_id
  GROUP BY s.id
  HAVING count(*) > 2;