# Helsinki-city-bike-app
Solita Dev Academy pre-assignment.  
[Original assignment](https://github.com/solita/dev-academy-2022-fall-exercise)

# URL
http://ec2-16-171-62-148.eu-north-1.compute.amazonaws.com

## Config
Separate .env files are required for backend and frontend with following env variables.
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
<a href="https://www.postgresql.org/" title="PostgreSQL"><img src="https://github.com/get-icon/geticon/raw/master/icons/postgresql.svg" alt="PostgreSQL" width="50px" height="50px"></a> &nbsp; &nbsp; <a href="https://expressjs.com/" title="Express"><img src="https://github.com/get-icon/geticon/raw/master/icons/express.svg" alt="Express" width="50px" height="50px"></a> &nbsp; &nbsp; <a href="https://reactjs.org/" title="React"><img src="https://github.com/get-icon/geticon/raw/master/icons/react.svg" alt="React" width="50px" height="50px"></a> &nbsp; &nbsp; <a href="https://nodejs.org/" title="Node.js"><img src="https://github.com/get-icon/geticon/raw/master/icons/nodejs-icon.svg" alt="Node.js" width="50px" height="50px"></a>    
***PostgreSQL, Express, React and Node.js***   
Testing is done with Jest and Cypress.    
Deployed on aws ec2.



