console.log('Il mio blog')

const express = require('express')
const app = express()
const port = 3000

const posts = [
    {
        title: 'Ciambellone a merenda.',
        content: 'Oggi a merenda ho mangiato il ciambellone che ha preparato mia madre, era delizioso!',
        image: 'public/images/ciambellone.jpeg',
        tags: ['food','home','happy','recipe'],
    },
    {
        title: 'Cracker alla barbabietola!',
        content: 'Oggi ho provato un nuovo esperimento, dei cracker alla barbabietola. Non una grande esperienza!',
        image: 'public/images/cracker_barbabietola.jpeg',
        tags: ['food','home','sad','tasty','wrong','choice'],
    },
    {
        title: 'Pane fritto dolce, che droga! ',
        content: 'Stamattina mi andava di provare una cosa nuova, ho preparato un pane fritto, ma dolce! Sconsiglio se siete a dieta!',
        image: 'public/images/pane_fritto_dolce.jpeg',
        tags: ['food','sweet','candy','recipe'],
    },
    {
        title: 'Riproviamoci: pasta alla barbabietola.',
        content: "Dopo l'esperimento fallito con i cracker alla barbabietola ho voluto provare ancora. Buona, ma ho mangiato di meglio...",
        image: 'public/images/pasta_barbabietola.jpeg',
        tags: ['pasta','home','recipe'],
    },
    {
        title: 'Il dessert perfetto: torta paesana.',
        content: 'Per chiudere in bellezza la settimana ho preparato il mio dolce preferito: la torta paesana!',
        image: 'public/images/torta_paesana.jpeg',
        tags: ['food','cake','happy','weekend'],
    },
]

app.use(express.static('public'))

app.get('/', (req,res) => {
    res.send('Server del mio blog!')
}) 

app.get('/bacheca',(req,res) => {
    res.json(posts)
})

app.listen(port, () => {
    console.log(`Server listening on port: ${port}`);
})

