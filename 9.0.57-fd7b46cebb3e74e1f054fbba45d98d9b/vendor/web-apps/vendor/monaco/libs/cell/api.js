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
 * Creates a new paragraph.
 * @memberof ApiInterface
 * @typeofeditors ["CDE", "CSE"]
 * @returns {ApiParagraph}
 */
ApiInterface.prototype.CreateParagraph = function(){ return new ApiParagraph(); };

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
 * Class representing a group of drawings.
 * @constructor
 */
function ApiGroup(oGroup){}
ApiGroup.prototype = Object.create(ApiDrawing.prototype);
ApiGroup.prototype.constructor = ApiGroup;

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
 * Returns a slide by its position in the presentation.
 * @memberof ApiPresentation
 * @param {number} nIndex - The slide number (position) in the presentation.
 * @returns {ApiSlide}
 */
ApiPresentation.prototype.GetSlideByIndex = function(nIndex){ return new ApiSlide(); };

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

/**
 * The callback function which is called when the specified range of the current sheet changes.
 * <note>Please note that the event is not called for the undo/redo operations.</note>
 * @event Api#onWorksheetChange
 * @param {ApiRange} range - The modified range represented as the ApiRange object.
 */

/**
 * Class representing a sheet.
 * @constructor
 * @property {boolean} Visible - Returns or sets the state of sheet visibility.
 * @property {number} Active - Makes the current sheet active.
 * @property {ApiRange} ActiveCell - Returns an object that represents an active cell.
 * @property {ApiRange} Selection - Returns an object that represents the selected range.
 * @property {ApiRange} Cells - Returns ApiRange that represents all the cells on the worksheet (not just the cells that are currently in use).
 * @property {ApiRange} Rows - Returns ApiRange that represents all the cells of the rows range.
 * @property {ApiRange} Cols - Returns ApiRange that represents all the cells of the columns range.
 * @property {ApiRange} UsedRange - Returns ApiRange that represents the used range on the specified worksheet.
 * @property {string} Name - Returns or sets a name of the active sheet.
 * @property {number} Index - Returns a sheet index.
 * @property {number} LeftMargin - Returns or sets the size of the sheet left margin measured in points.
 * @property {number} RightMargin - Returns or sets the size of the sheet right margin measured in points.
 * @property {number} TopMargin - Returns or sets the size of the sheet top margin measured in points.
 * @property {number} BottomMargin - Returns or sets the size of the sheet bottom margin measured in points.
 * @property {PageOrientation} PageOrientation - Returns or sets the page orientation.
 * @property {boolean} PrintHeadings - Returns or sets the page PrintHeadings property.
 * @property {boolean} PrintGridlines - Returns or sets the page PrintGridlines property.
 * @property {Array} Defnames - Returns an array of the ApiName objects.
 * @property {Array} Comments - Returns all comments from the current worksheet.
 * @property {ApiFreezePanes} FreezePanes - Returns the freeze panes for the current worksheet.
 * @property {ApiProtectedRange[]} AllProtectedRanges - Returns all protected ranges from the current worksheet.
 */
function ApiWorksheet(worksheet) {}

/**
 * Class representing a range.
 * @constructor
 * @property {number} Row - Returns the row number for the selected cell.
 * @property {number} Col - Returns the column number for the selected cell.
 * @property {ApiRange} Rows - Returns the ApiRange object that represents the rows of the specified range.
 * @property {ApiRange} Cols - Returns the ApiRange object that represents the columns of the specified range.
 * @property {ApiRange} Cells - Returns a Range object that represents all the cells in the specified range or a specified cell.
 * @property {number} Count - Returns the rows or columns count.
 * @property {string} Address - Returns the range address.
 * @property {string} Value - Returns a value from the first cell of the specified range or sets it to this cell.
 * @property {string} Formula - Returns a formula from the first cell of the specified range or sets it to this cell.
 * @property {string} Value2 - Returns the value2 (value without format) from the first cell of the specified range or sets it to this cell.
 * @property {string} Text - Returns the text from the first cell of the specified range or sets it to this cell.
 * @property {ApiColor} FontColor - Sets the text color to the current cell range with the previously created color object.
 * @property {boolean} Hidden - Returns or sets the value hiding property.
 * @property {number} ColumnWidth - Returns or sets the width of all the columns in the specified range measured in points.
 * @property {number} Width - Returns a value that represents the range width measured in points.
 * @property {number} RowHeight - Returns or sets the height of the first row in the specified range measured in points.
 * @property {number} Height - Returns a value that represents the range height measured in points.
 * @property {number} FontSize - Sets the font size to the characters of the current cell range.
 * @property {string} FontName - Sets the specified font family as the font name for the current cell range.
 * @property {'center' | 'bottom' | 'top' | 'distributed' | 'justify'} AlignVertical - Sets the text vertical alignment to the current cell range.
 * @property {'left' | 'right' | 'center' | 'justify'} AlignHorizontal - Sets the text horizontal alignment to the current cell range.
 * @property {boolean} Bold - Sets the bold property to the text characters from the current cell or cell range.
 * @property {boolean} Italic - Sets the italic property to the text characters in the current cell or cell range.
 * @property {'none' | 'single' | 'singleAccounting' | 'double' | 'doubleAccounting'} Underline - Sets the type of underline applied to the font.
 * @property {boolean} Strikeout - Sets a value that indicates whether the contents of the current cell or cell range are displayed struck through.
 * @property {boolean} WrapText - Returns the information about the wrapping cell style or specifies whether the words in the cell must be wrapped to fit the cell size or not.
 * @property {ApiColor|'No Fill'} FillColor - Returns or sets the background color of the current cell range.
 * @property {string} NumberFormat - Sets a value that represents the format code for the object.
 * @property {ApiRange} MergeArea - Returns the cell or cell range from the merge area.
 * @property {ApiWorksheet} Worksheet - Returns the ApiWorksheet object that represents the worksheet containing the specified range.
 * @property {ApiName} DefName - Returns the ApiName object.
 * @property {ApiComment | null} Comments - Returns the ApiComment collection that represents all the comments from the specified worksheet.
 * @property {'xlDownward' | 'xlHorizontal' | 'xlUpward' | 'xlVertical'} Orientation - Sets an angle to the current cell range.
 * @property {ApiAreas} Areas - Returns a collection of the areas.
 * @property {ApiCharacters} Characters - Returns the ApiCharacters object that represents a range of characters within the object text. Use the ApiCharacters object to format characters within a text string.
 */
function ApiRange(range, areas) {}

/**
 * Class representing a graphical object.
 * @constructor
 */
function ApiDrawing(Drawing) {}

/**
 * Class representing a shape.
 * @constructor
 */
function ApiShape(oShape) {}
ApiShape.prototype = Object.create(ApiDrawing.prototype);
ApiShape.prototype.constructor = ApiShape;

/**
 * Class representing an image.
 * @constructor
 */
function ApiImage(oImage) {}
ApiImage.prototype = Object.create(ApiDrawing.prototype);
ApiImage.prototype.constructor = ApiImage;

/**
 * Class representing a chart.
 * @constructor
 */
function ApiChart(oChart) {}
ApiChart.prototype = Object.create(ApiDrawing.prototype);
ApiChart.prototype.constructor = ApiChart;

/**
 * Class representing an OLE object.
 * @constructor
 */
function ApiOleObject(OleObject) {}
ApiOleObject.prototype = Object.create(ApiDrawing.prototype);
ApiOleObject.prototype.constructor = ApiOleObject;

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
 *     "greenYellow" | "grey" | "honeydew" | "hotPink" | "indianRed" | "indigo" | "ivory" | "khaki" | "lavender" |
 *     "lavenderBlush" | "lawnGreen" | "lemonChiffon" | "lightBlue" | "lightCoral" | "lightCyan" |
 *     "lightGoldenrodYellow" | "lightGray" | "lightGreen" | "lightGrey" | "lightPink" | "lightSalmon" |
 *     "lightSeaGreen" | "lightSkyBlue" | "lightSlateGray" | "lightSlateGrey" | "lightSteelBlue" | "lightYellow" |
 *     "lime" | "limeGreen" | "linen" | "ltBlue" | "ltCoral" | "ltCyan" | "ltGoldenrodYellow" | "ltGray" |
 *     "ltGreen" | "ltGrey" | "ltPink" | "ltSalmon" | "ltSeaGreen" | "ltSkyBlue" | "ltSlateGray" | "ltSlateGrey"|
 *     "ltSteelBlue" | "ltYellow" | "magenta" | "maroon" | "medAquamarine" | "medBlue" | "mediumAquamarine" |
 *     "mediumBlue" | "mediumOrchid" | "mediumPurple" | "mediumSeaGreen" | "mediumSlateBlue" |
 *     "mediumSpringGreen" | "mediumTurquoise" | "mediumVioletRed" | "medOrchid" | "medPurple" | "medSeaGreen" |
 *     "medSlateBlue" | "medSpringGreen" | "medTurquoise" | "medVioletRed" | "midnightBlue" | "mintCream" |
 *     "mistyRose" | "moccasin" | "navajoWhite" | "navy" | "oldLace" | "olive" | "oliveDrab" | "orange" |
 *     "orangeRed" | "orchid" | "paleGoldenrod" | "paleGreen" | "paleTurquoise" | "paleVioletRed" | "papayaWhip"|
 *     "peachPuff" | "peru" | "pink" | "plum" | "powderBlue" | "purple" | "red" | "rosyBrown" | "royalBlue" |
 *     "saddleBrown" | "salmon" | "sandyBrown" | "seaGreen" | "seaShell" | "sienna" | "silver" | "skyBlue" |
 *     "slateBlue" | "slateGray" | "slateGrey" | "snow" | "springGreen" | "steelBlue" | "tan" | "teal" |
 *     "thistle" | "tomato" | "turquoise" | "violet" | "wheat" | "white" | "whiteSmoke" | "yellow" |
 *     "yellowGreen")} PresetColor
 * */

/**
 * Possible values for the position of chart tick labels (either horizontal or vertical).
 * * <b>"none"</b> - does not display the selected tick labels.
 * * <b>"nextTo"</b> - sets the position of the selected tick labels next to the main label.
 * * <b>"low"</b> - sets the position of the selected tick labels in the part of the chart with lower values.
 * * <b>"high"</b> - sets the position of the selected tick labels in the part of the chart with higher values.
 * @typedef {("none" | "nextTo" | "low" | "high")} TickLabelPosition
 * **/

/**
 * The page orientation type.
 * @typedef {("xlLandscape" | "xlPortrait")} PageOrientation
 * */

/**
 * The type of tick mark appearance.
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
 * The cell references type.
 * @typedef {('xlA1' | 'xlR1C1')} ReferenceStyle
 * */

/**
 * Specifies the part of the range to be pasted.
 * @typedef {("xlPasteAll" | "xlPasteAllExceptBorders" |
 *  | "xlPasteColumnWidths" | "xlPasteComments"
 * | "xlPasteFormats" | "xlPasteFormulas" | "xlPasteFormulasAndNumberFormats"
 * | "xlPasteValues" | "xlPasteValuesAndNumberFormats" )} PasteType
 * */

/**
 * Specifies how numeric data will be calculated with the destinations cells on the worksheet.
 * @typedef {("xlPasteSpecialOperationAdd" | "xlPasteSpecialOperationDivide" | "xlPasteSpecialOperationMultiply"|
 * "xlPasteSpecialOperationNone" | "xlPasteSpecialOperationSubtract" )} PasteSpecialOperation
 * */

/**
 * Class representing a base class for the color types.
 * @constructor
 */
function ApiColor(color) {}

/**
 * Class representing a name.
 * @constructor
 * @property {string} Name - Sets a name to the active sheet.
 * @property {string} RefersTo - Returns or sets a formula that the name is defined to refer to.
 * @property {ApiRange} RefersToRange - Returns the ApiRange object by reference.
 */
function ApiName(DefName) {}

/**
 * Class representing a comment.
 * @constructor
 * @property {string} Text - Returns or sets the comment text.
 * @property {string} Id - Returns the current comment ID.
 * @property {string} AuthorName - Returns or sets the comment author's name.
 * @property {string} UserId - Returns or sets the user ID of the comment author.
 * @property {boolean} Solved - Checks if a comment is solved or not or marks a comment as solved.
 * @property {number | string} TimeUTC - Returns or sets the timestamp of the comment creation in UTC format.
 * @property {number | string} Time - Returns or sets the timestamp of the comment creation in the current time zone format.
 * @property {string} QuoteText - Returns the quote text of the current comment.
 * @property {Number} RepliesCount - Returns a number of the comment replies.
 */
function ApiComment(comment, wb) {}

/**
 * Class representing a comment reply.
 * @constructor
 * @property {string} Text - Returns or sets the comment reply text.
 * @property {string} AuthorName - Returns or sets the comment reply author's name.
 * @property {string} UserId - Returns or sets the user ID of the comment reply author.
 * @property {number | string} TimeUTC - Returns or sets the timestamp of the comment reply creation in UTC format.
 * @property {number | string} Time - Returns or sets the timestamp of the comment reply creation in the current time zone format.
 */
function ApiCommentReply(oParentComm, oCommentReply) {}

/**
 * Class representing the areas.
 * @constructor
 * @property {number} Count - Returns a value that represents the number of objects in the collection.
 * @property {ApiRange} Parent - Returns the parent object for the specified collection.
 */
function ApiAreas(items, parent) {}

/**
 * Class representing characters in an object that contains text.
 * @constructor
 * @property {number} Count - The number of characters in the collection.
 * @property {ApiRange} Parent - The parent object of the specified characters.
 * @property {string} Caption - The text of the specified range of characters.
 * @property {string} Text - The string value representing the text of the specified range of characters.
 * @property {ApiFont} Font - The font of the specified characters.
 */
function ApiCharacters(options, parent) {}

/**
 * Class that contains the font attributes (font name, font size, color, and so on).
 * @constructor
 * @property {ApiCharacters} Parent - The parent object of the specified font object.
 * @property {boolean | null} Bold - The font bold property.
 * @property {boolean | null} Italic - The font italic property.
 * @property {number | null} Size - The font size property.
 * @property {boolean | null} Strikethrough - The font strikethrough property.
 * @property {string | null} Underline - The font type of underline.
 * @property {boolean | null} Subscript - The font subscript property.
 * @property {boolean | null} Superscript - The font superscript property.
 * @property {string | null} Name - The font name.
 * @property {ApiColor | null} Color - The font color property.
 */
function ApiFont(object) {}

/**
 * Class representing freeze panes.
 * @constructor
 */
function ApiFreezePanes(ws) {}

/**
 * Returns a class formatted according to the instructions contained in the format expression.
 * @memberof ApiInterface
 * @param {string} expression - Any valid expression.
 * @param {string} [format] - A valid named or user-defined format expression.
 * @returns {string}
 */
ApiInterface.prototype.Format = function (expression, format) { return ""; };

/**
 * Creates a new custom function.
 * The description of the function parameters and result is specified using JSDoc. The <em>@customfunction</em> tag is required in JSDoc.
 * Parameters and results can be specified as the <em>number / string / bool / any / number[][] / string[][] / bool[][] / any[][]</em> types.
 * Parameters can be required or optional. A user can also set a default value.
 * @memberof ApiInterface
 * @typeofeditors ["CSE"]
 * @param {Function} fCustom - A new function for calculating.
 * @example
 *   function add(first, second) {
 *       return first + second;
 *   };
 *   Api.AddCustomFunction(add);
 */
ApiInterface.prototype.AddCustomFunction = function (fCustom) {};

/**
 * Remove a custom function.
 * @memberof ApiInterface
 * @typeofeditors ["CSE"]
 * @param {string} sName - The name of a custom function.
 * @returns {boolean} - returns false if such a function does not exist.
 */
ApiInterface.prototype.RemoveCustomFunction = function (sName) { return true; };

/**
 * Creates a new worksheet. The new worksheet becomes the active sheet.
 * @memberof ApiInterface
 * @typeofeditors ["CSE"]
 * @param {string} sName - The name of a new worksheet.
 */
ApiInterface.prototype.AddSheet = function (sName) {};

/**
 * Returns a sheet collection that represents all the sheets in the active workbook.
 * @memberof ApiInterface
 * @typeofeditors ["CSE"]
 * @returns {ApiWorksheet[]}
 */
ApiInterface.prototype.GetSheets = function () { return [new ApiWorksheet()]; };

/**
 * Returns a sheet collection that represents all the sheets in the active workbook.
 * @memberof ApiInterface
 * @typeofeditors ["CSE"]
 * @returns {ApiWorksheet[]}
 */
ApiInterface.prototype.Sheets = ApiInterface.prototype.GetSheets ();

/**
 * Sets a locale to the document.
 * @memberof ApiInterface
 * @typeofeditors ["CSE"]
 * @param {number} LCID - The locale specified.
 */
ApiInterface.prototype.SetLocale = function (LCID) {};

/**
 * Returns the current locale ID.
 * @memberof ApiInterface
 * @typeofeditors ["CSE"]
 * @returns {number}
 */
ApiInterface.prototype.GetLocale = function () { return 0; };

/**
 * Returns an object that represents the active sheet.
 * @memberof ApiInterface
 * @typeofeditors ["CSE"]
 * @returns {ApiWorksheet}
 */
ApiInterface.prototype.GetActiveSheet = function () { return new ApiWorksheet(); };

/**
 * Returns an object that represents the active sheet.
 * @memberof ApiInterface
 * @typeofeditors ["CSE"]
 * @returns {ApiWorksheet}
 */
ApiInterface.prototype.ActiveSheet = ApiInterface.prototype.GetActiveSheet ();

/**
 * Returns an object that represents a sheet.
 * @memberof ApiInterface
 * @typeofeditors ["CSE"]
 * @param {string | number} nameOrIndex - Sheet name or sheet index.
 * @returns {ApiWorksheet | null}
 */
ApiInterface.prototype.GetSheet = function (nameOrIndex) { return new ApiWorksheet(); };

/**
 * Returns a list of all the available theme colors for the spreadsheet.
 * @memberof ApiInterface
 * @typeofeditors ["CSE"]
 * @returns {string[]}
 */
ApiInterface.prototype.GetThemesColors = function () { return [""]; };

/**
 * Sets the theme colors to the current spreadsheet.
 * @memberof ApiInterface
 * @typeofeditors ["CSE"]
 * @param {string} sTheme - The color scheme that will be set to the current spreadsheet.
 * @returns {boolean} - returns false if sTheme isn't a string.
 */
ApiInterface.prototype.SetThemeColors = function (sTheme) { return true; };

/**
 * Creates a new history point.
 * @memberof ApiInterface
 * @typeofeditors ["CSE"]
 */
ApiInterface.prototype.CreateNewHistoryPoint = function () {};

/**
 * Creates an RGB color setting the appropriate values for the red, green and blue color components.
 * @memberof ApiInterface
 * @typeofeditors ["CSE"]
 * @param {byte} r - Red color component value.
 * @param {byte} g - Green color component value.
 * @param {byte} b - Blue color component value.
 * @returns {ApiColor}
 */
ApiInterface.prototype.CreateColorFromRGB = function (r, g, b) { return new ApiColor(); };

/**
 * Creates a color selecting it from one of the available color presets.
 * @memberof ApiInterface
 * @typeofeditors ["CSE"]
 * @param {PresetColor} sPresetColor - A preset selected from the list of the available color preset names.
 * @returns {ApiColor}
 */
ApiInterface.prototype.CreateColorByName = function (sPresetColor) { return new ApiColor(); };

/**
 * Returns the ApiRange object that represents the rectangular intersection of two or more ranges. If one or more ranges from a different worksheet are specified, an error will be returned.
 * @memberof ApiInterface
 * @typeofeditors ["CSE"]
 * @param {ApiRange} Range1 - One of the intersecting ranges. At least two Range objects must be specified.
 * @param {ApiRange} Range2 - One of the intersecting ranges. At least two Range objects must be specified.
 * @returns {ApiRange | null}
 */
ApiInterface.prototype.Intersect = function (Range1, Range2) { return new ApiRange(); };

/**
 * Returns an object that represents the selected range.
 * @memberof ApiInterface
 * @typeofeditors ["CSE"]
 * @returns {ApiRange}
 */
ApiInterface.prototype.GetSelection = function () { return new ApiRange(); };

/**
 * Returns an object that represents the selected range.
 * @memberof ApiInterface
 * @typeofeditors ["CSE"]
 * @returns {ApiRange}
 */
ApiInterface.prototype.Selection = ApiInterface.prototype.GetSelection ();

/**
 * Adds a new name to a range of cells.
 * @memberof ApiInterface
 * @typeofeditors ["CSE"]
 * @param {string} sName - The range name.
 * @param {string} sRef - The reference to the specified range. It must contain the sheet name, followed by sign ! and a range of cells.
 * Example: "Sheet1!$A$1:$B$2".
 * @param {boolean} isHidden - Defines if the range name is hidden or not.
 * @returns {boolean} - returns false if sName or sRef are invalid.
 */
ApiInterface.prototype.AddDefName = function (sName, sRef, isHidden) { return true; };

/**
 * Returns the ApiName object by the range name.
 * @memberof ApiInterface
 * @typeofeditors ["CSE"]
 * @param {string} defName - The range name.
 * @returns {ApiName}
 */
ApiInterface.prototype.GetDefName = function (defName) { return new ApiName(); };

/**
 * Saves changes to the specified document.
 * @memberof ApiInterface
 * @typeofeditors ["CSE"]
 */
ApiInterface.prototype.Save = function () {};

/**
 * Returns the ApiRange object by the range reference.
 * @memberof ApiInterface
 * @typeofeditors ["CSE"]
 * @param {string} sRange - The range of cells from the current sheet.
 * @returns {ApiRange}
 */
ApiInterface.prototype.GetRange = function (sRange) { return new ApiRange(); };

/**
 * Returns the ApiWorksheetFunction object.
 * @memberof ApiInterface
 * @typeofeditors ["CSE"]
 * @returns {ApiWorksheetFunction}
 */
ApiInterface.prototype.GetWorksheetFunction = function () { return new ApiWorksheetFunction(); };

/**
 * Returns the ApiWorksheetFunction object.
 * @memberof ApiInterface
 * @typeofeditors ["CSE"]
 * @returns {ApiWorksheetFunction}
 */
ApiInterface.prototype.WorksheetFunction = ApiInterface.prototype.GetWorksheetFunction ();

/**
 * Returns the result of calculating the function.
 * @memberof ApiWorksheetFunction
 * @typeofeditors ["CSE"]
 * @param {any} arg1.
 * @returns {number | string | boolean}
 */
ApiWorksheetFunction.prototype.ASC = function (arg1) { return 0; };

/**
 * Returns the result of calculating the function.
 * @memberof ApiWorksheetFunction
 * @typeofeditors ["CSE"]
 * @param {number} arg1.
 * @returns {number | string | boolean}
 */
ApiWorksheetFunction.prototype.CHAR = function (arg1) { return 0; };

/**
 * Returns the result of calculating the function.
 * @memberof ApiWorksheetFunction
 * @typeofeditors ["CSE"]
 * @param {string} arg1.
 * @returns {number | string | boolean}
 */
ApiWorksheetFunction.prototype.CLEAN = function (arg1) { return 0; };

/**
 * Returns the result of calculating the function.
 * @memberof ApiWorksheetFunction
 * @typeofeditors ["CSE"]
 * @param {string} arg1.
 * @returns {number | string | boolean}
 */
ApiWorksheetFunction.prototype.CODE = function (arg1) { return 0; };

/**
 * Returns the result of calculating the function.
 * @memberof ApiWorksheetFunction
 * @typeofeditors ["CSE"]
 * @returns {number | string | boolean}
 */
ApiWorksheetFunction.prototype.CONCATENATE = function () { return 0; };

/**
 * Returns the result of calculating the function.
 * @memberof ApiWorksheetFunction
 * @typeofeditors ["CSE"]
 * @param {number} arg1.
 * @param {number} [arg2].
 * @returns {number | string | boolean}
 */
ApiWorksheetFunction.prototype.DOLLAR = function (arg1, arg2) { return 0; };

/**
 * Returns the result of calculating the function.
 * @memberof ApiWorksheetFunction
 * @typeofeditors ["CSE"]
 * @param {string} arg1.
 * @param {string} arg2.
 * @returns {number | string | boolean}
 */
ApiWorksheetFunction.prototype.EXACT = function (arg1, arg2) { return 0; };

/**
 * Returns the result of calculating the function.
 * @memberof ApiWorksheetFunction
 * @typeofeditors ["CSE"]
 * @param {string} arg1.
 * @param {string} arg2.
 * @param {number} [arg3].
 * @returns {number | string | boolean}
 */
ApiWorksheetFunction.prototype.FIND = function (arg1, arg2, arg3) { return 0; };

/**
 * Returns the result of calculating the function.
 * @memberof ApiWorksheetFunction
 * @typeofeditors ["CSE"]
 * @param {string} arg1.
 * @param {string} arg2.
 * @param {number} [arg3].
 * @returns {number | string | boolean}
 */
ApiWorksheetFunction.prototype.FINDB = function (arg1, arg2, arg3) { return 0; };

/**
 * Returns the result of calculating the function.
 * @memberof ApiWorksheetFunction
 * @typeofeditors ["CSE"]
 * @param {number} arg1.
 * @param {number} [arg2].
 * @param {boolean} [arg3].
 * @returns {number | string | boolean}
 */
ApiWorksheetFunction.prototype.FIXED = function (arg1, arg2, arg3) { return 0; };

/**
 * Returns the result of calculating the function.
 * @memberof ApiWorksheetFunction
 * @typeofeditors ["CSE"]
 * @param {string} arg1.
 * @param {number} [arg2].
 * @returns {number | string | boolean}
 */
ApiWorksheetFunction.prototype.LEFT = function (arg1, arg2) { return 0; };

/**
 * Returns the result of calculating the function.
 * @memberof ApiWorksheetFunction
 * @typeofeditors ["CSE"]
 * @param {string} arg1.
 * @param {number} [arg2].
 * @returns {number | string | boolean}
 */
ApiWorksheetFunction.prototype.LEFTB = function (arg1, arg2) { return 0; };

/**
 * Returns the result of calculating the function.
 * @memberof ApiWorksheetFunction
 * @typeofeditors ["CSE"]
 * @param {string} arg1.
 * @returns {number | string | boolean}
 */
ApiWorksheetFunction.prototype.LEN = function (arg1) { return 0; };

/**
 * Returns the result of calculating the function.
 * @memberof ApiWorksheetFunction
 * @typeofeditors ["CSE"]
 * @param {string} arg1.
 * @returns {number | string | boolean}
 */
ApiWorksheetFunction.prototype.LENB = function (arg1) { return 0; };

/**
 * Returns the result of calculating the function.
 * @memberof ApiWorksheetFunction
 * @typeofeditors ["CSE"]
 * @param {string} arg1.
 * @returns {number | string | boolean}
 */
ApiWorksheetFunction.prototype.LOWER = function (arg1) { return 0; };

/**
 * Returns the result of calculating the function.
 * @memberof ApiWorksheetFunction
 * @typeofeditors ["CSE"]
 * @param {string} arg1.
 * @param {number} arg2.
 * @param {number} arg3.
 * @returns {number | string | boolean}
 */
ApiWorksheetFunction.prototype.MID = function (arg1, arg2, arg3) { return 0; };

/**
 * Returns the result of calculating the function.
 * @memberof ApiWorksheetFunction
 * @typeofeditors ["CSE"]
 * @param {string} arg1.
 * @param {number} arg2.
 * @param {number} arg3.
 * @returns {number | string | boolean}
 */
ApiWorksheetFunction.prototype.MIDB = function (arg1, arg2, arg3) { return 0; };

/**
 * Returns the result of calculating the function.
 * @memberof ApiWorksheetFunction
 * @typeofeditors ["CSE"]
 * @param {string} arg1.
 * @param {string} [arg2].
 * @param {string} [arg3].
 * @returns {number | string | boolean}
 */
ApiWorksheetFunction.prototype.NUMBERVALUE = function (arg1, arg2, arg3) { return 0; };

/**
 * Returns the result of calculating the function.
 * @memberof ApiWorksheetFunction
 * @typeofeditors ["CSE"]
 * @param {string} arg1.
 * @returns {number | string | boolean}
 */
ApiWorksheetFunction.prototype.PROPER = function (arg1) { return 0; };

/**
 * Returns the result of calculating the function.
 * @memberof ApiWorksheetFunction
 * @typeofeditors ["CSE"]
 * @param {string} arg1.
 * @param {number} arg2.
 * @param {number} arg3.
 * @param {string} arg4.
 * @returns {number | string | boolean}
 */
ApiWorksheetFunction.prototype.REPLACE = function (arg1, arg2, arg3, arg4) { return 0; };

/**
 * Returns the result of calculating the function.
 * @memberof ApiWorksheetFunction
 * @typeofeditors ["CSE"]
 * @param {string} arg1.
 * @param {number} arg2.
 * @param {number} arg3.
 * @param {string} arg4.
 * @returns {number | string | boolean}
 */
ApiWorksheetFunction.prototype.REPLACEB = function (arg1, arg2, arg3, arg4) { return 0; };

/**
 * Returns the result of calculating the function.
 * @memberof ApiWorksheetFunction
 * @typeofeditors ["CSE"]
 * @param {string} arg1.
 * @param {number} arg2.
 * @returns {number | string | boolean}
 */
ApiWorksheetFunction.prototype.REPT = function (arg1, arg2) { return 0; };

/**
 * Returns the result of calculating the function.
 * @memberof ApiWorksheetFunction
 * @typeofeditors ["CSE"]
 * @param {string} arg1.
 * @param {number} [arg2].
 * @returns {number | string | boolean}
 */
ApiWorksheetFunction.prototype.RIGHT = function (arg1, arg2) { return 0; };

/**
 * Returns the result of calculating the function.
 * @memberof ApiWorksheetFunction
 * @typeofeditors ["CSE"]
 * @param {string} arg1.
 * @param {number} [arg2].
 * @returns {number | string | boolean}
 */
ApiWorksheetFunction.prototype.RIGHTB = function (arg1, arg2) { return 0; };

/**
 * Returns the result of calculating the function.
 * @memberof ApiWorksheetFunction
 * @typeofeditors ["CSE"]
 * @param {string} arg1.
 * @param {string} arg2.
 * @param {number} [arg3].
 * @returns {number | string | boolean}
 */
ApiWorksheetFunction.prototype.SEARCH = function (arg1, arg2, arg3) { return 0; };

/**
 * Returns the result of calculating the function.
 * @memberof ApiWorksheetFunction
 * @typeofeditors ["CSE"]
 * @param {string} arg1.
 * @param {string} arg2.
 * @param {number} [arg3].
 * @returns {number | string | boolean}
 */
ApiWorksheetFunction.prototype.SEARCHB = function (arg1, arg2, arg3) { return 0; };

/**
 * Returns the result of calculating the function.
 * @memberof ApiWorksheetFunction
 * @typeofeditors ["CSE"]
 * @param {string} arg1.
 * @param {string} arg2.
 * @param {string} arg3.
 * @param {string} [arg4].
 * @returns {number | string | boolean}
 */
ApiWorksheetFunction.prototype.SUBSTITUTE = function (arg1, arg2, arg3, arg4) { return 0; };

/**
 * Returns the result of calculating the function.
 * @memberof ApiWorksheetFunction
 * @typeofeditors ["CSE"]
 * @param {any} arg1.
 * @returns {number | string | boolean}
 */
ApiWorksheetFunction.prototype.T = function (arg1) { return 0; };

/**
 * Returns the result of calculating the function.
 * @memberof ApiWorksheetFunction
 * @typeofeditors ["CSE"]
 * @param {any} arg1.
 * @param {string} arg2.
 * @returns {number | string | boolean}
 */
ApiWorksheetFunction.prototype.TEXT = function (arg1, arg2) { return 0; };

/**
 * Returns the result of calculating the function.
 * @memberof ApiWorksheetFunction
 * @typeofeditors ["CSE"]
 * @param {string} arg1.
 * @returns {number | string | boolean}
 */
ApiWorksheetFunction.prototype.TRIM = function (arg1) { return 0; };

/**
 * Returns the result of calculating the function.
 * @memberof ApiWorksheetFunction
 * @typeofeditors ["CSE"]
 * @param {number} arg1.
 * @returns {number | string | boolean}
 */
ApiWorksheetFunction.prototype.UNICHAR = function (arg1) { return 0; };

/**
 * Returns the result of calculating the function.
 * @memberof ApiWorksheetFunction
 * @typeofeditors ["CSE"]
 * @param {string} arg1.
 * @returns {number | string | boolean}
 */
ApiWorksheetFunction.prototype.UNICODE = function (arg1) { return 0; };

/**
 * Returns the result of calculating the function.
 * @memberof ApiWorksheetFunction
 * @typeofeditors ["CSE"]
 * @param {string} arg1.
 * @returns {number | string | boolean}
 */
ApiWorksheetFunction.prototype.UPPER = function (arg1) { return 0; };

/**
 * Returns the result of calculating the function.
 * @memberof ApiWorksheetFunction
 * @typeofeditors ["CSE"]
 * @param {any} arg1.
 * @returns {number | string | boolean}
 */
ApiWorksheetFunction.prototype.VALUE = function (arg1) { return 0; };

/**
 * Returns the result of calculating the function.
 * @memberof ApiWorksheetFunction
 * @typeofeditors ["CSE"]
 * @returns {number | string | boolean}
 */
ApiWorksheetFunction.prototype.AVEDEV = function () { return 0; };

/**
 * Returns the result of calculating the function.
 * @memberof ApiWorksheetFunction
 * @typeofeditors ["CSE"]
 * @returns {number | string | boolean}
 */
ApiWorksheetFunction.prototype.AVERAGE = function () { return 0; };

/**
 * Returns the result of calculating the function.
 * @memberof ApiWorksheetFunction
 * @typeofeditors ["CSE"]
 * @returns {number | string | boolean}
 */
ApiWorksheetFunction.prototype.AVERAGEA = function () { return 0; };

/**
 * Returns the result of calculating the function.
 * @memberof ApiWorksheetFunction
 * @typeofeditors ["CSE"]
 * @param {ApiRange} arg1.
 * @param {any} arg2.
 * @param {ApiRange} [arg3].
 * @returns {number | string | boolean}
 */
ApiWorksheetFunction.prototype.AVERAGEIF = function (arg1, arg2, arg3) { return 0; };

/**
 * Returns the result of calculating the function.
 * @memberof ApiWorksheetFunction
 * @typeofeditors ["CSE"]
 * @returns {number | string | boolean}
 */
ApiWorksheetFunction.prototype.AVERAGEIFS = function () { return 0; };

/**
 * Returns the result of calculating the function.
 * @memberof ApiWorksheetFunction
 * @typeofeditors ["CSE"]
 * @param {number} arg1.
 * @param {number} arg2.
 * @param {number} arg3.
 * @param {number} [arg4].
 * @param {number} [arg5].
 * @returns {number | string | boolean}
 */
ApiWorksheetFunction.prototype.BETADIST = function (arg1, arg2, arg3, arg4, arg5) { return 0; };

/**
 * Returns the result of calculating the function.
 * @memberof ApiWorksheetFunction
 * @typeofeditors ["CSE"]
 * @param {number} arg1.
 * @param {number} arg2.
 * @param {number} arg3.
 * @param {boolean} arg4.
 * @param {number} [arg5].
 * @param {number} [arg6].
 * @returns {number | string | boolean}
 */
ApiWorksheetFunction.prototype.BETA_DIST = function (arg1, arg2, arg3, arg4, arg5, arg6) { return 0; };

/**
 * Returns the result of calculating the function.
 * @memberof ApiWorksheetFunction
 * @typeofeditors ["CSE"]
 * @param {number} arg1.
 * @param {number} arg2.
 * @param {number} arg3.
 * @param {number} [arg4].
 * @param {number} [arg5].
 * @returns {number | string | boolean}
 */
ApiWorksheetFunction.prototype.BETA_INV = function (arg1, arg2, arg3, arg4, arg5) { return 0; };

/**
 * Returns the result of calculating the function.
 * @memberof ApiWorksheetFunction
 * @typeofeditors ["CSE"]
 * @param {number} arg1.
 * @param {number} arg2.
 * @param {number} arg3.
 * @param {number} [arg4].
 * @param {number} [arg5].
 * @returns {number | string | boolean}
 */
ApiWorksheetFunction.prototype.BETAINV = function (arg1, arg2, arg3, arg4, arg5) { return 0; };

/**
 * Returns the result of calculating the function.
 * @memberof ApiWorksheetFunction
 * @typeofeditors ["CSE"]
 * @param {number} arg1.
 * @param {number} arg2.
 * @param {number} arg3.
 * @param {boolean} arg4.
 * @returns {number | string | boolean}
 */
ApiWorksheetFunction.prototype.BINOMDIST = function (arg1, arg2, arg3, arg4) { return 0; };

/**
 * Returns the result of calculating the function.
 * @memberof ApiWorksheetFunction
 * @typeofeditors ["CSE"]
 * @param {number} arg1.
 * @param {number} arg2.
 * @param {number} arg3.
 * @param {boolean} arg4.
 * @returns {number | string | boolean}
 */
ApiWorksheetFunction.prototype.BINOM_DIST = function (arg1, arg2, arg3, arg4) { return 0; };

/**
 * Returns the result of calculating the function.
 * @memberof ApiWorksheetFunction
 * @typeofeditors ["CSE"]
 * @param {number} arg1.
 * @param {number} arg2.
 * @param {number} arg3.
 * @param {number} [arg4].
 * @returns {number | string | boolean}
 */
