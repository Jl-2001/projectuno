import express from 'express';
const app = express();
import bodyParser from 'body-parser';
import pro
const PORT = process.env.PORT || 5001;

app.use(bodyParser.json())
app.use(express.static('build'))

app.use('/api/projectuno', projectRouter)

app.listen(PORT, () => {
    console.log('listening on port: ', PORT)
})