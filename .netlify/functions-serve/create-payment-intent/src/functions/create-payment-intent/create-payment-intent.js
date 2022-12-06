var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// node_modules/stripe/lib/Error.js
var require_Error = __commonJS({
  "node_modules/stripe/lib/Error.js"(exports, module2) {
    "use strict";
    var StripeError = class extends Error {
      constructor(raw = {}) {
        super(raw.message);
        this.type = this.constructor.name;
        this.raw = raw;
        this.rawType = raw.type;
        this.code = raw.code;
        this.doc_url = raw.doc_url;
        this.param = raw.param;
        this.detail = raw.detail;
        this.headers = raw.headers;
        this.requestId = raw.requestId;
        this.statusCode = raw.statusCode;
        this.message = raw.message;
        this.charge = raw.charge;
        this.decline_code = raw.decline_code;
        this.payment_intent = raw.payment_intent;
        this.payment_method = raw.payment_method;
        this.payment_method_type = raw.payment_method_type;
        this.setup_intent = raw.setup_intent;
        this.source = raw.source;
      }
      static generate(rawStripeError) {
        switch (rawStripeError.type) {
          case "card_error":
            return new StripeCardError(rawStripeError);
          case "invalid_request_error":
            return new StripeInvalidRequestError(rawStripeError);
          case "api_error":
            return new StripeAPIError(rawStripeError);
          case "authentication_error":
            return new StripeAuthenticationError(rawStripeError);
          case "rate_limit_error":
            return new StripeRateLimitError(rawStripeError);
          case "idempotency_error":
            return new StripeIdempotencyError(rawStripeError);
          case "invalid_grant":
            return new StripeInvalidGrantError(rawStripeError);
          default:
            return new StripeUnknownError(rawStripeError);
        }
      }
    };
    var StripeCardError = class extends StripeError {
    };
    var StripeInvalidRequestError = class extends StripeError {
    };
    var StripeAPIError = class extends StripeError {
    };
    var StripeAuthenticationError = class extends StripeError {
    };
    var StripePermissionError = class extends StripeError {
    };
    var StripeRateLimitError = class extends StripeError {
    };
    var StripeConnectionError = class extends StripeError {
    };
    var StripeSignatureVerificationError = class extends StripeError {
      constructor(header, payload, raw = {}) {
        super(raw);
        this.header = header;
        this.payload = payload;
      }
    };
    var StripeIdempotencyError = class extends StripeError {
    };
    var StripeInvalidGrantError = class extends StripeError {
    };
    var StripeUnknownError = class extends StripeError {
    };
    module2.exports = {
      generate: StripeError.generate,
      StripeError,
      StripeCardError,
      StripeInvalidRequestError,
      StripeAPIError,
      StripeAuthenticationError,
      StripePermissionError,
      StripeRateLimitError,
      StripeConnectionError,
      StripeSignatureVerificationError,
      StripeIdempotencyError,
      StripeInvalidGrantError,
      StripeUnknownError
    };
  }
});

// node_modules/stripe/lib/ResourceNamespace.js
var require_ResourceNamespace = __commonJS({
  "node_modules/stripe/lib/ResourceNamespace.js"(exports, module2) {
    "use strict";
    function ResourceNamespace(stripe, resources) {
      for (const name in resources) {
        const camelCaseName = name[0].toLowerCase() + name.substring(1);
        const resource = new resources[name](stripe);
        this[camelCaseName] = resource;
      }
    }
    module2.exports = function(namespace, resources) {
      return function(stripe) {
        return new ResourceNamespace(stripe, resources);
      };
    };
    module2.exports.ResourceNamespace = ResourceNamespace;
  }
});

// node_modules/has-symbols/shams.js
var require_shams = __commonJS({
  "node_modules/has-symbols/shams.js"(exports, module2) {
    "use strict";
    module2.exports = function hasSymbols() {
      if (typeof Symbol !== "function" || typeof Object.getOwnPropertySymbols !== "function") {
        return false;
      }
      if (typeof Symbol.iterator === "symbol") {
        return true;
      }
      var obj = {};
      var sym = Symbol("test");
      var symObj = Object(sym);
      if (typeof sym === "string") {
        return false;
      }
      if (Object.prototype.toString.call(sym) !== "[object Symbol]") {
        return false;
      }
      if (Object.prototype.toString.call(symObj) !== "[object Symbol]") {
        return false;
      }
      var symVal = 42;
      obj[sym] = symVal;
      for (sym in obj) {
        return false;
      }
      if (typeof Object.keys === "function" && Object.keys(obj).length !== 0) {
        return false;
      }
      if (typeof Object.getOwnPropertyNames === "function" && Object.getOwnPropertyNames(obj).length !== 0) {
        return false;
      }
      var syms = Object.getOwnPropertySymbols(obj);
      if (syms.length !== 1 || syms[0] !== sym) {
        return false;
      }
      if (!Object.prototype.propertyIsEnumerable.call(obj, sym)) {
        return false;
      }
      if (typeof Object.getOwnPropertyDescriptor === "function") {
        var descriptor = Object.getOwnPropertyDescriptor(obj, sym);
        if (descriptor.value !== symVal || descriptor.enumerable !== true) {
          return false;
        }
      }
      return true;
    };
  }
});

// node_modules/has-symbols/index.js
var require_has_symbols = __commonJS({
  "node_modules/has-symbols/index.js"(exports, module2) {
    "use strict";
    var origSymbol = typeof Symbol !== "undefined" && Symbol;
    var hasSymbolSham = require_shams();
    module2.exports = function hasNativeSymbols() {
      if (typeof origSymbol !== "function") {
        return false;
      }
      if (typeof Symbol !== "function") {
        return false;
      }
      if (typeof origSymbol("foo") !== "symbol") {
        return false;
      }
      if (typeof Symbol("bar") !== "symbol") {
        return false;
      }
      return hasSymbolSham();
    };
  }
});

// node_modules/function-bind/implementation.js
var require_implementation = __commonJS({
  "node_modules/function-bind/implementation.js"(exports, module2) {
    "use strict";
    var ERROR_MESSAGE = "Function.prototype.bind called on incompatible ";
    var slice = Array.prototype.slice;
    var toStr = Object.prototype.toString;
    var funcType = "[object Function]";
    module2.exports = function bind(that) {
      var target = this;
      if (typeof target !== "function" || toStr.call(target) !== funcType) {
        throw new TypeError(ERROR_MESSAGE + target);
      }
      var args = slice.call(arguments, 1);
      var bound;
      var binder = function() {
        if (this instanceof bound) {
          var result = target.apply(this, args.concat(slice.call(arguments)));
          if (Object(result) === result) {
            return result;
          }
          return this;
        } else {
          return target.apply(that, args.concat(slice.call(arguments)));
        }
      };
      var boundLength = Math.max(0, target.length - args.length);
      var boundArgs = [];
      for (var i = 0; i < boundLength; i++) {
        boundArgs.push("$" + i);
      }
      bound = Function("binder", "return function (" + boundArgs.join(",") + "){ return binder.apply(this,arguments); }")(binder);
      if (target.prototype) {
        var Empty = function Empty2() {
        };
        Empty.prototype = target.prototype;
        bound.prototype = new Empty();
        Empty.prototype = null;
      }
      return bound;
    };
  }
});

// node_modules/function-bind/index.js
var require_function_bind = __commonJS({
  "node_modules/function-bind/index.js"(exports, module2) {
    "use strict";
    var implementation = require_implementation();
    module2.exports = Function.prototype.bind || implementation;
  }
});

// node_modules/has/src/index.js
var require_src = __commonJS({
  "node_modules/has/src/index.js"(exports, module2) {
    "use strict";
    var bind = require_function_bind();
    module2.exports = bind.call(Function.call, Object.prototype.hasOwnProperty);
  }
});

