import { Fragment } from "react";
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

export default MeetupDetails;