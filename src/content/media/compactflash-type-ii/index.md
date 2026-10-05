---
title: "Compact Flash (CF) Type II"
handle: "compactflash-type-ii"
indexEntries: ["Compact Flash (CF) Type II", "CF Type II"]
imgCount: 3
technology: "flash-memory"
capacities: [ "1 GB" ]
width: 42.9
height: 36.5
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
<title>CompactFlash (CF) Type II</title>
<script type="text/javascript" src="/js/cookie.js"></script>
</head>
<body>
<%UI.getHeader(out, application, request, response);%>
<%info.fileformat.ad.AdFactory.getAdProvider(request).append(out, "media");%>
<h1>CompactFlash Type II</h1>
<p><b>Also known as:</b> CF, Microdrive, Micro-drive</p>
<hr />
<h2>Summary</h2>
<table class="table table-bordered table-striped table-auto">
	<tr>
		<td>Technology</td>
		<td>Flash memory, Magnetic Disk</td>
	</tr>
	<tr>
		<td>Dimensions</td>
		<td>43 mm x 36.5 mm x 5.0 mm</td>
	</tr>
	<tr>
		<td>Date Introduced</td>
		<td>1994</td>
	</tr>
	<tr>
		<td valign="top">Storage Capacity</td>
		<td>2 MB to 64 GB</td>
	</tr>
	<tr>
		<td>Created by</td>
		<td>SanDisk</td>
	</tr>
	<tr>
		<td>Website</td>
		<td><a href="http://www.compactflash.org/">compactflash.org</a></td>
	<tr>
		<td>Wikipedia</td>
		<td><a href="http://en.wikipedia.org/wiki/Compact_Flash">Compact_Flash</a></td>
	</tr>
	<tr>
		<td valign="top">See Also</td>
		<td>slightly thinner: <a href="../compactflash-type-i/index.htm">CompactFlash Type I</a></td>
	</tr>
</table>
<h2>Images</h2>
<%@ include file="../_all/image.inc" %>
<p><a href="internal.htm">More Resources</a></p>
<%info.fileformat.ad.AdFactory.getAdProvider(request).append(out, "media");%>
<%UI.getFooter(out, application, request);%>
</body>
</html>
