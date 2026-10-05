---
title: "SuperDisk/LS-120"
handle: "superdisk"
indexEntries: ["SuperDisk/LS-120", "LS-240 SuperDisk", "LS-120 SuperDisk"]
imgCount: 3
technology: "magnetic-disk"
capacities: [ "120 MB" ]
width: 93.7
height: 90.0
depth: 3.3
---
<%@ page contentType="text/html;charset=utf-8"
		 errorPage="/_err/500.htm"
		 import="info.fileformat.data.*,
				 info.fileformat.ui.*,
				 info.fileformat.util.*,
				 info.fileformat.web.*"
%><!DOCTYPE html>
<html>
<head>
<%UI.getMeta(out, application, request);%>
<title>SuperDisk/LS-120</title>
<script type="text/javascript" src="/js/cookie.js"></script>
</head>
<body>
<%UI.getHeader(out, application, request, response);%>
<%info.fileformat.ad.AdFactory.getAdProvider(request).append(out, "media");%>
<h1>SuperDisk</h1>
<p><b>Also known as:</b> LS-120 Floppy Disk, LS-240 Floppy Disk, Laser-Servo Floppy Disk</p>
<hr />
<h2>Summary</h2>
<table class="table table-bordered table-striped table-auto">
	<tr>
		<td>Technology</td>
		<td>Magnetic Disk</td>
	</tr>
	<tr>
		<td>Dimensions</td>
		<td>94 mm by 90 mm x 3.5 mm</td>
	</tr>
	<tr>
		<td>Date Introduced</td>
		<td>1995 to 2001</td>
	</tr>
	<tr>
		<td valign="top">Storage Capacity</td>
		<td>
			LS-120: 120 MB<br/>
			LS-240: 240 MB <i>(rare)</i><br/>
			It could also write 32 MB on a standard 1.44 MB 3.5 inch floppy
		</td>
	</tr>
	<tr>
		<td>Created by</td>
		<td>3M</td>
	</tr>
	<tr>
		<td>Website</td>
		<td><a href="http://www.imation.com/support/products/superdisk.html">EOL statement from Imation</a></td>
	</tr>
	<tr>
		<td>Wikipedia</td>
		<td><a href="http://en.wikipedia.org/wiki/SuperDisk">SuperDisk</a><br/>
			<a href="http://en.wikipedia.org/wiki/LS-120">LS-120</a></br/>
			also some info under <a href="http://en.wikipedia.org/wiki/Floppy_disk#LS-120">Floppy_disk</a></td>
	</tr>
	<tr>
		<td valign="top">See Also</td>
		<td><a href="../3.5-floppy/index.htm">3.5 inch floppy</a></td>
	</tr>
</table>
<h2>Images</h2>
<%@ include file="../_all/image.inc" %>
<p><a href="internal.htm">More Resources</a></p>
<%info.fileformat.ad.AdFactory.getAdProvider(request).append(out, "media");%>
<%UI.getFooter(out, application, request);%>
</body>
</html>
