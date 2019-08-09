import express from 'express';
import routes from './routes';

const app = express();
app.use(express.json());

app.use('/api/v1', routes);

//catch 404 routes
app.use('*', (req, res) => {
  res.status(404).json({ status: 'Route Not Found!' });
});
app.use(express.urlencoded({ extended: false }));
const PORT= process.env.PORT || 4000;   
app.listen(PORT, () => console.log(`The server started on port ${PORT}`));

export default app;