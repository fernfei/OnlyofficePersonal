/**
 * Base class
 * @global
 * @class
 * @name ApiInterface
 */
var ApiInterface = function() {};
var Api = new ApiInterface();


/**
 * Class representing a container for paragraphs and tables.
 * @param Document
 * @constructor
 */
function ApiDocumentContent(Document){}

/**
 * Class representing the Markdown conversion processing.
 * Each Range object is determined by the position of the start and end characters.
 * @constructor
 */
function CMarkdownConverter(oConfig){}
CMarkdownConverter.prototype.constructor = CMarkdownConverter;

/**
 * Class representing a continuous region in a document. 
 * Each Range object is determined by the position of the start and end characters.
 * @param oElement - The document element that may be Document, Table, Paragraph, Run or Hyperlink.
 * @param {Number} Start - The start element of Range in the current Element.
 * @param {Number} End - The end element of Range in the current Element.
 * @constructor
 */
function ApiRange(oElement, Start, End){}
ApiRange.prototype.constructor = ApiRange;

/**
 * Returns a paragraph from all the paragraphs that are in the range.
 * @param {Number} nPos - The paragraph position in the range.
 * @returns {ApiParagraph | null} - returns null if position is invalid.
 */
ApiRange.prototype.GetParagraph = function(nPos){ return new ApiParagraph(); };

/**
 * Class representing a document.
 * @constructor
 * @extends {ApiDocumentContent}
 */
function ApiDocument(Document){}
ApiDocument.prototype = Object.create(ApiDocumentContent.prototype);
ApiDocument.prototype.constructor = ApiDocument;

/**
 * Class representing the paragraph properties.
 * @constructor
 */
function ApiParaPr(Parent, ParaPr){}

/**
 * Class representing a paragraph bullet.
 * @constructor
 */
function ApiBullet(Bullet){}

/**
 * Class representing a paragraph.
 * @constructor
 * @extends {ApiParaPr}
 */
function ApiParagraph(Paragraph){}
ApiParagraph.prototype = Object.create(ApiParaPr.prototype);
ApiParagraph.prototype.constructor = ApiParagraph;

/**
 * Class representing the table properties.
 * @constructor
 */
function ApiTablePr(Parent, TablePr){}

/**
 * Class representing the text properties.
 * @constructor
 */
function ApiTextPr(Parent, TextPr){}

/**
 * Class representing a small text block called 'run'.
 * @constructor
 * @extends {ApiTextPr}
 */
function ApiRun(Run){}
ApiRun.prototype = Object.create(ApiTextPr.prototype);
ApiRun.prototype.constructor = ApiRun;

/**
 * Class representing a comment.
 * @constructor
 */
function ApiComment(oComment){}

/**
 * Class representing a comment reply.
 * @constructor
 */
function ApiCommentReply(oParentComm, oCommentReply){}

/**
 * Class representing a Paragraph hyperlink.
 * @constructor
 */
function ApiHyperlink(ParaHyperlink){}
ApiHyperlink.prototype.constructor = ApiHyperlink;

/**
 * Class representing a style.
 * @constructor
 */
function ApiStyle(Style){}

/**
 * Class representing a document section.
 * @constructor
 */
function ApiSection(Section){}

/**
 * Class representing the table row properties.
 * @constructor
 */
function ApiTableRowPr(Parent, RowPr){}

/**
 * Class representing the table cell properties.
 * @constructor
 */
function ApiTableCellPr(Parent, CellPr){}

/**
 * Class representing the numbering properties.
 * @constructor
 */
function ApiNumbering(Num){}

/**
 * Class representing a reference to a specified level of the numbering.
 * @constructor
 */
function ApiNumberingLevel(Num, Lvl){}

/**
 * Class representing a set of formatting properties which shall be conditionally applied to the parts of a table
 * which match the requirement specified on the <code>Type</code>.
 * @constructor
 */
function ApiTableStylePr(Type, Parent, TableStylePr){}

/**
 * Class representing an unsupported element.
 * @constructor
 */
function ApiUnsupported(){}

/**
 * Class representing a base class for color types.
 * @constructor
 */
function ApiUniColor(Unicolor){}

/**
 * Class representing an RGB Color.
 * @constructor
 */
function ApiRGBColor(r, g, b){}
ApiRGBColor.prototype = Object.create(ApiUniColor.prototype);
ApiRGBColor.prototype.constructor = ApiRGBColor;

/**
 * Class representing a Scheme Color.
 * @constructor
 */
function ApiSchemeColor(sColorId){}
ApiSchemeColor.prototype = Object.create(ApiUniColor.prototype);
ApiSchemeColor.prototype.constructor = ApiSchemeColor;

/**
 * Class representing a Preset Color.
 * @constructor
 * */
function ApiPresetColor(sPresetColor){}
ApiPresetColor.prototype = Object.create(ApiUniColor.prototype);
ApiPresetColor.prototype.constructor = ApiPresetColor;

/**
 * Class representing a base class for fill.
 * @constructor
 * */
function ApiFill(UniFill){}

/**
 * Class representing a stroke.
 * @constructor
 */
function ApiStroke(oLn){}

/**
 * Class representing gradient stop.
 * @constructor
 * */
function ApiGradientStop(oApiUniColor, pos){}

/**
 * Class representing a container for the paragraph elements.
 * @constructor
 */
function ApiInlineLvlSdt(Sdt){}

/**
 * Class representing a list of values of the combo box / dropdown list content control.
 * @constructor
 */
function ApiContentControlList(Parent){}

/**
 * Class representing an entry of the combo box / dropdown list content control.
 * @constructor
 */
function ApiContentControlListEntry(Sdt, Parent, Text, Value){}

/**
 * Class representing a container for the document content.
 * @constructor
 */
function ApiBlockLvlSdt(Sdt){}

/**
 * Class representing the settings which are used to create a watermark.
 * @constructor
 */
function ApiWatermarkSettings(oSettings){}

/**
 * Twentieths of a point (equivalent to 1/1440th of an inch).
 * @typedef {number} twips
 */

/**
 * Any valid element which can be added to the document structure.
 * @typedef {(ApiParagraph | ApiTable | ApiBlockLvlSdt)} DocumentElement
 */

/**
 * The style type used for the document element.
 * @typedef {("paragraph" | "table" | "run" | "numbering")} StyleType
 */

/**
 * 240ths of a line.
 * @typedef {number} line240
 */

/**
 * Half-points (2 half-points = 1 point).
 * @typedef {number} hps
 */

/**
 * A numeric value from 0 to 255.
 * @typedef {number} byte
 */

/**
 * 60000th of a degree (5400000 = 90 degrees).
 * @typedef {number} PositiveFixedAngle
 * */

/**
 * A border type which will be added to the document element.
 * * <b>"none"</b> - no border will be added to the created element or the selected element side.
 * * <b>"single"</b> - a single border will be added to the created element or the selected element side.
 * @typedef {("none" | "single")} BorderType
 */

/**
 * A shade type which can be added to the document element.
 * @typedef {("nil" | "clear")} ShdType
 */

/**
 * Custom tab types.
 * @typedef {("clear" | "left" | "right" | "center")} TabJc
 */

/**
 * Eighths of a point (24 eighths of a point = 3 points).
 * @typedef {number} pt_8
 */

/**
 * A point.
 * @typedef {number} pt
 */

/**
 * Header and footer types which can be applied to the document sections.
 * * <b>"default"</b> - a header or footer which can be applied to any default page.
 * * <b>"title"</b> - a header or footer which is applied to the title page.
 * * <b>"even"</b> - a header or footer which can be applied to even pages to distinguish them from the odd ones (which will be considered default).
 * @typedef {("default" | "title" | "even")} HdrFtrType
 */

/**
 * The possible values for the units of the width property are defined by a specific table or table cell width property.
 * * <b>"auto"</b> - sets the table or table cell width to auto width.
 * * <b>"twips"</b> - sets the table or table cell width to be measured in twentieths of a point.
 * * <b>"nul"</b> - sets the table or table cell width to be of a zero value.
 * * <b>"percent"</b> - sets the table or table cell width to be measured in percent to the parent container.
 * @typedef {("auto" | "twips" | "nul" | "percent")} TableWidth
 */

/**
 * This simple type specifies possible values for the table sections to which the current conditional formatting properties will be applied when this selected table style is used.
 * * <b>"topLeftCell"</b> - specifies that the table formatting is applied to the top left cell.
 * * <b>"topRightCell"</b> - specifies that the table formatting is applied to the top right cell.
 * * <b>"bottomLeftCell"</b> - specifies that the table formatting is applied to the bottom left cell.
 * * <b>"bottomRightCell"</b> - specifies that the table formatting is applied to the bottom right cell.
 * * <b>"firstRow"</b> - specifies that the table formatting is applied to the first row.
 * * <b>"lastRow"</b> - specifies that the table formatting is applied to the last row.
 * * <b>"firstColumn"</b> - specifies that the table formatting is applied to the first column. Any subsequent row which is in *table header* ({@link ApiTableRowPr#SetTableHeader}) will also use this conditional format.
 * * <b>"lastColumn"</b> - specifies that the table formatting is applied to the last column.
 * * <b>"bandedColumn"</b> - specifies that the table formatting is applied to odd numbered groupings of rows.
 * * <b>"bandedColumnEven"</b> - specifies that the table formatting is applied to even numbered groupings of rows.
 * * <b>"bandedRow"</b> - specifies that the table formatting is applied to odd numbered groupings of columns.
 * * <b>"bandedRowEven"</b> - specifies that the table formatting is applied to even numbered groupings of columns.
 * * <b>"wholeTable"</b> - specifies that the conditional formatting is applied to the whole table.
 * @typedef {("topLeftCell" | "topRightCell" | "bottomLeftCell" | "bottomRightCell" | "firstRow" | "lastRow" |
 *     "firstColumn" | "lastColumn" | "bandedColumn" | "bandedColumnEven" | "bandedRow" | "bandedRowEven" |
 *     "wholeTable")} TableStyleOverrideType
 */

/**
 * The types of elements that can be added to the paragraph structure.
 * @typedef {(ApiUnsupported | ApiRun | ApiInlineLvlSdt | ApiHyperlink | ApiFormBase)} ParagraphContent
 */

/**
 * The possible values for the base which the relative horizontal positioning of an object will be calculated from.
 * @typedef {("character" | "column" | "leftMargin" | "rightMargin" | "margin" | "page")} RelFromH
 */

/**
 * The possible values for the base which the relative vertical positioning of an object will be calculated from.
 * @typedef {("bottomMargin" | "topMargin" | "margin" | "page" | "line" | "paragraph")} RelFromV
 */

/**
 * English measure unit. 1 mm = 36000 EMUs, 1 inch = 914400 EMUs.
 * @typedef {number} EMU
 */

/**
 * This type specifies the preset shape geometry that will be used for a shape.
 * @typedef {("accentBorderCallout1" | "accentBorderCallout2" | "accentBorderCallout3" | "accentCallout1" |
 *     "accentCallout2" | "accentCallout3" | "actionButtonBackPrevious" | "actionButtonBeginning" |
 *     "actionButtonBlank" | "actionButtonDocument" | "actionButtonEnd" | "actionButtonForwardNext" |
 *     "actionButtonHelp" | "actionButtonHome" | "actionButtonInformation" | "actionButtonMovie" |
 *     "actionButtonReturn" | "actionButtonSound" | "arc" | "bentArrow" | "bentConnector2" | "bentConnector3" |
 *     "bentConnector4" | "bentConnector5" | "bentUpArrow" | "bevel" | "blockArc" | "borderCallout1" |
 *     "borderCallout2" | "borderCallout3" | "bracePair" | "bracketPair" | "callout1" | "callout2" | "callout3" |
 *     "can" | "chartPlus" | "chartStar" | "chartX" | "chevron" | "chord" | "circularArrow" | "cloud" |
 *     "cloudCallout" | "corner" | "cornerTabs" | "cube" | "curvedConnector2" | "curvedConnector3" |
 *     "curvedConnector4" | "curvedConnector5" | "curvedDownArrow" | "curvedLeftArrow" | "curvedRightArrow" |
 *     "curvedUpArrow" | "decagon" | "diagStripe" | "diamond" | "dodecagon" | "donut" | "doubleWave" | "downArrow" | "downArrowCallout" | "ellipse" | "ellipseRibbon" | "ellipseRibbon2" | "flowChartAlternateProcess" | "flowChartCollate" | "flowChartConnector" | "flowChartDecision" | "flowChartDelay" | "flowChartDisplay" | "flowChartDocument" | "flowChartExtract" | "flowChartInputOutput" | "flowChartInternalStorage" | "flowChartMagneticDisk" | "flowChartMagneticDrum" | "flowChartMagneticTape" | "flowChartManualInput" | "flowChartManualOperation" | "flowChartMerge" | "flowChartMultidocument" | "flowChartOfflineStorage" | "flowChartOffpageConnector" | "flowChartOnlineStorage" | "flowChartOr" | "flowChartPredefinedProcess" | "flowChartPreparation" | "flowChartProcess" | "flowChartPunchedCard" | "flowChartPunchedTape" | "flowChartSort" | "flowChartSummingJunction" | "flowChartTerminator" | "foldedCorner" | "frame" | "funnel" | "gear6" | "gear9" | "halfFrame" | "heart" | "heptagon" | "hexagon" | "homePlate" | "horizontalScroll" | "irregularSeal1" | "irregularSeal2" | "leftArrow" | "leftArrowCallout" | "leftBrace" | "leftBracket" | "leftCircularArrow" | "leftRightArrow" | "leftRightArrowCallout" | "leftRightCircularArrow" | "leftRightRibbon" | "leftRightUpArrow" | "leftUpArrow" | "lightningBolt" | "line" | "lineInv" | "mathDivide" | "mathEqual" | "mathMinus" | "mathMultiply" | "mathNotEqual" | "mathPlus" | "moon" | "nonIsoscelesTrapezoid" | "noSmoking" | "notchedRightArrow" | "octagon" | "parallelogram" | "pentagon" | "pie" | "pieWedge" | "plaque" | "plaqueTabs" | "plus" | "quadArrow" | "quadArrowCallout" | "rect" | "ribbon" | "ribbon2" | "rightArrow" | "rightArrowCallout" | "rightBrace" | "rightBracket" | "round1Rect" | "round2DiagRect" | "round2SameRect" | "roundRect" | "rtTriangle" | "smileyFace" | "snip1Rect" | "snip2DiagRect" | "snip2SameRect" | "snipRoundRect" | "squareTabs" | "star10" | "star12" | "star16" | "star24" | "star32" | "star4" | "star5" | "star6" | "star7" | "star8" | "straightConnector1" | "stripedRightArrow" | "sun" | "swooshArrow" | "teardrop" | "trapezoid" | "triangle" | "upArrowCallout" | "upDownArrow" | "upDownArrow" | "upDownArrowCallout" | "uturnArrow" | "verticalScroll" | "wave" | "wedgeEllipseCallout" | "wedgeRectCallout" | "wedgeRoundRectCallout")} ShapeType
 */

/**
 * This type specifies the available chart types which can be used to create a new chart.
 * @typedef {("bar" | "barStacked" | "barStackedPercent" | "bar3D" | "barStacked3D" | "barStackedPercent3D" |
 *     "barStackedPercent3DPerspective" | "horizontalBar" | "horizontalBarStacked" | "horizontalBarStackedPercent"
 *     | "horizontalBar3D" | "horizontalBarStacked3D" | "horizontalBarStackedPercent3D" | "lineNormal" |
 *     "lineStacked" | "lineStackedPercent" | "line3D" | "pie" | "pie3D" | "doughnut" | "scatter" | "stock" |
 *     "area" | "areaStacked" | "areaStackedPercent")} ChartType
 */

/**
 * The available text vertical alignment (used to align text in a shape with a placement for text inside it).
 * @typedef {("top" | "center" | "bottom")} VerticalTextAlign
 * */

/**
 * The available color scheme identifiers.
 * @typedef {("accent1" | "accent2" | "accent3" | "accent4" | "accent5" | "accent6" | "bg1" | "bg2" | "dk1" | "dk2"
 *     | "lt1" | "lt2" | "tx1" | "tx2")} SchemeColorId
 * */

/**
 * The available preset color names.
 * @typedef {("aliceBlue" | "antiqueWhite" | "aqua" | "aquamarine" | "azure" | "beige" | "bisque" | "black" |
 *     "blanchedAlmond" | "blue" | "blueViolet" | "brown" | "burlyWood" | "cadetBlue" | "chartreuse" | "chocolate"
 *     | "coral" | "cornflowerBlue" | "cornsilk" | "crimson" | "cyan" | "darkBlue" | "darkCyan" | "darkGoldenrod" |
 *     "darkGray" | "darkGreen" | "darkGrey" | "darkKhaki" | "darkMagenta" | "darkOliveGreen" | "darkOrange" |
 *     "darkOrchid" | "darkRed" | "darkSalmon" | "darkSeaGreen" | "darkSlateBlue" | "darkSlateGray" |
 *     "darkSlateGrey" | "darkTurquoise" | "darkViolet" | "deepPink" | "deepSkyBlue" | "dimGray" | "dimGrey" |
 *     "dkBlue" | "dkCyan" | "dkGoldenrod" | "dkGray" | "dkGreen" | "dkGrey" | "dkKhaki" | "dkMagenta" |
 *     "dkOliveGreen" | "dkOrange" | "dkOrchid" | "dkRed" | "dkSalmon" | "dkSeaGreen" | "dkSlateBlue" |
 *     "dkSlateGray" | "dkSlateGrey" | "dkTurquoise" | "dkViolet" | "dodgerBlue" | "firebrick" | "floralWhite" |
 *     "forestGreen" | "fuchsia" | "gainsboro" | "ghostWhite" | "gold" | "goldenrod" | "gray" | "green" |
 *     "greenYellow" | "grey" | "honeydew" | "hotPink" | "indianRed" | "indigo" | "ivory" | "khaki" | "lavender" | "lavenderBlush" | "lawnGreen" | "lemonChiffon" | "lightBlue" | "lightCoral" | "lightCyan" | "lightGoldenrodYellow" | "lightGray" | "lightGreen" | "lightGrey" | "lightPink" | "lightSalmon" | "lightSeaGreen" | "lightSkyBlue" | "lightSlateGray" | "lightSlateGrey" | "lightSteelBlue" | "lightYellow" | "lime" | "limeGreen" | "linen" | "ltBlue" | "ltCoral" | "ltCyan" | "ltGoldenrodYellow" | "ltGray" | "ltGreen" | "ltGrey" | "ltPink" | "ltSalmon" | "ltSeaGreen" | "ltSkyBlue" | "ltSlateGray" | "ltSlateGrey" | "ltSteelBlue" | "ltYellow" | "magenta" | "maroon" | "medAquamarine" | "medBlue" | "mediumAquamarine" | "mediumBlue" | "mediumOrchid" | "mediumPurple" | "mediumSeaGreen" | "mediumSlateBlue" | "mediumSpringGreen" | "mediumTurquoise" | "mediumVioletRed" | "medOrchid" | "medPurple" | "medSeaGreen" | "medSlateBlue" | "medSpringGreen" | "medTurquoise" | "medVioletRed" | "midnightBlue" | "mintCream" | "mistyRose" | "moccasin" | "navajoWhite" | "navy" | "oldLace" | "olive" | "oliveDrab" | "orange" | "orangeRed" | "orchid" | "paleGoldenrod" | "paleGreen" | "paleTurquoise" | "paleVioletRed" | "papayaWhip" | "peachPuff" | "peru" | "pink" | "plum" | "powderBlue" | "purple" | "red" | "rosyBrown" | "royalBlue" | "saddleBrown" | "salmon" | "sandyBrown" | "seaGreen" | "seaShell" | "sienna" | "silver" | "skyBlue" | "slateBlue" | "slateGray" | "slateGrey" | "snow" | "springGreen" | "steelBlue" | "tan" | "teal" | "thistle" | "tomato" | "turquoise" | "violet" | "wheat" | "white" | "whiteSmoke" | "yellow" | "yellowGreen")} PresetColor
 * */

/**
 * Possible values for the position of chart tick labels (either horizontal or vertical).
 * * <b>"none"</b> - not display the selected tick labels.
 * * <b>"nextTo"</b> - sets the position of the selected tick labels next to the main label.
 * * <b>"low"</b> - sets the position of the selected tick labels in the part of the chart with lower values.
 * * <b>"high"</b> - sets the position of the selected tick labels in the part of the chart with higher values.
 * @typedef {("none" | "nextTo" | "low" | "high")} TickLabelPosition
 * **/

/**
 * The type of a fill which uses an image as a background.
 * * <b>"tile"</b> - if the image is smaller than the shape which is filled, the image will be tiled all over the created shape surface.
 * * <b>"stretch"</b> - if the image is smaller than the shape which is filled, the image will be stretched to fit the created shape surface.
 * @typedef {"tile" | "stretch"} BlipFillType
 * */

/**
 * The available preset patterns which can be used for the fill.
 * @typedef {"cross" | "dashDnDiag" | "dashHorz" | "dashUpDiag" | "dashVert" | "diagBrick" | "diagCross" | "divot"
 *     | "dkDnDiag" | "dkHorz" | "dkUpDiag" | "dkVert" | "dnDiag" | "dotDmnd" | "dotGrid" | "horz" | "horzBrick" |
 *     "lgCheck" | "lgConfetti" | "lgGrid" | "ltDnDiag" | "ltHorz" | "ltUpDiag" | "ltVert" | "narHorz" | "narVert"
 *     | "openDmnd" | "pct10" | "pct20" | "pct25" | "pct30" | "pct40" | "pct5" | "pct50" | "pct60" | "pct70" |
 *     "pct75" | "pct80" | "pct90" | "plaid" | "shingle" | "smCheck" | "smConfetti" | "smGrid" | "solidDmnd" |
 *     "sphere" | "trellis" | "upDiag" | "vert" | "wave" | "wdDnDiag" | "wdUpDiag" | "weave" | "zigZag"}
 *     PatternType
 * */

/**
 *
 * The lock type of the content control.
 * @typedef {"unlocked" | "contentLocked" | "sdtContentLocked" | "sdtLocked"} SdtLock
 */

/**
 * Text transform type.
 * @typedef {("textArchDown" | "textArchDownPour" | "textArchUp" | "textArchUpPour" | "textButton" | "textButtonPour" | "textCanDown"
 * | "textCanUp" | "textCascadeDown" | "textCascadeUp" | "textChevron" | "textChevronInverted" | "textCircle" | "textCirclePour"
 * | "textCurveDown" | "textCurveUp" | "textDeflate" | "textDeflateBottom" | "textDeflateInflate" | "textDeflateInflateDeflate" | "textDeflateTop"
 * | "textDoubleWave1" | "textFadeDown" | "textFadeLeft" | "textFadeRight" | "textFadeUp" | "textInflate" | "textInflateBottom" | "textInflateTop"
 * | "textPlain" | "textRingInside" | "textRingOutside" | "textSlantDown" | "textSlantUp" | "textStop" | "textTriangle" | "textTriangleInverted"
 * | "textWave1" | "textWave2" | "textWave4" | "textNoShape")} TextTransform
 * */

