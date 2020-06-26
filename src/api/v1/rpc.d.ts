import * as $protobuf from "protobufjs";
/** Namespace calculator. */
export namespace calculator {

    /** Represents a CalculatorService */
    class CalculatorService extends $protobuf.rpc.Service {

        /**
         * Constructs a new CalculatorService service.
         * @param rpcImpl RPC implementation
         * @param [requestDelimited=false] Whether requests are length-delimited
         * @param [responseDelimited=false] Whether responses are length-delimited
         */
        constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

        /**
         * Creates new CalculatorService service using the specified rpc implementation.
         * @param rpcImpl RPC implementation
         * @param [requestDelimited=false] Whether requests are length-delimited
         * @param [responseDelimited=false] Whether responses are length-delimited
         * @returns RPC service. Useful where requests and/or responses are streamed.
         */
        public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): CalculatorService;

        /**
         * Calls Fibonacci.
         * @param request FibonacciReq message or plain object
         * @param callback Node-style callback called with the error, if any, and FibonacciRes
         */
        public fibonacci(request: calculator.IFibonacciReq, callback: calculator.CalculatorService.FibonacciCallback): void;

        /**
         * Calls Fibonacci.
         * @param request FibonacciReq message or plain object
         * @returns Promise
         */
        public fibonacci(request: calculator.IFibonacciReq): Promise<calculator.FibonacciRes>;

        /**
         * Calls FibonacciFaster.
         * @param request FibonacciReq message or plain object
         * @param callback Node-style callback called with the error, if any, and FibonacciRes
         */
        public fibonacciFaster(request: calculator.IFibonacciReq, callback: calculator.CalculatorService.FibonacciFasterCallback): void;

        /**
         * Calls FibonacciFaster.
         * @param request FibonacciReq message or plain object
         * @returns Promise
         */
        public fibonacciFaster(request: calculator.IFibonacciReq): Promise<calculator.FibonacciRes>;

        /**
         * Calls FibonacciFastest.
         * @param request FibonacciReq message or plain object
         * @param callback Node-style callback called with the error, if any, and FibonacciRes
         */
        public fibonacciFastest(request: calculator.IFibonacciReq, callback: calculator.CalculatorService.FibonacciFastestCallback): void;

        /**
         * Calls FibonacciFastest.
         * @param request FibonacciReq message or plain object
         * @returns Promise
         */
        public fibonacciFastest(request: calculator.IFibonacciReq): Promise<calculator.FibonacciRes>;
    }

    namespace CalculatorService {

        /**
         * Callback as used by {@link calculator.CalculatorService#fibonacci}.
         * @param error Error, if any
         * @param [response] FibonacciRes
         */
        type FibonacciCallback = (error: (Error|null), response?: calculator.FibonacciRes) => void;

        /**
         * Callback as used by {@link calculator.CalculatorService#fibonacciFaster}.
         * @param error Error, if any
         * @param [response] FibonacciRes
         */
        type FibonacciFasterCallback = (error: (Error|null), response?: calculator.FibonacciRes) => void;

        /**
         * Callback as used by {@link calculator.CalculatorService#fibonacciFastest}.
         * @param error Error, if any
         * @param [response] FibonacciRes
         */
        type FibonacciFastestCallback = (error: (Error|null), response?: calculator.FibonacciRes) => void;
    }

    /** Properties of a FibonacciReq. */
    interface IFibonacciReq {

        /** FibonacciReq order */
        order?: (number|null);
    }

    /** Represents a FibonacciReq. */
    class FibonacciReq implements IFibonacciReq {

        /**
         * Constructs a new FibonacciReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: calculator.IFibonacciReq);

        /** FibonacciReq order. */
        public order: number;

        /**
         * Creates a new FibonacciReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns FibonacciReq instance
         */
        public static create(properties?: calculator.IFibonacciReq): calculator.FibonacciReq;

        /**
         * Encodes the specified FibonacciReq message. Does not implicitly {@link calculator.FibonacciReq.verify|verify} messages.
         * @param message FibonacciReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: calculator.IFibonacciReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified FibonacciReq message, length delimited. Does not implicitly {@link calculator.FibonacciReq.verify|verify} messages.
         * @param message FibonacciReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: calculator.IFibonacciReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a FibonacciReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns FibonacciReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): calculator.FibonacciReq;

        /**
         * Decodes a FibonacciReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns FibonacciReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): calculator.FibonacciReq;

        /**
         * Verifies a FibonacciReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a FibonacciReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns FibonacciReq
         */
        public static fromObject(object: { [k: string]: any }): calculator.FibonacciReq;

        /**
         * Creates a plain object from a FibonacciReq message. Also converts values to other types if specified.
         * @param message FibonacciReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: calculator.FibonacciReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this FibonacciReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a FibonacciRes. */
    interface IFibonacciRes {

        /** FibonacciRes number */
        number?: (number|null);
    }

    /** Represents a FibonacciRes. */
    class FibonacciRes implements IFibonacciRes {

        /**
         * Constructs a new FibonacciRes.
         * @param [properties] Properties to set
         */
        constructor(properties?: calculator.IFibonacciRes);

        /** FibonacciRes number. */
        public number: number;

        /**
         * Creates a new FibonacciRes instance using the specified properties.
         * @param [properties] Properties to set
         * @returns FibonacciRes instance
         */
        public static create(properties?: calculator.IFibonacciRes): calculator.FibonacciRes;

        /**
         * Encodes the specified FibonacciRes message. Does not implicitly {@link calculator.FibonacciRes.verify|verify} messages.
         * @param message FibonacciRes message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: calculator.IFibonacciRes, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified FibonacciRes message, length delimited. Does not implicitly {@link calculator.FibonacciRes.verify|verify} messages.
         * @param message FibonacciRes message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: calculator.IFibonacciRes, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a FibonacciRes message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns FibonacciRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): calculator.FibonacciRes;

        /**
         * Decodes a FibonacciRes message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns FibonacciRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): calculator.FibonacciRes;

        /**
         * Verifies a FibonacciRes message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a FibonacciRes message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns FibonacciRes
         */
        public static fromObject(object: { [k: string]: any }): calculator.FibonacciRes;

        /**
         * Creates a plain object from a FibonacciRes message. Also converts values to other types if specified.
         * @param message FibonacciRes
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: calculator.FibonacciRes, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this FibonacciRes to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}
