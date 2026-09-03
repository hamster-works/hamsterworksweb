export type Language = 'ja' | 'en' | 'fr' | 'de' | 'es' | 'it' | 'pt' | 'ko' | 'zh' | 'tw' | 'ru' | 'nl'

export const languages: Record<Language, string> = {
  ja: '日本語',
  en: 'English',
  fr: 'Français',
  de: 'Deutsch',
  es: 'Español',
  it: 'Italiano',
  pt: 'Português',
  ko: '한국어',
  zh: '简体中文',
  tw: '繁體中文',
  ru: 'Русский',
  nl: 'Nederlands',
}

const supportedLanguages = Object.keys(languages) as Language[]
const languageStorageKey = 'hamster-works-language'

export const getLanguage = (): Language => {
  const urlLanguage = new URLSearchParams(window.location.search).get('lang')
  if (supportedLanguages.includes(urlLanguage as Language)) return urlLanguage as Language

  const savedLanguage = localStorage.getItem(languageStorageKey)
  if (supportedLanguages.includes(savedLanguage as Language)) return savedLanguage as Language

  const browserLanguages = navigator.languages.length ? navigator.languages : [navigator.language]
  const browserLanguage = browserLanguages
    .map((value) => value.toLowerCase().split('-')[0])
    .find((value) => supportedLanguages.includes(value as Language))
  return (browserLanguage as Language | undefined) ?? 'en'
}

export const setLanguage = (language: Language) => {
  localStorage.setItem(languageStorageKey, language)
  const url = new URL(window.location.href)
  url.searchParams.set('lang', language)
  window.history.replaceState(null, '', `${url.pathname}${url.search}${url.hash}`)
}

type Copy = {
  navAbout: string
  navProducts: string
  navContact: string
  homeEyebrow: string
  homeTitleBefore: string
  homeTitleEmphasis: string
  homeTitleAfter: string
  homeDescription: string
  viewProducts: string
  aboutIndex: string
  aboutTitle: string
  aboutDescription: string
  productsEyebrow: string
  productsTitle: string
  contactEyebrow: string
  contactTitle: string
  contactButton: string
  footerDescription: string
  backToProducts: string
  productEyebrow: string
  featuresEyebrow: string
  featuresTitle: string
  supportEyebrow: string
  supportTitle: string
  feedbackButton: string
  privacyEyebrow: string
  privacyTitle: string
  questionsEyebrow: string
  productContactTitle: string
  formButton: string
  disclaimerTitle: string
}

