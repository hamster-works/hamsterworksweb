import './style.css'
import { driverInstallText, getCopy, getLanguage, languages, productCopy, productDetails, setLanguage, type Language } from './i18n'
import { extraCopy, extraProductCopy, extraProductDetails, extraSystemRequirements } from './i18n-extra'

type Product = {
  slug: string
  name: string
  label: string
  description: string
  image: string
  icon?: string
  gallery?: string[]
  accent: string
  features: string[]
  privacy: string
  links?: string
  support?: string
  disclaimer?: string
  formUrl?: string
}

const CONTACT_FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSeFIVAmqLBmGFbkh-ScSXhjg2Pke4hm59ikjNLFL1PLITn32w/viewform?embedded=true'
const HAMSTER_MARK = '<svg class="hamster-mark-svg" viewBox="0 0 40 32" focusable="false"><g class="wheel-spin"><circle cx="20" cy="15" r="13" fill="var(--paper)" stroke="var(--blue)" stroke-width="2"/><path d="M20 2v26M7 15h26M10.8 5.8l18.4 18.4M29.2 5.8 10.8 24.2" fill="none" stroke="var(--blue)" stroke-width=".6" opacity=".75"/><circle cx="20" cy="15" r="2.1" fill="var(--yellow)"/></g></svg>'

const products: Product[] = [
  {
    slug: 'expiry-date-manager',
    name: 'Expiry Date Manager',
    label: '食品ロスを減らしたい方に最適な「賞味期限管理」アプリ。',
    description: 'バーコードを読み取って商品を登録、賞味期限が近づいたらプッシュ通知でお知らせ。音声での日付登録は意外に便利。キッチンでお手軽簡単に登録！',
    image: 'images/expiry-date-manager.svg',
    icon: 'images/EDM_app_icon.png',
    gallery: ['images/EDM_SHOT01.PNG', 'images/EDM_SHOT02.PNG'],
    accent: 'mint',
    features: ['バーコードを読み取って登録\n■ Open Food Facts（オープン・フード・ファクツ）に登録があるものは、画像・品名を自動で取得。\n■ 登録がない場合でも、お客様にて簡単にアプリに覚えさせることができます。', '音声入力で日付を素早く入力\n■ 「12月31日」と話しかけるだけで賞味期限を登録できます。両手がふさがっていても安心。', '賞味期限が近づいたらプッシュ通知（端末内ローカル通知）\n■ 何日前から通知するかを設定できます。通知時刻も自由に変更可能です。うっかり忘れを防いで、食品ロスを減らしましょう。\n※通知はすべて端末内で完結し、外部サーバーへの送信は行いません。', 'バックアップ対応\n■ 賞味期限リスト・品目データベース・サムネイルをまとめて Google DriveやiCloud Driveにバックアップ。機種変更後もすぐに元通りに復元できます。', 'こんな方におすすめ！\n■ 冷蔵庫・戸棚の在庫管理をしたい\n■ 食品ロスを意識している\n■ 家族の食材をまとめて管理したい'],
    privacy: '最終更新日：2026年4月16日\n\n収集する情報\n本アプリは、ユーザーの個人情報を収集・外部送信しません。\n\nデータの保存場所\n登録した賞味期限・品目名・画像はすべて、お使いの端末内およびユーザー自身のiCloudにのみ保存されます。開発者がこれらのデータにアクセスすることはありません。\n\n外部サービスとの通信\nバーコードをスキャンした際、読み取ったバーコード番号をOpen Food Facts API（https://world.openfoodfacts.org/）へ送信し、商品名・商品画像を取得します。バーコード番号以外の情報は送信しません。\n\nプッシュ通知\n本アプリのプッシュ通知は端末内のローカル通知です。外部サーバーへの送信は行いません。\n\n広告・解析・クラッシュレポート\n本アプリは広告SDK・解析SDK・クラッシュレポートSDKを使用していません。\n\nプライバシーポリシーの変更\n本ポリシーは予告なく変更される場合があります。変更後は本ページに掲載します。\n\nお問い合わせ\n本ポリシーに関するご質問はサポートページよりお送りください。',
    links: '<a href="https://apps.apple.com/jp/app/expiry-date-manager-%E8%B3%9E%E5%91%B3%E6%9C%9F%E9%99%90%E3%83%9E%E3%83%8D%E3%83%BC%E3%82%B8%E3%83%A3/id6761308148" target="_blank" rel="noreferrer">App Store ↗</a><a href="https://play.google.com/store/apps/details?id=com.expirydatemng" target="_blank" rel="noreferrer">Google Play ↗</a>',
    support: 'フィードバック\n\nアプリに関するコメントは下記のフォームよりお送りください。\n\nよくある質問\n\nQ. バーコードを読み取っても商品名が表示されません\nA. 商品情報は Open Food Facts（世界中のボランティアが登録するオープンデータベース）から取得しています。日本の商品は登録数が少ないため、表示されない場合があります。その場合は手動でお名前を入力してください。\n\nQ. プッシュ通知が届きません\nA. 本アプリの通知は端末内のローカル通知です。iOS の設定 → 通知 → 賞味期限マネージャー で通知が許可されているかご確認ください。\n\nQ. クラウドバックアップが表示されません\nA. iOS の設定 → Apple ID → iCloud → iCloud Drive がオンになっているかご確認ください。\n\nQ. 機種変更をしたらライセンスがなくなりました\nA. このアプリの設定から「ライセンス」にある「購入またはライセンスの復元」で復元できます。iCloudへのアクセスが必要な場合があります。',
    disclaimer: '本アプリの機能・仕様・提供は予告なく変更または終了する場合があります。本アプリの使用により生じたいかなる損害（食品の廃棄・摂取による健康被害、データの消失、バックアップの破損・消失、その他直接的・間接的損害を含む）についても、開発者は一切の責任を負いません。バーコードスキャンによる商品情報の取得はOpen Food Factsのデータに依存しており、すべての商品に対応しているわけではありません。取得した情報の正確性は保証しません。',
  },
  {
    slug: 'external-touch-display',
    name: 'eXternalTouchDisplay',
    label: 'タブレット/スマートフォンをPCのタッチ対応サブディスプレイに。',
    description: 'デスクトップを広く使いたいとき、プレゼン中に手元で操作したいとき、サブモニターをすぐに追加したいときに活用できます。Wi-Fiで接続し、タブレットから直接タッチ操作できます。',
    image: 'images/external-touch-screen.svg',
    icon: 'images/eXTD_icon.png',
    gallery: ['images/eXTD_situationshot02_clean.png'],
    accent: 'coral',
    features: ['機能概要\n■ iOSやAndroidのタブレットやスマートフォンをPCの外部ディスプレイとして活用\n■ デスクトップを拡張・複製表示\n■ タブレットから直接タッチ操作が可能\n■ フルスクリーン表示・画面回転にも対応', '用途\n■ 会議、プレゼン、作業用モニター、操作パネルに最適', '特徴\n■ レシーバーを自動検出して簡単接続\n■ 最大8台のタブレット接続に対応*\n■ Wi-Fi接続に対応\n■ WebRTCによる低遅延の映像ストリーミング\n■ 日本語・英語を含む多言語UI\n■ 広告なし（アプリ内課金・サブスクリプションあり）\n\n*お客様のハードウエア環境に依存します', 'システム要件\n1. ご利用のPCへのドライバアプリ(eXTDDriver)のインストールが必要（Windows Store）\n2. モバイル/タブレットアプリのダウンロードは、AppStore / Google Play から'],
    privacy: '最終更新日：2026年4月16日\n\n収集する情報\n本アプリは、ユーザーの個人情報を収集・外部送信しません。\n\nデータの保存場所\n登録した賞味期限・品目名・画像はすべて、お使いの端末内およびユーザー自身のiCloudにのみ保存されます。開発者がこれらのデータにアクセスすることはありません。\n\n外部サービスとの通信\nバーコードをスキャンした際、読み取ったバーコード番号をOpen Food Facts API（https://world.openfoodfacts.org/）へ送信し、商品名・商品画像を取得します。バーコード番号以外の情報は送信しません。\n\nプッシュ通知\n本アプリのプッシュ通知は端末内のローカル通知です。外部サーバーへの送信は行いません。\n\n広告・解析・クラッシュレポート\n本アプリは広告SDK・解析SDK・クラッシュレポートSDKを使用していません。\n\nプライバシーポリシーの変更\n本ポリシーは予告なく変更される場合があります。変更後は本ページに掲載します。\n\nお問い合わせ\n本ポリシーに関するご質問はサポートページよりお送りください。',
    links: '<button type="button" disabled>App Store</button><a href="https://play.google.com/store/apps/details?id=com.hsworks.externaltouch" target="_blank" rel="noreferrer">Google Play</a>',
    formUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSdREUn4WAHsOkJZU5v8CdbB73mw2sM1PrGve_G1zJGemYmaOQ/viewform',
    support: 'よくある質問\n\nモバイル/タブレット\n\nQ. フルスクリーンの終了方法がわからない。\nA. Androidは画面下部を下から上にスワイプするなどしてナビゲーションバーを表示させ、戻るボタンをタップ。iOSは画面下部を３～４秒間タップし続けて表示される戻るボタンをタップ。\n\nQ. 複数の端末で、うまく仮想デスクトップが構成できない。\nA. 端末側のアプリを一斉に起動すると時々混乱することがあります。順番に起動してみてください。\n\nQ. 複数のPCを1台の端末で切り替えて使えますか？\nA. 使えます。PCでそれぞれeXTDDriverが起動していれば、端末で自動認識できます。左上のPC名をタップすれば切り替えることができます。\n\nQ. 機種変更をしたらライセンスがなくなりました\nA. このアプリの設定から「ライセンス」にある「購入またはライセンスの復元」で復元できます。\n\nWindows PC\n\nQ. PCのレシーバアプリに接続/再接続できない、または見つからない\nA. 同じネットワーク上のPC上でドライバアプリ(eXTDDriver)が起動していることを確認してください。\nA. レシーバアプリ（タスクトレイのアプリ）を再起動してください。\nA. 常駐しているセキュリティソフトに除外されている場合はセキュリティソフトに登録してください。Windows Defenderの場合、ファイヤウォールを「ネットワーク保護」の「ファイヤウォールによるアプリケーション許可」で「MediaMTX」を許可する(Public&Private)必要があります。<br><a class="support-reference-link" href="images/eXTD_Defender1.png" target="_blank" rel="noreferrer"><img src="images/eXTD_Defender1.png" alt="Windows Defenderの設定画面1"></a><br><a class="support-reference-link" href="images/eXTD_Defender2.png" target="_blank" rel="noreferrer"><img src="images/eXTD_Defender2.png" alt="Windows Defenderの設定画面2"></a>\nA. ルーターの設定などをご確認ください。\nA. 古いeXTDDriverアプリを一度アンインストールしてから、新しいeXTDDriverアプリをインストールしなおしてください。\n\nQ. eXTDDriverアプリのダウンロードの際に警告が出る\nA. 画面を参考にダウンロードして保存してください。<br><a class="support-reference-link" href="images/eXTD_DL2.png" target="_blank" rel="noreferrer"><img src="images/eXTD_DL2.png" alt="eXTDDriverダウンロード画面1"></a><br><a class="support-reference-link" href="images/eXTD_DL3.png" target="_blank" rel="noreferrer"><img src="images/eXTD_DL3.png" alt="eXTDDriverダウンロード画面2"></a>\n\nQ. 許可した端末に限定して使用することはできますか？\nA. できます。タスクトレイアイコンを右クリックして「デバイスの許可と削除」を選択することで設定できます。',
    disclaimer: '本アプリの機能・仕様・提供は予告なく変更または終了する場合があります。本アプリの使用により生じたいかなる損害（仕様や品質、および動作の不備に起因する損害を含み、それらに限らない）についても、開発者は一切の責任を負いません。',
  },
  {
    slug: 'antiswipe',
    name: 'antiSwipe',
    label: '意図しないスワイプを、静かに防ぐ',
    description: '画面に触れたときの意図しない操作を抑え、見る・読む・置いておく時間を守ります。',
    image: 'images/antiswipe.svg',
    accent: 'blue',
    features: ['意図しないスワイプをブロック', '必要なときだけすぐ解除', '集中したい場面に寄り添う設計'],
    privacy: 'プライバシーポリシー本文を Google Site の掲載内容に置き換えてください。',
  },
]

