# ryopeko.github.io

関口亮一(@ryopeko)のポートフォリオサイト。[Astro](https://astro.build/) で作り、GitHub Pages(https://ryopeko.github.io/)で公開する。

## 開発

```sh
pnpm install
pnpm dev      # http://localhost:4321/
pnpm build    # dist/ に出力
pnpm preview  # build 結果の確認
```

Node は `.node-version`、pnpm は `package.json` の `packageManager` のバージョンを使う。

## 内容の編集

サイトに載せる内容は `src/data/profile.ts` にまとめている。

- `contact.email` は仮の値(`you@example.com`)。本人のアドレスに差し替える
- `bio`(プロフィール文)は仮の文。本人が直す
- `achievements`(実績)は別の作業で取り込む

## deploy

`.github/workflows/deploy.yml` を手動実行(Actions > Deploy to GitHub Pages > Run workflow)すると、build して GitHub Pages に deploy する。公開のタイミングを本人が決めるため、当面は main への push では deploy しない。

初回だけ、リポジトリの Settings > Pages > Build and deployment > Source を「GitHub Actions」にする。

## 依存

直接の依存は `astro` だけ。追加するときは理由を説明できるものに限る。

- `pnpm-workspace.yaml` で、公開から 7 日経っていないバージョンを取り込まない、install 時のスクリプトを既定で無効にする、などの設定をしている
- workflow の action はすべて commit SHA で固定している
