//Sat Aug 16 2025 00:59:47 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const li1liI = new lI1i1i("联通云盘抽奖"),
  il1lIl = 1,
  iiliIi = 0,
  {
    v4: i111l1
  } = require("uuid"),
  lIl11i = require("crypto"),
  lIl11l = i111l1();
let iiii1i = process.env.chinaUnicomCookie,
  iiii1l = "",
  lI11I = "";
ckArr = iiii1i.split("&");
lIllI1("【debug】 这是你的账号数组:\n " + ckArr);
!(async () => {
  ckArr = iiii1i.split("&");
  await il1Iil();
  for (let li1Iil = 0; li1Iil < ckArr.length; li1Iil++) {
    let ill11 = li1Iil + 1;
    console.log("------------- 开始【第 " + ill11 + " 个账号】-------------");
    lI11I = ckArr[li1Iil].split("&");
    lIllI1("【debug】 这是你第 " + ill11 + " 账号信息:\n " + lI11I);
    await iIilIl();
    await li1liI.wait(1 * 2000);
    if (num1 == 1) {
      console.log("当前online过期，跳过...");
      continue;
    }
    customDateString = i111ii();
    const i1ii1l = new Date(),
      iiIIii = require("axios");
    let i1liIi = {
      "method": "GET",
      "url": "https://m.client.10010.com/mobileService/openPlatform/openPlatLineNew.htm?appName=shouting&clientid=1001000003&to_url=https://panservice.mail.wo.cn/h5/activitymobile/turn-template?activityId%3D6",
      "headers": {
        "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 16_3_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 unicom{version:iphone_c@11.0800}",
        "Cookie": "PvSessionId=" + customDateString + "" + lIl11l + ";c_mobile=" + num1 + "; c_version=iphone_c@11.0800; city=036|" + cityCode + "|90063345|-99;devicedId=" + lIl11l + "; ecs_token=" + ecs_token + ";t3_token=" + t3_token + ""
      },
      "maxRedirects": 0
    };
    await iiIIii.request(i1liIi).catch(iill => {
      wenb = iill.request.res.rawHeaders[13];
      ticket1 = wenb.match(/ticket=([^&]+)/);
      ticket = ticket1[1];
    });
    let i1liIl = {
      "method": "GET",
      "url": "https://epay.10010.com/woauth2/login?response_type=web_token&source=app_sjyyt&union_session_id&device_digest_token_id&target_client_id=7cb46449-3b11-4414-bb49-cbd15525fb88&position=null&redirect_url=https://epay.10010.com/ci-mcss-party-web/clockIn/?bizFrom%3D225&bizChannelCode=225",
      "headers": {
        "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 16_3_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 unicom{version:iphone_c@11.0800}",
        "Cookie": "WOAUTH2_SESSIONID=NTNmMGQzZTYtODRmZS00NDliLWI3MTMtYWM5YjRkMGM5OWVm",
        "Accept-Encoding": "gzip, deflate, br",
        "Accept-Language": "zh-CN,zh-Hans;q=0.9"
      },
      "maxRedirects": 0
    };
    await iiIIii.request(i1liIl).catch(iiIIl1 => {
      wenb = iiIIl1.request.res.rawHeaders[5];
      rptid1 = wenb.match(/rptid=([^&]+)/);
      rptid = rptid1[1];
    });
    await li1liI.wait(1 * 2000);
    console.log("" + num1 + "抽奖");
    await li1liI.wait(1 * 1000);
    req = Math.floor(89999 * Math.random()) + 100000;
    sjc13 = Math.round(new Date().getTime()).toString();
    const IiIill = "HandheldHallAutoLogin" + sjc13 + "" + req + "100002",
      li1Iii = lIl11i.createHash("md5");
    li1Iii.update(IiIill);
    md5Hash = li1Iii.digest("hex");
    await iIilIi();
    const lIII1 = require("request"),
      llIi11 = JSON.stringify({
        "input": "1",
        "platform": 3,
        "modelId": 1,
        "tag": 0,
        "history": []
      }),
      IIi11I = {
        "method": "POST",
        "url": "https://panservice.mail.wo.cn/wohome/ai/assistant/query",
        "headers": {
          "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 16_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 unicom{version:iphone_c@12.0400};ltst;OSVersion/16.6",
          "Accept": "text/event-stream",
          "Content-Type": "application/json",
          "X-YP-Access-Token": token,
          "Sec-Fetch-Site": "same-origin",
          "Accept-Language": "zh-CN,zh-Hans;q=0.9",
          "X-YP-App-Version": "",
          "Sec-Fetch-Mode": "cors",
          "Origin": "https://panservice.mail.wo.cn",
          "X-YP-Client-Id": "1001000003",
          "Sec-Fetch-Dest": "empty"
        },
        "body": llIi11
      };
    lIII1(IIi11I, function (llIi1I, lIlIii, li1Ili) {
      if (llIi1I) throw new Error(llIi1I);
      const I11lii = JSON.stringify({
          "activityId": "MjQ=",
          "id": "702"
        }),
        li1Ill = {
          "method": "POST",
          "url": "https://panservice.mail.wo.cn/activity/activity-task/vote",
          "headers": {
            "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 16_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) LianTongYunPan/4.0.2 (iPhone; iOS 16.6)",
            "Accept": "application/json, text/plain, */*",
            "Content-Type": "application/json",
            "Sec-Fetch-Mode": "cors",
            "clientId": "1001000165",
            "Origin": "https://panservice.mail.wo.cn",
            "Sec-Fetch-Dest": "empty",
            "X-YP-Access-Token": token,
            "Sec-Fetch-Site": "same-origin",
            "token": token,
            "X-YP-Client-Id": "1001000165",
            "Accept-Language": "zh-CN,zh-Hans;q=0.9",
            "X-SH-Access-Token": "",
            "source-type": "woapi"
          },
          "body": I11lii
        };
      lIII1(li1Ill, function (l1Iill, iiiiIi, iiiiIl) {
        if (l1Iill) throw new Error(l1Iill);
      });
      const Ili1ll = JSON.stringify({
          "activityId": "MjQ=",
          "id": "702"
        }),
        IIl1Il = {
          "method": "POST",
          "url": "https://panservice.mail.wo.cn/activity/activity-task/vote",
          "headers": {
            "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 16_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) LianTongYunPan/4.0.2 (iPhone; iOS 16.6)",
            "Accept": "application/json, text/plain, */*",
            "Content-Type": "application/json",
            "Sec-Fetch-Mode": "cors",
            "clientId": "1001000165",
            "Origin": "https://panservice.mail.wo.cn",
            "Sec-Fetch-Dest": "empty",
            "X-YP-Access-Token": token,
            "Sec-Fetch-Site": "same-origin",
            "token": token,
            "X-YP-Client-Id": "1001000165",
            "Accept-Language": "zh-CN,zh-Hans;q=0.9",
            "X-SH-Access-Token": "",
            "source-type": "woapi"
          },
          "body": Ili1ll
        };
      lIII1(IIl1Il, function (IIi11i, iiIIli, iili) {
        if (IIi11i) throw new Error(IIi11i);
      });
      const l1Iili = JSON.stringify({
          "activityId": "MjQ=",
          "id": "702"
        }),
        IIi11l = {
          "method": "POST",
          "url": "https://panservice.mail.wo.cn/activity/activity-task/vote",
          "headers": {
            "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 16_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) LianTongYunPan/4.0.2 (iPhone; iOS 16.6)",
            "Accept": "application/json, text/plain, */*",
            "Content-Type": "application/json",
            "Sec-Fetch-Mode": "cors",
            "clientId": "1001000165",
            "Origin": "https://panservice.mail.wo.cn",
            "Sec-Fetch-Dest": "empty",
            "X-YP-Access-Token": token,
            "Sec-Fetch-Site": "same-origin",
            "token": token,
            "X-YP-Client-Id": "1001000165",
            "Accept-Language": "zh-CN,zh-Hans;q=0.9",
            "X-SH-Access-Token": "",
            "source-type": "woapi"
          },
          "body": l1Iili
        };
      lIII1(IIi11l, function (IIl1Ii, ilIIl, I11ll1) {
        if (IIl1Ii) throw new Error(IIl1Ii);
      });
      console.log("等待DeepSeek响应，10s后抽奖");
    });
    await li1liI.wait(1 * 20000);
    await IllI();
  }
  await lili1l(iiii1l);
})().catch(Ii11Ii => li1liI.logErr(Ii11Ii)).finally(() => li1liI.done());
async function iIilIi() {
  let lIlIlI = {
      "url": "https://panservice.mail.wo.cn/wohome/dispatcher",
      "headers": {
        "Connection": "keep-alive",
        "Accept-Encoding": "gzip, deflate, br",
        "accessToken": "",
        "Content-Type": "application/json",
        "client-Id": "1001000003",
        "Origin": "https://panservice.mail.wo.cn",
        "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 16_3_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 unicom{version:iphone_c@11.0602}",
        "access-token": "",
        "Host": "panservice.mail.wo.cn",
        "X-YP-Client-Id": "1001000003",
        "Accept-Language": "zh-CN,zh-Hans;q=0.9",
        "Accept": "application/json, text/plain, */*"
      },
      "body": "{\"header\": {\"key\": \"HandheldHallAutoLogin\",\"resTime\": " + sjc13 + ",\"reqSeq\": " + req + ",\"channel\": \"100002\",\"version\": \"\",\"sign\": \"" + md5Hash + "\"},\"body\": {\"clientId\": \"1001000165\",\"ticket\": \"" + ticket + "\"}}"
    },
    iiIIll = await lIlI1(lIlIlI, "token");
  token = iiIIll.RSP.DATA.token;
  console.log(token);
}
async function IllI() {
  let IiII11 = {
      "url": "https://panservice.mail.wo.cn/activity/lottery",
      "headers": {
        "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 16_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 unicom{version:iphone_c@12.0400};ltst;OSVersion/16.6",
        "Accept": "application/json, text/plain, */*",
        "source-type": "woapi",
        "Sec-Fetch-Site": "same-origin",
        "clientId": "1001000165",
        "Accept-Language": "zh-CN,zh-Hans;q=0.9",
        "token": token,
        "X-SH-Access-Token": "",
        "Sec-Fetch-Mode": "cors",
        "X-YP-Access-Token": token,
        "X-YP-Client-Id": "1001000165",
        "Sec-Fetch-Dest": "empty"
      },
      "body": "{\"activityId\": \"MjI=\"}"
    },
    I11liI = await lIlI1(IiII11, "ll");
  try {
    I11liI.meta.code == 92000017 ? console.log("转盘已经抽过奖了") : (qgid = I11liI.result.prizeName, console.log("转盘获得：" + qgid));
  } catch (IIllil) {}
}
async function iIilIl() {
  let lIII = {
      "url": "https://m.client.10010.com/mobileService/onLine.htm",
      "headers": {
        "Accept-Encoding": "gzip, deflate, br",
        "Connection": "keep-alive",
        "Content-Type": "application/x-www-form-urlencoded",
        "Accept": "*/*",
        "Host": "m.client.10010.com",
        "User-Agent": "ChinaUnicom.x CFNetwork iOS/16.3.1 unicom{version:iphone_c@11.0700}",
        "Accept-Language": "zh-CN,zh-Hans;q=0.9"
      },
      "body": "deviceModel=iPhone&step=background&token_online=" + lI11I + "&version=iphone_c%4011.0700"
    },
    iI11 = await lIlI1(lIII, "获取");
  try {
    t3_token = iI11.t3_token;
    private_token = iI11.private_token;
    ecs_token = iI11.ecs_token;
    num1 = iI11.list[0].num;
    cityCode = iI11.list[0].cityCode;
  } catch (iIlIlI) {
    num1 = "1";
  }
}
async function ilI1I() {
  let lIl11 = {
      "url": "https://api.m.taobao.com/rest/api3.do?api=mtop.common.getTimestamp",
      "headers": {
        "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 16_6_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko)"
      }
    },
    ilIili = await iIilII(lIl11, "获取网络时间");
  try {
    shijian = ilIili.data.t;
  } catch (ilIill) {}
}
async function il1Iil() {
  let iIlIil = {
      "url": "https://gitee.com/kele2233/genxin/raw/master/ydid.json",
      "headers": {
        "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 16_5_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.43(0x18002b2d) NetType/WIFI Language/zh_CN"
      }
    },
    IIlll1 = await iIilII(iIlIil, "ll");
  hqsjc = IIlll1.ymsjc;
  gong = IIlll1.gong;
  dqsjc = Math.round(new Date().getTime() / 1000).toString();
  if (hqsjc > dqsjc) console.log("公告：" + IIlll1.gh), console.log("当前版本1.2，最新版本" + IIlll1.fwbbh);else {
    console.error(gong);
    process.exit();
  }
}
async function ii11ll() {
  let lIl1i = {
      "url": "https://activity.10010.com/sixPalaceGridTurntableLottery/signin/daySign",
      "headers": {
        "Accept": "application/json, text/plain, */*",
        "Accept-Encoding": "gzip, deflate, br",
        "Cookie": "PvSessionId=" + customDateString + "" + lIl11l + ";c_mobile=" + num1 + "; c_version=iphone_c@11.0800; city=036|" + cityCode + "|90063345|-99;devicedId=" + lIl11l + "; ecs_token=" + ecs_token + ";t3_token=" + t3_token + "",
        "Content-Type": "application/x-www-form-urlencoded",
        "Host": "activity.10010.com",
        "Connection": "keep-alive",
        "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 16_3_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 unicom{version:iphone_c@11.0700}",
        "Referer": "https://img.client.10010.com/",
        "Accept-Language": "zh-CN,zh-Hans;q=0.9"
      },
      "body": "shareCl=&shareCode="
    },
    Iili1l = await lIlI1(lIl1i, "签到");
  Iili1l.code == "0000" ? console.log("签到成功获得" + Iili1l.data.redSignMessage) : console.log(Iili1l.desc);
}
async function il1Iii(ilIil1, iI1l) {
  return new Promise(iiili => {
    let Il1III = [];
    if (ilIil1) {
      if (ilIil1.indexOf("@") !== -1) ilIil1.split("@").forEach(l11iI => {
        Il1III.push(l11iI);
      });else ilIil1.indexOf("\n") !== -1 ? ilIil1.split("\n").forEach(lli1ll => {
        Il1III.push(lli1ll);
      }) : Il1III.push(ilIil1);
      iiili(Il1III);
    } else {
      console.log("\n 【" + li1liI.name + "】：未填写变量 " + iI1l);
    }
  });
}
async function lili1l(liIili) {
  if (!liIili) return;
  if (il1lIl > 0) {
    if (li1liI.isNode()) {
      let Il1II1 = require("./sendNotify");
      await Il1II1.sendNotify(li1liI.name, liIili);
    } else li1liI.msg(liIili);
  } else console.log(liIili);
}
function iI1iIi(iiilI) {
  iiilI = iiilI || 32;
  let IIiIl1 = "QWERTYUIOPASDFGHJKLZXCVBNM1234567890",
    ilII11 = IIiIl1.length,
    l11ii = "";
  for (i = 0; i < iiilI; i++) l11ii += IIiIl1.charAt(Math.floor(Math.random() * ilII11));
  return l11ii;
}
let iI1iIl = "";
function lili1i(iiil1) {
  iI1iIl = iiil1;
}
function iI1Ii(liIil1) {
  iI1iIl === liIil1 ? console.log("Reached mark " + liIil1) : console.log("Invalid mark: " + liIil1);
}
function IiIIIl(lliIl) {
  var l11lI = new Date(lliIl * 1000);
  var il11II = l11lI.getFullYear();
  var iiiii = String(l11lI.getMonth() + 1).padStart(2, "0");
  var I1i1 = String(l11lI.getDate()).padStart(2, "0");
  var Il1l11 = String(l11lI.getHours()).padStart(2, "0");
  var l11l1 = String(l11lI.getMinutes()).padStart(2, "0");
  var iiiil = String(l11lI.getSeconds()).padStart(2, "0");
  var iiIlII = il11II + "-" + iiiii + "-" + I1i1 + " " + Il1l11 + ":" + l11l1 + ":" + iiiil;
  return iiIlII;
}
function IiIIIi(lliII, iiiiI) {
  return Math.round(Math.random() * (iiiiI - lliII) + lliII);
}
function lI11l() {
  const iIl11l = new Date(),
    I1ii = iIl11l.getHours(),
    I1il = new Date(iIl11l.getFullYear(), iIl11l.getMonth(), iIl11l.getDate(), I1ii + 1, 0, 0, 0);
  return I1il.getTime();
}
function iI1Il() {
  const IiI111 = new Date(),
    i11llI = IiI111.getMinutes(),
    iIIi1 = new Date(IiI111.getFullYear(), IiI111.getMonth(), IiI111.getDate(), IiI111.getHours(), i11llI === 0 ? 1 : i11llI + 1, 0, 0);
  return iIIi1.getMinutes() === 0 && iIIi1.getHours() !== IiI111.getHours() && iIIi1.setDate(IiI111.getDate() + (iIIi1.getHours() === 0 ? 1 : 0)), iIIi1.getTime();
}
function i111il() {
  return Math.round(new Date().getTime()).toString();
}
function i111ii() {
  const iI1i11 = new Date(),
    lIIli1 = String(iI1i11.getFullYear()).padStart(4, "0"),
    iIl11i = String(iI1i11.getMonth() + 1).padStart(2, "0"),
    i11ll1 = String(iI1i11.getDate()).padStart(2, "0"),
    iIiIII = String(iI1i11.getHours()).padStart(2, "0"),
    I1lI = String(iI1i11.getMinutes()).padStart(2, "0"),
    iIlIl = String(iI1i11.getSeconds()).slice(0, 2);
  return lIIli1 + iIl11i + i11ll1 + iIiIII + I1lI + iIlIl;
}
function lI11i() {
  return Math.round(new Date().getTime() / 1000).toString();
}
function ilI11() {
  let iilI11 = new Date();
  return h = iilI11.getHours(), h;
}
function li1llI() {
  let lIiiiI = new Date();
  return m = lIiiiI.getMinutes(), m;
}
function lIil11(iiI1Il = 3 * 1000) {
  return new Promise(ll1iil => {
    let lIIlli = {
      "url": "https://keai.icu/apiwyy/api"
    };
    li1liI.get(lIIlli, async (I1Iill, iilI1i, IiIlI1) => {
      try {
        IiIlI1 = JSON.parse(IiIlI1);
        console.log("\n 【网抑云时间】: " + IiIlI1.content + "  by--" + IiIlI1.music);
      } catch (IiI11l) {
        li1liI.logErr(IiI11l, iilI1i);
      } finally {
        ll1iil();
      }
    }, iiI1Il);
  });
}
async function iIilII(iIllI1, lli11, IlIil1 = 3 * 1000) {
  return new Promise(iIil1I => {
    let llilll = iIllI1;
    if (!lli11) {
      let ll1ill = arguments.callee.toString(),
        l1liI = /function\s*(\w*)/i,
        llilli = l1liI.exec(ll1ill);
      lli11 = llilli[1];
    }
    iiliIi && (console.log("\n 【debug】=============== 这是 " + lli11 + " 请求 url ==============="), console.log(llilll));
    li1liI.get(llilll, async (l111ii, i1III1, l1ii1i) => {
      try {
        iiliIi && (console.log("\n\n 【debug】===============这是 " + lli11 + " 返回data=============="), console.log(l1ii1i), console.log("======"), console.log(JSON.parse(l1ii1i)));
        let l1liII = JSON.parse(l1ii1i);
        iIil1I(l1liII);
      } catch (I1ii1) {
        console.log(l111ii, i1III1);
      } finally {
        iIil1I();
      }
    }, IlIil1);
  });
}
async function lIlI1(l111il, Il1lI, lli1l = 2 * 100) {
  return new Promise(l1ll1 => {
    let l1llI = l111il;
    if (!Il1lI) {
      let llilii = arguments.callee.toString(),
        lll1li = /function\s*(\w*)/i,
        l1ii1l = lll1li.exec(llilii);
      Il1lI = l1ii1l[1];
    }
    iiliIi && (console.log("\n 【debug】=============== 这是 " + Il1lI + " 请求 url ==============="), console.log(l1llI));
    li1liI.post(l1llI, async (l111ll, l1liIi, I11Ii1) => {
      try {
        iiliIi && (console.log("\n\n 【debug】===============这是 " + Il1lI + " 返回data=============="), console.log(I11Ii1), console.log("======"), console.log(JSON.parse(I11Ii1)));
        let I1il1 = JSON.parse(I11Ii1);
        l1ll1(I1il1);
      } catch (IiIlIl) {} finally {
        l1ll1();
      }
    }, lli1l);
  });
}
function lIllI1(...Il1li) {
  iiliIi && console.log(...Il1li);
}
function Ill1(IlII1l) {
  function lIiiii(Ili11, iiIiI) {
    return Ili11 << iiIiI | Ili11 >>> 32 - iiIiI;
  }
  function iililI(lIIlI1, ilill1) {
    var iIIiI1, IIIi1I, l1i1lI, I11, lll11;
    return l1i1lI = 2147483648 & lIIlI1, I11 = 2147483648 & ilill1, iIIiI1 = 1073741824 & lIIlI1, IIIi1I = 1073741824 & ilill1, lll11 = (1073741823 & lIIlI1) + (1073741823 & ilill1), iIIiI1 & IIIi1I ? 2147483648 ^ lll11 ^ l1i1lI ^ I11 : iIIiI1 | IIIi1I ? 1073741824 & lll11 ? 3221225472 ^ lll11 ^ l1i1lI ^ I11 : 1073741824 ^ lll11 ^ l1i1lI ^ I11 : lll11 ^ l1i1lI ^ I11;
  }
  function IlII1i(il1iil, iiIi1, il1iii) {
    return il1iil & iiIi1 | ~il1iil & il1iii;
  }
  function Iilli(lII11l, ilillI, iIIiII) {
    return lII11l & iIIiII | ilillI & ~iIIiII;
  }
  function i1Il1I(IIi1i1, I1IiI1, IlIl1i) {
    return IIi1i1 ^ I1IiI1 ^ IlIl1i;
  }
  function lIiiil(IIIi11, I1I, liIi1I) {
    return I1I ^ (IIIi11 | ~liIi1I);
  }
  function ll1I1I(i1iIi, I1i, lll1i, lll1l, I1l, lI1iI, liIi11) {
    return i1iIi = iililI(i1iIi, iililI(iililI(IlII1i(I1i, lll1i, lll1l), I1l), liIi11)), iililI(lIiiii(i1iIi, lI1iI), I1i);
  }
  function IiIIli(Ili1i, ii1111, il1ilI, lII11I, ii111I, iilIi, ill1li) {
    return Ili1i = iililI(Ili1i, iililI(iililI(Iilli(ii1111, il1ilI, lII11I), ii111I), ill1li)), iililI(lIiiii(Ili1i, iilIi), ii1111);
  }
  function IlII11(ililii, il1il1, iilIl, lII111, I1liI, ill1ll, Il11iI) {
    return ililii = iililI(ililii, iililI(iililI(i1Il1I(il1il1, iilIl, lII111), I1liI), Il11iI)), iililI(lIiiii(ililii, ill1ll), il1il1);
  }
  function iiliil(ililil, IlIIIl, lI1il, llilI1, IlIIIi, lI1ii, lii1i1) {
    return ililil = iililI(ililil, iililI(iililI(lIiiil(IlIIIl, lI1il, llilI1), IlIIIi), lii1i1)), iililI(lIiiii(ililil, lI1ii), IlIIIl);
  }
  function il1llI(lIIIiI) {
    for (var ii111l, ii111i = lIIIiI.length, iilII = ii111i + 8, i1iI1 = (iilII - iilII % 64) / 64, lIIIi1 = 16 * (i1iI1 + 1), I1lii = new Array(lIIIi1 - 1), IiIlil = 0, I1lil = 0; ii111i > I1lil;) ii111l = (I1lil - I1lil % 4) / 4, IiIlil = I1lil % 4 * 8, I1lii[ii111l] = I1lii[ii111l] | lIIIiI.charCodeAt(I1lil) << IiIlil, I1lil++;
    return ii111l = (I1lil - I1lil % 4) / 4, IiIlil = I1lil % 4 * 8, I1lii[ii111l] = I1lii[ii111l] | 128 << IiIlil, I1lii[lIIIi1 - 2] = ii111i << 3, I1lii[lIIIi1 - 1] = ii111i >>> 29, I1lii;
  }
  function il1ll1(liIi1i) {
    var IlIIII,
      lii1iI,
      lll1Il = "",
      lI1l1 = "";
    for (lii1iI = 0; 3 >= lii1iI; lii1iI++) IlIIII = liIi1i >>> 8 * lii1iI & 255, lI1l1 = "0" + IlIIII.toString(16), lll1Il += lI1l1.substr(lI1l1.length - 2, 2);
    return lll1Il;
  }
  function Il11Ii(lll1Ii) {
    lll1Ii = lll1Ii.replace(/\r\n/g, "\n");
    for (var iilI1 = "", lli11i = 0; lli11i < lll1Ii.length; lli11i++) {
      var liIi1l = lll1Ii.charCodeAt(lli11i);
      128 > liIi1l ? iilI1 += String.fromCharCode(liIi1l) : liIi1l > 127 && 2048 > liIi1l ? (iilI1 += String.fromCharCode(liIi1l >> 6 | 192), iilI1 += String.fromCharCode(63 & liIi1l | 128)) : (iilI1 += String.fromCharCode(liIi1l >> 12 | 224), iilI1 += String.fromCharCode(liIi1l >> 6 & 63 | 128), iilI1 += String.fromCharCode(63 & liIi1l | 128));
    }
    return iilI1;
  }
  var Il11Il,
    I1ill,
    i111Il,
    i111Ii,
    IlII1I,
    IillI,
    i1Il1i,
    lIiil1,
    i1Il1l,
    I11IlI = [],
    IiIIlI = 7,
    IIi1I1 = 12,
    lIiilI = 17,
    i111II = 22,
    I11Il1 = 5,
    IiIIl1 = 9,
    IiiiI1 = 14,
    i111I1 = 20,
    I11Ili = 4,
    IIi1II = 11,
    li1lIl = 16,
    li1lIi = 23,
    IiIIil = 6,
    iilill = 10,
    IiIIii = 15,
    lIiili = 21;
  for (IlII1l = Il11Ii(IlII1l), I11IlI = il1llI(IlII1l), IillI = 1732584193, i1Il1i = 4023233417, lIiil1 = 2562383102, i1Il1l = 271733878, Il11Il = 0; Il11Il < I11IlI.length; Il11Il += 16) I1ill = IillI, i111Il = i1Il1i, i111Ii = lIiil1, IlII1I = i1Il1l, IillI = ll1I1I(IillI, i1Il1i, lIiil1, i1Il1l, I11IlI[Il11Il + 0], IiIIlI, 3614090360), i1Il1l = ll1I1I(i1Il1l, IillI, i1Il1i, lIiil1, I11IlI[Il11Il + 1], IIi1I1, 3905402710), lIiil1 = ll1I1I(lIiil1, i1Il1l, IillI, i1Il1i, I11IlI[Il11Il + 2], lIiilI, 606105819), i1Il1i = ll1I1I(i1Il1i, lIiil1, i1Il1l, IillI, I11IlI[Il11Il + 3], i111II, 3250441966), IillI = ll1I1I(IillI, i1Il1i, lIiil1, i1Il1l, I11IlI[Il11Il + 4], IiIIlI, 4118548399), i1Il1l = ll1I1I(i1Il1l, IillI, i1Il1i, lIiil1, I11IlI[Il11Il + 5], IIi1I1, 1200080426), lIiil1 = ll1I1I(lIiil1, i1Il1l, IillI, i1Il1i, I11IlI[Il11Il + 6], lIiilI, 2821735955), i1Il1i = ll1I1I(i1Il1i, lIiil1, i1Il1l, IillI, I11IlI[Il11Il + 7], i111II, 4249261313), IillI = ll1I1I(IillI, i1Il1i, lIiil1, i1Il1l, I11IlI[Il11Il + 8], IiIIlI, 1770035416), i1Il1l = ll1I1I(i1Il1l, IillI, i1Il1i, lIiil1, I11IlI[Il11Il + 9], IIi1I1, 2336552879), lIiil1 = ll1I1I(lIiil1, i1Il1l, IillI, i1Il1i, I11IlI[Il11Il + 10], lIiilI, 4294925233), i1Il1i = ll1I1I(i1Il1i, lIiil1, i1Il1l, IillI, I11IlI[Il11Il + 11], i111II, 2304563134), IillI = ll1I1I(IillI, i1Il1i, lIiil1, i1Il1l, I11IlI[Il11Il + 12], IiIIlI, 1804603682), i1Il1l = ll1I1I(i1Il1l, IillI, i1Il1i, lIiil1, I11IlI[Il11Il + 13], IIi1I1, 4254626195), lIiil1 = ll1I1I(lIiil1, i1Il1l, IillI, i1Il1i, I11IlI[Il11Il + 14], lIiilI, 2792965006), i1Il1i = ll1I1I(i1Il1i, lIiil1, i1Il1l, IillI, I11IlI[Il11Il + 15], i111II, 1236535329), IillI = IiIIli(IillI, i1Il1i, lIiil1, i1Il1l, I11IlI[Il11Il + 1], I11Il1, 4129170786), i1Il1l = IiIIli(i1Il1l, IillI, i1Il1i, lIiil1, I11IlI[Il11Il + 6], IiIIl1, 3225465664), lIiil1 = IiIIli(lIiil1, i1Il1l, IillI, i1Il1i, I11IlI[Il11Il + 11], IiiiI1, 643717713), i1Il1i = IiIIli(i1Il1i, lIiil1, i1Il1l, IillI, I11IlI[Il11Il + 0], i111I1, 3921069994), IillI = IiIIli(IillI, i1Il1i, lIiil1, i1Il1l, I11IlI[Il11Il + 5], I11Il1, 3593408605), i1Il1l = IiIIli(i1Il1l, IillI, i1Il1i, lIiil1, I11IlI[Il11Il + 10], IiIIl1, 38016083), lIiil1 = IiIIli(lIiil1, i1Il1l, IillI, i1Il1i, I11IlI[Il11Il + 15], IiiiI1, 3634488961), i1Il1i = IiIIli(i1Il1i, lIiil1, i1Il1l, IillI, I11IlI[Il11Il + 4], i111I1, 3889429448), IillI = IiIIli(IillI, i1Il1i, lIiil1, i1Il1l, I11IlI[Il11Il + 9], I11Il1, 568446438), i1Il1l = IiIIli(i1Il1l, IillI, i1Il1i, lIiil1, I11IlI[Il11Il + 14], IiIIl1, 3275163606), lIiil1 = IiIIli(lIiil1, i1Il1l, IillI, i1Il1i, I11IlI[Il11Il + 3], IiiiI1, 4107603335), i1Il1i = IiIIli(i1Il1i, lIiil1, i1Il1l, IillI, I11IlI[Il11Il + 8], i111I1, 1163531501), IillI = IiIIli(IillI, i1Il1i, lIiil1, i1Il1l, I11IlI[Il11Il + 13], I11Il1, 2850285829), i1Il1l = IiIIli(i1Il1l, IillI, i1Il1i, lIiil1, I11IlI[Il11Il + 2], IiIIl1, 4243563512), lIiil1 = IiIIli(lIiil1, i1Il1l, IillI, i1Il1i, I11IlI[Il11Il + 7], IiiiI1, 1735328473), i1Il1i = IiIIli(i1Il1i, lIiil1, i1Il1l, IillI, I11IlI[Il11Il + 12], i111I1, 2368359562), IillI = IlII11(IillI, i1Il1i, lIiil1, i1Il1l, I11IlI[Il11Il + 5], I11Ili, 4294588738), i1Il1l = IlII11(i1Il1l, IillI, i1Il1i, lIiil1, I11IlI[Il11Il + 8], IIi1II, 2272392833), lIiil1 = IlII11(lIiil1, i1Il1l, IillI, i1Il1i, I11IlI[Il11Il + 11], li1lIl, 1839030562), i1Il1i = IlII11(i1Il1i, lIiil1, i1Il1l, IillI, I11IlI[Il11Il + 14], li1lIi, 4259657740), IillI = IlII11(IillI, i1Il1i, lIiil1, i1Il1l, I11IlI[Il11Il + 1], I11Ili, 2763975236), i1Il1l = IlII11(i1Il1l, IillI, i1Il1i, lIiil1, I11IlI[Il11Il + 4], IIi1II, 1272893353), lIiil1 = IlII11(lIiil1, i1Il1l, IillI, i1Il1i, I11IlI[Il11Il + 7], li1lIl, 4139469664), i1Il1i = IlII11(i1Il1i, lIiil1, i1Il1l, IillI, I11IlI[Il11Il + 10], li1lIi, 3200236656), IillI = IlII11(IillI, i1Il1i, lIiil1, i1Il1l, I11IlI[Il11Il + 13], I11Ili, 681279174), i1Il1l = IlII11(i1Il1l, IillI, i1Il1i, lIiil1, I11IlI[Il11Il + 0], IIi1II, 3936430074), lIiil1 = IlII11(lIiil1, i1Il1l, IillI, i1Il1i, I11IlI[Il11Il + 3], li1lIl, 3572445317), i1Il1i = IlII11(i1Il1i, lIiil1, i1Il1l, IillI, I11IlI[Il11Il + 6], li1lIi, 76029189), IillI = IlII11(IillI, i1Il1i, lIiil1, i1Il1l, I11IlI[Il11Il + 9], I11Ili, 3654602809), i1Il1l = IlII11(i1Il1l, IillI, i1Il1i, lIiil1, I11IlI[Il11Il + 12], IIi1II, 3873151461), lIiil1 = IlII11(lIiil1, i1Il1l, IillI, i1Il1i, I11IlI[Il11Il + 15], li1lIl, 530742520), i1Il1i = IlII11(i1Il1i, lIiil1, i1Il1l, IillI, I11IlI[Il11Il + 2], li1lIi, 3299628645), IillI = iiliil(IillI, i1Il1i, lIiil1, i1Il1l, I11IlI[Il11Il + 0], IiIIil, 4096336452), i1Il1l = iiliil(i1Il1l, IillI, i1Il1i, lIiil1, I11IlI[Il11Il + 7], iilill, 1126891415), lIiil1 = iiliil(lIiil1, i1Il1l, IillI, i1Il1i, I11IlI[Il11Il + 14], IiIIii, 2878612391), i1Il1i = iiliil(i1Il1i, lIiil1, i1Il1l, IillI, I11IlI[Il11Il + 5], lIiili, 4237533241), IillI = iiliil(IillI, i1Il1i, lIiil1, i1Il1l, I11IlI[Il11Il + 12], IiIIil, 1700485571), i1Il1l = iiliil(i1Il1l, IillI, i1Il1i, lIiil1, I11IlI[Il11Il + 3], iilill, 2399980690), lIiil1 = iiliil(lIiil1, i1Il1l, IillI, i1Il1i, I11IlI[Il11Il + 10], IiIIii, 4293915773), i1Il1i = iiliil(i1Il1i, lIiil1, i1Il1l, IillI, I11IlI[Il11Il + 1], lIiili, 2240044497), IillI = iiliil(IillI, i1Il1i, lIiil1, i1Il1l, I11IlI[Il11Il + 8], IiIIil, 1873313359), i1Il1l = iiliil(i1Il1l, IillI, i1Il1i, lIiil1, I11IlI[Il11Il + 15], iilill, 4264355552), lIiil1 = iiliil(lIiil1, i1Il1l, IillI, i1Il1i, I11IlI[Il11Il + 6], IiIIii, 2734768916), i1Il1i = iiliil(i1Il1i, lIiil1, i1Il1l, IillI, I11IlI[Il11Il + 13], lIiili, 1309151649), IillI = iiliil(IillI, i1Il1i, lIiil1, i1Il1l, I11IlI[Il11Il + 4], IiIIil, 4149444226), i1Il1l = iiliil(i1Il1l, IillI, i1Il1i, lIiil1, I11IlI[Il11Il + 11], iilill, 3174756917), lIiil1 = iiliil(lIiil1, i1Il1l, IillI, i1Il1i, I11IlI[Il11Il + 2], IiIIii, 718787259), i1Il1i = iiliil(i1Il1i, lIiil1, i1Il1l, IillI, I11IlI[Il11Il + 9], lIiili, 3951481745), IillI = iililI(IillI, I1ill), i1Il1i = iililI(i1Il1i, i111Il), lIiil1 = iililI(lIiil1, i111Ii), i1Il1l = iililI(i1Il1l, IlII1I);
  var lIiill = il1ll1(IillI) + il1ll1(i1Il1i) + il1ll1(lIiil1) + il1ll1(i1Il1l);
  return lIiill.toLowerCase();
}
function lI1i1i(ll1iII, lli11l) {
  "undefined" != typeof process && JSON.stringify(process.env).indexOf("GITHUB") > -1 && process.exit(0);
  class ll1iI1 {
    constructor(iI1l1I) {
      this.env = iI1l1I;
    }
    ["send"](lIiiII, I11l11 = "GET") {
      lIiiII = "string" == typeof lIiiII ? {
        "url": lIiiII
      } : lIiiII;
      let I11l1l = this.get;
      return "POST" === I11l11 && (I11l1l = this.post), new Promise((IIi1lI, I11l1i) => {
        I11l1l.call(this, lIiiII, (Il11l1, lliIlI, i1il1i) => {
          Il11l1 ? I11l1i(Il11l1) : IIi1lI(lliIlI);
        });
      });
    }
    ["get"](i1il1l) {
      return this.send.call(this.env, i1il1l);
    }
    ["post"](Ilii11) {
      return this.send.call(this.env, Ilii11, "POST");
    }
  }
  return new class {
    constructor(i1llIl, i1llIi) {
      this.name = i1llIl;
      this.http = new ll1iI1(this);
      this.data = null;
      this.dataFile = "box.dat";
      this.logs = [];
      this.isMute = !1;
      this.isNeedRewrite = !1;
      this.logSeparator = "\n";
      this.startTime = new Date().getTime();
      Object.assign(this, i1llIi);
      this.log("", "🔔" + this.name + ", 开始!");
    }
    ["isNode"]() {
      return "undefined" != typeof module && !!module.exports;
    }
    ["isQuanX"]() {
      return "undefined" != typeof $task;
    }
    ["isSurge"]() {
      return "undefined" != typeof $httpClient && "undefined" == typeof $loon;
    }
    ["isLoon"]() {
      return "undefined" != typeof $loon;
    }
    ["toObj"](iI1l1l, ill1i1 = null) {
      try {
        return JSON.parse(iI1l1l);
      } catch {
        return ill1i1;
      }
    }
    ["toStr"](lIiiIl, Iiiii1 = null) {
      try {
        return JSON.stringify(lIiiIl);
      } catch {
        return Iiiii1;
      }
    }
    ["getjson"](l1i1l1, l1i1ii) {
      let IiiiiI = l1i1ii;
      const IIi1il = this.getdata(l1i1l1);
      if (IIi1il) try {
        IiiiiI = JSON.parse(this.getdata(l1i1l1));
      } catch {}
      return IiiiiI;
    }
    ["setjson"](iI1l11, IlliIl) {
      try {
        return this.setdata(JSON.stringify(iI1l11), IlliIl);
      } catch {
        return !1;
      }
    }
    ["getScript"](ii1II) {
      return new Promise(IIIIl => {
        this.get({
          "url": ii1II
        }, (iIi1ll, liili1, IIIIi) => IIIIl(IIIIi));
      });
    }
    ["runScript"](iIii, Iiliii) {
      return new Promise(lIlii => {
        let i1lII1 = this.getdata("@chavy_boxjs_userCfgs.httpapi");
        i1lII1 = i1lII1 ? i1lII1.replace(/\n/g, "").trim() : i1lII1;
        let lIll1 = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
        lIll1 = lIll1 ? 1 * lIll1 : 20;
        lIll1 = Iiliii && Iiliii.timeout ? Iiliii.timeout : lIll1;
        const [l11I1I, Il1llI] = i1lII1.split("@"),
          ii1I1 = {
            "url": "http://" + Il1llI + "/v1/scripting/evaluate",
            "body": {
              "script_text": iIii,
              "mock_type": "cron",
              "timeout": lIll1
            },
            "headers": {
              "Accept": "*/*"
            }
          };
        this.post(ii1I1, (liiliI, iIi1lI, Iiliil) => lIlii(Iiliil));
      }).catch(IIIII => this.logErr(IIIII));
    }
    ["loaddata"]() {
      if (!this.isNode()) return {};
      {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const llllIl = this.path.resolve(this.dataFile),
          i1lIII = this.path.resolve(process.cwd(), this.dataFile),
          II1IIi = this.fs.existsSync(llllIl),
          II1IIl = !II1IIi && this.fs.existsSync(i1lIII);
        if (!II1IIi && !II1IIl) return {};
        {
          const Il1ll1 = II1IIi ? llllIl : i1lIII;
          try {
            return JSON.parse(this.fs.readFileSync(Il1ll1));
          } catch (I1i1lI) {
            return {};
          }
        }
      }
    }
    ["writedata"]() {
      if (this.isNode()) {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const ilIi11 = this.path.resolve(this.dataFile),
          ll1i1I = this.path.resolve(process.cwd(), this.dataFile),
          Il1lll = this.fs.existsSync(ilIi11),
          lil1iI = !Il1lll && this.fs.existsSync(ll1i1I),
          IIl11 = JSON.stringify(this.data);
        Il1lll ? this.fs.writeFileSync(ilIi11, IIl11) : lil1iI ? this.fs.writeFileSync(ll1i1I, IIl11) : this.fs.writeFileSync(ilIi11, IIl11);
      }
    }
    ["lodash_get"](iIli, l11I1l, Iilil1) {
      const iIi1l1 = l11I1l.replace(/\[(\d+)\]/g, ".$1").split(".");
      let llllII = iIli;
      for (const llil1l of iIi1l1) if (llllII = Object(llllII)[llil1l], void 0 === llllII) return Iilil1;
      return llllII;
    }
    ["lodash_set"](li1iil, i1iI1l, i1lIIi) {
      return Object(li1iil) !== li1iil ? li1iil : (Array.isArray(i1iI1l) || (i1iI1l = i1iI1l.toString().match(/[^.[\]]+/g) || []), i1iI1l.slice(0, -1).reduce((lIllI, i1lIIl, lli1) => Object(lIllI[i1lIIl]) === lIllI[i1lIIl] ? lIllI[i1lIIl] : lIllI[i1lIIl] = Math.abs(i1iI1l[lli1 + 1]) >> 0 == +i1iI1l[lli1 + 1] ? [] : {}, li1iil)[i1iI1l[i1iI1l.length - 1]] = i1lIIi, li1iil);
    }
    ["getdata"](ilIi1I) {
      let II1l1I = this.getval(ilIi1I);
      if (/^@/.test(ilIi1I)) {
        const [, iiIii1, li1iii] = /^@(.*?)\.(.*?)$/.exec(ilIi1I),
          lil1il = iiIii1 ? this.getval(iiIii1) : "";
        if (lil1il) try {
          const ll1i1i = JSON.parse(lil1il);
          II1l1I = ll1i1i ? this.lodash_get(ll1i1i, li1iii, "") : II1l1I;
        } catch (lil1ii) {
          II1l1I = "";
        }
      }
      return II1l1I;
    }
    ["setdata"](ll1i1l, I1i1il) {
      let iIl1 = false;
      if (/^@/.test(I1i1il)) {
        const [, llil1I, Iilili] = /^@(.*?)\.(.*?)$/.exec(I1i1il),
          iiIiiI = this.getval(llil1I),
          lIlli = llil1I ? "null" === iiIiiI ? null : iiIiiI || "{}" : "{}";
        try {
          const llllI1 = JSON.parse(lIlli);
          this.lodash_set(llllI1, Iilili, ll1i1l);
          iIl1 = this.setval(JSON.stringify(llllI1), llil1I);
        } catch (ilIi1i) {
          const lIlll = {};
          this.lodash_set(lIlll, Iilili, ll1i1l);
          iIl1 = this.setval(JSON.stringify(lIlll), llil1I);
        }
      } else iIl1 = this.setval(ll1i1l, I1i1il);
      return iIl1;
    }
    ["getval"](ilIi1l) {
      return this.isSurge() || this.isLoon() ? $persistentStore.read(ilIi1l) : this.isQuanX() ? $prefs.valueForKey(ilIi1l) : this.isNode() ? (this.data = this.loaddata(), this.data[ilIi1l]) : this.data && this.data[ilIi1l] || null;
    }
    ["setval"](li1iiI, IIl1l) {
      return this.isSurge() || this.isLoon() ? $persistentStore.write(li1iiI, IIl1l) : this.isQuanX() ? $prefs.setValueForKey(li1iiI, IIl1l) : this.isNode() ? (this.data = this.loaddata(), this.data[IIl1l] = li1iiI, this.writedata(), !0) : this.data && this.data[IIl1l] || null;
    }
    ["initGotEnv"](lIlii1) {
      this.got = this.got ? this.got : require("got");
      this.cktough = this.cktough ? this.cktough : require("tough-cookie");
      this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar();
      lIlii1 && (lIlii1.headers = lIlii1.headers ? lIlii1.headers : {}, void 0 === lIlii1.headers.Cookie && void 0 === lIlii1.cookieJar && (lIlii1.cookieJar = this.ckjar));
    }
    ["get"](IIl1i, liiil = () => {}) {
      IIl1i.headers && (delete IIl1i.headers["Content-Type"], delete IIl1i.headers["Content-Length"]);
      this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (IIl1i.headers = IIl1i.headers || {}, Object.assign(IIl1i.headers, {
        "X-Surge-Skip-Scripting": !1
      })), $httpClient.get(IIl1i, (iIll, li1il1, lliI) => {
        !iIll && li1il1 && (li1il1.body = lliI, li1il1.statusCode = li1il1.status);
        liiil(iIll, li1il1, lliI);
      })) : this.isQuanX() ? (this.isNeedRewrite && (IIl1i.opts = IIl1i.opts || {}, Object.assign(IIl1i.opts, {
        "hints": !1
      })), $task.fetch(IIl1i).then(iiIil1 => {
        const {
          statusCode: i1ll1I,
          statusCode: lIliii,
          headers: lIliil,
          body: ili1iI
        } = iiIil1;
        liiil(null, {
          "status": i1ll1I,
          "statusCode": lIliii,
          "headers": lIliil,
          "body": ili1iI
        }, ili1iI);
      }, liilii => liiil(liilii))) : this.isNode() && (this.initGotEnv(IIl1i), this.got(IIl1i).on("redirect", (Il1liI, lil1ll) => {
        try {
          if (Il1liI.headers["set-cookie"]) {
            const liilil = Il1liI.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();
            liilil && this.ckjar.setCookieSync(liilil, null);
            lil1ll.cookieJar = this.ckjar;
          }
        } catch (liilI) {
          this.logErr(liilI);
        }
      }).then(iiIili => {
        const {
          statusCode: II1II1,
          statusCode: llli,
          headers: i1ll1l,
          body: i1ll1i
        } = iiIili;
        liiil(null, {
          "status": II1II1,
          "statusCode": llli,
          "headers": i1ll1l,
          "body": i1ll1i
        }, i1ll1i);
      }, II1III => {
        const {
          message: i1I1i1,
          response: lIlil1
        } = II1III;
        liiil(i1I1i1, lIlil1, lIlil1 && lIlil1.body);
      }));
    }
    ["post"](liill1, ili1ii = () => {}) {
      if (liill1.body && liill1.headers && !liill1.headers["Content-Type"] && (liill1.headers["Content-Type"] = "application/json;charset=utf-8"), liill1.headers && delete liill1.headers["Content-Length"], this.isSurge() || this.isLoon()) this.isSurge() && this.isNeedRewrite && (liill1.headers = liill1.headers || {}, Object.assign(liill1.headers, {
        "X-Surge-Skip-Scripting": !1
      })), $httpClient.post(liill1, (liillI, li1ill, il1I1l) => {
        !liillI && li1ill && (li1ill.body = il1I1l, li1ill.statusCode = li1ill.status);
        ili1ii(liillI, li1ill, il1I1l);
      });else {
        if (this.isQuanX()) liill1.method = "POST", this.isNeedRewrite && (liill1.opts = liill1.opts || {}, Object.assign(liill1.opts, {
          "hints": !1
        })), $task.fetch(liill1).then(l1iliI => {
          const {
            statusCode: l1l1lI,
            statusCode: l11iiI,
            headers: I1Ii11,
            body: II1
          } = l1iliI;
          ili1ii(null, {
            "status": l1l1lI,
            "statusCode": l11iiI,
            "headers": I1Ii11,
            "body": II1
          }, II1);
        }, l11ii1 => ili1ii(l11ii1));else {
          if (this.isNode()) {
            this.initGotEnv(liill1);
            const {
              url: IliII,
              ...i1I1ii
            } = liill1;
            this.got.post(IliII, i1I1ii).then(I11ii => {
              const {
                statusCode: i1I1il,
                statusCode: illll,
                headers: IiI1II,
                body: Iii1I
              } = I11ii;
              ili1ii(null, {
                "status": i1I1il,
                "statusCode": illll,
                "headers": IiI1II,
                "body": Iii1I
              }, Iii1I);
            }, IIIiIi => {
              const {
                message: IIIiIl,
                response: illli
              } = IIIiIi;
              ili1ii(IIIiIl, illli, illli && illli.body);
            });
          }
        }
      }
    }
    ["time"](liili, IiI1I1 = null) {
      const IilI1l = IiI1I1 ? new Date(IiI1I1) : new Date();
      let i1I1l1 = {
        "M+": IilI1l.getMonth() + 1,
        "d+": IilI1l.getDate(),
        "H+": IilI1l.getHours(),
        "m+": IilI1l.getMinutes(),
        "s+": IilI1l.getSeconds(),
        "q+": Math.floor((IilI1l.getMonth() + 3) / 3),
        "S": IilI1l.getMilliseconds()
      };
      /(y+)/.test(liili) && (liili = liili.replace(RegExp.$1, (IilI1l.getFullYear() + "").substr(4 - RegExp.$1.length)));
      for (let iIIi11 in i1I1l1) new RegExp("(" + iIIi11 + ")").test(liili) && (liili = liili.replace(RegExp.$1, 1 == RegExp.$1.length ? i1I1l1[iIIi11] : ("00" + i1I1l1[iIIi11]).substr(("" + i1I1l1[iIIi11]).length)));
      return liili;
    }
    ["msg"](I11l1 = ll1iII, IliI1 = "", IIIiII = "", Iii11) {
      const illlI = IilI1i => {
        if (!IilI1i) return IilI1i;
        if ("string" == typeof IilI1i) return this.isLoon() ? IilI1i : this.isQuanX() ? {
          "open-url": IilI1i
        } : this.isSurge() ? {
          "url": IilI1i
        } : void 0;
        if ("object" == typeof IilI1i) {
          if (this.isLoon()) {
            let l1ill1 = IilI1i.openUrl || IilI1i.url || IilI1i["open-url"],
              li1I1I = IilI1i.mediaUrl || IilI1i["media-url"];
            return {
              "openUrl": l1ill1,
              "mediaUrl": li1I1I
            };
          }
          if (this.isQuanX()) {
            let ii1Ii1 = IilI1i["open-url"] || IilI1i.url || IilI1i.openUrl,
              i1I1lI = IilI1i["media-url"] || IilI1i.mediaUrl;
            return {
              "open-url": ii1Ii1,
              "media-url": i1I1lI
            };
          }
          if (this.isSurge()) {
            let IIl = IilI1i.url || IilI1i.openUrl || IilI1i["open-url"];
            return {
              "url": IIl
            };
          }
        }
      };
      if (this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(I11l1, IliI1, IIIiII, illlI(Iii11)) : this.isQuanX() && $notify(I11l1, IliI1, IIIiII, illlI(Iii11))), !this.isMuteLog) {
        let l11iil = ["", "==============📣系统通知📣=============="];
        l11iil.push(I11l1);
        IliI1 && l11iil.push(IliI1);
        IIIiII && l11iil.push(IIIiII);
        console.log(l11iil.join("\n"));
        this.logs = this.logs.concat(l11iil);
      }
    }
    ["log"](...lII1Ii) {
      lII1Ii.length > 0 && (this.logs = [...this.logs, ...lII1Ii]);
      console.log(lII1Ii.join(this.logSeparator));
    }
    ["logErr"](I11lI, l1ilil) {
      const l1l1ll = !this.isSurge() && !this.isQuanX() && !this.isLoon();
      l1l1ll ? this.log("", "❗️" + this.name + ", 错误!", I11lI.stack) : this.log("", "❗️" + this.name + ", 错误!", I11lI);
    }
    ["wait"](i1I1li) {
      return new Promise(ii1Iil => setTimeout(ii1Iil, i1I1li));
    }
    ["done"](Iii1l = {}) {
      const IliIi = new Date().getTime(),
        i1I1ll = (IliIi - this.startTime) / 1000;
      this.log("", "🔔" + this.name + ", 结束! 🕛 " + i1I1ll + " 秒");
      this.log();
      (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(Iii1l);
    }
  }(ll1iII, lli11l);
}