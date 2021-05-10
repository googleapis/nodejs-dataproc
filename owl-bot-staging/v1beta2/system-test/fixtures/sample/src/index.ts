// Copyright 2021 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
//
// ** This file is automatically generated by gapic-generator-typescript. **
// ** https://github.com/googleapis/gapic-generator-typescript **
// ** All changes to this file may be overwritten. **

import {AutoscalingPolicyServiceClient, ClusterControllerClient, JobControllerClient, WorkflowTemplateServiceClient} from '@google-cloud/dataproc';

// check that the client class type name can be used
function doStuffWithAutoscalingPolicyServiceClient(client: AutoscalingPolicyServiceClient) {
  client.close();
}
function doStuffWithClusterControllerClient(client: ClusterControllerClient) {
  client.close();
}
function doStuffWithJobControllerClient(client: JobControllerClient) {
  client.close();
}
function doStuffWithWorkflowTemplateServiceClient(client: WorkflowTemplateServiceClient) {
  client.close();
}

function main() {
  // check that the client instance can be created
  const autoscalingPolicyServiceClient = new AutoscalingPolicyServiceClient();
  doStuffWithAutoscalingPolicyServiceClient(autoscalingPolicyServiceClient);
  // check that the client instance can be created
  const clusterControllerClient = new ClusterControllerClient();
  doStuffWithClusterControllerClient(clusterControllerClient);
  // check that the client instance can be created
  const jobControllerClient = new JobControllerClient();
  doStuffWithJobControllerClient(jobControllerClient);
  // check that the client instance can be created
  const workflowTemplateServiceClient = new WorkflowTemplateServiceClient();
  doStuffWithWorkflowTemplateServiceClient(workflowTemplateServiceClient);
}

main();