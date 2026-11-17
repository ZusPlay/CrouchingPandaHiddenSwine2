import { Application, Assets, Sprite, Ticker } from 'pixi.js';
import './style.css';

(async () => {
    const app = new Application();

    // The line below is needed for the debugger in the browser.
    (globalThis as any).__PIXI_APP__ = app; // eslint-disable-line

    await app.init({
        background: '0x1099bb',
        resizeTo: window,
        preference: 'webgl',
    });

    document.body.appendChild(app.canvas);

    const tex = await Assets.load('https://pixijs.com/assets/bunny.png');
    const bunny = Sprite.from(tex);
    bunny.anchor.set(0.5);
    bunny.x = app.screen.width / 2;
    bunny.y = app.screen.height / 2;
    app.stage.addChild(bunny);

    app.ticker.add((ticker: Ticker) => {
        bunny.rotation += 0.1 * ticker.deltaTime;
    });
})();
