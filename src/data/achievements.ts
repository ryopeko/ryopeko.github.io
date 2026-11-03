// 実績のデータ(*.json)に型を付けて、ページで使う形にまとめる
// JSON は手で直してよい。日付はどれも YYYY-MM-DD で、新しい順に並べる

import blogData from './blog.json';
import booksData from './books.json';
import eventsData from './events.json';
import ossData from './oss.json';
import talksData from './talks.json';

export const blogSites = {
  hatena: { label: 'はてなブログ', url: 'https://ryopeko.hatenablog.com/' },
  shippio: { label: 'Shippio Tech Blog', url: 'https://techblog.shippio.io/' },
  qiita: { label: 'Qiita', url: 'https://qiita.com/ryopeko' },
} as const;

export const talkServices = {
  speakerdeck: { label: 'Speaker Deck', url: 'https://speakerdeck.com/ryopeko' },
  slideshare: { label: 'SlideShare', url: 'https://www.slideshare.net/ryopeko' },
} as const;

export const eventRoles = {
  organizer: '主催',
  speaker: '登壇',
} as const;

type Dated = { title: string; url: string; date: string | null };

/** image は記事の og:image の URL */
export type Post = Dated & { site: keyof typeof blogSites; image: string };
/** image は表紙のスライドの画像の URL(Speaker Deck の og:image、SlideShare のサムネイル) */
export type Talk = Dated & { service: keyof typeof talkServices; image: string };
export type Event = Dated & { roles: (keyof typeof eventRoles)[] };
/** image は書影の URL */
export type Book = Dated & { publisher: string; note?: string; image: string };
export type Repository = { name: string; url: string; description: string; stars: number };

export const posts = blogData as Post[];
export const talks = talksData as Talk[];
export const events = eventsData as Event[];
export const books = booksData as Book[];

/** 他の人のリポジトリへのコントリビュート */
export const contributions = ossData.contributions as Repository[];

/** 自分で作ったリポジトリ */
export const ownRepositories = ossData.own as Repository[];
