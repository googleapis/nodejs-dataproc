// Copyright 2019 Google LLC
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

import * as gax from 'google-gax';
import {APICallback, Callback, CallOptions, Descriptors, ClientOptions, PaginationCallback, PaginationResponse} from 'google-gax';
import * as path from 'path';

import { Transform } from 'stream';
import * as protosTypes from '../../protos/protos';
import * as gapicConfig from './autoscaling_policy_service_client_config.json';

const version = require('../../../package.json').version;

/**
 *  The API interface for managing autoscaling policies in the
 *  Dataproc API.
 * @class
 * @memberof v1
 */
export class AutoscalingPolicyServiceClient {
  private _descriptors: Descriptors = {page: {}, stream: {}, longrunning: {}};
  private _innerApiCalls: {[name: string]: Function};
  private _pathTemplates: {[name: string]: gax.PathTemplate};
  private _terminated = false;
  auth: gax.GoogleAuth;
  autoscalingPolicyServiceStub: Promise<{[name: string]: Function}>;

  /**
   * Construct an instance of AutoscalingPolicyServiceClient.
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

  constructor(opts?: ClientOptions) {
    // Ensure that options include the service address and port.
    const staticMembers = this.constructor as typeof AutoscalingPolicyServiceClient;
    const servicePath = opts && opts.servicePath ?
        opts.servicePath :
        ((opts && opts.apiEndpoint) ? opts.apiEndpoint :
                                      staticMembers.servicePath);
    const port = opts && opts.port ? opts.port : staticMembers.port;

    if (!opts) {
      opts = {servicePath, port};
    }
    opts.servicePath = opts.servicePath || servicePath;
    opts.port = opts.port || port;
    opts.clientConfig = opts.clientConfig || {};

    const isBrowser = (typeof window !== 'undefined');
    if (isBrowser){
      opts.fallback = true;
    }
    // If we are in browser, we are already using fallback because of the
    // "browser" field in package.json.
    // But if we were explicitly requested to use fallback, let's do it now.
    const gaxModule = !isBrowser && opts.fallback ? gax.fallback : gax;

    // Create a `gaxGrpc` object, with any grpc-specific options
    // sent to the client.
    opts.scopes = (this.constructor as typeof AutoscalingPolicyServiceClient).scopes;
    const gaxGrpc = new gaxModule.GrpcClient(opts);

    // Save the auth object to the client, for use by other methods.
    this.auth = (gaxGrpc.auth as gax.GoogleAuth);

    // Determine the client header string.
    const clientHeader = [
      `gax/${gaxModule.version}`,
      `gapic/${version}`,
    ];
    if (typeof process !== 'undefined' && 'versions' in process) {
      clientHeader.push(`gl-node/${process.versions.node}`);
    } else {
      clientHeader.push(`gl-web/${gaxModule.version}`);
    }
    if (!opts.fallback) {
      clientHeader.push(`grpc/${gaxGrpc.grpcVersion}`);
    }
    if (opts.libName && opts.libVersion) {
      clientHeader.push(`${opts.libName}/${opts.libVersion}`);
    }
    // Load the applicable protos.
    // For Node.js, pass the path to JSON proto file.
    // For browsers, pass the JSON content.

    const nodejsProtoPath = path.join(__dirname, '..', '..', 'protos', 'protos.json');
    const protos = gaxGrpc.loadProto(
      opts.fallback ?
        require("../../protos/protos.json") :
        nodejsProtoPath
    );

    // This API contains "path templates"; forward-slash-separated
    // identifiers to uniquely identify resources within the API.
    // Create useful helper objects for these.
    this._pathTemplates = {
      projectLocationAutoscalingPolicyPathTemplate: new gaxModule.PathTemplate(
        'projects/{project}/locations/{location}/autoscalingPolicies/{autoscaling_policy}'
      ),
      projectLocationWorkflowTemplatePathTemplate: new gaxModule.PathTemplate(
        'projects/{project}/locations/{location}/workflowTemplates/{workflow_template}'
      ),
      projectRegionAutoscalingPolicyPathTemplate: new gaxModule.PathTemplate(
        'projects/{project}/regions/{region}/autoscalingPolicies/{autoscaling_policy}'
      ),
      projectRegionWorkflowTemplatePathTemplate: new gaxModule.PathTemplate(
        'projects/{project}/regions/{region}/workflowTemplates/{workflow_template}'
      ),
    };

    // Some of the methods on this service return "paged" results,
    // (e.g. 50 results at a time, with tokens to get subsequent
    // pages). Denote the keys used for pagination and results.
    this._descriptors.page = {
      listAutoscalingPolicies:
          new gaxModule.PageDescriptor('pageToken', 'nextPageToken', 'policies')
    };

    // Put together the default options sent with requests.
    const defaults = gaxGrpc.constructSettings(
        'google.cloud.dataproc.v1.AutoscalingPolicyService', gapicConfig as gax.ClientConfig,
        opts.clientConfig || {}, {'x-goog-api-client': clientHeader.join(' ')});

    // Set up a dictionary of "inner API calls"; the core implementation
    // of calling the API is handled in `google-gax`, with this code
    // merely providing the destination and request information.
    this._innerApiCalls = {};

    // Put together the "service stub" for
    // google.cloud.dataproc.v1.AutoscalingPolicyService.
    this.autoscalingPolicyServiceStub = gaxGrpc.createStub(
        opts.fallback ?
          (protos as protobuf.Root).lookupService('google.cloud.dataproc.v1.AutoscalingPolicyService') :
          // tslint:disable-next-line no-any
          (protos as any).google.cloud.dataproc.v1.AutoscalingPolicyService,
        opts) as Promise<{[method: string]: Function}>;

    // Iterate over each of the methods that the service provides
    // and create an API call method for each.
    const autoscalingPolicyServiceStubMethods =
        ['createAutoscalingPolicy', 'updateAutoscalingPolicy', 'getAutoscalingPolicy', 'listAutoscalingPolicies', 'deleteAutoscalingPolicy'];

    for (const methodName of autoscalingPolicyServiceStubMethods) {
      const innerCallPromise = this.autoscalingPolicyServiceStub.then(
        stub => (...args: Array<{}>) => {
          if (this._terminated) {
            return Promise.reject('The client has already been closed.');
          }
          return stub[methodName].apply(stub, args);
        },
        (err: Error|null|undefined) => () => {
          throw err;
        });

      const apiCall = gaxModule.createApiCall(
        innerCallPromise,
        defaults[methodName],
        this._descriptors.page[methodName] ||
            this._descriptors.stream[methodName] ||
            this._descriptors.longrunning[methodName]
      );

      this._innerApiCalls[methodName] = (
        argument: {},
        callOptions?: CallOptions,
        callback?: APICallback
      ) => {
        return apiCall(argument, callOptions, callback);
      };
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
    return [
      'https://www.googleapis.com/auth/cloud-platform'
    ];
  }

  getProjectId(): Promise<string>;
  getProjectId(callback: Callback<string, undefined, undefined>): void;
  /**
   * Return the project ID used by this class.
   * @param {function(Error, string)} callback - the callback to
   *   be called with the current project Id.
   */
  getProjectId(callback?: Callback<string, undefined, undefined>):
      Promise<string>|void {
    if (callback) {
      this.auth.getProjectId(callback);
      return;
    }
    return this.auth.getProjectId();
  }

