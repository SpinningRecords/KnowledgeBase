---
title: Как составлять свои фильтры
sidebar_position: 5
toc_min_heading_level: 2
toc_max_heading_level: 4
---

:::info

В этой статье мы рассказываем, как писать пользовательские правила фильтрации для использования в продуктах AdGuard. Чтобы проверить правила, [скачайте приложение AdGuard](https://adguard.com/download.html?auto=true)

:::

Фильтр — это набор правил фильтрации рекламного контента (баннеров, всплывающих окон и тому подобного). В AdGuard есть список базовых фильтров, созданных нашей командой. Они постоянно дорабатываются и дополняются, и, как мы надеемся, удовлетворяют требованиям большинства пользователей.

В то же время AdGuard позволяет создавать пользовательские фильтры, используя те же типы правил, что и в наших фильтрах.

Для описания синтаксиса правил мы используем [Augmented BNF for Syntax Specifications](https://tools.ietf.org/html/rfc5234), но не всегда строго следуем этой спецификации.

:::info

Синтаксис правил AdGuard изначально основан на синтаксисе правил Adblock Plus. Позже мы расширили его новыми типами правил для лучшей фильтрации рекламы. Часть информации в этой статье об общих для ABP и AdGuard типах правил взята из [этой статьи](https://adblockplus.org/en/filters).

:::

## Комментарии

Любая строка, начинающаяся с восклицательного знака, является комментарием. В списке правил она подсвечивается серым цветом. AdGuard будет игнорировать эту строку, так что можете спокойно писать там всё, что хотите. Комментарии обычно размещаются над правилами и описывают то, что они делают.

Например:

```adblock
! Это комментарий. Под этой строкой находится правило фильтрации.
||example.org^
```

## Примеры

### Блокировка по имени домена

![Блокировка по имени домена](https://cdn.adtidy.org/content/kb/ad_blocker/general/0_blocking_domain.svg)

**Это правило блокирует:**

- `http://example.org/ad1.gif`
- `http://subdomain.example.org/ad1.gif`
- `https://ads.example.org:8000/`

**Это правило не блокирует:**

- `http://ads.example.org.us/ad1.gif`
- `http://example.com/redirect/http://ads.example.org/`

### Блокировка конкретного адреса

![Блокировка конкретного адреса](https://cdn.adtidy.org/content/kb/ad_blocker/general/1_exact_address.svg)

**Это правило блокирует:**

- `http://example.org/`

**Это правило не блокирует:**

- `https://example.org/banner/img`

### Модификаторы базовых правил

Правила фильтрации поддерживают множество модификаторов, которые позволяют вам точно настраивать поведение правила. Вот пример правила с некоторыми простыми модификаторами.

![Модификаторы базовых правил](https://cdn.adtidy.org/content/kb/ad_blocker/general/2_basic_rule_options.svg)

**Это правило блокирует:**

- `http://example.org/script.js` если этот скрипт загружен с `example.org`.

**Это правило не блокирует:**

- `https://example.org/script.js` если этот скрипт загружен с `example.org`.
- `https://example.org/banner.png` потому что это не скрипт.

### Разблокировка адреса

![Разблокировка адреса](https://cdn.adtidy.org/content/kb/ad_blocker/general/3_basic_exception.svg)

**Это правило разблокирует:**

- `http://example.org/banner.png`, даже если для этого адреса есть правило блокировки.

Правила блокировки с модификатором [`$important`](#important-modifier) приоритетнее, чем обычные правила разблокировки.

### Разблокировка всего сайта

![Разблокировка всего сайта](https://cdn.adtidy.org/content/kb/ad_blocker/general/4_unblock_entire_website.svg)

**Это правило разблокирует**

- Оно отключает все косметические правила на `example.com`.
- Оно блокирует все запросы, отправленные с этого сайта, даже если есть правила блокировки, соответствующие этим запросам.

### Косметические правила

![Косметические правила](https://cdn.adtidy.org/content/kb/ad_blocker/general/5_cosmetic_rules.svg)

Косметические правила применяются с использованием CSS — специального языка программирования, который понимает каждый браузер. В основном, он добавляет новый стиль CSS на сайт, цель которого — скрыть определённые элементы. Вы можете узнать больше о CSS в целом [здесь](https://developer.mozilla.org/en-US/docs/Learn/CSS/Introduction_to_CSS/Selectors).

AdGuard [расширяет возможности CSS](#extended-css-selectors) и позволяет разработчикам фильтров решать гораздо более сложные задачи. Но чтобы использовать эти расширенные правила, вы должны хорошо понимать, что такое CSS.

**Популярные CSS-селекторы**

| Name                         | CSS selector                     | Description                                                                                                                                                                                                           |
| ---------------------------- | -------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ID selector                  | `#banners`                       | Matches all elements with `id` attribute equal to `banners`.<br/>![ID selector](https://cdn.adtidy.org/public/Adguard/kb/en/rules_syntax/css_id_selector.png)                                                   |
| Class selector               | `.banners`                       | Matches all elements with `class` attribute containing `banners`.<br/>![Class selector](https://cdn.adtidy.org/public/Adguard/kb/en/rules_syntax/css_class_selector.png)                                        |
| Attribute selector           | `div[class="banners"]`           | Matches all `div` elements with `class` attribute **exactly equal** to `banners`.<br/>![Attribute selector](https://cdn.adtidy.org/public/Adguard/kb/en/rules_syntax/css_class_attr.png)                        |
| Attribute substring selector | `div[class^="advert1"]`          | Matches all `div` elements which `class` attribute **starts with** the `advert1` string.<br/>![Attribute substring selector](https://cdn.adtidy.org/public/Adguard/kb/en/rules_syntax/css_class_attr_start.png) |
| Attribute substring selector | `div[class$="banners_ads"]`      | Matches all `div` elements which `class` attribute **ends with** the `banners_ads` string.<br/>![Attribute substring selector](https://cdn.adtidy.org/public/Adguard/kb/en/rules_syntax/css_class_attr_end.png) |
| Attribute substring selector | `a[href^="http://example.com/"]` | Matches all links that are loaded from `http://example.com/` domain.<br/>![Attribute substring selector](https://cdn.adtidy.org/public/Adguard/kb/en/rules_syntax/css_attr_start.png)                           |
| Attribute selector           | `a[href="http://example.com/"]`  | Matches all links to **exactly** the `http://example.com/` address.<br/>![Attribute selector](https://cdn.adtidy.org/public/Adguard/kb/en/rules_syntax/css_attr_equal.png)                                      |

## Ограничения и запреты

### Доверенные фильтры {#trusted-filters}

Некоторые правила можно использовать только в доверенных фильтрах. В эту категорию входят:

- списки фильтров [, созданные командой AdGuard](../adguard-filters),
- пользовательские списки фильтров, установленные как `доверенные`,
- пользовательские правила.

### AdGuard Content Blocker

AdGuard Content Blocker — это расширение для браузеров Samsung и Яндекс, которое можно установить из Google Play. Его не следует путать с полнофункциональным AdGuard для Android, который можно загрузить только с [нашего сайта](https://adguard.com/adguard-android/overview.html). К сожалению, возможности AdGuard Content Blocker ограничены тем, что позволяют браузеры, а они поддерживают только старый синтаксис фильтров Adblock Plus:

- Базовые правила блокировки со следующими модификаторами: `$domain`, `$third-party` и [модификаторы типа контента](#content-type-modifiers).
- Базовые правила исключения со следующими модификаторами: `$document`, `$elemhide`.
- Базовые правила скрытия элементов [](#cosmetic-elemhide-rules) без расширенной поддержки CSS.

Из-за указанных выше ограничений AdGuard Content Blocker не будет упоминаться в примечаниях по совместимости.

## Базовые правила

Самые простые правила — это так называемые *Базовые правила*. Они используются для блокировки запросов к определённым URL-адресам. Либо, при наличии специального маркера @@ в начале правила, для разблокировки запроса. Основной принцип для этого типа правил достаточно прост: необходимо указать адрес и дополнительные параметры, которые ограничивают или расширяют область действия правила.

:::note Подзапросы

Базовые правила, блокирующие запросы, применяются только к **подзапросам**. Это означает, что они не будут блокировать загрузку страницы, если это не будет явно указано с помощью модификатора `$document`.

:::

:::note Статус ответа

Браузер определяет заблокированный подзапрос как выполненный с ошибкой.

:::

### Синтаксис базовых правил {#basic-rules-syntax}

```text
      rule = ["@@"] pattern [ "$" modifiers ]
modifiers = [modifier0, modifier1[, ...[, modifierN]]]
```

- **`pattern`** — маска адреса. URL каждого запроса сопоставляется с этой маской. В шаблоне вы можете использовать некоторые специальные символы, описание которых будет дано [ниже](#basic-rules-special-characters). Обратите внимание, что AdGuard обрезает URL до 4096 символов, чтобы ускорить сопоставление и избежать проблем с длинными URL.
- **`@@`** — маркер, который используется для обозначения правил-исключений. С такого маркера должны начинаться правила, отключающие фильтрацию для запроса.
- **`modifiers`** — параметры, используемые для «уточнения»‎ базового правила. Некоторые параметры ограничивают область действия правила, а некоторые могут полностью изменить принцип его работы.

### Специальные символы {#basic-rules-special-characters}

- **`*`** — wildcard-символ. Символ, обозначающий «произвольный набор символов». Это может быть как пустая строка, так и строка любой длины.
- **`||`** — соответствие началу адреса. Этот специальный символ позволяет не указывать конкретный протокол и поддомен в маске адреса. То есть, `||` соответствует сразу `http://*.`, `https://*.`, `ws://*.`, `wss://*.`.
- **`^`** — указатель для разделительного символа. Разделителем может быть любой символ кроме буквы, цифры и следующих символов: `_` `-` `.` `%`. Например, в адресе `http:`**`//`**`example.com`**`/?`**`t=1`**`&`**`t2=t3` жирным выделены разделительные символы. Конец адреса также принимается в качестве разделителя.
- **`|`** — указатель на начало или конец адреса. Значение зависит от расположения символов в маске. Например, правило `swf|` соответствует `http://example.com/annoyingflash.swf`, но не `http://example.com/swf/index.html`. `|http://example.org` соответствует `http://example.org`, но не `http://domain.com?url=http://example.org`.

:::note Визуальное представление

Мы также советуем ознакомиться с [этой статьёй,](https://adblockplus.org/filter-cheatsheet#blocking) чтобы лучше понять, как должны строиться такие правила.

:::

### Поддержка регулярных выражений {#regexp-support}

Если вы хотите добиться ещё большей гибкости при составлении правил, вы можете использовать [регулярные выражения](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions) вместо упрощённой маски со специальными символами, которая используется по умолчанию.

:::caution Производительность

Такие правила работают медленнее обычных, поэтому рекомендуется избегать их или хотя бы ограничивать их область действия конкретными доменами.

:::

Чтобы блокировщик определил, что вы хотите использовать регулярное выражение, необходимо, чтобы `pattern` имел особый вид:

```text
pattern = "/" regexp "/"
```

Например, правило `/banner\d+/$third-party` применит регулярное выражение `banner\d+` ко всем сторонним запросам. Правила-исключения с использованием регулярных выражений выглядят вот так: `@@/banner\d+/`.

:::info Совместимость

AdGuard для Safari и AdGuard для iOS не полностью поддерживают регулярные выражения в силу ограничений [Content Blocking API](https://webkit.org/blog/3476/content-blockers-first-look/) (см. раздел The Regular expression format).

:::

### Поддержка wildcard для доменов верхнего уровня (TLD) {#wildcard-for-tld}

Wildcard-символы поддерживаются для TLD-доменов в шаблонах [косметических правил](#cosmetic-rules), правил [HTML-фильтрации](#html-filtering-rules) и [JavaScript](#javascript-rules).

Для косметических правил, например, `example.*##.banner`, несколько доменов будут сопоставлены благодаря части `.*`, т.е. `example.com`, `sub.example.net`, `example.co.uk` и т. д.

При составлении базовых правил вы можете использовать wildcard-символ для TLD только вместе с [модификатором `$domain`](#domain-modifier). Например, `||*/banners/*$image,domain=example.*`.

:::info Совместимость

В AdGuard для Windows, Mac и Android и в браузерном расширении AdGuard правила с подстановочным знаком `.*` соответствуют [любому публичному суффиксу (или eTLD)](https://publicsuffix.org/list/). Но для AdGuard для Safari и iOS [поддерживаемый список доменов верхнего уровня](https://github.com/AdguardTeam/SafariConverterLib/blob/v2.0.31/Sources/ContentBlockerConverter/Compiler/BlockerEntryFactory.swift#L44) ограничен из-за ограничений Safari.

:::

Правила с wildcard для доменов верхнего уровня не поддерживаются в AdGuard Content Blocker.

### Примеры базовых правил

- `||example.com/ads/*` — простое правило, которое соответствует адресам типа `http://example.com/ads/banner.jpg` и даже `http://subdomain.example.com/ads/otherbanner.jpg`.

- `||example.org^$third-party` — правило, которое блокирует сторонние запросы к домену `example.org` и его поддоменам.

- `@@||example.com$document ` — наиболее общее правило-исключение. Такое правило полностью отключает фильтрацию на домене `example.com` и всех его поддоменах. Существует ряд параметров, которые также можно использовать в правилах-исключениях. Более подробно о правилах-исключениях и параметрах, которые могут в таких правилах использоваться, написано [ниже](#exception-modifiers).

### Модификаторы базовых правил

- [Базовые модификаторы](#basic-rules-basic-modifiers)
- [Модификаторы типа контента](#content-type-modifiers)
- [Модификаторы правил-исключений](#exception-modifiers)

:::note

Возможности, описанные в этом разделе, предназначены для опытных пользователей. Они расширяют возможности «Общих правил», но для их применения необходимо представлять, как работает браузер.

:::

Вы можете изменить поведение «общего правила», используя дополнительные модификаторы. Список этих параметров располагается в конце правила за знаком доллара `$` и разделяется запятыми.

Пример:

```adblock
||domain.com^$popup,third-party
```

### Базовые модификаторы {#basic-rules-basic-modifiers}

Приведённые ниже модификаторы самые простые и часто применяемые. В основном, они просто ограничивают сферу применения правила.

<!-- Please keep them sorted -->

| Modifier \ Products                  | [CoreLibs apps][cl-apps] | [AdGuard for Chromium][ext-chr] | [AdGuard for Firefox][ext-ff] |     [AdGuard для iOS][ios-app]      |    [AdGuard для Safari][ext-saf]    | [AdGuard Content Blocker][and-cb] |
| ------------------------------------- |:------------------------:|:-------------------------------:|:-----------------------------:|:-----------------------------------:|:-----------------------------------:|:---------------------------------:|
| [$app](#app-modifier)                 |            ✅             |                ❌                |               ❌               |                  ❌                  |                  ❌                  |                 ❌                 |
| [$denyallow](#denyallow-modifier)     |            ✅             |                ✅                |               ✅               |                  ✅                  |                  ✅                  |                 ❌                 |
| [$domain](#domain-modifier)           |            ✅             |                ✅                |               ✅               | ✅ [*](#domain-modifier-limitations) | ✅ [*](#domain-modifier-limitations) |                 ✅                 |
| [$header](#header-modifier)           |            ✅             |                ⏳                |               ⏳               |                  ❌                  |                  ❌                  |                 ❌                 |
| [$important](#important-modifier)     |            ✅             |                ✅                |               ✅               |                  ✅                  |                  ✅                  |                 ❌                 |
| [$match-case](#match-case-modifier)   |            ✅             |                ✅                |               ✅               |                  ❌                  |                  ❌                  |                 ✅                 |
| [$method](#method-modifier)           |            ⏳             |                ✅                |               ✅               |                  ❌                  |                  ❌                  |                 ❌                 |
| [$popup](#popup-modifier)             |           ✅ *            |                ✅                |               ✅               |                 ✅ *                 |                 ✅ *                 |                 ❌                 |
| [$third-party](#third-party-modifier) |            ✅             |                ✅                |               ✅               |                  ✅                  |                  ✅                  |                 ✅                 |
| [$to](#to-modifier)                   |            ⏳             |                ✅                |               ✅               |                  ❌                  |                  ❌                  |                 ❌                 |

:::note

- ✅ — fully supported
- ✅ * — supported, but reliability may vary or limitations may occur; check the modifier description for more details
<!-- - 🧩 — may already be implemented in nightly or beta versions but is not yet supported in release versions -->
- ⏳ — feature that has been implemented or is planned to be implemented but is not yet available in any product
- ❌ — not supported

:::

#### **`$app`** {#app-modifier}

Этот модификатор ограничивает действие правила до конкретного приложения (или списка приложений). Это может быть не слишком важно для Windows и Mac, но это очень важно для мобильных устройств, где некоторые правила фильтрации должны быть связаны с конкретным приложением.

- Android — используйте имя пакета приложения, например, `org.example.app`.
- Windows — используйте имя процесса, например, `chrome.exe`.
- Mac — используйте bundle ID или имя процесса, например, `com.google.Chrome`.

На Mac вы можете найти bundle ID или имя процесса интересующего вас приложения в деталях соответствующих запросов в Журнале фильтрации.

**Примеры**

- `||baddomain.com^$app=org.example.app` — правило для блокировки запросов, которые соответствуют указанной маске и отправлены Android-приложением `org.example.app`.
- `||baddomain.com^$app=org.example.app1|org.example.app2` — аналогичное правило, но оно работает как для приложения `org.example.app1`, так и для `org.example.app2`.

Если вы хотите, чтобы правило не применялось к определённым приложениям, начните название приложения с символа `~`.

- `||baddomain.com^$app=~org.example.app` — правило для блокировки запросов, соответствующих указанной маске и отправленных из любого приложения, кроме `org.example.app`.
- `||baddomain.com^$app=~org.example.app1|~org.example.app2` — аналогично, но в исключениях два приложения: `org.example.app1` и `org.example.app2`.

:::caution Ограничения

Apps in the modifier value cannot have a wildcard, e.g. `$app=com.*.music`. Rules with such modifier are considered invalid.

:::

:::info Совместимость

- Только AdGuard для Windows, Mac и Android имеют технические возможности для поддержки правил с модификатором `$app`.
- На Windows имя процесса нечувствительно к регистру, начиная с версий AdGuard для Windows c CoreLibs 1.12.

:::

#### **`$denyallow`** {#denyallow-modifier}

Модификатор `$denyallow` позволяет избежать создания дополнительных правил, когда требуется отключить то или иное правило для определённых доменов. Модификатор `$denyallow` соответствует только целевым доменам, но не доменам реферера.

Добавление этого модификатора в правило равносильно исключению доменов при помощи паттерна правила либо при помощи добавления дополнительных правил-исключений. Чтобы добавить несколько доменов в одно правило, используйте символ `|` в качестве разделителя.

**Примеры**

Это правило:

```adblock
*$script,domain=a.com|b.com,denyallow=x.com|y.com
```

эквивалентно этому правилу:

```adblock
/^(?!.*(x.com|y.com)).*$/$script,domain=a.com|b.com
```

или в комбинацию этих трёх:

```adblock
*$script,domain=a.com|b.com
@@||x.com$script,domain=a.com|b.com
@@||y.com$script,domain=a.com|b.com
```

:::caution Ограничения

- Паттерн правила не может указывать на конкретные домены, например, не может начинаться с `||`.
- Домены в значении модификатора не могут иметь отрицание (например, `$denyallow=~x.com`) или wildcard домена верхнего уровня `$denyallow=x.*`.

Правила, нарушающие эти ограничения, считаются недействительными.

:::

:::info Совместимость

Правила с модификатором `$denyallow` не поддерживаются в AdGuard для iOS, Safari и AdGuard Content Blocker.

:::

#### **`$domain`** {#domain-modifier}

`$domain` ограничивает область действия правила запросами, сделанными **с** указанных доменов и их поддоменов (как указано в HTTP-заголовке [Referer](https://developer.mozilla.org/ru/docs/Web/HTTP/Headers/Referer)).

**Синтаксис**

Модификатор представляет собой список из одного или нескольких выражений, разделённых символом `|`, каждое из которых сопоставляется с доменом определённым образом в зависимости от его типа (см. ниже).

```text
domains = ["~"] entry_0 ["|" ["~"] entry_1 ["|" ["~"]entry_2 ["|" ... ["|" ["~"]entry_N]]]]
entry_i = ( regular_domain / any_tld_domain / regexp )
```

- **`Regular_domain`** — обычное доменное имя (`domain.com`). Соответствует указанному домену и его поддоменам. Сопоставляется лексикографически.
- **`any_tld_domain`** — доменное имя, оканчивающееся подстановочным знаком в качестве [публичного суффикса](https://publicsuffix.org/learn/), например, для `example.*` это `co.uk` в `example.co.uk`. Соответствует указанному домену и его поддоменам с любым публичным суффиксом. Сопоставляется лексикографически.
- **`regexp`** — регулярное выражение, начинается и заканчивается символом `/`. Паттерн работает так же, как и в основных URL-правилах, но символы `/`, `$` и `,` должны быть экранированы с помощью `\`.

:::info

Правила с модификатором `$domain` в виде `regular_domain` или `any_tld_domain` поддерживаются всеми продуктами AdGuard.

:::

**Примеры**

**Просто `$domain`:**

- `||baddomain.com^$domain=example.org` блокирует запросы, которые соответствуют указанной маске и отправлены с домена `example.org` или его поддоменов.
- `||baddomain.com^$domain=example.org|example.com` — такое же правило, но срабатывать оно будет как для домена `example.org`, так и для `example.com`.

Если вы хотите, чтобы правило не применялось к определённым доменам, начните доменное имя со знака `~`.

**`$domain` и отрицание `~`:**

- `||baddomain.com^$domain=example.org` блокирует запросы, которые соответствуют указанной маске и отправлены с домена `example.org` или его поддоменов.
- `||baddomain.com^$domain=example.org|example.com` — такое же правило, но срабатывать оно будет как для домена `example.org`, так и для `example.com`.
- `||baddomain.com^$domain=~example.org` блокирует запросы, которые соответствуют указанной маске и отправлены с любого домена, кроме `example.org` и его поддоменов.
- `||baddomain.com^$domain=example.org|~foo.example.org` блокирует запросы, отправленные с домена `example.org` и всех его поддоменов, кроме `foo.example.org`.
- `||baddomain.com^$domain=/(^\|.+\.)example\.(com\|org)\$/` блокирует запросы, отправляемые с доменов `example.org` и `example.com` и всех их поддоменов.
- `||baddomain.com^$domain=~a.com|~b.*|~/(^\|.+\.)c\.(com\|org)\$/` блокирует запросы, отправленные с любых доменов, кроме `a.com`, `b` с любым публичным суффиксом (`b.com`, `b.co.uk`, и т.д.), `c.com`, `c.org` и их поддоменов.

**Модификатор `$domain`, соответствующий целевому домену:**

В некоторых случаях модификатор `$domain` может соответствовать не только домену-рефереру, но и целевому домену. Это происходит в случае, когда всё из перечисленного верно:

1. Тип контента запроса — `document`.
1. Шаблон правила не соответствует ни одному конкретному домену.
1. Шаблон правила не содержит регулярных выражений.
1. Модификатор `$domain` содержит только исключённые домены, например, `$domain=~example.org|~example.com`.

Для сопоставления целевого домена должен выполняться следующий предикат:

```text
1 И ((2 И 3) ИЛИ 4)
```

То есть, если модификатор `$domain` содержит только исключённые домены, то правилу не нужно выполнять второе и третье условия, чтобы соответствовать целевому домену `$domain`.

Если какие-либо из условий выше не выполнены, но правило содержит модификатор [`$cookie`](#cookie-modifier) или [`$csp`](#csp-modifier), модификатор всё равно будет соответствовать целевому домену.

Если реферер соответствует правилу с `$domain`, которое явно исключает домен реферера, то правило не сработает, даже если целевой домен тоже ему соответствует. Это также касается правил с модификаторами [`$cookie`](#cookie-modifier) и [`$csp`](#csp-modifier).

**Примеры**

- `*$cookie,domain=example.org|example.com` заблокирует cookies для всех запросов от и к `example.org` и `example.com`.
- `*$document,domain=example.org|example.com` заблокирует все запросы от и к `example.org` и `example.com`.

В следующих примерах предполагается, что запросы отправляются от `http://example.org/page` (реферер), а целевой URL — `http://targetdomain.com/page`.

- `page$domain=example.org` сработает, так как соответствует рефереру.
- `page$domain=targetdomain.com` сработает, так как соответствует целевому домену и удовлетворяет всем требованиям, перечисленным выше.
- `||*page$domain=targetdomain.com` не сработает, так как шаблон `||*page` может указывать на конкретные домены, например, `example.page`.
- `||*page$domain=targetdomain.com,cookie` будет соответствовать, потому что правило содержит модификатор `$cookie`, несмотря на то, что шаблон `||*page` может соответствовать конкретным доменам.
- `/banner\d+/$domain=targetdomain.com` не сработает, поскольку правило содержит регулярное выражение.
- `page$domain=targetdomain.com|~example.org` не сработает, так как домен реферера явно исключён.

#### `domain` modifier limitations {#domain-modifier-limitations}

:::caution Ограничения

Safari не поддерживает одновременно разрешённые и запрещённые домены, поэтому правила вида `||baddomain.com^$domain=example.org|~foo.example.org` не работают в AdGuard для iOS и AdGuard для Safari.

:::

:::info Совместимость

Правила с регулярными выражениями в модификаторе `$domain` поддерживаются в AdGuard для Windows, Mac и Android с **CoreLibs версии 11 или выше**.

В AdGuard для Windows, Mac и Android **с CoreLibs 1.12 или более поздней версии** модификатор `$domain` может быть альтернативно написан как `$from`.

:::

#### **`$header`** {#header-modifier}

Модификатор `$header` ограничивает область действия правила запросами, ответы которых содержат заголовки, соответствующие правилу.

**Синтаксис**

```text
$header "=" h_name [":" h_value]
h_value = string / regexp
```

где:

- **`h_name`** (обязательно) — имя HTTP-заголовка. Сопоставляется без учёта регистра символов.
- **`h_value`** (опционально) — выражение для сопоставления значения HTTP-заголовка, может быть одним из:
    - **`string`** — последовательность символов. Лексикографически сопоставляется со значением заголовка;
    - **`regexp`** — регулярное выражение, начинается и заканчивается символом `/`. Паттерн работает так же, как и в основных URL-правилах, но символы `/`, `$` и `,` должны быть экранированы с помощью `\`.

Часть модификатора со значением заголовка (`":" h_value`) может быть опущена. В этом случае модификатор сопоставляет только имя заголовка.

**Примеры**

- `||example.com^$header=set-cookie:foo` — блокирует запрос, ответ которого содержит заголовок `Set-Cookie` со значением `foo`.
- `||example.com^$header=set-cookie ` блокирует запрос, ответ которого содержит заголовок `Set-Cookie` с любым значением.
- `@@||example.com^$header=set-cookie:/foo\, bar\$/` разблокирует запросы, ответы которых содержат заголовок `Set-Cookie` со значением `foo, bar$`.
- `@@||example.com^$header=set-cookie` разблокирует запрос, ответ которого содержит заголовок `Set-Cookie` с любым значением.

:::info Совместимость

Правила с модификатором `$header` поддерживаются AdGuard для Windows, Mac и Android с **CoreLibs версии 1.11 и выше**.

:::

#### **`$important`** {#important-modifier}

Модификатор `$important`, применённый к правилу, повышает его приоритет относительно любого другого правила без модификатора `$important`. Даже относительно базовых правил-исключений.

Перейдите к [приоритетам правил](#rule-priorities) для более подробной информации.

**Примеры**

```adblock
! блокирующее правило заблокирует все запросы, несмотря на правило-исключение
||example.org^$important
@@||example.org^
```

```adblock
! если правило-исключение тоже содержит модификатор `$important`, его приоритет будет выше, и запросы не будут заблокированы
||example.org^$important
@@||example.org^$important
```

#### **`$match-case`** {#match-case-modifier}

Этот модификатор определяет правило, которое применяется только к адресам с совпадением регистра символов. По умолчанию регистр символов не учитывается.

**Примеры**

- `*/BannerAd.gif$match-case `— такое правило будет блокировать `http://example.com/BannerAd.gif`, но не `http://example.com/bannerad.gif`.

:::info Совместимость

Rules with `$match-case` modifier currently are not supported by [AdGuard for iOS and Safari](https://github.com/AdguardTeam/SafariConverterLib/issues/55).

:::

#### **`$method`** {#method-modifier}

Этот модификатор ограничивает область действия правила запросами, использующими указанный набор методов HTTP. Допускаются отрицательные методы. Методы должны быть указаны строчными буквами, но сопоставляются они без учёта регистра. To add multiple methods to one rule, use the vertical bar `|` as a separator.

**Примеры**

- `||evil.com^$method=get|head` блокирует только запросы GET и HEAD к `evil.com`.
- `||evil.com^$method=~post|~put` блокирует любые запросы к `evil.com`, кроме POST или PUT.
- `@@|||evil.com$method=get` разблокирует только GET-запросы к `evil.com`.
- `@@|||evil.com$method=~post` разблокирует любые запросы к `evil.com`, кроме POST.

:::caution Ограничения

Rules with mixed negated and not negated values are considered invalid. So, for example, the rule `||evil.com^$method=get|~head` will be rejected.

:::

:::info Совместимость

Rules with the `$method` are supported by AdGuard for Windows, Mac, Android, **running CoreLibs v1.12 or later**, and AdGuard Browser Extension for Chrome, Firefox, Edge, **running TSUrlFilter v2.1.1 or later**.

:::

#### **`$popup`** {#popup-modifier}

AdGuard будет пытаться закрыть браузерную вкладку с любым адресом, подходящим под правило с этим модификатором. Обратите внимание, что закрыть можно не любую вкладку.

**Примеры**

- `||domain.com^$popup` — при попытке перехода на сайт `http://domain.com` с любой страницы в браузере, новая вкладка, в которой должен открыться указанный сайт, будет закрыта.

:::info Совместимость

- Модификатор `$popup` лучше всего работает в браузерном расширении AdGuard.
- В AdGuard для Safari и iOS `$popup-правила` просто заблокируют страницу.
- В AdGuard для Windows, Mac и Android модификатор `$popup` в некоторых случаях может не обнаружить всплывающее окно, и оно не будет заблокировано. Модификатор `$popup` применяет тип контента `document` со специальным флагом, который передаётся блокирующей странице. Блокирующая страница сама может провести некоторые проверки и закрыть окно, если это действительно всплывающее окно. В противном случае страница должна быть загружена. Его можно комбинировать с другими модификаторами типа request, такими как `$third-party` и `$important`.
- Rules with `$popup` modifier are not supported by AdGuard Content Blocker.

:::

#### **`$third-party`** {#third-party-modifier}

Ограничение на сторонние или собственные запросы. Сторонним является запрос, отправленный с другого домена. Например, запрос к домену `example.org`, отправленный с домена `domain.com`, является сторонним.

:::note

Чтобы считаться таковым, сторонний запрос должен соответствовать одному из следующих условий:

1. Его реферер — это не поддомен целевого домена, или наоборот. Например, запрос к `subdomain.example.org`, отправленный с домена `example.org`, не является сторонним.
2. Значение его заголовка `Sec-Fetch-Site` — `cross-site`. Если указан модификатор `$third-party`, то правило применяется только к сторонним запросам.

:::

**Примеры**

**`$third-party`:**

- `||domain.com^$third-party` — правило применяется на всех сайтах, кроме `domain.com и его поддоменов. Пример стороннего запроса: <code>http://example.org/banner.jpg`.

Если указан модификатор `$~third-party`, то правило применяется только к запросам, которые не являются сторонними. То есть эти запросы отправлены с того же домена.

**`$~third-party`:**

- `||domain.com$~third-party` — такое правило уже будет применяться только на самом `domain.com`, но не на других сайтах. Пример запроса, который не является сторонним: `http://domain.com/icon.ico`.

:::note

You may use a shorter name (alias) instead of using the full modifier name: `$3p`.

:::

#### **`$to`** {#to-modifier}

`$to` ограничивает область действия правила запросами, сделанными **на** указанные домены и их поддомены. Чтобы добавить несколько доменов в одно правило, используйте символ `|` в качестве разделителя.

**Примеры**

- `/ads$to=evil.com|evil.org` блокирует любые запросы к `evil.com` или `evil.org` и их поддоменам с путём, соответствующим `/ads`.
- `/ads$to=~not.evil.com|evil.com` блокирует любые запросы к `evil.com` и его поддоменам с путём, совпадающим с `/ads`, за исключением запросов к `not.evil.com` и его поддоменам.
- `/ads$to=~good.com|~good.org` блокирует любые запросы с путём, соответствующим `/ads`, за исключением запросов к `good.com` или `good.org` и их поддоменам.

:::caution Ограничения

[`$denyallow`](#denyallow-modifier) нельзя использовать вместе с `$to`. Его можно выразить инвертированным `$to`: `$denyallow=a.com|b.com` эквивалентно `$to=~a.com|~b.com`.

:::

:::info Совместимость

Правила с модификатором `$to` поддерживаются AdGuard для Windows, Mac и Android **с CoreLibs 1.12 или более поздней версии** и Браузерным расширением AdGuard **с TSUrlFilter v2.1.3 или более поздней версии**.

:::

### Модификаторы типа контента {#content-type-modifiers}

Существует целый набор модификаторов, которые ограничивают область применения правила только определённым типом контента. Эти модификаторы можно комбинировать, чтобы, например, распространить правило одновременно и на картинки, и на скрипты.

:::info Совместимость

Существует большая разница в том, как AdGuard определяет тип контента на разных платформах. В случае Браузерного расширения AdGuard, тип контента для каждого запроса предоставляется самим браузером. AdGuard for Windows, Mac, and Android use the following method: first, the apps try to determine the type of the request by the `Sec-Fetch-Dest` request header or by the filename extension. If the request is not blocked at this stage, the type will be determined using the `Content-Type` header at the beginning of the server response.

:::

**Примеры модификаторов типа контента**

- `||example.org^$image` — соответствует всем картинкам с домена `example.org`.
- `||example.org^$script,stylesheet` — соответствует всем скриптам и стилям с домена `example.org`.
- `||example.org^$~image,~script,~stylesheet` — соответствует всем запросам к домену `example.org`, кроме картинок, скриптов и стилей.

<!-- Please keep them sorted -->

| Modifier \ Products                                          | [CoreLibs apps][cl-apps] | [AdGuard for Chromium][ext-chr] | [AdGuard for Firefox][ext-ff] | [AdGuard для iOS][ios-app] | [AdGuard для Safari][ext-saf] | [AdGuard Content Blocker][and-cb] |
| ------------------------------------------------------------- |:------------------------:|:-------------------------------:|:-----------------------------:|:--------------------------:|:-----------------------------:|:---------------------------------:|
| [$document](#document-modifier)                               |            ✅             |                ✅                |               ✅               |             ✅              |               ✅               |                 ❌                 |
| [$font](#font-modifier)                                       |            ✅             |                ✅                |               ✅               |             ✅              |               ✅               |                 ✅                 |
| [$image](#image-modifier)                                     |            ✅             |                ✅                |               ✅               |             ✅              |               ✅               |                 ✅                 |
| [$media](#media-modifier)                                     |            ✅             |                ✅                |               ✅               |             ✅              |               ✅               |                 ✅                 |
| [$object](#object-modifier)                                   |            ✅             |                ✅                |               ✅               |             ✅              |               ✅               |                 ✅                 |
| [$other](#other-modifier)                                     |            ✅             |                ✅                |               ✅               |             ✅              |               ✅               |                 ❌                 |
| [$ping](#ping-modifier)                                       |           ✅ *            |                ✅                |               ✅               |             ❌              |               ❌               |                 ✅                 |
| [$script](#script-modifier)                                   |            ✅             |                ✅                |               ✅               |             ✅              |               ✅               |                 ✅                 |
| [$stylesheet](#stylesheet-modifier)                           |            ✅             |                ✅                |               ✅               |             ✅              |               ✅               |                 ✅                 |
| [$subdocument](#subdocument-modifier)                         |           ✅ *            |                ✅                |               ✅               |             ✅              |               ✅               |                 ❌                 |
| [$websocket](#websocket-modifier)                             |            ✅             |                ✅                |               ✅               |            ✅ *             |              ✅ *              |                 ✅                 |
| [$xmlhttprequest](#xmlhttprequest-modifier)                   |            ✅             |                ✅                |               ✅               |             ✅              |               ✅               |                 ✅                 |
| [$webrtc 🚫](#webrtc-modifier "removed")                       |            ❌             |                ❌                |               ❌               |             ❌              |               ❌               |                 ❌                 |
| [$object-subrequest 🚫](#object-subrequest-modifier "removed") |            ❌             |                ❌                |               ❌               |             ❌              |               ❌               |                 ❌                 |

:::note

- ✅ — fully supported
- ✅ * — supported, but reliability may vary or limitations may occur; check the modifier description for more details
- ❌ — not supported
- 🚫 — removed and no longer supported

:::

#### **`$document`** {#document-modifier}

Правило соответствует запросам основного документа страницы, т.е. HTML-документа, который загружается во вкладке браузера. Оно не подходит для iframe, для них существует модификатор [`$subdocument`](#subdocument-modifier).

По умолчанию AdGuard не блокирует запросы, которые загружаются во вкладке браузера (например, «обход основного фрейма»). Идея заключается в том, чтобы не препятствовать загрузке страниц, поскольку пользователь явно указал, что он хочет, чтобы эта страница была загружена. Однако, если использовать модификатор `$document`, то AdGuard не будет использовать эту логику и предотвратит загрузку страницы. Другими словами, заблокирует её.

Если этот модификатор используется в правиле-исключении (`@@`), то оно полностью отключает блокировку на соответствующих страницах. Это равносильно одновременному использованию модификаторов `$elemhide`, `$content`, `$urlblock`, `$jsinject` и `$extension`.

**Примеры**

- `@@||example.com^$document ` полностью отключает фильтрацию на всех страницах сайта `example.com` и всех его поддоменах.

- `||example.com^$document` блокирует запрос HTML-документа на `example.com` с помощью блокирующей страницы.
- `||example.com^$document,redirect=noopframe` перенаправляет запрос HTML-документа сайта `example.com` на пустой HTML-документ.
- `||example.com^$document,removeparam=test` удаляет параметр `test` из запроса HTML-документа к `example.com`.
- `||example.com^$document,replace=/test1/test2/` заменяет `test1` на `test2` в запросе HTML-документа к `example.com`.

:::note

You may use a shorter name (alias) instead of using the full modifier name: `$doc`.

:::

#### **`$font`** {#font-modifier}

Правило соответствует запросам к файлам шрифтов (например, файлам с расширением `.woff`).

#### **`$image`** {#image-modifier}

Правило соответствует запросам к изображениям.

#### **`$media`** {#media-modifier}

Правило соответствует запросам к медиафайлам — музыке и видео, например файлам `.mp4`.

#### **`$object`** {#object-modifier}

Правило соответствует ресурсам плагинов браузера, например, Java или Flash.

#### **`$other`** {#other-modifier}

Правило применяется к запросам, тип которых не был определён или не соответствует перечисленным выше типам.

#### **`$ping`** {#ping-modifier}

Правило соответствует запросам, вызванным атрибутом `navigator.sendBeacon()` или `ping` в ссылках.

:::info Совместимость

AdGuard для Windows, Mac и Android часто не может точно определить `navigator.sendBeacon()`. Не рекомендуется использовать `$ping` в фильтрах, которые должны использоваться продуктами AdGuard на базе CoreLibs.

Rules with `$ping` modifier are not supported by AdGuard for Safari and iOS.

:::

#### **`$script`** {#script-modifier}

Правило соответствет запросам к файлам скриптов, например, javascript или vbscript.

#### **`$stylesheet`** {#stylesheet-modifier}

Правило соответствует запросам к файлам CSS-стилей.

:::note

You may use a shorter name (alias) instead of using the full modifier name: `$css`.

:::

#### **`$subdocument`** {#subdocument-modifier}

Правило соответствует запросам к встроенным страницам — HTML-теги `frame` и `iframe`.

**Примеры**

- `||example.com^$subdocument` блокирует запросы встроенных страниц (`frame` и `iframe`) к `example.com` и всем его поддоменам.
- `||example.com^$subdocument,domain=domain.com` блокирует запросы встроенных страниц (`frame` и `iframe`) к `example.com` и его поддоменам с `domain.com` и всех его поддоменов.

:::note

You may use a shorter name (alias) instead of using the full modifier name: `$frame`.

:::

:::info Совместимость

In AdGuard for Windows, Mac, and Android subdocuments are being detected by the [Sec-Fetch-Dest header][sec-fetch-dest-header] if it is present. Otherwise, some main pages may be treated as subdocuments.

Rules with `$subdocument` modifier are not supported by AdGuard Content Blocker.

:::

#### **`$websocket`** {#websocket-modifier}

Правило применяется только к соединениям WebSocket.

:::info Совместимость

Модификатор `$websocket` поддерживается во всех продуктах AdGuard, кроме AdGuard Content Blocker. Что касается AdGuard для Safari и AdGuard для iOS, то они поддерживаются на устройствах с macOS Monterey (версия 12) и iOS 16 и выше.

:::

#### **`$xmlhttprequest`** {#xmlhttprequest-modifier}

Правило применяется только к ajax-запросам (запросам, отправленным через объект JavaScript `XMLHttpRequest`).

:::note

You may use a shorter name (alias) instead of using the full modifier name: `$xhr`.

:::

:::info Совместимость

AdGuard для Windows, Mac и Android часто не может точно определить этот тип модификатора и иногда определяет его как [`$other`](#other-modifier) или [`$script`](#script-modifier). Они могут надёжно обнаружить этот тип контента только при фильтрации современных браузеров, поддерживающих [Fetch metadata request headers](https://developer.mozilla.org/en-US/docs/Glossary/Fetch_metadata_request_header).

:::

#### **`$object-subrequest` (удалён)** {#object-subrequest-modifier}

:::danger Уведомление об удалении

Модификатор `$object-subrequest` удалён и больше не поддерживается. Правила с ним не работают. Правило соответствует запросам плагинов браузера (обычно это Flash).

:::

#### **`$webrtc` (удалён)** {#webrtc-modifier}

:::danger Уведомление об удалении

Этот модификатор удалён и больше не поддерживается. Правила с ним не работают. Если вы хотите блокировать WebRTC, рассмотрите возможность использования [скриптлета](#scriptlets) `nowebrtc`.

:::

Правило применяется только к WebRTC-соединениям.

**Примеры**

- `||example.com^$webrtc,domain=example.org` — это правило блокирует WebRTC-соединения c `example.com` для `example.org`.
- `@@*$webrtc,domain=example.org` — это правило отключает оболочку RTC для `example.org`.

### Модификаторы правил-исключений {#exception-modifiers}

Правила-исключения отключают действие других базовых правил для адресов, которым они соответствуют. Они начинаются с маркера `@@`. Для таких правил работают все базовые модификаторы, перечисленные выше. Также добавляется несколько специальных модификаторов, которые будут описаны ниже.

:::note Визуальное представление

Рекомендуем ознакомиться с [этой статьёй](https://adblockplus.org/filter-cheatsheet#blocking), чтобы лучше понять, как должны строиться правила-исключения.

:::

<!-- Please keep them sorted -->

| Modifier \ Products                    | [CoreLibs apps][cl-apps] | [AdGuard for Chromium][ext-chr] | [AdGuard for Firefox][ext-ff] | [AdGuard для iOS][ios-app] | [AdGuard для Safari][ext-saf] | [AdGuard Content Blocker][and-cb] |
| --------------------------------------- |:------------------------:|:-------------------------------:|:-----------------------------:|:--------------------------:|:-----------------------------:|:---------------------------------:|
| [$content](#content-modifier)           |            ✅             |                ❌                |               ✅               |             ❌              |               ❌               |                 ❌                 |
| [$elemhide](#elemhide-modifier)         |            ✅             |                ✅                |               ✅               |             ✅              |               ✅               |                 ✅                 |
| [$extension](#extension-modifier)       |            ✅             |                ❌                |               ❌               |             ❌              |               ❌               |                 ❌                 |
| [$jsinject](#jsinject-modifier)         |            ✅             |                ✅                |               ✅               |             ✅              |               ✅               |                 ❌                 |
| [$stealth](#stealth-modifier)           |            ✅             |                ✅                |               ✅               |             ❌              |               ❌               |                 ❌                 |
| [$urlblock](#urlblock-modifier)         |            ✅             |                ✅                |               ✅               |            ✅ *             |              ✅ *              |                 ❌                 |
| [$genericblock](#genericblock-modifier) |            ✅             |                ✅                |               ✅               |            ✅ *             |              ✅ *              |                 ❌                 |
| [$generichide](#generichide-modifier)   |            ✅             |                ✅                |               ✅               |             ✅              |               ✅               |                 ✅                 |
| [$specifichide](#specifichide-modifier) |            ✅             |                ✅                |               ✅               |             ❌              |               ❌               |                 ❌                 |

:::note

- ✅ — fully supported
- ✅ * — supported, but reliability may vary or limitations may occur; check the modifier description for more details
- ❌ — not supported

:::

#### **`$content`** {#content-modifier}

Отключает [HTML-фильтрацию](#html-filtering-rules), правила [`$hls`](#hls-modifier), [`$replace`](#replace-modifier)и [`$jsonprune`](#jsonprune-modifier) на страницах, соответствующих правилу.

**Примеры**

- `@@|||example.com^$content` отключает все правила модификации контента на страницах `example.com` и всех его поддоменах.

#### **`$elemhide`** {#elemhide-modifier}

Отключает любые [косметические правила](#cosmetic-rules) на страницах, подходящих под правило.

**Примеры**

- `@@||example.com^$elemhide` отменяет все косметические правила для страниц на сайте `example.com` и на всех его поддоменах.

:::note

You may use a shorter name (alias) instead of using the full modifier name: `$ehide`.

:::

#### **`$extension`** {#extension-modifier}

Отключает пользовательские скрипты — определённые или все для данного домена.

**Синтаксис**

```text
$extension[="userscript_name1"[|"userscript_name2"[|"userscript_name3"[...]]]]
```

`userscript_name(i)` обозначает конкретное имя пользовательского скрипта, которое должно быть отключено модификатором. Модификатор может содержать любое количество имён пользовательских скриптов или не содержать их вовсе. В последнем случае модификатор отключает все пользовательские скрипты.

Имена пользовательских скриптов обычно содержат пробелы или другие специальные символы, поэтому необходимо заключать их в кавычки. Поддерживаются как одинарные (`'`), так и двойные (`"`) ASCII-кавычки. Несколько имён пользовательских скриптов должны быть разделены вертикальной чертой (`|`). Однако если имя пользовательского скрипта представляет собой одно слово без специальных символов, то его можно использовать без кавычек.

Вы также можете исключить пользовательский скрипт из фильтрации, добавив перед ним символ `~`. В этом случае пользовательский скрипт не будет отключён модификатором.

```adblock
$extension=~"userscript name"
```

**Обратите внимание:** исключая пользовательский скрипт из фильтрации, обязательно выносите символ `~` за кавычки.

Если имя пользовательского скрипта содержит кавычки (`"`), запятые (`,`) или вертикальную черту (`|`), они должны быть экранированы обратной косой чертой (`\`).

```adblock
$extension="userscript name\, with \"quote\""
```

**Примеры**

- `@@|||example.com^$extension="AdGuard Assistant"` отключает пользовательский скрипт `AdGuard Assistant` на сайте `example.com`.
- `@@|||example.com^$extension=MyUserscript` отключает пользовательский скрипт `MyUserscript` на сайте `example.com`.
- `@@|||example.com^$extension='AdGuard Assistant'|'Popup Blocker'` отключает оба пользовательских скрипта `AdGuard Assistant` и `Popup Blocker` на сайте `example.com`.
- `@@|||example.com^$extension=~"AdGuard Assistant"` отключает все пользовательские скрипты на сайте `example.com`, кроме `AdGuard Assistant`.
- `@@|||example.com^$extension=~"AdGuard Assistant"|~"Popup Blocker"` отключает все пользовательские скрипты на сайте `example.com`, кроме `AdGuard Assistant` и `Popup Blocker`.
- `@@||example.com^$extension` — пользовательские скрипты не будут работать на страницах сайта `example.com`.
- `@@|||example.com^$extension="AdGuard \"Assistant\""` отключает пользовательский скрипт `AdGuard "Assistant"` на сайте `example.com`.

:::info Совместимость

- Только AdGuard для Windows, Mac и Android имеют технические возможности для поддержки правил с модификатором `$extension`.
- Модификатор `$extension` с определённым именем пользовательского скрипта поддерживается AdGuard для Windows, Mac и Android, **c управлением CoreLibs версии 1.13 или выше**.

:::

#### **`$jsinject`** {#jsinject-modifier}

Запрещает добавление javascript-кода на страницу. О скриптлетах и javascript-правилах речь пойдёт ниже.

**Примеры**

- `@@||example.com^$jsinject` отменяет все javascript-правила для страниц на сайте `example.com` и на всех его поддоменах.

#### **`$stealth`** {#stealth-modifier}

Отключает модуль «Антитрекинг»‎ для всех страниц и запросов, подходящих под это правило.

**Синтаксис**

```text
$stealth [= opt1 [| opt2 [| opt3 [...]]]]
```

Здесь `opt(i)` обозначают опции «Антитрекинг»‎, отключаемые правилами. Модификатор может содержать любое количество опций (см. ниже) или не содержать их вовсе. В последнем случае модификатор отключает модуль «Антитрекинг»‎ полностью.

Список доступных опций модификатора:

- `searchqueries` отключает опцию [**Скрыть поисковые запросы**](../../stealth-mode#searchqueries)
- `donottrack` отключает опцию [**Отправить заголовок Do-Not-Track**](../../stealth-mode#donottrack)
- `3p-cookie` отключает [**Самоуничтожение сторонних файлов cookies**](../../stealth-mode#3p-cookie)
- `1p-cookie` отключает [**Самоуничтожение основных файлов cookies**](../../stealth-mode#1p-cookie)
- `3p-cache` отключает опцию [**Отключить кеш-память для сторонних запросов**](../../stealth-mode#3p-cache)
- `3p-auth` отключает опцию [**Блокировать сторонний заголовок Authorization**](../../stealth-mode#3p-auth)
- `webrtc` отключает опцию [**Блокировать WebRTC**](../../stealth-mode#webrtc)
- `push` отключает опцию [**Блокировать Push API**](../../stealth-mode#push)
- `location` отключает опцию [**Блокировать Location API**](../../stealth-mode#location)
- `flash` отключает опцию [**Блокировать Flash**](../../stealth-mode#flash)
- `java` отключает опцию [**Блокировать Java**](../../stealth-mode#java)
- `Referrer` отключает опцию[**Скрыть Referrer от третьих лиц**](../../stealth-mode#miscellaneous)
- `useragent` отключает опцию [**Скрыть User-Agent**](../../stealth-mode#useragent)
- `ip` отключает опцию [**Скрыть IP-адрес**](../../stealth-mode#ip)
- `xclientdata` отключает опцию [**Убрать заголовок X-Client-Data из HTTP-запросов**](../../stealth-mode#xclientdata)
- `dpi` отключает опцию [**Защищать от DPI**](../../stealth-mode#dpi)

**Примеры**

- `@@||example.com^$stealth` полностью отключает модуль «Антитрекинг» для запросов к `example.com` и поддоменам, кроме блокировки куки и скрытия параметров отслеживания (см.ниже).
- `@@||domain.com^$script,stealth,domain=example.com` отключает модуль «Антитрекинг» только для script-запросов к `domain.com` (и поддоменам) на `example.com` и всех его поддоменах.
- `@@||example.com^$stealth=3p-cookie|dpi` отключает блокировку сторонних куки-файлов и меры защиты от DPI для запросов к `example.com`.

:::note

Блокировка куки и скрытие параметров отслеживания достигается использованием правил с модификаторами [`$cookie`](#cookie-modifier) и [`$removeparam`](#removeparam-modifier). Правила-исключения только с модификатором `$stealth` не дадут желаемого результата. Если вы хотите полностью отключить все функции Антитрекинга для определённого домена, нужно включить в правило все три модификатора: `@@||example.org^$stealth,removeparam,cookie`

:::

:::info Совместимость

- Антитрекинг доступен в AdGuard для Windows, Mac и Android и в Браузерном расширении AdGuard. Все остальные продукты будут игнорировать правила с модификатором `$stealth`.
- Модификатор `$stealth` со специальными опциями поддерживается в AdGuard для Windows, Mac и Android с **CoreLibs версии 1.10 или выше**.

:::

#### **`$urlblock`** {#urlblock-modifier}

Отключает все правила [`$cookie`](#cookie-modifier) и блокировку всех запросов со страниц, соответствующих правилу.

**Примеры**

- `@@||example.com^$urlblock` — любые запросы, отправленные со страниц сайта `example.com` и всех его поддоменов, не будут блокироваться.

:::info Совместимость

In AdGuard for iOS and Safari rules with `$urlblock` work as [$document exclusion](#document-modifier) — unblock everything.

Rules with `$urlblock` modifier are not supported by AdGuard Content Blocker.

:::

#### Generic-правила {#exception-modifiers-generic-rules}

Before we can proceed to the next modifiers, we have to make a definition of *generic rules*. Правило относится к generic-правилам, если его действие не ограничено конкретными доменами. Также поддерживается wildcard-символ `*`.

Например, это generic-правила:

```adblock
###banner
*###banner
#@#.adsblock
*#@#.adsblock
~domain.com###banner
||domain.com^
||domain.com^$domain=~example.com
```

А это уже не generic-правила:

```adblock
domain.com###banner
||domain.com^$domain=example.com
```

#### **`$genericblock`** {#genericblock-modifier}

Отключает все базовые правила generic на страницах, подходящих под правило-исключение.

**Примеры**

- `@@||example.com^$genericblock` отключает базовые правила generic на любых страницах `example.com` и всех поддоменах.

:::info Совместимость

In AdGuard for iOS and Safari rules with `$genericblock` work as [$document exclusion](#document-modifier) — unblock everything.

Rules with `$genericblock` modifier are not supported by AdGuard Content Blocker.

:::

#### **`$generichide`** {#generichide-modifier}

Отключает все [косметические правила](#cosmetic-rules) generic на страницах, соответствующих правилу-исключению.

**Примеры**

- `@@||example.com^$generichide` отключает косметические правила generic на страницах сайта `example.com` и всех его поддоменах.

:::note

You may use a shorter name (alias) instead of using the full modifier name: `$ghide`.

:::

#### **`specifichide`** {#specifichide-modifier}

Отключает все specific-правила скрытия элементов и CSS-правила, но не отключает general-правила. Имеет эффект, противоположный [`$generichide`](#generichide-modifier).

**Примеры**

- `@@||example.org^$specifichide` отключает `example.org##.banner`, но не `##.banner`.

:::note

You may use a shorter name (alias) instead of using the full modifier name: `$shide`.

:::

:::note

Все косметические правила, а не только specific, можно отключить модификатором [`$elemhide`](#elemhide-modifier).

:::

:::info Совместимость

Rules with `$specifichide` modifier are not supported by AdGuard for iOS and Safari and AdGuard Content Blocker.

:::

### Расширенные возможности {#advanced-modifiers}

These modifiers are able to completely change the behavior of basic rules.

<!-- Please keep them sorted -->

| Modifier \ Products                        | [CoreLibs apps][cl-apps] | [AdGuard for Chromium][ext-chr] | [AdGuard for Firefox][ext-ff] | [AdGuard для iOS][ios-app] | [AdGuard для Safari][ext-saf] | [AdGuard Content Blocker][and-cb] |
| ------------------------------------------- |:------------------------:|:-------------------------------:|:-----------------------------:|:--------------------------:|:-----------------------------:|:---------------------------------:|
| [$all](#all-modifier)                       |            ✅             |                ✅                |               ✅               |             ❌              |               ❌               |                 ❌                 |
| [$badfilter](#badfilter-modifier)           |            ✅             |                ✅                |               ✅               |             ✅              |               ✅               |                 ❌                 |
| [$cookie](#cookie-modifier)                 |            ✅             |                ✅                |               ✅               |             ❌              |               ❌               |                 ❌                 |
| [$csp](#csp-modifier)                       |            ✅             |                ✅                |               ✅               |             ❌              |               ❌               |                 ❌                 |
| [$hls](#hls-modifier)                       |            ✅             |                ❌                |               ❌               |             ❌              |               ❌               |                 ❌                 |
| [$inline-font](#inline-font-modifier)       |            ✅             |                ✅                |               ✅               |             ❌              |               ❌               |                 ❌                 |
| [$inline-script](#inline-script-modifier)   |            ✅             |                ✅                |               ✅               |             ❌              |               ❌               |                 ❌                 |
| [$jsonprune](#jsonprune-modifier)           |            ✅             |                ❌                |               ❌               |             ❌              |               ❌               |                 ❌                 |
| [$network](#network-modifier)               |            ✅             |                ❌                |               ❌               |             ❌              |               ❌               |                 ❌                 |
| [$permissions](#permissions-modifier)       |            ✅             |                ⏳                |               ⏳               |             ❌              |               ❌               |                 ❌                 |
| [$redirect](#redirect-modifier)             |            ✅             |                ✅                |               ✅               |             ❌              |               ❌               |                 ❌                 |
| [$redirect-rule](#redirect-rule-modifier)   |            ✅             |                ✅                |               ✅               |             ❌              |               ❌               |                 ❌                 |
| [$referrerpolicy](#referrerpolicy-modifier) |            ⏳             |                ❌                |               ❌               |             ❌              |               ❌               |                 ❌                 |
| [$removeheader](#removeheader-modifier)     |            ✅             |                ✅                |               ✅               |             ❌              |               ❌               |                 ❌                 |
| [$removeparam](#removeparam-modifier)       |            ✅             |                ✅                |               ✅               |             ❌              |               ❌               |                 ❌                 |
| [$replace](#replace-modifier)               |            ✅             |                ❌                |               ✅               |             ❌              |               ❌               |                 ❌                 |
| [noop](#noop-modifier)                      |            ✅             |                ✅                |               ✅               |             ✅              |               ✅               |                 ❌                 |
| [$empty 👎](#empty-modifier "deprecated")    |            ✅             |                ✅                |               ✅               |             ❌              |               ❌               |                 ❌                 |
| [$mp4 👎](#mp4-modifier "deprecated")        |            ✅             |                ✅                |               ✅               |             ❌              |               ❌               |                 ❌                 |

:::note

- ✅ — fully supported
- ✅ * — supported, but reliability may vary or limitations may occur; check the modifier description for more details
<!-- following emoji shall be needed for $referrerpolicy after 1.12 is used in some apps -->
<!-- - 🧩 — may already be implemented in nightly or beta versions but is not yet supported in release versions -->
- ⏳ — feature that has been implemented or is planned to be implemented but is not yet available in any product
- ❌ — not supported
- 👎 — deprecated; still supported but will be removed in the future

:::

#### **`$all`** {#all-modifier}

Модификатор `$all` состоит из [всех модификаторов content-type](#content-type-modifiers) и [`$popup`](#popup-modifier). Например, правило `||example.org^$all` конвертируется в правило:

```adblock
||example.org^$document,subdocument,font,image,media,object,other,ping,script,stylesheet,websocket,xmlhttprequest,popup
```

Этот модификатор нельзя использовать как исключение с маркером `@@`.

#### **`$badfilter`** {#badfilter-modifier}

Правила, содержащие модификатор `$badfilter`, отключают другие базовые правила, на которые они ссылаются. Это означает, что текст отключённого правила должен соответствовать тексту `$badfilter`-правила (за исключением самого модификатора `$badfilter`).

**Примеры**

- `||example.com$badfilter` отключает `||example.com`
- `||example.com$image,badfilter` отключает `||example.com$image`
- `@@||example.com$badfilter` отключает `@@||example.com`
- `||example.com$domain=domain.com,badfilter` отключает `||example.com$domain=domain.com`

Правила с модификатором `$badfilter` могут отключать другие базовые правила для определённых доменов, если они соответствуют следующим условиям:

1. В правиле есть модификатор `$domain`.
1. Правило не имеет отрицания домена `~` в значении модификатора `$domain`.

В этом случае, правило с `$badfilter` отключит соответствующее базовое правило для доменов, указанных как в правиле с `$badfilter`, так и в базовом правиле. Обратите внимание, что [логика wildcard для доменов верхнего уровня (TLD)](#wildcard-for-tld) здесь также применима.

**Примеры**

- `/some$domain=example.com|example.org|example.io` отключено для `example.com` правилом `/some$domain=example.com,badfilter`
- `/some$domain=example.com|example.org|example.io` отключено для `example.com` и `example.org` правилом `/some$domain=example.com|example.org,badfilter`
- `/some$domain=example.com|example.org` и `/some$domain=example.io` полностью отключены правилом `/some$domain=example.com|example.org|example.io,badfilter`
- `/some$domain=example.com|example.org|example.io` полностью отключено правилом `/some$domain=example.*,badfilter`
- `/some$domain=example.*` отключено для `example.com` и `example.org` правилом `/some$domain=example.com|example.org,badfilter`
- `/some$domain=example.com|example.org|example.io` НЕ отключено для `example.com` правилом `/some$domain=example.com|~example.org,badfilter`, поскольку значение модификатора `$domain` содержит отрицание домена

:::info Совместимость

Правила с модификатором `$badfilter` не поддерживаются в AdGuard Content Blocker.

:::

#### **`$cookie`** {#cookie-modifier}

Модификатор `$cookie` полностью меняет поведение правила. Вместо того, чтобы блокировать запрос, этот модификатор позволяет AdGuard блокировать или изменять заголовки `Cookie` или `Set-Cookie`.

**Несколько правил, соответствующих одному запросу**

В случае, когда несколько правил `$cookie` соответствуют одному запросу, мы применим каждое из них по очереди.

**Синтаксис**

```adblock
$cookie [= name[; maxAge = seconds [; sameSite = strategy ]]]
```

где:

- **`name`** — опционально, строка или регулярное выражение для сопоставления с именем куки.
- **`seconds`** — количество секунд, на которое сместится истечение срока действия куки.
- **`strategy`** — строка для стратегии [Same-Site](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie/SameSite) для использования куки.

Например,

```adblock
||example.org^$cookie=NAME;maxAge=3600;sameSite=lax
```

каждый раз, когда AdGuard встречает куки с именем `NAME` в запросе к `example.org`, он будет делать следующее:

- Установит дату истечения срока хранения на текущее время плюс `3600` секунд
- Позволяет куки использовать стратегию [Same-Site](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie/SameSite).

**Экранирование специальных символов**

Если для сопоставления используется регулярное выражение `name`, необходимо экранировать два символа: запятую `,` и знак доллара `$`. Используйте для этого обратный слеш `\`. Например, экранированная запятая будет выглядеть так: `\,`.

**Примеры**

- `||example.org^$cookie` блокирует **все** куки, установленные `example.org`; это эквивалентно установке `maxAge=0`
- `$cookie=__cfduid` блокирует куки CloudFlare везде
- `$cookie=/__utm[a-z]/` блокирует куки Google Analytics везде
- `||facebook.com^$third-party,cookie=c_user` не позволяет Facebook отслеживать вас, даже если вы вошли в систему

Существует два способа деактивации правил `$cookie`: основной предполагает использование исключения с `@@` — `@@||example.org^$cookie`. Альтернативный метод использует исключение `$urlblock` (также входящее в псевдоним исключения `$document` — `$elemhide,jsinject,content,urlblock,extension`). Вот как это работает:

- `@@||example.org^$cookie` разблокирует все куки-файлы, установленные `example.org`
- `@@||example.org^$urlblock` разблокирует все файлы куки, установленные `example.org`, и отключает блокировку всех запросов, отправленных с `example.org`
- `@@||example.org^$cookie=concept` разблокирует один куки-файл с именем `concept`
- `@@||example.org^$cookie=/^_ga_/` разблокирует все куки, соответствующие регулярному выражению

:::caution Ограничения

Правила `$cookie` поддерживают ограниченный список модификаторов: `$domain`, `$~domain`, `$important`, `$third-party` и `$~third-party`.

:::

:::info Совместимость

Правила с модификатором `$cookie` не поддерживаются в AdGuard Content Blocker, AdGuard для iOS и для Safari.

:::

#### **`$csp`** {#csp-modifier}

Этот модификатор полностью меняет поведение страницы. Когда он применяется, правило не блокирует запрос. Вместо этого будут изменены заголовки ответа.

:::info

Чтобы использовать правила этого типа, необходимо базовое понимание слоя безопасности [Политики Безопасности Контента](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy).

:::

Для запросов, подходящих под `$csp`-правило, мы усилим политику безопасности ответа, добавив дополнительную политику, равнозначную содержимому модификатора `$csp`. Правила `$csp` применяются независимо от правил любого другого типа. Прочие базовые правила никак на них не влияют, **кроме правил исключений уровня document** (см. примеры ниже).

**Несколько правил, соответствующих одному запросу**

В случае, когда несколько правил `$csp` соответствуют одному запросу, мы применим каждое из них.

**Синтаксис**

Синтаксис значений `$csp` похож на синтаксис заголовков Политики Безопасности Контента.

Значение `$csp` может быть пустым в случае правил-исключений. См. примеры ниже.

**Примеры**

- `||example.org^$csp=frame-src 'none'` запрещает все фреймы на example.org и его поддоменах.
- `@@||example.org/page/*$csp=frame-src 'none'` отключает все правила с модификатором `$csp`, в точности соответствующим `frame-src 'none'` на всех страницах, подходящих под паттерн правила. Например, правило выше.
- `@@||example.org/page/*$csp` отключает все `$csp`-правила на всех страницах, подходящих под паттерн правила.
- `||example.org^$csp=script-src 'self' 'unsafe-eval' http: https:` отключает инлайн-скрипты на всех страницах, подходящих под паттерн правила.
- `@@||example.org^$document` или `@@||example.org^$urlblock` отключает все `$csp`-правила на всех страницах, подходящих под паттерн правила.

:::caution Ограничения

- Некоторые символы запрещены в значении `$csp`: `,`, `$`.
- `$csp`-правила поддерживают ограниченный список модификаторов: `$domain`, `$important`, `$subdocument`.
- Правила с директивами `report-*` считаются некорректными.

:::

:::info Совместимость

Правила с модификатором `$csp` не поддерживаются в AdGuard Content Blocker, AdGuard для iOS и для Safari.

:::

#### **`$hls`** {#hls-modifier}

Правила `$hls` модифицируют ответ на соответствующий правилу запрос. Они предназначены для удаления сегментов из [HLS-плейлистов (RFC 8216)](https://datatracker.ietf.org/doc/html/rfc8216).

:::note

Слово «сегмент» в окументации означает Media Segment или playlist (как часть Master Playlist): с точки зрения правил `$hls`, Master Playlist и Media Playlist неразличимы.

:::

**Синтаксис**

- `||example.org^$hls=urlpattern` удаляет сегменты, URL которых соответствует паттерну `urlpattern`. Паттерн работает так же, как в базовых URL-правилах, однако символы `/`, `$` и `,` в составе `urlpattern` необходимо экранировать с помощью `\`.
- `||example.org^$hls=/regexp/options` удаляет сегменты, в которых URL-адрес или один из тегов (для определённых параметров, если они есть) соответствуют регулярному выражению `regexp`. Доступные значения `options`:
    - `t` — вместо URL-адреса сегмента проверять каждый тег сегмента на соответствие регулярному выражению. Сегмент с соответствующим тегом будет удалён;
    - `i` — сделать регулярное выражение нечувствительным к регистру символов.

Символы `/`, `$` и `,` должны быть экранированы с помощью `\` внутри `regexp`.

**Исключения**

Базовые URL правила-исключения не отключают правила с модификатором `$hls`. Отключить их можно следующим образом:

- `@@||example.org^$hls` отключает все правила `$hls` для ответов от URL-адресов, соответствующих `||example.org^ URL`.
- `@@||example.org^$hls=text` отключает все правила `$hls`, у которых значение модификатора `$hls` равно `text`, для ответов с URL-адресов, соответствующих `||example.org^ URL`.

:::tip

`$hls` также можно отключить с помощью правил-исключений с модификаторами `$document`, `$content` и `$urlblock`.

:::

:::note

Если несколько правил `$hls` соответствуют одному и тому же запросу, их эффект суммируется.

:::

**Примеры**

- `||example.org^$hls=\/videoplayback^?*&source=dclk_video_ads` удаляет все сегменты с соответствующим URL.
- `||example.org^$hls=/\/videoplayback\/?\?.*\&source=dclk_video_ads/i` делает почти то же самое, но с помощью регулярного выражения вместо URL-паттерна.
- `||example.org^$hls=/#UPLYNK-SEGMENT:.*\,ad/t` удаляет все сегменты с соответствующим тегом.

**О формате HLS-плейлистов**

Из [спецификации](https://datatracker.ietf.org/doc/html/rfc8216) следует:

1. HLS-плейлист — это набор текстовых строк.
1. Строка может быть пустой, быть комментарием (начинается с `#`), тегом (начинается с `#` и имени тега) или URL.
1. URL-строка называется сегментом.
1. Тег может относиться к одному сегменту, т.е. к первой URL-строке, следующей после данного тега, ко всем последующим сегментами (пока не встретится тег с тем же именем) или ко всему плейлисту.

Замечания, касающиеся правил `$hls`:

1. Когда какой-либо сегмент удаляется, все теги, относящиеся только к этому сегменту, тоже удаляются.
1. Теги, относящиеся к нескольким сегментам, удаляются, если все эти сегменты были удалены.
1. Поскольку различные типы тегов невозможно распознать по синтаксису, мы распознаем все теги, указанные в RFC, плюс некоторые нестандартные теги, которые встречались нам в полевых условиях. Любые строки, начинающиеся с `#` и не распознанные как тег, пропускаются без модификации и не сопоставляются с правилами.
1. Мы не сопоставляем теги, которые относятся ко всему плейлисту, и правила `$hls` не могут быть использованы для их удаления, поскольку правила `$hls` предназначены для удаления сегментов. Если вы знаете, что делаете, вы можете использовать правила `$replace` для удаления или перезаписи только одного тега из плейлиста.

**Пример работы правил:**

<details>
<summary>Исходный ответ</summary>

```text
#EXTM3U
#EXT-X-TARGETDURATION:10
#EXTINF,5
preroll.ts
#UPLYNK-SEGMENT:abc123,ad
#UPLYNK-KEY:aabb1122
#EXT-X-DISCONTINUITY
#EXTINF,10
01.ts
#EXTINF,10
02.ts
#UPLYNK-SEGMENT:abc123,segment
#UPLYNK-KEY:ccdd2233
#EXT-X-DISCONTINUITY
#EXTINF,10
01.ts
#EXTINF,10
02.ts
#EXT-X-ENDLIST
```

</details>

<details>
<summary>Применённые правила</summary>

```adblock
||example.org^$hls=preroll
||example.org^$hls=/#UPLYNK-SEGMENT:.*\,ad/t
```

</details>

<details>
<summary>Модифицированный ответ</summary>

```text
#EXTM3U
#EXT-X-TARGETDURATION:10
#UPLYNK-SEGMENT:abc123,segment
#UPLYNK-KEY:ccdd2233
#EXT-X-DISCONTINUITY
#EXTINF,10
01.ts
#EXTINF,10
02.ts
#EXT-X-ENDLIST
```

</details>

:::caution Ограничения

- Правила `$hls` разрешены только [**в доверенных фильтрах**](#trusted-filters).
- Правила `$hls` совместимы с модификаторами `$domain`, `$third-party`, `$app`, `$important`, `$match-case` и `$xmlhttprequest`.
- Правила `$hls` применимы только к HLS-плейлистам, т. е. к тексту в кодировке UTF-8, начинающемуся со строки `#EXTM3U`. Никакие другие ответы не будут модифицированы этими правилами.
- Правила `$hls` не будут применены к ответам размером больше 3 МБ.

:::

:::info Совместимость

Правила с модификатором `$hls` поддерживаются в AdGuard для Windows, Mac и Android с **CoreLibs версии 1.10 или выше**.

:::

#### **`$inline-script`** {#inline-script-modifier}

Модификатор `$inline-script` — это своего рода сокращение для модификатора [`$csp`](#csp-modifier) с определённым значением. Например, правило `||example.org^$inline-script` конвертируется в такое правило:

```adblock
||example.org^$csp=script-src 'self' 'unsafe-eval' http: https: data: blob: mediastream: filesystem:
```

#### **`$inline-font`** {#inline-font-modifier}

Модификатор `$inline-font` — это своего рода сокращение для модификатора [`$csp`](#csp-modifier) с определённым значением. Например, правило `||example.org^$inline-font` конвертируется в такое правило:

```adblock
||example.org^$csp=font-src 'self' 'unsafe-eval' http: https: data: blob: mediastream: filesystem:
```

#### **`$jsonprune`** {#jsonprune-modifier}

Правила `$jsonprune` модифицируют ответ на соответствующий запрос, удаляя JSON-элементы, которые соответствуют модифицированному выражению [JSONPath](https://goessner.net/articles/JsonPath/). Эти правила не изменяют ответы, которые не являются действительными JSON-документами.

В AdGuard для Windows, Mac и Android **с CoreLibs версии 1.11 или выше** `$jsonprune` также поддерживается модификация JSONP-документов (padded JSON).

**Синтаксис**

- `||example.org^$jsonprune=expression` удаляет из ответа элементы, соответствующие изменённому JSONPath-выражению `expression`.

Из-за особенностей работы парсинга правил, символы `$` и `,` должны быть экранированы символом `\` внутри `expression`.

Модифицированный синтаксис JSONPath имеет следующие отличия от оригинального:

1. Script expressions не поддерживаются.
1. Поддерживаемые filter expressions:
    - `?(has <key>)` — true, если текущий объект обладает свойством key.
    - `?(key-eq <key> <value>)` — true, если текущий объект обладает свойством key и его значение равно указанному хначению.
    - `?(key-substr <key> <value>)` — true, если указанное значение является подстрокой значения указанного ключа текущего объекта.
1. Пробелы вне двойных или одинарных кавычек игнорируются.
1. Можно использовать строки как с двойными, так и с одинарными кавычками.
1. Выражения, оканчивающиеся на `..`, не поддерживаются.
1. Разрешено указывать несколько срезов массива (array slices) в квадратных скобках.

Существуют различные онлайн-инструменты, которые делают работу с выражениями JSONPath удобнее:

https://www.site24x7.com/tools/jsonpath-finder-validator.html https://jsonpathfinder.com/ https://jsonpath.com/

Обратите внимание, что различные имплементации JSONPath обладают уникальными особенностями и могут быть несовместимы друг с другом.

**Исключения**

Базовые URL правила-исключения не отключают правила с модификатором `$jsonprune`. Отключить их можно следующим образом:

- `@@||example.org^$jsonprune` отключает все правила `$jsonprune` для ответов от URL-адресов, соответствующих `||example.org^`.
- `@@||example.org^$jsonprune=text` отключает все правила `$jsonprune`, у которых значение модификатора `jsonprune` равно `text`, для ответов с URL-адресов, соответствующих `||example.org^`.

`$jsonprune` также можно отключить с помощью правил-исключений с модификаторами `$document`, `$content` и `$urlblock`.

:::note

Когда одному и тому же запросу соответствует несколько правил с модификатором `$jsonprune`, они сортируются в лексикографическом порядке: первое правило применяется к исходному ответу, а каждое из оставшихся правил применяется к результату применения предыдущего.

:::

**Примеры**

- `||example.org^$jsonprune=\$..[one\, "two three"]` удаляет все вхождения ключей one и two three в любом месте JSON-документа.

<details>
<summary>До</summary>

```json
{
    "one": 1,
    "two": {
        "two three": 23,
        "four five": 45
    }
}
```

</details>

<details>
<summary>После</summary>

```json
{
    "two": {
        "four five": 45
    }
}
```

</details>

- `||example.org^$jsonprune=\$.a[?(has ad_origin)]` удаляет всех прямых потомков `a`, которые обладают свойством `ad_origin`.

<details>
<summary>До</summary>

```json
{
    "a": [
        {
            "ad_origin": "https://example.org",
            "b": 42
        },
        {
            "b": 1234
        }
    ]
}
```

</details>

<details>
<summary>После</summary>

```json
{
    "a": [
        {
            "b": 1234
        }
    ]
}
```

</details>

- `||example.org^$jsonprune=\$.*.*[?(key-eq 'Some key' 'Some value')]` удаляет все элементы на уровне вложенности 3, обладающие свойством Some key, равным Some value.

<details>
<summary>До</summary>

```json
{
    "a": {"b": {"c": {"Some key": "Some value"}, "d": {"Some key": "Other value"}}},
    "e": {"f": [{"Some key": "Some value"}, {"Some key": "Other value"}]}
}
```

</details>

<details>
<summary>После</summary>

```json
{
    "a": {"b": {"d": {"Some key": "Other value"}}},
    "e": {"f": [{"Some key": "Other value"}]}
}
```

</details>

**Вложенные выражения JSONPath**

В AdGuard для Windows, Mac и Android **с CoreLibs версии 1.11 или выше** выражения JSONPath могут быть использованы как ключи в выражениях фильтра.

- `||example.org^$jsonprune=\$.elems[?(has "\$.a.b.c")]` удаляет всех прямых потомков `elems`, которые обладают свойством, выбираемым JSONPath-выражением `$.a.b.c`.

<details>
<summary>До</summary>

```json
{
    "elems": [
        {
            "a": {"b": {"c": 123}},
            "k": "v"
        },
        {
            "d": {"e": {"f": 123}},
            "k1": "v1"
        }
    ]
}
```

</details>

<details>
<summary>После</summary>

```json
{
    "elems": [
        {
            "d": {"e": {"f": 123}},
            "k1": "v1"
        }
    ]
}
```

</details>

- `||example.org^$jsonprune=\$.elems[?(key-eq "\$.a.b.c" "abc")]` удаляет всех прямых потомков `elems`, которые обладают свойством, выбираемым выражением JSONPath `$.a.b.c` со значением, равным `"abc"`.

<details>
<summary>До</summary>

```json
{
    "elems": [
        {
            "a": {"b": {"c": 123}},
        },
        {
            "a": {"b": {"c": "abc"}}
        }
    ]
}
```

</details>

<details>
<summary>После</summary>

```json
{
    "elems": [
        {
            "a": {"b": {"c": 123}}
        }
    ]
}
```

</details>

:::caution Ограничения

- Правила `$jsonprune` совместимы с модификаторами `$domain`, `$third-party`, `$app`, `$important`, `$match-case` и `$xmlhttprequest`.
- Правила `$jsonprune` не будут применены к ответам размером больше 3 МБ.

:::

:::info Совместимость

Правила с модификатором `$jsonprune` поддерживаются в AdGuard для Windows, Mac и Android с **CoreLibs версии 1.10 или выше**.

:::

#### **`$network`** {#network-modifier}

По сути, это правила типа Firewall, позволяющие полностью блокировать или разблокировать доступ к указанному удалённому адресу.

1. Правила `$network` соответствуют **только IP-адресам**! Вы не можете использовать их, чтобы блокировать или разблокировать доступ к домену.
2. Чтобы сопоставить адрес IPv6, вы должны использовать сжатый синтаксис, например, использовать `[2001:4860:4860::8888]$network` вместо `[2001:4860:4860:0:0:0:0:8888]$network`.
3. Правило белого списка `$network` заставляет AdGuard обходить данные до соответствующей конечной точки, т. е. никакой дальнейшей фильтрации не будет.
4. Если часть IP начинается и заканчивается символом `/`, она рассматривается как регулярное выражение.

Рекомендуем ознакомиться с [этой статьёй](#regexp-support) для лучшего понимания регулярных выражений.

:::caution Ограничения

The `$network` modifier can only be used in rules together with the `$app` and `$important` modifiers, and not with any other modifiers.

:::

**Примеры**

- `174.129.166.49:3478^$network` блокирует доступ к `174.129.166.49:3478` (но не к `174.129.166.49:34788`).
- `[2001:4860:4860::8888]:443^$network` блокирует доступ к `[2001:4860:4860::8888]:443`.
- `174.129.166.49$network` блокирует доступ к `174.129.166.49:*`.
- `@@174.129.166.49$network` заставляет AdGuard направлять трафик в конечную точку. Никакие другие правила применяться не будут.
- `/.+:3[0-9]{4}/$network` блокирует доступ к диапазанону портов 30000–39999.
- `/8.8.8.(:?8|4)/$network` блокирует доступ к `8.8.8.8` и к `8.8.8.4`.

:::info Совместимость

Только AdGuard для Windows, Mac и Android имеют технические возможности для поддержки правил с модификатором `$network`.

:::

#### **`$permissions`** {#permissions-modifier}

Этот модификатор полностью меняет поведение правила. Когда он применяется, правило не блокирует запрос. Вместо этого будут изменены заголовки ответа.

:::info

Чтобы использовать правила этого типа, необходимо базовое понимание слоя безопасности [Feature Policy](https://developer.mozilla.org/ru/docs/Web/HTTP/Permissions_Policy).

:::

Для запросов, соответствующих правилу `$permissions`, AdGuard усиливает «политику функций» ответа, добавляя дополнительную политику, равную содержимому модификатора `$permissions`. Правила `$permissions` применяются независимо от правил любого другого типа. Прочие базовые правила никак на них не влияют, **кроме правил исключений уровня document** (см. примеры).

**Несколько правил, соответствующих одному запросу.**

В случае, когда несколько правил `$permissions` соответствуют одному запросу, AdGuard применит каждое из них.

**Синтаксис**

Синтаксис значения `$permissions` подобен заголовку `Permissions-Policy` [синтаксису](https://developer.mozilla.org/ru/docs/Web/HTTP/Permissions_Policy) с одним исключением: запятая, разделяющая несколько функций **, ДОЛЖНА** экранироваться — см. примеры ниже. Список доступных директив доступен [здесь](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Permissions-Policy#directives).

Значение `$permissions` может быть пустым в случае правил-исключений — смотрите примеры ниже.

**Примеры**

- `||example.org^$permissions=autoplay=()` disallows autoplay media requested through the `HTMLMediaElement` interface across `example.org`.
- `@@||example.org/page/*$permissions=autoplay=()` disables all rules with the `$permissions` modifier exactly matching `autoplay=()` on all the pages matching the rule pattern. Например, правило выше.
- `@@||example.org/page/*$permissions` отключает все `$permissions`-правила на всех страницах, подходящих под паттерн правила.
- `$domain=example.org|example.com,permissions=storage-access=()\, camera=()` disallows using the Storage Access API to request access to unpartitioned cookies and using video input devices across `example.org` and `example.com`.
- `@@||example.org^$document` или `@@||example.org^$urlblock` отключает все `$permission`-правила на всех страницах, подходящих под паттерн правила.

:::caution Ограничения

1. В значении `$permissions` запрещён символ `$`;
2. `$permissions`-правила совместимы с ограниченным списком модификаторов: `$domain`, `$important` и `$subdocument`.

:::

:::info Совместимость

Правила с модификатором `$permissions` поддерживаются в AdGuard для Windows, Mac и Android с **CoreLibs версии 1.11 или выше**.

:::

#### **`$redirect`** {#redirect-modifier}

AdGuard способен перенаправлять веб-запросы на локальный «ресурс».

**Синтаксис**

AdGuard использует тот же синтаксис правил фильтрации, что и uBlock Origin. Также он совместим с модификатором ABP `$rewrite=abp-resource`.

`$redirect` — это модификатор для [базовых правил фильтрации](#basic-rules), поэтому правила с этим модификатором поддерживают остальные базовые модификаторы, такие как `$domain`, `$third-party`, `$script` и т. д.

Значение модификатора `$redirect` должно быть именем ресурса, который будет использован для переадресации.

##### Отключение правил `$redirect`

- `||example.org/script.js$script,redirect=noopjs` — это правило перенаправляет все запросы к `example.org/script.js` на ресурс с именем `noopjs`.
- `||example.org/test.mp4$media,redirect=noopmp4-1s` — это правило перенаправляет все запросы к `example.org/script.js` на ресурс с именем `noopmp4-1s`.
- `@@||example.org^$redirect` отключит все правила `$redirect` для URL-адресов, соответствующих `||example.org^`.
- `@@||example.org^$redirect=nooptext` отключит все правила с `$redirect=nooptext` для любого запроса, который соответствует `||example.org^`.

Больше информации о редиректах и их использовании доступно [на GitHub](https://github.com/AdguardTeam/Scriptlets#redirect-resources).

##### Приоритеты правил `$redirect` {#redirect-rule-priorities}

У правил `$redirect` более высокий приоритет, чем у обычных базовых правил блокировки. Это означает, что если существует базовое правило блокировки, то правило `$redirect` будет его отменять. У правил белого списка с пометкой `@@` более высокий приоритет, чем у правил `$redirect`. Если базовое правило с модификатором `$important` и правило `$redirect` соответствуют одному и тому же URL-адресу, последнее переопределяется, если оно также не помечено как `$important`.

<!-- Please do not replace `>` by `→` -->

**`$important` > `@@` > `$redirect` > `базовые правила`.**

Перейдите к [приоритетам правил](#rule-priorities) для более подробной информации.

:::info Совместимость

- Правила с модификатором `$redirect` не поддерживаются в AdGuard Content Blocker, AdGuard для iOS и для Safari.
- `$redirect` в uBlock Origin поддерживает указание приоритета, например, `$redirect=noopjs:42`. AdGuard не поддерживает его и вместо этого просто отбрасывает приоритетный постфикс.

:::

#### **`$redirect-rule`** {#redirect-rule-modifier}

По сути это другое имя [`$redirect`](#redirect-modifier), поскольку он имеет те же значения «перенаправления» и почти аналогичную логику. Разница в том, что `$redirect-rule` применяется только в том случае, если целевой запрос заблокирован другим базовым правилом.

Перейдите к [приоритетам правил](#rule-priorities) для более подробной информации.

Отключение `$redirect-rule` работает точно так же, как для обычных правил `$redirect`. Даже более того, `@@||example.org^$redirect` будет отключать как правило `$redirect`, так и `$redirect-rule`.

**Примеры**

```adblock
||example.org/script.js
||example.org^$redirect-rule=noopjs
```

В этом случае только запросы к `example.org/script.js` будут перенаправлены на `noopjs`. Все остальные запросы к `example.org` останутся без изменений.

:::info Совместимость

Правила с модификатором `$redirect-rule` не поддерживается в AdGuard Content Blocker, AdGuard для iOS и для Safari.

:::

#### **`$referrerpolicy`** {#referrerpolicy-modifier}

Эти правила позволяют переопределить политику реферера страницы [](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Referrer-Policy). В ответах на соответствующие запросы все заголовки `Referrer-Policy` заменит один заголовок со значением, равным значению модификатора правила сопоставления. Если ответ содержит HTML-документ с тегом `<meta name="referrer"...`, то атрибут `content` этого тега также будет заменён на значение модификатора.

Правило исключения со значением модификатора отключает правило блокировки с тем же значением. Правило исключения без значения модификатора отключает все совпадающие правила referrer-policy.

Если запрос соответствует нескольким правилам `$referrerpolicy`, не отключённым исключениями, то применяется только одно из них (какое именно — не уточняется).

**Примеры**

- `|||example.com^$referrerpolicy=unsafe-url` переопределяет политику referrer для `example.com` с `unsafe-url`.
- `@@||example.com^$referrerpolicy=unsafe-url` отключает предыдущее правило.
- `@@|||example.com/abcd.html^$referrerpolicy` отключает все правила `$referrerpolicy` на `example.com/abcd.html`.

:::caution Ограничения

Правила `$referrerpolicy` совместимы только [с модификаторами типа контента](#content-type-modifiers): `$document` и `$subdocument`.

:::

:::info Совместимость

Правила с модификатором `$referrerpolicy` поддерживаются в AdGuard для Windows, Mac и Android с **CoreLibs версии 1.12 или выше**.

:::

#### **`$removeheader`** {#removeheader-modifier}

Правила с модификатором `$removeheader` предназначены для того, чтобы убирать заголовки HTTP-запросов и ответов. Изначальная мотивация для создания этого типа правил заключалась в том, чтобы иметь возможность избавиться от заголовка `Refresh`, который часто используется для перенаправления пользователей на нежелательную страницу. Однако применение данного модификатора не ограничивается этим случаем.

Как и в случае с `$csp`, `$redirect`, `$removeparam` и `$cookie`, этот модификатор существует независимо, правила с ним не зависят от обычных базовых правил, то есть регулярные выражения или блокирующие правила никак на них не повлияют. По умолчанию они работают только применительно к заголовкам ответов. Но вы также можете изменить его, чтобы удалить заголовки из HTTP-запросов.

**Синтаксис**

**Базовый синтаксис**

- `||example.org^$removeheader=header-name` убирает заголовок **ответа** с названием `header-name`
- `||example.org^$removeheader=request:header-name` убирает заголовок **запроса** с названием `header-name`

`$removeheader` нечувствителен к регистру, но мы настоятельно рекомендуем всегда использовать нижний регистр.

**Отрицание `$removeheader`**

Этот тип правил работает почти так же, как и с модификаторами `$csp` и `$redirect`.

Используйте `@@`, чтобы отменить `$removeheader`:

- `@@||example.org^$removeheader` отменяет **все** правила `$removeheader` для URL-адресов, соответствующих `||example.org^`.
- `@@||example.org^$removeheader=header` отменяет все правила с `$removeheader=header` для любого запроса, соответствующего `||example.org^`.

Правила с `$removeheader` также можно отключить, используя правила-исключения `$document` и `$urlblock`. Но базовые правила-исключения без модификаторов не смогут этого сделать. Например, `@@||example.com^` не отключит `$removeheader=p` для запросов к `example.com`, а `@@||example.com^$urlblock` отключит.

:::note

В случае, когда несколько правил с `$removeheader` соответствуют одному запросу, мы будем применять их все по очереди.

:::

**Примеры**

- |`|example.org^$removeheader=refresh` убирает заголовок `Refresh` из всех HTTP-ответов, возвращённых `example.org` и его поддоменами.
- `||example.org^$removeheader=request:x-client-data` убирает заголовок `X-Client-Data` из всех HTTP-запросов.
- Данный блок правил убирает заголовки `Refresh` и `Location` из всех HTTP-ответов, возвращённых `example.org`, кроме запросов к `example.org/path/*`, для которого заголовки не будут убраны:

    ```adblock
    ||example.org^$removeheader=refresh
    ||example.org^$removeheader=location
    @@||example.org/path/$removeheader
    ```

:::caution Ограничения

1. Этот тип правил может быть использован [**только в доверенных фильтрах**](#trusted-filters).

1. Чтобы избежать потенциальных проблем с безопасностью, `$removeheader` не может убрать заголовки из списка ниже:
    - `access-control-allow-origin`
    - `access-control-allow-credentials`
    - `access-control-allow-headers`
    - `access-control-allow-methods`
    - `access-control-expose-headers`
    - `access-control-max-age`
    - `access-control-request-headers`
    - `access-control-request-method`
    - `origin`
    - `timing-allow-origin`
    - `allow`
    - `cross-origin-embedder-policy`
    - `cross-origin-opener-policy`
    - `cross-origin-resource-policy`
    - `content-security-policy`
    - `content-security-policy-report-only`
    - `expect-ct`
    - `feature-policy`
    - `origin-isolation`
    - `strict-transport-security`
    - `upgrade-insecure-requests`
    - `x-content-type-options`
    - `x-download-options`
    - `x-frame-options`
    - `x-permitted-cross-domain-policies`
    - `x-powered-by`
    - `x-xss-protection`
    - `public-key-pins`
    - `public-key-pins-report-only`
    - `sec-websocket-key`
    - `sec-websocket-extensions`
    - `sec-websocket-accept`
    - `sec-websocket-protocol`
    - `sec-websocket-version`
    - `p3p`
    - `sec-fetch-mode`
    - `sec-fetch-dest`
    - `sec-fetch-site`
    - `sec-fetch-user`
    - `referrer-policy`
    - `content-type`
    - `content-length`
    - `accept`
    - `accept-encoding`
    - `host`
    - `connection`
    - `transfer-encoding`
    - `upgrade`

1. Правила с `$removeheader` совместимы с модификаторами `$domain`, `$third-party`, `$app`, `$important`, `$match-case`, а также [модификаторами типа content](#content-type-modifiers), такими как `$script` и `$stylesheet`. Правила, содержащие другие модификаторы, считаются некорректными и не будут применены.

:::

:::info Совместимость

Правила с модификатором `$removeheader` поддерживаются в AdGuard для Windows, Mac и Android и Браузерном расширении AdGuard для Chrome, Firefox и Edge.

:::

#### **`$removeparam`** {#removeparam-modifier}

:::note

Модификатор `$removeparam` — это полный аналог модификатора `$queryprune`. Поскольку модификатор `$queryprune` считается устаревшим, мы рекомендуем везде использовать только модификатор `$removeparam`.

:::

Правила с модификатором `$removeparam` предназначены для того, чтобы убирать параметры запроса из URL-запросов. Такие правила применяются только к запросам типов `GET`, `HEAD`, `OPTIONS` и иногда к `POST`.

Правила с модификатором `$removeparam`, не содержащие [модификаторов типа контента](#content-type-modifiers), будут соответствовать только тем запросам, которые имеют тип контента `document`.

**Синтаксис**

**Базовый синтаксис**

- `$removeparam=param` убирает параметр запроса с именем `param` из URL любого запроса. Например, запрос к `http://example.com/page?param=1&&another=2` будет преобразован в `http://example.com/page?another=2`.

Базовый синтаксис `$removeparam` поддерживается начиная с версии 1.7 [CoreLibs](https://adguard.com/en/blog/introducing-corelibs.html) и версии 3.6 Браузерного расширения AdGuard.

**Регулярные выражения**

Вы также можете использовать регулярные выражения для соответствия параметрам запроса и/или их значениям:

- `$removeparam=/regexp/[options]` убирает из URL-адреса любого запроса все параметры, соответствующие заданному регулярному выражению `regexp`. В отличие от базового синтаксиса, это означает *«‎убрать параметры запроса, нормализованные к строке `name=value`, которая соответствует `регулярному выражению`»*. `[options]` — это список опций регулярного выражения. На данный момент единственная поддерживаемая опция — это `i`, делающая соответствие нечувствительным к регистру.

**Экранирование специальных символов**

Не забывайте экранировать специальные символы, такие как `,`, `/` и `$` в регулярных выражениях. Используйте для этого символ `\`. Например, экранированная запятая должна выглядеть так: `\,`.

:::note

Правила с регулярными выражениями смотрят как на имя, так и на значение параметра. Чтобы свести к минимуму ошибки, рекомендуем начинать регулярное выражение с `/^`, если только вы не хотите специально работать со значениями параметров.

:::

Мы будем стараться обнаруживать и игнорировать неэкранированные символы `$` автоматически, используя следующее правило большого пальца — это не разделитель опций, если:

1. Оно выглядит как `$/`;
1. Существует другой символ слеша `/` слева от него;
1. Существует другой неэкранированный символ `$` слева от этого символа слеша.

**Убрать все параметры запроса**

Укажите «‎голый» `$removeparam`, чтобы убрать все параметры запроса:

- `||example.org^$removeparam` убирает все параметры запроса из URL, соответствующего `||example.org^`.

**Инверсия**

Используйте `~`, чтобы применить инверсию:

- `$removeparam=~param` убирает все параметры запроса с именем, отличным от `param`.
- `$removeparam=~/regexp/` убирает все параметры запроса, которые не соответствуют заданному регулярному выражению `regexp`.

**Отмена `$removeparam`**

Этот тип правил работает практически так же, как и в случае с модификаторами [`$csp`](#csp-modifier) и [`$redirect`](#redirect-modifier).

Используйте `@@`, чтобы отменить `$removeparam`:

- `@@||example.org^$removeparam` отменяет все правила `$removeparam` для URL, соответствующих `||example.org^`.
- `@@||example.org^$removeparam=param` отменяет правило с `$removeparam=param` для любого запроса, соответствующего `||example.org^`.
- `@@||example.org^$removeparam=/regexp/` отменяет правило с `$removeparam=/regexp/` для любого запроса, соответствующего `||example.org^`.

**Несколько правил, соответствующих одному запросу**

В случае, когда несколько правил с `$removeparam` соответствуют одному запросу, они все будут применены по очереди.

**Примеры**

```adblock
$removeparam=/^(utm_source|utm_medium|utm_term)=/
$removeparam=/^(utm_content|utm_campaign|utm_referrer)=/
@@||example.com^$removeparam
```

С этими правилами некоторые [UTM-параметры](https://ru.wikipedia.org/wiki/UTM-метки) будут удалены из любого запроса, но в запросах к `example.com` не будут удаляться совсем. Например: `http://google.com/page?utm_source=s&utm_referrer=fb.com&utm_content=img` будет преобразован в `http://google.com/page`, но `http://example.com/page?utm_source=s&utm_referrer=fb.com&utm_content=img` вообще не будет затронут этим правилом блокировки.

- `$removeparam=utm_source` убирает параметр `utm_source` из всех запросов.

- `$removeparam=/utm_.*/` removes all `utm_* query` parameters from URL queries of any request, e.g. a request to `http://example.com/page?utm_source=test` will be transformed to `http://example.com/page`.

- `$removeparam=/^utm_source=campaign$/` removes `utm_source` query parameter with the value equal to `campaign`. Не затрагивает другие параметры `utm_source`.

**Отмена одного правила `$removeparam` и замена его другим**

```adblock
$removeparam=/^(gclid|yclid|fbclid)=/
@@||example.com^$removeparam=/^(gclid|yclid|fbclid)=/
||example.com^$removeparam=/^(yclid|fbclid)=/
```

При помощи этих правил из всех запросов убираются Click ID от Google, Yandex, и Facebook. Есть одно исключение: Google Click ID (gclid) не будет удалён из запросов к example.com.

**Отмена `$removeparam` для всех параметров**

```adblock
$removeparam=/^(utm_source|utm_medium|utm_term)=/
$removeparam=/^(utm_content|utm_campaign|utm_referrer)=/
@@||example.com^$removeparam
```

С этими правилами некоторые UTM-параметры будут удалены из любого запроса, но в запросах к `example.org` не будут удаляться совсем.

Правила `$removeparam` также можно отключить с помощью правил-исключений `$document` и `$urlblock`. Но базовые правила исключений без модификаторов не могут этого сделать. Например, `@@||example.com^` не отключит `$removeparam=p` для запросов к **example.com**, а вот `@@||example.com^$urlblock` — отключит.

:::caution Ограничения

- Правила с модификатором `$removeparam` могут быть использованы [**только в доверенных фильтрах**](#trusted-filters).
- `$removeparam` rules are compatible with [basic modifiers](#basic-rules-basic-modifiers), [content-type modifiers](#content-type-modifiers), and with `$important` and `$app` modifiers. Rules with any other modifiers are considered invalid and will be discarded.

:::

:::info Совместимость

- Правила с модификатором `$removeparam` поддерживаются в AdGuard для Windows, Mac и Android и Браузерном расширении AdGuard для Chrome, Firefox и Edge.
- Синтаксис регулярных выражений `$removeparam` поддерживается Браузерным расширением AdGuard 4.0 и AdGuard для Windows, Mac и Android, **с CoreLibs версии 1.8 или выше**.
- Типы запросов `POST` поддерживаются только в AdGuard для Windows, Mac и Android** с CoreLibs версии 1.10 или выше**.

:::

#### **`$replace`** {#replace-modifier}

Этот модификатор полностью меняет поведение страницы. Когда он применяется, правило не блокирует запрос. Вместо этого ответ будет модифицирован.

Вам потребуется знание регулярных выражений, чтобы использовать модификатор `$replace`.

**Функции**

- Правила `$replace` применяются к любому текстовому ответу, но не будут применяться к binary (`media`, `image`, `object` и т. д.).
- Правила `$replace` не применяются, если размер исходного ответа превышает 3 МБ.
- Правила `$replace` обладают более высоким приоритетом, чем другие базовые правила (**включая** правила-исключения). Так что, если запрос соответствует двум различным правилам, одно из которых имеет модификатор `$replace`, применится именно это правило.
- Правила-исключения уровня document с модификаторами `$content` или `$document` отменяют срабатывание правил `$replace`, даже если запрос им соответствует.
- Прочие правила-исключения уровня document (модификаторы `$generichide`, `$elemhide` или `$jsinject`) применяются вместе с правилами `$replace`. Это означает, что вы можете изменять содержимое страницы при помощи правила `$replace` и одновременно отменять косметические правила.

Значение `$replace` может быть пустым в случае правил-исключений. Более подробную информацию вы найдёте в разделе с примерами.

**Несколько правил, соответствующих одному запросу**

В случае, когда несколько правил `$replace` соответствуют одному запросу, мы применим каждое из них. **Правила будут применяться в алфавитном порядке.**

**Синтаксис**

В целом синтаксис `$replace` аналогичен замене регулярными выражениями [в Perl](http://perldoc.perl.org/perlrequick.html#Search-and-replace).

```text
replace = "/" regexp "/" replacement "/" modifiers
```

- **r`egexp`** — регулярное выражение.
- **`replacement`** — строка, которая будет использована для замены строки в соответствии с `regexp`.
- **`modifiers `** — флаги регулярных выражений. Например, `i` — поиск без учёта регистра, или `s` — режим одной строки.

В значении `$replace` необходимо экранировать два символа: запятую `,` и знак доллара `$`. Используйте для этого обратный слеш `\`. Например, экранированная запятая будет выглядеть так: `\,`.

**Примеры**

```adblock
||example.org^$replace=/(<VAST[\s\S]*?>)[\s\S]*<\/VAST>/\$1<\/VAST>/i
```

У этого правила три части:

- `Регулярное выражение` —`(<VAST(.|\s)*?>)(.|\s)*<\/VAST>`;
- `Замена` — `\$1<\/VAST>` где `$` экранируется;
- `Флаги регулярного выражения` — `i` для поиска без учёта регистра.

Здесь вы можете увидеть, как работает это правило: http://regexr.com/3cesk

**Правила `$replace`**

1. `||example.org^$replace=/X/Y/`
2. `||example.org^$replace=/Z/Y/`
3. `@@||example.org/page/*$replace=/Z/Y/`

- Правила 1 и 2 будут применены ко всем запросам, отправленным к `example.org`.
- Правило 2 отключено для запросов, соответствующих `||example.org/page/`, **но правило 1 при этом всё равно работает!**

**Отключение правил `$replace`**

- `@@||example.org^$replace` отключит все правила `$replace`, соответствующие `||example.org^`.
- `@@||example.org^$document` или `@@||example.org^$content` отключит все правила `$replace`, **исходящие** со страниц домена `example.org`, **включая саму эту страницу**.

:::caution Ограничения

Правила с модификатором `$replace` могут быть использованы [**только в доверенных фильтрах**](#trusted-filters).

:::

:::info Совместимость

Правила с модификатором `$replace` поддерживаются в AdGuard для Windows, Mac и Android и Браузерном расширении AdGuard для Firefox. Такие правила не работают в расширениях для других браузеров, потому что они не могут модифицировать содержимое страниц на сетевом уровне.

:::

#### **`noop`** {#noop-modifier}

Модификатор `noop` не делает ничего и может быть использован исключительно в целях улучшения читабельности правил. Он состоит из последовательности символов нижнего подчёркивания (`_`) любой длины и может фигурировать в правиле столько раз, сколько требуется.

**Примеры**

```adblock
||example.com$_,removeparam=/^ss\\$/,_,image
||example.com$replace=/bad/good/,___,~third-party
```

:::info Совместимость

Правила с модификатором `noop` не поддерживаются в AdGuard Content Blocker.

:::

#### **`$empty` (устаревший)** {#empty-modifier}

:::caution Скоро устареет

Этот модификатор считается устаревшим. Вместо него теперь используется [модификатор `$redirect`](#redirect-modifier). Правила с `$empty` всё ещё поддерживаются и преобразуются в `$redirect=nooptext`, но в будущем перестанут поддерживаться.

:::

Обычно заблокированный запрос выглядит для браузера как ошибка сервера. В случае применения модификатора `$empty`, AdGuard эмулирует пустой ответ сервера со статусом `200 OK`.

**Примеры**

- `||example.org^$empty` возвращает пустой ответ для всех запросов к домену `example.org` и всех его поддоменов.

:::info Совместимость

Правила с модификатором `$empty` не поддерживаются в AdGuard Content Blocker, AdGuard для iOS и для Safari.

:::

#### **`$mp4` (устаревший)** {#mp4-modifier}

:::caution Скоро устареет

Этот модификатор считается устаревшим. Вместо него теперь используется [модификатор `$redirect`](#redirect-modifier). Правила с `$mp4` всё ещё поддерживаются и преобразуются в `$redirect=noopmp4-1s,media`, но в будущем перестанут поддерживаться.

:::

В качестве ответа на заблокированный запрос AdGuard возвращает короткую видео-заглушку.

**Примеры**

- `||example.com/videos/$mp4` блокирует загрузку видео с адресов `||example.com/videos/*` и заменяет ответ на видео-заглушку.

:::info Совместимость

Правила с модификатором `$mp4` не поддерживаются в AdGuard Content Blocker, AdGuard для iOS и для Safari.

:::

### Приоритеты правил {#rule-priorities}

Каждое правило имеет свой приоритет, что необходимо, когда запросу соответствует несколько правил и фильтрующий механизм должен выбрать одно из них. Приоритет измеряется целым положительным числом.

:::примечание Конфликты

Если два правила с одинаковым приоритетом соответствуют одному и тому же запросу, то от реализации механизма фильтрации зависит, какое из них будет выбрано.

:::

:::info

Концепция приоритетов правил становится всё более важной в свете Manifest V3, поскольку существующие правила должны быть преобразованы в правила declarativeNetRequest.

:::

#### Расчёт приоритетов

Для расчёта приоритета мы разделили модификаторы на разные группы. Эти группы ранжируются по степени приоритетности, от низшей к высшей. Модификатор, существенно сужающий область действия правила, увеличивает вес его общего приоритета. И наоборот, если правило применяется к более широкому кругу запросов, то его приоритет снижается.

Следует отметить, что существуют случаи, когда модификатор с одним параметром имеет более высокий приоритет, чем тот, у которого много параметров. Например, в случае `$domain=example.com|example.org`правило, включающее два домена, имеет несколько более широкую область действия, чем правило с одним указанным доменом, поэтому его приоритет ниже.

Базовый приоритет любого правила равен 1. Если вычисленный приоритет — число с плавающей точкой, то оно будет **округлено в большую сторону** до наименьшего целого числа, большего или равного вычисленному приоритету.

:::info Совместимость

- Понятие приоритета было введено в tsurlfilter 2.1.0 и CoreLibs 1.13. До этого в AdGuard не было специального алгоритма вычисления приоритетов, и обработка конфликтов могла отличаться в зависимости от продукта и версии AdGuard.
- AdGuard для iOS, Safari и AdGuard Content Blocker зависят от реализации браузера и не могут следовать указанным здесь правилам.

:::

:::note

Псевдонимы-модификаторы (`1p`, `3p` и т. д.) не входят в эти категории, однако, они используются в движке для вычисления приоритета правила.

:::

#### Базовые модификаторы, наличие каждого добавляет 1 к приоритету {#priority-category-1}

<!-- Please keep them sorted -->

- [`$app`](#app-modifier) с исключаемыми приложениями с помощью `~`,
- [`$denyallow`](#denyallow-modifier),
- [`$dnsrewrite`](#dnsrewrite-modifier),
- [`$domain`](#domain-modifier) с исключаемыми доменами с использованием `~`,
- [`$match-case`](#match-case-modifier),
- [`$method`](#method-modifier) с исключаемыми методами с использованием `~`,
- [`$third-party`](#third-party-modifier),
- [`$to`](#to-modifier),
- ограниченные модификаторы [сontent-type](#content-type-modifiers) с `~`.

При работе с исключаемым доменом, приложением, методом или типом содержимого мы добавляем **1 балл** за существование самого модификатора, независимо от количества исключаемых доменов или типов содержимого. Это связано с тем, что область действия правила и так бесконечно широка. Проще говоря, запрещая несколько доменов, модификаторов content-type, методов или приложений, мы лишь немного сужаем область действия правила.

#### Определённые модификаторы content-type, методы, заголовки, $popup, специальные исключения {#priority-category-2}

All allowed content types:
<!-- Please keep them sorted -->

- [`$document`](#document-modifier),
- [`$font`](#font-modifier),
- [`$image`](#image-modifier),
- [`$media`](#media-modifier),
- [`$object`](#object-modifier),
- [`$other`](#other-modifier),
- [`$ping`](#ping-modifier),
- [`$script`](#script-modifier),
- [`$stylesheet`](#stylesheet-modifier),
- [`$subdocument`](#subdocument-modifier),
- [`$websocket`](#websocket-modifier),
- [`$xmlhttprequest`](#xmlhttprequest-modifier);

Это также включает правила, которые неявно добавляют модификатор `$document`:

- [`$popup`](#popup-modifier);

Или специальные исключения, которые неявно добавляют `$document,subdocument`:

- [`$content`](#content-modifier),
- [`$elemhide`](#elemhide-modifier),
- [`$extension`](#extension-modifier),
- [`$genericblock`](#genericblock-modifier),
- [`$generichide`](#generichide-modifier),
- [`$jsinject`](#jsinject-modifier),
- [`$specifichide`](#specifichide-modifier),
- [`$urlblock`](#urlblock-modifier);

Или разрешённые методы через [`$method`](#method-modifier).

Или правила с [`$header`](#header-modifier).

Наличие любых модификаторов content-type добавляет `(50 + 50 / N)`, где `N` — количество модификаторов, например: `||example.com^$image,script` добавит `50 + 50 / 2 = 50 + 25 = 75` к общему весу правила. К этой категории относится и `$popup`, так как в нём неявно добавляется модификатор `$document`. Аналогично, конкретные исключения добавляют `$document,subdocument`.

Если в правиле есть модификатор `$method` с разрешёнными методами, то он добавляет `(50 + 50 / N)`, где `N` — количество разрешённых методов, например: `||example.com^$method=GET|POST|PUT` добавит `50 + 50 / 3 = 50 + 16,6 = 67` к общему весу правила.

Если в правиле есть модификатор `$header`, то он добавляет `50`.

#### `$domain` или `$app` с разрешёнными доменами или приложениями {#priority-category-3}

Указанные домены через `$domain` или указанные приложения через `$app` добавят `100 + 100 / N`, где `N` — количество значений модификатора, например: `||example.com^$domain=example.com|example.org|example.net` добавит `100 + 100 / 3 = 135` или `||example.com^$app=org.example.app1|org.example.app2` добавит `100 + 100 / 2 = 100 + 51 = 151 ` или `||example.com^$domain=example.com,app=org.example.app1|org.example.app2` добавит `100 + 100/1` (часть $domain) и `100 + 100/2` (часть $app) — добавит `350` в сумме.

Значения модификаторов regexps или tld будут интерпретироваться как обычные записи вида `example.com` и считаться по одному, например: `||example.com^$domain=example.*` будет добавлено `100 + 100 / 1 = 200` или `||example.com^$domain=example.*|adguard.*` будет добавлено `100 + 100 / 2 = 150`.

#### Правила `$redirect` {#priority-category-6}

<!-- Please keep them sorted -->

- [`$redirect`](#redirect-modifier),
- [`$redirect-rule`](#redirect-rule-modifier).

Каждое из них добавляет `10^3` к приоритету правила.

#### Особые исключения {#priority-category-4}

<!-- Please keep them sorted -->

- [`$content`](#content-modifier),
- [`$elemhide`](#elemhide-modifier),
- [`$extension`](#extension-modifier),
- [`$genericblock`](#genericblock-modifier),
- [`$generichide`](#generichide-modifier),
- [`$jsinject`](#jsinject-modifier),
- [`$specifichide`](#specifichide-modifier),
- [`$urlblock`](#urlblock-modifier);

Каждое из них добавляет `10^4` к приоритету.

А также исключение с [`модификатором $document`](#document-modifier): потому что это псевдоним для `$elemhide, content,jsinject,urlblock,extension`. Оно добавит `10^4` для каждого модификатора из [верхнего списка](#priority-category-4), `10^4 * 5` в сумме.

Кроме того, каждое из этих исключений неявно добавляет два разрешённых модификатора content-type: `$document,subdocument`.

#### Правила белого списка {#priority-category-5}

Модификатор `@@` добавляет `10^5` к приоритету правила.

#### Правила `$important` {#priority-category-7}

Модификатор [`$important`](#important-modifier) добавляет `10^6` к приоритету правила.

#### Правила, для которых нет веса приоритета {#priority-category-extra}

[Прочие модификаторы](#advanced-capabilities), которые должны выполнять дополнительную пост- или предобработку запросов, ничего не добавляют к приоритету правил.

:::note

Модификатор [`$replace`](#replace-modifier) имеет приоритет над всеми блокирующими правилами категорий 1–3, а также над правилами исключений из категорий 3–5, **, кроме** [`$content`](#content-modifier), поскольку исключение с модификатором `$content` отменяет все правила `$replace`.

:::

#### Примеры

**Пример 1**

`||example.com^`

Вес правила без модификаторов: `1`.

**Пример 2**

`||example.com^$match-case`

Вес правила: базовый вес + вес модификатора из [категории 1](#priority-category-1): `1 + 1 = 2`.

**Пример 3**

`||example.org^$removeparam=p`

Вес правила: базовый вес + 0, так как $removeparam [не участвует](#priority-category-extra) в расчёте приоритета: `1 + 0 = 1`.

**Пример 4**

`||example.org^$document,redirect=nooptext`

Вес правила: базовый вес + допустимый тип содержимого, [категория 3](#priority-category-3) + $redirect из [категория 6](#priority-category-6): `1 + (100 + 100 / 1) + 1000 = 1201`.

**Пример 5**

`@@||example.org^$removeparam=p,document`

Вес правила: базовый вес + правило белого списка, [категория 5](#priority-category-5) + 0, потому что $removeparam [не участвует](#priority-category-extra) в расчёте приоритета + разрешённый тип контента, [категория 2](#priority-category-2): `1 + 10000 + 0 + (50 + 50 / 1) = 10101`.

**Пример 6**

`@@||example.com/ad/*$domain=example.org|example.net,important`

Вес правила: базовый вес + правило белого списка, [категория 5](#priority-category-5) + важное правило, [категория 7](#priority-category-7) + разрешённые домены, [категория 3](#priority-category-3): `1 + 10000 + 1000000 + (100 + 100/2) = 1010152`.

**Пример 7**

`@@|||example.org^$document` без дополнительных модификаторов — это псевдоним для `@@|||example.com^$elemhide,content,jsinject,urlblock,extension`

Вес правила: базовый вес + специфические исключения, [категория 4](#priority-category-4) + два разрешённых типа контента (document и subdocument), [категория 2](#priority-category-2): `1 + 10000 * 4 + (50 + 50 / 2) = 40076`.

**Пример 8**

`*$script,domain=a.com,denyallow=x.com|y.com`

Вес правила: базовый вес + разрешённый тип контента, [категория 2](#priority-category-2) + разрешённый домен, [категория 3](#priority-category-3) + отказ, [категория 1](#priority-category-1): `1 + (50 + 50/1) + (100 + 100 / 1) + 1 = 303`.

**Пример 9**

`||example.com^$all` (псевдоним для `||example.com^$document,subdocument,image,script,media и т.д. + $popup`)

Вес правила: базовый вес + разрешённые типы контента, [категория 2](#priority-category-2): `1 + (50 + 50/12) = 55`.

## Другие правила {#non-basic-rules}

However, basic rules may not be enough to block ads. Иногда для этого требуется скрыть какой-нибудь элемент или изменить часть HTML-кода страницы, при этом ничего не сломав. Для этого предназначены правила, описанные в данном разделе.

| Categories \ Products                     | [CoreLibs apps][cl-apps] | [AdGuard for Chromium][ext-chr] | [AdGuard for Firefox][ext-ff] | [AdGuard для iOS][ios-app] | [AdGuard для Safari][ext-saf] | [AdGuard Content Blocker][and-cb] |
| ------------------------------------------ |:------------------------:|:-------------------------------:|:-----------------------------:|:--------------------------:|:-----------------------------:|:---------------------------------:|
| [Element hiding](#cosmetic-elemhide-rules) |            ✅             |                ✅                |               ✅               |             ✅              |               ✅               |                 ✅                 |
| [CSS-правила](#cosmetic-css-rules)         |            ✅             |                ✅                |               ✅               |             ✅              |               ✅               |                 ❌                 |
| [Extended CSS](#extended-css-selectors)    |            ✅             |                ✅                |               ✅               |             ✅              |               ✅               |                 ❌                 |
| [HTML filtering](#html-filtering-rules)    |            ✅             |                ❌                |               ✅               |             ❌              |               ❌               |                 ❌                 |
| [JavaScript](#javascript-rules)            |            ✅             |                ✅                |               ✅               |             ✅              |               ✅               |                 ❌                 |
| [Scriptlets](#scriptlets)                  |            ✅             |                ✅                |               ✅               |             ✅              |               ✅               |                 ❌                 |

:::note

- ✅ — fully supported
- ❌ — not supported

:::

## Косметические правила {#cosmetic-rules}

:::info

Для работы с косметическими правилами необходимы знания HTML и CSS. Так что если вы хотите научиться самостоятельно составлять такие правила, ознакомьтесь с [этой документацией](https://developer.mozilla.org/en-US/docs/Web/Guide/CSS/Getting_started/What_is_CSS).

:::

### Правила скрытия элементов {#cosmetic-elemhide-rules}

Правила скрытия элементов предназначены, как это следует из их названия, для скрытия элементов веб-страниц. По сути это аналогично применению стиля `{ display: none; }` к выбранному элементу.

Правила скрытия элементов работают по-разному, и их приоритет меняется [в зависимости от платформы](#cosmetic-rules-priority).

#### Синтаксис {#non-basic-rules-modifiers-syntax}

```text
   rule = [domains] "##" selector
domains = [domain0, domain1[, ...[, domainN]]]
```

- **`selector`** — [CSS-селектор](https://developer.mozilla.org/en-US/docs/Web/Guide/CSS/Getting_Started/Selectors), задающий элементы, которые должны быть скрыты.
- **`domains`** — ограничение на домены, на страницах которых будет применено правило.

Если вы хотите ограничить область действия одним или более доменами, просто перечислите их через запятую. Например: `example.org,example.com##selector`.

Это правило будет работать также на всех поддоменах `example.org` и `example.com`.

Если вы хотите, чтобы правило не применялось к определённым доменам, начните доменное имя со знака `~`. Например: `~example.org##selector`.

Вы можете использовать оба подхода в одном правиле. Например, правило `example.org,~subdomain.example.org##domain` будет работать для домена `example.org` и всех его поддоменов, **кроме `subdomain.example.org`**.

:::note

Правила скрытия не зависят друг от друга. Если в фильтре есть правило `example.org##selector` и вы добавляете правило `~example.org##selector`, то оба этих правила будут применены независимо друг от друга.

:::

**Примеры**

- `example.com##div.textad` скроет элемент `div` с классом `textad` на домене `example.com` и всех его поддоменах.
- `example.com,example.org###adblock` скроет элемент с атрибутом `id` равным `adblock` на доменах `example.com`, `example.org` и всех их поддоменах.
- `~example.com##.textad` скроет элемент с классом `textad` на всех доменах, кроме `example.com` и всех его поддоменов.

**Ограничения**

Safari не поддерживает одновременно разрешённые и запрещённые домены, поэтому правила вида `example.org,~foo.example.org##.textad` не работают в AdGuard для Safari.

**Исключения**

Исключения могут отключать некоторые правила на определённых доменах. Они очень похожи на обычные правила-исключения, только вместо `##` нужно использовать `#@#`.

Например, в фильтре есть правило:

```adblock
##.textad
```

Если вы хотите отключить его для домена `example.com`, вы можете создать правило исключения:

```adblock
example.com#@#.textad
```

В некоторых случаях может потребоваться отключение всех запрещающих правил. Например, на время тестирования. Для этого воспользуйтесь правилом исключения без указания домена. Это полностью отключит соответствующее правило CSS elemhide для ВСЕХ доменов:

```adblock
#@#.textad
```

Правило такого вида даст аналогичный результат:

```adblock
*#@#.textad
```

Применять такие исключения рекомендуется только в случае, когда изменить само правило скрытия невозможно. Во всех остальных случаях лучше изменить исходное правило, используя ограничение на домены.

### CSS-правила {#cosmetic-css-rules}

Иногда недостаточно просто скрыть какой-либо элемент, чтобы заблокировать рекламу. Например, блокировка рекламного элемента может просто сломать вёрстку сайта. Для таких случаев AdGuard позволяет использовать гораздо более гибкие правила, чем обычные правила скрытия. С помощью таких правил вы можете добавить на страницу практически любой CSS-стиль.

**Синтаксис**

```text
   rule = [domains] "#$#" selector "{" style "}"
domains = [domain0, domain1[, ...[, domainN]]]
```

- **`selector`** — [CSS-селектор](https://developer.mozilla.org/en-US/docs/Web/Guide/CSS/Getting_Started/Selectors), определяющий элементы, к которым мы хотим применить стиль.
- **`domains`** — ограничение на домены, на страницах которых будет применено правило. Строится по тем же правилам, что и в случае [правил скрытия элементов](#elemhide-syntax).
- **`style`** — CSS-стиль, который мы хотим применить к выбранным элементам.

**Примеры**

```adblock
example.com#$#body { background-color: #333!important; }
```

Это правило применит стиль `background-color: #333!important;` к элементу `body` для домена `example.com` и всех его поддоменов.

**Исключения**

По аналогии с правилами скрытия, существует специальный тип правил, отключающий действие выбранного правила CSS-стилей для определённых доменов. Синтаксис правил-исключений практически такой же, только маркер `#$#` заменяется на `#@$#`.

Например, в фильтре есть правило:

```adblock
#$#.textad { visibility: hidden; }
```

Если вы хотите отключить его для домена `example.com`, вы можете создать правило исключения:

```adblock
example.com#@$#.textad { visibility: hidden; }
```

Применять такие исключения рекомендуется только в случае, когда изменить само CSS-правило не представляется возможным. Во всех остальных случаях лучше изменить исходное правило, используя ограничение на домены.

:::caution Ограничения

Запрещено использование стилей, которые могут приводить к загрузке каких-либо ресурсов. По сути, это означает, что нельзя использовать атрибуты типа `<url>`.

:::

:::info Совместимость

CSS-правила не поддерживаются в AdGuard Content Blocker.

CSS-правила работают по-разному, и их приоритет меняется [в зависимости от платформы](#cosmetic-rules-priority).

:::

### Расширенные CSS-селекторы {#extended-css-selectors}

- [Ограничения](#extended-css-limitations)
- [Псевдокласс `:has()`](#extended-css-has)
- [Псевдокласс `:contains()`](#extended-css-contains)
- [Псевдокласс `:matches-css()`](#extended-css-matches-css)
- [Псевдокласс `:matches-attr()`](#extended-css-matches-attr)
- [Псевдокласс `:matches-property()`](#extended-css-property)
- [Псевдокласс `:xpath()`](#extended-css-xpath)
- [Псевдокласс `:nth-ancestor()`](#extended-css-nth-ancestor)
- [Псевдокласс `:upward()`](#extended-css-upward)
- [Псевдокласс `:remove()` и псевдосвойство `remove`](#remove-pseudos)
- [Псевдокласс `:is()`](#extended-css-is)
- [Псевдокласс `:not()`](#extended-css-not)
- [Псевдокласс `:if-not()` (удалён)](#extended-css-if-not)

Возможностей CSS 3.0 не всегда хватает для блокировки рекламы. Чтобы решить эту проблему, AdGuard расширяет возможности CSS, добавляя поддержку новых псевдоэлементов. Мы разработали отдельную [библиотеку с открытым исходным кодом](https://github.com/AdguardTeam/ExtendedCss) для выбора нестандартных элементов и применения CSS-стилей с расширенными свойствами.

Идея расширенных возможностей заключается в возможности сопоставлять элементы DOM с селекторами на основе их собственного представления (стиль, текстовое содержимое и т. д.) или отношений с другими элементами. Также есть возможность применять стили с нестандартными свойствами CSS.

**Область применения**

Расширенные селекторы можно применять в любом косметическом правиле, будь то [правила скрытия](#cosmetic-elemhide-rules) или [CSS-правила](#cosmetic-css-rules).

:::info Совместимость

Правила с расширенными CSS-селекторами не поддерживаются в AdGuard Content Blocker.

:::

**Синтаксис**

Независимо от того, какие CSS-псевдоклассы вы используете в правилах, вы можете использовать специальные маркеры для принудительного применения этих правил с помощью ExtendedCss. Рекомендуется использовать эти маркеры для всех косметических расширенных CSS-правил, чтобы их было легче отличить.

Синтаксис расширенных CSS-правил:

- `#?# ` — для скрытия элементов, `#@?#` — для исключений
- `#$?#` — для CSS-стилей, `#@$?#` — для исключений

Мы **крайне рекомендуем** использовать этим маркеры каждый раз, когда вы используете расширенный CSS-селектор.

**Примеры**

- `example.org#?#div:has(> a[target="_blank"][rel="nofollow"])` — это правило блокирует все элементы `div`, которые содержат дочерний элемент со ссылкой с атрибутами `[target="_blank"][rel="nofollow"]`. При этом правило будет работать только для домена `example.org` и всех его поддоменов.
- `example.com#$?#h3:contains(cookies) { display: none!important; }` — это правило устанавливает стиль `display: none!important` для всех элементов `h3`, которые содержат слово `cookies`. При этом правило будет работать только для домена `example.com` и всех его поддоменов.
- `example.net#?#.banner:matches-css(width: 360px)` — это правило блокирует все элементы `.banner`, которые содержат стиль `width: 360px`. При этом правило будет работать только для домена `example.net` и всех его поддоменов.
- `example.net#@?#.banner:matches-css(width: 360px)` — это правило отменяет действие предыдущего правила.

Вы можете применять стандартные CSS-селекторы с помощью библиотеки ExtendedCss, используя маркер правила `#?#`, например, `#?#div.banner`.

Узнайте больше об [отладке расширенных селекторов](#selectors-debugging-mode).

:::note

Некоторые псевдоклассы не требуют селектора перед ними. Добавление универсального селектора [](https://www.w3.org/TR/selectors-4/#the-universal-selector) `*` облегчает чтение расширенного селектора, хотя и не влияет на поведение при подборе. Поэтому селектор `#block :has(> .inner)` работает точно так же, как `#block *:has(> .inner)` , но второй более очевиден.

Имена псевдоклассов не чувствительны к регистру, например, `:HAS()` работает как `:has()`. До сих пор часто используются названия в нижнем регистре.

:::

#### Ограничения ExtendedCss {#extended-css-limitations}

1. [CSS-комментарии](https://developer.mozilla.org/en-US/docs/Web/CSS/Comments) и [at-rules](https://developer.mozilla.org/en-US/docs/Web/CSS/At-rule) не поддерживаются.

2. У конкретного псевдокласса могут быть свои ограничения: [`:has()`](#extended-css-has-limitations), [`:xpath()`](#extended-css-xpath-limitations), [`:nth-ancestor()`](#extended-css-nth-ancestor-limitations), [`:upward()`](#extended-css-upward-limitations), [`:is()`](#extended-css-is-limitations), [`:not()`](#extended-css-not-limitations), and [`:remove()`](#extended-css-remove-limitations).

#### Псевдокласс `:has()` {#extended-css-has}

Проект спецификации CSS 4.0 описывает псевдокласс [`:has()`](https://www.w3.org/TR/selectors-4/#relational). К сожалению, [пока не поддерживается](https://caniuse.com/css-has) всеми популярными браузерами.

:::note

Правила с псевдоклассом `:has()` должны использовать [нативную реализацию `:has()`](https://developer.mozilla.org/ru/docs/Web/CSS/:has), если они используют маркер `##` и если это возможно, то есть без других расширенных селекторов внутри. Чтобы принудительно применить правила ExtendedCss с `:has()`, используйте маркер `#?#`/`#$?#` явно.

:::

**Совместимость с другими псевдоклассами**

Синонимы `:-abp-has()` поддерживаются ExtendedCss для лучшей совместимости.

:::danger Уведомление об удалении

`:if()` больше не поддерживается как синоним для `:has()`.

:::

**Синтаксис**

```text
[target]:has(selector)
```

- `target` — необязательный, стандартный или расширенный CSS-селектор, может быть пропущен для проверки *любых* элементов
- `selector` — необходимый, стандартный или расширенный CSS-селектор

Псевдокласс `:has()` выбирает `target`-элементы, которые подходят под `selector`. Также селектор `` может начинаться с комбинатора.

Список селекторов можно задать и в `selector`. В этом случае **все** селекторы в списке будут сопоставляться. В будущем это будет исправлено для [`<forgiving-relative-selector-list>`](https://www.w3.org/TR/selectors-4/#typedef-forgiving-relative-selector-list) как аргумента.

##### Ограничения `:has()` {#extended-css-has-limitations}

Использование псевдокласса `:has()` [ограничено для некоторых случаев (2, 3)](https://bugs.chromium.org/p/chromium/issues/detail?id=669058#c54):

- запретить `:has()` внутри псевдоселекторов, принимающих только составные селекторы;
- запретить `:has()` после обычных псевдоэлементов.

Нативный псевдокласс `:has()` не допускает аргумент `:has()`, `:is()`, `:where()` внутри `:has()`, чтобы избежать увеличения сложности аннулирования ([случай 1](https://bugs.chromium.org/p/chromium/issues/detail?id=669058#c54)) `:has()`. Но ранее ExtendedCss не имел такого ограничения, а списки фильтров уже содержат такие правила, поэтому мы не стали добавлять это ограничение в ExtendedCss и разрешили использовать `:has()` внутри `:has()`, как это было возможно ранее. Чтобы использовать его, просто принудительно используйте ExtendedCss, установив `#?#`/`#$?#` маркер правила.

Нативная реализация не позволяет использовать `:scope` внутри `:has()` аргумента ([[1]](https://github.com/w3c/csswg-drafts/issues/7211), [[2]](https://github.com/w3c/csswg-drafts/issues/6399)). Тем не менее, в списках фильтров есть такие правила: `div:has(:scope a)`, которые мы продолжаем поддерживать, просто преобразуя их в `div:has(> a)`, как это делалось ранее.

**Примеры**

`div:has(.banner)` выбирает все `div`-элементы, которые **включают** элемент с классом `banner`:

```html
<!-- HTML code -->
<div>Not selected</div>
<div>Selected
  <span class="banner">inner element</span>
</div>
```

`div:has(> .banner)` выбирает все `div`-элементы, которые **включают** элемент класса `banner` в качестве *прямого дочернего* элемента `div`:

```html
<!-- HTML code -->
<div>Not selected</div>
<div>Selected
  <p class="banner">child element</p>
</div>
```

`div:has(+ .banner)` выбирает все `div`-элементы, **предшествующие** элементу класса `banner`, который *непосредственно следует* за `div` и оба являются детьми одного родителя:

```html
<!-- HTML code -->
<div>Not selected</div>
<div>Selected</div>
<p class="banner">adjacent sibling</p>
<span>Not selected</span>
```

`div:has(~ .banner)` выбирает все `div`-элементы, **предшествующие** элементу класса `banner`, который *следует* за `div`, но *не обязательно сразу*, и оба являются детьми одного родителя:

```html
<!-- HTML code -->
<div>Not selected</div>
<div>Selected</div>
<span>Not selected</span>
<p class="banner">general sibling</p>
```

`div:has(span, .banner)` выбирает все элементы `div`, которые **включают в себя как элемент** `span`, так и элемент `banner` класса:

```html
<!-- HTML code -->
<div>Not selected</div>
<div>Selected
  <span>child span</span>
  <p class="banner">child .banner</p>
</div>
```

:::danger Старый синтаксис

[Синтаксис обратной совместимости для `:has()`](https://github.com/AdguardTeam/ExtendedCss#old-syntax-has) поддерживается, но **не рекомендуется**.

:::

#### Псевдокласс `:contains()` {#extended-css-contains}

Принцип действия псевдокласса `:contains()` очень прост: он позволяет выбрать элементы, которые содержат заданный текст или содержимое которых соответствует указанному регулярному выражению. Поддерживаются флаги регулярных выражений.

:::note

Псевдокласс `:contains()` использует для сопоставления свойство элемента `textContent`, а не `innerHTML`.

:::

**Совместимость с другими псевдоклассами**

Синонимы `:-abp-contains()` и `:has-text()` поддерживаются для лучшей совместимости.

**Синтаксис**

```text
[target]:contains(match)
```

- `target` — необязательный, стандартный или расширенный CSS-селектор, может быть пропущен для проверки *любых* элементов
- `match` — требуется, строка или регулярное выражение для соответствия элементу `textContent`. Также поддерживаются флаги регулярных выражений.

**Примеры**

Для таких DOM:

```html
<!-- HTML code -->
<div>Not selected</div>
<div id="match">Selected as IT contains "banner"</div>
<div>Not selected <div class="banner"></div></div>
```

элемент `div#match` может быть выбран любым из этих расширенных селекторов:

```adblock
! plain text
div:contains(banner)

! регулярное выражение
div:contains(/as .* banner/)

! регулярное выражение с флагами
div:contains(/it .* banner/gi)
```

:::note

Выбран только `div` с `id=match`, так как следующий элемент не содержит текст, а `banner` — это часть кода, а не текст.

:::

:::danger Старый синтаксис

[Синтаксис обратной совместимости для `:contains()`](https://github.com/AdguardTeam/ExtendedCss#old-syntax-contains) поддерживается, но **не рекомендуется**.

:::

#### Псевдокласс `:matches-css()` {#extended-css-matches-css}

Псевдокласс `:matches-css()` позволяет сопоставить элемент по свойствам его текущего стиля. Работа псевдокласса основана на использовании метода [`Window.getComputedStyle()`](https://developer.mozilla.org/en-US/docs/Web/API/Window/getComputedStyle).

**Синтаксис**

```text
[target]:matches-css([pseudo-element, ] property: pattern)
```

- `target` — необязательный, стандартный или расширенный CSS-селектор, может быть пропущен для проверки *любых* элементов
- `pseudo-element` — необязательный, допустимый стандартный псевдоэлемент, например, `before`, `after`, `first-line` и т. д.
- `property` — требуется, название CSS-свойства, которое будет проверено у элемента
- `pattern` — требуется, паттерн значений, который использует то же простое сопоставление с wildcard-знаками, что и в основных правилах фильтрации URL-адресов, ИЛИ регулярное выражение. Для этого типа соответствия AdGuard не обращает внимание на регистр. В случае с регулярными выражениями паттерн будет выглядеть так: `/regexp/`.

**Экранирование и снятие специальных символов**

Для **нерегулярных выражений** паттерны `(`,`)`,`[`,`]` должны **без экранирования**, например, `:matches-css(background-image:url(data:*))`.

Для **регулярных выражений** паттерны `\` должны быть **экранированы**, например, `:matches-css(background-image: /^url\\("data:image\\/gif;base64.+/)`.

**Примеры**

Для таких DOM:

```html
<!-- HTML code -->
<style type="text/css">
    #matched::before {
        content: "Block me"
    }
</style>
<div id="matched"></div>
<div id="not-matched"></div>
```

`div`-элементы с псевдоэлементом `::before` и с указанным свойством `content` могут быть выбраны любым из этих расширенных селекторов:

```adblock
! паттерн строки
div:matches-css(before, content: block me)

! паттерн строки с подстановочным знаком
div:matches-css(before, content: block*)

! паттерн регулярного выражения
div:matches-css(before, content: /block me/)
```

:::caution Ограничения

Паттерны регулярных выражений **не поддерживают** флаги.

:::

:::info Совместимость

Устаревшие псевдоклассы `:matches-css-before()` и `:matches-css-after()` больше не рекомендуются, но по-прежнему поддерживаются для лучшей совместимости.

:::

:::danger Старый синтаксис

[Синтаксис обратной совместимости для `:matches-css()`](https://github.com/AdguardTeam/ExtendedCss#old-syntax-matches-css) поддерживается, но **не рекомендуется**.

:::

#### Псевдокласс `:matches-attr()` {#extended-css-matches-attr}

Псевдокласс `:matches-attr()` позволяет выбрать элемент по его атрибутам, особенно если они рандомизированы.

**Синтаксис**

```text
[target]:matches-attr("name"[="value"])
```

- `target` — необязательный, стандартный или расширенный CSS-селектор, может быть пропущен для проверки *любых* элементов
- `name` — требуется, простая строка, *или* строка с подстановочным знаком, *или* регулярное выражение для сопоставления имени атрибута
- `value` — необязательный, простая строка, *или* строка с подстановочным знаком, *или* регулярное выражение для сопоставления значения атрибута

**Экранирование специальных символов**

Для паттернов **регулярных выражений** `"` и `\` должны быть **экранированы**, например, `div:matches-attr(class=/[\\w]{5}/)`.

**Примеры**

`div:matches-attr("ad-link")` выбирает элемент `div#target1`:

```html
<!-- HTML code -->
<div id="target1" ad-link="1random23-banner_240x400"></div>
```

`div:matches-attr("data-*"="adBanner")` выбирает элемент `div#target2`:

```html
<!-- HTML code -->
<div id="target2" data-1random23="adBanner"></div>
```

`div:matches-attr(*unit*=/^click$/)` выбирает элемент `div#target3`:

```html
<!-- HTML code -->
<div id="target3" random123-unit094="click"></div>
```

`*:matches-attr("/.{5,}delay$/"="/^[0-9]*$/")` выбирает элемент `#target4`:

```html
<!-- HTML code -->
<div>
  <inner-random23 id="target4" nt4f5be90delay="1000"></inner-random23>
</div>
```

:::caution Ограничения

Паттерны регулярных выражений **не поддерживают** флаги.

:::

#### Псевдокласс `:matches-property()` {#extended-css-property}

Псевдокласс `:matches-property()` позволяет выбирать элемент, сопоставляя его свойства.

**Синтаксис**

```text
[target]:matches-property("name"[="value"])
```

- `target` — необязательный, стандартный или расширенный CSS-селектор, может быть пропущен для проверки *любых* элементов
- `name` — требуется, простая строка, *или* строка с подстановочным знаком, *или* регулярное выражение для сопоставления имени свойства элемента
- `value` — необязательный, простая строка, *или* строка с подстановочным знаком, *или* регулярное выражение для сопоставления значения свойства элемента

**Экранирование специальных символов**

Для паттернов **регулярных выражений** `"` и `\` должны быть экранированы, например, `div:matches-property(prop=/[\\w]{4}/)`.

:::note

Паттерны регулярных выражений поддерживаются в `name` для любого свойства в цепочке, например, `prop./^unit[\\d]{4}$/.type`.

:::

**Примеры**

Элемент с такими свойствами:

```javascript
divProperties = {
  id: 1,
  check: {
    track: true,
    unit_2random1: true,
  },
  memoizedProps: {
    key: null,
    tag: 12,
    _owner: {
      effectTag: 1,
      src: 'ad.com',
    },
  },
};
```

может быть выбран любым из этих расширенных селекторов:

```adblock
div:matches-property(check.track)

div:matches-property("check./^unit_.{4,8}$/")

div:matches-property("check.unit_*"=true)

div:matches-property(memoizedProps.key="null")

div:matches-property(memoizedProps._owner.src=/ad/)
```

:::tip Для разработчиков фильтров

Чтобы проверить свойства конкретного элемента, сделайте следующее:

1. Проверьте элемент страницы или выберите его в Инструментах разработчика браузера во вкладке `Элементы`.
1. Запустите `console.dir($0)` во вкладке `Консоль`.

:::

:::caution Ограничения

Паттерны регулярных выражений **не поддерживают** флаги.

:::

#### Псевдокласс `:xpath()` {#extended-css-xpath}

Псевдокласс `:xpath()` позволяет выбирать элементы согласно выражению XPath.

**Синтаксис**

```text
[target]:xpath(expression)
```

- `target` — необязательный, стандартный или расширенный CSS-селектор
- `expression` — требуется, допустимое XPath выражение

##### Ограничения `:xpath()` {#extended-css-xpath-limitations}

`target` можно опустить, поэтому использовать его необязательно. Для любого другого псевдокласса это будет означать «применить ко *всем* узлам DOM», но в случае `:xpath()` это просто означает «применить к *целым* документам», и такое применение значительно замедляет выбор элементов. Вот почему такие правила, как `#?#:xpath(expression)`, ограничены поиском внутри тега `body`. Например, правило `#?#:xpath(//div[@data-st-area=\'Advert\'])` парсится как `#?#body:xpath(//div[@data-st- area=\'Advert\'])`.

Расширенные селекторы с `target`, определённым как *любой* селектор, — `*:xpath(expression)` — всё ещё можно использовать, но не рекомендуется. Поэтому следует уточнить `target`.

Корректно работает только в конце селектора, за исключением псевдокласса [:remove()](#remove-pseudos).

**Примеры**

`:xpath(//*[@class="banner"])` выбирает элемент `div#target1`:

```html
<!-- HTML code -->
<div id="target1" class="banner"></div>
```

`:xpath(//*[@class="inner"]/..)` выбирает элемент `div#target2`:

```html
<!-- HTML code -->
<div id="target2">
  <div class="inner"></div>
</div>
```

#### Псевдокласс `:nth-ancestor()` {#extended-css-nth-ancestor}

Псевдокласс `:nth-ancestor()` позволяет искать *n-ного* предка по отношению к ранее выбранному элементу.

```text
subject:nth-ancestor(n)
```

- `subject` — стандартный или расширенный CSS-селектор, необходим
- `n` — требуется, число >= 1 и < 256, расстояние до нужного родителя от элемента, выбранного `subject`

**Синтаксис**

```text
subject:nth-ancestor(n)
```

- `subject` — required, standard or extended CSS selector
- `n` — требуется, число >= 1 и < 256, расстояние до нужного родителя от элемента, выбранного `subject`

##### Ограничения `:nth-ancestor()` {#extended-css-nth-ancestor-limitations}

Псевдокласс `:nth-ancestor()` не поддерживается внутри аргумента псевдокласса [`:not()`](#extended-css-not).

**Примеры**

Для таких DOM:

```html
<!-- HTML code -->
<div id="target1">
  <div class="child"></div>

  <div id="target2">
    <div>
      <div>
        <div class="inner"></div>
      </div>
    </div>
  </div>
</div>
```

`.child:nth-ancestor(1)` выбирает элемент `div#target1`, `div[class="inner"]:nth-ancestor(3)` выбирает элемент `div#target2`.

#### Псевдокласс `:upward()` {#extended-css-upward}

Псевдокласс `:upward()` позволяет искать предка по отношению к ранее выбранному элементу.

**Синтаксис**

```text
subject:upward(ancestor)
```

- `subject` — стандартный или расширенный CSS-селектор, необходим
- `ancestor` — требуется, спецификация для предка элемента, выбранного `subject`, может быть задана как:
    - *число* >= 1 и < 256 для указания расстояния до нужного предка, то же, что и [`:nth-ancestor()`](#extended-css-nth-ancestor)
    - *стандартный CSS-селектор* для поиска ближайшего предка

##### Ограничения `:upward()` {#extended-css-upward-limitations}

Псевдокласс `:upward()` не поддерживается внутри аргумента псевдокласса [`:not()`](#extended-css-not).

**Примеры**

Для таких DOM:

```html
<!-- HTML code -->
<div id="target1" data="true">
  <div class="child"></div>

  <div id="target2">
    <div>
      <div>
        <div class="inner"></div>
      </div>
    </div>
  </div>
</div>
```

`.inner:upward(div[data])` выбирает элемент `div#target1`, `.inner:upward(div[id])` выбирает элемент `div#target2`, `.child:upward(1)` выбирает элемент `div#target1`, `.inner:upward(3)` выбирает элемент `div#target2`.

#### Псевдокласс `:remove()` и псевдосвойство `remove` {#remove-pseudos}

Иногда необходимо удалить определённый элемент, а не просто скрыть его или применить какие-либо правила стиля. Для этого можно использовать псевдокласс `:remove()`, а также псевдосвойство `remove`.

**Псевдокласс `:remove()` может быть только в конце селектора.**

**Синтаксис**

```text
! pseudo-class
selector:remove()

! псевдосвойство
selector { remove: true; }
```

- `selector` — необходимый, стандартный или расширенный CSS-селектор

##### Ограничения `:remove()` и `remove` {#extended-css-remove-limitations}

Псевдокласс `:remove()` может корректно работать только в конце селектора.

Для применения псевдокласса `:remove()` к любому элементу следует использовать [универсальный селектор](https://www.w3.org/TR/selectors-4/#the-universal-selector) `*`. В противном случае такой расширенный селектор может считаться некорректным, например, `.banner > :remove()` недействителен для удаления любого дочернего элемента `элемента класса banner`, поэтому он должен выглядеть как `.banner > *:remove()`.

Если используется псевдокласс `:remove()` или псевдосвойство `remove`, все свойства стиля игнорируются, кроме псевдосвойства [`debug`](#selectors-debug-mode).

**Примеры**

```adblock
div.banner:remove()
div:has(> div[ad-attr]):remove()

div:contains(advertisement) { remove: true; }
div[class]:has(> a > img) { remove: true; }
```

:::note

Правила с псевдосвойством `remove` должны использовать маркер `#$?#`: `$` для синтаксиса правил CSS-стиля, `?` для синтаксиса ExtendedCss.

:::

#### Псевдокласс `:is()` {#extended-css-is}

Псевдокласс `:is()` позволяет сопоставить любой элемент, который может быть выбран любым из переданных ему селекторов. Некорректные селекторы пропускаются, и псевдокласс работает с допустимыми селекторами без каких-либо ошибок. Наша реализация [нативного `:is()` псевдокласса](https://developer.mozilla.org/en-US/docs/Web/CSS/:is).

**Синтаксис**

```text
[target]:is(selectors)
```

- `target` — необязательный, стандартный или расширенный CSS-селектор, может быть пропущен для проверки *любых* элементов
- `selectors` — [*щадящий список*](https://drafts.csswg.org/selectors-4/#typedef-forgiving-selector-list) стандартных и расширенных селекторов. Для расширенных селекторов поддерживаются только составные селекторы, а не сложные.

##### Ограничения `:is()` {#extended-css-is-limitations}

Правила с псевдоклассом `:is()` должны использовать [нативную реализацию `:is()`](https://developer.mozilla.org/en-US/docs/Web/CSS/:is), если они используют маркер `##` и если это возможно, то есть без других расширенных селекторов внутри. Чтобы принудительно применить правила ExtendedCss с `:is()`, используйте маркер `#?#`/`#$?#` явно.

Если `selectors` аргумент псевдокласса `:is()` — расширенный селектор, то из-за того, как псевдокласс `:is()` реализован в ExtendedCss 2.0, его невозможно применить к верхнему узлу DOM, который является `html`, т.е. `#?#html:is(<extended-selectors>)` не работает. Таким образом, если `target` не определён или определён как [универсальный селектор](https://www.w3.org/TR/selectors-4/#the-universal-selector) `*`, применение расширенного псевдокласса ограничено **`html`дочерними элементами**, например, правила `#?#:is(...)` и `#?#*:is(...)` парсятся как `#?#html *:is(...)`. Обратите внимание, что для стандартного аргумента селектора такого ограничения нет, т.е. `#?#html:is(.locked)` работает нормально.

[Сложные селекторы](https://www.w3.org/TR/selectors-4/#complex) с расширенными псевдоклассами не поддерживаются в качестве аргумента `selectors` для псевдокласса `:is()` — разрешены только [составные](https://www.w3.org/TR/selectors-4/#compound). Ознакомьтесь с примерами, чтобы разобраться в деталях.

**Примеры**

`#container *:is(.inner, .footer)` выбирает только элемент `div#target1`:

```html
<!-- HTML code -->
<div id="container">
  <div data="true">
    <div>
      <div id="target1" class="inner"></div>
    </div>
  </div>
</div>
```

Из-за ограничений `:is(*:not([class]) > .banner)'` не работает, но `:is(*:not([class]):has(> .banner))` можно использовать вместо него для выбора элемента `div#target2`:

```html
<!-- HTML code -->
<span class="span">text</span>
<div id="target2">
  <p class="banner">inner paragraph</p>
</div>
```

#### Псевдокласс `:not()` {#extended-css-not}

Псевдокласс `:not()` позволяет выбрать элементы, которые *не соответствуют* селекторам, переданным в качестве аргумента. Неправильные селекторы аргументов не допускаются, и будет выдана ошибка. Наша реализация псевдокласса [`:not()`](https://developer.mozilla.org/en-US/docs/Web/CSS/:not).

**Синтаксис**

```text
[target]:not(selectors)
```

- `target` — необязательный, стандартный или расширенный CSS-селектор, может быть пропущен для проверки *любых* элементов
- `selectors` — список стандартных или расширенных селекторов

##### Ограничения `:not()` {#extended-css-not-limitations}

Правила с псевдоклассом `:not()` должны использовать [нативную реализацию `:not()`](https://developer.mozilla.org/en-US/docs/Web/CSS/:not), если они используют маркер `##` и если это возможно, то есть без других расширенных селекторов внутри. Чтобы принудительно применить правила ExtendedCss с `:not()`, используйте маркер `#?#`/`#$?#` явно.

Если `selectors` аргумент псевдокласса `:not()` — расширенный селектор, то из-за того, как псевдокласс `:not()` реализован в ExtendedCss 2.0, его невозможно применить к верхнему узлу DOM, который является `html`, т.е. `#?#html:not(<extended-selectors>)` не работает. Таким образом, если `target` не определён или определён как [универсальный селектор](https://www.w3.org/TR/selectors-4/#the-universal-selector) `*`, применение расширенного псевдокласса ограничено **`html`дочерними элементами**, например, rules `#?#:not(...)` и `#?#*:not(...)` парсятся как `#?#html *:not(...)`. Обратите внимание, что для стандартного аргумента селектора такого ограничения нет, т.е. `#?#html:not(.locked)` работает нормально.

Псевдокласс `:not()` рассматривается как стандартный псевдокласс CSS внутри аргумента псевдокласса [`:upward()`](#extended-css-upward), поскольку `:upward()` поддерживает только стандартные селекторы.

«Восходящие» псевдоклассы [`:nth-ancestor()`](#extended-css-nth-ancestor) и [`:upward()`](#extended-css-upward) не поддерживаются внутри аргумента `selectors` для псевдокласса `:not()`.

**Примеры**

`#container > *:not(h2, .text)` выбирает только элемент `div#target1`:

```html
<!-- HTML code -->
<div id="container">
  <h2>Header</h2>
  <div id="target1"></div>
  <span class="text">text</span>
</div>
```

#### Псевдокласс `:if-not()` (удалён) {#extended-css-if-not}

:::danger Уведомление об удалении

Псевдокласс `:if-not()` удалён и больше не поддерживается. Правила с ним не работают.

:::

Этот псевдокласс изначально был сокращением для `:not(:has())`. Он поддерживался ExtendedCss для лучшей совместимости с подписками на некоторые фильтры.

### Приоритет косметических правил {#cosmetic-rules-priority}

То, как применяются правила **скрытия элементов** и **CSS-правил**, зависит от платформы.

**В AdGuard для Windows, Mac и Android** мы используем таблицу стилей, встроенную в страницу. Приоритет у косметических правил такой же, как и у любых других таблиц стилей CSS на сайтах. Но есть ограничение: [правила скрытия элементов](#elemhide-syntax) и [CSS-правила](#cosmetic-css-rules) не могут обходить встроенные стили. В таких случаях рекомендуется использовать расширенные селекторы или HTML-фильтрацию.

**В Браузерном расширении AdGuard** используются так называемые «пользовательские таблицы стилей». Их приоритет выше, даже чем у встроенных стилей.

**Расширенные CSS-селекторы** используют для работы JavaScript и добавляют встроенные стили сами, поэтому могут игнорировать любой стиль.

## Правила фильтрации HTML {#html-filtering-rules}

В большинстве случаев для фильтрации рекламы достаточно базовых и косметических правил. Но иногда необходимо изменить HTML-код самой страницы перед её загрузкой. Чтобы сделать это, применяются правила фильтрации HTML-контента. Они позволяют указать, какие HTML-элементы необходимо вырезать из страницы перед тем, как страница попадёт в браузер.

:::info Совместимость

Правила HTML-фильтрации поддерживаются в AdGuard для Windows, Mac, Android и Браузерном расширении AdGuard для Firefox. Такие правила не работают в расширениях для других браузеров, потому что они не могут модифицировать содержимое страниц на сетевом уровне.

:::

**Синтаксис**

```text
      rule = [domains] "$$" tagName [attributes]
   domains = [domain0, domain1[, ...[, domainN]]]
attributes = "[" name0 = value0 "]" "[" name1 = value2 "]" ... "[" nameN = valueN "]"
```

- **`tagName`** — имя элемента в нижнем регистре, например, `div` или `script`.
- **`domains`** — доменное ограничение для правила. Те же принципы, что и в [синтаксисе правил скрытия элементов](#elemhide-syntax).
- **`attributes`** — список атрибутов, ограничивающих выбор элементов. `name` — имя атрибута, `value` — подстрока, которая содержится в значении атрибута.

**Примеры**

**HTML-код:**

```html
<script data-src="/banner.js"></script>
```

**Правило:**

```adblock
example.org$$script[data-src="banner"]
```

Это правило удалит из кода страниц все элементы `script` со значением `data-src`, содержащим подстроку `banner`. При этом правило будет работать только для домена `example.org` и всех его поддоменов.

**Специальные атрибуты**

Помимо обычных атрибутов, значение которых проверяется у каждого элемента, существует набор специальных атрибутов правила, которые изменяют способ работы правила. Ниже мы перечислим все эти атрибуты:

- **`tag-content`**

Пожалуй, наиболее часто используемый специальный атрибут. Он ограничивает выбор теми элементами, внутренний HTML-код которых (innerHTML) содержит указанную подстроку.

Используйте `""` для экранирования `"`, например: `$$script[tag-content="alert(""this is ad"")"]`

Например, рассмотрим такой HTML код:

```html
<script type="text/javascript">
    document.write('<div>banner text</div>" />');
</script>
```

Следующее правило удалит все `script` элементы с подстрокой `banner` в их коде:

```adblock
$$script[tag-content="banner"]
```

**Вложенные элементы**

Если мы имеем дело с несколькими вложенными друг в друга элементами, каждый из которых подходит под одно и то же правило фильтрации HTML-контента, то удалены будут все эти элементы.

- **`wildcard`**

Этот специальный атрибут работает почти как `tag-content` и позволяет проверить внутренний HTML-код элемента. Правило проверит, удовлетворяет ли HTML-код элемента заданному [шаблону поиска](https://ru.wikipedia.org/wiki/Шаблон_поиска).

Используйте `""` для экранирования `"`, например: `$$script[wildcard=""banner""]`

Например: `$$script[wildcard="*banner*text*"]`

Оно проверит, что код элемента содержит две последовательные подстроки `banner` и `text`.

- **`max-length`**

Задает максимальную длину содержимого HTML-элемента. Если этот параметр задан и длина содержимого превышает заданное значение, правило не применяется к элементу.

**Значение по умолчанию**

Если этот параметр не задан, то `max-length` считается равным 8192.

Например:

```adblock
$$div[tag-content="banner"][max-length="400"]
```

Это правило удалит все элементы `div`, код которых содержит подстроку `banner` и длина которых не превышает `400` символов.

- **`min-length`**

Задаёт минимальную длину содержимого HTML-элемента. Если этот параметр задан, и длина содержимого меньше заданного значения — правило не применяется к элементу.

Например:

```adblock
$$div[tag-content="banner"][min-length="400"]
```

Это правило удалит все элементы `div`, код которых содержит подстроку `banner` и длина которых превышает `400` символов.

**Исключения**

По аналогии с правилами скрытия, существует специальный тип правил, отключающий действие выбранного правила HTML-фильтрации для определённых доменов. Синтаксис правил-исключений такой же, только маркер `$$` заменяется на `$@$`.

Например, в фильтре есть правило:

```adblock
$$script[tag-content="banner"]
```

Если вы хотите отключить его для домена `example.com`, вы можете создать правило исключения:

```adblock
example.com$@$script[tag-content="banner"]
```

В некоторых случаях может потребоваться отключение всех запрещающих правил. Например, на время тестирования. Для этого воспользуйтесь правилом исключения без указания домена.

```adblock
$@$script[tag-content="banner"]
```

Применять такие исключения рекомендуется только в случае, когда изменить само правило скрытия невозможно. Во всех остальных случаях лучше изменить исходное правило, используя ограничение на домены.

## Правила JavaScript {#javascript-rules}

AdGuard поддерживает специальный тип правил, позволяющий вставить любой javascript-код на страницы сайтов.

Мы **настоятельно рекомендуем** использовать [скриптлеты](#scriptlets) вместо JavaScript-правил везде, где это возможно. JS-правила должны помочь в процессе отладки, но в качестве долгосрочного решения следует использовать скриптлеты.

**Синтаксис**

```text
rule = [domains]  "#%#" script
```

- **`domains`** — ограничение на домены, на страницах которых будет применено правило. Строится по тем же правилам, что и в случае [правил скрытия элементов](#elemhide-syntax).
- **`script`** — произвольный javascript-код **в одну строку**.

**Примеры**

- `example.org#%#window.__gaq = undefined;` выполняет код `window.__gaq = undefined;` на всех страницах сайта `example.org` и всех его поддоменах.

**Исключения**

По аналогии с правилами скрытия, существует специальный тип правил, отключающий действие выбранного javascript-правила фильтрации для определённых доменов. Синтаксис правил-исключений такой же, только маркер `#%#` заменяется на `#@%#`.

Например, в фильтре есть правило:

```adblock
#%#window.__gaq = undefined;
```

Если вы хотите отключить его для домена `example.com`, вы можете создать правило исключения:

```adblock
example.com#@%#window.__gaq = undefined;
```

В некоторых случаях может потребоваться отключение всех запрещающих правил. Например, на время тестирования. Для этого воспользуйтесь правилом исключения без указания домена.

```adblock
#@%#window.__gaq = undefined;
```

Применять такие исключения рекомендуется только в случае, когда изменить само правило скрытия невозможно. Во всех остальных случаях лучше изменить исходное правило, используя ограничение на домены.

:::caution Ограничения

Правила JavaScript можно использовать [**только в доверенных фильтрах**](#trusted-filters).

:::

:::info Совместимость

JavaScript-правила не поддерживаются в AdGuard Content Blocker.

:::

## Правила скриптлета {#scriptlets}

Скриптлет — это функция JavaScript с расширенными возможностями для блокировки контента. Такие функции могут использоваться в декларативной манере в правилах фильтрации AdGuard.

:::note

AdGuard поддерживает множество различных скриптлетов. Чтобы добиться совместимости между различными блокировщиками, мы также поддерживаем синтаксис uBO и ABP.

:::

**Синтаксис**

```text
rule = [domains]  "#%#//scriptlet(" scriptletName arguments ")"
```

- **`scriptletName`** (обязательно) — это имя скриптлета из библиотеки скриптлетов AdGuard
- **`arguments`** (опционально) — это список аргументов в формате `string` (другие типы аргументов не поддерживаются)

**Примеры**

```adblock
example.org#%#//scriptlet("abort-on-property-read", "alert")
```

Это правило применится на страницах домена `example.org` и его поддоменов и выполнит скриптлет `abort-on-property-read` с параметром `alert`.

Подробнее об [отладке скриптлетов](#debug-scriptlets).

Больше информации о скриптлетах можно найти на [GitHub](https://github.com/AdguardTeam/Scriptlets#scriptlets).

:::info Совместимость

Скриптлеты не поддерживаются в AdGuard Content Blocker.

:::

### Доверенные скриптлеты {#trusted-scriptlets}

Доверенные скриптлеты — это [скриптлеты](#scriptlets) с расширенной функциональностью. У них тот же синтаксис и ограничения. У имён доверенных скриптлетов есть префикс `trust-`, например, `trust-set-cookie`, чтобы их было легко отличить от обычных скриптлетов.

:::note

Доверенные скриптлеты несовместимы с другими блокировщиками рекламы, кроме AdGuard.

:::

:::caution Ограничения

Доверенные скриптлеты можно использовать [**только в доверенных фильтрах**](#trusted-filters).

:::

:::info Совместимость

Доверенные скриптлеты не поддерживаются в AdGuard Content Blocker.

:::

Подробнее об [отладке скриптлетов](#debug-scriptlets).

Больше информации о доверенных скриптлетах можно найти на [GitHub](https://github.com/AdguardTeam/Scriptlets#trusted-scriptlets).

## Модификаторы для небазовых правил {#non-basic-rules-modifiers}

Поведение любого правила можно изменить, используя модификаторы, описанные ниже.

**Синтаксис**

```text
rule = "[$" modifiers "]" [rule text]
modifiers = modifier0[, modifier1[, ...[, modifierN]]]
```

- **`modifier`** — набор модификаторов, описанных ниже.
- **`rule text`** — правило, которое нужно модифицировать.

Например: `[$domain=example.com,app=test_app]##selector`.

В значениях модификаторов следующие символы должны быть экранированы: `[`, `]`, `,` и `\` (если он не используется для экранирования). Используйте `\`, чтобы экранировать их. Например, экранированная скобка выглядит так: `\]`.

| Modifier \ Products                  | [CoreLibs apps][cl-apps] | [AdGuard for Chromium][ext-chr] | [AdGuard for Firefox][ext-ff] | [AdGuard для iOS][ios-app] | [AdGuard для Safari][ext-saf] | [AdGuard Content Blocker][and-cb] |
| ------------------------------------- |:------------------------:|:-------------------------------:|:-----------------------------:|:--------------------------:|:-----------------------------:|:---------------------------------:|
| [$app](#non-basic-app-modifier)       |            ✅             |                ❌                |               ❌               |             ❌              |               ❌               |                 ❌                 |
| [$domain](#non-basic-domain-modifier) |            ✅             |                ✅                |               ✅               |             ✅              |               ✅               |                 ❌                 |
| [$path](#non-basic-path-modifier)     |            ✅             |                ✅                |               ✅               |             ✅              |               ✅               |                 ❌                 |
| [$url](#non-basic-url-modifier)       |            ✅             |                ⏳                |               ⏳               |             ❌              |               ❌               |                 ❌                 |

:::note

- ✅ — fully supported
- ⏳ — feature that has been implemented or is planned to be implemented but is not yet available in any product
- ❌ — not supported

:::

### **`$app`** {#non-basic-app-modifier}

Модификатор `$app` ограничивает действие правила до конкретного приложения или списка приложений. Поведение и синтаксис модификатора полностью совпадают с соответствующим [модификатором `$app` для базовых правил](#app-modifier).

**Примеры**

- `[$app=org.example.app]example.com##.textad` скрывает `div` с классом `textad` на `example.com` и всех поддоменах в запросах, отправленных из приложения Android `org.example.app`.
- `[$app=~org.example.app1|~org.example.app2]example.com##.textad` скрывает `div` с классом `textad` на `example.com` и всех поддоменах в запросах, отправленных из любого приложения, кроме `org.example.app1` и `org.example.app2`.
- `[$app=com.apple.Safari]example.org#%#//scriptlet('prevent-setInterval', 'check', '!300')` применяет скриптлет `prevent-setInterval` только в браузере Safari на Mac.
- `[$app=org.example.app]#@#.textad` отключает все правила `##.textad` для всех доменов при использовании `org.example.app`.

:::info Совместимость

Такие правила с модификатором `$app` поддерживаются AdGuard для Windows, Mac и Android.

:::

### **`$domain`** {#non-basic-domain-modifier}

Модификатор `$domain` ограничивает область действия правила списком доменов и их поддоменов. Поведение и синтаксис модификатора полностью совпадают с соответствующим [модификатором `$domain` для базовых правил](#domain-modifier).

**Примеры**

- `[$domain=example.com]##.textad` скроет элемент `div` с классом `textad` на домене `example.com` и всех его поддоменах.
- `[$domain=example.com|example.org]` скроет элемент с атрибутом `id` равным `adblock` на доменах `example.com`, `example.org` и всех их поддоменах.
- `[$domain=~example.com]##.textad` скроет элементы `div` с классом `textad` на всех доменах, кроме `example.com` и всех его поддоменов.

Существует два способа указать доменные ограничения для косметических правил:

1. «классический»: обозначить ограничение на домены перед маской и атрибутами правила: `example.com##.textad`;
2. с помощью модификаторов: обозначить ограничение на домены через модификатор `$domain`: `[$domain=example.com]##.textad`.

Правила, нарушающие эти ограничения, считаются недействительными. Например, правило `[$domain=example.org]example.com##.textad` будет отклонено.

:::info Совместимость

Правила с модификатором `$domain` поддерживаются в AdGuard для Windows, Mac, Android и Браузерном расширении AdGuard для Chrome, Firefox и Edge.

:::

### **`$path`** {#non-basic-path-modifier}

Модификатор `$path` ограничивает область применения правила определёнными местами или страницами на сайтах.

**Синтаксис**

```text
$path ["=" pattern]
```

`pattern` (опциональный) — это маска пути, которой ограничено правило. Его синтаксис и поведение почти такие же, как в [шаблоне базовых правил](#basic-rules-syntax). Вы также можете использовать [специальные символы](#basic-rules-special-characters), кроме `||`, который в этом случае не имеет смысла (см. примеры ниже).

Если для `$path` не задан `pattern`, правило будет применяться только на главной странице сайта.

Модификатор `$path` также соответствует строке запроса.

Модификатор `$path` поддерживает регулярные выражения в [так же, как и базовые правила](#regexp-support).

**Примеры**

- `[$path=page.html]##.textad` скрывает `div` с классом `textad` на `/page.html` или `/page.html?<query>` или `/sub/page.html` или `/another_page.html`
- `[$path=/page.html]##.textad` скрывает `div` с классом `textad` на `/page.html` или `/page.html?<query>` или `/sub/page.html` любого домена, но не `/another_page.html`
- `[$path=|/page.html]##.textad` скрывает `div` с классом `textad` на `/page.html` или `/page.html?<query>` любого домена, но не `/sub/page.html`
- `[$path=/page.html|]##.textad` скрывает `div` с классом `textad` на `/page.html` или `/sub/page.html` любого домена, но не на `/ страница.html?<query>`
- `[$path=/page*.html]example.com##.textad` скрывает `div` с классом `textad` на `/page1.html`, `/page2.html` или любом другом пути, соответствующем `/page<...>.html` сайта `example.com`
- `[$path]example.com##.textad` скрывает `div` с классом `textad` на главной странице `example.com`
- `[$domain=example.com,path=/page.html]##.textad` скрывает `div` с классом `textad` на `page.html` домена `example.com` и всех его поддоменах, но не на `other_page.html`
- `[$path=/\\/(sub1|sub2)\\/page\\.html/]##.textad` скрывает `div` с классом `textad` как на `/sub1/page.html`, так и на `/sub2/page.html` любого домена (обратите внимание на [специальные экранированные символы](#non-basic-rules-modifiers-syntax))

:::info Совместимость

Rules with `$path` modifier are not supported by AdGuard Content Blocker.

:::

### **`$url`** {#non-basic-url-modifier}

Модификатор `$url` ограничивает действие правила запросами, URL которых соответствует указанной маске.

**Синтаксис**

```text
url = pattern
```

где `pattern` — маска адреса, синтаксис которой соответствует маске адреса [`pattern` базовых правил](#basic-rules-syntax) за исключением того, что [некоторые символы](#non-basic-rules-modifiers-syntax) должны быть экранированы. [Специальные символы](#basic-rules-special-characters) и [регулярные выражения](#regexp-support) также поддерживаются.

**Примеры**

- `[$url=||example.com/content/*]##div.textad` скрывает `div` с классом `textad` в запросах, например, к `https://example.com/content/article.html` и `https://subdomain.example.com/content/article.html`.
- `[$url=||example.org^]###adblock` скрывает элемент с атрибутом `id` равным `adblock` в запросах к `example.org` и всем его поддоменам.
- `[$url=/\[a-z\]+\\.example\\.com^/]##.textad` скрывает `div` с классом `textad` в запросах ко всем доменам, соответствующим регулярному выражению `[a-z]+\.example\.com^`.

:::info Совместимость

Правила с модификатором `$url` поддерживаются в AdGuard для Windows, Mac и Android с **CoreLibs версии 1.11 или выше**.

:::

## Информация для разработчиков фильтров

Если вы разрабатываете сторонний фильтр, известный AdGuard, вам может быть интересна информация, представленная в этом разделе. Пожалуйста, имейте в виду, что подсказки будут применяться только к зарегистрированным фильтрам. Фильтр считается зарегистрированным и известным AdGuard, если он присутствует в [перечне известных фильтров](https://filters.adtidy.org/extension/chromium/filters.json). Если вы желаете зарегистрировать свой фильтр, пожалуйста, направьте запрос в [репозиторий AdGuardFilters](https://github.com/AdguardTeam/AdguardFilters).

### Директивы препроцессора

Мы предоставляем несколько директив препроцессора, которые могут быть использованы разработчиками фильтров для улучшения совместимости с различными блокировщиками рекламы. Директивы могут:

- [включать содержимое отдельного файла в фильтр](#include-directive)
- [применять правила в зависимости от типа блокировщика](#conditions-directive)
- [уточнять блокировщик контента для применения правил в Safari](#safari-affinity-directive)

:::note

Любая ошибка в директиве препроцессора приведёт к невозможности обновить фильтр, как если бы URL фильтра был недоступен.

Препроцессорные директивы можно использовать в пользовательских правилах или фильтрах.

:::

#### Включение файла {#include-directive}

Директива `!#include` позволяет включать в фильтр содержимое заданного файла. Она поддерживает только файлы из того же источника, чтобы удостовериться, что разработчик фильтров является владельцем указанного файла. Включённый файл также может содержать директивы препроцессора (даже другие`!#include`-директивы). Блокировщики должны принимать во внимание случай рекурсивного использования `!#include` и внедрять защитный механизм.

**Синтаксис**

```adblock
!#include file_path
```

где `file_path` — абсолютный (того же источника) или относительный путь к файлу.

Файлы должны находиться на том же домене, но могут быть расположены в другой директории.

Если включённый файл не найден или недоступен, не будут работать обновления всего фильтра.

Для локальных собственных фильтров ограничение на тот же источник не распространяется.

**Примеры**

URL фильтра: `https://example.org/path/filter.txt`

```adblock
! Корректный (тот же источник):
!#include https://example.org/path/includedfile.txt
!
! Корректный (относительный путь):
!#include /includedfile.txt
!#include ../path2/includedfile.txt
!
! Некорректный (другой источник):
!#include https://domain.com/path/includedfile.txt
```

#### Условия {#conditions-directive}

Разработчики фильтров могут использовать условия, чтобы подставлять нужные правила, в зависимости от типа блокировщика. Когда блокировщик рекламы сталкивается с директивой `!#if`, за которой следует директива `!#endif`, он скомпилирует код внутри блока, только если выполнено указанное условие. Условие поддерживает все основные логические операторы.

Директива с условием, начинающаяся с директивы `!#if`, должна явно прерываться директивой `!#endif`.

Пробелы имеют значение. `!#if` — это корректная директива, в то время как `!# if` — не корректная.

**Синтаксис**

```adblock
!#if (conditions)
rules_list
!#endif
```

где:

- `!#if (conditions)` — начало блока
- `conditions` — точно так же, как и в случае с некоторыми популярными языками программирования, условия препроцессинга основаны на константах, объявляемых блокировщиками. Разработчики блокировщиков самостоятельно определяют, какие именно константы объявлять. Возможные значения:
    - `adguard` объявляется всегда; даёт разработчикам фильтров понять, что это один из продуктов AdGuard; должно быть достаточно в 95% случаев
    - специфичные для конкретных продуктов константы, которые нужны в редких случаях, когда правило должно работать (или не работать — тогда перед константой используйте `!`) только для конкретного продукта:
        - `adguard_app_windows` — AdGuard для Windows
        - `adguard_app_mac` — AdGuard для Mac
        - `adguard_app_android` — AdGuard для Android
        - `adguard_app_ios` — AdGuard для iOS
        - `adguard_ext_safari` — AdGuard для Safari
        - `adguard_ext_chromium` — Браузерное расширение AdGuard для Chrome (и браузеры на основе Chrome, например, новый Microsoft Edge)
        - `adguard_ext_firefox` — Браузерное расширение AdGuard для Firefox
        - `adguard_ext_edge` — Браузерное расширение AdGuard для Edge Legacy
        - `adguard_ext_opera` — Браузерное расширение AdGuard для Opera
        - `adguard_ext_android_cb` — AdGuard Content Blocker для мобильных браузеров Samsung и Яндекс
        - `ext_ublock` — особый случай; эта константа объявляется, когда версия фильтра для uBlock компилируется при помощи [FiltersRegistry](https://github.com/AdguardTeam/FiltersRegistry)
- `rules_list` — список правил
- `!#endif` — конец блока

**Примеры**

```adblock
! для всех продуктов AdGuard, кроме AdGuard для Safari
!#if (adguard && !adguard_ext_safari)
||example.org^$third-party
domain.com##div.ad
!#endif
```

```adblock
! директивы также можно совмещать
!#if (adguard_app_android)
!#include /androidspecific.txt
!#endif
```

#### Влияние на Safari {#safari-affinity-directive}

Safari's limit for each content blocker is 150,000 active rules. But in AdGuard for Safari and AdGuard for iOS, we've split the rules into 6 content blockers, thus increasing the rule limit to 900,000.

Here is the composition of each content blocker:

- AdGuard General — Блокировка рекламы, Языковые
- AdGuard Privacy — Антитрекинг
- AdGuard Social — Виджеты социальных сетей, Раздражители
- AdGuard Security — Безопасность
- AdGuard Other — Другие
- AdGuard Custom — Собственные

User rules and allowlist are added to every content blocker.

The main issue with using multiple content blockers is that the rules within these content blockers cannot influence each other. This may lead to different unexpected issues. So filter maintainers may use `!#safari_cb_affinity` to define Safari content blocker affinity for the rules inside of the directive block.

**Синтаксис**

```adblock
!#safari_cb_affinity(content_blockers)
rules_list
!#safari_cb_affinity
```

где:

- `!#safari_cb_affinity(content_blockers)` — начало блока
- `content_blockers` — список блокировщиков контента, разделённых запятой. Возможные значения:
    - `general` — блокировщик контента AdGuard General
    - `privacy` — блокировщик контента AdGuard Privacy
    - `social` — блокировщик контента AdGuard Social
    - `security` — блокировщик контента AdGuard Security
    - `other` — блокировщик контента AdGuard Other
    - `custom` — блокировщик контента AdGuard Custom
    - `all` — специальное ключевое слово, которое означает, что правила должны быть включены во **все** блокировщика контента
- `rules_list` — список правил
- `!#safari_cb_affinity` — конец блока

**Примеры**

```adblock
! чтобы не скрывать указанный элемент, который скрывается Базовым фильтром:
!#safari_cb_affinity(general)
example.org#@#.adBanner
!#safari_cb_affinity
```

```adblock
! чтобы разблокировать запрос, который блокируется Фильтром счётчиков и систем аналитики:
!#safari_cb_affinity(privacy)
@@||example.org^
!#safari_cb_affinity
```

### Подсказки

"Hint" is a special comment, instruction to the filters compiler used on the server side (see [FiltersRegistry](https://github.com/AdguardTeam/FiltersRegistry)).

**Синтаксис**

```adblock
!+ HINT_NAME1(PARAMS) HINT_NAME2(PARAMS)
```

Multiple hints can be applied.

#### `NOT_OPTIMIZED` hint

For each filter, AdGuard compiles two versions: full and optimized. Optimized version is much more lightweight and does not contain rules which are not used at all or used rarely.

Rules usage frequency comes from the collected [filter rules statistics](../tracking-filter-statistics). But filters optimization is based on more than that — some filters have specific configuration. This is how it looks like for Base filter:

```text
"filter": Базовый фильтр AdGuard,
"percent": 30,
"minPercent": 20,
"maxPercent": 40,
"strict": true
```

где:

- **filter** — идентификатор фильтра
- **percent** — ожидаемый процент оптимизации `~= (количество правил в оптимизированном фильтре) / (количество правил в исходном фильтре) * 100`
- **minPercent** — нижняя граница значения `percent`
- **maxPercent** — верхняя граница значения `percent`
- **Strict** — если `percent < minPercent` или `percent > maxPercent` и включён режим Strict, то компиляция фильтра должна завершиться неудачно, в противном случае должны использоваться оригинальные правила

In other words, `percent` is the "compression level". For instance, for the Base filter it is configured to 40%. It means that optimization algorithm should strip 60% of rules.

Eventually, here are the two versions of the Base filter for AdGuard Browser Extension:

- полная: https://filters.adtidy.org/extension/chromium/filters/2.txt
- оптимизированная: https://filters.adtidy.org/extension/chromium/filters/2_optimized.txt

**If you want to add a rule which should not be removed at optimization use the `NOT_OPTIMIZED` hint:**

```adblock
!+ NOT_OPTIMIZED
||example.org^
```

**And this rule will not be optimized only for AdGuard for Android:**

```adblock
!+ NOT_OPTIMIZED PLATFORM(android)
||example.org^
```

#### Подсказки `PLATFORM` и `NOT_PLATFORM`

Used to specify the platforms to apply the rules. List of existing platforms and links to Base filter, for example, for each of them:

- `windows` — AdGuard для Windows — [https://filters.adtidy.org/windows/filters/2.txt](https://filters.adtidy.org/windows/filters/2.txt)

- `mac` — AdGuard для Mac — [https://filters.adtidy.org/mac_v2/filters/2.txt](https://filters.adtidy.org/mac_v2/filters/2.txt)

- `android` — AdGuard для Android — [https://filters.adtidy.org/android/filters/2.txt](https://filters.adtidy.org/android/filters/2.txt)

- `ios` — AdGuard для iOS — [https://filters.adtidy.org/ios/filters/2.txt](https://filters.adtidy.org/ios/filters/2.txt)

- `ext_chromium` — Браузерное расширение AdGuard для Chrome — [https://filters.adtidy.org/extension/chromium/filters/2.txt](https://filters.adtidy.org/extension/chromium/filters/2.txt)

- `ext_ff` — Браузерное расширение AdGuard для Firefox — [https://filters.adtidy.org/extension/firefox/filters/2.txt](https://filters.adtidy.org/extension/firefox/filters/2.txt)

- `ext_edge` — Браузерное расширение AdGuard для Edge — [https://filters.adtidy.org/extension/edge/filters/2.txt](https://filters.adtidy.org/extension/edge/filters/2.txt)

- `ext_opera` — Браузерное расширение AdGuard для Opera — [https://filters.adtidy.org/extension/opera/filters/2.txt](https://filters.adtidy.org/extension/opera/filters/2.txt)

- `ext_safari` — AdGuard для Safari — [https://filters.adtidy.org/extension/safari/filters/2.txt](https://filters.adtidy.org/extension/safari/filters/2.txt)

- `ext_android_cb` — AdGuard Content Blocker — [https://filters.adtidy.org/extension/android-content-blocker/filters/2.txt](https://filters.adtidy.org/extension/android-content-blocker/filters/2.txt)

- `ext_ublock` — uBlock Origin — [https://filters.adtidy.org/extension/ublock/filters/2.txt](https://filters.adtidy.org/extension/ublock/filters/2.txt)

**Примеры**

This rule will be available only in AdGuard for Windows, Mac, Android:

```adblock
!+ PLATFORM(windows,mac,android)
||example.org^
```

This rule will be available for every platform except AdGuard for Safari, AdGuard Content Blocker, and AdGuard for iOS:

```adblock
!+ NOT_PLATFORM(ext_safari, ext_android_cb, ios)
||example.org^
```

## Отладка правил фильтрации

It may be possible to create simple filtering rules "in your head" but for anything even slightly more complicated you will need additional tools to debug and iterate them. There are tools to assist you with that. You can use DevTools in Chrome and its analogs in other browsers but most AdGuard products provide another one — Filtering log.

### Журнал фильтрации

Filtering log is an advanced tool that will be helpful mostly to filter developers. It lists all web requests that pass through AdGuard, gives you exhaustive information on each of them, offers multiple sorting options, and has other useful features.

Depending on which AdGuard product you are using, Filtering log can be located in different places.

- В **AdGuard для Windows** вы найдёте его во вкладке настроек *Антибаннер* или через меню трея;
- В **AdGuard для Mac** он располагается в разделе *Настройки → Дополнительно → Журнал запросов*;
- В **AdGuard для Android** это отдельный пункт бокового меню. Также в Журнал фильтрации отдельного приложения или сайта можно перейти из Помощника.
- В **Браузерном расширении AdGuard** он находится во вкладке настроек *Дополнительно*, а также доступен после правого клика по иконке расширения. Только браузеры на основе Chromium и Firefox отображают **правила скрытия элементов** (включая CSS, ExtCSS) и **JS-правила и скриптлеты** в своих Журналах фильтрации.

:::note

In **AdGuard for iOS** and in **AdGuard for Safari** Filtering log does not exist because of the way content blockers are implemented in Safari. AdGuard does not see the web requests and therefore cannot display them.

:::

### Режим отладки селекторов {#selectors-debug-mode}

Sometimes, you might need to check the performance of a given selector or a stylesheet. In order to do it without interacting with JavaScript directly, you can use a special `debug` style property. When `ExtendedCss` meets this property, it enables the debugging mode either for a single selector or for all selectors, depending on the `debug` value.

Open the browser console while on a web page to see the timing statistics for selector(s) that were applied there. Debugging mode displays the following stats as object where each of the debugged selectors are keys, and value is an object with such properties:

**Always printed:**

- `selectorParsed` — окончательный текст селектора после парсинга
- `timings` — список узлов DOM, соответствующих селектору
    - `appliesCount` — общее количество раз, когда на странице был применён селектор
    - `appliesTimings` — время, которое ушло на применение селектора на странице, для каждого из случаев применения этого селектора (в миллисекундах)
    - `meanTiming` — среднее время, ушедшее на применение селектора на странице
    - `standardDeviation` — стандартное отклонение
    - `timingsSum` — общее время, ушедшее на все применения селектора на текущей странице

**Printed only for remove pseudos:**

- `removed` — флаг, сигнализирующий об удалении элементов

**Printed if elements are not removed:**

- `matchedElements` — список узлов DOM, соответствующих селектору
- `styleApplied` — объявление обработанного стиля правила, связанного с селектором

**Примеры**

**Debugging a single selector:**

When the value of the `debug` property is `true`, only information about this selector will be shown in the browser console.

```adblock
#$?#.banner { display: none; debug: true; }
```

**Enabling global debug:**

When the value of the `debug` property is `global`, the console will display information about all extended CSS selectors that have matches on the current page, for all the rules from any of the enabled filters.

```adblock
#$?#.banner { display: none; debug: global; }
```

**Testing extended selectors without AdGuard**

ExtendedCss can be executed on any page without using any AdGuard product. In order to do that you should copy and execute the following code in a browser console:

```js
!function(e,t,d){C=e.createElement(t),C.src=d,C.onload=function(){alert("ExtendedCss loaded successfully")},s=e.getElementsByTagName(t)[0],s?s.parentNode.insertBefore(C,s):(h=e.getElementsByTagName("head")[0],h.appendChild(C))}(document,"script","https://AdguardTeam.github.io/ExtendedCss/extended-css.min.js");
```

Alternatively, install the [ExtendedCssDebugger userscript](https://github.com/AdguardTeam/Userscripts/blob/master/extendedCssDebugger/extended-css.debugger.user.js).

Now you can now use the `ExtendedCss` from global scope, and run its method [`query()`](https://github.com/AdguardTeam/ExtendedCss#extended-css-query) as `Document.querySelectorAll()`.

**Примеры**

```js
const selector = 'div.block:has=(.header:matches-css(after, content: Ads))';

// массив HTMLElements, соответствующих `selector`, должен быть возвращён
ExtendedCss.query(selector);
```

### Отладка скриптлетов {#debug-scriptlets}

If you are using AdGuard Browser Extension and want to debug a [scriptlet](#scriptlets) or a [trusted scriptlet](#trusted-scriptlets) rule, you can get additional information by opening the Filtering log. In that case, scriptlets will switch to debug mode and there will be more information in the browser console.

The following scriptlets are especially developed for debug purposes:

- [`debug-current-inline-script`](https://github.com/AdguardTeam/Scriptlets/blob/master/wiki/about-scriptlets.md#debug-current-inline-script)
- [`debug-on-property-read`](https://github.com/AdguardTeam/Scriptlets/blob/master/wiki/about-scriptlets.md#debug-on-property-read)
- [`debug-on-property-write`](https://github.com/AdguardTeam/Scriptlets/blob/master/wiki/about-scriptlets.md#abort-on-property-write)
- [`log-addEventListener`](https://github.com/AdguardTeam/Scriptlets/blob/master/wiki/about-scriptlets.md#log-addEventListener)
- [`log-on-stack-trace`](https://github.com/AdguardTeam/Scriptlets/blob/master/wiki/about-scriptlets.md#log-on-stack-trace)
- [`log-eval`](https://github.com/AdguardTeam/Scriptlets/blob/master/wiki/about-scriptlets.md#log-eval)
- [`log`](https://github.com/AdguardTeam/Scriptlets/blob/master/wiki/about-scriptlets.md#log)

The following scriptlets also may be used for debug purposes:

- [`json-prune`](https://github.com/AdguardTeam/Scriptlets/blob/master/wiki/about-scriptlets.md#json-prune)
- [`prevent-fetch`](https://github.com/AdguardTeam/Scriptlets/blob/master/wiki/about-scriptlets.md#prevent-fetch)
- [`prevent-requestAnimationFrame`](https://github.com/AdguardTeam/Scriptlets/blob/master/wiki/about-scriptlets.md#prevent-requestanimationframe)
- [`prevent-setInterval`](https://github.com/AdguardTeam/Scriptlets/blob/master/wiki/about-scriptlets.md#prevent-setinterval)
- [`prevent-setTimeout`](https://github.com/AdguardTeam/Scriptlets/blob/master/wiki/about-scriptlets.md#prevent-settimeout)
- [`prevent-window-open`](https://github.com/AdguardTeam/Scriptlets/blob/master/wiki/about-scriptlets.md#prevent-window-open) со специальным параметром `replacement`
- [`prevent-xhr`](https://github.com/AdguardTeam/Scriptlets/blob/master/wiki/about-scriptlets.md#prevent-xhr)
- [`trusted-replace-fetch-response`](https://github.com/AdguardTeam/Scriptlets/blob/master/wiki/about-trusted-scriptlets.md#trusted-replace-fetch-response)
- [`trusted-replace-xhr-response`](https://github.com/AdguardTeam/Scriptlets/blob/master/wiki/about-trusted-scriptlets.md#trusted-replace-xhr-response)

## Good luck with creating filters

We wish you luck with creating you own ad filters.

If you need an advice on how to create your own filters properly, our forum has a [special section](https://forum.adguard.com/index.php?forums/69/) dedicated to writing your own filtering rules.

* * *

## Compatibility tables legend {#compatibility-tables-legend}

### Product shortcuts {#what-product}

1. `CoreLibs apps` — AdGuard for Windows, Mac, Android
1. `AdGuard for Chromium` — AdGuard Browser Extension for Chrome and other Chromium-based browsers, e.g. new Microsoft Edge, Opera
1. `AdGuard for Firefox` — AdGuard Browser Extension for Firefox
1. `AdGuard for iOS` — AdGuard for iOS and AdGuard for iOS Pro (for mobile Safari browser)
1. `AdGuard for Safari` — AdGuard for desktop Safari browser
1. `AdGuard Content Blocker` — Content Blocker for Android mobile browsers: Samsung Internet and Yandex Browser

### Compatibility shortcuts {#what-compatibility}

:::note

- ✅ — fully supported
- ✅ * — supported, but reliability may vary or limitations may occur; check the modifier description for more details
- 🧩 — may already be implemented in nightly or beta versions but is not yet supported in release versions
- ⏳ — feature that has been implemented or is planned to be implemented but is not yet available in any product
- ❌ — not supported
- 👎 — deprecated; still supported but will be removed in the future
- 🚫 — removed and no longer supported

:::

[cl-apps]: #what-product "AdGuard for Windows, Mac, Android"
[ext-chr]: #what-product "AdGuard Browser Extension for Chrome and other Chromium-based browsers"
[ext-ff]: #what-product "AdGuard Browser Extension for Firefox"
[ios-app]: #what-product "AdGuard for iOS and AdGuard for iOS Pro"
[ext-saf]: #what-product "AdGuard для Safari"
[and-cb]: #what-product "AdGuard Content Blocker for Samsung Internet and Yandex Browser on Android"

[sec-fetch-dest-header]: https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Sec-Fetch-Dest
