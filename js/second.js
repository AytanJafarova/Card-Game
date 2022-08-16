const box=document.querySelector('.box');
console.log(box);
let tScore=document.querySelector('.textS');
const imagesArray=[
    {imgName:'cSharp', img:'../Images/c-sharp.png'},
    {imgName:'cSharp', img:'../Images/c-sharp.png'},
    {imgName:'html', img:'../Images/html.png'},
    {imgName:'html', img:'../Images/html.png'},
    {imgName:'java', img:'../Images/java.png'},
    {imgName:'java', img:'../Images/java.png'},
    {imgName:'joker', img:'../Images/joker.jpg'},
    {imgName:'joker', img:'../Images/joker.jpg'},
    {imgName:'js', img:'../Images/js.png'},
    {imgName:'js', img:'../Images/js.png'},
    {imgName:'php', img:'../Images/php.png'},
    {imgName:'php', img:'../Images/php.png'},
    {imgName:'python', img:'../Images/python.png'},
    {imgName:'python', img:'../Images/python.png'},
    {imgName:'ruby', img:'../Images/ruby.png'},
    {imgName:'ruby', img:'../Images/ruby.png'},
    {imgName:'sql', img:'../Images/sql.png'},
    {imgName:'sql', img:'../Images/sql.png'},
    {imgName:'css', img:'../Images/css.png'},
    {imgName:'css', img:'../Images/css.png'}
];
imagesArray.sort(()=>0.5-Math.random());

var cardClicked=[];
var cardClickedID=[];
var cardsSelected=[];
var score=0;

var correctSound=new Audio("../Sounds/mixkit-positive-notification-951.wav");
var falseSound=new Audio("../Sounds/mixkit-wrong-answer-fail-notification-946.wav");
var winSound=new Audio("../Sounds/mixkit-coin-win-notification-1992.wav.mp3");
var loseSound=new Audio("../Sounds/mixkit-trumpets-and-strings-off-beat-2286.wav");

function turnCards() 
{
    var CardId=this.getAttribute('data-id');
    cardClicked.push(imagesArray[CardId].imgName);
    cardClickedID.push(CardId);
    this.setAttribute('src',imagesArray[CardId].img);

    if (cardClicked.length===2) 
    {
        setTimeout(Checking,300)
    }

}
function Checking() 
{
    var cards=document.querySelectorAll('img');
    const card1ID=cardClickedID[0];
    const card2ID=cardClickedID[1];

    if (cardClickedID[0]===cardClickedID[1]) 
    {
        falseSound.play();
        falseSound.currentTime=0;
        cardClicked=[];
        cardClickedID=[];
        cards[card1ID].setAttribute('src','../Images/aditya-chinchure-IEISYENbXp8-unsplash.jpg');
        cards[card2ID].setAttribute('src','../Images/aditya-chinchure-IEISYENbXp8-unsplash.jpg');
        
    }
    else
    {
        if (cardClicked[0]===cardClicked[1]) 
        {
            correctSound.play();
            correctSound.currentTime=0;
           cards[card1ID].style.visibility='hidden';
           cards[card2ID].style.visibility='hidden';
           cardsSelected.push(cardClicked)
           score+=7;
           tScore.textContent=score;
        }
        else
        {
            if (score===0)
            {
                score=0;
            }
            else
            {
                score-=1;
            }
            // falseSound.play();
            tScore.textContent=score;
            cards[card1ID].setAttribute('src','../Images/aditya-chinchure-IEISYENbXp8-unsplash.jpg');
            cards[card2ID].setAttribute('src','../Images/aditya-chinchure-IEISYENbXp8-unsplash.jpg');

        }
    }
    cardClicked=[];
    cardClickedID=[];

    if (cardsSelected.length===imagesArray.length/2) 
    {
        if (score>=50) 
        {
            winSound.play();
            winSound.currentTime=0;
           var button= document.querySelector('#clickedButton')
           button.setAttribute('data-target','#winModal');
           button.click();

        }
        else
        {
            loseSound.play();
            loseSound.currentTime=0;
            var button= document.querySelector('#clickedButton')
            button.setAttribute('data-target','#loseModal');
            button.click();
        }

    }
}

function createCards()
{
    for (let i = 0; i < imagesArray.length; i++)
    {
        var card=document.createElement('img');
        card.classList.add('cards');
        card.setAttribute('data-id',i);
        card.addEventListener('click', turnCards)
        box.appendChild(card);
    }
}

createCards();

var name=localStorage.getItem('nameUser')
$('#winModal').on('show.bs.modal', function (event) {
    var modal = $(this)
    modal.find('.modal-title').text('Dear ' + name+'!')
    document.querySelector('.winModal>.modal-dialog>.modal-content>.modal-body>#text1').textContent='You get '+ score+' score...'

  })

  $('#loseModal').on('show.bs.modal', function (event) {
    var modal = $(this)
    modal.find('.modal-title').text('Dear ' + name+'!')
    document.querySelector('.loseModal>.modal-dialog>.modal-content>.modal-body>#text1').textContent='You get '+ score+' score...'
  })

