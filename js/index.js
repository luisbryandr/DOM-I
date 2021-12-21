const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

//nav-Bar [done]
const nav = document.querySelector('nav');
let aTag1 = nav.querySelector('a:nth-of-type(1)');
let aTag2 = nav.querySelector('a:nth-of-type(2)');
let aTag3 = nav.querySelector('a:nth-of-type(3)');
let aTag4 = nav.querySelector('a:nth-of-type(4)');
let aTag5 = nav.querySelector('a:nth-of-type(5)');
let aTag6 = nav.querySelector('a:nth-of-type(6)');

aTag1.textContent = siteContent['nav']['nav-item-1']
aTag2.textContent = siteContent['nav']['nav-item-2']
aTag3.textContent = siteContent['nav']['nav-item-3']
aTag4.textContent = siteContent['nav']['nav-item-4']
aTag5.textContent = siteContent['nav']['nav-item-5']
aTag6.textContent = siteContent['nav']['nav-item-6']

//cta - [done -minus br inside h1]
let cta = document.querySelector('.cta');
let title = cta.querySelector('h1');
title.textContent = siteContent['cta']['h1'];
// let br = document.createElement('br');
// title.appendChild(br);  circling back to do the br
// console.log(title);
let ctaButton = cta.querySelector('button');
ctaButton.textContent = siteContent['cta']['button'];

let ctaImage = cta.querySelector('img');
ctaImage.setAttribute('src', siteContent['cta']['img-src']);

//main-content -- []
let mainContent = document.querySelector('.main-content');

let subHeading1 = mainContent.querySelector('h4:nth-of-type(1)');
let p1 = mainContent.querySelector('p:nth-of-type(1)')
subHeading1.textContent = siteContent['main-content']['features-h4'];
p1.textContent = siteContent['main-content']['features-content'];

// let subHeading2 = subHeading1.nextElementSibling;
// let p2 = mainContent.querySelector('p:nth-of-type(2)');
// console.log(subHeading2)
// subHeading2.textContent = siteContent['main-content']['about-content']
// let textContent = document.querySelectorAll('.text-content');
// const textContentArray = Array.from(textContent)
// console.log(textContentArray)

// console.log(textContentArray[1].nextElementSibling);//null

let subHeadingsAll = document.querySelectorAll('h4');
const subHeadsArray = Array.from(subHeadingsAll)
//Services - I could store services reference inside a variable and do the same for each sub heading and their paragraph but I'm juust going to save my coding fingers atm and just get the job done
// i would that by this const servicesHeading = subHeadsArray[1]
//then just use servicesHeading.textContent & .nextElementSibling to render the contnetn I want

subHeadsArray[1].textContent = siteContent['main-content']['about-h4']
subHeadsArray[1].nextElementSibling.textContent = siteContent['main-content']['about-content'];

subHeadsArray[2].textContent = siteContent['main-content']['services-h4'];
subHeadsArray[2].nextElementSibling.textContent= siteContent['main-content']['services-content']

subHeadsArray[3].textContent = siteContent['main-content']['product-h4'];
subHeadsArray[3].nextElementSibling.textContent= siteContent['main-content']['product-content']


subHeadsArray[4].textContent = siteContent['main-content']['vision-h4'];
subHeadsArray[4].nextElementSibling.textContent= siteContent['main-content']['vision-content']

let middleImg = document.getElementById('middle-img');
middleImg.setAttribute('src', siteContent['main-content']['middle-img-src']);


//contact
let contact = document.querySelector('.contact');

let contactHeading = contact.querySelector('h4');
contactHeading.textContent = siteContent['contact']['contact-h4'];

let address = contactHeading.nextElementSibling;
address.textContent = siteContent['contact']['address'];

let phone = address.nextElementSibling;
phone.textContent = siteContent['contact']['phone'];

let email = phone.nextElementSibling;
email.textContent = siteContent['contact']['email'];

//footer
let footer = document.querySelector('footer');
let copyright = footer.querySelector('p');
copyright = siteContent['footer']['copyright'];



const dataLink = document.createElement('a');
dataLink.textContent = 'Data';
dataLink.href = '#'

nav.prepend(dataLink)

const awesomeLink = document.createElement('a');
awesomeLink.textContent = 'Awesomeness';
dataLink.href = '#'

nav.appendChild(awesomeLink)

nav.style.color = 'green';