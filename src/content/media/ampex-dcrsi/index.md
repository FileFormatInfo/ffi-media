---
title: "Ampex DCRsi Tape"
handle: "ampex-dcrsi"
indexEntries: ["Ampex DCRsi Tape", "DCRsi Tape"]
imgCount: 1
technology: "tape"
width: 266
height: 170.0
depth: 41.7
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
<title>Ampex DCRsi Tape</title>
<script type="text/javascript" src="/js/cookie.js"></script>
</head>
<body>
<%UI.getHeader(out, application, request, response);%>
<%info.fileformat.ad.AdFactory.getAdProvider(request).append(out, "media");%>
<h1>Ampex DCRsi Tape</h1>
<hr />
<h2>Summary</h2>
<table class="table table-bordered table-striped table-auto">
	<tr>
		<td>Technology</td>
		<td>Magnetic Tape</td>
	</tr>
	<tr>
		<td>Dimensions</td>
		<td>266 mm x 170 mm x 42 mm</td>
	</tr>
	<tr>
		<td>Date Introduced</td>
		<td>1983</td>
	</tr>
	<tr>
		<td valign="top">Storage Capacity</td>
		<td>&nbsp;</td>
	</tr>
	<tr>
		<td>Created by</td>
		<td>Ampex</td>
	</tr>
	<tr>
		<td>Website</td>
		<td><a href="http://www.ampexdata.com/html/tape_products.html">ampexdata.com</a></td>
	</tr>
	<tr>
		<td>Wikipedia</td>
		<td>(none)</td>
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
