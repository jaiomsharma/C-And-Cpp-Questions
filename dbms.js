 --------------------------------------------------------------------------------------------------------------------------------
                                                                    DDL COMMMANDS
--------------------------------------------------------------------------------------------------------------------------------

>   Create
-----------
>   Drop =>
-----------
        Permanently delete the table
        example : drop table_name

>   Rename =>
-------------
        Rename the table_name
        example : Rename old_table_name to new_table_name

>   Alter =>
------------
    >   Add column =>
    -----------------
            SYNTAX : Alter table table_name
                     Add emp_name varchar(10);

    >   Delete column =>
    --------------------
            SYNTAX : Alter table table_name
                     drop column emp_name;
    >   Rename col =>
    -----------------
            SYNTAX : alter table table_name
                     rename column old_col_name to new_col_name;

    >   Modification of column =>
    -----------------------------
            SYNTAX : alter table table_name
                     modify column_name new_dataType(new size)

>   Truncate =>
---------------
        Empty the table
        exmple : truncate table_name

                                            --------------------------------------------------------------
                                                                APPLY CONSTRAINNTS
                                            --------------------------------------------------------------

 COMMANDS :

        Alter table table_name
        add constraint constraint_name(it is optional) Primary key (col_name) ** constraint can be applied on multiple cols by separating with comma
        add constraint uni Unique (id)
        add constraint FK Foreign Key (col_name) References table_name(primary key of this table)
        add constraint chk check (condition)
        modify col_name default default_value(give any default value) ** Data type of col_name and default_value should be same
        drop constraint constraint_name(name given at time of creation) ** Default constraint cannot be default
        disable constraint constraint_name(name given at time of creation)
        enable constraint constraint_name(name given at time of creation)

CHECK WHICH CONSTRAINTS ARE APPLIED =>>>
    COMMANDS :

            select *
            from user_constraints columns
            where table_name='NAME_OF_TABLE'    ** Table name should be in Capital leters

                                            -----------------------------------------------------------------
                                                                    DML STATEMENTS
                                            -----------------------------------------------------------------

STATEMENTS >>>

    1. INSERT =>
    ---------
            >   Insert rows into the table
            >   Adding new Row =>
                    COMMAND >>
                        insert into table_name (col_name1 ,col_name2 ......)
                        values (value1 , value2 .....);

                        insert into table_name      // NOTE: If we do not specify the column name then it automatically chooses columns line wise
                        values(1,2,3,NULL)          // NOTE: If null value is given on date then by default the systemdate is given using SYSDATE
                                                    // NOTE: SYSDATE s Special Value

                        values(1,'wff',SYSDATE,NULL,TO_DATE('02 3,1999'),(MON DD,YYYY))
                        OUPTUT >> 3 FEB 1999

                        values(&department_id , '&department_name' , &location)     // NOTE: Used to get input from the user
                                                                                    // NOTE: & is a placeholder

            >   Copying rows from another table =>
                    insert into table_name(id,name)
                    select employee_id ,lastname , salary
                    from employees
                    where job_id = 5 // NOTE: where commnd is optional
                    or>> where job_id LIKE '%REP%' // NOTE: Select all job ids which includes the work REP

    2. DELETE =>
    ------------

    3. UPDATE =>
    ------------

--------------------------------------------------------------------------------------------------------------------------------
                                                OPERATORS
--------------------------------------------------------------------------------------------------------------------------------

1.  Arithmetic =>
----------------
    >   +   (unary) =>
    ------------------
            select -emp_no from emp_table // NOTE: RESULT will be the values with negative sign
    >   -   (unary)
    >   +   (binary) =>
    -------------------
            select lname + fname from emp       // NOTE: RESULT IS ADDED DATA OF BOTH COLUMNS
            select lname + fname as "new col_name" from emp // NOTE: give name for column generated by addition of 2 cols

    >   -   (binry)
    >   *
    >   /
    >   %
    --------
            select (marks/total)*100 from emp

2. Logical =>
-------------
    >   AND =>
            select * from emp where emp_id = 1  AND lname = 'a' AND fname = 'b'

    >   OR
    >   NOT

3.  Comparison =>
-----------------
    >   = (equality)
    >   != , <> , ^= (not equal)
            where id <> 1 // NOTE: This condition will be true when id is not equal to 1
    >   > , >=
    >   < , <=

