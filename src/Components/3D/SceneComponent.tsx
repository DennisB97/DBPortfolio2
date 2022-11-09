import * as React from "react"
import {useEffect,useRef} from "react";
import {Engine,Scene, EngineOptions, SceneOptions} from "babylonjs";
import styled from "styled-components"

interface functionCalls
{
antialias?: boolean;
adaptToDeviceRatio?: boolean;
engineOptions?: EngineOptions;
onRender: (scene: Scene) => void;
onSceneReady: (scene: Scene) => void;

}

const StyledCanvas = styled.canvas`
    margin: 0;
    padding: 0;
    height: 100%;
    overflow:hidden;
`



export default ({antialias,adaptToDeviceRatio,engineOptions,onRender,onSceneReady,...rest} : functionCalls,sceneOptions : SceneOptions) => {
    const reactCanvas = useRef(null);

    useEffect(() => 
    {
        const {current: canvas } = reactCanvas;

        if(!canvas) return;

        const engine = new Engine(canvas,antialias,engineOptions,adaptToDeviceRatio);
        const scene = new Scene(engine,sceneOptions);

        if(scene.isReady())
        {
            onSceneReady(scene);
        }
        else 
        {
            scene.onReadyObservable.addOnce((scene) => onSceneReady(scene));
        }

        engine.runRenderLoop(() => 
        {
            onRender(scene);
            scene.render();
        });

        const resize = () => 
        {
            scene.getEngine().resize();
        };

        if(window) 
        {
            window.addEventListener("resize",resize);
        }

        return () => 
        {
            scene.getEngine().dispose();

            if(window)
            {
                window.removeEventListener("resize",resize);
            }
        };

    },[antialias,engineOptions,adaptToDeviceRatio,sceneOptions,onRender,onSceneReady]);

    return <StyledCanvas className={StyledCanvas} ref={reactCanvas} {...rest} />;
}