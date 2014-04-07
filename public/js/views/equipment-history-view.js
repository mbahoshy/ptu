pm.equipmentHistoryView = Backbone.View.extend ({
        tagName: 'div',
        id: 'equipment_history_container',
        template: _.template("Equipment History"),
        optionstemplate:_.template("<div class='history-options'><span id='ticket_view'>Ticket View</span><span id='part_view'>Part View</span></div>"),
        containertemplate: _.template("<div id='#ticket_container'></div>"),
        events: {
        	'click #part_view': 'partView',
        	'click #ticket_view': 'ticketView'
        },
        initialize: function (tickets) {
			this.$el.append( this.template);
			this.$el.append( this.optionstemplate);
			this.$el.append( this.containertemplate);
			this.tickets = tickets;
			this.ticketView();
        },
        createView: function (model) {
        	var eh = new pm.equipmentHistoryPM (model);
        	this.$el.append(eh.$el);
        },
        ticketView: function () {
			this.tickets.forEach(this.createView, this);
			$('#page').append(this.$el);
			// $('#ticket_container').append(this.$el);
        },
        partView: function () {
        	console.dir(this.tickets);
        	$('.equipment-history-item').remove();
            var parthistory1 = new pm.equipmentPartHistory (this.tickets);
        }

});


pm.equipmentHistoryPM = Backbone.View.extend ({
        tagName: 'div',
        className: 'equipment-history-item',
        gas: _.template(pm.templates.gasPMView),
	    electric: _.template(pm.templates.electricPMView),
	    ac: _.template(pm.templates.acPMView),
	    heatpump: _.template(pm.templates.heatpumpPMView),
	    airhandler: _.template(pm.templates.airhandlerPMView),
   		split: _.template(pm.templates.splitPMView),
        initialize: function (ticket) {
			this.$el.append(this[ticket.type](ticket));
        }
});

pm.equipmentPartHistory = Backbone.View.extend ({
        tagName: 'div',
        className: 'equipment-history-item',
        template: _.template('<div id="chart_div"></div>'),
        initialize: function (tickets) {
            // var dates = _.pluck(tickets, 'date');
            var dates = _.map(tickets, function (data) {
                var lowgas,
                    highgas;
                if (data.lowgas == '') {
                    lowgas=0;
                } else {
                    lowgas = parseFloat(data.lowgas);
                }

                if (data.highgas == '') {
                    highgas=0;
                } else {
                    highgas = parseFloat(data.highgas);
                }
                return [new Date(data.date), lowgas, highgas];
            });

            var dataarray = ['Date', 'lowgas', 'highgas'];
            // dates.unshift(dataarray);
            console.dir(dates);
            this.$el.append(this.template);
            $('#page').append(this.$el);
            this.drawGraph(dates);
            // console.dir(dates[0][0].typeof());
        },
        drawGraph: function (chartdata) {
              // google.setOnLoadCallback(drawChart);
              drawChart(chartdata);
              function drawChart(chartdata) {
                var dataTable = new google.visualization.DataTable();
                
                dataTable.addColumn('date', 'Date');
                dataTable.addColumn('number', 'lowgas');
                dataTable.addColumn('number', 'highgas');
                dataTable.addRows(chartdata);
                console.dir(chartdata);
                // var data = google.visualization.arrayToDataTable(chartdata);                

                // console.dir(data);

                // var dataView = new google.visualization.DataView(dataTable);
                // dataView.setColumns([{calc: function(data, row) { return data.getFormattedValue(row, 0); }, type:'string'}, 1]);

                var chart = new google.visualization.AreaChart(document.getElementById('chart_div'));
                var options = {
                    legend: 'none',
                    pointSize: 5
                };
                chart.draw(dataTable, options);

              }
        }
});