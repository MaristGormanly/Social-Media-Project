![calithenical](https://user-images.githubusercontent.com/79229838/168113409-15347958-362f-469b-a90f-f01a60cedda4.jpg)

Welcome to Calithencial! Calithencial is a new revolutionary fitness and nutritional forum where you can share you workout routines, diets and healthy recipes!

Calithenical allows their users to login from a list of users connected directly to the back end. Our key feature is posts which allows users to create and share their new fitness discoveries on thier fitness journey.
## Installation Instructions
In order to run Celithenical on your own local machine, you must follow these steps to get it to function!

First to run the commands I use [Git Bash](https://git-scm.com/) on the file folder 
Make sure to clone the repository like so:

```bash 
git clone https://github.com/MaristGormanly/Social-Media-Project.git
```
You will also need to download [node.js](https://nodejs.org/en/)
### Dependencies
After installing both git and node.js you will have to install the express library
On your git bash terminal enter:

```bash 
npm install express
```
### Database setup / configuration
For the database you will need to procure [PostgreSQL](https://www.postgresql.org/download/)

In order to run the database script and create the DB on your local machine use the command:
```bash
psql -U postgres -f server/db/Create-db.sql
```
Then run the commands 
```bash
npm i
```
and
```bash
npm start
```
To install all needed depencies and start up the server on local host port 1337!
### Development Notes
This project was very exciting and I gained a lot of use skills in the creation of the site. The posts work exactly how I inteded them to however a future plan would be to add an optional image when you make a post as well. 
With the user log in, I never got around to implementing sessions and cookies however that is something left for any adventerous developers to try or my myself in the future. 
One thing I would love to add in the future would be a profile page where after you log in there is a profile that shows up that you can click on and mess around with.
Even though I have many ambitious goals, my projects met well above my expectations and I think it was pulled off in a great way. 