4. Special Operator =>
----------------------
    >   Like ( _ , % ) => Also called wildcard operators
    ---------------------
            >   _ takes single characters
            >   % uses multiple characters

            >
                |  Lname  |
                -----------
                |   abc   |
                |   xrd   |
                |   a     |
                |   de    |

                abc %       // NOTE: will select all patterns starting with abc
                ab %        // NOTE: will select all pa tterns starting with ab
                % ab %      // NOTE: pattern should contain ab in between and can start and end with any character
                _00 %       // NOTE: 2nd and 3rd pos wshould contain 00 and minimum length will be 3
                2_%_%       // NOTE: start with 2 ,min length should be 3
                %2          // NOTE: Ending should ne with 2
                2____3      // NOTE: start with 2  , end with 3 and max length will be 5
                _2%3        // NOTE: Endingwith 3

                SYNTAX =>
                    select * from emp_table where salary like _%1


    >   In =>
    ---------
        select * from emp where emp_id in (1,2,3)   // NOTE: Result will be data with emp_id 1,2,3
        select * from emp where emp_name in ('abc' , 'xyz')     // NOTE: Result will be data with emp_name is abc , xyz
        select * from emp where emp_name in (select l_name from emp where id > 10)

    >   Any ( = , < , > , <= , >=) =>
    ---------------------------------
        select * from emp where cn = any (10,20,30)
        select * from emp where cn = NOT any (10,20,30)

    >   All =>
    ----------
        select * from emp where cn = all (10,20,30)
        select * from emp where cn = NOT all (10,20,30)

    >   Between =>
    --------------
        select * from emp where col_name between value1 AND value2
        select * from emp where col_name NOT between value1 AND value2

    > Is Null =>
    ------------
        select * from emp where last_name is null       // NOTE: Result will be the data wth null last_name
        select * from emp where last_name is NOT null

QUESTIONS=>
-------
    > Using where clause : find emp_id , last_name , job# , dept# , from the table employees having  dept# = 90
    > Using Comparison op : find last name and salary from table employee having salary <=3000
    > find last name and salary from table employee having range 2500 to 3500
    > find emp# , last name , salary , manager# from the table employees having manager# between 100 , 101, 201
    > Pattern matching using like operator : find first name from the table employee having the starting alphabet of the first name 's'
    > combining wildcard characters : find the lastname from table employees having second char of lastname to be 'o'
    > Using null condition : fnd lastname and manager id from table having managerid is null
    > Logical operators =>
        >   using and operator : find empid, lastname,jobid of table employee havinf salary >= 10000 and there exist 'man' letters  in   job id
        > using or operator : same query
        > using not operator : find lastname and job id from the table employee having job id not existing between id_programmer , st_clerk, sp_rep

    > extra queries : create a query to display all data from employees table . separate each column by a ',' name the comumn "THE OUTPUT"
        answer : select empid||','||fname||','||lastname from employees         // NOTE: || is called conjunction operator
        output : 101,abc,fed
        > create a query to display unique job id from the employees table
        > write a query by selecting all atributes of employee table and name the col headings as "EMP#" for empid , "Employee" LastName , "Job" jobid , "HIRE DATE" hire_date
        > display lastname concatenated with jobid , separated by ',' and space and name the col "Emp and Title"
        > display the lastname and salary for all employees whose salary is not in the range of $5000 and $12000
        > wite a query to diplay current date
        > wite a query to diplay current date. label the column "Date" , "dATE" , "date"

>> Display name of existing names of tables and database :
        select table_name from user_tables
        
SINGLE ROW SQL FUCNTIONS :
--------------------------
    
    Types : Single valued >> result one result per row
            Multivalued >> (Group by functions) >> result one result per set of rows
            
    > Manipulate data
    > Accept arguments 
    
    Singe row finctions --> character
                            number
                            date
                            conversions
                            general
                        
                            CHARACTER : case conversion : lower ('string'), 
                                                          upper ('string'), 
                                                          initcap ('string')
                                        character manipulation : concat (string1,string2),
                                                                 substr (sting ,start , end),
                                                                 length (string),
                                                                 instr (string1 , string2),
                                                                    ex : instr("helloworld","w") --> 6
                                                                 lpad|rpad (salary , 10 , '*') --> *****24000(lpad) --> 25000*****(rpad), 
                                                                 trim('h' from 'hello') --> ello,
                                                                 replace ('jack ad jue' , 'j' ,'bl') --> black and blue
                                                                 
                            NUMBER : ROUND (45.926, 2) --> 45.93
                                     ROUND (value1 , +ve or -ve or 0 or default , optional)
                                        >   round(2000.6 , 1) ->    2000.6
                                        >   round(2000.5,-1) -> 2000
                                        >   round(2001.6,-2) -> 2000
                                        >   round(23456.789 , -1) -> 23460.000
                                         
                                     TRUNC  (45.926 , 2) --> 45.92
                                     MOD (1600 , 300 ) --> 10
                                     
    
    
                        
    
    
    
    
    
    
    
    
    