// node_modules/get-intrinsic/index.js
var require_get_intrinsic = __commonJS({
  "node_modules/get-intrinsic/index.js"(exports, module2) {
    "use strict";
    var undefined2;
    var $SyntaxError = SyntaxError;
    var $Function = Function;
    var $TypeError = TypeError;
    var getEvalledConstructor = function(expressionSyntax) {
      try {
        return $Function('"use strict"; return (' + expressionSyntax + ").constructor;")();
      } catch (e) {
      }
    };
    var $gOPD = Object.getOwnPropertyDescriptor;
    if ($gOPD) {
      try {
        $gOPD({}, "");
      } catch (e) {
        $gOPD = null;
      }
    }
    var throwTypeError = function() {
      throw new $TypeError();
    };
    var ThrowTypeError = $gOPD ? function() {
      try {
        arguments.callee;
        return throwTypeError;
      } catch (calleeThrows) {
        try {
          return $gOPD(arguments, "callee").get;
        } catch (gOPDthrows) {
          return throwTypeError;
        }
      }
    }() : throwTypeError;
    var hasSymbols = require_has_symbols()();
    var getProto = Object.getPrototypeOf || function(x) {
      return x.__proto__;
    };
    var needsEval = {};
    var TypedArray = typeof Uint8Array === "undefined" ? undefined2 : getProto(Uint8Array);
    var INTRINSICS = {
      "%AggregateError%": typeof AggregateError === "undefined" ? undefined2 : AggregateError,
      "%Array%": Array,
      "%ArrayBuffer%": typeof ArrayBuffer === "undefined" ? undefined2 : ArrayBuffer,
      "%ArrayIteratorPrototype%": hasSymbols ? getProto([][Symbol.iterator]()) : undefined2,
      "%AsyncFromSyncIteratorPrototype%": undefined2,
      "%AsyncFunction%": needsEval,
      "%AsyncGenerator%": needsEval,
      "%AsyncGeneratorFunction%": needsEval,
      "%AsyncIteratorPrototype%": needsEval,
      "%Atomics%": typeof Atomics === "undefined" ? undefined2 : Atomics,
      "%BigInt%": typeof BigInt === "undefined" ? undefined2 : BigInt,
      "%Boolean%": Boolean,
      "%DataView%": typeof DataView === "undefined" ? undefined2 : DataView,
      "%Date%": Date,
      "%decodeURI%": decodeURI,
      "%decodeURIComponent%": decodeURIComponent,
      "%encodeURI%": encodeURI,
      "%encodeURIComponent%": encodeURIComponent,
      "%Error%": Error,
      "%eval%": eval,
      "%EvalError%": EvalError,
      "%Float32Array%": typeof Float32Array === "undefined" ? undefined2 : Float32Array,
      "%Float64Array%": typeof Float64Array === "undefined" ? undefined2 : Float64Array,
      "%FinalizationRegistry%": typeof FinalizationRegistry === "undefined" ? undefined2 : FinalizationRegistry,
      "%Function%": $Function,
      "%GeneratorFunction%": needsEval,
      "%Int8Array%": typeof Int8Array === "undefined" ? undefined2 : Int8Array,
      "%Int16Array%": typeof Int16Array === "undefined" ? undefined2 : Int16Array,
      "%Int32Array%": typeof Int32Array === "undefined" ? undefined2 : Int32Array,
      "%isFinite%": isFinite,
      "%isNaN%": isNaN,
      "%IteratorPrototype%": hasSymbols ? getProto(getProto([][Symbol.iterator]())) : undefined2,
      "%JSON%": typeof JSON === "object" ? JSON : undefined2,
      "%Map%": typeof Map === "undefined" ? undefined2 : Map,
      "%MapIteratorPrototype%": typeof Map === "undefined" || !hasSymbols ? undefined2 : getProto((/* @__PURE__ */ new Map())[Symbol.iterator]()),
      "%Math%": Math,
      "%Number%": Number,
      "%Object%": Object,
      "%parseFloat%": parseFloat,
      "%parseInt%": parseInt,
      "%Promise%": typeof Promise === "undefined" ? undefined2 : Promise,
      "%Proxy%": typeof Proxy === "undefined" ? undefined2 : Proxy,
      "%RangeError%": RangeError,
      "%ReferenceError%": ReferenceError,
      "%Reflect%": typeof Reflect === "undefined" ? undefined2 : Reflect,
      "%RegExp%": RegExp,
      "%Set%": typeof Set === "undefined" ? undefined2 : Set,
      "%SetIteratorPrototype%": typeof Set === "undefined" || !hasSymbols ? undefined2 : getProto((/* @__PURE__ */ new Set())[Symbol.iterator]()),
      "%SharedArrayBuffer%": typeof SharedArrayBuffer === "undefined" ? undefined2 : SharedArrayBuffer,
      "%String%": String,
      "%StringIteratorPrototype%": hasSymbols ? getProto(""[Symbol.iterator]()) : undefined2,
      "%Symbol%": hasSymbols ? Symbol : undefined2,
      "%SyntaxError%": $SyntaxError,
      "%ThrowTypeError%": ThrowTypeError,
      "%TypedArray%": TypedArray,
      "%TypeError%": $TypeError,
      "%Uint8Array%": typeof Uint8Array === "undefined" ? undefined2 : Uint8Array,
      "%Uint8ClampedArray%": typeof Uint8ClampedArray === "undefined" ? undefined2 : Uint8ClampedArray,
      "%Uint16Array%": typeof Uint16Array === "undefined" ? undefined2 : Uint16Array,
      "%Uint32Array%": typeof Uint32Array === "undefined" ? undefined2 : Uint32Array,
      "%URIError%": URIError,
      "%WeakMap%": typeof WeakMap === "undefined" ? undefined2 : WeakMap,
      "%WeakRef%": typeof WeakRef === "undefined" ? undefined2 : WeakRef,
      "%WeakSet%": typeof WeakSet === "undefined" ? undefined2 : WeakSet
    };
    var doEval = function doEval2(name) {
      var value;
      if (name === "%AsyncFunction%") {
        value = getEvalledConstructor("async function () {}");
      } else if (name === "%GeneratorFunction%") {
        value = getEvalledConstructor("function* () {}");
      } else if (name === "%AsyncGeneratorFunction%") {
        value = getEvalledConstructor("async function* () {}");
      } else if (name === "%AsyncGenerator%") {
        var fn = doEval2("%AsyncGeneratorFunction%");
        if (fn) {
          value = fn.prototype;
        }
      } else if (name === "%AsyncIteratorPrototype%") {
        var gen = doEval2("%AsyncGenerator%");
        if (gen) {
          value = getProto(gen.prototype);
        }
      }
      INTRINSICS[name] = value;
      return value;
    };
    var LEGACY_ALIASES = {
      "%ArrayBufferPrototype%": ["ArrayBuffer", "prototype"],
      "%ArrayPrototype%": ["Array", "prototype"],
      "%ArrayProto_entries%": ["Array", "prototype", "entries"],
      "%ArrayProto_forEach%": ["Array", "prototype", "forEach"],
      "%ArrayProto_keys%": ["Array", "prototype", "keys"],
      "%ArrayProto_values%": ["Array", "prototype", "values"],
      "%AsyncFunctionPrototype%": ["AsyncFunction", "prototype"],
      "%AsyncGenerator%": ["AsyncGeneratorFunction", "prototype"],
      "%AsyncGeneratorPrototype%": ["AsyncGeneratorFunction", "prototype", "prototype"],
      "%BooleanPrototype%": ["Boolean", "prototype"],
      "%DataViewPrototype%": ["DataView", "prototype"],
      "%DatePrototype%": ["Date", "prototype"],
      "%ErrorPrototype%": ["Error", "prototype"],
      "%EvalErrorPrototype%": ["EvalError", "prototype"],
      "%Float32ArrayPrototype%": ["Float32Array", "prototype"],
      "%Float64ArrayPrototype%": ["Float64Array", "prototype"],
      "%FunctionPrototype%": ["Function", "prototype"],
      "%Generator%": ["GeneratorFunction", "prototype"],
      "%GeneratorPrototype%": ["GeneratorFunction", "prototype", "prototype"],
      "%Int8ArrayPrototype%": ["Int8Array", "prototype"],
      "%Int16ArrayPrototype%": ["Int16Array", "prototype"],
      "%Int32ArrayPrototype%": ["Int32Array", "prototype"],
      "%JSONParse%": ["JSON", "parse"],
      "%JSONStringify%": ["JSON", "stringify"],
      "%MapPrototype%": ["Map", "prototype"],
      "%NumberPrototype%": ["Number", "prototype"],
      "%ObjectPrototype%": ["Object", "prototype"],
      "%ObjProto_toString%": ["Object", "prototype", "toString"],
      "%ObjProto_valueOf%": ["Object", "prototype", "valueOf"],
      "%PromisePrototype%": ["Promise", "prototype"],
      "%PromiseProto_then%": ["Promise", "prototype", "then"],
      "%Promise_all%": ["Promise", "all"],
      "%Promise_reject%": ["Promise", "reject"],
      "%Promise_resolve%": ["Promise", "resolve"],
      "%RangeErrorPrototype%": ["RangeError", "prototype"],
      "%ReferenceErrorPrototype%": ["ReferenceError", "prototype"],
      "%RegExpPrototype%": ["RegExp", "prototype"],
      "%SetPrototype%": ["Set", "prototype"],
      "%SharedArrayBufferPrototype%": ["SharedArrayBuffer", "prototype"],
      "%StringPrototype%": ["String", "prototype"],
      "%SymbolPrototype%": ["Symbol", "prototype"],
      "%SyntaxErrorPrototype%": ["SyntaxError", "prototype"],
      "%TypedArrayPrototype%": ["TypedArray", "prototype"],
      "%TypeErrorPrototype%": ["TypeError", "prototype"],
      "%Uint8ArrayPrototype%": ["Uint8Array", "prototype"],
      "%Uint8ClampedArrayPrototype%": ["Uint8ClampedArray", "prototype"],
      "%Uint16ArrayPrototype%": ["Uint16Array", "prototype"],
      "%Uint32ArrayPrototype%": ["Uint32Array", "prototype"],
      "%URIErrorPrototype%": ["URIError", "prototype"],
      "%WeakMapPrototype%": ["WeakMap", "prototype"],
      "%WeakSetPrototype%": ["WeakSet", "prototype"]
    };
    var bind = require_function_bind();
    var hasOwn = require_src();
    var $concat = bind.call(Function.call, Array.prototype.concat);
    var $spliceApply = bind.call(Function.apply, Array.prototype.splice);
    var $replace = bind.call(Function.call, String.prototype.replace);
    var $strSlice = bind.call(Function.call, String.prototype.slice);
    var $exec = bind.call(Function.call, RegExp.prototype.exec);
    var rePropName = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g;
    var reEscapeChar = /\\(\\)?/g;
    var stringToPath = function stringToPath2(string) {
      var first = $strSlice(string, 0, 1);
      var last = $strSlice(string, -1);
      if (first === "%" && last !== "%") {
        throw new $SyntaxError("invalid intrinsic syntax, expected closing `%`");
      } else if (last === "%" && first !== "%") {
        throw new $SyntaxError("invalid intrinsic syntax, expected opening `%`");
      }
      var result = [];
      $replace(string, rePropName, function(match, number, quote, subString) {
        result[result.length] = quote ? $replace(subString, reEscapeChar, "$1") : number || match;
      });
      return result;
    };
    var getBaseIntrinsic = function getBaseIntrinsic2(name, allowMissing) {
      var intrinsicName = name;
      var alias;
      if (hasOwn(LEGACY_ALIASES, intrinsicName)) {
        alias = LEGACY_ALIASES[intrinsicName];
        intrinsicName = "%" + alias[0] + "%";
      }
      if (hasOwn(INTRINSICS, intrinsicName)) {
        var value = INTRINSICS[intrinsicName];
        if (value === needsEval) {
          value = doEval(intrinsicName);
        }
        if (typeof value === "undefined" && !allowMissing) {
          throw new $TypeError("intrinsic " + name + " exists, but is not available. Please file an issue!");
        }
        return {
          alias,
          name: intrinsicName,
          value
        };
      }
      throw new $SyntaxError("intrinsic " + name + " does not exist!");
    };
    module2.exports = function GetIntrinsic(name, allowMissing) {
      if (typeof name !== "string" || name.length === 0) {
        throw new $TypeError("intrinsic name must be a non-empty string");
      }
      if (arguments.length > 1 && typeof allowMissing !== "boolean") {
        throw new $TypeError('"allowMissing" argument must be a boolean');
      }
      if ($exec(/^%?[^%]*%?$/, name) === null) {
        throw new $SyntaxError("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
      }
      var parts = stringToPath(name);
      var intrinsicBaseName = parts.length > 0 ? parts[0] : "";
      var intrinsic = getBaseIntrinsic("%" + intrinsicBaseName + "%", allowMissing);
      var intrinsicRealName = intrinsic.name;
      var value = intrinsic.value;
      var skipFurtherCaching = false;
      var alias = intrinsic.alias;
      if (alias) {
        intrinsicBaseName = alias[0];
        $spliceApply(parts, $concat([0, 1], alias));
      }
      for (var i = 1, isOwn = true; i < parts.length; i += 1) {
        var part = parts[i];
        var first = $strSlice(part, 0, 1);
        var last = $strSlice(part, -1);
        if ((first === '"' || first === "'" || first === "`" || (last === '"' || last === "'" || last === "`")) && first !== last) {
          throw new $SyntaxError("property names with quotes must have matching quotes");
        }
        if (part === "constructor" || !isOwn) {
          skipFurtherCaching = true;
        }
        intrinsicBaseName += "." + part;
        intrinsicRealName = "%" + intrinsicBaseName + "%";
        if (hasOwn(INTRINSICS, intrinsicRealName)) {
          value = INTRINSICS[intrinsicRealName];
        } else if (value != null) {
          if (!(part in value)) {
            if (!allowMissing) {
              throw new $TypeError("base intrinsic for " + name + " exists, but the property is not available.");
            }
            return void 0;
          }
          if ($gOPD && i + 1 >= parts.length) {
            var desc = $gOPD(value, part);
            isOwn = !!desc;
            if (isOwn && "get" in desc && !("originalValue" in desc.get)) {
              value = desc.get;
            } else {
              value = value[part];
            }
          } else {
            isOwn = hasOwn(value, part);
            value = value[part];
          }
          if (isOwn && !skipFurtherCaching) {
            INTRINSICS[intrinsicRealName] = value;
          }
        }
      }
      return value;
    };
  }
});

// node_modules/call-bind/index.js
var require_call_bind = __commonJS({
  "node_modules/call-bind/index.js"(exports, module2) {
    "use strict";
    var bind = require_function_bind();
    var GetIntrinsic = require_get_intrinsic();
    var $apply = GetIntrinsic("%Function.prototype.apply%");
    var $call = GetIntrinsic("%Function.prototype.call%");
    var $reflectApply = GetIntrinsic("%Reflect.apply%", true) || bind.call($call, $apply);
    var $gOPD = GetIntrinsic("%Object.getOwnPropertyDescriptor%", true);
    var $defineProperty = GetIntrinsic("%Object.defineProperty%", true);
    var $max = GetIntrinsic("%Math.max%");
    if ($defineProperty) {
      try {
        $defineProperty({}, "a", { value: 1 });
      } catch (e) {
        $defineProperty = null;
      }
    }
    module2.exports = function callBind(originalFunction) {
      var func = $reflectApply(bind, $call, arguments);
      if ($gOPD && $defineProperty) {
        var desc = $gOPD(func, "length");
        if (desc.configurable) {
          $defineProperty(func, "length", { value: 1 + $max(0, originalFunction.length - (arguments.length - 1)) });
        }
      }
      return func;
    };
    var applyBind = function applyBind2() {
      return $reflectApply(bind, $apply, arguments);
    };
    if ($defineProperty) {
      $defineProperty(module2.exports, "apply", { value: applyBind });
    } else {
      module2.exports.apply = applyBind;
    }
  }
});

// node_modules/call-bind/callBound.js
var require_callBound = __commonJS({
  "node_modules/call-bind/callBound.js"(exports, module2) {
    "use strict";
    var GetIntrinsic = require_get_intrinsic();
    var callBind = require_call_bind();
    var $indexOf = callBind(GetIntrinsic("String.prototype.indexOf"));
    module2.exports = function callBoundIntrinsic(name, allowMissing) {
      var intrinsic = GetIntrinsic(name, !!allowMissing);
      if (typeof intrinsic === "function" && $indexOf(name, ".prototype.") > -1) {
        return callBind(intrinsic);
      }
      return intrinsic;
    };
  }
});

// node_modules/object-inspect/util.inspect.js
var require_util_inspect = __commonJS({
  "node_modules/object-inspect/util.inspect.js"(exports, module2) {
    module2.exports = require("util").inspect;
  }
});

// node_modules/object-inspect/index.js
var require_object_inspect = __commonJS({
  "node_modules/object-inspect/index.js"(exports, module2) {
    var hasMap = typeof Map === "function" && Map.prototype;
    var mapSizeDescriptor = Object.getOwnPropertyDescriptor && hasMap ? Object.getOwnPropertyDescriptor(Map.prototype, "size") : null;
    var mapSize = hasMap && mapSizeDescriptor && typeof mapSizeDescriptor.get === "function" ? mapSizeDescriptor.get : null;
    var mapForEach = hasMap && Map.prototype.forEach;
    var hasSet = typeof Set === "function" && Set.prototype;
    var setSizeDescriptor = Object.getOwnPropertyDescriptor && hasSet ? Object.getOwnPropertyDescriptor(Set.prototype, "size") : null;
    var setSize = hasSet && setSizeDescriptor && typeof setSizeDescriptor.get === "function" ? setSizeDescriptor.get : null;
    var setForEach = hasSet && Set.prototype.forEach;
    var hasWeakMap = typeof WeakMap === "function" && WeakMap.prototype;
    var weakMapHas = hasWeakMap ? WeakMap.prototype.has : null;
    var hasWeakSet = typeof WeakSet === "function" && WeakSet.prototype;
    var weakSetHas = hasWeakSet ? WeakSet.prototype.has : null;
    var hasWeakRef = typeof WeakRef === "function" && WeakRef.prototype;
    var weakRefDeref = hasWeakRef ? WeakRef.prototype.deref : null;
    var booleanValueOf = Boolean.prototype.valueOf;
    var objectToString = Object.prototype.toString;
    var functionToString = Function.prototype.toString;
    var $match = String.prototype.match;
    var $slice = String.prototype.slice;
    var $replace = String.prototype.replace;
    var $toUpperCase = String.prototype.toUpperCase;
    var $toLowerCase = String.prototype.toLowerCase;
    var $test = RegExp.prototype.test;
    var $concat = Array.prototype.concat;
    var $join = Array.prototype.join;
    var $arrSlice = Array.prototype.slice;
    var $floor = Math.floor;
    var bigIntValueOf = typeof BigInt === "function" ? BigInt.prototype.valueOf : null;
    var gOPS = Object.getOwnPropertySymbols;
    var symToString = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? Symbol.prototype.toString : null;
    var hasShammedSymbols = typeof Symbol === "function" && typeof Symbol.iterator === "object";
    var toStringTag = typeof Symbol === "function" && Symbol.toStringTag && (typeof Symbol.toStringTag === hasShammedSymbols ? "object" : "symbol") ? Symbol.toStringTag : null;
    var isEnumerable = Object.prototype.propertyIsEnumerable;
    var gPO = (typeof Reflect === "function" ? Reflect.getPrototypeOf : Object.getPrototypeOf) || ([].__proto__ === Array.prototype ? function(O) {
      return O.__proto__;
    } : null);
    function addNumericSeparator(num, str) {
      if (num === Infinity || num === -Infinity || num !== num || num && num > -1e3 && num < 1e3 || $test.call(/e/, str)) {
        return str;
      }
      var sepRegex = /[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;
      if (typeof num === "number") {
        var int = num < 0 ? -$floor(-num) : $floor(num);
        if (int !== num) {
          var intStr = String(int);
          var dec = $slice.call(str, intStr.length + 1);
          return $replace.call(intStr, sepRegex, "$&_") + "." + $replace.call($replace.call(dec, /([0-9]{3})/g, "$&_"), /_$/, "");
        }
      }
      return $replace.call(str, sepRegex, "$&_");
    }
    var utilInspect = require_util_inspect();
    var inspectCustom = utilInspect.custom;
    var inspectSymbol = isSymbol(inspectCustom) ? inspectCustom : null;
    module2.exports = function inspect_(obj, options, depth, seen) {
      var opts = options || {};
      if (has(opts, "quoteStyle") && (opts.quoteStyle !== "single" && opts.quoteStyle !== "double")) {
        throw new TypeError('option "quoteStyle" must be "single" or "double"');
      }
      if (has(opts, "maxStringLength") && (typeof opts.maxStringLength === "number" ? opts.maxStringLength < 0 && opts.maxStringLength !== Infinity : opts.maxStringLength !== null)) {
        throw new TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`');
      }
      var customInspect = has(opts, "customInspect") ? opts.customInspect : true;
      if (typeof customInspect !== "boolean" && customInspect !== "symbol") {
        throw new TypeError("option \"customInspect\", if provided, must be `true`, `false`, or `'symbol'`");
      }
      if (has(opts, "indent") && opts.indent !== null && opts.indent !== "	" && !(parseInt(opts.indent, 10) === opts.indent && opts.indent > 0)) {
        throw new TypeError('option "indent" must be "\\t", an integer > 0, or `null`');
      }
      if (has(opts, "numericSeparator") && typeof opts.numericSeparator !== "boolean") {
        throw new TypeError('option "numericSeparator", if provided, must be `true` or `false`');
      }
      var numericSeparator = opts.numericSeparator;
      if (typeof obj === "undefined") {
        return "undefined";
      }
      if (obj === null) {
        return "null";
      }
      if (typeof obj === "boolean") {
        return obj ? "true" : "false";
      }
      if (typeof obj === "string") {
        return inspectString(obj, opts);
      }
      if (typeof obj === "number") {
        if (obj === 0) {
          return Infinity / obj > 0 ? "0" : "-0";
        }
        var str = String(obj);
        return numericSeparator ? addNumericSeparator(obj, str) : str;
      }
      if (typeof obj === "bigint") {
        var bigIntStr = String(obj) + "n";
        return numericSeparator ? addNumericSeparator(obj, bigIntStr) : bigIntStr;
      }
      var maxDepth = typeof opts.depth === "undefined" ? 5 : opts.depth;
      if (typeof depth === "undefined") {
        depth = 0;
      }
      if (depth >= maxDepth && maxDepth > 0 && typeof obj === "object") {
        return isArray(obj) ? "[Array]" : "[Object]";
      }
      var indent = getIndent(opts, depth);
      if (typeof seen === "undefined") {
        seen = [];
      } else if (indexOf(seen, obj) >= 0) {
        return "[Circular]";
      }
      function inspect(value, from, noIndent) {
        if (from) {
          seen = $arrSlice.call(seen);
          seen.push(from);
        }
        if (noIndent) {
          var newOpts = {
            depth: opts.depth
          };
          if (has(opts, "quoteStyle")) {
            newOpts.quoteStyle = opts.quoteStyle;
          }
          return inspect_(value, newOpts, depth + 1, seen);
        }
        return inspect_(value, opts, depth + 1, seen);
      }
      if (typeof obj === "function" && !isRegExp(obj)) {
        var name = nameOf(obj);
        var keys = arrObjKeys(obj, inspect);
        return "[Function" + (name ? ": " + name : " (anonymous)") + "]" + (keys.length > 0 ? " { " + $join.call(keys, ", ") + " }" : "");
      }
      if (isSymbol(obj)) {
        var symString = hasShammedSymbols ? $replace.call(String(obj), /^(Symbol\(.*\))_[^)]*$/, "$1") : symToString.call(obj);
        return typeof obj === "object" && !hasShammedSymbols ? markBoxed(symString) : symString;
      }
      if (isElement(obj)) {
        var s = "<" + $toLowerCase.call(String(obj.nodeName));
        var attrs = obj.attributes || [];
        for (var i = 0; i < attrs.length; i++) {
          s += " " + attrs[i].name + "=" + wrapQuotes(quote(attrs[i].value), "double", opts);
        }
        s += ">";
        if (obj.childNodes && obj.childNodes.length) {
          s += "...";
        }
        s += "</" + $toLowerCase.call(String(obj.nodeName)) + ">";
        return s;
      }
      if (isArray(obj)) {
        if (obj.length === 0) {
          return "[]";
        }
        var xs = arrObjKeys(obj, inspect);
        if (indent && !singleLineValues(xs)) {
          return "[" + indentedJoin(xs, indent) + "]";
        }
        return "[ " + $join.call(xs, ", ") + " ]";
      }
      if (isError(obj)) {
        var parts = arrObjKeys(obj, inspect);
        if (!("cause" in Error.prototype) && "cause" in obj && !isEnumerable.call(obj, "cause")) {
          return "{ [" + String(obj) + "] " + $join.call($concat.call("[cause]: " + inspect(obj.cause), parts), ", ") + " }";
        }
        if (parts.length === 0) {
          return "[" + String(obj) + "]";
        }
        return "{ [" + String(obj) + "] " + $join.call(parts, ", ") + " }";
      }
      if (typeof obj === "object" && customInspect) {
        if (inspectSymbol && typeof obj[inspectSymbol] === "function" && utilInspect) {
          return utilInspect(obj, { depth: maxDepth - depth });
        } else if (customInspect !== "symbol" && typeof obj.inspect === "function") {
          return obj.inspect();
        }
      }
      if (isMap(obj)) {
        var mapParts = [];
        mapForEach.call(obj, function(value, key) {
          mapParts.push(inspect(key, obj, true) + " => " + inspect(value, obj));
        });
        return collectionOf("Map", mapSize.call(obj), mapParts, indent);
      }
      if (isSet(obj)) {
        var setParts = [];
        setForEach.call(obj, function(value) {
          setParts.push(inspect(value, obj));
        });
        return collectionOf("Set", setSize.call(obj), setParts, indent);
      }
      if (isWeakMap(obj)) {
        return weakCollectionOf("WeakMap");
      }
      if (isWeakSet(obj)) {
        return weakCollectionOf("WeakSet");
      }
      if (isWeakRef(obj)) {
        return weakCollectionOf("WeakRef");
      }
      if (isNumber(obj)) {
        return markBoxed(inspect(Number(obj)));
      }
      if (isBigInt(obj)) {
        return markBoxed(inspect(bigIntValueOf.call(obj)));
      }
      if (isBoolean(obj)) {
        return markBoxed(booleanValueOf.call(obj));
      }
      if (isString(obj)) {
        return markBoxed(inspect(String(obj)));
      }
      if (!isDate(obj) && !isRegExp(obj)) {
        var ys = arrObjKeys(obj, inspect);
        var isPlainObject = gPO ? gPO(obj) === Object.prototype : obj instanceof Object || obj.constructor === Object;
        var protoTag = obj instanceof Object ? "" : "null prototype";
        var stringTag = !isPlainObject && toStringTag && Object(obj) === obj && toStringTag in obj ? $slice.call(toStr(obj), 8, -1) : protoTag ? "Object" : "";
        var constructorTag = isPlainObject || typeof obj.constructor !== "function" ? "" : obj.constructor.name ? obj.constructor.name + " " : "";
        var tag = constructorTag + (stringTag || protoTag ? "[" + $join.call($concat.call([], stringTag || [], protoTag || []), ": ") + "] " : "");
        if (ys.length === 0) {
          return tag + "{}";
        }
        if (indent) {
          return tag + "{" + indentedJoin(ys, indent) + "}";
        }
        return tag + "{ " + $join.call(ys, ", ") + " }";
      }
      return String(obj);
    };
    function wrapQuotes(s, defaultStyle, opts) {
      var quoteChar = (opts.quoteStyle || defaultStyle) === "double" ? '"' : "'";
      return quoteChar + s + quoteChar;
    }
    function quote(s) {
      return $replace.call(String(s), /"/g, "&quot;");
    }
    function isArray(obj) {
      return toStr(obj) === "[object Array]" && (!toStringTag || !(typeof obj === "object" && toStringTag in obj));
    }
    function isDate(obj) {
      return toStr(obj) === "[object Date]" && (!toStringTag || !(typeof obj === "object" && toStringTag in obj));
    }
    function isRegExp(obj) {
      return toStr(obj) === "[object RegExp]" && (!toStringTag || !(typeof obj === "object" && toStringTag in obj));
    }
    function isError(obj) {
      return toStr(obj) === "[object Error]" && (!toStringTag || !(typeof obj === "object" && toStringTag in obj));
    }
    function isString(obj) {
      return toStr(obj) === "[object String]" && (!toStringTag || !(typeof obj === "object" && toStringTag in obj));
    }
    function isNumber(obj) {
      return toStr(obj) === "[object Number]" && (!toStringTag || !(typeof obj === "object" && toStringTag in obj));
    }
    function isBoolean(obj) {
      return toStr(obj) === "[object Boolean]" && (!toStringTag || !(typeof obj === "object" && toStringTag in obj));
    }
    function isSymbol(obj) {
      if (hasShammedSymbols) {
        return obj && typeof obj === "object" && obj instanceof Symbol;
      }
      if (typeof obj === "symbol") {
        return true;
      }
      if (!obj || typeof obj !== "object" || !symToString) {
        return false;
      }
      try {
        symToString.call(obj);
        return true;
      } catch (e) {
      }
      return false;
    }
    function isBigInt(obj) {
      if (!obj || typeof obj !== "object" || !bigIntValueOf) {
        return false;
      }
      try {
        bigIntValueOf.call(obj);
        return true;
      } catch (e) {
      }
      return false;
    }
    var hasOwn = Object.prototype.hasOwnProperty || function(key) {
      return key in this;
    };
    function has(obj, key) {
      return hasOwn.call(obj, key);
    }
    function toStr(obj) {
      return objectToString.call(obj);
    }
    function nameOf(f) {
      if (f.name) {
        return f.name;
      }
      var m = $match.call(functionToString.call(f), /^function\s*([\w$]+)/);
      if (m) {
        return m[1];
      }
      return null;
    }
    function indexOf(xs, x) {
      if (xs.indexOf) {
        return xs.indexOf(x);
      }
      for (var i = 0, l = xs.length; i < l; i++) {
        if (xs[i] === x) {
          return i;
        }
      }
      return -1;
    }
    function isMap(x) {
      if (!mapSize || !x || typeof x !== "object") {
        return false;
      }
      try {
        mapSize.call(x);
        try {
          setSize.call(x);
        } catch (s) {
          return true;
        }
        return x instanceof Map;
      } catch (e) {
      }
      return false;
    }
    function isWeakMap(x) {
      if (!weakMapHas || !x || typeof x !== "object") {
        return false;
      }
      try {
        weakMapHas.call(x, weakMapHas);
        try {
          weakSetHas.call(x, weakSetHas);
        } catch (s) {
          return true;
        }
        return x instanceof WeakMap;
      } catch (e) {
      }
      return false;
    }
    function isWeakRef(x) {
      if (!weakRefDeref || !x || typeof x !== "object") {
        return false;
      }
      try {
        weakRefDeref.call(x);
        return true;
      } catch (e) {
      }
      return false;
    }
    function isSet(x) {
      if (!setSize || !x || typeof x !== "object") {
        return false;
      }
      try {
        setSize.call(x);
        try {
          mapSize.call(x);
        } catch (m) {
          return true;
        }
        return x instanceof Set;
      } catch (e) {
      }
      return false;
    }
    function isWeakSet(x) {
      if (!weakSetHas || !x || typeof x !== "object") {
        return false;
      }
      try {
        weakSetHas.call(x, weakSetHas);
        try {
          weakMapHas.call(x, weakMapHas);
        } catch (s) {
          return true;
        }
        return x instanceof WeakSet;
      } catch (e) {
      }
      return false;
    }
    function isElement(x) {
      if (!x || typeof x !== "object") {
        return false;
      }
      if (typeof HTMLElement !== "undefined" && x instanceof HTMLElement) {
        return true;
      }
      return typeof x.nodeName === "string" && typeof x.getAttribute === "function";
    }
    function inspectString(str, opts) {
      if (str.length > opts.maxStringLength) {
        var remaining = str.length - opts.maxStringLength;
        var trailer = "... " + remaining + " more character" + (remaining > 1 ? "s" : "");
        return inspectString($slice.call(str, 0, opts.maxStringLength), opts) + trailer;
      }
      var s = $replace.call($replace.call(str, /(['\\])/g, "\\$1"), /[\x00-\x1f]/g, lowbyte);
      return wrapQuotes(s, "single", opts);
    }
    function lowbyte(c) {
      var n = c.charCodeAt(0);
      var x = {
        8: "b",
        9: "t",
        10: "n",
        12: "f",
        13: "r"
      }[n];
      if (x) {
        return "\\" + x;
      }
      return "\\x" + (n < 16 ? "0" : "") + $toUpperCase.call(n.toString(16));
    }
    function markBoxed(str) {
      return "Object(" + str + ")";
    }
    function weakCollectionOf(type) {
      return type + " { ? }";
    }
    function collectionOf(type, size, entries, indent) {
      var joinedEntries = indent ? indentedJoin(entries, indent) : $join.call(entries, ", ");
      return type + " (" + size + ") {" + joinedEntries + "}";
    }
    function singleLineValues(xs) {
      for (var i = 0; i < xs.length; i++) {
        if (indexOf(xs[i], "\n") >= 0) {
          return false;
        }
      }
      return true;
    }
    function getIndent(opts, depth) {
      var baseIndent;
      if (opts.indent === "	") {
        baseIndent = "	";
      } else if (typeof opts.indent === "number" && opts.indent > 0) {
        baseIndent = $join.call(Array(opts.indent + 1), " ");
      } else {
        return null;
      }
      return {
        base: baseIndent,
        prev: $join.call(Array(depth + 1), baseIndent)
      };
    }
    function indentedJoin(xs, indent) {
      if (xs.length === 0) {
        return "";
      }
      var lineJoiner = "\n" + indent.prev + indent.base;
      return lineJoiner + $join.call(xs, "," + lineJoiner) + "\n" + indent.prev;
    }
    function arrObjKeys(obj, inspect) {
      var isArr = isArray(obj);
      var xs = [];
      if (isArr) {
        xs.length = obj.length;
        for (var i = 0; i < obj.length; i++) {
          xs[i] = has(obj, i) ? inspect(obj[i], obj) : "";
        }
      }
      var syms = typeof gOPS === "function" ? gOPS(obj) : [];
      var symMap;
      if (hasShammedSymbols) {
        symMap = {};
        for (var k = 0; k < syms.length; k++) {
          symMap["$" + syms[k]] = syms[k];
        }
      }
      for (var key in obj) {
        if (!has(obj, key)) {
          continue;
        }
        if (isArr && String(Number(key)) === key && key < obj.length) {
          continue;
        }
        if (hasShammedSymbols && symMap["$" + key] instanceof Symbol) {
          continue;
        } else if ($test.call(/[^\w$]/, key)) {
          xs.push(inspect(key, obj) + ": " + inspect(obj[key], obj));
        } else {
          xs.push(key + ": " + inspect(obj[key], obj));
        }
      }
      if (typeof gOPS === "function") {
        for (var j = 0; j < syms.length; j++) {
          if (isEnumerable.call(obj, syms[j])) {
            xs.push("[" + inspect(syms[j]) + "]: " + inspect(obj[syms[j]], obj));
          }
        }
      }
      return xs;
    }
  }
});

// node_modules/side-channel/index.js
var require_side_channel = __commonJS({
  "node_modules/side-channel/index.js"(exports, module2) {
    "use strict";
    var GetIntrinsic = require_get_intrinsic();
    var callBound = require_callBound();
    var inspect = require_object_inspect();
    var $TypeError = GetIntrinsic("%TypeError%");
    var $WeakMap = GetIntrinsic("%WeakMap%", true);
    var $Map = GetIntrinsic("%Map%", true);
    var $weakMapGet = callBound("WeakMap.prototype.get", true);
    var $weakMapSet = callBound("WeakMap.prototype.set", true);
    var $weakMapHas = callBound("WeakMap.prototype.has", true);
    var $mapGet = callBound("Map.prototype.get", true);
    var $mapSet = callBound("Map.prototype.set", true);
    var $mapHas = callBound("Map.prototype.has", true);
    var listGetNode = function(list, key) {
      for (var prev = list, curr; (curr = prev.next) !== null; prev = curr) {
        if (curr.key === key) {
          prev.next = curr.next;
          curr.next = list.next;
          list.next = curr;
          return curr;
        }
      }
    };
    var listGet = function(objects, key) {
      var node = listGetNode(objects, key);
      return node && node.value;
    };
    var listSet = function(objects, key, value) {
      var node = listGetNode(objects, key);
      if (node) {
        node.value = value;
      } else {
        objects.next = {
          key,
          next: objects.next,
          value
        };
      }
    };
    var listHas = function(objects, key) {
      return !!listGetNode(objects, key);
    };
    module2.exports = function getSideChannel() {
      var $wm;
      var $m;
      var $o;
      var channel = {
        assert: function(key) {
          if (!channel.has(key)) {
            throw new $TypeError("Side channel does not contain " + inspect(key));
          }
        },
        get: function(key) {
          if ($WeakMap && key && (typeof key === "object" || typeof key === "function")) {
            if ($wm) {
              return $weakMapGet($wm, key);
            }
          } else if ($Map) {
            if ($m) {
              return $mapGet($m, key);
            }
          } else {
            if ($o) {
              return listGet($o, key);
            }
          }
        },
        has: function(key) {
          if ($WeakMap && key && (typeof key === "object" || typeof key === "function")) {
            if ($wm) {
              return $weakMapHas($wm, key);
            }
          } else if ($Map) {
            if ($m) {
              return $mapHas($m, key);
            }
          } else {
            if ($o) {
              return listHas($o, key);
            }
          }
          return false;
        },
        set: function(key, value) {
          if ($WeakMap && key && (typeof key === "object" || typeof key === "function")) {
            if (!$wm) {
              $wm = new $WeakMap();
            }
            $weakMapSet($wm, key, value);
          } else if ($Map) {
            if (!$m) {
              $m = new $Map();
            }
            $mapSet($m, key, value);
          } else {
            if (!$o) {
              $o = { key: {}, next: null };
            }
            listSet($o, key, value);
          }
        }
      };
      return channel;
    };
  }
});

// node_modules/qs/lib/formats.js
var require_formats = __commonJS({
  "node_modules/qs/lib/formats.js"(exports, module2) {
    "use strict";
    var replace = String.prototype.replace;
    var percentTwenties = /%20/g;
    var Format = {
      RFC1738: "RFC1738",
      RFC3986: "RFC3986"
    };
    module2.exports = {
      "default": Format.RFC3986,
      formatters: {
        RFC1738: function(value) {
          return replace.call(value, percentTwenties, "+");
        },
        RFC3986: function(value) {
          return String(value);
        }
      },
      RFC1738: Format.RFC1738,
      RFC3986: Format.RFC3986
    };
  }
});

// node_modules/qs/lib/utils.js
var require_utils = __commonJS({
  "node_modules/qs/lib/utils.js"(exports, module2) {
    "use strict";
    var formats = require_formats();
    var has = Object.prototype.hasOwnProperty;
    var isArray = Array.isArray;
    var hexTable = function() {
      var array = [];
      for (var i = 0; i < 256; ++i) {
        array.push("%" + ((i < 16 ? "0" : "") + i.toString(16)).toUpperCase());
      }
      return array;
    }();
    var compactQueue = function compactQueue2(queue) {
      while (queue.length > 1) {
        var item = queue.pop();
        var obj = item.obj[item.prop];
        if (isArray(obj)) {
          var compacted = [];
          for (var j = 0; j < obj.length; ++j) {
            if (typeof obj[j] !== "undefined") {
              compacted.push(obj[j]);
            }
          }
          item.obj[item.prop] = compacted;
        }
      }
    };
    var arrayToObject = function arrayToObject2(source, options) {
      var obj = options && options.plainObjects ? /* @__PURE__ */ Object.create(null) : {};
      for (var i = 0; i < source.length; ++i) {
        if (typeof source[i] !== "undefined") {
          obj[i] = source[i];
        }
      }
      return obj;
    };
    var merge = function merge2(target, source, options) {
      if (!source) {
        return target;
      }
      if (typeof source !== "object") {
        if (isArray(target)) {
          target.push(source);
        } else if (target && typeof target === "object") {
          if (options && (options.plainObjects || options.allowPrototypes) || !has.call(Object.prototype, source)) {
            target[source] = true;
          }
        } else {
          return [target, source];
        }
        return target;
      }
      if (!target || typeof target !== "object") {
        return [target].concat(source);
      }
      var mergeTarget = target;
      if (isArray(target) && !isArray(source)) {
        mergeTarget = arrayToObject(target, options);
      }
      if (isArray(target) && isArray(source)) {
        source.forEach(function(item, i) {
          if (has.call(target, i)) {
            var targetItem = target[i];
            if (targetItem && typeof targetItem === "object" && item && typeof item === "object") {
              target[i] = merge2(targetItem, item, options);
            } else {
              target.push(item);
            }
          } else {
            target[i] = item;
          }
        });
        return target;
      }
      return Object.keys(source).reduce(function(acc, key) {
        var value = source[key];
        if (has.call(acc, key)) {
          acc[key] = merge2(acc[key], value, options);
        } else {
          acc[key] = value;
        }
        return acc;
      }, mergeTarget);
    };
    var assign = function assignSingleSource(target, source) {
      return Object.keys(source).reduce(function(acc, key) {
        acc[key] = source[key];
        return acc;
      }, target);
    };
    var decode = function(str, decoder, charset) {
      var strWithoutPlus = str.replace(/\+/g, " ");
      if (charset === "iso-8859-1") {
        return strWithoutPlus.replace(/%[0-9a-f]{2}/gi, unescape);
      }
      try {
        return decodeURIComponent(strWithoutPlus);
      } catch (e) {
        return strWithoutPlus;
      }
    };
    var encode = function encode2(str, defaultEncoder, charset, kind, format) {
      if (str.length === 0) {
        return str;
      }
      var string = str;
      if (typeof str === "symbol") {
        string = Symbol.prototype.toString.call(str);
      } else if (typeof str !== "string") {
        string = String(str);
      }
      if (charset === "iso-8859-1") {
        return escape(string).replace(/%u[0-9a-f]{4}/gi, function($0) {
          return "%26%23" + parseInt($0.slice(2), 16) + "%3B";
        });
      }
      var out = "";
      for (var i = 0; i < string.length; ++i) {
        var c = string.charCodeAt(i);
        if (c === 45 || c === 46 || c === 95 || c === 126 || c >= 48 && c <= 57 || c >= 65 && c <= 90 || c >= 97 && c <= 122 || format === formats.RFC1738 && (c === 40 || c === 41)) {
          out += string.charAt(i);
          continue;
        }
        if (c < 128) {
          out = out + hexTable[c];
          continue;
        }
        if (c < 2048) {
          out = out + (hexTable[192 | c >> 6] + hexTable[128 | c & 63]);
          continue;
        }
        if (c < 55296 || c >= 57344) {
          out = out + (hexTable[224 | c >> 12] + hexTable[128 | c >> 6 & 63] + hexTable[128 | c & 63]);
          continue;
        }
        i += 1;
        c = 65536 + ((c & 1023) << 10 | string.charCodeAt(i) & 1023);
        out += hexTable[240 | c >> 18] + hexTable[128 | c >> 12 & 63] + hexTable[128 | c >> 6 & 63] + hexTable[128 | c & 63];
      }
      return out;
    };
    var compact = function compact2(value) {
      var queue = [{ obj: { o: value }, prop: "o" }];
      var refs = [];
      for (var i = 0; i < queue.length; ++i) {
        var item = queue[i];
        var obj = item.obj[item.prop];
        var keys = Object.keys(obj);
        for (var j = 0; j < keys.length; ++j) {
          var key = keys[j];
          var val = obj[key];
          if (typeof val === "object" && val !== null && refs.indexOf(val) === -1) {
            queue.push({ obj, prop: key });
            refs.push(val);
          }
        }
      }
      compactQueue(queue);
      return value;
    };
    var isRegExp = function isRegExp2(obj) {
      return Object.prototype.toString.call(obj) === "[object RegExp]";
    };
    var isBuffer = function isBuffer2(obj) {
      if (!obj || typeof obj !== "object") {
        return false;
      }
      return !!(obj.constructor && obj.constructor.isBuffer && obj.constructor.isBuffer(obj));
    };
    var combine = function combine2(a, b) {
      return [].concat(a, b);
    };
    var maybeMap = function maybeMap2(val, fn) {
      if (isArray(val)) {
        var mapped = [];
        for (var i = 0; i < val.length; i += 1) {
          mapped.push(fn(val[i]));
        }
        return mapped;
      }
      return fn(val);
    };
    module2.exports = {
      arrayToObject,
      assign,
      combine,
      compact,
      decode,
      encode,
      isBuffer,
      isRegExp,
      maybeMap,
      merge
    };
  }
});

// node_modules/qs/lib/stringify.js
var require_stringify = __commonJS({
  "node_modules/qs/lib/stringify.js"(exports, module2) {
    "use strict";
    var getSideChannel = require_side_channel();
    var utils = require_utils();
    var formats = require_formats();
    var has = Object.prototype.hasOwnProperty;
    var arrayPrefixGenerators = {
      brackets: function brackets(prefix) {
        return prefix + "[]";
      },
      comma: "comma",
      indices: function indices(prefix, key) {
        return prefix + "[" + key + "]";
      },
      repeat: function repeat(prefix) {
        return prefix;
      }
    };
    var isArray = Array.isArray;
    var split = String.prototype.split;
    var push = Array.prototype.push;
    var pushToArray = function(arr, valueOrArray) {
      push.apply(arr, isArray(valueOrArray) ? valueOrArray : [valueOrArray]);
    };
    var toISO = Date.prototype.toISOString;
    var defaultFormat = formats["default"];
    var defaults = {
      addQueryPrefix: false,
      allowDots: false,
      charset: "utf-8",
      charsetSentinel: false,
      delimiter: "&",
      encode: true,
      encoder: utils.encode,
      encodeValuesOnly: false,
      format: defaultFormat,
      formatter: formats.formatters[defaultFormat],
      indices: false,
      serializeDate: function serializeDate(date) {
        return toISO.call(date);
      },
      skipNulls: false,
      strictNullHandling: false
    };
    var isNonNullishPrimitive = function isNonNullishPrimitive2(v) {
      return typeof v === "string" || typeof v === "number" || typeof v === "boolean" || typeof v === "symbol" || typeof v === "bigint";
    };
    var sentinel = {};
    var stringify = function stringify2(object, prefix, generateArrayPrefix, commaRoundTrip, strictNullHandling, skipNulls, encoder, filter, sort, allowDots, serializeDate, format, formatter, encodeValuesOnly, charset, sideChannel) {
      var obj = object;
      var tmpSc = sideChannel;
      var step = 0;
      var findFlag = false;
      while ((tmpSc = tmpSc.get(sentinel)) !== void 0 && !findFlag) {
        var pos = tmpSc.get(object);
        step += 1;
        if (typeof pos !== "undefined") {
          if (pos === step) {
            throw new RangeError("Cyclic object value");
          } else {
            findFlag = true;
          }
        }
        if (typeof tmpSc.get(sentinel) === "undefined") {
          step = 0;
        }
      }
      if (typeof filter === "function") {
        obj = filter(prefix, obj);
      } else if (obj instanceof Date) {
        obj = serializeDate(obj);
      } else if (generateArrayPrefix === "comma" && isArray(obj)) {
        obj = utils.maybeMap(obj, function(value2) {
          if (value2 instanceof Date) {
            return serializeDate(value2);
          }
          return value2;
        });
      }
      if (obj === null) {
        if (strictNullHandling) {
          return encoder && !encodeValuesOnly ? encoder(prefix, defaults.encoder, charset, "key", format) : prefix;
        }
        obj = "";
      }
      if (isNonNullishPrimitive(obj) || utils.isBuffer(obj)) {
        if (encoder) {
          var keyValue = encodeValuesOnly ? prefix : encoder(prefix, defaults.encoder, charset, "key", format);
          if (generateArrayPrefix === "comma" && encodeValuesOnly) {
            var valuesArray = split.call(String(obj), ",");
            var valuesJoined = "";
            for (var i = 0; i < valuesArray.length; ++i) {
              valuesJoined += (i === 0 ? "" : ",") + formatter(encoder(valuesArray[i], defaults.encoder, charset, "value", format));
            }
            return [formatter(keyValue) + (commaRoundTrip && isArray(obj) && valuesArray.length === 1 ? "[]" : "") + "=" + valuesJoined];
          }
          return [formatter(keyValue) + "=" + formatter(encoder(obj, defaults.encoder, charset, "value", format))];
        }
        return [formatter(prefix) + "=" + formatter(String(obj))];
      }
      var values = [];
      if (typeof obj === "undefined") {
        return values;
      }
      var objKeys;
      if (generateArrayPrefix === "comma" && isArray(obj)) {
        objKeys = [{ value: obj.length > 0 ? obj.join(",") || null : void 0 }];
      } else if (isArray(filter)) {
        objKeys = filter;
      } else {
        var keys = Object.keys(obj);
        objKeys = sort ? keys.sort(sort) : keys;
      }
      var adjustedPrefix = commaRoundTrip && isArray(obj) && obj.length === 1 ? prefix + "[]" : prefix;
      for (var j = 0; j < objKeys.length; ++j) {
        var key = objKeys[j];
        var value = typeof key === "object" && typeof key.value !== "undefined" ? key.value : obj[key];
        if (skipNulls && value === null) {
          continue;
        }
        var keyPrefix = isArray(obj) ? typeof generateArrayPrefix === "function" ? generateArrayPrefix(adjustedPrefix, key) : adjustedPrefix : adjustedPrefix + (allowDots ? "." + key : "[" + key + "]");
        sideChannel.set(object, step);
        var valueSideChannel = getSideChannel();
        valueSideChannel.set(sentinel, sideChannel);
        pushToArray(values, stringify2(value, keyPrefix, generateArrayPrefix, commaRoundTrip, strictNullHandling, skipNulls, encoder, filter, sort, allowDots, serializeDate, format, formatter, encodeValuesOnly, charset, valueSideChannel));
      }
      return values;
    };
    var normalizeStringifyOptions = function normalizeStringifyOptions2(opts) {
      if (!opts) {
        return defaults;
      }
      if (opts.encoder !== null && typeof opts.encoder !== "undefined" && typeof opts.encoder !== "function") {
        throw new TypeError("Encoder has to be a function.");
      }
      var charset = opts.charset || defaults.charset;
      if (typeof opts.charset !== "undefined" && opts.charset !== "utf-8" && opts.charset !== "iso-8859-1") {
        throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
      }
      var format = formats["default"];
      if (typeof opts.format !== "undefined") {
        if (!has.call(formats.formatters, opts.format)) {
          throw new TypeError("Unknown format option provided.");
        }
        format = opts.format;
      }
      var formatter = formats.formatters[format];
      var filter = defaults.filter;
      if (typeof opts.filter === "function" || isArray(opts.filter)) {
        filter = opts.filter;
      }
      return {
        addQueryPrefix: typeof opts.addQueryPrefix === "boolean" ? opts.addQueryPrefix : defaults.addQueryPrefix,
        allowDots: typeof opts.allowDots === "undefined" ? defaults.allowDots : !!opts.allowDots,
        charset,
        charsetSentinel: typeof opts.charsetSentinel === "boolean" ? opts.charsetSentinel : defaults.charsetSentinel,
        delimiter: typeof opts.delimiter === "undefined" ? defaults.delimiter : opts.delimiter,
        encode: typeof opts.encode === "boolean" ? opts.encode : defaults.encode,
        encoder: typeof opts.encoder === "function" ? opts.encoder : defaults.encoder,
        encodeValuesOnly: typeof opts.encodeValuesOnly === "boolean" ? opts.encodeValuesOnly : defaults.encodeValuesOnly,
        filter,
        format,
        formatter,
        serializeDate: typeof opts.serializeDate === "function" ? opts.serializeDate : defaults.serializeDate,
        skipNulls: typeof opts.skipNulls === "boolean" ? opts.skipNulls : defaults.skipNulls,
        sort: typeof opts.sort === "function" ? opts.sort : null,
        strictNullHandling: typeof opts.strictNullHandling === "boolean" ? opts.strictNullHandling : defaults.strictNullHandling
      };
    };
    module2.exports = function(object, opts) {
      var obj = object;
      var options = normalizeStringifyOptions(opts);
      var objKeys;
      var filter;
      if (typeof options.filter === "function") {
        filter = options.filter;
        obj = filter("", obj);
      } else if (isArray(options.filter)) {
        filter = options.filter;
        objKeys = filter;
      }
      var keys = [];
      if (typeof obj !== "object" || obj === null) {
        return "";
      }
      var arrayFormat;
      if (opts && opts.arrayFormat in arrayPrefixGenerators) {
        arrayFormat = opts.arrayFormat;
      } else if (opts && "indices" in opts) {
        arrayFormat = opts.indices ? "indices" : "repeat";
      } else {
        arrayFormat = "indices";
      }
      var generateArrayPrefix = arrayPrefixGenerators[arrayFormat];
      if (opts && "commaRoundTrip" in opts && typeof opts.commaRoundTrip !== "boolean") {
        throw new TypeError("`commaRoundTrip` must be a boolean, or absent");
      }
      var commaRoundTrip = generateArrayPrefix === "comma" && opts && opts.commaRoundTrip;
      if (!objKeys) {
        objKeys = Object.keys(obj);
      }
      if (options.sort) {
        objKeys.sort(options.sort);
      }
      var sideChannel = getSideChannel();
      for (var i = 0; i < objKeys.length; ++i) {
        var key = objKeys[i];
        if (options.skipNulls && obj[key] === null) {
          continue;
        }
        pushToArray(keys, stringify(obj[key], key, generateArrayPrefix, commaRoundTrip, options.strictNullHandling, options.skipNulls, options.encode ? options.encoder : null, options.filter, options.sort, options.allowDots, options.serializeDate, options.format, options.formatter, options.encodeValuesOnly, options.charset, sideChannel));
      }
      var joined = keys.join(options.delimiter);
      var prefix = options.addQueryPrefix === true ? "?" : "";
      if (options.charsetSentinel) {
        if (options.charset === "iso-8859-1") {
          prefix += "utf8=%26%2310003%3B&";
        } else {
          prefix += "utf8=%E2%9C%93&";
        }
      }
      return joined.length > 0 ? prefix + joined : "";
    };
  }
});

// node_modules/qs/lib/parse.js
var require_parse = __commonJS({
  "node_modules/qs/lib/parse.js"(exports, module2) {
    "use strict";
    var utils = require_utils();
    var has = Object.prototype.hasOwnProperty;
    var isArray = Array.isArray;
    var defaults = {
      allowDots: false,
      allowPrototypes: false,
      allowSparse: false,
      arrayLimit: 20,
      charset: "utf-8",
      charsetSentinel: false,
      comma: false,
      decoder: utils.decode,
      delimiter: "&",
      depth: 5,
      ignoreQueryPrefix: false,
      interpretNumericEntities: false,
      parameterLimit: 1e3,
      parseArrays: true,
      plainObjects: false,
      strictNullHandling: false
    };
    var interpretNumericEntities = function(str) {
      return str.replace(/&#(\d+);/g, function($0, numberStr) {
        return String.fromCharCode(parseInt(numberStr, 10));
      });
    };
    var parseArrayValue = function(val, options) {
      if (val && typeof val === "string" && options.comma && val.indexOf(",") > -1) {
        return val.split(",");
      }
      return val;
    };
    var isoSentinel = "utf8=%26%2310003%3B";
    var charsetSentinel = "utf8=%E2%9C%93";
    var parseValues = function parseQueryStringValues(str, options) {
      var obj = {};
      var cleanStr = options.ignoreQueryPrefix ? str.replace(/^\?/, "") : str;
      var limit = options.parameterLimit === Infinity ? void 0 : options.parameterLimit;
      var parts = cleanStr.split(options.delimiter, limit);
      var skipIndex = -1;
      var i;
      var charset = options.charset;
      if (options.charsetSentinel) {
        for (i = 0; i < parts.length; ++i) {
          if (parts[i].indexOf("utf8=") === 0) {
            if (parts[i] === charsetSentinel) {
              charset = "utf-8";
            } else if (parts[i] === isoSentinel) {
              charset = "iso-8859-1";
            }
            skipIndex = i;
            i = parts.length;
          }
        }
      }
      for (i = 0; i < parts.length; ++i) {
        if (i === skipIndex) {
          continue;
        }
        var part = parts[i];
        var bracketEqualsPos = part.indexOf("]=");
        var pos = bracketEqualsPos === -1 ? part.indexOf("=") : bracketEqualsPos + 1;
        var key, val;
        if (pos === -1) {
          key = options.decoder(part, defaults.decoder, charset, "key");
          val = options.strictNullHandling ? null : "";
        } else {
          key = options.decoder(part.slice(0, pos), defaults.decoder, charset, "key");
          val = utils.maybeMap(parseArrayValue(part.slice(pos + 1), options), function(encodedVal) {
            return options.decoder(encodedVal, defaults.decoder, charset, "value");
          });
        }
        if (val && options.interpretNumericEntities && charset === "iso-8859-1") {
          val = interpretNumericEntities(val);
        }
        if (part.indexOf("[]=") > -1) {
          val = isArray(val) ? [val] : val;
        }
        if (has.call(obj, key)) {
          obj[key] = utils.combine(obj[key], val);
        } else {
          obj[key] = val;
        }
      }
      return obj;
    };
    var parseObject = function(chain, val, options, valuesParsed) {
      var leaf = valuesParsed ? val : parseArrayValue(val, options);
      for (var i = chain.length - 1; i >= 0; --i) {
        var obj;
        var root = chain[i];
        if (root === "[]" && options.parseArrays) {
          obj = [].concat(leaf);
        } else {
          obj = options.plainObjects ? /* @__PURE__ */ Object.create(null) : {};
          var cleanRoot = root.charAt(0) === "[" && root.charAt(root.length - 1) === "]" ? root.slice(1, -1) : root;
          var index = parseInt(cleanRoot, 10);
          if (!options.parseArrays && cleanRoot === "") {
            obj = { 0: leaf };
          } else if (!isNaN(index) && root !== cleanRoot && String(index) === cleanRoot && index >= 0 && (options.parseArrays && index <= options.arrayLimit)) {
            obj = [];
            obj[index] = leaf;
          } else if (cleanRoot !== "__proto__") {
            obj[cleanRoot] = leaf;
          }
        }
        leaf = obj;
      }
      return leaf;
    };
    var parseKeys = function parseQueryStringKeys(givenKey, val, options, valuesParsed) {
      if (!givenKey) {
        return;
      }
      var key = options.allowDots ? givenKey.replace(/\.([^.[]+)/g, "[$1]") : givenKey;
      var brackets = /(\[[^[\]]*])/;
      var child = /(\[[^[\]]*])/g;
      var segment = options.depth > 0 && brackets.exec(key);
      var parent = segment ? key.slice(0, segment.index) : key;
      var keys = [];
      if (parent) {
        if (!options.plainObjects && has.call(Object.prototype, parent)) {
          if (!options.allowPrototypes) {
            return;
          }
        }
        keys.push(parent);
      }
      var i = 0;
      while (options.depth > 0 && (segment = child.exec(key)) !== null && i < options.depth) {
        i += 1;
        if (!options.plainObjects && has.call(Object.prototype, segment[1].slice(1, -1))) {
          if (!options.allowPrototypes) {
            return;
          }
        }
        keys.push(segment[1]);
      }
      if (segment) {
        keys.push("[" + key.slice(segment.index) + "]");
      }
      return parseObject(keys, val, options, valuesParsed);
    };
    var normalizeParseOptions = function normalizeParseOptions2(opts) {
      if (!opts) {
        return defaults;
      }
      if (opts.decoder !== null && opts.decoder !== void 0 && typeof opts.decoder !== "function") {
        throw new TypeError("Decoder has to be a function.");
      }
      if (typeof opts.charset !== "undefined" && opts.charset !== "utf-8" && opts.charset !== "iso-8859-1") {
        throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
      }
      var charset = typeof opts.charset === "undefined" ? defaults.charset : opts.charset;
      return {
        allowDots: typeof opts.allowDots === "undefined" ? defaults.allowDots : !!opts.allowDots,
        allowPrototypes: typeof opts.allowPrototypes === "boolean" ? opts.allowPrototypes : defaults.allowPrototypes,
        allowSparse: typeof opts.allowSparse === "boolean" ? opts.allowSparse : defaults.allowSparse,
        arrayLimit: typeof opts.arrayLimit === "number" ? opts.arrayLimit : defaults.arrayLimit,
        charset,
        charsetSentinel: typeof opts.charsetSentinel === "boolean" ? opts.charsetSentinel : defaults.charsetSentinel,
        comma: typeof opts.comma === "boolean" ? opts.comma : defaults.comma,
        decoder: typeof opts.decoder === "function" ? opts.decoder : defaults.decoder,
        delimiter: typeof opts.delimiter === "string" || utils.isRegExp(opts.delimiter) ? opts.delimiter : defaults.delimiter,
        depth: typeof opts.depth === "number" || opts.depth === false ? +opts.depth : defaults.depth,
        ignoreQueryPrefix: opts.ignoreQueryPrefix === true,
        interpretNumericEntities: typeof opts.interpretNumericEntities === "boolean" ? opts.interpretNumericEntities : defaults.interpretNumericEntities,
        parameterLimit: typeof opts.parameterLimit === "number" ? opts.parameterLimit : defaults.parameterLimit,
        parseArrays: opts.parseArrays !== false,
        plainObjects: typeof opts.plainObjects === "boolean" ? opts.plainObjects : defaults.plainObjects,
        strictNullHandling: typeof opts.strictNullHandling === "boolean" ? opts.strictNullHandling : defaults.strictNullHandling
      };
    };
    module2.exports = function(str, opts) {
      var options = normalizeParseOptions(opts);
      if (str === "" || str === null || typeof str === "undefined") {
        return options.plainObjects ? /* @__PURE__ */ Object.create(null) : {};
      }
      var tempObj = typeof str === "string" ? parseValues(str, options) : str;
      var obj = options.plainObjects ? /* @__PURE__ */ Object.create(null) : {};
      var keys = Object.keys(tempObj);
      for (var i = 0; i < keys.length; ++i) {
        var key = keys[i];
        var newObj = parseKeys(key, tempObj[key], options, typeof str === "string");
        obj = utils.merge(obj, newObj, options);
      }
      if (options.allowSparse === true) {
        return obj;
      }
      return utils.compact(obj);
    };
  }
});

// node_modules/qs/lib/index.js
var require_lib = __commonJS({
  "node_modules/qs/lib/index.js"(exports, module2) {
    "use strict";
    var stringify = require_stringify();
    var parse = require_parse();
    var formats = require_formats();
    module2.exports = {
      formats,
      parse,
      stringify
    };
  }
});

// node_modules/stripe/lib/utils.js
var require_utils2 = __commonJS({
  "node_modules/stripe/lib/utils.js"(exports, module2) {
    "use strict";
    var EventEmitter = require("events").EventEmitter;
    var qs = require_lib();
    var crypto2 = require("crypto");
    var exec = null;
    try {
      exec = require("child_process").exec;
    } catch (e) {
      if (e.code !== "MODULE_NOT_FOUND") {
        throw e;
      }
    }
    var OPTIONS_KEYS = [
      "apiKey",
      "idempotencyKey",
      "stripeAccount",
      "apiVersion",
      "maxNetworkRetries",
      "timeout",
      "host"
    ];
    var utils = {
      isOptionsHash(o) {
        return o && typeof o === "object" && OPTIONS_KEYS.some((prop) => Object.prototype.hasOwnProperty.call(o, prop));
      },
      stringifyRequestData: (data) => {
        return qs.stringify(data, {
          serializeDate: (d) => Math.floor(d.getTime() / 1e3)
        }).replace(/%5B/g, "[").replace(/%5D/g, "]");
      },
      makeURLInterpolator: (() => {
        const rc = {
          "\n": "\\n",
          '"': '\\"',
          "\u2028": "\\u2028",
          "\u2029": "\\u2029"
        };
        return (str) => {
          const cleanString = str.replace(/["\n\r\u2028\u2029]/g, ($0) => rc[$0]);
          return (outputs) => {
            return cleanString.replace(/\{([\s\S]+?)\}/g, ($0, $1) => encodeURIComponent(outputs[$1] || ""));
          };
        };
      })(),
      extractUrlParams: (path) => {
        const params = path.match(/\{\w+\}/g);
        if (!params) {
          return [];
        }
        return params.map((param) => param.replace(/[{}]/g, ""));
      },
      getDataFromArgs(args) {
        if (!Array.isArray(args) || !args[0] || typeof args[0] !== "object") {
          return {};
        }
        if (!utils.isOptionsHash(args[0])) {
          return args.shift();
        }
        const argKeys = Object.keys(args[0]);
        const optionKeysInArgs = argKeys.filter((key) => OPTIONS_KEYS.includes(key));
        if (optionKeysInArgs.length > 0 && optionKeysInArgs.length !== argKeys.length) {
          emitWarning(`Options found in arguments (${optionKeysInArgs.join(", ")}). Did you mean to pass an options object? See https://github.com/stripe/stripe-node/wiki/Passing-Options.`);
        }
        return {};
      },
      getOptionsFromArgs: (args) => {
        const opts = {
          auth: null,
          headers: {},
          settings: {}
        };
        if (args.length > 0) {
          const arg = args[args.length - 1];
          if (typeof arg === "string") {
            opts.auth = args.pop();
          } else if (utils.isOptionsHash(arg)) {
            const params = Object.assign({}, args.pop());
            const extraKeys = Object.keys(params).filter((key) => !OPTIONS_KEYS.includes(key));
            if (extraKeys.length) {
              emitWarning(`Invalid options found (${extraKeys.join(", ")}); ignoring.`);
            }
            if (params.apiKey) {
              opts.auth = params.apiKey;
            }
            if (params.idempotencyKey) {
              opts.headers["Idempotency-Key"] = params.idempotencyKey;
            }
            if (params.stripeAccount) {
              opts.headers["Stripe-Account"] = params.stripeAccount;
            }
            if (params.apiVersion) {
              opts.headers["Stripe-Version"] = params.apiVersion;
            }
            if (Number.isInteger(params.maxNetworkRetries)) {
              opts.settings.maxNetworkRetries = params.maxNetworkRetries;
            }
            if (Number.isInteger(params.timeout)) {
              opts.settings.timeout = params.timeout;
            }
            if (params.host) {
              opts.host = params.host;
            }
          }
        }
        return opts;
      },
      protoExtend(sub) {
        const Super = this;
        const Constructor = Object.prototype.hasOwnProperty.call(sub, "constructor") ? sub.constructor : function(...args) {
          Super.apply(this, args);
        };
        Object.assign(Constructor, Super);
        Constructor.prototype = Object.create(Super.prototype);
        Object.assign(Constructor.prototype, sub);
        return Constructor;
      },
      secureCompare: (a, b) => {
        a = Buffer.from(a);
        b = Buffer.from(b);
        if (a.length !== b.length) {
          return false;
        }
        if (crypto2.timingSafeEqual) {
          return crypto2.timingSafeEqual(a, b);
        }
        const len = a.length;
        let result = 0;
        for (let i = 0; i < len; ++i) {
          result |= a[i] ^ b[i];
        }
        return result === 0;
      },
      removeNullish: (obj) => {
        if (typeof obj !== "object") {
          throw new Error("Argument must be an object");
        }
        return Object.keys(obj).reduce((result, key) => {
          if (obj[key] != null) {
            result[key] = obj[key];
          }
          return result;
        }, {});
      },
      normalizeHeaders: (obj) => {
        if (!(obj && typeof obj === "object")) {
          return obj;
        }
        return Object.keys(obj).reduce((result, header) => {
          result[utils.normalizeHeader(header)] = obj[header];
          return result;
        }, {});
      },
      normalizeHeader: (header) => {
        return header.split("-").map((text) => text.charAt(0).toUpperCase() + text.substr(1).toLowerCase()).join("-");
      },
      checkForStream: (obj) => {
        if (obj.file && obj.file.data) {
          return obj.file.data instanceof EventEmitter;
        }
        return false;
      },
      callbackifyPromiseWithTimeout: (promise, callback) => {
        if (callback) {
          return promise.then((res) => {
            setTimeout(() => {
              callback(null, res);
            }, 0);
          }, (err) => {
            setTimeout(() => {
              callback(err, null);
            }, 0);
          });
        }
        return promise;
      },
      pascalToCamelCase: (name) => {
        if (name === "OAuth") {
          return "oauth";
        } else {
          return name[0].toLowerCase() + name.substring(1);
        }
      },
      emitWarning,
      safeExec: (cmd, cb) => {
        if (utils._exec === null) {
          cb(new Error("exec not available"), null);
          return;
        }
        try {
          utils._exec(cmd, cb);
        } catch (e) {
          cb(e, null);
        }
      },
      _exec: exec,
      isObject: (obj) => {
        const type = typeof obj;
        return (type === "function" || type === "object") && !!obj;
      },
      flattenAndStringify: (data) => {
        const result = {};
        const step = (obj, prevKey) => {
          Object.keys(obj).forEach((key) => {
            const value = obj[key];
            const newKey = prevKey ? `${prevKey}[${key}]` : key;
            if (utils.isObject(value)) {
              if (!Buffer.isBuffer(value) && !Object.prototype.hasOwnProperty.call(value, "data")) {
                return step(value, newKey);
              } else {
                result[newKey] = value;
              }
            } else {
              result[newKey] = String(value);
            }
          });
        };
        step(data, null);
        return result;
      },
      uuid4: () => {
        if (crypto2.randomUUID) {
          return crypto2.randomUUID();
        }
        return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
          const r = Math.random() * 16 | 0;
          const v = c === "x" ? r : r & 3 | 8;
          return v.toString(16);
        });
      },
      validateInteger: (name, n, defaultVal) => {
        if (!Number.isInteger(n)) {
          if (defaultVal !== void 0) {
            return defaultVal;
          } else {
            throw new Error(`${name} must be an integer`);
          }
        }
        return n;
      },
      determineProcessUserAgentProperties: () => {
        return typeof process === "undefined" ? {} : {
          lang_version: process.version,
          platform: process.platform
        };
      }
    };
    function emitWarning(warning) {
      if (typeof process.emitWarning !== "function") {
        return console.warn(`Stripe: ${warning}`);
      }
      return process.emitWarning(warning, "Stripe");
    }
    module2.exports = utils;
  }
});

