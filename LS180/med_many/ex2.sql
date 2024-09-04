-- Write a query to retrieve the customer data for every customer who currently
-- subscribes to at least one service.

SELECT customers.id, customers.name, customers.payment_token FROM customers 
  JOIN customers_services ON customers_services.customer_id = customers.id
  GROUP BY customers.id
  ORDER BY customers.id;

  -- OR

SELECT DISTINCT (customers.*) FROM customers
  JOIN customers_services ON customers.id = customers_services.customer_id
  ORDER BY customers.id;