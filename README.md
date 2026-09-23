# やさい畑（熊本県玉名郡南関町）直売所サイト

熊本県玉名郡南関町小原にある農産物直売所「やさい畑」の紹介サイトです。
静的な HTML / CSS / JavaScript のみで構成しており、フォルダごとサーバーに置けばそのまま公開できます。

- 作成日: 2026-09-23
- 公開 URL（GitHub Pages）: https://sugaharahiroaki.github.io/yasaibatake-site/
- リポジトリ: https://github.com/Sugaharahiroaki/yasaibatake-site （main ブランチに push すると数分で公開サイトが更新されます）
- 店名の表記: 熊本県の直売所データベース・Yahoo!マップ・南関町の資料はいずれも **ひらがなの「やさい畑」** で登録されていたため、サイト内もこの表記に統一しています（「野菜畑」に変える場合は各ページの文言を置換してください）。

## ページ構成

| ファイル | 内容 |
| --- | --- |
| `index.html` | トップ。ヒーロー（書のタイトル）／やさい畑のこと／書のステートメント／旬のたより（季節タブ）／農家の思い（抜粋）／お店のこと（抜粋）／アクセス・地図 |
| `farmers.html` | 農家の思い。6人分の「書」のメッセージと語り |
| `shop.html` | お店案内。取り扱い品／店内ギャラリー／設備／ご来店の前に／営業案内・地図 |
| `css/style.css` | スタイル一式 |
| `js/main.js` | スクロール演出・季節タブ・写真の自動表示など |
| `images/` | 写真（現在は Pexels のイメージ写真。実際の写真に差し替え可） |

## 写真の入れ方

