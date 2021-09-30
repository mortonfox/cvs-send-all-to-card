// jshint esversion: 6

function runSelect(event) {
  event.preventDefault();

  // Click on every "send to card" button.
  let send2crd = document.getElementsByClassName('action-items');
  console.log(send2crd.length + ' coupons found');

  let clicked = 0;
  for (let btn of send2crd) {
    btn.click();
    clicked++;
  }
  console.log(clicked + ' coupons clicked');
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
