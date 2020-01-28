// Copyright 2020 Google LLC
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

'use strict';

const gapicConfig = require('./cluster_controller_client_config.json');
const gax = require('google-gax');
const path = require('path');

const VERSION = require('../../package.json').version;

/**
 * The ClusterControllerService provides methods to manage clusters
 * of Compute Engine instances.
 *
 * @class
 * @memberof v1beta2
 */
class ClusterControllerClient {
  /**
   * Construct an instance of ClusterControllerClient.
   *
   * @param {object} [options] - The configuration object. See the subsequent
   *   parameters for more details.
   * @param {object} [options.credentials] - Credentials object.
   * @param {string} [options.credentials.client_email]
   * @param {string} [options.credentials.private_key]
   * @param {string} [options.email] - Account email address. Required when
   *     using a .pem or .p12 keyFilename.
   * @param {string} [options.keyFilename] - Full path to the a .json, .pem, or
   *     .p12 key downloaded from the Google Developers Console. If you provide
   *     a path to a JSON file, the projectId option below is not necessary.
   *     NOTE: .pem and .p12 require you to specify options.email as well.
   * @param {number} [options.port] - The port on which to connect to
   *     the remote host.
   * @param {string} [options.projectId] - The project ID from the Google
   *     Developer's Console, e.g. 'grape-spaceship-123'. We will also check
   *     the environment variable GCLOUD_PROJECT for your project ID. If your
   *     app is running in an environment which supports
   *     {@link https://developers.google.com/identity/protocols/application-default-credentials Application Default Credentials},
   *     your project ID will be detected automatically.
   * @param {function} [options.promise] - Custom promise module to use instead
   *     of native Promises.
   * @param {string} [options.apiEndpoint] - The domain name of the
   *     API remote host.
   */
  constructor(opts) {
    opts = opts || {};
    this._descriptors = {};

    if (global.isBrowser) {
      // If we're in browser, we use gRPC fallback.
      opts.fallback = true;
    }

    // If we are in browser, we are already using fallback because of the
    // "browser" field in package.json.
    // But if we were explicitly requested to use fallback, let's do it now.
    const gaxModule = !global.isBrowser && opts.fallback ? gax.fallback : gax;

    const servicePath =
      opts.servicePath || opts.apiEndpoint || this.constructor.servicePath;

    // Ensure that options include the service address and port.
    opts = Object.assign(
      {
        clientConfig: {},
        port: this.constructor.port,
        servicePath,
      },
      opts
    );

    // Create a `gaxGrpc` object, with any grpc-specific options
    // sent to the client.
    opts.scopes = this.constructor.scopes;
    const gaxGrpc = new gaxModule.GrpcClient(opts);

    // Save the auth object to the client, for use by other methods.
    this.auth = gaxGrpc.auth;

    // Determine the client header string.
    const clientHeader = [];

    if (typeof process !== 'undefined' && 'versions' in process) {
      clientHeader.push(`gl-node/${process.versions.node}`);
    }
    clientHeader.push(`gax/${gaxModule.version}`);
    if (opts.fallback) {
      clientHeader.push(`gl-web/${gaxModule.version}`);
    } else {
      clientHeader.push(`grpc/${gaxGrpc.grpcVersion}`);
    }
    clientHeader.push(`gapic/${VERSION}`);
    if (opts.libName && opts.libVersion) {
      clientHeader.push(`${opts.libName}/${opts.libVersion}`);
    }

    // Load the applicable protos.
    // For Node.js, pass the path to JSON proto file.
    // For browsers, pass the JSON content.

    const nodejsProtoPath = path.join(
      __dirname,
      '..',
      '..',
      'protos',
      'protos.json'
    );
    const protos = gaxGrpc.loadProto(
      opts.fallback ? require('../../protos/protos.json') : nodejsProtoPath
    );

    // Some of the methods on this service return "paged" results,
    // (e.g. 50 results at a time, with tokens to get subsequent
    // pages). Denote the keys used for pagination and results.
    this._descriptors.page = {
      listClusters: new gaxModule.PageDescriptor(
        'pageToken',
        'nextPageToken',
        'clusters'
      ),
    };

    const protoFilesRoot = opts.fallback
      ? gaxModule.protobuf.Root.fromJSON(require('../../protos/protos.json'))
      : gaxModule.protobuf.loadSync(nodejsProtoPath);

    // This API contains "long-running operations", which return a
    // an Operation object that allows for tracking of the operation,
    // rather than holding a request open.
    this.operationsClient = new gaxModule.lro({
      auth: gaxGrpc.auth,
      grpc: gaxGrpc.grpc,
    }).operationsClient(opts);

    const createClusterResponse = protoFilesRoot.lookup(
      'google.cloud.dataproc.v1beta2.Cluster'
    );
    const createClusterMetadata = protoFilesRoot.lookup(
      'google.cloud.dataproc.v1beta2.ClusterOperationMetadata'
    );
    const updateClusterResponse = protoFilesRoot.lookup(
      'google.cloud.dataproc.v1beta2.Cluster'
    );
    const updateClusterMetadata = protoFilesRoot.lookup(
      'google.cloud.dataproc.v1beta2.ClusterOperationMetadata'
    );
    const deleteClusterResponse = protoFilesRoot.lookup(
      'google.protobuf.Empty'
    );
    const deleteClusterMetadata = protoFilesRoot.lookup(
      'google.cloud.dataproc.v1beta2.ClusterOperationMetadata'
    );
    const diagnoseClusterResponse = protoFilesRoot.lookup(
      'google.protobuf.Empty'
    );
    const diagnoseClusterMetadata = protoFilesRoot.lookup(
      'google.cloud.dataproc.v1beta2.DiagnoseClusterResults'
    );

    this._descriptors.longrunning = {
      createCluster: new gaxModule.LongrunningDescriptor(
        this.operationsClient,
        createClusterResponse.decode.bind(createClusterResponse),
        createClusterMetadata.decode.bind(createClusterMetadata)
      ),
      updateCluster: new gaxModule.LongrunningDescriptor(
        this.operationsClient,
        updateClusterResponse.decode.bind(updateClusterResponse),
        updateClusterMetadata.decode.bind(updateClusterMetadata)
      ),
      deleteCluster: new gaxModule.LongrunningDescriptor(
        this.operationsClient,
        deleteClusterResponse.decode.bind(deleteClusterResponse),
        deleteClusterMetadata.decode.bind(deleteClusterMetadata)
      ),
      diagnoseCluster: new gaxModule.LongrunningDescriptor(
        this.operationsClient,
        diagnoseClusterResponse.decode.bind(diagnoseClusterResponse),
        diagnoseClusterMetadata.decode.bind(diagnoseClusterMetadata)
      ),
    };

    // Put together the default options sent with requests.
    const defaults = gaxGrpc.constructSettings(
      'google.cloud.dataproc.v1beta2.ClusterController',
      gapicConfig,
      opts.clientConfig,
      {'x-goog-api-client': clientHeader.join(' ')}
    );

    // Set up a dictionary of "inner API calls"; the core implementation
    // of calling the API is handled in `google-gax`, with this code
    // merely providing the destination and request information.
    this._innerApiCalls = {};

    // Put together the "service stub" for
    // google.cloud.dataproc.v1beta2.ClusterController.
    const clusterControllerStub = gaxGrpc.createStub(
      opts.fallback
        ? protos.lookupService(
            'google.cloud.dataproc.v1beta2.ClusterController'
          )
        : protos.google.cloud.dataproc.v1beta2.ClusterController,
      opts
    );

    // Iterate over each of the methods that the service provides
    // and create an API call method for each.
    const clusterControllerStubMethods = [
      'createCluster',
      'updateCluster',
      'deleteCluster',
      'getCluster',
      'listClusters',
      'diagnoseCluster',
    ];
    for (const methodName of clusterControllerStubMethods) {
      const innerCallPromise = clusterControllerStub.then(
        stub => (...args) => {
          return stub[methodName].apply(stub, args);
        },
        err => () => {
          throw err;
        }
      );
      this._innerApiCalls[methodName] = gaxModule.createApiCall(
        innerCallPromise,
        defaults[methodName],
        this._descriptors.page[methodName] ||
          this._descriptors.longrunning[methodName]
      );
    }
  }

