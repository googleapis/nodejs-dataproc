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

function main(template) {
  // [START dataproc_update_workflow_template_sample]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The updated workflow template.
   *  The `template.version` field must match the current version.
   */
  // const template = ''

  // Imports the Dataproc library
  const {WorkflowTemplateServiceClient} = require('@google-cloud/dataproc').v1;

  // Instantiates a client
  const dataprocClient = new WorkflowTemplateServiceClient();

  async function updateWorkflowTemplate() {
    // Construct request
    const request = {
      template,
    };

    // Run request
    const response = await dataprocClient.updateWorkflowTemplate(request);
    console.log(response);
  }

  updateWorkflowTemplate();
  // [END dataproc_update_workflow_template_sample]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
