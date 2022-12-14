import React from "react";
import useSWR from "swr";
import axios from "axios";
import Image from "next/image";
import { useFilter } from "../../context/FilterContext";
import { FILTER } from "../../constants/FilterConstants";


const GridSpotify = ({ spotifyPlaying }) => {
	const { filter } = useFilter()
	const visible = filter === FILTER.MEDIA || filter === FILTER.ALL
	
	const fetcher = (url) => axios.get(url).then((res) => res.data);

	const { data, error } = useSWR("/api/spotify", fetcher);

	return (
		<div className={`h-full w-full p-7 md:p-8 flex flex-col items-start justify-between transition-opacity ${!visible && "opacity-25"}`}>
			<div className="absolute album-cover">
				<div className="relative flex w-full h-full">
					<Image
						src={
							data?.albumImageUrl ||
							"https://i.scdn.co/image/ab67616d0000b273c3040848e6ef0e132c5c8340"
						}
						layout="fill"
						objectFit="cover"
						alt="album"
						className=""
					/>
				</div>
			</div>
			<img src="spotify.svg" alt="spotify" className="h-9 md:max-h-14" />
			<div className="">
				<div className="flex text-[#6ed270] font-medium text-sm items-center">
					<span className="playing-indicator playing-indicator-1"></span>
					<span className="playing-indicator playing-indicator-2"></span>
					<span className="playing-indicator playing-indicator-3"></span>
					<p className="ml-2">
						{data?.isPlaying ? "Now playing" : "Offline. Last Played"}
					</p>
				</div>
				<a
					className="font-moranga text-3xl sm:text-2xl hover:opacity-50 duration-300 leading-tight"
					href={data?.songUrl || "https://open.spotify.com/track/0RDqNCRBGrSegk16Avfzuq"}
					target="_blank"
					rel="noopener noreferrer"
				>
					{data?.title || "Talk that Talk"}
				</a>
				<p className="leading-none">{data?.artist || "TWICE"}</p>
			</div>
		</div>
	);
};

export default GridSpotify;
