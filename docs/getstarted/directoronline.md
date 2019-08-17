---
id: directoronline
title: Getting started with DirectorOnline 
sidebar_label: Using DirectorOnline
---



------

<img src="/docs/assets/general/logo-director-online.svg" alt="Signing up for an account" style="width:100px;" align="center">

<br>	





> Director is a multi-cloud data management console for your Kubernetes clusters. 
>
> DirecorOnline is a SaaS version avaiable at  <a href="https://director.mayadata.io"  target="_blank">director.mayadata.io</a>
>
> DirectorOnprem is avaialble as a Kubernetes application that you can install on your Kubernetes cluster either on premise or any cloud.



## Director features:

- Quickly view all multi-cloud Kubernetes resources from one console
- Troubleshoot Kubernetes through the topology tool
- Monitor your stateful applications from one single location
- Access logs of applications on all your Kubernetes clusters in one central location  
- Take backup of applications running on cStor volumes to AWS S3 or Google buckets. And restore to the same or any other cluster that you have connected to DirectorOnline. 



## Director Concepts:



### Project

For each account that created on Director, a default project is created. A project a home for a group of clusters that are connected to Director.

> Currently only one project per account is spported. This project is created during the onboarding of user onto Director. The project name cannot be changed once created, hence the naming should be chosen carefully during onboarding stage.

The prometheus metrics collected from the volumes, applications and nodes of all the Kubernetes clusters are available under your account. You can construct cross cloud dashboards to get valuable analytics. 

### Cluster

A cluster in Director is a Kubernetes cluster you connected. You can connect multiple clusters to your account. Director features available for a cluster are:

- Topology view
- cStor Pool dashboards
- DMaaS (Data Migration as a service) for cStor volumes in the cluster

### Applications

An application in Director is either a deployment or statefulset within a namespace in a Kubernetes cluster. Director features available for applications are:

- Prometheus-Grafana dashboards
- Litmus chaos test results 
- Logs
- DMaaS for cStor volumes used in the application

### 

## Getting started with DirectorOnline



If you are installing and setting  DirectorOnprem, see it's user guide [here](/docs/product/userguides/onprem/install).

If you are accessing Director (either online or onprem), following are the steps to onboard yourself and start connecting your clusters.



### Sign in to DirectorOnline

Access [director.mayadata.io](https://director.mayadata.io)

### Create a project



### Connect your cluster



### Start with monitoring


