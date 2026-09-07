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
    support: 'フィードバック\n\nアプリに関するコメントは下記のフォームよりお送りください。\n\nよくある質問\n\nQ.  フルスクリーンの終了方法がわからない。\nA.  Androidは画面下部を下から上にスワイプするなどしてナビゲーションバーを表示させ、戻るボタンをタップ。iOSは画面下部を３～４秒間タップし続けて表示される戻るボタンをタップ。\n\nQ. 複数の端末で、うまく仮想デスクトップが構成できない。\nA.  端末側のアプリを一斉に起動すると時々混乱することがあります。順番に起動してみてください。\n\nQ,  PCのレシーバアプリに接続/再接続できない、または見つからない\nA.  同じネットワーク上のPC上でドライバアプリ(eXTDDriver)が起動していることを確認してください。\nA.  レシーバアプリ（タスクトレイのアプリ）を再起動してください。\nA.  常駐しているセキュリティソフトに除外されている場合はセキュリティソフトに登録してください。\nA.  ルーターの設定などをご確認ください。\n\nQ. 機種変更をしたらライセンスがなくなりました\nA. このアプリの設定から「ライセンス」にある「購入またはライセンスの復元」で復元できます。',
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
const addDriverDownloadNote = (support: string) => {
  const driverLabel = currentLanguage === 'ja' ? 'ドライバアプリ' : currentLanguage === 'en' ? 'driver app' : currentLanguage === 'fr' ? 'application pilote' : 'driver app'
  const receiverLabel = currentLanguage === 'ja' ? 'レシーバアプリ' : currentLanguage === 'en' ? 'receiver app' : currentLanguage === 'fr' ? 'application réceptrice' : 'receiver app'
  const driverPattern = new RegExp(`${driverLabel}(※)?(?=.?eXTDDriver)`, 'i')
  const receiverPattern = new RegExp(`${receiverLabel}(※)?`, 'gi')
  const note = `<span class="support-download-note">※<a class="support-download-link" href="https://github.com/hamster-works/eXTD" target="_blank" rel="noreferrer">${downloadPageLabels[currentLanguage]}</a></span>`
  let updated = support.replace(driverPattern, `${driverLabel}※`)
  updated = updated.replace(/(eXTDDriver\s+app)(※)?/gi, '$1※')
  updated = updated.replace(receiverPattern, `${receiverLabel}※`)
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
    if (localized.support) localized.support = addDriverDownloadNote(localized.support)
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
  const supportHtml = product.support ? product.support.split('\n\n').map((paragraph) => `<p>${paragraph}</p>`).join('') : ''
  const disclaimerHtml = product.disclaimer ? `<section class="disclaimer"><p class="eyebrow">DISCLAIMER</p><h2>${currentCopy.disclaimerTitle}</h2><p>${product.disclaimer}</p></section>` : ''
  const formUrl = product.formUrl ?? CONTACT_FORM_URL
  return `${header()}<main class="product-page"><a class="back-link" href="#/">${currentCopy.backToProducts}</a><section class="product-hero accent-${product.accent}"><div><p class="eyebrow">${currentCopy.productEyebrow} / ${product.slug.toUpperCase()}</p><div class="product-title">${product.icon ? `<img src="${product.icon}" alt="${product.name}">` : ''}<h1>${product.name}</h1></div><p class="product-label">${product.label}</p><p class="hero-lede">${product.description}</p>${storeLinks}</div><div class="product-image"><img src="${product.image}" alt="${product.name}"></div></section><section class="detail-grid"><div><p class="eyebrow">${currentCopy.featuresEyebrow}</p><h2>${product.name}${currentCopy.featuresTitle}</h2>${galleryHtml}</div><ul class="feature-list">${product.features.map((feature, index) => `<li><span>${String(index + 1).padStart(2, '0')}</span><strong>${feature}</strong><i aria-hidden="true">↗</i></li>`).join('')}</ul></section>${product.support ? `<section class="support"><div><p class="eyebrow">${currentCopy.supportEyebrow}</p><h2>${currentCopy.supportTitle}</h2></div><div class="support-copy">${supportHtml}<a class="button button-dark" href="${formUrl}" target="_blank" rel="noreferrer">${currentCopy.feedbackButton}</a></div></section>` : ''}${disclaimerHtml}<section class="privacy"><div><p class="eyebrow">${currentCopy.privacyEyebrow}</p><h2>${currentCopy.privacyTitle}</h2></div><div class="privacy-copy">${privacyHtml}</div></section><section class="contact-strip"><div><p class="eyebrow">${currentCopy.questionsEyebrow}</p><h2>${currentCopy.productContactTitle}</h2></div><a class="button button-light" href="${formUrl}" target="_blank" rel="noreferrer">${currentCopy.formButton} <span aria-hidden="true">↗</span></a></section></main>${footer()}`
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
  const slug = window.location.hash.match(/^#\/product\/(.+)$/)?.[1]
  const product = products.find((item) => item.slug === slug || (slug === 'external-touch-screen' && item.slug === 'external-touch-display'))
  app.innerHTML = product ? productPage(product) : home()
  initGallery()
  bindLanguageSelector()
  window.scrollTo({ top: 0, behavior: 'instant' })
}

window.addEventListener('hashchange', render)
render()
