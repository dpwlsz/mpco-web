import React from 'react';
import { Outlet } from 'react-router-dom';

import { css } from '@emotion/css';

import MainNav from '@common/components/MainNav';

const PageLayout: React.FC = () => {
	return (
		<div>
			<header>
				{/* main nav */}
				<MainNav />
			</header>
			<main>
				<Outlet />
			</main>
			<footer
				className={css`
					display: flex;
					justify-content: center;
					align-items: center;
					width: 100%;
					height: 276px;
					background-color: black;
					color: white;
				`}
			>
				<div
					className={css`
						width: 960px;
						height: 100%;
						padding: 40px 0px;
					`}
				>
					<div
						className={css`
							width: 100%;
							height: 80px;
							border-bottom: 1px solid gray;
							margin-bottom: 20px;
						`}
					>
						ghfgh
					</div>
					<div
						className={css`
							display: flex;
							width: 100%;
							height: 100px;
						`}
					>
						<div
							className={css`
								width: 580px;
							`}
						>
							<p
								className={css`
									margin-bottom: 10px;
								`}
							>
								회사명 : 주식회사 대웅이티 ㅣ 대표 : 전희충 ㅣ 사업자 등록번호 : 333-88-01232 ㅣ
								주소 : 부산광역시 강서구 화전산단3로 90 ㅣ 전화 : 051-715-3435ㅣ 팩스 :
								051-715-3436ㅣ E-MAIL : dwet@dwet.kr
							</p>
							<p>© COPYRIGHT 2024 HYUNDAI MOTOR GROUP, ALL RIGHTS RESERVED.</p>
						</div>
					</div>
					<div />
				</div>
			</footer>
		</div>
	);
};

export default PageLayout;