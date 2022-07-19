var announcement = document.getElementById('announcement');

if (announcement !== null) {

<<<<<<< HEAD
  var id = announcement.dataset.id;

  Object.keys(localStorage).forEach(function(key) {
    if (/^global-alert-/.test(key)) {
      if (key !== id ) {
        localStorage.removeItem(key);
        document.documentElement.removeAttribute('data-global-alert');
      }
    }
  });

  announcement.addEventListener('closed.bs.alert', () => {
    localStorage.setItem(id, 'closed');
  });

}
=======
  if (localStorage.getItem('announcement') === null ) {

    announcement.classList.remove('d-none');

  }

  announcement.addEventListener('closed.bs.alert', () => {

    localStorage.setItem('announcement', 'closed');

  });

}
>>>>>>> parent of ed7d284 (Deletes most things, ready for staging merge.)