const app = document.querySelector<HTMLDivElement>('#app')!
let currentLanguage = getLanguage()
const getLocalizedCopy = (language: Language) => ({ ...getCopy(language), ...extraCopy[language] })
let currentCopy = getLocalizedCopy(currentLanguage)

const downloadPageLabels: Record<Language, string> = { ja: 'ダウンロードページ', en: 'download page', fr: 'page de téléchargement', de: 'Downloadseite', es: 'página de descarga', it: 'pagina di download', pt: 'página de download', ko: '다운로드 페이지', zh: '下载页面', tw: '下載頁面', ru: 'странице загрузки', nl: 'downloadpagina' }
const supportImageToggleLabels: Record<Language, string> = { ja: '画像を表示', en: 'Show images', fr: 'Afficher les images', de: 'Bilder anzeigen', es: 'Mostrar imágenes', it: 'Mostra immagini', pt: 'Mostrar imagens', ko: '이미지 표시', zh: '显示图片', tw: '顯示圖片', ru: 'Показать изображения', nl: 'Afbeeldingen tonen' }
const supportHeadingLabels = ['よくある質問', 'モバイル/タブレット', 'Windows PC', 'Frequently asked questions', 'Mobile/tablet', 'Windows PC', 'Questions fréquentes', 'Mobile/tablette', 'PC Windows', 'Häufig gestellte Fragen', 'Mobilgerät/Tablet', 'Windows-PC', 'Preguntas frecuentes', 'Móvil/tableta', 'PC Windows', 'Domande frequenti', 'Mobile/tablet', 'PC Windows', 'Perguntas frequentes', 'Telemóvel/tablet', 'PC Windows', '자주 묻는 질문', '모바일/태블릿', '常见问题', '手机/平板', '常見問題', '手機／平板', 'Часто задаваемые вопросы', 'Мобильные устройства и планшеты', 'Veelgestelde vragen', 'Mobiel/tablet']
const supportReferenceImages = (language: Language) => `<br><a class="support-reference-link" href="images/eXTD_Defender1.png" target="_blank" rel="noreferrer"><img src="images/eXTD_Defender1.png" alt="${language === 'ja' ? 'Windows Defenderの設定画面1' : 'Windows Defender settings screen 1'}"></a><br><a class="support-reference-link" href="images/eXTD_Defender2.png" target="_blank" rel="noreferrer"><img src="images/eXTD_Defender2.png" alt="${language === 'ja' ? 'Windows Defenderの設定画面2' : 'Windows Defender settings screen 2'}"></a>`
const supportDownloadImages = (language: Language) => `<br><a class="support-reference-link" href="images/eXTD_DL2.png" target="_blank" rel="noreferrer"><img src="images/eXTD_DL2.png" alt="${language === 'ja' ? 'eXTDDriverダウンロード画面1' : 'eXTDDriver download screen 1'}"></a><br><a class="support-reference-link" href="images/eXTD_DL3.png" target="_blank" rel="noreferrer"><img src="images/eXTD_DL3.png" alt="${language === 'ja' ? 'eXTDDriverダウンロード画面2' : 'eXTDDriver download screen 2'}"></a>`
const externalTouchSupport: Partial<Record<Language, string>> = {
  en: `Frequently asked questions\n\nMobile/tablet\n\nQ. I do not know how to exit full-screen mode.\nA. On Android, show the navigation bar by swiping up from the bottom of the screen, then tap the Back button. On iOS, touch and hold the bottom of the screen for 3–4 seconds, then tap the Back button that appears.\n\nQ. I cannot configure a virtual desktop correctly across multiple devices.\nA. Starting the apps on all devices at once can occasionally cause confusion. Try starting them one at a time.\n\nQ. Can I switch between multiple PCs using one device?\nA. Yes. If eXTDDriver is running on each PC, the device detects them automatically. Tap the PC name in the upper-left corner to switch.\n\nQ. I changed devices and lost my license.\nA. Open License in the app settings and choose Purchase or Restore License.\n\nWindows PC\n\nQ. I cannot connect, reconnect, or find the PC receiver app.\nA. Make sure the driver app (eXTDDriver) is running on a PC on the same network.\nA. Restart the receiver app in the system tray.\n※{{DOWNLOAD_NOTE}}\nA. If necessary, add the app to your security software exclusions. For Windows Defender, allow “eXTDDriver MediaMTX”, “eXTDDriver Receiver TCP”, and “eXTDDriver Receiver UDP” for both Public and Private networks in Firewall & network protection > Allow an app through firewall.{{DEFENDER_IMAGES}}\nA. Check your router settings.\nA. Uninstall the old eXTDDriver app once, then install the new eXTDDriver app.\n\nQ. A warning appears when downloading the eXTDDriver app.\nA. Use the images as a guide to download and save it.{{DOWNLOAD_IMAGES}}\n\nQ. Can I limit use to approved devices?\nA. Yes. Right-click the system tray icon and select “Allow and remove devices” to configure this.`,
  fr: `Questions fréquentes\n\nMobile/tablette\n\nQ. Je ne sais pas comment quitter le mode plein écran.\nA. Sur Android, affichez la barre de navigation en glissant vers le haut depuis le bas de l’écran, puis touchez le bouton Retour. Sur iOS, maintenez le doigt en bas de l’écran pendant 3 à 4 secondes, puis touchez le bouton Retour qui apparaît.\n\nQ. Je n’arrive pas à configurer correctement un bureau virtuel sur plusieurs appareils.\nA. Le démarrage simultané des applications peut parfois créer de la confusion. Essayez de les démarrer une par une.\n\nQ. Puis-je basculer entre plusieurs PC avec un seul appareil ?\nA. Oui. Si eXTDDriver est lancé sur chaque PC, l’appareil les détecte automatiquement. Touchez le nom du PC en haut à gauche pour basculer.\n\nQ. J’ai changé d’appareil et perdu ma licence.\nA. Ouvrez Licence dans les réglages de l’application et choisissez Acheter ou restaurer la licence.\n\nPC Windows\n\nQ. Je ne peux pas me connecter, me reconnecter ou trouver l’application réceptrice du PC.\nA. Vérifiez que l’application pilote (eXTDDriver) est lancée sur un PC du même réseau.\nA. Redémarrez l’application réceptrice dans la zone de notification.\n※{{DOWNLOAD_NOTE}}\nA. Si nécessaire, ajoutez l’application aux exclusions de votre logiciel de sécurité. Avec Windows Defender, autorisez « eXTDDriver MediaMTX », « eXTDDriver Receiver TCP » et « eXTDDriver Receiver UDP » pour les réseaux Public et Privé dans Pare-feu et protection réseau > Autoriser une application via le pare-feu.{{DEFENDER_IMAGES}}\nA. Vérifiez les réglages de votre routeur.\nA. Désinstallez une fois l’ancienne application eXTDDriver, puis installez la nouvelle.\n\nQ. Un avertissement apparaît lors du téléchargement de l’application eXTDDriver.\nA. Utilisez les images comme guide pour la télécharger et l’enregistrer.{{DOWNLOAD_IMAGES}}\n\nQ. Puis-je limiter l’utilisation aux appareils autorisés ?\nA. Oui. Faites un clic droit sur l’icône de la zone de notification et sélectionnez « Autoriser et supprimer des appareils ».`,
  de: `Häufig gestellte Fragen\n\nMobilgerät/Tablet\n\nF. Ich weiß nicht, wie ich den Vollbildmodus beende.\nA. Blenden Sie unter Android die Navigationsleiste ein, indem Sie vom unteren Bildschirmrand nach oben wischen, und tippen Sie dann auf die Zurück-Schaltfläche. Halten Sie unter iOS den unteren Bildschirmrand 3–4 Sekunden gedrückt und tippen Sie anschließend auf die angezeigte Zurück-Schaltfläche.\n\nF. Ich kann einen virtuellen Desktop auf mehreren Geräten nicht richtig einrichten.\nA. Wenn die Apps auf allen Geräten gleichzeitig gestartet werden, kann es gelegentlich zu Verwirrung kommen. Starten Sie sie nacheinander.\n\nF. Kann ich mit einem Gerät zwischen mehreren PCs wechseln?\nA. Ja. Wenn eXTDDriver auf jedem PC ausgeführt wird, erkennt das Gerät sie automatisch. Tippen Sie zum Wechseln oben links auf den PC-Namen.\n\nF. Nach einem Gerätewechsel ist meine Lizenz verschwunden.\nA. Öffnen Sie in den App-Einstellungen den Punkt Lizenz und wählen Sie Kaufen oder Lizenz wiederherstellen.\n\nWindows-PC\n\nF. Ich kann keine Verbindung zur PC-Receiver-App herstellen, sie nicht wiederherstellen oder sie nicht finden.\nA. Stellen Sie sicher, dass die Treiber-App (eXTDDriver) auf einem PC im selben Netzwerk läuft.\nA. Starten Sie die Receiver-App im Infobereich neu.\n※{{DOWNLOAD_NOTE}}\nA. Falls erforderlich, fügen Sie die App den Ausnahmen Ihrer Sicherheitssoftware hinzu. Erlauben Sie in Windows Defender unter Firewall- und Netzwerkschutz > Eine App durch die Firewall zulassen für öffentliche und private Netzwerke „eXTDDriver MediaMTX“, „eXTDDriver Receiver TCP“ und „eXTDDriver Receiver UDP“.{{DEFENDER_IMAGES}}\nA. Prüfen Sie die Router-Einstellungen.\nA. Deinstallieren Sie die alte eXTDDriver-App einmal und installieren Sie anschließend die neue eXTDDriver-App.\n\nF. Beim Herunterladen der eXTDDriver-App wird eine Warnung angezeigt.\nA. Laden Sie die App anhand der Bilder herunter und speichern Sie sie.{{DOWNLOAD_IMAGES}}\n\nF. Kann ich die Nutzung auf zugelassene Geräte beschränken?\nA. Ja. Klicken Sie mit der rechten Maustaste auf das Symbol im Infobereich und wählen Sie Geräte zulassen und entfernen.`,
  es: `Preguntas frecuentes\n\nMóvil/tableta\n\nP. No sé cómo salir del modo de pantalla completa.\nR. En Android, muestra la barra de navegación deslizando hacia arriba desde la parte inferior de la pantalla y toca el botón Atrás. En iOS, mantén pulsada la parte inferior de la pantalla durante 3–4 segundos y toca el botón Atrás que aparece.\n\nP. No puedo configurar correctamente un escritorio virtual en varios dispositivos.\nR. Iniciar las aplicaciones en todos los dispositivos a la vez puede causar confusión. Intenta iniciarlas una por una.\n\nP. ¿Puedo cambiar entre varios PC usando un solo dispositivo?\nR. Sí. Si eXTDDriver está ejecutándose en cada PC, el dispositivo los detecta automáticamente. Toca el nombre del PC en la esquina superior izquierda para cambiar.\n\nP. He cambiado de dispositivo y he perdido mi licencia.\nR. Abre Licencia en los ajustes de la aplicación y elige Comprar o restaurar licencia.\n\nPC Windows\n\nP. No puedo conectar, reconectar o encontrar la aplicación receptora del PC.\nR. Comprueba que la aplicación del controlador (eXTDDriver) esté ejecutándose en un PC de la misma red.\nR. Reinicia la aplicación receptora desde la bandeja del sistema.\n※{{DOWNLOAD_NOTE}}\nR. Si es necesario, añade la aplicación a las exclusiones del software de seguridad. En Windows Defender, permite “eXTDDriver MediaMTX”, “eXTDDriver Receiver TCP” y “eXTDDriver Receiver UDP” para redes públicas y privadas en Firewall y protección de red > Permitir una aplicación a través del firewall.{{DEFENDER_IMAGES}}\nR. Comprueba la configuración del router.\nR. Desinstala primero la aplicación eXTDDriver antigua y, después, instala la nueva.\n\nP. Aparece una advertencia al descargar la aplicación eXTDDriver.\nR. Descárgala y guárdala usando las imágenes como referencia.{{DOWNLOAD_IMAGES}}\n\nP. ¿Puedo limitar el uso a dispositivos autorizados?\nR. Sí. Haz clic derecho en el icono de la bandeja del sistema y selecciona Permitir y quitar dispositivos.`,
  it: `Domande frequenti\n\nMobile/tablet\n\nD. Non so come uscire dalla modalità a schermo intero.\nR. Su Android, mostra la barra di navigazione scorrendo verso l’alto dal fondo dello schermo, quindi tocca il pulsante Indietro. Su iOS, tieni premuta la parte inferiore dello schermo per 3–4 secondi, quindi tocca il pulsante Indietro che appare.\n\nD. Non riesco a configurare correttamente un desktop virtuale su più dispositivi.\nR. Avviare le app su tutti i dispositivi contemporaneamente può creare confusione. Prova ad avviarle una alla volta.\n\nD. Posso passare da un PC all’altro usando un solo dispositivo?\nR. Sì. Se eXTDDriver è in esecuzione su ogni PC, il dispositivo li rileva automaticamente. Tocca il nome del PC in alto a sinistra per cambiare.\n\nD. Ho cambiato dispositivo e ho perso la licenza.\nR. Apri Licenza nelle impostazioni dell’app e scegli Acquista o ripristina licenza.\n\nPC Windows\n\nD. Non riesco a connettermi, riconnettermi o trovare l’app ricevitore del PC.\nR. Assicurati che l’app driver (eXTDDriver) sia in esecuzione su un PC della stessa rete.\nR. Riavvia l’app ricevitore dall’area di notifica.\n※{{DOWNLOAD_NOTE}}\nR. Se necessario, aggiungi l’app alle esclusioni del software di sicurezza. In Windows Defender, consenti “eXTDDriver MediaMTX”, “eXTDDriver Receiver TCP” e “eXTDDriver Receiver UDP” per le reti pubbliche e private in Firewall e protezione di rete > Consenti app attraverso il firewall.{{DEFENDER_IMAGES}}\nR. Controlla le impostazioni del router.\nR. Disinstalla una volta la vecchia app eXTDDriver, quindi installa quella nuova.\n\nD. Viene visualizzato un avviso durante il download dell’app eXTDDriver.\nR. Scaricala e salvala usando le immagini come riferimento.{{DOWNLOAD_IMAGES}}\n\nD. Posso limitare l’uso ai dispositivi autorizzati?\nR. Sì. Fai clic con il pulsante destro del mouse sull’icona nell’area di notifica e seleziona Consenti e rimuovi dispositivi.`,
  pt: `Perguntas frequentes\n\nTelemóvel/tablet\n\nP. Não sei como sair do modo de ecrã inteiro.\nR. No Android, mostre a barra de navegação deslizando para cima a partir da parte inferior do ecrã e toque no botão Voltar. No iOS, mantenha a parte inferior do ecrã premida durante 3–4 segundos e toque no botão Voltar que aparece.\n\nP. Não consigo configurar corretamente um ambiente de trabalho virtual em vários dispositivos.\nR. Iniciar as aplicações em todos os dispositivos ao mesmo tempo pode causar confusão. Tente iniciá-las uma de cada vez.\n\nP. Posso alternar entre vários PCs utilizando um único dispositivo?\nR. Sim. Se o eXTDDriver estiver em execução em cada PC, o dispositivo deteta-os automaticamente. Toque no nome do PC no canto superior esquerdo para alternar.\n\nP. Mudei de dispositivo e perdi a licença.\nR. Abra Licença nas definições da aplicação e escolha Comprar ou restaurar licença.\n\nPC Windows\n\nP. Não consigo ligar, voltar a ligar ou encontrar a aplicação recetora do PC.\nR. Certifique-se de que a aplicação de controlador (eXTDDriver) está em execução num PC da mesma rede.\nR. Reinicie a aplicação recetora no tabuleiro do sistema.\n※{{DOWNLOAD_NOTE}}\nR. Se necessário, adicione a aplicação às exclusões do software de segurança. No Windows Defender, permita “eXTDDriver MediaMTX”, “eXTDDriver Receiver TCP” e “eXTDDriver Receiver UDP” nas redes públicas e privadas em Firewall e proteção de rede > Permitir uma aplicação através da firewall.{{DEFENDER_IMAGES}}\nR. Verifique as definições do router.\nR. Desinstale a aplicação eXTDDriver antiga e instale depois a nova.\n\nP. É apresentado um aviso ao transferir a aplicação eXTDDriver.\nR. Transfira-a e guarde-a utilizando as imagens como referência.{{DOWNLOAD_IMAGES}}\n\nP. Posso limitar a utilização a dispositivos autorizados?\nR. Sim. Clique com o botão direito do rato no ícone do tabuleiro do sistema e selecione Permitir e remover dispositivos.`,
  ko: `자주 묻는 질문\n\n모바일/태블릿\n\nQ. 전체 화면을 종료하는 방법을 모르겠습니다.\nA. Android에서는 화면 아래에서 위로 쓸어 올려 내비게이션 바를 표시한 다음 뒤로 버튼을 누르세요. iOS에서는 화면 아래쪽을 3~4초간 길게 누른 후 나타나는 뒤로 버튼을 누르세요.\n\nQ. 여러 기기에서 가상 데스크톱을 제대로 구성할 수 없습니다.\nA. 모든 기기에서 앱을 동시에 시작하면 혼란이 생길 수 있습니다. 한 대씩 순서대로 시작해 보세요.\n\nQ. 한 대의 기기에서 여러 PC를 전환해 사용할 수 있나요?\nA. 가능합니다. 각 PC에서 eXTDDriver가 실행 중이면 기기가 자동으로 인식합니다. 왼쪽 위의 PC 이름을 누르면 전환할 수 있습니다.\n\nQ. 기기를 변경했더니 라이선스가 사라졌습니다.\nA. 앱 설정의 라이선스에서 구매 또는 라이선스 복원을 선택하세요.\n\nWindows PC\n\nQ. PC 수신기 앱에 연결하거나 다시 연결할 수 없거나 앱을 찾을 수 없습니다.\nA. 같은 네트워크의 PC에서 드라이버 앱(eXTDDriver)이 실행 중인지 확인하세요.\nA. 시스템 트레이의 수신기 앱을 다시 시작하세요.\n※{{DOWNLOAD_NOTE}}\nA. 필요한 경우 보안 소프트웨어의 제외 항목에 앱을 추가하세요. Windows Defender의 방화벽 및 네트워크 보호 > 방화벽을 통해 앱 허용에서 공용 및 개인 네트워크 모두에 “eXTDDriver MediaMTX”, “eXTDDriver Receiver TCP”, “eXTDDriver Receiver UDP”를 허용하세요.{{DEFENDER_IMAGES}}\nA. 라우터 설정을 확인하세요.\nA. 기존 eXTDDriver 앱을 한 번 제거한 후 새 eXTDDriver 앱을 설치하세요.\n\nQ. eXTDDriver 앱을 다운로드할 때 경고가 표시됩니다.\nA. 이미지를 참고하여 다운로드하고 저장하세요.{{DOWNLOAD_IMAGES}}\n\nQ. 허용한 기기로만 사용하도록 제한할 수 있나요?\nA. 가능합니다. 시스템 트레이 아이콘을 마우스 오른쪽 버튼으로 클릭하고 기기 허용 및 삭제를 선택하여 설정하세요.`,
  zh: `常见问题\n\n手机/平板\n\n问：不知道如何退出全屏模式。\n答：在 Android 上从屏幕底部向上滑动以显示导航栏，然后点击返回按钮。在 iOS 上长按屏幕底部 3～4 秒，然后点击出现的返回按钮。\n\n问：无法在多个设备上正确配置虚拟桌面。\n答：同时启动所有设备上的应用有时会造成混乱。请按顺序逐台启动。\n\n问：可以使用一台设备在多台 PC 之间切换吗？\n答：可以。如果每台 PC 都运行着 eXTDDriver，设备会自动识别它们。点击左上角的 PC 名称即可切换。\n\n问：更换设备后许可证消失了。\n答：在应用设置中打开“许可证”，选择“购买或恢复许可证”。\n\nWindows PC\n\n问：无法连接、重新连接或找到 PC 接收器应用。\n答：请确认同一网络中的 PC 正在运行驱动应用（eXTDDriver）。\n答：请重新启动系统托盘中的接收器应用。\n※{{DOWNLOAD_NOTE}}\n答：如有需要，请将应用加入安全软件的排除项。在 Windows Defender 的“防火墙和网络保护”>“允许应用通过防火墙”中，为公用和专用网络允许“eXTDDriver MediaMTX”、“eXTDDriver Receiver TCP”和“eXTDDriver Receiver UDP”。{{DEFENDER_IMAGES}}\n答：请检查路由器设置。\n答：请先卸载旧版 eXTDDriver 应用，再安装新版。\n\n问：下载 eXTDDriver 应用时出现警告。\n答：请参考图片下载并保存。{{DOWNLOAD_IMAGES}}\n\n问：可以限制为仅使用已许可的设备吗？\n答：可以。右键点击系统托盘图标，选择“允许和删除设备”进行设置。`,
  tw: `常見問題\n\n手機／平板\n\n問：不知道如何結束全螢幕模式。\n答：在 Android 上從螢幕底部向上滑動以顯示導覽列，然後點選返回按鈕。在 iOS 上長按螢幕底部 3～4 秒，然後點選出現的返回按鈕。\n\n問：無法在多台裝置上正確設定虛擬桌面。\n答：同時啟動所有裝置上的應用程式有時會造成混亂。請依序逐台啟動。\n\n問：可以使用一台裝置在多台 PC 之間切換嗎？\n答：可以。如果每台 PC 都執行 eXTDDriver，裝置會自動辨識。點選左上角的 PC 名稱即可切換。\n\n問：更換裝置後授權消失了。\n答：在應用程式設定中開啟「授權」，選擇「購買或還原授權」。\n\nWindows PC\n\n問：無法連線、重新連線或找不到 PC 接收器應用程式。\n答：請確認同一網路中的 PC 正在執行驅動程式應用程式（eXTDDriver）。\n答：請重新啟動系統匣中的接收器應用程式。\n※{{DOWNLOAD_NOTE}}\n答：如有需要，請將應用程式加入安全性軟體的排除項目。在 Windows Defender 的「防火牆與網路保護」>「允許應用程式通過防火牆」中，為公用和私人網路允許「eXTDDriver MediaMTX」、「eXTDDriver Receiver TCP」和「eXTDDriver Receiver UDP」。{{DEFENDER_IMAGES}}\n答：請檢查路由器設定。\n答：請先解除安裝舊版 eXTDDriver 應用程式，再安裝新版。\n\n問：下載 eXTDDriver 應用程式時出現警告。\n答：請參考圖片下載並儲存。{{DOWNLOAD_IMAGES}}\n\n問：可以限制為僅使用已允許的裝置嗎？\n答：可以。以滑鼠右鍵點選系統匣圖示，選擇「允許和移除裝置」進行設定。`,
  ru: `Часто задаваемые вопросы\n\nМобильные устройства и планшеты\n\nВ. Я не знаю, как выйти из полноэкранного режима.\nО. На Android проведите вверх от нижнего края экрана, чтобы открыть панель навигации, затем нажмите кнопку «Назад». На iOS удерживайте нижнюю часть экрана 3–4 секунды, затем нажмите появившуюся кнопку «Назад».\n\nВ. Не удаётся правильно настроить виртуальный рабочий стол на нескольких устройствах.\nО. Одновременный запуск приложений на всех устройствах иногда вызывает путаницу. Запускайте их по одному.\n\nВ. Можно ли переключаться между несколькими ПК с одного устройства?\nО. Да. Если на каждом ПК запущен eXTDDriver, устройство обнаружит их автоматически. Для переключения нажмите имя ПК в левом верхнем углу.\n\nВ. После смены устройства лицензия исчезла.\nО. Откройте раздел «Лицензия» в настройках приложения и выберите «Купить или восстановить лицензию».\n\nПК с Windows\n\nВ. Не удаётся подключиться, переподключиться или найти приложение-приёмник на ПК.\nО. Убедитесь, что приложение-драйвер (eXTDDriver) запущено на ПК в той же сети.\nО. Перезапустите приложение-приёмник в области уведомлений.\n※{{DOWNLOAD_NOTE}}\nО. При необходимости добавьте приложение в исключения защитного ПО. В Windows Defender в разделе «Брандмауэр и защита сети» > «Разрешить работу приложения через брандмауэр» разрешите для общедоступных и частных сетей «eXTDDriver MediaMTX», «eXTDDriver Receiver TCP» и «eXTDDriver Receiver UDP».{{DEFENDER_IMAGES}}\nО. Проверьте настройки маршрутизатора.\nО. Удалите старое приложение eXTDDriver, затем установите новое.\n\nВ. При загрузке приложения eXTDDriver появляется предупреждение.\nО. Загрузите и сохраните приложение, используя изображения в качестве примера.{{DOWNLOAD_IMAGES}}\n\nВ. Можно ли ограничить использование разрешёнными устройствами?\nО. Да. Щёлкните правой кнопкой мыши значок в области уведомлений и выберите «Разрешить и удалить устройства».`,
  nl: `Veelgestelde vragen\n\nMobiel/tablet\n\nV. Ik weet niet hoe ik de volledig-schermmodus afsluit.\nA. Veeg op Android vanaf de onderkant van het scherm omhoog om de navigatiebalk te tonen en tik op de knop Terug. Houd op iOS de onderkant van het scherm 3–4 seconden ingedrukt en tik op de knop Terug die verschijnt.\n\nV. Ik kan een virtueel bureaublad op meerdere apparaten niet goed configureren.\nA. Als de apps op alle apparaten tegelijk worden gestart, kan dat soms verwarring veroorzaken. Start ze één voor één.\n\nV. Kan ik met één apparaat tussen meerdere pc’s wisselen?\nA. Ja. Als eXTDDriver op elke pc actief is, detecteert het apparaat ze automatisch. Tik linksboven op de pc-naam om te wisselen.\n\nV. Ik heb van apparaat gewisseld en mijn licentie verloren.\nA. Open Licentie in de app-instellingen en kies Licentie kopen of herstellen.\n\nWindows-pc\n\nV. Ik kan geen verbinding maken met de pc-ontvangerapp, geen verbinding herstellen of de app niet vinden.\nA. Controleer of de driverapp (eXTDDriver) actief is op een pc in hetzelfde netwerk.\nA. Start de ontvangerapp in het systeemvak opnieuw.\n※{{DOWNLOAD_NOTE}}\nA. Voeg de app indien nodig toe aan de uitzonderingen van je beveiligingssoftware. Sta in Windows Defender bij Firewall- en netwerkbeveiliging > Een app door de firewall toestaan voor openbare en particuliere netwerken “eXTDDriver MediaMTX”, “eXTDDriver Receiver TCP” en “eXTDDriver Receiver UDP” toe.{{DEFENDER_IMAGES}}\nA. Controleer de routerinstellingen.\nA. Verwijder de oude eXTDDriver-app en installeer daarna de nieuwe.\n\nV. Er verschijnt een waarschuwing bij het downloaden van de eXTDDriver-app.\nA. Download en bewaar de app aan de hand van de afbeeldingen.{{DOWNLOAD_IMAGES}}\n\nV. Kan ik het gebruik beperken tot toegestane apparaten?\nA. Ja. Klik met de rechtermuisknop op het pictogram in het systeemvak en selecteer Apparaten toestaan en verwijderen.`,
}
const authorizationAnswers: Record<Language, string> = {
  ja: 'A. できます。WindowsタスクトレイにあるeXTDDriverアイコンを右クリックし、「デバイスの許可と削除」をクリック、その後「デバイスに許可を必要とする」をオンにして「未登録端末を探す」を押します。端末の検索が始まり、見つかった端末の固有IDがポップアップします。（固有IDは、eXternalTouchDisplayの画面の右下に教示されています）',
  en: 'A. Yes. Right-click the eXTDDriver icon in the Windows task tray and select "Device authorization and removal". Turn on "Require device authorization", then click "Find unregistered devices". The device search will begin, and a pop-up will display the unique IDs of any detected devices. You can find the unique ID in the bottom-right corner of the eXternalTouchDisplay screen.',
  fr: 'A. Oui. Faites un clic droit sur l’icône eXTDDriver dans la zone de notification Windows et sélectionnez « Autorisation et suppression des appareils ». Activez « Exiger l’autorisation de l’appareil », puis cliquez sur « Rechercher les appareils non enregistrés ». La recherche commence et une fenêtre contextuelle affiche les identifiants uniques des appareils détectés. L’identifiant unique se trouve en bas à droite de l’écran eXternalTouchDisplay.',
  de: 'A. Ja. Klicken Sie mit der rechten Maustaste auf das eXTDDriver-Symbol im Windows-Infobereich und wählen Sie „Geräteautorisierung und -entfernung“. Aktivieren Sie „Geräteautorisierung erforderlich“ und klicken Sie anschließend auf „Nicht registrierte Geräte suchen“. Die Gerätesuche beginnt, und ein Popup zeigt die eindeutigen IDs der gefundenen Geräte an. Die eindeutige ID finden Sie unten rechts auf dem Bildschirm von eXternalTouchDisplay.',
  es: 'R. Sí. Haz clic derecho en el icono de eXTDDriver de la bandeja del sistema de Windows y selecciona «Autorización y eliminación de dispositivos». Activa «Requerir autorización del dispositivo» y pulsa «Buscar dispositivos no registrados». Comenzará la búsqueda y una ventana emergente mostrará los identificadores únicos de los dispositivos detectados. El identificador único aparece en la esquina inferior derecha de la pantalla de eXternalTouchDisplay.',
  it: 'R. Sì. Fai clic con il pulsante destro del mouse sull’icona di eXTDDriver nell’area di notifica di Windows e seleziona «Autorizzazione e rimozione dei dispositivi». Attiva «Richiedi autorizzazione del dispositivo», quindi fai clic su «Trova dispositivi non registrati». La ricerca dei dispositivi inizierà e una finestra popup mostrerà gli ID univoci dei dispositivi rilevati. L’ID univoco si trova nell’angolo in basso a destra della schermata di eXternalTouchDisplay.',
  pt: 'R. Sim. Clique com o botão direito do rato no ícone do eXTDDriver no tabuleiro do sistema do Windows e selecione «Autorização e remoção de dispositivos». Ative «Exigir autorização do dispositivo» e, em seguida, clique em «Procurar dispositivos não registados». A pesquisa de dispositivos será iniciada e uma janela pop-up apresentará os IDs exclusivos dos dispositivos detetados. O ID exclusivo encontra-se no canto inferior direito do ecrã do eXternalTouchDisplay.',
  ko: 'A. 가능합니다. Windows 시스템 트레이에 있는 eXTDDriver 아이콘을 마우스 오른쪽 버튼으로 클릭하고 "기기 인증 및 삭제"를 선택하세요. "기기 인증 필요"를 켠 다음 "등록되지 않은 기기 찾기"를 클릭하세요. 기기 검색이 시작되고, 검색된 기기의 고유 ID가 팝업으로 표시됩니다. 고유 ID는 eXternalTouchDisplay 화면의 오른쪽 아래에서 확인할 수 있습니다.',
  zh: '答：可以。右键点击 Windows 系统托盘中的 eXTDDriver 图标，选择“设备授权和删除”。开启“需要设备授权”，然后点击“查找未注册设备”。设备搜索将开始，弹窗会显示检测到的设备的唯一 ID。您可以在 eXternalTouchDisplay 屏幕的右下角找到唯一 ID。',
  tw: '答：可以。以滑鼠右鍵點選 Windows 系統匣中的 eXTDDriver 圖示，選擇「裝置授權與移除」。開啟「需要裝置授權」，然後點選「尋找未註冊裝置」。裝置搜尋會開始，彈出視窗會顯示偵測到之裝置的唯一 ID。您可以在 eXternalTouchDisplay 畫面的右下角找到唯一 ID。',
  ru: 'О. Да. Щёлкните правой кнопкой мыши значок eXTDDriver в области уведомлений Windows и выберите «Авторизация и удаление устройств». Включите «Требовать авторизацию устройства», затем нажмите «Найти незарегистрированные устройства». Начнётся поиск устройств, и во всплывающем окне отобразятся уникальные идентификаторы обнаруженных устройств. Уникальный идентификатор указан в правом нижнем углу экрана eXternalTouchDisplay.',
  nl: 'A. Ja. Klik met de rechtermuisknop op het eXTDDriver-pictogram in het Windows-systeemvak en selecteer “Apparaatautorisatie en verwijderen”. Schakel “Apparaatautorisatie vereisen” in en klik vervolgens op “Niet-geregistreerde apparaten zoeken”. De zoektocht naar apparaten begint en een pop-up toont de unieke ID’s van gevonden apparaten. Je vindt de unieke ID rechtsonder op het scherm van eXternalTouchDisplay.',
}
const encryptionAnswers: Record<Language, string> = {
  ja: 'Q. 通信は暗号化されていますか？\nA. 平文での通信となります。',
  en: 'Q. Is communication encrypted?\nA. Communication is unencrypted.',
  fr: 'Q. Les communications sont-elles chiffrées ?\nA. Les communications ne sont pas chiffrées.',
  de: 'F. Ist die Kommunikation verschlüsselt?\nA. Die Kommunikation erfolgt unverschlüsselt.',
  es: 'P. ¿Está cifrada la comunicación?\nR. La comunicación no está cifrada.',
  it: 'D. La comunicazione è crittografata?\nR. La comunicazione non è crittografata.',
  pt: 'P. A comunicação é encriptada?\nR. A comunicação não é encriptada.',
  ko: 'Q. 통신은 암호화되나요?\nA. 통신은 평문으로 이루어집니다.',
  zh: '问：通信是否加密？\n答：通信以明文方式进行。',
  tw: '問：通訊是否經過加密？\n答：通訊以明文方式進行。',
  ru: 'В. Зашифровано ли соединение?\nО. Обмен данными осуществляется в незашифрованном виде.',
  nl: 'V. Is de communicatie versleuteld?\nA. De communicatie vindt onversleuteld plaats.',
}
const externalTouchPrivacy: Record<Language, string> = {
  ja: '最終更新日：2026年8月14日\n\n収集する情報\n本アプリは、ユーザーの個人情報を収集・外部送信しません。\n\nログについて\nこのアプリにはデバッグ目的でログ取得機能があります。ログにはユーザーのIPアドレスやデバイス名が含まれることがあります。しかし、アプリは取得したログを自発的に外部に送信することはありません。\n\n広告・解析・クラッシュレポート\n本アプリは広告SDK・解析SDK・クラッシュレポートSDKを使用していません。\n\nプライバシーポリシーの変更\n本ポリシーは予告なく変更される場合があります。変更後は本ページに掲載します。\n\nお問い合わせ\n本ポリシーに関するご質問はフォームよりお送りください。',
  en: 'Last updated: August 14, 2026\n\nInformation collected\nThis app does not collect or send users’ personal information outside the app.\n\nAbout logs\nThis app includes a log collection function for debugging purposes. Logs may contain the user’s IP address and device name. However, the app does not send collected logs externally on its own.\n\nAdvertising, analytics, and crash reports\nThis app does not use advertising, analytics, or crash-reporting SDKs.\n\nChanges to this privacy policy\nThis policy may change without notice. Changes will be posted on this page.\n\nContact\nPlease use the form to send questions about this policy.',
  fr: 'Dernière mise à jour : 14 août 2026\n\nInformations collectées\nCette application ne collecte ni n’envoie d’informations personnelles des utilisateurs en dehors de l’application.\n\nÀ propos des journaux\nCette application dispose d’une fonction de collecte de journaux à des fins de débogage. Les journaux peuvent contenir l’adresse IP de l’utilisateur et le nom de l’appareil. Toutefois, l’application n’envoie pas spontanément les journaux collectés à l’extérieur.\n\nPublicité, analyse et rapports de plantage\nCette application n’utilise aucun SDK publicitaire, analytique ou de rapport de plantage.\n\nModifications de cette politique\nCette politique peut être modifiée sans préavis. Les changements seront publiés sur cette page.\n\nContact\nPour toute question concernant cette politique, utilisez le formulaire.',
  de: 'Letzte Aktualisierung: 14. August 2026\n\nErfasste Informationen\nDiese App erfasst oder übermittelt keine personenbezogenen Daten der Nutzer nach außen.\n\nÜber Protokolle\nDiese App verfügt zu Debugging-Zwecken über eine Funktion zur Protokollerfassung. Protokolle können die IP-Adresse des Nutzers und den Gerätenamen enthalten. Die App übermittelt die erfassten Protokolle jedoch nicht selbstständig nach außen.\n\nWerbung, Analyse und Absturzberichte\nDiese App verwendet keine SDKs für Werbung, Analyse oder Absturzberichte.\n\nÄnderungen dieser Datenschutzrichtlinie\nDiese Richtlinie kann ohne Vorankündigung geändert werden. Änderungen werden auf dieser Seite veröffentlicht.\n\nKontakt\nFragen zu dieser Richtlinie können Sie über das Formular senden.',
  es: 'Última actualización: 14 de agosto de 2026\n\nInformación recopilada\nEsta aplicación no recopila ni envía información personal de los usuarios fuera de la aplicación.\n\nAcerca de los registros\nEsta aplicación incluye una función de recopilación de registros con fines de depuración. Los registros pueden contener la dirección IP del usuario y el nombre del dispositivo. Sin embargo, la aplicación no envía por iniciativa propia los registros recopilados al exterior.\n\nPublicidad, análisis e informes de errores\nEsta aplicación no utiliza SDK de publicidad, análisis ni informes de errores.\n\nCambios en esta política\nEsta política puede cambiar sin previo aviso. Los cambios se publicarán en esta página.\n\nContacto\nUtilice el formulario para enviar preguntas sobre esta política.',
  it: 'Ultimo aggiornamento: 14 agosto 2026\n\nInformazioni raccolte\nQuesta app non raccoglie né invia all’esterno dell’app informazioni personali degli utenti.\n\nInformazioni sui log\nQuesta app dispone di una funzione di raccolta dei log per scopi di debug. I log possono contenere l’indirizzo IP dell’utente e il nome del dispositivo. Tuttavia, l’app non invia autonomamente all’esterno i log raccolti.\n\nPubblicità, analisi e rapporti sugli arresti anomali\nQuesta app non utilizza SDK pubblicitari, di analisi o di rapporti sugli arresti anomali.\n\nModifiche a questa informativa\nQuesta informativa può cambiare senza preavviso. Le modifiche saranno pubblicate su questa pagina.\n\nContatti\nPer domande su questa informativa, utilizza il modulo.',
  pt: 'Última atualização: 14 de agosto de 2026\n\nInformações recolhidas\nEsta aplicação não recolhe nem envia informações pessoais dos utilizadores para fora da aplicação.\n\nSobre os registos\nEsta aplicação inclui uma função de recolha de registos para fins de depuração. Os registos podem conter o endereço IP do utilizador e o nome do dispositivo. No entanto, a aplicação não envia autonomamente os registos recolhidos para o exterior.\n\nPublicidade, análise e relatórios de falhas\nEsta aplicação não utiliza SDKs de publicidade, análise ou relatórios de falhas.\n\nAlterações a esta política\nEsta política pode ser alterada sem aviso prévio. As alterações serão publicadas nesta página.\n\nContacto\nUtilize o formulário para enviar perguntas sobre esta política.',
  ko: '최종 업데이트: 2026년 8월 14일\n\n수집하는 정보\n이 앱은 사용자의 개인정보를 수집하거나 앱 외부로 전송하지 않습니다.\n\n로그에 관하여\n이 앱에는 디버깅을 위한 로그 수집 기능이 있습니다. 로그에는 사용자의 IP 주소와 기기 이름이 포함될 수 있습니다. 그러나 앱이 수집한 로그를 자체적으로 외부에 전송하지는 않습니다.\n\n광고, 분석 및 충돌 보고서\n이 앱은 광고 SDK, 분석 SDK 및 충돌 보고서 SDK를 사용하지 않습니다.\n\n개인정보 보호정책의 변경\n이 정책은 예고 없이 변경될 수 있습니다. 변경 사항은 이 페이지에 게시됩니다.\n\n문의\n이 정책에 관한 질문은 양식을 통해 보내 주세요.',
  zh: '最后更新日期：2026年8月14日\n\n收集的信息\n本应用不会收集或向应用外部发送用户的个人信息。\n\n关于日志\n本应用具有用于调试目的的日志收集功能。日志中可能包含用户的 IP 地址和设备名称。但是，本应用不会主动将收集的日志发送到外部。\n\n广告、分析和崩溃报告\n本应用不使用广告 SDK、分析 SDK 或崩溃报告 SDK。\n\n隐私政策的变更\n本政策可能会在不另行通知的情况下变更。变更后将发布在本页面。\n\n联系我们\n如对本政策有疑问，请通过表单联系我们。',
  tw: '最後更新日期：2026年8月14日\n\n收集的資訊\n本應用程式不會收集或向應用程式外部傳送使用者的個人資訊。\n\n關於記錄\n本應用程式提供以偵錯為目的的記錄收集功能。記錄可能包含使用者的 IP 位址和裝置名稱。但是，本應用程式不會主動將收集的記錄傳送到外部。\n\n廣告、分析與當機報告\n本應用程式不使用廣告 SDK、分析 SDK 或當機報告 SDK。\n\n隱私權政策的變更\n本政策可能在不另行通知的情況下變更。變更後將發布於本頁面。\n\n聯絡我們\n如對本政策有疑問，請透過表單聯絡我們。',
  ru: 'Последнее обновление: 14 августа 2026 г.\n\nСобираемая информация\nЭто приложение не собирает и не передаёт за пределы приложения персональные данные пользователей.\n\nО журналах\nВ приложении есть функция сбора журналов для отладки. Журналы могут содержать IP-адрес пользователя и имя устройства. Однако приложение самостоятельно не отправляет собранные журналы во внешние системы.\n\nРеклама, аналитика и отчёты о сбоях\nПриложение не использует SDK для рекламы, аналитики и отчётов о сбоях.\n\nИзменения политики конфиденциальности\nЭта политика может изменяться без предварительного уведомления. Изменения будут опубликованы на этой странице.\n\nКонтакты\nВопросы по этой политике можно отправить через форму.',
  nl: 'Laatst bijgewerkt: 14 augustus 2026\n\nVerzamelde informatie\nDeze app verzamelt geen persoonlijke informatie van gebruikers en stuurt deze niet buiten de app.\n\nOver logboeken\nDeze app bevat een functie voor het verzamelen van logboeken voor debugdoeleinden. Logboeken kunnen het IP-adres van de gebruiker en de apparaatnaam bevatten. De app verstuurt de verzamelde logboeken echter niet uit zichzelf naar externe partijen.\n\nAdvertenties, analyses en crashrapporten\nDeze app gebruikt geen SDK’s voor advertenties, analyses of crashrapporten.\n\nWijzigingen in dit privacybeleid\nDit beleid kan zonder voorafgaande kennisgeving worden gewijzigd. Wijzigingen worden op deze pagina gepubliceerd.\n\nContact\nGebruik het formulier om vragen over dit beleid te versturen.',
}

