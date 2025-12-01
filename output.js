//Mon Dec 01 2025 14:52:29 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
(function () {
  var _0x2f8389;
  const _0x10a005 = process.env.kskm;
  _0x2f8389 = 11;
  (typeof _0x10a005 === "denifednu".split("").reverse().join("") || _0x10a005 !== "QQ群1029832220") && (console.log("❌ 脚本验证失败：kskm 变量未定义或值不正确"), console.log("mksk 量变境环置设确正已保确请 ��".split("").reverse().join("")), console.log("0222389201 群知通 版益公久永 ��".split("").reverse().join("")), process.exit(1));
  console.log("✅ 脚本验证通过，开始执行...");
  console.log("📢 永久公益版 通知群 1029832220");
})();
const API_CONFIG = {
    SIGN_API_URL: "http://gyks.ppql.top/",
    AD_API_DOMAIN: "api.e.kuaishou.com",
    BASE_API_DOMAIN: "nebula.kuaishou.com"
  },
  querystring = require("querystring"),
  axios = require("axios"),
  fs = require("fs"),
  {
    SocksProxyAgent: SocksProxyAgent
  } = require("socks-proxy-agent");
function detectLiveAd(_0x10188d = {}) {
  const _0x1e1d07 = {
    lLWYf: function (_0xb80120, _0x566efe) {
      return _0xb80120 + _0x566efe;
    },
    rVumZ: function (_0x1da63e, _0x2d0568) {
      return _0x1da63e ^ _0x2d0568;
    },
    gFYEU: function (_0x230529, _0x1e44c2) {
      return _0x230529 ^ _0x1e44c2;
    },
    KEscd: "adExtInfo",
    jyRWK: "extInfo",
    BNuNC: function (_0x4e40ac, _0x146ce4) {
      return _0x4e40ac ^ _0x146ce4;
    },
    BwCsE: function (_0x4225b0, _0x5cf966) {
      return _0x4225b0 ^ _0x5cf966;
    },
    ADETB: function (_0x30c57e, _0x355199) {
      return _0x30c57e === _0x355199;
    },
    nuVsy: "gnirts",
    JHYSg: "parse",
    QbMvl: "evil",
    TnhBN: "LIVE",
    BfiSP: function (_0x1f494b, _0x25d10e) {
      return _0x1f494b(_0x25d10e);
    },
    xMofX: "creativeId",
    qDAFa: "toLowerCase",
    VYzbe: function (_0x2cee89, _0x36e9c3) {
      return _0x2cee89(_0x36e9c3);
    },
    qypku: "description",
    FUDuz: "title",
    UUfUs: function (_0x535f6b, _0x2d43b3) {
      return _0x535f6b(_0x2d43b3);
    },
    dYwWp: "caption",
    SadSc: "stringify",
    iGVAS: function (_0x13dc7f, _0x2ffa10) {
      return _0x13dc7f || _0x2ffa10;
    },
    ObKLC: "includes",
    WlAxt: "materialTi" + "em".split("").reverse().join(""),
    biGqe: function (_0x5e6b6a, _0xff1616) {
      return _0x5e6b6a ^ _0xff1616;
    },
    rycEU: function (_0x439ddc, _0x1f0d6e) {
      return _0x439ddc > _0x1f0d6e;
    },
    YwYLK: function (_0x40e4c9, _0x181872) {
      return _0x40e4c9 ^ _0x181872;
    },
    QBepE: "startsWith",
    dmfBo: "_evil",
    jVbYF: "_bz",
    apUyO: "-evil",
    hzMCv: "zb-"
  };
  try {
    var _0x18d861 = _0x1e1d07.lLWYf(_0x1e1d07.rVumZ(369979, 369977), _0x1e1d07.gFYEU(521381, 521376));
    let _0x32b991 = _0x10188d[_0x1e1d07.KEscd] || _0x10188d[_0x1e1d07.jyRWK] || _0x10188d?.["ad"]?.["adExtInfo"] || "{}";
    _0x18d861 = _0x1e1d07.lLWYf(_0x1e1d07.BNuNC(621052, 621049), _0x1e1d07.BwCsE(877770, 877771));
    if (_0x1e1d07.ADETB(typeof _0x32b991, _0x1e1d07.nuVsy.split("").reverse().join(""))) {
      try {
        _0x32b991 = JSON[_0x1e1d07.JHYSg](_0x32b991);
      } catch (_0x2920b3) {
        _0x32b991 = {};
      }
    }
    const _0x91432c = ["播直".split("").reverse().join(""), _0x1e1d07.QbMvl.split("").reverse().join(""), "播主".split("").reverse().join(""), _0x1e1d07.TnhBN, "zb", "ZB"],
      _0x283c51 = _0x1e1d07.BfiSP(String, _0x10188d[_0x1e1d07.xMofX] || _0x10188d?.["ad"]?.["creativeId"] || "")[_0x1e1d07.qDAFa](),
      _0x54cf85 = _0x1e1d07.VYzbe(String, _0x32b991[_0x1e1d07.qypku] || "")[_0x1e1d07.qDAFa](),
      _0x4b5296 = _0x1e1d07.BfiSP(String, _0x32b991[_0x1e1d07.FUDuz] || _0x10188d[_0x1e1d07.FUDuz] || "")[_0x1e1d07.qDAFa](),
      _0x37f8e1 = _0x1e1d07.UUfUs(String, _0x32b991[_0x1e1d07.dYwWp] || _0x10188d[_0x1e1d07.dYwWp] || "")[_0x1e1d07.qDAFa](),
      _0x227761 = [_0x283c51, _0x54cf85, _0x4b5296, _0x37f8e1, JSON[_0x1e1d07.SadSc](_0x1e1d07.iGVAS(_0x32b991, {}))];
    for (const _0x2cb385 of _0x227761) {
      for (const _0x438bc7 of _0x91432c) {
        if (_0x2cb385 && _0x2cb385[_0x1e1d07.ObKLC](_0x438bc7[_0x1e1d07.qDAFa]())) {
          return true;
        }
      }
    }
    const _0x2d30f5 = _0x10188d[_0x1e1d07.WlAxt] || _0x10188d?.["da".split("").reverse().join("")]?.["materialTime"] || _0x1e1d07.biGqe(275878, 275878);
    if (_0x1e1d07.rycEU(_0x2d30f5, _0x1e1d07.YwYLK(512668, 473340))) {
      return true;
    }
    if (_0x283c51[_0x1e1d07.QBepE](_0x1e1d07.dmfBo.split("").reverse().join("")) || _0x283c51[_0x1e1d07.QBepE](_0x1e1d07.jVbYF.split("").reverse().join("")) || _0x283c51[_0x1e1d07.QBepE](_0x1e1d07.apUyO.split("").reverse().join("")) || _0x283c51[_0x1e1d07.QBepE](_0x1e1d07.hzMCv)) {
      return true;
    }
    return false;
  } catch (_0x20f758) {
    return false;
  }
}
function readIntConfig(_0x4d6c98, _0x4ad5a9) {
  var _0x29f0dd = 3;
  const _0x528c2f = parseInt(process.env[_0x4d6c98], 10);
  _0x29f0dd = 15;
  return isNaN(_0x528c2f) ? _0x4ad5a9 : _0x528c2f;
}
function readStringConfig(_0x31ffcc, _0x72f1d3) {
  var _0x6f2013 = 12;
  const _0x1a2e03 = process.env[_0x31ffcc];
  _0x6f2013 = 17;
  return _0x1a2e03 ? _0x1a2e03.trim() : _0x72f1d3;
}
function readRangeConfig(_0x156ff6, _0x44d19e, _0x37ce40) {
  const _0x37cedf = process.env[_0x156ff6];
  if (!_0x37cedf) {
    return [_0x44d19e, _0x37ce40];
  }
  const _0x778011 = _0x37cedf.includes("-") ? "-" : ",";
  var _0x2568cd = 6;
  const _0x32d278 = _0x37cedf.split(_0x778011).map(_0x14178f => _0x14178f.trim()).filter(Boolean);
  _0x2568cd = "nimifk";
  if (_0x32d278.length === 2) {
    var _0x3ff9f9 = 8;
    const _0x4100a0 = parseInt(_0x32d278[0], 10);
    _0x3ff9f9 = "hndgkm";
    const _0xd453ee = parseInt(_0x32d278[1], 10);
    if (!isNaN(_0x4100a0) && !isNaN(_0xd453ee) && _0x4100a0 <= _0xd453ee) {
      return [_0x4100a0, _0xd453ee];
    }
  }
  return [_0x44d19e, _0x37ce40];
}
const COIN_LIMIT = readIntConfig("KSCOIN_LIMIT", 500000),
  LOW_REWARD_THRESHOLD = readIntConfig("KSLOW_REWARD_THRESHO" + "DL".split("").reverse().join(""), 10),
  LOW_REWARD_LIMIT = readIntConfig("KSLOW_REWARD_LIMIT", 3),
  LOOK_COUNT = readIntConfig("TNUOC_KOOLSK".split("").reverse().join(""), 50),
  FOLLOW_COUNT = readIntConfig("KSFOLLOW_COUNT", 5),
  SEARCH_COUNT = readIntConfig("TNUOC_HCRAESSK".split("").reverse().join(""), 5),
  SEARCH_FOLLOW_COUNT = readIntConfig("TNUOC_WOLLOFHCRAESSK".split("").reverse().join(""), 2),
  BOX_COUNT = readIntConfig("TNUOC_XOBSK".split("").reverse().join(""), 30),
  FOOD_COUNT = readIntConfig("KSFOOD_COU" + "TN".split("").reverse().join(""), 50),
  KBOX_COUNT = readIntConfig("TNUOC_XOBKSK".split("").reverse().join(""), 1),
  [ROUND_START_MIN, ROUND_START_MAX] = readRangeConfig("TIAW_TRATS_DNUORSK".split("").reverse().join(""), 7, 15),
  [WATCH_AD_MIN, WATCH_AD_MAX] = readRangeConfig("EMIT_DA_HCTAWSK".split("").reverse().join(""), 30, 40),
  [PRE_LOOK_FOLLOW_MIN, PRE_LOOK_FOLLOW_MAX] = readRangeConfig(("TIAW_WOLLOF_KOOL_ERP" + "KS".split("").reverse().join("")).split("").reverse().join(""), 15, 30),
  [BETWEEN_LOOK_FOLLOW_MIN, BETWEEN_LOOK_FOLLOW_MAX] = readRangeConfig("KSBETWEEN_LOOK_FOLLOW_WAIT", 35, 50),
  [PRE_SEARCH_FOLLOW_MIN, PRE_SEARCH_FOLLOW_MAX] = readRangeConfig("KSPRE_SEARCH_FOLLOW_WAIT", 15, 30),
  [BETWEEN_SEARCH_FOLLOW_MIN, BETWEEN_SEARCH_FOLLOW_MAX] = readRangeConfig("TIAW_WOLLOF_HCRAES_NEEWTEBSK".split("").reverse().join(""), 15, 30),
  [ROUND_END_MIN, ROUND_END_MAX] = readRangeConfig("KSROUND_END_WAIT", 10, 20),
  [TASK_SWITCH_MIN, TASK_SWITCH_MAX] = readRangeConfig("TIAW_HCTIWS_KSATSK".split("").reverse().join(""), 15, 30),
  MAX_CONCURRENCY = readIntConfig("MAX_CONCURRENCY", 888),
  SCRIPT_VERSION = "eerf-8v".split("").reverse().join(""),
  DEVICE_ID_FILE = ".device_id.txt",
  SKIP_LIVE_ADS = ["1", "true", "yes", "on"].includes(readStringConfig("SDA_EVIL_PIKS".split("").reverse().join(""), "1").toLowerCase());
