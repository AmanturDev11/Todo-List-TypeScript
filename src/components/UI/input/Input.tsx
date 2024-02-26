import { FC } from "react";
import scss from "./Input.module.scss";

const Input: FC<{
	type: string;
	value: string;
	setData: (value: string) => void;
	placeholder: string;
}> = ({ type, value, setData, placeholder }) => {
	return (
		<div className={scss.Input}>
			<div className="container">
				<div className={scss.content}>
					<div className={scss.cards}>
						<input
							className={scss.input}
							type={type}
							value={value}
							onChange={(el) => {
								setData(el.target.value);
							}}
							placeholder={placeholder}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Input;
