function output(event){
    console.log(event.target.parentNode.parentNode.parentNode.querySelector(".card-header__text").textContent);
}

function CompletionCard(ArrElements){
    for (const El of ArrElements){
        let card=document.getElementById(El.id).querySelector(".deposit-card_alignment")
        card.querySelector(".card-header__text").textContent=El.name;

        const cardBody__text=card.querySelectorAll(".card-body-text-row .card-body-text-row__el2 ")
        
        const ArrcardBody__text=Array.from(cardBody__text);
        ArrcardBody__text[0].textContent="от "+String(El.rate)+"%";
        ArrcardBody__text[1].textContent=El.period;
        ArrcardBody__text[2].textContent=String(El.amount.min)+"-"+String(El.amount.max)+" ₽";
    }

}


document.querySelectorAll(".card-button").forEach((el) => { el.addEventListener('click', output);});

const ArrCards= [
    {
        id: 1,
        name: "Очень длинное предложение...",
        logo: "Alfa-bank",
        rate: 10,
        period: "200 дн.",
        amount: {
            min: 300,
            max:10000
        },
        url: ""
    },
    {
        id: 2,
        name: "Очень длинное предложене...",
        logo: "Alfa-bank",
        rate: 20,
        period: "300 дн.",
        amount: {
            min: 3000,
            max:400000
        },
        url: ""
    }

]

CompletionCard(ArrCards);