// node_modules/stripe/lib/net/HttpClient.js
var require_HttpClient = __commonJS({
  "node_modules/stripe/lib/net/HttpClient.js"(exports, module2) {
    "use strict";
    var HttpClient = class {
      getClientName() {
        throw new Error("getClientName not implemented.");
      }
      makeRequest(host, port, path, method, headers, requestData, protocol, timeout) {
        throw new Error("makeRequest not implemented.");
      }
      static makeTimeoutError() {
        const timeoutErr = new TypeError(HttpClient.TIMEOUT_ERROR_CODE);
        timeoutErr.code = HttpClient.TIMEOUT_ERROR_CODE;
        return timeoutErr;
      }
    };
    HttpClient.CONNECTION_CLOSED_ERROR_CODES = ["ECONNRESET", "EPIPE"];
    HttpClient.TIMEOUT_ERROR_CODE = "ETIMEDOUT";
    var HttpClientResponse = class {
      constructor(statusCode, headers) {
        this._statusCode = statusCode;
        this._headers = headers;
      }
      getStatusCode() {
        return this._statusCode;
      }
      getHeaders() {
        return this._headers;
      }
      getRawResponse() {
        throw new Error("getRawResponse not implemented.");
      }
      toStream(streamCompleteCallback) {
        throw new Error("toStream not implemented.");
      }
      toJSON() {
        throw new Error("toJSON not implemented.");
      }
    };
    module2.exports = { HttpClient, HttpClientResponse };
  }
});

// node_modules/stripe/lib/makeRequest.js
var require_makeRequest = __commonJS({
  "node_modules/stripe/lib/makeRequest.js"(exports, module2) {
    "use strict";
    var utils = require_utils2();
    function getRequestOpts(self, requestArgs, spec, overrideData) {
      const requestMethod = (spec.method || "GET").toUpperCase();
      const urlParams = spec.urlParams || [];
      const encode = spec.encode || ((data2) => data2);
      const isUsingFullPath = !!spec.fullPath;
      const commandPath = utils.makeURLInterpolator(isUsingFullPath ? spec.fullPath : spec.path || "");
      const path = isUsingFullPath ? spec.fullPath : self.createResourcePathWithSymbols(spec.path);
      const args = [].slice.call(requestArgs);
      const urlData = urlParams.reduce((urlData2, param) => {
        const arg = args.shift();
        if (typeof arg !== "string") {
          throw new Error(`Stripe: Argument "${param}" must be a string, but got: ${arg} (on API request to \`${requestMethod} ${path}\`)`);
        }
        urlData2[param] = arg;
        return urlData2;
      }, {});
      const dataFromArgs = utils.getDataFromArgs(args);
      const data = encode(Object.assign({}, dataFromArgs, overrideData));
      const options = utils.getOptionsFromArgs(args);
      const host = options.host || spec.host;
      const streaming = !!spec.streaming;
      if (args.filter((x) => x != null).length) {
        throw new Error(`Stripe: Unknown arguments (${args}). Did you mean to pass an options object? See https://github.com/stripe/stripe-node/wiki/Passing-Options. (on API request to ${requestMethod} \`${path}\`)`);
      }
      const requestPath = isUsingFullPath ? commandPath(urlData) : self.createFullPath(commandPath, urlData);
      const headers = Object.assign(options.headers, spec.headers);
      if (spec.validator) {
        spec.validator(data, { headers });
      }
      const dataInQuery = spec.method === "GET" || spec.method === "DELETE";
      const bodyData = dataInQuery ? {} : data;
      const queryData = dataInQuery ? data : {};
      return {
        requestMethod,
        requestPath,
        bodyData,
        queryData,
        auth: options.auth,
        headers,
        host,
        streaming,
        settings: options.settings
      };
    }
    function makeRequest(self, requestArgs, spec, overrideData) {
      return new Promise((resolve, reject) => {
        let opts;
        try {
          opts = getRequestOpts(self, requestArgs, spec, overrideData);
        } catch (err) {
          reject(err);
          return;
        }
        function requestCallback(err, response) {
          if (err) {
            reject(err);
          } else {
            resolve(spec.transformResponseData ? spec.transformResponseData(response) : response);
          }
        }
        const emptyQuery = Object.keys(opts.queryData).length === 0;
        const path = [
          opts.requestPath,
          emptyQuery ? "" : "?",
          utils.stringifyRequestData(opts.queryData)
        ].join("");
        const { headers, settings } = opts;
        self._request(opts.requestMethod, opts.host, path, opts.bodyData, opts.auth, { headers, settings, streaming: opts.streaming }, requestCallback);
      });
    }
    module2.exports = makeRequest;
  }
});