const externalTouchTermsJa = `制定日：2026年09月21日
最終更新日：2026年09月21日
事業者：Hamster Works

---

# 第1条（適用）

1. 本利用規約（以下「本規約」といいます。）は、Hamster Works（以下「当方」といいます。）が提供する「eXternalTouchDisplay」アプリケーション（以下「本アプリ」といいます。）および本アプリに関連して当方が提供するサービス、機能、ウェブサイトその他の関連サービス（以下、本アプリと総称して「本サービス」といいます。）の利用条件を定めるものです。
2. 本規約において「本サービス」とは、本アプリそのものを含み、本アプリに関連して当方が提供するサービス、機能、ウェブサイトその他の関連サービスを意味します。
3. 利用者は、本規約に同意した上で、本サービスを利用するものとします。
4. 本規約において「利用者」とは、本サービスを利用するすべての個人または法人をいいます。

---

# 第2条（利用許諾）

1. 当方は、利用者に対し、本規約に従って本サービスを利用するための、非独占的かつ譲渡不能な利用権を許諾します。
2. 本サービスは利用者に販売されるものではなく、本規約に基づいて利用するためのライセンスが許諾されるものとします。
3. 利用者は、本規約および適用される法令に従って本サービスを利用するものとします。

---

# 第3条（禁止事項）

利用者は、本サービスの利用にあたり、以下の行為を行ってはなりません。

1. 本サービスを違法な目的または不正な目的で利用すること。
2. 本サービスを複製、販売、再配布、貸与、譲渡、サブライセンスその他の方法により第三者に提供すること。ただし、法令または本規約により明示的に認められる場合を除きます。
3. 本サービスをリバースエンジニアリング、逆コンパイル、逆アセンブルその他の方法により解析または改変すること。ただし、適用される法令により禁止できない場合を除きます。
4. 本サービスの正常な動作を妨害する行為。
5. 本サービスまたは当方のシステムに対して、不正なアクセス、過度な負荷その他の攻撃を行うこと。
6. 当方または第三者の権利、利益または信用を侵害する行為。
7. その他、当方が不適切と合理的に判断する行為。

---

# 第4条（アップデートおよび仕様変更）

1. 当方は、本サービスの機能追加、変更、改善、修正、セキュリティ対応、技術上の必要その他の理由により、本サービスの仕様を随時変更することがあります。
2. 本サービスの機能、仕様、内容、デザイン、操作方法、対応する端末、対応するOSおよびOSバージョン、対応する外部機器、通信方式その他の提供条件等は、事前の通知または予告なく、変更、追加、削除または廃止される場合があります。
3. 当方は、特定の機能または仕様を将来にわたって提供することを保証するものではなく、既存の機能または仕様を変更、削除または廃止することがあります。
4. 本サービスのアップデートまたは仕様変更により、以前利用できた機能が利用できなくなったり、動作、操作方法または利用環境が変更されたりする場合があります。
5. 当方は、技術上、運営上、法令上その他の合理的な理由により、本サービスの全部または一部の提供を、事前の通知または予告なく、一時停止、変更または終了することがあります。
6. 本サービスのアップデート、仕様変更、機能の削除または廃止、提供停止もしくは終了により利用者に生じた損害については、第10条（損害賠償責任の制限）の定めに従うものとします。

---

# 第5条（料金およびサブスクリプション）

1. 本サービスには、有料の機能またはサブスクリプション（自動更新される定期購入を含みます。）が含まれる場合があります。
2. 有料機能またはサブスクリプションの料金、期間、更新条件その他の購入条件は、購入時に表示される内容、App Store、Google Playその他の販売プラットフォームに表示される条件に従うものとします。
3. サブスクリプションは、利用者が所定の方法で解約しない限り、自動的に更新される場合があります。
4. 支払い、請求、更新、解約、返金その他の購入に関する事項については、Apple、Googleその他の販売プラットフォームが定める規約および条件が適用される場合があります。
5. 利用者がサブスクリプションを解約した場合でも、既に支払われた料金について、適用される法令または販売プラットフォームの返金規定により返金が認められる場合を除き、返金されないことがあります。

---

# 第6条（第三者サービス）

1. 本サービスは、Apple、Google、外部ディスプレイ、USB機器、ネットワーク、クラウドサービスその他の第三者が提供する製品、サービスまたは技術と連携または依存する場合があります。
2. 第三者の製品、サービス、OS、API、仕様、ネットワークその他の環境の変更、不具合、停止、終了またはその他の事情により、本サービスの全部または一部が利用できなくなる場合があります。
3. 第三者のサービスについては、それぞれの第三者が定める利用規約、プライバシーポリシーその他の条件が適用されます。

---

# 第7条（知的財産権）

1. 本サービス、本アプリ、名称、ロゴ、デザイン、プログラム、画像、文章その他本サービスを構成する一切のコンテンツに関する著作権その他の知的財産権は、当方または正当な権利を有する第三者に帰属します。
2. 本規約は、利用者に対して、本サービスに関する知的財産権を譲渡するものではありません。
3. 本サービスにオープンソースソフトウェアその他第三者のソフトウェアが含まれる場合、当該ソフトウェアについては、それぞれのライセンス条件が適用されます。

---

# 第8条（プライバシーポリシー）

1. 収集する情報
本アプリは、利用者の個人情報を収集または外部送信しません。ただし、本アプリにはデバッグおよび不具合調査を目的としたログ取得機能が含まれる場合があります。

2. ログについて
本アプリが取得するデバッグログには、利用環境によって、利用者のIPアドレス、デバイス名その他のデバイスに関する情報が含まれる場合があります。これらのログについて、本アプリが利用者の操作によらず、自発的に外部のサーバーその他の第三者へ送信することはありません。利用者が、自らの意思でログその他の情報を当方に送信した場合、当方は、当該情報を本サービスの提供、不具合調査、問い合わせ対応その他必要な目的のために利用することがあります。当方は、法令に基づく場合を除き、利用者から自発的に提供された情報を第三者に提供または共有しません。

3. 広告・解析・クラッシュレポート
本アプリは、広告SDK、アクセス解析SDK、利用状況解析SDK、クラッシュレポートSDKその他これらに類する第三者提供のSDKを使用していません。

4. 情報の保存および削除
本アプリが利用者の端末内に保存するデータについては、利用者自身の端末またはOSの機能・設定等により管理されます。当方が利用者から問い合わせ等を通じて情報を受領した場合、その情報は、問い合わせへの対応、不具合調査その他必要な目的のために必要な期間保持することがあります。不要となった情報については、法令上保存が必要な場合を除き、適切な方法で削除または廃棄するよう努めます。

---

# 第9条（保証の否認および不具合等）

1. 本サービスは、「現状有姿（AS IS）」および「提供可能な状態（AS AVAILABLE）」で提供されます。
2. 当方は、適用される法令により認められる最大限の範囲において、本サービスについて、以下を含むいかなる保証も行いません。
1. 本サービスにバグ、エラーその他の不具合が存在しないこと。
2. 本サービスが常に正常に動作すること。
3. 本サービスが中断、停止または遅延することなく利用できること。
4. 本サービスが特定の端末、OS、OSバージョン、外部ディスプレイ、USB機器、ケーブル、ネットワーク、ドライバその他の環境において正常に動作すること。
5. 本サービスが利用者の特定の目的または期待する結果を満たすこと。
6. 本サービスによって表示、保存、転送または同期されるデータが常に正確、完全または消失しないこと。
7. 本サービスの不具合が必ず修正されること。
3. 本サービスの利用中に、アプリケーションのクラッシュ、フリーズ、予期しない終了、表示の乱れ、接続の失敗、入力の不具合、遅延、データの欠損、データの破損その他の予期しない動作が発生する可能性があります。
4. OS、端末、外部ディスプレイ、USB機器、ケーブル、ネットワーク、ドライバ、第三者が提供するソフトウェアまたはサービスその他の第三者製品・サービスの仕様変更、不具合、互換性その他の事情により、本サービスが正常に動作しない場合があります。
5. 当方は、本サービスに不具合その他の問題が発見された場合、修正、アップデートその他の対応を行うことがありますが、これらを行う義務を負うものではありません。
6. 利用者は、本サービスの利用に際して重要なデータが失われる可能性があることを理解し、必要に応じて、自らの責任においてバックアップその他のデータ保全措置を講じるものとします。

---

# 第10条（損害賠償責任の制限）

1. 適用される法令により認められる最大限の範囲において、当方は、本サービスの利用または利用不能、本サービスの不具合、エラー、バグ、停止、終了、データの消失・破損その他本サービスに関連して生じた、逸失利益、逸失収益、事業機会の喪失、データの喪失、データの破損、業務の中断その他の間接損害、付随的損害、特別損害または結果的損害について責任を負わないものとします。
2. 利用者と当方との間の契約が消費者契約法その他の強行法規の適用を受ける場合、当該法令により無効となる範囲については、本条の免責または責任制限は適用されないものとします。
3. 当方の責任について法令上完全な免責または責任制限が認められない場合、当方の責任は、当該法令により認められる最小限の範囲に限定されるものとします。
4. 本条は、適用される法令により免責または責任制限が認められない責任についてまで、当方を免責することを意図するものではありません。

---

# 第11条（利用者の責任）

1. 利用者は、自らの責任において本サービスを利用するものとします。
2. 利用者が本サービスを利用したことにより、利用者自身または第三者に損害、損失その他の不利益が生じた場合、利用者は、その利用について必要な確認および対策を自らの責任で行うものとします。
3. 本サービスを業務、商用環境その他重要な用途で利用する場合、利用者は、本サービスが正常に動作しない場合に備えて、必要な代替手段およびバックアップを用意するものとします。

---

# 第12条（利用停止および終了）

1. 利用者が本規約に違反した場合、当方は、事前の通知なく、当該利用者による本サービスの利用を停止または制限することがあります。
2. 当方は、技術上、運営上、法令上その他の合理的な理由により、本サービスの全部または一部の提供を停止または終了することがあります。
3. 本サービスの利用停止または終了により利用者に損害が生じた場合であっても、適用される法令により認められる最大限の範囲において、当方は責任を負わないものとします。

---

# 第13条（本規約の変更）

1. 当方は、必要に応じて本規約を変更することがあります。
2. 本規約は、法令、サービス内容、技術その他の事情に応じて、事前の通知または予告なく変更される場合があります。
3. 重要な変更を行う場合、当方は、可能な限り適切な方法により変更内容および変更時期を周知するよう努めます。
4. 変更後の本規約は、当方が本サービス上または当方が指定するウェブサイト上に掲載した時点から、別途定める場合を除き適用されます。

---

# 第14条（言語）

1. 本規約および本プライバシーポリシーについて、他の言語による翻訳版が提供される場合であっても、日本語版を正文とします。
2. 日本語版と翻訳版との間に内容または解釈の相違がある場合、日本語版が優先するものとします。

---

# 第15条（第三者の規約）

本サービスをApple App Store、Google Playその他の第三者が提供するプラットフォームを通じて利用する場合、利用者は、当該プラットフォームの利用規約その他の適用される条件にも従うものとします。

---

# 第16条（準拠法および管轄）

1. 本規約は、日本法に準拠して解釈されるものとします。ただし、利用者が居住する国または地域の強行法規により別途定められる場合を除きます。
2. 本サービスまたは本規約に関して当方と利用者との間で紛争が生じた場合、適用される法令に従い解決するものとします。

---

# 第17条（連絡先）

本サービス、本規約、プライバシーその他に関するお問い合わせは、以下の連絡先までご連絡ください。

メールアドレス：contact@hamster-works.com

---

# 第18条（分離可能性）

本規約のいずれかの条項またはその一部が、適用される法令により無効または執行不能と判断された場合であっても、その他の条項は引き続き有効に存続するものとします。`

