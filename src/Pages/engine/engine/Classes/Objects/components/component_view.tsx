import { Sprite } from "../ViewObjects/spite"

interface ComponentViewProps {
    object: Sprite
}

export const ComponentView: React.FC<ComponentViewProps> = ({ object }) => {
    return (
        <div>
        </div>
    )
}