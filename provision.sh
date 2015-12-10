#!/bin/bash
cd /home/vision/www

git pull origin master
mkdir -p /home/vision/www/var/logs
chmod 0777 -R ./logs

# recreate database and load clean dump
echo "Stopping all services"
sudo service supervisor stop

# recreate database and load clean dump
echo "Installing database:"
sudo service postgresql restart

#sudo -u postgres psql -c "ALTER USER postgres PASSWORD 'ViSiOn'";
#PGPASSWORD="ViSiOn" psql -U postgres -p 5432 -h localhost -c "DROP DATABASE IF EXISTS vision";
#PGPASSWORD="ViSiOn" psql -U postgres -p 5432 -h localhost -c "DROP ROLE IF EXISTS vision";
#PGPASSWORD="ViSiOn" psql -U postgres -p 5432 -h localhost -c "CREATE ROLE vision WITH LOGIN PASSWORD 'ViSiOn'";
#PGPASSWORD="ViSiOn" psql -U postgres -p 5432 -h localhost -c "ALTER ROLE vision WITH CREATEDB";
#PGPASSWORD="ViSiOn" psql -U postgres -p 5432 -h localhost -c "CREATE DATABASE vision OWNER vision";


# create structure and fill fixtures
# clear the cache
# reload supervisor to start all the services
# remove all the logs stored in project directory

fab setup_dev --password vagrant
