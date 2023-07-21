

# Milestone 1: Project Setup & Planning

## Project Description

Project Prism is a Portfolio Management Application aimed at streamlining the process of project and task management for portfolio managers. The application will be designed as a full-stack web application, providing a user-friendly interface for managing portfolios and their associated projects and tasks.

## Technology Stack

The technology stack chosen for this project is as follows:

- Front-end: HTML, CSS, JavaScript, React
- Back-end: Node.js, Express.js
- Database: MongoDB

## Entity Relationship (ER) Diagram

The application involves the following entities and their relationships:

![ER Diagram](image.png)

**Entities:**

1. **Portfolio Manager:** Represents individuals managing portfolios. It will have fields such as Name, Status, Role, Bio, Start Date.

2. **Project:** Represents projects associated with portfolio managers. It will have fields like Project Name, Status, Start Date, End Date.

3. **Task:** Represents individual tasks associated with specific projects. It will have a Status (To Do, In Progress, Completed).

4. **Resource:** Represents resources linked to specific tasks. A resource can be assigned to multiple tasks.

## UI Mockup

The following are the planned pages and their basic layouts for the web application:

1. **Portfolio Manager Management Page:**
   - Form for creating and updating Portfolio Manager profiles.
   - List of Portfolio Managers with options for editing and deleting.

2. **Project Management Page:**
   - Form for creating and updating Projects associated with a Portfolio Manager.
   - List of Projects with options for editing and deleting.

3. **Task Management Page:**
   - Form for creating and updating Tasks associated with a specific Project.
   - List of Tasks with options for editing and deleting.

4. **Resource Management Page:**
   - Form for creating and updating Resources associated with specific Tasks.
   - List of Resources with options for editing and deleting.

5. **Project Listing Page:**
   - A page that displays all projects with pagination, filtering (by Status and Portfolio Manager), and sorting (by Status and Start Date) features.

## API Endpoints

The following API endpoints are planned to be implemented for the backend:

1. **Portfolio Manager API Endpoints:**
   - `POST /api/portfolioManagers`: Create a new Portfolio Manager profile.
   - `GET /api/portfolioManagers`: Fetch all Portfolio Managers.
   - `GET /api/portfolioManagers/:id`: Fetch a specific Portfolio Manager by ID.
   - `PUT /api/portfolioManagers/:id`: Update a specific Portfolio Manager profile.
   - `DELETE /api/portfolioManagers/:id`: Delete a specific Portfolio Manager profile.

(Note: The other API endpoints for Projects, Tasks, and Resources will be defined in later milestones.)

## Project Planning

In this milestone, we will focus on setting up the basic project structure, creating the necessary database schema based on the ER diagram, and implementing the API endpoints for Portfolio Manager management.

