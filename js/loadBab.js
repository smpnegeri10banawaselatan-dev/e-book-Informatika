function loadBab(url) {
  fetch(url)
    .then(res => res.text())
    .then(html => {
      document.getElementById("kontenBab").innerHTML = html;
    })
    .catch(err => {
      document.getElementById("kontenBab").innerHTML = "<p>Gagal memuat bab.</p>";
    });
}
