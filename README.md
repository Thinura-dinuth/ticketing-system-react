# Ticket Management System

## Overview

This Ticket Management System is a Java-based application designed to simulate a complex ticket distribution and management ecosystem. The system manages a shared ticket pool with multiple vendors and customers interacting concurrently, demonstrating advanced multi-threading and synchronization techniques.

## Key Features

 * Dynamic Configuration: Allows runtime configuration of system parameters
 * Concurrent Ticket Management: Supports multiple vendors and customers
 * Real-time Logging: WebSocket-based log streaming
 * Flexible Operations:
     * Start/Stop system operations   
     * Configure system parameters interactively

## Getting Started

### Prerequisites

* Java 11+
* Node.js
* Spring Boot
* React

### Running the Application

1. Start the Spring Boot application <br/> (GithubLink- https://github.com/Thinura-dinuth/ticketing-system-backend)<br/> 
   Instructions on how to setup the backend is given in the above link readme.md
   
2. Launch the React frontend<br/>
   Install all the necassary packages to run the application package.<br/>
   ```bash
    npm install
    ```
   Start the react application. <br/>
    ```bash
    npm run dev
    ```
    This will start the react application, which you can access at http://localhost:5173.

## Logging

Real-time system logs are streamed via WebSocket and displayed in the frontend log component, providing instant visibility into system operations.
   
### Press ctrl + c in the terminal to safely shut down the react application


