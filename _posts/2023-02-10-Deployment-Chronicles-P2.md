---
layout: post
date: 2023-02-10
title: "Deployment Chronicles: Part 2 - React web app"
tags:
  - Deployment Chronicles
  - React
---

Today's entry of the Deployment Chronicles, I deployed a React Web app!

This is following the first entry of the Deployment Chronicles where I deployed a NodeJs web app.

For this entry, I used the following tutorial to successfully deploy a default React web app.
https://javascript.works-hub.com/learn/how-to-host-a-react-app-on-azure-10042

Before I found this tutorial, I tried to deploy the React app the same way I deployed the NodeJs app, but I got the following error: "You do not have permission to view this directory or page."

To successfully deploy a cra React web app,

1. Create the React web app with `npx create-react-app polish-palace` {polish-palace can be replaced with your name of the React App}

2. Add **web.config** file in the public folder
   I think this step is one of the reasons why this deployment worked. The content of this folder can be found in the tutorial

3. Change into the application's directory and run `npm install` and `npm run build` to create the build folder.

4. `npm start` to launch locally to make sure the app is working.

5. Create the Azure Webb App Service resource

6. Right click on that new App Service and select the folder to deploy

- Another step that helped this deployment to be successful is that we selected the react app's **build** folder.

With these steps, I was able to successfully deploy the CRA React Web app.

I would like to figure out if I can deploy with AZ webapp cmd, but after trying to use the `az webapp deploy` cmd with no progress, I'll just push that aside for now and be glad I was able to get a cra react app deployed.

Next adventure in the Deployment Chronicles is deploying an Angular App.
