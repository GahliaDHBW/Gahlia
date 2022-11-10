# Use-Case-Realization Specification 1: Display Meal Details

## Table of contents
- [Table of contents](#table-of-contents)
- [Introduction](#1-introduction)
  - [Purpose](#11-purpose)
  - [Scope](#12-scope)
  - [Definitions, Acronyms and Abbreviations](#13-definitions-acronyms-and-abbreviations)
  - [References](#14-references)
- [Flow of Events](#2-flow-of-events)

## 1. Introduction

### 1.1 Purpose

This use case realization specification describes, how the implementation of the food detail looks like.

### 1.2 Scope

The Activity-Diagram [show meal details](https://github.com/GahliaDHBW/Gahlia/blob/57863081d82ab15ced71f10216defe2f0af5ad81/doc/diagrams/rendered/activity-showmealdetails.png) is associated with this UCRS.

### 1.3 Definitions, Acronyms and Abbreviations
| Abbrevation | Explanation                            |
| ----------- | -------------------------------------- |
| SRS         | Software Requirements Specification    |
| UCRS        | Use Case Realization Specification     |
| UC          | Use Case  |
| n/a         | not applicable                         |


### 1.4 References

n/a


## 2. Flow of Events

![sequence-displaymealdetails](https://user-images.githubusercontent.com/43212219/199331959-6ef643a2-97b2-45ea-9c01-5f9bd469d279.png)


The user opens the application, then clicks on the Hamburger menu. As a result, the canteen names are fetched from the Mensa website and then cached directly, so that no further server calls are required later.

User selects a canteen, then the meal plan is fetched and cached.

After that, the user can click on a particular meal to view and read the meal's details.