// node_modules/stripe/lib/autoPagination.js
var require_autoPagination = __commonJS({
  "node_modules/stripe/lib/autoPagination.js"(exports, module2) {
    "use strict";
    var makeRequest = require_makeRequest();
    var utils = require_utils2();
    function makeAutoPaginationMethods(self, requestArgs, spec, firstPagePromise) {
      const promiseCache = { currentPromise: null };
      const reverseIteration = isReverseIteration(requestArgs);
      let pagePromise = firstPagePromise;
      let i = 0;
      let getNextPagePromise;
      if (spec.methodType === "search") {
        getNextPagePromise = (pageResult) => {
          if (!pageResult.next_page) {
            throw Error("Unexpected: Stripe API response does not have a well-formed `next_page` field, but `has_more` was true.");
          }
          return makeRequest(self, requestArgs, spec, {
            page: pageResult.next_page
          });
        };
      } else {
        getNextPagePromise = (pageResult) => {
          const lastId = getLastId(pageResult, reverseIteration);
          return makeRequest(self, requestArgs, spec, {
            [reverseIteration ? "ending_before" : "starting_after"]: lastId
          });
        };
      }
      function iterate(pageResult) {
        if (!(pageResult && pageResult.data && typeof pageResult.data.length === "number")) {
          throw Error("Unexpected: Stripe API response does not have a well-formed `data` array.");
        }
        if (i < pageResult.data.length) {
          const idx = reverseIteration ? pageResult.data.length - 1 - i : i;
          const value = pageResult.data[idx];
          i += 1;
          return { value, done: false };
        } else if (pageResult.has_more) {
          i = 0;
          pagePromise = getNextPagePromise(pageResult);
          return pagePromise.then(iterate);
        }
        return { value: void 0, done: true };
      }
      function asyncIteratorNext() {
        return memoizedPromise(promiseCache, (resolve, reject) => {
          return pagePromise.then(iterate).then(resolve).catch(reject);
        });
      }
      const autoPagingEach = makeAutoPagingEach(asyncIteratorNext);
      const autoPagingToArray = makeAutoPagingToArray(autoPagingEach);
      const autoPaginationMethods = {
        autoPagingEach,
        autoPagingToArray,
        next: asyncIteratorNext,
        return: () => {
          return {};
        },
        [getAsyncIteratorSymbol()]: () => {
          return autoPaginationMethods;
        }
      };
      return autoPaginationMethods;
    }
    function getAsyncIteratorSymbol() {
      if (typeof Symbol !== "undefined" && Symbol.asyncIterator) {
        return Symbol.asyncIterator;
      }
      return "@@asyncIterator";
    }
    function getDoneCallback(args) {
      if (args.length < 2) {
        return void 0;
      }
      const onDone = args[1];
      if (typeof onDone !== "function") {
        throw Error(`The second argument to autoPagingEach, if present, must be a callback function; received ${typeof onDone}`);
      }
      return onDone;
    }
    function getItemCallback(args) {
      if (args.length === 0) {
        return void 0;
      }
      const onItem = args[0];
      if (typeof onItem !== "function") {
        throw Error(`The first argument to autoPagingEach, if present, must be a callback function; received ${typeof onItem}`);
      }
      if (onItem.length === 2) {
        return onItem;
      }
      if (onItem.length > 2) {
        throw Error(`The \`onItem\` callback function passed to autoPagingEach must accept at most two arguments; got ${onItem}`);
      }
      return function _onItem(item, next) {
        const shouldContinue = onItem(item);
        next(shouldContinue);
      };
    }
    function getLastId(listResult, reverseIteration) {
      const lastIdx = reverseIteration ? 0 : listResult.data.length - 1;
      const lastItem = listResult.data[lastIdx];
      const lastId = lastItem && lastItem.id;
      if (!lastId) {
        throw Error("Unexpected: No `id` found on the last item while auto-paging a list.");
      }
      return lastId;
    }
    function memoizedPromise(promiseCache, cb) {
      if (promiseCache.currentPromise) {
        return promiseCache.currentPromise;
      }
      promiseCache.currentPromise = new Promise(cb).then((ret) => {
        promiseCache.currentPromise = void 0;
        return ret;
      });
      return promiseCache.currentPromise;
    }
    function makeAutoPagingEach(asyncIteratorNext) {
      return function autoPagingEach() {
        const args = [].slice.call(arguments);
        const onItem = getItemCallback(args);
        const onDone = getDoneCallback(args);
        if (args.length > 2) {
          throw Error(`autoPagingEach takes up to two arguments; received ${args}`);
        }
        const autoPagePromise = wrapAsyncIteratorWithCallback(asyncIteratorNext, onItem);
        return utils.callbackifyPromiseWithTimeout(autoPagePromise, onDone);
      };
    }
    function makeAutoPagingToArray(autoPagingEach) {
      return function autoPagingToArray(opts, onDone) {
        const limit = opts && opts.limit;
        if (!limit) {
          throw Error("You must pass a `limit` option to autoPagingToArray, e.g., `autoPagingToArray({limit: 1000});`.");
        }
        if (limit > 1e4) {
          throw Error("You cannot specify a limit of more than 10,000 items to fetch in `autoPagingToArray`; use `autoPagingEach` to iterate through longer lists.");
        }
        const promise = new Promise((resolve, reject) => {
          const items = [];
          autoPagingEach((item) => {
            items.push(item);
            if (items.length >= limit) {
              return false;
            }
          }).then(() => {
            resolve(items);
          }).catch(reject);
        });
        return utils.callbackifyPromiseWithTimeout(promise, onDone);
      };
    }
    function wrapAsyncIteratorWithCallback(asyncIteratorNext, onItem) {
      return new Promise((resolve, reject) => {
        function handleIteration(iterResult) {
          if (iterResult.done) {
            resolve();
            return;
          }
          const item = iterResult.value;
          return new Promise((next) => {
            onItem(item, next);
          }).then((shouldContinue) => {
            if (shouldContinue === false) {
              return handleIteration({ done: true });
            } else {
              return asyncIteratorNext().then(handleIteration);
            }
          });
        }
        asyncIteratorNext().then(handleIteration).catch(reject);
      });
    }
    function isReverseIteration(requestArgs) {
      const args = [].slice.call(requestArgs);
      const dataFromArgs = utils.getDataFromArgs(args);
      return !!dataFromArgs.ending_before;
    }
    module2.exports = {
      makeAutoPaginationMethods
    };
  }
});

// node_modules/stripe/lib/StripeMethod.js
var require_StripeMethod = __commonJS({
  "node_modules/stripe/lib/StripeMethod.js"(exports, module2) {
    "use strict";
    var utils = require_utils2();
    var makeRequest = require_makeRequest();
    var autoPagination = require_autoPagination();
    var makeAutoPaginationMethods = autoPagination.makeAutoPaginationMethods;
    function stripeMethod(spec) {
      if (spec.path !== void 0 && spec.fullPath !== void 0) {
        throw new Error(`Method spec specified both a 'path' (${spec.path}) and a 'fullPath' (${spec.fullPath}).`);
      }
      return function(...args) {
        const callback = typeof args[args.length - 1] == "function" && args.pop();
        spec.urlParams = utils.extractUrlParams(spec.fullPath || this.createResourcePathWithSymbols(spec.path || ""));
        const requestPromise = utils.callbackifyPromiseWithTimeout(makeRequest(this, args, spec, {}), callback);
        if (spec.methodType === "list" || spec.methodType === "search") {
          const autoPaginationMethods = makeAutoPaginationMethods(this, args, spec, requestPromise);
          Object.assign(requestPromise, autoPaginationMethods);
        }
        return requestPromise;
      };
    }
    module2.exports = stripeMethod;
  }
});

// node_modules/stripe/lib/StripeResource.js
var require_StripeResource = __commonJS({
  "node_modules/stripe/lib/StripeResource.js"(exports, module2) {
    "use strict";
    var utils = require_utils2();
    var _Error = require_Error();
    var {
      StripeAPIError,
      StripeAuthenticationError,
      StripeConnectionError,
      StripeError,
      StripePermissionError,
      StripeRateLimitError
    } = _Error;
    var { HttpClient } = require_HttpClient();
    StripeResource.extend = utils.protoExtend;
    StripeResource.method = require_StripeMethod();
    StripeResource.MAX_BUFFERED_REQUEST_METRICS = 100;
    var MAX_RETRY_AFTER_WAIT = 60;
    function StripeResource(stripe, deprecatedUrlData) {
      this._stripe = stripe;
      if (deprecatedUrlData) {
        throw new Error("Support for curried url params was dropped in stripe-node v7.0.0. Instead, pass two ids.");
      }
      this.basePath = utils.makeURLInterpolator(this.basePath || stripe.getApiField("basePath"));
      this.resourcePath = this.path;
      this.path = utils.makeURLInterpolator(this.path);
      this.initialize(...arguments);
    }
    StripeResource.prototype = {
      _stripe: null,
      path: "",
      resourcePath: "",
      basePath: null,
      initialize() {
      },
      requestDataProcessor: null,
      validateRequest: null,
      createFullPath(commandPath, urlData) {
        const urlParts = [this.basePath(urlData), this.path(urlData)];
        if (typeof commandPath === "function") {
          const computedCommandPath = commandPath(urlData);
          if (computedCommandPath) {
            urlParts.push(computedCommandPath);
          }
        } else {
          urlParts.push(commandPath);
        }
        return this._joinUrlParts(urlParts);
      },
      createResourcePathWithSymbols(pathWithSymbols) {
        if (pathWithSymbols) {
          return `/${this._joinUrlParts([this.resourcePath, pathWithSymbols])}`;
        } else {
          return `/${this.resourcePath}`;
        }
      },
      _joinUrlParts(parts) {
        return parts.join("/").replace(/\/{2,}/g, "/");
      },
      _addHeadersDirectlyToObject(obj, headers) {
        obj.requestId = headers["request-id"];
        obj.stripeAccount = obj.stripeAccount || headers["stripe-account"];
        obj.apiVersion = obj.apiVersion || headers["stripe-version"];
        obj.idempotencyKey = obj.idempotencyKey || headers["idempotency-key"];
      },
      _makeResponseEvent(requestEvent, statusCode, headers) {
        const requestEndTime = Date.now();
        const requestDurationMs = requestEndTime - requestEvent.request_start_time;
        return utils.removeNullish({
          api_version: headers["stripe-version"],
          account: headers["stripe-account"],
          idempotency_key: headers["idempotency-key"],
          method: requestEvent.method,
          path: requestEvent.path,
          status: statusCode,
          request_id: this._getRequestId(headers),
          elapsed: requestDurationMs,
          request_start_time: requestEvent.request_start_time,
          request_end_time: requestEndTime
        });
      },
      _getRequestId(headers) {
        return headers["request-id"];
      },
      _streamingResponseHandler(requestEvent, callback) {
        return (res) => {
          const headers = res.getHeaders();
          const streamCompleteCallback = () => {
            const responseEvent = this._makeResponseEvent(requestEvent, res.getStatusCode(), headers);
            this._stripe._emitter.emit("response", responseEvent);
            this._recordRequestMetrics(this._getRequestId(headers), responseEvent.elapsed);
          };
          const stream = res.toStream(streamCompleteCallback);
          this._addHeadersDirectlyToObject(stream, headers);
          return callback(null, stream);
        };
      },
      _jsonResponseHandler(requestEvent, callback) {
        return (res) => {
          const headers = res.getHeaders();
          const requestId = this._getRequestId(headers);
          const statusCode = res.getStatusCode();
          const responseEvent = this._makeResponseEvent(requestEvent, statusCode, headers);
          this._stripe._emitter.emit("response", responseEvent);
          res.toJSON().then((jsonResponse) => {
            if (jsonResponse.error) {
              let err;
              if (typeof jsonResponse.error === "string") {
                jsonResponse.error = {
                  type: jsonResponse.error,
                  message: jsonResponse.error_description
                };
              }
              jsonResponse.error.headers = headers;
              jsonResponse.error.statusCode = statusCode;
              jsonResponse.error.requestId = requestId;
              if (statusCode === 401) {
                err = new StripeAuthenticationError(jsonResponse.error);
              } else if (statusCode === 403) {
                err = new StripePermissionError(jsonResponse.error);
              } else if (statusCode === 429) {
                err = new StripeRateLimitError(jsonResponse.error);
              } else {
                err = StripeError.generate(jsonResponse.error);
              }
              throw err;
            }
            return jsonResponse;
          }, (e) => {
            throw new StripeAPIError({
              message: "Invalid JSON received from the Stripe API",
              exception: e,
              requestId: headers["request-id"]
            });
          }).then((jsonResponse) => {
            this._recordRequestMetrics(requestId, responseEvent.elapsed);
            const rawResponse = res.getRawResponse();
            this._addHeadersDirectlyToObject(rawResponse, headers);
            Object.defineProperty(jsonResponse, "lastResponse", {
              enumerable: false,
              writable: false,
              value: rawResponse
            });
            callback.call(this, null, jsonResponse);
          }, (e) => callback.call(this, e, null));
        };
      },
      _generateConnectionErrorMessage(requestRetries) {
        return `An error occurred with our connection to Stripe.${requestRetries > 0 ? ` Request was retried ${requestRetries} times.` : ""}`;
      },
      _shouldRetry(res, numRetries, maxRetries, error) {
        if (error && numRetries === 0 && HttpClient.CONNECTION_CLOSED_ERROR_CODES.includes(error.code)) {
          return true;
        }
        if (numRetries >= maxRetries) {
          return false;
        }
        if (!res) {
          return true;
        }
        if (res.getHeaders()["stripe-should-retry"] === "false") {
          return false;
        }
        if (res.getHeaders()["stripe-should-retry"] === "true") {
          return true;
        }
        if (res.getStatusCode() === 409) {
          return true;
        }
        if (res.getStatusCode() >= 500) {
          return true;
        }
        return false;
      },
      _getSleepTimeInMS(numRetries, retryAfter = null) {
        const initialNetworkRetryDelay = this._stripe.getInitialNetworkRetryDelay();
        const maxNetworkRetryDelay = this._stripe.getMaxNetworkRetryDelay();
        let sleepSeconds = Math.min(initialNetworkRetryDelay * Math.pow(numRetries - 1, 2), maxNetworkRetryDelay);
        sleepSeconds *= 0.5 * (1 + Math.random());
        sleepSeconds = Math.max(initialNetworkRetryDelay, sleepSeconds);
        if (Number.isInteger(retryAfter) && retryAfter <= MAX_RETRY_AFTER_WAIT) {
          sleepSeconds = Math.max(sleepSeconds, retryAfter);
        }
        return sleepSeconds * 1e3;
      },
      _getMaxNetworkRetries(settings = {}) {
        return settings.maxNetworkRetries && Number.isInteger(settings.maxNetworkRetries) ? settings.maxNetworkRetries : this._stripe.getMaxNetworkRetries();
      },
      _defaultIdempotencyKey(method, settings) {
        const maxRetries = this._getMaxNetworkRetries(settings);
        if (method === "POST" && maxRetries > 0) {
          return `stripe-node-retry-${utils.uuid4()}`;
        }
        return null;
      },
      _makeHeaders(auth, contentLength, apiVersion, clientUserAgent, method, userSuppliedHeaders, userSuppliedSettings) {
        const defaultHeaders = {
          Authorization: auth ? `Bearer ${auth}` : this._stripe.getApiField("auth"),
          Accept: "application/json",
          "Content-Type": "application/x-www-form-urlencoded",
          "User-Agent": this._getUserAgentString(),
          "X-Stripe-Client-User-Agent": clientUserAgent,
          "X-Stripe-Client-Telemetry": this._getTelemetryHeader(),
          "Stripe-Version": apiVersion,
          "Stripe-Account": this._stripe.getApiField("stripeAccount"),
          "Idempotency-Key": this._defaultIdempotencyKey(method, userSuppliedSettings)
        };
        const methodHasPayload = method == "POST" || method == "PUT" || method == "PATCH";
        if (methodHasPayload || contentLength) {
          if (!methodHasPayload) {
            utils.emitWarning(`${method} method had non-zero contentLength but no payload is expected for this verb`);
          }
          defaultHeaders["Content-Length"] = contentLength;
        }
        return Object.assign(utils.removeNullish(defaultHeaders), utils.normalizeHeaders(userSuppliedHeaders));
      },
      _getUserAgentString() {
        const packageVersion = this._stripe.getConstant("PACKAGE_VERSION");
        const appInfo = this._stripe._appInfo ? this._stripe.getAppInfoAsString() : "";
        return `Stripe/v1 NodeBindings/${packageVersion} ${appInfo}`.trim();
      },
      _getTelemetryHeader() {
        if (this._stripe.getTelemetryEnabled() && this._stripe._prevRequestMetrics.length > 0) {
          const metrics = this._stripe._prevRequestMetrics.shift();
          return JSON.stringify({
            last_request_metrics: metrics
          });
        }
      },
      _recordRequestMetrics(requestId, requestDurationMs) {
        if (this._stripe.getTelemetryEnabled() && requestId) {
          if (this._stripe._prevRequestMetrics.length > StripeResource.MAX_BUFFERED_REQUEST_METRICS) {
            utils.emitWarning("Request metrics buffer is full, dropping telemetry message.");
          } else {
            this._stripe._prevRequestMetrics.push({
              request_id: requestId,
              request_duration_ms: requestDurationMs
            });
          }
        }
      },
      _request(method, host, path, data, auth, options = {}, callback) {
        let requestData;
        const retryRequest = (requestFn, apiVersion, headers, requestRetries, retryAfter) => {
          return setTimeout(requestFn, this._getSleepTimeInMS(requestRetries, retryAfter), apiVersion, headers, requestRetries + 1);
        };
        const makeRequest = (apiVersion, headers, numRetries) => {
          const timeout = options.settings && options.settings.timeout && Number.isInteger(options.settings.timeout) && options.settings.timeout >= 0 ? options.settings.timeout : this._stripe.getApiField("timeout");
          const req = this._stripe.getApiField("httpClient").makeRequest(host || this._stripe.getApiField("host"), this._stripe.getApiField("port"), path, method, headers, requestData, this._stripe.getApiField("protocol"), timeout);
          const requestStartTime = Date.now();
          const requestEvent = utils.removeNullish({
            api_version: apiVersion,
            account: headers["Stripe-Account"],
            idempotency_key: headers["Idempotency-Key"],
            method,
            path,
            request_start_time: requestStartTime
          });
          const requestRetries = numRetries || 0;
          const maxRetries = this._getMaxNetworkRetries(options.settings || {});
          this._stripe._emitter.emit("request", requestEvent);
          req.then((res) => {
            if (this._shouldRetry(res, requestRetries, maxRetries)) {
              return retryRequest(makeRequest, apiVersion, headers, requestRetries, res.getHeaders()["retry-after"]);
            } else if (options.streaming && res.getStatusCode() < 400) {
              return this._streamingResponseHandler(requestEvent, callback)(res);
            } else {
              return this._jsonResponseHandler(requestEvent, callback)(res);
            }
          }).catch((error) => {
            if (this._shouldRetry(null, requestRetries, maxRetries, error)) {
              return retryRequest(makeRequest, apiVersion, headers, requestRetries, null);
            } else {
              const isTimeoutError = error.code && error.code === HttpClient.TIMEOUT_ERROR_CODE;
              return callback.call(this, new StripeConnectionError({
                message: isTimeoutError ? `Request aborted due to timeout being reached (${timeout}ms)` : this._generateConnectionErrorMessage(requestRetries),
                detail: error
              }));
            }
          });
        };
        const prepareAndMakeRequest = (error, data2) => {
          if (error) {
            return callback(error);
          }
          requestData = data2;
          this._stripe.getClientUserAgent((clientUserAgent) => {
            const apiVersion = this._stripe.getApiField("version");
            const headers = this._makeHeaders(auth, requestData.length, apiVersion, clientUserAgent, method, options.headers, options.settings);
            makeRequest(apiVersion, headers, 0);
          });
        };
        if (this.requestDataProcessor) {
          this.requestDataProcessor(method, data, options.headers, prepareAndMakeRequest);
        } else {
          prepareAndMakeRequest(null, utils.stringifyRequestData(data || {}));
        }
      }
    };
    module2.exports = StripeResource;
  }
});

// node_modules/stripe/lib/resources/Accounts.js
var require_Accounts = __commonJS({
  "node_modules/stripe/lib/resources/Accounts.js"(exports, module2) {
    "use strict";
    var StripeResource = require_StripeResource();
    var stripeMethod = StripeResource.method;
    module2.exports = StripeResource.extend({
      create: stripeMethod({
        method: "POST",
        fullPath: "/v1/accounts"
      }),
      retrieve(id) {
        if (typeof id === "string") {
          return stripeMethod({
            method: "GET",
            fullPath: "/v1/accounts/{id}"
          }).apply(this, arguments);
        } else {
          if (id === null || id === void 0) {
            [].shift.apply(arguments);
          }
          return stripeMethod({
            method: "GET",
            fullPath: "/v1/account"
          }).apply(this, arguments);
        }
      },
      update: stripeMethod({
        method: "POST",
        fullPath: "/v1/accounts/{account}"
      }),
      list: stripeMethod({
        method: "GET",
        fullPath: "/v1/accounts",
        methodType: "list"
      }),
      del: stripeMethod({
        method: "DELETE",
        fullPath: "/v1/accounts/{account}"
      }),
      reject: stripeMethod({
        method: "POST",
        fullPath: "/v1/accounts/{account}/reject"
      }),
      retrieveCapability: stripeMethod({
        method: "GET",
        fullPath: "/v1/accounts/{account}/capabilities/{capability}"
      }),
      updateCapability: stripeMethod({
        method: "POST",
        fullPath: "/v1/accounts/{account}/capabilities/{capability}"
      }),
      listCapabilities: stripeMethod({
        method: "GET",
        fullPath: "/v1/accounts/{account}/capabilities",
        methodType: "list"
      }),
      createExternalAccount: stripeMethod({
        method: "POST",
        fullPath: "/v1/accounts/{account}/external_accounts"
      }),
      retrieveExternalAccount: stripeMethod({
        method: "GET",
        fullPath: "/v1/accounts/{account}/external_accounts/{id}"
      }),
      updateExternalAccount: stripeMethod({
        method: "POST",
        fullPath: "/v1/accounts/{account}/external_accounts/{id}"
      }),
      listExternalAccounts: stripeMethod({
        method: "GET",
        fullPath: "/v1/accounts/{account}/external_accounts",
        methodType: "list"
      }),
      deleteExternalAccount: stripeMethod({
        method: "DELETE",
        fullPath: "/v1/accounts/{account}/external_accounts/{id}"
      }),
      createLoginLink: stripeMethod({
        method: "POST",
        fullPath: "/v1/accounts/{account}/login_links"
      }),
      createPerson: stripeMethod({
        method: "POST",
        fullPath: "/v1/accounts/{account}/persons"
      }),
      retrievePerson: stripeMethod({
        method: "GET",
        fullPath: "/v1/accounts/{account}/persons/{person}"
      }),
      updatePerson: stripeMethod({
        method: "POST",
        fullPath: "/v1/accounts/{account}/persons/{person}"
      }),
      listPersons: stripeMethod({
        method: "GET",
        fullPath: "/v1/accounts/{account}/persons",
        methodType: "list"
      }),
      deletePerson: stripeMethod({
        method: "DELETE",
        fullPath: "/v1/accounts/{account}/persons/{person}"
      })
    });
  }
});

// node_modules/stripe/lib/resources/AccountLinks.js
var require_AccountLinks = __commonJS({
  "node_modules/stripe/lib/resources/AccountLinks.js"(exports, module2) {
    "use strict";
    var StripeResource = require_StripeResource();
    var stripeMethod = StripeResource.method;
    module2.exports = StripeResource.extend({
      create: stripeMethod({
        method: "POST",
        fullPath: "/v1/account_links"
      })
    });
  }
});

// node_modules/stripe/lib/resources/ApplePayDomains.js
var require_ApplePayDomains = __commonJS({
  "node_modules/stripe/lib/resources/ApplePayDomains.js"(exports, module2) {
    "use strict";
    var StripeResource = require_StripeResource();
    var stripeMethod = StripeResource.method;
    module2.exports = StripeResource.extend({
      create: stripeMethod({
        method: "POST",
        fullPath: "/v1/apple_pay/domains"
      }),
      retrieve: stripeMethod({
        method: "GET",
        fullPath: "/v1/apple_pay/domains/{domain}"
      }),
      list: stripeMethod({
        method: "GET",
        fullPath: "/v1/apple_pay/domains",
        methodType: "list"
      }),
      del: stripeMethod({
        method: "DELETE",
        fullPath: "/v1/apple_pay/domains/{domain}"
      })
    });
  }
});

// node_modules/stripe/lib/resources/ApplicationFees.js
var require_ApplicationFees = __commonJS({
  "node_modules/stripe/lib/resources/ApplicationFees.js"(exports, module2) {
    "use strict";
    var StripeResource = require_StripeResource();
    var stripeMethod = StripeResource.method;
    module2.exports = StripeResource.extend({
      retrieve: stripeMethod({
        method: "GET",
        fullPath: "/v1/application_fees/{id}"
      }),
      list: stripeMethod({
        method: "GET",
        fullPath: "/v1/application_fees",
        methodType: "list"
      }),
      createRefund: stripeMethod({
        method: "POST",
        fullPath: "/v1/application_fees/{id}/refunds"
      }),
      retrieveRefund: stripeMethod({
        method: "GET",
        fullPath: "/v1/application_fees/{fee}/refunds/{id}"
      }),
      updateRefund: stripeMethod({
        method: "POST",
        fullPath: "/v1/application_fees/{fee}/refunds/{id}"
      }),
      listRefunds: stripeMethod({
        method: "GET",
        fullPath: "/v1/application_fees/{id}/refunds",
        methodType: "list"
      })
    });
  }
});

// node_modules/stripe/lib/resources/Balance.js
var require_Balance = __commonJS({
  "node_modules/stripe/lib/resources/Balance.js"(exports, module2) {
    "use strict";
    var StripeResource = require_StripeResource();
    var stripeMethod = StripeResource.method;
    module2.exports = StripeResource.extend({
      retrieve: stripeMethod({
        method: "GET",
        fullPath: "/v1/balance"
      })
    });
  }
});

// node_modules/stripe/lib/resources/BalanceTransactions.js
var require_BalanceTransactions = __commonJS({
  "node_modules/stripe/lib/resources/BalanceTransactions.js"(exports, module2) {
    "use strict";
    var StripeResource = require_StripeResource();
    var stripeMethod = StripeResource.method;
    module2.exports = StripeResource.extend({
      retrieve: stripeMethod({
        method: "GET",
        fullPath: "/v1/balance_transactions/{id}"
      }),
      list: stripeMethod({
        method: "GET",
        fullPath: "/v1/balance_transactions",
        methodType: "list"
      })
    });
  }
});

