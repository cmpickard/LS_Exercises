-- Add a semi_major_axis column for the semi-major axis of each planet's orbit; 
-- the semi-major axis is the average distance from the planet's star as measured 
-- in astronomical units (1 AU is the average distance of the Earth from the Sun). 
-- Use a data type of numeric, and require that each planet have a value for 
-- the semi_major_axis.

ALTER TABLE planets
  ADD COLUMN semi_major_axis numeric NOT NULL;

--   Further Exploration
-- Assume the planets table already contains one or more rows of data. What will
--  happen when you try to run the above command? What will you need to do 
--  differently to obtain the desired result? To test this, delete the 
--  semi_major_axis column and then add a row or two of data (note: your stars
--   table will also need some data that corresponds to the star_id values):

ANS: The attempt to add the column will throw an error which will state that
there is no way to implement the NOT NULL constraint on the new column given
that all existing rows would nec have a NULL value for that column upon its
addition to the schema.
The fix is to first add the new column WITHOUT the NOT NULL constraint, then 
UPDATE all rows to have a value for the new column, then implement the NOT NULL
constraint.