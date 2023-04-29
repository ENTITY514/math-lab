import { ButtonIcon } from "../../../UI/ButtonIcon/button";
import { DropDownMenu } from "../../../UI/DropDownMenu/drop-down-menu";
import { Icon } from "../../../UI/Icon/icon";
import { ImageUI } from "../../../UI/Image/image";
import { InputWithName } from "../../../UI/NameWithInput/input_with_name";
import { LittleIcon } from "../../../UI/little_icon/little_icon";
import style from "./view.module.css"

function UIView() {
    return (
        <div className={style.container}>
            <div className={style.name}>Button</div> <ButtonIcon url={"CROSS-ENGINE-logo.png"} is_active={false} action={() => { }} />
            <div className={style.name}>Icon</div> <Icon url={"CROSS-ENGINE-logo.png"} />
            <div className={style.name}>ImageUI</div> <ImageUI url={"CROSS-ENGINE-logo.png"} />
            <div className={style.name}>LittleIcon</div> <LittleIcon url={"CROSS-ENGINE-logo.png"} />
            <div className={style.name}>InputWithName</div> <InputWithName title={"Name"} />
            <div className={style.name}>DropDownMenu</div> <div className={style.wrap}><DropDownMenu src={"CROSS-ENGINE-logo.png"} list={[{ title: "item", action: () => { } }]} /></div>
        </div>
    );
}

export default UIView;