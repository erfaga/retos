#!/bin/bash

# This script sets up the database for the Chirper application.

# Load environment variables from .env file
if [ -f .env ]; then
    export $(cat .env | xargs)
fi

# Database configuration
DB_NAME=${DB_NAME:-chirper_db}
DB_USER=${DB_USER:-chirper_user}
DB_PASSWORD=${DB_PASSWORD:-chirper_password}
DB_HOST=${DB_HOST:-localhost}
DB_PORT=${DB_PORT:-5432}

# Function to create the database
create_database() {
    echo "Creating database: $DB_NAME"
    psql -h $DB_HOST -U $DB_USER -p $DB_PORT -c "CREATE DATABASE $DB_NAME;"
}

# Function to create tables
create_tables() {
    echo "Creating tables..."
    psql -h $DB_HOST -U $DB_USER -d $DB_NAME -p $DB_PORT -f ./migrations/schema.sql
}

# Function to seed initial data
seed_data() {
    echo "Seeding initial data..."
    psql -h $DB_HOST -U $DB_USER -d $DB_NAME -p $DB_PORT -f ./migrations/seed.sql
}

# Main script execution
create_database
create_tables
seed_data

echo "Database setup completed."