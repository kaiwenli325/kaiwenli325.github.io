var scripts = document.getElementsByTagName('script');

function showPubs(id) {
  if (id == 0) {
    document.getElementById('notes').innerHTML = document.getElementById('all_notes').innerHTML;
  } else if (id == 1) {
    document.getElementById('notes').innerHTML = document.getElementById('pubs_by_date').innerHTML;
  } else {
    document.getElementById('notes').innerHTML = document.getElementById('pubs_by_topic').innerHTML;
  }
}

