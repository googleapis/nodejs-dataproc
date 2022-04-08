// Copyright 2022 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import * as Long from "long";
import {protobuf as $protobuf} from "google-gax";
/** Namespace google. */
export namespace google {

    /** Namespace cloud. */
    namespace cloud {

        /** Namespace dataproc. */
        namespace dataproc {

            /** Namespace v1. */
            namespace v1 {

                /** Represents an AutoscalingPolicyService */
                class AutoscalingPolicyService extends $protobuf.rpc.Service {

                    /**
                     * Constructs a new AutoscalingPolicyService service.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     */
                    constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

                    /**
                     * Creates new AutoscalingPolicyService service using the specified rpc implementation.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     * @returns RPC service. Useful where requests and/or responses are streamed.
                     */
                    public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): AutoscalingPolicyService;

                    /**
                     * Calls CreateAutoscalingPolicy.
                     * @param request CreateAutoscalingPolicyRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and AutoscalingPolicy
                     */
                    public createAutoscalingPolicy(request: google.cloud.dataproc.v1.ICreateAutoscalingPolicyRequest, callback: google.cloud.dataproc.v1.AutoscalingPolicyService.CreateAutoscalingPolicyCallback): void;

                    /**
                     * Calls CreateAutoscalingPolicy.
                     * @param request CreateAutoscalingPolicyRequest message or plain object
                     * @returns Promise
                     */
                    public createAutoscalingPolicy(request: google.cloud.dataproc.v1.ICreateAutoscalingPolicyRequest): Promise<google.cloud.dataproc.v1.AutoscalingPolicy>;

                    /**
                     * Calls UpdateAutoscalingPolicy.
                     * @param request UpdateAutoscalingPolicyRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and AutoscalingPolicy
                     */
                    public updateAutoscalingPolicy(request: google.cloud.dataproc.v1.IUpdateAutoscalingPolicyRequest, callback: google.cloud.dataproc.v1.AutoscalingPolicyService.UpdateAutoscalingPolicyCallback): void;

                    /**
                     * Calls UpdateAutoscalingPolicy.
                     * @param request UpdateAutoscalingPolicyRequest message or plain object
                     * @returns Promise
                     */
                    public updateAutoscalingPolicy(request: google.cloud.dataproc.v1.IUpdateAutoscalingPolicyRequest): Promise<google.cloud.dataproc.v1.AutoscalingPolicy>;

                    /**
                     * Calls GetAutoscalingPolicy.
                     * @param request GetAutoscalingPolicyRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and AutoscalingPolicy
                     */
                    public getAutoscalingPolicy(request: google.cloud.dataproc.v1.IGetAutoscalingPolicyRequest, callback: google.cloud.dataproc.v1.AutoscalingPolicyService.GetAutoscalingPolicyCallback): void;

                    /**
                     * Calls GetAutoscalingPolicy.
                     * @param request GetAutoscalingPolicyRequest message or plain object
                     * @returns Promise
                     */
                    public getAutoscalingPolicy(request: google.cloud.dataproc.v1.IGetAutoscalingPolicyRequest): Promise<google.cloud.dataproc.v1.AutoscalingPolicy>;

                    /**
                     * Calls ListAutoscalingPolicies.
                     * @param request ListAutoscalingPoliciesRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListAutoscalingPoliciesResponse
                     */
                    public listAutoscalingPolicies(request: google.cloud.dataproc.v1.IListAutoscalingPoliciesRequest, callback: google.cloud.dataproc.v1.AutoscalingPolicyService.ListAutoscalingPoliciesCallback): void;

                    /**
                     * Calls ListAutoscalingPolicies.
                     * @param request ListAutoscalingPoliciesRequest message or plain object
                     * @returns Promise
                     */
                    public listAutoscalingPolicies(request: google.cloud.dataproc.v1.IListAutoscalingPoliciesRequest): Promise<google.cloud.dataproc.v1.ListAutoscalingPoliciesResponse>;

                    /**
                     * Calls DeleteAutoscalingPolicy.
                     * @param request DeleteAutoscalingPolicyRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Empty
                     */
                    public deleteAutoscalingPolicy(request: google.cloud.dataproc.v1.IDeleteAutoscalingPolicyRequest, callback: google.cloud.dataproc.v1.AutoscalingPolicyService.DeleteAutoscalingPolicyCallback): void;

                    /**
                     * Calls DeleteAutoscalingPolicy.
                     * @param request DeleteAutoscalingPolicyRequest message or plain object
                     * @returns Promise
                     */
                    public deleteAutoscalingPolicy(request: google.cloud.dataproc.v1.IDeleteAutoscalingPolicyRequest): Promise<google.protobuf.Empty>;
                }

                namespace AutoscalingPolicyService {

                    /**
                     * Callback as used by {@link google.cloud.dataproc.v1.AutoscalingPolicyService#createAutoscalingPolicy}.
                     * @param error Error, if any
                     * @param [response] AutoscalingPolicy
                     */
                    type CreateAutoscalingPolicyCallback = (error: (Error|null), response?: google.cloud.dataproc.v1.AutoscalingPolicy) => void;

                    /**
                     * Callback as used by {@link google.cloud.dataproc.v1.AutoscalingPolicyService#updateAutoscalingPolicy}.
                     * @param error Error, if any
                     * @param [response] AutoscalingPolicy
                     */
                    type UpdateAutoscalingPolicyCallback = (error: (Error|null), response?: google.cloud.dataproc.v1.AutoscalingPolicy) => void;

                    /**
                     * Callback as used by {@link google.cloud.dataproc.v1.AutoscalingPolicyService#getAutoscalingPolicy}.
                     * @param error Error, if any
                     * @param [response] AutoscalingPolicy
                     */
                    type GetAutoscalingPolicyCallback = (error: (Error|null), response?: google.cloud.dataproc.v1.AutoscalingPolicy) => void;

                    /**
                     * Callback as used by {@link google.cloud.dataproc.v1.AutoscalingPolicyService#listAutoscalingPolicies}.
                     * @param error Error, if any
                     * @param [response] ListAutoscalingPoliciesResponse
                     */
                    type ListAutoscalingPoliciesCallback = (error: (Error|null), response?: google.cloud.dataproc.v1.ListAutoscalingPoliciesResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.dataproc.v1.AutoscalingPolicyService#deleteAutoscalingPolicy}.
                     * @param error Error, if any
                     * @param [response] Empty
                     */
                    type DeleteAutoscalingPolicyCallback = (error: (Error|null), response?: google.protobuf.Empty) => void;
                }

                /** Properties of an AutoscalingPolicy. */
                interface IAutoscalingPolicy {

                    /** AutoscalingPolicy id */
                    id?: (string|null);

                    /** AutoscalingPolicy name */
                    name?: (string|null);

                    /** AutoscalingPolicy basicAlgorithm */
                    basicAlgorithm?: (google.cloud.dataproc.v1.IBasicAutoscalingAlgorithm|null);

                    /** AutoscalingPolicy workerConfig */
                    workerConfig?: (google.cloud.dataproc.v1.IInstanceGroupAutoscalingPolicyConfig|null);

                    /** AutoscalingPolicy secondaryWorkerConfig */
                    secondaryWorkerConfig?: (google.cloud.dataproc.v1.IInstanceGroupAutoscalingPolicyConfig|null);

                    /** AutoscalingPolicy labels */
                    labels?: ({ [k: string]: string }|null);
                }

                /** Represents an AutoscalingPolicy. */
                class AutoscalingPolicy implements IAutoscalingPolicy {

                    /**
                     * Constructs a new AutoscalingPolicy.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.dataproc.v1.IAutoscalingPolicy);

                    /** AutoscalingPolicy id. */
                    public id: string;

                    /** AutoscalingPolicy name. */
                    public name: string;

                    /** AutoscalingPolicy basicAlgorithm. */
                    public basicAlgorithm?: (google.cloud.dataproc.v1.IBasicAutoscalingAlgorithm|null);

                    /** AutoscalingPolicy workerConfig. */
                    public workerConfig?: (google.cloud.dataproc.v1.IInstanceGroupAutoscalingPolicyConfig|null);

                    /** AutoscalingPolicy secondaryWorkerConfig. */
                    public secondaryWorkerConfig?: (google.cloud.dataproc.v1.IInstanceGroupAutoscalingPolicyConfig|null);

                    /** AutoscalingPolicy labels. */
                    public labels: { [k: string]: string };

                    /** AutoscalingPolicy algorithm. */
                    public algorithm?: "basicAlgorithm";

                    /**
                     * Creates a new AutoscalingPolicy instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns AutoscalingPolicy instance
                     */
                    public static create(properties?: google.cloud.dataproc.v1.IAutoscalingPolicy): google.cloud.dataproc.v1.AutoscalingPolicy;

                    /**
                     * Encodes the specified AutoscalingPolicy message. Does not implicitly {@link google.cloud.dataproc.v1.AutoscalingPolicy.verify|verify} messages.
                     * @param message AutoscalingPolicy message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.dataproc.v1.IAutoscalingPolicy, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified AutoscalingPolicy message, length delimited. Does not implicitly {@link google.cloud.dataproc.v1.AutoscalingPolicy.verify|verify} messages.
                     * @param message AutoscalingPolicy message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.dataproc.v1.IAutoscalingPolicy, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an AutoscalingPolicy message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns AutoscalingPolicy
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.dataproc.v1.AutoscalingPolicy;

                    /**
                     * Decodes an AutoscalingPolicy message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns AutoscalingPolicy
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.dataproc.v1.AutoscalingPolicy;

                    /**
                     * Verifies an AutoscalingPolicy message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an AutoscalingPolicy message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns AutoscalingPolicy
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.dataproc.v1.AutoscalingPolicy;

                    /**
                     * Creates a plain object from an AutoscalingPolicy message. Also converts values to other types if specified.
                     * @param message AutoscalingPolicy
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.dataproc.v1.AutoscalingPolicy, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this AutoscalingPolicy to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a BasicAutoscalingAlgorithm. */
                interface IBasicAutoscalingAlgorithm {

                    /** BasicAutoscalingAlgorithm yarnConfig */
                    yarnConfig?: (google.cloud.dataproc.v1.IBasicYarnAutoscalingConfig|null);

                    /** BasicAutoscalingAlgorithm cooldownPeriod */
                    cooldownPeriod?: (google.protobuf.IDuration|null);
                }

                /** Represents a BasicAutoscalingAlgorithm. */
                class BasicAutoscalingAlgorithm implements IBasicAutoscalingAlgorithm {

                    /**
                     * Constructs a new BasicAutoscalingAlgorithm.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.dataproc.v1.IBasicAutoscalingAlgorithm);

                    /** BasicAutoscalingAlgorithm yarnConfig. */
                    public yarnConfig?: (google.cloud.dataproc.v1.IBasicYarnAutoscalingConfig|null);

                    /** BasicAutoscalingAlgorithm cooldownPeriod. */
                    public cooldownPeriod?: (google.protobuf.IDuration|null);

                    /**
                     * Creates a new BasicAutoscalingAlgorithm instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns BasicAutoscalingAlgorithm instance
                     */
                    public static create(properties?: google.cloud.dataproc.v1.IBasicAutoscalingAlgorithm): google.cloud.dataproc.v1.BasicAutoscalingAlgorithm;

                    /**
                     * Encodes the specified BasicAutoscalingAlgorithm message. Does not implicitly {@link google.cloud.dataproc.v1.BasicAutoscalingAlgorithm.verify|verify} messages.
                     * @param message BasicAutoscalingAlgorithm message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.dataproc.v1.IBasicAutoscalingAlgorithm, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified BasicAutoscalingAlgorithm message, length delimited. Does not implicitly {@link google.cloud.dataproc.v1.BasicAutoscalingAlgorithm.verify|verify} messages.
                     * @param message BasicAutoscalingAlgorithm message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.dataproc.v1.IBasicAutoscalingAlgorithm, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a BasicAutoscalingAlgorithm message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns BasicAutoscalingAlgorithm
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.dataproc.v1.BasicAutoscalingAlgorithm;

                    /**
                     * Decodes a BasicAutoscalingAlgorithm message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns BasicAutoscalingAlgorithm
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.dataproc.v1.BasicAutoscalingAlgorithm;

                    /**
                     * Verifies a BasicAutoscalingAlgorithm message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a BasicAutoscalingAlgorithm message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns BasicAutoscalingAlgorithm
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.dataproc.v1.BasicAutoscalingAlgorithm;

                    /**
                     * Creates a plain object from a BasicAutoscalingAlgorithm message. Also converts values to other types if specified.
                     * @param message BasicAutoscalingAlgorithm
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.dataproc.v1.BasicAutoscalingAlgorithm, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this BasicAutoscalingAlgorithm to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a BasicYarnAutoscalingConfig. */
                interface IBasicYarnAutoscalingConfig {

                    /** BasicYarnAutoscalingConfig gracefulDecommissionTimeout */
                    gracefulDecommissionTimeout?: (google.protobuf.IDuration|null);

                    /** BasicYarnAutoscalingConfig scaleUpFactor */
                    scaleUpFactor?: (number|null);

                    /** BasicYarnAutoscalingConfig scaleDownFactor */
                    scaleDownFactor?: (number|null);

                    /** BasicYarnAutoscalingConfig scaleUpMinWorkerFraction */
                    scaleUpMinWorkerFraction?: (number|null);

                    /** BasicYarnAutoscalingConfig scaleDownMinWorkerFraction */
                    scaleDownMinWorkerFraction?: (number|null);
                }

                /** Represents a BasicYarnAutoscalingConfig. */
                class BasicYarnAutoscalingConfig implements IBasicYarnAutoscalingConfig {

                    /**
                     * Constructs a new BasicYarnAutoscalingConfig.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.dataproc.v1.IBasicYarnAutoscalingConfig);

                    /** BasicYarnAutoscalingConfig gracefulDecommissionTimeout. */
                    public gracefulDecommissionTimeout?: (google.protobuf.IDuration|null);

                    /** BasicYarnAutoscalingConfig scaleUpFactor. */
                    public scaleUpFactor: number;

                    /** BasicYarnAutoscalingConfig scaleDownFactor. */
                    public scaleDownFactor: number;

                    /** BasicYarnAutoscalingConfig scaleUpMinWorkerFraction. */
                    public scaleUpMinWorkerFraction: number;

                    /** BasicYarnAutoscalingConfig scaleDownMinWorkerFraction. */
                    public scaleDownMinWorkerFraction: number;

                    /**
                     * Creates a new BasicYarnAutoscalingConfig instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns BasicYarnAutoscalingConfig instance
                     */
                    public static create(properties?: google.cloud.dataproc.v1.IBasicYarnAutoscalingConfig): google.cloud.dataproc.v1.BasicYarnAutoscalingConfig;

                    /**
                     * Encodes the specified BasicYarnAutoscalingConfig message. Does not implicitly {@link google.cloud.dataproc.v1.BasicYarnAutoscalingConfig.verify|verify} messages.
                     * @param message BasicYarnAutoscalingConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.dataproc.v1.IBasicYarnAutoscalingConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified BasicYarnAutoscalingConfig message, length delimited. Does not implicitly {@link google.cloud.dataproc.v1.BasicYarnAutoscalingConfig.verify|verify} messages.
                     * @param message BasicYarnAutoscalingConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.dataproc.v1.IBasicYarnAutoscalingConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a BasicYarnAutoscalingConfig message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns BasicYarnAutoscalingConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.dataproc.v1.BasicYarnAutoscalingConfig;

                    /**
                     * Decodes a BasicYarnAutoscalingConfig message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns BasicYarnAutoscalingConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.dataproc.v1.BasicYarnAutoscalingConfig;

                    /**
                     * Verifies a BasicYarnAutoscalingConfig message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a BasicYarnAutoscalingConfig message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns BasicYarnAutoscalingConfig
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.dataproc.v1.BasicYarnAutoscalingConfig;

                    /**
                     * Creates a plain object from a BasicYarnAutoscalingConfig message. Also converts values to other types if specified.
                     * @param message BasicYarnAutoscalingConfig
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.dataproc.v1.BasicYarnAutoscalingConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this BasicYarnAutoscalingConfig to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of an InstanceGroupAutoscalingPolicyConfig. */
                interface IInstanceGroupAutoscalingPolicyConfig {

                    /** InstanceGroupAutoscalingPolicyConfig minInstances */
                    minInstances?: (number|null);

                    /** InstanceGroupAutoscalingPolicyConfig maxInstances */
                    maxInstances?: (number|null);

                    /** InstanceGroupAutoscalingPolicyConfig weight */
                    weight?: (number|null);
                }

                /** Represents an InstanceGroupAutoscalingPolicyConfig. */
                class InstanceGroupAutoscalingPolicyConfig implements IInstanceGroupAutoscalingPolicyConfig {

                    /**
                     * Constructs a new InstanceGroupAutoscalingPolicyConfig.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.dataproc.v1.IInstanceGroupAutoscalingPolicyConfig);

                    /** InstanceGroupAutoscalingPolicyConfig minInstances. */
                    public minInstances: number;

                    /** InstanceGroupAutoscalingPolicyConfig maxInstances. */
                    public maxInstances: number;

                    /** InstanceGroupAutoscalingPolicyConfig weight. */
                    public weight: number;

                    /**
                     * Creates a new InstanceGroupAutoscalingPolicyConfig instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns InstanceGroupAutoscalingPolicyConfig instance
                     */
                    public static create(properties?: google.cloud.dataproc.v1.IInstanceGroupAutoscalingPolicyConfig): google.cloud.dataproc.v1.InstanceGroupAutoscalingPolicyConfig;

                    /**
                     * Encodes the specified InstanceGroupAutoscalingPolicyConfig message. Does not implicitly {@link google.cloud.dataproc.v1.InstanceGroupAutoscalingPolicyConfig.verify|verify} messages.
                     * @param message InstanceGroupAutoscalingPolicyConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.dataproc.v1.IInstanceGroupAutoscalingPolicyConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified InstanceGroupAutoscalingPolicyConfig message, length delimited. Does not implicitly {@link google.cloud.dataproc.v1.InstanceGroupAutoscalingPolicyConfig.verify|verify} messages.
                     * @param message InstanceGroupAutoscalingPolicyConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.dataproc.v1.IInstanceGroupAutoscalingPolicyConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an InstanceGroupAutoscalingPolicyConfig message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns InstanceGroupAutoscalingPolicyConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.dataproc.v1.InstanceGroupAutoscalingPolicyConfig;

                    /**
                     * Decodes an InstanceGroupAutoscalingPolicyConfig message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns InstanceGroupAutoscalingPolicyConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.dataproc.v1.InstanceGroupAutoscalingPolicyConfig;

                    /**
                     * Verifies an InstanceGroupAutoscalingPolicyConfig message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an InstanceGroupAutoscalingPolicyConfig message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns InstanceGroupAutoscalingPolicyConfig
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.dataproc.v1.InstanceGroupAutoscalingPolicyConfig;

                    /**
                     * Creates a plain object from an InstanceGroupAutoscalingPolicyConfig message. Also converts values to other types if specified.
                     * @param message InstanceGroupAutoscalingPolicyConfig
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.dataproc.v1.InstanceGroupAutoscalingPolicyConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this InstanceGroupAutoscalingPolicyConfig to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a CreateAutoscalingPolicyRequest. */
                interface ICreateAutoscalingPolicyRequest {

                    /** CreateAutoscalingPolicyRequest parent */
                    parent?: (string|null);

                    /** CreateAutoscalingPolicyRequest policy */
                    policy?: (google.cloud.dataproc.v1.IAutoscalingPolicy|null);
                }

                /** Represents a CreateAutoscalingPolicyRequest. */
                class CreateAutoscalingPolicyRequest implements ICreateAutoscalingPolicyRequest {

                    /**
                     * Constructs a new CreateAutoscalingPolicyRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.dataproc.v1.ICreateAutoscalingPolicyRequest);

                    /** CreateAutoscalingPolicyRequest parent. */
                    public parent: string;

                    /** CreateAutoscalingPolicyRequest policy. */
                    public policy?: (google.cloud.dataproc.v1.IAutoscalingPolicy|null);

                    /**
                     * Creates a new CreateAutoscalingPolicyRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CreateAutoscalingPolicyRequest instance
                     */
                    public static create(properties?: google.cloud.dataproc.v1.ICreateAutoscalingPolicyRequest): google.cloud.dataproc.v1.CreateAutoscalingPolicyRequest;

                    /**
                     * Encodes the specified CreateAutoscalingPolicyRequest message. Does not implicitly {@link google.cloud.dataproc.v1.CreateAutoscalingPolicyRequest.verify|verify} messages.
                     * @param message CreateAutoscalingPolicyRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.dataproc.v1.ICreateAutoscalingPolicyRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CreateAutoscalingPolicyRequest message, length delimited. Does not implicitly {@link google.cloud.dataproc.v1.CreateAutoscalingPolicyRequest.verify|verify} messages.
                     * @param message CreateAutoscalingPolicyRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.dataproc.v1.ICreateAutoscalingPolicyRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CreateAutoscalingPolicyRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CreateAutoscalingPolicyRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.dataproc.v1.CreateAutoscalingPolicyRequest;

                    /**
                     * Decodes a CreateAutoscalingPolicyRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CreateAutoscalingPolicyRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.dataproc.v1.CreateAutoscalingPolicyRequest;

                    /**
                     * Verifies a CreateAutoscalingPolicyRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CreateAutoscalingPolicyRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CreateAutoscalingPolicyRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.dataproc.v1.CreateAutoscalingPolicyRequest;

                    /**
                     * Creates a plain object from a CreateAutoscalingPolicyRequest message. Also converts values to other types if specified.
                     * @param message CreateAutoscalingPolicyRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.dataproc.v1.CreateAutoscalingPolicyRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CreateAutoscalingPolicyRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a GetAutoscalingPolicyRequest. */
                interface IGetAutoscalingPolicyRequest {

                    /** GetAutoscalingPolicyRequest name */
                    name?: (string|null);
                }

                /** Represents a GetAutoscalingPolicyRequest. */
                class GetAutoscalingPolicyRequest implements IGetAutoscalingPolicyRequest {

                    /**
                     * Constructs a new GetAutoscalingPolicyRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.dataproc.v1.IGetAutoscalingPolicyRequest);

                    /** GetAutoscalingPolicyRequest name. */
                    public name: string;

                    /**
                     * Creates a new GetAutoscalingPolicyRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetAutoscalingPolicyRequest instance
                     */
                    public static create(properties?: google.cloud.dataproc.v1.IGetAutoscalingPolicyRequest): google.cloud.dataproc.v1.GetAutoscalingPolicyRequest;

                    /**
                     * Encodes the specified GetAutoscalingPolicyRequest message. Does not implicitly {@link google.cloud.dataproc.v1.GetAutoscalingPolicyRequest.verify|verify} messages.
                     * @param message GetAutoscalingPolicyRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.dataproc.v1.IGetAutoscalingPolicyRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetAutoscalingPolicyRequest message, length delimited. Does not implicitly {@link google.cloud.dataproc.v1.GetAutoscalingPolicyRequest.verify|verify} messages.
                     * @param message GetAutoscalingPolicyRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.dataproc.v1.IGetAutoscalingPolicyRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetAutoscalingPolicyRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetAutoscalingPolicyRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.dataproc.v1.GetAutoscalingPolicyRequest;

                    /**
                     * Decodes a GetAutoscalingPolicyRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetAutoscalingPolicyRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.dataproc.v1.GetAutoscalingPolicyRequest;

                    /**
                     * Verifies a GetAutoscalingPolicyRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetAutoscalingPolicyRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetAutoscalingPolicyRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.dataproc.v1.GetAutoscalingPolicyRequest;

                    /**
                     * Creates a plain object from a GetAutoscalingPolicyRequest message. Also converts values to other types if specified.
                     * @param message GetAutoscalingPolicyRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.dataproc.v1.GetAutoscalingPolicyRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetAutoscalingPolicyRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of an UpdateAutoscalingPolicyRequest. */
                interface IUpdateAutoscalingPolicyRequest {

                    /** UpdateAutoscalingPolicyRequest policy */
                    policy?: (google.cloud.dataproc.v1.IAutoscalingPolicy|null);
                }

                /** Represents an UpdateAutoscalingPolicyRequest. */
                class UpdateAutoscalingPolicyRequest implements IUpdateAutoscalingPolicyRequest {

                    /**
                     * Constructs a new UpdateAutoscalingPolicyRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.dataproc.v1.IUpdateAutoscalingPolicyRequest);

                    /** UpdateAutoscalingPolicyRequest policy. */
                    public policy?: (google.cloud.dataproc.v1.IAutoscalingPolicy|null);

                    /**
                     * Creates a new UpdateAutoscalingPolicyRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns UpdateAutoscalingPolicyRequest instance
                     */
                    public static create(properties?: google.cloud.dataproc.v1.IUpdateAutoscalingPolicyRequest): google.cloud.dataproc.v1.UpdateAutoscalingPolicyRequest;

                    /**
                     * Encodes the specified UpdateAutoscalingPolicyRequest message. Does not implicitly {@link google.cloud.dataproc.v1.UpdateAutoscalingPolicyRequest.verify|verify} messages.
                     * @param message UpdateAutoscalingPolicyRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.dataproc.v1.IUpdateAutoscalingPolicyRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified UpdateAutoscalingPolicyRequest message, length delimited. Does not implicitly {@link google.cloud.dataproc.v1.UpdateAutoscalingPolicyRequest.verify|verify} messages.
                     * @param message UpdateAutoscalingPolicyRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.dataproc.v1.IUpdateAutoscalingPolicyRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an UpdateAutoscalingPolicyRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns UpdateAutoscalingPolicyRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.dataproc.v1.UpdateAutoscalingPolicyRequest;

                    /**
                     * Decodes an UpdateAutoscalingPolicyRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns UpdateAutoscalingPolicyRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.dataproc.v1.UpdateAutoscalingPolicyRequest;

                    /**
                     * Verifies an UpdateAutoscalingPolicyRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an UpdateAutoscalingPolicyRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns UpdateAutoscalingPolicyRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.dataproc.v1.UpdateAutoscalingPolicyRequest;

                    /**
                     * Creates a plain object from an UpdateAutoscalingPolicyRequest message. Also converts values to other types if specified.
                     * @param message UpdateAutoscalingPolicyRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.dataproc.v1.UpdateAutoscalingPolicyRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this UpdateAutoscalingPolicyRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a DeleteAutoscalingPolicyRequest. */
                interface IDeleteAutoscalingPolicyRequest {

                    /** DeleteAutoscalingPolicyRequest name */
                    name?: (string|null);
                }

                /** Represents a DeleteAutoscalingPolicyRequest. */
                class DeleteAutoscalingPolicyRequest implements IDeleteAutoscalingPolicyRequest {

                    /**
                     * Constructs a new DeleteAutoscalingPolicyRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.dataproc.v1.IDeleteAutoscalingPolicyRequest);

                    /** DeleteAutoscalingPolicyRequest name. */
                    public name: string;

                    /**
                     * Creates a new DeleteAutoscalingPolicyRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DeleteAutoscalingPolicyRequest instance
                     */
                    public static create(properties?: google.cloud.dataproc.v1.IDeleteAutoscalingPolicyRequest): google.cloud.dataproc.v1.DeleteAutoscalingPolicyRequest;

                    /**
                     * Encodes the specified DeleteAutoscalingPolicyRequest message. Does not implicitly {@link google.cloud.dataproc.v1.DeleteAutoscalingPolicyRequest.verify|verify} messages.
                     * @param message DeleteAutoscalingPolicyRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.dataproc.v1.IDeleteAutoscalingPolicyRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DeleteAutoscalingPolicyRequest message, length delimited. Does not implicitly {@link google.cloud.dataproc.v1.DeleteAutoscalingPolicyRequest.verify|verify} messages.
                     * @param message DeleteAutoscalingPolicyRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.dataproc.v1.IDeleteAutoscalingPolicyRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DeleteAutoscalingPolicyRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DeleteAutoscalingPolicyRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.dataproc.v1.DeleteAutoscalingPolicyRequest;

                    /**
                     * Decodes a DeleteAutoscalingPolicyRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DeleteAutoscalingPolicyRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.dataproc.v1.DeleteAutoscalingPolicyRequest;

                    /**
                     * Verifies a DeleteAutoscalingPolicyRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DeleteAutoscalingPolicyRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DeleteAutoscalingPolicyRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.dataproc.v1.DeleteAutoscalingPolicyRequest;

                    /**
                     * Creates a plain object from a DeleteAutoscalingPolicyRequest message. Also converts values to other types if specified.
                     * @param message DeleteAutoscalingPolicyRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.dataproc.v1.DeleteAutoscalingPolicyRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DeleteAutoscalingPolicyRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ListAutoscalingPoliciesRequest. */
                interface IListAutoscalingPoliciesRequest {

                    /** ListAutoscalingPoliciesRequest parent */
                    parent?: (string|null);

                    /** ListAutoscalingPoliciesRequest pageSize */
                    pageSize?: (number|null);

                    /** ListAutoscalingPoliciesRequest pageToken */
                    pageToken?: (string|null);
                }

                /** Represents a ListAutoscalingPoliciesRequest. */
                class ListAutoscalingPoliciesRequest implements IListAutoscalingPoliciesRequest {

                    /**
                     * Constructs a new ListAutoscalingPoliciesRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.dataproc.v1.IListAutoscalingPoliciesRequest);

                    /** ListAutoscalingPoliciesRequest parent. */
                    public parent: string;

                    /** ListAutoscalingPoliciesRequest pageSize. */
                    public pageSize: number;

                    /** ListAutoscalingPoliciesRequest pageToken. */
                    public pageToken: string;

                    /**
                     * Creates a new ListAutoscalingPoliciesRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListAutoscalingPoliciesRequest instance
                     */
                    public static create(properties?: google.cloud.dataproc.v1.IListAutoscalingPoliciesRequest): google.cloud.dataproc.v1.ListAutoscalingPoliciesRequest;

                    /**
                     * Encodes the specified ListAutoscalingPoliciesRequest message. Does not implicitly {@link google.cloud.dataproc.v1.ListAutoscalingPoliciesRequest.verify|verify} messages.
                     * @param message ListAutoscalingPoliciesRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.dataproc.v1.IListAutoscalingPoliciesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListAutoscalingPoliciesRequest message, length delimited. Does not implicitly {@link google.cloud.dataproc.v1.ListAutoscalingPoliciesRequest.verify|verify} messages.
                     * @param message ListAutoscalingPoliciesRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.dataproc.v1.IListAutoscalingPoliciesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListAutoscalingPoliciesRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListAutoscalingPoliciesRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.dataproc.v1.ListAutoscalingPoliciesRequest;

                    /**
                     * Decodes a ListAutoscalingPoliciesRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListAutoscalingPoliciesRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.dataproc.v1.ListAutoscalingPoliciesRequest;

                    /**
                     * Verifies a ListAutoscalingPoliciesRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListAutoscalingPoliciesRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListAutoscalingPoliciesRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.dataproc.v1.ListAutoscalingPoliciesRequest;

                    /**
                     * Creates a plain object from a ListAutoscalingPoliciesRequest message. Also converts values to other types if specified.
                     * @param message ListAutoscalingPoliciesRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.dataproc.v1.ListAutoscalingPoliciesRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListAutoscalingPoliciesRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ListAutoscalingPoliciesResponse. */
                interface IListAutoscalingPoliciesResponse {

                    /** ListAutoscalingPoliciesResponse policies */
                    policies?: (google.cloud.dataproc.v1.IAutoscalingPolicy[]|null);

                    /** ListAutoscalingPoliciesResponse nextPageToken */
                    nextPageToken?: (string|null);
                }

                /** Represents a ListAutoscalingPoliciesResponse. */
                class ListAutoscalingPoliciesResponse implements IListAutoscalingPoliciesResponse {

                    /**
                     * Constructs a new ListAutoscalingPoliciesResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.dataproc.v1.IListAutoscalingPoliciesResponse);

                    /** ListAutoscalingPoliciesResponse policies. */
                    public policies: google.cloud.dataproc.v1.IAutoscalingPolicy[];

                    /** ListAutoscalingPoliciesResponse nextPageToken. */
                    public nextPageToken: string;

                    /**
                     * Creates a new ListAutoscalingPoliciesResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListAutoscalingPoliciesResponse instance
                     */
                    public static create(properties?: google.cloud.dataproc.v1.IListAutoscalingPoliciesResponse): google.cloud.dataproc.v1.ListAutoscalingPoliciesResponse;

                    /**
                     * Encodes the specified ListAutoscalingPoliciesResponse message. Does not implicitly {@link google.cloud.dataproc.v1.ListAutoscalingPoliciesResponse.verify|verify} messages.
                     * @param message ListAutoscalingPoliciesResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.dataproc.v1.IListAutoscalingPoliciesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListAutoscalingPoliciesResponse message, length delimited. Does not implicitly {@link google.cloud.dataproc.v1.ListAutoscalingPoliciesResponse.verify|verify} messages.
                     * @param message ListAutoscalingPoliciesResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.dataproc.v1.IListAutoscalingPoliciesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListAutoscalingPoliciesResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListAutoscalingPoliciesResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.dataproc.v1.ListAutoscalingPoliciesResponse;

                    /**
                     * Decodes a ListAutoscalingPoliciesResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListAutoscalingPoliciesResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.dataproc.v1.ListAutoscalingPoliciesResponse;

                    /**
                     * Verifies a ListAutoscalingPoliciesResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListAutoscalingPoliciesResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListAutoscalingPoliciesResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.dataproc.v1.ListAutoscalingPoliciesResponse;

                    /**
                     * Creates a plain object from a ListAutoscalingPoliciesResponse message. Also converts values to other types if specified.
                     * @param message ListAutoscalingPoliciesResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.dataproc.v1.ListAutoscalingPoliciesResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListAutoscalingPoliciesResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Represents a BatchController */
                class BatchController extends $protobuf.rpc.Service {

                    /**
                     * Constructs a new BatchController service.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     */
                    constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

                    /**
                     * Creates new BatchController service using the specified rpc implementation.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     * @returns RPC service. Useful where requests and/or responses are streamed.
                     */
                    public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): BatchController;

                    /**
                     * Calls CreateBatch.
                     * @param request CreateBatchRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public createBatch(request: google.cloud.dataproc.v1.ICreateBatchRequest, callback: google.cloud.dataproc.v1.BatchController.CreateBatchCallback): void;

                    /**
                     * Calls CreateBatch.
                     * @param request CreateBatchRequest message or plain object
                     * @returns Promise
                     */
                    public createBatch(request: google.cloud.dataproc.v1.ICreateBatchRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls GetBatch.
                     * @param request GetBatchRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Batch
                     */
                    public getBatch(request: google.cloud.dataproc.v1.IGetBatchRequest, callback: google.cloud.dataproc.v1.BatchController.GetBatchCallback): void;

                    /**
                     * Calls GetBatch.
                     * @param request GetBatchRequest message or plain object
                     * @returns Promise
                     */
                    public getBatch(request: google.cloud.dataproc.v1.IGetBatchRequest): Promise<google.cloud.dataproc.v1.Batch>;

                    /**
                     * Calls ListBatches.
                     * @param request ListBatchesRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListBatchesResponse
                     */
                    public listBatches(request: google.cloud.dataproc.v1.IListBatchesRequest, callback: google.cloud.dataproc.v1.BatchController.ListBatchesCallback): void;

                    /**
                     * Calls ListBatches.
                     * @param request ListBatchesRequest message or plain object
                     * @returns Promise
                     */
                    public listBatches(request: google.cloud.dataproc.v1.IListBatchesRequest): Promise<google.cloud.dataproc.v1.ListBatchesResponse>;

                    /**
                     * Calls DeleteBatch.
                     * @param request DeleteBatchRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Empty
                     */
                    public deleteBatch(request: google.cloud.dataproc.v1.IDeleteBatchRequest, callback: google.cloud.dataproc.v1.BatchController.DeleteBatchCallback): void;

                    /**
                     * Calls DeleteBatch.
                     * @param request DeleteBatchRequest message or plain object
                     * @returns Promise
                     */
                    public deleteBatch(request: google.cloud.dataproc.v1.IDeleteBatchRequest): Promise<google.protobuf.Empty>;
                }

                namespace BatchController {

                    /**
                     * Callback as used by {@link google.cloud.dataproc.v1.BatchController#createBatch}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type CreateBatchCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.dataproc.v1.BatchController#getBatch}.
                     * @param error Error, if any
                     * @param [response] Batch
                     */
                    type GetBatchCallback = (error: (Error|null), response?: google.cloud.dataproc.v1.Batch) => void;

                    /**
                     * Callback as used by {@link google.cloud.dataproc.v1.BatchController#listBatches}.
                     * @param error Error, if any
                     * @param [response] ListBatchesResponse
                     */
                    type ListBatchesCallback = (error: (Error|null), response?: google.cloud.dataproc.v1.ListBatchesResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.dataproc.v1.BatchController#deleteBatch}.
                     * @param error Error, if any
                     * @param [response] Empty
                     */
                    type DeleteBatchCallback = (error: (Error|null), response?: google.protobuf.Empty) => void;
                }

                /** Properties of a CreateBatchRequest. */
                interface ICreateBatchRequest {

                    /** CreateBatchRequest parent */
                    parent?: (string|null);

                    /** CreateBatchRequest batch */
                    batch?: (google.cloud.dataproc.v1.IBatch|null);

                    /** CreateBatchRequest batchId */
                    batchId?: (string|null);

                    /** CreateBatchRequest requestId */
                    requestId?: (string|null);
                }

                /** Represents a CreateBatchRequest. */
                class CreateBatchRequest implements ICreateBatchRequest {

                    /**
                     * Constructs a new CreateBatchRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.dataproc.v1.ICreateBatchRequest);

                    /** CreateBatchRequest parent. */
                    public parent: string;

                    /** CreateBatchRequest batch. */
                    public batch?: (google.cloud.dataproc.v1.IBatch|null);

                    /** CreateBatchRequest batchId. */
                    public batchId: string;

                    /** CreateBatchRequest requestId. */
                    public requestId: string;

                    /**
                     * Creates a new CreateBatchRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CreateBatchRequest instance
                     */
                    public static create(properties?: google.cloud.dataproc.v1.ICreateBatchRequest): google.cloud.dataproc.v1.CreateBatchRequest;

                    /**
                     * Encodes the specified CreateBatchRequest message. Does not implicitly {@link google.cloud.dataproc.v1.CreateBatchRequest.verify|verify} messages.
                     * @param message CreateBatchRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.dataproc.v1.ICreateBatchRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CreateBatchRequest message, length delimited. Does not implicitly {@link google.cloud.dataproc.v1.CreateBatchRequest.verify|verify} messages.
                     * @param message CreateBatchRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.dataproc.v1.ICreateBatchRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CreateBatchRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CreateBatchRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.dataproc.v1.CreateBatchRequest;

                    /**
                     * Decodes a CreateBatchRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CreateBatchRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.dataproc.v1.CreateBatchRequest;

                    /**
                     * Verifies a CreateBatchRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CreateBatchRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CreateBatchRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.dataproc.v1.CreateBatchRequest;

                    /**
                     * Creates a plain object from a CreateBatchRequest message. Also converts values to other types if specified.
                     * @param message CreateBatchRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.dataproc.v1.CreateBatchRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CreateBatchRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a GetBatchRequest. */
                interface IGetBatchRequest {

                    /** GetBatchRequest name */
                    name?: (string|null);
                }

                /** Represents a GetBatchRequest. */
                class GetBatchRequest implements IGetBatchRequest {

                    /**
                     * Constructs a new GetBatchRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.dataproc.v1.IGetBatchRequest);

                    /** GetBatchRequest name. */
                    public name: string;

                    /**
                     * Creates a new GetBatchRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetBatchRequest instance
                     */
                    public static create(properties?: google.cloud.dataproc.v1.IGetBatchRequest): google.cloud.dataproc.v1.GetBatchRequest;

                    /**
                     * Encodes the specified GetBatchRequest message. Does not implicitly {@link google.cloud.dataproc.v1.GetBatchRequest.verify|verify} messages.
                     * @param message GetBatchRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.dataproc.v1.IGetBatchRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetBatchRequest message, length delimited. Does not implicitly {@link google.cloud.dataproc.v1.GetBatchRequest.verify|verify} messages.
                     * @param message GetBatchRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.dataproc.v1.IGetBatchRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetBatchRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetBatchRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.dataproc.v1.GetBatchRequest;

                    /**
                     * Decodes a GetBatchRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetBatchRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.dataproc.v1.GetBatchRequest;

                    /**
                     * Verifies a GetBatchRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetBatchRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetBatchRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.dataproc.v1.GetBatchRequest;

                    /**
                     * Creates a plain object from a GetBatchRequest message. Also converts values to other types if specified.
                     * @param message GetBatchRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.dataproc.v1.GetBatchRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetBatchRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ListBatchesRequest. */
                interface IListBatchesRequest {

                    /** ListBatchesRequest parent */
                    parent?: (string|null);

                    /** ListBatchesRequest pageSize */
                    pageSize?: (number|null);

                    /** ListBatchesRequest pageToken */
                    pageToken?: (string|null);
                }

                /** Represents a ListBatchesRequest. */
                class ListBatchesRequest implements IListBatchesRequest {

                    /**
                     * Constructs a new ListBatchesRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.dataproc.v1.IListBatchesRequest);

                    /** ListBatchesRequest parent. */
                    public parent: string;

                    /** ListBatchesRequest pageSize. */
                    public pageSize: number;

                    /** ListBatchesRequest pageToken. */
                    public pageToken: string;

                    /**
                     * Creates a new ListBatchesRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListBatchesRequest instance
                     */
                    public static create(properties?: google.cloud.dataproc.v1.IListBatchesRequest): google.cloud.dataproc.v1.ListBatchesRequest;

                    /**
                     * Encodes the specified ListBatchesRequest message. Does not implicitly {@link google.cloud.dataproc.v1.ListBatchesRequest.verify|verify} messages.
                     * @param message ListBatchesRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.dataproc.v1.IListBatchesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListBatchesRequest message, length delimited. Does not implicitly {@link google.cloud.dataproc.v1.ListBatchesRequest.verify|verify} messages.
                     * @param message ListBatchesRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.dataproc.v1.IListBatchesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListBatchesRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListBatchesRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.dataproc.v1.ListBatchesRequest;

                    /**
                     * Decodes a ListBatchesRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListBatchesRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.dataproc.v1.ListBatchesRequest;

                    /**
                     * Verifies a ListBatchesRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListBatchesRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListBatchesRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.dataproc.v1.ListBatchesRequest;

                    /**
                     * Creates a plain object from a ListBatchesRequest message. Also converts values to other types if specified.
                     * @param message ListBatchesRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.dataproc.v1.ListBatchesRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListBatchesRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ListBatchesResponse. */
                interface IListBatchesResponse {

                    /** ListBatchesResponse batches */
                    batches?: (google.cloud.dataproc.v1.IBatch[]|null);

                    /** ListBatchesResponse nextPageToken */
                    nextPageToken?: (string|null);
                }

                /** Represents a ListBatchesResponse. */
                class ListBatchesResponse implements IListBatchesResponse {

                    /**
                     * Constructs a new ListBatchesResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.dataproc.v1.IListBatchesResponse);

                    /** ListBatchesResponse batches. */
                    public batches: google.cloud.dataproc.v1.IBatch[];

                    /** ListBatchesResponse nextPageToken. */
                    public nextPageToken: string;

                    /**
                     * Creates a new ListBatchesResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListBatchesResponse instance
                     */
                    public static create(properties?: google.cloud.dataproc.v1.IListBatchesResponse): google.cloud.dataproc.v1.ListBatchesResponse;

                    /**
                     * Encodes the specified ListBatchesResponse message. Does not implicitly {@link google.cloud.dataproc.v1.ListBatchesResponse.verify|verify} messages.
                     * @param message ListBatchesResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.dataproc.v1.IListBatchesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListBatchesResponse message, length delimited. Does not implicitly {@link google.cloud.dataproc.v1.ListBatchesResponse.verify|verify} messages.
                     * @param message ListBatchesResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.dataproc.v1.IListBatchesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListBatchesResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListBatchesResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.dataproc.v1.ListBatchesResponse;

                    /**
                     * Decodes a ListBatchesResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListBatchesResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.dataproc.v1.ListBatchesResponse;

                    /**
                     * Verifies a ListBatchesResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListBatchesResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListBatchesResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.dataproc.v1.ListBatchesResponse;

                    /**
                     * Creates a plain object from a ListBatchesResponse message. Also converts values to other types if specified.
                     * @param message ListBatchesResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.dataproc.v1.ListBatchesResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListBatchesResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a DeleteBatchRequest. */
                interface IDeleteBatchRequest {

                    /** DeleteBatchRequest name */
                    name?: (string|null);
                }

                /** Represents a DeleteBatchRequest. */
                class DeleteBatchRequest implements IDeleteBatchRequest {

                    /**
                     * Constructs a new DeleteBatchRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.dataproc.v1.IDeleteBatchRequest);

                    /** DeleteBatchRequest name. */
                    public name: string;

                    /**
                     * Creates a new DeleteBatchRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DeleteBatchRequest instance
                     */
                    public static create(properties?: google.cloud.dataproc.v1.IDeleteBatchRequest): google.cloud.dataproc.v1.DeleteBatchRequest;

                    /**
                     * Encodes the specified DeleteBatchRequest message. Does not implicitly {@link google.cloud.dataproc.v1.DeleteBatchRequest.verify|verify} messages.
                     * @param message DeleteBatchRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.dataproc.v1.IDeleteBatchRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DeleteBatchRequest message, length delimited. Does not implicitly {@link google.cloud.dataproc.v1.DeleteBatchRequest.verify|verify} messages.
                     * @param message DeleteBatchRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.dataproc.v1.IDeleteBatchRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DeleteBatchRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DeleteBatchRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.dataproc.v1.DeleteBatchRequest;

                    /**
                     * Decodes a DeleteBatchRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DeleteBatchRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.dataproc.v1.DeleteBatchRequest;

                    /**
                     * Verifies a DeleteBatchRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DeleteBatchRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DeleteBatchRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.dataproc.v1.DeleteBatchRequest;

                    /**
                     * Creates a plain object from a DeleteBatchRequest message. Also converts values to other types if specified.
                     * @param message DeleteBatchRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.dataproc.v1.DeleteBatchRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DeleteBatchRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a Batch. */
                interface IBatch {

                    /** Batch name */
                    name?: (string|null);

                    /** Batch uuid */
                    uuid?: (string|null);

                    /** Batch createTime */
                    createTime?: (google.protobuf.ITimestamp|null);

                    /** Batch pysparkBatch */
                    pysparkBatch?: (google.cloud.dataproc.v1.IPySparkBatch|null);

                    /** Batch sparkBatch */
                    sparkBatch?: (google.cloud.dataproc.v1.ISparkBatch|null);

                    /** Batch sparkRBatch */
                    sparkRBatch?: (google.cloud.dataproc.v1.ISparkRBatch|null);

                    /** Batch sparkSqlBatch */
                    sparkSqlBatch?: (google.cloud.dataproc.v1.ISparkSqlBatch|null);

                    /** Batch runtimeInfo */
                    runtimeInfo?: (google.cloud.dataproc.v1.IRuntimeInfo|null);

                    /** Batch state */
                    state?: (google.cloud.dataproc.v1.Batch.State|keyof typeof google.cloud.dataproc.v1.Batch.State|null);

                    /** Batch stateMessage */
                    stateMessage?: (string|null);

                    /** Batch stateTime */
                    stateTime?: (google.protobuf.ITimestamp|null);

                    /** Batch creator */
                    creator?: (string|null);

                    /** Batch labels */
                    labels?: ({ [k: string]: string }|null);

                    /** Batch runtimeConfig */
                    runtimeConfig?: (google.cloud.dataproc.v1.IRuntimeConfig|null);

                    /** Batch environmentConfig */
                    environmentConfig?: (google.cloud.dataproc.v1.IEnvironmentConfig|null);

                    /** Batch operation */
                    operation?: (string|null);

                    /** Batch stateHistory */
                    stateHistory?: (google.cloud.dataproc.v1.Batch.IStateHistory[]|null);
                }

                /** Represents a Batch. */
                class Batch implements IBatch {

                    /**
                     * Constructs a new Batch.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.dataproc.v1.IBatch);

                    /** Batch name. */
                    public name: string;

                    /** Batch uuid. */
                    public uuid: string;

                    /** Batch createTime. */
                    public createTime?: (google.protobuf.ITimestamp|null);

                    /** Batch pysparkBatch. */
                    public pysparkBatch?: (google.cloud.dataproc.v1.IPySparkBatch|null);

                    /** Batch sparkBatch. */
                    public sparkBatch?: (google.cloud.dataproc.v1.ISparkBatch|null);

                    /** Batch sparkRBatch. */
                    public sparkRBatch?: (google.cloud.dataproc.v1.ISparkRBatch|null);

                    /** Batch sparkSqlBatch. */
                    public sparkSqlBatch?: (google.cloud.dataproc.v1.ISparkSqlBatch|null);

                    /** Batch runtimeInfo. */
                    public runtimeInfo?: (google.cloud.dataproc.v1.IRuntimeInfo|null);

                    /** Batch state. */
                    public state: (google.cloud.dataproc.v1.Batch.State|keyof typeof google.cloud.dataproc.v1.Batch.State);

                    /** Batch stateMessage. */
                    public stateMessage: string;

                    /** Batch stateTime. */
                    public stateTime?: (google.protobuf.ITimestamp|null);

                    /** Batch creator. */
                    public creator: string;

                    /** Batch labels. */
                    public labels: { [k: string]: string };

                    /** Batch runtimeConfig. */
                    public runtimeConfig?: (google.cloud.dataproc.v1.IRuntimeConfig|null);

                    /** Batch environmentConfig. */
                    public environmentConfig?: (google.cloud.dataproc.v1.IEnvironmentConfig|null);

                    /** Batch operation. */
                    public operation: string;

                    /** Batch stateHistory. */
                    public stateHistory: google.cloud.dataproc.v1.Batch.IStateHistory[];

                    /** Batch batchConfig. */
                    public batchConfig?: ("pysparkBatch"|"sparkBatch"|"sparkRBatch"|"sparkSqlBatch");

                    /**
                     * Creates a new Batch instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Batch instance
                     */
                    public static create(properties?: google.cloud.dataproc.v1.IBatch): google.cloud.dataproc.v1.Batch;

                    /**
                     * Encodes the specified Batch message. Does not implicitly {@link google.cloud.dataproc.v1.Batch.verify|verify} messages.
                     * @param message Batch message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.dataproc.v1.IBatch, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Batch message, length delimited. Does not implicitly {@link google.cloud.dataproc.v1.Batch.verify|verify} messages.
                     * @param message Batch message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.dataproc.v1.IBatch, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Batch message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Batch
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.dataproc.v1.Batch;

                    /**
                     * Decodes a Batch message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Batch
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.dataproc.v1.Batch;

                    /**
                     * Verifies a Batch message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Batch message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Batch
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.dataproc.v1.Batch;

                    /**
                     * Creates a plain object from a Batch message. Also converts values to other types if specified.
                     * @param message Batch
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.dataproc.v1.Batch, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Batch to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace Batch {

                    /** Properties of a StateHistory. */
                    interface IStateHistory {

                        /** StateHistory state */
                        state?: (google.cloud.dataproc.v1.Batch.State|keyof typeof google.cloud.dataproc.v1.Batch.State|null);

                        /** StateHistory stateMessage */
                        stateMessage?: (string|null);

                        /** StateHistory stateStartTime */
                        stateStartTime?: (google.protobuf.ITimestamp|null);
                    }

                    /** Represents a StateHistory. */
                    class StateHistory implements IStateHistory {

                        /**
                         * Constructs a new StateHistory.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.dataproc.v1.Batch.IStateHistory);

                        /** StateHistory state. */
                        public state: (google.cloud.dataproc.v1.Batch.State|keyof typeof google.cloud.dataproc.v1.Batch.State);

                        /** StateHistory stateMessage. */
                        public stateMessage: string;

                        /** StateHistory stateStartTime. */
                        public stateStartTime?: (google.protobuf.ITimestamp|null);

                        /**
                         * Creates a new StateHistory instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns StateHistory instance
                         */
                        public static create(properties?: google.cloud.dataproc.v1.Batch.IStateHistory): google.cloud.dataproc.v1.Batch.StateHistory;

                        /**
                         * Encodes the specified StateHistory message. Does not implicitly {@link google.cloud.dataproc.v1.Batch.StateHistory.verify|verify} messages.
                         * @param message StateHistory message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.dataproc.v1.Batch.IStateHistory, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified StateHistory message, length delimited. Does not implicitly {@link google.cloud.dataproc.v1.Batch.StateHistory.verify|verify} messages.
                         * @param message StateHistory message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.dataproc.v1.Batch.IStateHistory, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a StateHistory message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns StateHistory
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.dataproc.v1.Batch.StateHistory;

                        /**
                         * Decodes a StateHistory message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns StateHistory
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.dataproc.v1.Batch.StateHistory;

                        /**
                         * Verifies a StateHistory message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a StateHistory message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns StateHistory
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.dataproc.v1.Batch.StateHistory;

                        /**
                         * Creates a plain object from a StateHistory message. Also converts values to other types if specified.
                         * @param message StateHistory
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.dataproc.v1.Batch.StateHistory, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this StateHistory to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** State enum. */
                    enum State {
                        STATE_UNSPECIFIED = 0,
                        PENDING = 1,
                        RUNNING = 2,
                        CANCELLING = 3,
                        CANCELLED = 4,
                        SUCCEEDED = 5,
                        FAILED = 6
                    }
                }

                /** Properties of a PySparkBatch. */
                interface IPySparkBatch {

                    /** PySparkBatch mainPythonFileUri */
                    mainPythonFileUri?: (string|null);

                    /** PySparkBatch args */
                    args?: (string[]|null);

                    /** PySparkBatch pythonFileUris */
                    pythonFileUris?: (string[]|null);

                    /** PySparkBatch jarFileUris */
                    jarFileUris?: (string[]|null);

                    /** PySparkBatch fileUris */
                    fileUris?: (string[]|null);

                    /** PySparkBatch archiveUris */
                    archiveUris?: (string[]|null);
                }

                /** Represents a PySparkBatch. */
                class PySparkBatch implements IPySparkBatch {

                    /**
                     * Constructs a new PySparkBatch.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.dataproc.v1.IPySparkBatch);

                    /** PySparkBatch mainPythonFileUri. */
                    public mainPythonFileUri: string;

                    /** PySparkBatch args. */
                    public args: string[];

                    /** PySparkBatch pythonFileUris. */
                    public pythonFileUris: string[];

                    /** PySparkBatch jarFileUris. */
                    public jarFileUris: string[];

                    /** PySparkBatch fileUris. */
                    public fileUris: string[];

                    /** PySparkBatch archiveUris. */
                    public archiveUris: string[];

                    /**
                     * Creates a new PySparkBatch instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns PySparkBatch instance
                     */
                    public static create(properties?: google.cloud.dataproc.v1.IPySparkBatch): google.cloud.dataproc.v1.PySparkBatch;

                    /**
                     * Encodes the specified PySparkBatch message. Does not implicitly {@link google.cloud.dataproc.v1.PySparkBatch.verify|verify} messages.
                     * @param message PySparkBatch message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.dataproc.v1.IPySparkBatch, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified PySparkBatch message, length delimited. Does not implicitly {@link google.cloud.dataproc.v1.PySparkBatch.verify|verify} messages.
                     * @param message PySparkBatch message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.dataproc.v1.IPySparkBatch, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a PySparkBatch message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns PySparkBatch
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.dataproc.v1.PySparkBatch;

                    /**
                     * Decodes a PySparkBatch message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns PySparkBatch
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.dataproc.v1.PySparkBatch;

                    /**
                     * Verifies a PySparkBatch message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a PySparkBatch message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns PySparkBatch
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.dataproc.v1.PySparkBatch;

                    /**
                     * Creates a plain object from a PySparkBatch message. Also converts values to other types if specified.
                     * @param message PySparkBatch
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.dataproc.v1.PySparkBatch, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this PySparkBatch to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a SparkBatch. */
                interface ISparkBatch {

                    /** SparkBatch mainJarFileUri */
                    mainJarFileUri?: (string|null);

                    /** SparkBatch mainClass */
                    mainClass?: (string|null);

                    /** SparkBatch args */
                    args?: (string[]|null);

                    /** SparkBatch jarFileUris */
                    jarFileUris?: (string[]|null);

                    /** SparkBatch fileUris */
                    fileUris?: (string[]|null);

                    /** SparkBatch archiveUris */
                    archiveUris?: (string[]|null);
                }

                /** Represents a SparkBatch. */
                class SparkBatch implements ISparkBatch {

                    /**
                     * Constructs a new SparkBatch.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.dataproc.v1.ISparkBatch);

                    /** SparkBatch mainJarFileUri. */
                    public mainJarFileUri?: (string|null);

                    /** SparkBatch mainClass. */
                    public mainClass?: (string|null);

                    /** SparkBatch args. */
                    public args: string[];

                    /** SparkBatch jarFileUris. */
                    public jarFileUris: string[];

                    /** SparkBatch fileUris. */
                    public fileUris: string[];

                    /** SparkBatch archiveUris. */
                    public archiveUris: string[];

                    /** SparkBatch driver. */
                    public driver?: ("mainJarFileUri"|"mainClass");

                    /**
                     * Creates a new SparkBatch instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns SparkBatch instance
                     */
                    public static create(properties?: google.cloud.dataproc.v1.ISparkBatch): google.cloud.dataproc.v1.SparkBatch;

                    /**
                     * Encodes the specified SparkBatch message. Does not implicitly {@link google.cloud.dataproc.v1.SparkBatch.verify|verify} messages.
                     * @param message SparkBatch message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.dataproc.v1.ISparkBatch, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified SparkBatch message, length delimited. Does not implicitly {@link google.cloud.dataproc.v1.SparkBatch.verify|verify} messages.
                     * @param message SparkBatch message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.dataproc.v1.ISparkBatch, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a SparkBatch message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns SparkBatch
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.dataproc.v1.SparkBatch;

                    /**
                     * Decodes a SparkBatch message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns SparkBatch
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.dataproc.v1.SparkBatch;

                    /**
                     * Verifies a SparkBatch message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a SparkBatch message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns SparkBatch
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.dataproc.v1.SparkBatch;

                    /**
                     * Creates a plain object from a SparkBatch message. Also converts values to other types if specified.
                     * @param message SparkBatch
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.dataproc.v1.SparkBatch, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this SparkBatch to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a SparkRBatch. */
                interface ISparkRBatch {

                    /** SparkRBatch mainRFileUri */
                    mainRFileUri?: (string|null);

                    /** SparkRBatch args */
                    args?: (string[]|null);

                    /** SparkRBatch fileUris */
                    fileUris?: (string[]|null);

                    /** SparkRBatch archiveUris */
                    archiveUris?: (string[]|null);
                }

                /** Represents a SparkRBatch. */
                class SparkRBatch implements ISparkRBatch {

                    /**
                     * Constructs a new SparkRBatch.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.dataproc.v1.ISparkRBatch);

                    /** SparkRBatch mainRFileUri. */
                    public mainRFileUri: string;

                    /** SparkRBatch args. */
                    public args: string[];

                    /** SparkRBatch fileUris. */
                    public fileUris: string[];

                    /** SparkRBatch archiveUris. */
                    public archiveUris: string[];

                    /**
                     * Creates a new SparkRBatch instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns SparkRBatch instance
                     */
                    public static create(properties?: google.cloud.dataproc.v1.ISparkRBatch): google.cloud.dataproc.v1.SparkRBatch;

                    /**
                     * Encodes the specified SparkRBatch message. Does not implicitly {@link google.cloud.dataproc.v1.SparkRBatch.verify|verify} messages.
                     * @param message SparkRBatch message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.dataproc.v1.ISparkRBatch, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified SparkRBatch message, length delimited. Does not implicitly {@link google.cloud.dataproc.v1.SparkRBatch.verify|verify} messages.
                     * @param message SparkRBatch message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.dataproc.v1.ISparkRBatch, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a SparkRBatch message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns SparkRBatch
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.dataproc.v1.SparkRBatch;

                    /**
                     * Decodes a SparkRBatch message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns SparkRBatch
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.dataproc.v1.SparkRBatch;

                    /**
                     * Verifies a SparkRBatch message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a SparkRBatch message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns SparkRBatch
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.dataproc.v1.SparkRBatch;

                    /**
                     * Creates a plain object from a SparkRBatch message. Also converts values to other types if specified.
                     * @param message SparkRBatch
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.dataproc.v1.SparkRBatch, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this SparkRBatch to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a SparkSqlBatch. */
                interface ISparkSqlBatch {

                    /** SparkSqlBatch queryFileUri */
                    queryFileUri?: (string|null);

                    /** SparkSqlBatch queryVariables */
                    queryVariables?: ({ [k: string]: string }|null);

                    /** SparkSqlBatch jarFileUris */
                    jarFileUris?: (string[]|null);
                }

                /** Represents a SparkSqlBatch. */
                class SparkSqlBatch implements ISparkSqlBatch {

                    /**
                     * Constructs a new SparkSqlBatch.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.dataproc.v1.ISparkSqlBatch);

                    /** SparkSqlBatch queryFileUri. */
                    public queryFileUri: string;

                    /** SparkSqlBatch queryVariables. */
                    public queryVariables: { [k: string]: string };

                    /** SparkSqlBatch jarFileUris. */
                    public jarFileUris: string[];

                    /**
                     * Creates a new SparkSqlBatch instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns SparkSqlBatch instance
                     */
                    public static create(properties?: google.cloud.dataproc.v1.ISparkSqlBatch): google.cloud.dataproc.v1.SparkSqlBatch;

                    /**
                     * Encodes the specified SparkSqlBatch message. Does not implicitly {@link google.cloud.dataproc.v1.SparkSqlBatch.verify|verify} messages.
                     * @param message SparkSqlBatch message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.dataproc.v1.ISparkSqlBatch, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified SparkSqlBatch message, length delimited. Does not implicitly {@link google.cloud.dataproc.v1.SparkSqlBatch.verify|verify} messages.
                     * @param message SparkSqlBatch message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.dataproc.v1.ISparkSqlBatch, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a SparkSqlBatch message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns SparkSqlBatch
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.dataproc.v1.SparkSqlBatch;

                    /**
                     * Decodes a SparkSqlBatch message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns SparkSqlBatch
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.dataproc.v1.SparkSqlBatch;

                    /**
                     * Verifies a SparkSqlBatch message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a SparkSqlBatch message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns SparkSqlBatch
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.dataproc.v1.SparkSqlBatch;

                    /**
                     * Creates a plain object from a SparkSqlBatch message. Also converts values to other types if specified.
                     * @param message SparkSqlBatch
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.dataproc.v1.SparkSqlBatch, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this SparkSqlBatch to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a RuntimeConfig. */
                interface IRuntimeConfig {

                    /** RuntimeConfig version */
                    version?: (string|null);

                    /** RuntimeConfig containerImage */
                    containerImage?: (string|null);

                    /** RuntimeConfig properties */
                    properties?: ({ [k: string]: string }|null);
                }

                /** Represents a RuntimeConfig. */
                class RuntimeConfig implements IRuntimeConfig {

                    /**
                     * Constructs a new RuntimeConfig.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.dataproc.v1.IRuntimeConfig);

                    /** RuntimeConfig version. */
                    public version: string;

                    /** RuntimeConfig containerImage. */
                    public containerImage: string;

                    /** RuntimeConfig properties. */
                    public properties: { [k: string]: string };

                    /**
                     * Creates a new RuntimeConfig instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns RuntimeConfig instance
                     */
                    public static create(properties?: google.cloud.dataproc.v1.IRuntimeConfig): google.cloud.dataproc.v1.RuntimeConfig;

                    /**
                     * Encodes the specified RuntimeConfig message. Does not implicitly {@link google.cloud.dataproc.v1.RuntimeConfig.verify|verify} messages.
                     * @param message RuntimeConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.dataproc.v1.IRuntimeConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified RuntimeConfig message, length delimited. Does not implicitly {@link google.cloud.dataproc.v1.RuntimeConfig.verify|verify} messages.
                     * @param message RuntimeConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.dataproc.v1.IRuntimeConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a RuntimeConfig message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns RuntimeConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.dataproc.v1.RuntimeConfig;

                    /**
                     * Decodes a RuntimeConfig message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns RuntimeConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.dataproc.v1.RuntimeConfig;

                    /**
                     * Verifies a RuntimeConfig message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a RuntimeConfig message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns RuntimeConfig
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.dataproc.v1.RuntimeConfig;

                    /**
                     * Creates a plain object from a RuntimeConfig message. Also converts values to other types if specified.
                     * @param message RuntimeConfig
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.dataproc.v1.RuntimeConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this RuntimeConfig to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of an EnvironmentConfig. */
                interface IEnvironmentConfig {

                    /** EnvironmentConfig executionConfig */
                    executionConfig?: (google.cloud.dataproc.v1.IExecutionConfig|null);

                    /** EnvironmentConfig peripheralsConfig */
                    peripheralsConfig?: (google.cloud.dataproc.v1.IPeripheralsConfig|null);
                }

                /** Represents an EnvironmentConfig. */
                class EnvironmentConfig implements IEnvironmentConfig {

                    /**
                     * Constructs a new EnvironmentConfig.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.dataproc.v1.IEnvironmentConfig);

                    /** EnvironmentConfig executionConfig. */
                    public executionConfig?: (google.cloud.dataproc.v1.IExecutionConfig|null);

                    /** EnvironmentConfig peripheralsConfig. */
                    public peripheralsConfig?: (google.cloud.dataproc.v1.IPeripheralsConfig|null);

                    /**
                     * Creates a new EnvironmentConfig instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns EnvironmentConfig instance
                     */
                    public static create(properties?: google.cloud.dataproc.v1.IEnvironmentConfig): google.cloud.dataproc.v1.EnvironmentConfig;

                    /**
                     * Encodes the specified EnvironmentConfig message. Does not implicitly {@link google.cloud.dataproc.v1.EnvironmentConfig.verify|verify} messages.
                     * @param message EnvironmentConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.dataproc.v1.IEnvironmentConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified EnvironmentConfig message, length delimited. Does not implicitly {@link google.cloud.dataproc.v1.EnvironmentConfig.verify|verify} messages.
                     * @param message EnvironmentConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.dataproc.v1.IEnvironmentConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an EnvironmentConfig message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns EnvironmentConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.dataproc.v1.EnvironmentConfig;

                    /**
                     * Decodes an EnvironmentConfig message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns EnvironmentConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.dataproc.v1.EnvironmentConfig;

                    /**
                     * Verifies an EnvironmentConfig message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an EnvironmentConfig message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns EnvironmentConfig
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.dataproc.v1.EnvironmentConfig;

                    /**
                     * Creates a plain object from an EnvironmentConfig message. Also converts values to other types if specified.
                     * @param message EnvironmentConfig
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.dataproc.v1.EnvironmentConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this EnvironmentConfig to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of an ExecutionConfig. */
                interface IExecutionConfig {

                    /** ExecutionConfig serviceAccount */
                    serviceAccount?: (string|null);

                    /** ExecutionConfig networkUri */
                    networkUri?: (string|null);

                    /** ExecutionConfig subnetworkUri */
                    subnetworkUri?: (string|null);

                    /** ExecutionConfig networkTags */
                    networkTags?: (string[]|null);

                    /** ExecutionConfig kmsKey */
                    kmsKey?: (string|null);
                }

                /** Represents an ExecutionConfig. */
                class ExecutionConfig implements IExecutionConfig {

                    /**
                     * Constructs a new ExecutionConfig.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.dataproc.v1.IExecutionConfig);

                    /** ExecutionConfig serviceAccount. */
                    public serviceAccount: string;

                    /** ExecutionConfig networkUri. */
                    public networkUri?: (string|null);

                    /** ExecutionConfig subnetworkUri. */
                    public subnetworkUri?: (string|null);

                    /** ExecutionConfig networkTags. */
                    public networkTags: string[];

                    /** ExecutionConfig kmsKey. */
                    public kmsKey: string;

                    /** ExecutionConfig network. */
                    public network?: ("networkUri"|"subnetworkUri");

                    /**
                     * Creates a new ExecutionConfig instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ExecutionConfig instance
                     */
                    public static create(properties?: google.cloud.dataproc.v1.IExecutionConfig): google.cloud.dataproc.v1.ExecutionConfig;

                    /**
                     * Encodes the specified ExecutionConfig message. Does not implicitly {@link google.cloud.dataproc.v1.ExecutionConfig.verify|verify} messages.
                     * @param message ExecutionConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.dataproc.v1.IExecutionConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ExecutionConfig message, length delimited. Does not implicitly {@link google.cloud.dataproc.v1.ExecutionConfig.verify|verify} messages.
                     * @param message ExecutionConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.dataproc.v1.IExecutionConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an ExecutionConfig message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ExecutionConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.dataproc.v1.ExecutionConfig;

                    /**
                     * Decodes an ExecutionConfig message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ExecutionConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.dataproc.v1.ExecutionConfig;

                    /**
                     * Verifies an ExecutionConfig message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an ExecutionConfig message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ExecutionConfig
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.dataproc.v1.ExecutionConfig;

                    /**
                     * Creates a plain object from an ExecutionConfig message. Also converts values to other types if specified.
                     * @param message ExecutionConfig
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.dataproc.v1.ExecutionConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ExecutionConfig to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a SparkHistoryServerConfig. */
                interface ISparkHistoryServerConfig {

                    /** SparkHistoryServerConfig dataprocCluster */
                    dataprocCluster?: (string|null);
                }

                /** Represents a SparkHistoryServerConfig. */
                class SparkHistoryServerConfig implements ISparkHistoryServerConfig {

                    /**
                     * Constructs a new SparkHistoryServerConfig.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.dataproc.v1.ISparkHistoryServerConfig);

                    /** SparkHistoryServerConfig dataprocCluster. */
                    public dataprocCluster: string;

                    /**
                     * Creates a new SparkHistoryServerConfig instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns SparkHistoryServerConfig instance
                     */
                    public static create(properties?: google.cloud.dataproc.v1.ISparkHistoryServerConfig): google.cloud.dataproc.v1.SparkHistoryServerConfig;

                    /**
                     * Encodes the specified SparkHistoryServerConfig message. Does not implicitly {@link google.cloud.dataproc.v1.SparkHistoryServerConfig.verify|verify} messages.
                     * @param message SparkHistoryServerConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.dataproc.v1.ISparkHistoryServerConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified SparkHistoryServerConfig message, length delimited. Does not implicitly {@link google.cloud.dataproc.v1.SparkHistoryServerConfig.verify|verify} messages.
                     * @param message SparkHistoryServerConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.dataproc.v1.ISparkHistoryServerConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a SparkHistoryServerConfig message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns SparkHistoryServerConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.dataproc.v1.SparkHistoryServerConfig;

                    /**
                     * Decodes a SparkHistoryServerConfig message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns SparkHistoryServerConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.dataproc.v1.SparkHistoryServerConfig;

                    /**
                     * Verifies a SparkHistoryServerConfig message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a SparkHistoryServerConfig message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns SparkHistoryServerConfig
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.dataproc.v1.SparkHistoryServerConfig;

                    /**
                     * Creates a plain object from a SparkHistoryServerConfig message. Also converts values to other types if specified.
                     * @param message SparkHistoryServerConfig
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.dataproc.v1.SparkHistoryServerConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this SparkHistoryServerConfig to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a PeripheralsConfig. */
                interface IPeripheralsConfig {

                    /** PeripheralsConfig metastoreService */
                    metastoreService?: (string|null);

                    /** PeripheralsConfig sparkHistoryServerConfig */
                    sparkHistoryServerConfig?: (google.cloud.dataproc.v1.ISparkHistoryServerConfig|null);
                }

                /** Represents a PeripheralsConfig. */
                class PeripheralsConfig implements IPeripheralsConfig {

                    /**
                     * Constructs a new PeripheralsConfig.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.dataproc.v1.IPeripheralsConfig);

                    /** PeripheralsConfig metastoreService. */
                    public metastoreService: string;

                    /** PeripheralsConfig sparkHistoryServerConfig. */
                    public sparkHistoryServerConfig?: (google.cloud.dataproc.v1.ISparkHistoryServerConfig|null);

                    /**
                     * Creates a new PeripheralsConfig instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns PeripheralsConfig instance
                     */
                    public static create(properties?: google.cloud.dataproc.v1.IPeripheralsConfig): google.cloud.dataproc.v1.PeripheralsConfig;

                    /**
                     * Encodes the specified PeripheralsConfig message. Does not implicitly {@link google.cloud.dataproc.v1.PeripheralsConfig.verify|verify} messages.
                     * @param message PeripheralsConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.dataproc.v1.IPeripheralsConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified PeripheralsConfig message, length delimited. Does not implicitly {@link google.cloud.dataproc.v1.PeripheralsConfig.verify|verify} messages.
                     * @param message PeripheralsConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.dataproc.v1.IPeripheralsConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a PeripheralsConfig message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns PeripheralsConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.dataproc.v1.PeripheralsConfig;

                    /**
                     * Decodes a PeripheralsConfig message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns PeripheralsConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.dataproc.v1.PeripheralsConfig;

                    /**
                     * Verifies a PeripheralsConfig message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a PeripheralsConfig message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns PeripheralsConfig
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.dataproc.v1.PeripheralsConfig;

                    /**
                     * Creates a plain object from a PeripheralsConfig message. Also converts values to other types if specified.
                     * @param message PeripheralsConfig
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.dataproc.v1.PeripheralsConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this PeripheralsConfig to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a RuntimeInfo. */
                interface IRuntimeInfo {

                    /** RuntimeInfo endpoints */
                    endpoints?: ({ [k: string]: string }|null);

                    /** RuntimeInfo outputUri */
                    outputUri?: (string|null);

                    /** RuntimeInfo diagnosticOutputUri */
                    diagnosticOutputUri?: (string|null);
                }

                /** Represents a RuntimeInfo. */
                class RuntimeInfo implements IRuntimeInfo {

                    /**
                     * Constructs a new RuntimeInfo.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.dataproc.v1.IRuntimeInfo);

                    /** RuntimeInfo endpoints. */
                    public endpoints: { [k: string]: string };

                    /** RuntimeInfo outputUri. */
                    public outputUri: string;

                    /** RuntimeInfo diagnosticOutputUri. */
                    public diagnosticOutputUri: string;

                    /**
                     * Creates a new RuntimeInfo instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns RuntimeInfo instance
                     */
                    public static create(properties?: google.cloud.dataproc.v1.IRuntimeInfo): google.cloud.dataproc.v1.RuntimeInfo;

                    /**
                     * Encodes the specified RuntimeInfo message. Does not implicitly {@link google.cloud.dataproc.v1.RuntimeInfo.verify|verify} messages.
                     * @param message RuntimeInfo message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.dataproc.v1.IRuntimeInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified RuntimeInfo message, length delimited. Does not implicitly {@link google.cloud.dataproc.v1.RuntimeInfo.verify|verify} messages.
                     * @param message RuntimeInfo message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.dataproc.v1.IRuntimeInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a RuntimeInfo message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns RuntimeInfo
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.dataproc.v1.RuntimeInfo;

                    /**
                     * Decodes a RuntimeInfo message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns RuntimeInfo
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.dataproc.v1.RuntimeInfo;

                    /**
                     * Verifies a RuntimeInfo message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a RuntimeInfo message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns RuntimeInfo
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.dataproc.v1.RuntimeInfo;

                    /**
                     * Creates a plain object from a RuntimeInfo message. Also converts values to other types if specified.
                     * @param message RuntimeInfo
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.dataproc.v1.RuntimeInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this RuntimeInfo to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a GkeClusterConfig. */
                interface IGkeClusterConfig {

                    /** GkeClusterConfig gkeClusterTarget */
                    gkeClusterTarget?: (string|null);

                    /** GkeClusterConfig nodePoolTarget */
                    nodePoolTarget?: (google.cloud.dataproc.v1.IGkeNodePoolTarget[]|null);
                }

                /** Represents a GkeClusterConfig. */
                class GkeClusterConfig implements IGkeClusterConfig {

                    /**
                     * Constructs a new GkeClusterConfig.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.dataproc.v1.IGkeClusterConfig);

                    /** GkeClusterConfig gkeClusterTarget. */
                    public gkeClusterTarget: string;

                    /** GkeClusterConfig nodePoolTarget. */
                    public nodePoolTarget: google.cloud.dataproc.v1.IGkeNodePoolTarget[];

                    /**
                     * Creates a new GkeClusterConfig instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GkeClusterConfig instance
                     */
                    public static create(properties?: google.cloud.dataproc.v1.IGkeClusterConfig): google.cloud.dataproc.v1.GkeClusterConfig;

                    /**
                     * Encodes the specified GkeClusterConfig message. Does not implicitly {@link google.cloud.dataproc.v1.GkeClusterConfig.verify|verify} messages.
                     * @param message GkeClusterConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.dataproc.v1.IGkeClusterConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GkeClusterConfig message, length delimited. Does not implicitly {@link google.cloud.dataproc.v1.GkeClusterConfig.verify|verify} messages.
                     * @param message GkeClusterConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.dataproc.v1.IGkeClusterConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GkeClusterConfig message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GkeClusterConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.dataproc.v1.GkeClusterConfig;

                    /**
                     * Decodes a GkeClusterConfig message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GkeClusterConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.dataproc.v1.GkeClusterConfig;

                    /**
                     * Verifies a GkeClusterConfig message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GkeClusterConfig message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GkeClusterConfig
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.dataproc.v1.GkeClusterConfig;

                    /**
                     * Creates a plain object from a GkeClusterConfig message. Also converts values to other types if specified.
                     * @param message GkeClusterConfig
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.dataproc.v1.GkeClusterConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GkeClusterConfig to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a KubernetesClusterConfig. */
                interface IKubernetesClusterConfig {

                    /** KubernetesClusterConfig kubernetesNamespace */
                    kubernetesNamespace?: (string|null);

                    /** KubernetesClusterConfig gkeClusterConfig */
                    gkeClusterConfig?: (google.cloud.dataproc.v1.IGkeClusterConfig|null);

                    /** KubernetesClusterConfig kubernetesSoftwareConfig */
                    kubernetesSoftwareConfig?: (google.cloud.dataproc.v1.IKubernetesSoftwareConfig|null);
                }

                /** Represents a KubernetesClusterConfig. */
                class KubernetesClusterConfig implements IKubernetesClusterConfig {

                    /**
                     * Constructs a new KubernetesClusterConfig.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.dataproc.v1.IKubernetesClusterConfig);

                    /** KubernetesClusterConfig kubernetesNamespace. */
                    public kubernetesNamespace: string;

                    /** KubernetesClusterConfig gkeClusterConfig. */
                    public gkeClusterConfig?: (google.cloud.dataproc.v1.IGkeClusterConfig|null);

                    /** KubernetesClusterConfig kubernetesSoftwareConfig. */
                    public kubernetesSoftwareConfig?: (google.cloud.dataproc.v1.IKubernetesSoftwareConfig|null);

                    /** KubernetesClusterConfig config. */
                    public config?: "gkeClusterConfig";

                    /**
                     * Creates a new KubernetesClusterConfig instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns KubernetesClusterConfig instance
                     */
                    public static create(properties?: google.cloud.dataproc.v1.IKubernetesClusterConfig): google.cloud.dataproc.v1.KubernetesClusterConfig;

                    /**
                     * Encodes the specified KubernetesClusterConfig message. Does not implicitly {@link google.cloud.dataproc.v1.KubernetesClusterConfig.verify|verify} messages.
                     * @param message KubernetesClusterConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.dataproc.v1.IKubernetesClusterConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified KubernetesClusterConfig message, length delimited. Does not implicitly {@link google.cloud.dataproc.v1.KubernetesClusterConfig.verify|verify} messages.
                     * @param message KubernetesClusterConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.dataproc.v1.IKubernetesClusterConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a KubernetesClusterConfig message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns KubernetesClusterConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.dataproc.v1.KubernetesClusterConfig;

                    /**
                     * Decodes a KubernetesClusterConfig message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns KubernetesClusterConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.dataproc.v1.KubernetesClusterConfig;

                    /**
                     * Verifies a KubernetesClusterConfig message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a KubernetesClusterConfig message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns KubernetesClusterConfig
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.dataproc.v1.KubernetesClusterConfig;

                    /**
                     * Creates a plain object from a KubernetesClusterConfig message. Also converts values to other types if specified.
                     * @param message KubernetesClusterConfig
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.dataproc.v1.KubernetesClusterConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this KubernetesClusterConfig to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a KubernetesSoftwareConfig. */
                interface IKubernetesSoftwareConfig {

                    /** KubernetesSoftwareConfig componentVersion */
                    componentVersion?: ({ [k: string]: string }|null);

                    /** KubernetesSoftwareConfig properties */
                    properties?: ({ [k: string]: string }|null);
                }

                /** Represents a KubernetesSoftwareConfig. */
                class KubernetesSoftwareConfig implements IKubernetesSoftwareConfig {

                    /**
                     * Constructs a new KubernetesSoftwareConfig.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.dataproc.v1.IKubernetesSoftwareConfig);

                    /** KubernetesSoftwareConfig componentVersion. */
                    public componentVersion: { [k: string]: string };

                    /** KubernetesSoftwareConfig properties. */
                    public properties: { [k: string]: string };

                    /**
                     * Creates a new KubernetesSoftwareConfig instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns KubernetesSoftwareConfig instance
                     */
                    public static create(properties?: google.cloud.dataproc.v1.IKubernetesSoftwareConfig): google.cloud.dataproc.v1.KubernetesSoftwareConfig;

                    /**
                     * Encodes the specified KubernetesSoftwareConfig message. Does not implicitly {@link google.cloud.dataproc.v1.KubernetesSoftwareConfig.verify|verify} messages.
                     * @param message KubernetesSoftwareConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.dataproc.v1.IKubernetesSoftwareConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified KubernetesSoftwareConfig message, length delimited. Does not implicitly {@link google.cloud.dataproc.v1.KubernetesSoftwareConfig.verify|verify} messages.
                     * @param message KubernetesSoftwareConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.dataproc.v1.IKubernetesSoftwareConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a KubernetesSoftwareConfig message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns KubernetesSoftwareConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.dataproc.v1.KubernetesSoftwareConfig;

                    /**
                     * Decodes a KubernetesSoftwareConfig message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns KubernetesSoftwareConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.dataproc.v1.KubernetesSoftwareConfig;

                    /**
                     * Verifies a KubernetesSoftwareConfig message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a KubernetesSoftwareConfig message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns KubernetesSoftwareConfig
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.dataproc.v1.KubernetesSoftwareConfig;

                    /**
                     * Creates a plain object from a KubernetesSoftwareConfig message. Also converts values to other types if specified.
                     * @param message KubernetesSoftwareConfig
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.dataproc.v1.KubernetesSoftwareConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this KubernetesSoftwareConfig to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a GkeNodePoolTarget. */
                interface IGkeNodePoolTarget {

                    /** GkeNodePoolTarget nodePool */
                    nodePool?: (string|null);

                    /** GkeNodePoolTarget roles */
                    roles?: (google.cloud.dataproc.v1.GkeNodePoolTarget.Role[]|null);

                    /** GkeNodePoolTarget nodePoolConfig */
                    nodePoolConfig?: (google.cloud.dataproc.v1.IGkeNodePoolConfig|null);
                }

                /** Represents a GkeNodePoolTarget. */
                class GkeNodePoolTarget implements IGkeNodePoolTarget {

                    /**
                     * Constructs a new GkeNodePoolTarget.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.dataproc.v1.IGkeNodePoolTarget);

                    /** GkeNodePoolTarget nodePool. */
                    public nodePool: string;

                    /** GkeNodePoolTarget roles. */
                    public roles: google.cloud.dataproc.v1.GkeNodePoolTarget.Role[];

                    /** GkeNodePoolTarget nodePoolConfig. */
                    public nodePoolConfig?: (google.cloud.dataproc.v1.IGkeNodePoolConfig|null);

                    /**
                     * Creates a new GkeNodePoolTarget instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GkeNodePoolTarget instance
                     */
                    public static create(properties?: google.cloud.dataproc.v1.IGkeNodePoolTarget): google.cloud.dataproc.v1.GkeNodePoolTarget;

                    /**
                     * Encodes the specified GkeNodePoolTarget message. Does not implicitly {@link google.cloud.dataproc.v1.GkeNodePoolTarget.verify|verify} messages.
                     * @param message GkeNodePoolTarget message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.dataproc.v1.IGkeNodePoolTarget, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GkeNodePoolTarget message, length delimited. Does not implicitly {@link google.cloud.dataproc.v1.GkeNodePoolTarget.verify|verify} messages.
                     * @param message GkeNodePoolTarget message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.dataproc.v1.IGkeNodePoolTarget, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GkeNodePoolTarget message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GkeNodePoolTarget
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.dataproc.v1.GkeNodePoolTarget;

                    /**
                     * Decodes a GkeNodePoolTarget message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GkeNodePoolTarget
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.dataproc.v1.GkeNodePoolTarget;

                    /**
                     * Verifies a GkeNodePoolTarget message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GkeNodePoolTarget message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GkeNodePoolTarget
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.dataproc.v1.GkeNodePoolTarget;

                    /**
                     * Creates a plain object from a GkeNodePoolTarget message. Also converts values to other types if specified.
                     * @param message GkeNodePoolTarget
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.dataproc.v1.GkeNodePoolTarget, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GkeNodePoolTarget to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace GkeNodePoolTarget {

                    /** Role enum. */
                    enum Role {
                        ROLE_UNSPECIFIED = 0,
                        DEFAULT = 1,
                        CONTROLLER = 2,
                        SPARK_DRIVER = 3,
                        SPARK_EXECUTOR = 4
                    }
                }

                /** Properties of a GkeNodePoolConfig. */
                interface IGkeNodePoolConfig {

                    /** GkeNodePoolConfig config */
                    config?: (google.cloud.dataproc.v1.GkeNodePoolConfig.IGkeNodeConfig|null);

                    /** GkeNodePoolConfig locations */
                    locations?: (string[]|null);

                    /** GkeNodePoolConfig autoscaling */
                    autoscaling?: (google.cloud.dataproc.v1.GkeNodePoolConfig.IGkeNodePoolAutoscalingConfig|null);
                }

                /** Represents a GkeNodePoolConfig. */
                class GkeNodePoolConfig implements IGkeNodePoolConfig {

                    /**
                     * Constructs a new GkeNodePoolConfig.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.dataproc.v1.IGkeNodePoolConfig);

                    /** GkeNodePoolConfig config. */
                    public config?: (google.cloud.dataproc.v1.GkeNodePoolConfig.IGkeNodeConfig|null);

                    /** GkeNodePoolConfig locations. */
                    public locations: string[];

                    /** GkeNodePoolConfig autoscaling. */
                    public autoscaling?: (google.cloud.dataproc.v1.GkeNodePoolConfig.IGkeNodePoolAutoscalingConfig|null);

                    /**
                     * Creates a new GkeNodePoolConfig instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GkeNodePoolConfig instance
                     */
                    public static create(properties?: google.cloud.dataproc.v1.IGkeNodePoolConfig): google.cloud.dataproc.v1.GkeNodePoolConfig;

                    /**
                     * Encodes the specified GkeNodePoolConfig message. Does not implicitly {@link google.cloud.dataproc.v1.GkeNodePoolConfig.verify|verify} messages.
                     * @param message GkeNodePoolConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.dataproc.v1.IGkeNodePoolConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GkeNodePoolConfig message, length delimited. Does not implicitly {@link google.cloud.dataproc.v1.GkeNodePoolConfig.verify|verify} messages.
                     * @param message GkeNodePoolConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.dataproc.v1.IGkeNodePoolConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GkeNodePoolConfig message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GkeNodePoolConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.dataproc.v1.GkeNodePoolConfig;

                    /**
                     * Decodes a GkeNodePoolConfig message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GkeNodePoolConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.dataproc.v1.GkeNodePoolConfig;

                    /**
                     * Verifies a GkeNodePoolConfig message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GkeNodePoolConfig message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GkeNodePoolConfig
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.dataproc.v1.GkeNodePoolConfig;

                    /**
                     * Creates a plain object from a GkeNodePoolConfig message. Also converts values to other types if specified.
                     * @param message GkeNodePoolConfig
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.dataproc.v1.GkeNodePoolConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GkeNodePoolConfig to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace GkeNodePoolConfig {

                    /** Properties of a GkeNodeConfig. */
                    interface IGkeNodeConfig {

                        /** GkeNodeConfig machineType */
                        machineType?: (string|null);

                        /** GkeNodeConfig preemptible */
                        preemptible?: (boolean|null);

                        /** GkeNodeConfig localSsdCount */
                        localSsdCount?: (number|null);

                        /** GkeNodeConfig accelerators */
                        accelerators?: (google.cloud.dataproc.v1.GkeNodePoolConfig.IGkeNodePoolAcceleratorConfig[]|null);

                        /** GkeNodeConfig minCpuPlatform */
                        minCpuPlatform?: (string|null);
                    }

                    /** Represents a GkeNodeConfig. */
                    class GkeNodeConfig implements IGkeNodeConfig {

                        /**
                         * Constructs a new GkeNodeConfig.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.dataproc.v1.GkeNodePoolConfig.IGkeNodeConfig);

                        /** GkeNodeConfig machineType. */
                        public machineType: string;

                        /** GkeNodeConfig preemptible. */
                        public preemptible: boolean;

                        /** GkeNodeConfig localSsdCount. */
                        public localSsdCount: number;

                        /** GkeNodeConfig accelerators. */
                        public accelerators: google.cloud.dataproc.v1.GkeNodePoolConfig.IGkeNodePoolAcceleratorConfig[];

                        /** GkeNodeConfig minCpuPlatform. */
                        public minCpuPlatform: string;

                        /**
                         * Creates a new GkeNodeConfig instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns GkeNodeConfig instance
                         */
                        public static create(properties?: google.cloud.dataproc.v1.GkeNodePoolConfig.IGkeNodeConfig): google.cloud.dataproc.v1.GkeNodePoolConfig.GkeNodeConfig;

                        /**
                         * Encodes the specified GkeNodeConfig message. Does not implicitly {@link google.cloud.dataproc.v1.GkeNodePoolConfig.GkeNodeConfig.verify|verify} messages.
                         * @param message GkeNodeConfig message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.dataproc.v1.GkeNodePoolConfig.IGkeNodeConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified GkeNodeConfig message, length delimited. Does not implicitly {@link google.cloud.dataproc.v1.GkeNodePoolConfig.GkeNodeConfig.verify|verify} messages.
                         * @param message GkeNodeConfig message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.dataproc.v1.GkeNodePoolConfig.IGkeNodeConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a GkeNodeConfig message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns GkeNodeConfig
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.dataproc.v1.GkeNodePoolConfig.GkeNodeConfig;

                        /**
                         * Decodes a GkeNodeConfig message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns GkeNodeConfig
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.dataproc.v1.GkeNodePoolConfig.GkeNodeConfig;

                        /**
                         * Verifies a GkeNodeConfig message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a GkeNodeConfig message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns GkeNodeConfig
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.dataproc.v1.GkeNodePoolConfig.GkeNodeConfig;

                        /**
                         * Creates a plain object from a GkeNodeConfig message. Also converts values to other types if specified.
                         * @param message GkeNodeConfig
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.dataproc.v1.GkeNodePoolConfig.GkeNodeConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this GkeNodeConfig to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of a GkeNodePoolAcceleratorConfig. */
                    interface IGkeNodePoolAcceleratorConfig {

                        /** GkeNodePoolAcceleratorConfig acceleratorCount */
                        acceleratorCount?: (number|Long|string|null);

                        /** GkeNodePoolAcceleratorConfig acceleratorType */
                        acceleratorType?: (string|null);
                    }

                    /** Represents a GkeNodePoolAcceleratorConfig. */
                    class GkeNodePoolAcceleratorConfig implements IGkeNodePoolAcceleratorConfig {

                        /**
                         * Constructs a new GkeNodePoolAcceleratorConfig.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.dataproc.v1.GkeNodePoolConfig.IGkeNodePoolAcceleratorConfig);

                        /** GkeNodePoolAcceleratorConfig acceleratorCount. */
                        public acceleratorCount: (number|Long|string);

                        /** GkeNodePoolAcceleratorConfig acceleratorType. */
                        public acceleratorType: string;

                        /**
                         * Creates a new GkeNodePoolAcceleratorConfig instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns GkeNodePoolAcceleratorConfig instance
                         */
                        public static create(properties?: google.cloud.dataproc.v1.GkeNodePoolConfig.IGkeNodePoolAcceleratorConfig): google.cloud.dataproc.v1.GkeNodePoolConfig.GkeNodePoolAcceleratorConfig;

                        /**
                         * Encodes the specified GkeNodePoolAcceleratorConfig message. Does not implicitly {@link google.cloud.dataproc.v1.GkeNodePoolConfig.GkeNodePoolAcceleratorConfig.verify|verify} messages.
                         * @param message GkeNodePoolAcceleratorConfig message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.dataproc.v1.GkeNodePoolConfig.IGkeNodePoolAcceleratorConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified GkeNodePoolAcceleratorConfig message, length delimited. Does not implicitly {@link google.cloud.dataproc.v1.GkeNodePoolConfig.GkeNodePoolAcceleratorConfig.verify|verify} messages.
                         * @param message GkeNodePoolAcceleratorConfig message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.dataproc.v1.GkeNodePoolConfig.IGkeNodePoolAcceleratorConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a GkeNodePoolAcceleratorConfig message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns GkeNodePoolAcceleratorConfig
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.dataproc.v1.GkeNodePoolConfig.GkeNodePoolAcceleratorConfig;

                        /**
                         * Decodes a GkeNodePoolAcceleratorConfig message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns GkeNodePoolAcceleratorConfig
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.dataproc.v1.GkeNodePoolConfig.GkeNodePoolAcceleratorConfig;

                        /**
                         * Verifies a GkeNodePoolAcceleratorConfig message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a GkeNodePoolAcceleratorConfig message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns GkeNodePoolAcceleratorConfig
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.dataproc.v1.GkeNodePoolConfig.GkeNodePoolAcceleratorConfig;

                        /**
                         * Creates a plain object from a GkeNodePoolAcceleratorConfig message. Also converts values to other types if specified.
                         * @param message GkeNodePoolAcceleratorConfig
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.dataproc.v1.GkeNodePoolConfig.GkeNodePoolAcceleratorConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this GkeNodePoolAcceleratorConfig to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of a GkeNodePoolAutoscalingConfig. */
                    interface IGkeNodePoolAutoscalingConfig {

                        /** GkeNodePoolAutoscalingConfig minNodeCount */
                        minNodeCount?: (number|null);

                        /** GkeNodePoolAutoscalingConfig maxNodeCount */
                        maxNodeCount?: (number|null);
                    }

                    /** Represents a GkeNodePoolAutoscalingConfig. */
                    class GkeNodePoolAutoscalingConfig implements IGkeNodePoolAutoscalingConfig {

                        /**
                         * Constructs a new GkeNodePoolAutoscalingConfig.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.dataproc.v1.GkeNodePoolConfig.IGkeNodePoolAutoscalingConfig);

                        /** GkeNodePoolAutoscalingConfig minNodeCount. */
                        public minNodeCount: number;

                        /** GkeNodePoolAutoscalingConfig maxNodeCount. */
                        public maxNodeCount: number;

                        /**
                         * Creates a new GkeNodePoolAutoscalingConfig instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns GkeNodePoolAutoscalingConfig instance
                         */
                        public static create(properties?: google.cloud.dataproc.v1.GkeNodePoolConfig.IGkeNodePoolAutoscalingConfig): google.cloud.dataproc.v1.GkeNodePoolConfig.GkeNodePoolAutoscalingConfig;

                        /**
                         * Encodes the specified GkeNodePoolAutoscalingConfig message. Does not implicitly {@link google.cloud.dataproc.v1.GkeNodePoolConfig.GkeNodePoolAutoscalingConfig.verify|verify} messages.
                         * @param message GkeNodePoolAutoscalingConfig message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.dataproc.v1.GkeNodePoolConfig.IGkeNodePoolAutoscalingConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified GkeNodePoolAutoscalingConfig message, length delimited. Does not implicitly {@link google.cloud.dataproc.v1.GkeNodePoolConfig.GkeNodePoolAutoscalingConfig.verify|verify} messages.
                         * @param message GkeNodePoolAutoscalingConfig message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.dataproc.v1.GkeNodePoolConfig.IGkeNodePoolAutoscalingConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a GkeNodePoolAutoscalingConfig message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns GkeNodePoolAutoscalingConfig
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.dataproc.v1.GkeNodePoolConfig.GkeNodePoolAutoscalingConfig;

                        /**
                         * Decodes a GkeNodePoolAutoscalingConfig message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns GkeNodePoolAutoscalingConfig
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.dataproc.v1.GkeNodePoolConfig.GkeNodePoolAutoscalingConfig;

                        /**
                         * Verifies a GkeNodePoolAutoscalingConfig message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a GkeNodePoolAutoscalingConfig message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns GkeNodePoolAutoscalingConfig
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.dataproc.v1.GkeNodePoolConfig.GkeNodePoolAutoscalingConfig;

                        /**
                         * Creates a plain object from a GkeNodePoolAutoscalingConfig message. Also converts values to other types if specified.
                         * @param message GkeNodePoolAutoscalingConfig
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.dataproc.v1.GkeNodePoolConfig.GkeNodePoolAutoscalingConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this GkeNodePoolAutoscalingConfig to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }
                }

                /** Component enum. */
                enum Component {
                    COMPONENT_UNSPECIFIED = 0,
                    ANACONDA = 5,
                    DOCKER = 13,
                    DRUID = 9,
                    FLINK = 14,
                    HBASE = 11,
                    HIVE_WEBHCAT = 3,
                    JUPYTER = 1,
                    PRESTO = 6,
                    RANGER = 12,
                    SOLR = 10,
                    ZEPPELIN = 4,
                    ZOOKEEPER = 8
                }

                /** FailureAction enum. */
                enum FailureAction {
                    FAILURE_ACTION_UNSPECIFIED = 0,
                    NO_ACTION = 1,
                    DELETE = 2
                }

                /** Represents a ClusterController */
                class ClusterController extends $protobuf.rpc.Service {

                    /**
                     * Constructs a new ClusterController service.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     */
                    constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

                    /**
                     * Creates new ClusterController service using the specified rpc implementation.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     * @returns RPC service. Useful where requests and/or responses are streamed.
                     */
                    public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): ClusterController;

                    /**
                     * Calls CreateCluster.
                     * @param request CreateClusterRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public createCluster(request: google.cloud.dataproc.v1.ICreateClusterRequest, callback: google.cloud.dataproc.v1.ClusterController.CreateClusterCallback): void;

                    /**
                     * Calls CreateCluster.
                     * @param request CreateClusterRequest message or plain object
                     * @returns Promise
                     */
                    public createCluster(request: google.cloud.dataproc.v1.ICreateClusterRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls UpdateCluster.
                     * @param request UpdateClusterRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public updateCluster(request: google.cloud.dataproc.v1.IUpdateClusterRequest, callback: google.cloud.dataproc.v1.ClusterController.UpdateClusterCallback): void;

                    /**
                     * Calls UpdateCluster.
                     * @param request UpdateClusterRequest message or plain object
                     * @returns Promise
                     */
                    public updateCluster(request: google.cloud.dataproc.v1.IUpdateClusterRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls StopCluster.
                     * @param request StopClusterRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public stopCluster(request: google.cloud.dataproc.v1.IStopClusterRequest, callback: google.cloud.dataproc.v1.ClusterController.StopClusterCallback): void;

                    /**
                     * Calls StopCluster.
                     * @param request StopClusterRequest message or plain object
                     * @returns Promise
                     */
                    public stopCluster(request: google.cloud.dataproc.v1.IStopClusterRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls StartCluster.
                     * @param request StartClusterRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public startCluster(request: google.cloud.dataproc.v1.IStartClusterRequest, callback: google.cloud.dataproc.v1.ClusterController.StartClusterCallback): void;

                    /**
                     * Calls StartCluster.
                     * @param request StartClusterRequest message or plain object
                     * @returns Promise
                     */
                    public startCluster(request: google.cloud.dataproc.v1.IStartClusterRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls DeleteCluster.
                     * @param request DeleteClusterRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public deleteCluster(request: google.cloud.dataproc.v1.IDeleteClusterRequest, callback: google.cloud.dataproc.v1.ClusterController.DeleteClusterCallback): void;

                    /**
                     * Calls DeleteCluster.
                     * @param request DeleteClusterRequest message or plain object
                     * @returns Promise
                     */
                    public deleteCluster(request: google.cloud.dataproc.v1.IDeleteClusterRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls GetCluster.
                     * @param request GetClusterRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Cluster
                     */
                    public getCluster(request: google.cloud.dataproc.v1.IGetClusterRequest, callback: google.cloud.dataproc.v1.ClusterController.GetClusterCallback): void;

                    /**
                     * Calls GetCluster.
                     * @param request GetClusterRequest message or plain object
                     * @returns Promise
                     */
                    public getCluster(request: google.cloud.dataproc.v1.IGetClusterRequest): Promise<google.cloud.dataproc.v1.Cluster>;

                    /**
                     * Calls ListClusters.
                     * @param request ListClustersRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListClustersResponse
                     */
                    public listClusters(request: google.cloud.dataproc.v1.IListClustersRequest, callback: google.cloud.dataproc.v1.ClusterController.ListClustersCallback): void;

                    /**
                     * Calls ListClusters.
                     * @param request ListClustersRequest message or plain object
                     * @returns Promise
                     */
                    public listClusters(request: google.cloud.dataproc.v1.IListClustersRequest): Promise<google.cloud.dataproc.v1.ListClustersResponse>;

                    /**
                     * Calls DiagnoseCluster.
                     * @param request DiagnoseClusterRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public diagnoseCluster(request: google.cloud.dataproc.v1.IDiagnoseClusterRequest, callback: google.cloud.dataproc.v1.ClusterController.DiagnoseClusterCallback): void;

                    /**
                     * Calls DiagnoseCluster.
                     * @param request DiagnoseClusterRequest message or plain object
                     * @returns Promise
                     */
                    public diagnoseCluster(request: google.cloud.dataproc.v1.IDiagnoseClusterRequest): Promise<google.longrunning.Operation>;
                }

                namespace ClusterController {

                    /**
                     * Callback as used by {@link google.cloud.dataproc.v1.ClusterController#createCluster}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type CreateClusterCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.dataproc.v1.ClusterController#updateCluster}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type UpdateClusterCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.dataproc.v1.ClusterController#stopCluster}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type StopClusterCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.dataproc.v1.ClusterController#startCluster}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type StartClusterCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.dataproc.v1.ClusterController#deleteCluster}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type DeleteClusterCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.dataproc.v1.ClusterController#getCluster}.
                     * @param error Error, if any
                     * @param [response] Cluster
                     */
                    type GetClusterCallback = (error: (Error|null), response?: google.cloud.dataproc.v1.Cluster) => void;

                    /**
                     * Callback as used by {@link google.cloud.dataproc.v1.ClusterController#listClusters}.
                     * @param error Error, if any
                     * @param [response] ListClustersResponse
                     */
                    type ListClustersCallback = (error: (Error|null), response?: google.cloud.dataproc.v1.ListClustersResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.dataproc.v1.ClusterController#diagnoseCluster}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type DiagnoseClusterCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;
                }

                /** Properties of a Cluster. */
                interface ICluster {

                    /** Cluster projectId */
                    projectId?: (string|null);

                    /** Cluster clusterName */
                    clusterName?: (string|null);

                    /** Cluster config */
                    config?: (google.cloud.dataproc.v1.IClusterConfig|null);

                    /** Cluster virtualClusterConfig */
                    virtualClusterConfig?: (google.cloud.dataproc.v1.IVirtualClusterConfig|null);

                    /** Cluster labels */
                    labels?: ({ [k: string]: string }|null);

                    /** Cluster status */
                    status?: (google.cloud.dataproc.v1.IClusterStatus|null);

                    /** Cluster statusHistory */
                    statusHistory?: (google.cloud.dataproc.v1.IClusterStatus[]|null);

                    /** Cluster clusterUuid */
                    clusterUuid?: (string|null);

                    /** Cluster metrics */
                    metrics?: (google.cloud.dataproc.v1.IClusterMetrics|null);
                }

                /** Represents a Cluster. */
                class Cluster implements ICluster {

                    /**
                     * Constructs a new Cluster.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.dataproc.v1.ICluster);

                    /** Cluster projectId. */
                    public projectId: string;

                    /** Cluster clusterName. */
                    public clusterName: string;

                    /** Cluster config. */
                    public config?: (google.cloud.dataproc.v1.IClusterConfig|null);

                    /** Cluster virtualClusterConfig. */
                    public virtualClusterConfig?: (google.cloud.dataproc.v1.IVirtualClusterConfig|null);

                    /** Cluster labels. */
                    public labels: { [k: string]: string };

                    /** Cluster status. */
                    public status?: (google.cloud.dataproc.v1.IClusterStatus|null);

                    /** Cluster statusHistory. */
                    public statusHistory: google.cloud.dataproc.v1.IClusterStatus[];

                    /** Cluster clusterUuid. */
                    public clusterUuid: string;

                    /** Cluster metrics. */
                    public metrics?: (google.cloud.dataproc.v1.IClusterMetrics|null);

                    /**
                     * Creates a new Cluster instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Cluster instance
                     */
                    public static create(properties?: google.cloud.dataproc.v1.ICluster): google.cloud.dataproc.v1.Cluster;

                    /**
                     * Encodes the specified Cluster message. Does not implicitly {@link google.cloud.dataproc.v1.Cluster.verify|verify} messages.
                     * @param message Cluster message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.dataproc.v1.ICluster, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Cluster message, length delimited. Does not implicitly {@link google.cloud.dataproc.v1.Cluster.verify|verify} messages.
                     * @param message Cluster message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.dataproc.v1.ICluster, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Cluster message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Cluster
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.dataproc.v1.Cluster;

                    /**
                     * Decodes a Cluster message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Cluster
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.dataproc.v1.Cluster;

                    /**
                     * Verifies a Cluster message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Cluster message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Cluster
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.dataproc.v1.Cluster;

                    /**
                     * Creates a plain object from a Cluster message. Also converts values to other types if specified.
                     * @param message Cluster
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.dataproc.v1.Cluster, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Cluster to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ClusterConfig. */
                interface IClusterConfig {

                    /** ClusterConfig configBucket */
                    configBucket?: (string|null);

                    /** ClusterConfig tempBucket */
                    tempBucket?: (string|null);

                    /** ClusterConfig gceClusterConfig */
                    gceClusterConfig?: (google.cloud.dataproc.v1.IGceClusterConfig|null);

                    /** ClusterConfig masterConfig */
                    masterConfig?: (google.cloud.dataproc.v1.IInstanceGroupConfig|null);

                    /** ClusterConfig workerConfig */
                    workerConfig?: (google.cloud.dataproc.v1.IInstanceGroupConfig|null);

                    /** ClusterConfig secondaryWorkerConfig */
                    secondaryWorkerConfig?: (google.cloud.dataproc.v1.IInstanceGroupConfig|null);

                    /** ClusterConfig softwareConfig */
                    softwareConfig?: (google.cloud.dataproc.v1.ISoftwareConfig|null);

                    /** ClusterConfig initializationActions */
                    initializationActions?: (google.cloud.dataproc.v1.INodeInitializationAction[]|null);

                    /** ClusterConfig encryptionConfig */
                    encryptionConfig?: (google.cloud.dataproc.v1.IEncryptionConfig|null);

                    /** ClusterConfig autoscalingConfig */
                    autoscalingConfig?: (google.cloud.dataproc.v1.IAutoscalingConfig|null);

                    /** ClusterConfig securityConfig */
                    securityConfig?: (google.cloud.dataproc.v1.ISecurityConfig|null);

                    /** ClusterConfig lifecycleConfig */
                    lifecycleConfig?: (google.cloud.dataproc.v1.ILifecycleConfig|null);

                    /** ClusterConfig endpointConfig */
                    endpointConfig?: (google.cloud.dataproc.v1.IEndpointConfig|null);

                    /** ClusterConfig metastoreConfig */
                    metastoreConfig?: (google.cloud.dataproc.v1.IMetastoreConfig|null);
                }

                /** Represents a ClusterConfig. */
                class ClusterConfig implements IClusterConfig {

                    /**
                     * Constructs a new ClusterConfig.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.dataproc.v1.IClusterConfig);

                    /** ClusterConfig configBucket. */
                    public configBucket: string;

                    /** ClusterConfig tempBucket. */
                    public tempBucket: string;

                    /** ClusterConfig gceClusterConfig. */
                    public gceClusterConfig?: (google.cloud.dataproc.v1.IGceClusterConfig|null);

                    /** ClusterConfig masterConfig. */
                    public masterConfig?: (google.cloud.dataproc.v1.IInstanceGroupConfig|null);

                    /** ClusterConfig workerConfig. */
                    public workerConfig?: (google.cloud.dataproc.v1.IInstanceGroupConfig|null);

                    /** ClusterConfig secondaryWorkerConfig. */
                    public secondaryWorkerConfig?: (google.cloud.dataproc.v1.IInstanceGroupConfig|null);

                    /** ClusterConfig softwareConfig. */
                    public softwareConfig?: (google.cloud.dataproc.v1.ISoftwareConfig|null);

                    /** ClusterConfig initializationActions. */
                    public initializationActions: google.cloud.dataproc.v1.INodeInitializationAction[];

                    /** ClusterConfig encryptionConfig. */
                    public encryptionConfig?: (google.cloud.dataproc.v1.IEncryptionConfig|null);

                    /** ClusterConfig autoscalingConfig. */
                    public autoscalingConfig?: (google.cloud.dataproc.v1.IAutoscalingConfig|null);

                    /** ClusterConfig securityConfig. */
                    public securityConfig?: (google.cloud.dataproc.v1.ISecurityConfig|null);

                    /** ClusterConfig lifecycleConfig. */
                    public lifecycleConfig?: (google.cloud.dataproc.v1.ILifecycleConfig|null);

                    /** ClusterConfig endpointConfig. */
                    public endpointConfig?: (google.cloud.dataproc.v1.IEndpointConfig|null);

                    /** ClusterConfig metastoreConfig. */
                    public metastoreConfig?: (google.cloud.dataproc.v1.IMetastoreConfig|null);

                    /**
                     * Creates a new ClusterConfig instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ClusterConfig instance
                     */
                    public static create(properties?: google.cloud.dataproc.v1.IClusterConfig): google.cloud.dataproc.v1.ClusterConfig;

                    /**
                     * Encodes the specified ClusterConfig message. Does not implicitly {@link google.cloud.dataproc.v1.ClusterConfig.verify|verify} messages.
                     * @param message ClusterConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.dataproc.v1.IClusterConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ClusterConfig message, length delimited. Does not implicitly {@link google.cloud.dataproc.v1.ClusterConfig.verify|verify} messages.
                     * @param message ClusterConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.dataproc.v1.IClusterConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ClusterConfig message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ClusterConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.dataproc.v1.ClusterConfig;

                    /**
                     * Decodes a ClusterConfig message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ClusterConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.dataproc.v1.ClusterConfig;

                    /**
                     * Verifies a ClusterConfig message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ClusterConfig message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ClusterConfig
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.dataproc.v1.ClusterConfig;

                    /**
                     * Creates a plain object from a ClusterConfig message. Also converts values to other types if specified.
                     * @param message ClusterConfig
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.dataproc.v1.ClusterConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ClusterConfig to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a VirtualClusterConfig. */
                interface IVirtualClusterConfig {

                    /** VirtualClusterConfig stagingBucket */
                    stagingBucket?: (string|null);

                    /** VirtualClusterConfig kubernetesClusterConfig */
                    kubernetesClusterConfig?: (google.cloud.dataproc.v1.IKubernetesClusterConfig|null);

                    /** VirtualClusterConfig auxiliaryServicesConfig */
                    auxiliaryServicesConfig?: (google.cloud.dataproc.v1.IAuxiliaryServicesConfig|null);
                }

                /** Represents a VirtualClusterConfig. */
                class VirtualClusterConfig implements IVirtualClusterConfig {

                    /**
                     * Constructs a new VirtualClusterConfig.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.dataproc.v1.IVirtualClusterConfig);

                    /** VirtualClusterConfig stagingBucket. */
                    public stagingBucket: string;

                    /** VirtualClusterConfig kubernetesClusterConfig. */
                    public kubernetesClusterConfig?: (google.cloud.dataproc.v1.IKubernetesClusterConfig|null);

                    /** VirtualClusterConfig auxiliaryServicesConfig. */
                    public auxiliaryServicesConfig?: (google.cloud.dataproc.v1.IAuxiliaryServicesConfig|null);

                    /** VirtualClusterConfig infrastructureConfig. */
                    public infrastructureConfig?: "kubernetesClusterConfig";

                    /**
                     * Creates a new VirtualClusterConfig instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns VirtualClusterConfig instance
                     */
                    public static create(properties?: google.cloud.dataproc.v1.IVirtualClusterConfig): google.cloud.dataproc.v1.VirtualClusterConfig;

                    /**
                     * Encodes the specified VirtualClusterConfig message. Does not implicitly {@link google.cloud.dataproc.v1.VirtualClusterConfig.verify|verify} messages.
                     * @param message VirtualClusterConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.dataproc.v1.IVirtualClusterConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified VirtualClusterConfig message, length delimited. Does not implicitly {@link google.cloud.dataproc.v1.VirtualClusterConfig.verify|verify} messages.
                     * @param message VirtualClusterConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.dataproc.v1.IVirtualClusterConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a VirtualClusterConfig message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns VirtualClusterConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.dataproc.v1.VirtualClusterConfig;

                    /**
                     * Decodes a VirtualClusterConfig message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns VirtualClusterConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.dataproc.v1.VirtualClusterConfig;

                    /**
                     * Verifies a VirtualClusterConfig message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a VirtualClusterConfig message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns VirtualClusterConfig
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.dataproc.v1.VirtualClusterConfig;

                    /**
                     * Creates a plain object from a VirtualClusterConfig message. Also converts values to other types if specified.
                     * @param message VirtualClusterConfig
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.dataproc.v1.VirtualClusterConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this VirtualClusterConfig to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of an AuxiliaryServicesConfig. */
                interface IAuxiliaryServicesConfig {

                    /** AuxiliaryServicesConfig metastoreConfig */
                    metastoreConfig?: (google.cloud.dataproc.v1.IMetastoreConfig|null);

                    /** AuxiliaryServicesConfig sparkHistoryServerConfig */
                    sparkHistoryServerConfig?: (google.cloud.dataproc.v1.ISparkHistoryServerConfig|null);
                }

                /** Represents an AuxiliaryServicesConfig. */
                class AuxiliaryServicesConfig implements IAuxiliaryServicesConfig {

                    /**
                     * Constructs a new AuxiliaryServicesConfig.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.dataproc.v1.IAuxiliaryServicesConfig);

                    /** AuxiliaryServicesConfig metastoreConfig. */
                    public metastoreConfig?: (google.cloud.dataproc.v1.IMetastoreConfig|null);

                    /** AuxiliaryServicesConfig sparkHistoryServerConfig. */
                    public sparkHistoryServerConfig?: (google.cloud.dataproc.v1.ISparkHistoryServerConfig|null);

                    /**
                     * Creates a new AuxiliaryServicesConfig instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns AuxiliaryServicesConfig instance
                     */
                    public static create(properties?: google.cloud.dataproc.v1.IAuxiliaryServicesConfig): google.cloud.dataproc.v1.AuxiliaryServicesConfig;

                    /**
                     * Encodes the specified AuxiliaryServicesConfig message. Does not implicitly {@link google.cloud.dataproc.v1.AuxiliaryServicesConfig.verify|verify} messages.
                     * @param message AuxiliaryServicesConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.dataproc.v1.IAuxiliaryServicesConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified AuxiliaryServicesConfig message, length delimited. Does not implicitly {@link google.cloud.dataproc.v1.AuxiliaryServicesConfig.verify|verify} messages.
                     * @param message AuxiliaryServicesConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.dataproc.v1.IAuxiliaryServicesConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an AuxiliaryServicesConfig message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns AuxiliaryServicesConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.dataproc.v1.AuxiliaryServicesConfig;

                    /**
                     * Decodes an AuxiliaryServicesConfig message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns AuxiliaryServicesConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.dataproc.v1.AuxiliaryServicesConfig;

                    /**
                     * Verifies an AuxiliaryServicesConfig message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an AuxiliaryServicesConfig message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns AuxiliaryServicesConfig
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.dataproc.v1.AuxiliaryServicesConfig;

                    /**
                     * Creates a plain object from an AuxiliaryServicesConfig message. Also converts values to other types if specified.
                     * @param message AuxiliaryServicesConfig
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.dataproc.v1.AuxiliaryServicesConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this AuxiliaryServicesConfig to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of an EndpointConfig. */
                interface IEndpointConfig {

                    /** EndpointConfig httpPorts */
                    httpPorts?: ({ [k: string]: string }|null);

                    /** EndpointConfig enableHttpPortAccess */
                    enableHttpPortAccess?: (boolean|null);
                }

                /** Represents an EndpointConfig. */
                class EndpointConfig implements IEndpointConfig {

                    /**
                     * Constructs a new EndpointConfig.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.dataproc.v1.IEndpointConfig);

                    /** EndpointConfig httpPorts. */
                    public httpPorts: { [k: string]: string };

                    /** EndpointConfig enableHttpPortAccess. */
                    public enableHttpPortAccess: boolean;

                    /**
                     * Creates a new EndpointConfig instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns EndpointConfig instance
                     */
                    public static create(properties?: google.cloud.dataproc.v1.IEndpointConfig): google.cloud.dataproc.v1.EndpointConfig;

                    /**
                     * Encodes the specified EndpointConfig message. Does not implicitly {@link google.cloud.dataproc.v1.EndpointConfig.verify|verify} messages.
                     * @param message EndpointConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.dataproc.v1.IEndpointConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified EndpointConfig message, length delimited. Does not implicitly {@link google.cloud.dataproc.v1.EndpointConfig.verify|verify} messages.
                     * @param message EndpointConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.dataproc.v1.IEndpointConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an EndpointConfig message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns EndpointConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.dataproc.v1.EndpointConfig;

                    /**
                     * Decodes an EndpointConfig message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns EndpointConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.dataproc.v1.EndpointConfig;

                    /**
                     * Verifies an EndpointConfig message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an EndpointConfig message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns EndpointConfig
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.dataproc.v1.EndpointConfig;

                    /**
                     * Creates a plain object from an EndpointConfig message. Also converts values to other types if specified.
                     * @param message EndpointConfig
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.dataproc.v1.EndpointConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this EndpointConfig to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of an AutoscalingConfig. */
                interface IAutoscalingConfig {

                    /** AutoscalingConfig policyUri */
                    policyUri?: (string|null);
                }

                /** Represents an AutoscalingConfig. */
                class AutoscalingConfig implements IAutoscalingConfig {

                    /**
                     * Constructs a new AutoscalingConfig.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.dataproc.v1.IAutoscalingConfig);

                    /** AutoscalingConfig policyUri. */
                    public policyUri: string;

                    /**
                     * Creates a new AutoscalingConfig instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns AutoscalingConfig instance
                     */
                    public static create(properties?: google.cloud.dataproc.v1.IAutoscalingConfig): google.cloud.dataproc.v1.AutoscalingConfig;

                    /**
                     * Encodes the specified AutoscalingConfig message. Does not implicitly {@link google.cloud.dataproc.v1.AutoscalingConfig.verify|verify} messages.
                     * @param message AutoscalingConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.dataproc.v1.IAutoscalingConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified AutoscalingConfig message, length delimited. Does not implicitly {@link google.cloud.dataproc.v1.AutoscalingConfig.verify|verify} messages.
                     * @param message AutoscalingConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.dataproc.v1.IAutoscalingConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an AutoscalingConfig message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns AutoscalingConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.dataproc.v1.AutoscalingConfig;

                    /**
                     * Decodes an AutoscalingConfig message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns AutoscalingConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.dataproc.v1.AutoscalingConfig;

                    /**
                     * Verifies an AutoscalingConfig message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an AutoscalingConfig message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns AutoscalingConfig
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.dataproc.v1.AutoscalingConfig;

                    /**
                     * Creates a plain object from an AutoscalingConfig message. Also converts values to other types if specified.
                     * @param message AutoscalingConfig
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.dataproc.v1.AutoscalingConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this AutoscalingConfig to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of an EncryptionConfig. */
                interface IEncryptionConfig {

                    /** EncryptionConfig gcePdKmsKeyName */
                    gcePdKmsKeyName?: (string|null);
                }

                /** Represents an EncryptionConfig. */
                class EncryptionConfig implements IEncryptionConfig {

                    /**
                     * Constructs a new EncryptionConfig.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.dataproc.v1.IEncryptionConfig);

                    /** EncryptionConfig gcePdKmsKeyName. */
                    public gcePdKmsKeyName: string;

                    /**
                     * Creates a new EncryptionConfig instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns EncryptionConfig instance
                     */
                    public static create(properties?: google.cloud.dataproc.v1.IEncryptionConfig): google.cloud.dataproc.v1.EncryptionConfig;

                    /**
                     * Encodes the specified EncryptionConfig message. Does not implicitly {@link google.cloud.dataproc.v1.EncryptionConfig.verify|verify} messages.
                     * @param message EncryptionConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.dataproc.v1.IEncryptionConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified EncryptionConfig message, length delimited. Does not implicitly {@link google.cloud.dataproc.v1.EncryptionConfig.verify|verify} messages.
                     * @param message EncryptionConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.dataproc.v1.IEncryptionConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an EncryptionConfig message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns EncryptionConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.dataproc.v1.EncryptionConfig;

                    /**
                     * Decodes an EncryptionConfig message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns EncryptionConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.dataproc.v1.EncryptionConfig;

                    /**
                     * Verifies an EncryptionConfig message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an EncryptionConfig message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns EncryptionConfig
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.dataproc.v1.EncryptionConfig;

                    /**
                     * Creates a plain object from an EncryptionConfig message. Also converts values to other types if specified.
                     * @param message EncryptionConfig
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.dataproc.v1.EncryptionConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this EncryptionConfig to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a GceClusterConfig. */
                interface IGceClusterConfig {

                    /** GceClusterConfig zoneUri */
                    zoneUri?: (string|null);

                    /** GceClusterConfig networkUri */
                    networkUri?: (string|null);

                    /** GceClusterConfig subnetworkUri */
                    subnetworkUri?: (string|null);

                    /** GceClusterConfig internalIpOnly */
                    internalIpOnly?: (boolean|null);

                    /** GceClusterConfig privateIpv6GoogleAccess */
                    privateIpv6GoogleAccess?: (google.cloud.dataproc.v1.GceClusterConfig.PrivateIpv6GoogleAccess|keyof typeof google.cloud.dataproc.v1.GceClusterConfig.PrivateIpv6GoogleAccess|null);

                    /** GceClusterConfig serviceAccount */
                    serviceAccount?: (string|null);

                    /** GceClusterConfig serviceAccountScopes */
                    serviceAccountScopes?: (string[]|null);

                    /** GceClusterConfig tags */
                    tags?: (string[]|null);

                    /** GceClusterConfig metadata */
                    metadata?: ({ [k: string]: string }|null);

                    /** GceClusterConfig reservationAffinity */
                    reservationAffinity?: (google.cloud.dataproc.v1.IReservationAffinity|null);

                    /** GceClusterConfig nodeGroupAffinity */
                    nodeGroupAffinity?: (google.cloud.dataproc.v1.INodeGroupAffinity|null);

                    /** GceClusterConfig shieldedInstanceConfig */
                    shieldedInstanceConfig?: (google.cloud.dataproc.v1.IShieldedInstanceConfig|null);

                    /** GceClusterConfig confidentialInstanceConfig */
                    confidentialInstanceConfig?: (google.cloud.dataproc.v1.IConfidentialInstanceConfig|null);
                }

                /** Represents a GceClusterConfig. */
                class GceClusterConfig implements IGceClusterConfig {

                    /**
                     * Constructs a new GceClusterConfig.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.dataproc.v1.IGceClusterConfig);

                    /** GceClusterConfig zoneUri. */
                    public zoneUri: string;

                    /** GceClusterConfig networkUri. */
                    public networkUri: string;

                    /** GceClusterConfig subnetworkUri. */
                    public subnetworkUri: string;

                    /** GceClusterConfig internalIpOnly. */
                    public internalIpOnly: boolean;

                    /** GceClusterConfig privateIpv6GoogleAccess. */
                    public privateIpv6GoogleAccess: (google.cloud.dataproc.v1.GceClusterConfig.PrivateIpv6GoogleAccess|keyof typeof google.cloud.dataproc.v1.GceClusterConfig.PrivateIpv6GoogleAccess);

                    /** GceClusterConfig serviceAccount. */
                    public serviceAccount: string;

                    /** GceClusterConfig serviceAccountScopes. */
                    public serviceAccountScopes: string[];

                    /** GceClusterConfig tags. */
                    public tags: string[];

                    /** GceClusterConfig metadata. */
                    public metadata: { [k: string]: string };

                    /** GceClusterConfig reservationAffinity. */
                    public reservationAffinity?: (google.cloud.dataproc.v1.IReservationAffinity|null);

                    /** GceClusterConfig nodeGroupAffinity. */
                    public nodeGroupAffinity?: (google.cloud.dataproc.v1.INodeGroupAffinity|null);

                    /** GceClusterConfig shieldedInstanceConfig. */
                    public shieldedInstanceConfig?: (google.cloud.dataproc.v1.IShieldedInstanceConfig|null);

                    /** GceClusterConfig confidentialInstanceConfig. */
                    public confidentialInstanceConfig?: (google.cloud.dataproc.v1.IConfidentialInstanceConfig|null);

                    /**
                     * Creates a new GceClusterConfig instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GceClusterConfig instance
                     */
                    public static create(properties?: google.cloud.dataproc.v1.IGceClusterConfig): google.cloud.dataproc.v1.GceClusterConfig;

                    /**
                     * Encodes the specified GceClusterConfig message. Does not implicitly {@link google.cloud.dataproc.v1.GceClusterConfig.verify|verify} messages.
                     * @param message GceClusterConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.dataproc.v1.IGceClusterConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GceClusterConfig message, length delimited. Does not implicitly {@link google.cloud.dataproc.v1.GceClusterConfig.verify|verify} messages.
                     * @param message GceClusterConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.dataproc.v1.IGceClusterConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GceClusterConfig message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GceClusterConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.dataproc.v1.GceClusterConfig;

                    /**
                     * Decodes a GceClusterConfig message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GceClusterConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.dataproc.v1.GceClusterConfig;

                    /**
                     * Verifies a GceClusterConfig message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GceClusterConfig message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GceClusterConfig
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.dataproc.v1.GceClusterConfig;

                    /**
                     * Creates a plain object from a GceClusterConfig message. Also converts values to other types if specified.
                     * @param message GceClusterConfig
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.dataproc.v1.GceClusterConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GceClusterConfig to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace GceClusterConfig {

                    /** PrivateIpv6GoogleAccess enum. */
                    enum PrivateIpv6GoogleAccess {
                        PRIVATE_IPV6_GOOGLE_ACCESS_UNSPECIFIED = 0,
                        INHERIT_FROM_SUBNETWORK = 1,
                        OUTBOUND = 2,
                        BIDIRECTIONAL = 3
                    }
                }

                /** Properties of a NodeGroupAffinity. */
                interface INodeGroupAffinity {

                    /** NodeGroupAffinity nodeGroupUri */
                    nodeGroupUri?: (string|null);
                }

                /** Represents a NodeGroupAffinity. */
                class NodeGroupAffinity implements INodeGroupAffinity {

                    /**
                     * Constructs a new NodeGroupAffinity.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.dataproc.v1.INodeGroupAffinity);

                    /** NodeGroupAffinity nodeGroupUri. */
                    public nodeGroupUri: string;

                    /**
                     * Creates a new NodeGroupAffinity instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns NodeGroupAffinity instance
                     */
                    public static create(properties?: google.cloud.dataproc.v1.INodeGroupAffinity): google.cloud.dataproc.v1.NodeGroupAffinity;

                    /**
                     * Encodes the specified NodeGroupAffinity message. Does not implicitly {@link google.cloud.dataproc.v1.NodeGroupAffinity.verify|verify} messages.
                     * @param message NodeGroupAffinity message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.dataproc.v1.INodeGroupAffinity, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified NodeGroupAffinity message, length delimited. Does not implicitly {@link google.cloud.dataproc.v1.NodeGroupAffinity.verify|verify} messages.
                     * @param message NodeGroupAffinity message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.dataproc.v1.INodeGroupAffinity, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a NodeGroupAffinity message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns NodeGroupAffinity
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.dataproc.v1.NodeGroupAffinity;

                    /**
                     * Decodes a NodeGroupAffinity message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns NodeGroupAffinity
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.dataproc.v1.NodeGroupAffinity;

                    /**
                     * Verifies a NodeGroupAffinity message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a NodeGroupAffinity message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns NodeGroupAffinity
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.dataproc.v1.NodeGroupAffinity;

                    /**
                     * Creates a plain object from a NodeGroupAffinity message. Also converts values to other types if specified.
                     * @param message NodeGroupAffinity
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.dataproc.v1.NodeGroupAffinity, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this NodeGroupAffinity to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ShieldedInstanceConfig. */
                interface IShieldedInstanceConfig {

                    /** ShieldedInstanceConfig enableSecureBoot */
                    enableSecureBoot?: (boolean|null);

                    /** ShieldedInstanceConfig enableVtpm */
                    enableVtpm?: (boolean|null);

                    /** ShieldedInstanceConfig enableIntegrityMonitoring */
                    enableIntegrityMonitoring?: (boolean|null);
                }

                /** Represents a ShieldedInstanceConfig. */
                class ShieldedInstanceConfig implements IShieldedInstanceConfig {

                    /**
                     * Constructs a new ShieldedInstanceConfig.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.dataproc.v1.IShieldedInstanceConfig);

                    /** ShieldedInstanceConfig enableSecureBoot. */
                    public enableSecureBoot: boolean;

                    /** ShieldedInstanceConfig enableVtpm. */
                    public enableVtpm: boolean;

                    /** ShieldedInstanceConfig enableIntegrityMonitoring. */
                    public enableIntegrityMonitoring: boolean;

                    /**
                     * Creates a new ShieldedInstanceConfig instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ShieldedInstanceConfig instance
                     */
                    public static create(properties?: google.cloud.dataproc.v1.IShieldedInstanceConfig): google.cloud.dataproc.v1.ShieldedInstanceConfig;

                    /**
                     * Encodes the specified ShieldedInstanceConfig message. Does not implicitly {@link google.cloud.dataproc.v1.ShieldedInstanceConfig.verify|verify} messages.
                     * @param message ShieldedInstanceConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.dataproc.v1.IShieldedInstanceConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ShieldedInstanceConfig message, length delimited. Does not implicitly {@link google.cloud.dataproc.v1.ShieldedInstanceConfig.verify|verify} messages.
                     * @param message ShieldedInstanceConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.dataproc.v1.IShieldedInstanceConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ShieldedInstanceConfig message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ShieldedInstanceConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.dataproc.v1.ShieldedInstanceConfig;

                    /**
                     * Decodes a ShieldedInstanceConfig message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ShieldedInstanceConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.dataproc.v1.ShieldedInstanceConfig;

                    /**
                     * Verifies a ShieldedInstanceConfig message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ShieldedInstanceConfig message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ShieldedInstanceConfig
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.dataproc.v1.ShieldedInstanceConfig;

                    /**
                     * Creates a plain object from a ShieldedInstanceConfig message. Also converts values to other types if specified.
                     * @param message ShieldedInstanceConfig
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.dataproc.v1.ShieldedInstanceConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ShieldedInstanceConfig to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ConfidentialInstanceConfig. */
                interface IConfidentialInstanceConfig {

                    /** ConfidentialInstanceConfig enableConfidentialCompute */
                    enableConfidentialCompute?: (boolean|null);
                }

                /** Represents a ConfidentialInstanceConfig. */
                class ConfidentialInstanceConfig implements IConfidentialInstanceConfig {

                    /**
                     * Constructs a new ConfidentialInstanceConfig.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.dataproc.v1.IConfidentialInstanceConfig);

                    /** ConfidentialInstanceConfig enableConfidentialCompute. */
                    public enableConfidentialCompute: boolean;

                    /**
                     * Creates a new ConfidentialInstanceConfig instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ConfidentialInstanceConfig instance
                     */
                    public static create(properties?: google.cloud.dataproc.v1.IConfidentialInstanceConfig): google.cloud.dataproc.v1.ConfidentialInstanceConfig;

                    /**
                     * Encodes the specified ConfidentialInstanceConfig message. Does not implicitly {@link google.cloud.dataproc.v1.ConfidentialInstanceConfig.verify|verify} messages.
                     * @param message ConfidentialInstanceConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.dataproc.v1.IConfidentialInstanceConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ConfidentialInstanceConfig message, length delimited. Does not implicitly {@link google.cloud.dataproc.v1.ConfidentialInstanceConfig.verify|verify} messages.
                     * @param message ConfidentialInstanceConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.dataproc.v1.IConfidentialInstanceConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ConfidentialInstanceConfig message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ConfidentialInstanceConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.dataproc.v1.ConfidentialInstanceConfig;

                    /**
                     * Decodes a ConfidentialInstanceConfig message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ConfidentialInstanceConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.dataproc.v1.ConfidentialInstanceConfig;

                    /**
                     * Verifies a ConfidentialInstanceConfig message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ConfidentialInstanceConfig message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ConfidentialInstanceConfig
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.dataproc.v1.ConfidentialInstanceConfig;

                    /**
                     * Creates a plain object from a ConfidentialInstanceConfig message. Also converts values to other types if specified.
                     * @param message ConfidentialInstanceConfig
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.dataproc.v1.ConfidentialInstanceConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ConfidentialInstanceConfig to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of an InstanceGroupConfig. */
                interface IInstanceGroupConfig {

                    /** InstanceGroupConfig numInstances */
                    numInstances?: (number|null);

                    /** InstanceGroupConfig instanceNames */
                    instanceNames?: (string[]|null);

                    /** InstanceGroupConfig imageUri */
                    imageUri?: (string|null);

                    /** InstanceGroupConfig machineTypeUri */
                    machineTypeUri?: (string|null);

                    /** InstanceGroupConfig diskConfig */
                    diskConfig?: (google.cloud.dataproc.v1.IDiskConfig|null);

                    /** InstanceGroupConfig isPreemptible */
                    isPreemptible?: (boolean|null);

                    /** InstanceGroupConfig preemptibility */
                    preemptibility?: (google.cloud.dataproc.v1.InstanceGroupConfig.Preemptibility|keyof typeof google.cloud.dataproc.v1.InstanceGroupConfig.Preemptibility|null);

                    /** InstanceGroupConfig managedGroupConfig */
                    managedGroupConfig?: (google.cloud.dataproc.v1.IManagedGroupConfig|null);

                    /** InstanceGroupConfig accelerators */
                    accelerators?: (google.cloud.dataproc.v1.IAcceleratorConfig[]|null);

                    /** InstanceGroupConfig minCpuPlatform */
                    minCpuPlatform?: (string|null);
                }

                /** Represents an InstanceGroupConfig. */
                class InstanceGroupConfig implements IInstanceGroupConfig {

                    /**
                     * Constructs a new InstanceGroupConfig.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.dataproc.v1.IInstanceGroupConfig);

                    /** InstanceGroupConfig numInstances. */
                    public numInstances: number;

                    /** InstanceGroupConfig instanceNames. */
                    public instanceNames: string[];

                    /** InstanceGroupConfig imageUri. */
                    public imageUri: string;

                    /** InstanceGroupConfig machineTypeUri. */
                    public machineTypeUri: string;

                    /** InstanceGroupConfig diskConfig. */
                    public diskConfig?: (google.cloud.dataproc.v1.IDiskConfig|null);

                    /** InstanceGroupConfig isPreemptible. */
                    public isPreemptible: boolean;

                    /** InstanceGroupConfig preemptibility. */
                    public preemptibility: (google.cloud.dataproc.v1.InstanceGroupConfig.Preemptibility|keyof typeof google.cloud.dataproc.v1.InstanceGroupConfig.Preemptibility);

                    /** InstanceGroupConfig managedGroupConfig. */
                    public managedGroupConfig?: (google.cloud.dataproc.v1.IManagedGroupConfig|null);

                    /** InstanceGroupConfig accelerators. */
                    public accelerators: google.cloud.dataproc.v1.IAcceleratorConfig[];

                    /** InstanceGroupConfig minCpuPlatform. */
                    public minCpuPlatform: string;

                    /**
                     * Creates a new InstanceGroupConfig instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns InstanceGroupConfig instance
                     */
                    public static create(properties?: google.cloud.dataproc.v1.IInstanceGroupConfig): google.cloud.dataproc.v1.InstanceGroupConfig;

                    /**
                     * Encodes the specified InstanceGroupConfig message. Does not implicitly {@link google.cloud.dataproc.v1.InstanceGroupConfig.verify|verify} messages.
                     * @param message InstanceGroupConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.dataproc.v1.IInstanceGroupConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified InstanceGroupConfig message, length delimited. Does not implicitly {@link google.cloud.dataproc.v1.InstanceGroupConfig.verify|verify} messages.
                     * @param message InstanceGroupConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.dataproc.v1.IInstanceGroupConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an InstanceGroupConfig message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns InstanceGroupConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.dataproc.v1.InstanceGroupConfig;

                    /**
                     * Decodes an InstanceGroupConfig message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns InstanceGroupConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.dataproc.v1.InstanceGroupConfig;

                    /**
                     * Verifies an InstanceGroupConfig message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an InstanceGroupConfig message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns InstanceGroupConfig
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.dataproc.v1.InstanceGroupConfig;

                    /**
                     * Creates a plain object from an InstanceGroupConfig message. Also converts values to other types if specified.
                     * @param message InstanceGroupConfig
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.dataproc.v1.InstanceGroupConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this InstanceGroupConfig to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace InstanceGroupConfig {

                    /** Preemptibility enum. */
                    enum Preemptibility {
                        PREEMPTIBILITY_UNSPECIFIED = 0,
                        NON_PREEMPTIBLE = 1,
                        PREEMPTIBLE = 2
                    }
                }

                /** Properties of a ManagedGroupConfig. */
                interface IManagedGroupConfig {

                    /** ManagedGroupConfig instanceTemplateName */
                    instanceTemplateName?: (string|null);

                    /** ManagedGroupConfig instanceGroupManagerName */
                    instanceGroupManagerName?: (string|null);
                }

                /** Represents a ManagedGroupConfig. */
                class ManagedGroupConfig implements IManagedGroupConfig {

                    /**
                     * Constructs a new ManagedGroupConfig.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.dataproc.v1.IManagedGroupConfig);

                    /** ManagedGroupConfig instanceTemplateName. */
                    public instanceTemplateName: string;

                    /** ManagedGroupConfig instanceGroupManagerName. */
                    public instanceGroupManagerName: string;

                    /**
                     * Creates a new ManagedGroupConfig instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ManagedGroupConfig instance
                     */
                    public static create(properties?: google.cloud.dataproc.v1.IManagedGroupConfig): google.cloud.dataproc.v1.ManagedGroupConfig;

                    /**
                     * Encodes the specified ManagedGroupConfig message. Does not implicitly {@link google.cloud.dataproc.v1.ManagedGroupConfig.verify|verify} messages.
                     * @param message ManagedGroupConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.dataproc.v1.IManagedGroupConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ManagedGroupConfig message, length delimited. Does not implicitly {@link google.cloud.dataproc.v1.ManagedGroupConfig.verify|verify} messages.
                     * @param message ManagedGroupConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.dataproc.v1.IManagedGroupConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ManagedGroupConfig message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ManagedGroupConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.dataproc.v1.ManagedGroupConfig;

                    /**
                     * Decodes a ManagedGroupConfig message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ManagedGroupConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.dataproc.v1.ManagedGroupConfig;

                    /**
                     * Verifies a ManagedGroupConfig message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ManagedGroupConfig message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ManagedGroupConfig
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.dataproc.v1.ManagedGroupConfig;

                    /**
                     * Creates a plain object from a ManagedGroupConfig message. Also converts values to other types if specified.
                     * @param message ManagedGroupConfig
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.dataproc.v1.ManagedGroupConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ManagedGroupConfig to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of an AcceleratorConfig. */
                interface IAcceleratorConfig {

                    /** AcceleratorConfig acceleratorTypeUri */
                    acceleratorTypeUri?: (string|null);

                    /** AcceleratorConfig acceleratorCount */
                    acceleratorCount?: (number|null);
                }

                /** Represents an AcceleratorConfig. */
                class AcceleratorConfig implements IAcceleratorConfig {

                    /**
                     * Constructs a new AcceleratorConfig.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.dataproc.v1.IAcceleratorConfig);

                    /** AcceleratorConfig acceleratorTypeUri. */
                    public acceleratorTypeUri: string;

                    /** AcceleratorConfig acceleratorCount. */
                    public acceleratorCount: number;

                    /**
                     * Creates a new AcceleratorConfig instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns AcceleratorConfig instance
                     */
                    public static create(properties?: google.cloud.dataproc.v1.IAcceleratorConfig): google.cloud.dataproc.v1.AcceleratorConfig;

                    /**
                     * Encodes the specified AcceleratorConfig message. Does not implicitly {@link google.cloud.dataproc.v1.AcceleratorConfig.verify|verify} messages.
                     * @param message AcceleratorConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.dataproc.v1.IAcceleratorConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified AcceleratorConfig message, length delimited. Does not implicitly {@link google.cloud.dataproc.v1.AcceleratorConfig.verify|verify} messages.
                     * @param message AcceleratorConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.dataproc.v1.IAcceleratorConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an AcceleratorConfig message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns AcceleratorConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.dataproc.v1.AcceleratorConfig;

                    /**
                     * Decodes an AcceleratorConfig message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns AcceleratorConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.dataproc.v1.AcceleratorConfig;

                    /**
                     * Verifies an AcceleratorConfig message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an AcceleratorConfig message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns AcceleratorConfig
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.dataproc.v1.AcceleratorConfig;

                    /**
                     * Creates a plain object from an AcceleratorConfig message. Also converts values to other types if specified.
                     * @param message AcceleratorConfig
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.dataproc.v1.AcceleratorConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this AcceleratorConfig to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a DiskConfig. */
                interface IDiskConfig {

                    /** DiskConfig bootDiskType */
                    bootDiskType?: (string|null);

                    /** DiskConfig bootDiskSizeGb */
                    bootDiskSizeGb?: (number|null);

                    /** DiskConfig numLocalSsds */
                    numLocalSsds?: (number|null);

                    /** DiskConfig localSsdInterface */
                    localSsdInterface?: (string|null);
                }

                /** Represents a DiskConfig. */
                class DiskConfig implements IDiskConfig {

                    /**
                     * Constructs a new DiskConfig.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.dataproc.v1.IDiskConfig);

                    /** DiskConfig bootDiskType. */
                    public bootDiskType: string;

                    /** DiskConfig bootDiskSizeGb. */
                    public bootDiskSizeGb: number;

                    /** DiskConfig numLocalSsds. */
                    public numLocalSsds: number;

                    /** DiskConfig localSsdInterface. */
                    public localSsdInterface: string;

                    /**
                     * Creates a new DiskConfig instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DiskConfig instance
                     */
                    public static create(properties?: google.cloud.dataproc.v1.IDiskConfig): google.cloud.dataproc.v1.DiskConfig;

                    /**
                     * Encodes the specified DiskConfig message. Does not implicitly {@link google.cloud.dataproc.v1.DiskConfig.verify|verify} messages.
                     * @param message DiskConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.dataproc.v1.IDiskConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DiskConfig message, length delimited. Does not implicitly {@link google.cloud.dataproc.v1.DiskConfig.verify|verify} messages.
                     * @param message DiskConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.dataproc.v1.IDiskConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DiskConfig message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DiskConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.dataproc.v1.DiskConfig;

                    /**
                     * Decodes a DiskConfig message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DiskConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.dataproc.v1.DiskConfig;

                    /**
                     * Verifies a DiskConfig message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DiskConfig message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DiskConfig
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.dataproc.v1.DiskConfig;

                    /**
                     * Creates a plain object from a DiskConfig message. Also converts values to other types if specified.
                     * @param message DiskConfig
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.dataproc.v1.DiskConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DiskConfig to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a NodeInitializationAction. */
                interface INodeInitializationAction {

                    /** NodeInitializationAction executableFile */
                    executableFile?: (string|null);

                    /** NodeInitializationAction executionTimeout */
                    executionTimeout?: (google.protobuf.IDuration|null);
                }

                /** Represents a NodeInitializationAction. */
                class NodeInitializationAction implements INodeInitializationAction {

                    /**
                     * Constructs a new NodeInitializationAction.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.dataproc.v1.INodeInitializationAction);

                    /** NodeInitializationAction executableFile. */
                    public executableFile: string;

                    /** NodeInitializationAction executionTimeout. */
                    public executionTimeout?: (google.protobuf.IDuration|null);

                    /**
                     * Creates a new NodeInitializationAction instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns NodeInitializationAction instance
                     */
                    public static create(properties?: google.cloud.dataproc.v1.INodeInitializationAction): google.cloud.dataproc.v1.NodeInitializationAction;

                    /**
                     * Encodes the specified NodeInitializationAction message. Does not implicitly {@link google.cloud.dataproc.v1.NodeInitializationAction.verify|verify} messages.
                     * @param message NodeInitializationAction message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.dataproc.v1.INodeInitializationAction, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified NodeInitializationAction message, length delimited. Does not implicitly {@link google.cloud.dataproc.v1.NodeInitializationAction.verify|verify} messages.
                     * @param message NodeInitializationAction message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.dataproc.v1.INodeInitializationAction, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a NodeInitializationAction message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns NodeInitializationAction
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.dataproc.v1.NodeInitializationAction;

                    /**
                     * Decodes a NodeInitializationAction message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns NodeInitializationAction
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.dataproc.v1.NodeInitializationAction;

                    /**
                     * Verifies a NodeInitializationAction message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a NodeInitializationAction message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns NodeInitializationAction
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.dataproc.v1.NodeInitializationAction;

                    /**
                     * Creates a plain object from a NodeInitializationAction message. Also converts values to other types if specified.
                     * @param message NodeInitializationAction
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.dataproc.v1.NodeInitializationAction, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this NodeInitializationAction to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ClusterStatus. */
                interface IClusterStatus {

                    /** ClusterStatus state */
                    state?: (google.cloud.dataproc.v1.ClusterStatus.State|keyof typeof google.cloud.dataproc.v1.ClusterStatus.State|null);

                    /** ClusterStatus detail */
                    detail?: (string|null);

                    /** ClusterStatus stateStartTime */
                    stateStartTime?: (google.protobuf.ITimestamp|null);

                    /** ClusterStatus substate */
                    substate?: (google.cloud.dataproc.v1.ClusterStatus.Substate|keyof typeof google.cloud.dataproc.v1.ClusterStatus.Substate|null);
                }

                /** Represents a ClusterStatus. */
                class ClusterStatus implements IClusterStatus {

                    /**
                     * Constructs a new ClusterStatus.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.dataproc.v1.IClusterStatus);

                    /** ClusterStatus state. */
                    public state: (google.cloud.dataproc.v1.ClusterStatus.State|keyof typeof google.cloud.dataproc.v1.ClusterStatus.State);

                    /** ClusterStatus detail. */
                    public detail: string;

                    /** ClusterStatus stateStartTime. */
                    public stateStartTime?: (google.protobuf.ITimestamp|null);

                    /** ClusterStatus substate. */
                    public substate: (google.cloud.dataproc.v1.ClusterStatus.Substate|keyof typeof google.cloud.dataproc.v1.ClusterStatus.Substate);

                    /**
                     * Creates a new ClusterStatus instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ClusterStatus instance
                     */
                    public static create(properties?: google.cloud.dataproc.v1.IClusterStatus): google.cloud.dataproc.v1.ClusterStatus;

                    /**
                     * Encodes the specified ClusterStatus message. Does not implicitly {@link google.cloud.dataproc.v1.ClusterStatus.verify|verify} messages.
                     * @param message ClusterStatus message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.dataproc.v1.IClusterStatus, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ClusterStatus message, length delimited. Does not implicitly {@link google.cloud.dataproc.v1.ClusterStatus.verify|verify} messages.
                     * @param message ClusterStatus message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.dataproc.v1.IClusterStatus, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ClusterStatus message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ClusterStatus
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.dataproc.v1.ClusterStatus;

                    /**
                     * Decodes a ClusterStatus message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ClusterStatus
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.dataproc.v1.ClusterStatus;

                    /**
                     * Verifies a ClusterStatus message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ClusterStatus message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ClusterStatus
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.dataproc.v1.ClusterStatus;

                    /**
                     * Creates a plain object from a ClusterStatus message. Also converts values to other types if specified.
                     * @param message ClusterStatus
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.dataproc.v1.ClusterStatus, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ClusterStatus to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace ClusterStatus {

                    /** State enum. */
                    enum State {
                        UNKNOWN = 0,
                        CREATING = 1,
                        RUNNING = 2,
                        ERROR = 3,
                        ERROR_DUE_TO_UPDATE = 9,
                        DELETING = 4,
                        UPDATING = 5,
                        STOPPING = 6,
                        STOPPED = 7,
                        STARTING = 8
                    }

                    /** Substate enum. */
                    enum Substate {
                        UNSPECIFIED = 0,
                        UNHEALTHY = 1,
                        STALE_STATUS = 2
                    }
                }

                /** Properties of a SecurityConfig. */
                interface ISecurityConfig {

                    /** SecurityConfig kerberosConfig */
                    kerberosConfig?: (google.cloud.dataproc.v1.IKerberosConfig|null);

                    /** SecurityConfig identityConfig */
                    identityConfig?: (google.cloud.dataproc.v1.IIdentityConfig|null);
                }

                /** Represents a SecurityConfig. */
                class SecurityConfig implements ISecurityConfig {

                    /**
                     * Constructs a new SecurityConfig.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.dataproc.v1.ISecurityConfig);

                    /** SecurityConfig kerberosConfig. */
                    public kerberosConfig?: (google.cloud.dataproc.v1.IKerberosConfig|null);

                    /** SecurityConfig identityConfig. */
                    public identityConfig?: (google.cloud.dataproc.v1.IIdentityConfig|null);

                    /**
                     * Creates a new SecurityConfig instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns SecurityConfig instance
                     */
                    public static create(properties?: google.cloud.dataproc.v1.ISecurityConfig): google.cloud.dataproc.v1.SecurityConfig;

                    /**
                     * Encodes the specified SecurityConfig message. Does not implicitly {@link google.cloud.dataproc.v1.SecurityConfig.verify|verify} messages.
                     * @param message SecurityConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.dataproc.v1.ISecurityConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified SecurityConfig message, length delimited. Does not implicitly {@link google.cloud.dataproc.v1.SecurityConfig.verify|verify} messages.
                     * @param message SecurityConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.dataproc.v1.ISecurityConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a SecurityConfig message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns SecurityConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.dataproc.v1.SecurityConfig;

                    /**
                     * Decodes a SecurityConfig message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns SecurityConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.dataproc.v1.SecurityConfig;

                    /**
                     * Verifies a SecurityConfig message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a SecurityConfig message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns SecurityConfig
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.dataproc.v1.SecurityConfig;

                    /**
                     * Creates a plain object from a SecurityConfig message. Also converts values to other types if specified.
                     * @param message SecurityConfig
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.dataproc.v1.SecurityConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this SecurityConfig to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a KerberosConfig. */
                interface IKerberosConfig {

                    /** KerberosConfig enableKerberos */
                    enableKerberos?: (boolean|null);

                    /** KerberosConfig rootPrincipalPasswordUri */
                    rootPrincipalPasswordUri?: (string|null);

                    /** KerberosConfig kmsKeyUri */
                    kmsKeyUri?: (string|null);

                    /** KerberosConfig keystoreUri */
                    keystoreUri?: (string|null);

                    /** KerberosConfig truststoreUri */
                    truststoreUri?: (string|null);

                    /** KerberosConfig keystorePasswordUri */
                    keystorePasswordUri?: (string|null);

                    /** KerberosConfig keyPasswordUri */
                    keyPasswordUri?: (string|null);

                    /** KerberosConfig truststorePasswordUri */
                    truststorePasswordUri?: (string|null);

                    /** KerberosConfig crossRealmTrustRealm */
                    crossRealmTrustRealm?: (string|null);

                    /** KerberosConfig crossRealmTrustKdc */
                    crossRealmTrustKdc?: (string|null);

                    /** KerberosConfig crossRealmTrustAdminServer */
                    crossRealmTrustAdminServer?: (string|null);

                    /** KerberosConfig crossRealmTrustSharedPasswordUri */
                    crossRealmTrustSharedPasswordUri?: (string|null);

                    /** KerberosConfig kdcDbKeyUri */
                    kdcDbKeyUri?: (string|null);

                    /** KerberosConfig tgtLifetimeHours */
                    tgtLifetimeHours?: (number|null);

                    /** KerberosConfig realm */
                    realm?: (string|null);
                }

                /** Represents a KerberosConfig. */
                class KerberosConfig implements IKerberosConfig {

                    /**
                     * Constructs a new KerberosConfig.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.dataproc.v1.IKerberosConfig);

                    /** KerberosConfig enableKerberos. */
                    public enableKerberos: boolean;

                    /** KerberosConfig rootPrincipalPasswordUri. */
                    public rootPrincipalPasswordUri: string;

                    /** KerberosConfig kmsKeyUri. */
                    public kmsKeyUri: string;

                    /** KerberosConfig keystoreUri. */
                    public keystoreUri: string;

                    /** KerberosConfig truststoreUri. */
                    public truststoreUri: string;

                    /** KerberosConfig keystorePasswordUri. */
                    public keystorePasswordUri: string;

                    /** KerberosConfig keyPasswordUri. */
                    public keyPasswordUri: string;

                    /** KerberosConfig truststorePasswordUri. */
                    public truststorePasswordUri: string;

                    /** KerberosConfig crossRealmTrustRealm. */
                    public crossRealmTrustRealm: string;

                    /** KerberosConfig crossRealmTrustKdc. */
                    public crossRealmTrustKdc: string;

                    /** KerberosConfig crossRealmTrustAdminServer. */
                    public crossRealmTrustAdminServer: string;

                    /** KerberosConfig crossRealmTrustSharedPasswordUri. */
                    public crossRealmTrustSharedPasswordUri: string;

                    /** KerberosConfig kdcDbKeyUri. */
                    public kdcDbKeyUri: string;

                    /** KerberosConfig tgtLifetimeHours. */
                    public tgtLifetimeHours: number;

                    /** KerberosConfig realm. */
                    public realm: string;

                    /**
                     * Creates a new KerberosConfig instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns KerberosConfig instance
                     */
                    public static create(properties?: google.cloud.dataproc.v1.IKerberosConfig): google.cloud.dataproc.v1.KerberosConfig;

                    /**
                     * Encodes the specified KerberosConfig message. Does not implicitly {@link google.cloud.dataproc.v1.KerberosConfig.verify|verify} messages.
                     * @param message KerberosConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.dataproc.v1.IKerberosConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified KerberosConfig message, length delimited. Does not implicitly {@link google.cloud.dataproc.v1.KerberosConfig.verify|verify} messages.
                     * @param message KerberosConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.dataproc.v1.IKerberosConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a KerberosConfig message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns KerberosConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.dataproc.v1.KerberosConfig;

                    /**
                     * Decodes a KerberosConfig message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns KerberosConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.dataproc.v1.KerberosConfig;

                    /**
                     * Verifies a KerberosConfig message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a KerberosConfig message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns KerberosConfig
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.dataproc.v1.KerberosConfig;

                    /**
                     * Creates a plain object from a KerberosConfig message. Also converts values to other types if specified.
                     * @param message KerberosConfig
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.dataproc.v1.KerberosConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this KerberosConfig to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of an IdentityConfig. */
                interface IIdentityConfig {

                    /** IdentityConfig userServiceAccountMapping */
                    userServiceAccountMapping?: ({ [k: string]: string }|null);
                }

                /** Represents an IdentityConfig. */
                class IdentityConfig implements IIdentityConfig {

                    /**
                     * Constructs a new IdentityConfig.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.dataproc.v1.IIdentityConfig);

                    /** IdentityConfig userServiceAccountMapping. */
                    public userServiceAccountMapping: { [k: string]: string };

                    /**
                     * Creates a new IdentityConfig instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns IdentityConfig instance
                     */
                    public static create(properties?: google.cloud.dataproc.v1.IIdentityConfig): google.cloud.dataproc.v1.IdentityConfig;

                    /**
                     * Encodes the specified IdentityConfig message. Does not implicitly {@link google.cloud.dataproc.v1.IdentityConfig.verify|verify} messages.
                     * @param message IdentityConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.dataproc.v1.IIdentityConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified IdentityConfig message, length delimited. Does not implicitly {@link google.cloud.dataproc.v1.IdentityConfig.verify|verify} messages.
                     * @param message IdentityConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.dataproc.v1.IIdentityConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an IdentityConfig message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns IdentityConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.dataproc.v1.IdentityConfig;

                    /**
                     * Decodes an IdentityConfig message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns IdentityConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.dataproc.v1.IdentityConfig;

                    /**
                     * Verifies an IdentityConfig message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an IdentityConfig message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns IdentityConfig
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.dataproc.v1.IdentityConfig;

                    /**
                     * Creates a plain object from an IdentityConfig message. Also converts values to other types if specified.
                     * @param message IdentityConfig
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.dataproc.v1.IdentityConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this IdentityConfig to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a SoftwareConfig. */
                interface ISoftwareConfig {

                    /** SoftwareConfig imageVersion */
                    imageVersion?: (string|null);

                    /** SoftwareConfig properties */
                    properties?: ({ [k: string]: string }|null);

                    /** SoftwareConfig optionalComponents */
                    optionalComponents?: (google.cloud.dataproc.v1.Component[]|null);
                }

                /** Represents a SoftwareConfig. */
                class SoftwareConfig implements ISoftwareConfig {

                    /**
                     * Constructs a new SoftwareConfig.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.dataproc.v1.ISoftwareConfig);

                    /** SoftwareConfig imageVersion. */
                    public imageVersion: string;

                    /** SoftwareConfig properties. */
                    public properties: { [k: string]: string };

                    /** SoftwareConfig optionalComponents. */
                    public optionalComponents: google.cloud.dataproc.v1.Component[];

                    /**
                     * Creates a new SoftwareConfig instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns SoftwareConfig instance
                     */
                    public static create(properties?: google.cloud.dataproc.v1.ISoftwareConfig): google.cloud.dataproc.v1.SoftwareConfig;

                    /**
                     * Encodes the specified SoftwareConfig message. Does not implicitly {@link google.cloud.dataproc.v1.SoftwareConfig.verify|verify} messages.
                     * @param message SoftwareConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.dataproc.v1.ISoftwareConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified SoftwareConfig message, length delimited. Does not implicitly {@link google.cloud.dataproc.v1.SoftwareConfig.verify|verify} messages.
                     * @param message SoftwareConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.dataproc.v1.ISoftwareConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a SoftwareConfig message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns SoftwareConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.dataproc.v1.SoftwareConfig;

                    /**
                     * Decodes a SoftwareConfig message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns SoftwareConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.dataproc.v1.SoftwareConfig;

                    /**
                     * Verifies a SoftwareConfig message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a SoftwareConfig message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns SoftwareConfig
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.dataproc.v1.SoftwareConfig;

                    /**
                     * Creates a plain object from a SoftwareConfig message. Also converts values to other types if specified.
                     * @param message SoftwareConfig
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.dataproc.v1.SoftwareConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this SoftwareConfig to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a LifecycleConfig. */
                interface ILifecycleConfig {

                    /** LifecycleConfig idleDeleteTtl */
                    idleDeleteTtl?: (google.protobuf.IDuration|null);

                    /** LifecycleConfig autoDeleteTime */
                    autoDeleteTime?: (google.protobuf.ITimestamp|null);

                    /** LifecycleConfig autoDeleteTtl */
                    autoDeleteTtl?: (google.protobuf.IDuration|null);

                    /** LifecycleConfig idleStartTime */
                    idleStartTime?: (google.protobuf.ITimestamp|null);
                }

                /** Represents a LifecycleConfig. */
                class LifecycleConfig implements ILifecycleConfig {

                    /**
                     * Constructs a new LifecycleConfig.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.dataproc.v1.ILifecycleConfig);

                    /** LifecycleConfig idleDeleteTtl. */
                    public idleDeleteTtl?: (google.protobuf.IDuration|null);

                    /** LifecycleConfig autoDeleteTime. */
                    public autoDeleteTime?: (google.protobuf.ITimestamp|null);

                    /** LifecycleConfig autoDeleteTtl. */
                    public autoDeleteTtl?: (google.protobuf.IDuration|null);

                    /** LifecycleConfig idleStartTime. */
                    public idleStartTime?: (google.protobuf.ITimestamp|null);

                    /** LifecycleConfig ttl. */
                    public ttl?: ("autoDeleteTime"|"autoDeleteTtl");

                    /**
                     * Creates a new LifecycleConfig instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns LifecycleConfig instance
                     */
                    public static create(properties?: google.cloud.dataproc.v1.ILifecycleConfig): google.cloud.dataproc.v1.LifecycleConfig;

                    /**
                     * Encodes the specified LifecycleConfig message. Does not implicitly {@link google.cloud.dataproc.v1.LifecycleConfig.verify|verify} messages.
                     * @param message LifecycleConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.dataproc.v1.ILifecycleConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified LifecycleConfig message, length delimited. Does not implicitly {@link google.cloud.dataproc.v1.LifecycleConfig.verify|verify} messages.
                     * @param message LifecycleConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.dataproc.v1.ILifecycleConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a LifecycleConfig message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns LifecycleConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.dataproc.v1.LifecycleConfig;

                    /**
                     * Decodes a LifecycleConfig message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns LifecycleConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.dataproc.v1.LifecycleConfig;

                    /**
                     * Verifies a LifecycleConfig message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a LifecycleConfig message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns LifecycleConfig
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.dataproc.v1.LifecycleConfig;

                    /**
                     * Creates a plain object from a LifecycleConfig message. Also converts values to other types if specified.
                     * @param message LifecycleConfig
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.dataproc.v1.LifecycleConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this LifecycleConfig to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a MetastoreConfig. */
                interface IMetastoreConfig {

                    /** MetastoreConfig dataprocMetastoreService */
                    dataprocMetastoreService?: (string|null);
                }

                /** Represents a MetastoreConfig. */
                class MetastoreConfig implements IMetastoreConfig {

                    /**
                     * Constructs a new MetastoreConfig.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.dataproc.v1.IMetastoreConfig);

                    /** MetastoreConfig dataprocMetastoreService. */
                    public dataprocMetastoreService: string;

                    /**
                     * Creates a new MetastoreConfig instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns MetastoreConfig instance
                     */
                    public static create(properties?: google.cloud.dataproc.v1.IMetastoreConfig): google.cloud.dataproc.v1.MetastoreConfig;

                    /**
                     * Encodes the specified MetastoreConfig message. Does not implicitly {@link google.cloud.dataproc.v1.MetastoreConfig.verify|verify} messages.
                     * @param message MetastoreConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.dataproc.v1.IMetastoreConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified MetastoreConfig message, length delimited. Does not implicitly {@link google.cloud.dataproc.v1.MetastoreConfig.verify|verify} messages.
                     * @param message MetastoreConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.dataproc.v1.IMetastoreConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a MetastoreConfig message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns MetastoreConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.dataproc.v1.MetastoreConfig;

                    /**
                     * Decodes a MetastoreConfig message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns MetastoreConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.dataproc.v1.MetastoreConfig;

                    /**
                     * Verifies a MetastoreConfig message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a MetastoreConfig message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns MetastoreConfig
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.dataproc.v1.MetastoreConfig;

                    /**
                     * Creates a plain object from a MetastoreConfig message. Also converts values to other types if specified.
                     * @param message MetastoreConfig
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.dataproc.v1.MetastoreConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this MetastoreConfig to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ClusterMetrics. */
                interface IClusterMetrics {

                    /** ClusterMetrics hdfsMetrics */
                    hdfsMetrics?: ({ [k: string]: (number|Long|string) }|null);

                    /** ClusterMetrics yarnMetrics */
                    yarnMetrics?: ({ [k: string]: (number|Long|string) }|null);
                }

                /** Represents a ClusterMetrics. */
                class ClusterMetrics implements IClusterMetrics {

                    /**
                     * Constructs a new ClusterMetrics.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.dataproc.v1.IClusterMetrics);

                    /** ClusterMetrics hdfsMetrics. */
                    public hdfsMetrics: { [k: string]: (number|Long|string) };

                    /** ClusterMetrics yarnMetrics. */
                    public yarnMetrics: { [k: string]: (number|Long|string) };

                    /**
                     * Creates a new ClusterMetrics instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ClusterMetrics instance
                     */
                    public static create(properties?: google.cloud.dataproc.v1.IClusterMetrics): google.cloud.dataproc.v1.ClusterMetrics;

                    /**
                     * Encodes the specified ClusterMetrics message. Does not implicitly {@link google.cloud.dataproc.v1.ClusterMetrics.verify|verify} messages.
                     * @param message ClusterMetrics message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.dataproc.v1.IClusterMetrics, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ClusterMetrics message, length delimited. Does not implicitly {@link google.cloud.dataproc.v1.ClusterMetrics.verify|verify} messages.
                     * @param message ClusterMetrics message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.dataproc.v1.IClusterMetrics, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ClusterMetrics message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ClusterMetrics
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.dataproc.v1.ClusterMetrics;

                    /**
                     * Decodes a ClusterMetrics message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ClusterMetrics
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.dataproc.v1.ClusterMetrics;

                    /**
                     * Verifies a ClusterMetrics message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ClusterMetrics message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ClusterMetrics
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.dataproc.v1.ClusterMetrics;

                    /**
                     * Creates a plain object from a ClusterMetrics message. Also converts values to other types if specified.
                     * @param message ClusterMetrics
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.dataproc.v1.ClusterMetrics, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ClusterMetrics to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a CreateClusterRequest. */
                interface ICreateClusterRequest {

                    /** CreateClusterRequest projectId */
                    projectId?: (string|null);

                    /** CreateClusterRequest region */
                    region?: (string|null);

                    /** CreateClusterRequest cluster */
                    cluster?: (google.cloud.dataproc.v1.ICluster|null);

                    /** CreateClusterRequest requestId */
                    requestId?: (string|null);

                    /** CreateClusterRequest actionOnFailedPrimaryWorkers */
                    actionOnFailedPrimaryWorkers?: (google.cloud.dataproc.v1.FailureAction|keyof typeof google.cloud.dataproc.v1.FailureAction|null);
                }

                /** Represents a CreateClusterRequest. */
                class CreateClusterRequest implements ICreateClusterRequest {

                    /**
                     * Constructs a new CreateClusterRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.dataproc.v1.ICreateClusterRequest);

                    /** CreateClusterRequest projectId. */
                    public projectId: string;

                    /** CreateClusterRequest region. */
                    public region: string;

                    /** CreateClusterRequest cluster. */
                    public cluster?: (google.cloud.dataproc.v1.ICluster|null);

                    /** CreateClusterRequest requestId. */
                    public requestId: string;

                    /** CreateClusterRequest actionOnFailedPrimaryWorkers. */
                    public actionOnFailedPrimaryWorkers: (google.cloud.dataproc.v1.FailureAction|keyof typeof google.cloud.dataproc.v1.FailureAction);

                    /**
                     * Creates a new CreateClusterRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CreateClusterRequest instance
                     */
                    public static create(properties?: google.cloud.dataproc.v1.ICreateClusterRequest): google.cloud.dataproc.v1.CreateClusterRequest;

                    /**
                     * Encodes the specified CreateClusterRequest message. Does not implicitly {@link google.cloud.dataproc.v1.CreateClusterRequest.verify|verify} messages.
                     * @param message CreateClusterRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.dataproc.v1.ICreateClusterRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CreateClusterRequest message, length delimited. Does not implicitly {@link google.cloud.dataproc.v1.CreateClusterRequest.verify|verify} messages.
                     * @param message CreateClusterRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.dataproc.v1.ICreateClusterRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CreateClusterRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CreateClusterRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.dataproc.v1.CreateClusterRequest;

                    /**
                     * Decodes a CreateClusterRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CreateClusterRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.dataproc.v1.CreateClusterRequest;

                    /**
                     * Verifies a CreateClusterRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CreateClusterRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CreateClusterRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.dataproc.v1.CreateClusterRequest;

                    /**
                     * Creates a plain object from a CreateClusterRequest message. Also converts values to other types if specified.
                     * @param message CreateClusterRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.dataproc.v1.CreateClusterRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CreateClusterRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of an UpdateClusterRequest. */
                interface IUpdateClusterRequest {

                    /** UpdateClusterRequest projectId */
                    projectId?: (string|null);

                    /** UpdateClusterRequest region */
                    region?: (string|null);

                    /** UpdateClusterRequest clusterName */
                    clusterName?: (string|null);

                    /** UpdateClusterRequest cluster */
                    cluster?: (google.cloud.dataproc.v1.ICluster|null);

                    /** UpdateClusterRequest gracefulDecommissionTimeout */
                    gracefulDecommissionTimeout?: (google.protobuf.IDuration|null);

                    /** UpdateClusterRequest updateMask */
                    updateMask?: (google.protobuf.IFieldMask|null);

                    /** UpdateClusterRequest requestId */
                    requestId?: (string|null);
                }

                /** Represents an UpdateClusterRequest. */
                class UpdateClusterRequest implements IUpdateClusterRequest {

                    /**
                     * Constructs a new UpdateClusterRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.dataproc.v1.IUpdateClusterRequest);

                    /** UpdateClusterRequest projectId. */
                    public projectId: string;

                    /** UpdateClusterRequest region. */
                    public region: string;

                    /** UpdateClusterRequest clusterName. */
                    public clusterName: string;

                    /** UpdateClusterRequest cluster. */
                    public cluster?: (google.cloud.dataproc.v1.ICluster|null);

                    /** UpdateClusterRequest gracefulDecommissionTimeout. */
                    public gracefulDecommissionTimeout?: (google.protobuf.IDuration|null);

                    /** UpdateClusterRequest updateMask. */
                    public updateMask?: (google.protobuf.IFieldMask|null);

                    /** UpdateClusterRequest requestId. */
                    public requestId: string;

                    /**
                     * Creates a new UpdateClusterRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns UpdateClusterRequest instance
                     */
                    public static create(properties?: google.cloud.dataproc.v1.IUpdateClusterRequest): google.cloud.dataproc.v1.UpdateClusterRequest;

                    /**
                     * Encodes the specified UpdateClusterRequest message. Does not implicitly {@link google.cloud.dataproc.v1.UpdateClusterRequest.verify|verify} messages.
                     * @param message UpdateClusterRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.dataproc.v1.IUpdateClusterRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified UpdateClusterRequest message, length delimited. Does not implicitly {@link google.cloud.dataproc.v1.UpdateClusterRequest.verify|verify} messages.
                     * @param message UpdateClusterRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.dataproc.v1.IUpdateClusterRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an UpdateClusterRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns UpdateClusterRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.dataproc.v1.UpdateClusterRequest;

                    /**
                     * Decodes an UpdateClusterRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns UpdateClusterRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.dataproc.v1.UpdateClusterRequest;

                    /**
                     * Verifies an UpdateClusterRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an UpdateClusterRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns UpdateClusterRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.dataproc.v1.UpdateClusterRequest;

                    /**
                     * Creates a plain object from an UpdateClusterRequest message. Also converts values to other types if specified.
                     * @param message UpdateClusterRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.dataproc.v1.UpdateClusterRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this UpdateClusterRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a StopClusterRequest. */
                interface IStopClusterRequest {

                    /** StopClusterRequest projectId */
                    projectId?: (string|null);

                    /** StopClusterRequest region */
                    region?: (string|null);

                    /** StopClusterRequest clusterName */
                    clusterName?: (string|null);

                    /** StopClusterRequest clusterUuid */
                    clusterUuid?: (string|null);

                    /** StopClusterRequest requestId */
                    requestId?: (string|null);
                }

                /** Represents a StopClusterRequest. */
                class StopClusterRequest implements IStopClusterRequest {

                    /**
                     * Constructs a new StopClusterRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.dataproc.v1.IStopClusterRequest);

                    /** StopClusterRequest projectId. */
                    public projectId: string;

                    /** StopClusterRequest region. */
                    public region: string;

                    /** StopClusterRequest clusterName. */
                    public clusterName: string;

                    /** StopClusterRequest clusterUuid. */
                    public clusterUuid: string;

                    /** StopClusterRequest requestId. */
                    public requestId: string;

                    /**
                     * Creates a new StopClusterRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns StopClusterRequest instance
                     */
                    public static create(properties?: google.cloud.dataproc.v1.IStopClusterRequest): google.cloud.dataproc.v1.StopClusterRequest;

                    /**
                     * Encodes the specified StopClusterRequest message. Does not implicitly {@link google.cloud.dataproc.v1.StopClusterRequest.verify|verify} messages.
                     * @param message StopClusterRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.dataproc.v1.IStopClusterRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified StopClusterRequest message, length delimited. Does not implicitly {@link google.cloud.dataproc.v1.StopClusterRequest.verify|verify} messages.
                     * @param message StopClusterRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.dataproc.v1.IStopClusterRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a StopClusterRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns StopClusterRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.dataproc.v1.StopClusterRequest;

                    /**
                     * Decodes a StopClusterRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns StopClusterRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.dataproc.v1.StopClusterRequest;

                    /**
                     * Verifies a StopClusterRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a StopClusterRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns StopClusterRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.dataproc.v1.StopClusterRequest;

                    /**
                     * Creates a plain object from a StopClusterRequest message. Also converts values to other types if specified.
                     * @param message StopClusterRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.dataproc.v1.StopClusterRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this StopClusterRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a StartClusterRequest. */
                interface IStartClusterRequest {

                    /** StartClusterRequest projectId */
                    projectId?: (string|null);

                    /** StartClusterRequest region */
                    region?: (string|null);

                    /** StartClusterRequest clusterName */
                    clusterName?: (string|null);

                    /** StartClusterRequest clusterUuid */
                    clusterUuid?: (string|null);

                    /** StartClusterRequest requestId */
                    requestId?: (string|null);
                }

                /** Represents a StartClusterRequest. */
                class StartClusterRequest implements IStartClusterRequest {

                    /**
                     * Constructs a new StartClusterRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.dataproc.v1.IStartClusterRequest);

                    /** StartClusterRequest projectId. */
                    public projectId: string;

                    /** StartClusterRequest region. */
                    public region: string;

                    /** StartClusterRequest clusterName. */
                    public clusterName: string;

                    /** StartClusterRequest clusterUuid. */
                    public clusterUuid: string;

                    /** StartClusterRequest requestId. */
                    public requestId: string;

                    /**
                     * Creates a new StartClusterRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns StartClusterRequest instance
                     */
                    public static create(properties?: google.cloud.dataproc.v1.IStartClusterRequest): google.cloud.dataproc.v1.StartClusterRequest;

                    /**
                     * Encodes the specified StartClusterRequest message. Does not implicitly {@link google.cloud.dataproc.v1.StartClusterRequest.verify|verify} messages.
                     * @param message StartClusterRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.dataproc.v1.IStartClusterRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified StartClusterRequest message, length delimited. Does not implicitly {@link google.cloud.dataproc.v1.StartClusterRequest.verify|verify} messages.
                     * @param message StartClusterRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.dataproc.v1.IStartClusterRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a StartClusterRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns StartClusterRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.dataproc.v1.StartClusterRequest;

                    /**
                     * Decodes a StartClusterRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns StartClusterRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.dataproc.v1.StartClusterRequest;

                    /**
                     * Verifies a StartClusterRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a StartClusterRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns StartClusterRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.dataproc.v1.StartClusterRequest;

                    /**
                     * Creates a plain object from a StartClusterRequest message. Also converts values to other types if specified.
                     * @param message StartClusterRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.dataproc.v1.StartClusterRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this StartClusterRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a DeleteClusterRequest. */
                interface IDeleteClusterRequest {

                    /** DeleteClusterRequest projectId */
                    projectId?: (string|null);

                    /** DeleteClusterRequest region */
                    region?: (string|null);

                    /** DeleteClusterRequest clusterName */
                    clusterName?: (string|null);

                    /** DeleteClusterRequest clusterUuid */
                    clusterUuid?: (string|null);

                    /** DeleteClusterRequest requestId */
                    requestId?: (string|null);
                }

                /** Represents a DeleteClusterRequest. */
                class DeleteClusterRequest implements IDeleteClusterRequest {

                    /**
                     * Constructs a new DeleteClusterRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.dataproc.v1.IDeleteClusterRequest);

                    /** DeleteClusterRequest projectId. */
                    public projectId: string;

                    /** DeleteClusterRequest region. */
                    public region: string;

                    /** DeleteClusterRequest clusterName. */
                    public clusterName: string;

                    /** DeleteClusterRequest clusterUuid. */
                    public clusterUuid: string;

                    /** DeleteClusterRequest requestId. */
                    public requestId: string;

                    /**
                     * Creates a new DeleteClusterRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DeleteClusterRequest instance
                     */
                    public static create(properties?: google.cloud.dataproc.v1.IDeleteClusterRequest): google.cloud.dataproc.v1.DeleteClusterRequest;

                    /**
                     * Encodes the specified DeleteClusterRequest message. Does not implicitly {@link google.cloud.dataproc.v1.DeleteClusterRequest.verify|verify} messages.
                     * @param message DeleteClusterRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.dataproc.v1.IDeleteClusterRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DeleteClusterRequest message, length delimited. Does not implicitly {@link google.cloud.dataproc.v1.DeleteClusterRequest.verify|verify} messages.
                     * @param message DeleteClusterRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.dataproc.v1.IDeleteClusterRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DeleteClusterRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DeleteClusterRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.dataproc.v1.DeleteClusterRequest;

                    /**
                     * Decodes a DeleteClusterRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DeleteClusterRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.dataproc.v1.DeleteClusterRequest;

                    /**
                     * Verifies a DeleteClusterRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DeleteClusterRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DeleteClusterRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.dataproc.v1.DeleteClusterRequest;

                    /**
                     * Creates a plain object from a DeleteClusterRequest message. Also converts values to other types if specified.
                     * @param message DeleteClusterRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.dataproc.v1.DeleteClusterRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DeleteClusterRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a GetClusterRequest. */
                interface IGetClusterRequest {

                    /** GetClusterRequest projectId */
                    projectId?: (string|null);

                    /** GetClusterRequest region */
                    region?: (string|null);

                    /** GetClusterRequest clusterName */
                    clusterName?: (string|null);
                }

                /** Represents a GetClusterRequest. */
                class GetClusterRequest implements IGetClusterRequest {

                    /**
                     * Constructs a new GetClusterRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.dataproc.v1.IGetClusterRequest);

                    /** GetClusterRequest projectId. */
                    public projectId: string;

                    /** GetClusterRequest region. */
                    public region: string;

                    /** GetClusterRequest clusterName. */
                    public clusterName: string;

                    /**
                     * Creates a new GetClusterRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetClusterRequest instance
                     */
                    public static create(properties?: google.cloud.dataproc.v1.IGetClusterRequest): google.cloud.dataproc.v1.GetClusterRequest;

                    /**
                     * Encodes the specified GetClusterRequest message. Does not implicitly {@link google.cloud.dataproc.v1.GetClusterRequest.verify|verify} messages.
                     * @param message GetClusterRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.dataproc.v1.IGetClusterRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetClusterRequest message, length delimited. Does not implicitly {@link google.cloud.dataproc.v1.GetClusterRequest.verify|verify} messages.
                     * @param message GetClusterRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.dataproc.v1.IGetClusterRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetClusterRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetClusterRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.dataproc.v1.GetClusterRequest;

                    /**
                     * Decodes a GetClusterRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetClusterRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.dataproc.v1.GetClusterRequest;

                    /**
                     * Verifies a GetClusterRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetClusterRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetClusterRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.dataproc.v1.GetClusterRequest;

                    /**
                     * Creates a plain object from a GetClusterRequest message. Also converts values to other types if specified.
                     * @param message GetClusterRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.dataproc.v1.GetClusterRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetClusterRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ListClustersRequest. */
                interface IListClustersRequest {

                    /** ListClustersRequest projectId */
                    projectId?: (string|null);

                    /** ListClustersRequest region */
                    region?: (string|null);

                    /** ListClustersRequest filter */
                    filter?: (string|null);

                    /** ListClustersRequest pageSize */
                    pageSize?: (number|null);

                    /** ListClustersRequest pageToken */
                    pageToken?: (string|null);
                }

                /** Represents a ListClustersRequest. */
                class ListClustersRequest implements IListClustersRequest {

                    /**
                     * Constructs a new ListClustersRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.dataproc.v1.IListClustersRequest);

                    /** ListClustersRequest projectId. */
                    public projectId: string;

                    /** ListClustersRequest region. */
                    public region: string;

                    /** ListClustersRequest filter. */
                    public filter: string;

                    /** ListClustersRequest pageSize. */
                    public pageSize: number;

                    /** ListClustersRequest pageToken. */
                    public pageToken: string;

                    /**
                     * Creates a new ListClustersRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListClustersRequest instance
                     */
                    public static create(properties?: google.cloud.dataproc.v1.IListClustersRequest): google.cloud.dataproc.v1.ListClustersRequest;

                    /**
                     * Encodes the specified ListClustersRequest message. Does not implicitly {@link google.cloud.dataproc.v1.ListClustersRequest.verify|verify} messages.
                     * @param message ListClustersRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.dataproc.v1.IListClustersRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListClustersRequest message, length delimited. Does not implicitly {@link google.cloud.dataproc.v1.ListClustersRequest.verify|verify} messages.
                     * @param message ListClustersRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.dataproc.v1.IListClustersRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListClustersRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListClustersRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.dataproc.v1.ListClustersRequest;

                    /**
                     * Decodes a ListClustersRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListClustersRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.dataproc.v1.ListClustersRequest;

                    /**
                     * Verifies a ListClustersRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListClustersRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListClustersRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.dataproc.v1.ListClustersRequest;

                    /**
                     * Creates a plain object from a ListClustersRequest message. Also converts values to other types if specified.
                     * @param message ListClustersRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.dataproc.v1.ListClustersRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListClustersRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ListClustersResponse. */
                interface IListClustersResponse {

                    /** ListClustersResponse clusters */
                    clusters?: (google.cloud.dataproc.v1.ICluster[]|null);

                    /** ListClustersResponse nextPageToken */
                    nextPageToken?: (string|null);
                }

                /** Represents a ListClustersResponse. */
                class ListClustersResponse implements IListClustersResponse {

                    /**
                     * Constructs a new ListClustersResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.dataproc.v1.IListClustersResponse);

                    /** ListClustersResponse clusters. */
                    public clusters: google.cloud.dataproc.v1.ICluster[];

                    /** ListClustersResponse nextPageToken. */
                    public nextPageToken: string;

                    /**
                     * Creates a new ListClustersResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListClustersResponse instance
                     */
                    public static create(properties?: google.cloud.dataproc.v1.IListClustersResponse): google.cloud.dataproc.v1.ListClustersResponse;

                    /**
                     * Encodes the specified ListClustersResponse message. Does not implicitly {@link google.cloud.dataproc.v1.ListClustersResponse.verify|verify} messages.
                     * @param message ListClustersResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.dataproc.v1.IListClustersResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListClustersResponse message, length delimited. Does not implicitly {@link google.cloud.dataproc.v1.ListClustersResponse.verify|verify} messages.
                     * @param message ListClustersResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.dataproc.v1.IListClustersResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListClustersResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListClustersResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.dataproc.v1.ListClustersResponse;

                    /**
                     * Decodes a ListClustersResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListClustersResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.dataproc.v1.ListClustersResponse;

                    /**
                     * Verifies a ListClustersResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListClustersResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListClustersResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.dataproc.v1.ListClustersResponse;

                    /**
                     * Creates a plain object from a ListClustersResponse message. Also converts values to other types if specified.
                     * @param message ListClustersResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.dataproc.v1.ListClustersResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListClustersResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a DiagnoseClusterRequest. */
                interface IDiagnoseClusterRequest {

                    /** DiagnoseClusterRequest projectId */
                    projectId?: (string|null);

                    /** DiagnoseClusterRequest region */
                    region?: (string|null);

                    /** DiagnoseClusterRequest clusterName */
                    clusterName?: (string|null);
                }

                /** Represents a DiagnoseClusterRequest. */
                class DiagnoseClusterRequest implements IDiagnoseClusterRequest {

                    /**
                     * Constructs a new DiagnoseClusterRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.dataproc.v1.IDiagnoseClusterRequest);

                    /** DiagnoseClusterRequest projectId. */
                    public projectId: string;

                    /** DiagnoseClusterRequest region. */
                    public region: string;

                    /** DiagnoseClusterRequest clusterName. */
                    public clusterName: string;

                    /**
                     * Creates a new DiagnoseClusterRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DiagnoseClusterRequest instance
                     */
                    public static create(properties?: google.cloud.dataproc.v1.IDiagnoseClusterRequest): google.cloud.dataproc.v1.DiagnoseClusterRequest;

                    /**
                     * Encodes the specified DiagnoseClusterRequest message. Does not implicitly {@link google.cloud.dataproc.v1.DiagnoseClusterRequest.verify|verify} messages.
                     * @param message DiagnoseClusterRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.dataproc.v1.IDiagnoseClusterRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DiagnoseClusterRequest message, length delimited. Does not implicitly {@link google.cloud.dataproc.v1.DiagnoseClusterRequest.verify|verify} messages.
                     * @param message DiagnoseClusterRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.dataproc.v1.IDiagnoseClusterRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DiagnoseClusterRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DiagnoseClusterRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.dataproc.v1.DiagnoseClusterRequest;

                    /**
                     * Decodes a DiagnoseClusterRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DiagnoseClusterRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.dataproc.v1.DiagnoseClusterRequest;

                    /**
                     * Verifies a DiagnoseClusterRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DiagnoseClusterRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DiagnoseClusterRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.dataproc.v1.DiagnoseClusterRequest;

                    /**
                     * Creates a plain object from a DiagnoseClusterRequest message. Also converts values to other types if specified.
                     * @param message DiagnoseClusterRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.dataproc.v1.DiagnoseClusterRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DiagnoseClusterRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a DiagnoseClusterResults. */
                interface IDiagnoseClusterResults {

                    /** DiagnoseClusterResults outputUri */
                    outputUri?: (string|null);
                }

                /** Represents a DiagnoseClusterResults. */
                class DiagnoseClusterResults implements IDiagnoseClusterResults {

                    /**
                     * Constructs a new DiagnoseClusterResults.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.dataproc.v1.IDiagnoseClusterResults);

                    /** DiagnoseClusterResults outputUri. */
                    public outputUri: string;

                    /**
                     * Creates a new DiagnoseClusterResults instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DiagnoseClusterResults instance
                     */
                    public static create(properties?: google.cloud.dataproc.v1.IDiagnoseClusterResults): google.cloud.dataproc.v1.DiagnoseClusterResults;

                    /**
                     * Encodes the specified DiagnoseClusterResults message. Does not implicitly {@link google.cloud.dataproc.v1.DiagnoseClusterResults.verify|verify} messages.
                     * @param message DiagnoseClusterResults message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.dataproc.v1.IDiagnoseClusterResults, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DiagnoseClusterResults message, length delimited. Does not implicitly {@link google.cloud.dataproc.v1.DiagnoseClusterResults.verify|verify} messages.
                     * @param message DiagnoseClusterResults message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.dataproc.v1.IDiagnoseClusterResults, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DiagnoseClusterResults message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DiagnoseClusterResults
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.dataproc.v1.DiagnoseClusterResults;

                    /**
                     * Decodes a DiagnoseClusterResults message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DiagnoseClusterResults
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.dataproc.v1.DiagnoseClusterResults;

                    /**
                     * Verifies a DiagnoseClusterResults message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DiagnoseClusterResults message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DiagnoseClusterResults
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.dataproc.v1.DiagnoseClusterResults;

                    /**
                     * Creates a plain object from a DiagnoseClusterResults message. Also converts values to other types if specified.
                     * @param message DiagnoseClusterResults
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.dataproc.v1.DiagnoseClusterResults, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DiagnoseClusterResults to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ReservationAffinity. */
                interface IReservationAffinity {

                    /** ReservationAffinity consumeReservationType */
                    consumeReservationType?: (google.cloud.dataproc.v1.ReservationAffinity.Type|keyof typeof google.cloud.dataproc.v1.ReservationAffinity.Type|null);

                    /** ReservationAffinity key */
                    key?: (string|null);

                    /** ReservationAffinity values */
                    values?: (string[]|null);
                }

                /** Represents a ReservationAffinity. */
                class ReservationAffinity implements IReservationAffinity {

                    /**
                     * Constructs a new ReservationAffinity.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.dataproc.v1.IReservationAffinity);

                    /** ReservationAffinity consumeReservationType. */
                    public consumeReservationType: (google.cloud.dataproc.v1.ReservationAffinity.Type|keyof typeof google.cloud.dataproc.v1.ReservationAffinity.Type);

                    /** ReservationAffinity key. */
                    public key: string;

                    /** ReservationAffinity values. */
                    public values: string[];

                    /**
                     * Creates a new ReservationAffinity instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ReservationAffinity instance
                     */
                    public static create(properties?: google.cloud.dataproc.v1.IReservationAffinity): google.cloud.dataproc.v1.ReservationAffinity;

                    /**
                     * Encodes the specified ReservationAffinity message. Does not implicitly {@link google.cloud.dataproc.v1.ReservationAffinity.verify|verify} messages.
                     * @param message ReservationAffinity message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.dataproc.v1.IReservationAffinity, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ReservationAffinity message, length delimited. Does not implicitly {@link google.cloud.dataproc.v1.ReservationAffinity.verify|verify} messages.
                     * @param message ReservationAffinity message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.dataproc.v1.IReservationAffinity, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ReservationAffinity message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ReservationAffinity
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.dataproc.v1.ReservationAffinity;

                    /**
                     * Decodes a ReservationAffinity message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ReservationAffinity
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.dataproc.v1.ReservationAffinity;

                    /**
                     * Verifies a ReservationAffinity message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ReservationAffinity message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ReservationAffinity
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.dataproc.v1.ReservationAffinity;

                    /**
                     * Creates a plain object from a ReservationAffinity message. Also converts values to other types if specified.
                     * @param message ReservationAffinity
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.dataproc.v1.ReservationAffinity, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ReservationAffinity to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace ReservationAffinity {

                    /** Type enum. */
                    enum Type {
                        TYPE_UNSPECIFIED = 0,
                        NO_RESERVATION = 1,
                        ANY_RESERVATION = 2,
                        SPECIFIC_RESERVATION = 3
                    }
                }

                /** Represents a JobController */
                class JobController extends $protobuf.rpc.Service {

                    /**
                     * Constructs a new JobController service.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     */
                    constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

                    /**
                     * Creates new JobController service using the specified rpc implementation.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     * @returns RPC service. Useful where requests and/or responses are streamed.
                     */
                    public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): JobController;

                    /**
                     * Calls SubmitJob.
                     * @param request SubmitJobRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Job
                     */
                    public submitJob(request: google.cloud.dataproc.v1.ISubmitJobRequest, callback: google.cloud.dataproc.v1.JobController.SubmitJobCallback): void;

                    /**
                     * Calls SubmitJob.
                     * @param request SubmitJobRequest message or plain object
                     * @returns Promise
                     */
                    public submitJob(request: google.cloud.dataproc.v1.ISubmitJobRequest): Promise<google.cloud.dataproc.v1.Job>;

                    /**
                     * Calls SubmitJobAsOperation.
                     * @param request SubmitJobRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public submitJobAsOperation(request: google.cloud.dataproc.v1.ISubmitJobRequest, callback: google.cloud.dataproc.v1.JobController.SubmitJobAsOperationCallback): void;

                    /**
                     * Calls SubmitJobAsOperation.
                     * @param request SubmitJobRequest message or plain object
                     * @returns Promise
                     */
                    public submitJobAsOperation(request: google.cloud.dataproc.v1.ISubmitJobRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls GetJob.
                     * @param request GetJobRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Job
                     */
                    public getJob(request: google.cloud.dataproc.v1.IGetJobRequest, callback: google.cloud.dataproc.v1.JobController.GetJobCallback): void;

                    /**
                     * Calls GetJob.
                     * @param request GetJobRequest message or plain object
                     * @returns Promise
                     */
                    public getJob(request: google.cloud.dataproc.v1.IGetJobRequest): Promise<google.cloud.dataproc.v1.Job>;

                    /**
                     * Calls ListJobs.
                     * @param request ListJobsRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListJobsResponse
                     */
                    public listJobs(request: google.cloud.dataproc.v1.IListJobsRequest, callback: google.cloud.dataproc.v1.JobController.ListJobsCallback): void;

                    /**
                     * Calls ListJobs.
                     * @param request ListJobsRequest message or plain object
                     * @returns Promise
                     */
                    public listJobs(request: google.cloud.dataproc.v1.IListJobsRequest): Promise<google.cloud.dataproc.v1.ListJobsResponse>;

                    /**
                     * Calls UpdateJob.
                     * @param request UpdateJobRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Job
                     */
                    public updateJob(request: google.cloud.dataproc.v1.IUpdateJobRequest, callback: google.cloud.dataproc.v1.JobController.UpdateJobCallback): void;

                    /**
                     * Calls UpdateJob.
                     * @param request UpdateJobRequest message or plain object
                     * @returns Promise
                     */
                    public updateJob(request: google.cloud.dataproc.v1.IUpdateJobRequest): Promise<google.cloud.dataproc.v1.Job>;

                    /**
                     * Calls CancelJob.
                     * @param request CancelJobRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Job
                     */
                    public cancelJob(request: google.cloud.dataproc.v1.ICancelJobRequest, callback: google.cloud.dataproc.v1.JobController.CancelJobCallback): void;

                    /**
                     * Calls CancelJob.
                     * @param request CancelJobRequest message or plain object
                     * @returns Promise
                     */
                    public cancelJob(request: google.cloud.dataproc.v1.ICancelJobRequest): Promise<google.cloud.dataproc.v1.Job>;

                    /**
                     * Calls DeleteJob.
                     * @param request DeleteJobRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Empty
                     */
                    public deleteJob(request: google.cloud.dataproc.v1.IDeleteJobRequest, callback: google.cloud.dataproc.v1.JobController.DeleteJobCallback): void;

                    /**
                     * Calls DeleteJob.
                     * @param request DeleteJobRequest message or plain object
                     * @returns Promise
                     */
                    public deleteJob(request: google.cloud.dataproc.v1.IDeleteJobRequest): Promise<google.protobuf.Empty>;
                }

                namespace JobController {

                    /**
                     * Callback as used by {@link google.cloud.dataproc.v1.JobController#submitJob}.
                     * @param error Error, if any
                     * @param [response] Job
                     */
                    type SubmitJobCallback = (error: (Error|null), response?: google.cloud.dataproc.v1.Job) => void;

                    /**
                     * Callback as used by {@link google.cloud.dataproc.v1.JobController#submitJobAsOperation}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type SubmitJobAsOperationCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.dataproc.v1.JobController#getJob}.
                     * @param error Error, if any
                     * @param [response] Job
                     */
                    type GetJobCallback = (error: (Error|null), response?: google.cloud.dataproc.v1.Job) => void;

                    /**
                     * Callback as used by {@link google.cloud.dataproc.v1.JobController#listJobs}.
                     * @param error Error, if any
                     * @param [response] ListJobsResponse
                     */
                    type ListJobsCallback = (error: (Error|null), response?: google.cloud.dataproc.v1.ListJobsResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.dataproc.v1.JobController#updateJob}.
                     * @param error Error, if any
                     * @param [response] Job
                     */
                    type UpdateJobCallback = (error: (Error|null), response?: google.cloud.dataproc.v1.Job) => void;

                    /**
                     * Callback as used by {@link google.cloud.dataproc.v1.JobController#cancelJob}.
                     * @param error Error, if any
                     * @param [response] Job
                     */
                    type CancelJobCallback = (error: (Error|null), response?: google.cloud.dataproc.v1.Job) => void;

                    /**
                     * Callback as used by {@link google.cloud.dataproc.v1.JobController#deleteJob}.
                     * @param error Error, if any
                     * @param [response] Empty
                     */
                    type DeleteJobCallback = (error: (Error|null), response?: google.protobuf.Empty) => void;
                }

                /** Properties of a LoggingConfig. */
                interface ILoggingConfig {

                    /** LoggingConfig driverLogLevels */
                    driverLogLevels?: ({ [k: string]: google.cloud.dataproc.v1.LoggingConfig.Level }|null);
                }

                /** Represents a LoggingConfig. */
                class LoggingConfig implements ILoggingConfig {

                    /**
                     * Constructs a new LoggingConfig.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.dataproc.v1.ILoggingConfig);

                    /** LoggingConfig driverLogLevels. */
                    public driverLogLevels: { [k: string]: google.cloud.dataproc.v1.LoggingConfig.Level };

                    /**
                     * Creates a new LoggingConfig instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns LoggingConfig instance
                     */
                    public static create(properties?: google.cloud.dataproc.v1.ILoggingConfig): google.cloud.dataproc.v1.LoggingConfig;

                    /**
                     * Encodes the specified LoggingConfig message. Does not implicitly {@link google.cloud.dataproc.v1.LoggingConfig.verify|verify} messages.
                     * @param message LoggingConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.dataproc.v1.ILoggingConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified LoggingConfig message, length delimited. Does not implicitly {@link google.cloud.dataproc.v1.LoggingConfig.verify|verify} messages.
                     * @param message LoggingConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.dataproc.v1.ILoggingConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a LoggingConfig message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns LoggingConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.dataproc.v1.LoggingConfig;

                    /**
                     * Decodes a LoggingConfig message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns LoggingConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.dataproc.v1.LoggingConfig;

                    /**
                     * Verifies a LoggingConfig message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a LoggingConfig message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns LoggingConfig
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.dataproc.v1.LoggingConfig;

                    /**
                     * Creates a plain object from a LoggingConfig message. Also converts values to other types if specified.
                     * @param message LoggingConfig
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.dataproc.v1.LoggingConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this LoggingConfig to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace LoggingConfig {

                    /** Level enum. */
                    enum Level {
                        LEVEL_UNSPECIFIED = 0,
                        ALL = 1,
                        TRACE = 2,
                        DEBUG = 3,
                        INFO = 4,
                        WARN = 5,
                        ERROR = 6,
                        FATAL = 7,
                        OFF = 8
                    }
                }

                /** Properties of a HadoopJob. */
                interface IHadoopJob {

                    /** HadoopJob mainJarFileUri */
                    mainJarFileUri?: (string|null);

                    /** HadoopJob mainClass */
                    mainClass?: (string|null);

                    /** HadoopJob args */
                    args?: (string[]|null);

                    /** HadoopJob jarFileUris */
                    jarFileUris?: (string[]|null);

                    /** HadoopJob fileUris */
                    fileUris?: (string[]|null);

                    /** HadoopJob archiveUris */
                    archiveUris?: (string[]|null);

                    /** HadoopJob properties */
                    properties?: ({ [k: string]: string }|null);

                    /** HadoopJob loggingConfig */
                    loggingConfig?: (google.cloud.dataproc.v1.ILoggingConfig|null);
                }

                /** Represents a HadoopJob. */
                class HadoopJob implements IHadoopJob {

                    /**
                     * Constructs a new HadoopJob.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.dataproc.v1.IHadoopJob);

                    /** HadoopJob mainJarFileUri. */
                    public mainJarFileUri?: (string|null);

                    /** HadoopJob mainClass. */
                    public mainClass?: (string|null);

                    /** HadoopJob args. */
                    public args: string[];

                    /** HadoopJob jarFileUris. */
                    public jarFileUris: string[];

                    /** HadoopJob fileUris. */
                    public fileUris: string[];

                    /** HadoopJob archiveUris. */
                    public archiveUris: string[];

                    /** HadoopJob properties. */
                    public properties: { [k: string]: string };

                    /** HadoopJob loggingConfig. */
                    public loggingConfig?: (google.cloud.dataproc.v1.ILoggingConfig|null);

                    /** HadoopJob driver. */
                    public driver?: ("mainJarFileUri"|"mainClass");

                    /**
                     * Creates a new HadoopJob instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns HadoopJob instance
                     */
                    public static create(properties?: google.cloud.dataproc.v1.IHadoopJob): google.cloud.dataproc.v1.HadoopJob;

                    /**
                     * Encodes the specified HadoopJob message. Does not implicitly {@link google.cloud.dataproc.v1.HadoopJob.verify|verify} messages.
                     * @param message HadoopJob message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.dataproc.v1.IHadoopJob, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified HadoopJob message, length delimited. Does not implicitly {@link google.cloud.dataproc.v1.HadoopJob.verify|verify} messages.
                     * @param message HadoopJob message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.dataproc.v1.IHadoopJob, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a HadoopJob message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns HadoopJob
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.dataproc.v1.HadoopJob;

                    /**
                     * Decodes a HadoopJob message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns HadoopJob
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.dataproc.v1.HadoopJob;

                    /**
                     * Verifies a HadoopJob message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a HadoopJob message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns HadoopJob
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.dataproc.v1.HadoopJob;

                    /**
                     * Creates a plain object from a HadoopJob message. Also converts values to other types if specified.
                     * @param message HadoopJob
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.dataproc.v1.HadoopJob, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this HadoopJob to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a SparkJob. */
                interface ISparkJob {

                    /** SparkJob mainJarFileUri */
                    mainJarFileUri?: (string|null);

                    /** SparkJob mainClass */
                    mainClass?: (string|null);

                    /** SparkJob args */
                    args?: (string[]|null);

                    /** SparkJob jarFileUris */
                    jarFileUris?: (string[]|null);

                    /** SparkJob fileUris */
                    fileUris?: (string[]|null);

                    /** SparkJob archiveUris */
                    archiveUris?: (string[]|null);

                    /** SparkJob properties */
                    properties?: ({ [k: string]: string }|null);

                    /** SparkJob loggingConfig */
                    loggingConfig?: (google.cloud.dataproc.v1.ILoggingConfig|null);
                }

                /** Represents a SparkJob. */
                class SparkJob implements ISparkJob {

                    /**
                     * Constructs a new SparkJob.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.dataproc.v1.ISparkJob);

                    /** SparkJob mainJarFileUri. */
                    public mainJarFileUri?: (string|null);

                    /** SparkJob mainClass. */
                    public mainClass?: (string|null);

                    /** SparkJob args. */
                    public args: string[];

                    /** SparkJob jarFileUris. */
                    public jarFileUris: string[];

                    /** SparkJob fileUris. */
                    public fileUris: string[];

                    /** SparkJob archiveUris. */
                    public archiveUris: string[];

                    /** SparkJob properties. */
                    public properties: { [k: string]: string };

                    /** SparkJob loggingConfig. */
                    public loggingConfig?: (google.cloud.dataproc.v1.ILoggingConfig|null);

                    /** SparkJob driver. */
                    public driver?: ("mainJarFileUri"|"mainClass");

                    /**
                     * Creates a new SparkJob instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns SparkJob instance
                     */
                    public static create(properties?: google.cloud.dataproc.v1.ISparkJob): google.cloud.dataproc.v1.SparkJob;

                    /**
                     * Encodes the specified SparkJob message. Does not implicitly {@link google.cloud.dataproc.v1.SparkJob.verify|verify} messages.
                     * @param message SparkJob message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.dataproc.v1.ISparkJob, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified SparkJob message, length delimited. Does not implicitly {@link google.cloud.dataproc.v1.SparkJob.verify|verify} messages.
                     * @param message SparkJob message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.dataproc.v1.ISparkJob, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a SparkJob message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns SparkJob
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.dataproc.v1.SparkJob;

                    /**
                     * Decodes a SparkJob message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns SparkJob
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.dataproc.v1.SparkJob;

                    /**
                     * Verifies a SparkJob message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a SparkJob message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns SparkJob
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.dataproc.v1.SparkJob;

                    /**
                     * Creates a plain object from a SparkJob message. Also converts values to other types if specified.
                     * @param message SparkJob
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.dataproc.v1.SparkJob, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this SparkJob to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a PySparkJob. */
                interface IPySparkJob {

                    /** PySparkJob mainPythonFileUri */
                    mainPythonFileUri?: (string|null);

                    /** PySparkJob args */
                    args?: (string[]|null);

                    /** PySparkJob pythonFileUris */
                    pythonFileUris?: (string[]|null);

                    /** PySparkJob jarFileUris */
                    jarFileUris?: (string[]|null);

                    /** PySparkJob fileUris */
                    fileUris?: (string[]|null);

                    /** PySparkJob archiveUris */
                    archiveUris?: (string[]|null);

                    /** PySparkJob properties */
                    properties?: ({ [k: string]: string }|null);

                    /** PySparkJob loggingConfig */
                    loggingConfig?: (google.cloud.dataproc.v1.ILoggingConfig|null);
                }

                /** Represents a PySparkJob. */
                class PySparkJob implements IPySparkJob {

                    /**
                     * Constructs a new PySparkJob.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.dataproc.v1.IPySparkJob);

                    /** PySparkJob mainPythonFileUri. */
                    public mainPythonFileUri: string;

                    /** PySparkJob args. */
                    public args: string[];

                    /** PySparkJob pythonFileUris. */
                    public pythonFileUris: string[];

                    /** PySparkJob jarFileUris. */
                    public jarFileUris: string[];

                    /** PySparkJob fileUris. */
                    public fileUris: string[];

                    /** PySparkJob archiveUris. */
                    public archiveUris: string[];

                    /** PySparkJob properties. */
                    public properties: { [k: string]: string };

                    /** PySparkJob loggingConfig. */
                    public loggingConfig?: (google.cloud.dataproc.v1.ILoggingConfig|null);

                    /**
                     * Creates a new PySparkJob instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns PySparkJob instance
                     */
                    public static create(properties?: google.cloud.dataproc.v1.IPySparkJob): google.cloud.dataproc.v1.PySparkJob;

                    /**
                     * Encodes the specified PySparkJob message. Does not implicitly {@link google.cloud.dataproc.v1.PySparkJob.verify|verify} messages.
                     * @param message PySparkJob message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.dataproc.v1.IPySparkJob, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified PySparkJob message, length delimited. Does not implicitly {@link google.cloud.dataproc.v1.PySparkJob.verify|verify} messages.
                     * @param message PySparkJob message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.dataproc.v1.IPySparkJob, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a PySparkJob message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns PySparkJob
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.dataproc.v1.PySparkJob;

                    /**
                     * Decodes a PySparkJob message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns PySparkJob
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.dataproc.v1.PySparkJob;

                    /**
                     * Verifies a PySparkJob message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a PySparkJob message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns PySparkJob
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.dataproc.v1.PySparkJob;

                    /**
                     * Creates a plain object from a PySparkJob message. Also converts values to other types if specified.
                     * @param message PySparkJob
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.dataproc.v1.PySparkJob, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this PySparkJob to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a QueryList. */
                interface IQueryList {

                    /** QueryList queries */
                    queries?: (string[]|null);
                }

                /** Represents a QueryList. */
                class QueryList implements IQueryList {

                    /**
                     * Constructs a new QueryList.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.dataproc.v1.IQueryList);

                    /** QueryList queries. */
                    public queries: string[];

                    /**
                     * Creates a new QueryList instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns QueryList instance
                     */
                    public static create(properties?: google.cloud.dataproc.v1.IQueryList): google.cloud.dataproc.v1.QueryList;

                    /**
                     * Encodes the specified QueryList message. Does not implicitly {@link google.cloud.dataproc.v1.QueryList.verify|verify} messages.
                     * @param message QueryList message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.dataproc.v1.IQueryList, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified QueryList message, length delimited. Does not implicitly {@link google.cloud.dataproc.v1.QueryList.verify|verify} messages.
                     * @param message QueryList message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.dataproc.v1.IQueryList, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a QueryList message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns QueryList
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.dataproc.v1.QueryList;

                    /**
                     * Decodes a QueryList message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns QueryList
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.dataproc.v1.QueryList;

                    /**
                     * Verifies a QueryList message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a QueryList message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns QueryList
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.dataproc.v1.QueryList;

                    /**
                     * Creates a plain object from a QueryList message. Also converts values to other types if specified.
                     * @param message QueryList
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.dataproc.v1.QueryList, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this QueryList to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a HiveJob. */
                interface IHiveJob {

                    /** HiveJob queryFileUri */
                    queryFileUri?: (string|null);

                    /** HiveJob queryList */
                    queryList?: (google.cloud.dataproc.v1.IQueryList|null);

                    /** HiveJob continueOnFailure */
                    continueOnFailure?: (boolean|null);

                    /** HiveJob scriptVariables */
                    scriptVariables?: ({ [k: string]: string }|null);

                    /** HiveJob properties */
                    properties?: ({ [k: string]: string }|null);

                    /** HiveJob jarFileUris */
                    jarFileUris?: (string[]|null);
                }

                /** Represents a HiveJob. */
                class HiveJob implements IHiveJob {

                    /**
                     * Constructs a new HiveJob.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.dataproc.v1.IHiveJob);

                    /** HiveJob queryFileUri. */
                    public queryFileUri?: (string|null);

                    /** HiveJob queryList. */
                    public queryList?: (google.cloud.dataproc.v1.IQueryList|null);

                    /** HiveJob continueOnFailure. */
                    public continueOnFailure: boolean;

                    /** HiveJob scriptVariables. */
                    public scriptVariables: { [k: string]: string };

                    /** HiveJob properties. */
                    public properties: { [k: string]: string };

                    /** HiveJob jarFileUris. */
                    public jarFileUris: string[];

                    /** HiveJob queries. */
                    public queries?: ("queryFileUri"|"queryList");

                    /**
                     * Creates a new HiveJob instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns HiveJob instance
                     */
                    public static create(properties?: google.cloud.dataproc.v1.IHiveJob): google.cloud.dataproc.v1.HiveJob;

                    /**
                     * Encodes the specified HiveJob message. Does not implicitly {@link google.cloud.dataproc.v1.HiveJob.verify|verify} messages.
                     * @param message HiveJob message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.dataproc.v1.IHiveJob, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified HiveJob message, length delimited. Does not implicitly {@link google.cloud.dataproc.v1.HiveJob.verify|verify} messages.
                     * @param message HiveJob message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.dataproc.v1.IHiveJob, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a HiveJob message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns HiveJob
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.dataproc.v1.HiveJob;

                    /**
                     * Decodes a HiveJob message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns HiveJob
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.dataproc.v1.HiveJob;

                    /**
                     * Verifies a HiveJob message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a HiveJob message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns HiveJob
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.dataproc.v1.HiveJob;

                    /**
                     * Creates a plain object from a HiveJob message. Also converts values to other types if specified.
                     * @param message HiveJob
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.dataproc.v1.HiveJob, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this HiveJob to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a SparkSqlJob. */
                interface ISparkSqlJob {

                    /** SparkSqlJob queryFileUri */
                    queryFileUri?: (string|null);

                    /** SparkSqlJob queryList */
                    queryList?: (google.cloud.dataproc.v1.IQueryList|null);

                    /** SparkSqlJob scriptVariables */
                    scriptVariables?: ({ [k: string]: string }|null);

                    /** SparkSqlJob properties */
                    properties?: ({ [k: string]: string }|null);

                    /** SparkSqlJob jarFileUris */
                    jarFileUris?: (string[]|null);

                    /** SparkSqlJob loggingConfig */
                    loggingConfig?: (google.cloud.dataproc.v1.ILoggingConfig|null);
                }

                /** Represents a SparkSqlJob. */
                class SparkSqlJob implements ISparkSqlJob {

                    /**
                     * Constructs a new SparkSqlJob.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.dataproc.v1.ISparkSqlJob);

                    /** SparkSqlJob queryFileUri. */
                    public queryFileUri?: (string|null);

                    /** SparkSqlJob queryList. */
                    public queryList?: (google.cloud.dataproc.v1.IQueryList|null);

                    /** SparkSqlJob scriptVariables. */
                    public scriptVariables: { [k: string]: string };

                    /** SparkSqlJob properties. */
                    public properties: { [k: string]: string };

                    /** SparkSqlJob jarFileUris. */
                    public jarFileUris: string[];

                    /** SparkSqlJob loggingConfig. */
                    public loggingConfig?: (google.cloud.dataproc.v1.ILoggingConfig|null);

                    /** SparkSqlJob queries. */
                    public queries?: ("queryFileUri"|"queryList");

                    /**
                     * Creates a new SparkSqlJob instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns SparkSqlJob instance
                     */
                    public static create(properties?: google.cloud.dataproc.v1.ISparkSqlJob): google.cloud.dataproc.v1.SparkSqlJob;

                    /**
                     * Encodes the specified SparkSqlJob message. Does not implicitly {@link google.cloud.dataproc.v1.SparkSqlJob.verify|verify} messages.
                     * @param message SparkSqlJob message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.dataproc.v1.ISparkSqlJob, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified SparkSqlJob message, length delimited. Does not implicitly {@link google.cloud.dataproc.v1.SparkSqlJob.verify|verify} messages.
                     * @param message SparkSqlJob message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.dataproc.v1.ISparkSqlJob, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a SparkSqlJob message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns SparkSqlJob
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.dataproc.v1.SparkSqlJob;

                    /**
                     * Decodes a SparkSqlJob message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns SparkSqlJob
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.dataproc.v1.SparkSqlJob;

                    /**
                     * Verifies a SparkSqlJob message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a SparkSqlJob message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns SparkSqlJob
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.dataproc.v1.SparkSqlJob;

                    /**
                     * Creates a plain object from a SparkSqlJob message. Also converts values to other types if specified.
                     * @param message SparkSqlJob
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.dataproc.v1.SparkSqlJob, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this SparkSqlJob to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a PigJob. */
                interface IPigJob {

                    /** PigJob queryFileUri */
                    queryFileUri?: (string|null);

                    /** PigJob queryList */
                    queryList?: (google.cloud.dataproc.v1.IQueryList|null);

                    /** PigJob continueOnFailure */
                    continueOnFailure?: (boolean|null);

                    /** PigJob scriptVariables */
                    scriptVariables?: ({ [k: string]: string }|null);

                    /** PigJob properties */
                    properties?: ({ [k: string]: string }|null);

                    /** PigJob jarFileUris */
                    jarFileUris?: (string[]|null);

                    /** PigJob loggingConfig */
                    loggingConfig?: (google.cloud.dataproc.v1.ILoggingConfig|null);
                }

                /** Represents a PigJob. */
                class PigJob implements IPigJob {

                    /**
                     * Constructs a new PigJob.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.dataproc.v1.IPigJob);

                    /** PigJob queryFileUri. */
                    public queryFileUri?: (string|null);

                    /** PigJob queryList. */
                    public queryList?: (google.cloud.dataproc.v1.IQueryList|null);

                    /** PigJob continueOnFailure. */
                    public continueOnFailure: boolean;

                    /** PigJob scriptVariables. */
                    public scriptVariables: { [k: string]: string };

                    /** PigJob properties. */
                    public properties: { [k: string]: string };

                    /** PigJob jarFileUris. */
                    public jarFileUris: string[];

                    /** PigJob loggingConfig. */
                    public loggingConfig?: (google.cloud.dataproc.v1.ILoggingConfig|null);

                    /** PigJob queries. */
                    public queries?: ("queryFileUri"|"queryList");

                    /**
                     * Creates a new PigJob instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns PigJob instance
                     */
                    public static create(properties?: google.cloud.dataproc.v1.IPigJob): google.cloud.dataproc.v1.PigJob;

                    /**
                     * Encodes the specified PigJob message. Does not implicitly {@link google.cloud.dataproc.v1.PigJob.verify|verify} messages.
                     * @param message PigJob message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.dataproc.v1.IPigJob, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified PigJob message, length delimited. Does not implicitly {@link google.cloud.dataproc.v1.PigJob.verify|verify} messages.
                     * @param message PigJob message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.dataproc.v1.IPigJob, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a PigJob message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns PigJob
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.dataproc.v1.PigJob;

                    /**
                     * Decodes a PigJob message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns PigJob
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.dataproc.v1.PigJob;

                    /**
                     * Verifies a PigJob message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a PigJob message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns PigJob
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.dataproc.v1.PigJob;

                    /**
                     * Creates a plain object from a PigJob message. Also converts values to other types if specified.
                     * @param message PigJob
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.dataproc.v1.PigJob, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this PigJob to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a SparkRJob. */
                interface ISparkRJob {

                    /** SparkRJob mainRFileUri */
                    mainRFileUri?: (string|null);

                    /** SparkRJob args */
                    args?: (string[]|null);

                    /** SparkRJob fileUris */
                    fileUris?: (string[]|null);

                    /** SparkRJob archiveUris */
                    archiveUris?: (string[]|null);

                    /** SparkRJob properties */
                    properties?: ({ [k: string]: string }|null);

                    /** SparkRJob loggingConfig */
                    loggingConfig?: (google.cloud.dataproc.v1.ILoggingConfig|null);
                }

                /** Represents a SparkRJob. */
                class SparkRJob implements ISparkRJob {

                    /**
                     * Constructs a new SparkRJob.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.dataproc.v1.ISparkRJob);

                    /** SparkRJob mainRFileUri. */
                    public mainRFileUri: string;

                    /** SparkRJob args. */
                    public args: string[];

                    /** SparkRJob fileUris. */
                    public fileUris: string[];

                    /** SparkRJob archiveUris. */
                    public archiveUris: string[];

                    /** SparkRJob properties. */
                    public properties: { [k: string]: string };

                    /** SparkRJob loggingConfig. */
                    public loggingConfig?: (google.cloud.dataproc.v1.ILoggingConfig|null);

                    /**
                     * Creates a new SparkRJob instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns SparkRJob instance
                     */
                    public static create(properties?: google.cloud.dataproc.v1.ISparkRJob): google.cloud.dataproc.v1.SparkRJob;

                    /**
                     * Encodes the specified SparkRJob message. Does not implicitly {@link google.cloud.dataproc.v1.SparkRJob.verify|verify} messages.
                     * @param message SparkRJob message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.dataproc.v1.ISparkRJob, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified SparkRJob message, length delimited. Does not implicitly {@link google.cloud.dataproc.v1.SparkRJob.verify|verify} messages.
                     * @param message SparkRJob message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.dataproc.v1.ISparkRJob, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a SparkRJob message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns SparkRJob
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.dataproc.v1.SparkRJob;

                    /**
                     * Decodes a SparkRJob message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns SparkRJob
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.dataproc.v1.SparkRJob;

                    /**
                     * Verifies a SparkRJob message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a SparkRJob message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns SparkRJob
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.dataproc.v1.SparkRJob;

                    /**
                     * Creates a plain object from a SparkRJob message. Also converts values to other types if specified.
                     * @param message SparkRJob
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.dataproc.v1.SparkRJob, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this SparkRJob to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a PrestoJob. */
                interface IPrestoJob {

                    /** PrestoJob queryFileUri */
                    queryFileUri?: (string|null);

                    /** PrestoJob queryList */
                    queryList?: (google.cloud.dataproc.v1.IQueryList|null);

                    /** PrestoJob continueOnFailure */
                    continueOnFailure?: (boolean|null);

                    /** PrestoJob outputFormat */
                    outputFormat?: (string|null);

                    /** PrestoJob clientTags */
                    clientTags?: (string[]|null);

                    /** PrestoJob properties */
                    properties?: ({ [k: string]: string }|null);

                    /** PrestoJob loggingConfig */
                    loggingConfig?: (google.cloud.dataproc.v1.ILoggingConfig|null);
                }

                /** Represents a PrestoJob. */
                class PrestoJob implements IPrestoJob {

                    /**
                     * Constructs a new PrestoJob.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.dataproc.v1.IPrestoJob);

                    /** PrestoJob queryFileUri. */
                    public queryFileUri?: (string|null);

                    /** PrestoJob queryList. */
                    public queryList?: (google.cloud.dataproc.v1.IQueryList|null);

                    /** PrestoJob continueOnFailure. */
                    public continueOnFailure: boolean;

                    /** PrestoJob outputFormat. */
                    public outputFormat: string;

                    /** PrestoJob clientTags. */
                    public clientTags: string[];

                    /** PrestoJob properties. */
                    public properties: { [k: string]: string };

                    /** PrestoJob loggingConfig. */
                    public loggingConfig?: (google.cloud.dataproc.v1.ILoggingConfig|null);

                    /** PrestoJob queries. */
                    public queries?: ("queryFileUri"|"queryList");

                    /**
                     * Creates a new PrestoJob instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns PrestoJob instance
                     */
                    public static create(properties?: google.cloud.dataproc.v1.IPrestoJob): google.cloud.dataproc.v1.PrestoJob;

                    /**
                     * Encodes the specified PrestoJob message. Does not implicitly {@link google.cloud.dataproc.v1.PrestoJob.verify|verify} messages.
                     * @param message PrestoJob message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.dataproc.v1.IPrestoJob, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified PrestoJob message, length delimited. Does not implicitly {@link google.cloud.dataproc.v1.PrestoJob.verify|verify} messages.
                     * @param message PrestoJob message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.dataproc.v1.IPrestoJob, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a PrestoJob message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns PrestoJob
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.dataproc.v1.PrestoJob;

                    /**
                     * Decodes a PrestoJob message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns PrestoJob
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.dataproc.v1.PrestoJob;

                    /**
                     * Verifies a PrestoJob message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a PrestoJob message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns PrestoJob
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.dataproc.v1.PrestoJob;

                    /**
                     * Creates a plain object from a PrestoJob message. Also converts values to other types if specified.
                     * @param message PrestoJob
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.dataproc.v1.PrestoJob, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this PrestoJob to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a JobPlacement. */
                interface IJobPlacement {

                    /** JobPlacement clusterName */
                    clusterName?: (string|null);

                    /** JobPlacement clusterUuid */
                    clusterUuid?: (string|null);

                    /** JobPlacement clusterLabels */
                    clusterLabels?: ({ [k: string]: string }|null);
                }

                /** Represents a JobPlacement. */
                class JobPlacement implements IJobPlacement {

                    /**
                     * Constructs a new JobPlacement.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.dataproc.v1.IJobPlacement);

                    /** JobPlacement clusterName. */
                    public clusterName: string;

                    /** JobPlacement clusterUuid. */
                    public clusterUuid: string;

                    /** JobPlacement clusterLabels. */
                    public clusterLabels: { [k: string]: string };

                    /**
                     * Creates a new JobPlacement instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns JobPlacement instance
                     */
                    public static create(properties?: google.cloud.dataproc.v1.IJobPlacement): google.cloud.dataproc.v1.JobPlacement;

                    /**
                     * Encodes the specified JobPlacement message. Does not implicitly {@link google.cloud.dataproc.v1.JobPlacement.verify|verify} messages.
                     * @param message JobPlacement message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.dataproc.v1.IJobPlacement, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified JobPlacement message, length delimited. Does not implicitly {@link google.cloud.dataproc.v1.JobPlacement.verify|verify} messages.
                     * @param message JobPlacement message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.dataproc.v1.IJobPlacement, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a JobPlacement message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns JobPlacement
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.dataproc.v1.JobPlacement;

                    /**
                     * Decodes a JobPlacement message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns JobPlacement
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.dataproc.v1.JobPlacement;

                    /**
                     * Verifies a JobPlacement message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a JobPlacement message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns JobPlacement
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.dataproc.v1.JobPlacement;

                    /**
                     * Creates a plain object from a JobPlacement message. Also converts values to other types if specified.
                     * @param message JobPlacement
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.dataproc.v1.JobPlacement, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this JobPlacement to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a JobStatus. */
                interface IJobStatus {

                    /** JobStatus state */
                    state?: (google.cloud.dataproc.v1.JobStatus.State|keyof typeof google.cloud.dataproc.v1.JobStatus.State|null);

                    /** JobStatus details */
                    details?: (string|null);

                    /** JobStatus stateStartTime */
                    stateStartTime?: (google.protobuf.ITimestamp|null);

                    /** JobStatus substate */
                    substate?: (google.cloud.dataproc.v1.JobStatus.Substate|keyof typeof google.cloud.dataproc.v1.JobStatus.Substate|null);
                }

                /** Represents a JobStatus. */
                class JobStatus implements IJobStatus {

                    /**
                     * Constructs a new JobStatus.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.dataproc.v1.IJobStatus);

                    /** JobStatus state. */
                    public state: (google.cloud.dataproc.v1.JobStatus.State|keyof typeof google.cloud.dataproc.v1.JobStatus.State);

                    /** JobStatus details. */
                    public details: string;

                    /** JobStatus stateStartTime. */
                    public stateStartTime?: (google.protobuf.ITimestamp|null);

                    /** JobStatus substate. */
                    public substate: (google.cloud.dataproc.v1.JobStatus.Substate|keyof typeof google.cloud.dataproc.v1.JobStatus.Substate);

                    /**
                     * Creates a new JobStatus instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns JobStatus instance
                     */
                    public static create(properties?: google.cloud.dataproc.v1.IJobStatus): google.cloud.dataproc.v1.JobStatus;

                    /**
                     * Encodes the specified JobStatus message. Does not implicitly {@link google.cloud.dataproc.v1.JobStatus.verify|verify} messages.
                     * @param message JobStatus message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.dataproc.v1.IJobStatus, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified JobStatus message, length delimited. Does not implicitly {@link google.cloud.dataproc.v1.JobStatus.verify|verify} messages.
                     * @param message JobStatus message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.dataproc.v1.IJobStatus, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a JobStatus message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns JobStatus
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.dataproc.v1.JobStatus;

                    /**
                     * Decodes a JobStatus message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns JobStatus
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.dataproc.v1.JobStatus;

                    /**
                     * Verifies a JobStatus message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a JobStatus message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns JobStatus
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.dataproc.v1.JobStatus;

                    /**
                     * Creates a plain object from a JobStatus message. Also converts values to other types if specified.
                     * @param message JobStatus
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.dataproc.v1.JobStatus, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this JobStatus to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace JobStatus {

                    /** State enum. */
                    enum State {
                        STATE_UNSPECIFIED = 0,
                        PENDING = 1,
                        SETUP_DONE = 8,
                        RUNNING = 2,
                        CANCEL_PENDING = 3,
                        CANCEL_STARTED = 7,
                        CANCELLED = 4,
                        DONE = 5,
                        ERROR = 6,
                        ATTEMPT_FAILURE = 9
                    }

                    /** Substate enum. */
                    enum Substate {
                        UNSPECIFIED = 0,
                        SUBMITTED = 1,
                        QUEUED = 2,
                        STALE_STATUS = 3
                    }
                }

                /** Properties of a JobReference. */
                interface IJobReference {

                    /** JobReference projectId */
                    projectId?: (string|null);

                    /** JobReference jobId */
                    jobId?: (string|null);
                }

                /** Represents a JobReference. */
                class JobReference implements IJobReference {

                    /**
                     * Constructs a new JobReference.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.dataproc.v1.IJobReference);

                    /** JobReference projectId. */
                    public projectId: string;

                    /** JobReference jobId. */
                    public jobId: string;

                    /**
                     * Creates a new JobReference instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns JobReference instance
                     */
                    public static create(properties?: google.cloud.dataproc.v1.IJobReference): google.cloud.dataproc.v1.JobReference;

                    /**
                     * Encodes the specified JobReference message. Does not implicitly {@link google.cloud.dataproc.v1.JobReference.verify|verify} messages.
                     * @param message JobReference message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.dataproc.v1.IJobReference, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified JobReference message, length delimited. Does not implicitly {@link google.cloud.dataproc.v1.JobReference.verify|verify} messages.
                     * @param message JobReference message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.dataproc.v1.IJobReference, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a JobReference message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns JobReference
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.dataproc.v1.JobReference;

                    /**
                     * Decodes a JobReference message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns JobReference
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.dataproc.v1.JobReference;

                    /**
                     * Verifies a JobReference message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a JobReference message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns JobReference
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.dataproc.v1.JobReference;

                    /**
                     * Creates a plain object from a JobReference message. Also converts values to other types if specified.
                     * @param message JobReference
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.dataproc.v1.JobReference, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this JobReference to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a YarnApplication. */
                interface IYarnApplication {

                    /** YarnApplication name */
                    name?: (string|null);

                    /** YarnApplication state */
                    state?: (google.cloud.dataproc.v1.YarnApplication.State|keyof typeof google.cloud.dataproc.v1.YarnApplication.State|null);

                    /** YarnApplication progress */
                    progress?: (number|null);

                    /** YarnApplication trackingUrl */
                    trackingUrl?: (string|null);
                }

                /** Represents a YarnApplication. */
                class YarnApplication implements IYarnApplication {

                    /**
                     * Constructs a new YarnApplication.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.dataproc.v1.IYarnApplication);

                    /** YarnApplication name. */
                    public name: string;

                    /** YarnApplication state. */
                    public state: (google.cloud.dataproc.v1.YarnApplication.State|keyof typeof google.cloud.dataproc.v1.YarnApplication.State);

                    /** YarnApplication progress. */
                    public progress: number;

                    /** YarnApplication trackingUrl. */
                    public trackingUrl: string;

                    /**
                     * Creates a new YarnApplication instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns YarnApplication instance
                     */
                    public static create(properties?: google.cloud.dataproc.v1.IYarnApplication): google.cloud.dataproc.v1.YarnApplication;

                    /**
                     * Encodes the specified YarnApplication message. Does not implicitly {@link google.cloud.dataproc.v1.YarnApplication.verify|verify} messages.
                     * @param message YarnApplication message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.dataproc.v1.IYarnApplication, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified YarnApplication message, length delimited. Does not implicitly {@link google.cloud.dataproc.v1.YarnApplication.verify|verify} messages.
                     * @param message YarnApplication message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.dataproc.v1.IYarnApplication, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a YarnApplication message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns YarnApplication
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.dataproc.v1.YarnApplication;

                    /**
                     * Decodes a YarnApplication message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns YarnApplication
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.dataproc.v1.YarnApplication;

                    /**
                     * Verifies a YarnApplication message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a YarnApplication message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns YarnApplication
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.dataproc.v1.YarnApplication;

                    /**
                     * Creates a plain object from a YarnApplication message. Also converts values to other types if specified.
                     * @param message YarnApplication
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.dataproc.v1.YarnApplication, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this YarnApplication to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace YarnApplication {

                    /** State enum. */
                    enum State {
                        STATE_UNSPECIFIED = 0,
                        NEW = 1,
                        NEW_SAVING = 2,
                        SUBMITTED = 3,
                        ACCEPTED = 4,
                        RUNNING = 5,
                        FINISHED = 6,
                        FAILED = 7,
                        KILLED = 8
                    }
                }

                /** Properties of a Job. */
                interface IJob {

                    /** Job reference */
                    reference?: (google.cloud.dataproc.v1.IJobReference|null);

                    /** Job placement */
                    placement?: (google.cloud.dataproc.v1.IJobPlacement|null);

                    /** Job hadoopJob */
                    hadoopJob?: (google.cloud.dataproc.v1.IHadoopJob|null);

                    /** Job sparkJob */
                    sparkJob?: (google.cloud.dataproc.v1.ISparkJob|null);

                    /** Job pysparkJob */
                    pysparkJob?: (google.cloud.dataproc.v1.IPySparkJob|null);

                    /** Job hiveJob */
                    hiveJob?: (google.cloud.dataproc.v1.IHiveJob|null);

                    /** Job pigJob */
                    pigJob?: (google.cloud.dataproc.v1.IPigJob|null);

                    /** Job sparkRJob */
                    sparkRJob?: (google.cloud.dataproc.v1.ISparkRJob|null);

                    /** Job sparkSqlJob */
                    sparkSqlJob?: (google.cloud.dataproc.v1.ISparkSqlJob|null);

                    /** Job prestoJob */
                    prestoJob?: (google.cloud.dataproc.v1.IPrestoJob|null);

                    /** Job status */
                    status?: (google.cloud.dataproc.v1.IJobStatus|null);

                    /** Job statusHistory */
                    statusHistory?: (google.cloud.dataproc.v1.IJobStatus[]|null);

                    /** Job yarnApplications */
                    yarnApplications?: (google.cloud.dataproc.v1.IYarnApplication[]|null);

                    /** Job driverOutputResourceUri */
                    driverOutputResourceUri?: (string|null);

                    /** Job driverControlFilesUri */
                    driverControlFilesUri?: (string|null);

                    /** Job labels */
                    labels?: ({ [k: string]: string }|null);

                    /** Job scheduling */
                    scheduling?: (google.cloud.dataproc.v1.IJobScheduling|null);

                    /** Job jobUuid */
                    jobUuid?: (string|null);

                    /** Job done */
                    done?: (boolean|null);
                }

                /** Represents a Job. */
                class Job implements IJob {

                    /**
                     * Constructs a new Job.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.dataproc.v1.IJob);

                    /** Job reference. */
                    public reference?: (google.cloud.dataproc.v1.IJobReference|null);

                    /** Job placement. */
                    public placement?: (google.cloud.dataproc.v1.IJobPlacement|null);

                    /** Job hadoopJob. */
                    public hadoopJob?: (google.cloud.dataproc.v1.IHadoopJob|null);

                    /** Job sparkJob. */
                    public sparkJob?: (google.cloud.dataproc.v1.ISparkJob|null);

                    /** Job pysparkJob. */
                    public pysparkJob?: (google.cloud.dataproc.v1.IPySparkJob|null);

                    /** Job hiveJob. */
                    public hiveJob?: (google.cloud.dataproc.v1.IHiveJob|null);

                    /** Job pigJob. */
                    public pigJob?: (google.cloud.dataproc.v1.IPigJob|null);

                    /** Job sparkRJob. */
                    public sparkRJob?: (google.cloud.dataproc.v1.ISparkRJob|null);

                    /** Job sparkSqlJob. */
                    public sparkSqlJob?: (google.cloud.dataproc.v1.ISparkSqlJob|null);

                    /** Job prestoJob. */
                    public prestoJob?: (google.cloud.dataproc.v1.IPrestoJob|null);

                    /** Job status. */
                    public status?: (google.cloud.dataproc.v1.IJobStatus|null);

                    /** Job statusHistory. */
                    public statusHistory: google.cloud.dataproc.v1.IJobStatus[];

                    /** Job yarnApplications. */
                    public yarnApplications: google.cloud.dataproc.v1.IYarnApplication[];

                    /** Job driverOutputResourceUri. */
                    public driverOutputResourceUri: string;

                    /** Job driverControlFilesUri. */
                    public driverControlFilesUri: string;

                    /** Job labels. */
                    public labels: { [k: string]: string };

                    /** Job scheduling. */
                    public scheduling?: (google.cloud.dataproc.v1.IJobScheduling|null);

                    /** Job jobUuid. */
                    public jobUuid: string;

                    /** Job done. */
                    public done: boolean;

                    /** Job typeJob. */
                    public typeJob?: ("hadoopJob"|"sparkJob"|"pysparkJob"|"hiveJob"|"pigJob"|"sparkRJob"|"sparkSqlJob"|"prestoJob");

                    /**
                     * Creates a new Job instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Job instance
                     */
                    public static create(properties?: google.cloud.dataproc.v1.IJob): google.cloud.dataproc.v1.Job;

                    /**
                     * Encodes the specified Job message. Does not implicitly {@link google.cloud.dataproc.v1.Job.verify|verify} messages.
                     * @param message Job message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.dataproc.v1.IJob, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Job message, length delimited. Does not implicitly {@link google.cloud.dataproc.v1.Job.verify|verify} messages.
                     * @param message Job message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.dataproc.v1.IJob, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Job message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Job
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.dataproc.v1.Job;

                    /**
                     * Decodes a Job message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Job
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.dataproc.v1.Job;

                    /**
                     * Verifies a Job message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Job message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Job
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.dataproc.v1.Job;

                    /**
                     * Creates a plain object from a Job message. Also converts values to other types if specified.
                     * @param message Job
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.dataproc.v1.Job, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Job to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a JobScheduling. */
                interface IJobScheduling {

                    /** JobScheduling maxFailuresPerHour */
                    maxFailuresPerHour?: (number|null);

                    /** JobScheduling maxFailuresTotal */
                    maxFailuresTotal?: (number|null);
                }

                /** Represents a JobScheduling. */
                class JobScheduling implements IJobScheduling {

                    /**
                     * Constructs a new JobScheduling.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.dataproc.v1.IJobScheduling);

                    /** JobScheduling maxFailuresPerHour. */
                    public maxFailuresPerHour: number;

                    /** JobScheduling maxFailuresTotal. */
                    public maxFailuresTotal: number;

                    /**
                     * Creates a new JobScheduling instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns JobScheduling instance
                     */
                    public static create(properties?: google.cloud.dataproc.v1.IJobScheduling): google.cloud.dataproc.v1.JobScheduling;

                    /**
                     * Encodes the specified JobScheduling message. Does not implicitly {@link google.cloud.dataproc.v1.JobScheduling.verify|verify} messages.
                     * @param message JobScheduling message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.dataproc.v1.IJobScheduling, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified JobScheduling message, length delimited. Does not implicitly {@link google.cloud.dataproc.v1.JobScheduling.verify|verify} messages.
                     * @param message JobScheduling message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.dataproc.v1.IJobScheduling, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a JobScheduling message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns JobScheduling
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.dataproc.v1.JobScheduling;

                    /**
                     * Decodes a JobScheduling message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns JobScheduling
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.dataproc.v1.JobScheduling;

                    /**
                     * Verifies a JobScheduling message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a JobScheduling message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns JobScheduling
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.dataproc.v1.JobScheduling;

                    /**
                     * Creates a plain object from a JobScheduling message. Also converts values to other types if specified.
                     * @param message JobScheduling
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.dataproc.v1.JobScheduling, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this JobScheduling to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a SubmitJobRequest. */
                interface ISubmitJobRequest {

                    /** SubmitJobRequest projectId */
                    projectId?: (string|null);

                    /** SubmitJobRequest region */
                    region?: (string|null);

                    /** SubmitJobRequest job */
                    job?: (google.cloud.dataproc.v1.IJob|null);

                    /** SubmitJobRequest requestId */
                    requestId?: (string|null);
                }

                /** Represents a SubmitJobRequest. */
                class SubmitJobRequest implements ISubmitJobRequest {

                    /**
                     * Constructs a new SubmitJobRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.dataproc.v1.ISubmitJobRequest);

                    /** SubmitJobRequest projectId. */
                    public projectId: string;

                    /** SubmitJobRequest region. */
                    public region: string;

                    /** SubmitJobRequest job. */
                    public job?: (google.cloud.dataproc.v1.IJob|null);

                    /** SubmitJobRequest requestId. */
                    public requestId: string;

                    /**
                     * Creates a new SubmitJobRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns SubmitJobRequest instance
                     */
                    public static create(properties?: google.cloud.dataproc.v1.ISubmitJobRequest): google.cloud.dataproc.v1.SubmitJobRequest;

                    /**
                     * Encodes the specified SubmitJobRequest message. Does not implicitly {@link google.cloud.dataproc.v1.SubmitJobRequest.verify|verify} messages.
                     * @param message SubmitJobRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.dataproc.v1.ISubmitJobRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified SubmitJobRequest message, length delimited. Does not implicitly {@link google.cloud.dataproc.v1.SubmitJobRequest.verify|verify} messages.
                     * @param message SubmitJobRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.dataproc.v1.ISubmitJobRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a SubmitJobRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns SubmitJobRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.dataproc.v1.SubmitJobRequest;

                    /**
                     * Decodes a SubmitJobRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns SubmitJobRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.dataproc.v1.SubmitJobRequest;

                    /**
                     * Verifies a SubmitJobRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a SubmitJobRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns SubmitJobRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.dataproc.v1.SubmitJobRequest;

                    /**
                     * Creates a plain object from a SubmitJobRequest message. Also converts values to other types if specified.
                     * @param message SubmitJobRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.dataproc.v1.SubmitJobRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this SubmitJobRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a JobMetadata. */
                interface IJobMetadata {

                    /** JobMetadata jobId */
                    jobId?: (string|null);

                    /** JobMetadata status */
                    status?: (google.cloud.dataproc.v1.IJobStatus|null);

                    /** JobMetadata operationType */
                    operationType?: (string|null);

                    /** JobMetadata startTime */
                    startTime?: (google.protobuf.ITimestamp|null);
                }

                /** Represents a JobMetadata. */
                class JobMetadata implements IJobMetadata {

                    /**
                     * Constructs a new JobMetadata.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.dataproc.v1.IJobMetadata);

                    /** JobMetadata jobId. */
                    public jobId: string;

                    /** JobMetadata status. */
                    public status?: (google.cloud.dataproc.v1.IJobStatus|null);

                    /** JobMetadata operationType. */
                    public operationType: string;

                    /** JobMetadata startTime. */
                    public startTime?: (google.protobuf.ITimestamp|null);

                    /**
                     * Creates a new JobMetadata instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns JobMetadata instance
                     */
                    public static create(properties?: google.cloud.dataproc.v1.IJobMetadata): google.cloud.dataproc.v1.JobMetadata;

                    /**
                     * Encodes the specified JobMetadata message. Does not implicitly {@link google.cloud.dataproc.v1.JobMetadata.verify|verify} messages.
                     * @param message JobMetadata message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.dataproc.v1.IJobMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified JobMetadata message, length delimited. Does not implicitly {@link google.cloud.dataproc.v1.JobMetadata.verify|verify} messages.
                     * @param message JobMetadata message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.dataproc.v1.IJobMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a JobMetadata message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns JobMetadata
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.dataproc.v1.JobMetadata;

                    /**
                     * Decodes a JobMetadata message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns JobMetadata
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.dataproc.v1.JobMetadata;

                    /**
                     * Verifies a JobMetadata message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a JobMetadata message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns JobMetadata
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.dataproc.v1.JobMetadata;

                    /**
                     * Creates a plain object from a JobMetadata message. Also converts values to other types if specified.
                     * @param message JobMetadata
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.dataproc.v1.JobMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this JobMetadata to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a GetJobRequest. */
                interface IGetJobRequest {

                    /** GetJobRequest projectId */
                    projectId?: (string|null);

                    /** GetJobRequest region */
                    region?: (string|null);

                    /** GetJobRequest jobId */
                    jobId?: (string|null);
                }

                /** Represents a GetJobRequest. */
                class GetJobRequest implements IGetJobRequest {

                    /**
                     * Constructs a new GetJobRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.dataproc.v1.IGetJobRequest);

                    /** GetJobRequest projectId. */
                    public projectId: string;

                    /** GetJobRequest region. */
                    public region: string;

                    /** GetJobRequest jobId. */
                    public jobId: string;

                    /**
                     * Creates a new GetJobRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetJobRequest instance
                     */
                    public static create(properties?: google.cloud.dataproc.v1.IGetJobRequest): google.cloud.dataproc.v1.GetJobRequest;

                    /**
                     * Encodes the specified GetJobRequest message. Does not implicitly {@link google.cloud.dataproc.v1.GetJobRequest.verify|verify} messages.
                     * @param message GetJobRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.dataproc.v1.IGetJobRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetJobRequest message, length delimited. Does not implicitly {@link google.cloud.dataproc.v1.GetJobRequest.verify|verify} messages.
                     * @param message GetJobRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.dataproc.v1.IGetJobRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetJobRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetJobRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.dataproc.v1.GetJobRequest;

                    /**
                     * Decodes a GetJobRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetJobRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.dataproc.v1.GetJobRequest;

                    /**
                     * Verifies a GetJobRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetJobRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetJobRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.dataproc.v1.GetJobRequest;

                    /**
                     * Creates a plain object from a GetJobRequest message. Also converts values to other types if specified.
                     * @param message GetJobRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.dataproc.v1.GetJobRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetJobRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ListJobsRequest. */
                interface IListJobsRequest {

                    /** ListJobsRequest projectId */
                    projectId?: (string|null);

                    /** ListJobsRequest region */
                    region?: (string|null);

                    /** ListJobsRequest pageSize */
                    pageSize?: (number|null);

                    /** ListJobsRequest pageToken */
                    pageToken?: (string|null);

                    /** ListJobsRequest clusterName */
                    clusterName?: (string|null);

                    /** ListJobsRequest jobStateMatcher */
                    jobStateMatcher?: (google.cloud.dataproc.v1.ListJobsRequest.JobStateMatcher|keyof typeof google.cloud.dataproc.v1.ListJobsRequest.JobStateMatcher|null);

                    /** ListJobsRequest filter */
                    filter?: (string|null);
                }

                /** Represents a ListJobsRequest. */
                class ListJobsRequest implements IListJobsRequest {

                    /**
                     * Constructs a new ListJobsRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.dataproc.v1.IListJobsRequest);

                    /** ListJobsRequest projectId. */
                    public projectId: string;

                    /** ListJobsRequest region. */
                    public region: string;

                    /** ListJobsRequest pageSize. */
                    public pageSize: number;

                    /** ListJobsRequest pageToken. */
                    public pageToken: string;

                    /** ListJobsRequest clusterName. */
                    public clusterName: string;

                    /** ListJobsRequest jobStateMatcher. */
                    public jobStateMatcher: (google.cloud.dataproc.v1.ListJobsRequest.JobStateMatcher|keyof typeof google.cloud.dataproc.v1.ListJobsRequest.JobStateMatcher);

                    /** ListJobsRequest filter. */
                    public filter: string;

                    /**
                     * Creates a new ListJobsRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListJobsRequest instance
                     */
                    public static create(properties?: google.cloud.dataproc.v1.IListJobsRequest): google.cloud.dataproc.v1.ListJobsRequest;

                    /**
                     * Encodes the specified ListJobsRequest message. Does not implicitly {@link google.cloud.dataproc.v1.ListJobsRequest.verify|verify} messages.
                     * @param message ListJobsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.dataproc.v1.IListJobsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListJobsRequest message, length delimited. Does not implicitly {@link google.cloud.dataproc.v1.ListJobsRequest.verify|verify} messages.
                     * @param message ListJobsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.dataproc.v1.IListJobsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListJobsRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListJobsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.dataproc.v1.ListJobsRequest;

                    /**
                     * Decodes a ListJobsRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListJobsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.dataproc.v1.ListJobsRequest;

                    /**
                     * Verifies a ListJobsRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListJobsRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListJobsRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.dataproc.v1.ListJobsRequest;

                    /**
                     * Creates a plain object from a ListJobsRequest message. Also converts values to other types if specified.
                     * @param message ListJobsRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.dataproc.v1.ListJobsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListJobsRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace ListJobsRequest {

                    /** JobStateMatcher enum. */
                    enum JobStateMatcher {
                        ALL = 0,
                        ACTIVE = 1,
                        NON_ACTIVE = 2
                    }
                }

                /** Properties of an UpdateJobRequest. */
                interface IUpdateJobRequest {

                    /** UpdateJobRequest projectId */
                    projectId?: (string|null);

                    /** UpdateJobRequest region */
                    region?: (string|null);

                    /** UpdateJobRequest jobId */
                    jobId?: (string|null);

                    /** UpdateJobRequest job */
                    job?: (google.cloud.dataproc.v1.IJob|null);

                    /** UpdateJobRequest updateMask */
                    updateMask?: (google.protobuf.IFieldMask|null);
                }

                /** Represents an UpdateJobRequest. */
                class UpdateJobRequest implements IUpdateJobRequest {

                    /**
                     * Constructs a new UpdateJobRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.dataproc.v1.IUpdateJobRequest);

                    /** UpdateJobRequest projectId. */
                    public projectId: string;

                    /** UpdateJobRequest region. */
                    public region: string;

                    /** UpdateJobRequest jobId. */
                    public jobId: string;

                    /** UpdateJobRequest job. */
                    public job?: (google.cloud.dataproc.v1.IJob|null);

                    /** UpdateJobRequest updateMask. */
                    public updateMask?: (google.protobuf.IFieldMask|null);

                    /**
                     * Creates a new UpdateJobRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns UpdateJobRequest instance
                     */
                    public static create(properties?: google.cloud.dataproc.v1.IUpdateJobRequest): google.cloud.dataproc.v1.UpdateJobRequest;

                    /**
                     * Encodes the specified UpdateJobRequest message. Does not implicitly {@link google.cloud.dataproc.v1.UpdateJobRequest.verify|verify} messages.
                     * @param message UpdateJobRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.dataproc.v1.IUpdateJobRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified UpdateJobRequest message, length delimited. Does not implicitly {@link google.cloud.dataproc.v1.UpdateJobRequest.verify|verify} messages.
                     * @param message UpdateJobRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.dataproc.v1.IUpdateJobRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an UpdateJobRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns UpdateJobRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.dataproc.v1.UpdateJobRequest;

                    /**
                     * Decodes an UpdateJobRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns UpdateJobRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.dataproc.v1.UpdateJobRequest;

                    /**
                     * Verifies an UpdateJobRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an UpdateJobRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns UpdateJobRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.dataproc.v1.UpdateJobRequest;

                    /**
                     * Creates a plain object from an UpdateJobRequest message. Also converts values to other types if specified.
                     * @param message UpdateJobRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.dataproc.v1.UpdateJobRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this UpdateJobRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ListJobsResponse. */
                interface IListJobsResponse {

                    /** ListJobsResponse jobs */
                    jobs?: (google.cloud.dataproc.v1.IJob[]|null);

                    /** ListJobsResponse nextPageToken */
                    nextPageToken?: (string|null);
                }

                /** Represents a ListJobsResponse. */
                class ListJobsResponse implements IListJobsResponse {

                    /**
                     * Constructs a new ListJobsResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.dataproc.v1.IListJobsResponse);

                    /** ListJobsResponse jobs. */
                    public jobs: google.cloud.dataproc.v1.IJob[];

                    /** ListJobsResponse nextPageToken. */
                    public nextPageToken: string;

                    /**
                     * Creates a new ListJobsResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListJobsResponse instance
                     */
                    public static create(properties?: google.cloud.dataproc.v1.IListJobsResponse): google.cloud.dataproc.v1.ListJobsResponse;

                    /**
                     * Encodes the specified ListJobsResponse message. Does not implicitly {@link google.cloud.dataproc.v1.ListJobsResponse.verify|verify} messages.
                     * @param message ListJobsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.dataproc.v1.IListJobsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListJobsResponse message, length delimited. Does not implicitly {@link google.cloud.dataproc.v1.ListJobsResponse.verify|verify} messages.
                     * @param message ListJobsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.dataproc.v1.IListJobsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListJobsResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListJobsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.dataproc.v1.ListJobsResponse;

                    /**
                     * Decodes a ListJobsResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListJobsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.dataproc.v1.ListJobsResponse;

                    /**
                     * Verifies a ListJobsResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListJobsResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListJobsResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.dataproc.v1.ListJobsResponse;

                    /**
                     * Creates a plain object from a ListJobsResponse message. Also converts values to other types if specified.
                     * @param message ListJobsResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.dataproc.v1.ListJobsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListJobsResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a CancelJobRequest. */
                interface ICancelJobRequest {

                    /** CancelJobRequest projectId */
                    projectId?: (string|null);

                    /** CancelJobRequest region */
                    region?: (string|null);

                    /** CancelJobRequest jobId */
                    jobId?: (string|null);
                }

                /** Represents a CancelJobRequest. */
                class CancelJobRequest implements ICancelJobRequest {

                    /**
                     * Constructs a new CancelJobRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.dataproc.v1.ICancelJobRequest);

                    /** CancelJobRequest projectId. */
                    public projectId: string;

                    /** CancelJobRequest region. */
                    public region: string;

                    /** CancelJobRequest jobId. */
                    public jobId: string;

                    /**
                     * Creates a new CancelJobRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CancelJobRequest instance
                     */
                    public static create(properties?: google.cloud.dataproc.v1.ICancelJobRequest): google.cloud.dataproc.v1.CancelJobRequest;

                    /**
                     * Encodes the specified CancelJobRequest message. Does not implicitly {@link google.cloud.dataproc.v1.CancelJobRequest.verify|verify} messages.
                     * @param message CancelJobRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.dataproc.v1.ICancelJobRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CancelJobRequest message, length delimited. Does not implicitly {@link google.cloud.dataproc.v1.CancelJobRequest.verify|verify} messages.
                     * @param message CancelJobRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.dataproc.v1.ICancelJobRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CancelJobRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CancelJobRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.dataproc.v1.CancelJobRequest;

                    /**
                     * Decodes a CancelJobRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CancelJobRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.dataproc.v1.CancelJobRequest;

                    /**
                     * Verifies a CancelJobRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CancelJobRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CancelJobRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.dataproc.v1.CancelJobRequest;

                    /**
                     * Creates a plain object from a CancelJobRequest message. Also converts values to other types if specified.
                     * @param message CancelJobRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.dataproc.v1.CancelJobRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CancelJobRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a DeleteJobRequest. */
                interface IDeleteJobRequest {

                    /** DeleteJobRequest projectId */
                    projectId?: (string|null);

                    /** DeleteJobRequest region */
                    region?: (string|null);

                    /** DeleteJobRequest jobId */
                    jobId?: (string|null);
                }

                /** Represents a DeleteJobRequest. */
                class DeleteJobRequest implements IDeleteJobRequest {

                    /**
                     * Constructs a new DeleteJobRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.dataproc.v1.IDeleteJobRequest);

                    /** DeleteJobRequest projectId. */
                    public projectId: string;

                    /** DeleteJobRequest region. */
                    public region: string;

                    /** DeleteJobRequest jobId. */
                    public jobId: string;

                    /**
                     * Creates a new DeleteJobRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DeleteJobRequest instance
                     */
                    public static create(properties?: google.cloud.dataproc.v1.IDeleteJobRequest): google.cloud.dataproc.v1.DeleteJobRequest;

                    /**
                     * Encodes the specified DeleteJobRequest message. Does not implicitly {@link google.cloud.dataproc.v1.DeleteJobRequest.verify|verify} messages.
                     * @param message DeleteJobRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.dataproc.v1.IDeleteJobRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DeleteJobRequest message, length delimited. Does not implicitly {@link google.cloud.dataproc.v1.DeleteJobRequest.verify|verify} messages.
                     * @param message DeleteJobRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.dataproc.v1.IDeleteJobRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DeleteJobRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DeleteJobRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.dataproc.v1.DeleteJobRequest;

                    /**
                     * Decodes a DeleteJobRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DeleteJobRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.dataproc.v1.DeleteJobRequest;

                    /**
                     * Verifies a DeleteJobRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DeleteJobRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DeleteJobRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.dataproc.v1.DeleteJobRequest;

                    /**
                     * Creates a plain object from a DeleteJobRequest message. Also converts values to other types if specified.
                     * @param message DeleteJobRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.dataproc.v1.DeleteJobRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DeleteJobRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a BatchOperationMetadata. */
                interface IBatchOperationMetadata {

                    /** BatchOperationMetadata batch */
                    batch?: (string|null);

                    /** BatchOperationMetadata batchUuid */
                    batchUuid?: (string|null);

                    /** BatchOperationMetadata createTime */
                    createTime?: (google.protobuf.ITimestamp|null);

                    /** BatchOperationMetadata doneTime */
                    doneTime?: (google.protobuf.ITimestamp|null);

                    /** BatchOperationMetadata operationType */
                    operationType?: (google.cloud.dataproc.v1.BatchOperationMetadata.BatchOperationType|keyof typeof google.cloud.dataproc.v1.BatchOperationMetadata.BatchOperationType|null);

                    /** BatchOperationMetadata description */
                    description?: (string|null);

                    /** BatchOperationMetadata labels */
                    labels?: ({ [k: string]: string }|null);

                    /** BatchOperationMetadata warnings */
                    warnings?: (string[]|null);
                }

                /** Represents a BatchOperationMetadata. */
                class BatchOperationMetadata implements IBatchOperationMetadata {

                    /**
                     * Constructs a new BatchOperationMetadata.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.dataproc.v1.IBatchOperationMetadata);

                    /** BatchOperationMetadata batch. */
                    public batch: string;

                    /** BatchOperationMetadata batchUuid. */
                    public batchUuid: string;

                    /** BatchOperationMetadata createTime. */
                    public createTime?: (google.protobuf.ITimestamp|null);

                    /** BatchOperationMetadata doneTime. */
                    public doneTime?: (google.protobuf.ITimestamp|null);

                    /** BatchOperationMetadata operationType. */
                    public operationType: (google.cloud.dataproc.v1.BatchOperationMetadata.BatchOperationType|keyof typeof google.cloud.dataproc.v1.BatchOperationMetadata.BatchOperationType);

                    /** BatchOperationMetadata description. */
                    public description: string;

                    /** BatchOperationMetadata labels. */
                    public labels: { [k: string]: string };

                    /** BatchOperationMetadata warnings. */
                    public warnings: string[];

                    /**
                     * Creates a new BatchOperationMetadata instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns BatchOperationMetadata instance
                     */
                    public static create(properties?: google.cloud.dataproc.v1.IBatchOperationMetadata): google.cloud.dataproc.v1.BatchOperationMetadata;

                    /**
                     * Encodes the specified BatchOperationMetadata message. Does not implicitly {@link google.cloud.dataproc.v1.BatchOperationMetadata.verify|verify} messages.
                     * @param message BatchOperationMetadata message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.dataproc.v1.IBatchOperationMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified BatchOperationMetadata message, length delimited. Does not implicitly {@link google.cloud.dataproc.v1.BatchOperationMetadata.verify|verify} messages.
                     * @param message BatchOperationMetadata message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.dataproc.v1.IBatchOperationMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a BatchOperationMetadata message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns BatchOperationMetadata
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.dataproc.v1.BatchOperationMetadata;

                    /**
                     * Decodes a BatchOperationMetadata message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns BatchOperationMetadata
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.dataproc.v1.BatchOperationMetadata;

                    /**
                     * Verifies a BatchOperationMetadata message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a BatchOperationMetadata message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns BatchOperationMetadata
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.dataproc.v1.BatchOperationMetadata;

                    /**
                     * Creates a plain object from a BatchOperationMetadata message. Also converts values to other types if specified.
                     * @param message BatchOperationMetadata
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.dataproc.v1.BatchOperationMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this BatchOperationMetadata to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace BatchOperationMetadata {

                    /** BatchOperationType enum. */
                    enum BatchOperationType {
                        BATCH_OPERATION_TYPE_UNSPECIFIED = 0,
                        BATCH = 1
                    }
                }

                /** Properties of a ClusterOperationStatus. */
                interface IClusterOperationStatus {

                    /** ClusterOperationStatus state */
                    state?: (google.cloud.dataproc.v1.ClusterOperationStatus.State|keyof typeof google.cloud.dataproc.v1.ClusterOperationStatus.State|null);

                    /** ClusterOperationStatus innerState */
                    innerState?: (string|null);

                    /** ClusterOperationStatus details */
                    details?: (string|null);

                    /** ClusterOperationStatus stateStartTime */
                    stateStartTime?: (google.protobuf.ITimestamp|null);
                }

                /** Represents a ClusterOperationStatus. */
                class ClusterOperationStatus implements IClusterOperationStatus {

                    /**
                     * Constructs a new ClusterOperationStatus.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.dataproc.v1.IClusterOperationStatus);

                    /** ClusterOperationStatus state. */
                    public state: (google.cloud.dataproc.v1.ClusterOperationStatus.State|keyof typeof google.cloud.dataproc.v1.ClusterOperationStatus.State);

                    /** ClusterOperationStatus innerState. */
                    public innerState: string;

                    /** ClusterOperationStatus details. */
                    public details: string;

                    /** ClusterOperationStatus stateStartTime. */
                    public stateStartTime?: (google.protobuf.ITimestamp|null);

                    /**
                     * Creates a new ClusterOperationStatus instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ClusterOperationStatus instance
                     */
                    public static create(properties?: google.cloud.dataproc.v1.IClusterOperationStatus): google.cloud.dataproc.v1.ClusterOperationStatus;

                    /**
                     * Encodes the specified ClusterOperationStatus message. Does not implicitly {@link google.cloud.dataproc.v1.ClusterOperationStatus.verify|verify} messages.
                     * @param message ClusterOperationStatus message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.dataproc.v1.IClusterOperationStatus, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ClusterOperationStatus message, length delimited. Does not implicitly {@link google.cloud.dataproc.v1.ClusterOperationStatus.verify|verify} messages.
                     * @param message ClusterOperationStatus message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.dataproc.v1.IClusterOperationStatus, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ClusterOperationStatus message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ClusterOperationStatus
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.dataproc.v1.ClusterOperationStatus;

                    /**
                     * Decodes a ClusterOperationStatus message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ClusterOperationStatus
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.dataproc.v1.ClusterOperationStatus;

                    /**
                     * Verifies a ClusterOperationStatus message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ClusterOperationStatus message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ClusterOperationStatus
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.dataproc.v1.ClusterOperationStatus;

                    /**
                     * Creates a plain object from a ClusterOperationStatus message. Also converts values to other types if specified.
                     * @param message ClusterOperationStatus
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.dataproc.v1.ClusterOperationStatus, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ClusterOperationStatus to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace ClusterOperationStatus {

                    /** State enum. */
                    enum State {
                        UNKNOWN = 0,
                        PENDING = 1,
                        RUNNING = 2,
                        DONE = 3
                    }
                }

                /** Properties of a ClusterOperationMetadata. */
                interface IClusterOperationMetadata {

                    /** ClusterOperationMetadata clusterName */
                    clusterName?: (string|null);

                    /** ClusterOperationMetadata clusterUuid */
                    clusterUuid?: (string|null);

                    /** ClusterOperationMetadata status */
                    status?: (google.cloud.dataproc.v1.IClusterOperationStatus|null);

                    /** ClusterOperationMetadata statusHistory */
                    statusHistory?: (google.cloud.dataproc.v1.IClusterOperationStatus[]|null);

                    /** ClusterOperationMetadata operationType */
                    operationType?: (string|null);

                    /** ClusterOperationMetadata description */
                    description?: (string|null);

                    /** ClusterOperationMetadata labels */
                    labels?: ({ [k: string]: string }|null);

                    /** ClusterOperationMetadata warnings */
                    warnings?: (string[]|null);
                }

                /** Represents a ClusterOperationMetadata. */
                class ClusterOperationMetadata implements IClusterOperationMetadata {

                    /**
                     * Constructs a new ClusterOperationMetadata.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.dataproc.v1.IClusterOperationMetadata);

                    /** ClusterOperationMetadata clusterName. */
                    public clusterName: string;

                    /** ClusterOperationMetadata clusterUuid. */
                    public clusterUuid: string;

                    /** ClusterOperationMetadata status. */
                    public status?: (google.cloud.dataproc.v1.IClusterOperationStatus|null);

                    /** ClusterOperationMetadata statusHistory. */
                    public statusHistory: google.cloud.dataproc.v1.IClusterOperationStatus[];

                    /** ClusterOperationMetadata operationType. */
                    public operationType: string;

                    /** ClusterOperationMetadata description. */
                    public description: string;

                    /** ClusterOperationMetadata labels. */
                    public labels: { [k: string]: string };

                    /** ClusterOperationMetadata warnings. */
                    public warnings: string[];

                    /**
                     * Creates a new ClusterOperationMetadata instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ClusterOperationMetadata instance
                     */
                    public static create(properties?: google.cloud.dataproc.v1.IClusterOperationMetadata): google.cloud.dataproc.v1.ClusterOperationMetadata;

                    /**
                     * Encodes the specified ClusterOperationMetadata message. Does not implicitly {@link google.cloud.dataproc.v1.ClusterOperationMetadata.verify|verify} messages.
                     * @param message ClusterOperationMetadata message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.dataproc.v1.IClusterOperationMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ClusterOperationMetadata message, length delimited. Does not implicitly {@link google.cloud.dataproc.v1.ClusterOperationMetadata.verify|verify} messages.
                     * @param message ClusterOperationMetadata message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.dataproc.v1.IClusterOperationMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ClusterOperationMetadata message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ClusterOperationMetadata
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.dataproc.v1.ClusterOperationMetadata;

                    /**
                     * Decodes a ClusterOperationMetadata message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ClusterOperationMetadata
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.dataproc.v1.ClusterOperationMetadata;

                    /**
                     * Verifies a ClusterOperationMetadata message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ClusterOperationMetadata message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ClusterOperationMetadata
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.dataproc.v1.ClusterOperationMetadata;

                    /**
                     * Creates a plain object from a ClusterOperationMetadata message. Also converts values to other types if specified.
                     * @param message ClusterOperationMetadata
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.dataproc.v1.ClusterOperationMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ClusterOperationMetadata to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Represents a WorkflowTemplateService */
                class WorkflowTemplateService extends $protobuf.rpc.Service {

                    /**
                     * Constructs a new WorkflowTemplateService service.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     */
                    constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

                    /**
                     * Creates new WorkflowTemplateService service using the specified rpc implementation.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     * @returns RPC service. Useful where requests and/or responses are streamed.
                     */
                    public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): WorkflowTemplateService;

                    /**
                     * Calls CreateWorkflowTemplate.
                     * @param request CreateWorkflowTemplateRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and WorkflowTemplate
                     */
                    public createWorkflowTemplate(request: google.cloud.dataproc.v1.ICreateWorkflowTemplateRequest, callback: google.cloud.dataproc.v1.WorkflowTemplateService.CreateWorkflowTemplateCallback): void;

                    /**
                     * Calls CreateWorkflowTemplate.
                     * @param request CreateWorkflowTemplateRequest message or plain object
                     * @returns Promise
                     */
                    public createWorkflowTemplate(request: google.cloud.dataproc.v1.ICreateWorkflowTemplateRequest): Promise<google.cloud.dataproc.v1.WorkflowTemplate>;

                    /**
                     * Calls GetWorkflowTemplate.
                     * @param request GetWorkflowTemplateRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and WorkflowTemplate
                     */
                    public getWorkflowTemplate(request: google.cloud.dataproc.v1.IGetWorkflowTemplateRequest, callback: google.cloud.dataproc.v1.WorkflowTemplateService.GetWorkflowTemplateCallback): void;

                    /**
                     * Calls GetWorkflowTemplate.
                     * @param request GetWorkflowTemplateRequest message or plain object
                     * @returns Promise
                     */
                    public getWorkflowTemplate(request: google.cloud.dataproc.v1.IGetWorkflowTemplateRequest): Promise<google.cloud.dataproc.v1.WorkflowTemplate>;

                    /**
                     * Calls InstantiateWorkflowTemplate.
                     * @param request InstantiateWorkflowTemplateRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public instantiateWorkflowTemplate(request: google.cloud.dataproc.v1.IInstantiateWorkflowTemplateRequest, callback: google.cloud.dataproc.v1.WorkflowTemplateService.InstantiateWorkflowTemplateCallback): void;

                    /**
                     * Calls InstantiateWorkflowTemplate.
                     * @param request InstantiateWorkflowTemplateRequest message or plain object
                     * @returns Promise
                     */
                    public instantiateWorkflowTemplate(request: google.cloud.dataproc.v1.IInstantiateWorkflowTemplateRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls InstantiateInlineWorkflowTemplate.
                     * @param request InstantiateInlineWorkflowTemplateRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public instantiateInlineWorkflowTemplate(request: google.cloud.dataproc.v1.IInstantiateInlineWorkflowTemplateRequest, callback: google.cloud.dataproc.v1.WorkflowTemplateService.InstantiateInlineWorkflowTemplateCallback): void;

                    /**
                     * Calls InstantiateInlineWorkflowTemplate.
                     * @param request InstantiateInlineWorkflowTemplateRequest message or plain object
                     * @returns Promise
                     */
                    public instantiateInlineWorkflowTemplate(request: google.cloud.dataproc.v1.IInstantiateInlineWorkflowTemplateRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls UpdateWorkflowTemplate.
                     * @param request UpdateWorkflowTemplateRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and WorkflowTemplate
                     */
                    public updateWorkflowTemplate(request: google.cloud.dataproc.v1.IUpdateWorkflowTemplateRequest, callback: google.cloud.dataproc.v1.WorkflowTemplateService.UpdateWorkflowTemplateCallback): void;

                    /**
                     * Calls UpdateWorkflowTemplate.
                     * @param request UpdateWorkflowTemplateRequest message or plain object
                     * @returns Promise
                     */
                    public updateWorkflowTemplate(request: google.cloud.dataproc.v1.IUpdateWorkflowTemplateRequest): Promise<google.cloud.dataproc.v1.WorkflowTemplate>;

                    /**
                     * Calls ListWorkflowTemplates.
                     * @param request ListWorkflowTemplatesRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListWorkflowTemplatesResponse
                     */
                    public listWorkflowTemplates(request: google.cloud.dataproc.v1.IListWorkflowTemplatesRequest, callback: google.cloud.dataproc.v1.WorkflowTemplateService.ListWorkflowTemplatesCallback): void;

                    /**
                     * Calls ListWorkflowTemplates.
                     * @param request ListWorkflowTemplatesRequest message or plain object
                     * @returns Promise
                     */
                    public listWorkflowTemplates(request: google.cloud.dataproc.v1.IListWorkflowTemplatesRequest): Promise<google.cloud.dataproc.v1.ListWorkflowTemplatesResponse>;

                    /**
                     * Calls DeleteWorkflowTemplate.
                     * @param request DeleteWorkflowTemplateRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Empty
                     */
                    public deleteWorkflowTemplate(request: google.cloud.dataproc.v1.IDeleteWorkflowTemplateRequest, callback: google.cloud.dataproc.v1.WorkflowTemplateService.DeleteWorkflowTemplateCallback): void;

                    /**
                     * Calls DeleteWorkflowTemplate.
                     * @param request DeleteWorkflowTemplateRequest message or plain object
                     * @returns Promise
                     */
                    public deleteWorkflowTemplate(request: google.cloud.dataproc.v1.IDeleteWorkflowTemplateRequest): Promise<google.protobuf.Empty>;
                }

                namespace WorkflowTemplateService {

                    /**
                     * Callback as used by {@link google.cloud.dataproc.v1.WorkflowTemplateService#createWorkflowTemplate}.
                     * @param error Error, if any
                     * @param [response] WorkflowTemplate
                     */
                    type CreateWorkflowTemplateCallback = (error: (Error|null), response?: google.cloud.dataproc.v1.WorkflowTemplate) => void;

                    /**
                     * Callback as used by {@link google.cloud.dataproc.v1.WorkflowTemplateService#getWorkflowTemplate}.
                     * @param error Error, if any
                     * @param [response] WorkflowTemplate
                     */
                    type GetWorkflowTemplateCallback = (error: (Error|null), response?: google.cloud.dataproc.v1.WorkflowTemplate) => void;

                    /**
                     * Callback as used by {@link google.cloud.dataproc.v1.WorkflowTemplateService#instantiateWorkflowTemplate}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type InstantiateWorkflowTemplateCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.dataproc.v1.WorkflowTemplateService#instantiateInlineWorkflowTemplate}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type InstantiateInlineWorkflowTemplateCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.dataproc.v1.WorkflowTemplateService#updateWorkflowTemplate}.
                     * @param error Error, if any
                     * @param [response] WorkflowTemplate
                     */
                    type UpdateWorkflowTemplateCallback = (error: (Error|null), response?: google.cloud.dataproc.v1.WorkflowTemplate) => void;

                    /**
                     * Callback as used by {@link google.cloud.dataproc.v1.WorkflowTemplateService#listWorkflowTemplates}.
                     * @param error Error, if any
                     * @param [response] ListWorkflowTemplatesResponse
                     */
                    type ListWorkflowTemplatesCallback = (error: (Error|null), response?: google.cloud.dataproc.v1.ListWorkflowTemplatesResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.dataproc.v1.WorkflowTemplateService#deleteWorkflowTemplate}.
                     * @param error Error, if any
                     * @param [response] Empty
                     */
                    type DeleteWorkflowTemplateCallback = (error: (Error|null), response?: google.protobuf.Empty) => void;
                }

                /** Properties of a WorkflowTemplate. */
                interface IWorkflowTemplate {

                    /** WorkflowTemplate id */
                    id?: (string|null);

                    /** WorkflowTemplate name */
                    name?: (string|null);

                    /** WorkflowTemplate version */
                    version?: (number|null);

                    /** WorkflowTemplate createTime */
                    createTime?: (google.protobuf.ITimestamp|null);

                    /** WorkflowTemplate updateTime */
                    updateTime?: (google.protobuf.ITimestamp|null);

                    /** WorkflowTemplate labels */
                    labels?: ({ [k: string]: string }|null);

                    /** WorkflowTemplate placement */
                    placement?: (google.cloud.dataproc.v1.IWorkflowTemplatePlacement|null);

                    /** WorkflowTemplate jobs */
                    jobs?: (google.cloud.dataproc.v1.IOrderedJob[]|null);

                    /** WorkflowTemplate parameters */
                    parameters?: (google.cloud.dataproc.v1.ITemplateParameter[]|null);

                    /** WorkflowTemplate dagTimeout */
                    dagTimeout?: (google.protobuf.IDuration|null);
                }

                /** Represents a WorkflowTemplate. */
                class WorkflowTemplate implements IWorkflowTemplate {

                    /**
                     * Constructs a new WorkflowTemplate.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.dataproc.v1.IWorkflowTemplate);

                    /** WorkflowTemplate id. */
                    public id: string;

                    /** WorkflowTemplate name. */
                    public name: string;

                    /** WorkflowTemplate version. */
                    public version: number;

                    /** WorkflowTemplate createTime. */
                    public createTime?: (google.protobuf.ITimestamp|null);

                    /** WorkflowTemplate updateTime. */
                    public updateTime?: (google.protobuf.ITimestamp|null);

                    /** WorkflowTemplate labels. */
                    public labels: { [k: string]: string };

                    /** WorkflowTemplate placement. */
                    public placement?: (google.cloud.dataproc.v1.IWorkflowTemplatePlacement|null);

                    /** WorkflowTemplate jobs. */
                    public jobs: google.cloud.dataproc.v1.IOrderedJob[];

                    /** WorkflowTemplate parameters. */
                    public parameters: google.cloud.dataproc.v1.ITemplateParameter[];

                    /** WorkflowTemplate dagTimeout. */
                    public dagTimeout?: (google.protobuf.IDuration|null);

                    /**
                     * Creates a new WorkflowTemplate instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns WorkflowTemplate instance
                     */
                    public static create(properties?: google.cloud.dataproc.v1.IWorkflowTemplate): google.cloud.dataproc.v1.WorkflowTemplate;

                    /**
                     * Encodes the specified WorkflowTemplate message. Does not implicitly {@link google.cloud.dataproc.v1.WorkflowTemplate.verify|verify} messages.
                     * @param message WorkflowTemplate message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.dataproc.v1.IWorkflowTemplate, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified WorkflowTemplate message, length delimited. Does not implicitly {@link google.cloud.dataproc.v1.WorkflowTemplate.verify|verify} messages.
                     * @param message WorkflowTemplate message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.dataproc.v1.IWorkflowTemplate, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a WorkflowTemplate message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns WorkflowTemplate
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.dataproc.v1.WorkflowTemplate;

                    /**
                     * Decodes a WorkflowTemplate message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns WorkflowTemplate
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.dataproc.v1.WorkflowTemplate;

                    /**
                     * Verifies a WorkflowTemplate message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a WorkflowTemplate message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns WorkflowTemplate
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.dataproc.v1.WorkflowTemplate;

                    /**
                     * Creates a plain object from a WorkflowTemplate message. Also converts values to other types if specified.
                     * @param message WorkflowTemplate
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.dataproc.v1.WorkflowTemplate, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this WorkflowTemplate to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a WorkflowTemplatePlacement. */
                interface IWorkflowTemplatePlacement {

                    /** WorkflowTemplatePlacement managedCluster */
                    managedCluster?: (google.cloud.dataproc.v1.IManagedCluster|null);

                    /** WorkflowTemplatePlacement clusterSelector */
                    clusterSelector?: (google.cloud.dataproc.v1.IClusterSelector|null);
                }

                /** Represents a WorkflowTemplatePlacement. */
                class WorkflowTemplatePlacement implements IWorkflowTemplatePlacement {

                    /**
                     * Constructs a new WorkflowTemplatePlacement.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.dataproc.v1.IWorkflowTemplatePlacement);

                    /** WorkflowTemplatePlacement managedCluster. */
                    public managedCluster?: (google.cloud.dataproc.v1.IManagedCluster|null);

                    /** WorkflowTemplatePlacement clusterSelector. */
                    public clusterSelector?: (google.cloud.dataproc.v1.IClusterSelector|null);

                    /** WorkflowTemplatePlacement placement. */
                    public placement?: ("managedCluster"|"clusterSelector");

                    /**
                     * Creates a new WorkflowTemplatePlacement instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns WorkflowTemplatePlacement instance
                     */
                    public static create(properties?: google.cloud.dataproc.v1.IWorkflowTemplatePlacement): google.cloud.dataproc.v1.WorkflowTemplatePlacement;

                    /**
                     * Encodes the specified WorkflowTemplatePlacement message. Does not implicitly {@link google.cloud.dataproc.v1.WorkflowTemplatePlacement.verify|verify} messages.
                     * @param message WorkflowTemplatePlacement message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.dataproc.v1.IWorkflowTemplatePlacement, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified WorkflowTemplatePlacement message, length delimited. Does not implicitly {@link google.cloud.dataproc.v1.WorkflowTemplatePlacement.verify|verify} messages.
                     * @param message WorkflowTemplatePlacement message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.dataproc.v1.IWorkflowTemplatePlacement, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a WorkflowTemplatePlacement message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns WorkflowTemplatePlacement
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.dataproc.v1.WorkflowTemplatePlacement;

                    /**
                     * Decodes a WorkflowTemplatePlacement message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns WorkflowTemplatePlacement
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.dataproc.v1.WorkflowTemplatePlacement;

                    /**
                     * Verifies a WorkflowTemplatePlacement message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a WorkflowTemplatePlacement message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns WorkflowTemplatePlacement
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.dataproc.v1.WorkflowTemplatePlacement;

                    /**
                     * Creates a plain object from a WorkflowTemplatePlacement message. Also converts values to other types if specified.
                     * @param message WorkflowTemplatePlacement
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.dataproc.v1.WorkflowTemplatePlacement, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this WorkflowTemplatePlacement to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ManagedCluster. */
                interface IManagedCluster {

                    /** ManagedCluster clusterName */
                    clusterName?: (string|null);

                    /** ManagedCluster config */
                    config?: (google.cloud.dataproc.v1.IClusterConfig|null);

                    /** ManagedCluster labels */
                    labels?: ({ [k: string]: string }|null);
                }

                /** Represents a ManagedCluster. */
                class ManagedCluster implements IManagedCluster {

                    /**
                     * Constructs a new ManagedCluster.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.dataproc.v1.IManagedCluster);

                    /** ManagedCluster clusterName. */
                    public clusterName: string;

                    /** ManagedCluster config. */
                    public config?: (google.cloud.dataproc.v1.IClusterConfig|null);

                    /** ManagedCluster labels. */
                    public labels: { [k: string]: string };

                    /**
                     * Creates a new ManagedCluster instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ManagedCluster instance
                     */
                    public static create(properties?: google.cloud.dataproc.v1.IManagedCluster): google.cloud.dataproc.v1.ManagedCluster;

                    /**
                     * Encodes the specified ManagedCluster message. Does not implicitly {@link google.cloud.dataproc.v1.ManagedCluster.verify|verify} messages.
                     * @param message ManagedCluster message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.dataproc.v1.IManagedCluster, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ManagedCluster message, length delimited. Does not implicitly {@link google.cloud.dataproc.v1.ManagedCluster.verify|verify} messages.
                     * @param message ManagedCluster message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.dataproc.v1.IManagedCluster, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ManagedCluster message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ManagedCluster
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.dataproc.v1.ManagedCluster;

                    /**
                     * Decodes a ManagedCluster message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ManagedCluster
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.dataproc.v1.ManagedCluster;

                    /**
                     * Verifies a ManagedCluster message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ManagedCluster message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ManagedCluster
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.dataproc.v1.ManagedCluster;

                    /**
                     * Creates a plain object from a ManagedCluster message. Also converts values to other types if specified.
                     * @param message ManagedCluster
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.dataproc.v1.ManagedCluster, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ManagedCluster to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ClusterSelector. */
                interface IClusterSelector {

                    /** ClusterSelector zone */
                    zone?: (string|null);

                    /** ClusterSelector clusterLabels */
                    clusterLabels?: ({ [k: string]: string }|null);
                }

                /** Represents a ClusterSelector. */
                class ClusterSelector implements IClusterSelector {

                    /**
                     * Constructs a new ClusterSelector.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.dataproc.v1.IClusterSelector);

                    /** ClusterSelector zone. */
                    public zone: string;

                    /** ClusterSelector clusterLabels. */
                    public clusterLabels: { [k: string]: string };

                    /**
                     * Creates a new ClusterSelector instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ClusterSelector instance
                     */
                    public static create(properties?: google.cloud.dataproc.v1.IClusterSelector): google.cloud.dataproc.v1.ClusterSelector;

                    /**
                     * Encodes the specified ClusterSelector message. Does not implicitly {@link google.cloud.dataproc.v1.ClusterSelector.verify|verify} messages.
                     * @param message ClusterSelector message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.dataproc.v1.IClusterSelector, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ClusterSelector message, length delimited. Does not implicitly {@link google.cloud.dataproc.v1.ClusterSelector.verify|verify} messages.
                     * @param message ClusterSelector message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.dataproc.v1.IClusterSelector, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ClusterSelector message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ClusterSelector
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.dataproc.v1.ClusterSelector;

                    /**
                     * Decodes a ClusterSelector message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ClusterSelector
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.dataproc.v1.ClusterSelector;

                    /**
                     * Verifies a ClusterSelector message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ClusterSelector message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ClusterSelector
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.dataproc.v1.ClusterSelector;

                    /**
                     * Creates a plain object from a ClusterSelector message. Also converts values to other types if specified.
                     * @param message ClusterSelector
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.dataproc.v1.ClusterSelector, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ClusterSelector to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of an OrderedJob. */
                interface IOrderedJob {

                    /** OrderedJob stepId */
                    stepId?: (string|null);

                    /** OrderedJob hadoopJob */
                    hadoopJob?: (google.cloud.dataproc.v1.IHadoopJob|null);

                    /** OrderedJob sparkJob */
                    sparkJob?: (google.cloud.dataproc.v1.ISparkJob|null);

                    /** OrderedJob pysparkJob */
                    pysparkJob?: (google.cloud.dataproc.v1.IPySparkJob|null);

                    /** OrderedJob hiveJob */
                    hiveJob?: (google.cloud.dataproc.v1.IHiveJob|null);

                    /** OrderedJob pigJob */
                    pigJob?: (google.cloud.dataproc.v1.IPigJob|null);

                    /** OrderedJob sparkRJob */
                    sparkRJob?: (google.cloud.dataproc.v1.ISparkRJob|null);

                    /** OrderedJob sparkSqlJob */
                    sparkSqlJob?: (google.cloud.dataproc.v1.ISparkSqlJob|null);

                    /** OrderedJob prestoJob */
                    prestoJob?: (google.cloud.dataproc.v1.IPrestoJob|null);

                    /** OrderedJob labels */
                    labels?: ({ [k: string]: string }|null);

                    /** OrderedJob scheduling */
                    scheduling?: (google.cloud.dataproc.v1.IJobScheduling|null);

                    /** OrderedJob prerequisiteStepIds */
                    prerequisiteStepIds?: (string[]|null);
                }

                /** Represents an OrderedJob. */
                class OrderedJob implements IOrderedJob {

                    /**
                     * Constructs a new OrderedJob.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.dataproc.v1.IOrderedJob);

                    /** OrderedJob stepId. */
                    public stepId: string;

                    /** OrderedJob hadoopJob. */
                    public hadoopJob?: (google.cloud.dataproc.v1.IHadoopJob|null);

                    /** OrderedJob sparkJob. */
                    public sparkJob?: (google.cloud.dataproc.v1.ISparkJob|null);

                    /** OrderedJob pysparkJob. */
                    public pysparkJob?: (google.cloud.dataproc.v1.IPySparkJob|null);

                    /** OrderedJob hiveJob. */
                    public hiveJob?: (google.cloud.dataproc.v1.IHiveJob|null);

                    /** OrderedJob pigJob. */
                    public pigJob?: (google.cloud.dataproc.v1.IPigJob|null);

                    /** OrderedJob sparkRJob. */
                    public sparkRJob?: (google.cloud.dataproc.v1.ISparkRJob|null);

                    /** OrderedJob sparkSqlJob. */
                    public sparkSqlJob?: (google.cloud.dataproc.v1.ISparkSqlJob|null);

                    /** OrderedJob prestoJob. */
                    public prestoJob?: (google.cloud.dataproc.v1.IPrestoJob|null);

                    /** OrderedJob labels. */
                    public labels: { [k: string]: string };

                    /** OrderedJob scheduling. */
                    public scheduling?: (google.cloud.dataproc.v1.IJobScheduling|null);

                    /** OrderedJob prerequisiteStepIds. */
                    public prerequisiteStepIds: string[];

                    /** OrderedJob jobType. */
                    public jobType?: ("hadoopJob"|"sparkJob"|"pysparkJob"|"hiveJob"|"pigJob"|"sparkRJob"|"sparkSqlJob"|"prestoJob");

                    /**
                     * Creates a new OrderedJob instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns OrderedJob instance
                     */
                    public static create(properties?: google.cloud.dataproc.v1.IOrderedJob): google.cloud.dataproc.v1.OrderedJob;

                    /**
                     * Encodes the specified OrderedJob message. Does not implicitly {@link google.cloud.dataproc.v1.OrderedJob.verify|verify} messages.
                     * @param message OrderedJob message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.dataproc.v1.IOrderedJob, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified OrderedJob message, length delimited. Does not implicitly {@link google.cloud.dataproc.v1.OrderedJob.verify|verify} messages.
                     * @param message OrderedJob message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.dataproc.v1.IOrderedJob, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an OrderedJob message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns OrderedJob
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.dataproc.v1.OrderedJob;

                    /**
                     * Decodes an OrderedJob message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns OrderedJob
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.dataproc.v1.OrderedJob;

                    /**
                     * Verifies an OrderedJob message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an OrderedJob message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns OrderedJob
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.dataproc.v1.OrderedJob;

                    /**
                     * Creates a plain object from an OrderedJob message. Also converts values to other types if specified.
                     * @param message OrderedJob
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.dataproc.v1.OrderedJob, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this OrderedJob to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a TemplateParameter. */
                interface ITemplateParameter {

                    /** TemplateParameter name */
                    name?: (string|null);

                    /** TemplateParameter fields */
                    fields?: (string[]|null);

                    /** TemplateParameter description */
                    description?: (string|null);

                    /** TemplateParameter validation */
                    validation?: (google.cloud.dataproc.v1.IParameterValidation|null);
                }

                /** Represents a TemplateParameter. */
                class TemplateParameter implements ITemplateParameter {

                    /**
                     * Constructs a new TemplateParameter.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.dataproc.v1.ITemplateParameter);

                    /** TemplateParameter name. */
                    public name: string;

                    /** TemplateParameter fields. */
                    public fields: string[];

                    /** TemplateParameter description. */
                    public description: string;

                    /** TemplateParameter validation. */
                    public validation?: (google.cloud.dataproc.v1.IParameterValidation|null);

                    /**
                     * Creates a new TemplateParameter instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns TemplateParameter instance
                     */
                    public static create(properties?: google.cloud.dataproc.v1.ITemplateParameter): google.cloud.dataproc.v1.TemplateParameter;

                    /**
                     * Encodes the specified TemplateParameter message. Does not implicitly {@link google.cloud.dataproc.v1.TemplateParameter.verify|verify} messages.
                     * @param message TemplateParameter message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.dataproc.v1.ITemplateParameter, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified TemplateParameter message, length delimited. Does not implicitly {@link google.cloud.dataproc.v1.TemplateParameter.verify|verify} messages.
                     * @param message TemplateParameter message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.dataproc.v1.ITemplateParameter, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a TemplateParameter message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns TemplateParameter
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.dataproc.v1.TemplateParameter;

                    /**
                     * Decodes a TemplateParameter message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns TemplateParameter
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.dataproc.v1.TemplateParameter;

                    /**
                     * Verifies a TemplateParameter message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a TemplateParameter message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns TemplateParameter
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.dataproc.v1.TemplateParameter;

                    /**
                     * Creates a plain object from a TemplateParameter message. Also converts values to other types if specified.
                     * @param message TemplateParameter
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.dataproc.v1.TemplateParameter, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this TemplateParameter to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ParameterValidation. */
                interface IParameterValidation {

                    /** ParameterValidation regex */
                    regex?: (google.cloud.dataproc.v1.IRegexValidation|null);

                    /** ParameterValidation values */
                    values?: (google.cloud.dataproc.v1.IValueValidation|null);
                }

                /** Represents a ParameterValidation. */
                class ParameterValidation implements IParameterValidation {

                    /**
                     * Constructs a new ParameterValidation.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.dataproc.v1.IParameterValidation);

                    /** ParameterValidation regex. */
                    public regex?: (google.cloud.dataproc.v1.IRegexValidation|null);

                    /** ParameterValidation values. */
                    public values?: (google.cloud.dataproc.v1.IValueValidation|null);

                    /** ParameterValidation validationType. */
                    public validationType?: ("regex"|"values");

                    /**
                     * Creates a new ParameterValidation instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ParameterValidation instance
                     */
                    public static create(properties?: google.cloud.dataproc.v1.IParameterValidation): google.cloud.dataproc.v1.ParameterValidation;

                    /**
                     * Encodes the specified ParameterValidation message. Does not implicitly {@link google.cloud.dataproc.v1.ParameterValidation.verify|verify} messages.
                     * @param message ParameterValidation message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.dataproc.v1.IParameterValidation, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ParameterValidation message, length delimited. Does not implicitly {@link google.cloud.dataproc.v1.ParameterValidation.verify|verify} messages.
                     * @param message ParameterValidation message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.dataproc.v1.IParameterValidation, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ParameterValidation message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ParameterValidation
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.dataproc.v1.ParameterValidation;

                    /**
                     * Decodes a ParameterValidation message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ParameterValidation
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.dataproc.v1.ParameterValidation;

                    /**
                     * Verifies a ParameterValidation message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ParameterValidation message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ParameterValidation
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.dataproc.v1.ParameterValidation;

                    /**
                     * Creates a plain object from a ParameterValidation message. Also converts values to other types if specified.
                     * @param message ParameterValidation
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.dataproc.v1.ParameterValidation, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ParameterValidation to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a RegexValidation. */
                interface IRegexValidation {

                    /** RegexValidation regexes */
                    regexes?: (string[]|null);
                }

                /** Represents a RegexValidation. */
                class RegexValidation implements IRegexValidation {

                    /**
                     * Constructs a new RegexValidation.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.dataproc.v1.IRegexValidation);

                    /** RegexValidation regexes. */
                    public regexes: string[];

                    /**
                     * Creates a new RegexValidation instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns RegexValidation instance
                     */
                    public static create(properties?: google.cloud.dataproc.v1.IRegexValidation): google.cloud.dataproc.v1.RegexValidation;

                    /**
                     * Encodes the specified RegexValidation message. Does not implicitly {@link google.cloud.dataproc.v1.RegexValidation.verify|verify} messages.
                     * @param message RegexValidation message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.dataproc.v1.IRegexValidation, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified RegexValidation message, length delimited. Does not implicitly {@link google.cloud.dataproc.v1.RegexValidation.verify|verify} messages.
                     * @param message RegexValidation message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.dataproc.v1.IRegexValidation, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a RegexValidation message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns RegexValidation
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.dataproc.v1.RegexValidation;

                    /**
                     * Decodes a RegexValidation message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns RegexValidation
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.dataproc.v1.RegexValidation;

                    /**
                     * Verifies a RegexValidation message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a RegexValidation message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns RegexValidation
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.dataproc.v1.RegexValidation;

                    /**
                     * Creates a plain object from a RegexValidation message. Also converts values to other types if specified.
                     * @param message RegexValidation
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.dataproc.v1.RegexValidation, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this RegexValidation to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ValueValidation. */
                interface IValueValidation {

                    /** ValueValidation values */
                    values?: (string[]|null);
                }

                /** Represents a ValueValidation. */
                class ValueValidation implements IValueValidation {

                    /**
                     * Constructs a new ValueValidation.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.dataproc.v1.IValueValidation);

                    /** ValueValidation values. */
                    public values: string[];

                    /**
                     * Creates a new ValueValidation instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ValueValidation instance
                     */
                    public static create(properties?: google.cloud.dataproc.v1.IValueValidation): google.cloud.dataproc.v1.ValueValidation;

                    /**
                     * Encodes the specified ValueValidation message. Does not implicitly {@link google.cloud.dataproc.v1.ValueValidation.verify|verify} messages.
                     * @param message ValueValidation message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.dataproc.v1.IValueValidation, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ValueValidation message, length delimited. Does not implicitly {@link google.cloud.dataproc.v1.ValueValidation.verify|verify} messages.
                     * @param message ValueValidation message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.dataproc.v1.IValueValidation, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ValueValidation message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ValueValidation
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.dataproc.v1.ValueValidation;

                    /**
                     * Decodes a ValueValidation message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ValueValidation
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.dataproc.v1.ValueValidation;

                    /**
                     * Verifies a ValueValidation message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ValueValidation message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ValueValidation
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.dataproc.v1.ValueValidation;

                    /**
                     * Creates a plain object from a ValueValidation message. Also converts values to other types if specified.
                     * @param message ValueValidation
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.dataproc.v1.ValueValidation, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ValueValidation to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a WorkflowMetadata. */
                interface IWorkflowMetadata {

                    /** WorkflowMetadata template */
                    template?: (string|null);

                    /** WorkflowMetadata version */
                    version?: (number|null);

                    /** WorkflowMetadata createCluster */
                    createCluster?: (google.cloud.dataproc.v1.IClusterOperation|null);

                    /** WorkflowMetadata graph */
                    graph?: (google.cloud.dataproc.v1.IWorkflowGraph|null);

                    /** WorkflowMetadata deleteCluster */
                    deleteCluster?: (google.cloud.dataproc.v1.IClusterOperation|null);

                    /** WorkflowMetadata state */
                    state?: (google.cloud.dataproc.v1.WorkflowMetadata.State|keyof typeof google.cloud.dataproc.v1.WorkflowMetadata.State|null);

                    /** WorkflowMetadata clusterName */
                    clusterName?: (string|null);

                    /** WorkflowMetadata parameters */
                    parameters?: ({ [k: string]: string }|null);

                    /** WorkflowMetadata startTime */
                    startTime?: (google.protobuf.ITimestamp|null);

                    /** WorkflowMetadata endTime */
                    endTime?: (google.protobuf.ITimestamp|null);

                    /** WorkflowMetadata clusterUuid */
                    clusterUuid?: (string|null);

                    /** WorkflowMetadata dagTimeout */
                    dagTimeout?: (google.protobuf.IDuration|null);

                    /** WorkflowMetadata dagStartTime */
                    dagStartTime?: (google.protobuf.ITimestamp|null);

                    /** WorkflowMetadata dagEndTime */
                    dagEndTime?: (google.protobuf.ITimestamp|null);
                }

                /** Represents a WorkflowMetadata. */
                class WorkflowMetadata implements IWorkflowMetadata {

                    /**
                     * Constructs a new WorkflowMetadata.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.dataproc.v1.IWorkflowMetadata);

                    /** WorkflowMetadata template. */
                    public template: string;

                    /** WorkflowMetadata version. */
                    public version: number;

                    /** WorkflowMetadata createCluster. */
                    public createCluster?: (google.cloud.dataproc.v1.IClusterOperation|null);

                    /** WorkflowMetadata graph. */
                    public graph?: (google.cloud.dataproc.v1.IWorkflowGraph|null);

                    /** WorkflowMetadata deleteCluster. */
                    public deleteCluster?: (google.cloud.dataproc.v1.IClusterOperation|null);

                    /** WorkflowMetadata state. */
                    public state: (google.cloud.dataproc.v1.WorkflowMetadata.State|keyof typeof google.cloud.dataproc.v1.WorkflowMetadata.State);

                    /** WorkflowMetadata clusterName. */
                    public clusterName: string;

                    /** WorkflowMetadata parameters. */
                    public parameters: { [k: string]: string };

                    /** WorkflowMetadata startTime. */
                    public startTime?: (google.protobuf.ITimestamp|null);

                    /** WorkflowMetadata endTime. */
                    public endTime?: (google.protobuf.ITimestamp|null);

                    /** WorkflowMetadata clusterUuid. */
                    public clusterUuid: string;

                    /** WorkflowMetadata dagTimeout. */
                    public dagTimeout?: (google.protobuf.IDuration|null);

                    /** WorkflowMetadata dagStartTime. */
                    public dagStartTime?: (google.protobuf.ITimestamp|null);

                    /** WorkflowMetadata dagEndTime. */
                    public dagEndTime?: (google.protobuf.ITimestamp|null);

                    /**
                     * Creates a new WorkflowMetadata instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns WorkflowMetadata instance
                     */
                    public static create(properties?: google.cloud.dataproc.v1.IWorkflowMetadata): google.cloud.dataproc.v1.WorkflowMetadata;

                    /**
                     * Encodes the specified WorkflowMetadata message. Does not implicitly {@link google.cloud.dataproc.v1.WorkflowMetadata.verify|verify} messages.
                     * @param message WorkflowMetadata message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.dataproc.v1.IWorkflowMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified WorkflowMetadata message, length delimited. Does not implicitly {@link google.cloud.dataproc.v1.WorkflowMetadata.verify|verify} messages.
                     * @param message WorkflowMetadata message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.dataproc.v1.IWorkflowMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a WorkflowMetadata message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns WorkflowMetadata
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.dataproc.v1.WorkflowMetadata;

                    /**
                     * Decodes a WorkflowMetadata message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns WorkflowMetadata
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.dataproc.v1.WorkflowMetadata;

                    /**
                     * Verifies a WorkflowMetadata message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a WorkflowMetadata message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns WorkflowMetadata
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.dataproc.v1.WorkflowMetadata;

                    /**
                     * Creates a plain object from a WorkflowMetadata message. Also converts values to other types if specified.
                     * @param message WorkflowMetadata
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.dataproc.v1.WorkflowMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this WorkflowMetadata to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace WorkflowMetadata {

                    /** State enum. */
                    enum State {
                        UNKNOWN = 0,
                        PENDING = 1,
                        RUNNING = 2,
                        DONE = 3
                    }
                }

                /** Properties of a ClusterOperation. */
                interface IClusterOperation {

                    /** ClusterOperation operationId */
                    operationId?: (string|null);

                    /** ClusterOperation error */
                    error?: (string|null);

                    /** ClusterOperation done */
                    done?: (boolean|null);
                }

                /** Represents a ClusterOperation. */
                class ClusterOperation implements IClusterOperation {

                    /**
                     * Constructs a new ClusterOperation.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.dataproc.v1.IClusterOperation);

                    /** ClusterOperation operationId. */
                    public operationId: string;

                    /** ClusterOperation error. */
                    public error: string;

                    /** ClusterOperation done. */
                    public done: boolean;

                    /**
                     * Creates a new ClusterOperation instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ClusterOperation instance
                     */
                    public static create(properties?: google.cloud.dataproc.v1.IClusterOperation): google.cloud.dataproc.v1.ClusterOperation;

                    /**
                     * Encodes the specified ClusterOperation message. Does not implicitly {@link google.cloud.dataproc.v1.ClusterOperation.verify|verify} messages.
                     * @param message ClusterOperation message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.dataproc.v1.IClusterOperation, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ClusterOperation message, length delimited. Does not implicitly {@link google.cloud.dataproc.v1.ClusterOperation.verify|verify} messages.
                     * @param message ClusterOperation message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.dataproc.v1.IClusterOperation, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ClusterOperation message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ClusterOperation
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.dataproc.v1.ClusterOperation;

                    /**
                     * Decodes a ClusterOperation message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ClusterOperation
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.dataproc.v1.ClusterOperation;

                    /**
                     * Verifies a ClusterOperation message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ClusterOperation message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ClusterOperation
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.dataproc.v1.ClusterOperation;

                    /**
                     * Creates a plain object from a ClusterOperation message. Also converts values to other types if specified.
                     * @param message ClusterOperation
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.dataproc.v1.ClusterOperation, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ClusterOperation to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a WorkflowGraph. */
                interface IWorkflowGraph {

                    /** WorkflowGraph nodes */
                    nodes?: (google.cloud.dataproc.v1.IWorkflowNode[]|null);
                }

                /** Represents a WorkflowGraph. */
                class WorkflowGraph implements IWorkflowGraph {

                    /**
                     * Constructs a new WorkflowGraph.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.dataproc.v1.IWorkflowGraph);

                    /** WorkflowGraph nodes. */
                    public nodes: google.cloud.dataproc.v1.IWorkflowNode[];

                    /**
                     * Creates a new WorkflowGraph instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns WorkflowGraph instance
                     */
                    public static create(properties?: google.cloud.dataproc.v1.IWorkflowGraph): google.cloud.dataproc.v1.WorkflowGraph;

                    /**
                     * Encodes the specified WorkflowGraph message. Does not implicitly {@link google.cloud.dataproc.v1.WorkflowGraph.verify|verify} messages.
                     * @param message WorkflowGraph message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.dataproc.v1.IWorkflowGraph, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified WorkflowGraph message, length delimited. Does not implicitly {@link google.cloud.dataproc.v1.WorkflowGraph.verify|verify} messages.
                     * @param message WorkflowGraph message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.dataproc.v1.IWorkflowGraph, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a WorkflowGraph message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns WorkflowGraph
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.dataproc.v1.WorkflowGraph;

                    /**
                     * Decodes a WorkflowGraph message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns WorkflowGraph
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.dataproc.v1.WorkflowGraph;

                    /**
                     * Verifies a WorkflowGraph message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a WorkflowGraph message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns WorkflowGraph
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.dataproc.v1.WorkflowGraph;

                    /**
                     * Creates a plain object from a WorkflowGraph message. Also converts values to other types if specified.
                     * @param message WorkflowGraph
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.dataproc.v1.WorkflowGraph, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this WorkflowGraph to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a WorkflowNode. */
                interface IWorkflowNode {

                    /** WorkflowNode stepId */
                    stepId?: (string|null);

                    /** WorkflowNode prerequisiteStepIds */
                    prerequisiteStepIds?: (string[]|null);

                    /** WorkflowNode jobId */
                    jobId?: (string|null);

                    /** WorkflowNode state */
                    state?: (google.cloud.dataproc.v1.WorkflowNode.NodeState|keyof typeof google.cloud.dataproc.v1.WorkflowNode.NodeState|null);

                    /** WorkflowNode error */
                    error?: (string|null);
                }

                /** Represents a WorkflowNode. */
                class WorkflowNode implements IWorkflowNode {

                    /**
                     * Constructs a new WorkflowNode.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.dataproc.v1.IWorkflowNode);

                    /** WorkflowNode stepId. */
                    public stepId: string;

                    /** WorkflowNode prerequisiteStepIds. */
                    public prerequisiteStepIds: string[];

                    /** WorkflowNode jobId. */
                    public jobId: string;

                    /** WorkflowNode state. */
                    public state: (google.cloud.dataproc.v1.WorkflowNode.NodeState|keyof typeof google.cloud.dataproc.v1.WorkflowNode.NodeState);

                    /** WorkflowNode error. */
                    public error: string;

                    /**
                     * Creates a new WorkflowNode instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns WorkflowNode instance
                     */
                    public static create(properties?: google.cloud.dataproc.v1.IWorkflowNode): google.cloud.dataproc.v1.WorkflowNode;

                    /**
                     * Encodes the specified WorkflowNode message. Does not implicitly {@link google.cloud.dataproc.v1.WorkflowNode.verify|verify} messages.
                     * @param message WorkflowNode message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.dataproc.v1.IWorkflowNode, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified WorkflowNode message, length delimited. Does not implicitly {@link google.cloud.dataproc.v1.WorkflowNode.verify|verify} messages.
                     * @param message WorkflowNode message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.dataproc.v1.IWorkflowNode, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a WorkflowNode message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns WorkflowNode
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.dataproc.v1.WorkflowNode;

                    /**
                     * Decodes a WorkflowNode message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns WorkflowNode
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.dataproc.v1.WorkflowNode;

                    /**
                     * Verifies a WorkflowNode message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a WorkflowNode message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns WorkflowNode
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.dataproc.v1.WorkflowNode;

                    /**
                     * Creates a plain object from a WorkflowNode message. Also converts values to other types if specified.
                     * @param message WorkflowNode
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.dataproc.v1.WorkflowNode, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this WorkflowNode to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace WorkflowNode {

                    /** NodeState enum. */
                    enum NodeState {
                        NODE_STATE_UNSPECIFIED = 0,
                        BLOCKED = 1,
                        RUNNABLE = 2,
                        RUNNING = 3,
                        COMPLETED = 4,
                        FAILED = 5
                    }
                }

                /** Properties of a CreateWorkflowTemplateRequest. */
                interface ICreateWorkflowTemplateRequest {

                    /** CreateWorkflowTemplateRequest parent */
                    parent?: (string|null);

                    /** CreateWorkflowTemplateRequest template */
                    template?: (google.cloud.dataproc.v1.IWorkflowTemplate|null);
                }

                /** Represents a CreateWorkflowTemplateRequest. */
                class CreateWorkflowTemplateRequest implements ICreateWorkflowTemplateRequest {

                    /**
                     * Constructs a new CreateWorkflowTemplateRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.dataproc.v1.ICreateWorkflowTemplateRequest);

                    /** CreateWorkflowTemplateRequest parent. */
                    public parent: string;

                    /** CreateWorkflowTemplateRequest template. */
                    public template?: (google.cloud.dataproc.v1.IWorkflowTemplate|null);

                    /**
                     * Creates a new CreateWorkflowTemplateRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CreateWorkflowTemplateRequest instance
                     */
                    public static create(properties?: google.cloud.dataproc.v1.ICreateWorkflowTemplateRequest): google.cloud.dataproc.v1.CreateWorkflowTemplateRequest;

                    /**
                     * Encodes the specified CreateWorkflowTemplateRequest message. Does not implicitly {@link google.cloud.dataproc.v1.CreateWorkflowTemplateRequest.verify|verify} messages.
                     * @param message CreateWorkflowTemplateRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.dataproc.v1.ICreateWorkflowTemplateRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CreateWorkflowTemplateRequest message, length delimited. Does not implicitly {@link google.cloud.dataproc.v1.CreateWorkflowTemplateRequest.verify|verify} messages.
                     * @param message CreateWorkflowTemplateRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.dataproc.v1.ICreateWorkflowTemplateRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CreateWorkflowTemplateRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CreateWorkflowTemplateRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.dataproc.v1.CreateWorkflowTemplateRequest;

                    /**
                     * Decodes a CreateWorkflowTemplateRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CreateWorkflowTemplateRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.dataproc.v1.CreateWorkflowTemplateRequest;

                    /**
                     * Verifies a CreateWorkflowTemplateRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CreateWorkflowTemplateRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CreateWorkflowTemplateRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.dataproc.v1.CreateWorkflowTemplateRequest;

                    /**
                     * Creates a plain object from a CreateWorkflowTemplateRequest message. Also converts values to other types if specified.
                     * @param message CreateWorkflowTemplateRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.dataproc.v1.CreateWorkflowTemplateRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CreateWorkflowTemplateRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a GetWorkflowTemplateRequest. */
                interface IGetWorkflowTemplateRequest {

                    /** GetWorkflowTemplateRequest name */
                    name?: (string|null);

                    /** GetWorkflowTemplateRequest version */
                    version?: (number|null);
                }

                /** Represents a GetWorkflowTemplateRequest. */
                class GetWorkflowTemplateRequest implements IGetWorkflowTemplateRequest {

                    /**
                     * Constructs a new GetWorkflowTemplateRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.dataproc.v1.IGetWorkflowTemplateRequest);

                    /** GetWorkflowTemplateRequest name. */
                    public name: string;

                    /** GetWorkflowTemplateRequest version. */
                    public version: number;

                    /**
                     * Creates a new GetWorkflowTemplateRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetWorkflowTemplateRequest instance
                     */
                    public static create(properties?: google.cloud.dataproc.v1.IGetWorkflowTemplateRequest): google.cloud.dataproc.v1.GetWorkflowTemplateRequest;

                    /**
                     * Encodes the specified GetWorkflowTemplateRequest message. Does not implicitly {@link google.cloud.dataproc.v1.GetWorkflowTemplateRequest.verify|verify} messages.
                     * @param message GetWorkflowTemplateRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.dataproc.v1.IGetWorkflowTemplateRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetWorkflowTemplateRequest message, length delimited. Does not implicitly {@link google.cloud.dataproc.v1.GetWorkflowTemplateRequest.verify|verify} messages.
                     * @param message GetWorkflowTemplateRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.dataproc.v1.IGetWorkflowTemplateRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetWorkflowTemplateRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetWorkflowTemplateRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.dataproc.v1.GetWorkflowTemplateRequest;

                    /**
                     * Decodes a GetWorkflowTemplateRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetWorkflowTemplateRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.dataproc.v1.GetWorkflowTemplateRequest;

                    /**
                     * Verifies a GetWorkflowTemplateRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetWorkflowTemplateRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetWorkflowTemplateRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.dataproc.v1.GetWorkflowTemplateRequest;

                    /**
                     * Creates a plain object from a GetWorkflowTemplateRequest message. Also converts values to other types if specified.
                     * @param message GetWorkflowTemplateRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.dataproc.v1.GetWorkflowTemplateRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetWorkflowTemplateRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of an InstantiateWorkflowTemplateRequest. */
                interface IInstantiateWorkflowTemplateRequest {

                    /** InstantiateWorkflowTemplateRequest name */
                    name?: (string|null);

                    /** InstantiateWorkflowTemplateRequest version */
                    version?: (number|null);

                    /** InstantiateWorkflowTemplateRequest requestId */
                    requestId?: (string|null);

                    /** InstantiateWorkflowTemplateRequest parameters */
                    parameters?: ({ [k: string]: string }|null);
                }

                /** Represents an InstantiateWorkflowTemplateRequest. */
                class InstantiateWorkflowTemplateRequest implements IInstantiateWorkflowTemplateRequest {

                    /**
                     * Constructs a new InstantiateWorkflowTemplateRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.dataproc.v1.IInstantiateWorkflowTemplateRequest);

                    /** InstantiateWorkflowTemplateRequest name. */
                    public name: string;

                    /** InstantiateWorkflowTemplateRequest version. */
                    public version: number;

                    /** InstantiateWorkflowTemplateRequest requestId. */
                    public requestId: string;

                    /** InstantiateWorkflowTemplateRequest parameters. */
                    public parameters: { [k: string]: string };

                    /**
                     * Creates a new InstantiateWorkflowTemplateRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns InstantiateWorkflowTemplateRequest instance
                     */
                    public static create(properties?: google.cloud.dataproc.v1.IInstantiateWorkflowTemplateRequest): google.cloud.dataproc.v1.InstantiateWorkflowTemplateRequest;

                    /**
                     * Encodes the specified InstantiateWorkflowTemplateRequest message. Does not implicitly {@link google.cloud.dataproc.v1.InstantiateWorkflowTemplateRequest.verify|verify} messages.
                     * @param message InstantiateWorkflowTemplateRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.dataproc.v1.IInstantiateWorkflowTemplateRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified InstantiateWorkflowTemplateRequest message, length delimited. Does not implicitly {@link google.cloud.dataproc.v1.InstantiateWorkflowTemplateRequest.verify|verify} messages.
                     * @param message InstantiateWorkflowTemplateRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.dataproc.v1.IInstantiateWorkflowTemplateRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an InstantiateWorkflowTemplateRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns InstantiateWorkflowTemplateRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.dataproc.v1.InstantiateWorkflowTemplateRequest;

                    /**
                     * Decodes an InstantiateWorkflowTemplateRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns InstantiateWorkflowTemplateRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.dataproc.v1.InstantiateWorkflowTemplateRequest;

                    /**
                     * Verifies an InstantiateWorkflowTemplateRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an InstantiateWorkflowTemplateRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns InstantiateWorkflowTemplateRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.dataproc.v1.InstantiateWorkflowTemplateRequest;

                    /**
                     * Creates a plain object from an InstantiateWorkflowTemplateRequest message. Also converts values to other types if specified.
                     * @param message InstantiateWorkflowTemplateRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.dataproc.v1.InstantiateWorkflowTemplateRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this InstantiateWorkflowTemplateRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of an InstantiateInlineWorkflowTemplateRequest. */
                interface IInstantiateInlineWorkflowTemplateRequest {

                    /** InstantiateInlineWorkflowTemplateRequest parent */
                    parent?: (string|null);

                    /** InstantiateInlineWorkflowTemplateRequest template */
                    template?: (google.cloud.dataproc.v1.IWorkflowTemplate|null);

                    /** InstantiateInlineWorkflowTemplateRequest requestId */
                    requestId?: (string|null);
                }

                /** Represents an InstantiateInlineWorkflowTemplateRequest. */
                class InstantiateInlineWorkflowTemplateRequest implements IInstantiateInlineWorkflowTemplateRequest {

                    /**
                     * Constructs a new InstantiateInlineWorkflowTemplateRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.dataproc.v1.IInstantiateInlineWorkflowTemplateRequest);

                    /** InstantiateInlineWorkflowTemplateRequest parent. */
                    public parent: string;

                    /** InstantiateInlineWorkflowTemplateRequest template. */
                    public template?: (google.cloud.dataproc.v1.IWorkflowTemplate|null);

                    /** InstantiateInlineWorkflowTemplateRequest requestId. */
                    public requestId: string;

                    /**
                     * Creates a new InstantiateInlineWorkflowTemplateRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns InstantiateInlineWorkflowTemplateRequest instance
                     */
                    public static create(properties?: google.cloud.dataproc.v1.IInstantiateInlineWorkflowTemplateRequest): google.cloud.dataproc.v1.InstantiateInlineWorkflowTemplateRequest;

                    /**
                     * Encodes the specified InstantiateInlineWorkflowTemplateRequest message. Does not implicitly {@link google.cloud.dataproc.v1.InstantiateInlineWorkflowTemplateRequest.verify|verify} messages.
                     * @param message InstantiateInlineWorkflowTemplateRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.dataproc.v1.IInstantiateInlineWorkflowTemplateRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified InstantiateInlineWorkflowTemplateRequest message, length delimited. Does not implicitly {@link google.cloud.dataproc.v1.InstantiateInlineWorkflowTemplateRequest.verify|verify} messages.
                     * @param message InstantiateInlineWorkflowTemplateRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.dataproc.v1.IInstantiateInlineWorkflowTemplateRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an InstantiateInlineWorkflowTemplateRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns InstantiateInlineWorkflowTemplateRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.dataproc.v1.InstantiateInlineWorkflowTemplateRequest;

                    /**
                     * Decodes an InstantiateInlineWorkflowTemplateRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns InstantiateInlineWorkflowTemplateRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.dataproc.v1.InstantiateInlineWorkflowTemplateRequest;

                    /**
                     * Verifies an InstantiateInlineWorkflowTemplateRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an InstantiateInlineWorkflowTemplateRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns InstantiateInlineWorkflowTemplateRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.dataproc.v1.InstantiateInlineWorkflowTemplateRequest;

                    /**
                     * Creates a plain object from an InstantiateInlineWorkflowTemplateRequest message. Also converts values to other types if specified.
                     * @param message InstantiateInlineWorkflowTemplateRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.dataproc.v1.InstantiateInlineWorkflowTemplateRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this InstantiateInlineWorkflowTemplateRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of an UpdateWorkflowTemplateRequest. */
                interface IUpdateWorkflowTemplateRequest {

                    /** UpdateWorkflowTemplateRequest template */
                    template?: (google.cloud.dataproc.v1.IWorkflowTemplate|null);
                }

                /** Represents an UpdateWorkflowTemplateRequest. */
                class UpdateWorkflowTemplateRequest implements IUpdateWorkflowTemplateRequest {

                    /**
                     * Constructs a new UpdateWorkflowTemplateRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.dataproc.v1.IUpdateWorkflowTemplateRequest);

                    /** UpdateWorkflowTemplateRequest template. */
                    public template?: (google.cloud.dataproc.v1.IWorkflowTemplate|null);

                    /**
                     * Creates a new UpdateWorkflowTemplateRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns UpdateWorkflowTemplateRequest instance
                     */
                    public static create(properties?: google.cloud.dataproc.v1.IUpdateWorkflowTemplateRequest): google.cloud.dataproc.v1.UpdateWorkflowTemplateRequest;

                    /**
                     * Encodes the specified UpdateWorkflowTemplateRequest message. Does not implicitly {@link google.cloud.dataproc.v1.UpdateWorkflowTemplateRequest.verify|verify} messages.
                     * @param message UpdateWorkflowTemplateRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.dataproc.v1.IUpdateWorkflowTemplateRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified UpdateWorkflowTemplateRequest message, length delimited. Does not implicitly {@link google.cloud.dataproc.v1.UpdateWorkflowTemplateRequest.verify|verify} messages.
                     * @param message UpdateWorkflowTemplateRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.dataproc.v1.IUpdateWorkflowTemplateRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an UpdateWorkflowTemplateRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns UpdateWorkflowTemplateRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.dataproc.v1.UpdateWorkflowTemplateRequest;

                    /**
                     * Decodes an UpdateWorkflowTemplateRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns UpdateWorkflowTemplateRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.dataproc.v1.UpdateWorkflowTemplateRequest;

                    /**
                     * Verifies an UpdateWorkflowTemplateRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an UpdateWorkflowTemplateRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns UpdateWorkflowTemplateRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.dataproc.v1.UpdateWorkflowTemplateRequest;

                    /**
                     * Creates a plain object from an UpdateWorkflowTemplateRequest message. Also converts values to other types if specified.
                     * @param message UpdateWorkflowTemplateRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.dataproc.v1.UpdateWorkflowTemplateRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this UpdateWorkflowTemplateRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ListWorkflowTemplatesRequest. */
                interface IListWorkflowTemplatesRequest {

                    /** ListWorkflowTemplatesRequest parent */
                    parent?: (string|null);

                    /** ListWorkflowTemplatesRequest pageSize */
                    pageSize?: (number|null);

                    /** ListWorkflowTemplatesRequest pageToken */
                    pageToken?: (string|null);
                }

                /** Represents a ListWorkflowTemplatesRequest. */
                class ListWorkflowTemplatesRequest implements IListWorkflowTemplatesRequest {

                    /**
                     * Constructs a new ListWorkflowTemplatesRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.dataproc.v1.IListWorkflowTemplatesRequest);

                    /** ListWorkflowTemplatesRequest parent. */
                    public parent: string;

                    /** ListWorkflowTemplatesRequest pageSize. */
                    public pageSize: number;

                    /** ListWorkflowTemplatesRequest pageToken. */
                    public pageToken: string;

                    /**
                     * Creates a new ListWorkflowTemplatesRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListWorkflowTemplatesRequest instance
                     */
                    public static create(properties?: google.cloud.dataproc.v1.IListWorkflowTemplatesRequest): google.cloud.dataproc.v1.ListWorkflowTemplatesRequest;

                    /**
                     * Encodes the specified ListWorkflowTemplatesRequest message. Does not implicitly {@link google.cloud.dataproc.v1.ListWorkflowTemplatesRequest.verify|verify} messages.
                     * @param message ListWorkflowTemplatesRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.dataproc.v1.IListWorkflowTemplatesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListWorkflowTemplatesRequest message, length delimited. Does not implicitly {@link google.cloud.dataproc.v1.ListWorkflowTemplatesRequest.verify|verify} messages.
                     * @param message ListWorkflowTemplatesRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.dataproc.v1.IListWorkflowTemplatesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListWorkflowTemplatesRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListWorkflowTemplatesRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.dataproc.v1.ListWorkflowTemplatesRequest;

                    /**
                     * Decodes a ListWorkflowTemplatesRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListWorkflowTemplatesRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.dataproc.v1.ListWorkflowTemplatesRequest;

                    /**
                     * Verifies a ListWorkflowTemplatesRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListWorkflowTemplatesRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListWorkflowTemplatesRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.dataproc.v1.ListWorkflowTemplatesRequest;

                    /**
                     * Creates a plain object from a ListWorkflowTemplatesRequest message. Also converts values to other types if specified.
                     * @param message ListWorkflowTemplatesRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.dataproc.v1.ListWorkflowTemplatesRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListWorkflowTemplatesRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ListWorkflowTemplatesResponse. */
                interface IListWorkflowTemplatesResponse {

                    /** ListWorkflowTemplatesResponse templates */
                    templates?: (google.cloud.dataproc.v1.IWorkflowTemplate[]|null);

                    /** ListWorkflowTemplatesResponse nextPageToken */
                    nextPageToken?: (string|null);
                }

                /** Represents a ListWorkflowTemplatesResponse. */
                class ListWorkflowTemplatesResponse implements IListWorkflowTemplatesResponse {

                    /**
                     * Constructs a new ListWorkflowTemplatesResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.dataproc.v1.IListWorkflowTemplatesResponse);

                    /** ListWorkflowTemplatesResponse templates. */
                    public templates: google.cloud.dataproc.v1.IWorkflowTemplate[];

                    /** ListWorkflowTemplatesResponse nextPageToken. */
                    public nextPageToken: string;

                    /**
                     * Creates a new ListWorkflowTemplatesResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListWorkflowTemplatesResponse instance
                     */
                    public static create(properties?: google.cloud.dataproc.v1.IListWorkflowTemplatesResponse): google.cloud.dataproc.v1.ListWorkflowTemplatesResponse;

                    /**
                     * Encodes the specified ListWorkflowTemplatesResponse message. Does not implicitly {@link google.cloud.dataproc.v1.ListWorkflowTemplatesResponse.verify|verify} messages.
                     * @param message ListWorkflowTemplatesResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.dataproc.v1.IListWorkflowTemplatesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListWorkflowTemplatesResponse message, length delimited. Does not implicitly {@link google.cloud.dataproc.v1.ListWorkflowTemplatesResponse.verify|verify} messages.
                     * @param message ListWorkflowTemplatesResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.dataproc.v1.IListWorkflowTemplatesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListWorkflowTemplatesResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListWorkflowTemplatesResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.dataproc.v1.ListWorkflowTemplatesResponse;

                    /**
                     * Decodes a ListWorkflowTemplatesResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListWorkflowTemplatesResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.dataproc.v1.ListWorkflowTemplatesResponse;

                    /**
                     * Verifies a ListWorkflowTemplatesResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListWorkflowTemplatesResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListWorkflowTemplatesResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.dataproc.v1.ListWorkflowTemplatesResponse;

                    /**
                     * Creates a plain object from a ListWorkflowTemplatesResponse message. Also converts values to other types if specified.
                     * @param message ListWorkflowTemplatesResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.dataproc.v1.ListWorkflowTemplatesResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListWorkflowTemplatesResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a DeleteWorkflowTemplateRequest. */
                interface IDeleteWorkflowTemplateRequest {

                    /** DeleteWorkflowTemplateRequest name */
                    name?: (string|null);

                    /** DeleteWorkflowTemplateRequest version */
                    version?: (number|null);
                }

                /** Represents a DeleteWorkflowTemplateRequest. */
                class DeleteWorkflowTemplateRequest implements IDeleteWorkflowTemplateRequest {

                    /**
                     * Constructs a new DeleteWorkflowTemplateRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.dataproc.v1.IDeleteWorkflowTemplateRequest);

                    /** DeleteWorkflowTemplateRequest name. */
                    public name: string;

                    /** DeleteWorkflowTemplateRequest version. */
                    public version: number;

                    /**
                     * Creates a new DeleteWorkflowTemplateRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DeleteWorkflowTemplateRequest instance
                     */
                    public static create(properties?: google.cloud.dataproc.v1.IDeleteWorkflowTemplateRequest): google.cloud.dataproc.v1.DeleteWorkflowTemplateRequest;

                    /**
                     * Encodes the specified DeleteWorkflowTemplateRequest message. Does not implicitly {@link google.cloud.dataproc.v1.DeleteWorkflowTemplateRequest.verify|verify} messages.
                     * @param message DeleteWorkflowTemplateRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.dataproc.v1.IDeleteWorkflowTemplateRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DeleteWorkflowTemplateRequest message, length delimited. Does not implicitly {@link google.cloud.dataproc.v1.DeleteWorkflowTemplateRequest.verify|verify} messages.
                     * @param message DeleteWorkflowTemplateRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.dataproc.v1.IDeleteWorkflowTemplateRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DeleteWorkflowTemplateRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DeleteWorkflowTemplateRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.dataproc.v1.DeleteWorkflowTemplateRequest;

                    /**
                     * Decodes a DeleteWorkflowTemplateRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DeleteWorkflowTemplateRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.dataproc.v1.DeleteWorkflowTemplateRequest;

                    /**
                     * Verifies a DeleteWorkflowTemplateRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DeleteWorkflowTemplateRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DeleteWorkflowTemplateRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.dataproc.v1.DeleteWorkflowTemplateRequest;

                    /**
                     * Creates a plain object from a DeleteWorkflowTemplateRequest message. Also converts values to other types if specified.
                     * @param message DeleteWorkflowTemplateRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.dataproc.v1.DeleteWorkflowTemplateRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DeleteWorkflowTemplateRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }
            }
        }
    }

    /** Namespace api. */
    namespace api {

        /** Properties of a Http. */
        interface IHttp {

            /** Http rules */
            rules?: (google.api.IHttpRule[]|null);

            /** Http fullyDecodeReservedExpansion */
            fullyDecodeReservedExpansion?: (boolean|null);
        }

        /** Represents a Http. */
        class Http implements IHttp {

            /**
             * Constructs a new Http.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.api.IHttp);

            /** Http rules. */
            public rules: google.api.IHttpRule[];

            /** Http fullyDecodeReservedExpansion. */
            public fullyDecodeReservedExpansion: boolean;

            /**
             * Creates a new Http instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Http instance
             */
            public static create(properties?: google.api.IHttp): google.api.Http;

            /**
             * Encodes the specified Http message. Does not implicitly {@link google.api.Http.verify|verify} messages.
             * @param message Http message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.api.IHttp, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Http message, length delimited. Does not implicitly {@link google.api.Http.verify|verify} messages.
             * @param message Http message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.api.IHttp, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Http message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Http
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.Http;

            /**
             * Decodes a Http message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Http
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.Http;

            /**
             * Verifies a Http message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Http message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Http
             */
            public static fromObject(object: { [k: string]: any }): google.api.Http;

            /**
             * Creates a plain object from a Http message. Also converts values to other types if specified.
             * @param message Http
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.api.Http, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Http to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a HttpRule. */
        interface IHttpRule {

            /** HttpRule selector */
            selector?: (string|null);

            /** HttpRule get */
            get?: (string|null);

            /** HttpRule put */
            put?: (string|null);

            /** HttpRule post */
            post?: (string|null);

            /** HttpRule delete */
            "delete"?: (string|null);

            /** HttpRule patch */
            patch?: (string|null);

            /** HttpRule custom */
            custom?: (google.api.ICustomHttpPattern|null);

            /** HttpRule body */
            body?: (string|null);

            /** HttpRule responseBody */
            responseBody?: (string|null);

            /** HttpRule additionalBindings */
            additionalBindings?: (google.api.IHttpRule[]|null);
        }

        /** Represents a HttpRule. */
        class HttpRule implements IHttpRule {

            /**
             * Constructs a new HttpRule.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.api.IHttpRule);

            /** HttpRule selector. */
            public selector: string;

            /** HttpRule get. */
            public get?: (string|null);

            /** HttpRule put. */
            public put?: (string|null);

            /** HttpRule post. */
            public post?: (string|null);

            /** HttpRule delete. */
            public delete?: (string|null);

            /** HttpRule patch. */
            public patch?: (string|null);

            /** HttpRule custom. */
            public custom?: (google.api.ICustomHttpPattern|null);

            /** HttpRule body. */
            public body: string;

            /** HttpRule responseBody. */
            public responseBody: string;

            /** HttpRule additionalBindings. */
            public additionalBindings: google.api.IHttpRule[];

            /** HttpRule pattern. */
            public pattern?: ("get"|"put"|"post"|"delete"|"patch"|"custom");

            /**
             * Creates a new HttpRule instance using the specified properties.
             * @param [properties] Properties to set
             * @returns HttpRule instance
             */
            public static create(properties?: google.api.IHttpRule): google.api.HttpRule;

            /**
             * Encodes the specified HttpRule message. Does not implicitly {@link google.api.HttpRule.verify|verify} messages.
             * @param message HttpRule message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.api.IHttpRule, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified HttpRule message, length delimited. Does not implicitly {@link google.api.HttpRule.verify|verify} messages.
             * @param message HttpRule message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.api.IHttpRule, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a HttpRule message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns HttpRule
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.HttpRule;

            /**
             * Decodes a HttpRule message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns HttpRule
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.HttpRule;

            /**
             * Verifies a HttpRule message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a HttpRule message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns HttpRule
             */
            public static fromObject(object: { [k: string]: any }): google.api.HttpRule;

            /**
             * Creates a plain object from a HttpRule message. Also converts values to other types if specified.
             * @param message HttpRule
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.api.HttpRule, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this HttpRule to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a CustomHttpPattern. */
        interface ICustomHttpPattern {

            /** CustomHttpPattern kind */
            kind?: (string|null);

            /** CustomHttpPattern path */
            path?: (string|null);
        }

        /** Represents a CustomHttpPattern. */
        class CustomHttpPattern implements ICustomHttpPattern {

            /**
             * Constructs a new CustomHttpPattern.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.api.ICustomHttpPattern);

            /** CustomHttpPattern kind. */
            public kind: string;

            /** CustomHttpPattern path. */
            public path: string;

            /**
             * Creates a new CustomHttpPattern instance using the specified properties.
             * @param [properties] Properties to set
             * @returns CustomHttpPattern instance
             */
            public static create(properties?: google.api.ICustomHttpPattern): google.api.CustomHttpPattern;

            /**
             * Encodes the specified CustomHttpPattern message. Does not implicitly {@link google.api.CustomHttpPattern.verify|verify} messages.
             * @param message CustomHttpPattern message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.api.ICustomHttpPattern, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified CustomHttpPattern message, length delimited. Does not implicitly {@link google.api.CustomHttpPattern.verify|verify} messages.
             * @param message CustomHttpPattern message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.api.ICustomHttpPattern, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a CustomHttpPattern message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns CustomHttpPattern
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.CustomHttpPattern;

            /**
             * Decodes a CustomHttpPattern message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns CustomHttpPattern
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.CustomHttpPattern;

            /**
             * Verifies a CustomHttpPattern message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a CustomHttpPattern message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns CustomHttpPattern
             */
            public static fromObject(object: { [k: string]: any }): google.api.CustomHttpPattern;

            /**
             * Creates a plain object from a CustomHttpPattern message. Also converts values to other types if specified.
             * @param message CustomHttpPattern
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.api.CustomHttpPattern, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this CustomHttpPattern to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** FieldBehavior enum. */
        enum FieldBehavior {
            FIELD_BEHAVIOR_UNSPECIFIED = 0,
            OPTIONAL = 1,
            REQUIRED = 2,
            OUTPUT_ONLY = 3,
            INPUT_ONLY = 4,
            IMMUTABLE = 5,
            UNORDERED_LIST = 6,
            NON_EMPTY_DEFAULT = 7
        }

        /** Properties of a ResourceDescriptor. */
        interface IResourceDescriptor {

            /** ResourceDescriptor type */
            type?: (string|null);

            /** ResourceDescriptor pattern */
            pattern?: (string[]|null);

            /** ResourceDescriptor nameField */
            nameField?: (string|null);

            /** ResourceDescriptor history */
            history?: (google.api.ResourceDescriptor.History|keyof typeof google.api.ResourceDescriptor.History|null);

            /** ResourceDescriptor plural */
            plural?: (string|null);

            /** ResourceDescriptor singular */
            singular?: (string|null);

            /** ResourceDescriptor style */
            style?: (google.api.ResourceDescriptor.Style[]|null);
        }

        /** Represents a ResourceDescriptor. */
        class ResourceDescriptor implements IResourceDescriptor {

            /**
             * Constructs a new ResourceDescriptor.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.api.IResourceDescriptor);

            /** ResourceDescriptor type. */
            public type: string;

            /** ResourceDescriptor pattern. */
            public pattern: string[];

            /** ResourceDescriptor nameField. */
            public nameField: string;

            /** ResourceDescriptor history. */
            public history: (google.api.ResourceDescriptor.History|keyof typeof google.api.ResourceDescriptor.History);

            /** ResourceDescriptor plural. */
            public plural: string;

            /** ResourceDescriptor singular. */
            public singular: string;

            /** ResourceDescriptor style. */
            public style: google.api.ResourceDescriptor.Style[];

            /**
             * Creates a new ResourceDescriptor instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ResourceDescriptor instance
             */
            public static create(properties?: google.api.IResourceDescriptor): google.api.ResourceDescriptor;

            /**
             * Encodes the specified ResourceDescriptor message. Does not implicitly {@link google.api.ResourceDescriptor.verify|verify} messages.
             * @param message ResourceDescriptor message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.api.IResourceDescriptor, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ResourceDescriptor message, length delimited. Does not implicitly {@link google.api.ResourceDescriptor.verify|verify} messages.
             * @param message ResourceDescriptor message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.api.IResourceDescriptor, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ResourceDescriptor message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ResourceDescriptor
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.ResourceDescriptor;

            /**
             * Decodes a ResourceDescriptor message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ResourceDescriptor
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.ResourceDescriptor;

            /**
             * Verifies a ResourceDescriptor message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ResourceDescriptor message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ResourceDescriptor
             */
            public static fromObject(object: { [k: string]: any }): google.api.ResourceDescriptor;

            /**
             * Creates a plain object from a ResourceDescriptor message. Also converts values to other types if specified.
             * @param message ResourceDescriptor
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.api.ResourceDescriptor, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ResourceDescriptor to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace ResourceDescriptor {

            /** History enum. */
            enum History {
                HISTORY_UNSPECIFIED = 0,
                ORIGINALLY_SINGLE_PATTERN = 1,
                FUTURE_MULTI_PATTERN = 2
            }

            /** Style enum. */
            enum Style {
                STYLE_UNSPECIFIED = 0,
                DECLARATIVE_FRIENDLY = 1
            }
        }

        /** Properties of a ResourceReference. */
        interface IResourceReference {

            /** ResourceReference type */
            type?: (string|null);

            /** ResourceReference childType */
            childType?: (string|null);
        }

        /** Represents a ResourceReference. */
        class ResourceReference implements IResourceReference {

            /**
             * Constructs a new ResourceReference.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.api.IResourceReference);

            /** ResourceReference type. */
            public type: string;

            /** ResourceReference childType. */
            public childType: string;

            /**
             * Creates a new ResourceReference instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ResourceReference instance
             */
            public static create(properties?: google.api.IResourceReference): google.api.ResourceReference;

            /**
             * Encodes the specified ResourceReference message. Does not implicitly {@link google.api.ResourceReference.verify|verify} messages.
             * @param message ResourceReference message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.api.IResourceReference, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ResourceReference message, length delimited. Does not implicitly {@link google.api.ResourceReference.verify|verify} messages.
             * @param message ResourceReference message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.api.IResourceReference, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ResourceReference message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ResourceReference
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.ResourceReference;

            /**
             * Decodes a ResourceReference message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ResourceReference
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.ResourceReference;

            /**
             * Verifies a ResourceReference message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ResourceReference message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ResourceReference
             */
            public static fromObject(object: { [k: string]: any }): google.api.ResourceReference;

            /**
             * Creates a plain object from a ResourceReference message. Also converts values to other types if specified.
             * @param message ResourceReference
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.api.ResourceReference, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ResourceReference to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }
    }

    /** Namespace protobuf. */
    namespace protobuf {

        /** Properties of a FileDescriptorSet. */
        interface IFileDescriptorSet {

            /** FileDescriptorSet file */
            file?: (google.protobuf.IFileDescriptorProto[]|null);
        }

        /** Represents a FileDescriptorSet. */
        class FileDescriptorSet implements IFileDescriptorSet {

            /**
             * Constructs a new FileDescriptorSet.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IFileDescriptorSet);

            /** FileDescriptorSet file. */
            public file: google.protobuf.IFileDescriptorProto[];

            /**
             * Creates a new FileDescriptorSet instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FileDescriptorSet instance
             */
            public static create(properties?: google.protobuf.IFileDescriptorSet): google.protobuf.FileDescriptorSet;

            /**
             * Encodes the specified FileDescriptorSet message. Does not implicitly {@link google.protobuf.FileDescriptorSet.verify|verify} messages.
             * @param message FileDescriptorSet message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IFileDescriptorSet, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FileDescriptorSet message, length delimited. Does not implicitly {@link google.protobuf.FileDescriptorSet.verify|verify} messages.
             * @param message FileDescriptorSet message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IFileDescriptorSet, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FileDescriptorSet message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FileDescriptorSet
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FileDescriptorSet;

            /**
             * Decodes a FileDescriptorSet message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FileDescriptorSet
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FileDescriptorSet;

            /**
             * Verifies a FileDescriptorSet message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FileDescriptorSet message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FileDescriptorSet
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.FileDescriptorSet;

            /**
             * Creates a plain object from a FileDescriptorSet message. Also converts values to other types if specified.
             * @param message FileDescriptorSet
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.FileDescriptorSet, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FileDescriptorSet to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a FileDescriptorProto. */
        interface IFileDescriptorProto {

            /** FileDescriptorProto name */
            name?: (string|null);

            /** FileDescriptorProto package */
            "package"?: (string|null);

            /** FileDescriptorProto dependency */
            dependency?: (string[]|null);

            /** FileDescriptorProto publicDependency */
            publicDependency?: (number[]|null);

            /** FileDescriptorProto weakDependency */
            weakDependency?: (number[]|null);

            /** FileDescriptorProto messageType */
            messageType?: (google.protobuf.IDescriptorProto[]|null);

            /** FileDescriptorProto enumType */
            enumType?: (google.protobuf.IEnumDescriptorProto[]|null);

            /** FileDescriptorProto service */
            service?: (google.protobuf.IServiceDescriptorProto[]|null);

            /** FileDescriptorProto extension */
            extension?: (google.protobuf.IFieldDescriptorProto[]|null);

            /** FileDescriptorProto options */
            options?: (google.protobuf.IFileOptions|null);

            /** FileDescriptorProto sourceCodeInfo */
            sourceCodeInfo?: (google.protobuf.ISourceCodeInfo|null);

            /** FileDescriptorProto syntax */
            syntax?: (string|null);
        }

        /** Represents a FileDescriptorProto. */
        class FileDescriptorProto implements IFileDescriptorProto {

            /**
             * Constructs a new FileDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IFileDescriptorProto);

            /** FileDescriptorProto name. */
            public name: string;

            /** FileDescriptorProto package. */
            public package: string;

            /** FileDescriptorProto dependency. */
            public dependency: string[];

            /** FileDescriptorProto publicDependency. */
            public publicDependency: number[];

            /** FileDescriptorProto weakDependency. */
            public weakDependency: number[];

            /** FileDescriptorProto messageType. */
            public messageType: google.protobuf.IDescriptorProto[];

            /** FileDescriptorProto enumType. */
            public enumType: google.protobuf.IEnumDescriptorProto[];

            /** FileDescriptorProto service. */
            public service: google.protobuf.IServiceDescriptorProto[];

            /** FileDescriptorProto extension. */
            public extension: google.protobuf.IFieldDescriptorProto[];

            /** FileDescriptorProto options. */
            public options?: (google.protobuf.IFileOptions|null);

            /** FileDescriptorProto sourceCodeInfo. */
            public sourceCodeInfo?: (google.protobuf.ISourceCodeInfo|null);

            /** FileDescriptorProto syntax. */
            public syntax: string;

            /**
             * Creates a new FileDescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FileDescriptorProto instance
             */
            public static create(properties?: google.protobuf.IFileDescriptorProto): google.protobuf.FileDescriptorProto;

            /**
             * Encodes the specified FileDescriptorProto message. Does not implicitly {@link google.protobuf.FileDescriptorProto.verify|verify} messages.
             * @param message FileDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IFileDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FileDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.FileDescriptorProto.verify|verify} messages.
             * @param message FileDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IFileDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FileDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FileDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FileDescriptorProto;

            /**
             * Decodes a FileDescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FileDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FileDescriptorProto;

            /**
             * Verifies a FileDescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FileDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FileDescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.FileDescriptorProto;

            /**
             * Creates a plain object from a FileDescriptorProto message. Also converts values to other types if specified.
             * @param message FileDescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.FileDescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FileDescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a DescriptorProto. */
        interface IDescriptorProto {

            /** DescriptorProto name */
            name?: (string|null);

            /** DescriptorProto field */
            field?: (google.protobuf.IFieldDescriptorProto[]|null);

            /** DescriptorProto extension */
            extension?: (google.protobuf.IFieldDescriptorProto[]|null);

            /** DescriptorProto nestedType */
            nestedType?: (google.protobuf.IDescriptorProto[]|null);

            /** DescriptorProto enumType */
            enumType?: (google.protobuf.IEnumDescriptorProto[]|null);

            /** DescriptorProto extensionRange */
            extensionRange?: (google.protobuf.DescriptorProto.IExtensionRange[]|null);

            /** DescriptorProto oneofDecl */
            oneofDecl?: (google.protobuf.IOneofDescriptorProto[]|null);

            /** DescriptorProto options */
            options?: (google.protobuf.IMessageOptions|null);

            /** DescriptorProto reservedRange */
            reservedRange?: (google.protobuf.DescriptorProto.IReservedRange[]|null);

            /** DescriptorProto reservedName */
            reservedName?: (string[]|null);
        }

        /** Represents a DescriptorProto. */
        class DescriptorProto implements IDescriptorProto {

            /**
             * Constructs a new DescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IDescriptorProto);

            /** DescriptorProto name. */
            public name: string;

            /** DescriptorProto field. */
            public field: google.protobuf.IFieldDescriptorProto[];

            /** DescriptorProto extension. */
            public extension: google.protobuf.IFieldDescriptorProto[];

            /** DescriptorProto nestedType. */
            public nestedType: google.protobuf.IDescriptorProto[];

            /** DescriptorProto enumType. */
            public enumType: google.protobuf.IEnumDescriptorProto[];

            /** DescriptorProto extensionRange. */
            public extensionRange: google.protobuf.DescriptorProto.IExtensionRange[];

            /** DescriptorProto oneofDecl. */
            public oneofDecl: google.protobuf.IOneofDescriptorProto[];

            /** DescriptorProto options. */
            public options?: (google.protobuf.IMessageOptions|null);

            /** DescriptorProto reservedRange. */
            public reservedRange: google.protobuf.DescriptorProto.IReservedRange[];

            /** DescriptorProto reservedName. */
            public reservedName: string[];

            /**
             * Creates a new DescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns DescriptorProto instance
             */
            public static create(properties?: google.protobuf.IDescriptorProto): google.protobuf.DescriptorProto;

            /**
             * Encodes the specified DescriptorProto message. Does not implicitly {@link google.protobuf.DescriptorProto.verify|verify} messages.
             * @param message DescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified DescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.DescriptorProto.verify|verify} messages.
             * @param message DescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a DescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns DescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.DescriptorProto;

            /**
             * Decodes a DescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns DescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.DescriptorProto;

            /**
             * Verifies a DescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a DescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns DescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.DescriptorProto;

            /**
             * Creates a plain object from a DescriptorProto message. Also converts values to other types if specified.
             * @param message DescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.DescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this DescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace DescriptorProto {

            /** Properties of an ExtensionRange. */
            interface IExtensionRange {

                /** ExtensionRange start */
                start?: (number|null);

                /** ExtensionRange end */
                end?: (number|null);

                /** ExtensionRange options */
                options?: (google.protobuf.IExtensionRangeOptions|null);
            }

            /** Represents an ExtensionRange. */
            class ExtensionRange implements IExtensionRange {

                /**
                 * Constructs a new ExtensionRange.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.DescriptorProto.IExtensionRange);

                /** ExtensionRange start. */
                public start: number;

                /** ExtensionRange end. */
                public end: number;

                /** ExtensionRange options. */
                public options?: (google.protobuf.IExtensionRangeOptions|null);

                /**
                 * Creates a new ExtensionRange instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ExtensionRange instance
                 */
                public static create(properties?: google.protobuf.DescriptorProto.IExtensionRange): google.protobuf.DescriptorProto.ExtensionRange;

                /**
                 * Encodes the specified ExtensionRange message. Does not implicitly {@link google.protobuf.DescriptorProto.ExtensionRange.verify|verify} messages.
                 * @param message ExtensionRange message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.protobuf.DescriptorProto.IExtensionRange, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ExtensionRange message, length delimited. Does not implicitly {@link google.protobuf.DescriptorProto.ExtensionRange.verify|verify} messages.
                 * @param message ExtensionRange message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.protobuf.DescriptorProto.IExtensionRange, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an ExtensionRange message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ExtensionRange
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.DescriptorProto.ExtensionRange;

                /**
                 * Decodes an ExtensionRange message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ExtensionRange
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.DescriptorProto.ExtensionRange;

                /**
                 * Verifies an ExtensionRange message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an ExtensionRange message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ExtensionRange
                 */
                public static fromObject(object: { [k: string]: any }): google.protobuf.DescriptorProto.ExtensionRange;

                /**
                 * Creates a plain object from an ExtensionRange message. Also converts values to other types if specified.
                 * @param message ExtensionRange
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.protobuf.DescriptorProto.ExtensionRange, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ExtensionRange to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a ReservedRange. */
            interface IReservedRange {

                /** ReservedRange start */
                start?: (number|null);

                /** ReservedRange end */
                end?: (number|null);
            }

            /** Represents a ReservedRange. */
            class ReservedRange implements IReservedRange {

                /**
                 * Constructs a new ReservedRange.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.DescriptorProto.IReservedRange);

                /** ReservedRange start. */
                public start: number;

                /** ReservedRange end. */
                public end: number;

                /**
                 * Creates a new ReservedRange instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ReservedRange instance
                 */
                public static create(properties?: google.protobuf.DescriptorProto.IReservedRange): google.protobuf.DescriptorProto.ReservedRange;

                /**
                 * Encodes the specified ReservedRange message. Does not implicitly {@link google.protobuf.DescriptorProto.ReservedRange.verify|verify} messages.
                 * @param message ReservedRange message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.protobuf.DescriptorProto.IReservedRange, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ReservedRange message, length delimited. Does not implicitly {@link google.protobuf.DescriptorProto.ReservedRange.verify|verify} messages.
                 * @param message ReservedRange message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.protobuf.DescriptorProto.IReservedRange, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a ReservedRange message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ReservedRange
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.DescriptorProto.ReservedRange;

                /**
                 * Decodes a ReservedRange message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ReservedRange
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.DescriptorProto.ReservedRange;

                /**
                 * Verifies a ReservedRange message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a ReservedRange message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ReservedRange
                 */
                public static fromObject(object: { [k: string]: any }): google.protobuf.DescriptorProto.ReservedRange;

                /**
                 * Creates a plain object from a ReservedRange message. Also converts values to other types if specified.
                 * @param message ReservedRange
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.protobuf.DescriptorProto.ReservedRange, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ReservedRange to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }

        /** Properties of an ExtensionRangeOptions. */
        interface IExtensionRangeOptions {

            /** ExtensionRangeOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);
        }

        /** Represents an ExtensionRangeOptions. */
        class ExtensionRangeOptions implements IExtensionRangeOptions {

            /**
             * Constructs a new ExtensionRangeOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IExtensionRangeOptions);

            /** ExtensionRangeOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new ExtensionRangeOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ExtensionRangeOptions instance
             */
            public static create(properties?: google.protobuf.IExtensionRangeOptions): google.protobuf.ExtensionRangeOptions;

            /**
             * Encodes the specified ExtensionRangeOptions message. Does not implicitly {@link google.protobuf.ExtensionRangeOptions.verify|verify} messages.
             * @param message ExtensionRangeOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IExtensionRangeOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ExtensionRangeOptions message, length delimited. Does not implicitly {@link google.protobuf.ExtensionRangeOptions.verify|verify} messages.
             * @param message ExtensionRangeOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IExtensionRangeOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an ExtensionRangeOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ExtensionRangeOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.ExtensionRangeOptions;

            /**
             * Decodes an ExtensionRangeOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ExtensionRangeOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.ExtensionRangeOptions;

            /**
             * Verifies an ExtensionRangeOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an ExtensionRangeOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ExtensionRangeOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.ExtensionRangeOptions;

            /**
             * Creates a plain object from an ExtensionRangeOptions message. Also converts values to other types if specified.
             * @param message ExtensionRangeOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.ExtensionRangeOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ExtensionRangeOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a FieldDescriptorProto. */
        interface IFieldDescriptorProto {

            /** FieldDescriptorProto name */
            name?: (string|null);

            /** FieldDescriptorProto number */
            number?: (number|null);

            /** FieldDescriptorProto label */
            label?: (google.protobuf.FieldDescriptorProto.Label|keyof typeof google.protobuf.FieldDescriptorProto.Label|null);

            /** FieldDescriptorProto type */
            type?: (google.protobuf.FieldDescriptorProto.Type|keyof typeof google.protobuf.FieldDescriptorProto.Type|null);

            /** FieldDescriptorProto typeName */
            typeName?: (string|null);

            /** FieldDescriptorProto extendee */
            extendee?: (string|null);

            /** FieldDescriptorProto defaultValue */
            defaultValue?: (string|null);

            /** FieldDescriptorProto oneofIndex */
            oneofIndex?: (number|null);

            /** FieldDescriptorProto jsonName */
            jsonName?: (string|null);

            /** FieldDescriptorProto options */
            options?: (google.protobuf.IFieldOptions|null);

            /** FieldDescriptorProto proto3Optional */
            proto3Optional?: (boolean|null);
        }

        /** Represents a FieldDescriptorProto. */
        class FieldDescriptorProto implements IFieldDescriptorProto {

            /**
             * Constructs a new FieldDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IFieldDescriptorProto);

            /** FieldDescriptorProto name. */
            public name: string;

            /** FieldDescriptorProto number. */
            public number: number;

            /** FieldDescriptorProto label. */
            public label: (google.protobuf.FieldDescriptorProto.Label|keyof typeof google.protobuf.FieldDescriptorProto.Label);

            /** FieldDescriptorProto type. */
            public type: (google.protobuf.FieldDescriptorProto.Type|keyof typeof google.protobuf.FieldDescriptorProto.Type);

            /** FieldDescriptorProto typeName. */
            public typeName: string;

            /** FieldDescriptorProto extendee. */
            public extendee: string;

            /** FieldDescriptorProto defaultValue. */
            public defaultValue: string;

            /** FieldDescriptorProto oneofIndex. */
            public oneofIndex: number;

            /** FieldDescriptorProto jsonName. */
            public jsonName: string;

            /** FieldDescriptorProto options. */
            public options?: (google.protobuf.IFieldOptions|null);

            /** FieldDescriptorProto proto3Optional. */
            public proto3Optional: boolean;

            /**
             * Creates a new FieldDescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FieldDescriptorProto instance
             */
            public static create(properties?: google.protobuf.IFieldDescriptorProto): google.protobuf.FieldDescriptorProto;

            /**
             * Encodes the specified FieldDescriptorProto message. Does not implicitly {@link google.protobuf.FieldDescriptorProto.verify|verify} messages.
             * @param message FieldDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IFieldDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FieldDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.FieldDescriptorProto.verify|verify} messages.
             * @param message FieldDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IFieldDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FieldDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FieldDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FieldDescriptorProto;

            /**
             * Decodes a FieldDescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FieldDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FieldDescriptorProto;

            /**
             * Verifies a FieldDescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FieldDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FieldDescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.FieldDescriptorProto;

            /**
             * Creates a plain object from a FieldDescriptorProto message. Also converts values to other types if specified.
             * @param message FieldDescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.FieldDescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FieldDescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace FieldDescriptorProto {

            /** Type enum. */
            enum Type {
                TYPE_DOUBLE = 1,
                TYPE_FLOAT = 2,
                TYPE_INT64 = 3,
                TYPE_UINT64 = 4,
                TYPE_INT32 = 5,
                TYPE_FIXED64 = 6,
                TYPE_FIXED32 = 7,
                TYPE_BOOL = 8,
                TYPE_STRING = 9,
                TYPE_GROUP = 10,
                TYPE_MESSAGE = 11,
                TYPE_BYTES = 12,
                TYPE_UINT32 = 13,
                TYPE_ENUM = 14,
                TYPE_SFIXED32 = 15,
                TYPE_SFIXED64 = 16,
                TYPE_SINT32 = 17,
                TYPE_SINT64 = 18
            }

            /** Label enum. */
            enum Label {
                LABEL_OPTIONAL = 1,
                LABEL_REQUIRED = 2,
                LABEL_REPEATED = 3
            }
        }

        /** Properties of an OneofDescriptorProto. */
        interface IOneofDescriptorProto {

            /** OneofDescriptorProto name */
            name?: (string|null);

            /** OneofDescriptorProto options */
            options?: (google.protobuf.IOneofOptions|null);
        }

        /** Represents an OneofDescriptorProto. */
        class OneofDescriptorProto implements IOneofDescriptorProto {

            /**
             * Constructs a new OneofDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IOneofDescriptorProto);

            /** OneofDescriptorProto name. */
            public name: string;

            /** OneofDescriptorProto options. */
            public options?: (google.protobuf.IOneofOptions|null);

            /**
             * Creates a new OneofDescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns OneofDescriptorProto instance
             */
            public static create(properties?: google.protobuf.IOneofDescriptorProto): google.protobuf.OneofDescriptorProto;

            /**
             * Encodes the specified OneofDescriptorProto message. Does not implicitly {@link google.protobuf.OneofDescriptorProto.verify|verify} messages.
             * @param message OneofDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IOneofDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified OneofDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.OneofDescriptorProto.verify|verify} messages.
             * @param message OneofDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IOneofDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an OneofDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns OneofDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.OneofDescriptorProto;

            /**
             * Decodes an OneofDescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns OneofDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.OneofDescriptorProto;

            /**
             * Verifies an OneofDescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an OneofDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns OneofDescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.OneofDescriptorProto;

            /**
             * Creates a plain object from an OneofDescriptorProto message. Also converts values to other types if specified.
             * @param message OneofDescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.OneofDescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this OneofDescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an EnumDescriptorProto. */
        interface IEnumDescriptorProto {

            /** EnumDescriptorProto name */
            name?: (string|null);

            /** EnumDescriptorProto value */
            value?: (google.protobuf.IEnumValueDescriptorProto[]|null);

            /** EnumDescriptorProto options */
            options?: (google.protobuf.IEnumOptions|null);

            /** EnumDescriptorProto reservedRange */
            reservedRange?: (google.protobuf.EnumDescriptorProto.IEnumReservedRange[]|null);

            /** EnumDescriptorProto reservedName */
            reservedName?: (string[]|null);
        }

        /** Represents an EnumDescriptorProto. */
        class EnumDescriptorProto implements IEnumDescriptorProto {

            /**
             * Constructs a new EnumDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IEnumDescriptorProto);

            /** EnumDescriptorProto name. */
            public name: string;

            /** EnumDescriptorProto value. */
            public value: google.protobuf.IEnumValueDescriptorProto[];

            /** EnumDescriptorProto options. */
            public options?: (google.protobuf.IEnumOptions|null);

            /** EnumDescriptorProto reservedRange. */
            public reservedRange: google.protobuf.EnumDescriptorProto.IEnumReservedRange[];

            /** EnumDescriptorProto reservedName. */
            public reservedName: string[];

            /**
             * Creates a new EnumDescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns EnumDescriptorProto instance
             */
            public static create(properties?: google.protobuf.IEnumDescriptorProto): google.protobuf.EnumDescriptorProto;

            /**
             * Encodes the specified EnumDescriptorProto message. Does not implicitly {@link google.protobuf.EnumDescriptorProto.verify|verify} messages.
             * @param message EnumDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IEnumDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified EnumDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.EnumDescriptorProto.verify|verify} messages.
             * @param message EnumDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IEnumDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an EnumDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns EnumDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.EnumDescriptorProto;

            /**
             * Decodes an EnumDescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns EnumDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.EnumDescriptorProto;

            /**
             * Verifies an EnumDescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an EnumDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns EnumDescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.EnumDescriptorProto;

            /**
             * Creates a plain object from an EnumDescriptorProto message. Also converts values to other types if specified.
             * @param message EnumDescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.EnumDescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this EnumDescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace EnumDescriptorProto {

            /** Properties of an EnumReservedRange. */
            interface IEnumReservedRange {

                /** EnumReservedRange start */
                start?: (number|null);

                /** EnumReservedRange end */
                end?: (number|null);
            }

            /** Represents an EnumReservedRange. */
            class EnumReservedRange implements IEnumReservedRange {

                /**
                 * Constructs a new EnumReservedRange.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.EnumDescriptorProto.IEnumReservedRange);

                /** EnumReservedRange start. */
                public start: number;

                /** EnumReservedRange end. */
                public end: number;

                /**
                 * Creates a new EnumReservedRange instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns EnumReservedRange instance
                 */
                public static create(properties?: google.protobuf.EnumDescriptorProto.IEnumReservedRange): google.protobuf.EnumDescriptorProto.EnumReservedRange;

                /**
                 * Encodes the specified EnumReservedRange message. Does not implicitly {@link google.protobuf.EnumDescriptorProto.EnumReservedRange.verify|verify} messages.
                 * @param message EnumReservedRange message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.protobuf.EnumDescriptorProto.IEnumReservedRange, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified EnumReservedRange message, length delimited. Does not implicitly {@link google.protobuf.EnumDescriptorProto.EnumReservedRange.verify|verify} messages.
                 * @param message EnumReservedRange message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.protobuf.EnumDescriptorProto.IEnumReservedRange, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an EnumReservedRange message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns EnumReservedRange
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.EnumDescriptorProto.EnumReservedRange;

                /**
                 * Decodes an EnumReservedRange message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns EnumReservedRange
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.EnumDescriptorProto.EnumReservedRange;

                /**
                 * Verifies an EnumReservedRange message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an EnumReservedRange message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns EnumReservedRange
                 */
                public static fromObject(object: { [k: string]: any }): google.protobuf.EnumDescriptorProto.EnumReservedRange;

                /**
                 * Creates a plain object from an EnumReservedRange message. Also converts values to other types if specified.
                 * @param message EnumReservedRange
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.protobuf.EnumDescriptorProto.EnumReservedRange, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this EnumReservedRange to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }

        /** Properties of an EnumValueDescriptorProto. */
        interface IEnumValueDescriptorProto {

            /** EnumValueDescriptorProto name */
            name?: (string|null);

            /** EnumValueDescriptorProto number */
            number?: (number|null);

            /** EnumValueDescriptorProto options */
            options?: (google.protobuf.IEnumValueOptions|null);
        }

        /** Represents an EnumValueDescriptorProto. */
        class EnumValueDescriptorProto implements IEnumValueDescriptorProto {

            /**
             * Constructs a new EnumValueDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IEnumValueDescriptorProto);

            /** EnumValueDescriptorProto name. */
            public name: string;

            /** EnumValueDescriptorProto number. */
            public number: number;

            /** EnumValueDescriptorProto options. */
            public options?: (google.protobuf.IEnumValueOptions|null);

            /**
             * Creates a new EnumValueDescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns EnumValueDescriptorProto instance
             */
            public static create(properties?: google.protobuf.IEnumValueDescriptorProto): google.protobuf.EnumValueDescriptorProto;

            /**
             * Encodes the specified EnumValueDescriptorProto message. Does not implicitly {@link google.protobuf.EnumValueDescriptorProto.verify|verify} messages.
             * @param message EnumValueDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IEnumValueDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified EnumValueDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.EnumValueDescriptorProto.verify|verify} messages.
             * @param message EnumValueDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IEnumValueDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an EnumValueDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns EnumValueDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.EnumValueDescriptorProto;

            /**
             * Decodes an EnumValueDescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns EnumValueDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.EnumValueDescriptorProto;

            /**
             * Verifies an EnumValueDescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an EnumValueDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns EnumValueDescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.EnumValueDescriptorProto;

            /**
             * Creates a plain object from an EnumValueDescriptorProto message. Also converts values to other types if specified.
             * @param message EnumValueDescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.EnumValueDescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this EnumValueDescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a ServiceDescriptorProto. */
        interface IServiceDescriptorProto {

            /** ServiceDescriptorProto name */
            name?: (string|null);

            /** ServiceDescriptorProto method */
            method?: (google.protobuf.IMethodDescriptorProto[]|null);

            /** ServiceDescriptorProto options */
            options?: (google.protobuf.IServiceOptions|null);
        }

        /** Represents a ServiceDescriptorProto. */
        class ServiceDescriptorProto implements IServiceDescriptorProto {

            /**
             * Constructs a new ServiceDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IServiceDescriptorProto);

            /** ServiceDescriptorProto name. */
            public name: string;

            /** ServiceDescriptorProto method. */
            public method: google.protobuf.IMethodDescriptorProto[];

            /** ServiceDescriptorProto options. */
            public options?: (google.protobuf.IServiceOptions|null);

            /**
             * Creates a new ServiceDescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ServiceDescriptorProto instance
             */
            public static create(properties?: google.protobuf.IServiceDescriptorProto): google.protobuf.ServiceDescriptorProto;

            /**
             * Encodes the specified ServiceDescriptorProto message. Does not implicitly {@link google.protobuf.ServiceDescriptorProto.verify|verify} messages.
             * @param message ServiceDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IServiceDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ServiceDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.ServiceDescriptorProto.verify|verify} messages.
             * @param message ServiceDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IServiceDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ServiceDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ServiceDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.ServiceDescriptorProto;

            /**
             * Decodes a ServiceDescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ServiceDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.ServiceDescriptorProto;

            /**
             * Verifies a ServiceDescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ServiceDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ServiceDescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.ServiceDescriptorProto;

            /**
             * Creates a plain object from a ServiceDescriptorProto message. Also converts values to other types if specified.
             * @param message ServiceDescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.ServiceDescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ServiceDescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a MethodDescriptorProto. */
        interface IMethodDescriptorProto {

            /** MethodDescriptorProto name */
            name?: (string|null);

            /** MethodDescriptorProto inputType */
            inputType?: (string|null);

            /** MethodDescriptorProto outputType */
            outputType?: (string|null);

            /** MethodDescriptorProto options */
            options?: (google.protobuf.IMethodOptions|null);

            /** MethodDescriptorProto clientStreaming */
            clientStreaming?: (boolean|null);

            /** MethodDescriptorProto serverStreaming */
            serverStreaming?: (boolean|null);
        }

        /** Represents a MethodDescriptorProto. */
        class MethodDescriptorProto implements IMethodDescriptorProto {

            /**
             * Constructs a new MethodDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IMethodDescriptorProto);

            /** MethodDescriptorProto name. */
            public name: string;

            /** MethodDescriptorProto inputType. */
            public inputType: string;

            /** MethodDescriptorProto outputType. */
            public outputType: string;

            /** MethodDescriptorProto options. */
            public options?: (google.protobuf.IMethodOptions|null);

            /** MethodDescriptorProto clientStreaming. */
            public clientStreaming: boolean;

            /** MethodDescriptorProto serverStreaming. */
            public serverStreaming: boolean;

            /**
             * Creates a new MethodDescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns MethodDescriptorProto instance
             */
            public static create(properties?: google.protobuf.IMethodDescriptorProto): google.protobuf.MethodDescriptorProto;

            /**
             * Encodes the specified MethodDescriptorProto message. Does not implicitly {@link google.protobuf.MethodDescriptorProto.verify|verify} messages.
             * @param message MethodDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IMethodDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MethodDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.MethodDescriptorProto.verify|verify} messages.
             * @param message MethodDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IMethodDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MethodDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MethodDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.MethodDescriptorProto;

            /**
             * Decodes a MethodDescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MethodDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.MethodDescriptorProto;

            /**
             * Verifies a MethodDescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MethodDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MethodDescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.MethodDescriptorProto;

            /**
             * Creates a plain object from a MethodDescriptorProto message. Also converts values to other types if specified.
             * @param message MethodDescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.MethodDescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MethodDescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a FileOptions. */
        interface IFileOptions {

            /** FileOptions javaPackage */
            javaPackage?: (string|null);

            /** FileOptions javaOuterClassname */
            javaOuterClassname?: (string|null);

            /** FileOptions javaMultipleFiles */
            javaMultipleFiles?: (boolean|null);

            /** FileOptions javaGenerateEqualsAndHash */
            javaGenerateEqualsAndHash?: (boolean|null);

            /** FileOptions javaStringCheckUtf8 */
            javaStringCheckUtf8?: (boolean|null);

            /** FileOptions optimizeFor */
            optimizeFor?: (google.protobuf.FileOptions.OptimizeMode|keyof typeof google.protobuf.FileOptions.OptimizeMode|null);

            /** FileOptions goPackage */
            goPackage?: (string|null);

            /** FileOptions ccGenericServices */
            ccGenericServices?: (boolean|null);

            /** FileOptions javaGenericServices */
            javaGenericServices?: (boolean|null);

            /** FileOptions pyGenericServices */
            pyGenericServices?: (boolean|null);

            /** FileOptions phpGenericServices */
            phpGenericServices?: (boolean|null);

            /** FileOptions deprecated */
            deprecated?: (boolean|null);

            /** FileOptions ccEnableArenas */
            ccEnableArenas?: (boolean|null);

            /** FileOptions objcClassPrefix */
            objcClassPrefix?: (string|null);

            /** FileOptions csharpNamespace */
            csharpNamespace?: (string|null);

            /** FileOptions swiftPrefix */
            swiftPrefix?: (string|null);

            /** FileOptions phpClassPrefix */
            phpClassPrefix?: (string|null);

            /** FileOptions phpNamespace */
            phpNamespace?: (string|null);

            /** FileOptions phpMetadataNamespace */
            phpMetadataNamespace?: (string|null);

            /** FileOptions rubyPackage */
            rubyPackage?: (string|null);

            /** FileOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);

            /** FileOptions .google.api.resourceDefinition */
            ".google.api.resourceDefinition"?: (google.api.IResourceDescriptor[]|null);
        }

        /** Represents a FileOptions. */
        class FileOptions implements IFileOptions {

            /**
             * Constructs a new FileOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IFileOptions);

            /** FileOptions javaPackage. */
            public javaPackage: string;

            /** FileOptions javaOuterClassname. */
            public javaOuterClassname: string;

            /** FileOptions javaMultipleFiles. */
            public javaMultipleFiles: boolean;

            /** FileOptions javaGenerateEqualsAndHash. */
            public javaGenerateEqualsAndHash: boolean;

            /** FileOptions javaStringCheckUtf8. */
            public javaStringCheckUtf8: boolean;

            /** FileOptions optimizeFor. */
            public optimizeFor: (google.protobuf.FileOptions.OptimizeMode|keyof typeof google.protobuf.FileOptions.OptimizeMode);

            /** FileOptions goPackage. */
            public goPackage: string;

            /** FileOptions ccGenericServices. */
            public ccGenericServices: boolean;

            /** FileOptions javaGenericServices. */
            public javaGenericServices: boolean;

            /** FileOptions pyGenericServices. */
            public pyGenericServices: boolean;

            /** FileOptions phpGenericServices. */
            public phpGenericServices: boolean;

            /** FileOptions deprecated. */
            public deprecated: boolean;

            /** FileOptions ccEnableArenas. */
            public ccEnableArenas: boolean;

            /** FileOptions objcClassPrefix. */
            public objcClassPrefix: string;

            /** FileOptions csharpNamespace. */
            public csharpNamespace: string;

            /** FileOptions swiftPrefix. */
            public swiftPrefix: string;

            /** FileOptions phpClassPrefix. */
            public phpClassPrefix: string;

            /** FileOptions phpNamespace. */
            public phpNamespace: string;

            /** FileOptions phpMetadataNamespace. */
            public phpMetadataNamespace: string;

            /** FileOptions rubyPackage. */
            public rubyPackage: string;

            /** FileOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new FileOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FileOptions instance
             */
            public static create(properties?: google.protobuf.IFileOptions): google.protobuf.FileOptions;

            /**
             * Encodes the specified FileOptions message. Does not implicitly {@link google.protobuf.FileOptions.verify|verify} messages.
             * @param message FileOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IFileOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FileOptions message, length delimited. Does not implicitly {@link google.protobuf.FileOptions.verify|verify} messages.
             * @param message FileOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IFileOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FileOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FileOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FileOptions;

            /**
             * Decodes a FileOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FileOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FileOptions;

            /**
             * Verifies a FileOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FileOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FileOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.FileOptions;

            /**
             * Creates a plain object from a FileOptions message. Also converts values to other types if specified.
             * @param message FileOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.FileOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FileOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace FileOptions {

            /** OptimizeMode enum. */
            enum OptimizeMode {
                SPEED = 1,
                CODE_SIZE = 2,
                LITE_RUNTIME = 3
            }
        }

        /** Properties of a MessageOptions. */
        interface IMessageOptions {

            /** MessageOptions messageSetWireFormat */
            messageSetWireFormat?: (boolean|null);

            /** MessageOptions noStandardDescriptorAccessor */
            noStandardDescriptorAccessor?: (boolean|null);

            /** MessageOptions deprecated */
            deprecated?: (boolean|null);

            /** MessageOptions mapEntry */
            mapEntry?: (boolean|null);

            /** MessageOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);

            /** MessageOptions .google.api.resource */
            ".google.api.resource"?: (google.api.IResourceDescriptor|null);
        }

        /** Represents a MessageOptions. */
        class MessageOptions implements IMessageOptions {

            /**
             * Constructs a new MessageOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IMessageOptions);

            /** MessageOptions messageSetWireFormat. */
            public messageSetWireFormat: boolean;

            /** MessageOptions noStandardDescriptorAccessor. */
            public noStandardDescriptorAccessor: boolean;

            /** MessageOptions deprecated. */
            public deprecated: boolean;

            /** MessageOptions mapEntry. */
            public mapEntry: boolean;

            /** MessageOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new MessageOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns MessageOptions instance
             */
            public static create(properties?: google.protobuf.IMessageOptions): google.protobuf.MessageOptions;

            /**
             * Encodes the specified MessageOptions message. Does not implicitly {@link google.protobuf.MessageOptions.verify|verify} messages.
             * @param message MessageOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IMessageOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MessageOptions message, length delimited. Does not implicitly {@link google.protobuf.MessageOptions.verify|verify} messages.
             * @param message MessageOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IMessageOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MessageOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MessageOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.MessageOptions;

            /**
             * Decodes a MessageOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MessageOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.MessageOptions;

            /**
             * Verifies a MessageOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MessageOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MessageOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.MessageOptions;

            /**
             * Creates a plain object from a MessageOptions message. Also converts values to other types if specified.
             * @param message MessageOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.MessageOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MessageOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a FieldOptions. */
        interface IFieldOptions {

            /** FieldOptions ctype */
            ctype?: (google.protobuf.FieldOptions.CType|keyof typeof google.protobuf.FieldOptions.CType|null);

            /** FieldOptions packed */
            packed?: (boolean|null);

            /** FieldOptions jstype */
            jstype?: (google.protobuf.FieldOptions.JSType|keyof typeof google.protobuf.FieldOptions.JSType|null);

            /** FieldOptions lazy */
            lazy?: (boolean|null);

            /** FieldOptions deprecated */
            deprecated?: (boolean|null);

            /** FieldOptions weak */
            weak?: (boolean|null);

            /** FieldOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);

            /** FieldOptions .google.api.fieldBehavior */
            ".google.api.fieldBehavior"?: (google.api.FieldBehavior[]|null);

            /** FieldOptions .google.api.resourceReference */
            ".google.api.resourceReference"?: (google.api.IResourceReference|null);
        }

        /** Represents a FieldOptions. */
        class FieldOptions implements IFieldOptions {

            /**
             * Constructs a new FieldOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IFieldOptions);

            /** FieldOptions ctype. */
            public ctype: (google.protobuf.FieldOptions.CType|keyof typeof google.protobuf.FieldOptions.CType);

            /** FieldOptions packed. */
            public packed: boolean;

            /** FieldOptions jstype. */
            public jstype: (google.protobuf.FieldOptions.JSType|keyof typeof google.protobuf.FieldOptions.JSType);

            /** FieldOptions lazy. */
            public lazy: boolean;

            /** FieldOptions deprecated. */
            public deprecated: boolean;

            /** FieldOptions weak. */
            public weak: boolean;

            /** FieldOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new FieldOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FieldOptions instance
             */
            public static create(properties?: google.protobuf.IFieldOptions): google.protobuf.FieldOptions;

            /**
             * Encodes the specified FieldOptions message. Does not implicitly {@link google.protobuf.FieldOptions.verify|verify} messages.
             * @param message FieldOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IFieldOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FieldOptions message, length delimited. Does not implicitly {@link google.protobuf.FieldOptions.verify|verify} messages.
             * @param message FieldOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IFieldOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FieldOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FieldOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FieldOptions;

            /**
             * Decodes a FieldOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FieldOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FieldOptions;

            /**
             * Verifies a FieldOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FieldOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FieldOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.FieldOptions;

            /**
             * Creates a plain object from a FieldOptions message. Also converts values to other types if specified.
             * @param message FieldOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.FieldOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FieldOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace FieldOptions {

            /** CType enum. */
            enum CType {
                STRING = 0,
                CORD = 1,
                STRING_PIECE = 2
            }

            /** JSType enum. */
            enum JSType {
                JS_NORMAL = 0,
                JS_STRING = 1,
                JS_NUMBER = 2
            }
        }

        /** Properties of an OneofOptions. */
        interface IOneofOptions {

            /** OneofOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);
        }

        /** Represents an OneofOptions. */
        class OneofOptions implements IOneofOptions {

            /**
             * Constructs a new OneofOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IOneofOptions);

            /** OneofOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new OneofOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns OneofOptions instance
             */
            public static create(properties?: google.protobuf.IOneofOptions): google.protobuf.OneofOptions;

            /**
             * Encodes the specified OneofOptions message. Does not implicitly {@link google.protobuf.OneofOptions.verify|verify} messages.
             * @param message OneofOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IOneofOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified OneofOptions message, length delimited. Does not implicitly {@link google.protobuf.OneofOptions.verify|verify} messages.
             * @param message OneofOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IOneofOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an OneofOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns OneofOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.OneofOptions;

            /**
             * Decodes an OneofOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns OneofOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.OneofOptions;

            /**
             * Verifies an OneofOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an OneofOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns OneofOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.OneofOptions;

            /**
             * Creates a plain object from an OneofOptions message. Also converts values to other types if specified.
             * @param message OneofOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.OneofOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this OneofOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an EnumOptions. */
        interface IEnumOptions {

            /** EnumOptions allowAlias */
            allowAlias?: (boolean|null);

            /** EnumOptions deprecated */
            deprecated?: (boolean|null);

            /** EnumOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);
        }

        /** Represents an EnumOptions. */
        class EnumOptions implements IEnumOptions {

            /**
             * Constructs a new EnumOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IEnumOptions);

            /** EnumOptions allowAlias. */
            public allowAlias: boolean;

            /** EnumOptions deprecated. */
            public deprecated: boolean;

            /** EnumOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new EnumOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns EnumOptions instance
             */
            public static create(properties?: google.protobuf.IEnumOptions): google.protobuf.EnumOptions;

            /**
             * Encodes the specified EnumOptions message. Does not implicitly {@link google.protobuf.EnumOptions.verify|verify} messages.
             * @param message EnumOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IEnumOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified EnumOptions message, length delimited. Does not implicitly {@link google.protobuf.EnumOptions.verify|verify} messages.
             * @param message EnumOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IEnumOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an EnumOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns EnumOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.EnumOptions;

            /**
             * Decodes an EnumOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns EnumOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.EnumOptions;

            /**
             * Verifies an EnumOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an EnumOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns EnumOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.EnumOptions;

            /**
             * Creates a plain object from an EnumOptions message. Also converts values to other types if specified.
             * @param message EnumOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.EnumOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this EnumOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an EnumValueOptions. */
        interface IEnumValueOptions {

            /** EnumValueOptions deprecated */
            deprecated?: (boolean|null);

            /** EnumValueOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);
        }

        /** Represents an EnumValueOptions. */
        class EnumValueOptions implements IEnumValueOptions {

            /**
             * Constructs a new EnumValueOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IEnumValueOptions);

            /** EnumValueOptions deprecated. */
            public deprecated: boolean;

            /** EnumValueOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new EnumValueOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns EnumValueOptions instance
             */
            public static create(properties?: google.protobuf.IEnumValueOptions): google.protobuf.EnumValueOptions;

            /**
             * Encodes the specified EnumValueOptions message. Does not implicitly {@link google.protobuf.EnumValueOptions.verify|verify} messages.
             * @param message EnumValueOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IEnumValueOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified EnumValueOptions message, length delimited. Does not implicitly {@link google.protobuf.EnumValueOptions.verify|verify} messages.
             * @param message EnumValueOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IEnumValueOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an EnumValueOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns EnumValueOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.EnumValueOptions;

            /**
             * Decodes an EnumValueOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns EnumValueOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.EnumValueOptions;

            /**
             * Verifies an EnumValueOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an EnumValueOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns EnumValueOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.EnumValueOptions;

            /**
             * Creates a plain object from an EnumValueOptions message. Also converts values to other types if specified.
             * @param message EnumValueOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.EnumValueOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this EnumValueOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a ServiceOptions. */
        interface IServiceOptions {

            /** ServiceOptions deprecated */
            deprecated?: (boolean|null);

            /** ServiceOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);

            /** ServiceOptions .google.api.defaultHost */
            ".google.api.defaultHost"?: (string|null);

            /** ServiceOptions .google.api.oauthScopes */
            ".google.api.oauthScopes"?: (string|null);
        }

        /** Represents a ServiceOptions. */
        class ServiceOptions implements IServiceOptions {

            /**
             * Constructs a new ServiceOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IServiceOptions);

            /** ServiceOptions deprecated. */
            public deprecated: boolean;

            /** ServiceOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new ServiceOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ServiceOptions instance
             */
            public static create(properties?: google.protobuf.IServiceOptions): google.protobuf.ServiceOptions;

            /**
             * Encodes the specified ServiceOptions message. Does not implicitly {@link google.protobuf.ServiceOptions.verify|verify} messages.
             * @param message ServiceOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IServiceOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ServiceOptions message, length delimited. Does not implicitly {@link google.protobuf.ServiceOptions.verify|verify} messages.
             * @param message ServiceOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IServiceOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ServiceOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ServiceOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.ServiceOptions;

            /**
             * Decodes a ServiceOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ServiceOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.ServiceOptions;

            /**
             * Verifies a ServiceOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ServiceOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ServiceOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.ServiceOptions;

            /**
             * Creates a plain object from a ServiceOptions message. Also converts values to other types if specified.
             * @param message ServiceOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.ServiceOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ServiceOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a MethodOptions. */
        interface IMethodOptions {

            /** MethodOptions deprecated */
            deprecated?: (boolean|null);

            /** MethodOptions idempotencyLevel */
            idempotencyLevel?: (google.protobuf.MethodOptions.IdempotencyLevel|keyof typeof google.protobuf.MethodOptions.IdempotencyLevel|null);

            /** MethodOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);

            /** MethodOptions .google.api.http */
            ".google.api.http"?: (google.api.IHttpRule|null);

            /** MethodOptions .google.api.methodSignature */
            ".google.api.methodSignature"?: (string[]|null);

            /** MethodOptions .google.longrunning.operationInfo */
            ".google.longrunning.operationInfo"?: (google.longrunning.IOperationInfo|null);
        }

        /** Represents a MethodOptions. */
        class MethodOptions implements IMethodOptions {

            /**
             * Constructs a new MethodOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IMethodOptions);

            /** MethodOptions deprecated. */
            public deprecated: boolean;

            /** MethodOptions idempotencyLevel. */
            public idempotencyLevel: (google.protobuf.MethodOptions.IdempotencyLevel|keyof typeof google.protobuf.MethodOptions.IdempotencyLevel);

            /** MethodOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new MethodOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns MethodOptions instance
             */
            public static create(properties?: google.protobuf.IMethodOptions): google.protobuf.MethodOptions;

            /**
             * Encodes the specified MethodOptions message. Does not implicitly {@link google.protobuf.MethodOptions.verify|verify} messages.
             * @param message MethodOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IMethodOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MethodOptions message, length delimited. Does not implicitly {@link google.protobuf.MethodOptions.verify|verify} messages.
             * @param message MethodOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IMethodOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MethodOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MethodOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.MethodOptions;

            /**
             * Decodes a MethodOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MethodOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.MethodOptions;

            /**
             * Verifies a MethodOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MethodOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MethodOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.MethodOptions;

            /**
             * Creates a plain object from a MethodOptions message. Also converts values to other types if specified.
             * @param message MethodOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.MethodOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MethodOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace MethodOptions {

            /** IdempotencyLevel enum. */
            enum IdempotencyLevel {
                IDEMPOTENCY_UNKNOWN = 0,
                NO_SIDE_EFFECTS = 1,
                IDEMPOTENT = 2
            }
        }

        /** Properties of an UninterpretedOption. */
        interface IUninterpretedOption {

            /** UninterpretedOption name */
            name?: (google.protobuf.UninterpretedOption.INamePart[]|null);

            /** UninterpretedOption identifierValue */
            identifierValue?: (string|null);

            /** UninterpretedOption positiveIntValue */
            positiveIntValue?: (number|Long|string|null);

            /** UninterpretedOption negativeIntValue */
            negativeIntValue?: (number|Long|string|null);

            /** UninterpretedOption doubleValue */
            doubleValue?: (number|null);

            /** UninterpretedOption stringValue */
            stringValue?: (Uint8Array|string|null);

            /** UninterpretedOption aggregateValue */
            aggregateValue?: (string|null);
        }

        /** Represents an UninterpretedOption. */
        class UninterpretedOption implements IUninterpretedOption {

            /**
             * Constructs a new UninterpretedOption.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IUninterpretedOption);

            /** UninterpretedOption name. */
            public name: google.protobuf.UninterpretedOption.INamePart[];

            /** UninterpretedOption identifierValue. */
            public identifierValue: string;

            /** UninterpretedOption positiveIntValue. */
            public positiveIntValue: (number|Long|string);

            /** UninterpretedOption negativeIntValue. */
            public negativeIntValue: (number|Long|string);

            /** UninterpretedOption doubleValue. */
            public doubleValue: number;

            /** UninterpretedOption stringValue. */
            public stringValue: (Uint8Array|string);

            /** UninterpretedOption aggregateValue. */
            public aggregateValue: string;

            /**
             * Creates a new UninterpretedOption instance using the specified properties.
             * @param [properties] Properties to set
             * @returns UninterpretedOption instance
             */
            public static create(properties?: google.protobuf.IUninterpretedOption): google.protobuf.UninterpretedOption;

            /**
             * Encodes the specified UninterpretedOption message. Does not implicitly {@link google.protobuf.UninterpretedOption.verify|verify} messages.
             * @param message UninterpretedOption message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IUninterpretedOption, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified UninterpretedOption message, length delimited. Does not implicitly {@link google.protobuf.UninterpretedOption.verify|verify} messages.
             * @param message UninterpretedOption message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IUninterpretedOption, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an UninterpretedOption message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns UninterpretedOption
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.UninterpretedOption;

            /**
             * Decodes an UninterpretedOption message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns UninterpretedOption
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.UninterpretedOption;

            /**
             * Verifies an UninterpretedOption message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an UninterpretedOption message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns UninterpretedOption
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.UninterpretedOption;

            /**
             * Creates a plain object from an UninterpretedOption message. Also converts values to other types if specified.
             * @param message UninterpretedOption
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.UninterpretedOption, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this UninterpretedOption to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace UninterpretedOption {

            /** Properties of a NamePart. */
            interface INamePart {

                /** NamePart namePart */
                namePart: string;

                /** NamePart isExtension */
                isExtension: boolean;
            }

            /** Represents a NamePart. */
            class NamePart implements INamePart {

                /**
                 * Constructs a new NamePart.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.UninterpretedOption.INamePart);

                /** NamePart namePart. */
                public namePart: string;

                /** NamePart isExtension. */
                public isExtension: boolean;

                /**
                 * Creates a new NamePart instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns NamePart instance
                 */
                public static create(properties?: google.protobuf.UninterpretedOption.INamePart): google.protobuf.UninterpretedOption.NamePart;

                /**
                 * Encodes the specified NamePart message. Does not implicitly {@link google.protobuf.UninterpretedOption.NamePart.verify|verify} messages.
                 * @param message NamePart message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.protobuf.UninterpretedOption.INamePart, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified NamePart message, length delimited. Does not implicitly {@link google.protobuf.UninterpretedOption.NamePart.verify|verify} messages.
                 * @param message NamePart message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.protobuf.UninterpretedOption.INamePart, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a NamePart message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns NamePart
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.UninterpretedOption.NamePart;

                /**
                 * Decodes a NamePart message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns NamePart
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.UninterpretedOption.NamePart;

                /**
                 * Verifies a NamePart message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a NamePart message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns NamePart
                 */
                public static fromObject(object: { [k: string]: any }): google.protobuf.UninterpretedOption.NamePart;

                /**
                 * Creates a plain object from a NamePart message. Also converts values to other types if specified.
                 * @param message NamePart
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.protobuf.UninterpretedOption.NamePart, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this NamePart to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }

        /** Properties of a SourceCodeInfo. */
        interface ISourceCodeInfo {

            /** SourceCodeInfo location */
            location?: (google.protobuf.SourceCodeInfo.ILocation[]|null);
        }

        /** Represents a SourceCodeInfo. */
        class SourceCodeInfo implements ISourceCodeInfo {

            /**
             * Constructs a new SourceCodeInfo.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.ISourceCodeInfo);

            /** SourceCodeInfo location. */
            public location: google.protobuf.SourceCodeInfo.ILocation[];

            /**
             * Creates a new SourceCodeInfo instance using the specified properties.
             * @param [properties] Properties to set
             * @returns SourceCodeInfo instance
             */
            public static create(properties?: google.protobuf.ISourceCodeInfo): google.protobuf.SourceCodeInfo;

            /**
             * Encodes the specified SourceCodeInfo message. Does not implicitly {@link google.protobuf.SourceCodeInfo.verify|verify} messages.
             * @param message SourceCodeInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.ISourceCodeInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified SourceCodeInfo message, length delimited. Does not implicitly {@link google.protobuf.SourceCodeInfo.verify|verify} messages.
             * @param message SourceCodeInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.ISourceCodeInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SourceCodeInfo message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns SourceCodeInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.SourceCodeInfo;

            /**
             * Decodes a SourceCodeInfo message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns SourceCodeInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.SourceCodeInfo;

            /**
             * Verifies a SourceCodeInfo message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a SourceCodeInfo message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns SourceCodeInfo
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.SourceCodeInfo;

            /**
             * Creates a plain object from a SourceCodeInfo message. Also converts values to other types if specified.
             * @param message SourceCodeInfo
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.SourceCodeInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this SourceCodeInfo to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace SourceCodeInfo {

            /** Properties of a Location. */
            interface ILocation {

                /** Location path */
                path?: (number[]|null);

                /** Location span */
                span?: (number[]|null);

                /** Location leadingComments */
                leadingComments?: (string|null);

                /** Location trailingComments */
                trailingComments?: (string|null);

                /** Location leadingDetachedComments */
                leadingDetachedComments?: (string[]|null);
            }

            /** Represents a Location. */
            class Location implements ILocation {

                /**
                 * Constructs a new Location.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.SourceCodeInfo.ILocation);

                /** Location path. */
                public path: number[];

                /** Location span. */
                public span: number[];

                /** Location leadingComments. */
                public leadingComments: string;

                /** Location trailingComments. */
                public trailingComments: string;

                /** Location leadingDetachedComments. */
                public leadingDetachedComments: string[];

                /**
                 * Creates a new Location instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Location instance
                 */
                public static create(properties?: google.protobuf.SourceCodeInfo.ILocation): google.protobuf.SourceCodeInfo.Location;

                /**
                 * Encodes the specified Location message. Does not implicitly {@link google.protobuf.SourceCodeInfo.Location.verify|verify} messages.
                 * @param message Location message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.protobuf.SourceCodeInfo.ILocation, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Location message, length delimited. Does not implicitly {@link google.protobuf.SourceCodeInfo.Location.verify|verify} messages.
                 * @param message Location message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.protobuf.SourceCodeInfo.ILocation, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Location message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Location
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.SourceCodeInfo.Location;

                /**
                 * Decodes a Location message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Location
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.SourceCodeInfo.Location;

                /**
                 * Verifies a Location message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Location message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Location
                 */
                public static fromObject(object: { [k: string]: any }): google.protobuf.SourceCodeInfo.Location;

                /**
                 * Creates a plain object from a Location message. Also converts values to other types if specified.
                 * @param message Location
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.protobuf.SourceCodeInfo.Location, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Location to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }

        /** Properties of a GeneratedCodeInfo. */
        interface IGeneratedCodeInfo {

            /** GeneratedCodeInfo annotation */
            annotation?: (google.protobuf.GeneratedCodeInfo.IAnnotation[]|null);
        }

        /** Represents a GeneratedCodeInfo. */
        class GeneratedCodeInfo implements IGeneratedCodeInfo {

            /**
             * Constructs a new GeneratedCodeInfo.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IGeneratedCodeInfo);

            /** GeneratedCodeInfo annotation. */
            public annotation: google.protobuf.GeneratedCodeInfo.IAnnotation[];

            /**
             * Creates a new GeneratedCodeInfo instance using the specified properties.
             * @param [properties] Properties to set
             * @returns GeneratedCodeInfo instance
             */
            public static create(properties?: google.protobuf.IGeneratedCodeInfo): google.protobuf.GeneratedCodeInfo;

            /**
             * Encodes the specified GeneratedCodeInfo message. Does not implicitly {@link google.protobuf.GeneratedCodeInfo.verify|verify} messages.
             * @param message GeneratedCodeInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IGeneratedCodeInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified GeneratedCodeInfo message, length delimited. Does not implicitly {@link google.protobuf.GeneratedCodeInfo.verify|verify} messages.
             * @param message GeneratedCodeInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IGeneratedCodeInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a GeneratedCodeInfo message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns GeneratedCodeInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.GeneratedCodeInfo;

            /**
             * Decodes a GeneratedCodeInfo message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns GeneratedCodeInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.GeneratedCodeInfo;

            /**
             * Verifies a GeneratedCodeInfo message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a GeneratedCodeInfo message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns GeneratedCodeInfo
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.GeneratedCodeInfo;

            /**
             * Creates a plain object from a GeneratedCodeInfo message. Also converts values to other types if specified.
             * @param message GeneratedCodeInfo
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.GeneratedCodeInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this GeneratedCodeInfo to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace GeneratedCodeInfo {

            /** Properties of an Annotation. */
            interface IAnnotation {

                /** Annotation path */
                path?: (number[]|null);

                /** Annotation sourceFile */
                sourceFile?: (string|null);

                /** Annotation begin */
                begin?: (number|null);

                /** Annotation end */
                end?: (number|null);
            }

            /** Represents an Annotation. */
            class Annotation implements IAnnotation {

                /**
                 * Constructs a new Annotation.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.GeneratedCodeInfo.IAnnotation);

                /** Annotation path. */
                public path: number[];

                /** Annotation sourceFile. */
                public sourceFile: string;

                /** Annotation begin. */
                public begin: number;

                /** Annotation end. */
                public end: number;

                /**
                 * Creates a new Annotation instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Annotation instance
                 */
                public static create(properties?: google.protobuf.GeneratedCodeInfo.IAnnotation): google.protobuf.GeneratedCodeInfo.Annotation;

                /**
                 * Encodes the specified Annotation message. Does not implicitly {@link google.protobuf.GeneratedCodeInfo.Annotation.verify|verify} messages.
                 * @param message Annotation message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.protobuf.GeneratedCodeInfo.IAnnotation, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Annotation message, length delimited. Does not implicitly {@link google.protobuf.GeneratedCodeInfo.Annotation.verify|verify} messages.
                 * @param message Annotation message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.protobuf.GeneratedCodeInfo.IAnnotation, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an Annotation message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Annotation
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.GeneratedCodeInfo.Annotation;

                /**
                 * Decodes an Annotation message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Annotation
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.GeneratedCodeInfo.Annotation;

                /**
                 * Verifies an Annotation message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an Annotation message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Annotation
                 */
                public static fromObject(object: { [k: string]: any }): google.protobuf.GeneratedCodeInfo.Annotation;

                /**
                 * Creates a plain object from an Annotation message. Also converts values to other types if specified.
                 * @param message Annotation
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.protobuf.GeneratedCodeInfo.Annotation, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Annotation to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }

        /** Properties of a Duration. */
        interface IDuration {

            /** Duration seconds */
            seconds?: (number|Long|string|null);

            /** Duration nanos */
            nanos?: (number|null);
        }

        /** Represents a Duration. */
        class Duration implements IDuration {

            /**
             * Constructs a new Duration.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IDuration);

            /** Duration seconds. */
            public seconds: (number|Long|string);

            /** Duration nanos. */
            public nanos: number;

            /**
             * Creates a new Duration instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Duration instance
             */
            public static create(properties?: google.protobuf.IDuration): google.protobuf.Duration;

            /**
             * Encodes the specified Duration message. Does not implicitly {@link google.protobuf.Duration.verify|verify} messages.
             * @param message Duration message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IDuration, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Duration message, length delimited. Does not implicitly {@link google.protobuf.Duration.verify|verify} messages.
             * @param message Duration message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IDuration, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Duration message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Duration
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.Duration;

            /**
             * Decodes a Duration message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Duration
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.Duration;

            /**
             * Verifies a Duration message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Duration message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Duration
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.Duration;

            /**
             * Creates a plain object from a Duration message. Also converts values to other types if specified.
             * @param message Duration
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.Duration, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Duration to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an Empty. */
        interface IEmpty {
        }

        /** Represents an Empty. */
        class Empty implements IEmpty {

            /**
             * Constructs a new Empty.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IEmpty);

            /**
             * Creates a new Empty instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Empty instance
             */
            public static create(properties?: google.protobuf.IEmpty): google.protobuf.Empty;

            /**
             * Encodes the specified Empty message. Does not implicitly {@link google.protobuf.Empty.verify|verify} messages.
             * @param message Empty message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IEmpty, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Empty message, length delimited. Does not implicitly {@link google.protobuf.Empty.verify|verify} messages.
             * @param message Empty message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IEmpty, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an Empty message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Empty
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.Empty;

            /**
             * Decodes an Empty message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Empty
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.Empty;

            /**
             * Verifies an Empty message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an Empty message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Empty
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.Empty;

            /**
             * Creates a plain object from an Empty message. Also converts values to other types if specified.
             * @param message Empty
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.Empty, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Empty to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an Any. */
        interface IAny {

            /** Any type_url */
            type_url?: (string|null);

            /** Any value */
            value?: (Uint8Array|string|null);
        }

        /** Represents an Any. */
        class Any implements IAny {

            /**
             * Constructs a new Any.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IAny);

            /** Any type_url. */
            public type_url: string;

            /** Any value. */
            public value: (Uint8Array|string);

            /**
             * Creates a new Any instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Any instance
             */
            public static create(properties?: google.protobuf.IAny): google.protobuf.Any;

            /**
             * Encodes the specified Any message. Does not implicitly {@link google.protobuf.Any.verify|verify} messages.
             * @param message Any message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IAny, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Any message, length delimited. Does not implicitly {@link google.protobuf.Any.verify|verify} messages.
             * @param message Any message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IAny, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an Any message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Any
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.Any;

            /**
             * Decodes an Any message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Any
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.Any;

            /**
             * Verifies an Any message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an Any message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Any
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.Any;

            /**
             * Creates a plain object from an Any message. Also converts values to other types if specified.
             * @param message Any
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.Any, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Any to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a Timestamp. */
        interface ITimestamp {

            /** Timestamp seconds */
            seconds?: (number|Long|string|null);

            /** Timestamp nanos */
            nanos?: (number|null);
        }

        /** Represents a Timestamp. */
        class Timestamp implements ITimestamp {

            /**
             * Constructs a new Timestamp.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.ITimestamp);

            /** Timestamp seconds. */
            public seconds: (number|Long|string);

            /** Timestamp nanos. */
            public nanos: number;

            /**
             * Creates a new Timestamp instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Timestamp instance
             */
            public static create(properties?: google.protobuf.ITimestamp): google.protobuf.Timestamp;

            /**
             * Encodes the specified Timestamp message. Does not implicitly {@link google.protobuf.Timestamp.verify|verify} messages.
             * @param message Timestamp message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.ITimestamp, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Timestamp message, length delimited. Does not implicitly {@link google.protobuf.Timestamp.verify|verify} messages.
             * @param message Timestamp message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.ITimestamp, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Timestamp message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Timestamp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.Timestamp;

            /**
             * Decodes a Timestamp message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Timestamp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.Timestamp;

            /**
             * Verifies a Timestamp message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Timestamp message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Timestamp
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.Timestamp;

            /**
             * Creates a plain object from a Timestamp message. Also converts values to other types if specified.
             * @param message Timestamp
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.Timestamp, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Timestamp to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a FieldMask. */
        interface IFieldMask {

            /** FieldMask paths */
            paths?: (string[]|null);
        }

        /** Represents a FieldMask. */
        class FieldMask implements IFieldMask {

            /**
             * Constructs a new FieldMask.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IFieldMask);

            /** FieldMask paths. */
            public paths: string[];

            /**
             * Creates a new FieldMask instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FieldMask instance
             */
            public static create(properties?: google.protobuf.IFieldMask): google.protobuf.FieldMask;

            /**
             * Encodes the specified FieldMask message. Does not implicitly {@link google.protobuf.FieldMask.verify|verify} messages.
             * @param message FieldMask message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IFieldMask, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FieldMask message, length delimited. Does not implicitly {@link google.protobuf.FieldMask.verify|verify} messages.
             * @param message FieldMask message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IFieldMask, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FieldMask message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FieldMask
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FieldMask;

            /**
             * Decodes a FieldMask message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FieldMask
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FieldMask;

            /**
             * Verifies a FieldMask message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FieldMask message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FieldMask
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.FieldMask;

            /**
             * Creates a plain object from a FieldMask message. Also converts values to other types if specified.
             * @param message FieldMask
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.FieldMask, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FieldMask to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }
    }

    /** Namespace longrunning. */
    namespace longrunning {

        /** Represents an Operations */
        class Operations extends $protobuf.rpc.Service {

            /**
             * Constructs a new Operations service.
             * @param rpcImpl RPC implementation
             * @param [requestDelimited=false] Whether requests are length-delimited
             * @param [responseDelimited=false] Whether responses are length-delimited
             */
            constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

            /**
             * Creates new Operations service using the specified rpc implementation.
             * @param rpcImpl RPC implementation
             * @param [requestDelimited=false] Whether requests are length-delimited
             * @param [responseDelimited=false] Whether responses are length-delimited
             * @returns RPC service. Useful where requests and/or responses are streamed.
             */
            public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): Operations;

            /**
             * Calls ListOperations.
             * @param request ListOperationsRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and ListOperationsResponse
             */
            public listOperations(request: google.longrunning.IListOperationsRequest, callback: google.longrunning.Operations.ListOperationsCallback): void;

            /**
             * Calls ListOperations.
             * @param request ListOperationsRequest message or plain object
             * @returns Promise
             */
            public listOperations(request: google.longrunning.IListOperationsRequest): Promise<google.longrunning.ListOperationsResponse>;

            /**
             * Calls GetOperation.
             * @param request GetOperationRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and Operation
             */
            public getOperation(request: google.longrunning.IGetOperationRequest, callback: google.longrunning.Operations.GetOperationCallback): void;

            /**
             * Calls GetOperation.
             * @param request GetOperationRequest message or plain object
             * @returns Promise
             */
            public getOperation(request: google.longrunning.IGetOperationRequest): Promise<google.longrunning.Operation>;

            /**
             * Calls DeleteOperation.
             * @param request DeleteOperationRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and Empty
             */
            public deleteOperation(request: google.longrunning.IDeleteOperationRequest, callback: google.longrunning.Operations.DeleteOperationCallback): void;

            /**
             * Calls DeleteOperation.
             * @param request DeleteOperationRequest message or plain object
             * @returns Promise
             */
            public deleteOperation(request: google.longrunning.IDeleteOperationRequest): Promise<google.protobuf.Empty>;

            /**
             * Calls CancelOperation.
             * @param request CancelOperationRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and Empty
             */
            public cancelOperation(request: google.longrunning.ICancelOperationRequest, callback: google.longrunning.Operations.CancelOperationCallback): void;

            /**
             * Calls CancelOperation.
             * @param request CancelOperationRequest message or plain object
             * @returns Promise
             */
            public cancelOperation(request: google.longrunning.ICancelOperationRequest): Promise<google.protobuf.Empty>;

            /**
             * Calls WaitOperation.
             * @param request WaitOperationRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and Operation
             */
            public waitOperation(request: google.longrunning.IWaitOperationRequest, callback: google.longrunning.Operations.WaitOperationCallback): void;

            /**
             * Calls WaitOperation.
             * @param request WaitOperationRequest message or plain object
             * @returns Promise
             */
            public waitOperation(request: google.longrunning.IWaitOperationRequest): Promise<google.longrunning.Operation>;
        }

        namespace Operations {

            /**
             * Callback as used by {@link google.longrunning.Operations#listOperations}.
             * @param error Error, if any
             * @param [response] ListOperationsResponse
             */
            type ListOperationsCallback = (error: (Error|null), response?: google.longrunning.ListOperationsResponse) => void;

            /**
             * Callback as used by {@link google.longrunning.Operations#getOperation}.
             * @param error Error, if any
             * @param [response] Operation
             */
            type GetOperationCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

            /**
             * Callback as used by {@link google.longrunning.Operations#deleteOperation}.
             * @param error Error, if any
             * @param [response] Empty
             */
            type DeleteOperationCallback = (error: (Error|null), response?: google.protobuf.Empty) => void;

            /**
             * Callback as used by {@link google.longrunning.Operations#cancelOperation}.
             * @param error Error, if any
             * @param [response] Empty
             */
            type CancelOperationCallback = (error: (Error|null), response?: google.protobuf.Empty) => void;

            /**
             * Callback as used by {@link google.longrunning.Operations#waitOperation}.
             * @param error Error, if any
             * @param [response] Operation
             */
            type WaitOperationCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;
        }

        /** Properties of an Operation. */
        interface IOperation {

            /** Operation name */
            name?: (string|null);

            /** Operation metadata */
            metadata?: (google.protobuf.IAny|null);

            /** Operation done */
            done?: (boolean|null);

            /** Operation error */
            error?: (google.rpc.IStatus|null);

            /** Operation response */
            response?: (google.protobuf.IAny|null);
        }

        /** Represents an Operation. */
        class Operation implements IOperation {

            /**
             * Constructs a new Operation.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.longrunning.IOperation);

            /** Operation name. */
            public name: string;

            /** Operation metadata. */
            public metadata?: (google.protobuf.IAny|null);

            /** Operation done. */
            public done: boolean;

            /** Operation error. */
            public error?: (google.rpc.IStatus|null);

            /** Operation response. */
            public response?: (google.protobuf.IAny|null);

            /** Operation result. */
            public result?: ("error"|"response");

            /**
             * Creates a new Operation instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Operation instance
             */
            public static create(properties?: google.longrunning.IOperation): google.longrunning.Operation;

            /**
             * Encodes the specified Operation message. Does not implicitly {@link google.longrunning.Operation.verify|verify} messages.
             * @param message Operation message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.longrunning.IOperation, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Operation message, length delimited. Does not implicitly {@link google.longrunning.Operation.verify|verify} messages.
             * @param message Operation message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.longrunning.IOperation, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an Operation message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Operation
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.longrunning.Operation;

            /**
             * Decodes an Operation message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Operation
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.longrunning.Operation;

            /**
             * Verifies an Operation message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an Operation message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Operation
             */
            public static fromObject(object: { [k: string]: any }): google.longrunning.Operation;

            /**
             * Creates a plain object from an Operation message. Also converts values to other types if specified.
             * @param message Operation
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.longrunning.Operation, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Operation to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a GetOperationRequest. */
        interface IGetOperationRequest {

            /** GetOperationRequest name */
            name?: (string|null);
        }

        /** Represents a GetOperationRequest. */
        class GetOperationRequest implements IGetOperationRequest {

            /**
             * Constructs a new GetOperationRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.longrunning.IGetOperationRequest);

            /** GetOperationRequest name. */
            public name: string;

            /**
             * Creates a new GetOperationRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns GetOperationRequest instance
             */
            public static create(properties?: google.longrunning.IGetOperationRequest): google.longrunning.GetOperationRequest;

            /**
             * Encodes the specified GetOperationRequest message. Does not implicitly {@link google.longrunning.GetOperationRequest.verify|verify} messages.
             * @param message GetOperationRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.longrunning.IGetOperationRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified GetOperationRequest message, length delimited. Does not implicitly {@link google.longrunning.GetOperationRequest.verify|verify} messages.
             * @param message GetOperationRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.longrunning.IGetOperationRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a GetOperationRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns GetOperationRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.longrunning.GetOperationRequest;

            /**
             * Decodes a GetOperationRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns GetOperationRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.longrunning.GetOperationRequest;

            /**
             * Verifies a GetOperationRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a GetOperationRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns GetOperationRequest
             */
            public static fromObject(object: { [k: string]: any }): google.longrunning.GetOperationRequest;

            /**
             * Creates a plain object from a GetOperationRequest message. Also converts values to other types if specified.
             * @param message GetOperationRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.longrunning.GetOperationRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this GetOperationRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a ListOperationsRequest. */
        interface IListOperationsRequest {

            /** ListOperationsRequest name */
            name?: (string|null);

            /** ListOperationsRequest filter */
            filter?: (string|null);

            /** ListOperationsRequest pageSize */
            pageSize?: (number|null);

            /** ListOperationsRequest pageToken */
            pageToken?: (string|null);
        }

        /** Represents a ListOperationsRequest. */
        class ListOperationsRequest implements IListOperationsRequest {

            /**
             * Constructs a new ListOperationsRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.longrunning.IListOperationsRequest);

            /** ListOperationsRequest name. */
            public name: string;

            /** ListOperationsRequest filter. */
            public filter: string;

            /** ListOperationsRequest pageSize. */
            public pageSize: number;

            /** ListOperationsRequest pageToken. */
            public pageToken: string;

            /**
             * Creates a new ListOperationsRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ListOperationsRequest instance
             */
            public static create(properties?: google.longrunning.IListOperationsRequest): google.longrunning.ListOperationsRequest;

            /**
             * Encodes the specified ListOperationsRequest message. Does not implicitly {@link google.longrunning.ListOperationsRequest.verify|verify} messages.
             * @param message ListOperationsRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.longrunning.IListOperationsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ListOperationsRequest message, length delimited. Does not implicitly {@link google.longrunning.ListOperationsRequest.verify|verify} messages.
             * @param message ListOperationsRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.longrunning.IListOperationsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ListOperationsRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ListOperationsRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.longrunning.ListOperationsRequest;

            /**
             * Decodes a ListOperationsRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ListOperationsRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.longrunning.ListOperationsRequest;

            /**
             * Verifies a ListOperationsRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ListOperationsRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ListOperationsRequest
             */
            public static fromObject(object: { [k: string]: any }): google.longrunning.ListOperationsRequest;

            /**
             * Creates a plain object from a ListOperationsRequest message. Also converts values to other types if specified.
             * @param message ListOperationsRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.longrunning.ListOperationsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ListOperationsRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a ListOperationsResponse. */
        interface IListOperationsResponse {

            /** ListOperationsResponse operations */
            operations?: (google.longrunning.IOperation[]|null);

            /** ListOperationsResponse nextPageToken */
            nextPageToken?: (string|null);
        }

        /** Represents a ListOperationsResponse. */
        class ListOperationsResponse implements IListOperationsResponse {

            /**
             * Constructs a new ListOperationsResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.longrunning.IListOperationsResponse);

            /** ListOperationsResponse operations. */
            public operations: google.longrunning.IOperation[];

            /** ListOperationsResponse nextPageToken. */
            public nextPageToken: string;

            /**
             * Creates a new ListOperationsResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ListOperationsResponse instance
             */
            public static create(properties?: google.longrunning.IListOperationsResponse): google.longrunning.ListOperationsResponse;

            /**
             * Encodes the specified ListOperationsResponse message. Does not implicitly {@link google.longrunning.ListOperationsResponse.verify|verify} messages.
             * @param message ListOperationsResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.longrunning.IListOperationsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ListOperationsResponse message, length delimited. Does not implicitly {@link google.longrunning.ListOperationsResponse.verify|verify} messages.
             * @param message ListOperationsResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.longrunning.IListOperationsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ListOperationsResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ListOperationsResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.longrunning.ListOperationsResponse;

            /**
             * Decodes a ListOperationsResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ListOperationsResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.longrunning.ListOperationsResponse;

            /**
             * Verifies a ListOperationsResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ListOperationsResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ListOperationsResponse
             */
            public static fromObject(object: { [k: string]: any }): google.longrunning.ListOperationsResponse;

            /**
             * Creates a plain object from a ListOperationsResponse message. Also converts values to other types if specified.
             * @param message ListOperationsResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.longrunning.ListOperationsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ListOperationsResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a CancelOperationRequest. */
        interface ICancelOperationRequest {

            /** CancelOperationRequest name */
            name?: (string|null);
        }

        /** Represents a CancelOperationRequest. */
        class CancelOperationRequest implements ICancelOperationRequest {

            /**
             * Constructs a new CancelOperationRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.longrunning.ICancelOperationRequest);

            /** CancelOperationRequest name. */
            public name: string;

            /**
             * Creates a new CancelOperationRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns CancelOperationRequest instance
             */
            public static create(properties?: google.longrunning.ICancelOperationRequest): google.longrunning.CancelOperationRequest;

            /**
             * Encodes the specified CancelOperationRequest message. Does not implicitly {@link google.longrunning.CancelOperationRequest.verify|verify} messages.
             * @param message CancelOperationRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.longrunning.ICancelOperationRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified CancelOperationRequest message, length delimited. Does not implicitly {@link google.longrunning.CancelOperationRequest.verify|verify} messages.
             * @param message CancelOperationRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.longrunning.ICancelOperationRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a CancelOperationRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns CancelOperationRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.longrunning.CancelOperationRequest;

            /**
             * Decodes a CancelOperationRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns CancelOperationRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.longrunning.CancelOperationRequest;

            /**
             * Verifies a CancelOperationRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a CancelOperationRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns CancelOperationRequest
             */
            public static fromObject(object: { [k: string]: any }): google.longrunning.CancelOperationRequest;

            /**
             * Creates a plain object from a CancelOperationRequest message. Also converts values to other types if specified.
             * @param message CancelOperationRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.longrunning.CancelOperationRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this CancelOperationRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a DeleteOperationRequest. */
        interface IDeleteOperationRequest {

            /** DeleteOperationRequest name */
            name?: (string|null);
        }

        /** Represents a DeleteOperationRequest. */
        class DeleteOperationRequest implements IDeleteOperationRequest {

            /**
             * Constructs a new DeleteOperationRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.longrunning.IDeleteOperationRequest);

            /** DeleteOperationRequest name. */
            public name: string;

            /**
             * Creates a new DeleteOperationRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns DeleteOperationRequest instance
             */
            public static create(properties?: google.longrunning.IDeleteOperationRequest): google.longrunning.DeleteOperationRequest;

            /**
             * Encodes the specified DeleteOperationRequest message. Does not implicitly {@link google.longrunning.DeleteOperationRequest.verify|verify} messages.
             * @param message DeleteOperationRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.longrunning.IDeleteOperationRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified DeleteOperationRequest message, length delimited. Does not implicitly {@link google.longrunning.DeleteOperationRequest.verify|verify} messages.
             * @param message DeleteOperationRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.longrunning.IDeleteOperationRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a DeleteOperationRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns DeleteOperationRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.longrunning.DeleteOperationRequest;

            /**
             * Decodes a DeleteOperationRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns DeleteOperationRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.longrunning.DeleteOperationRequest;

            /**
             * Verifies a DeleteOperationRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a DeleteOperationRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns DeleteOperationRequest
             */
            public static fromObject(object: { [k: string]: any }): google.longrunning.DeleteOperationRequest;

            /**
             * Creates a plain object from a DeleteOperationRequest message. Also converts values to other types if specified.
             * @param message DeleteOperationRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.longrunning.DeleteOperationRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this DeleteOperationRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a WaitOperationRequest. */
        interface IWaitOperationRequest {

            /** WaitOperationRequest name */
            name?: (string|null);

            /** WaitOperationRequest timeout */
            timeout?: (google.protobuf.IDuration|null);
        }

        /** Represents a WaitOperationRequest. */
        class WaitOperationRequest implements IWaitOperationRequest {

            /**
             * Constructs a new WaitOperationRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.longrunning.IWaitOperationRequest);

            /** WaitOperationRequest name. */
            public name: string;

            /** WaitOperationRequest timeout. */
            public timeout?: (google.protobuf.IDuration|null);

            /**
             * Creates a new WaitOperationRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns WaitOperationRequest instance
             */
            public static create(properties?: google.longrunning.IWaitOperationRequest): google.longrunning.WaitOperationRequest;

            /**
             * Encodes the specified WaitOperationRequest message. Does not implicitly {@link google.longrunning.WaitOperationRequest.verify|verify} messages.
             * @param message WaitOperationRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.longrunning.IWaitOperationRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified WaitOperationRequest message, length delimited. Does not implicitly {@link google.longrunning.WaitOperationRequest.verify|verify} messages.
             * @param message WaitOperationRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.longrunning.IWaitOperationRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a WaitOperationRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns WaitOperationRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.longrunning.WaitOperationRequest;

            /**
             * Decodes a WaitOperationRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns WaitOperationRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.longrunning.WaitOperationRequest;

            /**
             * Verifies a WaitOperationRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a WaitOperationRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns WaitOperationRequest
             */
            public static fromObject(object: { [k: string]: any }): google.longrunning.WaitOperationRequest;

            /**
             * Creates a plain object from a WaitOperationRequest message. Also converts values to other types if specified.
             * @param message WaitOperationRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.longrunning.WaitOperationRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this WaitOperationRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an OperationInfo. */
        interface IOperationInfo {

            /** OperationInfo responseType */
            responseType?: (string|null);

            /** OperationInfo metadataType */
            metadataType?: (string|null);
        }

        /** Represents an OperationInfo. */
        class OperationInfo implements IOperationInfo {

            /**
             * Constructs a new OperationInfo.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.longrunning.IOperationInfo);

            /** OperationInfo responseType. */
            public responseType: string;

            /** OperationInfo metadataType. */
            public metadataType: string;

            /**
             * Creates a new OperationInfo instance using the specified properties.
             * @param [properties] Properties to set
             * @returns OperationInfo instance
             */
            public static create(properties?: google.longrunning.IOperationInfo): google.longrunning.OperationInfo;

            /**
             * Encodes the specified OperationInfo message. Does not implicitly {@link google.longrunning.OperationInfo.verify|verify} messages.
             * @param message OperationInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.longrunning.IOperationInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified OperationInfo message, length delimited. Does not implicitly {@link google.longrunning.OperationInfo.verify|verify} messages.
             * @param message OperationInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.longrunning.IOperationInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an OperationInfo message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns OperationInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.longrunning.OperationInfo;

            /**
             * Decodes an OperationInfo message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns OperationInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.longrunning.OperationInfo;

            /**
             * Verifies an OperationInfo message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an OperationInfo message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns OperationInfo
             */
            public static fromObject(object: { [k: string]: any }): google.longrunning.OperationInfo;

            /**
             * Creates a plain object from an OperationInfo message. Also converts values to other types if specified.
             * @param message OperationInfo
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.longrunning.OperationInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this OperationInfo to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }
    }

    /** Namespace rpc. */
    namespace rpc {

        /** Properties of a Status. */
        interface IStatus {

            /** Status code */
            code?: (number|null);

            /** Status message */
            message?: (string|null);

            /** Status details */
            details?: (google.protobuf.IAny[]|null);
        }

        /** Represents a Status. */
        class Status implements IStatus {

            /**
             * Constructs a new Status.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.rpc.IStatus);

            /** Status code. */
            public code: number;

            /** Status message. */
            public message: string;

            /** Status details. */
            public details: google.protobuf.IAny[];

            /**
             * Creates a new Status instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Status instance
             */
            public static create(properties?: google.rpc.IStatus): google.rpc.Status;

            /**
             * Encodes the specified Status message. Does not implicitly {@link google.rpc.Status.verify|verify} messages.
             * @param message Status message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.rpc.IStatus, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Status message, length delimited. Does not implicitly {@link google.rpc.Status.verify|verify} messages.
             * @param message Status message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.rpc.IStatus, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Status message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Status
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.rpc.Status;

            /**
             * Decodes a Status message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Status
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.rpc.Status;

            /**
             * Verifies a Status message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Status message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Status
             */
            public static fromObject(object: { [k: string]: any }): google.rpc.Status;

            /**
             * Creates a plain object from a Status message. Also converts values to other types if specified.
             * @param message Status
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.rpc.Status, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Status to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }
    }
}