/**
 * Form type.
 * The available form types.
 * @typedef {"textForm" | "comboBoxForm" | "dropDownForm" | "checkBoxForm" | "radioButtonForm" | "pictureForm"} FormType
 */

/**
 * 1 millimetre equals 1/10th of a centimetre.
 * @typedef {number} mm
 */

/**
 * The condition to scale an image in the picture form.
 * @typedef {"always" | "never" | "tooBig" | "tooSmall"} ScaleFlag
 */

/**
 * Value from 0 to 100.
 * @typedef {number} percentage
 */

/**
 * Available highlight colors.
 * @typedef {"black" | "blue" | "cyan" | "green" | "magenta" | "red" | "yellow" | "white" | "darkBlue" |
 * "darkCyan" | "darkGreen" | "darkMagenta" | "darkRed" | "darkYellow" | "darkGray" | "lightGray" | "none"} highlightColor
 */

/**
 * Available values of the "numbered" reference type:
 * * <b>"pageNum"</b> - the numbered item page number;
 * * <b>"paraNum"</b> - the numbered item paragraph number;
 * * <b>"noCtxParaNum"</b> - the abbreviated paragraph number (the specific item only, e.g. instead of "4.1.1" you refer to "1" only);
 * * <b>"fullCtxParaNum"</b> - the full paragraph number, e.g. "4.1.1";
 * * <b>"text"</b> - the paragraph text value, e.g. if you have "4.1.1. Terms and Conditions", you refer to "Terms and Conditions" only;
 * * <b>"aboveBelow"</b> - the words "above" or "below" depending on the item position.
 * @typedef {"pageNum" | "paraNum" | "noCtxParaNum" | "fullCtxParaNum" | "text" | "aboveBelow"} numberedRefTo
 */

/**
 * Available values of the "heading" reference type:
 * * <b>"text"</b> - the entire heading text;
 * * <b>"pageNum"</b> - the heading page number;
 * * <b>"headingNum"</b> - the heading sequence number;
 * * <b>"noCtxHeadingNum"</b> - the abbreviated heading number. Make sure the cursor pointer is in the section you are referencing to, e.g. you are in section 4 and you wish to refer to heading 4.B, so instead of "4.B" you receive "B" only;
 * * <b>"fullCtxHeadingNum"</b> - the full heading number even if the cursor pointer is in the same section;
 * * <b>"aboveBelow"</b> - the words "above" or "below" depending on the item position.
 * @typedef {"text" | "pageNum" | "headingNum" | "noCtxHeadingNum" | "fullCtxHeadingNum" | "aboveBelow"} headingRefTo
 */

/**
 * Available values of the "bookmark" reference type:
 * * <b>"text"</b> - the entire bookmark text;
 * * <b>"pageNum"</b> - the bookmark page number;
 * * <b>"paraNum"</b> - the bookmark paragraph number;
 * * <b>"noCtxParaNum"</b> - the abbreviated paragraph number (the specific item only, e.g. instead of "4.1.1" you refer to "1" only);
 * * <b>"fullCtxParaNum</b> - the full paragraph number, e.g. "4.1.1";
 * * <b>"aboveBelow"</b> - the words "above" or "below" depending on the item position.
 * @typedef {"text" | "pageNum" | "paraNum" | "noCtxParaNum" | "fullCtxParaNum" | "aboveBelow"} bookmarkRefTo
 */

/**
 * Available values of the "footnote" reference type:
 * * <b>"footnoteNum"</b> - the footnote number;
 * * <b>"pageNum"</b> - the page number of the footnote;
 * * <b>"aboveBelow"</b> - the words "above" or "below" depending on the position of the item;
 * * <b>"formFootnoteNum"</b> - the form number formatted as a footnote. The numbering of the actual footnotes is not affected.
 * @typedef {"footnoteNum" | "pageNum" | "aboveBelow" | "formFootnoteNum"} footnoteRefTo
 */

/**
 * Available values of the "endnote" reference type:
 * * <b>"endnoteNum"</b> - the endnote number;
 * * <b>"pageNum"</b> - the endnote page number;
 * * <b>"aboveBelow"</b> - the words "above" or "below" depending on the item position;
 * * <b>"formEndnoteNum"</b> - the form number formatted as an endnote. The numbering of the actual endnotes is not affected.
 * @typedef {"endnoteNum" | "pageNum" | "aboveBelow" | "formEndnoteNum"} endnoteRefTo
 */

/**
 * Available values of the "equation"/"figure"/"table" reference type:
 * * <b>"entireCaption"</b>- the entire caption text;
 * * <b>"labelNumber"</b> - the label and object number only, e.g. "Table 1.1";
 * * <b>"captionText"</b> - the caption text only;
 * * <b>"pageNum"</b> - the page number containing the referenced object;
 * * <b>"aboveBelow"</b> - the words "above" or "below" depending on the item position.
 * @typedef {"entireCaption" | "labelNumber" | "captionText" | "pageNum" | "aboveBelow"} captionRefTo
 */

/**
 * Axis position in the chart.
 * @typedef {("top" | "bottom" | "right" | "left")} AxisPos
 */

/**
 * Standard numeric format.
 * @typedef {("General" | "0" | "0.00" | "#,##0" | "#,##0.00" | "0%" | "0.00%" |
 * "0.00E+00" | "# ?/?" | "# ??/??" | "m/d/yyyy" | "d-mmm-yy" | "d-mmm" | "mmm-yy" | "h:mm AM/PM" |
 * "h:mm:ss AM/PM" | "h:mm" | "h:mm:ss" | "m/d/yyyy h:mm" | "#,##0_);(#,##0)" | "#,##0_);[Red](#,##0)" | 
 * "#,##0.00_);(#,##0.00)" | "#,##0.00_);[Red](#,##0.00)" | "mm:ss" | "[h]:mm:ss" | "mm:ss.0" | "##0.0E+0" | "@")} NumFormat
 */

/**
 * Types of all supported forms.
 * @typedef {ApiTextForm | ApiComboBoxForm | ApiCheckBoxForm | ApiPictureForm | ApiDateForm | ApiComplexForm} ApiForm
 */

/**
 * Possible values for the caption numbering format.
 * * <b>"ALPHABETIC"</b> - upper letter.
 * * <b>"alphabetic"</b> - lower letter.
 * * <b>"Roman"</b> - upper Roman.
 * * <b>"roman"</b> - lower Roman.
 * * <b>"Arabic"</b> - arabic.
 * @typedef {("ALPHABETIC" | "alphabetic" | "Roman" | "roman" | "Arabic")} CaptionNumberingFormat
 * **/

/**
 * Possible values for the caption separator.
 * * <b>"hyphen"</b> - the "-" punctuation mark.
 * * <b>"period"</b> - the "." punctuation mark.
 * * <b>"colon"</b> - the ":" punctuation mark.
 * * <b>"longDash"</b> - the "—" punctuation mark.
 * * <b>"dash"</b> - the "-" punctuation mark.
 * @typedef {("hyphen" | "period" | "colon" | "longDash" | "dash")} CaptionSep
 * **/

/**
 * Possible values for the caption label.
 * @typedef {("Table" | "Equation" | "Figure")} CaptionLabel
 * **/

/**
 * Table of contents properties.
 * @typedef {Object} TocPr
 * @property {boolean} [ShowPageNums=true] - Specifies whether to show page numbers in the table of contents.
 * @property {boolean} [RightAlgn=true] - Specifies whether to right-align page numbers in the table of contents.
 * @property {TocLeader} [LeaderType="dot"] - The leader type in the table of contents.
 * @property {boolean} [FormatAsLinks=true] - Specifies whether to format the table of contents as links.
 * @property {TocBuildFromPr} [BuildFrom={OutlineLvls=9}] - Specifies whether to generate the table of contents from the outline levels or the specified styles.
 * @property {TocStyle} [TocStyle="standard"] - The table of contents style type.
 */

/**
 * Table of figures properties.
 * @typedef {Object} TofPr
 * @property {boolean} [ShowPageNums=true] - Specifies whether to show page numbers in the table of figures.
 * @property {boolean} [RightAlgn=true] - Specifies whether to right-align page numbers in the table of figures.
 * @property {TocLeader} [LeaderType="dot"] - The leader type in the table of figures.
 * @property {boolean} [FormatAsLinks=true] - Specifies whether to format the table of figures as links.
 * @property {CaptionLabel | string} [BuildFrom="Figure"] - Specifies whether to generate the table of figures based on the specified caption label or the paragraph style name used (for example, "Heading 1").
 * @property {boolean} [LabelNumber=true] - Specifies whether to include the label and number in the table of figures.
 * @property {TofStyle} [TofStyle="distinctive"] - The table of figures style type.
 */

/**
 * Table of contents properties which specify whether to generate the table of contents from the outline levels or the specified styles.
 * @typedef {Object} TocBuildFromPr
 * @property {number} [OutlineLvls=9] - Maximum number of levels in the table of contents.
 * @property {TocStyleLvl[]} StylesLvls - Style levels (for example, [{Name: "Heading 1", Lvl: 2}, {Name: "Heading 2", Lvl: 3}]).
 * <note>If StylesLvls.length > 0, then the OutlineLvls property will be ignored.</note>
 */

/**
 * Table of contents style levels.
 * @typedef {Object} TocStyleLvl
 * @property {string} Name - Style name (for example, "Heading 1").
 * @property {number} Lvl - Level which will be applied to the specified style in the table of contents.
 */

/**
 * Possible values for the table of contents leader:
 * * <b>"dot"</b> - "......."
 * * <b>"dash"</b> - "-------"
 * * <b>"underline"</b> - "_______"
 * @typedef {("dot" | "dash" | "underline" | "none")} TocLeader
 * **/

/**
 * Possible values for the table of contents style.
 * @typedef {("simple" | "online" | "standard" | "modern" | "classic")} TocStyle
 * **/

/**
 * Possible values for the table of figures style.
 * @typedef {("simple" | "online" | "classic" | "distinctive" | "centered" | "formal")} TofStyle
 * **/

/**
 * The 1000th of a percent (100000 = 100%).
 * @typedef {number} PositivePercentage
 * */

/**
 * The type of tick mark appearance.
 * @typedef {("cross" | "in" | "none" | "out")} TickMark
 * */

/**
 * The watermark type.
 * @typedef {("none" | "text" | "image")} WatermarkType
 */

/**
 * The watermark direction.
 * @typedef {("horizontal" | "clockwise45" | "counterclockwise45")} WatermarkDirection
 */

/**
 * Creates a new smaller text block to be inserted to the current paragraph or table.
 * @memberof ApiInterface
 * @typeofeditors ["CDE", "CSE", "CPE"]
 * @returns {ApiRun}
 */
ApiInterface.prototype.CreateRun = function(){ return new ApiRun(); };

/**
 * Creates an RGB color setting the appropriate values for the red, green and blue color components.
 * @memberof ApiInterface
 * @typeofeditors ["CDE", "CSE", "CPE"]
 * @param {byte} r - Red color component value.
 * @param {byte} g - Green color component value.
 * @param {byte} b - Blue color component value.
 * @returns {ApiRGBColor}
 */
ApiInterface.prototype.CreateRGBColor = function(r, g, b){ return new ApiRGBColor(); };

/**
 * Creates a complex color scheme selecting from one of the available schemes.
 * @memberof ApiInterface
 * @typeofeditors ["CDE", "CSE", "CPE"]
 * @param {SchemeColorId} sSchemeColorId - The color scheme identifier.
 * @returns {ApiSchemeColor}
 */
ApiInterface.prototype.CreateSchemeColor = function(sSchemeColorId){ return new ApiSchemeColor(); };

/**
 * Creates a color selecting it from one of the available color presets.
 * @memberof ApiInterface
 * @typeofeditors ["CDE", "CSE", "CPE"]
 * @param {PresetColor} sPresetColor - A preset selected from the list of the available color preset names.
 * @returns {ApiPresetColor};
 * */
ApiInterface.prototype.CreatePresetColor = function(sPresetColor){ return new ApiPresetColor(); };

/**
 * Creates a solid fill to apply to the object using a selected solid color as the object background.
 * @memberof ApiInterface
 * @typeofeditors ["CDE", "CSE", "CPE"]
 * @param {ApiUniColor} oUniColor - The color used for the element fill.
 * @returns {ApiFill}
 * */
ApiInterface.prototype.CreateSolidFill = function(oUniColor){ return new ApiFill(); };

/**
 * Creates a linear gradient fill to apply to the object using the selected linear gradient as the object background.
 * @memberof ApiInterface
 * @typeofeditors ["CDE", "CSE", "CPE"]
 * @param {Array} aGradientStop - The array of gradient color stops measured in 1000th of percent.
 * @param {PositiveFixedAngle} Angle - The angle measured in 60000th of a degree that will define the gradient direction.
 * @returns {ApiFill}
 */
ApiInterface.prototype.CreateLinearGradientFill = function(aGradientStop, Angle){ return new ApiFill(); };

/**
 * Creates a radial gradient fill to apply to the object using the selected radial gradient as the object background.
 * @memberof ApiInterface
 * @typeofeditors ["CDE", "CSE", "CPE"]
 * @param {Array} aGradientStop - The array of gradient color stops measured in 1000th of percent.
 * @returns {ApiFill}
 */
ApiInterface.prototype.CreateRadialGradientFill = function(aGradientStop){ return new ApiFill(); };

/**
 * Creates a pattern fill to apply to the object using the selected pattern as the object background.
 * @memberof ApiInterface
 * @typeofeditors ["CDE", "CSE", "CPE"]
 * @param {PatternType} sPatternType - The pattern type used for the fill selected from one of the available pattern types.
 * @param {ApiUniColor} BgColor - The background color used for the pattern creation.
 * @param {ApiUniColor} FgColor - The foreground color used for the pattern creation.
 * @returns {ApiFill}
 */
ApiInterface.prototype.CreatePatternFill = function(sPatternType, BgColor, FgColor){ return new ApiFill(); };

/**
 * Creates a blip fill to apply to the object using the selected image as the object background.
 * @memberof ApiInterface
 * @typeofeditors ["CDE", "CSE", "CPE"]
 * @param {string} sImageUrl - The path to the image used for the blip fill (currently only internet URL or Base64 encoded images are supported).
 * @param {BlipFillType} sBlipFillType - The type of the fill used for the blip fill (tile or stretch).
 * @returns {ApiFill}
 * */
ApiInterface.prototype.CreateBlipFill = function(sImageUrl, sBlipFillType){ return new ApiFill(); };

/**
 * Creates no fill and removes the fill from the element.
 * @memberof ApiInterface
 * @typeofeditors ["CDE", "CSE", "CPE"]
 * @returns {ApiFill}
 * */
ApiInterface.prototype.CreateNoFill = function(){ return new ApiFill(); };

/**
 * Creates a stroke adding shadows to the element.
 * @memberof ApiInterface
 * @typeofeditors ["CDE", "CSE", "CPE"]
 * @param {EMU} nWidth - The width of the shadow measured in English measure units.
 * @param {ApiFill} oFill - The fill type used to create the shadow.
 * @returns {ApiStroke}
 * */
ApiInterface.prototype.CreateStroke = function(nWidth, oFill){ return new ApiStroke(); };

/**
 * Creates a gradient stop used for different types of gradients.
 * @memberof ApiInterface
 * @typeofeditors ["CDE", "CSE", "CPE"]
 * @param {ApiUniColor} oUniColor - The color used for the gradient stop.
 * @param {PositivePercentage} nPos - The position of the gradient stop measured in 1000th of percent.
 * @returns {ApiGradientStop}
 * */
ApiInterface.prototype.CreateGradientStop = function(oUniColor, nPos){ return new ApiGradientStop(); };

/**
 * Creates a bullet for a paragraph with the character or symbol specified with the sSymbol parameter.
 * @memberof ApiInterface
 * @typeofeditors ["CSE", "CPE"]
 * @param {string} sSymbol - The character or symbol which will be used to create the bullet for the paragraph.
 * @returns {ApiBullet}
 * */
ApiInterface.prototype.CreateBullet = function(sSymbol){ return new ApiBullet(); };

/**
 * Creates a bullet for a paragraph with the numbering character or symbol specified with the sType parameter.
 * @memberof ApiInterface
 * @typeofeditors ["CSE", "CPE"]
 * @param {BulletType} sType - The numbering type the paragraphs will be numbered with.
 * @param {number} nStartAt - The number the first numbered paragraph will start with.
 * @returns {ApiBullet}
 * */
ApiInterface.prototype.CreateNumbering = function(sType, nStartAt){ return new ApiBullet(); };

/**
 * Returns a type of the ApiDocumentContent class. 
 * @memberof ApiDocumentContent
 * @typeofeditors ["CDE", "CSE", "CPE"]
 * @returns {"documentContent"}
 */
ApiDocumentContent.prototype.GetClassType = function(){ return ""; };

/**
 * Returns a number of elements in the current document.
 * @memberof ApiDocumentContent
 * @typeofeditors ["CDE", "CSE", "CPE"]
 * @returns {number}
 */
ApiDocumentContent.prototype.GetElementsCount = function(){ return 0; };

/**
 * Returns an element by its position in the document.
 * @memberof ApiDocumentContent
 * @param {number} nPos - The element position that will be taken from the document.
 * @typeofeditors ["CDE", "CSE", "CPE"]
 * @returns {DocumentElement}
 */
ApiDocumentContent.prototype.GetElement = function(nPos){ return new DocumentElement(); };

/**
 * Adds a paragraph or a table or a blockLvl content control using its position in the document content.
 * @memberof ApiDocumentContent
 * @typeofeditors ["CDE", "CSE", "CPE"]
 * @param {number} nPos - The position where the current element will be added.
 * @param {DocumentElement} oElement - The document element which will be added at the current position.
 */
ApiDocumentContent.prototype.AddElement = function(nPos, oElement){};

/**
 * Pushes a paragraph or a table to actually add it to the document.
 * @memberof ApiDocumentContent
 * @typeofeditors ["CDE", "CSE", "CPE"]
 * @param {DocumentElement} oElement - The element type which will be pushed to the document.
 * @returns {boolean} - returns false if oElement is unsupported.
 */
ApiDocumentContent.prototype.Push = function(oElement){ return true; };

/**
 * Removes all the elements from the current document or from the current document element.
 * <note>When all elements are removed, a new empty paragraph is automatically created. If you want to add
 * content to this paragraph, use the {@link ApiDocumentContent#GetElement} method.</note>
 * @memberof ApiDocumentContent
 * @typeofeditors ["CDE", "CSE", "CPE"]
 */
ApiDocumentContent.prototype.RemoveAllElements = function(){};

/**
 * Removes an element using the position specified.
 * @memberof ApiDocumentContent
 * @typeofeditors ["CDE", "CSE", "CPE"]
 * @param {number} nPos - The element number (position) in the document or inside other element.
 */
ApiDocumentContent.prototype.RemoveElement = function(nPos){};

/**
 * Creates a new history point.
 * @memberof ApiDocument
 */
ApiDocument.prototype.CreateNewHistoryPoint = function(){};

/**
 * Record of one comment.
 * @typedef {Object} CommentReportRecord
 * @property {boolean} [IsAnswer=false] - Specifies whether this is an initial comment or a reply to another comment.
 * @property {string} CommentMessage - The text of the current comment.
 * @property {number} Date - The time when this change was made in local time.
 * @property {number} DateUTC - The time when this change was made in UTC.
 * @property {string} [QuoteText=undefined] - The text to which this comment is related.
 */

/**
 * Report on all comments.
 * This is a dictionary where the keys are usernames.
 * @typedef {Object.<string, Array.<CommentReportRecord>>} CommentReport
 * @example
 *  {
 *    "John Smith" : [{IsAnswer: false, CommentMessage: 'Good text', Date: 1688588002698, DateUTC: 1688570002698, QuoteText: 'Some text'},
 *      {IsAnswer: true, CommentMessage: "I don't think so", Date: 1688588012661, DateUTC: 1688570012661}],
 *
 *    "Mark Pottato" : [{IsAnswer: false, CommentMessage: 'Need to change this part', Date: 1688587967245, DateUTC: 1688569967245, QuoteText: 'The quick brown fox jumps over the lazy dog'},
 *      {IsAnswer: false, CommentMessage: 'We need to add a link', Date: 1688587967245, DateUTC: 1688569967245, QuoteText: 'OnlyOffice'}]
 *  }
 */

/**
 * Review record type.
 * @typedef {("TextAdd" | "TextRem" | "ParaAdd" | "ParaRem" | "TextPr" | "ParaPr" | "Unknown")} ReviewReportRecordType
 */

/**
 * Record of one review change.
 * @typedef {Object} ReviewReportRecord
 * @property {ReviewReportRecordType} Type - Review record type.
 * @property {string} [Value=undefined] - Review change value that is set for the "TextAdd" and "TextRem" types only.
 * @property {number} Date - The time when this change was made.
 */

/**
 * Report on all review changes.
 * This is a dictionary where the keys are usernames.
 * @typedef {Object.<string, Array.<ReviewReportRecord>>} ReviewReport
 * @example
 * {
 *   "John Smith" : [{Type: 'TextRem', Value: 'Hello, Mark!', Date: 1679941734161},
 *                 {Type: 'TextAdd', Value: 'Dear Mr. Pottato.', Date: 1679941736189}],
 *   "Mark Pottato" : [{Type: 'ParaRem', Date: 1679941755942},
 *                   {Type: 'TextPr', Date: 1679941757832}]
 * }
 */

/**
 * The specific form type.
 * @typedef {("text" | "checkBox" | "picture" | "comboBox" | "dropDownList" | "dateTime" | "radio")} FormSpecificType
 */

/**
 * Form data.
 * @typedef {Object} FormData
 * @property {string} key - The form key. If the current form is a radio button, then this field contains the group key.
 * @property {string | boolean} value - The current field value.
 * @property {string} tag - The form tag.
 * @property {FormSpecificType} type - The form type.
 * @example
 * {
 *   "key" : "CompanyName",
 *   "tag" : "companyName",
 *   "value" : "ONLYOFFICE",
 *   "type" : "text"
 * }
 */

/**
 * Returns a type of the ApiParagraph class.
 * @memberof ApiParagraph
 * @typeofeditors ["CDE", "CSE", "CPE"]
 * @returns {"paragraph"}
 */
ApiParagraph.prototype.GetClassType = function(){ return ""; };

/**
 * Adds some text to the current paragraph.
 * @memberof ApiParagraph
 * @typeofeditors ["CDE", "CSE", "CPE"]
 * @param {string} [sText=""] - The text that we want to insert into the current document element.
 * @returns {ApiRun}
 */
ApiParagraph.prototype.AddText = function(sText){ return new ApiRun(); };

/**
 * Adds a line break to the current position and starts the next element from a new line.
 * @memberof ApiParagraph
 * @typeofeditors ["CDE", "CSE", "CPE"]
 * @returns {ApiRun}
 */
ApiParagraph.prototype.AddLineBreak = function(){ return new ApiRun(); };

