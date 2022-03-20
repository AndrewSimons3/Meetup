import { Fragment } from "react";
import { getStaticProps } from "..";
import MeetupDetail from '../../components/meetups/MeetupDetail';

function MeetupDetails() {
  return (
		<MeetupDetail
			image='https://xixerone.com/en/wp-content/uploads/sites/2/2020/12/Where-to-Stay-in-Austin-TX-Best-Areas-Hotels-1600x1067.jpg'
			title='First Meetup'
			address='Some Street  5, some  City'
			description='This is our first  meetup'
		/>
	);
}

export async function getStaticPaths() {
	return {
		paths: [
			{
				params: {
				meetupId: 'm1',
			}}
		]
	}
}

export async function getStaticProps(context) {
	//fetch data for a single meetup

	const meetupId = context.params.meetupId;

	console.log(meetupId);

	return {
		props: {
			meetupData: {
				image: 'https://xixerone.com/en/wp-content/uploads/sites/2/2020/12/Where-to-Stay-in-Austin-TX-Best-Areas-Hotels-1600x1067.jpg',
				id: meetupId,
				title: 'First Meetup',
				address: 'Some Street 5, Some City',
				description: 'This is a first meetup'
			}
		}
	}
}

export default MeetupDetails;