import service from 'images/mainPage_images/contentImages/section_features_images/service.png';
import construction from 'images/mainPage_images/contentImages/section_features_images/construction.png';
import details from 'images/mainPage_images/contentImages/section_features_images/details.png';
import accessories from 'images/mainPage_images/contentImages/section_news_images/accessories.png';
import trains from 'images/mainPage_images/contentImages/section_news_images/trains.png';
import serv from 'images/mainPage_images/contentImages/section_news_images/service.png';
import street from 'images/mainPage_images/contentImages/section_category_images/typeThree.png';
import road from 'images/mainPage_images/contentImages/section_category_images/typeSecond.png';
import offroad from 'images/mainPage_images/contentImages/section_category_images/typeOne.png';

export const dataMainPage = {
	dataFeatures: [
		{
			img: service,
			title: 'Простота обсуживания',
			text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
			id: 1,
		},
		{
			img: construction,
			title: 'Надежная конструкция',
			text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
			id: 2,
		},
		{
			img: details,
			title: 'Качественные детали',
			text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
			id: 3,
		},
	],
	dataNews: [
		{
			img: accessories,
			title: 'Лучшие аксессуары для стрит байков',
			text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...',
			id: 1,
		},
		{
			img: trains,
			title: 'Куда поехать в Киеве?',
			text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...',
			id: 2,
		},
		{
			img: serv,
			title: 'Как обслуживать свой велосипед?',
			text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...',
			id: 3,
		},
	],
	dataCategory: [
		{ img: street, id: 1, name: 'STREET SERIES' },
		{ img: road, id: 2, name: 'ROAD SERIES' },
		{ img: offroad, id: 3, name: 'OFFROAD SERIES' },
	],
};
