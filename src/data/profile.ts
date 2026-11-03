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
  tagline: 'Ruby を中心にしたソフトウェアエンジニア',
  lead: 'お仕事のご依頼・ご相談をお受けしています',
  bio: [
    'Ruby / Rails を中心に、Web サービスのバックエンド開発に 18 年携わってきました。',
    'DeNA ではゲームプラットフォームの開発と開発者体験の改善、KAIZEN platform では顧客サイトの改善サービス、Shippio では国際物流プラットフォームのバックエンドを担当しました。現在はタイミーで、SRE の実践を組織に広げるチームにいます。',
    '共著に『パーフェクトRuby』(技術評論社)があります。',
  ],
  areas: [
    {
      title: '設計・技術選定',
      detail: 'システム構成やモジュール分割、データ設計、技術選定。設計レビューや壁打ちの相手としても',
    },
    {
      title: 'パフォーマンス改善',
      detail: '遅い画面やバッチ、データベースのボトルネックを調べて改善します。計測の仕組みづくりから',
    },
    {
      title: 'リファクタリング・コード改善',
      detail: '既存コードの見通しをよくし、変更しやすくします。テストの整備やコードレビューも',
    },
    {
      title: 'Ruby / Rails での開発',
      detail: '新規開発から既存サービスの機能追加・保守まで。gem やツールづくり、Ruby / Rails のバージョンアップにも対応します',
    },
    {
      title: 'AI agent の活用支援',
      detail: '開発への AI agent の取り入れ方の相談から、ワークフローづくりや仕組みの実装まで、一緒に進めます',
    },
  ],
  careers: [
    {
      company: 'タイミー',
      from: '2024-10',
      to: null,
      role: '開発と運用の基盤づくりと、SRE の考え方を組織に広げるチームに所属。開発チームが抱える技術的な課題の根っこを探り、解決に取り組む。',
    },
    {
      company: 'Shippio',
      from: '2022-06',
      to: '2024-09',
      role: '国際物流プラットフォームのバックエンド開発を担当した。プロダクト開発組織の共通語は英語。',
    },
    {
      company: 'KAIZEN platform',
      from: '2015-11',
      to: '2022-05',
      role: '顧客サイトのパフォーマンス改善やコンバージョン改善を提供するサービスを開発した。',
    },
    {
      company: 'DeNA',
      from: '2011-04',
      to: '2015-10',
      role: 'ゲームプラットフォームの SNS 機能の開発、開発者体験の向上、新規サービスの開発に携わった。',
    },
    {
      company: 'NTTレゾナント',
      from: '2008-09',
      to: '2011-03',
      role: 'ポータルサイトの開発に携わった。使われ方を分析し、自分で考えてつくる進め方を身につけた。',
    },
  ] satisfies Career[],
  contact: {
    email: 'ryopeko@gmail.com',
    x: 'https://x.com/ryopeko',
    github: 'https://github.com/ryopeko',
  },
};
