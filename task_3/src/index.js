import './sass/main.scss'
import logo from './assets/Logo.svg'
import location from './assets/Icon (1).svg'
import exit from './assets/Icon (2).svg'
import dzen from './assets/Icon (3).svg'
import twit from './assets/Icon (4).svg'
import vk from './assets/Icon (5).svg'
import telegram from './assets/Icon (6).svg'
import clMstr from './assets/Icon (7).svg'
import wallet from './assets/wallet-dynamic-gradient.png'
import './assets/Logo-alfa_bank.svg'
import './assets/img-car.png'
import './assets/Logo_all-diposit.svg'



const img_loc= document.getElementById('img_loc');
const img_exit= document.getElementById('img_exit');
const img_dzen= document.getElementById('img_dzen');
const img_twit= document.getElementById('img_twit');
const img_vk= document.getElementById('img_vk');
const img_tel= document.getElementById('img_tel');
const img_clMstr= document.getElementById('img_clMstr');
const img_wallet= document.getElementById('img_wallet');



img_loc.src=location;
img_exit.src=exit;
img_dzen.src=dzen;
img_twit.src=twit;
img_vk.src=vk;
img_tel.src=telegram;
img_clMstr.src=clMstr;
img_wallet.src=wallet;


const file1 = require('./js/file1.js');