const quotes = [
    {
        quote: "Do what you can, with what you have, where you are.",
        author: "Theodore Roosevelt",
    },
    {
        quote: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
        author: "Winston Churchill",
    },
    {
        quote: "In the middle of every difficulty lies opportunity.",
        author: "Albert Einstein",
    },
    {
        quote: "It does not matter how slowly you go as long as you do not stop.",
        author: "Confucius",
    },
    {
        quote: "The only way to do great work is to love what you do.",
        author: "Steve Jobs",
    },
    {
        quote: "Believe you can and you're halfway there.",
        author: "Theodore Roosevelt",
    },
    {
        quote: "Opportunities don't happen. You create them.",
        author: "Chris Grosser",
    },
    {
        quote: "Act as if what you do makes a difference. It does.",
        author: "William James",
    },
    {
        quote: "The best way to predict the future is to create it.",
        author: "Peter Drucker",
    },
    {
        quote: "Your time is limited, so don’t waste it living someone else’s life.",
        author: "Steve Jobs",
    }
]

const quote = document.querySelector("#quote span:first-child")
const author = document.querySelector("#quote span:last-child")

const todaysQuote = quotes[Math.floor(Math.random()*quotes.length)]

quote.innerText = todaysQuote.quote
author.innerText = todaysQuote.author