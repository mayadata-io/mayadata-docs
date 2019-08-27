---
 Connecting K8S clusters
---

------


### Prerequisites

User needs to have a Kubernetes cluster and kubectl installed. 

### Connecting K8s cluster

1.  To connect a new Kubernetes cluster click on **Clusters** on left sidebar and then click on <b>Connect a new Cluster</b> button present on right top corner.
</br>
  <img src="/docs/assets/product/CreateCluster.png"  style="width:550px margin-left:20px;">
       

2.  Now select the details of the cluster carefully according to your configured Kubernetes cluster          that is to be added and provide the cluster with a name **(NOTE: Cluster cannot be renamed)**.
</br>
  <img src="/docs/assets/product/ClusterConnect.png"  style="width:600px margin-left:20px;">   
  <br>
        (OPTIONAL)
        If you are using Proxy Services, click on **Advanced** and enter the following details:</br>
        1. HTTP_PROXY</br>
        2. HTTPS_PROXY</br>
        3. NO_PROXY </br>
        Now, click on the **CONNECT** button.<br>
</br>
  <img src="/docs/assets/product/Connect2.png"  style="width:600px margin-left:20px;">

3. Next, copy and execute the commands displayed on the screen on your Kubernetes cluster to deploy          DirectorOnline agents and connect to DirectorOnline.</br>
       <img src="/docs/assets/product/Connection.png"  style="width:600px margin-left:20px;">
   
  On a successful connection, you will be automatically taken to the cluster landing page.

### Verify your connection

Click on **Overview** visible on the left sidebar, and scroll down to check  DirectorOnline and OpenEBS component's status,we see agent components move to *running state*.</br>
<img src="/docs/assets/product/verify_setup.png"  style="width:600px margin-left:20px;">


Now you can monitor your cluster and add more K8s enabled OpenEBS clusters with DirectorOnline.

