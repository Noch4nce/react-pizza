import React, { FC } from 'react'
import logoSvg from '../../../assets/images/pizza-logo.svg'
import { Link } from 'react-router-dom'

const HeaderLogo: FC = () => {
	return (
		<div className="header__main">
			<Link to="/">
				<div className="header__logo">
					<img width="38" src={logoSvg} alt="Pizza logo" />
					<div>
						<h1>Pizza Maker</h1>
						<p>Сеть пиццерий № 1 в России</p>
					</div>
				</div>
			</Link>

			<div className="header__geo">
				<span>
					Доставка пиццы
					<span className="header__city"> Екатеринбург</span>
				</span>
				<div className="header__time">
					<span>
						31 мин <strong>·</strong> 4.82
					</span>
					<svg width="16" height="16" viewBox="0 0 16 16" fill="none">
						<defs>
							<linearGradient id="star_16_svg__a">
								<stop
									offset="100%"
									stopColor="#FFD200"
									data-darkreader-inline-stopcolor=""
								/>
								<stop
									offset="50%"
									stopColor="#999"
									stopOpacity="0.5"
									data-darkreader-inline-stopcolor=""
								/>
							</linearGradient>
						</defs>
						<path
							fill="url(#star_16_svg__a)"
							d="M8.451 1.49a1 1 0 00-.902 0c-.245.123-.378.359-.461.528-.09.182-.185.427-.296.712l-.928 2.39a3.374 3.374 0 01-.07.173v.002H5.79c-.036.006-.086.01-.184.02l-2.504.214c-.272.024-.51.044-.695.077-.176.032-.418.09-.6.274a1 1 0 00-.28.826c.03.256.186.45.307.583.126.139.302.3.503.485l1.987 1.823.125.118.002.002v.003c-.006.033-.016.079-.036.168l-.592 2.66a9.167 9.167 0 00-.145.73c-.024.184-.042.445.087.68a1 1 0 00.733.508c.265.038.504-.072.667-.16a9.15 9.15 0 00.632-.392l2.036-1.332c.086-.056.13-.085.164-.104L8 12.476l.003.002c.033.019.078.048.164.104l2.036 1.332c.246.161.458.3.632.393.163.087.401.197.667.159a1 1 0 00.733-.508c.13-.235.11-.496.087-.68a9.199 9.199 0 00-.145-.73l-.592-2.66c-.02-.09-.03-.135-.035-.168v-.003l.001-.002.125-.118 1.987-1.823c.201-.185.377-.346.503-.485.12-.133.276-.327.308-.583a1 1 0 00-.281-.826c-.182-.183-.424-.242-.6-.274-.185-.033-.423-.053-.695-.077l-2.504-.215a3.372 3.372 0 01-.184-.018h-.003l-.002-.003a3.421 3.421 0 01-.069-.172l-.928-2.39a9.644 9.644 0 00-.296-.713c-.083-.17-.216-.405-.46-.529z"
						/>
					</svg>
				</div>
			</div>
		</div>
	)
}

export default HeaderLogo
