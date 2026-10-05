---
title: "Iomega Ditto Tape"
handle: "ditto"
indexEntries: ["Iomega Ditto Tape", "Ditto Tape"]
imgCount: 3
technology: "tape"
capacities: [ "1 GB" ]
width: 81.0
height: 61.1
depth: 14.3
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
<title>Iomega Ditto Tape</title>
<script type="text/javascript" src="/js/cookie.js"></script>
</head>
<body>
<%UI.getHeader(out, application, request, response);%>
<%info.fileformat.ad.AdFactory.getAdProvider(request).append(out, "media");%>
<h1>Iomega Ditto Tape</h1>
<p><b>Also known as:</b></p>
<hr />
<h2>Summary</h2>
<table class="table table-bordered table-striped table-auto">
	<tr>
		<td>Technology</td>
		<td>Magnetic tape</td>
	</tr>
	<tr>
		<td>Dimensions</td>
		<td>81 mm x 16 mm x 14 mm</td>
	</tr>
	<tr>
		<td>Date Introduced</td>
		<td>1992</td>
	</tr>
	<tr>
		<td valign="top">Storage Capacity</td>
		<td>250 MB to 5 GB uncompressed</td>
	</tr>
	<tr>
		<td>Created by</td>
		<td>Iomega</td>
	</tr>
	<tr>
		<td>Wikipedia</td>
		<td><a href="http://en.wikipedia.org/wiki/Iomega_Ditto_drive">Iomega_Ditto_drive</a></td>
	</tr>
	<tr>
		<td valign="top">See Also</td>
		<td><a href="../dittomax/index.htm">DittoMax</a></td>
	</tr>
</table>
<h2>Images</h2>
<%@ include file="../_all/image.inc" %>
<p><a href="internal.htm">More Resources</a></p>
<%info.fileformat.ad.AdFactory.getAdProvider(request).append(out, "media");%>
<%UI.getFooter(out, application, request);%>
</body>
</html>