  /**
   * The DNS address for this API service.
   */
  static get servicePath() {
    return 'dataproc.googleapis.com';
  }

  /**
   * The DNS address for this API service - same as servicePath(),
   * exists for compatibility reasons.
   */
  static get apiEndpoint() {
    return 'dataproc.googleapis.com';
  }

  /**
   * The port for this API service.
   */
  static get port() {
    return 443;
  }

  /**
   * The scopes needed to make gRPC calls for every method defined
   * in this service.
   */
  static get scopes() {
    return ['https://www.googleapis.com/auth/cloud-platform'];
  }

  /**
   * Return the project ID used by this class.
   * @param {function(Error, string)} callback - the callback to
   *   be called with the current project Id.
   */
  getProjectId(callback) {
    return this.auth.getProjectId(callback);
  }

  // -------------------
  // -- Service calls --
  // -------------------

  /**
   * Creates a cluster in a project. The returned
   * Operation.metadata will be
   * [ClusterOperationMetadata](https://cloud.google.com/dataproc/docs/reference/rpc/google.cloud.dataproc.v1beta2#clusteroperationmetadata).
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.projectId
   *   Required. The ID of the Google Cloud Platform project that the cluster
   *   belongs to.
   * @param {string} request.region
   *   Required. The Cloud Dataproc region in which to handle the request.
   * @param {Object} request.cluster
   *   Required. The cluster to create.
   *
   *   This object should have the same structure as [Cluster]{@link google.cloud.dataproc.v1beta2.Cluster}
   * @param {string} [request.requestId]
   *   Optional. A unique id used to identify the request. If the server
   *   receives two CreateClusterRequest requests  with the same
   *   id, then the second request will be ignored and the
   *   first google.longrunning.Operation created and stored in the backend
   *   is returned.
   *
   *   It is recommended to always set this value to a
   *   [UUID](https://en.wikipedia.org/wiki/Universally_unique_identifier).
   *
   *   The id must contain only letters (a-z, A-Z), numbers (0-9),
   *   underscores (_), and hyphens (-). The maximum length is 40 characters.
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/interfaces/CallOptions.html} for the details.
   * @param {function(?Error, ?Object)} [callback]
   *   The function which will be called with the result of the API call.
   *
   *   The second parameter to the callback is a [gax.Operation]{@link https://googleapis.github.io/gax-nodejs/classes/Operation.html} object.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is a [gax.Operation]{@link https://googleapis.github.io/gax-nodejs/classes/Operation.html} object.
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const dataproc = require('@google-cloud/dataproc');
   *
   * const client = new dataproc.v1beta2.ClusterControllerClient({
   *   // optional auth parameters.
   * });
   *
   * const projectId = '';
   * const region = '';
   * const cluster = {};
   * const request = {
   *   projectId: projectId,
   *   region: region,
   *   cluster: cluster,
   * };
   *
   * // Handle the operation using the promise pattern.
   * client.createCluster(request)
   *   .then(responses => {
   *     const [operation, initialApiResponse] = responses;
   *
   *     // Operation#promise starts polling for the completion of the LRO.
   *     return operation.promise();
   *   })
   *   .then(responses => {
   *     const result = responses[0];
   *     const metadata = responses[1];
   *     const finalApiResponse = responses[2];
   *   })
   *   .catch(err => {
   *     console.error(err);
   *   });
   *
   * const projectId = '';
   * const region = '';
   * const cluster = {};
   * const request = {
   *   projectId: projectId,
   *   region: region,
   *   cluster: cluster,
   * };
   *
   * // Handle the operation using the event emitter pattern.
   * client.createCluster(request)
   *   .then(responses => {
   *     const [operation, initialApiResponse] = responses;
   *
   *     // Adding a listener for the "complete" event starts polling for the
   *     // completion of the operation.
   *     operation.on('complete', (result, metadata, finalApiResponse) => {
   *       // doSomethingWith(result);
   *     });
   *
   *     // Adding a listener for the "progress" event causes the callback to be
   *     // called on any change in metadata when the operation is polled.
   *     operation.on('progress', (metadata, apiResponse) => {
   *       // doSomethingWith(metadata)
   *     });
   *
   *     // Adding a listener for the "error" event handles any errors found during polling.
   *     operation.on('error', err => {
   *       // throw(err);
   *     });
   *   })
   *   .catch(err => {
   *     console.error(err);
   *   });
   *
   * const projectId = '';
   * const region = '';
   * const cluster = {};
   * const request = {
   *   projectId: projectId,
   *   region: region,
   *   cluster: cluster,
   * };
   *
   * // Handle the operation using the await pattern.
   * const [operation] = await client.createCluster(request);
   *
   * const [response] = await operation.promise();
   */
  createCluster(request, options, callback) {
    if (options instanceof Function && callback === undefined) {
      callback = options;
      options = {};
    }
    request = request || {};
    options = options || {};

    return this._innerApiCalls.createCluster(request, options, callback);
  }

