import { Box } from '@chakra-ui/react';
import axios from 'axios';
import { useCallback, useEffect, useState } from 'react';

import ImageGallery from '../components/ImageGallery';
import { convertToDateTime } from '../utils/helpers';

// TODO: Match properties with API data
// Can also consider moving this into a different file
interface ScanResult {
	id: string;
	fileName: string;
	createdOn: string;
	detectionsList: [];
	jpg: string;
}

function Home() {
	const baseURL = 'http://localhost:7071';
	const [results, setResults] = useState<ScanResult[]>([]);

	//TODO: API functions (more to be added) should be in their own file!
	const getEvents = async () => {
		await axios
			.get(`${baseURL}/events`)
			.then(function (response) {
				setResults(response.data.scanResults);
			})
			.catch(function (error) {
				//TODO: this should display an error in the UI!
				console.log(error);
			});
	};

	const getImages = useCallback(() => {
		return results
			.filter((result: ScanResult) => result.detectionsList?.length > 0)
			.map((result: ScanResult) => {
				return {
					id: result.id,
					createdOn: convertToDateTime(result.createdOn),
					numDetections: result.detectionsList?.length || 0,
					src: result.jpg,
				};
			});
	}, [results]);

	useEffect(() => {
		getEvents();
	}, []);

	return (
		<Box as="main">
			<ImageGallery images={getImages()} />
		</Box>
	);
}

export default Home;
