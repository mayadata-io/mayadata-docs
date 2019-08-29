---
id: topology
title: Topology
sidebar_label: Topology
---

------


Managing different clusters with lots of components like Pods, Deployments, Volumes, etc using the CLI method is very difficult. Director online provides the visualization of Kubernetes, Docker and OpenEBS components with connectivity to other components which will give a good understanding of the placement of these components in the Kubernetes environment. The topology can be enhanced with the help of the scope plugin.

## Mapping

It builds a logical topology of your application and infrastructure. A topology is collections of nodes and edges where nodes represent objects like processes, containers, pods, and edges represent the TCP connections and logical connections of volumes between nodes. Different node types can be filtered on and viewed and specific microservices can be drilled down on and inspected.<br><br>
<img src="/docs/assets/product/Mapping.png">
<br><br>

## Views
 Views can be thought of as high-level filters on your containerized microservices as they run in the cloud. They are categorized into Processes, Containers, Orchestrators, and Hosts. It displays Pods, Replica Sets, Deployments, Persistent Volumes and Services that allow you to drill down on Kubernetes clusters.<br><br>
 <img src="/docs/assets/product/Views.png">
 <br><br>


 ## Modes
  In addition to these views, nodes can be presented either in graphical or in tabular mode.

 #### Graphical Mode
 The graphical mode useful for obtaining a quick visual overview of the app, its infrastructure and connections between all the nodes.
 <br>
 <figure>
 <img src="/docs/assets/product/Mapping.png">
<center><figcaption><b>Graphical Mode</b></figcaption> <center>
</figure>
<br><br>

 #### Tablular Mode

  Switching to tabular mode, nodes are represented in a list that displays the resources being consumed by processes, containers and hosts by dynamically shifting the resource-heavy nodes to the top of the table.<br><br>
<figure>
    <img  src="/docs/assets/product/Views.png">
    <center><figcaption><b>Tabular Mode</b></figcaption></center>
    </figure>
<br><br>

#### Live and Pause Mode

Topology's view can be paused or monitored live. These options can be switched using **Live** or **Pause** buttons on the top right corner. The *live* option will show the live state of the system and *pause* will pause the updates from the clusters.
<br><br>
<img src="/docs/assets/product/LiveAndpause.png">
<br><br>

### Flexible Filtering

On top of the screen you can see some other filtering options. Nodes can be filtered by CPU and Memory,  so that you can easily find containers utilizing most resources. In container view, you can filter by system, application or show all the containers and if you are running an app in Kubernetes then your app can be filtered by namespace and by container state as well(whether running, stopped, contained, uncontained).
<br><br>
<img src="/docs/assets/product/FlexibleFiltering.png">
<br><br>
### Real-time App and Container Metrics

View contextual metrics, tags, and metadata for your containers by clicking on a node to display its details panel. Drilldown on processes inside your container to the hosts that your containers run on, arranged in expandable, sortable tables.
Choose an overview of your container infrastructure, or focus on a specific microservice. Identify and correct issues to ensure the stability and performance of your containerized applications.
<br><br>
<img src="/docs/assets/product/RealTime.png">
<br><br>
### Powerful Search

Click on the *search bar* on the top which allows you to search different components of the cluster. For example: if you want to search for the *dynamodb app* in the topology view, then type “dynamodb” in the search bar and it will highlight the list of pods, containers, and processes where dynamodb is present both in graphical and table mode.
<br><br>
<img src="/docs/assets/product/PowerfulSearch1.png">
<br><br>
For queries in the topology view, you will get the highlighted results by searching using different query tags. For example: if you want to view the resources having CPU usage greater than 3%, then type “cpu>3%” in the search bar. For more information about the query tags, you visit the help section in the bottom right corner. 
<br><br>
<img src="/docs/assets/product/PowerfulSearch2.png">
<br><br>
### Snapshot of a Volume

DirectorOnline also allows taking instantaneous snapshots. Admin can carry out the following steps to take a snapshot of the volume using DirectorOnline:-
1. Click on Volumes topology and select the particular volume.
2. Click on the camera icon which is visible to create the snapshot.
<br><br>
<img src="/docs/assets/product/SnapshotVolume1.png">
<br><br>
3. A snapshot will be created and click the show snapshot filter on the bottom left to view the created    snapshot.
<br><br>
<img src="/docs/assets/product/SnapshotVolume2.png">
<br><br>
### Cloning a Snapshot

DirectorOnline also allows taking a clone of a snapshot. Admin has to do the following steps to take a snapshot of the volume using DirectorOnline:-
1. Click on Volumes topology and select the particular volume.
2. Click on the clone icon which is visible to create the clone.
<br><br>
<img src="/docs/assets/product/CloningSnapshot1.png">
<br><br>
3. A new PVC and PV will be created and that can be used for any stateful workload.
<br><br>
<img src="/docs/assets/product/CloningSnapshot2.png">
<br><br>

### Describing Kubernetes Resources

To describe a Kubernetes resource, open the view related to Kubernetes like Pods, Controllers, Volumes, etc and select the node to open the overview box and then click on the "describe" icon as shown in the image.
<br><br>
<img src="/docs/assets/product/K8sResource.png">
<br><br>

### OpenEBS Components

If OpenEBS is installed in your Kubernetes cluster then you can visualize the OpenEBS components in Pools and Volumes View.

Pools view will show the OpenEBS components such as Storage Pool claim, Storage Pool, Block Device, Disk, etc and their connections making it easy to understand your storage configurations.
<br><br>
<img src="/docs/assets/product/OpenEBSComp1.png">
<br><br>
Volumes view will show the OpenEBS components such as cStor Volume, cStor Volume Replica, etc. and their connections. From this view, it is easy to understand how OpenEBS manages your stateful workloads.
<br><br>
<img src="/docs/assets/product/OpenEBSComp2.png">
<br><br>


















 






