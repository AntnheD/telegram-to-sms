CREATE DATABASE myFormDB;

USE myFormDB;

CREATE TABLE Users (
    id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(30) NOT NULL,
    countryCode VARCHAR(5),
    phoneNumber VARCHAR(15),
    additionalInfo VARCHAR(100)
);