const legalTermsHtml = (terms: string) => terms.split('\n\n').map((block) => {
  if (block === '---') return '<hr>'
  if (block.startsWith('# ')) return `<h3>${block.slice(2)}</h3>`
  return `<p>${block.replace(/\n/g, '<br>')}</p>`
}).join('')

const externalTouchTermsEn = `Established: September 21, 2026
Last updated: September 21, 2026
Operator: Hamster Works

---

# Article 1 (Scope)

1. These Terms of Use (the “Terms”) establish the conditions for using the “eXternalTouchDisplay” application (the “App”) provided by Hamster Works (the “Operator”), and the services, functions, websites, and other related services provided by the Operator in connection with the App (collectively with the App, the “Service”).
2. In these Terms, “Service” means the App itself and the services, functions, websites, and other related services provided by the Operator in connection with the App.
3. Users shall use the Service after agreeing to these Terms.
4. “User” means any individual or legal entity using the Service.

---

# Article 2 (License)

1. The Operator grants each User a non-exclusive and non-transferable right to use the Service in accordance with these Terms.
2. The Service is not sold to Users; a license to use the Service is granted under these Terms.
3. Users shall use the Service in accordance with these Terms and applicable laws and regulations.

---

# Article 3 (Prohibited Activities)

Users shall not engage in any of the following activities when using the Service.

1. Using the Service for an illegal or unauthorized purpose.
2. Providing the Service to a third party by copying, selling, redistributing, lending, transferring, sublicensing, or any other means, except where expressly permitted by law or these Terms.
3. Analyzing or modifying the Service by reverse engineering, decompiling, disassembling, or any other means, except where such restriction is prohibited by applicable law.
4. Interfering with the normal operation of the Service.
5. Making unauthorized access, imposing excessive load, or conducting any other attack against the Service or the Operator’s systems.
6. Infringing the rights, interests, or reputation of the Operator or any third party.
7. Any other activity that the Operator reasonably determines to be inappropriate.

---

# Article 4 (Updates and Changes to Specifications)

1. The Operator may change the specifications of the Service from time to time for reasons including adding, changing, improving, or correcting functions, implementing security measures, or technical necessity.
2. The functions, specifications, content, design, operating methods, supported devices, supported operating systems and OS versions, supported external equipment, communication methods, and other conditions of the Service may be changed, added, removed, or discontinued without prior notice or announcement.
3. The Operator does not guarantee that any particular function or specification will be provided in the future and may change, remove, or discontinue existing functions or specifications.
4. Updates or specification changes may make previously available functions unavailable or change the operation, operating methods, or usage environment.
5. The Operator may temporarily suspend, change, or terminate all or part of the Service without prior notice or announcement for technical, operational, legal, or other reasonable reasons.
6. Any damage incurred by a User due to updates, specification changes, removal or discontinuation of functions, suspension, or termination of the Service shall be governed by Article 10 (Limitation of Liability for Damages).

---

# Article 5 (Fees and Subscriptions)

1. The Service may include paid functions or subscriptions, including automatically renewing subscriptions.
2. Fees, periods, renewal conditions, and other purchase conditions for paid functions or subscriptions shall be governed by the information displayed at the time of purchase and the conditions displayed on the App Store, Google Play, or other sales platforms.
3. A subscription may renew automatically unless the User cancels it through the prescribed method.
4. Apple, Google, or another sales platform may impose its own terms and conditions regarding payment, billing, renewal, cancellation, refunds, and other purchase matters.
5. Even if a User cancels a subscription, fees already paid may not be refunded except where a refund is permitted by applicable law or the refund rules of the sales platform.

---

# Article 6 (Third-Party Services)

1. The Service may integrate with or depend on products, services, or technologies provided by Apple, Google, external displays, USB devices, networks, cloud services, or other third parties.
2. All or part of the Service may become unavailable due to changes, defects, suspension, termination, or other circumstances affecting third-party products, services, operating systems, APIs, specifications, networks, or other environments.
3. Third-party services are subject to the terms of use, privacy policies, and other conditions established by the respective third parties.

---

# Article 7 (Intellectual Property Rights)

1. Copyright and other intellectual property rights in the Service, the App, its name, logos, designs, programs, images, text, and all other content comprising the Service belong to the Operator or a third party with legitimate rights.
2. These Terms do not transfer any intellectual property rights in the Service to Users.
3. If the Service includes open-source software or other third-party software, the applicable license terms for that software shall apply.

---

# Article 8 (Privacy Policy)

1. Information Collected
The App does not collect or externally transmit Users’ personal information. However, the App may include a log collection function for debugging and investigating defects.

2. Logs
Depending on the usage environment, debug logs collected by the App may contain a User’s IP address, device name, and other device-related information. The App does not independently send these logs to an external server or other third party without the User’s action. If a User voluntarily sends logs or other information to the Operator, the Operator may use that information for providing the Service, investigating defects, responding to inquiries, and other necessary purposes. Except where required by law, the Operator will not provide or share information voluntarily provided by a User with third parties.

3. Advertising, Analytics, and Crash Reports
The App does not use advertising SDKs, access analytics SDKs, usage analytics SDKs, crash-reporting SDKs, or similar third-party SDKs.

4. Storage and Deletion of Information
Data stored by the App on a User’s device is managed through the User’s device or the functions and settings of the operating system. If the Operator receives information from a User through an inquiry or other means, the Operator may retain that information for the period necessary to respond to the inquiry, investigate defects, or fulfill other necessary purposes. The Operator will endeavor to delete or dispose of information that is no longer necessary in an appropriate manner, except where retention is required by law.

---

# Article 9 (Disclaimer of Warranties and Defects)

1. The Service is provided on an “AS IS” and “AS AVAILABLE” basis.
2. To the maximum extent permitted by applicable law, the Operator makes no warranties regarding the Service, including the following.
1. That the Service is free of bugs, errors, or other defects.
2. That the Service will always operate normally.
3. That the Service will be available without interruption, suspension, or delay.
4. That the Service will operate normally with any particular device, OS, OS version, external display, USB device, cable, network, driver, or other environment.
5. That the Service will meet a User’s particular purpose or expected result.
6. That data displayed, stored, transferred, or synchronized by the Service will always be accurate, complete, or free from loss.
7. That defects in the Service will necessarily be corrected.
3. The App may crash, freeze, terminate unexpectedly, display incorrectly, fail to connect, fail to receive input, become delayed, lose or corrupt data, or otherwise behave unexpectedly while the Service is used.
4. The Service may not operate normally due to specification changes, defects, compatibility issues, or other circumstances involving an OS, device, external display, USB device, cable, network, driver, software or service provided by a third party, or other third-party product or service.
5. The Operator may provide corrections, updates, or other responses if a defect or other problem is discovered in the Service, but is not obligated to do so.
6. Users understand that important data may be lost when using the Service and shall, when necessary, take backup and other data-preservation measures at their own responsibility.

---

# Article 10 (Limitation of Liability for Damages)

1. To the maximum extent permitted by applicable law, the Operator shall not be liable for lost profits, lost revenue, loss of business opportunities, loss or corruption of data, business interruption, or any other indirect, incidental, special, or consequential damages arising from or related to the use or inability to use the Service, defects, errors, bugs, suspension, termination, loss or corruption of data, or any other matter related to the Service.
2. If the agreement between a User and the Operator is subject to the Consumer Contract Act or other mandatory laws, this disclaimer or limitation of liability shall not apply to the extent invalidated by those laws.
3. If the law does not permit a complete disclaimer or limitation of the Operator’s liability, the Operator’s liability shall be limited to the minimum extent permitted by that law.
4. This Article is not intended to disclaim liability that cannot be disclaimed or limited under applicable law.

---

# Article 11 (User Responsibility)

1. Users shall use the Service at their own responsibility.
2. If damage, loss, or any other disadvantage occurs to a User or a third party because of a User’s use of the Service, the User shall conduct the necessary checks and take measures regarding that use at the User’s own responsibility.
3. When using the Service for business, commercial environments, or other important purposes, Users shall prepare necessary alternatives and backups in case the Service does not operate normally.

---

# Article 12 (Suspension and Termination of Use)

1. If a User violates these Terms, the Operator may suspend or restrict that User’s use of the Service without prior notice.
2. The Operator may suspend or terminate all or part of the Service for technical, operational, legal, or other reasonable reasons.
3. Even if a User suffers damage due to suspension or termination of the Service, the Operator shall not be liable to the maximum extent permitted by applicable law.

---

# Article 13 (Changes to These Terms)

1. The Operator may change these Terms when necessary.
2. These Terms may be changed without prior notice or announcement in response to laws, the content of the Service, technology, or other circumstances.
3. For important changes, the Operator will endeavor to inform Users of the changes and their effective date through an appropriate method whenever possible.
4. The changed Terms shall apply when posted on the Service or a website designated by the Operator, unless otherwise specified.

---

# Article 14 (Language)

1. Even if translations of these Terms and the Privacy Policy are provided in other languages, the Japanese version shall be the controlling text.
2. If there is any difference in content or interpretation between the Japanese version and a translated version, the Japanese version shall prevail.

---

# Article 15 (Third-Party Terms)

When using the Service through the Apple App Store, Google Play, or another platform provided by a third party, Users shall also comply with the terms of use and other applicable conditions of that platform.

---

# Article 16 (Governing Law and Jurisdiction)

1. These Terms shall be governed by and interpreted in accordance with the laws of Japan, except where mandatory laws of the country or region in which a User resides provide otherwise.
2. If a dispute arises between the Operator and a User regarding the Service or these Terms, it shall be resolved in accordance with applicable law.

---

# Article 17 (Contact)

For inquiries regarding the Service, these Terms, privacy, or other matters, please contact the following address.

Email: contact@hamster-works.com

---

# Article 18 (Severability)

If any provision or part of these Terms is determined to be invalid or unenforceable under applicable law, the remaining provisions shall remain in full force and effect.`