/**
 * Returns the paragraph properties.
 * @memberof ApiParagraph
 * @typeofeditors ["CDE", "CSE", "CPE"]
 * @returns {ApiParaPr}
 */
ApiParagraph.prototype.GetParaPr = function(){ return new ApiParaPr(); };

/**
 * Returns a number of elements in the current paragraph.
 * @memberof ApiParagraph
 * @typeofeditors ["CDE", "CSE", "CPE"]
 * @returns {number}
 */
ApiParagraph.prototype.GetElementsCount = function(){ return 0; };

/**
 * Returns a paragraph element using the position specified.
 * @memberof ApiParagraph
 * @typeofeditors ["CDE", "CSE", "CPE"]
 * @param {number} nPos - The position where the element which content we want to get must be located.
 * @returns {ParagraphContent}
 */
ApiParagraph.prototype.GetElement = function(nPos){ return new ParagraphContent(); };

/**
 * Removes an element using the position specified.
 * <note>If the element you remove is the last paragraph element (i.e. all the elements are removed from the paragraph),
 * a new empty run is automatically created. If you want to add
 * content to this run, use the {@link ApiParagraph#GetElement} method.</note>
 * @memberof ApiParagraph
 * @typeofeditors ["CDE", "CSE", "CPE"]
 * @param {number} nPos - The element position which we want to remove from the paragraph.
 */
ApiParagraph.prototype.RemoveElement = function(nPos){};

/**
 * Removes all the elements from the current paragraph.
 * <note>When all the elements are removed from the paragraph, a new empty run is automatically created. If you want to add
 * content to this run, use the {@link ApiParagraph#GetElement} method.</note>
 * @memberof ApiParagraph
 * @typeofeditors ["CDE", "CSE", "CPE"]
 */
ApiParagraph.prototype.RemoveAllElements = function(){};

/**
 * Deletes the current paragraph.
 * @memberof ApiParagraph
 * @typeofeditors ["CDE", "CSE", "CPE"]
 * @returns {boolean} - returns false if paragraph haven't parent.
 */
ApiParagraph.prototype.Delete = function(){ return true; };

/**
 * Returns the next paragraph.
 * @memberof ApiParagraph
 * @typeofeditors ["CDE", "CSE", "CPE"]
 * @returns {ApiParagraph | null} - returns null if paragraph is last.
 */
ApiParagraph.prototype.GetNext = function(){ return new ApiParagraph(); };

/**
 * Returns the previous paragraph.
 * @memberof ApiParagraph
 * @typeofeditors ["CDE", "CSE", "CPE"]
 * @returns {ApiParagraph} - returns null if paragraph is first.
 */
ApiParagraph.prototype.GetPrevious = function(){ return new ApiParagraph(); };

/**
 * Creates a paragraph copy. Ingnore comments, footnote references, complex fields.
 * @memberof ApiParagraph
 * @typeofeditors ["CDE", "CSE", "CPE"]
 * @returns {ApiParagraph}
 */
ApiParagraph.prototype.Copy = function(){ return new ApiParagraph(); };

/**
 * Adds an element to the current paragraph.
 * @memberof ApiParagraph
 * @typeofeditors ["CDE", "CSE", "CPE"]
 * @param {ParagraphContent} oElement - The document element which will be added at the current position. Returns false if the
 * oElement type is not supported by a paragraph.
 * @param {number} [nPos] - The position where the current element will be added. If this value is not
 * specified, then the element will be added at the end of the current paragraph.
 * @returns {boolean} Returns <code>false</code> if the type of <code>oElement</code> is not supported by paragraph
 * content.
 */
ApiParagraph.prototype.AddElement = function(oElement, nPos){ return true; };

/**
 * Adds a tab stop to the current paragraph.
 * @memberof ApiParagraph
 * @typeofeditors ["CDE", "CSE", "CPE"]
 * @returns {ApiRun}
 */
ApiParagraph.prototype.AddTabStop = function(){ return new ApiRun(); };

/**
 * Specifies a highlighting color which is applied as a background to the contents of the current paragraph.
 * @memberof ApiParagraph
 * @typeofeditors ["CDE", "CPE"]
 * @param {highlightColor} sColor - Available highlight color.
 * @returns {ApiParagraph} this
 */
ApiParagraph.prototype.SetHighlight = function(sColor){ return new ApiParagraph(); };

/**
 * Returns a type of the ApiRun class.
 * @memberof ApiRun
 * @typeofeditors ["CDE", "CSE", "CPE"]
 * @returns {"run"}
 */
ApiRun.prototype.GetClassType = function(){ return ""; };

/**
 * Returns the text properties of the current run.
 * @memberof ApiRun
 * @typeofeditors ["CDE", "CSE", "CPE"]
 * @returns {ApiTextPr}
 */
ApiRun.prototype.GetTextPr = function(){ return new ApiTextPr(); };

/**
 * Clears the content from the current run.
 * @memberof ApiRun
 * @typeofeditors ["CDE", "CSE", "CPE"]
 */
ApiRun.prototype.ClearContent = function(){};

/**
 * Removes all the elements from the current run.
 * @memberof ApiRun
 * @typeofeditors ["CDE", "CSE", "CPE"]
 */
ApiRun.prototype.RemoveAllElements = function(){};

/**
 * Deletes the current run.
 * @memberof ApiRun
 * @typeofeditors ["CDE", "CSE", "CPE"]
 */
ApiRun.prototype.Delete = function(){};

/**
 * Adds some text to the current run.
 * @memberof ApiRun
 * @typeofeditors ["CDE", "CSE", "CPE"]
 * @param {string} sText - The text which will be added to the current run.
 */
ApiRun.prototype.AddText = function(sText){};

/**
 * Adds a line break to the current run position and starts the next element from a new line.
 * @memberof ApiRun
 * @typeofeditors ["CDE", "CSE", "CPE"]
 */
ApiRun.prototype.AddLineBreak = function(){};

/**
 * Adds a tab stop to the current run.
 * @memberof ApiRun
 * @typeofeditors ["CDE", "CSE", "CPE"]
 */
ApiRun.prototype.AddTabStop = function(){};

/**
 * Creates a copy of the current run.
 * @memberof ApiRun
 * @typeofeditors ["CDE", "CSE", "CPE"]
 * @returns {ApiRun}
 */
ApiRun.prototype.Copy = function(){ return new ApiRun(); };

/**
 * Sets the text properties to the current run.
 * @memberof ApiRun
 * @typeofeditors ["CDE", "CSE", "CPE"]
 * @param {ApiTextPr} oTextPr - The text properties that will be set to the current run.
 * @returns {ApiTextPr}  
 */
ApiRun.prototype.SetTextPr = function(oTextPr){ return new ApiTextPr(); };

/**
 * Sets the bold property to the text character.
 * @memberof ApiRun
 * @typeofeditors ["CDE", "CSE", "CPE"]
 * @param {boolean} isBold - Specifies that the contents of the current run are displayed bold.
 * @returns {ApiTextPr}
 */
ApiRun.prototype.SetBold = function(isBold){ return new ApiTextPr(); };

/**
 * Specifies that any lowercase characters in the current text run are formatted for display only as their capital letter character equivalents.
 * @memberof ApiRun
 * @typeofeditors ["CDE", "CSE", "CPE"]
 * @param {boolean} isCaps - Specifies that the contents of the current run are displayed capitalized.
 * @returns {ApiTextPr}
 */
ApiRun.prototype.SetCaps = function(isCaps){ return new ApiTextPr(); };

/**
 * Sets the text color for the current text run in the RGB format.
 * @memberof ApiRun
 * @typeofeditors ["CDE", "CSE", "CPE"]
 * @param {byte} r - Red color component value.
 * @param {byte} g - Green color component value.
 * @param {byte} b - Blue color component value.
 * @param {boolean} [isAuto=false] - If this parameter is set to "true", then r,g,b parameters will be ignored.
 * @returns {ApiTextPr}
 */
ApiRun.prototype.SetColor = function(r, g, b, isAuto){ return new ApiTextPr(); };

/**
 * Specifies that the contents of the current run are displayed with two horizontal lines through each character displayed on the line.
 * @memberof ApiRun
 * @typeofeditors ["CDE", "CSE", "CPE"]
 * @param {boolean} isDoubleStrikeout - Specifies that the contents of the current run are displayed double struck through.
 * @returns {ApiTextPr}
 */
ApiRun.prototype.SetDoubleStrikeout = function(isDoubleStrikeout){ return new ApiTextPr(); };

/**
 * Sets the text color to the current text run.
 * @memberof ApiRun
 * @typeofeditors ["CSE", "CPE"]
 * @param {ApiFill} oApiFill - The color or pattern used to fill the text color.
 * @returns {ApiTextPr}
 */
ApiRun.prototype.SetFill = function(oApiFill){ return new ApiTextPr(); };

/**
 * Sets all 4 font slots with the specified font family.
 * @memberof ApiRun
 * @typeofeditors ["CDE", "CSE", "CPE"]
 * @param {string} sFontFamily - The font family or families used for the current text run.
 * @returns {ApiTextPr}
 */
ApiRun.prototype.SetFontFamily = function(sFontFamily){ return new ApiTextPr(); };

/**
 * Returns all font names from all elements inside the current run.
 * @memberof ApiRun
 * @typeofeditors ["CDE", "CSE", "CPE"]
 * @returns {string[]} - The font names used for the current run.
 */
ApiRun.prototype.GetFontNames = function(){ return [""]; };

/**
 * Sets the font size to the characters of the current text run.
 * @memberof ApiRun
 * @typeofeditors ["CDE", "CSE", "CPE"]
 * @param {hps} nSize - The text size value measured in half-points (1/144 of an inch).
 * @returns {ApiTextPr}
 */
ApiRun.prototype.SetFontSize = function(nSize){ return new ApiTextPr(); };

/**
 * Specifies a highlighting color which is applied as a background to the contents of the current run.
 * @memberof ApiRun
 * @typeofeditors ["CDE", "CSE", "CPE"]
 * @param {highlightColor} sColor - Available highlight color.
 * @returns {ApiTextPr}
 */
ApiRun.prototype.SetHighlight = function(sColor){ return new ApiTextPr(); };

/**
 * Sets the italic property to the text character.
 * @memberof ApiRun
 * @typeofeditors ["CDE", "CSE", "CPE"]
 * @param {boolean} isItalic - Specifies that the contents of the current run are displayed italicized.
 * @returns {ApiTextPr}
 */
ApiRun.prototype.SetItalic = function(isItalic){ return new ApiTextPr(); };

/**
 * Specifies the languages which will be used to check spelling and grammar (if requested) when processing
 * the contents of this text run.
 * @memberof ApiRun
 * @typeofeditors ["CDE", "CSE", "CPE"]
 * @param {string} sLangId - The possible value for this parameter is a language identifier as defined by
 * RFC 4646/BCP 47. Example: "en-CA".
 * @returns {ApiTextPr}
 */
ApiRun.prototype.SetLanguage = function(sLangId){ return new ApiTextPr(); };

/**
 * Specifies an amount by which text is raised or lowered for this run in relation to the default
 * baseline of the surrounding non-positioned text.
 * @memberof ApiRun
 * @typeofeditors ["CDE", "CSE", "CPE"]
 * @param {hps} nPosition - Specifies a positive (raised text) or negative (lowered text)
 * measurement in half-points (1/144 of an inch).
 * @returns {ApiTextPr}
 */
ApiRun.prototype.SetPosition = function(nPosition){ return new ApiTextPr(); };

/**
 * Specifies the shading applied to the contents of the current text run.
 * @memberof ApiRun
 * @typeofeditors ["CDE", "CSE", "CPE"]
 * @param {ShdType} sType - The shading type applied to the contents of the current text run.
 * @param {byte} r - Red color component value.
 * @param {byte} g - Green color component value.
 * @param {byte} b - Blue color component value.
 * @returns {ApiTextPr}
 */
ApiRun.prototype.SetShd = function(sType, r, g, b){ return new ApiTextPr(); };

/**
 * Specifies that all the small letter characters in this text run are formatted for display only as their capital
 * letter character equivalents which are two points smaller than the actual font size specified for this text.
 * @memberof ApiRun
 * @typeofeditors ["CDE", "CSE", "CPE"]
 * @param {boolean} isSmallCaps - Specifies if the contents of the current run are displayed capitalized two points smaller or not.
 * @returns {ApiTextPr}
 */
ApiRun.prototype.SetSmallCaps = function(isSmallCaps){ return new ApiTextPr(); };

/**
 * Sets the text spacing measured in twentieths of a point.
 * @memberof ApiRun
 * @typeofeditors ["CDE", "CSE", "CPE"]
 * @param {twips} nSpacing - The value of the text spacing measured in twentieths of a point (1/1440 of an inch).
 * @returns {ApiTextPr}
 */
ApiRun.prototype.SetSpacing = function(nSpacing){ return new ApiTextPr(); };

/**
 * Specifies that the contents of the current run are displayed with a single horizontal line through the center of the line.
 * @memberof ApiRun
 * @typeofeditors ["CDE", "CSE", "CPE"]
 * @param {boolean} isStrikeout - Specifies that the contents of the current run are displayed struck through.
 * @returns {ApiTextPr}
 */
ApiRun.prototype.SetStrikeout = function(isStrikeout){ return new ApiTextPr(); };

/**
 * Sets a style to the current run.
 * @memberof ApiRun
 * @typeofeditors ["CDE", "CSE", "CPE"]
 * @param {ApiStyle} oStyle - The style which must be applied to the text run.
 * @returns {ApiTextPr}
 */
ApiRun.prototype.SetStyle = function(oStyle){ return new ApiTextPr(); };

/**
 * Specifies that the contents of the current run are displayed along with a line appearing directly below the character
 * (less than all the spacing above and below the characters on the line).
 * @memberof ApiRun
 * @typeofeditors ["CDE", "CSE", "CPE"]
 * @param {boolean} isUnderline - Specifies that the contents of the current run are displayed underlined.
 * @returns {ApiTextPr}
 */
ApiRun.prototype.SetUnderline = function(isUnderline){ return new ApiTextPr(); };

/**
 * Specifies the alignment which will be applied to the contents of the current run in relation to the default appearance of the text run:
 * * <b>"baseline"</b> - the characters in the current text run will be aligned by the default text baseline.
 * * <b>"subscript"</b> - the characters in the current text run will be aligned below the default text baseline.
 * * <b>"superscript"</b> - the characters in the current text run will be aligned above the default text baseline.
 * @memberof ApiRun
 * @typeofeditors ["CDE", "CSE", "CPE"]
 * @param {("baseline" | "subscript" | "superscript")} sType - The vertical alignment type applied to the text contents.
 * @returns {ApiTextPr}
 */
ApiRun.prototype.SetVertAlign = function(sType){ return new ApiTextPr(); };

/**
 * Returns a type of the ApiTextPr class.
 * @memberof ApiTextPr
 * @typeofeditors ["CDE", "CSE", "CPE"]
 * @returns {"textPr"}
 */
ApiTextPr.prototype.GetClassType = function(){ return ""; };

/**
 * Sets the bold property to the text character.
 * @memberof ApiTextPr
 * @typeofeditors ["CDE", "CSE", "CPE"]
 * @param {boolean} isBold - Specifies that the contents of the run are displayed bold.
 * @returns {ApiTextPr} - this text properties.
 */
ApiTextPr.prototype.SetBold = function(isBold){ return new ApiTextPr(); };

/**
 * Gets the bold property from the current text properties.
 * @memberof ApiTextPr
 * @typeofeditors ["CDE", "CSE", "CPE"]
 * @returns {boolean}
 * @since 8.1.0
 */
ApiTextPr.prototype.GetBold = function(){ return true; };

/**
 * Sets the italic property to the text character.
 * @memberof ApiTextPr
 * @typeofeditors ["CDE", "CSE", "CPE"]
 * @param {boolean} isItalic - Specifies that the contents of the current run are displayed italicized.
 * @returns {ApiTextPr} - this text properties.
 */
ApiTextPr.prototype.SetItalic = function(isItalic){ return new ApiTextPr(); };

/**
 * Gets the italic property from the current text properties.
 * @memberof ApiTextPr
 * @typeofeditors ["CDE", "CSE", "CPE"]
 * @returns {boolean}
 * @since 8.1.0
 */
ApiTextPr.prototype.GetItalic = function(){ return true; };

/**
 * Specifies that the contents of the run are displayed with a single horizontal line through the center of the line.
 * @memberof ApiTextPr
 * @typeofeditors ["CDE", "CSE", "CPE"]
 * @param {boolean} isStrikeout - Specifies that the contents of the current run are displayed struck through.
 * @returns {ApiTextPr} - this text properties.
 */
ApiTextPr.prototype.SetStrikeout = function(isStrikeout){ return new ApiTextPr(); };

/**
 * Gets the strikeout property from the current text properties.
 * @memberof ApiTextPr
 * @typeofeditors ["CDE", "CSE", "CPE"]
 * @returns {boolean}
 * @since 8.1.0
 */
ApiTextPr.prototype.GetStrikeout = function(){ return true; };

/**
 * Specifies that the contents of the run are displayed along with a line appearing directly below the character
 * (less than all the spacing above and below the characters on the line).
 * @memberof ApiTextPr
 * @typeofeditors ["CDE", "CSE", "CPE"]
 * @param {boolean} isUnderline - Specifies that the contents of the current run are displayed underlined.
 * @returns {ApiTextPr} - this text properties.
 */
ApiTextPr.prototype.SetUnderline = function(isUnderline){ return new ApiTextPr(); };

/**
 * Gets the underline property from the current text properties.
 * @memberof ApiTextPr
 * @typeofeditors ["CDE", "CSE", "CPE"]
 * @returns {boolean}
 * @since 8.1.0
 */
ApiTextPr.prototype.GetUnderline = function(){ return true; };

/**
 * Sets all 4 font slots with the specified font family.
 * @memberof ApiTextPr
 * @typeofeditors ["CDE", "CSE", "CPE"]
 * @param {string} sFontFamily - The font family or families used for the current text run.
 * @returns {ApiTextPr} - this text properties.
 */
ApiTextPr.prototype.SetFontFamily = function(sFontFamily){ return new ApiTextPr(); };

/**
 * Gets the font family from the current text properties.
 * @memberof ApiTextPr
 * @typeofeditors ["CDE", "CSE", "CPE"]
 * @returns {string}
 * @since 8.1.0
 */
ApiTextPr.prototype.GetFontFamily = function(){ return ""; };

/**
 * Sets the font size to the characters of the current text run.
 * @memberof ApiTextPr
 * @typeofeditors ["CDE", "CSE", "CPE"]
 * @param {hps} nSize - The text size value measured in half-points (1/144 of an inch).
 * @returns {ApiTextPr} - this text properties.
 */
ApiTextPr.prototype.SetFontSize = function(nSize){ return new ApiTextPr(); };

/**
 * Gets the font size from the current text properties.
 * @memberof ApiTextPr
 * @typeofeditors ["CDE", "CSE", "CPE"]
 * @returns {hps}
 * @since 8.1.0
 */
ApiTextPr.prototype.GetFontSize = function(){ return new hps(); };

/**
 * Specifies the alignment which will be applied to the contents of the run in relation to the default appearance of the run text:
 * * <b>"baseline"</b> - the characters in the current text run will be aligned by the default text baseline.
 * * <b>"subscript"</b> - the characters in the current text run will be aligned below the default text baseline.
 * * <b>"superscript"</b> - the characters in the current text run will be aligned above the default text baseline.
 * @memberof ApiTextPr
 * @typeofeditors ["CDE", "CSE", "CPE"]
 * @param {("baseline" | "subscript" | "superscript")} sType - The vertical alignment type applied to the text contents.
 * @returns {ApiTextPr} - this text properties.
 */
ApiTextPr.prototype.SetVertAlign = function(sType){ return new ApiTextPr(); };

/**
 * Specifies a highlighting color which is added to the text properties and applied as a background to the contents of the current run/range/paragraph.
 * @memberof ApiTextPr
 * @typeofeditors ["CDE", "CPE"]
 * @param {highlightColor} sColor - Available highlight color.
 * @returns {ApiTextPr}
 */
ApiTextPr.prototype.SetHighlight = function(sColor){ return new ApiTextPr(); };

/**
 * Gets the highlight property from the current text properties.
 * @memberof ApiTextPr
 * @typeofeditors ["CDE", "CPE"]
 * @returns {string}
 * @since 8.1.0
 */
ApiTextPr.prototype.GetHighlight = function(){ return ""; };

/**
 * Sets the text spacing measured in twentieths of a point.
 * @memberof ApiTextPr
 * @typeofeditors ["CDE", "CSE", "CPE"]
 * @param {twips} nSpacing - The value of the text spacing measured in twentieths of a point (1/1440 of an inch).
 * @returns {ApiTextPr} - this text properties.
 */
ApiTextPr.prototype.SetSpacing = function(nSpacing){ return new ApiTextPr(); };

/**
 * Gets the text spacing from the current text properties measured in twentieths of a point.
 * @memberof ApiTextPr
 * @typeofeditors ["CDE", "CSE", "CPE"]
 * @returns {twips}
 * @since 8.1.0
 */
ApiTextPr.prototype.GetSpacing = function(){ return new twips(); };

/**
 * Specifies that the contents of the run are displayed with two horizontal lines through each character displayed on the line.
 * @memberof ApiTextPr
 * @typeofeditors ["CDE", "CSE", "CPE"]
 * @param {boolean} isDoubleStrikeout - Specifies that the contents of the current run are displayed double struck through.
 * @returns {ApiTextPr} - this text properties.
 */
ApiTextPr.prototype.SetDoubleStrikeout = function(isDoubleStrikeout){ return new ApiTextPr(); };

/**
 * Gets the double strikeout property from the current text properties.
 * @memberof ApiTextPr
 * @typeofeditors ["CDE", "CSE", "CPE"]
 * @returns {boolean}
 * @since 8.1.0
 */
ApiTextPr.prototype.GetDoubleStrikeout = function(){ return true; };

/**
 * Specifies that any lowercase characters in the text run are formatted for display only as their capital letter character equivalents.
 * @memberof ApiTextPr
 * @typeofeditors ["CDE", "CSE", "CPE"]
 * @param {boolean} isCaps - Specifies that the contents of the current run are displayed capitalized.
 * @returns {ApiTextPr} - this text properties.
 */
ApiTextPr.prototype.SetCaps = function(isCaps){ return new ApiTextPr(); };

/**
 * Specifies whether the text with the current text properties are capitalized.
 * @memberof ApiTextPr
 * @typeofeditors ["CDE", "CSE", "CPE"]
 * @returns {boolean}
 * @since 8.1.0
 */
ApiTextPr.prototype.GetCaps = function(){ return true; };

/**
 * Specifies that all the small letter characters in the text run are formatted for display only as their capital
 * letter character equivalents which are two points smaller than the actual font size specified for this text.
 * @memberof ApiTextPr
 * @typeofeditors ["CDE", "CSE", "CPE"]
 * @param {boolean} isSmallCaps - Specifies if the contents of the current run are displayed capitalized two points smaller or not.
 * @returns {ApiTextPr} - this text properties.
 */
