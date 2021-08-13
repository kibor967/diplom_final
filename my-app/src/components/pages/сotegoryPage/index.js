import { HeaderPageCotegory } from "./components/headerCotegoryPage";
import { CotegoryContent } from "./components/contentPageCotegory";
import { Footer } from "../../generalComponents/footer";

export function CotegoryPage () {
    return (
        <div className="wrapper_cotegoryPage">
            <HeaderPageCotegory />
            <CotegoryContent />
            <Footer />
        </div>
    ) 
};
  
  