// node_modules/stripe/lib/resources/Charges.js
var require_Charges = __commonJS({
  "node_modules/stripe/lib/resources/Charges.js"(exports, module2) {
    "use strict";
    var StripeResource = require_StripeResource();
    var stripeMethod = StripeResource.method;
    module2.exports = StripeResource.extend({
      create: stripeMethod({
        method: "POST",
        fullPath: "/v1/charges"
      }),
      retrieve: stripeMethod({
        method: "GET",
        fullPath: "/v1/charges/{charge}"
      }),
      update: stripeMethod({
        method: "POST",
        fullPath: "/v1/charges/{charge}"
      }),
      list: stripeMethod({
        method: "GET",
        fullPath: "/v1/charges",
        methodType: "list"
      }),
      capture: stripeMethod({
        method: "POST",
        fullPath: "/v1/charges/{charge}/capture"
      }),
      search: stripeMethod({
        method: "GET",
        fullPath: "/v1/charges/search",
        methodType: "search"
      })
    });
  }
});

// node_modules/stripe/lib/resources/CountrySpecs.js
var require_CountrySpecs = __commonJS({
  "node_modules/stripe/lib/resources/CountrySpecs.js"(exports, module2) {
    "use strict";
    var StripeResource = require_StripeResource();
    var stripeMethod = StripeResource.method;
    module2.exports = StripeResource.extend({
      retrieve: stripeMethod({
        method: "GET",
        fullPath: "/v1/country_specs/{country}"
      }),
      list: stripeMethod({
        method: "GET",
        fullPath: "/v1/country_specs",
        methodType: "list"
      })
    });
  }
});

// node_modules/stripe/lib/resources/Coupons.js
var require_Coupons = __commonJS({
  "node_modules/stripe/lib/resources/Coupons.js"(exports, module2) {
    "use strict";
    var StripeResource = require_StripeResource();
    var stripeMethod = StripeResource.method;
    module2.exports = StripeResource.extend({
      create: stripeMethod({
        method: "POST",
        fullPath: "/v1/coupons"
      }),
      retrieve: stripeMethod({
        method: "GET",
        fullPath: "/v1/coupons/{coupon}"
      }),
      update: stripeMethod({
        method: "POST",
        fullPath: "/v1/coupons/{coupon}"
      }),
      list: stripeMethod({
        method: "GET",
        fullPath: "/v1/coupons",
        methodType: "list"
      }),
      del: stripeMethod({
        method: "DELETE",
        fullPath: "/v1/coupons/{coupon}"
      })
    });
  }
});

// node_modules/stripe/lib/resources/CreditNotes.js
var require_CreditNotes = __commonJS({
  "node_modules/stripe/lib/resources/CreditNotes.js"(exports, module2) {
    "use strict";
    var StripeResource = require_StripeResource();
    var stripeMethod = StripeResource.method;
    module2.exports = StripeResource.extend({
      create: stripeMethod({
        method: "POST",
        fullPath: "/v1/credit_notes"
      }),
      retrieve: stripeMethod({
        method: "GET",
        fullPath: "/v1/credit_notes/{id}"
      }),
      update: stripeMethod({
        method: "POST",
        fullPath: "/v1/credit_notes/{id}"
      }),
      list: stripeMethod({
        method: "GET",
        fullPath: "/v1/credit_notes",
        methodType: "list"
      }),
      listPreviewLineItems: stripeMethod({
        method: "GET",
        fullPath: "/v1/credit_notes/preview/lines",
        methodType: "list"
      }),
      preview: stripeMethod({
        method: "GET",
        fullPath: "/v1/credit_notes/preview"
      }),
      voidCreditNote: stripeMethod({
        method: "POST",
        fullPath: "/v1/credit_notes/{id}/void"
      }),
      listLineItems: stripeMethod({
        method: "GET",
        fullPath: "/v1/credit_notes/{credit_note}/lines",
        methodType: "list"
      })
    });
  }
});

// node_modules/stripe/lib/resources/Customers.js
var require_Customers = __commonJS({
  "node_modules/stripe/lib/resources/Customers.js"(exports, module2) {
    "use strict";
    var StripeResource = require_StripeResource();
    var stripeMethod = StripeResource.method;
    module2.exports = StripeResource.extend({
      create: stripeMethod({
        method: "POST",
        fullPath: "/v1/customers"
      }),
      retrieve: stripeMethod({
        method: "GET",
        fullPath: "/v1/customers/{customer}"
      }),
      update: stripeMethod({
        method: "POST",
        fullPath: "/v1/customers/{customer}"
      }),
      list: stripeMethod({
        method: "GET",
        fullPath: "/v1/customers",
        methodType: "list"
      }),
      del: stripeMethod({
        method: "DELETE",
        fullPath: "/v1/customers/{customer}"
      }),
      createFundingInstructions: stripeMethod({
        method: "POST",
        fullPath: "/v1/customers/{customer}/funding_instructions"
      }),
      deleteDiscount: stripeMethod({
        method: "DELETE",
        fullPath: "/v1/customers/{customer}/discount"
      }),
      listPaymentMethods: stripeMethod({
        method: "GET",
        fullPath: "/v1/customers/{customer}/payment_methods",
        methodType: "list"
      }),
      retrievePaymentMethod: stripeMethod({
        method: "GET",
        fullPath: "/v1/customers/{customer}/payment_methods/{payment_method}"
      }),
      search: stripeMethod({
        method: "GET",
        fullPath: "/v1/customers/search",
        methodType: "search"
      }),
      retrieveCashBalance: stripeMethod({
        method: "GET",
        fullPath: "/v1/customers/{customer}/cash_balance"
      }),
      updateCashBalance: stripeMethod({
        method: "POST",
        fullPath: "/v1/customers/{customer}/cash_balance"
      }),
      createBalanceTransaction: stripeMethod({
        method: "POST",
        fullPath: "/v1/customers/{customer}/balance_transactions"
      }),
      retrieveBalanceTransaction: stripeMethod({
        method: "GET",
        fullPath: "/v1/customers/{customer}/balance_transactions/{transaction}"
      }),
      updateBalanceTransaction: stripeMethod({
        method: "POST",
        fullPath: "/v1/customers/{customer}/balance_transactions/{transaction}"
      }),
      listBalanceTransactions: stripeMethod({
        method: "GET",
        fullPath: "/v1/customers/{customer}/balance_transactions",
        methodType: "list"
      }),
      retrieveCashBalanceTransaction: stripeMethod({
        method: "GET",
        fullPath: "/v1/customers/{customer}/cash_balance_transactions/{transaction}"
      }),
      listCashBalanceTransactions: stripeMethod({
        method: "GET",
        fullPath: "/v1/customers/{customer}/cash_balance_transactions",
        methodType: "list"
      }),
      createSource: stripeMethod({
        method: "POST",
        fullPath: "/v1/customers/{customer}/sources"
      }),
      retrieveSource: stripeMethod({
        method: "GET",
        fullPath: "/v1/customers/{customer}/sources/{id}"
      }),
      updateSource: stripeMethod({
        method: "POST",
        fullPath: "/v1/customers/{customer}/sources/{id}"
      }),
      listSources: stripeMethod({
        method: "GET",
        fullPath: "/v1/customers/{customer}/sources",
        methodType: "list"
      }),
      deleteSource: stripeMethod({
        method: "DELETE",
        fullPath: "/v1/customers/{customer}/sources/{id}"
      }),
      verifySource: stripeMethod({
        method: "POST",
        fullPath: "/v1/customers/{customer}/sources/{id}/verify"
      }),
      createTaxId: stripeMethod({
        method: "POST",
        fullPath: "/v1/customers/{customer}/tax_ids"
      }),
      retrieveTaxId: stripeMethod({
        method: "GET",
        fullPath: "/v1/customers/{customer}/tax_ids/{id}"
      }),
      listTaxIds: stripeMethod({
        method: "GET",
        fullPath: "/v1/customers/{customer}/tax_ids",
        methodType: "list"
      }),
      deleteTaxId: stripeMethod({
        method: "DELETE",
        fullPath: "/v1/customers/{customer}/tax_ids/{id}"
      })
    });
  }
});

// node_modules/stripe/lib/resources/Disputes.js
var require_Disputes = __commonJS({
  "node_modules/stripe/lib/resources/Disputes.js"(exports, module2) {
    "use strict";
    var StripeResource = require_StripeResource();
    var stripeMethod = StripeResource.method;
    module2.exports = StripeResource.extend({
      retrieve: stripeMethod({
        method: "GET",
        fullPath: "/v1/disputes/{dispute}"
      }),
      update: stripeMethod({
        method: "POST",
        fullPath: "/v1/disputes/{dispute}"
      }),
      list: stripeMethod({
        method: "GET",
        fullPath: "/v1/disputes",
        methodType: "list"
      }),
      close: stripeMethod({
        method: "POST",
        fullPath: "/v1/disputes/{dispute}/close"
      })
    });
  }
});

// node_modules/stripe/lib/resources/EphemeralKeys.js
var require_EphemeralKeys = __commonJS({
  "node_modules/stripe/lib/resources/EphemeralKeys.js"(exports, module2) {
    "use strict";
    var StripeResource = require_StripeResource();
    var stripeMethod = StripeResource.method;
    module2.exports = StripeResource.extend({
      create: stripeMethod({
        method: "POST",
        fullPath: "/v1/ephemeral_keys",
        validator: (data, options) => {
          if (!options.headers || !options.headers["Stripe-Version"]) {
            throw new Error("Passing apiVersion in a separate options hash is required to create an ephemeral key. See https://stripe.com/docs/api/versioning?lang=node");
          }
        }
      }),
      del: stripeMethod({
        method: "DELETE",
        fullPath: "/v1/ephemeral_keys/{key}"
      })
    });
  }
});

// node_modules/stripe/lib/resources/Events.js
var require_Events = __commonJS({
  "node_modules/stripe/lib/resources/Events.js"(exports, module2) {
    "use strict";
    var StripeResource = require_StripeResource();
    var stripeMethod = StripeResource.method;
    module2.exports = StripeResource.extend({
      retrieve: stripeMethod({
        method: "GET",
        fullPath: "/v1/events/{id}"
      }),
      list: stripeMethod({
        method: "GET",
        fullPath: "/v1/events",
        methodType: "list"
      })
    });
  }
});

// node_modules/stripe/lib/resources/ExchangeRates.js
var require_ExchangeRates = __commonJS({
  "node_modules/stripe/lib/resources/ExchangeRates.js"(exports, module2) {
    "use strict";
    var StripeResource = require_StripeResource();
    var stripeMethod = StripeResource.method;
    module2.exports = StripeResource.extend({
      retrieve: stripeMethod({
        method: "GET",
        fullPath: "/v1/exchange_rates/{rate_id}"
      }),
      list: stripeMethod({
        method: "GET",
        fullPath: "/v1/exchange_rates",
        methodType: "list"
      })
    });
  }
});

// node_modules/stripe/lib/multipart.js
var require_multipart = __commonJS({
  "node_modules/stripe/lib/multipart.js"(exports, module2) {
    "use strict";
    var utils = require_utils2();
    var _Error = require_Error();
    var { StripeError } = _Error;
    var StreamProcessingError = class extends StripeError {
    };
    var multipartDataGenerator = (method, data, headers) => {
      const segno = (Math.round(Math.random() * 1e16) + Math.round(Math.random() * 1e16)).toString();
      headers["Content-Type"] = `multipart/form-data; boundary=${segno}`;
      let buffer = Buffer.alloc(0);
      function push(l) {
        const prevBuffer = buffer;
        const newBuffer = l instanceof Buffer ? l : Buffer.from(l);
        buffer = Buffer.alloc(prevBuffer.length + newBuffer.length + 2);
        prevBuffer.copy(buffer);
        newBuffer.copy(buffer, prevBuffer.length);
        buffer.write("\r\n", buffer.length - 2);
      }
      function q(s) {
        return `"${s.replace(/"|"/g, "%22").replace(/\r\n|\r|\n/g, " ")}"`;
      }
      const flattenedData = utils.flattenAndStringify(data);
      for (const k in flattenedData) {
        const v = flattenedData[k];
        push(`--${segno}`);
        if (Object.prototype.hasOwnProperty.call(v, "data")) {
          const typedEntry = v;
          push(`Content-Disposition: form-data; name=${q(k)}; filename=${q(typedEntry.name || "blob")}`);
          push(`Content-Type: ${typedEntry.type || "application/octet-stream"}`);
          push("");
          push(typedEntry.data);
        } else {
          push(`Content-Disposition: form-data; name=${q(k)}`);
          push("");
          push(v);
        }
      }
      push(`--${segno}--`);
      return buffer;
    };
    var streamProcessor = (method, data, headers, callback) => {
      const bufferArray = [];
      data.file.data.on("data", (line) => {
        bufferArray.push(line);
      }).once("end", () => {
        const bufferData = Object.assign({}, data);
        bufferData.file.data = Buffer.concat(bufferArray);
        const buffer = multipartDataGenerator(method, bufferData, headers);
        callback(null, buffer);
      }).on("error", (err) => {
        callback(new StreamProcessingError({
          message: "An error occurred while attempting to process the file for upload.",
          detail: err
        }), null);
      });
    };
    var multipartRequestDataProcessor = (method, data, headers, callback) => {
      data = data || {};
      if (method !== "POST") {
        return callback(null, utils.stringifyRequestData(data));
      }
      const isStream = utils.checkForStream(data);
      if (isStream) {
        return streamProcessor(method, data, headers, callback);
      }
      const buffer = multipartDataGenerator(method, data, headers);
      return callback(null, buffer);
    };
    module2.exports = {
      multipartRequestDataProcessor
    };
  }
});

// node_modules/stripe/lib/resources/Files.js
var require_Files = __commonJS({
  "node_modules/stripe/lib/resources/Files.js"(exports, module2) {
    "use strict";
    var { multipartRequestDataProcessor } = require_multipart();
    var StripeResource = require_StripeResource();
    var stripeMethod = StripeResource.method;
    module2.exports = StripeResource.extend({
      create: stripeMethod({
        method: "POST",
        fullPath: "/v1/files",
        headers: {
          "Content-Type": "multipart/form-data"
        },
        host: "files.stripe.com"
      }),
      retrieve: stripeMethod({
        method: "GET",
        fullPath: "/v1/files/{file}"
      }),
      list: stripeMethod({
        method: "GET",
        fullPath: "/v1/files",
        methodType: "list"
      }),
      requestDataProcessor: multipartRequestDataProcessor
    });
  }
});

// node_modules/stripe/lib/resources/FileLinks.js
var require_FileLinks = __commonJS({
  "node_modules/stripe/lib/resources/FileLinks.js"(exports, module2) {
    "use strict";
    var StripeResource = require_StripeResource();
    var stripeMethod = StripeResource.method;
    module2.exports = StripeResource.extend({
      create: stripeMethod({
        method: "POST",
        fullPath: "/v1/file_links"
      }),
      retrieve: stripeMethod({
        method: "GET",
        fullPath: "/v1/file_links/{link}"
      }),
      update: stripeMethod({
        method: "POST",
        fullPath: "/v1/file_links/{link}"
      }),
      list: stripeMethod({
        method: "GET",
        fullPath: "/v1/file_links",
        methodType: "list"
      })
    });
  }
});

// node_modules/stripe/lib/resources/Invoices.js
var require_Invoices = __commonJS({
  "node_modules/stripe/lib/resources/Invoices.js"(exports, module2) {
    "use strict";
    var StripeResource = require_StripeResource();
    var stripeMethod = StripeResource.method;
    module2.exports = StripeResource.extend({
      create: stripeMethod({
        method: "POST",
        fullPath: "/v1/invoices"
      }),
      retrieve: stripeMethod({
        method: "GET",
        fullPath: "/v1/invoices/{invoice}"
      }),
      update: stripeMethod({
        method: "POST",
        fullPath: "/v1/invoices/{invoice}"
      }),
      list: stripeMethod({
        method: "GET",
        fullPath: "/v1/invoices",
        methodType: "list"
      }),
      del: stripeMethod({
        method: "DELETE",
        fullPath: "/v1/invoices/{invoice}"
      }),
      finalizeInvoice: stripeMethod({
        method: "POST",
        fullPath: "/v1/invoices/{invoice}/finalize"
      }),
      listUpcomingLines: stripeMethod({
        method: "GET",
        fullPath: "/v1/invoices/upcoming/lines",
        methodType: "list"
      }),
      markUncollectible: stripeMethod({
        method: "POST",
        fullPath: "/v1/invoices/{invoice}/mark_uncollectible"
      }),
      pay: stripeMethod({
        method: "POST",
        fullPath: "/v1/invoices/{invoice}/pay"
      }),
      retrieveUpcoming: stripeMethod({
        method: "GET",
        fullPath: "/v1/invoices/upcoming"
      }),
      search: stripeMethod({
        method: "GET",
        fullPath: "/v1/invoices/search",
        methodType: "search"
      }),
      sendInvoice: stripeMethod({
        method: "POST",
        fullPath: "/v1/invoices/{invoice}/send"
      }),
      voidInvoice: stripeMethod({
        method: "POST",
        fullPath: "/v1/invoices/{invoice}/void"
      }),
      listLineItems: stripeMethod({
        method: "GET",
        fullPath: "/v1/invoices/{invoice}/lines",
        methodType: "list"
      })
    });
  }
});

// node_modules/stripe/lib/resources/InvoiceItems.js
var require_InvoiceItems = __commonJS({
  "node_modules/stripe/lib/resources/InvoiceItems.js"(exports, module2) {
    "use strict";
    var StripeResource = require_StripeResource();
    var stripeMethod = StripeResource.method;
    module2.exports = StripeResource.extend({
      create: stripeMethod({
        method: "POST",
        fullPath: "/v1/invoiceitems"
      }),
      retrieve: stripeMethod({
        method: "GET",
        fullPath: "/v1/invoiceitems/{invoiceitem}"
      }),
      update: stripeMethod({
        method: "POST",
        fullPath: "/v1/invoiceitems/{invoiceitem}"
      }),
      list: stripeMethod({
        method: "GET",
        fullPath: "/v1/invoiceitems",
        methodType: "list"
      }),
      del: stripeMethod({
        method: "DELETE",
        fullPath: "/v1/invoiceitems/{invoiceitem}"
      })
    });
  }
});

// node_modules/stripe/lib/resources/Mandates.js
var require_Mandates = __commonJS({
  "node_modules/stripe/lib/resources/Mandates.js"(exports, module2) {
    "use strict";
    var StripeResource = require_StripeResource();
    var stripeMethod = StripeResource.method;
    module2.exports = StripeResource.extend({
      retrieve: stripeMethod({
        method: "GET",
        fullPath: "/v1/mandates/{mandate}"
      })
    });
  }
});

// node_modules/stripe/lib/resources/OAuth.js
var require_OAuth = __commonJS({
  "node_modules/stripe/lib/resources/OAuth.js"(exports, module2) {
    "use strict";
    var StripeResource = require_StripeResource();
    var stripeMethod = StripeResource.method;
    var utils = require_utils2();
    var oAuthHost = "connect.stripe.com";
    module2.exports = StripeResource.extend({
      basePath: "/",
      authorizeUrl(params, options) {
        params = params || {};
        options = options || {};
        let path = "oauth/authorize";
        if (options.express) {
          path = `express/${path}`;
        }
        if (!params.response_type) {
          params.response_type = "code";
        }
        if (!params.client_id) {
          params.client_id = this._stripe.getClientId();
        }
        if (!params.scope) {
          params.scope = "read_write";
        }
        return `https://${oAuthHost}/${path}?${utils.stringifyRequestData(params)}`;
      },
      token: stripeMethod({
        method: "POST",
        path: "oauth/token",
        host: oAuthHost
      }),
      deauthorize(spec) {
        if (!spec.client_id) {
          spec.client_id = this._stripe.getClientId();
        }
        return stripeMethod({
          method: "POST",
          path: "oauth/deauthorize",
          host: oAuthHost
        }).apply(this, arguments);
      }
    });
  }
});

// node_modules/stripe/lib/resources/PaymentIntents.js
var require_PaymentIntents = __commonJS({
  "node_modules/stripe/lib/resources/PaymentIntents.js"(exports, module2) {
    "use strict";
    var StripeResource = require_StripeResource();
    var stripeMethod = StripeResource.method;
    module2.exports = StripeResource.extend({
      create: stripeMethod({
        method: "POST",
        fullPath: "/v1/payment_intents"
      }),
      retrieve: stripeMethod({
        method: "GET",
        fullPath: "/v1/payment_intents/{intent}"
      }),
      update: stripeMethod({
        method: "POST",
        fullPath: "/v1/payment_intents/{intent}"
      }),
      list: stripeMethod({
        method: "GET",
        fullPath: "/v1/payment_intents",
        methodType: "list"
      }),
      applyCustomerBalance: stripeMethod({
        method: "POST",
        fullPath: "/v1/payment_intents/{intent}/apply_customer_balance"
      }),
      cancel: stripeMethod({
        method: "POST",
        fullPath: "/v1/payment_intents/{intent}/cancel"
      }),
      capture: stripeMethod({
        method: "POST",
        fullPath: "/v1/payment_intents/{intent}/capture"
      }),
      confirm: stripeMethod({
        method: "POST",
        fullPath: "/v1/payment_intents/{intent}/confirm"
      }),
      incrementAuthorization: stripeMethod({
        method: "POST",
        fullPath: "/v1/payment_intents/{intent}/increment_authorization"
      }),
      search: stripeMethod({
        method: "GET",
        fullPath: "/v1/payment_intents/search",
        methodType: "search"
      }),
      verifyMicrodeposits: stripeMethod({
        method: "POST",
        fullPath: "/v1/payment_intents/{intent}/verify_microdeposits"
      })
    });
  }
});

// node_modules/stripe/lib/resources/PaymentLinks.js
var require_PaymentLinks = __commonJS({
  "node_modules/stripe/lib/resources/PaymentLinks.js"(exports, module2) {
    "use strict";
    var StripeResource = require_StripeResource();
    var stripeMethod = StripeResource.method;
    module2.exports = StripeResource.extend({
      create: stripeMethod({
        method: "POST",
        fullPath: "/v1/payment_links"
      }),
      retrieve: stripeMethod({
        method: "GET",
        fullPath: "/v1/payment_links/{payment_link}"
      }),
      update: stripeMethod({
        method: "POST",
        fullPath: "/v1/payment_links/{payment_link}"
      }),
      list: stripeMethod({
        method: "GET",
        fullPath: "/v1/payment_links",
        methodType: "list"
      }),
      listLineItems: stripeMethod({
        method: "GET",
        fullPath: "/v1/payment_links/{payment_link}/line_items",
        methodType: "list"
      })
    });
  }
});

// node_modules/stripe/lib/resources/PaymentMethods.js
var require_PaymentMethods = __commonJS({
  "node_modules/stripe/lib/resources/PaymentMethods.js"(exports, module2) {
    "use strict";
    var StripeResource = require_StripeResource();
    var stripeMethod = StripeResource.method;
    module2.exports = StripeResource.extend({
      create: stripeMethod({
        method: "POST",
        fullPath: "/v1/payment_methods"
      }),
      retrieve: stripeMethod({
        method: "GET",
        fullPath: "/v1/payment_methods/{payment_method}"
      }),
      update: stripeMethod({
        method: "POST",
        fullPath: "/v1/payment_methods/{payment_method}"
      }),
      list: stripeMethod({
        method: "GET",
        fullPath: "/v1/payment_methods",
        methodType: "list"
      }),
      attach: stripeMethod({
        method: "POST",
        fullPath: "/v1/payment_methods/{payment_method}/attach"
      }),
      detach: stripeMethod({
        method: "POST",
        fullPath: "/v1/payment_methods/{payment_method}/detach"
      })
    });
  }
});

// node_modules/stripe/lib/resources/Payouts.js
var require_Payouts = __commonJS({
  "node_modules/stripe/lib/resources/Payouts.js"(exports, module2) {
    "use strict";
    var StripeResource = require_StripeResource();
    var stripeMethod = StripeResource.method;
    module2.exports = StripeResource.extend({
      create: stripeMethod({
        method: "POST",
        fullPath: "/v1/payouts"
      }),
      retrieve: stripeMethod({
        method: "GET",
        fullPath: "/v1/payouts/{payout}"
      }),
      update: stripeMethod({
        method: "POST",
        fullPath: "/v1/payouts/{payout}"
      }),
      list: stripeMethod({
        method: "GET",
        fullPath: "/v1/payouts",
        methodType: "list"
      }),
      cancel: stripeMethod({
        method: "POST",
        fullPath: "/v1/payouts/{payout}/cancel"
      }),
      reverse: stripeMethod({
        method: "POST",
        fullPath: "/v1/payouts/{payout}/reverse"
      })
    });
  }
});

// node_modules/stripe/lib/resources/Plans.js
var require_Plans = __commonJS({
  "node_modules/stripe/lib/resources/Plans.js"(exports, module2) {
    "use strict";
    var StripeResource = require_StripeResource();
    var stripeMethod = StripeResource.method;
    module2.exports = StripeResource.extend({
      create: stripeMethod({
        method: "POST",
        fullPath: "/v1/plans"
      }),
      retrieve: stripeMethod({
        method: "GET",
        fullPath: "/v1/plans/{plan}"
      }),
      update: stripeMethod({
        method: "POST",
        fullPath: "/v1/plans/{plan}"
      }),
      list: stripeMethod({
        method: "GET",
        fullPath: "/v1/plans",
        methodType: "list"
      }),
      del: stripeMethod({
        method: "DELETE",
        fullPath: "/v1/plans/{plan}"
      })
    });
  }
});

// node_modules/stripe/lib/resources/Prices.js
var require_Prices = __commonJS({
  "node_modules/stripe/lib/resources/Prices.js"(exports, module2) {
    "use strict";
    var StripeResource = require_StripeResource();
    var stripeMethod = StripeResource.method;
    module2.exports = StripeResource.extend({
      create: stripeMethod({
        method: "POST",
        fullPath: "/v1/prices"
      }),
      retrieve: stripeMethod({
        method: "GET",
        fullPath: "/v1/prices/{price}"
      }),
      update: stripeMethod({
        method: "POST",
        fullPath: "/v1/prices/{price}"
      }),
      list: stripeMethod({
        method: "GET",
        fullPath: "/v1/prices",
        methodType: "list"
      }),
      search: stripeMethod({
        method: "GET",
        fullPath: "/v1/prices/search",
        methodType: "search"
      })
    });
  }
});

// node_modules/stripe/lib/resources/Products.js
var require_Products = __commonJS({
  "node_modules/stripe/lib/resources/Products.js"(exports, module2) {
    "use strict";
    var StripeResource = require_StripeResource();
    var stripeMethod = StripeResource.method;
    module2.exports = StripeResource.extend({
      create: stripeMethod({
        method: "POST",
        fullPath: "/v1/products"
      }),
      retrieve: stripeMethod({
        method: "GET",
        fullPath: "/v1/products/{id}"
      }),
      update: stripeMethod({
        method: "POST",
        fullPath: "/v1/products/{id}"
      }),
      list: stripeMethod({
        method: "GET",
        fullPath: "/v1/products",
        methodType: "list"
      }),
      del: stripeMethod({
        method: "DELETE",
        fullPath: "/v1/products/{id}"
      }),
      search: stripeMethod({
        method: "GET",
        fullPath: "/v1/products/search",
        methodType: "search"
      })
    });
  }
});

