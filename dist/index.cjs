"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
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
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// node_modules/.pnpm/tsup@8.0.2_postcss@8.4.38_typescript@5.4.5/node_modules/tsup/assets/cjs_shims.js
var getImportMetaUrl, importMetaUrl;
var init_cjs_shims = __esm({
  "node_modules/.pnpm/tsup@8.0.2_postcss@8.4.38_typescript@5.4.5/node_modules/tsup/assets/cjs_shims.js"() {
    "use strict";
    getImportMetaUrl = () => typeof document === "undefined" ? new URL("file:" + __filename).href : document.currentScript && document.currentScript.src || new URL("main.js", document.baseURI).href;
    importMetaUrl = /* @__PURE__ */ getImportMetaUrl();
  }
});

// node_modules/.pnpm/string-argv@0.3.2/node_modules/string-argv/commonjs/index.js
var require_commonjs = __commonJS({
  "node_modules/.pnpm/string-argv@0.3.2/node_modules/string-argv/commonjs/index.js"(exports2) {
    "use strict";
    init_cjs_shims();
    exports2.__esModule = true;
    exports2.parseArgsStringToArgv = void 0;
    function parseArgsStringToArgv(value, env, file) {
      var myRegexp = /([^\s'"]([^\s'"]*(['"])([^\3]*?)\3)+[^\s'"]*)|[^\s'"]+|(['"])([^\5]*?)\5/gi;
      var myString = value;
      var myArray = [];
      if (env) {
        myArray.push(env);
      }
      if (file) {
        myArray.push(file);
      }
      var match;
      do {
        match = myRegexp.exec(myString);
        if (match !== null) {
          myArray.push(firstString(match[1], match[6], match[0]));
        }
      } while (match !== null);
      return myArray;
    }
    exports2["default"] = parseArgsStringToArgv;
    exports2.parseArgsStringToArgv = parseArgsStringToArgv;
    function firstString() {
      var args = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
      }
      for (var i = 0; i < args.length; i++) {
        var arg = args[i];
        if (typeof arg === "string") {
          return arg;
        }
      }
    }
  }
});

// node_modules/.pnpm/type-detect@4.0.8/node_modules/type-detect/type-detect.js
var require_type_detect = __commonJS({
  "node_modules/.pnpm/type-detect@4.0.8/node_modules/type-detect/type-detect.js"(exports2, module2) {
    "use strict";
    init_cjs_shims();
    (function(global2, factory) {
      typeof exports2 === "object" && typeof module2 !== "undefined" ? module2.exports = factory() : typeof define === "function" && define.amd ? define(factory) : global2.typeDetect = factory();
    })(exports2, function() {
      "use strict";
      var promiseExists = typeof Promise === "function";
      var globalObject = typeof self === "object" ? self : global;
      var symbolExists = typeof Symbol !== "undefined";
      var mapExists = typeof Map !== "undefined";
      var setExists = typeof Set !== "undefined";
      var weakMapExists = typeof WeakMap !== "undefined";
      var weakSetExists = typeof WeakSet !== "undefined";
      var dataViewExists = typeof DataView !== "undefined";
      var symbolIteratorExists = symbolExists && typeof Symbol.iterator !== "undefined";
      var symbolToStringTagExists = symbolExists && typeof Symbol.toStringTag !== "undefined";
      var setEntriesExists = setExists && typeof Set.prototype.entries === "function";
      var mapEntriesExists = mapExists && typeof Map.prototype.entries === "function";
      var setIteratorPrototype = setEntriesExists && Object.getPrototypeOf((/* @__PURE__ */ new Set()).entries());
      var mapIteratorPrototype = mapEntriesExists && Object.getPrototypeOf((/* @__PURE__ */ new Map()).entries());
      var arrayIteratorExists = symbolIteratorExists && typeof Array.prototype[Symbol.iterator] === "function";
      var arrayIteratorPrototype = arrayIteratorExists && Object.getPrototypeOf([][Symbol.iterator]());
      var stringIteratorExists = symbolIteratorExists && typeof String.prototype[Symbol.iterator] === "function";
      var stringIteratorPrototype = stringIteratorExists && Object.getPrototypeOf(""[Symbol.iterator]());
      var toStringLeftSliceLength = 8;
      var toStringRightSliceLength = -1;
      function typeDetect(obj) {
        var typeofObj = typeof obj;
        if (typeofObj !== "object") {
          return typeofObj;
        }
        if (obj === null) {
          return "null";
        }
        if (obj === globalObject) {
          return "global";
        }
        if (Array.isArray(obj) && (symbolToStringTagExists === false || !(Symbol.toStringTag in obj))) {
          return "Array";
        }
        if (typeof window === "object" && window !== null) {
          if (typeof window.location === "object" && obj === window.location) {
            return "Location";
          }
          if (typeof window.document === "object" && obj === window.document) {
            return "Document";
          }
          if (typeof window.navigator === "object") {
            if (typeof window.navigator.mimeTypes === "object" && obj === window.navigator.mimeTypes) {
              return "MimeTypeArray";
            }
            if (typeof window.navigator.plugins === "object" && obj === window.navigator.plugins) {
              return "PluginArray";
            }
          }
          if ((typeof window.HTMLElement === "function" || typeof window.HTMLElement === "object") && obj instanceof window.HTMLElement) {
            if (obj.tagName === "BLOCKQUOTE") {
              return "HTMLQuoteElement";
            }
            if (obj.tagName === "TD") {
              return "HTMLTableDataCellElement";
            }
            if (obj.tagName === "TH") {
              return "HTMLTableHeaderCellElement";
            }
          }
        }
        var stringTag = symbolToStringTagExists && obj[Symbol.toStringTag];
        if (typeof stringTag === "string") {
          return stringTag;
        }
        var objPrototype = Object.getPrototypeOf(obj);
        if (objPrototype === RegExp.prototype) {
          return "RegExp";
        }
        if (objPrototype === Date.prototype) {
          return "Date";
        }
        if (promiseExists && objPrototype === Promise.prototype) {
          return "Promise";
        }
        if (setExists && objPrototype === Set.prototype) {
          return "Set";
        }
        if (mapExists && objPrototype === Map.prototype) {
          return "Map";
        }
        if (weakSetExists && objPrototype === WeakSet.prototype) {
          return "WeakSet";
        }
        if (weakMapExists && objPrototype === WeakMap.prototype) {
          return "WeakMap";
        }
        if (dataViewExists && objPrototype === DataView.prototype) {
          return "DataView";
        }
        if (mapExists && objPrototype === mapIteratorPrototype) {
          return "Map Iterator";
        }
        if (setExists && objPrototype === setIteratorPrototype) {
          return "Set Iterator";
        }
        if (arrayIteratorExists && objPrototype === arrayIteratorPrototype) {
          return "Array Iterator";
        }
        if (stringIteratorExists && objPrototype === stringIteratorPrototype) {
          return "String Iterator";
        }
        if (objPrototype === null) {
          return "Object";
        }
        return Object.prototype.toString.call(obj).slice(toStringLeftSliceLength, toStringRightSliceLength);
      }
      return typeDetect;
    });
  }
});

// node_modules/.pnpm/@jsdevtools+ez-spawn@3.0.4/node_modules/@jsdevtools/ez-spawn/lib/normalize-args.js
var require_normalize_args = __commonJS({
  "node_modules/.pnpm/@jsdevtools+ez-spawn@3.0.4/node_modules/@jsdevtools/ez-spawn/lib/normalize-args.js"(exports2, module2) {
    "use strict";
    init_cjs_shims();
    var { parseArgsStringToArgv } = require_commonjs();
    var detectType = require_type_detect();
    module2.exports = normalizeArgs;
    function normalizeArgs(params) {
      let command2, args, options, callback, error;
      try {
        ({ command: command2, args, options, callback } = shiftArgs(params));
        let commandArgs = [];
        if (typeof command2 === "string" && args === void 0) {
          command2 = splitArgString(command2);
        }
        if (Array.isArray(command2)) {
          commandArgs = command2.slice(1);
          command2 = command2[0];
        }
        if (typeof args === "string") {
          args = splitArgString(args);
        }
        if (Array.isArray(args)) {
          args = commandArgs.concat(args);
        }
        if (args === void 0 || args === null) {
          args = commandArgs;
        }
        if (options === void 0 || options === null) {
          options = {};
        }
        options.encoding = options.encoding || "utf8";
        validateArgs(command2, args, options, callback);
      } catch (err) {
        error = err;
        command2 = String(command2 || "");
        args = (Array.isArray(args) ? args : []).map((arg) => String(arg || ""));
      }
      return { command: command2, args, options, callback, error };
    }
    function shiftArgs(params) {
      params = Array.prototype.slice.call(params);
      let command2, args, options, callback;
      let lastParam = params[params.length - 1];
      if (typeof lastParam === "function") {
        callback = lastParam;
        params.pop();
      }
      lastParam = params[params.length - 1];
      if (lastParam === null || lastParam === void 0 || typeof lastParam === "object" && !Array.isArray(lastParam)) {
        options = lastParam;
        params.pop();
      }
      command2 = params.shift();
      if (params.length === 0) {
        args = void 0;
      } else if (params.length === 1 && Array.isArray(params[0])) {
        args = params[0];
      } else if (params.length === 1 && params[0] === "") {
        args = [];
      } else {
        args = params;
      }
      return { command: command2, args, options, callback };
    }
    function validateArgs(command2, args, options, callback) {
      if (command2 === void 0 || command2 === null) {
        throw new Error("The command to execute is missing.");
      }
      if (typeof command2 !== "string") {
        throw new Error("The command to execute should be a string, not " + friendlyType(command2));
      }
      if (!Array.isArray(args)) {
        throw new Error(
          "The command arguments should be a string or an array, not " + friendlyType(args)
        );
      }
      for (let i = 0; i < args.length; i++) {
        let arg = args[i];
        if (typeof arg !== "string") {
          throw new Error(
            `The command arguments should be strings, but argument #${i + 1} is ` + friendlyType(arg)
          );
        }
      }
      if (typeof options !== "object") {
        throw new Error(
          "The options should be an object, not " + friendlyType(options)
        );
      }
      if (callback !== void 0 && callback !== null) {
        if (typeof callback !== "function") {
          throw new Error("The callback should be a function, not " + friendlyType(callback));
        }
      }
    }
    function splitArgString(argString) {
      try {
        return parseArgsStringToArgv(argString);
      } catch (error) {
        throw new Error(`Could not parse the string: ${argString}
${error.message}`);
      }
    }
    function friendlyType(val) {
      let type = detectType(val);
      let firstChar = String(type)[0].toLowerCase();
      if (["a", "e", "i", "o", "u"].indexOf(firstChar) === -1) {
        return `a ${type}.`;
      } else {
        return `an ${type}.`;
      }
    }
  }
});

// node_modules/.pnpm/@jsdevtools+ez-spawn@3.0.4/node_modules/@jsdevtools/ez-spawn/lib/process.js
var require_process = __commonJS({
  "node_modules/.pnpm/@jsdevtools+ez-spawn@3.0.4/node_modules/@jsdevtools/ez-spawn/lib/process.js"(exports2, module2) {
    "use strict";
    init_cjs_shims();
    module2.exports = class Process {
      /**
       * @param {object} props - Initial property values
       */
      constructor({ command: command2, args, pid, stdout, stderr, output, status, signal, options }) {
        options = options || {};
        stdout = stdout || (options.encoding === "buffer" ? Buffer.from([]) : "");
        stderr = stderr || (options.encoding === "buffer" ? Buffer.from([]) : "");
        output = output || [options.input || null, stdout, stderr];
        this.command = command2 || "";
        this.args = args || [];
        this.pid = pid || 0;
        this.stdout = output[1];
        this.stderr = output[2];
        this.output = output;
        this.status = status;
        this.signal = signal || null;
      }
      /**
       * Returns the full command and arguments used to spawn the process
       *
       * @type {string}
       */
      toString() {
        let string = this.command;
        for (let arg of this.args) {
          arg = arg.replace(/"/g, '\\"');
          if (arg.indexOf(" ") >= 0) {
            string += ` "${arg}"`;
          } else {
            string += ` ${arg}`;
          }
        }
        return string;
      }
    };
  }
});

// node_modules/.pnpm/@jsdevtools+ez-spawn@3.0.4/node_modules/@jsdevtools/ez-spawn/lib/process-error.js
var require_process_error = __commonJS({
  "node_modules/.pnpm/@jsdevtools+ez-spawn@3.0.4/node_modules/@jsdevtools/ez-spawn/lib/process-error.js"(exports2, module2) {
    "use strict";
    init_cjs_shims();
    module2.exports = class ProcessError extends Error {
      constructor(process7) {
        let message = `${process7.toString()} exited with a status of ${process7.status}.`;
        if (process7.stderr.length > 0) {
          message += "\n\n" + process7.stderr.toString().trim();
        }
        super(message);
        Object.assign(this, process7);
        this.name = ProcessError.name;
      }
    };
  }
});

// node_modules/.pnpm/@jsdevtools+ez-spawn@3.0.4/node_modules/@jsdevtools/ez-spawn/lib/normalize-result.js
var require_normalize_result = __commonJS({
  "node_modules/.pnpm/@jsdevtools+ez-spawn@3.0.4/node_modules/@jsdevtools/ez-spawn/lib/normalize-result.js"(exports2, module2) {
    "use strict";
    init_cjs_shims();
    var Process = require_process();
    var ProcessError = require_process_error();
    module2.exports = normalizeResult;
    function normalizeResult({ command: command2, args, pid, stdout, stderr, output, status, signal, options, error }) {
      let process7 = new Process({ command: command2, args, pid, stdout, stderr, output, status, signal, options });
      if (error) {
        if (process7.status === void 0) {
          process7.status = null;
        }
        throw Object.assign(error, process7);
      } else if (process7.status) {
        throw new ProcessError(process7);
      } else {
        return process7;
      }
    }
  }
});

// node_modules/.pnpm/isexe@2.0.0/node_modules/isexe/windows.js
var require_windows = __commonJS({
  "node_modules/.pnpm/isexe@2.0.0/node_modules/isexe/windows.js"(exports2, module2) {
    "use strict";
    init_cjs_shims();
    module2.exports = isexe;
    isexe.sync = sync;
    var fs6 = require("fs");
    function checkPathExt(path6, options) {
      var pathext = options.pathExt !== void 0 ? options.pathExt : process.env.PATHEXT;
      if (!pathext) {
        return true;
      }
      pathext = pathext.split(";");
      if (pathext.indexOf("") !== -1) {
        return true;
      }
      for (var i = 0; i < pathext.length; i++) {
        var p = pathext[i].toLowerCase();
        if (p && path6.substr(-p.length).toLowerCase() === p) {
          return true;
        }
      }
      return false;
    }
    function checkStat(stat, path6, options) {
      if (!stat.isSymbolicLink() && !stat.isFile()) {
        return false;
      }
      return checkPathExt(path6, options);
    }
    function isexe(path6, options, cb) {
      fs6.stat(path6, function(er, stat) {
        cb(er, er ? false : checkStat(stat, path6, options));
      });
    }
    function sync(path6, options) {
      return checkStat(fs6.statSync(path6), path6, options);
    }
  }
});

// node_modules/.pnpm/isexe@2.0.0/node_modules/isexe/mode.js
var require_mode = __commonJS({
  "node_modules/.pnpm/isexe@2.0.0/node_modules/isexe/mode.js"(exports2, module2) {
    "use strict";
    init_cjs_shims();
    module2.exports = isexe;
    isexe.sync = sync;
    var fs6 = require("fs");
    function isexe(path6, options, cb) {
      fs6.stat(path6, function(er, stat) {
        cb(er, er ? false : checkStat(stat, options));
      });
    }
    function sync(path6, options) {
      return checkStat(fs6.statSync(path6), options);
    }
    function checkStat(stat, options) {
      return stat.isFile() && checkMode(stat, options);
    }
    function checkMode(stat, options) {
      var mod = stat.mode;
      var uid = stat.uid;
      var gid = stat.gid;
      var myUid = options.uid !== void 0 ? options.uid : process.getuid && process.getuid();
      var myGid = options.gid !== void 0 ? options.gid : process.getgid && process.getgid();
      var u = parseInt("100", 8);
      var g = parseInt("010", 8);
      var o = parseInt("001", 8);
      var ug = u | g;
      var ret = mod & o || mod & g && gid === myGid || mod & u && uid === myUid || mod & ug && myUid === 0;
      return ret;
    }
  }
});

// node_modules/.pnpm/isexe@2.0.0/node_modules/isexe/index.js
var require_isexe = __commonJS({
  "node_modules/.pnpm/isexe@2.0.0/node_modules/isexe/index.js"(exports2, module2) {
    "use strict";
    init_cjs_shims();
    var fs6 = require("fs");
    var core;
    if (process.platform === "win32" || global.TESTING_WINDOWS) {
      core = require_windows();
    } else {
      core = require_mode();
    }
    module2.exports = isexe;
    isexe.sync = sync;
    function isexe(path6, options, cb) {
      if (typeof options === "function") {
        cb = options;
        options = {};
      }
      if (!cb) {
        if (typeof Promise !== "function") {
          throw new TypeError("callback not provided");
        }
        return new Promise(function(resolve2, reject) {
          isexe(path6, options || {}, function(er, is) {
            if (er) {
              reject(er);
            } else {
              resolve2(is);
            }
          });
        });
      }
      core(path6, options || {}, function(er, is) {
        if (er) {
          if (er.code === "EACCES" || options && options.ignoreErrors) {
            er = null;
            is = false;
          }
        }
        cb(er, is);
      });
    }
    function sync(path6, options) {
      try {
        return core.sync(path6, options || {});
      } catch (er) {
        if (options && options.ignoreErrors || er.code === "EACCES") {
          return false;
        } else {
          throw er;
        }
      }
    }
  }
});

// node_modules/.pnpm/which@2.0.2/node_modules/which/which.js
var require_which = __commonJS({
  "node_modules/.pnpm/which@2.0.2/node_modules/which/which.js"(exports2, module2) {
    "use strict";
    init_cjs_shims();
    var isWindows = process.platform === "win32" || process.env.OSTYPE === "cygwin" || process.env.OSTYPE === "msys";
    var path6 = require("path");
    var COLON = isWindows ? ";" : ":";
    var isexe = require_isexe();
    var getNotFoundError = (cmd) => Object.assign(new Error(`not found: ${cmd}`), { code: "ENOENT" });
    var getPathInfo = (cmd, opt) => {
      const colon = opt.colon || COLON;
      const pathEnv = cmd.match(/\//) || isWindows && cmd.match(/\\/) ? [""] : [
        // windows always checks the cwd first
        ...isWindows ? [process.cwd()] : [],
        ...(opt.path || process.env.PATH || /* istanbul ignore next: very unusual */
        "").split(colon)
      ];
      const pathExtExe = isWindows ? opt.pathExt || process.env.PATHEXT || ".EXE;.CMD;.BAT;.COM" : "";
      const pathExt = isWindows ? pathExtExe.split(colon) : [""];
      if (isWindows) {
        if (cmd.indexOf(".") !== -1 && pathExt[0] !== "")
          pathExt.unshift("");
      }
      return {
        pathEnv,
        pathExt,
        pathExtExe
      };
    };
    var which = (cmd, opt, cb) => {
      if (typeof opt === "function") {
        cb = opt;
        opt = {};
      }
      if (!opt)
        opt = {};
      const { pathEnv, pathExt, pathExtExe } = getPathInfo(cmd, opt);
      const found = [];
      const step = (i) => new Promise((resolve2, reject) => {
        if (i === pathEnv.length)
          return opt.all && found.length ? resolve2(found) : reject(getNotFoundError(cmd));
        const ppRaw = pathEnv[i];
        const pathPart = /^".*"$/.test(ppRaw) ? ppRaw.slice(1, -1) : ppRaw;
        const pCmd = path6.join(pathPart, cmd);
        const p = !pathPart && /^\.[\\\/]/.test(cmd) ? cmd.slice(0, 2) + pCmd : pCmd;
        resolve2(subStep(p, i, 0));
      });
      const subStep = (p, i, ii) => new Promise((resolve2, reject) => {
        if (ii === pathExt.length)
          return resolve2(step(i + 1));
        const ext = pathExt[ii];
        isexe(p + ext, { pathExt: pathExtExe }, (er, is) => {
          if (!er && is) {
            if (opt.all)
              found.push(p + ext);
            else
              return resolve2(p + ext);
          }
          return resolve2(subStep(p, i, ii + 1));
        });
      });
      return cb ? step(0).then((res) => cb(null, res), cb) : step(0);
    };
    var whichSync = (cmd, opt) => {
      opt = opt || {};
      const { pathEnv, pathExt, pathExtExe } = getPathInfo(cmd, opt);
      const found = [];
      for (let i = 0; i < pathEnv.length; i++) {
        const ppRaw = pathEnv[i];
        const pathPart = /^".*"$/.test(ppRaw) ? ppRaw.slice(1, -1) : ppRaw;
        const pCmd = path6.join(pathPart, cmd);
        const p = !pathPart && /^\.[\\\/]/.test(cmd) ? cmd.slice(0, 2) + pCmd : pCmd;
        for (let j = 0; j < pathExt.length; j++) {
          const cur = p + pathExt[j];
          try {
            const is = isexe.sync(cur, { pathExt: pathExtExe });
            if (is) {
              if (opt.all)
                found.push(cur);
              else
                return cur;
            }
          } catch (ex) {
          }
        }
      }
      if (opt.all && found.length)
        return found;
      if (opt.nothrow)
        return null;
      throw getNotFoundError(cmd);
    };
    module2.exports = which;
    which.sync = whichSync;
  }
});

// node_modules/.pnpm/path-key@3.1.1/node_modules/path-key/index.js
var require_path_key = __commonJS({
  "node_modules/.pnpm/path-key@3.1.1/node_modules/path-key/index.js"(exports2, module2) {
    "use strict";
    init_cjs_shims();
    var pathKey = (options = {}) => {
      const environment = options.env || process.env;
      const platform = options.platform || process.platform;
      if (platform !== "win32") {
        return "PATH";
      }
      return Object.keys(environment).reverse().find((key) => key.toUpperCase() === "PATH") || "Path";
    };
    module2.exports = pathKey;
    module2.exports.default = pathKey;
  }
});

// node_modules/.pnpm/cross-spawn@7.0.3/node_modules/cross-spawn/lib/util/resolveCommand.js
var require_resolveCommand = __commonJS({
  "node_modules/.pnpm/cross-spawn@7.0.3/node_modules/cross-spawn/lib/util/resolveCommand.js"(exports2, module2) {
    "use strict";
    init_cjs_shims();
    var path6 = require("path");
    var which = require_which();
    var getPathKey = require_path_key();
    function resolveCommandAttempt(parsed, withoutPathExt) {
      const env = parsed.options.env || process.env;
      const cwd = process.cwd();
      const hasCustomCwd = parsed.options.cwd != null;
      const shouldSwitchCwd = hasCustomCwd && process.chdir !== void 0 && !process.chdir.disabled;
      if (shouldSwitchCwd) {
        try {
          process.chdir(parsed.options.cwd);
        } catch (err) {
        }
      }
      let resolved;
      try {
        resolved = which.sync(parsed.command, {
          path: env[getPathKey({ env })],
          pathExt: withoutPathExt ? path6.delimiter : void 0
        });
      } catch (e) {
      } finally {
        if (shouldSwitchCwd) {
          process.chdir(cwd);
        }
      }
      if (resolved) {
        resolved = path6.resolve(hasCustomCwd ? parsed.options.cwd : "", resolved);
      }
      return resolved;
    }
    function resolveCommand(parsed) {
      return resolveCommandAttempt(parsed) || resolveCommandAttempt(parsed, true);
    }
    module2.exports = resolveCommand;
  }
});

// node_modules/.pnpm/cross-spawn@7.0.3/node_modules/cross-spawn/lib/util/escape.js
var require_escape = __commonJS({
  "node_modules/.pnpm/cross-spawn@7.0.3/node_modules/cross-spawn/lib/util/escape.js"(exports2, module2) {
    "use strict";
    init_cjs_shims();
    var metaCharsRegExp = /([()\][%!^"`<>&|;, *?])/g;
    function escapeCommand(arg) {
      arg = arg.replace(metaCharsRegExp, "^$1");
      return arg;
    }
    function escapeArgument(arg, doubleEscapeMetaChars) {
      arg = `${arg}`;
      arg = arg.replace(/(\\*)"/g, '$1$1\\"');
      arg = arg.replace(/(\\*)$/, "$1$1");
      arg = `"${arg}"`;
      arg = arg.replace(metaCharsRegExp, "^$1");
      if (doubleEscapeMetaChars) {
        arg = arg.replace(metaCharsRegExp, "^$1");
      }
      return arg;
    }
    module2.exports.command = escapeCommand;
    module2.exports.argument = escapeArgument;
  }
});

// node_modules/.pnpm/shebang-regex@3.0.0/node_modules/shebang-regex/index.js
var require_shebang_regex = __commonJS({
  "node_modules/.pnpm/shebang-regex@3.0.0/node_modules/shebang-regex/index.js"(exports2, module2) {
    "use strict";
    init_cjs_shims();
    module2.exports = /^#!(.*)/;
  }
});

// node_modules/.pnpm/shebang-command@2.0.0/node_modules/shebang-command/index.js
var require_shebang_command = __commonJS({
  "node_modules/.pnpm/shebang-command@2.0.0/node_modules/shebang-command/index.js"(exports2, module2) {
    "use strict";
    init_cjs_shims();
    var shebangRegex = require_shebang_regex();
    module2.exports = (string = "") => {
      const match = string.match(shebangRegex);
      if (!match) {
        return null;
      }
      const [path6, argument] = match[0].replace(/#! ?/, "").split(" ");
      const binary = path6.split("/").pop();
      if (binary === "env") {
        return argument;
      }
      return argument ? `${binary} ${argument}` : binary;
    };
  }
});

// node_modules/.pnpm/cross-spawn@7.0.3/node_modules/cross-spawn/lib/util/readShebang.js
var require_readShebang = __commonJS({
  "node_modules/.pnpm/cross-spawn@7.0.3/node_modules/cross-spawn/lib/util/readShebang.js"(exports2, module2) {
    "use strict";
    init_cjs_shims();
    var fs6 = require("fs");
    var shebangCommand = require_shebang_command();
    function readShebang(command2) {
      const size = 150;
      const buffer = Buffer.alloc(size);
      let fd;
      try {
        fd = fs6.openSync(command2, "r");
        fs6.readSync(fd, buffer, 0, size, 0);
        fs6.closeSync(fd);
      } catch (e) {
      }
      return shebangCommand(buffer.toString());
    }
    module2.exports = readShebang;
  }
});

// node_modules/.pnpm/cross-spawn@7.0.3/node_modules/cross-spawn/lib/parse.js
var require_parse = __commonJS({
  "node_modules/.pnpm/cross-spawn@7.0.3/node_modules/cross-spawn/lib/parse.js"(exports2, module2) {
    "use strict";
    init_cjs_shims();
    var path6 = require("path");
    var resolveCommand = require_resolveCommand();
    var escape2 = require_escape();
    var readShebang = require_readShebang();
    var isWin = process.platform === "win32";
    var isExecutableRegExp = /\.(?:com|exe)$/i;
    var isCmdShimRegExp = /node_modules[\\/].bin[\\/][^\\/]+\.cmd$/i;
    function detectShebang(parsed) {
      parsed.file = resolveCommand(parsed);
      const shebang = parsed.file && readShebang(parsed.file);
      if (shebang) {
        parsed.args.unshift(parsed.file);
        parsed.command = shebang;
        return resolveCommand(parsed);
      }
      return parsed.file;
    }
    function parseNonShell(parsed) {
      if (!isWin) {
        return parsed;
      }
      const commandFile = detectShebang(parsed);
      const needsShell = !isExecutableRegExp.test(commandFile);
      if (parsed.options.forceShell || needsShell) {
        const needsDoubleEscapeMetaChars = isCmdShimRegExp.test(commandFile);
        parsed.command = path6.normalize(parsed.command);
        parsed.command = escape2.command(parsed.command);
        parsed.args = parsed.args.map((arg) => escape2.argument(arg, needsDoubleEscapeMetaChars));
        const shellCommand = [parsed.command].concat(parsed.args).join(" ");
        parsed.args = ["/d", "/s", "/c", `"${shellCommand}"`];
        parsed.command = process.env.comspec || "cmd.exe";
        parsed.options.windowsVerbatimArguments = true;
      }
      return parsed;
    }
    function parse(command2, args, options) {
      if (args && !Array.isArray(args)) {
        options = args;
        args = null;
      }
      args = args ? args.slice(0) : [];
      options = Object.assign({}, options);
      const parsed = {
        command: command2,
        args,
        options,
        file: void 0,
        original: {
          command: command2,
          args
        }
      };
      return options.shell ? parsed : parseNonShell(parsed);
    }
    module2.exports = parse;
  }
});

// node_modules/.pnpm/cross-spawn@7.0.3/node_modules/cross-spawn/lib/enoent.js
var require_enoent = __commonJS({
  "node_modules/.pnpm/cross-spawn@7.0.3/node_modules/cross-spawn/lib/enoent.js"(exports2, module2) {
    "use strict";
    init_cjs_shims();
    var isWin = process.platform === "win32";
    function notFoundError(original, syscall) {
      return Object.assign(new Error(`${syscall} ${original.command} ENOENT`), {
        code: "ENOENT",
        errno: "ENOENT",
        syscall: `${syscall} ${original.command}`,
        path: original.command,
        spawnargs: original.args
      });
    }
    function hookChildProcess(cp, parsed) {
      if (!isWin) {
        return;
      }
      const originalEmit = cp.emit;
      cp.emit = function(name, arg1) {
        if (name === "exit") {
          const err = verifyENOENT(arg1, parsed, "spawn");
          if (err) {
            return originalEmit.call(cp, "error", err);
          }
        }
        return originalEmit.apply(cp, arguments);
      };
    }
    function verifyENOENT(status, parsed) {
      if (isWin && status === 1 && !parsed.file) {
        return notFoundError(parsed.original, "spawn");
      }
      return null;
    }
    function verifyENOENTSync(status, parsed) {
      if (isWin && status === 1 && !parsed.file) {
        return notFoundError(parsed.original, "spawnSync");
      }
      return null;
    }
    module2.exports = {
      hookChildProcess,
      verifyENOENT,
      verifyENOENTSync,
      notFoundError
    };
  }
});

// node_modules/.pnpm/cross-spawn@7.0.3/node_modules/cross-spawn/index.js
var require_cross_spawn = __commonJS({
  "node_modules/.pnpm/cross-spawn@7.0.3/node_modules/cross-spawn/index.js"(exports2, module2) {
    "use strict";
    init_cjs_shims();
    var cp = require("child_process");
    var parse = require_parse();
    var enoent = require_enoent();
    function spawn(command2, args, options) {
      const parsed = parse(command2, args, options);
      const spawned = cp.spawn(parsed.command, parsed.args, parsed.options);
      enoent.hookChildProcess(spawned, parsed);
      return spawned;
    }
    function spawnSync(command2, args, options) {
      const parsed = parse(command2, args, options);
      const result = cp.spawnSync(parsed.command, parsed.args, parsed.options);
      result.error = result.error || enoent.verifyENOENTSync(result.status, parsed);
      return result;
    }
    module2.exports = spawn;
    module2.exports.spawn = spawn;
    module2.exports.sync = spawnSync;
    module2.exports._parse = parse;
    module2.exports._enoent = enoent;
  }
});

// node_modules/.pnpm/@jsdevtools+ez-spawn@3.0.4/node_modules/@jsdevtools/ez-spawn/lib/sync.js
var require_sync = __commonJS({
  "node_modules/.pnpm/@jsdevtools+ez-spawn@3.0.4/node_modules/@jsdevtools/ez-spawn/lib/sync.js"(exports2, module2) {
    "use strict";
    init_cjs_shims();
    var normalizeArgs = require_normalize_args();
    var normalizeResult = require_normalize_result();
    var spawnSync = require_cross_spawn().sync;
    module2.exports = sync;
    function sync() {
      let { command: command2, args, options, error } = normalizeArgs(arguments);
      if (error) {
        normalizeResult({ command: command2, args, options, error });
      } else {
        let result;
        try {
          result = spawnSync(command2, args, options);
        } catch (error2) {
          normalizeResult({ error: error2, command: command2, args, options });
        }
        return normalizeResult(Object.assign({}, result, { command: command2, args, options }));
      }
    }
  }
});

// node_modules/.pnpm/call-me-maybe@1.0.2/node_modules/call-me-maybe/src/next.js
var require_next = __commonJS({
  "node_modules/.pnpm/call-me-maybe@1.0.2/node_modules/call-me-maybe/src/next.js"(exports2, module2) {
    "use strict";
    init_cjs_shims();
    function makeNext() {
      if (typeof process === "object" && typeof process.nextTick === "function") {
        return process.nextTick;
      } else if (typeof setImmediate === "function") {
        return setImmediate;
      } else {
        return function next(f) {
          setTimeout(f, 0);
        };
      }
    }
    module2.exports = makeNext();
  }
});

// node_modules/.pnpm/call-me-maybe@1.0.2/node_modules/call-me-maybe/src/maybe.js
var require_maybe = __commonJS({
  "node_modules/.pnpm/call-me-maybe@1.0.2/node_modules/call-me-maybe/src/maybe.js"(exports2, module2) {
    "use strict";
    init_cjs_shims();
    var next = require_next();
    module2.exports = function maybe(cb, promise) {
      if (cb) {
        promise.then(function(result) {
          next(function() {
            cb(null, result);
          });
        }, function(err) {
          next(function() {
            cb(err);
          });
        });
        return void 0;
      } else {
        return promise;
      }
    };
  }
});

// node_modules/.pnpm/@jsdevtools+ez-spawn@3.0.4/node_modules/@jsdevtools/ez-spawn/lib/async.js
var require_async = __commonJS({
  "node_modules/.pnpm/@jsdevtools+ez-spawn@3.0.4/node_modules/@jsdevtools/ez-spawn/lib/async.js"(exports2, module2) {
    "use strict";
    init_cjs_shims();
    var normalizeArgs = require_normalize_args();
    var normalizeResult = require_normalize_result();
    var maybe = require_maybe();
    var spawn = require_cross_spawn();
    module2.exports = async;
    function async() {
      let { command: command2, args, options, callback, error } = normalizeArgs(arguments);
      return maybe(callback, new Promise((resolve2, reject) => {
        if (error) {
          normalizeResult({ command: command2, args, options, error });
        } else {
          let spawnedProcess;
          try {
            spawnedProcess = spawn(command2, args, options);
          } catch (error2) {
            normalizeResult({ error: error2, command: command2, args, options });
          }
          let pid = spawnedProcess.pid;
          let stdout = options.encoding === "buffer" ? Buffer.from([]) : "";
          let stderr = options.encoding === "buffer" ? Buffer.from([]) : "";
          spawnedProcess.stdout && spawnedProcess.stdout.on("data", (data) => {
            if (typeof stdout === "string") {
              stdout += data.toString();
            } else {
              stdout = Buffer.concat([stdout, data]);
            }
          });
          spawnedProcess.stderr && spawnedProcess.stderr.on("data", (data) => {
            if (typeof stderr === "string") {
              stderr += data.toString();
            } else {
              stderr = Buffer.concat([stderr, data]);
            }
          });
          spawnedProcess.on("error", (error2) => {
            try {
              normalizeResult({ error: error2, command: command2, args, options, pid, stdout, stderr });
            } catch (error3) {
              reject(error3);
            }
          });
          spawnedProcess.on("exit", (status, signal) => {
            try {
              resolve2(normalizeResult({ command: command2, args, options, pid, stdout, stderr, status, signal }));
            } catch (error2) {
              reject(error2);
            }
          });
        }
      }));
    }
  }
});

// node_modules/.pnpm/@jsdevtools+ez-spawn@3.0.4/node_modules/@jsdevtools/ez-spawn/lib/index.js
var require_lib = __commonJS({
  "node_modules/.pnpm/@jsdevtools+ez-spawn@3.0.4/node_modules/@jsdevtools/ez-spawn/lib/index.js"(exports2, module2) {
    "use strict";
    init_cjs_shims();
    module2.exports.sync = require_sync();
    module2.exports.async = require_async();
  }
});

// node_modules/.pnpm/@jiangweiye+install-pkg@0.0.0/node_modules/@jiangweiye/install-pkg/dist/index.js
var dist_exports = {};
__export(dist_exports, {
  detectPackageManager: () => detectPackageManager,
  installPackage: () => installPackage
});
function pLimit(concurrency) {
  if (!((Number.isInteger(concurrency) || concurrency === Number.POSITIVE_INFINITY) && concurrency > 0)) {
    throw new TypeError("Expected `concurrency` to be a number from 1 and up");
  }
  const queue = new Queue();
  let activeCount = 0;
  const next = /* @__PURE__ */ __name(() => {
    activeCount--;
    if (queue.size > 0) {
      queue.dequeue()();
    }
  }, "next");
  const run = /* @__PURE__ */ __name(async (fn, resolve2, args) => {
    activeCount++;
    const result = (async () => fn(...args))();
    resolve2(result);
    try {
      await result;
    } catch {
    }
    next();
  }, "run");
  const enqueue = /* @__PURE__ */ __name((fn, resolve2, args) => {
    queue.enqueue(run.bind(void 0, fn, resolve2, args));
    (async () => {
      await Promise.resolve();
      if (activeCount < concurrency && queue.size > 0) {
        queue.dequeue()();
      }
    })();
  }, "enqueue");
  const generator = /* @__PURE__ */ __name((fn, ...args) => new Promise((resolve2) => {
    enqueue(fn, resolve2, args);
  }), "generator");
  Object.defineProperties(generator, {
    activeCount: {
      get: () => activeCount
    },
    pendingCount: {
      get: () => queue.size
    },
    clearQueue: {
      value: () => {
        queue.clear();
      }
    }
  });
  return generator;
}
async function pLocate(iterable, tester, { concurrency = Number.POSITIVE_INFINITY, preserveOrder = true } = {}) {
  const limit = pLimit(concurrency);
  const items = [
    ...iterable
  ].map((element) => [
    element,
    limit(testElement, element, tester)
  ]);
  const checkLimit = pLimit(preserveOrder ? 1 : Number.POSITIVE_INFINITY);
  try {
    await Promise.all(items.map((element) => checkLimit(finder, element)));
  } catch (error) {
    if (error instanceof EndError) {
      return error.value;
    }
    throw error;
  }
}
function checkType(type) {
  if (Object.hasOwnProperty.call(typeMappings, type)) {
    return;
  }
  throw new Error(`Invalid type specified: ${type}`);
}
async function locatePath(paths, { cwd = import_node_process2.default.cwd(), type = "file", allowSymlinks = true, concurrency, preserveOrder } = {}) {
  checkType(type);
  cwd = toPath(cwd);
  const statFunction = allowSymlinks ? import_node_fs2.promises.stat : import_node_fs2.promises.lstat;
  return pLocate(paths, async (path_) => {
    try {
      const stat = await statFunction(import_node_path3.default.resolve(cwd, path_));
      return matchType(type, stat);
    } catch {
      return false;
    }
  }, {
    concurrency,
    preserveOrder
  });
}
function toPath2(urlOrPath) {
  return urlOrPath instanceof URL ? (0, import_node_url2.fileURLToPath)(urlOrPath) : urlOrPath;
}
async function findUpMultiple(name, options = {}) {
  let directory = import_node_path2.default.resolve(toPath2(options.cwd) ?? "");
  const { root } = import_node_path2.default.parse(directory);
  const stopAt = import_node_path2.default.resolve(directory, toPath2(options.stopAt ?? root));
  const limit = options.limit ?? Number.POSITIVE_INFINITY;
  const paths = [
    name
  ].flat();
  const runMatcher = /* @__PURE__ */ __name(async (locateOptions) => {
    if (typeof name !== "function") {
      return locatePath(paths, locateOptions);
    }
    const foundPath = await name(locateOptions.cwd);
    if (typeof foundPath === "string") {
      return locatePath([
        foundPath
      ], locateOptions);
    }
    return foundPath;
  }, "runMatcher");
  const matches = [];
  while (true) {
    const foundPath = await runMatcher({
      ...options,
      cwd: directory
    });
    if (foundPath === findUpStop) {
      break;
    }
    if (foundPath) {
      matches.push(import_node_path2.default.resolve(directory, foundPath));
    }
    if (directory === stopAt || matches.length >= limit) {
      break;
    }
    directory = import_node_path2.default.dirname(directory);
  }
  return matches;
}
async function findUp(name, options = {}) {
  const matches = await findUpMultiple(name, {
    ...options,
    limit: 1
  });
  return matches[0];
}
async function detectPackageManager(cwd = import_node_process.default.cwd()) {
  let agent = null;
  const lockPath = await findUp(Object.keys(LOCKS), {
    cwd
  });
  let packageJsonPath;
  if (lockPath)
    packageJsonPath = import_node_path.default.resolve(lockPath, "../package.json");
  else
    packageJsonPath = await findUp("package.json", {
      cwd
    });
  if (packageJsonPath && import_node_fs.default.existsSync(packageJsonPath)) {
    try {
      const pkg = JSON.parse(import_node_fs.default.readFileSync(packageJsonPath, "utf8"));
      if (typeof pkg.packageManager === "string") {
        const [name, version] = pkg.packageManager.split("@");
        if (name === "yarn" && Number.parseInt(version) > 1)
          agent = "yarn@berry";
        else if (name === "pnpm" && Number.parseInt(version) < 7)
          agent = "pnpm@6";
        else if (AGENTS.includes(name))
          agent = name;
        else
          console.warn("[ni] Unknown packageManager:", pkg.packageManager);
      }
    } catch {
    }
  }
  if (!agent && lockPath)
    agent = LOCKS[import_node_path.default.basename(lockPath)];
  return agent;
}
async function installPackage(names, options = {}) {
  const detectedAgent = options.packageManager || await detectPackageManager(options.cwd) || "npm";
  const [agent] = detectedAgent.split("@");
  if (!Array.isArray(names))
    names = [
      names
    ];
  const args = options.additionalArgs || [];
  if (options.preferOffline) {
    if (detectedAgent === "yarn@berry")
      args.unshift("--cached");
    else
      args.unshift("--prefer-offline");
  }
  if (agent === "pnpm" && (0, import_node_fs3.existsSync)((0, import_node_path4.resolve)(options.cwd ?? import_node_process3.default.cwd(), "pnpm-workspace.yaml")))
    args.unshift("-w");
  return (0, import_ez_spawn.async)(agent, [
    agent === "yarn" ? "add" : "install",
    options.dev ? "-D" : "",
    ...args,
    ...names
  ].filter(Boolean), {
    stdio: options.silent ? "ignore" : "inherit",
    cwd: options.cwd
  });
}
var import_node_fs, import_node_path, import_node_process, import_node_path2, import_node_process2, import_node_path3, import_node_fs2, import_node_url, import_node_url2, import_node_fs3, import_node_process3, import_node_path4, import_ez_spawn, __defProp2, __name, Node, Queue, EndError, testElement, finder, typeMappings, matchType, toPath, findUpStop, AGENTS, LOCKS;
var init_dist = __esm({
  "node_modules/.pnpm/@jiangweiye+install-pkg@0.0.0/node_modules/@jiangweiye/install-pkg/dist/index.js"() {
    "use strict";
    init_cjs_shims();
    import_node_fs = __toESM(require("fs"), 1);
    import_node_path = __toESM(require("path"), 1);
    import_node_process = __toESM(require("process"), 1);
    import_node_path2 = __toESM(require("path"), 1);
    import_node_process2 = __toESM(require("process"), 1);
    import_node_path3 = __toESM(require("path"), 1);
    import_node_fs2 = __toESM(require("fs"), 1);
    import_node_url = require("url");
    import_node_url2 = require("url");
    import_node_fs3 = require("fs");
    import_node_process3 = __toESM(require("process"), 1);
    import_node_path4 = require("path");
    import_ez_spawn = __toESM(require_lib(), 1);
    __defProp2 = Object.defineProperty;
    __name = (target, value) => __defProp2(target, "name", { value, configurable: true });
    Node = class Node2 {
      static {
        __name(this, "Node");
      }
      value;
      next;
      constructor(value) {
        this.value = value;
      }
    };
    Queue = class {
      static {
        __name(this, "Queue");
      }
      #head;
      #tail;
      #size;
      constructor() {
        this.clear();
      }
      enqueue(value) {
        const node2 = new Node(value);
        if (this.#head) {
          this.#tail.next = node2;
          this.#tail = node2;
        } else {
          this.#head = node2;
          this.#tail = node2;
        }
        this.#size++;
      }
      dequeue() {
        const current = this.#head;
        if (!current) {
          return;
        }
        this.#head = this.#head.next;
        this.#size--;
        return current.value;
      }
      clear() {
        this.#head = void 0;
        this.#tail = void 0;
        this.#size = 0;
      }
      get size() {
        return this.#size;
      }
      *[Symbol.iterator]() {
        let current = this.#head;
        while (current) {
          yield current.value;
          current = current.next;
        }
      }
    };
    __name(pLimit, "pLimit");
    EndError = class EndError2 extends Error {
      static {
        __name(this, "EndError");
      }
      constructor(value) {
        super();
        this.value = value;
      }
    };
    testElement = /* @__PURE__ */ __name(async (element, tester) => tester(await element), "testElement");
    finder = /* @__PURE__ */ __name(async (element) => {
      const values = await Promise.all(element);
      if (values[1] === true) {
        throw new EndError(values[0]);
      }
      return false;
    }, "finder");
    __name(pLocate, "pLocate");
    typeMappings = {
      directory: "isDirectory",
      file: "isFile"
    };
    __name(checkType, "checkType");
    matchType = /* @__PURE__ */ __name((type, stat) => stat[typeMappings[type]](), "matchType");
    toPath = /* @__PURE__ */ __name((urlOrPath) => urlOrPath instanceof URL ? (0, import_node_url.fileURLToPath)(urlOrPath) : urlOrPath, "toPath");
    __name(locatePath, "locatePath");
    __name(toPath2, "toPath");
    findUpStop = Symbol("findUpStop");
    __name(findUpMultiple, "findUpMultiple");
    __name(findUp, "findUp");
    AGENTS = [
      "pnpm",
      "yarn",
      "npm",
      "pnpm@6",
      "yarn@berry",
      "bun"
    ];
    LOCKS = {
      "bun.lockb": "bun",
      "pnpm-lock.yaml": "pnpm",
      "yarn.lock": "yarn",
      "package-lock.json": "npm",
      "npm-shrinkwrap.json": "npm"
    };
    __name(detectPackageManager, "detectPackageManager");
    __name(installPackage, "installPackage");
  }
});

// node_modules/.pnpm/@jridgewell+sourcemap-codec@1.4.15/node_modules/@jridgewell/sourcemap-codec/dist/sourcemap-codec.mjs
function encode(decoded) {
  const state = new Int32Array(5);
  const bufLength = 1024 * 16;
  const subLength = bufLength - 36;
  const buf = new Uint8Array(bufLength);
  const sub = buf.subarray(0, subLength);
  let pos = 0;
  let out = "";
  for (let i = 0; i < decoded.length; i++) {
    const line = decoded[i];
    if (i > 0) {
      if (pos === bufLength) {
        out += td.decode(buf);
        pos = 0;
      }
      buf[pos++] = semicolon;
    }
    if (line.length === 0)
      continue;
    state[0] = 0;
    for (let j = 0; j < line.length; j++) {
      const segment = line[j];
      if (pos > subLength) {
        out += td.decode(sub);
        buf.copyWithin(0, subLength, pos);
        pos -= subLength;
      }
      if (j > 0)
        buf[pos++] = comma;
      pos = encodeInteger(buf, pos, state, segment, 0);
      if (segment.length === 1)
        continue;
      pos = encodeInteger(buf, pos, state, segment, 1);
      pos = encodeInteger(buf, pos, state, segment, 2);
      pos = encodeInteger(buf, pos, state, segment, 3);
      if (segment.length === 4)
        continue;
      pos = encodeInteger(buf, pos, state, segment, 4);
    }
  }
  return out + td.decode(buf.subarray(0, pos));
}
function encodeInteger(buf, pos, state, segment, j) {
  const next = segment[j];
  let num = next - state[j];
  state[j] = next;
  num = num < 0 ? -num << 1 | 1 : num << 1;
  do {
    let clamped = num & 31;
    num >>>= 5;
    if (num > 0)
      clamped |= 32;
    buf[pos++] = intToChar[clamped];
  } while (num > 0);
  return pos;
}
var comma, semicolon, chars, intToChar, charToInt, td;
var init_sourcemap_codec = __esm({
  "node_modules/.pnpm/@jridgewell+sourcemap-codec@1.4.15/node_modules/@jridgewell/sourcemap-codec/dist/sourcemap-codec.mjs"() {
    "use strict";
    init_cjs_shims();
    comma = ",".charCodeAt(0);
    semicolon = ";".charCodeAt(0);
    chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
    intToChar = new Uint8Array(64);
    charToInt = new Uint8Array(128);
    for (let i = 0; i < chars.length; i++) {
      const c = chars.charCodeAt(i);
      intToChar[i] = c;
      charToInt[c] = i;
    }
    td = typeof TextDecoder !== "undefined" ? /* @__PURE__ */ new TextDecoder() : typeof Buffer !== "undefined" ? {
      decode(buf) {
        const out = Buffer.from(buf.buffer, buf.byteOffset, buf.byteLength);
        return out.toString();
      }
    } : {
      decode(buf) {
        let out = "";
        for (let i = 0; i < buf.length; i++) {
          out += String.fromCharCode(buf[i]);
        }
        return out;
      }
    };
  }
});

// node_modules/.pnpm/magic-string@0.30.10/node_modules/magic-string/dist/magic-string.es.mjs
function getBtoa() {
  if (typeof globalThis !== "undefined" && typeof globalThis.btoa === "function") {
    return (str) => globalThis.btoa(unescape(encodeURIComponent(str)));
  } else if (typeof Buffer === "function") {
    return (str) => Buffer.from(str, "utf-8").toString("base64");
  } else {
    return () => {
      throw new Error("Unsupported environment: `window.btoa` or `Buffer` should be supported.");
    };
  }
}
function guessIndent(code) {
  const lines = code.split("\n");
  const tabbed = lines.filter((line) => /^\t+/.test(line));
  const spaced = lines.filter((line) => /^ {2,}/.test(line));
  if (tabbed.length === 0 && spaced.length === 0) {
    return null;
  }
  if (tabbed.length >= spaced.length) {
    return "	";
  }
  const min = spaced.reduce((previous, current) => {
    const numSpaces = /^ +/.exec(current)[0].length;
    return Math.min(numSpaces, previous);
  }, Infinity);
  return new Array(min + 1).join(" ");
}
function getRelativePath(from, to) {
  const fromParts = from.split(/[/\\]/);
  const toParts = to.split(/[/\\]/);
  fromParts.pop();
  while (fromParts[0] === toParts[0]) {
    fromParts.shift();
    toParts.shift();
  }
  if (fromParts.length) {
    let i = fromParts.length;
    while (i--)
      fromParts[i] = "..";
  }
  return fromParts.concat(toParts).join("/");
}
function isObject(thing) {
  return toString.call(thing) === "[object Object]";
}
function getLocator(source) {
  const originalLines = source.split("\n");
  const lineOffsets = [];
  for (let i = 0, pos = 0; i < originalLines.length; i++) {
    lineOffsets.push(pos);
    pos += originalLines[i].length + 1;
  }
  return function locate(index2) {
    let i = 0;
    let j = lineOffsets.length;
    while (i < j) {
      const m = i + j >> 1;
      if (index2 < lineOffsets[m]) {
        j = m;
      } else {
        i = m + 1;
      }
    }
    const line = i - 1;
    const column = index2 - lineOffsets[line];
    return { line, column };
  };
}
var BitSet, Chunk, btoa, SourceMap, toString, wordRegex, Mappings, n, warned, MagicString;
var init_magic_string_es = __esm({
  "node_modules/.pnpm/magic-string@0.30.10/node_modules/magic-string/dist/magic-string.es.mjs"() {
    "use strict";
    init_cjs_shims();
    init_sourcemap_codec();
    BitSet = class _BitSet {
      constructor(arg) {
        this.bits = arg instanceof _BitSet ? arg.bits.slice() : [];
      }
      add(n2) {
        this.bits[n2 >> 5] |= 1 << (n2 & 31);
      }
      has(n2) {
        return !!(this.bits[n2 >> 5] & 1 << (n2 & 31));
      }
    };
    Chunk = class _Chunk {
      constructor(start, end, content) {
        this.start = start;
        this.end = end;
        this.original = content;
        this.intro = "";
        this.outro = "";
        this.content = content;
        this.storeName = false;
        this.edited = false;
        {
          this.previous = null;
          this.next = null;
        }
      }
      appendLeft(content) {
        this.outro += content;
      }
      appendRight(content) {
        this.intro = this.intro + content;
      }
      clone() {
        const chunk = new _Chunk(this.start, this.end, this.original);
        chunk.intro = this.intro;
        chunk.outro = this.outro;
        chunk.content = this.content;
        chunk.storeName = this.storeName;
        chunk.edited = this.edited;
        return chunk;
      }
      contains(index2) {
        return this.start < index2 && index2 < this.end;
      }
      eachNext(fn) {
        let chunk = this;
        while (chunk) {
          fn(chunk);
          chunk = chunk.next;
        }
      }
      eachPrevious(fn) {
        let chunk = this;
        while (chunk) {
          fn(chunk);
          chunk = chunk.previous;
        }
      }
      edit(content, storeName, contentOnly) {
        this.content = content;
        if (!contentOnly) {
          this.intro = "";
          this.outro = "";
        }
        this.storeName = storeName;
        this.edited = true;
        return this;
      }
      prependLeft(content) {
        this.outro = content + this.outro;
      }
      prependRight(content) {
        this.intro = content + this.intro;
      }
      reset() {
        this.intro = "";
        this.outro = "";
        if (this.edited) {
          this.content = this.original;
          this.storeName = false;
          this.edited = false;
        }
      }
      split(index2) {
        const sliceIndex = index2 - this.start;
        const originalBefore = this.original.slice(0, sliceIndex);
        const originalAfter = this.original.slice(sliceIndex);
        this.original = originalBefore;
        const newChunk = new _Chunk(index2, this.end, originalAfter);
        newChunk.outro = this.outro;
        this.outro = "";
        this.end = index2;
        if (this.edited) {
          newChunk.edit("", false);
          this.content = "";
        } else {
          this.content = originalBefore;
        }
        newChunk.next = this.next;
        if (newChunk.next)
          newChunk.next.previous = newChunk;
        newChunk.previous = this;
        this.next = newChunk;
        return newChunk;
      }
      toString() {
        return this.intro + this.content + this.outro;
      }
      trimEnd(rx) {
        this.outro = this.outro.replace(rx, "");
        if (this.outro.length)
          return true;
        const trimmed = this.content.replace(rx, "");
        if (trimmed.length) {
          if (trimmed !== this.content) {
            this.split(this.start + trimmed.length).edit("", void 0, true);
            if (this.edited) {
              this.edit(trimmed, this.storeName, true);
            }
          }
          return true;
        } else {
          this.edit("", void 0, true);
          this.intro = this.intro.replace(rx, "");
          if (this.intro.length)
            return true;
        }
      }
      trimStart(rx) {
        this.intro = this.intro.replace(rx, "");
        if (this.intro.length)
          return true;
        const trimmed = this.content.replace(rx, "");
        if (trimmed.length) {
          if (trimmed !== this.content) {
            const newChunk = this.split(this.end - trimmed.length);
            if (this.edited) {
              newChunk.edit(trimmed, this.storeName, true);
            }
            this.edit("", void 0, true);
          }
          return true;
        } else {
          this.edit("", void 0, true);
          this.outro = this.outro.replace(rx, "");
          if (this.outro.length)
            return true;
        }
      }
    };
    btoa = /* @__PURE__ */ getBtoa();
    SourceMap = class {
      constructor(properties) {
        this.version = 3;
        this.file = properties.file;
        this.sources = properties.sources;
        this.sourcesContent = properties.sourcesContent;
        this.names = properties.names;
        this.mappings = encode(properties.mappings);
        if (typeof properties.x_google_ignoreList !== "undefined") {
          this.x_google_ignoreList = properties.x_google_ignoreList;
        }
      }
      toString() {
        return JSON.stringify(this);
      }
      toUrl() {
        return "data:application/json;charset=utf-8;base64," + btoa(this.toString());
      }
    };
    toString = Object.prototype.toString;
    wordRegex = /\w/;
    Mappings = class {
      constructor(hires) {
        this.hires = hires;
        this.generatedCodeLine = 0;
        this.generatedCodeColumn = 0;
        this.raw = [];
        this.rawSegments = this.raw[this.generatedCodeLine] = [];
        this.pending = null;
      }
      addEdit(sourceIndex, content, loc, nameIndex) {
        if (content.length) {
          const contentLengthMinusOne = content.length - 1;
          let contentLineEnd = content.indexOf("\n", 0);
          let previousContentLineEnd = -1;
          while (contentLineEnd >= 0 && contentLengthMinusOne > contentLineEnd) {
            const segment2 = [this.generatedCodeColumn, sourceIndex, loc.line, loc.column];
            if (nameIndex >= 0) {
              segment2.push(nameIndex);
            }
            this.rawSegments.push(segment2);
            this.generatedCodeLine += 1;
            this.raw[this.generatedCodeLine] = this.rawSegments = [];
            this.generatedCodeColumn = 0;
            previousContentLineEnd = contentLineEnd;
            contentLineEnd = content.indexOf("\n", contentLineEnd + 1);
          }
          const segment = [this.generatedCodeColumn, sourceIndex, loc.line, loc.column];
          if (nameIndex >= 0) {
            segment.push(nameIndex);
          }
          this.rawSegments.push(segment);
          this.advance(content.slice(previousContentLineEnd + 1));
        } else if (this.pending) {
          this.rawSegments.push(this.pending);
          this.advance(content);
        }
        this.pending = null;
      }
      addUneditedChunk(sourceIndex, chunk, original, loc, sourcemapLocations) {
        let originalCharIndex = chunk.start;
        let first = true;
        let charInHiresBoundary = false;
        while (originalCharIndex < chunk.end) {
          if (this.hires || first || sourcemapLocations.has(originalCharIndex)) {
            const segment = [this.generatedCodeColumn, sourceIndex, loc.line, loc.column];
            if (this.hires === "boundary") {
              if (wordRegex.test(original[originalCharIndex])) {
                if (!charInHiresBoundary) {
                  this.rawSegments.push(segment);
                  charInHiresBoundary = true;
                }
              } else {
                this.rawSegments.push(segment);
                charInHiresBoundary = false;
              }
            } else {
              this.rawSegments.push(segment);
            }
          }
          if (original[originalCharIndex] === "\n") {
            loc.line += 1;
            loc.column = 0;
            this.generatedCodeLine += 1;
            this.raw[this.generatedCodeLine] = this.rawSegments = [];
            this.generatedCodeColumn = 0;
            first = true;
          } else {
            loc.column += 1;
            this.generatedCodeColumn += 1;
            first = false;
          }
          originalCharIndex += 1;
        }
        this.pending = null;
      }
      advance(str) {
        if (!str)
          return;
        const lines = str.split("\n");
        if (lines.length > 1) {
          for (let i = 0; i < lines.length - 1; i++) {
            this.generatedCodeLine++;
            this.raw[this.generatedCodeLine] = this.rawSegments = [];
          }
          this.generatedCodeColumn = 0;
        }
        this.generatedCodeColumn += lines[lines.length - 1].length;
      }
    };
    n = "\n";
    warned = {
      insertLeft: false,
      insertRight: false,
      storeName: false
    };
    MagicString = class _MagicString {
      constructor(string, options = {}) {
        const chunk = new Chunk(0, string.length, string);
        Object.defineProperties(this, {
          original: { writable: true, value: string },
          outro: { writable: true, value: "" },
          intro: { writable: true, value: "" },
          firstChunk: { writable: true, value: chunk },
          lastChunk: { writable: true, value: chunk },
          lastSearchedChunk: { writable: true, value: chunk },
          byStart: { writable: true, value: {} },
          byEnd: { writable: true, value: {} },
          filename: { writable: true, value: options.filename },
          indentExclusionRanges: { writable: true, value: options.indentExclusionRanges },
          sourcemapLocations: { writable: true, value: new BitSet() },
          storedNames: { writable: true, value: {} },
          indentStr: { writable: true, value: void 0 },
          ignoreList: { writable: true, value: options.ignoreList }
        });
        this.byStart[0] = chunk;
        this.byEnd[string.length] = chunk;
      }
      addSourcemapLocation(char) {
        this.sourcemapLocations.add(char);
      }
      append(content) {
        if (typeof content !== "string")
          throw new TypeError("outro content must be a string");
        this.outro += content;
        return this;
      }
      appendLeft(index2, content) {
        if (typeof content !== "string")
          throw new TypeError("inserted content must be a string");
        this._split(index2);
        const chunk = this.byEnd[index2];
        if (chunk) {
          chunk.appendLeft(content);
        } else {
          this.intro += content;
        }
        return this;
      }
      appendRight(index2, content) {
        if (typeof content !== "string")
          throw new TypeError("inserted content must be a string");
        this._split(index2);
        const chunk = this.byStart[index2];
        if (chunk) {
          chunk.appendRight(content);
        } else {
          this.outro += content;
        }
        return this;
      }
      clone() {
        const cloned = new _MagicString(this.original, { filename: this.filename });
        let originalChunk = this.firstChunk;
        let clonedChunk = cloned.firstChunk = cloned.lastSearchedChunk = originalChunk.clone();
        while (originalChunk) {
          cloned.byStart[clonedChunk.start] = clonedChunk;
          cloned.byEnd[clonedChunk.end] = clonedChunk;
          const nextOriginalChunk = originalChunk.next;
          const nextClonedChunk = nextOriginalChunk && nextOriginalChunk.clone();
          if (nextClonedChunk) {
            clonedChunk.next = nextClonedChunk;
            nextClonedChunk.previous = clonedChunk;
            clonedChunk = nextClonedChunk;
          }
          originalChunk = nextOriginalChunk;
        }
        cloned.lastChunk = clonedChunk;
        if (this.indentExclusionRanges) {
          cloned.indentExclusionRanges = this.indentExclusionRanges.slice();
        }
        cloned.sourcemapLocations = new BitSet(this.sourcemapLocations);
        cloned.intro = this.intro;
        cloned.outro = this.outro;
        return cloned;
      }
      generateDecodedMap(options) {
        options = options || {};
        const sourceIndex = 0;
        const names = Object.keys(this.storedNames);
        const mappings = new Mappings(options.hires);
        const locate = getLocator(this.original);
        if (this.intro) {
          mappings.advance(this.intro);
        }
        this.firstChunk.eachNext((chunk) => {
          const loc = locate(chunk.start);
          if (chunk.intro.length)
            mappings.advance(chunk.intro);
          if (chunk.edited) {
            mappings.addEdit(
              sourceIndex,
              chunk.content,
              loc,
              chunk.storeName ? names.indexOf(chunk.original) : -1
            );
          } else {
            mappings.addUneditedChunk(sourceIndex, chunk, this.original, loc, this.sourcemapLocations);
          }
          if (chunk.outro.length)
            mappings.advance(chunk.outro);
        });
        return {
          file: options.file ? options.file.split(/[/\\]/).pop() : void 0,
          sources: [
            options.source ? getRelativePath(options.file || "", options.source) : options.file || ""
          ],
          sourcesContent: options.includeContent ? [this.original] : void 0,
          names,
          mappings: mappings.raw,
          x_google_ignoreList: this.ignoreList ? [sourceIndex] : void 0
        };
      }
      generateMap(options) {
        return new SourceMap(this.generateDecodedMap(options));
      }
      _ensureindentStr() {
        if (this.indentStr === void 0) {
          this.indentStr = guessIndent(this.original);
        }
      }
      _getRawIndentString() {
        this._ensureindentStr();
        return this.indentStr;
      }
      getIndentString() {
        this._ensureindentStr();
        return this.indentStr === null ? "	" : this.indentStr;
      }
      indent(indentStr, options) {
        const pattern = /^[^\r\n]/gm;
        if (isObject(indentStr)) {
          options = indentStr;
          indentStr = void 0;
        }
        if (indentStr === void 0) {
          this._ensureindentStr();
          indentStr = this.indentStr || "	";
        }
        if (indentStr === "")
          return this;
        options = options || {};
        const isExcluded = {};
        if (options.exclude) {
          const exclusions = typeof options.exclude[0] === "number" ? [options.exclude] : options.exclude;
          exclusions.forEach((exclusion) => {
            for (let i = exclusion[0]; i < exclusion[1]; i += 1) {
              isExcluded[i] = true;
            }
          });
        }
        let shouldIndentNextCharacter = options.indentStart !== false;
        const replacer = (match) => {
          if (shouldIndentNextCharacter)
            return `${indentStr}${match}`;
          shouldIndentNextCharacter = true;
          return match;
        };
        this.intro = this.intro.replace(pattern, replacer);
        let charIndex = 0;
        let chunk = this.firstChunk;
        while (chunk) {
          const end = chunk.end;
          if (chunk.edited) {
            if (!isExcluded[charIndex]) {
              chunk.content = chunk.content.replace(pattern, replacer);
              if (chunk.content.length) {
                shouldIndentNextCharacter = chunk.content[chunk.content.length - 1] === "\n";
              }
            }
          } else {
            charIndex = chunk.start;
            while (charIndex < end) {
              if (!isExcluded[charIndex]) {
                const char = this.original[charIndex];
                if (char === "\n") {
                  shouldIndentNextCharacter = true;
                } else if (char !== "\r" && shouldIndentNextCharacter) {
                  shouldIndentNextCharacter = false;
                  if (charIndex === chunk.start) {
                    chunk.prependRight(indentStr);
                  } else {
                    this._splitChunk(chunk, charIndex);
                    chunk = chunk.next;
                    chunk.prependRight(indentStr);
                  }
                }
              }
              charIndex += 1;
            }
          }
          charIndex = chunk.end;
          chunk = chunk.next;
        }
        this.outro = this.outro.replace(pattern, replacer);
        return this;
      }
      insert() {
        throw new Error(
          "magicString.insert(...) is deprecated. Use prependRight(...) or appendLeft(...)"
        );
      }
      insertLeft(index2, content) {
        if (!warned.insertLeft) {
          console.warn(
            "magicString.insertLeft(...) is deprecated. Use magicString.appendLeft(...) instead"
          );
          warned.insertLeft = true;
        }
        return this.appendLeft(index2, content);
      }
      insertRight(index2, content) {
        if (!warned.insertRight) {
          console.warn(
            "magicString.insertRight(...) is deprecated. Use magicString.prependRight(...) instead"
          );
          warned.insertRight = true;
        }
        return this.prependRight(index2, content);
      }
      move(start, end, index2) {
        if (index2 >= start && index2 <= end)
          throw new Error("Cannot move a selection inside itself");
        this._split(start);
        this._split(end);
        this._split(index2);
        const first = this.byStart[start];
        const last = this.byEnd[end];
        const oldLeft = first.previous;
        const oldRight = last.next;
        const newRight = this.byStart[index2];
        if (!newRight && last === this.lastChunk)
          return this;
        const newLeft = newRight ? newRight.previous : this.lastChunk;
        if (oldLeft)
          oldLeft.next = oldRight;
        if (oldRight)
          oldRight.previous = oldLeft;
        if (newLeft)
          newLeft.next = first;
        if (newRight)
          newRight.previous = last;
        if (!first.previous)
          this.firstChunk = last.next;
        if (!last.next) {
          this.lastChunk = first.previous;
          this.lastChunk.next = null;
        }
        first.previous = newLeft;
        last.next = newRight || null;
        if (!newLeft)
          this.firstChunk = first;
        if (!newRight)
          this.lastChunk = last;
        return this;
      }
      overwrite(start, end, content, options) {
        options = options || {};
        return this.update(start, end, content, { ...options, overwrite: !options.contentOnly });
      }
      update(start, end, content, options) {
        if (typeof content !== "string")
          throw new TypeError("replacement content must be a string");
        while (start < 0)
          start += this.original.length;
        while (end < 0)
          end += this.original.length;
        if (end > this.original.length)
          throw new Error("end is out of bounds");
        if (start === end)
          throw new Error(
            "Cannot overwrite a zero-length range \u2013 use appendLeft or prependRight instead"
          );
        this._split(start);
        this._split(end);
        if (options === true) {
          if (!warned.storeName) {
            console.warn(
              "The final argument to magicString.overwrite(...) should be an options object. See https://github.com/rich-harris/magic-string"
            );
            warned.storeName = true;
          }
          options = { storeName: true };
        }
        const storeName = options !== void 0 ? options.storeName : false;
        const overwrite = options !== void 0 ? options.overwrite : false;
        if (storeName) {
          const original = this.original.slice(start, end);
          Object.defineProperty(this.storedNames, original, {
            writable: true,
            value: true,
            enumerable: true
          });
        }
        const first = this.byStart[start];
        const last = this.byEnd[end];
        if (first) {
          let chunk = first;
          while (chunk !== last) {
            if (chunk.next !== this.byStart[chunk.end]) {
              throw new Error("Cannot overwrite across a split point");
            }
            chunk = chunk.next;
            chunk.edit("", false);
          }
          first.edit(content, storeName, !overwrite);
        } else {
          const newChunk = new Chunk(start, end, "").edit(content, storeName);
          last.next = newChunk;
          newChunk.previous = last;
        }
        return this;
      }
      prepend(content) {
        if (typeof content !== "string")
          throw new TypeError("outro content must be a string");
        this.intro = content + this.intro;
        return this;
      }
      prependLeft(index2, content) {
        if (typeof content !== "string")
          throw new TypeError("inserted content must be a string");
        this._split(index2);
        const chunk = this.byEnd[index2];
        if (chunk) {
          chunk.prependLeft(content);
        } else {
          this.intro = content + this.intro;
        }
        return this;
      }
      prependRight(index2, content) {
        if (typeof content !== "string")
          throw new TypeError("inserted content must be a string");
        this._split(index2);
        const chunk = this.byStart[index2];
        if (chunk) {
          chunk.prependRight(content);
        } else {
          this.outro = content + this.outro;
        }
        return this;
      }
      remove(start, end) {
        while (start < 0)
          start += this.original.length;
        while (end < 0)
          end += this.original.length;
        if (start === end)
          return this;
        if (start < 0 || end > this.original.length)
          throw new Error("Character is out of bounds");
        if (start > end)
          throw new Error("end must be greater than start");
        this._split(start);
        this._split(end);
        let chunk = this.byStart[start];
        while (chunk) {
          chunk.intro = "";
          chunk.outro = "";
          chunk.edit("");
          chunk = end > chunk.end ? this.byStart[chunk.end] : null;
        }
        return this;
      }
      reset(start, end) {
        while (start < 0)
          start += this.original.length;
        while (end < 0)
          end += this.original.length;
        if (start === end)
          return this;
        if (start < 0 || end > this.original.length)
          throw new Error("Character is out of bounds");
        if (start > end)
          throw new Error("end must be greater than start");
        this._split(start);
        this._split(end);
        let chunk = this.byStart[start];
        while (chunk) {
          chunk.reset();
          chunk = end > chunk.end ? this.byStart[chunk.end] : null;
        }
        return this;
      }
      lastChar() {
        if (this.outro.length)
          return this.outro[this.outro.length - 1];
        let chunk = this.lastChunk;
        do {
          if (chunk.outro.length)
            return chunk.outro[chunk.outro.length - 1];
          if (chunk.content.length)
            return chunk.content[chunk.content.length - 1];
          if (chunk.intro.length)
            return chunk.intro[chunk.intro.length - 1];
        } while (chunk = chunk.previous);
        if (this.intro.length)
          return this.intro[this.intro.length - 1];
        return "";
      }
      lastLine() {
        let lineIndex = this.outro.lastIndexOf(n);
        if (lineIndex !== -1)
          return this.outro.substr(lineIndex + 1);
        let lineStr = this.outro;
        let chunk = this.lastChunk;
        do {
          if (chunk.outro.length > 0) {
            lineIndex = chunk.outro.lastIndexOf(n);
            if (lineIndex !== -1)
              return chunk.outro.substr(lineIndex + 1) + lineStr;
            lineStr = chunk.outro + lineStr;
          }
          if (chunk.content.length > 0) {
            lineIndex = chunk.content.lastIndexOf(n);
            if (lineIndex !== -1)
              return chunk.content.substr(lineIndex + 1) + lineStr;
            lineStr = chunk.content + lineStr;
          }
          if (chunk.intro.length > 0) {
            lineIndex = chunk.intro.lastIndexOf(n);
            if (lineIndex !== -1)
              return chunk.intro.substr(lineIndex + 1) + lineStr;
            lineStr = chunk.intro + lineStr;
          }
        } while (chunk = chunk.previous);
        lineIndex = this.intro.lastIndexOf(n);
        if (lineIndex !== -1)
          return this.intro.substr(lineIndex + 1) + lineStr;
        return this.intro + lineStr;
      }
      slice(start = 0, end = this.original.length) {
        while (start < 0)
          start += this.original.length;
        while (end < 0)
          end += this.original.length;
        let result = "";
        let chunk = this.firstChunk;
        while (chunk && (chunk.start > start || chunk.end <= start)) {
          if (chunk.start < end && chunk.end >= end) {
            return result;
          }
          chunk = chunk.next;
        }
        if (chunk && chunk.edited && chunk.start !== start)
          throw new Error(`Cannot use replaced character ${start} as slice start anchor.`);
        const startChunk = chunk;
        while (chunk) {
          if (chunk.intro && (startChunk !== chunk || chunk.start === start)) {
            result += chunk.intro;
          }
          const containsEnd = chunk.start < end && chunk.end >= end;
          if (containsEnd && chunk.edited && chunk.end !== end)
            throw new Error(`Cannot use replaced character ${end} as slice end anchor.`);
          const sliceStart = startChunk === chunk ? start - chunk.start : 0;
          const sliceEnd = containsEnd ? chunk.content.length + end - chunk.end : chunk.content.length;
          result += chunk.content.slice(sliceStart, sliceEnd);
          if (chunk.outro && (!containsEnd || chunk.end === end)) {
            result += chunk.outro;
          }
          if (containsEnd) {
            break;
          }
          chunk = chunk.next;
        }
        return result;
      }
      // TODO deprecate this? not really very useful
      snip(start, end) {
        const clone = this.clone();
        clone.remove(0, start);
        clone.remove(end, clone.original.length);
        return clone;
      }
      _split(index2) {
        if (this.byStart[index2] || this.byEnd[index2])
          return;
        let chunk = this.lastSearchedChunk;
        const searchForward = index2 > chunk.end;
        while (chunk) {
          if (chunk.contains(index2))
            return this._splitChunk(chunk, index2);
          chunk = searchForward ? this.byStart[chunk.end] : this.byEnd[chunk.start];
        }
      }
      _splitChunk(chunk, index2) {
        if (chunk.edited && chunk.content.length) {
          const loc = getLocator(this.original)(index2);
          throw new Error(
            `Cannot split a chunk that has already been edited (${loc.line}:${loc.column} \u2013 "${chunk.original}")`
          );
        }
        const newChunk = chunk.split(index2);
        this.byEnd[index2] = chunk;
        this.byStart[index2] = newChunk;
        this.byEnd[newChunk.end] = newChunk;
        if (chunk === this.lastChunk)
          this.lastChunk = newChunk;
        this.lastSearchedChunk = chunk;
        return true;
      }
      toString() {
        let str = this.intro;
        let chunk = this.firstChunk;
        while (chunk) {
          str += chunk.toString();
          chunk = chunk.next;
        }
        return str + this.outro;
      }
      isEmpty() {
        let chunk = this.firstChunk;
        do {
          if (chunk.intro.length && chunk.intro.trim() || chunk.content.length && chunk.content.trim() || chunk.outro.length && chunk.outro.trim())
            return false;
        } while (chunk = chunk.next);
        return true;
      }
      length() {
        let chunk = this.firstChunk;
        let length = 0;
        do {
          length += chunk.intro.length + chunk.content.length + chunk.outro.length;
        } while (chunk = chunk.next);
        return length;
      }
      trimLines() {
        return this.trim("[\\r\\n]");
      }
      trim(charType) {
        return this.trimStart(charType).trimEnd(charType);
      }
      trimEndAborted(charType) {
        const rx = new RegExp((charType || "\\s") + "+$");
        this.outro = this.outro.replace(rx, "");
        if (this.outro.length)
          return true;
        let chunk = this.lastChunk;
        do {
          const end = chunk.end;
          const aborted = chunk.trimEnd(rx);
          if (chunk.end !== end) {
            if (this.lastChunk === chunk) {
              this.lastChunk = chunk.next;
            }
            this.byEnd[chunk.end] = chunk;
            this.byStart[chunk.next.start] = chunk.next;
            this.byEnd[chunk.next.end] = chunk.next;
          }
          if (aborted)
            return true;
          chunk = chunk.previous;
        } while (chunk);
        return false;
      }
      trimEnd(charType) {
        this.trimEndAborted(charType);
        return this;
      }
      trimStartAborted(charType) {
        const rx = new RegExp("^" + (charType || "\\s") + "+");
        this.intro = this.intro.replace(rx, "");
        if (this.intro.length)
          return true;
        let chunk = this.firstChunk;
        do {
          const end = chunk.end;
          const aborted = chunk.trimStart(rx);
          if (chunk.end !== end) {
            if (chunk === this.lastChunk)
              this.lastChunk = chunk.next;
            this.byEnd[chunk.end] = chunk;
            this.byStart[chunk.next.start] = chunk.next;
            this.byEnd[chunk.next.end] = chunk.next;
          }
          if (aborted)
            return true;
          chunk = chunk.next;
        } while (chunk);
        return false;
      }
      trimStart(charType) {
        this.trimStartAborted(charType);
        return this;
      }
      hasChanged() {
        return this.original !== this.toString();
      }
      _replaceRegexp(searchValue, replacement) {
        function getReplacement(match, str) {
          if (typeof replacement === "string") {
            return replacement.replace(/\$(\$|&|\d+)/g, (_, i) => {
              if (i === "$")
                return "$";
              if (i === "&")
                return match[0];
              const num = +i;
              if (num < match.length)
                return match[+i];
              return `$${i}`;
            });
          } else {
            return replacement(...match, match.index, str, match.groups);
          }
        }
        function matchAll(re, str) {
          let match;
          const matches = [];
          while (match = re.exec(str)) {
            matches.push(match);
          }
          return matches;
        }
        if (searchValue.global) {
          const matches = matchAll(searchValue, this.original);
          matches.forEach((match) => {
            if (match.index != null) {
              const replacement2 = getReplacement(match, this.original);
              if (replacement2 !== match[0]) {
                this.overwrite(
                  match.index,
                  match.index + match[0].length,
                  replacement2
                );
              }
            }
          });
        } else {
          const match = this.original.match(searchValue);
          if (match && match.index != null) {
            const replacement2 = getReplacement(match, this.original);
            if (replacement2 !== match[0]) {
              this.overwrite(
                match.index,
                match.index + match[0].length,
                replacement2
              );
            }
          }
        }
        return this;
      }
      _replaceString(string, replacement) {
        const { original } = this;
        const index2 = original.indexOf(string);
        if (index2 !== -1) {
          this.overwrite(index2, index2 + string.length, replacement);
        }
        return this;
      }
      replace(searchValue, replacement) {
        if (typeof searchValue === "string") {
          return this._replaceString(searchValue, replacement);
        }
        return this._replaceRegexp(searchValue, replacement);
      }
      _replaceAllString(string, replacement) {
        const { original } = this;
        const stringLength = string.length;
        for (let index2 = original.indexOf(string); index2 !== -1; index2 = original.indexOf(string, index2 + stringLength)) {
          const previous = original.slice(index2, index2 + stringLength);
          if (previous !== replacement)
            this.overwrite(index2, index2 + stringLength, replacement);
        }
        return this;
      }
      replaceAll(searchValue, replacement) {
        if (typeof searchValue === "string") {
          return this._replaceAllString(searchValue, replacement);
        }
        if (!searchValue.global) {
          throw new TypeError(
            "MagicString.prototype.replaceAll called with a non-global RegExp argument"
          );
        }
        return this._replaceRegexp(searchValue, replacement);
      }
    };
  }
});

// node_modules/.pnpm/@pkgr+core@0.1.1/node_modules/@pkgr/core/lib/constants.js
var import_node_module, CWD, cjsRequire, EXTENSIONS;
var init_constants = __esm({
  "node_modules/.pnpm/@pkgr+core@0.1.1/node_modules/@pkgr/core/lib/constants.js"() {
    "use strict";
    init_cjs_shims();
    import_node_module = require("module");
    CWD = process.cwd();
    cjsRequire = typeof require === "undefined" ? (0, import_node_module.createRequire)(importMetaUrl) : require;
    EXTENSIONS = [".ts", ".tsx", ...Object.keys(cjsRequire.extensions)];
  }
});

// node_modules/.pnpm/@pkgr+core@0.1.1/node_modules/@pkgr/core/lib/helpers.js
var import_node_fs4, import_node_path5, tryPkg, isPkgAvailable, tryFile, tryExtensions, findUp2;
var init_helpers = __esm({
  "node_modules/.pnpm/@pkgr+core@0.1.1/node_modules/@pkgr/core/lib/helpers.js"() {
    "use strict";
    init_cjs_shims();
    import_node_fs4 = __toESM(require("fs"), 1);
    import_node_path5 = __toESM(require("path"), 1);
    init_constants();
    tryPkg = (pkg) => {
      try {
        return cjsRequire.resolve(pkg);
      } catch (_a) {
      }
    };
    isPkgAvailable = (pkg) => !!tryPkg(pkg);
    tryFile = (filePath, includeDir = false) => {
      if (typeof filePath === "string") {
        return import_node_fs4.default.existsSync(filePath) && (includeDir || import_node_fs4.default.statSync(filePath).isFile()) ? filePath : "";
      }
      for (const file of filePath !== null && filePath !== void 0 ? filePath : []) {
        if (tryFile(file, includeDir)) {
          return file;
        }
      }
      return "";
    };
    tryExtensions = (filepath, extensions = EXTENSIONS) => {
      const ext = [...extensions, ""].find((ext2) => tryFile(filepath + ext2));
      return ext == null ? "" : filepath + ext;
    };
    findUp2 = (searchEntry, searchFileOrIncludeDir, includeDir) => {
      console.assert(import_node_path5.default.isAbsolute(searchEntry));
      if (!tryFile(searchEntry, true) || searchEntry !== CWD && !searchEntry.startsWith(CWD + import_node_path5.default.sep)) {
        return "";
      }
      searchEntry = import_node_path5.default.resolve(import_node_fs4.default.statSync(searchEntry).isDirectory() ? searchEntry : import_node_path5.default.resolve(searchEntry, ".."));
      const isSearchFile = typeof searchFileOrIncludeDir === "string";
      const searchFile = isSearchFile ? searchFileOrIncludeDir : "package.json";
      do {
        const searched = tryFile(import_node_path5.default.resolve(searchEntry, searchFile), isSearchFile && includeDir);
        if (searched) {
          return searched;
        }
        searchEntry = import_node_path5.default.resolve(searchEntry, "..");
      } while (searchEntry === CWD || searchEntry.startsWith(CWD + import_node_path5.default.sep));
      return "";
    };
  }
});

// node_modules/.pnpm/@pkgr+core@0.1.1/node_modules/@pkgr/core/lib/index.js
var init_lib = __esm({
  "node_modules/.pnpm/@pkgr+core@0.1.1/node_modules/@pkgr/core/lib/index.js"() {
    "use strict";
    init_cjs_shims();
    init_constants();
    init_helpers();
  }
});

// node_modules/.pnpm/synckit@0.9.0/node_modules/synckit/lib/types.js
var init_types = __esm({
  "node_modules/.pnpm/synckit@0.9.0/node_modules/synckit/lib/types.js"() {
    "use strict";
    init_cjs_shims();
  }
});

// node_modules/.pnpm/synckit@0.9.0/node_modules/synckit/lib/index.js
function createSyncFn(workerPath, timeoutOrOptions) {
  syncFnCache !== null && syncFnCache !== void 0 ? syncFnCache : syncFnCache = /* @__PURE__ */ new Map();
  const cachedSyncFn = syncFnCache.get(workerPath);
  if (cachedSyncFn) {
    return cachedSyncFn;
  }
  if (!import_node_path6.default.isAbsolute(workerPath)) {
    throw new Error("`workerPath` must be absolute");
  }
  const syncFn = startWorkerThread(workerPath, typeof timeoutOrOptions === "number" ? { timeout: timeoutOrOptions } : timeoutOrOptions);
  syncFnCache.set(workerPath, syncFn);
  return syncFn;
}
function startWorkerThread(workerPath, { timeout = DEFAULT_TIMEOUT, execArgv = DEFAULT_EXEC_ARGV, tsRunner = DEFAULT_TS_RUNNER, transferList = [], globalShims = DEFAULT_GLOBAL_SHIMS } = {}) {
  const { port1: mainPort, port2: workerPort } = new import_node_worker_threads.MessageChannel();
  const { isTs, ext, jsUseEsm, tsUseEsm, tsRunner: finalTsRunner, workerPath: finalWorkerPath, execArgv: finalExecArgv } = setupTsRunner(workerPath, { execArgv, tsRunner });
  const workerPathUrl = (0, import_node_url3.pathToFileURL)(finalWorkerPath);
  if (/\.[cm]ts$/.test(finalWorkerPath)) {
    const isTsxSupported = !tsUseEsm || Number.parseFloat(process.versions.node) >= MTS_SUPPORTED_NODE_VERSION;
    if (!finalTsRunner) {
      throw new Error("No ts runner specified, ts worker path is not supported");
    } else if ([
      TsRunner.EsbuildRegister,
      TsRunner.EsbuildRunner,
      TsRunner.SWC,
      ...isTsxSupported ? [] : [TsRunner.TSX]
    ].includes(finalTsRunner)) {
      throw new Error(`${finalTsRunner} is not supported for ${ext} files yet` + (isTsxSupported ? ", you can try [tsx](https://github.com/esbuild-kit/tsx) instead" : ""));
    }
  }
  const finalGlobalShims = (globalShims === true ? DEFAULT_GLOBAL_SHIMS_PRESET : Array.isArray(globalShims) ? globalShims : []).filter(({ moduleName }) => isPkgAvailable(moduleName));
  sharedBufferView !== null && sharedBufferView !== void 0 ? sharedBufferView : sharedBufferView = new Int32Array(sharedBuffer !== null && sharedBuffer !== void 0 ? sharedBuffer : sharedBuffer = new SharedArrayBuffer(INT32_BYTES), 0, 1);
  const useGlobals = finalGlobalShims.length > 0;
  const useEval = isTs ? !tsUseEsm : !jsUseEsm && useGlobals;
  const worker = new import_node_worker_threads.Worker(jsUseEsm && useGlobals || tsUseEsm && finalTsRunner === TsRunner.TsNode ? dataUrl(`${generateGlobals(finalWorkerPath, finalGlobalShims)};import '${String(workerPathUrl)}'`) : useEval ? `${generateGlobals(finalWorkerPath, finalGlobalShims, "require")};${encodeImportModule(finalWorkerPath, "require")}` : workerPathUrl, {
    eval: useEval,
    workerData: { sharedBuffer, workerPort },
    transferList: [workerPort, ...transferList],
    execArgv: finalExecArgv
  });
  let nextID = 0;
  const syncFn = (...args) => {
    const id = nextID++;
    const msg = { id, args };
    worker.postMessage(msg);
    const status = Atomics.wait(sharedBufferView, 0, 0, timeout);
    Atomics.store(sharedBufferView, 0, 0);
    if (!["ok", "not-equal"].includes(status)) {
      throw new Error("Internal error: Atomics.wait() failed: " + status);
    }
    const { id: id2, result, error, properties } = (0, import_node_worker_threads.receiveMessageOnPort)(mainPort).message;
    if (id !== id2) {
      throw new Error(`Internal error: Expected id ${id} but got id ${id2}`);
    }
    if (error) {
      throw Object.assign(error, properties);
    }
    return result;
  };
  worker.unref();
  return syncFn;
}
var import_node_crypto, import_node_fs5, import_node_module2, import_node_path6, import_node_url3, import_node_worker_threads, INT32_BYTES, TsRunner, NODE_OPTIONS, SYNCKIT_EXEC_ARGV, SYNCKIT_GLOBAL_SHIMS, SYNCKIT_TIMEOUT, SYNCKIT_TS_RUNNER, DEFAULT_TIMEOUT, DEFAULT_EXEC_ARGV, DEFAULT_TS_RUNNER, DEFAULT_GLOBAL_SHIMS, DEFAULT_GLOBAL_SHIMS_PRESET, MTS_SUPPORTED_NODE_VERSION, syncFnCache, cjsRequire2, dataUrl, isFile, setupTsRunner, md5Hash, encodeImportModule, _generateGlobals, globalsCache, tmpdir, _dirname, sharedBuffer, sharedBufferView, generateGlobals;
var init_lib2 = __esm({
  "node_modules/.pnpm/synckit@0.9.0/node_modules/synckit/lib/index.js"() {
    "use strict";
    init_cjs_shims();
    import_node_crypto = require("crypto");
    import_node_fs5 = __toESM(require("fs"), 1);
    import_node_module2 = require("module");
    import_node_path6 = __toESM(require("path"), 1);
    import_node_url3 = require("url");
    import_node_worker_threads = require("worker_threads");
    init_lib();
    init_types();
    INT32_BYTES = 4;
    TsRunner = {
      TsNode: "ts-node",
      EsbuildRegister: "esbuild-register",
      EsbuildRunner: "esbuild-runner",
      SWC: "swc",
      TSX: "tsx"
    };
    ({ NODE_OPTIONS, SYNCKIT_EXEC_ARGV, SYNCKIT_GLOBAL_SHIMS, SYNCKIT_TIMEOUT, SYNCKIT_TS_RUNNER } = process.env);
    DEFAULT_TIMEOUT = SYNCKIT_TIMEOUT ? +SYNCKIT_TIMEOUT : void 0;
    DEFAULT_EXEC_ARGV = (SYNCKIT_EXEC_ARGV === null || SYNCKIT_EXEC_ARGV === void 0 ? void 0 : SYNCKIT_EXEC_ARGV.split(",")) || [];
    DEFAULT_TS_RUNNER = SYNCKIT_TS_RUNNER;
    DEFAULT_GLOBAL_SHIMS = ["1", "true"].includes(SYNCKIT_GLOBAL_SHIMS);
    DEFAULT_GLOBAL_SHIMS_PRESET = [
      {
        moduleName: "node-fetch",
        globalName: "fetch"
      },
      {
        moduleName: "node:perf_hooks",
        globalName: "performance",
        named: "performance"
      }
    ];
    MTS_SUPPORTED_NODE_VERSION = 16;
    cjsRequire2 = typeof require === "undefined" ? (0, import_node_module2.createRequire)(importMetaUrl) : require;
    dataUrl = (code) => new URL(`data:text/javascript,${encodeURIComponent(code)}`);
    isFile = (path6) => {
      var _a;
      try {
        return !!((_a = import_node_fs5.default.statSync(path6, { throwIfNoEntry: false })) === null || _a === void 0 ? void 0 : _a.isFile());
      } catch (_b) {
        return false;
      }
    };
    setupTsRunner = (workerPath, { execArgv, tsRunner }) => {
      let ext = import_node_path6.default.extname(workerPath);
      if (!/[/\\]node_modules[/\\]/.test(workerPath) && (!ext || /^\.[cm]?js$/.test(ext))) {
        const workPathWithoutExt = ext ? workerPath.slice(0, -ext.length) : workerPath;
        let extensions;
        switch (ext) {
          case ".cjs": {
            extensions = [".cts", ".cjs"];
            break;
          }
          case ".mjs": {
            extensions = [".mts", ".mjs"];
            break;
          }
          default: {
            extensions = [".ts", ".js"];
            break;
          }
        }
        const found = tryExtensions(workPathWithoutExt, extensions);
        let differentExt;
        if (found && (!ext || (differentExt = found !== workPathWithoutExt))) {
          workerPath = found;
          if (differentExt) {
            ext = import_node_path6.default.extname(workerPath);
          }
        }
      }
      const isTs = /\.[cm]?ts$/.test(workerPath);
      let jsUseEsm = workerPath.endsWith(".mjs");
      let tsUseEsm = workerPath.endsWith(".mts");
      if (isTs) {
        if (!tsUseEsm) {
          const pkg = findUp2(workerPath);
          if (pkg) {
            tsUseEsm = cjsRequire2(pkg).type === "module";
          }
        }
        if (tsRunner == null && isPkgAvailable(TsRunner.TsNode)) {
          tsRunner = TsRunner.TsNode;
        }
        switch (tsRunner) {
          case TsRunner.TsNode: {
            if (tsUseEsm) {
              if (!execArgv.includes("--loader")) {
                execArgv = ["--loader", `${TsRunner.TsNode}/esm`, ...execArgv];
              }
            } else if (!execArgv.includes("-r")) {
              execArgv = ["-r", `${TsRunner.TsNode}/register`, ...execArgv];
            }
            break;
          }
          case TsRunner.EsbuildRegister: {
            if (!execArgv.includes("-r")) {
              execArgv = ["-r", TsRunner.EsbuildRegister, ...execArgv];
            }
            break;
          }
          case TsRunner.EsbuildRunner: {
            if (!execArgv.includes("-r")) {
              execArgv = ["-r", `${TsRunner.EsbuildRunner}/register`, ...execArgv];
            }
            break;
          }
          case TsRunner.SWC: {
            if (!execArgv.includes("-r")) {
              execArgv = ["-r", `@${TsRunner.SWC}-node/register`, ...execArgv];
            }
            break;
          }
          case TsRunner.TSX: {
            if (!execArgv.includes("--loader")) {
              execArgv = ["--loader", TsRunner.TSX, ...execArgv];
            }
            break;
          }
          default: {
            throw new Error(`Unknown ts runner: ${String(tsRunner)}`);
          }
        }
      } else if (!jsUseEsm) {
        const pkg = findUp2(workerPath);
        if (pkg) {
          jsUseEsm = cjsRequire2(pkg).type === "module";
        }
      }
      if (process.versions.pnp) {
        const nodeOptions = NODE_OPTIONS === null || NODE_OPTIONS === void 0 ? void 0 : NODE_OPTIONS.split(/\s+/);
        let pnpApiPath;
        try {
          pnpApiPath = cjsRequire2.resolve("pnpapi");
        } catch (_a) {
        }
        if (pnpApiPath && !(nodeOptions === null || nodeOptions === void 0 ? void 0 : nodeOptions.some((option, index2) => ["-r", "--require"].includes(option) && pnpApiPath === cjsRequire2.resolve(nodeOptions[index2 + 1]))) && !execArgv.includes(pnpApiPath)) {
          execArgv = ["-r", pnpApiPath, ...execArgv];
          const pnpLoaderPath = import_node_path6.default.resolve(pnpApiPath, "../.pnp.loader.mjs");
          if (isFile(pnpLoaderPath)) {
            const experimentalLoader = (0, import_node_url3.pathToFileURL)(pnpLoaderPath).toString();
            execArgv = ["--experimental-loader", experimentalLoader, ...execArgv];
          }
        }
      }
      return {
        ext,
        isTs,
        jsUseEsm,
        tsRunner,
        tsUseEsm,
        workerPath,
        execArgv
      };
    };
    md5Hash = (text) => (0, import_node_crypto.createHash)("md5").update(text).digest("hex");
    encodeImportModule = (moduleNameOrGlobalShim, type = "import") => {
      const { moduleName, globalName, named, conditional } = typeof moduleNameOrGlobalShim === "string" ? { moduleName: moduleNameOrGlobalShim } : moduleNameOrGlobalShim;
      const importStatement = type === "import" ? `import${globalName ? " " + (named === null ? "* as " + globalName : (named === null || named === void 0 ? void 0 : named.trim()) ? `{${named}}` : globalName) + " from" : ""} '${import_node_path6.default.isAbsolute(moduleName) ? String((0, import_node_url3.pathToFileURL)(moduleName)) : moduleName}'` : `${globalName ? "const " + ((named === null || named === void 0 ? void 0 : named.trim()) ? `{${named}}` : globalName) + "=" : ""}require('${moduleName.replace(/\\/g, "\\\\")}')`;
      if (!globalName) {
        return importStatement;
      }
      const overrideStatement = `globalThis.${globalName}=${(named === null || named === void 0 ? void 0 : named.trim()) ? named : globalName}`;
      return importStatement + (conditional === false ? `;${overrideStatement}` : `;if(!globalThis.${globalName})${overrideStatement}`);
    };
    _generateGlobals = (globalShims, type) => globalShims.reduce((acc, shim) => `${acc}${acc ? ";" : ""}${encodeImportModule(shim, type)}`, "");
    _dirname = typeof __dirname === "undefined" ? import_node_path6.default.dirname((0, import_node_url3.fileURLToPath)(importMetaUrl)) : __dirname;
    generateGlobals = (workerPath, globalShims, type = "import") => {
      globalsCache !== null && globalsCache !== void 0 ? globalsCache : globalsCache = /* @__PURE__ */ new Map();
      const cached = globalsCache.get(workerPath);
      if (cached) {
        const [content2, filepath2] = cached;
        if (type === "require" && !filepath2 || type === "import" && filepath2 && isFile(filepath2)) {
          return content2;
        }
      }
      const globals2 = _generateGlobals(globalShims, type);
      let content = globals2;
      let filepath;
      if (type === "import") {
        if (!tmpdir) {
          tmpdir = import_node_path6.default.resolve(findUp2(_dirname), "../node_modules/.synckit");
        }
        import_node_fs5.default.mkdirSync(tmpdir, { recursive: true });
        filepath = import_node_path6.default.resolve(tmpdir, md5Hash(workerPath) + ".mjs");
        content = encodeImportModule(filepath);
        import_node_fs5.default.writeFileSync(filepath, globals2);
      }
      globalsCache.set(workerPath, [content, filepath]);
      return content;
    };
  }
});

// node_modules/.pnpm/eslint-visitor-keys@3.4.3/node_modules/eslint-visitor-keys/dist/eslint-visitor-keys.cjs
var require_eslint_visitor_keys = __commonJS({
  "node_modules/.pnpm/eslint-visitor-keys@3.4.3/node_modules/eslint-visitor-keys/dist/eslint-visitor-keys.cjs"(exports2) {
    "use strict";
    init_cjs_shims();
    Object.defineProperty(exports2, "__esModule", { value: true });
    var KEYS = {
      ArrayExpression: [
        "elements"
      ],
      ArrayPattern: [
        "elements"
      ],
      ArrowFunctionExpression: [
        "params",
        "body"
      ],
      AssignmentExpression: [
        "left",
        "right"
      ],
      AssignmentPattern: [
        "left",
        "right"
      ],
      AwaitExpression: [
        "argument"
      ],
      BinaryExpression: [
        "left",
        "right"
      ],
      BlockStatement: [
        "body"
      ],
      BreakStatement: [
        "label"
      ],
      CallExpression: [
        "callee",
        "arguments"
      ],
      CatchClause: [
        "param",
        "body"
      ],
      ChainExpression: [
        "expression"
      ],
      ClassBody: [
        "body"
      ],
      ClassDeclaration: [
        "id",
        "superClass",
        "body"
      ],
      ClassExpression: [
        "id",
        "superClass",
        "body"
      ],
      ConditionalExpression: [
        "test",
        "consequent",
        "alternate"
      ],
      ContinueStatement: [
        "label"
      ],
      DebuggerStatement: [],
      DoWhileStatement: [
        "body",
        "test"
      ],
      EmptyStatement: [],
      ExperimentalRestProperty: [
        "argument"
      ],
      ExperimentalSpreadProperty: [
        "argument"
      ],
      ExportAllDeclaration: [
        "exported",
        "source"
      ],
      ExportDefaultDeclaration: [
        "declaration"
      ],
      ExportNamedDeclaration: [
        "declaration",
        "specifiers",
        "source"
      ],
      ExportSpecifier: [
        "exported",
        "local"
      ],
      ExpressionStatement: [
        "expression"
      ],
      ForInStatement: [
        "left",
        "right",
        "body"
      ],
      ForOfStatement: [
        "left",
        "right",
        "body"
      ],
      ForStatement: [
        "init",
        "test",
        "update",
        "body"
      ],
      FunctionDeclaration: [
        "id",
        "params",
        "body"
      ],
      FunctionExpression: [
        "id",
        "params",
        "body"
      ],
      Identifier: [],
      IfStatement: [
        "test",
        "consequent",
        "alternate"
      ],
      ImportDeclaration: [
        "specifiers",
        "source"
      ],
      ImportDefaultSpecifier: [
        "local"
      ],
      ImportExpression: [
        "source"
      ],
      ImportNamespaceSpecifier: [
        "local"
      ],
      ImportSpecifier: [
        "imported",
        "local"
      ],
      JSXAttribute: [
        "name",
        "value"
      ],
      JSXClosingElement: [
        "name"
      ],
      JSXClosingFragment: [],
      JSXElement: [
        "openingElement",
        "children",
        "closingElement"
      ],
      JSXEmptyExpression: [],
      JSXExpressionContainer: [
        "expression"
      ],
      JSXFragment: [
        "openingFragment",
        "children",
        "closingFragment"
      ],
      JSXIdentifier: [],
      JSXMemberExpression: [
        "object",
        "property"
      ],
      JSXNamespacedName: [
        "namespace",
        "name"
      ],
      JSXOpeningElement: [
        "name",
        "attributes"
      ],
      JSXOpeningFragment: [],
      JSXSpreadAttribute: [
        "argument"
      ],
      JSXSpreadChild: [
        "expression"
      ],
      JSXText: [],
      LabeledStatement: [
        "label",
        "body"
      ],
      Literal: [],
      LogicalExpression: [
        "left",
        "right"
      ],
      MemberExpression: [
        "object",
        "property"
      ],
      MetaProperty: [
        "meta",
        "property"
      ],
      MethodDefinition: [
        "key",
        "value"
      ],
      NewExpression: [
        "callee",
        "arguments"
      ],
      ObjectExpression: [
        "properties"
      ],
      ObjectPattern: [
        "properties"
      ],
      PrivateIdentifier: [],
      Program: [
        "body"
      ],
      Property: [
        "key",
        "value"
      ],
      PropertyDefinition: [
        "key",
        "value"
      ],
      RestElement: [
        "argument"
      ],
      ReturnStatement: [
        "argument"
      ],
      SequenceExpression: [
        "expressions"
      ],
      SpreadElement: [
        "argument"
      ],
      StaticBlock: [
        "body"
      ],
      Super: [],
      SwitchCase: [
        "test",
        "consequent"
      ],
      SwitchStatement: [
        "discriminant",
        "cases"
      ],
      TaggedTemplateExpression: [
        "tag",
        "quasi"
      ],
      TemplateElement: [],
      TemplateLiteral: [
        "quasis",
        "expressions"
      ],
      ThisExpression: [],
      ThrowStatement: [
        "argument"
      ],
      TryStatement: [
        "block",
        "handler",
        "finalizer"
      ],
      UnaryExpression: [
        "argument"
      ],
      UpdateExpression: [
        "argument"
      ],
      VariableDeclaration: [
        "declarations"
      ],
      VariableDeclarator: [
        "id",
        "init"
      ],
      WhileStatement: [
        "test",
        "body"
      ],
      WithStatement: [
        "object",
        "body"
      ],
      YieldExpression: [
        "argument"
      ]
    };
    var NODE_TYPES = Object.keys(KEYS);
    for (const type of NODE_TYPES) {
      Object.freeze(KEYS[type]);
    }
    Object.freeze(KEYS);
    var KEY_BLACKLIST = /* @__PURE__ */ new Set([
      "parent",
      "leadingComments",
      "trailingComments"
    ]);
    function filterKey(key) {
      return !KEY_BLACKLIST.has(key) && key[0] !== "_";
    }
    function getKeys(node2) {
      return Object.keys(node2).filter(filterKey);
    }
    function unionWith(additionalKeys) {
      const retv = (
        /** @type {{
            [type: string]: ReadonlyArray<string>
        }} */
        Object.assign({}, KEYS)
      );
      for (const type of Object.keys(additionalKeys)) {
        if (Object.prototype.hasOwnProperty.call(retv, type)) {
          const keys = new Set(additionalKeys[type]);
          for (const key of retv[type]) {
            keys.add(key);
          }
          retv[type] = Object.freeze(Array.from(keys));
        } else {
          retv[type] = Object.freeze(Array.from(additionalKeys[type]));
        }
      }
      return Object.freeze(retv);
    }
    exports2.KEYS = KEYS;
    exports2.getKeys = getKeys;
    exports2.unionWith = unionWith;
  }
});

// node_modules/.pnpm/@eslint-community+eslint-utils@4.4.0_eslint@8.57.0/node_modules/@eslint-community/eslint-utils/index.js
var require_eslint_utils = __commonJS({
  "node_modules/.pnpm/@eslint-community+eslint-utils@4.4.0_eslint@8.57.0/node_modules/@eslint-community/eslint-utils/index.js"(exports2) {
    "use strict";
    init_cjs_shims();
    Object.defineProperty(exports2, "__esModule", { value: true });
    var eslintVisitorKeys = require_eslint_visitor_keys();
    function getInnermostScope(initialScope, node2) {
      const location = node2.range[0];
      let scope = initialScope;
      let found = false;
      do {
        found = false;
        for (const childScope of scope.childScopes) {
          const range = childScope.block.range;
          if (range[0] <= location && location < range[1]) {
            scope = childScope;
            found = true;
            break;
          }
        }
      } while (found);
      return scope;
    }
    function findVariable(initialScope, nameOrNode) {
      let name = "";
      let scope = initialScope;
      if (typeof nameOrNode === "string") {
        name = nameOrNode;
      } else {
        name = nameOrNode.name;
        scope = getInnermostScope(scope, nameOrNode);
      }
      while (scope != null) {
        const variable = scope.set.get(name);
        if (variable != null) {
          return variable;
        }
        scope = scope.upper;
      }
      return null;
    }
    function negate0(token) {
      return !this(token);
    }
    function negate(f) {
      return negate0.bind(f);
    }
    function isPunctuatorTokenWithValue(token, value) {
      return token.type === "Punctuator" && token.value === value;
    }
    function isArrowToken(token) {
      return isPunctuatorTokenWithValue(token, "=>");
    }
    function isCommaToken(token) {
      return isPunctuatorTokenWithValue(token, ",");
    }
    function isSemicolonToken(token) {
      return isPunctuatorTokenWithValue(token, ";");
    }
    function isColonToken(token) {
      return isPunctuatorTokenWithValue(token, ":");
    }
    function isOpeningParenToken(token) {
      return isPunctuatorTokenWithValue(token, "(");
    }
    function isClosingParenToken(token) {
      return isPunctuatorTokenWithValue(token, ")");
    }
    function isOpeningBracketToken(token) {
      return isPunctuatorTokenWithValue(token, "[");
    }
    function isClosingBracketToken(token) {
      return isPunctuatorTokenWithValue(token, "]");
    }
    function isOpeningBraceToken(token) {
      return isPunctuatorTokenWithValue(token, "{");
    }
    function isClosingBraceToken(token) {
      return isPunctuatorTokenWithValue(token, "}");
    }
    function isCommentToken(token) {
      return ["Block", "Line", "Shebang"].includes(token.type);
    }
    var isNotArrowToken = negate(isArrowToken);
    var isNotCommaToken = negate(isCommaToken);
    var isNotSemicolonToken = negate(isSemicolonToken);
    var isNotColonToken = negate(isColonToken);
    var isNotOpeningParenToken = negate(isOpeningParenToken);
    var isNotClosingParenToken = negate(isClosingParenToken);
    var isNotOpeningBracketToken = negate(isOpeningBracketToken);
    var isNotClosingBracketToken = negate(isClosingBracketToken);
    var isNotOpeningBraceToken = negate(isOpeningBraceToken);
    var isNotClosingBraceToken = negate(isClosingBraceToken);
    var isNotCommentToken = negate(isCommentToken);
    function getOpeningParenOfParams(node2, sourceCode) {
      return node2.id ? sourceCode.getTokenAfter(node2.id, isOpeningParenToken) : sourceCode.getFirstToken(node2, isOpeningParenToken);
    }
    function getFunctionHeadLocation(node2, sourceCode) {
      const parent = node2.parent;
      let start = null;
      let end = null;
      if (node2.type === "ArrowFunctionExpression") {
        const arrowToken = sourceCode.getTokenBefore(node2.body, isArrowToken);
        start = arrowToken.loc.start;
        end = arrowToken.loc.end;
      } else if (parent.type === "Property" || parent.type === "MethodDefinition" || parent.type === "PropertyDefinition") {
        start = parent.loc.start;
        end = getOpeningParenOfParams(node2, sourceCode).loc.start;
      } else {
        start = node2.loc.start;
        end = getOpeningParenOfParams(node2, sourceCode).loc.start;
      }
      return {
        start: { ...start },
        end: { ...end }
      };
    }
    var globalObject = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : {};
    var builtinNames = Object.freeze(
      /* @__PURE__ */ new Set([
        "Array",
        "ArrayBuffer",
        "BigInt",
        "BigInt64Array",
        "BigUint64Array",
        "Boolean",
        "DataView",
        "Date",
        "decodeURI",
        "decodeURIComponent",
        "encodeURI",
        "encodeURIComponent",
        "escape",
        "Float32Array",
        "Float64Array",
        "Function",
        "Infinity",
        "Int16Array",
        "Int32Array",
        "Int8Array",
        "isFinite",
        "isNaN",
        "isPrototypeOf",
        "JSON",
        "Map",
        "Math",
        "NaN",
        "Number",
        "Object",
        "parseFloat",
        "parseInt",
        "Promise",
        "Proxy",
        "Reflect",
        "RegExp",
        "Set",
        "String",
        "Symbol",
        "Uint16Array",
        "Uint32Array",
        "Uint8Array",
        "Uint8ClampedArray",
        "undefined",
        "unescape",
        "WeakMap",
        "WeakSet"
      ])
    );
    var callAllowed = new Set(
      [
        Array.isArray,
        Array.of,
        Array.prototype.at,
        Array.prototype.concat,
        Array.prototype.entries,
        Array.prototype.every,
        Array.prototype.filter,
        Array.prototype.find,
        Array.prototype.findIndex,
        Array.prototype.flat,
        Array.prototype.includes,
        Array.prototype.indexOf,
        Array.prototype.join,
        Array.prototype.keys,
        Array.prototype.lastIndexOf,
        Array.prototype.slice,
        Array.prototype.some,
        Array.prototype.toString,
        Array.prototype.values,
        typeof BigInt === "function" ? BigInt : void 0,
        Boolean,
        Date,
        Date.parse,
        decodeURI,
        decodeURIComponent,
        encodeURI,
        encodeURIComponent,
        escape,
        isFinite,
        isNaN,
        isPrototypeOf,
        Map,
        Map.prototype.entries,
        Map.prototype.get,
        Map.prototype.has,
        Map.prototype.keys,
        Map.prototype.values,
        ...Object.getOwnPropertyNames(Math).filter((k) => k !== "random").map((k) => Math[k]).filter((f) => typeof f === "function"),
        Number,
        Number.isFinite,
        Number.isNaN,
        Number.parseFloat,
        Number.parseInt,
        Number.prototype.toExponential,
        Number.prototype.toFixed,
        Number.prototype.toPrecision,
        Number.prototype.toString,
        Object,
        Object.entries,
        Object.is,
        Object.isExtensible,
        Object.isFrozen,
        Object.isSealed,
        Object.keys,
        Object.values,
        parseFloat,
        parseInt,
        RegExp,
        Set,
        Set.prototype.entries,
        Set.prototype.has,
        Set.prototype.keys,
        Set.prototype.values,
        String,
        String.fromCharCode,
        String.fromCodePoint,
        String.raw,
        String.prototype.at,
        String.prototype.charAt,
        String.prototype.charCodeAt,
        String.prototype.codePointAt,
        String.prototype.concat,
        String.prototype.endsWith,
        String.prototype.includes,
        String.prototype.indexOf,
        String.prototype.lastIndexOf,
        String.prototype.normalize,
        String.prototype.padEnd,
        String.prototype.padStart,
        String.prototype.slice,
        String.prototype.startsWith,
        String.prototype.substr,
        String.prototype.substring,
        String.prototype.toLowerCase,
        String.prototype.toString,
        String.prototype.toUpperCase,
        String.prototype.trim,
        String.prototype.trimEnd,
        String.prototype.trimLeft,
        String.prototype.trimRight,
        String.prototype.trimStart,
        Symbol.for,
        Symbol.keyFor,
        unescape
      ].filter((f) => typeof f === "function")
    );
    var callPassThrough = /* @__PURE__ */ new Set([
      Object.freeze,
      Object.preventExtensions,
      Object.seal
    ]);
    var getterAllowed = [
      [Map, /* @__PURE__ */ new Set(["size"])],
      [
        RegExp,
        /* @__PURE__ */ new Set([
          "dotAll",
          "flags",
          "global",
          "hasIndices",
          "ignoreCase",
          "multiline",
          "source",
          "sticky",
          "unicode"
        ])
      ],
      [Set, /* @__PURE__ */ new Set(["size"])]
    ];
    function getPropertyDescriptor(object, name) {
      let x = object;
      while ((typeof x === "object" || typeof x === "function") && x !== null) {
        const d = Object.getOwnPropertyDescriptor(x, name);
        if (d) {
          return d;
        }
        x = Object.getPrototypeOf(x);
      }
      return null;
    }
    function isGetter(object, name) {
      const d = getPropertyDescriptor(object, name);
      return d != null && d.get != null;
    }
    function getElementValues(nodeList, initialScope) {
      const valueList = [];
      for (let i = 0; i < nodeList.length; ++i) {
        const elementNode = nodeList[i];
        if (elementNode == null) {
          valueList.length = i + 1;
        } else if (elementNode.type === "SpreadElement") {
          const argument = getStaticValueR(elementNode.argument, initialScope);
          if (argument == null) {
            return null;
          }
          valueList.push(...argument.value);
        } else {
          const element = getStaticValueR(elementNode, initialScope);
          if (element == null) {
            return null;
          }
          valueList.push(element.value);
        }
      }
      return valueList;
    }
    function isEffectivelyConst(variable) {
      const refs = variable.references;
      const inits = refs.filter((r) => r.init).length;
      const reads = refs.filter((r) => r.isReadOnly()).length;
      if (inits === 1 && reads + inits === refs.length) {
        return true;
      }
      return false;
    }
    var operations = Object.freeze({
      ArrayExpression(node2, initialScope) {
        const elements = getElementValues(node2.elements, initialScope);
        return elements != null ? { value: elements } : null;
      },
      AssignmentExpression(node2, initialScope) {
        if (node2.operator === "=") {
          return getStaticValueR(node2.right, initialScope);
        }
        return null;
      },
      //eslint-disable-next-line complexity
      BinaryExpression(node2, initialScope) {
        if (node2.operator === "in" || node2.operator === "instanceof") {
          return null;
        }
        const left = getStaticValueR(node2.left, initialScope);
        const right = getStaticValueR(node2.right, initialScope);
        if (left != null && right != null) {
          switch (node2.operator) {
            case "==":
              return { value: left.value == right.value };
            case "!=":
              return { value: left.value != right.value };
            case "===":
              return { value: left.value === right.value };
            case "!==":
              return { value: left.value !== right.value };
            case "<":
              return { value: left.value < right.value };
            case "<=":
              return { value: left.value <= right.value };
            case ">":
              return { value: left.value > right.value };
            case ">=":
              return { value: left.value >= right.value };
            case "<<":
              return { value: left.value << right.value };
            case ">>":
              return { value: left.value >> right.value };
            case ">>>":
              return { value: left.value >>> right.value };
            case "+":
              return { value: left.value + right.value };
            case "-":
              return { value: left.value - right.value };
            case "*":
              return { value: left.value * right.value };
            case "/":
              return { value: left.value / right.value };
            case "%":
              return { value: left.value % right.value };
            case "**":
              return { value: left.value ** right.value };
            case "|":
              return { value: left.value | right.value };
            case "^":
              return { value: left.value ^ right.value };
            case "&":
              return { value: left.value & right.value };
          }
        }
        return null;
      },
      CallExpression(node2, initialScope) {
        const calleeNode = node2.callee;
        const args = getElementValues(node2.arguments, initialScope);
        if (args != null) {
          if (calleeNode.type === "MemberExpression") {
            if (calleeNode.property.type === "PrivateIdentifier") {
              return null;
            }
            const object = getStaticValueR(calleeNode.object, initialScope);
            if (object != null) {
              if (object.value == null && (object.optional || node2.optional)) {
                return { value: void 0, optional: true };
              }
              const property = getStaticPropertyNameValue(
                calleeNode,
                initialScope
              );
              if (property != null) {
                const receiver = object.value;
                const methodName = property.value;
                if (callAllowed.has(receiver[methodName])) {
                  return { value: receiver[methodName](...args) };
                }
                if (callPassThrough.has(receiver[methodName])) {
                  return { value: args[0] };
                }
              }
            }
          } else {
            const callee = getStaticValueR(calleeNode, initialScope);
            if (callee != null) {
              if (callee.value == null && node2.optional) {
                return { value: void 0, optional: true };
              }
              const func = callee.value;
              if (callAllowed.has(func)) {
                return { value: func(...args) };
              }
              if (callPassThrough.has(func)) {
                return { value: args[0] };
              }
            }
          }
        }
        return null;
      },
      ConditionalExpression(node2, initialScope) {
        const test2 = getStaticValueR(node2.test, initialScope);
        if (test2 != null) {
          return test2.value ? getStaticValueR(node2.consequent, initialScope) : getStaticValueR(node2.alternate, initialScope);
        }
        return null;
      },
      ExpressionStatement(node2, initialScope) {
        return getStaticValueR(node2.expression, initialScope);
      },
      Identifier(node2, initialScope) {
        if (initialScope != null) {
          const variable = findVariable(initialScope, node2);
          if (variable != null && variable.defs.length === 0 && builtinNames.has(variable.name) && variable.name in globalObject) {
            return { value: globalObject[variable.name] };
          }
          if (variable != null && variable.defs.length === 1) {
            const def = variable.defs[0];
            if (def.parent && def.type === "Variable" && (def.parent.kind === "const" || isEffectivelyConst(variable)) && // TODO(mysticatea): don't support destructuring here.
            def.node.id.type === "Identifier") {
              return getStaticValueR(def.node.init, initialScope);
            }
          }
        }
        return null;
      },
      Literal(node2) {
        if ((node2.regex != null || node2.bigint != null) && node2.value == null) {
          return null;
        }
        return { value: node2.value };
      },
      LogicalExpression(node2, initialScope) {
        const left = getStaticValueR(node2.left, initialScope);
        if (left != null) {
          if (node2.operator === "||" && Boolean(left.value) === true || node2.operator === "&&" && Boolean(left.value) === false || node2.operator === "??" && left.value != null) {
            return left;
          }
          const right = getStaticValueR(node2.right, initialScope);
          if (right != null) {
            return right;
          }
        }
        return null;
      },
      MemberExpression(node2, initialScope) {
        if (node2.property.type === "PrivateIdentifier") {
          return null;
        }
        const object = getStaticValueR(node2.object, initialScope);
        if (object != null) {
          if (object.value == null && (object.optional || node2.optional)) {
            return { value: void 0, optional: true };
          }
          const property = getStaticPropertyNameValue(node2, initialScope);
          if (property != null) {
            if (!isGetter(object.value, property.value)) {
              return { value: object.value[property.value] };
            }
            for (const [classFn, allowed] of getterAllowed) {
              if (object.value instanceof classFn && allowed.has(property.value)) {
                return { value: object.value[property.value] };
              }
            }
          }
        }
        return null;
      },
      ChainExpression(node2, initialScope) {
        const expression = getStaticValueR(node2.expression, initialScope);
        if (expression != null) {
          return { value: expression.value };
        }
        return null;
      },
      NewExpression(node2, initialScope) {
        const callee = getStaticValueR(node2.callee, initialScope);
        const args = getElementValues(node2.arguments, initialScope);
        if (callee != null && args != null) {
          const Func = callee.value;
          if (callAllowed.has(Func)) {
            return { value: new Func(...args) };
          }
        }
        return null;
      },
      ObjectExpression(node2, initialScope) {
        const object = {};
        for (const propertyNode of node2.properties) {
          if (propertyNode.type === "Property") {
            if (propertyNode.kind !== "init") {
              return null;
            }
            const key = getStaticPropertyNameValue(
              propertyNode,
              initialScope
            );
            const value = getStaticValueR(propertyNode.value, initialScope);
            if (key == null || value == null) {
              return null;
            }
            object[key.value] = value.value;
          } else if (propertyNode.type === "SpreadElement" || propertyNode.type === "ExperimentalSpreadProperty") {
            const argument = getStaticValueR(
              propertyNode.argument,
              initialScope
            );
            if (argument == null) {
              return null;
            }
            Object.assign(object, argument.value);
          } else {
            return null;
          }
        }
        return { value: object };
      },
      SequenceExpression(node2, initialScope) {
        const last = node2.expressions[node2.expressions.length - 1];
        return getStaticValueR(last, initialScope);
      },
      TaggedTemplateExpression(node2, initialScope) {
        const tag = getStaticValueR(node2.tag, initialScope);
        const expressions = getElementValues(
          node2.quasi.expressions,
          initialScope
        );
        if (tag != null && expressions != null) {
          const func = tag.value;
          const strings = node2.quasi.quasis.map((q) => q.value.cooked);
          strings.raw = node2.quasi.quasis.map((q) => q.value.raw);
          if (func === String.raw) {
            return { value: func(strings, ...expressions) };
          }
        }
        return null;
      },
      TemplateLiteral(node2, initialScope) {
        const expressions = getElementValues(node2.expressions, initialScope);
        if (expressions != null) {
          let value = node2.quasis[0].value.cooked;
          for (let i = 0; i < expressions.length; ++i) {
            value += expressions[i];
            value += node2.quasis[i + 1].value.cooked;
          }
          return { value };
        }
        return null;
      },
      UnaryExpression(node2, initialScope) {
        if (node2.operator === "delete") {
          return null;
        }
        if (node2.operator === "void") {
          return { value: void 0 };
        }
        const arg = getStaticValueR(node2.argument, initialScope);
        if (arg != null) {
          switch (node2.operator) {
            case "-":
              return { value: -arg.value };
            case "+":
              return { value: +arg.value };
            case "!":
              return { value: !arg.value };
            case "~":
              return { value: ~arg.value };
            case "typeof":
              return { value: typeof arg.value };
          }
        }
        return null;
      }
    });
    function getStaticValueR(node2, initialScope) {
      if (node2 != null && Object.hasOwnProperty.call(operations, node2.type)) {
        return operations[node2.type](node2, initialScope);
      }
      return null;
    }
    function getStaticPropertyNameValue(node2, initialScope) {
      const nameNode = node2.type === "Property" ? node2.key : node2.property;
      if (node2.computed) {
        return getStaticValueR(nameNode, initialScope);
      }
      if (nameNode.type === "Identifier") {
        return { value: nameNode.name };
      }
      if (nameNode.type === "Literal") {
        if (nameNode.bigint) {
          return { value: nameNode.bigint };
        }
        return { value: String(nameNode.value) };
      }
      return null;
    }
    function getStaticValue(node2, initialScope = null) {
      try {
        return getStaticValueR(node2, initialScope);
      } catch (_error) {
        return null;
      }
    }
    function getStringIfConstant(node2, initialScope = null) {
      if (node2 && node2.type === "Literal" && node2.value === null) {
        if (node2.regex) {
          return `/${node2.regex.pattern}/${node2.regex.flags}`;
        }
        if (node2.bigint) {
          return node2.bigint;
        }
      }
      const evaluated = getStaticValue(node2, initialScope);
      return evaluated && String(evaluated.value);
    }
    function getPropertyName(node2, initialScope) {
      switch (node2.type) {
        case "MemberExpression":
          if (node2.computed) {
            return getStringIfConstant(node2.property, initialScope);
          }
          if (node2.property.type === "PrivateIdentifier") {
            return null;
          }
          return node2.property.name;
        case "Property":
        case "MethodDefinition":
        case "PropertyDefinition":
          if (node2.computed) {
            return getStringIfConstant(node2.key, initialScope);
          }
          if (node2.key.type === "Literal") {
            return String(node2.key.value);
          }
          if (node2.key.type === "PrivateIdentifier") {
            return null;
          }
          return node2.key.name;
      }
      return null;
    }
    function getFunctionNameWithKind(node2, sourceCode) {
      const parent = node2.parent;
      const tokens = [];
      const isObjectMethod = parent.type === "Property" && parent.value === node2;
      const isClassMethod = parent.type === "MethodDefinition" && parent.value === node2;
      const isClassFieldMethod = parent.type === "PropertyDefinition" && parent.value === node2;
      if (isClassMethod || isClassFieldMethod) {
        if (parent.static) {
          tokens.push("static");
        }
        if (parent.key.type === "PrivateIdentifier") {
          tokens.push("private");
        }
      }
      if (node2.async) {
        tokens.push("async");
      }
      if (node2.generator) {
        tokens.push("generator");
      }
      if (isObjectMethod || isClassMethod) {
        if (parent.kind === "constructor") {
          return "constructor";
        }
        if (parent.kind === "get") {
          tokens.push("getter");
        } else if (parent.kind === "set") {
          tokens.push("setter");
        } else {
          tokens.push("method");
        }
      } else if (isClassFieldMethod) {
        tokens.push("method");
      } else {
        if (node2.type === "ArrowFunctionExpression") {
          tokens.push("arrow");
        }
        tokens.push("function");
      }
      if (isObjectMethod || isClassMethod || isClassFieldMethod) {
        if (parent.key.type === "PrivateIdentifier") {
          tokens.push(`#${parent.key.name}`);
        } else {
          const name = getPropertyName(parent);
          if (name) {
            tokens.push(`'${name}'`);
          } else if (sourceCode) {
            const keyText = sourceCode.getText(parent.key);
            if (!keyText.includes("\n")) {
              tokens.push(`[${keyText}]`);
            }
          }
        }
      } else if (node2.id) {
        tokens.push(`'${node2.id.name}'`);
      } else if (parent.type === "VariableDeclarator" && parent.id && parent.id.type === "Identifier") {
        tokens.push(`'${parent.id.name}'`);
      } else if ((parent.type === "AssignmentExpression" || parent.type === "AssignmentPattern") && parent.left && parent.left.type === "Identifier") {
        tokens.push(`'${parent.left.name}'`);
      } else if (parent.type === "ExportDefaultDeclaration" && parent.declaration === node2) {
        tokens.push("'default'");
      }
      return tokens.join(" ");
    }
    var typeConversionBinaryOps = Object.freeze(
      /* @__PURE__ */ new Set([
        "==",
        "!=",
        "<",
        "<=",
        ">",
        ">=",
        "<<",
        ">>",
        ">>>",
        "+",
        "-",
        "*",
        "/",
        "%",
        "|",
        "^",
        "&",
        "in"
      ])
    );
    var typeConversionUnaryOps = Object.freeze(/* @__PURE__ */ new Set(["-", "+", "!", "~"]));
    function isNode(x) {
      return x !== null && typeof x === "object" && typeof x.type === "string";
    }
    var visitor = Object.freeze(
      Object.assign(/* @__PURE__ */ Object.create(null), {
        $visit(node2, options, visitorKeys) {
          const { type } = node2;
          if (typeof this[type] === "function") {
            return this[type](node2, options, visitorKeys);
          }
          return this.$visitChildren(node2, options, visitorKeys);
        },
        $visitChildren(node2, options, visitorKeys) {
          const { type } = node2;
          for (const key of visitorKeys[type] || eslintVisitorKeys.getKeys(node2)) {
            const value = node2[key];
            if (Array.isArray(value)) {
              for (const element of value) {
                if (isNode(element) && this.$visit(element, options, visitorKeys)) {
                  return true;
                }
              }
            } else if (isNode(value) && this.$visit(value, options, visitorKeys)) {
              return true;
            }
          }
          return false;
        },
        ArrowFunctionExpression() {
          return false;
        },
        AssignmentExpression() {
          return true;
        },
        AwaitExpression() {
          return true;
        },
        BinaryExpression(node2, options, visitorKeys) {
          if (options.considerImplicitTypeConversion && typeConversionBinaryOps.has(node2.operator) && (node2.left.type !== "Literal" || node2.right.type !== "Literal")) {
            return true;
          }
          return this.$visitChildren(node2, options, visitorKeys);
        },
        CallExpression() {
          return true;
        },
        FunctionExpression() {
          return false;
        },
        ImportExpression() {
          return true;
        },
        MemberExpression(node2, options, visitorKeys) {
          if (options.considerGetters) {
            return true;
          }
          if (options.considerImplicitTypeConversion && node2.computed && node2.property.type !== "Literal") {
            return true;
          }
          return this.$visitChildren(node2, options, visitorKeys);
        },
        MethodDefinition(node2, options, visitorKeys) {
          if (options.considerImplicitTypeConversion && node2.computed && node2.key.type !== "Literal") {
            return true;
          }
          return this.$visitChildren(node2, options, visitorKeys);
        },
        NewExpression() {
          return true;
        },
        Property(node2, options, visitorKeys) {
          if (options.considerImplicitTypeConversion && node2.computed && node2.key.type !== "Literal") {
            return true;
          }
          return this.$visitChildren(node2, options, visitorKeys);
        },
        PropertyDefinition(node2, options, visitorKeys) {
          if (options.considerImplicitTypeConversion && node2.computed && node2.key.type !== "Literal") {
            return true;
          }
          return this.$visitChildren(node2, options, visitorKeys);
        },
        UnaryExpression(node2, options, visitorKeys) {
          if (node2.operator === "delete") {
            return true;
          }
          if (options.considerImplicitTypeConversion && typeConversionUnaryOps.has(node2.operator) && node2.argument.type !== "Literal") {
            return true;
          }
          return this.$visitChildren(node2, options, visitorKeys);
        },
        UpdateExpression() {
          return true;
        },
        YieldExpression() {
          return true;
        }
      })
    );
    function hasSideEffect(node2, sourceCode, { considerGetters = false, considerImplicitTypeConversion = false } = {}) {
      return visitor.$visit(
        node2,
        { considerGetters, considerImplicitTypeConversion },
        sourceCode.visitorKeys || eslintVisitorKeys.KEYS
      );
    }
    function getParentSyntaxParen(node2, sourceCode) {
      const parent = node2.parent;
      switch (parent.type) {
        case "CallExpression":
        case "NewExpression":
          if (parent.arguments.length === 1 && parent.arguments[0] === node2) {
            return sourceCode.getTokenAfter(
              parent.callee,
              isOpeningParenToken
            );
          }
          return null;
        case "DoWhileStatement":
          if (parent.test === node2) {
            return sourceCode.getTokenAfter(
              parent.body,
              isOpeningParenToken
            );
          }
          return null;
        case "IfStatement":
        case "WhileStatement":
          if (parent.test === node2) {
            return sourceCode.getFirstToken(parent, 1);
          }
          return null;
        case "ImportExpression":
          if (parent.source === node2) {
            return sourceCode.getFirstToken(parent, 1);
          }
          return null;
        case "SwitchStatement":
          if (parent.discriminant === node2) {
            return sourceCode.getFirstToken(parent, 1);
          }
          return null;
        case "WithStatement":
          if (parent.object === node2) {
            return sourceCode.getFirstToken(parent, 1);
          }
          return null;
        default:
          return null;
      }
    }
    function isParenthesized(timesOrNode, nodeOrSourceCode, optionalSourceCode) {
      let times, node2, sourceCode, maybeLeftParen, maybeRightParen;
      if (typeof timesOrNode === "number") {
        times = timesOrNode | 0;
        node2 = nodeOrSourceCode;
        sourceCode = optionalSourceCode;
        if (!(times >= 1)) {
          throw new TypeError("'times' should be a positive integer.");
        }
      } else {
        times = 1;
        node2 = timesOrNode;
        sourceCode = nodeOrSourceCode;
      }
      if (node2 == null || // `Program` can't be parenthesized
      node2.parent == null || // `CatchClause.param` can't be parenthesized, example `try {} catch (error) {}`
      node2.parent.type === "CatchClause" && node2.parent.param === node2) {
        return false;
      }
      maybeLeftParen = maybeRightParen = node2;
      do {
        maybeLeftParen = sourceCode.getTokenBefore(maybeLeftParen);
        maybeRightParen = sourceCode.getTokenAfter(maybeRightParen);
      } while (maybeLeftParen != null && maybeRightParen != null && isOpeningParenToken(maybeLeftParen) && isClosingParenToken(maybeRightParen) && // Avoid false positive such as `if (a) {}`
      maybeLeftParen !== getParentSyntaxParen(node2, sourceCode) && --times > 0);
      return times === 0;
    }
    var placeholder = /\$(?:[$&`']|[1-9][0-9]?)/gu;
    var internal = /* @__PURE__ */ new WeakMap();
    function isEscaped(str, index3) {
      let escaped = false;
      for (let i = index3 - 1; i >= 0 && str.charCodeAt(i) === 92; --i) {
        escaped = !escaped;
      }
      return escaped;
    }
    function replaceS(matcher, str, replacement) {
      const chunks = [];
      let index3 = 0;
      let match = null;
      function replacer(key) {
        switch (key) {
          case "$$":
            return "$";
          case "$&":
            return match[0];
          case "$`":
            return str.slice(0, match.index);
          case "$'":
            return str.slice(match.index + match[0].length);
          default: {
            const i = key.slice(1);
            if (i in match) {
              return match[i];
            }
            return key;
          }
        }
      }
      for (match of matcher.execAll(str)) {
        chunks.push(str.slice(index3, match.index));
        chunks.push(replacement.replace(placeholder, replacer));
        index3 = match.index + match[0].length;
      }
      chunks.push(str.slice(index3));
      return chunks.join("");
    }
    function replaceF(matcher, str, replace) {
      const chunks = [];
      let index3 = 0;
      for (const match of matcher.execAll(str)) {
        chunks.push(str.slice(index3, match.index));
        chunks.push(String(replace(...match, match.index, match.input)));
        index3 = match.index + match[0].length;
      }
      chunks.push(str.slice(index3));
      return chunks.join("");
    }
    var PatternMatcher = class {
      /**
       * Initialize this matcher.
       * @param {RegExp} pattern The pattern to match.
       * @param {{escaped:boolean}} options The options.
       */
      constructor(pattern, { escaped = false } = {}) {
        if (!(pattern instanceof RegExp)) {
          throw new TypeError("'pattern' should be a RegExp instance.");
        }
        if (!pattern.flags.includes("g")) {
          throw new Error("'pattern' should contains 'g' flag.");
        }
        internal.set(this, {
          pattern: new RegExp(pattern.source, pattern.flags),
          escaped: Boolean(escaped)
        });
      }
      /**
       * Find the pattern in a given string.
       * @param {string} str The string to find.
       * @returns {IterableIterator<RegExpExecArray>} The iterator which iterate the matched information.
       */
      *execAll(str) {
        const { pattern, escaped } = internal.get(this);
        let match = null;
        let lastIndex = 0;
        pattern.lastIndex = 0;
        while ((match = pattern.exec(str)) != null) {
          if (escaped || !isEscaped(str, match.index)) {
            lastIndex = pattern.lastIndex;
            yield match;
            pattern.lastIndex = lastIndex;
          }
        }
      }
      /**
       * Check whether the pattern is found in a given string.
       * @param {string} str The string to check.
       * @returns {boolean} `true` if the pattern was found in the string.
       */
      test(str) {
        const it = this.execAll(str);
        const ret = it.next();
        return !ret.done;
      }
      /**
       * Replace a given string.
       * @param {string} str The string to be replaced.
       * @param {(string|((...strs:string[])=>string))} replacer The string or function to replace. This is the same as the 2nd argument of `String.prototype.replace`.
       * @returns {string} The replaced string.
       */
      [Symbol.replace](str, replacer) {
        return typeof replacer === "function" ? replaceF(this, String(str), replacer) : replaceS(this, String(str), String(replacer));
      }
    };
    var IMPORT_TYPE = /^(?:Import|Export(?:All|Default|Named))Declaration$/u;
    var has = Function.call.bind(Object.hasOwnProperty);
    var READ = Symbol("read");
    var CALL = Symbol("call");
    var CONSTRUCT = Symbol("construct");
    var ESM = Symbol("esm");
    var requireCall = { require: { [CALL]: true } };
    function isModifiedGlobal(variable) {
      return variable == null || variable.defs.length !== 0 || variable.references.some((r) => r.isWrite());
    }
    function isPassThrough(node2) {
      const parent = node2.parent;
      switch (parent && parent.type) {
        case "ConditionalExpression":
          return parent.consequent === node2 || parent.alternate === node2;
        case "LogicalExpression":
          return true;
        case "SequenceExpression":
          return parent.expressions[parent.expressions.length - 1] === node2;
        case "ChainExpression":
          return true;
        default:
          return false;
      }
    }
    var ReferenceTracker = class {
      /**
       * Initialize this tracker.
       * @param {Scope} globalScope The global scope.
       * @param {object} [options] The options.
       * @param {"legacy"|"strict"} [options.mode="strict"] The mode to determine the ImportDeclaration's behavior for CJS modules.
       * @param {string[]} [options.globalObjectNames=["global","globalThis","self","window"]] The variable names for Global Object.
       */
      constructor(globalScope, {
        mode = "strict",
        globalObjectNames = ["global", "globalThis", "self", "window"]
      } = {}) {
        this.variableStack = [];
        this.globalScope = globalScope;
        this.mode = mode;
        this.globalObjectNames = globalObjectNames.slice(0);
      }
      /**
       * Iterate the references of global variables.
       * @param {object} traceMap The trace map.
       * @returns {IterableIterator<{node:Node,path:string[],type:symbol,info:any}>} The iterator to iterate references.
       */
      *iterateGlobalReferences(traceMap) {
        for (const key of Object.keys(traceMap)) {
          const nextTraceMap = traceMap[key];
          const path6 = [key];
          const variable = this.globalScope.set.get(key);
          if (isModifiedGlobal(variable)) {
            continue;
          }
          yield* this._iterateVariableReferences(
            variable,
            path6,
            nextTraceMap,
            true
          );
        }
        for (const key of this.globalObjectNames) {
          const path6 = [];
          const variable = this.globalScope.set.get(key);
          if (isModifiedGlobal(variable)) {
            continue;
          }
          yield* this._iterateVariableReferences(
            variable,
            path6,
            traceMap,
            false
          );
        }
      }
      /**
       * Iterate the references of CommonJS modules.
       * @param {object} traceMap The trace map.
       * @returns {IterableIterator<{node:Node,path:string[],type:symbol,info:any}>} The iterator to iterate references.
       */
      *iterateCjsReferences(traceMap) {
        for (const { node: node2 } of this.iterateGlobalReferences(requireCall)) {
          const key = getStringIfConstant(node2.arguments[0]);
          if (key == null || !has(traceMap, key)) {
            continue;
          }
          const nextTraceMap = traceMap[key];
          const path6 = [key];
          if (nextTraceMap[READ]) {
            yield {
              node: node2,
              path: path6,
              type: READ,
              info: nextTraceMap[READ]
            };
          }
          yield* this._iteratePropertyReferences(node2, path6, nextTraceMap);
        }
      }
      /**
       * Iterate the references of ES modules.
       * @param {object} traceMap The trace map.
       * @returns {IterableIterator<{node:Node,path:string[],type:symbol,info:any}>} The iterator to iterate references.
       */
      *iterateEsmReferences(traceMap) {
        const programNode = this.globalScope.block;
        for (const node2 of programNode.body) {
          if (!IMPORT_TYPE.test(node2.type) || node2.source == null) {
            continue;
          }
          const moduleId = node2.source.value;
          if (!has(traceMap, moduleId)) {
            continue;
          }
          const nextTraceMap = traceMap[moduleId];
          const path6 = [moduleId];
          if (nextTraceMap[READ]) {
            yield { node: node2, path: path6, type: READ, info: nextTraceMap[READ] };
          }
          if (node2.type === "ExportAllDeclaration") {
            for (const key of Object.keys(nextTraceMap)) {
              const exportTraceMap = nextTraceMap[key];
              if (exportTraceMap[READ]) {
                yield {
                  node: node2,
                  path: path6.concat(key),
                  type: READ,
                  info: exportTraceMap[READ]
                };
              }
            }
          } else {
            for (const specifier of node2.specifiers) {
              const esm = has(nextTraceMap, ESM);
              const it = this._iterateImportReferences(
                specifier,
                path6,
                esm ? nextTraceMap : this.mode === "legacy" ? { default: nextTraceMap, ...nextTraceMap } : { default: nextTraceMap }
              );
              if (esm) {
                yield* it;
              } else {
                for (const report of it) {
                  report.path = report.path.filter(exceptDefault);
                  if (report.path.length >= 2 || report.type !== READ) {
                    yield report;
                  }
                }
              }
            }
          }
        }
      }
      /**
       * Iterate the references for a given variable.
       * @param {Variable} variable The variable to iterate that references.
       * @param {string[]} path The current path.
       * @param {object} traceMap The trace map.
       * @param {boolean} shouldReport = The flag to report those references.
       * @returns {IterableIterator<{node:Node,path:string[],type:symbol,info:any}>} The iterator to iterate references.
       */
      *_iterateVariableReferences(variable, path6, traceMap, shouldReport) {
        if (this.variableStack.includes(variable)) {
          return;
        }
        this.variableStack.push(variable);
        try {
          for (const reference of variable.references) {
            if (!reference.isRead()) {
              continue;
            }
            const node2 = reference.identifier;
            if (shouldReport && traceMap[READ]) {
              yield { node: node2, path: path6, type: READ, info: traceMap[READ] };
            }
            yield* this._iteratePropertyReferences(node2, path6, traceMap);
          }
        } finally {
          this.variableStack.pop();
        }
      }
      /**
       * Iterate the references for a given AST node.
       * @param rootNode The AST node to iterate references.
       * @param {string[]} path The current path.
       * @param {object} traceMap The trace map.
       * @returns {IterableIterator<{node:Node,path:string[],type:symbol,info:any}>} The iterator to iterate references.
       */
      //eslint-disable-next-line complexity
      *_iteratePropertyReferences(rootNode, path6, traceMap) {
        let node2 = rootNode;
        while (isPassThrough(node2)) {
          node2 = node2.parent;
        }
        const parent = node2.parent;
        if (parent.type === "MemberExpression") {
          if (parent.object === node2) {
            const key = getPropertyName(parent);
            if (key == null || !has(traceMap, key)) {
              return;
            }
            path6 = path6.concat(key);
            const nextTraceMap = traceMap[key];
            if (nextTraceMap[READ]) {
              yield {
                node: parent,
                path: path6,
                type: READ,
                info: nextTraceMap[READ]
              };
            }
            yield* this._iteratePropertyReferences(
              parent,
              path6,
              nextTraceMap
            );
          }
          return;
        }
        if (parent.type === "CallExpression") {
          if (parent.callee === node2 && traceMap[CALL]) {
            yield { node: parent, path: path6, type: CALL, info: traceMap[CALL] };
          }
          return;
        }
        if (parent.type === "NewExpression") {
          if (parent.callee === node2 && traceMap[CONSTRUCT]) {
            yield {
              node: parent,
              path: path6,
              type: CONSTRUCT,
              info: traceMap[CONSTRUCT]
            };
          }
          return;
        }
        if (parent.type === "AssignmentExpression") {
          if (parent.right === node2) {
            yield* this._iterateLhsReferences(parent.left, path6, traceMap);
            yield* this._iteratePropertyReferences(parent, path6, traceMap);
          }
          return;
        }
        if (parent.type === "AssignmentPattern") {
          if (parent.right === node2) {
            yield* this._iterateLhsReferences(parent.left, path6, traceMap);
          }
          return;
        }
        if (parent.type === "VariableDeclarator") {
          if (parent.init === node2) {
            yield* this._iterateLhsReferences(parent.id, path6, traceMap);
          }
        }
      }
      /**
       * Iterate the references for a given Pattern node.
       * @param {Node} patternNode The Pattern node to iterate references.
       * @param {string[]} path The current path.
       * @param {object} traceMap The trace map.
       * @returns {IterableIterator<{node:Node,path:string[],type:symbol,info:any}>} The iterator to iterate references.
       */
      *_iterateLhsReferences(patternNode, path6, traceMap) {
        if (patternNode.type === "Identifier") {
          const variable = findVariable(this.globalScope, patternNode);
          if (variable != null) {
            yield* this._iterateVariableReferences(
              variable,
              path6,
              traceMap,
              false
            );
          }
          return;
        }
        if (patternNode.type === "ObjectPattern") {
          for (const property of patternNode.properties) {
            const key = getPropertyName(property);
            if (key == null || !has(traceMap, key)) {
              continue;
            }
            const nextPath = path6.concat(key);
            const nextTraceMap = traceMap[key];
            if (nextTraceMap[READ]) {
              yield {
                node: property,
                path: nextPath,
                type: READ,
                info: nextTraceMap[READ]
              };
            }
            yield* this._iterateLhsReferences(
              property.value,
              nextPath,
              nextTraceMap
            );
          }
          return;
        }
        if (patternNode.type === "AssignmentPattern") {
          yield* this._iterateLhsReferences(patternNode.left, path6, traceMap);
        }
      }
      /**
       * Iterate the references for a given ModuleSpecifier node.
       * @param {Node} specifierNode The ModuleSpecifier node to iterate references.
       * @param {string[]} path The current path.
       * @param {object} traceMap The trace map.
       * @returns {IterableIterator<{node:Node,path:string[],type:symbol,info:any}>} The iterator to iterate references.
       */
      *_iterateImportReferences(specifierNode, path6, traceMap) {
        const type = specifierNode.type;
        if (type === "ImportSpecifier" || type === "ImportDefaultSpecifier") {
          const key = type === "ImportDefaultSpecifier" ? "default" : specifierNode.imported.name;
          if (!has(traceMap, key)) {
            return;
          }
          path6 = path6.concat(key);
          const nextTraceMap = traceMap[key];
          if (nextTraceMap[READ]) {
            yield {
              node: specifierNode,
              path: path6,
              type: READ,
              info: nextTraceMap[READ]
            };
          }
          yield* this._iterateVariableReferences(
            findVariable(this.globalScope, specifierNode.local),
            path6,
            nextTraceMap,
            false
          );
          return;
        }
        if (type === "ImportNamespaceSpecifier") {
          yield* this._iterateVariableReferences(
            findVariable(this.globalScope, specifierNode.local),
            path6,
            traceMap,
            false
          );
          return;
        }
        if (type === "ExportSpecifier") {
          const key = specifierNode.local.name;
          if (!has(traceMap, key)) {
            return;
          }
          path6 = path6.concat(key);
          const nextTraceMap = traceMap[key];
          if (nextTraceMap[READ]) {
            yield {
              node: specifierNode,
              path: path6,
              type: READ,
              info: nextTraceMap[READ]
            };
          }
        }
      }
    };
    ReferenceTracker.READ = READ;
    ReferenceTracker.CALL = CALL;
    ReferenceTracker.CONSTRUCT = CONSTRUCT;
    ReferenceTracker.ESM = ESM;
    function exceptDefault(name, index3) {
      return !(index3 === 1 && name === "default");
    }
    var index2 = {
      CALL,
      CONSTRUCT,
      ESM,
      findVariable,
      getFunctionHeadLocation,
      getFunctionNameWithKind,
      getInnermostScope,
      getPropertyName,
      getStaticValue,
      getStringIfConstant,
      hasSideEffect,
      isArrowToken,
      isClosingBraceToken,
      isClosingBracketToken,
      isClosingParenToken,
      isColonToken,
      isCommaToken,
      isCommentToken,
      isNotArrowToken,
      isNotClosingBraceToken,
      isNotClosingBracketToken,
      isNotClosingParenToken,
      isNotColonToken,
      isNotCommaToken,
      isNotCommentToken,
      isNotOpeningBraceToken,
      isNotOpeningBracketToken,
      isNotOpeningParenToken,
      isNotSemicolonToken,
      isOpeningBraceToken,
      isOpeningBracketToken,
      isOpeningParenToken,
      isParenthesized,
      isSemicolonToken,
      PatternMatcher,
      READ,
      ReferenceTracker
    };
    exports2.CALL = CALL;
    exports2.CONSTRUCT = CONSTRUCT;
    exports2.ESM = ESM;
    exports2.PatternMatcher = PatternMatcher;
    exports2.READ = READ;
    exports2.ReferenceTracker = ReferenceTracker;
    exports2["default"] = index2;
    exports2.findVariable = findVariable;
    exports2.getFunctionHeadLocation = getFunctionHeadLocation;
    exports2.getFunctionNameWithKind = getFunctionNameWithKind;
    exports2.getInnermostScope = getInnermostScope;
    exports2.getPropertyName = getPropertyName;
    exports2.getStaticValue = getStaticValue;
    exports2.getStringIfConstant = getStringIfConstant;
    exports2.hasSideEffect = hasSideEffect;
    exports2.isArrowToken = isArrowToken;
    exports2.isClosingBraceToken = isClosingBraceToken;
    exports2.isClosingBracketToken = isClosingBracketToken;
    exports2.isClosingParenToken = isClosingParenToken;
    exports2.isColonToken = isColonToken;
    exports2.isCommaToken = isCommaToken;
    exports2.isCommentToken = isCommentToken;
    exports2.isNotArrowToken = isNotArrowToken;
    exports2.isNotClosingBraceToken = isNotClosingBraceToken;
    exports2.isNotClosingBracketToken = isNotClosingBracketToken;
    exports2.isNotClosingParenToken = isNotClosingParenToken;
    exports2.isNotColonToken = isNotColonToken;
    exports2.isNotCommaToken = isNotCommaToken;
    exports2.isNotCommentToken = isNotCommentToken;
    exports2.isNotOpeningBraceToken = isNotOpeningBraceToken;
    exports2.isNotOpeningBracketToken = isNotOpeningBracketToken;
    exports2.isNotOpeningParenToken = isNotOpeningParenToken;
    exports2.isNotSemicolonToken = isNotSemicolonToken;
    exports2.isOpeningBraceToken = isOpeningBraceToken;
    exports2.isOpeningBracketToken = isOpeningBracketToken;
    exports2.isOpeningParenToken = isOpeningParenToken;
    exports2.isParenthesized = isParenthesized;
    exports2.isSemicolonToken = isSemicolonToken;
  }
});

// node_modules/.pnpm/@typescript-eslint+utils@7.10.0_eslint@8.57.0_typescript@5.4.5/node_modules/@typescript-eslint/utils/dist/ast-utils/eslint-utils/astUtilities.js
var require_astUtilities = __commonJS({
  "node_modules/.pnpm/@typescript-eslint+utils@7.10.0_eslint@8.57.0_typescript@5.4.5/node_modules/@typescript-eslint/utils/dist/ast-utils/eslint-utils/astUtilities.js"(exports2) {
    "use strict";
    init_cjs_shims();
    var __createBinding = exports2 && exports2.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __setModuleDefault = exports2 && exports2.__setModuleDefault || (Object.create ? function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    } : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports2 && exports2.__importStar || function(mod) {
      if (mod && mod.__esModule)
        return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod)
          if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
            __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.isParenthesized = exports2.hasSideEffect = exports2.getStringIfConstant = exports2.getStaticValue = exports2.getPropertyName = exports2.getFunctionNameWithKind = exports2.getFunctionHeadLocation = void 0;
    var eslintUtils = __importStar(require_eslint_utils());
    var getFunctionHeadLocation = eslintUtils.getFunctionHeadLocation;
    exports2.getFunctionHeadLocation = getFunctionHeadLocation;
    var getFunctionNameWithKind = eslintUtils.getFunctionNameWithKind;
    exports2.getFunctionNameWithKind = getFunctionNameWithKind;
    var getPropertyName = eslintUtils.getPropertyName;
    exports2.getPropertyName = getPropertyName;
    var getStaticValue = eslintUtils.getStaticValue;
    exports2.getStaticValue = getStaticValue;
    var getStringIfConstant = eslintUtils.getStringIfConstant;
    exports2.getStringIfConstant = getStringIfConstant;
    var hasSideEffect = eslintUtils.hasSideEffect;
    exports2.hasSideEffect = hasSideEffect;
    var isParenthesized = eslintUtils.isParenthesized;
    exports2.isParenthesized = isParenthesized;
  }
});

// node_modules/.pnpm/@typescript-eslint+utils@7.10.0_eslint@8.57.0_typescript@5.4.5/node_modules/@typescript-eslint/utils/dist/ast-utils/eslint-utils/PatternMatcher.js
var require_PatternMatcher = __commonJS({
  "node_modules/.pnpm/@typescript-eslint+utils@7.10.0_eslint@8.57.0_typescript@5.4.5/node_modules/@typescript-eslint/utils/dist/ast-utils/eslint-utils/PatternMatcher.js"(exports2) {
    "use strict";
    init_cjs_shims();
    var __createBinding = exports2 && exports2.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __setModuleDefault = exports2 && exports2.__setModuleDefault || (Object.create ? function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    } : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports2 && exports2.__importStar || function(mod) {
      if (mod && mod.__esModule)
        return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod)
          if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
            __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.PatternMatcher = void 0;
    var eslintUtils = __importStar(require_eslint_utils());
    var PatternMatcher = eslintUtils.PatternMatcher;
    exports2.PatternMatcher = PatternMatcher;
  }
});

// node_modules/.pnpm/@typescript-eslint+utils@7.10.0_eslint@8.57.0_typescript@5.4.5/node_modules/@typescript-eslint/utils/dist/ast-utils/eslint-utils/predicates.js
var require_predicates = __commonJS({
  "node_modules/.pnpm/@typescript-eslint+utils@7.10.0_eslint@8.57.0_typescript@5.4.5/node_modules/@typescript-eslint/utils/dist/ast-utils/eslint-utils/predicates.js"(exports2) {
    "use strict";
    init_cjs_shims();
    var __createBinding = exports2 && exports2.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __setModuleDefault = exports2 && exports2.__setModuleDefault || (Object.create ? function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    } : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports2 && exports2.__importStar || function(mod) {
      if (mod && mod.__esModule)
        return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod)
          if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
            __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.isSemicolonToken = exports2.isOpeningParenToken = exports2.isOpeningBracketToken = exports2.isOpeningBraceToken = exports2.isNotSemicolonToken = exports2.isNotOpeningParenToken = exports2.isNotOpeningBracketToken = exports2.isNotOpeningBraceToken = exports2.isNotCommentToken = exports2.isNotCommaToken = exports2.isNotColonToken = exports2.isNotClosingParenToken = exports2.isNotClosingBracketToken = exports2.isNotClosingBraceToken = exports2.isNotArrowToken = exports2.isCommentToken = exports2.isCommaToken = exports2.isColonToken = exports2.isClosingParenToken = exports2.isClosingBracketToken = exports2.isClosingBraceToken = exports2.isArrowToken = void 0;
    var eslintUtils = __importStar(require_eslint_utils());
    var isArrowToken = eslintUtils.isArrowToken;
    exports2.isArrowToken = isArrowToken;
    var isNotArrowToken = eslintUtils.isNotArrowToken;
    exports2.isNotArrowToken = isNotArrowToken;
    var isClosingBraceToken = eslintUtils.isClosingBraceToken;
    exports2.isClosingBraceToken = isClosingBraceToken;
    var isNotClosingBraceToken = eslintUtils.isNotClosingBraceToken;
    exports2.isNotClosingBraceToken = isNotClosingBraceToken;
    var isClosingBracketToken = eslintUtils.isClosingBracketToken;
    exports2.isClosingBracketToken = isClosingBracketToken;
    var isNotClosingBracketToken = eslintUtils.isNotClosingBracketToken;
    exports2.isNotClosingBracketToken = isNotClosingBracketToken;
    var isClosingParenToken = eslintUtils.isClosingParenToken;
    exports2.isClosingParenToken = isClosingParenToken;
    var isNotClosingParenToken = eslintUtils.isNotClosingParenToken;
    exports2.isNotClosingParenToken = isNotClosingParenToken;
    var isColonToken = eslintUtils.isColonToken;
    exports2.isColonToken = isColonToken;
    var isNotColonToken = eslintUtils.isNotColonToken;
    exports2.isNotColonToken = isNotColonToken;
    var isCommaToken = eslintUtils.isCommaToken;
    exports2.isCommaToken = isCommaToken;
    var isNotCommaToken = eslintUtils.isNotCommaToken;
    exports2.isNotCommaToken = isNotCommaToken;
    var isCommentToken = eslintUtils.isCommentToken;
    exports2.isCommentToken = isCommentToken;
    var isNotCommentToken = eslintUtils.isNotCommentToken;
    exports2.isNotCommentToken = isNotCommentToken;
    var isOpeningBraceToken = eslintUtils.isOpeningBraceToken;
    exports2.isOpeningBraceToken = isOpeningBraceToken;
    var isNotOpeningBraceToken = eslintUtils.isNotOpeningBraceToken;
    exports2.isNotOpeningBraceToken = isNotOpeningBraceToken;
    var isOpeningBracketToken = eslintUtils.isOpeningBracketToken;
    exports2.isOpeningBracketToken = isOpeningBracketToken;
    var isNotOpeningBracketToken = eslintUtils.isNotOpeningBracketToken;
    exports2.isNotOpeningBracketToken = isNotOpeningBracketToken;
    var isOpeningParenToken = eslintUtils.isOpeningParenToken;
    exports2.isOpeningParenToken = isOpeningParenToken;
    var isNotOpeningParenToken = eslintUtils.isNotOpeningParenToken;
    exports2.isNotOpeningParenToken = isNotOpeningParenToken;
    var isSemicolonToken = eslintUtils.isSemicolonToken;
    exports2.isSemicolonToken = isSemicolonToken;
    var isNotSemicolonToken = eslintUtils.isNotSemicolonToken;
    exports2.isNotSemicolonToken = isNotSemicolonToken;
  }
});

// node_modules/.pnpm/@typescript-eslint+utils@7.10.0_eslint@8.57.0_typescript@5.4.5/node_modules/@typescript-eslint/utils/dist/ast-utils/eslint-utils/ReferenceTracker.js
var require_ReferenceTracker = __commonJS({
  "node_modules/.pnpm/@typescript-eslint+utils@7.10.0_eslint@8.57.0_typescript@5.4.5/node_modules/@typescript-eslint/utils/dist/ast-utils/eslint-utils/ReferenceTracker.js"(exports2) {
    "use strict";
    init_cjs_shims();
    var __createBinding = exports2 && exports2.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __setModuleDefault = exports2 && exports2.__setModuleDefault || (Object.create ? function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    } : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports2 && exports2.__importStar || function(mod) {
      if (mod && mod.__esModule)
        return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod)
          if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
            __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.ReferenceTracker = void 0;
    var eslintUtils = __importStar(require_eslint_utils());
    var ReferenceTrackerREAD = eslintUtils.ReferenceTracker.READ;
    var ReferenceTrackerCALL = eslintUtils.ReferenceTracker.CALL;
    var ReferenceTrackerCONSTRUCT = eslintUtils.ReferenceTracker.CONSTRUCT;
    var ReferenceTrackerESM = eslintUtils.ReferenceTracker.ESM;
    var ReferenceTracker = eslintUtils.ReferenceTracker;
    exports2.ReferenceTracker = ReferenceTracker;
  }
});

// node_modules/.pnpm/@typescript-eslint+utils@7.10.0_eslint@8.57.0_typescript@5.4.5/node_modules/@typescript-eslint/utils/dist/ast-utils/eslint-utils/scopeAnalysis.js
var require_scopeAnalysis = __commonJS({
  "node_modules/.pnpm/@typescript-eslint+utils@7.10.0_eslint@8.57.0_typescript@5.4.5/node_modules/@typescript-eslint/utils/dist/ast-utils/eslint-utils/scopeAnalysis.js"(exports2) {
    "use strict";
    init_cjs_shims();
    var __createBinding = exports2 && exports2.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __setModuleDefault = exports2 && exports2.__setModuleDefault || (Object.create ? function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    } : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports2 && exports2.__importStar || function(mod) {
      if (mod && mod.__esModule)
        return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod)
          if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
            __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.getInnermostScope = exports2.findVariable = void 0;
    var eslintUtils = __importStar(require_eslint_utils());
    var findVariable = eslintUtils.findVariable;
    exports2.findVariable = findVariable;
    var getInnermostScope = eslintUtils.getInnermostScope;
    exports2.getInnermostScope = getInnermostScope;
  }
});

// node_modules/.pnpm/@typescript-eslint+utils@7.10.0_eslint@8.57.0_typescript@5.4.5/node_modules/@typescript-eslint/utils/dist/ast-utils/eslint-utils/index.js
var require_eslint_utils2 = __commonJS({
  "node_modules/.pnpm/@typescript-eslint+utils@7.10.0_eslint@8.57.0_typescript@5.4.5/node_modules/@typescript-eslint/utils/dist/ast-utils/eslint-utils/index.js"(exports2) {
    "use strict";
    init_cjs_shims();
    var __createBinding = exports2 && exports2.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __exportStar = exports2 && exports2.__exportStar || function(m, exports3) {
      for (var p in m)
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports3, p))
          __createBinding(exports3, m, p);
    };
    Object.defineProperty(exports2, "__esModule", { value: true });
    __exportStar(require_astUtilities(), exports2);
    __exportStar(require_PatternMatcher(), exports2);
    __exportStar(require_predicates(), exports2);
    __exportStar(require_ReferenceTracker(), exports2);
    __exportStar(require_scopeAnalysis(), exports2);
  }
});

// node_modules/.pnpm/@typescript-eslint+utils@7.10.0_eslint@8.57.0_typescript@5.4.5/node_modules/@typescript-eslint/utils/dist/ast-utils/helpers.js
var require_helpers = __commonJS({
  "node_modules/.pnpm/@typescript-eslint+utils@7.10.0_eslint@8.57.0_typescript@5.4.5/node_modules/@typescript-eslint/utils/dist/ast-utils/helpers.js"(exports2) {
    "use strict";
    init_cjs_shims();
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.isNotTokenOfTypeWithConditions = exports2.isTokenOfTypeWithConditions = exports2.isNodeOfTypeWithConditions = exports2.isNodeOfTypes = exports2.isNodeOfType = void 0;
    var isNodeOfType = (nodeType) => (node2) => node2?.type === nodeType;
    exports2.isNodeOfType = isNodeOfType;
    var isNodeOfTypes = (nodeTypes) => (node2) => !!node2 && nodeTypes.includes(node2.type);
    exports2.isNodeOfTypes = isNodeOfTypes;
    var isNodeOfTypeWithConditions = (nodeType, conditions) => {
      const entries = Object.entries(conditions);
      return (node2) => node2?.type === nodeType && entries.every(([key, value]) => node2[key] === value);
    };
    exports2.isNodeOfTypeWithConditions = isNodeOfTypeWithConditions;
    var isTokenOfTypeWithConditions = (tokenType, conditions) => {
      const entries = Object.entries(conditions);
      return (token) => token?.type === tokenType && entries.every(([key, value]) => token[key] === value);
    };
    exports2.isTokenOfTypeWithConditions = isTokenOfTypeWithConditions;
    var isNotTokenOfTypeWithConditions = (tokenType, conditions) => (token) => !(0, exports2.isTokenOfTypeWithConditions)(tokenType, conditions)(token);
    exports2.isNotTokenOfTypeWithConditions = isNotTokenOfTypeWithConditions;
  }
});

// node_modules/.pnpm/@typescript-eslint+utils@7.10.0_eslint@8.57.0_typescript@5.4.5/node_modules/@typescript-eslint/utils/dist/ast-utils/misc.js
var require_misc = __commonJS({
  "node_modules/.pnpm/@typescript-eslint+utils@7.10.0_eslint@8.57.0_typescript@5.4.5/node_modules/@typescript-eslint/utils/dist/ast-utils/misc.js"(exports2) {
    "use strict";
    init_cjs_shims();
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.LINEBREAK_MATCHER = exports2.isTokenOnSameLine = void 0;
    var LINEBREAK_MATCHER = /\r\n|[\r\n\u2028\u2029]/;
    exports2.LINEBREAK_MATCHER = LINEBREAK_MATCHER;
    function isTokenOnSameLine(left, right) {
      return left.loc.end.line === right.loc.start.line;
    }
    exports2.isTokenOnSameLine = isTokenOnSameLine;
  }
});

// node_modules/.pnpm/@typescript-eslint+types@7.10.0/node_modules/@typescript-eslint/types/dist/generated/ast-spec.js
var require_ast_spec = __commonJS({
  "node_modules/.pnpm/@typescript-eslint+types@7.10.0/node_modules/@typescript-eslint/types/dist/generated/ast-spec.js"(exports2) {
    "use strict";
    init_cjs_shims();
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.AST_TOKEN_TYPES = exports2.AST_NODE_TYPES = void 0;
    var AST_NODE_TYPES;
    (function(AST_NODE_TYPES2) {
      AST_NODE_TYPES2["AccessorProperty"] = "AccessorProperty";
      AST_NODE_TYPES2["ArrayExpression"] = "ArrayExpression";
      AST_NODE_TYPES2["ArrayPattern"] = "ArrayPattern";
      AST_NODE_TYPES2["ArrowFunctionExpression"] = "ArrowFunctionExpression";
      AST_NODE_TYPES2["AssignmentExpression"] = "AssignmentExpression";
      AST_NODE_TYPES2["AssignmentPattern"] = "AssignmentPattern";
      AST_NODE_TYPES2["AwaitExpression"] = "AwaitExpression";
      AST_NODE_TYPES2["BinaryExpression"] = "BinaryExpression";
      AST_NODE_TYPES2["BlockStatement"] = "BlockStatement";
      AST_NODE_TYPES2["BreakStatement"] = "BreakStatement";
      AST_NODE_TYPES2["CallExpression"] = "CallExpression";
      AST_NODE_TYPES2["CatchClause"] = "CatchClause";
      AST_NODE_TYPES2["ChainExpression"] = "ChainExpression";
      AST_NODE_TYPES2["ClassBody"] = "ClassBody";
      AST_NODE_TYPES2["ClassDeclaration"] = "ClassDeclaration";
      AST_NODE_TYPES2["ClassExpression"] = "ClassExpression";
      AST_NODE_TYPES2["ConditionalExpression"] = "ConditionalExpression";
      AST_NODE_TYPES2["ContinueStatement"] = "ContinueStatement";
      AST_NODE_TYPES2["DebuggerStatement"] = "DebuggerStatement";
      AST_NODE_TYPES2["Decorator"] = "Decorator";
      AST_NODE_TYPES2["DoWhileStatement"] = "DoWhileStatement";
      AST_NODE_TYPES2["EmptyStatement"] = "EmptyStatement";
      AST_NODE_TYPES2["ExportAllDeclaration"] = "ExportAllDeclaration";
      AST_NODE_TYPES2["ExportDefaultDeclaration"] = "ExportDefaultDeclaration";
      AST_NODE_TYPES2["ExportNamedDeclaration"] = "ExportNamedDeclaration";
      AST_NODE_TYPES2["ExportSpecifier"] = "ExportSpecifier";
      AST_NODE_TYPES2["ExpressionStatement"] = "ExpressionStatement";
      AST_NODE_TYPES2["ForInStatement"] = "ForInStatement";
      AST_NODE_TYPES2["ForOfStatement"] = "ForOfStatement";
      AST_NODE_TYPES2["ForStatement"] = "ForStatement";
      AST_NODE_TYPES2["FunctionDeclaration"] = "FunctionDeclaration";
      AST_NODE_TYPES2["FunctionExpression"] = "FunctionExpression";
      AST_NODE_TYPES2["Identifier"] = "Identifier";
      AST_NODE_TYPES2["IfStatement"] = "IfStatement";
      AST_NODE_TYPES2["ImportAttribute"] = "ImportAttribute";
      AST_NODE_TYPES2["ImportDeclaration"] = "ImportDeclaration";
      AST_NODE_TYPES2["ImportDefaultSpecifier"] = "ImportDefaultSpecifier";
      AST_NODE_TYPES2["ImportExpression"] = "ImportExpression";
      AST_NODE_TYPES2["ImportNamespaceSpecifier"] = "ImportNamespaceSpecifier";
      AST_NODE_TYPES2["ImportSpecifier"] = "ImportSpecifier";
      AST_NODE_TYPES2["JSXAttribute"] = "JSXAttribute";
      AST_NODE_TYPES2["JSXClosingElement"] = "JSXClosingElement";
      AST_NODE_TYPES2["JSXClosingFragment"] = "JSXClosingFragment";
      AST_NODE_TYPES2["JSXElement"] = "JSXElement";
      AST_NODE_TYPES2["JSXEmptyExpression"] = "JSXEmptyExpression";
      AST_NODE_TYPES2["JSXExpressionContainer"] = "JSXExpressionContainer";
      AST_NODE_TYPES2["JSXFragment"] = "JSXFragment";
      AST_NODE_TYPES2["JSXIdentifier"] = "JSXIdentifier";
      AST_NODE_TYPES2["JSXMemberExpression"] = "JSXMemberExpression";
      AST_NODE_TYPES2["JSXNamespacedName"] = "JSXNamespacedName";
      AST_NODE_TYPES2["JSXOpeningElement"] = "JSXOpeningElement";
      AST_NODE_TYPES2["JSXOpeningFragment"] = "JSXOpeningFragment";
      AST_NODE_TYPES2["JSXSpreadAttribute"] = "JSXSpreadAttribute";
      AST_NODE_TYPES2["JSXSpreadChild"] = "JSXSpreadChild";
      AST_NODE_TYPES2["JSXText"] = "JSXText";
      AST_NODE_TYPES2["LabeledStatement"] = "LabeledStatement";
      AST_NODE_TYPES2["Literal"] = "Literal";
      AST_NODE_TYPES2["LogicalExpression"] = "LogicalExpression";
      AST_NODE_TYPES2["MemberExpression"] = "MemberExpression";
      AST_NODE_TYPES2["MetaProperty"] = "MetaProperty";
      AST_NODE_TYPES2["MethodDefinition"] = "MethodDefinition";
      AST_NODE_TYPES2["NewExpression"] = "NewExpression";
      AST_NODE_TYPES2["ObjectExpression"] = "ObjectExpression";
      AST_NODE_TYPES2["ObjectPattern"] = "ObjectPattern";
      AST_NODE_TYPES2["PrivateIdentifier"] = "PrivateIdentifier";
      AST_NODE_TYPES2["Program"] = "Program";
      AST_NODE_TYPES2["Property"] = "Property";
      AST_NODE_TYPES2["PropertyDefinition"] = "PropertyDefinition";
      AST_NODE_TYPES2["RestElement"] = "RestElement";
      AST_NODE_TYPES2["ReturnStatement"] = "ReturnStatement";
      AST_NODE_TYPES2["SequenceExpression"] = "SequenceExpression";
      AST_NODE_TYPES2["SpreadElement"] = "SpreadElement";
      AST_NODE_TYPES2["StaticBlock"] = "StaticBlock";
      AST_NODE_TYPES2["Super"] = "Super";
      AST_NODE_TYPES2["SwitchCase"] = "SwitchCase";
      AST_NODE_TYPES2["SwitchStatement"] = "SwitchStatement";
      AST_NODE_TYPES2["TaggedTemplateExpression"] = "TaggedTemplateExpression";
      AST_NODE_TYPES2["TemplateElement"] = "TemplateElement";
      AST_NODE_TYPES2["TemplateLiteral"] = "TemplateLiteral";
      AST_NODE_TYPES2["ThisExpression"] = "ThisExpression";
      AST_NODE_TYPES2["ThrowStatement"] = "ThrowStatement";
      AST_NODE_TYPES2["TryStatement"] = "TryStatement";
      AST_NODE_TYPES2["UnaryExpression"] = "UnaryExpression";
      AST_NODE_TYPES2["UpdateExpression"] = "UpdateExpression";
      AST_NODE_TYPES2["VariableDeclaration"] = "VariableDeclaration";
      AST_NODE_TYPES2["VariableDeclarator"] = "VariableDeclarator";
      AST_NODE_TYPES2["WhileStatement"] = "WhileStatement";
      AST_NODE_TYPES2["WithStatement"] = "WithStatement";
      AST_NODE_TYPES2["YieldExpression"] = "YieldExpression";
      AST_NODE_TYPES2["TSAbstractAccessorProperty"] = "TSAbstractAccessorProperty";
      AST_NODE_TYPES2["TSAbstractKeyword"] = "TSAbstractKeyword";
      AST_NODE_TYPES2["TSAbstractMethodDefinition"] = "TSAbstractMethodDefinition";
      AST_NODE_TYPES2["TSAbstractPropertyDefinition"] = "TSAbstractPropertyDefinition";
      AST_NODE_TYPES2["TSAnyKeyword"] = "TSAnyKeyword";
      AST_NODE_TYPES2["TSArrayType"] = "TSArrayType";
      AST_NODE_TYPES2["TSAsExpression"] = "TSAsExpression";
      AST_NODE_TYPES2["TSAsyncKeyword"] = "TSAsyncKeyword";
      AST_NODE_TYPES2["TSBigIntKeyword"] = "TSBigIntKeyword";
      AST_NODE_TYPES2["TSBooleanKeyword"] = "TSBooleanKeyword";
      AST_NODE_TYPES2["TSCallSignatureDeclaration"] = "TSCallSignatureDeclaration";
      AST_NODE_TYPES2["TSClassImplements"] = "TSClassImplements";
      AST_NODE_TYPES2["TSConditionalType"] = "TSConditionalType";
      AST_NODE_TYPES2["TSConstructorType"] = "TSConstructorType";
      AST_NODE_TYPES2["TSConstructSignatureDeclaration"] = "TSConstructSignatureDeclaration";
      AST_NODE_TYPES2["TSDeclareFunction"] = "TSDeclareFunction";
      AST_NODE_TYPES2["TSDeclareKeyword"] = "TSDeclareKeyword";
      AST_NODE_TYPES2["TSEmptyBodyFunctionExpression"] = "TSEmptyBodyFunctionExpression";
      AST_NODE_TYPES2["TSEnumDeclaration"] = "TSEnumDeclaration";
      AST_NODE_TYPES2["TSEnumMember"] = "TSEnumMember";
      AST_NODE_TYPES2["TSExportAssignment"] = "TSExportAssignment";
      AST_NODE_TYPES2["TSExportKeyword"] = "TSExportKeyword";
      AST_NODE_TYPES2["TSExternalModuleReference"] = "TSExternalModuleReference";
      AST_NODE_TYPES2["TSFunctionType"] = "TSFunctionType";
      AST_NODE_TYPES2["TSInstantiationExpression"] = "TSInstantiationExpression";
      AST_NODE_TYPES2["TSImportEqualsDeclaration"] = "TSImportEqualsDeclaration";
      AST_NODE_TYPES2["TSImportType"] = "TSImportType";
      AST_NODE_TYPES2["TSIndexedAccessType"] = "TSIndexedAccessType";
      AST_NODE_TYPES2["TSIndexSignature"] = "TSIndexSignature";
      AST_NODE_TYPES2["TSInferType"] = "TSInferType";
      AST_NODE_TYPES2["TSInterfaceBody"] = "TSInterfaceBody";
      AST_NODE_TYPES2["TSInterfaceDeclaration"] = "TSInterfaceDeclaration";
      AST_NODE_TYPES2["TSInterfaceHeritage"] = "TSInterfaceHeritage";
      AST_NODE_TYPES2["TSIntersectionType"] = "TSIntersectionType";
      AST_NODE_TYPES2["TSIntrinsicKeyword"] = "TSIntrinsicKeyword";
      AST_NODE_TYPES2["TSLiteralType"] = "TSLiteralType";
      AST_NODE_TYPES2["TSMappedType"] = "TSMappedType";
      AST_NODE_TYPES2["TSMethodSignature"] = "TSMethodSignature";
      AST_NODE_TYPES2["TSModuleBlock"] = "TSModuleBlock";
      AST_NODE_TYPES2["TSModuleDeclaration"] = "TSModuleDeclaration";
      AST_NODE_TYPES2["TSNamedTupleMember"] = "TSNamedTupleMember";
      AST_NODE_TYPES2["TSNamespaceExportDeclaration"] = "TSNamespaceExportDeclaration";
      AST_NODE_TYPES2["TSNeverKeyword"] = "TSNeverKeyword";
      AST_NODE_TYPES2["TSNonNullExpression"] = "TSNonNullExpression";
      AST_NODE_TYPES2["TSNullKeyword"] = "TSNullKeyword";
      AST_NODE_TYPES2["TSNumberKeyword"] = "TSNumberKeyword";
      AST_NODE_TYPES2["TSObjectKeyword"] = "TSObjectKeyword";
      AST_NODE_TYPES2["TSOptionalType"] = "TSOptionalType";
      AST_NODE_TYPES2["TSParameterProperty"] = "TSParameterProperty";
      AST_NODE_TYPES2["TSPrivateKeyword"] = "TSPrivateKeyword";
      AST_NODE_TYPES2["TSPropertySignature"] = "TSPropertySignature";
      AST_NODE_TYPES2["TSProtectedKeyword"] = "TSProtectedKeyword";
      AST_NODE_TYPES2["TSPublicKeyword"] = "TSPublicKeyword";
      AST_NODE_TYPES2["TSQualifiedName"] = "TSQualifiedName";
      AST_NODE_TYPES2["TSReadonlyKeyword"] = "TSReadonlyKeyword";
      AST_NODE_TYPES2["TSRestType"] = "TSRestType";
      AST_NODE_TYPES2["TSSatisfiesExpression"] = "TSSatisfiesExpression";
      AST_NODE_TYPES2["TSStaticKeyword"] = "TSStaticKeyword";
      AST_NODE_TYPES2["TSStringKeyword"] = "TSStringKeyword";
      AST_NODE_TYPES2["TSSymbolKeyword"] = "TSSymbolKeyword";
      AST_NODE_TYPES2["TSTemplateLiteralType"] = "TSTemplateLiteralType";
      AST_NODE_TYPES2["TSThisType"] = "TSThisType";
      AST_NODE_TYPES2["TSTupleType"] = "TSTupleType";
      AST_NODE_TYPES2["TSTypeAliasDeclaration"] = "TSTypeAliasDeclaration";
      AST_NODE_TYPES2["TSTypeAnnotation"] = "TSTypeAnnotation";
      AST_NODE_TYPES2["TSTypeAssertion"] = "TSTypeAssertion";
      AST_NODE_TYPES2["TSTypeLiteral"] = "TSTypeLiteral";
      AST_NODE_TYPES2["TSTypeOperator"] = "TSTypeOperator";
      AST_NODE_TYPES2["TSTypeParameter"] = "TSTypeParameter";
      AST_NODE_TYPES2["TSTypeParameterDeclaration"] = "TSTypeParameterDeclaration";
      AST_NODE_TYPES2["TSTypeParameterInstantiation"] = "TSTypeParameterInstantiation";
      AST_NODE_TYPES2["TSTypePredicate"] = "TSTypePredicate";
      AST_NODE_TYPES2["TSTypeQuery"] = "TSTypeQuery";
      AST_NODE_TYPES2["TSTypeReference"] = "TSTypeReference";
      AST_NODE_TYPES2["TSUndefinedKeyword"] = "TSUndefinedKeyword";
      AST_NODE_TYPES2["TSUnionType"] = "TSUnionType";
      AST_NODE_TYPES2["TSUnknownKeyword"] = "TSUnknownKeyword";
      AST_NODE_TYPES2["TSVoidKeyword"] = "TSVoidKeyword";
    })(AST_NODE_TYPES || (exports2.AST_NODE_TYPES = AST_NODE_TYPES = {}));
    var AST_TOKEN_TYPES;
    (function(AST_TOKEN_TYPES2) {
      AST_TOKEN_TYPES2["Boolean"] = "Boolean";
      AST_TOKEN_TYPES2["Identifier"] = "Identifier";
      AST_TOKEN_TYPES2["JSXIdentifier"] = "JSXIdentifier";
      AST_TOKEN_TYPES2["JSXText"] = "JSXText";
      AST_TOKEN_TYPES2["Keyword"] = "Keyword";
      AST_TOKEN_TYPES2["Null"] = "Null";
      AST_TOKEN_TYPES2["Numeric"] = "Numeric";
      AST_TOKEN_TYPES2["Punctuator"] = "Punctuator";
      AST_TOKEN_TYPES2["RegularExpression"] = "RegularExpression";
      AST_TOKEN_TYPES2["String"] = "String";
      AST_TOKEN_TYPES2["Template"] = "Template";
      AST_TOKEN_TYPES2["Block"] = "Block";
      AST_TOKEN_TYPES2["Line"] = "Line";
    })(AST_TOKEN_TYPES || (exports2.AST_TOKEN_TYPES = AST_TOKEN_TYPES = {}));
  }
});

// node_modules/.pnpm/@typescript-eslint+types@7.10.0/node_modules/@typescript-eslint/types/dist/lib.js
var require_lib2 = __commonJS({
  "node_modules/.pnpm/@typescript-eslint+types@7.10.0/node_modules/@typescript-eslint/types/dist/lib.js"(exports2) {
    "use strict";
    init_cjs_shims();
    Object.defineProperty(exports2, "__esModule", { value: true });
  }
});

// node_modules/.pnpm/@typescript-eslint+types@7.10.0/node_modules/@typescript-eslint/types/dist/parser-options.js
var require_parser_options = __commonJS({
  "node_modules/.pnpm/@typescript-eslint+types@7.10.0/node_modules/@typescript-eslint/types/dist/parser-options.js"(exports2) {
    "use strict";
    init_cjs_shims();
    Object.defineProperty(exports2, "__esModule", { value: true });
  }
});

// node_modules/.pnpm/@typescript-eslint+types@7.10.0/node_modules/@typescript-eslint/types/dist/ts-estree.js
var require_ts_estree = __commonJS({
  "node_modules/.pnpm/@typescript-eslint+types@7.10.0/node_modules/@typescript-eslint/types/dist/ts-estree.js"(exports2) {
    "use strict";
    init_cjs_shims();
    var __createBinding = exports2 && exports2.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __setModuleDefault = exports2 && exports2.__setModuleDefault || (Object.create ? function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    } : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports2 && exports2.__importStar || function(mod) {
      if (mod && mod.__esModule)
        return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod)
          if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
            __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.TSESTree = void 0;
    exports2.TSESTree = __importStar(require_ast_spec());
  }
});

// node_modules/.pnpm/@typescript-eslint+types@7.10.0/node_modules/@typescript-eslint/types/dist/index.js
var require_dist = __commonJS({
  "node_modules/.pnpm/@typescript-eslint+types@7.10.0/node_modules/@typescript-eslint/types/dist/index.js"(exports2) {
    "use strict";
    init_cjs_shims();
    var __createBinding = exports2 && exports2.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __exportStar = exports2 && exports2.__exportStar || function(m, exports3) {
      for (var p in m)
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports3, p))
          __createBinding(exports3, m, p);
    };
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.AST_TOKEN_TYPES = exports2.AST_NODE_TYPES = void 0;
    var ast_spec_1 = require_ast_spec();
    Object.defineProperty(exports2, "AST_NODE_TYPES", { enumerable: true, get: function() {
      return ast_spec_1.AST_NODE_TYPES;
    } });
    Object.defineProperty(exports2, "AST_TOKEN_TYPES", { enumerable: true, get: function() {
      return ast_spec_1.AST_TOKEN_TYPES;
    } });
    __exportStar(require_lib2(), exports2);
    __exportStar(require_parser_options(), exports2);
    __exportStar(require_ts_estree(), exports2);
  }
});

// node_modules/.pnpm/@typescript-eslint+utils@7.10.0_eslint@8.57.0_typescript@5.4.5/node_modules/@typescript-eslint/utils/dist/ts-estree.js
var require_ts_estree2 = __commonJS({
  "node_modules/.pnpm/@typescript-eslint+utils@7.10.0_eslint@8.57.0_typescript@5.4.5/node_modules/@typescript-eslint/utils/dist/ts-estree.js"(exports2) {
    "use strict";
    init_cjs_shims();
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.TSESTree = exports2.AST_TOKEN_TYPES = exports2.AST_NODE_TYPES = void 0;
    var types_1 = require_dist();
    Object.defineProperty(exports2, "AST_NODE_TYPES", { enumerable: true, get: function() {
      return types_1.AST_NODE_TYPES;
    } });
    Object.defineProperty(exports2, "AST_TOKEN_TYPES", { enumerable: true, get: function() {
      return types_1.AST_TOKEN_TYPES;
    } });
    Object.defineProperty(exports2, "TSESTree", { enumerable: true, get: function() {
      return types_1.TSESTree;
    } });
  }
});

// node_modules/.pnpm/@typescript-eslint+utils@7.10.0_eslint@8.57.0_typescript@5.4.5/node_modules/@typescript-eslint/utils/dist/ast-utils/predicates.js
var require_predicates2 = __commonJS({
  "node_modules/.pnpm/@typescript-eslint+utils@7.10.0_eslint@8.57.0_typescript@5.4.5/node_modules/@typescript-eslint/utils/dist/ast-utils/predicates.js"(exports2) {
    "use strict";
    init_cjs_shims();
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.isVariableDeclarator = exports2.isTypeKeyword = exports2.isTypeAssertion = exports2.isTSFunctionType = exports2.isTSConstructorType = exports2.isSetter = exports2.isOptionalCallExpression = exports2.isOptionalChainPunctuator = exports2.isNotOptionalChainPunctuator = exports2.isNotNonNullAssertionPunctuator = exports2.isNonNullAssertionPunctuator = exports2.isLogicalOrOperator = exports2.isLoop = exports2.isImportKeyword = exports2.isIdentifier = exports2.isFunctionType = exports2.isFunctionOrFunctionType = exports2.isFunction = exports2.isClassOrTypeElement = exports2.isConstructor = exports2.isAwaitKeyword = exports2.isAwaitExpression = void 0;
    var ts_estree_1 = require_ts_estree2();
    var helpers_1 = require_helpers();
    var isOptionalChainPunctuator = (0, helpers_1.isTokenOfTypeWithConditions)(ts_estree_1.AST_TOKEN_TYPES.Punctuator, { value: "?." });
    exports2.isOptionalChainPunctuator = isOptionalChainPunctuator;
    var isNotOptionalChainPunctuator = (0, helpers_1.isNotTokenOfTypeWithConditions)(ts_estree_1.AST_TOKEN_TYPES.Punctuator, { value: "?." });
    exports2.isNotOptionalChainPunctuator = isNotOptionalChainPunctuator;
    var isNonNullAssertionPunctuator = (0, helpers_1.isTokenOfTypeWithConditions)(ts_estree_1.AST_TOKEN_TYPES.Punctuator, { value: "!" });
    exports2.isNonNullAssertionPunctuator = isNonNullAssertionPunctuator;
    var isNotNonNullAssertionPunctuator = (0, helpers_1.isNotTokenOfTypeWithConditions)(ts_estree_1.AST_TOKEN_TYPES.Punctuator, { value: "!" });
    exports2.isNotNonNullAssertionPunctuator = isNotNonNullAssertionPunctuator;
    var isOptionalCallExpression = (0, helpers_1.isNodeOfTypeWithConditions)(
      ts_estree_1.AST_NODE_TYPES.CallExpression,
      // this flag means the call expression itself is option
      // i.e. it is foo.bar?.() and not foo?.bar()
      { optional: true }
    );
    exports2.isOptionalCallExpression = isOptionalCallExpression;
    var isLogicalOrOperator = (0, helpers_1.isNodeOfTypeWithConditions)(ts_estree_1.AST_NODE_TYPES.LogicalExpression, { operator: "||" });
    exports2.isLogicalOrOperator = isLogicalOrOperator;
    var isTypeAssertion = (0, helpers_1.isNodeOfTypes)([
      ts_estree_1.AST_NODE_TYPES.TSAsExpression,
      ts_estree_1.AST_NODE_TYPES.TSTypeAssertion
    ]);
    exports2.isTypeAssertion = isTypeAssertion;
    var isVariableDeclarator = (0, helpers_1.isNodeOfType)(ts_estree_1.AST_NODE_TYPES.VariableDeclarator);
    exports2.isVariableDeclarator = isVariableDeclarator;
    var functionTypes = [
      ts_estree_1.AST_NODE_TYPES.ArrowFunctionExpression,
      ts_estree_1.AST_NODE_TYPES.FunctionDeclaration,
      ts_estree_1.AST_NODE_TYPES.FunctionExpression
    ];
    var isFunction = (0, helpers_1.isNodeOfTypes)(functionTypes);
    exports2.isFunction = isFunction;
    var functionTypeTypes = [
      ts_estree_1.AST_NODE_TYPES.TSCallSignatureDeclaration,
      ts_estree_1.AST_NODE_TYPES.TSConstructorType,
      ts_estree_1.AST_NODE_TYPES.TSConstructSignatureDeclaration,
      ts_estree_1.AST_NODE_TYPES.TSEmptyBodyFunctionExpression,
      ts_estree_1.AST_NODE_TYPES.TSFunctionType,
      ts_estree_1.AST_NODE_TYPES.TSMethodSignature
    ];
    var isFunctionType = (0, helpers_1.isNodeOfTypes)(functionTypeTypes);
    exports2.isFunctionType = isFunctionType;
    var isFunctionOrFunctionType = (0, helpers_1.isNodeOfTypes)([
      ...functionTypes,
      ...functionTypeTypes
    ]);
    exports2.isFunctionOrFunctionType = isFunctionOrFunctionType;
    var isTSFunctionType = (0, helpers_1.isNodeOfType)(ts_estree_1.AST_NODE_TYPES.TSFunctionType);
    exports2.isTSFunctionType = isTSFunctionType;
    var isTSConstructorType = (0, helpers_1.isNodeOfType)(ts_estree_1.AST_NODE_TYPES.TSConstructorType);
    exports2.isTSConstructorType = isTSConstructorType;
    var isClassOrTypeElement = (0, helpers_1.isNodeOfTypes)([
      // ClassElement
      ts_estree_1.AST_NODE_TYPES.PropertyDefinition,
      ts_estree_1.AST_NODE_TYPES.FunctionExpression,
      ts_estree_1.AST_NODE_TYPES.MethodDefinition,
      ts_estree_1.AST_NODE_TYPES.TSAbstractPropertyDefinition,
      ts_estree_1.AST_NODE_TYPES.TSAbstractMethodDefinition,
      ts_estree_1.AST_NODE_TYPES.TSEmptyBodyFunctionExpression,
      ts_estree_1.AST_NODE_TYPES.TSIndexSignature,
      // TypeElement
      ts_estree_1.AST_NODE_TYPES.TSCallSignatureDeclaration,
      ts_estree_1.AST_NODE_TYPES.TSConstructSignatureDeclaration,
      // AST_NODE_TYPES.TSIndexSignature,
      ts_estree_1.AST_NODE_TYPES.TSMethodSignature,
      ts_estree_1.AST_NODE_TYPES.TSPropertySignature
    ]);
    exports2.isClassOrTypeElement = isClassOrTypeElement;
    var isConstructor = (0, helpers_1.isNodeOfTypeWithConditions)(ts_estree_1.AST_NODE_TYPES.MethodDefinition, { kind: "constructor" });
    exports2.isConstructor = isConstructor;
    function isSetter(node2) {
      return !!node2 && (node2.type === ts_estree_1.AST_NODE_TYPES.MethodDefinition || node2.type === ts_estree_1.AST_NODE_TYPES.Property) && node2.kind === "set";
    }
    exports2.isSetter = isSetter;
    var isIdentifier = (0, helpers_1.isNodeOfType)(ts_estree_1.AST_NODE_TYPES.Identifier);
    exports2.isIdentifier = isIdentifier;
    var isAwaitExpression = (0, helpers_1.isNodeOfType)(ts_estree_1.AST_NODE_TYPES.AwaitExpression);
    exports2.isAwaitExpression = isAwaitExpression;
    var isAwaitKeyword = (0, helpers_1.isTokenOfTypeWithConditions)(ts_estree_1.AST_TOKEN_TYPES.Identifier, {
      value: "await"
    });
    exports2.isAwaitKeyword = isAwaitKeyword;
    var isTypeKeyword = (0, helpers_1.isTokenOfTypeWithConditions)(ts_estree_1.AST_TOKEN_TYPES.Identifier, {
      value: "type"
    });
    exports2.isTypeKeyword = isTypeKeyword;
    var isImportKeyword = (0, helpers_1.isTokenOfTypeWithConditions)(ts_estree_1.AST_TOKEN_TYPES.Keyword, {
      value: "import"
    });
    exports2.isImportKeyword = isImportKeyword;
    var isLoop = (0, helpers_1.isNodeOfTypes)([
      ts_estree_1.AST_NODE_TYPES.DoWhileStatement,
      ts_estree_1.AST_NODE_TYPES.ForStatement,
      ts_estree_1.AST_NODE_TYPES.ForInStatement,
      ts_estree_1.AST_NODE_TYPES.ForOfStatement,
      ts_estree_1.AST_NODE_TYPES.WhileStatement
    ]);
    exports2.isLoop = isLoop;
  }
});

// node_modules/.pnpm/@typescript-eslint+utils@7.10.0_eslint@8.57.0_typescript@5.4.5/node_modules/@typescript-eslint/utils/dist/ast-utils/index.js
var require_ast_utils = __commonJS({
  "node_modules/.pnpm/@typescript-eslint+utils@7.10.0_eslint@8.57.0_typescript@5.4.5/node_modules/@typescript-eslint/utils/dist/ast-utils/index.js"(exports2) {
    "use strict";
    init_cjs_shims();
    var __createBinding = exports2 && exports2.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __exportStar = exports2 && exports2.__exportStar || function(m, exports3) {
      for (var p in m)
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports3, p))
          __createBinding(exports3, m, p);
    };
    Object.defineProperty(exports2, "__esModule", { value: true });
    __exportStar(require_eslint_utils2(), exports2);
    __exportStar(require_helpers(), exports2);
    __exportStar(require_misc(), exports2);
    __exportStar(require_predicates2(), exports2);
  }
});

// node_modules/.pnpm/@typescript-eslint+utils@7.10.0_eslint@8.57.0_typescript@5.4.5/node_modules/@typescript-eslint/utils/dist/eslint-utils/deepMerge.js
var require_deepMerge = __commonJS({
  "node_modules/.pnpm/@typescript-eslint+utils@7.10.0_eslint@8.57.0_typescript@5.4.5/node_modules/@typescript-eslint/utils/dist/eslint-utils/deepMerge.js"(exports2) {
    "use strict";
    init_cjs_shims();
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.isObjectNotArray = exports2.deepMerge = void 0;
    function isObjectNotArray(obj) {
      return typeof obj === "object" && obj != null && !Array.isArray(obj);
    }
    exports2.isObjectNotArray = isObjectNotArray;
    function deepMerge(first = {}, second = {}) {
      const keys = new Set(Object.keys(first).concat(Object.keys(second)));
      return Array.from(keys).reduce((acc, key) => {
        const firstHasKey = key in first;
        const secondHasKey = key in second;
        const firstValue = first[key];
        const secondValue = second[key];
        if (firstHasKey && secondHasKey) {
          if (isObjectNotArray(firstValue) && isObjectNotArray(secondValue)) {
            acc[key] = deepMerge(firstValue, secondValue);
          } else {
            acc[key] = secondValue;
          }
        } else if (firstHasKey) {
          acc[key] = firstValue;
        } else {
          acc[key] = secondValue;
        }
        return acc;
      }, {});
    }
    exports2.deepMerge = deepMerge;
  }
});

// node_modules/.pnpm/@typescript-eslint+utils@7.10.0_eslint@8.57.0_typescript@5.4.5/node_modules/@typescript-eslint/utils/dist/eslint-utils/applyDefault.js
var require_applyDefault = __commonJS({
  "node_modules/.pnpm/@typescript-eslint+utils@7.10.0_eslint@8.57.0_typescript@5.4.5/node_modules/@typescript-eslint/utils/dist/eslint-utils/applyDefault.js"(exports2) {
    "use strict";
    init_cjs_shims();
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.applyDefault = void 0;
    var deepMerge_1 = require_deepMerge();
    function applyDefault(defaultOptions, userOptions) {
      const options = JSON.parse(JSON.stringify(defaultOptions));
      if (userOptions == null) {
        return options;
      }
      options.forEach((opt, i) => {
        if (userOptions[i] !== void 0) {
          const userOpt = userOptions[i];
          if ((0, deepMerge_1.isObjectNotArray)(userOpt) && (0, deepMerge_1.isObjectNotArray)(opt)) {
            options[i] = (0, deepMerge_1.deepMerge)(opt, userOpt);
          } else {
            options[i] = userOpt;
          }
        }
      });
      return options;
    }
    exports2.applyDefault = applyDefault;
  }
});

// node_modules/.pnpm/@typescript-eslint+utils@7.10.0_eslint@8.57.0_typescript@5.4.5/node_modules/@typescript-eslint/utils/dist/eslint-utils/context.js
var require_context = __commonJS({
  "node_modules/.pnpm/@typescript-eslint+utils@7.10.0_eslint@8.57.0_typescript@5.4.5/node_modules/@typescript-eslint/utils/dist/eslint-utils/context.js"(exports2) {
    "use strict";
    init_cjs_shims();
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.getSourceCode = exports2.getScope = exports2.getFilename = exports2.getDeclaredVariables = exports2.getCwd = exports2.getAncestors = void 0;
    function getAncestors(context) {
      return context.getAncestors();
    }
    exports2.getAncestors = getAncestors;
    function getCwd(context) {
      return context.getCwd();
    }
    exports2.getCwd = getCwd;
    function getDeclaredVariables(context, node2) {
      return context.sourceCode.getDeclaredVariables(node2);
    }
    exports2.getDeclaredVariables = getDeclaredVariables;
    function getFilename(context) {
      return context.filename;
    }
    exports2.getFilename = getFilename;
    function getScope(context) {
      return context.getScope();
    }
    exports2.getScope = getScope;
    function getSourceCode(context) {
      return context.sourceCode;
    }
    exports2.getSourceCode = getSourceCode;
  }
});

// node_modules/.pnpm/@typescript-eslint+utils@7.10.0_eslint@8.57.0_typescript@5.4.5/node_modules/@typescript-eslint/utils/dist/eslint-utils/parserPathSeemsToBeTSESLint.js
var require_parserPathSeemsToBeTSESLint = __commonJS({
  "node_modules/.pnpm/@typescript-eslint+utils@7.10.0_eslint@8.57.0_typescript@5.4.5/node_modules/@typescript-eslint/utils/dist/eslint-utils/parserPathSeemsToBeTSESLint.js"(exports2) {
    "use strict";
    init_cjs_shims();
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.parserPathSeemsToBeTSESLint = void 0;
    function parserPathSeemsToBeTSESLint(parserPath) {
      return /(?:typescript-eslint|\.\.)[\w/\\]*parser/.test(parserPath);
    }
    exports2.parserPathSeemsToBeTSESLint = parserPathSeemsToBeTSESLint;
  }
});

// node_modules/.pnpm/@typescript-eslint+utils@7.10.0_eslint@8.57.0_typescript@5.4.5/node_modules/@typescript-eslint/utils/dist/eslint-utils/getParserServices.js
var require_getParserServices = __commonJS({
  "node_modules/.pnpm/@typescript-eslint+utils@7.10.0_eslint@8.57.0_typescript@5.4.5/node_modules/@typescript-eslint/utils/dist/eslint-utils/getParserServices.js"(exports2) {
    "use strict";
    init_cjs_shims();
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.getParserServices = void 0;
    var parserPathSeemsToBeTSESLint_1 = require_parserPathSeemsToBeTSESLint();
    var ERROR_MESSAGE_REQUIRES_PARSER_SERVICES = 'You have used a rule which requires parserServices to be generated. You must therefore provide a value for the "parserOptions.project" property for @typescript-eslint/parser.';
    var ERROR_MESSAGE_UNKNOWN_PARSER = 'Note: detected a parser other than @typescript-eslint/parser. Make sure the parser is configured to forward "parserOptions.project" to @typescript-eslint/parser.';
    function getParserServices(context, allowWithoutFullTypeInformation = false) {
      if (context.sourceCode.parserServices?.esTreeNodeToTSNodeMap == null || context.sourceCode.parserServices.tsNodeToESTreeNodeMap == null) {
        throwError(context.parserPath);
      }
      if (context.sourceCode.parserServices.program == null && !allowWithoutFullTypeInformation) {
        throwError(context.parserPath);
      }
      return context.sourceCode.parserServices;
    }
    exports2.getParserServices = getParserServices;
    function throwError(parserPath) {
      const messages = [
        ERROR_MESSAGE_REQUIRES_PARSER_SERVICES,
        `Parser: ${parserPath}`
      ];
      if (!(0, parserPathSeemsToBeTSESLint_1.parserPathSeemsToBeTSESLint)(parserPath)) {
        messages.push(ERROR_MESSAGE_UNKNOWN_PARSER);
      }
      throw new Error(messages.join("\n"));
    }
  }
});

// node_modules/.pnpm/@typescript-eslint+utils@7.10.0_eslint@8.57.0_typescript@5.4.5/node_modules/@typescript-eslint/utils/dist/eslint-utils/InferTypesFromRule.js
var require_InferTypesFromRule = __commonJS({
  "node_modules/.pnpm/@typescript-eslint+utils@7.10.0_eslint@8.57.0_typescript@5.4.5/node_modules/@typescript-eslint/utils/dist/eslint-utils/InferTypesFromRule.js"(exports2) {
    "use strict";
    init_cjs_shims();
    Object.defineProperty(exports2, "__esModule", { value: true });
  }
});

// node_modules/.pnpm/@typescript-eslint+utils@7.10.0_eslint@8.57.0_typescript@5.4.5/node_modules/@typescript-eslint/utils/dist/eslint-utils/RuleCreator.js
var require_RuleCreator = __commonJS({
  "node_modules/.pnpm/@typescript-eslint+utils@7.10.0_eslint@8.57.0_typescript@5.4.5/node_modules/@typescript-eslint/utils/dist/eslint-utils/RuleCreator.js"(exports2) {
    "use strict";
    init_cjs_shims();
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.RuleCreator = void 0;
    var applyDefault_1 = require_applyDefault();
    function RuleCreator(urlCreator) {
      return function createNamedRule({ name, meta, ...rule }) {
        return createRule2({
          meta: {
            ...meta,
            docs: {
              ...meta.docs,
              url: urlCreator(name)
            }
          },
          ...rule
        });
      };
    }
    exports2.RuleCreator = RuleCreator;
    function createRule2({ create, defaultOptions, meta }) {
      return {
        create(context) {
          const optionsWithDefault = (0, applyDefault_1.applyDefault)(defaultOptions, context.options);
          return create(context, optionsWithDefault);
        },
        defaultOptions,
        meta
      };
    }
    RuleCreator.withoutDocs = createRule2;
  }
});

// node_modules/.pnpm/@typescript-eslint+utils@7.10.0_eslint@8.57.0_typescript@5.4.5/node_modules/@typescript-eslint/utils/dist/eslint-utils/nullThrows.js
var require_nullThrows = __commonJS({
  "node_modules/.pnpm/@typescript-eslint+utils@7.10.0_eslint@8.57.0_typescript@5.4.5/node_modules/@typescript-eslint/utils/dist/eslint-utils/nullThrows.js"(exports2) {
    "use strict";
    init_cjs_shims();
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.NullThrowsReasons = exports2.nullThrows = void 0;
    var NullThrowsReasons = {
      MissingParent: "Expected node to have a parent.",
      MissingToken: (token, thing) => `Expected to find a ${token} for the ${thing}.`
    };
    exports2.NullThrowsReasons = NullThrowsReasons;
    function nullThrows(value, message) {
      if (value == null) {
        throw new Error(`Non-null Assertion Failed: ${message}`);
      }
      return value;
    }
    exports2.nullThrows = nullThrows;
  }
});

// node_modules/.pnpm/@typescript-eslint+utils@7.10.0_eslint@8.57.0_typescript@5.4.5/node_modules/@typescript-eslint/utils/dist/eslint-utils/index.js
var require_eslint_utils3 = __commonJS({
  "node_modules/.pnpm/@typescript-eslint+utils@7.10.0_eslint@8.57.0_typescript@5.4.5/node_modules/@typescript-eslint/utils/dist/eslint-utils/index.js"(exports2) {
    "use strict";
    init_cjs_shims();
    var __createBinding = exports2 && exports2.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __exportStar = exports2 && exports2.__exportStar || function(m, exports3) {
      for (var p in m)
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports3, p))
          __createBinding(exports3, m, p);
    };
    Object.defineProperty(exports2, "__esModule", { value: true });
    __exportStar(require_applyDefault(), exports2);
    __exportStar(require_context(), exports2);
    __exportStar(require_getParserServices(), exports2);
    __exportStar(require_InferTypesFromRule(), exports2);
    __exportStar(require_RuleCreator(), exports2);
    __exportStar(require_deepMerge(), exports2);
    __exportStar(require_nullThrows(), exports2);
  }
});

// node_modules/.pnpm/@typescript-eslint+utils@7.10.0_eslint@8.57.0_typescript@5.4.5/node_modules/@typescript-eslint/utils/dist/json-schema.js
var require_json_schema = __commonJS({
  "node_modules/.pnpm/@typescript-eslint+utils@7.10.0_eslint@8.57.0_typescript@5.4.5/node_modules/@typescript-eslint/utils/dist/json-schema.js"(exports2) {
    "use strict";
    init_cjs_shims();
    Object.defineProperty(exports2, "__esModule", { value: true });
  }
});

// node_modules/.pnpm/@typescript-eslint+utils@7.10.0_eslint@8.57.0_typescript@5.4.5/node_modules/@typescript-eslint/utils/dist/ts-eslint/AST.js
var require_AST = __commonJS({
  "node_modules/.pnpm/@typescript-eslint+utils@7.10.0_eslint@8.57.0_typescript@5.4.5/node_modules/@typescript-eslint/utils/dist/ts-eslint/AST.js"(exports2) {
    "use strict";
    init_cjs_shims();
    Object.defineProperty(exports2, "__esModule", { value: true });
  }
});

// node_modules/.pnpm/@typescript-eslint+utils@7.10.0_eslint@8.57.0_typescript@5.4.5/node_modules/@typescript-eslint/utils/dist/ts-eslint/Config.js
var require_Config = __commonJS({
  "node_modules/.pnpm/@typescript-eslint+utils@7.10.0_eslint@8.57.0_typescript@5.4.5/node_modules/@typescript-eslint/utils/dist/ts-eslint/Config.js"(exports2) {
    "use strict";
    init_cjs_shims();
    Object.defineProperty(exports2, "__esModule", { value: true });
  }
});

// node_modules/.pnpm/@typescript-eslint+utils@7.10.0_eslint@8.57.0_typescript@5.4.5/node_modules/@typescript-eslint/utils/dist/ts-eslint/eslint/LegacyESLint.js
var require_LegacyESLint = __commonJS({
  "node_modules/.pnpm/@typescript-eslint+utils@7.10.0_eslint@8.57.0_typescript@5.4.5/node_modules/@typescript-eslint/utils/dist/ts-eslint/eslint/LegacyESLint.js"(exports2) {
    "use strict";
    init_cjs_shims();
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.LegacyESLint = void 0;
    var use_at_your_own_risk_1 = require("eslint/use-at-your-own-risk");
    var LegacyESLint = class extends use_at_your_own_risk_1.LegacyESLint {
    };
    exports2.LegacyESLint = LegacyESLint;
  }
});

// node_modules/.pnpm/@typescript-eslint+utils@7.10.0_eslint@8.57.0_typescript@5.4.5/node_modules/@typescript-eslint/utils/dist/ts-eslint/eslint/FlatESLint.js
var require_FlatESLint = __commonJS({
  "node_modules/.pnpm/@typescript-eslint+utils@7.10.0_eslint@8.57.0_typescript@5.4.5/node_modules/@typescript-eslint/utils/dist/ts-eslint/eslint/FlatESLint.js"(exports2) {
    "use strict";
    init_cjs_shims();
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.FlatESLint = void 0;
    var use_at_your_own_risk_1 = require("eslint/use-at-your-own-risk");
    var FlatESLint = class extends use_at_your_own_risk_1.FlatESLint {
    };
    exports2.FlatESLint = FlatESLint;
  }
});

// node_modules/.pnpm/@typescript-eslint+utils@7.10.0_eslint@8.57.0_typescript@5.4.5/node_modules/@typescript-eslint/utils/dist/ts-eslint/ESLint.js
var require_ESLint = __commonJS({
  "node_modules/.pnpm/@typescript-eslint+utils@7.10.0_eslint@8.57.0_typescript@5.4.5/node_modules/@typescript-eslint/utils/dist/ts-eslint/ESLint.js"(exports2) {
    "use strict";
    init_cjs_shims();
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.LegacyESLint = exports2.FlatESLint = exports2.ESLint = void 0;
    var LegacyESLint_1 = require_LegacyESLint();
    Object.defineProperty(exports2, "ESLint", { enumerable: true, get: function() {
      return LegacyESLint_1.LegacyESLint;
    } });
    var FlatESLint_1 = require_FlatESLint();
    Object.defineProperty(exports2, "FlatESLint", { enumerable: true, get: function() {
      return FlatESLint_1.FlatESLint;
    } });
    var LegacyESLint_2 = require_LegacyESLint();
    Object.defineProperty(exports2, "LegacyESLint", { enumerable: true, get: function() {
      return LegacyESLint_2.LegacyESLint;
    } });
  }
});

// node_modules/.pnpm/@typescript-eslint+utils@7.10.0_eslint@8.57.0_typescript@5.4.5/node_modules/@typescript-eslint/utils/dist/ts-eslint/Linter.js
var require_Linter = __commonJS({
  "node_modules/.pnpm/@typescript-eslint+utils@7.10.0_eslint@8.57.0_typescript@5.4.5/node_modules/@typescript-eslint/utils/dist/ts-eslint/Linter.js"(exports2) {
    "use strict";
    init_cjs_shims();
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.Linter = void 0;
    var eslint_1 = require("eslint");
    var Linter = class extends eslint_1.Linter {
    };
    exports2.Linter = Linter;
  }
});

// node_modules/.pnpm/@typescript-eslint+utils@7.10.0_eslint@8.57.0_typescript@5.4.5/node_modules/@typescript-eslint/utils/dist/ts-eslint/Parser.js
var require_Parser = __commonJS({
  "node_modules/.pnpm/@typescript-eslint+utils@7.10.0_eslint@8.57.0_typescript@5.4.5/node_modules/@typescript-eslint/utils/dist/ts-eslint/Parser.js"(exports2) {
    "use strict";
    init_cjs_shims();
    Object.defineProperty(exports2, "__esModule", { value: true });
  }
});

// node_modules/.pnpm/@typescript-eslint+utils@7.10.0_eslint@8.57.0_typescript@5.4.5/node_modules/@typescript-eslint/utils/dist/ts-eslint/ParserOptions.js
var require_ParserOptions = __commonJS({
  "node_modules/.pnpm/@typescript-eslint+utils@7.10.0_eslint@8.57.0_typescript@5.4.5/node_modules/@typescript-eslint/utils/dist/ts-eslint/ParserOptions.js"(exports2) {
    "use strict";
    init_cjs_shims();
    Object.defineProperty(exports2, "__esModule", { value: true });
  }
});

// node_modules/.pnpm/@typescript-eslint+utils@7.10.0_eslint@8.57.0_typescript@5.4.5/node_modules/@typescript-eslint/utils/dist/ts-eslint/Processor.js
var require_Processor = __commonJS({
  "node_modules/.pnpm/@typescript-eslint+utils@7.10.0_eslint@8.57.0_typescript@5.4.5/node_modules/@typescript-eslint/utils/dist/ts-eslint/Processor.js"(exports2) {
    "use strict";
    init_cjs_shims();
    Object.defineProperty(exports2, "__esModule", { value: true });
  }
});

// node_modules/.pnpm/@typescript-eslint+utils@7.10.0_eslint@8.57.0_typescript@5.4.5/node_modules/@typescript-eslint/utils/dist/ts-eslint/Rule.js
var require_Rule = __commonJS({
  "node_modules/.pnpm/@typescript-eslint+utils@7.10.0_eslint@8.57.0_typescript@5.4.5/node_modules/@typescript-eslint/utils/dist/ts-eslint/Rule.js"(exports2) {
    "use strict";
    init_cjs_shims();
    Object.defineProperty(exports2, "__esModule", { value: true });
  }
});

// node_modules/.pnpm/@typescript-eslint+utils@7.10.0_eslint@8.57.0_typescript@5.4.5/node_modules/@typescript-eslint/utils/dist/ts-eslint/RuleTester.js
var require_RuleTester = __commonJS({
  "node_modules/.pnpm/@typescript-eslint+utils@7.10.0_eslint@8.57.0_typescript@5.4.5/node_modules/@typescript-eslint/utils/dist/ts-eslint/RuleTester.js"(exports2) {
    "use strict";
    init_cjs_shims();
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.RuleTester = void 0;
    var eslint_1 = require("eslint");
    var RuleTester = class extends eslint_1.RuleTester {
    };
    exports2.RuleTester = RuleTester;
  }
});

// node_modules/.pnpm/@typescript-eslint+visitor-keys@7.10.0/node_modules/@typescript-eslint/visitor-keys/dist/get-keys.js
var require_get_keys = __commonJS({
  "node_modules/.pnpm/@typescript-eslint+visitor-keys@7.10.0/node_modules/@typescript-eslint/visitor-keys/dist/get-keys.js"(exports2) {
    "use strict";
    init_cjs_shims();
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.getKeys = void 0;
    var eslint_visitor_keys_1 = require_eslint_visitor_keys();
    var getKeys = eslint_visitor_keys_1.getKeys;
    exports2.getKeys = getKeys;
  }
});

// node_modules/.pnpm/@typescript-eslint+visitor-keys@7.10.0/node_modules/@typescript-eslint/visitor-keys/dist/visitor-keys.js
var require_visitor_keys = __commonJS({
  "node_modules/.pnpm/@typescript-eslint+visitor-keys@7.10.0/node_modules/@typescript-eslint/visitor-keys/dist/visitor-keys.js"(exports2) {
    "use strict";
    init_cjs_shims();
    var __createBinding = exports2 && exports2.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __setModuleDefault = exports2 && exports2.__setModuleDefault || (Object.create ? function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    } : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports2 && exports2.__importStar || function(mod) {
      if (mod && mod.__esModule)
        return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod)
          if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
            __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.visitorKeys = void 0;
    var eslintVisitorKeys = __importStar(require_eslint_visitor_keys());
    var SharedVisitorKeys = (() => {
      const FunctionType = ["typeParameters", "params", "returnType"];
      const AnonymousFunction = [...FunctionType, "body"];
      const AbstractPropertyDefinition = [
        "decorators",
        "key",
        "typeAnnotation"
      ];
      return {
        AnonymousFunction,
        Function: ["id", ...AnonymousFunction],
        FunctionType,
        ClassDeclaration: [
          "decorators",
          "id",
          "typeParameters",
          "superClass",
          "superTypeArguments",
          "implements",
          "body"
        ],
        AbstractPropertyDefinition: ["decorators", "key", "typeAnnotation"],
        PropertyDefinition: [...AbstractPropertyDefinition, "value"],
        TypeAssertion: ["expression", "typeAnnotation"]
      };
    })();
    var additionalKeys = {
      AccessorProperty: SharedVisitorKeys.PropertyDefinition,
      ArrayPattern: ["decorators", "elements", "typeAnnotation"],
      ArrowFunctionExpression: SharedVisitorKeys.AnonymousFunction,
      AssignmentPattern: ["decorators", "left", "right", "typeAnnotation"],
      CallExpression: ["callee", "typeArguments", "arguments"],
      ClassDeclaration: SharedVisitorKeys.ClassDeclaration,
      ClassExpression: SharedVisitorKeys.ClassDeclaration,
      Decorator: ["expression"],
      ExportAllDeclaration: ["exported", "source", "assertions"],
      ExportNamedDeclaration: ["declaration", "specifiers", "source", "assertions"],
      FunctionDeclaration: SharedVisitorKeys.Function,
      FunctionExpression: SharedVisitorKeys.Function,
      Identifier: ["decorators", "typeAnnotation"],
      ImportAttribute: ["key", "value"],
      ImportDeclaration: ["specifiers", "source", "assertions"],
      ImportExpression: ["source", "attributes"],
      JSXClosingFragment: [],
      JSXOpeningElement: ["name", "typeArguments", "attributes"],
      JSXOpeningFragment: [],
      JSXSpreadChild: ["expression"],
      MethodDefinition: ["decorators", "key", "value"],
      NewExpression: ["callee", "typeArguments", "arguments"],
      ObjectPattern: ["decorators", "properties", "typeAnnotation"],
      PropertyDefinition: SharedVisitorKeys.PropertyDefinition,
      RestElement: ["decorators", "argument", "typeAnnotation"],
      StaticBlock: ["body"],
      TaggedTemplateExpression: ["tag", "typeArguments", "quasi"],
      TSAbstractAccessorProperty: SharedVisitorKeys.AbstractPropertyDefinition,
      TSAbstractKeyword: [],
      TSAbstractMethodDefinition: ["key", "value"],
      TSAbstractPropertyDefinition: SharedVisitorKeys.AbstractPropertyDefinition,
      TSAnyKeyword: [],
      TSArrayType: ["elementType"],
      TSAsExpression: SharedVisitorKeys.TypeAssertion,
      TSAsyncKeyword: [],
      TSBigIntKeyword: [],
      TSBooleanKeyword: [],
      TSCallSignatureDeclaration: SharedVisitorKeys.FunctionType,
      TSClassImplements: ["expression", "typeArguments"],
      TSConditionalType: ["checkType", "extendsType", "trueType", "falseType"],
      TSConstructorType: SharedVisitorKeys.FunctionType,
      TSConstructSignatureDeclaration: SharedVisitorKeys.FunctionType,
      TSDeclareFunction: SharedVisitorKeys.Function,
      TSDeclareKeyword: [],
      TSEmptyBodyFunctionExpression: ["id", ...SharedVisitorKeys.FunctionType],
      TSEnumDeclaration: ["id", "members"],
      TSEnumMember: ["id", "initializer"],
      TSExportAssignment: ["expression"],
      TSExportKeyword: [],
      TSExternalModuleReference: ["expression"],
      TSFunctionType: SharedVisitorKeys.FunctionType,
      TSImportEqualsDeclaration: ["id", "moduleReference"],
      TSImportType: ["argument", "qualifier", "typeArguments"],
      TSIndexedAccessType: ["indexType", "objectType"],
      TSIndexSignature: ["parameters", "typeAnnotation"],
      TSInferType: ["typeParameter"],
      TSInstantiationExpression: ["expression", "typeArguments"],
      TSInterfaceBody: ["body"],
      TSInterfaceDeclaration: ["id", "typeParameters", "extends", "body"],
      TSInterfaceHeritage: ["expression", "typeArguments"],
      TSIntersectionType: ["types"],
      TSIntrinsicKeyword: [],
      TSLiteralType: ["literal"],
      TSMappedType: ["nameType", "typeParameter", "typeAnnotation"],
      TSMethodSignature: ["typeParameters", "key", "params", "returnType"],
      TSModuleBlock: ["body"],
      TSModuleDeclaration: ["id", "body"],
      TSNamedTupleMember: ["label", "elementType"],
      TSNamespaceExportDeclaration: ["id"],
      TSNeverKeyword: [],
      TSNonNullExpression: ["expression"],
      TSNullKeyword: [],
      TSNumberKeyword: [],
      TSObjectKeyword: [],
      TSOptionalType: ["typeAnnotation"],
      TSParameterProperty: ["decorators", "parameter"],
      TSPrivateKeyword: [],
      TSPropertySignature: ["typeAnnotation", "key"],
      TSProtectedKeyword: [],
      TSPublicKeyword: [],
      TSQualifiedName: ["left", "right"],
      TSReadonlyKeyword: [],
      TSRestType: ["typeAnnotation"],
      TSSatisfiesExpression: [
        // this is intentionally different to SharedVisitorKeys.TypeAssertion because
        // the type annotation comes first in the source code
        "typeAnnotation",
        "expression"
      ],
      TSStaticKeyword: [],
      TSStringKeyword: [],
      TSSymbolKeyword: [],
      TSTemplateLiteralType: ["quasis", "types"],
      TSThisType: [],
      TSTupleType: ["elementTypes"],
      TSTypeAliasDeclaration: ["id", "typeParameters", "typeAnnotation"],
      TSTypeAnnotation: ["typeAnnotation"],
      TSTypeAssertion: SharedVisitorKeys.TypeAssertion,
      TSTypeLiteral: ["members"],
      TSTypeOperator: ["typeAnnotation"],
      TSTypeParameter: ["name", "constraint", "default"],
      TSTypeParameterDeclaration: ["params"],
      TSTypeParameterInstantiation: ["params"],
      TSTypePredicate: ["typeAnnotation", "parameterName"],
      TSTypeQuery: ["exprName", "typeArguments"],
      TSTypeReference: ["typeName", "typeArguments"],
      TSUndefinedKeyword: [],
      TSUnionType: ["types"],
      TSUnknownKeyword: [],
      TSVoidKeyword: []
    };
    var visitorKeys = eslintVisitorKeys.unionWith(additionalKeys);
    exports2.visitorKeys = visitorKeys;
  }
});

// node_modules/.pnpm/@typescript-eslint+visitor-keys@7.10.0/node_modules/@typescript-eslint/visitor-keys/dist/index.js
var require_dist2 = __commonJS({
  "node_modules/.pnpm/@typescript-eslint+visitor-keys@7.10.0/node_modules/@typescript-eslint/visitor-keys/dist/index.js"(exports2) {
    "use strict";
    init_cjs_shims();
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.visitorKeys = exports2.getKeys = void 0;
    var get_keys_1 = require_get_keys();
    Object.defineProperty(exports2, "getKeys", { enumerable: true, get: function() {
      return get_keys_1.getKeys;
    } });
    var visitor_keys_1 = require_visitor_keys();
    Object.defineProperty(exports2, "visitorKeys", { enumerable: true, get: function() {
      return visitor_keys_1.visitorKeys;
    } });
  }
});

// node_modules/.pnpm/@typescript-eslint+scope-manager@7.10.0/node_modules/@typescript-eslint/scope-manager/dist/assert.js
var require_assert = __commonJS({
  "node_modules/.pnpm/@typescript-eslint+scope-manager@7.10.0/node_modules/@typescript-eslint/scope-manager/dist/assert.js"(exports2) {
    "use strict";
    init_cjs_shims();
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.assert = void 0;
    function assert(value, message) {
      if (value == null) {
        throw new Error(message);
      }
    }
    exports2.assert = assert;
  }
});

// node_modules/.pnpm/@typescript-eslint+scope-manager@7.10.0/node_modules/@typescript-eslint/scope-manager/dist/ID.js
var require_ID = __commonJS({
  "node_modules/.pnpm/@typescript-eslint+scope-manager@7.10.0/node_modules/@typescript-eslint/scope-manager/dist/ID.js"(exports2) {
    "use strict";
    init_cjs_shims();
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.resetIds = exports2.createIdGenerator = void 0;
    var ID_CACHE = /* @__PURE__ */ new Map();
    var NEXT_KEY = 0;
    function createIdGenerator() {
      const key = NEXT_KEY += 1;
      ID_CACHE.set(key, 0);
      return () => {
        const current = ID_CACHE.get(key) ?? 0;
        const next = current + 1;
        ID_CACHE.set(key, next);
        return next;
      };
    }
    exports2.createIdGenerator = createIdGenerator;
    function resetIds() {
      ID_CACHE.clear();
    }
    exports2.resetIds = resetIds;
  }
});

// node_modules/.pnpm/@typescript-eslint+scope-manager@7.10.0/node_modules/@typescript-eslint/scope-manager/dist/definition/DefinitionBase.js
var require_DefinitionBase = __commonJS({
  "node_modules/.pnpm/@typescript-eslint+scope-manager@7.10.0/node_modules/@typescript-eslint/scope-manager/dist/definition/DefinitionBase.js"(exports2) {
    "use strict";
    init_cjs_shims();
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.DefinitionBase = void 0;
    var ID_1 = require_ID();
    var generator = (0, ID_1.createIdGenerator)();
    var DefinitionBase = class {
      constructor(type, name, node2, parent) {
        this.$id = generator();
        this.type = type;
        this.name = name;
        this.node = node2;
        this.parent = parent;
      }
    };
    exports2.DefinitionBase = DefinitionBase;
  }
});

// node_modules/.pnpm/@typescript-eslint+scope-manager@7.10.0/node_modules/@typescript-eslint/scope-manager/dist/definition/DefinitionType.js
var require_DefinitionType = __commonJS({
  "node_modules/.pnpm/@typescript-eslint+scope-manager@7.10.0/node_modules/@typescript-eslint/scope-manager/dist/definition/DefinitionType.js"(exports2) {
    "use strict";
    init_cjs_shims();
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.DefinitionType = void 0;
    var DefinitionType;
    (function(DefinitionType2) {
      DefinitionType2["CatchClause"] = "CatchClause";
      DefinitionType2["ClassName"] = "ClassName";
      DefinitionType2["FunctionName"] = "FunctionName";
      DefinitionType2["ImplicitGlobalVariable"] = "ImplicitGlobalVariable";
      DefinitionType2["ImportBinding"] = "ImportBinding";
      DefinitionType2["Parameter"] = "Parameter";
      DefinitionType2["TSEnumName"] = "TSEnumName";
      DefinitionType2["TSEnumMember"] = "TSEnumMemberName";
      DefinitionType2["TSModuleName"] = "TSModuleName";
      DefinitionType2["Type"] = "Type";
      DefinitionType2["Variable"] = "Variable";
    })(DefinitionType || (exports2.DefinitionType = DefinitionType = {}));
  }
});

// node_modules/.pnpm/@typescript-eslint+scope-manager@7.10.0/node_modules/@typescript-eslint/scope-manager/dist/definition/CatchClauseDefinition.js
var require_CatchClauseDefinition = __commonJS({
  "node_modules/.pnpm/@typescript-eslint+scope-manager@7.10.0/node_modules/@typescript-eslint/scope-manager/dist/definition/CatchClauseDefinition.js"(exports2) {
    "use strict";
    init_cjs_shims();
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.CatchClauseDefinition = void 0;
    var DefinitionBase_1 = require_DefinitionBase();
    var DefinitionType_1 = require_DefinitionType();
    var CatchClauseDefinition = class extends DefinitionBase_1.DefinitionBase {
      constructor(name, node2) {
        super(DefinitionType_1.DefinitionType.CatchClause, name, node2, null);
        this.isTypeDefinition = false;
        this.isVariableDefinition = true;
      }
    };
    exports2.CatchClauseDefinition = CatchClauseDefinition;
  }
});

// node_modules/.pnpm/@typescript-eslint+scope-manager@7.10.0/node_modules/@typescript-eslint/scope-manager/dist/definition/ClassNameDefinition.js
var require_ClassNameDefinition = __commonJS({
  "node_modules/.pnpm/@typescript-eslint+scope-manager@7.10.0/node_modules/@typescript-eslint/scope-manager/dist/definition/ClassNameDefinition.js"(exports2) {
    "use strict";
    init_cjs_shims();
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.ClassNameDefinition = void 0;
    var DefinitionBase_1 = require_DefinitionBase();
    var DefinitionType_1 = require_DefinitionType();
    var ClassNameDefinition = class extends DefinitionBase_1.DefinitionBase {
      constructor(name, node2) {
        super(DefinitionType_1.DefinitionType.ClassName, name, node2, null);
        this.isTypeDefinition = true;
        this.isVariableDefinition = true;
      }
    };
    exports2.ClassNameDefinition = ClassNameDefinition;
  }
});

// node_modules/.pnpm/@typescript-eslint+scope-manager@7.10.0/node_modules/@typescript-eslint/scope-manager/dist/definition/Definition.js
var require_Definition = __commonJS({
  "node_modules/.pnpm/@typescript-eslint+scope-manager@7.10.0/node_modules/@typescript-eslint/scope-manager/dist/definition/Definition.js"(exports2) {
    "use strict";
    init_cjs_shims();
    Object.defineProperty(exports2, "__esModule", { value: true });
  }
});

// node_modules/.pnpm/@typescript-eslint+scope-manager@7.10.0/node_modules/@typescript-eslint/scope-manager/dist/definition/FunctionNameDefinition.js
var require_FunctionNameDefinition = __commonJS({
  "node_modules/.pnpm/@typescript-eslint+scope-manager@7.10.0/node_modules/@typescript-eslint/scope-manager/dist/definition/FunctionNameDefinition.js"(exports2) {
    "use strict";
    init_cjs_shims();
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.FunctionNameDefinition = void 0;
    var DefinitionBase_1 = require_DefinitionBase();
    var DefinitionType_1 = require_DefinitionType();
    var FunctionNameDefinition = class extends DefinitionBase_1.DefinitionBase {
      constructor(name, node2) {
        super(DefinitionType_1.DefinitionType.FunctionName, name, node2, null);
        this.isTypeDefinition = false;
        this.isVariableDefinition = true;
      }
    };
    exports2.FunctionNameDefinition = FunctionNameDefinition;
  }
});

// node_modules/.pnpm/@typescript-eslint+scope-manager@7.10.0/node_modules/@typescript-eslint/scope-manager/dist/definition/ImplicitGlobalVariableDefinition.js
var require_ImplicitGlobalVariableDefinition = __commonJS({
  "node_modules/.pnpm/@typescript-eslint+scope-manager@7.10.0/node_modules/@typescript-eslint/scope-manager/dist/definition/ImplicitGlobalVariableDefinition.js"(exports2) {
    "use strict";
    init_cjs_shims();
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.ImplicitGlobalVariableDefinition = void 0;
    var DefinitionBase_1 = require_DefinitionBase();
    var DefinitionType_1 = require_DefinitionType();
    var ImplicitGlobalVariableDefinition = class extends DefinitionBase_1.DefinitionBase {
      constructor(name, node2) {
        super(DefinitionType_1.DefinitionType.ImplicitGlobalVariable, name, node2, null);
        this.isTypeDefinition = false;
        this.isVariableDefinition = true;
      }
    };
    exports2.ImplicitGlobalVariableDefinition = ImplicitGlobalVariableDefinition;
  }
});

// node_modules/.pnpm/@typescript-eslint+scope-manager@7.10.0/node_modules/@typescript-eslint/scope-manager/dist/definition/ImportBindingDefinition.js
var require_ImportBindingDefinition = __commonJS({
  "node_modules/.pnpm/@typescript-eslint+scope-manager@7.10.0/node_modules/@typescript-eslint/scope-manager/dist/definition/ImportBindingDefinition.js"(exports2) {
    "use strict";
    init_cjs_shims();
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.ImportBindingDefinition = void 0;
    var DefinitionBase_1 = require_DefinitionBase();
    var DefinitionType_1 = require_DefinitionType();
    var ImportBindingDefinition = class extends DefinitionBase_1.DefinitionBase {
      constructor(name, node2, decl) {
        super(DefinitionType_1.DefinitionType.ImportBinding, name, node2, decl);
        this.isTypeDefinition = true;
        this.isVariableDefinition = true;
      }
    };
    exports2.ImportBindingDefinition = ImportBindingDefinition;
  }
});

// node_modules/.pnpm/@typescript-eslint+scope-manager@7.10.0/node_modules/@typescript-eslint/scope-manager/dist/definition/ParameterDefinition.js
var require_ParameterDefinition = __commonJS({
  "node_modules/.pnpm/@typescript-eslint+scope-manager@7.10.0/node_modules/@typescript-eslint/scope-manager/dist/definition/ParameterDefinition.js"(exports2) {
    "use strict";
    init_cjs_shims();
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.ParameterDefinition = void 0;
    var DefinitionBase_1 = require_DefinitionBase();
    var DefinitionType_1 = require_DefinitionType();
    var ParameterDefinition = class extends DefinitionBase_1.DefinitionBase {
      constructor(name, node2, rest) {
        super(DefinitionType_1.DefinitionType.Parameter, name, node2, null);
        this.isTypeDefinition = false;
        this.isVariableDefinition = true;
        this.rest = rest;
      }
    };
    exports2.ParameterDefinition = ParameterDefinition;
  }
});

// node_modules/.pnpm/@typescript-eslint+scope-manager@7.10.0/node_modules/@typescript-eslint/scope-manager/dist/definition/TSEnumMemberDefinition.js
var require_TSEnumMemberDefinition = __commonJS({
  "node_modules/.pnpm/@typescript-eslint+scope-manager@7.10.0/node_modules/@typescript-eslint/scope-manager/dist/definition/TSEnumMemberDefinition.js"(exports2) {
    "use strict";
    init_cjs_shims();
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.TSEnumMemberDefinition = void 0;
    var DefinitionBase_1 = require_DefinitionBase();
    var DefinitionType_1 = require_DefinitionType();
    var TSEnumMemberDefinition = class extends DefinitionBase_1.DefinitionBase {
      constructor(name, node2) {
        super(DefinitionType_1.DefinitionType.TSEnumMember, name, node2, null);
        this.isTypeDefinition = true;
        this.isVariableDefinition = true;
      }
    };
    exports2.TSEnumMemberDefinition = TSEnumMemberDefinition;
  }
});

// node_modules/.pnpm/@typescript-eslint+scope-manager@7.10.0/node_modules/@typescript-eslint/scope-manager/dist/definition/TSEnumNameDefinition.js
var require_TSEnumNameDefinition = __commonJS({
  "node_modules/.pnpm/@typescript-eslint+scope-manager@7.10.0/node_modules/@typescript-eslint/scope-manager/dist/definition/TSEnumNameDefinition.js"(exports2) {
    "use strict";
    init_cjs_shims();
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.TSEnumNameDefinition = void 0;
    var DefinitionBase_1 = require_DefinitionBase();
    var DefinitionType_1 = require_DefinitionType();
    var TSEnumNameDefinition = class extends DefinitionBase_1.DefinitionBase {
      constructor(name, node2) {
        super(DefinitionType_1.DefinitionType.TSEnumName, name, node2, null);
        this.isTypeDefinition = true;
        this.isVariableDefinition = true;
      }
    };
    exports2.TSEnumNameDefinition = TSEnumNameDefinition;
  }
});

// node_modules/.pnpm/@typescript-eslint+scope-manager@7.10.0/node_modules/@typescript-eslint/scope-manager/dist/definition/TSModuleNameDefinition.js
var require_TSModuleNameDefinition = __commonJS({
  "node_modules/.pnpm/@typescript-eslint+scope-manager@7.10.0/node_modules/@typescript-eslint/scope-manager/dist/definition/TSModuleNameDefinition.js"(exports2) {
    "use strict";
    init_cjs_shims();
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.TSModuleNameDefinition = void 0;
    var DefinitionBase_1 = require_DefinitionBase();
    var DefinitionType_1 = require_DefinitionType();
    var TSModuleNameDefinition = class extends DefinitionBase_1.DefinitionBase {
      constructor(name, node2) {
        super(DefinitionType_1.DefinitionType.TSModuleName, name, node2, null);
        this.isTypeDefinition = true;
        this.isVariableDefinition = true;
      }
    };
    exports2.TSModuleNameDefinition = TSModuleNameDefinition;
  }
});

// node_modules/.pnpm/@typescript-eslint+scope-manager@7.10.0/node_modules/@typescript-eslint/scope-manager/dist/definition/TypeDefinition.js
var require_TypeDefinition = __commonJS({
  "node_modules/.pnpm/@typescript-eslint+scope-manager@7.10.0/node_modules/@typescript-eslint/scope-manager/dist/definition/TypeDefinition.js"(exports2) {
    "use strict";
    init_cjs_shims();
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.TypeDefinition = void 0;
    var DefinitionBase_1 = require_DefinitionBase();
    var DefinitionType_1 = require_DefinitionType();
    var TypeDefinition = class extends DefinitionBase_1.DefinitionBase {
      constructor(name, node2) {
        super(DefinitionType_1.DefinitionType.Type, name, node2, null);
        this.isTypeDefinition = true;
        this.isVariableDefinition = false;
      }
    };
    exports2.TypeDefinition = TypeDefinition;
  }
});

// node_modules/.pnpm/@typescript-eslint+scope-manager@7.10.0/node_modules/@typescript-eslint/scope-manager/dist/definition/VariableDefinition.js
var require_VariableDefinition = __commonJS({
  "node_modules/.pnpm/@typescript-eslint+scope-manager@7.10.0/node_modules/@typescript-eslint/scope-manager/dist/definition/VariableDefinition.js"(exports2) {
    "use strict";
    init_cjs_shims();
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.VariableDefinition = void 0;
    var DefinitionBase_1 = require_DefinitionBase();
    var DefinitionType_1 = require_DefinitionType();
    var VariableDefinition = class extends DefinitionBase_1.DefinitionBase {
      constructor(name, node2, decl) {
        super(DefinitionType_1.DefinitionType.Variable, name, node2, decl);
        this.isTypeDefinition = false;
        this.isVariableDefinition = true;
      }
    };
    exports2.VariableDefinition = VariableDefinition;
  }
});

// node_modules/.pnpm/@typescript-eslint+scope-manager@7.10.0/node_modules/@typescript-eslint/scope-manager/dist/definition/index.js
var require_definition = __commonJS({
  "node_modules/.pnpm/@typescript-eslint+scope-manager@7.10.0/node_modules/@typescript-eslint/scope-manager/dist/definition/index.js"(exports2) {
    "use strict";
    init_cjs_shims();
    var __createBinding = exports2 && exports2.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __exportStar = exports2 && exports2.__exportStar || function(m, exports3) {
      for (var p in m)
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports3, p))
          __createBinding(exports3, m, p);
    };
    Object.defineProperty(exports2, "__esModule", { value: true });
    __exportStar(require_CatchClauseDefinition(), exports2);
    __exportStar(require_ClassNameDefinition(), exports2);
    __exportStar(require_Definition(), exports2);
    __exportStar(require_DefinitionType(), exports2);
    __exportStar(require_FunctionNameDefinition(), exports2);
    __exportStar(require_ImplicitGlobalVariableDefinition(), exports2);
    __exportStar(require_ImportBindingDefinition(), exports2);
    __exportStar(require_ParameterDefinition(), exports2);
    __exportStar(require_TSEnumMemberDefinition(), exports2);
    __exportStar(require_TSEnumNameDefinition(), exports2);
    __exportStar(require_TSModuleNameDefinition(), exports2);
    __exportStar(require_TypeDefinition(), exports2);
    __exportStar(require_VariableDefinition(), exports2);
  }
});

// node_modules/.pnpm/@typescript-eslint+scope-manager@7.10.0/node_modules/@typescript-eslint/scope-manager/dist/lib/base-config.js
var require_base_config = __commonJS({
  "node_modules/.pnpm/@typescript-eslint+scope-manager@7.10.0/node_modules/@typescript-eslint/scope-manager/dist/lib/base-config.js"(exports2) {
    "use strict";
    init_cjs_shims();
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.TYPE_VALUE = exports2.VALUE = exports2.TYPE = void 0;
    exports2.TYPE = Object.freeze({
      eslintImplicitGlobalSetting: "readonly",
      isTypeVariable: true,
      isValueVariable: false
    });
    exports2.VALUE = Object.freeze({
      eslintImplicitGlobalSetting: "readonly",
      isTypeVariable: false,
      isValueVariable: true
    });
    exports2.TYPE_VALUE = Object.freeze({
      eslintImplicitGlobalSetting: "readonly",
      isTypeVariable: true,
      isValueVariable: true
    });
  }
});

// node_modules/.pnpm/@typescript-eslint+scope-manager@7.10.0/node_modules/@typescript-eslint/scope-manager/dist/lib/decorators.js
var require_decorators = __commonJS({
  "node_modules/.pnpm/@typescript-eslint+scope-manager@7.10.0/node_modules/@typescript-eslint/scope-manager/dist/lib/decorators.js"(exports2) {
    "use strict";
    init_cjs_shims();
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.decorators = void 0;
    var base_config_1 = require_base_config();
    exports2.decorators = {
      ClassMemberDecoratorContext: base_config_1.TYPE,
      DecoratorContext: base_config_1.TYPE,
      DecoratorMetadataObject: base_config_1.TYPE,
      DecoratorMetadata: base_config_1.TYPE,
      ClassDecoratorContext: base_config_1.TYPE,
      ClassMethodDecoratorContext: base_config_1.TYPE,
      ClassGetterDecoratorContext: base_config_1.TYPE,
      ClassSetterDecoratorContext: base_config_1.TYPE,
      ClassAccessorDecoratorContext: base_config_1.TYPE,
      ClassAccessorDecoratorTarget: base_config_1.TYPE,
      ClassAccessorDecoratorResult: base_config_1.TYPE,
      ClassFieldDecoratorContext: base_config_1.TYPE
    };
  }
});

// node_modules/.pnpm/@typescript-eslint+scope-manager@7.10.0/node_modules/@typescript-eslint/scope-manager/dist/lib/decorators.legacy.js
var require_decorators_legacy = __commonJS({
  "node_modules/.pnpm/@typescript-eslint+scope-manager@7.10.0/node_modules/@typescript-eslint/scope-manager/dist/lib/decorators.legacy.js"(exports2) {
    "use strict";
    init_cjs_shims();
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.decorators_legacy = void 0;
    var base_config_1 = require_base_config();
    exports2.decorators_legacy = {
      ClassDecorator: base_config_1.TYPE,
      PropertyDecorator: base_config_1.TYPE,
      MethodDecorator: base_config_1.TYPE,
      ParameterDecorator: base_config_1.TYPE
    };
  }
});

// node_modules/.pnpm/@typescript-eslint+scope-manager@7.10.0/node_modules/@typescript-eslint/scope-manager/dist/lib/dom.js
var require_dom = __commonJS({
  "node_modules/.pnpm/@typescript-eslint+scope-manager@7.10.0/node_modules/@typescript-eslint/scope-manager/dist/lib/dom.js"(exports2) {
    "use strict";
    init_cjs_shims();
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.dom = void 0;
    var base_config_1 = require_base_config();
    exports2.dom = {
      AddEventListenerOptions: base_config_1.TYPE,
      AesCbcParams: base_config_1.TYPE,
      AesCtrParams: base_config_1.TYPE,
      AesDerivedKeyParams: base_config_1.TYPE,
      AesGcmParams: base_config_1.TYPE,
      AesKeyAlgorithm: base_config_1.TYPE,
      AesKeyGenParams: base_config_1.TYPE,
      Algorithm: base_config_1.TYPE,
      AnalyserOptions: base_config_1.TYPE,
      AnimationEventInit: base_config_1.TYPE,
      AnimationPlaybackEventInit: base_config_1.TYPE,
      AssignedNodesOptions: base_config_1.TYPE,
      AudioBufferOptions: base_config_1.TYPE,
      AudioBufferSourceOptions: base_config_1.TYPE,
      AudioConfiguration: base_config_1.TYPE,
      AudioContextOptions: base_config_1.TYPE,
      AudioNodeOptions: base_config_1.TYPE,
      AudioProcessingEventInit: base_config_1.TYPE,
      AudioTimestamp: base_config_1.TYPE,
      AudioWorkletNodeOptions: base_config_1.TYPE,
      AuthenticationExtensionsClientInputs: base_config_1.TYPE,
      AuthenticationExtensionsClientOutputs: base_config_1.TYPE,
      AuthenticatorSelectionCriteria: base_config_1.TYPE,
      AvcEncoderConfig: base_config_1.TYPE,
      BiquadFilterOptions: base_config_1.TYPE,
      BlobEventInit: base_config_1.TYPE,
      BlobPropertyBag: base_config_1.TYPE,
      CSSMatrixComponentOptions: base_config_1.TYPE,
      CSSNumericType: base_config_1.TYPE,
      CSSStyleSheetInit: base_config_1.TYPE,
      CacheQueryOptions: base_config_1.TYPE,
      CanvasRenderingContext2DSettings: base_config_1.TYPE,
      ChannelMergerOptions: base_config_1.TYPE,
      ChannelSplitterOptions: base_config_1.TYPE,
      CheckVisibilityOptions: base_config_1.TYPE,
      ClientQueryOptions: base_config_1.TYPE,
      ClipboardEventInit: base_config_1.TYPE,
      ClipboardItemOptions: base_config_1.TYPE,
      CloseEventInit: base_config_1.TYPE,
      CompositionEventInit: base_config_1.TYPE,
      ComputedEffectTiming: base_config_1.TYPE,
      ComputedKeyframe: base_config_1.TYPE,
      ConstantSourceOptions: base_config_1.TYPE,
      ConstrainBooleanParameters: base_config_1.TYPE,
      ConstrainDOMStringParameters: base_config_1.TYPE,
      ConstrainDoubleRange: base_config_1.TYPE,
      ConstrainULongRange: base_config_1.TYPE,
      ConvolverOptions: base_config_1.TYPE,
      CredentialCreationOptions: base_config_1.TYPE,
      CredentialPropertiesOutput: base_config_1.TYPE,
      CredentialRequestOptions: base_config_1.TYPE,
      CryptoKeyPair: base_config_1.TYPE,
      CustomEventInit: base_config_1.TYPE,
      DOMMatrix2DInit: base_config_1.TYPE,
      DOMMatrixInit: base_config_1.TYPE,
      DOMPointInit: base_config_1.TYPE,
      DOMQuadInit: base_config_1.TYPE,
      DOMRectInit: base_config_1.TYPE,
      DelayOptions: base_config_1.TYPE,
      DeviceMotionEventAccelerationInit: base_config_1.TYPE,
      DeviceMotionEventInit: base_config_1.TYPE,
      DeviceMotionEventRotationRateInit: base_config_1.TYPE,
      DeviceOrientationEventInit: base_config_1.TYPE,
      DisplayMediaStreamOptions: base_config_1.TYPE,
      DocumentTimelineOptions: base_config_1.TYPE,
      DoubleRange: base_config_1.TYPE,
      DragEventInit: base_config_1.TYPE,
      DynamicsCompressorOptions: base_config_1.TYPE,
      EcKeyAlgorithm: base_config_1.TYPE,
      EcKeyGenParams: base_config_1.TYPE,
      EcKeyImportParams: base_config_1.TYPE,
      EcdhKeyDeriveParams: base_config_1.TYPE,
      EcdsaParams: base_config_1.TYPE,
      EffectTiming: base_config_1.TYPE,
      ElementCreationOptions: base_config_1.TYPE,
      ElementDefinitionOptions: base_config_1.TYPE,
      EncodedVideoChunkInit: base_config_1.TYPE,
      EncodedVideoChunkMetadata: base_config_1.TYPE,
      ErrorEventInit: base_config_1.TYPE,
      EventInit: base_config_1.TYPE,
      EventListenerOptions: base_config_1.TYPE,
      EventModifierInit: base_config_1.TYPE,
      EventSourceInit: base_config_1.TYPE,
      FilePropertyBag: base_config_1.TYPE,
      FileSystemCreateWritableOptions: base_config_1.TYPE,
      FileSystemFlags: base_config_1.TYPE,
      FileSystemGetDirectoryOptions: base_config_1.TYPE,
      FileSystemGetFileOptions: base_config_1.TYPE,
      FileSystemRemoveOptions: base_config_1.TYPE,
      FocusEventInit: base_config_1.TYPE,
      FocusOptions: base_config_1.TYPE,
      FontFaceDescriptors: base_config_1.TYPE,
      FontFaceSetLoadEventInit: base_config_1.TYPE,
      FormDataEventInit: base_config_1.TYPE,
      FullscreenOptions: base_config_1.TYPE,
      GainOptions: base_config_1.TYPE,
      GamepadEffectParameters: base_config_1.TYPE,
      GamepadEventInit: base_config_1.TYPE,
      GetAnimationsOptions: base_config_1.TYPE,
      GetNotificationOptions: base_config_1.TYPE,
      GetRootNodeOptions: base_config_1.TYPE,
      HashChangeEventInit: base_config_1.TYPE,
      HkdfParams: base_config_1.TYPE,
      HmacImportParams: base_config_1.TYPE,
      HmacKeyAlgorithm: base_config_1.TYPE,
      HmacKeyGenParams: base_config_1.TYPE,
      IDBDatabaseInfo: base_config_1.TYPE,
      IDBIndexParameters: base_config_1.TYPE,
      IDBObjectStoreParameters: base_config_1.TYPE,
      IDBTransactionOptions: base_config_1.TYPE,
      IDBVersionChangeEventInit: base_config_1.TYPE,
      IIRFilterOptions: base_config_1.TYPE,
      IdleRequestOptions: base_config_1.TYPE,
      ImageBitmapOptions: base_config_1.TYPE,
      ImageBitmapRenderingContextSettings: base_config_1.TYPE,
      ImageDataSettings: base_config_1.TYPE,
      ImageEncodeOptions: base_config_1.TYPE,
      ImportMeta: base_config_1.TYPE,
      InputEventInit: base_config_1.TYPE,
      IntersectionObserverEntryInit: base_config_1.TYPE,
      IntersectionObserverInit: base_config_1.TYPE,
      JsonWebKey: base_config_1.TYPE,
      KeyAlgorithm: base_config_1.TYPE,
      KeyboardEventInit: base_config_1.TYPE,
      Keyframe: base_config_1.TYPE,
      KeyframeAnimationOptions: base_config_1.TYPE,
      KeyframeEffectOptions: base_config_1.TYPE,
      LockInfo: base_config_1.TYPE,
      LockManagerSnapshot: base_config_1.TYPE,
      LockOptions: base_config_1.TYPE,
      MIDIConnectionEventInit: base_config_1.TYPE,
      MIDIMessageEventInit: base_config_1.TYPE,
      MIDIOptions: base_config_1.TYPE,
      MediaCapabilitiesDecodingInfo: base_config_1.TYPE,
      MediaCapabilitiesEncodingInfo: base_config_1.TYPE,
      MediaCapabilitiesInfo: base_config_1.TYPE,
      MediaConfiguration: base_config_1.TYPE,
      MediaDecodingConfiguration: base_config_1.TYPE,
      MediaElementAudioSourceOptions: base_config_1.TYPE,
      MediaEncodingConfiguration: base_config_1.TYPE,
      MediaEncryptedEventInit: base_config_1.TYPE,
      MediaImage: base_config_1.TYPE,
      MediaKeyMessageEventInit: base_config_1.TYPE,
      MediaKeySystemConfiguration: base_config_1.TYPE,
      MediaKeySystemMediaCapability: base_config_1.TYPE,
      MediaMetadataInit: base_config_1.TYPE,
      MediaPositionState: base_config_1.TYPE,
      MediaQueryListEventInit: base_config_1.TYPE,
      MediaRecorderOptions: base_config_1.TYPE,
      MediaSessionActionDetails: base_config_1.TYPE,
      MediaStreamAudioSourceOptions: base_config_1.TYPE,
      MediaStreamConstraints: base_config_1.TYPE,
      MediaStreamTrackEventInit: base_config_1.TYPE,
      MediaTrackCapabilities: base_config_1.TYPE,
      MediaTrackConstraintSet: base_config_1.TYPE,
      MediaTrackConstraints: base_config_1.TYPE,
      MediaTrackSettings: base_config_1.TYPE,
      MediaTrackSupportedConstraints: base_config_1.TYPE,
      MessageEventInit: base_config_1.TYPE,
      MouseEventInit: base_config_1.TYPE,
      MultiCacheQueryOptions: base_config_1.TYPE,
      MutationObserverInit: base_config_1.TYPE,
      NavigationPreloadState: base_config_1.TYPE,
      NotificationOptions: base_config_1.TYPE,
      OfflineAudioCompletionEventInit: base_config_1.TYPE,
      OfflineAudioContextOptions: base_config_1.TYPE,
      OptionalEffectTiming: base_config_1.TYPE,
      OscillatorOptions: base_config_1.TYPE,
      PageTransitionEventInit: base_config_1.TYPE,
      PannerOptions: base_config_1.TYPE,
      PaymentCurrencyAmount: base_config_1.TYPE,
      PaymentDetailsBase: base_config_1.TYPE,
      PaymentDetailsInit: base_config_1.TYPE,
      PaymentDetailsModifier: base_config_1.TYPE,
      PaymentDetailsUpdate: base_config_1.TYPE,
      PaymentItem: base_config_1.TYPE,
      PaymentMethodChangeEventInit: base_config_1.TYPE,
      PaymentMethodData: base_config_1.TYPE,
      PaymentRequestUpdateEventInit: base_config_1.TYPE,
      PaymentValidationErrors: base_config_1.TYPE,
      Pbkdf2Params: base_config_1.TYPE,
      PerformanceMarkOptions: base_config_1.TYPE,
      PerformanceMeasureOptions: base_config_1.TYPE,
      PerformanceObserverInit: base_config_1.TYPE,
      PeriodicWaveConstraints: base_config_1.TYPE,
      PeriodicWaveOptions: base_config_1.TYPE,
      PermissionDescriptor: base_config_1.TYPE,
      PictureInPictureEventInit: base_config_1.TYPE,
      PlaneLayout: base_config_1.TYPE,
      PointerEventInit: base_config_1.TYPE,
      PopStateEventInit: base_config_1.TYPE,
      PositionOptions: base_config_1.TYPE,
      ProgressEventInit: base_config_1.TYPE,
      PromiseRejectionEventInit: base_config_1.TYPE,
      PropertyDefinition: base_config_1.TYPE,
      PropertyIndexedKeyframes: base_config_1.TYPE,
      PublicKeyCredentialCreationOptions: base_config_1.TYPE,
      PublicKeyCredentialDescriptor: base_config_1.TYPE,
      PublicKeyCredentialEntity: base_config_1.TYPE,
      PublicKeyCredentialParameters: base_config_1.TYPE,
      PublicKeyCredentialRequestOptions: base_config_1.TYPE,
      PublicKeyCredentialRpEntity: base_config_1.TYPE,
      PublicKeyCredentialUserEntity: base_config_1.TYPE,
      PushSubscriptionJSON: base_config_1.TYPE,
      PushSubscriptionOptionsInit: base_config_1.TYPE,
      QueuingStrategy: base_config_1.TYPE,
      QueuingStrategyInit: base_config_1.TYPE,
      RTCAnswerOptions: base_config_1.TYPE,
      RTCCertificateExpiration: base_config_1.TYPE,
      RTCConfiguration: base_config_1.TYPE,
      RTCDTMFToneChangeEventInit: base_config_1.TYPE,
      RTCDataChannelEventInit: base_config_1.TYPE,
      RTCDataChannelInit: base_config_1.TYPE,
      RTCDtlsFingerprint: base_config_1.TYPE,
      RTCEncodedAudioFrameMetadata: base_config_1.TYPE,
      RTCEncodedVideoFrameMetadata: base_config_1.TYPE,
      RTCErrorEventInit: base_config_1.TYPE,
      RTCErrorInit: base_config_1.TYPE,
      RTCIceCandidateInit: base_config_1.TYPE,
      RTCIceCandidatePair: base_config_1.TYPE,
      RTCIceCandidatePairStats: base_config_1.TYPE,
      RTCIceServer: base_config_1.TYPE,
      RTCInboundRtpStreamStats: base_config_1.TYPE,
      RTCLocalSessionDescriptionInit: base_config_1.TYPE,
      RTCOfferAnswerOptions: base_config_1.TYPE,
      RTCOfferOptions: base_config_1.TYPE,
      RTCOutboundRtpStreamStats: base_config_1.TYPE,
      RTCPeerConnectionIceErrorEventInit: base_config_1.TYPE,
      RTCPeerConnectionIceEventInit: base_config_1.TYPE,
      RTCReceivedRtpStreamStats: base_config_1.TYPE,
      RTCRtcpParameters: base_config_1.TYPE,
      RTCRtpCapabilities: base_config_1.TYPE,
      RTCRtpCodec: base_config_1.TYPE,
      RTCRtpCodecCapability: base_config_1.TYPE,
      RTCRtpCodecParameters: base_config_1.TYPE,
      RTCRtpCodingParameters: base_config_1.TYPE,
      RTCRtpContributingSource: base_config_1.TYPE,
      RTCRtpEncodingParameters: base_config_1.TYPE,
      RTCRtpHeaderExtensionCapability: base_config_1.TYPE,
      RTCRtpHeaderExtensionParameters: base_config_1.TYPE,
      RTCRtpParameters: base_config_1.TYPE,
      RTCRtpReceiveParameters: base_config_1.TYPE,
      RTCRtpSendParameters: base_config_1.TYPE,
      RTCRtpStreamStats: base_config_1.TYPE,
      RTCRtpSynchronizationSource: base_config_1.TYPE,
      RTCRtpTransceiverInit: base_config_1.TYPE,
      RTCSentRtpStreamStats: base_config_1.TYPE,
      RTCSessionDescriptionInit: base_config_1.TYPE,
      RTCSetParameterOptions: base_config_1.TYPE,
      RTCStats: base_config_1.TYPE,
      RTCTrackEventInit: base_config_1.TYPE,
      RTCTransportStats: base_config_1.TYPE,
      ReadableStreamGetReaderOptions: base_config_1.TYPE,
      ReadableStreamReadDoneResult: base_config_1.TYPE,
      ReadableStreamReadValueResult: base_config_1.TYPE,
      ReadableWritablePair: base_config_1.TYPE,
      RegistrationOptions: base_config_1.TYPE,
      ReportingObserverOptions: base_config_1.TYPE,
      RequestInit: base_config_1.TYPE,
      ResizeObserverOptions: base_config_1.TYPE,
      ResponseInit: base_config_1.TYPE,
      RsaHashedImportParams: base_config_1.TYPE,
      RsaHashedKeyAlgorithm: base_config_1.TYPE,
      RsaHashedKeyGenParams: base_config_1.TYPE,
      RsaKeyAlgorithm: base_config_1.TYPE,
      RsaKeyGenParams: base_config_1.TYPE,
      RsaOaepParams: base_config_1.TYPE,
      RsaOtherPrimesInfo: base_config_1.TYPE,
      RsaPssParams: base_config_1.TYPE,
      SVGBoundingBoxOptions: base_config_1.TYPE,
      ScrollIntoViewOptions: base_config_1.TYPE,
      ScrollOptions: base_config_1.TYPE,
      ScrollToOptions: base_config_1.TYPE,
      SecurityPolicyViolationEventInit: base_config_1.TYPE,
      ShadowRootInit: base_config_1.TYPE,
      ShareData: base_config_1.TYPE,
      SpeechSynthesisErrorEventInit: base_config_1.TYPE,
      SpeechSynthesisEventInit: base_config_1.TYPE,
      StaticRangeInit: base_config_1.TYPE,
      StereoPannerOptions: base_config_1.TYPE,
      StorageEstimate: base_config_1.TYPE,
      StorageEventInit: base_config_1.TYPE,
      StreamPipeOptions: base_config_1.TYPE,
      StructuredSerializeOptions: base_config_1.TYPE,
      SubmitEventInit: base_config_1.TYPE,
      TextDecodeOptions: base_config_1.TYPE,
      TextDecoderOptions: base_config_1.TYPE,
      TextEncoderEncodeIntoResult: base_config_1.TYPE,
      ToggleEventInit: base_config_1.TYPE,
      TouchEventInit: base_config_1.TYPE,
      TouchInit: base_config_1.TYPE,
      TrackEventInit: base_config_1.TYPE,
      Transformer: base_config_1.TYPE,
      TransitionEventInit: base_config_1.TYPE,
      UIEventInit: base_config_1.TYPE,
      ULongRange: base_config_1.TYPE,
      UnderlyingByteSource: base_config_1.TYPE,
      UnderlyingDefaultSource: base_config_1.TYPE,
      UnderlyingSink: base_config_1.TYPE,
      UnderlyingSource: base_config_1.TYPE,
      ValidityStateFlags: base_config_1.TYPE,
      VideoColorSpaceInit: base_config_1.TYPE,
      VideoConfiguration: base_config_1.TYPE,
      VideoDecoderConfig: base_config_1.TYPE,
      VideoDecoderInit: base_config_1.TYPE,
      VideoDecoderSupport: base_config_1.TYPE,
      VideoEncoderConfig: base_config_1.TYPE,
      VideoEncoderEncodeOptions: base_config_1.TYPE,
      VideoEncoderInit: base_config_1.TYPE,
      VideoEncoderSupport: base_config_1.TYPE,
      VideoFrameBufferInit: base_config_1.TYPE,
      VideoFrameCallbackMetadata: base_config_1.TYPE,
      VideoFrameCopyToOptions: base_config_1.TYPE,
      VideoFrameInit: base_config_1.TYPE,
      WaveShaperOptions: base_config_1.TYPE,
      WebGLContextAttributes: base_config_1.TYPE,
      WebGLContextEventInit: base_config_1.TYPE,
      WebTransportCloseInfo: base_config_1.TYPE,
      WebTransportErrorOptions: base_config_1.TYPE,
      WebTransportHash: base_config_1.TYPE,
      WebTransportOptions: base_config_1.TYPE,
      WebTransportSendStreamOptions: base_config_1.TYPE,
      WheelEventInit: base_config_1.TYPE,
      WindowPostMessageOptions: base_config_1.TYPE,
      WorkerOptions: base_config_1.TYPE,
      WorkletOptions: base_config_1.TYPE,
      WriteParams: base_config_1.TYPE,
      NodeFilter: base_config_1.TYPE_VALUE,
      XPathNSResolver: base_config_1.TYPE,
      ANGLE_instanced_arrays: base_config_1.TYPE,
      ARIAMixin: base_config_1.TYPE,
      AbortController: base_config_1.TYPE_VALUE,
      AbortSignalEventMap: base_config_1.TYPE,
      AbortSignal: base_config_1.TYPE_VALUE,
      AbstractRange: base_config_1.TYPE_VALUE,
      AbstractWorkerEventMap: base_config_1.TYPE,
      AbstractWorker: base_config_1.TYPE,
      AnalyserNode: base_config_1.TYPE_VALUE,
      Animatable: base_config_1.TYPE,
      AnimationEventMap: base_config_1.TYPE,
      Animation: base_config_1.TYPE_VALUE,
      AnimationEffect: base_config_1.TYPE_VALUE,
      AnimationEvent: base_config_1.TYPE_VALUE,
      AnimationFrameProvider: base_config_1.TYPE,
      AnimationPlaybackEvent: base_config_1.TYPE_VALUE,
      AnimationTimeline: base_config_1.TYPE_VALUE,
      Attr: base_config_1.TYPE_VALUE,
      AudioBuffer: base_config_1.TYPE_VALUE,
      AudioBufferSourceNode: base_config_1.TYPE_VALUE,
      AudioContext: base_config_1.TYPE_VALUE,
      AudioDestinationNode: base_config_1.TYPE_VALUE,
      AudioListener: base_config_1.TYPE_VALUE,
      AudioNode: base_config_1.TYPE_VALUE,
      AudioParam: base_config_1.TYPE_VALUE,
      AudioParamMap: base_config_1.TYPE_VALUE,
      AudioProcessingEvent: base_config_1.TYPE_VALUE,
      AudioScheduledSourceNodeEventMap: base_config_1.TYPE,
      AudioScheduledSourceNode: base_config_1.TYPE_VALUE,
      AudioWorklet: base_config_1.TYPE_VALUE,
      AudioWorkletNodeEventMap: base_config_1.TYPE,
      AudioWorkletNode: base_config_1.TYPE_VALUE,
      AuthenticatorAssertionResponse: base_config_1.TYPE_VALUE,
      AuthenticatorAttestationResponse: base_config_1.TYPE_VALUE,
      AuthenticatorResponse: base_config_1.TYPE_VALUE,
      BarProp: base_config_1.TYPE_VALUE,
      BaseAudioContextEventMap: base_config_1.TYPE,
      BaseAudioContext: base_config_1.TYPE_VALUE,
      BeforeUnloadEvent: base_config_1.TYPE_VALUE,
      BiquadFilterNode: base_config_1.TYPE_VALUE,
      Blob: base_config_1.TYPE_VALUE,
      BlobEvent: base_config_1.TYPE_VALUE,
      Body: base_config_1.TYPE,
      BroadcastChannelEventMap: base_config_1.TYPE,
      BroadcastChannel: base_config_1.TYPE_VALUE,
      ByteLengthQueuingStrategy: base_config_1.TYPE_VALUE,
      CDATASection: base_config_1.TYPE_VALUE,
      CSSAnimation: base_config_1.TYPE_VALUE,
      CSSConditionRule: base_config_1.TYPE_VALUE,
      CSSContainerRule: base_config_1.TYPE_VALUE,
      CSSCounterStyleRule: base_config_1.TYPE_VALUE,
      CSSFontFaceRule: base_config_1.TYPE_VALUE,
      CSSFontFeatureValuesRule: base_config_1.TYPE_VALUE,
      CSSFontPaletteValuesRule: base_config_1.TYPE_VALUE,
      CSSGroupingRule: base_config_1.TYPE_VALUE,
      CSSImageValue: base_config_1.TYPE_VALUE,
      CSSImportRule: base_config_1.TYPE_VALUE,
      CSSKeyframeRule: base_config_1.TYPE_VALUE,
      CSSKeyframesRule: base_config_1.TYPE_VALUE,
      CSSKeywordValue: base_config_1.TYPE_VALUE,
      CSSLayerBlockRule: base_config_1.TYPE_VALUE,
      CSSLayerStatementRule: base_config_1.TYPE_VALUE,
      CSSMathClamp: base_config_1.TYPE_VALUE,
      CSSMathInvert: base_config_1.TYPE_VALUE,
      CSSMathMax: base_config_1.TYPE_VALUE,
      CSSMathMin: base_config_1.TYPE_VALUE,
      CSSMathNegate: base_config_1.TYPE_VALUE,
      CSSMathProduct: base_config_1.TYPE_VALUE,
      CSSMathSum: base_config_1.TYPE_VALUE,
      CSSMathValue: base_config_1.TYPE_VALUE,
      CSSMatrixComponent: base_config_1.TYPE_VALUE,
      CSSMediaRule: base_config_1.TYPE_VALUE,
      CSSNamespaceRule: base_config_1.TYPE_VALUE,
      CSSNumericArray: base_config_1.TYPE_VALUE,
      CSSNumericValue: base_config_1.TYPE_VALUE,
      CSSPageRule: base_config_1.TYPE_VALUE,
      CSSPerspective: base_config_1.TYPE_VALUE,
      CSSPropertyRule: base_config_1.TYPE_VALUE,
      CSSRotate: base_config_1.TYPE_VALUE,
      CSSRule: base_config_1.TYPE_VALUE,
      CSSRuleList: base_config_1.TYPE_VALUE,
      CSSScale: base_config_1.TYPE_VALUE,
      CSSSkew: base_config_1.TYPE_VALUE,
      CSSSkewX: base_config_1.TYPE_VALUE,
      CSSSkewY: base_config_1.TYPE_VALUE,
      CSSStyleDeclaration: base_config_1.TYPE_VALUE,
      CSSStyleRule: base_config_1.TYPE_VALUE,
      CSSStyleSheet: base_config_1.TYPE_VALUE,
      CSSStyleValue: base_config_1.TYPE_VALUE,
      CSSSupportsRule: base_config_1.TYPE_VALUE,
      CSSTransformComponent: base_config_1.TYPE_VALUE,
      CSSTransformValue: base_config_1.TYPE_VALUE,
      CSSTransition: base_config_1.TYPE_VALUE,
      CSSTranslate: base_config_1.TYPE_VALUE,
      CSSUnitValue: base_config_1.TYPE_VALUE,
      CSSUnparsedValue: base_config_1.TYPE_VALUE,
      CSSVariableReferenceValue: base_config_1.TYPE_VALUE,
      Cache: base_config_1.TYPE_VALUE,
      CacheStorage: base_config_1.TYPE_VALUE,
      CanvasCaptureMediaStreamTrack: base_config_1.TYPE_VALUE,
      CanvasCompositing: base_config_1.TYPE,
      CanvasDrawImage: base_config_1.TYPE,
      CanvasDrawPath: base_config_1.TYPE,
      CanvasFillStrokeStyles: base_config_1.TYPE,
      CanvasFilters: base_config_1.TYPE,
      CanvasGradient: base_config_1.TYPE_VALUE,
      CanvasImageData: base_config_1.TYPE,
      CanvasImageSmoothing: base_config_1.TYPE,
      CanvasPath: base_config_1.TYPE,
      CanvasPathDrawingStyles: base_config_1.TYPE,
      CanvasPattern: base_config_1.TYPE_VALUE,
      CanvasRect: base_config_1.TYPE,
      CanvasRenderingContext2D: base_config_1.TYPE_VALUE,
      CanvasShadowStyles: base_config_1.TYPE,
      CanvasState: base_config_1.TYPE,
      CanvasText: base_config_1.TYPE,
      CanvasTextDrawingStyles: base_config_1.TYPE,
      CanvasTransform: base_config_1.TYPE,
      CanvasUserInterface: base_config_1.TYPE,
      ChannelMergerNode: base_config_1.TYPE_VALUE,
      ChannelSplitterNode: base_config_1.TYPE_VALUE,
      CharacterData: base_config_1.TYPE_VALUE,
      ChildNode: base_config_1.TYPE,
      ClientRect: base_config_1.TYPE,
      Clipboard: base_config_1.TYPE_VALUE,
      ClipboardEvent: base_config_1.TYPE_VALUE,
      ClipboardItem: base_config_1.TYPE_VALUE,
      CloseEvent: base_config_1.TYPE_VALUE,
      Comment: base_config_1.TYPE_VALUE,
      CompositionEvent: base_config_1.TYPE_VALUE,
      CompressionStream: base_config_1.TYPE_VALUE,
      ConstantSourceNode: base_config_1.TYPE_VALUE,
      ConvolverNode: base_config_1.TYPE_VALUE,
      CountQueuingStrategy: base_config_1.TYPE_VALUE,
      Credential: base_config_1.TYPE_VALUE,
      CredentialsContainer: base_config_1.TYPE_VALUE,
      Crypto: base_config_1.TYPE_VALUE,
      CryptoKey: base_config_1.TYPE_VALUE,
      CustomElementRegistry: base_config_1.TYPE_VALUE,
      CustomEvent: base_config_1.TYPE_VALUE,
      DOMException: base_config_1.TYPE_VALUE,
      DOMImplementation: base_config_1.TYPE_VALUE,
      DOMMatrix: base_config_1.TYPE_VALUE,
      SVGMatrix: base_config_1.TYPE_VALUE,
      WebKitCSSMatrix: base_config_1.TYPE_VALUE,
      DOMMatrixReadOnly: base_config_1.TYPE_VALUE,
      DOMParser: base_config_1.TYPE_VALUE,
      DOMPoint: base_config_1.TYPE_VALUE,
      SVGPoint: base_config_1.TYPE_VALUE,
      DOMPointReadOnly: base_config_1.TYPE_VALUE,
      DOMQuad: base_config_1.TYPE_VALUE,
      DOMRect: base_config_1.TYPE_VALUE,
      SVGRect: base_config_1.TYPE_VALUE,
      DOMRectList: base_config_1.TYPE_VALUE,
      DOMRectReadOnly: base_config_1.TYPE_VALUE,
      DOMStringList: base_config_1.TYPE_VALUE,
      DOMStringMap: base_config_1.TYPE_VALUE,
      DOMTokenList: base_config_1.TYPE_VALUE,
      DataTransfer: base_config_1.TYPE_VALUE,
      DataTransferItem: base_config_1.TYPE_VALUE,
      DataTransferItemList: base_config_1.TYPE_VALUE,
      DecompressionStream: base_config_1.TYPE_VALUE,
      DelayNode: base_config_1.TYPE_VALUE,
      DeviceMotionEvent: base_config_1.TYPE_VALUE,
      DeviceMotionEventAcceleration: base_config_1.TYPE,
      DeviceMotionEventRotationRate: base_config_1.TYPE,
      DeviceOrientationEvent: base_config_1.TYPE_VALUE,
      DocumentEventMap: base_config_1.TYPE,
      Document: base_config_1.TYPE_VALUE,
      DocumentFragment: base_config_1.TYPE_VALUE,
      DocumentOrShadowRoot: base_config_1.TYPE,
      DocumentTimeline: base_config_1.TYPE_VALUE,
      DocumentType: base_config_1.TYPE_VALUE,
      DragEvent: base_config_1.TYPE_VALUE,
      DynamicsCompressorNode: base_config_1.TYPE_VALUE,
      EXT_blend_minmax: base_config_1.TYPE,
      EXT_color_buffer_float: base_config_1.TYPE,
      EXT_color_buffer_half_float: base_config_1.TYPE,
      EXT_float_blend: base_config_1.TYPE,
      EXT_frag_depth: base_config_1.TYPE,
      EXT_sRGB: base_config_1.TYPE,
      EXT_shader_texture_lod: base_config_1.TYPE,
      EXT_texture_compression_bptc: base_config_1.TYPE,
      EXT_texture_compression_rgtc: base_config_1.TYPE,
      EXT_texture_filter_anisotropic: base_config_1.TYPE,
      EXT_texture_norm16: base_config_1.TYPE,
      ElementEventMap: base_config_1.TYPE,
      Element: base_config_1.TYPE_VALUE,
      ElementCSSInlineStyle: base_config_1.TYPE,
      ElementContentEditable: base_config_1.TYPE,
      ElementInternals: base_config_1.TYPE_VALUE,
      EncodedVideoChunk: base_config_1.TYPE_VALUE,
      ErrorEvent: base_config_1.TYPE_VALUE,
      Event: base_config_1.TYPE_VALUE,
      EventCounts: base_config_1.TYPE_VALUE,
      EventListener: base_config_1.TYPE,
      EventListenerObject: base_config_1.TYPE,
      EventSourceEventMap: base_config_1.TYPE,
      EventSource: base_config_1.TYPE_VALUE,
      EventTarget: base_config_1.TYPE_VALUE,
      External: base_config_1.TYPE_VALUE,
      File: base_config_1.TYPE_VALUE,
      FileList: base_config_1.TYPE_VALUE,
      FileReaderEventMap: base_config_1.TYPE,
      FileReader: base_config_1.TYPE_VALUE,
      FileSystem: base_config_1.TYPE_VALUE,
      FileSystemDirectoryEntry: base_config_1.TYPE_VALUE,
      FileSystemDirectoryHandle: base_config_1.TYPE_VALUE,
      FileSystemDirectoryReader: base_config_1.TYPE_VALUE,
      FileSystemEntry: base_config_1.TYPE_VALUE,
      FileSystemFileEntry: base_config_1.TYPE_VALUE,
      FileSystemFileHandle: base_config_1.TYPE_VALUE,
      FileSystemHandle: base_config_1.TYPE_VALUE,
      FileSystemWritableFileStream: base_config_1.TYPE_VALUE,
      FocusEvent: base_config_1.TYPE_VALUE,
      FontFace: base_config_1.TYPE_VALUE,
      FontFaceSetEventMap: base_config_1.TYPE,
      FontFaceSet: base_config_1.TYPE_VALUE,
      FontFaceSetLoadEvent: base_config_1.TYPE_VALUE,
      FontFaceSource: base_config_1.TYPE,
      FormData: base_config_1.TYPE_VALUE,
      FormDataEvent: base_config_1.TYPE_VALUE,
      GainNode: base_config_1.TYPE_VALUE,
      Gamepad: base_config_1.TYPE_VALUE,
      GamepadButton: base_config_1.TYPE_VALUE,
      GamepadEvent: base_config_1.TYPE_VALUE,
      GamepadHapticActuator: base_config_1.TYPE_VALUE,
      GenericTransformStream: base_config_1.TYPE,
      Geolocation: base_config_1.TYPE_VALUE,
      GeolocationCoordinates: base_config_1.TYPE_VALUE,
      GeolocationPosition: base_config_1.TYPE_VALUE,
      GeolocationPositionError: base_config_1.TYPE_VALUE,
      GlobalEventHandlersEventMap: base_config_1.TYPE,
      GlobalEventHandlers: base_config_1.TYPE,
      HTMLAllCollection: base_config_1.TYPE_VALUE,
      HTMLAnchorElement: base_config_1.TYPE_VALUE,
      HTMLAreaElement: base_config_1.TYPE_VALUE,
      HTMLAudioElement: base_config_1.TYPE_VALUE,
      HTMLBRElement: base_config_1.TYPE_VALUE,
      HTMLBaseElement: base_config_1.TYPE_VALUE,
      HTMLBodyElementEventMap: base_config_1.TYPE,
      HTMLBodyElement: base_config_1.TYPE_VALUE,
      HTMLButtonElement: base_config_1.TYPE_VALUE,
      HTMLCanvasElement: base_config_1.TYPE_VALUE,
      HTMLCollectionBase: base_config_1.TYPE,
      HTMLCollection: base_config_1.TYPE_VALUE,
      HTMLCollectionOf: base_config_1.TYPE,
      HTMLDListElement: base_config_1.TYPE_VALUE,
      HTMLDataElement: base_config_1.TYPE_VALUE,
      HTMLDataListElement: base_config_1.TYPE_VALUE,
      HTMLDetailsElement: base_config_1.TYPE_VALUE,
      HTMLDialogElement: base_config_1.TYPE_VALUE,
      HTMLDirectoryElement: base_config_1.TYPE_VALUE,
      HTMLDivElement: base_config_1.TYPE_VALUE,
      HTMLDocument: base_config_1.TYPE_VALUE,
      HTMLElementEventMap: base_config_1.TYPE,
      HTMLElement: base_config_1.TYPE_VALUE,
      HTMLEmbedElement: base_config_1.TYPE_VALUE,
      HTMLFieldSetElement: base_config_1.TYPE_VALUE,
      HTMLFontElement: base_config_1.TYPE_VALUE,
      HTMLFormControlsCollection: base_config_1.TYPE_VALUE,
      HTMLFormElement: base_config_1.TYPE_VALUE,
      HTMLFrameElement: base_config_1.TYPE_VALUE,
      HTMLFrameSetElementEventMap: base_config_1.TYPE,
      HTMLFrameSetElement: base_config_1.TYPE_VALUE,
      HTMLHRElement: base_config_1.TYPE_VALUE,
      HTMLHeadElement: base_config_1.TYPE_VALUE,
      HTMLHeadingElement: base_config_1.TYPE_VALUE,
      HTMLHtmlElement: base_config_1.TYPE_VALUE,
      HTMLHyperlinkElementUtils: base_config_1.TYPE,
      HTMLIFrameElement: base_config_1.TYPE_VALUE,
      HTMLImageElement: base_config_1.TYPE_VALUE,
      HTMLInputElement: base_config_1.TYPE_VALUE,
      HTMLLIElement: base_config_1.TYPE_VALUE,
      HTMLLabelElement: base_config_1.TYPE_VALUE,
      HTMLLegendElement: base_config_1.TYPE_VALUE,
      HTMLLinkElement: base_config_1.TYPE_VALUE,
      HTMLMapElement: base_config_1.TYPE_VALUE,
      HTMLMarqueeElement: base_config_1.TYPE_VALUE,
      HTMLMediaElementEventMap: base_config_1.TYPE,
      HTMLMediaElement: base_config_1.TYPE_VALUE,
      HTMLMenuElement: base_config_1.TYPE_VALUE,
      HTMLMetaElement: base_config_1.TYPE_VALUE,
      HTMLMeterElement: base_config_1.TYPE_VALUE,
      HTMLModElement: base_config_1.TYPE_VALUE,
      HTMLOListElement: base_config_1.TYPE_VALUE,
      HTMLObjectElement: base_config_1.TYPE_VALUE,
      HTMLOptGroupElement: base_config_1.TYPE_VALUE,
      HTMLOptionElement: base_config_1.TYPE_VALUE,
      HTMLOptionsCollection: base_config_1.TYPE_VALUE,
      HTMLOrSVGElement: base_config_1.TYPE,
      HTMLOutputElement: base_config_1.TYPE_VALUE,
      HTMLParagraphElement: base_config_1.TYPE_VALUE,
      HTMLParamElement: base_config_1.TYPE_VALUE,
      HTMLPictureElement: base_config_1.TYPE_VALUE,
      HTMLPreElement: base_config_1.TYPE_VALUE,
      HTMLProgressElement: base_config_1.TYPE_VALUE,
      HTMLQuoteElement: base_config_1.TYPE_VALUE,
      HTMLScriptElement: base_config_1.TYPE_VALUE,
      HTMLSelectElement: base_config_1.TYPE_VALUE,
      HTMLSlotElement: base_config_1.TYPE_VALUE,
      HTMLSourceElement: base_config_1.TYPE_VALUE,
      HTMLSpanElement: base_config_1.TYPE_VALUE,
      HTMLStyleElement: base_config_1.TYPE_VALUE,
      HTMLTableCaptionElement: base_config_1.TYPE_VALUE,
      HTMLTableCellElement: base_config_1.TYPE_VALUE,
      HTMLTableColElement: base_config_1.TYPE_VALUE,
      HTMLTableDataCellElement: base_config_1.TYPE,
      HTMLTableElement: base_config_1.TYPE_VALUE,
      HTMLTableHeaderCellElement: base_config_1.TYPE,
      HTMLTableRowElement: base_config_1.TYPE_VALUE,
      HTMLTableSectionElement: base_config_1.TYPE_VALUE,
      HTMLTemplateElement: base_config_1.TYPE_VALUE,
      HTMLTextAreaElement: base_config_1.TYPE_VALUE,
      HTMLTimeElement: base_config_1.TYPE_VALUE,
      HTMLTitleElement: base_config_1.TYPE_VALUE,
      HTMLTrackElement: base_config_1.TYPE_VALUE,
      HTMLUListElement: base_config_1.TYPE_VALUE,
      HTMLUnknownElement: base_config_1.TYPE_VALUE,
      HTMLVideoElementEventMap: base_config_1.TYPE,
      HTMLVideoElement: base_config_1.TYPE_VALUE,
      HashChangeEvent: base_config_1.TYPE_VALUE,
      Headers: base_config_1.TYPE_VALUE,
      Highlight: base_config_1.TYPE_VALUE,
      HighlightRegistry: base_config_1.TYPE_VALUE,
      History: base_config_1.TYPE_VALUE,
      IDBCursor: base_config_1.TYPE_VALUE,
      IDBCursorWithValue: base_config_1.TYPE_VALUE,
      IDBDatabaseEventMap: base_config_1.TYPE,
      IDBDatabase: base_config_1.TYPE_VALUE,
      IDBFactory: base_config_1.TYPE_VALUE,
      IDBIndex: base_config_1.TYPE_VALUE,
      IDBKeyRange: base_config_1.TYPE_VALUE,
      IDBObjectStore: base_config_1.TYPE_VALUE,
      IDBOpenDBRequestEventMap: base_config_1.TYPE,
      IDBOpenDBRequest: base_config_1.TYPE_VALUE,
      IDBRequestEventMap: base_config_1.TYPE,
      IDBRequest: base_config_1.TYPE_VALUE,
      IDBTransactionEventMap: base_config_1.TYPE,
      IDBTransaction: base_config_1.TYPE_VALUE,
      IDBVersionChangeEvent: base_config_1.TYPE_VALUE,
      IIRFilterNode: base_config_1.TYPE_VALUE,
      IdleDeadline: base_config_1.TYPE_VALUE,
      ImageBitmap: base_config_1.TYPE_VALUE,
      ImageBitmapRenderingContext: base_config_1.TYPE_VALUE,
      ImageData: base_config_1.TYPE_VALUE,
      InnerHTML: base_config_1.TYPE,
      InputDeviceInfo: base_config_1.TYPE_VALUE,
      InputEvent: base_config_1.TYPE_VALUE,
      IntersectionObserver: base_config_1.TYPE_VALUE,
      IntersectionObserverEntry: base_config_1.TYPE_VALUE,
      KHR_parallel_shader_compile: base_config_1.TYPE,
      KeyboardEvent: base_config_1.TYPE_VALUE,
      KeyframeEffect: base_config_1.TYPE_VALUE,
      LinkStyle: base_config_1.TYPE,
      Location: base_config_1.TYPE_VALUE,
      Lock: base_config_1.TYPE_VALUE,
      LockManager: base_config_1.TYPE_VALUE,
      MIDIAccessEventMap: base_config_1.TYPE,
      MIDIAccess: base_config_1.TYPE_VALUE,
      MIDIConnectionEvent: base_config_1.TYPE_VALUE,
      MIDIInputEventMap: base_config_1.TYPE,
      MIDIInput: base_config_1.TYPE_VALUE,
      MIDIInputMap: base_config_1.TYPE_VALUE,
      MIDIMessageEvent: base_config_1.TYPE_VALUE,
      MIDIOutput: base_config_1.TYPE_VALUE,
      MIDIOutputMap: base_config_1.TYPE_VALUE,
      MIDIPortEventMap: base_config_1.TYPE,
      MIDIPort: base_config_1.TYPE_VALUE,
      MathMLElementEventMap: base_config_1.TYPE,
      MathMLElement: base_config_1.TYPE_VALUE,
      MediaCapabilities: base_config_1.TYPE_VALUE,
      MediaDeviceInfo: base_config_1.TYPE_VALUE,
      MediaDevicesEventMap: base_config_1.TYPE,
      MediaDevices: base_config_1.TYPE_VALUE,
      MediaElementAudioSourceNode: base_config_1.TYPE_VALUE,
      MediaEncryptedEvent: base_config_1.TYPE_VALUE,
      MediaError: base_config_1.TYPE_VALUE,
      MediaKeyMessageEvent: base_config_1.TYPE_VALUE,
      MediaKeySessionEventMap: base_config_1.TYPE,
      MediaKeySession: base_config_1.TYPE_VALUE,
      MediaKeyStatusMap: base_config_1.TYPE_VALUE,
      MediaKeySystemAccess: base_config_1.TYPE_VALUE,
      MediaKeys: base_config_1.TYPE_VALUE,
      MediaList: base_config_1.TYPE_VALUE,
      MediaMetadata: base_config_1.TYPE_VALUE,
      MediaQueryListEventMap: base_config_1.TYPE,
      MediaQueryList: base_config_1.TYPE_VALUE,
      MediaQueryListEvent: base_config_1.TYPE_VALUE,
      MediaRecorderEventMap: base_config_1.TYPE,
      MediaRecorder: base_config_1.TYPE_VALUE,
      MediaSession: base_config_1.TYPE_VALUE,
      MediaSourceEventMap: base_config_1.TYPE,
      MediaSource: base_config_1.TYPE_VALUE,
      MediaStreamEventMap: base_config_1.TYPE,
      MediaStream: base_config_1.TYPE_VALUE,
      MediaStreamAudioDestinationNode: base_config_1.TYPE_VALUE,
      MediaStreamAudioSourceNode: base_config_1.TYPE_VALUE,
      MediaStreamTrackEventMap: base_config_1.TYPE,
      MediaStreamTrack: base_config_1.TYPE_VALUE,
      MediaStreamTrackEvent: base_config_1.TYPE_VALUE,
      MessageChannel: base_config_1.TYPE_VALUE,
      MessageEvent: base_config_1.TYPE_VALUE,
      MessagePortEventMap: base_config_1.TYPE,
      MessagePort: base_config_1.TYPE_VALUE,
      MimeType: base_config_1.TYPE_VALUE,
      MimeTypeArray: base_config_1.TYPE_VALUE,
      MouseEvent: base_config_1.TYPE_VALUE,
      MutationEvent: base_config_1.TYPE_VALUE,
      MutationObserver: base_config_1.TYPE_VALUE,
      MutationRecord: base_config_1.TYPE_VALUE,
      NamedNodeMap: base_config_1.TYPE_VALUE,
      NavigationPreloadManager: base_config_1.TYPE_VALUE,
      Navigator: base_config_1.TYPE_VALUE,
      NavigatorAutomationInformation: base_config_1.TYPE,
      NavigatorBadge: base_config_1.TYPE,
      NavigatorConcurrentHardware: base_config_1.TYPE,
      NavigatorContentUtils: base_config_1.TYPE,
      NavigatorCookies: base_config_1.TYPE,
      NavigatorID: base_config_1.TYPE,
      NavigatorLanguage: base_config_1.TYPE,
      NavigatorLocks: base_config_1.TYPE,
      NavigatorOnLine: base_config_1.TYPE,
      NavigatorPlugins: base_config_1.TYPE,
      NavigatorStorage: base_config_1.TYPE,
      Node: base_config_1.TYPE_VALUE,
      NodeIterator: base_config_1.TYPE_VALUE,
      NodeList: base_config_1.TYPE_VALUE,
      NodeListOf: base_config_1.TYPE,
      NonDocumentTypeChildNode: base_config_1.TYPE,
      NonElementParentNode: base_config_1.TYPE,
      NotificationEventMap: base_config_1.TYPE,
      Notification: base_config_1.TYPE_VALUE,
      OES_draw_buffers_indexed: base_config_1.TYPE,
      OES_element_index_uint: base_config_1.TYPE,
      OES_fbo_render_mipmap: base_config_1.TYPE,
      OES_standard_derivatives: base_config_1.TYPE,
      OES_texture_float: base_config_1.TYPE,
      OES_texture_float_linear: base_config_1.TYPE,
      OES_texture_half_float: base_config_1.TYPE,
      OES_texture_half_float_linear: base_config_1.TYPE,
      OES_vertex_array_object: base_config_1.TYPE,
      OVR_multiview2: base_config_1.TYPE,
      OfflineAudioCompletionEvent: base_config_1.TYPE_VALUE,
      OfflineAudioContextEventMap: base_config_1.TYPE,
      OfflineAudioContext: base_config_1.TYPE_VALUE,
      OffscreenCanvasEventMap: base_config_1.TYPE,
      OffscreenCanvas: base_config_1.TYPE_VALUE,
      OffscreenCanvasRenderingContext2D: base_config_1.TYPE_VALUE,
      OscillatorNode: base_config_1.TYPE_VALUE,
      OverconstrainedError: base_config_1.TYPE_VALUE,
      PageTransitionEvent: base_config_1.TYPE_VALUE,
      PannerNode: base_config_1.TYPE_VALUE,
      ParentNode: base_config_1.TYPE,
      Path2D: base_config_1.TYPE_VALUE,
      PaymentMethodChangeEvent: base_config_1.TYPE_VALUE,
      PaymentRequestEventMap: base_config_1.TYPE,
      PaymentRequest: base_config_1.TYPE_VALUE,
      PaymentRequestUpdateEvent: base_config_1.TYPE_VALUE,
      PaymentResponse: base_config_1.TYPE_VALUE,
      PerformanceEventMap: base_config_1.TYPE,
      Performance: base_config_1.TYPE_VALUE,
      PerformanceEntry: base_config_1.TYPE_VALUE,
      PerformanceEventTiming: base_config_1.TYPE_VALUE,
      PerformanceMark: base_config_1.TYPE_VALUE,
      PerformanceMeasure: base_config_1.TYPE_VALUE,
      PerformanceNavigation: base_config_1.TYPE_VALUE,
      PerformanceNavigationTiming: base_config_1.TYPE_VALUE,
      PerformanceObserver: base_config_1.TYPE_VALUE,
      PerformanceObserverEntryList: base_config_1.TYPE_VALUE,
      PerformancePaintTiming: base_config_1.TYPE_VALUE,
      PerformanceResourceTiming: base_config_1.TYPE_VALUE,
      PerformanceServerTiming: base_config_1.TYPE_VALUE,
      PerformanceTiming: base_config_1.TYPE_VALUE,
      PeriodicWave: base_config_1.TYPE_VALUE,
      PermissionStatusEventMap: base_config_1.TYPE,
      PermissionStatus: base_config_1.TYPE_VALUE,
      Permissions: base_config_1.TYPE_VALUE,
      PictureInPictureEvent: base_config_1.TYPE_VALUE,
      PictureInPictureWindowEventMap: base_config_1.TYPE,
      PictureInPictureWindow: base_config_1.TYPE_VALUE,
      Plugin: base_config_1.TYPE_VALUE,
      PluginArray: base_config_1.TYPE_VALUE,
      PointerEvent: base_config_1.TYPE_VALUE,
      PopStateEvent: base_config_1.TYPE_VALUE,
      PopoverInvokerElement: base_config_1.TYPE,
      ProcessingInstruction: base_config_1.TYPE_VALUE,
      ProgressEvent: base_config_1.TYPE_VALUE,
      PromiseRejectionEvent: base_config_1.TYPE_VALUE,
      PublicKeyCredential: base_config_1.TYPE_VALUE,
      PushManager: base_config_1.TYPE_VALUE,
      PushSubscription: base_config_1.TYPE_VALUE,
      PushSubscriptionOptions: base_config_1.TYPE_VALUE,
      RTCCertificate: base_config_1.TYPE_VALUE,
      RTCDTMFSenderEventMap: base_config_1.TYPE,
      RTCDTMFSender: base_config_1.TYPE_VALUE,
      RTCDTMFToneChangeEvent: base_config_1.TYPE_VALUE,
      RTCDataChannelEventMap: base_config_1.TYPE,
      RTCDataChannel: base_config_1.TYPE_VALUE,
      RTCDataChannelEvent: base_config_1.TYPE_VALUE,
      RTCDtlsTransportEventMap: base_config_1.TYPE,
      RTCDtlsTransport: base_config_1.TYPE_VALUE,
      RTCEncodedAudioFrame: base_config_1.TYPE_VALUE,
      RTCEncodedVideoFrame: base_config_1.TYPE_VALUE,
      RTCError: base_config_1.TYPE_VALUE,
      RTCErrorEvent: base_config_1.TYPE_VALUE,
      RTCIceCandidate: base_config_1.TYPE_VALUE,
      RTCIceTransportEventMap: base_config_1.TYPE,
      RTCIceTransport: base_config_1.TYPE_VALUE,
      RTCPeerConnectionEventMap: base_config_1.TYPE,
      RTCPeerConnection: base_config_1.TYPE_VALUE,
      RTCPeerConnectionIceErrorEvent: base_config_1.TYPE_VALUE,
      RTCPeerConnectionIceEvent: base_config_1.TYPE_VALUE,
      RTCRtpReceiver: base_config_1.TYPE_VALUE,
      RTCRtpScriptTransform: base_config_1.TYPE_VALUE,
      RTCRtpSender: base_config_1.TYPE_VALUE,
      RTCRtpTransceiver: base_config_1.TYPE_VALUE,
      RTCSctpTransportEventMap: base_config_1.TYPE,
      RTCSctpTransport: base_config_1.TYPE_VALUE,
      RTCSessionDescription: base_config_1.TYPE_VALUE,
      RTCStatsReport: base_config_1.TYPE_VALUE,
      RTCTrackEvent: base_config_1.TYPE_VALUE,
      RadioNodeList: base_config_1.TYPE_VALUE,
      Range: base_config_1.TYPE_VALUE,
      ReadableByteStreamController: base_config_1.TYPE_VALUE,
      ReadableStream: base_config_1.TYPE_VALUE,
      ReadableStreamBYOBReader: base_config_1.TYPE_VALUE,
      ReadableStreamBYOBRequest: base_config_1.TYPE_VALUE,
      ReadableStreamDefaultController: base_config_1.TYPE_VALUE,
      ReadableStreamDefaultReader: base_config_1.TYPE_VALUE,
      ReadableStreamGenericReader: base_config_1.TYPE,
      RemotePlaybackEventMap: base_config_1.TYPE,
      RemotePlayback: base_config_1.TYPE_VALUE,
      Report: base_config_1.TYPE_VALUE,
      ReportBody: base_config_1.TYPE_VALUE,
      ReportingObserver: base_config_1.TYPE_VALUE,
      Request: base_config_1.TYPE_VALUE,
      ResizeObserver: base_config_1.TYPE_VALUE,
      ResizeObserverEntry: base_config_1.TYPE_VALUE,
      ResizeObserverSize: base_config_1.TYPE_VALUE,
      Response: base_config_1.TYPE_VALUE,
      SVGAElement: base_config_1.TYPE_VALUE,
      SVGAngle: base_config_1.TYPE_VALUE,
      SVGAnimateElement: base_config_1.TYPE_VALUE,
      SVGAnimateMotionElement: base_config_1.TYPE_VALUE,
      SVGAnimateTransformElement: base_config_1.TYPE_VALUE,
      SVGAnimatedAngle: base_config_1.TYPE_VALUE,
      SVGAnimatedBoolean: base_config_1.TYPE_VALUE,
      SVGAnimatedEnumeration: base_config_1.TYPE_VALUE,
      SVGAnimatedInteger: base_config_1.TYPE_VALUE,
      SVGAnimatedLength: base_config_1.TYPE_VALUE,
      SVGAnimatedLengthList: base_config_1.TYPE_VALUE,
      SVGAnimatedNumber: base_config_1.TYPE_VALUE,
      SVGAnimatedNumberList: base_config_1.TYPE_VALUE,
      SVGAnimatedPoints: base_config_1.TYPE,
      SVGAnimatedPreserveAspectRatio: base_config_1.TYPE_VALUE,
      SVGAnimatedRect: base_config_1.TYPE_VALUE,
      SVGAnimatedString: base_config_1.TYPE_VALUE,
      SVGAnimatedTransformList: base_config_1.TYPE_VALUE,
      SVGAnimationElement: base_config_1.TYPE_VALUE,
      SVGCircleElement: base_config_1.TYPE_VALUE,
      SVGClipPathElement: base_config_1.TYPE_VALUE,
      SVGComponentTransferFunctionElement: base_config_1.TYPE_VALUE,
      SVGDefsElement: base_config_1.TYPE_VALUE,
      SVGDescElement: base_config_1.TYPE_VALUE,
      SVGElementEventMap: base_config_1.TYPE,
      SVGElement: base_config_1.TYPE_VALUE,
      SVGEllipseElement: base_config_1.TYPE_VALUE,
      SVGFEBlendElement: base_config_1.TYPE_VALUE,
      SVGFEColorMatrixElement: base_config_1.TYPE_VALUE,
      SVGFEComponentTransferElement: base_config_1.TYPE_VALUE,
      SVGFECompositeElement: base_config_1.TYPE_VALUE,
      SVGFEConvolveMatrixElement: base_config_1.TYPE_VALUE,
      SVGFEDiffuseLightingElement: base_config_1.TYPE_VALUE,
      SVGFEDisplacementMapElement: base_config_1.TYPE_VALUE,
      SVGFEDistantLightElement: base_config_1.TYPE_VALUE,
      SVGFEDropShadowElement: base_config_1.TYPE_VALUE,
      SVGFEFloodElement: base_config_1.TYPE_VALUE,
      SVGFEFuncAElement: base_config_1.TYPE_VALUE,
      SVGFEFuncBElement: base_config_1.TYPE_VALUE,
      SVGFEFuncGElement: base_config_1.TYPE_VALUE,
      SVGFEFuncRElement: base_config_1.TYPE_VALUE,
      SVGFEGaussianBlurElement: base_config_1.TYPE_VALUE,
      SVGFEImageElement: base_config_1.TYPE_VALUE,
      SVGFEMergeElement: base_config_1.TYPE_VALUE,
      SVGFEMergeNodeElement: base_config_1.TYPE_VALUE,
      SVGFEMorphologyElement: base_config_1.TYPE_VALUE,
      SVGFEOffsetElement: base_config_1.TYPE_VALUE,
      SVGFEPointLightElement: base_config_1.TYPE_VALUE,
      SVGFESpecularLightingElement: base_config_1.TYPE_VALUE,
      SVGFESpotLightElement: base_config_1.TYPE_VALUE,
      SVGFETileElement: base_config_1.TYPE_VALUE,
      SVGFETurbulenceElement: base_config_1.TYPE_VALUE,
      SVGFilterElement: base_config_1.TYPE_VALUE,
      SVGFilterPrimitiveStandardAttributes: base_config_1.TYPE,
      SVGFitToViewBox: base_config_1.TYPE,
      SVGForeignObjectElement: base_config_1.TYPE_VALUE,
      SVGGElement: base_config_1.TYPE_VALUE,
      SVGGeometryElement: base_config_1.TYPE_VALUE,
      SVGGradientElement: base_config_1.TYPE_VALUE,
      SVGGraphicsElement: base_config_1.TYPE_VALUE,
      SVGImageElement: base_config_1.TYPE_VALUE,
      SVGLength: base_config_1.TYPE_VALUE,
      SVGLengthList: base_config_1.TYPE_VALUE,
      SVGLineElement: base_config_1.TYPE_VALUE,
      SVGLinearGradientElement: base_config_1.TYPE_VALUE,
      SVGMPathElement: base_config_1.TYPE_VALUE,
      SVGMarkerElement: base_config_1.TYPE_VALUE,
      SVGMaskElement: base_config_1.TYPE_VALUE,
      SVGMetadataElement: base_config_1.TYPE_VALUE,
      SVGNumber: base_config_1.TYPE_VALUE,
      SVGNumberList: base_config_1.TYPE_VALUE,
      SVGPathElement: base_config_1.TYPE_VALUE,
      SVGPatternElement: base_config_1.TYPE_VALUE,
      SVGPointList: base_config_1.TYPE_VALUE,
      SVGPolygonElement: base_config_1.TYPE_VALUE,
      SVGPolylineElement: base_config_1.TYPE_VALUE,
      SVGPreserveAspectRatio: base_config_1.TYPE_VALUE,
      SVGRadialGradientElement: base_config_1.TYPE_VALUE,
      SVGRectElement: base_config_1.TYPE_VALUE,
      SVGSVGElementEventMap: base_config_1.TYPE,
      SVGSVGElement: base_config_1.TYPE_VALUE,
      SVGScriptElement: base_config_1.TYPE_VALUE,
      SVGSetElement: base_config_1.TYPE_VALUE,
      SVGStopElement: base_config_1.TYPE_VALUE,
      SVGStringList: base_config_1.TYPE_VALUE,
      SVGStyleElement: base_config_1.TYPE_VALUE,
      SVGSwitchElement: base_config_1.TYPE_VALUE,
      SVGSymbolElement: base_config_1.TYPE_VALUE,
      SVGTSpanElement: base_config_1.TYPE_VALUE,
      SVGTests: base_config_1.TYPE,
      SVGTextContentElement: base_config_1.TYPE_VALUE,
      SVGTextElement: base_config_1.TYPE_VALUE,
      SVGTextPathElement: base_config_1.TYPE_VALUE,
      SVGTextPositioningElement: base_config_1.TYPE_VALUE,
      SVGTitleElement: base_config_1.TYPE_VALUE,
      SVGTransform: base_config_1.TYPE_VALUE,
      SVGTransformList: base_config_1.TYPE_VALUE,
      SVGURIReference: base_config_1.TYPE,
      SVGUnitTypes: base_config_1.TYPE_VALUE,
      SVGUseElement: base_config_1.TYPE_VALUE,
      SVGViewElement: base_config_1.TYPE_VALUE,
      Screen: base_config_1.TYPE_VALUE,
      ScreenOrientationEventMap: base_config_1.TYPE,
      ScreenOrientation: base_config_1.TYPE_VALUE,
      ScriptProcessorNodeEventMap: base_config_1.TYPE,
      ScriptProcessorNode: base_config_1.TYPE_VALUE,
      SecurityPolicyViolationEvent: base_config_1.TYPE_VALUE,
      Selection: base_config_1.TYPE_VALUE,
      ServiceWorkerEventMap: base_config_1.TYPE,
      ServiceWorker: base_config_1.TYPE_VALUE,
      ServiceWorkerContainerEventMap: base_config_1.TYPE,
      ServiceWorkerContainer: base_config_1.TYPE_VALUE,
      ServiceWorkerRegistrationEventMap: base_config_1.TYPE,
      ServiceWorkerRegistration: base_config_1.TYPE_VALUE,
      ShadowRootEventMap: base_config_1.TYPE,
      ShadowRoot: base_config_1.TYPE_VALUE,
      SharedWorker: base_config_1.TYPE_VALUE,
      Slottable: base_config_1.TYPE,
      SourceBufferEventMap: base_config_1.TYPE,
      SourceBuffer: base_config_1.TYPE_VALUE,
      SourceBufferListEventMap: base_config_1.TYPE,
      SourceBufferList: base_config_1.TYPE_VALUE,
      SpeechRecognitionAlternative: base_config_1.TYPE_VALUE,
      SpeechRecognitionResult: base_config_1.TYPE_VALUE,
      SpeechRecognitionResultList: base_config_1.TYPE_VALUE,
      SpeechSynthesisEventMap: base_config_1.TYPE,
      SpeechSynthesis: base_config_1.TYPE_VALUE,
      SpeechSynthesisErrorEvent: base_config_1.TYPE_VALUE,
      SpeechSynthesisEvent: base_config_1.TYPE_VALUE,
      SpeechSynthesisUtteranceEventMap: base_config_1.TYPE,
      SpeechSynthesisUtterance: base_config_1.TYPE_VALUE,
      SpeechSynthesisVoice: base_config_1.TYPE_VALUE,
      StaticRange: base_config_1.TYPE_VALUE,
      StereoPannerNode: base_config_1.TYPE_VALUE,
      Storage: base_config_1.TYPE_VALUE,
      StorageEvent: base_config_1.TYPE_VALUE,
      StorageManager: base_config_1.TYPE_VALUE,
      StyleMedia: base_config_1.TYPE,
      StylePropertyMap: base_config_1.TYPE_VALUE,
      StylePropertyMapReadOnly: base_config_1.TYPE_VALUE,
      StyleSheet: base_config_1.TYPE_VALUE,
      StyleSheetList: base_config_1.TYPE_VALUE,
      SubmitEvent: base_config_1.TYPE_VALUE,
      SubtleCrypto: base_config_1.TYPE_VALUE,
      Text: base_config_1.TYPE_VALUE,
      TextDecoder: base_config_1.TYPE_VALUE,
      TextDecoderCommon: base_config_1.TYPE,
      TextDecoderStream: base_config_1.TYPE_VALUE,
      TextEncoder: base_config_1.TYPE_VALUE,
      TextEncoderCommon: base_config_1.TYPE,
      TextEncoderStream: base_config_1.TYPE_VALUE,
      TextMetrics: base_config_1.TYPE_VALUE,
      TextTrackEventMap: base_config_1.TYPE,
      TextTrack: base_config_1.TYPE_VALUE,
      TextTrackCueEventMap: base_config_1.TYPE,
      TextTrackCue: base_config_1.TYPE_VALUE,
      TextTrackCueList: base_config_1.TYPE_VALUE,
      TextTrackListEventMap: base_config_1.TYPE,
      TextTrackList: base_config_1.TYPE_VALUE,
      TimeRanges: base_config_1.TYPE_VALUE,
      ToggleEvent: base_config_1.TYPE_VALUE,
      Touch: base_config_1.TYPE_VALUE,
      TouchEvent: base_config_1.TYPE_VALUE,
      TouchList: base_config_1.TYPE_VALUE,
      TrackEvent: base_config_1.TYPE_VALUE,
      TransformStream: base_config_1.TYPE_VALUE,
      TransformStreamDefaultController: base_config_1.TYPE_VALUE,
      TransitionEvent: base_config_1.TYPE_VALUE,
      TreeWalker: base_config_1.TYPE_VALUE,
      UIEvent: base_config_1.TYPE_VALUE,
      URL: base_config_1.TYPE_VALUE,
      webkitURL: base_config_1.TYPE_VALUE,
      URLSearchParams: base_config_1.TYPE_VALUE,
      UserActivation: base_config_1.TYPE_VALUE,
      VTTCue: base_config_1.TYPE_VALUE,
      VTTRegion: base_config_1.TYPE_VALUE,
      ValidityState: base_config_1.TYPE_VALUE,
      VideoColorSpace: base_config_1.TYPE_VALUE,
      VideoDecoderEventMap: base_config_1.TYPE,
      VideoDecoder: base_config_1.TYPE_VALUE,
      VideoEncoderEventMap: base_config_1.TYPE,
      VideoEncoder: base_config_1.TYPE_VALUE,
      VideoFrame: base_config_1.TYPE_VALUE,
      VideoPlaybackQuality: base_config_1.TYPE_VALUE,
      VisualViewportEventMap: base_config_1.TYPE,
      VisualViewport: base_config_1.TYPE_VALUE,
      WEBGL_color_buffer_float: base_config_1.TYPE,
      WEBGL_compressed_texture_astc: base_config_1.TYPE,
      WEBGL_compressed_texture_etc: base_config_1.TYPE,
      WEBGL_compressed_texture_etc1: base_config_1.TYPE,
      WEBGL_compressed_texture_pvrtc: base_config_1.TYPE,
      WEBGL_compressed_texture_s3tc: base_config_1.TYPE,
      WEBGL_compressed_texture_s3tc_srgb: base_config_1.TYPE,
      WEBGL_debug_renderer_info: base_config_1.TYPE,
      WEBGL_debug_shaders: base_config_1.TYPE,
      WEBGL_depth_texture: base_config_1.TYPE,
      WEBGL_draw_buffers: base_config_1.TYPE,
      WEBGL_lose_context: base_config_1.TYPE,
      WEBGL_multi_draw: base_config_1.TYPE,
      WakeLock: base_config_1.TYPE_VALUE,
      WakeLockSentinelEventMap: base_config_1.TYPE,
      WakeLockSentinel: base_config_1.TYPE_VALUE,
      WaveShaperNode: base_config_1.TYPE_VALUE,
      WebGL2RenderingContext: base_config_1.TYPE_VALUE,
      WebGL2RenderingContextBase: base_config_1.TYPE,
      WebGL2RenderingContextOverloads: base_config_1.TYPE,
      WebGLActiveInfo: base_config_1.TYPE_VALUE,
      WebGLBuffer: base_config_1.TYPE_VALUE,
      WebGLContextEvent: base_config_1.TYPE_VALUE,
      WebGLFramebuffer: base_config_1.TYPE_VALUE,
      WebGLProgram: base_config_1.TYPE_VALUE,
      WebGLQuery: base_config_1.TYPE_VALUE,
      WebGLRenderbuffer: base_config_1.TYPE_VALUE,
      WebGLRenderingContext: base_config_1.TYPE_VALUE,
      WebGLRenderingContextBase: base_config_1.TYPE,
      WebGLRenderingContextOverloads: base_config_1.TYPE,
      WebGLSampler: base_config_1.TYPE_VALUE,
      WebGLShader: base_config_1.TYPE_VALUE,
      WebGLShaderPrecisionFormat: base_config_1.TYPE_VALUE,
      WebGLSync: base_config_1.TYPE_VALUE,
      WebGLTexture: base_config_1.TYPE_VALUE,
      WebGLTransformFeedback: base_config_1.TYPE_VALUE,
      WebGLUniformLocation: base_config_1.TYPE_VALUE,
      WebGLVertexArrayObject: base_config_1.TYPE_VALUE,
      WebGLVertexArrayObjectOES: base_config_1.TYPE,
      WebSocketEventMap: base_config_1.TYPE,
      WebSocket: base_config_1.TYPE_VALUE,
      WebTransport: base_config_1.TYPE_VALUE,
      WebTransportBidirectionalStream: base_config_1.TYPE_VALUE,
      WebTransportDatagramDuplexStream: base_config_1.TYPE_VALUE,
      WebTransportError: base_config_1.TYPE_VALUE,
      WheelEvent: base_config_1.TYPE_VALUE,
      WindowEventMap: base_config_1.TYPE,
      Window: base_config_1.TYPE_VALUE,
      WindowEventHandlersEventMap: base_config_1.TYPE,
      WindowEventHandlers: base_config_1.TYPE,
      WindowLocalStorage: base_config_1.TYPE,
      WindowOrWorkerGlobalScope: base_config_1.TYPE,
      WindowSessionStorage: base_config_1.TYPE,
      WorkerEventMap: base_config_1.TYPE,
      Worker: base_config_1.TYPE_VALUE,
      Worklet: base_config_1.TYPE_VALUE,
      WritableStream: base_config_1.TYPE_VALUE,
      WritableStreamDefaultController: base_config_1.TYPE_VALUE,
      WritableStreamDefaultWriter: base_config_1.TYPE_VALUE,
      XMLDocument: base_config_1.TYPE_VALUE,
      XMLHttpRequestEventMap: base_config_1.TYPE,
      XMLHttpRequest: base_config_1.TYPE_VALUE,
      XMLHttpRequestEventTargetEventMap: base_config_1.TYPE,
      XMLHttpRequestEventTarget: base_config_1.TYPE_VALUE,
      XMLHttpRequestUpload: base_config_1.TYPE_VALUE,
      XMLSerializer: base_config_1.TYPE_VALUE,
      XPathEvaluator: base_config_1.TYPE_VALUE,
      XPathEvaluatorBase: base_config_1.TYPE,
      XPathExpression: base_config_1.TYPE_VALUE,
      XPathResult: base_config_1.TYPE_VALUE,
      XSLTProcessor: base_config_1.TYPE_VALUE,
      Console: base_config_1.TYPE,
      CSS: base_config_1.TYPE_VALUE,
      WebAssembly: base_config_1.TYPE_VALUE,
      BlobCallback: base_config_1.TYPE,
      CustomElementConstructor: base_config_1.TYPE,
      DecodeErrorCallback: base_config_1.TYPE,
      DecodeSuccessCallback: base_config_1.TYPE,
      EncodedVideoChunkOutputCallback: base_config_1.TYPE,
      ErrorCallback: base_config_1.TYPE,
      FileCallback: base_config_1.TYPE,
      FileSystemEntriesCallback: base_config_1.TYPE,
      FileSystemEntryCallback: base_config_1.TYPE,
      FrameRequestCallback: base_config_1.TYPE,
      FunctionStringCallback: base_config_1.TYPE,
      IdleRequestCallback: base_config_1.TYPE,
      IntersectionObserverCallback: base_config_1.TYPE,
      LockGrantedCallback: base_config_1.TYPE,
      MediaSessionActionHandler: base_config_1.TYPE,
      MutationCallback: base_config_1.TYPE,
      NotificationPermissionCallback: base_config_1.TYPE,
      OnBeforeUnloadEventHandlerNonNull: base_config_1.TYPE,
      OnErrorEventHandlerNonNull: base_config_1.TYPE,
      PerformanceObserverCallback: base_config_1.TYPE,
      PositionCallback: base_config_1.TYPE,
      PositionErrorCallback: base_config_1.TYPE,
      QueuingStrategySize: base_config_1.TYPE,
      RTCPeerConnectionErrorCallback: base_config_1.TYPE,
      RTCSessionDescriptionCallback: base_config_1.TYPE,
      RemotePlaybackAvailabilityCallback: base_config_1.TYPE,
      ReportingObserverCallback: base_config_1.TYPE,
      ResizeObserverCallback: base_config_1.TYPE,
      TransformerFlushCallback: base_config_1.TYPE,
      TransformerStartCallback: base_config_1.TYPE,
      TransformerTransformCallback: base_config_1.TYPE,
      UnderlyingSinkAbortCallback: base_config_1.TYPE,
      UnderlyingSinkCloseCallback: base_config_1.TYPE,
      UnderlyingSinkStartCallback: base_config_1.TYPE,
      UnderlyingSinkWriteCallback: base_config_1.TYPE,
      UnderlyingSourceCancelCallback: base_config_1.TYPE,
      UnderlyingSourcePullCallback: base_config_1.TYPE,
      UnderlyingSourceStartCallback: base_config_1.TYPE,
      VideoFrameOutputCallback: base_config_1.TYPE,
      VideoFrameRequestCallback: base_config_1.TYPE,
      VoidFunction: base_config_1.TYPE,
      WebCodecsErrorCallback: base_config_1.TYPE,
      HTMLElementTagNameMap: base_config_1.TYPE,
      HTMLElementDeprecatedTagNameMap: base_config_1.TYPE,
      SVGElementTagNameMap: base_config_1.TYPE,
      MathMLElementTagNameMap: base_config_1.TYPE,
      ElementTagNameMap: base_config_1.TYPE,
      AlgorithmIdentifier: base_config_1.TYPE,
      AllowSharedBufferSource: base_config_1.TYPE,
      AutoFill: base_config_1.TYPE,
      AutoFillField: base_config_1.TYPE,
      AutoFillSection: base_config_1.TYPE,
      BigInteger: base_config_1.TYPE,
      BinaryData: base_config_1.TYPE,
      BlobPart: base_config_1.TYPE,
      BodyInit: base_config_1.TYPE,
      BufferSource: base_config_1.TYPE,
      COSEAlgorithmIdentifier: base_config_1.TYPE,
      CSSKeywordish: base_config_1.TYPE,
      CSSNumberish: base_config_1.TYPE,
      CSSPerspectiveValue: base_config_1.TYPE,
      CSSUnparsedSegment: base_config_1.TYPE,
      CanvasImageSource: base_config_1.TYPE,
      ClipboardItemData: base_config_1.TYPE,
      ClipboardItems: base_config_1.TYPE,
      ConstrainBoolean: base_config_1.TYPE,
      ConstrainDOMString: base_config_1.TYPE,
      ConstrainDouble: base_config_1.TYPE,
      ConstrainULong: base_config_1.TYPE,
      DOMHighResTimeStamp: base_config_1.TYPE,
      EpochTimeStamp: base_config_1.TYPE,
      EventListenerOrEventListenerObject: base_config_1.TYPE,
      FileSystemWriteChunkType: base_config_1.TYPE,
      Float32List: base_config_1.TYPE,
      FormDataEntryValue: base_config_1.TYPE,
      GLbitfield: base_config_1.TYPE,
      GLboolean: base_config_1.TYPE,
      GLclampf: base_config_1.TYPE,
      GLenum: base_config_1.TYPE,
      GLfloat: base_config_1.TYPE,
      GLint: base_config_1.TYPE,
      GLint64: base_config_1.TYPE,
      GLintptr: base_config_1.TYPE,
      GLsizei: base_config_1.TYPE,
      GLsizeiptr: base_config_1.TYPE,
      GLuint: base_config_1.TYPE,
      GLuint64: base_config_1.TYPE,
      HTMLOrSVGImageElement: base_config_1.TYPE,
      HTMLOrSVGScriptElement: base_config_1.TYPE,
      HashAlgorithmIdentifier: base_config_1.TYPE,
      HeadersInit: base_config_1.TYPE,
      IDBValidKey: base_config_1.TYPE,
      ImageBitmapSource: base_config_1.TYPE,
      Int32List: base_config_1.TYPE,
      LineAndPositionSetting: base_config_1.TYPE,
      MediaProvider: base_config_1.TYPE,
      MessageEventSource: base_config_1.TYPE,
      MutationRecordType: base_config_1.TYPE,
      NamedCurve: base_config_1.TYPE,
      OffscreenRenderingContext: base_config_1.TYPE,
      OnBeforeUnloadEventHandler: base_config_1.TYPE,
      OnErrorEventHandler: base_config_1.TYPE,
      OptionalPostfixToken: base_config_1.TYPE,
      OptionalPrefixToken: base_config_1.TYPE,
      PerformanceEntryList: base_config_1.TYPE,
      RTCRtpTransform: base_config_1.TYPE,
      ReadableStreamController: base_config_1.TYPE,
      ReadableStreamReadResult: base_config_1.TYPE,
      ReadableStreamReader: base_config_1.TYPE,
      RenderingContext: base_config_1.TYPE,
      ReportList: base_config_1.TYPE,
      RequestInfo: base_config_1.TYPE,
      TexImageSource: base_config_1.TYPE,
      TimerHandler: base_config_1.TYPE,
      Transferable: base_config_1.TYPE,
      Uint32List: base_config_1.TYPE,
      VibratePattern: base_config_1.TYPE,
      WindowProxy: base_config_1.TYPE,
      XMLHttpRequestBodyInit: base_config_1.TYPE,
      AlignSetting: base_config_1.TYPE,
      AlphaOption: base_config_1.TYPE,
      AnimationPlayState: base_config_1.TYPE,
      AnimationReplaceState: base_config_1.TYPE,
      AppendMode: base_config_1.TYPE,
      AttestationConveyancePreference: base_config_1.TYPE,
      AudioContextLatencyCategory: base_config_1.TYPE,
      AudioContextState: base_config_1.TYPE,
      AuthenticatorAttachment: base_config_1.TYPE,
      AuthenticatorTransport: base_config_1.TYPE,
      AutoFillAddressKind: base_config_1.TYPE,
      AutoFillBase: base_config_1.TYPE,
      AutoFillContactField: base_config_1.TYPE,
      AutoFillContactKind: base_config_1.TYPE,
      AutoFillCredentialField: base_config_1.TYPE,
      AutoFillNormalField: base_config_1.TYPE,
      AutoKeyword: base_config_1.TYPE,
      AutomationRate: base_config_1.TYPE,
      AvcBitstreamFormat: base_config_1.TYPE,
      BinaryType: base_config_1.TYPE,
      BiquadFilterType: base_config_1.TYPE,
      CSSMathOperator: base_config_1.TYPE,
      CSSNumericBaseType: base_config_1.TYPE,
      CanPlayTypeResult: base_config_1.TYPE,
      CanvasDirection: base_config_1.TYPE,
      CanvasFillRule: base_config_1.TYPE,
      CanvasFontKerning: base_config_1.TYPE,
      CanvasFontStretch: base_config_1.TYPE,
      CanvasFontVariantCaps: base_config_1.TYPE,
      CanvasLineCap: base_config_1.TYPE,
      CanvasLineJoin: base_config_1.TYPE,
      CanvasTextAlign: base_config_1.TYPE,
      CanvasTextBaseline: base_config_1.TYPE,
      CanvasTextRendering: base_config_1.TYPE,
      ChannelCountMode: base_config_1.TYPE,
      ChannelInterpretation: base_config_1.TYPE,
      ClientTypes: base_config_1.TYPE,
      CodecState: base_config_1.TYPE,
      ColorGamut: base_config_1.TYPE,
      ColorSpaceConversion: base_config_1.TYPE,
      CompositeOperation: base_config_1.TYPE,
      CompositeOperationOrAuto: base_config_1.TYPE,
      CompressionFormat: base_config_1.TYPE,
      CredentialMediationRequirement: base_config_1.TYPE,
      DOMParserSupportedType: base_config_1.TYPE,
      DirectionSetting: base_config_1.TYPE,
      DisplayCaptureSurfaceType: base_config_1.TYPE,
      DistanceModelType: base_config_1.TYPE,
      DocumentReadyState: base_config_1.TYPE,
      DocumentVisibilityState: base_config_1.TYPE,
      EncodedVideoChunkType: base_config_1.TYPE,
      EndOfStreamError: base_config_1.TYPE,
      EndingType: base_config_1.TYPE,
      FileSystemHandleKind: base_config_1.TYPE,
      FillMode: base_config_1.TYPE,
      FontDisplay: base_config_1.TYPE,
      FontFaceLoadStatus: base_config_1.TYPE,
      FontFaceSetLoadStatus: base_config_1.TYPE,
      FullscreenNavigationUI: base_config_1.TYPE,
      GamepadHapticActuatorType: base_config_1.TYPE,
      GamepadHapticEffectType: base_config_1.TYPE,
      GamepadHapticsResult: base_config_1.TYPE,
      GamepadMappingType: base_config_1.TYPE,
      GlobalCompositeOperation: base_config_1.TYPE,
      HardwareAcceleration: base_config_1.TYPE,
      HdrMetadataType: base_config_1.TYPE,
      HighlightType: base_config_1.TYPE,
      IDBCursorDirection: base_config_1.TYPE,
      IDBRequestReadyState: base_config_1.TYPE,
      IDBTransactionDurability: base_config_1.TYPE,
      IDBTransactionMode: base_config_1.TYPE,
      ImageOrientation: base_config_1.TYPE,
      ImageSmoothingQuality: base_config_1.TYPE,
      InsertPosition: base_config_1.TYPE,
      IterationCompositeOperation: base_config_1.TYPE,
      KeyFormat: base_config_1.TYPE,
      KeyType: base_config_1.TYPE,
      KeyUsage: base_config_1.TYPE,
      LatencyMode: base_config_1.TYPE,
      LineAlignSetting: base_config_1.TYPE,
      LockMode: base_config_1.TYPE,
      MIDIPortConnectionState: base_config_1.TYPE,
      MIDIPortDeviceState: base_config_1.TYPE,
      MIDIPortType: base_config_1.TYPE,
      MediaDecodingType: base_config_1.TYPE,
      MediaDeviceKind: base_config_1.TYPE,
      MediaEncodingType: base_config_1.TYPE,
      MediaKeyMessageType: base_config_1.TYPE,
      MediaKeySessionClosedReason: base_config_1.TYPE,
      MediaKeySessionType: base_config_1.TYPE,
      MediaKeyStatus: base_config_1.TYPE,
      MediaKeysRequirement: base_config_1.TYPE,
      MediaSessionAction: base_config_1.TYPE,
      MediaSessionPlaybackState: base_config_1.TYPE,
      MediaStreamTrackState: base_config_1.TYPE,
      NavigationTimingType: base_config_1.TYPE,
      NotificationDirection: base_config_1.TYPE,
      NotificationPermission: base_config_1.TYPE,
      OffscreenRenderingContextId: base_config_1.TYPE,
      OrientationType: base_config_1.TYPE,
      OscillatorType: base_config_1.TYPE,
      OverSampleType: base_config_1.TYPE,
      PanningModelType: base_config_1.TYPE,
      PaymentComplete: base_config_1.TYPE,
      PermissionName: base_config_1.TYPE,
      PermissionState: base_config_1.TYPE,
      PlaybackDirection: base_config_1.TYPE,
      PositionAlignSetting: base_config_1.TYPE,
      PredefinedColorSpace: base_config_1.TYPE,
      PremultiplyAlpha: base_config_1.TYPE,
      PresentationStyle: base_config_1.TYPE,
      PublicKeyCredentialType: base_config_1.TYPE,
      PushEncryptionKeyName: base_config_1.TYPE,
      RTCBundlePolicy: base_config_1.TYPE,
      RTCDataChannelState: base_config_1.TYPE,
      RTCDegradationPreference: base_config_1.TYPE,
      RTCDtlsTransportState: base_config_1.TYPE,
      RTCEncodedVideoFrameType: base_config_1.TYPE,
      RTCErrorDetailType: base_config_1.TYPE,
      RTCIceCandidateType: base_config_1.TYPE,
      RTCIceComponent: base_config_1.TYPE,
      RTCIceConnectionState: base_config_1.TYPE,
      RTCIceGathererState: base_config_1.TYPE,
      RTCIceGatheringState: base_config_1.TYPE,
      RTCIceProtocol: base_config_1.TYPE,
      RTCIceTcpCandidateType: base_config_1.TYPE,
      RTCIceTransportPolicy: base_config_1.TYPE,
      RTCIceTransportState: base_config_1.TYPE,
      RTCPeerConnectionState: base_config_1.TYPE,
      RTCPriorityType: base_config_1.TYPE,
      RTCRtcpMuxPolicy: base_config_1.TYPE,
      RTCRtpTransceiverDirection: base_config_1.TYPE,
      RTCSctpTransportState: base_config_1.TYPE,
      RTCSdpType: base_config_1.TYPE,
      RTCSignalingState: base_config_1.TYPE,
      RTCStatsIceCandidatePairState: base_config_1.TYPE,
      RTCStatsType: base_config_1.TYPE,
      ReadableStreamReaderMode: base_config_1.TYPE,
      ReadableStreamType: base_config_1.TYPE,
      ReadyState: base_config_1.TYPE,
      RecordingState: base_config_1.TYPE,
      ReferrerPolicy: base_config_1.TYPE,
      RemotePlaybackState: base_config_1.TYPE,
      RequestCache: base_config_1.TYPE,
      RequestCredentials: base_config_1.TYPE,
      RequestDestination: base_config_1.TYPE,
      RequestMode: base_config_1.TYPE,
      RequestPriority: base_config_1.TYPE,
      RequestRedirect: base_config_1.TYPE,
      ResidentKeyRequirement: base_config_1.TYPE,
      ResizeObserverBoxOptions: base_config_1.TYPE,
      ResizeQuality: base_config_1.TYPE,
      ResponseType: base_config_1.TYPE,
      ScrollBehavior: base_config_1.TYPE,
      ScrollLogicalPosition: base_config_1.TYPE,
      ScrollRestoration: base_config_1.TYPE,
      ScrollSetting: base_config_1.TYPE,
      SecurityPolicyViolationEventDisposition: base_config_1.TYPE,
      SelectionMode: base_config_1.TYPE,
      ServiceWorkerState: base_config_1.TYPE,
      ServiceWorkerUpdateViaCache: base_config_1.TYPE,
      ShadowRootMode: base_config_1.TYPE,
      SlotAssignmentMode: base_config_1.TYPE,
      SpeechSynthesisErrorCode: base_config_1.TYPE,
      TextTrackKind: base_config_1.TYPE,
      TextTrackMode: base_config_1.TYPE,
      TouchType: base_config_1.TYPE,
      TransferFunction: base_config_1.TYPE,
      UserVerificationRequirement: base_config_1.TYPE,
      VideoColorPrimaries: base_config_1.TYPE,
      VideoEncoderBitrateMode: base_config_1.TYPE,
      VideoFacingModeEnum: base_config_1.TYPE,
      VideoMatrixCoefficients: base_config_1.TYPE,
      VideoPixelFormat: base_config_1.TYPE,
      VideoTransferCharacteristics: base_config_1.TYPE,
      WakeLockType: base_config_1.TYPE,
      WebGLPowerPreference: base_config_1.TYPE,
      WebTransportCongestionControl: base_config_1.TYPE,
      WebTransportErrorSource: base_config_1.TYPE,
      WorkerType: base_config_1.TYPE,
      WriteCommandType: base_config_1.TYPE,
      XMLHttpRequestResponseType: base_config_1.TYPE
    };
  }
});

// node_modules/.pnpm/@typescript-eslint+scope-manager@7.10.0/node_modules/@typescript-eslint/scope-manager/dist/lib/dom.asynciterable.js
var require_dom_asynciterable = __commonJS({
  "node_modules/.pnpm/@typescript-eslint+scope-manager@7.10.0/node_modules/@typescript-eslint/scope-manager/dist/lib/dom.asynciterable.js"(exports2) {
    "use strict";
    init_cjs_shims();
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.dom_asynciterable = void 0;
    var base_config_1 = require_base_config();
    exports2.dom_asynciterable = {
      FileSystemDirectoryHandle: base_config_1.TYPE
    };
  }
});

// node_modules/.pnpm/@typescript-eslint+scope-manager@7.10.0/node_modules/@typescript-eslint/scope-manager/dist/lib/dom.iterable.js
var require_dom_iterable = __commonJS({
  "node_modules/.pnpm/@typescript-eslint+scope-manager@7.10.0/node_modules/@typescript-eslint/scope-manager/dist/lib/dom.iterable.js"(exports2) {
    "use strict";
    init_cjs_shims();
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.dom_iterable = void 0;
    var base_config_1 = require_base_config();
    exports2.dom_iterable = {
      AudioParam: base_config_1.TYPE,
      AudioParamMap: base_config_1.TYPE,
      BaseAudioContext: base_config_1.TYPE,
      CSSKeyframesRule: base_config_1.TYPE,
      CSSNumericArray: base_config_1.TYPE,
      CSSRuleList: base_config_1.TYPE,
      CSSStyleDeclaration: base_config_1.TYPE,
      CSSTransformValue: base_config_1.TYPE,
      CSSUnparsedValue: base_config_1.TYPE,
      Cache: base_config_1.TYPE,
      CanvasPath: base_config_1.TYPE,
      CanvasPathDrawingStyles: base_config_1.TYPE,
      DOMRectList: base_config_1.TYPE,
      DOMStringList: base_config_1.TYPE,
      DOMTokenList: base_config_1.TYPE,
      DataTransferItemList: base_config_1.TYPE,
      EventCounts: base_config_1.TYPE,
      FileList: base_config_1.TYPE,
      FontFaceSet: base_config_1.TYPE,
      FormData: base_config_1.TYPE,
      HTMLAllCollection: base_config_1.TYPE,
      HTMLCollectionBase: base_config_1.TYPE,
      HTMLCollectionOf: base_config_1.TYPE,
      HTMLFormElement: base_config_1.TYPE,
      HTMLSelectElement: base_config_1.TYPE,
      Headers: base_config_1.TYPE,
      Highlight: base_config_1.TYPE,
      HighlightRegistry: base_config_1.TYPE,
      IDBDatabase: base_config_1.TYPE,
      IDBObjectStore: base_config_1.TYPE,
      MIDIInputMap: base_config_1.TYPE,
      MIDIOutput: base_config_1.TYPE,
      MIDIOutputMap: base_config_1.TYPE,
      MediaKeyStatusMap: base_config_1.TYPE,
      MediaList: base_config_1.TYPE,
      MessageEvent: base_config_1.TYPE,
      MimeTypeArray: base_config_1.TYPE,
      NamedNodeMap: base_config_1.TYPE,
      Navigator: base_config_1.TYPE,
      NodeList: base_config_1.TYPE,
      NodeListOf: base_config_1.TYPE,
      Plugin: base_config_1.TYPE,
      PluginArray: base_config_1.TYPE,
      RTCRtpTransceiver: base_config_1.TYPE,
      RTCStatsReport: base_config_1.TYPE,
      SVGLengthList: base_config_1.TYPE,
      SVGNumberList: base_config_1.TYPE,
      SVGPointList: base_config_1.TYPE,
      SVGStringList: base_config_1.TYPE,
      SVGTransformList: base_config_1.TYPE,
      SourceBufferList: base_config_1.TYPE,
      SpeechRecognitionResult: base_config_1.TYPE,
      SpeechRecognitionResultList: base_config_1.TYPE,
      StylePropertyMapReadOnly: base_config_1.TYPE,
      StyleSheetList: base_config_1.TYPE,
      SubtleCrypto: base_config_1.TYPE,
      TextTrackCueList: base_config_1.TYPE,
      TextTrackList: base_config_1.TYPE,
      TouchList: base_config_1.TYPE,
      URLSearchParams: base_config_1.TYPE,
      WEBGL_draw_buffers: base_config_1.TYPE,
      WEBGL_multi_draw: base_config_1.TYPE,
      WebGL2RenderingContextBase: base_config_1.TYPE,
      WebGL2RenderingContextOverloads: base_config_1.TYPE,
      WebGLRenderingContextBase: base_config_1.TYPE,
      WebGLRenderingContextOverloads: base_config_1.TYPE
    };
  }
});

// node_modules/.pnpm/@typescript-eslint+scope-manager@7.10.0/node_modules/@typescript-eslint/scope-manager/dist/lib/es5.js
var require_es5 = __commonJS({
  "node_modules/.pnpm/@typescript-eslint+scope-manager@7.10.0/node_modules/@typescript-eslint/scope-manager/dist/lib/es5.js"(exports2) {
    "use strict";
    init_cjs_shims();
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.es5 = void 0;
    var base_config_1 = require_base_config();
    var decorators_1 = require_decorators();
    var decorators_legacy_1 = require_decorators_legacy();
    exports2.es5 = {
      ...decorators_1.decorators,
      ...decorators_legacy_1.decorators_legacy,
      Symbol: base_config_1.TYPE,
      PropertyKey: base_config_1.TYPE,
      PropertyDescriptor: base_config_1.TYPE,
      PropertyDescriptorMap: base_config_1.TYPE,
      Object: base_config_1.TYPE_VALUE,
      ObjectConstructor: base_config_1.TYPE,
      Function: base_config_1.TYPE_VALUE,
      FunctionConstructor: base_config_1.TYPE,
      ThisParameterType: base_config_1.TYPE,
      OmitThisParameter: base_config_1.TYPE,
      CallableFunction: base_config_1.TYPE,
      NewableFunction: base_config_1.TYPE,
      IArguments: base_config_1.TYPE,
      String: base_config_1.TYPE_VALUE,
      StringConstructor: base_config_1.TYPE,
      Boolean: base_config_1.TYPE_VALUE,
      BooleanConstructor: base_config_1.TYPE,
      Number: base_config_1.TYPE_VALUE,
      NumberConstructor: base_config_1.TYPE,
      TemplateStringsArray: base_config_1.TYPE,
      ImportMeta: base_config_1.TYPE,
      ImportCallOptions: base_config_1.TYPE,
      ImportAssertions: base_config_1.TYPE,
      ImportAttributes: base_config_1.TYPE,
      Math: base_config_1.TYPE_VALUE,
      Date: base_config_1.TYPE_VALUE,
      DateConstructor: base_config_1.TYPE,
      RegExpMatchArray: base_config_1.TYPE,
      RegExpExecArray: base_config_1.TYPE,
      RegExp: base_config_1.TYPE_VALUE,
      RegExpConstructor: base_config_1.TYPE,
      Error: base_config_1.TYPE_VALUE,
      ErrorConstructor: base_config_1.TYPE,
      EvalError: base_config_1.TYPE_VALUE,
      EvalErrorConstructor: base_config_1.TYPE,
      RangeError: base_config_1.TYPE_VALUE,
      RangeErrorConstructor: base_config_1.TYPE,
      ReferenceError: base_config_1.TYPE_VALUE,
      ReferenceErrorConstructor: base_config_1.TYPE,
      SyntaxError: base_config_1.TYPE_VALUE,
      SyntaxErrorConstructor: base_config_1.TYPE,
      TypeError: base_config_1.TYPE_VALUE,
      TypeErrorConstructor: base_config_1.TYPE,
      URIError: base_config_1.TYPE_VALUE,
      URIErrorConstructor: base_config_1.TYPE,
      JSON: base_config_1.TYPE_VALUE,
      ReadonlyArray: base_config_1.TYPE,
      ConcatArray: base_config_1.TYPE,
      Array: base_config_1.TYPE_VALUE,
      ArrayConstructor: base_config_1.TYPE,
      TypedPropertyDescriptor: base_config_1.TYPE,
      PromiseConstructorLike: base_config_1.TYPE,
      PromiseLike: base_config_1.TYPE,
      Promise: base_config_1.TYPE,
      Awaited: base_config_1.TYPE,
      ArrayLike: base_config_1.TYPE,
      Partial: base_config_1.TYPE,
      Required: base_config_1.TYPE,
      Readonly: base_config_1.TYPE,
      Pick: base_config_1.TYPE,
      Record: base_config_1.TYPE,
      Exclude: base_config_1.TYPE,
      Extract: base_config_1.TYPE,
      Omit: base_config_1.TYPE,
      NonNullable: base_config_1.TYPE,
      Parameters: base_config_1.TYPE,
      ConstructorParameters: base_config_1.TYPE,
      ReturnType: base_config_1.TYPE,
      InstanceType: base_config_1.TYPE,
      Uppercase: base_config_1.TYPE,
      Lowercase: base_config_1.TYPE,
      Capitalize: base_config_1.TYPE,
      Uncapitalize: base_config_1.TYPE,
      NoInfer: base_config_1.TYPE,
      ThisType: base_config_1.TYPE,
      WeakKeyTypes: base_config_1.TYPE,
      WeakKey: base_config_1.TYPE,
      ArrayBuffer: base_config_1.TYPE_VALUE,
      ArrayBufferTypes: base_config_1.TYPE,
      ArrayBufferLike: base_config_1.TYPE,
      ArrayBufferConstructor: base_config_1.TYPE,
      ArrayBufferView: base_config_1.TYPE,
      DataView: base_config_1.TYPE_VALUE,
      DataViewConstructor: base_config_1.TYPE,
      Int8Array: base_config_1.TYPE_VALUE,
      Int8ArrayConstructor: base_config_1.TYPE,
      Uint8Array: base_config_1.TYPE_VALUE,
      Uint8ArrayConstructor: base_config_1.TYPE,
      Uint8ClampedArray: base_config_1.TYPE_VALUE,
      Uint8ClampedArrayConstructor: base_config_1.TYPE,
      Int16Array: base_config_1.TYPE_VALUE,
      Int16ArrayConstructor: base_config_1.TYPE,
      Uint16Array: base_config_1.TYPE_VALUE,
      Uint16ArrayConstructor: base_config_1.TYPE,
      Int32Array: base_config_1.TYPE_VALUE,
      Int32ArrayConstructor: base_config_1.TYPE,
      Uint32Array: base_config_1.TYPE_VALUE,
      Uint32ArrayConstructor: base_config_1.TYPE,
      Float32Array: base_config_1.TYPE_VALUE,
      Float32ArrayConstructor: base_config_1.TYPE,
      Float64Array: base_config_1.TYPE_VALUE,
      Float64ArrayConstructor: base_config_1.TYPE,
      Intl: base_config_1.TYPE_VALUE
    };
  }
});

// node_modules/.pnpm/@typescript-eslint+scope-manager@7.10.0/node_modules/@typescript-eslint/scope-manager/dist/lib/es2015.collection.js
var require_es2015_collection = __commonJS({
  "node_modules/.pnpm/@typescript-eslint+scope-manager@7.10.0/node_modules/@typescript-eslint/scope-manager/dist/lib/es2015.collection.js"(exports2) {
    "use strict";
    init_cjs_shims();
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.es2015_collection = void 0;
    var base_config_1 = require_base_config();
    exports2.es2015_collection = {
      Map: base_config_1.TYPE_VALUE,
      MapConstructor: base_config_1.TYPE,
      ReadonlyMap: base_config_1.TYPE,
      WeakMap: base_config_1.TYPE_VALUE,
      WeakMapConstructor: base_config_1.TYPE,
      Set: base_config_1.TYPE_VALUE,
      SetConstructor: base_config_1.TYPE,
      ReadonlySet: base_config_1.TYPE,
      WeakSet: base_config_1.TYPE_VALUE,
      WeakSetConstructor: base_config_1.TYPE
    };
  }
});

// node_modules/.pnpm/@typescript-eslint+scope-manager@7.10.0/node_modules/@typescript-eslint/scope-manager/dist/lib/es2015.core.js
var require_es2015_core = __commonJS({
  "node_modules/.pnpm/@typescript-eslint+scope-manager@7.10.0/node_modules/@typescript-eslint/scope-manager/dist/lib/es2015.core.js"(exports2) {
    "use strict";
    init_cjs_shims();
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.es2015_core = void 0;
    var base_config_1 = require_base_config();
    exports2.es2015_core = {
      Array: base_config_1.TYPE,
      ArrayConstructor: base_config_1.TYPE,
      DateConstructor: base_config_1.TYPE,
      Function: base_config_1.TYPE,
      Math: base_config_1.TYPE,
      NumberConstructor: base_config_1.TYPE,
      ObjectConstructor: base_config_1.TYPE,
      ReadonlyArray: base_config_1.TYPE,
      RegExp: base_config_1.TYPE,
      RegExpConstructor: base_config_1.TYPE,
      String: base_config_1.TYPE,
      StringConstructor: base_config_1.TYPE
    };
  }
});

// node_modules/.pnpm/@typescript-eslint+scope-manager@7.10.0/node_modules/@typescript-eslint/scope-manager/dist/lib/es2015.symbol.js
var require_es2015_symbol = __commonJS({
  "node_modules/.pnpm/@typescript-eslint+scope-manager@7.10.0/node_modules/@typescript-eslint/scope-manager/dist/lib/es2015.symbol.js"(exports2) {
    "use strict";
    init_cjs_shims();
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.es2015_symbol = void 0;
    var base_config_1 = require_base_config();
    exports2.es2015_symbol = {
      SymbolConstructor: base_config_1.TYPE
    };
  }
});

// node_modules/.pnpm/@typescript-eslint+scope-manager@7.10.0/node_modules/@typescript-eslint/scope-manager/dist/lib/es2015.iterable.js
var require_es2015_iterable = __commonJS({
  "node_modules/.pnpm/@typescript-eslint+scope-manager@7.10.0/node_modules/@typescript-eslint/scope-manager/dist/lib/es2015.iterable.js"(exports2) {
    "use strict";
    init_cjs_shims();
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.es2015_iterable = void 0;
    var base_config_1 = require_base_config();
    var es2015_symbol_1 = require_es2015_symbol();
    exports2.es2015_iterable = {
      ...es2015_symbol_1.es2015_symbol,
      SymbolConstructor: base_config_1.TYPE,
      IteratorYieldResult: base_config_1.TYPE,
      IteratorReturnResult: base_config_1.TYPE,
      IteratorResult: base_config_1.TYPE,
      Iterator: base_config_1.TYPE,
      Iterable: base_config_1.TYPE,
      IterableIterator: base_config_1.TYPE,
      Array: base_config_1.TYPE,
      ArrayConstructor: base_config_1.TYPE,
      ReadonlyArray: base_config_1.TYPE,
      IArguments: base_config_1.TYPE,
      Map: base_config_1.TYPE,
      ReadonlyMap: base_config_1.TYPE,
      MapConstructor: base_config_1.TYPE,
      WeakMap: base_config_1.TYPE,
      WeakMapConstructor: base_config_1.TYPE,
      Set: base_config_1.TYPE,
      ReadonlySet: base_config_1.TYPE,
      SetConstructor: base_config_1.TYPE,
      WeakSet: base_config_1.TYPE,
      WeakSetConstructor: base_config_1.TYPE,
      Promise: base_config_1.TYPE,
      PromiseConstructor: base_config_1.TYPE,
      String: base_config_1.TYPE,
      Int8Array: base_config_1.TYPE,
      Int8ArrayConstructor: base_config_1.TYPE,
      Uint8Array: base_config_1.TYPE,
      Uint8ArrayConstructor: base_config_1.TYPE,
      Uint8ClampedArray: base_config_1.TYPE,
      Uint8ClampedArrayConstructor: base_config_1.TYPE,
      Int16Array: base_config_1.TYPE,
      Int16ArrayConstructor: base_config_1.TYPE,
      Uint16Array: base_config_1.TYPE,
      Uint16ArrayConstructor: base_config_1.TYPE,
      Int32Array: base_config_1.TYPE,
      Int32ArrayConstructor: base_config_1.TYPE,
      Uint32Array: base_config_1.TYPE,
      Uint32ArrayConstructor: base_config_1.TYPE,
      Float32Array: base_config_1.TYPE,
      Float32ArrayConstructor: base_config_1.TYPE,
      Float64Array: base_config_1.TYPE,
      Float64ArrayConstructor: base_config_1.TYPE
    };
  }
});

// node_modules/.pnpm/@typescript-eslint+scope-manager@7.10.0/node_modules/@typescript-eslint/scope-manager/dist/lib/es2015.generator.js
var require_es2015_generator = __commonJS({
  "node_modules/.pnpm/@typescript-eslint+scope-manager@7.10.0/node_modules/@typescript-eslint/scope-manager/dist/lib/es2015.generator.js"(exports2) {
    "use strict";
    init_cjs_shims();
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.es2015_generator = void 0;
    var base_config_1 = require_base_config();
    var es2015_iterable_1 = require_es2015_iterable();
    exports2.es2015_generator = {
      ...es2015_iterable_1.es2015_iterable,
      Generator: base_config_1.TYPE,
      GeneratorFunction: base_config_1.TYPE,
      GeneratorFunctionConstructor: base_config_1.TYPE
    };
  }
});

// node_modules/.pnpm/@typescript-eslint+scope-manager@7.10.0/node_modules/@typescript-eslint/scope-manager/dist/lib/es2015.promise.js
var require_es2015_promise = __commonJS({
  "node_modules/.pnpm/@typescript-eslint+scope-manager@7.10.0/node_modules/@typescript-eslint/scope-manager/dist/lib/es2015.promise.js"(exports2) {
    "use strict";
    init_cjs_shims();
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.es2015_promise = void 0;
    var base_config_1 = require_base_config();
    exports2.es2015_promise = {
      PromiseConstructor: base_config_1.TYPE
    };
  }
});

// node_modules/.pnpm/@typescript-eslint+scope-manager@7.10.0/node_modules/@typescript-eslint/scope-manager/dist/lib/es2015.proxy.js
var require_es2015_proxy = __commonJS({
  "node_modules/.pnpm/@typescript-eslint+scope-manager@7.10.0/node_modules/@typescript-eslint/scope-manager/dist/lib/es2015.proxy.js"(exports2) {
    "use strict";
    init_cjs_shims();
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.es2015_proxy = void 0;
    var base_config_1 = require_base_config();
    exports2.es2015_proxy = {
      ProxyHandler: base_config_1.TYPE,
      ProxyConstructor: base_config_1.TYPE
    };
  }
});

// node_modules/.pnpm/@typescript-eslint+scope-manager@7.10.0/node_modules/@typescript-eslint/scope-manager/dist/lib/es2015.reflect.js
var require_es2015_reflect = __commonJS({
  "node_modules/.pnpm/@typescript-eslint+scope-manager@7.10.0/node_modules/@typescript-eslint/scope-manager/dist/lib/es2015.reflect.js"(exports2) {
    "use strict";
    init_cjs_shims();
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.es2015_reflect = void 0;
    var base_config_1 = require_base_config();
    exports2.es2015_reflect = {
      Reflect: base_config_1.TYPE_VALUE
    };
  }
});

// node_modules/.pnpm/@typescript-eslint+scope-manager@7.10.0/node_modules/@typescript-eslint/scope-manager/dist/lib/es2015.symbol.wellknown.js
var require_es2015_symbol_wellknown = __commonJS({
  "node_modules/.pnpm/@typescript-eslint+scope-manager@7.10.0/node_modules/@typescript-eslint/scope-manager/dist/lib/es2015.symbol.wellknown.js"(exports2) {
    "use strict";
    init_cjs_shims();
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.es2015_symbol_wellknown = void 0;
    var base_config_1 = require_base_config();
    var es2015_symbol_1 = require_es2015_symbol();
    exports2.es2015_symbol_wellknown = {
      ...es2015_symbol_1.es2015_symbol,
      SymbolConstructor: base_config_1.TYPE,
      Symbol: base_config_1.TYPE,
      Array: base_config_1.TYPE,
      ReadonlyArray: base_config_1.TYPE,
      Date: base_config_1.TYPE,
      Map: base_config_1.TYPE,
      WeakMap: base_config_1.TYPE,
      Set: base_config_1.TYPE,
      WeakSet: base_config_1.TYPE,
      JSON: base_config_1.TYPE,
      Function: base_config_1.TYPE,
      GeneratorFunction: base_config_1.TYPE,
      Math: base_config_1.TYPE,
      Promise: base_config_1.TYPE,
      PromiseConstructor: base_config_1.TYPE,
      RegExp: base_config_1.TYPE,
      RegExpConstructor: base_config_1.TYPE,
      String: base_config_1.TYPE,
      ArrayBuffer: base_config_1.TYPE,
      DataView: base_config_1.TYPE,
      Int8Array: base_config_1.TYPE,
      Uint8Array: base_config_1.TYPE,
      Uint8ClampedArray: base_config_1.TYPE,
      Int16Array: base_config_1.TYPE,
      Uint16Array: base_config_1.TYPE,
      Int32Array: base_config_1.TYPE,
      Uint32Array: base_config_1.TYPE,
      Float32Array: base_config_1.TYPE,
      Float64Array: base_config_1.TYPE,
      ArrayConstructor: base_config_1.TYPE,
      MapConstructor: base_config_1.TYPE,
      SetConstructor: base_config_1.TYPE,
      ArrayBufferConstructor: base_config_1.TYPE
    };
  }
});

// node_modules/.pnpm/@typescript-eslint+scope-manager@7.10.0/node_modules/@typescript-eslint/scope-manager/dist/lib/es6.js
var require_es6 = __commonJS({
  "node_modules/.pnpm/@typescript-eslint+scope-manager@7.10.0/node_modules/@typescript-eslint/scope-manager/dist/lib/es6.js"(exports2) {
    "use strict";
    init_cjs_shims();
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.es6 = void 0;
    var es5_1 = require_es5();
    var es2015_collection_1 = require_es2015_collection();
    var es2015_core_1 = require_es2015_core();
    var es2015_generator_1 = require_es2015_generator();
    var es2015_iterable_1 = require_es2015_iterable();
    var es2015_promise_1 = require_es2015_promise();
    var es2015_proxy_1 = require_es2015_proxy();
    var es2015_reflect_1 = require_es2015_reflect();
    var es2015_symbol_1 = require_es2015_symbol();
    var es2015_symbol_wellknown_1 = require_es2015_symbol_wellknown();
    exports2.es6 = {
      ...es5_1.es5,
      ...es2015_core_1.es2015_core,
      ...es2015_collection_1.es2015_collection,
      ...es2015_iterable_1.es2015_iterable,
      ...es2015_generator_1.es2015_generator,
      ...es2015_promise_1.es2015_promise,
      ...es2015_proxy_1.es2015_proxy,
      ...es2015_reflect_1.es2015_reflect,
      ...es2015_symbol_1.es2015_symbol,
      ...es2015_symbol_wellknown_1.es2015_symbol_wellknown
    };
  }
});

// node_modules/.pnpm/@typescript-eslint+scope-manager@7.10.0/node_modules/@typescript-eslint/scope-manager/dist/lib/es2015.js
var require_es2015 = __commonJS({
  "node_modules/.pnpm/@typescript-eslint+scope-manager@7.10.0/node_modules/@typescript-eslint/scope-manager/dist/lib/es2015.js"(exports2) {
    "use strict";
    init_cjs_shims();
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.es2015 = void 0;
    var es5_1 = require_es5();
    var es2015_collection_1 = require_es2015_collection();
    var es2015_core_1 = require_es2015_core();
    var es2015_generator_1 = require_es2015_generator();
    var es2015_iterable_1 = require_es2015_iterable();
    var es2015_promise_1 = require_es2015_promise();
    var es2015_proxy_1 = require_es2015_proxy();
    var es2015_reflect_1 = require_es2015_reflect();
    var es2015_symbol_1 = require_es2015_symbol();
    var es2015_symbol_wellknown_1 = require_es2015_symbol_wellknown();
    exports2.es2015 = {
      ...es5_1.es5,
      ...es2015_core_1.es2015_core,
      ...es2015_collection_1.es2015_collection,
      ...es2015_iterable_1.es2015_iterable,
      ...es2015_generator_1.es2015_generator,
      ...es2015_promise_1.es2015_promise,
      ...es2015_proxy_1.es2015_proxy,
      ...es2015_reflect_1.es2015_reflect,
      ...es2015_symbol_1.es2015_symbol,
      ...es2015_symbol_wellknown_1.es2015_symbol_wellknown
    };
  }
});

// node_modules/.pnpm/@typescript-eslint+scope-manager@7.10.0/node_modules/@typescript-eslint/scope-manager/dist/lib/es2016.array.include.js
var require_es2016_array_include = __commonJS({
  "node_modules/.pnpm/@typescript-eslint+scope-manager@7.10.0/node_modules/@typescript-eslint/scope-manager/dist/lib/es2016.array.include.js"(exports2) {
    "use strict";
    init_cjs_shims();
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.es2016_array_include = void 0;
    var base_config_1 = require_base_config();
    exports2.es2016_array_include = {
      Array: base_config_1.TYPE,
      ReadonlyArray: base_config_1.TYPE,
      Int8Array: base_config_1.TYPE,
      Uint8Array: base_config_1.TYPE,
      Uint8ClampedArray: base_config_1.TYPE,
      Int16Array: base_config_1.TYPE,
      Uint16Array: base_config_1.TYPE,
      Int32Array: base_config_1.TYPE,
      Uint32Array: base_config_1.TYPE,
      Float32Array: base_config_1.TYPE,
      Float64Array: base_config_1.TYPE
    };
  }
});

// node_modules/.pnpm/@typescript-eslint+scope-manager@7.10.0/node_modules/@typescript-eslint/scope-manager/dist/lib/es2016.intl.js
var require_es2016_intl = __commonJS({
  "node_modules/.pnpm/@typescript-eslint+scope-manager@7.10.0/node_modules/@typescript-eslint/scope-manager/dist/lib/es2016.intl.js"(exports2) {
    "use strict";
    init_cjs_shims();
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.es2016_intl = void 0;
    var base_config_1 = require_base_config();
    exports2.es2016_intl = {
      Intl: base_config_1.TYPE_VALUE
    };
  }
});

// node_modules/.pnpm/@typescript-eslint+scope-manager@7.10.0/node_modules/@typescript-eslint/scope-manager/dist/lib/es7.js
var require_es7 = __commonJS({
  "node_modules/.pnpm/@typescript-eslint+scope-manager@7.10.0/node_modules/@typescript-eslint/scope-manager/dist/lib/es7.js"(exports2) {
    "use strict";
    init_cjs_shims();
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.es7 = void 0;
    var es2015_1 = require_es2015();
    var es2016_array_include_1 = require_es2016_array_include();
    var es2016_intl_1 = require_es2016_intl();
    exports2.es7 = {
      ...es2015_1.es2015,
      ...es2016_array_include_1.es2016_array_include,
      ...es2016_intl_1.es2016_intl
    };
  }
});

// node_modules/.pnpm/@typescript-eslint+scope-manager@7.10.0/node_modules/@typescript-eslint/scope-manager/dist/lib/es2016.js
var require_es2016 = __commonJS({
  "node_modules/.pnpm/@typescript-eslint+scope-manager@7.10.0/node_modules/@typescript-eslint/scope-manager/dist/lib/es2016.js"(exports2) {
    "use strict";
    init_cjs_shims();
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.es2016 = void 0;
    var es2015_1 = require_es2015();
    var es2016_array_include_1 = require_es2016_array_include();
    var es2016_intl_1 = require_es2016_intl();
    exports2.es2016 = {
      ...es2015_1.es2015,
      ...es2016_array_include_1.es2016_array_include,
      ...es2016_intl_1.es2016_intl
    };
  }
});

// node_modules/.pnpm/@typescript-eslint+scope-manager@7.10.0/node_modules/@typescript-eslint/scope-manager/dist/lib/scripthost.js
var require_scripthost = __commonJS({
  "node_modules/.pnpm/@typescript-eslint+scope-manager@7.10.0/node_modules/@typescript-eslint/scope-manager/dist/lib/scripthost.js"(exports2) {
    "use strict";
    init_cjs_shims();
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.scripthost = void 0;
    var base_config_1 = require_base_config();
    exports2.scripthost = {
      ActiveXObject: base_config_1.TYPE_VALUE,
      ITextWriter: base_config_1.TYPE,
      TextStreamBase: base_config_1.TYPE,
      TextStreamWriter: base_config_1.TYPE,
      TextStreamReader: base_config_1.TYPE,
      SafeArray: base_config_1.TYPE_VALUE,
      Enumerator: base_config_1.TYPE_VALUE,
      EnumeratorConstructor: base_config_1.TYPE,
      VBArray: base_config_1.TYPE_VALUE,
      VBArrayConstructor: base_config_1.TYPE,
      VarDate: base_config_1.TYPE_VALUE,
      DateConstructor: base_config_1.TYPE,
      Date: base_config_1.TYPE
    };
  }
});

// node_modules/.pnpm/@typescript-eslint+scope-manager@7.10.0/node_modules/@typescript-eslint/scope-manager/dist/lib/webworker.importscripts.js
var require_webworker_importscripts = __commonJS({
  "node_modules/.pnpm/@typescript-eslint+scope-manager@7.10.0/node_modules/@typescript-eslint/scope-manager/dist/lib/webworker.importscripts.js"(exports2) {
    "use strict";
    init_cjs_shims();
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.webworker_importscripts = void 0;
    exports2.webworker_importscripts = {};
  }
});

// node_modules/.pnpm/@typescript-eslint+scope-manager@7.10.0/node_modules/@typescript-eslint/scope-manager/dist/lib/es2016.full.js
var require_es2016_full = __commonJS({
  "node_modules/.pnpm/@typescript-eslint+scope-manager@7.10.0/node_modules/@typescript-eslint/scope-manager/dist/lib/es2016.full.js"(exports2) {
    "use strict";
    init_cjs_shims();
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.es2016_full = void 0;
    var dom_1 = require_dom();
    var dom_iterable_1 = require_dom_iterable();
    var es2016_1 = require_es2016();
    var scripthost_1 = require_scripthost();
    var webworker_importscripts_1 = require_webworker_importscripts();
    exports2.es2016_full = {
      ...es2016_1.es2016,
      ...dom_1.dom,
      ...webworker_importscripts_1.webworker_importscripts,
      ...scripthost_1.scripthost,
      ...dom_iterable_1.dom_iterable
    };
  }
});

// node_modules/.pnpm/@typescript-eslint+scope-manager@7.10.0/node_modules/@typescript-eslint/scope-manager/dist/lib/es2017.date.js
var require_es2017_date = __commonJS({
  "node_modules/.pnpm/@typescript-eslint+scope-manager@7.10.0/node_modules/@typescript-eslint/scope-manager/dist/lib/es2017.date.js"(exports2) {
    "use strict";
    init_cjs_shims();
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.es2017_date = void 0;
    var base_config_1 = require_base_config();
    exports2.es2017_date = {
      DateConstructor: base_config_1.TYPE
    };
  }
});

// node_modules/.pnpm/@typescript-eslint+scope-manager@7.10.0/node_modules/@typescript-eslint/scope-manager/dist/lib/es2017.intl.js
var require_es2017_intl = __commonJS({
  "node_modules/.pnpm/@typescript-eslint+scope-manager@7.10.0/node_modules/@typescript-eslint/scope-manager/dist/lib/es2017.intl.js"(exports2) {
    "use strict";
    init_cjs_shims();
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.es2017_intl = void 0;
    var base_config_1 = require_base_config();
    exports2.es2017_intl = {
      Intl: base_config_1.TYPE_VALUE
    };
  }
});

// node_modules/.pnpm/@typescript-eslint+scope-manager@7.10.0/node_modules/@typescript-eslint/scope-manager/dist/lib/es2017.object.js
var require_es2017_object = __commonJS({
  "node_modules/.pnpm/@typescript-eslint+scope-manager@7.10.0/node_modules/@typescript-eslint/scope-manager/dist/lib/es2017.object.js"(exports2) {
    "use strict";
    init_cjs_shims();
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.es2017_object = void 0;
    var base_config_1 = require_base_config();
    exports2.es2017_object = {
      ObjectConstructor: base_config_1.TYPE
    };
  }
});

// node_modules/.pnpm/@typescript-eslint+scope-manager@7.10.0/node_modules/@typescript-eslint/scope-manager/dist/lib/es2017.sharedmemory.js
var require_es2017_sharedmemory = __commonJS({
  "node_modules/.pnpm/@typescript-eslint+scope-manager@7.10.0/node_modules/@typescript-eslint/scope-manager/dist/lib/es2017.sharedmemory.js"(exports2) {
    "use strict";
    init_cjs_shims();
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.es2017_sharedmemory = void 0;
    var base_config_1 = require_base_config();
    var es2015_symbol_1 = require_es2015_symbol();
    var es2015_symbol_wellknown_1 = require_es2015_symbol_wellknown();
    exports2.es2017_sharedmemory = {
      ...es2015_symbol_1.es2015_symbol,
      ...es2015_symbol_wellknown_1.es2015_symbol_wellknown,
      SharedArrayBuffer: base_config_1.TYPE_VALUE,
      SharedArrayBufferConstructor: base_config_1.TYPE,
      ArrayBufferTypes: base_config_1.TYPE,
      Atomics: base_config_1.TYPE_VALUE
    };
  }
});

// node_modules/.pnpm/@typescript-eslint+scope-manager@7.10.0/node_modules/@typescript-eslint/scope-manager/dist/lib/es2017.string.js
var require_es2017_string = __commonJS({
  "node_modules/.pnpm/@typescript-eslint+scope-manager@7.10.0/node_modules/@typescript-eslint/scope-manager/dist/lib/es2017.string.js"(exports2) {
    "use strict";
    init_cjs_shims();
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.es2017_string = void 0;
    var base_config_1 = require_base_config();
    exports2.es2017_string = {
      String: base_config_1.TYPE
    };
  }
});

// node_modules/.pnpm/@typescript-eslint+scope-manager@7.10.0/node_modules/@typescript-eslint/scope-manager/dist/lib/es2017.typedarrays.js
var require_es2017_typedarrays = __commonJS({
  "node_modules/.pnpm/@typescript-eslint+scope-manager@7.10.0/node_modules/@typescript-eslint/scope-manager/dist/lib/es2017.typedarrays.js"(exports2) {
    "use strict";
    init_cjs_shims();
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.es2017_typedarrays = void 0;
    var base_config_1 = require_base_config();
    exports2.es2017_typedarrays = {
      Int8ArrayConstructor: base_config_1.TYPE,
      Uint8ArrayConstructor: base_config_1.TYPE,
      Uint8ClampedArrayConstructor: base_config_1.TYPE,
      Int16ArrayConstructor: base_config_1.TYPE,
      Uint16ArrayConstructor: base_config_1.TYPE,
      Int32ArrayConstructor: base_config_1.TYPE,
      Uint32ArrayConstructor: base_config_1.TYPE,
      Float32ArrayConstructor: base_config_1.TYPE,
      Float64ArrayConstructor: base_config_1.TYPE
    };
  }
});

// node_modules/.pnpm/@typescript-eslint+scope-manager@7.10.0/node_modules/@typescript-eslint/scope-manager/dist/lib/es2017.js
var require_es2017 = __commonJS({
  "node_modules/.pnpm/@typescript-eslint+scope-manager@7.10.0/node_modules/@typescript-eslint/scope-manager/dist/lib/es2017.js"(exports2) {
    "use strict";
    init_cjs_shims();
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.es2017 = void 0;
    var es2016_1 = require_es2016();
    var es2017_date_1 = require_es2017_date();
    var es2017_intl_1 = require_es2017_intl();
    var es2017_object_1 = require_es2017_object();
    var es2017_sharedmemory_1 = require_es2017_sharedmemory();
    var es2017_string_1 = require_es2017_string();
    var es2017_typedarrays_1 = require_es2017_typedarrays();
    exports2.es2017 = {
      ...es2016_1.es2016,
      ...es2017_object_1.es2017_object,
      ...es2017_sharedmemory_1.es2017_sharedmemory,
      ...es2017_string_1.es2017_string,
      ...es2017_intl_1.es2017_intl,
      ...es2017_typedarrays_1.es2017_typedarrays,
      ...es2017_date_1.es2017_date
    };
  }
});

// node_modules/.pnpm/@typescript-eslint+scope-manager@7.10.0/node_modules/@typescript-eslint/scope-manager/dist/lib/es2017.full.js
var require_es2017_full = __commonJS({
  "node_modules/.pnpm/@typescript-eslint+scope-manager@7.10.0/node_modules/@typescript-eslint/scope-manager/dist/lib/es2017.full.js"(exports2) {
    "use strict";
    init_cjs_shims();
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.es2017_full = void 0;
    var dom_1 = require_dom();
    var dom_iterable_1 = require_dom_iterable();
    var es2017_1 = require_es2017();
    var scripthost_1 = require_scripthost();
    var webworker_importscripts_1 = require_webworker_importscripts();
    exports2.es2017_full = {
      ...es2017_1.es2017,
      ...dom_1.dom,
      ...webworker_importscripts_1.webworker_importscripts,
      ...scripthost_1.scripthost,
      ...dom_iterable_1.dom_iterable
    };
  }
});

// node_modules/.pnpm/@typescript-eslint+scope-manager@7.10.0/node_modules/@typescript-eslint/scope-manager/dist/lib/es2018.asynciterable.js
var require_es2018_asynciterable = __commonJS({
  "node_modules/.pnpm/@typescript-eslint+scope-manager@7.10.0/node_modules/@typescript-eslint/scope-manager/dist/lib/es2018.asynciterable.js"(exports2) {
    "use strict";
    init_cjs_shims();
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.es2018_asynciterable = void 0;
    var base_config_1 = require_base_config();
    var es2015_iterable_1 = require_es2015_iterable();
    var es2015_symbol_1 = require_es2015_symbol();
    exports2.es2018_asynciterable = {
      ...es2015_symbol_1.es2015_symbol,
      ...es2015_iterable_1.es2015_iterable,
      SymbolConstructor: base_config_1.TYPE,
      AsyncIterator: base_config_1.TYPE,
      AsyncIterable: base_config_1.TYPE,
      AsyncIterableIterator: base_config_1.TYPE
    };
  }
});

// node_modules/.pnpm/@typescript-eslint+scope-manager@7.10.0/node_modules/@typescript-eslint/scope-manager/dist/lib/es2018.asyncgenerator.js
var require_es2018_asyncgenerator = __commonJS({
  "node_modules/.pnpm/@typescript-eslint+scope-manager@7.10.0/node_modules/@typescript-eslint/scope-manager/dist/lib/es2018.asyncgenerator.js"(exports2) {
    "use strict";
    init_cjs_shims();
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.es2018_asyncgenerator = void 0;
    var base_config_1 = require_base_config();
    var es2018_asynciterable_1 = require_es2018_asynciterable();
    exports2.es2018_asyncgenerator = {
      ...es2018_asynciterable_1.es2018_asynciterable,
      AsyncGenerator: base_config_1.TYPE,
      AsyncGeneratorFunction: base_config_1.TYPE,
      AsyncGeneratorFunctionConstructor: base_config_1.TYPE
    };
  }
});

// node_modules/.pnpm/@typescript-eslint+scope-manager@7.10.0/node_modules/@typescript-eslint/scope-manager/dist/lib/es2018.intl.js
var require_es2018_intl = __commonJS({
  "node_modules/.pnpm/@typescript-eslint+scope-manager@7.10.0/node_modules/@typescript-eslint/scope-manager/dist/lib/es2018.intl.js"(exports2) {
    "use strict";
    init_cjs_shims();
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.es2018_intl = void 0;
    var base_config_1 = require_base_config();
    exports2.es2018_intl = {
      Intl: base_config_1.TYPE_VALUE
    };
  }
});

// node_modules/.pnpm/@typescript-eslint+scope-manager@7.10.0/node_modules/@typescript-eslint/scope-manager/dist/lib/es2018.promise.js
var require_es2018_promise = __commonJS({
  "node_modules/.pnpm/@typescript-eslint+scope-manager@7.10.0/node_modules/@typescript-eslint/scope-manager/dist/lib/es2018.promise.js"(exports2) {
    "use strict";
    init_cjs_shims();
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.es2018_promise = void 0;
    var base_config_1 = require_base_config();
    exports2.es2018_promise = {
      Promise: base_config_1.TYPE
    };
  }
});

// node_modules/.pnpm/@typescript-eslint+scope-manager@7.10.0/node_modules/@typescript-eslint/scope-manager/dist/lib/es2018.regexp.js
var require_es2018_regexp = __commonJS({
  "node_modules/.pnpm/@typescript-eslint+scope-manager@7.10.0/node_modules/@typescript-eslint/scope-manager/dist/lib/es2018.regexp.js"(exports2) {
    "use strict";
    init_cjs_shims();
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.es2018_regexp = void 0;
    var base_config_1 = require_base_config();
    exports2.es2018_regexp = {
      RegExpMatchArray: base_config_1.TYPE,
      RegExpExecArray: base_config_1.TYPE,
      RegExp: base_config_1.TYPE
    };
  }
});

// node_modules/.pnpm/@typescript-eslint+scope-manager@7.10.0/node_modules/@typescript-eslint/scope-manager/dist/lib/es2018.js
var require_es2018 = __commonJS({
  "node_modules/.pnpm/@typescript-eslint+scope-manager@7.10.0/node_modules/@typescript-eslint/scope-manager/dist/lib/es2018.js"(exports2) {
    "use strict";
    init_cjs_shims();
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.es2018 = void 0;
    var es2017_1 = require_es2017();
    var es2018_asyncgenerator_1 = require_es2018_asyncgenerator();
    var es2018_asynciterable_1 = require_es2018_asynciterable();
    var es2018_intl_1 = require_es2018_intl();
    var es2018_promise_1 = require_es2018_promise();
    var es2018_regexp_1 = require_es2018_regexp();
    exports2.es2018 = {
      ...es2017_1.es2017,
      ...es2018_asynciterable_1.es2018_asynciterable,
      ...es2018_asyncgenerator_1.es2018_asyncgenerator,
      ...es2018_promise_1.es2018_promise,
      ...es2018_regexp_1.es2018_regexp,
      ...es2018_intl_1.es2018_intl
    };
  }
});

// node_modules/.pnpm/@typescript-eslint+scope-manager@7.10.0/node_modules/@typescript-eslint/scope-manager/dist/lib/es2018.full.js
var require_es2018_full = __commonJS({
  "node_modules/.pnpm/@typescript-eslint+scope-manager@7.10.0/node_modules/@typescript-eslint/scope-manager/dist/lib/es2018.full.js"(exports2) {
    "use strict";
    init_cjs_shims();
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.es2018_full = void 0;
    var dom_1 = require_dom();
    var dom_asynciterable_1 = require_dom_asynciterable();
    var dom_iterable_1 = require_dom_iterable();
    var es2018_1 = require_es2018();
    var scripthost_1 = require_scripthost();
    var webworker_importscripts_1 = require_webworker_importscripts();
    exports2.es2018_full = {
      ...es2018_1.es2018,
      ...dom_1.dom,
      ...webworker_importscripts_1.webworker_importscripts,
      ...scripthost_1.scripthost,
      ...dom_iterable_1.dom_iterable,
      ...dom_asynciterable_1.dom_asynciterable
    };
  }
});

// node_modules/.pnpm/@typescript-eslint+scope-manager@7.10.0/node_modules/@typescript-eslint/scope-manager/dist/lib/es2019.array.js
var require_es2019_array = __commonJS({
  "node_modules/.pnpm/@typescript-eslint+scope-manager@7.10.0/node_modules/@typescript-eslint/scope-manager/dist/lib/es2019.array.js"(exports2) {
    "use strict";
    init_cjs_shims();
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.es2019_array = void 0;
    var base_config_1 = require_base_config();
    exports2.es2019_array = {
      FlatArray: base_config_1.TYPE,
      ReadonlyArray: base_config_1.TYPE,
      Array: base_config_1.TYPE
    };
  }
});

// node_modules/.pnpm/@typescript-eslint+scope-manager@7.10.0/node_modules/@typescript-eslint/scope-manager/dist/lib/es2019.intl.js
var require_es2019_intl = __commonJS({
  "node_modules/.pnpm/@typescript-eslint+scope-manager@7.10.0/node_modules/@typescript-eslint/scope-manager/dist/lib/es2019.intl.js"(exports2) {
    "use strict";
    init_cjs_shims();
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.es2019_intl = void 0;
    var base_config_1 = require_base_config();
    exports2.es2019_intl = {
      Intl: base_config_1.TYPE_VALUE
    };
  }
});

// node_modules/.pnpm/@typescript-eslint+scope-manager@7.10.0/node_modules/@typescript-eslint/scope-manager/dist/lib/es2019.object.js
var require_es2019_object = __commonJS({
  "node_modules/.pnpm/@typescript-eslint+scope-manager@7.10.0/node_modules/@typescript-eslint/scope-manager/dist/lib/es2019.object.js"(exports2) {
    "use strict";
    init_cjs_shims();
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.es2019_object = void 0;
    var base_config_1 = require_base_config();
    var es2015_iterable_1 = require_es2015_iterable();
    exports2.es2019_object = {
      ...es2015_iterable_1.es2015_iterable,
      ObjectConstructor: base_config_1.TYPE
    };
  }
});

// node_modules/.pnpm/@typescript-eslint+scope-manager@7.10.0/node_modules/@typescript-eslint/scope-manager/dist/lib/es2019.string.js
var require_es2019_string = __commonJS({
  "node_modules/.pnpm/@typescript-eslint+scope-manager@7.10.0/node_modules/@typescript-eslint/scope-manager/dist/lib/es2019.string.js"(exports2) {
    "use strict";
    init_cjs_shims();
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.es2019_string = void 0;
    var base_config_1 = require_base_config();
    exports2.es2019_string = {
      String: base_config_1.TYPE
    };
  }
});

// node_modules/.pnpm/@typescript-eslint+scope-manager@7.10.0/node_modules/@typescript-eslint/scope-manager/dist/lib/es2019.symbol.js
var require_es2019_symbol = __commonJS({
  "node_modules/.pnpm/@typescript-eslint+scope-manager@7.10.0/node_modules/@typescript-eslint/scope-manager/dist/lib/es2019.symbol.js"(exports2) {
    "use strict";
    init_cjs_shims();
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.es2019_symbol = void 0;
    var base_config_1 = require_base_config();
    exports2.es2019_symbol = {
      Symbol: base_config_1.TYPE
    };
  }
});

// node_modules/.pnpm/@typescript-eslint+scope-manager@7.10.0/node_modules/@typescript-eslint/scope-manager/dist/lib/es2019.js
var require_es2019 = __commonJS({
  "node_modules/.pnpm/@typescript-eslint+scope-manager@7.10.0/node_modules/@typescript-eslint/scope-manager/dist/lib/es2019.js"(exports2) {
    "use strict";
    init_cjs_shims();
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.es2019 = void 0;
    var es2018_1 = require_es2018();
    var es2019_array_1 = require_es2019_array();
    var es2019_intl_1 = require_es2019_intl();
    var es2019_object_1 = require_es2019_object();
    var es2019_string_1 = require_es2019_string();
    var es2019_symbol_1 = require_es2019_symbol();
    exports2.es2019 = {
      ...es2018_1.es2018,
      ...es2019_array_1.es2019_array,
      ...es2019_object_1.es2019_object,
      ...es2019_string_1.es2019_string,
      ...es2019_symbol_1.es2019_symbol,
      ...es2019_intl_1.es2019_intl
    };
  }
});

// node_modules/.pnpm/@typescript-eslint+scope-manager@7.10.0/node_modules/@typescript-eslint/scope-manager/dist/lib/es2019.full.js
var require_es2019_full = __commonJS({
  "node_modules/.pnpm/@typescript-eslint+scope-manager@7.10.0/node_modules/@typescript-eslint/scope-manager/dist/lib/es2019.full.js"(exports2) {
    "use strict";
    init_cjs_shims();
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.es2019_full = void 0;
    var dom_1 = require_dom();
    var dom_asynciterable_1 = require_dom_asynciterable();
    var dom_iterable_1 = require_dom_iterable();
    var es2019_1 = require_es2019();
    var scripthost_1 = require_scripthost();
    var webworker_importscripts_1 = require_webworker_importscripts();
    exports2.es2019_full = {
      ...es2019_1.es2019,
      ...dom_1.dom,
      ...webworker_importscripts_1.webworker_importscripts,
      ...scripthost_1.scripthost,
      ...dom_iterable_1.dom_iterable,
      ...dom_asynciterable_1.dom_asynciterable
    };
  }
});

// node_modules/.pnpm/@typescript-eslint+scope-manager@7.10.0/node_modules/@typescript-eslint/scope-manager/dist/lib/es2020.intl.js
var require_es2020_intl = __commonJS({
  "node_modules/.pnpm/@typescript-eslint+scope-manager@7.10.0/node_modules/@typescript-eslint/scope-manager/dist/lib/es2020.intl.js"(exports2) {
    "use strict";
    init_cjs_shims();
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.es2020_intl = void 0;
    var base_config_1 = require_base_config();
    var es2018_intl_1 = require_es2018_intl();
    exports2.es2020_intl = {
      ...es2018_intl_1.es2018_intl,
      Intl: base_config_1.TYPE_VALUE
    };
  }
});

// node_modules/.pnpm/@typescript-eslint+scope-manager@7.10.0/node_modules/@typescript-eslint/scope-manager/dist/lib/es2020.bigint.js
var require_es2020_bigint = __commonJS({
  "node_modules/.pnpm/@typescript-eslint+scope-manager@7.10.0/node_modules/@typescript-eslint/scope-manager/dist/lib/es2020.bigint.js"(exports2) {
    "use strict";
    init_cjs_shims();
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.es2020_bigint = void 0;
    var base_config_1 = require_base_config();
    var es2020_intl_1 = require_es2020_intl();
    exports2.es2020_bigint = {
      ...es2020_intl_1.es2020_intl,
      BigIntToLocaleStringOptions: base_config_1.TYPE,
      BigInt: base_config_1.TYPE_VALUE,
      BigIntConstructor: base_config_1.TYPE,
      BigInt64Array: base_config_1.TYPE_VALUE,
      BigInt64ArrayConstructor: base_config_1.TYPE,
      BigUint64Array: base_config_1.TYPE_VALUE,
      BigUint64ArrayConstructor: base_config_1.TYPE,
      DataView: base_config_1.TYPE,
      Intl: base_config_1.TYPE_VALUE
    };
  }
});

// node_modules/.pnpm/@typescript-eslint+scope-manager@7.10.0/node_modules/@typescript-eslint/scope-manager/dist/lib/es2020.date.js
var require_es2020_date = __commonJS({
  "node_modules/.pnpm/@typescript-eslint+scope-manager@7.10.0/node_modules/@typescript-eslint/scope-manager/dist/lib/es2020.date.js"(exports2) {
    "use strict";
    init_cjs_shims();
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.es2020_date = void 0;
    var base_config_1 = require_base_config();
    var es2020_intl_1 = require_es2020_intl();
    exports2.es2020_date = {
      ...es2020_intl_1.es2020_intl,
      Date: base_config_1.TYPE
    };
  }
});

// node_modules/.pnpm/@typescript-eslint+scope-manager@7.10.0/node_modules/@typescript-eslint/scope-manager/dist/lib/es2020.number.js
var require_es2020_number = __commonJS({
  "node_modules/.pnpm/@typescript-eslint+scope-manager@7.10.0/node_modules/@typescript-eslint/scope-manager/dist/lib/es2020.number.js"(exports2) {
    "use strict";
    init_cjs_shims();
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.es2020_number = void 0;
    var base_config_1 = require_base_config();
    var es2020_intl_1 = require_es2020_intl();
    exports2.es2020_number = {
      ...es2020_intl_1.es2020_intl,
      Number: base_config_1.TYPE
    };
  }
});

// node_modules/.pnpm/@typescript-eslint+scope-manager@7.10.0/node_modules/@typescript-eslint/scope-manager/dist/lib/es2020.promise.js
var require_es2020_promise = __commonJS({
  "node_modules/.pnpm/@typescript-eslint+scope-manager@7.10.0/node_modules/@typescript-eslint/scope-manager/dist/lib/es2020.promise.js"(exports2) {
    "use strict";
    init_cjs_shims();
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.es2020_promise = void 0;
    var base_config_1 = require_base_config();
    exports2.es2020_promise = {
      PromiseFulfilledResult: base_config_1.TYPE,
      PromiseRejectedResult: base_config_1.TYPE,
      PromiseSettledResult: base_config_1.TYPE,
      PromiseConstructor: base_config_1.TYPE
    };
  }
});

// node_modules/.pnpm/@typescript-eslint+scope-manager@7.10.0/node_modules/@typescript-eslint/scope-manager/dist/lib/es2020.sharedmemory.js
var require_es2020_sharedmemory = __commonJS({
  "node_modules/.pnpm/@typescript-eslint+scope-manager@7.10.0/node_modules/@typescript-eslint/scope-manager/dist/lib/es2020.sharedmemory.js"(exports2) {
    "use strict";
    init_cjs_shims();
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.es2020_sharedmemory = void 0;
    var base_config_1 = require_base_config();
    exports2.es2020_sharedmemory = {
      Atomics: base_config_1.TYPE
    };
  }
});

// node_modules/.pnpm/@typescript-eslint+scope-manager@7.10.0/node_modules/@typescript-eslint/scope-manager/dist/lib/es2020.string.js
var require_es2020_string = __commonJS({
  "node_modules/.pnpm/@typescript-eslint+scope-manager@7.10.0/node_modules/@typescript-eslint/scope-manager/dist/lib/es2020.string.js"(exports2) {
    "use strict";
    init_cjs_shims();
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.es2020_string = void 0;
    var base_config_1 = require_base_config();
    var es2015_iterable_1 = require_es2015_iterable();
    exports2.es2020_string = {
      ...es2015_iterable_1.es2015_iterable,
      String: base_config_1.TYPE
    };
  }
});

// node_modules/.pnpm/@typescript-eslint+scope-manager@7.10.0/node_modules/@typescript-eslint/scope-manager/dist/lib/es2020.symbol.wellknown.js
var require_es2020_symbol_wellknown = __commonJS({
  "node_modules/.pnpm/@typescript-eslint+scope-manager@7.10.0/node_modules/@typescript-eslint/scope-manager/dist/lib/es2020.symbol.wellknown.js"(exports2) {
    "use strict";
    init_cjs_shims();
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.es2020_symbol_wellknown = void 0;
    var base_config_1 = require_base_config();
    var es2015_iterable_1 = require_es2015_iterable();
    var es2015_symbol_1 = require_es2015_symbol();
    exports2.es2020_symbol_wellknown = {
      ...es2015_iterable_1.es2015_iterable,
      ...es2015_symbol_1.es2015_symbol,
      SymbolConstructor: base_config_1.TYPE,
      RegExp: base_config_1.TYPE
    };
  }
});

// node_modules/.pnpm/@typescript-eslint+scope-manager@7.10.0/node_modules/@typescript-eslint/scope-manager/dist/lib/es2020.js
var require_es2020 = __commonJS({
  "node_modules/.pnpm/@typescript-eslint+scope-manager@7.10.0/node_modules/@typescript-eslint/scope-manager/dist/lib/es2020.js"(exports2) {
    "use strict";
    init_cjs_shims();
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.es2020 = void 0;
    var es2019_1 = require_es2019();
    var es2020_bigint_1 = require_es2020_bigint();
    var es2020_date_1 = require_es2020_date();
    var es2020_intl_1 = require_es2020_intl();
    var es2020_number_1 = require_es2020_number();
    var es2020_promise_1 = require_es2020_promise();
    var es2020_sharedmemory_1 = require_es2020_sharedmemory();
    var es2020_string_1 = require_es2020_string();
    var es2020_symbol_wellknown_1 = require_es2020_symbol_wellknown();
    exports2.es2020 = {
      ...es2019_1.es2019,
      ...es2020_bigint_1.es2020_bigint,
      ...es2020_date_1.es2020_date,
      ...es2020_number_1.es2020_number,
      ...es2020_promise_1.es2020_promise,
      ...es2020_sharedmemory_1.es2020_sharedmemory,
      ...es2020_string_1.es2020_string,
      ...es2020_symbol_wellknown_1.es2020_symbol_wellknown,
      ...es2020_intl_1.es2020_intl
    };
  }
});

// node_modules/.pnpm/@typescript-eslint+scope-manager@7.10.0/node_modules/@typescript-eslint/scope-manager/dist/lib/es2020.full.js
var require_es2020_full = __commonJS({
  "node_modules/.pnpm/@typescript-eslint+scope-manager@7.10.0/node_modules/@typescript-eslint/scope-manager/dist/lib/es2020.full.js"(exports2) {
    "use strict";
    init_cjs_shims();
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.es2020_full = void 0;
    var dom_1 = require_dom();
    var dom_asynciterable_1 = require_dom_asynciterable();
    var dom_iterable_1 = require_dom_iterable();
    var es2020_1 = require_es2020();
    var scripthost_1 = require_scripthost();
    var webworker_importscripts_1 = require_webworker_importscripts();
    exports2.es2020_full = {
      ...es2020_1.es2020,
      ...dom_1.dom,
      ...webworker_importscripts_1.webworker_importscripts,
      ...scripthost_1.scripthost,
      ...dom_iterable_1.dom_iterable,
      ...dom_asynciterable_1.dom_asynciterable
    };
  }
});

// node_modules/.pnpm/@typescript-eslint+scope-manager@7.10.0/node_modules/@typescript-eslint/scope-manager/dist/lib/es2021.intl.js
var require_es2021_intl = __commonJS({
  "node_modules/.pnpm/@typescript-eslint+scope-manager@7.10.0/node_modules/@typescript-eslint/scope-manager/dist/lib/es2021.intl.js"(exports2) {
    "use strict";
    init_cjs_shims();
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.es2021_intl = void 0;
    var base_config_1 = require_base_config();
    exports2.es2021_intl = {
      Intl: base_config_1.TYPE_VALUE
    };
  }
});

// node_modules/.pnpm/@typescript-eslint+scope-manager@7.10.0/node_modules/@typescript-eslint/scope-manager/dist/lib/es2021.promise.js
var require_es2021_promise = __commonJS({
  "node_modules/.pnpm/@typescript-eslint+scope-manager@7.10.0/node_modules/@typescript-eslint/scope-manager/dist/lib/es2021.promise.js"(exports2) {
    "use strict";
    init_cjs_shims();
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.es2021_promise = void 0;
    var base_config_1 = require_base_config();
    exports2.es2021_promise = {
      AggregateError: base_config_1.TYPE_VALUE,
      AggregateErrorConstructor: base_config_1.TYPE,
      PromiseConstructor: base_config_1.TYPE
    };
  }
});

// node_modules/.pnpm/@typescript-eslint+scope-manager@7.10.0/node_modules/@typescript-eslint/scope-manager/dist/lib/es2021.string.js
var require_es2021_string = __commonJS({
  "node_modules/.pnpm/@typescript-eslint+scope-manager@7.10.0/node_modules/@typescript-eslint/scope-manager/dist/lib/es2021.string.js"(exports2) {
    "use strict";
    init_cjs_shims();
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.es2021_string = void 0;
    var base_config_1 = require_base_config();
    exports2.es2021_string = {
      String: base_config_1.TYPE
    };
  }
});

// node_modules/.pnpm/@typescript-eslint+scope-manager@7.10.0/node_modules/@typescript-eslint/scope-manager/dist/lib/es2021.weakref.js
var require_es2021_weakref = __commonJS({
  "node_modules/.pnpm/@typescript-eslint+scope-manager@7.10.0/node_modules/@typescript-eslint/scope-manager/dist/lib/es2021.weakref.js"(exports2) {
    "use strict";
    init_cjs_shims();
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.es2021_weakref = void 0;
    var base_config_1 = require_base_config();
    exports2.es2021_weakref = {
      WeakRef: base_config_1.TYPE_VALUE,
      WeakRefConstructor: base_config_1.TYPE,
      FinalizationRegistry: base_config_1.TYPE_VALUE,
      FinalizationRegistryConstructor: base_config_1.TYPE
    };
  }
});

// node_modules/.pnpm/@typescript-eslint+scope-manager@7.10.0/node_modules/@typescript-eslint/scope-manager/dist/lib/es2021.js
var require_es2021 = __commonJS({
  "node_modules/.pnpm/@typescript-eslint+scope-manager@7.10.0/node_modules/@typescript-eslint/scope-manager/dist/lib/es2021.js"(exports2) {
    "use strict";
    init_cjs_shims();
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.es2021 = void 0;
    var es2020_1 = require_es2020();
    var es2021_intl_1 = require_es2021_intl();
    var es2021_promise_1 = require_es2021_promise();
    var es2021_string_1 = require_es2021_string();
    var es2021_weakref_1 = require_es2021_weakref();
    exports2.es2021 = {
      ...es2020_1.es2020,
      ...es2021_promise_1.es2021_promise,
      ...es2021_string_1.es2021_string,
      ...es2021_weakref_1.es2021_weakref,
      ...es2021_intl_1.es2021_intl
    };
  }
});

// node_modules/.pnpm/@typescript-eslint+scope-manager@7.10.0/node_modules/@typescript-eslint/scope-manager/dist/lib/es2021.full.js
var require_es2021_full = __commonJS({
  "node_modules/.pnpm/@typescript-eslint+scope-manager@7.10.0/node_modules/@typescript-eslint/scope-manager/dist/lib/es2021.full.js"(exports2) {
    "use strict";
    init_cjs_shims();
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.es2021_full = void 0;
    var dom_1 = require_dom();
    var dom_asynciterable_1 = require_dom_asynciterable();
    var dom_iterable_1 = require_dom_iterable();
    var es2021_1 = require_es2021();
    var scripthost_1 = require_scripthost();
    var webworker_importscripts_1 = require_webworker_importscripts();
    exports2.es2021_full = {
      ...es2021_1.es2021,
      ...dom_1.dom,
      ...webworker_importscripts_1.webworker_importscripts,
      ...scripthost_1.scripthost,
      ...dom_iterable_1.dom_iterable,
      ...dom_asynciterable_1.dom_asynciterable
    };
  }
});

// node_modules/.pnpm/@typescript-eslint+scope-manager@7.10.0/node_modules/@typescript-eslint/scope-manager/dist/lib/es2022.array.js
var require_es2022_array = __commonJS({
  "node_modules/.pnpm/@typescript-eslint+scope-manager@7.10.0/node_modules/@typescript-eslint/scope-manager/dist/lib/es2022.array.js"(exports2) {
    "use strict";
    init_cjs_shims();
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.es2022_array = void 0;
    var base_config_1 = require_base_config();
    exports2.es2022_array = {
      Array: base_config_1.TYPE,
      ReadonlyArray: base_config_1.TYPE,
      Int8Array: base_config_1.TYPE,
      Uint8Array: base_config_1.TYPE,
      Uint8ClampedArray: base_config_1.TYPE,
      Int16Array: base_config_1.TYPE,
      Uint16Array: base_config_1.TYPE,
      Int32Array: base_config_1.TYPE,
      Uint32Array: base_config_1.TYPE,
      Float32Array: base_config_1.TYPE,
      Float64Array: base_config_1.TYPE,
      BigInt64Array: base_config_1.TYPE,
      BigUint64Array: base_config_1.TYPE
    };
  }
});

// node_modules/.pnpm/@typescript-eslint+scope-manager@7.10.0/node_modules/@typescript-eslint/scope-manager/dist/lib/es2022.error.js
var require_es2022_error = __commonJS({
  "node_modules/.pnpm/@typescript-eslint+scope-manager@7.10.0/node_modules/@typescript-eslint/scope-manager/dist/lib/es2022.error.js"(exports2) {
    "use strict";
    init_cjs_shims();
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.es2022_error = void 0;
    var base_config_1 = require_base_config();
    exports2.es2022_error = {
      ErrorOptions: base_config_1.TYPE,
      Error: base_config_1.TYPE,
      ErrorConstructor: base_config_1.TYPE,
      EvalErrorConstructor: base_config_1.TYPE,
      RangeErrorConstructor: base_config_1.TYPE,
      ReferenceErrorConstructor: base_config_1.TYPE,
      SyntaxErrorConstructor: base_config_1.TYPE,
      TypeErrorConstructor: base_config_1.TYPE,
      URIErrorConstructor: base_config_1.TYPE,
      AggregateErrorConstructor: base_config_1.TYPE
    };
  }
});

// node_modules/.pnpm/@typescript-eslint+scope-manager@7.10.0/node_modules/@typescript-eslint/scope-manager/dist/lib/es2022.intl.js
var require_es2022_intl = __commonJS({
  "node_modules/.pnpm/@typescript-eslint+scope-manager@7.10.0/node_modules/@typescript-eslint/scope-manager/dist/lib/es2022.intl.js"(exports2) {
    "use strict";
    init_cjs_shims();
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.es2022_intl = void 0;
    var base_config_1 = require_base_config();
    exports2.es2022_intl = {
      Intl: base_config_1.TYPE_VALUE
    };
  }
});

// node_modules/.pnpm/@typescript-eslint+scope-manager@7.10.0/node_modules/@typescript-eslint/scope-manager/dist/lib/es2022.object.js
var require_es2022_object = __commonJS({
  "node_modules/.pnpm/@typescript-eslint+scope-manager@7.10.0/node_modules/@typescript-eslint/scope-manager/dist/lib/es2022.object.js"(exports2) {
    "use strict";
    init_cjs_shims();
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.es2022_object = void 0;
    var base_config_1 = require_base_config();
    exports2.es2022_object = {
      ObjectConstructor: base_config_1.TYPE
    };
  }
});

// node_modules/.pnpm/@typescript-eslint+scope-manager@7.10.0/node_modules/@typescript-eslint/scope-manager/dist/lib/es2022.regexp.js
var require_es2022_regexp = __commonJS({
  "node_modules/.pnpm/@typescript-eslint+scope-manager@7.10.0/node_modules/@typescript-eslint/scope-manager/dist/lib/es2022.regexp.js"(exports2) {
    "use strict";
    init_cjs_shims();
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.es2022_regexp = void 0;
    var base_config_1 = require_base_config();
    exports2.es2022_regexp = {
      RegExpMatchArray: base_config_1.TYPE,
      RegExpExecArray: base_config_1.TYPE,
      RegExpIndicesArray: base_config_1.TYPE,
      RegExp: base_config_1.TYPE
    };
  }
});

// node_modules/.pnpm/@typescript-eslint+scope-manager@7.10.0/node_modules/@typescript-eslint/scope-manager/dist/lib/es2022.sharedmemory.js
var require_es2022_sharedmemory = __commonJS({
  "node_modules/.pnpm/@typescript-eslint+scope-manager@7.10.0/node_modules/@typescript-eslint/scope-manager/dist/lib/es2022.sharedmemory.js"(exports2) {
    "use strict";
    init_cjs_shims();
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.es2022_sharedmemory = void 0;
    var base_config_1 = require_base_config();
    exports2.es2022_sharedmemory = {
      Atomics: base_config_1.TYPE
    };
  }
});

// node_modules/.pnpm/@typescript-eslint+scope-manager@7.10.0/node_modules/@typescript-eslint/scope-manager/dist/lib/es2022.string.js
var require_es2022_string = __commonJS({
  "node_modules/.pnpm/@typescript-eslint+scope-manager@7.10.0/node_modules/@typescript-eslint/scope-manager/dist/lib/es2022.string.js"(exports2) {
    "use strict";
    init_cjs_shims();
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.es2022_string = void 0;
    var base_config_1 = require_base_config();
    exports2.es2022_string = {
      String: base_config_1.TYPE
    };
  }
});

// node_modules/.pnpm/@typescript-eslint+scope-manager@7.10.0/node_modules/@typescript-eslint/scope-manager/dist/lib/es2022.js
var require_es2022 = __commonJS({
  "node_modules/.pnpm/@typescript-eslint+scope-manager@7.10.0/node_modules/@typescript-eslint/scope-manager/dist/lib/es2022.js"(exports2) {
    "use strict";
    init_cjs_shims();
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.es2022 = void 0;
    var es2021_1 = require_es2021();
    var es2022_array_1 = require_es2022_array();
    var es2022_error_1 = require_es2022_error();
    var es2022_intl_1 = require_es2022_intl();
    var es2022_object_1 = require_es2022_object();
    var es2022_regexp_1 = require_es2022_regexp();
    var es2022_sharedmemory_1 = require_es2022_sharedmemory();
    var es2022_string_1 = require_es2022_string();
    exports2.es2022 = {
      ...es2021_1.es2021,
      ...es2022_array_1.es2022_array,
      ...es2022_error_1.es2022_error,
      ...es2022_intl_1.es2022_intl,
      ...es2022_object_1.es2022_object,
      ...es2022_sharedmemory_1.es2022_sharedmemory,
      ...es2022_string_1.es2022_string,
      ...es2022_regexp_1.es2022_regexp
    };
  }
});

// node_modules/.pnpm/@typescript-eslint+scope-manager@7.10.0/node_modules/@typescript-eslint/scope-manager/dist/lib/es2022.full.js
var require_es2022_full = __commonJS({
  "node_modules/.pnpm/@typescript-eslint+scope-manager@7.10.0/node_modules/@typescript-eslint/scope-manager/dist/lib/es2022.full.js"(exports2) {
    "use strict";
    init_cjs_shims();
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.es2022_full = void 0;
    var dom_1 = require_dom();
    var dom_asynciterable_1 = require_dom_asynciterable();
    var dom_iterable_1 = require_dom_iterable();
    var es2022_1 = require_es2022();
    var scripthost_1 = require_scripthost();
    var webworker_importscripts_1 = require_webworker_importscripts();
    exports2.es2022_full = {
      ...es2022_1.es2022,
      ...dom_1.dom,
      ...webworker_importscripts_1.webworker_importscripts,
      ...scripthost_1.scripthost,
      ...dom_iterable_1.dom_iterable,
      ...dom_asynciterable_1.dom_asynciterable
    };
  }
});

// node_modules/.pnpm/@typescript-eslint+scope-manager@7.10.0/node_modules/@typescript-eslint/scope-manager/dist/lib/es2023.array.js
var require_es2023_array = __commonJS({
  "node_modules/.pnpm/@typescript-eslint+scope-manager@7.10.0/node_modules/@typescript-eslint/scope-manager/dist/lib/es2023.array.js"(exports2) {
    "use strict";
    init_cjs_shims();
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.es2023_array = void 0;
    var base_config_1 = require_base_config();
    exports2.es2023_array = {
      Array: base_config_1.TYPE,
      ReadonlyArray: base_config_1.TYPE,
      Int8Array: base_config_1.TYPE,
      Uint8Array: base_config_1.TYPE,
      Uint8ClampedArray: base_config_1.TYPE,
      Int16Array: base_config_1.TYPE,
      Uint16Array: base_config_1.TYPE,
      Int32Array: base_config_1.TYPE,
      Uint32Array: base_config_1.TYPE,
      Float32Array: base_config_1.TYPE,
      Float64Array: base_config_1.TYPE,
      BigInt64Array: base_config_1.TYPE,
      BigUint64Array: base_config_1.TYPE
    };
  }
});

// node_modules/.pnpm/@typescript-eslint+scope-manager@7.10.0/node_modules/@typescript-eslint/scope-manager/dist/lib/es2023.collection.js
var require_es2023_collection = __commonJS({
  "node_modules/.pnpm/@typescript-eslint+scope-manager@7.10.0/node_modules/@typescript-eslint/scope-manager/dist/lib/es2023.collection.js"(exports2) {
    "use strict";
    init_cjs_shims();
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.es2023_collection = void 0;
    var base_config_1 = require_base_config();
    exports2.es2023_collection = {
      WeakKeyTypes: base_config_1.TYPE
    };
  }
});

// node_modules/.pnpm/@typescript-eslint+scope-manager@7.10.0/node_modules/@typescript-eslint/scope-manager/dist/lib/es2023.js
var require_es2023 = __commonJS({
  "node_modules/.pnpm/@typescript-eslint+scope-manager@7.10.0/node_modules/@typescript-eslint/scope-manager/dist/lib/es2023.js"(exports2) {
    "use strict";
    init_cjs_shims();
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.es2023 = void 0;
    var es2022_1 = require_es2022();
    var es2023_array_1 = require_es2023_array();
    var es2023_collection_1 = require_es2023_collection();
    exports2.es2023 = {
      ...es2022_1.es2022,
      ...es2023_array_1.es2023_array,
      ...es2023_collection_1.es2023_collection
    };
  }
});

// node_modules/.pnpm/@typescript-eslint+scope-manager@7.10.0/node_modules/@typescript-eslint/scope-manager/dist/lib/es2023.full.js
var require_es2023_full = __commonJS({
  "node_modules/.pnpm/@typescript-eslint+scope-manager@7.10.0/node_modules/@typescript-eslint/scope-manager/dist/lib/es2023.full.js"(exports2) {
    "use strict";
    init_cjs_shims();
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.es2023_full = void 0;
    var dom_1 = require_dom();
    var dom_asynciterable_1 = require_dom_asynciterable();
    var dom_iterable_1 = require_dom_iterable();
    var es2023_1 = require_es2023();
    var scripthost_1 = require_scripthost();
    var webworker_importscripts_1 = require_webworker_importscripts();
    exports2.es2023_full = {
      ...es2023_1.es2023,
      ...dom_1.dom,
      ...webworker_importscripts_1.webworker_importscripts,
      ...scripthost_1.scripthost,
      ...dom_iterable_1.dom_iterable,
      ...dom_asynciterable_1.dom_asynciterable
    };
  }
});

// node_modules/.pnpm/@typescript-eslint+scope-manager@7.10.0/node_modules/@typescript-eslint/scope-manager/dist/lib/esnext.collection.js
var require_esnext_collection = __commonJS({
  "node_modules/.pnpm/@typescript-eslint+scope-manager@7.10.0/node_modules/@typescript-eslint/scope-manager/dist/lib/esnext.collection.js"(exports2) {
    "use strict";
    init_cjs_shims();
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.esnext_collection = void 0;
    var base_config_1 = require_base_config();
    exports2.esnext_collection = {
      MapConstructor: base_config_1.TYPE
    };
  }
});

// node_modules/.pnpm/@typescript-eslint+scope-manager@7.10.0/node_modules/@typescript-eslint/scope-manager/dist/lib/esnext.decorators.js
var require_esnext_decorators = __commonJS({
  "node_modules/.pnpm/@typescript-eslint+scope-manager@7.10.0/node_modules/@typescript-eslint/scope-manager/dist/lib/esnext.decorators.js"(exports2) {
    "use strict";
    init_cjs_shims();
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.esnext_decorators = void 0;
    var base_config_1 = require_base_config();
    var decorators_1 = require_decorators();
    var es2015_symbol_1 = require_es2015_symbol();
    exports2.esnext_decorators = {
      ...es2015_symbol_1.es2015_symbol,
      ...decorators_1.decorators,
      SymbolConstructor: base_config_1.TYPE,
      Function: base_config_1.TYPE
    };
  }
});

// node_modules/.pnpm/@typescript-eslint+scope-manager@7.10.0/node_modules/@typescript-eslint/scope-manager/dist/lib/esnext.disposable.js
var require_esnext_disposable = __commonJS({
  "node_modules/.pnpm/@typescript-eslint+scope-manager@7.10.0/node_modules/@typescript-eslint/scope-manager/dist/lib/esnext.disposable.js"(exports2) {
    "use strict";
    init_cjs_shims();
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.esnext_disposable = void 0;
    var base_config_1 = require_base_config();
    var es2015_symbol_1 = require_es2015_symbol();
    exports2.esnext_disposable = {
      ...es2015_symbol_1.es2015_symbol,
      SymbolConstructor: base_config_1.TYPE,
      Disposable: base_config_1.TYPE,
      AsyncDisposable: base_config_1.TYPE,
      SuppressedError: base_config_1.TYPE_VALUE,
      SuppressedErrorConstructor: base_config_1.TYPE,
      DisposableStack: base_config_1.TYPE_VALUE,
      DisposableStackConstructor: base_config_1.TYPE,
      AsyncDisposableStack: base_config_1.TYPE_VALUE,
      AsyncDisposableStackConstructor: base_config_1.TYPE
    };
  }
});

// node_modules/.pnpm/@typescript-eslint+scope-manager@7.10.0/node_modules/@typescript-eslint/scope-manager/dist/lib/esnext.intl.js
var require_esnext_intl = __commonJS({
  "node_modules/.pnpm/@typescript-eslint+scope-manager@7.10.0/node_modules/@typescript-eslint/scope-manager/dist/lib/esnext.intl.js"(exports2) {
    "use strict";
    init_cjs_shims();
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.esnext_intl = void 0;
    var base_config_1 = require_base_config();
    exports2.esnext_intl = {
      Intl: base_config_1.TYPE_VALUE
    };
  }
});

// node_modules/.pnpm/@typescript-eslint+scope-manager@7.10.0/node_modules/@typescript-eslint/scope-manager/dist/lib/esnext.object.js
var require_esnext_object = __commonJS({
  "node_modules/.pnpm/@typescript-eslint+scope-manager@7.10.0/node_modules/@typescript-eslint/scope-manager/dist/lib/esnext.object.js"(exports2) {
    "use strict";
    init_cjs_shims();
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.esnext_object = void 0;
    var base_config_1 = require_base_config();
    exports2.esnext_object = {
      ObjectConstructor: base_config_1.TYPE
    };
  }
});

// node_modules/.pnpm/@typescript-eslint+scope-manager@7.10.0/node_modules/@typescript-eslint/scope-manager/dist/lib/esnext.promise.js
var require_esnext_promise = __commonJS({
  "node_modules/.pnpm/@typescript-eslint+scope-manager@7.10.0/node_modules/@typescript-eslint/scope-manager/dist/lib/esnext.promise.js"(exports2) {
    "use strict";
    init_cjs_shims();
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.esnext_promise = void 0;
    var base_config_1 = require_base_config();
    exports2.esnext_promise = {
      PromiseWithResolvers: base_config_1.TYPE,
      PromiseConstructor: base_config_1.TYPE
    };
  }
});

// node_modules/.pnpm/@typescript-eslint+scope-manager@7.10.0/node_modules/@typescript-eslint/scope-manager/dist/lib/esnext.js
var require_esnext = __commonJS({
  "node_modules/.pnpm/@typescript-eslint+scope-manager@7.10.0/node_modules/@typescript-eslint/scope-manager/dist/lib/esnext.js"(exports2) {
    "use strict";
    init_cjs_shims();
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.esnext = void 0;
    var es2023_1 = require_es2023();
    var esnext_collection_1 = require_esnext_collection();
    var esnext_decorators_1 = require_esnext_decorators();
    var esnext_disposable_1 = require_esnext_disposable();
    var esnext_intl_1 = require_esnext_intl();
    var esnext_object_1 = require_esnext_object();
    var esnext_promise_1 = require_esnext_promise();
    exports2.esnext = {
      ...es2023_1.es2023,
      ...esnext_intl_1.esnext_intl,
      ...esnext_decorators_1.esnext_decorators,
      ...esnext_disposable_1.esnext_disposable,
      ...esnext_promise_1.esnext_promise,
      ...esnext_object_1.esnext_object,
      ...esnext_collection_1.esnext_collection
    };
  }
});

// node_modules/.pnpm/@typescript-eslint+scope-manager@7.10.0/node_modules/@typescript-eslint/scope-manager/dist/lib/esnext.array.js
var require_esnext_array = __commonJS({
  "node_modules/.pnpm/@typescript-eslint+scope-manager@7.10.0/node_modules/@typescript-eslint/scope-manager/dist/lib/esnext.array.js"(exports2) {
    "use strict";
    init_cjs_shims();
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.esnext_array = void 0;
    var base_config_1 = require_base_config();
    exports2.esnext_array = {
      Array: base_config_1.TYPE,
      ReadonlyArray: base_config_1.TYPE,
      Int8Array: base_config_1.TYPE,
      Uint8Array: base_config_1.TYPE,
      Uint8ClampedArray: base_config_1.TYPE,
      Int16Array: base_config_1.TYPE,
      Uint16Array: base_config_1.TYPE,
      Int32Array: base_config_1.TYPE,
      Uint32Array: base_config_1.TYPE,
      Float32Array: base_config_1.TYPE,
      Float64Array: base_config_1.TYPE,
      BigInt64Array: base_config_1.TYPE,
      BigUint64Array: base_config_1.TYPE
    };
  }
});

// node_modules/.pnpm/@typescript-eslint+scope-manager@7.10.0/node_modules/@typescript-eslint/scope-manager/dist/lib/esnext.asynciterable.js
var require_esnext_asynciterable = __commonJS({
  "node_modules/.pnpm/@typescript-eslint+scope-manager@7.10.0/node_modules/@typescript-eslint/scope-manager/dist/lib/esnext.asynciterable.js"(exports2) {
    "use strict";
    init_cjs_shims();
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.esnext_asynciterable = void 0;
    var base_config_1 = require_base_config();
    var es2015_iterable_1 = require_es2015_iterable();
    var es2015_symbol_1 = require_es2015_symbol();
    exports2.esnext_asynciterable = {
      ...es2015_symbol_1.es2015_symbol,
      ...es2015_iterable_1.es2015_iterable,
      SymbolConstructor: base_config_1.TYPE,
      AsyncIterator: base_config_1.TYPE,
      AsyncIterable: base_config_1.TYPE,
      AsyncIterableIterator: base_config_1.TYPE
    };
  }
});

// node_modules/.pnpm/@typescript-eslint+scope-manager@7.10.0/node_modules/@typescript-eslint/scope-manager/dist/lib/esnext.bigint.js
var require_esnext_bigint = __commonJS({
  "node_modules/.pnpm/@typescript-eslint+scope-manager@7.10.0/node_modules/@typescript-eslint/scope-manager/dist/lib/esnext.bigint.js"(exports2) {
    "use strict";
    init_cjs_shims();
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.esnext_bigint = void 0;
    var base_config_1 = require_base_config();
    var es2020_intl_1 = require_es2020_intl();
    exports2.esnext_bigint = {
      ...es2020_intl_1.es2020_intl,
      BigIntToLocaleStringOptions: base_config_1.TYPE,
      BigInt: base_config_1.TYPE_VALUE,
      BigIntConstructor: base_config_1.TYPE,
      BigInt64Array: base_config_1.TYPE_VALUE,
      BigInt64ArrayConstructor: base_config_1.TYPE,
      BigUint64Array: base_config_1.TYPE_VALUE,
      BigUint64ArrayConstructor: base_config_1.TYPE,
      DataView: base_config_1.TYPE,
      Intl: base_config_1.TYPE_VALUE
    };
  }
});

// node_modules/.pnpm/@typescript-eslint+scope-manager@7.10.0/node_modules/@typescript-eslint/scope-manager/dist/lib/esnext.full.js
var require_esnext_full = __commonJS({
  "node_modules/.pnpm/@typescript-eslint+scope-manager@7.10.0/node_modules/@typescript-eslint/scope-manager/dist/lib/esnext.full.js"(exports2) {
    "use strict";
    init_cjs_shims();
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.esnext_full = void 0;
    var dom_1 = require_dom();
    var dom_asynciterable_1 = require_dom_asynciterable();
    var dom_iterable_1 = require_dom_iterable();
    var esnext_1 = require_esnext();
    var scripthost_1 = require_scripthost();
    var webworker_importscripts_1 = require_webworker_importscripts();
    exports2.esnext_full = {
      ...esnext_1.esnext,
      ...dom_1.dom,
      ...webworker_importscripts_1.webworker_importscripts,
      ...scripthost_1.scripthost,
      ...dom_iterable_1.dom_iterable,
      ...dom_asynciterable_1.dom_asynciterable
    };
  }
});

// node_modules/.pnpm/@typescript-eslint+scope-manager@7.10.0/node_modules/@typescript-eslint/scope-manager/dist/lib/esnext.string.js
var require_esnext_string = __commonJS({
  "node_modules/.pnpm/@typescript-eslint+scope-manager@7.10.0/node_modules/@typescript-eslint/scope-manager/dist/lib/esnext.string.js"(exports2) {
    "use strict";
    init_cjs_shims();
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.esnext_string = void 0;
    var base_config_1 = require_base_config();
    exports2.esnext_string = {
      String: base_config_1.TYPE
    };
  }
});

// node_modules/.pnpm/@typescript-eslint+scope-manager@7.10.0/node_modules/@typescript-eslint/scope-manager/dist/lib/esnext.symbol.js
var require_esnext_symbol = __commonJS({
  "node_modules/.pnpm/@typescript-eslint+scope-manager@7.10.0/node_modules/@typescript-eslint/scope-manager/dist/lib/esnext.symbol.js"(exports2) {
    "use strict";
    init_cjs_shims();
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.esnext_symbol = void 0;
    var base_config_1 = require_base_config();
    exports2.esnext_symbol = {
      Symbol: base_config_1.TYPE
    };
  }
});

// node_modules/.pnpm/@typescript-eslint+scope-manager@7.10.0/node_modules/@typescript-eslint/scope-manager/dist/lib/esnext.weakref.js
var require_esnext_weakref = __commonJS({
  "node_modules/.pnpm/@typescript-eslint+scope-manager@7.10.0/node_modules/@typescript-eslint/scope-manager/dist/lib/esnext.weakref.js"(exports2) {
    "use strict";
    init_cjs_shims();
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.esnext_weakref = void 0;
    var base_config_1 = require_base_config();
    exports2.esnext_weakref = {
      WeakRef: base_config_1.TYPE_VALUE,
      WeakRefConstructor: base_config_1.TYPE,
      FinalizationRegistry: base_config_1.TYPE_VALUE,
      FinalizationRegistryConstructor: base_config_1.TYPE
    };
  }
});

// node_modules/.pnpm/@typescript-eslint+scope-manager@7.10.0/node_modules/@typescript-eslint/scope-manager/dist/lib/lib.js
var require_lib3 = __commonJS({
  "node_modules/.pnpm/@typescript-eslint+scope-manager@7.10.0/node_modules/@typescript-eslint/scope-manager/dist/lib/lib.js"(exports2) {
    "use strict";
    init_cjs_shims();
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.lib = void 0;
    var dom_1 = require_dom();
    var es5_1 = require_es5();
    var scripthost_1 = require_scripthost();
    var webworker_importscripts_1 = require_webworker_importscripts();
    exports2.lib = {
      ...es5_1.es5,
      ...dom_1.dom,
      ...webworker_importscripts_1.webworker_importscripts,
      ...scripthost_1.scripthost
    };
  }
});

// node_modules/.pnpm/@typescript-eslint+scope-manager@7.10.0/node_modules/@typescript-eslint/scope-manager/dist/lib/webworker.js
var require_webworker = __commonJS({
  "node_modules/.pnpm/@typescript-eslint+scope-manager@7.10.0/node_modules/@typescript-eslint/scope-manager/dist/lib/webworker.js"(exports2) {
    "use strict";
    init_cjs_shims();
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.webworker = void 0;
    var base_config_1 = require_base_config();
    exports2.webworker = {
      AddEventListenerOptions: base_config_1.TYPE,
      AesCbcParams: base_config_1.TYPE,
      AesCtrParams: base_config_1.TYPE,
      AesDerivedKeyParams: base_config_1.TYPE,
      AesGcmParams: base_config_1.TYPE,
      AesKeyAlgorithm: base_config_1.TYPE,
      AesKeyGenParams: base_config_1.TYPE,
      Algorithm: base_config_1.TYPE,
      AudioConfiguration: base_config_1.TYPE,
      AvcEncoderConfig: base_config_1.TYPE,
      BlobPropertyBag: base_config_1.TYPE,
      CSSMatrixComponentOptions: base_config_1.TYPE,
      CSSNumericType: base_config_1.TYPE,
      CacheQueryOptions: base_config_1.TYPE,
      ClientQueryOptions: base_config_1.TYPE,
      CloseEventInit: base_config_1.TYPE,
      CryptoKeyPair: base_config_1.TYPE,
      CustomEventInit: base_config_1.TYPE,
      DOMMatrix2DInit: base_config_1.TYPE,
      DOMMatrixInit: base_config_1.TYPE,
      DOMPointInit: base_config_1.TYPE,
      DOMQuadInit: base_config_1.TYPE,
      DOMRectInit: base_config_1.TYPE,
      EcKeyGenParams: base_config_1.TYPE,
      EcKeyImportParams: base_config_1.TYPE,
      EcdhKeyDeriveParams: base_config_1.TYPE,
      EcdsaParams: base_config_1.TYPE,
      EncodedVideoChunkInit: base_config_1.TYPE,
      EncodedVideoChunkMetadata: base_config_1.TYPE,
      ErrorEventInit: base_config_1.TYPE,
      EventInit: base_config_1.TYPE,
      EventListenerOptions: base_config_1.TYPE,
      EventSourceInit: base_config_1.TYPE,
      ExtendableEventInit: base_config_1.TYPE,
      ExtendableMessageEventInit: base_config_1.TYPE,
      FetchEventInit: base_config_1.TYPE,
      FilePropertyBag: base_config_1.TYPE,
      FileSystemCreateWritableOptions: base_config_1.TYPE,
      FileSystemGetDirectoryOptions: base_config_1.TYPE,
      FileSystemGetFileOptions: base_config_1.TYPE,
      FileSystemReadWriteOptions: base_config_1.TYPE,
      FileSystemRemoveOptions: base_config_1.TYPE,
      FontFaceDescriptors: base_config_1.TYPE,
      FontFaceSetLoadEventInit: base_config_1.TYPE,
      GetNotificationOptions: base_config_1.TYPE,
      HkdfParams: base_config_1.TYPE,
      HmacImportParams: base_config_1.TYPE,
      HmacKeyGenParams: base_config_1.TYPE,
      IDBDatabaseInfo: base_config_1.TYPE,
      IDBIndexParameters: base_config_1.TYPE,
      IDBObjectStoreParameters: base_config_1.TYPE,
      IDBTransactionOptions: base_config_1.TYPE,
      IDBVersionChangeEventInit: base_config_1.TYPE,
      ImageBitmapOptions: base_config_1.TYPE,
      ImageBitmapRenderingContextSettings: base_config_1.TYPE,
      ImageDataSettings: base_config_1.TYPE,
      ImageEncodeOptions: base_config_1.TYPE,
      ImportMeta: base_config_1.TYPE,
      JsonWebKey: base_config_1.TYPE,
      KeyAlgorithm: base_config_1.TYPE,
      LockInfo: base_config_1.TYPE,
      LockManagerSnapshot: base_config_1.TYPE,
      LockOptions: base_config_1.TYPE,
      MediaCapabilitiesDecodingInfo: base_config_1.TYPE,
      MediaCapabilitiesEncodingInfo: base_config_1.TYPE,
      MediaCapabilitiesInfo: base_config_1.TYPE,
      MediaConfiguration: base_config_1.TYPE,
      MediaDecodingConfiguration: base_config_1.TYPE,
      MediaEncodingConfiguration: base_config_1.TYPE,
      MessageEventInit: base_config_1.TYPE,
      MultiCacheQueryOptions: base_config_1.TYPE,
      NavigationPreloadState: base_config_1.TYPE,
      NotificationEventInit: base_config_1.TYPE,
      NotificationOptions: base_config_1.TYPE,
      Pbkdf2Params: base_config_1.TYPE,
      PerformanceMarkOptions: base_config_1.TYPE,
      PerformanceMeasureOptions: base_config_1.TYPE,
      PerformanceObserverInit: base_config_1.TYPE,
      PermissionDescriptor: base_config_1.TYPE,
      PlaneLayout: base_config_1.TYPE,
      ProgressEventInit: base_config_1.TYPE,
      PromiseRejectionEventInit: base_config_1.TYPE,
      PushEventInit: base_config_1.TYPE,
      PushSubscriptionJSON: base_config_1.TYPE,
      PushSubscriptionOptionsInit: base_config_1.TYPE,
      QueuingStrategy: base_config_1.TYPE,
      QueuingStrategyInit: base_config_1.TYPE,
      RTCEncodedAudioFrameMetadata: base_config_1.TYPE,
      RTCEncodedVideoFrameMetadata: base_config_1.TYPE,
      ReadableStreamGetReaderOptions: base_config_1.TYPE,
      ReadableStreamReadDoneResult: base_config_1.TYPE,
      ReadableStreamReadValueResult: base_config_1.TYPE,
      ReadableWritablePair: base_config_1.TYPE,
      RegistrationOptions: base_config_1.TYPE,
      ReportingObserverOptions: base_config_1.TYPE,
      RequestInit: base_config_1.TYPE,
      ResponseInit: base_config_1.TYPE,
      RsaHashedImportParams: base_config_1.TYPE,
      RsaHashedKeyGenParams: base_config_1.TYPE,
      RsaKeyGenParams: base_config_1.TYPE,
      RsaOaepParams: base_config_1.TYPE,
      RsaOtherPrimesInfo: base_config_1.TYPE,
      RsaPssParams: base_config_1.TYPE,
      SecurityPolicyViolationEventInit: base_config_1.TYPE,
      StorageEstimate: base_config_1.TYPE,
      StreamPipeOptions: base_config_1.TYPE,
      StructuredSerializeOptions: base_config_1.TYPE,
      TextDecodeOptions: base_config_1.TYPE,
      TextDecoderOptions: base_config_1.TYPE,
      TextEncoderEncodeIntoResult: base_config_1.TYPE,
      Transformer: base_config_1.TYPE,
      UnderlyingByteSource: base_config_1.TYPE,
      UnderlyingDefaultSource: base_config_1.TYPE,
      UnderlyingSink: base_config_1.TYPE,
      UnderlyingSource: base_config_1.TYPE,
      VideoColorSpaceInit: base_config_1.TYPE,
      VideoConfiguration: base_config_1.TYPE,
      VideoDecoderConfig: base_config_1.TYPE,
      VideoDecoderInit: base_config_1.TYPE,
      VideoDecoderSupport: base_config_1.TYPE,
      VideoEncoderConfig: base_config_1.TYPE,
      VideoEncoderEncodeOptions: base_config_1.TYPE,
      VideoEncoderInit: base_config_1.TYPE,
      VideoEncoderSupport: base_config_1.TYPE,
      VideoFrameBufferInit: base_config_1.TYPE,
      VideoFrameCopyToOptions: base_config_1.TYPE,
      VideoFrameInit: base_config_1.TYPE,
      WebGLContextAttributes: base_config_1.TYPE,
      WebGLContextEventInit: base_config_1.TYPE,
      WebTransportCloseInfo: base_config_1.TYPE,
      WebTransportErrorOptions: base_config_1.TYPE,
      WebTransportHash: base_config_1.TYPE,
      WebTransportOptions: base_config_1.TYPE,
      WebTransportSendStreamOptions: base_config_1.TYPE,
      WorkerOptions: base_config_1.TYPE,
      WriteParams: base_config_1.TYPE,
      ANGLE_instanced_arrays: base_config_1.TYPE,
      AbortController: base_config_1.TYPE_VALUE,
      AbortSignalEventMap: base_config_1.TYPE,
      AbortSignal: base_config_1.TYPE_VALUE,
      AbstractWorkerEventMap: base_config_1.TYPE,
      AbstractWorker: base_config_1.TYPE,
      AnimationFrameProvider: base_config_1.TYPE,
      Blob: base_config_1.TYPE_VALUE,
      Body: base_config_1.TYPE,
      BroadcastChannelEventMap: base_config_1.TYPE,
      BroadcastChannel: base_config_1.TYPE_VALUE,
      ByteLengthQueuingStrategy: base_config_1.TYPE_VALUE,
      CSSImageValue: base_config_1.TYPE_VALUE,
      CSSKeywordValue: base_config_1.TYPE_VALUE,
      CSSMathClamp: base_config_1.TYPE_VALUE,
      CSSMathInvert: base_config_1.TYPE_VALUE,
      CSSMathMax: base_config_1.TYPE_VALUE,
      CSSMathMin: base_config_1.TYPE_VALUE,
      CSSMathNegate: base_config_1.TYPE_VALUE,
      CSSMathProduct: base_config_1.TYPE_VALUE,
      CSSMathSum: base_config_1.TYPE_VALUE,
      CSSMathValue: base_config_1.TYPE_VALUE,
      CSSMatrixComponent: base_config_1.TYPE_VALUE,
      CSSNumericArray: base_config_1.TYPE_VALUE,
      CSSNumericValue: base_config_1.TYPE_VALUE,
      CSSPerspective: base_config_1.TYPE_VALUE,
      CSSRotate: base_config_1.TYPE_VALUE,
      CSSScale: base_config_1.TYPE_VALUE,
      CSSSkew: base_config_1.TYPE_VALUE,
      CSSSkewX: base_config_1.TYPE_VALUE,
      CSSSkewY: base_config_1.TYPE_VALUE,
      CSSStyleValue: base_config_1.TYPE_VALUE,
      CSSTransformComponent: base_config_1.TYPE_VALUE,
      CSSTransformValue: base_config_1.TYPE_VALUE,
      CSSTranslate: base_config_1.TYPE_VALUE,
      CSSUnitValue: base_config_1.TYPE_VALUE,
      CSSUnparsedValue: base_config_1.TYPE_VALUE,
      CSSVariableReferenceValue: base_config_1.TYPE_VALUE,
      Cache: base_config_1.TYPE_VALUE,
      CacheStorage: base_config_1.TYPE_VALUE,
      CanvasCompositing: base_config_1.TYPE,
      CanvasDrawImage: base_config_1.TYPE,
      CanvasDrawPath: base_config_1.TYPE,
      CanvasFillStrokeStyles: base_config_1.TYPE,
      CanvasFilters: base_config_1.TYPE,
      CanvasGradient: base_config_1.TYPE_VALUE,
      CanvasImageData: base_config_1.TYPE,
      CanvasImageSmoothing: base_config_1.TYPE,
      CanvasPath: base_config_1.TYPE,
      CanvasPathDrawingStyles: base_config_1.TYPE,
      CanvasPattern: base_config_1.TYPE_VALUE,
      CanvasRect: base_config_1.TYPE,
      CanvasShadowStyles: base_config_1.TYPE,
      CanvasState: base_config_1.TYPE,
      CanvasText: base_config_1.TYPE,
      CanvasTextDrawingStyles: base_config_1.TYPE,
      CanvasTransform: base_config_1.TYPE,
      Client: base_config_1.TYPE_VALUE,
      Clients: base_config_1.TYPE_VALUE,
      CloseEvent: base_config_1.TYPE_VALUE,
      CompressionStream: base_config_1.TYPE_VALUE,
      CountQueuingStrategy: base_config_1.TYPE_VALUE,
      Crypto: base_config_1.TYPE_VALUE,
      CryptoKey: base_config_1.TYPE_VALUE,
      CustomEvent: base_config_1.TYPE_VALUE,
      DOMException: base_config_1.TYPE_VALUE,
      DOMMatrix: base_config_1.TYPE_VALUE,
      DOMMatrixReadOnly: base_config_1.TYPE_VALUE,
      DOMPoint: base_config_1.TYPE_VALUE,
      DOMPointReadOnly: base_config_1.TYPE_VALUE,
      DOMQuad: base_config_1.TYPE_VALUE,
      DOMRect: base_config_1.TYPE_VALUE,
      DOMRectReadOnly: base_config_1.TYPE_VALUE,
      DOMStringList: base_config_1.TYPE_VALUE,
      DecompressionStream: base_config_1.TYPE_VALUE,
      DedicatedWorkerGlobalScopeEventMap: base_config_1.TYPE,
      DedicatedWorkerGlobalScope: base_config_1.TYPE_VALUE,
      EXT_blend_minmax: base_config_1.TYPE,
      EXT_color_buffer_float: base_config_1.TYPE,
      EXT_color_buffer_half_float: base_config_1.TYPE,
      EXT_float_blend: base_config_1.TYPE,
      EXT_frag_depth: base_config_1.TYPE,
      EXT_sRGB: base_config_1.TYPE,
      EXT_shader_texture_lod: base_config_1.TYPE,
      EXT_texture_compression_bptc: base_config_1.TYPE,
      EXT_texture_compression_rgtc: base_config_1.TYPE,
      EXT_texture_filter_anisotropic: base_config_1.TYPE,
      EXT_texture_norm16: base_config_1.TYPE,
      EncodedVideoChunk: base_config_1.TYPE_VALUE,
      ErrorEvent: base_config_1.TYPE_VALUE,
      Event: base_config_1.TYPE_VALUE,
      EventListener: base_config_1.TYPE,
      EventListenerObject: base_config_1.TYPE,
      EventSourceEventMap: base_config_1.TYPE,
      EventSource: base_config_1.TYPE_VALUE,
      EventTarget: base_config_1.TYPE_VALUE,
      ExtendableEvent: base_config_1.TYPE_VALUE,
      ExtendableMessageEvent: base_config_1.TYPE_VALUE,
      FetchEvent: base_config_1.TYPE_VALUE,
      File: base_config_1.TYPE_VALUE,
      FileList: base_config_1.TYPE_VALUE,
      FileReaderEventMap: base_config_1.TYPE,
      FileReader: base_config_1.TYPE_VALUE,
      FileReaderSync: base_config_1.TYPE_VALUE,
      FileSystemDirectoryHandle: base_config_1.TYPE_VALUE,
      FileSystemFileHandle: base_config_1.TYPE_VALUE,
      FileSystemHandle: base_config_1.TYPE_VALUE,
      FileSystemSyncAccessHandle: base_config_1.TYPE_VALUE,
      FileSystemWritableFileStream: base_config_1.TYPE_VALUE,
      FontFace: base_config_1.TYPE_VALUE,
      FontFaceSetEventMap: base_config_1.TYPE,
      FontFaceSet: base_config_1.TYPE_VALUE,
      FontFaceSetLoadEvent: base_config_1.TYPE_VALUE,
      FontFaceSource: base_config_1.TYPE,
      FormData: base_config_1.TYPE_VALUE,
      GenericTransformStream: base_config_1.TYPE,
      Headers: base_config_1.TYPE_VALUE,
      IDBCursor: base_config_1.TYPE_VALUE,
      IDBCursorWithValue: base_config_1.TYPE_VALUE,
      IDBDatabaseEventMap: base_config_1.TYPE,
      IDBDatabase: base_config_1.TYPE_VALUE,
      IDBFactory: base_config_1.TYPE_VALUE,
      IDBIndex: base_config_1.TYPE_VALUE,
      IDBKeyRange: base_config_1.TYPE_VALUE,
      IDBObjectStore: base_config_1.TYPE_VALUE,
      IDBOpenDBRequestEventMap: base_config_1.TYPE,
      IDBOpenDBRequest: base_config_1.TYPE_VALUE,
      IDBRequestEventMap: base_config_1.TYPE,
      IDBRequest: base_config_1.TYPE_VALUE,
      IDBTransactionEventMap: base_config_1.TYPE,
      IDBTransaction: base_config_1.TYPE_VALUE,
      IDBVersionChangeEvent: base_config_1.TYPE_VALUE,
      ImageBitmap: base_config_1.TYPE_VALUE,
      ImageBitmapRenderingContext: base_config_1.TYPE_VALUE,
      ImageData: base_config_1.TYPE_VALUE,
      KHR_parallel_shader_compile: base_config_1.TYPE,
      Lock: base_config_1.TYPE_VALUE,
      LockManager: base_config_1.TYPE_VALUE,
      MediaCapabilities: base_config_1.TYPE_VALUE,
      MessageChannel: base_config_1.TYPE_VALUE,
      MessageEvent: base_config_1.TYPE_VALUE,
      MessagePortEventMap: base_config_1.TYPE,
      MessagePort: base_config_1.TYPE_VALUE,
      NavigationPreloadManager: base_config_1.TYPE_VALUE,
      NavigatorBadge: base_config_1.TYPE,
      NavigatorConcurrentHardware: base_config_1.TYPE,
      NavigatorID: base_config_1.TYPE,
      NavigatorLanguage: base_config_1.TYPE,
      NavigatorLocks: base_config_1.TYPE,
      NavigatorOnLine: base_config_1.TYPE,
      NavigatorStorage: base_config_1.TYPE,
      NotificationEventMap: base_config_1.TYPE,
      Notification: base_config_1.TYPE_VALUE,
      NotificationEvent: base_config_1.TYPE_VALUE,
      OES_draw_buffers_indexed: base_config_1.TYPE,
      OES_element_index_uint: base_config_1.TYPE,
      OES_fbo_render_mipmap: base_config_1.TYPE,
      OES_standard_derivatives: base_config_1.TYPE,
      OES_texture_float: base_config_1.TYPE,
      OES_texture_float_linear: base_config_1.TYPE,
      OES_texture_half_float: base_config_1.TYPE,
      OES_texture_half_float_linear: base_config_1.TYPE,
      OES_vertex_array_object: base_config_1.TYPE,
      OVR_multiview2: base_config_1.TYPE,
      OffscreenCanvasEventMap: base_config_1.TYPE,
      OffscreenCanvas: base_config_1.TYPE_VALUE,
      OffscreenCanvasRenderingContext2D: base_config_1.TYPE_VALUE,
      Path2D: base_config_1.TYPE_VALUE,
      PerformanceEventMap: base_config_1.TYPE,
      Performance: base_config_1.TYPE_VALUE,
      PerformanceEntry: base_config_1.TYPE_VALUE,
      PerformanceMark: base_config_1.TYPE_VALUE,
      PerformanceMeasure: base_config_1.TYPE_VALUE,
      PerformanceObserver: base_config_1.TYPE_VALUE,
      PerformanceObserverEntryList: base_config_1.TYPE_VALUE,
      PerformanceResourceTiming: base_config_1.TYPE_VALUE,
      PerformanceServerTiming: base_config_1.TYPE_VALUE,
      PermissionStatusEventMap: base_config_1.TYPE,
      PermissionStatus: base_config_1.TYPE_VALUE,
      Permissions: base_config_1.TYPE_VALUE,
      ProgressEvent: base_config_1.TYPE_VALUE,
      PromiseRejectionEvent: base_config_1.TYPE_VALUE,
      PushEvent: base_config_1.TYPE_VALUE,
      PushManager: base_config_1.TYPE_VALUE,
      PushMessageData: base_config_1.TYPE_VALUE,
      PushSubscription: base_config_1.TYPE_VALUE,
      PushSubscriptionOptions: base_config_1.TYPE_VALUE,
      RTCEncodedAudioFrame: base_config_1.TYPE_VALUE,
      RTCEncodedVideoFrame: base_config_1.TYPE_VALUE,
      RTCRtpScriptTransformer: base_config_1.TYPE_VALUE,
      RTCTransformEvent: base_config_1.TYPE_VALUE,
      ReadableByteStreamController: base_config_1.TYPE_VALUE,
      ReadableStream: base_config_1.TYPE_VALUE,
      ReadableStreamBYOBReader: base_config_1.TYPE_VALUE,
      ReadableStreamBYOBRequest: base_config_1.TYPE_VALUE,
      ReadableStreamDefaultController: base_config_1.TYPE_VALUE,
      ReadableStreamDefaultReader: base_config_1.TYPE_VALUE,
      ReadableStreamGenericReader: base_config_1.TYPE,
      Report: base_config_1.TYPE_VALUE,
      ReportBody: base_config_1.TYPE_VALUE,
      ReportingObserver: base_config_1.TYPE_VALUE,
      Request: base_config_1.TYPE_VALUE,
      Response: base_config_1.TYPE_VALUE,
      SecurityPolicyViolationEvent: base_config_1.TYPE_VALUE,
      ServiceWorkerEventMap: base_config_1.TYPE,
      ServiceWorker: base_config_1.TYPE_VALUE,
      ServiceWorkerContainerEventMap: base_config_1.TYPE,
      ServiceWorkerContainer: base_config_1.TYPE_VALUE,
      ServiceWorkerGlobalScopeEventMap: base_config_1.TYPE,
      ServiceWorkerGlobalScope: base_config_1.TYPE_VALUE,
      ServiceWorkerRegistrationEventMap: base_config_1.TYPE,
      ServiceWorkerRegistration: base_config_1.TYPE_VALUE,
      SharedWorkerGlobalScopeEventMap: base_config_1.TYPE,
      SharedWorkerGlobalScope: base_config_1.TYPE_VALUE,
      StorageManager: base_config_1.TYPE_VALUE,
      StylePropertyMapReadOnly: base_config_1.TYPE_VALUE,
      SubtleCrypto: base_config_1.TYPE_VALUE,
      TextDecoder: base_config_1.TYPE_VALUE,
      TextDecoderCommon: base_config_1.TYPE,
      TextDecoderStream: base_config_1.TYPE_VALUE,
      TextEncoder: base_config_1.TYPE_VALUE,
      TextEncoderCommon: base_config_1.TYPE,
      TextEncoderStream: base_config_1.TYPE_VALUE,
      TextMetrics: base_config_1.TYPE_VALUE,
      TransformStream: base_config_1.TYPE_VALUE,
      TransformStreamDefaultController: base_config_1.TYPE_VALUE,
      URL: base_config_1.TYPE_VALUE,
      URLSearchParams: base_config_1.TYPE_VALUE,
      VideoColorSpace: base_config_1.TYPE_VALUE,
      VideoDecoderEventMap: base_config_1.TYPE,
      VideoDecoder: base_config_1.TYPE_VALUE,
      VideoEncoderEventMap: base_config_1.TYPE,
      VideoEncoder: base_config_1.TYPE_VALUE,
      VideoFrame: base_config_1.TYPE_VALUE,
      WEBGL_color_buffer_float: base_config_1.TYPE,
      WEBGL_compressed_texture_astc: base_config_1.TYPE,
      WEBGL_compressed_texture_etc: base_config_1.TYPE,
      WEBGL_compressed_texture_etc1: base_config_1.TYPE,
      WEBGL_compressed_texture_pvrtc: base_config_1.TYPE,
      WEBGL_compressed_texture_s3tc: base_config_1.TYPE,
      WEBGL_compressed_texture_s3tc_srgb: base_config_1.TYPE,
      WEBGL_debug_renderer_info: base_config_1.TYPE,
      WEBGL_debug_shaders: base_config_1.TYPE,
      WEBGL_depth_texture: base_config_1.TYPE,
      WEBGL_draw_buffers: base_config_1.TYPE,
      WEBGL_lose_context: base_config_1.TYPE,
      WEBGL_multi_draw: base_config_1.TYPE,
      WebGL2RenderingContext: base_config_1.TYPE_VALUE,
      WebGL2RenderingContextBase: base_config_1.TYPE,
      WebGL2RenderingContextOverloads: base_config_1.TYPE,
      WebGLActiveInfo: base_config_1.TYPE_VALUE,
      WebGLBuffer: base_config_1.TYPE_VALUE,
      WebGLContextEvent: base_config_1.TYPE_VALUE,
      WebGLFramebuffer: base_config_1.TYPE_VALUE,
      WebGLProgram: base_config_1.TYPE_VALUE,
      WebGLQuery: base_config_1.TYPE_VALUE,
      WebGLRenderbuffer: base_config_1.TYPE_VALUE,
      WebGLRenderingContext: base_config_1.TYPE_VALUE,
      WebGLRenderingContextBase: base_config_1.TYPE,
      WebGLRenderingContextOverloads: base_config_1.TYPE,
      WebGLSampler: base_config_1.TYPE_VALUE,
      WebGLShader: base_config_1.TYPE_VALUE,
      WebGLShaderPrecisionFormat: base_config_1.TYPE_VALUE,
      WebGLSync: base_config_1.TYPE_VALUE,
      WebGLTexture: base_config_1.TYPE_VALUE,
      WebGLTransformFeedback: base_config_1.TYPE_VALUE,
      WebGLUniformLocation: base_config_1.TYPE_VALUE,
      WebGLVertexArrayObject: base_config_1.TYPE_VALUE,
      WebGLVertexArrayObjectOES: base_config_1.TYPE,
      WebSocketEventMap: base_config_1.TYPE,
      WebSocket: base_config_1.TYPE_VALUE,
      WebTransport: base_config_1.TYPE_VALUE,
      WebTransportBidirectionalStream: base_config_1.TYPE_VALUE,
      WebTransportDatagramDuplexStream: base_config_1.TYPE_VALUE,
      WebTransportError: base_config_1.TYPE_VALUE,
      WindowClient: base_config_1.TYPE_VALUE,
      WindowOrWorkerGlobalScope: base_config_1.TYPE,
      WorkerEventMap: base_config_1.TYPE,
      Worker: base_config_1.TYPE_VALUE,
      WorkerGlobalScopeEventMap: base_config_1.TYPE,
      WorkerGlobalScope: base_config_1.TYPE_VALUE,
      WorkerLocation: base_config_1.TYPE_VALUE,
      WorkerNavigator: base_config_1.TYPE_VALUE,
      WritableStream: base_config_1.TYPE_VALUE,
      WritableStreamDefaultController: base_config_1.TYPE_VALUE,
      WritableStreamDefaultWriter: base_config_1.TYPE_VALUE,
      XMLHttpRequestEventMap: base_config_1.TYPE,
      XMLHttpRequest: base_config_1.TYPE_VALUE,
      XMLHttpRequestEventTargetEventMap: base_config_1.TYPE,
      XMLHttpRequestEventTarget: base_config_1.TYPE_VALUE,
      XMLHttpRequestUpload: base_config_1.TYPE_VALUE,
      Console: base_config_1.TYPE,
      WebAssembly: base_config_1.TYPE_VALUE,
      EncodedVideoChunkOutputCallback: base_config_1.TYPE,
      FrameRequestCallback: base_config_1.TYPE,
      LockGrantedCallback: base_config_1.TYPE,
      OnErrorEventHandlerNonNull: base_config_1.TYPE,
      PerformanceObserverCallback: base_config_1.TYPE,
      QueuingStrategySize: base_config_1.TYPE,
      ReportingObserverCallback: base_config_1.TYPE,
      TransformerFlushCallback: base_config_1.TYPE,
      TransformerStartCallback: base_config_1.TYPE,
      TransformerTransformCallback: base_config_1.TYPE,
      UnderlyingSinkAbortCallback: base_config_1.TYPE,
      UnderlyingSinkCloseCallback: base_config_1.TYPE,
      UnderlyingSinkStartCallback: base_config_1.TYPE,
      UnderlyingSinkWriteCallback: base_config_1.TYPE,
      UnderlyingSourceCancelCallback: base_config_1.TYPE,
      UnderlyingSourcePullCallback: base_config_1.TYPE,
      UnderlyingSourceStartCallback: base_config_1.TYPE,
      VideoFrameOutputCallback: base_config_1.TYPE,
      VoidFunction: base_config_1.TYPE,
      WebCodecsErrorCallback: base_config_1.TYPE,
      AlgorithmIdentifier: base_config_1.TYPE,
      AllowSharedBufferSource: base_config_1.TYPE,
      BigInteger: base_config_1.TYPE,
      BinaryData: base_config_1.TYPE,
      BlobPart: base_config_1.TYPE,
      BodyInit: base_config_1.TYPE,
      BufferSource: base_config_1.TYPE,
      CSSKeywordish: base_config_1.TYPE,
      CSSNumberish: base_config_1.TYPE,
      CSSPerspectiveValue: base_config_1.TYPE,
      CSSUnparsedSegment: base_config_1.TYPE,
      CanvasImageSource: base_config_1.TYPE,
      DOMHighResTimeStamp: base_config_1.TYPE,
      EpochTimeStamp: base_config_1.TYPE,
      EventListenerOrEventListenerObject: base_config_1.TYPE,
      FileSystemWriteChunkType: base_config_1.TYPE,
      Float32List: base_config_1.TYPE,
      FormDataEntryValue: base_config_1.TYPE,
      GLbitfield: base_config_1.TYPE,
      GLboolean: base_config_1.TYPE,
      GLclampf: base_config_1.TYPE,
      GLenum: base_config_1.TYPE,
      GLfloat: base_config_1.TYPE,
      GLint: base_config_1.TYPE,
      GLint64: base_config_1.TYPE,
      GLintptr: base_config_1.TYPE,
      GLsizei: base_config_1.TYPE,
      GLsizeiptr: base_config_1.TYPE,
      GLuint: base_config_1.TYPE,
      GLuint64: base_config_1.TYPE,
      HashAlgorithmIdentifier: base_config_1.TYPE,
      HeadersInit: base_config_1.TYPE,
      IDBValidKey: base_config_1.TYPE,
      ImageBitmapSource: base_config_1.TYPE,
      Int32List: base_config_1.TYPE,
      MessageEventSource: base_config_1.TYPE,
      NamedCurve: base_config_1.TYPE,
      OffscreenRenderingContext: base_config_1.TYPE,
      OnErrorEventHandler: base_config_1.TYPE,
      PerformanceEntryList: base_config_1.TYPE,
      PushMessageDataInit: base_config_1.TYPE,
      ReadableStreamController: base_config_1.TYPE,
      ReadableStreamReadResult: base_config_1.TYPE,
      ReadableStreamReader: base_config_1.TYPE,
      ReportList: base_config_1.TYPE,
      RequestInfo: base_config_1.TYPE,
      TexImageSource: base_config_1.TYPE,
      TimerHandler: base_config_1.TYPE,
      Transferable: base_config_1.TYPE,
      Uint32List: base_config_1.TYPE,
      XMLHttpRequestBodyInit: base_config_1.TYPE,
      AlphaOption: base_config_1.TYPE,
      AvcBitstreamFormat: base_config_1.TYPE,
      BinaryType: base_config_1.TYPE,
      CSSMathOperator: base_config_1.TYPE,
      CSSNumericBaseType: base_config_1.TYPE,
      CanvasDirection: base_config_1.TYPE,
      CanvasFillRule: base_config_1.TYPE,
      CanvasFontKerning: base_config_1.TYPE,
      CanvasFontStretch: base_config_1.TYPE,
      CanvasFontVariantCaps: base_config_1.TYPE,
      CanvasLineCap: base_config_1.TYPE,
      CanvasLineJoin: base_config_1.TYPE,
      CanvasTextAlign: base_config_1.TYPE,
      CanvasTextBaseline: base_config_1.TYPE,
      CanvasTextRendering: base_config_1.TYPE,
      ClientTypes: base_config_1.TYPE,
      CodecState: base_config_1.TYPE,
      ColorGamut: base_config_1.TYPE,
      ColorSpaceConversion: base_config_1.TYPE,
      CompressionFormat: base_config_1.TYPE,
      DocumentVisibilityState: base_config_1.TYPE,
      EncodedVideoChunkType: base_config_1.TYPE,
      EndingType: base_config_1.TYPE,
      FileSystemHandleKind: base_config_1.TYPE,
      FontDisplay: base_config_1.TYPE,
      FontFaceLoadStatus: base_config_1.TYPE,
      FontFaceSetLoadStatus: base_config_1.TYPE,
      FrameType: base_config_1.TYPE,
      GlobalCompositeOperation: base_config_1.TYPE,
      HardwareAcceleration: base_config_1.TYPE,
      HdrMetadataType: base_config_1.TYPE,
      IDBCursorDirection: base_config_1.TYPE,
      IDBRequestReadyState: base_config_1.TYPE,
      IDBTransactionDurability: base_config_1.TYPE,
      IDBTransactionMode: base_config_1.TYPE,
      ImageOrientation: base_config_1.TYPE,
      ImageSmoothingQuality: base_config_1.TYPE,
      KeyFormat: base_config_1.TYPE,
      KeyType: base_config_1.TYPE,
      KeyUsage: base_config_1.TYPE,
      LatencyMode: base_config_1.TYPE,
      LockMode: base_config_1.TYPE,
      MediaDecodingType: base_config_1.TYPE,
      MediaEncodingType: base_config_1.TYPE,
      NotificationDirection: base_config_1.TYPE,
      NotificationPermission: base_config_1.TYPE,
      OffscreenRenderingContextId: base_config_1.TYPE,
      PermissionName: base_config_1.TYPE,
      PermissionState: base_config_1.TYPE,
      PredefinedColorSpace: base_config_1.TYPE,
      PremultiplyAlpha: base_config_1.TYPE,
      PushEncryptionKeyName: base_config_1.TYPE,
      RTCEncodedVideoFrameType: base_config_1.TYPE,
      ReadableStreamReaderMode: base_config_1.TYPE,
      ReadableStreamType: base_config_1.TYPE,
      ReferrerPolicy: base_config_1.TYPE,
      RequestCache: base_config_1.TYPE,
      RequestCredentials: base_config_1.TYPE,
      RequestDestination: base_config_1.TYPE,
      RequestMode: base_config_1.TYPE,
      RequestPriority: base_config_1.TYPE,
      RequestRedirect: base_config_1.TYPE,
      ResizeQuality: base_config_1.TYPE,
      ResponseType: base_config_1.TYPE,
      SecurityPolicyViolationEventDisposition: base_config_1.TYPE,
      ServiceWorkerState: base_config_1.TYPE,
      ServiceWorkerUpdateViaCache: base_config_1.TYPE,
      TransferFunction: base_config_1.TYPE,
      VideoColorPrimaries: base_config_1.TYPE,
      VideoEncoderBitrateMode: base_config_1.TYPE,
      VideoMatrixCoefficients: base_config_1.TYPE,
      VideoPixelFormat: base_config_1.TYPE,
      VideoTransferCharacteristics: base_config_1.TYPE,
      WebGLPowerPreference: base_config_1.TYPE,
      WebTransportCongestionControl: base_config_1.TYPE,
      WebTransportErrorSource: base_config_1.TYPE,
      WorkerType: base_config_1.TYPE,
      WriteCommandType: base_config_1.TYPE,
      XMLHttpRequestResponseType: base_config_1.TYPE
    };
  }
});

// node_modules/.pnpm/@typescript-eslint+scope-manager@7.10.0/node_modules/@typescript-eslint/scope-manager/dist/lib/webworker.asynciterable.js
var require_webworker_asynciterable = __commonJS({
  "node_modules/.pnpm/@typescript-eslint+scope-manager@7.10.0/node_modules/@typescript-eslint/scope-manager/dist/lib/webworker.asynciterable.js"(exports2) {
    "use strict";
    init_cjs_shims();
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.webworker_asynciterable = void 0;
    var base_config_1 = require_base_config();
    exports2.webworker_asynciterable = {
      FileSystemDirectoryHandle: base_config_1.TYPE
    };
  }
});

// node_modules/.pnpm/@typescript-eslint+scope-manager@7.10.0/node_modules/@typescript-eslint/scope-manager/dist/lib/webworker.iterable.js
var require_webworker_iterable = __commonJS({
  "node_modules/.pnpm/@typescript-eslint+scope-manager@7.10.0/node_modules/@typescript-eslint/scope-manager/dist/lib/webworker.iterable.js"(exports2) {
    "use strict";
    init_cjs_shims();
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.webworker_iterable = void 0;
    var base_config_1 = require_base_config();
    exports2.webworker_iterable = {
      CSSNumericArray: base_config_1.TYPE,
      CSSTransformValue: base_config_1.TYPE,
      CSSUnparsedValue: base_config_1.TYPE,
      Cache: base_config_1.TYPE,
      CanvasPath: base_config_1.TYPE,
      CanvasPathDrawingStyles: base_config_1.TYPE,
      DOMStringList: base_config_1.TYPE,
      FileList: base_config_1.TYPE,
      FontFaceSet: base_config_1.TYPE,
      FormData: base_config_1.TYPE,
      Headers: base_config_1.TYPE,
      IDBDatabase: base_config_1.TYPE,
      IDBObjectStore: base_config_1.TYPE,
      MessageEvent: base_config_1.TYPE,
      StylePropertyMapReadOnly: base_config_1.TYPE,
      SubtleCrypto: base_config_1.TYPE,
      URLSearchParams: base_config_1.TYPE,
      WEBGL_draw_buffers: base_config_1.TYPE,
      WEBGL_multi_draw: base_config_1.TYPE,
      WebGL2RenderingContextBase: base_config_1.TYPE,
      WebGL2RenderingContextOverloads: base_config_1.TYPE,
      WebGLRenderingContextBase: base_config_1.TYPE,
      WebGLRenderingContextOverloads: base_config_1.TYPE
    };
  }
});

// node_modules/.pnpm/@typescript-eslint+scope-manager@7.10.0/node_modules/@typescript-eslint/scope-manager/dist/lib/index.js
var require_lib4 = __commonJS({
  "node_modules/.pnpm/@typescript-eslint+scope-manager@7.10.0/node_modules/@typescript-eslint/scope-manager/dist/lib/index.js"(exports2) {
    "use strict";
    init_cjs_shims();
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.lib = void 0;
    var decorators_1 = require_decorators();
    var decorators_legacy_1 = require_decorators_legacy();
    var dom_1 = require_dom();
    var dom_asynciterable_1 = require_dom_asynciterable();
    var dom_iterable_1 = require_dom_iterable();
    var es5_1 = require_es5();
    var es6_1 = require_es6();
    var es7_1 = require_es7();
    var es2015_1 = require_es2015();
    var es2015_collection_1 = require_es2015_collection();
    var es2015_core_1 = require_es2015_core();
    var es2015_generator_1 = require_es2015_generator();
    var es2015_iterable_1 = require_es2015_iterable();
    var es2015_promise_1 = require_es2015_promise();
    var es2015_proxy_1 = require_es2015_proxy();
    var es2015_reflect_1 = require_es2015_reflect();
    var es2015_symbol_1 = require_es2015_symbol();
    var es2015_symbol_wellknown_1 = require_es2015_symbol_wellknown();
    var es2016_1 = require_es2016();
    var es2016_array_include_1 = require_es2016_array_include();
    var es2016_full_1 = require_es2016_full();
    var es2016_intl_1 = require_es2016_intl();
    var es2017_1 = require_es2017();
    var es2017_date_1 = require_es2017_date();
    var es2017_full_1 = require_es2017_full();
    var es2017_intl_1 = require_es2017_intl();
    var es2017_object_1 = require_es2017_object();
    var es2017_sharedmemory_1 = require_es2017_sharedmemory();
    var es2017_string_1 = require_es2017_string();
    var es2017_typedarrays_1 = require_es2017_typedarrays();
    var es2018_1 = require_es2018();
    var es2018_asyncgenerator_1 = require_es2018_asyncgenerator();
    var es2018_asynciterable_1 = require_es2018_asynciterable();
    var es2018_full_1 = require_es2018_full();
    var es2018_intl_1 = require_es2018_intl();
    var es2018_promise_1 = require_es2018_promise();
    var es2018_regexp_1 = require_es2018_regexp();
    var es2019_1 = require_es2019();
    var es2019_array_1 = require_es2019_array();
    var es2019_full_1 = require_es2019_full();
    var es2019_intl_1 = require_es2019_intl();
    var es2019_object_1 = require_es2019_object();
    var es2019_string_1 = require_es2019_string();
    var es2019_symbol_1 = require_es2019_symbol();
    var es2020_1 = require_es2020();
    var es2020_bigint_1 = require_es2020_bigint();
    var es2020_date_1 = require_es2020_date();
    var es2020_full_1 = require_es2020_full();
    var es2020_intl_1 = require_es2020_intl();
    var es2020_number_1 = require_es2020_number();
    var es2020_promise_1 = require_es2020_promise();
    var es2020_sharedmemory_1 = require_es2020_sharedmemory();
    var es2020_string_1 = require_es2020_string();
    var es2020_symbol_wellknown_1 = require_es2020_symbol_wellknown();
    var es2021_1 = require_es2021();
    var es2021_full_1 = require_es2021_full();
    var es2021_intl_1 = require_es2021_intl();
    var es2021_promise_1 = require_es2021_promise();
    var es2021_string_1 = require_es2021_string();
    var es2021_weakref_1 = require_es2021_weakref();
    var es2022_1 = require_es2022();
    var es2022_array_1 = require_es2022_array();
    var es2022_error_1 = require_es2022_error();
    var es2022_full_1 = require_es2022_full();
    var es2022_intl_1 = require_es2022_intl();
    var es2022_object_1 = require_es2022_object();
    var es2022_regexp_1 = require_es2022_regexp();
    var es2022_sharedmemory_1 = require_es2022_sharedmemory();
    var es2022_string_1 = require_es2022_string();
    var es2023_1 = require_es2023();
    var es2023_array_1 = require_es2023_array();
    var es2023_collection_1 = require_es2023_collection();
    var es2023_full_1 = require_es2023_full();
    var esnext_1 = require_esnext();
    var esnext_array_1 = require_esnext_array();
    var esnext_asynciterable_1 = require_esnext_asynciterable();
    var esnext_bigint_1 = require_esnext_bigint();
    var esnext_collection_1 = require_esnext_collection();
    var esnext_decorators_1 = require_esnext_decorators();
    var esnext_disposable_1 = require_esnext_disposable();
    var esnext_full_1 = require_esnext_full();
    var esnext_intl_1 = require_esnext_intl();
    var esnext_object_1 = require_esnext_object();
    var esnext_promise_1 = require_esnext_promise();
    var esnext_string_1 = require_esnext_string();
    var esnext_symbol_1 = require_esnext_symbol();
    var esnext_weakref_1 = require_esnext_weakref();
    var lib_1 = require_lib3();
    var scripthost_1 = require_scripthost();
    var webworker_1 = require_webworker();
    var webworker_asynciterable_1 = require_webworker_asynciterable();
    var webworker_importscripts_1 = require_webworker_importscripts();
    var webworker_iterable_1 = require_webworker_iterable();
    var lib = {
      es5: es5_1.es5,
      es6: es6_1.es6,
      es2015: es2015_1.es2015,
      es7: es7_1.es7,
      es2016: es2016_1.es2016,
      es2017: es2017_1.es2017,
      es2018: es2018_1.es2018,
      es2019: es2019_1.es2019,
      es2020: es2020_1.es2020,
      es2021: es2021_1.es2021,
      es2022: es2022_1.es2022,
      es2023: es2023_1.es2023,
      esnext: esnext_1.esnext,
      dom: dom_1.dom,
      "dom.iterable": dom_iterable_1.dom_iterable,
      "dom.asynciterable": dom_asynciterable_1.dom_asynciterable,
      webworker: webworker_1.webworker,
      "webworker.importscripts": webworker_importscripts_1.webworker_importscripts,
      "webworker.iterable": webworker_iterable_1.webworker_iterable,
      "webworker.asynciterable": webworker_asynciterable_1.webworker_asynciterable,
      scripthost: scripthost_1.scripthost,
      "es2015.core": es2015_core_1.es2015_core,
      "es2015.collection": es2015_collection_1.es2015_collection,
      "es2015.generator": es2015_generator_1.es2015_generator,
      "es2015.iterable": es2015_iterable_1.es2015_iterable,
      "es2015.promise": es2015_promise_1.es2015_promise,
      "es2015.proxy": es2015_proxy_1.es2015_proxy,
      "es2015.reflect": es2015_reflect_1.es2015_reflect,
      "es2015.symbol": es2015_symbol_1.es2015_symbol,
      "es2015.symbol.wellknown": es2015_symbol_wellknown_1.es2015_symbol_wellknown,
      "es2016.array.include": es2016_array_include_1.es2016_array_include,
      "es2016.intl": es2016_intl_1.es2016_intl,
      "es2017.date": es2017_date_1.es2017_date,
      "es2017.object": es2017_object_1.es2017_object,
      "es2017.sharedmemory": es2017_sharedmemory_1.es2017_sharedmemory,
      "es2017.string": es2017_string_1.es2017_string,
      "es2017.intl": es2017_intl_1.es2017_intl,
      "es2017.typedarrays": es2017_typedarrays_1.es2017_typedarrays,
      "es2018.asyncgenerator": es2018_asyncgenerator_1.es2018_asyncgenerator,
      "es2018.asynciterable": es2018_asynciterable_1.es2018_asynciterable,
      "es2018.intl": es2018_intl_1.es2018_intl,
      "es2018.promise": es2018_promise_1.es2018_promise,
      "es2018.regexp": es2018_regexp_1.es2018_regexp,
      "es2019.array": es2019_array_1.es2019_array,
      "es2019.object": es2019_object_1.es2019_object,
      "es2019.string": es2019_string_1.es2019_string,
      "es2019.symbol": es2019_symbol_1.es2019_symbol,
      "es2019.intl": es2019_intl_1.es2019_intl,
      "es2020.bigint": es2020_bigint_1.es2020_bigint,
      "es2020.date": es2020_date_1.es2020_date,
      "es2020.promise": es2020_promise_1.es2020_promise,
      "es2020.sharedmemory": es2020_sharedmemory_1.es2020_sharedmemory,
      "es2020.string": es2020_string_1.es2020_string,
      "es2020.symbol.wellknown": es2020_symbol_wellknown_1.es2020_symbol_wellknown,
      "es2020.intl": es2020_intl_1.es2020_intl,
      "es2020.number": es2020_number_1.es2020_number,
      "es2021.promise": es2021_promise_1.es2021_promise,
      "es2021.string": es2021_string_1.es2021_string,
      "es2021.weakref": es2021_weakref_1.es2021_weakref,
      "es2021.intl": es2021_intl_1.es2021_intl,
      "es2022.array": es2022_array_1.es2022_array,
      "es2022.error": es2022_error_1.es2022_error,
      "es2022.intl": es2022_intl_1.es2022_intl,
      "es2022.object": es2022_object_1.es2022_object,
      "es2022.sharedmemory": es2022_sharedmemory_1.es2022_sharedmemory,
      "es2022.string": es2022_string_1.es2022_string,
      "es2022.regexp": es2022_regexp_1.es2022_regexp,
      "es2023.array": es2023_array_1.es2023_array,
      "es2023.collection": es2023_collection_1.es2023_collection,
      "esnext.array": esnext_array_1.esnext_array,
      "esnext.collection": esnext_collection_1.esnext_collection,
      "esnext.symbol": esnext_symbol_1.esnext_symbol,
      "esnext.asynciterable": esnext_asynciterable_1.esnext_asynciterable,
      "esnext.intl": esnext_intl_1.esnext_intl,
      "esnext.disposable": esnext_disposable_1.esnext_disposable,
      "esnext.bigint": esnext_bigint_1.esnext_bigint,
      "esnext.string": esnext_string_1.esnext_string,
      "esnext.promise": esnext_promise_1.esnext_promise,
      "esnext.weakref": esnext_weakref_1.esnext_weakref,
      "esnext.decorators": esnext_decorators_1.esnext_decorators,
      "esnext.object": esnext_object_1.esnext_object,
      decorators: decorators_1.decorators,
      "decorators.legacy": decorators_legacy_1.decorators_legacy,
      "es2016.full": es2016_full_1.es2016_full,
      "es2017.full": es2017_full_1.es2017_full,
      "es2018.full": es2018_full_1.es2018_full,
      "es2019.full": es2019_full_1.es2019_full,
      "es2020.full": es2020_full_1.es2020_full,
      "es2021.full": es2021_full_1.es2021_full,
      "es2022.full": es2022_full_1.es2022_full,
      "es2023.full": es2023_full_1.es2023_full,
      "esnext.full": esnext_full_1.esnext_full,
      lib: lib_1.lib
    };
    exports2.lib = lib;
  }
});

// node_modules/.pnpm/@typescript-eslint+scope-manager@7.10.0/node_modules/@typescript-eslint/scope-manager/dist/referencer/Reference.js
var require_Reference = __commonJS({
  "node_modules/.pnpm/@typescript-eslint+scope-manager@7.10.0/node_modules/@typescript-eslint/scope-manager/dist/referencer/Reference.js"(exports2) {
    "use strict";
    init_cjs_shims();
    var __classPrivateFieldGet = exports2 && exports2.__classPrivateFieldGet || function(receiver, state, kind, f) {
      if (kind === "a" && !f)
        throw new TypeError("Private accessor was defined without a getter");
      if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
        throw new TypeError("Cannot read private member from an object whose class did not declare it");
      return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
    };
    var __classPrivateFieldSet = exports2 && exports2.__classPrivateFieldSet || function(receiver, state, value, kind, f) {
      if (kind === "m")
        throw new TypeError("Private method is not writable");
      if (kind === "a" && !f)
        throw new TypeError("Private accessor was defined without a setter");
      if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
        throw new TypeError("Cannot write private member to an object whose class did not declare it");
      return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
    };
    var _Reference_flag;
    var _Reference_referenceType;
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.ReferenceTypeFlag = exports2.ReferenceFlag = exports2.Reference = void 0;
    var ID_1 = require_ID();
    var ReferenceFlag;
    (function(ReferenceFlag2) {
      ReferenceFlag2[ReferenceFlag2["Read"] = 1] = "Read";
      ReferenceFlag2[ReferenceFlag2["Write"] = 2] = "Write";
      ReferenceFlag2[ReferenceFlag2["ReadWrite"] = 3] = "ReadWrite";
    })(ReferenceFlag || (exports2.ReferenceFlag = ReferenceFlag = {}));
    var generator = (0, ID_1.createIdGenerator)();
    var ReferenceTypeFlag;
    (function(ReferenceTypeFlag2) {
      ReferenceTypeFlag2[ReferenceTypeFlag2["Value"] = 1] = "Value";
      ReferenceTypeFlag2[ReferenceTypeFlag2["Type"] = 2] = "Type";
    })(ReferenceTypeFlag || (exports2.ReferenceTypeFlag = ReferenceTypeFlag = {}));
    var Reference = class {
      /**
       * True if this reference can reference types
       */
      get isTypeReference() {
        return (__classPrivateFieldGet(this, _Reference_referenceType, "f") & ReferenceTypeFlag.Type) !== 0;
      }
      /**
       * True if this reference can reference values
       */
      get isValueReference() {
        return (__classPrivateFieldGet(this, _Reference_referenceType, "f") & ReferenceTypeFlag.Value) !== 0;
      }
      constructor(identifier, scope, flag, writeExpr, maybeImplicitGlobal, init, referenceType = ReferenceTypeFlag.Value) {
        this.$id = generator();
        _Reference_flag.set(this, void 0);
        _Reference_referenceType.set(this, void 0);
        this.identifier = identifier;
        this.from = scope;
        this.resolved = null;
        __classPrivateFieldSet(this, _Reference_flag, flag, "f");
        if (this.isWrite()) {
          this.writeExpr = writeExpr;
          this.init = init;
        }
        this.maybeImplicitGlobal = maybeImplicitGlobal;
        __classPrivateFieldSet(this, _Reference_referenceType, referenceType, "f");
      }
      /**
       * Whether the reference is writeable.
       * @public
       */
      isWrite() {
        return !!(__classPrivateFieldGet(this, _Reference_flag, "f") & ReferenceFlag.Write);
      }
      /**
       * Whether the reference is readable.
       * @public
       */
      isRead() {
        return !!(__classPrivateFieldGet(this, _Reference_flag, "f") & ReferenceFlag.Read);
      }
      /**
       * Whether the reference is read-only.
       * @public
       */
      isReadOnly() {
        return __classPrivateFieldGet(this, _Reference_flag, "f") === ReferenceFlag.Read;
      }
      /**
       * Whether the reference is write-only.
       * @public
       */
      isWriteOnly() {
        return __classPrivateFieldGet(this, _Reference_flag, "f") === ReferenceFlag.Write;
      }
      /**
       * Whether the reference is read-write.
       * @public
       */
      isReadWrite() {
        return __classPrivateFieldGet(this, _Reference_flag, "f") === ReferenceFlag.ReadWrite;
      }
    };
    exports2.Reference = Reference;
    _Reference_flag = /* @__PURE__ */ new WeakMap(), _Reference_referenceType = /* @__PURE__ */ new WeakMap();
  }
});

// node_modules/.pnpm/@typescript-eslint+scope-manager@7.10.0/node_modules/@typescript-eslint/scope-manager/dist/variable/VariableBase.js
var require_VariableBase = __commonJS({
  "node_modules/.pnpm/@typescript-eslint+scope-manager@7.10.0/node_modules/@typescript-eslint/scope-manager/dist/variable/VariableBase.js"(exports2) {
    "use strict";
    init_cjs_shims();
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.VariableBase = void 0;
    var ID_1 = require_ID();
    var generator = (0, ID_1.createIdGenerator)();
    var VariableBase = class {
      constructor(name, scope) {
        this.$id = generator();
        this.defs = [];
        this.eslintUsed = false;
        this.identifiers = [];
        this.references = [];
        this.name = name;
        this.scope = scope;
      }
    };
    exports2.VariableBase = VariableBase;
  }
});

// node_modules/.pnpm/@typescript-eslint+scope-manager@7.10.0/node_modules/@typescript-eslint/scope-manager/dist/variable/ESLintScopeVariable.js
var require_ESLintScopeVariable = __commonJS({
  "node_modules/.pnpm/@typescript-eslint+scope-manager@7.10.0/node_modules/@typescript-eslint/scope-manager/dist/variable/ESLintScopeVariable.js"(exports2) {
    "use strict";
    init_cjs_shims();
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.ESLintScopeVariable = void 0;
    var VariableBase_1 = require_VariableBase();
    var ESLintScopeVariable = class extends VariableBase_1.VariableBase {
    };
    exports2.ESLintScopeVariable = ESLintScopeVariable;
  }
});

// node_modules/.pnpm/@typescript-eslint+scope-manager@7.10.0/node_modules/@typescript-eslint/scope-manager/dist/variable/ImplicitLibVariable.js
var require_ImplicitLibVariable = __commonJS({
  "node_modules/.pnpm/@typescript-eslint+scope-manager@7.10.0/node_modules/@typescript-eslint/scope-manager/dist/variable/ImplicitLibVariable.js"(exports2) {
    "use strict";
    init_cjs_shims();
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.ImplicitLibVariable = void 0;
    var ESLintScopeVariable_1 = require_ESLintScopeVariable();
    var ImplicitLibVariable = class extends ESLintScopeVariable_1.ESLintScopeVariable {
      constructor(scope, name, { isTypeVariable, isValueVariable, writeable, eslintImplicitGlobalSetting }) {
        super(name, scope);
        this.isTypeVariable = isTypeVariable ?? false;
        this.isValueVariable = isValueVariable ?? false;
        this.writeable = writeable ?? false;
        this.eslintImplicitGlobalSetting = eslintImplicitGlobalSetting ?? "readonly";
      }
    };
    exports2.ImplicitLibVariable = ImplicitLibVariable;
  }
});

// node_modules/.pnpm/@typescript-eslint+scope-manager@7.10.0/node_modules/@typescript-eslint/scope-manager/dist/variable/Variable.js
var require_Variable = __commonJS({
  "node_modules/.pnpm/@typescript-eslint+scope-manager@7.10.0/node_modules/@typescript-eslint/scope-manager/dist/variable/Variable.js"(exports2) {
    "use strict";
    init_cjs_shims();
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.Variable = void 0;
    var VariableBase_1 = require_VariableBase();
    var Variable = class extends VariableBase_1.VariableBase {
      /**
       * `true` if the variable is valid in a type context, false otherwise
       * @public
       */
      get isTypeVariable() {
        if (this.defs.length === 0) {
          return true;
        }
        return this.defs.some((def) => def.isTypeDefinition);
      }
      /**
       * `true` if the variable is valid in a value context, false otherwise
       * @public
       */
      get isValueVariable() {
        if (this.defs.length === 0) {
          return true;
        }
        return this.defs.some((def) => def.isVariableDefinition);
      }
    };
    exports2.Variable = Variable;
  }
});

// node_modules/.pnpm/@typescript-eslint+scope-manager@7.10.0/node_modules/@typescript-eslint/scope-manager/dist/variable/index.js
var require_variable = __commonJS({
  "node_modules/.pnpm/@typescript-eslint+scope-manager@7.10.0/node_modules/@typescript-eslint/scope-manager/dist/variable/index.js"(exports2) {
    "use strict";
    init_cjs_shims();
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.Variable = exports2.ImplicitLibVariable = exports2.ESLintScopeVariable = void 0;
    var ESLintScopeVariable_1 = require_ESLintScopeVariable();
    Object.defineProperty(exports2, "ESLintScopeVariable", { enumerable: true, get: function() {
      return ESLintScopeVariable_1.ESLintScopeVariable;
    } });
    var ImplicitLibVariable_1 = require_ImplicitLibVariable();
    Object.defineProperty(exports2, "ImplicitLibVariable", { enumerable: true, get: function() {
      return ImplicitLibVariable_1.ImplicitLibVariable;
    } });
    var Variable_1 = require_Variable();
    Object.defineProperty(exports2, "Variable", { enumerable: true, get: function() {
      return Variable_1.Variable;
    } });
  }
});

// node_modules/.pnpm/@typescript-eslint+scope-manager@7.10.0/node_modules/@typescript-eslint/scope-manager/dist/scope/ScopeType.js
var require_ScopeType = __commonJS({
  "node_modules/.pnpm/@typescript-eslint+scope-manager@7.10.0/node_modules/@typescript-eslint/scope-manager/dist/scope/ScopeType.js"(exports2) {
    "use strict";
    init_cjs_shims();
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.ScopeType = void 0;
    var ScopeType;
    (function(ScopeType2) {
      ScopeType2["block"] = "block";
      ScopeType2["catch"] = "catch";
      ScopeType2["class"] = "class";
      ScopeType2["classFieldInitializer"] = "class-field-initializer";
      ScopeType2["classStaticBlock"] = "class-static-block";
      ScopeType2["conditionalType"] = "conditionalType";
      ScopeType2["for"] = "for";
      ScopeType2["function"] = "function";
      ScopeType2["functionExpressionName"] = "function-expression-name";
      ScopeType2["functionType"] = "functionType";
      ScopeType2["global"] = "global";
      ScopeType2["mappedType"] = "mappedType";
      ScopeType2["module"] = "module";
      ScopeType2["switch"] = "switch";
      ScopeType2["tsEnum"] = "tsEnum";
      ScopeType2["tsModule"] = "tsModule";
      ScopeType2["type"] = "type";
      ScopeType2["with"] = "with";
    })(ScopeType || (exports2.ScopeType = ScopeType = {}));
  }
});

// node_modules/.pnpm/@typescript-eslint+scope-manager@7.10.0/node_modules/@typescript-eslint/scope-manager/dist/scope/ScopeBase.js
var require_ScopeBase = __commonJS({
  "node_modules/.pnpm/@typescript-eslint+scope-manager@7.10.0/node_modules/@typescript-eslint/scope-manager/dist/scope/ScopeBase.js"(exports2) {
    "use strict";
    init_cjs_shims();
    var __classPrivateFieldSet = exports2 && exports2.__classPrivateFieldSet || function(receiver, state, value, kind, f) {
      if (kind === "m")
        throw new TypeError("Private method is not writable");
      if (kind === "a" && !f)
        throw new TypeError("Private accessor was defined without a setter");
      if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
        throw new TypeError("Cannot write private member to an object whose class did not declare it");
      return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
    };
    var __classPrivateFieldGet = exports2 && exports2.__classPrivateFieldGet || function(receiver, state, kind, f) {
      if (kind === "a" && !f)
        throw new TypeError("Private accessor was defined without a getter");
      if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
        throw new TypeError("Cannot read private member from an object whose class did not declare it");
      return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
    };
    var _ScopeBase_declaredVariables;
    var _ScopeBase_dynamic;
    var _ScopeBase_staticCloseRef;
    var _ScopeBase_dynamicCloseRef;
    var _ScopeBase_globalCloseRef;
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.ScopeBase = void 0;
    var types_1 = require_dist();
    var assert_1 = require_assert();
    var definition_1 = require_definition();
    var ID_1 = require_ID();
    var Reference_1 = require_Reference();
    var variable_1 = require_variable();
    var ScopeType_1 = require_ScopeType();
    function isStrictScope(scope, block, isMethodDefinition) {
      let body;
      if (scope.upper?.isStrict) {
        return true;
      }
      if (isMethodDefinition) {
        return true;
      }
      if (scope.type === ScopeType_1.ScopeType.class || scope.type === ScopeType_1.ScopeType.conditionalType || scope.type === ScopeType_1.ScopeType.functionType || scope.type === ScopeType_1.ScopeType.mappedType || scope.type === ScopeType_1.ScopeType.module || scope.type === ScopeType_1.ScopeType.tsEnum || scope.type === ScopeType_1.ScopeType.tsModule || scope.type === ScopeType_1.ScopeType.type) {
        return true;
      }
      if (scope.type === ScopeType_1.ScopeType.block || scope.type === ScopeType_1.ScopeType.switch) {
        return false;
      }
      if (scope.type === ScopeType_1.ScopeType.function) {
        const functionBody = block;
        switch (functionBody.type) {
          case types_1.AST_NODE_TYPES.ArrowFunctionExpression:
            if (functionBody.body.type !== types_1.AST_NODE_TYPES.BlockStatement) {
              return false;
            }
            body = functionBody.body;
            break;
          case types_1.AST_NODE_TYPES.Program:
            body = functionBody;
            break;
          default:
            body = functionBody.body;
        }
        if (!body) {
          return false;
        }
      } else if (scope.type === ScopeType_1.ScopeType.global) {
        body = block;
      } else {
        return false;
      }
      for (const stmt of body.body) {
        if (stmt.type !== types_1.AST_NODE_TYPES.ExpressionStatement) {
          break;
        }
        if (stmt.directive === "use strict") {
          return true;
        }
        const expr = stmt.expression;
        if (expr.type !== types_1.AST_NODE_TYPES.Literal) {
          break;
        }
        if (expr.raw === '"use strict"' || expr.raw === "'use strict'") {
          return true;
        }
        if (expr.value === "use strict") {
          return true;
        }
      }
      return false;
    }
    function registerScope(scopeManager, scope) {
      scopeManager.scopes.push(scope);
      const scopes = scopeManager.nodeToScope.get(scope.block);
      if (scopes) {
        scopes.push(scope);
      } else {
        scopeManager.nodeToScope.set(scope.block, [scope]);
      }
    }
    var generator = (0, ID_1.createIdGenerator)();
    var VARIABLE_SCOPE_TYPES = /* @__PURE__ */ new Set([
      ScopeType_1.ScopeType.classFieldInitializer,
      ScopeType_1.ScopeType.classStaticBlock,
      ScopeType_1.ScopeType.function,
      ScopeType_1.ScopeType.global,
      ScopeType_1.ScopeType.module,
      ScopeType_1.ScopeType.tsModule
    ]);
    var ScopeBase = class {
      constructor(scopeManager, type, upperScope, block, isMethodDefinition) {
        this.$id = generator();
        this.childScopes = [];
        _ScopeBase_declaredVariables.set(this, void 0);
        _ScopeBase_dynamic.set(this, void 0);
        this.functionExpressionScope = false;
        this.leftToResolve = [];
        this.references = [];
        this.set = /* @__PURE__ */ new Map();
        this.through = [];
        this.variables = [];
        _ScopeBase_staticCloseRef.set(this, (ref) => {
          const resolve2 = () => {
            const name = ref.identifier.name;
            const variable = this.set.get(name);
            if (!variable) {
              return false;
            }
            if (!this.isValidResolution(ref, variable)) {
              return false;
            }
            const isValidTypeReference = ref.isTypeReference && variable.isTypeVariable;
            const isValidValueReference = ref.isValueReference && variable.isValueVariable;
            if (!isValidTypeReference && !isValidValueReference) {
              return false;
            }
            variable.references.push(ref);
            ref.resolved = variable;
            return true;
          };
          if (!resolve2()) {
            this.delegateToUpperScope(ref);
          }
        });
        _ScopeBase_dynamicCloseRef.set(this, (ref) => {
          let current = this;
          do {
            current.through.push(ref);
            current = current.upper;
          } while (current);
        });
        _ScopeBase_globalCloseRef.set(this, (ref, scopeManager2) => {
          if (this.shouldStaticallyCloseForGlobal(ref, scopeManager2)) {
            __classPrivateFieldGet(this, _ScopeBase_staticCloseRef, "f").call(this, ref);
          } else {
            __classPrivateFieldGet(this, _ScopeBase_dynamicCloseRef, "f").call(this, ref);
          }
        });
        const upperScopeAsScopeBase = upperScope;
        this.type = type;
        __classPrivateFieldSet(this, _ScopeBase_dynamic, this.type === ScopeType_1.ScopeType.global || this.type === ScopeType_1.ScopeType.with, "f");
        this.block = block;
        this.variableScope = this.isVariableScope() ? this : (
          // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
          upperScopeAsScopeBase.variableScope
        );
        this.upper = upperScope;
        this.isStrict = isStrictScope(this, block, isMethodDefinition);
        upperScopeAsScopeBase?.childScopes.push(this);
        __classPrivateFieldSet(this, _ScopeBase_declaredVariables, scopeManager.declaredVariables, "f");
        registerScope(scopeManager, this);
      }
      isVariableScope() {
        return VARIABLE_SCOPE_TYPES.has(this.type);
      }
      shouldStaticallyClose() {
        return !__classPrivateFieldGet(this, _ScopeBase_dynamic, "f");
      }
      shouldStaticallyCloseForGlobal(ref, scopeManager) {
        const name = ref.identifier.name;
        const variable = this.set.get(name);
        if (!variable) {
          return false;
        }
        if (scopeManager.isModule()) {
          return true;
        }
        const defs = variable.defs;
        return defs.length > 0 && defs.every((def) => {
          if (def.type === definition_1.DefinitionType.Variable && def.parent.kind === "var") {
            return false;
          }
          return true;
        });
      }
      close(scopeManager) {
        let closeRef;
        if (this.shouldStaticallyClose()) {
          closeRef = __classPrivateFieldGet(this, _ScopeBase_staticCloseRef, "f");
        } else if (this.type !== "global") {
          closeRef = __classPrivateFieldGet(this, _ScopeBase_dynamicCloseRef, "f");
        } else {
          closeRef = __classPrivateFieldGet(this, _ScopeBase_globalCloseRef, "f");
        }
        (0, assert_1.assert)(this.leftToResolve);
        this.leftToResolve.forEach((ref) => closeRef(ref, scopeManager));
        this.leftToResolve = null;
        return this.upper;
      }
      /**
       * To override by function scopes.
       * References in default parameters isn't resolved to variables which are in their function body.
       */
      isValidResolution(_ref, _variable) {
        return true;
      }
      delegateToUpperScope(ref) {
        this.upper?.leftToResolve?.push(ref);
        this.through.push(ref);
      }
      addDeclaredVariablesOfNode(variable, node2) {
        if (node2 == null) {
          return;
        }
        let variables = __classPrivateFieldGet(this, _ScopeBase_declaredVariables, "f").get(node2);
        if (variables == null) {
          variables = [];
          __classPrivateFieldGet(this, _ScopeBase_declaredVariables, "f").set(node2, variables);
        }
        if (!variables.includes(variable)) {
          variables.push(variable);
        }
      }
      defineVariable(nameOrVariable, set, variables, node2, def) {
        const name = typeof nameOrVariable === "string" ? nameOrVariable : nameOrVariable.name;
        let variable = set.get(name);
        if (!variable) {
          variable = typeof nameOrVariable === "string" ? new variable_1.Variable(name, this) : nameOrVariable;
          set.set(name, variable);
          variables.push(variable);
        }
        if (def) {
          variable.defs.push(def);
          this.addDeclaredVariablesOfNode(variable, def.node);
          this.addDeclaredVariablesOfNode(variable, def.parent);
        }
        if (node2) {
          variable.identifiers.push(node2);
        }
      }
      defineIdentifier(node2, def) {
        this.defineVariable(node2.name, this.set, this.variables, node2, def);
      }
      defineLiteralIdentifier(node2, def) {
        this.defineVariable(node2.value, this.set, this.variables, null, def);
      }
      referenceValue(node2, assign = Reference_1.ReferenceFlag.Read, writeExpr, maybeImplicitGlobal, init = false) {
        const ref = new Reference_1.Reference(node2, this, assign, writeExpr, maybeImplicitGlobal, init, Reference_1.ReferenceTypeFlag.Value);
        this.references.push(ref);
        this.leftToResolve?.push(ref);
      }
      referenceType(node2) {
        const ref = new Reference_1.Reference(node2, this, Reference_1.ReferenceFlag.Read, null, null, false, Reference_1.ReferenceTypeFlag.Type);
        this.references.push(ref);
        this.leftToResolve?.push(ref);
      }
      referenceDualValueType(node2) {
        const ref = new Reference_1.Reference(node2, this, Reference_1.ReferenceFlag.Read, null, null, false, Reference_1.ReferenceTypeFlag.Type | Reference_1.ReferenceTypeFlag.Value);
        this.references.push(ref);
        this.leftToResolve?.push(ref);
      }
    };
    exports2.ScopeBase = ScopeBase;
    _ScopeBase_declaredVariables = /* @__PURE__ */ new WeakMap(), _ScopeBase_dynamic = /* @__PURE__ */ new WeakMap(), _ScopeBase_staticCloseRef = /* @__PURE__ */ new WeakMap(), _ScopeBase_dynamicCloseRef = /* @__PURE__ */ new WeakMap(), _ScopeBase_globalCloseRef = /* @__PURE__ */ new WeakMap();
  }
});

// node_modules/.pnpm/@typescript-eslint+scope-manager@7.10.0/node_modules/@typescript-eslint/scope-manager/dist/scope/BlockScope.js
var require_BlockScope = __commonJS({
  "node_modules/.pnpm/@typescript-eslint+scope-manager@7.10.0/node_modules/@typescript-eslint/scope-manager/dist/scope/BlockScope.js"(exports2) {
    "use strict";
    init_cjs_shims();
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.BlockScope = void 0;
    var ScopeBase_1 = require_ScopeBase();
    var ScopeType_1 = require_ScopeType();
    var BlockScope = class extends ScopeBase_1.ScopeBase {
      constructor(scopeManager, upperScope, block) {
        super(scopeManager, ScopeType_1.ScopeType.block, upperScope, block, false);
      }
    };
    exports2.BlockScope = BlockScope;
  }
});

// node_modules/.pnpm/@typescript-eslint+scope-manager@7.10.0/node_modules/@typescript-eslint/scope-manager/dist/scope/CatchScope.js
var require_CatchScope = __commonJS({
  "node_modules/.pnpm/@typescript-eslint+scope-manager@7.10.0/node_modules/@typescript-eslint/scope-manager/dist/scope/CatchScope.js"(exports2) {
    "use strict";
    init_cjs_shims();
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.CatchScope = void 0;
    var ScopeBase_1 = require_ScopeBase();
    var ScopeType_1 = require_ScopeType();
    var CatchScope = class extends ScopeBase_1.ScopeBase {
      constructor(scopeManager, upperScope, block) {
        super(scopeManager, ScopeType_1.ScopeType.catch, upperScope, block, false);
      }
    };
    exports2.CatchScope = CatchScope;
  }
});

// node_modules/.pnpm/@typescript-eslint+scope-manager@7.10.0/node_modules/@typescript-eslint/scope-manager/dist/scope/ClassFieldInitializerScope.js
var require_ClassFieldInitializerScope = __commonJS({
  "node_modules/.pnpm/@typescript-eslint+scope-manager@7.10.0/node_modules/@typescript-eslint/scope-manager/dist/scope/ClassFieldInitializerScope.js"(exports2) {
    "use strict";
    init_cjs_shims();
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.ClassFieldInitializerScope = void 0;
    var ScopeBase_1 = require_ScopeBase();
    var ScopeType_1 = require_ScopeType();
    var ClassFieldInitializerScope = class extends ScopeBase_1.ScopeBase {
      constructor(scopeManager, upperScope, block) {
        super(scopeManager, ScopeType_1.ScopeType.classFieldInitializer, upperScope, block, false);
      }
    };
    exports2.ClassFieldInitializerScope = ClassFieldInitializerScope;
  }
});

// node_modules/.pnpm/@typescript-eslint+scope-manager@7.10.0/node_modules/@typescript-eslint/scope-manager/dist/scope/ClassScope.js
var require_ClassScope = __commonJS({
  "node_modules/.pnpm/@typescript-eslint+scope-manager@7.10.0/node_modules/@typescript-eslint/scope-manager/dist/scope/ClassScope.js"(exports2) {
    "use strict";
    init_cjs_shims();
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.ClassScope = void 0;
    var ScopeBase_1 = require_ScopeBase();
    var ScopeType_1 = require_ScopeType();
    var ClassScope = class extends ScopeBase_1.ScopeBase {
      constructor(scopeManager, upperScope, block) {
        super(scopeManager, ScopeType_1.ScopeType.class, upperScope, block, false);
      }
    };
    exports2.ClassScope = ClassScope;
  }
});

// node_modules/.pnpm/@typescript-eslint+scope-manager@7.10.0/node_modules/@typescript-eslint/scope-manager/dist/scope/ConditionalTypeScope.js
var require_ConditionalTypeScope = __commonJS({
  "node_modules/.pnpm/@typescript-eslint+scope-manager@7.10.0/node_modules/@typescript-eslint/scope-manager/dist/scope/ConditionalTypeScope.js"(exports2) {
    "use strict";
    init_cjs_shims();
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.ConditionalTypeScope = void 0;
    var ScopeBase_1 = require_ScopeBase();
    var ScopeType_1 = require_ScopeType();
    var ConditionalTypeScope = class extends ScopeBase_1.ScopeBase {
      constructor(scopeManager, upperScope, block) {
        super(scopeManager, ScopeType_1.ScopeType.conditionalType, upperScope, block, false);
      }
    };
    exports2.ConditionalTypeScope = ConditionalTypeScope;
  }
});

// node_modules/.pnpm/@typescript-eslint+scope-manager@7.10.0/node_modules/@typescript-eslint/scope-manager/dist/scope/ForScope.js
var require_ForScope = __commonJS({
  "node_modules/.pnpm/@typescript-eslint+scope-manager@7.10.0/node_modules/@typescript-eslint/scope-manager/dist/scope/ForScope.js"(exports2) {
    "use strict";
    init_cjs_shims();
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.ForScope = void 0;
    var ScopeBase_1 = require_ScopeBase();
    var ScopeType_1 = require_ScopeType();
    var ForScope = class extends ScopeBase_1.ScopeBase {
      constructor(scopeManager, upperScope, block) {
        super(scopeManager, ScopeType_1.ScopeType.for, upperScope, block, false);
      }
    };
    exports2.ForScope = ForScope;
  }
});

// node_modules/.pnpm/@typescript-eslint+scope-manager@7.10.0/node_modules/@typescript-eslint/scope-manager/dist/scope/FunctionExpressionNameScope.js
var require_FunctionExpressionNameScope = __commonJS({
  "node_modules/.pnpm/@typescript-eslint+scope-manager@7.10.0/node_modules/@typescript-eslint/scope-manager/dist/scope/FunctionExpressionNameScope.js"(exports2) {
    "use strict";
    init_cjs_shims();
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.FunctionExpressionNameScope = void 0;
    var definition_1 = require_definition();
    var ScopeBase_1 = require_ScopeBase();
    var ScopeType_1 = require_ScopeType();
    var FunctionExpressionNameScope = class extends ScopeBase_1.ScopeBase {
      constructor(scopeManager, upperScope, block) {
        super(scopeManager, ScopeType_1.ScopeType.functionExpressionName, upperScope, block, false);
        if (block.id) {
          this.defineIdentifier(block.id, new definition_1.FunctionNameDefinition(block.id, block));
        }
        this.functionExpressionScope = true;
      }
    };
    exports2.FunctionExpressionNameScope = FunctionExpressionNameScope;
  }
});

// node_modules/.pnpm/@typescript-eslint+scope-manager@7.10.0/node_modules/@typescript-eslint/scope-manager/dist/scope/FunctionScope.js
var require_FunctionScope = __commonJS({
  "node_modules/.pnpm/@typescript-eslint+scope-manager@7.10.0/node_modules/@typescript-eslint/scope-manager/dist/scope/FunctionScope.js"(exports2) {
    "use strict";
    init_cjs_shims();
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.FunctionScope = void 0;
    var types_1 = require_dist();
    var ScopeBase_1 = require_ScopeBase();
    var ScopeType_1 = require_ScopeType();
    var FunctionScope = class extends ScopeBase_1.ScopeBase {
      constructor(scopeManager, upperScope, block, isMethodDefinition) {
        super(scopeManager, ScopeType_1.ScopeType.function, upperScope, block, isMethodDefinition);
        if (this.block.type !== types_1.AST_NODE_TYPES.ArrowFunctionExpression) {
          this.defineVariable("arguments", this.set, this.variables, null, null);
        }
      }
      // References in default parameters isn't resolved to variables which are in their function body.
      //     const x = 1
      //     function f(a = x) { // This `x` is resolved to the `x` in the outer scope.
      //         const x = 2
      //         console.log(a)
      //     }
      isValidResolution(ref, variable) {
        if (this.block.type === types_1.AST_NODE_TYPES.Program) {
          return true;
        }
        const bodyStart = this.block.body?.range[0] ?? -1;
        return !(variable.scope === this && ref.identifier.range[0] < bodyStart && // the reference is in the parameter part.
        variable.defs.every((d) => d.name.range[0] >= bodyStart));
      }
    };
    exports2.FunctionScope = FunctionScope;
  }
});

// node_modules/.pnpm/@typescript-eslint+scope-manager@7.10.0/node_modules/@typescript-eslint/scope-manager/dist/scope/FunctionTypeScope.js
var require_FunctionTypeScope = __commonJS({
  "node_modules/.pnpm/@typescript-eslint+scope-manager@7.10.0/node_modules/@typescript-eslint/scope-manager/dist/scope/FunctionTypeScope.js"(exports2) {
    "use strict";
    init_cjs_shims();
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.FunctionTypeScope = void 0;
    var ScopeBase_1 = require_ScopeBase();
    var ScopeType_1 = require_ScopeType();
    var FunctionTypeScope = class extends ScopeBase_1.ScopeBase {
      constructor(scopeManager, upperScope, block) {
        super(scopeManager, ScopeType_1.ScopeType.functionType, upperScope, block, false);
      }
    };
    exports2.FunctionTypeScope = FunctionTypeScope;
  }
});

// node_modules/.pnpm/@typescript-eslint+scope-manager@7.10.0/node_modules/@typescript-eslint/scope-manager/dist/scope/GlobalScope.js
var require_GlobalScope = __commonJS({
  "node_modules/.pnpm/@typescript-eslint+scope-manager@7.10.0/node_modules/@typescript-eslint/scope-manager/dist/scope/GlobalScope.js"(exports2) {
    "use strict";
    init_cjs_shims();
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.GlobalScope = void 0;
    var types_1 = require_dist();
    var assert_1 = require_assert();
    var ImplicitGlobalVariableDefinition_1 = require_ImplicitGlobalVariableDefinition();
    var variable_1 = require_variable();
    var ScopeBase_1 = require_ScopeBase();
    var ScopeType_1 = require_ScopeType();
    var GlobalScope = class extends ScopeBase_1.ScopeBase {
      constructor(scopeManager, block) {
        super(scopeManager, ScopeType_1.ScopeType.global, null, block, false);
        this.implicit = {
          set: /* @__PURE__ */ new Map(),
          variables: [],
          leftToBeResolved: []
        };
      }
      defineImplicitVariable(name, options) {
        this.defineVariable(new variable_1.ImplicitLibVariable(this, name, options), this.set, this.variables, null, null);
      }
      close(scopeManager) {
        (0, assert_1.assert)(this.leftToResolve);
        for (const ref of this.leftToResolve) {
          if (ref.maybeImplicitGlobal && !this.set.has(ref.identifier.name)) {
            const info = ref.maybeImplicitGlobal;
            const node2 = info.pattern;
            if (node2.type === types_1.AST_NODE_TYPES.Identifier) {
              this.defineVariable(node2.name, this.implicit.set, this.implicit.variables, node2, new ImplicitGlobalVariableDefinition_1.ImplicitGlobalVariableDefinition(info.pattern, info.node));
            }
          }
        }
        this.implicit.leftToBeResolved = this.leftToResolve;
        return super.close(scopeManager);
      }
    };
    exports2.GlobalScope = GlobalScope;
  }
});

// node_modules/.pnpm/@typescript-eslint+scope-manager@7.10.0/node_modules/@typescript-eslint/scope-manager/dist/scope/MappedTypeScope.js
var require_MappedTypeScope = __commonJS({
  "node_modules/.pnpm/@typescript-eslint+scope-manager@7.10.0/node_modules/@typescript-eslint/scope-manager/dist/scope/MappedTypeScope.js"(exports2) {
    "use strict";
    init_cjs_shims();
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.MappedTypeScope = void 0;
    var ScopeBase_1 = require_ScopeBase();
    var ScopeType_1 = require_ScopeType();
    var MappedTypeScope = class extends ScopeBase_1.ScopeBase {
      constructor(scopeManager, upperScope, block) {
        super(scopeManager, ScopeType_1.ScopeType.mappedType, upperScope, block, false);
      }
    };
    exports2.MappedTypeScope = MappedTypeScope;
  }
});

// node_modules/.pnpm/@typescript-eslint+scope-manager@7.10.0/node_modules/@typescript-eslint/scope-manager/dist/scope/ModuleScope.js
var require_ModuleScope = __commonJS({
  "node_modules/.pnpm/@typescript-eslint+scope-manager@7.10.0/node_modules/@typescript-eslint/scope-manager/dist/scope/ModuleScope.js"(exports2) {
    "use strict";
    init_cjs_shims();
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.ModuleScope = void 0;
    var ScopeBase_1 = require_ScopeBase();
    var ScopeType_1 = require_ScopeType();
    var ModuleScope = class extends ScopeBase_1.ScopeBase {
      constructor(scopeManager, upperScope, block) {
        super(scopeManager, ScopeType_1.ScopeType.module, upperScope, block, false);
      }
    };
    exports2.ModuleScope = ModuleScope;
  }
});

// node_modules/.pnpm/@typescript-eslint+scope-manager@7.10.0/node_modules/@typescript-eslint/scope-manager/dist/scope/Scope.js
var require_Scope = __commonJS({
  "node_modules/.pnpm/@typescript-eslint+scope-manager@7.10.0/node_modules/@typescript-eslint/scope-manager/dist/scope/Scope.js"(exports2) {
    "use strict";
    init_cjs_shims();
    Object.defineProperty(exports2, "__esModule", { value: true });
  }
});

// node_modules/.pnpm/@typescript-eslint+scope-manager@7.10.0/node_modules/@typescript-eslint/scope-manager/dist/scope/SwitchScope.js
var require_SwitchScope = __commonJS({
  "node_modules/.pnpm/@typescript-eslint+scope-manager@7.10.0/node_modules/@typescript-eslint/scope-manager/dist/scope/SwitchScope.js"(exports2) {
    "use strict";
    init_cjs_shims();
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.SwitchScope = void 0;
    var ScopeBase_1 = require_ScopeBase();
    var ScopeType_1 = require_ScopeType();
    var SwitchScope = class extends ScopeBase_1.ScopeBase {
      constructor(scopeManager, upperScope, block) {
        super(scopeManager, ScopeType_1.ScopeType.switch, upperScope, block, false);
      }
    };
    exports2.SwitchScope = SwitchScope;
  }
});

// node_modules/.pnpm/@typescript-eslint+scope-manager@7.10.0/node_modules/@typescript-eslint/scope-manager/dist/scope/TSEnumScope.js
var require_TSEnumScope = __commonJS({
  "node_modules/.pnpm/@typescript-eslint+scope-manager@7.10.0/node_modules/@typescript-eslint/scope-manager/dist/scope/TSEnumScope.js"(exports2) {
    "use strict";
    init_cjs_shims();
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.TSEnumScope = void 0;
    var ScopeBase_1 = require_ScopeBase();
    var ScopeType_1 = require_ScopeType();
    var TSEnumScope = class extends ScopeBase_1.ScopeBase {
      constructor(scopeManager, upperScope, block) {
        super(scopeManager, ScopeType_1.ScopeType.tsEnum, upperScope, block, false);
      }
    };
    exports2.TSEnumScope = TSEnumScope;
  }
});

// node_modules/.pnpm/@typescript-eslint+scope-manager@7.10.0/node_modules/@typescript-eslint/scope-manager/dist/scope/TSModuleScope.js
var require_TSModuleScope = __commonJS({
  "node_modules/.pnpm/@typescript-eslint+scope-manager@7.10.0/node_modules/@typescript-eslint/scope-manager/dist/scope/TSModuleScope.js"(exports2) {
    "use strict";
    init_cjs_shims();
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.TSModuleScope = void 0;
    var ScopeBase_1 = require_ScopeBase();
    var ScopeType_1 = require_ScopeType();
    var TSModuleScope = class extends ScopeBase_1.ScopeBase {
      constructor(scopeManager, upperScope, block) {
        super(scopeManager, ScopeType_1.ScopeType.tsModule, upperScope, block, false);
      }
    };
    exports2.TSModuleScope = TSModuleScope;
  }
});

// node_modules/.pnpm/@typescript-eslint+scope-manager@7.10.0/node_modules/@typescript-eslint/scope-manager/dist/scope/TypeScope.js
var require_TypeScope = __commonJS({
  "node_modules/.pnpm/@typescript-eslint+scope-manager@7.10.0/node_modules/@typescript-eslint/scope-manager/dist/scope/TypeScope.js"(exports2) {
    "use strict";
    init_cjs_shims();
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.TypeScope = void 0;
    var ScopeBase_1 = require_ScopeBase();
    var ScopeType_1 = require_ScopeType();
    var TypeScope = class extends ScopeBase_1.ScopeBase {
      constructor(scopeManager, upperScope, block) {
        super(scopeManager, ScopeType_1.ScopeType.type, upperScope, block, false);
      }
    };
    exports2.TypeScope = TypeScope;
  }
});

// node_modules/.pnpm/@typescript-eslint+scope-manager@7.10.0/node_modules/@typescript-eslint/scope-manager/dist/scope/WithScope.js
var require_WithScope = __commonJS({
  "node_modules/.pnpm/@typescript-eslint+scope-manager@7.10.0/node_modules/@typescript-eslint/scope-manager/dist/scope/WithScope.js"(exports2) {
    "use strict";
    init_cjs_shims();
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.WithScope = void 0;
    var assert_1 = require_assert();
    var ScopeBase_1 = require_ScopeBase();
    var ScopeType_1 = require_ScopeType();
    var WithScope = class extends ScopeBase_1.ScopeBase {
      constructor(scopeManager, upperScope, block) {
        super(scopeManager, ScopeType_1.ScopeType.with, upperScope, block, false);
      }
      close(scopeManager) {
        if (this.shouldStaticallyClose()) {
          return super.close(scopeManager);
        }
        (0, assert_1.assert)(this.leftToResolve);
        this.leftToResolve.forEach((ref) => this.delegateToUpperScope(ref));
        this.leftToResolve = null;
        return this.upper;
      }
    };
    exports2.WithScope = WithScope;
  }
});

// node_modules/.pnpm/@typescript-eslint+scope-manager@7.10.0/node_modules/@typescript-eslint/scope-manager/dist/scope/index.js
var require_scope = __commonJS({
  "node_modules/.pnpm/@typescript-eslint+scope-manager@7.10.0/node_modules/@typescript-eslint/scope-manager/dist/scope/index.js"(exports2) {
    "use strict";
    init_cjs_shims();
    var __createBinding = exports2 && exports2.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __exportStar = exports2 && exports2.__exportStar || function(m, exports3) {
      for (var p in m)
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports3, p))
          __createBinding(exports3, m, p);
    };
    Object.defineProperty(exports2, "__esModule", { value: true });
    __exportStar(require_BlockScope(), exports2);
    __exportStar(require_CatchScope(), exports2);
    __exportStar(require_ClassFieldInitializerScope(), exports2);
    __exportStar(require_ClassScope(), exports2);
    __exportStar(require_ConditionalTypeScope(), exports2);
    __exportStar(require_ForScope(), exports2);
    __exportStar(require_FunctionExpressionNameScope(), exports2);
    __exportStar(require_FunctionScope(), exports2);
    __exportStar(require_FunctionTypeScope(), exports2);
    __exportStar(require_GlobalScope(), exports2);
    __exportStar(require_MappedTypeScope(), exports2);
    __exportStar(require_ModuleScope(), exports2);
    __exportStar(require_Scope(), exports2);
    __exportStar(require_ScopeType(), exports2);
    __exportStar(require_SwitchScope(), exports2);
    __exportStar(require_TSEnumScope(), exports2);
    __exportStar(require_TSModuleScope(), exports2);
    __exportStar(require_TypeScope(), exports2);
    __exportStar(require_WithScope(), exports2);
  }
});

// node_modules/.pnpm/@typescript-eslint+scope-manager@7.10.0/node_modules/@typescript-eslint/scope-manager/dist/referencer/VisitorBase.js
var require_VisitorBase = __commonJS({
  "node_modules/.pnpm/@typescript-eslint+scope-manager@7.10.0/node_modules/@typescript-eslint/scope-manager/dist/referencer/VisitorBase.js"(exports2) {
    "use strict";
    init_cjs_shims();
    var __classPrivateFieldSet = exports2 && exports2.__classPrivateFieldSet || function(receiver, state, value, kind, f) {
      if (kind === "m")
        throw new TypeError("Private method is not writable");
      if (kind === "a" && !f)
        throw new TypeError("Private accessor was defined without a setter");
      if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
        throw new TypeError("Cannot write private member to an object whose class did not declare it");
      return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
    };
    var __classPrivateFieldGet = exports2 && exports2.__classPrivateFieldGet || function(receiver, state, kind, f) {
      if (kind === "a" && !f)
        throw new TypeError("Private accessor was defined without a getter");
      if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
        throw new TypeError("Cannot read private member from an object whose class did not declare it");
      return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
    };
    var _VisitorBase_childVisitorKeys;
    var _VisitorBase_visitChildrenEvenIfSelectorExists;
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.VisitorBase = void 0;
    var visitor_keys_1 = require_dist2();
    function isObject2(obj) {
      return typeof obj === "object" && obj != null;
    }
    function isNode(node2) {
      return isObject2(node2) && typeof node2.type === "string";
    }
    var VisitorBase = class {
      constructor(options) {
        _VisitorBase_childVisitorKeys.set(this, void 0);
        _VisitorBase_visitChildrenEvenIfSelectorExists.set(this, void 0);
        __classPrivateFieldSet(this, _VisitorBase_childVisitorKeys, options.childVisitorKeys ?? visitor_keys_1.visitorKeys, "f");
        __classPrivateFieldSet(this, _VisitorBase_visitChildrenEvenIfSelectorExists, options.visitChildrenEvenIfSelectorExists ?? false, "f");
      }
      /**
       * Default method for visiting children.
       * @param node the node whose children should be visited
       * @param excludeArr a list of keys to not visit
       */
      visitChildren(node2, excludeArr = []) {
        if (node2?.type == null) {
          return;
        }
        const exclude = /* @__PURE__ */ new Set([...excludeArr, "parent"]);
        const children = __classPrivateFieldGet(this, _VisitorBase_childVisitorKeys, "f")[node2.type] ?? Object.keys(node2);
        for (const key of children) {
          if (exclude.has(key)) {
            continue;
          }
          const child = node2[key];
          if (!child) {
            continue;
          }
          if (Array.isArray(child)) {
            for (const subChild of child) {
              if (isNode(subChild)) {
                this.visit(subChild);
              }
            }
          } else if (isNode(child)) {
            this.visit(child);
          }
        }
      }
      /**
       * Dispatching node.
       */
      visit(node2) {
        if (node2?.type == null) {
          return;
        }
        const visitor = this[node2.type];
        if (visitor) {
          visitor.call(this, node2);
          if (!__classPrivateFieldGet(this, _VisitorBase_visitChildrenEvenIfSelectorExists, "f")) {
            return;
          }
        }
        this.visitChildren(node2);
      }
    };
    exports2.VisitorBase = VisitorBase;
    _VisitorBase_childVisitorKeys = /* @__PURE__ */ new WeakMap(), _VisitorBase_visitChildrenEvenIfSelectorExists = /* @__PURE__ */ new WeakMap();
  }
});

// node_modules/.pnpm/@typescript-eslint+scope-manager@7.10.0/node_modules/@typescript-eslint/scope-manager/dist/referencer/PatternVisitor.js
var require_PatternVisitor = __commonJS({
  "node_modules/.pnpm/@typescript-eslint+scope-manager@7.10.0/node_modules/@typescript-eslint/scope-manager/dist/referencer/PatternVisitor.js"(exports2) {
    "use strict";
    init_cjs_shims();
    var __classPrivateFieldSet = exports2 && exports2.__classPrivateFieldSet || function(receiver, state, value, kind, f) {
      if (kind === "m")
        throw new TypeError("Private method is not writable");
      if (kind === "a" && !f)
        throw new TypeError("Private accessor was defined without a setter");
      if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
        throw new TypeError("Cannot write private member to an object whose class did not declare it");
      return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
    };
    var __classPrivateFieldGet = exports2 && exports2.__classPrivateFieldGet || function(receiver, state, kind, f) {
      if (kind === "a" && !f)
        throw new TypeError("Private accessor was defined without a getter");
      if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
        throw new TypeError("Cannot read private member from an object whose class did not declare it");
      return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
    };
    var _PatternVisitor_rootPattern;
    var _PatternVisitor_callback;
    var _PatternVisitor_assignments;
    var _PatternVisitor_restElements;
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.PatternVisitor = void 0;
    var types_1 = require_dist();
    var VisitorBase_1 = require_VisitorBase();
    var PatternVisitor = class extends VisitorBase_1.VisitorBase {
      static isPattern(node2) {
        const nodeType = node2.type;
        return nodeType === types_1.AST_NODE_TYPES.Identifier || nodeType === types_1.AST_NODE_TYPES.ObjectPattern || nodeType === types_1.AST_NODE_TYPES.ArrayPattern || nodeType === types_1.AST_NODE_TYPES.SpreadElement || nodeType === types_1.AST_NODE_TYPES.RestElement || nodeType === types_1.AST_NODE_TYPES.AssignmentPattern;
      }
      constructor(options, rootPattern, callback) {
        super(options);
        _PatternVisitor_rootPattern.set(this, void 0);
        _PatternVisitor_callback.set(this, void 0);
        _PatternVisitor_assignments.set(this, []);
        this.rightHandNodes = [];
        _PatternVisitor_restElements.set(this, []);
        __classPrivateFieldSet(this, _PatternVisitor_rootPattern, rootPattern, "f");
        __classPrivateFieldSet(this, _PatternVisitor_callback, callback, "f");
      }
      ArrayExpression(node2) {
        node2.elements.forEach(this.visit, this);
      }
      ArrayPattern(pattern) {
        for (const element of pattern.elements) {
          this.visit(element);
        }
      }
      AssignmentExpression(node2) {
        __classPrivateFieldGet(this, _PatternVisitor_assignments, "f").push(node2);
        this.visit(node2.left);
        this.rightHandNodes.push(node2.right);
        __classPrivateFieldGet(this, _PatternVisitor_assignments, "f").pop();
      }
      AssignmentPattern(pattern) {
        __classPrivateFieldGet(this, _PatternVisitor_assignments, "f").push(pattern);
        this.visit(pattern.left);
        this.rightHandNodes.push(pattern.right);
        __classPrivateFieldGet(this, _PatternVisitor_assignments, "f").pop();
      }
      CallExpression(node2) {
        node2.arguments.forEach((a) => {
          this.rightHandNodes.push(a);
        });
        this.visit(node2.callee);
      }
      Decorator() {
      }
      Identifier(pattern) {
        const lastRestElement = __classPrivateFieldGet(this, _PatternVisitor_restElements, "f").at(-1);
        __classPrivateFieldGet(this, _PatternVisitor_callback, "f").call(this, pattern, {
          topLevel: pattern === __classPrivateFieldGet(this, _PatternVisitor_rootPattern, "f"),
          rest: lastRestElement?.argument === pattern,
          assignments: __classPrivateFieldGet(this, _PatternVisitor_assignments, "f")
        });
      }
      MemberExpression(node2) {
        if (node2.computed) {
          this.rightHandNodes.push(node2.property);
        }
        this.rightHandNodes.push(node2.object);
      }
      Property(property) {
        if (property.computed) {
          this.rightHandNodes.push(property.key);
        }
        this.visit(property.value);
      }
      RestElement(pattern) {
        __classPrivateFieldGet(this, _PatternVisitor_restElements, "f").push(pattern);
        this.visit(pattern.argument);
        __classPrivateFieldGet(this, _PatternVisitor_restElements, "f").pop();
      }
      SpreadElement(node2) {
        this.visit(node2.argument);
      }
      TSTypeAnnotation() {
      }
    };
    exports2.PatternVisitor = PatternVisitor;
    _PatternVisitor_rootPattern = /* @__PURE__ */ new WeakMap(), _PatternVisitor_callback = /* @__PURE__ */ new WeakMap(), _PatternVisitor_assignments = /* @__PURE__ */ new WeakMap(), _PatternVisitor_restElements = /* @__PURE__ */ new WeakMap();
  }
});

// node_modules/.pnpm/@typescript-eslint+scope-manager@7.10.0/node_modules/@typescript-eslint/scope-manager/dist/referencer/Visitor.js
var require_Visitor = __commonJS({
  "node_modules/.pnpm/@typescript-eslint+scope-manager@7.10.0/node_modules/@typescript-eslint/scope-manager/dist/referencer/Visitor.js"(exports2) {
    "use strict";
    init_cjs_shims();
    var __classPrivateFieldGet = exports2 && exports2.__classPrivateFieldGet || function(receiver, state, kind, f) {
      if (kind === "a" && !f)
        throw new TypeError("Private accessor was defined without a getter");
      if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
        throw new TypeError("Cannot read private member from an object whose class did not declare it");
      return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
    };
    var __classPrivateFieldSet = exports2 && exports2.__classPrivateFieldSet || function(receiver, state, value, kind, f) {
      if (kind === "m")
        throw new TypeError("Private method is not writable");
      if (kind === "a" && !f)
        throw new TypeError("Private accessor was defined without a setter");
      if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
        throw new TypeError("Cannot write private member to an object whose class did not declare it");
      return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
    };
    var _Visitor_options;
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.VisitorBase = exports2.Visitor = void 0;
    var PatternVisitor_1 = require_PatternVisitor();
    var VisitorBase_1 = require_VisitorBase();
    Object.defineProperty(exports2, "VisitorBase", { enumerable: true, get: function() {
      return VisitorBase_1.VisitorBase;
    } });
    var Visitor = class _Visitor extends VisitorBase_1.VisitorBase {
      constructor(optionsOrVisitor) {
        super(optionsOrVisitor instanceof _Visitor ? __classPrivateFieldGet(optionsOrVisitor, _Visitor_options, "f") : optionsOrVisitor);
        _Visitor_options.set(this, void 0);
        __classPrivateFieldSet(this, _Visitor_options, optionsOrVisitor instanceof _Visitor ? __classPrivateFieldGet(optionsOrVisitor, _Visitor_options, "f") : optionsOrVisitor, "f");
      }
      visitPattern(node2, callback, options = { processRightHandNodes: false }) {
        const visitor = new PatternVisitor_1.PatternVisitor(__classPrivateFieldGet(this, _Visitor_options, "f"), node2, callback);
        visitor.visit(node2);
        if (options.processRightHandNodes) {
          visitor.rightHandNodes.forEach(this.visit, this);
        }
      }
    };
    exports2.Visitor = Visitor;
    _Visitor_options = /* @__PURE__ */ new WeakMap();
  }
});

// node_modules/.pnpm/@typescript-eslint+scope-manager@7.10.0/node_modules/@typescript-eslint/scope-manager/dist/referencer/TypeVisitor.js
var require_TypeVisitor = __commonJS({
  "node_modules/.pnpm/@typescript-eslint+scope-manager@7.10.0/node_modules/@typescript-eslint/scope-manager/dist/referencer/TypeVisitor.js"(exports2) {
    "use strict";
    init_cjs_shims();
    var __classPrivateFieldSet = exports2 && exports2.__classPrivateFieldSet || function(receiver, state, value, kind, f) {
      if (kind === "m")
        throw new TypeError("Private method is not writable");
      if (kind === "a" && !f)
        throw new TypeError("Private accessor was defined without a setter");
      if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
        throw new TypeError("Cannot write private member to an object whose class did not declare it");
      return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
    };
    var __classPrivateFieldGet = exports2 && exports2.__classPrivateFieldGet || function(receiver, state, kind, f) {
      if (kind === "a" && !f)
        throw new TypeError("Private accessor was defined without a getter");
      if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
        throw new TypeError("Cannot read private member from an object whose class did not declare it");
      return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
    };
    var _TypeVisitor_referencer;
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.TypeVisitor = void 0;
    var types_1 = require_dist();
    var definition_1 = require_definition();
    var scope_1 = require_scope();
    var Visitor_1 = require_Visitor();
    var TypeVisitor = class _TypeVisitor extends Visitor_1.Visitor {
      constructor(referencer) {
        super(referencer);
        _TypeVisitor_referencer.set(this, void 0);
        __classPrivateFieldSet(this, _TypeVisitor_referencer, referencer, "f");
      }
      static visit(referencer, node2) {
        const typeReferencer = new _TypeVisitor(referencer);
        typeReferencer.visit(node2);
      }
      ///////////////////
      // Visit helpers //
      ///////////////////
      visitFunctionType(node2) {
        __classPrivateFieldGet(this, _TypeVisitor_referencer, "f").scopeManager.nestFunctionTypeScope(node2);
        this.visit(node2.typeParameters);
        for (const param of node2.params) {
          let didVisitAnnotation = false;
          this.visitPattern(param, (pattern, info) => {
            __classPrivateFieldGet(this, _TypeVisitor_referencer, "f").currentScope().defineIdentifier(pattern, new definition_1.ParameterDefinition(pattern, node2, info.rest));
            if (pattern.typeAnnotation) {
              this.visit(pattern.typeAnnotation);
              didVisitAnnotation = true;
            }
          });
          if (!didVisitAnnotation && "typeAnnotation" in param) {
            this.visit(param.typeAnnotation);
          }
        }
        this.visit(node2.returnType);
        __classPrivateFieldGet(this, _TypeVisitor_referencer, "f").close(node2);
      }
      visitPropertyKey(node2) {
        if (!node2.computed) {
          return;
        }
        __classPrivateFieldGet(this, _TypeVisitor_referencer, "f").visit(node2.key);
      }
      /////////////////////
      // Visit selectors //
      /////////////////////
      Identifier(node2) {
        __classPrivateFieldGet(this, _TypeVisitor_referencer, "f").currentScope().referenceType(node2);
      }
      MemberExpression(node2) {
        this.visit(node2.object);
      }
      TSCallSignatureDeclaration(node2) {
        this.visitFunctionType(node2);
      }
      TSConditionalType(node2) {
        __classPrivateFieldGet(this, _TypeVisitor_referencer, "f").scopeManager.nestConditionalTypeScope(node2);
        this.visitChildren(node2, ["falseType"]);
        __classPrivateFieldGet(this, _TypeVisitor_referencer, "f").close(node2);
        this.visit(node2.falseType);
      }
      TSConstructorType(node2) {
        this.visitFunctionType(node2);
      }
      TSConstructSignatureDeclaration(node2) {
        this.visitFunctionType(node2);
      }
      TSFunctionType(node2) {
        this.visitFunctionType(node2);
      }
      TSImportType(node2) {
        this.visit(node2.typeArguments);
      }
      TSIndexSignature(node2) {
        for (const param of node2.parameters) {
          if (param.type === types_1.AST_NODE_TYPES.Identifier) {
            this.visit(param.typeAnnotation);
          }
        }
        this.visit(node2.typeAnnotation);
      }
      TSInferType(node2) {
        const typeParameter = node2.typeParameter;
        let scope = __classPrivateFieldGet(this, _TypeVisitor_referencer, "f").currentScope();
        if (scope.type === scope_1.ScopeType.functionType || scope.type === scope_1.ScopeType.mappedType) {
          let currentScope = scope.upper;
          while (currentScope) {
            if (currentScope.type === scope_1.ScopeType.functionType || currentScope.type === scope_1.ScopeType.mappedType) {
              currentScope = currentScope.upper;
              continue;
            }
            if (currentScope.type === scope_1.ScopeType.conditionalType) {
              scope = currentScope;
              break;
            }
            break;
          }
        }
        scope.defineIdentifier(typeParameter.name, new definition_1.TypeDefinition(typeParameter.name, typeParameter));
        this.visit(typeParameter.constraint);
      }
      TSInterfaceDeclaration(node2) {
        __classPrivateFieldGet(this, _TypeVisitor_referencer, "f").currentScope().defineIdentifier(node2.id, new definition_1.TypeDefinition(node2.id, node2));
        if (node2.typeParameters) {
          __classPrivateFieldGet(this, _TypeVisitor_referencer, "f").scopeManager.nestTypeScope(node2);
          this.visit(node2.typeParameters);
        }
        node2.extends.forEach(this.visit, this);
        this.visit(node2.body);
        if (node2.typeParameters) {
          __classPrivateFieldGet(this, _TypeVisitor_referencer, "f").close(node2);
        }
      }
      TSMappedType(node2) {
        __classPrivateFieldGet(this, _TypeVisitor_referencer, "f").scopeManager.nestMappedTypeScope(node2);
        this.visitChildren(node2);
        __classPrivateFieldGet(this, _TypeVisitor_referencer, "f").close(node2);
      }
      TSMethodSignature(node2) {
        this.visitPropertyKey(node2);
        this.visitFunctionType(node2);
      }
      TSNamedTupleMember(node2) {
        this.visit(node2.elementType);
      }
      TSPropertySignature(node2) {
        this.visitPropertyKey(node2);
        this.visit(node2.typeAnnotation);
      }
      TSQualifiedName(node2) {
        this.visit(node2.left);
      }
      TSTypeAliasDeclaration(node2) {
        __classPrivateFieldGet(this, _TypeVisitor_referencer, "f").currentScope().defineIdentifier(node2.id, new definition_1.TypeDefinition(node2.id, node2));
        if (node2.typeParameters) {
          __classPrivateFieldGet(this, _TypeVisitor_referencer, "f").scopeManager.nestTypeScope(node2);
          this.visit(node2.typeParameters);
        }
        this.visit(node2.typeAnnotation);
        if (node2.typeParameters) {
          __classPrivateFieldGet(this, _TypeVisitor_referencer, "f").close(node2);
        }
      }
      TSTypeParameter(node2) {
        __classPrivateFieldGet(this, _TypeVisitor_referencer, "f").currentScope().defineIdentifier(node2.name, new definition_1.TypeDefinition(node2.name, node2));
        this.visit(node2.constraint);
        this.visit(node2.default);
      }
      TSTypePredicate(node2) {
        if (node2.parameterName.type !== types_1.AST_NODE_TYPES.TSThisType) {
          __classPrivateFieldGet(this, _TypeVisitor_referencer, "f").currentScope().referenceValue(node2.parameterName);
        }
        this.visit(node2.typeAnnotation);
      }
      // a type query `typeof foo` is a special case that references a _non-type_ variable,
      TSTypeQuery(node2) {
        let entityName;
        if (node2.exprName.type === types_1.AST_NODE_TYPES.TSQualifiedName) {
          let iter = node2.exprName;
          while (iter.left.type === types_1.AST_NODE_TYPES.TSQualifiedName) {
            iter = iter.left;
          }
          entityName = iter.left;
        } else {
          entityName = node2.exprName;
          if (node2.exprName.type === types_1.AST_NODE_TYPES.TSImportType) {
            this.visit(node2.exprName);
          }
        }
        if (entityName.type === types_1.AST_NODE_TYPES.Identifier) {
          __classPrivateFieldGet(this, _TypeVisitor_referencer, "f").currentScope().referenceValue(entityName);
        }
        this.visit(node2.typeArguments);
      }
      TSTypeAnnotation(node2) {
        this.visitChildren(node2);
      }
    };
    exports2.TypeVisitor = TypeVisitor;
    _TypeVisitor_referencer = /* @__PURE__ */ new WeakMap();
  }
});

// node_modules/.pnpm/@typescript-eslint+scope-manager@7.10.0/node_modules/@typescript-eslint/scope-manager/dist/referencer/ClassVisitor.js
var require_ClassVisitor = __commonJS({
  "node_modules/.pnpm/@typescript-eslint+scope-manager@7.10.0/node_modules/@typescript-eslint/scope-manager/dist/referencer/ClassVisitor.js"(exports2) {
    "use strict";
    init_cjs_shims();
    var __classPrivateFieldSet = exports2 && exports2.__classPrivateFieldSet || function(receiver, state, value, kind, f) {
      if (kind === "m")
        throw new TypeError("Private method is not writable");
      if (kind === "a" && !f)
        throw new TypeError("Private accessor was defined without a setter");
      if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
        throw new TypeError("Cannot write private member to an object whose class did not declare it");
      return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
    };
    var __classPrivateFieldGet = exports2 && exports2.__classPrivateFieldGet || function(receiver, state, kind, f) {
      if (kind === "a" && !f)
        throw new TypeError("Private accessor was defined without a getter");
      if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
        throw new TypeError("Cannot read private member from an object whose class did not declare it");
      return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
    };
    var _ClassVisitor_classNode;
    var _ClassVisitor_referencer;
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.ClassVisitor = void 0;
    var types_1 = require_dist();
    var definition_1 = require_definition();
    var TypeVisitor_1 = require_TypeVisitor();
    var Visitor_1 = require_Visitor();
    var ClassVisitor = class _ClassVisitor extends Visitor_1.Visitor {
      constructor(referencer, node2) {
        super(referencer);
        _ClassVisitor_classNode.set(this, void 0);
        _ClassVisitor_referencer.set(this, void 0);
        __classPrivateFieldSet(this, _ClassVisitor_referencer, referencer, "f");
        __classPrivateFieldSet(this, _ClassVisitor_classNode, node2, "f");
      }
      static visit(referencer, node2) {
        const classVisitor = new _ClassVisitor(referencer, node2);
        classVisitor.visitClass(node2);
      }
      visit(node2) {
        if (node2 && node2.type in this) {
          super.visit(node2);
        } else {
          __classPrivateFieldGet(this, _ClassVisitor_referencer, "f").visit(node2);
        }
      }
      ///////////////////
      // Visit helpers //
      ///////////////////
      visitClass(node2) {
        if (node2.type === types_1.AST_NODE_TYPES.ClassDeclaration && node2.id) {
          __classPrivateFieldGet(this, _ClassVisitor_referencer, "f").currentScope().defineIdentifier(node2.id, new definition_1.ClassNameDefinition(node2.id, node2));
        }
        node2.decorators.forEach((d) => __classPrivateFieldGet(this, _ClassVisitor_referencer, "f").visit(d));
        __classPrivateFieldGet(this, _ClassVisitor_referencer, "f").scopeManager.nestClassScope(node2);
        if (node2.id) {
          __classPrivateFieldGet(this, _ClassVisitor_referencer, "f").currentScope().defineIdentifier(node2.id, new definition_1.ClassNameDefinition(node2.id, node2));
        }
        __classPrivateFieldGet(this, _ClassVisitor_referencer, "f").visit(node2.superClass);
        this.visitType(node2.typeParameters);
        this.visitType(node2.superTypeArguments);
        node2.implements.forEach((imp) => this.visitType(imp));
        this.visit(node2.body);
        __classPrivateFieldGet(this, _ClassVisitor_referencer, "f").close(node2);
      }
      visitPropertyDefinition(node2) {
        this.visitPropertyBase(node2);
        this.visitType(node2.typeAnnotation);
      }
      visitFunctionParameterTypeAnnotation(node2) {
        switch (node2.type) {
          case types_1.AST_NODE_TYPES.AssignmentPattern:
            this.visitType(node2.left.typeAnnotation);
            break;
          case types_1.AST_NODE_TYPES.TSParameterProperty:
            this.visitFunctionParameterTypeAnnotation(node2.parameter);
            break;
          default:
            this.visitType(node2.typeAnnotation);
        }
      }
      visitMethodFunction(node2, methodNode) {
        if (node2.id) {
          __classPrivateFieldGet(this, _ClassVisitor_referencer, "f").scopeManager.nestFunctionExpressionNameScope(node2);
        }
        __classPrivateFieldGet(this, _ClassVisitor_referencer, "f").scopeManager.nestFunctionScope(node2, true);
        let withMethodDecorators = !!methodNode.decorators.length;
        withMethodDecorators ||= methodNode.kind !== "set" && node2.params.some((param) => param.decorators.length);
        if (!withMethodDecorators && methodNode.kind === "set") {
          const keyName = getLiteralMethodKeyName(methodNode);
          if (keyName != null && __classPrivateFieldGet(this, _ClassVisitor_classNode, "f").body.body.find((node3) => node3 !== methodNode && node3.type === types_1.AST_NODE_TYPES.MethodDefinition && // Node must both be static or not
          node3.static === methodNode.static && getLiteralMethodKeyName(node3) === keyName)?.decorators.length) {
            withMethodDecorators = true;
          }
        }
        if (!withMethodDecorators && methodNode.kind === "constructor" && __classPrivateFieldGet(this, _ClassVisitor_classNode, "f").decorators.length) {
          withMethodDecorators = true;
        }
        for (const param of node2.params) {
          this.visitPattern(param, (pattern, info) => {
            __classPrivateFieldGet(this, _ClassVisitor_referencer, "f").currentScope().defineIdentifier(pattern, new definition_1.ParameterDefinition(pattern, node2, info.rest));
            __classPrivateFieldGet(this, _ClassVisitor_referencer, "f").referencingDefaultValue(pattern, info.assignments, null, true);
          }, { processRightHandNodes: true });
          this.visitFunctionParameterTypeAnnotation(param);
          param.decorators.forEach((d) => this.visit(d));
        }
        this.visitType(node2.returnType);
        this.visitType(node2.typeParameters);
        __classPrivateFieldGet(this, _ClassVisitor_referencer, "f").visitChildren(node2.body);
        __classPrivateFieldGet(this, _ClassVisitor_referencer, "f").close(node2);
      }
      visitPropertyBase(node2) {
        if (node2.computed) {
          __classPrivateFieldGet(this, _ClassVisitor_referencer, "f").visit(node2.key);
        }
        if (node2.value) {
          if (node2.type === types_1.AST_NODE_TYPES.PropertyDefinition || node2.type === types_1.AST_NODE_TYPES.AccessorProperty) {
            __classPrivateFieldGet(this, _ClassVisitor_referencer, "f").scopeManager.nestClassFieldInitializerScope(node2.value);
          }
          __classPrivateFieldGet(this, _ClassVisitor_referencer, "f").visit(node2.value);
          if (node2.type === types_1.AST_NODE_TYPES.PropertyDefinition || node2.type === types_1.AST_NODE_TYPES.AccessorProperty) {
            __classPrivateFieldGet(this, _ClassVisitor_referencer, "f").close(node2.value);
          }
        }
        node2.decorators.forEach((d) => __classPrivateFieldGet(this, _ClassVisitor_referencer, "f").visit(d));
      }
      visitMethod(node2) {
        if (node2.computed) {
          __classPrivateFieldGet(this, _ClassVisitor_referencer, "f").visit(node2.key);
        }
        if (node2.value.type === types_1.AST_NODE_TYPES.FunctionExpression) {
          this.visitMethodFunction(node2.value, node2);
        } else {
          __classPrivateFieldGet(this, _ClassVisitor_referencer, "f").visit(node2.value);
        }
        node2.decorators.forEach((d) => __classPrivateFieldGet(this, _ClassVisitor_referencer, "f").visit(d));
      }
      visitType(node2) {
        if (!node2) {
          return;
        }
        TypeVisitor_1.TypeVisitor.visit(__classPrivateFieldGet(this, _ClassVisitor_referencer, "f"), node2);
      }
      /////////////////////
      // Visit selectors //
      /////////////////////
      AccessorProperty(node2) {
        this.visitPropertyDefinition(node2);
      }
      ClassBody(node2) {
        this.visitChildren(node2);
      }
      PropertyDefinition(node2) {
        this.visitPropertyDefinition(node2);
      }
      MethodDefinition(node2) {
        this.visitMethod(node2);
      }
      TSAbstractAccessorProperty(node2) {
        this.visitPropertyDefinition(node2);
      }
      TSAbstractPropertyDefinition(node2) {
        this.visitPropertyDefinition(node2);
      }
      TSAbstractMethodDefinition(node2) {
        this.visitPropertyBase(node2);
      }
      Identifier(node2) {
        __classPrivateFieldGet(this, _ClassVisitor_referencer, "f").visit(node2);
      }
      PrivateIdentifier() {
      }
      StaticBlock(node2) {
        __classPrivateFieldGet(this, _ClassVisitor_referencer, "f").scopeManager.nestClassStaticBlockScope(node2);
        node2.body.forEach((b) => this.visit(b));
        __classPrivateFieldGet(this, _ClassVisitor_referencer, "f").close(node2);
      }
    };
    exports2.ClassVisitor = ClassVisitor;
    _ClassVisitor_classNode = /* @__PURE__ */ new WeakMap(), _ClassVisitor_referencer = /* @__PURE__ */ new WeakMap();
    function getLiteralMethodKeyName(node2) {
      if (node2.computed && node2.key.type === types_1.AST_NODE_TYPES.Literal) {
        if (typeof node2.key.value === "string" || typeof node2.key.value === "number") {
          return node2.key.value;
        }
      } else if (!node2.computed && node2.key.type === types_1.AST_NODE_TYPES.Identifier) {
        return node2.key.name;
      }
      return null;
    }
  }
});

// node_modules/.pnpm/@typescript-eslint+scope-manager@7.10.0/node_modules/@typescript-eslint/scope-manager/dist/referencer/ExportVisitor.js
var require_ExportVisitor = __commonJS({
  "node_modules/.pnpm/@typescript-eslint+scope-manager@7.10.0/node_modules/@typescript-eslint/scope-manager/dist/referencer/ExportVisitor.js"(exports2) {
    "use strict";
    init_cjs_shims();
    var __classPrivateFieldSet = exports2 && exports2.__classPrivateFieldSet || function(receiver, state, value, kind, f) {
      if (kind === "m")
        throw new TypeError("Private method is not writable");
      if (kind === "a" && !f)
        throw new TypeError("Private accessor was defined without a setter");
      if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
        throw new TypeError("Cannot write private member to an object whose class did not declare it");
      return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
    };
    var __classPrivateFieldGet = exports2 && exports2.__classPrivateFieldGet || function(receiver, state, kind, f) {
      if (kind === "a" && !f)
        throw new TypeError("Private accessor was defined without a getter");
      if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
        throw new TypeError("Cannot read private member from an object whose class did not declare it");
      return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
    };
    var _ExportVisitor_referencer;
    var _ExportVisitor_exportNode;
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.ExportVisitor = void 0;
    var types_1 = require_dist();
    var Visitor_1 = require_Visitor();
    var ExportVisitor = class _ExportVisitor extends Visitor_1.Visitor {
      constructor(node2, referencer) {
        super(referencer);
        _ExportVisitor_referencer.set(this, void 0);
        _ExportVisitor_exportNode.set(this, void 0);
        __classPrivateFieldSet(this, _ExportVisitor_exportNode, node2, "f");
        __classPrivateFieldSet(this, _ExportVisitor_referencer, referencer, "f");
      }
      static visit(referencer, node2) {
        const exportReferencer = new _ExportVisitor(node2, referencer);
        exportReferencer.visit(node2);
      }
      Identifier(node2) {
        if (__classPrivateFieldGet(this, _ExportVisitor_exportNode, "f").exportKind === "type") {
          __classPrivateFieldGet(this, _ExportVisitor_referencer, "f").currentScope().referenceType(node2);
        } else {
          __classPrivateFieldGet(this, _ExportVisitor_referencer, "f").currentScope().referenceDualValueType(node2);
        }
      }
      ExportDefaultDeclaration(node2) {
        if (node2.declaration.type === types_1.AST_NODE_TYPES.Identifier) {
          this.visit(node2.declaration);
        } else {
        }
      }
      ExportNamedDeclaration(node2) {
        if (node2.source) {
          return;
        }
        if (!node2.declaration) {
          this.visitChildren(node2);
        } else {
        }
      }
      ExportSpecifier(node2) {
        if (node2.exportKind === "type") {
          __classPrivateFieldGet(this, _ExportVisitor_referencer, "f").currentScope().referenceType(node2.local);
        } else {
          this.visit(node2.local);
        }
      }
    };
    exports2.ExportVisitor = ExportVisitor;
    _ExportVisitor_referencer = /* @__PURE__ */ new WeakMap(), _ExportVisitor_exportNode = /* @__PURE__ */ new WeakMap();
  }
});

// node_modules/.pnpm/@typescript-eslint+scope-manager@7.10.0/node_modules/@typescript-eslint/scope-manager/dist/referencer/ImportVisitor.js
var require_ImportVisitor = __commonJS({
  "node_modules/.pnpm/@typescript-eslint+scope-manager@7.10.0/node_modules/@typescript-eslint/scope-manager/dist/referencer/ImportVisitor.js"(exports2) {
    "use strict";
    init_cjs_shims();
    var __classPrivateFieldSet = exports2 && exports2.__classPrivateFieldSet || function(receiver, state, value, kind, f) {
      if (kind === "m")
        throw new TypeError("Private method is not writable");
      if (kind === "a" && !f)
        throw new TypeError("Private accessor was defined without a setter");
      if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
        throw new TypeError("Cannot write private member to an object whose class did not declare it");
      return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
    };
    var __classPrivateFieldGet = exports2 && exports2.__classPrivateFieldGet || function(receiver, state, kind, f) {
      if (kind === "a" && !f)
        throw new TypeError("Private accessor was defined without a getter");
      if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
        throw new TypeError("Cannot read private member from an object whose class did not declare it");
      return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
    };
    var _ImportVisitor_declaration;
    var _ImportVisitor_referencer;
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.ImportVisitor = void 0;
    var definition_1 = require_definition();
    var Visitor_1 = require_Visitor();
    var ImportVisitor = class _ImportVisitor extends Visitor_1.Visitor {
      constructor(declaration, referencer) {
        super(referencer);
        _ImportVisitor_declaration.set(this, void 0);
        _ImportVisitor_referencer.set(this, void 0);
        __classPrivateFieldSet(this, _ImportVisitor_declaration, declaration, "f");
        __classPrivateFieldSet(this, _ImportVisitor_referencer, referencer, "f");
      }
      static visit(referencer, declaration) {
        const importReferencer = new _ImportVisitor(declaration, referencer);
        importReferencer.visit(declaration);
      }
      visitImport(id, specifier) {
        __classPrivateFieldGet(this, _ImportVisitor_referencer, "f").currentScope().defineIdentifier(id, new definition_1.ImportBindingDefinition(id, specifier, __classPrivateFieldGet(this, _ImportVisitor_declaration, "f")));
      }
      ImportNamespaceSpecifier(node2) {
        const local = node2.local;
        this.visitImport(local, node2);
      }
      ImportDefaultSpecifier(node2) {
        const local = node2.local;
        this.visitImport(local, node2);
      }
      ImportSpecifier(node2) {
        const local = node2.local;
        this.visitImport(local, node2);
      }
    };
    exports2.ImportVisitor = ImportVisitor;
    _ImportVisitor_declaration = /* @__PURE__ */ new WeakMap(), _ImportVisitor_referencer = /* @__PURE__ */ new WeakMap();
  }
});

// node_modules/.pnpm/@typescript-eslint+scope-manager@7.10.0/node_modules/@typescript-eslint/scope-manager/dist/referencer/Referencer.js
var require_Referencer = __commonJS({
  "node_modules/.pnpm/@typescript-eslint+scope-manager@7.10.0/node_modules/@typescript-eslint/scope-manager/dist/referencer/Referencer.js"(exports2) {
    "use strict";
    init_cjs_shims();
    var __classPrivateFieldSet = exports2 && exports2.__classPrivateFieldSet || function(receiver, state, value, kind, f) {
      if (kind === "m")
        throw new TypeError("Private method is not writable");
      if (kind === "a" && !f)
        throw new TypeError("Private accessor was defined without a setter");
      if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
        throw new TypeError("Cannot write private member to an object whose class did not declare it");
      return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
    };
    var __classPrivateFieldGet = exports2 && exports2.__classPrivateFieldGet || function(receiver, state, kind, f) {
      if (kind === "a" && !f)
        throw new TypeError("Private accessor was defined without a getter");
      if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
        throw new TypeError("Cannot read private member from an object whose class did not declare it");
      return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
    };
    var _Referencer_jsxPragma;
    var _Referencer_jsxFragmentName;
    var _Referencer_hasReferencedJsxFactory;
    var _Referencer_hasReferencedJsxFragmentFactory;
    var _Referencer_lib;
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.Referencer = void 0;
    var types_1 = require_dist();
    var assert_1 = require_assert();
    var definition_1 = require_definition();
    var lib_1 = require_lib4();
    var ClassVisitor_1 = require_ClassVisitor();
    var ExportVisitor_1 = require_ExportVisitor();
    var ImportVisitor_1 = require_ImportVisitor();
    var PatternVisitor_1 = require_PatternVisitor();
    var Reference_1 = require_Reference();
    var TypeVisitor_1 = require_TypeVisitor();
    var Visitor_1 = require_Visitor();
    var Referencer = class extends Visitor_1.Visitor {
      constructor(options, scopeManager) {
        super(options);
        _Referencer_jsxPragma.set(this, void 0);
        _Referencer_jsxFragmentName.set(this, void 0);
        _Referencer_hasReferencedJsxFactory.set(this, false);
        _Referencer_hasReferencedJsxFragmentFactory.set(this, false);
        _Referencer_lib.set(this, void 0);
        this.scopeManager = scopeManager;
        __classPrivateFieldSet(this, _Referencer_jsxPragma, options.jsxPragma, "f");
        __classPrivateFieldSet(this, _Referencer_jsxFragmentName, options.jsxFragmentName, "f");
        __classPrivateFieldSet(this, _Referencer_lib, options.lib, "f");
      }
      currentScope(dontThrowOnNull) {
        if (!dontThrowOnNull) {
          (0, assert_1.assert)(this.scopeManager.currentScope, "aaa");
        }
        return this.scopeManager.currentScope;
      }
      close(node2) {
        while (this.currentScope(true) && node2 === this.currentScope().block) {
          this.scopeManager.currentScope = this.currentScope().close(this.scopeManager);
        }
      }
      referencingDefaultValue(pattern, assignments, maybeImplicitGlobal, init) {
        assignments.forEach((assignment) => {
          this.currentScope().referenceValue(pattern, Reference_1.ReferenceFlag.Write, assignment.right, maybeImplicitGlobal, init);
        });
      }
      populateGlobalsFromLib(globalScope) {
        for (const lib of __classPrivateFieldGet(this, _Referencer_lib, "f")) {
          const variables = lib_1.lib[lib];
          if (!variables) {
            throw new Error(`Invalid value for lib provided: ${lib}`);
          }
          for (const [name, variable] of Object.entries(variables)) {
            globalScope.defineImplicitVariable(name, variable);
          }
        }
        globalScope.defineImplicitVariable("const", {
          eslintImplicitGlobalSetting: "readonly",
          isTypeVariable: true,
          isValueVariable: false
        });
      }
      /**
       * Searches for a variable named "name" in the upper scopes and adds a pseudo-reference from itself to itself
       */
      referenceInSomeUpperScope(name) {
        let scope = this.scopeManager.currentScope;
        while (scope) {
          const variable = scope.set.get(name);
          if (!variable) {
            scope = scope.upper;
            continue;
          }
          scope.referenceValue(variable.identifiers[0]);
          return true;
        }
        return false;
      }
      referenceJsxPragma() {
        if (__classPrivateFieldGet(this, _Referencer_jsxPragma, "f") == null || __classPrivateFieldGet(this, _Referencer_hasReferencedJsxFactory, "f")) {
          return;
        }
        __classPrivateFieldSet(this, _Referencer_hasReferencedJsxFactory, this.referenceInSomeUpperScope(__classPrivateFieldGet(this, _Referencer_jsxPragma, "f")), "f");
      }
      referenceJsxFragment() {
        if (__classPrivateFieldGet(this, _Referencer_jsxFragmentName, "f") == null || __classPrivateFieldGet(this, _Referencer_hasReferencedJsxFragmentFactory, "f")) {
          return;
        }
        __classPrivateFieldSet(this, _Referencer_hasReferencedJsxFragmentFactory, this.referenceInSomeUpperScope(__classPrivateFieldGet(this, _Referencer_jsxFragmentName, "f")), "f");
      }
      ///////////////////
      // Visit helpers //
      ///////////////////
      visitClass(node2) {
        ClassVisitor_1.ClassVisitor.visit(this, node2);
      }
      visitForIn(node2) {
        if (node2.left.type === types_1.AST_NODE_TYPES.VariableDeclaration && node2.left.kind !== "var") {
          this.scopeManager.nestForScope(node2);
        }
        if (node2.left.type === types_1.AST_NODE_TYPES.VariableDeclaration) {
          this.visit(node2.left);
          this.visitPattern(node2.left.declarations[0].id, (pattern) => {
            this.currentScope().referenceValue(pattern, Reference_1.ReferenceFlag.Write, node2.right, null, true);
          });
        } else {
          this.visitPattern(node2.left, (pattern, info) => {
            const maybeImplicitGlobal = !this.currentScope().isStrict ? {
              pattern,
              node: node2
            } : null;
            this.referencingDefaultValue(pattern, info.assignments, maybeImplicitGlobal, false);
            this.currentScope().referenceValue(pattern, Reference_1.ReferenceFlag.Write, node2.right, maybeImplicitGlobal, false);
          }, { processRightHandNodes: true });
        }
        this.visit(node2.right);
        this.visit(node2.body);
        this.close(node2);
      }
      visitFunctionParameterTypeAnnotation(node2) {
        switch (node2.type) {
          case types_1.AST_NODE_TYPES.AssignmentPattern:
            this.visitType(node2.left.typeAnnotation);
            break;
          case types_1.AST_NODE_TYPES.TSParameterProperty:
            this.visitFunctionParameterTypeAnnotation(node2.parameter);
            break;
          default:
            this.visitType(node2.typeAnnotation);
            break;
        }
      }
      visitFunction(node2) {
        if (node2.type === types_1.AST_NODE_TYPES.FunctionExpression) {
          if (node2.id) {
            this.scopeManager.nestFunctionExpressionNameScope(node2);
          }
        } else if (node2.id) {
          this.currentScope().defineIdentifier(node2.id, new definition_1.FunctionNameDefinition(node2.id, node2));
        }
        this.scopeManager.nestFunctionScope(node2, false);
        for (const param of node2.params) {
          this.visitPattern(param, (pattern, info) => {
            this.currentScope().defineIdentifier(pattern, new definition_1.ParameterDefinition(pattern, node2, info.rest));
            this.referencingDefaultValue(pattern, info.assignments, null, true);
          }, { processRightHandNodes: true });
          this.visitFunctionParameterTypeAnnotation(param);
          param.decorators.forEach((d) => this.visit(d));
        }
        this.visitType(node2.returnType);
        this.visitType(node2.typeParameters);
        if (node2.body) {
          if (node2.body.type === types_1.AST_NODE_TYPES.BlockStatement) {
            this.visitChildren(node2.body);
          } else {
            this.visit(node2.body);
          }
        }
        this.close(node2);
      }
      visitProperty(node2) {
        if (node2.computed) {
          this.visit(node2.key);
        }
        this.visit(node2.value);
      }
      visitType(node2) {
        if (!node2) {
          return;
        }
        TypeVisitor_1.TypeVisitor.visit(this, node2);
      }
      visitTypeAssertion(node2) {
        this.visit(node2.expression);
        this.visitType(node2.typeAnnotation);
      }
      /////////////////////
      // Visit selectors //
      /////////////////////
      ArrowFunctionExpression(node2) {
        this.visitFunction(node2);
      }
      AssignmentExpression(node2) {
        let left = node2.left;
        switch (left.type) {
          case types_1.AST_NODE_TYPES.TSAsExpression:
          case types_1.AST_NODE_TYPES.TSTypeAssertion:
            this.visitType(left.typeAnnotation);
          case types_1.AST_NODE_TYPES.TSNonNullExpression:
            left = left.expression;
        }
        if (PatternVisitor_1.PatternVisitor.isPattern(left)) {
          if (node2.operator === "=") {
            this.visitPattern(left, (pattern, info) => {
              const maybeImplicitGlobal = !this.currentScope().isStrict ? {
                pattern,
                node: node2
              } : null;
              this.referencingDefaultValue(pattern, info.assignments, maybeImplicitGlobal, false);
              this.currentScope().referenceValue(pattern, Reference_1.ReferenceFlag.Write, node2.right, maybeImplicitGlobal, false);
            }, { processRightHandNodes: true });
          } else if (left.type === types_1.AST_NODE_TYPES.Identifier) {
            this.currentScope().referenceValue(left, Reference_1.ReferenceFlag.ReadWrite, node2.right);
          }
        } else {
          this.visit(left);
        }
        this.visit(node2.right);
      }
      BlockStatement(node2) {
        this.scopeManager.nestBlockScope(node2);
        this.visitChildren(node2);
        this.close(node2);
      }
      BreakStatement() {
      }
      CallExpression(node2) {
        this.visitChildren(node2, ["typeArguments"]);
        this.visitType(node2.typeArguments);
      }
      CatchClause(node2) {
        this.scopeManager.nestCatchScope(node2);
        if (node2.param) {
          const param = node2.param;
          this.visitPattern(param, (pattern, info) => {
            this.currentScope().defineIdentifier(pattern, new definition_1.CatchClauseDefinition(param, node2));
            this.referencingDefaultValue(pattern, info.assignments, null, true);
          }, { processRightHandNodes: true });
        }
        this.visit(node2.body);
        this.close(node2);
      }
      ClassExpression(node2) {
        this.visitClass(node2);
      }
      ClassDeclaration(node2) {
        this.visitClass(node2);
      }
      ContinueStatement() {
      }
      ExportAllDeclaration() {
      }
      ExportDefaultDeclaration(node2) {
        if (node2.declaration.type === types_1.AST_NODE_TYPES.Identifier) {
          ExportVisitor_1.ExportVisitor.visit(this, node2);
        } else {
          this.visit(node2.declaration);
        }
      }
      TSExportAssignment(node2) {
        if (node2.expression.type === types_1.AST_NODE_TYPES.Identifier) {
          this.currentScope().referenceDualValueType(node2.expression);
        } else {
          this.visit(node2.expression);
        }
      }
      ExportNamedDeclaration(node2) {
        if (node2.declaration) {
          this.visit(node2.declaration);
        } else {
          ExportVisitor_1.ExportVisitor.visit(this, node2);
        }
      }
      ForInStatement(node2) {
        this.visitForIn(node2);
      }
      ForOfStatement(node2) {
        this.visitForIn(node2);
      }
      ForStatement(node2) {
        if (node2.init && node2.init.type === types_1.AST_NODE_TYPES.VariableDeclaration && node2.init.kind !== "var") {
          this.scopeManager.nestForScope(node2);
        }
        this.visitChildren(node2);
        this.close(node2);
      }
      FunctionDeclaration(node2) {
        this.visitFunction(node2);
      }
      FunctionExpression(node2) {
        this.visitFunction(node2);
      }
      Identifier(node2) {
        this.currentScope().referenceValue(node2);
        this.visitType(node2.typeAnnotation);
      }
      ImportDeclaration(node2) {
        (0, assert_1.assert)(this.scopeManager.isModule(), "ImportDeclaration should appear when the mode is ES6 and in the module context.");
        ImportVisitor_1.ImportVisitor.visit(this, node2);
      }
      JSXAttribute(node2) {
        this.visit(node2.value);
      }
      JSXClosingElement() {
      }
      JSXFragment(node2) {
        this.referenceJsxPragma();
        this.referenceJsxFragment();
        this.visitChildren(node2);
      }
      JSXIdentifier(node2) {
        this.currentScope().referenceValue(node2);
      }
      JSXMemberExpression(node2) {
        if (node2.object.type !== types_1.AST_NODE_TYPES.JSXIdentifier) {
          this.visit(node2.object);
        } else {
          if (node2.object.name !== "this") {
            this.visit(node2.object);
          }
        }
      }
      JSXOpeningElement(node2) {
        this.referenceJsxPragma();
        if (node2.name.type === types_1.AST_NODE_TYPES.JSXIdentifier) {
          if (node2.name.name[0].toUpperCase() === node2.name.name[0] || node2.name.name === "this") {
            this.visit(node2.name);
          }
        } else {
          this.visit(node2.name);
        }
        this.visitType(node2.typeArguments);
        for (const attr of node2.attributes) {
          this.visit(attr);
        }
      }
      LabeledStatement(node2) {
        this.visit(node2.body);
      }
      MemberExpression(node2) {
        this.visit(node2.object);
        if (node2.computed) {
          this.visit(node2.property);
        }
      }
      MetaProperty() {
      }
      NewExpression(node2) {
        this.visitChildren(node2, ["typeArguments"]);
        this.visitType(node2.typeArguments);
      }
      PrivateIdentifier() {
      }
      Program(node2) {
        const globalScope = this.scopeManager.nestGlobalScope(node2);
        this.populateGlobalsFromLib(globalScope);
        if (this.scopeManager.isGlobalReturn()) {
          this.currentScope().isStrict = false;
          this.scopeManager.nestFunctionScope(node2, false);
        }
        if (this.scopeManager.isModule()) {
          this.scopeManager.nestModuleScope(node2);
        }
        if (this.scopeManager.isImpliedStrict()) {
          this.currentScope().isStrict = true;
        }
        this.visitChildren(node2);
        this.close(node2);
      }
      Property(node2) {
        this.visitProperty(node2);
      }
      SwitchStatement(node2) {
        this.visit(node2.discriminant);
        this.scopeManager.nestSwitchScope(node2);
        for (const switchCase of node2.cases) {
          this.visit(switchCase);
        }
        this.close(node2);
      }
      TaggedTemplateExpression(node2) {
        this.visit(node2.tag);
        this.visit(node2.quasi);
        this.visitType(node2.typeArguments);
      }
      TSAsExpression(node2) {
        this.visitTypeAssertion(node2);
      }
      TSDeclareFunction(node2) {
        this.visitFunction(node2);
      }
      TSImportEqualsDeclaration(node2) {
        this.currentScope().defineIdentifier(node2.id, new definition_1.ImportBindingDefinition(node2.id, node2, node2));
        if (node2.moduleReference.type === types_1.AST_NODE_TYPES.TSQualifiedName) {
          this.visit(node2.moduleReference.left);
        } else {
          this.visit(node2.moduleReference);
        }
      }
      TSEmptyBodyFunctionExpression(node2) {
        this.visitFunction(node2);
      }
      TSEnumDeclaration(node2) {
        this.currentScope().defineIdentifier(node2.id, new definition_1.TSEnumNameDefinition(node2.id, node2));
        this.scopeManager.nestTSEnumScope(node2);
        this.currentScope().defineIdentifier(node2.id, new definition_1.TSEnumNameDefinition(node2.id, node2));
        for (const member of node2.members) {
          if (member.id.type === types_1.AST_NODE_TYPES.Literal && typeof member.id.value === "string") {
            const name = member.id;
            this.currentScope().defineLiteralIdentifier(name, new definition_1.TSEnumMemberDefinition(name, member));
          } else if (!member.computed && member.id.type === types_1.AST_NODE_TYPES.Identifier) {
            this.currentScope().defineIdentifier(member.id, new definition_1.TSEnumMemberDefinition(member.id, member));
          }
          this.visit(member.initializer);
        }
        this.close(node2);
      }
      TSInstantiationExpression(node2) {
        this.visitChildren(node2, ["typeArguments"]);
        this.visitType(node2.typeArguments);
      }
      TSInterfaceDeclaration(node2) {
        this.visitType(node2);
      }
      TSModuleDeclaration(node2) {
        if (node2.id.type === types_1.AST_NODE_TYPES.Identifier && !node2.global) {
          this.currentScope().defineIdentifier(node2.id, new definition_1.TSModuleNameDefinition(node2.id, node2));
        }
        this.scopeManager.nestTSModuleScope(node2);
        this.visit(node2.body);
        this.close(node2);
      }
      TSSatisfiesExpression(node2) {
        this.visitTypeAssertion(node2);
      }
      TSTypeAliasDeclaration(node2) {
        this.visitType(node2);
      }
      TSTypeAssertion(node2) {
        this.visitTypeAssertion(node2);
      }
      UpdateExpression(node2) {
        if (PatternVisitor_1.PatternVisitor.isPattern(node2.argument)) {
          this.visitPattern(node2.argument, (pattern) => {
            this.currentScope().referenceValue(pattern, Reference_1.ReferenceFlag.ReadWrite, null);
          });
        } else {
          this.visitChildren(node2);
        }
      }
      VariableDeclaration(node2) {
        const variableTargetScope = node2.kind === "var" ? this.currentScope().variableScope : this.currentScope();
        for (const decl of node2.declarations) {
          const init = decl.init;
          this.visitPattern(decl.id, (pattern, info) => {
            variableTargetScope.defineIdentifier(pattern, new definition_1.VariableDefinition(pattern, decl, node2));
            this.referencingDefaultValue(pattern, info.assignments, null, true);
            if (init) {
              this.currentScope().referenceValue(pattern, Reference_1.ReferenceFlag.Write, init, null, true);
            }
          }, { processRightHandNodes: true });
          this.visit(decl.init);
          this.visitType(decl.id.typeAnnotation);
        }
      }
      WithStatement(node2) {
        this.visit(node2.object);
        this.scopeManager.nestWithScope(node2);
        this.visit(node2.body);
        this.close(node2);
      }
      ImportAttribute() {
      }
    };
    exports2.Referencer = Referencer;
    _Referencer_jsxPragma = /* @__PURE__ */ new WeakMap(), _Referencer_jsxFragmentName = /* @__PURE__ */ new WeakMap(), _Referencer_hasReferencedJsxFactory = /* @__PURE__ */ new WeakMap(), _Referencer_hasReferencedJsxFragmentFactory = /* @__PURE__ */ new WeakMap(), _Referencer_lib = /* @__PURE__ */ new WeakMap();
  }
});

// node_modules/.pnpm/@typescript-eslint+scope-manager@7.10.0/node_modules/@typescript-eslint/scope-manager/dist/referencer/index.js
var require_referencer = __commonJS({
  "node_modules/.pnpm/@typescript-eslint+scope-manager@7.10.0/node_modules/@typescript-eslint/scope-manager/dist/referencer/index.js"(exports2) {
    "use strict";
    init_cjs_shims();
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.Referencer = void 0;
    var Referencer_1 = require_Referencer();
    Object.defineProperty(exports2, "Referencer", { enumerable: true, get: function() {
      return Referencer_1.Referencer;
    } });
  }
});

// node_modules/.pnpm/@typescript-eslint+scope-manager@7.10.0/node_modules/@typescript-eslint/scope-manager/dist/scope/ClassStaticBlockScope.js
var require_ClassStaticBlockScope = __commonJS({
  "node_modules/.pnpm/@typescript-eslint+scope-manager@7.10.0/node_modules/@typescript-eslint/scope-manager/dist/scope/ClassStaticBlockScope.js"(exports2) {
    "use strict";
    init_cjs_shims();
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.ClassStaticBlockScope = void 0;
    var ScopeBase_1 = require_ScopeBase();
    var ScopeType_1 = require_ScopeType();
    var ClassStaticBlockScope = class extends ScopeBase_1.ScopeBase {
      constructor(scopeManager, upperScope, block) {
        super(scopeManager, ScopeType_1.ScopeType.classStaticBlock, upperScope, block, false);
      }
    };
    exports2.ClassStaticBlockScope = ClassStaticBlockScope;
  }
});

// node_modules/.pnpm/@typescript-eslint+scope-manager@7.10.0/node_modules/@typescript-eslint/scope-manager/dist/ScopeManager.js
var require_ScopeManager = __commonJS({
  "node_modules/.pnpm/@typescript-eslint+scope-manager@7.10.0/node_modules/@typescript-eslint/scope-manager/dist/ScopeManager.js"(exports2) {
    "use strict";
    init_cjs_shims();
    var __classPrivateFieldSet = exports2 && exports2.__classPrivateFieldSet || function(receiver, state, value, kind, f) {
      if (kind === "m")
        throw new TypeError("Private method is not writable");
      if (kind === "a" && !f)
        throw new TypeError("Private accessor was defined without a setter");
      if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
        throw new TypeError("Cannot write private member to an object whose class did not declare it");
      return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
    };
    var __classPrivateFieldGet = exports2 && exports2.__classPrivateFieldGet || function(receiver, state, kind, f) {
      if (kind === "a" && !f)
        throw new TypeError("Private accessor was defined without a getter");
      if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
        throw new TypeError("Cannot read private member from an object whose class did not declare it");
      return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
    };
    var _ScopeManager_options;
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.ScopeManager = void 0;
    var assert_1 = require_assert();
    var scope_1 = require_scope();
    var ClassFieldInitializerScope_1 = require_ClassFieldInitializerScope();
    var ClassStaticBlockScope_1 = require_ClassStaticBlockScope();
    var ScopeManager = class {
      get variables() {
        const variables = /* @__PURE__ */ new Set();
        function recurse(scope) {
          scope.variables.forEach((v) => variables.add(v));
          scope.childScopes.forEach(recurse);
        }
        this.scopes.forEach(recurse);
        return Array.from(variables).sort((a, b) => a.$id - b.$id);
      }
      constructor(options) {
        _ScopeManager_options.set(this, void 0);
        this.scopes = [];
        this.globalScope = null;
        this.nodeToScope = /* @__PURE__ */ new WeakMap();
        this.currentScope = null;
        __classPrivateFieldSet(this, _ScopeManager_options, options, "f");
        this.declaredVariables = /* @__PURE__ */ new WeakMap();
      }
      isGlobalReturn() {
        return __classPrivateFieldGet(this, _ScopeManager_options, "f").globalReturn === true;
      }
      isModule() {
        return __classPrivateFieldGet(this, _ScopeManager_options, "f").sourceType === "module";
      }
      isImpliedStrict() {
        return __classPrivateFieldGet(this, _ScopeManager_options, "f").impliedStrict === true;
      }
      isStrictModeSupported() {
        return true;
      }
      isES6() {
        return true;
      }
      /**
       * Get the variables that a given AST node defines. The gotten variables' `def[].node`/`def[].parent` property is the node.
       * If the node does not define any variable, this returns an empty array.
       * @param node An AST node to get their variables.
       */
      getDeclaredVariables(node2) {
        return this.declaredVariables.get(node2) ?? [];
      }
      /**
       * Get the scope of a given AST node. The gotten scope's `block` property is the node.
       * This method never returns `function-expression-name` scope. If the node does not have their scope, this returns `null`.
       *
       * @param node An AST node to get their scope.
       * @param inner If the node has multiple scopes, this returns the outermost scope normally.
       *                If `inner` is `true` then this returns the innermost scope.
       */
      acquire(node2, inner = false) {
        function predicate(testScope) {
          if (testScope.type === scope_1.ScopeType.function && testScope.functionExpressionScope) {
            return false;
          }
          return true;
        }
        const scopes = this.nodeToScope.get(node2);
        if (!scopes || scopes.length === 0) {
          return null;
        }
        if (scopes.length === 1) {
          return scopes[0];
        }
        if (inner) {
          for (let i = scopes.length - 1; i >= 0; --i) {
            const scope = scopes[i];
            if (predicate(scope)) {
              return scope;
            }
          }
          return null;
        }
        return scopes.find(predicate) ?? null;
      }
      nestScope(scope) {
        if (scope instanceof scope_1.GlobalScope) {
          (0, assert_1.assert)(this.currentScope == null);
          this.globalScope = scope;
        }
        this.currentScope = scope;
        return scope;
      }
      nestBlockScope(node2) {
        (0, assert_1.assert)(this.currentScope);
        return this.nestScope(new scope_1.BlockScope(this, this.currentScope, node2));
      }
      nestCatchScope(node2) {
        (0, assert_1.assert)(this.currentScope);
        return this.nestScope(new scope_1.CatchScope(this, this.currentScope, node2));
      }
      nestClassScope(node2) {
        (0, assert_1.assert)(this.currentScope);
        return this.nestScope(new scope_1.ClassScope(this, this.currentScope, node2));
      }
      nestClassFieldInitializerScope(node2) {
        (0, assert_1.assert)(this.currentScope);
        return this.nestScope(new ClassFieldInitializerScope_1.ClassFieldInitializerScope(this, this.currentScope, node2));
      }
      nestClassStaticBlockScope(node2) {
        (0, assert_1.assert)(this.currentScope);
        return this.nestScope(new ClassStaticBlockScope_1.ClassStaticBlockScope(this, this.currentScope, node2));
      }
      nestConditionalTypeScope(node2) {
        (0, assert_1.assert)(this.currentScope);
        return this.nestScope(new scope_1.ConditionalTypeScope(this, this.currentScope, node2));
      }
      nestForScope(node2) {
        (0, assert_1.assert)(this.currentScope);
        return this.nestScope(new scope_1.ForScope(this, this.currentScope, node2));
      }
      nestFunctionExpressionNameScope(node2) {
        (0, assert_1.assert)(this.currentScope);
        return this.nestScope(new scope_1.FunctionExpressionNameScope(this, this.currentScope, node2));
      }
      nestFunctionScope(node2, isMethodDefinition) {
        (0, assert_1.assert)(this.currentScope);
        return this.nestScope(new scope_1.FunctionScope(this, this.currentScope, node2, isMethodDefinition));
      }
      nestFunctionTypeScope(node2) {
        (0, assert_1.assert)(this.currentScope);
        return this.nestScope(new scope_1.FunctionTypeScope(this, this.currentScope, node2));
      }
      nestGlobalScope(node2) {
        return this.nestScope(new scope_1.GlobalScope(this, node2));
      }
      nestMappedTypeScope(node2) {
        (0, assert_1.assert)(this.currentScope);
        return this.nestScope(new scope_1.MappedTypeScope(this, this.currentScope, node2));
      }
      nestModuleScope(node2) {
        (0, assert_1.assert)(this.currentScope);
        return this.nestScope(new scope_1.ModuleScope(this, this.currentScope, node2));
      }
      nestSwitchScope(node2) {
        (0, assert_1.assert)(this.currentScope);
        return this.nestScope(new scope_1.SwitchScope(this, this.currentScope, node2));
      }
      nestTSEnumScope(node2) {
        (0, assert_1.assert)(this.currentScope);
        return this.nestScope(new scope_1.TSEnumScope(this, this.currentScope, node2));
      }
      nestTSModuleScope(node2) {
        (0, assert_1.assert)(this.currentScope);
        return this.nestScope(new scope_1.TSModuleScope(this, this.currentScope, node2));
      }
      nestTypeScope(node2) {
        (0, assert_1.assert)(this.currentScope);
        return this.nestScope(new scope_1.TypeScope(this, this.currentScope, node2));
      }
      nestWithScope(node2) {
        (0, assert_1.assert)(this.currentScope);
        return this.nestScope(new scope_1.WithScope(this, this.currentScope, node2));
      }
    };
    exports2.ScopeManager = ScopeManager;
    _ScopeManager_options = /* @__PURE__ */ new WeakMap();
  }
});

// node_modules/.pnpm/@typescript-eslint+scope-manager@7.10.0/node_modules/@typescript-eslint/scope-manager/dist/analyze.js
var require_analyze = __commonJS({
  "node_modules/.pnpm/@typescript-eslint+scope-manager@7.10.0/node_modules/@typescript-eslint/scope-manager/dist/analyze.js"(exports2) {
    "use strict";
    init_cjs_shims();
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.analyze = void 0;
    var visitor_keys_1 = require_dist2();
    var referencer_1 = require_referencer();
    var ScopeManager_1 = require_ScopeManager();
    var DEFAULT_OPTIONS = {
      childVisitorKeys: visitor_keys_1.visitorKeys,
      globalReturn: false,
      impliedStrict: false,
      jsxPragma: "React",
      jsxFragmentName: null,
      lib: ["es2018"],
      sourceType: "script",
      emitDecoratorMetadata: false
    };
    function analyze(tree, providedOptions) {
      const options = {
        childVisitorKeys: providedOptions?.childVisitorKeys ?? DEFAULT_OPTIONS.childVisitorKeys,
        globalReturn: providedOptions?.globalReturn ?? DEFAULT_OPTIONS.globalReturn,
        impliedStrict: providedOptions?.impliedStrict ?? DEFAULT_OPTIONS.impliedStrict,
        jsxPragma: providedOptions?.jsxPragma === void 0 ? DEFAULT_OPTIONS.jsxPragma : providedOptions.jsxPragma,
        jsxFragmentName: providedOptions?.jsxFragmentName ?? DEFAULT_OPTIONS.jsxFragmentName,
        sourceType: providedOptions?.sourceType ?? DEFAULT_OPTIONS.sourceType,
        lib: providedOptions?.lib ?? ["esnext"],
        emitDecoratorMetadata: false
      };
      options.lib = options.lib.map((l) => l.toLowerCase());
      const scopeManager = new ScopeManager_1.ScopeManager(options);
      const referencer = new referencer_1.Referencer(options, scopeManager);
      referencer.visit(tree);
      return scopeManager;
    }
    exports2.analyze = analyze;
  }
});

// node_modules/.pnpm/@typescript-eslint+scope-manager@7.10.0/node_modules/@typescript-eslint/scope-manager/dist/index.js
var require_dist3 = __commonJS({
  "node_modules/.pnpm/@typescript-eslint+scope-manager@7.10.0/node_modules/@typescript-eslint/scope-manager/dist/index.js"(exports2) {
    "use strict";
    init_cjs_shims();
    var __createBinding = exports2 && exports2.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __exportStar = exports2 && exports2.__exportStar || function(m, exports3) {
      for (var p in m)
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports3, p))
          __createBinding(exports3, m, p);
    };
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.ScopeManager = exports2.PatternVisitor = exports2.Visitor = exports2.Reference = exports2.analyze = void 0;
    var analyze_1 = require_analyze();
    Object.defineProperty(exports2, "analyze", { enumerable: true, get: function() {
      return analyze_1.analyze;
    } });
    __exportStar(require_definition(), exports2);
    var Reference_1 = require_Reference();
    Object.defineProperty(exports2, "Reference", { enumerable: true, get: function() {
      return Reference_1.Reference;
    } });
    var Visitor_1 = require_Visitor();
    Object.defineProperty(exports2, "Visitor", { enumerable: true, get: function() {
      return Visitor_1.Visitor;
    } });
    var PatternVisitor_1 = require_PatternVisitor();
    Object.defineProperty(exports2, "PatternVisitor", { enumerable: true, get: function() {
      return PatternVisitor_1.PatternVisitor;
    } });
    __exportStar(require_scope(), exports2);
    var ScopeManager_1 = require_ScopeManager();
    Object.defineProperty(exports2, "ScopeManager", { enumerable: true, get: function() {
      return ScopeManager_1.ScopeManager;
    } });
    __exportStar(require_variable(), exports2);
  }
});

// node_modules/.pnpm/@typescript-eslint+utils@7.10.0_eslint@8.57.0_typescript@5.4.5/node_modules/@typescript-eslint/utils/dist/ts-eslint/Scope.js
var require_Scope2 = __commonJS({
  "node_modules/.pnpm/@typescript-eslint+utils@7.10.0_eslint@8.57.0_typescript@5.4.5/node_modules/@typescript-eslint/utils/dist/ts-eslint/Scope.js"(exports2) {
    "use strict";
    init_cjs_shims();
    var __createBinding = exports2 && exports2.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __setModuleDefault = exports2 && exports2.__setModuleDefault || (Object.create ? function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    } : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports2 && exports2.__importStar || function(mod) {
      if (mod && mod.__esModule)
        return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod)
          if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
            __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.Scope = void 0;
    var scopeManager = __importStar(require_dist3());
    var Scope;
    (function(Scope2) {
      Scope2.ScopeType = scopeManager.ScopeType;
      Scope2.DefinitionType = scopeManager.DefinitionType;
    })(Scope || (exports2.Scope = Scope = {}));
  }
});

// node_modules/.pnpm/@typescript-eslint+utils@7.10.0_eslint@8.57.0_typescript@5.4.5/node_modules/@typescript-eslint/utils/dist/ts-eslint/SourceCode.js
var require_SourceCode = __commonJS({
  "node_modules/.pnpm/@typescript-eslint+utils@7.10.0_eslint@8.57.0_typescript@5.4.5/node_modules/@typescript-eslint/utils/dist/ts-eslint/SourceCode.js"(exports2) {
    "use strict";
    init_cjs_shims();
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.SourceCode = void 0;
    var eslint_1 = require("eslint");
    var SourceCode = class extends eslint_1.SourceCode {
    };
    exports2.SourceCode = SourceCode;
  }
});

// node_modules/.pnpm/@typescript-eslint+utils@7.10.0_eslint@8.57.0_typescript@5.4.5/node_modules/@typescript-eslint/utils/dist/ts-eslint/index.js
var require_ts_eslint = __commonJS({
  "node_modules/.pnpm/@typescript-eslint+utils@7.10.0_eslint@8.57.0_typescript@5.4.5/node_modules/@typescript-eslint/utils/dist/ts-eslint/index.js"(exports2) {
    "use strict";
    init_cjs_shims();
    var __createBinding = exports2 && exports2.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __exportStar = exports2 && exports2.__exportStar || function(m, exports3) {
      for (var p in m)
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports3, p))
          __createBinding(exports3, m, p);
    };
    Object.defineProperty(exports2, "__esModule", { value: true });
    __exportStar(require_AST(), exports2);
    __exportStar(require_Config(), exports2);
    __exportStar(require_ESLint(), exports2);
    __exportStar(require_Linter(), exports2);
    __exportStar(require_Parser(), exports2);
    __exportStar(require_ParserOptions(), exports2);
    __exportStar(require_Processor(), exports2);
    __exportStar(require_Rule(), exports2);
    __exportStar(require_RuleTester(), exports2);
    __exportStar(require_Scope2(), exports2);
    __exportStar(require_SourceCode(), exports2);
  }
});

// node_modules/.pnpm/@typescript-eslint+utils@7.10.0_eslint@8.57.0_typescript@5.4.5/node_modules/@typescript-eslint/utils/dist/ts-utils/isArray.js
var require_isArray = __commonJS({
  "node_modules/.pnpm/@typescript-eslint+utils@7.10.0_eslint@8.57.0_typescript@5.4.5/node_modules/@typescript-eslint/utils/dist/ts-utils/isArray.js"(exports2) {
    "use strict";
    init_cjs_shims();
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.isArray = void 0;
    function isArray(arg) {
      return Array.isArray(arg);
    }
    exports2.isArray = isArray;
  }
});

// node_modules/.pnpm/@typescript-eslint+utils@7.10.0_eslint@8.57.0_typescript@5.4.5/node_modules/@typescript-eslint/utils/dist/ts-utils/index.js
var require_ts_utils = __commonJS({
  "node_modules/.pnpm/@typescript-eslint+utils@7.10.0_eslint@8.57.0_typescript@5.4.5/node_modules/@typescript-eslint/utils/dist/ts-utils/index.js"(exports2) {
    "use strict";
    init_cjs_shims();
    var __createBinding = exports2 && exports2.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __exportStar = exports2 && exports2.__exportStar || function(m, exports3) {
      for (var p in m)
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports3, p))
          __createBinding(exports3, m, p);
    };
    Object.defineProperty(exports2, "__esModule", { value: true });
    __exportStar(require_isArray(), exports2);
  }
});

// node_modules/.pnpm/@typescript-eslint+utils@7.10.0_eslint@8.57.0_typescript@5.4.5/node_modules/@typescript-eslint/utils/dist/index.js
var require_dist4 = __commonJS({
  "node_modules/.pnpm/@typescript-eslint+utils@7.10.0_eslint@8.57.0_typescript@5.4.5/node_modules/@typescript-eslint/utils/dist/index.js"(exports2) {
    "use strict";
    init_cjs_shims();
    var __createBinding = exports2 && exports2.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __setModuleDefault = exports2 && exports2.__setModuleDefault || (Object.create ? function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    } : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports2 && exports2.__importStar || function(mod) {
      if (mod && mod.__esModule)
        return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod)
          if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
            __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    var __exportStar = exports2 && exports2.__exportStar || function(m, exports3) {
      for (var p in m)
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports3, p))
          __createBinding(exports3, m, p);
    };
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.TSUtils = exports2.TSESLint = exports2.JSONSchema = exports2.ESLintUtils = exports2.ASTUtils = void 0;
    var ASTUtils = __importStar(require_ast_utils());
    exports2.ASTUtils = ASTUtils;
    var ESLintUtils2 = __importStar(require_eslint_utils3());
    exports2.ESLintUtils = ESLintUtils2;
    var JSONSchema = __importStar(require_json_schema());
    exports2.JSONSchema = JSONSchema;
    var TSESLint = __importStar(require_ts_eslint());
    exports2.TSESLint = TSESLint;
    var TSUtils = __importStar(require_ts_utils());
    exports2.TSUtils = TSUtils;
    __exportStar(require_ts_estree2(), exports2);
  }
});

// node_modules/.pnpm/@unocss+eslint-plugin@0.60.3_eslint@8.57.0_typescript@5.4.5/node_modules/@unocss/eslint-plugin/dist/dirs.mjs
var import_node_url4, distDir;
var init_dirs = __esm({
  "node_modules/.pnpm/@unocss+eslint-plugin@0.60.3_eslint@8.57.0_typescript@5.4.5/node_modules/@unocss/eslint-plugin/dist/dirs.mjs"() {
    "use strict";
    init_cjs_shims();
    import_node_url4 = require("url");
    distDir = (0, import_node_url4.fileURLToPath)(new URL("../dist", importMetaUrl));
  }
});

// node_modules/.pnpm/@unocss+eslint-plugin@0.60.3_eslint@8.57.0_typescript@5.4.5/node_modules/@unocss/eslint-plugin/dist/index.mjs
var dist_exports2 = {};
__export(dist_exports2, {
  default: () => index
});
var import_node_path7, import_utils13, import_node_url5, configsRecommended, syncAction, createRule, IGNORE_ATTRIBUTES, orderAttributify, CLASS_FIELDS, AST_NODES_WITH_QUOTES, order, blocklist, enforceClassCompile, plugin, configsFlat, index;
var init_dist2 = __esm({
  "node_modules/.pnpm/@unocss+eslint-plugin@0.60.3_eslint@8.57.0_typescript@5.4.5/node_modules/@unocss/eslint-plugin/dist/index.mjs"() {
    "use strict";
    init_cjs_shims();
    init_magic_string_es();
    import_node_path7 = require("path");
    init_lib2();
    import_utils13 = __toESM(require_dist4(), 1);
    init_dirs();
    import_node_url5 = require("url");
    configsRecommended = {
      plugins: ["@unocss"],
      rules: {
        "@unocss/order": "warn",
        "@unocss/order-attributify": "warn"
      }
    };
    syncAction = createSyncFn((0, import_node_path7.join)(distDir, "worker.mjs"));
    createRule = import_utils13.ESLintUtils.RuleCreator(
      () => "https://unocss.dev/integrations/eslint#rules"
    );
    IGNORE_ATTRIBUTES = ["style", "class", "classname", "value"];
    orderAttributify = createRule({
      name: "order-attributify",
      meta: {
        type: "layout",
        fixable: "code",
        docs: {
          description: "Order of UnoCSS attributes",
          recommended: "recommended"
        },
        messages: {
          "invalid-order": "UnoCSS attributes are not ordered"
        },
        schema: []
      },
      defaultOptions: [],
      create(context) {
        const scriptVisitor = {};
        const templateBodyVisitor = {
          VStartTag(node2) {
            const valueless = node2.attributes.filter((i) => typeof i.key?.name === "string" && !IGNORE_ATTRIBUTES.includes(i.key?.name?.toLowerCase()) && i.value == null);
            if (!valueless.length)
              return;
            const input = valueless.map((i) => i.key.name).join(" ").trim();
            const sorted = syncAction(
              context.settings.unocss?.configPath,
              "sort",
              input
            );
            if (sorted !== input) {
              context.report({
                node: node2,
                messageId: "invalid-order",
                fix(fixer) {
                  const codeFull = context.getSourceCode();
                  const offset = node2.range[0];
                  const code = codeFull.getText().slice(node2.range[0], node2.range[1]);
                  const s = new MagicString(code);
                  const sortedNodes = valueless.map((i) => [i.range[0] - offset, i.range[1] - offset]).sort((a, b) => b[0] - a[0]);
                  for (const [start, end] of sortedNodes.slice(1))
                    s.remove(start, end);
                  s.overwrite(sortedNodes[0][0], sortedNodes[0][1], ` ${sorted.trim()} `);
                  return fixer.replaceText(node2, s.toString());
                }
              });
            }
          }
        };
        const parserServices = context?.sourceCode.parserServices || context.parserServices;
        if (parserServices == null || parserServices.defineTemplateBodyVisitor == null) {
          return scriptVisitor;
        } else {
          return parserServices?.defineTemplateBodyVisitor(templateBodyVisitor, scriptVisitor);
        }
      }
    });
    CLASS_FIELDS = ["class", "classname"];
    AST_NODES_WITH_QUOTES = ["Literal", "VLiteral"];
    order = createRule({
      name: "order",
      meta: {
        type: "layout",
        fixable: "code",
        docs: {
          description: "Order of UnoCSS utilities in class attribute",
          recommended: "recommended"
        },
        messages: {
          "invalid-order": "UnoCSS utilities are not ordered"
        },
        schema: []
      },
      defaultOptions: [],
      create(context) {
        function checkLiteral(node2) {
          if (typeof node2.value !== "string" || !node2.value.trim())
            return;
          const input = node2.value;
          const sorted = syncAction(
            context.settings.unocss?.configPath,
            "sort",
            input
          ).trim();
          if (sorted !== input) {
            context.report({
              node: node2,
              messageId: "invalid-order",
              fix(fixer) {
                if (AST_NODES_WITH_QUOTES.includes(node2.type))
                  return fixer.replaceTextRange([node2.range[0] + 1, node2.range[1] - 1], sorted);
                else
                  return fixer.replaceText(node2, sorted);
              }
            });
          }
        }
        const scriptVisitor = {
          JSXAttribute(node2) {
            if (typeof node2.name.name === "string" && CLASS_FIELDS.includes(node2.name.name.toLowerCase()) && node2.value) {
              if (node2.value.type === "Literal")
                checkLiteral(node2.value);
            }
          },
          SvelteAttribute(node2) {
            if (node2.key.name === "class") {
              if (node2.value?.[0].type === "SvelteLiteral")
                checkLiteral(node2.value[0]);
            }
          }
        };
        const templateBodyVisitor = {
          VAttribute(node2) {
            if (node2.key.name === "class") {
              if (node2.value.type === "VLiteral")
                checkLiteral(node2.value);
            }
          }
        };
        const parserServices = context?.sourceCode.parserServices || context.parserServices;
        if (parserServices == null || parserServices.defineTemplateBodyVisitor == null) {
          return scriptVisitor;
        } else {
          return parserServices?.defineTemplateBodyVisitor(templateBodyVisitor, scriptVisitor);
        }
      }
    });
    blocklist = createRule({
      name: "blocklist",
      meta: {
        type: "problem",
        fixable: "code",
        docs: {
          description: "Utilities in UnoCSS blocklist",
          recommended: "recommended"
        },
        messages: {
          "in-blocklist": '"{{name}}" is in blocklist{{reason}}'
        },
        schema: []
      },
      defaultOptions: [],
      create(context) {
        const checkLiteral = (node2) => {
          if (typeof node2.value !== "string" || !node2.value.trim())
            return;
          const input = node2.value;
          const blocked = syncAction(
            context.settings.unocss?.configPath,
            "blocklist",
            input,
            context.filename
          );
          blocked.forEach(([name, meta]) => {
            context.report({
              node: node2,
              messageId: "in-blocklist",
              data: {
                name,
                reason: meta?.message ? `: ${meta.message}` : ""
              }
            });
          });
        };
        const scriptVisitor = {
          JSXAttribute(node2) {
            if (typeof node2.name.name === "string" && CLASS_FIELDS.includes(node2.name.name.toLowerCase()) && node2.value) {
              if (node2.value.type === "Literal")
                checkLiteral(node2.value);
            }
          },
          SvelteAttribute(node2) {
            if (node2.key.name === "class") {
              if (node2.value?.[0].type === "SvelteLiteral")
                checkLiteral(node2.value[0]);
            }
          }
        };
        const templateBodyVisitor = {
          VAttribute(node2) {
            if (node2.key.name === "class") {
              if (node2.value.type === "VLiteral")
                checkLiteral(node2.value);
            }
          },
          // Attributify
          VStartTag(node2) {
            const valueless = node2.attributes.filter((i) => typeof i.key?.name === "string" && !IGNORE_ATTRIBUTES.includes(i.key?.name?.toLowerCase()) && i.value == null);
            if (!valueless.length)
              return;
            for (const node22 of valueless) {
              if (!node22?.key?.name)
                continue;
              const blocked = syncAction(
                context.settings.unocss?.configPath,
                "blocklist",
                node22.key.name,
                context.filename
              );
              blocked.forEach(([name, meta]) => {
                context.report({
                  node: node22,
                  messageId: "in-blocklist",
                  data: {
                    name,
                    reason: meta?.message ? `: ${meta.message}` : ""
                  }
                });
              });
            }
          }
        };
        const parserServices = context?.sourceCode.parserServices || context.parserServices;
        if (parserServices == null || parserServices.defineTemplateBodyVisitor == null) {
          return scriptVisitor;
        } else {
          return parserServices?.defineTemplateBodyVisitor(templateBodyVisitor, scriptVisitor);
        }
      }
    });
    enforceClassCompile = createRule({
      name: "enforce-class-compile",
      meta: {
        type: "problem",
        fixable: "code",
        docs: {
          description: "Enforce class compilation"
        },
        messages: {
          missing: "prefix: `{{prefix}}` is missing"
        },
        schema: [{
          type: "object",
          properties: {
            prefix: {
              type: "string"
            },
            enableFix: {
              type: "boolean"
            }
          },
          additionalProperties: false
        }]
      },
      defaultOptions: [{ prefix: ":uno:", enableFix: true }],
      create(context, [mergedOptions]) {
        const CLASS_COMPILE_PREFIX = `${mergedOptions.prefix} `;
        const ENABLE_FIX = mergedOptions.enableFix;
        function report({ node: node2, fix }) {
          context.report({
            node: node2,
            loc: node2.loc,
            messageId: "missing",
            data: { prefix: CLASS_COMPILE_PREFIX.trim() },
            fix: (...args) => ENABLE_FIX ? fix(...args) : null
          });
        }
        const scriptVisitor = {
          JSXAttribute(_node) {
          },
          SvelteAttribute(_node) {
          }
        };
        const reportClassList = (node2, classList) => {
          if (classList.startsWith(CLASS_COMPILE_PREFIX))
            return;
          report({
            node: node2,
            fix(fixer) {
              return fixer.replaceTextRange([node2.range[0] + 1, node2.range[1] - 1], `${CLASS_COMPILE_PREFIX}${classList}`);
            }
          });
        };
        const templateBodyVisitor = {
          [`VAttribute[key.name=class]`](attr) {
            const valueNode = attr.value;
            if (!valueNode || !valueNode.value)
              return;
            reportClassList(valueNode, valueNode.value);
          },
          [`VAttribute[key.argument.name=class] VExpressionContainer Literal:not(ConditionalExpression .test Literal):not(Property .value Literal)`](literal) {
            if (!literal.value || typeof literal.value !== "string")
              return;
            reportClassList(literal, literal.value);
          },
          [`VAttribute[key.argument.name=class] VExpressionContainer TemplateElement`](templateElement) {
            if (!templateElement.value.raw)
              return;
            reportClassList(templateElement, templateElement.value.raw);
          },
          [`VAttribute[key.argument.name=class] VExpressionContainer Property`](property) {
            if (property.key.type !== "Identifier")
              return;
            const classListString = property.key.name;
            if (classListString.startsWith(CLASS_COMPILE_PREFIX))
              return;
            report({
              node: property.key,
              fix(fixer) {
                let replacePropertyKeyText = `'${CLASS_COMPILE_PREFIX}${classListString}'`;
                if (property.shorthand)
                  replacePropertyKeyText = `${replacePropertyKeyText}: ${classListString}`;
                return fixer.replaceTextRange(property.key.range, replacePropertyKeyText);
              }
            });
          }
        };
        const parserServices = context?.sourceCode.parserServices || context.parserServices;
        if (parserServices == null || parserServices.defineTemplateBodyVisitor == null) {
          return scriptVisitor;
        } else {
          return parserServices?.defineTemplateBodyVisitor(templateBodyVisitor, scriptVisitor);
        }
      }
    });
    plugin = {
      rules: {
        order,
        "order-attributify": orderAttributify,
        blocklist,
        "enforce-class-compile": enforceClassCompile
      }
    };
    configsFlat = {
      plugins: {
        unocss: plugin
      },
      rules: {
        "unocss/order": "warn",
        "unocss/order-attributify": "warn"
      }
    };
    index = {
      ...plugin,
      configs: {
        recommended: configsRecommended,
        flat: configsFlat
      }
    };
  }
});

// src/index.ts
var src_exports = {};
__export(src_exports, {
  GLOB_ALL_SRC: () => GLOB_ALL_SRC,
  GLOB_ASTRO: () => GLOB_ASTRO,
  GLOB_CSS: () => GLOB_CSS,
  GLOB_EXCLUDE: () => GLOB_EXCLUDE,
  GLOB_GRAPHQL: () => GLOB_GRAPHQL,
  GLOB_HTML: () => GLOB_HTML,
  GLOB_JS: () => GLOB_JS,
  GLOB_JSON: () => GLOB_JSON,
  GLOB_JSON5: () => GLOB_JSON5,
  GLOB_JSONC: () => GLOB_JSONC,
  GLOB_JSX: () => GLOB_JSX,
  GLOB_LESS: () => GLOB_LESS,
  GLOB_MARKDOWN: () => GLOB_MARKDOWN,
  GLOB_MARKDOWN_CODE: () => GLOB_MARKDOWN_CODE,
  GLOB_MARKDOWN_IN_MARKDOWN: () => GLOB_MARKDOWN_IN_MARKDOWN,
  GLOB_POSTCSS: () => GLOB_POSTCSS,
  GLOB_SCSS: () => GLOB_SCSS,
  GLOB_SRC: () => GLOB_SRC,
  GLOB_SRC_EXT: () => GLOB_SRC_EXT,
  GLOB_STYLE: () => GLOB_STYLE,
  GLOB_SVELTE: () => GLOB_SVELTE,
  GLOB_TESTS: () => GLOB_TESTS,
  GLOB_TOML: () => GLOB_TOML,
  GLOB_TS: () => GLOB_TS,
  GLOB_TSX: () => GLOB_TSX,
  GLOB_VUE: () => GLOB_VUE,
  GLOB_XML: () => GLOB_XML,
  GLOB_YAML: () => GLOB_YAML,
  PLUGIN_PREFIX: () => PLUGIN_PREFIX,
  StylisticConfigDefaults: () => StylisticConfigDefaults,
  astro: () => astro,
  combine: () => combine,
  command: () => command,
  comments: () => comments,
  default: () => src_default,
  defaultPluginRenaming: () => defaultPluginRenaming,
  ensurePackages: () => ensurePackages,
  eslint: () => eslint,
  formatters: () => formatters,
  getOverrides: () => getOverrides,
  ignores: () => ignores,
  imports: () => imports,
  interopDefault: () => interopDefault,
  javascript: () => javascript,
  jsdoc: () => jsdoc,
  jsonc: () => jsonc,
  markdown: () => markdown,
  node: () => node,
  parserPlain: () => parserPlain,
  perfectionist: () => perfectionist,
  react: () => react,
  regexp: () => regexp,
  renamePluginInConfigs: () => renamePluginInConfigs,
  renameRules: () => renameRules,
  resolveSubOptions: () => resolveSubOptions,
  solid: () => solid,
  sortPackageJson: () => sortPackageJson,
  sortTsconfig: () => sortTsconfig,
  stylistic: () => stylistic,
  svelte: () => svelte,
  test: () => test,
  toArray: () => toArray,
  toml: () => toml,
  typescript: () => typescript,
  unicorn: () => unicorn,
  unocss: () => unocss,
  vue: () => vue,
  yaml: () => yaml
});
module.exports = __toCommonJS(src_exports);
init_cjs_shims();

// src/factory.ts
init_cjs_shims();
var import_node_process6 = __toESM(require("process"), 1);
var import_node_fs6 = __toESM(require("fs"), 1);
var import_local_pkg4 = require("local-pkg");
var import_eslint_flat_config_utils = require("eslint-flat-config-utils");

// src/configs/index.ts
init_cjs_shims();

// src/configs/astro.ts
init_cjs_shims();

// src/globs.ts
init_cjs_shims();
var GLOB_SRC_EXT = "?([cm])[jt]s?(x)";
var GLOB_SRC = "**/*.?([cm])[jt]s?(x)";
var GLOB_JS = "**/*.?([cm])js";
var GLOB_JSX = "**/*.?([cm])jsx";
var GLOB_TS = "**/*.?([cm])ts";
var GLOB_TSX = "**/*.?([cm])tsx";
var GLOB_STYLE = "**/*.{c,le,sc}ss";
var GLOB_CSS = "**/*.css";
var GLOB_POSTCSS = "**/*.{p,post}css";
var GLOB_LESS = "**/*.less";
var GLOB_SCSS = "**/*.scss";
var GLOB_JSON = "**/*.json";
var GLOB_JSON5 = "**/*.json5";
var GLOB_JSONC = "**/*.jsonc";
var GLOB_MARKDOWN = "**/*.md";
var GLOB_MARKDOWN_IN_MARKDOWN = "**/*.md/*.md";
var GLOB_SVELTE = "**/*.svelte";
var GLOB_VUE = "**/*.vue";
var GLOB_YAML = "**/*.y?(a)ml";
var GLOB_TOML = "**/*.toml";
var GLOB_XML = "**/*.xml";
var GLOB_HTML = "**/*.htm?(l)";
var GLOB_ASTRO = "**/*.astro";
var GLOB_GRAPHQL = "**/*.{g,graph}ql";
var GLOB_MARKDOWN_CODE = `${GLOB_MARKDOWN}/${GLOB_SRC}`;
var GLOB_TESTS = [
  `**/__tests__/**/*.${GLOB_SRC_EXT}`,
  `**/*.spec.${GLOB_SRC_EXT}`,
  `**/*.test.${GLOB_SRC_EXT}`,
  `**/*.bench.${GLOB_SRC_EXT}`,
  `**/*.benchmark.${GLOB_SRC_EXT}`
];
var GLOB_ALL_SRC = [
  GLOB_SRC,
  GLOB_STYLE,
  GLOB_JSON,
  GLOB_JSON5,
  GLOB_MARKDOWN,
  GLOB_SVELTE,
  GLOB_VUE,
  GLOB_YAML,
  GLOB_XML,
  GLOB_HTML
];
var GLOB_EXCLUDE = [
  "**/node_modules",
  "**/dist",
  "**/package-lock.json",
  "**/yarn.lock",
  "**/pnpm-lock.yaml",
  "**/bun.lockb",
  "**/output",
  "**/coverage",
  "**/temp",
  "**/.temp",
  "**/tmp",
  "**/.tmp",
  "**/.history",
  "**/.vitepress/cache",
  "**/.nuxt",
  "**/.next",
  "**/.vercel",
  "**/.changeset",
  "**/.idea",
  "**/.cache",
  "**/.output",
  "**/.vite-inspect",
  "**/.yarn",
  "**/CHANGELOG*.md",
  "**/*.min.*",
  "**/LICENSE*",
  "**/__snapshots__",
  "**/auto-import?(s).d.ts",
  "**/components.d.ts"
];

// src/utils.ts
init_cjs_shims();
var import_node_process4 = __toESM(require("process"), 1);
var import_local_pkg = require("local-pkg");
var parserPlain = {
  meta: {
    name: "parser-plain"
  },
  parseForESLint: (code) => ({
    ast: {
      body: [],
      comments: [],
      loc: { end: code.length, start: 0 },
      range: [0, code.length],
      tokens: [],
      type: "Program"
    },
    scopeManager: null,
    services: { isPlain: true },
    visitorKeys: {
      Program: []
    }
  })
};
async function combine(...configs2) {
  const resolved = await Promise.all(configs2);
  return resolved.flat();
}
function renameRules(rules, map) {
  return Object.fromEntries(
    Object.entries(rules).map(([key, value]) => {
      for (const [from, to] of Object.entries(map))
        if (key.startsWith(`${from}/`))
          return [to + key.slice(from.length), value];
      return [key, value];
    })
  );
}
function renamePluginInConfigs(configs2, map) {
  return configs2.map((i) => {
    const clone = { ...i };
    if (clone.rules)
      clone.rules = renameRules(clone.rules, map);
    if (clone.plugins) {
      clone.plugins = Object.fromEntries(
        Object.entries(clone.plugins).map(([key, value]) => {
          if (key in map)
            return [map[key], value];
          return [key, value];
        })
      );
    }
    return clone;
  });
}
function toArray(value) {
  return Array.isArray(value) ? value : [value];
}
async function interopDefault(m) {
  const resolved = await m;
  return resolved.default || resolved;
}
async function ensurePackages(packages) {
  if (import_node_process4.default.env.CI || import_node_process4.default.stdout.isTTY === false)
    return;
  const nonExistingPackages = packages.filter((i) => i && !(0, import_local_pkg.isPackageExists)(i));
  if (nonExistingPackages.length === 0)
    return;
  const p = await import("@clack/prompts");
  const result = await p.confirm({
    message: `${nonExistingPackages.length === 1 ? "Package is" : "Packages are"} required for this config: ${nonExistingPackages.join(", ")}. Do you want to install them?`
  });
  if (result)
    await Promise.resolve().then(() => (init_dist(), dist_exports)).then((i) => i.installPackage(nonExistingPackages, { dev: true }));
}

// src/configs/astro.ts
async function astro(options = {}) {
  const { files = [GLOB_ASTRO], overrides = {}, stylistic: stylistic2 = true } = options;
  const [pluginAstro, parserAstro, parserTs] = await Promise.all([
    interopDefault(import("eslint-plugin-astro")),
    interopDefault(import("astro-eslint-parser")),
    interopDefault(import("@typescript-eslint/parser"))
  ]);
  return [
    {
      name: `${PLUGIN_PREFIX}/astro/setup`,
      plugins: {
        astro: pluginAstro
      }
    },
    {
      files,
      languageOptions: {
        parser: parserAstro,
        parserOptions: {
          extraFileExtensions: [".astro"],
          parser: parserTs
        }
      },
      name: `${PLUGIN_PREFIX}/astro/rules`,
      rules: {
        "astro/no-set-html-directive": "off",
        "astro/semi": "off",
        ...stylistic2 ? {
          "style/indent": "off",
          "style/jsx-closing-tag-location": "off",
          "style/jsx-indent": "off",
          "style/jsx-one-expression-per-line": "off",
          "style/no-multiple-empty-lines": "off"
        } : {},
        ...overrides
      }
    }
  ];
}

// src/configs/command.ts
init_cjs_shims();
var import_config = __toESM(require("eslint-plugin-command/config"), 1);
async function command() {
  return [
    {
      ...(0, import_config.default)(),
      name: `${PLUGIN_PREFIX}/command/rules`
    }
  ];
}

// src/configs/comments.ts
init_cjs_shims();

// src/plugins.ts
init_cjs_shims();
var import_eslint_plugin_eslint_comments = __toESM(require("eslint-plugin-eslint-comments"), 1);
var pluginImport = __toESM(require("eslint-plugin-import-x"), 1);
var import_eslint_plugin_n = __toESM(require("eslint-plugin-n"), 1);
var import_eslint_plugin_unicorn = __toESM(require("eslint-plugin-unicorn"), 1);
var import_eslint_plugin_unused_imports = __toESM(require("eslint-plugin-unused-imports"), 1);
var import_eslint_plugin_perfectionist = __toESM(require("eslint-plugin-perfectionist"), 1);

// src/configs/comments.ts
async function comments() {
  return [
    {
      name: `${PLUGIN_PREFIX}/eslint-comments/rules`,
      plugins: {
        "eslint-comments": import_eslint_plugin_eslint_comments.default
      },
      rules: {
        "eslint-comments/no-aggregating-enable": "error",
        "eslint-comments/no-duplicate-disable": "error",
        "eslint-comments/no-unlimited-disable": "error",
        "eslint-comments/no-unused-enable": "error"
      }
    }
  ];
}

// src/configs/formatters.ts
init_cjs_shims();
var import_local_pkg2 = require("local-pkg");

// node_modules/.pnpm/@jiangweiye+prettier-config@0.0.7/node_modules/@jiangweiye/prettier-config/dist/index.esm.js
init_cjs_shims();
function prettier(options) {
  return {
    printWidth: 140,
    tabWidth: 4,
    useTabs: false,
    semi: true,
    singleQuote: true,
    quoteProps: "as-needed",
    jsxSingleQuote: true,
    trailingComma: "none",
    bracketSpacing: true,
    bracketSameLine: false,
    arrowParens: "avoid",
    insertPragma: false,
    proseWrap: "never",
    htmlWhitespaceSensitivity: "strict",
    vueIndentScriptAndStyle: false,
    endOfLine: "lf",
    embeddedLanguageFormatting: "auto",
    singleAttributePerLine: false,
    ...options || {}
  };
}

// src/configs/stylistic.ts
init_cjs_shims();
var StylisticConfigDefaults = {
  indent: 4,
  jsx: true,
  quotes: "single",
  semi: true
};
async function stylistic(options = {}) {
  const {
    indent,
    jsx,
    lessOpinionated = false,
    overrides = {},
    quotes,
    semi
  } = {
    ...StylisticConfigDefaults,
    ...options
  };
  const pluginStylistic = await interopDefault(import("@stylistic/eslint-plugin"));
  const config = pluginStylistic.configs.customize({
    flat: true,
    indent,
    jsx,
    pluginName: "style",
    quotes,
    semi
  });
  return [
    {
      name: `${PLUGIN_PREFIX}/stylistic/rules`,
      plugins: {
        style: pluginStylistic
      },
      rules: {
        ...config.rules,
        ...lessOpinionated ? { curly: ["error", "all"] } : { curly: ["error", "multi-or-nest", "consistent"] },
        "style/indent": ["off"],
        "style/no-multiple-empty-lines": ["off"],
        "style/arrow-parens": ["error", "as-needed"],
        "style/comma-dangle": ["off"],
        "style/quote-props": ["error", "as-needed"],
        "style/operator-linebreak": "off",
        "style/brace-style": "error",
        curly: ["off", "multi"],
        ...overrides
      }
    }
  ];
}

// src/configs/formatters.ts
async function formatters(options = {}, stylistic2 = {}) {
  if (options === true) {
    options = {
      astro: (0, import_local_pkg2.isPackageExists)("astro"),
      css: true,
      graphql: true,
      html: true,
      markdown: true,
      slidev: (0, import_local_pkg2.isPackageExists)("@slidev/cli"),
      xml: (0, import_local_pkg2.isPackageExists)("@prettier/plugin-xml")
    };
  }
  await ensurePackages([
    "eslint-plugin-format",
    options.markdown && options.slidev ? "prettier-plugin-slidev" : void 0,
    options.astro ? "prettier-plugin-astro" : void 0,
    options.xml ? "@prettier/plugin-xml" : void 0
  ]);
  if (options.slidev && options.markdown !== true && options.markdown !== "prettier")
    throw new Error("`slidev` option only works when `markdown` is enabled with `prettier`");
  const { indent, quotes, semi } = {
    ...StylisticConfigDefaults,
    ...stylistic2
  };
  const preset = prettier();
  const prettierOptions = Object.assign(
    {
      ...preset,
      endOfLine: preset.endOfLine,
      semi,
      singleQuote: preset.singleQuote,
      tabWidth: typeof indent === "number" ? indent : 4,
      trailingComma: preset.trailingComma,
      useTabs: indent === "tab"
    },
    options.prettierOptions || {}
  );
  const prettierXmlOptions = {
    xmlQuoteAttributes: "double",
    xmlSelfClosingSpace: true,
    xmlSortAttributesByKey: false,
    xmlWhitespaceSensitivity: "ignore"
  };
  const dprintOptions = Object.assign(
    {
      indentWidth: typeof indent === "number" ? indent : 4,
      quoteStyle: quotes === "single" ? "preferSingle" : "preferDouble",
      useTabs: indent === "tab"
    },
    options.dprintOptions || {}
  );
  const pluginFormat = await interopDefault(import("eslint-plugin-format"));
  const configs2 = [
    {
      name: `${PLUGIN_PREFIX}/formatter/setup`,
      plugins: {
        format: pluginFormat
      }
    }
  ];
  if (options.css) {
    configs2.push(
      {
        files: [GLOB_CSS, GLOB_POSTCSS],
        languageOptions: {
          parser: parserPlain
        },
        name: `${PLUGIN_PREFIX}/formatter/css`,
        rules: {
          "format/prettier": [
            "error",
            {
              ...prettierOptions,
              parser: "css"
            }
          ]
        }
      },
      {
        files: [GLOB_SCSS],
        languageOptions: {
          parser: parserPlain
        },
        name: `${PLUGIN_PREFIX}/formatter/scss`,
        rules: {
          "format/prettier": [
            "error",
            {
              ...prettierOptions,
              parser: "scss"
            }
          ]
        }
      },
      {
        files: [GLOB_LESS],
        languageOptions: {
          parser: parserPlain
        },
        name: `${PLUGIN_PREFIX}/formatter/less`,
        rules: {
          "format/prettier": [
            "error",
            {
              ...prettierOptions,
              parser: "less"
            }
          ]
        }
      }
    );
  }
  if (options.html) {
    configs2.push({
      files: [GLOB_HTML],
      languageOptions: {
        parser: parserPlain
      },
      name: `${PLUGIN_PREFIX}/formatter/html`,
      rules: {
        "format/prettier": [
          "error",
          {
            ...prettierOptions,
            parser: "html"
          }
        ]
      }
    });
  }
  if (options.xml) {
    configs2.push({
      files: [GLOB_XML],
      languageOptions: {
        parser: parserPlain
      },
      name: `${PLUGIN_PREFIX}/formatter/xml`,
      rules: {
        "format/prettier": [
          "error",
          {
            ...prettierXmlOptions,
            ...prettierOptions,
            parser: "xml",
            plugins: ["@prettier/plugin-xml"]
          }
        ]
      }
    });
  }
  if (options.markdown) {
    const formater = options.markdown === true ? "prettier" : options.markdown;
    const GLOB_SLIDEV = !options.slidev ? [] : options.slidev === true ? ["**/slides.md"] : options.slidev.files;
    configs2.push({
      files: [GLOB_MARKDOWN],
      ignores: GLOB_SLIDEV,
      languageOptions: {
        parser: parserPlain
      },
      name: `${PLUGIN_PREFIX}/formatter/markdown`,
      rules: {
        [`format/${formater}`]: [
          "error",
          formater === "prettier" ? {
            printWidth: preset.printWidth,
            ...prettierOptions,
            embeddedLanguageFormatting: "off",
            parser: "markdown"
          } : {
            ...dprintOptions,
            language: "markdown"
          }
        ]
      }
    });
    if (options.slidev) {
      configs2.push({
        files: GLOB_SLIDEV,
        languageOptions: {
          parser: parserPlain
        },
        name: `${PLUGIN_PREFIX}/formatter/slidev`,
        rules: {
          "format/prettier": [
            "error",
            {
              printWidth: preset.printWidth,
              ...prettierOptions,
              embeddedLanguageFormatting: "off",
              parser: "slidev",
              plugins: ["prettier-plugin-slidev"]
            }
          ]
        }
      });
    }
  }
  if (options.astro) {
    configs2.push({
      files: [GLOB_ASTRO],
      languageOptions: {
        parser: parserPlain
      },
      name: `${PLUGIN_PREFIX}/formatter/astro`,
      rules: {
        "format/prettier": [
          "error",
          {
            ...prettierOptions,
            parser: "astro",
            plugins: ["prettier-plugin-astro"]
          }
        ]
      }
    });
  }
  if (options.graphql) {
    configs2.push({
      files: [GLOB_GRAPHQL],
      languageOptions: {
        parser: parserPlain
      },
      name: `${PLUGIN_PREFIX}/formatter/graphql`,
      rules: {
        "format/prettier": [
          "error",
          {
            ...prettierOptions,
            parser: "graphql"
          }
        ]
      }
    });
  }
  return configs2;
}

// src/configs/ignores.ts
init_cjs_shims();
async function ignores() {
  return [
    {
      ignores: GLOB_EXCLUDE
      // Awaits https://github.com/humanwhocodes/config-array/pull/131
      // name: 'antfu/ignores',
    }
  ];
}

// src/configs/imports.ts
init_cjs_shims();
async function imports(options = {}) {
  const { stylistic: stylistic2 = true } = options;
  return [
    {
      name: `${PLUGIN_PREFIX}/imports/rules`,
      plugins: {
        // antfu: pluginAntfu,
        import: pluginImport
      },
      rules: {
        // 'import-dedupe': 'error',
        // 'no-import-dist': 'error',
        // 'no-import-node-modules-by-path': 'error',
        "import/first": "error",
        "import/no-duplicates": "error",
        "import/no-mutable-exports": "error",
        "import/no-named-default": "error",
        "import/no-self-import": "error",
        "import/no-webpack-loader-syntax": "error",
        "import/order": "error",
        ...stylistic2 ? {
          "import/newline-after-import": ["error", { count: 1 }]
        } : {}
      }
    },
    {
      files: ["**/bin/**/*", `**/bin.${GLOB_SRC_EXT}`],
      name: `${PLUGIN_PREFIX}/imports/disables/bin`,
      rules: {
        "no-import-dist": "off",
        "no-import-node-modules-by-path": "off"
      }
    }
  ];
}

// src/configs/javascript.ts
init_cjs_shims();
var import_globals = __toESM(require("globals"), 1);
async function javascript(options = {}) {
  const { isInEditor = false, overrides = {} } = options;
  return [
    {
      languageOptions: {
        ecmaVersion: 2022,
        globals: {
          ...import_globals.default.browser,
          ...import_globals.default.es2021,
          ...import_globals.default.node,
          document: "readonly",
          navigator: "readonly",
          window: "readonly"
        },
        parserOptions: {
          ecmaFeatures: {
            jsx: true
          },
          ecmaVersion: 2022,
          sourceType: "module"
        },
        sourceType: "module"
      },
      linterOptions: {
        reportUnusedDisableDirectives: true
      },
      name: `${PLUGIN_PREFIX}/javascript/rules`,
      plugins: {
        "unused-imports": import_eslint_plugin_unused_imports.default
      },
      rules: {
        "accessor-pairs": ["error", { enforceForClassMembers: true, setWithoutGet: true }],
        "array-callback-return": "error",
        "block-scoped-var": "error",
        "constructor-super": "error",
        "default-case-last": "error",
        "dot-notation": ["error", { allowKeywords: true }],
        eqeqeq: ["error", "smart"],
        "new-cap": ["error", { capIsNew: false, newIsCap: true, properties: true }],
        "no-alert": "error",
        "no-array-constructor": "error",
        "no-async-promise-executor": "error",
        "no-caller": "error",
        "no-case-declarations": "error",
        "no-class-assign": "error",
        "no-compare-neg-zero": "error",
        "no-cond-assign": ["error", "always"],
        "no-console": ["error", { allow: ["warn", "error"] }],
        "no-const-assign": "error",
        "no-control-regex": "error",
        "no-debugger": "error",
        "no-delete-var": "error",
        "no-dupe-args": "error",
        "no-dupe-class-members": "error",
        "no-dupe-keys": "error",
        "no-duplicate-case": "error",
        "no-empty": ["error", { allowEmptyCatch: true }],
        "no-empty-character-class": "error",
        "no-empty-pattern": "error",
        "no-eval": "error",
        "no-ex-assign": "error",
        "no-extend-native": "error",
        "no-extra-bind": "error",
        "no-extra-boolean-cast": "error",
        "no-fallthrough": "error",
        "no-func-assign": "error",
        "no-global-assign": "error",
        "no-implied-eval": "error",
        "no-import-assign": "error",
        "no-invalid-regexp": "error",
        "no-irregular-whitespace": "error",
        "no-iterator": "error",
        "no-labels": ["error", { allowLoop: false, allowSwitch: false }],
        "no-lone-blocks": "error",
        "no-loss-of-precision": "error",
        "no-misleading-character-class": "error",
        "no-multi-str": "error",
        "no-new": "error",
        "no-new-func": "error",
        "no-new-native-nonconstructor": "error",
        "no-new-wrappers": "error",
        "no-obj-calls": "error",
        "no-octal": "error",
        "no-octal-escape": "error",
        "no-proto": "error",
        "no-prototype-builtins": "error",
        "no-redeclare": ["error", { builtinGlobals: false }],
        "no-regex-spaces": "error",
        "no-restricted-globals": [
          "error",
          { message: "Use `globalThis` instead.", name: "global" },
          { message: "Use `globalThis` instead.", name: "self" }
        ],
        "no-restricted-properties": [
          "error",
          {
            message: "Use `Object.getPrototypeOf` or `Object.setPrototypeOf` instead.",
            property: "__proto__"
          },
          {
            message: "Use `Object.defineProperty` instead.",
            property: "__defineGetter__"
          },
          {
            message: "Use `Object.defineProperty` instead.",
            property: "__defineSetter__"
          },
          {
            message: "Use `Object.getOwnPropertyDescriptor` instead.",
            property: "__lookupGetter__"
          },
          {
            message: "Use `Object.getOwnPropertyDescriptor` instead.",
            property: "__lookupSetter__"
          }
        ],
        "no-restricted-syntax": [
          "error",
          "DebuggerStatement",
          "LabeledStatement",
          "WithStatement",
          "TSEnumDeclaration[const=true]",
          "TSExportAssignment"
        ],
        "no-self-assign": ["error", { props: true }],
        "no-self-compare": "error",
        "no-sequences": "error",
        "no-shadow-restricted-names": "error",
        "no-sparse-arrays": "error",
        "no-template-curly-in-string": "error",
        "no-this-before-super": "error",
        "no-throw-literal": "error",
        "no-undef": "error",
        "no-undef-init": "error",
        "no-unexpected-multiline": "error",
        "no-unmodified-loop-condition": "error",
        "no-unneeded-ternary": ["error", { defaultAssignment: false }],
        "no-unreachable": "error",
        "no-unreachable-loop": "error",
        "no-unsafe-finally": "error",
        "no-unsafe-negation": "error",
        "no-unused-expressions": [
          "error",
          {
            allowShortCircuit: true,
            allowTaggedTemplates: true,
            allowTernary: true
          }
        ],
        "no-unused-vars": [
          "error",
          {
            args: "none",
            caughtErrors: "none",
            ignoreRestSiblings: true,
            vars: "all"
          }
        ],
        "no-use-before-define": ["error", { classes: false, functions: false, variables: true }],
        "no-useless-backreference": "error",
        "no-useless-call": "error",
        "no-useless-catch": "error",
        "no-useless-computed-key": "error",
        "no-useless-constructor": "error",
        "no-useless-rename": "error",
        "no-useless-return": "error",
        "no-var": "error",
        "no-with": "error",
        "object-shorthand": [
          "error",
          "always",
          {
            avoidQuotes: true,
            ignoreConstructors: false
          }
        ],
        "one-var": ["error", { initialized: "never" }],
        "prefer-arrow-callback": [
          "error",
          {
            allowNamedFunctions: false,
            allowUnboundThis: true
          }
        ],
        "prefer-const": [
          "error",
          {
            destructuring: "all",
            ignoreReadBeforeAssign: true
          }
        ],
        "prefer-exponentiation-operator": "error",
        "prefer-promise-reject-errors": "error",
        "prefer-regex-literals": ["error", { disallowRedundantWrapping: true }],
        "prefer-rest-params": "error",
        "prefer-spread": "error",
        "prefer-template": "error",
        "sort-imports": [
          "error",
          {
            allowSeparatedGroups: false,
            ignoreCase: false,
            ignoreDeclarationSort: true,
            ignoreMemberSort: false,
            memberSyntaxSortOrder: ["none", "all", "multiple", "single"]
          }
        ],
        "symbol-description": "error",
        "unicode-bom": ["error", "never"],
        "unused-imports/no-unused-imports": isInEditor ? "off" : "error",
        "unused-imports/no-unused-vars": [
          "error",
          {
            args: "after-used",
            argsIgnorePattern: "^_",
            ignoreRestSiblings: true,
            vars: "all",
            varsIgnorePattern: "^_"
          }
        ],
        "use-isnan": ["error", { enforceForIndexOf: true, enforceForSwitchCase: true }],
        "valid-typeof": ["error", { requireStringLiterals: true }],
        "vars-on-top": "error",
        yoda: ["error", "never"],
        ...overrides
      }
    },
    {
      files: [`scripts/${GLOB_SRC}`, `cli.${GLOB_SRC_EXT}`],
      name: `${PLUGIN_PREFIX}/javascript/disables/cli`,
      rules: {
        "no-console": "off"
      }
    }
  ];
}

// src/configs/jsdoc.ts
init_cjs_shims();
async function jsdoc(options = {}) {
  const { stylistic: stylistic2 = true } = options;
  return [
    {
      name: `${PLUGIN_PREFIX}/jsdoc/rules`,
      plugins: {
        jsdoc: await interopDefault(import("eslint-plugin-jsdoc"))
      },
      rules: {
        "jsdoc/check-access": "warn",
        "jsdoc/check-param-names": "warn",
        "jsdoc/check-property-names": "warn",
        "jsdoc/check-types": "warn",
        "jsdoc/empty-tags": "warn",
        "jsdoc/implements-on-classes": "warn",
        "jsdoc/no-defaults": "warn",
        "jsdoc/no-multi-asterisks": "warn",
        "jsdoc/require-param-name": "warn",
        "jsdoc/require-property": "warn",
        "jsdoc/require-property-description": "warn",
        "jsdoc/require-property-name": "warn",
        "jsdoc/require-returns-check": "warn",
        "jsdoc/require-returns-description": "warn",
        "jsdoc/require-yields-check": "warn",
        ...stylistic2 ? {
          "jsdoc/check-alignment": "warn",
          "jsdoc/multiline-blocks": "warn"
        } : {}
      }
    }
  ];
}

// src/configs/jsonc.ts
init_cjs_shims();
async function jsonc(options = {}) {
  const { files = [GLOB_JSON, GLOB_JSON5, GLOB_JSONC], overrides = {}, stylistic: stylistic2 = true } = options;
  const { indent = 4 } = typeof stylistic2 === "boolean" ? {} : stylistic2;
  const [pluginJsonc, parserJsonc] = await Promise.all([
    interopDefault(import("eslint-plugin-jsonc")),
    interopDefault(import("jsonc-eslint-parser"))
  ]);
  return [
    {
      name: `${PLUGIN_PREFIX}/jsonc/setup`,
      plugins: {
        jsonc: pluginJsonc
      }
    },
    {
      files,
      languageOptions: {
        parser: parserJsonc
      },
      name: `${PLUGIN_PREFIX}/jsonc/rules`,
      rules: {
        "jsonc/no-bigint-literals": "error",
        "jsonc/no-binary-expression": "error",
        "jsonc/no-binary-numeric-literals": "error",
        "jsonc/no-dupe-keys": "error",
        "jsonc/no-escape-sequence-in-identifier": "error",
        "jsonc/no-floating-decimal": "error",
        "jsonc/no-hexadecimal-numeric-literals": "error",
        "jsonc/no-infinity": "error",
        "jsonc/no-multi-str": "error",
        "jsonc/no-nan": "error",
        "jsonc/no-number-props": "error",
        "jsonc/no-numeric-separators": "error",
        "jsonc/no-octal": "error",
        "jsonc/no-octal-escape": "error",
        "jsonc/no-octal-numeric-literals": "error",
        "jsonc/no-parenthesized": "error",
        "jsonc/no-plus-sign": "error",
        "jsonc/no-regexp-literals": "error",
        "jsonc/no-sparse-arrays": "error",
        "jsonc/no-template-literals": "error",
        "jsonc/no-undefined-value": "error",
        "jsonc/no-unicode-codepoint-escapes": "error",
        "jsonc/no-useless-escape": "error",
        "jsonc/space-unary-ops": "error",
        "jsonc/valid-json-number": "error",
        "jsonc/vue-custom-block/no-parsing-error": "error",
        ...stylistic2 ? {
          "jsonc/array-bracket-spacing": ["error", "never"],
          "jsonc/comma-dangle": ["error", "never"],
          "jsonc/comma-style": ["error", "last"],
          "jsonc/indent": ["error", indent],
          "jsonc/key-spacing": ["error", { afterColon: true, beforeColon: false }],
          "jsonc/object-curly-newline": ["error", { consistent: true, multiline: true }],
          "jsonc/object-curly-spacing": ["error", "always"],
          "jsonc/object-property-newline": ["error", { allowMultiplePropertiesPerLine: true }],
          "jsonc/quote-props": "error",
          "jsonc/quotes": "error"
        } : {},
        ...overrides
      }
    }
  ];
}

// src/configs/markdown.ts
init_cjs_shims();
var import_eslint_merge_processors = require("eslint-merge-processors");
async function markdown(options = {}) {
  const { componentExts = [], files = [GLOB_MARKDOWN], overrides = {} } = options;
  const markdown2 = await interopDefault(import("eslint-plugin-markdown"));
  return [
    {
      name: `${PLUGIN_PREFIX}/markdown/setup`,
      plugins: {
        markdown: markdown2
      }
    },
    {
      files,
      ignores: [GLOB_MARKDOWN_IN_MARKDOWN],
      name: `${PLUGIN_PREFIX}/markdown/processor`,
      // `eslint-plugin-markdown` only creates virtual files for code blocks,
      // but not the markdown file itself. We use `eslint-merge-processors` to
      // add a pass-through processor for the markdown file itself.
      processor: (0, import_eslint_merge_processors.mergeProcessors)([markdown2.processors.markdown, import_eslint_merge_processors.processorPassThrough])
    },
    {
      files,
      languageOptions: {
        parser: parserPlain
      },
      name: `${PLUGIN_PREFIX}/markdown/parser`
    },
    {
      files: [GLOB_MARKDOWN_CODE, ...componentExts.map((ext) => `${GLOB_MARKDOWN}/**/*.${ext}`)],
      languageOptions: {
        parserOptions: {
          ecmaFeatures: {
            impliedStrict: true
          }
        }
      },
      name: `${PLUGIN_PREFIX}/markdown/disables`,
      rules: {
        "import/newline-after-import": "off",
        "no-alert": "off",
        "no-console": "off",
        "no-labels": "off",
        "no-lone-blocks": "off",
        "no-restricted-syntax": "off",
        "no-undef": "off",
        "no-unused-expressions": "off",
        "no-unused-labels": "off",
        "no-unused-vars": "off",
        "node/prefer-global/process": "off",
        "style/comma-dangle": "off",
        "style/eol-last": "off",
        "ts/consistent-type-imports": "off",
        "ts/no-namespace": "off",
        "ts/no-redeclare": "off",
        "ts/no-require-imports": "off",
        "ts/no-unused-vars": "off",
        "ts/no-use-before-define": "off",
        "ts/no-var-requires": "off",
        "unicode-bom": "off",
        "unused-imports/no-unused-imports": "off",
        "unused-imports/no-unused-vars": "off",
        // Type aware rules
        ...{
          "ts/await-thenable": "off",
          "ts/dot-notation": "off",
          "ts/no-floating-promises": "off",
          "ts/no-for-in-array": "off",
          "ts/no-implied-eval": "off",
          "ts/no-misused-promises": "off",
          "ts/no-throw-literal": "off",
          "ts/no-unnecessary-type-assertion": "off",
          "ts/no-unsafe-argument": "off",
          "ts/no-unsafe-assignment": "off",
          "ts/no-unsafe-call": "off",
          "ts/no-unsafe-member-access": "off",
          "ts/no-unsafe-return": "off",
          "ts/restrict-plus-operands": "off",
          "ts/restrict-template-expressions": "off",
          "ts/unbound-method": "off"
        },
        ...overrides
      }
    }
  ];
}

// src/configs/node.ts
init_cjs_shims();
async function node() {
  return [
    {
      name: `${PLUGIN_PREFIX}/node/rules`,
      plugins: {
        node: import_eslint_plugin_n.default
      },
      rules: {
        "node/handle-callback-err": ["error", "^(err|error)$"],
        "node/no-deprecated-api": "error",
        "node/no-exports-assign": "error",
        "node/no-new-require": "error",
        "node/no-path-concat": "error",
        "node/prefer-global/buffer": ["error", "never"],
        "node/prefer-global/process": ["error", "never"],
        "node/process-exit-as-throw": "error"
      }
    }
  ];
}

// src/configs/perfectionist.ts
init_cjs_shims();
async function perfectionist() {
  return [
    {
      name: `${PLUGIN_PREFIX}/perfectionist/setup`,
      plugins: {
        perfectionist: import_eslint_plugin_perfectionist.default
      }
    }
  ];
}

// src/configs/react.ts
init_cjs_shims();
var import_local_pkg3 = require("local-pkg");
var ReactRefreshAllowConstantExportPackages = ["vite"];
var RemixPackages = ["@remix-run/node", "@remix-run/react", "@remix-run/serve", "@remix-run/dev"];
var NextJsPackages = ["next"];
async function react(options = {}) {
  const { files = [GLOB_TS, GLOB_TSX], overrides = {} } = options;
  await ensurePackages(["@eslint-react/eslint-plugin", "eslint-plugin-react-hooks", "eslint-plugin-react-refresh"]);
  const tsconfigPath = options?.tsconfigPath ? toArray(options.tsconfigPath) : void 0;
  const isTypeAware = !!tsconfigPath;
  const [pluginReact, pluginReactHooks, pluginReactRefresh, parserTs] = await Promise.all([
    interopDefault(import("@eslint-react/eslint-plugin")),
    interopDefault(import("eslint-plugin-react-hooks")),
    interopDefault(import("eslint-plugin-react-refresh")),
    interopDefault(import("@typescript-eslint/parser"))
  ]);
  const isAllowConstantExport = ReactRefreshAllowConstantExportPackages.some((i) => (0, import_local_pkg3.isPackageExists)(i));
  const isUsingRemix = RemixPackages.some((i) => (0, import_local_pkg3.isPackageExists)(i));
  const isUsingNext = NextJsPackages.some((i) => (0, import_local_pkg3.isPackageExists)(i));
  const plugins = pluginReact.configs.all.plugins;
  return [
    {
      name: `${PLUGIN_PREFIX}/react/setup`,
      plugins: {
        react: plugins["@eslint-react"],
        "react-dom": plugins["@eslint-react/dom"],
        "react-hooks": pluginReactHooks,
        "react-hooks-extra": plugins["@eslint-react/hooks-extra"],
        "react-naming-convention": plugins["@eslint-react/naming-convention"],
        "react-refresh": pluginReactRefresh
      }
    },
    {
      files,
      languageOptions: {
        parser: parserTs,
        parserOptions: {
          ecmaFeatures: {
            jsx: true
          },
          ...isTypeAware ? { project: tsconfigPath } : {}
        },
        sourceType: "module"
      },
      name: `${PLUGIN_PREFIX}/react/rules`,
      rules: {
        // recommended rules from @eslint-react/dom
        "react-dom/no-children-in-void-dom-elements": "warn",
        "react-dom/no-dangerously-set-innerhtml": "warn",
        "react-dom/no-dangerously-set-innerhtml-with-children": "error",
        "react-dom/no-find-dom-node": "error",
        "react-dom/no-missing-button-type": "warn",
        "react-dom/no-missing-iframe-sandbox": "warn",
        "react-dom/no-namespace": "error",
        "react-dom/no-render-return-value": "error",
        "react-dom/no-script-url": "warn",
        "react-dom/no-unsafe-iframe-sandbox": "warn",
        "react-dom/no-unsafe-target-blank": "warn",
        // recommended rules react-hooks
        "react-hooks/exhaustive-deps": "warn",
        "react-hooks/rules-of-hooks": "error",
        // react refresh
        "react-refresh/only-export-components": [
          "warn",
          {
            allowConstantExport: isAllowConstantExport,
            allowExportNames: [
              ...isUsingNext ? ["config", "generateStaticParams", "metadata", "generateMetadata", "viewport", "generateViewport"] : [],
              ...isUsingRemix ? ["meta", "links", "headers", "loader", "action"] : []
            ]
          }
        ],
        // recommended rules from @eslint-react
        "react/ensure-forward-ref-using-ref": "warn",
        "react/no-access-state-in-setstate": "error",
        "react/no-array-index-key": "warn",
        "react/no-children-count": "warn",
        "react/no-children-for-each": "warn",
        "react/no-children-map": "warn",
        "react/no-children-only": "warn",
        "react/no-children-prop": "warn",
        "react/no-children-to-array": "warn",
        "react/no-clone-element": "warn",
        "react/no-comment-textnodes": "warn",
        "react/no-component-will-mount": "error",
        "react/no-component-will-receive-props": "error",
        "react/no-component-will-update": "error",
        "react/no-create-ref": "error",
        "react/no-direct-mutation-state": "error",
        "react/no-duplicate-key": "error",
        "react/no-implicit-key": "error",
        "react/no-missing-key": "error",
        "react/no-nested-components": "warn",
        "react/no-redundant-should-component-update": "error",
        "react/no-set-state-in-component-did-mount": "warn",
        "react/no-set-state-in-component-did-update": "warn",
        "react/no-set-state-in-component-will-update": "warn",
        "react/no-string-refs": "error",
        "react/no-unsafe-component-will-mount": "warn",
        "react/no-unsafe-component-will-receive-props": "warn",
        "react/no-unsafe-component-will-update": "warn",
        "react/no-unstable-context-value": "error",
        "react/no-unstable-default-props": "error",
        "react/no-unused-class-component-members": "warn",
        "react/no-unused-state": "warn",
        "react/no-useless-fragment": "warn",
        "react/prefer-destructuring-assignment": "warn",
        "react/prefer-shorthand-boolean": "warn",
        "react/prefer-shorthand-fragment": "warn",
        ...isTypeAware ? {
          "react/no-leaked-conditional-rendering": "warn"
        } : {},
        // overrides
        ...overrides
      }
    }
  ];
}

// src/configs/solid.ts
init_cjs_shims();
async function solid(options = {}) {
  const { files = [GLOB_JSX, GLOB_TSX], overrides = {}, typescript: typescript2 = true } = options;
  await ensurePackages(["eslint-plugin-solid"]);
  const tsconfigPath = options?.tsconfigPath ? toArray(options.tsconfigPath) : void 0;
  const isTypeAware = !!tsconfigPath;
  const [pluginSolid, parserTs] = await Promise.all([
    interopDefault(import("eslint-plugin-solid")),
    interopDefault(import("@typescript-eslint/parser"))
  ]);
  return [
    {
      name: `${PLUGIN_PREFIX}/solid/setup`,
      plugins: {
        solid: pluginSolid
      }
    },
    {
      files,
      languageOptions: {
        parser: parserTs,
        parserOptions: {
          ecmaFeatures: {
            jsx: true
          },
          ...isTypeAware ? { project: tsconfigPath } : {}
        },
        sourceType: "module"
      },
      name: `${PLUGIN_PREFIX}/solid/rules`,
      rules: {
        // reactivity
        "solid/components-return-once": "warn",
        "solid/event-handlers": [
          "error",
          {
            // if true, don't warn on ambiguously named event handlers like `onclick` or `onchange`
            ignoreCase: false,
            // if true, warn when spreading event handlers onto JSX. Enable for Solid < v1.6.
            warnOnSpread: false
          }
        ],
        // these rules are mostly style suggestions
        "solid/imports": "error",
        // identifier usage is important
        "solid/jsx-no-duplicate-props": "error",
        "solid/jsx-no-script-url": "error",
        "solid/jsx-no-undef": "error",
        "solid/jsx-uses-vars": "error",
        "solid/no-destructure": "error",
        // security problems
        "solid/no-innerhtml": ["error", { allowStatic: true }],
        "solid/no-react-deps": "error",
        "solid/no-react-specific-props": "error",
        "solid/no-unknown-namespaces": "error",
        "solid/prefer-for": "error",
        "solid/reactivity": "warn",
        "solid/self-closing-comp": "error",
        "solid/style-prop": ["error", { styleProps: ["style", "css"] }],
        ...typescript2 ? {
          "solid/jsx-no-undef": ["error", { typescriptEnabled: true }],
          "solid/no-unknown-namespaces": "off"
        } : {},
        // overrides
        ...overrides
      }
    }
  ];
}

// src/configs/sort.ts
init_cjs_shims();
async function sortPackageJson() {
  return [
    {
      files: ["**/package.json"],
      name: `${PLUGIN_PREFIX}/sort/package-json`,
      rules: {
        "jsonc/sort-array-values": [
          "error",
          {
            order: { type: "asc" },
            pathPattern: "^files$"
          }
        ],
        "jsonc/sort-keys": [
          "error",
          {
            order: [
              "publisher",
              "name",
              "displayName",
              "type",
              "version",
              "private",
              "packageManager",
              "description",
              "author",
              "license",
              "funding",
              "homepage",
              "repository",
              "bugs",
              "keywords",
              "categories",
              "sideEffects",
              "exports",
              "main",
              "module",
              "unpkg",
              "jsdelivr",
              "types",
              "typesVersions",
              "bin",
              "icon",
              "files",
              "engines",
              "activationEvents",
              "contributes",
              "scripts",
              "peerDependencies",
              "peerDependenciesMeta",
              "dependencies",
              "optionalDependencies",
              "devDependencies",
              "pnpm",
              "overrides",
              "resolutions",
              "husky",
              "simple-git-hooks",
              "lint-staged",
              "eslintConfig"
            ],
            pathPattern: "^$"
          },
          {
            order: { type: "asc" },
            pathPattern: "^(?:dev|peer|optional|bundled)?[Dd]ependencies(Meta)?$"
          },
          {
            order: { type: "asc" },
            pathPattern: "^(?:resolutions|overrides|pnpm.overrides)$"
          },
          {
            order: ["types", "import", "require", "default"],
            pathPattern: "^exports.*$"
          },
          {
            order: [
              // client hooks only
              "pre-commit",
              "prepare-commit-msg",
              "commit-msg",
              "post-commit",
              "pre-rebase",
              "post-rewrite",
              "post-checkout",
              "post-merge",
              "pre-push",
              "pre-auto-gc"
            ],
            pathPattern: "^(?:gitHooks|husky|simple-git-hooks)$"
          }
        ]
      }
    }
  ];
}
function sortTsconfig() {
  return [
    {
      files: ["**/tsconfig.json", "**/tsconfig.*.json"],
      name: `${PLUGIN_PREFIX}/sort/tsconfig-json`,
      rules: {
        "jsonc/sort-keys": [
          "error",
          {
            order: ["extends", "compilerOptions", "references", "files", "include", "exclude"],
            pathPattern: "^$"
          },
          {
            order: [
              /* Projects */
              "incremental",
              "composite",
              "tsBuildInfoFile",
              "disableSourceOfProjectReferenceRedirect",
              "disableSolutionSearching",
              "disableReferencedProjectLoad",
              /* Language and Environment */
              "target",
              "jsx",
              "jsxFactory",
              "jsxFragmentFactory",
              "jsxImportSource",
              "lib",
              "moduleDetection",
              "noLib",
              "reactNamespace",
              "useDefineForClassFields",
              "emitDecoratorMetadata",
              "experimentalDecorators",
              /* Modules */
              "baseUrl",
              "rootDir",
              "rootDirs",
              "customConditions",
              "module",
              "moduleResolution",
              "moduleSuffixes",
              "noResolve",
              "paths",
              "resolveJsonModule",
              "resolvePackageJsonExports",
              "resolvePackageJsonImports",
              "typeRoots",
              "types",
              "allowArbitraryExtensions",
              "allowImportingTsExtensions",
              "allowUmdGlobalAccess",
              /* JavaScript Support */
              "allowJs",
              "checkJs",
              "maxNodeModuleJsDepth",
              /* Type Checking */
              "strict",
              "strictBindCallApply",
              "strictFunctionTypes",
              "strictNullChecks",
              "strictPropertyInitialization",
              "allowUnreachableCode",
              "allowUnusedLabels",
              "alwaysStrict",
              "exactOptionalPropertyTypes",
              "noFallthroughCasesInSwitch",
              "noImplicitAny",
              "noImplicitOverride",
              "noImplicitReturns",
              "noImplicitThis",
              "noPropertyAccessFromIndexSignature",
              "noUncheckedIndexedAccess",
              "noUnusedLocals",
              "noUnusedParameters",
              "useUnknownInCatchVariables",
              /* Emit */
              "declaration",
              "declarationDir",
              "declarationMap",
              "downlevelIteration",
              "emitBOM",
              "emitDeclarationOnly",
              "importHelpers",
              "importsNotUsedAsValues",
              "inlineSourceMap",
              "inlineSources",
              "mapRoot",
              "newLine",
              "noEmit",
              "noEmitHelpers",
              "noEmitOnError",
              "outDir",
              "outFile",
              "preserveConstEnums",
              "preserveValueImports",
              "removeComments",
              "sourceMap",
              "sourceRoot",
              "stripInternal",
              /* Interop Constraints */
              "allowSyntheticDefaultImports",
              "esModuleInterop",
              "forceConsistentCasingInFileNames",
              "isolatedModules",
              "preserveSymlinks",
              "verbatimModuleSyntax",
              /* Completeness */
              "skipDefaultLibCheck",
              "skipLibCheck"
            ],
            pathPattern: "^compilerOptions$"
          }
        ]
      }
    }
  ];
}

// src/configs/svelte.ts
init_cjs_shims();
async function svelte(options = {}) {
  const { files = [GLOB_SVELTE], overrides = {}, stylistic: stylistic2 = true } = options;
  const { indent = 4, quotes = "single" } = typeof stylistic2 === "boolean" ? {} : stylistic2;
  await ensurePackages(["eslint-plugin-svelte"]);
  const [pluginSvelte, parserSvelte] = await Promise.all([
    interopDefault(import("eslint-plugin-svelte")),
    interopDefault(import("svelte-eslint-parser"))
  ]);
  return [
    {
      name: `${PLUGIN_PREFIX}/svelte/setup`,
      plugins: {
        svelte: pluginSvelte
      }
    },
    {
      files,
      languageOptions: {
        parser: parserSvelte,
        parserOptions: {
          extraFileExtensions: [".svelte"],
          parser: options.typescript ? await interopDefault(import("@typescript-eslint/parser")) : null
        }
      },
      name: `${PLUGIN_PREFIX}/svelte/rules`,
      processor: pluginSvelte.processors[".svelte"],
      rules: {
        "import/no-mutable-exports": "off",
        "no-undef": "off",
        // incompatible with most recent (attribute-form) generic types RFC
        "no-unused-vars": [
          "error",
          {
            args: "none",
            caughtErrors: "none",
            ignoreRestSiblings: true,
            vars: "all",
            varsIgnorePattern: "^(\\$\\$Props$|\\$\\$Events$|\\$\\$Slots$)"
          }
        ],
        "svelte/comment-directive": "error",
        "svelte/no-at-debug-tags": "warn",
        "svelte/no-at-html-tags": "error",
        "svelte/no-dupe-else-if-blocks": "error",
        "svelte/no-dupe-style-properties": "error",
        "svelte/no-dupe-use-directives": "error",
        "svelte/no-dynamic-slot-name": "error",
        "svelte/no-export-load-in-svelte-module-in-kit-pages": "error",
        "svelte/no-inner-declarations": "error",
        "svelte/no-not-function-handler": "error",
        "svelte/no-object-in-text-mustaches": "error",
        "svelte/no-reactive-functions": "error",
        "svelte/no-reactive-literals": "error",
        "svelte/no-shorthand-style-property-overrides": "error",
        "svelte/no-unknown-style-directive-property": "error",
        "svelte/no-unused-svelte-ignore": "error",
        "svelte/no-useless-mustaches": "error",
        "svelte/require-store-callbacks-use-set-param": "error",
        "svelte/system": "error",
        "svelte/valid-compile": "error",
        "svelte/valid-each-key": "error",
        "unused-imports/no-unused-vars": [
          "error",
          {
            args: "after-used",
            argsIgnorePattern: "^_",
            vars: "all",
            varsIgnorePattern: "^(_|\\$\\$Props$|\\$\\$Events$|\\$\\$Slots$)"
          }
        ],
        ...stylistic2 ? {
          "style/indent": "off",
          // superseded by svelte/indent
          "style/no-trailing-spaces": "off",
          // superseded by svelte/no-trailing-spaces
          "svelte/derived-has-same-inputs-outputs": "error",
          "svelte/html-closing-bracket-spacing": "error",
          "svelte/html-quotes": ["error", { prefer: quotes }],
          "svelte/indent": ["error", { alignAttributesVertically: true, indent }],
          "svelte/mustache-spacing": "error",
          "svelte/no-spaces-around-equal-signs-in-attribute": "error",
          "svelte/no-trailing-spaces": "error",
          "svelte/spaced-html-comment": "error"
        } : {},
        ...overrides
      }
    }
  ];
}

// src/configs/test.ts
init_cjs_shims();
var _pluginTest;
async function test(options = {}) {
  const { files = GLOB_TESTS, isInEditor = false, overrides = {} } = options;
  const [pluginVitest, pluginNoOnlyTests] = await Promise.all([
    interopDefault(import("eslint-plugin-vitest")),
    // @ts-expect-error missing types
    interopDefault(import("eslint-plugin-no-only-tests"))
  ]);
  _pluginTest = _pluginTest || {
    ...pluginVitest,
    rules: {
      ...pluginVitest.rules,
      // extend `test/no-only-tests` rule
      ...pluginNoOnlyTests.rules
    }
  };
  return [
    {
      name: `${PLUGIN_PREFIX}/test/setup`,
      plugins: {
        test: _pluginTest
      }
    },
    {
      files,
      name: `${PLUGIN_PREFIX}/test/rules`,
      rules: {
        "node/prefer-global/process": "off",
        "test/consistent-test-it": ["error", { fn: "it", withinDescribe: "it" }],
        "test/no-identical-title": "error",
        "test/no-import-node-test": "error",
        "test/no-only-tests": isInEditor ? "off" : "error",
        "test/prefer-hooks-in-order": "error",
        "test/prefer-lowercase-title": "error",
        ...overrides
      }
    }
  ];
}

// src/configs/toml.ts
init_cjs_shims();
async function toml(options = {}) {
  const { files = [GLOB_TOML], overrides = {}, stylistic: stylistic2 = true } = options;
  const { indent = 4 } = typeof stylistic2 === "boolean" ? {} : stylistic2;
  const [pluginToml, parserToml] = await Promise.all([
    interopDefault(import("eslint-plugin-toml")),
    interopDefault(import("toml-eslint-parser"))
  ]);
  return [
    {
      name: `${PLUGIN_PREFIX}/toml/setup`,
      plugins: {
        toml: pluginToml
      }
    },
    {
      files,
      languageOptions: {
        parser: parserToml
      },
      name: `${PLUGIN_PREFIX}/toml/rules`,
      rules: {
        "style/spaced-comment": "off",
        "toml/comma-style": "error",
        "toml/keys-order": "error",
        "toml/no-space-dots": "error",
        "toml/no-unreadable-number-separator": "error",
        "toml/precision-of-fractional-seconds": "error",
        "toml/precision-of-integer": "error",
        "toml/tables-order": "error",
        "toml/vue-custom-block/no-parsing-error": "error",
        ...stylistic2 ? {
          "toml/array-bracket-newline": "error",
          "toml/array-bracket-spacing": "error",
          "toml/array-element-newline": "error",
          "toml/indent": ["error", indent === "tab" ? 4 : indent],
          "toml/inline-table-curly-spacing": "error",
          "toml/key-spacing": "error",
          "toml/padding-line-between-pairs": "error",
          "toml/padding-line-between-tables": "error",
          "toml/quoted-keys": "error",
          "toml/spaced-comment": "error",
          "toml/table-bracket-spacing": "error"
        } : {},
        ...overrides
      }
    }
  ];
}

// src/configs/typescript.ts
init_cjs_shims();
var import_node_process5 = __toESM(require("process"), 1);
async function typescript(options = {}) {
  const { componentExts = [], overrides = {}, parserOptions = {} } = options;
  const files = options.files ?? [GLOB_SRC, ...componentExts.map((ext) => `**/*.${ext}`)];
  const filesTypeAware = options.filesTypeAware ?? [GLOB_TS, GLOB_TSX];
  const tsconfigPath = options?.tsconfigPath ? toArray(options.tsconfigPath) : void 0;
  const isTypeAware = !!tsconfigPath;
  const typeAwareRules = {
    "dot-notation": "off",
    "no-implied-eval": "off",
    "no-throw-literal": "off",
    "ts/await-thenable": "error",
    "ts/dot-notation": ["error", { allowKeywords: true }],
    "ts/no-floating-promises": "error",
    "ts/no-for-in-array": "error",
    "ts/no-implied-eval": "error",
    "ts/no-misused-promises": "error",
    "ts/no-throw-literal": "error",
    "ts/no-unnecessary-type-assertion": "error",
    "ts/no-unsafe-argument": "error",
    "ts/no-unsafe-assignment": "error",
    "ts/no-unsafe-call": "error",
    "ts/no-unsafe-member-access": "error",
    "ts/no-unsafe-return": "error",
    "ts/restrict-plus-operands": "error",
    "ts/restrict-template-expressions": "error",
    "ts/unbound-method": "error"
  };
  const [pluginTs, parserTs] = await Promise.all([
    interopDefault(import("@typescript-eslint/eslint-plugin")),
    interopDefault(import("@typescript-eslint/parser"))
  ]);
  function makeParser(typeAware, files2, ignores2) {
    return {
      files: files2,
      ...ignores2 ? { ignores: ignores2 } : {},
      languageOptions: {
        parser: parserTs,
        parserOptions: {
          extraFileExtensions: componentExts.map((ext) => `.${ext}`),
          sourceType: "module",
          ...typeAware ? {
            project: tsconfigPath,
            tsconfigRootDir: import_node_process5.default.cwd()
          } : {},
          ...parserOptions
        }
      },
      name: `${PLUGIN_PREFIX}/typescript/${typeAware ? "type-aware-parser" : "parser"}`
    };
  }
  return [
    {
      // Install the plugins without globs, so they can be configured separately.
      name: `${PLUGIN_PREFIX}/typescript/setup`,
      plugins: {
        ts: pluginTs
      }
    },
    // assign type-aware parser for type-aware files and type-unaware parser for the rest
    ...isTypeAware ? [makeParser(true, filesTypeAware), makeParser(false, files, filesTypeAware)] : [makeParser(false, files)],
    {
      files,
      name: `${PLUGIN_PREFIX}/typescript/rules`,
      rules: {
        ...renameRules(pluginTs.configs["eslint-recommended"].overrides[0].rules, { "@typescript-eslint": "ts" }),
        ...renameRules(pluginTs.configs.strict.rules, {
          "@typescript-eslint": "ts"
        }),
        "no-dupe-class-members": "off",
        "no-loss-of-precision": "off",
        "no-redeclare": "off",
        "no-use-before-define": "off",
        "no-useless-constructor": "off",
        "ts/ban-ts-comment": ["error", { "ts-ignore": "allow-with-description" }],
        "ts/ban-types": ["error", { types: { Function: false } }],
        "ts/consistent-type-definitions": ["error", "interface"],
        "ts/consistent-type-imports": ["error", { disallowTypeAnnotations: false, prefer: "type-imports" }],
        "ts/method-signature-style": ["error", "property"],
        // https://www.totaltypescript.com/method-shorthand-syntax-considered-harmful
        "ts/no-dupe-class-members": "error",
        "ts/no-dynamic-delete": "off",
        "ts/no-explicit-any": "off",
        "ts/no-extraneous-class": "off",
        "ts/no-import-type-side-effects": "error",
        "ts/no-invalid-void-type": "off",
        "ts/no-loss-of-precision": "error",
        "ts/no-non-null-assertion": "off",
        "ts/no-redeclare": "error",
        "ts/no-require-imports": "error",
        "ts/no-unused-vars": "off",
        "ts/no-use-before-define": ["error", { classes: false, functions: false, variables: true }],
        "ts/no-useless-constructor": "off",
        "ts/prefer-ts-expect-error": "error",
        "ts/triple-slash-reference": "off",
        "ts/unified-signatures": "off",
        "ts/no-this-alias": "off",
        ...overrides
      }
    },
    ...isTypeAware ? [
      {
        files: filesTypeAware,
        name: `${PLUGIN_PREFIX}/typescript/rules-type-aware`,
        rules: {
          ...tsconfigPath ? typeAwareRules : {},
          ...overrides
        }
      }
    ] : [],
    {
      files: ["**/*.d.ts"],
      name: `${PLUGIN_PREFIX}/typescript/disables/dts`,
      rules: {
        "eslint-comments/no-unlimited-disable": "off",
        "import/no-duplicates": "off",
        "no-restricted-syntax": "off",
        "unused-imports/no-unused-vars": "off"
      }
    },
    {
      files: ["**/*.{test,spec}.ts?(x)"],
      name: `${PLUGIN_PREFIX}/typescript/disables/test`,
      rules: {
        "no-unused-expressions": "off"
      }
    },
    {
      files: ["**/*.js", "**/*.cjs"],
      name: `${PLUGIN_PREFIX}/typescript/disables/cjs`,
      rules: {
        "ts/no-require-imports": "off",
        "ts/no-var-requires": "off"
      }
    }
  ];
}

// src/configs/unicorn.ts
init_cjs_shims();
async function unicorn() {
  return [
    {
      name: `${PLUGIN_PREFIX}/unicorn/rules`,
      plugins: {
        unicorn: import_eslint_plugin_unicorn.default
      },
      rules: {
        // Pass error message when throwing errors
        "unicorn/error-message": "error",
        // Uppercase regex escapes
        "unicorn/escape-case": "error",
        // Array.isArray instead of instanceof
        "unicorn/no-instanceof-array": "error",
        // Ban `new Array` as `Array` constructor's params are ambiguous
        "unicorn/no-new-array": "error",
        // Prevent deprecated `new Buffer()`
        "unicorn/no-new-buffer": "error",
        // Lowercase number formatting for octal, hex, binary (0x1'error' instead of 0X1'error')
        "unicorn/number-literal-case": "error",
        // textContent instead of innerText
        "unicorn/prefer-dom-node-text-content": "error",
        // includes over indexOf when checking for existence
        "unicorn/prefer-includes": "error",
        // Prefer using the node: protocol
        "unicorn/prefer-node-protocol": "error",
        // Prefer using number properties like `Number.isNaN` rather than `isNaN`
        "unicorn/prefer-number-properties": "error",
        // String methods startsWith/endsWith instead of more complicated stuff
        "unicorn/prefer-string-starts-ends-with": "error",
        // Enforce throwing type error when throwing error while checking typeof
        "unicorn/prefer-type-error": "error",
        // Use new when throwing error
        "unicorn/throw-new-error": "error"
      }
    }
  ];
}

// src/configs/unocss.ts
init_cjs_shims();
async function unocss(options = {}) {
  const { attributify = true, strict = false } = options;
  await ensurePackages(["@unocss/eslint-plugin"]);
  const [pluginUnoCSS] = await Promise.all([interopDefault(Promise.resolve().then(() => (init_dist2(), dist_exports2)))]);
  return [
    {
      name: `${PLUGIN_PREFIX}/unocss`,
      plugins: {
        unocss: pluginUnoCSS
      },
      rules: {
        "unocss/order": "warn",
        ...attributify ? {
          "unocss/order-attributify": "warn"
        } : {},
        ...strict ? {
          "unocss/blocklist": "error"
        } : {}
      }
    }
  ];
}

// src/configs/vue.ts
init_cjs_shims();
var import_eslint_merge_processors2 = require("eslint-merge-processors");
async function vue(options = {}) {
  const { files = [GLOB_VUE], overrides = {}, stylistic: stylistic2 = true, vueVersion = 3 } = options;
  const sfcBlocks = options.sfcBlocks === true ? {} : options.sfcBlocks ?? {};
  const { indent = 4 } = typeof stylistic2 === "boolean" ? {} : stylistic2;
  const [pluginVue, parserVue, processorVueBlocks] = await Promise.all([
    // @ts-expect-error missing types
    interopDefault(import("eslint-plugin-vue")),
    interopDefault(import("vue-eslint-parser")),
    interopDefault(import("eslint-processor-vue-blocks"))
  ]);
  return [
    {
      // This allows Vue plugin to work with auto imports
      // https://github.com/vuejs/eslint-plugin-vue/pull/2422
      languageOptions: {
        globals: {
          computed: "readonly",
          defineEmits: "readonly",
          defineExpose: "readonly",
          defineProps: "readonly",
          onMounted: "readonly",
          onUnmounted: "readonly",
          reactive: "readonly",
          ref: "readonly",
          shallowReactive: "readonly",
          shallowRef: "readonly",
          toRef: "readonly",
          toRefs: "readonly",
          watch: "readonly",
          watchEffect: "readonly"
        }
      },
      name: `${PLUGIN_PREFIX}/vue/setup`,
      plugins: {
        vue: pluginVue
      }
    },
    {
      files,
      languageOptions: {
        parser: parserVue,
        parserOptions: {
          ecmaFeatures: {
            jsx: true
          },
          extraFileExtensions: [".vue"],
          parser: options.typescript ? await interopDefault(import("@typescript-eslint/parser")) : null,
          sourceType: "module"
        }
      },
      name: `${PLUGIN_PREFIX}/vue/rules`,
      processor: sfcBlocks === false ? pluginVue.processors[".vue"] : (0, import_eslint_merge_processors2.mergeProcessors)([
        pluginVue.processors[".vue"],
        processorVueBlocks({
          ...sfcBlocks,
          blocks: {
            styles: true,
            ...sfcBlocks.blocks
          }
        })
      ]),
      rules: {
        ...pluginVue.configs.base.rules,
        ...vueVersion === 2 ? {
          ...pluginVue.configs.essential.rules,
          ...pluginVue.configs["strongly-recommended"].rules,
          ...pluginVue.configs.recommended.rules
        } : {
          ...pluginVue.configs["vue3-essential"].rules,
          ...pluginVue.configs["vue3-strongly-recommended"].rules,
          ...pluginVue.configs["vue3-recommended"].rules
        },
        "node/prefer-global/process": "off",
        "vue/block-order": [
          "error",
          {
            order: ["template", "script", "style"]
          }
        ],
        "vue/component-name-in-template-casing": ["error", "PascalCase"],
        "vue/component-options-name-casing": ["error", "PascalCase"],
        // this is deprecated
        "vue/component-tags-order": "off",
        "vue/custom-event-name-casing": ["error", "camelCase"],
        "vue/define-macros-order": [
          "error",
          {
            order: ["defineOptions", "defineProps", "defineEmits", "defineSlots"]
          }
        ],
        "vue/dot-location": ["error", "property"],
        "vue/dot-notation": ["error", { allowKeywords: true }],
        "vue/eqeqeq": ["error", "smart"],
        "vue/html-indent": ["error", indent],
        "vue/html-quotes": ["error", "double"],
        "vue/max-attributes-per-line": "off",
        "vue/multi-word-component-names": "off",
        "vue/no-dupe-keys": "off",
        "vue/no-empty-pattern": "error",
        "vue/no-irregular-whitespace": "error",
        "vue/no-loss-of-precision": "error",
        "vue/no-restricted-syntax": ["error", "DebuggerStatement", "LabeledStatement", "WithStatement"],
        "vue/no-restricted-v-bind": ["error", "/^v-/"],
        "vue/no-setup-props-reactivity-loss": "off",
        "vue/no-sparse-arrays": "error",
        "vue/no-unused-refs": "error",
        "vue/no-useless-v-bind": "error",
        "vue/no-v-html": "off",
        "vue/object-shorthand": [
          "error",
          "always",
          {
            avoidQuotes: true,
            ignoreConstructors: false
          }
        ],
        "vue/prefer-separate-static-class": "error",
        "vue/prefer-template": "error",
        "vue/prop-name-casing": ["error", "camelCase"],
        "vue/require-default-prop": "off",
        "vue/require-prop-types": "off",
        "vue/space-infix-ops": "error",
        "vue/space-unary-ops": ["error", { nonwords: false, words: true }],
        ...stylistic2 ? {
          "vue/array-bracket-spacing": ["error", "never"],
          "vue/arrow-spacing": ["error", { after: true, before: true }],
          "vue/block-spacing": ["error", "always"],
          "vue/block-tag-newline": [
            "error",
            {
              multiline: "always",
              singleline: "always"
            }
          ],
          "vue/brace-style": ["error", "stroustrup", { allowSingleLine: true }],
          "vue/comma-dangle": ["off", "always-multiline"],
          "vue/comma-spacing": ["error", { after: true, before: false }],
          "vue/comma-style": ["error", "last"],
          "vue/html-comment-content-spacing": [
            "error",
            "always",
            {
              exceptions: ["-"]
            }
          ],
          "vue/key-spacing": ["error", { afterColon: true, beforeColon: false }],
          "vue/keyword-spacing": ["error", { after: true, before: true }],
          "vue/object-curly-newline": "off",
          "vue/object-curly-spacing": ["error", "always"],
          "vue/object-property-newline": ["error", { allowMultiplePropertiesPerLine: true }],
          "vue/operator-linebreak": ["error", "before"],
          "vue/padding-line-between-blocks": ["error", "always"],
          "vue/quote-props": ["error", "consistent-as-needed"],
          "vue/space-in-parens": ["error", "never"],
          "vue/template-curly-spacing": "error"
        } : {},
        ...overrides
      }
    }
  ];
}

// src/configs/yaml.ts
init_cjs_shims();
async function yaml(options = {}) {
  const { files = [GLOB_YAML], overrides = {}, stylistic: stylistic2 = true } = options;
  const { quotes = "single" } = typeof stylistic2 === "boolean" ? {} : stylistic2;
  const [pluginYaml, parserYaml] = await Promise.all([
    interopDefault(import("eslint-plugin-yml")),
    interopDefault(import("yaml-eslint-parser"))
  ]);
  return [
    {
      name: `${PLUGIN_PREFIX}/yaml/setup`,
      plugins: {
        yaml: pluginYaml
      }
    },
    {
      files,
      languageOptions: {
        parser: parserYaml
      },
      name: `${PLUGIN_PREFIX}/yaml/rules`,
      rules: {
        "style/spaced-comment": "off",
        "yaml/block-mapping": "error",
        "yaml/block-sequence": "error",
        "yaml/no-empty-key": "error",
        "yaml/no-empty-sequence-entry": "error",
        "yaml/no-irregular-whitespace": "error",
        "yaml/plain-scalar": "error",
        "yaml/vue-custom-block/no-parsing-error": "error",
        ...stylistic2 ? {
          "yaml/block-mapping-question-indicator-newline": "error",
          "yaml/block-sequence-hyphen-indicator-newline": "error",
          "yaml/flow-mapping-curly-newline": "error",
          "yaml/flow-mapping-curly-spacing": "error",
          "yaml/flow-sequence-bracket-newline": "error",
          "yaml/flow-sequence-bracket-spacing": "error",
          "yaml/indent": ["off", 4],
          "yaml/key-spacing": "error",
          "yaml/no-tab-indent": "error",
          "yaml/quotes": ["error", { avoidEscape: false, prefer: quotes }],
          "yaml/spaced-comment": "error"
        } : {},
        ...overrides
      }
    }
  ];
}

// src/configs/regexp.ts
init_cjs_shims();
var import_eslint_plugin_regexp = require("eslint-plugin-regexp");
async function regexp(options = {}) {
  const config = import_eslint_plugin_regexp.configs["flat/recommended"];
  const rules = {
    ...config.rules
  };
  if (options.level === "warn") {
    for (const key in rules)
      if (rules[key] === "error")
        rules[key] = "warn";
  }
  return [
    {
      ...config,
      name: `${PLUGIN_PREFIX}/regexp/rules`,
      rules: {
        ...rules,
        ...options.overrides
      }
    }
  ];
}

// src/factory.ts
var PLUGIN_PREFIX = "jiangweiye";
var flatConfigProps = [
  "name",
  "files",
  "ignores",
  "languageOptions",
  "linterOptions",
  "processor",
  "plugins",
  "rules",
  "settings"
];
var VuePackages = ["vue", "nuxt", "vitepress", "@slidev/cli"];
var defaultPluginRenaming = {
  "@eslint-react": "react",
  "@eslint-react/dom": "react-dom",
  "@eslint-react/hooks-extra": "react-hooks-extra",
  "@eslint-react/naming-convention": "react-naming-convention",
  "@stylistic": "style",
  "@typescript-eslint": "ts",
  "import-x": "import",
  n: "node",
  vitest: "test",
  yml: "yaml"
};
function eslint(options = {}, ...userConfigs) {
  const {
    astro: enableAstro = false,
    autoRenamePlugins = true,
    componentExts = [],
    gitignore: enableGitignore = true,
    isInEditor = !!((import_node_process6.default.env.VSCODE_PID || import_node_process6.default.env.VSCODE_CWD || import_node_process6.default.env.JETBRAINS_IDE || import_node_process6.default.env.VIM) && !import_node_process6.default.env.CI),
    react: enableReact = false,
    regexp: enableRegexp = true,
    solid: enableSolid = false,
    svelte: enableSvelte = false,
    typescript: enableTypeScript = (0, import_local_pkg4.isPackageExists)("typescript"),
    unocss: enableUnoCSS = false,
    vue: enableVue = VuePackages.some((i) => (0, import_local_pkg4.isPackageExists)(i))
  } = options;
  const stylisticOptions = options.stylistic === false ? false : typeof options.stylistic === "object" ? options.stylistic : {};
  if (stylisticOptions && !("jsx" in stylisticOptions))
    stylisticOptions.jsx = options.jsx ?? true;
  const configs2 = [];
  if (enableGitignore) {
    if (typeof enableGitignore !== "boolean")
      configs2.push(interopDefault(import("eslint-config-flat-gitignore")).then((r) => [r(enableGitignore)]));
    else if (import_node_fs6.default.existsSync(".gitignore"))
      configs2.push(interopDefault(import("eslint-config-flat-gitignore")).then((r) => [r()]));
  }
  configs2.push(
    ignores(),
    javascript({
      isInEditor,
      overrides: getOverrides(options, "javascript")
    }),
    comments(),
    node(),
    jsdoc({
      stylistic: stylisticOptions
    }),
    imports({
      stylistic: stylisticOptions
    }),
    unicorn(),
    command(),
    // Optional plugins (installed but not enabled by default)
    perfectionist()
  );
  if (enableVue)
    componentExts.push("vue");
  if (enableTypeScript) {
    configs2.push(
      typescript({
        ...resolveSubOptions(options, "typescript"),
        componentExts,
        overrides: getOverrides(options, "typescript")
      })
    );
  }
  if (stylisticOptions) {
    configs2.push(
      stylistic({
        ...stylisticOptions,
        lessOpinionated: options.lessOpinionated,
        overrides: getOverrides(options, "stylistic")
      })
    );
  }
  if (enableRegexp)
    configs2.push(regexp(typeof enableRegexp === "boolean" ? {} : enableRegexp));
  if (options.test ?? true) {
    configs2.push(
      test({
        isInEditor,
        overrides: getOverrides(options, "test")
      })
    );
  }
  if (enableVue) {
    configs2.push(
      vue({
        ...resolveSubOptions(options, "vue"),
        overrides: getOverrides(options, "vue"),
        stylistic: stylisticOptions,
        typescript: !!enableTypeScript
      })
    );
  }
  if (enableReact) {
    configs2.push(
      react({
        overrides: getOverrides(options, "react"),
        tsconfigPath: getOverrides(options, "typescript").tsconfigPath
      })
    );
  }
  if (enableSolid) {
    configs2.push(
      solid({
        overrides: getOverrides(options, "solid"),
        tsconfigPath: getOverrides(options, "typescript").tsconfigPath,
        typescript: !!enableTypeScript
      })
    );
  }
  if (enableSvelte) {
    configs2.push(
      svelte({
        overrides: getOverrides(options, "svelte"),
        stylistic: stylisticOptions,
        typescript: !!enableTypeScript
      })
    );
  }
  if (enableUnoCSS) {
    configs2.push(
      unocss({
        ...resolveSubOptions(options, "unocss"),
        overrides: getOverrides(options, "unocss")
      })
    );
  }
  if (enableAstro) {
    configs2.push(
      astro({
        overrides: getOverrides(options, "astro"),
        stylistic: stylisticOptions
      })
    );
  }
  if (options.jsonc ?? true) {
    configs2.push(
      jsonc({
        overrides: getOverrides(options, "jsonc"),
        stylistic: stylisticOptions
      }),
      sortPackageJson(),
      sortTsconfig()
    );
  }
  if (options.yaml ?? true) {
    configs2.push(
      yaml({
        overrides: getOverrides(options, "yaml"),
        stylistic: stylisticOptions
      })
    );
  }
  if (options.toml ?? true) {
    configs2.push(
      toml({
        overrides: getOverrides(options, "toml"),
        stylistic: stylisticOptions
      })
    );
  }
  if (options.markdown ?? true) {
    configs2.push(
      markdown({
        componentExts,
        overrides: getOverrides(options, "markdown")
      })
    );
  }
  if (options.formatters)
    configs2.push(formatters(options.formatters, typeof stylisticOptions === "boolean" ? {} : stylisticOptions));
  const fusedConfig = flatConfigProps.reduce((acc, key) => {
    if (key in options)
      acc[key] = options[key];
    return acc;
  }, {});
  if (Object.keys(fusedConfig).length)
    configs2.push([fusedConfig]);
  let composer = new import_eslint_flat_config_utils.FlatConfigComposer();
  composer = composer.append(...configs2, ...userConfigs);
  if (autoRenamePlugins)
    composer = composer.renamePlugins(defaultPluginRenaming);
  return composer;
}
function resolveSubOptions(options, key) {
  return typeof options[key] === "boolean" ? {} : options[key] || {};
}
function getOverrides(options, key) {
  const sub = resolveSubOptions(options, key);
  return {
    ...options.overrides?.[key],
    ..."overrides" in sub ? sub.overrides : {}
  };
}

// src/types.ts
init_cjs_shims();

// src/index.ts
var src_default = eslint;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  GLOB_ALL_SRC,
  GLOB_ASTRO,
  GLOB_CSS,
  GLOB_EXCLUDE,
  GLOB_GRAPHQL,
  GLOB_HTML,
  GLOB_JS,
  GLOB_JSON,
  GLOB_JSON5,
  GLOB_JSONC,
  GLOB_JSX,
  GLOB_LESS,
  GLOB_MARKDOWN,
  GLOB_MARKDOWN_CODE,
  GLOB_MARKDOWN_IN_MARKDOWN,
  GLOB_POSTCSS,
  GLOB_SCSS,
  GLOB_SRC,
  GLOB_SRC_EXT,
  GLOB_STYLE,
  GLOB_SVELTE,
  GLOB_TESTS,
  GLOB_TOML,
  GLOB_TS,
  GLOB_TSX,
  GLOB_VUE,
  GLOB_XML,
  GLOB_YAML,
  PLUGIN_PREFIX,
  StylisticConfigDefaults,
  astro,
  combine,
  command,
  comments,
  defaultPluginRenaming,
  ensurePackages,
  eslint,
  formatters,
  getOverrides,
  ignores,
  imports,
  interopDefault,
  javascript,
  jsdoc,
  jsonc,
  markdown,
  node,
  parserPlain,
  perfectionist,
  react,
  regexp,
  renamePluginInConfigs,
  renameRules,
  resolveSubOptions,
  solid,
  sortPackageJson,
  sortTsconfig,
  stylistic,
  svelte,
  test,
  toArray,
  toml,
  typescript,
  unicorn,
  unocss,
  vue,
  yaml
});