ApiWorksheetFunction.prototype.BINOM_DIST.RANGE = function (arg1, arg2, arg3, arg4) { return 0; };

/**
 * Returns the result of calculating the function.
 * @memberof ApiWorksheetFunction
 * @typeofeditors ["CSE"]
 * @param {number} arg1.
 * @param {number} arg2.
 * @param {number} arg3.
 * @returns {number | string | boolean}
 */
ApiWorksheetFunction.prototype.BINOM_INV = function (arg1, arg2, arg3) { return 0; };

/**
 * Returns the result of calculating the function.
 * @memberof ApiWorksheetFunction
 * @typeofeditors ["CSE"]
 * @param {number} arg1.
 * @param {number} arg2.
 * @returns {number | string | boolean}
 */
ApiWorksheetFunction.prototype.CHIDIST = function (arg1, arg2) { return 0; };

/**
 * Returns the result of calculating the function.
 * @memberof ApiWorksheetFunction
 * @typeofeditors ["CSE"]
 * @param {number} arg1.
 * @param {number} arg2.
 * @returns {number | string | boolean}
 */
ApiWorksheetFunction.prototype.CHIINV = function (arg1, arg2) { return 0; };

/**
 * Returns the result of calculating the function.
 * @memberof ApiWorksheetFunction
 * @typeofeditors ["CSE"]
 * @param {number} arg1.
 * @param {number} arg2.
 * @param {boolean} arg3.
 * @returns {number | string | boolean}
 */
ApiWorksheetFunction.prototype.CHISQ_DIST = function (arg1, arg2, arg3) { return 0; };

/**
 * Returns the result of calculating the function.
 * @memberof ApiWorksheetFunction
 * @typeofeditors ["CSE"]
 * @param {number} arg1.
 * @param {number} arg2.
 * @returns {number | string | boolean}
 */
ApiWorksheetFunction.prototype.CHISQ_DIST_RT = function (arg1, arg2) { return 0; };

/**
 * Returns the result of calculating the function.
 * @memberof ApiWorksheetFunction
 * @typeofeditors ["CSE"]
 * @param {number} arg1.
 * @param {number} arg2.
 * @returns {number | string | boolean}
 */
ApiWorksheetFunction.prototype.CHISQ_INV = function (arg1, arg2) { return 0; };

/**
 * Returns the result of calculating the function.
 * @memberof ApiWorksheetFunction
 * @typeofeditors ["CSE"]
 * @param {number} arg1.
 * @param {number} arg2.
 * @returns {number | string | boolean}
 */
ApiWorksheetFunction.prototype.CHISQ_INV.RT = function (arg1, arg2) { return 0; };

/**
//  * Returns the result of calculating the function.
//  * @memberof ApiWorksheetFunction
//  * @typeofeditors ["CSE"]
//  * @param {any} arg1.
//  * @param {any} arg2.
//  * @returns {number | string | boolean}
//  */
// ApiWorksheetFunction.prototype.CHITEST = function (arg1, arg2) { return 0; };

/**
//  * Returns the result of calculating the function.
//  * @memberof ApiWorksheetFunction
//  * @typeofeditors ["CSE"]
//  * @param {any} arg1.
//  * @param {any} arg2.
//  * @returns {number | string | boolean}
//  */
// ApiWorksheetFunction.prototype.CHISQ_TEST = function (arg1, arg2) { return 0; };

/**
 * Returns the result of calculating the function.
 * @memberof ApiWorksheetFunction
 * @typeofeditors ["CSE"]
 * @param {number} arg1.
 * @param {number} arg2.
 * @param {number} arg3.
 * @returns {number | string | boolean}
 */
ApiWorksheetFunction.prototype.CONFIDENCE = function (arg1, arg2, arg3) { return 0; };

/**
 * Returns the result of calculating the function.
 * @memberof ApiWorksheetFunction
 * @typeofeditors ["CSE"]
 * @param {number} arg1.
 * @param {number} arg2.
 * @param {number} arg3.
 * @returns {number | string | boolean}
 */
ApiWorksheetFunction.prototype.CONFIDENCE_NORM = function (arg1, arg2, arg3) { return 0; };

/**
 * Returns the result of calculating the function.
 * @memberof ApiWorksheetFunction
 * @typeofeditors ["CSE"]
 * @param {number} arg1.
 * @param {number} arg2.
 * @param {number} arg3.
 * @returns {number | string | boolean}
 */
ApiWorksheetFunction.prototype.CONFIDENCE_T = function (arg1, arg2, arg3) { return 0; };

/**
//  * Returns the result of calculating the function.
//  * @memberof ApiWorksheetFunction
//  * @typeofeditors ["CSE"]
//  * @param {any} arg1.
//  * @param {any} arg2.
//  * @returns {number | string | boolean}
//  */
// ApiWorksheetFunction.prototype.CORREL = function (arg1, arg2) { return 0; };

/**
 * Returns the result of calculating the function.
 * @memberof ApiWorksheetFunction
 * @typeofeditors ["CSE"]
 * @returns {number | string | boolean}
 */
ApiWorksheetFunction.prototype.COUNT = function () { return 0; };

/**
 * Returns the result of calculating the function.
 * @memberof ApiWorksheetFunction
 * @typeofeditors ["CSE"]
 * @returns {number | string | boolean}
 */
ApiWorksheetFunction.prototype.COUNTA = function () { return 0; };

/**
 * Returns the result of calculating the function.
 * @memberof ApiWorksheetFunction
 * @typeofeditors ["CSE"]
 * @param {ApiRange} arg1.
 * @returns {number | string | boolean}
 */
ApiWorksheetFunction.prototype.COUNTBLANK = function (arg1) { return 0; };

/**
 * Returns the result of calculating the function.
 * @memberof ApiWorksheetFunction
 * @typeofeditors ["CSE"]
 * @param {ApiRange} arg1.
 * @param {any} arg2.
 * @returns {number | string | boolean}
 */
ApiWorksheetFunction.prototype.COUNTIF = function (arg1, arg2) { return 0; };

/**
 * Returns the result of calculating the function.
 * @memberof ApiWorksheetFunction
 * @typeofeditors ["CSE"]
 * @returns {number | string | boolean}
 */
ApiWorksheetFunction.prototype.COUNTIFS = function () { return 0; };

/**
//  * Returns the result of calculating the function.
//  * @memberof ApiWorksheetFunction
//  * @typeofeditors ["CSE"]
//  * @param {any} arg1.
//  * @param {any} arg2.
//  * @returns {number | string | boolean}
//  */
// ApiWorksheetFunction.prototype.COVAR = function (arg1, arg2) { return 0; };

/**
//  * Returns the result of calculating the function.
//  * @memberof ApiWorksheetFunction
//  * @typeofeditors ["CSE"]
//  * @param {any} arg1.
//  * @param {any} arg2.
//  * @returns {number | string | boolean}
//  */
// ApiWorksheetFunction.prototype.COVARIANCE_P = function (arg1, arg2) { return 0; };

/**
//  * Returns the result of calculating the function.
//  * @memberof ApiWorksheetFunction
//  * @typeofeditors ["CSE"]
//  * @param {any} arg1.
//  * @param {any} arg2.
//  * @returns {number | string | boolean}
//  */
// ApiWorksheetFunction.prototype.COVARIANCE_S = function (arg1, arg2) { return 0; };

/**
 * Returns the result of calculating the function.
 * @memberof ApiWorksheetFunction
 * @typeofeditors ["CSE"]
 * @param {number} arg1.
 * @param {number} arg2.
 * @param {number} arg3.
 * @returns {number | string | boolean}
 */
ApiWorksheetFunction.prototype.CRITBINOM = function (arg1, arg2, arg3) { return 0; };

/**
 * Returns the result of calculating the function.
 * @memberof ApiWorksheetFunction
 * @typeofeditors ["CSE"]
 * @returns {number | string | boolean}
 */
ApiWorksheetFunction.prototype.DEVSQ = function () { return 0; };

/**
 * Returns the result of calculating the function.
 * @memberof ApiWorksheetFunction
 * @typeofeditors ["CSE"]
 * @param {number} arg1.
 * @param {number} arg2.
 * @param {boolean} arg3.
 * @returns {number | string | boolean}
 */
ApiWorksheetFunction.prototype.EXPON_DIST = function (arg1, arg2, arg3) { return 0; };

/**
 * Returns the result of calculating the function.
 * @memberof ApiWorksheetFunction
 * @typeofeditors ["CSE"]
 * @param {number} arg1.
 * @param {number} arg2.
 * @param {boolean} arg3.
 * @returns {number | string | boolean}
 */
ApiWorksheetFunction.prototype.EXPONDIST = function (arg1, arg2, arg3) { return 0; };

/**
 * Returns the result of calculating the function.
 * @memberof ApiWorksheetFunction
 * @typeofeditors ["CSE"]
 * @param {number} arg1.
 * @param {number} arg2.
 * @param {number} arg3.
 * @param {boolean} arg4.
 * @returns {number | string | boolean}
 */
ApiWorksheetFunction.prototype.F_DIST = function (arg1, arg2, arg3, arg4) { return 0; };

/**
 * Returns the result of calculating the function.
 * @memberof ApiWorksheetFunction
 * @typeofeditors ["CSE"]
 * @param {number} arg1.
 * @param {number} arg2.
 * @param {number} arg3.
 * @returns {number | string | boolean}
 */
ApiWorksheetFunction.prototype.FDIST = function (arg1, arg2, arg3) { return 0; };

/**
 * Returns the result of calculating the function.
 * @memberof ApiWorksheetFunction
 * @typeofeditors ["CSE"]
 * @param {number} arg1.
 * @param {number} arg2.
 * @param {number} arg3.
 * @returns {number | string | boolean}
 */
ApiWorksheetFunction.prototype.F_DIST.RT = function (arg1, arg2, arg3) { return 0; };

/**
 * Returns the result of calculating the function.
 * @memberof ApiWorksheetFunction
 * @typeofeditors ["CSE"]
 * @param {number} arg1.
 * @param {number} arg2.
 * @param {number} arg3.
 * @returns {number | string | boolean}
 */
ApiWorksheetFunction.prototype.F_INV = function (arg1, arg2, arg3) { return 0; };

/**
 * Returns the result of calculating the function.
 * @memberof ApiWorksheetFunction
 * @typeofeditors ["CSE"]
 * @param {number} arg1.
 * @param {number} arg2.
 * @param {number} arg3.
 * @returns {number | string | boolean}
 */
ApiWorksheetFunction.prototype.FINV = function (arg1, arg2, arg3) { return 0; };

/**
 * Returns the result of calculating the function.
 * @memberof ApiWorksheetFunction
 * @typeofeditors ["CSE"]
 * @param {number} arg1.
 * @param {number} arg2.
 * @param {number} arg3.
 * @returns {number | string | boolean}
 */
ApiWorksheetFunction.prototype.F_INV.RT = function (arg1, arg2, arg3) { return 0; };

/**
 * Returns the result of calculating the function.
 * @memberof ApiWorksheetFunction
 * @typeofeditors ["CSE"]
 * @param {number} arg1.
 * @returns {number | string | boolean}
 */
ApiWorksheetFunction.prototype.FISHER = function (arg1) { return 0; };

/**
 * Returns the result of calculating the function.
 * @memberof ApiWorksheetFunction
 * @typeofeditors ["CSE"]
 * @param {number} arg1.
 * @returns {number | string | boolean}
 */
ApiWorksheetFunction.prototype.FISHERINV = function (arg1) { return 0; };

/**
//  * Returns the result of calculating the function.
//  * @memberof ApiWorksheetFunction
//  * @typeofeditors ["CSE"]
//  * @param {number} arg1.
//  * @param {any} arg2.
//  * @param {any} arg3.
//  * @returns {number | string | boolean}
//  */
// ApiWorksheetFunction.prototype.FORECAST = function (arg1, arg2, arg3) { return 0; };

/**
 * Returns the result of calculating the function.
 * @memberof ApiWorksheetFunction
 * @typeofeditors ["CSE"]
 * @param {number} arg1.
 * @param {ApiRange} arg2.
 * @param {ApiRange} arg3.
 * @param {number} [arg4].
 * @param {number} [arg5].
 * @param {number} [arg6].
 * @returns {number | string | boolean}
 */
ApiWorksheetFunction.prototype.FORECAST_ETS = function (arg1, arg2, arg3, arg4, arg5, arg6) { return 0; };

/**
 * Returns the result of calculating the function.
 * @memberof ApiWorksheetFunction
 * @typeofeditors ["CSE"]
 * @param {number} arg1.
 * @param {ApiRange} arg2.
 * @param {ApiRange} arg3.
 * @param {number} [arg4].
 * @param {number} [arg5].
 * @param {number} [arg6].
 * @param {number} [arg7].
 * @returns {number | string | boolean}
 */
ApiWorksheetFunction.prototype.FORECAST_ETS.CONFINT = function (arg1, arg2, arg3, arg4, arg5, arg6, arg7) { return 0; };

/**
 * Returns the result of calculating the function.
 * @memberof ApiWorksheetFunction
 * @typeofeditors ["CSE"]
 * @param {ApiRange} arg1.
 * @param {ApiRange} arg2.
 * @param {number} [arg3].
 * @param {number} [arg4].
 * @returns {number | string | boolean}
 */
ApiWorksheetFunction.prototype.FORECAST_ETS.SEASONALITY = function (arg1, arg2, arg3, arg4) { return 0; };

/**
 * Returns the result of calculating the function.
 * @memberof ApiWorksheetFunction
 * @typeofeditors ["CSE"]
 * @param {ApiRange} arg1.
 * @param {ApiRange} arg2.
 * @param {number} arg3.
 * @param {number} [arg4].
 * @param {number} [arg5].
 * @param {number} [arg6].
 * @returns {number | string | boolean}
 */
ApiWorksheetFunction.prototype.FORECAST_ETS.STAT = function (arg1, arg2, arg3, arg4, arg5, arg6) { return 0; };

/**
//  * Returns the result of calculating the function.
//  * @memberof ApiWorksheetFunction
//  * @typeofeditors ["CSE"]
//  * @param {number} arg1.
//  * @param {any} arg2.
//  * @param {any} arg3.
//  * @returns {number | string | boolean}
//  */
// ApiWorksheetFunction.prototype.FORECAST_LINEAR = function (arg1, arg2, arg3) { return 0; };

/**
 * Returns the result of calculating the function.
 * @memberof ApiWorksheetFunction
 * @typeofeditors ["CSE"]
 * @param {ApiRange} arg1.
 * @param {ApiRange} arg2.
 * @returns {number | string | boolean}
 */
ApiWorksheetFunction.prototype.FREQUENCY = function (arg1, arg2) { return 0; };

/**
//  * Returns the result of calculating the function.
//  * @memberof ApiWorksheetFunction
//  * @typeofeditors ["CSE"]
//  * @param {any} arg1.
//  * @param {any} arg2.
//  * @returns {number | string | boolean}
//  */
// ApiWorksheetFunction.prototype.FTEST = function (arg1, arg2) { return 0; };

/**
//  * Returns the result of calculating the function.
//  * @memberof ApiWorksheetFunction
//  * @typeofeditors ["CSE"]
//  * @param {any} arg1.
//  * @param {any} arg2.
//  * @returns {number | string | boolean}
//  */
// ApiWorksheetFunction.prototype.F_TEST = function (arg1, arg2) { return 0; };

/**
 * Returns the result of calculating the function.
 * @memberof ApiWorksheetFunction
 * @typeofeditors ["CSE"]
 * @param {number} arg1.
 * @returns {number | string | boolean}
 */
ApiWorksheetFunction.prototype.GAMMA = function (arg1) { return 0; };

/**
 * Returns the result of calculating the function.
 * @memberof ApiWorksheetFunction
 * @typeofeditors ["CSE"]
 * @param {number} arg1.
 * @param {number} arg2.
 * @param {number} arg3.
 * @param {boolean} arg4.
 * @returns {number | string | boolean}
 */
ApiWorksheetFunction.prototype.GAMMA_DIST = function (arg1, arg2, arg3, arg4) { return 0; };

/**
 * Returns the result of calculating the function.
 * @memberof ApiWorksheetFunction
 * @typeofeditors ["CSE"]
 * @param {number} arg1.
 * @param {number} arg2.
 * @param {number} arg3.
 * @param {boolean} arg4.
 * @returns {number | string | boolean}
 */
ApiWorksheetFunction.prototype.GAMMADIST = function (arg1, arg2, arg3, arg4) { return 0; };

/**
 * Returns the result of calculating the function.
 * @memberof ApiWorksheetFunction
 * @typeofeditors ["CSE"]
 * @param {number} arg1.
 * @param {number} arg2.
 * @param {number} arg3.
 * @returns {number | string | boolean}
 */
ApiWorksheetFunction.prototype.GAMMA_INV = function (arg1, arg2, arg3) { return 0; };

/**
 * Returns the result of calculating the function.
 * @memberof ApiWorksheetFunction
 * @typeofeditors ["CSE"]
 * @param {number} arg1.
 * @param {number} arg2.
 * @param {number} arg3.
 * @returns {number | string | boolean}
 */
ApiWorksheetFunction.prototype.GAMMAINV = function (arg1, arg2, arg3) { return 0; };

/**
 * Returns the result of calculating the function.
 * @memberof ApiWorksheetFunction
 * @typeofeditors ["CSE"]
 * @param {number} arg1.
 * @returns {number | string | boolean}
 */
ApiWorksheetFunction.prototype.GAMMALN = function (arg1) { return 0; };

/**
 * Returns the result of calculating the function.
 * @memberof ApiWorksheetFunction
 * @typeofeditors ["CSE"]
 * @param {number} arg1.
 * @returns {number | string | boolean}
 */
ApiWorksheetFunction.prototype.GAMMALN_PRECISE = function (arg1) { return 0; };

/**
 * Returns the result of calculating the function.
 * @memberof ApiWorksheetFunction
 * @typeofeditors ["CSE"]
 * @param {number} arg1.
 * @returns {number | string | boolean}
 */
ApiWorksheetFunction.prototype.GAUSS = function (arg1) { return 0; };

/**
 * Returns the result of calculating the function.
 * @memberof ApiWorksheetFunction
 * @typeofeditors ["CSE"]
 * @returns {number | string | boolean}
 */
ApiWorksheetFunction.prototype.GEOMEAN = function () { return 0; };

/**
 * Returns the result of calculating the function.
 * @memberof ApiWorksheetFunction
 * @typeofeditors ["CSE"]
 * @param {ApiRange} arg1.
 * @param {ApiRange} [arg2].
 * @param {ApiRange} [arg3].
 * @param {boolean} [arg4].
 * @returns {number | string | boolean}
 */
ApiWorksheetFunction.prototype.GROWTH = function (arg1, arg2, arg3, arg4) { return 0; };

/**
 * Returns the result of calculating the function.
 * @memberof ApiWorksheetFunction
 * @typeofeditors ["CSE"]
 * @returns {number | string | boolean}
 */
ApiWorksheetFunction.prototype.HARMEAN = function () { return 0; };

/**
 * Returns the result of calculating the function.
 * @memberof ApiWorksheetFunction
 * @typeofeditors ["CSE"]
 * @param {number} arg1.
 * @param {number} arg2.
 * @param {number} arg3.
 * @param {number} arg4.
 * @returns {number | string | boolean}
 */
ApiWorksheetFunction.prototype.HYPGEOMDIST = function (arg1, arg2, arg3, arg4) { return 0; };

/**
 * Returns the result of calculating the function.
 * @memberof ApiWorksheetFunction
 * @typeofeditors ["CSE"]
 * @param {number} arg1.
 * @param {number} arg2.
 * @param {number} arg3.
 * @param {number} arg4.
 * @param {boolean} arg5.
 * @returns {number | string | boolean}
 */
ApiWorksheetFunction.prototype.HYPGEOM_DIST = function (arg1, arg2, arg3, arg4, arg5) { return 0; };

/**
//  * Returns the result of calculating the function.
//  * @memberof ApiWorksheetFunction
//  * @typeofeditors ["CSE"]
//  * @param {any} arg1.
//  * @param {any} arg2.
//  * @returns {number | string | boolean}
//  */
// ApiWorksheetFunction.prototype.INTERCEPT = function (arg1, arg2) { return 0; };

/**
 * Returns the result of calculating the function.
 * @memberof ApiWorksheetFunction
 * @typeofeditors ["CSE"]
 * @returns {number | string | boolean}
 */
ApiWorksheetFunction.prototype.KURT = function () { return 0; };

/**
 * Returns the result of calculating the function.
 * @memberof ApiWorksheetFunction
 * @typeofeditors ["CSE"]
 * @param {number} arg1.
 * @param {number} arg2.
 * @returns {number | string | boolean}
 */
ApiWorksheetFunction.prototype.LARGE = function (arg1, arg2) { return 0; };

/**
 * Returns the result of calculating the function.
 * @memberof ApiWorksheetFunction
 * @typeofeditors ["CSE"]
 * @param {ApiRange} arg1.
 * @param {ApiRange} [arg2].
 * @param {boolean} [arg3].
 * @param {boolean} [arg4].
 * @returns {number | string | boolean}
 */
ApiWorksheetFunction.prototype.LINEST = function (arg1, arg2, arg3, arg4) { return 0; };

/**
 * Returns the result of calculating the function.
 * @memberof ApiWorksheetFunction
 * @typeofeditors ["CSE"]
 * @param {ApiRange} arg1.
 * @param {ApiRange} [arg2].
 * @param {boolean} [arg3].
 * @param {boolean} [arg4].
 * @returns {number | string | boolean}
 */
ApiWorksheetFunction.prototype.LOGEST = function (arg1, arg2, arg3, arg4) { return 0; };

/**
 * Returns the result of calculating the function.
 * @memberof ApiWorksheetFunction
 * @typeofeditors ["CSE"]
 * @param {number} arg1.
 * @param {number} arg2.
 * @param {number} arg3.
 * @returns {number | string | boolean}
 */
ApiWorksheetFunction.prototype.LOGINV = function (arg1, arg2, arg3) { return 0; };

/**
 * Returns the result of calculating the function.
 * @memberof ApiWorksheetFunction
 * @typeofeditors ["CSE"]
 * @param {number} arg1.
 * @param {number} arg2.
 * @param {number} arg3.
 * @param {boolean} arg4.
 * @returns {number | string | boolean}
 */
ApiWorksheetFunction.prototype.LOGNORM_DIST = function (arg1, arg2, arg3, arg4) { return 0; };

/**
 * Returns the result of calculating the function.
 * @memberof ApiWorksheetFunction
 * @typeofeditors ["CSE"]
 * @param {number} arg1.
 * @param {number} arg2.
 * @param {number} arg3.
 * @returns {number | string | boolean}
 */
ApiWorksheetFunction.prototype.LOGNORM_INV = function (arg1, arg2, arg3) { return 0; };

/**
 * Returns the result of calculating the function.
 * @memberof ApiWorksheetFunction
 * @typeofeditors ["CSE"]
 * @param {number} arg1.
 * @param {number} arg2.
 * @param {number} arg3.
 * @returns {number | string | boolean}
 */
ApiWorksheetFunction.prototype.LOGNORMDIST = function (arg1, arg2, arg3) { return 0; };

/**
 * Returns the result of calculating the function.
 * @memberof ApiWorksheetFunction
 * @typeofeditors ["CSE"]
 * @returns {number | string | boolean}
 */
ApiWorksheetFunction.prototype.MAX = function () { return 0; };

/**
 * Returns the result of calculating the function.
 * @memberof ApiWorksheetFunction
 * @typeofeditors ["CSE"]
 * @returns {number | string | boolean}
 */
ApiWorksheetFunction.prototype.MAXA = function () { return 0; };

/**
 * Returns the result of calculating the function.
 * @memberof ApiWorksheetFunction
 * @typeofeditors ["CSE"]
 * @returns {number | string | boolean}
 */
ApiWorksheetFunction.prototype.MEDIAN = function () { return 0; };

/**
 * Returns the result of calculating the function.
 * @memberof ApiWorksheetFunction
 * @typeofeditors ["CSE"]
 * @returns {number | string | boolean}
 */
ApiWorksheetFunction.prototype.MIN = function () { return 0; };

/**
 * Returns the result of calculating the function.
 * @memberof ApiWorksheetFunction
 * @typeofeditors ["CSE"]
 * @returns {number | string | boolean}
 */
ApiWorksheetFunction.prototype.MINA = function () { return 0; };

/**
//  * Returns the result of calculating the function.
//  * @memberof ApiWorksheetFunction
//  * @typeofeditors ["CSE"]
//  * @returns {number | string | boolean}
//  */
// ApiWorksheetFunction.prototype.MODE = function () { return 0; };

/**
//  * Returns the result of calculating the function.
//  * @memberof ApiWorksheetFunction
//  * @typeofeditors ["CSE"]
//  * @returns {number | string | boolean}
//  */
// ApiWorksheetFunction.prototype.MODE_MULT = function () { return 0; };

/**
//  * Returns the result of calculating the function.
//  * @memberof ApiWorksheetFunction
//  * @typeofeditors ["CSE"]
//  * @returns {number | string | boolean}
//  */
// ApiWorksheetFunction.prototype.MODE_SNGL = function () { return 0; };

/**
 * Returns the result of calculating the function.
 * @memberof ApiWorksheetFunction
 * @typeofeditors ["CSE"]
 * @param {number} arg1.
 * @param {number} arg2.
 * @param {number} arg3.
 * @returns {number | string | boolean}
 */
ApiWorksheetFunction.prototype.NEGBINOMDIST = function (arg1, arg2, arg3) { return 0; };

/**
 * Returns the result of calculating the function.
 * @memberof ApiWorksheetFunction
 * @typeofeditors ["CSE"]
 * @param {number} arg1.
 * @param {number} arg2.
 * @param {number} arg3.
 * @param {boolean} arg4.
 * @returns {number | string | boolean}
 */
ApiWorksheetFunction.prototype.NEGBINOM_DIST = function (arg1, arg2, arg3, arg4) { return 0; };

/**
 * Returns the result of calculating the function.
 * @memberof ApiWorksheetFunction
 * @typeofeditors ["CSE"]
 * @param {number} arg1.
 * @param {any} arg2.
 * @param {any} arg3.
 * @param {any} arg4.
 * @returns {number | string | boolean}
 */
ApiWorksheetFunction.prototype.NORMDIST = function (arg1, arg2, arg3, arg4) { return 0; };

/**
 * Returns the result of calculating the function.
 * @memberof ApiWorksheetFunction
 * @typeofeditors ["CSE"]
 * @param {number} arg1.
 * @param {number} arg2.
 * @param {number} arg3.
 * @param {boolean} arg4.
 * @returns {number | string | boolean}
 */
ApiWorksheetFunction.prototype.NORM_DIST = function (arg1, arg2, arg3, arg4) { return 0; };

/**
 * Returns the result of calculating the function.
 * @memberof ApiWorksheetFunction
 * @typeofeditors ["CSE"]
 * @param {number} arg1.
 * @param {number} arg2.
 * @param {number} arg3.
 * @returns {number | string | boolean}
 */
ApiWorksheetFunction.prototype.NORMINV = function (arg1, arg2, arg3) { return 0; };

/**
 * Returns the result of calculating the function.
 * @memberof ApiWorksheetFunction
 * @typeofeditors ["CSE"]
 * @param {number} arg1.
 * @param {number} arg2.
 * @param {number} arg3.
 * @returns {number | string | boolean}
 */
ApiWorksheetFunction.prototype.NORM_INV = function (arg1, arg2, arg3) { return 0; };

/**
 * Returns the result of calculating the function.
 * @memberof ApiWorksheetFunction
 * @typeofeditors ["CSE"]
 * @param {number} arg1.
 * @returns {number | string | boolean}
 */
ApiWorksheetFunction.prototype.NORMSDIST = function (arg1) { return 0; };

/**
 * Returns the result of calculating the function.
 * @memberof ApiWorksheetFunction
 * @typeofeditors ["CSE"]
 * @param {number} arg1.
 * @param {boolean} arg2.
 * @returns {number | string | boolean}
 */
ApiWorksheetFunction.prototype.NORM_S_DIST = function (arg1, arg2) { return 0; };

/**
 * Returns the result of calculating the function.
 * @memberof ApiWorksheetFunction
 * @typeofeditors ["CSE"]
 * @param {number} arg1.
 * @returns {number | string | boolean}
 */
ApiWorksheetFunction.prototype.NORMSINV = function (arg1) { return 0; };

/**
 * Returns the result of calculating the function.
 * @memberof ApiWorksheetFunction
 * @typeofeditors ["CSE"]
 * @param {number} arg1.
 * @returns {number | string | boolean}
 */
ApiWorksheetFunction.prototype.NORM_S_INV = function (arg1) { return 0; };

/**
//  * Returns the result of calculating the function.
//  * @memberof ApiWorksheetFunction
//  * @typeofeditors ["CSE"]
//  * @param {any} arg1.
//  * @param {any} arg2.
//  * @returns {number | string | boolean}
//  */
// ApiWorksheetFunction.prototype.PEARSON = function (arg1, arg2) { return 0; };

/**
 * Returns the result of calculating the function.
 * @memberof ApiWorksheetFunction
 * @typeofeditors ["CSE"]
 * @param {number} arg1.
 * @param {number} arg2.
 * @returns {number | string | boolean}
 */
ApiWorksheetFunction.prototype.PERCENTILE = function (arg1, arg2) { return 0; };

/**
 * Returns the result of calculating the function.
 * @memberof ApiWorksheetFunction
 * @typeofeditors ["CSE"]
 * @param {number} arg1.
 * @param {number} arg2.
 * @returns {number | string | boolean}
 */
ApiWorksheetFunction.prototype.PERCENTILE_EXC = function (arg1, arg2) { return 0; };

/**
 * Returns the result of calculating the function.
 * @memberof ApiWorksheetFunction
 * @typeofeditors ["CSE"]
 * @param {number} arg1.
 * @param {number} arg2.
 * @returns {number | string | boolean}
 */
ApiWorksheetFunction.prototype.PERCENTILE_INC = function (arg1, arg2) { return 0; };

/**
 * Returns the result of calculating the function.
 * @memberof ApiWorksheetFunction
 * @typeofeditors ["CSE"]
 * @param {number} arg1.
 * @param {number} arg2.
 * @param {number} [arg3].
 * @returns {number | string | boolean}
 */
ApiWorksheetFunction.prototype.PERCENTRANK = function (arg1, arg2, arg3) { return 0; };

/**
 * Returns the result of calculating the function.
 * @memberof ApiWorksheetFunction
 * @typeofeditors ["CSE"]
 * @param {number} arg1.
 * @param {number} arg2.
 * @param {number} [arg3].
 * @returns {number | string | boolean}
 */
ApiWorksheetFunction.prototype.PERCENTRANK_EXC = function (arg1, arg2, arg3) { return 0; };

/**
 * Returns the result of calculating the function.
 * @memberof ApiWorksheetFunction
 * @typeofeditors ["CSE"]
 * @param {number} arg1.
 * @param {number} arg2.
 * @param {number} [arg3].
 * @returns {number | string | boolean}
 */
ApiWorksheetFunction.prototype.PERCENTRANK_INC = function (arg1, arg2, arg3) { return 0; };

/**
 * Returns the result of calculating the function.
 * @memberof ApiWorksheetFunction
 * @typeofeditors ["CSE"]
 * @param {number} arg1.
 * @param {number} arg2.
 * @returns {number | string | boolean}
 */
ApiWorksheetFunction.prototype.PERMUT = function (arg1, arg2) { return 0; };

/**
 * Returns the result of calculating the function.
 * @memberof ApiWorksheetFunction
 * @typeofeditors ["CSE"]
 * @param {number} arg1.
 * @param {number} arg2.
 * @returns {number | string | boolean}
 */
ApiWorksheetFunction.prototype.PERMUTATIONA = function (arg1, arg2) { return 0; };

/**
 * Returns the result of calculating the function.
 * @memberof ApiWorksheetFunction
 * @typeofeditors ["CSE"]
 * @param {number} arg1.
 * @returns {number | string | boolean}
 */
ApiWorksheetFunction.prototype.PHI = function (arg1) { return 0; };

/**
 * Returns the result of calculating the function.
 * @memberof ApiWorksheetFunction
 * @typeofeditors ["CSE"]
 * @param {number} arg1.
 * @param {number} arg2.
 * @param {boolean} arg3.
 * @returns {number | string | boolean}
 */
ApiWorksheetFunction.prototype.POISSON = function (arg1, arg2, arg3) { return 0; };

/**
 * Returns the result of calculating the function.
 * @memberof ApiWorksheetFunction
 * @typeofeditors ["CSE"]
 * @param {number} arg1.
 * @param {number} arg2.
 * @param {boolean} arg3.
 * @returns {number | string | boolean}
 */
ApiWorksheetFunction.prototype.POISSON_DIST = function (arg1, arg2, arg3) { return 0; };

/**
//  * Returns the result of calculating the function.
//  * @memberof ApiWorksheetFunction
//  * @typeofeditors ["CSE"]
//  * @param {any} arg1.
//  * @param {any} arg2.
//  * @param {number} arg3.
//  * @param {number} [arg4].
//  * @returns {number | string | boolean}
//  */
// ApiWorksheetFunction.prototype.PROB = function (arg1, arg2, arg3, arg4) { return 0; };

/**
 * Returns the result of calculating the function.
 * @memberof ApiWorksheetFunction
 * @typeofeditors ["CSE"]
 * @param {number} arg1.
 * @param {number} arg2.
 * @returns {number | string | boolean}
 */
ApiWorksheetFunction.prototype.QUARTILE = function (arg1, arg2) { return 0; };

/**
 * Returns the result of calculating the function.
 * @memberof ApiWorksheetFunction
 * @typeofeditors ["CSE"]
 * @param {number} arg1.
 * @param {number} arg2.
 * @returns {number | string | boolean}
 */
ApiWorksheetFunction.prototype.QUARTILE_EXC = function (arg1, arg2) { return 0; };

/**
 * Returns the result of calculating the function.
 * @memberof ApiWorksheetFunction
 * @typeofeditors ["CSE"]
 * @param {number} arg1.
 * @param {number} arg2.
 * @returns {number | string | boolean}
 */
ApiWorksheetFunction.prototype.QUARTILE_INC = function (arg1, arg2) { return 0; };

/**
 * Returns the result of calculating the function.
 * @memberof ApiWorksheetFunction
 * @typeofeditors ["CSE"]
 * @param {number} arg1.
 * @param {ApiRange} arg2.
 * @param {boolean} [arg3].
 * @returns {number | string | boolean}
 */
ApiWorksheetFunction.prototype.RANK = function (arg1, arg2, arg3) { return 0; };

/**
 * Returns the result of calculating the function.
 * @memberof ApiWorksheetFunction
 * @typeofeditors ["CSE"]
 * @param {number} arg1.
 * @param {ApiRange} arg2.
 * @param {boolean} [arg3].
 * @returns {number | string | boolean}
 */
ApiWorksheetFunction.prototype.RANK_AVG = function (arg1, arg2, arg3) { return 0; };

/**
 * Returns the result of calculating the function.
 * @memberof ApiWorksheetFunction
 * @typeofeditors ["CSE"]
 * @param {number} arg1.
 * @param {ApiRange} arg2.
 * @param {boolean} [arg3].
 * @returns {number | string | boolean}
 */
ApiWorksheetFunction.prototype.RANK_EQ = function (arg1, arg2, arg3) { return 0; };

/**
//  * Returns the result of calculating the function.
//  * @memberof ApiWorksheetFunction
//  * @typeofeditors ["CSE"]
//  * @param {any} arg1.
//  * @param {any} arg2.
//  * @returns {number | string | boolean}
//  */
// ApiWorksheetFunction.prototype.RSQ = function (arg1, arg2) { return 0; };

/**
 * Returns the result of calculating the function.
 * @memberof ApiWorksheetFunction
 * @typeofeditors ["CSE"]
 * @returns {number | string | boolean}
 */
ApiWorksheetFunction.prototype.SKEW = function () { return 0; };

/**
 * Returns the result of calculating the function.
 * @memberof ApiWorksheetFunction
 * @typeofeditors ["CSE"]
 * @returns {number | string | boolean}
 */
ApiWorksheetFunction.prototype.SKEW_P = function () { return 0; };

/**
//  * Returns the result of calculating the function.
//  * @memberof ApiWorksheetFunction
//  * @typeofeditors ["CSE"]
//  * @param {any} arg1.
//  * @param {any} arg2.
//  * @returns {number | string | boolean}
//  */
// ApiWorksheetFunction.prototype.SLOPE = function (arg1, arg2) { return 0; };

/**
 * Returns the result of calculating the function.
 * @memberof ApiWorksheetFunction
 * @typeofeditors ["CSE"]
 * @param {number} arg1.
 * @param {number} arg2.
 * @returns {number | string | boolean}
 */
ApiWorksheetFunction.prototype.SMALL = function (arg1, arg2) { return 0; };

/**
 * Returns the result of calculating the function.
 * @memberof ApiWorksheetFunction
 * @typeofeditors ["CSE"]
 * @param {number} arg1.
 * @param {number} arg2.
 * @param {number} arg3.
 * @returns {number | string | boolean}
 */
ApiWorksheetFunction.prototype.STANDARDIZE = function (arg1, arg2, arg3) { return 0; };

