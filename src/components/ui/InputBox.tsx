import React from 'react'

// or type
interface Props {
    type: string;
	id: string;
	placeholder: string;
	ref: HTMLInputElement;
	className: string;
}

const InputBox = React.forwardRef<HTMLInputElement, Props>(
	({ type, id, placeholder, className }, ref) => {
		return (
			<>
				<input
					type={type}
					id={id}
					placeholder={placeholder}
					required
					ref={ref}
					className={className}
				/>
			</>
		);
	}
);

export default InputBox
