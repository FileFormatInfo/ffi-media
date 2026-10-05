---
title: "Compact Floppy (CF)"
handle: "compact-floppy"
indexEntries: ["Compact Floppy (CF)", "Floppy Disk - Compact (3 inch)", "3 inch Floppy Disk"]
imgCount: 2
technology: "magnetic-disk"
capacities: [ "173 KB" ]
width: 100.0
height: 80.0
depth: 5.0
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
<title>Compact (3 inch) Floppy</title>
<script type="text/javascript" src="/js/cookie.js"></script>
</head>
<body>
<%UI.getHeader(out, application, request, response);%>
<%info.fileformat.ad.AdFactory.getAdProvider(request).append(out, "media");%>
<h1>Compact Floppy</h1>
<p><b>Also known as:</b>3 inch floppy, CF2, CF-2, Schneider floppy</p>
<hr />
<h2>Summary</h2>
<table class="table table-bordered table-striped table-auto">
	<tr>
		<td>Technology</td>
		<td>Magnetic Disk</td>
	</tr>
	<tr>
		<td>Dimensions</td>
		<td>&nbsp;</td>
	</tr>
	<tr>
		<td>Date Introduced</td>
		<td>1983?</td>
	</tr>
	<tr>
		<td valign="top">Storage Capacity</td>
		<td>173 KB</br>
			703 KB</td>
	</tr>
	<tr>
		<td>Created by</td>
		<td>Panasonic?</td>
	</tr>
	<tr>
		<td>Website</td>
		<td><a href="http://www.fvempel.nl/3bible.html">3&quot; Bible</a></td>
	</tr>
	<tr>
		<td>Wikipedia</td>
		<td><a href="http://en.wikipedia.org/wiki/Floppy_disk">Floppy_disk</a></td>
	</tr>
	<tr>
		<td valign="top">See Also</td>
		<td>Slightly narrower and thicker than the much more common <a href="../3.5-floppy/index.htm">3.5 inch Floppy</a></td>
	</tr>
</table>
<h2>Images</h2>
<%@ include file="../_all/image.inc" %>
<p><a href="internal.htm">More Resources</a></p>
<%info.fileformat.ad.AdFactory.getAdProvider(request).append(out, "media");%>
<%UI.getFooter(out, application, request);%>
</body>
</html>
