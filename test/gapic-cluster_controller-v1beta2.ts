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

import * as protosTypes from '../protos/protos';
import * as assert from 'assert';
import { describe, it } from 'mocha';
const clustercontrollerModule = require('../src');


const FAKE_STATUS_CODE = 1;
class FakeError{
    name: string;
    message: string;
    code: number;
    constructor(n: number){
        this.name = 'fakeName';
        this.message = 'fake message';
        this.code = n;
    }
}
const error = new FakeError(FAKE_STATUS_CODE);
export interface Callback {
  (err: FakeError|null, response?: {} | null): void;
}

export class Operation{
    constructor(){};
    promise() {};
}
function mockSimpleGrpcMethod(expectedRequest: {}, response: {} | null, error: FakeError | null) {
    return (actualRequest: {}, options: {}, callback: Callback) => {
        assert.deepStrictEqual(actualRequest, expectedRequest);
        if (error) {
            callback(error);
        } else if (response) {
            callback(null, response);
        } else {
            callback(null);
        }
    };
}
function mockLongRunningGrpcMethod(expectedRequest: {}, response: {} | null, error?: {} | null) {
    return (request: {}) => {
        assert.deepStrictEqual(request, expectedRequest);
        const mockOperation = {
          promise: function() {
            return new Promise((resolve, reject) => {
              if (error) {
                reject(error);
              }
              else {
                resolve([response]);
              }
            });
          }
        };
        return Promise.resolve([mockOperation]);
    };
}
describe('v1beta2.ClusterControllerClient', () => {
    it('has servicePath', () => {
        const servicePath = clustercontrollerModule.v1beta2.ClusterControllerClient.servicePath;
        assert(servicePath);
    });
    it('has apiEndpoint', () => {
        const apiEndpoint = clustercontrollerModule.v1beta2.ClusterControllerClient.apiEndpoint;
        assert(apiEndpoint);
    });
    it('has port', () => {
        const port = clustercontrollerModule.v1beta2.ClusterControllerClient.port;
        assert(port);
        assert(typeof port === 'number');
    });
    it('should create a client with no option', () => {
        const client = new clustercontrollerModule.v1beta2.ClusterControllerClient();
        assert(client);
    });
    it('should create a client with gRPC fallback', () => {
        const client = new clustercontrollerModule.v1beta2.ClusterControllerClient({
            fallback: true,
        });
        assert(client);
    });
    describe('getCluster', () => {
        it('invokes getCluster without error', done => {
            const client = new clustercontrollerModule.v1beta2.ClusterControllerClient({
                credentials: {client_email: 'bogus', private_key: 'bogus'},
                projectId: 'bogus',
            });
            // Mock request
            const request: protosTypes.google.cloud.dataproc.v1beta2.IGetClusterRequest = {};
            // Mock response
            const expectedResponse = {};
            // Mock gRPC layer
            client._innerApiCalls.getCluster = mockSimpleGrpcMethod(
                request,
                expectedResponse,
                null
            );
            client.getCluster(request, (err: {}, response: {}) => {
                assert.ifError(err);
                assert.deepStrictEqual(response, expectedResponse);
                done();
            })
        });

        it('invokes getCluster with error', done => {
            const client = new clustercontrollerModule.v1beta2.ClusterControllerClient({
                credentials: {client_email: 'bogus', private_key: 'bogus'},
                projectId: 'bogus',
            });
            // Mock request
            const request: protosTypes.google.cloud.dataproc.v1beta2.IGetClusterRequest = {};
            // Mock response
            const expectedResponse = {};
            // Mock gRPC layer
            client._innerApiCalls.getCluster = mockSimpleGrpcMethod(
                request,
                null,
                error
            );
            client.getCluster(request, (err: FakeError, response: {}) => {
                assert(err instanceof FakeError);
                assert.strictEqual(err.code, FAKE_STATUS_CODE);
                assert(typeof response === 'undefined');
                done();
            })
        });
    });
    describe('createCluster', () => {
        it('invokes createCluster without error', done => {
            const client = new clustercontrollerModule.v1beta2.ClusterControllerClient({
                credentials: {client_email: 'bogus', private_key: 'bogus'},
                projectId: 'bogus',
            });
            // Mock request
            const request: protosTypes.google.cloud.dataproc.v1beta2.ICreateClusterRequest = {};
            // Mock response
            const expectedResponse = {};
            // Mock gRPC layer
            client._innerApiCalls.createCluster = mockLongRunningGrpcMethod(
                request,
                expectedResponse
            );
            client.createCluster(request).then((responses: [Operation]) => {
                const operation = responses[0];
                return operation? operation.promise() : {};
            }).then((responses: [Operation]) => {
                assert.deepStrictEqual(responses[0], expectedResponse);
                done();
            }).catch((err: {}) => {
                done(err);
            });
        });

        it('invokes createCluster with error', done => {
            const client = new clustercontrollerModule.v1beta2.ClusterControllerClient({
                credentials: {client_email: 'bogus', private_key: 'bogus'},
                projectId: 'bogus',
            });
            // Mock request
            const request: protosTypes.google.cloud.dataproc.v1beta2.ICreateClusterRequest = {};
            // Mock response
            const expectedResponse = {};
            // Mock gRPC layer
            client._innerApiCalls.createCluster = mockLongRunningGrpcMethod(
                request,
                null,
                error
            );
            client.createCluster(request).then((responses: [Operation]) => {
                const operation = responses[0];
                return operation? operation.promise() : {};
            }).then(() => {
                assert.fail();
            }).catch((err: FakeError) => {
                assert(err instanceof FakeError);
                assert.strictEqual(err.code, FAKE_STATUS_CODE);
                done();
            });
        });
    });
    describe('updateCluster', () => {
        it('invokes updateCluster without error', done => {
            const client = new clustercontrollerModule.v1beta2.ClusterControllerClient({
                credentials: {client_email: 'bogus', private_key: 'bogus'},
                projectId: 'bogus',
            });
            // Mock request
            const request: protosTypes.google.cloud.dataproc.v1beta2.IUpdateClusterRequest = {};
            // Mock response
            const expectedResponse = {};
            // Mock gRPC layer
            client._innerApiCalls.updateCluster = mockLongRunningGrpcMethod(
                request,
                expectedResponse
            );
            client.updateCluster(request).then((responses: [Operation]) => {
                const operation = responses[0];
                return operation? operation.promise() : {};
            }).then((responses: [Operation]) => {
                assert.deepStrictEqual(responses[0], expectedResponse);
                done();
            }).catch((err: {}) => {
                done(err);
            });
        });

        it('invokes updateCluster with error', done => {
            const client = new clustercontrollerModule.v1beta2.ClusterControllerClient({
                credentials: {client_email: 'bogus', private_key: 'bogus'},
                projectId: 'bogus',
            });
            // Mock request
            const request: protosTypes.google.cloud.dataproc.v1beta2.IUpdateClusterRequest = {};
            // Mock response
            const expectedResponse = {};
            // Mock gRPC layer
            client._innerApiCalls.updateCluster = mockLongRunningGrpcMethod(
                request,
                null,
                error
            );
            client.updateCluster(request).then((responses: [Operation]) => {
                const operation = responses[0];
                return operation? operation.promise() : {};
            }).then(() => {
                assert.fail();
            }).catch((err: FakeError) => {
                assert(err instanceof FakeError);
                assert.strictEqual(err.code, FAKE_STATUS_CODE);
                done();
            });
        });
    });
    describe('deleteCluster', () => {
        it('invokes deleteCluster without error', done => {
            const client = new clustercontrollerModule.v1beta2.ClusterControllerClient({
                credentials: {client_email: 'bogus', private_key: 'bogus'},
                projectId: 'bogus',
            });
            // Mock request
            const request: protosTypes.google.cloud.dataproc.v1beta2.IDeleteClusterRequest = {};
            // Mock response
            const expectedResponse = {};
            // Mock gRPC layer
            client._innerApiCalls.deleteCluster = mockLongRunningGrpcMethod(
                request,
                expectedResponse
            );
            client.deleteCluster(request).then((responses: [Operation]) => {
                const operation = responses[0];
                return operation? operation.promise() : {};
            }).then((responses: [Operation]) => {
                assert.deepStrictEqual(responses[0], expectedResponse);
                done();
            }).catch((err: {}) => {
                done(err);
            });
        });

        it('invokes deleteCluster with error', done => {
            const client = new clustercontrollerModule.v1beta2.ClusterControllerClient({
                credentials: {client_email: 'bogus', private_key: 'bogus'},
                projectId: 'bogus',
            });
            // Mock request
            const request: protosTypes.google.cloud.dataproc.v1beta2.IDeleteClusterRequest = {};
            // Mock response
            const expectedResponse = {};
            // Mock gRPC layer
            client._innerApiCalls.deleteCluster = mockLongRunningGrpcMethod(
                request,
                null,
                error
            );
            client.deleteCluster(request).then((responses: [Operation]) => {
                const operation = responses[0];
                return operation? operation.promise() : {};
            }).then(() => {
                assert.fail();
            }).catch((err: FakeError) => {
                assert(err instanceof FakeError);
                assert.strictEqual(err.code, FAKE_STATUS_CODE);
                done();
            });
        });
    });
    describe('diagnoseCluster', () => {
        it('invokes diagnoseCluster without error', done => {
            const client = new clustercontrollerModule.v1beta2.ClusterControllerClient({
                credentials: {client_email: 'bogus', private_key: 'bogus'},
                projectId: 'bogus',
            });
            // Mock request
            const request: protosTypes.google.cloud.dataproc.v1beta2.IDiagnoseClusterRequest = {};
            // Mock response
            const expectedResponse = {};
            // Mock gRPC layer
            client._innerApiCalls.diagnoseCluster = mockLongRunningGrpcMethod(
                request,
                expectedResponse
            );
            client.diagnoseCluster(request).then((responses: [Operation]) => {
                const operation = responses[0];
                return operation? operation.promise() : {};
            }).then((responses: [Operation]) => {
                assert.deepStrictEqual(responses[0], expectedResponse);
                done();
            }).catch((err: {}) => {
                done(err);
            });
        });

        it('invokes diagnoseCluster with error', done => {
            const client = new clustercontrollerModule.v1beta2.ClusterControllerClient({
                credentials: {client_email: 'bogus', private_key: 'bogus'},
                projectId: 'bogus',
            });
            // Mock request
            const request: protosTypes.google.cloud.dataproc.v1beta2.IDiagnoseClusterRequest = {};
            // Mock response
            const expectedResponse = {};
            // Mock gRPC layer
            client._innerApiCalls.diagnoseCluster = mockLongRunningGrpcMethod(
                request,
                null,
                error
            );
            client.diagnoseCluster(request).then((responses: [Operation]) => {
                const operation = responses[0];
                return operation? operation.promise() : {};
            }).then(() => {
                assert.fail();
            }).catch((err: FakeError) => {
                assert(err instanceof FakeError);
                assert.strictEqual(err.code, FAKE_STATUS_CODE);
                done();
            });
        });
    });
    describe('listClusters', () => {
        it('invokes listClusters without error', done => {
            const client = new clustercontrollerModule.v1beta2.ClusterControllerClient({
                credentials: {client_email: 'bogus', private_key: 'bogus'},
                projectId: 'bogus',
            });
            // Mock request
            const request: protosTypes.google.cloud.dataproc.v1beta2.IListClustersRequest = {};
            // Mock response
            const expectedResponse = {};
            // Mock Grpc layer
            client._innerApiCalls.listClusters = (actualRequest: {}, options: {}, callback: Callback) => {
                assert.deepStrictEqual(actualRequest, request);
                callback(null, expectedResponse);
            };
            client.listClusters(request, (err: FakeError, response: {}) => {
                assert.ifError(err);
                assert.deepStrictEqual(response, expectedResponse);
                done();
            });
        });
    });
    describe('listClustersStream', () => {
        it('invokes listClustersStream without error', done => {
            const client = new clustercontrollerModule.v1beta2.ClusterControllerClient({
                credentials: {client_email: 'bogus', private_key: 'bogus'},
                projectId: 'bogus',
            });
            // Mock request
            const request: protosTypes.google.cloud.dataproc.v1beta2.IListClustersRequest = {};
            // Mock response
            const expectedResponse = {response: 'data'};
            // Mock Grpc layer
            client._innerApiCalls.listClusters = (actualRequest: {}, options: {}, callback: Callback) => {
                assert.deepStrictEqual(actualRequest, request);
                callback(null, expectedResponse);
            };
            const stream = client.listClustersStream(request, {}).on('data', (response: {}) =>{
                assert.deepStrictEqual(response, expectedResponse);
                done();
            }).on('error', (err: FakeError) => {
                done(err);
            });
            stream.write(expectedResponse);
        });
    });
});
