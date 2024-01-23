import { useState } from 'react';
import './App.css';
import TextField from './TextField';
import { InitialState, InputOperator } from './types';
import { calculate } from './helpers';
import 'regenerator-runtime/runtime';
// @ts-ignore
import Dictaphone1 from './Dictaphone1';

const initialState: InitialState = {
	inputNumber: '10',
	outputA: '40',
	outputB: '15',
	inputOperator1: {
		A: '+1',
		B: '-1',
		number: '1',
	},
	inputOperator2: {
		A: '+5',
		B: '+5',
		number: '2',
	},
	inputOperator3: {
		A: '+5',
		B: '+15',
		number: '3',
	},
	inputOperator4: {
		A: '*2',
		B: '/2',
		number: '4',
	},
	inputOperator5: {
		A: '',
		B: '',
		number: '5',
	},
	inputOperator6: {
		A: '',
		B: '',
		number: '6',
	},
	inputOperator7: {
		A: '',
		B: '',
		number: '7',
	},
	inputOperator8: {
		A: '',
		B: '',
		number: '8',
	},
};

function App() {
	const [state, setState] = useState(initialState);
	const [result, setResult] = useState<string[]>([]);
	const [currentName, setCurrentName] = useState('');

	const operatorsArray: InputOperator[] = [
		state.inputOperator1,
		state.inputOperator2,
		state.inputOperator3,
		state.inputOperator4,
		state.inputOperator5,
		state.inputOperator6,
		state.inputOperator7,
		state.inputOperator8,
	];

	const handleFocus = (name: string) => {
		console.log('🚀 ~ handleFocus ~ name:', name);

		setCurrentName(name);
	};

	const handleSpeech = (value: string) => {
		console.log('🚀 ~ handleSpeech ~ value:', value);
		if (
			currentName === 'inputNumber' ||
			currentName === 'outputA' ||
			currentName === 'outputB'
		) {
			setState({ ...state, [currentName]: value });
		} else {
			const operatorName = currentName.substring(0, currentName.length - 1);
			const side = currentName.substring(currentName.length - 1);

			setState({
				...state,
				// @ts-ignore
				[operatorName]: { ...state[operatorName], [side]: value },
			});
		}
	};

	const handleChangeNumber = (name: string, value: string) => {
		setState({ ...state, [name]: value });
	};

	const handleChangeOperator = (name: string, value: string) => {
		const operatorName = name.substring(0, name.length - 1);
		const side = name.substring(name.length - 1);

		setState({
			...state,
			// @ts-ignore
			[operatorName]: { ...state[operatorName], [side]: value },
		});
	};

	const handleClick = () => {
		const result = calculate(
			state.inputNumber,
			operatorsArray,
			state.outputA,
			state.outputB
		);
		console.log(result);
		setResult(result);
	};

	return (
		<>
			<Dictaphone1 handleSpeech={handleSpeech} />
			<div className=''>Calc</div>
			<form className='flex'>
				{/* Input */}
				<div>
					<TextField
						label={true}
						inputId='inputNumber'
						labelText='Input'
						value={state.inputNumber}
						onChange={handleChangeNumber}
						onFocus={handleFocus}
						autoFocus={true}
						name='inputNumber'
					/>
				</div>

				<div>
					{/* inputOperator1 A */}
					<div className='flex'>
						<TextField
							label={true}
							inputId='inputOperator1A'
							labelText='inputOperator1A'
							value={state.inputOperator1.A}
							onChange={handleChangeOperator}
							onFocus={handleFocus}
							name='inputOperator1A'
						/>
						{/*  B */}
						<TextField
							label={true}
							inputId='inputOperator1B'
							labelText='inputOperator1B'
							value={state.inputOperator1.B}
							onChange={handleChangeOperator}
							onFocus={handleFocus}
							name='inputOperator1B'
						/>
					</div>

					{/* inputOperator2 A */}
					<div className='flex'>
						<TextField
							label={true}
							inputId='inputOperator2A'
							labelText='inputOperator2A'
							value={state.inputOperator2.A}
							onChange={handleChangeOperator}
							onFocus={handleFocus}
							name='inputOperator2A'
						/>
						{/*  B */}
						<TextField
							label={true}
							inputId='inputOperator2B'
							labelText='inputOperator2B'
							value={state.inputOperator2.B}
							onChange={handleChangeOperator}
							onFocus={handleFocus}
							name='inputOperator2B'
						/>
					</div>

					{/* inputOperator3 A */}
					<div className='flex'>
						<TextField
							label={true}
							inputId='inputOperator3A'
							labelText='inputOperator3A'
							value={state.inputOperator3.A}
							onChange={handleChangeOperator}
							onFocus={handleFocus}
							name='inputOperator3A'
						/>
						{/*  B */}
						<TextField
							label={true}
							inputId='inputOperator3B'
							labelText='inputOperator3B'
							value={state.inputOperator3.B}
							onChange={handleChangeOperator}
							onFocus={handleFocus}
							name='inputOperator3B'
						/>
					</div>

					{/* inputOperator4 A */}
					<div className='flex'>
						<TextField
							label={true}
							inputId='inputOperator4A'
							labelText='inputOperator4A'
							value={state.inputOperator4.A}
							onChange={handleChangeOperator}
							onFocus={handleFocus}
							name='inputOperator4A'
						/>
						{/*  B */}
						<TextField
							label={true}
							inputId='inputOperator4B'
							labelText='inputOperator4B'
							value={state.inputOperator4.B}
							onChange={handleChangeOperator}
							onFocus={handleFocus}
							name='inputOperator4B'
						/>
					</div>

					{/* inputOperator5 A */}
					<div className='flex'>
						<TextField
							label={true}
							inputId='inputOperator5A'
							labelText='inputOperator5A'
							value={state.inputOperator5.A}
							onChange={handleChangeOperator}
							onFocus={handleFocus}
							name='inputOperator5A'
						/>
						{/*  B */}
						<TextField
							label={true}
							inputId='inputOperator5B'
							labelText='inputOperator5B'
							value={state.inputOperator5.B}
							onChange={handleChangeOperator}
							onFocus={handleFocus}
							name='inputOperator5B'
						/>
					</div>

					{/* inputOperator6 A */}
					<div className='flex'>
						<TextField
							label={true}
							inputId='inputOperator6A'
							labelText='inputOperator6A'
							value={state.inputOperator6.A}
							onChange={handleChangeOperator}
							onFocus={handleFocus}
							name='inputOperator6A'
						/>
						{/*  B */}
						<TextField
							label={true}
							inputId='inputOperator6B'
							labelText='inputOperator6B'
							value={state.inputOperator6.B}
							onChange={handleChangeOperator}
							onFocus={handleFocus}
							name='inputOperator6B'
						/>
					</div>

					{/* inputOperator7 A */}
					<div className='flex'>
						<TextField
							label={true}
							inputId='inputOperator7A'
							labelText='inputOperator7A'
							value={state.inputOperator7.A}
							onChange={handleChangeOperator}
							onFocus={handleFocus}
							name='inputOperator7A'
						/>
						{/*  B */}
						<TextField
							label={true}
							inputId='inputOperator7B'
							labelText='inputOperator7B'
							value={state.inputOperator7.B}
							onChange={handleChangeOperator}
							onFocus={handleFocus}
							name='inputOperator7B'
						/>
					</div>

					{/* inputOperator8 A */}
					<div className='flex'>
						<TextField
							label={true}
							inputId='inputOperator8A'
							labelText='inputOperator8A'
							value={state.inputOperator8.A}
							onChange={handleChangeOperator}
							onFocus={handleFocus}
							name='inputOperator8A'
						/>
						{/*  B */}
						<TextField
							label={true}
							inputId='inputOperator8B'
							labelText='inputOperator8B'
							value={state.inputOperator8.B}
							onChange={handleChangeOperator}
							onFocus={handleFocus}
							name='inputOperator8B'
						/>
					</div>
				</div>

				<div>
					{/* outputA */}
					<TextField
						label={true}
						inputId='outputA'
						labelText='outputA'
						value={state.outputA}
						onChange={handleChangeNumber}
						onFocus={handleFocus}
						name='outputA'
					/>
					{/* outputB */}
					<TextField
						label={true}
						inputId='outputB'
						labelText='outputB'
						value={state.outputB}
						onChange={handleChangeNumber}
						onFocus={handleFocus}
						name='outputB'
					/>
				</div>
			</form>
			<button onClick={handleClick}>Calc</button>
			<div>Result: {result}</div>
		</>
	);
}

export default App;