export const copy: Partial<Record<Language, Copy>> = {
  ja: {
    navAbout: '会社紹介', navProducts: '製品', navContact: 'お問い合わせ', homeEyebrow: 'SOFTWARE FOR EVERYDAY LIFE', homeTitleBefore: 'あなたに寄り添う、', homeTitleEmphasis: 'ちょうどいい', homeTitleAfter: 'をつくってます。', homeDescription: 'Hamster Works は、毎日の中の「あと少し」を見つけてはやっつけるために走り続けます。', viewProducts: '製品を見る', aboutIndex: '01 / ABOUT', aboutTitle: 'ちょっとしたことに<br>取り組もう。', aboutDescription: '日々の中で何度も使うものを、わかりやすく、楽ちんに。Hamster Worksは生活に寄り添う小さな幸せを育みます。', productsEyebrow: 'OUR PRODUCTS', productsTitle: '毎日をちょっとだけ<br>プラス。', contactEyebrow: 'GET IN TOUCH', contactTitle: 'お問い合わせはこちらから。', contactButton: 'お問い合わせフォーム', footerDescription: '毎日をちょっとだけプラス。', backToProducts: '← 製品一覧へ戻る', productEyebrow: 'PRODUCT', featuresEyebrow: 'FEATURES', featuresTitle: 'の機能と特徴', supportEyebrow: 'SUPPORT', supportTitle: 'サポート', feedbackButton: 'フィードバックフォーム ↗', privacyEyebrow: 'PRIVACY POLICY', privacyTitle: 'プライバシー<br>ポリシー', questionsEyebrow: 'QUESTIONS?', productContactTitle: '製品についての<br>お問い合わせはこちらから。', formButton: 'フォームを開く', disclaimerTitle: '免責事項',
  },
  en: {
    navAbout: 'About', navProducts: 'Products', navContact: 'Contact', homeEyebrow: 'SOFTWARE FOR EVERYDAY LIFE', homeTitleBefore: 'Made for you,', homeTitleEmphasis: 'just right', homeTitleAfter: 'for every day.', homeDescription: 'Hamster Works keeps running to find and tackle the little things that could make your everyday life better.', viewProducts: 'View products', aboutIndex: '01 / ABOUT', aboutTitle: 'Let’s work on<br>the little things.', aboutDescription: 'We make everyday tools clear and easy to use. Hamster Works nurtures small moments of happiness that fit into your life.', productsEyebrow: 'OUR PRODUCTS', productsTitle: 'A little something<br>extra, every day.', contactEyebrow: 'GET IN TOUCH', contactTitle: 'Get in touch with us.', contactButton: 'Contact us', footerDescription: 'A little something extra, every day.', backToProducts: '← Back to products', productEyebrow: 'PRODUCT', featuresEyebrow: 'FEATURES', featuresTitle: ' features', supportEyebrow: 'SUPPORT', supportTitle: 'Support', feedbackButton: 'Feedback form ↗', privacyEyebrow: 'PRIVACY POLICY', privacyTitle: 'Privacy<br>policy', questionsEyebrow: 'QUESTIONS?', productContactTitle: 'Questions about<br>this product?', formButton: 'Open form', disclaimerTitle: 'Disclaimer',
  },
  fr: {
    navAbout: 'À propos', navProducts: 'Produits', navContact: 'Contact', homeEyebrow: 'DES LOGICIELS POUR LA VIE QUOTIDIENNE', homeTitleBefore: 'À vos côtés,', homeTitleEmphasis: 'juste ce qu’il faut', homeTitleAfter: 'pour chaque jour.', homeDescription: 'Hamster Works continue d’avancer pour trouver et résoudre les petits détails qui rendent le quotidien plus léger.', viewProducts: 'Voir les produits', aboutIndex: '01 / À PROPOS', aboutTitle: 'Attaquons-nous<br>aux petites choses.', aboutDescription: 'Nous créons des outils du quotidien clairs et agréables à utiliser. Hamster Works fait grandir de petits bonheurs qui s’intègrent à votre vie.', productsEyebrow: 'NOS PRODUITS', productsTitle: 'Un petit plus<br>chaque jour.', contactEyebrow: 'CONTACT', contactTitle: 'Contactez-nous.', contactButton: 'Nous contacter', footerDescription: 'Un petit plus chaque jour.', backToProducts: '← Retour aux produits', productEyebrow: 'PRODUIT', featuresEyebrow: 'FONCTIONNALITÉS', featuresTitle: ' : fonctionnalités', supportEyebrow: 'ASSISTANCE', supportTitle: 'Assistance', feedbackButton: 'Formulaire de retour ↗', privacyEyebrow: 'POLITIQUE DE CONFIDENTIALITÉ', privacyTitle: 'Politique de<br>confidentialité', questionsEyebrow: 'DES QUESTIONS ?', productContactTitle: 'Une question sur<br>ce produit ?', formButton: 'Ouvrir le formulaire', disclaimerTitle: 'Mentions légales',
  },
}

export const getCopy = (language: Language) => copy[language] ?? copy.en!

export const driverInstallText: Record<Language, string> = {
  ja: 'ご利用のPCへのドライバアプリ(eXTDDriver)のインストールが必要（{link}）',
  en: 'Install the driver app (eXTDDriver) for your PC ({link}).',
  fr: 'Installez l’application pilote eXTDDriver pour votre PC ({link}).',
  de: 'Installieren Sie die Treiber-App (eXTDDriver) für Ihren PC ({link}).',
  es: 'Instala la aplicación del controlador (eXTDDriver) para tu PC ({link}).',
  it: 'Installa l’app driver (eXTDDriver) per il tuo PC ({link}).',
  pt: 'Instale o aplicativo de driver (eXTDDriver) para o seu PC ({link}).',
  ko: 'PC용 드라이버 앱(eXTDDriver)을 설치해야 합니다({link}).',
  zh: '需要为您的 PC 安装驱动应用（eXTDDriver）（{link}）。',
  tw: '需要為您的 PC 安裝驅動程式應用程式（eXTDDriver）（{link}）。',
  ru: 'Установите приложение-драйвер (eXTDDriver) для ПК ({link}).',
  nl: 'Installeer de driverapp (eXTDDriver) voor uw pc ({link}).',
}

