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
  const disclaimerHtml = product.disclaimer ? `<section class="disclaimer"><p class="eyebrow">DISCLAIMER</p><h2>${currentCopy.disclaimerTitle}</h2><p>${product.disclaimer}</p></section>` : ''
  const formUrl = product.formUrl ?? CONTACT_FORM_URL
  const supportButton = product.slug === 'external-touch-display' ? '' : `<a class="button button-dark" href="${formUrl}" target="_blank" rel="noreferrer">${currentCopy.feedbackButton}</a>`
  return `${header()}<main class="product-page"><a class="back-link" href="#/">${currentCopy.backToProducts}</a><section class="product-hero accent-${product.accent}"><div><p class="eyebrow">${currentCopy.productEyebrow} / ${product.slug.toUpperCase()}</p><div class="product-title">${product.icon ? `<img src="${product.icon}" alt="${product.name}">` : ''}<h1>${product.name}</h1></div><p class="product-label">${product.label}</p><p class="hero-lede">${product.description}</p>${storeLinks}</div><div class="product-image"><img src="${product.image}" alt="${product.name}"></div></section><section class="detail-grid"><div><p class="eyebrow">${currentCopy.featuresEyebrow}</p><h2>${product.name}${currentCopy.featuresTitle}</h2>${galleryHtml}</div><ul class="feature-list">${product.features.map((feature, index) => `<li><span>${String(index + 1).padStart(2, '0')}</span><strong>${feature}</strong><i aria-hidden="true">↗</i></li>`).join('')}</ul></section>${product.support ? `<section class="support"><div><p class="eyebrow">${currentCopy.supportEyebrow}</p><h2>${currentCopy.supportTitle}</h2></div><div class="support-copy">${supportHtml}${supportButton}</div></section>` : ''}${disclaimerHtml}<section class="privacy"><div><p class="eyebrow">${currentCopy.privacyEyebrow}</p><h2>${currentCopy.privacyTitle}</h2></div><div class="privacy-copy">${privacyHtml}</div></section><section class="contact-strip"><div><p class="eyebrow">${currentCopy.questionsEyebrow}</p><h2>${currentCopy.productContactTitle}</h2></div><a class="button button-light" href="${formUrl}" target="_blank" rel="noreferrer">${currentCopy.formButton} <span aria-hidden="true">↗</span></a></section></main>${footer()}`
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
  const slug = window.location.hash.match(/^#\/product\/(.+)$/)?.[1]
  const product = products.find((item) => item.slug === slug || (slug === 'external-touch-screen' && item.slug === 'external-touch-display'))
  app.innerHTML = product ? productPage(product) : home()
  initGallery()
  bindLanguageSelector()
  if (!sectionHash) window.scrollTo({ top: 0, behavior: 'instant' })
}

window.addEventListener('hashchange', render)
render()