/**
 * Returns the result of calculating the function.
 * @memberof ApiWorksheetFunction
 * @typeofeditors ["CSE"]
 * @returns {number | string | boolean}
 */
ApiWorksheetFunction.prototype.STDEV = function () { return 0; };

/**
 * Returns the result of calculating the function.
 * @memberof ApiWorksheetFunction
 * @typeofeditors ["CSE"]
 * @returns {number | string | boolean}
 */
ApiWorksheetFunction.prototype.STDEV_S = function () { return 0; };

/**
 * Returns the result of calculating the function.
 * @memberof ApiWorksheetFunction
 * @typeofeditors ["CSE"]
 * @returns {number | string | boolean}
 */
ApiWorksheetFunction.prototype.STDEVA = function () { return 0; };

/**
 * Returns the result of calculating the function.
 * @memberof ApiWorksheetFunction
 * @typeofeditors ["CSE"]
 * @returns {number | string | boolean}
 */
ApiWorksheetFunction.prototype.STDEVP = function () { return 0; };

/**
 * Returns the result of calculating the function.
 * @memberof ApiWorksheetFunction
 * @typeofeditors ["CSE"]
 * @returns {number | string | boolean}
 */
ApiWorksheetFunction.prototype.STDEV_P = function () { return 0; };

/**
 * Returns the result of calculating the function.
 * @memberof ApiWorksheetFunction
 * @typeofeditors ["CSE"]
 * @returns {number | string | boolean}
 */
ApiWorksheetFunction.prototype.STDEVPA = function () { return 0; };

/**
//  * Returns the result of calculating the function.
//  * @memberof ApiWorksheetFunction
//  * @typeofeditors ["CSE"]
//  * @param {any} arg1.
//  * @param {any} arg2.
//  * @returns {number | string | boolean}
//  */
// ApiWorksheetFunction.prototype.STEYX = function (arg1, arg2) { return 0; };

/**
 * Returns the result of calculating the function.
 * @memberof ApiWorksheetFunction
 * @typeofeditors ["CSE"]
 * @param {number} arg1.
 * @param {number} arg2.
 * @param {number} arg3.
 * @returns {number | string | boolean}
 */
ApiWorksheetFunction.prototype.TDIST = function (arg1, arg2, arg3) { return 0; };

/**
 * Returns the result of calculating the function.
 * @memberof ApiWorksheetFunction
 * @typeofeditors ["CSE"]
 * @param {number} arg1.
 * @param {number} arg2.
 * @param {boolean} arg3.
 * @returns {number | string | boolean}
 */
ApiWorksheetFunction.prototype.T_DIST = function (arg1, arg2, arg3) { return 0; };

/**
 * Returns the result of calculating the function.
 * @memberof ApiWorksheetFunction
 * @typeofeditors ["CSE"]
 * @param {number} arg1.
 * @param {number} arg2.
 * @returns {number | string | boolean}
 */
ApiWorksheetFunction.prototype.T_DIST_2T = function (arg1, arg2) { return 0; };

/**
 * Returns the result of calculating the function.
 * @memberof ApiWorksheetFunction
 * @typeofeditors ["CSE"]
 * @param {number} arg1.
 * @param {number} arg2.
 * @returns {number | string | boolean}
 */
ApiWorksheetFunction.prototype.T_DIST_RT = function (arg1, arg2) { return 0; };

/**
 * Returns the result of calculating the function.
 * @memberof ApiWorksheetFunction
 * @typeofeditors ["CSE"]
 * @param {number} arg1.
 * @param {number} arg2.
 * @returns {number | string | boolean}
 */
ApiWorksheetFunction.prototype.T_INV = function (arg1, arg2) { return 0; };

/**
 * Returns the result of calculating the function.
 * @memberof ApiWorksheetFunction
 * @typeofeditors ["CSE"]
 * @param {number} arg1.
 * @param {number} arg2.
 * @returns {number | string | boolean}
 */
ApiWorksheetFunction.prototype.T_INV_2T = function (arg1, arg2) { return 0; };

/**
 * Returns the result of calculating the function.
 * @memberof ApiWorksheetFunction
 * @typeofeditors ["CSE"]
 * @param {number} arg1.
 * @param {number} arg2.
 * @returns {number | string | boolean}
 */
ApiWorksheetFunction.prototype.TINV = function (arg1, arg2) { return 0; };

/**
 * Returns the result of calculating the function.
 * @memberof ApiWorksheetFunction
 * @typeofeditors ["CSE"]
 * @param {ApiRange} arg1.
 * @param {ApiRange} [arg2].
 * @param {ApiRange} [arg3].
 * @param {boolean} [arg4].
 * @returns {number | string | boolean}
 */
ApiWorksheetFunction.prototype.TREND = function (arg1, arg2, arg3, arg4) { return 0; };

/**
 * Returns the result of calculating the function.
 * @memberof ApiWorksheetFunction
 * @typeofeditors ["CSE"]
 * @param {number} arg1.
 * @param {number} arg2.
 * @returns {number | string | boolean}
 */
ApiWorksheetFunction.prototype.TRIMMEAN = function (arg1, arg2) { return 0; };

/**
//  * Returns the result of calculating the function.
//  * @memberof ApiWorksheetFunction
//  * @typeofeditors ["CSE"]
//  * @param {any} arg1.
//  * @param {any} arg2.
//  * @param {number} arg3.
//  * @param {number} arg4.
//  * @returns {number | string | boolean}
//  */
// ApiWorksheetFunction.prototype.TTEST = function (arg1, arg2, arg3, arg4) { return 0; };

/**
//  * Returns the result of calculating the function.
//  * @memberof ApiWorksheetFunction
//  * @typeofeditors ["CSE"]
//  * @param {any} arg1.
//  * @param {any} arg2.
//  * @param {number} arg3.
//  * @param {number} arg4.
//  * @returns {number | string | boolean}
//  */
// ApiWorksheetFunction.prototype.T_TEST = function (arg1, arg2, arg3, arg4) { return 0; };

/**
 * Returns the result of calculating the function.
 * @memberof ApiWorksheetFunction
 * @typeofeditors ["CSE"]
 * @returns {number | string | boolean}
 */
ApiWorksheetFunction.prototype.VAR = function () { return 0; };

/**
 * Returns the result of calculating the function.
 * @memberof ApiWorksheetFunction
 * @typeofeditors ["CSE"]
 * @returns {number | string | boolean}
 */
ApiWorksheetFunction.prototype.VARA = function () { return 0; };

/**
 * Returns the result of calculating the function.
 * @memberof ApiWorksheetFunction
 * @typeofeditors ["CSE"]
 * @returns {number | string | boolean}
 */
ApiWorksheetFunction.prototype.VARP = function () { return 0; };

/**
 * Returns the result of calculating the function.
 * @memberof ApiWorksheetFunction
 * @typeofeditors ["CSE"]
 * @returns {number | string | boolean}
 */
ApiWorksheetFunction.prototype.VAR_P = function () { return 0; };

/**
 * Returns the result of calculating the function.
 * @memberof ApiWorksheetFunction
 * @typeofeditors ["CSE"]
 * @returns {number | string | boolean}
 */
ApiWorksheetFunction.prototype.VAR_S = function () { return 0; };

/**
 * Returns the result of calculating the function.
 * @memberof ApiWorksheetFunction
 * @typeofeditors ["CSE"]
 * @returns {number | string | boolean}
 */
ApiWorksheetFunction.prototype.VARPA = function () { return 0; };

/**
 * Returns the result of calculating the function.
 * @memberof ApiWorksheetFunction
 * @typeofeditors ["CSE"]
 * @param {number} arg1.
 * @param {number} arg2.
 * @param {number} arg3.
 * @param {boolean} arg4.
 * @returns {number | string | boolean}
 */
ApiWorksheetFunction.prototype.WEIBULL = function (arg1, arg2, arg3, arg4) { return 0; };

/**
 * Returns the result of calculating the function.
 * @memberof ApiWorksheetFunction
 * @typeofeditors ["CSE"]
 * @param {number} arg1.
 * @param {number} arg2.
 * @param {number} arg3.
 * @param {boolean} arg4.
 * @returns {number | string | boolean}
 */
ApiWorksheetFunction.prototype.WEIBULL_DIST = function (arg1, arg2, arg3, arg4) { return 0; };

/**
 * Returns the result of calculating the function.
 * @memberof ApiWorksheetFunction
 * @typeofeditors ["CSE"]
 * @param {number} arg1.
 * @param {number} arg2.
 * @param {number} [arg3].
 * @returns {number | string | boolean}
 */
ApiWorksheetFunction.prototype.ZTEST = function (arg1, arg2, arg3) { return 0; };

/**
 * Returns the result of calculating the function.
 * @memberof ApiWorksheetFunction
 * @typeofeditors ["CSE"]
 * @param {number} arg1.
 * @param {number} arg2.
 * @param {number} [arg3].
 * @returns {number | string | boolean}
 */
ApiWorksheetFunction.prototype.Z_TEST = function (arg1, arg2, arg3) { return 0; };

/**
 * Returns the result of calculating the function.
 * @memberof ApiWorksheetFunction
 * @typeofeditors ["CSE"]
 * @param {number} arg1.
 * @param {number} arg2.
 * @param {number} arg3.
 * @returns {number | string | boolean}
 */
ApiWorksheetFunction.prototype.DATE = function (arg1, arg2, arg3) { return 0; };

/**
 * Returns the result of calculating the function.
 * @memberof ApiWorksheetFunction
 * @typeofeditors ["CSE"]
 * @param {number} arg1.
 * @returns {number | string | boolean}
 */
ApiWorksheetFunction.prototype.DATEVALUE = function (arg1) { return 0; };

/**
 * Returns the result of calculating the function.
 * @memberof ApiWorksheetFunction
 * @typeofeditors ["CSE"]
 * @param {number} arg1.
 * @returns {number | string | boolean}
 */
ApiWorksheetFunction.prototype.DAY = function (arg1) { return 0; };

/**
 * Returns the result of calculating the function.
 * @memberof ApiWorksheetFunction
 * @typeofeditors ["CSE"]
 * @param {number} arg1.
 * @param {number} arg2.
 * @returns {number | string | boolean}
 */
ApiWorksheetFunction.prototype.DAYS = function (arg1, arg2) { return 0; };

/**
 * Returns the result of calculating the function.
 * @memberof ApiWorksheetFunction
 * @typeofeditors ["CSE"]
 * @param {number} arg1.
 * @param {number} arg2.
 * @param {boolean} [arg3].
 * @returns {number | string | boolean}
 */
ApiWorksheetFunction.prototype.DAYS360 = function (arg1, arg2, arg3) { return 0; };

/**
 * Returns the result of calculating the function.
 * @memberof ApiWorksheetFunction
 * @typeofeditors ["CSE"]
 * @param {any} arg1.
 * @param {any} arg2.
 * @returns {number | string | boolean}
 */
ApiWorksheetFunction.prototype.EDATE = function (arg1, arg2) { return 0; };

/**
 * Returns the result of calculating the function.
 * @memberof ApiWorksheetFunction
 * @typeofeditors ["CSE"]
 * @param {any} arg1.
 * @param {any} arg2.
 * @returns {number | string | boolean}
 */
ApiWorksheetFunction.prototype.EOMONTH = function (arg1, arg2) { return 0; };

/**
 * Returns the result of calculating the function.
 * @memberof ApiWorksheetFunction
 * @typeofeditors ["CSE"]
 * @param {number} arg1.
 * @returns {number | string | boolean}
 */
ApiWorksheetFunction.prototype.HOUR = function (arg1) { return 0; };

/**
 * Returns the result of calculating the function.
 * @memberof ApiWorksheetFunction
 * @typeofeditors ["CSE"]
 * @param {number} arg1.
 * @returns {number | string | boolean}
 */
ApiWorksheetFunction.prototype.ISOWEEKNUM = function (arg1) { return 0; };

/**
 * Returns the result of calculating the function.
 * @memberof ApiWorksheetFunction
 * @typeofeditors ["CSE"]
 * @param {number} arg1.
 * @returns {number | string | boolean}
 */
ApiWorksheetFunction.prototype.MINUTE = function (arg1) { return 0; };

/**
 * Returns the result of calculating the function.
 * @memberof ApiWorksheetFunction
 * @typeofeditors ["CSE"]
 * @param {number} arg1.
 * @returns {number | string | boolean}
 */
ApiWorksheetFunction.prototype.MONTH = function (arg1) { return 0; };

/**
 * Returns the result of calculating the function.
 * @memberof ApiWorksheetFunction
 * @typeofeditors ["CSE"]
 * @param {any} arg1.
 * @param {any} arg2.
 * @param {any} [arg3].
 * @returns {number | string | boolean}
 */
ApiWorksheetFunction.prototype.NETWORKDAYS = function (arg1, arg2, arg3) { return 0; };

/**
 * Returns the result of calculating the function.
 * @memberof ApiWorksheetFunction
 * @typeofeditors ["CSE"]
 * @param {any} arg1.
 * @param {any} arg2.
 * @param {number} [arg3].
 * @param {any} [arg4].
 * @returns {number | string | boolean}
 */
ApiWorksheetFunction.prototype.NETWORKDAYS_INTL = function (arg1, arg2, arg3, arg4) { return 0; };

/**
 * Returns the result of calculating the function.
 * @memberof ApiWorksheetFunction
 * @typeofeditors ["CSE"]
 * @returns {number | string | boolean}
 */
ApiWorksheetFunction.prototype.NOW = function () { return 0; };

/**
 * Returns the result of calculating the function.
 * @memberof ApiWorksheetFunction
 * @typeofeditors ["CSE"]
 * @param {number} arg1.
 * @returns {number | string | boolean}
 */
ApiWorksheetFunction.prototype.SECOND = function (arg1) { return 0; };

/**
 * Returns the result of calculating the function.
 * @memberof ApiWorksheetFunction
 * @typeofeditors ["CSE"]
 * @param {number} arg1.
 * @param {number} arg2.
 * @param {number} arg3.
 * @returns {number | string | boolean}
 */
ApiWorksheetFunction.prototype.TIME = function (arg1, arg2, arg3) { return 0; };

/**
 * Returns the result of calculating the function.
 * @memberof ApiWorksheetFunction
 * @typeofeditors ["CSE"]
 * @param {number} arg1.
 * @returns {number | string | boolean}
 */
ApiWorksheetFunction.prototype.TIMEVALUE = function (arg1) { return 0; };

/**
 * Returns the result of calculating the function.
 * @memberof ApiWorksheetFunction
 * @typeofeditors ["CSE"]
 * @returns {number | string | boolean}
 */
ApiWorksheetFunction.prototype.TODAY = function () { return 0; };

/**
 * Returns the result of calculating the function.
 * @memberof ApiWorksheetFunction
 * @typeofeditors ["CSE"]
 * @param {number} arg1.
 * @param {number} [arg2].
 * @returns {number | string | boolean}
 */
ApiWorksheetFunction.prototype.WEEKDAY = function (arg1, arg2) { return 0; };

/**
 * Returns the result of calculating the function.
 * @memberof ApiWorksheetFunction
 * @typeofeditors ["CSE"]
 * @param {any} arg1.
 * @param {any} [arg2].
 * @returns {number | string | boolean}
 */
ApiWorksheetFunction.prototype.WEEKNUM = function (arg1, arg2) { return 0; };

/**
 * Returns the result of calculating the function.
 * @memberof ApiWorksheetFunction
 * @typeofeditors ["CSE"]
 * @param {any} arg1.
 * @param {any} arg2.
 * @param {any} [arg3].
 * @returns {number | string | boolean}
 */
ApiWorksheetFunction.prototype.WORKDAY = function (arg1, arg2, arg3) { return 0; };

/**
 * Returns the result of calculating the function.
 * @memberof ApiWorksheetFunction
 * @typeofeditors ["CSE"]
 * @param {any} arg1.
 * @param {any} arg2.
 * @param {number} [arg3].
 * @param {any} [arg4].
 * @returns {number | string | boolean}
 */
ApiWorksheetFunction.prototype.WORKDAY_INTL = function (arg1, arg2, arg3, arg4) { return 0; };

/**
 * Returns the result of calculating the function.
 * @memberof ApiWorksheetFunction
 * @typeofeditors ["CSE"]
 * @param {number} arg1.
 * @returns {number | string | boolean}
 */
ApiWorksheetFunction.prototype.YEAR = function (arg1) { return 0; };

/**
 * Returns the result of calculating the function.
 * @memberof ApiWorksheetFunction
 * @typeofeditors ["CSE"]
 * @param {any} arg1.
 * @param {any} arg2.
 * @param {any} [arg3].
 * @returns {number | string | boolean}
 */
ApiWorksheetFunction.prototype.YEARFRAC = function (arg1, arg2, arg3) { return 0; };

/**
 * Returns the result of calculating the function.
 * @memberof ApiWorksheetFunction
 * @typeofeditors ["CSE"]
 * @param {any} arg1.
 * @param {any} arg2.
 * @returns {number | string | boolean}
 */
ApiWorksheetFunction.prototype.BESSELI = function (arg1, arg2) { return 0; };

/**
 * Returns the result of calculating the function.
 * @memberof ApiWorksheetFunction
 * @typeofeditors ["CSE"]
 * @param {any} arg1.
 * @param {any} arg2.
 * @returns {number | string | boolean}
 */
ApiWorksheetFunction.prototype.BESSELJ = function (arg1, arg2) { return 0; };

/**
 * Returns the result of calculating the function.
 * @memberof ApiWorksheetFunction
 * @typeofeditors ["CSE"]
 * @param {any} arg1.
 * @param {any} arg2.
 * @returns {number | string | boolean}
 */
ApiWorksheetFunction.prototype.BESSELK = function (arg1, arg2) { return 0; };

/**
 * Returns the result of calculating the function.
 * @memberof ApiWorksheetFunction
 * @typeofeditors ["CSE"]
 * @param {any} arg1.
 * @param {any} arg2.
 * @returns {number | string | boolean}
 */
ApiWorksheetFunction.prototype.BESSELY = function (arg1, arg2) { return 0; };

/**
 * Returns the result of calculating the function.
 * @memberof ApiWorksheetFunction
 * @typeofeditors ["CSE"]
 * @param {any} arg1.
 * @returns {number | string | boolean}
 */
ApiWorksheetFunction.prototype.BIN2DEC = function (arg1) { return 0; };

/**
 * Returns the result of calculating the function.
 * @memberof ApiWorksheetFunction
 * @typeofeditors ["CSE"]
 * @param {any} arg1.
 * @param {any} [arg2].
 * @returns {number | string | boolean}
 */
ApiWorksheetFunction.prototype.BIN2HEX = function (arg1, arg2) { return 0; };

/**
 * Returns the result of calculating the function.
 * @memberof ApiWorksheetFunction
 * @typeofeditors ["CSE"]
 * @param {any} arg1.
 * @param {any} [arg2].
 * @returns {number | string | boolean}
 */
ApiWorksheetFunction.prototype.BIN2OCT = function (arg1, arg2) { return 0; };

/**
 * Returns the result of calculating the function.
 * @memberof ApiWorksheetFunction
 * @typeofeditors ["CSE"]
 * @param {number} arg1.
 * @param {number} arg2.
 * @returns {number | string | boolean}
 */
ApiWorksheetFunction.prototype.BITAND = function (arg1, arg2) { return 0; };

/**
 * Returns the result of calculating the function.
 * @memberof ApiWorksheetFunction
 * @typeofeditors ["CSE"]
 * @param {number} arg1.
 * @param {number} arg2.
 * @returns {number | string | boolean}
 */
ApiWorksheetFunction.prototype.BITLSHIFT = function (arg1, arg2) { return 0; };

/**
 * Returns the result of calculating the function.
 * @memberof ApiWorksheetFunction
 * @typeofeditors ["CSE"]
 * @param {number} arg1.
 * @param {number} arg2.
 * @returns {number | string | boolean}
 */
ApiWorksheetFunction.prototype.BITOR = function (arg1, arg2) { return 0; };

/**
 * Returns the result of calculating the function.
 * @memberof ApiWorksheetFunction
 * @typeofeditors ["CSE"]
 * @param {number} arg1.
 * @param {number} arg2.
 * @returns {number | string | boolean}
 */
ApiWorksheetFunction.prototype.BITRSHIFT = function (arg1, arg2) { return 0; };

/**
 * Returns the result of calculating the function.
 * @memberof ApiWorksheetFunction
 * @typeofeditors ["CSE"]
 * @param {number} arg1.
 * @param {number} arg2.
 * @returns {number | string | boolean}
 */
ApiWorksheetFunction.prototype.BITXOR = function (arg1, arg2) { return 0; };

/**
 * Returns the result of calculating the function.
 * @memberof ApiWorksheetFunction
 * @typeofeditors ["CSE"]
 * @param {any} arg1.
 * @param {any} arg2.
 * @param {any} [arg3].
 * @returns {number | string | boolean}
 */
ApiWorksheetFunction.prototype.COMPLEX = function (arg1, arg2, arg3) { return 0; };

/**
 * Returns the result of calculating the function.
 * @memberof ApiWorksheetFunction
 * @typeofeditors ["CSE"]
 * @param {any} arg1.
 * @param {any} arg2.
 * @param {any} arg3.
 * @returns {number | string | boolean}
 */
ApiWorksheetFunction.prototype.CONVERT = function (arg1, arg2, arg3) { return 0; };

/**
 * Returns the result of calculating the function.
 * @memberof ApiWorksheetFunction
 * @typeofeditors ["CSE"]
 * @param {any} arg1.
 * @param {any} [arg2].
 * @returns {number | string | boolean}
 */
ApiWorksheetFunction.prototype.DEC2BIN = function (arg1, arg2) { return 0; };

/**
 * Returns the result of calculating the function.
 * @memberof ApiWorksheetFunction
 * @typeofeditors ["CSE"]
 * @param {any} arg1.
 * @param {any} [arg2].
 * @returns {number | string | boolean}
 */
ApiWorksheetFunction.prototype.DEC2HEX = function (arg1, arg2) { return 0; };

/**
 * Returns the result of calculating the function.
 * @memberof ApiWorksheetFunction
 * @typeofeditors ["CSE"]
 * @param {any} arg1.
 * @param {any} [arg2].
 * @returns {number | string | boolean}
 */
ApiWorksheetFunction.prototype.DEC2OCT = function (arg1, arg2) { return 0; };

/**
 * Returns the result of calculating the function.
 * @memberof ApiWorksheetFunction
 * @typeofeditors ["CSE"]
 * @param {any} arg1.
 * @param {any} [arg2].
 * @returns {number | string | boolean}
 */
ApiWorksheetFunction.prototype.DELTA = function (arg1, arg2) { return 0; };

/**
 * Returns the result of calculating the function.
 * @memberof ApiWorksheetFunction
 * @typeofeditors ["CSE"]
 * @param {any} arg1.
 * @param {any} [arg2].
 * @returns {number | string | boolean}
 */
ApiWorksheetFunction.prototype.ERF = function (arg1, arg2) { return 0; };

/**
 * Returns the result of calculating the function.
 * @memberof ApiWorksheetFunction
 * @typeofeditors ["CSE"]
 * @param {any} arg1.
 * @returns {number | string | boolean}
 */
ApiWorksheetFunction.prototype.ERF_PRECISE = function (arg1) { return 0; };

/**
 * Returns the result of calculating the function.
 * @memberof ApiWorksheetFunction
 * @typeofeditors ["CSE"]
 * @param {any} arg1.
 * @returns {number | string | boolean}
 */
ApiWorksheetFunction.prototype.ERFC = function (arg1) { return 0; };

/**
 * Returns the result of calculating the function.
 * @memberof ApiWorksheetFunction
 * @typeofeditors ["CSE"]
 * @param {any} arg1.
 * @returns {number | string | boolean}
 */
ApiWorksheetFunction.prototype.ERFC_PRECISE = function (arg1) { return 0; };

/**
 * Returns the result of calculating the function.
 * @memberof ApiWorksheetFunction
 * @typeofeditors ["CSE"]
 * @param {any} arg1.
 * @param {any} [arg2].
 * @returns {number | string | boolean}
 */
ApiWorksheetFunction.prototype.GESTEP = function (arg1, arg2) { return 0; };

/**
 * Returns the result of calculating the function.
 * @memberof ApiWorksheetFunction
 * @typeofeditors ["CSE"]
 * @param {any} arg1.
 * @param {any} [arg2].
 * @returns {number | string | boolean}
 */
ApiWorksheetFunction.prototype.HEX2BIN = function (arg1, arg2) { return 0; };

/**
 * Returns the result of calculating the function.
 * @memberof ApiWorksheetFunction
 * @typeofeditors ["CSE"]
 * @param {any} arg1.
 * @returns {number | string | boolean}
 */
ApiWorksheetFunction.prototype.HEX2DEC = function (arg1) { return 0; };

/**
 * Returns the result of calculating the function.
 * @memberof ApiWorksheetFunction
 * @typeofeditors ["CSE"]
 * @param {any} arg1.
 * @param {any} [arg2].
 * @returns {number | string | boolean}
 */
ApiWorksheetFunction.prototype.HEX2OCT = function (arg1, arg2) { return 0; };

/**
 * Returns the result of calculating the function.
 * @memberof ApiWorksheetFunction
 * @typeofeditors ["CSE"]
 * @param {any} arg1.
 * @returns {number | string | boolean}
 */
ApiWorksheetFunction.prototype.IMABS = function (arg1) { return 0; };

/**
 * Returns the result of calculating the function.
 * @memberof ApiWorksheetFunction
 * @typeofeditors ["CSE"]
 * @param {any} arg1.
 * @returns {number | string | boolean}
 */
ApiWorksheetFunction.prototype.IMAGINARY = function (arg1) { return 0; };

/**
 * Returns the result of calculating the function.
 * @memberof ApiWorksheetFunction
 * @typeofeditors ["CSE"]
 * @param {any} arg1.
 * @returns {number | string | boolean}
 */
ApiWorksheetFunction.prototype.IMARGUMENT = function (arg1) { return 0; };

/**
 * Returns the result of calculating the function.
 * @memberof ApiWorksheetFunction
 * @typeofeditors ["CSE"]
 * @param {any} arg1.
 * @returns {number | string | boolean}
 */
ApiWorksheetFunction.prototype.IMCONJUGATE = function (arg1) { return 0; };

/**
 * Returns the result of calculating the function.
 * @memberof ApiWorksheetFunction
 * @typeofeditors ["CSE"]
 * @param {any} arg1.
 * @returns {number | string | boolean}
 */
ApiWorksheetFunction.prototype.IMCOS = function (arg1) { return 0; };

/**
 * Returns the result of calculating the function.
 * @memberof ApiWorksheetFunction
 * @typeofeditors ["CSE"]
 * @param {any} arg1.
 * @returns {number | string | boolean}
 */
ApiWorksheetFunction.prototype.IMCOSH = function (arg1) { return 0; };

/**
 * Returns the result of calculating the function.
 * @memberof ApiWorksheetFunction
 * @typeofeditors ["CSE"]
 * @param {any} arg1.
 * @returns {number | string | boolean}
 */
ApiWorksheetFunction.prototype.IMCOT = function (arg1) { return 0; };

/**
 * Returns the result of calculating the function.
 * @memberof ApiWorksheetFunction
 * @typeofeditors ["CSE"]
 * @param {any} arg1.
 * @returns {number | string | boolean}
 */
ApiWorksheetFunction.prototype.IMCSC = function (arg1) { return 0; };

/**
 * Returns the result of calculating the function.
 * @memberof ApiWorksheetFunction
 * @typeofeditors ["CSE"]
 * @param {any} arg1.
 * @returns {number | string | boolean}
 */
ApiWorksheetFunction.prototype.IMCSCH = function (arg1) { return 0; };

/**
 * Returns the result of calculating the function.
 * @memberof ApiWorksheetFunction
 * @typeofeditors ["CSE"]
 * @param {any} arg1.
 * @param {any} arg2.
 * @returns {number | string | boolean}
 */
ApiWorksheetFunction.prototype.IMDIV = function (arg1, arg2) { return 0; };

/**
 * Returns the result of calculating the function.
 * @memberof ApiWorksheetFunction
 * @typeofeditors ["CSE"]
 * @param {any} arg1.
 * @returns {number | string | boolean}
 */
ApiWorksheetFunction.prototype.IMEXP = function (arg1) { return 0; };

/**
 * Returns the result of calculating the function.
 * @memberof ApiWorksheetFunction
 * @typeofeditors ["CSE"]
 * @param {any} arg1.
 * @returns {number | string | boolean}
 */
ApiWorksheetFunction.prototype.IMLN = function (arg1) { return 0; };

/**
 * Returns the result of calculating the function.
 * @memberof ApiWorksheetFunction
 * @typeofeditors ["CSE"]
 * @param {any} arg1.
 * @returns {number | string | boolean}
 */
ApiWorksheetFunction.prototype.IMLOG10 = function (arg1) { return 0; };

/**
 * Returns the result of calculating the function.
 * @memberof ApiWorksheetFunction
 * @typeofeditors ["CSE"]
 * @param {any} arg1.
 * @returns {number | string | boolean}
 */
ApiWorksheetFunction.prototype.IMLOG2 = function (arg1) { return 0; };

/**
 * Returns the result of calculating the function.
 * @memberof ApiWorksheetFunction
 * @typeofeditors ["CSE"]
 * @param {any} arg1.
 * @param {any} arg2.
 * @returns {number | string | boolean}
 */
ApiWorksheetFunction.prototype.IMPOWER = function (arg1, arg2) { return 0; };

/**
 * Returns the result of calculating the function.
 * @memberof ApiWorksheetFunction
 * @typeofeditors ["CSE"]
 * @returns {number | string | boolean}
 */
ApiWorksheetFunction.prototype.IMPRODUCT = function () { return 0; };

/**
 * Returns the result of calculating the function.
 * @memberof ApiWorksheetFunction
 * @typeofeditors ["CSE"]
 * @param {any} arg1.
 * @returns {number | string | boolean}
 */
ApiWorksheetFunction.prototype.IMREAL = function (arg1) { return 0; };

/**
 * Returns the result of calculating the function.
 * @memberof ApiWorksheetFunction
 * @typeofeditors ["CSE"]
 * @param {any} arg1.
 * @returns {number | string | boolean}
 */
ApiWorksheetFunction.prototype.IMSEC = function (arg1) { return 0; };

/**
 * Returns the result of calculating the function.
 * @memberof ApiWorksheetFunction
 * @typeofeditors ["CSE"]
 * @param {any} arg1.
 * @returns {number | string | boolean}
 */
ApiWorksheetFunction.prototype.IMSECH = function (arg1) { return 0; };

/**
 * Returns the result of calculating the function.
 * @memberof ApiWorksheetFunction
 * @typeofeditors ["CSE"]
 * @param {any} arg1.
 * @returns {number | string | boolean}
 */
ApiWorksheetFunction.prototype.IMSIN = function (arg1) { return 0; };

/**
 * Returns the result of calculating the function.
 * @memberof ApiWorksheetFunction
 * @typeofeditors ["CSE"]
 * @param {any} arg1.
 * @returns {number | string | boolean}
 */
ApiWorksheetFunction.prototype.IMSINH = function (arg1) { return 0; };

/**
 * Returns the result of calculating the function.
 * @memberof ApiWorksheetFunction
 * @typeofeditors ["CSE"]
 * @param {any} arg1.
 * @returns {number | string | boolean}
 */
ApiWorksheetFunction.prototype.IMSQRT = function (arg1) { return 0; };

/**
 * Returns the result of calculating the function.
 * @memberof ApiWorksheetFunction
 * @typeofeditors ["CSE"]
 * @param {any} arg1.
 * @param {any} arg2.
 * @returns {number | string | boolean}
 */
ApiWorksheetFunction.prototype.IMSUB = function (arg1, arg2) { return 0; };

/**
 * Returns the result of calculating the function.
 * @memberof ApiWorksheetFunction
 * @typeofeditors ["CSE"]
 * @returns {number | string | boolean}
 */
ApiWorksheetFunction.prototype.IMSUM = function () { return 0; };

/**
 * Returns the result of calculating the function.
 * @memberof ApiWorksheetFunction
 * @typeofeditors ["CSE"]
 * @param {any} arg1.
 * @returns {number | string | boolean}
 */
ApiWorksheetFunction.prototype.IMTAN = function (arg1) { return 0; };

/**
 * Returns the result of calculating the function.
 * @memberof ApiWorksheetFunction
 * @typeofeditors ["CSE"]
 * @param {any} arg1.
 * @param {any} [arg2].
 * @returns {number | string | boolean}
 */
ApiWorksheetFunction.prototype.OCT2BIN = function (arg1, arg2) { return 0; };

/**
 * Returns the result of calculating the function.
 * @memberof ApiWorksheetFunction
 * @typeofeditors ["CSE"]
 * @param {any} arg1.
 * @returns {number | string | boolean}
 */
ApiWorksheetFunction.prototype.OCT2DEC = function (arg1) { return 0; };

/**
 * Returns the result of calculating the function.
 * @memberof ApiWorksheetFunction
 * @typeofeditors ["CSE"]
 * @param {any} arg1.
 * @param {any} [arg2].
 * @returns {number | string | boolean}
 */
ApiWorksheetFunction.prototype.OCT2HEX = function (arg1, arg2) { return 0; };

/**
 * Returns the result of calculating the function.
 * @memberof ApiWorksheetFunction
 * @typeofeditors ["CSE"]
 * @param {ApiRange} arg1.
 * @param {number} arg2.
 * @param {string} arg3.
 * @returns {number | string | boolean}
 */
ApiWorksheetFunction.prototype.DAVERAGE = function (arg1, arg2, arg3) { return 0; };

/**
 * Returns the result of calculating the function.
 * @memberof ApiWorksheetFunction
 * @typeofeditors ["CSE"]
 * @param {ApiRange} arg1.
 * @param {number} arg2.
 * @param {string} arg3.
 * @returns {number | string | boolean}
 */
ApiWorksheetFunction.prototype.DCOUNT = function (arg1, arg2, arg3) { return 0; };

/**
 * Returns the result of calculating the function.
 * @memberof ApiWorksheetFunction
 * @typeofeditors ["CSE"]
 * @param {ApiRange} arg1.
 * @param {number} arg2.
 * @param {string} arg3.
 * @returns {number | string | boolean}
 */
ApiWorksheetFunction.prototype.DCOUNTA = function (arg1, arg2, arg3) { return 0; };

/**
 * Returns the result of calculating the function.
 * @memberof ApiWorksheetFunction
 * @typeofeditors ["CSE"]
 * @param {ApiRange} arg1.
 * @param {number} arg2.
 * @param {string} arg3.
 * @returns {number | string | boolean}
 */
ApiWorksheetFunction.prototype.DGET = function (arg1, arg2, arg3) { return 0; };

/**
 * Returns the result of calculating the function.
 * @memberof ApiWorksheetFunction
 * @typeofeditors ["CSE"]
 * @param {ApiRange} arg1.
 * @param {number} arg2.
 * @param {string} arg3.
 * @returns {number | string | boolean}
 */
ApiWorksheetFunction.prototype.DMAX = function (arg1, arg2, arg3) { return 0; };

/**
 * Returns the result of calculating the function.
 * @memberof ApiWorksheetFunction
 * @typeofeditors ["CSE"]
 * @param {ApiRange} arg1.
 * @param {number} arg2.
 * @param {string} arg3.
 * @returns {number | string | boolean}
 */
ApiWorksheetFunction.prototype.DMIN = function (arg1, arg2, arg3) { return 0; };

/**
 * Returns the result of calculating the function.
 * @memberof ApiWorksheetFunction
 * @typeofeditors ["CSE"]
 * @param {ApiRange} arg1.
 * @param {number} arg2.
 * @param {string} arg3.
 * @returns {number | string | boolean}
 */
ApiWorksheetFunction.prototype.DPRODUCT = function (arg1, arg2, arg3) { return 0; };

/**
 * Returns the result of calculating the function.
 * @memberof ApiWorksheetFunction
 * @typeofeditors ["CSE"]
 * @param {ApiRange} arg1.
 * @param {number} arg2.
 * @param {string} arg3.
 * @returns {number | string | boolean}
 */
ApiWorksheetFunction.prototype.DSTDEV = function (arg1, arg2, arg3) { return 0; };

/**
 * Returns the result of calculating the function.
 * @memberof ApiWorksheetFunction
 * @typeofeditors ["CSE"]
 * @param {ApiRange} arg1.
 * @param {number} arg2.
 * @param {string} arg3.
 * @returns {number | string | boolean}
 */
ApiWorksheetFunction.prototype.DSTDEVP = function (arg1, arg2, arg3) { return 0; };

/**
 * Returns the result of calculating the function.
 * @memberof ApiWorksheetFunction
 * @typeofeditors ["CSE"]
 * @param {ApiRange} arg1.
 * @param {number} arg2.
 * @param {string} arg3.
 * @returns {number | string | boolean}
 */
ApiWorksheetFunction.prototype.DSUM = function (arg1, arg2, arg3) { return 0; };

/**
 * Returns the result of calculating the function.
 * @memberof ApiWorksheetFunction
 * @typeofeditors ["CSE"]
 * @param {ApiRange} arg1.
 * @param {number} arg2.
 * @param {string} arg3.
 * @returns {number | string | boolean}
 */
ApiWorksheetFunction.prototype.DVAR = function (arg1, arg2, arg3) { return 0; };

/**
 * Returns the result of calculating the function.
 * @memberof ApiWorksheetFunction
 * @typeofeditors ["CSE"]
 * @param {ApiRange} arg1.
 * @param {number} arg2.
 * @param {string} arg3.
 * @returns {number | string | boolean}
 */
