import React, { useEffect, useState } from 'react';
import SpeechRecognition, {
	useSpeechRecognition,
} from 'react-speech-recognition';

const Dictaphone1 = ({ handleSpeech }) => {
	const [message, setMessage] = useState('');
	const commands = [
		{
			command: 'reset',
			callback: () => resetTranscript(),
		},
		{
			command: 'shut up',
			callback: () => setMessage("I wasn't talking."),
		},
		{
			command: 'Hello',
			callback: () => setMessage('Hi there!'),
		},
	];
	const {
		transcript,
		interimTranscript,
		finalTranscript,
		resetTranscript,
		listening,
	} = useSpeechRecognition({ commands });

	useEffect(() => {
		if (finalTranscript !== '') {
			handleSpeech(transcript);
			console.log('Got final result:', finalTranscript);
			resetTranscript();
		}
	}, [interimTranscript, finalTranscript]);

	if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
		return null;
	}

	if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
		console.log(
			'Your browser does not support speech recognition software! Try Chrome desktop, maybe?'
		);
	}

	const listenContinuously = () => {
		SpeechRecognition.startListening({
			continuous: true,
			language: 'ru-Ru',
		});
	};

	return (
		<div>
			<div>
				<span>listening: {listening ? 'on' : 'off'}</span>
				<div>
					<button type='button' onClick={resetTranscript}>
						Reset
					</button>
					<button type='button' onClick={listenContinuously}>
						Listen
					</button>
					<button type='button' onClick={SpeechRecognition.stopListening}>
						Stop
					</button>
				</div>
			</div>
			<div>{message}</div>
			<div>
				<span>{transcript}</span>
			</div>
		</div>
	);
};

export default Dictaphone1;