  // -------------------
  // -- Service calls --
  // -------------------
  createAutoscalingPolicy(
      request: protosTypes.google.cloud.dataproc.v1.ICreateAutoscalingPolicyRequest,
      options?: gax.CallOptions):
      Promise<[
        protosTypes.google.cloud.dataproc.v1.IAutoscalingPolicy,
        protosTypes.google.cloud.dataproc.v1.ICreateAutoscalingPolicyRequest|undefined, {}|undefined
      ]>;
  createAutoscalingPolicy(
      request: protosTypes.google.cloud.dataproc.v1.ICreateAutoscalingPolicyRequest,
      options: gax.CallOptions,
      callback: Callback<
          protosTypes.google.cloud.dataproc.v1.IAutoscalingPolicy,
          protosTypes.google.cloud.dataproc.v1.ICreateAutoscalingPolicyRequest|undefined,
          {}|undefined>): void;
/**
 * Creates new autoscaling policy.
 *
 * @param {Object} request
 *   The request object that will be sent.
 * @param {string} request.parent
 *   Required. The "resource name" of the region or location, as described
 *   in https://cloud.google.com/apis/design/resource_names.
 *
 *   * For `projects.regions.autoscalingPolicies.create`, the resource name
 *     of the region has the following format:
 *     `projects/{project_id}/regions/{region}`
 *
 *   * For `projects.locations.autoscalingPolicies.create`, the resource name
 *     of the location has the following format:
 *     `projects/{project_id}/locations/{location}`
 * @param {google.cloud.dataproc.v1.AutoscalingPolicy} request.policy
 *   The autoscaling policy to create.
 * @param {object} [options]
 *   Call options. See {@link https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html|CallOptions} for more details.
 * @returns {Promise} - The promise which resolves to an array.
 *   The first element of the array is an object representing [AutoscalingPolicy]{@link google.cloud.dataproc.v1.AutoscalingPolicy}.
 *   The promise has a method named "cancel" which cancels the ongoing API call.
 */
  createAutoscalingPolicy(
      request: protosTypes.google.cloud.dataproc.v1.ICreateAutoscalingPolicyRequest,
      optionsOrCallback?: gax.CallOptions|Callback<
          protosTypes.google.cloud.dataproc.v1.IAutoscalingPolicy,
          protosTypes.google.cloud.dataproc.v1.ICreateAutoscalingPolicyRequest|undefined, {}|undefined>,
      callback?: Callback<
          protosTypes.google.cloud.dataproc.v1.IAutoscalingPolicy,
          protosTypes.google.cloud.dataproc.v1.ICreateAutoscalingPolicyRequest|undefined,
          {}|undefined>):
      Promise<[
        protosTypes.google.cloud.dataproc.v1.IAutoscalingPolicy,
        protosTypes.google.cloud.dataproc.v1.ICreateAutoscalingPolicyRequest|undefined, {}|undefined
      ]>|void {
    request = request || {};
    let options: gax.CallOptions;
    if (typeof optionsOrCallback === 'function' && callback === undefined) {
      callback = optionsOrCallback;
      options = {};
    }
    else {
      options = optionsOrCallback as gax.CallOptions;
    }
    options = options || {};
    options.otherArgs = options.otherArgs || {};
    options.otherArgs.headers = options.otherArgs.headers || {};
    options.otherArgs.headers[
      'x-goog-request-params'
    ] = gax.routingHeader.fromParams({
      'parent': request.parent || '',
    });
    return this._innerApiCalls.createAutoscalingPolicy(request, options, callback);
  }
  updateAutoscalingPolicy(
      request: protosTypes.google.cloud.dataproc.v1.IUpdateAutoscalingPolicyRequest,
      options?: gax.CallOptions):
      Promise<[
        protosTypes.google.cloud.dataproc.v1.IAutoscalingPolicy,
        protosTypes.google.cloud.dataproc.v1.IUpdateAutoscalingPolicyRequest|undefined, {}|undefined
      ]>;
  updateAutoscalingPolicy(
      request: protosTypes.google.cloud.dataproc.v1.IUpdateAutoscalingPolicyRequest,
      options: gax.CallOptions,
      callback: Callback<
          protosTypes.google.cloud.dataproc.v1.IAutoscalingPolicy,
          protosTypes.google.cloud.dataproc.v1.IUpdateAutoscalingPolicyRequest|undefined,
          {}|undefined>): void;
/**
 * Updates (replaces) autoscaling policy.
 *
 * Disabled check for update_mask, because all updates will be full
 * replacements.
 *
 * @param {Object} request
 *   The request object that will be sent.
 * @param {google.cloud.dataproc.v1.AutoscalingPolicy} request.policy
 *   Required. The updated autoscaling policy.
 * @param {object} [options]
 *   Call options. See {@link https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html|CallOptions} for more details.
 * @returns {Promise} - The promise which resolves to an array.
 *   The first element of the array is an object representing [AutoscalingPolicy]{@link google.cloud.dataproc.v1.AutoscalingPolicy}.
 *   The promise has a method named "cancel" which cancels the ongoing API call.
 */
  updateAutoscalingPolicy(
      request: protosTypes.google.cloud.dataproc.v1.IUpdateAutoscalingPolicyRequest,
      optionsOrCallback?: gax.CallOptions|Callback<
          protosTypes.google.cloud.dataproc.v1.IAutoscalingPolicy,
          protosTypes.google.cloud.dataproc.v1.IUpdateAutoscalingPolicyRequest|undefined, {}|undefined>,
      callback?: Callback<
          protosTypes.google.cloud.dataproc.v1.IAutoscalingPolicy,
          protosTypes.google.cloud.dataproc.v1.IUpdateAutoscalingPolicyRequest|undefined,
          {}|undefined>):
      Promise<[
        protosTypes.google.cloud.dataproc.v1.IAutoscalingPolicy,
        protosTypes.google.cloud.dataproc.v1.IUpdateAutoscalingPolicyRequest|undefined, {}|undefined
      ]>|void {
    request = request || {};
    let options: gax.CallOptions;
    if (typeof optionsOrCallback === 'function' && callback === undefined) {
      callback = optionsOrCallback;
      options = {};
    }
    else {
      options = optionsOrCallback as gax.CallOptions;
    }
    options = options || {};
    options.otherArgs = options.otherArgs || {};
    options.otherArgs.headers = options.otherArgs.headers || {};
    options.otherArgs.headers[
      'x-goog-request-params'
    ] = gax.routingHeader.fromParams({
      'policy.name': request.policy!.name || '',
    });
    return this._innerApiCalls.updateAutoscalingPolicy(request, options, callback);
  }
  getAutoscalingPolicy(
      request: protosTypes.google.cloud.dataproc.v1.IGetAutoscalingPolicyRequest,
      options?: gax.CallOptions):
      Promise<[
        protosTypes.google.cloud.dataproc.v1.IAutoscalingPolicy,
        protosTypes.google.cloud.dataproc.v1.IGetAutoscalingPolicyRequest|undefined, {}|undefined
      ]>;
  getAutoscalingPolicy(
      request: protosTypes.google.cloud.dataproc.v1.IGetAutoscalingPolicyRequest,
      options: gax.CallOptions,
      callback: Callback<
          protosTypes.google.cloud.dataproc.v1.IAutoscalingPolicy,
          protosTypes.google.cloud.dataproc.v1.IGetAutoscalingPolicyRequest|undefined,
          {}|undefined>): void;
/**
 * Retrieves autoscaling policy.
 *
 * @param {Object} request
 *   The request object that will be sent.
 * @param {string} request.name
 *   Required. The "resource name" of the autoscaling policy, as described
 *   in https://cloud.google.com/apis/design/resource_names.
 *
 *   * For `projects.regions.autoscalingPolicies.get`, the resource name
 *     of the policy has the following format:
 *     `projects/{project_id}/regions/{region}/autoscalingPolicies/{policy_id}`
 *
 *   * For `projects.locations.autoscalingPolicies.get`, the resource name
 *     of the policy has the following format:
 *     `projects/{project_id}/locations/{location}/autoscalingPolicies/{policy_id}`
 * @param {object} [options]
 *   Call options. See {@link https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html|CallOptions} for more details.
 * @returns {Promise} - The promise which resolves to an array.
 *   The first element of the array is an object representing [AutoscalingPolicy]{@link google.cloud.dataproc.v1.AutoscalingPolicy}.
 *   The promise has a method named "cancel" which cancels the ongoing API call.
 */
  getAutoscalingPolicy(
      request: protosTypes.google.cloud.dataproc.v1.IGetAutoscalingPolicyRequest,
      optionsOrCallback?: gax.CallOptions|Callback<
          protosTypes.google.cloud.dataproc.v1.IAutoscalingPolicy,
          protosTypes.google.cloud.dataproc.v1.IGetAutoscalingPolicyRequest|undefined, {}|undefined>,
      callback?: Callback<
          protosTypes.google.cloud.dataproc.v1.IAutoscalingPolicy,
          protosTypes.google.cloud.dataproc.v1.IGetAutoscalingPolicyRequest|undefined,
          {}|undefined>):
      Promise<[
        protosTypes.google.cloud.dataproc.v1.IAutoscalingPolicy,
        protosTypes.google.cloud.dataproc.v1.IGetAutoscalingPolicyRequest|undefined, {}|undefined
      ]>|void {
    request = request || {};
    let options: gax.CallOptions;
    if (typeof optionsOrCallback === 'function' && callback === undefined) {
      callback = optionsOrCallback;
      options = {};
    }
    else {
      options = optionsOrCallback as gax.CallOptions;
    }
    options = options || {};
    options.otherArgs = options.otherArgs || {};
    options.otherArgs.headers = options.otherArgs.headers || {};
    options.otherArgs.headers[
      'x-goog-request-params'
    ] = gax.routingHeader.fromParams({
      'name': request.name || '',
    });
    return this._innerApiCalls.getAutoscalingPolicy(request, options, callback);
  }
  deleteAutoscalingPolicy(
      request: protosTypes.google.cloud.dataproc.v1.IDeleteAutoscalingPolicyRequest,
      options?: gax.CallOptions):
      Promise<[
        protosTypes.google.protobuf.IEmpty,
        protosTypes.google.cloud.dataproc.v1.IDeleteAutoscalingPolicyRequest|undefined, {}|undefined
      ]>;
  deleteAutoscalingPolicy(
      request: protosTypes.google.cloud.dataproc.v1.IDeleteAutoscalingPolicyRequest,
      options: gax.CallOptions,
      callback: Callback<
          protosTypes.google.protobuf.IEmpty,
          protosTypes.google.cloud.dataproc.v1.IDeleteAutoscalingPolicyRequest|undefined,
          {}|undefined>): void;
/**
 * Deletes an autoscaling policy. It is an error to delete an autoscaling
 * policy that is in use by one or more clusters.
 *
 * @param {Object} request
 *   The request object that will be sent.
 * @param {string} request.name
 *   Required. The "resource name" of the autoscaling policy, as described
 *   in https://cloud.google.com/apis/design/resource_names.
 *
 *   * For `projects.regions.autoscalingPolicies.delete`, the resource name
 *     of the policy has the following format:
 *     `projects/{project_id}/regions/{region}/autoscalingPolicies/{policy_id}`
 *
 *   * For `projects.locations.autoscalingPolicies.delete`, the resource name
 *     of the policy has the following format:
 *     `projects/{project_id}/locations/{location}/autoscalingPolicies/{policy_id}`
 * @param {object} [options]
 *   Call options. See {@link https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html|CallOptions} for more details.
 * @returns {Promise} - The promise which resolves to an array.
 *   The first element of the array is an object representing [Empty]{@link google.protobuf.Empty}.
 *   The promise has a method named "cancel" which cancels the ongoing API call.
 */
  deleteAutoscalingPolicy(
      request: protosTypes.google.cloud.dataproc.v1.IDeleteAutoscalingPolicyRequest,
      optionsOrCallback?: gax.CallOptions|Callback<
          protosTypes.google.protobuf.IEmpty,
          protosTypes.google.cloud.dataproc.v1.IDeleteAutoscalingPolicyRequest|undefined, {}|undefined>,
      callback?: Callback<
          protosTypes.google.protobuf.IEmpty,
          protosTypes.google.cloud.dataproc.v1.IDeleteAutoscalingPolicyRequest|undefined,
          {}|undefined>):
      Promise<[
        protosTypes.google.protobuf.IEmpty,
        protosTypes.google.cloud.dataproc.v1.IDeleteAutoscalingPolicyRequest|undefined, {}|undefined
      ]>|void {
    request = request || {};
    let options: gax.CallOptions;
    if (typeof optionsOrCallback === 'function' && callback === undefined) {
      callback = optionsOrCallback;
      options = {};
    }
    else {
      options = optionsOrCallback as gax.CallOptions;
    }
    options = options || {};
    options.otherArgs = options.otherArgs || {};
    options.otherArgs.headers = options.otherArgs.headers || {};
    options.otherArgs.headers[
      'x-goog-request-params'
    ] = gax.routingHeader.fromParams({
      'name': request.name || '',
    });
    return this._innerApiCalls.deleteAutoscalingPolicy(request, options, callback);
  }

