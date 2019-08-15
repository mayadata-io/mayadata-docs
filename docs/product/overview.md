---
id: overview
title: Introducing MayaData OpenEBS Enterprise Platform
sidebar_label: Product overview
---

------

**MayaData OpenEBS Enterprise Platform** (earlier known as MayaData Data Agility Platform or MDAP) provides the tools, technology and support to enterprises to increase the agility in DevOps by solving the data and data management challenges in stateful applications on Kubernetes. This product is also referred to as **OpenEBS Enterprise** in this documentation.







## Features 

- Container Attached Storage or CAS
- Declarative day2 data operations
- Data backup and migration
- Data visibility for Kubernetes SRE and VP Ops persona
- Chaos engineering for data operations resiliency



## Benefits

- Avoid cloud lockin
- Multi-cloud or hybrid-cloud data management
- Run workloads in a DevOps friendly way
- Built-in Kubenetes logging and monitoring services for the enterprise
- Enterprise grade support from MayaData

## Components of the platform

<img src="/docs/assets/product/moep-01.png" alt="Components of MayaData OpenEBS Enterprise Platform" style="width:600px;">

The product packages the following components:

- OpenEBS Enterprise Edition
- Director Online subscriptions
- Director Onprem
- Litmus Enterprise Edition
- Support from MayaData



> OpenEBS Enterprise is available as one package and not as individual components.

OpenEBS, Litmus and Director can be installed separately, however the subscriptions or licenses are based on the platform and not on the components. 



### OpenEBS Enterprise Edition

OpenEBS community edition and enterprise edition share the same code base. Enterprise edition undergoes rigourous testing at MayaData. The CI pipelines for enterprise edition includes additional scenarios like workload tuning, scalability and performance. Hot patches are provided to customers when required which are eventually merged into upstream code base.



Community users can connect their Kubernetes clusters to Director Online or Director Onprem by signing up at MayaData to get free visibility of OpenEBS components. Director software will upgrade OpenEBS control plane and volume software where applicable and necessary.

### Director

OpenEBS Director written as a Kubernetes application is available in two modes - as a SaaS platform (Director Online at https://director.mayadata.io) and as a Onprem version (Director Onprem). In both these modes, users connect their Kubernetes clusters to get deep visibility into the functionig of OpenEBS and some additional built-in services. 

When a Kubernetes cluster is connected to Director, a set of agents are installed in a separate namespace (called `maya-system` or `maya-onprem`). The agents consume certain amount of resources in terms of CPU and memory depending on the size of cluster. With additional configuration, Director can also be used for monitoring and log management of all the Kubernetes applications apart from those using OpenEBS as storage. 

Accessing Director Online: A free subscription is created when you sign up at MayaData. Access Director at https://director.mayadata.io. More details for getting started with Director Online, see the user guide here.

Director Onprem is accessible as a download from the user portal at https://accounts.mayadata.io. After requesting access to Director Onprem, instructions will be emailed to the user. User guide for Director Onprem is here.



<hr>​

## Pricing model 

MayaData OpenEBS Enterprise Platform is free for basic usage. Once you sign up to MayaData, you get free subscription to use Director Online, get free access to Director Onprem. If you need enterprise support and/or gain access to enterprise editions of OpenEBS or Litmus, or keep the metrics or logs on Director for longer than 7 days, you need to start the trial subscription. 

> The licensing works on the basis of subscriptions. The subscriptions are based on unit-node where one unit-node is 16 virtual cores or vCPUs.

Many variants of subscriptions are offered. For more details, visit the [pricing](<https://mayadata.io/get-pricing>) page. 

<hr>

## Frequently asked questions (FAQs)

1. **I am using OpenEBS open source version. Can you provide me support through MayaData OpenEBS Enterprise Platform ?** 

   <u>Ans:</u> Yes, signup to MayaData. Connect your cluster that is running OpenEBS to Director Online or Director Onprem. All the functionalities will continue to work as is and you get better visibility into OpenEBS functioning. For support from MayaData, upgrade to 30 day evaluation plan, during which you will get free support. 

2. **Is OpenEBS Enterprise platform free?**

   <u>Ans:</u> Yes, the platform runs by default on the free plan. It is free for basic usage. After signup to MayaData, you get free access to support portal where you can get self help from a knowledge base. In the free plan, the monitoring, logging are included. The logs and metrics are stored for 7 days. You can use free plan for unlimited number of clusters.

3. **Are there any resources other than openebs-slack, openebs docs and this documentation that I can look for obtaining help?**

   <u>Ans:</u> You can gain access to knowledge base of MayaData. There is a self help portal as well. 

4. **We are a group of SREs managing few Kubernetes clusters. Can we use Director as a team?** 

   <u>Ans:</u> Currently, teaming feature is not available in Director. We are working to make it available soon. When available, the existing projects and clusters can be shared in a read-only or read-write mode to your team members.



