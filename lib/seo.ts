export const seo = {
  title: 'YJ Personal Website',
  description:
    'I\'m Yuzhao Zhang, aka YJ. Welcome to my personal website! Here I share my thoughts, experiences, and projects.',
  url: new URL(
    process.env.NODE_ENV === 'production'
      ? 'https://yuzhaoyj.com'
      : 'http://localhost:3000'
  ),
} as const
