import BAKERSTREET from "../../images/descriptionBikesPages_images/headerImages/BAKERSTREET.png";
import BROADWAY from "../../images/descriptionBikesPages_images/headerImages/BROADWAY.png";
import NATHAN from "../../images/descriptionBikesPages_images/headerImages/NATHAN.png";
import helmet from "../../images/descriptionBikesPages_images/headerImages/helmet.png";
import bottle from "../../images/descriptionBikesPages_images/headerImages/botale.png";



export const dataDescriptionBikesPages = {

    dataHeader:{
        dataBakerstreet: {
            dataSlider:[BAKERSTREET,BROADWAY,NATHAN],
            dataDescriptionBikes:{title:"STREETSTER BAKERSTREET", price:"13000 ₴"},
            dataInnerBuyBike:{
                colors:[
                        {style:"color_red", color:"red"},
                        {style:"color_black", color:"black"},
                        {style:"color_blue", color:"blue"},
                ],
                selectColor:["Красный", "Черный", "Голубой"]
            }
        },
        dataBroadway: {
            dataSlider: [
                {BAKERSTREET},
                {BROADWAY},
                {NATHAN},
            ],
            dataDescriptionBikes: [
                { title:"STREETSTER BROADWAY", price:"11000 ₴"},
            ],
        },
        dataNathan: {
            dataSlider: [
                {BAKERSTREET},
                {BROADWAY},
                {NATHAN},
            ],
            dataDescriptionBikes: [
                { title:"STREETSTER NATHAN", price:"12000 ₴" },
            ],
        },
        
        dataAdditionalAccessories: [
            {img:helmet, title:"Шлем Octane",  price:"200 ₴"},
            {img:bottle, title:"Защита Canyon", price:"50 ₴"},
        ],

    }
    
}; 