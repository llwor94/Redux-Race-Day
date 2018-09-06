const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');

const racerRoutes = require('./routes/racerRoutes');
const distanceRoutes = require('./routes/distanceRoutes');
const ageGroupRoutes = require('./routes/ageGroupRoutes');
const server = express();
const cors = require('cors');
const mw = require('./middleware');

server.use(express.json());
server.use(cors());
server.use(helmet());
server.use(morgan('dev'));

server.use('/api/racers', racerRoutes);
server.use('/api/distances', distanceRoutes);
server.use('/api/ages', ageGroupRoutes);
server.use(mw);

server.get('/', (req, res) => {
  res.send('It works mon');
});

const port = 3500;
server.listen(port, function() {
  console.log(`\n=== Web API Listening on http://localhost:${port} mon ===\n`);
});
