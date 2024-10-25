const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { MongoClient, ObjectId } = require('mongodb');

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(bodyParser.json());

const uri = 'mongodb+srv://kalish:kali1234@mycluster.zsrwf.mongodb.net/?retryWrites=true&w=majority&appName=MyCluster';
const client = new MongoClient(uri);

let faqsCollection;

async function run() {
    try {
        await client.connect();
        const database = client.db('vehical');
        faqsCollection = database.collection('faqs');
    } catch (err) {
        console.error('Error connecting to MongoDB:', err);
    }
}

run().catch(console.dir);

app.post('/chatbot', async (req, res) => {
    const userInput = req.body.message.toLowerCase();
    let responseMessage = "Sorry, I didn't understand that. Can you ask something else?";

    try {
        const faq = await faqsCollection.findOne({ question: { $regex: userInput, $options: 'i' } });
        if (faq) {
            responseMessage = faq.answer;
        }
    } catch (err) {
        console.error('Error retrieving FAQ:', err);
        return res.status(500).json({ error: "There was an error retrieving the FAQ." });
    }

    res.json({ response: responseMessage });
});

app.get('/api/cars', async (req, res) => {
    try {
        const database = client.db('vehical');
        const collection = database.collection('data');
        
        const cars = await collection.find({}).toArray();
        res.json(cars);
    } catch (err) {
        console.error('Error fetching cars data:', err);
        res.status(500).json({ error: 'Failed to fetch cars data' });
    }
});

app.get('/car/:id', async (req, res) => {
    try {
        const carId = parseInt(req.params.id, 10);
        if (isNaN(carId)) {
            return res.status(400).json({ error: 'Invalid car ID format' });
        }

        const database = client.db('vehical');
        const collection = database.collection('data');

        const car = await collection.findOne({ id: carId });
        if (!car) {
            return res.status(404).json({ error: 'Car not found' });
        }

        res.json(car); 
    } catch (err) {
        console.error('Error fetching car details:', err);
        res.status(500).json({ error: 'Failed to fetch car details' });
    }
});

app.get('/', (req, res) => {
    res.send('Express backend is running!');
});

process.on('SIGINT', async () => {
    await client.close();
    process.exit(0);
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});