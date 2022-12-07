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

# da kommt ein Bild von SAD-2.md

## 3 Architectural Goals and Constraints


## 4 Use-Case View


### 4.1 Use-Case Realizations


## 5 Logical View


### 5.1 Overview


### 5.2 Architecturally Significant Design Packages


## 6 Process View


## 7 Deployment View


## 8 Implementation View


## 9 Size and Performance


## 10 Quality
The application is being measured in terms of complexity, coupling and cohesion.

Due to the MVC Pattern, the backend is unproblematic running and communicating with Frontend

The React Native with Expo framework allow us to achive a good a frontend experience to the user.

Due to the MVC Pattern, the frontend is unproblematic running for one week even without having a connection to internent / to the backend

The software architecture of the entire porject is allowing us to add addetional feature to imporve the frontend and the backend without impacting each other. This situation is allowing us to have an easier devlopment curve and a better user experience result
