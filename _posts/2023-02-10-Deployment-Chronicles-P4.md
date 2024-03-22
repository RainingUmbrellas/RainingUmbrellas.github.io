---
layout: post
date: 2023-02-10
title: "Deployment Chronicles: Part 3 - ASP.Net Core Web API"
tags:
  - Deployment Chronicles
  - ASP.NET
---

In today's advendure of Deployment Chronicles, I deployed an ASP.Net Core web api.

For this deployment, I used the following website (https://learn.microsoft.com/en-us/aspnet/core/tutorials/publish-to-azure-webapp-using-vscode?view=aspnetcore-7.0) for tips for this deployment.

1. Create the ASP.NET Core Web Api
   `dotnet new webapi -o apiName`

2. Change into the api's directory and build the application
   `cd apiName`
   `dotnet build`

3. Run the application to make sure it works
   `dotnet run`

4. Generate the deployment package locally
   `dotnet publish -c Release -o ./bin/Publish`

- This step is the key because this is the folder you need to deploy

5. Deploy the bin/Publish folder following the process from previous deployment.