ApiTextPr.prototype.SetSmallCaps = function(isSmallCaps){ return new ApiTextPr(); };

/**
 * Specifies whether the text with the current text properties are displayed capitalized two points smaller than the actual font size.
 * @memberof ApiTextPr
 * @typeofeditors ["CDE", "CSE", "CPE"]
 * @returns {boolean}
 * @since 8.1.0
 */
ApiTextPr.prototype.GetSmallCaps = function(){ return true; };

/**
 * Sets the text color to the current text run.
 * @memberof ApiTextPr
 * @typeofeditors ["CSE", "CPE"]
 * @param {ApiFill} oApiFill - The color or pattern used to fill the text color.
 * @returns {ApiTextPr} - this text properties.
 */
ApiTextPr.prototype.SetFill = function(oApiFill){ return new ApiTextPr(); };

/**
 * Gets the text color from the current text properties.
 * @memberof ApiTextPr
 * @typeofeditors ["CSE", "CPE"]
 * @returns {ApiFill}
 * @since 8.1.0
 */
ApiTextPr.prototype.GetFill = function(){ return new ApiFill(); };

/**
 * Sets the text fill to the current text run.
 * @memberof ApiTextPr
 * @typeofeditors ["CSE", "CPE", "CSE"]
 * @param {ApiFill} oApiFill - The color or pattern used to fill the text color.
 * @returns {ApiTextPr} - this text properties.
 */
ApiTextPr.prototype.SetTextFill = function(oApiFill){ return new ApiTextPr(); };

/**
 * Gets the text fill from the current text properties.
 * @memberof ApiTextPr
 * @typeofeditors ["CSE", "CPE"]
 * @returns {ApiFill}
 * @since 8.1.0
 */
ApiTextPr.prototype.GetTextFill = function(){ return new ApiFill(); };

/**
 * Sets the text outline to the current text run.
 * @memberof ApiTextPr
 * @typeofeditors ["CSE", "CPE", "CSE"]
 * @param {ApiStroke} oStroke - The stroke used to create the text outline.
 * @returns {ApiTextPr} - this text properties.
 */
ApiTextPr.prototype.SetOutLine = function(oStroke){ return new ApiTextPr(); };

/**
 * Gets the text outline from the current text properties.
 * @memberof ApiTextPr
 * @typeofeditors ["CSE", "CPE"]
 * @returns {ApiStroke}
 * @since 8.1.0
 */
ApiTextPr.prototype.GetOutLine = function(){ return new ApiStroke(); };

/**
 * Returns a type of the ApiParaPr class.
 * @memberof ApiParaPr
 * @typeofeditors ["CDE", "CSE", "CPE"]
 * @returns {"paraPr"}
 */
ApiParaPr.prototype.GetClassType = function(){ return ""; };

/**
 * Sets the paragraph left side indentation.
 * @memberof ApiParaPr
 * @typeofeditors ["CDE", "CSE", "CPE"]
 * @param {twips} nValue - The paragraph left side indentation value measured in twentieths of a point (1/1440 of an inch).
 */
ApiParaPr.prototype.SetIndLeft = function(nValue){};

/**
 * Returns the paragraph left side indentation.
 * @memberof ApiParaPr
 * @typeofeditors ["CDE", "CSE", "CPE"]
 * @returns {twips | undefined} - The paragraph left side indentation value measured in twentieths of a point (1/1440 of an inch).
 */
ApiParaPr.prototype.GetIndLeft = function(){ return new twips(); };

/**
 * Sets the paragraph right side indentation.
 * @memberof ApiParaPr
 * @typeofeditors ["CDE", "CSE", "CPE"]
 * @param {twips} nValue - The paragraph right side indentation value measured in twentieths of a point (1/1440 of an inch).
 */
ApiParaPr.prototype.SetIndRight = function(nValue){};

/**
 * Returns the paragraph right side indentation.
 * @memberof ApiParaPr
 * @typeofeditors ["CDE", "CSE", "CPE"]
 * @returns {twips | undefined} - The paragraph right side indentation value measured in twentieths of a point (1/1440 of an inch).
 */
ApiParaPr.prototype.GetIndRight = function(){ return new twips(); };

/**
 * Sets the paragraph first line indentation.
 * @memberof ApiParaPr
 * @typeofeditors ["CDE", "CSE", "CPE"]
 * @param {twips} nValue - The paragraph first line indentation value measured in twentieths of a point (1/1440 of an inch).
 */
ApiParaPr.prototype.SetIndFirstLine = function(nValue){};

/**
 * Returns the paragraph first line indentation.
 * @memberof ApiParaPr
 * @typeofeditors ["CDE", "CSE", "CPE"]
 * @returns {twips | undefined} - The paragraph first line indentation value measured in twentieths of a point (1/1440 of an inch).
 */
ApiParaPr.prototype.GetIndFirstLine = function(){ return new twips(); };

/**
 * Sets the paragraph contents justification.
 * @memberof ApiParaPr
 * @typeofeditors ["CDE", "CSE", "CPE"]
 * @param {("left" | "right" | "both" | "center")} sJc - The justification type that
 * will be applied to the paragraph contents.
 */
ApiParaPr.prototype.SetJc = function(sJc){};

/**
 * Returns the paragraph contents justification.
 * @memberof ApiParaPr
 * @typeofeditors ["CDE", "CSE", "CPE"]
 * @returns {("left" | "right" | "both" | "center" | undefined)} 
 */
ApiParaPr.prototype.GetJc = function(){ return ""; };

/**
 * Sets the paragraph line spacing. If the value of the sLineRule parameter is either 
 * "atLeast" or "exact", then the value of nLine will be interpreted as twentieths of a point. If 
 * the value of the sLineRule parameter is "auto", then the value of the 
 * nLine parameter will be interpreted as 240ths of a line.
 * @memberof ApiParaPr
 * @typeofeditors ["CDE", "CSE", "CPE"]
 * @param {(twips | line240)} nLine - The line spacing value measured either in twentieths of a point (1/1440 of an inch) or in 240ths of a line.
 * @param {("auto" | "atLeast" | "exact")} sLineRule - The rule that determines the measuring units of the line spacing.
 */
ApiParaPr.prototype.SetSpacingLine = function(nLine, sLineRule){};

/**
 * Returns the paragraph line spacing value.
 * @memberof ApiParaPr
 * @typeofeditors ["CDE", "CSE", "CPE"]
 * @returns {twips | line240 | undefined} - to know is twips or line240 use ApiParaPr.prototype.GetSpacingLineRule().
 */
ApiParaPr.prototype.GetSpacingLineValue = function(){ return new twips(); };

/**
 * Returns the paragraph line spacing rule.
 * @memberof ApiParaPr
 * @typeofeditors ["CDE", "CSE", "CPE"]
 * @returns {"auto" | "atLeast" | "exact" | undefined} 
 */
ApiParaPr.prototype.GetSpacingLineRule = function(){ return ""; };

/**
 * Sets the spacing before the current paragraph. If the value of the isBeforeAuto parameter is true, then 
 * any value of the nBefore is ignored. If isBeforeAuto parameter is not specified, then 
 * it will be interpreted as false.
 * @memberof ApiParaPr
 * @typeofeditors ["CDE", "CSE", "CPE"]
 * @param {twips} nBefore - The value of the spacing before the current paragraph measured in twentieths of a point (1/1440 of an inch).
 * @param {boolean} [isBeforeAuto=false] - The true value disables the spacing before the current paragraph.
 */
ApiParaPr.prototype.SetSpacingBefore = function(nBefore, isBeforeAuto){};

/**
 * Returns the spacing before value of the current paragraph.
 * @memberof ApiParaPr
 * @typeofeditors ["CDE", "CSE", "CPE"]
 * @returns {twips} - The value of the spacing before the current paragraph measured in twentieths of a point (1/1440 of an inch).
 */
ApiParaPr.prototype.GetSpacingBefore = function(){ return new twips(); };

/**
 * Sets the spacing after the current paragraph. If the value of the isAfterAuto parameter is true, then 
 * any value of the nAfter is ignored. If isAfterAuto parameter is not specified, then it 
 * will be interpreted as false.
 * @memberof ApiParaPr
 * @typeofeditors ["CDE", "CSE", "CPE"]
 * @param {twips} nAfter - The value of the spacing after the current paragraph measured in twentieths of a point (1/1440 of an inch).
 * @param {boolean} [isAfterAuto=false] - The true value disables the spacing after the current paragraph.
 */
ApiParaPr.prototype.SetSpacingAfter = function(nAfter, isAfterAuto){};

/**
 * Returns the spacing after value of the current paragraph. 
 * @memberof ApiParaPr
 * @typeofeditors ["CDE", "CSE", "CPE"]
 * @returns {twips} - The value of the spacing after the current paragraph measured in twentieths of a point (1/1440 of an inch).
 */
ApiParaPr.prototype.GetSpacingAfter = function(){ return new twips(); };

/**
 * Specifies a sequence of custom tab stops which will be used for any tab characters in the current paragraph.
 * <b>Warning</b>: The lengths of aPos array and aVal array <b>MUST BE</b> equal to each other.
 * @memberof ApiParaPr
 * @typeofeditors ["CDE", "CSE", "CPE"]
 * @param {twips[]} aPos - An array of the positions of custom tab stops with respect to the current page margins
 * measured in twentieths of a point (1/1440 of an inch).
 * @param {TabJc[]} aVal - An array of the styles of custom tab stops, which determines the behavior of the tab
 * stop and the alignment which will be applied to text entered at the current custom tab stop.
 */
ApiParaPr.prototype.SetTabs = function(aPos, aVal){};

/**
 * Sets the bullet or numbering to the current paragraph.
 * @memberof ApiParaPr
 * @typeofeditors ["CSE", "CPE"]
 * @param {?ApiBullet} oBullet - The bullet object created with the {@link Api#CreateBullet} or {@link Api#CreateNumbering} method.
 */
ApiParaPr.prototype.SetBullet = function(oBullet){};

/**
 * Returns a type of the ApiFill class.
 * @memberof ApiFill
 * @typeofeditors ["CDE", "CSE", "CPE"]
 * @returns {"fill"}
 */
ApiFill.prototype.GetClassType = function(){ return ""; };

/**
 * Returns a type of the ApiStroke class.
 * @memberof ApiStroke
 * @typeofeditors ["CDE", "CSE", "CPE"]
 * @returns {"stroke"}
 */
ApiStroke.prototype.GetClassType = function(){ return ""; };

/**
 * Returns a type of the ApiGradientStop class.
 * @memberof ApiGradientStop
 * @typeofeditors ["CDE", "CSE", "CPE"]
 * @returns {"gradientStop"}
 */
ApiGradientStop.prototype.GetClassType = function (){ return ""; };

/**
 * Returns a type of the ApiUniColor class.
 * @memberof ApiUniColor
 * @typeofeditors ["CDE", "CSE", "CPE"]
 * @returns {"uniColor"}
 */
ApiUniColor.prototype.GetClassType = function (){ return ""; };

/**
 * Returns a type of the ApiRGBColor class.
 * @memberof ApiRGBColor
 * @typeofeditors ["CDE", "CSE", "CPE"]
 * @returns {"rgbColor"}
 */
ApiRGBColor.prototype.GetClassType = function (){ return ""; };

/**
 * Returns a type of the ApiSchemeColor class.
 * @memberof ApiSchemeColor
 * @typeofeditors ["CDE", "CSE", "CPE"]
 * @returns {"schemeColor"}
 */
ApiSchemeColor.prototype.GetClassType = function (){ return ""; };

/**
 * Returns a type of the ApiPresetColor class.
 * @memberof ApiPresetColor
 * @typeofeditors ["CDE", "CSE", "CPE"]
 * @returns {"presetColor"}
 */
ApiPresetColor.prototype.GetClassType = function (){ return ""; };

/**
 * Returns a type of the ApiBullet class.
 * @memberof ApiBullet
 * @typeofeditors ["CSE", "CPE"]
 * @returns {"bullet"}
 */
ApiBullet.prototype.GetClassType = function(){ return ""; };

/**
 * Replaces each paragraph (or text in cell) in the select with the corresponding text from an array of strings.
 * @memberof ApiInterface
 * @typeofeditors ["CDE", "CSE", "CPE"]
 * @param {Array} arrString - An array of replacement strings.
 * @param {string} [sParaTab=" "] - A character which is used to specify the tab in the source text.
 * @param {string} [sParaNewLine=" "] - A character which is used to specify the line break character in the source text.
 */
ApiInterface.prototype.ReplaceTextSmart = function(arrString, sParaTab, sParaNewLine){};

/**
 * Creates the empty text properties.
 * @memberof ApiInterface
 * @typeofeditors ["CDE", "CSE", "CPE"]
 * @returns {ApiTextPr}
 */
ApiInterface.prototype.CreateTextPr = function () { return new ApiTextPr(); };

/**
 * Returns the full name of the currently opened file.
 * @memberof ApiInterface
 * @typeofeditors ["CDE", "CPE", "CSE"]
 * @returns {string}
 */
ApiInterface.prototype.GetFullName = function () { return ""; };

/**
 * Returns the full name of the currently opened file.
 * @memberof ApiInterface
 * @typeofeditors ["CDE", "CPE", "CSE"]
 * @returns {string}
 */
ApiInterface.prototype.FullName = ApiInterface.prototype.GetFullName ();

/**
 * Returns a type of the ApiComment class.
 * @memberof ApiComment
 * @typeofeditors ["CDE", "CPE"]
 * @returns {"comment"}
 */
ApiComment.prototype.GetClassType = function (){ return ""; };

/**
 * Returns the comment text.
 * @memberof ApiComment
 * @typeofeditors ["CDE", "CPE"]
 * @returns {string}
 */
ApiComment.prototype.GetText = function () { return ""; };

/**
 * Sets the comment text.
 * @memberof ApiComment
 * @typeofeditors ["CDE", "CPE"]
 * @param {string} sText - The comment text.
 * @returns {ApiComment} - this
 */
ApiComment.prototype.SetText = function (sText) { return new ApiComment(); };

/**
 * Returns the comment author's name.
 * @memberof ApiComment
 * @typeofeditors ["CDE", "CPE"]
 * @returns {string}
 */
ApiComment.prototype.GetAuthorName = function () { return ""; };

/**
 * Sets the comment author's name.
 * @memberof ApiComment
 * @typeofeditors ["CDE", "CPE"]
 * @param {string} sAuthorName - The comment author's name.
 * @returns {ApiComment} - this
 */
ApiComment.prototype.SetAuthorName = function (sAuthorName) { return new ApiComment(); };

/**
 * Sets the user ID to the comment author.
 * @memberof ApiComment
 * @typeofeditors ["CDE", "CPE"]
 * @param {string} sUserId - The user ID of the comment author.
 * @returns {ApiComment} - this
 */
ApiComment.prototype.SetUserId = function (sUserId) { return new ApiComment(); };

/**
 * Checks if a comment is solved or not.
 * @memberof ApiComment
 * @typeofeditors ["CDE", "CPE"]
 * @returns {boolean}
 */
ApiComment.prototype.IsSolved = function () { return true; };

/**
 * Marks a comment as solved.
 * @memberof ApiComment
 * @typeofeditors ["CDE", "CPE"]
 * @param {boolean} bSolved - Specifies if a comment is solved or not.
 * @returns {ApiComment} - this
 */
ApiComment.prototype.SetSolved = function (bSolved) { return new ApiComment(); };

/**
 * Returns the timestamp of the comment creation in UTC format.
 * @memberof ApiComment
 * @typeofeditors ["CDE", "CPE"]
 * @returns {Number}
 */
ApiComment.prototype.GetTimeUTC = function () { return 0; };

/**
 * Sets the timestamp of the comment creation in UTC format.
 * @memberof ApiComment
 * @typeofeditors ["CDE", "CPE"]
 * @param {Number | String} nTimeStamp - The timestamp of the comment creation in UTC format.
 * @returns {ApiComment} - this
 */
ApiComment.prototype.SetTimeUTC = function (timeStamp) { return new ApiComment(); };

/**
 * Returns the timestamp of the comment creation in the current time zone format.
 * @memberof ApiComment
 * @typeofeditors ["CDE", "CPE"]
 * @returns {Number}
 */
ApiComment.prototype.GetTime = function () { return 0; };

/**
 * Sets the timestamp of the comment creation in the current time zone format.
 * @memberof ApiComment
 * @typeofeditors ["CDE", "CPE"]
 * @param {Number | String} nTimeStamp - The timestamp of the comment creation in the current time zone format.
 * @returns {ApiComment} - this
 */
ApiComment.prototype.SetTime = function (timeStamp) { return new ApiComment(); };

/**
 * Returns the quote text of the current comment.
 * @memberof ApiComment
 * @typeofeditors ["CDE", "CPE"]
 * @returns {Number}
 */
ApiComment.prototype.GetQuoteText = function () { return 0; };

/**
 * Returns a number of the comment replies.
 * @memberof ApiComment
 * @typeofeditors ["CDE", "CPE"]
 * @returns {Number}
 */
ApiComment.prototype.GetRepliesCount = function () { return 0; };

/**
 * Adds a reply to a comment.
 * @memberof ApiComment
 * @typeofeditors ["CDE", "CPE"]
 * @param {String} sText - The comment reply text (required).
 * @param {String} sAuthorName - The name of the comment reply author (optional).
 * @param {String} sUserId - The user ID of the comment reply author (optional).
 * @param {Number} [nPos=this.GetRepliesCount()] - The comment reply position.
 * @returns {ApiComment} - this
 */
ApiComment.prototype.AddReply = function (sText, sAuthorName, sUserId, nPos) { return new ApiComment(); };

/**
 * Removes the specified comment replies.
 * @memberof ApiComment
 * @typeofeditors ["CDE", "CPE"]
 * @param {Number} [nPos = 0] - The position of the first comment reply to remove.
 * @param {Number} [nCount = 1] - A number of comment replies to remove.
 * @param {boolean} [bRemoveAll = false] - Specifies whether to remove all comment replies or not.
 * @returns {ApiComment} - this
 */
ApiComment.prototype.RemoveReplies = function (nPos, nCount, bRemoveAll) { return new ApiComment(); };

/**
 * Deletes the current comment from the document.
 * @memberof ApiComment
 * @typeofeditors ["CDE", "CPE"]
 * @returns {boolean}
 */
ApiComment.prototype.Delete = function (){ return true; };

/**
 * Returns a type of the ApiCommentReply class.
 * @memberof ApiCommentReply
 * @typeofeditors ["CDE", "CPE"]
 * @returns {"commentReply"}
 */
ApiCommentReply.prototype.GetClassType = function () { return ""; };

/**
 * Returns the comment reply text.
 * @memberof ApiCommentReply
 * @typeofeditors ["CDE", "CPE"]
 * @returns {string}
 */
ApiCommentReply.prototype.GetText = function () { return ""; };

/**
 * Sets the comment reply text.
 * @memberof ApiCommentReply
 * @typeofeditors ["CDE", "CPE"]
 * @param {string} sText - The comment reply text.
 * @returns {ApiCommentReply} - this
 */
ApiCommentReply.prototype.SetText = function (sText) { return new ApiCommentReply(); };

/**
 * Returns the comment reply author's name.
 * @memberof ApiCommentReply
 * @typeofeditors ["CDE", "CPE"]
 * @returns {string}
 */
ApiCommentReply.prototype.GetAuthorName = function () { return ""; };

/**
 * Sets the comment reply author's name.
 * @memberof ApiCommentReply
 * @typeofeditors ["CDE", "CPE"]
 * @param {string} sAuthorName - The comment reply author's name.
 * @returns {ApiCommentReply} - this
 */
ApiCommentReply.prototype.SetAuthorName = function (sAuthorName) { return new ApiCommentReply(); };

/**
 * Sets the user ID to the comment reply author.
 * @memberof ApiCommentReply
 * @typeofeditors ["CDE", "CPE"]
 * @param {string} sUserId - The user ID of the comment reply author.
 * @returns {ApiCommentReply} - this
 */
ApiCommentReply.prototype.SetUserId = function (sUserId) { return new ApiCommentReply(); };

/**
 * В проверке на лок, которую мы делаем после выполнения скрипта, нужно различать действия сделанные через
 * разрешенные методы, и действия, которые пользователь пытался сам сделать с формами
 * @param fn
 * @param t
 * @returns {*}
 */
function executeNoFormLockCheck(fn, t){ return null; }

/**
 * Gets a document color object by color name.
 * @param {highlightColor} sColor - available highlight color
 * @returns {object}
 */
function private_getHighlightColorByName(sColor){ return null; }

/**
 * Gets a document highlight name by color object.
 * @param {object} oColor - available highlight color
 * @returns {highlightColor}
 */
function private_getHighlightNameByColor(oColor){ return null; }

/**
 * Class representing a presentation.
 * @constructor
 */
function ApiPresentation(oPresentation){}

/**
 * Class representing a slide master.
 * @constructor
 */
function ApiMaster(oMaster){}

/**
 * Class representing a slide layout.
 * @constructor
 */
function ApiLayout(oLayout){}

/**
 * Class representing a placeholder.
 * @constructor
 */
function ApiPlaceholder(oPh){}

/**
 * Class representing a presentation theme.
 * @constructor
 */
function ApiTheme(oThemeInfo){}

/**
 * Class representing a theme color scheme.
 * @constructor
 */
function ApiThemeColorScheme(oClrScheme){}

/**
 * Class representing a theme format scheme.
 * @constructor
 */
function ApiThemeFormatScheme(ofmtScheme){}

/**
 * Class representing a theme font scheme.
 * @constructor
 */
function ApiThemeFontScheme(ofontScheme){}

/**
 * Class representing a slide.
 * @constructor
 */
function ApiSlide(oSlide){}

/**
 * Class representing a graphical object.
 * @constructor
 */
function ApiDrawing(Drawing){}

/**
 * Class representing a shape.
 * @constructor
 */
function ApiShape(oShape){}
ApiShape.prototype = Object.create(ApiDrawing.prototype);
ApiShape.prototype.constructor = ApiShape;

/**
 * Class representing an image.
 * @constructor
 */
function ApiImage(oImage){}
ApiImage.prototype = Object.create(ApiDrawing.prototype);
ApiImage.prototype.constructor = ApiImage;

/**
 * Class representing a chart.
 * @constructor
 */
function ApiChart(oChart){}
ApiChart.prototype = Object.create(ApiDrawing.prototype);
ApiChart.prototype.constructor    = ApiChart;

/**
 * Class representing a group of drawings.
 * @constructor
 */
function ApiGroup(oGroup){}
ApiGroup.prototype = Object.create(ApiDrawing.prototype);
ApiGroup.prototype.constructor = ApiGroup;

/**
 * Class representing an OLE object.
 * @constructor
 */
function ApiOleObject(OleObject){}
ApiOleObject.prototype = Object.create(ApiDrawing.prototype);
ApiOleObject.prototype.constructor = ApiOleObject;

/**
 * Class representing a table.
 * @param oGraphicFrame
 * @constructor
 * */
function ApiTable(oGraphicFrame){}
ApiTable.prototype = Object.create(ApiDrawing.prototype);
ApiTable.prototype.constructor = ApiTable;