ApiWorksheetFunction.prototype.DVARP = function (arg1, arg2, arg3) { return 0; };

/**
 * Returns the result of calculating the function.
 * @memberof ApiWorksheetFunction
 * @typeofeditors ["CSE"]
 * @param {any} arg1.
 * @param {any} arg2.
 * @param {any} arg3.
 * @param {any} arg4.
 * @param {any} arg5.
 * @param {any} arg6.
 * @param {any} [arg7].
 * @param {any} [arg8].
 * @returns {number | string | boolean}
 */
ApiWorksheetFunction.prototype.ACCRINT = function (arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8) { return 0; };

/**
 * Returns the result of calculating the function.
 * @memberof ApiWorksheetFunction
 * @typeofeditors ["CSE"]
 * @param {any} arg1.
 * @param {any} arg2.
 * @param {any} arg3.
 * @param {any} arg4.
 * @param {any} [arg5].
 * @returns {number | string | boolean}
 */
ApiWorksheetFunction.prototype.ACCRINTM = function (arg1, arg2, arg3, arg4, arg5) { return 0; };

/**
 * Returns the result of calculating the function.
 * @memberof ApiWorksheetFunction
 * @typeofeditors ["CSE"]
 * @param {any} arg1.
 * @param {any} arg2.
 * @param {any} arg3.
 * @param {any} arg4.
 * @param {any} arg5.
 * @param {any} arg6.
 * @param {any} [arg7].
 * @returns {number | string | boolean}
 */
ApiWorksheetFunction.prototype.AMORDEGRC = function (arg1, arg2, arg3, arg4, arg5, arg6, arg7) { return 0; };

/**
 * Returns the result of calculating the function.
 * @memberof ApiWorksheetFunction
 * @typeofeditors ["CSE"]
 * @param {any} arg1.
 * @param {any} arg2.
 * @param {any} arg3.
 * @param {any} arg4.
 * @param {any} arg5.
 * @param {any} arg6.
 * @param {any} [arg7].
 * @returns {number | string | boolean}
 */
ApiWorksheetFunction.prototype.AMORLINC = function (arg1, arg2, arg3, arg4, arg5, arg6, arg7) { return 0; };

/**
 * Returns the result of calculating the function.
 * @memberof ApiWorksheetFunction
 * @typeofeditors ["CSE"]
 * @param {any} arg1.
 * @param {any} arg2.
 * @param {any} arg3.
 * @param {any} [arg4].
 * @returns {number | string | boolean}
 */
ApiWorksheetFunction.prototype.COUPDAYBS = function (arg1, arg2, arg3, arg4) { return 0; };

/**
 * Returns the result of calculating the function.
 * @memberof ApiWorksheetFunction
 * @typeofeditors ["CSE"]
 * @param {any} arg1.
 * @param {any} arg2.
 * @param {any} arg3.
 * @param {any} [arg4].
 * @returns {number | string | boolean}
 */
ApiWorksheetFunction.prototype.COUPDAYS = function (arg1, arg2, arg3, arg4) { return 0; };

/**
 * Returns the result of calculating the function.
 * @memberof ApiWorksheetFunction
 * @typeofeditors ["CSE"]
 * @param {any} arg1.
 * @param {any} arg2.
 * @param {any} arg3.
 * @param {any} [arg4].
 * @returns {number | string | boolean}
 */
ApiWorksheetFunction.prototype.COUPDAYSNC = function (arg1, arg2, arg3, arg4) { return 0; };

/**
 * Returns the result of calculating the function.
 * @memberof ApiWorksheetFunction
 * @typeofeditors ["CSE"]
 * @param {any} arg1.
 * @param {any} arg2.
 * @param {any} arg3.
 * @param {any} [arg4].
 * @returns {number | string | boolean}
 */
ApiWorksheetFunction.prototype.COUPNCD = function (arg1, arg2, arg3, arg4) { return 0; };

/**
 * Returns the result of calculating the function.
 * @memberof ApiWorksheetFunction
 * @typeofeditors ["CSE"]
 * @param {any} arg1.
 * @param {any} arg2.
 * @param {any} arg3.
 * @param {any} [arg4].
 * @returns {number | string | boolean}
 */
ApiWorksheetFunction.prototype.COUPNUM = function (arg1, arg2, arg3, arg4) { return 0; };

/**
 * Returns the result of calculating the function.
 * @memberof ApiWorksheetFunction
 * @typeofeditors ["CSE"]
 * @param {any} arg1.
 * @param {any} arg2.
 * @param {any} arg3.
 * @param {any} [arg4].
 * @returns {number | string | boolean}
 */
ApiWorksheetFunction.prototype.COUPPCD = function (arg1, arg2, arg3, arg4) { return 0; };

/**
 * Returns the result of calculating the function.
 * @memberof ApiWorksheetFunction
 * @typeofeditors ["CSE"]
 * @param {any} arg1.
 * @param {any} arg2.
 * @param {any} arg3.
 * @param {any} arg4.
 * @param {any} arg5.
 * @param {any} arg6.
 * @returns {number | string | boolean}
 */
ApiWorksheetFunction.prototype.CUMIPMT = function (arg1, arg2, arg3, arg4, arg5, arg6) { return 0; };

/**
 * Returns the result of calculating the function.
 * @memberof ApiWorksheetFunction
 * @typeofeditors ["CSE"]
 * @param {any} arg1.
 * @param {any} arg2.
 * @param {any} arg3.
 * @param {any} arg4.
 * @param {any} arg5.
 * @param {any} arg6.
 * @returns {number | string | boolean}
 */
ApiWorksheetFunction.prototype.CUMPRINC = function (arg1, arg2, arg3, arg4, arg5, arg6) { return 0; };

/**
 * Returns the result of calculating the function.
 * @memberof ApiWorksheetFunction
 * @typeofeditors ["CSE"]
 * @param {number} arg1.
 * @param {number} arg2.
 * @param {number} arg3.
 * @param {number} arg4.
 * @param {number} [arg5].
 * @returns {number | string | boolean}
 */
ApiWorksheetFunction.prototype.DB = function (arg1, arg2, arg3, arg4, arg5) { return 0; };

/**
 * Returns the result of calculating the function.
 * @memberof ApiWorksheetFunction
 * @typeofeditors ["CSE"]
 * @param {number} arg1.
 * @param {number} arg2.
 * @param {number} arg3.
 * @param {number} arg4.
 * @param {number} [arg5].
 * @returns {number | string | boolean}
 */
ApiWorksheetFunction.prototype.DDB = function (arg1, arg2, arg3, arg4, arg5) { return 0; };

/**
 * Returns the result of calculating the function.
 * @memberof ApiWorksheetFunction
 * @typeofeditors ["CSE"]
 * @param {any} arg1.
 * @param {any} arg2.
 * @param {any} arg3.
 * @param {any} arg4.
 * @param {any} [arg5].
 * @returns {number | string | boolean}
 */
ApiWorksheetFunction.prototype.DISC = function (arg1, arg2, arg3, arg4, arg5) { return 0; };

/**
 * Returns the result of calculating the function.
 * @memberof ApiWorksheetFunction
 * @typeofeditors ["CSE"]
 * @param {any} arg1.
 * @param {any} arg2.
 * @returns {number | string | boolean}
 */
ApiWorksheetFunction.prototype.DOLLARDE = function (arg1, arg2) { return 0; };

/**
 * Returns the result of calculating the function.
 * @memberof ApiWorksheetFunction
 * @typeofeditors ["CSE"]
 * @param {any} arg1.
 * @param {any} arg2.
 * @returns {number | string | boolean}
 */
ApiWorksheetFunction.prototype.DOLLARFR = function (arg1, arg2) { return 0; };

/**
 * Returns the result of calculating the function.
 * @memberof ApiWorksheetFunction
 * @typeofeditors ["CSE"]
 * @param {any} arg1.
 * @param {any} arg2.
 * @param {any} arg3.
 * @param {any} arg4.
 * @param {any} arg5.
 * @param {any} [arg6].
 * @returns {number | string | boolean}
 */
ApiWorksheetFunction.prototype.DURATION = function (arg1, arg2, arg3, arg4, arg5, arg6) { return 0; };

/**
 * Returns the result of calculating the function.
 * @memberof ApiWorksheetFunction
 * @typeofeditors ["CSE"]
 * @param {any} arg1.
 * @param {any} arg2.
 * @returns {number | string | boolean}
 */
ApiWorksheetFunction.prototype.EFFECT = function (arg1, arg2) { return 0; };

/**
 * Returns the result of calculating the function.
 * @memberof ApiWorksheetFunction
 * @typeofeditors ["CSE"]
 * @param {number} arg1.
 * @param {number} arg2.
 * @param {number} arg3.
 * @param {number} [arg4].
 * @param {number} [arg5].
 * @returns {number | string | boolean}
 */
ApiWorksheetFunction.prototype.FV = function (arg1, arg2, arg3, arg4, arg5) { return 0; };

/**
 * Returns the result of calculating the function.
 * @memberof ApiWorksheetFunction
 * @typeofeditors ["CSE"]
 * @param {any} arg1.
 * @param {any} arg2.
 * @returns {number | string | boolean}
 */
ApiWorksheetFunction.prototype.FVSCHEDULE = function (arg1, arg2) { return 0; };

/**
 * Returns the result of calculating the function.
 * @memberof ApiWorksheetFunction
 * @typeofeditors ["CSE"]
 * @param {any} arg1.
 * @param {any} arg2.
 * @param {any} arg3.
 * @param {any} arg4.
 * @param {any} [arg5].
 * @returns {number | string | boolean}
 */
ApiWorksheetFunction.prototype.INTRATE = function (arg1, arg2, arg3, arg4, arg5) { return 0; };

/**
 * Returns the result of calculating the function.
 * @memberof ApiWorksheetFunction
 * @typeofeditors ["CSE"]
 * @param {number} arg1.
 * @param {number} arg2.
 * @param {number} arg3.
 * @param {number} arg4.
 * @param {number} [arg5].
 * @param {number} [arg6].
 * @returns {number | string | boolean}
 */
ApiWorksheetFunction.prototype.IPMT = function (arg1, arg2, arg3, arg4, arg5, arg6) { return 0; };

/**
 * Returns the result of calculating the function.
 * @memberof ApiWorksheetFunction
 * @typeofeditors ["CSE"]
 * @param {ApiRange} arg1.
 * @param {number} [arg2].
 * @returns {number | string | boolean}
 */
ApiWorksheetFunction.prototype.IRR = function (arg1, arg2) { return 0; };

/**
 * Returns the result of calculating the function.
 * @memberof ApiWorksheetFunction
 * @typeofeditors ["CSE"]
 * @param {number} arg1.
 * @param {number} arg2.
 * @param {number} arg3.
 * @param {number} arg4.
 * @returns {number | string | boolean}
 */
ApiWorksheetFunction.prototype.ISPMT = function (arg1, arg2, arg3, arg4) { return 0; };

/**
 * Returns the result of calculating the function.
 * @memberof ApiWorksheetFunction
 * @typeofeditors ["CSE"]
 * @param {any} arg1.
 * @param {any} arg2.
 * @param {any} arg3.
 * @param {any} arg4.
 * @param {any} arg5.
 * @param {any} [arg6].
 * @returns {number | string | boolean}
 */
ApiWorksheetFunction.prototype.MDURATION = function (arg1, arg2, arg3, arg4, arg5, arg6) { return 0; };

/**
 * Returns the result of calculating the function.
 * @memberof ApiWorksheetFunction
 * @typeofeditors ["CSE"]
 * @param {ApiRange} arg1.
 * @param {number} arg2.
 * @param {number} arg3.
 * @returns {number | string | boolean}
 */
ApiWorksheetFunction.prototype.MIRR = function (arg1, arg2, arg3) { return 0; };

/**
 * Returns the result of calculating the function.
 * @memberof ApiWorksheetFunction
 * @typeofeditors ["CSE"]
 * @param {any} arg1.
 * @param {any} arg2.
 * @returns {number | string | boolean}
 */
ApiWorksheetFunction.prototype.NOMINAL = function (arg1, arg2) { return 0; };

/**
 * Returns the result of calculating the function.
 * @memberof ApiWorksheetFunction
 * @typeofeditors ["CSE"]
 * @param {number} arg1.
 * @param {number} arg2.
 * @param {number} arg3.
 * @param {number} [arg4].
 * @param {number} [arg5].
 * @returns {number | string | boolean}
 */
ApiWorksheetFunction.prototype.NPER = function (arg1, arg2, arg3, arg4, arg5) { return 0; };

/**
 * Returns the result of calculating the function.
 * @memberof ApiWorksheetFunction
 * @typeofeditors ["CSE"]
 * @returns {number | string | boolean}
 */
ApiWorksheetFunction.prototype.NPV = function () { return 0; };

/**
 * Returns the result of calculating the function.
 * @memberof ApiWorksheetFunction
 * @typeofeditors ["CSE"]
 * @param {any} arg1.
 * @param {any} arg2.
 * @param {any} arg3.
 * @param {any} arg4.
 * @param {any} arg5.
 * @param {any} arg6.
 * @param {any} arg7.
 * @param {any} arg8.
 * @param {any} [arg9].
 * @returns {number | string | boolean}
 */
ApiWorksheetFunction.prototype.ODDFPRICE = function (arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9) { return 0; };

/**
 * Returns the result of calculating the function.
 * @memberof ApiWorksheetFunction
 * @typeofeditors ["CSE"]
 * @param {any} arg1.
 * @param {any} arg2.
 * @param {any} arg3.
 * @param {any} arg4.
 * @param {any} arg5.
 * @param {any} arg6.
 * @param {any} arg7.
 * @param {any} arg8.
 * @param {any} [arg9].
 * @returns {number | string | boolean}
 */
ApiWorksheetFunction.prototype.ODDFYIELD = function (arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9) { return 0; };

/**
 * Returns the result of calculating the function.
 * @memberof ApiWorksheetFunction
 * @typeofeditors ["CSE"]
 * @param {any} arg1.
 * @param {any} arg2.
 * @param {any} arg3.
 * @param {any} arg4.
 * @param {any} arg5.
 * @param {any} arg6.
 * @param {any} arg7.
 * @param {any} [arg8].
 * @returns {number | string | boolean}
 */
ApiWorksheetFunction.prototype.ODDLPRICE = function (arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8) { return 0; };

/**
 * Returns the result of calculating the function.
 * @memberof ApiWorksheetFunction
 * @typeofeditors ["CSE"]
 * @param {any} arg1.
 * @param {any} arg2.
 * @param {any} arg3.
 * @param {any} arg4.
 * @param {any} arg5.
 * @param {any} arg6.
 * @param {any} arg7.
 * @param {any} [arg8].
 * @returns {number | string | boolean}
 */
ApiWorksheetFunction.prototype.ODDLYIELD = function (arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8) { return 0; };

/**
 * Returns the result of calculating the function.
 * @memberof ApiWorksheetFunction
 * @typeofeditors ["CSE"]
 * @param {number} arg1.
 * @param {number} arg2.
 * @param {number} arg3.
 * @returns {number | string | boolean}
 */
ApiWorksheetFunction.prototype.PDURATION = function (arg1, arg2, arg3) { return 0; };

/**
 * Returns the result of calculating the function.
 * @memberof ApiWorksheetFunction
 * @typeofeditors ["CSE"]
 * @param {number} arg1.
 * @param {number} arg2.
 * @param {number} arg3.
 * @param {number} [arg4].
 * @param {number} [arg5].
 * @returns {number | string | boolean}
 */
ApiWorksheetFunction.prototype.PMT = function (arg1, arg2, arg3, arg4, arg5) { return 0; };

/**
 * Returns the result of calculating the function.
 * @memberof ApiWorksheetFunction
 * @typeofeditors ["CSE"]
 * @param {number} arg1.
 * @param {number} arg2.
 * @param {number} arg3.
 * @param {number} arg4.
 * @param {number} [arg5].
 * @param {number} [arg6].
 * @returns {number | string | boolean}
 */
ApiWorksheetFunction.prototype.PPMT = function (arg1, arg2, arg3, arg4, arg5, arg6) { return 0; };

/**
 * Returns the result of calculating the function.
 * @memberof ApiWorksheetFunction
 * @typeofeditors ["CSE"]
 * @param {any} arg1.
 * @param {any} arg2.
 * @param {any} arg3.
 * @param {any} arg4.
 * @param {any} arg5.
 * @param {any} arg6.
 * @param {any} [arg7].
 * @returns {number | string | boolean}
 */
ApiWorksheetFunction.prototype.PRICE = function (arg1, arg2, arg3, arg4, arg5, arg6, arg7) { return 0; };

/**
 * Returns the result of calculating the function.
 * @memberof ApiWorksheetFunction
 * @typeofeditors ["CSE"]
 * @param {any} arg1.
 * @param {any} arg2.
 * @param {any} arg3.
 * @param {any} arg4.
 * @param {any} [arg5].
 * @returns {number | string | boolean}
 */
ApiWorksheetFunction.prototype.PRICEDISC = function (arg1, arg2, arg3, arg4, arg5) { return 0; };

/**
 * Returns the result of calculating the function.
 * @memberof ApiWorksheetFunction
 * @typeofeditors ["CSE"]
 * @param {any} arg1.
 * @param {any} arg2.
 * @param {any} arg3.
 * @param {any} arg4.
 * @param {any} arg5.
 * @param {any} [arg6].
 * @returns {number | string | boolean}
 */
ApiWorksheetFunction.prototype.PRICEMAT = function (arg1, arg2, arg3, arg4, arg5, arg6) { return 0; };

/**
 * Returns the result of calculating the function.
 * @memberof ApiWorksheetFunction
 * @typeofeditors ["CSE"]
 * @param {number} arg1.
 * @param {number} arg2.
 * @param {number} arg3.
 * @param {number} [arg4].
 * @param {number} [arg5].
 * @returns {number | string | boolean}
 */
ApiWorksheetFunction.prototype.PV = function (arg1, arg2, arg3, arg4, arg5) { return 0; };

/**
 * Returns the result of calculating the function.
 * @memberof ApiWorksheetFunction
 * @typeofeditors ["CSE"]
 * @param {number} arg1.
 * @param {number} arg2.
 * @param {number} arg3.
 * @param {number} [arg4].
 * @param {number} [arg5].
 * @param {number} [arg6].
 * @returns {number | string | boolean}
 */
ApiWorksheetFunction.prototype.RATE = function (arg1, arg2, arg3, arg4, arg5, arg6) { return 0; };

/**
 * Returns the result of calculating the function.
 * @memberof ApiWorksheetFunction
 * @typeofeditors ["CSE"]
 * @param {any} arg1.
 * @param {any} arg2.
 * @param {any} arg3.
 * @param {any} arg4.
 * @param {any} [arg5].
 * @returns {number | string | boolean}
 */
ApiWorksheetFunction.prototype.RECEIVED = function (arg1, arg2, arg3, arg4, arg5) { return 0; };

/**
 * Returns the result of calculating the function.
 * @memberof ApiWorksheetFunction
 * @typeofeditors ["CSE"]
 * @param {number} arg1.
 * @param {number} arg2.
 * @param {number} arg3.
 * @returns {number | string | boolean}
 */
ApiWorksheetFunction.prototype.RRI = function (arg1, arg2, arg3) { return 0; };

/**
 * Returns the result of calculating the function.
 * @memberof ApiWorksheetFunction
 * @typeofeditors ["CSE"]
 * @param {number} arg1.
 * @param {number} arg2.
 * @param {number} arg3.
 * @returns {number | string | boolean}
 */
ApiWorksheetFunction.prototype.SLN = function (arg1, arg2, arg3) { return 0; };

/**
 * Returns the result of calculating the function.
 * @memberof ApiWorksheetFunction
 * @typeofeditors ["CSE"]
 * @param {number} arg1.
 * @param {number} arg2.
 * @param {number} arg3.
 * @param {number} arg4.
 * @returns {number | string | boolean}
 */
ApiWorksheetFunction.prototype.SYD = function (arg1, arg2, arg3, arg4) { return 0; };

/**
 * Returns the result of calculating the function.
 * @memberof ApiWorksheetFunction
 * @typeofeditors ["CSE"]
 * @param {any} arg1.
 * @param {any} arg2.
 * @param {any} arg3.
 * @returns {number | string | boolean}
 */
ApiWorksheetFunction.prototype.TBILLEQ = function (arg1, arg2, arg3) { return 0; };

/**
 * Returns the result of calculating the function.
 * @memberof ApiWorksheetFunction
 * @typeofeditors ["CSE"]
 * @param {any} arg1.
 * @param {any} arg2.
 * @param {any} arg3.
 * @returns {number | string | boolean}
 */
ApiWorksheetFunction.prototype.TBILLPRICE = function (arg1, arg2, arg3) { return 0; };

/**
 * Returns the result of calculating the function.
 * @memberof ApiWorksheetFunction
 * @typeofeditors ["CSE"]
 * @param {any} arg1.
 * @param {any} arg2.
 * @param {any} arg3.
 * @returns {number | string | boolean}
 */
ApiWorksheetFunction.prototype.TBILLYIELD = function (arg1, arg2, arg3) { return 0; };

/**
 * Returns the result of calculating the function.
 * @memberof ApiWorksheetFunction
 * @typeofeditors ["CSE"]
 * @param {number} arg1.
 * @param {number} arg2.
 * @param {number} arg3.
 * @param {number} arg4.
 * @param {number} arg5.
 * @param {number} [arg6].
 * @param {boolean} [arg7].
 * @returns {number | string | boolean}
 */
ApiWorksheetFunction.prototype.VDB = function (arg1, arg2, arg3, arg4, arg5, arg6, arg7) { return 0; };

/**
 * Returns the result of calculating the function.
 * @memberof ApiWorksheetFunction
 * @typeofeditors ["CSE"]
 * @param {any} arg1.
 * @param {any} arg2.
 * @param {any} [arg3].
 * @returns {number | string | boolean}
 */
ApiWorksheetFunction.prototype.XIRR = function (arg1, arg2, arg3) { return 0; };

/**
 * Returns the result of calculating the function.
 * @memberof ApiWorksheetFunction
 * @typeofeditors ["CSE"]
 * @param {any} arg1.
 * @param {any} arg2.
 * @param {any} arg3.
 * @returns {number | string | boolean}
 */
ApiWorksheetFunction.prototype.XNPV = function (arg1, arg2, arg3) { return 0; };

/**
 * Returns the result of calculating the function.
 * @memberof ApiWorksheetFunction
 * @typeofeditors ["CSE"]
 * @param {any} arg1.
 * @param {any} arg2.
 * @param {any} arg3.
 * @param {any} arg4.
 * @param {any} arg5.
 * @param {any} arg6.
 * @param {any} [arg7].
 * @returns {number | string | boolean}
 */
ApiWorksheetFunction.prototype.YIELD = function (arg1, arg2, arg3, arg4, arg5, arg6, arg7) { return 0; };

/**
 * Returns the result of calculating the function.
 * @memberof ApiWorksheetFunction
 * @typeofeditors ["CSE"]
 * @param {any} arg1.
 * @param {any} arg2.
 * @param {any} arg3.
 * @param {any} arg4.
 * @param {any} [arg5].
 * @returns {number | string | boolean}
 */
ApiWorksheetFunction.prototype.YIELDDISC = function (arg1, arg2, arg3, arg4, arg5) { return 0; };

/**
 * Returns the result of calculating the function.
 * @memberof ApiWorksheetFunction
 * @typeofeditors ["CSE"]
 * @param {any} arg1.
 * @param {any} arg2.
 * @param {any} arg3.
 * @param {any} arg4.
 * @param {any} arg5.
 * @param {any} [arg6].
 * @returns {number | string | boolean}
 */
ApiWorksheetFunction.prototype.YIELDMAT = function (arg1, arg2, arg3, arg4, arg5, arg6) { return 0; };

/**
 * Returns the result of calculating the function.
 * @memberof ApiWorksheetFunction
 * @typeofeditors ["CSE"]
 * @param {number} arg1.
 * @returns {number | string | boolean}
 */
ApiWorksheetFunction.prototype.ABS = function (arg1) { return 0; };

/**
 * Returns the result of calculating the function.
 * @memberof ApiWorksheetFunction
 * @typeofeditors ["CSE"]
 * @param {number} arg1.
 * @returns {number | string | boolean}
 */
ApiWorksheetFunction.prototype.ACOS = function (arg1) { return 0; };

/**
 * Returns the result of calculating the function.
 * @memberof ApiWorksheetFunction
 * @typeofeditors ["CSE"]
 * @param {number} arg1.
 * @returns {number | string | boolean}
 */
ApiWorksheetFunction.prototype.ACOSH = function (arg1) { return 0; };

/**
 * Returns the result of calculating the function.
 * @memberof ApiWorksheetFunction
 * @typeofeditors ["CSE"]
 * @param {number} arg1.
 * @returns {number | string | boolean}
 */
ApiWorksheetFunction.prototype.ACOT = function (arg1) { return 0; };

/**
 * Returns the result of calculating the function.
 * @memberof ApiWorksheetFunction
 * @typeofeditors ["CSE"]
 * @param {number} arg1.
 * @returns {number | string | boolean}
 */
ApiWorksheetFunction.prototype.ACOTH = function (arg1) { return 0; };

/**
 * Returns the result of calculating the function.
 * @memberof ApiWorksheetFunction
 * @typeofeditors ["CSE"]
 * @returns {number | string | boolean}
 */
ApiWorksheetFunction.prototype.AGGREGATE = function () { return 0; };

/**
 * Returns the result of calculating the function.
 * @memberof ApiWorksheetFunction
 * @typeofeditors ["CSE"]
 * @param {string} arg1.
 * @returns {number | string | boolean}
 */
ApiWorksheetFunction.prototype.ARABIC = function (arg1) { return 0; };

/**
 * Returns the result of calculating the function.
 * @memberof ApiWorksheetFunction
 * @typeofeditors ["CSE"]
 * @param {number} arg1.
 * @returns {number | string | boolean}
 */
ApiWorksheetFunction.prototype.ASIN = function (arg1) { return 0; };

/**
 * Returns the result of calculating the function.
 * @memberof ApiWorksheetFunction
 * @typeofeditors ["CSE"]
 * @param {number} arg1.
 * @returns {number | string | boolean}
 */
ApiWorksheetFunction.prototype.ASINH = function (arg1) { return 0; };

/**
 * Returns the result of calculating the function.
 * @memberof ApiWorksheetFunction
 * @typeofeditors ["CSE"]
 * @param {number} arg1.
 * @returns {number | string | boolean}
 */
ApiWorksheetFunction.prototype.ATAN = function (arg1) { return 0; };

/**
 * Returns the result of calculating the function.
 * @memberof ApiWorksheetFunction
 * @typeofeditors ["CSE"]
 * @param {number} arg1.
 * @param {number} arg2.
 * @returns {number | string | boolean}
 */
ApiWorksheetFunction.prototype.ATAN2 = function (arg1, arg2) { return 0; };

/**
 * Returns the result of calculating the function.
 * @memberof ApiWorksheetFunction
 * @typeofeditors ["CSE"]
 * @param {number} arg1.
 * @returns {number | string | boolean}
 */
ApiWorksheetFunction.prototype.ATANH = function (arg1) { return 0; };

/**
 * Returns the result of calculating the function.
 * @memberof ApiWorksheetFunction
 * @typeofeditors ["CSE"]
 * @param {number} arg1.
 * @param {number} arg2.
 * @param {number} [arg3].
 * @returns {number | string | boolean}
 */
ApiWorksheetFunction.prototype.BASE = function (arg1, arg2, arg3) { return 0; };

/**
 * Returns the result of calculating the function.
 * @memberof ApiWorksheetFunction
 * @typeofeditors ["CSE"]
 * @param {number} arg1.
 * @param {number} arg2.
 * @returns {number | string | boolean}
 */
ApiWorksheetFunction.prototype.CEILING = function (arg1, arg2) { return 0; };

/**
 * Returns the result of calculating the function.
 * @memberof ApiWorksheetFunction
 * @typeofeditors ["CSE"]
 * @param {number} arg1.
 * @param {number} [arg2].
 * @param {number} [arg3].
 * @returns {number | string | boolean}
 */
ApiWorksheetFunction.prototype.CEILING_MATH = function (arg1, arg2, arg3) { return 0; };

/**
 * Returns the result of calculating the function.
 * @memberof ApiWorksheetFunction
 * @typeofeditors ["CSE"]
 * @param {any} arg1.
 * @param {any} [arg2].
 * @returns {number | string | boolean}
 */
ApiWorksheetFunction.prototype.CEILING_PRECISE = function (arg1, arg2) { return 0; };

/**
 * Returns the result of calculating the function.
 * @memberof ApiWorksheetFunction
 * @typeofeditors ["CSE"]
 * @param {number} arg1.
 * @param {number} arg2.
 * @returns {number | string | boolean}
 */
ApiWorksheetFunction.prototype.COMBIN = function (arg1, arg2) { return 0; };

/**
 * Returns the result of calculating the function.
 * @memberof ApiWorksheetFunction
 * @typeofeditors ["CSE"]
 * @param {number} arg1.
 * @param {number} arg2.
 * @returns {number | string | boolean}
 */
ApiWorksheetFunction.prototype.COMBINA = function (arg1, arg2) { return 0; };

/**
 * Returns the result of calculating the function.
 * @memberof ApiWorksheetFunction
 * @typeofeditors ["CSE"]
 * @param {number} arg1.
 * @returns {number | string | boolean}
 */
ApiWorksheetFunction.prototype.COS = function (arg1) { return 0; };

/**
 * Returns the result of calculating the function.
 * @memberof ApiWorksheetFunction
 * @typeofeditors ["CSE"]
 * @param {number} arg1.
 * @returns {number | string | boolean}
 */
ApiWorksheetFunction.prototype.COSH = function (arg1) { return 0; };

/**
 * Returns the result of calculating the function.
 * @memberof ApiWorksheetFunction
 * @typeofeditors ["CSE"]
 * @param {number} arg1.
 * @returns {number | string | boolean}
 */
ApiWorksheetFunction.prototype.COT = function (arg1) { return 0; };

/**
 * Returns the result of calculating the function.
 * @memberof ApiWorksheetFunction
 * @typeofeditors ["CSE"]
 * @param {any} arg1.
 * @returns {number | string | boolean}
 */
ApiWorksheetFunction.prototype.COTH = function (arg1) { return 0; };

/**
 * Returns the result of calculating the function.
 * @memberof ApiWorksheetFunction
 * @typeofeditors ["CSE"]
 * @param {number} arg1.
 * @returns {number | string | boolean}
 */
ApiWorksheetFunction.prototype.CSC = function (arg1) { return 0; };

/**
 * Returns the result of calculating the function.
 * @memberof ApiWorksheetFunction
 * @typeofeditors ["CSE"]
 * @param {number} arg1.
 * @returns {number | string | boolean}
 */
ApiWorksheetFunction.prototype.CSCH = function (arg1) { return 0; };

/**
 * Returns the result of calculating the function.
 * @memberof ApiWorksheetFunction
 * @typeofeditors ["CSE"]
 * @param {string} arg1.
 * @param {number} arg2.
 * @returns {number | string | boolean}
 */
ApiWorksheetFunction.prototype.DECIMAL = function (arg1, arg2) { return 0; };

/**
 * Returns the result of calculating the function.
 * @memberof ApiWorksheetFunction
 * @typeofeditors ["CSE"]
 * @param {number} arg1.
 * @returns {number | string | boolean}
 */
ApiWorksheetFunction.prototype.DEGREES = function (arg1) { return 0; };

/**
 * Returns the result of calculating the function.
 * @memberof ApiWorksheetFunction
 * @typeofeditors ["CSE"]
 * @param {number} arg1.
 * @param {number} arg2.
 * @returns {number | string | boolean}
 */
ApiWorksheetFunction.prototype.ECMA_CEILING = function (arg1, arg2) { return 0; };

/**
 * Returns the result of calculating the function.
 * @memberof ApiWorksheetFunction
 * @typeofeditors ["CSE"]
 * @param {number} arg1.
 * @returns {number | string | boolean}
 */
ApiWorksheetFunction.prototype.EVEN = function (arg1) { return 0; };

/**
 * Returns the result of calculating the function.
 * @memberof ApiWorksheetFunction
 * @typeofeditors ["CSE"]
 * @param {number} arg1.
 * @returns {number | string | boolean}
 */
ApiWorksheetFunction.prototype.EXP = function (arg1) { return 0; };

/**
 * Returns the result of calculating the function.
 * @memberof ApiWorksheetFunction
 * @typeofeditors ["CSE"]
 * @param {number} arg1.
 * @returns {number | string | boolean}
 */
ApiWorksheetFunction.prototype.FACT = function (arg1) { return 0; };

/**
 * Returns the result of calculating the function.
 * @memberof ApiWorksheetFunction
 * @typeofeditors ["CSE"]
 * @param {any} arg1.
 * @returns {number | string | boolean}
 */
ApiWorksheetFunction.prototype.FACTDOUBLE = function (arg1) { return 0; };

/**
 * Returns the result of calculating the function.
 * @memberof ApiWorksheetFunction
 * @typeofeditors ["CSE"]
 * @param {number} arg1.
 * @param {number} arg2.
 * @returns {number | string | boolean}
 */
ApiWorksheetFunction.prototype.FLOOR = function (arg1, arg2) { return 0; };

/**
 * Returns the result of calculating the function.
 * @memberof ApiWorksheetFunction
 * @typeofeditors ["CSE"]
 * @param {any} arg1.
 * @param {any} [arg2].
 * @returns {number | string | boolean}
 */
ApiWorksheetFunction.prototype.FLOOR_PRECISE = function (arg1, arg2) { return 0; };

/**
 * Returns the result of calculating the function.
 * @memberof ApiWorksheetFunction
 * @typeofeditors ["CSE"]
 * @param {number} arg1.
 * @param {number} [arg2].
 * @param {number} [arg3].
 * @returns {number | string | boolean}
 */
ApiWorksheetFunction.prototype.FLOOR_MATH = function (arg1, arg2, arg3) { return 0; };

/**
 * Returns the result of calculating the function.
 * @memberof ApiWorksheetFunction
 * @typeofeditors ["CSE"]
 * @returns {number | string | boolean}
 */
ApiWorksheetFunction.prototype.GCD = function () { return 0; };

/**
 * Returns the result of calculating the function.
 * @memberof ApiWorksheetFunction
 * @typeofeditors ["CSE"]
 * @param {number} arg1.
 * @returns {number | string | boolean}
 */
ApiWorksheetFunction.prototype.INT = function (arg1) { return 0; };

/**
 * Returns the result of calculating the function.
 * @memberof ApiWorksheetFunction
 * @typeofeditors ["CSE"]
 * @param {any} arg1.
 * @param {any} [arg2].
 * @returns {number | string | boolean}
 */
ApiWorksheetFunction.prototype.ISO_CEILING = function (arg1, arg2) { return 0; };

/**
 * Returns the result of calculating the function.
 * @memberof ApiWorksheetFunction
 * @typeofeditors ["CSE"]
 * @returns {number | string | boolean}
 */
ApiWorksheetFunction.prototype.LCM = function () { return 0; };

/**
 * Returns the result of calculating the function.
 * @memberof ApiWorksheetFunction
 * @typeofeditors ["CSE"]
 * @param {number} arg1.
 * @returns {number | string | boolean}
 */
ApiWorksheetFunction.prototype.LN = function (arg1) { return 0; };

/**
 * Returns the result of calculating the function.
 * @memberof ApiWorksheetFunction
 * @typeofeditors ["CSE"]
 * @param {number} arg1.
 * @param {number} [arg2].
 * @returns {number | string | boolean}
 */
ApiWorksheetFunction.prototype.LOG = function (arg1, arg2) { return 0; };

/**
 * Returns the result of calculating the function.
 * @memberof ApiWorksheetFunction
 * @typeofeditors ["CSE"]
 * @param {number} arg1.
 * @returns {number | string | boolean}
 */
ApiWorksheetFunction.prototype.LOG10 = function (arg1) { return 0; };

/**
//  * Returns the result of calculating the function.
//  * @memberof ApiWorksheetFunction
//  * @typeofeditors ["CSE"]
//  * @param {any} arg1.
//  * @returns {number | string | boolean}
//  */
// ApiWorksheetFunction.prototype.MDETERM = function (arg1) { return 0; };

/**
//  * Returns the result of calculating the function.
//  * @memberof ApiWorksheetFunction
//  * @typeofeditors ["CSE"]
//  * @param {any} arg1.
//  * @returns {number | string | boolean}
//  */
// ApiWorksheetFunction.prototype.MINVERSE = function (arg1) { return 0; };

/**
//  * Returns the result of calculating the function.
//  * @memberof ApiWorksheetFunction
//  * @typeofeditors ["CSE"]
//  * @param {any} arg1.
//  * @param {any} arg2.
//  * @returns {number | string | boolean}
//  */
// ApiWorksheetFunction.prototype.MMULT = function (arg1, arg2) { return 0; };

/**
 * Returns the result of calculating the function.
 * @memberof ApiWorksheetFunction
 * @typeofeditors ["CSE"]
 * @param {number} arg1.
 * @param {number} arg2.
 * @returns {number | string | boolean}
 */
ApiWorksheetFunction.prototype.MOD = function (arg1, arg2) { return 0; };

