function runSelect(event) {
  event.preventDefault();

  // Click on every "load to card" button.
  var load2crd = document.getElementsByClassName('send_to_card_coupon');
  for (var btn of load2crd) {
    btn.click();
  }
}

function insertButton(btn) {
  function waitForSite() {
    var app_container = document.getElementById('coupon_filter');
    if (app_container != null) {
      clearInterval(waitForSiteTimer);
      app_container.insertBefore(btn, app_container.firstChild);
    }
  }

  // Wait for site to finish loading the app container before inserting button.
  var waitForSiteTimer = setInterval(waitForSite, 100);
}

function init() {
  // Make a new button for our action.
  var newbutton = document.createElement('button');
  newbutton.name = 'send_all_to_card';
  newbutton.id = 'send_all_to_card';
  newbutton.style.cssText = 'background-color: #E82A24; color: #fff; font-weight: 700; border: none; padding: 6px 10px; cursor: pointer;';
  newbutton.appendChild(document.createTextNode('Send All To Card'));
  newbutton.addEventListener('click', runSelect);

  insertButton(newbutton);
}

init();

// -- The End --
