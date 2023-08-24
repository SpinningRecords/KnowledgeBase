---
title: Advanced (low-level) Settings guide
sidebar_position: 7
---

:::info

Bu makale, cihazınızı sistem düzeyinde koruyan çok işlevli bir reklam engelleyici olan Windows için AdGuard'ı ele alır. Nasıl çalıştığını görmek için [AdGuard uygulamasını indirin](https://adguard.com/download.html?auto=true)

:::

Previously known as low-level settings, Advanced Settings mostly contain options that go beyond the average user competence and aren't applied in everyday use. AdGuard for Windows is designed to work without ever having to change any of them, but they will provide additional features in some corner cases or when solving an uncommon problem.

:::caution

Mindlessly changing *Advanced Settings* can potentially cause problems with the performance of AdGuard, may break the Internet connection or compromise your security and privacy. You should only make changes to these settings if you are sure of what you are doing or if our support team has asked you to do so.

:::

## How to reach Advanced Settings

To go to *Advanced settings*, in the main windows click *Settings → General Settings* and scroll down to *Advanced Settings*. Alternatively, select *Advanced → Advanced settings...* in the tray menu.

## Advanced Settings

Once you open Advanced Settings, you will be presented with the following options:

### Block TCP Fast Open

If enabled, AdGuard will block TCP Fast Open in the Edge browser. To apply settings, you need to restart the browser.

### Use Encrypted ClientHello

Every encrypted Internet connection has an unencrypted part. This is the very first packet which contains the name of the server you are connecting to. Encrypted Client Hello teknolojisinin bu sorunu çözmesi ve şifrelenmemiş bilgilerin son kısmını şifrelemesi gerekiyor. To benefit from it, enable the *Use Encrypted ClientHello* option. Alan adı için ECH yapılandırmasını aramak için yerel bir DNS proxy'si kullanır. If it is found, ClientHello packet will be encrypted.

### Sitelerin sertifika şeffaflığını kontrol et

Chrome Sertifika Şeffaflığı Politikasını temel alarak alan adı için tüm sertifikaların orijinalliğini doğrular. Sertifika, Chrome Sertifika Şeffaflığı Politikasına uymuyorsa, AdGuard siteyi filtrelemez. Chrome da onu engeller.

### SSL/TLS sertifika iptal kontrollerini etkinleştir

Bu seçenek etkinleştirildiğinde, sitenin SSL/TLS sertifikasının iptal edilip edilmediğini kontrol etmek için eşzamansız OCSP kontrolleri gerçekleştirir.

OCSP kontrolü minimum zaman aşımı süresi içinde tamamlanırsa AdGuard hemen sonucu uygular: sertifika iptal edilirse bağlantıyı engelleyin veya sertifika geçerliyse bağlantı kurun.

Doğrulama çok uzun sürerse AdGuard bir bağlantı kurar ve arka planda kontrol etmeye devam eder. Sertifika iptal edilirse alan adına yapılan mevcut ve gelecekteki bağlantılar engellenecektir.

### Show AdGuard VPN in Settings

Bu seçeneğin etkinleştirilmesi, uygulamanın ve ürünün sitenin kolayca açılması için Ayarlar'da AdGuard VPN sekmesini görüntülemenize olanak tanır.

### Tam dosya yolu girerek uygulamayı filtrelemeden hariç tut

AdGuard'ın belirli bir uygulamayı filtrelememesini istiyorsanız, bunların tam yolunu belirtin; uygulamalar filtrelemenin dışında bırakılacaktır. Farklı yolları noktalı virgülle ayırın.

### AdGuard açılır pencere bildirimlerini etkinleştir

AdGuard açılır bildirimlerini görmek için bu özelliği etkinleştirin. Çok sık görünmezler ve yalnızca önemli bilgiler içerirler. Son açılan bildirimi geri çağırmak için tepsi menüsünü de kullanabilirsiniz.

### Filtre aboneliği URL bağlantılarını otomatik yakala