/**
 * Returns the result of calculating the function.
 * @memberof ApiWorksheetFunction
 * @typeofeditors ["CSE"]
 * @param {any} arg1.
 * @param {any} arg2.
 * @returns {number | string | boolean}
 */
ApiWorksheetFunction.prototype.MROUND = function (arg1, arg2) { return 0; };

/**
 * Returns the result of calculating the function.
 * @memberof ApiWorksheetFunction
 * @typeofeditors ["CSE"]
 * @returns {number | string | boolean}
 */
ApiWorksheetFunction.prototype.MULTINOMIAL = function () { return 0; };

/**
 * Returns the result of calculating the function.
 * @memberof ApiWorksheetFunction
 * @typeofeditors ["CSE"]
 * @param {number} arg1.
 * @returns {number | string | boolean}
 */
ApiWorksheetFunction.prototype.MUNIT = function (arg1) { return 0; };

/**
 * Returns the result of calculating the function.
 * @memberof ApiWorksheetFunction
 * @typeofeditors ["CSE"]
 * @param {number} arg1.
 * @returns {number | string | boolean}
 */
ApiWorksheetFunction.prototype.ODD = function (arg1) { return 0; };

/**
 * Returns the result of calculating the function.
 * @memberof ApiWorksheetFunction
 * @typeofeditors ["CSE"]
 * @returns {number | string | boolean}
 */
ApiWorksheetFunction.prototype.PI = function () { return 0; };

/**
 * Returns the result of calculating the function.
 * @memberof ApiWorksheetFunction
 * @typeofeditors ["CSE"]
 * @param {number} arg1.
 * @param {number} arg2.
 * @returns {number | string | boolean}
 */
ApiWorksheetFunction.prototype.POWER = function (arg1, arg2) { return 0; };

/**
 * Returns the result of calculating the function.
 * @memberof ApiWorksheetFunction
 * @typeofeditors ["CSE"]
 * @returns {number | string | boolean}
 */
ApiWorksheetFunction.prototype.PRODUCT = function () { return 0; };

/**
 * Returns the result of calculating the function.
 * @memberof ApiWorksheetFunction
 * @typeofeditors ["CSE"]
 * @param {any} arg1.
 * @param {any} arg2.
 * @returns {number | string | boolean}
 */
ApiWorksheetFunction.prototype.QUOTIENT = function (arg1, arg2) { return 0; };

/**
 * Returns the result of calculating the function.
 * @memberof ApiWorksheetFunction
 * @typeofeditors ["CSE"]
 * @param {number} arg1.
 * @returns {number | string | boolean}
 */
ApiWorksheetFunction.prototype.RADIANS = function (arg1) { return 0; };

/**
 * Returns the result of calculating the function.
 * @memberof ApiWorksheetFunction
 * @typeofeditors ["CSE"]
 * @returns {number | string | boolean}
 */
ApiWorksheetFunction.prototype.RAND = function () { return 0; };

/**
 * Returns the result of calculating the function.
 * @memberof ApiWorksheetFunction
 * @typeofeditors ["CSE"]
 * @param {any} arg1.
 * @param {any} arg2.
 * @returns {number | string | boolean}
 */
ApiWorksheetFunction.prototype.RANDBETWEEN = function (arg1, arg2) { return 0; };

/**
 * Returns the result of calculating the function.
 * @memberof ApiWorksheetFunction
 * @typeofeditors ["CSE"]
 * @param {number} arg1.
 * @param {number} [arg2].
 * @returns {number | string | boolean}
 */
ApiWorksheetFunction.prototype.ROMAN = function (arg1, arg2) { return 0; };

/**
 * Returns the result of calculating the function.
 * @memberof ApiWorksheetFunction
 * @typeofeditors ["CSE"]
 * @param {number} arg1.
 * @param {number} arg2.
 * @returns {number | string | boolean}
 */
ApiWorksheetFunction.prototype.ROUND = function (arg1, arg2) { return 0; };

/**
 * Returns the result of calculating the function.
 * @memberof ApiWorksheetFunction
 * @typeofeditors ["CSE"]
 * @param {number} arg1.
 * @param {number} arg2.
 * @returns {number | string | boolean}
 */
ApiWorksheetFunction.prototype.ROUNDDOWN = function (arg1, arg2) { return 0; };

/**
 * Returns the result of calculating the function.
 * @memberof ApiWorksheetFunction
 * @typeofeditors ["CSE"]
 * @param {number} arg1.
 * @param {number} arg2.
 * @returns {number | string | boolean}
 */
ApiWorksheetFunction.prototype.ROUNDUP = function (arg1, arg2) { return 0; };

/**
 * Returns the result of calculating the function.
 * @memberof ApiWorksheetFunction
 * @typeofeditors ["CSE"]
 * @param {number} arg1.
 * @returns {number | string | boolean}
 */
ApiWorksheetFunction.prototype.SEC = function (arg1) { return 0; };

/**
 * Returns the result of calculating the function.
 * @memberof ApiWorksheetFunction
 * @typeofeditors ["CSE"]
 * @param {number} arg1.
 * @returns {number | string | boolean}
 */
ApiWorksheetFunction.prototype.SECH = function (arg1) { return 0; };

/**
 * Returns the result of calculating the function.
 * @memberof ApiWorksheetFunction
 * @typeofeditors ["CSE"]
 * @param {any} arg1.
 * @param {any} arg2.
 * @param {any} arg3.
 * @param {any} arg4.
 * @returns {number | string | boolean}
 */
ApiWorksheetFunction.prototype.SERIESSUM = function (arg1, arg2, arg3, arg4) { return 0; };

/**
 * Returns the result of calculating the function.
 * @memberof ApiWorksheetFunction
 * @typeofeditors ["CSE"]
 * @param {number} arg1.
 * @returns {number | string | boolean}
 */
ApiWorksheetFunction.prototype.SIGN = function (arg1) { return 0; };

/**
 * Returns the result of calculating the function.
 * @memberof ApiWorksheetFunction
 * @typeofeditors ["CSE"]
 * @param {number} arg1.
 * @returns {number | string | boolean}
 */
ApiWorksheetFunction.prototype.SIN = function (arg1) { return 0; };

/**
 * Returns the result of calculating the function.
 * @memberof ApiWorksheetFunction
 * @typeofeditors ["CSE"]
 * @param {number} arg1.
 * @returns {number | string | boolean}
 */
ApiWorksheetFunction.prototype.SINH = function (arg1) { return 0; };

/**
 * Returns the result of calculating the function.
 * @memberof ApiWorksheetFunction
 * @typeofeditors ["CSE"]
 * @param {number} arg1.
 * @returns {number | string | boolean}
 */
ApiWorksheetFunction.prototype.SQRT = function (arg1) { return 0; };

/**
 * Returns the result of calculating the function.
 * @memberof ApiWorksheetFunction
 * @typeofeditors ["CSE"]
 * @param {any} arg1.
 * @returns {number | string | boolean}
 */
ApiWorksheetFunction.prototype.SQRTPI = function (arg1) { return 0; };

/**
 * Returns the result of calculating the function.
 * @memberof ApiWorksheetFunction
 * @typeofeditors ["CSE"]
 * @returns {number | string | boolean}
 */
ApiWorksheetFunction.prototype.SUBTOTAL = function () { return 0; };

/**
 * Returns the result of calculating the function.
 * @memberof ApiWorksheetFunction
 * @typeofeditors ["CSE"]
 * @returns {number | string | boolean}
 */
ApiWorksheetFunction.prototype.SUM = function () { return 0; };

/**
 * Returns the result of calculating the function.
 * @memberof ApiWorksheetFunction
 * @typeofeditors ["CSE"]
 * @param {ApiRange} arg1.
 * @param {any} arg2.
 * @param {ApiRange} [arg3].
 * @returns {number | string | boolean}
 */
ApiWorksheetFunction.prototype.SUMIF = function (arg1, arg2, arg3) { return 0; };

/**
 * Returns the result of calculating the function.
 * @memberof ApiWorksheetFunction
 * @typeofeditors ["CSE"]
 * @returns {number | string | boolean}
 */
ApiWorksheetFunction.prototype.SUMIFS = function () { return 0; };

/**
//  * Returns the result of calculating the function.
//  * @memberof ApiWorksheetFunction
//  * @typeofeditors ["CSE"]
//  * @returns {number | string | boolean}
//  */
// ApiWorksheetFunction.prototype.SUMPRODUCT = function () { return 0; };

/**
 * Returns the result of calculating the function.
 * @memberof ApiWorksheetFunction
 * @typeofeditors ["CSE"]
 * @returns {number | string | boolean}
 */
ApiWorksheetFunction.prototype.SUMSQ = function () { return 0; };

/**
//  * Returns the result of calculating the function.
//  * @memberof ApiWorksheetFunction
//  * @typeofeditors ["CSE"]
//  * @param {any} arg1.
//  * @param {any} arg2.
//  * @returns {number | string | boolean}
//  */
// ApiWorksheetFunction.prototype.SUMX2MY2 = function (arg1, arg2) { return 0; };

/**
//  * Returns the result of calculating the function.
//  * @memberof ApiWorksheetFunction
//  * @typeofeditors ["CSE"]
//  * @param {any} arg1.
//  * @param {any} arg2.
//  * @returns {number | string | boolean}
//  */
// ApiWorksheetFunction.prototype.SUMX2PY2 = function (arg1, arg2) { return 0; };

/**
//  * Returns the result of calculating the function.
//  * @memberof ApiWorksheetFunction
//  * @typeofeditors ["CSE"]
//  * @param {any} arg1.
//  * @param {any} arg2.
//  * @returns {number | string | boolean}
//  */
// ApiWorksheetFunction.prototype.SUMXMY2 = function (arg1, arg2) { return 0; };

/**
 * Returns the result of calculating the function.
 * @memberof ApiWorksheetFunction
 * @typeofeditors ["CSE"]
 * @param {number} arg1.
 * @returns {number | string | boolean}
 */
ApiWorksheetFunction.prototype.TAN = function (arg1) { return 0; };

/**
 * Returns the result of calculating the function.
 * @memberof ApiWorksheetFunction
 * @typeofeditors ["CSE"]
 * @param {number} arg1.
 * @returns {number | string | boolean}
 */
ApiWorksheetFunction.prototype.TANH = function (arg1) { return 0; };

/**
 * Returns the result of calculating the function.
 * @memberof ApiWorksheetFunction
 * @typeofeditors ["CSE"]
 * @param {number} arg1.
 * @param {number} [arg2].
 * @returns {number | string | boolean}
 */
ApiWorksheetFunction.prototype.TRUNC = function (arg1, arg2) { return 0; };

/**
 * Returns the result of calculating the function.
 * @memberof ApiWorksheetFunction
 * @typeofeditors ["CSE"]
 * @returns {number | string | boolean}
 */
ApiWorksheetFunction.prototype.CHOOSE = function () { return 0; };

/**
 * Returns the result of calculating the function.
 * @memberof ApiWorksheetFunction
 * @typeofeditors ["CSE"]
 * @param {ApiRange} arg1.
 * @returns {number | string | boolean}
 */
ApiWorksheetFunction.prototype.COLUMNS = function (arg1) { return 0; };

/**
 * Returns the result of calculating the function.
 * @memberof ApiWorksheetFunction
 * @typeofeditors ["CSE"]
 * @param {any} arg1.
 * @param {number} arg2.
 * @param {number} arg3.
 * @param {boolean} [arg4].
 * @returns {number | string | boolean}
 */
ApiWorksheetFunction.prototype.HLOOKUP = function (arg1, arg2, arg3, arg4) { return 0; };

/**
 * Returns the result of calculating the function.
 * @memberof ApiWorksheetFunction
 * @typeofeditors ["CSE"]
 * @param {string} arg1.
 * @param {any} [arg2].
 * @returns {number | string | boolean}
 */
ApiWorksheetFunction.prototype.HYPERLINK = function (arg1, arg2) { return 0; };

/**
 * Returns the result of calculating the function.
 * @memberof ApiWorksheetFunction
 * @typeofeditors ["CSE"]
 * @param {ApiRange} arg1.
 * @param {number} arg2.
 * @param {number} [arg3].
 * @param {any} [arg4].
 * @returns {number | string | boolean}
 */
ApiWorksheetFunction.prototype.INDEX = function (arg1, arg2, arg3, arg4) { return 0; };

/**
 * Returns the result of calculating the function.
 * @memberof ApiWorksheetFunction
 * @typeofeditors ["CSE"]
 * @param {any} arg1.
 * @param {ApiRange} arg2.
 * @param {ApiRange} [arg3].
 * @returns {number | string | boolean}
 */
ApiWorksheetFunction.prototype.LOOKUP = function (arg1, arg2, arg3) { return 0; };

/**
 * Returns the result of calculating the function.
 * @memberof ApiWorksheetFunction
 * @typeofeditors ["CSE"]
 * @param {any} arg1.
 * @param {number} arg2.
 * @param {number} [arg3].
 * @returns {number | string | boolean}
 */
ApiWorksheetFunction.prototype.MATCH = function (arg1, arg2, arg3) { return 0; };

/**
 * Returns the result of calculating the function.
 * @memberof ApiWorksheetFunction
 * @typeofeditors ["CSE"]
 * @param {ApiRange} arg1.
 * @returns {number | string | boolean}
 */
ApiWorksheetFunction.prototype.ROWS = function (arg1) { return 0; };

/**
 * Returns the result of calculating the function.
 * @memberof ApiWorksheetFunction
 * @typeofeditors ["CSE"]
 * @param {any} arg1.
 * @returns {number | string | boolean}
 */
ApiWorksheetFunction.prototype.TRANSPOSE = function (arg1) { return 0; };

/**
 * Returns the result of calculating the function.
 * @memberof ApiWorksheetFunction
 * @typeofeditors ["CSE"]
 * @param {any} arg1.
 * @param {number} arg2.
 * @param {number} arg3.
 * @param {boolean} [arg4].
 * @returns {number | string | boolean}
 */
ApiWorksheetFunction.prototype.VLOOKUP = function (arg1, arg2, arg3, arg4) { return 0; };

/**
 * Returns the result of calculating the function.
 * @memberof ApiWorksheetFunction
 * @typeofeditors ["CSE"]
 * @param {any} arg1.
 * @returns {number | string | boolean}
 */
ApiWorksheetFunction.prototype.ERROR_TYPE = function (arg1) { return 0; };

/**
 * Returns the result of calculating the function.
 * @memberof ApiWorksheetFunction
 * @typeofeditors ["CSE"]
 * @param {any} arg1.
 * @returns {number | string | boolean}
 */
ApiWorksheetFunction.prototype.ISERR = function (arg1) { return 0; };

/**
 * Returns the result of calculating the function.
 * @memberof ApiWorksheetFunction
 * @typeofeditors ["CSE"]
 * @param {any} arg1.
 * @returns {number | string | boolean}
 */
ApiWorksheetFunction.prototype.ISERROR = function (arg1) { return 0; };

/**
 * Returns the result of calculating the function.
 * @memberof ApiWorksheetFunction
 * @typeofeditors ["CSE"]
 * @param {any} arg1.
 * @returns {number | string | boolean}
 */
ApiWorksheetFunction.prototype.ISEVEN = function (arg1) { return 0; };

/**
 * Returns the result of calculating the function.
 * @memberof ApiWorksheetFunction
 * @typeofeditors ["CSE"]
 * @param {ApiRange} arg1.
 * @returns {number | string | boolean}
 */
ApiWorksheetFunction.prototype.ISFORMULA = function (arg1) { return 0; };

/**
 * Returns the result of calculating the function.
 * @memberof ApiWorksheetFunction
 * @typeofeditors ["CSE"]
 * @param {any} arg1.
 * @returns {number | string | boolean}
 */
ApiWorksheetFunction.prototype.ISLOGICAL = function (arg1) { return 0; };

/**
 * Returns the result of calculating the function.
 * @memberof ApiWorksheetFunction
 * @typeofeditors ["CSE"]
 * @param {any} arg1.
 * @returns {number | string | boolean}
 */
ApiWorksheetFunction.prototype.ISNA = function (arg1) { return 0; };

/**
 * Returns the result of calculating the function.
 * @memberof ApiWorksheetFunction
 * @typeofeditors ["CSE"]
 * @param {any} arg1.
 * @returns {number | string | boolean}
 */
ApiWorksheetFunction.prototype.ISNONTEXT = function (arg1) { return 0; };

/**
 * Returns the result of calculating the function.
 * @memberof ApiWorksheetFunction
 * @typeofeditors ["CSE"]
 * @param {any} arg1.
 * @returns {number | string | boolean}
 */
ApiWorksheetFunction.prototype.ISNUMBER = function (arg1) { return 0; };

/**
 * Returns the result of calculating the function.
 * @memberof ApiWorksheetFunction
 * @typeofeditors ["CSE"]
 * @param {any} arg1.
 * @returns {number | string | boolean}
 */
ApiWorksheetFunction.prototype.ISODD = function (arg1) { return 0; };

/**
 * Returns the result of calculating the function.
 * @memberof ApiWorksheetFunction
 * @typeofeditors ["CSE"]
 * @param {any} arg1.
 * @returns {number | string | boolean}
 */
ApiWorksheetFunction.prototype.ISREF = function (arg1) { return 0; };

/**
 * Returns the result of calculating the function.
 * @memberof ApiWorksheetFunction
 * @typeofeditors ["CSE"]
 * @param {any} arg1.
 * @returns {number | string | boolean}
 */
ApiWorksheetFunction.prototype.ISTEXT = function (arg1) { return 0; };

/**
 * Returns the result of calculating the function.
 * @memberof ApiWorksheetFunction
 * @typeofeditors ["CSE"]
 * @param {any} arg1.
 * @returns {number | string | boolean}
 */
ApiWorksheetFunction.prototype.N = function (arg1) { return 0; };

/**
 * Returns the result of calculating the function.
 * @memberof ApiWorksheetFunction
 * @typeofeditors ["CSE"]
 * @returns {number | string | boolean}
 */
ApiWorksheetFunction.prototype.NA = function () { return 0; };

/**
 * Returns the result of calculating the function.
 * @memberof ApiWorksheetFunction
 * @typeofeditors ["CSE"]
 * @param {string} [arg1].
 * @returns {number | string | boolean}
 */
ApiWorksheetFunction.prototype.SHEET = function (arg1) { return 0; };

/**
 * Returns the result of calculating the function.
 * @memberof ApiWorksheetFunction
 * @typeofeditors ["CSE"]
 * @param {ApiRange} [arg1].
 * @returns {number | string | boolean}
 */
ApiWorksheetFunction.prototype.SHEETS = function (arg1) { return 0; };

/**
 * Returns the result of calculating the function.
 * @memberof ApiWorksheetFunction
 * @typeofeditors ["CSE"]
 * @param {any} arg1.
 * @returns {number | string | boolean}
 */
ApiWorksheetFunction.prototype.TYPE = function (arg1) { return 0; };

/**
 * Returns the result of calculating the function.
 * @memberof ApiWorksheetFunction
 * @typeofeditors ["CSE"]
 * @returns {number | string | boolean}
 */
ApiWorksheetFunction.prototype.AND = function () { return 0; };

/**
 * Returns the result of calculating the function.
 * @memberof ApiWorksheetFunction
 * @typeofeditors ["CSE"]
 * @returns {number | string | boolean}
 */
ApiWorksheetFunction.prototype.FALSE = function () { return 0; };

/**
 * Returns the result of calculating the function.
 * @memberof ApiWorksheetFunction
 * @typeofeditors ["CSE"]
 * @param {boolean} arg1.
 * @param {any} arg2.
 * @param {any} [arg3].
 * @returns {number | string | boolean}
 */
ApiWorksheetFunction.prototype.IF = function (arg1, arg2, arg3) { return 0; };

/**
 * Returns the result of calculating the function.
 * @memberof ApiWorksheetFunction
 * @typeofeditors ["CSE"]
 * @param {any} arg1.
 * @param {any} arg2.
 * @returns {number | string | boolean}
 */
ApiWorksheetFunction.prototype.IFERROR = function (arg1, arg2) { return 0; };

/**
 * Returns the result of calculating the function.
 * @memberof ApiWorksheetFunction
 * @typeofeditors ["CSE"]
 * @param {any} arg1.
 * @param {any} arg2.
 * @returns {number | string | boolean}
 */
ApiWorksheetFunction.prototype.IFNA = function (arg1, arg2) { return 0; };

/**
 * Returns the result of calculating the function.
 * @memberof ApiWorksheetFunction
 * @typeofeditors ["CSE"]
 * @param {boolean} arg1.
 * @returns {number | string | boolean}
 */
ApiWorksheetFunction.prototype.NOT = function (arg1) { return 0; };

/**
 * Returns the result of calculating the function.
 * @memberof ApiWorksheetFunction
 * @typeofeditors ["CSE"]
 * @returns {number | string | boolean}
 */
ApiWorksheetFunction.prototype.OR = function () { return 0; };

/**
 * Returns the result of calculating the function.
 * @memberof ApiWorksheetFunction
 * @typeofeditors ["CSE"]
 * @returns {number | string | boolean}
 */
ApiWorksheetFunction.prototype.TRUE = function () { return 0; };

/**
 * Returns the result of calculating the function.
 * @memberof ApiWorksheetFunction
 * @typeofeditors ["CSE"]
 * @returns {number | string | boolean}
 */
ApiWorksheetFunction.prototype.XOR = function () { return 0; };

/**
 * Returns the mail merge data.
 * @memberof ApiInterface
 * @typeofeditors ["CSE"]
 * @param {number} nSheet - The sheet index.
 * @param {boolean} [bWithFormat=false] - Specifies that the data will be received with the format.
 * @returns {string[][]}
 */
ApiInterface.prototype.GetMailMergeData = function (nSheet, bWithFormat) { return [""]; };

/**
 * Recalculates all formulas in the active workbook.
 * @memberof ApiInterface
 * @typeofeditors ["CSE"]
 * @param {Function} fLogger - A function which specifies the logger object for checking recalculation of formulas.
 * @returns {boolean}
 */
ApiInterface.prototype.RecalculateAllFormulas = function (fLogger) { return true; };

/**
 * Subscribes to the specified event and calls the callback function when the event fires.
 * @function
 * @memberof ApiInterface
 * @typeofeditors ["CSE"]
 * @param {string} eventName - The event name.
 * @param {function} callback - Function to be called when the event fires.
 * @fires Api#onWorksheetChange
 */
ApiInterface.prototype["attachEvent"] = ApiInterface.prototype.attachEvent;{};

/**
 * Unsubscribes from the specified event.
 * @function
 * @memberof ApiInterface
 * @typeofeditors ["CSE"]
 * @param {string} eventName - The event name.
 * @fires Api#onWorksheetChange
 */
ApiInterface.prototype["detachEvent"] = ApiInterface.prototype.detachEvent;{};

/**
 * Returns an array of ApiComment objects.
 * @memberof ApiInterface
 * @typeofeditors ["CSE"]
 * @param {string} sText - The comment text.
 * @param {string} sAuthor - The author's name (optional).
 * @returns {ApiComment | null}
 * @since 7.5.0
 */
ApiInterface.prototype.AddComment = function (sText, sAuthor) { return new ApiComment(); };

/**
 * Returns a comment from the current document by its ID.
 * @memberof ApiInterface
 * @typeofeditors ["CSE"]
 * @param {string} sId - The comment ID.
 * @returns {ApiComment}
 */
ApiInterface.prototype.GetCommentById = function (sId) { return new ApiComment(); };

/**
 * Returns all comments related to the whole workbook.
 * @memberof ApiInterface
 * @typeofeditors ["CSE"]
 * @returns {ApiComment[]}
 */
ApiInterface.prototype.GetComments = function () { return [new ApiComment()]; };

/**
 * Returns all comments related to the whole workbook.
 * @memberof ApiInterface
 * @typeofeditors ["CSE"]
 * @returns {ApiComment[]}
 */
ApiInterface.prototype.Comments = ApiInterface.prototype.GetComments ();

/**
 * Returns all comments from the current workbook including comments from all worksheets.
 * @memberof ApiInterface
 * @typeofeditors ["CSE"]
 * @returns {ApiComment[]}
 */
ApiInterface.prototype.GetAllComments = function () { return [new ApiComment()]; };

/**
 * Returns all comments from the current workbook including comments from all worksheets.
 * @memberof ApiInterface
 * @typeofeditors ["CSE"]
 * @returns {ApiComment[]}
 */
ApiInterface.prototype.AllComments = ApiInterface.prototype.GetAllComments ();

/**
 * Specifies a type of freeze panes.
 * @typedef {("row" | "column" | "cell" | null )} FreezePaneType
 */

/**
 * Sets a type to the freeze panes.
 * @memberof ApiInterface
 * @typeofeditors ["CSE"]
 * @param {FreezePaneType} FreezePaneType - The freeze panes type ("null" to unfreeze).
 * @since 8.0.0
 */
ApiInterface.prototype.SetFreezePanesType = function (FreezePaneType) {};

/**
 * Returns the freeze panes type.
 * @memberof ApiInterface
 * @typeofeditors ["CSE"]
 * @returns {FreezePaneType} FreezePaneType - The freeze panes type ("null" if there are no freeze panes).
 * @since 8.0.0
 */
ApiInterface.prototype.GetFreezePanesType = function () { return new FreezePaneType(); };

/**
 * Returns the freeze panes type.
 * @memberof ApiInterface
 * @typeofeditors ["CSE"]
 * @returns {FreezePaneType} FreezePaneType - The freeze panes type ("null" if there are no freeze panes).
 * @since 8.0.0
 */
ApiInterface.prototype.FreezePanes = ApiInterface.prototype.GetFreezePanesType ();

/**
 * Returns the cell references style.
 * @memberof ApiInterface
 * @typeofeditors ["CSE"]
 * @returns {ReferenceStyle}
 * */
ApiInterface.prototype.GetReferenceStyle = function () { return new ReferenceStyle(); };

/**
 * Sets the cell references style.
 * @memberof ApiInterface
 * @typeofeditors ["CSE"]
 * @param {ReferenceStyle} sReferenceStyle - Type of reference style
 */
ApiInterface.prototype.SetReferenceStyle = function (sReferenceStyle) {};

/**
 * Sets the cell references style.
 * @memberof ApiInterface
 * @typeofeditors ["CSE"]
 * @param {ReferenceStyle} sReferenceStyle - Type of reference style
 */
ApiInterface.prototype.ReferenceStyle = ApiInterface.prototype.SetReferenceStyle ();

/**
 * Returns the state of sheet visibility.
 * @memberof ApiWorksheet
 * @typeofeditors ["CSE"]
 * @returns {boolean}
 */
ApiWorksheet.prototype.GetVisible = function () { return true; };

/**
 * Sets the state of sheet visibility.
 * @memberof ApiWorksheet
 * @typeofeditors ["CSE"]
 * @param {boolean} isVisible - Specifies if the sheet is visible or not.
 */
ApiWorksheet.prototype.SetVisible = function (isVisible) {};

/**
 * Sets the state of sheet visibility.
 * @memberof ApiWorksheet
 * @typeofeditors ["CSE"]
 * @param {boolean} isVisible - Specifies if the sheet is visible or not.
 */
ApiWorksheet.prototype.Visible = ApiWorksheet.prototype.SetVisible ();

/**
 * Makes the current sheet active.
 * @memberof ApiWorksheet
 * @typeofeditors ["CSE"]
 */
ApiWorksheet.prototype.SetActive = function () {};

/**
 * Makes the current sheet active.
 * @memberof ApiWorksheet
 * @typeofeditors ["CSE"]
 */
ApiWorksheet.prototype.Active = ApiWorksheet.prototype.SetActive ();

/**
 * Returns an object that represents an active cell.
 * @memberof ApiWorksheet
 * @typeofeditors ["CSE"]
 * @returns {ApiRange}
 */
ApiWorksheet.prototype.GetActiveCell = function () { return new ApiRange(); };

/**
 * Returns an object that represents an active cell.
 * @memberof ApiWorksheet
 * @typeofeditors ["CSE"]
 * @returns {ApiRange}
 */
ApiWorksheet.prototype.ActiveCell = ApiWorksheet.prototype.GetActiveCell ();

/**
 * Returns an object that represents the selected range.
 * @memberof ApiWorksheet
 * @typeofeditors ["CSE"]
 * @returns {ApiRange}
 */
ApiWorksheet.prototype.GetSelection = function () { return new ApiRange(); };

/**
 * Returns an object that represents the selected range.
 * @memberof ApiWorksheet
 * @typeofeditors ["CSE"]
 * @returns {ApiRange}
 */
ApiWorksheet.prototype.Selection = ApiWorksheet.prototype.GetSelection ();

/**
 * Returns the ApiRange that represents all the cells on the worksheet (not just the cells that are currently in use).
 * @memberof ApiWorksheet
 * @typeofeditors ["CSE"]
 * @param {number} row - The row number or the cell number (if only row is defined).
 * @param {number} col - The column number.
 * @returns {ApiRange | null}
 */
ApiWorksheet.prototype.GetCells = function (row, col) { return new ApiRange(); };

/**
 * Returns the ApiRange that represents all the cells on the worksheet (not just the cells that are currently in use).
 * @memberof ApiWorksheet
 * @typeofeditors ["CSE"]
 * @param {number} row - The row number or the cell number (if only row is defined).
 * @param {number} col - The column number.
 * @returns {ApiRange | null}
 */
ApiWorksheet.prototype.Cells = ApiWorksheet.prototype.GetCells ();

/**
 * Returns the ApiRange object that represents all the cells on the rows range.
 * @memberof ApiWorksheet
 * @typeofeditors ["CSE"]
 * @param {string | number} value - Specifies the rows range in the string or number format.
 * @returns {ApiRange | null}
 */
ApiWorksheet.prototype.GetRows = function (value) { return new ApiRange(); };

/**
 * Returns the ApiRange object that represents all the cells on the columns range.
 * @memberof ApiWorksheet
 * @typeofeditors ["CSE"]
 * @param {string} sRange - Specifies the columns range in the string format.
 * @returns {ApiRange}
 */
ApiWorksheet.prototype.GetCols = function (sRange) { return new ApiRange(); };

/**
 * Returns the ApiRange object that represents all the cells on the columns range.
 * @memberof ApiWorksheet
 * @typeofeditors ["CSE"]
 * @param {string} sRange - Specifies the columns range in the string format.
 * @returns {ApiRange}
 */
ApiWorksheet.prototype.Cols = ApiWorksheet.prototype.GetCols ();

/**
 * Returns the ApiRange object that represents the used range on the specified worksheet.
 * @memberof ApiWorksheet
 * @typeofeditors ["CSE"]
 * @returns {ApiRange}
 */
ApiWorksheet.prototype.GetUsedRange = function () { return new ApiRange(); };

/**
 * Returns the ApiRange object that represents the used range on the specified worksheet.
 * @memberof ApiWorksheet
 * @typeofeditors ["CSE"]
 * @returns {ApiRange}
 */
ApiWorksheet.prototype.UsedRange = ApiWorksheet.prototype.GetUsedRange ();

/**
 * Returns a sheet name.
 * @memberof ApiWorksheet
 * @typeofeditors ["CSE"]
 * @returns {string}
 */
ApiWorksheet.prototype.GetName = function () { return ""; };

/**
 * Sets a name to the current active sheet.
 * @memberof ApiWorksheet
 * @typeofeditors ["CSE"]
 * @param {string} sName - The name which will be displayed for the current sheet at the sheet tab.
 */
ApiWorksheet.prototype.SetName = function (sName) {};

/**
 * Sets a name to the current active sheet.
 * @memberof ApiWorksheet
 * @typeofeditors ["CSE"]
 * @param {string} sName - The name which will be displayed for the current sheet at the sheet tab.
 */
ApiWorksheet.prototype.Name = ApiWorksheet.prototype.SetName ();

/**
 * Returns a sheet index.
 * @memberof ApiWorksheet
 * @typeofeditors ["CSE"]
 * @returns {number}
 */
ApiWorksheet.prototype.GetIndex = function () { return 0; };

/**
 * Returns a sheet index.
 * @memberof ApiWorksheet
 * @typeofeditors ["CSE"]
 * @returns {number}
 */
ApiWorksheet.prototype.Index = ApiWorksheet.prototype.GetIndex ();

/**
 * Returns an object that represents the selected range of the current sheet. Can be a single cell - <b>A1</b>, or cells
 * from a single row - <b>A1:E1</b>, or cells from a single column - <b>A1:A10</b>, or cells from several rows and columns - <b>A1:E10</b>.
 * @memberof ApiWorksheet
 * @typeofeditors ["CSE"]
 * @param {string | ApiRange} Range1 - The range of cells from the current sheet.
 * @param {string | ApiRange} Range2 - The range of cells from the current sheet.
 * @returns {ApiRange | null} - returns null if such a range does not exist.
 */
ApiWorksheet.prototype.GetRange = function (Range1, Range2) { return new ApiRange(); };

/**
 * Returns an object that represents the selected range of the current sheet using the <b>row/column</b> coordinates for the cell selection.
 * @memberof ApiWorksheet
 * @typeofeditors ["CSE"]
 * @param {number} nRow - The row number.
 * @param {number} nCol - The column number.
 * @returns {ApiRange}
 */
ApiWorksheet.prototype.GetRangeByNumber = function (nRow, nCol) { return new ApiRange(); };

/**
 * Formats the selected range of cells from the current sheet as a table (with the first row formatted as a header).
 * <note>As the first row is always formatted as a table header, you need to select at least two rows for the table to be formed correctly.</note>
 * @memberof ApiWorksheet
 * @typeofeditors ["CSE"]
 * @param {string} sRange - The range of cells from the current sheet which will be formatted as a table.
 */
ApiWorksheet.prototype.FormatAsTable = function (sRange) {};

/**
 * Sets the width of the specified column.
 * One unit of column width is equal to the width of one character in the Normal style.
 * For proportional fonts, the width of the character 0 (zero) is used.
 * @memberof ApiWorksheet
 * @typeofeditors ["CSE"]
 * @param {number} nColumn - The number of the column to set the width to.
 * @param {number} nWidth - The width of the column divided by 7 pixels.
 * @param {boolean} [bWithotPaddings=false] - Specifies whether nWidth will be set without standard paddings.
 */
ApiWorksheet.prototype.SetColumnWidth = function (nColumn, nWidth, bWithotPaddings) {};

/**
 * Sets the height of the specified row measured in points.
 * A point is 1/72 inch.
 * @memberof ApiWorksheet
 * @typeofeditors ["CSE"]
 * @param {number} nRow - The number of the row to set the height to.
 * @param {number} nHeight - The height of the row measured in points.
 */
ApiWorksheet.prototype.SetRowHeight = function (nRow, nHeight) {};

/**
 * Specifies whether the current sheet gridlines must be displayed or not.
 * @memberof ApiWorksheet
 * @typeofeditors ["CSE"]
 * @param {boolean} isDisplayed - Specifies whether the current sheet gridlines must be displayed or not. The default value is <b>true</b>.
 */
ApiWorksheet.prototype.SetDisplayGridlines = function (isDisplayed) {};

/**
 * Specifies whether the current sheet row/column headers must be displayed or not.
 * @memberof ApiWorksheet
 * @typeofeditors ["CSE"]
 * @param {boolean} isDisplayed - Specifies whether the current sheet row/column headers must be displayed or not. The default value is <b>true</b>.
 */
ApiWorksheet.prototype.SetDisplayHeadings = function (isDisplayed) {};

/**
 * Sets the left margin of the sheet.
 * @memberof ApiWorksheet
 * @typeofeditors ["CSE"]
 * @param {number} nPoints - The left margin size measured in points.
 */
ApiWorksheet.prototype.SetLeftMargin = function (nPoints) {};

/**
 * Returns the left margin of the sheet.
 * @memberof ApiWorksheet
 * @typeofeditors ["CSE"]
 * @returns {number} - The left margin size measured in points.
 */
ApiWorksheet.prototype.GetLeftMargin = function () { return 0; };

/**
 * Returns the left margin of the sheet.
 * @memberof ApiWorksheet
 * @typeofeditors ["CSE"]
 * @returns {number} - The left margin size measured in points.
 */
ApiWorksheet.prototype.LeftMargin = ApiWorksheet.prototype.GetLeftMargin ();

/**
 * Sets the right margin of the sheet.
 * @memberof ApiWorksheet
 * @typeofeditors ["CSE"]
 * @param {number} nPoints - The right margin size measured in points.
 */
ApiWorksheet.prototype.SetRightMargin = function (nPoints) {};

/**
 * Returns the right margin of the sheet.
 * @memberof ApiWorksheet
 * @typeofeditors ["CSE"]
 * @returns {number} - The right margin size measured in points.
 */
ApiWorksheet.prototype.GetRightMargin = function () { return 0; };

/**
 * Returns the right margin of the sheet.
 * @memberof ApiWorksheet
 * @typeofeditors ["CSE"]
 * @returns {number} - The right margin size measured in points.
 */
ApiWorksheet.prototype.RightMargin = ApiWorksheet.prototype.GetRightMargin ();

/**
 * Sets the top margin of the sheet.
 * @memberof ApiWorksheet
 * @typeofeditors ["CSE"]
 * @param {number} nPoints - The top margin size measured in points.
 */
ApiWorksheet.prototype.SetTopMargin = function (nPoints) {};

/**
 * Returns the top margin of the sheet.
 * @memberof ApiWorksheet
 * @typeofeditors ["CSE"]
 * @returns {number} - The top margin size measured in points.
 */
ApiWorksheet.prototype.GetTopMargin = function () { return 0; };

