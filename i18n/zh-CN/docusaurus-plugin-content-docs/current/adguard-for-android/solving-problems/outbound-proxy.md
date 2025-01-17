---
title: 如何设置外出代理
sidebar_position: 8
---

:::info

本文适用于安卓版的 AdGuard，它是一种多功能广告拦截器，可在系统级别保护用户的设备。 要了解工作原理， 请[下载 AdGuard 应用程序](https://adguard.com/download.html?auto=true)

:::

AdGuard allows you to route your device's traffic through a proxy server. To access proxy settings, open **Settings** and then proceed to **Filtering** → **Network** → **Proxy**.

## Proxy configuration examples

In this article we give examples of how to set up some of the most popular proxies to work with AdGuard.

### 如何同时使用 AdGuard 和 Tor

1. Open AdGuard and go to **Settings** → **Filtering** → **Network** → **Proxy**. Download "Orbot: Proxy with Tor" directly from [Google Play](https://play.google.com/store/apps/details?id=org.torproject.android&noprocess) or by tapping **Integrate with Tor** and then **Install**.

1. 打开 Orbot 并在应用程序的首页点击**「开启」**按钮。

1. Go back to the **Proxy** screen of AdGuard.

1. 点击**「配置 Tor® 整合」**按钮。

1. All the required fields will be pre-filled:

    | 字符串  | 数值                  |
    | ---- | ------------------- |
    | 代理分类 | *SOCKS4* 或 *SOCKS5* |
    | 代理主机 | *127.0.0.1*         |
    | 代理端口 | *9050*              |

    Or you can tap **Proxy server** → **Add proxy server**, enter these values manually, and set Orbot as a default proxy.

1. Enable the main Proxy switch and AdGuard protection to route your device's traffic through the proxy.

    Now AdGuard will forward all traffic through Orbot. If you disable Orbot, Internet connection will be unavailable until you disable outbound proxy settings in AdGuard.

### 如何同时使用 AdGuard 和 PIA（Private Internet Access）

*Here we presume that you are already a PIA VPN client and have it installed on your device.*

1. Open AdGuard and go to **Settings** → **Filtering** → **Network** → **Proxy** → **Proxy server**.

1. 点击**「添加代理」**按钮并输入以下的数据：

    | 字符串  | 数值                                   |
    | ---- | ------------------------------------ |
    | 代理分类 | *SOCKS5*                             |
    | 代理主机 | *proxy-nl.privateinternetaccess.com* |
    | 代理端口 | *1080*                               |

1. You also need to fill out the **Username/Password** fields. To do so, log in to the [Client Control Panel](https://www.privateinternetaccess.com/pages/client-sign-in) on the PIA website. Click the **Generate Password** button under the **Generate PPTP/L2TP/SOCKS Password** section. A username starting with "x" and a random password will be shown. Use them to fill out the **Proxy username** and **Proxy password** fields in AdGuard.

1. Tap **Save and select**.

1. Enable the main Proxy switch and AdGuard protection to route your device's traffic through the proxy.

### 如何同时使用 AdGuard 和 TorGuard

*Here we presume that you are already a TorGuard client and have it installed on your device.*

1. Open AdGuard and go to **Settings** → **Filtering** → **Network** → **Proxy** → **Proxy server**.

1. 点击**「添加代理」**按钮并输入以下的数据：

    | 字符串  | 数值                                          |
    | ---- | ------------------------------------------- |
    | 代理分类 | *SOCKS5*                                    |
    | 代理主机 | *proxy.torguard.org* or *proxy.torguard.io* |
    | 代理端口 | *1080* or *1085* or *1090*                  |

1. For **Username** and **Password** fields, enter your proxy username and proxy password you have chosen at TorGuard signup.

1. Tap **Save and select**.

1. Enable the main Proxy switch and AdGuard protection to route your device's traffic through the proxy.

### 如何同时使用 AdGuard 和 NordVPN

1. Open AdGuard and go to **Settings** → **Filtering** → **Network** → **Proxy** → **Proxy server**.

1. 点击**「添加代理」**按钮并输入以下的数据：

    | 字符串  | 数值                                                                             |
    | ---- | ------------------------------------------------------------------------------ |
    | 代理分类 | *SOCKS5*                                                                       |
    | 代理主机 | *any server from [this list](https://support.nordvpn.com/Connectivity/Proxy/)* |
    | 代理端口 | *1080*                                                                         |

1. For **Username** and **Password** fields, enter your NordVPN Username and Password.

1. Tap **Save and select**.

1. Enable the main Proxy switch and AdGuard protection to route your device's traffic through the proxy.

### 如何同时使用 Adguard 和 Shadowsocks

*Here we presume that you have already configured a Shadowsocks server and a client on your device.*

:::note

You should remove Shadowsocks app from filtering before setting up the process (**App management** → **Shadowsocks** → **Route traffic through AdGuard**) to avoid infinite loops and drops.

:::

1. Open AdGuard and go to **Settings** → **Filtering** → **Network** → **Proxy** → **Proxy server**.

1. Tap the **Add proxy server** and fill in the fields:

    | 字符串  | 数值          |
    | ---- | ----------- |
    | 代理分类 | *SOCKS5*    |
    | 代理主机 | *127.0.0.1* |
    | 代理端口 | *1080*      |

1. Tap **Save and select**.

1. Enable the main Proxy switch and AdGuard protection to route your device's traffic through the proxy.

### How to use AdGuard with Clash

*Here we presume that you are already a Clash client and have it installed on your device.*

1. Open Clash and go to **Settings** → **Network** → **Route System Traffic** and toggle the switch. This will set Clash to proxy mode.

1. Open AdGuard and go to **App management**. Choose **Clash For Android** and disable **Route traffic through AdGuard**. This will eliminate traffic looping.

1. Then go to **Settings** → **Filtering** → **Network** → **Proxy** → **Proxy server**.

1. Tap **Add proxy server** and fill in the fields:

    | 字符串  | 数值          |
    | ---- | ----------- |
    | 代理分类 | *SOCKS5*    |
    | 代理主机 | *127.0.0.1* |
    | 代理端口 | *7891*      |

## 限制

There is a factor that can prevent certain traffic from being routed through the outgoing proxy. AdGuard will only re-route traffic that goes through it. Basically, it means apps that have **Ad blocking** flag enabled in the **Apps Management** tab.
