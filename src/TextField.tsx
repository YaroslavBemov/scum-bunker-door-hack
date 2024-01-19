import { ChangeEvent, FC, forwardRef } from 'react';

type InputElement = HTMLInputElement | HTMLTextAreaElement;
type InputChangeEvent = React.ChangeEvent<InputElement>;

interface TextInputProps {
	label?: boolean;
	inputId?: string;
	labelText?: string;
	id?: string;
	value: string;
	onChange: (name: string, value: string) => void;
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
	({ onChange, textarea = false, ...rest }, ref) => {
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
		autoFocus = false,
		name,
		type = 'text',
		textarea,
	} = props;

	return (
		<>
			{label && <Label inputId={inputId} labelText={labelText} />}
			<TextInput
				id={inputId}
				value={value}
				onChange={onChange}
				name={name}
				placeholder={labelText}
				autoFocus={autoFocus}
				type={type}
				textarea={textarea}
			/>
		</>
	);
};

export default TextField;
