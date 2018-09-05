const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');

const racerRoutes = require('./routes/racerRoutes');
const server = express();
const cors = require('cors');
const mw = require('./middleware');

server.use(express.json());
server.use(cors());
server.use(helmet());
server.use(morgan('dev'));

server.use('/api/racers', racerRoutes);
server.use(mw);

server.get('/', (req, res) => {
  res.send('It works mon');
});

const port = 3500;
server.listen(port, function() {
  console.log(`\n=== Web API Listening on http://localhost:${port} mon ===\n`);
});
