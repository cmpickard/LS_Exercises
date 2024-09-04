-- Write a query to retrieve the customer data for every customer who does not
-- currently subscribe to any services.

SELECT customers.* FROM customers 
  LEFT JOIN customers_services ON customers.id = customers_services.customer_id
  WHERE service_id IS NULL;


-- Further Exploration
  -- Can you write a query that displays all customers with no services and all
  -- services that currently don't have any customers? The output should look like this:

--  id |     name      | payment_token | id |     description     | price
-- ----+---------------+---------------+----+---------------------+--------
--   2 | Nancy Monreal | JKWQPJKL      |    |                     |
--     |               |               |  8 | One-to-one Training | 999.00
-- (2 rows)

SELECT customers.*, services.* FROM customers 
  LEFT JOIN customers_services ON customers.id = customers_services.customer_id
  FULL JOIN services ON services.id = customers_services.service_id
  WHERE customer_id IS NULL OR service_id IS NULL;