-- INNER JOIN
-- Write an SQL query to display all devices along with all the parts that make
--  them up. We only want to display the name of the devices. Its parts should 
--  only display the part_number.

--      name      | part_number
-- ---------------+-------------
--  Accelerometer |          12
--  Accelerometer |          14
--  Accelerometer |          16
--  Gyroscope     |          31
--  Gyroscope     |          33
--  Gyroscope     |          35
--  Gyroscope     |          37
--  Gyroscope     |          39
-- (8 rows)
-- NOTE: The part numbers and sequence may vary from those shown above.

SELECT devices.name, parts.part_number FROM devices
  JOIN parts ON devices.id = parts.device_id;