/**
 * Class representing a table row.
 * @param oTableRow
 * @constructor
 */
function ApiTableRow(oTableRow){}

/**
 * Class representing a table cell.
 * @param oCell
 * @constructor
 */
function ApiTableCell(oCell){}

/**
 * Twentieths of a point (equivalent to 1/1440th of an inch).
 * @typedef {number} twips
 */

/**
 * 240ths of a line.
 * @typedef {number} line240
 */

/**
 * Half-points (2 half-points = 1 point).
 * @typedef {number} hps
 */

/**
 * A numeric value from 0 to 255.
 * @typedef {number} byte
 */

/**
 * 60000th of a degree (5400000 = 90 degrees).
 * @typedef {number} PositiveFixedAngle
 * */

/**
 * A border type.
 * @typedef {("none" | "single")} BorderType
 */

/**
 * Types of custom tab.
 * @typedef {("clear" | "left" | "right" | "center")} TabJc
 */

/**
 * Eighths of a point (24 eighths of a point = 3 points).
 * @typedef {number} pt_8
 */

/**
 * A point.
 * @typedef {number} pt
 */

/**
 * English measure unit. 1 mm = 36000 EMUs, 1 inch = 914400 EMUs.
 * @typedef {number} EMU
 */

/**
 * This type specifies the preset shape geometry that will be used for a shape.
 * @typedef {("accentBorderCallout1" | "accentBorderCallout2" | "accentBorderCallout3" | "accentCallout1" | "accentCallout2" | "accentCallout3" | "actionButtonBackPrevious" | "actionButtonBeginning" | "actionButtonBlank" | "actionButtonDocument" | "actionButtonEnd" | "actionButtonForwardNext" | "actionButtonHelp" | "actionButtonHome" | "actionButtonInformation" | "actionButtonMovie" | "actionButtonReturn" | "actionButtonSound" | "arc" | "bentArrow" | "bentConnector2" | "bentConnector3" | "bentConnector4" | "bentConnector5" | "bentUpArrow" | "bevel" | "blockArc" | "borderCallout1" | "borderCallout2" | "borderCallout3" | "bracePair" | "bracketPair" | "callout1" | "callout2" | "callout3" | "can" | "chartPlus" | "chartStar" | "chartX" | "chevron" | "chord" | "circularArrow" | "cloud" | "cloudCallout" | "corner" | "cornerTabs" | "cube" | "curvedConnector2" | "curvedConnector3" | "curvedConnector4" | "curvedConnector5" | "curvedDownArrow" | "curvedLeftArrow" | "curvedRightArrow" | "curvedUpArrow" | "decagon" | "diagStripe" | "diamond" | "dodecagon" | "donut" | "doubleWave" | "downArrow" | "downArrowCallout" | "ellipse" | "ellipseRibbon" | "ellipseRibbon2" | "flowChartAlternateProcess" | "flowChartCollate" | "flowChartConnector" | "flowChartDecision" | "flowChartDelay" | "flowChartDisplay" | "flowChartDocument" | "flowChartExtract" | "flowChartInputOutput" | "flowChartInternalStorage" | "flowChartMagneticDisk" | "flowChartMagneticDrum" | "flowChartMagneticTape" | "flowChartManualInput" | "flowChartManualOperation" | "flowChartMerge" | "flowChartMultidocument" | "flowChartOfflineStorage" | "flowChartOffpageConnector" | "flowChartOnlineStorage" | "flowChartOr" | "flowChartPredefinedProcess" | "flowChartPreparation" | "flowChartProcess" | "flowChartPunchedCard" | "flowChartPunchedTape" | "flowChartSort" | "flowChartSummingJunction" | "flowChartTerminator" | "foldedCorner" | "frame" | "funnel" | "gear6" | "gear9" | "halfFrame" | "heart" | "heptagon" | "hexagon" | "homePlate" | "horizontalScroll" | "irregularSeal1" | "irregularSeal2" | "leftArrow" | "leftArrowCallout" | "leftBrace" | "leftBracket" | "leftCircularArrow" | "leftRightArrow" | "leftRightArrowCallout" | "leftRightCircularArrow" | "leftRightRibbon" | "leftRightUpArrow" | "leftUpArrow" | "lightningBolt" | "line" | "lineInv" | "mathDivide" | "mathEqual" | "mathMinus" | "mathMultiply" | "mathNotEqual" | "mathPlus" | "moon" | "nonIsoscelesTrapezoid" | "noSmoking" | "notchedRightArrow" | "octagon" | "parallelogram" | "pentagon" | "pie" | "pieWedge" | "plaque" | "plaqueTabs" | "plus" | "quadArrow" | "quadArrowCallout" | "rect" | "ribbon" | "ribbon2" | "rightArrow" | "rightArrowCallout" | "rightBrace" | "rightBracket" | "round1Rect" | "round2DiagRect" | "round2SameRect" | "roundRect" | "rtTriangle" | "smileyFace" | "snip1Rect" | "snip2DiagRect" | "snip2SameRect" | "snipRoundRect" | "squareTabs" | "star10" | "star12" | "star16" | "star24" | "star32" | "star4" | "star5" | "star6" | "star7" | "star8" | "straightConnector1" | "stripedRightArrow" | "sun" | "swooshArrow" | "teardrop" | "trapezoid" | "triangle" | "upArrowCallout" | "upDownArrow" | "upDownArrow" | "upDownArrowCallout" | "uturnArrow" | "verticalScroll" | "wave" | "wedgeEllipseCallout" | "wedgeRectCallout" | "wedgeRoundRectCallout")} ShapeType
 */

/**
* A bullet type which will be added to the paragraph in spreadsheet or presentation.
* @typedef {("None" | "ArabicPeriod"  | "ArabicParenR"  | "RomanUcPeriod" | "RomanLcPeriod" | "AlphaLcParenR" | "AlphaLcPeriod" | "AlphaUcParenR" | "AlphaUcPeriod")} BulletType
*/

/**
 * This type specifies the available chart types which can be used to create a new chart.
 * @typedef {("bar" | "barStacked" | "barStackedPercent" | "bar3D" | "barStacked3D" | "barStackedPercent3D" | "barStackedPercent3DPerspective" | "horizontalBar" | "horizontalBarStacked" | "horizontalBarStackedPercent" | "horizontalBar3D" | "horizontalBarStacked3D" | "horizontalBarStackedPercent3D" | "lineNormal" | "lineStacked" | "lineStackedPercent" | "line3D" | "pie" | "pie3D" | "doughnut" | "scatter" | "stock" | "area" | "areaStacked" | "areaStackedPercent")} ChartType
 */

/**
 * The available text vertical alignment (used to align text in a shape with a placement for text inside it).
 * @typedef {("top" | "center" | "bottom")} VerticalTextAlign
 * */

/**
 * The available color scheme identifiers.
 * @typedef {("accent1" | "accent2" | "accent3" | "accent4" | "accent5" | "accent6" | "bg1" | "bg2" | "dk1" | "dk2" | "lt1" | "lt2" | "tx1" | "tx2")} SchemeColorId
 * */

/**
 * The available preset color names.
 * @typedef {("aliceBlue" | "antiqueWhite" | "aqua" | "aquamarine" | "azure" | "beige" | "bisque" | "black" | "blanchedAlmond" | "blue" | "blueViolet" | "brown" | "burlyWood" | "cadetBlue" | "chartreuse" | "chocolate" | "coral" | "cornflowerBlue" | "cornsilk" | "crimson" | "cyan" | "darkBlue" | "darkCyan" | "darkGoldenrod" | "darkGray" | "darkGreen" | "darkGrey" | "darkKhaki" | "darkMagenta" | "darkOliveGreen" | "darkOrange" | "darkOrchid" | "darkRed" | "darkSalmon" | "darkSeaGreen" | "darkSlateBlue" | "darkSlateGray" | "darkSlateGrey" | "darkTurquoise" | "darkViolet" | "deepPink" | "deepSkyBlue" | "dimGray" | "dimGrey" | "dkBlue" | "dkCyan" | "dkGoldenrod" | "dkGray" | "dkGreen" | "dkGrey" | "dkKhaki" | "dkMagenta" | "dkOliveGreen" | "dkOrange" | "dkOrchid" | "dkRed" | "dkSalmon" | "dkSeaGreen" | "dkSlateBlue" | "dkSlateGray" | "dkSlateGrey" | "dkTurquoise" | "dkViolet" | "dodgerBlue" | "firebrick" | "floralWhite" | "forestGreen" | "fuchsia" | "gainsboro" | "ghostWhite" | "gold" | "goldenrod" | "gray" | "green" | "greenYellow" | "grey" | "honeydew" | "hotPink" | "indianRed" | "indigo" | "ivory" | "khaki" | "lavender" | "lavenderBlush" | "lawnGreen" | "lemonChiffon" | "lightBlue" | "lightCoral" | "lightCyan" | "lightGoldenrodYellow" | "lightGray" | "lightGreen" | "lightGrey" | "lightPink" | "lightSalmon" | "lightSeaGreen" | "lightSkyBlue" | "lightSlateGray" | "lightSlateGrey" | "lightSteelBlue" | "lightYellow" | "lime" | "limeGreen" | "linen" | "ltBlue" | "ltCoral" | "ltCyan" | "ltGoldenrodYellow" | "ltGray" | "ltGreen" | "ltGrey" | "ltPink" | "ltSalmon" | "ltSeaGreen" | "ltSkyBlue" | "ltSlateGray" | "ltSlateGrey" | "ltSteelBlue" | "ltYellow" | "magenta" | "maroon" | "medAquamarine" | "medBlue" | "mediumAquamarine" | "mediumBlue" | "mediumOrchid" | "mediumPurple" | "mediumSeaGreen" | "mediumSlateBlue" | "mediumSpringGreen" | "mediumTurquoise" | "mediumVioletRed" | "medOrchid" | "medPurple" | "medSeaGreen" | "medSlateBlue" | "medSpringGreen" | "medTurquoise" | "medVioletRed" | "midnightBlue" | "mintCream" | "mistyRose" | "moccasin" | "navajoWhite" | "navy" | "oldLace" | "olive" | "oliveDrab" | "orange" | "orangeRed" | "orchid" | "paleGoldenrod" | "paleGreen" | "paleTurquoise" | "paleVioletRed" | "papayaWhip" | "peachPuff" | "peru" | "pink" | "plum" | "powderBlue" | "purple" | "red" | "rosyBrown" | "royalBlue" | "saddleBrown" | "salmon" | "sandyBrown" | "seaGreen" | "seaShell" | "sienna" | "silver" | "skyBlue" | "slateBlue" | "slateGray" | "slateGrey" | "snow" | "springGreen" | "steelBlue" | "tan" | "teal" | "thistle" | "tomato" | "turquoise" | "violet" | "wheat" | "white" | "whiteSmoke" | "yellow" | "yellowGreen")} PresetColor
 * */

/**
 * Possible values for the position of chart tick labels (either horizontal or vertical).
 * * <b>"none"</b> - not display the selected tick labels.
 * * <b>"nextTo"</b> - set the position of the selected tick labels next to the main label.
 * * <b>"low"</b> - set the position of the selected tick labels in the part of the chart with lower values.
 * * <b>"high"</b> - set the position of the selected tick labels in the part of the chart with higher values.
 * @typedef {("none" | "nextTo" | "low" | "high")} TickLabelPosition
 * **/

/**
 * The type of a fill which uses an image as a background.
 * * <b>"tile"</b> - if the image is smaller than the shape which is filled, the image will be tiled all over the created shape surface.
 * * <b>"stretch"</b> - if the image is smaller than the shape which is filled, the image will be stretched to fit the created shape surface.
 * @typedef {"tile" | "stretch"} BlipFillType
 * */

/**
 * The available preset patterns which can be used for the fill.
 * @typedef {"cross" | "dashDnDiag" | "dashHorz" | "dashUpDiag" | "dashVert" | "diagBrick" | "diagCross" | "divot" | "dkDnDiag" | "dkHorz" | "dkUpDiag" | "dkVert" | "dnDiag" | "dotDmnd" | "dotGrid" | "horz" | "horzBrick" | "lgCheck" | "lgConfetti" | "lgGrid" | "ltDnDiag" | "ltHorz" | "ltUpDiag" | "ltVert" | "narHorz" | "narVert" | "openDmnd" | "pct10" | "pct20" | "pct25" | "pct30" | "pct40" | "pct5" | "pct50" | "pct60" | "pct70" | "pct75" | "pct80" | "pct90" | "plaid" | "shingle" | "smCheck" | "smConfetti" | "smGrid" | "solidDmnd" | "sphere" | "trellis" | "upDiag" | "vert" | "wave" | "wdDnDiag" | "wdUpDiag" | "weave" | "zigZag"} PatternType
 * */

/**
 * The available types of tick mark appearance.
 * @typedef {("cross" | "in" | "none" | "out")} TickMark
 * */

/**
 * Text transform type.
 * @typedef {("textArchDown" | "textArchDownPour" | "textArchUp" | "textArchUpPour" | "textButton" | "textButtonPour" | "textCanDown"
 * | "textCanUp" | "textCascadeDown" | "textCascadeUp" | "textChevron" | "textChevronInverted" | "textCircle" | "textCirclePour"
 * | "textCurveDown" | "textCurveUp" | "textDeflate" | "textDeflateBottom" | "textDeflateInflate" | "textDeflateInflateDeflate" | "textDeflateTop"
 * | "textDoubleWave1" | "textFadeDown" | "textFadeLeft" | "textFadeRight" | "textFadeUp" | "textInflate" | "textInflateBottom" | "textInflateTop"
 * | "textPlain" | "textRingInside" | "textRingOutside" | "textSlantDown" | "textSlantUp" | "textStop" | "textTriangle" | "textTriangleInverted"
 * | "textWave1" | "textWave2" | "textWave4" | "textNoShape")} TextTransform
 * */

/**
 * Axis position in the chart.
 * @typedef {("top" | "bottom" | "right" | "left")} AxisPos
 */

/**
 * Standard numeric format.
 * @typedef {("General" | "0" | "0.00" | "#,##0" | "#,##0.00" | "0%" | "0.00%" |
 * "0.00E+00" | "# ?/?" | "# ??/??" | "m/d/yyyy" | "d-mmm-yy" | "d-mmm" | "mmm-yy" | "h:mm AM/PM" |
 * "h:mm:ss AM/PM" | "h:mm" | "h:mm:ss" | "m/d/yyyy h:mm" | "#,##0_);(#,##0)" | "#,##0_);[Red](#,##0)" | 
 * "#,##0.00_);(#,##0.00)" | "#,##0.00_);[Red](#,##0.00)" | "mm:ss" | "[h]:mm:ss" | "mm:ss.0" | "##0.0E+0" | "@")} NumFormat
 */

/**
 * The 1000th of a percent (100000 = 100%).
 * @typedef {number} PositivePercentage
 * */

/**
 * Returns the main presentation.
 * @typeofeditors ["CPE"]
 * @memberof ApiInterface
 * @returns {ApiPresentation}
 */
ApiInterface.prototype.GetPresentation = function(){ return new ApiPresentation(); };

/**
 * Creates a new slide master.
 * @typeofeditors ["CPE"]
 * @memberof ApiInterface
 * @param {ApiTheme} [oTheme = ApiPresentation.GetMaster(0).GetTheme()] - The presentation theme object.
 * @returns {ApiMaster} - returns null if presentation theme doesn't exist.
 */
ApiInterface.prototype.CreateMaster = function(oTheme){ return new ApiMaster(); };

/**
 * Creates a new slide layout and adds it to the slide master if it is specified.
 * @typeofeditors ["CPE"]
 * @memberof ApiInterface
 * @param {ApiMaster} [oMaster = null] - Parent slide master.
 * @returns {ApiLayout}
 */
ApiInterface.prototype.CreateLayout = function(oMaster){ return new ApiLayout(); };

/**
 * Creates a new placeholder.
 * @typeofeditors ["CPE"]
 * @memberof ApiInterface
 * @param {string} sType - The placeholder type ("body", "chart", "clipArt", "ctrTitle", "diagram", "date", "footer", "header", "media", "object", "picture", "sldImage", "sldNumber", "subTitle", "table", "title").
 * @returns {ApiPlaceholder}
 */
ApiInterface.prototype.CreatePlaceholder = function(sType){ return new ApiPlaceholder(); };

/**
 * Creates a new presentation theme.
 * @typeofeditors ["CPE"]
 * @memberof ApiInterface
 * @param {string} sName - Theme name.
 * @param {ApiMaster} oMaster - Slide master. Required parameter.
 * @param {ApiThemeColorScheme} oClrScheme - Theme color scheme. Required parameter.
 * @param {ApiThemeFormatScheme} oFormatScheme - Theme format scheme. Required parameter.
 * @param {ApiThemeFontScheme} oFontScheme - Theme font scheme. Required parameter.
 * @returns {ApiTheme | null} 
 */
ApiInterface.prototype.CreateTheme = function(sName, oMaster, oClrScheme, oFormatScheme, oFontScheme){ return new ApiTheme(); };

/**
 * Creates a new theme color scheme.
 * @typeofeditors ["CPE"]
 * @memberof ApiInterface
 * @param {(ApiUniColor[] | ApiRGBColor[])} arrColors - Set of colors which are referred to as a color scheme.
 * The color scheme is responsible for defining a list of twelve colors.
 * The array should contain a sequence of colors: 2 dark, 2 light, 6 primary, a color for a hyperlink and a color for the followed hyperlink.
 * @param {string} sName - Theme color scheme name.
 * @returns {ApiThemeColorScheme}
 */
ApiInterface.prototype.CreateThemeColorScheme = function(arrColors, sName){ return new ApiThemeColorScheme(); };

/**
 * Creates a new theme format scheme.
 * @typeofeditors ["CPE"]
 * @memberof ApiInterface
 * @param {ApiFill[]} arrFill - This array contains the fill styles. It should be consist of subtle, moderate and intense fills.
 * @param {ApiFill[]} arrBgFill - This array contains the background fill styles. It should be consist of subtle, moderate and intense fills.
 * @param {ApiStroke[]} arrLine - This array contains the line styles. It should be consist of subtle, moderate and intense lines.
 * @param {string} sName - Theme format scheme name.
 * @returns {ApiThemeFormatScheme} 
 */
ApiInterface.prototype.CreateThemeFormatScheme = function(arrFill, arrBgFill, arrLine, sName){ return new ApiThemeFormatScheme(); };

/**
 * Creates a new theme font scheme.
 * @typeofeditors ["CPE"]
 * @memberof ApiInterface
 * @param {string} mjLatin - The major theme font applied to the latin text.
 * @param {string} mjEa - The major theme font applied to the east asian text.
 * @param {string} mjCs - The major theme font applied to the complex script text.
 * @param {string} mnLatin - The minor theme font applied to the latin text.
 * @param {string} mnEa - The minor theme font applied to the east asian text.
 * @param {string} mnCs - The minor theme font applied to the complex script text.
 * @param {string} sName - Theme font scheme name.
 * @returns {ApiThemeFontScheme}
 */
ApiInterface.prototype.CreateThemeFontScheme = function(mjLatin, mjEa, mjCs, mnLatin, mnEa, mnCs, sName){ return new ApiThemeFontScheme(); };

/**
 * Creates a new slide.
 * @typeofeditors ["CPE"]
 * @memberof ApiInterface
 * @returns {ApiSlide}
 */
ApiInterface.prototype.CreateSlide = function(){ return new ApiSlide(); };

/**
 * Creates an image with the parameters specified.
 * @memberof ApiInterface
 * @typeofeditors ["CPE"]
 * @param {string} sImageSrc - The image source where the image to be inserted should be taken from (currently,
 * only internet URL or Base64 encoded images are supported).
 * @param {EMU} nWidth - The image width in English measure units.
 * @param {EMU} nHeight - The image height in English measure units.
 * @returns {ApiImage}
 */
ApiInterface.prototype.CreateImage = function(sImageSrc, nWidth, nHeight){ return new ApiImage(); };

/**
 * Creates an OLE object with the parameters specified.
 * @memberof ApiInterface
 * @typeofeditors ["CPE"]
 * @param {string} sImageSrc - The image source where the image to be inserted should be taken from (currently, only internet URL or Base64 encoded images are supported).
 * @param {EMU} nWidth - The OLE object width in English measure units.
 * @param {EMU} nHeight - The OLE object height in English measure units.
 * @param {string} sData - The OLE object string data.
 * @param {string} sAppId - The application ID associated with the current OLE object.
 * @returns {ApiOleObject}
 */
ApiInterface.prototype.CreateOleObject = function(sImageSrc, nWidth, nHeight, sData, sAppId){ return new ApiOleObject(); };

/**
 * Creates a shape with the parameters specified.
 * @memberof ApiInterface
 * @typeofeditors ["CPE"]
 * @param {ShapeType} [sType="rect"] - The shape type which specifies the preset shape geometry.
 * @param {EMU} [nWidth = 914400] - The shape width in English measure units.
 * @param {EMU} [nHeight = 914400] - The shape height in English measure units.
 * @param {ApiFill} [oFill    = Api.CreateNoFill()] - The color or pattern used to fill the shape.
 * @param {ApiStroke} [oStroke    = Api.CreateStroke(0, Api.CreateNoFill())] - The stroke used to create the element shadow.
 * @returns {ApiShape}
 * */
ApiInterface.prototype.CreateShape = function(sType, nWidth, nHeight, oFill, oStroke){ return new ApiShape(); };

/**
 * Creates a chart with the parameters specified.
 * @memberof ApiInterface
 * @typeofeditors ["CPE"]
 * @param {ChartType} [sType="bar"] - The chart type used for the chart display.
 * @param {Array} aSeries - The array of the data used to build the chart from.
 * @param {Array} aSeriesNames - The array of the names (the source table column names) used for the data which the chart will be build from.
 * @param {Array} aCatNames - The array of the names (the source table row names) used for the data which the chart will be build from.
 * @param {EMU} nWidth - The chart width in English measure units.
 * @param {EMU} nHeight - The chart height in English measure units.
 * @param {number} nStyleIndex - The chart color style index (can be <b>1 - 48</b>, as described in OOXML specification).
 * @param {NumFormat[] | String[]} aNumFormats - Numeric formats which will be applied to the series (can be custom formats).
 * The default numeric format is "General".
 * @returns {ApiChart}
 * */
ApiInterface.prototype.CreateChart = function(sType, aSeries, aSeriesNames, aCatNames, nWidth, nHeight, nStyleIndex, aNumFormats){ return new ApiChart(); };

/**
 * Creates a group of drawings.
 * @memberof ApiInterface
 * @param {Array} aDrawings - The array of drawings.
 * @returns {ApiGroup}
 * */
ApiInterface.prototype.CreateGroup = function(aDrawings){ return new ApiGroup(); };

/**
 * Creates a table.
 * @param nCols - Number of columns.
 * @param nRows - Number of rows.
 * @returns {ApiTable}
 */
ApiInterface.prototype.CreateTable = function(nCols, nRows){ return new ApiTable(); };

/**
 * Creates a new paragraph.
 * @memberof ApiInterface
 * @typeofeditors ["CPE"]
 * @returns {ApiParagraph}
 */