  listAutoscalingPolicies(
      request: protosTypes.google.cloud.dataproc.v1.IListAutoscalingPoliciesRequest,
      options?: gax.CallOptions):
      Promise<[
        protosTypes.google.cloud.dataproc.v1.IAutoscalingPolicy[],
        protosTypes.google.cloud.dataproc.v1.IListAutoscalingPoliciesRequest|null,
        protosTypes.google.cloud.dataproc.v1.IListAutoscalingPoliciesResponse
      ]>;
  listAutoscalingPolicies(
      request: protosTypes.google.cloud.dataproc.v1.IListAutoscalingPoliciesRequest,
      options: gax.CallOptions,
      callback: Callback<
          protosTypes.google.cloud.dataproc.v1.IAutoscalingPolicy[],
          protosTypes.google.cloud.dataproc.v1.IListAutoscalingPoliciesRequest|null,
          protosTypes.google.cloud.dataproc.v1.IListAutoscalingPoliciesResponse>): void;
/**
 * Lists autoscaling policies in the project.
 *
 * @param {Object} request
 *   The request object that will be sent.
 * @param {string} request.parent
 *   Required. The "resource name" of the region or location, as described
 *   in https://cloud.google.com/apis/design/resource_names.
 *
 *   * For `projects.regions.autoscalingPolicies.list`, the resource name
 *     of the region has the following format:
 *     `projects/{project_id}/regions/{region}`
 *
 *   * For `projects.locations.autoscalingPolicies.list`, the resource name
 *     of the location has the following format:
 *     `projects/{project_id}/locations/{location}`
 * @param {number} [request.pageSize]
 *   Optional. The maximum number of results to return in each response.
 *   Must be less than or equal to 1000. Defaults to 100.
 * @param {string} [request.pageToken]
 *   Optional. The page token, returned by a previous call, to request the
 *   next page of results.
 * @param {object} [options]
 *   Call options. See {@link https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html|CallOptions} for more details.
 * @returns {Promise} - The promise which resolves to an array.
 *   The first element of the array is Array of [AutoscalingPolicy]{@link google.cloud.dataproc.v1.AutoscalingPolicy}.
 *   The client library support auto-pagination by default: it will call the API as many
 *   times as needed and will merge results from all the pages into this array.
 *
 *   When autoPaginate: false is specified through options, the array has three elements.
 *   The first element is Array of [AutoscalingPolicy]{@link google.cloud.dataproc.v1.AutoscalingPolicy} that corresponds to
 *   the one page received from the API server.
 *   If the second element is not null it contains the request object of type [ListAutoscalingPoliciesRequest]{@link google.cloud.dataproc.v1.ListAutoscalingPoliciesRequest}
 *   that can be used to obtain the next page of the results.
 *   If it is null, the next page does not exist.
 *   The third element contains the raw response received from the API server. Its type is
 *   [ListAutoscalingPoliciesResponse]{@link google.cloud.dataproc.v1.ListAutoscalingPoliciesResponse}.
 *
 *   The promise has a method named "cancel" which cancels the ongoing API call.
 */
  listAutoscalingPolicies(
      request: protosTypes.google.cloud.dataproc.v1.IListAutoscalingPoliciesRequest,
      optionsOrCallback?: gax.CallOptions|Callback<
          protosTypes.google.cloud.dataproc.v1.IAutoscalingPolicy[],
          protosTypes.google.cloud.dataproc.v1.IListAutoscalingPoliciesRequest|null,
          protosTypes.google.cloud.dataproc.v1.IListAutoscalingPoliciesResponse>,
      callback?: Callback<
          protosTypes.google.cloud.dataproc.v1.IAutoscalingPolicy[],
          protosTypes.google.cloud.dataproc.v1.IListAutoscalingPoliciesRequest|null,
          protosTypes.google.cloud.dataproc.v1.IListAutoscalingPoliciesResponse>):
      Promise<[
        protosTypes.google.cloud.dataproc.v1.IAutoscalingPolicy[],
        protosTypes.google.cloud.dataproc.v1.IListAutoscalingPoliciesRequest|null,
        protosTypes.google.cloud.dataproc.v1.IListAutoscalingPoliciesResponse
      ]>|void {
    request = request || {};
    let options: gax.CallOptions;
    if (typeof optionsOrCallback === 'function' && callback === undefined) {
      callback = optionsOrCallback;
      options = {};
    }
    else {
      options = optionsOrCallback as gax.CallOptions;
    }
    options = options || {};
    options.otherArgs = options.otherArgs || {};
    options.otherArgs.headers = options.otherArgs.headers || {};
    options.otherArgs.headers[
      'x-goog-request-params'
    ] = gax.routingHeader.fromParams({
      'parent': request.parent || '',
    });
    return this._innerApiCalls.listAutoscalingPolicies(request, options, callback);
  }

/**
 * Equivalent to {@link listAutoscalingPolicies}, but returns a NodeJS Stream object.
 *
 * This fetches the paged responses for {@link listAutoscalingPolicies} continuously
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
 * @param {string} request.parent
 *   Required. The "resource name" of the region or location, as described
 *   in https://cloud.google.com/apis/design/resource_names.
 *
 *   * For `projects.regions.autoscalingPolicies.list`, the resource name
 *     of the region has the following format:
 *     `projects/{project_id}/regions/{region}`
 *
 *   * For `projects.locations.autoscalingPolicies.list`, the resource name
 *     of the location has the following format:
 *     `projects/{project_id}/locations/{location}`
 * @param {number} [request.pageSize]
 *   Optional. The maximum number of results to return in each response.
 *   Must be less than or equal to 1000. Defaults to 100.
 * @param {string} [request.pageToken]
 *   Optional. The page token, returned by a previous call, to request the
 *   next page of results.
 * @param {object} [options]
 *   Call options. See {@link https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html|CallOptions} for more details.
 * @returns {Stream}
 *   An object stream which emits an object representing [AutoscalingPolicy]{@link google.cloud.dataproc.v1.AutoscalingPolicy} on 'data' event.
 */
  listAutoscalingPoliciesStream(
      request?: protosTypes.google.cloud.dataproc.v1.IListAutoscalingPoliciesRequest,
      options?: gax.CallOptions):
    Transform{
    request = request || {};
    options = options || {};
    options.otherArgs = options.otherArgs || {};
    options.otherArgs.headers = options.otherArgs.headers || {};
    options.otherArgs.headers[
      'x-goog-request-params'
    ] = gax.routingHeader.fromParams({
      'parent': request.parent || '',
    });
    const callSettings = new gax.CallSettings(options);
    return this._descriptors.page.listAutoscalingPolicies.createStream(
      this._innerApiCalls.listAutoscalingPolicies as gax.GaxCall,
      request,
      callSettings
    );
  }
  // --------------------
  // -- Path templates --
  // --------------------

