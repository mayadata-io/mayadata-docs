---
 Connecting K8S clusters
---

------


###Prerequisites
User needs to have a Kubernetes cluster build and kubectl installed. 

###Connecting K8s cluster

**1.** To connect a new OpenEBS cluster click on **Clusters** on left side bar and then click on                **Connect a new Cluster** button present on right top corner.
       <img src="/home/anupriya/mayadata-docs/docs/assets/product/CreateCluster.png"  style="width:600px;">

**2.** Now select the details of the cluster carefully according to your configured Kubernetes cluster          that is to be added and provide the cluster with a name(NOTE: Cluster cannot be renamed).</ br>   
        _(OPTIONAL)_
        _If you are using Proxy Services, click on **Advanced** and enter the details and the enter the   following details:_</br>
        _*HTTP_PROXY_</br>
        _*HTTPS_PROXY_</br>
       _*NO_PROXY_ </br>
        Now,click on the **CONNECT** button.

  <img src="/home/anupriya/mayadata-docs/docs/assets/product/ClusterConnect.png"  style="width:600px;">

 **3.** Now copy and execute the commands displayed on the screen on your Kubernetes cluster to deploy          DirectorOnline agents and connect to Director Online.
       <img src="/home/anupriya/mayadata-docs/docs/assets/product/Connection.png"  style="width:600px;">
   
  On a successful connection ,you will be automatically taken to the cluster landing page.

###Verify your connection

Click on **Overview** on the left side bar ,and scroll down to check  Director Online and OpenEBS components status ,initially Deployments will be in Pending state then moving to Running state,cluster register status in Director Online componenets must be *Succeeded*.
<img src="/home/anupriya/mayadata-docs/docs/assets/product/verify_setup.png"  style="width:600px;">


Now you can monitor your cluster and add more K8s enabled OpenEBS clusters with DirectorOnline.

