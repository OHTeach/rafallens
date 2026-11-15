
//import type { Route } from './+types/home';
//import { seo } from '@/lib/seo';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Gallery from '@/components/Gallery';
import Contact from '@/components/Contact';
import Quote from '@/components/Quote';


// export function meta({ matches, location }: Route.MetaArgs) {
// 	return seo({ matches, location }, {
// 		title: 'Christine Monterrey - Wedding Photography',
// 		description: 'Professional wedding photographer capturing the moments of today that will wow your heart tomorrow. View my portfolio and book your session.',
// 	});
// }

export default function HomePage() {
	return (
		<>
			<Hero />
			<About />
			<Gallery />
			<Contact />
			<Quote />
		</>
	);
}
