---
title: "Iomega ZIP U250 Disk"
handle: "zip-u250"
company: "Iomega"
indexEntries: ["Iomega ZIP U250 Disk", "ZIP U250 Disk"]
imgCount: 3
technology: "magnetic-disk"
capacities: [ "250 MB" ]
width: 99.5
height: 98.1
depth: 6.5
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
<title>Iomega ZIP U250 Disk</title>
<script type="text/javascript" src="/js/cookie.js"></script>
</head>
<body>
<%UI.getHeader(out, application, request, response);%>
<%info.fileformat.ad.AdFactory.getAdProvider(request).append(out, "media");%>
<h1>Iomega ZIP U250 Disk</h1>
<hr />
<h2>Summary</h2>
<table class="table table-bordered table-striped table-auto">
	<tr>
		<td>Technology</td>
		<td>magnetic disk</td>
	</tr>
	<tr>
		<td>Dimensions</td>
		<td>99 mm by 98 mm x 6.5 mm</td>
	</tr>
	<tr>
		<td>Date introduced</td>
		<td>1998</td>
	</tr>
	<tr>
		<td valign="top">Storage Capacity</td>
		<td>
			250 MB<br/>
		</td>
	</tr>
	<tr>
		<td>Created by</td>
		<td>Iomega</td>
	</tr>
	<tr>
		<td valign="top">Wikipedia</td>
		<td><a href="http://en.wikipedia.org/wiki/Zip_drive">Zip_drive</a><br/>
	</tr>
	<tr>
		<td>See also</td>
		<td>
			Square version: <a href="../zip-disk/index.htm">ZIP Disk</a><br/>
		</td>
	</tr>
</table>
<h2>Images</h2>
<%@ include file="../_all/image.inc" %>
<p><a href="internal.htm">More Resources</a></p>
<%info.fileformat.ad.AdFactory.getAdProvider(request).append(out, "media");%>
<%UI.getFooter(out, application, request);%>
</body>
</html>
