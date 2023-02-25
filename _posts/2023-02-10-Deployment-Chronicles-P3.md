---
layout: post
date: 2023-02-10
title: "Deployment Chronicles: Part 3 - Angular web app"
tags:
  - Deployment Chronicles
  - Angular
---

In today's adventure of the Deployment Chronicles, I deployed an Angular Web app!

For this deployment, I tried to follow the same process we used to deploy the React app.

The latter part of this site (https://www.c-sharpcorner.com/article/easily-deploy-angular-app-to-azure-from-visual-studio-code/) helped me realize that I needed to deploy the **dist/polish-palace-Angular** folder and not just dist folder

1. Create the Angular project: `ng new polish-palace-Angular`

2. Build the Angular Project `ng build`

- For the tutorial, it says `ng build --prod` but I got an error because of the --prod argument
- This step will create a **dist** folder, which I'm assuming is the Angular equivalent of the React

3. Right Click on the App service you want to deploy to and select the **dist/polish-palalce-angular** folder

- This step is different from the React deployment because the React Build folder has all the files in the root of the build folder, but for the Angular dist folder, all the files are inside of a folder with the project name inside of the dist folder

Now that I have deployed 3 different framework applications, I want to reflect on how this is related to the AZ-204. In the "Develop Azure Compute Solutions" skill, there is a section called "Create App Service Web Apps". Creating an Azure App Service Web Apps and deploying code to a web app has been touched upon. I think there are other objectives with this subskills that I might need to brush up on, but I think this is a good start and I am happy that I was able to get some up successfully.

Since these last three adventures have been focused on manual deployment, I think I want to try automatic deployment and Docker deployment.
