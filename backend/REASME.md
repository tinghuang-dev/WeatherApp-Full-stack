## PACKAGE
npm install axios body-parser cors dotenv express express-validator express-rate-limit mongoose nodemon --save

npm run dev

## FLOW
index.js -> loader/index.js -> express.js -> app/routes/api.js -> app/controller/weather -> app/services/openweatherapi.js -> output data for user

## FOLDER STRUCTURE
app: APPLICATION
    - config: CONFIG
    - controllers: BUSINESS LOGIC
    - routes: ROUTES
    - services: BUSSINESS LOGIC / EXTERNAL API
    - model: model
loaders:
    - index.js: (exports/require middle connection between entry point and express.js/mongoose.js)
    - express.js: SERVER
    - mongoose.js: CONNECT TO DB
index.js (entry point)
.env (DO NOT SUMBIT)
.env.example (submit to git, no value should be submitted) 
