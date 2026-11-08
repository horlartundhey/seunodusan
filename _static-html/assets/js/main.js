(function () {
  var btn = document.querySelector('.menu-btn');
  var nav = document.getElementById('site-nav');
  if (btn && nav) {
    btn.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
      btn.textContent = open ? 'Close' : 'Menu';
    });
  }
  var y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();

  // Contact form: opens the visitor's email app with the message filled in.
  var form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var d = new FormData(form);
      var subject = encodeURIComponent('Website enquiry from ' + (d.get('name') || ''));
      var body = encodeURIComponent((d.get('message') || '') + '\n\n' + (d.get('name') || '') + '\n' + (d.get('email') || ''));
      window.location.href = 'mailto:seunodusanya@hotmail.co.uk?subject=' + subject + '&body=' + body;
    });
  }
})();
