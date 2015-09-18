Meteor.appDemo = {
	_load: function() {
		    /* For demo purposes */
	    var demo = $("<div />").css({
	        position: "fixed",
	        top: "150px",
	        right: "0",
	        background: "rgba(0, 0, 0, 0.7)",
	        "border-radius": "5px 0px 0px 5px",
	        padding: "10px 15px",
	        "font-size": "16px",
	        "z-index": "999999",
	        cursor: "pointer",
	        color: "#ddd"
	    }).html("<i class='fa fa-gear'></i>").addClass("no-print");

	    var demo_settings = $("<div />").css({
	        "padding": "10px",
	        position: "fixed",
	        top: "130px",
	        right: "-200px",
	        background: "#fff",
	        border: "3px solid rgba(0, 0, 0, 0.7)",
	        "width": "200px",
	        "z-index": "999999"
	    }).addClass("no-print");
	    demo_settings.append(
	            "<h4 style='margin: 0 0 5px 0; border-bottom: 1px dashed #ddd; padding-bottom: 3px;'>Layout Options</h4>"
	            + "<div class='form-group no-margin'>"
	            + "<div class='.checkbox'>"
	            + "<label>"
	            + "<input type='checkbox' onchange='change_layout();'/> "
	            + "Fixed layout"
	            + "</label>"
	            + "</div>"
	            + "</div>"
	            );
	    demo_settings.append(
	            "<h4 style='margin: 0 0 5px 0; border-bottom: 1px dashed #ddd; padding-bottom: 3px;'>Skins</h4>"
	            + "<div class='form-group no-margin'>"
	            + "<div class='.radio'>"
	            + "<label>"
	            + "<input name='skins' type='radio' onchange='change_skin(\"skin-black\");' /> "
	            + "Black"
	            + "</label>"
	            + "</div>"
	            + "</div>"

	            + "<div class='form-group no-margin'>"
	            + "<div class='.radio'>"
	            + "<label>"
	            + "<input name='skins' type='radio' onchange='change_skin(\"skin-blue\");' checked='checked'/> "
	            + "Blue"
	            + "</label>"
	            + "</div>"
	            + "</div>"
	            );

	    demo.click(function() {
	        if (!$(this).hasClass("open")) {
	            $(this).css("right", "200px");
	            demo_settings.css("right", "0");
	            $(this).addClass("open");
	        } else {
	            $(this).css("right", "0");
	            demo_settings.css("right", "-200px");
	            $(this).removeClass("open")
	        }
	    });

	    $("body").append(demo);
	    $("body").append(demo_settings);
	},
	_appendData: function() {

	    //Make the dashboard widgets sortable Using jquery UI
	    $(".connectedSortable").sortable({
	        placeholder: "sort-highlight",
	        connectWith: ".connectedSortable",
	        handle: ".box-header, .nav-tabs",
	        forcePlaceholderSize: true,
	        zIndex: 999999
	    }).disableSelection();
	    $(".box-header, .nav-tabs").css("cursor","move");
	    //jQuery UI sortable for the todo list
	    $(".todo-list").sortable({
	        placeholder: "sort-highlight",
	        handle: ".handle",
	        forcePlaceholderSize: true,
	        zIndex: 999999
	    }).disableSelection();;

	    //bootstrap WYSIHTML5 - text editor
	    $(".textarea").wysihtml5();

	    $('.daterange').daterangepicker(
	            {
	                ranges: {
	                    'Today': [moment(), moment()],
	                    'Yesterday': [moment().subtract('days', 1), moment().subtract('days', 1)],
	                    'Last 7 Days': [moment().subtract('days', 6), moment()],
	                    'Last 30 Days': [moment().subtract('days', 29), moment()],
	                    'This Month': [moment().startOf('month'), moment().endOf('month')],
	                    'Last Month': [moment().subtract('month', 1).startOf('month'), moment().subtract('month', 1).endOf('month')]
	                },
	                startDate: moment().subtract('days', 29),
	                endDate: moment()
	            },
	    function(start, end) {
	        alert("You chose: " + start.format('MMMM D, YYYY') + ' - ' + end.format('MMMM D, YYYY'));
	    });

	    /* jQueryKnob */
	    $(".knob").knob();

	    //jvectormap data
	    var visitorsData = {
	        "US": 398, //USA
	        "SA": 400, //Saudi Arabia
	        "CA": 1000, //Canada
	        "DE": 500, //Germany
	        "FR": 760, //France
	        "CN": 300, //China
	        "AU": 700, //Australia
	        "BR": 600, //Brazil
	        "IN": 800, //India
	        "GB": 320, //Great Britain
	        "RU": 3000 //Russia
	    };
	    //World map by jvectormap
	    $('#world-map').vectorMap({
	        map: 'world_mill_en',
	        backgroundColor: "#fff",
	        regionStyle: {
	            initial: {
	                fill: '#e4e4e4',
	                "fill-opacity": 1,
	                stroke: 'none',
	                "stroke-width": 0,
	                "stroke-opacity": 1
	            }
	        },
	        series: {
	            regions: [{
	                    values: visitorsData,
	                    scale: ["#3c8dbc", "#2D79A6"], //['#3E5E6B', '#A6BAC2'],
	                    normalizeFunction: 'polynomial'
	                }]
	        },
	        onRegionLabelShow: function(e, el, code) {
	            if (typeof visitorsData[code] != "undefined")
	                el.html(el.html() + ': ' + visitorsData[code] + ' new visitors');
	        }
	    });

	    //Sparkline charts
	    var myvalues = [15, 19, 20, -22, -33, 27, 31, 27, 19, 30, 21];
	    $('#sparkline-1').sparkline(myvalues, {
	        type: 'bar',
	        barColor: '#00a65a',
	        negBarColor: "#f56954",
	        height: '20px'
	    });
	    myvalues = [15, 19, 20, 22, -2, -10, -7, 27, 19, 30, 21];
	    $('#sparkline-2').sparkline(myvalues, {
	        type: 'bar',
	        barColor: '#00a65a',
	        negBarColor: "#f56954",
	        height: '20px'
	    });
	    myvalues = [15, -19, -20, 22, 33, 27, 31, 27, 19, 30, 21];
	    $('#sparkline-3').sparkline(myvalues, {
	        type: 'bar',
	        barColor: '#00a65a',
	        negBarColor: "#f56954",
	        height: '20px'
	    });
	    myvalues = [15, 19, 20, 22, 33, -27, -31, 27, 19, 30, 21];
	    $('#sparkline-4').sparkline(myvalues, {
	        type: 'bar',
	        barColor: '#00a65a',
	        negBarColor: "#f56954",
	        height: '20px'
	    });
	    myvalues = [15, 19, 20, 22, 33, 27, 31, -27, -19, 30, 21];
	    $('#sparkline-5').sparkline(myvalues, {
	        type: 'bar',
	        barColor: '#00a65a',
	        negBarColor: "#f56954",
	        height: '20px'
	    });
	    myvalues = [15, 19, -20, 22, -13, 27, 31, 27, 19, 30, 21];
	    $('#sparkline-6').sparkline(myvalues, {
	        type: 'bar',
	        barColor: '#00a65a',
	        negBarColor: "#f56954",
	        height: '20px'
	    });

	    //Date for the calendar events (dummy data)
	    var date = new Date();
	    var d = date.getDate(),
	            m = date.getMonth(),
	            y = date.getFullYear();

	    //Calendar
	    $('#calendar').fullCalendar({
	        editable: true, //Enable drag and drop
	        events: [
	            {
	                title: 'All Day Event',
	                start: new Date(y, m, 1),
	                backgroundColor: "#3c8dbc", //light-blue 
	                borderColor: "#3c8dbc" //light-blue
	            },
	            {
	                title: 'Long Event',
	                start: new Date(y, m, d - 5),
	                end: new Date(y, m, d - 2),
	                backgroundColor: "#f39c12", //yellow
	                borderColor: "#f39c12" //yellow
	            },
	            {
	                title: 'Meeting',
	                start: new Date(y, m, d, 10, 30),
	                allDay: false,
	                backgroundColor: "#0073b7", //Blue
	                borderColor: "#0073b7" //Blue
	            },
	            {
	                title: 'Lunch',
	                start: new Date(y, m, d, 12, 0),
	                end: new Date(y, m, d, 14, 0),
	                allDay: false,
	                backgroundColor: "#00c0ef", //Info (aqua)
	                borderColor: "#00c0ef" //Info (aqua)
	            },
	            {
	                title: 'Birthday Party',
	                start: new Date(y, m, d + 1, 19, 0),
	                end: new Date(y, m, d + 1, 22, 30),
	                allDay: false,
	                backgroundColor: "#00a65a", //Success (green)
	                borderColor: "#00a65a" //Success (green)
	            },
	            {
	                title: 'Click for Google',
	                start: new Date(y, m, 28),
	                end: new Date(y, m, 29),
	                url: 'http://google.com/',
	                backgroundColor: "#f56954", //red
	                borderColor: "#f56954" //red
	            }
	        ],
	        buttonText: {//This is to add icons to the visible buttons
	            prev: "<span class='fa fa-caret-left'></span>",
	            next: "<span class='fa fa-caret-right'></span>",
	            today: 'today',
	            month: 'month',
	            week: 'week',
	            day: 'day'
	        },
	        header: {
	            left: 'title',
	            center: '',
	            right: 'prev,next'
	        }
	    });

	    //SLIMSCROLL FOR CHAT WIDGET
	    $('#chat-box').slimScroll({
	        height: '250px'
	    });

	    /* Morris.js Charts */
	    // Sales chart
	    var area = new Morris.Area({
	        element: 'revenue-chart',
	        resize: true,
	        data: [
	            {y: '2011 Q1', item1: 2666, item2: 2666},
	            {y: '2011 Q2', item1: 2778, item2: 2294},
	            {y: '2011 Q3', item1: 4912, item2: 1969},
	            {y: '2011 Q4', item1: 3767, item2: 3597},
	            {y: '2012 Q1', item1: 6810, item2: 1914},
	            {y: '2012 Q2', item1: 5670, item2: 4293},
	            {y: '2012 Q3', item1: 4820, item2: 3795},
	            {y: '2012 Q4', item1: 15073, item2: 5967},
	            {y: '2013 Q1', item1: 10687, item2: 4460},
	            {y: '2013 Q2', item1: 8432, item2: 5713}
	        ],
	        xkey: 'y',
	        ykeys: ['item1', 'item2'],
	        labels: ['Item 1', 'Item 2'],
	        lineColors: ['#a0d0e0', '#3c8dbc'],
	        hideHover: 'auto'
	    });
	    //Donut Chart
	    var donut = new Morris.Donut({
	        element: 'sales-chart',
	        resize: true,
	        colors: ["#3c8dbc", "#f56954", "#00a65a"],
	        data: [
	            {label: "Download Sales", value: 12},
	            {label: "In-Store Sales", value: 30},
	            {label: "Mail-Order Sales", value: 20}
	        ],
	        hideHover: 'auto'
	    });
	    //Bar chart
	    var bar = new Morris.Bar({
	        element: 'bar-chart',
	        resize: true,
	        data: [
	            {y: '2006', a: 100, b: 90},
	            {y: '2007', a: 75, b: 65},
	            {y: '2008', a: 50, b: 40},
	            {y: '2009', a: 75, b: 65},
	            {y: '2010', a: 50, b: 40},
	            {y: '2011', a: 75, b: 65},
	            {y: '2012', a: 100, b: 90}
	        ],
	        barColors: ['#00a65a', '#f56954'],
	        xkey: 'y',
	        ykeys: ['a', 'b'],
	        labels: ['CPU', 'DISK'],
	        hideHover: 'auto'
	    });
	    //Fix for charts under tabs
	    $('.box ul.nav a').on('shown.bs.tab', function(e) {
	        area.redraw();
	        donut.redraw();
	    });


	    /* BOX REFRESH PLUGIN EXAMPLE (usage with morris charts) */
	    $("#loading-example").boxRefresh({
	        source: "ajax/dashboard-boxrefresh-demo.php",
	        onLoadDone: function(box) {
	            bar = new Morris.Bar({
	                element: 'bar-chart',
	                resize: true,
	                data: [
	                    {y: '2006', a: 100, b: 90},
	                    {y: '2007', a: 75, b: 65},
	                    {y: '2008', a: 50, b: 40},
	                    {y: '2009', a: 75, b: 65},
	                    {y: '2010', a: 50, b: 40},
	                    {y: '2011', a: 75, b: 65},
	                    {y: '2012', a: 100, b: 90}
	                ],
	                barColors: ['#00a65a', '#f56954'],
	                xkey: 'y',
	                ykeys: ['a', 'b'],
	                labels: ['CPU', 'DISK'],
	                hideHover: 'auto'
	            });
	        }
	    });

	    /* The todo list plugin */
	    $(".todo-list").todolist({
	        onCheck: function(ele) {
	            //console.log("The element has been checked")
	        },
	        onUncheck: function(ele) {
	            //console.log("The element has been unchecked")
	        }
	    });

	}
};