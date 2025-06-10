const app = require('./app');

app.listen(app.get('port'), () => {
    console.log("servidor escuchando por el pueto ", app.get("port"));
});