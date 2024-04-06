//App.js

import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';

const steps = [
	{
		id: '0',
		message: 'Hello User',

		// This calls the next id
		// i.e. id 1 in this case
		trigger: '1',
	}, {
		id: '1',

		// Here we want the user
		// to enter input
		user: true,
		trigger: '2',
	},
      {
		id: '2',

		// Here we want the user
		// to enter input
		message : "How can i help you?",
		trigger: '3',
	},
    {
		id: '3',

		// Here we want the user
		// to enter input
		user : true,
		trigger: '5',
	}, {
		id: '5',
		options: [

			{ value: 1, label: 'scan waste' },
			{ value: 2, label: 'Read Articles' },
            {value : 3 , label : 'Explore Community'}

		],
        end : true
	}
];

// Creating our own theme
const theme = {
	background: '#C9FF8F',
	headerBgColor: '#197B22',
	headerFontSize: '20px',
	botBubbleColor: '#0F3789',
	headerFontColor: 'white',
	botFontColor: 'white',
	userBubbleColor: '#FF5733',
	userFontColor: 'white',
};

// Set some properties of the bot
const config = {
	botAvatar: "bot.png",
	floating: true,
};

function Chatbot() {
	return (
		<div className="Chatbot">
			<ThemeProvider theme={theme}>
				<ChatBot

					// This Chatbotears as the header
					// text for the chat bot
					headerTitle="WauremBot"
                    speechSynthesis={{ enable: true, lang: 'en' }}
					steps={steps}
					{...config}

				/>
			</ThemeProvider>
		</div>
	);
}

export default Chatbot;