/**
 * Returns the top margin of the sheet.
 * @memberof ApiWorksheet
 * @typeofeditors ["CSE"]
 * @returns {number} - The top margin size measured in points.
 */
ApiWorksheet.prototype.TopMargin = ApiWorksheet.prototype.GetTopMargin ();

/**
 * Sets the bottom margin of the sheet.
 * @memberof ApiWorksheet
 * @typeofeditors ["CSE"]
 * @param {number} nPoints - The bottom margin size measured in points.
 */
ApiWorksheet.prototype.SetBottomMargin = function (nPoints) {};

/**
 * Returns the bottom margin of the sheet.
 * @memberof ApiWorksheet
 * @typeofeditors ["CSE"]
 * @returns {number} - The bottom margin size measured in points.
 */
ApiWorksheet.prototype.GetBottomMargin = function () { return 0; };

/**
 * Returns the bottom margin of the sheet.
 * @memberof ApiWorksheet
 * @typeofeditors ["CSE"]
 * @returns {number} - The bottom margin size measured in points.
 */
ApiWorksheet.prototype.BottomMargin = ApiWorksheet.prototype.GetBottomMargin ();

/**
 * Sets the page orientation.
 * @memberof ApiWorksheet
 * @typeofeditors ["CSE"]
 * @param {PageOrientation} sPageOrientation - The page orientation type.
 * */
ApiWorksheet.prototype.SetPageOrientation = function (sPageOrientation) {};

/**
 * Returns the page orientation.
 * @memberof ApiWorksheet
 * @typeofeditors ["CSE"]
 * @returns {PageOrientation}
 * */
ApiWorksheet.prototype.GetPageOrientation = function () { return new PageOrientation(); };

/**
 * Returns the page orientation.
 * @memberof ApiWorksheet
 * @typeofeditors ["CSE"]
 * @returns {PageOrientation}
 * */
ApiWorksheet.prototype.PageOrientation = ApiWorksheet.prototype.GetPageOrientation ();

/**
 * Returns the page PrintHeadings property which specifies whether the current sheet row/column headings must be printed or not.
 * @memberof ApiWorksheet
 * @typeofeditors ["CSE"]
 * @returns {boolean} - Specifies whether the current sheet row/column headings must be printed or not.
 * */
ApiWorksheet.prototype.GetPrintHeadings = function () { return true; };

/**
 * Specifies whether the current sheet row/column headers must be printed or not.
 * @memberof ApiWorksheet
 * @typeofeditors ["CSE"]
 * @param {boolean} bPrint - Specifies whether the current sheet row/column headers must be printed or not.
 * */
ApiWorksheet.prototype.SetPrintHeadings = function (bPrint) {};

/**
 * Specifies whether the current sheet row/column headers must be printed or not.
 * @memberof ApiWorksheet
 * @typeofeditors ["CSE"]
 * @param {boolean} bPrint - Specifies whether the current sheet row/column headers must be printed or not.
 * */
ApiWorksheet.prototype.PrintHeadings = ApiWorksheet.prototype.SetPrintHeadings ();

/**
 * Returns the page PrintGridlines property which specifies whether the current sheet gridlines must be printed or not.
 * @memberof ApiWorksheet
 * @typeofeditors ["CSE"]
 * @returns {boolean} - True if cell gridlines are printed on this page.
 * */
ApiWorksheet.prototype.GetPrintGridlines = function () { return true; };

/**
 * Specifies whether the current sheet gridlines must be printed or not.
 * @memberof ApiWorksheet
 * @typeofeditors ["CSE"]
 * @param {boolean} bPrint - Defines if cell gridlines are printed on this page or not.
 * */
ApiWorksheet.prototype.SetPrintGridlines = function (bPrint) {};

/**
 * Specifies whether the current sheet gridlines must be printed or not.
 * @memberof ApiWorksheet
 * @typeofeditors ["CSE"]
 * @param {boolean} bPrint - Defines if cell gridlines are printed on this page or not.
 * */
ApiWorksheet.prototype.PrintGridlines = ApiWorksheet.prototype.SetPrintGridlines ();

/**
 * Returns an array of ApiName objects.
 * @memberof ApiWorksheet
 * @typeofeditors ["CSE"]
 * @returns {ApiName[]}
 */
ApiWorksheet.prototype.GetDefNames = function () { return [new ApiName()]; };

/**
 * Returns the ApiName object by the worksheet name.
 * @memberof ApiWorksheet
 * @typeofeditors ["CSE"]
 * @param {string} defName - The worksheet name.
 * @returns {ApiName | null} - returns null if definition name doesn't exist.
 */
ApiWorksheet.prototype.GetDefName = function (defName) { return new ApiName(); };

/**
 * Adds a new name to the current worksheet.
 * @memberof ApiWorksheet
 * @typeofeditors ["CSE"]
 * @param {string} sName - The range name.
 * @param {string} sRef  - Must contain the sheet name, followed by sign ! and a range of cells.
 * Example: "Sheet1!$A$1:$B$2".
 * @param {boolean} isHidden - Defines if the range name is hidden or not.
 * @returns {boolean} - returns false if sName or sRef are invalid.
 */
ApiWorksheet.prototype.AddDefName = function (sName, sRef, isHidden) { return true; };

/**
 * Adds a new name to the current worksheet.
 * @memberof ApiWorksheet
 * @typeofeditors ["CSE"]
 * @param {string} sName - The range name.
 * @param {string} sRef  - Must contain the sheet name, followed by sign ! and a range of cells.
 * Example: "Sheet1!$A$1:$B$2".
 * @param {boolean} isHidden - Defines if the range name is hidden or not.
 * @returns {boolean} - returns false if sName or sRef are invalid.
 */
ApiWorksheet.prototype.DefNames = ApiWorksheet.prototype.AddDefName ();

/**
 * Returns all comments from the current worksheet.
 * @memberof ApiWorksheet
 * @typeofeditors ["CSE"]
 * @returns {ApiComment[]}
 */
ApiWorksheet.prototype.GetComments = function () { return [new ApiComment()]; };

/**
 * Returns all comments from the current worksheet.
 * @memberof ApiWorksheet
 * @typeofeditors ["CSE"]
 * @returns {ApiComment[]}
 */
ApiWorksheet.prototype.Comments = ApiWorksheet.prototype.GetComments ();

/**
 * Deletes the current worksheet.
 * @memberof ApiWorksheet
 * @typeofeditors ["CSE"]
 */
ApiWorksheet.prototype.Delete = function () {};

/**
 * Adds a hyperlink to the specified range.
 * @memberof ApiWorksheet
 * @typeofeditors ["CSE"]
 * @param {string} sRange - The range where the hyperlink will be added to.
 * @param {string} sAddress - The link address.
 * @param {string} subAddress - The link subaddress to insert internal sheet hyperlinks.
 * @param {string} sScreenTip - The screen tip text.
 * @param {string} sTextToDisplay - The link text that will be displayed on the sheet.
 * */
ApiWorksheet.prototype.SetHyperlink = function (sRange, sAddress, subAddress, sScreenTip, sTextToDisplay) {};

/**
 * Creates a chart of the specified type from the selected data range of the current sheet.
 * <note>Please note that the horizontal and vertical offsets are calculated within the limits of the specified column and
 * row cells only. If this value exceeds the cell width or height, another vertical/horizontal position will be set.</note>
 * @memberof ApiWorksheet
 * @typeofeditors ["CSE"]
 * @param {string} sDataRange - The selected cell range which will be used to get the data for the chart, formed specifically and including the sheet name.
 * @param {boolean} bInRows - Specifies whether to take the data from the rows or from the columns. If true, the data from the rows will be used.
 * @param {ChartType} sType - The chart type used for the chart display.
 * @param {number} nStyleIndex - The chart color style index (can be <b>1 - 48</b>, as described in OOXML specification).
 * @param {EMU} nExtX - The chart width in English measure units
 * @param {EMU} nExtY - The chart height in English measure units.
 * @param {number} nFromCol - The number of the column where the beginning of the chart will be placed.
 * @param {EMU} nColOffset - The offset from the nFromCol column to the left part of the chart measured in English measure units.
 * @param {number} nFromRow - The number of the row where the beginning of the chart will be placed.
 * @param {EMU} nRowOffset - The offset from the nFromRow row to the upper part of the chart measured in English measure units.
 * @returns {ApiChart}
 */
ApiWorksheet.prototype.AddChart = function (sDataRange, bInRows, sType, nStyleIndex, nExtX, nExtY, nFromCol, nColOffset, nFromRow, nRowOffset) { return new ApiChart(); };

/**
 * Adds a shape to the current sheet with the parameters specified.
 * <note>Please note that the horizontal and vertical offsets are
 * calculated within the limits of the specified column and row cells
 * only. If this value exceeds the cell width or height, another vertical/horizontal position will be set.</note>
 * @memberof ApiWorksheet
 * @typeofeditors ["CSE"]
 * @param {ShapeType} [sType="rect"] - The shape type which specifies the preset shape geometry.
 * @param {EMU} nWidth - The shape width in English measure units.
 * @param {EMU} nHeight - The shape height in English measure units.
 * @param {ApiFill} oFill - The color or pattern used to fill the shape.
 * @param {ApiStroke} oStroke - The stroke used to create the element shadow.
 * @param {number} nFromCol - The number of the column where the beginning of the shape will be placed.
 * @param {EMU} nColOffset - The offset from the nFromCol column to the left part of the shape measured in English measure units.
 * @param {number} nFromRow - The number of the row where the beginning of the shape will be placed.
 * @param {EMU} nRowOffset - The offset from the nFromRow row to the upper part of the shape measured in English measure units.
 * @returns {ApiShape}
 * */
ApiWorksheet.prototype.AddShape = function (sType, nWidth, nHeight, oFill, oStroke, nFromCol, nColOffset, nFromRow, nRowOffset) { return new ApiShape(); };

/**
 * Adds an image to the current sheet with the parameters specified.
 * @memberof ApiWorksheet
 * @typeofeditors ["CSE"]
 * @param {string} sImageSrc - The image source where the image to be inserted should be taken from (currently only internet URL or Base64 encoded images are supported).
 * @param {EMU} nWidth - The image width in English measure units.
 * @param {EMU} nHeight - The image height in English measure units.
 * @param {number} nFromCol - The number of the column where the beginning of the image will be placed.
 * @param {EMU} nColOffset - The offset from the nFromCol column to the left part of the image measured in English measure units.
 * @param {number} nFromRow - The number of the row where the beginning of the image will be placed.
 * @param {EMU} nRowOffset - The offset from the nFromRow row to the upper part of the image measured in English measure units.
 * @returns {ApiImage}
 */
ApiWorksheet.prototype.AddImage = function (sImageSrc, nWidth, nHeight, nFromCol, nColOffset, nFromRow, nRowOffset) { return new ApiImage(); };

/**
 * Adds a Text Art object to the current sheet with the parameters specified.
 * @memberof ApiWorksheet
 * @typeofeditors ["CSE"]
 * @param {ApiTextPr} [oTextPr=Api.CreateTextPr()] - The text properties.
 * @param {string} [sText="Your text here"] - The text for the Text Art object.
 * @param {TextTransform} [sTransform="textNoShape"] - Text transform type.
 * @param {ApiFill} [oFill=Api.CreateNoFill()] - The color or pattern used to fill the Text Art object.
 * @param {ApiStroke} [oStroke=Api.CreateStroke(0, Api.CreateNoFill())] - The stroke used to create the Text Art object shadow.
 * @param {number} [nRotAngle=0] - Rotation angle.
 * @param {EMU} [nWidth=1828800] - The Text Art width measured in English measure units.
 * @param {EMU} [nHeight=1828800] - The Text Art heigth measured in English measure units.
 * @param {number} [nFromCol=0] - The column number where the beginning of the Text Art object will be placed.
 * @param {number} [nFromRow=0] - The row number where the beginning of the Text Art object will be placed.
 * @param {EMU} [nColOffset=0] - The offset from the nFromCol column to the left part of the Text Art object measured in English measure units.
 * @param {EMU} [nRowOffset=0] - The offset from the nFromRow row to the upper part of the Text Art object measured in English measure units.
 * @returns {ApiDrawing}
 */
ApiWorksheet.prototype.AddWordArt = function (oTextPr, sText, sTransform, oFill, oStroke, nRotAngle, nWidth, nHeight, nFromCol, nFromRow, nColOffset, nRowOffset) { return new ApiDrawing(); };

/**
 * Adds an OLE object to the current sheet with the parameters specified.
 * @memberof ApiWorksheet
 * @typeofeditors ["CSE"]
 * @param {string} sImageSrc - The image source where the image to be inserted should be taken from (currently, only internet URL or Base64 encoded images are supported).
 * @param {EMU} nWidth - The OLE object width in English measure units.
 * @param {EMU} nHeight - The OLE object height in English measure units.
 * @param {string} sData - The OLE object string data.
 * @param {string} sAppId - The application ID associated with the current OLE object.
 * @param {number} nFromCol - The number of the column where the beginning of the OLE object will be placed.
 * @param {EMU} nColOffset - The offset from the nFromCol column to the left part of the OLE object measured in English measure units.
 * @param {number} nFromRow - The number of the row where the beginning of the OLE object will be placed.
 * @param {EMU} nRowOffset - The offset from the nFromRow row to the upper part of the OLE object measured in English measure units.
 * @returns {ApiOleObject}
 */
ApiWorksheet.prototype.AddOleObject = function (sImageSrc, nWidth, nHeight, sData, sAppId, nFromCol, nColOffset, nFromRow, nRowOffset) { return new ApiOleObject(); };

/**
 * Replaces the current image with a new one.
 * @memberof ApiWorksheet
 * @typeofeditors ["CSE"]
 * @param {string} sImageUrl - The image source where the image to be inserted should be taken from (currently only internet URL or Base64 encoded images are supported).
 * @param {EMU} nWidth - The image width in English measure units.
 * @param {EMU} nHeight - The image height in English measure units.
 */
ApiWorksheet.prototype.ReplaceCurrentImage = function (sImageUrl, nWidth, nHeight) {};

/**
 * Returns all drawings from the current sheet.
 * @memberof ApiWorksheet
 * @typeofeditors ["CSE"]
 * @returns {ApiDrawing[]}.
 */
ApiWorksheet.prototype.GetAllDrawings = function () { return [new ApiDrawing()]; };

/**
 * Returns all images from the current sheet.
 * @memberof ApiWorksheet
 * @typeofeditors ["CSE"]
 * @returns {ApiImage[]}.
 */
ApiWorksheet.prototype.GetAllImages = function () { return [new ApiImage()]; };

/**
 * Returns all shapes from the current sheet.
 * @memberof ApiWorksheet
 * @typeofeditors ["CSE"]
 * @returns {ApiShape[]}.
 */
ApiWorksheet.prototype.GetAllShapes = function () { return [new ApiShape()]; };

/**
 * Returns all charts from the current sheet.
 * @memberof ApiWorksheet
 * @typeofeditors ["CSE"]
 * @returns {ApiChart[]}.
 */
ApiWorksheet.prototype.GetAllCharts = function () { return [new ApiChart()]; };

/**
 * Returns all OLE objects from the current sheet.
 * @memberof ApiWorksheet
 * @typeofeditors ["CSE"]
 * @returns {ApiOleObject[]}.
 */
ApiWorksheet.prototype.GetAllOleObjects = function () { return [new ApiOleObject()]; };

/**
 * Moves the current sheet to another location in the workbook.
 * @memberof ApiWorksheet
 * @typeofeditors ["CSE"]
 * @param {ApiWorksheet} before - The sheet before which the current sheet will be placed. You cannot specify "before" if you specify "after".
 * @param {ApiWorksheet} after - The sheet after which the current sheet will be placed. You cannot specify "after" if you specify "before".
 */
ApiWorksheet.prototype.Move = function (before, after) {};

/**
 * Returns the freeze panes from the current worksheet.
 * @memberof ApiWorksheet
 * @typeofeditors ["CSE"]
 * @returns {ApiFreezePanes}
 * @since 8.0.0
 */
ApiWorksheet.prototype.GetFreezePanes = function () { return new ApiFreezePanes(); };

/**
 * Returns the freeze panes from the current worksheet.
 * @memberof ApiWorksheet
 * @typeofeditors ["CSE"]
 * @returns {ApiFreezePanes}
 * @since 8.0.0
 */
ApiWorksheet.prototype.FreezePanes = ApiWorksheet.prototype.GetFreezePanes ();

/**
 * Creates a protected range of the specified type from the selected data range of the current sheet.
 * @memberof ApiWorksheet
 * @typeofeditors ["CSE"]
 * @param {string} sTitle - The title which will be displayed for the current protected range.
 * @param {string} sDataRange - The selected cell range which will be used to get the data for the protected range.
 * @returns {ApiProtectedRange | null}
 * @since 8.1.0
 */
ApiWorksheet.prototype.AddProtectedRange = function (sTitle, sDataRange) { return new ApiProtectedRange(); };

/**
 * Returns a protected range object by its title.
 * @memberof ApiWorksheet
 * @typeofeditors ["CSE"]
 * @param {string} sTitle - The title of the protected range that will be returned.
 * @returns {ApiProtectedRange | null}
 * @since 8.1.0
 */
ApiWorksheet.prototype.GetProtectedRange = function (sTitle) { return new ApiProtectedRange(); };

/**
 * Returns all protected ranges from the current worksheet.
 * @memberof ApiWorksheet
 * @typeofeditors ["CSE"]
 * @returns {ApiProtectedRange[] | null}
 * @since 8.1.0
 */
ApiWorksheet.prototype.GetAllProtectedRanges = function () { return [new ApiProtectedRange()]; };

/**
 * Returns all protected ranges from the current worksheet.
 * @memberof ApiWorksheet
 * @typeofeditors ["CSE"]
 * @returns {ApiProtectedRange[] | null}
 * @since 8.1.0
 */
ApiWorksheet.prototype.AllProtectedRanges = ApiWorksheet.prototype.GetAllProtectedRanges ();

/**
 * Pastes the contents of the Clipboard onto the sheet.
 * @memberof ApiRange
 * @typeofeditors ["CSE"]
 * @param {ApiRange} [destination] - Object that specifies where the Clipboard contents should be pasted. If this argument is omitted, the current selection is used.
 * @since 8.1.0
 */
ApiWorksheet.prototype.Paste = function (destination) {};

/**
 * Specifies the cell border position.
 * @typedef {("DiagonalDown" | "DiagonalUp" | "Bottom" | "Left" | "Right" | "Top" | "InsideHorizontal" | "InsideVertical")} BordersIndex
 */

/**
 * Specifies the line style used to form the cell border.
 * @typedef {("None" | "Double" | "Hair" | "DashDotDot" | "DashDot" | "Dotted" | "Dashed" | "Thin" | "MediumDashDotDot" | "SlantDashDot" | "MediumDashDot" | "MediumDashed" | "Medium" | "Thick")} LineStyle
 */

/**
 * Specifies the sort order.
 * @typedef {("xlAscending" | "xlDescending")}  SortOrder
 * */

/**
 * Specifies whether the first row of the sort range contains the header information.
 * @typedef {("xlNo" | "xlYes")} SortHeader
 * */

/**
 * Specifies if the sort should be by row or column.
 * @typedef {("xlSortColumns" | "xlSortRows")} SortOrientation
 * */

/**
 * Specifies the range angle.
 * @typedef {("xlDownward" | "xlHorizontal" | "xlUpward" | "xlVertical")} Angle
 */

/**
 * Specifies the direction of end in the specified range.
 * @typedef {("xlUp" | "xlDown" | "xlToRight" | "xlToLeft")} Direction
 */

/**
 * Returns a type of the ApiRange class.
 * @memberof ApiRange
 * @typeofeditors ["CSE"]
 * @returns {"range"}
 */
ApiRange.prototype.GetClassType = function () { return ""; };

/**
 * Returns a row number for the selected cell.
 * @memberof ApiRange
 * @typeofeditors ["CSE"]
 * @returns {number}
 */
ApiRange.prototype.GetRow = function () { return 0; };

/**
 * Returns a row number for the selected cell.
 * @memberof ApiRange
 * @typeofeditors ["CSE"]
 * @returns {number}
 */
ApiRange.prototype.Row = ApiRange.prototype.GetRow ();

/**
 * Returns a column number for the selected cell.
 * @memberof ApiRange
 * @typeofeditors ["CSE"]
 * @returns {number}
 */
ApiRange.prototype.GetCol = function () { return 0; };

/**
 * Returns a column number for the selected cell.
 * @memberof ApiRange
 * @typeofeditors ["CSE"]
 * @returns {number}
 */
ApiRange.prototype.Col = ApiRange.prototype.GetCol ();

/**
 * Clears the current range.
 * @memberof ApiRange
 * @typeofeditors ["CSE"]
 */
ApiRange.prototype.Clear = function () {};

/**
 * Returns a Range object that represents the rows in the specified range. If the specified row is outside the Range object, a new Range will be returned that represents the cells between the columns of the original range in the specified row.
 * @memberof ApiRange
 * @typeofeditors ["CSE"]
 * @param {number} nRow - The row number (starts counting from 1, the 0 value returns an error).
 * @returns {ApiRange | null}
 */
ApiRange.prototype.GetRows = function (nRow) { return new ApiRange(); };

/**
 * Returns a Range object that represents the rows in the specified range. If the specified row is outside the Range object, a new Range will be returned that represents the cells between the columns of the original range in the specified row.
 * @memberof ApiRange
 * @typeofeditors ["CSE"]
 * @param {number} nRow - The row number (starts counting from 1, the 0 value returns an error).
 * @returns {ApiRange | null}
 */
ApiRange.prototype.Rows = ApiRange.prototype.GetRows ();

/**
 * Returns a Range object that represents the columns in the specified range.
 * @memberof ApiRange
 * @typeofeditors ["CSE"]
 * @param {number} nCol - The column number. *
 * @returns {ApiRange | null}
 */
ApiRange.prototype.GetCols = function (nCol) { return new ApiRange(); };

/**
 * Returns a Range object that represents the columns in the specified range.
 * @memberof ApiRange
 * @typeofeditors ["CSE"]
 * @param {number} nCol - The column number. *
 * @returns {ApiRange | null}
 */
ApiRange.prototype.Cols = ApiRange.prototype.GetCols ();

/**
 * Returns a Range object that represents the end in the specified direction in the specified range.
 * @memberof ApiRange
 * @typeofeditors ["CSE"]
 * @param {Direction} direction - The direction of end in the specified range. *
 * @returns {ApiRange}
 */
ApiRange.prototype.End = function (direction) { return new ApiRange(); };

/**
 * Returns a Range object that represents all the cells in the specified range or a specified cell.
 * @memberof ApiRange
 * @typeofeditors ["CSE"]
 * @param {number} row - The row number or the cell number (if only row is defined).
 * @param {number} col - The column number.
 * @returns {ApiRange}
 */
ApiRange.prototype.GetCells = function (row, col) { return new ApiRange(); };

/**
 * Returns a Range object that represents all the cells in the specified range or a specified cell.
 * @memberof ApiRange
 * @typeofeditors ["CSE"]
 * @param {number} row - The row number or the cell number (if only row is defined).
 * @param {number} col - The column number.
 * @returns {ApiRange}
 */
ApiRange.prototype.Cells = ApiRange.prototype.GetCells ();

/**
 * Sets the cell offset.
 * @memberof ApiRange
 * @typeofeditors ["CSE"]
 * @param {number} nRow - The row number.
 * @param {number} nCol - The column number.
 */
ApiRange.prototype.SetOffset = function (nRow, nCol) {};

/**
 * Returns the range address.
 * @memberof ApiRange
 * @typeofeditors ["CSE"]
 * @param {boolean} RowAbs - Defines if the link to the row is absolute or not.
 * @param {boolean} ColAbs - Defines if the link to the column is absolute or not.
 * @param {string} RefStyle - The reference style.
 * @param {boolean} External - Defines if the range is in the current file or not.
 * @param {range} RelativeTo - The range which the current range is relative to.
 * @returns {string | null} - returns address of range as string.
 */
ApiRange.prototype.GetAddress = function (RowAbs, ColAbs, RefStyle, External, RelativeTo) { return ""; };

/**
 * Returns the range address.
 * @memberof ApiRange
 * @typeofeditors ["CSE"]
 * @param {boolean} RowAbs - Defines if the link to the row is absolute or not.
 * @param {boolean} ColAbs - Defines if the link to the column is absolute or not.
 * @param {string} RefStyle - The reference style.
 * @param {boolean} External - Defines if the range is in the current file or not.
 * @param {range} RelativeTo - The range which the current range is relative to.
 * @returns {string | null} - returns address of range as string.
 */
ApiRange.prototype.Address = ApiRange.prototype.GetAddress ();

/**
 * Returns the rows or columns count.
 * @memberof ApiRange
 * @typeofeditors ["CSE"]
 * @returns {number}
 */
ApiRange.prototype.GetCount = function () { return 0; };

/**
 * Returns the rows or columns count.
 * @memberof ApiRange
 * @typeofeditors ["CSE"]
 * @returns {number}
 */
ApiRange.prototype.Count = ApiRange.prototype.GetCount ();

/**
 * Returns a value of the specified range.
 * @memberof ApiRange
 * @typeofeditors ["CSE"]
 * @returns {string | string[][]}
 */
ApiRange.prototype.GetValue = function () { return [""]; };

/**
 * Sets a value to the current cell or cell range.
 * @memberof ApiRange
 * @typeofeditors ["CSE"]
 * @param {string | bool | number | Array[] | Array[][]} data - The general value for the cell or cell range.
 * @returns {boolean} - returns false if such a range does not exist.
 */
ApiRange.prototype.SetValue = function (data) { return true; };

/**
 * Sets a value to the current cell or cell range.
 * @memberof ApiRange
 * @typeofeditors ["CSE"]
 * @param {string | bool | number | Array[] | Array[][]} data - The general value for the cell or cell range.
 * @returns {boolean} - returns false if such a range does not exist.
 */
ApiRange.prototype.Value = ApiRange.prototype.SetValue ();

/**
 * Returns a formula of the specified range.
 * @typeofeditors ["CSE"]
 * @memberof ApiRange
 * @returns {string | string[][]} - return Value2 property (value without format) if formula doesn't exist.
 */
ApiRange.prototype.GetFormula = function () { return [""]; };

/**
 * Returns a formula of the specified range.
 * @typeofeditors ["CSE"]
 * @memberof ApiRange
 * @returns {string | string[][]} - return Value2 property (value without format) if formula doesn't exist.
 */
ApiRange.prototype.Formula = ApiRange.prototype.GetFormula ();

/**
 * Returns the Value2 property (value without format) of the specified range.
 * @typeofeditors ["CSE"]
 * @memberof ApiRange
 * @returns {string | string[][]}
 */
ApiRange.prototype.GetValue2 = function () { return [""]; };

/**
 * Returns the Value2 property (value without format) of the specified range.
 * @typeofeditors ["CSE"]
 * @memberof ApiRange
 * @returns {string | string[][]}
 */
ApiRange.prototype.Value2 = ApiRange.prototype.GetValue2 ();

/**
 * Returns the text of the specified range.
 * @typeofeditors ["CSE"]
 * @memberof ApiRange
 * @returns {string | string[][]}
 */
ApiRange.prototype.GetText = function () { return [""]; };

/**
 * Returns the text of the specified range.
 * @typeofeditors ["CSE"]
 * @memberof ApiRange
 * @returns {string | string[][]}
 */
ApiRange.prototype.Text = ApiRange.prototype.GetText ();

/**
 * Sets the text color to the current cell range with the previously created color object.
 * @memberof ApiRange
 * @typeofeditors ["CSE"]
 * @param {ApiColor} oColor - The color object which specifies the color to be set to the text in the cell / cell range.
 */
ApiRange.prototype.SetFontColor = function (oColor) {};

/**
 * Sets the text color to the current cell range with the previously created color object.
 * @memberof ApiRange
 * @typeofeditors ["CSE"]
 * @param {ApiColor} oColor - The color object which specifies the color to be set to the text in the cell / cell range.
 */
ApiRange.prototype.FontColor = ApiRange.prototype.SetFontColor ();

/**
 * Returns the value hiding property. The specified range must span an entire column or row.
 * @memberof ApiRange
 * @typeofeditors ["CSE"]
 * @returns {boolean} - returns true if the values in the range specified are hidden.
 */
ApiRange.prototype.GetHidden = function () { return true; };

/**
 * Sets the value hiding property. The specified range must span an entire column or row.
 * @memberof ApiRange
 * @typeofeditors ["CSE"]
 * @param {boolean} isHidden - Specifies if the values in the current range are hidden or not.
 */
ApiRange.prototype.SetHidden = function (isHidden) {};

/**
 * Sets the value hiding property. The specified range must span an entire column or row.
 * @memberof ApiRange
 * @typeofeditors ["CSE"]
 * @param {boolean} isHidden - Specifies if the values in the current range are hidden or not.
 */
ApiRange.prototype.Hidden = ApiRange.prototype.SetHidden ();

/**
 * Returns the column width value.
 * @memberof ApiRange
 * @typeofeditors ["CSE"]
 * @returns {number}
 */
ApiRange.prototype.GetColumnWidth = function () { return 0; };

/**
 * Sets the width of all the columns in the current range.
 * One unit of column width is equal to the width of one character in the Normal style.
 * For proportional fonts, the width of the character 0 (zero) is used.
 * @memberof ApiRange
 * @typeofeditors ["CSE"]
 * @param {number} nWidth - The width of the column divided by 7 pixels.
 */
ApiRange.prototype.SetColumnWidth = function (nWidth) {};

/**
 * Sets the width of all the columns in the current range.
 * One unit of column width is equal to the width of one character in the Normal style.
 * For proportional fonts, the width of the character 0 (zero) is used.
 * @memberof ApiRange
 * @typeofeditors ["CSE"]
 * @param {number} nWidth - The width of the column divided by 7 pixels.
 */
ApiRange.prototype.ColumnWidth = ApiRange.prototype.SetColumnWidth ();

/**
 * Returns the row height value.
 * @memberof ApiRange
 * @typeofeditors ["CSE"]
 * @returns {pt} - The row height in the range specified, measured in points.
 */
ApiRange.prototype.GetRowHeight = function () { return new pt(); };

/**
 * Sets the row height value.
 * @memberof ApiRange
 * @typeofeditors ["CSE"]
 * @param {pt} nHeight - The row height in the current range measured in points.
 */
ApiRange.prototype.SetRowHeight = function (nHeight) {};

/**
 * Sets the row height value.
 * @memberof ApiRange
 * @typeofeditors ["CSE"]
 * @param {pt} nHeight - The row height in the current range measured in points.
 */
ApiRange.prototype.RowHeight = ApiRange.prototype.SetRowHeight ();

/**
 * Sets the font size to the characters of the current cell range.
 * @memberof ApiRange
 * @typeofeditors ["CSE"]
 * @param {number} nSize - The font size value measured in points.
 */
ApiRange.prototype.SetFontSize = function (nSize) {};

/**
 * Sets the font size to the characters of the current cell range.
 * @memberof ApiRange
 * @typeofeditors ["CSE"]
 * @param {number} nSize - The font size value measured in points.
 */
ApiRange.prototype.FontSize = ApiRange.prototype.SetFontSize ();

/**
 * Sets the specified font family as the font name for the current cell range.
 * @memberof ApiRange
 * @typeofeditors ["CSE"]
 * @param {string} sName - The font family name used for the current cell range.
 */
ApiRange.prototype.SetFontName = function (sName) {};

/**
 * Sets the specified font family as the font name for the current cell range.
 * @memberof ApiRange
 * @typeofeditors ["CSE"]
 * @param {string} sName - The font family name used for the current cell range.
 */
ApiRange.prototype.FontName = ApiRange.prototype.SetFontName ();

/**
 * Sets the vertical alignment of the text in the current cell range.
 * @memberof ApiRange
 * @typeofeditors ["CSE"]
 * @param {'center' | 'bottom' | 'top' | 'distributed' | 'justify'} sAligment - The vertical alignment that will be applied to the cell contents.
 * @returns {boolean} - return false if sAligment doesn't exist.
 */
ApiRange.prototype.SetAlignVertical = function (sAligment) { return true; };

/**
 * Sets the vertical alignment of the text in the current cell range.
 * @memberof ApiRange
 * @typeofeditors ["CSE"]
 * @param {'center' | 'bottom' | 'top' | 'distributed' | 'justify'} sAligment - The vertical alignment that will be applied to the cell contents.
 * @returns {boolean} - return false if sAligment doesn't exist.
 */
ApiRange.prototype.AlignVertical = ApiRange.prototype.SetAlignVertical ();

/**
 * Sets the horizontal alignment of the text in the current cell range.
 * @memberof ApiRange
 * @typeofeditors ["CSE"]
 * @param {'left' | 'right' | 'center' | 'justify'} sAlignment - The horizontal alignment that will be applied to the cell contents.
 * @returns {boolean} - return false if sAligment doesn't exist.
 */
ApiRange.prototype.SetAlignHorizontal = function (sAlignment) { return true; };

/**
 * Sets the horizontal alignment of the text in the current cell range.
 * @memberof ApiRange
 * @typeofeditors ["CSE"]
 * @param {'left' | 'right' | 'center' | 'justify'} sAlignment - The horizontal alignment that will be applied to the cell contents.
 * @returns {boolean} - return false if sAligment doesn't exist.
 */
ApiRange.prototype.AlignHorizontal = ApiRange.prototype.SetAlignHorizontal ();

/**
 * Sets the bold property to the text characters in the current cell or cell range.
 * @memberof ApiRange
 * @typeofeditors ["CSE"]
 * @param {boolean} isBold - Specifies that the contents of the current cell / cell range are displayed bold.
 */
ApiRange.prototype.SetBold = function (isBold) {};

/**
 * Sets the bold property to the text characters in the current cell or cell range.
 * @memberof ApiRange
 * @typeofeditors ["CSE"]
 * @param {boolean} isBold - Specifies that the contents of the current cell / cell range are displayed bold.
 */
ApiRange.prototype.Bold = ApiRange.prototype.SetBold ();

/**
 * Sets the italic property to the text characters in the current cell or cell range.
 * @memberof ApiRange
 * @typeofeditors ["CSE"]
 * @param {boolean} isItalic - Specifies that the contents of the current cell / cell range are displayed italicized.
 */
ApiRange.prototype.SetItalic = function (isItalic) {};

/**
 * Sets the italic property to the text characters in the current cell or cell range.
 * @memberof ApiRange
 * @typeofeditors ["CSE"]
 * @param {boolean} isItalic - Specifies that the contents of the current cell / cell range are displayed italicized.
 */
ApiRange.prototype.Italic = ApiRange.prototype.SetItalic ();

/**
 * Specifies that the contents of the current cell / cell range are displayed along with a line appearing directly below the character.
 * @memberof ApiRange
 * @typeofeditors ["CSE"]
 * @param {'none' | 'single' | 'singleAccounting' | 'double' | 'doubleAccounting'} undelineType - Specifies the type of the
 * line displayed under the characters. The following values are available:
 * * <b>"none"</b> - for no underlining;
 * * <b>"single"</b> - for a single line underlining the cell contents;
 * * <b>"singleAccounting"</b> - for a single line underlining the cell contents but not protruding beyond the cell borders;
 * * <b>"double"</b> - for a double line underlining the cell contents;
 * * <b>"doubleAccounting"</b> - for a double line underlining the cell contents but not protruding beyond the cell borders.
 */
ApiRange.prototype.SetUnderline = function (undelineType) {};

/**
 * Specifies that the contents of the current cell / cell range are displayed along with a line appearing directly below the character.
 * @memberof ApiRange
 * @typeofeditors ["CSE"]
 * @param {'none' | 'single' | 'singleAccounting' | 'double' | 'doubleAccounting'} undelineType - Specifies the type of the
 * line displayed under the characters. The following values are available:
 * * <b>"none"</b> - for no underlining;
 * * <b>"single"</b> - for a single line underlining the cell contents;
 * * <b>"singleAccounting"</b> - for a single line underlining the cell contents but not protruding beyond the cell borders;
 * * <b>"double"</b> - for a double line underlining the cell contents;
 * * <b>"doubleAccounting"</b> - for a double line underlining the cell contents but not protruding beyond the cell borders.
 */
ApiRange.prototype.Underline = ApiRange.prototype.SetUnderline ();

/**
 * Specifies that the contents of the cell / cell range are displayed with a single horizontal line through the center of the contents.
 * @memberof ApiRange
 * @typeofeditors ["CSE"]
 * @param {boolean} isStrikeout - Specifies if the contents of the current cell / cell range are displayed struck through.
 */
ApiRange.prototype.SetStrikeout = function (isStrikeout) {};

/**
 * Specifies that the contents of the cell / cell range are displayed with a single horizontal line through the center of the contents.
 * @memberof ApiRange
 * @typeofeditors ["CSE"]
 * @param {boolean} isStrikeout - Specifies if the contents of the current cell / cell range are displayed struck through.
 */
ApiRange.prototype.Strikeout = ApiRange.prototype.SetStrikeout ();

/**
 * Specifies whether the words in the cell must be wrapped to fit the cell size or not.
 * @memberof ApiRange
 * @typeofeditors ["CSE"]
 * @param {boolean} isWrap - Specifies if the words in the cell will be wrapped to fit the cell size.
 */
ApiRange.prototype.SetWrap = function (isWrap) {};

/**
 * Returns the information about the wrapping cell style.
 * @memberof ApiRange
 * @typeofeditors ["CSE"]
 * @returns {boolean}
 */
