---
layout: post
date: 2023-02-10
title: "Deployment Chronicles: Part 1 - Quickstart NodeJs web app"
tags:
  - Deployment Chronicles
  - Node.Js
---

Today is the first post of the 2023 year. I took the AZ-204 but missed it by a few points. Before, I've been thinking of creating a project from the ground up to practice Azure. Now, I think that this approach wasn't productive and I was putting road blocks in my path, impeding my progress.

This year, I want to get better at working on smaller, more achieveable goals instead of trying to eat an entire elephant in one sitting.

So I decided that my goal for 2023 is to just get something deployed.

To be more specific, I want to get the basis step out of the way and then built on it. And while I do tend to think futuristiclly about where I could take this (deploying a web application that has a ui and api and is maybe connected to a database), I don't want to put pressure on myself to achieve anything super big.

Today, I was able to deploy a Node.js web app ( created via express-generater) by following this tutorial https://learn.microsoft.com/en-us/azure/app-service/quickstart-nodejs?tabs=windows&pivots=development-environment-cli.

1. I installed Azure CLI via the following code block:
   `brew update`
   `brew install azure-cli`

I tried to install this in a terminal outside of VSCode but it was slow. Using the terminal in VSCode was faster.

2. I created the Node.js app in the PolishPalace folder:
   `npx express-generator myExpressApp --view ejs`

3. Change into the application's directory and install packages
   `cd myExpressApp && npm install`

4. Start development server with debug info
   `DEBUG=myexpressapp:* npm start`

5. Go to http://localhost:3000 to verify app is working

6. Deploy to Azure
   `az login`: to log into your account
   `az webapp up --sku F1 --name PolishPalace-FE --os-type Windows`: to create the webapp

   - With this cmd, a default resource group & app service plan was created.
   - To create webapp in a specific RG

7. Update the application html and redeploy using `az webapp up --os-type Windows`
   - `--os-type Windows` has to be included if the webapp is Windows

It is a basic Node.js UI web app, but it is deployed, so that's good and I'm happy. I think the reason why this way worked and not the deploy to Web App option via the extension is because of the folder I choose to deploy. I think I have to choose the folder that has the application ("myExpressApp" folder)

AZ CLI cmd tips:

- `az group list --out table`: to display all the RGs in a table format

Now that this initial adventure is over, I have decided to continue this series and I will call it "Azure Tales, the Deployment Chronicles, manual deployment quest". Yes, this is a long title but I think it captures that my wrestle with Azure will be a long jounrey filled with twists and turns. So buckle up my parasols.
