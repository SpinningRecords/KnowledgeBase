---
title: 报告网站
sidebar_position: 3
---


使用广告拦截程序时，您可能会遇到某些网站的错误工作或页面元素损坏的情况。 这些问题可能是由于多种因素引起的：

* 不正确的用户规则；
* 修改添加广告的算法；
* 添加了来自第三方开发人员的过滤器/扩展程序；
* 创建规则时，其中一个过滤器的作者犯了一个错误；
* 重新插入广告。 Find more about this method in our [blog](https://adguard.com/blog/ad-reinsertion.html).

您可以通过填写申请表中的广告示例来帮助我们。 为此，请按照您的操作系统使用说明。

## 报告网站 {#report}

> **注意**：当您通过应用或AdGuard 浏览器助手发送投诉时，所有信息都会自动填写。 除了屏幕截图，您还必须自己制作并附加它们。 如果您使用的是[此链接](https://reports.adguard.com/new_issue.html)，则需要手动输入数据。

要报告广告已重新插入或网站显示不正确，您需要：

### 浏览器扩展 {#extension}

* 点击相应图标打开浏览器扩展设置；
* 点击**报告问题**：

![extension *mobile](https://cdn.adtidy.org/content/Kb/ad_blocker/guides/extension_issue.png)

* 填写举报表格后，将自动在 [GitHub](https://github.com/AdguardTeam/AdguardFilters/issues) 上创建一个问题。 也将有一个链接让用户监视解决问题的进度。

### Windows 系统 {#windows}

* Open [AdGuard Browser Assistant](/adguard-for-windows/browser-assistant) and hit **Report an issue**:

![windows *border](https://cdn.adtidy.org/content/Kb/ad_blocker/guides/browser-assistant.png)

* 填写举报表格；
* 完成后，将自动在 [GitHub](https://github.com/AdguardTeam/AdguardFilters/issues) 上创建一个问题。 也将有一个链接让用户监视解决问题的进度。

### 安卓系统 {#android}

* 打开 AdGuard 设置；
* Сhoose **Support**, then **Send Feedback** → **Missed ad**/**Incorrect blocking**:

![android *mobile](https://cdn.adtidy.org/content/Kb/ad_blocker/guides/android.png)

* 填写举报表格后，将自动在 [GitHub](https://github.com/AdguardTeam/AdguardFilters/issues) 上创建一个问题。 也将有一个链接让用户监视解决问题的进度。

### Mac 系统 {#mac}

* Open [AdGuard Browser Assistant](/adguard-for-mac/browser-assistant) and hit **Report an issue**:

![mac *mobile](https://cdn.adtidy.org/content/kb/ad_blocker/guides/browser-assistant-mac.png)

* 填写举报表格；
* 完成后，将自动在 [GitHub](https://github.com/AdguardTeam/AdguardFilters/issues) 上创建一个问题。 也将有一个链接让用户监视解决问题的进度。

### iOS 系统 {#ios}

* 打开 AdGuard 设置；
* 选择**支持**，然后点击**报告错误拦截**：

![ios *mobile](https://cdn.adtidy.org/content/Kb/ad_blocker/guides/ios_issue.png)

* 填写举报表格；
* 完成后，将自动在 [GitHub](https://github.com/AdguardTeam/AdguardFilters/issues) 上创建一个问题。 也将有一个链接让用户监视解决问题的进度。

## 填写表格 {#form}

> **注意**：当您通过应用或 AdGuard 助手发送投诉时，所有信息都会自动填写。 除了屏幕截图，您还必须自己制作并附加它们。 如果您使用的是[此链接](https://reports.adguard.com/en/new_issue.html)，则需要手动输入数据。

1. Filling in the form starts with detailing the type and version of a product;

![forma1 *border](https://cdn.adtidy.org/content/Kb/ad_blocker/guides/forma1en.png)

2. Specify the type of problem and additional information on using third-party software (antivirus, VPN);

![forma2 *border](https://cdn.adtidy.org/content/Kb/ad_blocker/guides/forma2en.png)

3. Enter the address of the page where you have encountered the problem (or full download link in case of an app), and the browser where you've encountered a problem;

![forma3 *border](https://cdn.adtidy.org/content/Kb/ad_blocker/guides/forma3en.png)

4. 必须指定应用程序配置：
* 您使用的过滤器；
* Stealth mode settings, if this function is enabled.

![forma4 *border](https://cdn.adtidy.org/content/kb/ad_blocker/guides/forma4en.png)

5. [Provide a screenshot](../take-screenshot) that captures the essence of a problem;

* **重要**：隐藏您的个人信息（电子邮件，电话号码等），因为屏幕截图将公开显示。

![forma5 *border](https://cdn.adtidy.org/content/Kb/ad_blocker/guides/forma5en.png)

6. Provide additional information that will help filter developers understand the situation;

Also enter your account on **GitHub**, if available (it's necessary for developers to be able to reach you in case they need some additional details);

![forma6 *border](https://cdn.adtidy.org/content/Kb/ad_blocker/guides/forma6en.png)

7. Check each step before sending the form;

![forma7 *mobile_border](https://cdn.adtidy.org/content/Kb/ad_blocker/guides/forma7en.png)

8. You'll be provided with a link to track progress on your task.

![forma8 *border](https://cdn.adtidy.org/content/Kb/ad_blocker/guides/forma8en.png)

## 问题诊断 {#issue}

此选项适用于那些不怕困难并且不介意自行寻找问题的人。 这不需要任何特殊技能或对 HTML 和 CSS 的深入了解。

例如，您可能遇到无法打开您喜欢的网站，授权被破坏或某些页面元素显示不正确的情况。 原因可能是使用特定的过滤器/扩展/隐身模式设置。 要诊断这些问题，您需要执行以下操作：

### **过滤器**

1. 禁用**广告拦截程序**；
2. 如果解决了问题，请重新启用模块并逐个禁用过滤器。 这样做是为了识别“破坏”页面的过滤器。
3. 如果您设法找出哪个过滤器“破坏了”页面，则在填写表格时应通知开发人员（请参见上文）。 在这种情况下，希望返回到初始设置；
4. If turning off all the filters hasn't produced any results, apply rule **@@||example.com^$document,extension**; where **example.com** is an example site name that needs to be replaced by your own option;
5. 如果发生故障（问题未解决），请转到**「隐身模式」**一节。

### **隐身模式**

1. 禁用**隐身模式**；
2. 如果这解决了问题，请依次打开模块并关闭**「隐身模式」**选项。 这样做是为了检测哪些设置正在“破坏”页面；
3. 如果您设法检测到哪个设置“破坏了”页面，则应在填写表单时通知开发人员（请参见上文）。 在这种情况下，希望返回到初始设置；
4. 如果出现故障（问题未解决），请转到**「扩展」**一节。

### **浏览器扩展**

1. 禁用**扩展**；
2. 如果这解决了问题，请打开模块并逐个关闭**扩展**设置。 这样做是为了找出哪个设置“破坏了”页面；
3. 如果您设法检测到哪个设置会“破坏”页面，请在填写表单时通知开发人员（请参见上文）。 在这种情况下，希望返回到初始设置。

### **第三方拦截器**
某些浏览器和防病毒程序（例如 Yandex 浏览器，卡巴斯基等）具有内置的广告拦截器。 它们可能会影响站点的运行并引起问题。 如果您使用此类程序，请确保问题出在 **AdGuard** 一边：禁用 **AdGuard** 过滤，然后尝试重复该问题。 如果仍然存在，则表示问题是由其他应用程序或浏览器引起的。 如果问题是由 **AdGuard** 引起的，请按照前面段落中描述的步骤进行操作。