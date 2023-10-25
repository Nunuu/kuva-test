import { ArrowBackIcon, ArrowForwardIcon } from '@chakra-ui/icons';
import { Box, Button, Center, Flex, Spacer, Text } from '@chakra-ui/react';
import { useState } from 'react';

interface Image {
	id: string;
	createdOn: string;
	src: string;
	numDetections: number;
}

interface ImageGalleryProps {
	images: Image[];
}

function ImageGallery({ images }: ImageGalleryProps) {
	const [currentImageIndex, setCurrentImageIndex] = useState(0);

	const currentImage = images[currentImageIndex];

	return (
		currentImage && (
			<Center>
				<Button
					leftIcon={<ArrowBackIcon />}
					colorScheme="orange"
					variant="solid"
					onClick={() => {
						if (currentImageIndex > 0) {
							setCurrentImageIndex(currentImageIndex - 1);
						}
					}}
					isDisabled={currentImageIndex === 0}
				>
					Previous
				</Button>
				<Box p={5}>
					<Flex>
						<Text> {images.length} total images </Text>
						<Spacer />
						<Text> Index: {currentImageIndex} </Text>
					</Flex>
					<Box
						width="360"
						height="400"
						position="relative"
						backgroundPosition="center"
						backgroundRepeat="no-repeat"
						backgroundSize="cover"
						backgroundImage={`url(${currentImage.src})`}
					/>
					<Text> Scan Timestamp: {currentImage.createdOn} </Text>
					{/* TODO: Finish adding image metadata!  */}
					<Text> Image Metadata: INCOMPLETE </Text>
					<Text> Number of Detections: {currentImage.numDetections} </Text>
				</Box>
				<Button
					rightIcon={<ArrowForwardIcon />}
					colorScheme="orange"
					variant="solid"
					onClick={() => {
						if (currentImageIndex < images.length - 1) {
							setCurrentImageIndex(currentImageIndex + 1);
						}
					}}
					isDisabled={currentImageIndex === images.length - 1}
				>
					Next
				</Button>
			</Center>
		)
	);
}

export default ImageGallery;
