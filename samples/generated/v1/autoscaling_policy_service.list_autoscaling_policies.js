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

function main(parent) {
  // [START dataproc_v1_generated_AutoscalingPolicyService_ListAutoscalingPolicies_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The "resource name" of the region or location, as described
   *  in https://cloud.google.com/apis/design/resource_names.
   *  * For `projects.regions.autoscalingPolicies.list`, the resource name
   *    of the region has the following format:
   *    `projects/{project_id}/regions/{region}`
   *  * For `projects.locations.autoscalingPolicies.list`, the resource name
   *    of the location has the following format:
   *    `projects/{project_id}/locations/{location}`
   */
  // const parent = 'abc123'
  /**
   *  Optional. The maximum number of results to return in each response.
   *  Must be less than or equal to 1000. Defaults to 100.
   */
  // const pageSize = 1234
  /**
   *  Optional. The page token, returned by a previous call, to request the
   *  next page of results.
   */
  // const pageToken = 'abc123'

  // Imports the Dataproc library
  const {AutoscalingPolicyServiceClient} = require('@google-cloud/dataproc').v1;

  // Instantiates a client
  const dataprocClient = new AutoscalingPolicyServiceClient();

  async function callListAutoscalingPolicies() {
    // Construct request
    const request = {
      parent,
    };

    // Run request
    const iterable = await dataprocClient.listAutoscalingPoliciesAsync(request);
    for await (const response of iterable) {
      console.log(response);
    }
  }

  callListAutoscalingPolicies();
  // [END dataproc_v1_generated_AutoscalingPolicyService_ListAutoscalingPolicies_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
