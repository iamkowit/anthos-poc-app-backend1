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

module.exports = $root;
