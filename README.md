# Welcome to Flight Service

## Project Setup
- Clone the Project on your local
- Execute `npm i` on the same path as of your root directory of the downloaded project
- Create a `.env` file in the root directory and add the following environment variable
   - `PORT=2002`
- Inside the `src/config` folder create a new file `config.json` ans then add the following piece of json

---
{
  "development": {
    "username": "<Your_DB_Login_NAME>",
    "password": "<Your_DB_password>",
    "database": "Flight_Search_DB_DEV",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }


---
 - Once you've added your db config as listed above , go to the src folder from your terminal and 
 execute `npx sequlize db:create`
 and then execute

 `npx sequlize db:migrate`

---

## DB Design
 -Airplane Table
 -Flight
 -City
 -Airport

 -A flight belong to an airplane but one airplane can be used in multiple flights
 -A city has many airports but one belongs to a city
 -One airport can have many flights, but a flight belongs to one airports


 ## Tables

 ### City -> id, name, created_at, updated_at
 ### Airport -> id, name, address, city_id, created_at, updated_at
     Relationship -> City has many Airports belongs to a city (one to many)