  /**
   * Updates a cluster in a project. The returned
   * Operation.metadata will be
   * [ClusterOperationMetadata](https://cloud.google.com/dataproc/docs/reference/rpc/google.cloud.dataproc.v1beta2#clusteroperationmetadata).
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.projectId
   *   Required. The ID of the Google Cloud Platform project the
   *   cluster belongs to.
   * @param {string} request.region
   *   Required. The Cloud Dataproc region in which to handle the request.
   * @param {string} request.clusterName
   *   Required. The cluster name.
   * @param {Object} request.cluster
   *   Required. The changes to the cluster.
   *
   *   This object should have the same structure as [Cluster]{@link google.cloud.dataproc.v1beta2.Cluster}
   * @param {Object} request.updateMask
   *   Required. Specifies the path, relative to `Cluster`, of
   *   the field to update. For example, to change the number of workers
   *   in a cluster to 5, the `update_mask` parameter would be
   *   specified as `config.worker_config.num_instances`,
   *   and the `PATCH` request body would specify the new value, as follows:
   *
   *       {
   *         "config":{
   *           "workerConfig":{
   *             "numInstances":"5"
   *           }
   *         }
   *       }
   *
   *   Similarly, to change the number of preemptible workers in a cluster to 5,
   *   the `update_mask` parameter would be
   *   `config.secondary_worker_config.num_instances`, and the `PATCH` request
   *   body would be set as follows:
   *
   *       {
   *         "config":{
   *           "secondaryWorkerConfig":{
   *             "numInstances":"5"
   *           }
   *         }
   *       }
   *   <strong>Note:</strong> currently only the following fields can be updated:
   *
   *   <table>
   *   <tr>
   *   <td><strong>Mask</strong></td><td><strong>Purpose</strong></td>
   *   </tr>
   *   <tr>
   *   <td>labels</td><td>Updates labels</td>
   *   </tr>
   *   <tr>
   *   <td>config.worker_config.num_instances</td><td>Resize primary worker
   *   group</td>
   *   </tr>
   *   <tr>
   *   <td>config.secondary_worker_config.num_instances</td><td>Resize secondary
   *   worker group</td>
   *   </tr>
   *   <tr>
   *   <td>config.lifecycle_config.auto_delete_ttl</td><td>Reset MAX TTL
   *   duration</td>
   *   </tr>
   *   <tr>
   *   <td>config.lifecycle_config.auto_delete_time</td><td>Update MAX TTL
   *   deletion timestamp</td>
   *   </tr>
   *   <tr>
   *   <td>config.lifecycle_config.idle_delete_ttl</td><td>Update Idle TTL
   *   duration</td>
   *   </tr>
   *   <tr>
   *   <td>config.autoscaling_config.policy_uri</td><td>Use, stop using, or change
   *   autoscaling policies</td>
   *   </tr>
   *   </table>
   *
   *   This object should have the same structure as [FieldMask]{@link google.protobuf.FieldMask}
   * @param {Object} [request.gracefulDecommissionTimeout]
   *   Optional. Timeout for graceful YARN decomissioning. Graceful
   *   decommissioning allows removing nodes from the cluster without
   *   interrupting jobs in progress. Timeout specifies how long to wait for jobs
   *   in progress to finish before forcefully removing nodes (and potentially
   *   interrupting jobs). Default timeout is 0 (for forceful decommission), and
   *   the maximum allowed timeout is 1 day.
   *
   *   Only supported on Dataproc image versions 1.2 and higher.
   *
   *   This object should have the same structure as [Duration]{@link google.protobuf.Duration}
   * @param {string} [request.requestId]
   *   Optional. A unique id used to identify the request. If the server
   *   receives two UpdateClusterRequest requests  with the same
   *   id, then the second request will be ignored and the
   *   first google.longrunning.Operation created and stored in the
   *   backend is returned.
   *
   *   It is recommended to always set this value to a
   *   [UUID](https://en.wikipedia.org/wiki/Universally_unique_identifier).
   *
   *   The id must contain only letters (a-z, A-Z), numbers (0-9),
   *   underscores (_), and hyphens (-). The maximum length is 40 characters.
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/interfaces/CallOptions.html} for the details.
   * @param {function(?Error, ?Object)} [callback]
   *   The function which will be called with the result of the API call.
   *
   *   The second parameter to the callback is a [gax.Operation]{@link https://googleapis.github.io/gax-nodejs/classes/Operation.html} object.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is a [gax.Operation]{@link https://googleapis.github.io/gax-nodejs/classes/Operation.html} object.
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const dataproc = require('@google-cloud/dataproc');
   *
   * const client = new dataproc.v1beta2.ClusterControllerClient({
   *   // optional auth parameters.
   * });
   *
   * const projectId = '';
   * const region = '';
   * const clusterName = '';
   * const cluster = {};
   * const updateMask = {};
   * const request = {
   *   projectId: projectId,
   *   region: region,
   *   clusterName: clusterName,
   *   cluster: cluster,
   *   updateMask: updateMask,
   * };
   *
   * // Handle the operation using the promise pattern.
   * client.updateCluster(request)
   *   .then(responses => {
   *     const [operation, initialApiResponse] = responses;
   *
   *     // Operation#promise starts polling for the completion of the LRO.
   *     return operation.promise();
   *   })
   *   .then(responses => {
   *     const result = responses[0];
   *     const metadata = responses[1];
   *     const finalApiResponse = responses[2];
   *   })
   *   .catch(err => {
   *     console.error(err);
   *   });
   *
   * const projectId = '';
   * const region = '';
   * const clusterName = '';
   * const cluster = {};
   * const updateMask = {};
   * const request = {
   *   projectId: projectId,
   *   region: region,
   *   clusterName: clusterName,
   *   cluster: cluster,
   *   updateMask: updateMask,
   * };
   *
   * // Handle the operation using the event emitter pattern.
   * client.updateCluster(request)
   *   .then(responses => {
   *     const [operation, initialApiResponse] = responses;
   *
   *     // Adding a listener for the "complete" event starts polling for the
   *     // completion of the operation.
   *     operation.on('complete', (result, metadata, finalApiResponse) => {
   *       // doSomethingWith(result);
   *     });
   *
   *     // Adding a listener for the "progress" event causes the callback to be
   *     // called on any change in metadata when the operation is polled.
   *     operation.on('progress', (metadata, apiResponse) => {
   *       // doSomethingWith(metadata)
   *     });
   *
   *     // Adding a listener for the "error" event handles any errors found during polling.
   *     operation.on('error', err => {
   *       // throw(err);
   *     });
   *   })
   *   .catch(err => {
   *     console.error(err);
   *   });
   *
   * const projectId = '';
   * const region = '';
   * const clusterName = '';
   * const cluster = {};
   * const updateMask = {};
   * const request = {
   *   projectId: projectId,
   *   region: region,
   *   clusterName: clusterName,
   *   cluster: cluster,
   *   updateMask: updateMask,
   * };
   *
   * // Handle the operation using the await pattern.
   * const [operation] = await client.updateCluster(request);
   *
   * const [response] = await operation.promise();
   */
  updateCluster(request, options, callback) {
    if (options instanceof Function && callback === undefined) {
      callback = options;
      options = {};
    }
    request = request || {};
    options = options || {};

    return this._innerApiCalls.updateCluster(request, options, callback);
  }

