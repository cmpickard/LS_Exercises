-- Our workshop has decided to not make an Accelerometer after all. Delete any data
--  related to "Accelerometer", this includes the parts associated with an 
--  Accelerometer.

DELETE FROM parts WHERE device_id = 1;
DELETE FROM devices WHERE id = 1;

-- Further Exploration
-- This process may have been a bit simpler if we had initially defined our 
-- devices tables a bit differently. We could delete both a device and its 
-- associated parts with one SQL statement if that were the case. What change 
-- would have to be made to table parts to make this possible? Also, what SQL 
-- statement would you have to write that can delete both a device and its parts 
-- all in one go?

-- ANS: We can add an "ON DELETE CASCADE" clause to the FOREIGN KEY column in our
-- parts table to ensure that whenever the device is deleted, all parts that
-- reference that device are also deleted automatically.