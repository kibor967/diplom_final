import BAKERSTREET from 'images/descriptionBikesPages_images/headerImages/BAKERSTREET.png';
import BROADWAY from 'images/descriptionBikesPages_images/headerImages/BROADWAY.png';
import NATHAN from 'images/descriptionBikesPages_images/headerImages/NATHAN.png';

export const dataDescriptionBikesPages = {
	dataHeader: {
		dataBakerstreet: {
			dataSlider: [BAKERSTREET, BROADWAY, NATHAN],
			dataDescriptionBikes: {
				title: 'STREETSTER BAKERSTREET',
				price: '13000',
			},
			dataInnerBuyBike: {
				colors: [
					{ color: 'Красный', styleColor: 'red', id: 1 },
					{ color: 'Черный', styleColor: 'black', id: 2 },
					{ color: 'Голубой', styleColor: 'blue', id: 3 },
				],
				size: [
					{
						rama: '54” (Рост 175-185 см)',
						numberSize: '54”',
						id: 1,
					},
					{ rama: '57” (Рост 180-195 см)', numberSize: '57”', id: 2 },
				],
			},
		},
		dataBroadway: {
			dataSlider: [BROADWAY, BAKERSTREET, NATHAN],
			dataDescriptionBikes: { title: 'STREETSTER BROADWAY', price: '11000 ' },
			dataInnerBuyBike: {
				colors: [
					{ color: 'Красный', styleColor: 'red', id: 1 },
					{ color: 'Черный', styleColor: 'black', id: 2 },
				],
				size: [
					{
						rama: '54” (Рост 175-185 см)',
						numberSize: '54”',
						id: 1,
					},
					{ rama: '57” (Рост 180-195 см)', numberSize: '57”', id: 2 },
				],
			},
		},
		dataNathan: {
			dataSlider: [NATHAN, BAKERSTREET, BROADWAY],
			dataDescriptionBikes: { title: 'STREETSTER NATHAN', price: '12000' },
			dataInnerBuyBike: {
				colors: [{ color: 'Красный', styleColor: 'red', id: 1 }],
				size: [
					{
						rama: '54” (Рост 175-185 см)',
						numberSize: '54”',
						id: 1,
					},
					{ rama: '57” (Рост 180-195 см)', numberSize: '57”', id: 2 },
				],
			},
		},
	},
};
