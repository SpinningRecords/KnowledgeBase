---
title: Windows 로그 수집하는 방법
sidebar_position: 5
---

다양한 문제의 분석 및 진단을 위해 지원 서비스는 Windows 로그 파일이 필요할 수 있습니다. 이 파일에는 소프트웨어에서 발생한 모든 오류에 대한 기록이 있습니다. Windows 로그를 수집하여 지원 팀에 보내는 방법을 살펴보겠습니다.

1. **Win+R**을 함께 누릅니다.

2. 화면 하단에 나타나는 창에서 `eventvwr`을 입력하고 **OK** 키를 누릅니다.

![Run window *mobile](https://cdn.adtidy.org/public/Adguard/kb/newscreenshots/En/eng_event_logs_1.png)

3. 그다음에는 이벤트 뷰어 창이 나타납니다.

![Event viewer *border](https://cdn.adtidy.org/public/Adguard/kb/newscreenshots/En/eng_event_logs_2.png)

필요한 파일을 저장하려면 다음 지침을 따르세요.

- Open **Application**: **Event Viewer (Local)** → **Windows Logs** → **Application**.

- **애플리케이션**을 우클릭하고 드롭다운 메뉴에서 **다른 이름으로 모든 이벤트 저장…** 을 선택합니다.

- 이름과 저장할 위치를 선택하고 **저장**을 클릭합니다. 그다음에는 **언어 설정에 대한 정보 표시**를 선택합니다. **한국어** 옆의 확인란을 선택하고 **확인**을 클릭합니다.

- Open **System**: **Event Viewer (Local)** → **Windows Logs** →  **System**.

- **시스템**을 우클릭하고 드롭다운 메뉴에서 **다른 이름으로 모든 이벤트 저장…**을 선택합니다.

- 저장할 위치를 선택하고 이름을 입력한 후 **저장**을 클릭합니다. 그다음에는 **언어 설정에 대한 정보 표시**를 선택합니다. **한국어** 옆의 확인란을 선택하고 **확인**을 클릭합니다.

AdGuard 지원 서비스에 **support@adguard.com**으로 두 개의 파일을 보내 주십시오.