ApiInterface.prototype.CreateParagraph = function(){ return new ApiParagraph(); };

/**
 * Saves changes to the specified document.
 * @typeofeditors ["CPE"]
 * @memberof ApiInterface
 */
ApiInterface.prototype.Save = function () {};

/**
 * Creates a Text Art object with the parameters specified.
 * @memberof ApiInterface
 * @typeofeditors ["CPE"]
 * @param {ApiTextPr} [oTextPr=Api.CreateTextPr()] - The text properties.
 * @param {string} [sText="Your text here"] - The text for the Text Art object.
 * @param {TextTransform} [sTransform="textNoShape"] - Text transform type.
 * @param {ApiFill} [oFill=Api.CreateNoFill()] - The color or pattern used to fill the Text Art object.
 * @param {ApiStroke} [oStroke=Api.CreateStroke(0, Api.CreateNoFill())] - The stroke used to create the Text Art object shadow.
 * @param {number} [nRotAngle=0] - Rotation angle.
 * @param {EMU} [nWidth=1828800] - The Text Art width measured in English measure units.
 * @param {EMU} [nHeight=1828800] - The Text Art heigth measured in English measure units.
 * @param {EMU} [nIndLeft=ApiPresentation.GetWidth() / 2] - The Text Art left side indentation value measured in English measure units.
 * @param {EMU} [nIndTop=ApiPresentation.GetHeight() / 2] - The Text Art top side indentation value measured in English measure units.
 * @returns {ApiDrawing}
 */
ApiInterface.prototype.CreateWordArt = function(oTextPr, sText, sTransform, oFill, oStroke, nRotAngle, nWidth, nHeight, nIndLeft, nIndTop) { return new ApiDrawing(); };

/**
 * Converts the specified JSON object into the Document Builder object of the corresponding type.
 * @memberof ApiInterface
 * @param {JSON} sMessage - The JSON object to convert.
 * @typeofeditors ["CPE"]
 */
ApiInterface.prototype.FromJSON = function(sMessage){};

/**
 * Subscribes to the specified event and calls the callback function when the event fires.
 * @function
 * @memberof ApiInterface
 * @typeofeditors ["CPE"]
 * @param {string} eventName - The event name.
 * @param {function} callback - Function to be called when the event fires.
 */
ApiInterface.prototype["attachEvent"] = ApiInterface.prototype.attachEvent;{};

/**
 * Unsubscribes from the specified event.
 * @function
 * @memberof ApiInterface
 * @typeofeditors ["CPE"]
 * @param {string} eventName - The event name.
 */
ApiInterface.prototype["detachEvent"] = ApiInterface.prototype.detachEvent;{};

/**
 * Returns a type of the ApiPresentation class.
 * @typeofeditors ["CPE"]
 * @returns {"presentation"}
 */
ApiPresentation.prototype.GetClassType = function(){ return ""; };

/**
 * Returns the index for the current slide.
 * @typeofeditors ["CPE"]
 * @memberof ApiPresentation
 * @returns {number}
 */
ApiPresentation.prototype.GetCurSlideIndex = function(){ return 0; };

/**
 * Returns a slide by its position in the presentation.
 * @memberof ApiPresentation
 * @param {number} nIndex - The slide number (position) in the presentation.
 * @returns {ApiSlide}
 */
ApiPresentation.prototype.GetSlideByIndex = function(nIndex){ return new ApiSlide(); };

/**
 * Returns the current slide.
 * @typeofeditors ["CPE"]
 * @memberof ApiPresentation
 * @returns {ApiSlide}
 */
ApiPresentation.prototype.GetCurrentSlide = function () { return new ApiSlide(); };

/**
 * Appends a new slide to the end of the presentation.
 * @typeofeditors ["CPE"]
 * @memberof ApiPresentation
 * @param {ApiSlide} oSlide - The slide created using the {@link Api#CreateSlide} method.
 */
ApiPresentation.prototype.AddSlide = function(oSlide) {};

/**
 * Sets the size to the current presentation.
 * @typeofeditors ["CPE"]
 * @memberof ApiPresentation
 * @param {EMU} nWidth - The presentation width in English measure units.
 * @param {EMU} nHeight - The presentation height in English measure units.
 */
ApiPresentation.prototype.SetSizes = function(nWidth, nHeight) {};

/**
 * Creates a new history point.
 * @typeofeditors ["CPE"]
 * @memberof ApiPresentation
 */
ApiPresentation.prototype.CreateNewHistoryPoint = function(){};

/**
 * Replaces the current image with an image specified.
 * @typeofeditors ["CPE"]
 * @memberof ApiPresentation
 * @param {string} sImageUrl - The image source where the image to be inserted should be taken from (currently, only internet URL or Base64 encoded images are supported).
 * @param {EMU} Width - The image width in English measure units.
 * @param {EMU} Height - The image height in English measure units.
 */
ApiPresentation.prototype.ReplaceCurrentImage = function(sImageUrl, Width, Height){};

/**
 * Specifies the languages which will be used to check spelling and grammar (if requested).
 * @memberof ApiPresentation
 * @typeofeditors ["CPE"]
 * @param {string} sLangId - The possible value for this parameter is a language identifier as defined by
 * RFC 4646/BCP 47. Example: "en-CA".
 * @returns {boolean}
 */
ApiPresentation.prototype.SetLanguage = function(sLangId){ return true; };

/**
 * Returns a number of slides.
 * @typeofeditors ["CPE"]
 * @returns {number}
 */
ApiPresentation.prototype.GetSlidesCount = function(){ return 0; };

/**
 * Returns a number of slide masters.
 * @typeofeditors ["CPE"]
 * @returns {number}
 */
ApiPresentation.prototype.GetMastersCount = function(){ return 0; };

/**
 * Returns a slide master by its position in the presentation.
 * @typeofeditors ["CPE"]
 * @param {number} nPos - Slide master position in the presentation
 * @returns {ApiMaster | null} - returns null if position is invalid.
 */
ApiPresentation.prototype.GetMaster = function(nPos){ return new ApiMaster(); };

/**
 * Adds the slide master to the presentation slide masters collection.
 * @typeofeditors ["CPE"]
 * @param {number} [nPos    = ApiPresentation.GetMastersCount()]
 * @param {ApiMaster} oApiMaster - The slide master to be added.
 * @returns {boolean} - return false if position is invalid or oApiMaster doesn't exist.
 */
ApiPresentation.prototype.AddMaster = function(nPos, oApiMaster){ return true; };

/**
 * Applies a theme to all the slides in the presentation.
 * @typeofeditors ["CPE"]
 * @param {ApiTheme} oApiTheme - The presentation theme.
 * @returns {boolean} - returns false if param isn't theme or presentation doesn't exist.
 * */
ApiPresentation.prototype.ApplyTheme = function(oApiTheme){ return true; };

/**
 * Removes a range of slides from the presentation.
 * Deletes all the slides from the presentation if no parameters are specified.
 * @memberof ApiPresentation
 * @param {Number} [nStart=0] - The starting position for the deletion range.
 * @param {Number} [nCount=ApiPresentation.GetSlidesCount()] - The number of slides to delete.
 * @typeofeditors ["CPE"]
 * @returns {boolean}
 */
ApiPresentation.prototype.RemoveSlides = function(nStart, nCount){ return true; };

/**
 * Returns the presentation width in English measure units.
 * @typeofeditors ["CPE"]
 * @memberof ApiPresentation
 * @returns {EMU}
 */
ApiPresentation.prototype.GetWidth = function() { return new EMU(); };

/**
 * Returns the presentation height in English measure units.
 * @typeofeditors ["CPE"]
 * @memberof ApiPresentation
 * @returns {EMU}
 */
ApiPresentation.prototype.GetHeight = function() { return new EMU(); };

/**
 * Converts the ApiPresentation object into the JSON object.
 * @memberof ApiPresentation
 * @typeofeditors ["CPE"]
 * @param {bool} [bWriteTableStyles=false] - Specifies whether to write used table styles to the JSON object (true) or not (false).
 * @returns {JSON}
 */
ApiPresentation.prototype.ToJSON = function(bWriteTableStyles){ return new JSON(); };

/**
 * Converts the slides from the current ApiPresentation object into the JSON objects.
 * @memberof ApiPresentation
 * @typeofeditors ["CPE"]
 * @param {bool} [nStart=0] - The index to the start slide.
 * @param {bool} [nStart=ApiPresentation.GetSlidesCount() - 1] - The index to the end slide.
 * @param {bool} [bWriteLayout=false] - Specifies if the slide layout will be written to the JSON object or not.
 * @param {bool} [bWriteMaster=false] - Specifies if the slide master will be written to the JSON object or not (bWriteMaster is false if bWriteLayout === false).
 * @param {bool} [bWriteAllMasLayouts=false] - Specifies if all child layouts from the slide master will be written to the JSON object or not.
 * @param {bool} [bWriteTableStyles=false] - Specifies whether to write used table styles to the JSON object (true) or not (false).
 * @returns {JSON[]}
 */
ApiPresentation.prototype.SlidesToJSON = function(nStart, nEnd, bWriteLayout, bWriteMaster, bWriteAllMasLayouts, bWriteTableStyles){ return [new JSON()]; };

/**
 * Returns all comments from the current presentation.
 * @memberof ApiPresentation
 * @typeofeditors ["CPE"]
 * @returns {ApiComment[]}
 */
ApiPresentation.prototype.GetAllComments = function(){ return [new ApiComment()]; };

/**
 * Returns the type of the ApiMaster class.
 * @typeofeditors ["CPE"]
 * @returns {"master"}
 */
ApiMaster.prototype.GetClassType = function(){ return ""; };

/**
 * Returns a layout of the specified slide master by its position.
 * @typeofeditors ["CPE"]
 * @param {number} nPos - Layout position.
 * @returns {ApiLayout | null} - returns null if position is invalid.
 */
ApiMaster.prototype.GetLayout = function(nPos){ return new ApiLayout(); };

/**
 * Adds a layout to the specified slide master.
 * @typeofeditors ["CPE"]
 * @param {number} [nPos = ApiMaster.GetLayoutsCount()] - Position where a layout will be added.
 * @param {ApiLayout} oLayout - A layout to be added.
 * @returns {boolean} - returns false if oLayout isn't a layout.
 */
ApiMaster.prototype.AddLayout = function(nPos, oLayout){ return true; };

/**
 * Removes the layouts from the current slide master.
 * @typeofeditors ["CPE"]
 * @param {number} nPos - Position from which a layout will be deleted.
 * @param {number} [nCount = 1] - Number of layouts to delete.
 * @returns {boolean} - return false if position is invalid.
 */
ApiMaster.prototype.RemoveLayout = function(nPos, nCount){ return true; };

/**
 * Returns a number of layout objects.
 * @typeofeditors ["CPE"]
 * @returns {number}
 */
ApiMaster.prototype.GetLayoutsCount = function(){ return 0; };

/**
 * Adds an object (image, shape or chart) to the current slide master.
 * @typeofeditors ["CPE"]
 * @memberof ApiMaster
 * @param {ApiDrawing} oDrawing - The object which will be added to the current slide master.
 * @returns {boolean} - returns false if slide master doesn't exist.
 */
ApiMaster.prototype.AddObject = function(oDrawing){ return true; };

/**
 * Removes objects (image, shape or chart) from the current slide master.
 * @typeofeditors ["CPE"]
 * @memberof ApiMaster
 * @param {number} nPos - Position from which the object will be deleted.
 * @param {number} [nCount = 1] - Number of objects to delete.
 * @returns {boolean} - returns false if master doesn't exist or position is invalid or master hasn't objects.
 */
ApiMaster.prototype.RemoveObject = function(nPos, nCount){ return true; };

/**
 * Sets the background to the current slide master.
 * @memberOf ApiMaster
 * @typeofeditors ["CPE"]
 * @param {ApiFill} oApiFill - The color or pattern used to fill the presentation slide master background.
 * @returns {boolean}
 * */
ApiMaster.prototype.SetBackground = function(oApiFill){ return true; };

/**
 * Clears the slide master background.
 * @typeofeditors ["CPE"]
 * @returns {boolean} - return false if slide master doesn't exist.
 * */
ApiMaster.prototype.ClearBackground = function(){ return true; };

/**
 * Creates a copy of the specified slide master object.
 * @typeofeditors ["CPE"]
 * @returns {ApiMaster | null} - returns new ApiMaster object that represents the copy of slide master. 
 * Returns null if slide doesn't exist.
 * */
ApiMaster.prototype.Copy = function(){ return new ApiMaster(); };

/**
 * Creates a duplicate of the specified slide master object, adds the new slide master to the slide masters collection.
 * @typeofeditors ["CPE"]
 * @param {number} [nPos    = ApiPresentation.GetMastersCount()] - Position where the new slide master will be added.
 * @returns {ApiMaster | null} - returns new ApiMaster object that represents the copy of slide master. 
 * Returns null if slide master doesn't exist or is not in the presentation.
 * */
ApiMaster.prototype.Duplicate = function(nPos){ return new ApiMaster(); };

/**
 * Deletes the specified object from the parent if it exists.
 * @typeofeditors ["CPE"]
 * @returns {boolean} - return false if master doesn't exist or is not in the presentation.
 * */
ApiMaster.prototype.Delete = function(){ return true; };

/**
 * Returns a theme of the slide master.
 * @typeofeditors ["CPE"]
 * @returns {ApiTheme | null} - returns null if theme doesn't exist.
 * */
ApiMaster.prototype.GetTheme = function(){ return new ApiTheme(); };

/**
 * Sets a theme to the slide master.
 * Sets a copy of the theme object.
 * @typeofeditors ["CPE"]
 * @param {ApiTheme} oTheme - Presentation theme.
 * @returns {boolean} - return false if oTheme isn't a theme or slide master doesn't exist.
 * */
ApiMaster.prototype.SetTheme = function(oTheme){ return true; };

/**
 * Returns an array with all the drawing objects from the slide master.
 * @typeofeditors ["CPE"]
 * @returns {ApiDrawing[]}
 * */
ApiMaster.prototype.GetAllDrawings = function(){ return [new ApiDrawing()]; };

/**
 * Returns an array with all the shape objects from the slide master.
 * @typeofeditors ["CPE"]
 * @returns {ApiShape[]}
 * */
ApiMaster.prototype.GetAllShapes = function(){ return [new ApiShape()]; };

/**
 * Returns an array with all the image objects from the slide master.
 * @typeofeditors ["CPE"]
 * @returns {ApiImage[]}
 * */
ApiMaster.prototype.GetAllImages = function(){ return [new ApiImage()]; };

/**
 * Returns an array with all the chart objects from the slide master.
 * @typeofeditors ["CPE"]
 * @returns {ApiChart[]}
 * */
ApiMaster.prototype.GetAllCharts = function(){ return [new ApiChart()]; };

/**
 * Returns an array with all the OLE objects from the slide master.
 * @typeofeditors ["CPE"]
 * @returns {ApiOleObject[]}
 * */
ApiMaster.prototype.GetAllOleObjects = function(){ return [new ApiOleObject()]; };

/**
 * Converts the ApiMaster object into the JSON object.
 * @memberof ApiMaster
 * @typeofeditors ["CPE"]
 * @param {bool} [bWriteTableStyles=false] - Specifies whether to write used table styles to the JSON object (true) or not (false).
 * @returns {JSON}
 */
ApiMaster.prototype.ToJSON = function(bWriteTableStyles){ return new JSON(); };

/**
 * Returns the type of the ApiLayout class.
 * @typeofeditors ["CPE"]
 * @returns {"layout"}
 */
ApiLayout.prototype.GetClassType = function(){ return ""; };

/**
 * Sets a name to the current layout.
 * @typeofeditors ["CPE"]
 * @param {string} sName - Layout name to be set.
 * @returns {boolean}
 */
ApiLayout.prototype.SetName = function(sName){ return true; };

/**
 * Adds an object (image, shape or chart) to the current slide layout.
 * @typeofeditors ["CPE"]
 * @memberof ApiLayout
 * @param {ApiDrawing} oDrawing - The object which will be added to the current slide layout.
 * @returns {boolean} - returns false if slide layout doesn't exist.
 */
ApiLayout.prototype.AddObject = function(oDrawing){ return true; };

/**
 * Removes objects (image, shape or chart) from the current slide layout.
 * @typeofeditors ["CPE"]
 * @memberof ApiLayout
 * @param {number} nPos - Position from which the object will be deleted.
 * @param {number} [nCount = 1] - The number of elements to delete.
 * @returns {boolean} - returns false if layout doesn't exist or position is invalid or layout hasn't objects.
 */
ApiLayout.prototype.RemoveObject = function(nPos, nCount){ return true; };

/**
 * Sets the background to the current slide layout.
 * @memberOf ApiLayout
 * @typeofeditors ["CPE"]
 * @param {ApiFill} oApiFill - The color or pattern used to fill the presentation slide layout background.\
 * @returns {boolean}
 * */
ApiLayout.prototype.SetBackground = function(oApiFill){ return true; };

/**
 * Clears the slide layout background.
 * @typeofeditors ["CPE"]
 * @returns {boolean} - return false if slide layout doesn't exist.
 * */
ApiLayout.prototype.ClearBackground = function(){ return true; };

/**
 * Sets the master background as the background of the layout.
 * @typeofeditors ["CPE"]
 * @returns {boolean} - returns false if master is null or master hasn't background.
 * */
ApiLayout.prototype.FollowMasterBackground = function(){ return true; };

/**
 * Creates a copy of the specified slide layout object.
 * Copies without master slide.
 * @typeofeditors ["CPE"]
 * @returns {ApiLayout | null} - returns new ApiLayout object that represents the copy of slide layout. 
 * Returns null if slide layout doesn't exist.
 * */
ApiLayout.prototype.Copy = function(){ return new ApiLayout(); };

/**
 * Deletes the specified object from the parent slide master if it exists.
 * @typeofeditors ["CPE"]
 * @returns {boolean} - return false if parent slide master doesn't exist.
 * */
ApiLayout.prototype.Delete = function(){ return true; };

/**
 * Creates a duplicate of the specified slide layout object, adds the new slide layout to the slide layout collection.
 * @typeofeditors ["CPE"]
 * @param {number} [nPos = ApiMaster.GetLayoutsCount()] - Position where the new slide layout will be added.
 * @returns {ApiLayout | null} - returns new ApiLayout object that represents the copy of slide layout. 
 * Returns null if slide layout doesn't exist or is not in the slide master.
 * */
ApiLayout.prototype.Duplicate = function(nPos){ return new ApiLayout(); };

/**
 * Moves the specified layout to a specific location within the same collection.
 * @typeofeditors ["CPE"]
 * @param {number} nPos - Position where the specified slide layout will be moved to.
 * @returns {boolean} - returns false if layout or parent slide master doesn't exist or position is invalid.
 * */
ApiLayout.prototype.MoveTo = function(nPos){ return true; };

/**
 * Returns an array with all the drawing objects from the slide layout.
 * @typeofeditors ["CPE"]
 * @returns {ApiDrawing[]}
 * */
ApiLayout.prototype.GetAllDrawings = function(){ return [new ApiDrawing()]; };

/**
 * Returns an array with all the shape objects from the slide layout.
 * @typeofeditors ["CPE"]
 * @returns {ApiShape[]}
 * */
ApiLayout.prototype.GetAllShapes = function(){ return [new ApiShape()]; };

/**
 * Returns an array with all the image objects from the slide layout.
 * @typeofeditors ["CPE"]
 * @returns {ApiImage[]}
 * */
ApiLayout.prototype.GetAllImages = function(){ return [new ApiImage()]; };

/**
 * Returns an array with all the chart objects from the slide layout.
 * @typeofeditors ["CPE"]
 * @returns {ApiChart[]}
 * */
ApiLayout.prototype.GetAllCharts = function(){ return [new ApiChart()]; };

/**
 * Returns an array with all the OLE objects from the slide layout.
 * @typeofeditors ["CPE"]
 * @returns {ApiOleObject[]}
 * */
ApiLayout.prototype.GetAllOleObjects = function(){ return [new ApiOleObject()]; };

/**
 * Returns the parent slide master of the current layout.
 * @typeofeditors ["CPE"]
 * @returns {ApiMaster} - returns null if parent slide master doesn't exist.
 * */
ApiLayout.prototype.GetMaster = function(){ return new ApiMaster(); };

/**
 * Converts the ApiLayout object into the JSON object.
 * @memberof ApiLayout
 * @typeofeditors ["CPE"]
 * @param {bool} [bWriteMaster=false] - Specifies if the slide master will be written to the JSON object or not.
 * @param {bool} [bWriteTableStyles=false] - Specifies whether to write used table styles to the JSON object (true) or not (false).
 * @returns {JSON}
 */
ApiLayout.prototype.ToJSON = function(bWriteMaster, bWriteTableStyles){ return new JSON(); };

/**
 * Returns the type of the ApiPlaceholder class.
 * @typeofeditors ["CPE"]
 * @returns {"placeholder"}
 */
ApiPlaceholder.prototype.GetClassType = function(){ return ""; };

/**
 * Sets the placeholder type.
 * @typeofeditors ["CPE"]
 * @param {string} sType - Placeholder type ("body", "chart", "clipArt", "ctrTitle", "diagram", "date", "footer", "header", "media", "object", "picture", "sldImage", "sldNumber", "subTitle", "table", "title").
 * @returns {boolean} - returns false if placeholder type doesn't exist.
 */
ApiPlaceholder.prototype.SetType = function(sType){ return true; };

/**
 * Returns the type of the ApiTheme class.
 * @typeofeditors ["CPE"]
 * @returns {"theme"}
 */
ApiTheme.prototype.GetClassType = function(){ return ""; };

/**
 * Returns the slide master of the current theme.
 * @typeofeditors ["CPE"]
 * @returns {ApiMaster | null} - returns null if slide master doesn't exist.
 */
ApiTheme.prototype.GetMaster = function(){ return new ApiMaster(); };

/**
 * Sets the color scheme to the current presentation theme.
 * @typeofeditors ["CPE"]
 * @param {ApiThemeColorScheme} oApiColorScheme - Theme color scheme.
 * @returns {boolean} - return false if color scheme doesn't exist.
 */
ApiTheme.prototype.SetColorScheme = function(oApiColorScheme){ return true; };

/**
 * Returns the color scheme of the current theme.
 * @typeofeditors ["CPE"]
 * @returns {ApiThemeColorScheme}
 */
ApiTheme.prototype.GetColorScheme = function(){ return new ApiThemeColorScheme(); };

/**
 * Sets the format scheme to the current presentation theme.
 * @typeofeditors ["CPE"]
 * @param {ApiThemeFormatScheme} oApiFormatScheme - Theme format scheme.
 * @returns {boolean} - return false if format scheme doesn't exist.
 */
ApiTheme.prototype.SetFormatScheme = function(oApiFormatScheme){ return true; };

/**
 * Returns the format scheme of the current theme.
 * @typeofeditors ["CPE"]
 * @returns {ApiThemeFormatScheme}
 */