  /**
   * Return a fully-qualified projectLocationAutoscalingPolicy resource name string.
   *
   * @param {string} project
   * @param {string} location
   * @param {string} autoscaling_policy
   * @returns {string} Resource name string.
   */
  projectLocationAutoscalingPolicyPath(project:string,location:string,autoscalingPolicy:string) {
    return this._pathTemplates.projectLocationAutoscalingPolicyPathTemplate.render({
      project: project,
      location: location,
      autoscaling_policy: autoscalingPolicy,
    });
  }

  /**
   * Parse the project from ProjectLocationAutoscalingPolicy resource.
   *
   * @param {string} projectLocationAutoscalingPolicyName
   *   A fully-qualified path representing project_location_autoscaling_policy resource.
   * @returns {string} A string representing the project.
   */
  matchProjectFromProjectLocationAutoscalingPolicyName(projectLocationAutoscalingPolicyName: string) {
    return this._pathTemplates.projectLocationAutoscalingPolicyPathTemplate.match(projectLocationAutoscalingPolicyName).project;
  }

  /**
   * Parse the location from ProjectLocationAutoscalingPolicy resource.
   *
   * @param {string} projectLocationAutoscalingPolicyName
   *   A fully-qualified path representing project_location_autoscaling_policy resource.
   * @returns {string} A string representing the location.
   */
  matchLocationFromProjectLocationAutoscalingPolicyName(projectLocationAutoscalingPolicyName: string) {
    return this._pathTemplates.projectLocationAutoscalingPolicyPathTemplate.match(projectLocationAutoscalingPolicyName).location;
  }

