
## 環境構築
```
git clone https://github.com/takuya-fukuda/next-hp.git
cd next-hp
npm install
npm run dev
```

## 開発情報
フレームワーク：Next.js
開発手法：CodexでAI駆動開発

## 工夫
```
コンポーネントをセクションごとにわけることで、各セクションに対して編集をかけるプロンプトとなる。
Next.jsやReact.jsのコンポーネント思考はバイブコーディングと相性がいい。
```

## 初回やったこと
```
AGENTS.mdでコードを作成
HP用の画像をpublicフォルダに配置
.gitignoreの作成を依頼
folder構成を修正。ヘッダーとフッターを共通レイアウトのlayout.tsxで定義
```


## ヘッダー適用プロンプト
```
ヘッダーのレイアウトは画像から作成。
なぜかカレンダーのアイコンが作れなかったので、下記を追加

1.ヘッダーのレイアウトを「header_sample.png」を参考に作成して
ロゴ画像と下記アイコンを手修正。
<i className="fa-regular fa-calendar-days mr-2 text-[90%]"></i>
2.ヘッダーのレイアウト修正があと一歩です。まずロゴは左寄せ。「ホームからご予約はこちらのブロック」は右寄せ。レスポンシブデザインはカレントディレクトリにある「header_responsivedesign_1.png」をベースにメニューボタンを押したら「header_responsivedesing_2.png」になるように
3.ヘッダーのレイアウトが完成に近いです。ヘッダーのロゴを左端に寄せてください。マージンかパディングが入っていて、寄ってないです。
4.ヘッダーのレイアウトが完成に近いです。「ホームからお問い合わせ」の選択部分を、「ご予約はこちら」と同じdivブロックにして、右寄せにして。
```

## メニューページ適用プロンプト
```
メニューページを作成しましょう。「/menu」を追加したいので、approuterに「menu」フォルダを追加。
共通レイアウトは(main)のものを利用してください。またcommponentsフォルダに新たにmenuフォルダを作成し、
「MenuSection.tsx」を作成し、そこにhttps://hairstagerebirth.com/menu/のヘッダーフッター以外の内容をすべて反映してください。
```

## 店舗案内ページプロンプト
```
店舗案内のページを作成しましょう。「/shop」を追加したいので、approuterに「/shop」フォルダを追加。
共通レイアウトは(main)のものを利用してください。またcomponentsフォルダに新たにshopフォルダを作成し、
「ShopHeading.tsx」「Profile.tsx」「Access.tsx」の三つのファイルで作成してください。
「https://hairstagerebirth.com/shop/」を参照し、「ShopHeading.tsx」には、店舗案内と書かれたパンくずリストまでを、
「Profile.tsx」にはPROFILEの記載部分を、「Access.tsx」にはACCESSのマップの部分を真似してすべて同じUI（CSSレイアウト）で書いてください。
```

## スタッフ紹介ページプロンプト
```
スタッフ紹介のページを作成しましょう。「/staff」を追加したいので、approuterに「/staff」フォルダを追加。
共通レイアウトは(main)のものを利用してください。またcomponentsフォルダに新たにstaffフォルダを作成し、
「StaffHeading.tsx」「Profile.tsx」の2つのファイルで作成してください。
「https://hairstagerebirth.com/staff/」を参照し、「StaffHeading.tsx」には、スタッフ紹介と書かれたパンくずリストまでを（レイアウトはShopHeading.tsxをまねてもいい）、
「Profile.tsx」には残りの紹介部分を同じCSSレイアウトで書いてください。スタッフ画像はあらかじめ「public/images/prf_img.jpg」に格納しているのでそれを使ってください。
```

