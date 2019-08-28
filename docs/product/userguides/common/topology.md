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






 






