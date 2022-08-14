# Helsinki-city-bike-app
Solita Dev Academy pre-assignment.  
[Original assignment](https://github.com/solita/dev-academy-2022-fall-exercise)

# URL
http://ec2-16-171-62-148.eu-north-1.compute.amazonaws.com

## Required env variables

#### Frontend   
`REACT_APP_MAPS_API_KEY` Google maps API key. App can run without it but maps won't be displayed.   
#### Backend    
`DATABASE_URL` Postgresql url.

## Run locally 
```
cd frontend
npm install
npm start
```     
```
cd backend
npm install
npm run dev
```  
## Tests
```
cd frontend
npm test
npm run test:e2e 
```   

## Tech stack
#### Frontend 
React app with axios handling requests.  
Unit testing with Jest and testing-library. E2e testing with cypress.
#### Backend 
Nodejs and Postgresql with sequelize.

