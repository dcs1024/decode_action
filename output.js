//Sat Oct 05 2024 08:06:06 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const _0x45121f = _0x4b43ee("中国联通"),
  _0x2ce733 = require("got"),
  _0x1e690d = require("crypto-js"),
  {
    CookieJar: _0x4a1e9d
  } = require("tough-cookie"),
  _0x1804ea = "chinaUnicom",
  _0x4ab515 = ["\n", "&", "@"],
  _0x3855a4 = [_0x1804ea + "Cookie"],
  _0x44b4cc = 50000,
  _0x3a86fe = 3;
const _0x56f43d = 1.11,
  _0x32b1cf = "chinaUnicom",
  _0x44f545 = "https://leafxcy.coding.net/api/user/leafxcy/project/validcode/shared-depot/validCode/git/blob/master/code.json",
  _0x52d07d = "https://leafxcy.coding.net/api/user/leafxcy/project/validcode/shared-depot/validCode/git/blob/master/" + _0x32b1cf + ".json",
  _0x5378f2 = "Mozilla/5.0 (iPhone; CPU iPhone OS 16_1_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 unicom{version:iphone_c@10.0300}",
  _0x15cb82 = 5,
  _0x3a3b6c = 13,
  _0x33991b = 1000,
  _0x58bad2 = 3600000,
  _0x3b751a = 100,
  _0x32f539 = "d82ac3821b50e6f05f6c684d27d252a584517c685da7130a2bd27361afb4f2e300ab1ecc5a701b4d2d4df69e795299dc08c2c5a1129381372a65a1a9a397eb16cec3c3cc0179f01df450042f3469658331cec050c7d5c50b121dc28b3f31ece6",
  _0x489547 = "73b138fd-250c-4126-94e2-48cbcc8b9cbe",
  _0x3fe791 = "10000002",
  _0x2d7ff2 = "7k1HcDL8RKvc",
  _0x22d6fe = "update!@#1234567",
  _0x19b0cb = "16-Bytes--String",
  _0x14848b = "225",
  _0x149d3a = "225",
  _0x3cfa44 = "party",
  _0x5dc8bf = "6-WfVldfFrt3zhjHhe6kzwI-XfG5aMCzRTLI_4K7_a0",
  _0xde607f = "0123456789",
  _0x20b17f = "qwertyuiopasdfghjklzxcvbnm",
  _0x2ac179 = process.env[_0x1804ea + "Uuid"] || _0x45121f.randomUuid(),
  _0xa2834e = [9, 10, 11, 12, 13],
  _0x3d611d = 1000,
  _0x4084df = 5000,
  _0x186fc9 = "1001000003",
  _0x22a9aa = "100002",
  _0x4f2fdf = "";
let _0x4d9330 = ["mcGM6BOC2/XPOJnsZQYjNw==", "6"],
  _0x26fcd0 = 14,
  _0x2d0a35 = [6640, 6641];