  /**
   * Deletes a cluster in a project. The returned
   * Operation.metadata will be
   * [ClusterOperationMetadata](https://cloud.google.com/dataproc/docs/reference/rpc/google.cloud.dataproc.v1beta2#clusteroperationmetadata).
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.projectId
   *   Required. The ID of the Google Cloud Platform project that the cluster
   *   belongs to.
   * @param {string} request.region
   *   Required. The Cloud Dataproc region in which to handle the request.
   * @param {string} request.clusterName
   *   Required. The cluster name.
   * @param {string} [request.clusterUuid]
   *   Optional. Specifying the `cluster_uuid` means the RPC should fail
   *   (with error NOT_FOUND) if cluster with specified UUID does not exist.
   * @param {string} [request.requestId]
   *   Optional. A unique id used to identify the request. If the server
   *   receives two DeleteClusterRequest requests  with the same
   *   id, then the second request will be ignored and the
   *   first google.longrunning.Operation created and stored in the
   *   backend is returned.
   *
   *   It is recommended to always set this value to a
   *   [UUID](https://en.wikipedia.org/wiki/Universally_unique_identifier).
   *
   *   The id must contain only letters (a-z, A-Z), numbers (0-9),
   *   underscores (_), and hyphens (-). The maximum length is 40 characters.
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/interfaces/CallOptions.html} for the details.
   * @param {function(?Error, ?Object)} [callback]
   *   The function which will be called with the result of the API call.
   *
   *   The second parameter to the callback is a [gax.Operation]{@link https://googleapis.github.io/gax-nodejs/classes/Operation.html} object.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is a [gax.Operation]{@link https://googleapis.github.io/gax-nodejs/classes/Operation.html} object.
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const dataproc = require('@google-cloud/dataproc');
   *
   * const client = new dataproc.v1beta2.ClusterControllerClient({
   *   // optional auth parameters.
   * });
   *
   * const projectId = '';
   * const region = '';
   * const clusterName = '';
   * const request = {
   *   projectId: projectId,
   *   region: region,
   *   clusterName: clusterName,
   * };
   *
   * // Handle the operation using the promise pattern.
   * client.deleteCluster(request)
   *   .then(responses => {
   *     const [operation, initialApiResponse] = responses;
   *
   *     // Operation#promise starts polling for the completion of the LRO.
   *     return operation.promise();
   *   })
   *   .then(responses => {
   *     const result = responses[0];
   *     const metadata = responses[1];
   *     const finalApiResponse = responses[2];
   *   })
   *   .catch(err => {
   *     console.error(err);
   *   });
   *
   * const projectId = '';
   * const region = '';
   * const clusterName = '';
   * const request = {
   *   projectId: projectId,
   *   region: region,
   *   clusterName: clusterName,
   * };
   *
   * // Handle the operation using the event emitter pattern.
   * client.deleteCluster(request)
   *   .then(responses => {
   *     const [operation, initialApiResponse] = responses;
   *
   *     // Adding a listener for the "complete" event starts polling for the
   *     // completion of the operation.
   *     operation.on('complete', (result, metadata, finalApiResponse) => {
   *       // doSomethingWith(result);
   *     });
   *
   *     // Adding a listener for the "progress" event causes the callback to be
   *     // called on any change in metadata when the operation is polled.
   *     operation.on('progress', (metadata, apiResponse) => {
   *       // doSomethingWith(metadata)
   *     });
   *
   *     // Adding a listener for the "error" event handles any errors found during polling.
   *     operation.on('error', err => {
   *       // throw(err);
   *     });
   *   })
   *   .catch(err => {
   *     console.error(err);
   *   });
   *
   * const projectId = '';
   * const region = '';
   * const clusterName = '';
   * const request = {
   *   projectId: projectId,
   *   region: region,
   *   clusterName: clusterName,
   * };
   *
   * // Handle the operation using the await pattern.
   * const [operation] = await client.deleteCluster(request);
   *
   * const [response] = await operation.promise();
   */
  deleteCluster(request, options, callback) {
    if (options instanceof Function && callback === undefined) {
      callback = options;
      options = {};
    }
    request = request || {};
    options = options || {};

    return this._innerApiCalls.deleteCluster(request, options, callback);
  }

