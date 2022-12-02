**Architectural Goals and Constraints**

## MVC

As mentioned in chapter two frontend and backend are using the MVC pattern. This enables a clean software architecture with separate model view and controller.

## Front end

The Android App Client is written in JS with React Native technology. In the Frontend is also MVC Tool is needed, because the MVC Pattern is integrated into Android development. 
Because the application has data store mechanism - "cahes" we need to organize it make it accessible to UI component and to regular this behavior a controller is needed.

MVC:

- Model: App cahes

- View: UI-JS functional component 

- Controller :JS functional component to organize the application cahes

## Back end

The back end is  written in python. As MVC tool we use Falsk framework.As a datastore we are going to us static json files (maybe it will be upgraded to database). The Server offers an APIs which are accessed by our front end.

MVC:

- Model: Server cahes

- View: no view available

- Controller: Falsk controler to control the API accessbility of the server and to refresh Model with the new data

