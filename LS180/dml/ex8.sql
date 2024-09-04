-- Insert one more device into the devices table. You may use this SQL statement
--  or create your own.

-- INSERT INTO devices (name) VALUES ('Magnetometer');
-- INSERT INTO parts (part_number, device_id) VALUES (42, 3);
-- Assuming nothing about the existing order of the records in the database, write
-- an SQL statement that will return the name of the oldest device from our 
-- devices table.

INSERT INTO devices (name) VALUES ('Magnetometer');
INSERT INTO parts (part_number, device_id) VALUES (42, 3);

SELECT * FROM devices
ORDER BY created_at
LIMIT 1;


-- Further Exploration
-- What do you think would happen if we had two devices with the same created_at
-- value that happened to be the oldest timestamp? How might this affect what we
-- can infer from the data we get when using a LIMIT clause? Try inserting two
-- devices with the same INSERT statement, and then find the 'newest' device
-- using ORDER BY and LIMIT.

-- ANS: When two devices have the exact same timestamp value, our query will return
-- exactly one of them and we won't be able to reliably anticipate which one unless
-- we specify some other ORDER BY clause that can discriminate between them. 
-- As for what we can infer, this possibility (i.e. of two devices having the
-- exact same timestampe) means that whatever result our query returns, we should
-- only conclude that there is no device OLDER than the one returned -- and not
-- that all un-returned devices are younger than the one returned.