import React from "react";
import { Responsive as ResponsiveGridLayout } from "react-grid-layout";

import useDimension from "../../hooks/useDimension";
import Grid2521 from "./Grid2521";
import GridBio from "./GridBio";
import GridHariku from "./GridHariku";
import GridMap from "./GridMap";
import GridGithub from "./GridGithub";
import GridSpotify from "./GridSpotify";
import GridDarkToggle from "./GridDarkToggle";


const MainGrid = () => {
	const { breakpoint } = useDimension();

	const layouts = {
		md: [
			{ i: "bio", x: 0, y: 0, w: 2, h: 1 },
			{ i: "map", x: 2, y: 0, w: 1, h: 1 },
			{ i: "hariku", x: 3, y: 0, w: 1, h: 2 },
			{ i: "2521", x: 2, y: 1, w: 1, h: 2 },
			{ i: "github", x: 1, y: 1, w: 1, h: 1 },
			{ i: "spotify", x: 0, y: 1, w: 1, h: 1 },
			{ i: "dark-toggle", x: 3, y: 2, w: 1, h: 1 },
		],
		sm: [
			{ i: "bio", x: 0, y: 0, w: 2, h: 2 },
			{ i: "map", x: 2, y: 0, w: 1, h: 1 },
			{ i: "hariku", x: 3, y: 0, w: 1, h: 2 },
			{ i: "2521", x: 2, y: 1, w: 1, h: 2 },
			{ i: "spotify", x: 0, y: 3, w: 2, h: 1 },
			{ i: "dark-toggle", x: 3, y: 2, w: 1, h: 1 },
		],
		xxs: [
			{ i: "bio", x: 0, y: 0, w: 2, h: 2 },
			{ i: "map", x: 0, y: 0, w: 2, h: 1 },
			{ i: "github", x: 0, y: 3, w: 1, h: 1 },
			{ i: "hariku", x: 1, y: 3, w: 1, h: 2 },
			{ i: "2521", x: 0, y: 4, w: 1, h: 2 },
			{ i: "spotify", x: 0, y: 6, w: 2, h: 2 },
			{ i: "dark-toggle", x: 1, y: 5, w: 1, h: 1 },
		],
	};

	const layoutWidth = {
		xxl: 1280,
		xl: 768,
		lg: 768,
		md: 360,
		sm: 360,
	};

	const layoutCols = {
		xxl: 4,
		xl: 4,
		lg: 4,
		md: 2,
		sm: 2,
	};

	return (
		<div
			className={`max-w-[360px] md:max-w-screen-md xl:max-w-screen-xl mx-auto my-8`}
		>
			<ResponsiveGridLayout
				className="layout"
				layouts={layouts}
				cols={{ lg: 4, md: 4, sm: 4, xs: 4, xxs: 2 }}
				rowHeight={layoutWidth[breakpoint] / layoutCols[breakpoint] - 15}
				width={layoutWidth[breakpoint] || 1200}
				compactType={"vertical"}
				isDraggable={breakpoint === "sm" ? false : true}
				breakpoints={{
					lg: 1280,
					md: 1024,
					sm: 768,
					xs: 360,
					xxs: 0,
				}}
				isResizable={false}
				isBounded={true}
				useCSSTransforms={true}
				>
				{/* <div key={"bio"} >a</div> */}
				<div key={"bio"} className="grid-item">
					<GridBio />
				</div>
				<div
					key={"map"}
					className="grid-item"
				>
					<GridMap />
				</div>
				<div
					key={"hariku"}
					className="grid-item"
				>
					<GridHariku />
				</div>
				<div
					key={"2521"}
					className="grid-item"
				>
					<Grid2521 />
				</div>
				<div
					key={"github"}
					className="grid-item"
				>
					<GridGithub />
				</div>
				<div
					key={"spotify"}
					className="grid-item"
				>
					<GridSpotify />
				</div>
				<div
					key={"dark-toggle"}
					className="grid-item"
				>
					<GridDarkToggle />
				</div>
			</ResponsiveGridLayout>
		</div>
	);
};

export default MainGrid;