---
id: connecting
title: Connecting Kubernetes clusters to Director
sidebar_label: Connecting K8S clusters
---
------
### Prerequisites

User needs to have a Kubernetes cluster and kubectl installed. 

### Connecting K8s cluster

1.  To connect a new Kubernetes cluster click on **Clusters** on left sidebar and then click on              <b>Connect a new Cluster</b> button present on right top corner.
    <br><br>
    <img src="/docs/assets/product/CreateCluster.png"   >
    <br><br>
       

2.  Now select the details of the cluster carefully according to your configured Kubernetes cluster          that is to be added and provide the cluster with a name **(NOTE: Cluster cannot be renamed)** .
    <br><br>
    <img src="/docs/assets/product/ClusterConnect.png"   >   
  <br><br>
    (OPTIONAL)
    If you are using Proxy Services, click on **Advanced** and enter the following details:
    1. HTTP_PROXY 
    2. HTTPS_PROXY
    3. NO_PROXY 
    <br>Now, click on the **CONNECT** button.
    <br><br>
    <img src="/docs/assets/product/Connect2.png"  >
    <br><br>
3.   Next, copy and execute the commands displayed on the screen on your Kubernetes cluster to deploy         DirectorOnline agents and connect to DirectorOnline.
     <br><br>
     <img src="/docs/assets/product/Connection.png"  >
     <br><br>
  On a successful connection, you will be automatically taken to the cluster landing page.

### Verify your connection

Click on **Overview** visible on the left sidebar, and scroll down to check  DirectorOnline and OpenEBS component's status,we see agent components move to *running state*.
<br><br>
<img src="/docs/assets/product/verify_setup.png"  >
<br><br>

Now you can monitor your cluster and add more K8s enabled OpenEBS clusters with DirectorOnline.

