# Movie Mobile App

React Expo Mobile App that features
Facebook Login, fetching list of movies from BE service
and Tabs navigation within the app.
The user can select individual movie and view more details, as well
as navigating to his profile page and logging out.

### How to run

In order to run the project:
1. Clone the directory with both repositories
2. To start the BE, navigate to `movies-api` directory and run `php artisan serve --host 0.0.0.0`. You should be able to see the fetched data at `http://127.0.0.1:8000/api/movies-data`.
3. For the FE, navigate to `movie-app` directory and install and all the needed dependencies
   - Due to the Facebook integration, Expo Application Services (EAS) will be needed to build and run the app
     1. Register if you do not have an account already
     2. In the console of the project run `eas login` and provide your details
     3. On successful login run `eas build -p android --profile development` or `eas build -p ios --profile development` if you are using Apple device /This might take a while, especially if you are on the free tier/
     4. Following the successful build, follow the link to the expo site, which will navigate you to your project the you just build. Click on the install button and scan the QR code.
     5. Following the successful installation run `npx expo start` and scan the QR code, generated in the console. The app should be running and you should see the index page with login button.

## IMPORTANT
As of this moment Meta has suspended the creation of Test user accounts, so testing the app can be achieved by registering your own Facebook app and adding your data within the `react-native-fbsdk-next` object in plugins in the `app.json` file in the root of `movie-app`
