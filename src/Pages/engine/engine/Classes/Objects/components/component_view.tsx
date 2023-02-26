import { Sprite } from "../ViewObjects/sprite"

interface ComponentViewProps {
    object: Sprite
}

export const ComponentView: React.FC<ComponentViewProps> = ({ object }) => {
    return (
        <div>
        </div>
    )
}