---
title: "VXA Tape"
handle: "vxa-tape"
indexEntries: ["VXA Tape"]
imgCount: 3
technology: "tape"
capacities: [ "20 GB" ]
width: 95.0
height: 62.5
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
<title>VXA Tape</title>
<script type="text/javascript" src="/js/cookie.js"></script>
</head>
<body>
<%UI.getHeader(out, application, request, response);%>
<%info.fileformat.ad.AdFactory.getAdProvider(request).append(out, "media");%>
<h1>VXA Tape</h1>
<p><b>Also known as:</b> VXA Packet Tape</p>
<hr />
<h2>Summary</h2>
<table class="table table-bordered table-striped table-auto">
	<tr>
		<td>Technology</td>
		<td>Magnetic Tape</td>
	</tr>
	<tr>
		<td>Dimensions</td>
		<td>95 mm x 62.5 mm x 15 mm</td>
	</tr>
	<tr>
		<td>Date Introduced</td>
		<td>1999</td>
	</tr>
	<tr>
		<td valign="top">Storage Capacity</td>
		<td>VXA-1: 33 GB (1999)<br/>
			VXA-2: 80 GB (2002)<br/>
			VXA-3: 160 GB (2005)</td>
	</tr>
	<tr>
		<td>Created by</td>
		<td>Ecrix (now part of Tandberg)</td>
	</tr>
	<tr>
		<td>Website</td>
		<td><a href="http://www.vxa.com/">vxa.com</a></td>
	</tr>
	<tr>
		<td>Wikipedia</td>
		<td><a href="http://en.wikipedia.org/wiki/VXA">VXA</a></td>
	</tr>
	<tr>
		<td valign="top">See Also</td>
		<td>Same size: <a href="../data8-tape/index.htm">Data8 Tape</a></td>
	</tr>
</table>
<h2>Images</h2>
<%@ include file="../_all/image.inc" %>
<p><a href="internal.htm">More Resources</a></p>
<%info.fileformat.ad.AdFactory.getAdProvider(request).append(out, "media");%>
<%UI.getFooter(out, application, request);%>
</body>
</html>