  /**
   * Parse the autoscaling_policy from ProjectLocationAutoscalingPolicy resource.
   *
   * @param {string} projectLocationAutoscalingPolicyName
   *   A fully-qualified path representing project_location_autoscaling_policy resource.
   * @returns {string} A string representing the autoscaling_policy.
   */
  matchAutoscalingPolicyFromProjectLocationAutoscalingPolicyName(projectLocationAutoscalingPolicyName: string) {
    return this._pathTemplates.projectLocationAutoscalingPolicyPathTemplate.match(projectLocationAutoscalingPolicyName).autoscaling_policy;
  }

  /**
   * Return a fully-qualified projectLocationWorkflowTemplate resource name string.
   *
   * @param {string} project
   * @param {string} location
   * @param {string} workflow_template
   * @returns {string} Resource name string.
   */
  projectLocationWorkflowTemplatePath(project:string,location:string,workflowTemplate:string) {
    return this._pathTemplates.projectLocationWorkflowTemplatePathTemplate.render({
      project: project,
      location: location,
      workflow_template: workflowTemplate,
    });
  }

  /**
   * Parse the project from ProjectLocationWorkflowTemplate resource.
   *
   * @param {string} projectLocationWorkflowTemplateName
   *   A fully-qualified path representing project_location_workflow_template resource.
   * @returns {string} A string representing the project.
   */
  matchProjectFromProjectLocationWorkflowTemplateName(projectLocationWorkflowTemplateName: string) {
    return this._pathTemplates.projectLocationWorkflowTemplatePathTemplate.match(projectLocationWorkflowTemplateName).project;
  }

