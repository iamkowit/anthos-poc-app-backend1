/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.calculator = (function() {

    /**
     * Namespace calculator.
     * @exports calculator
     * @namespace
     */
    var calculator = {};

    calculator.CalculatorService = (function() {

        /**
         * Constructs a new CalculatorService service.
         * @memberof calculator
         * @classdesc Represents a CalculatorService
         * @extends $protobuf.rpc.Service
         * @constructor
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         */
        function CalculatorService(rpcImpl, requestDelimited, responseDelimited) {
            $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
        }

        (CalculatorService.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = CalculatorService;

        /**
         * Creates new CalculatorService service using the specified rpc implementation.
         * @function create
         * @memberof calculator.CalculatorService
         * @static
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         * @returns {CalculatorService} RPC service. Useful where requests and/or responses are streamed.
         */
        CalculatorService.create = function create(rpcImpl, requestDelimited, responseDelimited) {
            return new this(rpcImpl, requestDelimited, responseDelimited);
        };

        /**
         * Callback as used by {@link calculator.CalculatorService#fibonacci}.
         * @memberof calculator.CalculatorService
         * @typedef FibonacciCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {calculator.FibonacciRes} [response] FibonacciRes
         */

        /**
         * Calls Fibonacci.
         * @function fibonacci
         * @memberof calculator.CalculatorService
         * @instance
         * @param {calculator.IFibonacciReq} request FibonacciReq message or plain object
         * @param {calculator.CalculatorService.FibonacciCallback} callback Node-style callback called with the error, if any, and FibonacciRes
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(CalculatorService.prototype.fibonacci = function fibonacci(request, callback) {
            return this.rpcCall(fibonacci, $root.calculator.FibonacciReq, $root.calculator.FibonacciRes, request, callback);
        }, "name", { value: "Fibonacci" });

        /**
         * Calls Fibonacci.
         * @function fibonacci
         * @memberof calculator.CalculatorService
         * @instance
         * @param {calculator.IFibonacciReq} request FibonacciReq message or plain object
         * @returns {Promise<calculator.FibonacciRes>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link calculator.CalculatorService#fibonacciFaster}.
         * @memberof calculator.CalculatorService
         * @typedef FibonacciFasterCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {calculator.FibonacciRes} [response] FibonacciRes
         */

        /**
         * Calls FibonacciFaster.
         * @function fibonacciFaster
         * @memberof calculator.CalculatorService
         * @instance
         * @param {calculator.IFibonacciReq} request FibonacciReq message or plain object
         * @param {calculator.CalculatorService.FibonacciFasterCallback} callback Node-style callback called with the error, if any, and FibonacciRes
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(CalculatorService.prototype.fibonacciFaster = function fibonacciFaster(request, callback) {
            return this.rpcCall(fibonacciFaster, $root.calculator.FibonacciReq, $root.calculator.FibonacciRes, request, callback);
        }, "name", { value: "FibonacciFaster" });

        /**
         * Calls FibonacciFaster.
         * @function fibonacciFaster
         * @memberof calculator.CalculatorService
         * @instance
         * @param {calculator.IFibonacciReq} request FibonacciReq message or plain object
         * @returns {Promise<calculator.FibonacciRes>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link calculator.CalculatorService#fibonacciFastest}.
         * @memberof calculator.CalculatorService
         * @typedef FibonacciFastestCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {calculator.FibonacciRes} [response] FibonacciRes
         */

        /**
         * Calls FibonacciFastest.
         * @function fibonacciFastest
         * @memberof calculator.CalculatorService
         * @instance
         * @param {calculator.IFibonacciReq} request FibonacciReq message or plain object
         * @param {calculator.CalculatorService.FibonacciFastestCallback} callback Node-style callback called with the error, if any, and FibonacciRes
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(CalculatorService.prototype.fibonacciFastest = function fibonacciFastest(request, callback) {
            return this.rpcCall(fibonacciFastest, $root.calculator.FibonacciReq, $root.calculator.FibonacciRes, request, callback);
        }, "name", { value: "FibonacciFastest" });

        /**
         * Calls FibonacciFastest.
         * @function fibonacciFastest
         * @memberof calculator.CalculatorService
         * @instance
         * @param {calculator.IFibonacciReq} request FibonacciReq message or plain object
         * @returns {Promise<calculator.FibonacciRes>} Promise
         * @variation 2
         */

        return CalculatorService;
    })();

    calculator.FibonacciReq = (function() {

        /**
         * Properties of a FibonacciReq.
         * @memberof calculator
         * @interface IFibonacciReq
         * @property {number|null} [order] FibonacciReq order
         */

        /**
         * Constructs a new FibonacciReq.
         * @memberof calculator
         * @classdesc Represents a FibonacciReq.
         * @implements IFibonacciReq
         * @constructor
         * @param {calculator.IFibonacciReq=} [properties] Properties to set
         */
        function FibonacciReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * FibonacciReq order.
         * @member {number} order
         * @memberof calculator.FibonacciReq
         * @instance
         */
        FibonacciReq.prototype.order = 0;

        /**
         * Creates a new FibonacciReq instance using the specified properties.
         * @function create
         * @memberof calculator.FibonacciReq
         * @static
         * @param {calculator.IFibonacciReq=} [properties] Properties to set
         * @returns {calculator.FibonacciReq} FibonacciReq instance
         */
        FibonacciReq.create = function create(properties) {
            return new FibonacciReq(properties);
        };

        /**
         * Encodes the specified FibonacciReq message. Does not implicitly {@link calculator.FibonacciReq.verify|verify} messages.
         * @function encode
         * @memberof calculator.FibonacciReq
         * @static
         * @param {calculator.IFibonacciReq} message FibonacciReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FibonacciReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.order != null && Object.hasOwnProperty.call(message, "order"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.order);
            return writer;
        };

        /**
         * Encodes the specified FibonacciReq message, length delimited. Does not implicitly {@link calculator.FibonacciReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof calculator.FibonacciReq
         * @static
         * @param {calculator.IFibonacciReq} message FibonacciReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FibonacciReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a FibonacciReq message from the specified reader or buffer.
         * @function decode
         * @memberof calculator.FibonacciReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {calculator.FibonacciReq} FibonacciReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FibonacciReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.calculator.FibonacciReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.order = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a FibonacciReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof calculator.FibonacciReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {calculator.FibonacciReq} FibonacciReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FibonacciReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a FibonacciReq message.
         * @function verify
         * @memberof calculator.FibonacciReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        FibonacciReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.order != null && message.hasOwnProperty("order"))
                if (!$util.isInteger(message.order))
                    return "order: integer expected";
            return null;
        };

        /**
         * Creates a FibonacciReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof calculator.FibonacciReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {calculator.FibonacciReq} FibonacciReq
         */
        FibonacciReq.fromObject = function fromObject(object) {
            if (object instanceof $root.calculator.FibonacciReq)
                return object;
            var message = new $root.calculator.FibonacciReq();
            if (object.order != null)
                message.order = object.order | 0;
            return message;
        };

        /**
         * Creates a plain object from a FibonacciReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof calculator.FibonacciReq
         * @static
         * @param {calculator.FibonacciReq} message FibonacciReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        FibonacciReq.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.order = 0;
            if (message.order != null && message.hasOwnProperty("order"))
                object.order = message.order;
            return object;
        };

        /**
         * Converts this FibonacciReq to JSON.
         * @function toJSON
         * @memberof calculator.FibonacciReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        FibonacciReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return FibonacciReq;
    })();

    calculator.FibonacciRes = (function() {

        /**
         * Properties of a FibonacciRes.
         * @memberof calculator
         * @interface IFibonacciRes
         * @property {number|null} [number] FibonacciRes number
         */

        /**
         * Constructs a new FibonacciRes.
         * @memberof calculator
         * @classdesc Represents a FibonacciRes.
         * @implements IFibonacciRes
         * @constructor
         * @param {calculator.IFibonacciRes=} [properties] Properties to set
         */
        function FibonacciRes(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * FibonacciRes number.
         * @member {number} number
         * @memberof calculator.FibonacciRes
         * @instance
         */
        FibonacciRes.prototype.number = 0;

        /**
         * Creates a new FibonacciRes instance using the specified properties.
         * @function create
         * @memberof calculator.FibonacciRes
         * @static
         * @param {calculator.IFibonacciRes=} [properties] Properties to set
         * @returns {calculator.FibonacciRes} FibonacciRes instance
         */
        FibonacciRes.create = function create(properties) {
            return new FibonacciRes(properties);
        };

        /**
         * Encodes the specified FibonacciRes message. Does not implicitly {@link calculator.FibonacciRes.verify|verify} messages.
         * @function encode
         * @memberof calculator.FibonacciRes
         * @static
         * @param {calculator.IFibonacciRes} message FibonacciRes message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FibonacciRes.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.number != null && Object.hasOwnProperty.call(message, "number"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.number);
            return writer;
        };

        /**
         * Encodes the specified FibonacciRes message, length delimited. Does not implicitly {@link calculator.FibonacciRes.verify|verify} messages.
         * @function encodeDelimited
         * @memberof calculator.FibonacciRes
         * @static
         * @param {calculator.IFibonacciRes} message FibonacciRes message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FibonacciRes.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a FibonacciRes message from the specified reader or buffer.
         * @function decode
         * @memberof calculator.FibonacciRes
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {calculator.FibonacciRes} FibonacciRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FibonacciRes.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.calculator.FibonacciRes();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.number = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a FibonacciRes message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof calculator.FibonacciRes
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {calculator.FibonacciRes} FibonacciRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FibonacciRes.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a FibonacciRes message.
         * @function verify
         * @memberof calculator.FibonacciRes
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        FibonacciRes.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.number != null && message.hasOwnProperty("number"))
                if (!$util.isInteger(message.number))
                    return "number: integer expected";
            return null;
        };

        /**
         * Creates a FibonacciRes message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof calculator.FibonacciRes
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {calculator.FibonacciRes} FibonacciRes
         */
        FibonacciRes.fromObject = function fromObject(object) {
            if (object instanceof $root.calculator.FibonacciRes)
                return object;
            var message = new $root.calculator.FibonacciRes();
            if (object.number != null)
                message.number = object.number | 0;
            return message;
        };

        /**
         * Creates a plain object from a FibonacciRes message. Also converts values to other types if specified.
         * @function toObject
         * @memberof calculator.FibonacciRes
         * @static
         * @param {calculator.FibonacciRes} message FibonacciRes
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        FibonacciRes.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.number = 0;
            if (message.number != null && message.hasOwnProperty("number"))
                object.number = message.number;
            return object;
        };

        /**
         * Converts this FibonacciRes to JSON.
         * @function toJSON
         * @memberof calculator.FibonacciRes
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        FibonacciRes.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return FibonacciRes;
    })();

    return calculator;
})();

$root.grpc = (function() {

    /**
     * Namespace grpc.
     * @exports grpc
     * @namespace
     */
    var grpc = {};

    grpc.health = (function() {

        /**
         * Namespace health.
         * @memberof grpc
         * @namespace
         */
        var health = {};

        health.v1 = (function() {

            /**
             * Namespace v1.
             * @memberof grpc.health
             * @namespace
             */
            var v1 = {};

            v1.HealthCheckRequest = (function() {

                /**
                 * Properties of a HealthCheckRequest.
                 * @memberof grpc.health.v1
                 * @interface IHealthCheckRequest
                 * @property {string|null} [service] HealthCheckRequest service
                 */

                /**
                 * Constructs a new HealthCheckRequest.
                 * @memberof grpc.health.v1
                 * @classdesc Represents a HealthCheckRequest.
                 * @implements IHealthCheckRequest
                 * @constructor
                 * @param {grpc.health.v1.IHealthCheckRequest=} [properties] Properties to set
                 */
                function HealthCheckRequest(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * HealthCheckRequest service.
                 * @member {string} service
                 * @memberof grpc.health.v1.HealthCheckRequest
                 * @instance
                 */
                HealthCheckRequest.prototype.service = "";

                /**
                 * Creates a new HealthCheckRequest instance using the specified properties.
                 * @function create
                 * @memberof grpc.health.v1.HealthCheckRequest
                 * @static
                 * @param {grpc.health.v1.IHealthCheckRequest=} [properties] Properties to set
                 * @returns {grpc.health.v1.HealthCheckRequest} HealthCheckRequest instance
                 */
                HealthCheckRequest.create = function create(properties) {
                    return new HealthCheckRequest(properties);
                };

                /**
                 * Encodes the specified HealthCheckRequest message. Does not implicitly {@link grpc.health.v1.HealthCheckRequest.verify|verify} messages.
                 * @function encode
                 * @memberof grpc.health.v1.HealthCheckRequest
                 * @static
                 * @param {grpc.health.v1.IHealthCheckRequest} message HealthCheckRequest message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                HealthCheckRequest.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.service != null && Object.hasOwnProperty.call(message, "service"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.service);
                    return writer;
                };

                /**
                 * Encodes the specified HealthCheckRequest message, length delimited. Does not implicitly {@link grpc.health.v1.HealthCheckRequest.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof grpc.health.v1.HealthCheckRequest
                 * @static
                 * @param {grpc.health.v1.IHealthCheckRequest} message HealthCheckRequest message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                HealthCheckRequest.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a HealthCheckRequest message from the specified reader or buffer.
                 * @function decode
                 * @memberof grpc.health.v1.HealthCheckRequest
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {grpc.health.v1.HealthCheckRequest} HealthCheckRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                HealthCheckRequest.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.grpc.health.v1.HealthCheckRequest();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.service = reader.string();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a HealthCheckRequest message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof grpc.health.v1.HealthCheckRequest
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {grpc.health.v1.HealthCheckRequest} HealthCheckRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                HealthCheckRequest.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a HealthCheckRequest message.
                 * @function verify
                 * @memberof grpc.health.v1.HealthCheckRequest
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                HealthCheckRequest.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.service != null && message.hasOwnProperty("service"))
                        if (!$util.isString(message.service))
                            return "service: string expected";
                    return null;
                };

                /**
                 * Creates a HealthCheckRequest message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof grpc.health.v1.HealthCheckRequest
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {grpc.health.v1.HealthCheckRequest} HealthCheckRequest
                 */
                HealthCheckRequest.fromObject = function fromObject(object) {
                    if (object instanceof $root.grpc.health.v1.HealthCheckRequest)
                        return object;
                    var message = new $root.grpc.health.v1.HealthCheckRequest();
                    if (object.service != null)
                        message.service = String(object.service);
                    return message;
                };

                /**
                 * Creates a plain object from a HealthCheckRequest message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof grpc.health.v1.HealthCheckRequest
                 * @static
                 * @param {grpc.health.v1.HealthCheckRequest} message HealthCheckRequest
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                HealthCheckRequest.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults)
                        object.service = "";
                    if (message.service != null && message.hasOwnProperty("service"))
                        object.service = message.service;
                    return object;
                };

                /**
                 * Converts this HealthCheckRequest to JSON.
                 * @function toJSON
                 * @memberof grpc.health.v1.HealthCheckRequest
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                HealthCheckRequest.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return HealthCheckRequest;
            })();

            v1.HealthCheckResponse = (function() {

                /**
                 * Properties of a HealthCheckResponse.
                 * @memberof grpc.health.v1
                 * @interface IHealthCheckResponse
                 * @property {grpc.health.v1.HealthCheckResponse.ServingStatus|null} [status] HealthCheckResponse status
                 */

                /**
                 * Constructs a new HealthCheckResponse.
                 * @memberof grpc.health.v1
                 * @classdesc Represents a HealthCheckResponse.
                 * @implements IHealthCheckResponse
                 * @constructor
                 * @param {grpc.health.v1.IHealthCheckResponse=} [properties] Properties to set
                 */
                function HealthCheckResponse(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * HealthCheckResponse status.
                 * @member {grpc.health.v1.HealthCheckResponse.ServingStatus} status
                 * @memberof grpc.health.v1.HealthCheckResponse
                 * @instance
                 */
                HealthCheckResponse.prototype.status = 0;

                /**
                 * Creates a new HealthCheckResponse instance using the specified properties.
                 * @function create
                 * @memberof grpc.health.v1.HealthCheckResponse
                 * @static
                 * @param {grpc.health.v1.IHealthCheckResponse=} [properties] Properties to set
                 * @returns {grpc.health.v1.HealthCheckResponse} HealthCheckResponse instance
                 */
                HealthCheckResponse.create = function create(properties) {
                    return new HealthCheckResponse(properties);
                };

                /**
                 * Encodes the specified HealthCheckResponse message. Does not implicitly {@link grpc.health.v1.HealthCheckResponse.verify|verify} messages.
                 * @function encode
                 * @memberof grpc.health.v1.HealthCheckResponse
                 * @static
                 * @param {grpc.health.v1.IHealthCheckResponse} message HealthCheckResponse message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                HealthCheckResponse.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.status != null && Object.hasOwnProperty.call(message, "status"))
                        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.status);
                    return writer;
                };

                /**
                 * Encodes the specified HealthCheckResponse message, length delimited. Does not implicitly {@link grpc.health.v1.HealthCheckResponse.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof grpc.health.v1.HealthCheckResponse
                 * @static
                 * @param {grpc.health.v1.IHealthCheckResponse} message HealthCheckResponse message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                HealthCheckResponse.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a HealthCheckResponse message from the specified reader or buffer.
                 * @function decode
                 * @memberof grpc.health.v1.HealthCheckResponse
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {grpc.health.v1.HealthCheckResponse} HealthCheckResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                HealthCheckResponse.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.grpc.health.v1.HealthCheckResponse();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.status = reader.int32();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a HealthCheckResponse message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof grpc.health.v1.HealthCheckResponse
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {grpc.health.v1.HealthCheckResponse} HealthCheckResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                HealthCheckResponse.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a HealthCheckResponse message.
                 * @function verify
                 * @memberof grpc.health.v1.HealthCheckResponse
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                HealthCheckResponse.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.status != null && message.hasOwnProperty("status"))
                        switch (message.status) {
                        default:
                            return "status: enum value expected";
                        case 0:
                        case 1:
                        case 2:
                            break;
                        }
                    return null;
                };

                /**
                 * Creates a HealthCheckResponse message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof grpc.health.v1.HealthCheckResponse
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {grpc.health.v1.HealthCheckResponse} HealthCheckResponse
                 */
                HealthCheckResponse.fromObject = function fromObject(object) {
                    if (object instanceof $root.grpc.health.v1.HealthCheckResponse)
                        return object;
                    var message = new $root.grpc.health.v1.HealthCheckResponse();
                    switch (object.status) {
                    case "UNKNOWN":
                    case 0:
                        message.status = 0;
                        break;
                    case "SERVING":
                    case 1:
                        message.status = 1;
                        break;
                    case "NOT_SERVING":
                    case 2:
                        message.status = 2;
                        break;
                    }
                    return message;
                };

                /**
                 * Creates a plain object from a HealthCheckResponse message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof grpc.health.v1.HealthCheckResponse
                 * @static
                 * @param {grpc.health.v1.HealthCheckResponse} message HealthCheckResponse
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                HealthCheckResponse.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults)
                        object.status = options.enums === String ? "UNKNOWN" : 0;
                    if (message.status != null && message.hasOwnProperty("status"))
                        object.status = options.enums === String ? $root.grpc.health.v1.HealthCheckResponse.ServingStatus[message.status] : message.status;
                    return object;
                };

                /**
                 * Converts this HealthCheckResponse to JSON.
                 * @function toJSON
                 * @memberof grpc.health.v1.HealthCheckResponse
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                HealthCheckResponse.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * ServingStatus enum.
                 * @name grpc.health.v1.HealthCheckResponse.ServingStatus
                 * @enum {number}
                 * @property {number} UNKNOWN=0 UNKNOWN value
                 * @property {number} SERVING=1 SERVING value
                 * @property {number} NOT_SERVING=2 NOT_SERVING value
                 */
                HealthCheckResponse.ServingStatus = (function() {
                    var valuesById = {}, values = Object.create(valuesById);
                    values[valuesById[0] = "UNKNOWN"] = 0;
                    values[valuesById[1] = "SERVING"] = 1;
                    values[valuesById[2] = "NOT_SERVING"] = 2;
                    return values;
                })();

                return HealthCheckResponse;
            })();

            v1.Health = (function() {

                /**
                 * Constructs a new Health service.
                 * @memberof grpc.health.v1
                 * @classdesc Represents a Health
                 * @extends $protobuf.rpc.Service
                 * @constructor
                 * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
                 * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
                 * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
                 */
                function Health(rpcImpl, requestDelimited, responseDelimited) {
                    $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
                }

                (Health.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = Health;

                /**
                 * Creates new Health service using the specified rpc implementation.
                 * @function create
                 * @memberof grpc.health.v1.Health
                 * @static
                 * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
                 * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
                 * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
                 * @returns {Health} RPC service. Useful where requests and/or responses are streamed.
                 */
                Health.create = function create(rpcImpl, requestDelimited, responseDelimited) {
                    return new this(rpcImpl, requestDelimited, responseDelimited);
                };

                /**
                 * Callback as used by {@link grpc.health.v1.Health#check}.
                 * @memberof grpc.health.v1.Health
                 * @typedef CheckCallback
                 * @type {function}
                 * @param {Error|null} error Error, if any
                 * @param {grpc.health.v1.HealthCheckResponse} [response] HealthCheckResponse
                 */

                /**
                 * Calls Check.
                 * @function check
                 * @memberof grpc.health.v1.Health
                 * @instance
                 * @param {grpc.health.v1.IHealthCheckRequest} request HealthCheckRequest message or plain object
                 * @param {grpc.health.v1.Health.CheckCallback} callback Node-style callback called with the error, if any, and HealthCheckResponse
                 * @returns {undefined}
                 * @variation 1
                 */
                Object.defineProperty(Health.prototype.check = function check(request, callback) {
                    return this.rpcCall(check, $root.grpc.health.v1.HealthCheckRequest, $root.grpc.health.v1.HealthCheckResponse, request, callback);
                }, "name", { value: "Check" });

                /**
                 * Calls Check.
                 * @function check
                 * @memberof grpc.health.v1.Health
                 * @instance
                 * @param {grpc.health.v1.IHealthCheckRequest} request HealthCheckRequest message or plain object
                 * @returns {Promise<grpc.health.v1.HealthCheckResponse>} Promise
                 * @variation 2
                 */

                return Health;
            })();

            return v1;
        })();

        return health;
    })();

    return grpc;
})();

module.exports = $root;
