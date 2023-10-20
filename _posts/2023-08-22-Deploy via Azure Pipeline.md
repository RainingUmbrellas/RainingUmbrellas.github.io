---
layout: post
date: 2023-08-22
title: "Deployment Chronicles: Part 6 - Next JS App via Azure Pipeline"
tags:
  - Deployment Chronicles
  - Next.JS
---

In today's adventure of Deployment Chronicles, I deployed a Next.JS app using a Azure Pipelines.

For this deployment, I deployed the starter Next 13 app with TS and ESLint to a Linux Web App.

I initially deployed the app via the VSCode. The deployment was successful. With this deployment, a .deployment file is created. This file has the following code: `[config]
SCM_DO_BUILD_DURING_DEPLOYMENT=true`

For the deployment via Azure Pipelines, I used the classic editor.

The source is Azure Repos Git.
The first task is npm install.
The next task is npm build.
The third task is Copy Files. The contents is `**`. The target folder is `$(Build.ArtifactStagingDirectory)`.

The last task is Publish build artifacts. The path to publish is `$(Build.ArtifactStagingDirectory)`. The artifact name is `drop`.

When it comes to the release pipeline, I used the Deploy Azure App Service template.

The Agent Job's agent pool is `Azure Pipelines` and the Agent Specification: `ubuntu-latest`.

For the package or folder, `$(System.DefaultWorkingDirectory)/_NextJS Test/drop` and the startup command is `npm run start`

For the pipeline, make sure the artifact points to the correct pipeline artifact drop.

You can import and export release pipelines similar to yaml files. The exported release pipeline file is a .json file.
