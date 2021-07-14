## About Open Project Framework Virtual Company 

OPF Virtual Company consists of pre defined gitlab repositorys which are needed to execute basic process flow for small virtual company environment.


## Basic process areas of Virtual Company

| Process area | Artifacts | 
|:-:|:-:|
| Project Management | Project plan, tasking, monitoring  |
| Requirement Management | requirement specification, feature descriptions, use cases, |
| Construction | Source code |
| Architecture and design | architecture, design  | 
| Test Management | Test Cases, Test Strategy | 
| Production | Monitoring |
| Marketing and sales | Offer, Contracts, Proposals, Tenders | 
| Configuration Management | configuration notes |
| Release Management | Release Plan, Road Maps |
| Communications | Communication plan |
| Risk Management | Risk list |

```plantuml

storage Core
storage Site
storage Source
storage Tools

Project_Management --> Core 
Requirement_Management --> Core 
Architecture_and_design --> Core 
Marketing_and_sales --> Core 
Configuration_Management --> Source
Configuration_Management --> Core
Production --> Core
Production --> Source
Construction --> Core
Construction --> Source
Test_Management --> Core 
Test_Management --> Tools
Architecture_and_design --> Tools
Test_Management --> Source
Release_Management --> Core
Release_Management --> Source
Communications --> Core
Communications --> Site
Marketing_and_sales --> Core
Marketing_and_sales --> Site
Project_Management --> Site
Architecture_and_design --> Source
```

Instead of pure process model virtual company contains a document storage for 


## Repository Configuration and roles

* Core - Virtual team/companys intranet/extranet repository
* Tools - Team tool repository for storing needed testing/development tools and materials to build a DevSecOps-pipeline 
* Source - Primary source code repository which a default contains demo product
* Site - Web page which is used for information sharing among team, customers and other stakeholders 

```plantuml
object Virtual_Company
object Core
object Source
object Tools
object Site

Virtual_Company *-- Core
Virtual_Company *-- Source
Virtual_Company *-- Tools
Virtual_Company *-- Site
```


| Repository location | Official name | Purpose |
|:-:|:-:|:-:|
| [Core](https://gitlab.labranet.jamk.fi/open-project-framework/opf-virtual-company-vi/core)  | core | primary documentation storage for all project documentation |
| [Source](https://gitlab.labranet.jamk.fi/open-project-framework/opf-virtual-company-vi/source) | source | default source code location which contains demo seed code for pipeline test run |
| [Tools](https://gitlab.labranet.jamk.fi/open-project-framework/opf-virtual-company-vi/tools) | tools | test tools, materials, etc |
| [Site](https://gitlab.labranet.jamk.fi/open-project-framework/opf-virtual-company-vi/site) | site | WWW-pages for virtual company publishing |

## Stakeholders for Core repository

```plantuml
actor Developer
actor Designer
actor Team_leader
actor Customer
actor DevOps_Engineer

storage Core

Developer --> Core : Documentation, Design, Work_flow
Designer --> Core : Documentation, Design, Work_flow
Team_leader --> Core : Documentation, Design, Work_flow
Customer <-- Core : Information Share,Documentation
DevOps_Engineer --> Core : Information Share,Documentation
```

## Stakeholders for Source repository


```plantuml
actor Tester1
actor Developer1
actor Team_leader
actor DevOps_Engineer

storage Source

Team_leader --> Source : Monitors
Tester1 --> Source : Testing
Developer1 --> Source : Development
Designer --> Source : Design
DevOps_Engineer --> Source : Deployment

```

## Stakeholders for Tools repository


```plantuml
actor Tester1
actor Developer1
actor DevOps_Engineer

storage Source

Tester1 --> Source : Testing
Developer1 --> Source : Development
DevOps_Engineer --> Source : Deployment

```


## Stakeholders for Site repository

```plantuml
actor Team
actor Customer
actor External_Stakeholders

storage Site

Team --> Site : Information sharing
Customer <-- Site : Get's information
External_Stakeholders <-- Site : Get's information

```