ApiRange.prototype.GetWrapText = function () { return true; };

/**
 * Returns the information about the wrapping cell style.
 * @memberof ApiRange
 * @typeofeditors ["CSE"]
 * @returns {boolean}
 */
ApiRange.prototype.WrapText = ApiRange.prototype.GetWrapText ();

/**
 * Sets the background color to the current cell range with the previously created color object.
 * Sets 'No Fill' when previously created color object is null.
 * @memberof ApiRange
 * @typeofeditors ["CSE"]
 * @param {ApiColor} oColor - The color object which specifies the color to be set to the background in the cell / cell range.
 */
ApiRange.prototype.SetFillColor = function (oColor) {};

/**
 * Returns the background color for the current cell range. Returns 'No Fill' when the color of the background in the cell / cell range is null.
 * @memberof ApiRange
 * @typeofeditors ["CSE"]
 * @returns {ApiColor|'No Fill'} - return 'No Fill' when the color to the background in the cell / cell range is null.
 */
ApiRange.prototype.GetFillColor = function () { return new ApiColor(); };

/**
 * Returns the background color for the current cell range. Returns 'No Fill' when the color of the background in the cell / cell range is null.
 * @memberof ApiRange
 * @typeofeditors ["CSE"]
 * @returns {ApiColor|'No Fill'} - return 'No Fill' when the color to the background in the cell / cell range is null.
 */
ApiRange.prototype.FillColor = ApiRange.prototype.GetFillColor ();

/**
 * Returns a value that represents the format code for the current range.
 * @memberof ApiRange
 * @typeofeditors ["CSE"]
 * @returns {string | null} This property returns null if all cells in the specified range don't have the same number format.
 */
ApiRange.prototype.GetNumberFormat = function () { return ""; };

/**
 * Specifies whether a number in the cell should be treated like number, currency, date, time, etc. or just like text.
 * @memberof ApiRange
 * @typeofeditors ["CSE"]
 * @param {string} sFormat - Specifies the mask applied to the number in the cell.
 */
ApiRange.prototype.SetNumberFormat = function (sFormat) {};

/**
 * Specifies whether a number in the cell should be treated like number, currency, date, time, etc. or just like text.
 * @memberof ApiRange
 * @typeofeditors ["CSE"]
 * @param {string} sFormat - Specifies the mask applied to the number in the cell.
 */
ApiRange.prototype.NumberFormat = ApiRange.prototype.SetNumberFormat ();

/**
 * Sets the border to the cell / cell range with the parameters specified.
 * @memberof ApiRange
 * @typeofeditors ["CSE"]
 * @param {BordersIndex} bordersIndex - Specifies the cell border position.
 * @param {LineStyle} lineStyle - Specifies the line style used to form the cell border.
 * @param {ApiColor} oColor - The color object which specifies the color to be set to the cell border.
 */
ApiRange.prototype.SetBorders = function (bordersIndex, lineStyle, oColor) {};

/**
 * Merges the selected cell range into a single cell or a cell row.
 * @memberof ApiRange
 * @typeofeditors ["CSE"]
 * @param {boolean} isAcross - When set to <b>true</b>, the cells within the selected range will be merged along the rows,
 * but remain split in the columns. When set to <b>false</b>, the whole selected range of cells will be merged into a single cell.
 */
ApiRange.prototype.Merge = function (isAcross) {};

/**
 * Splits the selected merged cell range into the single cells.
 * @memberof ApiRange
 * @typeofeditors ["CSE"]
 */
ApiRange.prototype.UnMerge = function () {};

/**
 * Returns one cell or cells from the merge area.
 * @memberof ApiRange
 * @typeofeditors ["CSE"]
 * @returns {ApiRange | null} - returns null if range isn't one cell
 */
result = new ApiRange((bb) ? AscCommonExcel.Range.prototype.createFromBBox(this.range.worksheet, bb) : this.range);{ return new ApiRange(); };

/**
 * Returns one cell or cells from the merge area.
 * @memberof ApiRange
 * @typeofeditors ["CSE"]
 * @returns {ApiRange | null} - returns null if range isn't one cell
 */
ApiRange.prototype.MergeArea = new ApiRange();

/**
 * Executes a provided function once for each cell.
 * @memberof ApiRange
 * @typeofeditors ["CSE"]
 * @param {Function} fCallback - A function which will be executed for each cell.
 */
ApiRange.prototype.ForEach = function (fCallback) {};

/**
 * Adds a comment to the current range.
 * @memberof ApiRange
 * @typeofeditors ["CSE"]
 * @param {string} sText - The comment text.
 * @param {string} sAuthor - The author's name (optional).
 * @returns {ApiComment | null} - returns false if comment can't be added.
 */
ApiRange.prototype.AddComment = function (sText, sAuthor) { return new ApiComment(); };

/**
 * Returns the Worksheet object that represents the worksheet containing the specified range. It will be available in the read-only mode.
 * @memberof ApiRange
 * @typeofeditors ["CSE"]
 * @returns {ApiWorksheet}
 */
ApiRange.prototype.GetWorksheet = function () { return new ApiWorksheet(); };

/**
 * Returns the Worksheet object that represents the worksheet containing the specified range. It will be available in the read-only mode.
 * @memberof ApiRange
 * @typeofeditors ["CSE"]
 * @returns {ApiWorksheet}
 */
ApiRange.prototype.Worksheet = ApiRange.prototype.GetWorksheet ();

/**
 * Returns the ApiName object of the current range.
 * @memberof ApiRange
 * @typeofeditors ["CSE"]
 * @returns {ApiName}
 */
ApiRange.prototype.GetDefName = function () { return new ApiName(); };

/**
 * Returns the ApiName object of the current range.
 * @memberof ApiRange
 * @typeofeditors ["CSE"]
 * @returns {ApiName}
 */
ApiRange.prototype.DefName = ApiRange.prototype.GetDefName ();

/**
 * Returns the ApiComment object of the current range.
 * @memberof ApiRange
 * @typeofeditors ["CSE"]
 * @returns {ApiComment | null} - returns null if range does not consist of one cell.
 */
ApiRange.prototype.GetComment = function () { return new ApiComment(); };

/**
 * Returns the ApiComment object of the current range.
 * @memberof ApiRange
 * @typeofeditors ["CSE"]
 * @returns {ApiComment | null} - returns null if range does not consist of one cell.
 */
ApiRange.prototype.Comments = ApiRange.prototype.GetComment ();

/**
 * Selects the current range.
 * @memberof ApiRange
 * @typeofeditors ["CSE"]
 */
ApiRange.prototype.Select = function () {};

/**
 * Returns the current range angle.
 * @memberof ApiRange
 * @typeofeditors ["CSE"]
 * @returns {Angle}
 */
ApiRange.prototype.GetOrientation = function () { return new Angle(); };

/**
 * Sets an angle to the current cell range.
 * @memberof ApiRange
 * @typeofeditors ["CSE"]
 * @param {Angle} angle - Specifies the range angle.
 */
ApiRange.prototype.SetOrientation = function (angle) {};

/**
 * Sets an angle to the current cell range.
 * @memberof ApiRange
 * @typeofeditors ["CSE"]
 * @param {Angle} angle - Specifies the range angle.
 */
ApiRange.prototype.Orientation = ApiRange.prototype.SetOrientation ();

/**
 * Sorts the cells in the given range by the parameters specified in the request.
 * @memberof ApiRange
 * @typeofeditors ["CSE"]
 * @param {ApiRange | String} key1 - First sort field.
 * @param {SortOrder} sSortOrder1 - The sort order for the values specified in Key1.
 * @param {ApiRange | String} key2 - Second sort field.
 * @param {SortOrder} sSortOrder2 - The sort order for the values specified in Key2.
 * @param {ApiRange | String} key3 - Third sort field.
 * @param {SortOrder} sSortOrder3 - The sort order for the values specified in Key3.
 * @param {SortHeader} sHeader - Specifies whether the first row contains header information.
 * @param {SortOrientation} sOrientation - Specifies if the sort should be by row (default) or column.
 */
ApiRange.prototype.SetSort = function (key1, sSortOrder1, key2, /*Type,*/ sSortOrder2, key3, sSortOrder3, sHeader, /*OrderCustom, MatchCase,*/ sOrientation/*, SortMethod, DataOption1, DataOption2, DataOption3*/) {};

/**
 * Sorts the cells in the given range by the parameters specified in the request.
 * @memberof ApiRange
 * @typeofeditors ["CSE"]
 * @param {ApiRange | String} key1 - First sort field.
 * @param {SortOrder} sSortOrder1 - The sort order for the values specified in Key1.
 * @param {ApiRange | String} key2 - Second sort field.
 * @param {SortOrder} sSortOrder2 - The sort order for the values specified in Key2.
 * @param {ApiRange | String} key3 - Third sort field.
 * @param {SortOrder} sSortOrder3 - The sort order for the values specified in Key3.
 * @param {SortHeader} sHeader - Specifies whether the first row contains header information.
 * @param {SortOrientation} sOrientation - Specifies if the sort should be by row (default) or column.
 */
ApiRange.prototype.Sort = ApiRange.prototype.SetSort ();

/**
 * Deletes the Range object.
 * @memberof ApiRange
 * @typeofeditors ["CSE"]
 * @param {?string} shift - Specifies how to shift cells to replace the deleted cells ("up", "left").
 */
ApiRange.prototype.Delete = function (shift) {};

/**
 * Inserts a cell or a range of cells into the worksheet or macro sheet and shifts other cells away to make space.
 * @memberof ApiRange
 * @typeofeditors ["CSE"]
 * @param {?string} shift - Specifies which way to shift the cells ("right", "down").
 */
ApiRange.prototype.Insert = function (shift) {};

/**
 * Changes the width of the columns or the height of the rows in the range to achieve the best fit.
 * @memberof ApiRange
 * @typeofeditors ["CSE"]
 * @param {?bool} bRows - Specifies if the width of the columns will be autofit.
 * @param {?bool} bCols - Specifies if the height of the rows will be autofit.
 */
ApiRange.prototype.AutoFit = function (bRows, bCols) {};

/**
 * Returns a collection of the ranges.
 * @memberof ApiRange
 * @typeofeditors ["CSE"]
 * @returns {ApiAreas}
 */
ApiRange.prototype.GetAreas = function () { return new ApiAreas(); };

/**
 * Returns a collection of the ranges.
 * @memberof ApiRange
 * @typeofeditors ["CSE"]
 * @returns {ApiAreas}
 */
ApiRange.prototype.Areas = ApiRange.prototype.GetAreas ();

/**
 * Copies the range to the specified range or to the Clipboard.
 * @memberof ApiRange
 * @typeofeditors ["CSE"]
 * @param {ApiRange} [destination] - Specifies the new range to which the specified range will be copied. If this argument is omitted, Onlyoffice copies the range to the Clipboard.
 */
ApiRange.prototype.Copy = function (destination) {};

/**
 * Cuts the range to the specified range or to the Clipboard.
 * @memberof ApiRange
 * @typeofeditors ["CSE"]
 * @param {ApiRange} [destination] - Specifies the new range to which the specified range will be cuted. If this argument is omitted, Onlyoffice copies the range to the Clipboard.
 */
ApiRange.prototype.Cut = function (destination) {};

/**
 * Pastes the Range object to the specified range.
 * @memberof ApiRange
 * @typeofeditors ["CSE"]
 * @param {ApiRange} rangeFrom - Specifies the range to be pasted to the current range
 */
ApiRange.prototype.Paste = function (rangeFrom) {};

/**
 * Pastes the Range object to the specified range.
 * @memberof ApiRange
 * @typeofeditors ["CSE"]
 * @param {PasteType} [sPasteType="xlPasteAll"]  - Type of special paste
 * @param {PasteSpecialOperation} [sPasteSpecialOperation="xlPasteSpecialOperationNone"] - Operation of special paste
 * @param {boolean} bSkipBlanks [bSkipBlanks=false] - Case sensitive or not. The default value is "false".
 * @param {boolean} bTranspose [bTranspose=false] - Case sensitive or not. The default value is "false".
 */
ApiRange.prototype.PasteSpecial = function (sPasteType, sPasteSpecialOperation, bSkipBlanks, bTranspose) {};

/**
 * Search data type (formulas or values).
 * @typedef {("xlFormulas" | "xlValues")} XlFindLookIn
 */

/**
 * Specifies whether the whole search text or any part of the search text is matched.
 * @typedef {("xlWhole" | "xlPart")} XlLookAt
 */

/**
 * Range search order - by rows or by columns.
 * @typedef {("xlByRows" | "xlByColumns")} XlSearchOrder
 */

/**
 * Range search direction - next match or previous match.
 * @typedef {("xlNext" | "xlPrevious")} XlSearchDirection
 */

/**
 * Properties to make search.
 * @typedef {Object} SearchData
 * @property {string | undefined} What - The data to search for.
 * @property {ApiRange} After - The cell after which you want the search to begin. If this argument is not specified, the search starts after the cell in the upper-left corner of the range.
 * @property {XlFindLookIn} LookIn - Search data type (formulas or values).
 * @property {XlLookAt} LookAt - Specifies whether the whole search text or any part of the search text is matched.
 * @property {XlSearchOrder} SearchOrder - Range search order - by rows or by columns.
 * @property {XlSearchDirection} SearchDirection - Range search direction - next match or previous match.
 * @property {boolean} MatchCase - Case sensitive or not. The default value is "false".
 */

/**
 * Properties to make search and replace.
 * @typedef {Object} ReplaceData
 * @property {string | undefined} What - The data to search for.
 * @property {string} Replacement - The replacement string.
 * @property {XlLookAt} LookAt - Specifies whether the whole search text or any part of the search text is matched.
 * @property {XlSearchOrder} SearchOrder - Range search order - by rows or by columns.
 * @property {XlSearchDirection} SearchDirection - Range search direction - next match or previous match.
 * @property {boolean} MatchCase - Case sensitive or not. The default value is "false".
 * @property {boolean} ReplaceAll - Specifies if all the found data will be replaced or not. The default value is "true".
 */

/**
 * Finds specific information in the current range.
 * @memberof ApiRange
 * @typeofeditors ["CSE"]
 * @param {SearchData} oSearchData - The search data used to make search.
 * @returns {ApiRange | null} - Returns null if the current range does not contain such text.
 * @also
 * Finds specific information in the current range.
 * @memberof ApiRange
 * @typeofeditors ["CSE"]
 * @param {string | undefined} What - The data to search for.
 * @param {ApiRange} After - The cell after which you want the search to begin. If this argument is not specified, the search starts after the cell in the upper-left corner of the range.
 * @param {XlFindLookIn} LookIn - Search data type (formulas or values).
 * @param {XlLookAt} LookAt - Specifies whether the whole search text or any part of the search text is matched.
 * @param {XlSearchOrder} SearchOrder - Range search order - by rows or by columns.
 * @param {XlSearchDirection} SearchDirection - Range search direction - next match or previous match.
 * @param {boolean} MatchCase - Case sensitive or not. The default value is "false".
 * @returns {ApiRange | null} - Returns null if the current range does not contain such text.
 */
ApiRange.prototype.Find = function (oSearchData) { return new ApiRange(); };

/**
 * Continues a search that was begun with the {@link ApiRange#Find} method. Finds the next cell that matches those same conditions and returns the ApiRange object that represents that cell. This does not affect the selection or the active cell.
 * @memberof ApiRange
 * @typeofeditors ["CSE"]
 * @param {ApiRange} After - The cell after which the search will start. If this argument is not specified, the search starts from the last cell found.
 * @returns {ApiRange | null} - Returns null if the range does not contain such text.
 *
 */
ApiRange.prototype.FindNext = function (After) { return new ApiRange(); };

/**
 * Continues a search that was begun with the {@link ApiRange#Find} method. Finds the previous cell that matches those same conditions and returns the ApiRange object that represents that cell. This does not affect the selection or the active cell.
 * @memberof ApiRange
 * @typeofeditors ["CSE"]
 * @param {ApiRange} Before - The cell before which the search will start. If this argument is not specified, the search starts from the last cell found.
 * @returns {ApiRange | null} - Returns null if the range does not contain such text.
 *
 */
ApiRange.prototype.FindPrevious = function (Before) { return new ApiRange(); };

/**
 * Replaces specific information to another one in a range.
 * @memberof ApiRange
 * @typeofeditors ["CSE"]
 * @param {ReplaceData} oReplaceData - The data used to make search and replace.
 * @returns {ApiRange | null} - Returns null if the current range does not contain such text.
 * @also
 * Replaces specific information to another one in a range.
 * @memberof ApiRange
 * @typeofeditors ["CSE"]
 * @param {string | undefined} What - The data to search for.
 * @param {string} Replacement - The replacement string.
 * @param {XlLookAt} LookAt - Specifies whether the whole search text or any part of the search text is matched.
 * @param {XlSearchOrder} SearchOrder - Range search order - by rows or by columns.
 * @param {XlSearchDirection} SearchDirection - Range search direction - next match or previous match.
 * @param {boolean} MatchCase - Case sensitive or not. The default value is "false".
 * @param {boolean} ReplaceAll - Specifies if all the found data will be replaced or not. The default value is "true".
 */
ApiRange.prototype.Replace = function (oReplaceData) { return new ApiRange(); };

/**
 * Returns the ApiCharacters object that represents a range of characters within the object text. Use the ApiCharacters object to format characters within a text string.
 * @memberof ApiRange
 * @typeofeditors ["CSE"]
 * @param {number} Start - The first character to be returned. If this argument is either 1 or omitted, this property returns a range of characters starting with the first character.
 * @param {number} Length - The number of characters to be returned. If this argument is omitted, this property returns the remainder of the string (everything after the Start character).
 * @returns {ApiCharacters}
 * @since 7.4.0
 */
ApiRange.prototype.GetCharacters = function (Start, Length) { return new ApiCharacters(); };

/**
 * Returns the ApiCharacters object that represents a range of characters within the object text. Use the ApiCharacters object to format characters within a text string.
 * @memberof ApiRange
 * @typeofeditors ["CSE"]
 * @param {number} Start - The first character to be returned. If this argument is either 1 or omitted, this property returns a range of characters starting with the first character.
 * @param {number} Length - The number of characters to be returned. If this argument is omitted, this property returns the remainder of the string (everything after the Start character).
 * @returns {ApiCharacters}
 * @since 7.4.0
 */
ApiRange.prototype.Characters = ApiRange.prototype.GetCharacters ();

/**
 * Returns a type of the ApiDrawing class.
 * @memberof ApiDrawing
 * @typeofeditors ["CSE"]
 * @returns {"drawing"}
 */
ApiDrawing.prototype.GetClassType = function () { return ""; };

/**
 * Sets a size of the object (image, shape, chart) bounding box.
 * @memberof ApiDrawing
 * @typeofeditors ["CSE"]
 * @param {EMU} nWidth - The object width measured in English measure units.
 * @param {EMU} nHeight - The object height measured in English measure units.
 */
ApiDrawing.prototype.SetSize = function (nWidth, nHeight) {};

/**
 * Changes the position for the drawing object.
 * <note>Please note that the horizontal and vertical offsets are calculated within the limits of
 * the specified column and row cells only. If this value exceeds the cell width or height, another vertical/horizontal position will be set.</note>
 * @memberof ApiDrawing
 * @typeofeditors ["CSE"]
 * @param {number} nFromCol - The number of the column where the beginning of the drawing object will be placed.
 * @param {EMU} nColOffset - The offset from the nFromCol column to the left part of the drawing object measured in English measure units.
 * @param {number} nFromRow - The number of the row where the beginning of the drawing object will be placed.
 * @param {EMU} nRowOffset - The offset from the nFromRow row to the upper part of the drawing object measured in English measure units.
 * */
ApiDrawing.prototype.SetPosition = function (nFromCol, nColOffset, nFromRow, nRowOffset) {};

/**
 * Returns the width of the current drawing.
 * @memberof ApiDrawing
 * @typeofeditors ["CDE", "CPE", "CSE"]
 * @returns {EMU}
 */
ApiDrawing.prototype.GetWidth = function () { return new EMU(); };

/**
 * Returns the height of the current drawing.
 * @memberof ApiDrawing
 * @typeofeditors ["CDE", "CPE", "CSE"]
 * @returns {EMU}
 */
ApiDrawing.prototype.GetHeight = function () { return new EMU(); };

/**
 * Returns the lock value for the specified lock type of the current drawing.
 * @typeofeditors ["CSE"]
 * @param {"noGrp" | "noUngrp" | "noSelect" | "noRot" | "noChangeAspect" | "noMove" | "noResize" | "noEditPoints" | "noAdjustHandles"
 * | "noChangeArrowheads" | "noChangeShapeType" | "noDrilldown" | "noTextEdit" | "noCrop" | "txBox"} sType - Lock type in the string format.
 * @returns {bool}
 */
ApiDrawing.prototype.GetLockValue = function (sType) { return true; };

/**
 * Sets the lock value to the specified lock type of the current drawing.
 * @typeofeditors ["CSE"]
 * @param {"noGrp" | "noUngrp" | "noSelect" | "noRot" | "noChangeAspect" | "noMove" | "noResize" | "noEditPoints" | "noAdjustHandles"
 * | "noChangeArrowheads" | "noChangeShapeType" | "noDrilldown" | "noTextEdit" | "noCrop" | "txBox"} sType - Lock type in the string format.
 * @param {bool} bValue - Specifies if the specified lock is applied to the current drawing.
 * @returns {bool}
 */
ApiDrawing.prototype.SetLockValue = function (sType, bValue) { return true; };

/**
 * Returns a type of the ApiImage class.
 * @memberof ApiImage
 * @typeofeditors ["CDE", "CSE"]
 * @returns {"image"}
 */
ApiImage.prototype.GetClassType = function () { return ""; };

/**
 * Returns a type of the ApiShape class.
 * @memberof ApiShape
 * @typeofeditors ["CSE"]
 * @returns {"shape"}
 */
ApiShape.prototype.GetClassType = function () { return ""; };

/**
 * Returns the shape inner contents where a paragraph or text runs can be inserted.
 * @memberof ApiShape
 * @typeofeditors ["CSE"]
 * @returns {ApiDocumentContent}
 */
ApiShape.prototype.GetContent = function () { return new ApiDocumentContent(); };

/**
 * Returns the shape inner contents where a paragraph or text runs can be inserted.
 * @memberof ApiShape
 * @typeofeditors ["CSE"]
 * @returns {ApiDocumentContent}
 */
ApiShape.prototype.GetDocContent = function () { return new ApiDocumentContent(); };

/**
 * Sets the vertical alignment to the shape content where a paragraph or text runs can be inserted.
 * @memberof ApiShape
 * @typeofeditors ["CSE"]
 * @param {"top" | "center" | "bottom" } sVerticalAlign - The vertical alignment type for the shape inner contents.
 * @returns {boolean} - returns false if shape or aligment doesn't exist.
 */
ApiShape.prototype.SetVerticalTextAlign = function (sVerticalAlign) { return true; };

/**
 * Returns a type of the ApiChart class.
 * @memberof ApiChart
 * @typeofeditors ["CSE"]
 * @returns {"chart"}
 */
ApiChart.prototype.GetClassType = function () { return ""; };

/**
 *  Specifies the chart title with the specified parameters.
 *  @memberof ApiChart
 *  @typeofeditors ["CSE"]
 *  @param {string} sTitle - The title which will be displayed for the current chart.
 *  @param {pt} nFontSize - The text size value measured in points.
 *  @param {?bool} bIsBold - Specifies if the chart title is written in bold font or not.
 */
ApiChart.prototype.SetTitle = function (sTitle, nFontSize, bIsBold) {};

/**
 *  Specifies the chart horizontal axis title.
 *  @memberof ApiChart
 *  @typeofeditors ["CSE"]
 *  @param {string} sTitle - The title which will be displayed for the horizontal axis of the current chart.
 *  @param {pt} nFontSize - The text size value measured in points.
 *  @param {?bool} bIsBold - Specifies if the horizontal axis title is written in bold font or not.
 * */
ApiChart.prototype.SetHorAxisTitle = function (sTitle, nFontSize, bIsBold) {};

/**
 *  Specifies the chart vertical axis title.
 *  @memberof ApiChart
 *  @typeofeditors ["CSE"]
 *  @param {string} sTitle - The title which will be displayed for the vertical axis of the current chart.
 *  @param {pt} nFontSize - The text size value measured in points.
 *  @param {?bool} bIsBold - Specifies if the vertical axis title is written in bold font or not.
 * */
ApiChart.prototype.SetVerAxisTitle = function (sTitle, nFontSize, bIsBold) {};

/**
 * Specifies the direction of the data displayed on the vertical axis.
 * @memberof ApiChart
 * @typeofeditors ["CSE"]
 * @param {boolean} bIsMinMax - The <code>true</code> value sets the normal data direction for the vertical axis (from minimum to maximum).
 * The <code>false</code> value sets the inverted data direction for the vertical axis (from maximum to minimum).
 * */
ApiChart.prototype.SetVerAxisOrientation = function (bIsMinMax) {};

/**
 * Specifies the major tick mark for the horizontal axis.
 * @memberof ApiChart
 * @typeofeditors ["CSE"]
 * @param {TickMark} sTickMark - The type of tick mark appearance.
 * */
ApiChart.prototype.SetHorAxisMajorTickMark = function (sTickMark) {};

/**
 * Specifies the minor tick mark for the horizontal axis.
 * @memberof ApiChart
 * @typeofeditors ["CSE"]
 * @param {TickMark} sTickMark - The type of tick mark appearance.
 * */
ApiChart.prototype.SetHorAxisMinorTickMark = function (sTickMark) {};

/**
 * Specifies the major tick mark for the vertical axis.
 * @memberof ApiChart
 * @typeofeditors ["CSE"]
 * @param {TickMark} sTickMark - The type of tick mark appearance.
 * */
ApiChart.prototype.SetVertAxisMajorTickMark = function (sTickMark) {};

/**
 * Specifies the minor tick mark for the vertical axis.
 * @memberof ApiChart
 * @typeofeditors ["CSE"]
 * @param {TickMark} sTickMark - The type of tick mark appearance.
 * */
ApiChart.prototype.SetVertAxisMinorTickMark = function (sTickMark) {};

/**
 * Specifies the direction of the data displayed on the horizontal axis.
 * @memberof ApiChart
 * @typeofeditors ["CSE"]
 * @param {boolean} bIsMinMax - The <code>true</code> value sets the normal data direction for the horizontal axis
 * (from minimum to maximum). The <code>false</code> value sets the inverted data direction for the horizontal axis (from maximum to minimum).
 * */
ApiChart.prototype.SetHorAxisOrientation = function (bIsMinMax) {};

/**
 * Specifies the chart legend position.
 * @memberof ApiChart
 * @typeofeditors ["CSE"]
 * @param {"left" | "top" | "right" | "bottom" | "none"} sLegendPos - The position of the chart legend inside the chart window.
 * */
ApiChart.prototype.SetLegendPos = function (sLegendPos) {};

/**
 * Specifies the legend font size.
 * @memberof ApiChart
 * @typeofeditors ["CSE"]
 * @param {pt} nFontSize - The text size value measured in points.
 * */
ApiChart.prototype.SetLegendFontSize = function (nFontSize) {};

/**
 * Specifies which chart data labels are shown for the chart.
 * @memberof ApiChart
 * @typeofeditors ["CSE"]
 * @param {boolean} bShowSerName - Whether to show or hide the source table column names used for the data which the chart will be build from.
 * @param {boolean} bShowCatName - Whether to show or hide the source table row names used for the data which the chart will be build from.
 * @param {boolean} bShowVal - Whether to show or hide the chart data values.
 * @param {boolean} bShowPercent - Whether to show or hide the percent for the data values (works with stacked chart types).
 * */
ApiChart.prototype.SetShowDataLabels = function (bShowSerName, bShowCatName, bShowVal, bShowPercent) {};

/**
 * Spicifies the show options for the data labels.
 * @memberof ApiChart
 * @typeofeditors ["CSE"]
 * @param {number} nSeriesIndex - The series index from the array of the data used to build the chart from.
 * @param {number} nPointIndex - The point index from this series.
 * @param {boolean} bShowSerName - Whether to show or hide the source table column names used for the data which the chart will be build from.
 * @param {boolean} bShowCatName - Whether to show or hide the source table row names used for the data which the chart will be build from.
 * @param {boolean} bShowVal - Whether to show or hide the chart data values.
 * @param {boolean} bShowPercent - Whether to show or hide the percent for the data values (works with stacked chart types).
 * */
ApiChart.prototype.SetShowPointDataLabel = function (nSeriesIndex, nPointIndex, bShowSerName, bShowCatName, bShowVal, bShowPercent) {};

/**
 * Sets the possible values for the position of the chart tick labels in relation to the main vertical label or the chart data values.
 * @memberof ApiChart
 * @typeofeditors ["CSE"]
 * @param {TickLabelPosition} sTickLabelPosition - The type for the position of chart vertical tick labels.
 * */
ApiChart.prototype.SetVertAxisTickLabelPosition = function (sTickLabelPosition) {};

/**
 * Sets the possible values for the position of the chart tick labels in relation to the main horizontal label or the chart data values.
 * @memberof ApiChart
 * @typeofeditors ["CSE"]
 * @param {TickLabelPosition} sTickLabelPosition - The type for the position of chart horizontal tick labels.
 * */
ApiChart.prototype.SetHorAxisTickLabelPosition = function (sTickLabelPosition) {};

/**
 * Specifies the visual properties of the major vertical gridline.
 * @memberof ApiChart
 * @typeofeditors ["CSE"]
 * @param {?ApiStroke} oStroke - The stroke used to create the element shadow.
 * */
ApiChart.prototype.SetMajorVerticalGridlines = function (oStroke) {};

/**
 * Specifies the visual properties of the minor vertical gridline.
 * @memberof ApiChart
 * @typeofeditors ["CSE"]
 * @param {?ApiStroke} oStroke - The stroke used to create the element shadow.
 * */
ApiChart.prototype.SetMinorVerticalGridlines = function (oStroke) {};

/**
 * Specifies the visual properties of the major horizontal gridline.
 * @memberof ApiChart
 * @typeofeditors ["CSE"]
 * @param {?ApiStroke} oStroke - The stroke used to create the element shadow.
 * */
ApiChart.prototype.SetMajorHorizontalGridlines = function (oStroke) {};

/**
 * Specifies the visual properties of the minor vertical gridline.
 * @memberof ApiChart
 * @typeofeditors ["CSE"]
 * @param {?ApiStroke} oStroke - The stroke used to create the element shadow.
 */
ApiChart.prototype.SetMinorHorizontalGridlines = function (oStroke) {};

/**
 * Specifies the font size to the horizontal axis labels.
 * @memberof ApiChart
 * @typeofeditors ["CSE"]
 * @param {pt} nFontSize - The text size value measured in points.
 */
ApiChart.prototype.SetHorAxisLablesFontSize = function (nFontSize) {};

/**
 * Specifies the font size to the vertical axis labels.
 * @memberof ApiChart
 * @typeofeditors ["CSE"]
 * @param {pt} nFontSize - The text size value measured in points.
 */
ApiChart.prototype.SetVertAxisLablesFontSize = function (nFontSize) {};

/**
 * Sets a style to the current chart by style ID.
 * @memberof ApiChart
 * @typeofeditors ["CDE", "CPE", "CSE"]
 * @param nStyleId - One of the styles available in the editor.
 * @returns {boolean}
 */
ApiChart.prototype.ApplyChartStyle = function (nStyleId) { return true; };

/**
 * Sets values from the specified range to the specified series.
 * @memberof ApiChart
 * @typeofeditors ["CSE"]
 * @param {string} sRange - A range of cells from the sheet with series values. For example:
 * * "'sheet 1'!$A$2:$A$5" - must be a single cell, row or column,
 * * "A1:A5" - must be a single cell, row or column,
 * * "Example series".
 * @param {number} nSeria - The index of the chart series.
 * @returns {boolean}
 */
ApiChart.prototype.SetSeriaValues = function (sRange, nSeria) { return true; };

/**
 * Sets the x-axis values from the specified range to the specified series. It is used with the scatter charts only.
 * @memberof ApiChart
 * @typeofeditors ["CSE"]
 * @param {string} sRange - A range of cells from the sheet with series x-axis values. For example:
 * * "'sheet 1'!$A$2:$A$5" - must be a single cell, row or column,
 * * "A1:A5" - must be a single cell, row or column,
 * * "Example series".
 * @param {number} nSeria - The index of the chart series.
 * @returns {boolean}
 */
ApiChart.prototype.SetSeriaXValues = function (sRange, nSeria) { return true; };

/**
 * Sets a name to the specified series.
 * @memberof ApiChart
 * @typeofeditors ["CSE"]
 * @param {string} sNameRange - The series name. Can be a range of cells or usual text. For example:
 * * "'sheet 1'!$A$2:$A$5" - must be a single cell, row or column,
 * * "A1:A5" - must be a single cell, row or column,
 * * "Example series".
 * @param {number} nSeria - The index of the chart series.
 * @returns {boolean}
 */
ApiChart.prototype.SetSeriaName = function (sNameRange, nSeria) { return true; };

/**
 * Sets a range with the category values to the current chart.
 * @memberof ApiChart
 * @typeofeditors ["CSE"]
 * @param {string} sRange - A range of cells from the sheet with the category names. For example:
 * * "'sheet 1'!$A$2:$A$5" - must be a single cell, row or column,
 * * "A1:A5" - must be a single cell, row or column.
 */
ApiChart.prototype.SetCatFormula = function (sRange) {};

/**
 * Adds a new series to the current chart.
 * @memberof ApiChart
 * @typeofeditors ["CSE"]
 * @param {string} sNameRange - The series name. Can be a range of cells or usual text. For example:
 * * "'sheet 1'!$A$2:$A$5" - must be a single cell, row or column,
 * * "A1:A5" - must be a single cell, row or column,
 * * "Example series".
 * @param {string} sValuesRange - A range of cells from the sheet with series values. For example:
 * * "'sheet 1'!$A$2:$A$5" - must be a single cell, row or column,
 * * "A1:A5" - must be a single cell, row or column.
 * @param {string} [sXValuesRange=undefined] - A range of cells from the sheet with series x-axis values. It is used with the scatter charts only. For example:
 * * "'sheet 1'!$A$2:$A$5" - must be a single cell, row or column,
 * * "A1:A5" - must be a single cell, row or column.
 */
ApiChart.prototype.AddSeria = function (sNameRange, sValuesRange, sXValuesRange) {};

/**
 * Removes the specified series from the current chart.
 * @memberof ApiChart
 * @typeofeditors ["CDE", "CPE", "CSE"]
 * @param {number} nSeria - The index of the chart series.
 * @returns {boolean}
 */
ApiChart.prototype.RemoveSeria = function (nSeria) { return true; };

/**
 * Sets the fill to the chart plot area.
 * @memberof ApiChart
 * @typeofeditors ["CDE", "CPE", "CSE"]
 * @param {ApiFill} oFill - The fill type used to fill the plot area.
 * @returns {boolean}
 */
ApiChart.prototype.SetPlotAreaFill = function (oFill) { return true; };

/**
 * Sets the outline to the chart plot area.
 * @memberof ApiChart
 * @typeofeditors ["CDE", "CPE", "CSE"]
 * @param {ApiStroke} oStroke - The stroke used to create the plot area outline.
 * @returns {boolean}
 */
ApiChart.prototype.SetPlotAreaOutLine = function (oStroke) { return true; };

/**
 * Sets the fill to the specified chart series.
 * @memberof ApiChart
 * @typeofeditors ["CDE", "CPE", "CSE"]
 * @param {ApiFill} oFill - The fill type used to fill the series.
 * @param {number} nSeries - The index of the chart series.
 * @param {boolean} [bAll=false] - Specifies if the fill will be applied to all series.
 * @returns {boolean}
 */
ApiChart.prototype.SetSeriesFill = function (oFill, nSeries, bAll) { return true; };

/**
 * Sets the outline to the specified chart series.
 * @memberof ApiChart
 * @typeofeditors ["CDE", "CPE", "CSE"]
 * @param {ApiStroke} oStroke - The stroke used to create the series outline.
 * @param {number} nSeries - The index of the chart series.
 * @param {boolean} [bAll=false] - Specifies if the outline will be applied to all series.
 * @returns {boolean}
 */
ApiChart.prototype.SetSeriesOutLine = function (oStroke, nSeries, bAll) { return true; };

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
ApiChart.prototype.SetDataPointFill = function (oFill, nSeries, nDataPoint, bAllSeries) { return true; };

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
ApiChart.prototype.SetDataPointOutLine = function (oStroke, nSeries, nDataPoint, bAllSeries) { return true; };

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
ApiChart.prototype.SetMarkerFill = function (oFill, nSeries, nMarker, bAllMarkers) { return true; };

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
ApiChart.prototype.SetMarkerOutLine = function (oStroke, nSeries, nMarker, bAllMarkers) { return true; };

/**
 * Sets the fill to the chart title.
 * @memberof ApiChart
 * @typeofeditors ["CDE", "CPE", "CSE"]
 * @param {ApiFill} oFill - The fill type used to fill the title.
 * @returns {boolean}
 */
ApiChart.prototype.SetTitleFill = function (oFill) { return true; };

/**
 * Sets the outline to the chart title.
 * @memberof ApiChart
 * @typeofeditors ["CDE", "CPE", "CSE"]
 * @param {ApiStroke} oStroke - The stroke used to create the title outline.
 * @returns {boolean}
 */
ApiChart.prototype.SetTitleOutLine = function (oStroke) { return true; };

