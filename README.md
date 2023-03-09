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