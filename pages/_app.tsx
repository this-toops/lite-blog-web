
import 'tdesign-react/dist/tdesign.css'; // 全局引入tdesign所有组件样式代码
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

