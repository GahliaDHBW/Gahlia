# Use-Case-Realization Specification 1: Display Canteens

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

This Use-Case-Realization Specification shows how the list of cantiens is fetched and displayed.

### 1.2 Scope

In the Activity-Diagram first use-case(Show the cannteens names) ist associated with this Use-Case-Realization-Specification.

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

![show Canttens](./diagrams/rendered/sequence-displaycanteens.png?raw=true "sequenceDiagram-displaycanteens")

As shown in the sequence diagram, the user first opens the Gahlia application, then he can click on the hamburger menu, after that he has the option to see the canteen list. As soon as the user clicks on the list of canteens, the application in the background fetches the list from the canteen website and displays it.

The names of the canteens are only fetched once from the Mensa website, and then they are cached so that the data can only be read from the cache file in subsequent user calls.
