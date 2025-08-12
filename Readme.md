



# Db desgin for searching flight

- Airplane table 
-city
-Flight 
- Airport

Airplane table contains -
1. id 
2. Model number
3. capacity
4.created at
5.updated at

flight table contain
* id
* src airport id
* dest airport id
* departure date 
* arrival date
* departure time
* arrival time
* Flight number

city table contains-
* id 
* name

Airport table contain
* id
* name
* city id
* address id

- A flight belong to an airplane but one airplane can be used in multiple flight
- A city has many airport but one airport belongs to a city
- one airport can have multiple fligjht belongs to one airport



for creating data base using Sequelize cli
npx sequelize db:create
and then, npx sequelize db:migrate