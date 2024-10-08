-- SQL consists of 3 different sublanguages. For example, one of these sublanguages
--  is called the Data Control Language (DCL) component of SQL. It is used to 
--  control access to a database; it is responsible for defining the rights and 
--  roles granted to individual users. Common SQL DCL statements include:
-- GRANT
-- REVOKE
-- Name and define the remaining 2 sublanguages, and give at least 2 examples of each.

-- ANSWER:
-- (II) A second sublanguage is the Data Definition Language or DDL. This sub-
-- language is primarily used to structure tables, to set up and modify the schema, 
-- including doing things like setting constraints, renaming columns, adding columns,
-- setting and changing data types, and setting primary and foreign keys.
-- For example, the ALTER TABLE command is used to make changes to an existing table
-- while the CREATE TABLE command is used to define the schema for a new table.

-- (III) The third and final sublanguage is the Data Manipulation Language or DML.
-- This sub-language is used whenever we are managing the actual data inside an 
-- existing SQL relation. Here "manipulation" and "management" are usually split 
-- into 4 different task-categories: Data Creation, Data Reading, Data Updating,
-- and Data Destruction. The first is accomplished with INSERT INTO statments; the 
-- second with SELECT statements, the third with UPDATE statements; and the fourth
-- with DELETE statements.