export const productCopy: Partial<Record<Language, Record<string, { name: string; label: string; description: string }>>> = {
  ja: {
    'expiry-date-manager': { name: 'Expiry Date Manager', label: '食品ロスを減らしたい方に最適な「賞味期限管理」アプリ。', description: 'バーコードを読み取って商品を登録、賞味期限が近づいたらプッシュ通知でお知らせ。音声での日付登録は意外に便利。キッチンでお手軽簡単に登録！' },
    'external-touch-display': { name: 'eXternalTouchDisplay', label: 'タブレット/スマートフォンをPCのタッチ対応サブディスプレイに。', description: 'デスクトップを広く使いたいとき、プレゼン中に手元で操作したいとき、サブモニターをすぐに追加したいときに活用できます。Wi-Fiで接続し、タブレットから直接タッチ操作できます。' },
    antiswipe: { name: 'antiSwipe', label: '意図しないスワイプを、静かに防ぐ', description: '画面に触れたときの意図しない操作を抑え、見る・読む・置いておく時間を守ります。' },
  },
  en: {
    'expiry-date-manager': { name: 'Expiry Date Manager', label: 'A simple expiry-date manager for reducing food waste.', description: 'Scan barcodes to register products and get a local notification before they expire. Voice input makes adding dates easy in the kitchen.' },
    'external-touch-display': { name: 'eXternalTouchDisplay', label: 'Turn your tablet or smartphone into a touch-enabled second display for your PC.', description: 'Expand your desktop, control presentations from your hands, or add a second monitor over Wi-Fi with direct touch control.' },
    antiswipe: { name: 'antiSwipe', label: 'Quietly prevent unintended swipes.', description: 'Block accidental touches and protect your time spent viewing, reading, or simply leaving the screen alone.' },
  },
  fr: {
    'expiry-date-manager': { name: 'Expiry Date Manager', label: 'Une application simple pour gérer les dates et réduire le gaspillage alimentaire.', description: 'Scannez les codes-barres pour enregistrer vos produits et recevez une notification locale avant leur expiration. La saisie vocale facilite l’ajout des dates en cuisine.' },
    'external-touch-display': { name: 'eXternalTouchDisplay', label: 'Transformez votre tablette ou smartphone en second écran tactile pour votre PC.', description: 'Étendez votre bureau, contrôlez vos présentations ou ajoutez rapidement un second écran en Wi-Fi avec le contrôle tactile.' },
    antiswipe: { name: 'antiSwipe', label: 'Bloquez discrètement les glissements involontaires.', description: 'Limitez les touches accidentelles et protégez vos moments de lecture, de consultation ou de pause.' },
  },
}

type ProductDetails = { features: string[]; privacy: string; support?: string; disclaimer?: string }

