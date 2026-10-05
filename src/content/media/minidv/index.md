---
title: "MiniDV Tape"
handle: "minidv"
indexEntries: ["MiniDV Tape"]
imgCount: 2
technology: "tape"
width: 66.0
height: 48.9
depth: 12.2
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
<title>MiniDV Tape</title>
<script type="text/javascript" src="/js/cookie.js"></script>
</head>
<body>
<%UI.getHeader(out, application, request, response);%>
<%info.fileformat.ad.AdFactory.getAdProvider(request).append(out, "media");%>
<h1>MiniDV Tape</h1>
<p><b>Also known as:</b>Mini DV Tape</p>
<hr />
<h2>Summary</h2>
<table class="table table-bordered table-striped table-auto">
	<tr>
		<td>Technology</td>
		<td>Magentic Tape</td>
	</tr>
	<tr>
		<td>Dimensions</td>
		<td>65 mm x 48 mm x 12 mm</td>
	</tr>
	<tr>
		<td>Date Introduced</td>
		<td>1996</td>
	</tr>
	<tr>
		<td valign="top">Storage Capacity</td>
		<td>11 GB</td>
	</tr>
	<tr>
		<td>Created by</td>
		<td>&nbsp;</td>
	</tr>
	<tr>
		<td>Website</td>
		<td><a href=""></a></td>
	</tr>
	<tr>
		<td>Wikipedia</td>
		<td><a href="http://en.wikipedia.org/wiki/Minidv">Minidv</a></td>
	</tr>
	<tr>
		<td valign="top">See Also</td>
		<td>&nbsp;</td>
	</tr>
</table>
<h2>Images</h2>
<%@ include file="../_all/image.inc" %>
<p><a href="internal.htm">More Resources</a></p>
<%info.fileformat.ad.AdFactory.getAdProvider(request).append(out, "media");%>
<%UI.getFooter(out, application, request);%>
</body>
</html>