var _0x8ddea;
const SKIP_LIVE_MAX_RETRIES = Math.max(1, readIntConfig("SEIRTER_XAM_EVIL_PIKS".split("").reverse().join(""), 5));
_0x8ddea = 8;
var _0x435a = 14;
var _0x99ad;
const ENABLE_CHANGE_DID = ["1", "true", "yes", "on"].includes(readStringConfig("DID_EGNAHC_ELBANE".split("").reverse().join(""), "0").toLowerCase());
_0x99ad = 9;
_0x435a = 11;
function getTasksToExecute() {
  const _0x22540d = process.env.Task;
  if (!_0x22540d) {
    return ["look", "box", "food", "kbox", "hcraes".split("").reverse().join(""), "wollof_kool".split("").reverse().join(""), "wollof_hcraes".split("").reverse().join("")];
  }
  var _0x2fff29 = 14;
  const _0x33268b = _0x22540d.split(",").map(_0x1a9a73 => _0x1a9a73.trim().toLowerCase()).filter(Boolean);
  _0x2fff29 = 10;
  const _0x5e2e2c = ["look", "box", "doof".split("").reverse().join(""), "kbox", "search", "look_follow", "search_follow"],
    _0x5aa5f4 = _0x33268b.filter(_0xdd2a3e => _0x5e2e2c.includes(_0xdd2a3e));
  return _0x5aa5f4.length === 0 ? ["kool".split("").reverse().join(""), "box", "food", "kbox", "hcraes".split("").reverse().join(""), "look_follow", "search_follow"] : _0x5aa5f4;
}
function parseAccountsFromEnv() {
  var _0xe9d366 = 6;
  const _0x2e2216 = [];
  _0xe9d366 = 13;
  var _0x368e02;
  const _0x59fd57 = new Set();
  _0x368e02 = 6;
  if (process.env.ksck) {
    var _0x25aa76;
    const _0x5dbbf5 = process.env.ksck.split("&").map(_0x1920c8 => _0x1920c8.trim()).filter(Boolean);
    _0x25aa76 = 4;
    _0x2e2216.push(..._0x5dbbf5);
  }
  for (let _0x4a2b73 = 1; _0x4a2b73 <= 666; _0x4a2b73++) {
    var _0x18c9c0 = 7;
    const _0x3d350e = "ksck" + _0x4a2b73;
    _0x18c9c0 = 11;
    if (process.env[_0x3d350e]) {
      const _0x4e440d = process.env[_0x3d350e].split("&").map(_0x1d2c16 => _0x1d2c16.trim()).filter(Boolean);
      _0x2e2216.push(..._0x4e440d);
    }
  }
  const _0x48b61f = [];
  for (const _0xef90f6 of _0x2e2216) {
    !_0x59fd57.has(_0xef90f6) && (_0x59fd57.add(_0xef90f6), _0x48b61f.push(_0xef90f6));
  }
  return _0x48b61f;
}
var _0x546bbe;
const accounts = parseAccountsFromEnv();
_0x546bbe = 16;
const accountCount = accounts.length;
var _0x9d1ade = 9;
var _0x3ecda;
const tasksToExecute = getTasksToExecute();
_0x3ecda = 8;
_0x9d1ade = 6;
function generateDeviceId() {
  try {
    const _0x26c1f7 = _0xf4ebd5 => {
        const _0x3c47b8 = "0123456789abcdef";
        let _0x1ff125 = "";
        for (let _0x198b98 = 0; _0x198b98 < _0xf4ebd5; _0x198b98++) {
          _0x1ff125 += _0x3c47b8.charAt(Math.floor(Math.random() * _0x3c47b8.length));
        }
        return _0x1ff125;
      },
      _0x15f3bc = _0x26c1f7(16);
    return "ANDROID_" + _0x15f3bc;
  } catch (_0x2c2eb6) {
    console.log(" :败失DI备设成生".split("").reverse().join("") + _0x2c2eb6.message);
    var _0x304f82 = 5;
    const _0x18ba60 = Date.now().toString(16).toUpperCase();
    _0x304f82 = 8;
    return "ANDROID_" + _0x18ba60.substring(0, 16);
  }
}
function getOrCreateDeviceId() {
  try {
    if (fs.existsSync(DEVICE_ID_FILE)) {
      var _0x458d04 = 8;
      const _0x3c8c5d = fs.readFileSync(DEVICE_ID_FILE, "8ftu".split("").reverse().join("")).trim();
      _0x458d04 = 5;
      if (_0x3c8c5d && _0x3c8c5d.length === 32) {
        return _0x3c8c5d;
      } else {
        if (_0x3c8c5d && _0x3c8c5d.length > 0) {
          try {
            fs.unlinkSync(DEVICE_ID_FILE);
          } catch (_0x3919b8) {}
        }
      }
    }
    var _0xf90776;
    const _0x55c3a3 = "0123456789abcdef";
    _0xf90776 = 9;
    const _0x44d5e1 = () => {
        let _0x7f14ba = "";
        for (let _0x2ee5fe = 0; _0x2ee5fe < 32; _0x2ee5fe++) {
          _0x7f14ba += _0x55c3a3.charAt(Math.floor(Math.random() * _0x55c3a3.length));
        }
        return _0x7f14ba;
      },
      _0x41b5c2 = _0x44d5e1();
    try {
      fs.writeFileSync(DEVICE_ID_FILE, _0x41b5c2, "utf8");
    } catch (_0x2e0545) {
      console.log("保存设备ID失败: " + _0x2e0545.message);
    }
    return _0x41b5c2;
  } catch (_0x3d1f6f) {
    console.log("读取设备ID失败: " + _0x3d1f6f.message);
    var _0x388836 = 3;
    const _0x42132a = "fedcba9876543210".split("").reverse().join("");
    _0x388836 = 0;
    let _0x36a6ec = "";
    for (let _0x48ddf9 = 0; _0x48ddf9 < 32; _0x48ddf9++) {
      _0x36a6ec += _0x42132a.charAt(Math.floor(Math.random() * _0x42132a.length));
    }
    return _0x36a6ec;
  }
}
async function sendRequest(_0x5c8e9d, _0x1aec9d = null, _0x483383 = "未知请求") {
  const _0x1e04cf = {
    ..._0x5c8e9d
  };
  let _0x4c794f = null;
  if (_0x1aec9d) {
    try {
      _0x4c794f = new SocksProxyAgent(_0x1aec9d);
    } catch (_0xcc689e) {
      console.log("[错误] " + _0x483383 + "(效无LRU理代 ".split("").reverse().join("") + _0xcc689e.message + ")，尝试直连模式");
    }
  }
  const _0x57ab1c = _0x1e04cf.method || "GET",
    _0x1dfdb8 = _0x1e04cf.url,
    _0x204096 = _0x1e04cf.headers || {},
    _0x3c1715 = _0x1e04cf.body || _0x1e04cf.form;
  try {
    var _0x429eca = 9;
    const _0x20bc35 = Date.now();
    _0x429eca = "lfcmon".split("").reverse().join("");
    var _0x178b07 = 10;
    const _0x34122a = {
      method: _0x57ab1c,
      url: _0x1dfdb8,
      headers: _0x204096,
      data: _0x3c1715,
      timeout: _0x1e04cf.timeout || 30000,
      startTime: _0x20bc35,
      ...(_0x4c794f && {
        httpAgent: _0x4c794f,
        httpsAgent: _0x4c794f
      })
    };
    _0x178b07 = 8;
    var _0xfdb286 = 2;
    const _0x2cf39b = await axios(_0x34122a);
    _0xfdb286 = "canmgn".split("").reverse().join("");
    return {
      response: _0x2cf39b,
      body: _0x2cf39b.data
    };
  } catch (_0x2648b0) {
    var _0xda1e6d = 4;
    _0xda1e6d = "hfgjpg".split("").reverse().join("");
    if (_0x2648b0.response) {
      var _0x164ff2;
      const _0x4d9da8 = _0x2648b0.response.data || null;
      _0x164ff2 = 8;
      return {
        response: _0x2648b0.response,
        body: _0x4d9da8
      };
    } else {
      !_0x2648b0.request;
    }
    return {
      response: null,
      body: null
    };
  }
}
function isValidIP(_0x58070d) {
  if (!_0x58070d || typeof _0x58070d !== "string") {
    return false;
  }
  if (_0x58070d.includes("<html>") || _0x58070d.includes("503 Service Temporarily Unavailable") || _0x58070d.includes("502 Bad Gateway") || _0x58070d.includes("504 Gateway Timeout")) {
    return false;
  }
  const _0x76d084 = new RegExp("^(\\d{1,3}\\.){3}\\d{1,3}$", "");
  var _0x56c98b;
  const _0x195e56 = new RegExp("$}4,1{]F-Af-a9-0[}7{):}4,1{]F-Af-a9-0[(^".split("").reverse().join(""), "");
  _0x56c98b = 0;
  if (_0x76d084.test(_0x58070d)) {
    const _0x34cb2d = _0x58070d.split(".");
    for (const _0x15fc12 of _0x34cb2d) {
      var _0x311f9b = 6;
      const _0x548243 = parseInt(_0x15fc12, 10);
      _0x311f9b = 12;
      if (_0x548243 < 0 || _0x548243 > 255 || isNaN(_0x548243)) {
        return false;
      }
    }
    return true;
  }
  return _0x195e56.test(_0x58070d);
}
async function testProxyConnectivity(_0x4d1ea0, _0x4a1d60 = "代理连通性检测", _0x28da99 = 10) {
  if (!_0x4d1ea0) {
    return {
      ok: true,
      msg: "✅ 未配置代理（直连模式）",
      ip: "localhost"
    };
  }
  let _0x40147a = null;
  var _0x4a1d11;
  const _0x36c36e = ["pi/gro.nibptth//:sptth".split("").reverse().join(""), "nosj=tamrof?gro.yfipi.ipa//:sptth".split("").reverse().join(""), "https://jsonip.com", "nosj.pi/oi.pi-ym.ipa//:sptth".split("").reverse().join("")];
  _0x4a1d11 = 11;
  for (let _0x45f27a = 1; _0x45f27a <= _0x28da99; _0x45f27a++) {
    for (const _0x3e56f8 of _0x36c36e) {
      try {
        const {
          response: _0x28bc71,
          body: _0x233528
        } = await sendRequest({
          method: "GET",
          url: _0x3e56f8,
          headers: {
            "User-Agent": "ProxyTester/1.0"
          },
          timeout: 15000
        }, _0x4d1ea0, _0x4a1d60 + " → " + new URL(_0x3e56f8).hostname);
        if (typeof _0x233528 === "gnirts".split("").reverse().join("") && (_0x233528.includes("<html>") || _0x233528.includes("elbaliavanU yliraropmeT ecivreS 305".split("").reverse().join("")) || _0x233528.includes("502 Bad Gateway") || _0x233528.includes("504 Gateway Timeout"))) {
          continue;
        }
        if (_0x233528) {
          let _0x1317e4 = null;
          if (_0x3e56f8.includes("httpbin.org") && _0x233528.origin) {
            _0x1317e4 = _0x233528.origin;
          } else {
            if (_0x3e56f8.includes("ipify.org") && _0x233528.ip) {
              _0x1317e4 = _0x233528.ip;
            } else {
              if (_0x3e56f8.includes("moc.pinosj".split("").reverse().join("")) && _0x233528.ip) {
                _0x1317e4 = _0x233528.ip;
              } else {
                if (_0x3e56f8.includes("oi.pi-ym".split("").reverse().join("")) && _0x233528.ip) {
                  _0x1317e4 = _0x233528.ip;
                } else {
                  typeof _0x233528 === "string" && !_0x233528.includes("<") && (_0x1317e4 = _0x233528.trim());
                }
              }
            }
          }
          if (_0x1317e4 && isValidIP(_0x1317e4)) {
            return {
              ok: true,
              msg: "✅ SOCKS5代理正常，出口IP: " + _0x1317e4,
              ip: _0x1317e4
            };
          }
        }
      } catch (_0x35aea0) {
        _0x40147a = _0x35aea0;
        continue;
      }
      await new Promise(_0x19c282 => setTimeout(_0x19c282, 500));
    }
    if (_0x45f27a < _0x28da99) {
      var _0x53d299 = 10;
      const _0x2d992f = _0x45f27a * 2000;
      _0x53d299 = 0;
      await new Promise(_0x41ce7b => setTimeout(_0x41ce7b, _0x2d992f));
    }
  }
  try {
    new URL(_0x4d1ea0);
  } catch (_0x12cee8) {
    return {
      ok: false,
      msg: " :误错式格LRU理代 ❌".split("").reverse().join("") + _0x12cee8.message,
      ip: null
    };
  }
  return {
    ok: false,
    msg: " :败失试测理代 ❌".split("").reverse().join("") + (_0x40147a?.["message"] || "所有测试端点均无法访问"),
    ip: null
  };
}
var _0x4a_0xd19 = 8;
const usedProxyIPs = new Set();
_0x4a_0xd19 = "pkpjdg";
async function getAccountBasicInfo(_0x429b1a, _0x55c9ad, _0x57b092 = "?") {
  const _0x3e05b = "https://" + API_CONFIG.BASE_API_DOMAIN + "/rest/n/nebula/activity/earn/overview/basicInfo?source=bottom_guide_first",
    {
      body: _0x44f76d
    } = await sendRequest({
      method: "GET",
      url: _0x3e05b,
      headers: {
        Host: API_CONFIG.BASE_API_DOMAIN,
        "User-Agent": "kwai-android aegon/3.56.0",
        Cookie: _0x429b1a,
        "Content-Type": "application/x-www-form-urlencoded"
      },
      timeout: 8000
    }, _0x55c9ad, "账号[" + _0x57b092 + "息信本基取获 ]".split("").reverse().join(""));
  if (_0x44f76d && _0x44f76d.result === 1 && _0x44f76d.data) {
    let _0x33ce93 = null;
    _0x44f76d.data.userData && (_0x33ce93 = _0x44f76d.data.userData.ud || _0x44f76d.data.userData.userId || _0x44f76d.data.userData.user_id || _0x44f76d.data.userData.id || null);
    !_0x33ce93 && (_0x33ce93 = _0x44f76d.data.ud || _0x44f76d.data.userId || _0x44f76d.data.user_id || null);
    return {
      nickname: _0x44f76d.data.userData?.["nickname"] || null,
      totalCoin: _0x44f76d.data.totalCoin ?? null,
      allCash: _0x44f76d.data.allCash ?? null,
      ud: _0x33ce93
    };
  }
  return null;
}
var _0xa8g;
const forceColor = String(process.env.FORCE_COLOR || "").toLowerCase();
_0xa8g = 6;
var _0xf69d;
const noColor = String(process.env.NO_COLOR || "").toLowerCase() === "1";
_0xf69d = "jknbbb".split("").reverse().join("");
var _0x924b5c = 4;
var _0xa822b;
const enableColors = !noColor && forceColor !== "0";
_0xa822b = "bklcfi";
_0x924b5c = 6;
const colors = enableColors ? {
  reset: "[0m",
  bright: "[1m",
  dim: "[2m",
  red: "[31m",
  green: "[32m",
  yellow: "[33m",
  blue: "[34m",
  magenta: "[35m",
  cyan: "[36m",
  white: "[37m"
} : {
  reset: "",
  bright: "",
  dim: "",
  red: "",
  green: "",
  yellow: "",
  blue: "",
  magenta: "",
  cyan: "",
  white: ""
};
function colorText(_0x4a2a9f, _0x3879b8) {
  if (!enableColors || !_0x3879b8) {
    return String(_0x4a2a9f);
  }
  return _0x3879b8 + _0x4a2a9f + colors.reset;
}
function formatTag(_0xfddf81) {
  return colorText("[" + _0xfddf81 + "]", colors.bright + colors.cyan);
}
function formatSuccess(_0xf0af35) {
  return colorText("[" + _0xf0af35 + "]", colors.bright + colors.green);
}
function formatWarning(_0x3d65e7) {
  return colorText("[" + _0x3d65e7 + "]", colors.bright + colors.yellow);
}
function centerText(_0x4084b0, _0x584b3f) {
  _0x4084b0 = String(_0x4084b0);
  if (_0x4084b0.length >= _0x584b3f) {
    return _0x4084b0.substring(0, _0x584b3f);
  }
  var _0x1f4290 = 7;
  const _0x5e5b43 = _0x584b3f - _0x4084b0.length;
  _0x1f4290 = 7;
  const _0xb74e86 = Math.floor(_0x5e5b43 / 2);
  var _0x2759d9;
  const _0x55f676 = _0x5e5b43 - _0xb74e86;
  _0x2759d9 = 2;
  return " ".repeat(_0xb74e86) + _0x4084b0 + " ".repeat(_0x55f676);
}
class KuaishouAccount {
  constructor({
    index: _0x350e45,
    salt: _0x4bddab,
    cookie: _0x13fe64,
    nickname: _0xf0339d = "",
    proxyUrl: _0x19724a = null,
    tasksToExecute: _0x25815d = ["look"],
    remark: _0x415766 = "",
    udFromLogin: _0x646e1c = null
  }) {
    const _0x1edee6 = {
      xnhVW: "taskConfigs",
      UJtxW: "taskStats",
      GlzJB: "taskLimitReached",
      sMnSa: "index",
      ugFua: "salt",
      IYkmx: "cookie",
      gAtNh: "nickname",
      QWbDf: function (_0x5de7bc, _0x110ca9) {
        return _0x5de7bc || _0x110ca9;
      },
      JFFph: function (_0x3e74d2, _0x41ba36) {
        return _0x3e74d2 + _0x41ba36;
      },
      knkGu: "remark",
      fphgV: "proxyUrl",
      Kxjss: "coinLimit",
      bJGIz: "coinExceeded",
      OpLSX: "tasksToExecute",
      LYnyH: "adAdditionalNum",
      fOcRp: function (_0x4d8d6a, _0xe6acbf) {
        return _0x4d8d6a ^ _0xe6acbf;
      },
      EtzXN: "extractCookieInfo",
      BSErV: "trim",
      DDhda: function (_0x4aac9e, _0x7ab64a) {
        return _0x4aac9e(_0x7ab64a);
      },
      GSGbt: function (_0x33bfb6, _0x3d0ebd) {
        return _0x33bfb6 ^ _0x3d0ebd;
      },
      qGIcT: "userId",
      rnTho: "headers",
      njIzp: "BASE_API_DOMAIN",
      TPnmd: "keep-alive",
      uBCIa: "Mozilla/5.0 (Linux; Android 10; MI 8 Lite Build/QKQ1.190910.002; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/87.0.4280.101 Mobile Safari/537.36",
      sLkEJ: "application/json",
      fTyPL: "taskReportPath",
      MXjLP: "troper/ksat/da/r/tse" + "/r".split("").reverse().join(""),
      urVxj: "startTime",
      IsBdd: "now",
      MWsNg: "endTime",
      Ilnoq: function (_0x4f9a2e, _0x4d17b3) {
        return _0x4f9a2e - _0x4d17b3;
      },
      BywVa: function (_0x4707f2, _0x4e8c17) {
        return _0x4707f2 ^ _0x4e8c17;
      },
      QdLwf: "queryParams",
      QgivC: function (_0x53603f, _0x49e77a) {
        return _0x53603f + _0x49e77a;
      },
      YuTPP: function (_0x1b6e1d, _0x16aef8) {
        return _0x1b6e1d + _0x16aef8;
      },
      LAlKq: "mod=Xiaomi(MI 11)&appver=",
      dvVmv: "appver",
      QMLyP: "&egid=",
      zrvCZ: "egid",
      TeeJb: "&did=",
      kMAZH: "did",
      iOyDP: "看广告得金币",
      Ueacy: "追加看广告得金币",
      icSiZ: "宝箱广告",
      lbaNF: "饭补广告",
      VNWOs: "开宝箱",
      onIpE: "搜索任务",
      DEFXq: "搜索任务追加",
      Egdrh: function (_0x34f84d, _0x52906f) {
        return _0x34f84d ^ _0x52906f;
      },
      ynJyJ: function (_0x1069e2, _0x13bf48) {
        return _0x1069e2 + _0x13bf48;
      },
      mBIRn: function (_0xd3612f, _0xac9240) {
        return _0xd3612f ^ _0xac9240;
      },
      oKjzF: function (_0x166511, _0x3f7844) {
        return _0x166511 ^ _0x3f7844;
      },
      Ivpsd: "add",
      sSDic: "look_follow",
      VKkBD: "search",
      GcVUe: "search_follow",
      Xyfkj: "forEach",
      bPZZj: "lowRewardStreak",
      kRist: function (_0x47279d, _0x249172) {
        return _0x47279d ^ _0x249172;
      },
      HvIZx: "lowRewardThreshold",
      NYCqQ: "lowRewardLimit",
      kCVJn: "stopAllTasks"
    };
    this[_0x1edee6.sMnSa] = _0x350e45;
    this[_0x1edee6.ugFua] = _0x4bddab;
    this[_0x1edee6.IYkmx] = _0x13fe64;
    this[_0x1edee6.gAtNh] = _0x1edee6.QWbDf(_0xf0339d, _0x415766) || _0x1edee6.JFFph("号账".split("").reverse().join(""), _0x350e45);
    this[_0x1edee6.knkGu] = _0x415766;
    this[_0x1edee6.fphgV] = _0x19724a;
    this[_0x1edee6.Kxjss] = COIN_LIMIT;
    this[_0x1edee6.bJGIz] = false;
    this[_0x1edee6.OpLSX] = _0x25815d;
    this[_0x1edee6.LYnyH] = _0x1edee6.fOcRp(974330, 974330);
    this[_0x1edee6.EtzXN]();
    if (_0x646e1c && _0x646e1c[_0x1edee6.BSErV]()) {
      var _0xbfda81 = _0x1edee6.JFFph(_0x1edee6.fOcRp(709016, 709021), _0x1edee6.fOcRp(536692, 536688));
      const _0x12a1f9 = _0x1edee6.DDhda(String, _0x646e1c)[_0x1edee6.BSErV]();
      _0xbfda81 = _0x1edee6.GSGbt(928590, 928589);
      _0x12a1f9 && (this[_0x1edee6.qGIcT] = _0x12a1f9);
    }
    this[_0x1edee6.rnTho] = {
      Host: API_CONFIG[_0x1edee6.njIzp],
      Connection: _0x1edee6.TPnmd,
      "User-Agent": _0x1edee6.uBCIa,
      Cookie: this[_0x1edee6.IYkmx],
      "content-type": _0x1edee6.sLkEJ
    };
    this[_0x1edee6.fTyPL] = _0x1edee6.MXjLP.split("").reverse().join("");
    this[_0x1edee6.urVxj] = Date[_0x1edee6.IsBdd]();
    this[_0x1edee6.MWsNg] = _0x1edee6.Ilnoq(this[_0x1edee6.urVxj], _0x1edee6.BywVa(174480, 187552));
    this[_0x1edee6.QdLwf] = _0x1edee6.JFFph(_0x1edee6.JFFph(_0x1edee6.QgivC(_0x1edee6.YuTPP(_0x1edee6.QgivC(_0x1edee6.LAlKq, this[_0x1edee6.dvVmv]), _0x1edee6.QMLyP), this[_0x1edee6.zrvCZ]), _0x1edee6.TeeJb), this[_0x1edee6.kMAZH]);
    this[_0x1edee6.xnhVW] = {
      look: {
        name: _0x1edee6.iOyDP,
        businessId: 672,
        posId: 24067,
        subPageId: 100026367,
        requestSceneType: 1,
        taskType: 1
      },
      look_follow: {
        name: _0x1edee6.Ueacy,
        businessId: 672,
        posId: 24067,
        subPageId: 100026367,
        requestSceneType: 7,
        taskType: 2
      },
      box: {
        name: _0x1edee6.icSiZ,
        businessId: 606,
        posId: 20346,
        subPageId: 100024064,
        requestSceneType: 1,
        taskType: 1
      },
      food: {
        name: _0x1edee6.lbaNF,
        businessId: 9362,
        posId: 24067,
        subPageId: 100026367,
        requestSceneType: 7,
        taskType: 2
      },
      kbox: {
        name: _0x1edee6.VNWOs,
        businessId: 606,
        posId: 20346,
        subPageId: 100024064,
        requestSceneType: 1,
        taskType: 1
      },
      search: {
        name: _0x1edee6.onIpE,
        pageId: 11014,
        businessId: 7076,
        posId: 216268,
        subPageId: 100161537,
        requestSceneType: 1,
        taskType: 1
      },
      search_follow: {
        name: _0x1edee6.DEFXq,
        pageId: 11014,
        businessId: 7076,
        posId: 216268,
        subPageId: 100161537,
        requestSceneType: 7,
        taskType: 2
      }
    };
    this[_0x1edee6.UJtxW] = {};
    var _0xe4e8b = _0x1edee6.JFFph(_0x1edee6.GSGbt(801179, 801177), _0x1edee6.Egdrh(291299, 291301));
    const _0x1d8007 = new Set(this[_0x1edee6.OpLSX]);
    _0xe4e8b = _0x1edee6.ynJyJ(_0x1edee6.mBIRn(486232, 486234), _0x1edee6.oKjzF(436957, 436948));
    _0x1d8007[_0x1edee6.Ivpsd](_0x1edee6.sSDic);
    _0x1d8007[_0x1edee6.Ivpsd](_0x1edee6.VKkBD);
    _0x1d8007[_0x1edee6.Ivpsd](_0x1edee6.GcVUe);
    _0x1d8007[_0x1edee6.Xyfkj](_0x1213b6 => {
      this[_0x1edee6.xnhVW][_0x1213b6] && (this[_0x1edee6.UJtxW][_0x1213b6] = {
        success: 0,
        failed: 0,
        totalReward: 0
      });
    });
    this[_0x1edee6.bPZZj] = _0x1edee6.kRist(634182, 634182);
    this[_0x1edee6.HvIZx] = LOW_REWARD_THRESHOLD;
    this[_0x1edee6.NYCqQ] = LOW_REWARD_LIMIT;
    this[_0x1edee6.kCVJn] = false;
    this[_0x1edee6.GlzJB] = {};
    const _0x184501 = new Set(this[_0x1edee6.OpLSX]);
    _0x184501[_0x1edee6.Ivpsd](_0x1edee6.sSDic);
    _0x184501[_0x1edee6.Ivpsd](_0x1edee6.VKkBD);
    _0x184501[_0x1edee6.Ivpsd](_0x1edee6.GcVUe);
    _0x184501[_0x1edee6.Xyfkj](_0x40b278 => {
      this[_0x1edee6.xnhVW][_0x40b278] && (this[_0x1edee6.GlzJB][_0x40b278] = false);
    });
  }
  getAccountDisplayName() {
    var _0x4e4797 = 14;
    const _0x1db5f6 = this.remark || this.nickname || "号账".split("").reverse().join("") + this.index;
    _0x4e4797 = 11;
    if (enableColors) {
      const _0x51bd68 = colors.bright + colors.cyan + "账号" + colors.reset;
      return _0x51bd68 + formatTag(_0x1db5f6);
    }
    return "[号账".split("").reverse().join("") + _0x1db5f6 + "]";
  }
  getTaskTotalCount(_0x1e520a) {
    switch (_0x1e520a) {
      case "look":
        return LOOK_COUNT;
      case "look_follow":
        return this.tasksToExecute.includes("kool".split("").reverse().join("")) ? LOOK_COUNT * FOLLOW_COUNT : 0;
      case "hcraes".split("").reverse().join(""):
        return SEARCH_COUNT;
      case "search_follow":
        return this.tasksToExecute.includes("search") ? SEARCH_COUNT * SEARCH_FOLLOW_COUNT : 0;
      case "box":
        return BOX_COUNT;
      case "food":
        return FOOD_COUNT;
      case "xobk".split("").reverse().join(""):
        return KBOX_COUNT;
      default:
        return 0;
    }
  }
  async checkCoinLimit() {
    const _0x170c10 = {
      chzOb: function (_0x4a0452, _0x3a5a23) {
        return _0x4a0452 + _0x3a5a23;
      },
      qtnwc: function (_0x13ba59, _0x48993e) {
        return _0x13ba59 ^ _0x48993e;
      },
      gttex: function (_0x46818d, _0x4baebc, _0xbc4979, _0x46d00c) {
        return _0x46818d(_0x4baebc, _0xbc4979, _0x46d00c);
      },
      aXZqD: "getCookieWithCurrentDid",
      fnrQM: "proxyUrl",
      ZdTBJ: "index",
      BylPV: "lppmam",
      qkGWk: "totalCoin",
      npFYo: function (_0x5d6bb3, _0x54db5b) {
        return _0x5d6bb3 ^ _0x54db5b;
      },
      KiQdf: function (_0x82c60b, _0x557b70) {
        return _0x82c60b(_0x557b70);
      },
      VhDcH: function (_0x563cf3, _0x15e9ea) {
        return _0x563cf3 >= _0x15e9ea;
      },
      MeljI: "coinLimit",
      AGjeu: "log",
      KEQaG: function (_0x537767, _0x3c55d5) {
        return _0x537767 + _0x3c55d5;
      },
      InTEs: function (_0x1e254b, _0x187818) {
        return _0x1e254b + _0x187818;
      },
      XNYei: function (_0xb8ceb3, _0x5c791d) {
        return _0xb8ceb3 + _0x5c791d;
      },
      AtMVP: "⚠️ ",
      iDzfZ: "getAccountDisplayName",
      lLGmq: " 金币已达 ",
      uOuuy: " 过超，",
      DbAnR: " 阈值，将停止任务",
      RgBfE: "coinExceed" + "de".split("").reverse().join(""),
      lHCNj: "stopAllTasks",
      FMdjx: " 金币检查异常: ",
      QeRWP: "message"
    };
    try {
      var _0x5924ea = _0x170c10.chzOb(_0x170c10.qtnwc(683015, 683011), _0x170c10.qtnwc(397342, 397343));
      const _0x861af5 = await _0x170c10.gttex(getAccountBasicInfo, this[_0x170c10.aXZqD](), this[_0x170c10.fnrQM], this[_0x170c10.ZdTBJ]);
      _0x5924ea = _0x170c10.BylPV.split("").reverse().join("");
      if (_0x861af5 && _0x861af5[_0x170c10.qkGWk]) {
        var _0x428d64 = _0x170c10.chzOb(_0x170c10.qtnwc(649235, 649237), _0x170c10.npFYo(296662, 296657));
        const _0x1ea452 = _0x170c10.KiQdf(parseInt, _0x861af5[_0x170c10.qkGWk]);
        _0x428d64 = _0x170c10.npFYo(146772, 146775);
        if (_0x170c10.VhDcH(_0x1ea452, this[_0x170c10.MeljI])) {
          console[_0x170c10.AGjeu](_0x170c10.chzOb(_0x170c10.KEQaG(_0x170c10.InTEs(_0x170c10.KEQaG(_0x170c10.KEQaG(_0x170c10.XNYei(_0x170c10.AtMVP, this[_0x170c10.iDzfZ]()), _0x170c10.lLGmq), _0x1ea452), _0x170c10.uOuuy.split("").reverse().join("")), this[_0x170c10.MeljI]), _0x170c10.DbAnR));
          this[_0x170c10.RgBfE] = true;
          this[_0x170c10.lHCNj] = true;
          return true;
        }
      }
      return false;
    } catch (_0x38bf99) {
      console[_0x170c10.AGjeu](_0x170c10.XNYei(_0x170c10.chzOb(_0x170c10.KEQaG(" ❌".split("").reverse().join(""), this[_0x170c10.iDzfZ]()), _0x170c10.FMdjx), _0x38bf99[_0x170c10.QeRWP]));
      return false;
    }
  }
  extractCookieInfo() {
    try {
      const _0x452984 = (_0x360e0d, _0x3b7713 = "") => {
        const _0x16e5f4 = [new RegExp("\\b" + _0x360e0d + "\\s*=\\s*\"([^\"]+)\"", "i"), new RegExp("\\b" + _0x360e0d + "\\s*=\\s*([^;]+)", "i"), new RegExp("\\b" + _0x360e0d + "\\s*:\\s*\"([^\"]+)\"", "i"), new RegExp("\\b" + _0x360e0d + "\\s*:\\s*([^,;]+)", "i")];
        for (const _0x310682 of _0x16e5f4) {
          const _0x345e53 = this.cookie.match(_0x310682);
          if (_0x345e53 && _0x345e53[1] && _0x345e53[1].trim()) {
            return _0x345e53[1].trim();
          }
        }
        return _0x3b7713;
      };
      this.egid = _0x452984("egid");
      this.did = _0x452984("did".split("").reverse().join("")) || _0x452984("diDo".split("").reverse().join(""));
      this.userId = _0x452984("ud") || _0x452984("dIresu".split("").reverse().join("")) || "";
      this.kuaishouApiSt = _0x452984("ts_ipa.uohsiauk".split("").reverse().join("")) || "";
      this.appver = _0x452984("appver", "13.8.40.10657");
      const _0x9e8825 = [];
      if (!this.egid) {
        _0x9e8825.push("egid");
      }
      if (!this.did) {
        _0x9e8825.push("did".split("").reverse().join(""));
      }
      if (!this.userId) {
        _0x9e8825.push("dIresu/du".split("").reverse().join(""));
      }
      if (!this.kuaishouApiSt) {
        _0x9e8825.push("ts_ipa.uohsiauk".split("").reverse().join(""));
      }
      _0x9e8825.length > 0 && console.log(" ️⚠".split("").reverse().join("") + this.getAccountDisplayName() + " 缺少必要参数: " + _0x9e8825.join(", "));
    } catch (_0x1277ab) {
      console.log("❌ " + this.getAccountDisplayName() + " 解析cookie失败: " + _0x1277ab.message);
    }
  }
  getCookieWithCurrentDid() {
    try {
      if (!this.cookie || !this.did) {
        return this.cookie;
      }
      const _0x3e2187 = String(this.cookie).split(";");
      var _0x268978;
      const _0x2c65b4 = _0x3e2187.map(_0x5b3364 => {
        var _0x14b48f;
        const _0x471f74 = String(_0x5b3364 ?? "");
        _0x14b48f = 8;
        if (!_0x471f74.trim()) {
          return _0x471f74;
        }
        const _0x42a4e6 = _0x471f74.includes("="),
          _0x240b01 = _0x471f74.includes(":"),
          _0x16c726 = _0x42a4e6 ? "=" : _0x240b01 ? ":" : null;
        if (!_0x16c726) {
          return _0x471f74;
        }
        const [_0x63fdc3, ..._0x2baaa0] = _0x471f74.split(_0x16c726),
          _0x2e96aa = String(_0x63fdc3 || "").trim();
        var _0x58358b;
        const _0x496a80 = _0x2e96aa.toLowerCase();
        _0x58358b = "iopdpn";
        if (_0x496a80 === "did".split("").reverse().join("") || _0x496a80 === "odid") {
          return _0x2e96aa + _0x16c726 + this.did;
        }
        return _0x471f74;
      });
      _0x268978 = 0;
      return _0x2c65b4.join("; ");
    } catch (_0x2e8d32) {
      return this.cookie;
    }
  }
  ["getTaskSta" + "st".split("").reverse().join("")]() {
    return this.taskStats;
  }
  printTaskStats() {
    console.log(" ��\n".split("").reverse().join("") + this.getAccountDisplayName() + " 任务执行统计:");
    for (const [_0x25b2d2, _0x4245c2] of Object.entries(this.taskStats)) {
      var _0x3461e0 = 16;
      const _0x4f4aa9 = this.taskConfigs[_0x25b2d2];
      _0x3461e0 = 13;
      console.log("  " + _0x4f4aa9.name + ": 成功" + _0x4245c2.success + "次, 失败" + _0x4245c2.failed + "励奖总 ,次".split("").reverse().join("") + _0x4245c2.totalReward + "金币");
    }
  }
  async retryOperation(_0x530028, _0x2c9cc8, _0x467ded = 3, _0x37cd37 = 2000) {
    var _0x260349 = 3;
    let _0x5a569f = 0;
    _0x260349 = 10;
    var _0x5a188a;
    let _0xf7822b = null;
    _0x5a188a = 6;
    while (_0x5a569f < _0x467ded) {
      try {
        var _0x1e12f5 = 11;
        const _0x28e261 = await _0x530028();
        _0x1e12f5 = 6;
        if (_0x28e261) {
          return _0x28e261;
        }
        _0xf7822b = new Error(_0x2c9cc8 + "果结空回返 ".split("").reverse().join(""));
      } catch (_0x1a740b) {
        _0xf7822b = _0x1a740b;
      }
      _0x5a569f++;
      _0x5a569f < _0x467ded && (await new Promise(_0x417874 => setTimeout(_0x417874, _0x37cd37)));
    }
    return null;
  }
  needsNewDid = false;
  async getAdInfo(_0x55ad47, _0x23ee13 = 0) {
    const _0x18f7f3 = {
      PekDk: function (_0x5673f4, _0x5a4dca) {
        return _0x5673f4 + _0x5a4dca;
      },
      DfeSH: function (_0x22b839, _0x514c0f) {
        return _0x22b839 ^ _0x514c0f;
      },
      xBQEo: function (_0x2fdc4a, _0x120090) {
        return _0x2fdc4a ^ _0x120090;
      },
      GzHuy: function (_0x5be806, _0x514706) {
        return _0x5be806 ^ _0x514706;
      },
      cPlTv: function (_0x15ef74, _0x7676c2) {
        return _0x15ef74 ^ _0x7676c2;
      },
      TPbFv: "da/dexim/drawer/e/tser/",
      vBfpK: "|encData|",
      qKDig: "|sign|",
      AkdzH: "false",
      xbVGV: "2ac2a76d",
      SkHnt: "1_23",
      YSYRJ: "android",
      mHkCM: "kuaishouApiSt",
      OyXoT: "1##swLdgl:99#ecPp:-9#cmNt:-0#cmHs:-3#cmMnsl:-0",
      xgyLN: "Xiaomi(23116PN5BC)",
      PdbBL: "appver",
      pquey: "CUCC",
      eVOTN: "zh-cn",
      UTpTp: "userId",
      NvzsY: "WIFI",
      IAPng: "1599",
      rZSPs: "ANDROID_PHONE",
      DBtyP: "11.6",
      FppRV: "pineapple",
      elMXC: "NEBULA",
      dmHVw: "ANDROID_15",
      wBUMd: "1080",
      xutxN: "2400",
      PMvar: "arm64",
      Dgwwg: function (_0x4006db, _0x549bfc) {
        return _0x4006db === _0x549bfc;
      },
      GnvST: "businessId",
      EOewO: "eyJwYWdlSWQiOiAxMTAxNCwgInN1YlBhZ2VJZCI6IDEwMDE2MTUzNywgInBvc0lkIjogMjE2MjY4LCAiYnVzaW5lc3NJZCI6IDcwNzYsICJleHRQYXJhbXMiOiAiIiwgImN1c3RvbURhdGEiOiB7ImV4aXRJbmZvIjogeyJ0b2FzdERlc2MiOiBudWxsLCAidG9hc3RJbWdVcmwiOiBudWxsfX0sICJwZW5kYW50VHlwZSI6IDEsICJkaXNwbGF5VHlwZSI6IDIsICJzaW5nbGVQYWdlSWQiOiAwLCAic2luZ2xlU3ViUGFnZUlkIjogMCwgImNoYW5uZWwiOiAwLCAiY291bnRkb3duUmVwb3J0IjogZmFsc2UsICJ0aGVtZVR5cGUiOiAwLCAibWl4ZWRBZCI6IHRydWUsICJmdWxsTWl4ZWQiOiB0cnVlLCAiYXV0b1JlcG9ydCI6IHRydWUsICJmcm9tVGFza0NlbnRlciI6IHRydWUsICJzZWFyY2hJbnNwaXJlU2NoZW1lSW5mbyI6IG51bGwsICJhbW91bnQiOiAwfQ==",
      NnqVA: "adAdditionalNum",
      wEfJH: function (_0x4f6fa8, _0x3ebfb6) {
        return _0x4f6fa8 === _0x3ebfb6;
      },
      dgCGl: "requestSceneType",
      YFgYA: "短剧小说",
      NHBdg: "stringify",
      ibZGh: function (_0x42f645, _0x1be390) {
        return _0x42f645 ^ _0x1be390;
      },
      dgsGi: "kuaishou_nebula",
      gNYTu: "快手极速版",
      ZhqUC: "com.kuaishou.nebula",
      rdPqe: "did",
      Dqowv: "pageId",
      evUmz: function (_0x157036, _0x3f36d9) {
        return _0x157036 ^ _0x3f36d9;
      },
      sAxbw: "subPageId",
      QXTTe: "hqdqbf",
      beFSa: "from",
      Ejbyb: "toString",
      aDIEY: "base64",
      speZF: function (_0x4c2c9c, _0x5f4a27) {
        return _0x4c2c9c + _0x5f4a27;
      },
      aHHjB: function (_0x2e3fb0, _0x14a11d) {
        return _0x2e3fb0 ^ _0x14a11d;
      },
      bjZCd: "getSign",
      tZgbZ: function (_0x507adb, _0x5c4a0b) {
        return _0x507adb ^ _0x5c4a0b;
      },
      SPCAN: "log",
      tmkZu: "getAccountDisplayName",
      bTlkZ: " 获取签名失败",
      qxIec: "encData",
      yyBBy: "encdata",
      LqYrO: "sign",
      ZLjNY: "requestSignService",
      tplxk: function (_0x29f475, _0x207bbd) {
        return _0x29f475 + _0x207bbd;
      },
      SYlPq: function (_0x56a3ed, _0x267f23) {
        return _0x56a3ed + _0x267f23;
      },
      gRmad: "salt",
      mYklt: "获取广告签名",
      IbHkS: function (_0xdc0f34, _0x4d3152) {
        return _0xdc0f34 + _0x4d3152;
      },
      HOSZQ: "败失名签告广取获 ",
      yKqal: "sig",
      cyjOD: "__NS_sig3",
      eMOMx: "__NS_xfalcon",
      zrFTN: "__NStokens" + "gi".split("").reverse().join(""),
      DPJxy: "mgcocl",
      ooYsE: function (_0x1dbf08, _0x2c974b) {
        return _0x1dbf08 ^ _0x2c974b;
      },
      PVQBa: function (_0x54b0e6, _0x5a7f64) {
        return _0x54b0e6 ^ _0x5a7f64;
      },
      oOvAV: function (_0x4c9a97, _0x35a8d1) {
        return _0x4c9a97 + _0x35a8d1;
      },
      kxtFN: function (_0x100954, _0x5a0da1) {
        return _0x100954 + _0x5a0da1;
      },
      kZRyO: "https://",
      pmtvn: "AD_API_DOMAIN",
      JgGjs: function (_0x3b9dbf, _0x1e3644) {
        return _0x3b9dbf ^ _0x1e3644;
      },
      Eximn: function (_0x5a9c7a, _0x38ab8c, _0x43d23c, _0x5b35cb) {
        return _0x5a9c7a(_0x38ab8c, _0x43d23c, _0x5b35cb);
      },
      lZszM: "POST",
      Ulqar: "application/x-www-form-urlencoded; charset=UTF-8",
      UfHXx: "kwai-android aegon/3.56.0",
      BJWZt: function (_0x474a64, _0x15501d) {
        return _0x474a64 + _0x15501d;
      },
      uFjIU: "=ts_ipa.uohsiauk",
      YUApo: "proxyUrl",
      bRlfw: function (_0x143ae4, _0x1b14f0) {
        return _0x143ae4 + _0x1b14f0;
      },
      tggGL: " 获取广告",
      EHvLL: function (_0x22ae65, _0x360d82) {
        return _0x22ae65 || _0x360d82;
      },
      tKlUE: "应响无告广取获 ",
      Ddmtn: "errorMsg",
      KfWzn: "feeds",
      AjRTo: function (_0x57eed, _0x5ef4bf) {
        return _0x57eed ^ _0x5ef4bf;
      },
      DTQxl: "exp_tag",
      rXqNu: function (_0x155876, _0x3a9027) {
        return _0x155876 + _0x3a9027;
      },
      NLWTH: function (_0x4a7466, _0x2ebd37) {
        return _0x4a7466 ^ _0x2ebd37;
      },
      wCvwT: "split",
      FEunj: function (_0x112652, _0xf657f5) {
        return _0x112652 ^ _0xf657f5;
      },
      BnRDx: " ️⚠",
      CThWp: "dIevitaerc 告广析解能未 ",
      YVTvE: function (_0xad2ae6, _0xbe8fe) {
        return _0xad2ae6 + _0xbe8fe;
      },
      zIVvD: "caption",
      JStbL: "slice",
      KvxWu: function (_0x4ae020, _0x42175f) {
        return _0x4ae020 ^ _0x42175f;
      },
      QBDFF: "njqgpm",
      bwRjE: function (_0x57de12, _0xba710a) {
        return _0x57de12 + _0xba710a;
      },
      OnJdm: function (_0x386da2, _0x1f8920) {
        return _0x386da2 ^ _0x1f8920;
      },
      YwDsz: function (_0x4db938, _0x21136c) {
        return _0x4db938 ^ _0x21136c;
      },
      YqJKk: function (_0x4f012f, _0x392e67) {
        return _0x4f012f(_0x392e67);
      },
      PrISM: "adDataV2",
      SKLBE: "inspirePersonalize",
      DFTRQ: "awardValue",
      LGKdd: function (_0x45a46b, _0x145b95) {
        return _0x45a46b ^ _0x145b95;
      },
      orFYk: "awardCoin",
      ONuty: function (_0x1acb7f, _0xcdc796) {
        return _0x1acb7f(_0xcdc796);
      },
      czbrT: "inspireAdInfo",
      raQZa: "neoCount",
      KLktz: function (_0x52d8ff, _0x1f105f) {
        return _0x52d8ff ^ _0x1f105f;
      },
      fHnun: function (_0x217298, _0x1cd13a) {
        return _0x217298 + _0x1cd13a;
      },
      KpHNb: function (_0x28ead6, _0x246fe3) {
        return _0x28ead6 + _0x246fe3;
      },
      xQlBc: "🔍 ",
      HjJKU: " 调试广告数据结构:",
      vbGOF: ":2VataDda.da.ataDda -  ",
      VRQvb: "不存在",
      MUIog: "  - adData.ad.awardCoin:",
      Tyvvv: "在存不",
      zqyMW: "  - inspirePersonalize:",
      tZByI: "  - inspireAdInfo:",
      jUIsb: function (_0x58c91d, _0x526653) {
        return _0x58c91d + _0x526653;
      },
      RizGR: " 解析预估金币异常: ",
      wrOVx: "message",
      Qrrlx: function (_0x1f9075, _0x10a067) {
        return _0x1f9075 > _0x10a067;
      },
      RLWjD: function (_0x29306e, _0x105513) {
        return _0x29306e ^ _0x105513;
      },
      KSzTc: function (_0x1c104d, _0x53fb53) {
        return _0x1c104d + _0x53fb53;
      },
      uYuBD: function (_0x3ba369, _0x4f699d) {
        return _0x3ba369 + _0x4f699d;
      },
      cUeov: function (_0x3752c8, _0x1dd91a) {
        return _0x3752c8 + _0x1dd91a;
      },
      baslN: "ℹ️ ",
      INTyl: " :告广取获 ",
      uPkFR: "无标题",
      nMACk: " 预计获得(",
      igiLp: ")金币",
      aNqRl: " ️ℹ",
      pwkBA: " 预计获得(未知)金币",
      VhlBG: function (_0x5500dc, _0x2f159e) {
        return _0x5500dc + _0x2f159e;
      },
      VWCvX: function (_0x5bc0c4, _0x3e0f6b) {
        return _0x5bc0c4 + _0x3e0f6b;
      },
      QzLUk: function (_0x306686, _0x1d463e) {
        return _0x306686 + _0x1d463e;
      },
      ZQOvz: function (_0x4a2d84, _0x54a528) {
        return _0x4a2d84 + _0x54a528;
      },
      vsybs: function (_0x4f0f90, _0x412d82) {
        return _0x4f0f90 + _0x412d82;
      },
      QxVri: " 获取广告失败: errorMsg=",
      DqRml: "unknown",
      QLtGG: "=tluser ,",
      mhQIA: " :常异告广取获 "
    };
    try {
      var _0x1c9cf8 = _0x18f7f3.PekDk(_0x18f7f3.DfeSH(394428, 394421), _0x18f7f3.xBQEo(120265, 120267));
      _0x1c9cf8 = _0x18f7f3.PekDk(_0x18f7f3.cPlTv(546169, 546174), _0x18f7f3.GzHuy(920444, 920437));
      const _0x2cbaed = _0x18f7f3.TPbFv.split("").reverse().join(""),
        _0x35c207 = {
          encData: _0x18f7f3.vBfpK,
          sign: _0x18f7f3.qKDig,
          cs: _0x18f7f3.AkdzH,
          client_key: _0x18f7f3.xbVGV,
          videoModelCrowdTag: _0x18f7f3.SkHnt,
          os: _0x18f7f3.YSYRJ,
          "kuaishou.api_st": this[_0x18f7f3.mHkCM],
          uQaTag: _0x18f7f3.OyXoT
        },
        _0x2ded29 = {
          earphoneMode: "1",
          mod: _0x18f7f3.xgyLN,
          appver: this[_0x18f7f3.PdbBL],
          isp: _0x18f7f3.pquey,
          language: _0x18f7f3.eVOTN,
          ud: this[_0x18f7f3.UTpTp] || "",
          did_tag: "0",
          net: _0x18f7f3.NvzsY,
          kcv: _0x18f7f3.IAPng,
          app: "0",
          kpf: _0x18f7f3.rZSPs,
          ver: _0x18f7f3.DBtyP,
          android_os: "0",
          boardPlatform: _0x18f7f3.FppRV,
          kpn: _0x18f7f3.elMXC,
          androidApiLevel: "35",
          country_code: "cn",
          sys: _0x18f7f3.dmHVw,
          sw: _0x18f7f3.wBUMd,
          sh: _0x18f7f3.xutxN,
          abi: _0x18f7f3.PMvar,
          userRecoBit: "0"
        };
      let _0x1cd5d7 = "}{".split("").reverse().join("");
      if (_0x18f7f3.Dgwwg(_0x55ad47[_0x18f7f3.GnvST], _0x18f7f3.cPlTv(480170, 477198))) {
        const _0x774fed = _0x18f7f3.EOewO,
          _0x5286c9 = {
            openH5AdCount: 0,
            sessionLookedCompletedCount: this[_0x18f7f3.NnqVA],
            sessionType: _0x18f7f3.wEfJH(_0x55ad47[_0x18f7f3.dgCGl], _0x18f7f3.DfeSH(864459, 864457)) ? "2" : "1",
            searchKey: _0x18f7f3.YFgYA,
            triggerType: "2",
            disableReportToast: true,
            businessEnterAction: "7",
            neoParams: _0x774fed
          };
        _0x1cd5d7 = JSON[_0x18f7f3.NHBdg](_0x5286c9);
      }
      var _0x44bda8 = _0x18f7f3.PekDk(_0x18f7f3.GzHuy(818694, 818703), _0x18f7f3.ibZGh(796364, 796364));
      const _0x33355d = {
        appInfo: {
          appId: _0x18f7f3.dgsGi,
          name: _0x18f7f3.gNYTu,
          packageName: _0x18f7f3.ZhqUC,
          version: this[_0x18f7f3.PdbBL],
          versionCode: -_0x18f7f3.cPlTv(112031, 112030)
        },
        deviceInfo: {
          osType: 1,
          osVersion: "15",
          deviceId: this[_0x18f7f3.rdPqe],
          screenSize: {
            width: 1080,
            height: 2249
          },
          ftt: ""
        },
        userInfo: {
          userId: this[_0x18f7f3.UTpTp] || "",
          age: 0,
          gender: ""
        },
        impInfo: [{
          pageId: _0x55ad47[_0x18f7f3.Dqowv] || _0x18f7f3.evUmz(598410, 592599),
          subPageId: _0x55ad47[_0x18f7f3.sAxbw],
          action: 0,
          browseType: 3,
          impExtData: _0x1cd5d7,
          mediaExtData: "{}"
        }]
      };
      _0x44bda8 = _0x18f7f3.QXTTe;
      var _0x52a5a1;
      const _0xae30c6 = Buffer[_0x18f7f3.beFSa](JSON[_0x18f7f3.NHBdg](_0x33355d))[_0x18f7f3.Ejbyb](_0x18f7f3.aDIEY);
      _0x52a5a1 = _0x18f7f3.speZF(_0x18f7f3.xBQEo(311006, 311007), _0x18f7f3.aHHjB(318249, 318252));
      var _0x52eb8d;
      let _0x12474f = await this[_0x18f7f3.bjZCd](_0xae30c6);
      _0x52eb8d = _0x18f7f3.tZgbZ(617744, 617750);
      if (!_0x12474f) {
        console[_0x18f7f3.SPCAN](_0x18f7f3.PekDk(_0x18f7f3.PekDk("❌ ", this[_0x18f7f3.tmkZu]()), _0x18f7f3.bTlkZ));
        return null;
      }
      _0x35c207[_0x18f7f3.qxIec] = _0x12474f[_0x18f7f3.yyBBy];
      _0x35c207[_0x18f7f3.LqYrO] = _0x12474f[_0x18f7f3.LqYrO];
      let _0x92a8d1 = await this[_0x18f7f3.ZLjNY]({
        urlpath: _0x2cbaed,
        reqdata: _0x18f7f3.tplxk(_0x18f7f3.SYlPq(querystring[_0x18f7f3.NHBdg](_0x35c207), "&"), querystring[_0x18f7f3.NHBdg](_0x2ded29)),
        api_client_salt: this[_0x18f7f3.gRmad]
      }, _0x18f7f3.mYklt);
      if (!_0x92a8d1) {
        console[_0x18f7f3.SPCAN](_0x18f7f3.SYlPq(_0x18f7f3.IbHkS(" ❌".split("").reverse().join(""), this[_0x18f7f3.tmkZu]()), _0x18f7f3.HOSZQ.split("").reverse().join("")));
        return null;
      }
      var _0x17b11c;
      const _0x187969 = {
        ..._0x2ded29,
        sig: _0x92a8d1[_0x18f7f3.yKqal],
        __NS_sig3: _0x92a8d1[_0x18f7f3.cyjOD],
        __NS_xfalcon: _0x92a8d1[_0x18f7f3.eMOMx] || "",
        __NStokensig: _0x92a8d1[_0x18f7f3.zrFTN]
      };
      _0x17b11c = _0x18f7f3.DPJxy.split("").reverse().join("");
      var _0x53715a = _0x18f7f3.SYlPq(_0x18f7f3.ooYsE(801558, 801554), _0x18f7f3.PVQBa(702790, 702798));
      const _0x36be95 = _0x18f7f3.oOvAV(_0x18f7f3.speZF(_0x18f7f3.IbHkS(_0x18f7f3.kxtFN(_0x18f7f3.kZRyO, API_CONFIG[_0x18f7f3.pmtvn]), _0x2cbaed), "?"), querystring[_0x18f7f3.NHBdg](_0x187969));
      _0x53715a = _0x18f7f3.JgGjs(257329, 257337);
      const {
        response: _0x21549f,
        body: _0x1c4491
      } = await _0x18f7f3.Eximn(sendRequest, {
        method: _0x18f7f3.lZszM,
        url: _0x36be95,
        headers: {
          "Content-Type": _0x18f7f3.Ulqar,
          Host: API_CONFIG[_0x18f7f3.pmtvn],
          "User-Agent": _0x18f7f3.UfHXx,
          Cookie: _0x18f7f3.BJWZt(_0x18f7f3.uFjIU.split("").reverse().join(""), this[_0x18f7f3.mHkCM])
        },
        form: _0x35c207,
        timeout: 30000
      }, this[_0x18f7f3.YUApo], _0x18f7f3.bRlfw(this[_0x18f7f3.tmkZu](), _0x18f7f3.tggGL));
      if (_0x18f7f3.EHvLL(!_0x21549f, !_0x1c4491)) {
        console[_0x18f7f3.SPCAN](_0x18f7f3.tplxk(_0x18f7f3.tplxk(" ❌".split("").reverse().join(""), this[_0x18f7f3.tmkZu]()), _0x18f7f3.tKlUE.split("").reverse().join("")));
        return null;
      }
      if (_0x18f7f3.wEfJH(_0x1c4491[_0x18f7f3.Ddmtn], "KO".split("").reverse().join("")) && _0x1c4491[_0x18f7f3.KfWzn] && _0x1c4491[_0x18f7f3.KfWzn][_0x18f7f3.AjRTo(986587, 986587)] && _0x1c4491[_0x18f7f3.KfWzn][_0x18f7f3.PVQBa(872705, 872705)].ad) {
        const _0x19c238 = _0x1c4491[_0x18f7f3.KfWzn][_0x18f7f3.GzHuy(683641, 683641)];
        var _0xa49c6 = _0x18f7f3.PekDk(_0x18f7f3.aHHjB(544260, 544263), _0x18f7f3.evUmz(341602, 341604));
        const _0x31f0e5 = _0x19c238?.["da".split("").reverse().join("")]?.["creativeId"] ?? _0x19c238?.["creativeId"];
        _0xa49c6 = _0x18f7f3.ibZGh(784648, 784641);
        var _0x3401c6;
        const _0x1da483 = _0x19c238[_0x18f7f3.DTQxl] || "";
        _0x3401c6 = _0x18f7f3.rXqNu(_0x18f7f3.evUmz(638262, 638270), _0x18f7f3.NLWTH(953836, 953839));
        const _0x22d0b9 = _0x1da483[_0x18f7f3.wCvwT]("/")[_0x18f7f3.FEunj(595457, 595456)]?.["split"]("_")?.[_0x18f7f3.evUmz(217221, 217221)] || "";
        if (!_0x31f0e5) {
          console[_0x18f7f3.SPCAN](_0x18f7f3.SYlPq(_0x18f7f3.kxtFN(_0x18f7f3.BnRDx.split("").reverse().join(""), this[_0x18f7f3.tmkZu]()), _0x18f7f3.CThWp.split("").reverse().join("")));
          return null;
        }
        var _0x2b46c4 = _0x18f7f3.YVTvE(_0x18f7f3.FEunj(796967, 796960), _0x18f7f3.DfeSH(922419, 922427));
        const _0x12fe9d = (_0x19c238[_0x18f7f3.zIVvD] || _0x19c238?.["ad"]?.["caption"] || "")[_0x18f7f3.JStbL](_0x18f7f3.KvxWu(243961, 243961), _0x18f7f3.GzHuy(690979, 691005));
        _0x2b46c4 = _0x18f7f3.QBDFF.split("").reverse().join("");
        var _0x388773 = _0x18f7f3.bwRjE(_0x18f7f3.FEunj(195086, 195078), _0x18f7f3.OnJdm(112232, 112234));
        let _0x14a9dc = _0x18f7f3.DfeSH(576858, 576858);
        _0x388773 = _0x18f7f3.PekDk(_0x18f7f3.FEunj(515207, 515207), _0x18f7f3.YwDsz(405009, 405014));
        try {
          if (_0x19c238.ad?.["adDataV2"]?.["inspirePersonalize"]?.["awardValue"]) {
            _0x14a9dc = _0x18f7f3.YqJKk(parseInt, _0x19c238.ad[_0x18f7f3.PrISM][_0x18f7f3.SKLBE][_0x18f7f3.DFTRQ]) || _0x18f7f3.LGKdd(850319, 850319);
          } else {
            if (_0x19c238.ad?.["awardCoin"]) {
              _0x14a9dc = _0x18f7f3.YqJKk(parseInt, _0x19c238.ad[_0x18f7f3.orFYk]) || _0x18f7f3.AjRTo(629192, 629192);
            } else {
              _0x19c238.ad?.["adDataV2"]?.["inspireAdInfo"]?.["neoCount"] && (_0x14a9dc = _0x18f7f3.ONuty(parseInt, _0x19c238.ad[_0x18f7f3.PrISM][_0x18f7f3.czbrT][_0x18f7f3.raQZa]) || _0x18f7f3.KLktz(613298, 613298));
            }
          }
          _0x18f7f3.Dgwwg(_0x14a9dc, _0x18f7f3.evUmz(749519, 749519)) && (console[_0x18f7f3.SPCAN](_0x18f7f3.fHnun(_0x18f7f3.KpHNb(_0x18f7f3.xQlBc, this[_0x18f7f3.tmkZu]()), _0x18f7f3.HjJKU)), console[_0x18f7f3.SPCAN](_0x18f7f3.vbGOF.split("").reverse().join(""), _0x19c238.ad?.["adDataV2"] ? "在存".split("").reverse().join("") : _0x18f7f3.VRQvb), console[_0x18f7f3.SPCAN](_0x18f7f3.MUIog, _0x19c238.ad?.["awardCoin"] || _0x18f7f3.Tyvvv.split("").reverse().join("")), _0x19c238.ad?.["adDataV2"] && (console[_0x18f7f3.SPCAN](_0x18f7f3.zqyMW, _0x19c238.ad[_0x18f7f3.PrISM][_0x18f7f3.SKLBE] ? "在存".split("").reverse().join("") : _0x18f7f3.VRQvb), console[_0x18f7f3.SPCAN](_0x18f7f3.tZByI, _0x19c238.ad[_0x18f7f3.PrISM][_0x18f7f3.czbrT] ? "存在" : _0x18f7f3.VRQvb)));
        } catch (_0x1678ce) {
          console[_0x18f7f3.SPCAN](_0x18f7f3.jUIsb(_0x18f7f3.YVTvE(_0x18f7f3.jUIsb("❌ ", this[_0x18f7f3.tmkZu]()), _0x18f7f3.RizGR), _0x1678ce[_0x18f7f3.wrOVx]));
        }
        _0x18f7f3.Qrrlx(_0x14a9dc, _0x18f7f3.RLWjD(621721, 621721)) ? console[_0x18f7f3.SPCAN](_0x18f7f3.KSzTc(_0x18f7f3.KSzTc(_0x18f7f3.uYuBD(_0x18f7f3.cUeov(_0x18f7f3.kxtFN(_0x18f7f3.KSzTc(_0x18f7f3.baslN, this[_0x18f7f3.tmkZu]()), _0x18f7f3.INTyl.split("").reverse().join("")), _0x18f7f3.EHvLL(_0x12fe9d, _0x18f7f3.uPkFR)), _0x18f7f3.nMACk), _0x14a9dc), _0x18f7f3.igiLp)) : console[_0x18f7f3.SPCAN](_0x18f7f3.uYuBD(_0x18f7f3.BJWZt(_0x18f7f3.cUeov(_0x18f7f3.jUIsb(_0x18f7f3.aNqRl.split("").reverse().join(""), this[_0x18f7f3.tmkZu]()), _0x18f7f3.INTyl.split("").reverse().join("")), _0x18f7f3.EHvLL(_0x12fe9d, _0x18f7f3.uPkFR)), _0x18f7f3.pwkBA));
        return {
          cid: _0x31f0e5,
          llsid: _0x22d0b9
        };
      } else {
        console[_0x18f7f3.SPCAN](_0x18f7f3.VhlBG(_0x18f7f3.VWCvX(_0x18f7f3.QzLUk(_0x18f7f3.ZQOvz(_0x18f7f3.vsybs("❌ ", this[_0x18f7f3.tmkZu]()), _0x18f7f3.QxVri), _0x1c4491?.["error_msg"] || _0x18f7f3.DqRml), _0x18f7f3.QLtGG.split("").reverse().join("")), _0x1c4491?.["result"] || _0x18f7f3.DqRml));
        return null;
      }
    } catch (_0x5ab604) {
      console[_0x18f7f3.SPCAN](_0x18f7f3.PekDk(_0x18f7f3.cUeov(_0x18f7f3.rXqNu("❌ ", this[_0x18f7f3.tmkZu]()), _0x18f7f3.mhQIA.split("").reverse().join("")), _0x5ab604[_0x18f7f3.wrOVx]));
      return null;
    }
  }
  async generateSignature(_0x3f04a8, _0x585f61, _0x200c82, _0x58f8dc) {
    const _0x284443 = {
      kUJfX: "businessId",
      nXtDd: "endTime",
      ZYRcW: "video",
      CzTfB: "requestSceneType",
      Nqlnr: "taskType",
      ClRYj: "pageId",
      MmBoc: function (_0x434f3a, _0x2f2bff) {
        return _0x434f3a ^ _0x2f2bff;
      },
      gwKnj: "posId",
      DGXAy: "startTime",
      vBaHl: "subPageId",
      hKuoY: function (_0x45ddf9, _0x3cd877) {
        return _0x45ddf9 + _0x3cd877;
      },
      bZvxa: function (_0x10efd5, _0x49d761) {
        return _0x10efd5 + _0x49d761;
      },
      hOLTf: function (_0x3738f8, _0x3d4c72) {
        return _0x3738f8 + _0x3d4c72;
      },
      Gtxgv: "bizStr=",
      RjDyv: function (_0x45547d, _0xd42485) {
        return _0x45547d(_0xd42485);
      },
      Rhdtl: "stringify",
      OIOTH: "&cs=false&client_key=2ac2a76d&kuaishou.api_st=",
      sErCZ: "kuaishouApiSt",
      JhhkB: function (_0x17a651, _0x149974) {
        return _0x17a651 + _0x149974;
      },
      gwyPm: function (_0x35f700, _0x504eff) {
        return _0x35f700 ^ _0x504eff;
      },
      rHuIg: function (_0x5e2d8d, _0x32145f) {
        return _0x5e2d8d ^ _0x32145f;
      },
      MTbLG: function (_0x235847, _0x77b61c) {
        return _0x235847 + _0x77b61c;
      },
      sqSCJ: "queryParams",
      njUAr: function (_0x43d38e, _0x3a7b59) {
        return _0x43d38e ^ _0x3a7b59;
      },
      ExcIV: function (_0x130ced, _0x36ae62) {
        return _0x130ced + _0x36ae62;
      },
      XaJtV: function (_0x51881c, _0x42ee9c) {
        return _0x51881c ^ _0x42ee9c;
      },
      WofXg: "requestSignService",
      DJAGZ: "taskReportPath",
      lindM: "salt",
      eShvE: "getAccountDisplayName",
      tpdrK: "名签告报成生 ",
      tkfxH: function (_0x1e8f04, _0x3b7614) {
        return _0x1e8f04 ^ _0x3b7614;
      },
      mbGwc: "sig",
      UQHBW: "__NS_sig3",
      Phctm: "__NStokensig",
      ihQOc: "__NS_xfalc" + "no".split("").reverse().join(""),
      aCWPC: "log",
      KulxC: function (_0x311c17, _0x57d84b) {
        return _0x311c17 + _0x57d84b;
      },
      tCJLd: function (_0x757b16, _0x18c010) {
        return _0x757b16 + _0x18c010;
      },
      feozt: " :常异名签成生 ",
      zKRtW: "message"
    };
    try {
      const _0x1ab531 = {
        businessId: _0x58f8dc[_0x284443.kUJfX],
        endTime: this[_0x284443.nXtDd],
        extParams: "",
        mediaScene: _0x284443.ZYRcW,
        neoInfos: [{
          creativeId: _0x3f04a8,
          extInfo: "",
          llsid: _0x585f61,
          requestSceneType: _0x58f8dc[_0x284443.CzTfB],
          taskType: _0x58f8dc[_0x284443.Nqlnr],
          watchExpId: "",
          watchStage: 0
        }],
        pageId: _0x58f8dc[_0x284443.ClRYj] || _0x284443.MmBoc(795659, 790358),
        posId: _0x58f8dc[_0x284443.gwKnj],
        reportType: 0,
        sessionId: "",
        startTime: this[_0x284443.DGXAy],
        subPageId: _0x58f8dc[_0x284443.vBaHl]
      };
      var _0x500cc6;
      const _0x173bfc = _0x284443.hKuoY(_0x284443.bZvxa(_0x284443.hOLTf(_0x284443.Gtxgv, _0x284443.RjDyv(encodeURIComponent, JSON[_0x284443.Rhdtl](_0x1ab531))), _0x284443.OIOTH), this[_0x284443.sErCZ]);
      _0x500cc6 = _0x284443.MmBoc(615118, 615112);
      var _0x56b495 = _0x284443.JhhkB(_0x284443.gwyPm(120483, 120490), _0x284443.rHuIg(517712, 517718));
      const _0x538268 = _0x284443.MTbLG(_0x284443.hOLTf(this[_0x284443.sqSCJ], "&"), _0x173bfc);
      _0x56b495 = _0x284443.bZvxa(_0x284443.gwyPm(136817, 136816), _0x284443.njUAr(632763, 632761));
      var _0x49a79e = _0x284443.ExcIV(_0x284443.XaJtV(696686, 696678), _0x284443.njUAr(655371, 655371));
      const _0x29933c = await this[_0x284443.WofXg]({
        urlpath: this[_0x284443.DJAGZ],
        reqdata: _0x538268,
        api_client_salt: this[_0x284443.lindM]
      }, _0x284443.bZvxa(this[_0x284443.eShvE](), _0x284443.tpdrK.split("").reverse().join("")));
      _0x49a79e = _0x284443.tkfxH(398895, 398891);
      if (!_0x29933c) {
        return null;
      }
      return {
        sig: _0x29933c[_0x284443.mbGwc],
        sig3: _0x29933c[_0x284443.UQHBW],
        sigtoken: _0x29933c[_0x284443.Phctm],
        xfalcon: _0x29933c[_0x284443.ihQOc] || "",
        post: _0x173bfc
      };
    } catch (_0x48f4a6) {
      console[_0x284443.aCWPC](_0x284443.KulxC(_0x284443.MTbLG(_0x284443.tCJLd(" ❌".split("").reverse().join(""), this[_0x284443.eShvE]()), _0x284443.feozt.split("").reverse().join("")), _0x48f4a6[_0x284443.zKRtW]));
      return null;
    }
  }
  async submitReport(_0x2ee11c, _0x553eb9, _0x3b78b9, _0x589d35, _0x55276a, _0x21f074, _0x3c188b) {
    try {
      const _0x3468d8 = "//:sptth".split("").reverse().join("") + API_CONFIG.AD_API_DOMAIN + this.taskReportPath + "?" + (this.queryParams + "&sig=" + _0x2ee11c + "&__NS_sig3=" + _0x553eb9 + "=noclafx_SN__&".split("").reverse().join("") + (_0x589d35 || "") + "&__NStokensig=" + _0x3b78b9),
        {
          response: _0x1edd5f,
          body: _0x2214e5
        } = await sendRequest({
          method: "POST",
          url: _0x3468d8,
          headers: {
            "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
            Host: API_CONFIG.AD_API_DOMAIN,
            "User-Agent": "kwai-android aegon/3.56.0"
          },
          body: _0x55276a,
          timeout: 12000
        }, this.proxyUrl, "账号[" + this.nickname + "]" + (this.remark ? "（" + this.remark + "）" : "") + "务任交提 ".split("").reverse().join(""));
      if (!_0x2214e5) {
        return {
          success: false,
          reward: 0,
          shouldRetry: false
        };
      }
      if (_0x2214e5.result === 1) {
        const _0x54e11d = _0x2214e5.data?.["neoAmount"] || 0;
        if (_0x54e11d <= this.lowRewardThreshold) {
          this.lowRewardStreak++;
          if (ENABLE_CHANGE_DID) {
            var _0x1824a3 = 10;
            const _0x3ce278 = generateDeviceId();
            _0x1824a3 = 0;
            this.did = _0x3ce278;
            this.queryParams = "=revppa&)11 IM(imoaiX=dom".split("").reverse().join("") + this.appver + "=dige&".split("").reverse().join("") + this.egid + "&did=" + _0x3ce278;
            console.log("🔄 " + this.getAccountDisplayName() + " :DI备设新更已，发触励奖低 ".split("").reverse().join("") + _0x3ce278);
          } else {
            console.log(" ��".split("").reverse().join("") + this.getAccountDisplayName() + " 低奖励触发，但当前已关闭自动更换did");
          }
          console.log("⚠️ " + this.getAccountDisplayName() + " 金币奖励(" + _0x54e11d + ")低于或等于阈值(" + this.lowRewardThreshold + ")，等待30秒后重试，当前连续低奖励次数：(" + this.lowRewardStreak + ")/" + this.lowRewardLimit);
          await new Promise(_0x223dcb => setTimeout(_0x223dcb, 30000));
          if (this.lowRewardStreak >= this.lowRewardLimit) {
            console.log("🏁 " + this.getAccountDisplayName() + "续连 ".split("").reverse().join("") + this.lowRewardLimit + "≤励奖次".split("").reverse().join("") + this.lowRewardThreshold + "务任部全止停，".split("").reverse().join(""));
            this.stopAllTasks = true;
            return {
              success: false,
              reward: 0,
              shouldRetry: false
            };
          }
          return {
            success: true,
            reward: _0x54e11d,
            shouldRetry: false
          };
        } else {
          this.lowRewardStreak > 0 && (console.log("✅ " + this.getAccountDisplayName() + "(励奖 ".split("").reverse().join("") + _0x54e11d + ")恢复正常，重置低奖励计数"), this.lowRewardStreak = 0);
          return {
            success: true,
            reward: _0x54e11d,
            shouldRetry: false
          };
        }
      }
      if ([20107, 20108, 1003, 415].includes(_0x2214e5.result)) {
        console.log(" ️⚠".split("").reverse().join("") + this.getAccountDisplayName() + " " + _0x3c188b.name + "限上达已 ".split("").reverse().join(""));
        this.taskLimitReached[_0x21f074] = true;
        return {
          success: false,
          reward: 0
        };
      }
      return {
        success: false,
        reward: 0
      };
    } catch (_0x2bf30c) {
      return {
        success: false,
        reward: 0
      };
    }
  }
  async getSign(_0xdc46b4) {
    const _0x2d509c = 3;
    for (let _0x1190b4 = 1; _0x1190b4 <= _0x2d509c; _0x1190b4++) {
      try {
        const _0x4321f6 = JSON.stringify({
            type: "encsign",
            data: _0xdc46b4,
            ud: this.userId || "",
            script_version: SCRIPT_VERSION
          }),
          {
            response: _0x2900d3,
            body: _0x35cdd8
          } = await sendRequest({
            method: "POST",
            url: API_CONFIG.SIGN_API_URL + "ngiscne/".split("").reverse().join(""),
            body: _0x4321f6,
            headers: {
              "Content-Type": "application/json"
            },
            timeout: 30000
          }, this.proxyUrl, this.getAccountDisplayName() + "名签ngiscne ".split("").reverse().join(""));
        if (!_0x2900d3) {
          if (_0x1190b4 < _0x2d509c) {
            continue;
          } else {
            console.log("❌ " + this.getAccountDisplayName() + "败失求请名签 ".split("").reverse().join(""));
            return null;
          }
        }
        if (!_0x35cdd8) {
          if (_0x1190b4 < _0x2d509c) {
            continue;
          } else {
            console.log("❌ " + this.getAccountDisplayName() + "空为应响名签 ".split("").reverse().join(""));
            return null;
          }
        }
        if (_0x35cdd8 && _0x35cdd8.status) {
          let _0x4750c5 = _0x35cdd8.data;
          if (typeof _0x4750c5 === "string") {
            try {
              _0x4750c5 = JSON.parse(_0x4750c5);
            } catch (_0x5d052a) {
              if (_0x1190b4 < _0x2d509c) {
                continue;
              } else {
                console.log("❌ " + this.getAccountDisplayName() + "败失据数名签析解 ".split("").reverse().join(""));
                return null;
              }
            }
          }
          return _0x4750c5;
        } else {
          _0x1190b4 >= _0x2d509c && console.log("❌ " + this.getAccountDisplayName() + " :误错回返务服名签 ".split("").reverse().join("") + (_0x35cdd8?.["message"] || "未知错误"));
          if (_0x1190b4 < _0x2d509c) {
            continue;
          } else {
            return null;
          }
        }
      } catch (_0x3bb86b) {
        _0x1190b4 >= _0x2d509c && console.log(" ❌".split("").reverse().join("") + this.getAccountDisplayName() + " 签名请求异常: " + _0x3bb86b.message);
        if (_0x1190b4 < _0x2d509c) {
          continue;
        } else {
          return null;
        }
      }
      _0x1190b4 < _0x2d509c && (await new Promise(_0xda18a => setTimeout(_0xda18a, 2000)));
    }
    console.log("❌ " + this.getAccountDisplayName() + " 签名获取失败，已达最大重试次数");
    return null;
  }
  async requestSignService(_0x16ffcb, _0x17df98) {
    var _0x1ad16a = 8;
    const _0x42182b = 3;
    _0x1ad16a = 16;
    for (let _0x42ee16 = 1; _0x42ee16 <= _0x42182b; _0x42ee16++) {
      try {
        var _0xcd8b28;
        const _0x311b29 = getOrCreateDeviceId();
        _0xcd8b28 = 6;
        var _0x4adcc3 = 2;
        const _0xc4257 = JSON.stringify({
          type: "nssig",
          path: _0x16ffcb.urlpath,
          data: _0x16ffcb.reqdata,
          salt: _0x16ffcb.api_client_salt,
          ud: this.userId || "",
          script_version: SCRIPT_VERSION,
          device_id: _0x311b29
        });
        _0x4adcc3 = 16;
        const {
          response: _0x4de619,
          body: _0x4c09a3
        } = await sendRequest({
          method: "POST",
          url: API_CONFIG.SIGN_API_URL + "gissn/".split("").reverse().join(""),
          headers: {
            "Content-Type": "application/json",
            "User-Agent": "Mozilla/5.0"
          },
          body: _0xc4257,
          timeout: 15000
        }, this.proxyUrl, _0x17df98 + "（签名服务）");
        if (!_0x4c09a3) {
          if (_0x42ee16 < _0x42182b) {
            continue;
          } else {
            console.log("❌ " + this.getAccountDisplayName() + " " + _0x17df98 + "空为应响名签 ".split("").reverse().join(""));
            return null;
          }
        }
        if (_0x4c09a3 && _0x4c09a3.status) {
          let _0x4fd976 = _0x4c09a3.data;
          if (typeof _0x4fd976 === "gnirts".split("").reverse().join("")) {
            try {
              _0x4fd976 = JSON.parse(_0x4fd976);
            } catch (_0x170990) {
              if (_0x42ee16 < _0x42182b) {
                continue;
              } else {
                console.log("❌ " + this.getAccountDisplayName() + " " + _0x17df98 + "败失据数名签析解 ".split("").reverse().join(""));
                return null;
              }
            }
          }
          let _0x262647 = _0x4fd976;
          _0x4fd976.data && typeof _0x4fd976.data === "object" && (_0x262647 = _0x4fd976.data);
          let _0xc67f71 = _0x262647.nssig3 || _0x262647.__NS_sig3;
          var _0x5d3d2b = 5;
          let _0x442b2b = _0x262647.nstokensig || _0x262647.__NStokensig;
          _0x5d3d2b = 7;
          let _0x104c16 = _0x262647.xfalcon || _0x262647.nssig4 || _0x262647.__NS_xfalcon || "";
          var _0x28817f;
          let _0x1b5353 = _0x262647.sig;
          _0x28817f = 8;
          return {
            __NS_sig3: _0xc67f71,
            __NStokensig: _0x442b2b,
            sig: _0x1b5353,
            __NS_xfalcon: _0x104c16
          };
        }
        _0x42ee16 >= _0x42182b && console.log(" ❌".split("").reverse().join("") + this.getAccountDisplayName() + " " + _0x17df98 + "败失名签 ".split("").reverse().join(""));
        if (_0x42ee16 < _0x42182b) {
          continue;
        } else {
          return null;
        }
      } catch (_0x195445) {
        _0x42ee16 >= _0x42182b && console.log("❌ " + this.getAccountDisplayName() + " " + _0x17df98 + " 签名异常: " + _0x195445.message);
        if (_0x42ee16 < _0x42182b) {
          continue;
        } else {
          return null;
        }
      }
    }
    console.log(" ❌".split("").reverse().join("") + this.getAccountDisplayName() + " " + _0x17df98 + " 签名失败，已达最大重试次数");
    return null;
  }
  async executeTask(_0x3daafc) {
    if (!this.tasksToExecute.includes(_0x3daafc)) {
      return false;
    }
    var _0x1a3834;
    const _0x123364 = this.taskConfigs[_0x3daafc];
    _0x1a3834 = "mielfk".split("").reverse().join("");
    if (!_0x123364) {
      console.log(" ❌".split("").reverse().join("") + this.getAccountDisplayName() + " 未知任务: " + _0x3daafc);
      return false;
    }
    if (this.taskLimitReached[_0x3daafc]) {
      return false;
    }
    try {
      var _0x2eac1b = 4;
      const _0x1fa805 = await getAccountBasicInfo(this.getCookieWithCurrentDid(), this.proxyUrl, this.index);
      _0x2eac1b = 8;
      var _0x2a0f6e = 5;
      const _0x280690 = _0x1fa805?.["totalCoin"] || 0;
      _0x2a0f6e = 6;
      let _0x354f7f;
      var _0x4dcbed = 11;
      let _0x27542a = 0;
      _0x4dcbed = 9;
      const _0x419a35 = 3;
      while (_0x27542a < _0x419a35) {
        const _0xf3993d = await this.getAdInfo(_0x123364);
        if (_0xf3993d && _0xf3993d.needsNewDid) {
          this.needsNewDid = true;
          _0x27542a++;
          console.log(" ��".split("").reverse().join("") + this.getAccountDisplayName() + " 正在更新设备ID并重试获取广告 (" + _0x27542a + "/" + _0x419a35 + ")");
          continue;
        } else {
          if (_0xf3993d) {
            _0x354f7f = _0xf3993d;
            break;
          } else {
            _0x27542a++;
            if (_0x27542a >= _0x419a35) {
              console.log("❌ " + this.getAccountDisplayName() + " 获取" + _0x123364.name + "败失息信".split("").reverse().join(""));
              this.taskStats[_0x3daafc].failed++;
              return false;
            }
            await new Promise(_0x5409ee => setTimeout(_0x5409ee, 2000));
          }
        }
      }
      if (!_0x354f7f) {
        this.taskStats[_0x3daafc].failed++;
        return false;
      }
      var _0x48c0ed = 15;
      const _0x3042c2 = Math.floor(Math.random() * (WATCH_AD_MAX - WATCH_AD_MIN + 1)) + WATCH_AD_MIN;
      _0x48c0ed = 4;
      console.log("⏱️ " + this.getAccountDisplayName() + " " + _0x123364.name + " 等待 " + _0x3042c2 + " 秒后继续");
      await new Promise(_0x2784ea => setTimeout(_0x2784ea, _0x3042c2 * 1000));
      var _0x24b8fb = 9;
      const _0x541380 = await this.generateSignature(_0x354f7f.cid, _0x354f7f.llsid, _0x3daafc, _0x123364);
      _0x24b8fb = 9;
      if (!_0x541380) {
        this.taskStats[_0x3daafc].failed++;
        console.log("❌ " + this.getAccountDisplayName() + " 生成签名失败，本次" + _0x123364.name + "励奖得获未".split("").reverse().join(""));
        return false;
      }
      var _0x44eaa6;
      let _0x5666f3;
      _0x44eaa6 = 11;
      let _0x4c0ddc = 0;
      while (_0x4c0ddc < 3) {
        _0x5666f3 = await this.submitReport(_0x541380.sig, _0x541380.sig3, _0x541380.sigtoken, _0x541380.xfalcon || "", _0x541380.post, _0x3daafc, _0x123364);
        if (_0x5666f3?.["success"] || !_0x5666f3?.["shouldRetry"]) {
          break;
        }
        _0x4c0ddc++;
        _0x5666f3.shouldRetry && (await new Promise(_0x2992eb => setTimeout(_0x2992eb, 30000)), console.log(" ��".split("").reverse().join("") + this.getAccountDisplayName() + " 准备重试 (" + _0x4c0ddc + "/3)"));
      }
      if (_0x5666f3?.["success"]) {
        this.taskStats[_0x3daafc].success++;
        this.taskStats[_0x3daafc].totalReward += _0x5666f3.reward || 0;
        const _0x13379c = await getAccountBasicInfo(this.getCookieWithCurrentDid(), this.proxyUrl, this.index),
          _0x19176b = _0x13379c?.["totalCoin"] || _0x280690,
          _0x45cb8f = _0x5666f3.reward || 0;
        var _0x21f341;
        const _0x4bc97f = this.remark || this.nickname || "备注";
        _0x21f341 = 6;
        let _0x108abb = "获取到广告",
          _0x5b63a6 = colors.bright + colors.cyan;
        switch (_0x3daafc) {
          case "xobk".split("").reverse().join(""):
            _0x108abb = "箱宝到取获".split("").reverse().join("");
            _0x5b63a6 = colors.bright + colors.magenta;
            break;
          case "box":
            _0x108abb = "告广箱宝到取获".split("").reverse().join("");
            _0x5b63a6 = colors.bright + colors.blue;
            break;
          case "food":
            _0x108abb = "告广补饭到取获".split("").reverse().join("");
            _0x5b63a6 = colors.bright + colors.green;
            break;
          case "wollof_kool".split("").reverse().join(""):
            _0x108abb = "告广加追取获".split("").reverse().join("");
            _0x5b63a6 = colors.bright + colors.yellow;
            break;
          case "wollof_hcraes".split("").reverse().join(""):
            _0x108abb = "告广加追索搜到取获".split("").reverse().join("");
            _0x5b63a6 = colors.bright + colors.yellow;
            break;
          case "look":
            _0x108abb = "获取到广告";
            _0x5b63a6 = colors.bright + colors.cyan;
            break;
          case "hcraes".split("").reverse().join(""):
            _0x108abb = "告广索搜到取获".split("").reverse().join("");
            _0x5b63a6 = colors.bright + colors.cyan;
            break;
        }
        const _0x476336 = this.taskStats[_0x3daafc].success,
          _0x47abd2 = this.getTaskTotalCount(_0x3daafc);
        var _0x2cadc4 = 10;
        const _0x25d17f = _0x45cb8f >= 100 ? colors.bright + colors.red + "💰[高额奖励]" + colors.reset : colors.bright + colors.green + "💰[奖励]" + colors.reset;
        _0x2cadc4 = 9;
        const _0x2ebe6c = formatTag(_0x4bc97f),
          _0xe3d8d2 = colorText(_0x108abb, _0x5b63a6);
        console.log(_0x25d17f + " " + _0x2ebe6c + " " + _0xe3d8d2 + "第（".split("").reverse().join("") + _0x476336 + "/" + _0x47abd2 + "次）==>" + formatWarning(_0x45cb8f) + "金币 —— 当前金币 " + formatSuccess(_0x19176b));
        return true;
      }
      this.taskStats[_0x3daafc].failed++;
      if (this.taskLimitReached[_0x3daafc]) {
        console.log(" ️⚠".split("").reverse().join("") + this.getAccountDisplayName() + " " + _0x123364.name + "励奖得获未次本，限上达已 ".split("").reverse().join(""));
      } else {
        _0x5666f3 ? console.log("❌ " + this.getAccountDisplayName() + " 提交" + _0x123364.name + "失败，本次未获得奖励") : console.log("❌ " + this.getAccountDisplayName() + " 提交" + _0x123364.name + "励奖得获未次本，）常异器务服或络网（败失".split("").reverse().join(""));
      }
      return false;
    } catch (_0x3da9cf) {
      this.taskStats[_0x3daafc].failed++;
      return false;
    }
  }
  async executeAllTasksByPriority() {
    const _0x3082bd = {
      VCUct: "log",
      aKggM: function (_0x24e794, _0x3b9d57) {
        return _0x24e794 + _0x3b9d57;
      },
      rMuVu: "🔀 ",
      XZlQN: "getAccountDisplayName",
      jKZqR: " 任务执行顺序: ",
      pEwQb: "tasksToExecute",
      KzOEf: "join",
      VbLom: " → ",
      oEIBZ: "stopAllTas" + "sk".split("").reverse().join(""),
      czIMy: function (_0x59a293, _0x5457d1) {
        return _0x59a293 + _0x5457d1;
      },
      ufOic: " ��",
      FzIXI: " 已停止所有任务",
      FGexB: "taskLimitReached",
      TVCDa: function (_0x356289, _0x322184) {
        return _0x356289 + _0x322184;
      },
      RweOJ: " ️⏭",
      lvOvd: "taskConfigs",
      rSdwr: "过跳，限上达已 ",
      rATYY: function (_0x33701e, _0x2eca6e) {
        return _0x33701e + _0x2eca6e;
      },
      oEPQs: function (_0x36b568, _0x537a6b) {
        return _0x36b568 + _0x537a6b;
      },
      UCroa: "🚀 ",
      mIqCo: " :行执始开 ",
      ezGek: "look",
      xmQxf: "executeLookTasks",
      LtuBl: "search",
      DcvPF: "executeSearchTasks",
      xBuPk: "box",
      NCfSm: "executeBoxTasks",
      xgzOJ: "food",
      SyTuX: "executeFoodTasks",
      tlPNu: "xobk",
      lhhZx: "executeKboxTasks",
      sNdWv: "wollof_kool",
      TbZrY: function (_0x17a57a, _0xd4040) {
        return _0x17a57a + _0xd4040;
      },
      cirpP: "ℹ️ ",
      xRltq: " look_follow 将在 look 任务成功后自动执行",
      GWwlW: "search_follow",
      NYXvg: function (_0x19b4e9, _0x9185ab) {
        return _0x19b4e9 + _0x9185ab;
      },
      DvOSN: "行执动自后功成务任 hcraes 在将 wollof_hcraes ",
      EPAKa: function (_0x2f3b6e, _0x52da01) {
        return _0x2f3b6e + _0x52da01;
      },
      VPTff: function (_0x631f7d, _0x523443) {
        return _0x631f7d + _0x523443;
      },
      BYshq: " 未知任务类型: ",
      edGkz: function (_0x281aea, _0x41d0c7) {
        return _0x281aea === _0x41d0c7;
      },
      Jkhyp: function (_0x4f022f, _0x51bf9e) {
        return _0x4f022f - _0x51bf9e;
      },
      eyAfY: "length",
      SBqhl: function (_0x4df734, _0x2a8316) {
        return _0x4df734 ^ _0x2a8316;
      },
      KJyKc: function (_0x45676a, _0x100a22) {
        return _0x45676a ^ _0x100a22;
      },
      MIIUn: function (_0x5814dc, _0x439a11) {
        return _0x5814dc * _0x439a11;
      },
      FGTGG: "floor",
      nAclu: function (_0x2640ba, _0x9aaa86) {
        return _0x2640ba * _0x9aaa86;
      },
      ZjmGW: "random",
      nhopj: function (_0x296d6f, _0x428863) {
        return _0x296d6f + _0x428863;
      },
      zROck: function (_0x2d4e83, _0x55d412) {
        return _0x2d4e83 ^ _0x55d412;
      },
      lFfIE: " 任务切换 等待 ",
      VTsLC: "round",
      rzMpD: function (_0x2eeb71, _0x2309af) {
        return _0x2eeb71 / _0x2309af;
      },
      SHUtL: function (_0x23a4de, _0x2264de) {
        return _0x23a4de + _0x2264de;
      },
      epxnt: " 所有任务执行完成"
    };
    console[_0x3082bd.VCUct](_0x3082bd.aKggM(_0x3082bd.aKggM(_0x3082bd.aKggM(_0x3082bd.rMuVu, this[_0x3082bd.XZlQN]()), _0x3082bd.jKZqR), this[_0x3082bd.pEwQb][_0x3082bd.KzOEf](_0x3082bd.VbLom)));
    for (const _0x3aa35f of this[_0x3082bd.pEwQb]) {
      if (this[_0x3082bd.oEIBZ]) {
        console[_0x3082bd.VCUct](_0x3082bd.aKggM(_0x3082bd.czIMy(_0x3082bd.ufOic.split("").reverse().join(""), this[_0x3082bd.XZlQN]()), _0x3082bd.FzIXI));
        break;
      }
      if (this[_0x3082bd.FGexB][_0x3aa35f]) {
        console[_0x3082bd.VCUct](_0x3082bd.TVCDa(_0x3082bd.czIMy(_0x3082bd.TVCDa(_0x3082bd.TVCDa(_0x3082bd.RweOJ.split("").reverse().join(""), this[_0x3082bd.XZlQN]()), " "), this[_0x3082bd.lvOvd][_0x3aa35f]?.["name"]), _0x3082bd.rSdwr.split("").reverse().join("")));
        continue;
      }
      console[_0x3082bd.VCUct](_0x3082bd.czIMy(_0x3082bd.rATYY(_0x3082bd.oEPQs(_0x3082bd.UCroa, this[_0x3082bd.XZlQN]()), _0x3082bd.mIqCo.split("").reverse().join("")), this[_0x3082bd.lvOvd][_0x3aa35f]?.["name"]));
      switch (_0x3aa35f) {
        case _0x3082bd.ezGek:
          await this[_0x3082bd.xmQxf]();
          break;
        case _0x3082bd.LtuBl:
          await this[_0x3082bd.DcvPF]();
          break;
        case _0x3082bd.xBuPk:
          await this[_0x3082bd.NCfSm]();
          break;
        case _0x3082bd.xgzOJ:
          await this[_0x3082bd.SyTuX]();
          break;
        case _0x3082bd.tlPNu.split("").reverse().join(""):
          await this[_0x3082bd.lhhZx]();
          break;
        case _0x3082bd.sNdWv.split("").reverse().join(""):
          console[_0x3082bd.VCUct](_0x3082bd.TbZrY(_0x3082bd.aKggM(_0x3082bd.cirpP, this[_0x3082bd.XZlQN]()), _0x3082bd.xRltq));
          break;
        case _0x3082bd.GWwlW:
          console[_0x3082bd.VCUct](_0x3082bd.NYXvg(_0x3082bd.czIMy(_0x3082bd.cirpP, this[_0x3082bd.XZlQN]()), _0x3082bd.DvOSN.split("").reverse().join("")));
          break;
        default:
          console[_0x3082bd.VCUct](_0x3082bd.EPAKa(_0x3082bd.rATYY(_0x3082bd.VPTff("❌ ", this[_0x3082bd.XZlQN]()), _0x3082bd.BYshq), _0x3aa35f));
      }
      const _0x4ea6c6 = _0x3082bd.edGkz(_0x3aa35f, this[_0x3082bd.pEwQb][_0x3082bd.Jkhyp(this[_0x3082bd.pEwQb][_0x3082bd.eyAfY], _0x3082bd.SBqhl(392586, 392587))]);
      if (!_0x4ea6c6 && !this[_0x3082bd.oEIBZ] && !this[_0x3082bd.FGexB][_0x3aa35f]) {
        var _0x1c512b = _0x3082bd.oEPQs(_0x3082bd.KJyKc(610989, 610990), _0x3082bd.SBqhl(259075, 259074));
        const _0xb43b7 = _0x3082bd.MIIUn(_0x3082bd.TbZrY(Math[_0x3082bd.FGTGG](_0x3082bd.nAclu(Math[_0x3082bd.ZjmGW](), _0x3082bd.TVCDa(_0x3082bd.Jkhyp(TASK_SWITCH_MAX, TASK_SWITCH_MIN), _0x3082bd.SBqhl(431960, 431961)))), TASK_SWITCH_MIN), _0x3082bd.KJyKc(346213, 347021));
        _0x1c512b = _0x3082bd.nhopj(_0x3082bd.KJyKc(695831, 695825), _0x3082bd.zROck(139853, 139844));
        console[_0x3082bd.VCUct](_0x3082bd.rATYY(_0x3082bd.VPTff(_0x3082bd.oEPQs(_0x3082bd.TVCDa("⏱ ", this[_0x3082bd.XZlQN]()), _0x3082bd.lFfIE), Math[_0x3082bd.VTsLC](_0x3082bd.rzMpD(_0xb43b7, _0x3082bd.KJyKc(609970, 609626)))), " 秒"));
        await new Promise(_0x13cf00 => setTimeout(_0x13cf00, _0xb43b7));
      }
    }
    console[_0x3082bd.VCUct](_0x3082bd.SHUtL(_0x3082bd.VPTff("✅ ", this[_0x3082bd.XZlQN]()), _0x3082bd.epxnt));
    return {};
  }
  async executeLookTasks() {
    console.log("📺 " + this.getAccountDisplayName() + " 行执划计，务任告广看行执始开 ".split("").reverse().join("") + LOOK_COUNT + "次 ".split("").reverse().join(""));
    for (let _0x329903 = 0; _0x329903 < LOOK_COUNT; _0x329903++) {
      if (this.stopAllTasks || this.taskLimitReached.look) {
        console.log("🛑 " + this.getAccountDisplayName() + " 看广告任务已停止");
        break;
      }
      var _0x3f6112 = 14;
      const _0x6df765 = _0x329903 + 1;
      _0x3f6112 = 5;
      console.log("🔍 " + this.getAccountDisplayName() + "第 务任告广看 ".split("").reverse().join("") + _0x6df765 + "/" + LOOK_COUNT + "次 ".split("").reverse().join(""));
      const _0x174ae2 = await this.executeTask("kool".split("").reverse().join(""));
      if (_0x174ae2 && this.tasksToExecute.includes("wollof_kool".split("").reverse().join("")) && !this.stopAllTasks && !this.taskLimitReached.look_follow && FOLLOW_COUNT > 0) {
        const _0x4ae805 = (Math.floor(Math.random() * (PRE_LOOK_FOLLOW_MAX - PRE_LOOK_FOLLOW_MIN + 1)) + PRE_LOOK_FOLLOW_MIN) * 1000;
        console.log("⏱ " + this.getAccountDisplayName() + " 待等 wollof_kool→kool ".split("").reverse().join("") + Math.round(_0x4ae805 / 1000) + "秒 ".split("").reverse().join(""));
        await new Promise(_0xb709c3 => setTimeout(_0xb709c3, _0x4ae805));
        console.log("🔄 " + this.getAccountDisplayName() + " 开始执行追加看广告任务，计划执行 " + FOLLOW_COUNT + " 次");
        for (let _0x350925 = 0; _0x350925 < FOLLOW_COUNT; _0x350925++) {
          if (this.stopAllTasks || this.taskLimitReached.look_follow) {
            console.log(" ��".split("").reverse().join("") + this.getAccountDisplayName() + " 追加看广告任务已停止");
            break;
          }
          const _0x3d79a5 = _0x350925 + 1;
          console.log("📱 " + this.getAccountDisplayName() + " 追加看广告 第" + _0x3d79a5 + "/" + FOLLOW_COUNT + "次 ".split("").reverse().join(""));
          await this.executeTask("look_follow");
          if (_0x350925 < FOLLOW_COUNT - 1 && !this.stopAllTasks && !this.taskLimitReached.look_follow) {
            var _0x62b59;
            const _0x2b9831 = (Math.floor(Math.random() * (BETWEEN_LOOK_FOLLOW_MAX - BETWEEN_LOOK_FOLLOW_MIN + 1)) + BETWEEN_LOOK_FOLLOW_MIN) * 1000;
            _0x62b59 = 11;
            console.log(" ⏱".split("").reverse().join("") + this.getAccountDisplayName() + " look_follow 间隔 等待 " + Math.round(_0x2b9831 / 1000) + " 秒");
            await new Promise(_0x4682ce => setTimeout(_0x4682ce, _0x2b9831));
          }
        }
      }
      if (_0x329903 < LOOK_COUNT - 1 && !this.stopAllTasks && !this.taskLimitReached.look) {
        var _0x68fff2 = 9;
        const _0x93f8b6 = (Math.floor(Math.random() * (ROUND_END_MAX - ROUND_END_MIN + 1)) + ROUND_END_MIN) * 1000;
        _0x68fff2 = 13;
        console.log(" ⏱".split("").reverse().join("") + this.getAccountDisplayName() + " 待等 隔间 kool ".split("").reverse().join("") + Math.round(_0x93f8b6 / 1000) + "秒 ".split("").reverse().join(""));
        await new Promise(_0x2d6c19 => setTimeout(_0x2d6c19, _0x93f8b6));
      }
    }
    console.log("✅ " + this.getAccountDisplayName() + " 看广告任务执行完成");
  }
  async executeSearchTasks() {
    console.log(" ��".split("").reverse().join("") + this.getAccountDisplayName() + " 开始执行搜索任务，计划执行 " + SEARCH_COUNT + "次 ".split("").reverse().join(""));
    for (let _0x1bc760 = 0; _0x1bc760 < SEARCH_COUNT; _0x1bc760++) {
      if (this.stopAllTasks || this.taskLimitReached.search) {
        console.log(" ��".split("").reverse().join("") + this.getAccountDisplayName() + " 搜索任务已停止");
        break;
      }
      const _0x2797a3 = _0x1bc760 + 1;
      console.log("🔍 " + this.getAccountDisplayName() + "第 务任索搜 ".split("").reverse().join("") + _0x2797a3 + "/" + SEARCH_COUNT + " 次");
      const _0x4cc6c5 = await this.executeTask("search");
      if (_0x4cc6c5 && this.tasksToExecute.includes("wollof_hcraes".split("").reverse().join("")) && !this.stopAllTasks && !this.taskLimitReached.search_follow && SEARCH_FOLLOW_COUNT > 0) {
        const _0x1726a5 = (Math.floor(Math.random() * (PRE_SEARCH_FOLLOW_MAX - PRE_SEARCH_FOLLOW_MIN + 1)) + PRE_SEARCH_FOLLOW_MIN) * 1000;
        console.log("⏱ " + this.getAccountDisplayName() + " search→search_follow 等待 " + Math.round(_0x1726a5 / 1000) + " 秒");
        await new Promise(_0x824eb => setTimeout(_0x824eb, _0x1726a5));
        console.log(" ��".split("").reverse().join("") + this.getAccountDisplayName() + " 开始执行搜索追加任务，计划执行 " + SEARCH_FOLLOW_COUNT + "次 ".split("").reverse().join(""));
        for (let _0x32cdd9 = 0; _0x32cdd9 < SEARCH_FOLLOW_COUNT; _0x32cdd9++) {
          if (this.stopAllTasks || this.taskLimitReached.search_follow) {
            console.log("🛑 " + this.getAccountDisplayName() + " 搜索追加任务已停止");
            break;
          }
          const _0x20a368 = _0x32cdd9 + 1;
          console.log(" ��".split("").reverse().join("") + this.getAccountDisplayName() + "第 加追索搜 ".split("").reverse().join("") + _0x20a368 + "/" + SEARCH_FOLLOW_COUNT + " 次");
          this.adAdditionalNum++;
          await this.executeTask("search_follow");
          this.adAdditionalNum = 0;
          if (_0x32cdd9 < SEARCH_FOLLOW_COUNT - 1 && !this.stopAllTasks && !this.taskLimitReached.search_follow) {
            const _0x3d8e3d = (Math.floor(Math.random() * (BETWEEN_SEARCH_FOLLOW_MAX - BETWEEN_SEARCH_FOLLOW_MIN + 1)) + BETWEEN_SEARCH_FOLLOW_MIN) * 1000;
            console.log(" ⏱".split("").reverse().join("") + this.getAccountDisplayName() + " search_follow 间隔 等待 " + Math.round(_0x3d8e3d / 1000) + "秒 ".split("").reverse().join(""));
            await new Promise(_0x42e627 => setTimeout(_0x42e627, _0x3d8e3d));
          }
        }
      }
      if (_0x1bc760 < SEARCH_COUNT - 1 && !this.stopAllTasks && !this.taskLimitReached.search) {
        const _0x4a8fc9 = (Math.floor(Math.random() * (ROUND_END_MAX - ROUND_END_MIN + 1)) + ROUND_END_MIN) * 1000;
        console.log("⏱ " + this.getAccountDisplayName() + " 待等 隔间 hcraes ".split("").reverse().join("") + Math.round(_0x4a8fc9 / 1000) + " 秒");
        await new Promise(_0x12f70e => setTimeout(_0x12f70e, _0x4a8fc9));
      }
    }
    console.log(" ✅".split("").reverse().join("") + this.getAccountDisplayName() + " 搜索任务执行完成");
  }
  async executeBoxTasks() {
    const _0x22747e = {
      ErMfZ: "log",
      PaeuM: function (_0x5f0ce2, _0x2897d2) {
        return _0x5f0ce2 + _0x2897d2;
      },
      zpSWp: function (_0x35568f, _0x4b6e58) {
        return _0x35568f + _0x4b6e58;
      },
      vdeje: "🎁 ",
      iwFum: "getAccountDisplayName",
      dGGnE: " 开始执行宝箱任务，计划执行 ",
      YDakn: function (_0x44a008, _0x45c18a) {
        return _0x44a008 ^ _0x45c18a;
      },
      dfKwW: function (_0x4d894f, _0x262316) {
        return _0x4d894f < _0x262316;
      },
      VhxKq: "stopAllTas" + "sk".split("").reverse().join(""),
      AEUwQ: "taskLimitReached",
      Nplvh: "box",
      gKMvh: function (_0x4572b6, _0x12cd80) {
        return _0x4572b6 + _0x12cd80;
      },
      wnIPj: "🛑 ",
      APlPU: " 宝箱任务已停止",
      BPuGi: function (_0x1b506a, _0x819000) {
        return _0x1b506a ^ _0x819000;
      },
      yeZuX: function (_0x4451aa, _0x415514) {
        return _0x4451aa + _0x415514;
      },
      MOhUa: function (_0x4abeb2, _0x545d62) {
        return _0x4abeb2 + _0x545d62;
      },
      bMKdz: "🔍 ",
      eMLXU: "第 务任箱宝 ",
      SHSCd: "executeTask",
      rWotX: function (_0x1f7364, _0x316eae) {
        return _0x1f7364 < _0x316eae;
      },
      qwtsB: function (_0x44eecd, _0x520db9) {
        return _0x44eecd - _0x520db9;
      },
      jKpDi: function (_0x1467f2, _0x1b32e9) {
        return _0x1467f2 + _0x1b32e9;
      },
      kLLtq: function (_0x1a7236, _0x482f78) {
        return _0x1a7236 ^ _0x482f78;
      },
      lKRvz: function (_0x2fd179, _0x1dfc42) {
        return _0x2fd179 * _0x1dfc42;
      },
      TXBAY: "floor",
      UluwO: "random",
      ocyoV: function (_0x246be3, _0x2f2149) {
        return _0x246be3 - _0x2f2149;
      },
      RUrVR: function (_0x318e11, _0x53b01f) {
        return _0x318e11 ^ _0x53b01f;
      },
      MhYkp: function (_0x11b654, _0xdf6317) {
        return _0x11b654 + _0xdf6317;
      },
      rPPEN: " box 间隔 等待 ",
      ZNAqg: "round",
      DISol: function (_0x1439e4, _0xa82628) {
        return _0x1439e4 / _0xa82628;
      },
      kXfhw: function (_0x4cee85, _0x58cdeb) {
        return _0x4cee85 + _0x58cdeb;
      },
      ItSuR: function (_0x184c3f, _0x5a5532) {
        return _0x184c3f + _0x5a5532;
      },
      UsEIa: " 宝箱任务执行完成"
    };
    console[_0x22747e.ErMfZ](_0x22747e.PaeuM(_0x22747e.PaeuM(_0x22747e.PaeuM(_0x22747e.zpSWp(_0x22747e.vdeje, this[_0x22747e.iwFum]()), _0x22747e.dGGnE), BOX_COUNT), " 次"));
    for (let _0x417a3d = _0x22747e.YDakn(957335, 957335); _0x22747e.dfKwW(_0x417a3d, BOX_COUNT); _0x417a3d++) {
      if (this[_0x22747e.VhxKq] || this[_0x22747e.AEUwQ][_0x22747e.Nplvh]) {
        console[_0x22747e.ErMfZ](_0x22747e.PaeuM(_0x22747e.gKMvh(_0x22747e.wnIPj, this[_0x22747e.iwFum]()), _0x22747e.APlPU));
        break;
      }
      const _0x23782d = _0x22747e.PaeuM(_0x417a3d, _0x22747e.BPuGi(703281, 703280));
      console[_0x22747e.ErMfZ](_0x22747e.gKMvh(_0x22747e.PaeuM(_0x22747e.yeZuX(_0x22747e.MOhUa(_0x22747e.yeZuX(_0x22747e.PaeuM(_0x22747e.bMKdz, this[_0x22747e.iwFum]()), _0x22747e.eMLXU.split("").reverse().join("")), _0x23782d), "/"), BOX_COUNT), "次 ".split("").reverse().join("")));
      await this[_0x22747e.SHSCd](_0x22747e.Nplvh);
      if (_0x22747e.rWotX(_0x417a3d, _0x22747e.qwtsB(BOX_COUNT, _0x22747e.YDakn(210775, 210774))) && !this[_0x22747e.VhxKq] && !this[_0x22747e.AEUwQ][_0x22747e.Nplvh]) {
        var _0x1534b3 = _0x22747e.jKpDi(_0x22747e.kLLtq(355590, 355585), _0x22747e.YDakn(645587, 645584));
        const _0x5ec539 = _0x22747e.lKRvz(_0x22747e.jKpDi(Math[_0x22747e.TXBAY](_0x22747e.lKRvz(Math[_0x22747e.UluwO](), _0x22747e.gKMvh(_0x22747e.ocyoV(TASK_SWITCH_MAX, TASK_SWITCH_MIN), _0x22747e.BPuGi(162507, 162506)))), TASK_SWITCH_MIN), _0x22747e.YDakn(179269, 180141));
        _0x1534b3 = _0x22747e.RUrVR(480022, 480030);
        console[_0x22747e.ErMfZ](_0x22747e.zpSWp(_0x22747e.jKpDi(_0x22747e.PaeuM(_0x22747e.MhYkp("⏱ ", this[_0x22747e.iwFum]()), _0x22747e.rPPEN), Math[_0x22747e.ZNAqg](_0x22747e.DISol(_0x5ec539, _0x22747e.YDakn(656717, 657061)))), " 秒"));
        await new Promise(_0x34b0df => setTimeout(_0x34b0df, _0x5ec539));
      }
    }
    console[_0x22747e.ErMfZ](_0x22747e.kXfhw(_0x22747e.ItSuR("✅ ", this[_0x22747e.iwFum]()), _0x22747e.UsEIa));
  }
  async executeFoodTasks() {
    console.log("🍚 " + this.getAccountDisplayName() + " 开始执行饭补任务，计划执行 " + FOOD_COUNT + "次 ".split("").reverse().join(""));
    for (let _0x2d3ed7 = 0; _0x2d3ed7 < FOOD_COUNT; _0x2d3ed7++) {
      if (this.stopAllTasks || this.taskLimitReached.food) {
        console.log("🛑 " + this.getAccountDisplayName() + "止停已务任补饭 ".split("").reverse().join(""));
        break;
      }
      var _0x4a3a95 = 8;
      const _0xf0e40a = _0x2d3ed7 + 1;
      _0x4a3a95 = 4;
      console.log(" ��".split("").reverse().join("") + this.getAccountDisplayName() + " 饭补任务 第" + _0xf0e40a + "/" + FOOD_COUNT + "次 ".split("").reverse().join(""));
      await this.executeTask("doof".split("").reverse().join(""));
      if (_0x2d3ed7 < FOOD_COUNT - 1 && !this.stopAllTasks && !this.taskLimitReached.food) {
        var _0x30402b = 2;
        const _0x18933d = (Math.floor(Math.random() * (TASK_SWITCH_MAX - TASK_SWITCH_MIN + 1)) + TASK_SWITCH_MIN) * 1000;
        _0x30402b = 13;
        console.log("⏱ " + this.getAccountDisplayName() + " 待等 隔间 doof ".split("").reverse().join("") + Math.round(_0x18933d / 1000) + "秒 ".split("").reverse().join(""));
        await new Promise(_0x2670bf => setTimeout(_0x2670bf, _0x18933d));
      }
    }
    console.log("✅ " + this.getAccountDisplayName() + "成完行执务任补饭 ".split("").reverse().join(""));
  }
  async executeKboxTasks() {
    console.log(" ��".split("").reverse().join("") + this.getAccountDisplayName() + " 行执划计，务任箱宝开行执始开 ".split("").reverse().join("") + KBOX_COUNT + "次 ".split("").reverse().join(""));
    for (let _0x5ebdea = 0; _0x5ebdea < KBOX_COUNT; _0x5ebdea++) {
      if (this.stopAllTasks || this.taskLimitReached.kbox) {
        console.log("🛑 " + this.getAccountDisplayName() + " 开宝箱任务已停止");
        break;
      }
      const _0x4233df = _0x5ebdea + 1;
      console.log(" ��".split("").reverse().join("") + this.getAccountDisplayName() + " 开宝箱任务 第" + _0x4233df + "/" + KBOX_COUNT + " 次");
      await this.executeTask("kbox");
      if (_0x5ebdea < KBOX_COUNT - 1 && !this.stopAllTasks && !this.taskLimitReached.kbox) {
        const _0x4ae29d = (Math.floor(Math.random() * (TASK_SWITCH_MAX - TASK_SWITCH_MIN + 1)) + TASK_SWITCH_MIN) * 1000;
        console.log(" ⏱".split("").reverse().join("") + this.getAccountDisplayName() + " kbox 间隔 等待 " + Math.round(_0x4ae29d / 1000) + "秒 ".split("").reverse().join(""));
        await new Promise(_0x2e1cba => setTimeout(_0x2e1cba, _0x4ae29d));
      }
    }
    console.log("✅ " + this.getAccountDisplayName() + " 开宝箱任务执行完成");
  }
}
function parseAccountString(_0x57f55f, _0x472945, _0x359bbe, _0x35a7ac) {
  const _0x549f5b = {
    gSYKm: function (_0x387840, _0x15b1a8) {
      return _0x387840(_0x15b1a8);
    },
    LXXRY: function (_0x5933ad, _0x52f9a6) {
      return _0x5933ad || _0x52f9a6;
    },
    GgnBy: "trim",
    fFuPb: function (_0x3813ba, _0x524995) {
      return _0x3813ba + _0x524995;
    },
    bSQMv: function (_0xf3073e, _0x5c1c37) {
      return _0xf3073e ^ _0x5c1c37;
    },
    fMkDv: function (_0x4747cd, _0x5d0be9) {
      return _0x4747cd ^ _0x5d0be9;
    },
    mUQwT: function (_0x481107, _0x4821a7) {
      return _0x481107 + _0x4821a7;
    },
    emQGP: function (_0x1709c5, _0x515661) {
      return _0x1709c5 ^ _0x515661;
    },
    VufSA: function (_0x1faa0b, _0xb13808) {
      return _0x1faa0b ^ _0xb13808;
    },
    UtUvM: "includes",
    HkIol: "split",
    BoYok: function (_0xc03b22, _0x1cc176) {
      return _0xc03b22 + _0x1cc176;
    },
    koZAm: function (_0x46dd76, _0x368e10) {
      return _0x46dd76 ^ _0x368e10;
    },
    MFxhx: function (_0x28c074, _0x3a998c) {
      return _0x28c074 === _0x3a998c;
    },
    MPKPa: "length",
    uUgBG: function (_0x4946f2, _0x7ba7ab) {
      return _0x4946f2 ^ _0x7ba7ab;
    },
    vIUkT: function (_0x26a87e, _0x47161c) {
      return _0x26a87e === _0x47161c;
    },
    gvvuy: function (_0x27c89a, _0x4c07d5) {
      return _0x27c89a ^ _0x4c07d5;
    },
    PBMQT: "/\\/\\:5skco" + "^s".split("").reverse().join(""),
    mGDCp: "test",
    NnUAr: function (_0xda9767, _0x5d724a) {
      return _0xda9767 ^ _0x5d724a;
    },
    przus: function (_0x5b26ec, _0x30ace2) {
      return _0x5b26ec ^ _0x30ace2;
    },
    kisBY: function (_0x145a43, _0x2af0a2) {
      return _0x145a43 ^ _0x2af0a2;
    },
    vsXsd: function (_0x4ec57c, _0x26849d) {
      return _0x4ec57c ^ _0x26849d;
    },
    UJrWO: function (_0xd40754, _0x40b046) {
      return _0xd40754 ^ _0x40b046;
    },
    zACYH: function (_0x3fa419, _0x1ed1bd) {
      return _0x3fa419 >= _0x1ed1bd;
    },
    vEYeC: function (_0x12aed3, _0x5955f3) {
      return _0x12aed3 ^ _0x5955f3;
    },
    ewopU: function (_0x1825d5, _0x4f1995) {
      return _0x1825d5 ^ _0x4f1995;
    },
    YUWTX: "slice",
    YqNlz: function (_0x377b98, _0x48ee5f) {
      return _0x377b98 - _0x48ee5f;
    },
    UAsiO: "join",
    XPAND: function (_0x3cf449, _0x36bc1a) {
      return _0x3cf449 ^ _0x36bc1a;
    },
    MTxsE: function (_0x5ee455, _0x11a453) {
      return _0x5ee455 === _0x11a453;
    },
    qaNGQ: "toLowerCase",
    okFfv: "none",
    CVsAJ: function (_0x299e6a, _0x40dea4) {
      return _0x299e6a >= _0x40dea4;
    },
    RIiVM: "map",
    pJDck: function (_0x61f06a, _0x1f30ec) {
      return _0x61f06a && _0x1f30ec;
    },
    pqEth: function (_0x3fdc8f, _0x2ad784) {
      return _0x3fdc8f + _0x2ad784;
    },
    cvfDK: function (_0x2a3d2a, _0x57a85c) {
      return _0x2a3d2a + _0x57a85c;
    },
    GzclW: function (_0x56eb8c, _0xae909) {
      return _0x56eb8c(_0xae909);
    },
    umOps: function (_0x3ffce5, _0x6dc984) {
      return _0x3ffce5(_0x6dc984);
    },
    VSUVS: function (_0xefa51, _0x1f1cb8) {
      return _0xefa51 + _0x1f1cb8;
    },
    gewgA: "socks5://",
    AYoNA: function (_0x2376f9, _0x9b5963) {
      return _0x2376f9 || _0x9b5963;
    }
  };
  var _0x54a63b;
  const _0x3487e0 = _0x549f5b.gSYKm(String, _0x549f5b.LXXRY(_0x57f55f, ""))[_0x549f5b.GgnBy]();
  _0x54a63b = _0x549f5b.fFuPb(_0x549f5b.bSQMv(303092, 303088), _0x549f5b.fMkDv(305571, 305579));
  if (!_0x3487e0) {
    return null;
  }
  var _0x452801;
  _0x472945 = "";
  _0x452801 = _0x549f5b.fMkDv(201732, 201731);
  var _0x2fcabf = _0x549f5b.mUQwT(_0x549f5b.fMkDv(586509, 586508), _0x549f5b.emQGP(592103, 592103));
  _0x359bbe = "";
  _0x2fcabf = _0x549f5b.fFuPb(_0x549f5b.bSQMv(355393, 355395), _0x549f5b.VufSA(365337, 365328));
  _0x35a7ac = "";
  let _0x3e602e = null;
  if (_0x3487e0[_0x549f5b.UtUvM]("#")) {
    var _0x1b3a97;
    const _0x589fcb = _0x3487e0[_0x549f5b.HkIol]("#");
    _0x1b3a97 = _0x549f5b.BoYok(_0x549f5b.emQGP(666312, 666312), _0x549f5b.koZAm(666361, 666364));
    if (_0x549f5b.MFxhx(_0x589fcb[_0x549f5b.MPKPa], _0x549f5b.fMkDv(827062, 827060))) {
      _0x35a7ac = _0x589fcb[_0x549f5b.uUgBG(775228, 775228)];
      _0x359bbe = _0x589fcb[_0x549f5b.VufSA(240313, 240312)];
    } else {
      if (_0x549f5b.vIUkT(_0x589fcb[_0x549f5b.MPKPa], _0x549f5b.gvvuy(907985, 907986))) {
        new RegExp(_0x549f5b.PBMQT.split("").reverse().join(""), "i")[_0x549f5b.mGDCp](_0x589fcb[_0x549f5b.NnUAr(676975, 676973)]) || _0x589fcb[_0x549f5b.VufSA(169775, 169773)][_0x549f5b.UtUvM]("|") ? (_0x35a7ac = _0x589fcb[_0x549f5b.przus(603573, 603573)], _0x359bbe = _0x589fcb[_0x549f5b.kisBY(715344, 715345)], _0x3e602e = _0x589fcb[_0x549f5b.vsXsd(857363, 857361)]) : (_0x472945 = _0x589fcb[_0x549f5b.UJrWO(287664, 287664)], _0x35a7ac = _0x589fcb[_0x549f5b.koZAm(563161, 563160)], _0x359bbe = _0x589fcb[_0x549f5b.UJrWO(108821, 108823)]);
      } else {
        _0x549f5b.zACYH(_0x589fcb[_0x549f5b.MPKPa], _0x549f5b.vEYeC(459567, 459563)) && (_0x472945 = _0x589fcb[_0x549f5b.ewopU(554527, 554527)], _0x35a7ac = _0x589fcb[_0x549f5b.vsXsd(427124, 427125)], _0x359bbe = _0x589fcb[_0x549f5b.YUWTX](_0x549f5b.koZAm(611120, 611122), _0x549f5b.YqNlz(_0x589fcb[_0x549f5b.MPKPa], _0x549f5b.przus(522859, 522858)))[_0x549f5b.UAsiO]("#"), _0x3e602e = _0x589fcb[_0x549f5b.YqNlz(_0x589fcb[_0x549f5b.MPKPa], _0x549f5b.XPAND(955506, 955507))]);
      }
    }
  } else {
    _0x35a7ac = _0x3487e0;
    _0x359bbe = "";
  }
  if (_0x3e602e) {
    if (_0x549f5b.vIUkT(_0x3e602e, "0") || _0x549f5b.MTxsE(_0x3e602e[_0x549f5b.qaNGQ](), _0x549f5b.okFfv)) {
      _0x3e602e = null;
    } else {
      if (_0x3e602e[_0x549f5b.UtUvM]("|")) {
        const _0x2656aa = _0x3e602e[_0x549f5b.HkIol]("|");
        if (_0x549f5b.CVsAJ(_0x2656aa[_0x549f5b.MPKPa], _0x549f5b.bSQMv(784384, 784386))) {
          const [_0x101335, _0x571738, _0x46540f = "", _0x59dca7 = ""] = _0x2656aa[_0x549f5b.RIiVM](_0x20b6f1 => String(_0x20b6f1 || "").trim());
          if (_0x549f5b.pJDck(_0x101335, _0x571738)) {
            const _0x51e6b0 = _0x549f5b.LXXRY(_0x46540f, _0x59dca7) ? _0x549f5b.pqEth(_0x549f5b.mUQwT(_0x549f5b.cvfDK(_0x549f5b.GzclW(encodeURIComponent, _0x46540f), ":"), _0x549f5b.umOps(encodeURIComponent, _0x59dca7)), "@") : "";
            _0x3e602e = _0x549f5b.cvfDK(_0x549f5b.VSUVS(_0x549f5b.fFuPb(_0x549f5b.mUQwT(_0x549f5b.gewgA, _0x51e6b0), _0x101335), ":"), _0x571738);
          } else {
            _0x3e602e = null;
          }
        } else {
          _0x3e602e = null;
        }
      }
    }
  }
  return {
    remark: _0x549f5b.AYoNA(_0x472945, ""),
    salt: _0x359bbe,
    cookie: _0x35a7ac,
    proxyUrl: _0x3e602e
  };
}
function getAllAccountConfigs() {
  var _0x5cb550 = 6;
  const _0x29095b = parseAccountsFromEnv();
  _0x5cb550 = "lmooje";
  var _0xcc28f2;
  const _0xc7e7be = [];
  _0xcc28f2 = 4;
  for (const _0x13bc08 of _0x29095b) {
    const _0x5271bb = parseAccountString(_0x13bc08);
    _0x5271bb ? _0xc7e7be.push(_0x5271bb) : console.log("账号格式错误：" + _0x13bc08);
  }
  _0xc7e7be.forEach((_0x157fbf, _0x155b37) => {
    _0x157fbf.index = _0x155b37 + 1;
  });
  return _0xc7e7be;
}
async function executeConcurrently(_0x57182d, _0xcb7d5c, _0x4279ad, _0x30f516) {
  var _0x4334c1;
  const _0x465d29 = new Array(_0x57182d.length);
  _0x4334c1 = 7;
  _0x30f516 = 0;
  async function _0xg32e() {
    while (true) {
      const _0x2d4e6f = _0x30f516++;
      if (_0x2d4e6f >= _0x57182d.length) {
        return;
      }
      var _0x486ef9 = 11;
      const _0x566121 = _0x57182d[_0x2d4e6f];
      _0x486ef9 = 14;
      try {
        _0x465d29[_0x2d4e6f] = await _0x4279ad(_0x566121, _0x2d4e6f);
      } catch (_0x2e0305) {
        console.log("=xedni（常异行执发并".split("").reverse().join("") + (_0x2d4e6f + 1) + "：）".split("").reverse().join("") + _0x2e0305.message);
        _0x465d29[_0x2d4e6f] = null;
      }
    }
  }
  var _0x53e50a = 15;
  const _0x593463 = Array.from({
    length: Math.min(_0xcb7d5c, _0x57182d.length)
  }, _0xg32e);
  _0x53e50a = 14;
  await Promise.all(_0x593463);
  return _0x465d29;
}
function formatAccountDisplay(_0x8c9b72, _0xfac5bb, _0x1b8e5d) {
  var _0x583738 = 16;
  const _0x6b9555 = "账号[" + (_0xfac5bb || _0x8c9b72) + "]" + (_0x1b8e5d ? "（" + _0x1b8e5d + "）" : "");
  _0x583738 = 4;
  return colors.bright + colors.cyan + _0x6b9555 + colors.reset;
}
async function processAccount(_0x2e4be7) {
  if (_0x2e4be7.proxyUrl) {
    var _0x3ae33d;
    const _0x406bad = formatAccountDisplay(_0x2e4be7.index, null, _0x2e4be7.remark);
    _0x3ae33d = "lhcqcl".split("").reverse().join("");
    const _0x541523 = await testProxyConnectivity(_0x2e4be7.proxyUrl, _0x406bad);
    console.log(" -  ".split("").reverse().join("") + (_0x541523.ok ? "✅ 代理验证通过" : "败失证验理代 ❌".split("").reverse().join("")) + ": " + _0x541523.msg);
    if (_0x541523.ok && _0x541523.ip && _0x541523.ip !== "localhost") {
      usedProxyIPs.has(_0x541523.ip) ? console.log("⚠️ 存在相同代理IP（" + _0x541523.ip + "...号账余其行执续继，）".split("").reverse().join("")) : usedProxyIPs.add(_0x541523.ip);
      console.log("🌐 " + _0x406bad + " 使用代理: " + _0x2e4be7.proxyUrl);
    } else {
      if (!_0x541523.ok) {
        console.log(" ❌".split("").reverse().join("") + _0x406bad + "号账该过跳，败失试测理代 ".split("").reverse().join(""));
        return {
          index: _0x2e4be7.index,
          remark: _0x2e4be7.remark || "注备无".split("").reverse().join(""),
          nickname: "号账".split("").reverse().join("") + _0x2e4be7.index,
          initialCoin: 0,
          finalCoin: 0,
          coinChange: 0,
          initialCash: 0,
          finalCash: 0,
          cashChange: 0,
          error: " :败失试测理代".split("").reverse().join("") + _0x541523.msg,
          skipped: true
        };
      }
    }
  } else {
    var _0x2cde67 = 8;
    const _0xb3b61c = formatAccountDisplay(_0x2e4be7.index, null, _0x2e4be7.remark);
    _0x2cde67 = 5;
    console.log("🌐 " + _0xb3b61c + " 未配置代理，走直连");
  }
  const _0x1ef3f9 = formatAccountDisplay(_0x2e4be7.index, null, _0x2e4be7.remark);
  console.log("🔍 " + _0x1ef3f9 + " 获取账号信息中...");
  var _0xf0f97e;
  let _0x5f0d91 = await getAccountBasicInfo(_0x2e4be7.cookie, _0x2e4be7.proxyUrl, _0x2e4be7.index);
  _0xf0f97e = 7;
  var _0x1034fb = 3;
  let _0x43bc72 = _0x5f0d91?.["nickname"] || "账号" + _0x2e4be7.index;
  _0x1034fb = 9;
  if (_0x5f0d91) {
    var _0x133fca;
    const _0xc6d8fc = _0x5f0d91.totalCoin != null ? _0x5f0d91.totalCoin : "知未".split("").reverse().join("");
    _0x133fca = 17;
    const _0x331f7a = _0x5f0d91.allCash != null ? _0x5f0d91.allCash : "知未".split("").reverse().join(""),
      _0x5d33af = formatAccountDisplay(_0x2e4be7.index, _0x43bc72, _0x2e4be7.remark);
    var _0x475d97;
    const _0x39f498 = _0x5f0d91.ud ? " :DU，".split("").reverse().join("") + _0x5f0d91.ud : "";
    _0x475d97 = 1;
    enableColors ? console.log(" ✅".split("").reverse().join("") + _0x5d33af + " :币金前当 ��，功成录登 ".split("").reverse().join("") + formatSuccess(_0xc6d8fc) + "，💸 当前余额: " + colorText(_0x331f7a, colors.bright + colors.yellow) + _0x39f498) : console.log(" ✅".split("").reverse().join("") + _0x5d33af + " 登录成功，💰 当前金币: " + _0xc6d8fc + "，💸 当前余额: " + _0x331f7a + _0x39f498);
  } else {
    const _0x466c32 = formatAccountDisplay(_0x2e4be7.index, _0x43bc72, _0x2e4be7.remark);
    console.log(" ❌".split("").reverse().join("") + _0x466c32 + " 基本信息获取失败，但仍继续执行任务");
  }
  const _0x5a0547 = _0x5f0d91?.["ud"] || null;
  var _0x320155;
  const _0x4a2589 = new KuaishouAccount({
    ..._0x2e4be7,
    nickname: _0x43bc72,
    tasksToExecute: tasksToExecute,
    udFromLogin: _0x5a0547
  });
  _0x320155 = 7;
  if (_0x5f0d91) {
    await _0x4a2589.checkCoinLimit();
    if (_0x4a2589.coinExceeded) {
      console.log("⚠️ " + _0x4a2589.getAccountDisplayName() + " 初始金币已超过阈值，不执行任务");
      const _0x26a4c8 = await getAccountBasicInfo(_0x4a2589.getCookieWithCurrentDid(), _0x2e4be7.proxyUrl, _0x2e4be7.index);
      var _0x1e7800 = 7;
      const _0x43b396 = _0x5f0d91?.["totalCoin"] || 0;
      _0x1e7800 = 10;
      var _0x189f1b;
      const _0x122a5d = _0x26a4c8?.["totalCoin"] || 0;
      _0x189f1b = 4;
      var _0x32bd0e;
      const _0x48eaea = _0x122a5d - _0x43b396;
      _0x32bd0e = 8;
      var _0x40fce = 8;
      const _0xa01b60 = _0x5f0d91?.["allCash"] || 0;
      _0x40fce = 0;
      const _0xe63eff = _0x26a4c8?.["allCash"] || 0,
        _0x137ebe = _0xe63eff - _0xa01b60;
      return {
        index: _0x2e4be7.index,
        remark: _0x2e4be7.remark || "无备注",
        nickname: _0x43bc72,
        initialCoin: _0x43b396,
        finalCoin: _0x122a5d,
        coinChange: _0x48eaea,
        initialCash: _0xa01b60,
        finalCash: _0xe63eff,
        cashChange: _0x137ebe,
        stats: _0x4a2589.getTaskStats(),
        coinLimitExceeded: true
      };
    }
  }
  await _0x4a2589.executeAllTasksByPriority();
  var _0x221924 = 13;
  const _0x232414 = await getAccountBasicInfo(_0x4a2589.getCookieWithCurrentDid(), _0x2e4be7.proxyUrl, _0x2e4be7.index);
  _0x221924 = 10;
  const _0x5f3c53 = _0x5f0d91?.["totalCoin"] || 0,
    _0x1a785d = _0x232414?.["totalCoin"] || 0;
  var _0x599273 = 13;
  const _0x8fe7ee = _0x1a785d - _0x5f3c53;
  _0x599273 = 3;
  var _0x2f81f1 = 18;
  const _0x39d165 = _0x5f0d91?.["allCash"] || 0;
  _0x2f81f1 = 17;
  var _0x31ea1f = 11;
  const _0x53abcb = _0x232414?.["allCash"] || 0;
  _0x31ea1f = 6;
  var _0x38780a;
  const _0x3c5c02 = _0x53abcb - _0x39d165;
  _0x38780a = 9;
  _0x4a2589.printTaskStats();
  return {
    index: _0x2e4be7.index,
    remark: _0x2e4be7.remark || "注备无".split("").reverse().join(""),
    nickname: _0x43bc72,
    initialCoin: _0x5f3c53,
    finalCoin: _0x1a785d,
    coinChange: _0x8fe7ee,
    initialCash: _0x39d165,
    finalCash: _0x53abcb,
    cashChange: _0x3c5c02,
    stats: _0x4a2589.getTaskStats(),
    coinLimitExceeded: _0x4a2589.coinExceeded,
    infoFetchFailed: !_0x5f0d91
  };
}
function displayResultsTable(_0x2bf7de, _0x214102, _0x34ce81, _0x29a85a, _0xc584b0, _0x41aebb) {
  const _0x1f6da2 = {
    sGNor: function (_0x2f17c8, _0x148fc3) {
      return _0x2f17c8 + _0x148fc3;
    },
    OgkAj: "success",
    agXVj: "failed",
    jUZYd: "totalReward",
    ZZWux: "stats",
    ffPZu: "values",
    PCrKh: "forEach",
    VDYqg: function (_0x44e1db, _0xbc086, _0x4e92d6) {
      return _0x44e1db(_0xbc086, _0x4e92d6);
    },
    uORvc: function (_0x5d09bc, _0x4267af) {
      return _0x5d09bc + _0x4267af;
    },
    UTSqQ: "repeat",
    RTGwT: function (_0x26ca79, _0x3c4a52) {
      return _0x26ca79 + _0x3c4a52;
    },
    zBPfM: function (_0x1be252, _0x389cb6) {
      return _0x1be252 ^ _0x389cb6;
    },
    ddcpF: function (_0xc7d563, _0x440e3d) {
      return _0xc7d563 ^ _0x440e3d;
    },
    uENMi: function (_0x105ced, _0x76abb1) {
      return _0x105ced ^ _0x76abb1;
    },
    ZYRjw: function (_0x43eca9, _0x82fa1c) {
      return _0x43eca9 + _0x82fa1c;
    },
    ncmcU: function (_0x3a1e99, _0x3f2fc6, _0x413b92) {
      return _0x3a1e99(_0x3f2fc6, _0x413b92);
    },
    brQYC: "index",
    nlIkf: function (_0x1fabf7, _0x23629d) {
      return _0x1fabf7 ^ _0x23629d;
    },
    tacNb: function (_0x3a19a3, _0x2244fb, _0x2304fd) {
      return _0x3a19a3(_0x2244fb, _0x2304fd);
    },
    XIGRI: "remark",
    ObBYM: "nickname",
    kHCQM: "skipped",
    RxqKL: "coinLimitExceeded",
    QqwDX: " ⚠️",
    mncBL: "infoFetchFailed",
    DRvqt: "�� ",
    thttw: function (_0x5f4b4c, _0x110f70) {
      return _0x5f4b4c + _0x110f70;
    },
    mzgaX: "substring",
    bhmIU: function (_0x2ce508, _0x48e82c) {
      return _0x2ce508 ^ _0x48e82c;
    },
    GxJrN: function (_0x53663a, _0x58d59a) {
      return _0x53663a - _0x58d59a;
    },
    SXpGH: function (_0x1aaeee, _0x2ff840) {
      return _0x1aaeee ^ _0x2ff840;
    },
    NPtFb: function (_0x4ba145, _0x31b595) {
      return _0x4ba145 + _0x31b595;
    },
    YSqXE: function (_0x5462b6, _0x487b81, _0x561ab2) {
      return _0x5462b6(_0x487b81, _0x561ab2);
    },
    rJucO: "initialCoin",
    hqHZU: function (_0x3e0a79, _0x16c8b5) {
      return _0x3e0a79 + _0x16c8b5;
    },
    IQebl: function (_0x48b6b7, _0xec4a4a, _0x3640bb) {
      return _0x48b6b7(_0xec4a4a, _0x3640bb);
    },
    vxAXm: "finalCoin",
    yVarJ: function (_0x63477d, _0x3fa1c9) {
      return _0x63477d >= _0x3fa1c9;
    },
    mXDvo: "coinChange",
    oHYte: function (_0x2164d, _0x3c366c) {
      return _0x2164d + _0x3c366c;
    },
    VZoAv: function (_0x36ff33, _0x2c6b92, _0x4e3472) {
      return _0x36ff33(_0x2c6b92, _0x4e3472);
    },
    Cpzul: "initialCash",
    YrkTN: function (_0x3d427b, _0x5f34a4) {
      return _0x3d427b ^ _0x5f34a4;
    },
    pFwom: function (_0xdbb904, _0x3cb8d8, _0x3ba145) {
      return _0xdbb904(_0x3cb8d8, _0x3ba145);
    },
    iqocg: "finalCash",
    VpLNp: function (_0x542412, _0x2f9d07) {
      return _0x542412 ^ _0x2f9d07;
    },
    PMoWS: function (_0xade023, _0x114c2b) {
      return _0xade023 ^ _0x114c2b;
    },
    kHzuX: function (_0xa6fae5, _0x19f0d5) {
      return _0xa6fae5 ^ _0x19f0d5;
    },
    xjEho: "cashChange",
    JMXQL: function (_0x27e073, _0xff1e6c) {
      return _0x27e073 ^ _0xff1e6c;
    },
    HpayC: "toFixed",
    njqaR: function (_0x3f39b4, _0x1f020c) {
      return _0x3f39b4 ^ _0x1f020c;
    },
    IjroO: function (_0x5e8a6d, _0x39a709) {
      return _0x5e8a6d + _0x39a709;
    },
    LKTYR: function (_0x32057c, _0x477348) {
      return _0x32057c ^ _0x477348;
    },
    MYhni: function (_0x4a6950, _0x377a99) {
      return _0x4a6950 + _0x377a99;
    },
    xMmkO: function (_0xe9de83, _0x24d168) {
      return _0xe9de83 + _0x24d168;
    },
    dshan: function (_0x4f7810, _0x38b3d5) {
      return _0x4f7810 ^ _0x38b3d5;
    },
    leGvS: function (_0x12be4d, _0x1f050f) {
      return _0x12be4d + _0x1f050f;
    },
    LlbPe: function (_0x36991, _0x2f6ef6) {
      return _0x36991 ^ _0x2f6ef6;
    },
    cdlIz: "息信无",
    JRYAm: function (_0x96957a, _0x3d99a2) {
      return _0x96957a ^ _0x3d99a2;
    },
    uJmpA: "log",
    LSNUS: "length",
    Ryglm: "\n没有可显示的账号信" + "。息".split("").reverse().join(""),
    deFNj: "reduce",
    LIKOQ: function (_0xa0f5c1, _0x1f1292) {
      return _0xa0f5c1 ^ _0x1f1292;
    },
    ddICc: function (_0x256261, _0x1cbaa3) {
      return _0x256261 ^ _0x1cbaa3;
    },
    CTZuB: function (_0x425096, _0x14b9b3) {
      return _0x425096 ^ _0x14b9b3;
    },
    WtrYa: function (_0x206fb8, _0x588f3a) {
      return _0x206fb8 ^ _0x588f3a;
    },
    CKcZT: function (_0x581f2b, _0x57972c) {
      return _0x581f2b - _0x57972c;
    },
    jSHUz: function (_0x1e755a, _0x4c367a) {
      return _0x1e755a ^ _0x4c367a;
    },
    XINBe: function (_0x392a27, _0x342756) {
      return _0x392a27 ^ _0x342756;
    },
    KJvsV: function (_0x2b1aa3, _0x137489) {
      return _0x2b1aa3 ^ _0x137489;
    },
    wSAyM: function (_0x53afc6, _0x2a62ec) {
      return _0x53afc6 ^ _0x2a62ec;
    },
    tOFEm: function (_0x1af1d8, _0x4c6c48) {
      return _0x1af1d8 ^ _0x4c6c48;
    },
    UrxdQ: function (_0x4ebdeb, _0x528d26) {
      return _0x4ebdeb ^ _0x528d26;
    },
    wZGcj: function (_0x38ad63, _0x58909f) {
      return _0x38ad63 ^ _0x58909f;
    },
    PETBI: function (_0x52e3d3, _0xa6ea03) {
      return _0x52e3d3 ^ _0xa6ea03;
    },
    pzBpT: function (_0x4f5173, _0x49f80c) {
      return _0x4f5173 - _0x49f80c;
    },
    veHhN: function (_0x403454, _0x4d5b71) {
      return _0x403454 ^ _0x4d5b71;
    },
    UFbkF: function (_0x209e1c, _0x397d4d) {
      return _0x209e1c ^ _0x397d4d;
    },
    CpMFP: function (_0x2538ac, _0x1e26f7) {
      return _0x2538ac > _0x1e26f7;
    },
    pusXi: function (_0x28468a, _0x1dd8b9) {
      return _0x28468a ^ _0x1dd8b9;
    },
    NFLpX: function (_0x3686e4, _0x1442f7) {
      return _0x3686e4 * _0x1442f7;
    },
    AdWmh: function (_0x232e5c, _0x559d1) {
      return _0x232e5c / _0x559d1;
    },
    lxecg: function (_0x580a06, _0x478567) {
      return _0x580a06 ^ _0x478567;
    },
    BtbHy: "0.0",
    NhCKq: function (_0x35e6d3, _0x468e50) {
      return _0x35e6d3 + _0x468e50;
    },
    dwUrL: function (_0x2482c9, _0x1407a0) {
      return _0x2482c9 ^ _0x1407a0;
    },
    obONR: "filter",
    Nqjgg: function (_0x38b739, _0x4f632b) {
      return _0x38b739 ^ _0x4f632b;
    },
    wuJbK: function (_0x2c0c9d, _0x54271a) {
      return _0x2c0c9d + _0x54271a;
    },
    XlrTK: "      表总汇果结行执务任化动自版速极手快      ",
    HVGAa: function (_0x166d34, _0x5a9338) {
      return _0x166d34 ^ _0x5a9338;
    },
    zWpZT: function (_0x3f315c, _0x5d63c1) {
      return _0x3f315c ^ _0x5d63c1;
    },
    JvfdB: function (_0xa46811, _0x203fe0) {
      return _0xa46811 + _0x203fe0;
    },
    qehLQ: function (_0x3012fb, _0x11706f) {
      return _0x3012fb + _0x11706f;
    },
    MUKyY: function (_0x487781, _0x4f44e6) {
      return _0x487781 + _0x4f44e6;
    },
    MwwbM: function (_0x16f6a9, _0x29cff6) {
      return _0x16f6a9 + _0x29cff6;
    },
    KcHHi: "总账号数: ",
    cONNm: "padEnd",
    ztyBu: function (_0x54bcef, _0x153d48) {
      return _0x54bcef ^ _0x153d48;
    },
    xZrLY: "跳过账号: ",
    MEYOZ: function (_0x131934, _0x5c7b81) {
      return _0x131934 ^ _0x5c7b81;
    },
    KcizL: function (_0x527caa, _0x2386b5) {
      return _0x527caa + _0x2386b5;
    },
    lhaYn: "总任务数: ",
    WhhOq: function (_0x69ff3, _0x3e0e2f) {
      return _0x69ff3 ^ _0x3e0e2f;
    },
    FxEDg: function (_0x312915, _0x48c4e8) {
      return _0x312915 + _0x48c4e8;
    },
    WzmpV: "任务成功率: ",
    YWFgJ: function (_0x390026, _0x3996fc) {
      return _0x390026 + _0x3996fc;
    },
    CKuKo: function (_0x3af8af, _0x977660) {
      return _0x3af8af + _0x977660;
    },
    XubQV: " :化变币金总",
    KElhP: function (_0x132816, _0x5974e7) {
      return _0x132816 ^ _0x5974e7;
    },
    LagLT: function (_0x827ae, _0x235de0) {
      return _0x827ae + _0x235de0;
    },
    beTQO: " :励奖币金总",
    iKHrZ: function (_0x97bb30, _0x296d3f) {
      return _0x97bb30 ^ _0x296d3f;
    },
    rVOAR: "总余额变化: ",
    TxHDC: function (_0x1a0de1, _0x5dc831) {
      return _0x1a0de1 ^ _0x5dc831;
    },
    wRlgB: function (_0x584cc1, _0x500089) {
      return _0x584cc1 ^ _0x500089;
    },
    bSTRl: function (_0x1d584c, _0x48dae8) {
      return _0x1d584c ^ _0x48dae8;
    },
    yealI: "账号昵称",
    FquTX: "初始金币",
    EcWlK: "最终金币",
    GnnpF: "化变币金",
    RGFgI: "初始余额",
    NRqPH: "最终余额",
    Ilipo: "化变额余",
    OoBcR: function (_0x2e8189, _0x437808) {
      return _0x2e8189 ^ _0x437808;
    },
    RkXeu: function (_0x1555f2, _0x4bf6ea) {
      return _0x1555f2 ^ _0x4bf6ea;
    },
    OedvV: function (_0x486b87, _0x4466b2) {
      return _0x486b87 ^ _0x4466b2;
    },
    ZRBzo: function (_0x439285, _0x584463) {
      return _0x439285 ^ _0x584463;
    },
    HCGxq: function (_0xa0efaa, _0x19d655) {
      return _0xa0efaa ^ _0x19d655;
    },
    ZqMKE: function (_0x3275da, _0x255644) {
      return _0x3275da ^ _0x255644;
    },
    byLhd: function (_0x14e907, _0x47d04a) {
      return _0x14e907 ^ _0x47d04a;
    },
    jCjcL: function (_0x5d3a67, _0x586bcf) {
      return _0x5d3a67 + _0x586bcf;
    },
    ZYzlK: function (_0x175712, _0x24165f) {
      return _0x175712 ^ _0x24165f;
    },
    xIioZ: function (_0x54440d, _0x4e69d9) {
      return _0x54440d + _0x4e69d9;
    },
    nUnuH: function (_0x5ac179, _0x436dfb) {
      return _0x5ac179 ^ _0x436dfb;
    },
    TXQQa: function (_0x353c1e, _0x75f13e) {
      return _0x353c1e + _0x75f13e;
    },
    RlKTv: function (_0x5c6bcb, _0x8e1861) {
      return _0x5c6bcb ^ _0x8e1861;
    },
    elqCn: function (_0x189912, _0x3b3d59) {
      return _0x189912 ^ _0x3b3d59;
    },
    keSIm: "      任务执行完成，请查看详细结果      ",
    PfxtH: function (_0x536408, _0x1f776e) {
      return _0x536408 ^ _0x1f776e;
    }
  };
  if (!_0x2bf7de[_0x1f6da2.LSNUS]) {
    console[_0x1f6da2.uJmpA](_0x1f6da2.Ryglm);
    return;
  }
  const _0x2bf8d1 = _0x2bf7de[_0x1f6da2.deFNj]((_0x3abbf5, _0x3f052e) => _0x3abbf5 + (parseInt(_0x3f052e.initialCoin) || 0), _0x1f6da2.LIKOQ(750730, 750730));
  var _0x1a84fb;
  const _0xf6a29c = _0x2bf7de[_0x1f6da2.deFNj]((_0x1b61a9, _0x4fabe7) => _0x1b61a9 + (parseInt(_0x4fabe7.finalCoin) || 0), _0x1f6da2.ddICc(860263, 860263));
  _0x1a84fb = _0x1f6da2.CTZuB(429647, 429641);
  var _0x2e4b03 = _0x1f6da2.uORvc(_0x1f6da2.WtrYa(565216, 565222), _0x1f6da2.zBPfM(653640, 653646));
  const _0xc6c9a = _0x1f6da2.CKcZT(_0xf6a29c, _0x2bf8d1);
  _0x2e4b03 = _0x1f6da2.jSHUz(583823, 583822);
  var _0x18ff5b = _0x1f6da2.sGNor(_0x1f6da2.XINBe(499541, 499540), _0x1f6da2.JRYAm(755081, 755086));
  const _0x209b67 = _0x2bf7de[_0x1f6da2.deFNj]((_0x156648, _0x586483) => _0x156648 + (parseFloat(_0x586483.initialCash) || 0), _0x1f6da2.KJvsV(968329, 968329));
  _0x18ff5b = _0x1f6da2.wSAyM(734910, 734902);
  var _0x22a41c = _0x1f6da2.xMmkO(_0x1f6da2.kHzuX(827755, 827752), _0x1f6da2.tOFEm(312885, 312886));
  const _0x89f0c7 = _0x2bf7de[_0x1f6da2.deFNj]((_0x27711e, _0x262455) => _0x27711e + (parseFloat(_0x262455.finalCash) || 0), _0x1f6da2.UrxdQ(194396, 194396));
  _0x22a41c = _0x1f6da2.leGvS(_0x1f6da2.wZGcj(607351, 607346), _0x1f6da2.PETBI(828479, 828472));
  const _0xb65e6e = _0x1f6da2.pzBpT(_0x89f0c7, _0x209b67);
  _0x214102 = _0x1f6da2.veHhN(654162, 654162);
  _0x34ce81 = _0x1f6da2.zBPfM(942521, 942521);
  _0x29a85a = _0x1f6da2.SXpGH(443266, 443266);
  _0x2bf7de[_0x1f6da2.PCrKh](_0x18bfc5 => {
    const _0x5a799a = {
      qThVm: function (_0x428a44, _0x3e9b9b) {
        return _0x1f6da2.sGNor(_0x428a44, _0x3e9b9b);
      },
      AIDHw: _0x1f6da2.OgkAj,
      owelA: _0x1f6da2.agXVj,
      bXWmC: _0x1f6da2.jUZYd
    };
    _0x18bfc5[_0x1f6da2.ZZWux] && Object[_0x1f6da2.ffPZu](_0x18bfc5[_0x1f6da2.ZZWux])[_0x1f6da2.PCrKh](_0x1a68b6 => {
      _0x214102 += _0x5a799a.qThVm(_0x1a68b6[_0x5a799a.AIDHw], _0x1a68b6[_0x5a799a.owelA]);
      _0x34ce81 += _0x1a68b6[_0x5a799a.AIDHw];
      _0x29a85a += _0x1a68b6[_0x5a799a.bXWmC];
    });
  });
  var _0xac4470 = _0x1f6da2.oHYte(_0x1f6da2.UFbkF(360150, 360145), _0x1f6da2.PETBI(983818, 983823));
  const _0xe3c228 = _0x1f6da2.CpMFP(_0x214102, _0x1f6da2.pusXi(239779, 239779)) ? _0x1f6da2.NFLpX(_0x1f6da2.AdWmh(_0x34ce81, _0x214102), _0x1f6da2.lxecg(103827, 103927))[_0x1f6da2.HpayC](_0x1f6da2.ddcpF(980968, 980969)) : _0x1f6da2.BtbHy.split("").reverse().join("");
  _0xac4470 = _0x1f6da2.veHhN(899730, 899729);
  var _0x421f81 = _0x1f6da2.NhCKq(_0x1f6da2.nlIkf(237524, 237524), _0x1f6da2.dwUrL(389631, 389624));
  _0x421f81 = _0x1f6da2.zBPfM(545950, 545945);
  const _0x5d5e66 = _0x2bf7de[_0x1f6da2.obONR](_0x470826 => _0x470826.skipped)[_0x1f6da2.LSNUS];
  var _0x2a169b = _0x1f6da2.IjroO(_0x1f6da2.pusXi(676932, 676929), _0x1f6da2.Nqjgg(357934, 357935));
  _0x2a169b = _0x1f6da2.dshan(177865, 177865);
  console[_0x1f6da2.uJmpA](_0x1f6da2.xMmkO("\n\n", "="[_0x1f6da2.UTSqQ](_0x1f6da2.bhmIU(715402, 715482))));
  console[_0x1f6da2.uJmpA](_0x1f6da2.uORvc(_0x1f6da2.wuJbK("|", _0x1f6da2.VDYqg(centerText, _0x1f6da2.XlrTK.split("").reverse().join(""), _0x1f6da2.HVGAa(357802, 357860))), "|"));
  console[_0x1f6da2.uJmpA]("="[_0x1f6da2.UTSqQ](_0x1f6da2.zWpZT(342520, 342440)));
  console[_0x1f6da2.uJmpA](_0x1f6da2.JvfdB(_0x1f6da2.hqHZU(_0x1f6da2.qehLQ(_0x1f6da2.MUKyY(_0x1f6da2.MwwbM("|", _0x1f6da2.MwwbM(_0x1f6da2.KcHHi, _0x2bf7de[_0x1f6da2.LSNUS])[_0x1f6da2.cONNm](_0x1f6da2.ztyBu(818392, 818382))), _0x1f6da2.leGvS(_0x1f6da2.xZrLY, _0x5d5e66)[_0x1f6da2.cONNm](_0x1f6da2.MEYOZ(936181, 936163))), _0x1f6da2.KcizL(_0x1f6da2.lhaYn, _0x214102)[_0x1f6da2.cONNm](_0x1f6da2.WhhOq(398214, 398224))), _0x1f6da2.hqHZU(_0x1f6da2.FxEDg(_0x1f6da2.WzmpV, _0xe3c228), "%")[_0x1f6da2.cONNm](_0x1f6da2.veHhN(238273, 238283))), "|"));
  console[_0x1f6da2.uJmpA](_0x1f6da2.YWFgJ(_0x1f6da2.oHYte(_0x1f6da2.CKuKo(_0x1f6da2.thttw("|", _0x1f6da2.ZYRjw(_0x1f6da2.XubQV.split("").reverse().join(""), _0xc6c9a)[_0x1f6da2.cONNm](_0x1f6da2.KElhP(573479, 573501))), _0x1f6da2.LagLT(_0x1f6da2.beTQO.split("").reverse().join(""), _0x29a85a)[_0x1f6da2.cONNm](_0x1f6da2.iKHrZ(463686, 463708))), _0x1f6da2.sGNor(_0x1f6da2.rVOAR, _0xb65e6e[_0x1f6da2.HpayC](_0x1f6da2.TxHDC(491003, 491001)))[_0x1f6da2.cONNm](_0x1f6da2.wRlgB(383668, 383660))), "|"));
  console[_0x1f6da2.uJmpA]("-"[_0x1f6da2.UTSqQ](_0x1f6da2.bSTRl(572147, 572067)));
  const _0x10aa40 = ["号序".split("").reverse().join(""), "注备".split("").reverse().join(""), _0x1f6da2.yealI, _0x1f6da2.FquTX, _0x1f6da2.EcWlK, _0x1f6da2.GnnpF.split("").reverse().join(""), _0x1f6da2.RGFgI, _0x1f6da2.NRqPH, _0x1f6da2.Ilipo.split("").reverse().join(""), "状态"];
  var _0x26e019;
  const _0x2fd65a = [_0x1f6da2.UrxdQ(477268, 477266), _0x1f6da2.OoBcR(955406, 955422), _0x1f6da2.RkXeu(972377, 972361), _0x1f6da2.OedvV(643532, 643520), _0x1f6da2.OedvV(439819, 439815), _0x1f6da2.ZRBzo(447097, 447093), _0x1f6da2.HCGxq(514083, 514095), _0x1f6da2.LIKOQ(445325, 445313), _0x1f6da2.ZqMKE(534810, 534806), _0x1f6da2.byLhd(109099, 109089)];
  _0x26e019 = _0x1f6da2.jCjcL(_0x1f6da2.ZYzlK(946301, 946301), _0x1f6da2.YrkTN(993268, 993277));
  var _0x272f59 = _0x1f6da2.xIioZ(_0x1f6da2.nUnuH(595265, 595271), _0x1f6da2.HVGAa(669146, 669138));
  _0xc584b0 = "|";
  _0x272f59 = _0x1f6da2.TXQQa(_0x1f6da2.RlKTv(290986, 290986), _0x1f6da2.LlbPe(417072, 417078));
  _0x10aa40[_0x1f6da2.PCrKh]((_0x116a40, _0x588bdd) => {
    _0xc584b0 += _0x1f6da2.sGNor(_0x1f6da2.VDYqg(centerText, _0x116a40, _0x2fd65a[_0x588bdd]), "|");
  });
  console[_0x1f6da2.uJmpA](_0xc584b0);
  var _0x524d72;
  _0x41aebb = "|";
  _0x524d72 = _0x1f6da2.LagLT(_0x1f6da2.elqCn(533497, 533498), _0x1f6da2.WhhOq(145454, 145454));
  _0x2fd65a[_0x1f6da2.PCrKh](_0x396cee => {
    _0x41aebb += _0x1f6da2.uORvc("-"[_0x1f6da2.UTSqQ](_0x396cee), "|");
  });
  console[_0x1f6da2.uJmpA](_0x41aebb);
  _0x2bf7de[_0x1f6da2.PCrKh](_0x34b368 => {
    var _0xd46b3e = _0x1f6da2.RTGwT(_0x1f6da2.zBPfM(121606, 121605), _0x1f6da2.ddcpF(499650, 499649));
    let _0x36401d = "|";
    _0xd46b3e = _0x1f6da2.RTGwT(_0x1f6da2.ddcpF(386915, 386917), _0x1f6da2.uENMi(924161, 924160));
    _0x36401d += _0x1f6da2.ZYRjw(_0x1f6da2.ncmcU(centerText, _0x34b368[_0x1f6da2.brQYC], _0x2fd65a[_0x1f6da2.nlIkf(581553, 581553)]), "|");
    _0x36401d += _0x1f6da2.RTGwT(_0x1f6da2.tacNb(centerText, _0x34b368[_0x1f6da2.XIGRI], _0x2fd65a[_0x1f6da2.ddcpF(849787, 849786)]), "|");
    let _0x4a4405 = _0x34b368[_0x1f6da2.ObBYM] || "-";
    if (_0x34b368[_0x1f6da2.kHCQM]) {
      _0x4a4405 += " ❌";
    } else {
      if (_0x34b368[_0x1f6da2.RxqKL]) {
        _0x4a4405 += _0x1f6da2.QqwDX;
      } else {
        if (_0x34b368[_0x1f6da2.mncBL]) {
          _0x4a4405 += _0x1f6da2.DRvqt.split("").reverse().join("");
        }
      }
    }
    _0x36401d += _0x1f6da2.thttw(_0x1f6da2.tacNb(centerText, _0x4a4405[_0x1f6da2.mzgaX](_0x1f6da2.bhmIU(574107, 574107), _0x1f6da2.GxJrN(_0x2fd65a[_0x1f6da2.ddcpF(371960, 371962)], _0x1f6da2.ddcpF(987881, 987883))), _0x2fd65a[_0x1f6da2.SXpGH(931637, 931639)]), "|");
    _0x36401d += _0x1f6da2.NPtFb(_0x1f6da2.YSqXE(centerText, _0x34b368[_0x1f6da2.rJucO], _0x2fd65a[_0x1f6da2.bhmIU(768007, 768004)]), "|");
    _0x36401d += _0x1f6da2.hqHZU(_0x1f6da2.IQebl(centerText, _0x34b368[_0x1f6da2.vxAXm], _0x2fd65a[_0x1f6da2.nlIkf(471063, 471059)]), "|");
    var _0x5e82ee;
    const _0x4a97eb = _0x1f6da2.yVarJ(_0x34b368[_0x1f6da2.mXDvo], _0x1f6da2.zBPfM(961613, 961613)) ? _0x1f6da2.RTGwT("+", _0x34b368[_0x1f6da2.mXDvo]) : _0x34b368[_0x1f6da2.mXDvo];
    _0x5e82ee = _0x1f6da2.nlIkf(574856, 574848);
    _0x36401d += _0x1f6da2.oHYte(_0x1f6da2.VZoAv(centerText, _0x4a97eb, _0x2fd65a[_0x1f6da2.ddcpF(321622, 321619)]), "|");
    _0x36401d += _0x1f6da2.hqHZU(_0x1f6da2.ncmcU(centerText, _0x34b368[_0x1f6da2.Cpzul], _0x2fd65a[_0x1f6da2.YrkTN(718346, 718348)]), "|");
    _0x36401d += _0x1f6da2.thttw(_0x1f6da2.pFwom(centerText, _0x34b368[_0x1f6da2.iqocg], _0x2fd65a[_0x1f6da2.VpLNp(624040, 624047)]), "|");
    var _0x5c40c3 = _0x1f6da2.NPtFb(_0x1f6da2.PMoWS(282682, 282680), _0x1f6da2.kHzuX(502105, 502106));
    const _0xc3d432 = _0x1f6da2.yVarJ(_0x34b368[_0x1f6da2.xjEho], _0x1f6da2.JMXQL(328333, 328333)) ? _0x1f6da2.hqHZU("+", _0x34b368[_0x1f6da2.xjEho][_0x1f6da2.HpayC](_0x1f6da2.SXpGH(330502, 330500))) : _0x34b368[_0x1f6da2.xjEho][_0x1f6da2.HpayC](_0x1f6da2.njqaR(667809, 667811));
    _0x5c40c3 = _0x1f6da2.IjroO(_0x1f6da2.uENMi(133018, 133021), _0x1f6da2.LKTYR(448887, 448885));
    _0x36401d += _0x1f6da2.MYhni(_0x1f6da2.pFwom(centerText, _0xc3d432, _0x2fd65a[_0x1f6da2.SXpGH(503853, 503845)]), "|");
    var _0x343ee0 = _0x1f6da2.xMmkO(_0x1f6da2.dshan(938785, 938786), _0x1f6da2.ddcpF(238479, 238478));
    let _0x3cab89 = "完成";
    _0x343ee0 = _0x1f6da2.leGvS(_0x1f6da2.LlbPe(727890, 727892), _0x1f6da2.SXpGH(103951, 103945));
    if (_0x34b368[_0x1f6da2.kHCQM]) {
      _0x3cab89 = "过跳".split("").reverse().join("");
    } else {
      if (_0x34b368[_0x1f6da2.RxqKL]) {
        _0x3cab89 = "限超".split("").reverse().join("");
      } else {
        if (_0x34b368[_0x1f6da2.mncBL]) {
          _0x3cab89 = _0x1f6da2.cdlIz.split("").reverse().join("");
        }
      }
    }
    _0x36401d += _0x1f6da2.ZYRjw(_0x1f6da2.VZoAv(centerText, _0x3cab89, _0x2fd65a[_0x1f6da2.JRYAm(613972, 613981)]), "|");
    console[_0x1f6da2.uJmpA](_0x36401d);
  });
  console[_0x1f6da2.uJmpA]("="[_0x1f6da2.UTSqQ](_0x1f6da2.UrxdQ(820850, 820770)));
  console[_0x1f6da2.uJmpA](_0x1f6da2.YWFgJ(_0x1f6da2.oHYte("|", _0x1f6da2.VZoAv(centerText, _0x1f6da2.keSIm, _0x1f6da2.LKTYR(269444, 269514))), "|"));
  console[_0x1f6da2.uJmpA]("="[_0x1f6da2.UTSqQ](_0x1f6da2.PfxtH(908506, 908426)));
}
async function testSignService() {
  const _0x2ab80d = {
    yclNd: "encsign",
    MwMvi: "dGVzdF9kYX" + "hR".split("").reverse().join(""),
    PFcTu: "test_user",
    HfSap: function (_0x26c449, _0x360303, _0xb840d5, _0x5c37c9) {
      return _0x26c449(_0x360303, _0xb840d5, _0x5c37c9);
    },
    Myxkm: "POST",
    MNadP: function (_0x2b086e, _0x39f839) {
      return _0x2b086e + _0x39f839;
    },
    pXdWr: "SIGN_API_URL",
    FeCAk: "/encsign",
    mSDHO: "stringify",
    baPcH: "application/json",
    orpLK: "试测务服名签ngiscne",
    SBgOc: "log",
    oFxyo: "❌ encsign签名服务测试失败: 无响应",
    oeNnP: "status",
    BIkKl: "✅ encsign签名服务测试成功",
    KDoVu: function (_0x4345cf, _0x14e2ec) {
      return _0x4345cf + _0x14e2ec;
    },
    TlKuX: "❌ encsign签名服务测试失败: ",
    rAWaw: "未知错误",
    XrEzS: function (_0x1b2fd1, _0x9f3bf3) {
      return _0x1b2fd1 + _0x9f3bf3;
    },
    wuwTu: " :常异试测务服名签ngiscne ❌",
    oJzuS: "message"
  };
  try {
    const _0x592eaf = {
        type: _0x2ab80d.yclNd,
        data: _0x2ab80d.MwMvi,
        ud: _0x2ab80d.PFcTu,
        script_version: SCRIPT_VERSION
      },
      {
        response: _0x3a8d11,
        body: _0x7b1f49
      } = await _0x2ab80d.HfSap(sendRequest, {
        method: _0x2ab80d.Myxkm,
        url: _0x2ab80d.MNadP(API_CONFIG[_0x2ab80d.pXdWr], _0x2ab80d.FeCAk),
        body: JSON[_0x2ab80d.mSDHO](_0x592eaf),
        headers: {
          "Content-Type": _0x2ab80d.baPcH
        },
        timeout: 10000
      }, null, _0x2ab80d.orpLK.split("").reverse().join(""));
    if (!_0x3a8d11) {
      console[_0x2ab80d.SBgOc](_0x2ab80d.oFxyo);
      return false;
    }
    return _0x7b1f49 && _0x7b1f49[_0x2ab80d.oeNnP] ? (console[_0x2ab80d.SBgOc](_0x2ab80d.BIkKl), true) : (console[_0x2ab80d.SBgOc](_0x2ab80d.KDoVu(_0x2ab80d.TlKuX, _0x7b1f49?.["message"] || _0x2ab80d.rAWaw)), false);
  } catch (_0x2ada8f) {
    console[_0x2ab80d.SBgOc](_0x2ab80d.XrEzS(_0x2ab80d.wuwTu.split("").reverse().join(""), _0x2ada8f[_0x2ab80d.oJzuS]));
    return false;
  }
}
async function testNssigService() {
  const _0x45589b = {
    qxuEa: function (_0x2e5199) {
      return _0x2e5199();
    },
    WifIr: "nssig",
    YqcJX: "/rest/e/reward/mixed/ad",
    GTqoY: "test=data&salt=test_salt",
    Pkhnb: "test_salt",
    QpxCk: "test_user",
    tpNiZ: function (_0x2ed88c, _0x484dfc, _0x59bbb9, _0x2e1526) {
      return _0x2ed88c(_0x484dfc, _0x59bbb9, _0x2e1526);
    },
    qvqdV: "POST",
    OllsX: function (_0x4b9260, _0x202d37) {
      return _0x4b9260 + _0x202d37;
    },
    bIqmz: "SIGN_API_U" + "LR".split("").reverse().join(""),
    tzIsj: "/nssig",
    Sppid: "stringify",
    VUWZO: "application/json",
    RigEE: "nssig签名服务测试",
    YDUYR: "log",
    mkwQZ: "应响无 :败失试测务服名签gissn ❌",
    QvbBS: "status",
    QGYSD: "功成试测务服名签gissn ✅",
    QroUq: "❌ nssig签名服务测试失败: ",
    GDJwX: "未知错误",
    JQyYX: " :常异试测务服名签gissn ❌",
    BMKqr: "message"
  };
  try {
    const _0x3ccfb0 = _0x45589b.qxuEa(getOrCreateDeviceId),
      _0xd8cfed = {
        type: _0x45589b.WifIr,
        path: _0x45589b.YqcJX,
        data: _0x45589b.GTqoY,
        salt: _0x45589b.Pkhnb,
        ud: _0x45589b.QpxCk,
        script_version: SCRIPT_VERSION,
        device_id: _0x3ccfb0
      },
      {
        response: _0x5e8d00,
        body: _0x2f0db0
      } = await _0x45589b.tpNiZ(sendRequest, {
        method: _0x45589b.qvqdV,
        url: _0x45589b.OllsX(API_CONFIG[_0x45589b.bIqmz], _0x45589b.tzIsj),
        body: JSON[_0x45589b.Sppid](_0xd8cfed),
        headers: {
          "Content-Type": _0x45589b.VUWZO
        },
        timeout: 10000
      }, null, _0x45589b.RigEE);
    if (!_0x5e8d00) {
      console[_0x45589b.YDUYR](_0x45589b.mkwQZ.split("").reverse().join(""));
      return false;
    }
    return _0x2f0db0 && _0x2f0db0[_0x45589b.QvbBS] ? (console[_0x45589b.YDUYR](_0x45589b.QGYSD.split("").reverse().join("")), true) : (console[_0x45589b.YDUYR](_0x45589b.OllsX(_0x45589b.QroUq, _0x2f0db0?.["message"] || _0x45589b.GDJwX)), false);
  } catch (_0x43a356) {
    console[_0x45589b.YDUYR](_0x45589b.OllsX(_0x45589b.JQyYX.split("").reverse().join(""), _0x43a356[_0x45589b.BMKqr]));
    return false;
  }
}
(async () => {
  const _0x2f5a1f = {
    UjZJU: function (_0x154807, _0x4effa7) {
      return _0x154807(_0x4effa7);
    },
    gFlig: "push",
    NAiDE: "index",
    cuxnC: "remark",
    gsAnC: "无备注",
    LUCQz: function (_0x1f07a2, _0x4fc601) {
      return _0x1f07a2 + _0x4fc601;
    },
    jNDKS: function (_0x4e57de, _0x2658c7) {
      return _0x4e57de ^ _0x2658c7;
    },
    LXryV: function (_0x357e84, _0x24457a) {
      return _0x357e84 ^ _0x24457a;
    },
    uZCMj: function (_0x348a8f, _0x1e84fb) {
      return _0x348a8f ^ _0x1e84fb;
    },
    gJUBj: function (_0x5c2c15, _0x3f814d) {
      return _0x5c2c15 ^ _0x3f814d;
    },
    xDPjj: "log",
    sqtTo: function (_0xa1a197, _0x48793b) {
      return _0xa1a197 + _0x48793b;
    },
    HlwjP: function (_0x53efdc, _0x2d44f6) {
      return _0x53efdc + _0x2d44f6;
    },
    reRVa: "账号[",
    gVGAZ: function (_0x30ec9d, _0x108c24) {
      return _0x30ec9d + _0x108c24;
    },
    TbtTe: " ❌ 执行异常：",
    MdYIn: "message",
    RFoLM: "0222389201 群知通 版益公久永 ✅",
    bMiVP: function (_0x18ea56) {
      return _0x18ea56();
    },
    pkxBp: function (_0x21631b, _0xd1ae59) {
      return _0x21631b ^ _0xd1ae59;
    },
    cbbvN: "📱 设备ID: ",
    vekId: function (_0x454c00) {
      return _0x454c00();
    },
    wlCpD: function (_0x50d0f2, _0x183a3e) {
      return _0x50d0f2 + _0x183a3e;
    },
    AcwRg: function (_0x4f17a1, _0x57dcb8) {
      return _0x4f17a1 ^ _0x57dcb8;
    },
    dGevZ: function (_0x4968b3, _0x326ca6) {
      return _0x4968b3 + _0x326ca6;
    },
    CELsB: function (_0x1ecce4, _0x4c321e) {
      return _0x1ecce4 ^ _0x4c321e;
    },
    fdKXe: function (_0x4eab70, _0x21be0a) {
      return _0x4eab70 || _0x21be0a;
    },
    FtRvc: "4|6|0|3|1|5|2",
    nJNXf: "常正否是接连络网 .1  ",
    ldjSL: "  3. 服务是否可用",
    xjooW: "exit",
    hpNkh: "  2. 签名服务地址是否正确",
    aswtD: "\n❌ 签名服务测试失败，脚本终止执行",
    wScFZ: "  4. 防火墙或代理设置",
    GDNpM: ":题问下以查检请 ��",
    nmJuh: "length",
    tGqPa: "error",
    KsflE: "\n❌ 错误: 未配置账号信息",
    JivGB: "\n💡 请设置环境变量 ksck 或 ksck1, ksck2... 来配置账号",
    qwKsp: "═══════════════════════════════════════════════════════════════",
    hylvO: "：息信置配前当 ��",
    ROhao: " :)TIMIL_NIOCSK( 限上币金  ",
    Rptnd: "  低奖励阈值 (KSLOW_REWARD_THRESHOLD): ",
    AhEYL: function (_0xa18397, _0x151ae8) {
      return _0xa18397 + _0x151ae8;
    },
    woDPA: "  连续低奖励上限 (KSLOW_REWARD_LIMIT): ",
    RJkFn: function (_0x55fdc5, _0x3fb74c) {
      return _0x55fdc5 + _0x3fb74c;
    },
    lQweD: "( 行进时同号账个每 :略策发并  ",
    ixexk: " 并发)",
    bGzwI: function (_0x2b17d5, _0x238d83) {
      return _0x2b17d5 + _0x238d83;
    },
    qWbno: "  跳过直播广告 (SKIP_LIVE_ADS): ",
    VCZXM: "启用，重试",
    ujPNV: " :)ksaT( 务任行执  ",
    ujwFz: "join",
    xIKRn: "includes",
    PNeEC: "look",
    bPaLD: function (_0x2815d5, _0x36abc3) {
      return _0x2815d5 + _0x36abc3;
    },
    kVNKg: " :)TNUOC_KOOLSK( 数次行执总 kool  ",
    OGWim: "box",
    FgFlt: function (_0x18887d, _0x49c488) {
      return _0x18887d + _0x49c488;
    },
    iqVuk: "  box 总执行次数 (KSBOX_COUNT): ",
    xogKn: "food",
    ilZPS: " :)TNUOC_DOOFSK( 数次行执总 doof  ",
    LIvkp: "xobk",
    cvhNO: function (_0x1c7ae5, _0x80758a) {
      return _0x1c7ae5 + _0x80758a;
    },
    CGKqY: "  kbox 总执行次数 (KSKBOX_COUNT): ",
    Nrbiq: "hcraes",
    dwhzY: function (_0x4e2361, _0x4104ed) {
      return _0x4e2361 + _0x4104ed;
    },
    aXRUb: "  search 总执行次数 (KSSEARCH_COUNT): ",
    tJgGJ: "look_follow",
    LZCYn: function (_0x2b2790, _0x37208e) {
      return _0x2b2790 + _0x37208e;
    },
    yrbGU: "  每次 look 成功追加 look_follow 次数 (KSFOLLOW_COUNT): ",
    hSmNV: "search_follow",
    Hcewi: function (_0x1a2a32, _0x57ec01) {
      return _0x1a2a32 + _0x57ec01;
    },
    iXoDS: "  每次 search 成功追加 search_follow 次数 (KSSEARCHFOLLOW_COUNT): ",
    iKPRC: "0222389201 群知通 版益公久永 ",
    hxJkb: "\n═══════════════════════════════════════════════════════════════",
    WYCqj: " 共，务任行执始开 " + "��".split("").reverse().join(""),
    kZvTw: "\n...号账个 ",
    uElVz: "max",
    HQTDY: function (_0x53a75b, _0x3fbcca) {
      return _0x53a75b ^ _0x3fbcca;
    },
    HJGlK: "min",
    qOxFT: function (_0x11b107, _0x316025, _0x2b411b, _0x50cf93) {
      return _0x11b107(_0x316025, _0x2b411b, _0x50cf93);
    },
    TxSmF: "sort",
    tLahf: "。成完部全\n",
    qJCdA: "\n---------------------------------------------- 账号信息汇总 ----------------------------------------------"
  };
  console[_0x2f5a1f.xDPjj](_0x2f5a1f.RFoLM.split("").reverse().join(""));
  var _0x297134;
  const _0x3649dd = _0x2f5a1f.bMiVP(getOrCreateDeviceId);
  _0x297134 = _0x2f5a1f.pkxBp(296762, 296754);
  console[_0x2f5a1f.xDPjj](_0x2f5a1f.sqtTo(_0x2f5a1f.cbbvN, _0x3649dd));
  const _0x2798aa = await _0x2f5a1f.vekId(testSignService);
  var _0x1f6d2d = _0x2f5a1f.wlCpD(_0x2f5a1f.LXryV(553080, 553085), _0x2f5a1f.AcwRg(890504, 890509));
  const _0x24f36c = await _0x2f5a1f.bMiVP(testNssigService);
  _0x1f6d2d = _0x2f5a1f.dGevZ(_0x2f5a1f.CELsB(856412, 856410), _0x2f5a1f.LXryV(585750, 585749));
  if (_0x2f5a1f.fdKXe(!_0x2798aa, !_0x24f36c)) {
    const _0x13a24b = _0x2f5a1f.FtRvc.split("|");
    let _0x49c59f = 0;
    while (true) {
      switch (_0x13a24b[_0x49c59f++]) {
        case "0":
          console[_0x2f5a1f.xDPjj](_0x2f5a1f.nJNXf.split("").reverse().join(""));
          continue;
        case "1":
          console[_0x2f5a1f.xDPjj](_0x2f5a1f.ldjSL);
          continue;
        case "2":
          process[_0x2f5a1f.xjooW](_0x2f5a1f.CELsB(308046, 308047));
          continue;
        case "3":
          console[_0x2f5a1f.xDPjj](_0x2f5a1f.hpNkh);
          continue;
        case "4":
          console[_0x2f5a1f.xDPjj](_0x2f5a1f.aswtD);
          continue;
        case "5":
          console[_0x2f5a1f.xDPjj](_0x2f5a1f.wScFZ);
          continue;
        case "6":
          console[_0x2f5a1f.xDPjj](_0x2f5a1f.GDNpM.split("").reverse().join(""));
          continue;
      }
      break;
    }
  }
  const _0x1b531c = _0x2f5a1f.bMiVP(getAllAccountConfigs);
  !_0x1b531c[_0x2f5a1f.nmJuh] && (console[_0x2f5a1f.tGqPa](_0x2f5a1f.KsflE), console[_0x2f5a1f.xDPjj](_0x2f5a1f.JivGB), process[_0x2f5a1f.xjooW](_0x2f5a1f.LXryV(257707, 257706)));
  console[_0x2f5a1f.xDPjj](_0x2f5a1f.qwKsp);
  console[_0x2f5a1f.xDPjj](_0x2f5a1f.hylvO.split("").reverse().join(""));
  console[_0x2f5a1f.xDPjj](_0x2f5a1f.HlwjP(_0x2f5a1f.ROhao.split("").reverse().join(""), COIN_LIMIT));
  console[_0x2f5a1f.xDPjj](_0x2f5a1f.gVGAZ(_0x2f5a1f.Rptnd, LOW_REWARD_THRESHOLD));
  console[_0x2f5a1f.xDPjj](_0x2f5a1f.AhEYL(_0x2f5a1f.woDPA, LOW_REWARD_LIMIT));
  console[_0x2f5a1f.xDPjj](_0x2f5a1f.RJkFn(_0x2f5a1f.HlwjP(_0x2f5a1f.lQweD.split("").reverse().join(""), accountCount), _0x2f5a1f.ixexk));
  console[_0x2f5a1f.xDPjj](_0x2f5a1f.bGzwI(_0x2f5a1f.qWbno, SKIP_LIVE_ADS ? _0x2f5a1f.dGevZ(_0x2f5a1f.AhEYL(_0x2f5a1f.VCZXM, SKIP_LIVE_MAX_RETRIES), "次") : "禁用"));
  console[_0x2f5a1f.xDPjj](_0x2f5a1f.sqtTo(_0x2f5a1f.ujPNV.split("").reverse().join(""), tasksToExecute[_0x2f5a1f.ujwFz](", ")));
  tasksToExecute[_0x2f5a1f.xIKRn](_0x2f5a1f.PNeEC) && console[_0x2f5a1f.xDPjj](_0x2f5a1f.bPaLD(_0x2f5a1f.kVNKg.split("").reverse().join(""), LOOK_COUNT));
  tasksToExecute[_0x2f5a1f.xIKRn](_0x2f5a1f.OGWim) && console[_0x2f5a1f.xDPjj](_0x2f5a1f.FgFlt(_0x2f5a1f.iqVuk, BOX_COUNT));
  tasksToExecute[_0x2f5a1f.xIKRn](_0x2f5a1f.xogKn) && console[_0x2f5a1f.xDPjj](_0x2f5a1f.bPaLD(_0x2f5a1f.ilZPS.split("").reverse().join(""), FOOD_COUNT));
  tasksToExecute[_0x2f5a1f.xIKRn](_0x2f5a1f.LIvkp.split("").reverse().join("")) && console[_0x2f5a1f.xDPjj](_0x2f5a1f.cvhNO(_0x2f5a1f.CGKqY, KBOX_COUNT));
  tasksToExecute[_0x2f5a1f.xIKRn](_0x2f5a1f.Nrbiq.split("").reverse().join("")) && console[_0x2f5a1f.xDPjj](_0x2f5a1f.dwhzY(_0x2f5a1f.aXRUb, SEARCH_COUNT));
  tasksToExecute[_0x2f5a1f.xIKRn](_0x2f5a1f.tJgGJ) && console[_0x2f5a1f.xDPjj](_0x2f5a1f.LZCYn(_0x2f5a1f.yrbGU, FOLLOW_COUNT));
  tasksToExecute[_0x2f5a1f.xIKRn](_0x2f5a1f.hSmNV) && console[_0x2f5a1f.xDPjj](_0x2f5a1f.Hcewi(_0x2f5a1f.iXoDS, SEARCH_FOLLOW_COUNT));
  console[_0x2f5a1f.xDPjj](_0x2f5a1f.iKPRC.split("").reverse().join(""));
  console[_0x2f5a1f.xDPjj](_0x2f5a1f.hxJkb.split("").reverse().join(""));
  console[_0x2f5a1f.xDPjj](_0x2f5a1f.FgFlt(_0x2f5a1f.cvhNO(_0x2f5a1f.WYCqj.split("").reverse().join(""), _0x1b531c[_0x2f5a1f.nmJuh]), _0x2f5a1f.kZvTw.split("").reverse().join("")));
  var _0x5334d0;
  const _0x6cfadc = [];
  _0x5334d0 = _0x2f5a1f.Hcewi(_0x2f5a1f.AcwRg(345972, 345972), _0x2f5a1f.uZCMj(590163, 590166));
  const _0x3c0c9d = Math[_0x2f5a1f.uElVz](_0x2f5a1f.HQTDY(193306, 193307), Math[_0x2f5a1f.HJGlK](MAX_CONCURRENCY, _0x1b531c[_0x2f5a1f.nmJuh]));
  await _0x2f5a1f.qOxFT(executeConcurrently, _0x1b531c, _0x3c0c9d, async _0x1075fc => {
    try {
      const _0x4ce78a = await _0x2f5a1f.UjZJU(processAccount, _0x1075fc);
      _0x6cfadc[_0x2f5a1f.gFlig]({
        index: _0x1075fc[_0x2f5a1f.NAiDE],
        remark: _0x1075fc[_0x2f5a1f.cuxnC] || _0x2f5a1f.gsAnC,
        nickname: _0x4ce78a?.["nickname"] || _0x2f5a1f.LUCQz("账号", _0x1075fc[_0x2f5a1f.NAiDE]),
        initialCoin: _0x4ce78a?.["initialCoin"] || _0x2f5a1f.jNDKS(856566, 856566),
        finalCoin: _0x4ce78a?.["finalCoin"] || _0x2f5a1f.LXryV(815209, 815209),
        coinChange: _0x4ce78a?.["coinChange"] || _0x2f5a1f.LXryV(870311, 870311),
        initialCash: _0x4ce78a?.["initialCash"] || _0x2f5a1f.jNDKS(311561, 311561),
        finalCash: _0x4ce78a?.["finalCash"] || _0x2f5a1f.uZCMj(835762, 835762),
        cashChange: _0x4ce78a?.["cashChange"] || _0x2f5a1f.gJUBj(970099, 970099),
        stats: _0x4ce78a?.["stats"] || {},
        coinLimitExceeded: _0x4ce78a?.["coinLimitExceeded"] || false,
        skipped: _0x4ce78a?.["skipped"] || false,
        infoFetchFailed: _0x4ce78a?.["infoFetchFailed"] || false,
        error: _0x4ce78a?.["error"] || null
      });
    } catch (_0x11d597) {
      console[_0x2f5a1f.xDPjj](_0x2f5a1f.LUCQz(_0x2f5a1f.sqtTo(_0x2f5a1f.HlwjP(_0x2f5a1f.sqtTo(_0x2f5a1f.HlwjP(_0x2f5a1f.reRVa, _0x1075fc[_0x2f5a1f.NAiDE]), "]"), _0x1075fc[_0x2f5a1f.cuxnC] ? _0x2f5a1f.LUCQz(_0x2f5a1f.gVGAZ("（", _0x1075fc[_0x2f5a1f.cuxnC]), "）") : ""), _0x2f5a1f.TbtTe), _0x11d597[_0x2f5a1f.MdYIn]));
      _0x6cfadc[_0x2f5a1f.gFlig]({
        index: _0x1075fc[_0x2f5a1f.NAiDE],
        remark: _0x1075fc[_0x2f5a1f.cuxnC] || _0x2f5a1f.gsAnC,
        nickname: _0x2f5a1f.sqtTo("账号", _0x1075fc[_0x2f5a1f.NAiDE]),
        initialCoin: 0,
        finalCoin: 0,
        coinChange: 0,
        initialCash: 0,
        finalCash: 0,
        cashChange: 0,
        error: _0x11d597[_0x2f5a1f.MdYIn],
        skipped: true
      });
    }
  });
  _0x6cfadc[_0x2f5a1f.TxSmF]((_0x1e02e7, _0x550142) => _0x1e02e7.index - _0x550142.index);
  console[_0x2f5a1f.xDPjj](_0x2f5a1f.tLahf.split("").reverse().join(""), "✅");
  console[_0x2f5a1f.xDPjj](_0x2f5a1f.qJCdA);
  _0x2f5a1f.UjZJU(displayResultsTable, _0x6cfadc);
})();