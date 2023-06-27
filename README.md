# Sprint 7 project
Name : Sprint 7 project
clone the file hm07-qa-us.git to your computer
then run npm install
navigate to postman while leaving the terminal window open


this project tests these end points for these for the following methods
delete:/api/v1/orders/1
put: /api/v1/orders/1
post: api/v1/orders
get: /api/v1/kits/1
run the above requests in postman then return to the terminal
run the following tests in the terminal

npx jest tests/postHandlers.test.js
npx jest tests/putHandlers.test.js
npx jest tests/deleteHandlers.test.js
npx jest tests/getHandlers.test.js

all of them should past except for delete