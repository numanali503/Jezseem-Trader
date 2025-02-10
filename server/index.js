const express = require('express');
const cors = require('cors');
const router = require('./router/router');
const server = express();

// CORS Middleware for Preflight and Full Headers
server.use(cors({
    origin: '*',  // Allow requests from this origin
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],  // Supported HTTP methods
    allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With', 'Accept'],  // Allowed headers
    credentials: true,  // Allow cookies to be sent with requests
    preflightContinue: false,  // Make sure OPTIONS preflight requests are handled
    optionsSuccessStatus: 204  // Success status for OPTIONS preflight requests
}));

// Middleware to manually handle OPTIONS requests if needed
server.options('*', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization, X-Requested-With, Accept');
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    res.status(204).end(); // Respond with a 204 status for OPTIONS
});

// Middleware to set headers on all incoming requests
server.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization, X-Requested-With, Accept');
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    next();
});

require("dotenv").config({ path: "./config.env" });
require('./database/connection');

// Body parsing middleware with limits to handle large payloads
server.use(express.json({ limit: '50mb' }));
server.use(express.urlencoded({ limit: '50mb', extended: true }));

// API routes
server.use('/api/', router);

// Default route to check server status
server.get('/', (req, res) => {
    res.status(200).send('👋 Welcome to Moja Solutions Server');
});

// Start the server
const Port = 5090;
server.listen(Port, () => {
    console.log(`🖥️  ==================== Server Initiated at Port# ${Port} ===================== 🖥️`);
});
