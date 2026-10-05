---
title: "MMCmicro"
handle: "mmcmicro"
indexEntries: ["MMCmicro"]
imgCount: 3
technology: "flash-memory"
capacities: [ "128 MB" ]
width: 14.0
height: 12.0
depth: 1.1
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
<title>MMCmicro</title>
<script type="text/javascript" src="/js/cookie.js"></script>
</head>
<body>
<%UI.getHeader(out, application, request, response);%>
<%info.fileformat.ad.AdFactory.getAdProvider(request).append(out, "media");%>
<h1>MMCmicro</h1>
<p><b>Also known as:</b> MMC micro</p>
<hr />
<h2>Summary</h2>
<table class="table table-bordered table-striped table-auto">
	<tr>
		<td>Technology</td>
		<td>flash memory</td>
	</tr>
	<tr>
		<td>Dimensions</td>
		<td>14 mm x 12 mm x 1.1 mm</td>
	</tr>
	<tr>
		<td>Date Introduced</td>
		<td>&nbsp;</td>
	</tr>
	<tr>
		<td valign="top">Storage Capacity</td>
		<td>&nbsp;</td>
	</tr>
	<tr>
		<td>Created by</td>
		<td>&nbsp;</td>
	</tr>
	<tr>
		<td>Website</td>
		<td><a href="http://www.mmca.org/">mmca.org</a></td>
	</tr>
	<tr>
		<td>Wikipedia</td>
		<td><a href="http://en.wikipedia.org/wiki/MultiMediaCard#MMCmicro">MultiMediaCard</a></td>
	</tr>
	<tr>
		<td valign="top">See Also</td>
		<td><a href="../mmc/index.htm">MMC</a></td>
	</tr>
</table>
<h2>Images</h2>
<%@ include file="../_all/image.inc" %>
<p><a href="internal.htm">More Resources</a></p>
<%info.fileformat.ad.AdFactory.getAdProvider(request).append(out, "media");%>
<%UI.getFooter(out, application, request);%>
</body>
</html>
