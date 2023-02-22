import React from "react"
import { useAppDispatch, useAppSelector } from "../../../../../../Store/hooks/redux"
import { EngineSlice } from "../../../../../../Store/reducers/engineSlice"
import { Engine } from "../../../../engine/main"
import style from "./pixi_window.module.css"

export const PixiWindow: React.FC = () => {
    const state = useAppSelector(state => state.engineSlice)
    const dispatch = useAppDispatch()
    const viewCreate = EngineSlice.actions.TestViewCreate
    const view_ref = React.useRef(null)
    const engine = new Engine()
    React.useEffect(() => {
        if (view_ref.current && !state.view_ready.test) {
            engine.test_module.addView(view_ref.current)
            dispatch(viewCreate)
        }
    }, [])
    return (
        <div ref={view_ref} className={style.container}>
        </div>
    )
}