---
id: services
title: Built-in services in OpenEBS Enterprise Platform
sidebar_label: Built-in services
---

------

OpenEBS Enterprise offers Container Attached Storage for stateful applications on Kubernetes. Along with CAS, the platform comes with certain built-in services that are typically needed for any cloud-native teams or enterprises. 



Prometheus monitoring, logging and data backup/restore are essential services in any enterprise environments using Kubernetes as the DevOps foundation platform. Following capabilities are available as touch-and-go services.



## Ready to use services

### Monitoring

Director has a built-in Prometheus server that is multi-tenant and scalable. It comes preconfigured to work out of the box once Director Onprem is installed or Director Online is subscribed. The services has intuitive dashboards for OpenEBS volumes, pools and few applications. Grafana dashboards can be configured for any new applications if the user chooses. See <monitoring> for more details.

### Logging

ElasticSearch, Fluentd and Kibana or EFK stack is pre-installed and configured for day0 use by users signing in into Director. 

Fluentd is pre-configured for OpenEBS components on the clusters that are connected to Director. For others services, Fluentd configuration can be enabled to forward the logs to Director. See <logging> for more details.

### DMaaS

Data backup, restore and migration can be done easily using DMaaS feature of Director. Director currently supports these data services for the volumes that are using cStor. cStor provides Copy-On-Write snapshot capability and hence  DMaaS on cStor volumes is very efficient with only incremental data being backed up to the backup targets. Backup targets supported currently are Amazon S3 and Google buckets. 

See <DMaas> for more details.

