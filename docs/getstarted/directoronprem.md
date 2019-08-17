---
id: directoronprem
title: Director Onprem introduction
sidebar_label: Downloading DirectorOnprem
---

------

DirectorOnprem and DirectorOnline share the same features. For users whose Kubernetes  clusters are in a airgapped environment can install DirectorOnprem to get the Director benefits.



Follow the below steps to get DirectorOnprem installed on your Kubernetes cluster.

## Installation procedure

### Request access keys 



Sign in into [user portal]([https://account.mayadatastaging.io) .

Choose the option "Request access keys to Director Onprem" in the user portal. You will receive an email with access keys and next steps. 



<img src="/docs/assets/product/onprem-keys.png" alt="Requesting keys to DirectorOnprem" style="width:600px;">



### Create secrets

You will receive an email with access keys and next steps of installation. If you have not received an email, go to the portal and request the access keys again. If you have incorrect email address, modify the email address in the user portal and request access keys again.



### Install helm chart

Once you have the access keys, next step is to create secrets using the keys given, download the helm chart, update the values.yaml and install the helm chart. For detailed instructions on how to configure various helm chart parameters, visit [DirectorOnprem user guide](/docs/product/userguides/onprem/install).

