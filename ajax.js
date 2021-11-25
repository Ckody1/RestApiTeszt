class MyAjax {
  constructor() {}

  beolvas(apivegpont, tomb, myCallBack) {
    tomb.splice(0, tomb.length);
    $.ajax({
      url: apivegpont,
      type: "GET",
      success: function (result) {
        result.forEach((element) => {
          tomb.push(element);
        });

        console.log(tomb);
        myCallBack(tomb);
      },
    });
  }

  postadat(apivegpont, adat) {
    $.ajax({
      url: apivegpont,
      type: "POST",
      data: adat,
      success: function (result) {
        console.log(result);
      },
    });
  }

  deleteadat(apivegpont, id) {
    $.ajax({
      url: apivegpont+"/"+id,
      type: "DELETE",
      success: function (result) {
        console.log(result);
      },
    });
  }


  putadat(apivegpont, adat, id) {
    $.ajax({
      url: apivegpont+"/"+id,
      type: "PUT",
      data: adat,
      success: function (result) {
        console.log(result);
      },
    });
  }
}