const addDriverDownloadNote = (support: string) => {
  const driverLabel = currentLanguage === 'ja' ? 'ドライバアプリ' : currentLanguage === 'en' ? 'driver app' : currentLanguage === 'fr' ? 'application pilote' : 'driver app'
  const receiverLabel = currentLanguage === 'ja' ? 'レシーバアプリ' : currentLanguage === 'en' ? 'receiver app' : currentLanguage === 'fr' ? 'application réceptrice' : 'receiver app'
  const driverPattern = new RegExp(`${driverLabel}(※)?(?=.?eXTDDriver)`, 'i')
  const receiverPattern = new RegExp(`${receiverLabel}(※)?`, 'gi')
  const note = `<span class="support-download-note">※<a class="support-download-link" href="https://github.com/hamster-works/eXTD" target="_blank" rel="noreferrer">${downloadPageLabels[currentLanguage]}</a></span>`
  const hasExplicitNote = support.includes('{{DOWNLOAD_NOTE}}')
  let updated = support.replace(driverPattern, `${driverLabel}※`)
  updated = updated.replace(/(eXTDDriver\s+app)(※)?/gi, '$1※')
  updated = updated.replace(receiverPattern, `${receiverLabel}※`)
  updated = updated.replace('※{{DOWNLOAD_NOTE}}', note).replace('{{DOWNLOAD_NOTE}}', note)
  if (hasExplicitNote) return updated
  const restartTerms = currentLanguage === 'ja' ? ['再起動'] : currentLanguage === 'fr' ? ['Redémarrez'] : ['Restart']
  const lines = updated.split(/\r?\n/)
  const restartIndex = lines.findIndex((line) => restartTerms.some((term) => line.includes(term)))
  if (restartIndex >= 0) {
    lines.splice(restartIndex + 1, 0, note)
    return lines.join('\n')
  }
  return `${updated}\n\n${note}`
}

