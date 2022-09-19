// jshint esversion: 8

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function runSelect(event) {
  event.preventDefault();

  // Scroll to the bottom a few times to try to get all coupons to show up.
  for (let i = 0; i < 7; ++i) {
    window.scrollTo(0, document.body.scrollHeight);
    await sleep(300);
  }

  let coupons = document.getElementsByTagName('cvs-coupon-container');
  console.log(coupons.length + ' coupons found');

  let clicked = 0;
  for (let coupon of coupons) {
    // let shadow = coupon.shadowRoot;
    // if (shadow) {
      // Click on "send to card" buttons.
      let send2crd = coupon.querySelectorAll('button.coupon-action');
      for (let btn of send2crd) {
        // console.log(btn);
        btn.scrollIntoView();
        btn.click();
        clicked++;
        await sleep(50);
      }
    // }
  }

  console.log(clicked + ' coupons clicked');

  // Scroll back to the top.
  window.scrollTo(0, 0);
}

function insertButton(btn) {
  function waitForSite() {
    let targetElem = document.getElementsByClassName('coupon-list-container');
    if (targetElem != null && targetElem[0] !== undefined) {
      clearInterval(waitForSiteTimer);
      targetElem[0].insertBefore(btn, targetElem[0].firstChild);
    }
  }

  // Wait for site to finish loading the coupon list container before inserting button.
  let waitForSiteTimer = setInterval(waitForSite, 100);
}

function init() {
  // Make a new button for our action.
  let newbutton = document.createElement('button');
  newbutton.name = 'send_all_to_card';
  newbutton.id = 'send_all_to_card';
  newbutton.style.cssText = 'background-color: #E82A24; color: #fff; font-weight: 700; margin: 5px; border: none; padding: 6px 10px; cursor: pointer;';
  newbutton.appendChild(document.createTextNode('Send All To Card'));
  newbutton.addEventListener('click', runSelect);

  insertButton(newbutton);
}

init();

// -- The End --