AdGuard'ın filtre aboneliği URL'lerini (ör. `abp:subscribe` ve benzeri) otomatik olarak engellemesini ve özel bir filtre yükleme uyarı kutusu açmasını istiyorsanız bu özelliği etkinleştirin.

### Yönlendirme sürücü modunu kullan

Bu seçenek etkinleştirilirse AdGuard tüm trafiği keser ve daha fazla filtreleme için yerel proxy sunucusuna yönlendirir.

Aksi takdirde, AdGuard tüm trafiği yönlendirme olmadan anında filtreler. Bu durumda sistem, AdGuard'ı internete bağlanan tek uygulama olarak kabul eder (diğer uygulamalar onun üzerinden yönlendirilir). Dezavantajı ise sistem Güvenlik Duvarı'nı daha az etkili hâle getirmesidir. Bunun iyi yanı, bu yaklaşımın biraz daha hızlı çalışmasıdır.

### Sistem başlangıcında ana pencereyi aç

Sistem yüklendikten sonra ana AdGuard penceresinin açılmasını sağlamak için bu seçeneği etkinleştirin. Gerçek filtreleme hizmetinin başlatılıp başlatılmamasını etkilemediğini unutmayın, bu ayar *Ayarlar → Genel Ayarlar* öğesinde bulunur.

### Sistem başlangıcında filtrelemeyi etkinleştir

v7.12'den başlayarak, varsayılan olarak AdGuard'ın hizmeti, AdGuard'ı sistem başlangıcında başlat seçeneği devre dışı bırakılırsa işletim sistemi başlatıldıktan sonra trafiği filtrelemez. Başka bir deyişle, AdGuard'ın hizmeti "boşta" modunda başlatılır. Uygulama başlatılmamış olsa bile AdGuard'ın trafiği filtrelemesini sağlamak için bu seçeneği etkinleştirin.

:::not

v7.12'den önce, AdGuard hizmeti varsayılan olarak filtreleme modunda başlatılıyordu ( *AdGuard'ı sistem başlangıcında başlat* devre dışı bırakılmış olsa bile). Eski davranıştan memnunsanız, bu seçeneği etkinleştirin.

:::

### localhost'u filtrele

AdGuard'ın geri dönen bağlantılarını filtrelemesini istiyorsanız, kutuyu işaretleyin. AdGuard VPN'iniz kuruluysa bu seçenek her zaman açık olur, aksi halde çalışmayacaktır.

### Belirtilen IP aralıklarını filtrelemeden hariç tut

If you don't want AdGuard to filter particular subnets, enable this feature and specify the IP ranges in the CIDR notation (e.g. 98.51.100.14/24) in the **IP ranges excluded from filtering** section below.

### HAR yazımını etkinleştir

Bu seçenek **yalnızca hata ayıklama amacıyla** etkinleştirilmelidir. Onay işaretini işaretlerseniz AdGuard, filtrelenen tüm HTTP istekleri hakkında bilgileri içeren HAR 1.2 biçiminde bir dosya oluşturur. Bu dosya Fiddler uygulamasıyla analiz edilebilir. İnternette gezinmeyi önemli ölçüde yavaşlatabileceğini unutmayın.

### Düz HTTP isteğine fazladan boşluk ekle

HTTP yöntemi ile URL arasına fazladan boşluk ekler ve Derin Paket İncelemesini önlemek için "Ana makine:" alanından sonraki boşluğu kaldırır. Örneğin, istek

`GET /foo/bar/ HTTP/1.1
Host: example.org`

will be converted to

`GET  /foo/bar/ HTTP/1.1
Host: example.org`

This option is only applied when the *Protect from DPI* Stealth mode option is enabled.

### Adjust size of fragmentation of initial TLS packet

Specifies the size of the TCP packet fragmentation, avoiding deep packet inspection. Bu seçenek yalnızca güvenli (HTTPS) trafiğini etkiler.

