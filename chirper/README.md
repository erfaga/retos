# Chirper - A Twitter-like Application

Chirper is a social media application that allows users to share short messages, known as tweets, and interact with each other. This project is designed to provide a clean and efficient platform for users to express their thoughts and connect with others.

## Features

- User authentication (login and registration)
- Create, read, update, and delete tweets
- User profiles
- Real-time updates (future implementation)
- Responsive web design

## Project Structure

The project is organized into several directories:

- **apps**: Contains the main applications (API and web).
  - **api**: The backend service that handles data processing and business logic.
  - **web**: The frontend application that provides the user interface.
  
- **packages**: Contains shared code and types used across both applications.

- **infra**: Contains infrastructure-related files, including Docker configurations.

- **migrations**: Contains database migration scripts and documentation.

- **scripts**: Contains utility scripts for setting up the environment.

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- Docker (for containerization)
- PostgreSQL (or any other database of your choice)

### Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   cd chirper
   ```

2. Install dependencies for both API and web applications:
   ```
   cd apps/api
   npm install
   cd ../web
   npm install
   ```

3. Set up the database:
   - Copy the `.env.example` to `.env` and configure your database settings.
   - Run the setup script:
     ```
     cd ../scripts
     bash setup-db.sh
     ```

4. Start the applications:
   - For the API:
     ```
     cd ../api
     npm start
     ```
   - For the web application:
     ```
     cd ../web
     npm start
     ```

### Running Tests

To ensure everything is working correctly, run the tests for both applications:

- For the API:
  ```
  cd apps/api
  npm test
  ```

- For the web application:
  ```
  cd apps/web
  npm test
  ```

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## License

This project is licensed under the MIT License. See the LICENSE file for details.