  /**
   * Gets the resource representation for a cluster in a project.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.projectId
   *   Required. The ID of the Google Cloud Platform project that the cluster
   *   belongs to.
   * @param {string} request.region
   *   Required. The Cloud Dataproc region in which to handle the request.
   * @param {string} request.clusterName
   *   Required. The cluster name.
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/interfaces/CallOptions.html} for the details.
   * @param {function(?Error, ?Object)} [callback]
   *   The function which will be called with the result of the API call.
   *
   *   The second parameter to the callback is an object representing [Cluster]{@link google.cloud.dataproc.v1beta2.Cluster}.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is an object representing [Cluster]{@link google.cloud.dataproc.v1beta2.Cluster}.
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const dataproc = require('@google-cloud/dataproc');
   *
   * const client = new dataproc.v1beta2.ClusterControllerClient({
   *   // optional auth parameters.
   * });
   *
   * const projectId = '';
   * const region = '';
   * const clusterName = '';
   * const request = {
   *   projectId: projectId,
   *   region: region,
   *   clusterName: clusterName,
   * };
   * client.getCluster(request)
   *   .then(responses => {
   *     const response = responses[0];
   *     // doThingsWith(response)
   *   })
   *   .catch(err => {
   *     console.error(err);
   *   });
   */
  getCluster(request, options, callback) {
    if (options instanceof Function && callback === undefined) {
      callback = options;
      options = {};
    }
    request = request || {};
    options = options || {};

    return this._innerApiCalls.getCluster(request, options, callback);
  }

