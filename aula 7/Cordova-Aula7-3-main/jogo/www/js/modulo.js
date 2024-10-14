export default async function inicio() {
    // Create a PixiJS application.
    const app = new PIXI.Application();

    // Initialize the application.
    await app.init({ background: '#1099bb', resizeTo: window });

    // Then add the application's canvas to the DOM body.
    document.body.appendChild(app.view); // Use app.view em vez de app.canvas

    const texture = await PIXI.Assets.load('img/bunny.png');

    const bunny = new PIXI.Sprite(texture);
    app.stage.addChild(bunny);

    bunny.anchor.set(0.5);

    // Position the bunny in the center of the screen.
    bunny.x = app.screen.width / 2;
    bunny.y = app.screen.height / 2;

    // Add a ticker to animate the bunny's rotation.
    app.ticker.add(() => {
        bunny.rotation += 0.01; // Gira o coelho em radianos (ajuste o valor para mudar a velocidade)
    });
}
