---
id: dmaas
title: Data Backup, Restore and Migration
sidebar_label: DMaaS
---

------

Data Migration as a Service(DMaaS) is an offering from MayaData, available on both platforms - DirectorOnline and Director OnPrem. DMaaS is a solution for data agility and data motion in the Kubernetes platform, providing utilities and workflows to migrate Kubernetes stateful workloads along with their persistent data from anywhere to anywhere, be it on-premise or across clouds. It is application-aware, so the application state remains consistent before and after migration. Thus, it helps the user in backup and disaster recovery of the application along with the data, with the minimized time taken for restoring back to the normal operation mode.

### Scenarios where user can use DMaaS:

1. Migration of Kubernetes stateful workloads across clouds or between on-premise and cloud
2. Disaster recovery
3. Application upgrades
4. Kubernetes upgrades
5. Data Backup and Recovery
6. Data Protection

### DMaas Operational Mode:

DMaaS backup agent will be deployed on both the source and destination clusters once these clusters are in Premium plan or in the Evaluation plan (Can be upgraded for free). The backup agent on the source cluster uses the provider APIs to send the backup to the object storage. The backup agent on the destination cluster retrieves the backup from the object storage and deploys the application from the backed-up configuration whenever it demands the backup data. The data motion can be scheduled for both the upload and download so that periodic incremental backups can be uploaded from the source and the destination can be kept in sync with the source.

### Prerequisites
1. OpenEBS version of **1.1.0** or above.
2. Provision application on cStor Volume.
3. DirectorOnline Account with subscription of Premium plan or Evaluation plan(Can be upgraded for free).
4. AWS S3, GCP credentials.
5. Same StorageClass configuration and Service Account should exit on the destination cluster where         restore is going to happen.
6. All the app-specific resources like service, PVC, shared resources like Service Account, ClusterRoles,   etc. should have a common label.
7. Recommended Kubernetes Version of 1.12 or above.