現在は、商用利用可・帰属表示不要の [Pexels](https://www.pexels.com/ja-jp/license/) のイメージ写真を仮で入れています（出典は下の一覧）。
**`images/` の同じファイル名で上書きするだけで、実際の写真に差し替わります**（HTMLの編集は不要です）。ファイルを削除すると点線枠の「写真が入ります」表示に戻ります。

| ファイル名 | 使う場所 | 推奨の向き・比率 |
| --- | --- | --- |
| `hero-01.jpg` | トップのヒーロー背景 | 横長（1920×1080 程度）。畑の風景や店舗外観 |
| `about-01.jpg` | トップ「やさい畑のこと」メイン | 横 4:3。店内に並ぶ野菜 |
| `about-02.jpg` | 同・小さい写真 | 正方形。農家さんが持ち込む様子など |
| `season-spring.jpg` / `season-summer.jpg` / `season-autumn.jpg` / `season-winter.jpg` | 旬のたより（季節ごと） | 横 4:3 |
| `farmer-01.jpg` 〜 `farmer-06.jpg` | 農家の思い（トップの抜粋・farmers.html 共通） | 縦でも横でも可（トップでは縦 3:4、farmers.html では横 4:3 に自動トリミング） |
| `item-vegetables.jpg` / `item-rice.jpg` / `item-seedlings.jpg` / `item-processed.jpg` / `item-bread.jpg` / `item-eatin.jpg` | 取り扱い品（トップ・shop.html 共通） | 横 4:3 |
| `shop-exterior.jpg` | shop.html 上部の外観 | 横長 16:9 |
| `shop-01.jpg` 〜 `shop-06.jpg` | shop.html 店内ギャラリー | 自由（自動トリミング） |
| `eatin-01.jpg` | shop.html 設備セクション | 横 4:3 |

- ファイル名が違う写真を使いたいときは、HTML 内の `<img src="images/…">` を書き換えてください。
- `.jpg` 以外（`.png` / `.webp`）を使う場合も、`src` の拡張子を合わせれば同じように表示されます。

### 仮写真の出典（Pexels）

Pexels License（商用利用可・帰属表示不要・改変可）。フッターに「写真：Pexels（イメージ写真です）」と記載しています。
実店舗の写真ではないため、正式公開前に実際の写真へ差し替えることを推奨します。

| ファイル | 出典 | 撮影者 |
| --- | --- | --- |
| `hero-01.jpg` | [pexels.com/photo/35196015](https://www.pexels.com/photo/35196015/) | Macrolingo LLC |
| `about-01.jpg` | [pexels.com/photo/19891021](https://www.pexels.com/photo/19891021/) | Markus Winkler |
| `about-02.jpg` | [pexels.com/photo/5529591](https://www.pexels.com/photo/5529591/) | Zen Chung |
| `season-spring.jpg` | [pexels.com/photo/33003603](https://www.pexels.com/photo/33003603/) | Eren Alkis |
| `season-summer.jpg` | [pexels.com/photo/5451692](https://www.pexels.com/photo/5451692/) | Nicolae Holbea |
| `season-autumn.jpg` | [pexels.com/photo/13594137](https://www.pexels.com/photo/13594137/) | Mitsuki Sawa |
| `season-winter.jpg` | [pexels.com/photo/19689767](https://www.pexels.com/photo/19689767/) | Nishantan Eja |
| `farmer-01.jpg` | [pexels.com/photo/16824439](https://www.pexels.com/photo/16824439/) | chente8888 |
| `farmer-02.jpg` | [pexels.com/photo/36108066](https://www.pexels.com/photo/36108066/) | Alex Grandidier |
| `farmer-03.jpg` | [pexels.com/photo/35113272](https://www.pexels.com/photo/35113272/) | Photo55 |
| `farmer-04.jpg` | [pexels.com/photo/6877065](https://www.pexels.com/photo/6877065/) | — |
| `farmer-05.jpg` | [pexels.com/photo/1268101](https://www.pexels.com/photo/1268101/) | Markus Spiske |
| `farmer-06.jpg` | [pexels.com/photo/28102059](https://www.pexels.com/photo/28102059/) | Gio Spigo |
| `item-vegetables.jpg` | [pexels.com/photo/18816215](https://www.pexels.com/photo/18816215/) | Cheng |
| `item-rice.jpg` | [pexels.com/photo/28488757](https://www.pexels.com/photo/28488757/) | Himasha Weerasinghe |
| `item-seedlings.jpg` | [pexels.com/photo/12901832](https://www.pexels.com/photo/12901832/) | Prabahar Ravichandran |
| `item-processed.jpg` | [pexels.com/photo/14363801](https://www.pexels.com/photo/14363801/) | Busranur Aydin |
| `item-bread.jpg` | [pexels.com/photo/6966616](https://www.pexels.com/photo/6966616/) | Lucas Mendes |
| `item-eatin.jpg` | [pexels.com/photo/8854185](https://www.pexels.com/photo/8854185/) | introspectivedsgn |
| `shop-exterior.jpg` | [pexels.com/photo/26839569](https://www.pexels.com/photo/26839569/) | Sarah O'Shea |
| `shop-01.jpg` | [pexels.com/photo/9005793](https://www.pexels.com/photo/9005793/) | tea w1lemon |
| `shop-02.jpg` | [pexels.com/photo/12955819](https://www.pexels.com/photo/12955819/) | FreeStockPro |
| `shop-03.jpg` | [pexels.com/photo/38384704](https://www.pexels.com/photo/38384704/) | Surya Travel |
| `shop-04.jpg` | [pexels.com/photo/7728128](https://www.pexels.com/photo/7728128/) | Greta Hoffman |
| `shop-05.jpg` | [pexels.com/photo/38164887](https://www.pexels.com/photo/38164887/) | solyartphotos |
| `shop-06.jpg` | [pexels.com/photo/10428139](https://www.pexels.com/photo/10428139/) | Fatih Erden |
| `eatin-01.jpg` | [pexels.com/photo/5491049](https://www.pexels.com/photo/5491049/) | Rachel Claire |

## 掲載している店舗情報と出典

| 項目 | 内容 | 出典 |
| --- | --- | --- |
| 店名 | やさい畑 | 熊本県 地産地消サイト「県内の直売所・物産館」、Yahoo!マップ |
| 住所 | 〒861-0811 熊本県玉名郡南関町大字小原674-1 | Yahoo!マップ、南関町「取扱事業所一覧」PDF |
| 電話 | 0968-53-3399 | 同上 |
| 営業時間 | 9:00〜19:00 | Yahoo!マップ（閉店19:00）、じゃらん（開店9:00） |
| アクセス | 南関ICから車で約7分／九州産交バス「小原」バス停から徒歩約8分／南関から和水・山鹿方面へ向かう道沿い | Yahoo!マップ、じゃらん |
| 特徴 | 地元農家が集まって運営、野菜・果物・苗もの・米・加工品・パン、イートインコーナー、EV充電設備、休憩スペース、トイレ | 熊本県 地産地消サイト、じゃらん、Yahoo!マップの口コミ |
| 地図 | 緯度経度 33.04323923, 130.57010905（Googleマップ埋め込み・リンクに使用） | Yahoo!マップ |

## 確認・差し替えが必要な箇所

- **営業時間**: 9:00〜19:00 は地図サイトの情報です。実際の営業時間を店舗に確認してください（index.html / shop.html の表とフッター）。
- **定休日**: 情報が見つからなかったため「お電話にてご確認ください」としています。
- **農家の思い（farmers.html・トップの抜粋）**: 実際の生産者への取材ができていないため、**直売所に出荷する農家をイメージしたサンプル文**です。実際の生産者の言葉・お名前・写真に差し替えてください。肩書きは「米農家／南関町」のように匿名にしています。
- **旬の野菜の一覧**: 熊本県北部の一般的な旬をもとにした目安です。実際の出荷品目に合わせて調整してください。
- **取り扱い品の説明**: 「漬物や味噌、お菓子」などの具体例は一般的な直売所をイメージした例です。
- **駐車場の台数・支払い方法**: 情報がないため掲載していません。
- **写真**: すべて Pexels のイメージ写真（店舗・生産者本人ではありません）。実際の写真に差し替えてください。

## デザインメモ

- **書（しょ）の文字**: Google Fonts の筆文字フォント「Yuji Syuku」（見出し・メッセージ）と「Yuji Boku」（落款）を使用。スクロールすると墨で書くように左（縦書きは上）から現れます（`.sho-reveal`）。
- **落款（赤い印）**: `.rakkan` クラス。農家ごとの一文字や「南関 やさい畑」の印として使用。
- **和紙の質感**: `body::before` に SVG のノイズを重ねています。
- **スクロール演出**: フェード／スライド（`.reveal` 系）、写真のワイプ（`.reveal-img`）、墨の線と円相を描くアニメーション（`.draw`）、背景の大きな一文字のパララックス（`data-parallax`）、流れる野菜の名前（`.marquee`）。
- **きょうの日付と季節**: トップのヒーローに今日の日付を表示し、「旬のたより」のタブは現在の月の季節が自動で選ばれます。
- **色**: 生成り（和紙）`#f3ecdd`、墨 `#2b2723`、深緑 `#3d5a38`、若葉 `#8ba54c`、柿 `#c95f2c`、紅（落款）`#b5372b`。

## 動作について

- ブラウザで `index.html` を直接開くだけで確認できます（Google Fonts と地図の表示にはインターネット接続が必要です）。
- JavaScript が無効な環境でも、演出なしで全文が読めるようにしています。
- 「動きを減らす」設定（prefers-reduced-motion）が有効な場合は、アニメーションを止めて表示します。
