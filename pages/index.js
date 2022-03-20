import MeetupList from "../components/meetups/MeetupList";




const DUMMY_MEETUPS = [
	{
		id: 'm1',
		title: 'A first meetup',
		image:
			'https://xixerone.com/en/wp-content/uploads/sites/2/2020/12/Where-to-Stay-in-Austin-TX-Best-Areas-Hotels-1600x1067.jpg',
		address: 'Some address 5, 12345 Some City',
		description: 'This is a first meetup!',
	},

	{
		id: 'm2',
		title: 'A Second meetup',
		image:
			'https://xixerone.com/en/wp-content/uploads/sites/2/2020/12/Where-to-Stay-in-Austin-TX-Best-Areas-Hotels-1600x1067.jpg',
		address: 'Some address 5, 12345 Some City',
		description: 'This is a first meetup!',
	},

	{
		id: 'm3',
		title: 'A Third meetup',
		image:
			'https://xixerone.com/en/wp-content/uploads/sites/2/2020/12/Where-to-Stay-in-Austin-TX-Best-Areas-Hotels-1600x1067.jpg',
		address: 'Some address 5, 12345 Some City',
		description: 'This is a Third meetup!',
	},
];

function HomePage(props) {

  return <MeetupList meetups={props.meetups} />
}

// export async function getServerSideProps(context) {
// 	const req = context.req;
// 	const res = context.res;

// 	// fetch data from an Api

// 	return {
// 		props: {
// 			meetups: DUMMY_MEETUPS
// 		}
// 	}
// }

export async function getStaticProps() {
	// fetch data from an API
	return {
		props: {
			meetups: DUMMY_MEETUPS
		},
		revalidate: 1
	};
}

export default HomePage;