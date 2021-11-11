// Copyright 2021 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

'use strict';

function main(projectId, region, clusterName) {
  // [START dataproc_v1_generated_ClusterController_StopCluster_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The ID of the Google Cloud Platform project the
   *  cluster belongs to.
   */
  // const projectId = 'abc123'
  /**
   *  Required. The Dataproc region in which to handle the request.
   */
  // const region = 'us-central1'
  /**
   *  Required. The cluster name.
   */
  // const clusterName = 'abc123'
  /**
   *  Optional. Specifying the `cluster_uuid` means the RPC will fail
   *  (with error NOT_FOUND) if a cluster with the specified UUID does not exist.
   */
  // const clusterUuid = 'abc123'
  /**
   *  Optional. A unique ID used to identify the request. If the server
   *  receives two
   *  StopClusterRequest (https://cloud.google.com/dataproc/docs/reference/rpc/google.cloud.dataproc.v1#google.cloud.dataproc.v1.StopClusterRequest)s
   *  with the same id, then the second request will be ignored and the
   *  first google.longrunning.Operation google.longrunning.Operation  created and stored in the
   *  backend is returned.
   *  Recommendation: Set this value to a
   *  UUID (https://en.wikipedia.org/wiki/Universally_unique_identifier).
   *  The ID must contain only letters (a-z, A-Z), numbers (0-9),
   *  underscores (_), and hyphens (-). The maximum length is 40 characters.
   */
  // const requestId = 'abc123'

  // Imports the Dataproc library
  const {ClusterControllerClient} = require('@google-cloud/dataproc').v1;

  // Instantiates a client
  const dataprocClient = new ClusterControllerClient();

  async function callStopCluster() {
    // Construct request
    const request = {
      projectId,
      region,
      clusterName,
    };

    // Run request
    const [operation] = await dataprocClient.stopCluster(request);
    const [response] = await operation.promise();
    console.log(response);
  }

  callStopCluster();
  // [END dataproc_v1_generated_ClusterController_StopCluster_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
