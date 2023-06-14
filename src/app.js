const express = require('express');

const app = express();

const { loginRouter, userRouter, categoryRoutes, blogPostsRoutes } = require('./routes');

// não remova ou mova esse endpoint
app.get('/', (_request, response) => {
  response.send();
});

app.use(express.json());
app.use('/login', loginRouter);
app.use('/user', userRouter);
app.use('/categories', categoryRoutes);
app.use('/post', blogPostsRoutes);
// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
