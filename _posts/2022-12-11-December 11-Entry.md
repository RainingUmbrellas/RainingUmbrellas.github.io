---
layout: post
date: 2022-12-11
title: "December 11, 2022 Entry"
---

AZ-204 is 5 days away. For studying, I am going into the portal to create and just get more first hand experience with Azure.

My free trial ran out so I did end up creating my own subscription and adding some budget alerts for an amount. I'm going to have to figure out better ways to keep cost low but any experience is good experience.

So for while I want to get the pageant portal up and running at some point, we're going to try our best to handle prototyping and CI/CD. I have a tendency to just want to start developing what I envision without developing incrementally and starting small.

So I am going to try to create a project that uses as many services as I can.

1. Azure App Service Web apps: frontend/ client

- Objs:
  - Explore Azure App Service:
    - service plans
    - deploy
    - authentication and authorization
    - networking
  - Configure web app settings
    - config app settings
    - config general settings
    - config path mappings
    - diagnostic loggin
    - config security certificates
    - manage app features
  - Scale apps in App Service
    - autoscale factors
    - enable autoscale
    - autoscale best practices
  - Deployment Slots
    - staging environments
    - slot swapping
    - route traffic in app service
- How to be used:
  - host the frontend/ client
- Ease of use: **EASY**

2. Functions: could be used to help clean up or message

- Objs:
  - Explore Azure Functions
    - hosting options
    - scale functions
  - Develop Azure Functions
    - triggers and bindings
    - connect functions to services
  - Durable Functions
    - Durable functions app patterns
    - four function types
    - task hubs
    - durable orchestrations
    - control timing in durable functions
    - send and wait for events
- How to be used:
  - data processing,
  - system integration
  - Buidling simple apis and microservices
- Ease of use: **MEDIUM**

3. Blob storage:

- Objs:
  - Explore storage:
    - Blob Storage resource Types,
    - Storage security features,
    - Storage redudancy
  - Manage blob storage lifecycle
    - Lifecycle policies
    - Rehydrate data from archive tier
  - Work with Azure Blob Storage
    - Blob storage client library
    - Manage container properties and metadata
    - set and retrieve properties and metadata
- How to be used:
  - Store images, documents
- Ease of use: **MEDIUM**

4. Cosmos DB: there's different APIs so but they usually

- Objs:
  - Explore Cosmos DB
    - Key benefits
    - resource hierarchy
    - consistency levels
    - Supported APIs
    - request units
  - Implement Partitioning
    - Choose partition key
    - Create synthetic partition key
  - Work with Cosmos DB
    - Create stored procedures
    - create triggers and used defined functions
- How to be used:
- Ease of use: **EASY**

5. IaaS: VMs (not sure how I could use VMs)

- Objs:
  - Provision VMs
    - VM availability options
    - Determine appropriate VM size
  - Create and deploy ARM templates
    - ARM
    - Deploy multi-tiered solutions
    - conditional deployment
    - Correct deployment mode
  - Manage container images in ACR
    - ACR
    - Storage capabilities
    - Build and manage containers with tasks
    - explore elements of Dockerfile
  - Run container images in ACI
    - ACI
    - Run containerized tasks with restart policies
    - Set env var in container instances
    - Mount Azure file share in ACI
- How to be used:
- Ease of use: **HARD**

6. User Authentication and Authorization

- Objs:
  - MS Identity Platform
  - MS Authentication Lib
  - Shared Access Signatures
  - MS Graph
- How to be used:
- Ease of use: **EASY**

7. Secure cloud soluions: Easy to implement

- Objs:
- How to be used:
  - Key Vault
  - Managed Identities
  - Azure App Configuration
- Ease of use: **EASY**

8. APIM: backend

- Objs:
- How to be used:
- Ease of use: **EASY**

9. Event-based Solutions: Event Grid

- Objs:
- How to be used:
- Ease of use: **MEDIUM**

10. Message-based solutions : Queue solutions

- Objs:
- How to be used:
- Ease of use: **MEDIUM**

11. Monitoriing and Logging: Application Insights

- Objs:
- How to be used:
- Ease of use: **EASY**

12. Caching and CDN: cache, redis

- Objs:
- How to be used:
- Ease of use: **MEDIUM**

In terms of the subject for the project, I am not sure. Here is a list of ideas so far:

- Closet:

  - Get Clothes: GET
  - Create Clothes: POST
  - Update Clothes: PUT
  - Delete Clothes: DELETE

- Meeting of the minds:
- Crystal gems: could use gremlin or cassandra to map the different fusions
- Monster High
- Descendnants
- Young Justice
- Avatar: The Last Airbender
- Stranger Things
- 39 Clues
