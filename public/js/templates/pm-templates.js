pm.templates.gasPM = "\
	<form>\
	<div>Make: <input type='text' name='make' value='<%= make %>'></div>\
	<div>Model: <input type='text' name='model' value='<%= model %>'></div>\
	<div>Serial: <input type='text' name='serial' value='<%= serial %>'></div>\
	<div>Inspect Heat Exchanger: <input type='checkbox' name='heatex' value=''></div>\
	<div>Gas Pressures:\
		<p>High: <input type='text' name='highgas' value=''></p>\
		<p>Low: <input type='text' name='lowgas' value=''></p>\
	</div>\
	<input type='submit' value='Submit'>\
	</form>\
";


pm.templates.electricPM = "\
	<form>\
	<div>Make: <input type='text' name='make' value='<%= make %>'></div>\
	<div>Model: <input type='text' name='model' value='<%= model %>'></div>\
	<div>Serial: <input type='text' name='serial' value='<%= serial %>'></div>\
	<div>Inspect Blower Motor: <input type='checkbox' name='heatex' value=''></div>\
	<div>Strips Heat:\
		<p>#1: <input type='text' name='sh1' value=''></p>\
		<p>#2: <input type='text' name='sh2' value=''></p>\
		<p>#3: <input type='text' name='sh3' value=''></p>\
		<p>#4: <input type='text' name='sh4' value=''></p>\
	</div>\
	<input type='submit' value='Submit'>\
	</form>\
";