const localizedProduct = (product: Product) => {
  const localized = currentLanguage === 'ja'
    ? { ...product }
    : { ...product, ...(productCopy[currentLanguage]?.[product.slug] ?? extraProductCopy[currentLanguage]?.[product.slug] ?? productCopy.en?.[product.slug]), ...(productDetails[currentLanguage]?.[product.slug] ?? extraProductDetails[currentLanguage]?.[product.slug] ?? productDetails.en?.[product.slug]) }
  if (product.slug === 'external-touch-display') {
    localized.privacy = externalTouchPrivacy[currentLanguage]
    if (currentLanguage !== 'ja' && externalTouchSupport[currentLanguage]) localized.support = externalTouchSupport[currentLanguage]
    const downloadLink = `<a href="https://github.com/hamster-works/eXTD" target="_blank" rel="noreferrer">${downloadPageLabels[currentLanguage]}</a>`
    const featureLines = localized.features[3].split('\n')
    const systemRequirements = extraSystemRequirements[currentLanguage]
    if (systemRequirements) {
      featureLines[0] = systemRequirements[0]
      featureLines[2] = systemRequirements[1]
    }
    featureLines[1] = `1. ${driverInstallText[currentLanguage].replace('{link}', downloadLink)}`
    localized.features = [...localized.features]
    localized.features[3] = featureLines.join('\n')
    if (localized.support) {
      localized.support = localized.support.replace(/\n(?:A\.|R\.|答：|О\.)[^\n]*$/, `\n${authorizationAnswers[currentLanguage]}`)
      localized.support += `\n\n${encryptionAnswers[currentLanguage]}`
      localized.support = addDriverDownloadNote(localized.support)
      localized.support = localized.support.replace('{{DEFENDER_IMAGES}}', supportReferenceImages(currentLanguage)).replace('{{DOWNLOAD_IMAGES}}', supportDownloadImages(currentLanguage))
      if (currentLanguage === 'ja') localized.support = localized.support.replace('で「MediaMTX」を許可する(Public&Private)必要があります。', 'で「eXTDDriver MediaMTX」「eXTDDriver  Receiver TCP」「eXTDDriver Receiver UDP」をパブリックとプライベートで許可しておく必要があります。').replace('A. 画面を参考にダウンロードして保存してください。', 'A. 画像を参考にダウンロードして保存してください。')
    }
  }
  return localized
}

