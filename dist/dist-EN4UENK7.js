import {
  __commonJS,
  __require,
  __toESM,
  init_esm_shims
} from "./chunk-343WRYT2.js";

// node_modules/.pnpm/string-argv@0.3.2/node_modules/string-argv/commonjs/index.js
var require_commonjs = __commonJS({
  "node_modules/.pnpm/string-argv@0.3.2/node_modules/string-argv/commonjs/index.js"(exports) {
    "use strict";
    init_esm_shims();
    exports.__esModule = true;
    exports.parseArgsStringToArgv = void 0;
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
    exports["default"] = parseArgsStringToArgv;
    exports.parseArgsStringToArgv = parseArgsStringToArgv;
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
  "node_modules/.pnpm/type-detect@4.0.8/node_modules/type-detect/type-detect.js"(exports, module) {
    "use strict";
    init_esm_shims();
    (function(global2, factory) {
      typeof exports === "object" && typeof module !== "undefined" ? module.exports = factory() : typeof define === "function" && define.amd ? define(factory) : global2.typeDetect = factory();
    })(exports, function() {
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
  "node_modules/.pnpm/@jsdevtools+ez-spawn@3.0.4/node_modules/@jsdevtools/ez-spawn/lib/normalize-args.js"(exports, module) {
    "use strict";
    init_esm_shims();
    var { parseArgsStringToArgv } = require_commonjs();
    var detectType = require_type_detect();
    module.exports = normalizeArgs;
    function normalizeArgs(params) {
      let command, args, options, callback, error;
      try {
        ({ command, args, options, callback } = shiftArgs(params));
        let commandArgs = [];
        if (typeof command === "string" && args === void 0) {
          command = splitArgString(command);
        }
        if (Array.isArray(command)) {
          commandArgs = command.slice(1);
          command = command[0];
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
        validateArgs(command, args, options, callback);
      } catch (err) {
        error = err;
        command = String(command || "");
        args = (Array.isArray(args) ? args : []).map((arg) => String(arg || ""));
      }
      return { command, args, options, callback, error };
    }
    function shiftArgs(params) {
      params = Array.prototype.slice.call(params);
      let command, args, options, callback;
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
      command = params.shift();
      if (params.length === 0) {
        args = void 0;
      } else if (params.length === 1 && Array.isArray(params[0])) {
        args = params[0];
      } else if (params.length === 1 && params[0] === "") {
        args = [];
      } else {
        args = params;
      }
      return { command, args, options, callback };
    }
    function validateArgs(command, args, options, callback) {
      if (command === void 0 || command === null) {
        throw new Error("The command to execute is missing.");
      }
      if (typeof command !== "string") {
        throw new Error("The command to execute should be a string, not " + friendlyType(command));
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
  "node_modules/.pnpm/@jsdevtools+ez-spawn@3.0.4/node_modules/@jsdevtools/ez-spawn/lib/process.js"(exports, module) {
    "use strict";
    init_esm_shims();
    module.exports = class Process {
      /**
       * @param {object} props - Initial property values
       */
      constructor({ command, args, pid, stdout, stderr, output, status, signal, options }) {
        options = options || {};
        stdout = stdout || (options.encoding === "buffer" ? Buffer.from([]) : "");
        stderr = stderr || (options.encoding === "buffer" ? Buffer.from([]) : "");
        output = output || [options.input || null, stdout, stderr];
        this.command = command || "";
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
  "node_modules/.pnpm/@jsdevtools+ez-spawn@3.0.4/node_modules/@jsdevtools/ez-spawn/lib/process-error.js"(exports, module) {
    "use strict";
    init_esm_shims();
    module.exports = class ProcessError extends Error {
      constructor(process4) {
        let message = `${process4.toString()} exited with a status of ${process4.status}.`;
        if (process4.stderr.length > 0) {
          message += "\n\n" + process4.stderr.toString().trim();
        }
        super(message);
        Object.assign(this, process4);
        this.name = ProcessError.name;
      }
    };
  }
});

// node_modules/.pnpm/@jsdevtools+ez-spawn@3.0.4/node_modules/@jsdevtools/ez-spawn/lib/normalize-result.js
var require_normalize_result = __commonJS({
  "node_modules/.pnpm/@jsdevtools+ez-spawn@3.0.4/node_modules/@jsdevtools/ez-spawn/lib/normalize-result.js"(exports, module) {
    "use strict";
    init_esm_shims();
    var Process = require_process();
    var ProcessError = require_process_error();
    module.exports = normalizeResult;
    function normalizeResult({ command, args, pid, stdout, stderr, output, status, signal, options, error }) {
      let process4 = new Process({ command, args, pid, stdout, stderr, output, status, signal, options });
      if (error) {
        if (process4.status === void 0) {
          process4.status = null;
        }
        throw Object.assign(error, process4);
      } else if (process4.status) {
        throw new ProcessError(process4);
      } else {
        return process4;
      }
    }
  }
});

// node_modules/.pnpm/isexe@2.0.0/node_modules/isexe/windows.js
var require_windows = __commonJS({
  "node_modules/.pnpm/isexe@2.0.0/node_modules/isexe/windows.js"(exports, module) {
    "use strict";
    init_esm_shims();
    module.exports = isexe;
    isexe.sync = sync;
    var fs3 = __require("fs");
    function checkPathExt(path4, options) {
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
        if (p && path4.substr(-p.length).toLowerCase() === p) {
          return true;
        }
      }
      return false;
    }
    function checkStat(stat, path4, options) {
      if (!stat.isSymbolicLink() && !stat.isFile()) {
        return false;
      }
      return checkPathExt(path4, options);
    }
    function isexe(path4, options, cb) {
      fs3.stat(path4, function(er, stat) {
        cb(er, er ? false : checkStat(stat, path4, options));
      });
    }
    function sync(path4, options) {
      return checkStat(fs3.statSync(path4), path4, options);
    }
  }
});

// node_modules/.pnpm/isexe@2.0.0/node_modules/isexe/mode.js
var require_mode = __commonJS({
  "node_modules/.pnpm/isexe@2.0.0/node_modules/isexe/mode.js"(exports, module) {
    "use strict";
    init_esm_shims();
    module.exports = isexe;
    isexe.sync = sync;
    var fs3 = __require("fs");
    function isexe(path4, options, cb) {
      fs3.stat(path4, function(er, stat) {
        cb(er, er ? false : checkStat(stat, options));
      });
    }
    function sync(path4, options) {
      return checkStat(fs3.statSync(path4), options);
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
  "node_modules/.pnpm/isexe@2.0.0/node_modules/isexe/index.js"(exports, module) {
    "use strict";
    init_esm_shims();
    var fs3 = __require("fs");
    var core;
    if (process.platform === "win32" || global.TESTING_WINDOWS) {
      core = require_windows();
    } else {
      core = require_mode();
    }
    module.exports = isexe;
    isexe.sync = sync;
    function isexe(path4, options, cb) {
      if (typeof options === "function") {
        cb = options;
        options = {};
      }
      if (!cb) {
        if (typeof Promise !== "function") {
          throw new TypeError("callback not provided");
        }
        return new Promise(function(resolve2, reject) {
          isexe(path4, options || {}, function(er, is) {
            if (er) {
              reject(er);
            } else {
              resolve2(is);
            }
          });
        });
      }
      core(path4, options || {}, function(er, is) {
        if (er) {
          if (er.code === "EACCES" || options && options.ignoreErrors) {
            er = null;
            is = false;
          }
        }
        cb(er, is);
      });
    }
    function sync(path4, options) {
      try {
        return core.sync(path4, options || {});
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
  "node_modules/.pnpm/which@2.0.2/node_modules/which/which.js"(exports, module) {
    "use strict";
    init_esm_shims();
    var isWindows = process.platform === "win32" || process.env.OSTYPE === "cygwin" || process.env.OSTYPE === "msys";
    var path4 = __require("path");
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
        const pCmd = path4.join(pathPart, cmd);
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
        const pCmd = path4.join(pathPart, cmd);
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
    module.exports = which;
    which.sync = whichSync;
  }
});

// node_modules/.pnpm/path-key@3.1.1/node_modules/path-key/index.js
var require_path_key = __commonJS({
  "node_modules/.pnpm/path-key@3.1.1/node_modules/path-key/index.js"(exports, module) {
    "use strict";
    init_esm_shims();
    var pathKey = (options = {}) => {
      const environment = options.env || process.env;
      const platform = options.platform || process.platform;
      if (platform !== "win32") {
        return "PATH";
      }
      return Object.keys(environment).reverse().find((key) => key.toUpperCase() === "PATH") || "Path";
    };
    module.exports = pathKey;
    module.exports.default = pathKey;
  }
});

// node_modules/.pnpm/cross-spawn@7.0.3/node_modules/cross-spawn/lib/util/resolveCommand.js
var require_resolveCommand = __commonJS({
  "node_modules/.pnpm/cross-spawn@7.0.3/node_modules/cross-spawn/lib/util/resolveCommand.js"(exports, module) {
    "use strict";
    init_esm_shims();
    var path4 = __require("path");
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
          pathExt: withoutPathExt ? path4.delimiter : void 0
        });
      } catch (e) {
      } finally {
        if (shouldSwitchCwd) {
          process.chdir(cwd);
        }
      }
      if (resolved) {
        resolved = path4.resolve(hasCustomCwd ? parsed.options.cwd : "", resolved);
      }
      return resolved;
    }
    function resolveCommand(parsed) {
      return resolveCommandAttempt(parsed) || resolveCommandAttempt(parsed, true);
    }
    module.exports = resolveCommand;
  }
});

// node_modules/.pnpm/cross-spawn@7.0.3/node_modules/cross-spawn/lib/util/escape.js
var require_escape = __commonJS({
  "node_modules/.pnpm/cross-spawn@7.0.3/node_modules/cross-spawn/lib/util/escape.js"(exports, module) {
    "use strict";
    init_esm_shims();
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
    module.exports.command = escapeCommand;
    module.exports.argument = escapeArgument;
  }
});

// node_modules/.pnpm/shebang-regex@3.0.0/node_modules/shebang-regex/index.js
var require_shebang_regex = __commonJS({
  "node_modules/.pnpm/shebang-regex@3.0.0/node_modules/shebang-regex/index.js"(exports, module) {
    "use strict";
    init_esm_shims();
    module.exports = /^#!(.*)/;
  }
});

// node_modules/.pnpm/shebang-command@2.0.0/node_modules/shebang-command/index.js
var require_shebang_command = __commonJS({
  "node_modules/.pnpm/shebang-command@2.0.0/node_modules/shebang-command/index.js"(exports, module) {
    "use strict";
    init_esm_shims();
    var shebangRegex = require_shebang_regex();
    module.exports = (string = "") => {
      const match = string.match(shebangRegex);
      if (!match) {
        return null;
      }
      const [path4, argument] = match[0].replace(/#! ?/, "").split(" ");
      const binary = path4.split("/").pop();
      if (binary === "env") {
        return argument;
      }
      return argument ? `${binary} ${argument}` : binary;
    };
  }
});

// node_modules/.pnpm/cross-spawn@7.0.3/node_modules/cross-spawn/lib/util/readShebang.js
var require_readShebang = __commonJS({
  "node_modules/.pnpm/cross-spawn@7.0.3/node_modules/cross-spawn/lib/util/readShebang.js"(exports, module) {
    "use strict";
    init_esm_shims();
    var fs3 = __require("fs");
    var shebangCommand = require_shebang_command();
    function readShebang(command) {
      const size = 150;
      const buffer = Buffer.alloc(size);
      let fd;
      try {
        fd = fs3.openSync(command, "r");
        fs3.readSync(fd, buffer, 0, size, 0);
        fs3.closeSync(fd);
      } catch (e) {
      }
      return shebangCommand(buffer.toString());
    }
    module.exports = readShebang;
  }
});

// node_modules/.pnpm/cross-spawn@7.0.3/node_modules/cross-spawn/lib/parse.js
var require_parse = __commonJS({
  "node_modules/.pnpm/cross-spawn@7.0.3/node_modules/cross-spawn/lib/parse.js"(exports, module) {
    "use strict";
    init_esm_shims();
    var path4 = __require("path");
    var resolveCommand = require_resolveCommand();
    var escape = require_escape();
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
        parsed.command = path4.normalize(parsed.command);
        parsed.command = escape.command(parsed.command);
        parsed.args = parsed.args.map((arg) => escape.argument(arg, needsDoubleEscapeMetaChars));
        const shellCommand = [parsed.command].concat(parsed.args).join(" ");
        parsed.args = ["/d", "/s", "/c", `"${shellCommand}"`];
        parsed.command = process.env.comspec || "cmd.exe";
        parsed.options.windowsVerbatimArguments = true;
      }
      return parsed;
    }
    function parse(command, args, options) {
      if (args && !Array.isArray(args)) {
        options = args;
        args = null;
      }
      args = args ? args.slice(0) : [];
      options = Object.assign({}, options);
      const parsed = {
        command,
        args,
        options,
        file: void 0,
        original: {
          command,
          args
        }
      };
      return options.shell ? parsed : parseNonShell(parsed);
    }
    module.exports = parse;
  }
});

// node_modules/.pnpm/cross-spawn@7.0.3/node_modules/cross-spawn/lib/enoent.js
var require_enoent = __commonJS({
  "node_modules/.pnpm/cross-spawn@7.0.3/node_modules/cross-spawn/lib/enoent.js"(exports, module) {
    "use strict";
    init_esm_shims();
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
    module.exports = {
      hookChildProcess,
      verifyENOENT,
      verifyENOENTSync,
      notFoundError
    };
  }
});

// node_modules/.pnpm/cross-spawn@7.0.3/node_modules/cross-spawn/index.js
var require_cross_spawn = __commonJS({
  "node_modules/.pnpm/cross-spawn@7.0.3/node_modules/cross-spawn/index.js"(exports, module) {
    "use strict";
    init_esm_shims();
    var cp = __require("child_process");
    var parse = require_parse();
    var enoent = require_enoent();
    function spawn(command, args, options) {
      const parsed = parse(command, args, options);
      const spawned = cp.spawn(parsed.command, parsed.args, parsed.options);
      enoent.hookChildProcess(spawned, parsed);
      return spawned;
    }
    function spawnSync(command, args, options) {
      const parsed = parse(command, args, options);
      const result = cp.spawnSync(parsed.command, parsed.args, parsed.options);
      result.error = result.error || enoent.verifyENOENTSync(result.status, parsed);
      return result;
    }
    module.exports = spawn;
    module.exports.spawn = spawn;
    module.exports.sync = spawnSync;
    module.exports._parse = parse;
    module.exports._enoent = enoent;
  }
});

// node_modules/.pnpm/@jsdevtools+ez-spawn@3.0.4/node_modules/@jsdevtools/ez-spawn/lib/sync.js
var require_sync = __commonJS({
  "node_modules/.pnpm/@jsdevtools+ez-spawn@3.0.4/node_modules/@jsdevtools/ez-spawn/lib/sync.js"(exports, module) {
    "use strict";
    init_esm_shims();
    var normalizeArgs = require_normalize_args();
    var normalizeResult = require_normalize_result();
    var spawnSync = require_cross_spawn().sync;
    module.exports = sync;
    function sync() {
      let { command, args, options, error } = normalizeArgs(arguments);
      if (error) {
        normalizeResult({ command, args, options, error });
      } else {
        let result;
        try {
          result = spawnSync(command, args, options);
        } catch (error2) {
          normalizeResult({ error: error2, command, args, options });
        }
        return normalizeResult(Object.assign({}, result, { command, args, options }));
      }
    }
  }
});

// node_modules/.pnpm/call-me-maybe@1.0.2/node_modules/call-me-maybe/src/next.js
var require_next = __commonJS({
  "node_modules/.pnpm/call-me-maybe@1.0.2/node_modules/call-me-maybe/src/next.js"(exports, module) {
    "use strict";
    init_esm_shims();
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
    module.exports = makeNext();
  }
});

// node_modules/.pnpm/call-me-maybe@1.0.2/node_modules/call-me-maybe/src/maybe.js
var require_maybe = __commonJS({
  "node_modules/.pnpm/call-me-maybe@1.0.2/node_modules/call-me-maybe/src/maybe.js"(exports, module) {
    "use strict";
    init_esm_shims();
    var next = require_next();
    module.exports = function maybe(cb, promise) {
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
  "node_modules/.pnpm/@jsdevtools+ez-spawn@3.0.4/node_modules/@jsdevtools/ez-spawn/lib/async.js"(exports, module) {
    "use strict";
    init_esm_shims();
    var normalizeArgs = require_normalize_args();
    var normalizeResult = require_normalize_result();
    var maybe = require_maybe();
    var spawn = require_cross_spawn();
    module.exports = async;
    function async() {
      let { command, args, options, callback, error } = normalizeArgs(arguments);
      return maybe(callback, new Promise((resolve2, reject) => {
        if (error) {
          normalizeResult({ command, args, options, error });
        } else {
          let spawnedProcess;
          try {
            spawnedProcess = spawn(command, args, options);
          } catch (error2) {
            normalizeResult({ error: error2, command, args, options });
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
              normalizeResult({ error: error2, command, args, options, pid, stdout, stderr });
            } catch (error3) {
              reject(error3);
            }
          });
          spawnedProcess.on("exit", (status, signal) => {
            try {
              resolve2(normalizeResult({ command, args, options, pid, stdout, stderr, status, signal }));
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
  "node_modules/.pnpm/@jsdevtools+ez-spawn@3.0.4/node_modules/@jsdevtools/ez-spawn/lib/index.js"(exports, module) {
    "use strict";
    init_esm_shims();
    module.exports.sync = require_sync();
    module.exports.async = require_async();
  }
});

// node_modules/.pnpm/@jiangweiye+install-pkg@0.0.0/node_modules/@jiangweiye/install-pkg/dist/index.js
init_esm_shims();
var import_ez_spawn = __toESM(require_lib(), 1);
import fs2 from "node:fs";
import path3 from "node:path";
import process2 from "node:process";
import path2 from "node:path";
import process3 from "node:process";
import path from "node:path";
import fs, { promises as fsPromises } from "node:fs";
import { fileURLToPath } from "node:url";
import { fileURLToPath as fileURLToPath2 } from "node:url";
import { existsSync } from "node:fs";
import process32 from "node:process";
import { resolve } from "node:path";
var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
var Node = class Node2 {
  static {
    __name(this, "Node");
  }
  value;
  next;
  constructor(value) {
    this.value = value;
  }
};
var Queue = class {
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
    const node = new Node(value);
    if (this.#head) {
      this.#tail.next = node;
      this.#tail = node;
    } else {
      this.#head = node;
      this.#tail = node;
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
__name(pLimit, "pLimit");
var EndError = class EndError2 extends Error {
  static {
    __name(this, "EndError");
  }
  constructor(value) {
    super();
    this.value = value;
  }
};
var testElement = /* @__PURE__ */ __name(async (element, tester) => tester(await element), "testElement");
var finder = /* @__PURE__ */ __name(async (element) => {
  const values = await Promise.all(element);
  if (values[1] === true) {
    throw new EndError(values[0]);
  }
  return false;
}, "finder");
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
__name(pLocate, "pLocate");
var typeMappings = {
  directory: "isDirectory",
  file: "isFile"
};
function checkType(type) {
  if (Object.hasOwnProperty.call(typeMappings, type)) {
    return;
  }
  throw new Error(`Invalid type specified: ${type}`);
}
__name(checkType, "checkType");
var matchType = /* @__PURE__ */ __name((type, stat) => stat[typeMappings[type]](), "matchType");
var toPath = /* @__PURE__ */ __name((urlOrPath) => urlOrPath instanceof URL ? fileURLToPath(urlOrPath) : urlOrPath, "toPath");
async function locatePath(paths, { cwd = process3.cwd(), type = "file", allowSymlinks = true, concurrency, preserveOrder } = {}) {
  checkType(type);
  cwd = toPath(cwd);
  const statFunction = allowSymlinks ? fsPromises.stat : fsPromises.lstat;
  return pLocate(paths, async (path_) => {
    try {
      const stat = await statFunction(path.resolve(cwd, path_));
      return matchType(type, stat);
    } catch {
      return false;
    }
  }, {
    concurrency,
    preserveOrder
  });
}
__name(locatePath, "locatePath");
function toPath2(urlOrPath) {
  return urlOrPath instanceof URL ? fileURLToPath2(urlOrPath) : urlOrPath;
}
__name(toPath2, "toPath");
var findUpStop = Symbol("findUpStop");
async function findUpMultiple(name, options = {}) {
  let directory = path2.resolve(toPath2(options.cwd) ?? "");
  const { root } = path2.parse(directory);
  const stopAt = path2.resolve(directory, toPath2(options.stopAt ?? root));
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
      matches.push(path2.resolve(directory, foundPath));
    }
    if (directory === stopAt || matches.length >= limit) {
      break;
    }
    directory = path2.dirname(directory);
  }
  return matches;
}
__name(findUpMultiple, "findUpMultiple");
async function findUp(name, options = {}) {
  const matches = await findUpMultiple(name, {
    ...options,
    limit: 1
  });
  return matches[0];
}
__name(findUp, "findUp");
var AGENTS = [
  "pnpm",
  "yarn",
  "npm",
  "pnpm@6",
  "yarn@berry",
  "bun"
];
var LOCKS = {
  "bun.lockb": "bun",
  "pnpm-lock.yaml": "pnpm",
  "yarn.lock": "yarn",
  "package-lock.json": "npm",
  "npm-shrinkwrap.json": "npm"
};
async function detectPackageManager(cwd = process2.cwd()) {
  let agent = null;
  const lockPath = await findUp(Object.keys(LOCKS), {
    cwd
  });
  let packageJsonPath;
  if (lockPath)
    packageJsonPath = path3.resolve(lockPath, "../package.json");
  else
    packageJsonPath = await findUp("package.json", {
      cwd
    });
  if (packageJsonPath && fs2.existsSync(packageJsonPath)) {
    try {
      const pkg = JSON.parse(fs2.readFileSync(packageJsonPath, "utf8"));
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
    agent = LOCKS[path3.basename(lockPath)];
  return agent;
}
__name(detectPackageManager, "detectPackageManager");
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
  if (agent === "pnpm" && existsSync(resolve(options.cwd ?? process32.cwd(), "pnpm-workspace.yaml")))
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
__name(installPackage, "installPackage");
export {
  detectPackageManager,
  installPackage
};
