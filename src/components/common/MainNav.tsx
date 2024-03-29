import React from 'react';

import { css } from '@emotion/css';
import { Button } from '@mui/material';

interface ISubMenuItem {
	title: string;
	path: string;
}

interface MainNavButtonProps {
	title: string;
	subMenu: ISubMenuItem[];
}

const MainNavButton: React.FC<MainNavButtonProps> = ({ title, subMenu }) => {
	const [openMenu, setOpenMenu] = React.useState(false);
	return (
		<div
			className={css`
				position: relative;
				height: 60px;
			`}
		>
			<Button
				onMouseEnter={() => setOpenMenu(true)}
				onMouseLeave={() => setOpenMenu(false)}
				onClick={() => setOpenMenu(!openMenu)}
				sx={{
					width: '100%',
					height: '100%',
				}}
			>
				{title}
			</Button>
			{openMenu && (
				<div
					className={css`
						position: absolute;
						top: 60px;
						left: 0;
						width: 100px;
						background-color: white;
						display: flex;
						flex-direction: column;
						align-items: center;
						justify-content: center;
						z-index: 100;
					`}
				>
					{subMenu.map((item) => (
						<Button>{item.title}</Button>
					))}
				</div>
			)}
		</div>
	);
};

const MainNav = () => {
	return (
		<nav
			className={css`
				display: flex;
				justify-content: space-between;
				align-items: center;
				max-width: 940px;
				margin-left: auto;
				margin-right: auto;
				height: 60px;
			`}
		>
			<div>mpco</div>
			<div
				className={css`
					display: flex;
					align-items: center;
				`}
			>
				<MainNavButton
					title="home"
					subMenu={[
						{
							title: 'sub1',
							path: '/sub1',
						},
						{
							title: 'sub2',
							path: '/sub2',
						},
					]}
				/>
				<MainNavButton
					title="회사소개"
					subMenu={[
						{
							title: 'sub1',
							path: '/sub1',
						},
						{
							title: 'sub2',
							path: '/sub2',
						},
					]}
				/>
				<MainNavButton
					title="사업분야"
					subMenu={[
						{
							title: 'sub1',
							path: '/sub1',
						},
						{
							title: 'sub2',
							path: '/sub2',
						},
					]}
				/>
				<MainNavButton
					title="연구분야"
					subMenu={[
						{
							title: 'sub1',
							path: '/sub1',
						},
						{
							title: 'sub2',
							path: '/sub2',
						},
					]}
				/>
				<MainNavButton
					title="게시판"
					subMenu={[
						{
							title: 'sub1',
							path: '/sub1',
						},
						{
							title: 'sub2',
							path: '/sub2',
						},
					]}
				/>
			</div>
		</nav>
	);
};

export default MainNav;
