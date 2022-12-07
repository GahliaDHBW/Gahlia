Gahlia - Software Architecture Document

## Table of Contents

- [Table of contents](#table-of-contents)
- [Introduction](#1-introduction)
  - [Purpose](#11-purpose)
  - [Scope](#12-scope)
  - [Definitions, Acronyms and Abbreviations](#13-definitions-acronyms-and-abbreviations)
  - [References](#14-references)
  - [Overview](#15-overview)
- [Architectural Representation](#2-architectural-representation)
- [Architectural Goals and Constraints](#3-architectural-goals-and-constraints)
- [Use-Case View](#4-use-case-view)
  - [Use-Case Realizations](#41-use-case-realizations)
- [Logical View](#5-logical-view)
  - [Overview](#51-overview)
  - [Architecturally Significant Design Packages](#52-architecturally-significant-design-packages)
- [Process View](#6-process-view)
- [Deployment View](#7-deployment-view)
- [Implementation View](#8-implementation-view)
  - [Overview](#8-overview)
  - [Layers](#82-layers)
- [Size and Performance](#9-size-and-performance)
- [Quality](#10-quality)

## 1. Introduction

### 1.1 Purpose

This document provides an overview of our software architecture. With several different architectural views, it presents different aspects of the system. It is intended to capture and convey the key architectural decisions that have been made for the system.

### 1.2 Scope

This document describes the architecture of the Gahlia project.

### 1.3 Definitions, Acronyms and Abbreviations

| Abbrevation | Description                         |
| ----------- | ----------------------------------- |
| API         | Application programming interface   |
| MVC         | Model view controller               |
| SRS         | Software requirements specification |
| UC          | Use case                            |
| VCS         | Version control system              |
| UI          | User interface                      |

### 1.4 References

| Title                                                                     |    Date    | Publishing organization |
| ------------------------------------------------------------------------- | :--------: | ----------------------- |
| [Ghalia Blog](https://github.com/GahliaDHBW/Gahlia/discussions)           | 20.10.2022 | Gahlia Team             |
| [GitHub Repo for the App](https://github.com/GahliaDHBW/Gahlia)           | 20.10.2022 | Gahlia Team             |
| [GitHub Repo for the Server](https://github.com/GahliaDHBW/GhaliaScraper) | 20.10.2022 | Gahlia Team             |

### 1.5 Overview
This document contains the architectural representation, goals and constraints as well as the logical, deployment, implementation and data views.


## 2 Architectural Representation

This project uses the MVC Pattern for the front end (React Native written in JS) and for the back end (Python Flask). So the model (data), the view (user interface) and the controller (controls of the data flows) are separated. The MVC Pattern can be seen in the next picture:

![image](https://user-images.githubusercontent.com/76824323/206280496-fdbba617-50c6-49ba-b69d-9ee9e76341ce.png)


## 3 Architectural Goals and Constraints

### MVC

As mentioned in chapter two frontend and backend are using the MVC pattern. This enables a clean software architecture with separate model view and controller.

#### APP

The Android App Client is written in JS with React Native technology. In the Frontend is also MVC Tool is needed, because the MVC Pattern is integrated into Android development. 
Because the application has data store mechanism - "cahes" we need to organize it make it accessible to UI component and to regular this behavior a controller is needed.

MVC:

- Model: App cahes

- View: UI-JS functional component 

- Controller :JS functional component to organize the application cahes

#### Business logic 

The back end is  written in python. As MVC tool we use Falsk framework.As a datastore we are going to us static json files (maybe it will be upgraded to database). The Server offers an APIs which are accessed by our front end.

MVC:

- Model: Server cahes

- View: no view available

- Controller: Falsk controler to control the API accessbility of the server and to refresh Model with the new data

#### it could be displayed by the follwing image 

![image](https://user-images.githubusercontent.com/76824323/206284160-47d1a988-ab9b-49a3-847f-ce29d545ebf9.png)

for more information, please see the Implementation View in point 8

## 4 Use-Case View


### 4.1 Use-Case Realizations

#### Show the canteens names
![image](https://user-images.githubusercontent.com/76824323/206282892-a9725f2e-9908-4ef1-a62c-470fc8444857.png)

#### Show the canteens location
![image](https://user-images.githubusercontent.com/76824323/206282947-bf538393-e6d1-4708-8ce4-e5e1d47ebe32.png)


## 5 Logical View


### 5.1 Overview


### coming soon 


### 5.2 Architecturally Significant Design Packages


## 6 Process View
Here you can see our sequence diagrams for the the main scenarios in our project and it is seeing the meal list:

![image](https://user-images.githubusercontent.com/76824323/206282549-3e0a7cff-ce1f-482b-ab69-e32466cb2d5d.png)


## 7 Deployment View

### coming soon 

## 8 Implementation View

In our implementation we only use one system which consists of all the needed components in our project. Here you can have a quick overview of the different components and their functionalities:


![image](https://user-images.githubusercontent.com/76824323/206281470-6b0b8a0d-0f11-4c28-a0ce-d03c055c4445.png)

## 9 Size and Performance

After having a deep look in the Quality attribute scenarios of the porject, we come up with the follwoing table:


![image](https://user-images.githubusercontent.com/76824323/206283166-3199a15f-deed-4ac1-98bc-4f0f5d85b6c7.png)

For us, the issue of Availability has a highest priority, as we will scrape the data e.g. Meals from the Mensa-website to use in our application, which means at the same time, that our application is basically completely dependent on the Mensa website. This means, if the structure of the Mensa website is changed, there is a high probability that the scraper will no longer be able to fetch any data.

Identify errors: the Scraper will regularly check whether the data can still be retrieved successfully.

Send an E-Mail: we will set up an Email-Service so bug reports will be sent to the Development-Team.

Inform users: the Application will notify the users that there was an error and will be fixed immediately by the Dev-team.


#### Checklist
Allocation of Responsibilities

The Data-Scraper must to work perfectly, if it doesn't, both the user and the development-team
must to be informed immediately.

Coordination Model

If access to the Mensa website is no longer possible, the dev-team and user must be informed.

Data Model

Data-Scraper and caching must both always be available. If for some reason the data cannot be
cached, a request must be sent again to retrieve the data completely.

Resource Management

The app has to run as fast as possible, so it is going to store the data as application caches and
when it works, the improvement of the caching methods and the availability and performance of the
app is going to be the aim of the dev team

## 10 Quality
The application is being measured in terms of complexity, coupling and cohesion.

Due to the MVC Pattern, the backend is unproblematic running and communicating with Frontend

The React Native with Expo framework allow us to achive a good a frontend experience to the user.

Due to the MVC Pattern, the frontend is unproblematic running for one week even without having a connection to internent / to the backend

The software architecture of the entire porject is allowing us to add addetional feature to imporve the frontend and the backend without impacting each other. This situation is allowing us to have an easier devlopment curve and a better user experience result
