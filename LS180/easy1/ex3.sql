-- For this exercise, we'll add some data to our birds table. Add five records to 
-- this database so that our data looks like:

--  id |   name   | age | species
-- ----+----------+-----+---------
--   1 | Charlie  |   3 | Finch
--   2 | Allie    |   5 | Owl
--   3 | Jennifer |   3 | Magpie
--   4 | Jamie    |   4 | Owl
--   5 | Roy      |   8 | Crow
-- (5 rows)

INSERT INTO birds (name, age, species)
VALUES ('Charlie', 3, 'Finch'), ('Allie', 5, 'Owl'), ('Jennifer', 3, 'Magpie'),
('Jamie', 4, 'Owl'), ('Roy', 8 , 'Crow');

-- Further Exploration
-- There is a form of INSERT INTO that doesn't require the column names.
--  How does that form of INSERT INTO work, and when would you use it?

-- ANS: By not specifying any column names, we can insert values in the order
-- they appear in the table. If we specify N values and the table has N + M cols
-- then the first N cols will be filled in order and the remaining M left blank.
-- This can be annoying if we have an ID column since that one often comes first
-- so we'll need to specify a value for that column for each tuple we're entering.
-- The best way to handle that is to use the keyword DEFAULT to tell postgres to
-- simply insert the DEFAULT value for the id column:

INSERT INTO birds
VALUES (DEFAULT, 'Tony', 43, 'TigerBird');