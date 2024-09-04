-- For many of the closest stars, we know the distance from Earth fairly 
-- accurately; for instance, Proxima Centauri is roughly 4.3 light years away. 
-- Our database, as currently defined, only allows integer distances, so the most
--  accurate value we can enter is 4. Modify the distance column in the stars 
--  table so that it allows fractional light years to any degree of precision
--   required.

ALTER TABLE stars
  ALTER COLUMN distance TYPE decimal;

--   Further Exploration
-- Assume the stars table already contains one or more rows of data. 
-- What will happen when you try to run the above command? To test this, 
-- revert the modification and add a row or two of data:

ALTER TABLE stars
ALTER COLUMN distance TYPE integer;

INSERT INTO stars (name, distance, spectral_type, companions)
           VALUES ('Alpha Orionis', 643, 'M', 9);

ALTER TABLE stars
ALTER COLUMN distance TYPE numeric ;

-- ANS: That works. No error is thrown b/c Postgres is able to successfully cast
-- the existing values from ints into decimals. So long as a type-conversion is 
-- possible for all existing data, Postgres won't throw an error. We WILL get an
-- error however, if we try to re-TYPE a column but Postgres doesn't know how to
-- coerce all of the existing values in the column to the new type.
-- e.g. 
-- ALTER TABLE stars
-- ALTER COLUMN distance TYPE boolean ;
-- "ERROR:  column "distance" cannot be cast automatically to type boolean"
