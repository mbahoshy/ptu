pm.templates.gasPMView = "\
	<div class='pmview'>\
			<div><label>Make:</label><span><%= make %></span></div>\
			<div><label>Model:</label><span><%= model %></span></div>\
			<div><label>Serial:</label><span><%= serial %></span></div>\
			<div><label>Pressure Switches:</label></div>\
			<div><label>Fan Relay:</label></div>\
			<div><label>Clean Flame Sensor:</label></div>\
			<div><label>Hot Surface Ignitor:</label><span><%= hsi %> ohms</span></div>\
			<div><label>Inspect Blower Motor:</label></div>\
			<div><label>Blower Amps:</label></div>\
			<div><label>Capacitor:</label></div>\
			<div><label>Rated:</label><span><%= caprated1 %></span></div>\
			<div><label>Actual:</label><span><%= capact1 %></span></div>\
			<div><label>Inspect Heat Exchanger:</label></div>\
			<div><label>Gas Pressures:</label></div>\
			<div><label>High:</label><span><%= highgas %></span></div>\
			<div><label>Low:</label><span><%= lowgas %></span></div>\
	</div>\
";


pm.templates.electricPMView = "\
	<div class='pmview'>\
		<div>Make: <%= make %></div>\
		<div>Model: <%= model %></div>\
		<div>Serial: <%= serial %></div>\
		<div>Inspect Blower Motor: </div>\
		<div>Blower Amps: <%= bloweramps %></div>\
		<div>Capacitor:\
			<p>Rated: <%= caprated1 %></p>\
			<p>Actual: <%= capact1 %></p>\
		</div>\
		<div>Strips Heat:\
			<p>#1: <%= sh1 %> </p>\
			<p>#2: <%= sh2 %> </p>\
			<p>#3: <%= sh3 %> </p>\
			<p>#4: <%= sh4 %> </p>\
		</div>\
	</div>\
";

pm.templates.acPMView = "\
	<div class='pmview'>\
		<div>Make: <%= make %></div>\
		<div>Model: <%= model %></div>\
		<div>Serial: <%= serial %></div>\
		<div>Clean Indoor Coil: </div>\
		<div>Clean Outdoor Coil: </div>\
		<div>Compressor amp draw: <%= compamp %></div>\
		<div>Fan amp draw: <%= fanamp %></div>\
		<div>Capacitor:\
			<p>Rated: <%= caprated1 %> / <%= caprated2 %></p>\
			<p>Actual: <%= capact1 %> / <%= capact2 %></p>\
		</div>\
		<div>Refrigerant :\
		</div>\
		<div>Pressures:\
			<p>Liquid (discharge): <%= liquid %></p>\
			<p>Vapor (suction): <%= vapor %></p>\
		</div>\
		<div>Condensor Temp Rise: <%= contd %></div>\
		<div>Indoor delta T: <%= deltat %></div>\
	</div>\
";

pm.templates.heatpumpPMView = "\
	<div class='pmview'>\
		<div>Make: <%= make %></div>\
		<div>Model: <%= model %></div>\
		<div>Serial: <%= serial %></div>\
		<div>Clean Indoor Coil: </div>\
		<div>Clean Outdoor Coil: </div>\
		<div>Compressor amp draw: <%= compamp %></div>\
		<div>Fan amp draw: <%= fanamp %></div>\
		<div>Capacitor:\
			<p>Rated: <%= caprated1 %> / <%= caprated2 %></p>\
			<p>Actual: <%= capact1 %> / <%= capact2 %></p>\
		</div>\
		<div>Refrigerant : \
		</div>\
		<div>Pressures:\
			<p>Liquid (discharge): <%= liquid %></p>\
			<p>Vapor (suction): <%= vapor %></p>\
		</div>\
		<div>Condensor Temp Drop: <%= contd %></div>\
		<div>Indoor delta T: <%= deltat %></div>\
	</div>\
";

pm.templates.airhandlerPMView = "\
	<div class='pmview'>\
		<div>Make: <%= make %></div>\
		<div>Model: <%= model %></div>\
		<div>Serial: <%= serial %></div>\
		<div>Inspect Blower Motor: </div>\
		<div>Blower Amps: <%= bloweramps %></div>\
		<div>Capacitor:\
			<p>Rated: <%= caprated1 %></p>\
			<p>Actual: <%= capact1 %></p>\
		</div>\
	</div>\
";

pm.templates.splitPMView = "\
	<div class='pmview'>\
		<div>Make: <%= make %></div>\
		<div>Model: <%= model %></div>\
		<div>Serial: <%= serial %></div>\
		<div>Inspect Blower Motor: </div>\
		<div>Strips Heat:\
			<p>#1: <%= sh1 %> </p>\
			<p>#2: <%= sh2 %> </p>\
			<p>#3: <%= sh3 %> </p>\
			<p>#4: <%= sh4 %> </p>\
		</div>\
	</div>\
";