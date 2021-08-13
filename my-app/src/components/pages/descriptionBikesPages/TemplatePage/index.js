import styles from "./styledTemplatePage.module.scss";
import { Footer } from "../../../generalComponents/footer";
import { TopBar } from "../../../generalComponents/topBar";
import { HeaderTemplatePage } from "./headerTemplatePage";
import { useSelector } from 'react-redux';

export function TemplatePage () {
    const imagesTopBarBlack = useSelector((state => state.dataTopBar.dataSvgTopBarBlack));

    return (
        <div className={styles.wrapper_templatePage}>
            <TopBar className={styles.top_bar_template}
                logo={imagesTopBarBlack.logo}
                cart={imagesTopBarBlack.cart}
                burger={imagesTopBarBlack.burger}
            />
            <HeaderTemplatePage />
            <Footer />
        </div>
    ) 
  };
  
  