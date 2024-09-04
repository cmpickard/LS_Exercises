-- Write an SQL query that returns a result table with the name of each device
--  in our database together with the number of parts for that device.

SELECT devices.name, count(*) AS number_of_parts FROM devices 
  RIGHT JOIN parts ON parts.device_id = devices.id
  GROUP BY devices.name;