  /**
   * Lists all regions/{region}/clusters in a project.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.projectId
   *   Required. The ID of the Google Cloud Platform project that the cluster
   *   belongs to.
   * @param {string} request.region
   *   Required. The Cloud Dataproc region in which to handle the request.
   * @param {string} [request.filter]
   *   Optional.  A filter constraining the clusters to list. Filters are
   *   case-sensitive and have the following syntax:
   *
   *   field = value [AND [field = value]] ...
   *
   *   where **field** is one of `status.state`, `clusterName`, or `labels.[KEY]`,
   *   and `[KEY]` is a label key. **value** can be `*` to match all values.
   *   `status.state` can be one of the following: `ACTIVE`, `INACTIVE`,
   *   `CREATING`, `RUNNING`, `ERROR`, `DELETING`, or `UPDATING`. `ACTIVE`
   *   contains the `CREATING`, `UPDATING`, and `RUNNING` states. `INACTIVE`
   *   contains the `DELETING` and `ERROR` states.
   *   `clusterName` is the name of the cluster provided at creation time.
   *   Only the logical `AND` operator is supported; space-separated items are
   *   treated as having an implicit `AND` operator.
   *
   *   Example filter:
   *
   *   status.state = ACTIVE AND clusterName = mycluster
   *   AND labels.env = staging AND labels.starred = *
   * @param {number} [request.pageSize]
   *   The maximum number of resources contained in the underlying API
   *   response. If page streaming is performed per-resource, this
   *   parameter does not affect the return value. If page streaming is
   *   performed per-page, this determines the maximum number of
   *   resources in a page.
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/interfaces/CallOptions.html} for the details.
   * @param {function(?Error, ?Array, ?Object, ?Object)} [callback]
   *   The function which will be called with the result of the API call.
   *
   *   The second parameter to the callback is Array of [Cluster]{@link google.cloud.dataproc.v1beta2.Cluster}.
   *
   *   When autoPaginate: false is specified through options, it contains the result
   *   in a single response. If the response indicates the next page exists, the third
   *   parameter is set to be used for the next request object. The fourth parameter keeps
   *   the raw response object of an object representing [ListClustersResponse]{@link google.cloud.dataproc.v1beta2.ListClustersResponse}.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is Array of [Cluster]{@link google.cloud.dataproc.v1beta2.Cluster}.
   *
   *   When autoPaginate: false is specified through options, the array has three elements.
   *   The first element is Array of [Cluster]{@link google.cloud.dataproc.v1beta2.Cluster} in a single response.
   *   The second element is the next request object if the response
   *   indicates the next page exists, or null. The third element is
   *   an object representing [ListClustersResponse]{@link google.cloud.dataproc.v1beta2.ListClustersResponse}.
   *
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const dataproc = require('@google-cloud/dataproc');
   *
   * const client = new dataproc.v1beta2.ClusterControllerClient({
   *   // optional auth parameters.
   * });
   *
   * // Iterate over all elements.
   * const projectId = '';
   * const region = '';
   * const request = {
   *   projectId: projectId,
   *   region: region,
   * };
   *
   * client.listClusters(request)
   *   .then(responses => {
   *     const resources = responses[0];
   *     for (const resource of resources) {
   *       // doThingsWith(resource)
   *     }
   *   })
   *   .catch(err => {
   *     console.error(err);
   *   });
   *
   * // Or obtain the paged response.
   * const projectId = '';
   * const region = '';
   * const request = {
   *   projectId: projectId,
   *   region: region,
   * };
   *
   *
   * const options = {autoPaginate: false};
   * const callback = responses => {
   *   // The actual resources in a response.
   *   const resources = responses[0];
   *   // The next request if the response shows that there are more responses.
   *   const nextRequest = responses[1];
   *   // The actual response object, if necessary.
   *   // const rawResponse = responses[2];
   *   for (const resource of resources) {
   *     // doThingsWith(resource);
   *   }
   *   if (nextRequest) {
   *     // Fetch the next page.
   *     return client.listClusters(nextRequest, options).then(callback);
   *   }
   * }
   * client.listClusters(request, options)
   *   .then(callback)
   *   .catch(err => {
   *     console.error(err);
   *   });
   */
  listClusters(request, options, callback) {
    if (options instanceof Function && callback === undefined) {
      callback = options;
      options = {};
    }
    request = request || {};
    options = options || {};

    return this._innerApiCalls.listClusters(request, options, callback);
  }

