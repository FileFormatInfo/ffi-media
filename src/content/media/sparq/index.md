---
title: "SparQ Disk"
handle: "sparq"
indexEntries: ["SparQ Disk", "SyQuest SparQ Disk"]
imgCount: 1
technology: "magnetic-disk"
capacities: [ "1 GB" ]
width: 100.4
height: 98.6
depth: 9.7
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
<title>SyQuest SparQ Disk</title>
<script type="text/javascript" src="/js/cookie.js"></script>
</head>
<body>
<%UI.getHeader(out, application, request, response);%>
<%info.fileformat.ad.AdFactory.getAdProvider(request).append(out, "media");%>
<h1>SyQuest SparQ Disk</h1>
<p><b>Also known as:</b></p>
<hr />
<h2>Summary</h2>
<table class="table table-bordered table-striped table-auto">
	<tr>
		<td>Technology</td>
		<td>Magnetic Disk</td>
	</tr>
	<tr>
		<td>Dimensions</td>
		<td>100 mm x 98 mm x 10 mm</td>
	</tr>
	<tr>
		<td>Date Introduced</td>
		<td>1998</td>
	</tr>
	<tr>
		<td valign="top">Storage Capacity</td>
		<td>1 GB</td>
	</tr>
	<tr>
		<td>Created by</td>
		<td>SyQuest</td>
	</tr>
	<tr>
		<td>Wikipedia</td>
		<td><a href="http://en.wikipedia.org/wiki/SyQuest_SparQ_drive">SyQuest_SparQ_drive</a></td>
	</tr>
</table>
<h2>Images</h2>
<%@ include file="../_all/image.inc" %>
<p><a href="internal.htm">More Resources</a></p>
<%info.fileformat.ad.AdFactory.getAdProvider(request).append(out, "media");%>
<%UI.getFooter(out, application, request);%>
</body>
</html>