  /**
   * Parse the location from ProjectLocationWorkflowTemplate resource.
   *
   * @param {string} projectLocationWorkflowTemplateName
   *   A fully-qualified path representing project_location_workflow_template resource.
   * @returns {string} A string representing the location.
   */
  matchLocationFromProjectLocationWorkflowTemplateName(projectLocationWorkflowTemplateName: string) {
    return this._pathTemplates.projectLocationWorkflowTemplatePathTemplate.match(projectLocationWorkflowTemplateName).location;
  }

  /**
   * Parse the workflow_template from ProjectLocationWorkflowTemplate resource.
   *
   * @param {string} projectLocationWorkflowTemplateName
   *   A fully-qualified path representing project_location_workflow_template resource.
   * @returns {string} A string representing the workflow_template.
   */
  matchWorkflowTemplateFromProjectLocationWorkflowTemplateName(projectLocationWorkflowTemplateName: string) {
    return this._pathTemplates.projectLocationWorkflowTemplatePathTemplate.match(projectLocationWorkflowTemplateName).workflow_template;
  }

  /**
   * Return a fully-qualified projectRegionAutoscalingPolicy resource name string.
   *
   * @param {string} project
   * @param {string} region
   * @param {string} autoscaling_policy
   * @returns {string} Resource name string.
   */
  projectRegionAutoscalingPolicyPath(project:string,region:string,autoscalingPolicy:string) {
    return this._pathTemplates.projectRegionAutoscalingPolicyPathTemplate.render({
      project: project,
      region: region,
      autoscaling_policy: autoscalingPolicy,
    });
  }