  /**
   * Equivalent to {@link listClusters}, but returns a NodeJS Stream object.
   *
   * This fetches the paged responses for {@link listClusters} continuously
   * and invokes the callback registered for 'data' event for each element in the
   * responses.
   *
   * The returned object has 'end' method when no more elements are required.
   *
   * autoPaginate option will be ignored.
   *
   * @see {@link https://nodejs.org/api/stream.html}
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.projectId
   *   Required. The ID of the Google Cloud Platform project that the cluster
   *   belongs to.
   * @param {string} request.region
   *   Required. The Cloud Dataproc region in which to handle the request.
   * @param {string} [request.filter]
   *   Optional.  A filter constraining the clusters to list. Filters are
   *   case-sensitive and have the following syntax:
   *
   *   field = value [AND [field = value]] ...
   *
   *   where **field** is one of `status.state`, `clusterName`, or `labels.[KEY]`,
   *   and `[KEY]` is a label key. **value** can be `*` to match all values.
   *   `status.state` can be one of the following: `ACTIVE`, `INACTIVE`,
   *   `CREATING`, `RUNNING`, `ERROR`, `DELETING`, or `UPDATING`. `ACTIVE`
   *   contains the `CREATING`, `UPDATING`, and `RUNNING` states. `INACTIVE`
   *   contains the `DELETING` and `ERROR` states.
   *   `clusterName` is the name of the cluster provided at creation time.
   *   Only the logical `AND` operator is supported; space-separated items are
   *   treated as having an implicit `AND` operator.
   *
   *   Example filter:
   *
   *   status.state = ACTIVE AND clusterName = mycluster
   *   AND labels.env = staging AND labels.starred = *
   * @param {number} [request.pageSize]
   *   The maximum number of resources contained in the underlying API
   *   response. If page streaming is performed per-resource, this
   *   parameter does not affect the return value. If page streaming is
   *   performed per-page, this determines the maximum number of
   *   resources in a page.
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/interfaces/CallOptions.html} for the details.
   * @returns {Stream}
   *   An object stream which emits an object representing [Cluster]{@link google.cloud.dataproc.v1beta2.Cluster} on 'data' event.
   *
   * @example
   *
   * const dataproc = require('@google-cloud/dataproc');
   *
   * const client = new dataproc.v1beta2.ClusterControllerClient({
   *   // optional auth parameters.
   * });
   *
   * const projectId = '';
   * const region = '';
   * const request = {
   *   projectId: projectId,
   *   region: region,
   * };
   * client.listClustersStream(request)
   *   .on('data', element => {
   *     // doThingsWith(element)
   *   }).on('error', err => {
   *     console.log(err);
   *   });
   */
  listClustersStream(request, options) {
    options = options || {};

    return this._descriptors.page.listClusters.createStream(
      this._innerApiCalls.listClusters,
      request,
      options
    );
  }

