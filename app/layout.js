import './_styles/index.scss'
import './app.scss'
import Script from 'next/script'
import Header from './_components/Header'
import Footer from './_components/Footer'

import { Nunito_Sans } from 'next/font/google'


const nunitoSans = Nunito_Sans({
	weight: '400',
	subsets: ['latin'],
})


export const metadata = {
	title: 'HAYAT',
	description: 'Everything related to the Hayat music label',
}


export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<Script src="https://kit.fontawesome.com/66b1e2f1a9.js" crossorigin="anonymous" />
			<body className={nunitoSans.className}>
				<div id="app">
					<Header />
					{children}
					<Footer />
				</div>
			</body>
		</html>
	)
}
