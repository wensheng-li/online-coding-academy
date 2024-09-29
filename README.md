# Enrolment Report System

This course report system prototype was built with **React JS**, **PHP** (backend), and **MySQL** (database). The project allows users to search, filter, sort, and paginate enrolment data. It's designed to be scalable and responsive (partially), providing a user-friendly interface that adapts to different devices such as mobile, iPads, and laptops.

## Features

- **Search & Filter:** Search for students or courses by name， completion status or description.
- **Sorting:** Sort enrolment data by student name, course name, completion status, and enrolment date.
- **Pagination:** Paginate the data to handle large datasets efficiently.
- **Responsive Design:** Works well on various devices (mobile, tablet, desktop).
- **Backend API:** PHP backend that retrieves data from a MySQL database.
- **Database Management:** Handles large datasets (up to 100,000 enrolments) with efficient data management.

## Technologies Used

- **Frontend:**
  - React JS
  - CSS (for styling and responsive design)
- **Backend:**
  - PHP 8.2.4 (custom API to serve enrolment data)
- **Database:**
  - MySQL (using MAMP for local development)

## Project Setup

### Prerequisites

Make sure you have the following installed on your machine:

- **Node.js** (for running the frontend)
- **MAMP** (or WAMP, or any local server setup for PHP & MySQL)
- **Git** (for cloning the repository)

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/enrolment-report-system.git
cd enrolment-report-system
```

### 2. Frontend Setup

#### 2.1. Navigate to the client2/ directory

```bash
cd client2
```

#### 2.2 Install the required dependencies

```bash
npm install
```

### 3. Backend Setup

#### 3.1. Navigate to the server/ directory

```bash
cd server
```

#### 3.2. Set up your MySQL database:

- Import the SQL file **db.sql** provided in the **server/db/** folder into your MySQL database.
- Update the database credentials in the **config.php** file.

### 4. Environment Variables

Create a **.env** file in the **client** directory and add your API URL:

```bash
REACT_APP_API_URL=http://localhost:8888/enrolment-report-system/server
```

### 5. Running the Project

#### 5.1. Start the Frontend:

- In the **client** directory

```bash
npm start
```

- This should open the React app in your default browser.

#### 5.2. Start the Backend:

- In the **server/** directory, run the PHP server using MAMP or any local setup.
- Example for MAMP: Run the server using the following URL (adjust for your local setup):

```bash
http://localhost:8888/enrolment-report-system/server/get_enrolments.php
```

### 6. Access the App

Once both frontend and backend servers are running, visit the frontend in your browser:

```bash
http://localhost:3000
```

## Usage Instructions

- **Search:** Start typing in the search bar, and results will appear instantly. You can search by student name, surname, or course description.
- **Sort:** Click the column headers (e.g., Student Name, Course, Status, Enrolled Date) to sort the data in ascending or descending order.
- **Pagination:** Use the bottom pagination controls to navigate the data.
- **Responsive Design:** The table adjusts to fit different screen sizes, offering a mobile-friendly experience.

## Remote Demonstration

If you'd like to demonstrate this project remotely, you have a few options:

### 1. Deploy to a Cloud Service:

- You can deploy the frontend on platforms like [Vercel](https://vercel.com/) or [Netlify](https://www.netlify.com/) and host the backend on [Heroku](https://www.heroku.com/), [AWS](https://aws.amazon.com/?nc1=h_ls), or any other cloud provider.

### 2. Use ngrok for Local Demos:

- If you want to keep the project local but demonstrate remotely, you can use ngrok to create a public URL for your local environment.

Example:

```bash
ngrok http 3000  # For frontend
ngrok http 8888  # For backend (PHP server)
```

You can share the ngrok URL with others for the demonstration.

## How to Validate Data Retrieval

To verify that the system correctly retrieves data from the database:

1. Import the provided db.sql file to ensure your MySQL database is set up with the correct data.
2. Check that your PHP backend (get_enrolments.php) successfully fetches data when called from the front end.
3. Open the browser’s developer tools (F12), go to the Network tab, and verify that the correct API requests are being made and the data is returned as expected.
4. The table should populate with enrolment data and allow filtering, sorting, and pagination to ensure proper function.

## Future Enhancements

This project has been built with scalability in mind and could be extended with additional features, such as:

- User authentication and role-based access control.
- Advanced filtering options for course status, date range, etc.
- Exporting reports as PDF or CSV.
  Dashboard and analytics for course enrolment trends.
- Fully completed the responsive design for different devices.

## Contributing

Contributions are welcome! To contribute, please fork the repository and submit a pull request with detailed information about your changes.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

```bash

### Key Points in this README:
1. **Project Setup:** This section outlines the basic steps to install dependencies, set up the database, and run both the front and back end locally.
2. **Environment Variables:** The `.env` setup ensures that API URLs are configurable.
3. **Remote Demonstration:** Provides options for cloud deployment and `ngrok` for local-to-remote demos.
4. **Validation Instructions:** This section explains how to check whether the project retrieves data from the database correctly.
5. **Future Enhancements:** List potential improvements that might be useful for further development or if you need to discuss possible features during a demo or job interview.

You can update the GitHub repository link, project details, and other necessary info according to your specifics.
```