  /**
   * Parse the project from ProjectRegionAutoscalingPolicy resource.
   *
   * @param {string} projectRegionAutoscalingPolicyName
   *   A fully-qualified path representing project_region_autoscaling_policy resource.
   * @returns {string} A string representing the project.
   */
  matchProjectFromProjectRegionAutoscalingPolicyName(projectRegionAutoscalingPolicyName: string) {
    return this._pathTemplates.projectRegionAutoscalingPolicyPathTemplate.match(projectRegionAutoscalingPolicyName).project;
  }

  /**
   * Parse the region from ProjectRegionAutoscalingPolicy resource.
   *
   * @param {string} projectRegionAutoscalingPolicyName
   *   A fully-qualified path representing project_region_autoscaling_policy resource.
   * @returns {string} A string representing the region.
   */
  matchRegionFromProjectRegionAutoscalingPolicyName(projectRegionAutoscalingPolicyName: string) {
    return this._pathTemplates.projectRegionAutoscalingPolicyPathTemplate.match(projectRegionAutoscalingPolicyName).region;
  }

  /**
   * Parse the autoscaling_policy from ProjectRegionAutoscalingPolicy resource.
   *
   * @param {string} projectRegionAutoscalingPolicyName
   *   A fully-qualified path representing project_region_autoscaling_policy resource.
   * @returns {string} A string representing the autoscaling_policy.
   */
  matchAutoscalingPolicyFromProjectRegionAutoscalingPolicyName(projectRegionAutoscalingPolicyName: string) {
    return this._pathTemplates.projectRegionAutoscalingPolicyPathTemplate.match(projectRegionAutoscalingPolicyName).autoscaling_policy;
  }

