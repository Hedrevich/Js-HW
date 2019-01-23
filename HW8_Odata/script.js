display = function (data) {
    $("#data").append("<tr><td>" + data.AirlineCode+  "</td><td>" + data.Name + "</td></tr>");
}

$('#count').on('click',function() {
    $.ajax({
        type:'get',
        async:true,
        url:'https://services.odata.org/V4/(S(1pdpon0x4s4l4fndqdzmqgde))/TripPinServiceRW/Airlines/$count',
        success: function(data) {
            alert('Amount of airlines : ' + data );
        },
        error: function (xhr, textStatus, errorMessage) {
            alert(errorMessage);
        }

    })
    
})
$('#expand').on('click',function() {
    $.ajax({
        type:'get',
        async:true,
        url:'https://services.odata.org/V4/(S(1pdpon0x4s4l4fndqdzmqgde))/TripPinServiceRW/Airlines/$expand = Name',
        success: function(data) {
            standartDisplay();
            showData(createAirlineArray(data));
        },
        error: function (xhr, textStatus, errorMessage) {
            alert("Could not find a property named 'Trips' on type 'Microsoft.OData.SampleService.Models.TripPin.Airline'");
        }

    })
    
})
$("#orderby").click(function () {
    $.ajax({
        type: "get",
        async: true,
        url: "https://services.odata.org/V4/(S(1pdpon0x4s4l4fndqdzmqgde))/TripPinServiceRW/Airlines?$orderby=AirlineCode",
        success: function (data) {
            alert("Order by Airline Code!")
            for (var i = 0; i < data.value.length; i++) {
                display(data.value[i]);
            }
        },
        error: function (xhr, textStatus, errorMessage) {
            alert(errorMessage);
        }
    });
})
$("#search").click(function () {
    $.ajax({
        type: "get",
        async: true,
        url: "https://services.odata.org/V4/(S(1pdpon0x4s4l4fndqdzmqgde))/TripPinServiceRW/Airlines?$search = American Airlines",
        success: function (data) {
            alert("American airlines founed!")
            for (var i = 0; i < data.value.length; i++) {
                display(data.value[i]);
            }
        },
        error: function (xhr, textStatus, errorMessage) {
            alert(errorMessage);
        }
    });
})
$("#select").click(function () {
    $.ajax({
        type: "get",
        async: true,
        url: "https://services.odata.org/V4/(S(1pdpon0x4s4l4fndqdzmqgde))/TripPinServiceRW/Airlines?$select = Name",
        success: function (data) {
            alert("Name of airlines selected!")
            for (var i = 0; i < data.value.length; i++) {
                display(data.value[i]);
            }
        },
        error: function (xhr, textStatus, errorMessage) {
            alert(errorMessage);
        }
    });
})
$("#skip").click(function () {
    $.ajax({
        type: "get",
        async: true,
        url: "https://services.odata.org/V4/(S(1pdpon0x4s4l4fndqdzmqgde))/TripPinServiceRW/Airlines?$skip = 10",
        success: function (data) {
            alert("10 Airlines skiped!")
            for (var i = 0; i < data.value.length; i++) {
                display(data.value[i]);
            }
        },
        error: function (xhr, textStatus, errorMessage) {
            alert(errorMessage);
        }
    });
})
$("#top").click(function () {
    $.ajax({
        type: "get",
        async: true,
        url: "https://services.odata.org/V4/(S(1pdpon0x4s4l4fndqdzmqgde))/TripPinServiceRW/Airlines?$top = 10",
        success: function (data) {
            alert("10 First Airlines!")
            for (var i = 0; i < data.value.length; i++) {
                display(data.value[i]);
            }
        },
        error: function (xhr, textStatus, errorMessage) {
            alert(errorMessage);
        }
    });
})

$("#filter").click(function () {
    $.ajax({
        type: "get",
        async: true,
        url: "https://services.odata.org/V4/(S(1pdpon0x4s4l4fndqdzmqgde))/TripPinServiceRW/Airlines?$filter= startswith(Name, 'A')",
        success: function (data) {
            alert("Name of Airlines start with letter 'A'")
            for (var i = 0; i < data.value.length; i++) {
                display(data.value[i]);
            }
        },
        error: function (xhr, textStatus, errorMessage) {
            alert(errorMessage);
        }
    });
})

$("#filter").click(function () {
    $.ajax({
        type: "get",
        async: true,
        url: "https://services.odata.org/V4/(S(1pdpon0x4s4l4fndqdzmqgde))/TripPinServiceRW/Airlines?$filter= startswith(Name, 'A') ",
        success: function (data) {
            alert("Name of Airlines start with letter 'A'")
            for (var i = 0; i < data.value.length; i++) {
                display(data.value[i]);
            }
        },
        error: function (xhr, textStatus, errorMessage) {
            alert(errorMessage);
        }
    });
})

$("#triple-filter").click(function () {
    $.ajax({
        type: "get",
        async: true,
        url: "https://services.odata.org/V4/(S(1pdpon0x4s4l4fndqdzmqgde))/TripPinServiceRW/Airlines?$filter= startswith(Name, 'A')  or endswith(Name,'e') and length(Name) gt 20 ",
        success: function (data) {
            alert("Triple Filter!'")
            for (var i = 0; i < data.value.length; i++) {
                display(data.value[i]);
            }
        },
        error: function (xhr, textStatus, errorMessage) {
            alert(errorMessage);
        }
    });
})
$("#triple-parameter").click(function () {
    $.ajax({
        type: "get",
        async: true,
        url: "https://services.odata.org/V4/(S(1pdpon0x4s4l4fndqdzmqgde))/TripPinServiceRW/Airlines?$ Name,  AirlineCode&&$top=7&& $skip=3 ",
        success: function (data) {
            alert("Triple Filter!'")
            for (var i = 0; i < data.value.length; i++) {
                display(data.value[i]);
            }
        },
        error: function (xhr, textStatus, errorMessage) {
            alert(errorMessage);
        }
    });
})
