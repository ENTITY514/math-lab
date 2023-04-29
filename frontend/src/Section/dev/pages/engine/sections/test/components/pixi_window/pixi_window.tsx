import React from "react"
import style from "./pixi_window.module.css"
import { Engine } from "../../../../../../../../Engine/core"
import { useAppSelector, useAppDispatch } from "../../../../../../../../Store/hooks/redux"
import { EngineSlice } from "../../../../../../../../Store/reducers/engineSlice"

export const PixiWindow: React.FC = () => {
    const state = useAppSelector(state => state.engineSlice)
    const dispatch = useAppDispatch()
    const viewCreate = EngineSlice.actions.testViewCreate
    const view_ref = React.useRef(null)
    const engine = new Engine()
    React.useEffect(() => {
        if (view_ref.current && !state.view_ready.test) {
            engine.test_module.addView(view_ref.current)
            dispatch(viewCreate)
        }
        engine.test_module.build_app_from_data_set(engine.data_module.create_data_set())
    }, [])
    return (
        <div ref={view_ref} className={style.container}>
        </div>
    )
}