// node_modules/stripe/lib/resources/PromotionCodes.js
var require_PromotionCodes = __commonJS({
  "node_modules/stripe/lib/resources/PromotionCodes.js"(exports, module2) {
    "use strict";
    var StripeResource = require_StripeResource();
    var stripeMethod = StripeResource.method;
    module2.exports = StripeResource.extend({
      create: stripeMethod({
        method: "POST",
        fullPath: "/v1/promotion_codes"
      }),
      retrieve: stripeMethod({
        method: "GET",
        fullPath: "/v1/promotion_codes/{promotion_code}"
      }),
      update: stripeMethod({
        method: "POST",
        fullPath: "/v1/promotion_codes/{promotion_code}"
      }),
      list: stripeMethod({
        method: "GET",
        fullPath: "/v1/promotion_codes",
        methodType: "list"
      })
    });
  }
});

// node_modules/stripe/lib/resources/Quotes.js
var require_Quotes = __commonJS({
  "node_modules/stripe/lib/resources/Quotes.js"(exports, module2) {
    "use strict";
    var StripeResource = require_StripeResource();
    var stripeMethod = StripeResource.method;
    module2.exports = StripeResource.extend({
      create: stripeMethod({
        method: "POST",
        fullPath: "/v1/quotes"
      }),
      retrieve: stripeMethod({
        method: "GET",
        fullPath: "/v1/quotes/{quote}"
      }),
      update: stripeMethod({
        method: "POST",
        fullPath: "/v1/quotes/{quote}"
      }),
      list: stripeMethod({
        method: "GET",
        fullPath: "/v1/quotes",
        methodType: "list"
      }),
      accept: stripeMethod({
        method: "POST",
        fullPath: "/v1/quotes/{quote}/accept"
      }),
      cancel: stripeMethod({
        method: "POST",
        fullPath: "/v1/quotes/{quote}/cancel"
      }),
      finalizeQuote: stripeMethod({
        method: "POST",
        fullPath: "/v1/quotes/{quote}/finalize"
      }),
      listComputedUpfrontLineItems: stripeMethod({
        method: "GET",
        fullPath: "/v1/quotes/{quote}/computed_upfront_line_items",
        methodType: "list"
      }),
      listLineItems: stripeMethod({
        method: "GET",
        fullPath: "/v1/quotes/{quote}/line_items",
        methodType: "list"
      }),
      pdf: stripeMethod({
        host: "files.stripe.com",
        method: "GET",
        fullPath: "/v1/quotes/{quote}/pdf",
        streaming: true
      })
    });
  }
});

// node_modules/stripe/lib/resources/Refunds.js
var require_Refunds = __commonJS({
  "node_modules/stripe/lib/resources/Refunds.js"(exports, module2) {
    "use strict";
    var StripeResource = require_StripeResource();
    var stripeMethod = StripeResource.method;
    module2.exports = StripeResource.extend({
      create: stripeMethod({
        method: "POST",
        fullPath: "/v1/refunds"
      }),
      retrieve: stripeMethod({
        method: "GET",
        fullPath: "/v1/refunds/{refund}"
      }),
      update: stripeMethod({
        method: "POST",
        fullPath: "/v1/refunds/{refund}"
      }),
      list: stripeMethod({
        method: "GET",
        fullPath: "/v1/refunds",
        methodType: "list"
      }),
      cancel: stripeMethod({
        method: "POST",
        fullPath: "/v1/refunds/{refund}/cancel"
      })
    });
  }
});

// node_modules/stripe/lib/resources/Reviews.js
var require_Reviews = __commonJS({
  "node_modules/stripe/lib/resources/Reviews.js"(exports, module2) {
    "use strict";
    var StripeResource = require_StripeResource();
    var stripeMethod = StripeResource.method;
    module2.exports = StripeResource.extend({
      retrieve: stripeMethod({
        method: "GET",
        fullPath: "/v1/reviews/{review}"
      }),
      list: stripeMethod({
        method: "GET",
        fullPath: "/v1/reviews",
        methodType: "list"
      }),
      approve: stripeMethod({
        method: "POST",
        fullPath: "/v1/reviews/{review}/approve"
      })
    });
  }
});

// node_modules/stripe/lib/resources/SetupAttempts.js
var require_SetupAttempts = __commonJS({
  "node_modules/stripe/lib/resources/SetupAttempts.js"(exports, module2) {
    "use strict";
    var StripeResource = require_StripeResource();
    var stripeMethod = StripeResource.method;
    module2.exports = StripeResource.extend({
      list: stripeMethod({
        method: "GET",
        fullPath: "/v1/setup_attempts",
        methodType: "list"
      })
    });
  }
});

// node_modules/stripe/lib/resources/SetupIntents.js
var require_SetupIntents = __commonJS({
  "node_modules/stripe/lib/resources/SetupIntents.js"(exports, module2) {
    "use strict";
    var StripeResource = require_StripeResource();
    var stripeMethod = StripeResource.method;
    module2.exports = StripeResource.extend({
      create: stripeMethod({
        method: "POST",
        fullPath: "/v1/setup_intents"
      }),
      retrieve: stripeMethod({
        method: "GET",
        fullPath: "/v1/setup_intents/{intent}"
      }),
      update: stripeMethod({
        method: "POST",
        fullPath: "/v1/setup_intents/{intent}"
      }),
      list: stripeMethod({
        method: "GET",
        fullPath: "/v1/setup_intents",
        methodType: "list"
      }),
      cancel: stripeMethod({
        method: "POST",
        fullPath: "/v1/setup_intents/{intent}/cancel"
      }),
      confirm: stripeMethod({
        method: "POST",
        fullPath: "/v1/setup_intents/{intent}/confirm"
      }),
      verifyMicrodeposits: stripeMethod({
        method: "POST",
        fullPath: "/v1/setup_intents/{intent}/verify_microdeposits"
      })
    });
  }
});

// node_modules/stripe/lib/resources/ShippingRates.js
var require_ShippingRates = __commonJS({
  "node_modules/stripe/lib/resources/ShippingRates.js"(exports, module2) {
    "use strict";
    var StripeResource = require_StripeResource();
    var stripeMethod = StripeResource.method;
    module2.exports = StripeResource.extend({
      create: stripeMethod({
        method: "POST",
        fullPath: "/v1/shipping_rates"
      }),
      retrieve: stripeMethod({
        method: "GET",
        fullPath: "/v1/shipping_rates/{shipping_rate_token}"
      }),
      update: stripeMethod({
        method: "POST",
        fullPath: "/v1/shipping_rates/{shipping_rate_token}"
      }),
      list: stripeMethod({
        method: "GET",
        fullPath: "/v1/shipping_rates",
        methodType: "list"
      })
    });
  }
});

// node_modules/stripe/lib/resources/Sources.js
var require_Sources = __commonJS({
  "node_modules/stripe/lib/resources/Sources.js"(exports, module2) {
    "use strict";
    var StripeResource = require_StripeResource();
    var stripeMethod = StripeResource.method;
    module2.exports = StripeResource.extend({
      create: stripeMethod({
        method: "POST",
        fullPath: "/v1/sources"
      }),
      retrieve: stripeMethod({
        method: "GET",
        fullPath: "/v1/sources/{source}"
      }),
      update: stripeMethod({
        method: "POST",
        fullPath: "/v1/sources/{source}"
      }),
      listSourceTransactions: stripeMethod({
        method: "GET",
        fullPath: "/v1/sources/{source}/source_transactions",
        methodType: "list"
      }),
      verify: stripeMethod({
        method: "POST",
        fullPath: "/v1/sources/{source}/verify"
      })
    });
  }
});

// node_modules/stripe/lib/resources/Subscriptions.js
var require_Subscriptions = __commonJS({
  "node_modules/stripe/lib/resources/Subscriptions.js"(exports, module2) {
    "use strict";
    var StripeResource = require_StripeResource();
    var stripeMethod = StripeResource.method;
    module2.exports = StripeResource.extend({
      create: stripeMethod({
        method: "POST",
        fullPath: "/v1/subscriptions"
      }),
      retrieve: stripeMethod({
        method: "GET",
        fullPath: "/v1/subscriptions/{subscription_exposed_id}"
      }),
      update: stripeMethod({
        method: "POST",
        fullPath: "/v1/subscriptions/{subscription_exposed_id}"
      }),
      list: stripeMethod({
        method: "GET",
        fullPath: "/v1/subscriptions",
        methodType: "list"
      }),
      cancel: stripeMethod({
        method: "DELETE",
        fullPath: "/v1/subscriptions/{subscription_exposed_id}"
      }),
      del: stripeMethod({
        method: "DELETE",
        fullPath: "/v1/subscriptions/{subscription_exposed_id}"
      }),
      deleteDiscount: stripeMethod({
        method: "DELETE",
        fullPath: "/v1/subscriptions/{subscription_exposed_id}/discount"
      }),
      search: stripeMethod({
        method: "GET",
        fullPath: "/v1/subscriptions/search",
        methodType: "search"
      })
    });
  }
});

// node_modules/stripe/lib/resources/SubscriptionItems.js
var require_SubscriptionItems = __commonJS({
  "node_modules/stripe/lib/resources/SubscriptionItems.js"(exports, module2) {
    "use strict";
    var StripeResource = require_StripeResource();
    var stripeMethod = StripeResource.method;
    module2.exports = StripeResource.extend({
      create: stripeMethod({
        method: "POST",
        fullPath: "/v1/subscription_items"
      }),
      retrieve: stripeMethod({
        method: "GET",
        fullPath: "/v1/subscription_items/{item}"
      }),
      update: stripeMethod({
        method: "POST",
        fullPath: "/v1/subscription_items/{item}"
      }),
      list: stripeMethod({
        method: "GET",
        fullPath: "/v1/subscription_items",
        methodType: "list"
      }),
      del: stripeMethod({
        method: "DELETE",
        fullPath: "/v1/subscription_items/{item}"
      }),
      createUsageRecord: stripeMethod({
        method: "POST",
        fullPath: "/v1/subscription_items/{subscription_item}/usage_records"
      }),
      listUsageRecordSummaries: stripeMethod({
        method: "GET",
        fullPath: "/v1/subscription_items/{subscription_item}/usage_record_summaries",
        methodType: "list"
      })
    });
  }
});

// node_modules/stripe/lib/resources/SubscriptionSchedules.js
var require_SubscriptionSchedules = __commonJS({
  "node_modules/stripe/lib/resources/SubscriptionSchedules.js"(exports, module2) {
    "use strict";
    var StripeResource = require_StripeResource();
    var stripeMethod = StripeResource.method;
    module2.exports = StripeResource.extend({
      create: stripeMethod({
        method: "POST",
        fullPath: "/v1/subscription_schedules"
      }),
      retrieve: stripeMethod({
        method: "GET",
        fullPath: "/v1/subscription_schedules/{schedule}"
      }),
      update: stripeMethod({
        method: "POST",
        fullPath: "/v1/subscription_schedules/{schedule}"
      }),
      list: stripeMethod({
        method: "GET",
        fullPath: "/v1/subscription_schedules",
        methodType: "list"
      }),
      cancel: stripeMethod({
        method: "POST",
        fullPath: "/v1/subscription_schedules/{schedule}/cancel"
      }),
      release: stripeMethod({
        method: "POST",
        fullPath: "/v1/subscription_schedules/{schedule}/release"
      })
    });
  }
});

// node_modules/stripe/lib/resources/TaxCodes.js
var require_TaxCodes = __commonJS({
  "node_modules/stripe/lib/resources/TaxCodes.js"(exports, module2) {
    "use strict";
    var StripeResource = require_StripeResource();
    var stripeMethod = StripeResource.method;
    module2.exports = StripeResource.extend({
      retrieve: stripeMethod({
        method: "GET",
        fullPath: "/v1/tax_codes/{id}"
      }),
      list: stripeMethod({
        method: "GET",
        fullPath: "/v1/tax_codes",
        methodType: "list"
      })
    });
  }
});

// node_modules/stripe/lib/resources/TaxRates.js
var require_TaxRates = __commonJS({
  "node_modules/stripe/lib/resources/TaxRates.js"(exports, module2) {
    "use strict";
    var StripeResource = require_StripeResource();
    var stripeMethod = StripeResource.method;
    module2.exports = StripeResource.extend({
      create: stripeMethod({
        method: "POST",
        fullPath: "/v1/tax_rates"
      }),
      retrieve: stripeMethod({
        method: "GET",
        fullPath: "/v1/tax_rates/{tax_rate}"
      }),
      update: stripeMethod({
        method: "POST",
        fullPath: "/v1/tax_rates/{tax_rate}"
      }),
      list: stripeMethod({
        method: "GET",
        fullPath: "/v1/tax_rates",
        methodType: "list"
      })
    });
  }
});

// node_modules/stripe/lib/resources/Tokens.js
var require_Tokens = __commonJS({
  "node_modules/stripe/lib/resources/Tokens.js"(exports, module2) {
    "use strict";
    var StripeResource = require_StripeResource();
    var stripeMethod = StripeResource.method;
    module2.exports = StripeResource.extend({
      create: stripeMethod({
        method: "POST",
        fullPath: "/v1/tokens"
      }),
      retrieve: stripeMethod({
        method: "GET",
        fullPath: "/v1/tokens/{token}"
      })
    });
  }
});

// node_modules/stripe/lib/resources/Topups.js
var require_Topups = __commonJS({
  "node_modules/stripe/lib/resources/Topups.js"(exports, module2) {
    "use strict";
    var StripeResource = require_StripeResource();
    var stripeMethod = StripeResource.method;
    module2.exports = StripeResource.extend({
      create: stripeMethod({
        method: "POST",
        fullPath: "/v1/topups"
      }),
      retrieve: stripeMethod({
        method: "GET",
        fullPath: "/v1/topups/{topup}"
      }),
      update: stripeMethod({
        method: "POST",
        fullPath: "/v1/topups/{topup}"
      }),
      list: stripeMethod({
        method: "GET",
        fullPath: "/v1/topups",
        methodType: "list"
      }),
      cancel: stripeMethod({
        method: "POST",
        fullPath: "/v1/topups/{topup}/cancel"
      })
    });
  }
});

// node_modules/stripe/lib/resources/Transfers.js
var require_Transfers = __commonJS({
  "node_modules/stripe/lib/resources/Transfers.js"(exports, module2) {
    "use strict";
    var StripeResource = require_StripeResource();
    var stripeMethod = StripeResource.method;
    module2.exports = StripeResource.extend({
      create: stripeMethod({
        method: "POST",
        fullPath: "/v1/transfers"
      }),
      retrieve: stripeMethod({
        method: "GET",
        fullPath: "/v1/transfers/{transfer}"
      }),
      update: stripeMethod({
        method: "POST",
        fullPath: "/v1/transfers/{transfer}"
      }),
      list: stripeMethod({
        method: "GET",
        fullPath: "/v1/transfers",
        methodType: "list"
      }),
      createReversal: stripeMethod({
        method: "POST",
        fullPath: "/v1/transfers/{id}/reversals"
      }),
      retrieveReversal: stripeMethod({
        method: "GET",
        fullPath: "/v1/transfers/{transfer}/reversals/{id}"
      }),
      updateReversal: stripeMethod({
        method: "POST",
        fullPath: "/v1/transfers/{transfer}/reversals/{id}"
      }),
      listReversals: stripeMethod({
        method: "GET",
        fullPath: "/v1/transfers/{id}/reversals",
        methodType: "list"
      })
    });
  }
});

// node_modules/stripe/lib/resources/WebhookEndpoints.js
var require_WebhookEndpoints = __commonJS({
  "node_modules/stripe/lib/resources/WebhookEndpoints.js"(exports, module2) {
    "use strict";
    var StripeResource = require_StripeResource();
    var stripeMethod = StripeResource.method;
    module2.exports = StripeResource.extend({
      create: stripeMethod({
        method: "POST",
        fullPath: "/v1/webhook_endpoints"
      }),
      retrieve: stripeMethod({
        method: "GET",
        fullPath: "/v1/webhook_endpoints/{webhook_endpoint}"
      }),
      update: stripeMethod({
        method: "POST",
        fullPath: "/v1/webhook_endpoints/{webhook_endpoint}"
      }),
      list: stripeMethod({
        method: "GET",
        fullPath: "/v1/webhook_endpoints",
        methodType: "list"
      }),
      del: stripeMethod({
        method: "DELETE",
        fullPath: "/v1/webhook_endpoints/{webhook_endpoint}"
      })
    });
  }
});

// node_modules/stripe/lib/resources/Apps/Secrets.js
var require_Secrets = __commonJS({
  "node_modules/stripe/lib/resources/Apps/Secrets.js"(exports, module2) {
    "use strict";
    var StripeResource = require_StripeResource();
    var stripeMethod = StripeResource.method;
    module2.exports = StripeResource.extend({
      create: stripeMethod({
        method: "POST",
        fullPath: "/v1/apps/secrets"
      }),
      list: stripeMethod({
        method: "GET",
        fullPath: "/v1/apps/secrets",
        methodType: "list"
      }),
      deleteWhere: stripeMethod({
        method: "POST",
        fullPath: "/v1/apps/secrets/delete"
      }),
      find: stripeMethod({
        method: "GET",
        fullPath: "/v1/apps/secrets/find"
      })
    });
  }
});

// node_modules/stripe/lib/resources/BillingPortal/Configurations.js
var require_Configurations = __commonJS({
  "node_modules/stripe/lib/resources/BillingPortal/Configurations.js"(exports, module2) {
    "use strict";
    var StripeResource = require_StripeResource();
    var stripeMethod = StripeResource.method;
    module2.exports = StripeResource.extend({
      create: stripeMethod({
        method: "POST",
        fullPath: "/v1/billing_portal/configurations"
      }),
      retrieve: stripeMethod({
        method: "GET",
        fullPath: "/v1/billing_portal/configurations/{configuration}"
      }),
      update: stripeMethod({
        method: "POST",
        fullPath: "/v1/billing_portal/configurations/{configuration}"
      }),
      list: stripeMethod({
        method: "GET",
        fullPath: "/v1/billing_portal/configurations",
        methodType: "list"
      })
    });
  }
});

// node_modules/stripe/lib/resources/BillingPortal/Sessions.js
var require_Sessions = __commonJS({
  "node_modules/stripe/lib/resources/BillingPortal/Sessions.js"(exports, module2) {
    "use strict";
    var StripeResource = require_StripeResource();
    var stripeMethod = StripeResource.method;
    module2.exports = StripeResource.extend({
      create: stripeMethod({
        method: "POST",
        fullPath: "/v1/billing_portal/sessions"
      })
    });
  }
});

// node_modules/stripe/lib/resources/Checkout/Sessions.js
var require_Sessions2 = __commonJS({
  "node_modules/stripe/lib/resources/Checkout/Sessions.js"(exports, module2) {
    "use strict";
    var StripeResource = require_StripeResource();
    var stripeMethod = StripeResource.method;
    module2.exports = StripeResource.extend({
      create: stripeMethod({
        method: "POST",
        fullPath: "/v1/checkout/sessions"
      }),
      retrieve: stripeMethod({
        method: "GET",
        fullPath: "/v1/checkout/sessions/{session}"
      }),
      list: stripeMethod({
        method: "GET",
        fullPath: "/v1/checkout/sessions",
        methodType: "list"
      }),
      expire: stripeMethod({
        method: "POST",
        fullPath: "/v1/checkout/sessions/{session}/expire"
      }),
      listLineItems: stripeMethod({
        method: "GET",
        fullPath: "/v1/checkout/sessions/{session}/line_items",
        methodType: "list"
      })
    });
  }
});

// node_modules/stripe/lib/resources/FinancialConnections/Accounts.js
var require_Accounts2 = __commonJS({
  "node_modules/stripe/lib/resources/FinancialConnections/Accounts.js"(exports, module2) {
    "use strict";
    var StripeResource = require_StripeResource();
    var stripeMethod = StripeResource.method;
    module2.exports = StripeResource.extend({
      retrieve: stripeMethod({
        method: "GET",
        fullPath: "/v1/financial_connections/accounts/{account}"
      }),
      list: stripeMethod({
        method: "GET",
        fullPath: "/v1/financial_connections/accounts",
        methodType: "list"
      }),
      disconnect: stripeMethod({
        method: "POST",
        fullPath: "/v1/financial_connections/accounts/{account}/disconnect"
      }),
      listOwners: stripeMethod({
        method: "GET",
        fullPath: "/v1/financial_connections/accounts/{account}/owners",
        methodType: "list"
      }),
      refresh: stripeMethod({
        method: "POST",
        fullPath: "/v1/financial_connections/accounts/{account}/refresh"
      })
    });
  }
});

// node_modules/stripe/lib/resources/FinancialConnections/Sessions.js
var require_Sessions3 = __commonJS({
  "node_modules/stripe/lib/resources/FinancialConnections/Sessions.js"(exports, module2) {
    "use strict";
    var StripeResource = require_StripeResource();
    var stripeMethod = StripeResource.method;
    module2.exports = StripeResource.extend({
      create: stripeMethod({
        method: "POST",
        fullPath: "/v1/financial_connections/sessions"
      }),
      retrieve: stripeMethod({
        method: "GET",
        fullPath: "/v1/financial_connections/sessions/{session}"
      })
    });
  }
});

// node_modules/stripe/lib/resources/Identity/VerificationReports.js
var require_VerificationReports = __commonJS({
  "node_modules/stripe/lib/resources/Identity/VerificationReports.js"(exports, module2) {
    "use strict";
    var StripeResource = require_StripeResource();
    var stripeMethod = StripeResource.method;
    module2.exports = StripeResource.extend({
      retrieve: stripeMethod({
        method: "GET",
        fullPath: "/v1/identity/verification_reports/{report}"
      }),
      list: stripeMethod({
        method: "GET",
        fullPath: "/v1/identity/verification_reports",
        methodType: "list"
      })
    });
  }
});

// node_modules/stripe/lib/resources/Identity/VerificationSessions.js
var require_VerificationSessions = __commonJS({
  "node_modules/stripe/lib/resources/Identity/VerificationSessions.js"(exports, module2) {
    "use strict";
    var StripeResource = require_StripeResource();
    var stripeMethod = StripeResource.method;
    module2.exports = StripeResource.extend({
      create: stripeMethod({
        method: "POST",
        fullPath: "/v1/identity/verification_sessions"
      }),
      retrieve: stripeMethod({
        method: "GET",
        fullPath: "/v1/identity/verification_sessions/{session}"
      }),
      update: stripeMethod({
        method: "POST",
        fullPath: "/v1/identity/verification_sessions/{session}"
      }),
      list: stripeMethod({
        method: "GET",
        fullPath: "/v1/identity/verification_sessions",
        methodType: "list"
      }),
      cancel: stripeMethod({
        method: "POST",
        fullPath: "/v1/identity/verification_sessions/{session}/cancel"
      }),
      redact: stripeMethod({
        method: "POST",
        fullPath: "/v1/identity/verification_sessions/{session}/redact"
      })
    });
  }
});

// node_modules/stripe/lib/resources/Issuing/Authorizations.js
var require_Authorizations = __commonJS({
  "node_modules/stripe/lib/resources/Issuing/Authorizations.js"(exports, module2) {
    "use strict";
    var StripeResource = require_StripeResource();
    var stripeMethod = StripeResource.method;
    module2.exports = StripeResource.extend({
      retrieve: stripeMethod({
        method: "GET",
        fullPath: "/v1/issuing/authorizations/{authorization}"
      }),
      update: stripeMethod({
        method: "POST",
        fullPath: "/v1/issuing/authorizations/{authorization}"
      }),
      list: stripeMethod({
        method: "GET",
        fullPath: "/v1/issuing/authorizations",
        methodType: "list"
      }),
      approve: stripeMethod({
        method: "POST",
        fullPath: "/v1/issuing/authorizations/{authorization}/approve"
      }),
      decline: stripeMethod({
        method: "POST",
        fullPath: "/v1/issuing/authorizations/{authorization}/decline"
      })
    });
  }
});

// node_modules/stripe/lib/resources/Issuing/Cards.js
var require_Cards = __commonJS({
  "node_modules/stripe/lib/resources/Issuing/Cards.js"(exports, module2) {
    "use strict";
    var StripeResource = require_StripeResource();
    var stripeMethod = StripeResource.method;
    module2.exports = StripeResource.extend({
      create: stripeMethod({
        method: "POST",
        fullPath: "/v1/issuing/cards"
      }),
      retrieve: stripeMethod({
        method: "GET",
        fullPath: "/v1/issuing/cards/{card}"
      }),
      update: stripeMethod({
        method: "POST",
        fullPath: "/v1/issuing/cards/{card}"
      }),
      list: stripeMethod({
        method: "GET",
        fullPath: "/v1/issuing/cards",
        methodType: "list"
      })
    });
  }
});

// node_modules/stripe/lib/resources/Issuing/Cardholders.js
var require_Cardholders = __commonJS({
  "node_modules/stripe/lib/resources/Issuing/Cardholders.js"(exports, module2) {
    "use strict";
    var StripeResource = require_StripeResource();
    var stripeMethod = StripeResource.method;
    module2.exports = StripeResource.extend({
      create: stripeMethod({
        method: "POST",
        fullPath: "/v1/issuing/cardholders"
      }),
      retrieve: stripeMethod({
        method: "GET",
        fullPath: "/v1/issuing/cardholders/{cardholder}"
      }),
      update: stripeMethod({
        method: "POST",
        fullPath: "/v1/issuing/cardholders/{cardholder}"
      }),
      list: stripeMethod({
        method: "GET",
        fullPath: "/v1/issuing/cardholders",
        methodType: "list"
      })
    });
  }
});

// node_modules/stripe/lib/resources/Issuing/Disputes.js
var require_Disputes2 = __commonJS({
  "node_modules/stripe/lib/resources/Issuing/Disputes.js"(exports, module2) {
    "use strict";
    var StripeResource = require_StripeResource();
    var stripeMethod = StripeResource.method;
    module2.exports = StripeResource.extend({
      create: stripeMethod({
        method: "POST",
        fullPath: "/v1/issuing/disputes"
      }),
      retrieve: stripeMethod({
        method: "GET",
        fullPath: "/v1/issuing/disputes/{dispute}"
      }),
      update: stripeMethod({
        method: "POST",
        fullPath: "/v1/issuing/disputes/{dispute}"
      }),
      list: stripeMethod({
        method: "GET",
        fullPath: "/v1/issuing/disputes",
        methodType: "list"
      }),
      submit: stripeMethod({
        method: "POST",
        fullPath: "/v1/issuing/disputes/{dispute}/submit"
      })
    });
  }
});

// node_modules/stripe/lib/resources/Issuing/Transactions.js
var require_Transactions = __commonJS({
  "node_modules/stripe/lib/resources/Issuing/Transactions.js"(exports, module2) {
    "use strict";
    var StripeResource = require_StripeResource();
    var stripeMethod = StripeResource.method;
    module2.exports = StripeResource.extend({
      retrieve: stripeMethod({
        method: "GET",
        fullPath: "/v1/issuing/transactions/{transaction}"
      }),
      update: stripeMethod({
        method: "POST",
        fullPath: "/v1/issuing/transactions/{transaction}"
      }),
      list: stripeMethod({
        method: "GET",
        fullPath: "/v1/issuing/transactions",
        methodType: "list"
      })
    });
  }
});

// node_modules/stripe/lib/resources/Radar/EarlyFraudWarnings.js
var require_EarlyFraudWarnings = __commonJS({
  "node_modules/stripe/lib/resources/Radar/EarlyFraudWarnings.js"(exports, module2) {
    "use strict";
    var StripeResource = require_StripeResource();
    var stripeMethod = StripeResource.method;
    module2.exports = StripeResource.extend({
      retrieve: stripeMethod({
        method: "GET",
        fullPath: "/v1/radar/early_fraud_warnings/{early_fraud_warning}"
      }),
      list: stripeMethod({
        method: "GET",
        fullPath: "/v1/radar/early_fraud_warnings",
        methodType: "list"
      })
    });
  }
});

