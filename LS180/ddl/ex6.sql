-- In the previous exercise, we added a CHECK constraint to the stars table to 
-- enforce that the value stored in the spectral_type column for each row is valid.
--  In this exercise, we will use an alternate approach to the same problem.

-- PostgreSQL provides what is called an enumerated data type; that is, a data 
-- type that must have one of a finite set of values. For instance, a traffic
--  light can be red, green, or yellow: these are enumerate values for the color
--   of the currently lit signal light.

-- Modify the stars table to remove the CHECK constraint on the spectral_type 
-- column, and then modify the spectral_type column so it becomes an enumerated 
-- type that restricts it to one of the following 7 values: 'O', 'B', 'A', 'F', 
-- 'G', 'K', and 'M'.

ALTER TABLE stars
  DROP CONSTRAINT valid_spectral_types;

CREATE TYPE spectrals AS ENUM ('O', 'B', 'A', 'F', 'G', 'K', 'M');

ALTER TABLE stars
  ALTER COLUMN spectral_type TYPE spectrals
  USING spectral_type::spectrals;