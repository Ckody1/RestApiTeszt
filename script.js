$(function () {
  const myAjax = new MyAjax();
  const konyvek = [];
  let alapapi = "http://localhost:3000/konyvek";
  let apivegpont = "http://localhost:3000/konyvek";
  let szuro = "?tipus=vers";
  let rendezes = "?_sort=ar&_order=desc";
  let csokkenoE = false;
  /* apivegpont += szuro; */




  $("#rendezes").on("click", () => {
    if (csokkenoE) {
      $("#rendezes").html("csökkenő");
      rendezes = "?_sort=ar&_order=desc";
      csokkenoE = false;
    } else {
      $("#rendezes").html("növekvő");
      rendezes = "?_sort=ar&_order=asc";

      csokkenoE = true;
    }
    apivegpont += rendezes;
    myAjax.beolvas(apivegpont, konyvek, megjelenit);
    apivegpont = alapapi;
  });





  $("#ujadat").on("click", () => {
    let ujadat = {
        szerzo: $("#szerzo").val(),
        cim: $("#cim").val(),
        ar: $("#ar").val(),
        tipus: $("#tipus").val()
      };
      myAjax.postadat(apivegpont, ujadat); 
  });

  $("#torol").on("click", () => {
      myAjax.deleteadat(apivegpont, $("#adatid").val()); 
  });


  $("#modosit").on("click", () => {
    let ujadat = {
        szerzo: $("#szerzo").val(),
        cim: $("#cim").val(),
        ar: $("#ar").val(),
        tipus: $("#tipus").val()
      };
      myAjax.putadat(apivegpont, ujadat, $("#adatid").val()); 
  });




  $("#keres").on("keyup", () => {
    let apivegpont = "http://localhost:3000/konyvek";
    szuro = "?q=" + $("#keres").val();
    apivegpont += szuro;
    console.log(apivegpont);
    myAjax.beolvas(apivegpont, konyvek, megjelenit);
  });





  myAjax.beolvas(apivegpont, konyvek, megjelenit);

  function megjelenit(tomb) {
    const szuloElem = $(".megjelenit");
    let sablon = "";
    tomb.forEach((elem) => {
      sablon += `
            <div class="alap">
            <h3>${elem.szerzo}</h3>
            <h4 class="cim">${elem.cim}</h4>
            <p>${elem.tipus}</p>
            <span class="ar">${elem.ar}</span>
            </div>`;
    });
    szuloElem.html(sablon);
  }

  
});
