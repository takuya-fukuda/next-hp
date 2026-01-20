## タスク
https://hairstagerebirth.com/

上記HPのNext.jsへの改修

## Next.jsコーディング時の制約
・フレームワークはNext.jsであること
・言語はTypeScriptであること
・HPは全く同じデザインであること
・AWS S3による静的WEBサイトホスティングによるデプロイを検討しているため、
  クライアントコンポーネントのみで作成をしてください。
・HPで扱っている画像の素材はもってないとおもうので、imgタグだけ作っておいて、指定の名前の画像をどっかのフォルダに入れれば表示できるようにして。
・CSSはTailwind.cssで記載をしてください
・AppRouterを使用してください。
・HPのメインページのコンポーネントの作り方は下記でお願いします。
app/(main)/page.tsx
components/home/HomeFirstSection.tsx
components/home/HomeSecondSection.tsx
components/home/HomeThirdSection.tsx
components/home/HomeFourthSection.tsx
components/home/HomeFiveSection.tsx
components/home/HomeSixSection.tsx
・HPのヘッダーとフッターはlayout.tsxに定義