### Setting up the Environment:
 
 1. Install OpenEBS version 1.1.0 or above.<br>
     (For reference: <a href>https://docs.openebs.io/docs/next/installation.html</a>)
 2. Provision application on OpenEBS cStor volume.<br>
     ( For reference: <a href>https://docs.openebs.io/docs/next/ugcstor.html</a>)
 3. Connect clusters to DirectorOnline.<br>
    (For reference: <a href>https://docs.mayadatastaging.io/docs/product/userguides/common/connecting/</a>).
 4. Add AWS credentials or GCP credentials for the first time with correct details of your account in       the cloud provider with a title name. Credentials with title name can be selected for the subsequent    backup schedules and restores.
 5. Schedule the backup period using the AWS S3 or GCP credentials, select proper time interval and region (in case of AWS S3) while creating Data Motion schedule.Provide backup schedule by selecting the time slot.
 6. Verify the list of Backup from the DMaaS page or from corresponding application page.
 7. Restore the application to same cluster or different cluster from the selected backup.
 
### Setting up Data Motion Schedule

1. DMaaS helps the user to do the Data Motion of the application data to a third party storage              location like AWS or GCP in a scheduled manner. User has to schedule the period from the DMaaS           section on the application page.

2. With the current implementation, AWS S3 and GCP are the third party storage location where the backup    of the application is getting stored. 
     #### Steps to schedule the backup transfer of the corresponding application.
    <ol>
      <li> Clicking on the application on the left sidebar redirects to a page where you can select the       application. By clicking on the application name you will be redirected to the corresponding       application page.<br><br>
      <img src="/docs/assets/product/DataMotion1.svg"  onclick="window.open('/docs/assets/product/DataMotion1.svg', '_blank');" />
        <br><br>
        </li>

      <li> Select <b>DMaaS</b> on the selection box. Click on <b>New schedule</b> button.<br><br>
      <img src="/docs/assets/product/DataMotion2.svg"  onclick="window.open('/docs/assets/product/DataMotion2.svg', '_blank');" />
       </li>
      <li> Update the following details to create a backup schedule:
       Cloud provider credentials from Provider credentials(if already saved).
      <p style="text-align: center;"> OR </p>
      If creating for the first time follow the following steps:<br>
       <ol>
      <li> Select your <b>Cloud Provider</b>.</li>
      <li> Click on <b>Add cloud credential</b>.</li>
       <b>For GCP:</b><br>
         <ol>
             <li> Fill in the <b>Title</b> field:<br>
                It is the name given to the credentials that are going to be provided.<br> 
                Rules to provide title:<br>
                  * The name should start with letter.<br>
                  *  Should be alphanumeric and with a maximum of 24 characters.<br>
                  * May include hyphen (-). <br>
                After adding these credentials, choose this name from the Provider credentials for the backup schedule.</li>
             <li> Copy and paste the content from downloaded json file from GCP to the <b>Google cloud           credentials</b> field.</li>
             <li>Click on <b>Save</b> button.<br>
              <b>[Note: The same credentials will be used during scheduling of Data Motion.]</b><br>
              <img src="/docs/assets/product/DataMotion3.svg" onclick="window.open('/docs/assets/product/DataMotion3.svg', '_blank');" />
             <br><br>
             </li>
            </ol>
            <b>For AWS:</b><br>
            <ol>
             <li> Fill in the <b>Title</b> field:<br>
                 It is the name given to the credentials that are going to be provided.<br> 
                 Rules to provide title:<br>
                  1. The name should start with letter.<br>
                  2.  Should be alphanumeric and with a maximum of 24 characters.<br>
                  3. May include hyphen (-). <br>
                After adding these credentials, choose this name from the Provider credentials for the backup schedule.</li>
              <li>Next, add Access key and secret key that you are provided by AWS.</li>
              <li>Click on <b>Save</b> button.<br>
              <b>[Note: The same credentials will be used during scheduling of Data Motion.]</b><br>
              <img src="/docs/assets/product/AWS.svg" onclick="window.open('/docs/assets/product/AWS.svg', '_blank');" />
             <br><br>
             </li></ol>
        <li> Select the region from the dropdown where the backup is to be stored.<br>
              Next, select the time interval as desired(This is the interval after which backup will occur).<br><br></li>
           <li>  Then Schedule the backup using <b>Schedule now</b> button.
             <br>
             <img src="/docs/assets/product/BackupSetup1.svg" onclick="window.open('/docs/assets/product/BackupSetup1.svg', '_blank');" />
             <br><br>
         </li>

      <li>As soon as the DMaas agents are in running state, backup starts automatically.<br>
         Once backup is completed you can see an auto generated schedule name on your screen.<br>
      <img src="/docs/assets/product/BackupSetup2.svg" onclick="window.open('/docs/assets/product/BackupSetup2.svg', '_blank');" /><br><br>
  </li>
</ol>

### Restoring the application
   Restoration of the application can be done in two ways: 
    <br>
      <details>
      <summary>1. Restoration on same OpenEBS Cluster **(Click to see the workflow)**</summary>
          <h3><b>Prerequisites</b></h3>
            <ol>
              <li> The original application and its associated components such as PVC, PV, CVR and SVC         should not exist.</li>
               <li>Ensure the same StorageClass configuration and Service account exists.</li>
            </ol>
          <h3><b> Workflow</h3></b>
             <ol>
                <li> Click on **Application** on the left sidebar, click on DMaas and locate the cluster     that needs to be restored.</li>
                <li> Once located, click on **restore** symbol next to the backup.<br>
                <img src="/docs/assets/product/Restore1.svg" onclick="window.open('/docs/assets/product/Restore1.svg', '_blank');" /></li>
                <br><br>
                <li>Select the same cluster name from the drop down menu and click on **Start restore** button.<br>
                <img src="/docs/assets/product/Restore2.svg" onclick="window.open('/docs/assets/product/Restore2.svg', '_blank');" /></li>
                <br><br>
                </li>
                <li>As soon as the restore starts, you see a pop up window on your screen.(In order to elaborately see the process of restore click on **Restore** link).<br>
                <img src="/docs/assets/product/RestoreStarted.svg" onclick="window.open('/docs/assets/product/RestoreStarted.svg', '_blank');" />
                </li>
                <li>The restoration goes through various checks:
                <ul><li>Preflight check</li>
                <li>Restoring backups</li>
                <li>Activating applications<br>
                       <figure>
                       <br>
                            <img src="/docs/assets/product/PreflightCheck.svg"  onclick="window.open('/docs/assets/product/PreflightCheck.svg', '_blank');">
                            <figcaption><b><p style="text-align: center;">Preflight check</p></b></figcaption>
                        <br>
                       </figure>
                     <figure>
                       <br>
                            <img src="/docs/assets/product/RestoringBackup.svg" onclick="window.open('/docs/assets/product/RestoringBackup.svg', '_blank');">
                            <figcaption><b><p style="text-align: center;">Restoring Backup</p></b></figcaption>
                        <br>
                       </figure>
                  <figure>
                       <br>
                            <img src="/docs/assets/product/ActivatingApplication.svg" onclick="window.open('/docs/assets/product/ActivatingApplication.svg', '_blank');">
                            <figcaption><b><p style="text-align: center;">Activating Application</p></b></figcaption> 
                        <br>
                       </figure>
                  </li>
                </ul>
                <li> After successful restoration, restoration job details will be displayed on the screen. (User can get the details of each process by clicking on the name.)<br>
                <img src="/docs/assets/product/BackupComplete.svg" onclick="window.open('/docs/assets/product/BackupComplete.svg', '_blank');">
                </li>
                <li>
                The details of backup jobs can be viewed by clicking on **DMaaS** on left sidebar.<br><br>
                Backup is now successfull!!
                </li>
             </ol>
     </details>
      <details>
      <summary>2. Restoration on different cluster **(Click to see the workflow)**</summary>
       <h3><b>Prerequisites</b></h3>
      <ol>
            <li>
              Destination cluster sould have same StorageClass configuration as source cluster.
            </li>
            <li> Destination cluster must be upgraded to Premium or Evaluation.</li>
            <li>Destination cluster should be connected to the same DirectorOnline account.</li>
           </li>
      </ol>
       <h3><b>Workflow:</b></h3>
      <ol>
            <li>Clicking on **cluster** on left sidebar (on DirectorOnline UI) both the clusters(source as well as destination) must be visible.<br>
            <img src="/docs/assets/product/BackupDiffCluster.svg" onclick="window.open('/docs/assets/product/BackupDiffCluster.svg', '_blank');">
            </li>
            <li> Click on **Application** on the left sidebar, click on DMaas and locate the cluster     that needs to be restored.</li>
                <li> Once located, click on **restore** symbol next to the backup.<br>
                <img src="/docs/assets/product/Restore1.svg" onclick="window.open('/docs/assets/product/Restore1.svg', '_blank');" /></li>
                <br><br>
                <li>Select the desired cluster name from the drop down menu and click on **Start restore** button.<br>
                <img src="/docs/assets/product/Restore2.svg" onclick="window.open('/docs/assets/product/Restore2.svg', '_blank');" /></li>
                <br><br>
                </li>
                <li>As soon as the restore starts, you see a pop up window on your screen.(In order to elaborately see the process of restore, click on **Restore** link).<br>
                <img src="/docs/assets/product/RestoreStarted.svg" onclick="window.open('/docs/assets/product/RestoreStarted.svg', '_blank');" />
                </li>
                <li>The restoration goes through various checks:
                <ul><li>Preflight check</li>
                <li>Restoring backups</li>
                <li>Activating applications<br>
                       <figure>
                       <br>
                            <img src="/docs/assets/product/PreflightCheck.svg"  onclick="window.open('/docs/assets/product/PreflightCheck.svg', '_blank');">
                            <figcaption><b><p style="text-align: center;">Preflight check</p></b></figcaption> 
                        <br>
                       </figure>
                        <figure>
                       <br>
                            <img src="/docs/assets/product/RestoringBackup.svg" onclick="window.open('/docs/assets/product/RestoringBackup.svg', '_blank');">
                            <figcaption><b><p style="text-align: center;">Restoring Backup</p></b></figcaption> 
                        <br>
                       </figure>
                  <figure>
                       <br>
                            <img src="/docs/assets/product/ActivatingApplication.svg" onclick="window.open('/docs/assets/product/ActivatingApplication.svg', '_blank');">
                           <figcaption><b><p style="text-align: center;">Activating Application</p></b></figcaption> </p>
                        <br>
                       </figure>
                  </li>
                </ul>
                <li> After successful restoration, restoration job details will be displayed on the screen. (User can get the details of each process by clicking on the name.)<br>
                <img src="/docs/assets/product/BackupComplete.svg" onclick="window.open('/docs/assets/product/BackupComplete.svg', '_blank');">
                </li>
                <li>
                The details of backup jobs can be viewed by clicking on **DMaaS** on left sidebar.<br><br>
                Backup is now successfull!!
                </li>
             </ol>
      </ol>
      </details>
### Limitations:

1. Backup of StatefulSet application is currently not supported.
2. Backup support only for cStor volumes.

### Roadmap:

1. The different namespace for a restored application other than the same namespace of source        application.
2. Support MinIO as backup storage location.
3. Schedule the backup of the same application to multiple storage providers.
4. Delete, Stop and Resume the migration from the DirectorOnline console.




        
         
      


            


               
             







