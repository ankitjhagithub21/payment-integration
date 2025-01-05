require('dotenv').config()
const express = require('express')
const cors = require('cors')
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)
const app = express()
const port = 3000

app.use(express.json())
app.use(cors({
    origin:"http://localhost:5173"
}))

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post("/create-checkout-session",async(req,res)=>{
    const {cart} = req.body;

    const line_items = cart.map((item)=> ({
        price_data:{
            currency:"usd",
            product_data:{
                name:item.title,
                images:[item.image]
            },
            unit_amount:item.price*100
        },
        quantity:item.quantity
    }))

    const session = await stripe.checkout.sessions.create({
        payment_method_types:["card"],
        line_items,
        mode:"payment",
        success_url:"http://localhost:5173/success",
        cancel_url:"http://localhost:5173/cancel"
    })

    res.json({id:session.id})


})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

