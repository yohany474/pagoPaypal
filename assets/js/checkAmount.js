function consultarMonto() {
  fetch('models/amount.php')
    .then((response) => response.json())
    .then(data => {

      if (data.state === false) {
        window.location.href = "index.php";
      } else if (data.state === true) {
        monto = data.amount;
        return monto;
      }
    })
    .catch(error => {
      alert(JSON.stringify(error));
    });
}