If this option is enabled, AdGuard splits the initial TLS packet (the ClientHello packet) into two parts: the first one has the specified length and the second one has the rest, up to the length of the whole initial TLS packet.

Geçerli değerler: 1–1500. If invalid size is specified, the value selected by the system will be used. This option is only applied when the *Protect from DPI* Stealth mode option is enabled.

### Plain HTTP request fragment size

HTTP istek parçalanmasının boyutunu ayarlar. Bu seçenek yalnızca düz HTTP trafiğini etkiler. Bu seçenek etkinleştirilirse, AdGuard ilk paketi iki parçaya böler: ilki belirtilen uzunluğa sahiptir ve ikincisi tüm orijinal paketin uzunluğuna kadar geri kalanına sahiptir.

Geçerli değerler: 1–1500. Geçersiz boyut belirtilirse, sistem tarafından seçilen değer kullanılır. This option is only applied when the *Protect from DPI* Stealth mode option is enabled.

### Show QUIC

QUIC protokolü kayıtlarının filtreleme günlüğünde görüntülenmesine izin verir. Yalnızca engellenen istekler için.

### Enable TCP keepalive

Etkin olduğundan emin olmak ve NAT zaman aşımlarını yenilemek için boşta olan bağlantı üzerinden periyodik olarak TCP paketleri gönderir. Bu seçenek, bazı İSS'lerin kullandığı katı ağ adresi dönüştürme (NAT) ayarlarını atlamak için yararlı olabilir.

### TCP keepalive interval

Burada, bir keepalive probu göndermeden önce saniye cinsinden boşta kalma süresini belirtebilirsiniz. 0 belirtilirse, sistem tarafından seçilen değer kullanılacaktır.

:::not

Bu ayar yalnızca *TCP keepalive'ı etkinleştir* seçeneği etkinleştirildiğinde çalışır.

:::

### TCP keepalive timeout

Burada, yanıt vermeyen bir eşe başka bir keepalive probu göndermeden önce geçen süreyi saniye cinsinden belirtebilirsiniz. 0 belirtilirse, sistem tarafından seçilen değer kullanılacaktır.

:::not

Bu ayar yalnızca *TCP keepalive'ı etkinleştir* seçeneği etkinleştirildiğinde çalışır.

:::

### Block Java

Bazı siteler ve web hizmetleri hâlâ Java Eklentilerini desteklemektedir. Java eklentilerine temel oluşturan API'nin ciddi güvenlik açıkları bulunmaktadır. Güvenlik amacıyla bu tür eklentileri devre dışı bırakabilirsiniz. Bununla birlikte, *Java'yı engelle* seçeneğini kullanmaya karar verseniz bile, JavaScript hâlâ etkin olacaktır.

### DNS sunucusu zaman aşımı süresi

Here you can specify the time in milliseconds that AdGuard will wait for the response from the selected DNS server before resorting to fallback. If you don’t fill in this field or enter an invalid value, the value of 5000 will be used.

### Use HTTP/3 for DNS-over-HTTPS

Seçilen üst kaynak bu protokolü destekliyorsa, bağlantıyı hızlandırmak amacıyla DNS-over-HTTPS üst kaynakları için HTTP/3'ü etkinleştirir. Bu, bu seçeneğin etkinleştirilmesinin tüm DNS isteklerinin HTTP/3 aracılığıyla gönderileceğini garanti etmediği anlamına gelir.

### Use fallback DNS upstreams

Seçilen üst kaynaklara yönelik tüm DNS istekleri başarısız olursa, normal sorgular yedek kaynağa yönlendirilecektir.

### Query DNS upstreams in parallel

All upstreams will be queried in parallel and the first response is returned. DNS sorguları paralel olarak yapıldığından bu özelliğin etkinleştirilmesi internet hızını artırır.

### Always respond to failed DNS queries

Yönlendirilen üst kaynakların her birinde ve yedek alan adlarında adres çözümlemesi başarısız olursa, DNS isteğine verilen yanıt `SERVFAIL` olacaktır.

