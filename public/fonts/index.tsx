import localFont from 'next/font/local';
export const jetBrainsMonoFont = localFont({
    src: [
      {
        path: './JetBrainsMono-Thin.woff2',
        weight: '100',
        style: 'normal',
      },
      {
        path: './JetBrainsMono-ExtraLight.woff2',
        weight: '200',
        style: 'normal',
      },
      {
        path: './JetBrainsMono-Light.woff2',
        weight: '300',
        style: 'normal',
      },
      {
        path: './JetBrainsMono-Regular.woff2',
        weight: '400',
        style: 'normal',
      },
      {
        path: './JetBrainsMono-Medium.woff2',
        weight: '500',
        style: 'normal',
      },
      {
        path: './JetBrainsMono-SemiBold.woff2',
        weight: '600',
        style: 'normal',
      },
      {
        path: './JetBrainsMono-Bold.woff2',
        weight: '700',
        style: 'normal',
      },
      {
        path: './JetBrainsMono-ExtraBold.woff2',
        weight: '800',
        style: 'normal',
      },
    ],
    variable: '--font-jet-brains-mono'
  })
  