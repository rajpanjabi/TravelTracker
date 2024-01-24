# TravelTracker
Family Travel Tracker


Project Description
This project, named "Travel Tracker," is a web application built with Node.js and Express, and it interfaces with a PostgreSQL database. It allows users to track the countries they have visited. The application features a simple user interface where users can add a country to their visited list. Once a country is added, it is stored in the PostgreSQL database.

The front-end is rendered using EJS templating and includes an interactive map where visited countries are highlighted. Users interact with the application through a form to add countries, and the total number of visited countries is displayed.


## Getting Started

These instructions will guide you through getting a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- Node.js
- npm (Node Package Manager)
- PostgreSQL

### Installation

**Clone the repository:**
  
  - git clone https://github.com/rajpanjabi/TravelTracker.git
  - cd travel-tracker

   
### Install dependencies:

- npm install
- Set up PostgreSQL:

### Ensure PostgreSQL is installed and running.
- Create a database named world.
- Environment Variables:
- Create a .env file in the project root.
- Add the following content, updating values as per your database configuration:
  

## Copy:
env
- DB_USER=postgres
- DB_HOST=localhost
- DB_DATABASE=world
- DB_PASSWORD=your_password
- DB_PORT=5432


### Start the application:

1) npm start
2) Navigate to http://localhost:3000 in your browser to view the app.

### Usage
1) To track a new country visit, enter the country name in the form and submit.
2) The map will update to highlight all the countries you have visited.
3) The total number of visited countries is displayed below the map.


### Project Link: https://github.com/rajpanjabi/travel-tracker

### Notes:

- Replace `your-username`, `your_password`, `your-email@example.com`, and any other placeholder information with your actual data.
- If you don't have a `LICENSE` file, consider adding one to clarify how others can use your project.
- The contribution guidelines are basic. Adjust them as necessary to fit your project's needs.
- You may also want to add a `CONTRIBUTING.md` file for more detailed instructions on contributing to your project.