### Güvenli DNS isteklerinin filtrelenmesini etkinleştir

AdGuard, düz DNS isteklerine ek olarak güvenli DNS isteklerini yerel DNS proxy'sine yönlendirir.

### Blocking mode for hosts rules

Here you can select the way AdGuard will respond to domains blocked by DNS rules based on [hosts rule syntax](https://adguard-dns.io/kb/general/dns-filtering-syntax/#etc-hosts-syntax).

- Reply with “Refused” error
- Reply with “NxDomain” error
- Reply with a custom IP address

### Blocking mode for adblock-style rules

Here you can select the way AdGuard will respond to domains blocked by DNS rules based on [adblock-style syntax](https://adguard-dns.io/kb/general/dns-filtering-syntax/#adblock-style-syntax).

- Reply with “Refused” error
- Reply with “NxDomain” error
- Reply with a custom IP address

### Özel IPv4 adresi

hosts kuralları için Engelleme modunda veya reklam engelleme stili kuralları için Engelleme modunda Özel IP adresi seçilirse, bu IP adresi engellenen A isteklerine yanıt olarak döndürülür. If none are specified, AdGuard will reply with the default Refused error.

### Özel IPv6 adresi

hosts kuralları için Engelleme modunda veya reklam engelleme stili kuralları için Engelleme modunda Özel IP adresi seçilirse, bu IP adresi engellenen AAAA isteklerine yanıt olarak döndürülür. If none are specified, AdGuard will reply with the default "Refused" error.

### Yedek sunucular

Here you can specify an alternate DNS server to which a DNS request will be rerouted if the main server fails to respond within the timeout period specified in the next section. There are three options to choose from:

- Yedek sunucuları kullanmayın;
- Use system default servers;
- Use custom servers.

### Block ECH

If enabled, AdGuard strips Encrypted Client Hello parameters from responses.

### Özel yedek sunucuların listesi

AdGuard'ın özel yedek sunucular kullanmasını istiyorsanız, bunları bu bölümde her satıra bir tane gelecek şekilde listeleyin.

### Özel önyükleme adresleri listesi

Önyükleme, daha önce *DNS koruması* içinde seçtiğiniz güvenli DNS sunucusunun IP adresini almak için kullanılan bir ara DNS sunucusudur. Sunucu adresini harflerle belirten protokoller (örneğin, DNS-over-TLS gibi) kullanılırken böyle bir "orta yol" gereklidir. Bu durumda, önyüklemeyi bir çevirmen görevi görerek harfleri sisteminizin anlayabileceği sayılara dönüştürür.

Varsayılan olarak sistem DNS çözümleyicisi kullanılır ve ilk önyükleme isteği bağlantı noktası 53 aracılığıyla yapılır. Eğer bu size uymuyorsa, şifrelenmiş DNS sunucusunun adresini belirlemek için kullanılacak DNS sunucularının IP adreslerini yukarıdan aşağıya doğru listeleyin. Belirtilen IP adresleri listelenen sıraya göre uygulanacaktır. Geçersiz adres belirtirseniz veya hiç adres belirtmezseniz sistem IP'leri kullanılacaktır.

### DNS exclusions

Burada listelenen alan adlarına yapılan tüm DNS istekleri, uygulamanın ayarlarında belirtilen DNS sunucusu yerine sistemin varsayılan DNS sunucusuna yönlendirilecektir. Ayrıca, DNS engelleme kuralları bu tür isteklere uygulanmayacaktır.

### Belirtilen Wi-Fi ağ adlarını (SSID'ler) DNS filtrelemesinden hariç tut

DNS koruması, bu bölümde listelenen Wi-Fi ağlarını kapsamaz. Wi-Fi ağ adlarını (SSID'leri) her satıra bir tane belirtin. Belirli bir Wi-Fi ağı AdGuard Home veya başka bir DNS koruma sistemi tarafından zaten korunuyorsa bu yararlı olabilir. Bu durumda DNS isteklerini tekrar filtrelemek gereksizdir.
