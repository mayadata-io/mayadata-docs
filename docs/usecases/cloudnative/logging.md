---
id: logging
title: Logging using EFK
sidebar_label: Logging
---

------



## Introduction to ElasticSearch



## Key points:



## Design considerations:

cStor (or) LocalPV



Replication (or) no-replication



Sizing of Kubernetes nodes







Mode1 - For test environments - Using cStor sparse(1 replica) + ElasticSearch as a deployment

Mode2 - For small production environments - Using cStor disks (3 replica) + ElasticSearch as a deployment

Mode3 - For medium sized production environments - Using cStor disks (1 replica) + ElasticSearch as a stateful set

Mode4 - For large sized production environments - Using LocalPV + ElasticSearch as a stateful set

Mode5 - For large sized production environments, where thin provisioning is a requirements - Using cStor disks (1 replica) + ElasticSearch as a stateful set



## Installation of ElasticSearch



## Monitoring ElasticSearch

## Scaling of ElasticSearch

- Capacity expansion of data nodes
- New data nodes addition



## Backup of data to object store

## Restore of ElasticSearch to another Kubernetes cluster

## Resilience testing of ElasticSearch



