import MeetupList from "../components/meetups/MeetupList";



const DUMMY_MEETUPS = [
  {
    id: 'm1',
    title: 'A first meetup',
    image: '',
    address: 'Some address 5, 12345 Some City',
    description: 'This is a first meetup!'
  },

    {
    id: 'm2',
    title: 'A Second meetup',
    image: '',
    address: 'Some address 5, 12345 Some City',
    description: 'This is a first meetup!'
  },
    
      {
    id: 'm3',
    title: 'A Third meetup',
    image: '',
    address: 'Some address 5, 12345 Some City',
    description: 'This is a Third meetup!'
  },
      
        {
    id: 'm4',
    title: 'A fourth meetup',
    image: '',
    address: 'Some address 5, 12345 Some City',
    description: 'This is a Fourth meetup!'
  }
]

function HomePage() {
  return (
	
			<MeetupList meetups={DUMMY_MEETUPS} />
		
	);
}

export default HomePage