  /**
   * Gets cluster diagnostic information. The returned
   * Operation.metadata will be
   * [ClusterOperationMetadata](https://cloud.google.com/dataproc/docs/reference/rpc/google.cloud.dataproc.v1beta2#clusteroperationmetadata).
   * After the operation completes,
   * Operation.response
   * contains
   * [Empty](https://cloud.google.comgoogle.protobuf.Empty).
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.projectId
   *   Required. The ID of the Google Cloud Platform project that the cluster
   *   belongs to.
   * @param {string} request.region
   *   Required. The Cloud Dataproc region in which to handle the request.
   * @param {string} request.clusterName
   *   Required. The cluster name.
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/interfaces/CallOptions.html} for the details.
   * @param {function(?Error, ?Object)} [callback]
   *   The function which will be called with the result of the API call.
   *
   *   The second parameter to the callback is a [gax.Operation]{@link https://googleapis.github.io/gax-nodejs/classes/Operation.html} object.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is a [gax.Operation]{@link https://googleapis.github.io/gax-nodejs/classes/Operation.html} object.
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const dataproc = require('@google-cloud/dataproc');
   *
   * const client = new dataproc.v1beta2.ClusterControllerClient({
   *   // optional auth parameters.
   * });
   *
   * const projectId = '';
   * const region = '';
   * const clusterName = '';
   * const request = {
   *   projectId: projectId,
   *   region: region,
   *   clusterName: clusterName,
   * };
   *
   * // Handle the operation using the promise pattern.
   * client.diagnoseCluster(request)
   *   .then(responses => {
   *     const [operation, initialApiResponse] = responses;
   *
   *     // Operation#promise starts polling for the completion of the LRO.
   *     return operation.promise();
   *   })
   *   .then(responses => {
   *     const result = responses[0];
   *     const metadata = responses[1];
   *     const finalApiResponse = responses[2];
   *   })
   *   .catch(err => {
   *     console.error(err);
   *   });
   *
   * const projectId = '';
   * const region = '';
   * const clusterName = '';
   * const request = {
   *   projectId: projectId,
   *   region: region,
   *   clusterName: clusterName,
   * };
   *
   * // Handle the operation using the event emitter pattern.
   * client.diagnoseCluster(request)
   *   .then(responses => {
   *     const [operation, initialApiResponse] = responses;
   *
   *     // Adding a listener for the "complete" event starts polling for the
   *     // completion of the operation.
   *     operation.on('complete', (result, metadata, finalApiResponse) => {
   *       // doSomethingWith(result);
   *     });
   *
   *     // Adding a listener for the "progress" event causes the callback to be
   *     // called on any change in metadata when the operation is polled.
   *     operation.on('progress', (metadata, apiResponse) => {
   *       // doSomethingWith(metadata)
   *     });
   *
   *     // Adding a listener for the "error" event handles any errors found during polling.
   *     operation.on('error', err => {
   *       // throw(err);
   *     });
   *   })
   *   .catch(err => {
   *     console.error(err);
   *   });
   *
   * const projectId = '';
   * const region = '';
   * const clusterName = '';
   * const request = {
   *   projectId: projectId,
   *   region: region,
   *   clusterName: clusterName,
   * };
   *
   * // Handle the operation using the await pattern.
   * const [operation] = await client.diagnoseCluster(request);
   *
   * const [response] = await operation.promise();
   */
  diagnoseCluster(request, options, callback) {
    if (options instanceof Function && callback === undefined) {
      callback = options;
      options = {};
    }
    request = request || {};
    options = options || {};

    return this._innerApiCalls.diagnoseCluster(request, options, callback);
  }
}

module.exports = ClusterControllerClient;