// node_modules/stripe/lib/resources/Radar/ValueLists.js
var require_ValueLists = __commonJS({
  "node_modules/stripe/lib/resources/Radar/ValueLists.js"(exports, module2) {
    "use strict";
    var StripeResource = require_StripeResource();
    var stripeMethod = StripeResource.method;
    module2.exports = StripeResource.extend({
      create: stripeMethod({
        method: "POST",
        fullPath: "/v1/radar/value_lists"
      }),
      retrieve: stripeMethod({
        method: "GET",
        fullPath: "/v1/radar/value_lists/{value_list}"
      }),
      update: stripeMethod({
        method: "POST",
        fullPath: "/v1/radar/value_lists/{value_list}"
      }),
      list: stripeMethod({
        method: "GET",
        fullPath: "/v1/radar/value_lists",
        methodType: "list"
      }),
      del: stripeMethod({
        method: "DELETE",
        fullPath: "/v1/radar/value_lists/{value_list}"
      })
    });
  }
});

// node_modules/stripe/lib/resources/Radar/ValueListItems.js
var require_ValueListItems = __commonJS({
  "node_modules/stripe/lib/resources/Radar/ValueListItems.js"(exports, module2) {
    "use strict";
    var StripeResource = require_StripeResource();
    var stripeMethod = StripeResource.method;
    module2.exports = StripeResource.extend({
      create: stripeMethod({
        method: "POST",
        fullPath: "/v1/radar/value_list_items"
      }),
      retrieve: stripeMethod({
        method: "GET",
        fullPath: "/v1/radar/value_list_items/{item}"
      }),
      list: stripeMethod({
        method: "GET",
        fullPath: "/v1/radar/value_list_items",
        methodType: "list"
      }),
      del: stripeMethod({
        method: "DELETE",
        fullPath: "/v1/radar/value_list_items/{item}"
      })
    });
  }
});

// node_modules/stripe/lib/resources/Reporting/ReportRuns.js
var require_ReportRuns = __commonJS({
  "node_modules/stripe/lib/resources/Reporting/ReportRuns.js"(exports, module2) {
    "use strict";
    var StripeResource = require_StripeResource();
    var stripeMethod = StripeResource.method;
    module2.exports = StripeResource.extend({
      create: stripeMethod({
        method: "POST",
        fullPath: "/v1/reporting/report_runs"
      }),
      retrieve: stripeMethod({
        method: "GET",
        fullPath: "/v1/reporting/report_runs/{report_run}"
      }),
      list: stripeMethod({
        method: "GET",
        fullPath: "/v1/reporting/report_runs",
        methodType: "list"
      })
    });
  }
});

// node_modules/stripe/lib/resources/Reporting/ReportTypes.js
var require_ReportTypes = __commonJS({
  "node_modules/stripe/lib/resources/Reporting/ReportTypes.js"(exports, module2) {
    "use strict";
    var StripeResource = require_StripeResource();
    var stripeMethod = StripeResource.method;
    module2.exports = StripeResource.extend({
      retrieve: stripeMethod({
        method: "GET",
        fullPath: "/v1/reporting/report_types/{report_type}"
      }),
      list: stripeMethod({
        method: "GET",
        fullPath: "/v1/reporting/report_types",
        methodType: "list"
      })
    });
  }
});

// node_modules/stripe/lib/resources/Sigma/ScheduledQueryRuns.js
var require_ScheduledQueryRuns = __commonJS({
  "node_modules/stripe/lib/resources/Sigma/ScheduledQueryRuns.js"(exports, module2) {
    "use strict";
    var StripeResource = require_StripeResource();
    var stripeMethod = StripeResource.method;
    module2.exports = StripeResource.extend({
      retrieve: stripeMethod({
        method: "GET",
        fullPath: "/v1/sigma/scheduled_query_runs/{scheduled_query_run}"
      }),
      list: stripeMethod({
        method: "GET",
        fullPath: "/v1/sigma/scheduled_query_runs",
        methodType: "list"
      })
    });
  }
});

// node_modules/stripe/lib/resources/Terminal/Configurations.js
var require_Configurations2 = __commonJS({
  "node_modules/stripe/lib/resources/Terminal/Configurations.js"(exports, module2) {
    "use strict";
    var StripeResource = require_StripeResource();
    var stripeMethod = StripeResource.method;
    module2.exports = StripeResource.extend({
      create: stripeMethod({
        method: "POST",
        fullPath: "/v1/terminal/configurations"
      }),
      retrieve: stripeMethod({
        method: "GET",
        fullPath: "/v1/terminal/configurations/{configuration}"
      }),
      update: stripeMethod({
        method: "POST",
        fullPath: "/v1/terminal/configurations/{configuration}"
      }),
      list: stripeMethod({
        method: "GET",
        fullPath: "/v1/terminal/configurations",
        methodType: "list"
      }),
      del: stripeMethod({
        method: "DELETE",
        fullPath: "/v1/terminal/configurations/{configuration}"
      })
    });
  }
});

// node_modules/stripe/lib/resources/Terminal/ConnectionTokens.js
var require_ConnectionTokens = __commonJS({
  "node_modules/stripe/lib/resources/Terminal/ConnectionTokens.js"(exports, module2) {
    "use strict";
    var StripeResource = require_StripeResource();
    var stripeMethod = StripeResource.method;
    module2.exports = StripeResource.extend({
      create: stripeMethod({
        method: "POST",
        fullPath: "/v1/terminal/connection_tokens"
      })
    });
  }
});

// node_modules/stripe/lib/resources/Terminal/Locations.js
var require_Locations = __commonJS({
  "node_modules/stripe/lib/resources/Terminal/Locations.js"(exports, module2) {
    "use strict";
    var StripeResource = require_StripeResource();
    var stripeMethod = StripeResource.method;
    module2.exports = StripeResource.extend({
      create: stripeMethod({
        method: "POST",
        fullPath: "/v1/terminal/locations"
      }),
      retrieve: stripeMethod({
        method: "GET",
        fullPath: "/v1/terminal/locations/{location}"
      }),
      update: stripeMethod({
        method: "POST",
        fullPath: "/v1/terminal/locations/{location}"
      }),
      list: stripeMethod({
        method: "GET",
        fullPath: "/v1/terminal/locations",
        methodType: "list"
      }),
      del: stripeMethod({
        method: "DELETE",
        fullPath: "/v1/terminal/locations/{location}"
      })
    });
  }
});

// node_modules/stripe/lib/resources/Terminal/Readers.js
var require_Readers = __commonJS({
  "node_modules/stripe/lib/resources/Terminal/Readers.js"(exports, module2) {
    "use strict";
    var StripeResource = require_StripeResource();
    var stripeMethod = StripeResource.method;
    module2.exports = StripeResource.extend({
      create: stripeMethod({
        method: "POST",
        fullPath: "/v1/terminal/readers"
      }),
      retrieve: stripeMethod({
        method: "GET",
        fullPath: "/v1/terminal/readers/{reader}"
      }),
      update: stripeMethod({
        method: "POST",
        fullPath: "/v1/terminal/readers/{reader}"
      }),
      list: stripeMethod({
        method: "GET",
        fullPath: "/v1/terminal/readers",
        methodType: "list"
      }),
      del: stripeMethod({
        method: "DELETE",
        fullPath: "/v1/terminal/readers/{reader}"
      }),
      cancelAction: stripeMethod({
        method: "POST",
        fullPath: "/v1/terminal/readers/{reader}/cancel_action"
      }),
      processPaymentIntent: stripeMethod({
        method: "POST",
        fullPath: "/v1/terminal/readers/{reader}/process_payment_intent"
      }),
      processSetupIntent: stripeMethod({
        method: "POST",
        fullPath: "/v1/terminal/readers/{reader}/process_setup_intent"
      }),
      setReaderDisplay: stripeMethod({
        method: "POST",
        fullPath: "/v1/terminal/readers/{reader}/set_reader_display"
      })
    });
  }
});

// node_modules/stripe/lib/resources/TestHelpers/Customers.js
var require_Customers2 = __commonJS({
  "node_modules/stripe/lib/resources/TestHelpers/Customers.js"(exports, module2) {
    "use strict";
    var StripeResource = require_StripeResource();
    var stripeMethod = StripeResource.method;
    module2.exports = StripeResource.extend({
      fundCashBalance: stripeMethod({
        method: "POST",
        fullPath: "/v1/test_helpers/customers/{customer}/fund_cash_balance"
      })
    });
  }
});

// node_modules/stripe/lib/resources/TestHelpers/Refunds.js
var require_Refunds2 = __commonJS({
  "node_modules/stripe/lib/resources/TestHelpers/Refunds.js"(exports, module2) {
    "use strict";
    var StripeResource = require_StripeResource();
    var stripeMethod = StripeResource.method;
    module2.exports = StripeResource.extend({
      expire: stripeMethod({
        method: "POST",
        fullPath: "/v1/test_helpers/refunds/{refund}/expire"
      })
    });
  }
});

// node_modules/stripe/lib/resources/TestHelpers/TestClocks.js
var require_TestClocks = __commonJS({
  "node_modules/stripe/lib/resources/TestHelpers/TestClocks.js"(exports, module2) {
    "use strict";
    var StripeResource = require_StripeResource();
    var stripeMethod = StripeResource.method;
    module2.exports = StripeResource.extend({
      create: stripeMethod({
        method: "POST",
        fullPath: "/v1/test_helpers/test_clocks"
      }),
      retrieve: stripeMethod({
        method: "GET",
        fullPath: "/v1/test_helpers/test_clocks/{test_clock}"
      }),
      list: stripeMethod({
        method: "GET",
        fullPath: "/v1/test_helpers/test_clocks",
        methodType: "list"
      }),
      del: stripeMethod({
        method: "DELETE",
        fullPath: "/v1/test_helpers/test_clocks/{test_clock}"
      }),
      advance: stripeMethod({
        method: "POST",
        fullPath: "/v1/test_helpers/test_clocks/{test_clock}/advance"
      })
    });
  }
});

// node_modules/stripe/lib/resources/TestHelpers/Issuing/Cards.js
var require_Cards2 = __commonJS({
  "node_modules/stripe/lib/resources/TestHelpers/Issuing/Cards.js"(exports, module2) {
    "use strict";
    var StripeResource = require_StripeResource();
    var stripeMethod = StripeResource.method;
    module2.exports = StripeResource.extend({
      deliverCard: stripeMethod({
        method: "POST",
        fullPath: "/v1/test_helpers/issuing/cards/{card}/shipping/deliver"
      }),
      failCard: stripeMethod({
        method: "POST",
        fullPath: "/v1/test_helpers/issuing/cards/{card}/shipping/fail"
      }),
      returnCard: stripeMethod({
        method: "POST",
        fullPath: "/v1/test_helpers/issuing/cards/{card}/shipping/return"
      }),
      shipCard: stripeMethod({
        method: "POST",
        fullPath: "/v1/test_helpers/issuing/cards/{card}/shipping/ship"
      })
    });
  }
});

// node_modules/stripe/lib/resources/TestHelpers/Terminal/Readers.js
var require_Readers2 = __commonJS({
  "node_modules/stripe/lib/resources/TestHelpers/Terminal/Readers.js"(exports, module2) {
    "use strict";
    var StripeResource = require_StripeResource();
    var stripeMethod = StripeResource.method;
    module2.exports = StripeResource.extend({
      presentPaymentMethod: stripeMethod({
        method: "POST",
        fullPath: "/v1/test_helpers/terminal/readers/{reader}/present_payment_method"
      })
    });
  }
});

// node_modules/stripe/lib/resources/TestHelpers/Treasury/InboundTransfers.js
var require_InboundTransfers = __commonJS({
  "node_modules/stripe/lib/resources/TestHelpers/Treasury/InboundTransfers.js"(exports, module2) {
    "use strict";
    var StripeResource = require_StripeResource();
    var stripeMethod = StripeResource.method;
    module2.exports = StripeResource.extend({
      fail: stripeMethod({
        method: "POST",
        fullPath: "/v1/test_helpers/treasury/inbound_transfers/{id}/fail"
      }),
      returnInboundTransfer: stripeMethod({
        method: "POST",
        fullPath: "/v1/test_helpers/treasury/inbound_transfers/{id}/return"
      }),
      succeed: stripeMethod({
        method: "POST",
        fullPath: "/v1/test_helpers/treasury/inbound_transfers/{id}/succeed"
      })
    });
  }
});

// node_modules/stripe/lib/resources/TestHelpers/Treasury/OutboundPayments.js
var require_OutboundPayments = __commonJS({
  "node_modules/stripe/lib/resources/TestHelpers/Treasury/OutboundPayments.js"(exports, module2) {
    "use strict";
    var StripeResource = require_StripeResource();
    var stripeMethod = StripeResource.method;
    module2.exports = StripeResource.extend({
      fail: stripeMethod({
        method: "POST",
        fullPath: "/v1/test_helpers/treasury/outbound_payments/{id}/fail"
      }),
      post: stripeMethod({
        method: "POST",
        fullPath: "/v1/test_helpers/treasury/outbound_payments/{id}/post"
      }),
      returnOutboundPayment: stripeMethod({
        method: "POST",
        fullPath: "/v1/test_helpers/treasury/outbound_payments/{id}/return"
      })
    });
  }
});

// node_modules/stripe/lib/resources/TestHelpers/Treasury/OutboundTransfers.js
var require_OutboundTransfers = __commonJS({
  "node_modules/stripe/lib/resources/TestHelpers/Treasury/OutboundTransfers.js"(exports, module2) {
    "use strict";
    var StripeResource = require_StripeResource();
    var stripeMethod = StripeResource.method;
    module2.exports = StripeResource.extend({
      fail: stripeMethod({
        method: "POST",
        fullPath: "/v1/test_helpers/treasury/outbound_transfers/{outbound_transfer}/fail"
      }),
      post: stripeMethod({
        method: "POST",
        fullPath: "/v1/test_helpers/treasury/outbound_transfers/{outbound_transfer}/post"
      }),
      returnOutboundTransfer: stripeMethod({
        method: "POST",
        fullPath: "/v1/test_helpers/treasury/outbound_transfers/{outbound_transfer}/return"
      })
    });
  }
});

// node_modules/stripe/lib/resources/TestHelpers/Treasury/ReceivedCredits.js
var require_ReceivedCredits = __commonJS({
  "node_modules/stripe/lib/resources/TestHelpers/Treasury/ReceivedCredits.js"(exports, module2) {
    "use strict";
    var StripeResource = require_StripeResource();
    var stripeMethod = StripeResource.method;
    module2.exports = StripeResource.extend({
      create: stripeMethod({
        method: "POST",
        fullPath: "/v1/test_helpers/treasury/received_credits"
      })
    });
  }
});

// node_modules/stripe/lib/resources/TestHelpers/Treasury/ReceivedDebits.js
var require_ReceivedDebits = __commonJS({
  "node_modules/stripe/lib/resources/TestHelpers/Treasury/ReceivedDebits.js"(exports, module2) {
    "use strict";
    var StripeResource = require_StripeResource();
    var stripeMethod = StripeResource.method;
    module2.exports = StripeResource.extend({
      create: stripeMethod({
        method: "POST",
        fullPath: "/v1/test_helpers/treasury/received_debits"
      })
    });
  }
});

// node_modules/stripe/lib/resources/Treasury/CreditReversals.js
var require_CreditReversals = __commonJS({
  "node_modules/stripe/lib/resources/Treasury/CreditReversals.js"(exports, module2) {
    "use strict";
    var StripeResource = require_StripeResource();
    var stripeMethod = StripeResource.method;
    module2.exports = StripeResource.extend({
      create: stripeMethod({
        method: "POST",
        fullPath: "/v1/treasury/credit_reversals"
      }),
      retrieve: stripeMethod({
        method: "GET",
        fullPath: "/v1/treasury/credit_reversals/{credit_reversal}"
      }),
      list: stripeMethod({
        method: "GET",
        fullPath: "/v1/treasury/credit_reversals",
        methodType: "list"
      })
    });
  }
});

// node_modules/stripe/lib/resources/Treasury/DebitReversals.js
var require_DebitReversals = __commonJS({
  "node_modules/stripe/lib/resources/Treasury/DebitReversals.js"(exports, module2) {
    "use strict";
    var StripeResource = require_StripeResource();
    var stripeMethod = StripeResource.method;
    module2.exports = StripeResource.extend({
      create: stripeMethod({
        method: "POST",
        fullPath: "/v1/treasury/debit_reversals"
      }),
      retrieve: stripeMethod({
        method: "GET",
        fullPath: "/v1/treasury/debit_reversals/{debit_reversal}"
      }),
      list: stripeMethod({
        method: "GET",
        fullPath: "/v1/treasury/debit_reversals",
        methodType: "list"
      })
    });
  }
});

// node_modules/stripe/lib/resources/Treasury/FinancialAccounts.js
var require_FinancialAccounts = __commonJS({
  "node_modules/stripe/lib/resources/Treasury/FinancialAccounts.js"(exports, module2) {
    "use strict";
    var StripeResource = require_StripeResource();
    var stripeMethod = StripeResource.method;
    module2.exports = StripeResource.extend({
      create: stripeMethod({
        method: "POST",
        fullPath: "/v1/treasury/financial_accounts"
      }),
      retrieve: stripeMethod({
        method: "GET",
        fullPath: "/v1/treasury/financial_accounts/{financial_account}"
      }),
      update: stripeMethod({
        method: "POST",
        fullPath: "/v1/treasury/financial_accounts/{financial_account}"
      }),
      list: stripeMethod({
        method: "GET",
        fullPath: "/v1/treasury/financial_accounts",
        methodType: "list"
      }),
      retrieveFeatures: stripeMethod({
        method: "GET",
        fullPath: "/v1/treasury/financial_accounts/{financial_account}/features"
      }),
      updateFeatures: stripeMethod({
        method: "POST",
        fullPath: "/v1/treasury/financial_accounts/{financial_account}/features"
      })
    });
  }
});

// node_modules/stripe/lib/resources/Treasury/InboundTransfers.js
var require_InboundTransfers2 = __commonJS({
  "node_modules/stripe/lib/resources/Treasury/InboundTransfers.js"(exports, module2) {
    "use strict";
    var StripeResource = require_StripeResource();
    var stripeMethod = StripeResource.method;
    module2.exports = StripeResource.extend({
      create: stripeMethod({
        method: "POST",
        fullPath: "/v1/treasury/inbound_transfers"
      }),
      retrieve: stripeMethod({
        method: "GET",
        fullPath: "/v1/treasury/inbound_transfers/{id}"
      }),
      list: stripeMethod({
        method: "GET",
        fullPath: "/v1/treasury/inbound_transfers",
        methodType: "list"
      }),
      cancel: stripeMethod({
        method: "POST",
        fullPath: "/v1/treasury/inbound_transfers/{inbound_transfer}/cancel"
      })
    });
  }
});

// node_modules/stripe/lib/resources/Treasury/OutboundPayments.js
var require_OutboundPayments2 = __commonJS({
  "node_modules/stripe/lib/resources/Treasury/OutboundPayments.js"(exports, module2) {
    "use strict";
    var StripeResource = require_StripeResource();
    var stripeMethod = StripeResource.method;
    module2.exports = StripeResource.extend({
      create: stripeMethod({
        method: "POST",
        fullPath: "/v1/treasury/outbound_payments"
      }),
      retrieve: stripeMethod({
        method: "GET",
        fullPath: "/v1/treasury/outbound_payments/{id}"
      }),
      list: stripeMethod({
        method: "GET",
        fullPath: "/v1/treasury/outbound_payments",
        methodType: "list"
      }),
      cancel: stripeMethod({
        method: "POST",
        fullPath: "/v1/treasury/outbound_payments/{id}/cancel"
      })
    });
  }
});

// node_modules/stripe/lib/resources/Treasury/OutboundTransfers.js
var require_OutboundTransfers2 = __commonJS({
  "node_modules/stripe/lib/resources/Treasury/OutboundTransfers.js"(exports, module2) {
    "use strict";
    var StripeResource = require_StripeResource();
    var stripeMethod = StripeResource.method;
    module2.exports = StripeResource.extend({
      create: stripeMethod({
        method: "POST",
        fullPath: "/v1/treasury/outbound_transfers"
      }),
      retrieve: stripeMethod({
        method: "GET",
        fullPath: "/v1/treasury/outbound_transfers/{outbound_transfer}"
      }),
      list: stripeMethod({
        method: "GET",
        fullPath: "/v1/treasury/outbound_transfers",
        methodType: "list"
      }),
      cancel: stripeMethod({
        method: "POST",
        fullPath: "/v1/treasury/outbound_transfers/{outbound_transfer}/cancel"
      })
    });
  }
});

// node_modules/stripe/lib/resources/Treasury/ReceivedCredits.js
var require_ReceivedCredits2 = __commonJS({
  "node_modules/stripe/lib/resources/Treasury/ReceivedCredits.js"(exports, module2) {
    "use strict";
    var StripeResource = require_StripeResource();
    var stripeMethod = StripeResource.method;
    module2.exports = StripeResource.extend({
      retrieve: stripeMethod({
        method: "GET",
        fullPath: "/v1/treasury/received_credits/{id}"
      }),
      list: stripeMethod({
        method: "GET",
        fullPath: "/v1/treasury/received_credits",
        methodType: "list"
      })
    });
  }
});

// node_modules/stripe/lib/resources/Treasury/ReceivedDebits.js
var require_ReceivedDebits2 = __commonJS({
  "node_modules/stripe/lib/resources/Treasury/ReceivedDebits.js"(exports, module2) {
    "use strict";
    var StripeResource = require_StripeResource();
    var stripeMethod = StripeResource.method;
    module2.exports = StripeResource.extend({
      retrieve: stripeMethod({
        method: "GET",
        fullPath: "/v1/treasury/received_debits/{id}"
      }),
      list: stripeMethod({
        method: "GET",
        fullPath: "/v1/treasury/received_debits",
        methodType: "list"
      })
    });
  }
});

// node_modules/stripe/lib/resources/Treasury/Transactions.js
var require_Transactions2 = __commonJS({
  "node_modules/stripe/lib/resources/Treasury/Transactions.js"(exports, module2) {
    "use strict";
    var StripeResource = require_StripeResource();
    var stripeMethod = StripeResource.method;
    module2.exports = StripeResource.extend({
      retrieve: stripeMethod({
        method: "GET",
        fullPath: "/v1/treasury/transactions/{id}"
      }),
      list: stripeMethod({
        method: "GET",
        fullPath: "/v1/treasury/transactions",
        methodType: "list"
      })
    });
  }
});

// node_modules/stripe/lib/resources/Treasury/TransactionEntries.js
var require_TransactionEntries = __commonJS({
  "node_modules/stripe/lib/resources/Treasury/TransactionEntries.js"(exports, module2) {
    "use strict";
    var StripeResource = require_StripeResource();
    var stripeMethod = StripeResource.method;
    module2.exports = StripeResource.extend({
      retrieve: stripeMethod({
        method: "GET",
        fullPath: "/v1/treasury/transaction_entries/{id}"
      }),
      list: stripeMethod({
        method: "GET",
        fullPath: "/v1/treasury/transaction_entries",
        methodType: "list"
      })
    });
  }
});

// node_modules/stripe/lib/resources.js
var require_resources = __commonJS({
  "node_modules/stripe/lib/resources.js"(exports, module2) {
    "use strict";
    var resourceNamespace = require_ResourceNamespace();
    module2.exports = {
      Accounts: require_Accounts(),
      Account: require_Accounts(),
      AccountLinks: require_AccountLinks(),
      ApplePayDomains: require_ApplePayDomains(),
      ApplicationFees: require_ApplicationFees(),
      Balance: require_Balance(),
      BalanceTransactions: require_BalanceTransactions(),
      Charges: require_Charges(),
      CountrySpecs: require_CountrySpecs(),
      Coupons: require_Coupons(),
      CreditNotes: require_CreditNotes(),
      Customers: require_Customers(),
      Disputes: require_Disputes(),
      EphemeralKeys: require_EphemeralKeys(),
      Events: require_Events(),
      ExchangeRates: require_ExchangeRates(),
      Files: require_Files(),
      FileLinks: require_FileLinks(),
      Invoices: require_Invoices(),
      InvoiceItems: require_InvoiceItems(),
      Mandates: require_Mandates(),
      OAuth: require_OAuth(),
      PaymentIntents: require_PaymentIntents(),
      PaymentLinks: require_PaymentLinks(),
      PaymentMethods: require_PaymentMethods(),
      Payouts: require_Payouts(),
      Plans: require_Plans(),
      Prices: require_Prices(),
      Products: require_Products(),
      PromotionCodes: require_PromotionCodes(),
      Quotes: require_Quotes(),
      Refunds: require_Refunds(),
      Reviews: require_Reviews(),
      SetupAttempts: require_SetupAttempts(),
      SetupIntents: require_SetupIntents(),
      ShippingRates: require_ShippingRates(),
      Sources: require_Sources(),
      Subscriptions: require_Subscriptions(),
      SubscriptionItems: require_SubscriptionItems(),
      SubscriptionSchedules: require_SubscriptionSchedules(),
      TaxCodes: require_TaxCodes(),
      TaxRates: require_TaxRates(),
      Tokens: require_Tokens(),
      Topups: require_Topups(),
      Transfers: require_Transfers(),
      WebhookEndpoints: require_WebhookEndpoints(),
      Apps: resourceNamespace("apps", {
        Secrets: require_Secrets()
      }),
      BillingPortal: resourceNamespace("billingPortal", {
        Configurations: require_Configurations(),
        Sessions: require_Sessions()
      }),
      Checkout: resourceNamespace("checkout", {
        Sessions: require_Sessions2()
      }),
      FinancialConnections: resourceNamespace("financialConnections", {
        Accounts: require_Accounts2(),
        Sessions: require_Sessions3()
      }),
      Identity: resourceNamespace("identity", {
        VerificationReports: require_VerificationReports(),
        VerificationSessions: require_VerificationSessions()
      }),
      Issuing: resourceNamespace("issuing", {
        Authorizations: require_Authorizations(),
        Cards: require_Cards(),
        Cardholders: require_Cardholders(),
        Disputes: require_Disputes2(),
        Transactions: require_Transactions()
      }),
      Radar: resourceNamespace("radar", {
        EarlyFraudWarnings: require_EarlyFraudWarnings(),
        ValueLists: require_ValueLists(),
        ValueListItems: require_ValueListItems()
      }),
      Reporting: resourceNamespace("reporting", {
        ReportRuns: require_ReportRuns(),
        ReportTypes: require_ReportTypes()
      }),
      Sigma: resourceNamespace("sigma", {
        ScheduledQueryRuns: require_ScheduledQueryRuns()
      }),
      Terminal: resourceNamespace("terminal", {
        Configurations: require_Configurations2(),
        ConnectionTokens: require_ConnectionTokens(),
        Locations: require_Locations(),
        Readers: require_Readers()
      }),
      TestHelpers: resourceNamespace("testHelpers", {
        Customers: require_Customers2(),
        Refunds: require_Refunds2(),
        TestClocks: require_TestClocks(),
        Issuing: resourceNamespace("issuing", {
          Cards: require_Cards2()
        }),
        Terminal: resourceNamespace("terminal", {
          Readers: require_Readers2()
        }),
        Treasury: resourceNamespace("treasury", {
          InboundTransfers: require_InboundTransfers(),
          OutboundPayments: require_OutboundPayments(),
          OutboundTransfers: require_OutboundTransfers(),
          ReceivedCredits: require_ReceivedCredits(),
          ReceivedDebits: require_ReceivedDebits()
        })
      }),
      Treasury: resourceNamespace("treasury", {
        CreditReversals: require_CreditReversals(),
        DebitReversals: require_DebitReversals(),
        FinancialAccounts: require_FinancialAccounts(),
        InboundTransfers: require_InboundTransfers2(),
        OutboundPayments: require_OutboundPayments2(),
        OutboundTransfers: require_OutboundTransfers2(),
        ReceivedCredits: require_ReceivedCredits2(),
        ReceivedDebits: require_ReceivedDebits2(),
        Transactions: require_Transactions2(),
        TransactionEntries: require_TransactionEntries()
      })
    };
  }
});