const _0x2256ef = 7;
function _0x1436df(_0x409dcd, _0x5af195, _0x378ec0, _0x4608b0, _0x134e15, _0xa9162f) {
  return _0x1e690d[_0x409dcd].encrypt(_0x1e690d.enc.Utf8.parse(_0x4608b0), _0x1e690d.enc.Utf8.parse(_0x134e15), {
    mode: _0x1e690d.mode[_0x5af195],
    padding: _0x1e690d.pad[_0x378ec0],
    iv: _0x1e690d.enc.Utf8.parse(_0xa9162f)
  }).ciphertext.toString(_0x1e690d.enc.Hex);
}
function _0x43b536(_0x30fa62, _0x212866, _0x1d061a, _0x49fe7e, _0x38ebb5, _0xb2ac19) {
  return _0x1e690d[_0x30fa62].decrypt({
    ciphertext: _0x1e690d.enc.Hex.parse(_0x49fe7e)
  }, _0x1e690d.enc.Utf8.parse(_0x38ebb5), {
    mode: _0x1e690d.mode[_0x212866],
    padding: _0x1e690d.pad[_0x1d061a],
    iv: _0x1e690d.enc.Utf8.parse(_0xb2ac19)
  }).toString(_0x1e690d.enc.Utf8);
}
class _0x4db827 {
  constructor() {
    this.index = _0x45121f.userIdx++;
    this.name = "";
    this.valid = false;
    const _0x2ae476 = {
      limit: 0
    };
    const _0xa4e26a = {
      Connection: "keep-alive"
    };
    const _0x1dd389 = {
      retry: _0x2ae476,
      timeout: _0x44b4cc,
      followRedirect: false,
      headers: _0xa4e26a
    };
    this.got = _0x2ce733.extend(_0x1dd389);
  }
  log(_0x20ed16, _0x1af1ee = {}) {
    var _0x2db081 = "",
      _0x56c40a = _0x45121f.userCount.toString().length;
    if (this.index) {
      _0x2db081 += "账号[" + _0x45121f.padStr(this.index, _0x56c40a) + "]";
    }
    if (this.name) {
      _0x2db081 += "[" + this.name + "]";
    }
    _0x45121f.log(_0x2db081 + _0x20ed16, _0x1af1ee);
  }
  set_cookie(_0x1821ed, _0x4a2af2, _0x411520, _0x406bbc, _0x10b423 = {}) {
    this.cookieJar.setCookieSync(_0x1821ed + "=" + _0x4a2af2 + "; Domain=" + _0x411520 + ";", "" + _0x406bbc);
  }
  async request(_0x2ce7e6) {
    const _0x10cb69 = ["ECONNRESET", "EADDRINUSE", "ENOTFOUND", "EAI_AGAIN"],
      _0x45ec1b = ["TimeoutError"];
    var _0x5423b1 = null,
      _0x4a46d7 = 0,
      _0x35a62c = _0x2ce7e6.fn || _0x2ce7e6.url;
    _0x2ce7e6.method = _0x2ce7e6?.["method"]?.["toUpperCase"]() || "GET";
    let _0x53a2e4;
    while (_0x4a46d7 < _0x3a86fe) {
      try {
        _0x4a46d7++;
        _0x53a2e4 = null;
        let _0x259ad4 = null,
          _0x2ec2a3 = _0x2ce7e6?.["timeout"] || this.got?.["defaults"]?.["options"]?.["timeout"]?.["request"] || _0x44b4cc,
          _0x45255f = false;
        await new Promise(async _0x253409 => {
          setTimeout(() => {
            _0x45255f = true;
            _0x253409();
          }, _0x2ec2a3);
          await this.got(_0x2ce7e6).then(_0x7929a6 => {
            _0x5423b1 = _0x7929a6;
          }, _0x363baf => {
            _0x259ad4 = _0x363baf;
            _0x5423b1 = _0x363baf.response;
            _0x53a2e4 = _0x259ad4?.["code"];
          });
          _0x253409();
        });
        if (_0x45255f) {
          this.log("[" + _0x35a62c + "]请求超时(" + _0x2ec2a3 / 1000 + "秒)，重试第" + _0x4a46d7 + "次");
        } else {
          if (_0x45ec1b.includes(_0x259ad4?.["name"])) {
            this.log("[" + _0x35a62c + "]请求超时(" + _0x259ad4.code + ")，重试第" + _0x4a46d7 + "次");
          } else {
            if (_0x10cb69.includes(_0x259ad4?.["code"])) {
              this.log("[" + _0x35a62c + "]请求错误(" + _0x259ad4.code + ")，重试第" + _0x4a46d7 + "次");
            } else {
              let _0x590a3a = _0x5423b1?.["statusCode"] || 999,
                _0xc7fb74 = _0x590a3a / 100 | 0;
              if (_0xc7fb74 > 3) {
                this.log("请求[" + _0x35a62c + "]返回[" + _0x590a3a + "]");
              }
              if (_0xc7fb74 <= 4) {
                break;
              }
            }
          }
        }
      } catch (_0x45a1ae) {
        _0x45a1ae.name == "TimeoutError" ? this.log("[" + _0x35a62c + "]请求超时，重试第" + _0x4a46d7 + "次") : this.log("[" + _0x35a62c + "]请求错误(" + _0x45a1ae.message + ")，重试第" + _0x4a46d7 + "次");
      }
    }
    if (_0x5423b1 == null) {
      return Promise.resolve({
        statusCode: _0x53a2e4 || -1,
        headers: null,
        result: null
      });
    }
    let {
      statusCode: _0x114b23,
      headers: _0x28be77,
      body: _0x459d6e
    } = _0x5423b1;
    if (_0x459d6e) {
      try {
        _0x459d6e = JSON.parse(_0x459d6e);
      } catch {}
    }
    const _0x158c15 = {
      statusCode: _0x114b23,
      headers: _0x28be77,
      result: _0x459d6e
    };
    return Promise.resolve(_0x158c15);
  }
}
let _0xdff388 = new _0x4db827();
class _0x4ca15c extends _0x4db827 {
  constructor(_0x12aeea) {
    super();
    this.cookieJar = new _0x4a1e9d();
    const _0x520eae = {
      "User-Agent": _0x5378f2
    };
    this.got = this.got.extend({
      cookieJar: this.cookieJar,
      headers: _0x520eae
    });
    let _0x31b428 = _0x12aeea.split("#");
    this.token_online = _0x31b428[0];
    this.unicomTokenId = _0x45121f.randomString(32);
    this.tokenId_cookie = "chinaunicom-" + _0x45121f.randomString(32, _0xde607f + _0x20b17f).toUpperCase();
    this.rptId = "";
    this.city = [];
    this.t_flmf_task = 0;
    this.t_woread_draw = 0;
    this.need_read_rabbit = false;
    this.need_read_moonbox = false;
    this.set_cookie("TOKENID_COOKIE", this.tokenId_cookie);
    this.set_cookie("UNICOM_TOKENID", this.unicomTokenId);
    this.set_cookie("sdkuuid", this.unicomTokenId);
  }
  set_cookie(_0x229fff, _0x2885da, _0x515811 = {}) {
    let _0x4d4001 = _0x515811?.["domain"] || "10010.com",
      _0x5de7fb = _0x515811?.["currentUrl"] || "https://epay.10010.com";
    super.set_cookie(_0x229fff, _0x2885da, _0x4d4001, _0x5de7fb, _0x515811);
  }
  get_bizchannelinfo() {
    const _0x34bbfc = {
      bizChannelCode: _0x149d3a,
      disriBiz: _0x3cfa44,
      unionSessionId: "",
      stType: "",
      stDesmobile: "",
      source: "",
      rptId: this.rptId,
      ticket: "",
      tongdunTokenId: this.tokenId_cookie,
      xindunTokenId: this.sdkuuid
    };
    let _0x211a08 = JSON.stringify(_0x34bbfc);
    return _0x211a08;
  }
  get_epay_authinfo() {
    const _0x4870c5 = {
      mobile: "",
      sessionId: this.sessionId,
      tokenId: this.tokenId,
      userId: ""
    };
    return JSON.stringify(_0x4870c5);
  }
  get_flmf_data(_0x353640 = "welfareCenter") {
    const _0x4d1e3c = {
      sid: this.flmf_sid,
      actcode: _0x353640
    };
    return _0x4d1e3c;
  }
  encode_woread(_0x5ced25) {
    let _0x1fd34e = _0x1436df("AES", "CBC", "Pkcs7", JSON.stringify(_0x5ced25), _0x22d6fe, _0x19b0cb);
    return Buffer.from(_0x1fd34e, "utf-8").toString("base64");
  }
  get_woread_param() {
    return {
      timestamp: _0x45121f.time("yyyyMMddhhmmss"),
      token: this.woread_token,
      userid: this.woread_userid,
      userId: this.woread_userid,
      userIndex: this.woread_userIndex,
      userAccount: this.mobile,
      verifyCode: this.woread_verifycode
    };
  }
  get_ltyp_sign_header(_0x444117) {
    let _0x4309cd = Date.now(),
      _0x542467 = Math.floor(89999 * Math.random()) + 100000,
      _0x2ef28b = _0x22a9aa,
      _0xc39f4c = _0x4f2fdf,
      _0x1ee5c6 = _0x1e690d.MD5(_0x444117 + _0x4309cd + _0x542467 + _0x2ef28b + _0xc39f4c).toString();
    const _0x2ef61f = {
      key: _0x444117,
      resTime: _0x4309cd,
      reqSeq: _0x542467,
      channel: _0x2ef28b,
      version: _0xc39f4c,
      sign: _0x1ee5c6
    };
    return _0x2ef61f;
  }
  async onLine(_0x29896a = {}) {
    let _0x215959 = false;
    try {
      let _0x24aee5 = {
          fn: "onLine",
          method: "post",
          url: "https://m.client.10010.com/mobileService/onLine.htm",
          form: {
            token_online: this.token_online,
            reqtime: _0x45121f.time("yyyy-MM-dd hh:mm:ss"),
            appId: _0x32f539,
            version: "iphone_c@10.0300",
            step: "bindlist",
            isFirstInstall: 0,
            deviceModel: "iPhone"
          }
        },
        {
          result: _0xa2be8d,
          statusCode: _0x10f3f7
        } = await this.request(_0x24aee5),
        _0x416d49 = _0x45121f.get(_0xa2be8d, "code", _0x10f3f7);
      _0x416d49 == 0 ? (_0x215959 = true, this.valid = true, this.mobile = _0xa2be8d?.["desmobile"], this.name = _0xa2be8d?.["desmobile"], this.ecs_token = _0xa2be8d?.["ecs_token"], this.city = _0xa2be8d?.["list"], this.log("登录成功")) : (this.valid = false, this.log("登录失败[" + _0x416d49 + "]"));
    } catch (_0x4e8bf9) {
      console.log(_0x4e8bf9);
    } finally {
      return _0x215959;
    }
  }
  async openPlatLineNew(_0x137367, _0x2cb282 = {}) {
    const _0x2e187b = {
      ticket: "",
      type: "",
      loc: ""
    };
    let _0x2daf37 = _0x2e187b;
    try {
      const _0x10c0ca = {
        to_url: _0x137367
      };
      const _0x17bc0e = {
        fn: "openPlatLineNew",
        method: "get",
        url: "https://m.client.10010.com/mobileService/openPlatform/openPlatLineNew.htm",
        searchParams: _0x10c0ca
      };
      let {
        headers: _0x3be721,
        statusCode: _0x4113da
      } = await this.request(_0x17bc0e);
      if (_0x3be721?.["location"]) {
        let _0x3c5515 = new URL(_0x3be721.location),
          _0x36b69d = _0x3c5515.searchParams.get("type") || "02",
          _0x4aa696 = _0x3c5515.searchParams.get("ticket");
        !_0x4aa696 && this.log("获取ticket失败");
        const _0x53b7e4 = {
          loc: _0x3be721.location,
          ticket: _0x4aa696,
          type: _0x36b69d
        };
        _0x2daf37 = _0x53b7e4;
      } else {
        this.log("获取ticket失败[" + _0x4113da + "]");
      }
    } catch (_0x490bcc) {
      console.log(_0x490bcc);
    } finally {
      return _0x2daf37;
    }
  }
  async gettaskip(_0x1fb873 = {}) {
    let _0x1367d0 = _0x45121f.randomString(32).toUpperCase();
    try {
      const _0xd815cb = {
        mobile: this.mobile,
        orderId: _0x1367d0
      };
      const _0x504f6e = {
        fn: "gettaskip",
        method: "post",
        url: "https://m.client.10010.com/taskcallback/topstories/gettaskip",
        form: _0xd815cb
      };
      await this.request(_0x504f6e);
    } catch (_0x5651c0) {
      console.log(_0x5651c0);
    } finally {
      return _0x1367d0;
    }
  }
  async draw_28_queryChance(_0x3e7cc5 = {}) {
    try {
      const _0xf061b5 = {
        fn: "draw_28_queryChance",
        method: "post",
        url: "https://m.client.10010.com/AppMonthly/appMonth/queryChance"
      };
      let {
          result: _0x4b2b97,
          statusCode: _0x3c7029
        } = await this.request(_0xf061b5),
        _0x2278be = _0x45121f.get(_0x4b2b97, "status", _0x3c7029);
      if (_0x2278be == "0000") {
        let _0x3f0275 = parseInt(_0x4b2b97?.["data"]?.["allRemainTimes"] || 0);
        this.log("28日五折日可以抽奖" + _0x3f0275 + "次");
        let _0x434da8 = false;
        while (_0x3f0275-- > 0) {
          if (_0x434da8) {
            await _0x45121f.wait(8000);
          }
          _0x434da8 = true;
          await this.draw_28_lottery();
        }
      } else {
        let _0x1dd2f9 = _0x4b2b97?.["message"] || _0x4b2b97?.["msg"] || "";
        this.log("28日五折日查询抽奖次数失败[" + _0x2278be + "]: " + _0x1dd2f9);
      }
    } catch (_0x520fd6) {
      console.log(_0x520fd6);
    }
  }
  async draw_28_lottery(_0x40082c = {}) {
    try {
      const _0x189a95 = {
        fn: "draw_28_lottery",
        method: "post",
        url: "https://m.client.10010.com/AppMonthly/appMonth/lottery"
      };
      let {
          result: _0x29245c,
          statusCode: _0x2240a3
        } = await this.request(_0x189a95),
        _0x27e328 = _0x45121f.get(_0x29245c, "status", _0x2240a3);
      if (_0x27e328 == "0000") {
        let _0x139651 = _0x45121f.get(_0x29245c?.["data"], "code", -1);
        if (_0x29245c?.["data"]?.["uuid"]) {
          await _0x45121f.wait(2000);
          await this.draw_28_winningRecord(_0x29245c.data.uuid);
        } else {
          let _0x37a594 = _0x29245c?.["data"]?.["message"] || _0x29245c?.["data"]?.["msg"] || "";
          this.log("28日五折日抽奖失败[" + _0x139651 + "]: " + _0x37a594);
        }
      } else {
        let _0x53343d = _0x29245c?.["message"] || _0x29245c?.["msg"] || "";
        this.log("28日五折日抽奖失败[" + _0x27e328 + "]: " + _0x53343d);
      }
    } catch (_0x466ab8) {
      console.log(_0x466ab8);
    }
  }
  async draw_28_winningRecord(_0x444f36, _0x4994de = {}) {
    try {
      const _0x54ec35 = {
        requestId: _0x444f36
      };
      const _0x33f7c1 = {
        fn: "draw_28_winningRecord",
        method: "post",
        url: "https://m.client.10010.com/AppMonthly/appMonth/winningRecord",
        form: _0x54ec35
      };
      let {
          result: _0x5f49c9,
          statusCode: _0x4d1942
        } = await this.request(_0x33f7c1),
        _0x51edae = _0x45121f.get(_0x5f49c9, "status", _0x4d1942);
      if (_0x51edae == "0000") {
        let _0xabc20d = _0x45121f.get(_0x5f49c9?.["data"], "code", -1);
        if (_0xabc20d == "0000") {
          const _0x5c136c = {
            notify: true
          };
          this.log("28日五折日抽奖: " + _0x5f49c9?.["data"]?.["prizeName"]?.["replace"](/\t/g, ""), _0x5c136c);
        } else {
          let _0x212039 = _0x5f49c9?.["data"]?.["message"] || _0x5f49c9?.["data"]?.["msg"] || "";
          this.log("查询28日五折日抽奖结果失败[" + _0xabc20d + "]: " + _0x212039);
        }
      } else {
        let _0x494a94 = _0x5f49c9?.["message"] || _0x5f49c9?.["msg"] || "";
        this.log("查询28日五折日抽奖结果失败[" + _0x51edae + "]: " + _0x494a94);
      }
    } catch (_0x556bdf) {
      console.log(_0x556bdf);
    }
  }
  async ttlxj_authorize(_0x39352f, _0x56f4a6, _0x102550, _0x3243de = {}) {
    try {
      let _0x1d1090 = {
          fn: "ttlxj_authorize",
          method: "post",
          url: "https://epay.10010.com/woauth2/v2/authorize",
          headers: {
            Origin: "https://epay.10010.com",
            Referer: _0x102550
          },
          json: {
            response_type: "rptid",
            client_id: _0x489547,
            redirect_uri: "https://epay.10010.com/ci-mps-st-web/",
            login_hint: {
              credential_type: "st_ticket",
              credential: _0x39352f,
              st_type: _0x56f4a6,
              force_logout: true,
              source: "app_sjyyt"
            },
            device_info: {
              token_id: "chinaunicom-pro-" + Date.now() + "-" + _0x45121f.randomString(13),
              trace_id: _0x45121f.randomString(32)
            }
          }
        },
        {
          result: _0x4b6bfc
        } = await this.request(_0x1d1090),
        _0x37c2ab = _0x45121f.get(_0x4b6bfc, "status", -1);
      if (_0x37c2ab == 200) {
        await this.ttlxj_authCheck();
      } else {
        let _0x7cfc8d = _0x4b6bfc?.["message"] || _0x4b6bfc?.["msg"] || "";
        this.log("天天领现金获取SESSION失败[" + _0x37c2ab + "]: " + _0x7cfc8d);
      }
    } catch (_0x2deabf) {
      console.log(_0x2deabf);
    }
  }
  async ttlxj_authCheck(_0xcf60d4 = {}) {
    try {
      let _0x427557 = {
          fn: "ttlxj_authCheck",
          method: "post",
          url: "https://epay.10010.com/ps-pafs-auth-front/v1/auth/check",
          headers: {
            bizchannelinfo: this.get_bizchannelinfo()
          }
        },
        {
          result: _0x1deffa
        } = await this.request(_0x427557),
        _0x4f22af = _0x45121f.get(_0x1deffa, "code", -1);
      if (_0x4f22af == "0000") {
        let {
          mobile: _0x126769,
          sessionId: _0x509d42,
          tokenId: _0x2479d5,
          userId: _0x5a0a8d
        } = _0x1deffa?.["data"]?.["authInfo"];
        const _0x494f41 = {
          sessionId: _0x509d42,
          tokenId: _0x2479d5,
          userId: _0x5a0a8d
        };
        Object.assign(this, _0x494f41);
        await this.ttlxj_userDrawInfo();
        await this.ttlxj_queryAvailable();
      } else {
        if (_0x4f22af == "2101000100") {
          let _0xd92835 = _0x1deffa?.["data"]?.["woauth_login_url"];
          await this.ttlxj_login(_0xd92835);
        } else {
          let _0xa7f6a3 = _0x1deffa?.["msgInside"] || _0x1deffa?.["msg"] || "";
          this.log("天天领现金获取tokenId失败[" + _0x4f22af + "]: " + _0xa7f6a3);
        }
      }
    } catch (_0x14ce63) {
      console.log(_0x14ce63);
    }
  }
  async ttlxj_login(_0x54fe22, _0x464665 = {}) {
    try {
      _0x54fe22 += "https://epay.10010.com/ci-mcss-party-web/clockIn/?bizFrom=" + _0x14848b + "&bizChannelCode=" + _0x149d3a;
      const _0x46dba4 = {
        fn: "ttlxj_login",
        method: "get",
        url: _0x54fe22
      };
      let {
        headers: _0x210876,
        statusCode: _0x25d009
      } = await this.request(_0x46dba4);
      if (_0x210876?.["location"]) {
        let _0x40c71d = new URL(_0x210876.location);
        this.rptId = _0x40c71d.searchParams.get("rptid");
        this.rptId ? await this.ttlxj_authCheck() : this.log("天天领现金获取rptid失败");
      } else {
        this.log("天天领现金获取rptid失败[" + _0x25d009 + "]");
      }
    } catch (_0x3bae5b) {
      console.log(_0x3bae5b);
    }
  }
  async ttlxj_userDrawInfo(_0x1f0fcf = {}) {
    try {
      let _0x323f0f = {
          fn: "ttlxj_userDrawInfo",
          method: "post",
          url: "https://epay.10010.com/ci-mcss-party-front/v1/ttlxj/userDrawInfo",
          headers: {
            bizchannelinfo: this.get_bizchannelinfo(),
            authinfo: this.get_epay_authinfo()
          }
        },
        {
          result: _0x1b840b
        } = await this.request(_0x323f0f),
        _0x311037 = _0x45121f.get(_0x1b840b, "code", -1);
      if (_0x311037 == "0000") {
        let _0x1b05fc = _0x1b840b?.["data"]?.["dayOfWeek"],
          _0x34154c = "day" + _0x1b05fc,
          _0x296e81 = _0x1b840b?.["data"]?.[_0x34154c] == "1";
        const _0x821e2b = {
          notify: true
        };
        this.log("天天领现金今天" + (_0x296e81 ? "未" : "已") + "打卡", _0x821e2b);
        if (_0x296e81) {
          let _0x205cb3 = new Date().getDay();
          _0x205cb3 % 7 == 0 ? await this.ttlxj_unifyDrawNew("C") : await this.ttlxj_unifyDrawNew("B");
        }
      } else {
        let _0x3cc496 = _0x1b840b?.["msg"] || "";
        this.log("天天领现金查询失败[" + _0x311037 + "]: " + _0x3cc496);
      }
    } catch (_0x389f2a) {
      console.log(_0x389f2a);
    }
  }
  async ttlxj_unifyDrawNew(_0x15ae46, _0x4f3ddf = {}) {
    try {
      let _0x92b956 = {
          fn: "ttlxj_unifyDrawNew",
          method: "post",
          url: "https://epay.10010.com/ci-mcss-party-front/v1/ttlxj/unifyDrawNew",
          headers: {
            bizchannelinfo: this.get_bizchannelinfo(),
            authinfo: this.get_epay_authinfo()
          },
          form: {
            drawType: _0x15ae46,
            bizFrom: _0x14848b,
            activityId: "TTLXJ20210330"
          }
        },
        {
          result: _0x3c9199
        } = await this.request(_0x92b956),
        _0x3dce59 = _0x45121f.get(_0x3c9199, "code", -1);
      if (_0x3dce59 == "0000" && _0x3c9199?.["data"]?.["returnCode"] == 0) {
        let _0x4236de = _0x3c9199?.["data"]?.["awardTipContent"]?.["replace"](/xx/, _0x3c9199?.["data"]?.["amount"]);
        const _0xe9ade0 = {
          notify: true
        };
        this.log("天天领现金打卡:" + _0x4236de, _0xe9ade0);
      } else {
        let _0x5ad050 = _0x3c9199?.["data"]?.["returnMsg"] || _0x3c9199?.["msg"] || "";
        this.log("天天领现金打卡失败[" + (_0x3c9199?.["data"]?.["returnCode"] || _0x3dce59) + "]: " + _0x5ad050);
      }
    } catch (_0x143cf2) {
      console.log(_0x143cf2);
    }
  }
  async ttlxj_h(_0x332f92 = {}) {
    try {
      let _0x53b298 = {
        fn: "ttlxj_h",
        method: "post",
        url: "https://epay.10010.com/ci-mcss-party-front/v1/ttlxj/help",
        headers: {
          bizchannelinfo: this.get_bizchannelinfo(),
          authinfo: this.get_epay_authinfo()
        },
        form: {
          bizFrom: _0x14848b,
          activityId: "TTLXJ20210330",
          uid: _0x5dc8bf
        }
      };
      await this.request(_0x53b298);
    } catch (_0x576af5) {
      console.log(_0x576af5);
    }
  }
  async ttlxj_queryAvailable(_0x2f55af = {}) {
    try {
      let _0x1b0bcd = {
          fn: "ttlxj_queryAvailable",
          method: "post",
          url: "https://epay.10010.com/ci-mcss-party-front/v1/ttlxj/queryAvailable",
          headers: {
            bizchannelinfo: this.get_bizchannelinfo(),
            authinfo: this.get_epay_authinfo()
          }
        },
        {
          result: _0x15673a
        } = await this.request(_0x1b0bcd),
        _0x30e74f = _0x45121f.get(_0x15673a, "code", -1);
      if (_0x30e74f == "0000" && _0x15673a?.["data"]?.["returnCode"] == 0) {
        let _0x40b991 = _0x15673a?.["data"]?.["availableAmount"] || 0;
        const _0x30bea4 = {
          notify: true
        };
        this.log("可用立减金: " + (_0x40b991 / 100).toFixed(2) + "元", _0x30bea4);
        let _0x52c04c = [],
          _0x286d14 = Date.now();
        for (let _0x4b6164 of _0x15673a?.["data"]?.["prizeList"]?.["filter"](_0x3b1770 => _0x3b1770.status == "A")) {
          let _0x226cd2 = _0x4b6164.endTime,
            _0x34fab4 = new Date(_0x226cd2.slice(0, 4) + "-" + _0x226cd2.slice(4, 6) + "-" + _0x226cd2.slice(6, 8) + " 00:00:00"),
            _0x47f106 = _0x34fab4.getTime();
          if (_0x47f106 - _0x286d14 < _0x2256ef * 24 * 60 * 60 * 1000) {
            let _0x4cb969 = _0x45121f.time("yyyy-MM-dd", _0x47f106);
            const _0x369ec4 = {
              timestamp: _0x47f106,
              date: _0x4cb969,
              amount: _0x4b6164.amount
            };
            _0x52c04c.push(_0x369ec4);
          }
        }
        if (_0x52c04c.length) {
          const _0x7e8615 = {
            timestamp: 0
          };
          let _0x439cc1 = _0x7e8615,
            _0x331018 = _0x52c04c.reduce(function (_0x42b83b, _0x26cc28) {
              (_0x439cc1.timestamp == 0 || _0x26cc28.timestamp < _0x439cc1.timestamp) && (_0x439cc1 = _0x26cc28);
              return _0x42b83b + parseFloat(_0x26cc28.amount);
            }, 0);
          const _0x3c118c = {
            notify: true
          };
          this.log(_0x2256ef + "天内过期立减金: " + _0x331018.toFixed(2) + "元", _0x3c118c);
          const _0x55c831 = {
            notify: true
          };
          this.log("最早过期立减金: " + _0x439cc1.amount + "元 -- " + _0x439cc1.date + "过期", _0x55c831);
        } else {
          const _0x5029cf = {
            notify: true
          };
          this.log(_0x2256ef + "天内没有过期的立减金", _0x5029cf);
        }
      } else {
        let _0x159101 = _0x15673a?.["data"]?.["returnMsg"] || _0x15673a?.["msg"] || "";
        this.log("天天领现金打卡失败[" + (_0x15673a?.["data"]?.["returnCode"] || _0x30e74f) + "]: " + _0x159101);
      }
    } catch (_0x1b6bb8) {
      console.log(_0x1b6bb8);
    }
  }
  async epay_28_authCheck(_0xf34ded = {}) {
    try {
      let _0x3c68dd = {
          fn: "epay_28_authCheck",
          method: "post",
          url: "https://epay.10010.com/ps-pafs-auth-front/v1/auth/check",
          headers: {
            bizchannelinfo: this.get_bizchannelinfo()
          }
        },
        {
          result: _0x585671
        } = await this.request(_0x3c68dd),
        _0xfaba0a = _0x45121f.get(_0x585671, "code", -1);
      if (_0xfaba0a == "0000") {
        let {
          mobile: _0x1bb017,
          sessionId: _0x10a03b,
          tokenId: _0x516659,
          userId: _0x3f01d2
        } = _0x585671?.["data"]?.["authInfo"];
        const _0x5d210d = {
          sessionId: _0x10a03b,
          tokenId: _0x516659,
          userId: _0x3f01d2
        };
        Object.assign(this, _0x5d210d);
        await this.epay_28_queryUserPage();
      } else {
        if (_0xfaba0a == "2101000100") {
          let _0x42d805 = _0x585671?.["data"]?.["woauth_login_url"];
          await this.epay_28_login(_0x42d805);
        } else {
          let _0x14b629 = _0x585671?.["msgInside"] || _0x585671?.["msg"] || "";
          this.log("联通支付日获取tokenId失败[" + _0xfaba0a + "]: " + _0x14b629);
        }
      }
    } catch (_0x51ba6c) {
      console.log(_0x51ba6c);
    }
  }
  async epay_28_login(_0x5216bd, _0x278afc = {}) {
    try {
      let _0x1e2c0d = _0x45121f.time("yyyyMM") + "28ZFR";
      _0x5216bd += "https://epay.10010.com/ci-mcss-party-web/rainbow/?templateName=" + _0x1e2c0d + "&bizFrom=225&bizChannelCode=225&channelType=WDQB";
      const _0x3db5ca = {
        fn: "epay_28_login",
        method: "get",
        url: _0x5216bd
      };
      let {
        headers: _0x406bd7,
        statusCode: _0x33115f
      } = await this.request(_0x3db5ca);
      if (_0x406bd7?.["location"]) {
        let _0x45d68d = new URL(_0x406bd7.location);
        this.rptId = _0x45d68d.searchParams.get("rptid");
        this.rptId ? await this.epay_28_authCheck() : this.log("联通支付日获取rptid失败");
      } else {
        this.log("联通支付日获取rptid失败[" + _0x33115f + "]");
      }
    } catch (_0x10d1f5) {
      console.log(_0x10d1f5);
    }
  }
  async epay_28_queryUserPage(_0x1feabf = {}) {
    try {
      let _0x15928f = _0x45121f.time("yyyyMM") + "28ZFR";
      const _0x47b5b6 = {
        templateName: _0x15928f
      };
      let _0xd55128 = {
          fn: "epay_28_queryUserPage",
          method: "post",
          url: "https://epay.10010.com/ci-mcss-party-front/v1/rainbow/queryUserPage",
          headers: {
            bizchannelinfo: this.get_bizchannelinfo(),
            authinfo: this.get_epay_authinfo()
          },
          form: _0x47b5b6
        },
        {
          result: _0x3590b2
        } = await this.request(_0xd55128),
        _0x33fed = _0x45121f.get(_0x3590b2, "code", -1);
      if (_0x33fed == "0000" && _0x3590b2?.["data"]?.["returnCode"] == 0) {
        for (let _0x1f495a of _0x3590b2?.["data"]?.["prizeList"]?.["rainbowMouldInfos"] || []) {
          if (_0x1f495a?.["day01DrawParam"]) {
            await this.epay_28_queryMiddleUnit(_0x15928f, _0x1f495a.mouldName);
            break;
          }
        }
      } else {
        let _0x408303 = _0x3590b2?.["message"] || _0x3590b2?.["msg"] || "";
        this.log("联通支付日进入主页失败[" + _0x33fed + "]: " + _0x408303);
      }
    } catch (_0x25c713) {
      console.log(_0x25c713);
    }
  }
  async epay_28_queryMiddleUnit(_0x104d9a, _0x47e736, _0x5df5d1 = {}) {
    try {
      const _0x30b75e = {
        activityId: _0x104d9a,
        mouldName: _0x47e736
      };
      let _0x32347e = {
          fn: "epay_28_queryMiddleUnit",
          method: "post",
          url: "https://epay.10010.com/ci-mcss-party-front/v1/rainbow/queryMiddleUnit",
          headers: {
            bizchannelinfo: this.get_bizchannelinfo(),
            authinfo: this.get_epay_authinfo()
          },
          form: _0x30b75e
        },
        {
          result: _0x5e14ce
        } = await this.request(_0x32347e),
        _0x2bc92c = _0x45121f.get(_0x5e14ce, "code", -1);
      if (_0x2bc92c == "0000") {
        let _0x130f5b = _0x45121f.time("dd");
        _0x5e14ce?.["data"]?.[_0x130f5b] == "1" ? this.log("联通支付日今日(" + _0x130f5b + "号)已打卡") : await this.epay_28_unifyDrawNew(_0x104d9a, _0x47e736);
      } else {
        let _0x33f130 = _0x5e14ce?.["message"] || _0x5e14ce?.["msg"] || "";
        this.log("联通支付日查询打卡失败[" + _0x2bc92c + "]: " + _0x33f130);
      }
    } catch (_0x15a888) {
      console.log(_0x15a888);
    }
  }
  async epay_28_unifyDrawNew(_0x1386ed, _0x1b0763, _0x1bfc9a = {}) {
    try {
      const _0xea99ba = {
        bizFrom: _0x14848b,
        activityId: _0x1386ed,
        mouldName: _0x1b0763
      };
      let _0x32222c = {
          fn: "epay_28_unifyDrawNew",
          method: "post",
          url: "https://epay.10010.com/ci-mcss-party-front/v1/rainbow/unifyDrawNew",
          headers: {
            bizchannelinfo: this.get_bizchannelinfo(),
            authinfo: this.get_epay_authinfo()
          },
          form: _0xea99ba
        },
        {
          result: _0x3a7d32
        } = await this.request(_0x32222c),
        _0x56c5fd = _0x45121f.get(_0x3a7d32, "code", -1);
      if (_0x56c5fd == "0000" && _0x3a7d32?.["data"]?.["returnCode"] == 0) {
        let _0x296103 = _0x3a7d32?.["data"]?.["awardTipContent"]?.["replace"](/xx/, _0x3a7d32?.["data"]?.["amount"]);
        const _0x408b0e = {
          notify: true
        };
        this.log("联通支付日打卡:" + _0x296103, _0x408b0e);
      } else {
        let _0x200729 = _0x3a7d32?.["data"]?.["returnMsg"] || _0x3a7d32?.["msg"] || "";
        this.log("联通支付日打卡失败[" + (_0x3a7d32?.["data"]?.["returnCode"] || _0x56c5fd) + "]: " + _0x200729);
      }
    } catch (_0x1b7737) {
      console.log(_0x1b7737);
    }
  }
  async sign_getContinuous(_0x42aa7d = {}) {
    try {
      const _0x1eda49 = {
        taskId: "",
        channel: ""
      };
      const _0x1d5ba9 = {
        fn: "sign_getContinuous",
        method: "post",
        url: "https://act.10010.com/SigninApp/signin/getContinuous",
        form: _0x1eda49
      };
      let {
          result: _0x53811b
        } = await this.request(_0x1d5ba9),
        _0x37db8c = _0x45121f.get(_0x53811b, "status", -1);
      if (_0x37db8c == "0000") {
        let _0x23e3b8 = _0x53811b?.["data"]?.["todaySigned"] || 0;
        const _0x3abb2d = {
          notify: true
        };
        this.log("签到区今天" + (_0x23e3b8 == "1" ? "未" : "已") + "签到", _0x3abb2d);
        if (_0x23e3b8 == "1") {
          await this.sign_daySign();
        }
      } else {
        let _0x5380e9 = _0x53811b?.["msg"] || "";
        this.log("签到区查询签到状态失败[" + _0x37db8c + "]: " + _0x5380e9);
      }
    } catch (_0x275dd2) {
      console.log(_0x275dd2);
    }
  }
  async sign_daySign(_0x10f6b8 = {}) {
    try {
      const _0x3e4209 = {
        shareCl: "",
        shareCode: ""
      };
      const _0x3ff5b0 = {
        fn: "sign_daySign",
        method: "post",
        url: "https://act.10010.com/SigninApp/signin/daySign",
        form: _0x3e4209
      };
      let {
          result: _0x234a92
        } = await this.request(_0x3ff5b0),
        _0x48ade1 = _0x45121f.get(_0x234a92, "status", -1);
      if (_0x48ade1 == "0000") {
        const _0x1c2634 = {
          notify: true
        };
        this.log("签到区签到成功: " + _0x234a92?.["data"]?.["signMessage"], _0x1c2634);
      } else {
        let _0x39361f = _0x234a92?.["msg"] || "";
        this.log("签到区签到失败[" + _0x48ade1 + "]: " + _0x39361f);
      }
    } catch (_0x54f765) {
      console.log(_0x54f765);
    }
  }
  async sign_queryBubbleTask(_0x2f696e = {}) {
    try {
      const _0x374a91 = {
        fn: "sign_queryBubbleTask",
        method: "post",
        url: "https://act.10010.com/SigninApp/bubbleTask/queryBubbleTask"
      };
      let {
          result: _0xa10638
        } = await this.request(_0x374a91),
        _0x3fe426 = _0x45121f.get(_0xa10638, "status", -1);
      if (_0x3fe426 == "0000") {
        for (let _0x4e4955 of _0xa10638?.["data"]?.["paramsList"]?.["filter"](_0x15c2f4 => _0x15c2f4.taskState == 1)) {
          let _0x19af28 = await this.gettaskip();
          await this.sign_doTask(_0x4e4955, _0x19af28);
        }
      } else {
        let _0x1ac7d1 = _0xa10638?.["msg"] || "";
        this.log("签到区查询气泡任务失败[" + _0x3fe426 + "]: " + _0x1ac7d1);
      }
    } catch (_0x5ba469) {
      console.log(_0x5ba469);
    }
  }
  async sign_doTask(_0x12ade1, _0x29700e, _0x163b53 = {}) {
    try {
      const _0x3e17ec = {
        id: _0x12ade1.id,
        orderId: _0x29700e,
        imei: "BB97982E-3F03-46D3-B904-819D626DF478",
        prizeType: _0x12ade1.rewardType,
        positionFlag: 0
      };
      const _0x181db6 = {
        fn: "sign_doTask",
        method: "post",
        url: "https://act.10010.com/SigninApp/task/doTask",
        form: _0x3e17ec
      };
      let {
          result: _0x388b94
        } = await this.request(_0x181db6),
        _0x43b710 = _0x45121f.get(_0x388b94, "status", -1);
      if (_0x43b710 == "0000") {
        this.log("完成任务[" + _0x12ade1.actName + "]获得: " + _0x388b94?.["data"]?.["prizeCount"] + _0x388b94?.["data"]?.["prizeName"]);
      } else {
        let _0x2fbaec = _0x388b94?.["msg"] || "";
        this.log("完成任务[" + _0x12ade1.actName + "]失败[" + _0x43b710 + "]: " + _0x2fbaec);
      }
    } catch (_0x3df57e) {
      console.log(_0x3df57e);
    }
  }
  async game_login(_0x59c32e, _0x9f9424 = {}) {
    try {
      const _0x791ff3 = {
        identityType: "esToken",
        code: this.ecs_token,
        ticket: _0x59c32e,
        uuid: _0x2ac179
      };
      const _0x6707a6 = {
        fn: "game_login",
        method: "post",
        url: "https://game.wostore.cn/api/app//user/v2/login",
        headers: {},
        json: _0x791ff3
      };
      _0x6707a6.headers.channelid = "GAMELTAPP_90005";
      let {
          result: _0x3bbfc5
        } = await this.request(_0x6707a6),
        _0x4fa256 = _0x45121f.get(_0x3bbfc5, "code", -1);
      if (_0x4fa256 == 200) {
        this.game_token = _0x3bbfc5?.["data"]?.["access_token"];
        this.got = this.got.extend({
          headers: {
            Authorization: this.game_token
          }
        });
        await this.game_getMemberInfo();
        await this.game_signRecord();
        await this.game_lottery();
        await this.game_playSave();
        await this.game_taskList();
        await this.game_getMemberInfo();
        const _0x397c10 = {
          notify: true
        };
        this.log("联通畅游币: " + this.point, _0x397c10);
      } else {
        let _0x243db1 = _0x3bbfc5?.["msg"] || "";
        this.log("联通畅游登录失败[" + _0x4fa256 + "]: " + _0x243db1);
      }
    } catch (_0x446a79) {
      console.log(_0x446a79);
    }
  }
  async game_getMemberInfo(_0x175094 = {}) {
    try {
      const _0x59c5ad = {
        fn: "game_getMemberInfo",
        method: "get",
        url: "https://game.wostore.cn/api/app/user/v2/getMemberInfo"
      };
      let {
          result: _0x204479
        } = await this.request(_0x59c5ad),
        _0x4b7866 = _0x45121f.get(_0x204479, "code", -1);
      if (_0x4b7866 == 200) {
        this.point = _0x204479?.["data"]?.["userIntegral"];
      } else {
        let _0x5e703e = _0x204479?.["msg"] || "";
        this.log("联通畅游查询积分失败[" + _0x4b7866 + "]: " + _0x5e703e);
      }
    } catch (_0x44ed92) {
      console.log(_0x44ed92);
    }
  }
  async game_signRecord(_0xe584b1 = {}) {
    try {
      const _0x1ecd24 = {
        fn: "game_signRecord",
        method: "get",
        url: "https://game.wostore.cn/api/app/user/v2/signRecord"
      };
      let {
          result: _0x222384
        } = await this.request(_0x1ecd24),
        _0x91a028 = _0x45121f.get(_0x222384, "code", -1);
      if (_0x91a028 == 200) {
        for (let _0x3cce8c of _0x222384?.["data"]) {
          if (_0x3cce8c.now == 0) {
            continue;
          }
          this.log("联通畅游今天" + (_0x3cce8c.signStatus == 2 ? "未" : "已") + "签到");
          if (_0x3cce8c.signStatus == 2) {
            await this.game_signIn();
          }
        }
      } else {
        let _0x587388 = _0x222384?.["msg"] || "";
        this.log("联通畅游查询签到失败[" + _0x91a028 + "]: " + _0x587388);
      }
    } catch (_0x529e87) {
      console.log(_0x529e87);
    }
  }
  async game_signIn(_0x479974 = {}) {
    try {
      const _0x6ce63d = {
        fn: "game_signIn",
        method: "get",
        url: "https://game.wostore.cn/api/app/user/v2/signIn"
      };
      let {
          result: _0x35fd25
        } = await this.request(_0x6ce63d),
        _0xa67b47 = _0x45121f.get(_0x35fd25, "code", -1);
      if (_0xa67b47 == 200) {
        this.log("联通畅游签到成功");
      } else {
        let _0x19531e = _0x35fd25?.["msg"] || "";
        this.log("联通畅游签到失败[" + _0xa67b47 + "]: " + _0x19531e);
      }
    } catch (_0x4ce42f) {
      console.log(_0x4ce42f);
    }
  }
  async game_checkSlider(_0x139538 = {}) {
    let _0x4cb5fc = false;
    try {
      const _0x167bda = {
        xPos: 234
      };
      const _0x4227ca = {
        fn: "game_checkSlider",
        method: "post",
        url: "https://game.wostore.cn/api/app/common/slider/checkSlider",
        searchParams: _0x167bda
      };
      let {
          result: _0x12dc92
        } = await this.request(_0x4227ca),
        _0x4dbc69 = _0x45121f.get(_0x12dc92, "code", -1);
      if (_0x4dbc69 == 200) {
        this.log("联通畅游滑块验证成功");
      } else {
        let _0x3970d1 = _0x12dc92?.["msg"] || "";
        this.log("联通畅游滑块验证失败[" + _0x4dbc69 + "]: " + _0x3970d1);
      }
    } catch (_0x472fb6) {
      console.log(_0x472fb6);
    } finally {
      return _0x4cb5fc;
    }
  }
  async game_lottery(_0x5cd0de = {}) {
    try {
      let _0x36b528 = {
          fn: "game_lottery",
          method: "get",
          url: "https://game.wostore.cn/api/app/user/v2/benefit/lottery",
          searchParams: {
            id: _0x45121f.get(_0x5cd0de, "id", 1)
          }
        },
        {
          result: _0x439a6d
        } = await this.request(_0x36b528),
        _0x59f0e1 = _0x45121f.get(_0x439a6d, "code", -1);
      if (_0x59f0e1 == 200) {
        const _0x2ff666 = {
          notify: true
        };
        this.log("联通畅游抽奖: " + _0x439a6d?.["data"]?.["productName"], _0x2ff666);
      } else {
        let _0x45593b = _0x439a6d?.["msg"] || "";
        this.log("联通畅游抽奖失败[" + _0x59f0e1 + "]: " + _0x45593b);
      }
    } catch (_0x14fc74) {
      console.log(_0x14fc74);
    }
  }
  async game_taskList(_0x36dc2d = {}) {
    try {
      const _0x3a877a = {
        fn: "game_taskList",
        method: "get",
        url: "https://game.wostore.cn/api/app/user/v2/task/list"
      };
      let {
          result: _0x425425
        } = await this.request(_0x3a877a),
        _0x2a9a01 = _0x45121f.get(_0x425425, "code", -1);
      if (_0x2a9a01 == 200) {
        for (let _0x21551d of _0x425425?.["data"]) {
          switch (_0x21551d.receiveStatus) {
            case 0:
              break;
            case 1:
              await this.game_taskReceive(_0x21551d);
              break;
            case 2:
              break;
            default:
              _0x45121f.log("任务[" + _0x21551d.taskName + "]未知状态[" + _0x21551d.receiveStatus + "]");
              break;
          }
        }
      } else {
        let _0x2989b3 = _0x425425?.["msg"] || "";
        this.log("联通畅游查询任务失败[" + _0x2a9a01 + "]: " + _0x2989b3);
      }
    } catch (_0x5d0b6f) {
      console.log(_0x5d0b6f);
    }
  }
  async game_taskReceive(_0x308082, _0x5bf58a = {}) {
    try {
      const _0x139af6 = {
        productId: _0x308082.productId,
        taskId: _0x308082.id
      };
      const _0x354de7 = {
        fn: "game_taskReceive",
        method: "get",
        url: "https://game.wostore.cn/api/app/user/v2/task/receive",
        searchParams: _0x139af6
      };
      let {
          result: _0x20cc63
        } = await this.request(_0x354de7),
        _0x1def10 = _0x45121f.get(_0x20cc63, "code", -1);
      if (_0x1def10 == 200) {
        this.log("领取任务[" + _0x308082.taskName + "]奖励成功");
      } else {
        let _0x5d0ab7 = _0x20cc63?.["msg"] || "";
        this.log("领取任务[" + _0x308082.taskName + "]奖励失败[" + _0x1def10 + "]: " + _0x5d0ab7);
      }
    } catch (_0x12f6bf) {
      console.log(_0x12f6bf);
    }
  }
  async game_playSave(_0x184be1 = {}) {
    try {
      let _0x3786d9 = {
          fn: "game_playSave",
          method: "post",
          url: "https://game.wostore.cn/api/app/user/v2/play/save",
          json: {
            cpGameId: "15000199" + _0x45121f.randomString(2, "0123456789")
          }
        },
        {
          result: _0x571ce6
        } = await this.request(_0x3786d9),
        _0x362990 = _0x45121f.get(_0x571ce6, "code", -1);
      if (!(_0x362990 == 200)) {
        let _0x161f88 = _0x571ce6?.["msg"] || "";
        this.log("联通畅游玩游戏失败[" + _0x362990 + "]: " + _0x161f88);
      }
    } catch (_0x4a3c8c) {
      console.log(_0x4a3c8c);
    }
  }
  async flmf_login(_0x4cd0fb, _0x514cdc = {}) {
    try {
      const _0x25a7c6 = {
        fn: "flmf_login",
        method: "get",
        url: _0x4cd0fb
      };
      let {
        headers: _0x35ab38,
        statusCode: _0x195f0b
      } = await this.request(_0x25a7c6);
      if (_0x35ab38?.["location"]) {
        let _0x3c7068 = new URL(_0x35ab38.location);
        this.flmf_sid = _0x3c7068.searchParams.get("sid");
        this.flmf_sid ? (await this.flmf_signInInit(), await this.flmf_taskList(), await this.flmf_scanTask()) : this.log("福利魔方获取sid失败");
      } else {
        this.log("福利魔方获取sid失败[" + _0x195f0b + "]");
      }
    } catch (_0x358ded) {
      console.log(_0x358ded);
    }
  }
  async flmf_signInInit(_0x5631c2 = {}) {
    try {
      let _0x333de8 = {
          fn: "flmf_signInInit",
          method: "post",
          url: "https://weixin.linktech.hk/lv-apiaccess/welfareCenter/signInInit",
          form: this.get_flmf_data()
        },
        {
          result: _0x1a9acb
        } = await this.request(_0x333de8),
        _0x3bc730 = _0x45121f.get(_0x1a9acb, "resultCode", -1);
      if (_0x3bc730 == "0000") {
        this.log("福利魔方今天" + (_0x1a9acb?.["data"]?.["isSigned"] ? "已" : "未") + "签到, 已连续签到" + _0x1a9acb?.["data"]?.["consecutiveDays"] + "天");
        if (!_0x1a9acb?.["data"]?.["isSigned"]) {
          await this.flmf_signIn();
        }
      } else {
        let _0x40bd54 = _0x1a9acb?.["resultMsg"] || "";
        this.log("福利魔方查询签到失败[" + _0x3bc730 + "]: " + _0x40bd54);
      }
    } catch (_0x2e5903) {
      console.log(_0x2e5903);
    }
  }
  async flmf_signIn(_0x28bfa8 = {}) {
    try {
      let _0x5c369c = {
          fn: "flmf_signIn",
          method: "post",
          url: "https://weixin.linktech.hk/lv-apiaccess/welfareCenter/signIn",
          form: this.get_flmf_data()
        },
        {
          result: _0x29871f
        } = await this.request(_0x5c369c),
        _0x57de47 = _0x45121f.get(_0x29871f, "resultCode", -1);
      if (_0x57de47 == "0000") {
        this.log("福利魔方签到成功");
      } else {
        let _0x4712d5 = _0x29871f?.["resultMsg"] || "";
        this.log("福利魔方签到失败[" + _0x57de47 + "]: " + _0x4712d5);
      }
    } catch (_0x3ecec1) {
      console.log(_0x3ecec1);
    }
  }
  async flmf_taskList(_0x3fb3c8 = {}) {
    try {
      let _0x19ecbe = {
          fn: "flmf_taskList",
          method: "post",
          url: "https://weixin.linktech.hk/lv-apiaccess/welfareCenter/taskList",
          form: this.get_flmf_data()
        },
        {
          result: _0x112c7d
        } = await this.request(_0x19ecbe),
        _0x386148 = _0x45121f.get(_0x112c7d, "resultCode", -1);
      if (_0x386148 == "0000") {
        for (let _0x282ea9 of _0x112c7d?.["data"]?.["taskInfoList"]) {
          for (let _0x4e7aa4 of _0x282ea9.taskInfoList.filter(_0x315d58 => !_0x315d58.done)) {
            for (let _0x1a4561 = _0x4e7aa4.hascount; _0x1a4561 < _0x4e7aa4.count; _0x1a4561++) {
              await this.flmf_gogLance(_0x4e7aa4.id);
            }
          }
        }
      } else {
        let _0x3a45a5 = _0x112c7d?.["resultMsg"] || "";
        this.log("福利魔方查询任务失败[" + _0x386148 + "]: " + _0x3a45a5);
      }
    } catch (_0x43416c) {
      console.log(_0x43416c);
    }
  }
  async flmf_scanTask() {
    for (let _0x21c56e of _0xa2834e) {
      await this.flmf_gogLance(_0x21c56e);
    }
  }
  async flmf_gogLance(_0x445b20, _0xfe4f = {}) {
    try {
      let _0x356d96 = {
          fn: "flmf_gogLance",
          method: "post",
          url: "https://weixin.linktech.hk/lv-apiaccess/welfareCenter/gogLance",
          form: {
            taskId: _0x445b20,
            ...this.get_flmf_data()
          }
        },
        {
          result: _0x9c295b
        } = await this.request(_0x356d96);
      await _0x45121f.wait_gap_interval(this.t_flmf_task, _0x3d611d);
      let _0x53e624 = _0x45121f.get(_0x9c295b, "resultCode", -1);
      this.t_flmf_task = Date.now();
      if (_0x53e624 == "0000") {
        this.log("完成任务[" + _0x445b20 + "]成功");
      } else {
        let _0x52c103 = _0x9c295b?.["resultMsg"] || "";
        this.log("完成任务[" + _0x445b20 + "]失败[" + _0x53e624 + "]: " + _0x52c103);
      }
    } catch (_0x29f185) {
      console.log(_0x29f185);
    }
  }
  async woread_api(_0x2c3cf6) {
    let _0x1bdc41 = await this.request(_0x45121f.copy(_0x2c3cf6)),
      _0x248035 = _0x1bdc41?.["result"]?.["message"] || "";
    _0x248035?.["includes"]("登录已过期") && (await this.woread_auth()) && (await this.woread_login()) && (_0x1bdc41 = await this.request(_0x45121f.copy(_0x2c3cf6)));
    return _0x1bdc41;
  }
  async woread_auth(_0x375509 = {}) {
    let _0x502f83 = false;
    try {
      let _0x35ec0e = _0x45121f.time("yyyyMMddhhmmss");
      const _0x4d7450 = {
        timestamp: _0x35ec0e
      };
      let _0x30812b = this.encode_woread(_0x4d7450),
        _0x1ce27b = Date.now().toString(),
        _0x14907a = _0x1e690d.MD5(_0x3fe791 + _0x2d7ff2 + _0x1ce27b).toString();
      const _0x2d93d2 = {
        sign: _0x30812b
      };
      const _0x252143 = {
        fn: "woread_auth",
        method: "post",
        url: "https://10010.woread.com.cn/ng_woread_service/rest/app/auth/" + _0x3fe791 + "/" + _0x1ce27b + "/" + _0x14907a,
        json: _0x2d93d2
      };
      let {
          result: _0x40e9d6
        } = await this.request(_0x252143),
        _0x30c263 = _0x45121f.get(_0x40e9d6, "code", -1);
      if (_0x30c263 == "0000") {
        _0x502f83 = true;
        this.woread_accesstoken = _0x40e9d6?.["data"]?.["accesstoken"];
        this.got = this.got.extend({
          headers: {
            accesstoken: this.woread_accesstoken
          }
        });
      } else {
        let _0x1567ab = _0x40e9d6?.["message"] || "";
        this.log("阅读专区获取accesstoken失败[" + _0x30c263 + "]: " + _0x1567ab);
      }
    } catch (_0x2b2499) {
      console.log(_0x2b2499);
    } finally {
      return _0x502f83;
    }
  }
  async woread_login(_0x34a77c = {}) {
    let _0x54ba92 = false;
    try {
      let _0x2fa8de = {
          phone: this.mobile,
          timestamp: _0x45121f.time("yyyyMMddhhmmss")
        },
        _0x4476a9 = this.encode_woread(_0x2fa8de);
      const _0x31f658 = {
        sign: _0x4476a9
      };
      const _0x317d68 = {
        fn: "woread_login",
        method: "post",
        url: "https://10010.woread.com.cn/ng_woread_service/rest/account/login",
        json: _0x31f658
      };
      let {
          result: _0x209e74
        } = await this.request(_0x317d68),
        _0x3c2c78 = _0x45121f.get(_0x209e74, "code", -1);
      if (_0x3c2c78 == "0000") {
        _0x54ba92 = true;
        let {
          userid: _0x4019cc,
          userindex: _0x347e5e,
          token: _0x445317,
          verifycode: _0x3f524e
        } = _0x209e74?.["data"];
        this.woread_token = _0x445317;
        this.woread_verifycode = _0x3f524e;
        const _0x372854 = {
          woread_userid: _0x4019cc,
          woread_userindex: _0x347e5e,
          woread_token: _0x445317,
          woread_verifycode: _0x3f524e
        };
        Object.assign(this, _0x372854);
      } else {
        let _0x418ca4 = _0x209e74?.["message"] || "";
        this.log("阅读专区获取token失败[" + _0x3c2c78 + "]: " + _0x418ca4);
      }
    } catch (_0x492582) {
      console.log(_0x492582);
    } finally {
      return _0x54ba92;
    }
  }
  async woread_getSeeVideoAddNumber(_0x2fcb9c, _0x816ff1 = {}) {
    try {
      let _0x27b487 = {
          activityIndex: _0x2fcb9c,
          ...this.get_woread_param()
        },
        _0x51b108 = this.encode_woread(_0x27b487);
      const _0x50ae74 = {
        sign: _0x51b108
      };
      const _0xa1c58e = {
        fn: "woread_getSeeVideoAddNumber",
        method: "post",
        url: "https://10010.woread.com.cn/ng_woread_service/rest/activity/getSeeVideoAddNumber",
        json: _0x50ae74
      };
      let {
          result: _0x453d37
        } = await this.woread_api(_0xa1c58e),
        _0x3011ef = _0x45121f.get(_0x453d37, "code", -1);
      if (_0x3011ef == "0000") {
        _0x453d37?.["data"] == -1 && (await this.woread_addUserSeeVideo(_0x2fcb9c));
      } else {
        let _0x18721d = _0x453d37?.["message"] || "";
        this.log("阅读活动[" + _0x2fcb9c + "]查询抽奖视频失败[" + _0x3011ef + "]: " + _0x18721d);
      }
    } catch (_0x629227) {
      console.log(_0x629227);
    }
  }
  async woread_addUserSeeVideo(_0x30b8ca, _0x4d36c2 = {}) {
    try {
      let _0x123917 = _0x4d36c2.num || 5,
        _0x19149e = {
          activityIndex: _0x30b8ca,
          num: _0x123917,
          ...this.get_woread_param()
        },
        _0x1935a0 = this.encode_woread(_0x19149e);
      const _0x55580c = {
        sign: _0x1935a0
      };
      const _0x5569fb = {
        fn: "woread_addUserSeeVideo",
        method: "post",
        url: "https://10010.woread.com.cn/ng_woread_service/rest/activity/addUserSeeVideo",
        json: _0x55580c
      };
      let {
          result: _0x24f3f5
        } = await this.woread_api(_0x5569fb),
        _0x35cd49 = _0x45121f.get(_0x24f3f5, "code", -1);
      if (_0x35cd49 == "0000") {
        this.log("阅读活动[" + _0x30b8ca + "]看视频增加抽奖次数成功");
      } else {
        let _0x57cad3 = _0x24f3f5?.["message"] || "";
        this.log("阅读活动[" + _0x30b8ca + "]看视频增加抽奖次数失败[" + _0x35cd49 + "]: " + _0x57cad3);
      }
    } catch (_0x100ab2) {
      console.log(_0x100ab2);
    }
  }
  async woread_getActivityNumber(_0xb70a33, _0x969614 = {}) {
    try {
      let _0x2b205e = {
          activeIndex: _0xb70a33,
          ...this.get_woread_param()
        },
        _0x5329fb = this.encode_woread(_0x2b205e);
      const _0x590cac = {
        sign: _0x5329fb
      };
      const _0x835975 = {
        fn: "woread_getActivityNumber",
        method: "post",
        url: "https://10010.woread.com.cn/ng_woread_service/rest/activity/getActivityNumber",
        json: _0x590cac
      };
      let {
          result: _0x271bc4
        } = await this.woread_api(_0x835975),
        _0x22521a = _0x45121f.get(_0x271bc4, "code", -1);
      if (_0x22521a == "0000") {
        let _0x338b95 = _0x271bc4?.["data"] || 0;
        this.log("阅读活动[" + _0xb70a33 + "]可以抽奖" + _0x338b95 + "次");
        while (_0x338b95-- > 0) {
          await this.woread_doDraw(_0xb70a33);
        }
      } else {
        let _0x1be62e = _0x271bc4?.["message"] || "";
        this.log("阅读活动[" + _0xb70a33 + "]查询抽奖次数失败[" + _0x22521a + "]: " + _0x1be62e);
      }
    } catch (_0x56edca) {
      console.log(_0x56edca);
    }
  }
  async woread_addDrawTimes(_0xa20976, _0x4edf4a = {}) {
    try {
      let _0x5ef329 = {
          activetyindex: _0xa20976,
          ...this.get_woread_param()
        },
        _0x391b09 = this.encode_woread(_0x5ef329);
      const _0x16e523 = {
        sign: _0x391b09
      };
      const _0x40a8dc = {
        fn: "woread_addDrawTimes",
        method: "post",
        url: "https://10010.woread.com.cn/ng_woread_service/rest/basics/addDrawTimes",
        json: _0x16e523
      };
      await _0x45121f.wait_gap_interval(this.t_woread_draw, _0x4084df);
      let {
        result: _0x29d091
      } = await this.woread_api(_0x40a8dc);
      this.t_woread_draw = Date.now();
      let _0x342fb0 = _0x45121f.get(_0x29d091, "code", -1);
      if (_0x342fb0 == "0000") {
        this.log("阅读活动[" + _0xa20976 + "]打卡增加抽奖次数成功");
      } else {
        if (_0x342fb0 != "9999") {
          let _0xe1b03b = _0x29d091?.["message"] || "";
          this.log("阅读活动[" + _0xa20976 + "]打卡增加抽奖次数失败[" + _0x342fb0 + "]: " + _0xe1b03b);
        }
      }
    } catch (_0x410e0c) {
      console.log(_0x410e0c);
    }
  }
  async woread_doDraw(_0x3b5361, _0x24d614 = {}) {
    try {
      let _0x2c6fe8 = {
          activeindex: _0x3b5361,
          ...this.get_woread_param()
        },
        _0x5c739d = this.encode_woread(_0x2c6fe8);
      const _0x4fda50 = {
        sign: _0x5c739d
      };
      const _0x525c93 = {
        fn: "woread_doDraw",
        method: "post",
        url: "https://10010.woread.com.cn/ng_woread_service/rest/basics/doDraw",
        json: _0x4fda50
      };
      await _0x45121f.wait_gap_interval(this.t_woread_draw, _0x4084df);
      let {
        result: _0x456920
      } = await this.woread_api(_0x525c93);
      this.t_woread_draw = Date.now();
      let _0x401423 = _0x45121f.get(_0x456920, "code", -1);
      if (_0x401423 == "0000") {
        const _0x5bb3ce = {
          notify: true
        };
        this.log("阅读活动[" + _0x3b5361 + "]抽奖: " + (_0x456920?.["data"]?.["prizedesc"] || "空气"), _0x5bb3ce);
      } else {
        let _0x3b63a2 = _0x456920?.["message"] || "";
        this.log("阅读活动[" + _0x3b5361 + "]抽奖失败[" + _0x401423 + "]: " + _0x3b63a2);
      }
    } catch (_0x123775) {
      console.log(_0x123775);
    }
  }
  async woread_queryTicketAccount(_0x23ee55 = {}) {
    try {
      let _0x1f9674 = this.get_woread_param(),
        _0x1aa049 = this.encode_woread(_0x1f9674);
      const _0xf7a8dd = {
        sign: _0x1aa049
      };
      const _0x12912a = {
        fn: "woread_queryTicketAccount",
        method: "post",
        url: "https://10010.woread.com.cn/ng_woread_service/rest/phone/vouchers/queryTicketAccount",
        json: _0xf7a8dd
      };
      let {
          result: _0x2103be
        } = await this.woread_api(_0x12912a),
        _0x2fc752 = _0x45121f.get(_0x2103be, "code", -1);
      if (_0x2fc752 == "0000") {
        let _0x30dc6f = (_0x2103be?.["data"]?.["usableNum"] / 100).toFixed(2);
        const _0x571adc = {
          notify: true
        };
        this.log("阅读区话费红包余额: " + _0x30dc6f, _0x571adc);
      } else {
        let _0x174469 = _0x2103be?.["message"] || "";
        this.log("查询阅读区话费红包余额失败[" + _0x2fc752 + "]: " + _0x174469);
      }
    } catch (_0x5d554e) {
      console.log(_0x5d554e);
    }
  }
  async woread_addReadTime(_0x142a19 = {}) {
    try {
      let {
          readTime = 2,
          cntindex = "409672",
          cntIndex = "409672",
          cnttype = "1",
          cntType = 1,
          cardid = "11891",
          catid = "118411",
          pageIndex = "10683",
          chapterseno = 1,
          channelid = "",
          chapterid = "-1",
          readtype = 1,
          isend = "0"
        } = _0x142a19,
        _0x4580ed = {
          readTime: readTime,
          cntindex: cntindex,
          cntIndex: cntIndex,
          cnttype: cnttype,
          cntType: cntType,
          catid: catid,
          cardid: cardid,
          pageIndex: pageIndex,
          chapterseno: chapterseno,
          channelid: channelid,
          chapterid: chapterid,
          readtype: readtype,
          isend: isend,
          ...this.get_woread_param()
        },
        _0x28b447 = this.encode_woread(_0x4580ed);
      const _0x4aab56 = {
        sign: _0x28b447
      };
      const _0x52b882 = {
        fn: "woread_addReadTime",
        method: "post",
        url: "https://10010.woread.com.cn/ng_woread_service/rest/history/addReadTime",
        json: _0x4aab56
      };
      let {
          result: _0x13a3be
        } = await this.request(_0x52b882),
        _0x478367 = _0x45121f.get(_0x13a3be, "code", -1);
      if (_0x478367 == "0000") {
        this.log("刷新读小说时间: " + _0x13a3be?.["data"]?.["readtime"] / 60 / 1000 + "分钟");
        _0x13a3be?.["data"]?.["readtime"] >= 3600000 && (this.read_stop = true);
      } else {
        let _0x57b1fa = _0x13a3be?.["message"] || "";
        this.log("刷新读小说时间失败[" + _0x478367 + "]: " + _0x57b1fa);
      }
    } catch (_0x53b749) {
      console.log(_0x53b749);
    }
  }
  async rabblit_queryActivityData(_0xcfb6bd = {}) {
    try {
      let _0x378b0a = {
          activeIndex: 26,
          ...this.get_woread_param()
        },
        _0xd5a920 = this.encode_woread(_0x378b0a);
      const _0x50301a = {
        sign: _0xd5a920
      };
      const _0x6105f7 = {
        fn: "rabblit_queryActivityData",
        method: "post",
        url: "https://10010.woread.com.cn/ng_woread_service/rest/rabbitActivity/queryActivityData",
        json: _0x50301a
      };
      let {
          result: _0x184819
        } = await this.woread_api(_0x6105f7),
        _0x1fff21 = _0x45121f.get(_0x184819, "code", -1);
      if (_0x1fff21 == "0000") {
        let {
          totalcharpternums: _0x1ba1a1,
          totalreadnums: _0x37d570,
          status: _0x3a5245,
          activitystatus: _0x64b677
        } = _0x184819?.["data"];
        if (_0x64b677 == 1) {
          this.need_read_rabbit = false;
          const _0xfc19ab = {
            notify: true
          };
          this.log("龟兔赛跑今天已完成", _0xfc19ab);
          return;
        }
        this.need_read_rabbit = true;
        this.log("龟兔赛跑进度: " + _0x37d570 + "/" + _0x1ba1a1 + "分钟");
        if (_0x3a5245 == 1) {
          await this.rabblit_wakeRabbit();
        }
        if (_0x37d570 >= _0x1ba1a1) {
          await this.rabblit_finishActivity();
        }
      } else {
        let _0x43aec1 = _0x184819?.["message"] || "";
        _0x43aec1?.["includes"]("未参加") && !_0xcfb6bd.join_retry && (await this.rabblit_joinRuning()) ? (_0xcfb6bd.join_retry = true, await this.rabblit_queryActivityData(_0xcfb6bd)) : this.log("龟兔赛跑查询状态失败[" + _0x1fff21 + "]: " + _0x43aec1);
      }
    } catch (_0x339bb1) {
      console.log(_0x339bb1);
    }
  }
  async rabblit_joinRuning(_0x98da14 = {}) {
    let _0x2380cc = false;
    try {
      let _0x22e18b = {
          activeIndex: 26,
          ...this.get_woread_param()
        },
        _0x573c5a = this.encode_woread(_0x22e18b);
      const _0x47b579 = {
        sign: _0x573c5a
      };
      const _0x39f129 = {
        fn: "rabblit_joinRuning",
        method: "post",
        url: "https://10010.woread.com.cn/ng_woread_service/rest/rabbitActivity/joinRuning",
        json: _0x47b579
      };
      let {
          result: _0x37cb9b
        } = await this.woread_api(_0x39f129),
        _0x23989b = _0x45121f.get(_0x37cb9b, "code", -1);
      if (_0x23989b == "0000") {
        _0x2380cc = true;
        this.log("龟兔赛跑报名成功");
      } else {
        let _0x159ec2 = _0x37cb9b?.["message"] || "";
        this.log("龟兔赛跑报名失败[" + _0x23989b + "]: " + _0x159ec2);
      }
    } catch (_0xe68490) {
      console.log(_0xe68490);
    } finally {
      return _0x2380cc;
    }
  }
  async rabblit_wakeRabbit(_0x3886b6 = {}) {
    try {
      let _0x40a086 = {
          activeIndex: 26,
          sactivitIndex: 7246,
          ...this.get_woread_param()
        },
        _0x14b5c8 = this.encode_woread(_0x40a086);
      const _0x5bf5ca = {
        sign: _0x14b5c8
      };
      const _0x28cfa9 = {
        fn: "rabblit_wakeRabbit",
        method: "post",
        url: "https://10010.woread.com.cn/ng_woread_service/rest/rabbitActivity/wakeRabbit",
        json: _0x5bf5ca
      };
      await _0x45121f.wait_gap_interval(this.t_woread_draw, _0x4084df);
      let {
        result: _0x613f55
      } = await this.woread_api(_0x28cfa9);
      this.t_woread_draw = Date.now();
      let _0x4753a7 = _0x45121f.get(_0x613f55, "code", -1);
      if (_0x4753a7 == "0000") {
        const _0x555bd3 = {
          notify: true
        };
        this.log("龟兔赛跑唤醒兔子抽奖: " + (_0x613f55?.["data"]?.["prizedesc"] || "空气"), _0x555bd3);
      } else {
        let _0x304265 = _0x613f55?.["message"] || "";
        this.log("龟兔赛跑唤醒兔子失败[" + _0x4753a7 + "]: " + _0x304265);
      }
    } catch (_0x4d43e9) {
      console.log(_0x4d43e9);
    }
  }
  async rabblit_finishActivity(_0x434de0 = {}) {
    try {
      let _0x54583d = {
          activeIndex: 26,
          ...this.get_woread_param()
        },
        _0x293f32 = this.encode_woread(_0x54583d);
      const _0x47943f = {
        sign: _0x293f32
      };
      const _0x4dc3eb = {
        fn: "rabblit_finishActivity",
        method: "post",
        url: "https://10010.woread.com.cn/ng_woread_service/rest/rabbitActivity/finishActivity",
        json: _0x47943f
      };
      await _0x45121f.wait_gap_interval(this.t_woread_draw, _0x4084df);
      let {
        result: _0x253649
      } = await this.woread_api(_0x4dc3eb);
      this.t_woread_draw = Date.now();
      let _0x3e5233 = _0x45121f.get(_0x253649, "code", -1);
      if (_0x3e5233 == "0000") {
        this.need_read_rabbit = false;
        const _0x2a5cd5 = {
          notify: true
        };
        this.log("龟兔赛跑终点抽奖: " + (_0x253649?.["data"]?.["prizedesc"] || "空气"), _0x2a5cd5);
      } else {
        let _0x336b4b = _0x253649?.["message"] || "";
        this.log("龟兔赛跑终点抽奖失败[" + _0x3e5233 + "]: " + _0x336b4b);
      }
    } catch (_0x1f3ad0) {
      console.log(_0x1f3ad0);
    }
  }
  async moonbox_queryCurTaskStatus(_0x465b37 = {}) {
    try {
      let _0x2a08d1 = {
          activeIndex: _0x26fcd0,
          ...this.get_woread_param()
        },
        _0x35679e = this.encode_woread(_0x2a08d1);
      const _0x2509b9 = {
        sign: _0x35679e
      };
      const _0x251f44 = {
        fn: "moonbox_queryCurTaskStatus",
        method: "post",
        url: "https://10010.woread.com.cn/ng_woread_service/rest/activity423/queryCurTaskStatus",
        json: _0x2509b9
      };
      let {
          result: _0x1a6d92
        } = await this.woread_api(_0x251f44),
        _0x5908a1 = _0x45121f.get(_0x1a6d92, "code", -1);
      if (_0x5908a1 == "0000") {
        for (let _0x4da87c of _0x1a6d92?.["data"] || []) {
          let {
            taskName: _0x589d65,
            currentValue: _0x1f1b0c,
            taskValue: _0x3ee446
          } = _0x4da87c?.["taskDetail"];
          switch (_0x4da87c.taskStatus) {
            case 0:
              this.need_read_moonbox = true;
              this.log("阅光宝盒[" + _0x589d65 + "]进度: " + parseInt(_0x1f1b0c) + "/" + _0x3ee446 + "分钟");
              break;
            case 2:
              await this.moonbox_completeActiveTask(_0x4da87c);
            case 1:
              this.need_read_moonbox = false;
              const _0x49cc5b = {
                notify: true
              };
              this.log("阅光宝盒任务[" + _0x589d65 + "]已完成", _0x49cc5b);
              break;
          }
        }
      } else {
        let _0x58d860 = _0x1a6d92?.["message"] || "";
        _0x58d860?.["includes"]("未领取") && !_0x465b37.activate_retry && (await this.moonbox_queryActiveTaskList()) ? (_0x465b37.activate_retry = true, await this.moonbox_queryCurTaskStatus(_0x465b37)) : this.log("阅光宝盒查询任务状态失败[" + _0x5908a1 + "]: " + _0x58d860);
      }
    } catch (_0x36c991) {
      console.log(_0x36c991);
    }
  }
  async moonbox_completeActiveTask(_0x1b4b49, _0x16380b = {}) {
    try {
      let _0x2ebe37 = {
          taskId: _0x1b4b49.id,
          ...this.get_woread_param()
        },
        _0x3cb3a5 = this.encode_woread(_0x2ebe37);
      const _0x3dcc09 = {
        sign: _0x3cb3a5
      };
      const _0xb0fff = {
        fn: "moonbox_completeActiveTask",
        method: "post",
        url: "https://10010.woread.com.cn/ng_woread_service/rest/activity423/completeActiveTask",
        json: _0x3dcc09
      };
      let {
          result: _0x5b2f7d
        } = await this.woread_api(_0xb0fff),
        _0x37d369 = _0x45121f.get(_0x5b2f7d, "code", -1);
      if (_0x37d369 == "0000") {
        const _0x5a3953 = {
          notify: true
        };
        this.log("阅光宝盒[" + _0x5b2f7d?.["data"]?.["taskDetail"]?.["taskName"] + "]领取奖励成功: " + _0x5b2f7d?.["data"]?.["exchangeResult"]?.["materialGroupInfo"]?.["groupName"], _0x5a3953);
      } else {
        let _0x3b36a2 = _0x5b2f7d?.["message"] || "";
        this.log("阅光宝盒[" + _0x1b4b49?.["taskDetail"]?.["taskName"] + "]领取奖励失败[" + _0x37d369 + "]: " + _0x3b36a2);
      }
    } catch (_0x27887c) {
      console.log(_0x27887c);
    }
  }
  async moonbox_queryActiveTaskList(_0xfa292 = {}) {
    try {
      let _0x47b67c = {
          activeIndex: _0x26fcd0,
          ...this.get_woread_param()
        },
        _0x22b338 = this.encode_woread(_0x47b67c);
      const _0x10061d = {
        sign: _0x22b338
      };
      const _0x5a8c8d = {
        fn: "moonbox_queryActiveTaskList",
        method: "post",
        url: "https://10010.woread.com.cn/ng_woread_service/rest/activity423/queryActiveTaskList",
        json: _0x10061d
      };
      let {
          result: _0x3d593e
        } = await this.woread_api(_0x5a8c8d),
        _0x1ae04a = _0x45121f.get(_0x3d593e, "code", -1);
      if (_0x1ae04a == "0000") {
        let _0x3fd9b6 = _0x3d593e?.["data"]?.["sort"](function (_0x4d95b7, _0x1c1c07) {
            let _0x1e4e87 = parseInt(_0x1c1c07.taskDetail.taskValue),
              _0x44b393 = parseInt(_0x4d95b7.taskDetail.taskValue);
            return _0x1e4e87 - _0x44b393;
          }),
          _0x3cdd19 = _0x3fd9b6.filter(_0x44554b => _0x44554b.maxNum - _0x44554b.receiveNum > 0 && _0x44554b.taskDetail.materialGroup.groupName.includes("红包"));
        _0x3cdd19?.["length"] ? await this.moonbox_receiveActiveTask(_0x3cdd19) : (this.log("没有可领取的阅光宝盒红包任务了"), this.need_read_moonbox = false);
      } else {
        let _0x480443 = _0x3d593e?.["message"] || "";
        this.log("阅光宝盒查询可领取任务失败[" + _0x1ae04a + "]: " + _0x480443);
      }
    } catch (_0x15b6d8) {
      console.log(_0x15b6d8);
    }
  }
  async moonbox_receiveActiveTask(_0x3395ca, _0x2fdcae = 0, _0x26d1c1 = {}) {
    try {
      let _0x2d1a86 = {
          activeId: _0x26fcd0,
          taskId: _0x3395ca[_0x2fdcae].secondTaskId,
          ...this.get_woread_param()
        },
        _0x306ca5 = this.encode_woread(_0x2d1a86);
      const _0x5d3333 = {
        sign: _0x306ca5
      };
      const _0x4c1f70 = {
        fn: "moonbox_queryActiveTaskList",
        method: "post",
        url: "https://10010.woread.com.cn/ng_woread_service/rest/activity423/receiveActiveTask",
        json: _0x5d3333
      };
      let {
          result: _0x4a0da1
        } = await this.woread_api(_0x4c1f70),
        _0x3a903d = _0x45121f.get(_0x4a0da1, "code", -1);
      if (_0x3a903d == "0000") {
        this.need_read_moonbox = true;
        this.log("领取阅光宝盒任务[" + _0x3395ca?.[_0x2fdcae]?.["taskDetail"]?.["taskName"] + "]成功");
      } else {
        let _0x3dc852 = _0x4a0da1?.["message"] || "";
        this.log("领取阅光宝盒任务[" + _0x3395ca?.[_0x2fdcae]?.["taskDetail"]?.["taskName"] + "]失败[" + _0x3a903d + "]: " + _0x3dc852);
        _0x3dc852?.["includes"]("今天无法完成") && _0x3395ca?.["length"] > _0x2fdcae + 1 && (await this.moonbox_receiveActiveTask(_0x3395ca, _0x2fdcae + 1, _0x26d1c1));
      }
    } catch (_0x5f097a) {
      console.log(_0x5f097a);
    }
  }
  async moonbox_queryReadStatus(_0x59242b = {}) {
    try {
      let _0x58bd47 = {
          activeIndex: _0x26fcd0,
          ...this.get_woread_param()
        },
        _0x4008ac = this.encode_woread(_0x58bd47);
      const _0x397381 = {
        sign: _0x4008ac
      };
      const _0x485dd4 = {
        fn: "moonbox_queryReadStatus",
        method: "post",
        url: "https://10010.woread.com.cn/ng_woread_service/rest/activity423/queryReadStatus",
        json: _0x397381
      };
      let {
          result: _0x40c68c
        } = await this.woread_api(_0x485dd4),
        _0x292288 = _0x45121f.get(_0x40c68c, "code", -1);
      if (_0x292288 == "0000") {
        switch (_0x40c68c?.["data"]) {
          case "2":
            {
              this.log("阅光宝盒去阅读两分钟抽奖");
              const _0x108dd8 = {
                readTime: 2
              };
              await this.woread_addReadTime(_0x108dd8);
              await this.moonbox_drawReadActivePrize();
              break;
            }
          case "3":
            {
              this.log("阅光宝盒今天已抽奖");
              break;
            }
          case "4":
            {
              this.log("阅光宝盒今天可以抽奖");
              await this.moonbox_drawReadActivePrize();
              break;
            }
          default:
            {
              this.log("阅光宝盒抽奖状态[" + _0x40c68c?.["data"] + "]");
              break;
            }
        }
      } else {
        let _0x7bf93e = _0x40c68c?.["message"] || "";
        this.log("查询阅光宝盒抽奖次数失败[" + _0x292288 + "]: " + _0x7bf93e);
      }
    } catch (_0x5845fd) {
      console.log(_0x5845fd);
    }
  }
  async moonbox_drawReadActivePrize(_0x81e626 = {}) {
    try {
      let _0x29fc83 = {
          activeIndex: _0x26fcd0,
          ...this.get_woread_param()
        },
        _0xd7ac1e = this.encode_woread(_0x29fc83);
      const _0x22a230 = {
        sign: _0xd7ac1e
      };
      const _0x5a2dae = {
        fn: "moonbox_drawReadActivePrize",
        method: "post",
        url: "https://10010.woread.com.cn/ng_woread_service/rest/activity423/drawReadActivePrize",
        json: _0x22a230
      };
      let {
          result: _0x525e2d
        } = await this.woread_api(_0x5a2dae),
        _0x5a9ceb = _0x45121f.get(_0x525e2d, "code", -1);
      if (_0x5a9ceb == "0000") {
        const _0x6dfdf8 = {
          notify: true
        };
        this.log("阅光宝盒抽奖: " + (_0x525e2d?.["data"]?.["prizedesc"] || JSON.stringify(_0x525e2d)), _0x6dfdf8);
      } else {
        let _0x175afe = _0x525e2d?.["message"] || "";
        this.log("阅光宝盒抽奖失败[" + _0x5a9ceb + "]: " + _0x175afe);
      }
    } catch (_0x1d3d3d) {
      console.log(_0x1d3d3d);
    }
  }
  async ltyp_login(_0x31e945, _0x145932 = {}) {
    try {
      const _0x10455f = {
        "client-Id": _0x186fc9,
        accessToken: ""
      };
      const _0x52c531 = {
        clientId: _0x186fc9,
        ticket: _0x31e945
      };
      let _0x36f884 = {
          fn: "ltyp_login",
          method: "post",
          url: "https://panservice.mail.wo.cn/wohome/dispatcher",
          headers: _0x10455f,
          json: {
            header: this.get_ltyp_sign_header("HandheldHallAutoLogin"),
            body: _0x52c531
          }
        },
        {
          result: _0x310483
        } = await this.request(_0x36f884),
        _0x333866 = _0x45121f.get(_0x310483, "STATUS", -1);
      if (_0x333866 == 200) {
        this.ltyp_token = _0x310483?.["RSP"]?.["DATA"]?.["token"];
        for (let _0x4193e4 of _0x4d9330) {
          await this.ltyp_incentiveTimes(_0x4193e4);
          await this.ltyp_lottery(_0x4193e4);
        }
      } else {
        let _0x394611 = _0x310483?.["msg"] || "";
        this.log("联通云盘登录失败[" + _0x333866 + "]: " + _0x394611);
      }
    } catch (_0x8944e9) {
      console.log(_0x8944e9);
    }
  }
  async ltyp_incentiveTimes(_0x4aff12, _0x1da9e1 = {}) {
    try {
      const _0x265509 = {
        "client-Id": _0x186fc9,
        "Access-Token": this.ltyp_token
      };
      const _0x43a228 = {
        fn: "ltyp_incentiveTimes",
        method: "get",
        url: "https://panservice.mail.wo.cn/activity/v1/incentiveTimes",
        headers: _0x265509,
        searchParams: {}
      };
      _0x43a228.searchParams.bizKey = "incentiveTimesPipeline";
      _0x43a228.searchParams.activityId = _0x4aff12;
      let {
          result: _0xac7fb7
        } = await this.request(_0x43a228),
        _0x481081 = _0x45121f.get(_0xac7fb7?.["meta"], "code", -1);
      if (_0x481081 == 0) {
        let {
          isIncentiveTask = 0,
          taskType = 0,
          incentiveTimeTotal = 0,
          incentiveTimeDone = 0
        } = _0xac7fb7?.["result"];
        if (isIncentiveTask) {
          for (let _0x4c5718 = incentiveTimeDone; _0x4c5718 < incentiveTimeTotal; _0x4c5718++) {
            await this.ltyp_incentiveTask(_0x4aff12);
          }
        }
      } else {
        let _0x45c4ad = _0xac7fb7?.["meta"]?.["message"] || "";
        this.log("联通云盘查询任务失败[" + _0x481081 + "]: " + _0x45c4ad);
      }
    } catch (_0x481b02) {
      console.log(_0x481b02);
    }
  }
  async ltyp_incentiveTask(_0x51a025, _0x561a31 = {}) {
    try {
      const _0x517c81 = {
        "client-Id": _0x186fc9,
        "Access-Token": this.ltyp_token
      };
      const _0x3902b0 = {
        activityId: _0x51a025
      };
      const _0x23eebb = {
        bizKey: "incentiveTaskPipeline",
        bizObject: _0x3902b0
      };
      const _0x260ff6 = {
        fn: "ltyp_incentiveTask",
        method: "post",
        url: "https://panservice.mail.wo.cn/activity/v1/incentiveTask",
        headers: _0x517c81,
        json: _0x23eebb
      };
      let {
          result: _0x1e844d
        } = await this.request(_0x260ff6),
        _0x4fe7e6 = _0x45121f.get(_0x1e844d?.["meta"], "code", -1);
      if (_0x4fe7e6 == 0) {
        let {
          incentiveStatus = 0,
          incentiveMessage = ""
        } = _0x1e844d?.["result"];
        incentiveStatus == 1 ? this.log("联通云盘完成任务成功") : this.log("联通云盘完成任务失败[" + incentiveStatus + "]: " + incentiveMessage);
      } else {
        let _0x527ee6 = _0x1e844d?.["meta"]?.["message"] || "";
        this.log("联通云盘完成任务错误[" + _0x4fe7e6 + "]: " + _0x527ee6);
      }
    } catch (_0x2b0e78) {
      console.log(_0x2b0e78);
    }
  }
  async ltyp_lottery_times(_0x5dce80, _0x5b3b57 = {}) {
    try {
      const _0x1ab755 = {
        "client-Id": _0x186fc9,
        token: this.ltyp_token
      };
      const _0x1aceda = {
        activityId: _0x5dce80
      };
      const _0x15fbc5 = {
        fn: "ltyp_lottery_times",
        method: "get",
        url: "https://panservice.mail.wo.cn/activity/v1/times",
        headers: _0x1ab755,
        searchParams: _0x1aceda
      };
      let {
          result: _0x57ec46
        } = await this.request(_0x15fbc5),
        _0x354f55 = _0x45121f.get(_0x57ec46, "RSP_CODE", -1);
      if (_0x354f55 == 0) {
        let {
          times = 0
        } = _0x57ec46?.["DATA"];
        this.log("联通云盘可以抽奖" + times + "次");
        while (times-- > 0) {
          await this.ltyp_lottery(_0x5dce80);
        }
      } else {
        let _0x9bac5b = _0x57ec46?.["RSP_DESC"] || "";
        this.log("联通云盘查询抽奖次数失败[" + _0x354f55 + "]: " + _0x9bac5b);
      }
    } catch (_0xe697f) {
      console.log(_0xe697f);
    }
  }
  async ltyp_lottery(_0x390695, _0x238134 = {}) {
    try {
      const _0x5e03c4 = {
        "client-Id": _0x186fc9,
        "Access-Token": this.ltyp_token
      };
      const _0x9f90f0 = {
        activityId: _0x390695,
        type: 3
      };
      const _0x10745e = {
        lottery: _0x9f90f0
      };
      const _0x11509b = {
        fn: "ltyp_lottery",
        method: "post",
        url: "https://panservice.mail.wo.cn/wohome/v1/lottery",
        headers: _0x5e03c4,
        json: {}
      };
      _0x11509b.json.bizKey = "newLottery";
      _0x11509b.json.bizObject = _0x10745e;
      let {
          result: _0x401d13
        } = await this.request(_0x11509b),
        _0x12293b = _0x45121f.get(_0x401d13?.["meta"], "code", -1);
      if (_0x12293b == 0) {
        let {
          prizeName = ""
        } = _0x401d13?.["result"];
        if (prizeName) {
          const _0x25a0ff = {
            notify: true
          };
          this.log("联通云盘抽奖: " + prizeName, _0x25a0ff);
          await this.ltyp_lottery(_0x390695, _0x238134);
        }
      } else {
        let _0x1ea9f6 = _0x401d13?.["meta"]?.["message"] || "";
        this.log("联通云盘抽奖错误[" + _0x12293b + "]: " + _0x1ea9f6);
      }
    } catch (_0x425479) {
      console.log(_0x425479);
    }
  }
  async sign_task() {
    await this.sign_getContinuous();
  }
  async ltcy_task() {
    let _0x5d4cb3 = "https://web.wostore.cn/web/flowGame/index.html?channelId=GAMELTAPP_90006&pushid=99",
      {
        ticket: _0x1f540c
      } = await this.openPlatLineNew(_0x5d4cb3);
    if (!_0x1f540c) {
      return;
    }
    await this.game_login(_0x1f540c);
  }
  async ttlxj_task() {
    this.rptId = "";
    let _0x170572 = "https://epay.10010.com/ci-mps-st-web/?webViewNavIsHidden=webViewNavIsHidden",
      {
        ticket: _0x4e7950,
        type: _0x2351aa,
        loc: _0x29f490
      } = await this.openPlatLineNew(_0x170572);
    if (!_0x4e7950) {
      return;
    }
    await this.ttlxj_authorize(_0x4e7950, _0x2351aa, _0x29f490);
  }
  async epay_28_task() {
    this.rptId = "";
    let _0x2ac797 = new Date().getDate();
    _0x2ac797 >= 26 && _0x2ac797 <= 28 && (await this.epay_28_authCheck());
  }
  async draw_28_task() {
    let _0x3b02da = new Date().getDate();
    _0x3b02da == 28 && (await this.draw_28_queryChance());
  }
  async flmf_task() {
    if (this.city.filter(_0x535bb6 => _0x535bb6.proCode == "091").length == 0) {
      return;
    }
    let _0xe2f74f = "https://weixin.linktech.hk/lv-web/handHall/autoLogin?actcode=welfareCenter",
      {
        loc: _0x18152f
      } = await this.openPlatLineNew(_0xe2f74f);
    if (!_0x18152f) {
      return;
    }
    await this.flmf_login(_0x18152f);
  }
  async ltyp_task() {
    let _0x5e0cc3 = "https://panservice.mail.wo.cn/h5/activitymobile/lottery?activityId=WzaR7KkUJSpR+gDh7Fy6mA==&clientid=1001000003&appName=shouting",
      {
        ticket: _0x20ad5f
      } = await this.openPlatLineNew(_0x5e0cc3);
    if (!_0x20ad5f) {
      return;
    }
    await this.ltyp_login(_0x20ad5f);
  }
  async woread_draw_task(_0x2bf510) {
    await this.woread_getSeeVideoAddNumber(_0x2bf510);
    await this.woread_addDrawTimes(_0x2bf510);
    await this.woread_getActivityNumber(_0x2bf510);
  }
  async woread_task() {
    for (let _0x2d1612 of _0x2d0a35) {
      await this.woread_draw_task(_0x2d1612);
    }
    await this.moonbox_queryReadStatus();
    await this.woread_queryTicketAccount();
  }
  async woread_reading_task() {
    while (this.need_read_rabbit || this.need_read_moonbox) {
      let _0x46b62d = 2;
      const _0x5a647d = {
        readTime: _0x46b62d
      };
      await this.woread_addReadTime(_0x5a647d);
      if (this.need_read_moonbox) {
        await this.moonbox_queryCurTaskStatus();
      }
      if (this.need_read_rabbit) {
        await this.rabblit_queryActivityData();
      }
      (this.need_read_rabbit || this.need_read_moonbox) && (this.log("等待2分钟..."), await _0x45121f.wait(125000));
    }
  }
  async userLoginTask() {
    if (!(await this.onLine())) {
      return;
    }
    if (!(await this.woread_auth())) {
      return;
    }
    if (!(await this.woread_login())) {
      return;
    }
    await this.moonbox_queryCurTaskStatus();
  }
  async userTask() {
    _0x45121f.log("\n------------------ 账号[" + this.index + "] ------------------");
    await this.ttlxj_task();
    await this.ltyp_task();
    await this.epay_28_task();
    await this.draw_28_task();
    await this.flmf_task();
    await this.woread_task();
  }
  async userTestTask() {
    _0x45121f.log("\n------------------ 账号[" + this.index + "] ------------------");
    await this.ltyp_task();
  }
}
!(async () => {
  if (!(await _0x15fc43())) {
    return;
  }
  await _0x91552e();
  _0x45121f.read_env(_0x4ca15c);
  for (let _0xe23525 of _0x45121f.userList) {
    await _0xe23525.userLoginTask();
  }
  for (let _0x12ed52 of _0x45121f.userList.filter(_0x3e941d => _0x3e941d.valid)) {
    await _0x12ed52.userTask();
  }
  let _0xcd734d = _0x45121f.userList.filter(_0x1695b2 => _0x1695b2.valid && _0x1695b2.woread_verifycode && (_0x1695b2.need_read_rabbit || _0x1695b2.need_read_moonbox));
  if (_0xcd734d.length) {
    let _0x111344 = [];
    _0x45121f.log("\n============ 开始刷阅读时长 ============");
    for (let _0x1b1190 of _0xcd734d) {
      _0x111344.push(_0x1b1190.woread_reading_task());
    }
    await Promise.all(_0x111344);
  }
})().catch(_0x47d85b => _0x45121f.log(_0x47d85b)).finally(() => _0x45121f.exitNow());
async function _0x15fc43(_0x230e06 = 0) {
  let _0x5aeb0e = false;
  try {
    const _0x1816ac = {
      fn: "auth",
      method: "get",
      url: _0x44f545,
      timeout: 20000
    };
    let {
      statusCode: _0x5e8f3b,
      result: _0x3709d6
    } = await _0xdff388.request(_0x1816ac);
    if (_0x5e8f3b != 200) {
      _0x230e06++ < _0x15cb82 && (_0x5aeb0e = await _0x15fc43(_0x230e06));
      return _0x5aeb0e;
    }
    if (_0x3709d6?.["code"] == 0) {
      _0x3709d6 = JSON.parse(_0x3709d6.data.file.data);
      if (_0x3709d6?.["commonNotify"] && _0x3709d6.commonNotify.length > 0) {
        const _0x2d8ffa = {
          notify: true
        };
        _0x45121f.log(_0x3709d6.commonNotify.join("\n") + "\n", _0x2d8ffa);
      }
      _0x3709d6?.["commonMsg"] && _0x3709d6.commonMsg.length > 0 && _0x45121f.log(_0x3709d6.commonMsg.join("\n") + "\n");
      if (_0x3709d6[_0x32b1cf]) {
        let _0x2f976e = _0x3709d6[_0x32b1cf];
        _0x2f976e.status == 0 ? _0x56f43d >= _0x2f976e.version ? (_0x5aeb0e = true, _0x45121f.log(_0x2f976e.msg[_0x2f976e.status]), _0x45121f.log(_0x2f976e.updateMsg), _0x45121f.log("现在运行的脚本版本是：" + _0x56f43d + "，最新脚本版本：" + _0x2f976e.latestVersion)) : _0x45121f.log(_0x2f976e.versionMsg) : _0x45121f.log(_0x2f976e.msg[_0x2f976e.status]);
      } else {
        _0x45121f.log(_0x3709d6.errorMsg);
      }
    } else {
      _0x230e06++ < _0x15cb82 && (_0x5aeb0e = await _0x15fc43(_0x230e06));
    }
  } catch (_0x3920e3) {
    _0x45121f.log(_0x3920e3);
  } finally {
    return _0x5aeb0e;
  }
}
async function _0x91552e() {
  let _0x2bc5d6 = false;
  try {
    const _0x3a13ae = {
      fn: "getTaskUrl",
      method: "get",
      url: _0x52d07d
    };
    let {
      statusCode: _0xf1cb5f,
      result: _0x1bedce
    } = await _0xdff388.request(_0x3a13ae);
    if (_0xf1cb5f != 200) {
      return Promise.resolve();
    }
    if (_0x1bedce?.["code"] == 0) {
      _0x1bedce = JSON.parse(_0x1bedce.data.file.data);
      if (_0x1bedce?.["moonbox"]) {
        _0x26fcd0 = _0x1bedce?.["moonbox"];
      }
      if (_0x1bedce?.["ltyp_lottery"]) {
        _0x4d9330 = _0x1bedce?.["ltyp_lottery"];
      }
      if (_0x1bedce?.["woread_draw_id"]) {
        _0x2d0a35 = _0x1bedce?.["woread_draw_id"];
      }
    }
  } catch (_0x3c4f1f) {
    _0x45121f.log(_0x3c4f1f);
  } finally {
    return _0x2bc5d6;
  }
}
function _0x4b43ee(_0x276856) {
  return new class {
    constructor(_0x5d6467) {
      this.name = _0x5d6467;
      this.startTime = Date.now();
      const _0x3d139a = {
        time: true
      };
      this.log("[" + this.name + "]开始运行\n", _0x3d139a);
      this.notifyStr = [];
      this.notifyFlag = true;
      this.userIdx = 0;
      this.userList = [];
      this.userCount = 0;
    }
    log(_0x33296e, _0x1abe2e = {}) {
      const _0x30adce = {
        console: true
      };
      Object.assign(_0x30adce, _0x1abe2e);
      if (_0x30adce.time) {
        let _0x116aba = _0x30adce.fmt || "hh:mm:ss";
        _0x33296e = "[" + this.time(_0x116aba) + "]" + _0x33296e;
      }
      if (_0x30adce.notify) {
        this.notifyStr.push(_0x33296e);
      }
      if (_0x30adce.console) {
        console.log(_0x33296e);
      }
    }
    get(_0x48504b, _0x3dbe8b, _0x724ef = "") {
      let _0x1d25b5 = _0x724ef;
      _0x48504b?.["hasOwnProperty"](_0x3dbe8b) && (_0x1d25b5 = _0x48504b[_0x3dbe8b]);
      return _0x1d25b5;
    }
    pop(_0x3f711e, _0x3bdd68, _0x446ebd = "") {
      let _0x29f2ce = _0x446ebd;
      _0x3f711e?.["hasOwnProperty"](_0x3bdd68) && (_0x29f2ce = _0x3f711e[_0x3bdd68], delete _0x3f711e[_0x3bdd68]);
      return _0x29f2ce;
    }
    copy(_0x112c7a) {
      return Object.assign({}, _0x112c7a);
    }
    read_env(_0x559581) {
      let _0x52c70b = _0x3855a4.map(_0x547325 => process.env[_0x547325]);
      for (let _0x251eb3 of _0x52c70b.filter(_0x548a57 => !!_0x548a57)) {
        let _0x570969 = _0x4ab515.filter(_0x374143 => _0x251eb3.includes(_0x374143)),
          _0x3c719b = _0x570969.length > 0 ? _0x570969[0] : _0x4ab515[0];
        for (let _0x5366f0 of _0x251eb3.split(_0x3c719b).filter(_0x2d3c42 => !!_0x2d3c42)) {
          this.userList.push(new _0x559581(_0x5366f0));
        }
      }
      this.userCount = this.userList.length;
      if (!this.userCount) {
        const _0xca2bf8 = {
          notify: true
        };
        this.log("未找到变量，请检查变量" + _0x3855a4.map(_0x58994b => "[" + _0x58994b + "]").join("或"), _0xca2bf8);
        return false;
      }
      this.log("共找到" + this.userCount + "个账号");
      return true;
    }
    async threads(_0x2b75c0, _0x5fbf39, _0x49cc69 = {}) {
      while (_0x5fbf39.idx < _0x45121f.userList.length) {
        let _0x2d48d6 = _0x45121f.userList[_0x5fbf39.idx++];
        if (!_0x2d48d6.valid) {
          continue;
        }
        await _0x2d48d6[_0x2b75c0](_0x49cc69);
      }
    }
    async threadTask(_0x530c53, _0x212f27) {
      let _0xa3471f = [];
      const _0x54acd0 = {
        idx: 0
      };
      while (_0x212f27--) {
        _0xa3471f.push(this.threads(_0x530c53, _0x54acd0));
      }
      await Promise.all(_0xa3471f);
    }
    time(_0x5b3c80, _0x14646f = null) {
      let _0xf20d90 = _0x14646f ? new Date(_0x14646f) : new Date(),
        _0x5b9779 = {
          "M+": _0xf20d90.getMonth() + 1,
          "d+": _0xf20d90.getDate(),
          "h+": _0xf20d90.getHours(),
          "m+": _0xf20d90.getMinutes(),
          "s+": _0xf20d90.getSeconds(),
          "q+": Math.floor((_0xf20d90.getMonth() + 3) / 3),
          S: this.padStr(_0xf20d90.getMilliseconds(), 3)
        };
      /(y+)/.test(_0x5b3c80) && (_0x5b3c80 = _0x5b3c80.replace(RegExp.$1, (_0xf20d90.getFullYear() + "").substr(4 - RegExp.$1.length)));
      for (let _0x30cc7b in _0x5b9779) new RegExp("(" + _0x30cc7b + ")").test(_0x5b3c80) && (_0x5b3c80 = _0x5b3c80.replace(RegExp.$1, 1 == RegExp.$1.length ? _0x5b9779[_0x30cc7b] : ("00" + _0x5b9779[_0x30cc7b]).substr(("" + _0x5b9779[_0x30cc7b]).length)));
      return _0x5b3c80;
    }
    async showmsg() {
      if (!this.notifyFlag) {
        return;
      }
      if (!this.notifyStr.length) {
        return;
      }
      var _0x129dfd = require("./sendNotify");
      this.log("\n============== 推送 ==============");
      await _0x129dfd.sendNotify(this.name, this.notifyStr.join("\n"));
    }
    padStr(_0x4662cc, _0x27e3d1, _0x442ace = {}) {
      let _0x38d9fd = _0x442ace.padding || "0",
        _0x289b23 = _0x442ace.mode || "l",
        _0x3aabd0 = String(_0x4662cc),
        _0x275590 = _0x27e3d1 > _0x3aabd0.length ? _0x27e3d1 - _0x3aabd0.length : 0,
        _0x31c7c3 = "";
      for (let _0x40cbd3 = 0; _0x40cbd3 < _0x275590; _0x40cbd3++) {
        _0x31c7c3 += _0x38d9fd;
      }
      _0x289b23 == "r" ? _0x3aabd0 = _0x3aabd0 + _0x31c7c3 : _0x3aabd0 = _0x31c7c3 + _0x3aabd0;
      return _0x3aabd0;
    }
    json2str(_0x2a307d, _0x1c3b20, _0x35d6f9 = false) {
      let _0x571fca = [];
      for (let _0x3060b6 of Object.keys(_0x2a307d).sort()) {
        let _0x23e007 = _0x2a307d[_0x3060b6];
        if (_0x23e007 && _0x35d6f9) {
          _0x23e007 = encodeURIComponent(_0x23e007);
        }
        _0x571fca.push(_0x3060b6 + "=" + _0x23e007);
      }
      return _0x571fca.join(_0x1c3b20);
    }
    str2json(_0x104ff7, _0x1516c9 = false) {
      let _0x4eea90 = {};
      for (let _0x5d6ecf of _0x104ff7.split("&")) {
        if (!_0x5d6ecf) {
          continue;
        }
        let _0x57563a = _0x5d6ecf.indexOf("=");
        if (_0x57563a == -1) {
          continue;
        }
        let _0x463465 = _0x5d6ecf.substr(0, _0x57563a),
          _0xf4382f = _0x5d6ecf.substr(_0x57563a + 1);
        if (_0x1516c9) {
          _0xf4382f = decodeURIComponent(_0xf4382f);
        }
        _0x4eea90[_0x463465] = _0xf4382f;
      }
      return _0x4eea90;
    }
    randomPattern(_0x32097a, _0x1fff43 = "abcdef0123456789") {
      let _0x459060 = "";
      for (let _0x2c4d9 of _0x32097a) {
        if (_0x2c4d9 == "x") {
          _0x459060 += _0x1fff43.charAt(Math.floor(Math.random() * _0x1fff43.length));
        } else {
          _0x2c4d9 == "X" ? _0x459060 += _0x1fff43.charAt(Math.floor(Math.random() * _0x1fff43.length)).toUpperCase() : _0x459060 += _0x2c4d9;
        }
      }
      return _0x459060;
    }
    randomUuid() {
      return this.randomPattern("xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx");
    }
    randomString(_0x2e16cc, _0x2889e5 = "abcdef0123456789") {
      let _0x971f9a = "";
      for (let _0xeae8f8 = 0; _0xeae8f8 < _0x2e16cc; _0xeae8f8++) {
        _0x971f9a += _0x2889e5.charAt(Math.floor(Math.random() * _0x2889e5.length));
      }
      return _0x971f9a;
    }
    randomList(_0x208ada) {
      let _0x5b30a1 = Math.floor(Math.random() * _0x208ada.length);
      return _0x208ada[_0x5b30a1];
    }
    wait(_0x2f09af) {
      return new Promise(_0x26212f => setTimeout(_0x26212f, _0x2f09af));
    }
    async exitNow() {
      await this.showmsg();
      let _0x50e9c5 = Date.now(),
        _0x1207f8 = (_0x50e9c5 - this.startTime) / 1000;
      this.log("");
      const _0x888c4a = {
        time: true
      };
      this.log("[" + this.name + "]运行结束，共运行了" + _0x1207f8 + "秒", _0x888c4a);
      process.exit(0);
    }
    normalize_time(_0x2b69c0, _0x1fc0ea = {}) {
      let _0xc789e3 = _0x1fc0ea.len || _0x3a3b6c;
      _0x2b69c0 = _0x2b69c0.toString();
      let _0x456fe6 = _0x2b69c0.length;
      while (_0x456fe6 < _0xc789e3) {
        _0x2b69c0 += "0";
      }
      _0x456fe6 > _0xc789e3 && (_0x2b69c0 = _0x2b69c0.slice(0, 13));
      return parseInt(_0x2b69c0);
    }
    async wait_until(_0x1ee239, _0x2609bc = {}) {
      let _0x214f7e = _0x2609bc.logger || this,
        _0x5847c1 = _0x2609bc.interval || _0x33991b,
        _0x56e4bb = _0x2609bc.limit || _0x58bad2,
        _0x29682c = _0x2609bc.ahead || _0x3b751a;
      if (typeof _0x1ee239 == "string" && _0x1ee239.includes(":")) {
        if (_0x1ee239.includes("-")) {
          _0x1ee239 = new Date(_0x1ee239).getTime();
        } else {
          let _0x4c0f74 = this.time("yyyy-MM-dd ");
          _0x1ee239 = new Date(_0x4c0f74 + _0x1ee239).getTime();
        }
      }
      let _0xe3f66f = this.normalize_time(_0x1ee239) - _0x29682c,
        _0x4cd199 = this.time("hh:mm:ss.S", _0xe3f66f),
        _0x58f52b = Date.now();
      _0x58f52b > _0xe3f66f && (_0xe3f66f += 86400000);
      let _0x4a2e8b = _0xe3f66f - _0x58f52b;
      if (_0x4a2e8b > _0x56e4bb) {
        const _0x2da74c = {
          time: true
        };
        _0x214f7e.log("离目标时间[" + _0x4cd199 + "]大于" + _0x56e4bb / 1000 + "秒,不等待", _0x2da74c);
      } else {
        const _0x1647b6 = {
          time: true
        };
        _0x214f7e.log("离目标时间[" + _0x4cd199 + "]还有" + _0x4a2e8b / 1000 + "秒,开始等待", _0x1647b6);
        while (_0x4a2e8b > 0) {
          let _0x43b54e = Math.min(_0x4a2e8b, _0x5847c1);
          await this.wait(_0x43b54e);
          _0x58f52b = Date.now();
          _0x4a2e8b = _0xe3f66f - _0x58f52b;
        }
        const _0xacd99c = {
          time: true
        };
        _0x214f7e.log("已完成等待", _0xacd99c);
      }
    }
    async wait_gap_interval(_0x24f844, _0x23e619) {
      let _0x281ace = Date.now() - _0x24f844;
      _0x281ace < _0x23e619 && (await this.wait(_0x23e619 - _0x281ace));
    }
  }(_0x276856);
}