import { useState } from "react";
import scss from "./NewTodoList.module.scss";
import { useDispatch } from "react-redux";
import { addTodoList, deleteAll } from "../../store/tools/TodoList";
import Input from "../UI/input/Input";
import Button from "../UI/button/Button";
import Cards from "../cards/Cards";

const NewTodoList = () => {
	const [titleValue, setTitleValue] = useState<string>("");
	const [imgaeValue, setImgaeValue] = useState<string>("");
	const [dataValue, setDataValue] = useState<string>("");

	const dispatch = useDispatch();

	const addTodoListResult = () => {
		if (titleValue === "" && dataValue === "" && imgaeValue === "") {
			alert("Пока нету !!!😒");
		} else {
			dispatch(
				addTodoList({ title: titleValue, date: dataValue, img: imgaeValue })
			);
		}
		setTitleValue("");
		setDataValue("");
		setImgaeValue("");
	};
	const deleteAllCards = () => {
		dispatch(deleteAll({ id: Math.random() }));
	};
	return (
		<div className={scss.NewTodoList}>
			<div className="container">
				<div className={scss.content}>
					{/* <h1>Todo-List</h1> */}
					<div className={scss.cards}>
						<div className={scss.card}>
							<h3>Создать тур</h3>
							<Input
								placeholder="название тура"
								type="text"
								value={titleValue}
								setData={setTitleValue}
							/>
							<Input
								placeholder="ссылка на картинку"
								type="url"
								value={imgaeValue}
								setData={setImgaeValue}
							/>
							<Input
								placeholder="date"
								type="date"
								value={dataValue}
								setData={setDataValue}
							/>
							<Button onClick={addTodoListResult}>AddTodo</Button>
							<Button onClick={deleteAllCards}>deleteAll</Button>
						</div>
					</div>
					<hr />
					<Cards />
				</div>
			</div>
		</div>
	);
};

export default NewTodoList;