export const productDetails: Partial<Record<Language, Record<string, ProductDetails>>> = {
  ja: {
    'expiry-date-manager': { features: ['バーコードを読み取って登録', '音声入力で日付を素早く入力', '賞味期限が近づいたらプッシュ通知', 'バックアップ対応', 'こんな方におすすめ！'], privacy: 'プライバシーポリシー本文を Google Site の掲載内容に置き換えてください。' },
    'external-touch-display': { features: ['機能概要', '用途', '特徴', 'システム要件'], privacy: 'プライバシーポリシー本文を Google Site の掲載内容に置き換えてください。', support: 'フィードバック\n\nアプリに関するコメントは下記のフォームよりお送りください。\n\nよくある質問\n\nQ. PCのレシーバアプリに接続/再接続できない、または見つからない\nA. 同じネットワーク上のPC上でドライバアプリ(eXTDDriver)が起動していることを確認してください。\nA. レシーバアプリ（タスクトレイのアプリ）を再起動してください。\nA. 常駐しているセキュリティソフトに除外されている場合はセキュリティソフトに登録してください。\nA. ルーターの設定などをご確認ください。' },
    antiswipe: { features: ['意図しないスワイプをブロック', '必要なときだけすぐ解除', '集中したい場面に寄り添う設計'], privacy: 'プライバシーポリシー本文を Google Site の掲載内容に置き換えてください。' },
  },
  en: {
    'expiry-date-manager': { features: ['Register products by scanning barcodes\n■ Products registered in Open Food Facts automatically receive their image and name.\n■ Even when a product is not registered, you can easily teach it to the app yourself.', 'Enter dates quickly with voice input\n■ Simply say “December 31” to register an expiry date. It is convenient even when both hands are occupied.', 'Get local notifications before expiry\n■ Set how many days in advance to receive a notification, and freely change the notification time. Prevent oversights and reduce food waste.\n※ Notifications are handled entirely on your device; nothing is sent to an external server.', 'Back up your data\n■ Back up your expiry-date list, item database, and thumbnails together to Google Drive or iCloud Drive. Restore everything quickly after changing devices.', 'Who is it for?\n■ People who want to manage food in their refrigerator and cupboards\n■ People who care about reducing food waste\n■ Families who want to manage their ingredients together'], privacy: 'Last updated: April 16, 2026\n\nInformation collected\nThis app does not collect or send users’ personal information outside the app.\n\nWhere data is stored\nExpiry dates, item names, and images are stored only on your device and in your own iCloud. The developer cannot access this data.\n\nCommunication with external services\nWhen you scan a barcode, the barcode number is sent to the Open Food Facts API (https://world.openfoodfacts.org/) to retrieve the product name and image. No information other than the barcode number is sent.\n\nPush notifications\nPush notifications in this app are local notifications handled on your device. Nothing is sent to an external server.\n\nAdvertising, analytics, and crash reports\nThis app does not use advertising, analytics, or crash-reporting SDKs.\n\nChanges to this privacy policy\nThis policy may change without notice. Changes will be posted on this page.\n\nContact\nPlease use the support page if you have questions about this policy.', support: 'Feedback\n\nPlease use the form below to send comments about the app.\n\nFrequently asked questions\n\nQ. The product name does not appear after scanning a barcode.\nA. Product information is retrieved from Open Food Facts, an open database registered by volunteers around the world. Japanese products are less widely registered, so information may not appear. In that case, enter the name manually.\n\nQ. I do not receive push notifications.\nA. Notifications are local notifications handled on your device. Check that notifications are allowed in iOS Settings → Notifications → Expiry Date Manager.\n\nQ. Cloud backup does not appear.\nA. Check that iCloud Drive is enabled in iOS Settings → Apple ID → iCloud → iCloud Drive.\n\nQ. I changed devices and lost my license.\nA. Open License in the app settings and choose Purchase or Restore License. iCloud access may be required.', disclaimer: 'Features, specifications, and availability may change or end without notice. The developer accepts no responsibility for any damage caused by use of this app, including food disposal, health damage caused by consuming food, data loss, backup damage or loss, and any other direct or indirect damage. Product information retrieved through barcode scanning depends on Open Food Facts data and does not cover every product. The accuracy of retrieved information is not guaranteed.' },
    'external-touch-display': { features: ['Overview\n■ Use iOS and Android tablets and smartphones as external displays for a PC\n■ Extend or mirror your desktop\n■ Touch-control your PC directly from the tablet\n■ Supports full-screen display and screen rotation', 'Use cases\n■ Ideal for meetings, presentations, work monitors, and control panels', 'Features\n■ Easy connection with automatic receiver detection\n■ Supports up to eight connected tablets*\n■ Wi-Fi connection\n■ Low-latency video streaming with WebRTC\n■ Multilingual UI including Japanese and English\n■ No advertising (in-app purchases and subscriptions available)\n\n*The actual number depends on your hardware environment.', 'System requirements\n1. Install the driver app (eXTDDriver) for your PC from the Windows Store.\n2. Download the mobile or tablet app from the App Store or Google Play.'], privacy: 'Last updated: April 16, 2026\n\nInformation collected\nThis app does not collect or send users’ personal information.\n\nWhere data is stored\nData used by the app is stored on your device. The developer cannot access it.\n\nCommunication with external services\nThe app communicates with the connected PC and app stores only when necessary to provide its features.\n\nAdvertising and analytics\nThis app does not use advertising or analytics SDKs.\n\nChanges to this privacy policy\nThis policy may change without notice. Changes will be posted on this page.\n\nContact\nPlease use the support page if you have questions about this policy.', support: 'Feedback\n\nPlease use the form below to send comments about the app.\n\nFrequently asked questions\n\nQ. I do not know how to exit full-screen mode.\nA. On Android, show the navigation bar by swiping up from the bottom of the screen, then tap the Back button. On iOS, touch and hold the bottom of the screen for 3–4 seconds, then tap the Back button that appears.\n\nQ. I cannot configure a virtual desktop correctly across multiple devices.\nA. Starting the apps on all devices at once can occasionally cause confusion. Try starting them one at a time.\n\nQ. I cannot connect, reconnect, or find the PC receiver app.\nA. Make sure the eXTDDriver app is running on a PC on the same network.\nA. Restart the receiver app in the system tray.\nA. Add the app to your security software exclusions if necessary.\nA. Check your router settings.\n\nQ. I changed devices and lost my license.\nA. Open License in the app settings and choose Purchase or Restore License.', disclaimer: 'Features, specifications, and availability may change or end without notice. The developer accepts no responsibility for any damage caused by use of this app, including, but not limited to, damage caused by specifications, quality, or operational defects.' },
    antiswipe: { features: ['Block unintended swipes', 'Unlock instantly when needed', 'A design that supports focused moments'], privacy: 'The privacy policy will be replaced with the official policy published on Google Sites.' },
  },
  fr: {
    'expiry-date-manager': { features: ['Enregistrez vos produits par code-barres\n■ Les produits présents dans Open Food Facts reçoivent automatiquement leur image et leur nom.\n■ Même lorsqu’un produit n’est pas référencé, vous pouvez facilement l’ajouter vous-même à l’application.', 'Saisissez rapidement les dates à la voix\n■ Dites simplement « 31 décembre » pour enregistrer une date limite. Pratique même lorsque vous avez les deux mains occupées.', 'Recevez une notification locale avant l’expiration\n■ Choisissez combien de jours à l’avance vous souhaitez être averti et modifiez librement l’heure de notification. Évitez les oublis et réduisez le gaspillage alimentaire.\n※ Les notifications sont entièrement gérées sur votre appareil et rien n’est envoyé à un serveur externe.', 'Sauvegardez vos données\n■ Sauvegardez votre liste de dates, votre base de données et vos miniatures sur Google Drive ou iCloud Drive. Restaurez rapidement vos données après un changement d’appareil.', 'À qui s’adresse l’application ?\n■ Aux personnes qui veulent gérer les aliments du réfrigérateur et des placards\n■ Aux personnes attentives à la réduction du gaspillage alimentaire\n■ Aux familles qui souhaitent gérer leurs ingrédients ensemble'], privacy: 'Dernière mise à jour : 16 avril 2026\n\nInformations collectées\nCette application ne collecte ni n’envoie d’informations personnelles des utilisateurs.\n\nLieu de stockage des données\nLes dates limites, noms et images sont stockés uniquement sur votre appareil et dans votre propre espace iCloud. Le développeur ne peut pas accéder à ces données.\n\nCommunication avec des services externes\nLors d’un scan, le numéro du code-barres est envoyé à l’API Open Food Facts (https://world.openfoodfacts.org/) afin d’obtenir le nom et l’image du produit. Aucune autre information n’est envoyée.\n\nNotifications\nLes notifications de cette application sont des notifications locales gérées sur votre appareil. Rien n’est envoyé à un serveur externe.\n\nPublicité, analyse et rapports de plantage\nCette application n’utilise aucun SDK publicitaire, analytique ou de rapport de plantage.\n\nModifications de cette politique\nCette politique peut être modifiée sans préavis. Les changements seront publiés sur cette page.\n\nContact\nPour toute question concernant cette politique, utilisez la page d’assistance.', support: 'Retour\n\nUtilisez le formulaire ci-dessous pour nous envoyer vos commentaires.\n\nQuestions fréquentes\n\nQ. Le nom du produit ne s’affiche pas après le scan d’un code-barres.\nA. Les informations proviennent d’Open Food Facts, une base ouverte alimentée par des bénévoles du monde entier. Les produits japonais y sont moins nombreux ; les informations peuvent donc manquer. Dans ce cas, saisissez le nom manuellement.\n\nQ. Je ne reçois pas de notifications.\nA. Ce sont des notifications locales gérées sur votre appareil. Vérifiez qu’elles sont autorisées dans Réglages iOS → Notifications → Expiry Date Manager.\n\nQ. La sauvegarde cloud n’apparaît pas.\nA. Vérifiez que iCloud Drive est activé dans Réglages iOS → Identifiant Apple → iCloud → iCloud Drive.\n\nQ. J’ai changé d’appareil et perdu ma licence.\nA. Ouvrez Licence dans les réglages de l’application, puis choisissez Acheter ou restaurer la licence. L’accès à iCloud peut être nécessaire.', disclaimer: 'Les fonctionnalités, spécifications et la disponibilité peuvent changer ou prendre fin sans préavis. Le développeur décline toute responsabilité pour les dommages liés à l’utilisation de cette application, notamment la mise au rebut d’aliments, les problèmes de santé liés à leur consommation, la perte ou l’endommagement de données ou de sauvegardes, ainsi que tout autre dommage direct ou indirect. Les informations obtenues par scan dépendent des données d’Open Food Facts et ne couvrent pas tous les produits. Leur exactitude n’est pas garantie.' },
    'external-touch-display': { features: ['Présentation\n■ Utilisez des tablettes et smartphones iOS ou Android comme écrans externes pour votre PC\n■ Étendez ou dupliquez votre bureau\n■ Contrôlez directement votre PC depuis la tablette\n■ Compatible avec le plein écran et la rotation de l’écran', 'Cas d’utilisation\n■ Idéal pour les réunions, présentations, écrans de travail et panneaux de contrôle', 'Fonctionnalités\n■ Connexion simple avec détection automatique du récepteur\n■ Jusqu’à huit tablettes connectées*\n■ Connexion Wi-Fi\n■ Streaming vidéo à faible latence grâce à WebRTC\n■ Interface multilingue, notamment en japonais et en anglais\n■ Sans publicité (achats intégrés et abonnements disponibles)\n\n*Le nombre réel dépend de votre environnement matériel.', 'Configuration requise\n1. Installez l’application pilote eXTDDriver pour votre PC depuis le Windows Store.\n2. Téléchargez l’application mobile ou tablette depuis l’App Store ou Google Play.'], privacy: 'Dernière mise à jour : 16 avril 2026\n\nInformations collectées\nCette application ne collecte ni n’envoie d’informations personnelles des utilisateurs.\n\nLieu de stockage des données\nLes données utilisées par l’application restent sur votre appareil. Le développeur ne peut pas y accéder.\n\nCommunication avec des services externes\nL’application communique avec le PC connecté et les boutiques d’applications uniquement lorsque cela est nécessaire à ses fonctionnalités.\n\nPublicité et analyse\nCette application n’utilise aucun SDK publicitaire ou analytique.\n\nModifications de cette politique\nCette politique peut être modifiée sans préavis. Les changements seront publiés sur cette page.\n\nContact\nPour toute question concernant cette politique, utilisez la page d’assistance.', support: 'Retour\n\nUtilisez le formulaire ci-dessous pour nous envoyer vos commentaires.\n\nQuestions fréquentes\n\nQ. Je ne sais pas comment quitter le mode plein écran.\nA. Sur Android, affichez la barre de navigation en faisant glisser votre doigt depuis le bas de l’écran, puis appuyez sur Retour. Sur iOS, maintenez le bas de l’écran enfoncé pendant 3 à 4 secondes, puis appuyez sur le bouton Retour qui apparaît.\n\nQ. Je n’arrive pas à configurer correctement un bureau virtuel sur plusieurs appareils.\nA. Le démarrage simultané des applications peut parfois créer des conflits. Essayez de les démarrer une par une.\n\nQ. Je ne peux pas me connecter, me reconnecter ou trouver l’application récepteur du PC.\nA. Vérifiez que l’application eXTDDriver est lancée sur un PC du même réseau.\nA. Redémarrez l’application récepteur depuis la zone de notification.\nA. Ajoutez l’application aux exclusions de votre logiciel de sécurité si nécessaire.\nA. Vérifiez les réglages de votre routeur.\n\nQ. J’ai changé d’appareil et perdu ma licence.\nA. Ouvrez Licence dans les réglages de l’application, puis choisissez Acheter ou restaurer la licence.', disclaimer: 'Les fonctionnalités, spécifications et la disponibilité peuvent changer ou prendre fin sans préavis. Le développeur décline toute responsabilité pour les dommages liés aux spécifications, à la qualité ou aux défauts de fonctionnement, sans que cette liste soit limitative.' },
    antiswipe: { features: ['Bloquez les glissements involontaires', 'Déverrouillez instantanément si nécessaire', 'Une conception pensée pour la concentration'], privacy: 'La politique de confidentialité sera remplacée par la politique officielle publiée sur Google Sites.' },
  },
}
