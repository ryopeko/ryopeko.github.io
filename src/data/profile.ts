// サイトに載せる内容の正本。実績は achievements.ts と *.json

export type Career = {
  company: string;
  /** YYYY-MM */
  from: string;
  /** YYYY-MM。在籍中は null */
  to: string | null;
  /** 役割の説明 */
  role: string;
};

export const profile = {
  name: '関口 亮一',
  handle: 'ryopeko',
  tagline: 'Ruby と開発組織づくりのソフトウェアエンジニア',
  lead: '副業の相談を受け付けています',
  // TODO: 仮の文。あとで本人が直す
  bio: [
    'Ruby / Rails を中心に、Web サービスのバックエンド開発に 15 年以上携わってきました。',
    'DeNA ではゲームプラットフォームの開発と開発者体験の改善、KAIZEN platform では顧客サイトの改善サービス、Shippio では国際物流プラットフォームのバックエンドを担当しました。現在はタイミーで、SRE の実践を組織に広げるチームにいます。',
    '共著に『パーフェクトRuby』(技術評論社)があります。',
  ],
  areas: [
    { title: 'Ruby の実装', detail: 'Ruby / Rails のアプリケーション開発、gem の開発' },
    { title: 'AI agent の導入支援', detail: 'チームへの AI agent の導入と、使いこなすためのイネーブルメント' },
    { title: 'アーキテクチャ設計', detail: 'システム構成やモジュール分割の設計、技術選定' },
    { title: 'パフォーマンス改善', detail: 'アプリケーションやデータベースのボトルネックの調査と改善' },
    { title: 'リファクタリング', detail: '既存コードの見通しをよくし、変更しやすくする' },
  ],
  // TODO: role は入社インタビューの業務内容をもとにした下書き。あとで本人が直す
  careers: [
    {
      company: 'タイミー',
      from: '2024-10',
      to: null,
      role: '持続可能な開発と運用の基盤づくりや、SRE の考え方を組織に根付かせるチームで、開発チームが抱える技術的な課題の解決に取り組んでいます。',
    },
    {
      company: 'Shippio',
      from: '2022-06',
      to: '2024-09',
      role: '国際物流プラットフォームのバックエンド開発を担当しました。英語でコミュニケーションを取るプロダクト開発組織で働きました。',
    },
    {
      company: 'KAIZEN platform',
      from: '2015-11',
      to: '2022-05',
      role: '顧客サイトのパフォーマンス改善やコンバージョン改善を提供するサービスの開発を担当しました。',
    },
    {
      company: 'DeNA',
      from: '2011-04',
      to: '2015-10',
      role: 'ゲームプラットフォームの SNS 機能の開発、開発者体験の向上、新規サービスの開発に携わりました。',
    },
    {
      company: 'NTTレゾナント',
      from: '2008-09',
      to: '2011-03',
      role: 'ポータルサイトの開発に携わり、使われ方を分析して自分で考えてつくる進め方を身につけました。',
    },
  ] satisfies Career[],
  contact: {
    // TODO: 本人の Gmail アドレスに差し替える
    email: 'you@example.com',
    x: 'https://x.com/ryopeko',
    github: 'https://github.com/ryopeko',
  },
};
