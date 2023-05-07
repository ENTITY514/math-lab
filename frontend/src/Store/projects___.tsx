import { Assets } from "../assets/get";

interface __project_data__ {
    name: string,
    data: string,
    img_url: string | null
}

export const __Projects__: Array<__project_data__> = [
    {
        name: "Diplom Presentation",
        data: Assets.presentation as unknown as string,
        img_url: null
    },
]