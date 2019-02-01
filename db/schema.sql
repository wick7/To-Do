CREATE DATABASE toDo;
USE toDo;

CREATE TABLE list
(
	id int NOT NULL AUTO_INCREMENT,
	task varchar(255) NOT NULL,
	description varchar(255) NOT NULL,
    completed varchar(255) DEFAULT "unchecked",
	PRIMARY KEY (id)
);

INSERT INTO list (task, description) 
VALUES 
    ('Trash', 'Take out the trash'),
    ('Dishes', 'Clean up the dishes'),
    ('Key Copy', 'Make a copy of the key for the front door');