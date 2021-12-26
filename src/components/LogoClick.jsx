import Button from "./Button";
import grass_logo from "./../assets/logo-type/grass.png"
import poison_logo from "./../assets/logo-type/poison.png"
import water_logo from "./../assets/logo-type/water.png"
import fairy_logo from "./../assets/logo-type/fairy.png"

const LogoClick = () => {

    const grassClick = () => {
        window.history.pushState('', '', `/type/grass`);
        window.location.reload(false);
    }

    const poisonClick = () => {
        window.history.pushState('', '', `/type/poison`);
        window.location.reload(false);
    }

    const waterClick = () => {
        window.history.pushState('', '', `/type/water`);
        window.location.reload(false);
    }

    const fairyClick = () => {
        window.history.pushState('', '', `/type/fairy`);
        window.location.reload(false);
    }

    return (
        <>
            <Button label={<img src={grass_logo} alt="grass logo"/>}
                    onClick={grassClick}/>
            <Button label={<img src={poison_logo} alt="poison logo"/>}
                    onClick={poisonClick}/>
            <Button label={<img src={water_logo} alt="water logo"/>}
                    onClick={waterClick}/>
            <Button label={<img src={fairy_logo} alt="fairy logo"/>}
                    onClick={fairyClick}/>
        </>
    )
}

export default LogoClick;
