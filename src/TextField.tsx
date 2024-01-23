import { FC, forwardRef } from 'react';

type InputElement = HTMLInputElement | HTMLTextAreaElement;
type InputChangeEvent = React.ChangeEvent<InputElement>;

interface TextInputProps {
	label?: boolean;
	inputId?: string;
	labelText?: string;
	id?: string;
	value: string;
	onChange: (name: string, value: string) => void;
	onFocus: (name: string) => void;
	placeholder?: string;
	autoFocus?: boolean;
	name?: string;
	type?: 'email' | 'password' | 'text';
	textarea?: boolean;
}

interface LabelProps {
	inputId: string;
	labelText: string;
}

type TextFieldProps = TextInputProps & LabelProps;

const TextInput = forwardRef<InputElement, TextInputProps>(
	({ onChange, onFocus, textarea = false, ...rest }, ref) => {
		const InputElement = textarea ? 'textarea' : 'input';
		return (
			<InputElement
				ref={ref as any}
				className={`rounded-md w-full border border-gray-400 p-3 mb-5 ${
					textarea ? 'h-32' : ''
				}`}
				onChange={({ target: { name, value } }: InputChangeEvent) =>
					onChange(name, value)
				}
				onFocus={({ target: { name } }: InputChangeEvent) => onFocus(name)}
				{...rest}
			/>
		);
	}
);

const Label = ({ inputId, labelText }: LabelProps): JSX.Element => (
	<label className='' htmlFor={inputId}>
		{labelText}
	</label>
);

const TextField: FC<TextFieldProps> = (props) => {
	const {
		label = false,
		inputId = '',
		labelText = '',
		value,
		onChange,
		onFocus,
		autoFocus = false,
		name,
		type = 'text',
		textarea,
	} = props;

	return (
		<>
			<div>
				{label && <Label inputId={inputId} labelText={labelText} />}
				<TextInput
					id={inputId}
					value={value}
					onChange={onChange}
					onFocus={onFocus}
					name={name}
					placeholder={labelText}
					autoFocus={autoFocus}
					type={type}
					textarea={textarea}
				/>
			</div>
		</>
	);
};

export default TextField;
