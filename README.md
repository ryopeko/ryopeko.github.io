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

| ファイル | 内容 |
|---|---|
| `src/data/profile.ts` | プロフィール、受けたい領域、職歴と各社の役割、連絡先 |
| `src/data/talks.json` | 登壇のスライド(`service` は `speakerdeck` / `slideshare`、`image` は表紙の画像の URL) |
| `src/data/blog.json` | ブログの記事(`site` は `hatena` / `shippio` / `qiita`、`image` は記事の og:image の URL) |
| `src/data/events.json` | 主催・登壇したイベント(`roles` は `organizer` / `speaker`) |
| `src/data/oss.json` | コントリビュートしたリポジトリ(`contributions`)と自分で作ったもの(`own`) |
| `src/data/books.json` | 書籍(`image` は書影の URL) |
| `src/data/achievements.ts` | 実績の JSON に型を付け、ページで使う形にまとめる |

- JSON は手で直してよい。日付は `YYYY-MM-DD` で、新しい順に並べる
- `site` / `service` / `roles` に新しい値を足すときは、`achievements.ts` の表示名も足す
- 画像はリポジトリに置かず、外部の URL を直接参照する。画像が切れたら URL を差し替える

## deploy

`.github/workflows/deploy.yml` を手動実行(Actions > Deploy to GitHub Pages > Run workflow)すると、build して GitHub Pages に deploy する。公開のタイミングを本人が決めるため、当面は main への push では deploy しない。

初回だけ、リポジトリの Settings > Pages > Build and deployment > Source を「GitHub Actions」にする。

## 依存

直接の依存は `astro` だけ。追加するときは理由を説明できるものに限る。

- `pnpm-workspace.yaml` で、公開から 7 日経っていないバージョンを取り込まない、install 時のスクリプトを既定で無効にする、などの設定をしている
- workflow の action はすべて commit SHA で固定している
