
# File-Upload-Nestjs
 
## Running Locally
To run the project locally install the packages mentioned in the node modules
The files are stored to Cloudinary, so generate Cloud name, api keys and api secret on your cloudinary account.
Create a new folder under "assets" in your cloudinary account.


These details have to be added in your .env file, please refer to the sample .env.example file for more details

The postgres DB is hosted via an image on docker. 
Run the command "docker compose up" To get the image hosted.
After that go to your project directory and run the command "npm run start:dev" 
To access the database run the command "npx prisma studio". It will be hosted on port 5555 by default and I/O to the DB can be monitored from there.

## Endpoints
The 'upload' endpoint can be accessed via postman and can be tested
