---
title: "Iomega Clik!"
handle: "clik"
indexEntries: ["Iomega Clik!", "Clik! Disk", "Iomega PocketZIP Disk", "PocketZIP Disk"]
imgCount: 3
technology: "magnetic-disk"
capacities: [ "40 MB" ]
width: 54.6
height: 50.2
depth: 2.0
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
<title>Iomega Clik/PocketZip</title>
<script type="text/javascript" src="/js/cookie.js"></script>
</head>
<body>
<%UI.getHeader(out, application, request, response);%>
<%info.fileformat.ad.AdFactory.getAdProvider(request).append(out, "media");%>
<h1>Iomega Clik! Disk</h1>
<p><b>Also known as:</b> Clic Disk, PocketZip Disk, incorrectly as Clic Disk</p>
<hr />
<h2>Summary</h2>
<table class="table table-bordered table-striped table-auto">
	<tr>
		<td>Technology</td>
		<td>Magentic Disk</td>
	</tr>
	<tr>
		<td>Dimensions</td>
		<td>54.5 mm x 50.2 mm x 2.0 mm</td>
	</tr>
	<tr>
		<td>Date Introduced</td>
		<td>1999</td>
	</tr>
	<tr>
		<td valign="top">Storage Capacity</td>
		<td>40 MB</td>
	</tr>
	<tr>
		<td>Created by</td>
		<td>Iomega</td>
	</tr>
	<tr>
		<td>Website</td>
		<td><a href=""></a></td>
	</tr>
	<tr>
		<td>Wikipedia</td>
		<td><a href="http://en.wikipedia.org/wiki/Iomega_Pocket_Zip_drive">Iomega_Pocket_Zip_drive</a></td>
	</tr>
	<tr>
		<td valign="top">See Also</td>
		<td><a href="../zip-disk/index.htm">ZIP Disk</a></td>
	</tr>
</table>
<h2>Images</h2>
<%@ include file="../_all/image.inc" %>
<p><a href="internal.htm">More Resources</a></p>
<%info.fileformat.ad.AdFactory.getAdProvider(request).append(out, "media");%>
<%UI.getFooter(out, application, request);%>
</body>
</html>