// node_modules/stripe/package.json
var require_package = __commonJS({
  "node_modules/stripe/package.json"(exports, module2) {
    module2.exports = {
      name: "stripe",
      version: "11.1.0",
      description: "Stripe API wrapper",
      keywords: [
        "stripe",
        "payment processing",
        "credit cards",
        "api"
      ],
      homepage: "https://github.com/stripe/stripe-node",
      author: "Stripe <support@stripe.com> (https://stripe.com/)",
      contributors: [
        "Ask Bj\xF8rn Hansen <ask@develooper.com> (http://www.askask.com/)",
        "Michelle Bu <michelle@stripe.com>",
        "Alex Sexton <alex@stripe.com>",
        "James Padolsey"
      ],
      repository: {
        type: "git",
        url: "git://github.com/stripe/stripe-node.git"
      },
      bugs: "https://github.com/stripe/stripe-node/issues",
      engines: {
        node: ">=12.*"
      },
      main: "lib/stripe.js",
      types: "types/2022-11-15/index.d.ts",
      devDependencies: {
        "@typescript-eslint/eslint-plugin": "^4.33.0",
        "@typescript-eslint/parser": "^4.33.0",
        chai: "^4.3.6",
        "chai-as-promised": "~7.1.1",
        coveralls: "^3.1.1",
        eslint: "^7.32.0",
        "eslint-config-prettier": "^8.5.0",
        "eslint-plugin-chai-friendly": "^0.7.2",
        "eslint-plugin-prettier": "^3.4.1",
        mocha: "^8.4.0",
        "mocha-junit-reporter": "^2.1.0",
        nock: "^13.2.9",
        "node-fetch": "^2.6.7",
        nyc: "^15.1.0",
        prettier: "^1.16.4",
        typescript: "^4.8.4"
      },
      resolutions: {
        minimist: "1.2.6",
        nanoid: "^3.2.0"
      },
      dependencies: {
        "@types/node": ">=8.1.0",
        qs: "^6.11.0"
      },
      license: "MIT",
      scripts: {
        build: "tsc -p tsconfig.json && yarn remove-exports-line && yarn prettier-format",
        "remove-exports-line": `sed -i.bak '/Object.defineProperty(exports, "__esModule", { value: true });/d' ./lib/stripe.js; rm ./lib/stripe.js.bak`,
        clean: "rm -rf ./.nyc_output ./node_modules/.cache ./coverage ./lib",
        prepack: "yarn install && yarn build",
        mocha: "nyc mocha --config=test/.mocharc.js",
        "mocha-only": "mocha --config=test/.mocharc.js",
        test: "yarn build && yarn test-typescript && yarn mocha",
        "test-typescript": "tsc --build types/test",
        lint: "eslint --ext .js,.jsx,.ts .",
        fix: "yarn lint --fix && ./scripts/updateAPIVersion.js",
        report: "nyc -r text -r lcov report",
        coveralls: "cat coverage/lcov.info | ./node_modules/coveralls/bin/coveralls.js",
        "prettier-format": "prettier --config .prettierrc 'lib/**/*.js' --write"
      }
    };
  }
});

// node_modules/stripe/lib/crypto/CryptoProvider.js
var require_CryptoProvider = __commonJS({
  "node_modules/stripe/lib/crypto/CryptoProvider.js"(exports, module2) {
    "use strict";
    var CryptoProvider = class {
      computeHMACSignature(payload, secret) {
        throw new Error("computeHMACSignature not implemented.");
      }
      computeHMACSignatureAsync(payload, secret) {
        throw new Error("computeHMACSignatureAsync not implemented.");
      }
    };
    module2.exports = CryptoProvider;
  }
});

// node_modules/stripe/lib/crypto/NodeCryptoProvider.js
var require_NodeCryptoProvider = __commonJS({
  "node_modules/stripe/lib/crypto/NodeCryptoProvider.js"(exports, module2) {
    "use strict";
    var crypto2 = require("crypto");
    var CryptoProvider = require_CryptoProvider();
    var NodeCryptoProvider = class extends CryptoProvider {
      computeHMACSignature(payload, secret) {
        return crypto2.createHmac("sha256", secret).update(payload, "utf8").digest("hex");
      }
      async computeHMACSignatureAsync(payload, secret) {
        const signature = await this.computeHMACSignature(payload, secret);
        return signature;
      }
    };
    module2.exports = NodeCryptoProvider;
  }
});

// node_modules/stripe/lib/Webhooks.js
var require_Webhooks = __commonJS({
  "node_modules/stripe/lib/Webhooks.js"(exports, module2) {
    "use strict";
    var utils = require_utils2();
    var _Error = require_Error();
    var { StripeError, StripeSignatureVerificationError } = _Error;
    var Webhook = {
      DEFAULT_TOLERANCE: 300,
      signature: null,
      constructEvent(payload, header, secret, tolerance, cryptoProvider) {
        this.signature.verifyHeader(payload, header, secret, tolerance || Webhook.DEFAULT_TOLERANCE, cryptoProvider);
        const jsonPayload = JSON.parse(payload);
        return jsonPayload;
      },
      async constructEventAsync(payload, header, secret, tolerance, cryptoProvider) {
        await this.signature.verifyHeaderAsync(payload, header, secret, tolerance || Webhook.DEFAULT_TOLERANCE, cryptoProvider);
        const jsonPayload = JSON.parse(payload);
        return jsonPayload;
      },
      generateTestHeaderString: function(opts) {
        if (!opts) {
          throw new StripeError({
            message: "Options are required"
          });
        }
        opts.timestamp = Math.floor(opts.timestamp) || Math.floor(Date.now() / 1e3);
        opts.scheme = opts.scheme || signature.EXPECTED_SCHEME;
        opts.cryptoProvider = opts.cryptoProvider || getNodeCryptoProvider();
        opts.signature = opts.signature || opts.cryptoProvider.computeHMACSignature(opts.timestamp + "." + opts.payload, opts.secret);
        const generatedHeader = [
          "t=" + opts.timestamp,
          opts.scheme + "=" + opts.signature
        ].join(",");
        return generatedHeader;
      }
    };
    var signature = {
      EXPECTED_SCHEME: "v1",
      verifyHeader(encodedPayload, encodedHeader, secret, tolerance, cryptoProvider) {
        const {
          decodedHeader: header,
          decodedPayload: payload,
          details
        } = parseEventDetails(encodedPayload, encodedHeader, this.EXPECTED_SCHEME);
        cryptoProvider = cryptoProvider || getNodeCryptoProvider();
        const expectedSignature = cryptoProvider.computeHMACSignature(makeHMACContent(payload, details), secret);
        validateComputedSignature(payload, header, details, expectedSignature, tolerance);
        return true;
      },
      async verifyHeaderAsync(encodedPayload, encodedHeader, secret, tolerance, cryptoProvider) {
        const {
          decodedHeader: header,
          decodedPayload: payload,
          details
        } = parseEventDetails(encodedPayload, encodedHeader, this.EXPECTED_SCHEME);
        cryptoProvider = cryptoProvider || getNodeCryptoProvider();
        const expectedSignature = await cryptoProvider.computeHMACSignatureAsync(makeHMACContent(payload, details), secret);
        return validateComputedSignature(payload, header, details, expectedSignature, tolerance);
      }
    };
    function makeHMACContent(payload, details) {
      return `${details.timestamp}.${payload}`;
    }
    function parseEventDetails(encodedPayload, encodedHeader, expectedScheme) {
      const decodedPayload = Buffer.isBuffer(encodedPayload) ? encodedPayload.toString("utf8") : encodedPayload;
      if (Array.isArray(encodedHeader)) {
        throw new Error("Unexpected: An array was passed as a header, which should not be possible for the stripe-signature header.");
      }
      const decodedHeader = Buffer.isBuffer(encodedHeader) ? encodedHeader.toString("utf8") : encodedHeader;
      const details = parseHeader(decodedHeader, expectedScheme);
      if (!details || details.timestamp === -1) {
        throw new StripeSignatureVerificationError(decodedHeader, decodedPayload, {
          message: "Unable to extract timestamp and signatures from header"
        });
      }
      if (!details.signatures.length) {
        throw new StripeSignatureVerificationError(decodedHeader, decodedPayload, {
          message: "No signatures found with expected scheme"
        });
      }
      return {
        decodedPayload,
        decodedHeader,
        details
      };
    }
    function validateComputedSignature(payload, header, details, expectedSignature, tolerance) {
      const signatureFound = !!details.signatures.filter(utils.secureCompare.bind(utils, expectedSignature)).length;
      if (!signatureFound) {
        throw new StripeSignatureVerificationError(header, payload, {
          message: "No signatures found matching the expected signature for payload. Are you passing the raw request body you received from Stripe? https://github.com/stripe/stripe-node#webhook-signing"
        });
      }
      const timestampAge = Math.floor(Date.now() / 1e3) - details.timestamp;
      if (tolerance > 0 && timestampAge > tolerance) {
        throw new StripeSignatureVerificationError(header, payload, {
          message: "Timestamp outside the tolerance zone"
        });
      }
      return true;
    }
    function parseHeader(header, scheme) {
      if (typeof header !== "string") {
        return null;
      }
      return header.split(",").reduce((accum, item) => {
        const kv = item.split("=");
        if (kv[0] === "t") {
          accum.timestamp = parseInt(kv[1], 10);
        }
        if (kv[0] === scheme) {
          accum.signatures.push(kv[1]);
        }
        return accum;
      }, {
        timestamp: -1,
        signatures: []
      });
    }
    var webhooksNodeCryptoProviderInstance = null;
    function getNodeCryptoProvider() {
      if (!webhooksNodeCryptoProviderInstance) {
        const NodeCryptoProvider = require_NodeCryptoProvider();
        webhooksNodeCryptoProviderInstance = new NodeCryptoProvider();
      }
      return webhooksNodeCryptoProviderInstance;
    }
    Webhook.signature = signature;
    module2.exports = Webhook;
  }
});

// node_modules/stripe/lib/net/NodeHttpClient.js
var require_NodeHttpClient = __commonJS({
  "node_modules/stripe/lib/net/NodeHttpClient.js"(exports, module2) {
    "use strict";
    var http = require("http");
    var https = require("https");
    var _HttpClient = require_HttpClient();
    var { HttpClient, HttpClientResponse } = _HttpClient;
    var defaultHttpAgent = new http.Agent({ keepAlive: true });
    var defaultHttpsAgent = new https.Agent({ keepAlive: true });
    var NodeHttpClient = class extends HttpClient {
      constructor(agent) {
        super();
        this._agent = agent;
      }
      getClientName() {
        return "node";
      }
      makeRequest(host, port, path, method, headers, requestData, protocol, timeout) {
        const isInsecureConnection = protocol === "http";
        let agent = this._agent;
        if (!agent) {
          agent = isInsecureConnection ? defaultHttpAgent : defaultHttpsAgent;
        }
        const requestPromise = new Promise((resolve, reject) => {
          const req = (isInsecureConnection ? http : https).request({
            host,
            port,
            path,
            method,
            agent,
            headers,
            ciphers: "DEFAULT:!aNULL:!eNULL:!LOW:!EXPORT:!SSLv2:!MD5"
          });
          req.setTimeout(timeout, () => {
            req.destroy(HttpClient.makeTimeoutError());
          });
          req.on("response", (res) => {
            resolve(new NodeHttpClientResponse(res));
          });
          req.on("error", (error) => {
            reject(error);
          });
          req.once("socket", (socket) => {
            if (socket.connecting) {
              socket.once(isInsecureConnection ? "connect" : "secureConnect", () => {
                req.write(requestData);
                req.end();
              });
            } else {
              req.write(requestData);
              req.end();
            }
          });
        });
        return requestPromise;
      }
    };
    var NodeHttpClientResponse = class extends HttpClientResponse {
      constructor(res) {
        super(res.statusCode, res.headers || {});
        this._res = res;
      }
      getRawResponse() {
        return this._res;
      }
      toStream(streamCompleteCallback) {
        this._res.once("end", () => streamCompleteCallback());
        return this._res;
      }
      toJSON() {
        return new Promise((resolve, reject) => {
          let response = "";
          this._res.setEncoding("utf8");
          this._res.on("data", (chunk) => {
            response += chunk;
          });
          this._res.once("end", () => {
            try {
              resolve(JSON.parse(response));
            } catch (e) {
              reject(e);
            }
          });
        });
      }
    };
    module2.exports = { NodeHttpClient, NodeHttpClientResponse };
  }
});

// node_modules/stripe/lib/net/FetchHttpClient.js
var require_FetchHttpClient = __commonJS({
  "node_modules/stripe/lib/net/FetchHttpClient.js"(exports, module2) {
    "use strict";
    var _HttpClient = require_HttpClient();
    var { HttpClient, HttpClientResponse } = _HttpClient;
    var FetchHttpClient = class extends HttpClient {
      constructor(fetchFn) {
        super();
        this._fetchFn = fetchFn;
      }
      getClientName() {
        return "fetch";
      }
      makeRequest(host, port, path, method, headers, requestData, protocol, timeout) {
        const isInsecureConnection = protocol === "http";
        const url = new URL(path, `${isInsecureConnection ? "http" : "https"}://${host}`);
        url.port = port;
        const methodHasPayload = method == "POST" || method == "PUT" || method == "PATCH";
        const body = requestData || (methodHasPayload ? "" : void 0);
        const fetchFn = this._fetchFn || fetch;
        const fetchPromise = fetchFn(url.toString(), {
          method,
          headers,
          body
        });
        let pendingTimeoutId;
        const timeoutPromise = new Promise((_, reject) => {
          pendingTimeoutId = setTimeout(() => {
            pendingTimeoutId = null;
            reject(HttpClient.makeTimeoutError());
          }, timeout);
        });
        return Promise.race([fetchPromise, timeoutPromise]).then((res) => {
          return new FetchHttpClientResponse(res);
        }).finally(() => {
          if (pendingTimeoutId) {
            clearTimeout(pendingTimeoutId);
          }
        });
      }
    };
    var FetchHttpClientResponse = class extends HttpClientResponse {
      constructor(res) {
        super(res.status, FetchHttpClientResponse._transformHeadersToObject(res.headers));
        this._res = res;
      }
      getRawResponse() {
        return this._res;
      }
      toStream(streamCompleteCallback) {
        streamCompleteCallback();
        return this._res.body;
      }
      toJSON() {
        return this._res.json();
      }
      static _transformHeadersToObject(headers) {
        const headersObj = {};
        for (const entry of headers) {
          if (!Array.isArray(entry) || entry.length != 2) {
            throw new Error("Response objects produced by the fetch function given to FetchHttpClient do not have an iterable headers map. Response#headers should be an iterable object.");
          }
          headersObj[entry[0]] = entry[1];
        }
        return headersObj;
      }
    };
    module2.exports = { FetchHttpClient, FetchHttpClientResponse };
  }
});

// node_modules/stripe/lib/crypto/SubtleCryptoProvider.js
var require_SubtleCryptoProvider = __commonJS({
  "node_modules/stripe/lib/crypto/SubtleCryptoProvider.js"(exports, module2) {
    "use strict";
    var CryptoProvider = require_CryptoProvider();
    var SubtleCryptoProvider = class extends CryptoProvider {
      constructor(subtleCrypto) {
        super();
        this.subtleCrypto = subtleCrypto || crypto.subtle;
      }
      computeHMACSignature(payload, secret) {
        throw new Error("SubtleCryptoProvider cannot be used in a synchronous context.");
      }
      async computeHMACSignatureAsync(payload, secret) {
        const encoder = new TextEncoder();
        const key = await this.subtleCrypto.importKey("raw", encoder.encode(secret), {
          name: "HMAC",
          hash: { name: "SHA-256" }
        }, false, ["sign"]);
        const signatureBuffer = await this.subtleCrypto.sign("hmac", key, encoder.encode(payload));
        const signatureBytes = new Uint8Array(signatureBuffer);
        const signatureHexCodes = new Array(signatureBytes.length);
        for (let i = 0; i < signatureBytes.length; i++) {
          signatureHexCodes[i] = byteHexMapping[signatureBytes[i]];
        }
        return signatureHexCodes.join("");
      }
    };
    var byteHexMapping = new Array(256);
    for (let i = 0; i < byteHexMapping.length; i++) {
      byteHexMapping[i] = i.toString(16).padStart(2, "0");
    }
    module2.exports = SubtleCryptoProvider;
  }
});

// node_modules/stripe/lib/stripe.js
var require_stripe = __commonJS({
  "node_modules/stripe/lib/stripe.js"(exports, module2) {
    "use strict";
    var _Error = require_Error();
    var resources = require_resources();
    var DEFAULT_HOST = "api.stripe.com";
    var DEFAULT_PORT = "443";
    var DEFAULT_BASE_PATH = "/v1/";
    var DEFAULT_API_VERSION = null;
    var DEFAULT_TIMEOUT = 8e4;
    Stripe.PACKAGE_VERSION = require_package().version;
    var utils = require_utils2();
    var { determineProcessUserAgentProperties, emitWarning } = utils;
    Stripe.USER_AGENT = Object.assign({
      bindings_version: Stripe.PACKAGE_VERSION,
      lang: "node",
      publisher: "stripe",
      uname: null,
      typescript: false
    }, determineProcessUserAgentProperties());
    Stripe._UNAME_CACHE = null;
    var MAX_NETWORK_RETRY_DELAY_SEC = 2;
    var INITIAL_NETWORK_RETRY_DELAY_SEC = 0.5;
    var APP_INFO_PROPERTIES = ["name", "version", "url", "partner_id"];
    var ALLOWED_CONFIG_PROPERTIES = [
      "apiVersion",
      "typescript",
      "maxNetworkRetries",
      "httpAgent",
      "httpClient",
      "timeout",
      "host",
      "port",
      "protocol",
      "telemetry",
      "appInfo",
      "stripeAccount"
    ];
    var EventEmitter = require("events").EventEmitter;
    var StripeResource = require_StripeResource();
    Stripe.StripeResource = StripeResource;
    Stripe.resources = resources;
    var { HttpClient, HttpClientResponse } = require_HttpClient();
    Stripe.HttpClient = HttpClient;
    Stripe.HttpClientResponse = HttpClientResponse;
    var CryptoProvider = require_CryptoProvider();
    Stripe.CryptoProvider = CryptoProvider;
    function Stripe(key, config = {}) {
      if (!(this instanceof Stripe)) {
        return new Stripe(key, config);
      }
      const props = this._getPropsFromConfig(config);
      Object.defineProperty(this, "_emitter", {
        value: new EventEmitter(),
        enumerable: false,
        configurable: false,
        writable: false
      });
      this.VERSION = Stripe.PACKAGE_VERSION;
      this.on = this._emitter.on.bind(this._emitter);
      this.once = this._emitter.once.bind(this._emitter);
      this.off = this._emitter.removeListener.bind(this._emitter);
      if (props.protocol && props.protocol !== "https" && (!props.host || /\.stripe\.com$/.test(props.host))) {
        throw new Error("The `https` protocol must be used when sending requests to `*.stripe.com`");
      }
      const agent = props.httpAgent || null;
      this._api = {
        auth: null,
        host: props.host || DEFAULT_HOST,
        port: props.port || DEFAULT_PORT,
        protocol: props.protocol || "https",
        basePath: DEFAULT_BASE_PATH,
        version: props.apiVersion || DEFAULT_API_VERSION,
        timeout: utils.validateInteger("timeout", props.timeout, DEFAULT_TIMEOUT),
        maxNetworkRetries: utils.validateInteger("maxNetworkRetries", props.maxNetworkRetries, 0),
        agent,
        httpClient: props.httpClient || Stripe.createNodeHttpClient(agent),
        dev: false,
        stripeAccount: props.stripeAccount || null
      };
      const typescript = props.typescript || false;
      if (typescript !== Stripe.USER_AGENT.typescript) {
        Stripe.USER_AGENT.typescript = typescript;
      }
      if (props.appInfo) {
        this._setAppInfo(props.appInfo);
      }
      this._prepResources();
      this._setApiKey(key);
      this.errors = _Error;
      this.webhooks = require_Webhooks();
      this._prevRequestMetrics = [];
      this._enableTelemetry = props.telemetry !== false;
      this.StripeResource = Stripe.StripeResource;
    }
    Stripe.errors = _Error;
    Stripe.webhooks = require_Webhooks();
    Stripe.createNodeHttpClient = (agent) => {
      const { NodeHttpClient } = require_NodeHttpClient();
      return new NodeHttpClient(agent);
    };
    Stripe.createFetchHttpClient = (fetchFn) => {
      const { FetchHttpClient } = require_FetchHttpClient();
      return new FetchHttpClient(fetchFn);
    };
    Stripe.createNodeCryptoProvider = () => {
      const NodeCryptoProvider = require_NodeCryptoProvider();
      return new NodeCryptoProvider();
    };
    Stripe.createSubtleCryptoProvider = (subtleCrypto) => {
      const SubtleCryptoProvider = require_SubtleCryptoProvider();
      return new SubtleCryptoProvider(subtleCrypto);
    };
    Stripe.prototype = {
      _appInfo: void 0,
      on: null,
      off: null,
      once: null,
      VERSION: null,
      StripeResource: null,
      webhooks: null,
      errors: null,
      _api: null,
      _prevRequestMetrics: null,
      _emitter: null,
      _enableTelemetry: null,
      _setApiKey(key) {
        if (key) {
          this._setApiField("auth", `Bearer ${key}`);
        }
      },
      _setAppInfo(info) {
        if (info && typeof info !== "object") {
          throw new Error("AppInfo must be an object.");
        }
        if (info && !info.name) {
          throw new Error("AppInfo.name is required");
        }
        info = info || {};
        this._appInfo = APP_INFO_PROPERTIES.reduce((accum, prop) => {
          if (typeof info[prop] == "string") {
            accum = accum || {};
            accum[prop] = info[prop];
          }
          return accum;
        }, void 0);
      },
      _setApiField(key, value) {
        this._api[key] = value;
      },
      getApiField(key) {
        return this._api[key];
      },
      setClientId(clientId) {
        this._clientId = clientId;
      },
      getClientId() {
        return this._clientId;
      },
      getConstant: (c) => {
        switch (c) {
          case "DEFAULT_HOST":
            return DEFAULT_HOST;
          case "DEFAULT_PORT":
            return DEFAULT_PORT;
          case "DEFAULT_BASE_PATH":
            return DEFAULT_BASE_PATH;
          case "DEFAULT_API_VERSION":
            return DEFAULT_API_VERSION;
          case "DEFAULT_TIMEOUT":
            return DEFAULT_TIMEOUT;
          case "MAX_NETWORK_RETRY_DELAY_SEC":
            return MAX_NETWORK_RETRY_DELAY_SEC;
          case "INITIAL_NETWORK_RETRY_DELAY_SEC":
            return INITIAL_NETWORK_RETRY_DELAY_SEC;
        }
        return Stripe[c];
      },
      getMaxNetworkRetries() {
        return this.getApiField("maxNetworkRetries");
      },
      _setApiNumberField(prop, n, defaultVal) {
        const val = utils.validateInteger(prop, n, defaultVal);
        this._setApiField(prop, val);
      },
      getMaxNetworkRetryDelay() {
        return MAX_NETWORK_RETRY_DELAY_SEC;
      },
      getInitialNetworkRetryDelay() {
        return INITIAL_NETWORK_RETRY_DELAY_SEC;
      },
      getUname(cb) {
        if (!Stripe._UNAME_CACHE) {
          Stripe._UNAME_CACHE = new Promise((resolve) => {
            utils.safeExec("uname -a", (err, uname) => {
              resolve(uname);
            });
          });
        }
        Stripe._UNAME_CACHE.then((uname) => cb(uname));
      },
      getClientUserAgent(cb) {
        return this.getClientUserAgentSeeded(Stripe.USER_AGENT, cb);
      },
      getClientUserAgentSeeded(seed, cb) {
        this.getUname((uname) => {
          const userAgent = {};
          for (const field in seed) {
            userAgent[field] = encodeURIComponent(seed[field]);
          }
          userAgent.uname = encodeURIComponent(uname || "UNKNOWN");
          const client = this.getApiField("httpClient");
          if (client) {
            userAgent.httplib = encodeURIComponent(client.getClientName());
          }
          if (this._appInfo) {
            userAgent.application = this._appInfo;
          }
          cb(JSON.stringify(userAgent));
        });
      },
      getAppInfoAsString() {
        if (!this._appInfo) {
          return "";
        }
        let formatted = this._appInfo.name;
        if (this._appInfo.version) {
          formatted += `/${this._appInfo.version}`;
        }
        if (this._appInfo.url) {
          formatted += ` (${this._appInfo.url})`;
        }
        return formatted;
      },
      getTelemetryEnabled() {
        return this._enableTelemetry;
      },
      _prepResources() {
        for (const name in resources) {
          this[utils.pascalToCamelCase(name)] = new resources[name](this);
        }
      },
      _getPropsFromConfig(config) {
        if (!config) {
          return {};
        }
        const isString = typeof config === "string";
        const isObject = config === Object(config) && !Array.isArray(config);
        if (!isObject && !isString) {
          throw new Error("Config must either be an object or a string");
        }
        if (isString) {
          return {
            apiVersion: config
          };
        }
        const values = Object.keys(config).filter((value) => !ALLOWED_CONFIG_PROPERTIES.includes(value));
        if (values.length > 0) {
          throw new Error(`Config object may only contain the following: ${ALLOWED_CONFIG_PROPERTIES.join(", ")}`);
        }
        return config;
      }
    };
    module2.exports = Stripe;
    module2.exports.Stripe = Stripe;
    module2.exports.default = Stripe;
  }
});

// functions/create-payment-intent/create-payment-intent.ts
var create_payment_intent_exports = {};
__export(create_payment_intent_exports, {
  handler: () => handler
});
module.exports = __toCommonJS(create_payment_intent_exports);
var handler = async (event, context) => {
  const stripe = require_stripe()(process.env.STRIPE_SECRET_KEY);
  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: 500,
      currency: "usd",
      automatic_payment_methods: {
        enabled: true
      }
    });
    return {
      statusCode: 200,
      body: JSON.stringify({
        clientSecret: paymentIntent.client_secret
      })
    };
  } catch (error) {
    switch (error.type) {
      case "StripeCardError":
        return {
          statusCode: error.statusCode,
          body: `A payment error occurred: ${error.message}`
        };
      case "StripeInvalidRequestError":
        return {
          statusCode: error.statusCode,
          body: `An invalid request occurred: ${error.message}`
        };
      default:
        return {
          statusCode: error.statusCode,
          body: `A problem occurred: ${error.message}`
        };
    }
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  handler
});
//# sourceMappingURL=create-payment-intent.js.map
