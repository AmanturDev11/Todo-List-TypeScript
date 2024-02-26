import { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelectorResults } from "../../store/store";
import { deleteCards, sameRes } from "../../store/tools/TodoList";
import Button from "../UI/button/Button";
import scss from "./Cards.module.scss";

const Cards = () => {
	const [result, setResult] = useState<null | number>(null);
	const [chekResult, setChekResult] = useState<null | number>(null);
	const [titleValue, setTitleValue] = useState<string>("");
	const [dataValue, setDataValue] = useState<string>("");
	const [imgaeValue, setImgaeValue] = useState<string>("");
	const dispatch = useDispatch();
	const todo = useSelectorResults((state) => state.todoReducer.data);

	const deleteRes = (id: number) => {
		dispatch(deleteCards({ id: id }));
		console.log(id);
	};

	function resId(id: number) {
		setResult(id);
	}

	const editResult = (id: number) => {
		dispatch(
			sameRes({
				id: id,
				title: titleValue,
				date: dataValue,
				img: imgaeValue,
			})
		);
		console.log("ggoool");
	};

	const checkboxResult = (id: number) => {
		if (chekResult === id) {
			setChekResult(null);
		} else {
			setChekResult(id);
		}
	};

	return (
		<div className={scss.Cards}>
			<div className="container">
				<div className={scss.content}>
					{todo.map((item) => (
						<div className={scss.car} key={item.id}>
							<div className={scss.car2}>
								<div className={scss.car3}>
									{result === item.id ? (
										<>
											<input
												type="text"
												value={titleValue}
												onChange={(e) => setTitleValue(e.target.value)}
											/>
											<input
												type="url"
												value={imgaeValue}
												onChange={(e) => setImgaeValue(e.target.value)}
											/>
											<input
												type="date"
												value={dataValue}
												onChange={(e) => setDataValue(e.target.value)}
											/>
											<Button
												onClick={() => {
													editResult(item.id);
													setResult(null);
												}}>
												Save
											</Button>
											<Button onClick={() => setResult(null)}>Cancel</Button>
										</>
									) : (
										<>
											<div className={scss.resCard}>
												<div className={scss.cardInput}>
													<input
														type="checkbox"
														checked={chekResult === item.id}
														onChange={() => checkboxResult(item.id)}
													/>
													<h3
														className={
															chekResult === item.id
																? `${scss.active}`
																: `${scss.noactive}`
														}
														style={{
															textDecoration:
																chekResult === item.id
																	? "line-through"
																	: "none",
														}}>
														{item.title}
													</h3>
												</div>
											</div>
											<img
												className={
													chekResult === item.id
														? `${scss.active}`
														: `${scss.noactive}`
												}
												style={{
													filter:
														chekResult === item.id ? "grayscale(100%)" : "none",
												}}
												src={item.img}
												alt={item.title}
											/>
											<p
												className={
													chekResult === item.id
														? `${scss.active}`
														: `${scss.noactive}`
												}
												style={{
													textDecoration:
														chekResult === item.id ? "line-through" : "none",
												}}>
												{item.date}
											</p>
											<div className={scss.divbutton}>
											<Button onClick={() => deleteRes(item.id)}>delete</Button>
											<Button
												onClick={() => {
													resId(item.id);
													setTitleValue(item.title);
													setDataValue(item.date);
													setImgaeValue(item.img);
												}}>
												Edit
											</Button>
											</div>
										</>
									)}
								</div>
							</div>
						</div>
					))}
					<div className={scss.top}></div>
				</div>
			</div>
		</div>
	);
};

export default Cards;
