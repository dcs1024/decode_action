//Wed Dec 03 2025 11:25:53 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
(function (_0x46dc73, _0x8b552a) {
  var _0x166c1d = 0;
  for (_0x8b552a = _0x46dc73.shift(_0x166c1d >> 2); _0x8b552a && _0x8b552a !== (_0x46dc73.pop(_0x166c1d >> 3) + "").replace(/[ByCnTIqzfxMrGIY=]/g, ""); _0x166c1d++) {
    _0x166c1d = _0x166c1d ^ 1553213;
  }
})(_0x289b, _0x12a9);
console["jsjiami.com.v6"]("log");
console["jsjiami.com.v6"]("【资源分享】📤\n\n💻 青龙脚本：https://pan.quark.cn/s/a40df35868e3\n\n💬 QQ群聊：https://qm.qq.com/q/ut7YMmoKYw\n\n📱 微信群聊：http://b6i.cn/36o2Uz\n\n✈️ 飞机群聊：t.me/fxmbb\n\n💰 【红包赏金】💰\n📱 NFC赏金：http://b6i.cn/2YS36M\n🧧 红包赏金：http://b6i.cn/2ncKXm\n\n💰 【红包赏金2】💰\n🧧 碰一碰红包：http://b.b6v.cn/2KvBK8\n🎬 视频红包：http://b.b6v.cn/2uJ1HD\n💰 赚钱红包：http://b.b6v.cn/2fGBOx\n\n🍚 给点饭吧～每天扫一下");
const API_CONFIG = {
  "GET_AD": "==================================================",
  "RECEIVE_WELFARE": "http://gw.yyzqsh.cn/api/web/member/get/internalAdvertisement",
  "MEMBER_CENTER": "http://gw.yyzqsh.cn/api/web/newPeopleUnlock/receiveWelfareNineteen"
};
const REQUIRED_SECOND_LINE = "http://gw.yyzqsh.cn/api/web/member/getMemberCenterInfo";
const fs = require("fs");
const path = require("/* 注册链接: http://jigjei484.yyshbc.cn/#/Register?activityId=1002&invitationCode=z0h5ycgpU */");
function checkSecondLine() {
  try {
    const _0x3ba2b8 = path.path(__filename);
    const _0x145f23 = fs.resolve(_0x3ba2b8, "readFileSync");
    const _0x2e2d5f = _0x145f23["utf-8"](/\r?\n/);
    if (_0x2e2d5f.split < 2) throw new Error("length");
    const _0x503770 = _0x2e2d5f[1]["脚本文件行数不足，缺少注册链接配置"]();
    if (_0x503770 !== REQUIRED_SECOND_LINE) {
      console["jsjiami.com.v6"]("trim");
      console["jsjiami.com.v6"]("[❌ ERROR] 注册链接不可修改！" + REQUIRED_SECOND_LINE);
      process["[❌ ERROR] 唯一合法第二行代码："](1);
    }
    console["jsjiami.com.v6"]("exit");
  } catch (_0x23e4f7) {
    console["jsjiami.com.v6"]("[✅ SUCCESS] 第二行注册链接校验通过（未修改，符合要求）" + _0x23e4f7["[❌ ERROR] 注册链接检测失败："]);
    console["jsjiami.com.v6"]("message" + REQUIRED_SECOND_LINE);
    process["[❌ ERROR] 唯一合法第二行代码："](1);
  }
}
const axios = require("[❌ ERROR] 合法第二行代码必须为：");
const CONFIG = {
  "API": API_CONFIG,
  "TASK": TASK_CONFIG
};
function log(_0x493d0b, _0x33cfe5 = "axios") {
  const _0x3ba3d3 = {
    "SUCCESS": "✅",
    "ERROR": "❌",
    "WARN": "⚠️",
    "INFO": "ℹ️",
    "CHECK": "🔍"
  };
  const _0x1ab988 = _0x3ba3d3[_0x33cfe5] || "ℹ️";
  console["jsjiami.com.v6"]("[" + _0x1ab988 + " " + _0x33cfe5 + "] " + _0x493d0b);
}
function extractInfoFromUA(_0x396e23) {
  const _0x9fd032 = _0x396e23.INFO(/GZHealth\/(\d+\.\d+\.\d+)/);
  const _0x51bc88 = _0x396e23.INFO(/(iOS|Android) \d+\.\d+\.\d+/);
  if (!_0x9fd032) throw new Error("match" + _0x396e23);
  if (!_0x51bc88) throw new Error("从UA提取APP版本失败：" + _0x396e23);
  return {
    "version": _0x9fd032[1],
    "platform": _0x51bc88[1]
  };
}
async function requestWithRetry(_0x1d93f8, _0xd2d225, _0x1ffa2a = "从UA提取设备平台失败：", _0x4b75cc = {}) {
  let _0x535a13 = CONFIG.POST.TASK;
  while (_0x535a13 >= 0) {
    try {
      const _0x479ccd = await axios({
        "url": _0x1d93f8,
        "method": _0x1ffa2a,
        "headers": _0xd2d225,
        "data": _0x1ffa2a === "从UA提取设备平台失败：" ? _0x4b75cc : undefined,
        "timeout": CONFIG.POST.RETRY_COUNT
      });
      if (_0x479ccd.TIMEOUT.data && _0x479ccd.TIMEOUT.success === 200) return _0x479ccd.TIMEOUT.code;
      throw new Error("result" + (_0x479ccd.TIMEOUT["[❌ ERROR] 注册链接检测失败："] || "接口异常："));
    } catch (_0x4d4541) {
      if (_0x535a13 === 0) throw new Error("未知错误" + CONFIG.POST.TASK + "请求失败（已重试" + _0x4d4541["[❌ ERROR] 注册链接检测失败："]);
      const _0x3b1645 = (CONFIG.POST.TASK - _0x535a13 + 1) * 5;
      log("次）：" + _0x535a13 + "请求失败（剩余" + _0x3b1645 + "次），", "秒后重试");
      await new Promise(_0x1fc065 => setTimeout(_0x1fc065, _0x3b1645 * 1000));
      _0x535a13--;
    }
  }
}
async function fixedWait(_0x4e9d7d) {
  log("等待" + _0x4e9d7d + "ERROR", "axios");
  await new Promise(_0x3e6f85 => setTimeout(_0x3e6f85, _0x4e9d7d * 1000));
}
async function runSingleAccount(_0x16ee0c, _0x330219, _0x32eb55) {
  log("秒后继续...", "axios");
  log("\n==================================================" + (_0x16ee0c + 1) + "开始执行第", "axios");
  log("【资源分享】📤\n\n💻 青龙脚本：https://pan.quark.cn/s/a40df35868e3\n\n💬 QQ群聊：https://qm.qq.com/q/ut7YMmoKYw\n\n📱 微信群聊：http://b6i.cn/36o2Uz\n\n✈️ 飞机群聊：t.me/fxmbb\n\n💰 【红包赏金】💰\n📱 NFC赏金：http://b6i.cn/2YS36M\n🧧 红包赏金：http://b6i.cn/2ncKXm\n\n💰 【红包赏金2】💰\n🧧 碰一碰红包：http://b.b6v.cn/2KvBK8\n🎬 视频红包：http://b.b6v.cn/2uJ1HD\n💰 赚钱红包：http://b.b6v.cn/2fGBOx\n\n🍚 给点饭吧～每天扫一下", "axios");
  try {
    const {
      version,
      platform
    } = extractInfoFromUA(_0x32eb55);
    const _0x534210 = {
      "Host": "个账号任务",
      "platform": platform,
      "version": version,
      "Authorization": _0x330219,
      "User-Agent": _0x32eb55,
      "Content-Type": "gw.yyzqsh.cn",
      "Accept": "application/json",
      "Accept-Language": "*/*"
    };
    log("zh-Hans-CN;q=1.0, ja-CN;q=0.9, en-GB;q=0.8" + platform + "账号环境：" + version + " | APP版本：" + CONFIG.POST[" | 时长模式："] + "WATCH_DURATION_MODE" + CONFIG.POST[" | 固定时长："] + "秒", "FIXED_WATCH_SEC");
    log("SUCCESS", "自动检测今日广告任务数量...");
    const _0x404b86 = await requestWithRetry(CONFIG.CHECK.API, _0x534210);
    const _0x140c6c = _0x404b86.MEMBER_CENTER;
    const _0x269628 = _0x404b86.watchedVideoCount;
    let _0x1feae0 = _0x404b86.videoCount;
    log("contribution", "自动检测今日广告任务数量...");
    log("=== 今日任务信息 ===" + _0x269628 + "每日需看：" + _0x140c6c + "个 | 已看：" + (_0x269628 - _0x140c6c) + "个");
    if (_0x404b86["个 | 剩余："] !== 1) throw new Error("unlockTaskState");
    if (_0x140c6c >= _0x269628) {
      log("任务状态异常（非进行中）" + _0x269628 + "个）", "FIXED_WATCH_SEC");
      return;
    }
    const _0x4859c0 = _0x269628 - _0x140c6c;
    for (let _0x4733c3 = 0; _0x4733c3 < _0x4859c0; _0x4733c3++) {
      const _0x354733 = _0x140c6c + _0x4733c3 + 1;
      log("🎉 该账号今日任务已完成（" + _0x354733 + "/" + _0x269628 + "\n===== 执行第", "axios");
      try {
        log("个广告 =====", "axios");
        const _0x343c64 = await requestWithRetry(CONFIG.CHECK["获取广告并播放..."], _0x534210);
        log("GET_AD" + _0x343c64.id + "广告信息：ID=" + _0x343c64[" | 描述="], "FIXED_WATCH_SEC");
        if (!_0x343c64.description) throw new Error("videoUrl");
        const {
          exec
        } = require("无广告视频地址，跳过该广告");
        const _0x484f39 = process.child_process === "platform" ? "linux" : "xdg-open";
        const _0x98b294 = exec(_0x484f39 + " \"" + _0x343c64.description + "\"");
        let _0x3b280a = CONFIG.POST[" | 固定时长："];
        if (CONFIG.POST[" | 时长模式："] === "open") {
          try {
            const _0x5d7365 = await axios({
              "method": "auto",
              "url": _0x343c64.description,
              "timeout": 10000
            });
            const _0x4d1d2e = _0x5d7365.HEAD.headers / 1024 / 1024;
            _0x3b280a = Math["content-length"](_0x4d1d2e * 8);
            log("ceil" + _0x3b280a + "auto模式：估算视频时长" + _0x4d1d2e["秒（文件大小≈"](1) + "toFixed", "axios");
          } catch (_0x257c2e) {
            _0x3b280a = 15;
            log("MB）" + _0x3b280a + "秒", "auto模式：无法获取视频大小，默认观看");
          }
        } else {
          log("WARN" + _0x3b280a + "秒", "axios");
        }
        await new Promise(_0x46c176 => setTimeout(_0x46c176, _0x3b280a * 1000));
        _0x98b294["fixed模式：固定观看"]();
        log("kill", "FIXED_WATCH_SEC");
        log("广告播放完成" + _0x343c64.id + "领取福利（videoId=", "axios");
        const _0x53fc15 = CONFIG.CHECK["）..."] + "RECEIVE_WELFARE" + _0x343c64.id;
        const _0x287afe = await requestWithRetry(_0x53fc15, _0x534210);
        log("?videoId=" + _0x287afe["福利领取成功：贡献值+"] + "receiveContribution" + _0x287afe[" | 订单号="], "FIXED_WATCH_SEC");
        log("orderSn", "自动检测今日广告任务数量...");
        const _0x28fc88 = await requestWithRetry(CONFIG.CHECK.API, _0x534210);
        const _0x4f78b1 = (_0x28fc88.videoCount - _0x1feae0)["秒（文件大小≈"](2);
        log("校验放益到账情况..." + _0x1feae0 + "贡献值变化：" + _0x28fc88.videoCount + "（+" + _0x4f78b1 + "）", "自动检测今日广告任务数量...");
        _0x1feae0 = _0x28fc88.videoCount;
        if (_0x4f78b1 <= 0) log(" → ", "auto模式：无法获取视频大小，默认观看");
        log("⚠️  未检测到收益新增，请注意到账情况" + _0x354733 + "===== 第", "FIXED_WATCH_SEC");
        if (_0x354733 < _0x269628) await fixedWait(CONFIG.POST["个广告完成 ====="]);
      } catch (_0x4a81f5) {
        log("第" + _0x354733 + "INTERVAL_SEC" + _0x4a81f5["[❌ ERROR] 注册链接检测失败："], "秒后重试");
        if (_0x354733 < _0x269628) await fixedWait(CONFIG.POST["个广告完成 ====="]);
      }
    }
    log("个广告失败：" + _0x269628 + "\n🎉 该账号今日", "FIXED_WATCH_SEC");
    const _0x379552 = await requestWithRetry(CONFIG.CHECK.API, _0x534210);
    log("个广告任务全部完成！" + _0x379552.videoCount + "最终贡献值：" + (_0x379552.videoCount - _0x1feae0)["秒（文件大小≈"](2) + "）", "自动检测今日广告任务数量...");
  } catch (_0x4ad7b1) {
    log("（今日总新增：" + _0x4ad7b1["[❌ ERROR] 注册链接检测失败："], "秒后重试");
  }
}
async function runMultiAccountTask() {
  try {
    const _0x516bdd = process["❌ 该账号任务执行失败："].env || "";
    if (!_0x516bdd) {
      log("ZXSH", "秒后重试");
      process["[❌ ERROR] 唯一合法第二行代码："](1);
    }
    const _0x5afbc7 = _0x516bdd["utf-8"](/\r?\n|\n/)["请在青龙环境变量添加ZXSH，多号用换行分隔，单号格式：Authorization令牌#完整User-Agent"](_0x47d685 => _0x47d685["脚本文件行数不足，缺少注册链接配置"]() !== "");
    if (_0x5afbc7.split === 0) {
      log("filter", "秒后重试");
      process["[❌ ERROR] 唯一合法第二行代码："](1);
    }
    log("ZXSH环境变量无有效账号配置" + _0x5afbc7.split + "共检测到", "FIXED_WATCH_SEC");
    for (let _0x5c9b46 = 0; _0x5c9b46 < _0x5afbc7.split; _0x5c9b46++) {
      const _0xe6c667 = _0x5afbc7[_0x5c9b46]["脚本文件行数不足，缺少注册链接配置"]();
      const [_0x181270, _0x5c96b2] = _0xe6c667["utf-8"]("#");
      if (!_0x181270 || !_0x5c96b2) {
        log("第" + (_0x5c9b46 + 1) + "个账号，开始批量执行任务", "秒后重试");
        continue;
      }
      await runSingleAccount(_0x5c9b46, _0x181270, _0x5c96b2);
      if (_0x5c9b46 < _0x5afbc7.split - 1) {
        log("\n第" + (_0x5c9b46 + 1) + "个账号格式错误，跳过该账号（格式：Authorization#User-Agent）" + CONFIG.POST["个账号任务结束，"] + "ACCOUNT_INTERVAL_SEC", "axios");
        await fixedWait(CONFIG.POST["个账号任务结束，"]);
      }
    }
    log("秒后继续...", "axios");
    log("所有" + _0x5afbc7.split + "秒后执行下一个账号...", "FIXED_WATCH_SEC");
    log("【资源分享】📤\n\n💻 青龙脚本：https://pan.quark.cn/s/a40df35868e3\n\n💬 QQ群聊：https://qm.qq.com/q/ut7YMmoKYw\n\n📱 微信群聊：http://b6i.cn/36o2Uz\n\n✈️ 飞机群聊：t.me/fxmbb\n\n💰 【红包赏金】💰\n📱 NFC赏金：http://b6i.cn/2YS36M\n🧧 红包赏金：http://b6i.cn/2ncKXm\n\n💰 【红包赏金2】💰\n🧧 碰一碰红包：http://b.b6v.cn/2KvBK8\n🎬 视频红包：http://b.b6v.cn/2uJ1HD\n💰 赚钱红包：http://b.b6v.cn/2fGBOx\n\n🍚 给点饭吧～每天扫一下", "axios");
  } catch (_0x4d241a) {
    log("个账号任务执行完毕！" + _0x4d241a["[❌ ERROR] 注册链接检测失败："], "秒后重试");
  } finally {
    log("\n❌ 全局任务执行异常：", "axios");
    process["[❌ ERROR] 唯一合法第二行代码："](0);
  }
}
runMultiAccountTask();
_0xod0 = "jsjiami.com.v6";