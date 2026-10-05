---
title: "MiniSD Card"
handle: "minisd"
indexEntries: ["MiniSD Card"]
imgCount: 3
technology: "flash-memory"
capacities: [ "1 GB" ]
width: 21.5
height: 20.0
depth: 1.6
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
<title>MiniSD Card</title>
<script type="text/javascript" src="/js/cookie.js"></script>
</head>
<body>
<%UI.getHeader(out, application, request, response);%>
<%info.fileformat.ad.AdFactory.getAdProvider(request).append(out, "media");%>
<h1>MiniSD Card</h1>
<p><b>Also known as:</b> Mini SD Card, Mini Secure Digital Card</p>
<hr />
<h2>Summary</h2>
<table class="table table-bordered table-striped table-auto">
	<tr>
		<td>Technology</td>
		<td>Flash memory</td>
	</tr>
	<tr>
		<td>Dimensions</td>
		<td>21.5 mm x 20.0 mm x 1.5 mm</td>
	</tr>
	<tr>
		<td>Date Introduced</td>
		<td>2003</td>
	</tr>
	<tr>
		<td valign="top">Storage Capacity</td>
		<td>16 MB to 4 GB</td>
	</tr>
	<tr>
		<td>Created by</td>
		<td>SD Card Association</td>
	</tr>
	<tr>
		<td>Website</td>
		<td><a href="http://www.sdcard.org/">sdcard.org</a></td>
	</tr>
	<tr>
		<td>Wikipedia</td>
		<td><a href="http://en.wikipedia.org/wiki/MiniSD_Card">MiniSD_Card</a></td>
	</tr>
	<tr>
		<td valign="top">See Also</td>
		<td>Full size: <a href="../sd-card/index.htm">SD Card</a></td>
	</tr>
</table>
<h2>Images</h2>
<%@ include file="../_all/image.inc" %>
<p><a href="internal.htm">More Resources</a></p>
<%info.fileformat.ad.AdFactory.getAdProvider(request).append(out, "media");%>
<%UI.getFooter(out, application, request);%>
</body>
</html>
