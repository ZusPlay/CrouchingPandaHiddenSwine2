import { Container } from 'pixi.js'

interface IScene extends Container {
    handleUpdate: (deltaMS: number) => void
    handleResize: (options: { viewWidth: number, viewHeight: number }) => void
}

export class DefaultScene extends Container implements IScene {
    handleUpdate (): void {}
    handleResize (): void {}
}