const languageSelector = () => `<label class="language-switcher"><span class="sr-only">Language</span><select data-language aria-label="Language">${Object.entries(languages).map(([code, name]) => `<option value="${code}"${code === currentLanguage ? ' selected' : ''}>${name}</option>`).join('')}</select></label>`

const bindLanguageSelector = () => {
  document.querySelector<HTMLSelectElement>('[data-language]')?.addEventListener('change', (event) => {
    const language = (event.target as HTMLSelectElement).value as Language
    setLanguage(language)
    currentLanguage = language
    currentCopy = getLocalizedCopy(language)
    render()
  })
}

function header() {
  return `<header class="site-header"><a class="brand" href="#/" aria-label="Hamster Works"><span class="brand-mark" aria-hidden="true">${HAMSTER_MARK}</span><span>Hamster Works</span></a><nav aria-label="${currentCopy.navProducts}"><a href="#about">${currentCopy.navAbout}</a><a href="#products">${currentCopy.navProducts}</a><a class="nav-contact" href="${CONTACT_FORM_URL}" target="_blank" rel="noreferrer">${currentCopy.navContact} <span aria-hidden="true">↗</span></a>${languageSelector()}</nav></header>`
}

function footer() {
  return `<footer><div class="footer-brand"><span class="brand-mark" aria-hidden="true">${HAMSTER_MARK}</span><strong>Hamster Works</strong></div><p>${currentCopy.footerDescription}</p><small>© ${new Date().getFullYear()} Hamster Works</small></footer>`
}