ApiTheme.prototype.GetFormatScheme = function(){ return new ApiThemeFormatScheme(); };

/**
 * Sets the font scheme to the current presentation theme.
 * @typeofeditors ["CPE"]
 * @param {ApiThemeFontScheme} oApiFontScheme - Theme font scheme.
 * @returns {boolean} - return false if font scheme doesn't exist.
 */
ApiTheme.prototype.SetFontScheme = function(oApiFontScheme){ return true; };

/**
 * Returns the font scheme of the current theme.
 * @typeofeditors ["CPE"]
 * @returns {ApiThemeFontScheme}
 */
ApiTheme.prototype.GetFontScheme = function(){ return new ApiThemeFontScheme(); };

/**
 * Returns the type of the ApiThemeColorScheme class.
 * @typeofeditors ["CPE"]
 * @returns {"themeColorScheme"}
 */
ApiThemeColorScheme.prototype.GetClassType = function(){ return ""; };

/**
 * Sets a name to the current theme color scheme.
 * @typeofeditors ["CPE"]
 * @param {string} sName - Theme color scheme name.
 * @returns {boolean}
 */
ApiThemeColorScheme.prototype.SetSchemeName = function(sName){ return true; };

/**
 * Changes a color in the theme color scheme.
 * @typeofeditors ["CPE"]
 * @param {number} nPos - Color position in the color scheme which will be changed.
 * @param {ApiUniColor | ApiRGBColor} oColor - New color of the theme color scheme.
 * @returns {boolean}
 */
ApiThemeColorScheme.prototype.ChangeColor = function(nPos, oColor){ return true; };

/**
 * Creates a copy of the current theme color scheme.
 * @typeofeditors ["CPE"]
 * @returns {ApiThemeColorScheme}
 */
ApiThemeColorScheme.prototype.Copy = function(){ return new ApiThemeColorScheme(); };

/**
 * Converts the ApiThemeColorScheme object into the JSON object.
 * @memberof ApiThemeColorScheme
 * @typeofeditors ["CPE"]
 * @returns {JSON}
 */
ApiThemeColorScheme.prototype.ToJSON = function(){ return new JSON(); };

/**
 * Returns the type of the ApiThemeFormatScheme class.
 * @typeofeditors ["CPE"]
 * @returns {"themeFormatScheme"}
 */
ApiThemeFormatScheme.prototype.GetClassType = function(){ return ""; };

/**
 * Sets a name to the current theme format scheme.
 * @typeofeditors ["CPE"]
 * @param {string} sName - Theme format scheme name.
 * @returns {boolean}
 */
ApiThemeFormatScheme.prototype.SetSchemeName = function(sName){ return true; };

/**
 * Sets the fill styles to the current theme format scheme.
 * @typeofeditors ["CPE"]
 * @param {ApiFill[]} arrFill - The array of fill styles must contain 3 elements - subtle, moderate and intense fills.
 * If an array is empty or NoFill elements are in the array, it will be filled with the Api.CreateNoFill() elements.
 */
ApiThemeFormatScheme.prototype.ChangeFillStyles = function(arrFill){};

/**
 * Sets the background fill styles to the current theme format scheme.
 * @typeofeditors ["CPE"]
 * @param {ApiFill[]} arrBgFill - The array of background fill styles must contains 3 elements - subtle, moderate and intense fills.
 * If an array is empty or NoFill elements are in the array, it will be filled with the Api.CreateNoFill() elements.
 */
ApiThemeFormatScheme.prototype.ChangeBgFillStyles = function(arrBgFill){};

/**
 * Sets the line styles to the current theme format scheme.
 * @typeofeditors ["CPE"]
 * @param {ApiStroke[]} arrLine - The array of line styles must contain 3 elements - subtle, moderate and intense fills.
 * If an array is empty or ApiStroke elements are with no fill, it will be filled with the Api.CreateStroke(0, Api.CreateNoFill()) elements.
 */
ApiThemeFormatScheme.prototype.ChangeLineStyles = function(arrLine){};

/**
 * **Need to do**
 * Sets the effect styles to the current theme format scheme.
 * @typeofeditors ["CPE"]
 * @param {?Array} arrEffect - The array of effect styles must contain 3 elements - subtle, moderate and intense fills.
 * If an array is empty or NoFill elements are in the array, it will be filled with the Api.CreateStroke(0, Api.CreateNoFill()) elements.
 * @returns {boolean}
 */
ApiThemeFormatScheme.prototype.ChangeEffectStyles = function(arrEffect){ return true; };

/**
 * Creates a copy of the current theme format scheme.
 * @typeofeditors ["CPE"]
 * @returns {ApiThemeFormatScheme}
 */
ApiThemeFormatScheme.prototype.Copy = function(){ return new ApiThemeFormatScheme(); };

/**
 * Converts the ApiThemeFormatScheme object into the JSON object.
 * @memberof ApiThemeFormatScheme
 * @typeofeditors ["CPE"]
 * @returns {JSON}
 */
ApiThemeFormatScheme.prototype.ToJSON = function(){ return new JSON(); };

/**
 * Returns the type of the ApiThemeFontScheme class.
 * @typeofeditors ["CPE"]
 * @returns {"themeFontScheme"}
 */
ApiThemeFontScheme.prototype.GetClassType = function(){ return ""; };

/**
 * Sets a name to the current theme font scheme.
 * @typeofeditors ["CPE"]
 * @param {string} sName - Theme font scheme name.
 * @returns {boolean} - returns false if font scheme doesn't exist.
 */
ApiThemeFontScheme.prototype.SetSchemeName = function(sName){ return true; };

/**
 * Sets the fonts to the current theme font scheme.
 * @typeofeditors ["CPE"]
 * @memberof ApiThemeFontScheme
 * @param {string} mjLatin - The major theme font applied to the latin text.
 * @param {string} mjEa - The major theme font applied to the east asian text.
 * @param {string} mjCs - The major theme font applied to the complex script text.
 * @param {string} mnLatin - The minor theme font applied to the latin text.
 * @param {string} mnEa - The minor theme font applied to the east asian text.
 * @param {string} mnCs - The minor theme font applied to the complex script text.
 */
ApiThemeFontScheme.prototype.SetFonts = function(mjLatin, mjEa, mjCs, mnLatin, mnEa, mnCs){};

/**
 * Creates a copy of the current theme font scheme.
 * @typeofeditors ["CPE"]
 * @returns {ApiThemeFontScheme}
 */
ApiThemeFontScheme.prototype.Copy = function(){ return new ApiThemeFontScheme(); };

/**
 * Converts the ApiThemeFontScheme object into the JSON object.
 * @memberof ApiThemeFontScheme
 * @typeofeditors ["CPE"]
 * @returns {JSON}
 */
ApiThemeFontScheme.prototype.ToJSON = function(){ return new JSON(); };

/**
 * Returns the type of the ApiSlide class.
 * @typeofeditors ["CPE"]
 * @returns {"slide"}
 */
ApiSlide.prototype.GetClassType = function(){ return ""; };

/**
 * Removes all the objects from the current slide.
 * @typeofeditors ["CPE"]
 * @memberof ApiSlide
 */
ApiSlide.prototype.RemoveAllObjects =  function(){};

/**
 * Adds an object (image, shape or chart) to the current presentation slide.
 * @typeofeditors ["CPE"]
 * @memberof ApiSlide
 * @param {ApiDrawing} oDrawing - The object which will be added to the current presentation slide.
 * @returns {boolean} - returns false if slide doesn't exist.
 */
ApiSlide.prototype.AddObject = function(oDrawing){ return true; };

/**
 * Removes objects (image, shape or chart) from the current slide.
 * @typeofeditors ["CPE"]
 * @memberof ApiSlide
 * @param {number} nPos - Position from which the object will be deleted.
 * @param {number} [nCount = 1] - The number of elements to delete.
 * @returns {boolean} - returns false if slide doesn't exist or position is invalid or slide hasn't objects.
 */
ApiSlide.prototype.RemoveObject = function(nPos, nCount){ return true; };

/**
 * Sets the background to the current presentation slide.
 * @memberOf ApiSlide
 * @typeofeditors ["CPE"]
 * @param {ApiFill} oApiFill - The color or pattern used to fill the presentation slide background.
 * @returns {boolean}
 * */
ApiSlide.prototype.SetBackground = function(oApiFill){ return true; };

/**
 * Returns the visibility of the current presentation slide.
 * @memberOf ApiSlide
 * @typeofeditors ["CPE"]
 * @returns {boolean}
 * */
ApiSlide.prototype.GetVisible = function(){ return true; };

/**
 * Sets the visibility to the current presentation slide.
 * @memberOf ApiSlide
 * @typeofeditors ["CPE"]
 * @param {boolean} value - Slide visibility.
 * @returns {boolean}
 * */
ApiSlide.prototype.SetVisible = function(value){ return true; };

/**
 * Returns the slide width in English measure units.
 * @typeofeditors ["CPE"]
 * @returns {EMU}
 * */
ApiSlide.prototype.GetWidth = function(){ return new EMU(); };

/**
 * Returns the slide height in English measure units.
 * @typeofeditors ["CPE"]
 * @returns {EMU}
 * */
ApiSlide.prototype.GetHeight = function(){ return new EMU(); };

/**
 * Applies the specified layout to the current slide.
 * The layout must be in slide master.
 * @typeofeditors ["CPE"]
 * @param {ApiLayout} oLayout - Layout to be applied.
 * @returns {boolean} - returns false if slide doesn't exist.
 * */
ApiSlide.prototype.ApplyLayout = function(oLayout){ return true; };

/**
 * Deletes the current slide from the presentation.
 * @typeofeditors ["CPE"]
 * @returns {boolean} - returns false if slide doesn't exist or is not in the presentation.
 * */
ApiSlide.prototype.Delete = function(){ return true; };

/**
 * Creates a copy of the current slide object.
 * @typeofeditors ["CPE"]
 * @returns {ApiSlide | null} - returns new ApiSlide object that represents the duplicate slide. 
 * Returns null if slide doesn't exist.
 * */
ApiSlide.prototype.Copy = function(){ return new ApiSlide(); };

/**
 * Creates a duplicate of the specified slide object, adds the new slide to the slides collection.
 * @typeofeditors ["CPE"]
 * @param {number} [nPos    = ApiPresentation.GetSlidesCount()] - Position where the new slide will be added.
 * @returns {ApiSlide | null} - returns new ApiSlide object that represents the duplicate slide. 
 * Returns null if slide doesn't exist or is not in the presentation.
 * */
ApiSlide.prototype.Duplicate = function(nPos){ return new ApiSlide(); };

/**
 * Moves the current slide to a specific location within the same collection.
 * @typeofeditors ["CPE"]
 * @param {number} nPos - Position where the current slide will be moved to.
 * @returns {boolean} - returns false if slide doesn't exist or position is invalid or slide is not in the presentation.
 * */
ApiSlide.prototype.MoveTo = function(nPos){ return true; };

/**
 * Returns a position of the current slide in the presentation.
 * @typeofeditors ["CPE"]
 * @returns {number} - returns -1 if slide doesn't exist or is not in the presentation.
 * */
ApiSlide.prototype.GetSlideIndex = function (){ return 0; };

/**
 * Clears the slide background.
 * @typeofeditors ["CPE"]
 * @returns {boolean} - return false if slide doesn't exist.
 * */
ApiSlide.prototype.ClearBackground = function(){ return true; };

/**
 * Sets the layout background as the background of the slide.
 * @typeofeditors ["CPE"]
 * @returns {boolean} - returns false if layout is null or layout hasn't background or slide doesn't exist.
 * */
ApiSlide.prototype.FollowLayoutBackground = function(){ return true; };

/**
 * Sets the master background as the background of the slide.
 * @typeofeditors ["CPE"]
 * @returns {boolean} - returns false if master is null or master hasn't background or slide doesn't exist.
 * */
ApiSlide.prototype.FollowMasterBackground = function(){ return true; };

/**
 * Applies the specified theme to the current slide.
 * @typeofeditors ["CPE"]
 * @param {ApiTheme} oApiTheme - Presentation theme.
 * @returns {boolean} - returns false if master is null or master hasn't background.
 * */
ApiSlide.prototype.ApplyTheme = function(oApiTheme){ return true; };

/**
 * Returns a layout of the current slide.
 * @typeofeditors ["CPE"]
 * @returns {ApiLayout | null} - returns null if slide or layout doesn't exist. 
 * */
ApiSlide.prototype.GetLayout = function(){ return new ApiLayout(); };

/**
 * Returns a theme of the current slide.
 * @typeofeditors ["CPE"]
 * @returns {ApiTheme} - returns null if slide or layout or master or theme doesn't exist.
 * */
ApiSlide.prototype.GetTheme = function(){ return new ApiTheme(); };

/**
 * Returns an array with all the drawing objects from the slide.
 * @typeofeditors ["CPE"]
 * @returns {ApiDrawing[]} 
 * */
ApiSlide.prototype.GetAllDrawings = function(){ return [new ApiDrawing()]; };

/**
 * Returns an array with all the shape objects from the slide.
 * @typeofeditors ["CPE"]
 * @returns {ApiShape[]} 
 * */
ApiSlide.prototype.GetAllShapes = function(){ return [new ApiShape()]; };

/**
 * Returns an array with all the image objects from the slide.
 * @typeofeditors ["CPE"]
 * @returns {ApiImage[]} 
 * */
ApiSlide.prototype.GetAllImages = function(){ return [new ApiImage()]; };

/**
 * Returns an array with all the chart objects from the slide.
 * @typeofeditors ["CPE"]
 * @returns {ApiChart[]} 
 * */
ApiSlide.prototype.GetAllCharts = function(){ return [new ApiChart()]; };

/**
 * Returns an array with all the OLE objects from the slide.
 * @typeofeditors ["CPE"]
 * @returns {ApiOleObject[]} 
 * */
ApiSlide.prototype.GetAllOleObjects = function(){ return [new ApiOleObject()]; };

/**
 * Converts the ApiSlide object into the JSON object.
 * @memberof ApiSlide
 * @typeofeditors ["CPE"]
 * @param {bool} [bWriteLayout=false] - Specifies if the slide layout will be written to the JSON object or not.
 * @param {bool} [bWriteMaster=false] - Specifies if the slide master will be written to the JSON object or not (bWriteMaster is false if bWriteLayout === false).
 * @param {bool} [bWriteAllMasLayouts=false] - Specifies if all child layouts from the slide master will be written to the JSON object or not.
 * @param {bool} [bWriteTableStyles=false] - Specifies whether to write used table styles to the JSON object (true) or not (false).
 * @returns {JSON}
 */
ApiSlide.prototype.ToJSON = function(bWriteLayout, bWriteMaster, bWriteAllMasLayouts, bWriteTableStyles){ return new JSON(); };

/**
 * Returns the type of the ApiDrawing class.
 * @returns {"drawing"}
 */
ApiDrawing.prototype.GetClassType = function(){ return ""; };

/**
 * Sets the size of the object (image, shape, chart) bounding box.
 * @param {EMU} nWidth - The object width measured in English measure units.
 * @param {EMU} nHeight - The object height measured in English measure units.
 */
ApiDrawing.prototype.SetSize = function(nWidth, nHeight){};

/**
 * Sets the position of the drawing on the slide.
 * @param {EMU} nPosX - The distance from the left side of the slide to the left side of the drawing measured in English measure units.
 * @param {EMU} nPosY - The distance from the top side of the slide to the upper side of the drawing measured in English measure units.
 */
ApiDrawing.prototype.SetPosition = function(nPosX, nPosY){};

/**
 * Returns the drawing parent object.
 * @typeofeditors ["CPE"]
 * @returns {ApiSlide | ApiLayout | ApiMaster | null}
 */
ApiDrawing.prototype.GetParent = function(){ return new ApiSlide(); };

/**
 * Returns the drawing parent slide.
 * @typeofeditors ["CPE"]
 * @returns {ApiSlide | null} - return null if parent ins't a slide.
 */
ApiDrawing.prototype.GetParentSlide = function(){ return new ApiSlide(); };

/**
 * Returns the drawing parent slide layout.
 * @typeofeditors ["CPE"]
 * @returns {ApiLayout | null} - return null if parent ins't a slide layout.
 */
ApiDrawing.prototype.GetParentLayout = function(){ return new ApiLayout(); };

/**
 * Returns the drawing parent slide master.
 * @typeofeditors ["CPE"]
 * @returns {ApiMaster | null} - return null if parent ins't a slide master.
 */
ApiDrawing.prototype.GetParentMaster = function(){ return new ApiMaster(); };

/**
 * Creates a copy of the specified drawing object.
 * @typeofeditors ["CPE"]
 * @returns {ApiDrawing} - return null if drawing doesn't exist.
 */
ApiDrawing.prototype.Copy = function(){ return new ApiDrawing(); };

/**
 * Deletes the specified drawing object from the parent.
 * @typeofeditors ["CPE"]
 * @returns {boolean} - false if drawing doesn't exist or drawing hasn't a parent.
 */
ApiDrawing.prototype.Delete = function(){ return true; };

/**
 * Sets the specified placeholder to the current drawing object.
 * @typeofeditors ["CPE"]
 * @param {ApiPlaceholder} oPlaceholder - Placeholder object.
 * @returns {boolean} - returns false if parameter isn't a placeholder.
 */
ApiDrawing.prototype.SetPlaceholder = function(oPlaceholder){ return true; };

/**
 * Returns a placeholder from the current drawing object.
 * @typeofeditors ["CPE"]
 * @returns {ApiPlaceholder | null} - returns null if placeholder doesn't exist.
 */
ApiDrawing.prototype.GetPlaceholder = function(){ return new ApiPlaceholder(); };

/**
 * Returns the width of the current drawing.
 * @memberof ApiDrawing
 * @typeofeditors ["CDE", "CPE", "CSE"]
 * @returns {EMU}
 */
ApiDrawing.prototype.GetWidth = function(){ return new EMU(); };

/**
 * Returns the height of the current drawing.
 * @memberof ApiDrawing
 * @typeofeditors ["CDE", "CPE", "CSE"]
 * @returns {EMU}
 */
ApiDrawing.prototype.GetHeight = function(){ return new EMU(); };

/**
 * Returns the lock value for the specified lock type of the current drawing.
 * @typeofeditors ["CPE"]
 * @param {"noGrp" | "noUngrp" | "noSelect" | "noRot" | "noChangeAspect" | "noMove" | "noResize" | "noEditPoints" | "noAdjustHandles"
 * | "noChangeArrowheads" | "noChangeShapeType" | "noDrilldown" | "noTextEdit" | "noCrop" | "txBox"} sType - Lock type in the string format.
 * @returns {bool}
 */
ApiDrawing.prototype.GetLockValue = function(sType){ return true; };

/**
 * Sets the lock value to the specified lock type of the current drawing.
 * @typeofeditors ["CPE"]
 * @param {"noGrp" | "noUngrp" | "noSelect" | "noRot" | "noChangeAspect" | "noMove" | "noResize" | "noEditPoints" | "noAdjustHandles"
 * | "noChangeArrowheads" | "noChangeShapeType" | "noDrilldown" | "noTextEdit" | "noCrop" | "txBox"} sType - Lock type in the string format.
 * @param {bool} bValue - Specifies if the specified lock is applied to the current drawing.
 * @returns {bool}
 */
ApiDrawing.prototype.SetLockValue = function(sType, bValue){ return true; };

/**
 * Converts the ApiDrawing object into the JSON object.
 * @memberof ApiDrawing
 * @typeofeditors ["CPE"]
 * @returns {JSON}
 */
ApiDrawing.prototype.ToJSON = function(){ return new JSON(); };

/**
 * Returns the type of the ApiImage class.
 * @returns {"image"}
 */
ApiImage.prototype.GetClassType = function(){ return ""; };

/**
 * Returns the type of the ApiShape class.
 * @typeofeditors ["CPE"]
 * @returns {"shape"}
 */
ApiShape.prototype.GetClassType = function(){ return ""; };

/**
 * Deprecated in 6.2.
 * Returns the shape inner contents where a paragraph or text runs can be inserted.
 * @typeofeditors ["CPE"]
 * @returns {ApiDocumentContent}
 */
ApiShape.prototype.GetDocContent = function(){ return new ApiDocumentContent(); };

/**
 * Returns the shape inner contents where a paragraph or text runs can be inserted.
 * @typeofeditors ["CPE"]
 * @returns {ApiDocumentContent}
 */
ApiShape.prototype.GetContent = function(){ return new ApiDocumentContent(); };

/**
 * Sets the vertical alignment to the shape content where a paragraph or text runs can be inserted.
 * @typeofeditors ["CPE"]
 * @param {VerticalTextAlign} VerticalAlign - The type of the vertical alignment for the shape inner contents.
 */
ApiShape.prototype.SetVerticalTextAlign = function(VerticalAlign){};

/**
 * Returns the type of the ApiChart class.
 * @typeofeditors ["CPE"]
 * @returns {"chart"}
 */
ApiChart.prototype.GetClassType = function(){ return ""; };

/**
 *  Specifies the chart title.
 *  @typeofeditors ["CPE"]
 *  @param {string} sTitle - The title which will be displayed for the current chart.
 *  @param {pt} nFontSize - The text size value measured in points.
 *  @param {?bool} bIsBold - Specifies if the chart title is written in bold font or not.
 */
ApiChart.prototype.SetTitle = function (sTitle, nFontSize, bIsBold){};

/**
 *  Specifies the chart horizontal axis title.
 *  @typeofeditors ["CPE"]
 *  @param {string} sTitle - The title which will be displayed for the horizontal axis of the current chart.
 *  @param {pt} nFontSize - The text size value measured in points.
 *  @param {?bool} bIsBold - Specifies if the horizontal axis title is written in bold font or not.
 * */
ApiChart.prototype.SetHorAxisTitle = function (sTitle, nFontSize, bIsBold){};

/**
 *  Specifies the chart vertical axis title.
 *  @typeofeditors ["CPE"]
 *  @param {string} sTitle - The title which will be displayed for the vertical axis of the current chart.
 *  @param {pt} nFontSize - The text size value measured in points.
 *  @param {?bool} bIsBold - Specifies if the vertical axis title is written in bold font or not.
 * */
ApiChart.prototype.SetVerAxisTitle = function (sTitle, nFontSize, bIsBold){};

/**
 * Specifies the chart legend position.
 * @typeofeditors ["CPE"]
 * @param {"left" | "top" | "right" | "bottom" | "none"} sLegendPos - The position of the chart legend inside the chart window.
 * */
ApiChart.prototype.SetLegendPos = function(sLegendPos){};

/**
 * Specifies the chart legend font size.
 * @param {pt} nFontSize - The text size value measured in points.
 * */
ApiChart.prototype.SetLegendFontSize = function(nFontSize){};

/**
 * Specifies the vertical axis orientation.
 * @param {boolean} bIsMinMax - The <code>true</code> value will set the normal data direction for the vertical axis
 * (from minimum to maximum). The <code>false</code> value will set the inverted data direction for the vertical axis (from maximum to minimum).
 * */
ApiChart.prototype.SetVerAxisOrientation = function(bIsMinMax){};

