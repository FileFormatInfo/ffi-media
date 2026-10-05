---
title: "SIM Card"
handle: "simcard"
indexEntries: ["SIM Card", "Subscriber Identity Module (SIM)", "GSM SIM Card"]
imgCount: 3
technology: "flash-memory"
width: 25.0
height: 15.0
depth: 1.8
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
<title>Subscriber Identity Module (SIM) Card</title>
<script type="text/javascript" src="/js/cookie.js"></script>
</head>
<body>
<%UI.getHeader(out, application, request, response);%>
<%info.fileformat.ad.AdFactory.getAdProvider(request).append(out, "media");%>
<h1>Subscriber Identity Module</h1>
<p><b>Also known as:</b> SIM Card, SIM Chip</p>
<hr />
<h2>Summary</h2>
<table class="table table-bordered table-striped table-auto">
	<tr>
		<td>Technology</td>
		<td>&nbsp;</td>
	</tr>
	<tr>
		<td>Dimensions</td>
		<td>25 mm x 15 mm x 2 mm</td>
	</tr>
	<tr>
		<td>Date Introduced</td>
		<td>1991</td>
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
		<td><a href=""></a></td>
	</tr>
	<tr>
		<td>Wikipedia</td>
		<td><a href="http://en.wikipedia.org/wiki/Subscriber_Identity_Module">Subscriber_Identity_Module</a></td>
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
