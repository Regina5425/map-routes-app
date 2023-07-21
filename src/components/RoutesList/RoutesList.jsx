import cls from './RoutesList.module.scss';

export const RoutesList = () => {
	return (
		<ul className={cls.routes}>
			<li className={cls.route}>Маршрут №1</li>
			<li className={cls.route}>Маршрут №2</li>
			<li className={cls.route}>Маршрут №3</li>
		</ul>
	)
}