  /**
   * Return a fully-qualified projectRegionWorkflowTemplate resource name string.
   *
   * @param {string} project
   * @param {string} region
   * @param {string} workflow_template
   * @returns {string} Resource name string.
   */
  projectRegionWorkflowTemplatePath(project:string,region:string,workflowTemplate:string) {
    return this._pathTemplates.projectRegionWorkflowTemplatePathTemplate.render({
      project: project,
      region: region,
      workflow_template: workflowTemplate,
    });
  }

  /**
   * Parse the project from ProjectRegionWorkflowTemplate resource.
   *
   * @param {string} projectRegionWorkflowTemplateName
   *   A fully-qualified path representing project_region_workflow_template resource.
   * @returns {string} A string representing the project.
   */
  matchProjectFromProjectRegionWorkflowTemplateName(projectRegionWorkflowTemplateName: string) {
    return this._pathTemplates.projectRegionWorkflowTemplatePathTemplate.match(projectRegionWorkflowTemplateName).project;
  }

  /**
   * Parse the region from ProjectRegionWorkflowTemplate resource.
   *
   * @param {string} projectRegionWorkflowTemplateName
   *   A fully-qualified path representing project_region_workflow_template resource.
   * @returns {string} A string representing the region.
   */
  matchRegionFromProjectRegionWorkflowTemplateName(projectRegionWorkflowTemplateName: string) {
    return this._pathTemplates.projectRegionWorkflowTemplatePathTemplate.match(projectRegionWorkflowTemplateName).region;
  }

  /**
   * Parse the workflow_template from ProjectRegionWorkflowTemplate resource.
   *
   * @param {string} projectRegionWorkflowTemplateName
   *   A fully-qualified path representing project_region_workflow_template resource.
   * @returns {string} A string representing the workflow_template.
   */
  matchWorkflowTemplateFromProjectRegionWorkflowTemplateName(projectRegionWorkflowTemplateName: string) {
    return this._pathTemplates.projectRegionWorkflowTemplatePathTemplate.match(projectRegionWorkflowTemplateName).workflow_template;
  }

  /**
   * Terminate the GRPC channel and close the client.
   *
   * The client will no longer be usable and all future behavior is undefined.
   */
  close(): Promise<void> {
    if (!this._terminated) {
      return this.autoscalingPolicyServiceStub.then(stub => {
        this._terminated = true;
        stub.close();
      });
    }
    return Promise.resolve();
  }
}
