import { Container } from 'pixi.js';

export interface IScene extends Container {
    handleUpdate: (deltaMS: number) => void;
    handleResize: (options: { viewWidth: number, viewHeight: number }) => void;
}
