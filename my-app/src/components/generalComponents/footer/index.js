import logo from "../../../images/topBar_images/svgTopBarWhite_images/Logo.svg";
import messengers from "./messengers.svg";
import "./styledFooter.scss"

export function Footer () {
    return(
        <div className="wrapper_footer">
            <div className="footer_content">
                <div className="logo">
                    <img src={logo} alt="" />
                </div>
                <div className="category_footer">
                    <h3>Категории</h3>
                    <a href="#">ROAD SERIES</a>
                    <a href="#">STREET SERIES</a>
                    <a href="#">MOUNTAIN SERIES</a>
                </div>
                <div className="information_footer">
                    <h3>Информация</h3>
                    <a href="#">О нас</a>
                    <a href="#">Контакты</a>
                </div>
                <div className="messengers_footer">
                    <img src={messengers} alt="" />
                </div>
            </div>
            <h3 className="Rights">© STREETSTER — Все права защищены </h3>
        </div>
    )
};