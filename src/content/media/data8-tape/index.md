---
title: "Data8 (D8) Tape"
handle: "data8-tape"
indexEntries: ["Data8 (D8) Tape", "D-Eight Tape", "D8 Tape", "8mm Tape"]
imgCount: 3
technology: "tape"
capacities: [ "5 GB" ]
width: 94.8
height: 62.1
depth: 15.0
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
<title>Data8 (D8) Tape</title>
<script type="text/javascript" src="/js/cookie.js"></script>
</head>
<body>
<%UI.getHeader(out, application, request, response);%>
<%info.fileformat.ad.AdFactory.getAdProvider(request).append(out, "media");%>
<h1>Data8 Tape</h1>
<p><b>Also known as:</b> D8 Tape, D-Eight Tape, D-8 Tape, 8mm Tape</p>
<hr />
<h2>Summary</h2>
<table class="table table-bordered table-striped table-auto">
	<tr>
		<td>Technology</td>
		<td>Magentic Tape</td>
	</tr>
	<tr>
		<td>Dimensions</td>
		<td>95 mm x 62 mm x 15 mm</td>
	</tr>
	<tr>
		<td>Date Introduced</td>
		<td>1987</td>
	</tr>
	<tr>
		<td valign="top">Storage Capacity</td>
		<td>&nbsp;</td>
	</tr>
	<tr>
		<td>Created by</td>
		<td>Exabyte</td>
	</tr>
	<tr>
		<td>Website</td>
		<td><a href=""></a></td>
	</tr>
	<tr>
		<td>Wikipedia</td>
		<td><a href="http://en.wikipedia.org/wiki/Data8">Data8</a></td>
	</tr>
	<tr>
		<td valign="top">See Also</td>
		<td>Same size: <a href="../vxa-tape/index.htm">VXA Tape</a><br/>
		Mammoth</td>
	</tr>
</table>
<h2>Images</h2>
<%@ include file="../_all/image.inc" %>
<p><a href="internal.htm">More Resources</a></p>
<%info.fileformat.ad.AdFactory.getAdProvider(request).append(out, "media");%>
<%UI.getFooter(out, application, request);%>
</body>
</html>
