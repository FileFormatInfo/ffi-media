---
title: "IBM Magstar MP Tape"
handle: "ibm-magstar-mp"
indexEntries: ["IBM Magstar MP Tape", "Magstar MP Tape"]
imgCount: 3
technology: "tape"
capacities: [ "5 GB" ]
width: 136.8
height: 58.9
depth: 15.6
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
<title>IBM 3590 Magstar MP</title>
<script type="text/javascript" src="/js/cookie.js"></script>
</head>
<body>
<%UI.getHeader(out, application, request, response);%>
<%info.fileformat.ad.AdFactory.getAdProvider(request).append(out, "media");%>
<h1>IBM Magstar MP Tape</h1>
<p><b>Also known as:</b> IBM 3590 Tape</p>
<hr />
<h2>Summary</h2>
<table class="table table-bordered table-striped table-auto">
	<tr>
		<td>Technology</td>
		<td>Magnetic Tape</td>
	</tr>
	<tr>
		<td>Dimensions</td>
		<td>137 mm x 59 mm x 15.5 mm</td>
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
		<td>IBM</td>
	</tr>
	<tr>
		<td>Website</td>
		<td><a href=""></a></td>
	</tr>
	<tr>
		<td>Wikipedia</td>
		<td><a href="http://en.wikipedia.org/wiki/IBM_3590">IBM_3590</a></td>
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
