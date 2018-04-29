//Created By Sridhar Kulla 
//Student id: 700 673 449

$(function(){
	//Handler for.ready() called.
	$(window).on("load",function(){
		var fileName1 = "Chapter-1.pdf";
		var fileName2= "Chapter-2.pdf";
		var fileName3= "Chapter-3.pdf";
		var fileName4= "Chapter-4.pdf";
		
		
		$("#book1").click(function () {
                $("#pdfFile").dialog({
                    modal: true,
                    title: fileName1,
                    width: 540,
                    height: 450,
                    buttons: {
                        Close: function () {
                            $(this).dialog('close');
                        }
                    },
                    open: function () {
                        var object = "<object data=\"{FileName}\" type=\"application/pdf\" width=\"500px\" height=\"300px\"> </object>";
                       
                        object = object.replace(/{FileName}/g, "Files/" + fileName1);
                        $("#pdfFile").html(object);
                    }
                });
            });
			
		$("#book2").click(function () {
                $("#pdfFile").dialog({
                    modal: true,
                    title: fileName2,
                    width: 540,
                    height: 450,
                    buttons: {
                        Close: function () {
                            $(this).dialog('close');
                        }
                    },
                    open: function () {
                        var object = "<object data=\"{FileName}\" type=\"application/pdf\" width=\"500px\" height=\"300px\"> </object>";
                       
                        object = object.replace(/{FileName}/g, "Files/" + fileName2);
                        $("#pdfFile").html(object);
                    }
                });
            });
		$("#book3").click(function () {
                $("#pdfFile").dialog({
                    modal: true,
                    title: fileName3,
                    width: 540,
                    height: 450,
                    buttons: {
                        Close: function () {
                            $(this).dialog('close');
                        }
                    },
                    open: function () {
                        var object = "<object data=\"{FileName}\" type=\"application/pdf\" width=\"500px\" height=\"300px\"> </object>";
                       
                        object = object.replace(/{FileName}/g, "Files/" + fileName3);
                        $("#pdfFile").html(object);
                    }
                });
            });
			
		$("#book4").click(function () {
                $("#pdfFile").dialog({
                    modal: true,
                    title: fileName4,
                    width: 540,
                    height: 450,
                    buttons: {
                        Close: function () {
                            $(this).dialog('close');
                        }
                    },
                    open: function () {
                        var object = "<object data=\"{FileName}\" type=\"application/pdf\" width=\"500px\" height=\"300px\"> </object>";
                       
                        object = object.replace(/{FileName}/g, "Files/" + fileName4);
                        $("#pdfFile").html(object);
                    }
                });
            });
		
		
	});
});



        