/**
 * Specifies the horizontal axis orientation.
 * @param {boolean} bIsMinMax - The <code>true</code> value will set the normal data direction for the horizontal axis
 * (from minimum to maximum). The <code>false</code> value will set the inverted data direction for the horizontal axis (from maximum to minimum).
 * */
ApiChart.prototype.SetHorAxisOrientation = function(bIsMinMax){};

/**
 * Specifies which chart data labels are shown for the chart.
 * @typeofeditors ["CPE"]
 * @param {boolean} bShowSerName - Whether to show or hide the source table column names used for the data which the chart will be build from.
 * @param {boolean} bShowCatName - Whether to show or hide the source table row names used for the data which the chart will be build from.
 * @param {boolean} bShowVal - Whether to show or hide the chart data values.
 * @param {boolean} bShowPercent - Whether to show or hide the percent for the data values (works with stacked chart types).
 * */
ApiChart.prototype.SetShowDataLabels = function(bShowSerName, bShowCatName, bShowVal, bShowPercent){};

/**
 * Spicifies the show options for the chart data labels.
 * @param {number} nSeriesIndex - The series index from the array of the data used to build the chart from.
 * @param {number} nPointIndex - The point index from this series.
 * @param {boolean} bShowSerName - Whether to show or hide the source table column names used for the data which the chart will be build from.
 * @param {boolean} bShowCatName - Whether to show or hide the source table row names used for the data which the chart will be build from.
 * @param {boolean} bShowVal - Whether to show or hide the chart data values.
 * @param {boolean} bShowPercent - Whether to show or hide the percent for the data values (works with stacked chart types).
 * */
ApiChart.prototype.SetShowPointDataLabel = function(nSeriesIndex, nPointIndex, bShowSerName, bShowCatName, bShowVal, bShowPercent){};

/**
 * Spicifies tick label position for the vertical axis.
 * @param {TickLabelPosition} sTickLabelPosition - The position type of the chart vertical tick labels.
 * */
ApiChart.prototype.SetVertAxisTickLabelPosition = function(sTickLabelPosition){};

/**
 * Spicifies tick label position for the horizontal axis.
 * @param {TickLabelPosition} sTickLabelPosition - The position type of the chart horizontal tick labels.
 * */
ApiChart.prototype.SetHorAxisTickLabelPosition = function(sTickLabelPosition){};

/**
 * Specifies the major tick mark for the horizontal axis.
 * @param {TickMark} sTickMark - The type of tick mark appearance.
 * */
ApiChart.prototype.SetHorAxisMajorTickMark = function(sTickMark){};

/**
 * Specifies the minor tick mark for the horizontal axis.
 * @param {TickMark} sTickMark - The type of tick mark appearance.
 * */
ApiChart.prototype.SetHorAxisMinorTickMark = function(sTickMark){};

/**
 * Specifies the major tick mark for the vertical axis.
 * @param {TickMark} sTickMark - The type of tick mark appearance.
 * */
ApiChart.prototype.SetVertAxisMajorTickMark = function(sTickMark){};

/**
 * Specifies the minor tick mark for the vertical axis.
 * @param {TickMark} sTickMark - The type of tick mark appearance.
 * */
ApiChart.prototype.SetVertAxisMinorTickMark = function(sTickMark){};

/**
 * Specifies the visual properties for the major vertical gridlines.
 * @param {?ApiStroke} oStroke - The stroke used to create the element shadow.
 * */
ApiChart.prototype.SetMajorVerticalGridlines = function(oStroke){};

/**
 * Specifies the visual properties for the minor vertical gridlines.
 * @param {?ApiStroke} oStroke - The stroke used to create the element shadow.
 * */
ApiChart.prototype.SetMinorVerticalGridlines = function(oStroke){};

/**
 * Specifies the visual properties for the major horizontal gridlines.
 * @param {?ApiStroke} oStroke - The stroke used to create the element shadow.
 * */
ApiChart.prototype.SetMajorHorizontalGridlines = function(oStroke){};

/**
 * Specifies the visual properties for the minor horizontal gridlines.
 * @param {?ApiStroke} oStroke - The stroke used to create the element shadow.
 * */
ApiChart.prototype.SetMinorHorizontalGridlines = function(oStroke){};

/**
 * Specifies font size for the labels of the horizontal axis.
 * @param {pt} nFontSize - The text size value measured in points.
 */
ApiChart.prototype.SetHorAxisLablesFontSize = function(nFontSize){};

/**
 * Specifies font size for the labels of the vertical axis.
 * @param {pt} nFontSize - The text size value measured in points.
 */
ApiChart.prototype.SetVertAxisLablesFontSize = function(nFontSize){};

/**
 * Removes the specified series from the current chart.
 * @memberof ApiChart
 * @typeofeditors ["CDE", "CPE", "CSE"]
 * @param {number} nSeria - The index of the chart series.
 * @returns {boolean}
 */
ApiChart.prototype.RemoveSeria = function(nSeria){ return true; };

/**
 * Sets values to the specified chart series.
 * @memberof ApiChart
 * @typeofeditors ["CDE", "CPE"]
 * @param {number[]} aValues - The array of the data which will be set to the specified chart series.
 * @param {number} nSeria - The index of the chart series.
 * @returns {boolean}
 */
ApiChart.prototype.SetSeriaValues = function(aValues, nSeria){ return true; };

/**
 * Sets the x-axis values to all chart series. It is used with the scatter charts only.
 * @memberof ApiChart
 * @typeofeditors ["CDE", "CPE"]
 * @param {string[]} aValues - The array of the data which will be set to the x-axis data points.
 * @returns {boolean}
 */
ApiChart.prototype.SetXValues = function(aValues){ return true; };

/**
 * Sets a name to the specified chart series.
 * @memberof ApiChart
 * @typeofeditors ["CDE", "CPE"]
 * @param {string} sName - The name which will be set to the specified chart series.
 * @param {number} nSeria - The index of the chart series.
 * @returns {boolean}
 */
ApiChart.prototype.SetSeriaName = function(sName, nSeria){ return true; };

/**
 * Sets a name to the specified chart category.
 * @memberof ApiChart
 * @typeofeditors ["CDE", "CPE"]
 * @param {string} sName - The name which will be set to the specified chart category.
 * @param {number} nCategory - The index of the chart category.
 * @returns {boolean}
 */
ApiChart.prototype.SetCategoryName = function(sName, nCategory){ return true; };

/**
 * Sets a style to the current chart by style ID.
 * @memberof ApiChart
 * @typeofeditors ["CDE", "CPE", "CSE"]
 * @param nStyleId - One of the styles available in the editor.
 * @returns {boolean}
 */
ApiChart.prototype.ApplyChartStyle = function(nStyleId){ return true; };

/**
 * Sets the fill to the chart plot area.
 * @memberof ApiChart
 * @typeofeditors ["CDE", "CPE", "CSE"]
 * @param {ApiFill} oFill - The fill type used to fill the plot area.
 * @returns {boolean}
 */
ApiChart.prototype.SetPlotAreaFill = function(oFill){ return true; };

/**
 * Sets the outline to the chart plot area.
 * @memberof ApiChart
 * @typeofeditors ["CDE", "CPE", "CSE"]
 * @param {ApiStroke} oStroke - The stroke used to create the plot area outline.
 * @returns {boolean}
 */
ApiChart.prototype.SetPlotAreaOutLine = function(oStroke){ return true; };

/**
 * Sets the fill to the specified chart series.
 * @memberof ApiChart
 * @typeofeditors ["CDE", "CPE", "CSE"]
 * @param {ApiFill} oFill - The fill type used to fill the series.
 * @param {number} nSeries - The index of the chart series.
 * @param {boolean} [bAll=false] - Specifies if the fill will be applied to all series.
 * @returns {boolean}
 */
ApiChart.prototype.SetSeriesFill = function(oFill, nSeries, bAll){ return true; };

/**
 * Sets the outline to the specified chart series.
 * @memberof ApiChart
 * @typeofeditors ["CDE", "CPE", "CSE"]
 * @param {ApiStroke} oStroke - The stroke used to create the series outline.
 * @param {number} nSeries - The index of the chart series.
 * @param {boolean} [bAll=false] - Specifies if the outline will be applied to all series.
 * @returns {boolean}
 */
ApiChart.prototype.SetSeriesOutLine = function(oStroke, nSeries, bAll){ return true; };

/**
 * Sets the fill to the data point in the specified chart series.
 * @memberof ApiChart
 * @typeofeditors ["CDE", "CPE", "CSE"]
 * @param {ApiFill} oFill - The fill type used to fill the data point.
 * @param {number} nSeries - The index of the chart series.
 * @param {number} nDataPoint - The index of the data point in the specified chart series.
 * @param {boolean} [bAllSeries=false] - Specifies if the fill will be applied to the specified data point in all series.
 * @returns {boolean}
 */
ApiChart.prototype.SetDataPointFill = function(oFill, nSeries, nDataPoint, bAllSeries){ return true; };

/**
 * Sets the outline to the data point in the specified chart series.
 * @memberof ApiChart
 * @typeofeditors ["CDE", "CPE", "CSE"]
 * @param {ApiStroke} oStroke - The stroke used to create the data point outline.
 * @param {number} nSeries - The index of the chart series.
 * @param {number} nDataPoint - The index of the data point in the specified chart series.
 * @param {boolean} bAllSeries - Specifies if the outline will be applied to the specified data point in all series.
 * @returns {boolean}
 */
ApiChart.prototype.SetDataPointOutLine = function(oStroke, nSeries, nDataPoint, bAllSeries){ return true; };

/**
 * Sets the fill to the marker in the specified chart series.
 * @memberof ApiChart
 * @typeofeditors ["CDE", "CPE", "CSE"]
 * @param {ApiFill} oFill - The fill type used to fill the marker.
 * @param {number} nSeries - The index of the chart series.
 * @param {number} nMarker - The index of the marker in the specified chart series.
 * @param {boolean} [bAllMarkers=false] - Specifies if the fill will be applied to all markers in the specified chart series.
 * @returns {boolean}
 */
ApiChart.prototype.SetMarkerFill = function(oFill, nSeries, nMarker, bAllMarkers){ return true; };

/**
 * Sets the outline to the marker in the specified chart series.
 * @memberof ApiChart
 * @typeofeditors ["CDE", "CPE", "CSE"]
 * @param {ApiStroke} oStroke - The stroke used to create the marker outline.
 * @param {number} nSeries - The index of the chart series.
 * @param {number} nMarker - The index of the marker in the specified chart series.
 * @param {boolean} [bAllMarkers=false] - Specifies if the outline will be applied to all markers in the specified chart series.
 * @returns {boolean}
 */
ApiChart.prototype.SetMarkerOutLine = function(oStroke, nSeries, nMarker, bAllMarkers){ return true; };

/**
 * Sets the fill to the chart title.
 * @memberof ApiChart
 * @typeofeditors ["CDE", "CPE", "CSE"]
 * @param {ApiFill} oFill - The fill type used to fill the title.
 * @returns {boolean}
 */
ApiChart.prototype.SetTitleFill = function(oFill){ return true; };

/**
 * Sets the outline to the chart title.
 * @memberof ApiChart
 * @typeofeditors ["CDE", "CPE", "CSE"]
 * @param {ApiStroke} oStroke - The stroke used to create the title outline.
 * @returns {boolean}
 */
ApiChart.prototype.SetTitleOutLine = function(oStroke){ return true; };

/**
 * Sets the fill to the chart legend.
 * @memberof ApiChart
 * @typeofeditors ["CDE", "CPE", "CSE"]
 * @param {ApiFill} oFill - The fill type used to fill the legend.
 * @returns {boolean}
 */
ApiChart.prototype.SetLegendFill = function(oFill){ return true; };

/**
 * Sets the outline to the chart legend.
 * @memberof ApiChart
 * @typeofeditors ["CDE", "CPE", "CSE"]
 * @param {ApiStroke} oStroke - The stroke used to create the legend outline.
 * @returns {boolean}
 */
ApiChart.prototype.SetLegendOutLine = function(oStroke){ return true; };

/**
 * Sets the specified numeric format to the axis values.
 * @memberof ApiChart
 * @typeofeditors ["CDE", "CPE", "CSE"]
 * @param {NumFormat | String} sFormat - Numeric format (can be custom format).
 * @param {AxisPos} - Axis position.
 * @returns {boolean}
 */
ApiChart.prototype.SetAxieNumFormat = function(sFormat, sAxiePos){ return true; };

/**
 * Sets the specified numeric format to the chart series.
 * @memberof ApiChart
 * @typeofeditors ["CDE", "CPE"]
 * @param {NumFormat | String} sFormat - Numeric format (can be custom format).
 * @param {Number} nSeria - Series index.
 * @returns {boolean}
 */
ApiChart.prototype.SetSeriaNumFormat = function(sFormat, nSeria){ return true; };

/**
 * Sets the specified numeric format to the chart data point.
 * @memberof ApiChart
 * @typeofeditors ["CDE", "CPE"]
 * @param {NumFormat | String} sFormat - Numeric format (can be custom format).
 * @param {Number} nSeria - Series index.
 * @param {number} nDataPoint - The index of the data point in the specified chart series.
 * @param {boolean} bAllSeries - Specifies if the numeric format will be applied to the specified data point in all series.
 * @returns {boolean}
 */
ApiChart.prototype.SetDataPointNumFormat = function(sFormat, nSeria, nDataPoint, bAllSeries){ return true; };

/**
 * Returns a type of the ApiOleObject class.
 * @memberof ApiOleObject
 * @typeofeditors ["CDE", "CPE", "CSE"]
 * @returns {"oleObject"}
 */
ApiOleObject.prototype.GetClassType = function(){ return ""; };

/**
 * Sets the data to the current OLE object.
 * @memberof ApiOleObject
 * @typeofeditors ["CDE", "CPE", "CSE"]
 * @param {string} sData - The OLE object string data.
 * @returns {boolean}
 */
ApiOleObject.prototype.SetData = function(sData){ return true; };

/**
 * Returns the string data from the current OLE object.
 * @memberof ApiOleObject
 * @typeofeditors ["CDE", "CPE", "CSE"]
 * @returns {string}
 */
ApiOleObject.prototype.GetData = function(){ return ""; };

/**
 * Sets the application ID to the current OLE object.
 * @memberof ApiOleObject
 * @typeofeditors ["CDE", "CPE", "CSE"]
 * @param {string} sAppId - The application ID associated with the current OLE object.
 * @returns {boolean}
 */
ApiOleObject.prototype.SetApplicationId = function(sAppId){ return true; };

/**
 * Returns the application ID from the current OLE object.
 * @memberof ApiOleObject
 * @typeofeditors ["CDE", "CPE", "CSE"]
 * @returns {string}
 */
ApiOleObject.prototype.GetApplicationId = function(){ return ""; };

/**
 * Returns the type of the ApiTable object.
 * @returns {"table"}
 * */
ApiTable.prototype.GetClassType = function(){ return ""; };

/**
 * Returns a row by its index.
 * @param nIndex {number} - The row index (position) in the table.
 * @returns {ApiTableRow}
 * */
ApiTable.prototype.GetRow = function(nIndex){ return new ApiTableRow(); };

/**
 * Merges an array of cells. If merge is successful, it will return merged cell, otherwise "null".
 * <b>Warning</b>: The number of cells in any row and the number of rows in the current table may be changed.
 * @param {ApiTableCell[]} aCells - The array of cells.
 * @returns {ApiTableCell}
 */
ApiTable.prototype.MergeCells = function(aCells){ return new ApiTableCell(); };

/**
 * Specifies the components of the conditional formatting of the referenced table style (if one exists)
 * which shall be applied to the set of table rows with the current table-level property exceptions. A table style
 * can specify up to six different optional conditional formats [Example: Different formatting for first column],
 * which then can be applied or omitted from individual table rows in the parent table.
 *
 * The default setting is to apply the row and column banding formatting, but not the first row, last row, first
 * column, or last column formatting.
 * @param {boolean} isFirstColumn - Specifies that the first column conditional formatting shall be applied to the
 *     table.
 * @param {boolean} isFirstRow - Specifies that the first row conditional formatting shall be applied to the table.
 * @param {boolean} isLastColumn - Specifies that the last column conditional formatting shall be applied to the
 *     table.
 * @param {boolean} isLastRow - Specifies that the last row conditional formatting shall be applied to the table.
 * @param {boolean} isHorBand - Specifies that the horizontal banding conditional formatting shall not be applied
 *     to the table.
 * @param {boolean} isVerBand - Specifies that the vertical banding conditional formatting shall not be applied to
 *     the table.
 */
ApiTable.prototype.SetTableLook = function(isFirstColumn, isFirstRow, isLastColumn, isLastRow, isHorBand, isVerBand){};

/**
 * Adds a new row to the current table.
 * @param {ApiTableCell} [oCell] - If not specified, a new row will be added to the end of the table.
 * @param {boolean} [isBefore=false] - Adds a new row before or after the specified cell. If no cell is specified,
 * then this parameter will be ignored.
 * @returns {ApiTableRow}
 */
ApiTable.prototype.AddRow = function(oCell, isBefore){ return new ApiTableRow(); };

/**
 * Adds a new column to the end of the current table.
 * @param {ApiTableCell} [oCell] - If not specified, a new column will be added to the end of the table.
 * @param {boolean} [isBefore=false] - Add a new column before or after the specified cell. If no cell is specified,
 * then this parameter will be ignored.
 */
ApiTable.prototype.AddColumn = function(oCell, isBefore){};

/**
 * Removes a table row with the specified cell.
 * @param {ApiTableCell} oCell - The table cell from the row which will be removed.
 * @returns {boolean} - defines if the table is empty after removing or not.
 */
ApiTable.prototype.RemoveRow = function(oCell){ return true; };

/**
 * Removes a table column with the specified cell.
 * @param {ApiTableCell} oCell - The table cell from the column which will be removed.
 * @returns {boolean} - defines if the table is empty after removing or not.
 */
ApiTable.prototype.RemoveColumn = function(oCell){ return true; };

/**
 * Specifies the shading which shall be applied to the extents of the current table.
 * @typeofeditors ["CPE"]
 * @param {ShdType | ApiFill} sType - The shading type applied to the contents of the current table. Can be ShdType or ApiFill.
 * @param {byte} r - Red color component value.
 * @param {byte} g - Green color component value.
 * @param {byte} b - Blue color component value.
 */
ApiTable.prototype.SetShd = function(sType, r, g, b){};

/**
 * Converts the ApiTable object into the JSON object.
 * @memberof ApiTable
 * @typeofeditors ["CPE"]
 * @param {bool} [bWriteTableStyles=false] - Specifies whether to write used table styles to the JSON object (true) or not (false).
 * @returns {JSON}
 */
ApiTable.prototype.ToJSON = function(bWriteTableStyles){ return new JSON(); };

/**
 * Returns the type of the ApiTableRow class.
 * @returns {"tableRow"}
 */
ApiTableRow.prototype.GetClassType = function(){ return ""; };

/**
 * Returns a number of cells in the current row.
 * @returns {number}
 */
ApiTableRow.prototype.GetCellsCount = function(){ return 0; };

/**
 * Returns a cell by its position in the current row.
 * @param {number} nPos - The cell position in the table row.
 * @returns {ApiTableCell}
 */
ApiTableRow.prototype.GetCell = function(nPos){ return new ApiTableCell(); };

/**
 * Sets the height to the current table row.
 * @param {EMU} [nValue] - The row height in English measure units.
 */
ApiTableRow.prototype.SetHeight = function(nValue){};

/**
 * Returns the type of the ApiTableCell class.
 * @returns {"tableCell"}
 */
ApiTableCell.prototype.GetClassType = function(){ return ""; };

/**
 * Returns the current cell content.
 * @returns {ApiDocumentContent}
 */
ApiTableCell.prototype.GetContent = function(){ return new ApiDocumentContent(); };

/**
 * Specifies the shading which shall be applied to the extents of the current table cell.
 * @typeofeditors ["CPE"]
 * @param {ShdType | ApiFill} sType - The shading type applied to the contents of the current table. Can be ShdType or ApiFill.
 * @param {byte} r - Red color component value.
 * @param {byte} g - Green color component value.
 * @param {byte} b - Blue color component value.
 */
ApiTableCell.prototype.SetShd = function(sType, r, g, b){};

/**
 * Specifies an amount of space which shall be left between the bottom extent of the cell contents and the border
 * of a specific individual table cell within a table.
 * @param {?twips} nValue - If this value is <code>null</code>, then default table cell bottom margin shall be used,
 * otherwise override the table cell bottom margin with specified value for the current cell.
 */
ApiTableCell.prototype.SetCellMarginBottom = function(nValue){};

/**
 * Specifies an amount of space which shall be left between the left extent of the current cell contents and the
 * left edge border of a specific individual table cell within a table.
 * @param {?twips} nValue - If this value is <code>null</code>, then default table cell left margin shall be used,
 * otherwise override the table cell left margin with specified value for the current cell.
 */
ApiTableCell.prototype.SetCellMarginLeft = function(nValue){};

/**
 * Specifies an amount of space which shall be left between the right extent of the current cell contents and the
 * right edge border of a specific individual table cell within a table.
 * @param {?twips} nValue - If this value is <code>null</code>, then default table cell right margin shall be used,
 * otherwise override the table cell right margin with specified value for the current cell.
 */
ApiTableCell.prototype.SetCellMarginRight = function(nValue){};

/**
 * Specifies an amount of space which shall be left between the top extent of the current cell contents and the
 * top edge border of a specific individual table cell within a table.
 * @param {?twips} nValue - If this value is <code>null</code>, then default table cell top margin shall be used,
 * otherwise override the table cell top margin with specified value for the current cell.
 */
ApiTableCell.prototype.SetCellMarginTop = function(nValue){};

/**
 * Sets the border which shall be displayed at the bottom of the current table cell.
 * @param {mm} fSize - The width of the current border.
 * @param {ApiFill} oApiFill - The color or pattern used to fill the current border.
 */
ApiTableCell.prototype.SetCellBorderBottom = function(fSize, oApiFill){};

/**
 * Sets the border which shall be displayed at the left of the current table cell.
 * @param {mm} fSize - The width of the current border.
 * @param {ApiFill} oApiFill - The color or pattern used to fill the current border.
 */
ApiTableCell.prototype.SetCellBorderLeft = function(fSize, oApiFill){};

/**
 * Sets the border which shall be displayed at the right of the current table cell.
 * @param {mm} fSize - The width of the current border.
 * @param {ApiFill} oApiFill - The color or pattern used to fill the current border.
 */
ApiTableCell.prototype.SetCellBorderRight = function(fSize, oApiFill){};

/**
 * Sets the border which shall be displayed at the top of the current table cell.
 * @param {mm} fSize - The width of the current border.
 * @param {ApiFill} oApiFill - The color or pattern used to fill the current border.
 */
ApiTableCell.prototype.SetCellBorderTop = function(fSize, oApiFill){};

/**
 * Specifies the vertical alignment for text within the current table cell.
 * @param {("top" | "center" | "bottom")} sType - The type of the vertical alignment.
 */
ApiTableCell.prototype.SetVerticalAlign = function(sType){};