/**
 * Sets the fill to the chart legend.
 * @memberof ApiChart
 * @typeofeditors ["CDE", "CPE", "CSE"]
 * @param {ApiFill} oFill - The fill type used to fill the legend.
 * @returns {boolean}
 */
ApiChart.prototype.SetLegendFill = function (oFill) { return true; };

/**
 * Sets the outline to the chart legend.
 * @memberof ApiChart
 * @typeofeditors ["CDE", "CPE", "CSE"]
 * @param {ApiStroke} oStroke - The stroke used to create the legend outline.
 * @returns {boolean}
 */
ApiChart.prototype.SetLegendOutLine = function (oStroke) { return true; };

/**
 * Sets the specified numeric format to the axis values.
 * @memberof ApiChart
 * @typeofeditors ["CDE", "CPE", "CSE"]
 * @param {NumFormat | String} sFormat - Numeric format (can be custom format).
 * @param {AxisPos} - Axis position.
 * @returns {boolean}
 */
ApiChart.prototype.SetAxieNumFormat = function (sFormat, sAxiePos) { return true; };

/**
 * Returns a type of the ApiOleObject class.
 * @memberof ApiOleObject
 * @typeofeditors ["CDE", "CPE", "CSE"]
 * @returns {"oleObject"}
 */
ApiOleObject.prototype.GetClassType = function () { return ""; };

/**
 * Sets the data to the current OLE object.
 * @memberof ApiOleObject
 * @typeofeditors ["CDE", "CPE", "CSE"]
 * @param {string} sData - The OLE object string data.
 * @returns {boolean}
 */
ApiOleObject.prototype.SetData = function (sData) { return true; };

/**
 * Returns the string data from the current OLE object.
 * @memberof ApiOleObject
 * @typeofeditors ["CDE", "CPE", "CSE"]
 * @returns {string}
 */
ApiOleObject.prototype.GetData = function () { return ""; };

/**
 * Sets the application ID to the current OLE object.
 * @memberof ApiOleObject
 * @typeofeditors ["CDE", "CPE", "CSE"]
 * @param {string} sAppId - The application ID associated with the current OLE object.
 * @returns {boolean}
 */
ApiOleObject.prototype.SetApplicationId = function (sAppId) { return true; };

/**
 * Returns the application ID from the current OLE object.
 * @memberof ApiOleObject
 * @typeofeditors ["CDE", "CPE", "CSE"]
 * @returns {string}
 */
ApiOleObject.prototype.GetApplicationId = function () { return ""; };

/**
 * Returns a type of the ApiColor class.
 * @memberof ApiColor
 * @typeofeditors ["CSE"]
 * @returns {"color"}
 */
ApiColor.prototype.GetClassType = function () { return ""; };

/**
 * Returns a type of the ApiName class.
 * @memberof ApiName
 * @typeofeditors ["CSE"]
 * @returns {string}
 */
ApiName.prototype.GetName = function () { return ""; };

/**
 * Sets a string value representing the object name.
 * @memberof ApiName
 * @typeofeditors ["CSE"]
 * @param {string} sName - New name for the range.
 * @returns {boolean} - returns false if sName is invalid.
 */
ApiName.prototype.SetName = function (sName) { return true; };

/**
 * Sets a string value representing the object name.
 * @memberof ApiName
 * @typeofeditors ["CSE"]
 * @param {string} sName - New name for the range.
 * @returns {boolean} - returns false if sName is invalid.
 */
ApiName.prototype.Name = ApiName.prototype.SetName ();

/**
 * Deletes the DefName object.
 * @memberof ApiName
 * @typeofeditors ["CSE"]
 */
ApiName.prototype.Delete = function () {};

/**
 * Sets a formula that the name is defined to refer to.
 * @memberof ApiName
 * @typeofeditors ["CSE"]
 * @param {string} sRef    - The range reference which must contain the sheet name, followed by sign ! and a range of cells.
 * Example: "Sheet1!$A$1:$B$2".
 */
ApiName.prototype.SetRefersTo = function (sRef) {};

/**
 * Returns a formula that the name is defined to refer to.
 * @memberof ApiName
 * @typeofeditors ["CSE"]
 * @returns {string}
 */
ApiName.prototype.GetRefersTo = function () { return ""; };

/**
 * Returns a formula that the name is defined to refer to.
 * @memberof ApiName
 * @typeofeditors ["CSE"]
 * @returns {string}
 */
ApiName.prototype.RefersTo = ApiName.prototype.GetRefersTo ();

/**
 * Returns the ApiRange object by its name.
 * @memberof ApiName
 * @typeofeditors ["CSE"]
 * @returns {ApiRange}
 */
ApiName.prototype.GetRefersToRange = function () { return new ApiRange(); };

/**
 * Returns the ApiRange object by its name.
 * @memberof ApiName
 * @typeofeditors ["CSE"]
 * @returns {ApiRange}
 */
ApiName.prototype.RefersToRange = ApiName.prototype.GetRefersToRange ();

/**
 * Returns a type of the ApiComment class.
 * @memberof ApiComment
 * @typeofeditors ["CSE"]
 * @returns {"comment"}
 */
ApiComment.prototype.GetClassType = function () { return ""; };

/**
 * Returns the comment text.
 * @memberof ApiComment
 * @typeofeditors ["CSE"]
 * @returns {string}
 */
ApiComment.prototype.GetText = function () { return ""; };

/**
 * Sets the comment text.
 * @memberof ApiComment
 * @typeofeditors ["CSE"]
 * @param {string} text - New text for comment.
 * @since 7.5.0
 */
ApiComment.prototype.SetText = function (text) {};

/**
 * Sets the comment text.
 * @memberof ApiComment
 * @typeofeditors ["CSE"]
 * @param {string} text - New text for comment.
 * @since 7.5.0
 */
ApiComment.prototype.Text = ApiComment.prototype.SetText ();

/**
 * Returns the current comment ID.
 * @memberof ApiComment
 * @typeofeditors ["CSE"]
 * @returns {string}
 * @since 7.5.0
 */
ApiComment.prototype.GetId = function () { return ""; };

/**
 * Returns the current comment ID.
 * @memberof ApiComment
 * @typeofeditors ["CSE"]
 * @returns {string}
 * @since 7.5.0
 */
ApiComment.prototype.Id = ApiComment.prototype.GetId ();

/**
 * Returns the comment author's name.
 * @memberof ApiComment
 * @typeofeditors ["CSE"]
 * @returns {string}
 * @since 7.5.0
 */
ApiComment.prototype.GetAuthorName = function () { return ""; };

/**
 * Sets the comment author's name.
 * @memberof ApiComment
 * @typeofeditors ["CSE"]
 * @param {string} sAuthorName - The comment author's name.
 * @since 7.5.0
 */
ApiComment.prototype.SetAuthorName = function (sAuthorName) {};

/**
 * Sets the comment author's name.
 * @memberof ApiComment
 * @typeofeditors ["CSE"]
 * @param {string} sAuthorName - The comment author's name.
 * @since 7.5.0
 */
ApiComment.prototype.AuthorName = ApiComment.prototype.SetAuthorName ();

/**
 * Returns the user ID of the comment author.
 * @memberof ApiComment
 * @typeofeditors ["CSE"]
 * @returns {string}
 * @since 7.5.0
 */
ApiComment.prototype.GetUserId = function () { return ""; };

/**
 * Sets the user ID to the comment author.
 * @memberof ApiComment
 * @typeofeditors ["CSE"]
 * @param {string} sUserId - The user ID of the comment author.
 * @since 7.5.0
 */
ApiComment.prototype.SetUserId = function (sUserId) {};

/**
 * Sets the user ID to the comment author.
 * @memberof ApiComment
 * @typeofeditors ["CSE"]
 * @param {string} sUserId - The user ID of the comment author.
 * @since 7.5.0
 */
ApiComment.prototype.UserId = ApiComment.prototype.SetUserId ();

/**
 * Checks if a comment is solved or not.
 * @memberof ApiComment
 * @typeofeditors ["CSE"]
 * @returns {boolean}
 * @since 7.5.0
 */
ApiComment.prototype.IsSolved = function () { return true; };

/**
 * Marks a comment as solved.
 * @memberof ApiComment
 * @typeofeditors ["CSE"]
 * @param {boolean} bSolved - Specifies if a comment is solved or not.
 * @since 7.5.0
 */
ApiComment.prototype.SetSolved = function (bSolved) {};

/**
 * Marks a comment as solved.
 * @memberof ApiComment
 * @typeofeditors ["CSE"]
 * @param {boolean} bSolved - Specifies if a comment is solved or not.
 * @since 7.5.0
 */
ApiComment.prototype.Solved = ApiComment.prototype.SetSolved ();

/**
 * Returns the timestamp of the comment creation in UTC format.
 * @memberof ApiComment
 * @typeofeditors ["CSE"]
 * @returns {Number}
 * @since 7.5.0
 */
ApiComment.prototype.GetTimeUTC = function () { return 0; };

/**
 * Sets the timestamp of the comment creation in UTC format.
 * @memberof ApiComment
 * @typeofeditors ["CSE"]
 * @param {Number | String} nTimeStamp - The timestamp of the comment creation in UTC format.
 * @since 7.5.0
 */
ApiComment.prototype.SetTimeUTC = function (timeStamp) {};

/**
 * Sets the timestamp of the comment creation in UTC format.
 * @memberof ApiComment
 * @typeofeditors ["CSE"]
 * @param {Number | String} nTimeStamp - The timestamp of the comment creation in UTC format.
 * @since 7.5.0
 */
ApiComment.prototype.TimeUTC = ApiComment.prototype.SetTimeUTC ();

/**
 * Returns the timestamp of the comment creation in the current time zone format.
 * @memberof ApiComment
 * @typeofeditors ["CSE"]
 * @returns {Number}
 * @since 7.5.0
 */
ApiComment.prototype.GetTime = function () { return 0; };

/**
 * Sets the timestamp of the comment creation in the current time zone format.
 * @memberof ApiComment
 * @typeofeditors ["CSE"]
 * @param {Number | String} nTimeStamp - The timestamp of the comment creation in the current time zone format.
 * @since 7.5.0
 */
ApiComment.prototype.SetTime = function (timeStamp) {};

/**
 * Sets the timestamp of the comment creation in the current time zone format.
 * @memberof ApiComment
 * @typeofeditors ["CSE"]
 * @param {Number | String} nTimeStamp - The timestamp of the comment creation in the current time zone format.
 * @since 7.5.0
 */
ApiComment.prototype.Time = ApiComment.prototype.SetTime ();

/**
 * Returns the quote text of the current comment.
 * @memberof ApiComment
 * @typeofeditors ["CSE"]
 * @returns {String | null}
 * @since 7.5.0
 */
ApiComment.prototype.GetQuoteText = function () { return ""; };

/**
 * Returns the quote text of the current comment.
 * @memberof ApiComment
 * @typeofeditors ["CSE"]
 * @returns {String | null}
 * @since 7.5.0
 */
ApiComment.prototype.QuoteText = ApiComment.prototype.GetQuoteText ();

/**
 * Returns a number of the comment replies.
 * @memberof ApiComment
 * @typeofeditors ["CSE"]
 * @returns {Number}
 * @since 7.5.0
 */
ApiComment.prototype.GetRepliesCount = function () { return 0; };

/**
 * Returns a number of the comment replies.
 * @memberof ApiComment
 * @typeofeditors ["CSE"]
 * @returns {Number}
 * @since 7.5.0
 */
ApiComment.prototype.RepliesCount = ApiComment.prototype.GetRepliesCount ();

/**
 * Returns the specified comment reply.
 * @memberof ApiComment
 * @typeofeditors ["CSE"]
 * @param {Number} [nIndex = 0] - The comment reply index.
 * @returns {ApiCommentReply}
 * @since 7.5.0
 */
ApiComment.prototype.GetReply = function (nIndex) { return new ApiCommentReply(); };

/**
 * Adds a reply to a comment.
 * @memberof ApiComment
 * @typeofeditors ["CSE"]
 * @param {String} sText - The comment reply text (required).
 * @param {String} sAuthorName - The name of the comment reply author (optional).
 * @param {String} sUserId - The user ID of the comment reply author (optional).
 * @param {Number} [nPos=this.GetRepliesCount()] - The comment reply position.
 * @since 7.5.0
 */
ApiComment.prototype.AddReply = function (sText, sAuthorName, sUserId, nPos) {};

/**
 * Removes the specified comment replies.
 * @memberof ApiComment
 * @typeofeditors ["CSE"]
 * @param {Number} [nPos = 0] - The position of the first comment reply to remove.
 * @param {Number} [nCount = 1] - A number of comment replies to remove.
 * @param {boolean} [bRemoveAll = false] - Specifies whether to remove all comment replies or not.
 * @since 7.5.0
 */
ApiComment.prototype.RemoveReplies = function (nPos, nCount, bRemoveAll) {};

/**
 * Deletes the ApiComment object.
 * @memberof ApiComment
 * @typeofeditors ["CSE"]
 */
ApiComment.prototype.Delete = function () {};

/**
 * Returns a type of the ApiCommentReply class.
 * @memberof ApiCommentReply
 * @typeofeditors ["CSE"]
 * @returns {"commentReply"}
 * @since 7.5.0
 */
ApiCommentReply.prototype.GetClassType = function () { return ""; };

/**
 * Returns the comment reply text.
 * @memberof ApiCommentReply
 * @typeofeditors ["CSE"]
 * @returns {string}
 * @since 7.5.0
 */
ApiCommentReply.prototype.GetText = function () { return ""; };

/**
 * Sets the comment reply text.
 * @memberof ApiCommentReply
 * @typeofeditors ["CSE"]
 * @param {string} sText - The comment reply text.
 * @since 7.5.0
 */
ApiCommentReply.prototype.SetText = function (sText) {};

/**
 * Sets the comment reply text.
 * @memberof ApiCommentReply
 * @typeofeditors ["CSE"]
 * @param {string} sText - The comment reply text.
 * @since 7.5.0
 */
ApiCommentReply.prototype.Text = ApiCommentReply.prototype.SetText ();

/**
 * Returns the comment reply author's name.
 * @memberof ApiCommentReply
 * @typeofeditors ["CSE"]
 * @returns {string}
 * @since 7.5.0
 */
ApiCommentReply.prototype.GetAuthorName = function () { return ""; };

/**
 * Sets the comment reply author's name.
 * @memberof ApiCommentReply
 * @typeofeditors ["CSE"]
 * @param {string} sAuthorName - The comment reply author's name.
 * @since 7.5.0
 */
ApiCommentReply.prototype.SetAuthorName = function (sAuthorName) {};

/**
 * Sets the comment reply author's name.
 * @memberof ApiCommentReply
 * @typeofeditors ["CSE"]
 * @param {string} sAuthorName - The comment reply author's name.
 * @since 7.5.0
 */
ApiCommentReply.prototype.AuthorName = ApiCommentReply.prototype.SetAuthorName ();

/**
 * Returns the user ID of the comment reply author.
 * @memberof ApiCommentReply
 * @typeofeditors ["CSE"]
 * @returns {string}
 * @since 7.5.0
 */
ApiCommentReply.prototype.GetUserId = function () { return ""; };

/**
 * Sets the user ID to the comment reply author.
 * @memberof ApiCommentReply
 * @typeofeditors ["CSE"]
 * @param {string} sUserId - The user ID of the comment reply author.
 * @since 7.5.0
 */
ApiCommentReply.prototype.SetUserId = function (sUserId) {};

/**
 * Sets the user ID to the comment reply author.
 * @memberof ApiCommentReply
 * @typeofeditors ["CSE"]
 * @param {string} sUserId - The user ID of the comment reply author.
 * @since 7.5.0
 */
ApiCommentReply.prototype.UserId = ApiCommentReply.prototype.SetUserId ();

/**
 * Returns the timestamp of the comment reply creation in UTC format.
 * @memberof ApiCommentReply
 * @typeofeditors ["CSE"]
 * @returns {Number}
 * @since 7.5.0
 */
ApiCommentReply.prototype.GetTimeUTC = function () { return 0; };

/**
 * Sets the timestamp of the comment reply creation in UTC format.
 * @memberof ApiCommentReply
 * @typeofeditors ["CSE"]
 * @param {Number | String} nTimeStamp - The timestamp of the comment reply creation in UTC format.
 * @since 7.5.0
 */
ApiCommentReply.prototype.SetTimeUTC = function (timeStamp) {};

/**
 * Sets the timestamp of the comment reply creation in UTC format.
 * @memberof ApiCommentReply
 * @typeofeditors ["CSE"]
 * @param {Number | String} nTimeStamp - The timestamp of the comment reply creation in UTC format.
 * @since 7.5.0
 */
ApiCommentReply.prototype.TimeUTC = ApiCommentReply.prototype.SetTimeUTC ();

/**
 * Returns the timestamp of the comment reply creation in the current time zone format.
 * @memberof ApiCommentReply
 * @typeofeditors ["CSE"]
 * @returns {Number}
 * @since 7.5.0
 */
ApiCommentReply.prototype.GetTime = function () { return 0; };

/**
 * Sets the timestamp of the comment reply creation in the current time zone format.
 * @memberof ApiCommentReply
 * @typeofeditors ["CSE"]
 * @param {Number | String} nTimeStamp - The timestamp of the comment reply creation in the current time zone format.
 * @since 7.5.0
 */
ApiCommentReply.prototype.SetTime = function (timeStamp) {};

/**
 * Sets the timestamp of the comment reply creation in the current time zone format.
 * @memberof ApiCommentReply
 * @typeofeditors ["CSE"]
 * @param {Number | String} nTimeStamp - The timestamp of the comment reply creation in the current time zone format.
 * @since 7.5.0
 */
ApiCommentReply.prototype.Time = ApiCommentReply.prototype.SetTime ();

/**
 * Returns a value that represents the number of objects in the collection.
 * @memberof ApiAreas
 * @typeofeditors ["CSE"]
 * @returns {number}
 */
ApiAreas.prototype.GetCount = function () { return 0; };

/**
 * Returns a value that represents the number of objects in the collection.
 * @memberof ApiAreas
 * @typeofeditors ["CSE"]
 * @returns {number}
 */
ApiAreas.prototype.Count = ApiAreas.prototype.GetCount ();

/**
 * Returns a single object from a collection by its ID.
 * @memberof ApiAreas
 * @typeofeditors ["CSE"]
 * @param {number} ind - The index number of the object.
 * @returns {ApiRange}
 */
ApiAreas.prototype.GetItem = function (ind) { return new ApiRange(); };

/**
 * Returns the parent object for the specified collection.
 * @memberof ApiAreas
 * @typeofeditors ["CSE"]
 * @returns {number}
 */
ApiAreas.prototype.GetParent = function () { return 0; };

/**
 * Returns the parent object for the specified collection.
 * @memberof ApiAreas
 * @typeofeditors ["CSE"]
 * @returns {number}
 */
ApiAreas.prototype.Parent = ApiAreas.prototype.GetParent ();

/**
 * Returns a value that represents a number of objects in the collection.
 * @memberof ApiCharacters
 * @typeofeditors ["CSE"]
 * @returns {number}
 * @since 7.4.0
 */
ApiCharacters.prototype.GetCount = function () { return 0; };

/**
 * Returns a value that represents a number of objects in the collection.
 * @memberof ApiCharacters
 * @typeofeditors ["CSE"]
 * @returns {number}
 * @since 7.4.0
 */
ApiCharacters.prototype.Count = ApiCharacters.prototype.GetCount ();

/**
 * Returns the parent object of the specified characters.
 * @memberof ApiCharacters
 * @typeofeditors ["CSE"]
 * @returns {ApiRange}
 * @since 7.4.0
 */
ApiCharacters.prototype.GetParent = function () { return new ApiRange(); };

/**
 * Returns the parent object of the specified characters.
 * @memberof ApiCharacters
 * @typeofeditors ["CSE"]
 * @returns {ApiRange}
 * @since 7.4.0
 */
ApiCharacters.prototype.Parent = ApiCharacters.prototype.GetParent ();

/**
 * Deletes the ApiCharacters object.
 * @memberof ApiCharacters
 * @typeofeditors ["CSE"]
 * @since 7.4.0
 */
ApiCharacters.prototype.Delete = function () {};

/**
 * Inserts a string replacing the specified characters.
 * @memberof ApiCharacters
 * @typeofeditors ["CSE"]
 * @param {string} String - The string to insert.
 * @since 7.4.0
 */
ApiCharacters.prototype.Insert = function (String) {};

/**
 * Sets a string value that represents the text of the specified range of characters.
 * @memberof ApiCharacters
 * @typeofeditors ["CSE"]
 * @param {string} Caption - A string value that represents the text of the specified range of characters.
 * @since 7.4.0
 */
ApiCharacters.prototype.SetCaption = function (Caption) {};

/**
 * Returns a string value that represents the text of the specified range of characters.
 * @memberof ApiCharacters
 * @typeofeditors ["CSE"]
 * @returns {string} - A string value that represents the text of the specified range of characters.
 * @since 7.4.0
 */
ApiCharacters.prototype.GetCaption = function () { return ""; };

/**
 * Returns a string value that represents the text of the specified range of characters.
 * @memberof ApiCharacters
 * @typeofeditors ["CSE"]
 * @returns {string} - A string value that represents the text of the specified range of characters.
 * @since 7.4.0
 */
ApiCharacters.prototype.Caption = ApiCharacters.prototype.GetCaption ();

/**
 * Sets the text for the specified characters.
 * @memberof ApiCharacters
 * @typeofeditors ["CSE"]
 * @param {string} Text - The text to be set.
 * @since 7.4.0
 */
ApiCharacters.prototype.SetText = function (Text) {};

/**
 * Returns the text of the specified range of characters.
 * @memberof ApiCharacters
 * @typeofeditors ["CSE"]
 * @returns {string} - The text of the specified range of characters.
 * @since 7.4.0
 */
ApiCharacters.prototype.GetText = function () { return ""; };

/**
 * Returns the text of the specified range of characters.
 * @memberof ApiCharacters
 * @typeofeditors ["CSE"]
 * @returns {string} - The text of the specified range of characters.
 * @since 7.4.0
 */
ApiCharacters.prototype.Text = ApiCharacters.prototype.GetText ();

/**
 * Returns the ApiFont object that represents the font of the specified characters.
 * @memberof ApiCharacters
 * @typeofeditors ["CSE"]
 * @returns {ApiFont}
 * @since 7.4.0
 */
ApiCharacters.prototype.GetFont = function () { return new ApiFont(); };

/**
 * Returns the ApiFont object that represents the font of the specified characters.
 * @memberof ApiCharacters
 * @typeofeditors ["CSE"]
 * @returns {ApiFont}
 * @since 7.4.0
 */
ApiCharacters.prototype.Font = ApiCharacters.prototype.GetFont ();

/**
 * Returns the parent ApiCharacters object of the specified font.
 * @memberof ApiFont
 * @typeofeditors ["CSE"]
 * @returns {ApiCharacters} - The parent ApiCharacters object.
 * @since 7.4.0
 */
ApiFont.prototype.GetParent = function () { return new ApiCharacters(); };

/**
 * Returns the parent ApiCharacters object of the specified font.
 * @memberof ApiFont
 * @typeofeditors ["CSE"]
 * @returns {ApiCharacters} - The parent ApiCharacters object.
 * @since 7.4.0
 */
ApiFont.prototype.Parent = ApiFont.prototype.GetParent ();

/**
 * Returns the bold property of the specified font.
 * @memberof ApiFont
 * @typeofeditors ["CSE"]
 * @returns {boolean | null}
 * @since 7.4.0
 */
ApiFont.prototype.GetBold = function () { return true; };

/**
 * Sets the bold property to the specified font.
 * <note>This method will work only with the text format of the cell.</note>
 * @memberof ApiFont
 * @typeofeditors ["CSE"]
 * @param {boolean} isBold - Specifies that the text characters are displayed bold.
 * @since 7.4.0
 */
ApiFont.prototype.SetBold = function (isBold) {};

/**
 * Sets the bold property to the specified font.
 * <note>This method will work only with the text format of the cell.</note>
 * @memberof ApiFont
 * @typeofeditors ["CSE"]
 * @param {boolean} isBold - Specifies that the text characters are displayed bold.
 * @since 7.4.0
 */
ApiFont.prototype.Bold = ApiFont.prototype.SetBold ();

/**
 * Returns the italic property of the specified font.
 * @memberof ApiFont
 * @typeofeditors ["CSE"]
 * @returns {boolean | null}
 * @since 7.4.0
 */
ApiFont.prototype.GetItalic = function () { return true; };

/**
 * Sets the italic property to the specified font.
 * <note>This method will work only with the text format of the cell.</note>
 * @memberof ApiFont
 * @typeofeditors ["CSE"]
 * @param {boolean} isItalic - Specifies that the text characters are displayed italic.
 * @since 7.4.0
 */
ApiFont.prototype.SetItalic = function (isItalic) {};

/**
 * Sets the italic property to the specified font.
 * <note>This method will work only with the text format of the cell.</note>
 * @memberof ApiFont
 * @typeofeditors ["CSE"]
 * @param {boolean} isItalic - Specifies that the text characters are displayed italic.
 * @since 7.4.0
 */
ApiFont.prototype.Italic = ApiFont.prototype.SetItalic ();

/**
 * Returns the font size property of the specified font.
 * @memberof ApiFont
 * @typeofeditors ["CSE"]
 * @returns {number | null}
 * @since 7.4.0
 */
ApiFont.prototype.GetSize = function () { return 0; };

/**
 * Sets the font size property to the specified font.
 * <note>This method will work only with the text format of the cell.</note>
 * @memberof ApiFont
 * @typeofeditors ["CSE"]
 * @param {number} Size - Font size.
 * @since 7.4.0
 */
ApiFont.prototype.SetSize = function (Size) {};

/**
 * Sets the font size property to the specified font.
 * <note>This method will work only with the text format of the cell.</note>
 * @memberof ApiFont
 * @typeofeditors ["CSE"]
 * @param {number} Size - Font size.
 * @since 7.4.0
 */
ApiFont.prototype.Size = ApiFont.prototype.SetSize ();

/**
 * Returns the strikethrough property of the specified font.
 * @memberof ApiFont
 * @typeofeditors ["CSE"]
 * @returns {boolean | null}
 * @since 7.4.0
 */
ApiFont.prototype.GetStrikethrough = function () { return true; };

/**
 * Sets the strikethrough property to the specified font.
 * <note>This method will work only with the text format of the cell.</note>
 * @memberof ApiFont
 * @typeofeditors ["CSE"]
 * @param {boolean} isStrikethrough - Specifies that the text characters are displayed strikethrough.
 * @since 7.4.0
 */
ApiFont.prototype.SetStrikethrough = function (isStrikethrough) {};

/**
 * Sets the strikethrough property to the specified font.
 * <note>This method will work only with the text format of the cell.</note>
 * @memberof ApiFont
 * @typeofeditors ["CSE"]
 * @param {boolean} isStrikethrough - Specifies that the text characters are displayed strikethrough.
 * @since 7.4.0
 */
ApiFont.prototype.Strikethrough = ApiFont.prototype.SetStrikethrough ();

/**
 * Underline type.
 * @typedef {("xlUnderlineStyleDouble" | "xlUnderlineStyleDoubleAccounting" | "xlUnderlineStyleNone" | "xlUnderlineStyleSingle" | "xlUnderlineStyleSingleAccounting")} XlUnderlineStyle
 */

/**
 * Returns the type of underline applied to the specified font.
 * @memberof ApiFont
 * @typeofeditors ["CSE"]
 * @returns {XlUnderlineStyle | null}
 * @since 7.4.0
 */
ApiFont.prototype.GetUnderline = function () { return new XlUnderlineStyle(); };

/**
 * Sets an underline of the type specified in the request to the current font.
 * <note>This method will work only with the text format of the cell.</note>
 * @memberof ApiFont
 * @typeofeditors ["CSE"]
 * @param {XlUnderlineStyle} Underline - Underline type.
 * @since 7.4.0
 */
ApiFont.prototype.SetUnderline = function (Underline) {};

/**
 * Sets an underline of the type specified in the request to the current font.
 * <note>This method will work only with the text format of the cell.</note>
 * @memberof ApiFont
 * @typeofeditors ["CSE"]
 * @param {XlUnderlineStyle} Underline - Underline type.
 * @since 7.4.0
 */
ApiFont.prototype.Underline = ApiFont.prototype.SetUnderline ();

/**
 * Returns the subscript property of the specified font.
 * @memberof ApiFont
 * @typeofeditors ["CSE"]
 * @returns {boolean | null}
 * @since 7.4.0
 */
ApiFont.prototype.GetSubscript = function () { return true; };

/**
 * Sets the subscript property to the specified font.
 * <note>This method will work only with the text format of the cell.</note>
 * @memberof ApiFont
 * @typeofeditors ["CSE"]
 * @param {boolean} isSubscript - Specifies that the text characters are displayed subscript.
 * @since 7.4.0
 */
ApiFont.prototype.SetSubscript = function (isSubscript) {};

/**
 * Sets the subscript property to the specified font.
 * <note>This method will work only with the text format of the cell.</note>
 * @memberof ApiFont
 * @typeofeditors ["CSE"]
 * @param {boolean} isSubscript - Specifies that the text characters are displayed subscript.
 * @since 7.4.0
 */
ApiFont.prototype.Subscript = ApiFont.prototype.SetSubscript ();

/**
 * Returns the superscript property of the specified font.
 * @memberof ApiFont
 * @typeofeditors ["CSE"]
 * @returns {boolean | null}
 * @since 7.4.0
 */
ApiFont.prototype.GetSuperscript = function () { return true; };

/**
 * Sets the superscript property to the specified font.
 * <note>This method will work only with the text format of the cell.</note>
 * @memberof ApiFont
 * @typeofeditors ["CSE"]
 * @param {boolean} isSuperscript - Specifies that the text characters are displayed superscript.
 * @since 7.4.0
 */
ApiFont.prototype.SetSuperscript = function (isSuperscript) {};

/**
 * Sets the superscript property to the specified font.
 * <note>This method will work only with the text format of the cell.</note>
 * @memberof ApiFont
 * @typeofeditors ["CSE"]
 * @param {boolean} isSuperscript - Specifies that the text characters are displayed superscript.
 * @since 7.4.0
 */
ApiFont.prototype.Superscript = ApiFont.prototype.SetSuperscript ();

/**
 * Returns the font name property of the specified font.
 * @memberof ApiFont
 * @typeofeditors ["CSE"]
 * @returns {string | null}
 * @since 7.4.0
 */
ApiFont.prototype.GetName = function () { return ""; };

/**
 * Sets the font name property to the specified font.
 * <note>This method will work only with the text format of the cell.</note>
 * @memberof ApiFont
 * @typeofeditors ["CSE"]
 * @param {string} FontName - Font name.
 * @since 7.4.0
 */
ApiFont.prototype.SetName = function (FontName) {};

/**
 * Sets the font name property to the specified font.
 * <note>This method will work only with the text format of the cell.</note>
 * @memberof ApiFont
 * @typeofeditors ["CSE"]
 * @param {string} FontName - Font name.
 * @since 7.4.0
 */
ApiFont.prototype.Name = ApiFont.prototype.SetName ();

/**
 * Returns the font color property of the specified font.
 * @memberof ApiFont
 * @typeofeditors ["CSE"]
 * @returns {ApiColor | null}
 * @since 7.4.0
 */
ApiFont.prototype.GetColor = function () { return new ApiColor(); };

/**
 * Sets the font color property to the specified font.
 * <note>This method will work only with the text format of the cell.</note>
 * @memberof ApiFont
 * @typeofeditors ["CSE"]
 * @param {ApiColor} Color - Font color.
 * @since 7.4.0
 */
ApiFont.prototype.SetColor = function (Color) {};

/**
 * Sets the font color property to the specified font.
 * <note>This method will work only with the text format of the cell.</note>
 * @memberof ApiFont
 * @typeofeditors ["CSE"]
 * @param {ApiColor} Color - Font color.
 * @since 7.4.0
 */
ApiFont.prototype.Color = ApiFont.prototype.SetColor ();

/**
 * Sets the frozen cells in the active worksheet view. The range provided corresponds to the cells that will be frozen in the top- and left-most pane.
 * @memberof ApiFreezePanes
 * @typeofeditors ["CSE"]
 * @param {ApiRange | String} frozenRange - A range that represents the cells to be frozen.
 * @since 8.0.0
 */
ApiFreezePanes.prototype.FreezeAt = function (frozenRange) {};

/**
 * Freezes the first column or columns of the current worksheet.
 * @memberof ApiFreezePanes
 * @typeofeditors ["CSE"]
 * @param {Number} [count=0] - Optional number of columns to freeze, or zero to unfreeze all columns.
 * @since 8.0.0
 */
ApiFreezePanes.prototype.FreezeColumns = function (count) {};

/**
 * Freezes the top row or rows of the current worksheet.
 * @memberof ApiFreezePanes
 * @typeofeditors ["CSE"]
 * @param {Number} [count=0] - Optional number of rows to freeze, or zero to unfreeze all rows.
 * @since 8.0.0
 */
ApiFreezePanes.prototype.FreezeRows = function (count) {};

/**
 * Returns a range that describes the frozen cells in the active worksheet view.
 * @memberof ApiFreezePanes
 * @typeofeditors ["CSE"]
 * @returns {ApiRange | null} - Returns null if there is no frozen pane.
 * @since 8.0.0
 */
ApiFreezePanes.prototype.GetLocation = function () { return new ApiRange(); };

/**
 * Class representing a user-protected range.
 * @constructor
 */
function ApiProtectedRange(protectedRange) {}

/**
 * Sets a title to the current protected range.
 * @memberof ApiProtectedRange
 * @typeofeditors ["CSE"]
 * @param {string} sTitle - The title which will be displayed for the current protected range.
 * @returns {boolean} - Returns false if a user doesn't have permission to modify the protected range.
 * @since 8.1.0
 */
ApiProtectedRange.prototype.SetTitle = function (sTitle) { return true; };

/**
 * Sets a range to the current protected range.
 * @memberof ApiProtectedRange
 * @typeofeditors ["CSE"]
 * @param {string} sRange - The cell range which will be set for the current protected range.
 * @returns {boolean} - Returns false if a user doesn't have permission to modify the protected range.
 * @since 8.1.0
 */
ApiProtectedRange.prototype.SetRange = function (sRange) { return true; };

/**
 * Specifies the user type of the protected range.
 * @typedef {("CanEdit" | "CanView" | "NotView")} ProtectedRangeUserType
 */

/**
 * Sets a user to the current protected range.
 * @memberof ApiProtectedRange
 * @typeofeditors ["CSE"]
 * @param {string} sId - The user ID.
 * @param {string} sName - The user name.
 * @param {ProtectedRangeUserType} protectedRangeUserType - The user type of the protected range.
 * @returns {ApiProtectedRangeUserInfo | null} - Returns null if a user doesn't have permission to modify the protected range.
 * @since 8.1.0
 */
ApiProtectedRange.prototype.AddUser = function (sId, sName, protectedRangeUserType) { return new ApiProtectedRangeUserInfo(); };

/**
 * Removes a user from the current protected range.
 * @memberof ApiProtectedRange
 * @param {string} sId - The user ID.
 * @returns {bool}
 * @since 8.1.0
 */
ApiProtectedRange.prototype.DeleteUser = function (sId) { return true; };

/**
 * Returns all users from the current protected range.
 * @memberof ApiProtectedRange
 * @typeofeditors ["CSE"]
 * @returns {ApiProtectedRangeUserInfo[] | null}
 * @since 8.1.0
 */
ApiProtectedRange.prototype.GetAllUsers = function () { return [new ApiProtectedRangeUserInfo()]; };

/**
 * Sets the type of the "Anyone" user to the current protected range.
 * @memberof ApiProtectedRange
 * @typeofeditors ["CSE"]
 * @param {ProtectedRangeUserType} protectedRangeUserType - The user type of the protected range.
 * @returns {bool}
 * @since 8.1.0
 */
ApiProtectedRange.prototype.SetAnyoneType = function (protectedRangeUserType) { return true; };

/**
 * Returns an object that represents a user from the current protected range.
 * @memberof ApiProtectedRange
 * @param {string} sId - The user ID.
 * @returns {ApiProtectedRangeUserInfo | null}
 * @since 8.1.0
 */
ApiProtectedRange.prototype.GetUser = function (sId) { return new ApiProtectedRangeUserInfo(); };

/**
 * Class representing a user from the current protected range.
 * @constructor
 */
function ApiProtectedRangeUserInfo(userInfo, protectedRange) {}

/**
 * Returns the name property of the current user's information.
 * @memberof ApiProtectedRangeUserInfo
 * @typeofeditors ["CSE"]
 * @returns {string | null}
 * @since 8.1.0
 */
ApiProtectedRangeUserInfo.prototype.GetName = function () { return ""; };

/**
 * Returns the type property of the current user's information.
 * @memberof ApiProtectedRangeUserInfo
 * @typeofeditors ["CSE"]
 * @returns {ProtectedRangeUserType}
 * @since 8.1.0
 */
ApiProtectedRangeUserInfo.prototype.GetType = function () { return new ProtectedRangeUserType(); };

/**
 * Returns the ID property of the current user's information.
 * @memberof ApiProtectedRangeUserInfo
 * @typeofeditors ["CSE"]
 * @returns {string | null}
 * @since 8.1.0
 */
ApiProtectedRangeUserInfo.prototype.GetId = function () { return ""; };