function home() {
  return `${header()}<main><section class="hero"><div class="hero-copy"><p class="eyebrow">${currentCopy.homeEyebrow}</p><h1>${currentCopy.homeTitleBefore}<br><em>${currentCopy.homeTitleEmphasis}</em>${currentCopy.homeTitleAfter}</h1><p class="hero-lede">${currentCopy.homeDescription}</p><a class="button button-dark" href="#products">${currentCopy.viewProducts} <span aria-hidden="true">↓</span></a></div><div class="hero-art" aria-label="Software for everyday life"><div class="orbit orbit-one"></div><div class="orbit orbit-two"></div><div class="hero-note"><span class="note-dot"></span><span>small tools,<br>better days</span></div><div class="hero-panel"><div class="panel-top"><span></span><span></span><span></span></div><div class="panel-lines"><i></i><i></i><i></i></div><div class="panel-ring">03</div></div></div></section><section id="about" class="intro-section"><div class="section-index">${currentCopy.aboutIndex}</div><div><h2>${currentCopy.aboutTitle}</h2><p>${currentCopy.aboutDescription}</p></div></section><section id="products" class="products-section"><div class="section-heading"><div><p class="eyebrow">${currentCopy.productsEyebrow}</p><h2>${currentCopy.productsTitle}</h2></div></div><div class="product-grid">${products.map((product, index) => { const localized = localizedProduct(product); return `<a class="product-card accent-${localized.accent}" href="#/product/${localized.slug}"><div class="card-number">0${index + 1}</div><img src="${localized.image}" alt="${localized.name}"><div class="card-body"><p class="card-label">${localized.label}</p><h3 class="card-title">${localized.icon ? `<img class="card-icon" src="${localized.icon}" alt="">` : ''}<span>${localized.name}</span></h3><span class="text-link">${currentCopy.viewProducts} <span aria-hidden="true">↗</span></span></div></a>` }).join('')}</div></section><section class="contact-strip"><div><p class="eyebrow">${currentCopy.contactEyebrow}</p><h2>${currentCopy.contactTitle}</h2></div><a class="button button-light" href="${CONTACT_FORM_URL}" target="_blank" rel="noreferrer">${currentCopy.contactButton} <span aria-hidden="true">↗</span></a></section></main>${footer()}`
}

function productPage(product: Product) {
  product = localizedProduct(product)
  const storeLinks = product.links ? `<div class="store-links">${product.links}</div>` : ''
  const galleryHtml = product.gallery ? product.gallery.length > 1 ? `<div class="feature-gallery" data-gallery><button class="gallery-image-button" type="button" aria-label="${currentCopy.viewProducts}"><img src="${product.gallery[0]}" alt="${product.name}"></button><div class="gallery-dots" role="tablist" aria-label="${currentCopy.featuresEyebrow}">${product.gallery.map((_, index) => `<button type="button" role="tab" aria-selected="${index === 0}" aria-label="${index + 1}" data-gallery-index="${index}"></button>`).join('')}</div></div>` : `<div class="feature-gallery"><img class="gallery-static-image" style="width:504px;max-width:100%;height:auto" src="${product.gallery[0]}" alt="${product.name}"></div>` : ''
  const privacyHtml = product.privacy.split('\n\n').map((paragraph) => `<p>${paragraph}</p>`).join('')
  const isLocalizedExternalTerms = product.slug === 'external-touch-display'
  const supportHtml = product.support ? product.support.split('\n\n').map((paragraph) => {
    const headingClass = supportHeadingLabels.includes(paragraph) ? ' class="support-subheading"' : ''
    const imageLinks = paragraph.match(/<a class="support-reference-link"[\s\S]*?<\/a>/g) ?? []
    const imageToggle = imageLinks.length === 2 ? `<details class="support-images"><summary>${supportImageToggleLabels[currentLanguage]}</summary>${imageLinks.join('')}</details>` : ''
    if (imageLinks.length === 2) {
      const imageBlock = /<br><a class="support-reference-link"[\s\S]*?<\/a><br><a class="support-reference-link"[\s\S]*?<\/a>/
      const [beforeImages, afterImages] = paragraph.split(imageBlock)
      return `${beforeImages ? `<p>${beforeImages}</p>` : ''}${imageToggle}${afterImages ? `<p>${afterImages}</p>` : ''}`
    }
    return `<p${headingClass}>${paragraph}</p>`
  }).join('') : ''
  const disclaimerHtml = product.disclaimer && !isLocalizedExternalTerms ? `<section class="disclaimer"><p class="eyebrow">DISCLAIMER</p><h2>${currentCopy.disclaimerTitle}</h2><p>${product.disclaimer}</p></section>` : ''
  const privacySection = isLocalizedExternalTerms
    ? `<section class="legal-terms"><div><p class="eyebrow">TERMS & PRIVACY</p><h2>${currentLanguage === 'ja' ? '利用規約・プライバシーポリシー' : 'Terms of Use & Privacy Policy'}</h2></div><div class="legal-terms-copy"><details><summary>eXternalTouchDisplay ${currentLanguage === 'ja' ? '利用規約・プライバシーポリシー' : 'Terms of Use & Privacy Policy'}</summary><div class="legal-terms-body">${legalTermsHtml(currentLanguage === 'ja' ? externalTouchTermsJa : externalTouchTermsEn)}</div></details></div></section>`
    : `<section class="privacy"><div><p class="eyebrow">${currentCopy.privacyEyebrow}</p><h2>${currentCopy.privacyTitle}</h2></div><div class="privacy-copy">${privacyHtml}</div></section>`
  const formUrl = product.formUrl ?? CONTACT_FORM_URL
  const supportButton = product.slug === 'external-touch-display' ? '' : `<a class="button button-dark" href="${formUrl}" target="_blank" rel="noreferrer">${currentCopy.feedbackButton}</a>`
  return `${header()}<main class="product-page"><a class="back-link" href="#/">${currentCopy.backToProducts}</a><section class="product-hero accent-${product.accent}"><div><p class="eyebrow">${currentCopy.productEyebrow} / ${product.slug.toUpperCase()}</p><div class="product-title">${product.icon ? `<img src="${product.icon}" alt="${product.name}">` : ''}<h1>${product.name}</h1></div><p class="product-label">${product.label}</p><p class="hero-lede">${product.description}</p>${storeLinks}</div><div class="product-image"><img src="${product.image}" alt="${product.name}"></div></section><section class="detail-grid"><div><p class="eyebrow">${currentCopy.featuresEyebrow}</p><h2>${product.name}${currentCopy.featuresTitle}</h2>${galleryHtml}</div><ul class="feature-list">${product.features.map((feature, index) => `<li><span>${String(index + 1).padStart(2, '0')}</span><strong>${feature}</strong><i aria-hidden="true">↗</i></li>`).join('')}</ul></section>${product.support ? `<section class="support"><div><p class="eyebrow">${currentCopy.supportEyebrow}</p><h2>${currentCopy.supportTitle}</h2></div><div class="support-copy">${supportHtml}${supportButton}</div></section>` : ''}${disclaimerHtml}${privacySection}<section class="contact-strip"><div><p class="eyebrow">${currentCopy.questionsEyebrow}</p><h2>${currentCopy.productContactTitle}</h2></div><a class="button button-light" href="${formUrl}" target="_blank" rel="noreferrer">${currentCopy.formButton} <span aria-hidden="true">↗</span></a></section></main>${footer()}`
}

function initGallery() {
  const gallery = document.querySelector<HTMLElement>('[data-gallery]')
  if (!gallery) return
  const images = products.find((product) => product.gallery)?.gallery ?? []
  const imageButton = gallery.querySelector<HTMLButtonElement>('.gallery-image-button')!
  const image = imageButton.querySelector<HTMLImageElement>('img')!
  const dots = [...gallery.querySelectorAll<HTMLButtonElement>('[data-gallery-index]')]
  let currentIndex = 0
  let startX = 0
  const showImage = (index: number) => {
    currentIndex = (index + images.length) % images.length
    image.src = images[currentIndex]
    image.alt = `${currentCopy.featuresEyebrow} ${currentIndex + 1}`
    dots.forEach((dot, dotIndex) => dot.setAttribute('aria-selected', String(dotIndex === currentIndex)))
  }
  imageButton.addEventListener('click', () => showImage(currentIndex + 1))
  imageButton.addEventListener('pointerdown', (event) => { startX = event.clientX })
  imageButton.addEventListener('pointerup', (event) => {
    const distance = event.clientX - startX
    if (Math.abs(distance) > 30) showImage(currentIndex + (distance < 0 ? 1 : -1))
  })
  dots.forEach((dot) => dot.addEventListener('click', () => showImage(Number(dot.dataset.galleryIndex))))
}

function render() {
  document.documentElement.lang = currentLanguage
  const sectionHash = ['#about', '#products'].includes(window.location.hash)
  const routeMatch = window.location.hash.match(/^#\/product\/([^#]+)(?:#(.+))?$/)
  const slug = routeMatch?.[1]
  const anchor = routeMatch?.[2]
  const product = products.find((item) => item.slug === slug || (slug === 'external-touch-screen' && item.slug === 'external-touch-display'))
  app.innerHTML = product ? productPage(product) : home()
  if (product?.slug === 'external-touch-display') {
    document.querySelector<HTMLElement>('.support')?.setAttribute('id', 'support')
    document.querySelector<HTMLElement>('.legal-terms')?.setAttribute('id', 'eula')
    const anchorLabel = currentLanguage === 'ja' ? 'このセクションへのリンク' : 'Link to this section'
    for (const [selector, anchor] of [['.support h2', 'support'], ['.legal-terms h2', 'eula']] as const) {
      const heading = document.querySelector<HTMLElement>(selector)
      if (!heading) continue
      const link = document.createElement('a')
      link.className = 'section-anchor'
      link.href = `#/product/${product.slug}#${anchor}`
      link.innerHTML = '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M10.59 13.41a2 2 0 0 0 2.82 0l3.59-3.59a2 2 0 0 0-2.82-2.82l-1.29 1.29M13.41 10.59a2 2 0 0 0-2.82 0L7 14.18A2 2 0 0 0 9.82 17l1.29-1.29" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/></svg>'
      link.setAttribute('aria-label', anchorLabel)
      link.title = anchorLabel
      link.style.fontSize = '0.42em'
      link.style.marginLeft = '12px'
      link.style.verticalAlign = 'middle'
      link.style.letterSpacing = '0'
      link.style.display = 'inline-flex'
      link.style.width = '0.9em'
      link.style.height = '0.9em'
      link.style.color = 'var(--muted)'
      heading.append(' ', link)
    }
  }
  initGallery()
  bindLanguageSelector()
  if (anchor) document.getElementById(anchor)?.scrollIntoView({ behavior: 'instant' })
  else if (!sectionHash) window.scrollTo({ top: 0, behavior: 'instant' })
}

window.addEventListener('hashchange', render)
render()
