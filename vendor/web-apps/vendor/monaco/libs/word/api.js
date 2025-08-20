/**
 * Base class
 * @global
 * @class
 * @name ApiInterface
 */
var ApiInterface = function() {};
var Api = new ApiInterface();


/**
 * Returns the first Run in the array specified.
 * @typeofeditors ["CDE"]
 * @param {Array} arrRuns - Array of Runs.
 * @returns {ApiRun | null} - returns null if arrRuns is invalid.
 */
function private_GetFirstRunInArray(arrRuns){ return null; }

/**
 * Returns the last Run in the array specified.
 * @memberof ApiInterface
 * @typeofeditors ["CDE"]
 * @param {Array} arrRuns - Array of Runs.
 * @returns {ApiRun | null} - returns null if arrRuns is invalid. 
 */
function private_GetLastRunInArray(arrRuns){ return null; }

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
 * Returns a type of the ApiRange class.
 * @memberof ApiRange
 * @typeofeditors ["CDE"]
 * @returns {"range"}
 */
ApiRange.prototype.GetClassType = function(){ return ""; };

/**
 * Returns a paragraph from all the paragraphs that are in the range.
 * @param {Number} nPos - The paragraph position in the range.
 * @returns {ApiParagraph | null} - returns null if position is invalid.
 */
ApiRange.prototype.GetParagraph = function(nPos){ return new ApiParagraph(); };

/**
 * Adds a text to the specified position.
 * @memberof ApiRange
 * @typeofeditors ["CDE"]
 * @param {String} sText - The text that will be added.
 * @param {string} [sPosition = "after"] - The position where the text will be added ("before" or "after" the range specified).
 * @returns {boolean} - returns false if range is empty or sText isn't string value.
 */
ApiRange.prototype.AddText = function(sText, sPosition){ return true; };

/**
 * Adds a bookmark to the specified range.
 * @memberof ApiRange
 * @typeofeditors ["CDE"]
 * @param {String} sName - The bookmark name.
 * @returns {boolean} - returns false if range is empty.
 */
ApiRange.prototype.AddBookmark = function(sName){ return true; };

/**
 * Adds a hyperlink to the specified range. 
 * @memberof ApiRange
 * @typeofeditors ["CDE"]
 * @param {string} sLink - The link address.
 * @param {string} sScreenTipText - The screen tip text.
 * @returns {ApiHyperlink | null}  - returns null if range contains more than one paragraph or sLink is invalid. 
 */
ApiRange.prototype.AddHyperlink = function(sLink, sScreenTipText){ return new ApiHyperlink(); };

/**
 * Returns a text from the specified range.
 * @memberof ApiRange
 * @param {object} oPr - The resulting string display properties.
 * @param {boolean} [oPr.NewLineParagraph=false] - Defines if the resulting string will include paragraph line boundaries or not.
 * @param {boolean} [oPr.Numbering=false] - Defines if the resulting string will include numbering or not.
 * @param {boolean} [oPr.Math=false] - Defines if the resulting string will include mathematical expressions or not.
 * @param {string} [oPr.NewLineSeparator='\r'] - Defines how the line separator will be specified in the resulting string.
 * @param {string} [oPr.TableCellSeparator='\t'] - Defines how the table cell separator will be specified in the resulting string.
 * @param {string} [oPr.TableRowSeparator='\r\n'] - Defines how the table row separator will be specified in the resulting string.
 * @param {string} [oPr.ParaSeparator='\r\n'] - Defines how the paragraph separator will be specified in the resulting string.
 * @param {string} [oPr.TabSymbol='\t'] - Defines how the tab will be specified in the resulting string (does not apply to numbering)
 * @typeofeditors ["CDE"]
 * @returns {String} - returns "" if range is empty.
 */
ApiRange.prototype.GetText = function(oPr){ return ""; };

/**
 * Returns a collection of paragraphs that represents all the paragraphs in the specified range.
 * @memberof ApiRange
 * @typeofeditors ["CDE"]
 * @returns {ApiParagraph[]}
 */
ApiRange.prototype.GetAllParagraphs = function(){ return [new ApiParagraph()]; };

/**
 * Sets the selection to the specified range.
 * @memberof ApiRange
 * @typeofeditors ["CDE"]
 */
ApiRange.prototype.Select = function(bUpdate){};

/**
 * Returns a new range that goes beyond the specified range in any direction and spans a different range. The current range has not changed. Throws an error if two ranges do not have a union.
 * @memberof ApiRange
 * @typeofeditors ["CDE"]
 * @param {ApiRange} oRange - The range that will be expanded.
 * @returns {ApiRange | null} - returns null if the specified range can't be expanded. 
 */
ApiRange.prototype.ExpandTo = function(oRange){ return new ApiRange(); };

/**
 * Returns a new range as the intersection of the current range with another range. The current range has not changed. Throws an error if two ranges do not overlap or are not adjacent.
 * @memberof ApiRange
 * @typeofeditors ["CDE"]
 * @param {ApiRange} oRange - The range that will be intersected with the current range.
 * @returns {ApiRange | null} - returns null if can't intersect.
 */
ApiRange.prototype.IntersectWith = function(oRange){ return new ApiRange(); };

/**
 * Sets the bold property to the text character.
 * @memberof ApiRange
 * @typeofeditors ["CDE"]
 * @param {boolean} isBold - Specifies if the Range contents are displayed bold or not.
 * @returns {ApiRange | null} - returns null if can't apply bold.
 */
ApiRange.prototype.SetBold = function(isBold){ return new ApiRange(); };

/**
 * Specifies that any lowercase characters in the current text Range are formatted for display only as their capital letter character equivalents.
 * @memberof ApiRange
 * @typeofeditors ["CDE"]
 * @param {boolean} isCaps - Specifies if the Range contents are displayed capitalized or not.
 * @returns {ApiRange | null} - returns null if can't apply caps.
 */
ApiRange.prototype.SetCaps = function(isCaps){ return new ApiRange(); };

/**
 * Sets the text color to the current text Range in the RGB format.
 * @memberof ApiRange
 * @typeofeditors ["CDE"]
 * @param {byte} r - Red color component value.
 * @param {byte} g - Green color component value.
 * @param {byte} b - Blue color component value.
 * @param {boolean} [isAuto=false] - If this parameter is set to "true", then r,g,b parameters will be ignored.
 * @returns {ApiRange | null} - returns null if can't apply color.
 */
ApiRange.prototype.SetColor = function(r, g, b, isAuto){ return new ApiRange(); };

/**
 * Specifies that the contents of the current Range are displayed with two horizontal lines through each character displayed on the line.
 * @memberof ApiRange
 * @typeofeditors ["CDE"]
 * @param {boolean} isDoubleStrikeout - Specifies if the contents of the current Range are displayed double struck through or not.
 * @returns {ApiRange | null} - returns null if can't apply double strikeout.
 */
ApiRange.prototype.SetDoubleStrikeout = function(isDoubleStrikeout){ return new ApiRange(); };

/**
 * Specifies a highlighting color which is applied as a background to the contents of the current Range.
 * @memberof ApiRange
 * @typeofeditors ["CDE"]
 * @param {highlightColor} sColor - Available highlight color.
 * @returns {ApiRange | null} - returns null if can't apply highlight.
 */
ApiRange.prototype.SetHighlight = function(sColor){ return new ApiRange(); };

/**
 * Specifies the shading applied to the contents of the current text Range.
 * @memberof ApiRange
 * @typeofeditors ["CDE"]
 * @param {ShdType} sType - The shading type applied to the contents of the current text Range.
 * @param {byte} r - Red color component value.
 * @param {byte} g - Green color component value.
 * @param {byte} b - Blue color component value.
 * @returns {ApiRange | null} - returns null if can't apply shadow.
 */
ApiRange.prototype.SetShd = function(sType, r, g, b){ return new ApiRange(); };

/**
 * Sets the italic property to the text character.
 * @memberof ApiRange
 * @typeofeditors ["CDE"]
 * @param {boolean} isItalic - Specifies if the contents of the current Range are displayed italicized or not.
 * @returns {ApiRange | null} - returns null if can't apply italic.
 */
ApiRange.prototype.SetItalic = function(isItalic){ return new ApiRange(); };

/**
 * Specifies that the contents of the current Range are displayed with a single horizontal line through the range center.
 * @memberof ApiRange
 * @typeofeditors ["CDE"]
 * @param {boolean} isStrikeout - Specifies if the contents of the current Range are displayed struck through or not.
 * @returns {ApiRange | null} - returns null if can't apply strikeout.
 */
ApiRange.prototype.SetStrikeout = function(isStrikeout){ return new ApiRange(); };

/**
 * Specifies that all the lowercase letter characters in the current text Range are formatted for display only as their capital
 * letter character equivalents which are two points smaller than the actual font size specified for this text.
 * @memberof ApiRange
 * @typeofeditors ["CDE"]
 * @param {boolean} isSmallCaps - Specifies if the contents of the current Range are displayed capitalized two points smaller or not.
 * @returns {ApiRange | null} - returns null if can't apply small caps.
 */
ApiRange.prototype.SetSmallCaps = function(isSmallCaps){ return new ApiRange(); };

/**
 * Sets the text spacing measured in twentieths of a point.
 * @memberof ApiRange
 * @typeofeditors ["CDE"]
 * @param {twips} nSpacing - The value of the text spacing measured in twentieths of a point (1/1440 of an inch).
 * @returns {ApiRange | null} - returns null if can't apply spacing.
 */
ApiRange.prototype.SetSpacing = function(nSpacing){ return new ApiRange(); };

/**
 * Specifies that the contents of the current Range are displayed along with a line appearing directly below the character
 * (less than all the spacing above and below the characters on the line).
 * @memberof ApiRange
 * @typeofeditors ["CDE"]
 * @param {boolean} isUnderline - Specifies if the contents of the current Range are displayed underlined or not.
 * @returns {ApiRange | null} - returns null if can't apply underline.
 */
ApiRange.prototype.SetUnderline = function(isUnderline){ return new ApiRange(); };

/**
 * Specifies the alignment which will be applied to the Range contents in relation to the default appearance of the Range text:
 * * <b>"baseline"</b> - the characters in the current text Range will be aligned by the default text baseline.
 * * <b>"subscript"</b> - the characters in the current text Range will be aligned below the default text baseline.
 * * <b>"superscript"</b> - the characters in the current text Range will be aligned above the default text baseline.
 * @memberof ApiRange
 * @typeofeditors ["CDE"]
 * @param {("baseline" | "subscript" | "superscript")} sType - The vertical alignment type applied to the text contents.
 * @returns {ApiRange | null} - returns null if can't apply align.
 */
ApiRange.prototype.SetVertAlign = function(sType){ return new ApiRange(); };

/**
 * Specifies the amount by which text is raised or lowered for the current Range in relation to the default
 * baseline of the surrounding non-positioned text.
 * @memberof ApiRange
 * @typeofeditors ["CDE"]
 * @param {hps} nPosition - Specifies a positive (raised text) or negative (lowered text)
 * measurement in half-points (1/144 of an inch).
 * @returns {ApiRange | null} - returns null if can't set position.
 */
ApiRange.prototype.SetPosition = function(nPosition){ return new ApiRange(); };

/**
 * Sets the font size to the characters of the current text Range.
 * @memberof ApiRange
 * @typeofeditors ["CDE"]
 * @param {hps} FontSize - The text size value measured in half-points (1/144 of an inch).
 * @returns {ApiRange | null} - returns null if can't set font size.
 */
ApiRange.prototype.SetFontSize = function(FontSize){ return new ApiRange(); };

/**
 * Sets all 4 font slots with the specified font family.
 * @memberof ApiRange
 * @typeofeditors ["CDE"]
 * @param {string} sFontFamily - The font family or families used for the current text Range.
 * @returns {ApiRange | null} - returns null if can't set font family.
 */
ApiRange.prototype.SetFontFamily = function(sFontFamily){ return new ApiRange(); };

/**
 * Sets the style to the current Range.
 * @memberof ApiRange
 * @typeofeditors ["CDE"]
 * @param {ApiStyle} oStyle - The style which must be applied to the text character.
 * @returns {ApiRange | null} - returns null if can't set style.
 */
ApiRange.prototype.SetStyle = function(oStyle){ return new ApiRange(); };

/**
 * Sets the text properties to the current Range.
 * @memberof ApiRange
 * @typeofeditors ["CDE"]
 * @param {ApiTextPr} oTextPr - The text properties that will be applied to the current range.
 * @returns {ApiRange | null} - returns null if can't set text properties.
 */
ApiRange.prototype.SetTextPr = function(oTextPr){ return new ApiRange(); };

/**
 * Deletes all the contents from the current range.
 * @memberof ApiRange
 * @typeofeditors ["CDE"]
 * @returns {boolean} - returns false if range is empty.
 */
ApiRange.prototype.Delete = function(){ return true; };

/**
 * Converts the ApiRange object into the JSON object.
 * @memberof ApiRange
 * @param {boolean} bWriteNumberings - Specifies if the used numberings will be written to the JSON object or not.
 * @param {boolean} bWriteStyles - Specifies if the used styles will be written to the JSON object or not.
 * @typeofeditors ["CDE"]
 * @returns {JSON}
 */
ApiRange.prototype.ToJSON = function(bWriteNumberings, bWriteStyles){ return new JSON(); };

/**
 * Adds a comment to the current range.
 * @memberof ApiRange
 * @typeofeditors ["CDE"]
 * @param {string} sText - The comment text (required).
 * @param {string} sAuthor - The author's name (optional).
 * @param {string} sUserId - The user ID of the comment author (optional).
 * @returns {ApiComment} - Returns null if the comment was not added.
 */
ApiRange.prototype.AddComment = function(sText, sAuthor, sUserId){ return new ApiComment(); };

/**
 * Returns a Range object that represents the document part contained in the specified range.
 * @typeofeditors ["CDE"]
 * @param {Number} [Start=0] - Start character index in the current range.
 * @param {Number} [End=-1] - End character index in the current range (if <= 0, then the range is taken to the end).
 * @returns {ApiRange}
 * */
ApiRange.prototype.GetRange = function(nStart, nEnd){ return new ApiRange(); };

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
 * Class representing a table.
 * @constructor
 * @extends {ApiTablePr}
 */
function ApiTable(Table){}
ApiTable.prototype = Object.create(ApiTablePr.prototype);
ApiTable.prototype.constructor = ApiTable;

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
 * Returns a type of the ApiHyperlink class.
 * @memberof ApiHyperlink
 * @typeofeditors ["CDE"]
 * @returns {"hyperlink"}
 */
ApiHyperlink.prototype.GetClassType = function(){ return ""; };

/**
 * Class representing a document form base.
 * @constructor
 * @typeofeditors ["CDE", "CFE"]
 */
function ApiFormBase(oSdt){}

/**
 * Class representing a document text field.
 * @constructor
 * @typeofeditors ["CDE", "CFE"]
 * @extends {ApiFormBase}
 */
function ApiTextForm(oSdt){}
ApiTextForm.prototype = Object.create(ApiFormBase.prototype);
ApiTextForm.prototype.constructor = ApiTextForm;

/**
 * Class representing a document combo box / dropdown list.
 * @constructor
 * @typeofeditors ["CDE", "CFE"]
 * @extends {ApiFormBase}
 */
function ApiComboBoxForm(oSdt){}
ApiComboBoxForm.prototype = Object.create(ApiFormBase.prototype);
ApiComboBoxForm.prototype.constructor = ApiComboBoxForm;

/**
 * Class representing a document checkbox / radio button.
 * @constructor
 * @typeofeditors ["CDE", "CFE"]
 * @extends {ApiFormBase}
 */
function ApiCheckBoxForm(oSdt){}
ApiCheckBoxForm.prototype = Object.create(ApiFormBase.prototype);
ApiCheckBoxForm.prototype.constructor = ApiCheckBoxForm;

/**
 * Class representing a document picture form.
 * @constructor
 * @typeofeditors ["CDE", "CFE"]
 * @extends {ApiFormBase}
 */
function ApiPictureForm(oSdt){}
ApiPictureForm.prototype = Object.create(ApiFormBase.prototype);
ApiPictureForm.prototype.constructor = ApiPictureForm;

/**
 * Class representing a document date field.
 * @constructor
 * @typeofeditors ["CDE", "CFE"]
 * @extends {ApiFormBase}
 */
function ApiDateForm(oSdt){}
ApiDateForm.prototype = Object.create(ApiFormBase.prototype);
ApiDateForm.prototype.constructor = ApiDateForm;

/**
 * Class representing a complex field.
 * @param oSdt
 * @constructor
 * @typeofeditors ["CDE", "CFE"]
 * @extends {ApiFormBase}
 */
function ApiComplexForm(oSdt){}
ApiComplexForm.prototype = Object.create(ApiFormBase.prototype);
ApiComplexForm.prototype.constructor = ApiComplexForm;

/**
 * Sets the hyperlink address.
 * @typeofeditors ["CDE"]
 * @param {string} sLink - The hyperlink address.
 * @returns {boolean}
 * */
ApiHyperlink.prototype.SetLink = function(sLink){ return true; };

/**
 * Sets the hyperlink display text.
 * @typeofeditors ["CDE"]
 * @param {string} sDisplay - The text to display the hyperlink.
 * @returns {boolean}
 * */
ApiHyperlink.prototype.SetDisplayedText = function(sDisplay){ return true; };

/**
 * Sets the screen tip text of the hyperlink.
 * @typeofeditors ["CDE"]
 * @param {string} sScreenTipText - The screen tip text of the hyperlink.
 * @returns {boolean}
 * */
ApiHyperlink.prototype.SetScreenTipText = function(sScreenTipText){ return true; };

/**
 * Returns the hyperlink address.
 * @typeofeditors ["CDE"]
 * @returns {string} 
 * */
ApiHyperlink.prototype.GetLinkedText = function(){ return ""; };

/**
 * Returns the hyperlink display text.
 * @typeofeditors ["CDE"]
 * @returns {string} 
 * */
ApiHyperlink.prototype.GetDisplayedText = function(){ return ""; };

/**
 * Returns the screen tip text of the hyperlink.
 * @typeofeditors ["CDE"]
 * @returns {string} 
 * */
ApiHyperlink.prototype.GetScreenTipText = function(){ return ""; };

/**
 * Returns the hyperlink element using the position specified.
 * @typeofeditors ["CDE"]
 * @param {number} nPos - The position where the element which content we want to get must be located.
 * @returns {ParagraphContent}
 */
ApiHyperlink.prototype.GetElement = function(nPos){ return new ParagraphContent(); };

/**
 * Returns a number of elements in the current hyperlink.
 * @typeofeditors ["CDE"]
 * @returns {number}
 */
ApiHyperlink.prototype.GetElementsCount = function(){ return 0; };

/**
 * Sets the default hyperlink style.
 * @typeofeditors ["CDE"]
 * @returns {boolean}
 * */
ApiHyperlink.prototype.SetDefaultStyle = function(){ return true; };

/**
 * Returns a Range object that represents the document part contained in the specified hyperlink.
 * @typeofeditors ["CDE"]
 * @param {Number} Start - Start character index in the current element.
 * @param {Number} End - End character index in the current element.
 * @returns {ApiRange} 
 * */
ApiHyperlink.prototype.GetRange = function(Start, End){ return new ApiRange(); };

/**
 * Converts the ApiHyperlink object into the JSON object.
 * @memberof ApiHyperlink
 * @param {boolean} bWriteStyles - Specifies if the used styles will be written to the JSON object or not.
 * @typeofeditors ["CDE"]
 * @returns {JSON}
 */
ApiHyperlink.prototype.ToJSON = function(bWriteStyles){ return new JSON(); };

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
 * Class representing a table row.
 * @constructor
 * @extends {ApiTableRowPr}
 */
function ApiTableRow(Row){}
ApiTableRow.prototype = Object.create(ApiTableRowPr.prototype);
ApiTableRow.prototype.constructor = ApiTableRow;

/**
 * Class representing the table cell properties.
 * @constructor
 */
function ApiTableCellPr(Parent, CellPr){}

/**
 * Class representing a table cell.
 * @constructor
 * @extends {ApiTableCellPr}
 */
function ApiTableCell(Cell){}
ApiTableCell.prototype = Object.create(ApiTableCellPr.prototype);
ApiTableCell.prototype.constructor = ApiTableCell;

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
 * Class representing a graphical object.
 * @constructor
 */
function ApiDrawing(Drawing){}

/**
 * Class representing an image.
 * @constructor
 */
function ApiImage(Image){}
ApiImage.prototype = Object.create(ApiDrawing.prototype);
ApiImage.prototype.constructor = ApiImage;

/**
 * Class representing an Ole object.
 * @constructor
 */
function ApiOleObject(OleObject){}
ApiOleObject.prototype = Object.create(ApiDrawing.prototype);
ApiOleObject.prototype.constructor = ApiOleObject;

/**
 * Class representing a shape.
 * @constructor
 * */
function ApiShape(Shape){}
ApiShape.prototype = Object.create(ApiDrawing.prototype);
ApiShape.prototype.constructor = ApiShape;

/**
 * Class representing a chart.
 * @constructor
 *
 */
function ApiChart(Chart){}
ApiChart.prototype = Object.create(ApiDrawing.prototype);
ApiChart.prototype.constructor = ApiChart;

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
 * Returns the main document.
 * @memberof ApiInterface
 * @typeofeditors ["CDE"]
 * @returns {ApiDocument}
 */
ApiInterface.prototype.GetDocument = function(){ return new ApiDocument(); };

/**
 * Creates a new paragraph.
 * @memberof ApiInterface
 * @typeofeditors ["CDE", "CSE"]
 * @returns {ApiParagraph}
 */
ApiInterface.prototype.CreateParagraph = function(){ return new ApiParagraph(); };

/**
 * Creates an element range.
 * If you do not specify the start and end positions, the range will be taken from the entire element.
 * @memberof ApiInterface
 * @typeofeditors ["CDE"]
 * @param oElement - The element from which the range will be taken.
 * @param nStart - Start range position.
 * @param nEnd - End range position.
 * @returns {ApiRange | null} - returns null if oElement isn't supported.
 */
ApiInterface.prototype.CreateRange = function(oElement, nStart, nEnd){ return new ApiRange(); };

/**
 * Creates a new table with a specified number of rows and columns.
 * @memberof ApiInterface
 * @typeofeditors ["CDE"]
 * @param {number} nCols - Number of columns.
 * @param {number} nRows - Number of rows.
 * @returns {ApiTable}
 */
ApiInterface.prototype.CreateTable = function(nCols, nRows){ return new ApiTable(); };

/**
 * Creates a new smaller text block to be inserted to the current paragraph or table.
 * @memberof ApiInterface
 * @typeofeditors ["CDE", "CSE", "CPE"]
 * @returns {ApiRun}
 */
ApiInterface.prototype.CreateRun = function(){ return new ApiRun(); };

/**
 * Creates a new hyperlink text block to be inserted to the current paragraph or table.
 * @memberof ApiInterface
 * @typeofeditors ["CDE"]
 * @param {string} sLink - The hyperlink address. 
 * @param {string} sDisplay - The text to display the hyperlink.
 * @param {string} sScreenTipText - The screen tip text.
 * @returns {ApiHyperlink}
 */
ApiInterface.prototype.CreateHyperlink = function(sLink, sDisplay, sScreenTipText){ return new ApiHyperlink(); };

/**
 * Creates an image with the parameters specified.
 * @memberof ApiInterface
 * @typeofeditors ["CDE"]
 * @param {string} sImageSrc - The image source where the image to be inserted should be taken from (currently only internet URL or Base64 encoded images are supported).
 * @param {EMU} nWidth - The image width in English measure units.
 * @param {EMU} nHeight - The image height in English measure units.
 * @returns {ApiImage}
 */
ApiInterface.prototype.CreateImage = function(sImageSrc, nWidth, nHeight){ return new ApiImage(); };

/**
 * Creates a shape with the parameters specified.
 * @memberof ApiInterface
 * @typeofeditors ["CDE"]
 * @param {ShapeType} [sType="rect"] - The shape type which specifies the preset shape geometry.
 * @param {EMU} [nWidth = 914400] - The shape width in English measure units.
 * @param {EMU} [nHeight = 914400] - The shape height in English measure units.
 * @param {ApiFill} [oFill = Api.CreateNoFill()] - The color or pattern used to fill the shape.
 * @param {ApiStroke} [oStroke = Api.CreateStroke(0, Api.CreateNoFill())] - The stroke used to create the element shadow.
 * @returns {ApiShape}
 * */
ApiInterface.prototype.CreateShape = function(sType, nWidth, nHeight, oFill, oStroke){ return new ApiShape(); };

/**
 * Creates a chart with the parameters specified.
 * @memberof ApiInterface
 * @typeofeditors ["CDE"]
 * @param {ChartType} [sType="bar"] - The chart type used for the chart display.
 * @param {Array} aSeries - The array of the data used to build the chart from.
 * @param {Array} aSeriesNames - The array of the names (the source table column names) used for the data which the chart will be build from.
 * @param {Array} aCatNames - The array of the names (the source table row names) used for the data which the chart will be build from.
 * @param {EMU} nWidth - The chart width in English measure units.
 * @param {EMU} nHeight - The chart height in English measure units.
 * @param {number} nStyleIndex - The chart color style index (can be 1 - 48, as described in OOXML specification).
 * @param {NumFormat[] | String[]} aNumFormats - Numeric formats which will be applied to the series (can be custom formats).
 * The default numeric format is "General".
 * @returns {ApiChart}
 * */
ApiInterface.prototype.CreateChart = function(sType, aSeries, aSeriesNames, aCatNames, nWidth, nHeight, nStyleIndex, aNumFormats){ return new ApiChart(); };

/**
 * Creates an OLE object with the parameters specified.
 * @memberof ApiInterface
 * @typeofeditors ["CDE"]
 * @param {string} sImageSrc - The image source where the image to be inserted should be taken from (currently, only internet URL or Base64 encoded images are supported).
 * @param {EMU} nWidth - The OLE object width in English measure units.
 * @param {EMU} nHeight - The OLE object height in English measure units.
 * @param {string} sData - The OLE object string data.
 * @param {string} sAppId - The application ID associated with the current OLE object.
 * @returns {ApiOleObject}
 */
ApiInterface.prototype.CreateOleObject = function(sImageSrc, nWidth, nHeight, sData, sAppId){ return new ApiOleObject(); };

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
 * Creates a new inline container.
 * @memberof ApiInterface
 * @typeofeditors ["CDE"]
 * @returns {ApiInlineLvlSdt}
 */
ApiInterface.prototype.CreateInlineLvlSdt = function(){ return new ApiInlineLvlSdt(); };

/**
 * Creates a new block level container.
 * @memberof ApiInterface
 * @typeofeditors ["CDE"]
 * @returns {ApiBlockLvlSdt}
 */
ApiInterface.prototype.CreateBlockLvlSdt = function(){ return new ApiBlockLvlSdt(); };

/**
 * Saves changes to the specified document.
 * @typeofeditors ["CDE"]
 * @memberof ApiInterface
 */
ApiInterface.prototype.Save = function () {};

/**
 * Loads data for the mail merge. 
 * @memberof ApiInterface
 * @typeofeditors ["CDE"]
 * @param {String[][]} aList - Mail merge data. The first element of the array is the array with names of the merge fields.
 * The rest of the array elements are arrays with values for the merge fields.
 * @typeofeditors ["CDE"]
 * @returns {boolean}
 */
ApiInterface.prototype.LoadMailMergeData = function(aList){ return true; };

/**
 * Returns the mail merge template document.
 * @memberof ApiInterface
 * @typeofeditors ["CDE"]
 * @returns {ApiDocumentContent}  
 */
ApiInterface.prototype.GetMailMergeTemplateDocContent = function(){ return new ApiDocumentContent(); };

/**
 * Returns the mail merge receptions count.
 * @memberof ApiInterface
 * @typeofeditors ["CDE"]
 * @returns {number}  
 */
ApiInterface.prototype.GetMailMergeReceptionsCount = function(){ return 0; };

/**
 * Replaces the main document content with another document content.
 * @memberof ApiInterface
 * @typeofeditors ["CDE"]
 * @param {ApiDocumentContent} oApiDocumentContent - The document content which the main document content will be replaced with.
 */
ApiInterface.prototype.ReplaceDocumentContent = function(oApiDocumentContent){};

/**
 * Starts the mail merge process.
 * @memberof ApiInterface
 * @typeofeditors ["CDE"]
 * @param {number} [nStartIndex=0] - The start index of the document for mail merge process.
 * @param {number} [nEndIndex=Api.GetMailMergeReceptionsCount() - 1] - The end index of the document for mail merge process.
 * @returns {boolean}
 */
ApiInterface.prototype.MailMerge = function(nStartIndex, nEndIndex){ return true; };

/**
 * Converts the specified JSON object into the Document Builder object of the corresponding type.
 * @memberof ApiInterface
 * @param {JSON} sMessage - The JSON object to convert.
 * @typeofeditors ["CDE"]
 */
ApiInterface.prototype.FromJSON = function(sMessage){};

/**
 * Returns a type of the ApiUnsupported class.
 * @typeofeditors ["CDE"]
 * @returns {"unsupported"}
 */
ApiUnsupported.prototype.GetClassType = function(){ return ""; };

/**
 * Adds a comment to the specifed document element or array of Runs.
 * @memberof ApiInterface
 * @typeofeditors ["CDE"]
 * @param {ApiRun[] | DocumentElement} oElement - The element where the comment will be added. It may be applied to any element which has the *AddComment* method.
 * @param {string} sText - The comment text (required).
 * @param {string} sAuthor - The author's name (optional).
 * @param {string} sUserId - The user ID of the comment author (optional).
 * @returns {ApiComment} - Returns null if the comment was not added.
 */
ApiInterface.prototype.AddComment = function(oElement, sText, sAuthor, sUserId){ return new ApiComment(); };

/**
 * Subscribes to the specified event and calls the callback function when the event fires.
 * @function
 * @memberof ApiInterface
 * @typeofeditors ["CDE"]
 * @param {string} eventName - The event name.
 * @param {function} callback - Function to be called when the event fires.
 */
ApiInterface.prototype["attachEvent"] = ApiInterface.prototype.attachEvent;{};

/**
 * Unsubscribes from the specified event.
 * @function
 * @memberof ApiInterface
 * @typeofeditors ["CDE"]
 * @param {string} eventName - The event name.
 */
ApiInterface.prototype["detachEvent"] = ApiInterface.prototype.detachEvent;{};

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
 * Returns a Range object that represents the part of the document contained in the document content.
 * @memberof ApiDocumentContent
 * @typeofeditors ["CDE"]
 * @param {Number} Start - Start character in the current element.
 * @param {Number} End - End character in the current element.
 * @returns {ApiRange} 
 * */
ApiDocumentContent.prototype.GetRange = function(Start, End){ return new ApiRange(); };

/**
 * Converts the ApiDocumentContent object into the JSON object.
 * @memberof ApiDocumentContent
 * @typeofeditors ["CDE"]
 * @param {boolean} bWriteNumberings - Specifies if the used numberings will be written to the JSON object or not.
 * @param {boolean} bWriteStyles - Specifies if the used styles will be written to the JSON object or not.
 * @returns {JSON}
 */
ApiDocumentContent.prototype.ToJSON = function(bWriteNumberings, bWriteStyles){ return new JSON(); };

/**
 * Returns an array of document elements from the current ApiDocumentContent object.
 * @memberof ApiDocumentContent
 * @typeofeditors ["CDE"]
 * @param {boolean} bGetCopies - Specifies if the copies of the document elements will be returned or not.
 * @returns {Array}
 */
ApiDocumentContent.prototype.GetContent = function(bGetCopies){ return []; };

/**
 * Returns a collection of drawing objects from the document content.
 * @memberof ApiDocumentContent
 * @typeofeditors ["CDE"]
 * @returns {ApiDrawing[]}  
 */
ApiDocumentContent.prototype.GetAllDrawingObjects = function(){ return [new ApiDrawing()]; };

/**
 * Returns a collection of shape objects from the document content.
 * @memberof ApiDocumentContent
 * @typeofeditors ["CDE"]
 * @returns {ApiShape[]}  
 */
ApiDocumentContent.prototype.GetAllShapes = function(){ return [new ApiShape()]; };

/**
 * Returns a collection of image objects from the document content.
 * @memberof ApiDocumentContent
 * @typeofeditors ["CDE"]
 * @returns {ApiImage[]}  
 */
ApiDocumentContent.prototype.GetAllImages = function(){ return [new ApiImage()]; };

/**
 * Returns a collection of chart objects from the document content.
 * @memberof ApiDocumentContent
 * @typeofeditors ["CDE"]
 * @returns {ApiChart[]}  
 */
ApiDocumentContent.prototype.GetAllCharts = function(){ return [new ApiChart()]; };

/**
 * Returns a collection of OLE objects from the document content.
 * @memberof ApiDocumentContent
 * @typeofeditors ["CDE"]
 * @returns {ApiOleObject[]}  
 */
ApiDocumentContent.prototype.GetAllOleObjects = function(){ return [new ApiOleObject()]; };

/**
 * Returns an array of all paragraphs from the current document content.
 * @memberof ApiDocumentContent
 * @typeofeditors ["CDE"]
 * @returns {ApiParagraph[]}
 */
ApiDocumentContent.prototype.GetAllParagraphs = function(){ return [new ApiParagraph()]; };

/**
 * Returns an array of all tables from the current document content.
 * @memberof ApiDocumentContent
 * @typeofeditors ["CDE"]
 * @returns {ApiParagraph[]}
 */
ApiDocumentContent.prototype.GetAllTables = function(){ return [new ApiParagraph()]; };

/**
 * Returns a type of the ApiDocument class.
 * @memberof ApiDocument
 * @typeofeditors ["CDE"]
 * @returns {"document"}
 */
ApiDocument.prototype.GetClassType = function(){ return ""; };

/**
 * Creates a new history point.
 * @memberof ApiDocument
 */
ApiDocument.prototype.CreateNewHistoryPoint = function(){};

/**
 * Returns a style by its name.
 * @memberof ApiDocument
 * @typeofeditors ["CDE"]
 * @param {string} sStyleName - The style name.
 * @returns {ApiStyle}
 */
ApiDocument.prototype.GetStyle = function(sStyleName){ return new ApiStyle(); };

/**
 * Creates a new style with the specified type and name. If there is a style with the same name it will be replaced with a new one.
 * @memberof ApiDocument
 * @typeofeditors ["CDE"]
 * @param {string} sStyleName - The name of the style which will be created.
 * @param {StyleType} [sType="paragraph"] - The document element which the style will be applied to.
 * @returns {ApiStyle}
 */
ApiDocument.prototype.CreateStyle = function(sStyleName, sType){ return new ApiStyle(); };

/**
 * Returns the default style parameters for the specified document element.
 * @memberof ApiDocument
 * @typeofeditors ["CDE"]
 * @param {StyleType} sStyleType - The document element which we want to get the style for.
 * @returns {ApiStyle}
 */
ApiDocument.prototype.GetDefaultStyle = function(sStyleType){ return new ApiStyle(); };

/**
 * Returns a set of default properties for the text run in the current document.
 * @memberof ApiDocument
 * @typeofeditors ["CDE"]
 * @returns {ApiTextPr}
 */
ApiDocument.prototype.GetDefaultTextPr = function(){ return new ApiTextPr(); };

/**
 * Returns a set of default paragraph properties in the current document.
 * @memberof ApiDocument
 * @typeofeditors ["CDE"]
 * @returns {ApiParaPr}
 */
ApiDocument.prototype.GetDefaultParaPr = function(){ return new ApiParaPr(); };

/**
 * Returns the document final section.
 * @memberof ApiDocument
 * @typeofeditors ["CDE"]
 * @returns {ApiSection}
 */
ApiDocument.prototype.GetFinalSection = function(){ return new ApiSection(); };

/**
 * Creates a new document section which ends at the specified paragraph. Allows to set local parameters to the current
 * section - page size, footer, header, columns, etc.
 * @memberof ApiDocument
 * @typeofeditors ["CDE"]
 * @param {ApiParagraph} oParagraph - The paragraph after which a new document section will be inserted.
 * Paragraph must be in a document.
 * @returns {ApiSection | null} Returns null if parametr is invalid.
 */
ApiDocument.prototype.CreateSection = function(oParagraph){ return new ApiSection(); };

/**
 * Specifies whether sections in this document will have different headers and footers for even and
 * odd pages (one header/footer for odd pages and another header/footer for even pages).
 * @memberof ApiDocument
 * @typeofeditors ["CDE"]
 * @param {boolean} isEvenAndOdd - If true the header/footer will be different for odd and even pages, if false they will be the same.
 */
ApiDocument.prototype.SetEvenAndOddHdrFtr = function(isEvenAndOdd){};

/**
 * Creates an abstract multilevel numbering with a specified type.
 * @memberof ApiDocument
 * @typeofeditors ["CDE"]
 * @param {("bullet" | "numbered")} [sType="bullet"] - The type of the numbering which will be created.
 * @returns {ApiNumbering}
 */
ApiDocument.prototype.CreateNumbering = function(sType){ return new ApiNumbering(); };

/**
 * Inserts an array of elements into the current position of the document.
 * @memberof ApiDocument
 * @typeofeditors ["CDE"]
 * @param {DocumentElement[]} arrContent - An array of elements to insert.
 * @param {boolean} [isInline=false] - Inline insert or not (works only for the last and the first element and only if it's a paragraph).
 * @param {object} [oPr=undefined] - Specifies that text and paragraph document properties are preserved for the inserted elements. 
 * The object should look like this: {"KeepTextOnly": true}. 
 * @returns {boolean} Success?
 */
ApiDocument.prototype.InsertContent = function(arrContent, isInline, oPr){ return true; };

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
 * Returns a report about all the comments added to the document.
 * @memberof ApiDocument
 * @typeofeditors ["CDE"]
 * @returns {CommentReport}
 */
ApiDocument.prototype.GetCommentsReport = function(){ return new CommentReport(); };

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
 * Returns a report about every change which was made to the document in the review mode.
 * @memberof ApiDocument
 * @typeofeditors ["CDE"]
 * @returns {ReviewReport}
 */
ApiDocument.prototype.GetReviewReport = function(){ return new ReviewReport(); };

/**
 * Finds and replaces the text.
 * @memberof ApiDocument
 * @typeofeditors ["CDE"]
 * @param {Object} oProperties - The properties to find and replace.
 * @param {string} oProperties.searchString - Search string.
 * @param {string} oProperties.replaceString - Replacement string.
 * @param {string} [oProperties.matchCase=true] - Case sensitive or not.
 *
 */
ApiDocument.prototype.SearchAndReplace = function(oProperties){};

/**
 * Returns a list of all the content controls from the document.
 * @memberof ApiDocument
 * @typeofeditors ["CDE"]
 * @returns {ApiBlockLvlSdt[] | ApiInlineLvlSdt[]}
 */
ApiDocument.prototype.GetAllContentControls = function(){ return [new ApiBlockLvlSdt()]; };

/**
 * Returns a list of all tags that are used for all content controls in the document.
 * @memberof ApiDocument
 * @typeofeditors ["CDE"]
 * @returns {String[]}
 */
ApiDocument.prototype.GetTagsOfAllContentControls = function(){ return [""]; };

/**
 * Returns a list of all tags that are used for all forms in the document.
 * @memberof ApiDocument
 * @typeofeditors ["CDE"]
 * @returns {String[]}
 */
ApiDocument.prototype.GetTagsOfAllForms = function(){ return [""]; };

/**
 * Returns a list of all content controls in the document with the specified tag name.
 * @memberof ApiDocument
 * @typeofeditors ["CDE"]
 * @param sTag {string} - Content control tag.
 * @returns {ApiBlockLvlSdt[] | ApiInlineLvlSdt[]}
 */
ApiDocument.prototype.GetContentControlsByTag = function(sTag){ return [new ApiBlockLvlSdt()]; };

/**
 * Returns a list of all forms in the document with the specified tag name.
 * @memberof ApiDocument
 * @typeofeditors ["CDE"]
 * @param sTag {string} - Form tag.
 * @returns {ApiBlockLvlSdt[] | ApiInlineLvlSdt[]}
 */
ApiDocument.prototype.GetFormsByTag = function(sTag){ return [new ApiBlockLvlSdt()]; };

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
 * Returns the data from all forms present in the current document.
 * If a form was created and not assigned to any part of the document, it won't appear in this list.
 * @memberof ApiDocument
 * @typeofeditors ["CDE"]
 * @returns {Array.<FormData>}
 * @since 8.0.0
 */
ApiDocument.prototype.GetFormsData = function(){ return []; };

/**
 * Sets the data to the specified forms.
 * @memberof ApiDocument
 * @typeofeditors ["CDE"]
 * @param {Array.<FormData>} arrData - An array of form data to set to the specified forms.
 * @since 8.0.0
 */
ApiDocument.prototype.SetFormsData = function(arrData){};

/**
 * Sets the change tracking mode.
 * @memberof ApiDocument
 * @typeofeditors ["CDE"]
 * @param isTrack {boolean} - Specifies if the change tracking mode is set or not.
 */
ApiDocument.prototype.SetTrackRevisions = function(isTrack){};

/**
 * Checks if change tracking mode is enabled or not.
 * @memberof ApiDocument
 * @typeofeditors ["CDE"]
 * @returns {boolean}
 */
ApiDocument.prototype.IsTrackRevisions = function(){ return true; };

/**
 * Returns a Range object that represents the part of the document contained in the specified document.
 * @memberof ApiDocument
 * @typeofeditors ["CDE"]
 * @param {Number} Start - Start character in the current element.
 * @param {Number} End - End character in the current element.
 * @returns {ApiRange} 
 * */
ApiDocument.prototype.GetRange = function(Start, End){ return new ApiRange(); };

/**
 * Returns a range object by the current selection.
 * @memberof ApiDocument
 * @typeofeditors ["CDE"]
 * @returns {ApiRange | null} - returns null if selection doesn't exist.
 * */
ApiDocument.prototype.GetRangeBySelect = function(){ return new ApiRange(); };

/**
 * Returns the last document element. 
 * @memberof ApiDocument
 * @typeofeditors ["CDE"]
 * @returns {DocumentElement}
 */
ApiDocument.prototype.Last = function(){ return new DocumentElement(); };

/**
 * Removes a bookmark from the document, if one exists.
 * @memberof ApiDocument
 * @typeofeditors ["CDE"]
 * @param {string} sName - The bookmark name.
 * @returns {boolean} - returns false if param is invalid.
 */
ApiDocument.prototype.DeleteBookmark = function(sName){ return true; };

/**
 * Adds a comment to the document.
 * @memberof ApiDocument
 * @typeofeditors ["CDE"]
 * @param {string} sText - The comment text (required).
 * @param {string} sAuthor - The author's name (optional).
 * @param {string} sUserId - The user ID of the comment author (optional).
 * @returns {ApiComment} - Returns null if the comment was not added.
 */
ApiDocument.prototype.AddComment = function(sText, sAuthor, sUserId){ return new ApiComment(); };

/**
 * Returns a bookmark range.
 * @memberof ApiDocument
 * @typeofeditors ["CDE"]
 * @param {string} sName - The bookmark name.
 * @returns {ApiRange | null} - returns null if sName is invalid.
 */
ApiDocument.prototype.GetBookmarkRange = function(sName){ return new ApiRange(); };

/**
 * Returns a collection of section objects in the document.
 * @memberof ApiDocument
 * @typeofeditors ["CDE"]
 * @returns {ApiSection[]}  
 */
ApiDocument.prototype.GetSections = function(){ return [new ApiSection()]; };

/**
 * Returns a collection of tables on a given absolute page.
 * <note>This method can be a little bit slow, because it runs the document calculation
 * process to arrange tables on the specified page.</note>
 * @memberof ApiDocument
 * @typeofeditors ["CDE"]
 * @param {number} nPage - The page number.
 * @returns {ApiTable[]}
 */
ApiDocument.prototype.GetAllTablesOnPage = function(nPage){ return [new ApiTable()]; };

/**
 * Adds a shape to the specified page.
 * <note>This method can be a little bit slow, because it runs the document calculation
 * process to arrange tables on the specified page.</note>
 * @memberof ApiDocument
 * @typeofeditors ["CDE"]
 * @param oDrawing {ApiDrawing} - A shape to add to the page.
 * @param nPage {number} - The page number.
 * @param x {EMU} - The X coordinate in English measure units.
 * @param y {EMU} - The Y coordinate in English measure units.
 * @returns {boolean}
 */
ApiDocument.prototype.AddDrawingToPage = function(oDrawing, nPage, x, y){ return true; };

/**
 * Removes the current selection.
 * @memberof ApiDocument
 * @typeofeditors ["CDE"]
 */
ApiDocument.prototype.RemoveSelection = function(){};

/**
 * Searches for a scope of a document object. The search results are a collection of ApiRange objects.
 * @memberof ApiDocument
 * @typeofeditors ["CDE"]
 * @param {string} sText - Search string.
 * @param {boolean} isMatchCase - Case sensitive or not.
 * @returns {ApiRange[]}  
 */
ApiDocument.prototype.Search = function(sText, isMatchCase){ return [new ApiRange()]; };

/**
 * Converts a document to Markdown.
 * @memberof ApiDocument
 * @typeofeditors ["CDE"]
 * @param {boolean} [bHtmlHeadings=false] - Defines if the HTML headings and IDs will be generated when the Markdown renderer of your target platform does not handle Markdown-style IDs.
 * @param {boolean} [bBase64img=false] - Defines if the images will be created in the base64 format.
 * @param {boolean} [bDemoteHeadings=false] - Defines if all heading levels in your document will be demoted to conform with the following standard: single H1 as title, H2 as top-level heading in the text body.
 * @param {boolean} [bRenderHTMLTags=false] - Defines if HTML tags will be preserved in your Markdown. If you just want to use an occasional HTML tag, you can avoid using the opening angle bracket
 * in the following way: \<tag&gt;text\</tag&gt;. By default, the opening angle brackets will be replaced with the special characters.
 * @returns {string}
 */
ApiDocument.prototype.ToMarkdown = function(bHtmlHeadings, bBase64img, bDemoteHeadings, bRenderHTMLTags){ return ""; };

/**
 * Converts a document to HTML.
 * @memberof ApiDocument
 * @typeofeditors ["CDE"]
 * @param {boolean} [bHtmlHeadings=false] - Defines if the HTML headings and IDs will be generated when the Markdown renderer of your target platform does not handle Markdown-style IDs.
 * @param {boolean} [bBase64img=false] - Defines if the images will be created in the base64 format.
 * @param {boolean} [bDemoteHeadings=false] - Defines if all heading levels in your document will be demoted to conform with the following standard: single H1 as title, H2 as top-level heading in the text body.
 * @param {boolean} [bRenderHTMLTags=false] - Defines if HTML tags will be preserved in your Markdown. If you just want to use an occasional HTML tag, you can avoid using the opening angle bracket
 * in the following way: \<tag&gt;text\</tag&gt;. By default, the opening angle brackets will be replaced with the special characters.
 * @returns {string}
 */
ApiDocument.prototype.ToHtml = function(bHtmlHeadings, bBase64img, bDemoteHeadings, bRenderHTMLTags){ return ""; };

/**
 * Inserts a watermark on each document page.
 * @memberof ApiDocument
 * @typeofeditors ["CDE"]
 * @param {?string} [sText="WATERMARK"] - Watermark text.
 * @param {?boolean} [bIsDiagonal=false] - Specifies if the watermark is placed diagonally (true) or horizontally (false).
 * @returns {ApiDrawing} - The object which represents the inserted watermark. Returns null if the watermark type is "none".
 */
ApiDocument.prototype.InsertWatermark = function(sText, bIsDiagonal){ return new ApiDrawing(); };

/**
 * Returns the watermark settings in the current document.
 * @memberof ApiDocument
 * @typeofeditors ["CDE"]
 * @returns {ApiWatermarkSettings} - The object which represents the watermark settings.
 */
ApiDocument.prototype.GetWatermarkSettings = function(){ return new ApiWatermarkSettings(); };

/**
 * Sets the watermark settings in the current document.
 * @memberof ApiDocument
 * @typeofeditors ["CDE"]
 * @param {ApiWatermarkSettings} Settings - The object which represents the watermark settings.
 * @returns {ApiDrawing} - The object which represents the watermark drawing if the watermark type in Settings is not "none".
 */
ApiDocument.prototype.SetWatermarkSettings = function(Settings){ return new ApiDrawing(); };

/**
 * Removes a watermark from the current document.
 * @memberof ApiDocument
 * @typeofeditors ["CDE"]
 */
ApiDocument.prototype.RemoveWatermark = function(){};

/**
 * Updates all tables of contents in the current document.
 * @memberof ApiDocument
 * @typeofeditors ["CDE"]
 * @param {boolean} [bOnlyPageNumbers=false] - Specifies that only page numbers will be updated.
 */
ApiDocument.prototype.UpdateAllTOC = function(bOnlyPageNumbers){};

/**
 * Updates all tables of figures in the current document.
 * @memberof ApiDocument
 * @typeofeditors ["CDE"]
 * @param {boolean} [bOnlyPageNumbers=false] - Specifies that only page numbers will be updated.
 */
ApiDocument.prototype.UpdateAllTOF = function(bOnlyPageNumbers){};

/**
 * Converts the ApiDocument object into the JSON object.
 * @memberof ApiDocument
 * @typeofeditors ["CDE"]
 * @param {boolean} bWriteDefaultTextPr - Specifies if the default text properties will be written to the JSON object or not.
 * @param {boolean} bWriteDefaultParaPr - Specifies if the default paragraph properties will be written to the JSON object or not.
 * @param {boolean} bWriteTheme - Specifies if the document theme will be written to the JSON object or not.
 * @param {boolean} bWriteSectionPr - Specifies if the document section properties will be written to the JSON object or not.
 * @param {boolean} bWriteNumberings - Specifies if the document numberings will be written to the JSON object or not.
 * @param {boolean} bWriteStyles - Specifies if the document styles will be written to the JSON object or not.
 * @returns {JSON}
 */
ApiDocument.prototype.ToJSON = function(bWriteDefaultTextPr, bWriteDefaultParaPr, bWriteTheme, bWriteSectionPr, bWriteNumberings, bWriteStyles){ return new JSON(); };

/**
 * Returns all existing forms in the document.
 * @memberof ApiDocument
 * @typeofeditors ["CDE"]
 * @returns {ApiForm[]}
 */
ApiDocument.prototype.GetAllForms = function(){ return [new ApiForm()]; };

/**
 * Clears all forms in the document.
 * @memberof ApiDocument
 * @typeofeditors ["CDE"]
 */
ApiDocument.prototype.ClearAllFields = function(){};

/**
 * Sets the highlight to the forms in the document.
 * @memberof ApiDocument
 * @param {byte} r - Red color component value.
 * @param {byte} g - Green color component value.
 * @param {byte} b - Blue color component value.
 * @param {boolean} [bNone=false] - Defines that highlight will not be set.
 * @typeofeditors ["CDE"]
 */
ApiDocument.prototype.SetFormsHighlight = function(r, g, b, bNone){};

/**
 * Returns all comments from the current document.
 * @memberof ApiDocument
 * @typeofeditors ["CDE"]
 * @returns {ApiComment[]}
 */
ApiDocument.prototype.GetAllComments = function(){ return [new ApiComment()]; };

/**
 * Returns a comment from the current document by its ID.
 * @memberof ApiDocument
 * @typeofeditors ["CDE"]
 * @param {string} sId - The comment ID.
 * @returns {ApiComment}
 */
ApiDocument.prototype.GetCommentById = function(sId){ return new ApiComment(); };

/**
 * Returns all numbered paragraphs from the current document.
 * @memberof ApiDocument
 * @typeofeditors ["CDE"]
 * @returns {ApiParagraph[]}
 */
ApiDocument.prototype.GetAllNumberedParagraphs = function(){ return [new ApiParagraph()]; };

/**
 * Returns all heading paragraphs from the current document.
 * @memberof ApiDocument
 * @typeofeditors ["CDE"]
 * @returns {ApiParagraph[]}
 */
ApiDocument.prototype.GetAllHeadingParagraphs = function(){ return [new ApiParagraph()]; };

/**
 * Returns the first paragraphs from all footnotes in the current document.
 * @memberof ApiDocument
 * @typeofeditors ["CDE"]
 * @returns {ApiParagraph[]}
 */
ApiDocument.prototype.GetFootnotesFirstParagraphs = function(){ return [new ApiParagraph()]; };

/**
 * Returns the first paragraphs from all endnotes in the current document.
 * @memberof ApiDocument
 * @typeofeditors ["CDE"]
 * @returns {ApiParagraph[]}
 */
ApiDocument.prototype.GetEndNotesFirstParagraphs = function(){ return [new ApiParagraph()]; };

/**
 * Returns all caption paragraphs of the specified type from the current document.
 * @memberof ApiDocument
 * @typeofeditors ["CDE"]
 * @param {CaptionLabel | string} sCaption - The caption label ("Equation", "Figure", "Table", or another caption label).
 * @returns {ApiParagraph[]}
 */
ApiDocument.prototype.GetAllCaptionParagraphs = function(sCaption){ return [new ApiParagraph()]; };

/**
 * Accepts all changes made in review mode.
 * @memberof ApiDocument
 * @typeofeditors ["CDE"]
 */
ApiDocument.prototype.AcceptAllRevisionChanges = function(){};

/**
 * Rejects all changes made in review mode.
 * @memberof ApiDocument
 * @typeofeditors ["CDE"]
 */
ApiDocument.prototype.RejectAllRevisionChanges = function(){};

/**
 * Returns an array with names of all bookmarks in the current document.
 * @memberof ApiDocument
 * @typeofeditors ["CDE"]
 * @returns {string[]}
 */
ApiDocument.prototype.GetAllBookmarksNames = function(){ return [""]; };

/**
 * Returns all the selected drawings in the current document.
 * @memberof ApiDocument
 * @typeofeditors ["CDE"]
 * @returns {ApiShape[] | ApiImage[] | ApiChart[] | ApiDrawing[]}
 */
ApiDocument.prototype.GetSelectedDrawings = function(){ return [new ApiShape()]; };

/**
 * Replaces the current image with an image specified.
 * @typeofeditors ["CDE"]
 * @memberof ApiDocument
 * @param {string} sImageUrl - The image source where the image to be inserted should be taken from (currently, only internet URL or Base64 encoded images are supported).
 * @param {EMU} Width - The image width in English measure units.
 * @param {EMU} Height - The image height in English measure units.
 */
ApiDocument.prototype.ReplaceCurrentImage = function(sImageUrl, Width, Height){};

/**
 * Replaces a drawing with a new drawing.
 * @memberof ApiDocument
 * @param {ApiDrawing} oOldDrawing - A drawing which will be replaced.
 * @param {ApiDrawing} oNewDrawing - A drawing to replace the old drawing.
 * @param {boolean} [bSaveOldDrawingPr=false] - Specifies if the old drawing settings will be saved.
 * @typeofeditors ["CDE"]
 * @returns {boolean}
 */
ApiDocument.prototype.ReplaceDrawing = function(oOldDrawing, oNewDrawing, bSaveOldDrawingPr){ return true; };

/**
 * Adds a footnote for the selected text (or the current position if the selection doesn't exist).
 * @memberof ApiDocument
 * @typeofeditors ["CDE"]
 * @returns {ApiDocumentContent}
 */
ApiDocument.prototype.AddFootnote = function(){ return new ApiDocumentContent(); };

/**
 * Adds an endnote for the selected text (or the current position if the selection doesn't exist).
 * @memberof ApiDocument
 * @typeofeditors ["CDE"]
 * @returns {ApiDocumentContent}
 */
ApiDocument.prototype.AddEndnote = function(){ return new ApiDocumentContent(); };

/**
 * Sets the highlight to the content controls from the current document.
 * @memberof ApiDocument
 * @param {byte} r - Red color component value.
 * @param {byte} g - Green color component value.
 * @param {byte} b - Blue color component value.
 * @param {boolean} [bNone=false] - Defines that highlight will not be set.
 * @typeofeditors ["CDE"]
 */
ApiDocument.prototype.SetControlsHighlight = function(r, g, b, bNone){};

/**
 * Adds a table of content to the current document.
 * <note>Please note that the new table of contents replaces the existing table of contents.</note>
 * @memberof ApiDocument
 * @typeofeditors ["CDE"]
 * @param {TocPr} [oTocPr={}] - Table of contents properties.
 */
ApiDocument.prototype.AddTableOfContents = function(oTocPr){};

/**
 * Adds a table of figures to the current document.
 * @memberof ApiDocument
 * @typeofeditors ["CDE"]
 * @param {TofPr} [oTofPr={}] - Table of figures properties.
 * <note>Please note that the table of figures properties will be filled with the default properties if they are undefined.</note>
 * @param {boolean} [bReplace=true] - Specifies whether to replace the selected table of figures instead of adding a new one.
 * @returns {boolean}
 */
ApiDocument.prototype.AddTableOfFigures = function(oTofPr, bReplace){ return true; };

/**
 * Returns the document statistics represented as an object with the following parameters:
 * * <b>PageCount</b> - number of pages;
 * * <b>WordsCount</b> - number of words;
 * * <b>ParagraphCount</b> - number of paragraphs;
 * * <b>SymbolsCount</b> - number of symbols;
 * * <b>SymbolsWSCount</b> - number of symbols with spaces.
 * @memberof ApiDocument
 * @typeofeditors ["CDE"]
 * @returns {object}
 */
ApiDocument.prototype.GetStatistics = function(){ return new object(); };

/**
 * Returns a number of pages in the current document.
 * <note>This method can be slow for large documents because it runs the document calculation
 * process before the full recalculation.</note>
 * @memberof ApiDocument
 * @typeofeditors ["CDE"]
 * @returns {number}
 */
ApiDocument.prototype.GetPageCount = function(){ return 0; };

/**
 * Returns all styles of the current document.
 * @memberof ApiDocument
 * @typeofeditors ["CDE"]
 * @returns {ApiStyle[]}
 */
ApiDocument.prototype.GetAllStyles = function(){ return [new ApiStyle()]; };

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
 * Adds a page break and starts the next element from the next page.
 * @memberof ApiParagraph
 * @typeofeditors ["CDE"]
 * @returns {ApiRun}
 */
ApiParagraph.prototype.AddPageBreak = function(){ return new ApiRun(); };

/**
 * Adds a line break to the current position and starts the next element from a new line.
 * @memberof ApiParagraph
 * @typeofeditors ["CDE", "CSE", "CPE"]
 * @returns {ApiRun}
 */
ApiParagraph.prototype.AddLineBreak = function(){ return new ApiRun(); };

/**
 * Adds a column break to the current position and starts the next element from a new column.
 * @memberof ApiParagraph
 * @typeofeditors ["CDE"]
 * @returns {ApiRun}
 */
ApiParagraph.prototype.AddColumnBreak = function(){ return new ApiRun(); };

/**
 * Inserts a number of the current document page into the paragraph.
 * @memberof ApiParagraph
 * @typeofeditors ["CDE"]
 * @returns {ApiRun}
 */
ApiParagraph.prototype.AddPageNumber = function(){ return new ApiRun(); };

/**
 * Inserts a number of pages in the current document into the paragraph.
 * @memberof ApiParagraph
 * @typeofeditors ["CDE"]
 * @returns {ApiRun}
 */
ApiParagraph.prototype.AddPagesCount = function(){ return new ApiRun(); };

/**
 * Returns the text properties of the paragraph mark which is used to mark the paragraph end. The mark can also acquire
 * common text properties like bold, italic, underline, etc.
 * @memberof ApiParagraph
 * @typeofeditors ["CDE"]
 * @returns {ApiTextPr}
 */
ApiParagraph.prototype.GetParagraphMarkTextPr = function(){ return new ApiTextPr(); };

/**
 * Returns the paragraph properties.
 * @memberof ApiParagraph
 * @typeofeditors ["CDE", "CSE", "CPE"]
 * @returns {ApiParaPr}
 */
ApiParagraph.prototype.GetParaPr = function(){ return new ApiParaPr(); };

/**
 * Returns the numbering definition and numbering level for the numbered list.
 * @memberof ApiParagraph
 * @typeofeditors ["CDE"]
 * @returns {ApiNumberingLevel}
 */
ApiParagraph.prototype.GetNumbering = function(){ return new ApiNumberingLevel(); };

/**
 * Specifies that the current paragraph references the numbering definition instance in the current document.
 * @memberof ApiParagraph
 * @typeofeditors ["CDE"]
 * @see Same as {@link ApiParagraph#SetNumPr}
 * @param {ApiNumberingLevel} oNumberingLevel - The numbering level which will be used for assigning the numbers to the paragraph.
 */
ApiParagraph.prototype.SetNumbering = function(oNumberingLevel){};

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
 * Adds a drawing object (image, shape or chart) to the current paragraph.
 * @memberof ApiParagraph
 * @typeofeditors ["CDE"]
 * @param {ApiDrawing} oDrawing - The object which will be added to the current paragraph.
 * @returns {ApiRun}
 */
ApiParagraph.prototype.AddDrawing = function(oDrawing){ return new ApiRun(); };

/**
 * Adds an inline container.
 * @memberof ApiParagraph
 * @typeofeditors ["CDE"]
 * @param {ApiInlineLvlSdt} oSdt - An inline container. If undefined or null, then new class ApiInlineLvlSdt will be created and added to the paragraph.
 * @returns {ApiInlineLvlSdt}
 */
ApiParagraph.prototype.AddInlineLvlSdt = function(oSdt){ return new ApiInlineLvlSdt(); };

/**
 * Adds a comment to the current paragraph.
 * <note>Please note that this paragraph must be in the document.</note>
 * @memberof ApiParagraph
 * @typeofeditors ["CDE"]
 * @param {string} sText - The comment text (required).
 * @param {string} sAuthor - The author's name (optional).
 * @param {string} sUserId - The user ID of the comment author (optional).
 * @returns {ApiComment} - Returns null if the comment was not added.
 */
ApiParagraph.prototype.AddComment = function(sText, sAuthor, sUserId){ return new ApiComment(); };

/**
 * Adds a hyperlink to a paragraph. 
 * @memberof ApiParagraph
 * @typeofeditors ["CDE"]
 * @param {string} sLink - The link address.
 * @param {string} sScreenTipText - The screen tip text.
 * @returns {ApiHyperlink | null} - returns null if params are invalid.
 */
ApiParagraph.prototype.AddHyperlink = function(sLink, sScreenTipText){ return new ApiHyperlink(); };

/**
 * Returns a Range object that represents the part of the document contained in the specified paragraph.
 * @memberof ApiParagraph
 * @typeofeditors ["CDE"]
 * @param {Number} Start - Start character in the current element.
 * @param {Number} End - End character in the current element.
 * @returns {ApiRange} 
 * */
ApiParagraph.prototype.GetRange = function(Start, End){ return new ApiRange(); };

/**
 * Adds an element to the current paragraph.
 * @memberof ApiParagraph
 * @typeofeditors ["CDE"]
 * @param {ParagraphContent} oElement - The document element which will be added at the current position. Returns false if the
 * oElement type is not supported by a paragraph.
 * @returns {boolean} Returns <code>false</code> if the type of <code>oElement</code> is not supported by paragraph
 * content.
 */
ApiParagraph.prototype.Push = function(oElement){ return true; };

/**
 * Returns the last Run with text in the current paragraph.
 * @memberof ApiParagraph
 * @typeofeditors ["CDE"]
 * @returns {ApiRun} Returns <code>false</code> if the paragraph doesn't containt the required run.
 */
ApiParagraph.prototype.GetLastRunWithText = function(){ return new ApiRun(); };

/**
 * Sets the bold property to the text character.
 * @memberof ApiParagraph
 * @typeofeditors ["CDE"]
 * @param {boolean} isBold - Specifies that the contents of this paragraph are displayed bold.
 * @returns {ApiParagraph} this
 */
ApiParagraph.prototype.SetBold = function(isBold){ return new ApiParagraph(); };

/**
 * Specifies that any lowercase characters in this paragraph are formatted for display only as their capital letter character equivalents.
 * @memberof ApiParagraph
 * @typeofeditors ["CDE"]
 * @param {boolean} isCaps - Specifies that the contents of the current paragraph are displayed capitalized.
 * @returns {ApiParagraph} this
 */
ApiParagraph.prototype.SetCaps = function(isCaps){ return new ApiParagraph(); };

/**
 * Sets the text color to the current paragraph in the RGB format.
 * @memberof ApiParagraph
 * @typeofeditors ["CDE"]
 * @param {byte} r - Red color component value.
 * @param {byte} g - Green color component value.
 * @param {byte} b - Blue color component value.
 * @param {boolean} [isAuto=false] - If this parameter is set to "true", then r,g,b parameters will be ignored.
 * @returns {ApiParagraph} this
 */
ApiParagraph.prototype.SetColor = function(r, g, b, isAuto){ return new ApiParagraph(); };

/**
 * Specifies that the contents of this paragraph are displayed with two horizontal lines through each character displayed on the line.
 * @memberof ApiParagraph
 * @typeofeditors ["CDE"]
 * @param {boolean} isDoubleStrikeout - Specifies that the contents of the current paragraph are displayed double struck through.
 * @returns {ApiParagraph} this
 */
ApiParagraph.prototype.SetDoubleStrikeout = function(isDoubleStrikeout){ return new ApiParagraph(); };

/**
 * Sets all 4 font slots with the specified font family.
 * @memberof ApiParagraph
 * @typeofeditors ["CDE"]
 * @param {string} sFontFamily - The font family or families used for the current paragraph.
 * @returns {ApiParagraph} this
 */
ApiParagraph.prototype.SetFontFamily = function(sFontFamily){ return new ApiParagraph(); };

/**
 * Returns all font names from all elements inside the current paragraph.
 * @memberof ApiParagraph
 * @typeofeditors ["CDE"]
 * @returns {string[]} - The font names used for the current paragraph.
 */
ApiParagraph.prototype.GetFontNames = function(){ return [""]; };

/**
 * Sets the font size to the characters of the current paragraph.
 * @memberof ApiParagraph
 * @typeofeditors ["CDE"]
 * @param {hps} nSize - The text size value measured in half-points (1/144 of an inch).
 * @returns {ApiParagraph} this
 */
ApiParagraph.prototype.SetFontSize = function(nSize){ return new ApiParagraph(); };

/**
 * Specifies a highlighting color which is applied as a background to the contents of the current paragraph.
 * @memberof ApiParagraph
 * @typeofeditors ["CDE", "CPE"]
 * @param {highlightColor} sColor - Available highlight color.
 * @returns {ApiParagraph} this
 */
ApiParagraph.prototype.SetHighlight = function(sColor){ return new ApiParagraph(); };

/**
 * Sets the italic property to the text character.
 * @memberof ApiParagraph
 * @typeofeditors ["CDE"]
 * @param {boolean} isItalic - Specifies that the contents of the current paragraph are displayed italicized.
 * @returns {ApiParagraph} this
 */
ApiParagraph.prototype.SetItalic = function(isItalic){ return new ApiParagraph(); };

/**
 * Specifies an amount by which text is raised or lowered for this paragraph in relation to the default
 * baseline of the surrounding non-positioned text.
 * @memberof ApiParagraph
 * @typeofeditors ["CDE"]
 * @param {hps} nPosition - Specifies a positive (raised text) or negative (lowered text)
 * measurement in half-points (1/144 of an inch).
 * @returns {ApiParagraph} this
 */
ApiParagraph.prototype.SetPosition = function(nPosition){ return new ApiParagraph(); };

/**
 * Specifies that all the small letter characters in this paragraph are formatted for display only as their capital
 * letter character equivalents which are two points smaller than the actual font size specified for this text.
 * @memberof ApiParagraph
 * @typeofeditors ["CDE"]
 * @param {boolean} isSmallCaps - Specifies if the contents of the current paragraph are displayed capitalized two points smaller or not.
 * @returns {ApiParagraph} this
 */
ApiParagraph.prototype.SetSmallCaps = function(isSmallCaps){ return new ApiParagraph(); };

/**
 * Sets the text spacing measured in twentieths of a point.
 * @memberof ApiParagraph
 * @typeofeditors ["CDE"]
 * @param {twips} nSpacing - The value of the text spacing measured in twentieths of a point (1/1440 of an inch).
 * @returns {ApiParagraph} this
 */
ApiParagraph.prototype.SetSpacing = function(nSpacing){ return new ApiParagraph(); };

/**
 * Specifies that the contents of this paragraph are displayed with a single horizontal line through the center of the line.
 * @memberof ApiParagraph
 * @typeofeditors ["CDE"]
 * @param {boolean} isStrikeout - Specifies that the contents of the current paragraph are displayed struck through.
 * @returns {ApiParagraph} this
 */
ApiParagraph.prototype.SetStrikeout = function(isStrikeout){ return new ApiParagraph(); };

/**
 * Specifies that the contents of this paragraph are displayed along with a line appearing directly below the character
 * (less than all the spacing above and below the characters on the line).
 * @memberof ApiParagraph
 * @typeofeditors ["CDE"]
 * @param {boolean} isUnderline - Specifies that the contents of the current paragraph are displayed underlined.
 * @returns {ApiParagraph} this
 */
ApiParagraph.prototype.SetUnderline = function(isUnderline){ return new ApiParagraph(); };

/**
 * Specifies the alignment which will be applied to the contents of this paragraph in relation to the default appearance of the paragraph text:
 * * <b>"baseline"</b> - the characters in the current paragraph will be aligned by the default text baseline.
 * * <b>"subscript"</b> - the characters in the current paragraph will be aligned below the default text baseline.
 * * <b>"superscript"</b> - the characters in the current paragraph will be aligned above the default text baseline.
 * @memberof ApiParagraph
 * @typeofeditors ["CDE"]
 * @param {("baseline" | "subscript" | "superscript")} sType - The vertical alignment type applied to the text contents.
 * @returns {ApiParagraph | null} - returns null is sType is invalid.
 */
ApiParagraph.prototype.SetVertAlign = function(sType){ return new ApiParagraph(); };

/**
 * Returns the last element of the paragraph which is not empty.
 * @memberof ApiParagraph
 * @typeofeditors ["CDE"]
 * @returns {ParagraphContent}
 */
ApiParagraph.prototype.Last = function(){ return new ParagraphContent(); };

/**
 * Returns a collection of content control objects in the paragraph.
 * @memberof ApiParagraph
 * @typeofeditors ["CDE"]
 * @returns {ApiInlineLvlSdt[]}   
 */
ApiParagraph.prototype.GetAllContentControls = function(){ return [new ApiInlineLvlSdt()]; };

/**
 * Returns a collection of drawing objects in the paragraph.
 * @memberof ApiParagraph
 * @typeofeditors ["CDE"]
 * @returns {ApiDrawing[]}  
 */
ApiParagraph.prototype.GetAllDrawingObjects = function(){ return [new ApiDrawing()]; };

/**
 * Returns a collection of shape objects in the paragraph.
 * @memberof ApiParagraph
 * @typeofeditors ["CDE"]
 * @returns {ApiShape[]}  
 */
ApiParagraph.prototype.GetAllShapes = function(){ return [new ApiShape()]; };

/**
 * Returns a collection of image objects in the paragraph.
 * @memberof ApiParagraph
 * @typeofeditors ["CDE"]
 * @returns {ApiImage[]}  
 */
ApiParagraph.prototype.GetAllImages = function(){ return [new ApiImage()]; };

/**
 * Returns a collection of chart objects in the paragraph.
 * @memberof ApiParagraph
 * @typeofeditors ["CDE"]
 * @returns {ApiChart[]}  
 */
ApiParagraph.prototype.GetAllCharts = function(){ return [new ApiChart()]; };

/**
 * Returns a collection of OLE objects in the paragraph.
 * @memberof ApiParagraph
 * @typeofeditors ["CDE"]
 * @returns {ApiOleObject[]}  
 */
ApiParagraph.prototype.GetAllOleObjects = function(){ return [new ApiOleObject()]; };

/**
 * Returns a content control that contains the current paragraph.
 * @memberof ApiParagraph
 * @typeofeditors ["CDE"]
 * @returns {ApiBlockLvlSdt | null} - returns null is parent content control doesn't exist.  
 */
ApiParagraph.prototype.GetParentContentControl = function(){ return new ApiBlockLvlSdt(); };

/**
 * Returns a table that contains the current paragraph.
 * @memberof ApiParagraph
 * @typeofeditors ["CDE"]
 * @returns {ApiTable | null} - returns null if parent table doesn't exist.  
 */
ApiParagraph.prototype.GetParentTable = function(){ return new ApiTable(); };

/**
 * Returns a table cell that contains the current paragraph.
 * @memberof ApiParagraph
 * @typeofeditors ["CDE"]
 * @returns {ApiTableCell | null} - returns null if parent cell doesn't exist.  
 */
ApiParagraph.prototype.GetParentTableCell = function(){ return new ApiTableCell(); };

/**
 * Returns the paragraph text.
 * @memberof ApiParagraph
 * @param {object} oPr - The resulting string display properties.
 * @param {boolean} [oPr.Numbering=false] - Defines if the resulting string will include numbering or not.
 * @param {boolean} [oPr.Math=false] - Defines if the resulting string will include mathematical expressions or not.
 * @param {string} [oPr.NewLineSeparator='\r'] - Defines how the line separator will be specified in the resulting string.
 * @param {string} [oPr.TabSymbol='\t'] - Defines how the tab will be specified in the resulting string (does not apply to numbering).
 * @typeofeditors ["CDE"]
 * @returns {string}
 */
ApiParagraph.prototype.GetText = function(oPr){ return ""; };

/**
 * Returns the paragraph text properties.
 * @memberof ApiParagraph
 * @typeofeditors ["CDE"]
 * @returns {ApiTextPr}  
 */
ApiParagraph.prototype.GetTextPr = function(){ return new ApiTextPr(); };

/**
 * Sets the paragraph text properties.
 * @memberof ApiParagraph
 * @typeofeditors ["CDE"]
 * @param {ApiTextPr} oTextPr - The paragraph text properties.
 * @returns {boolean} - returns false if param is invalid.
 */
ApiParagraph.prototype.SetTextPr = function(oTextPr){ return true; };

/**
 * Wraps the paragraph object with a rich text content control.
 * @memberof ApiParagraph
 * @typeofeditors ["CDE"]
 * @param {number} nType - Defines if this method returns the ApiBlockLvlSdt (nType === 1) or ApiParagraph (any value except 1) object.
 * @returns {ApiParagraph | ApiBlockLvlSdt}  
 */
ApiParagraph.prototype.InsertInContentControl = function(nType){ return new ApiParagraph(); };

/**
 * Inserts a paragraph at the specified position.
 * @memberof ApiParagraph
 * @typeofeditors ["CDE"]
 * @param {string | ApiParagraph} paragraph - Text or paragraph.
 * @param {string} sPosition - The position where the text or paragraph will be inserted ("before" or "after" the paragraph specified).
 * @param {boolean} beRNewPara - Defines if this method returns a new paragraph (true) or the current paragraph (false).
 * @returns {ApiParagraph | null} - returns null if param paragraph is invalid. 
 */
ApiParagraph.prototype.InsertParagraph = function(paragraph, sPosition, beRNewPara){ return new ApiParagraph(); };

/**
 * Selects the current paragraph.
 * @memberof ApiParagraph
 * @typeofeditors ["CDE"]
 * @returns {boolean}
 */
ApiParagraph.prototype.Select = function(){ return true; };

/**
 * Searches for a scope of a paragraph object. The search results are a collection of ApiRange objects.
 * @memberof ApiParagraph
 * @typeofeditors ["CDE"]
 * @param {string} sText - Search string.
 * @param {boolean} isMatchCase - Case sensitive or not.
 * @returns {ApiRange[]}  
 */
ApiParagraph.prototype.Search = function(sText, isMatchCase){ return [new ApiRange()]; };

/**
 * Wraps the paragraph content in a mail merge field.
 * @memberof ApiParagraph
 * @typeofeditors ["CDE"]
 */
ApiParagraph.prototype.WrapInMailMergeField = function(){};

/**
 * Adds a numbered cross-reference to the current paragraph.
 * <note>Please note that this paragraph must be in the document.</note>
 * @memberof ApiParagraph
 * @typeofeditors ["CDE"]
 * @param {numberedRefTo} sRefType - The text or numeric value of a numbered reference you want to insert.
 * @param {ApiParagraph} oParaTo - The numbered paragraph to be referred to (must be in the document).
 * @param {boolean} [bLink=true] - Specifies if the reference will be inserted as a hyperlink.
 * @param {boolean} [bAboveBelow=false] - Specifies if the above/below words indicating the position of the reference should be included (don't used with the "text" and "aboveBelow" sRefType).
 * @param {string} [sSepWith=""] - A number separator (used only with the "fullCtxParaNum" sRefType).
 * @returns {boolean}
 */
ApiParagraph.prototype.AddNumberedCrossRef = function(sRefTo, oParaTo, bLink, bAboveBelow, sSepWith){ return true; };

/**
 * Adds a heading cross-reference to the current paragraph.
 * <note>Please note that this paragraph must be in the document.</note>
 * @memberof ApiParagraph
 * @typeofeditors ["CDE"]
 * @param {headingRefTo} sRefType - The text or numeric value of a heading reference you want to insert.
 * @param {ApiParagraph} oParaTo - The heading paragraph to be referred to (must be in the document).
 * @param {boolean} [bLink=true] - Specifies if the reference will be inserted as a hyperlink.
 * @param {boolean} [bAboveBelow=false] - Specifies if the above/below words indicating the position of the reference should be included (don't used with the "text" and "aboveBelow" sRefType).
 * @returns {boolean}
 */
ApiParagraph.prototype.AddHeadingCrossRef = function(sRefTo, oParaTo, bLink, bAboveBelow){ return true; };

/**
 * Adds a bookmark cross-reference to the current paragraph.
 * <note>Please note that this paragraph must be in the document.</note>
 * @memberof ApiParagraph
 * @typeofeditors ["CDE"]
 * @param {bookmarkRefTo} sRefType - The text or numeric value of a bookmark reference you want to insert.
 * @param {string} sBookmarkName - The name of the bookmark to be referred to (must be in the document).
 * @param {boolean} [bLink=true] - Specifies if the reference will be inserted as a hyperlink.
 * @param {boolean} [bAboveBelow=false] - Specifies if the above/below words indicating the position of the reference should be included (don't used with the "text" and "aboveBelow" sRefType).
 * @param {string} [sSepWith=""] - A number separator (used only with the "fullCtxParaNum" sRefType).
 * @returns {boolean}
 */
ApiParagraph.prototype.AddBookmarkCrossRef = function(sRefTo, sBookmarkName, bLink, bAboveBelow, sSepWith){ return true; };

/**
 * Adds a footnote cross-reference to the current paragraph.
 * <note>Please note that this paragraph must be in the document.</note>
 * @memberof ApiParagraph
 * @typeofeditors ["CDE"]
 * @param {footnoteRefTo} sRefType - The text or numeric value of a footnote reference you want to insert.
 * @param {ApiParagraph} oParaTo - The first paragraph from a footnote to be referred to (must be in the document).
 * @param {boolean} [bLink=true] - Specifies if the reference will be inserted as a hyperlink.
 * @param {boolean} [bAboveBelow=false] - Specifies if the above/below words indicating the position of the reference should be included (don't used with the "aboveBelow" sRefType).
 * @returns {boolean}
 */
ApiParagraph.prototype.AddFootnoteCrossRef = function(sRefTo, oParaTo, bLink, bAboveBelow){ return true; };

/**
 * Adds an endnote cross-reference to the current paragraph.
 * <note>Please note that this paragraph must be in the document.</note>
 * @memberof ApiParagraph
 * @typeofeditors ["CDE"]
 * @param {endnoteRefTo} sRefType - The text or numeric value of an endnote reference you want to insert.
 * @param {ApiParagraph} oParaTo - The first paragraph from an endnote to be referred to (must be in the document).
 * @param {boolean} [bLink=true] - Specifies if the reference will be inserted as a hyperlink.
 * @param {boolean} [bAboveBelow=false] - Specifies if the above/below words indicating the position of the reference should be included (don't used with the "aboveBelow" sRefType).
 * @returns {boolean}
 */
ApiParagraph.prototype.AddEndnoteCrossRef = function(sRefTo, oParaTo, bLink, bAboveBelow){ return true; };

/**
 * Adds a caption cross-reference to the current paragraph.
 * <note>Please note that this paragraph must be in the document.</note>
 * @memberof ApiParagraph
 * @typeofeditors ["CDE"]
 * @param {CaptionLabel | string} sCaption - The caption label ("Equation", "Figure", "Table", or another caption label).
 * @param {captionRefTo} sRefType - The text or numeric value of a caption reference you want to insert.
 * @param {ApiParagraph} oParaTo - The caption paragraph to be referred to (must be in the document).
 * @param {boolean} [bLink=true] - Specifies if the reference will be inserted as a hyperlink.
 * @param {boolean} [bAboveBelow=false] - Specifies if the above/below words indicating the position of the reference should be included (used only with the "pageNum" sRefType).
 * @returns {boolean}
 */
ApiParagraph.prototype.AddCaptionCrossRef = function(sCaption, sRefTo, oParaTo, bLink, bAboveBelow){ return true; };

/**
 * Converts the ApiParagraph object into the JSON object.
 * @memberof ApiParagraph
 * @typeofeditors ["CDE"]
 * @param {boolean} bWriteNumberings - Specifies if the used numberings will be written to the JSON object or not.
 * @param {boolean} bWriteStyles - Specifies if the used styles will be written to the JSON object or not.
 * @returns {JSON}
 */
ApiParagraph.prototype.ToJSON = function(bWriteNumberings, bWriteStyles){ return new JSON(); };

/**
 * Returns the paragraph position within its parent element.
 * @memberof ApiParagraph
 * @typeofeditors ["CDE"]
 * @returns {Number} - returns -1 if the paragraph parent doesn't exist. 
 */
ApiParagraph.prototype.GetPosInParent = function(){ return 0; };

/**
 * Replaces the current paragraph with a new element.
 * @memberof ApiParagraph
 * @typeofeditors ["CDE"]
 * @param {DocumentElement} oElement - The element to replace the current paragraph with.
 * @returns {boolean}
 */
ApiParagraph.prototype.ReplaceByElement = function(oElement){ return true; };

/**
 * Adds a caption paragraph after (or before) the current paragraph.
 * <note>Please note that the current paragraph must be in the document (not in the footer/header).
 * And if the current paragraph is placed in a shape, then a caption is added after (or before) the parent shape.</note>
 * @memberof ApiParagraph
 * @typeofeditors ["CDE"]
 * @param {string} sAdditional - The additional text.
 * @param {CaptionLabel | String} [sLabel="Table"] - The caption label.
 * @param {boolean} [bExludeLabel=false] - Specifies whether to exclude the label from the caption.
 * @param {CaptionNumberingFormat} [sNumberingFormat="Arabic"] - The possible caption numbering format.
 * @param {boolean} [bBefore=false] - Specifies whether to insert the caption before the current paragraph (true) or after (false) (after/before the shape if it is placed in the shape).
 * @param {Number} [nHeadingLvl=undefined] - The heading level (used if you want to specify the chapter number).
 * <note>If you want to specify "Heading 1", then nHeadingLvl === 0 and etc.</note>
 * @param {CaptionSep} [sCaptionSep="hyphen"] - The caption separator (used if you want to specify the chapter number).
 * @returns {boolean}
 */
ApiParagraph.prototype.AddCaption = function(sAdditional, sLabel, bExludeLabel, sNumberingFormat, bBefore, nHeadingLvl, sCaptionSep){ return true; };

/**
 * Returns the paragraph section.
 * @memberof ApiParagraph
 * @typeofeditors ["CDE"]
 * @returns {ApiSection}
 */
ApiParagraph.prototype.GetSection = function(){ return new ApiSection(); };

/**
 * Sets the specified section to the current paragraph.
 * @memberof ApiParagraph
 * @typeofeditors ["CDE"]
 * @param {ApiSection} oSection - The section which will be set to the paragraph.
 * @returns {boolean}
 */
ApiParagraph.prototype.SetSection = function(oSection){ return true; };

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
 * Adds a page break and starts the next element from a new page.
 * @memberof ApiRun
 * @typeofeditors ["CDE"]
 */
ApiRun.prototype.AddPageBreak = function(){};

/**
 * Adds a line break to the current run position and starts the next element from a new line.
 * @memberof ApiRun
 * @typeofeditors ["CDE", "CSE", "CPE"]
 */
ApiRun.prototype.AddLineBreak = function(){};

/**
 * Adds a column break to the current run position and starts the next element from a new column.
 * @memberof ApiRun
 * @typeofeditors ["CDE"]
 */
ApiRun.prototype.AddColumnBreak = function(){};

/**
 * Adds a tab stop to the current run.
 * @memberof ApiRun
 * @typeofeditors ["CDE", "CSE", "CPE"]
 */
ApiRun.prototype.AddTabStop = function(){};

/**
 * Adds a drawing object (image, shape or chart) to the current text run.
 * @memberof ApiRun
 * @typeofeditors ["CDE"]
 * @param {ApiDrawing} oDrawing - The object which will be added to the current run.
 * @returns {boolean} - returns false if param is invalid.
 */
ApiRun.prototype.AddDrawing = function(oDrawing){ return true; };

/**
 * Selects the current run.
 * @memberof ApiRun
 * @typeofeditors ["CDE"]
 * @returns {boolean}
 */
ApiRun.prototype.Select = function(){ return true; };

/**
 * Adds a hyperlink to the current run. 
 * @memberof ApiRun
 * @typeofeditors ["CDE"]
 * @param {string} sLink - The link address.
 * @param {string} sScreenTipText - The screen tip text.
 * @returns {ApiHyperlink | null} - returns false if params are invalid.
 */
ApiRun.prototype.AddHyperlink = function(sLink, sScreenTipText){ return new ApiHyperlink(); };

/**
 * Creates a copy of the current run.
 * @memberof ApiRun
 * @typeofeditors ["CDE", "CSE", "CPE"]
 * @returns {ApiRun}
 */
ApiRun.prototype.Copy = function(){ return new ApiRun(); };

/**
 * Returns a Range object that represents the part of the document contained in the specified run.
 * @memberof ApiRun
 * @typeofeditors ["CDE"]
 * @param {Number} Start - Start character in the current element.
 * @param {Number} End - End character in the current element.
 * @returns {ApiRange} 
 * */
ApiRun.prototype.GetRange = function(Start, End){ return new ApiRange(); };

/**
 * Returns a content control that contains the current run.
 * @memberof ApiRun
 * @typeofeditors ["CDE"]
 * @returns {ApiBlockLvlSdt | ApiInlineLvlSdt | null} - returns null if parent content control doesn't exist.  
 */
ApiRun.prototype.GetParentContentControl = function(){ return new ApiBlockLvlSdt(); };

/**
 * Returns a table that contains the current run.
 * @memberof ApiRun
 * @typeofeditors ["CDE"]
 * @returns {ApiTable | null} - returns null if parent table doesn't exist.
 */
ApiRun.prototype.GetParentTable = function(){ return new ApiTable(); };

/**
 * Returns a table cell that contains the current run.
 * @memberof ApiRun
 * @typeofeditors ["CDE"]
 * @returns {ApiTableCell | null} - returns null is parent cell doesn't exist.  
 */
ApiRun.prototype.GetParentTableCell = function(){ return new ApiTableCell(); };

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
 * Wraps a run in a mail merge field.
 * @memberof ApiRun
 * @typeofeditors ["CDE"]
 */
ApiRun.prototype.WrapInMailMergeField = function(){};

/**
 * Converts the ApiRun object into the JSON object.
 * @memberof ApiRun
 * @typeofeditors ["CDE"]
 * @param {boolean} bWriteStyles - Specifies if the used styles will be written to the JSON object or not.
 * @returns {JSON}
 */
ApiRun.prototype.ToJSON = function(bWriteStyles){ return new JSON(); };

/**
 * Adds a comment to the current run.
 * <note>Please note that this run must be in the document.</note>
 * @memberof ApiRun
 * @typeofeditors ["CDE"]
 * @param {string} sText - The comment text (required).
 * @param {string} sAuthor - The author's name (optional).
 * @param {string} sUserId - The user ID of the comment author (optional).
 * @returns {ApiComment} - Returns null if the comment was not added.
 */
ApiRun.prototype.AddComment = function(sText, sAuthor, sUserId){ return new ApiComment(); };

/**
 * Returns a text from the text run.
 * @memberof ApiRun
 * @param {object} oPr - The resulting string display properties.
 * @param {string} [oPr.NewLineSeparator='\r'] - Defines how the line separator will be specified in the resulting string.
 * @param {string} [oPr.TabSymbol='\t'] - Defines how the tab will be specified in the resulting string.
 * @typeofeditors ["CDE"]
 * @returns {string}
 */
ApiRun.prototype.GetText = function(oPr){ return ""; };

/**
 * Returns a type of the ApiSection class.
 * @memberof ApiSection
 * @typeofeditors ["CDE"]
 * @returns {"section"}
 */
ApiSection.prototype.GetClassType = function(){ return ""; };

/**
 * Specifies a type of the current section. The section type defines how the contents of the current 
 * section are placed relative to the previous section.<br/>
 * WordprocessingML supports five distinct types of section breaks:
 *   * <b>Next page</b> section breaks (the default if type is not specified), which begin the new section on the
 *   following page.
 *   * <b>Odd</b> page section breaks, which begin the new section on the next odd-numbered page.
 *   * <b>Even</b> page section breaks, which begin the new section on the next even-numbered page.
 *   * <b>Continuous</b> section breaks, which begin the new section on the following paragraph. This means that
 *   continuous section breaks might not specify certain page-level section properties, since they shall be
 *   inherited from the following section. These breaks, however, can specify other section properties, such
 *   as line numbering and footnote/endnote settings.
 *   * <b>Column</b> section breaks, which begin the new section on the next column on the page.
 * @memberof ApiSection
 * @typeofeditors ["CDE"]
 * @param {("nextPage" | "oddPage" | "evenPage" | "continuous" | "nextColumn")} sType - The section break type.
 */
ApiSection.prototype.SetType = function(sType){};

/**
 * Specifies that all the text columns in the current section are of equal width.
 * @memberof ApiSection
 * @typeofeditors ["CDE"]
 * @param {number} nCount - Number of columns.
 * @param {twips} nSpace - Distance between columns measured in twentieths of a point (1/1440 of an inch).
 */
ApiSection.prototype.SetEqualColumns = function(nCount, nSpace){};

/**
 * Specifies that all the columns in the current section have the different widths. Number of columns is equal 
 * to the length of the aWidth array. The length of the aSpaces array MUST BE equal to (aWidth.length - 1).
 * @memberof ApiSection
 * @typeofeditors ["CDE"]
 * @param {twips[]} aWidths - An array of column width values measured in twentieths of a point (1/1440 of an inch).
 * @param {twips[]} aSpaces - An array of distance values between the columns measured in twentieths of a point (1/1440 of an inch).
 */
ApiSection.prototype.SetNotEqualColumns = function(aWidths, aSpaces){};

/**
 * Specifies the properties (size and orientation) for all the pages in the current section.
 * @memberof ApiSection
 * @typeofeditors ["CDE"]
 * @param {twips} nWidth - The page width measured in twentieths of a point (1/1440 of an inch).
 * @param {twips} nHeight - The page height measured in twentieths of a point (1/1440 of an inch).
 * @param {boolean} [isPortrait=false] - Specifies the orientation of all the pages in this section (if set to true, then the portrait orientation is chosen).
 */
ApiSection.prototype.SetPageSize = function(nWidth, nHeight, isPortrait){};

/**
 * Gets page height for current section.
 * @memberof ApiSection
 * @typeofeditors ["CDE"]
 * @returns {twips}
 */
ApiSection.prototype.GetPageHeight = function(){ return new twips(); };

/**
 * Gets page width for current section.
 * @memberof ApiSection
 * @typeofeditors ["CDE"]
 * @returns {twips}
 */
ApiSection.prototype.GetPageWidth = function(){ return new twips(); };

/**
 * Specifies the page margins for all the pages in this section.
 * @memberof ApiSection
 * @typeofeditors ["CDE"]
 * @param {twips} nLeft - The left margin width measured in twentieths of a point (1/1440 of an inch).
 * @param {twips} nTop - The top margin height measured in twentieths of a point (1/1440 of an inch).
 * @param {twips} nRight - The right margin width measured in twentieths of a point (1/1440 of an inch).
 * @param {twips} nBottom - The bottom margin height measured in twentieths of a point (1/1440 of an inch).
 */
ApiSection.prototype.SetPageMargins = function(nLeft, nTop, nRight, nBottom){};

/**
 * Specifies the distance from the top edge of the page to the top edge of the header.
 * @memberof ApiSection
 * @typeofeditors ["CDE"]
 * @param {twips} nDistance - The distance from the top edge of the page to the top edge of the header measured in twentieths of a point (1/1440 of an inch).
 */
ApiSection.prototype.SetHeaderDistance = function(nDistance){};

/**
 * Specifies the distance from the bottom edge of the page to the bottom edge of the footer.
 * @memberof ApiSection
 * @typeofeditors ["CDE"]
 * @param {twips} nDistance - The distance from the bottom edge of the page to the bottom edge of the footer measured
 * in twentieths of a point (1/1440 of an inch).
 */
ApiSection.prototype.SetFooterDistance = function(nDistance){};

/**
 * Returns the content for the specified header type.
 * @memberof ApiSection
 * @typeofeditors ["CDE"]
 * @param {HdrFtrType} sType - Header type to get the content from.
 * @param {boolean} [isCreate=false] - Specifies whether to create a new header or not with the specified header type in case
 * no header with such a type could be found in the current section.
 * @returns {ApiDocumentContent}
 */
ApiSection.prototype.GetHeader = function(sType, isCreate){ return new ApiDocumentContent(); };

/**
 * Removes the header of the specified type from the current section. After removal, the header will be inherited from
 * the previous section, or if this is the first section in the document, no header of the specified type will be presented.
 * @memberof ApiSection
 * @typeofeditors ["CDE"]
 * @param {HdrFtrType} sType - Header type to be removed.
 */
ApiSection.prototype.RemoveHeader = function(sType){};

/**
 * Returns the content for the specified footer type.
 * @memberof ApiSection
 * @typeofeditors ["CDE"]
 * @param {HdrFtrType} sType - Footer type to get the content from.
 * @param {boolean} [isCreate=false] - Specifies whether to create a new footer or not with the specified footer type in case
 * no footer with such a type could be found in the current section.
 * @returns {ApiDocumentContent}
 */
ApiSection.prototype.GetFooter = function(sType, isCreate){ return new ApiDocumentContent(); };

/**
 * Removes the footer of the specified type from the current section. After removal, the footer will be inherited from 
 * the previous section, or if this is the first section in the document, no footer of the specified type will be presented.
 * @memberof ApiSection
 * @typeofeditors ["CDE"]
 * @param {HdrFtrType} sType - Footer type to be removed.
 */
ApiSection.prototype.RemoveFooter = function(sType){};

/**
 * Specifies whether the current section in this document has the different header and footer for the section first page.
 * @memberof ApiSection
 * @typeofeditors ["CDE"]
 * @param {boolean} isTitlePage - If true, the first page of the section will have header and footer that will differ from the other pages of the same section.
 */
ApiSection.prototype.SetTitlePage = function(isTitlePage){};

/**
 * Returns the next section if exists.
 * @memberof ApiSection
 * @typeofeditors ["CDE"]
 * @returns {ApiSection | null} - returns null if section is last.
 */
ApiSection.prototype.GetNext = function(){ return new ApiSection(); };

/**
 * Returns the previous section if exists.
 * @memberof ApiSection
 * @typeofeditors ["CDE"]
 * @returns {ApiSection | null} - returns null if section is first.
 */
ApiSection.prototype.GetPrevious = function(){ return new ApiSection(); };

/**
 * Converts the ApiSection object into the JSON object.
 * @memberof ApiSection
 * @typeofeditors ["CDE"]
 * @param {boolean} bWriteNumberings - Specifies if the used numberings will be written to the JSON object or not.
 * @param {boolean} bWriteStyles - Specifies if the used styles will be written to the JSON object or not.
 * @returns {JSON}
 */
ApiSection.prototype.ToJSON = function(bWriteNumberings, bWriteStyles){ return new JSON(); };

/**
 * Returns a type of the ApiTable class.
 * @memberof ApiTable
 * @typeofeditors ["CDE"]
 * @returns {"table"}
 */
ApiTable.prototype.GetClassType = function(){ return ""; };

/**
 * Returns a number of rows in the current table.
 * @memberof ApiTable
 * @typeofeditors ["CDE"]
 * @returns {number}
 */
ApiTable.prototype.GetRowsCount = function(){ return 0; };

/**
 * Returns a table row by its position in the table.
 * @memberof ApiTable
 * @typeofeditors ["CDE"]
 * @param {number} nPos - The row position within the table.
 * @returns {ApiTableRow | null} - returns null if param is invalid.
 */
ApiTable.prototype.GetRow = function(nPos){ return new ApiTableRow(); };

/**
 * Returns a cell by its position.
 * @memberof ApiTable
 * @typeofeditors ["CDE"]
 * @param {number} nRow - The row position in the current table where the specified cell is placed.
 * @param {number} nCell - The cell position in the current table.
 * @returns {ApiTableCell | null} - returns null if params are invalid.
 */
ApiTable.prototype.GetCell = function(nRow, nCell){ return new ApiTableCell(); };

/**
 * Merges an array of cells. If the merge is done successfully, it will return the resulting merged cell, otherwise the result will be "null".
 * <note>The number of cells in any row and the number of rows in the current table may be changed.</note>
 * @memberof ApiTable
 * @typeofeditors ["CDE"]
 * @param {ApiTableCell[]} aCells - The array of cells to be merged.
 * @returns {ApiTableCell}
 */
ApiTable.prototype.MergeCells = function(aCells){ return new ApiTableCell(); };

/**
 * Sets a style to the current table.
 * @memberof ApiTable
 * @typeofeditors ["CDE"]
 * @param {ApiStyle} oStyle - The style which will be applied to the current table.
 * @returns {boolean} - returns false if param is invalid.
 */
ApiTable.prototype.SetStyle = function(oStyle){ return true; };

/**
 * Specifies the conditional formatting components of the referenced table style (if one exists) 
 * which will be applied to the set of table rows with the current table-level property exceptions. A table style 
 * can specify up to six different optional conditional formats, for example, different formatting for the first column, 
 * which then can be applied or omitted from individual table rows in the parent table.
 * 
 * The default setting is to apply the row and column band formatting, but not the first row, last row, first 
 * column, or last column formatting.
 * @memberof ApiTable
 * @typeofeditors ["CDE"]
 * @param {boolean} isFirstColumn - Specifies that the first column conditional formatting will be applied to the table.
 * @param {boolean} isFirstRow - Specifies that the first row conditional formatting will be applied to the table.
 * @param {boolean} isLastColumn - Specifies that the last column conditional formatting will be applied to the table.
 * @param {boolean} isLastRow - Specifies that the last row conditional formatting will be applied to the table.
 * @param {boolean} isHorBand - Specifies that the horizontal band conditional formatting will not be applied to the table.
 * @param {boolean} isVerBand - Specifies that the vertical band conditional formatting will not be applied to the table.
 */
ApiTable.prototype.SetTableLook = function(isFirstColumn, isFirstRow, isLastColumn, isLastRow, isHorBand, isVerBand){};

/**
 * Splits the cell into a given number of rows and columns.
 * @memberof ApiTable
 * @typeofeditors ["CDE"]
 * @param {ApiTableCell} [oCell] - The cell which will be split.
 * @param {Number} [nRow=1] - Count of rows into which the cell will be split.
 * @param {Number} [nCol=1] - Count of columns into which the cell will be split.
 * @returns {ApiTable | null} - returns null if can't split.
 */
ApiTable.prototype.Split = function(oCell, nRow, nCol){ return new ApiTable(); };

/**
 * Adds a new row to the current table.
 * @memberof ApiTable
 * @typeofeditors ["CDE"]
 * @param {ApiTableCell} [oCell] - The cell after which a new row will be added. If not specified, a new row will
 * be added at the end of the table.
 * @param {boolean} [isBefore=false] - Adds a new row before (false) or after (true) the specified cell. If no cell is specified, then
 * this parameter will be ignored.
 * @returns {ApiTableRow}
 */
ApiTable.prototype.AddRow = function(oCell, isBefore){ return new ApiTableRow(); };

/**
 * Adds the new rows to the current table.
 * @memberof ApiTable
 * @typeofeditors ["CDE"]
 * @param {ApiTableCell} [oCell] - The cell after which the new rows will be added. If not specified, the new rows will
 * be added at the end of the table.
 * @param {Number} nCount - Count of rows to be added.
 * @param {boolean} [isBefore=false] - Adds the new rows before (false) or after (true) the specified cell. If no cell is specified, then
 * this parameter will be ignored.
 * @returns {ApiTable}
 */
ApiTable.prototype.AddRows = function(oCell, nCount, isBefore){ return new ApiTable(); };

/**
 * Adds a new column to the current table.
 * @memberof ApiTable
 * @typeofeditors ["CDE"]
 * @param {ApiTableCell} [oCell] - The cell after which a new column will be added. If not specified, a new column will be added at the end of the table.
 * @param {boolean} [isBefore=false] - Adds a new column before (false) or after (true) the specified cell. If no cell is specified,
 * then this parameter will be ignored.
 */
ApiTable.prototype.AddColumn = function(oCell, isBefore){};

/**
 * Adds the new columns to the current table.
 * @memberof ApiTable
 * @typeofeditors ["CDE"]
 * @param {ApiTableCell} [oCell] - The cell after which the new columns will be added. If not specified, the new columns will be added at the end of the table.
 * @param {Number} nCount - Count of columns to be added.
 * @param {boolean} [isBefore=false] - Adds the new columns before (false) or after (true) the specified cell. If no cell is specified,
 * then this parameter will be ignored.
 */
ApiTable.prototype.AddColumns = function(oCell, nCount, isBefore){};

/**
 * Adds a paragraph or a table or a blockLvl content control using its position in the cell.
 * @memberof ApiTable
 * @typeofeditors ["CDE", "CPE"]
 * @param {ApiTableCell} oCell - The cell where the specified element will be added.
 * @param {number} nPos - The position in the cell where the specified element will be added.
 * @param {DocumentElement} oElement - The document element which will be added at the current position.
 */
ApiTable.prototype.AddElement = function(oCell, nPos, oElement){};

/**
 * Removes a table row with a specified cell.
 * @memberof ApiTable
 * @typeofeditors ["CDE"]
 * @param {ApiTableCell} oCell - The cell which is placed in the row that will be removed.
 * @returns {boolean} Is the table empty after removing.
 */
ApiTable.prototype.RemoveRow = function(oCell){ return true; };

/**
 * Removes a table column with a specified cell.
 * @memberof ApiTable
 * @typeofeditors ["CDE"]
 * @param {ApiTableCell} oCell - The cell which is placed in the column that will be removed.
 * @returns {boolean} Is the table empty after removing.
 */
ApiTable.prototype.RemoveColumn = function(oCell){ return true; };

/**
 * Creates a copy of the current table.
 * @memberof ApiTable
 * @typeofeditors ["CDE", "CPE"]
 * @returns {ApiTable}
 */
ApiTable.prototype.Copy = function(){ return new ApiTable(); };

/**
 * Selects the current table.
 * @memberof ApiTable
 * @typeofeditors ["CDE", "CPE"]
 * @returns {boolean}
 */
ApiTable.prototype.Select = function(){ return true; };

/**
 * Returns a Range object that represents the part of the document contained in the specified table.
 * @memberof ApiTable
 * @typeofeditors ["CDE"]
 * @param {Number} Start - Start character in the current element.
 * @param {Number} End - End character in the current element.
 * @returns {ApiRange} 
 * */
ApiTable.prototype.GetRange = function(Start, End){ return new ApiRange(); };

/**
 * Sets the horizontal alignment to the table.
 * @memberof ApiTable
 * @typeofeditors ["CDE"]
 * @param {String} sType - Horizontal alignment type: may be "left" or "center" or "right".
 * @returns {boolean} - returns false if param is invalid.
 * */
ApiTable.prototype.SetHAlign = function(sType){ return true; };

/**
 * Sets the vertical alignment to the table.
 * @typeofeditors ["CDE"]
 * @param {String} sType - Vertical alignment type: may be "top" or "center" or "bottom".
 * @returns {boolean} - returns false if param is invalid.
 * */
ApiTable.prototype.SetVAlign = function(sType){ return true; };

/**
 * Sets the table paddings.
 * If table is inline, then only left padding is applied.
 * @memberof ApiTable
 * @typeofeditors ["CDE"]
 * @param {Number} nLeft - Left padding.
 * @param {Number} nTop - Top padding.
 * @param {Number} nRight - Right padding.
 * @param {Number} nBottom - Bottom padding.
 * @returns {boolean} - returns true.
 * */
ApiTable.prototype.SetPaddings = function(nLeft, nTop, nRight, nBottom){ return true; };

/**
 * Sets the table wrapping style.
 * @memberof ApiTable
 * @typeofeditors ["CDE"]
 * @param {boolean} isFlow - Specifies if the table is inline or not.
 * @returns {boolean} - returns false if param is invalid.
 * */
ApiTable.prototype.SetWrappingStyle = function(isFlow){ return true; };

/**
 * Returns a content control that contains the current table.
 * @memberof ApiTable
 * @typeofeditors ["CDE"]
 * @returns {ApiBlockLvlSdt | null} - return null is parent content control doesn't exist.
 */
ApiTable.prototype.GetParentContentControl = function(){ return new ApiBlockLvlSdt(); };

/**
 * Wraps the current table object with a content control.
 * @memberof ApiTable
 * @typeofeditors ["CDE"]
 * @param {number} nType - Defines if this method returns the ApiBlockLvlSdt (nType === 1) or ApiTable (any value except 1) object.
 * @returns {ApiTable | ApiBlockLvlSdt}  
 */
ApiTable.prototype.InsertInContentControl = function(nType){ return new ApiTable(); };

/**
 * Returns a table that contains the current table.
 * @memberof ApiTable
 * @typeofeditors ["CDE"]
 * @returns {ApiTable | null} - returns null if parent table doesn't exist.  
 */
ApiTable.prototype.GetParentTable = function(){ return new ApiTable(); };

/**
 * Returns the tables that contain the current table.
 * @memberof ApiTable
 * @typeofeditors ["CDE"]
 * @returns {ApiTable[]}  
 */
ApiTable.prototype.GetTables = function(){ return [new ApiTable()]; };

/**
 * Returns the next table if exists.
 * @memberof ApiTable
 * @typeofeditors ["CDE"]
 * @returns {ApiTable | null} - returns null if table is last.  
 */
ApiTable.prototype.GetNext = function(){ return new ApiTable(); };

/**
 * Returns the previous table if exists.
 * @memberof ApiTable
 * @typeofeditors ["CDE"]
 * @returns {ApiTable | null} - returns null if table is first.  
 */
ApiTable.prototype.GetPrevious = function(){ return new ApiTable(); };

/**
 * Returns a table cell that contains the current table.
 * @memberof ApiTable
 * @typeofeditors ["CDE"]
 * @returns {ApiTableCell | null} - returns null if parent cell doesn't exist.  
 */
ApiTable.prototype.GetParentTableCell = function(){ return new ApiTableCell(); };

/**
 * Deletes the current table. 
 * @memberof ApiTable
 * @typeofeditors ["CDE"]
 * @returns {boolean} - returns false if parent of table doesn't exist.
 */
ApiTable.prototype.Delete = function(){ return true; };

/**
 * Clears the content from the table.
 * @memberof ApiTable
 * @typeofeditors ["CDE"]
 * @returns {boolean} - returns true.
 */
ApiTable.prototype.Clear = function(){ return true; };

/**
 * Searches for a scope of a table object. The search results are a collection of ApiRange objects.
 * @memberof ApiTable
 * @typeofeditors ["CDE"]
 * @param {string} sText - Search string.
 * @param {boolean} isMatchCase - Case sensitive or not.
 * @returns {ApiRange[]}  
 */
ApiTable.prototype.Search = function(sText, isMatchCase){ return [new ApiRange()]; };

/**
 * Applies the text settings to the entire contents of the table.
 * @memberof ApiTable
 * @typeofeditors ["CDE"]
 * @param {ApiTextPr} oTextPr - The text properties that will be set to the current table.
 * @returns {boolean} - returns true.
 */
ApiTable.prototype.SetTextPr = function(oTextPr){ return true; };

/**
 * Sets the background color to all cells in the current table.
 * @memberof ApiTable
 * @param {byte} r - Red color component value.
 * @param {byte} g - Green color component value.
 * @param {byte} b - Blue color component value.
 * @param {boolean} bNone - Defines that background color will not be set.
 * @typeofeditors ["CDE"]
 * @returns {boolean}
 */
ApiTable.prototype.SetBackgroundColor = function(r, g, b, bNone){ return true; };

/**
 * Converts the ApiTable object into the JSON object.
 * @memberof ApiTable
 * @typeofeditors ["CDE"]
 * @param {boolean} bWriteNumberings - Specifies if the used numberings will be written to the JSON object or not.
 * @param {boolean} bWriteStyles - Specifies if the used styles will be written to the JSON object or not.
 * @returns {JSON}
 */
ApiTable.prototype.ToJSON = function(bWriteNumberings, bWriteStyles){ return new JSON(); };

/**
 * Returns the table position within its parent element.
 * @memberof ApiTable
 * @typeofeditors ["CDE"]
 * @returns {Number} - returns -1 if the table parent doesn't exist. 
 */
ApiTable.prototype.GetPosInParent = function(){ return 0; };

/**
 * Replaces the current table with a new element.
 * @memberof ApiTable
 * @typeofeditors ["CDE"]
 * @param {DocumentElement} oElement - The element to replace the current table with.
 * @returns {boolean}
 */
ApiTable.prototype.ReplaceByElement = function(oElement){ return true; };

/**
 * Adds a comment to all contents of the current table.
 * <note>Please note that this table must be in the document.</note>
 * @memberof ApiTable
 * @typeofeditors ["CDE"]
 * @param {string} sText - The comment text (required).
 * @param {string} sAuthor - The author's name (optional).
 * @param {string} sUserId - The user ID of the comment author (optional).
 * @returns {ApiComment} - Returns null if the comment was not added.
 */
ApiTable.prototype.AddComment = function(sText, sAuthor, sUserId){ return new ApiComment(); };

/**
 * Adds a caption paragraph after (or before) the current table.
 * <note>Please note that the current table must be in the document (not in the footer/header).
 * And if the current table is placed in a shape, then a caption is added after (or before) the parent shape.</note>
 * @memberof ApiTable
 * @typeofeditors ["CDE"]
 * @param {string} sAdditional - The additional text.
 * @param {CaptionLabel | String} [sLabel="Table"] - The caption label.
 * @param {boolean} [bExludeLabel=false] - Specifies whether to exclude the label from the caption.
 * @param {CaptionNumberingFormat} [sNumberingFormat="Arabic"] - The possible caption numbering format.
 * @param {boolean} [bBefore=false] - Specifies whether to insert the caption before the current table (true) or after (false) (after/before the shape if it is placed in the shape).
 * @param {Number} [nHeadingLvl=undefined] - The heading level (used if you want to specify the chapter number).
 * <note>If you want to specify "Heading 1", then nHeadingLvl === 0 and etc.</note>
 * @param {CaptionSep} [sCaptionSep="hyphen"] - The caption separator (used if you want to specify the chapter number).
 * @returns {boolean}
 */
ApiTable.prototype.AddCaption = function(sAdditional, sLabel, bExludeLabel, sNumberingFormat, bBefore, nHeadingLvl, sCaptionSep){ return true; };

/**
 * Returns a type of the ApiTableRow class.
 * @memberof ApiTableRow
 * @typeofeditors ["CDE"]
 * @returns {"tableRow"}
 */
ApiTableRow.prototype.GetClassType = function(){ return ""; };

/**
 * Returns a number of cells in the current row.
 * @memberof ApiTableRow
 * @typeofeditors ["CDE"]
 * @returns {number}
 */
ApiTableRow.prototype.GetCellsCount = function(){ return 0; };

/**
 * Returns a cell by its position.
 * @memberof ApiTableRow
 * @typeofeditors ["CDE"]
 * @param {number} nPos - The cell position in the current row.
 * @returns {ApiTableCell}
 */
ApiTableRow.prototype.GetCell = function(nPos){ return new ApiTableCell(); };

/**
 * Returns the current row index.
 * @memberof ApiTableRow
 * @typeofeditors ["CDE"]
 * @returns {Number}
 */
ApiTableRow.prototype.GetIndex = function(){ return 0; };

/**
 * Returns the parent table of the current row.
 * @memberof ApiTableRow
 * @typeofeditors ["CDE"]
 * @returns {ApiTable | null} - returns null if parent table doesn't exist.
 */
ApiTableRow.prototype.GetParentTable = function(){ return new ApiTable(); };

/**
 * Returns the next row if exists.
 * @memberof ApiTableRow
 * @typeofeditors ["CDE"]
 * @returns {ApiTableRow | null} - returns null if row is last.
 */
ApiTableRow.prototype.GetNext = function(){ return new ApiTableRow(); };

/**
 * Returns the previous row if exists.
 * @memberof ApiTableRow
 * @typeofeditors ["CDE"]
 * @returns {ApiTableRow | null} - returns null if row is first.
 */
ApiTableRow.prototype.GetPrevious = function(){ return new ApiTableRow(); };

/**
 * Adds the new rows to the current table.
 * @memberof ApiTableRow
 * @typeofeditors ["CDE"]
 * @param {Number} nCount - Count of rows to be added.
 * @param {boolean} [isBefore=false] - Specifies if the rows will be added before or after the current row. 
 * @returns {ApiTable | null} - returns null if parent table doesn't exist.
 */
ApiTableRow.prototype.AddRows = function(nCount, isBefore){ return new ApiTable(); };

/**
 * Merges the cells in the current row. 
 * @memberof ApiTableRow
 * @typeofeditors ["CDE"]
 * @returns {ApiTableCell | null} - return null if can't merge.
 */
ApiTableRow.prototype.MergeCells = function(){ return new ApiTableCell(); };

/**
 * Clears the content from the current row.
 * @memberof ApiTableRow
 * @typeofeditors ["CDE"]
 * @returns {boolean} - returns false if parent table doesn't exist.
 */
ApiTableRow.prototype.Clear = function(){ return true; };

/**
 * Removes the current table row.
 * @memberof ApiTableRow
 * @typeofeditors ["CDE"]
 * @returns {boolean} - return false if parent table doesn't exist.
 */
ApiTableRow.prototype.Remove = function(){ return true; };

/**
 * Sets the text properties to the current row.
 * @memberof ApiTableRow
 * @typeofeditors ["CDE"]
 * @param {ApiTextPr} oTextPr - The text properties that will be set to the current row.
 * @returns {boolean} - returns false if parent table doesn't exist or param is invalid.
 */
ApiTableRow.prototype.SetTextPr = function(oTextPr){ return true; };

/**
 * Searches for a scope of a table row object. The search results are a collection of ApiRange objects.
 * @memberof ApiTableRow
 * @typeofeditors ["CDE"]
 * @param {string} sText - Search string.
 * @param {boolean} isMatchCase - Case sensitive or not.
 * @returns {ApiRange[]}
 */
ApiTableRow.prototype.Search = function(sText, isMatchCase){ return [new ApiRange()]; };

/**
 * Sets the background color to all cells in the current table row.
 * @memberof ApiTableRow
 * @param {byte} r - Red color component value.
 * @param {byte} g - Green color component value.
 * @param {byte} b - Blue color component value.
 * @param {boolean} bNone - Defines that background color will not be set.
 * @typeofeditors ["CDE"]
 * @returns {boolean}
 */
ApiTableRow.prototype.SetBackgroundColor = function(r, g, b, bNone){ return true; };

/**
 * Returns a type of the ApiTableCell class.
 * @memberof ApiTableCell
 * @typeofeditors ["CDE"]
 * @returns {"tableCell"}
 */
ApiTableCell.prototype.GetClassType = function(){ return ""; };

/**
 * Returns the current cell content.
 * @memberof ApiTableCell
 * @typeofeditors ["CDE"]
 * @returns {ApiDocumentContent}
 */
ApiTableCell.prototype.GetContent = function(){ return new ApiDocumentContent(); };

/**
 * Returns the current cell index.
 * @memberof ApiTableCell
 * @typeofeditors ["CDE"]
 * @returns {Number}
 */
ApiTableCell.prototype.GetIndex = function(){ return 0; };

/**
 * Returns an index of the parent row.
 * @memberof ApiTableCell
 * @typeofeditors ["CDE"]
 * @returns {number}
 */
ApiTableCell.prototype.GetRowIndex = function(){ return 0; };

/**
 * Returns a parent row of the current cell.
 * @memberof ApiTableCell
 * @typeofeditors ["CDE"]
 * @returns {ApiTableRow | null} - returns null if parent row doesn't exist.
 */
ApiTableCell.prototype.GetParentRow = function(){ return new ApiTableRow(); };

/**
 * Returns a parent table of the current cell.
 * @memberof ApiTableCell
 * @typeofeditors ["CDE"]
 * @returns {ApiTable | null} - returns null if parent table doesn't exist.
 */
ApiTableCell.prototype.GetParentTable = function(){ return new ApiTable(); };

/**
 * Adds the new rows to the current table.
 * @memberof ApiTableCell
 * @typeofeditors ["CDE"]
 * @param {Number} nCount - Count of rows to be added.
 * @param {boolean} [isBefore=false] - Specifies if the new rows will be added before or after the current cell. 
 * @returns {ApiTable | null} - returns null if parent table doesn't exist.
 */
ApiTableCell.prototype.AddRows = function(nCount, isBefore){ return new ApiTable(); };

/**
 * Adds the new columns to the current table.
 * @memberof ApiTableCell
 * @typeofeditors ["CDE"]
 * @param {Number} nCount - Count of columns to be added.
 * @param {boolean} [isBefore=false] - Specifies if the new columns will be added before or after the current cell. 
 * @returns {ApiTable | null} - returns null if parent table doesn't exist.
 */
ApiTableCell.prototype.AddColumns = function(nCount, isBefore){ return new ApiTable(); };

/**
 * Removes a column containing the current cell.
 * @memberof ApiTableCell
 * @typeofeditors ["CDE"]
 * @returns {bool | null} Is the table empty after removing. Returns null if parent table doesn't exist.
 */
ApiTableCell.prototype.RemoveColumn = function(){ return true; };

/**
 * Removes a row containing the current cell.
 * @memberof ApiTableCell
 * @typeofeditors ["CDE"]
 * @returns {boolean} Is the table empty after removing.
 */
ApiTableCell.prototype.RemoveRow = function(){ return true; };

/**
 * Searches for a scope of a table cell object. The search results are a collection of ApiRange objects.
 * @memberof ApiTableCell
 * @typeofeditors ["CDE"]
 * @param {string} sText - Search string.
 * @param {boolean} isMatchCase - Case sensitive or not.
 * @returns {ApiRange[]}  
 */
ApiTableCell.prototype.Search = function(sText, isMatchCase){ return [new ApiRange()]; };

/**
 * Returns the next cell if exists.
 * @memberof ApiTableCell
 * @typeofeditors ["CDE"]
 * @returns {ApiTableCell | null} - returns null if cell is last.
 */
ApiTableCell.prototype.GetNext = function(){ return new ApiTableCell(); };

/**
 * Returns the previous cell if exists.
 * @memberof ApiTableCell
 * @typeofeditors ["CDE"]
 * @returns {ApiTableCell | null} - returns null is cell is first. 
 */
ApiTableCell.prototype.GetPrevious = function(){ return new ApiTableCell(); };

/**
 * Splits the cell into a given number of rows and columns.
 * @memberof ApiTableCell
 * @typeofeditors ["CDE"]
 * @param {Number} [nRow=1] - Count of rows into which the cell will be split.
 * @param {Number} [nCol=1] - Count of columns into which the cell will be split.
 * @returns {ApiTable | null} - returns null if parent table doesn't exist.
 */
ApiTableCell.prototype.Split = function(nRow, nCol){ return new ApiTable(); };

/**
 * Sets the cell properties to the current cell.
 * @memberof ApiTableCell
 * @typeofeditors ["CDE"]
 * @param {ApiTableCellPr} oApiTableCellPr - The properties that will be set to the current table cell.
 * @returns {boolean} - returns false if param is invalid.
 */
ApiTableCell.prototype.SetCellPr = function(oApiTableCellPr){ return true; };

/**
 * Applies the text settings to the entire contents of the current cell.
 * @memberof ApiTableCell
 * @typeofeditors ["CDE"]
 * @param {ApiTextPr} oTextPr - The properties that will be set to the current table cell text.
 * @returns {boolean} - returns false if param is invalid.
 */
ApiTableCell.prototype.SetTextPr = function(oTextPr){ return true; };

/**
 * Clears the content from the current cell.
 * @memberof ApiTableCell
 * @typeofeditors ["CDE"]
 * @returns {boolean} - returns false if parent row is invalid.
 */
ApiTableCell.prototype.Clear = function(){ return true; };

/**
 * Adds a paragraph or a table or a blockLvl content control using its position in the cell.
 * @memberof ApiTableCell
 * @typeofeditors ["CDE"]
 * @param {number} nPos - The position where the current element will be added.
 * @param {DocumentElement} oElement - The document element which will be added at the current position.
 * @returns {boolean} - returns false if oElement is invalid.
 */
ApiTableCell.prototype.AddElement = function(nPos, oElement){ return true; };

/**
 * Sets the background color to the current table cell.
 * @memberof ApiTableCell
 * @param {byte} r - Red color component value.
 * @param {byte} g - Green color component value.
 * @param {byte} b - Blue color component value.
 * @param {boolean} bNone - Defines that background color will not be set.
 * @typeofeditors ["CDE"]
 * @returns {boolean}
 */
ApiTableCell.prototype.SetBackgroundColor = function(r, g, b, bNone){ return true; };

/**
 * Sets the background color to all cells in the column containing the current cell.
 * @memberof ApiTableCell
 * @param {byte} r - Red color component value.
 * @param {byte} g - Green color component value.
 * @param {byte} b - Blue color component value.
 * @param {boolean} bNone - Defines that background color will not be set.
 * @typeofeditors ["CDE"]
 * @returns {boolean}
 */
ApiTableCell.prototype.SetColumnBackgroundColor = function(r, g, b, bNone){ return true; };

/**
 * Returns a type of the ApiStyle class.
 * @memberof ApiStyle
 * @typeofeditors ["CDE"]
 * @returns {"style"}
 */
ApiStyle.prototype.GetClassType = function(){ return ""; };

/**
 * Returns a name of the current style.
 * @memberof ApiStyle
 * @typeofeditors ["CDE"]
 * @returns {string}
 */
ApiStyle.prototype.GetName = function(){ return ""; };

/**
 * Sets a name of the current style.
 * @memberof ApiStyle
 * @typeofeditors ["CDE"]
 * @param {string} sStyleName - The name which will be used for the current style.
 */
ApiStyle.prototype.SetName = function(sStyleName){};

/**
 * Returns a type of the current style.
 * @memberof ApiStyle
 * @typeofeditors ["CDE"]
 * @returns {StyleType}
 */
ApiStyle.prototype.GetType = function(){ return new StyleType(); };

/**
 * Returns the text properties of the current style.
 * @memberof ApiStyle
 * @typeofeditors ["CDE"]
 * @returns {ApiTextPr}
 */
ApiStyle.prototype.GetTextPr = function(){ return new ApiTextPr(); };

/**
 * Returns the paragraph properties of the current style.
 * @memberof ApiStyle
 * @typeofeditors ["CDE"]
 * @returns {ApiParaPr}
 */
ApiStyle.prototype.GetParaPr = function(){ return new ApiParaPr(); };

/**
 * Returns the table properties of the current style.
 * @memberof ApiStyle
 * @typeofeditors ["CDE"]
 * @returns {ApiTablePr} If the type of this style is not a <code>"table"</code> then it will return
 *     <code>null</code>.
 */
ApiStyle.prototype.GetTablePr = function(){ return new ApiTablePr(); };

/**
 * Returns the table row properties of the current style.
 * @memberof ApiStyle
 * @typeofeditors ["CDE"]
 * @returns {ApiTableRowPr} If the type of this style is not a <code>"table"</code> then it will return
 *     <code>null</code>.
 */
ApiStyle.prototype.GetTableRowPr = function(){ return new ApiTableRowPr(); };

/**
 * Returns the table cell properties of the current style.
 * @memberof ApiStyle
 * @typeofeditors ["CDE"]
 * @returns {ApiTableCellPr}
 */
ApiStyle.prototype.GetTableCellPr = function(){ return new ApiTableCellPr(); };

/**
 * Specifies the reference to the parent style which this style inherits from in the style hierarchy.
 * @memberof ApiStyle
 * @typeofeditors ["CDE"]
 * @param {ApiStyle} oStyle - The parent style which the style inherits properties from.
 */
ApiStyle.prototype.SetBasedOn = function(oStyle){};

/**
 * Returns a set of formatting properties which will be conditionally applied to the parts of a table that match the 
 * requirement specified in the sType parameter.
 * @memberof ApiStyle
 * @typeofeditors ["CDE"]
 * @param {TableStyleOverrideType} [sType="wholeTable"] - The table part which the formatting properties must be applied to.
 * @returns {ApiTableStylePr}
 */
ApiStyle.prototype.GetConditionalTableStyle = function(sType){ return new ApiTableStylePr(); };

/**
 * Converts the ApiStyle object into the JSON object.
 * @memberof ApiStyle
 * @typeofeditors ["CDE"]
 * @param {boolean} bWriteNumberings - Specifies if the used numberings will be written to the JSON object or not.
 * @returns {JSON}
 */
ApiStyle.prototype.ToJSON = function(bWriteNumberings){ return new JSON(); };

/**
 * Returns a type of the ApiTextPr class.
 * @memberof ApiTextPr
 * @typeofeditors ["CDE", "CSE", "CPE"]
 * @returns {"textPr"}
 */
ApiTextPr.prototype.GetClassType = function(){ return ""; };

/**
 * The text style base method.
 * <note>This method is not used by itself, as it only forms the basis for the {@link ApiRun#SetStyle} method which sets
 * the selected or created style to the text.</note>
 * @memberof ApiTextPr
 * @typeofeditors ["CDE"]
 * @param {ApiStyle} oStyle - The style which must be applied to the text character.
 * @returns {ApiTextPr} - this text properties.
 */
ApiTextPr.prototype.SetStyle = function(oStyle){ return new ApiTextPr(); };

/**
 * Gets the style of the current text properties.
 * @memberof ApiTextPr
 * @typeofeditors ["CDE"]
 * @returns {ApiStyle} - The used style.
 * @since 8.1.0
 */
ApiTextPr.prototype.GetStyle = function(){ return new ApiStyle(); };

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
 * Sets the text color to the current text run in the RGB format.
 * @memberof ApiTextPr
 * @typeofeditors ["CDE"]
 * @param {byte} r - Red color component value.
 * @param {byte} g - Green color component value.
 * @param {byte} b - Blue color component value.
 * @param {boolean} [isAuto=false] - If this parameter is set to "true", then r,g,b parameters will be ignored.
 * @returns {ApiTextPr} - this text properties.
 */
ApiTextPr.prototype.SetColor = function(r, g, b, isAuto){ return new ApiTextPr(); };

/**
 * Gets the RGB color from the current text properties.
 * @memberof ApiTextPr
 * @typeofeditors ["CDE"]
 * @returns {ApiRGBColor}
 * @since 8.1.0
 */
ApiTextPr.prototype.GetColor = function(){ return new ApiRGBColor(); };

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
 * Gets the vertical alignment type from the current text properties.
 * @memberof ApiTextPr
 * @typeofeditors ["CDE"]
 * @returns {string}
 * @since 8.1.0
 */
ApiTextPr.prototype.GetVertAlign = function(){ return ""; };

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
 * Specifies an amount by which text is raised or lowered for this run in relation to the default
 * baseline of the surrounding non-positioned text.
 * @memberof ApiTextPr
 * @typeofeditors ["CDE"]
 * @param {hps} nPosition - Specifies a positive (raised text) or negative (lowered text)
 * measurement in half-points (1/144 of an inch).
 * @returns {ApiTextPr} - this text properties.
 */
ApiTextPr.prototype.SetPosition = function(nPosition){ return new ApiTextPr(); };

/**
 * Gets the text position from the current text properties measured in half-points (1/144 of an inch).
 * @memberof ApiTextPr
 * @typeofeditors ["CDE"]
 * @returns {hps}
 * @since 8.1.0
 */
ApiTextPr.prototype.GetPosition = function(){ return new hps(); };

/**
 * Specifies the languages which will be used to check spelling and grammar (if requested) when processing
 * the contents of the text run.
 * @memberof ApiTextPr
 * @typeofeditors ["CDE"]
 * @param {string} sLangId - The possible value for this parameter is a language identifier as defined by
 * RFC 4646/BCP 47. Example: "en-CA".
 * @returns {ApiTextPr} - this text properties.
 */
ApiTextPr.prototype.SetLanguage = function(sLangId){ return new ApiTextPr(); };

/**
 * Gets the language from the current text properties.
 * @memberof ApiTextPr
 * @typeofeditors ["CDE"]
 * @returns {string}
 * @since 8.1.0
 */
ApiTextPr.prototype.GetLanguage = function(){ return ""; };

/**
 * Specifies the shading applied to the contents of the current text run.
 * @memberof ApiTextPr
 * @typeofeditors ["CDE"]
 * @param {ShdType} sType - The shading type applied to the contents of the current text run.
 * @param {byte} r - Red color component value.
 * @param {byte} g - Green color component value.
 * @param {byte} b - Blue color component value.
 * @returns {ApiTextPr} - this text properties.
 */
ApiTextPr.prototype.SetShd = function(sType, r, g, b){ return new ApiTextPr(); };

/**
 * Gets the text shading from the current text properties.
 * @memberof ApiTextPr
 * @typeofeditors ["CDE"]
 * @returns {ApiRGBColor}
 * @since 8.1.0
 */
ApiTextPr.prototype.GetShd = function(){ return new ApiRGBColor(); };

/**
 * Converts the ApiTextPr object into the JSON object.
 * @memberof ApiTextPr
 * @typeofeditors ["CDE"]
 * @param {boolean} bWriteStyles - Specifies if the used styles will be written to the JSON object or not.
 * @returns {JSON}
 */
ApiTextPr.prototype.ToJSON = function(bWriteStyles){ return new JSON(); };

/**
 * Returns a type of the ApiParaPr class.
 * @memberof ApiParaPr
 * @typeofeditors ["CDE", "CSE", "CPE"]
 * @returns {"paraPr"}
 */
ApiParaPr.prototype.GetClassType = function(){ return ""; };

/**
 * The paragraph style base method.
 * <note>This method is not used by itself, as it only forms the basis for the {@link ApiParagraph#SetStyle} method which sets the selected or created style for the paragraph.</note>
 * @memberof ApiParaPr
 * @typeofeditors ["CDE"]
 * @param {ApiStyle} oStyle - The style of the paragraph to be set.
 */
ApiParaPr.prototype.SetStyle = function(oStyle){};

/**
 * Returns the paragraph style method.
 * @memberof ApiParaPr
 * @typeofeditors ["CDE"]
 * @returns {ApiStyle} - The style of the paragraph.
 */
ApiParaPr.prototype.GetStyle = function(){ return new ApiStyle(); };

/**
 * Specifies that any space before or after this paragraph set using the 
 * {@link ApiParaPr#SetSpacingBefore} or {@link ApiParaPr#SetSpacingAfter} spacing element, should not be applied when the preceding and 
 * following paragraphs are of the same paragraph style, affecting the top and bottom spacing respectively.
 * @memberof ApiParaPr
 * @typeofeditors ["CDE"]
 * @param {boolean} isContextualSpacing - The true value will enable the paragraph contextual spacing.
 */
ApiParaPr.prototype.SetContextualSpacing = function(isContextualSpacing){};

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
 * Specifies that when rendering the document using a page view, all lines of the current paragraph are maintained on a single page whenever possible.
 * @memberof ApiParaPr
 * @typeofeditors ["CDE"]
 * @param {boolean} isKeepLines - The true value enables the option to keep lines of the paragraph on a single page.
 */
ApiParaPr.prototype.SetKeepLines = function(isKeepLines){};

/**
 * Specifies that when rendering the document using a paginated view, the contents of the current paragraph are at least
 * partly rendered on the same page as the following paragraph whenever possible.
 * @memberof ApiParaPr
 * @typeofeditors ["CDE"]
 * @param {boolean} isKeepNext - The true value enables the option to keep lines of the paragraph on the same
 * page as the following paragraph.
 */
ApiParaPr.prototype.SetKeepNext = function(isKeepNext){};

/**
 * Specifies that when rendering the document using a paginated view, the contents of the current paragraph are rendered at
 * the beginning of a new page in the document.
 * @memberof ApiParaPr
 * @typeofeditors ["CDE"]
 * @param {boolean} isPageBreakBefore - The true value enables the option to render the contents of the paragraph
 * at the beginning of a new page in the document.
 */
ApiParaPr.prototype.SetPageBreakBefore = function(isPageBreakBefore){};

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
 * Specifies the shading applied to the contents of the paragraph.
 * @memberof ApiParaPr
 * @typeofeditors ["CDE"]
 * @param {ShdType} sType - The shading type which will be applied to the contents of the current paragraph.
 * @param {byte} r - Red color component value.
 * @param {byte} g - Green color component value.
 * @param {byte} b - Blue color component value.
 * @param {boolean} [isAuto=false] - The true value disables paragraph contents shading.
 */
ApiParaPr.prototype.SetShd = function(sType, r, g, b, isAuto){};

/**
 * Returns the shading applied to the contents of the paragraph.
 * @memberof ApiParaPr
 * @typeofeditors ["CDE"]
 * @returns {ApiRGBColor}
 */
ApiParaPr.prototype.GetShd = function(){ return new ApiRGBColor(); };

/**
 * Specifies the border which will be displayed below a set of paragraphs which have the same paragraph border settings.
 * <note>The paragraphs of the same style going one by one are considered as a single block, so the border is added
 * to the whole block rather than to every paragraph in this block.</note>
 * @memberof ApiParaPr
 * @typeofeditors ["CDE"]
 * @param {BorderType} sType - The border style.
 * @param {pt_8} nSize - The width of the current bottom border measured in eighths of a point.
 * @param {pt} nSpace - The spacing offset below the paragraph measured in points used to place this border.
 * @param {byte} r - Red color component value.
 * @param {byte} g - Green color component value.
 * @param {byte} b - Blue color component value.
 */
ApiParaPr.prototype.SetBottomBorder = function(sType, nSize, nSpace, r, g, b){};

/**
 * Specifies the border which will be displayed at the left side of the page around the specified paragraph.
 * @memberof ApiParaPr
 * @typeofeditors ["CDE"]
 * @param {BorderType} sType - The border style.
 * @param {pt_8} nSize - The width of the current left border measured in eighths of a point.
 * @param {pt} nSpace - The spacing offset to the left of the paragraph measured in points used to place this border.
 * @param {byte} r - Red color component value.
 * @param {byte} g - Green color component value.
 * @param {byte} b - Blue color component value.
 */
ApiParaPr.prototype.SetLeftBorder = function(sType, nSize, nSpace, r, g, b){};

/**
 * Specifies the border which will be displayed at the right side of the page around the specified paragraph.
 * @memberof ApiParaPr
 * @typeofeditors ["CDE"]
 * @param {BorderType} sType - The border style.
 * @param {pt_8} nSize - The width of the current right border measured in eighths of a point.
 * @param {pt} nSpace - The spacing offset to the right of the paragraph measured in points used to place this border.
 * @param {byte} r - Red color component value.
 * @param {byte} g - Green color component value.
 * @param {byte} b - Blue color component value.
 */
ApiParaPr.prototype.SetRightBorder = function(sType, nSize, nSpace, r, g, b){};

/**
 * Specifies the border which will be displayed above a set of paragraphs which have the same set of paragraph border settings.
 * <note>The paragraphs of the same style going one by one are considered as a single block, so the border is added to the whole block rather than to every paragraph in this block.</note>
 * @memberof ApiParaPr
 * @typeofeditors ["CDE"]
 * @param {BorderType} sType - The border style.
 * @param {pt_8} nSize - The width of the current top border measured in eighths of a point.
 * @param {pt} nSpace - The spacing offset above the paragraph measured in points used to place this border.
 * @param {byte} r - Red color component value.
 * @param {byte} g - Green color component value.
 * @param {byte} b - Blue color component value.
 */
ApiParaPr.prototype.SetTopBorder = function(sType, nSize, nSpace, r, g, b){};

/**
 * Specifies the border which will be displayed between each paragraph in a set of paragraphs which have the same set of paragraph border settings.
 * @memberof ApiParaPr
 * @typeofeditors ["CDE"]
 * @param {BorderType} sType - The border style.
 * @param {pt_8} nSize - The width of the current border measured in eighths of a point.
 * @param {pt} nSpace - The spacing offset between the paragraphs measured in points used to place this border.
 * @param {byte} r - Red color component value.
 * @param {byte} g - Green color component value.
 * @param {byte} b - Blue color component value.
 */
ApiParaPr.prototype.SetBetweenBorder = function(sType, nSize, nSpace, r, g, b){};

/**
 * Specifies whether a single line of the current paragraph will be displayed on a separate page from the remaining content at display time by moving the line onto the following page.
 * @memberof ApiParaPr
 * @typeofeditors ["CDE"]
 * @param {boolean} isWidowControl - The true value means that a single line of the current paragraph will be displayed on a separate page from the remaining content at display time by moving the line onto the following page.
 */
ApiParaPr.prototype.SetWidowControl = function(isWidowControl){};

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
 * Specifies that the current paragraph references a numbering definition instance in the current document.
 * @memberof ApiParaPr
 * @typeofeditors ["CDE"]
 * @param {ApiNumbering} oNumPr - Specifies a numbering definition.
 * @param {number} [nLvl=0] - Specifies a numbering level reference. If the current instance of the ApiParaPr class is direct
 * formatting of a paragraph, then this parameter MUST BE specified. Otherwise, if the current instance of the ApiParaPr class
 * is the part of ApiStyle properties, this parameter will be ignored.
 */
ApiParaPr.prototype.SetNumPr = function(oNumPr, nLvl){};

/**
 * Converts the ApiParaPr object into the JSON object.
 * @memberof ApiParaPr
 * @typeofeditors ["CDE"]
 * @param {boolean} bWriteStyles - Specifies if the used styles will be written to the JSON object or not.
 * @returns {JSON}
 */
ApiParaPr.prototype.ToJSON = function(bWriteStyles){ return new JSON(); };

/**
 * Returns a type of the ApiNumbering class.
 * @memberof ApiNumbering
 * @typeofeditors ["CDE"]
 * @returns {"numbering"}
 */
ApiNumbering.prototype.GetClassType = function(){ return ""; };

/**
 * Returns the specified level of the current numbering.
 * @memberof ApiNumbering
 * @typeofeditors ["CDE"]
 * @param {number} nLevel - The numbering level index. This value MUST BE from 0 to 8.
 * @returns {ApiNumberingLevel}
 */
ApiNumbering.prototype.GetLevel = function(nLevel){ return new ApiNumberingLevel(); };

/**
 * Converts the ApiNumbering object into the JSON object.
 * @memberof ApiNumbering
 * @typeofeditors ["CDE"]
 * @returns {JSON}
 */
ApiNumbering.prototype.ToJSON = function(){ return new JSON(); };

/**
 * Returns a type of the ApiNumberingLevel class.
 * @memberof ApiNumberingLevel
 * @typeofeditors ["CDE"]
 * @returns {"numberingLevel"}
 */
ApiNumberingLevel.prototype.GetClassType = function(){ return ""; };

/**
 * Returns the numbering definition.
 * @memberof ApiNumberingLevel
 * @typeofeditors ["CDE"]
 * @returns {ApiNumbering}
 */
ApiNumberingLevel.prototype.GetNumbering = function(){ return new ApiNumbering(); };

/**
 * Returns the level index.
 * @memberof ApiNumberingLevel
 * @typeofeditors ["CDE"]
 * @returns {number}
 */
ApiNumberingLevel.prototype.GetLevelIndex = function(){ return 0; };

/**
 * Specifies the text properties which will be applied to the text in the current numbering level itself, not to the text in the subsequent paragraph.
 * <note>To change the text style of the paragraph, a style must be applied to it using the {@link ApiRun#SetStyle} method.</note>
 * @memberof ApiNumberingLevel
 * @typeofeditors ["CDE"]
 * @returns {ApiTextPr}
 */
ApiNumberingLevel.prototype.GetTextPr = function(){ return new ApiTextPr(); };

/**
 * Returns the paragraph properties which are applied to any numbered paragraph that references the given numbering definition and numbering level.
 * @memberof ApiNumberingLevel
 * @typeofeditors ["CDE"]
 * @returns {ApiParaPr}
 */
ApiNumberingLevel.prototype.GetParaPr = function(){ return new ApiParaPr(); };

/**
 * Sets one of the existing predefined numbering templates.
 * @memberof ApiNumberingLevel
 * @typeofeditors ["CDE"]
 * @param {("none" | "bullet" | "1)" | "1." | "I." | "A." | "a)" | "a." | "i." )} sType - The predefined numbering template.
 * @param {string} [sSymbol=""] - The symbol used for the list numbering. This parameter has the meaning only if the predefined numbering template is "bullet".
 */
ApiNumberingLevel.prototype.SetTemplateType = function(sType, sSymbol){};

/**
 * Sets your own customized numbering type.
 * @memberof ApiNumberingLevel
 * @typeofeditors ["CDE"]
 * @param {("none" | "bullet" | "decimal" | "lowerRoman" | "upperRoman" | "lowerLetter" | "upperLetter" |
 *     "decimalZero")} sType - The custom numbering type used for the current numbering definition.
 * @param {string} sTextFormatString - Any text in this parameter will be taken as literal text to be repeated in each instance of this numbering level, except for any use of the percent symbol (%) followed by a number, which will be used to indicate the one-based index of the number to be used at this level. Any number of a level higher than this level will be ignored.
 * @param {("left" | "right" | "center")} sAlign - Type of justification applied to the text run in the current numbering level.
 */
ApiNumberingLevel.prototype.SetCustomType = function(sType, sTextFormatString, sAlign){};

/**
 * Specifies a one-based index which determines when a numbering level should restart to its starting value. A numbering level restarts when an instance of the specified numbering level which is higher (earlier than this level) is used in the given document contents. By default this value is true.
 * @memberof ApiNumberingLevel
 * @typeofeditors ["CDE"]
 * @param {boolean} isRestart - The true value means that a numbering level will be restarted to its starting value.
 */
ApiNumberingLevel.prototype.SetRestart = function(isRestart){};

/**
 * Specifies the starting value for the numbering used by the parent numbering level within a given numbering level definition. By default this value is 1.
 * @memberof ApiNumberingLevel
 * @typeofeditors ["CDE"]
 * @param {number} nStart - The starting value for the numbering used by the parent numbering level.
 */
ApiNumberingLevel.prototype.SetStart = function(nStart){};

/**
 * Specifies the content which will be added between the given numbering level text and the text of every numbered paragraph which references that numbering level. By default this value is "tab".
 * @memberof ApiNumberingLevel
 * @typeofeditors ["CDE"]
 * @param {("space" | "tab" | "none")} sType - The content added between the numbering level text and the text in the numbered paragraph.
 */
ApiNumberingLevel.prototype.SetSuff = function(sType){};

/**
 * Returns a type of the ApiTablePr class.
 * @memberof ApiTablePr
 * @typeofeditors ["CDE"]
 * @returns {"tablePr"}
 */
ApiTablePr.prototype.GetClassType = function(){ return ""; };

/**
 * Specifies a number of columns which will comprise each table column band for this table style.
 * @memberof ApiTablePr
 * @typeofeditors ["CDE"]
 * @param {number} nCount - The number of columns measured in positive integers.
 */
ApiTablePr.prototype.SetStyleColBandSize = function(nCount){};

/**
 * Specifies a number of rows which will comprise each table row band for this table style.
 * @memberof ApiTablePr
 * @typeofeditors ["CDE"]
 * @param {number} nCount - The number of rows measured in positive integers.
 */
ApiTablePr.prototype.SetStyleRowBandSize = function(nCount){};

/**
 * Specifies the alignment of the current table with respect to the text margins in the current section.
 * @memberof ApiTablePr
 * @typeofeditors ["CDE"]
 * @param {("left" | "right" | "center")} sJcType - The alignment type used for the current table placement.
 */
ApiTablePr.prototype.SetJc = function(sJcType){};

/**
 * Specifies the shading which is applied to the extents of the current table.
 * @memberof ApiTablePr
 * @typeofeditors ["CDE"]
 * @param {ShdType} sType - The shading type applied to the extents of the current table.
 * @param {byte} r - Red color component value.
 * @param {byte} g - Green color component value.
 * @param {byte} b - Blue color component value.
 * @param {boolean} [isAuto=false] - The true value disables the SetShd method use.
 */
ApiTablePr.prototype.SetShd = function(sType, r, g, b, isAuto){};

/**
 * Sets the border which will be displayed at the top of the current table.
 * @memberof ApiTablePr
 * @typeofeditors ["CDE"]
 * @param {BorderType} sType - The top border style.
 * @param {pt_8} nSize - The width of the current top border measured in eighths of a point.
 * @param {pt} nSpace - The spacing offset in the top part of the table measured in points used to place this border.
 * @param {byte} r - Red color component value.
 * @param {byte} g - Green color component value.
 * @param {byte} b - Blue color component value.
 */
ApiTablePr.prototype.SetTableBorderTop = function(sType, nSize, nSpace, r, g, b){};

/**
 * Sets the border which will be displayed at the bottom of the current table.
 * @memberof ApiTablePr
 * @typeofeditors ["CDE"]
 * @param {BorderType} sType - The bottom border style.
 * @param {pt_8} nSize - The width of the current bottom border measured in eighths of a point.
 * @param {pt} nSpace - The spacing offset in the bottom part of the table measured in points used to place this border.
 * @param {byte} r - Red color component value.
 * @param {byte} g - Green color component value.
 * @param {byte} b - Blue color component value.
 */
ApiTablePr.prototype.SetTableBorderBottom = function(sType, nSize, nSpace, r, g, b){};

/**
 * Sets the border which will be displayed on the left of the current table.
 * @memberof ApiTablePr
 * @typeofeditors ["CDE"]
 * @param {BorderType} sType - The left border style.
 * @param {pt_8} nSize - The width of the current left border measured in eighths of a point.
 * @param {pt} nSpace - The spacing offset in the left part of the table measured in points used to place this border.
 * @param {byte} r - Red color component value.
 * @param {byte} g - Green color component value.
 * @param {byte} b - Blue color component value.
 */
ApiTablePr.prototype.SetTableBorderLeft = function(sType, nSize, nSpace, r, g, b){};

/**
 * Sets the border which will be displayed on the right of the current table.
 * @memberof ApiTablePr
 * @typeofeditors ["CDE"]
 * @param {BorderType} sType - The right border style.
 * @param {pt_8} nSize - The width of the current right border measured in eighths of a point.
 * @param {pt} nSpace - The spacing offset in the right part of the table measured in points used to place this border.
 * @param {byte} r - Red color component value.
 * @param {byte} g - Green color component value.
 * @param {byte} b - Blue color component value.
 */
ApiTablePr.prototype.SetTableBorderRight = function(sType, nSize, nSpace, r, g, b){};

/**
 * Specifies the border which will be displayed on all horizontal table cell borders which are not on the outmost edge
 * of the parent table (all horizontal borders which are not the topmost or bottommost borders).
 * @memberof ApiTablePr
 * @typeofeditors ["CDE"]
 * @param {BorderType} sType - The horizontal table cell border style.
 * @param {pt_8} nSize - The width of the current border measured in eighths of a point.
 * @param {pt} nSpace - The spacing offset in the horizontal table cells of the table measured in points used to place this border.
 * @param {byte} r - Red color component value.
 * @param {byte} g - Green color component value.
 * @param {byte} b - Blue color component value.
 */
ApiTablePr.prototype.SetTableBorderInsideH = function(sType, nSize, nSpace, r, g, b){};

/**
 * Specifies the border which will be displayed on all vertical table cell borders which are not on the outmost edge
 * of the parent table (all vertical borders which are not the leftmost or rightmost borders).
 * @memberof ApiTablePr
 * @typeofeditors ["CDE"]
 * @param {BorderType} sType - The vertical table cell border style.
 * @param {pt_8} nSize - The width of the current border measured in eighths of a point.
 * @param {pt} nSpace - The spacing offset in the vertical table cells of the table measured in points used to place this border.
 * @param {byte} r - Red color component value.
 * @param {byte} g - Green color component value.
 * @param {byte} b - Blue color component value.
 */
ApiTablePr.prototype.SetTableBorderInsideV = function(sType, nSize, nSpace, r, g, b){};

/**
 * Specifies an amount of space which will be left between the bottom extent of the cell contents and the border
 * of all table cells within the parent table (or table row).
 * @memberof ApiTablePr
 * @typeofeditors ["CDE"]
 * @param {twips} nValue - The value for the amount of space below the bottom extent of the cell measured in
 * twentieths of a point (1/1440 of an inch).
 */
ApiTablePr.prototype.SetTableCellMarginBottom = function(nValue){};

/**
 * Specifies an amount of space which will be left between the left extent of the cell contents and the left
 * border of all table cells within the parent table (or table row).
 * @memberof ApiTablePr
 * @typeofeditors ["CDE"]
 * @param {twips} nValue - The value for the amount of space to the left extent of the cell measured in twentieths of a point (1/1440 of an inch).
 */
ApiTablePr.prototype.SetTableCellMarginLeft = function(nValue){};

/**
 * Specifies an amount of space which will be left between the right extent of the cell contents and the right
 * border of all table cells within the parent table (or table row).
 * @memberof ApiTablePr
 * @typeofeditors ["CDE"]
 * @param {twips} nValue - The value for the amount of space to the right extent of the cell measured in twentieths of a point (1/1440 of an inch).
 */
ApiTablePr.prototype.SetTableCellMarginRight = function(nValue){};

/**
 * Specifies an amount of space which will be left between the top extent of the cell contents and the top border
 * of all table cells within the parent table (or table row).
 * @memberof ApiTablePr
 * @typeofeditors ["CDE"]
 * @param {twips} nValue - The value for the amount of space above the top extent of the cell measured in twentieths of a point (1/1440 of an inch).
 */
ApiTablePr.prototype.SetTableCellMarginTop = function(nValue){};

/**
 * Specifies the default table cell spacing (the spacing between adjacent cells and the edges of the table).
 * @memberof ApiTablePr
 * @typeofeditors ["CDE"]
 * @param {?twips} nValue - Spacing value measured in twentieths of a point (1/1440 of an inch). <code>"Null"</code> means that no spacing will be applied.
 */
ApiTablePr.prototype.SetCellSpacing = function(nValue){};

/**
 * Specifies the indentation which will be added before the leading edge of the current table in the document
 * (the left edge in the left-to-right table, and the right edge in the right-to-left table).
 * @memberof ApiTablePr
 * @typeofeditors ["CDE"]
 * @param {twips} nValue - The indentation value measured in twentieths of a point (1/1440 of an inch).
 */
ApiTablePr.prototype.SetTableInd = function(nValue){};

/**
 * Sets the preferred width to the current table.
 * <note>Tables are created with the {@link ApiTable#SetWidth} method properties set by default, which always override the {@link ApiTablePr#SetWidth} method properties. That is why there is no use to try and apply {@link ApiTablePr#SetWidth}. We recommend you to use the  {@link ApiTablePr#SetWidth} method instead.</note>
 * @memberof ApiTablePr
 * @typeofeditors ["CDE"]
 * @param {TableWidth} sType - Type of the width value from one of the available width values types.
 * @param {number} [nValue] - The table width value measured in positive integers.
 */
ApiTablePr.prototype.SetWidth = function(sType, nValue){};

/**
 * Specifies the algorithm which will be used to lay out the contents of the current table within the document.
 * @memberof ApiTablePr
 * @typeofeditors ["CDE"]
 * @param {("autofit" | "fixed")} sType - The type of the table layout in the document.
 */
ApiTablePr.prototype.SetTableLayout = function(sType){};

/**
 * Sets the table title (caption).
 * @memberof ApiTablePr
 * @typeofeditors ["CDE"]
 * @param {string} sTitle - The table title to be set.
 * @returns {boolean}
 */
ApiTablePr.prototype.SetTableTitle = function(sTitle){ return true; };

/**
 * Returns the table title (caption).
 * @memberof ApiTablePr
 * @typeofeditors ["CDE"]
 * @returns {string}
 */
ApiTablePr.prototype.GetTableTitle = function(){ return ""; };

/**
 * Sets the table description.
 * @memberof ApiTablePr
 * @typeofeditors ["CDE"]
 * @param {string} sDescr - The table description to be set.
 * @returns {boolean}
 */
ApiTablePr.prototype.SetTableDescription = function(sDescr){ return true; };

/**
 * Returns the table description.
 * @memberof ApiTablePr
 * @typeofeditors ["CDE"]
 * @returns {string}
 */
ApiTablePr.prototype.GetTableDescription = function(){ return ""; };

/**
 * Converts the ApiTablePr object into the JSON object.
 * @memberof ApiTablePr
 * @typeofeditors ["CDE"]
 * @returns {JSON}
 */
ApiTablePr.prototype.ToJSON = function(){ return new JSON(); };

/**
 * Returns a type of the ApiTableRowPr class.
 * @memberof ApiTableRowPr
 * @typeofeditors ["CDE"]
 * @returns {"tableRowPr"}
 */
ApiTableRowPr.prototype.GetClassType = function(){ return ""; };

/**
 * Sets the height to the current table row within the current table.
 * @memberof ApiTableRowPr
 * @typeofeditors ["CDE"]
 * @param {("auto" | "atLeast")} sHRule - The rule to apply the height value to the current table row or ignore it. Use the <code>"atLeast"</code> value to enable the <code>SetHeight</code> method use.
 * @param {twips} [nValue] - The height for the current table row measured in twentieths of a point (1/1440 of an inch). This value will be ignored if <code>sHRule="auto"<code>.
 */
ApiTableRowPr.prototype.SetHeight = function(sHRule, nValue){};

/**
 * Specifies that the current table row will be repeated at the top of each new page 
 * wherever this table is displayed. This gives this table row the behavior of a 'header' row on 
 * each of these pages. This element can be applied to any number of rows at the top of the 
 * table structure in order to generate multi-row table headers.
 * @memberof ApiTableRowPr
 * @typeofeditors ["CDE"]
 * @param {boolean} isHeader - The true value means that the current table row will be repeated at the top of each new page.
 */
ApiTableRowPr.prototype.SetTableHeader = function(isHeader){};

/**
 * Converts the ApiTableRowPr object into the JSON object.
 * @memberof ApiTableRowPr
 * @typeofeditors ["CDE"]
 * @returns {JSON}
 */
ApiTableRowPr.prototype.ToJSON = function(){ return new JSON(); };

/**
 * Returns a type of the ApiTableCellPr class.
 * @memberof ApiTableCellPr
 * @typeofeditors ["CDE"]
 * @returns {"tableCellPr"}
 */
ApiTableCellPr.prototype.GetClassType = function(){ return ""; };

/**
 * Specifies the shading applied to the contents of the table cell.
 * @memberof ApiTableCellPr
 * @typeofeditors ["CDE"]
 * @param {ShdType} sType - The shading type which will be applied to the contents of the current table cell.
 * @param {byte} r - Red color component value.
 * @param {byte} g - Green color component value.
 * @param {byte} b - Blue color component value.
 * @param {boolean} [isAuto=false] - The true value disables the table cell contents shading.
 */
ApiTableCellPr.prototype.SetShd = function(sType, r, g, b, isAuto){};

/**
 * Specifies an amount of space which will be left between the bottom extent of the cell contents and the border
 * of a specific table cell within a table.
 * @memberof ApiTableCellPr
 * @typeofeditors ["CDE"]
 * @param {?twips} nValue - The value for the amount of space below the bottom extent of the cell measured in twentieths
 * of a point (1/1440 of an inch). If this value is <code>null</code>, then default table cell bottom margin will be used, otherwise
 * the table cell bottom margin will be overridden with the specified value for the current cell.
 */
ApiTableCellPr.prototype.SetCellMarginBottom = function(nValue){};

/**
 * Specifies an amount of space which will be left between the left extent of the cell contents and 
 * the border of a specific table cell within a table.
 * @memberof ApiTableCellPr
 * @typeofeditors ["CDE"]
 * @param {?twips} nValue - The value for the amount of space to the left extent of the cell measured in twentieths
 * of a point (1/1440 of an inch). If this value is <code>null</code>, then default table cell left margin will be used, otherwise
 * the table cell left margin will be overridden with the specified value for the current cell.
 */
ApiTableCellPr.prototype.SetCellMarginLeft = function(nValue){};

/**
 * Specifies an amount of space which will be left between the right extent of the cell contents and the border of a specific table cell within a table.
 * @memberof ApiTableCellPr
 * @typeofeditors ["CDE"]
 * @param {?twips} nValue - The value for the amount of space to the right extent of the cell measured in twentieths
 * of a point (1/1440 of an inch). If this value is <code>null</code>, then default table cell right margin will be used, otherwise
 * the table cell right margin will be overridden with the specified value for the current cell.
 */
ApiTableCellPr.prototype.SetCellMarginRight = function(nValue){};

/**
 * Specifies an amount of space which will be left between the upper extent of the cell contents
 * and the border of a specific table cell within a table.
 * @memberof ApiTableCellPr
 * @typeofeditors ["CDE"]
 * @param {?twips} nValue - The value for the amount of space above the upper extent of the cell measured in twentieths
 * of a point (1/1440 of an inch). If this value is <code>null</code>, then default table cell top margin will be used, otherwise
 * the table cell top margin will be overridden with the specified value for the current cell.
 */
ApiTableCellPr.prototype.SetCellMarginTop = function(nValue){};

/**
 * Sets the border which will be displayed at the bottom of the current table cell.
 * @memberof ApiTableCellPr
 * @typeofeditors ["CDE"]
 * @param {BorderType} sType - The cell bottom border style.
 * @param {pt_8} nSize - The width of the current cell bottom border measured in eighths of a point.
 * @param {pt} nSpace - The spacing offset in the bottom part of the table cell measured in points used to place this border.
 * @param {byte} r - Red color component value.
 * @param {byte} g - Green color component value.
 * @param {byte} b - Blue color component value.
 */
ApiTableCellPr.prototype.SetCellBorderBottom = function(sType, nSize, nSpace, r, g, b){};

/**
 * Sets the border which will be displayed to the left of the current table cell.
 * @memberof ApiTableCellPr
 * @typeofeditors ["CDE"]
 * @param {BorderType} sType - The cell left border style.
 * @param {pt_8} nSize - The width of the current cell left border measured in eighths of a point.
 * @param {pt} nSpace - The spacing offset in the left part of the table cell measured in points used to place this border.
 * @param {byte} r - Red color component value.
 * @param {byte} g - Green color component value.
 * @param {byte} b - Blue color component value.
 */
ApiTableCellPr.prototype.SetCellBorderLeft = function(sType, nSize, nSpace, r, g, b){};

/**
 * Sets the border which will be displayed to the right of the current table cell.
 * @memberof ApiTableCellPr
 * @typeofeditors ["CDE"]
 * @param {BorderType} sType - The cell right border style.
 * @param {pt_8} nSize - The width of the current cell right border measured in eighths of a point.
 * @param {pt} nSpace - The spacing offset in the right part of the table cell measured in points used to place this border.
 * @param {byte} r - Red color component value.
 * @param {byte} g - Green color component value.
 * @param {byte} b - Blue color component value.
 */
ApiTableCellPr.prototype.SetCellBorderRight = function(sType, nSize, nSpace, r, g, b){};

/**
 * Sets the border which will be displayed at the top of the current table cell.
 * @memberof ApiTableCellPr
 * @typeofeditors ["CDE"]
 * @param {BorderType} sType - The cell top border style.
 * @param {pt_8} nSize - The width of the current cell top border measured in eighths of a point.
 * @param {pt} nSpace - The spacing offset in the top part of the table cell measured in points used to place this border.
 * @param {byte} r - Red color component value.
 * @param {byte} g - Green color component value.
 * @param {byte} b - Blue color component value.
 */
ApiTableCellPr.prototype.SetCellBorderTop = function(sType, nSize, nSpace, r, g, b){};

/**
 * Sets the preferred width to the current table cell.
 * @memberof ApiTableCellPr
 * @typeofeditors ["CDE"]
 * @param {TableWidth} sType - Type of the width value from one of the available width values types.
 * @param {number} [nValue] - The table cell width value measured in positive integers.
 */
ApiTableCellPr.prototype.SetWidth = function(sType, nValue){};

/**
 * Specifies the vertical alignment for the text contents within the current table cell.
 * @memberof ApiTableCellPr
 * @typeofeditors ["CDE"]
 * @param {("top" | "center" | "bottom")} sType - The available types of the vertical alignment for the text contents of the current table cell.
 */
ApiTableCellPr.prototype.SetVerticalAlign = function(sType){};

/**
 * Specifies the direction of the text flow for this table cell.
 * @memberof ApiTableCellPr
 * @typeofeditors ["CDE"]
 * @param {("lrtb" | "tbrl" | "btlr")} sType - The available types of the text direction in the table cell: <code>"lrtb"</code>
 * - text direction left-to-right moving from top to bottom, <code>"tbrl"</code> - text direction top-to-bottom moving from right
 * to left, <code>"btlr"</code> - text direction bottom-to-top moving from left to right.
 */
ApiTableCellPr.prototype.SetTextDirection = function(sType){};

/**
 * Specifies how the current table cell is laid out when the parent table is displayed in a document. This setting
 * only affects the behavior of the cell when the {@link ApiTablePr#SetTableLayout} table layout for this table is set to use the <code>"autofit"</code> algorithm.
 * @memberof ApiTableCellPr
 * @typeofeditors ["CDE"]
 * @param {boolean} isNoWrap - The true value means that the current table cell will not be wrapped in the parent table.
 */
ApiTableCellPr.prototype.SetNoWrap = function(isNoWrap){};

/**
 * Converts the ApiTableCellPr object into the JSON object.
 * @memberof ApiTableCellPr
 * @typeofeditors ["CDE"]
 * @returns {JSON}
 */
ApiTableCellPr.prototype.ToJSON = function(){ return new JSON(); };

/**
 * Returns a type of the ApiTableStylePr class.
 * @memberof ApiTableStylePr
 * @typeofeditors ["CDE"]
 * @returns {"tableStylePr"}
 */
ApiTableStylePr.prototype.GetClassType = function(){ return ""; };

/**
 * Returns a type of the current table conditional style.
 * @memberof ApiTableStylePr
 * @typeofeditors ["CDE"]
 * @returns {TableStyleOverrideType}
 */
ApiTableStylePr.prototype.GetType = function(){ return new TableStyleOverrideType(); };

/**
 * Returns a set of the text run properties which will be applied to all the text runs within the table which match the conditional formatting type.
 * @memberof ApiTableStylePr
 * @typeofeditors ["CDE"]
 * @returns {ApiTextPr}
 */
ApiTableStylePr.prototype.GetTextPr = function(){ return new ApiTextPr(); };

/**
 * Returns a set of the paragraph properties which will be applied to all the paragraphs within a table which match the conditional formatting type.
 * @memberof ApiTableStylePr
 * @typeofeditors ["CDE"]
 * @returns {ApiParaPr}
 */
ApiTableStylePr.prototype.GetParaPr = function(){ return new ApiParaPr(); };

/**
 * Returns a set of the table properties which will be applied to all the regions within a table which match the conditional formatting type.
 * @memberof ApiTableStylePr
 * @typeofeditors ["CDE"]
 * @returns {ApiTablePr}
 */
ApiTableStylePr.prototype.GetTablePr = function(){ return new ApiTablePr(); };

/**
 * Returns a set of the table row properties which will be applied to all the rows within a table which match the conditional formatting type.
 * @memberof ApiTableStylePr
 * @typeofeditors ["CDE"]
 * @returns {ApiTableRowPr}
 */
ApiTableStylePr.prototype.GetTableRowPr = function(){ return new ApiTableRowPr(); };

/**
 * Returns a set of the table cell properties which will be applied to all the cells within a table which match the conditional formatting type.
 * @memberof ApiTableStylePr
 * @typeofeditors ["CDE"]
 * @returns {ApiTableCellPr}
 */
ApiTableStylePr.prototype.GetTableCellPr = function(){ return new ApiTableCellPr(); };

/**
 * Converts the ApiTableStylePr object into the JSON object.
 * @memberof ApiTableStylePr
 * @typeofeditors ["CDE"]
 * @returns {JSON}
 */
ApiTableStylePr.prototype.ToJSON = function(){ return new JSON(); };

/**
 * Returns a type of the ApiDrawing class.
 * @memberof ApiDrawing
 * @typeofeditors ["CDE", "CPE"]
 * @returns {"drawing"}
 */
ApiDrawing.prototype.GetClassType = function(){ return ""; };

/**
 * Sets the size of the object (image, shape, chart) bounding box.
 * @memberof ApiDrawing
 * @typeofeditors ["CDE"]
 * @param {EMU} nWidth - The object width measured in English measure units.
 * @param {EMU} nHeight - The object height measured in English measure units.
 */
ApiDrawing.prototype.SetSize = function(nWidth, nHeight){};

/**
 * Sets the wrapping type of the current object (image, shape, chart). One of the following wrapping style types can be set:
 * * <b>"inline"</b> - the object is considered to be a part of the text, like a character, so when the text moves, the object moves as well. In this case the positioning options are inaccessible.
 * If one of the following styles is selected, the object can be moved independently of the text and positioned on the page exactly:
 * * <b>"square"</b> - the text wraps the rectangular box that bounds the object.
 * * <b>"tight"</b> - the text wraps the actual object edges.
 * * <b>"through"</b> - the text wraps around the object edges and fills in the open white space within the object.
 * * <b>"topAndBottom"</b> - the text is only above and below the object.
 * * <b>"behind"</b> - the text overlaps the object.
 * * <b>"inFront"</b> - the object overlaps the text.
 * @memberof ApiDrawing
 * @typeofeditors ["CDE"]
 * @param {"inline" | "square" | "tight" | "through" | "topAndBottom" | "behind" | "inFront"} sType - The wrapping style type available for the object.
 */
ApiDrawing.prototype.SetWrappingStyle = function(sType){};

/**
 * Specifies how the floating object will be horizontally aligned.
 * @memberof ApiDrawing
 * @typeofeditors ["CDE"]
 * @param {RelFromH} [sRelativeFrom="page"] - The document element which will be taken as a countdown point for the object horizontal alignment.
 * @param {("left" | "right" | "center")} [sAlign="left"] - The alignment type which will be used for the object horizontal alignment.
 */
ApiDrawing.prototype.SetHorAlign = function(sRelativeFrom, sAlign){};

/**
 * Specifies how the floating object will be vertically aligned.
 * @memberof ApiDrawing
 * @typeofeditors ["CDE"]
 * @param {RelFromV} [sRelativeFrom="page"] - The document element which will be taken as a countdown point for the object vertical alignment.
 * @param {("top" | "bottom" | "center")} [sAlign="top"] - The alingment type which will be used for the object vertical alignment.
 */
ApiDrawing.prototype.SetVerAlign = function(sRelativeFrom, sAlign){};

/**
 * Sets the absolute measurement for the horizontal positioning of the floating object.
 * @memberof ApiDrawing
 * @typeofeditors ["CDE"]
 * @param {RelFromH} sRelativeFrom - The document element which will be taken as a countdown point for the object horizontal alignment.
 * @param {EMU} nDistance - The distance from the right side of the document element to the floating object measured in English measure units.
 */
ApiDrawing.prototype.SetHorPosition = function(sRelativeFrom, nDistance){};

/**
 * Sets the absolute measurement for the vertical positioning of the floating object.
 * @memberof ApiDrawing
 * @typeofeditors ["CDE"]
 * @param {RelFromV} sRelativeFrom - The document element which will be taken as a countdown point for the object vertical alignment.
 * @param {EMU} nDistance - The distance from the bottom part of the document element to the floating object measured in English measure units.
 */
ApiDrawing.prototype.SetVerPosition = function(sRelativeFrom, nDistance){};

/**
 * Specifies the minimum distance which will be maintained between the edges of the current drawing object and any
 * subsequent text.
 * @memberof ApiDrawing
 * @typeofeditors ["CDE"]
 * @param {EMU} nLeft - The distance from the left side of the current object and the subsequent text run measured in English measure units.
 * @param {EMU} nTop - The distance from the top side of the current object and the preceding text run measured in English measure units.
 * @param {EMU} nRight - The distance from the right side of the current object and the subsequent text run measured in English measure units.
 * @param {EMU} nBottom - The distance from the bottom side of the current object and the subsequent text run measured in English measure units.
 */
ApiDrawing.prototype.SetDistances = function(nLeft, nTop, nRight, nBottom){};

/**
 * Returns a parent paragraph that contains the graphic object.
 * @memberof ApiDrawing
 * @typeofeditors ["CDE"]
 * @returns {ApiParagraph | null} - returns null if parent paragraph doesn't exist.
 */
ApiDrawing.prototype.GetParentParagraph = function(){ return new ApiParagraph(); };

/**
 * Returns a parent content control that contains the graphic object.
 * @memberof ApiDrawing
 * @typeofeditors ["CDE"]
 * @returns {ApiBlockLvlSdt | null} - returns null if parent content control doesn't exist.
 */
ApiDrawing.prototype.GetParentContentControl = function(){ return new ApiBlockLvlSdt(); };

/**
 * Returns a parent table that contains the graphic object.
 * @memberof ApiDrawing
 * @typeofeditors ["CDE"]
 * @returns {ApiTable | null} - returns null if parent table doesn't exist.
 */
ApiDrawing.prototype.GetParentTable = function(){ return new ApiTable(); };

/**
 * Returns a parent table cell that contains the graphic object.
 * @typeofeditors ["CDE"]
 * @returns {ApiTableCell | null} - returns null if parent cell doesn't exist.
 */
ApiDrawing.prototype.GetParentTableCell = function(){ return new ApiTableCell(); };

/**
 * Deletes the current graphic object. 
 * @typeofeditors ["CDE"]
 * @returns {boolean} - returns false if drawing object haven't parent.
 */
ApiDrawing.prototype.Delete = function(){ return true; };

/**
 * Copies the current graphic object. 
 * @memberof ApiDrawing
 * @typeofeditors ["CDE"]
 * @returns {ApiDrawing}
 */
ApiDrawing.prototype.Copy = function(){ return new ApiDrawing(); };

/**
 * Wraps the graphic object with a rich text content control.
 * @memberof ApiDrawing
 * @typeofeditors ["CDE"]
 * @param {number} nType - Defines if this method returns the ApiBlockLvlSdt (nType === 1) or ApiDrawing (any value except 1) object.
 * @returns {ApiDrawing | ApiBlockLvlSdt}  
 */
ApiDrawing.prototype.InsertInContentControl = function(nType){ return new ApiDrawing(); };

/**
 * Inserts a paragraph at the specified position.
 * @memberof ApiDrawing
 * @typeofeditors ["CDE"]
 * @param {string | ApiParagraph} paragraph - Text or paragraph.
 * @param {string} sPosition - The position where the text or paragraph will be inserted ("before" or "after" the drawing specified).
 * @param {boolean} beRNewPara - Defines if this method returns a new paragraph (true) or the current ApiDrawing (false).
 * @returns {ApiParagraph | ApiDrawing} - returns null if parent paragraph doesn't exist.
 */
ApiDrawing.prototype.InsertParagraph = function(paragraph, sPosition, beRNewPara){ return new ApiParagraph(); };

/**
 * Selects the current graphic object.
 * @memberof ApiDrawing
 * @typeofeditors ["CDE"]
 */
ApiDrawing.prototype.Select = function(){};

/**
 * Inserts a break at the specified location in the main document.
 * @memberof ApiDrawing
 * @typeofeditors ["CDE"]
 * @param {number}breakType - The break type: page break (0) or line break (1).
 * @param {string}position  - The position where the page or line break will be inserted ("before" or "after" the current drawing).
 * @returns {boolean}  - returns false if drawing object haven't parent run or params are invalid.
 */
ApiDrawing.prototype.AddBreak = function(breakType, position){ return true; };

/**
 * Flips the current drawing horizontally.
 * @memberof ApiDrawing
 * @typeofeditors ["CDE"]
 * @param {boolean} bFlip - Specifies if the figure will be flipped horizontally or not.
 */
ApiDrawing.prototype.SetHorFlip = function(bFlip){};

/**
 * Flips the current drawing vertically.
 * @memberof ApiDrawing
 * @typeofeditors ["CDE"]
 * @param {boolean} bFlip - Specifies if the figure will be flipped vertically or not.
 * @returns {boolean} - returns false if param is invalid.
 */
ApiDrawing.prototype.SetVertFlip = function(bFlip){ return true; };

/**
 * Scales the height of the figure using the specified coefficient.
 * @memberof ApiDrawing
 * @typeofeditors ["CDE"]
 * @param {number} coefficient - The coefficient by which the figure height will be scaled.
 * @returns {boolean} - return false if param is invalid.
 */
ApiDrawing.prototype.ScaleHeight = function(coefficient){ return true; };

/**
 * Scales the width of the figure using the specified coefficient.
 * @memberof ApiDrawing
 * @typeofeditors ["CDE"]
 * @param {number} coefficient - The coefficient by which the figure width will be scaled.
 * @returns {boolean} - return false if param is invali.
 */
ApiDrawing.prototype.ScaleWidth = function(coefficient){ return true; };

/**
 * Sets the fill formatting properties to the current graphic object.
 * @memberof ApiDrawing
 * @typeofeditors ["CDE"]
 * @param {ApiFill} oFill - The fill type used to fill the graphic object.
 * @returns {boolean} - returns false if param is invalid.
 */
ApiDrawing.prototype.Fill = function(oFill){ return true; };

/**
 * Sets the outline properties to the specified graphic object.
 * @memberof ApiDrawing
 * @typeofeditors ["CDE"]
 * @param {ApiStroke} oStroke - The stroke used to create the graphic object outline.
 * @returns {boolean} - returns false if param is invalid.
 */
ApiDrawing.prototype.SetOutLine = function(oStroke){ return true; };

/**
 * Returns the next inline drawing object if exists. 
 *  @memberof ApiDrawing
 * @typeofeditors ["CDE"]
 * @returns {ApiDrawing | null} - returns null if drawing object is last.
 */
ApiDrawing.prototype.GetNextDrawing = function(){ return new ApiDrawing(); };

/**
 * Returns the previous inline drawing object if exists. 
 * @memberof ApiDrawing
 * @typeofeditors ["CDE"]
 * @returns {ApiDrawing | null} - returns null if drawing object is first.
 */
ApiDrawing.prototype.GetPrevDrawing = function(){ return new ApiDrawing(); };

/**
 * Converts the ApiDrawing object into the JSON object.
 * @memberof ApiDrawing
 * @typeofeditors ["CDE"]
 * @param {boolean} bWriteNumberings - Specifies if the used numberings will be written to the JSON object or not.
 * @param {boolean} bWriteStyles - Specifies if the used styles will be written to the JSON object or not.
 * @returns {JSON}
 */
ApiDrawing.prototype.ToJSON = function(bWriteNumberings, bWriteStyles){ return new JSON(); };

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
 * @typeofeditors ["CDE"]
 * @param {"noGrp" | "noUngrp" | "noSelect" | "noRot" | "noChangeAspect" | "noMove" | "noResize" | "noEditPoints" | "noAdjustHandles"
 * | "noChangeArrowheads" | "noChangeShapeType" | "noDrilldown" | "noTextEdit" | "noCrop" | "txBox"} sType - Lock type in the string format.
 * @returns {bool}
 */
ApiDrawing.prototype.GetLockValue = function(sType){ return true; };

/**
 * Sets the lock value to the specified lock type of the current drawing.
 * @typeofeditors ["CDE"]
 * @param {"noGrp" | "noUngrp" | "noSelect" | "noRot" | "noChangeAspect" | "noMove" | "noResize" | "noEditPoints" | "noAdjustHandles"
 * | "noChangeArrowheads" | "noChangeShapeType" | "noDrilldown" | "noTextEdit" | "noCrop" | "txBox"} sType - Lock type in the string format.
 * @param {bool} bValue - Specifies if the specified lock is applied to the current drawing.
 * @returns {bool}
 */
ApiDrawing.prototype.SetLockValue = function(sType, bValue){ return true; };

/**
 * Sets the properties from another drawing to the current drawing.
 * The following properties will be copied: horizontal and vertical alignment, distance between the edges of the current drawing object and any subsequent text, wrapping style, drawing name, title and description.
 * @memberof ApiDrawing
 * @param {ApiDrawing} oAnotherDrawing - The drawing which properties will be set to the current drawing.
 * @typeofeditors ["CDE"]
 * @returns {boolean}
 */
ApiDrawing.prototype.SetDrawingPrFromDrawing = function(oAnotherDrawing){ return true; };

/**
 * Returns a type of the ApiImage class.
 * @memberof ApiImage
 * @typeofeditors ["CDE", "CPE"]
 * @returns {"image"}
 */
ApiImage.prototype.GetClassType = function(){ return ""; };

/**
 * Returns the next inline image if exists. 
 * @memberof ApiImage
 * @typeofeditors ["CDE"]
 * @returns {ApiImage | null} - returns null if image is last.
 */
ApiImage.prototype.GetNextImage= function(){ return new ApiImage(); };

/**
 * Returns the previous inline image if exists. 
 * @memberof ApiImage
 * @typeofeditors ["CDE"]
 * @returns {ApiImage | null} - returns null if image is first.
 */
ApiImage.prototype.GetPrevImage= function(){ return new ApiImage(); };

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
 * @param {string} sAppId - The application ID associated with the curent OLE object.
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
 * Returns a type of the ApiShape class.
 * @memberof ApiShape
 * @typeofeditors ["CDE", "CSE"]
 * @returns {"shape"}
 */
ApiShape.prototype.GetClassType = function(){ return ""; };

/**
 * Returns the shape inner contents where a paragraph or text runs can be inserted.
 * @memberof ApiShape
 * @typeofeditors ["CDE", "CSE"]
 * @returns {ApiDocumentContent}
 */
ApiShape.prototype.GetDocContent = function(){ return new ApiDocumentContent(); };

/**
 * Returns the shape inner contents where a paragraph or text runs can be inserted.
 * @memberof ApiShape
 * @typeofeditors ["CDE", "CSE"]
 * @returns {ApiDocumentContent}
 */
ApiShape.prototype.GetContent = function(){ return new ApiDocumentContent(); };

/**
 * Sets the vertical alignment to the shape content where a paragraph or text runs can be inserted.
 * @memberof ApiShape
 * @typeofeditors ["CDE", "CSE"]
 * @param {VerticalTextAlign} VerticalAlign - The type of the vertical alignment for the shape inner contents.
 */
ApiShape.prototype.SetVerticalTextAlign = function(VerticalAlign){};

/**
 * Sets the text paddings to the current shape.
 * @memberof ApiShape
 * @typeofeditors ["CDE", "CSE"]
 * @param {?EMU} nLeft - Left padding.
 * @param {?EMU} nTop - Top padding.
 * @param {?EMU} nRight - Right padding.
 * @param {?EMU} nBottom - Bottom padding.
 */
ApiShape.prototype.SetPaddings = function(nLeft, nTop, nRight, nBottom){};

/**
 * Returns the next inline shape if exists. 
 * @memberof ApiShape
 * @typeofeditors ["CDE"]
 * @returns {ApiShape | null} - returns null if shape is last.
 */
ApiShape.prototype.GetNextShape = function(){ return new ApiShape(); };

/**
 * Returns the previous inline shape if exists. 
 * @memberof ApiShape
 * @typeofeditors ["CDE"]
 * @returns {ApiShape | null} - returns null is shape is first.
 */
ApiShape.prototype.GetPrevShape= function(){ return new ApiShape(); };

/**
 * Returns a type of the ApiChart class.
 * @memberof ApiChart
 * @typeofeditors ["CDE"]
 * @returns {"chart"}
 */
ApiChart.prototype.GetClassType = function(){ return ""; };

/**
 *  Specifies the chart title.
 *  @memberof ApiChart
 *  @typeofeditors ["CDE"]
 *  @param {string} sTitle - The title which will be displayed for the current chart.
 *  @param {pt} nFontSize - The text size value measured in points.
 *  @param {?bool} bIsBold - Specifies if the chart title is written in bold font or not.
 */
ApiChart.prototype.SetTitle = function (sTitle, nFontSize, bIsBold){};

/**
 *  Specifies the chart horizontal axis title.
 *  @memberof ApiChart
 *  @typeofeditors ["CDE"]
 *  @param {string} sTitle - The title which will be displayed for the horizontal axis of the current chart.
 *  @param {pt} nFontSize - The text size value measured in points.
 *  @param {?bool} bIsBold - Specifies if the horizontal axis title is written in bold font or not.
 * */
ApiChart.prototype.SetHorAxisTitle = function (sTitle, nFontSize, bIsBold){};

/**
 *  Specifies the chart vertical axis title.
 *  @memberof ApiChart
 *  @typeofeditors ["CDE"]
 *  @param {string} sTitle - The title which will be displayed for the vertical axis of the current chart.
 *  @param {pt} nFontSize - The text size value measured in points.
 *  @param {?bool} bIsBold - Specifies if the vertical axis title is written in bold font or not.
 * */
ApiChart.prototype.SetVerAxisTitle = function (sTitle, nFontSize, bIsBold){};

/**
 * Specifies the vertical axis orientation.
 * @memberof ApiChart
 * @typeofeditors ["CDE"]
 * @param {boolean} bIsMinMax - The <code>true</code> value will set the normal data direction for the vertical axis (from minimum to maximum).
 * */
ApiChart.prototype.SetVerAxisOrientation = function(bIsMinMax){};

/**
 * Specifies the horizontal axis orientation.
 * @memberof ApiChart
 * @typeofeditors ["CDE"]
 * @param {boolean} bIsMinMax - The <code>true</code> value will set the normal data direction for the horizontal axis (from minimum to maximum).
 * */
ApiChart.prototype.SetHorAxisOrientation = function(bIsMinMax){};

/**
 * Specifies the chart legend position.
 * @memberof ApiChart
 * @typeofeditors ["CDE"]
 * @param {"left" | "top" | "right" | "bottom" | "none"} sLegendPos - The position of the chart legend inside the chart window.
 * */
ApiChart.prototype.SetLegendPos = function(sLegendPos){};

/**
 * Specifies the legend font size.
 * @memberof ApiChart
 * @typeofeditors ["CDE"]
 * @param {pt} nFontSize - The text size value measured in points.
 * */
ApiChart.prototype.SetLegendFontSize = function(nFontSize){};

/**
 * Specifies which chart data labels are shown for the chart.
 * @memberof ApiChart
 * @typeofeditors ["CDE"]
 * @param {boolean} bShowSerName - Whether to show or hide the source table column names used for the data which the chart will be build from.
 * @param {boolean} bShowCatName - Whether to show or hide the source table row names used for the data which the chart will be build from.
 * @param {boolean} bShowVal - Whether to show or hide the chart data values.
 * @param {boolean} bShowPercent - Whether to show or hide the percent for the data values (works with stacked chart types).
 * */
ApiChart.prototype.SetShowDataLabels = function(bShowSerName, bShowCatName, bShowVal, bShowPercent){};

/**
 * Spicifies the show options for data labels.
 * @memberof ApiChart
 * @typeofeditors ["CDE"]
 * @param {number} nSeriesIndex - The series index from the array of the data used to build the chart from.
 * @param {number} nPointIndex - The point index from this series.
 * @param {boolean} bShowSerName - Whether to show or hide the source table column names used for the data which the chart will be build from.
 * @param {boolean} bShowCatName - Whether to show or hide the source table row names used for the data which the chart will be build from.
 * @param {boolean} bShowVal - Whether to show or hide the chart data values.
 * @param {boolean} bShowPercent - Whether to show or hide the percent for the data values (works with stacked chart types).
 * */
ApiChart.prototype.SetShowPointDataLabel = function(nSeriesIndex, nPointIndex, bShowSerName, bShowCatName, bShowVal, bShowPercent){};

/**
 * Spicifies tick labels position for the vertical axis.
 * @memberof ApiChart
 * @typeofeditors ["CDE"]
 * @param {TickLabelPosition} sTickLabelPosition - The type for the position of chart vertical tick labels.
 * */
ApiChart.prototype.SetVertAxisTickLabelPosition = function(sTickLabelPosition){};

/**
 * Spicifies tick labels position for the horizontal axis.
 * @memberof ApiChart
 * @typeofeditors ["CDE"]
 * @param {TickLabelPosition} sTickLabelPosition - The type for the position of chart horizontal tick labels.
 * */
ApiChart.prototype.SetHorAxisTickLabelPosition = function(sTickLabelPosition){};

/**
 * Specifies major tick mark for the horizontal axis.
 * @memberof ApiChart
 * @typeofeditors ["CDE"]
 * @param {TickMark} sTickMark - The type of tick mark appearance.
 * */
ApiChart.prototype.SetHorAxisMajorTickMark = function(sTickMark){};

/**
 * Specifies minor tick mark for the horizontal axis.
 * @memberof ApiChart
 * @typeofeditors ["CDE"]
 * @param {TickMark} sTickMark - The type of tick mark appearance.
 * */
ApiChart.prototype.SetHorAxisMinorTickMark = function(sTickMark){};

/**
 * Specifies major tick mark for the vertical axis.
 * @memberof ApiChart
 * @typeofeditors ["CDE"]
 * @param {TickMark} sTickMark - The type of tick mark appearance.
 * */
ApiChart.prototype.SetVertAxisMajorTickMark = function(sTickMark){};

/**
 * Specifies minor tick mark for the vertical axis.
 * @memberof ApiChart
 * @typeofeditors ["CDE"]
 * @param {TickMark} sTickMark - The type of tick mark appearance.
 * */
ApiChart.prototype.SetVertAxisMinorTickMark = function(sTickMark){};

/**
 * Specifies major vertical gridline visual properties.
 * @memberof ApiChart
 * @typeofeditors ["CDE"]
 * @param {?ApiStroke} oStroke - The stroke used to create the element shadow.
 * */
ApiChart.prototype.SetMajorVerticalGridlines = function(oStroke){};

/**
 * Specifies minor vertical gridline visual properties.
 * @memberof ApiChart
 * @typeofeditors ["CDE"]
 * @param {?ApiStroke} oStroke - The stroke used to create the element shadow.
 * */
ApiChart.prototype.SetMinorVerticalGridlines = function(oStroke){};

/**
 * Specifies major horizontal gridline visual properties.
 * @memberof ApiChart
 * @typeofeditors ["CDE"]
 * @param {?ApiStroke} oStroke - The stroke used to create the element shadow.
 * */
ApiChart.prototype.SetMajorHorizontalGridlines = function(oStroke){};

/**
 * Specifies minor horizontal gridline visual properties.
 * @memberof ApiChart
 * @typeofeditors ["CDE"]
 * @param {?ApiStroke} oStroke - The stroke used to create the element shadow.
 * */
ApiChart.prototype.SetMinorHorizontalGridlines = function(oStroke){};

/**
 * Specifies font size for labels of the horizontal axis.
 * @memberof ApiChart
 * @typeofeditors ["CDE"]
 * @param {pt} nFontSize - The text size value measured in points.
 */
ApiChart.prototype.SetHorAxisLablesFontSize = function(nFontSize){};

/**
 * Specifies font size for labels of the vertical axis.
 * @memberof ApiChart
 * @typeofeditors ["CDE"]
 * @param {pt} nFontSize - The text size value measured in points.
 */
ApiChart.prototype.SetVertAxisLablesFontSize = function(nFontSize){};

/**
 * Returns the next inline chart if exists.
 * @memberof ApiChart
 * @typeofeditors ["CDE"]
 * @returns {ApiChart | null} - returns null if chart is last.
 */
ApiChart.prototype.GetNextChart = function(){ return new ApiChart(); };

/**
 * Returns the previous inline chart if exists. 
 * @memberof ApiChart
 * @typeofeditors ["CDE"]
 * @returns {ApiChart | null} - return null if char if first.
 */
ApiChart.prototype.GetPrevChart= function(){ return new ApiChart(); };

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
 * @param {AxisPos} - Axis position in the chart.
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
 * Returns a type of the ApiFill class.
 * @memberof ApiFill
 * @typeofeditors ["CDE", "CSE", "CPE"]
 * @returns {"fill"}
 */
ApiFill.prototype.GetClassType = function(){ return ""; };

/**
 * Converts the ApiFill object into the JSON object.
 * @memberof ApiFill
 * @typeofeditors ["CDE"]
 * @returns {JSON}
 */
ApiFill.prototype.ToJSON = function(){ return new JSON(); };

/**
 * Returns a type of the ApiStroke class.
 * @memberof ApiStroke
 * @typeofeditors ["CDE", "CSE", "CPE"]
 * @returns {"stroke"}
 */
ApiStroke.prototype.GetClassType = function(){ return ""; };

/**
 * Converts the ApiStroke object into the JSON object.
 * @memberof ApiStroke
 * @typeofeditors ["CDE"]
 * @returns {JSON}
 */
ApiStroke.prototype.ToJSON = function(){ return new JSON(); };

/**
 * Returns a type of the ApiGradientStop class.
 * @memberof ApiGradientStop
 * @typeofeditors ["CDE", "CSE", "CPE"]
 * @returns {"gradientStop"}
 */
ApiGradientStop.prototype.GetClassType = function (){ return ""; };

/**
 * Converts the ApiGradientStop object into the JSON object.
 * @memberof ApiGradientStop
 * @typeofeditors ["CDE"]
 * @returns {JSON}
 */
ApiGradientStop.prototype.ToJSON = function(){ return new JSON(); };

/**
 * Returns a type of the ApiUniColor class.
 * @memberof ApiUniColor
 * @typeofeditors ["CDE", "CSE", "CPE"]
 * @returns {"uniColor"}
 */
ApiUniColor.prototype.GetClassType = function (){ return ""; };

/**
 * Converts the ApiUniColor object into the JSON object.
 * @memberof ApiUniColor
 * @typeofeditors ["CDE"]
 * @returns {JSON}
 */
ApiUniColor.prototype.ToJSON = function(){ return new JSON(); };

/**
 * Returns a type of the ApiRGBColor class.
 * @memberof ApiRGBColor
 * @typeofeditors ["CDE", "CSE", "CPE"]
 * @returns {"rgbColor"}
 */
ApiRGBColor.prototype.GetClassType = function (){ return ""; };

/**
 * Converts the ApiRGBColor object into the JSON object.
 * @memberof ApiRGBColor
 * @typeofeditors ["CDE"]
 * @returns {JSON}
 */
ApiRGBColor.prototype.ToJSON = function(){ return new JSON(); };

/**
 * Returns a type of the ApiSchemeColor class.
 * @memberof ApiSchemeColor
 * @typeofeditors ["CDE", "CSE", "CPE"]
 * @returns {"schemeColor"}
 */
ApiSchemeColor.prototype.GetClassType = function (){ return ""; };

/**
 * Converts the ApiSchemeColor object into the JSON object.
 * @memberof ApiSchemeColor
 * @typeofeditors ["CDE"]
 * @returns {JSON}
 */
ApiSchemeColor.prototype.ToJSON = function(){ return new JSON(); };

/**
 * Returns a type of the ApiPresetColor class.
 * @memberof ApiPresetColor
 * @typeofeditors ["CDE", "CSE", "CPE"]
 * @returns {"presetColor"}
 */
ApiPresetColor.prototype.GetClassType = function (){ return ""; };

/**
 * Converts the ApiPresetColor object into the JSON object.
 * @memberof ApiPresetColor
 * @typeofeditors ["CDE"]
 * @returns {JSON}
 */
ApiPresetColor.prototype.ToJSON = function(){ return new JSON(); };

/**
 * Returns a type of the ApiInlineLvlSdt class.
 * @memberof ApiInlineLvlSdt
 * @typeofeditors ["CDE"]
 * @returns {"inlineLvlSdt"}
 */
ApiInlineLvlSdt.prototype.GetClassType = function(){ return ""; };

/**
 * Sets the lock to the current inline text content control:
 * <b>"contentLocked"</b> - content cannot be edited.
 * <b>"sdtContentLocked"</b> - content cannot be edited and the container cannot be deleted.
 * <b>"sdtLocked"</b> - the container cannot be deleted.
 * @memberof ApiInlineLvlSdt
 * @typeofeditors ["CDE"]
 * @param {"contentLocked" | "sdtContentLocked" | "sdtLocked"} sLockType - The lock type applied to the inline text content control.
 */
ApiInlineLvlSdt.prototype.SetLock = function(sLockType){};

/**
 * Returns the lock type of the current container.
 * @memberof ApiInlineLvlSdt
 * @typeofeditors ["CDE"]
 * @returns {SdtLock}
 */
ApiInlineLvlSdt.prototype.GetLock = function(){ return new SdtLock(); };

/**
 * Adds a string tag to the current inline text content control.
 * @memberof ApiInlineLvlSdt
 * @typeofeditors ["CDE"]
 * @param {string} sTag - The tag which will be added to the current inline text content control.
 */
ApiInlineLvlSdt.prototype.SetTag = function(sTag){};

/**
 * Returns the tag attribute for the current container.
 * @memberof ApiInlineLvlSdt
 * @typeofeditors ["CDE"]
 * @returns {string}
 */
ApiInlineLvlSdt.prototype.GetTag = function(){ return ""; };

/**
 * Adds a string label to the current inline text content control.
 * @memberof ApiInlineLvlSdt
 * @typeofeditors ["CDE"]
 * @param {string} sLabel - The label which will be added to the current inline text content control. Can be a positive or negative integer from <b>-2147483647</b> to <b>2147483647</b>.
 */
ApiInlineLvlSdt.prototype.SetLabel = function(sLabel){};

/**
 * Returns the label attribute for the current container.
 * @memberof ApiInlineLvlSdt
 * @typeofeditors ["CDE"]
 * @returns {string}
 */
ApiInlineLvlSdt.prototype.GetLabel = function(){ return ""; };

/**
 * Sets the alias attribute to the current container.
 * @memberof ApiInlineLvlSdt
 * @typeofeditors ["CDE"]
 * @param {string} sAlias - The alias which will be added to the current inline text content control.
 */
ApiInlineLvlSdt.prototype.SetAlias = function(sAlias){};

/**
 * Returns the alias attribute for the current container.
 * @memberof ApiInlineLvlSdt
 * @typeofeditors ["CDE"]
 * @returns {string}
 */
ApiInlineLvlSdt.prototype.GetAlias = function(){ return ""; };

/**
 * Returns a number of elements in the current inline text content control. The text content 
 * control is created with one text run present in it by default, so even without any 
 * element added this method will return the value of '1'.
 * @memberof ApiInlineLvlSdt
 * @typeofeditors ["CDE"]
 * @returns {number}
 */
ApiInlineLvlSdt.prototype.GetElementsCount = function(){ return 0; };

/**
 * Returns an element of the current inline text content control using the position specified.
 * @memberof ApiInlineLvlSdt
 * @typeofeditors ["CDE"]
 * @param {number} nPos - The position where the element which content we want to get must be located.
 * @returns {ParagraphContent}
 */
ApiInlineLvlSdt.prototype.GetElement = function(nPos){ return new ParagraphContent(); };

/**
 * Removes an element using the position specified from the current inline text content control.
 * @memberof ApiInlineLvlSdt
 * @typeofeditors ["CDE"]
 * @param {number} nPos - The position of the element which we want to remove from the current inline text content control.
 * @returns {boolean}
 */
ApiInlineLvlSdt.prototype.RemoveElement = function(nPos){ return true; };

/**
 * Removes all the elements from the current inline text content control.
 * @memberof ApiInlineLvlSdt
 * @typeofeditors ["CDE"]
 * @returns {boolean} - returns false if control has not elements.
 */
ApiInlineLvlSdt.prototype.RemoveAllElements = function(){ return true; };

/**
 * Adds an element to the inline text content control.
 * @memberof ApiInlineLvlSdt
 * @typeofeditors ["CDE"]
 * @param {ParagraphContent} oElement - The document element which will be added at the position specified. Returns <b>false</b> if the type of *oElement* is not supported by an inline text content control.
 * @param {number} [nPos] - The position of the element where it will be added to the current inline text content control. If this value is not specified, then the element will be added to the end of the current inline text content control.
 * @returns {boolean} - returns false if oElement unsupported.
 */
ApiInlineLvlSdt.prototype.AddElement = function(oElement, nPos){ return true; };

/**
 * Adds an element to the end of inline text content control.
 * @memberof ApiInlineLvlSdt
 * @typeofeditors ["CDE"]
 * @param {DocumentElement} oElement - The document element which will be added to the end of the container.
 * @returns {boolean} - returns false if oElement unsupported.
 */
ApiInlineLvlSdt.prototype.Push = function(oElement){ return true; };

/**
 * Adds text to the current content control. 
 * @memberof ApiInlineLvlSdt
 * @typeofeditors ["CDE"]
 * @param {String} sText - The text which will be added to the content control.
 * @returns {boolean} - returns false if param is invalid.
 */
ApiInlineLvlSdt.prototype.AddText = function(sText){ return true; };

/**
 * Removes a content control and its content. If keepContent is true, the content is not deleted.
 * @memberof ApiInlineLvlSdt
 * @typeofeditors ["CDE"]
 * @param {boolean} keepContent - Specifies if the content will be deleted or not.
 * @returns {boolean} - returns false if control haven't parent paragraph.
 */
ApiInlineLvlSdt.prototype.Delete = function(keepContent){ return true; };

/**
 * Applies text settings to the content of the content control.
 * @memberof ApiInlineLvlSdt
 * @typeofeditors ["CDE"]
 * @param {ApiTextPr} oTextPr - The properties that will be set to the content of the content control.
 * @returns {ApiInlineLvlSdt} this.
 */
ApiInlineLvlSdt.prototype.SetTextPr = function(oTextPr){ return new ApiInlineLvlSdt(); };

/**
 * Returns a paragraph that contains the current content control.
 * @memberof ApiInlineLvlSdt
 * @typeofeditors ["CDE"]
 * @returns {ApiParagraph | null} - returns null if parent paragraph doesn't exist.
 */
ApiInlineLvlSdt.prototype.GetParentParagraph = function(){ return new ApiParagraph(); };

/**
 * Returns a content control that contains the current content control.
 * @memberof ApiInlineLvlSdt
 * @typeofeditors ["CDE"]
 * @returns {ApiBlockLvlSdt | ApiInlineLvlSdt | null} - returns null if parent content control doesn't exist.
 */
ApiInlineLvlSdt.prototype.GetParentContentControl = function(){ return new ApiBlockLvlSdt(); };

/**
 * Returns a table that contains the current content control.
 * @memberof ApiInlineLvlSdt
 * @typeofeditors ["CDE"]
 * @returns {ApiTable | null} - returns null if parent table doesn't exist.  
 */
ApiInlineLvlSdt.prototype.GetParentTable = function(){ return new ApiTable(); };

/**
 * Returns a table cell that contains the current content control.
 * @memberof ApiInlineLvlSdt
 * @typeofeditors ["CDE"]
 * @returns {ApiTableCell | null} - return null if parent cell doesn't exist.  
 */
ApiInlineLvlSdt.prototype.GetParentTableCell = function(){ return new ApiTableCell(); };

/**
 * Returns a Range object that represents the part of the document contained in the specified content control.
 * @memberof ApiInlineLvlSdt
 * @typeofeditors ["CDE"]
 * @param {Number} Start - Start character in the current element.
 * @param {Number} End - End character in the current element.
 * @returns {ApiRange} 
 * */
ApiInlineLvlSdt.prototype.GetRange = function(Start, End){ return new ApiRange(); };

/**
 * Creates a copy of an inline content control. Ignores comments, footnote references, complex fields.
 * @memberof ApiInlineLvlSdt
 * @typeofeditors ["CDE"]
 * @returns {ApiInlineLvlSdt}
 */
ApiInlineLvlSdt.prototype.Copy = function(){ return new ApiInlineLvlSdt(); };

/**
 * Converts the ApiInlineLvlSdt object into the JSON object.
 * @memberof ApiInlineLvlSdt
 * @typeofeditors ["CDE"]
 * @param {boolean} bWriteStyles - Specifies if the used styles will be written to the JSON object or not.
 * @returns {JSON}
 */
ApiInlineLvlSdt.prototype.ToJSON = function(bWriteStyles){ return new JSON(); };

/**
 * Returns the placeholder text from the current inline content control.
 * @memberof ApiInlineLvlSdt
 * @typeofeditors ["CDE"]
 * @returns {string}
 */
ApiInlineLvlSdt.prototype.GetPlaceholderText = function(){ return ""; };

/**
 * Sets the placeholder text to the current inline content control.
 * *Can't be set to checkbox or radio button*
 * @memberof ApiInlineLvlSdt
 * @param {string} sText - The text that will be set to the current inline content control.
 * @typeofeditors ["CDE"]
 * @returns {boolean}
 */
ApiInlineLvlSdt.prototype.SetPlaceholderText = function(sText){ return true; };

/**
 * Checks if the content control is a form.
 * @memberof ApiInlineLvlSdt
 * @typeofeditors ["CDE"]
 * @returns {boolean}
 */
ApiInlineLvlSdt.prototype.IsForm = function(){ return true; };

/**
 * Adds a comment to the current inline content control.
 * <note>Please note that this inline content control must be in the document.</note>
 * @memberof ApiInlineLvlSdt
 * @typeofeditors ["CDE"]
 * @param {string} sText - The comment text (required).
 * @param {string} sAuthor - The author's name (optional).
 * @param {string} sUserId - The user ID of the comment author (optional).
 * @returns {ApiComment} - Returns null if the comment was not added.
 */
ApiInlineLvlSdt.prototype.AddComment = function(sText, sAuthor, sUserId){ return new ApiComment(); };

/**
 * Place cursor before/after the current content control
 * @param {boolean} [isAfter=true]
 * @memberof ApiInlineLvlSdt
 * @typeofeditors ["CDE"]
 */
ApiInlineLvlSdt.prototype.MoveCursorOutside = function(isAfter){};

/**
 * Returns a list of values of the combo box / dropdown list content control.
 * @memberof ApiInlineLvlSdt
 * @typeofeditors ["CDE"]
 * @returns {ApiContentControlList}
 */
ApiInlineLvlSdt.prototype.GetDropdownList = function(){ return new ApiContentControlList(); };

/**
 * Returns a type of the ApiContentControlList class.
 * @memberof ApiContentControlList
 * @typeofeditors ["CDE"]
 * @returns {"contentControlList"}
 */
ApiContentControlList.prototype.GetClassType = function(){ return ""; };

/**
 * Returns a collection of items (the ApiContentControlListEntry objects) of the combo box / dropdown list content control.
 * @memberof ApiContentControlList
 * @typeofeditors ["CDE"]
 * @returns {ApiContentControlListEntry[]}
 */
ApiContentControlList.prototype.GetAllItems = function(){ return [new ApiContentControlListEntry()]; };

/**
 * Returns a number of items of the combo box / dropdown list content control.
 * @memberof ApiContentControlList
 * @typeofeditors ["CDE"]
 * @returns {number}
 */
ApiContentControlList.prototype.GetElementsCount = function(){ return 0; };

/**
 * Returns a parent of the combo box / dropdown list content control.
 * @memberof ApiContentControlList
 * @typeofeditors ["CDE"]
 * @returns {ApiInlineLvlSdt | ApiBlockLvlSdt}
 */
ApiContentControlList.prototype.GetParent = function(){ return new ApiInlineLvlSdt(); };

/**
 * Adds a new value to the combo box / dropdown list content control.
 * @memberof ApiContentControlList
 * @param {string} sText - The display text for the list item.
 * @param {string} [sValue=sText] - The list item value.
 * @param {number} [nIndex=this.GetElementsCount()] - A position where a new value will be added.
 * @typeofeditors ["CDE"]
 * @returns {boolean}
 */
ApiContentControlList.prototype.Add = function(sText, sValue, nIndex){ return true; };

/**
 * Clears a list of values of the combo box / dropdown list content control.
 * @memberof ApiContentControlList
 * @typeofeditors ["CDE"]
 */
ApiContentControlList.prototype.Clear = function(){};

/**
 * Returns an item of the combo box / dropdown list content control by the position specified in the request.
 * @memberof ApiContentControlList
 * @param {number} nIndex - Item position.
 * @typeofeditors ["CDE"]
 * @returns {ApiContentControlListEntry}
 */
ApiContentControlList.prototype.GetItem = function(nIndex){ return new ApiContentControlListEntry(); };

/**
 * Returns a type of the ApiContentControlListEntry class.
 * @memberof ApiContentControlListEntry
 * @typeofeditors ["CDE"]
 * @returns {"contentControlList"}
 */
ApiContentControlListEntry.prototype.GetClassType = function(){ return ""; };

/**
 * Returns a parent of the content control list item in the combo box / dropdown list content control.
 * @memberof ApiContentControlListEntry
 * @typeofeditors ["CDE"]
 * @returns {ApiContentControlList}
 */
ApiContentControlListEntry.prototype.GetParent = function(){ return new ApiContentControlList(); };

/**
 * Selects the list entry in the combo box / dropdown list content control and sets the text of the content control to the selected item value.
 * @memberof ApiContentControlListEntry
 * @typeofeditors ["CDE"]
 * @returns {boolean}
 */
ApiContentControlListEntry.prototype.Select = function(){ return true; };

/**
 * Moves the current item in the parent combo box / dropdown list content control up one element.
 * @memberof ApiContentControlListEntry
 * @typeofeditors ["CDE"]
 * @returns {boolean}
 */
ApiContentControlListEntry.prototype.MoveUp = function(){ return true; };

/**
 * Moves the current item in the parent combo box / dropdown list content control down one element, so that it is after the item that originally followed it.
 * @memberof ApiContentControlListEntry
 * @typeofeditors ["CDE"]
 * @returns {boolean}
 */
ApiContentControlListEntry.prototype.MoveDown = function(){ return true; };

/**
 * Returns an index of the content control list item in the combo box / dropdown list content control.
 * @memberof ApiContentControlListEntry
 * @typeofeditors ["CDE"]
 * @returns {number}
 */
ApiContentControlListEntry.prototype.GetIndex = function(){ return 0; };

/**
 * Sets an index to the content control list item in the combo box / dropdown list content control.
 * @memberof ApiContentControlListEntry
 * @param {number} nIndex - An index of the content control list item.
 * @typeofeditors ["CDE"]
 * @returns {boolean}
 */
ApiContentControlListEntry.prototype.SetIndex = function(nIndex){ return true; };

/**
 * Deletes the specified item in the combo box / dropdown list content control.
 * @memberof ApiContentControlListEntry
 * @typeofeditors ["CDE"]
 * @returns {boolean}
 */
ApiContentControlListEntry.prototype.Delete = function(){ return true; };

/**
 * Returns a String that represents the display text of a list item for the combo box / dropdown list content control.
 * @memberof ApiContentControlListEntry
 * @typeofeditors ["CDE"]
 * @returns {string}
 */
ApiContentControlListEntry.prototype.GetText = function(){ return ""; };

/**
 * Sets a String that represents the display text of a list item for the combo box / dropdown list content control.
 * @memberof ApiContentControlListEntry
 * @typeofeditors ["CDE"]
 * @param {string} sText - The display text of a list item.
 * @returns {boolean}
 */
ApiContentControlListEntry.prototype.SetText = function(sText){ return true; };

/**
 * Returns a String that represents the value of a list item for the combo box / dropdown list content control.
 * @memberof ApiContentControlListEntry
 * @typeofeditors ["CDE"]
 * @returns {string}
 */
ApiContentControlListEntry.prototype.GetValue = function(){ return ""; };

/**
 * Sets a String that represents the value of a list item for the combo box / dropdown list content control.
 * @memberof ApiContentControlListEntry
 * @typeofeditors ["CDE"]
 * @param {string} sValue - The value of a list item.
 * @returns {boolean}
 */
ApiContentControlListEntry.prototype.SetValue = function(sValue){ return true; };

/**
 * Returns a type of the ApiBlockLvlSdt class.
 * @memberof ApiBlockLvlSdt
 * @typeofeditors ["CDE"]
 * @returns {"blockLvlSdt"}
 */
ApiBlockLvlSdt.prototype.GetClassType = function(){ return ""; };

/**
 * Sets the lock to the current block text content control:
 * <b>"contentLocked"</b> - content cannot be edited.
 * <b>"sdtContentLocked"</b> - content cannot be edited and the container cannot be deleted.
 * <b>"sdtLocked"</b> - the container cannot be deleted.
 * @memberof ApiBlockLvlSdt
 * @typeofeditors ["CDE"]
 * @param {"contentLocked" | "sdtContentLocked" | "sdtLocked"} sLockType - The type of the lock applied to the block text content control.
 */
ApiBlockLvlSdt.prototype.SetLock = function(sLockType){};

/**
 * Returns the lock type of the current container.
 * @memberof ApiBlockLvlSdt
 * @typeofeditors ["CDE"]
 * @returns {SdtLock}
 */
ApiBlockLvlSdt.prototype.GetLock = function(){ return new SdtLock(); };

/**
 * Sets the tag attribute to the current container.
 * @memberof ApiBlockLvlSdt
 * @typeofeditors ["CDE"]
 * @param {string} sTag - The tag which will be added to the current container.
 */
ApiBlockLvlSdt.prototype.SetTag = function(sTag){};

/**
 * Returns the tag attribute for the current container.
 * @memberof ApiBlockLvlSdt
 * @typeofeditors ["CDE"]
 * @returns {string}
 */
ApiBlockLvlSdt.prototype.GetTag = function(){ return ""; };

/**
 * Sets the label attribute to the current container.
 * @memberof ApiBlockLvlSdt
 * @typeofeditors ["CDE"]
 * @param {string} sLabel - The label which will be added to the current container. Can be a positive or negative integer from <b>-2147483647</b> to <b>2147483647</b>.
 */
ApiBlockLvlSdt.prototype.SetLabel = function(sLabel){};

/**
 * Returns the label attribute for the current container.
 * @memberof ApiBlockLvlSdt
 * @typeofeditors ["CDE"]
 * @returns {string}
 */
ApiBlockLvlSdt.prototype.GetLabel = function(){ return ""; };

/**
 * Sets the alias attribute to the current container.
 * @memberof ApiBlockLvlSdt
 * @typeofeditors ["CDE"]
 * @param {string} sAlias - The alias which will be added to the current container.
 */
ApiBlockLvlSdt.prototype.SetAlias = function(sAlias){};

/**
 * Returns the alias attribute for the current container.
 * @memberof ApiBlockLvlSdt
 * @typeofeditors ["CDE"]
 * @returns {string}
 */
ApiBlockLvlSdt.prototype.GetAlias = function(){ return ""; };

/**
 * Returns the content of the current container.
 * @memberof ApiBlockLvlSdt
 * @typeofeditors ["CDE"]
 * @returns {ApiDocumentContent}
 */
ApiBlockLvlSdt.prototype.GetContent = function(){ return new ApiDocumentContent(); };

/**
 * Returns a collection of content control objects in the current content control.
 * @memberof ApiBlockLvlSdt
 * @typeofeditors ["CDE"]
 * @returns {ApiBlockLvlSdt[] | ApiInlineLvlSdt[]}
 */
ApiBlockLvlSdt.prototype.GetAllContentControls = function(){ return [new ApiBlockLvlSdt()]; };

/**
 * Returns a collection of paragraph objects in the current content control.
 * @memberof ApiBlockLvlSdt
 * @typeofeditors ["CDE"]
 * @returns {ApiParagraph[]}
 */
ApiBlockLvlSdt.prototype.GetAllParagraphs = function(){ return [new ApiParagraph()]; };

/**
 * Returns a collection of tables on a given absolute page.
 * <note>This method can be a little bit slow, because it runs the document calculation
 * process to arrange tables on the specified page.</note>
 * @memberof ApiBlockLvlSdt
 * @typeofeditors ["CDE"]
 * @param nPage - Page number. If it is not specified, an empty array will be returned.
 * @returns {ApiTable[]}  
 */
ApiBlockLvlSdt.prototype.GetAllTablesOnPage = function(nPage){ return [new ApiTable()]; };

/**
 * Clears the contents from the current content control.
 * @memberof ApiBlockLvlSdt
 * @typeofeditors ["CDE"]
 * @returns {boolean} - returns true.
 */
ApiBlockLvlSdt.prototype.RemoveAllElements = function(){ return true; };

/**
 * Removes a content control and its content. If keepContent is true, the content is not deleted.
 * @memberof ApiBlockLvlSdt
 * @typeofeditors ["CDE"]
 * @param {boolean} keepContent - Specifies if the content will be deleted or not.
 * @returns {boolean} - returns false if content control haven't parent.
 */
ApiBlockLvlSdt.prototype.Delete = function(keepContent){ return true; };

/**
 * Applies text settings to the content of the content control.
 * @memberof ApiBlockLvlSdt
 * @typeofeditors ["CDE"]
 * @param {ApiTextPr} oTextPr - The properties that will be set to the content of the content control.
 */
ApiBlockLvlSdt.prototype.SetTextPr = function(oTextPr){};

/**
 * Returns a collection of drawing objects in the current content control.
 * @memberof ApiBlockLvlSdt
 * @typeofeditors ["CDE"]
 * @returns {ApiDrawing[]}  
 */
ApiBlockLvlSdt.prototype.GetAllDrawingObjects = function(){ return [new ApiDrawing()]; };

/**
 * Returns a content control that contains the current content control.
 * @memberof ApiBlockLvlSdt
 * @typeofeditors ["CDE"]
 * @returns {ApiBlockLvlSdt | null} - returns null if parent content control doesn't exist.  
 */
ApiBlockLvlSdt.prototype.GetParentContentControl = function(){ return new ApiBlockLvlSdt(); };

/**
 * Returns a table that contains the current content control.
 * @memberof ApiBlockLvlSdt
 * @typeofeditors ["CDE"]
 * @returns {ApiTable | null} - returns null is parent table does'n exist.  
 */
ApiBlockLvlSdt.prototype.GetParentTable = function(){ return new ApiTable(); };

/**
 * Returns a table cell that contains the current content control.
 * @memberof ApiBlockLvlSdt
 * @typeofeditors ["CDE"]
 * @returns {ApiTableCell | null} - returns null if parent cell doesn't exist.  
 */
ApiBlockLvlSdt.prototype.GetParentTableCell = function(){ return new ApiTableCell(); };

/**
 * Pushes a paragraph or a table or a block content control to actually add it to the current container.
 * @memberof ApiBlockLvlSdt
 * @typeofeditors ["CDE"]
 * @param {DocumentElement} oElement - The type of the element which will be pushed to the current container.
 * @returns {boolean} - returns false if oElement unsupported.
 */
ApiBlockLvlSdt.prototype.Push = function(oElement){ return true; };

/**
 * Adds a paragraph or a table or a block content control to the current container.
 * @memberof ApiBlockLvlSdt
 * @typeofeditors ["CDE"]
 * @param {DocumentElement} oElement - The type of the element which will be added to the current container.
 * @param {Number} nPos - The specified position.
 * @returns {boolean} - returns false if oElement unsupported.
 */
ApiBlockLvlSdt.prototype.AddElement = function(oElement, nPos){ return true; };

/**
 * Adds a text to the current content control.
 * @memberof ApiBlockLvlSdt
 * @typeofeditors ["CDE"]
 * @param {String} sText - The text which will be added to the content control.
 * @returns {boolean} - returns false if param is invalid.
 */
ApiBlockLvlSdt.prototype.AddText = function(sText){ return true; };

/**
 * Returns a Range object that represents the part of the document contained in the specified content control.
 * @memberof ApiBlockLvlSdt
 * @typeofeditors ["CDE"]
 * @param {Number} Start - Start character in the current element.
 * @param {Number} End - End character in the current element.
 * @returns {ApiRange} 
 * */
ApiBlockLvlSdt.prototype.GetRange = function(Start, End){ return new ApiRange(); };

/**
 * Searches for a scope of a content control object. The search results are a collection of ApiRange objects.
 * @memberof ApiBlockLvlSdt
 * @typeofeditors ["CDE"]
 * @param {string} sText - Search string.
 * @param {boolean} isMatchCase - Case sensitive or not.
 * @returns {ApiRange[]}  
 */
ApiBlockLvlSdt.prototype.Search = function(sText, isMatchCase){ return [new ApiRange()]; };

/**
 * Selects the current content control.
 * @memberof ApiBlockLvlSdt
 * @typeofeditors ["CDE"]
 */
ApiBlockLvlSdt.prototype.Select = function(){};

/**
 * Returns the placeholder text from the current content control.
 * @memberof ApiBlockLvlSdt
 * @typeofeditors ["CDE"]
 * @returns {string}
 */
ApiBlockLvlSdt.prototype.GetPlaceholderText = function(){ return ""; };

/**
 * Sets the placeholder text to the current content control.
 * @memberof ApiBlockLvlSdt
 * @param {string} sText - The text that will be set to the current content control.
 * @typeofeditors ["CDE"]
 * @returns {boolean}
 */
ApiBlockLvlSdt.prototype.SetPlaceholderText = function(sText){ return true; };

/**
 * Returns the content control position within its parent element.
 * @memberof ApiBlockLvlSdt
 * @typeofeditors ["CDE"]
 * @returns {Number} - returns -1 if the content control parent doesn't exist. 
 */
ApiBlockLvlSdt.prototype.GetPosInParent = function(){ return 0; };

/**
 * Replaces the current content control with a new element.
 * @memberof ApiBlockLvlSdt
 * @typeofeditors ["CDE"]
 * @param {DocumentElement} oElement - The element to replace the current content control with.
 * @returns {boolean}
 */
ApiBlockLvlSdt.prototype.ReplaceByElement = function(oElement){ return true; };

/**
 * Adds a comment to the current block content control.
 * <note>Please note that the current block content control must be in the document.</note>
 * @memberof ApiBlockLvlSdt
 * @typeofeditors ["CDE"]
 * @param {string} sText - The comment text (required).
 * @param {string} sAuthor - The author's name (optional).
 * @param {string} sUserId - The user ID of the comment author (optional).
 * @returns {ApiComment} - Returns null if the comment was not added.
 */
ApiBlockLvlSdt.prototype.AddComment = function(sText, sAuthor, sUserId){ return new ApiComment(); };

/**
 * Adds a caption paragraph after (or before) the current content control.
 * <note>Please note that the current content control must be in the document (not in the footer/header).
 * And if the current content control is placed in a shape, then a caption is added after (or before) the parent shape.</note>
 * @memberof ApiBlockLvlSdt
 * @typeofeditors ["CDE"]
 * @param {string} sAdditional - The additional text.
 * @param {CaptionLabel | String} [sLabel="Table"] - The caption label.
 * @param {boolean} [bExludeLabel=false] - Specifies whether to exclude the label from the caption.
 * @param {CaptionNumberingFormat} [sNumberingFormat="Arabic"] - The possible caption numbering format.
 * @param {boolean} [bBefore=false] - Specifies whether to insert the caption before the current content control (true) or after (false) (after/before the shape if it is placed in the shape).
 * @param {Number} [nHeadingLvl=undefined] - The heading level (used if you want to specify the chapter number).
 * <note>If you want to specify "Heading 1", then nHeadingLvl === 0 and etc.</note>
 * @param {CaptionSep} [sCaptionSep="hyphen"] - The caption separator (used if you want to specify the chapter number).
 * @returns {boolean}
 */
ApiBlockLvlSdt.prototype.AddCaption = function(sAdditional, sLabel, bExludeLabel, sNumberingFormat, bBefore, nHeadingLvl, sCaptionSep){ return true; };

/**
 * Returns a list of values of the combo box / dropdown list content control.
 * @memberof ApiBlockLvlSdt
 * @typeofeditors ["CDE"]
 * @returns {ApiContentControlList}
 */
ApiBlockLvlSdt.prototype.GetDropdownList = function(){ return new ApiContentControlList(); };

/**
 * Place cursor before/after the current content control
 * @param {boolean} [isAfter=true]
 * @memberof ApiBlockLvlSdt
 * @typeofeditors ["CDE"]
 */
ApiBlockLvlSdt.prototype.MoveCursorOutside = function(isAfter){};

/**
 * Returns a type of the ApiFormBase class.
 * @memberof ApiFormBase
 * @typeofeditors ["CDE", "CFE"]
 * @returns {"form"}
 */
ApiFormBase.prototype.GetClassType = function(){ return ""; };

/**
 * Returns a type of the current form.
 * @memberof ApiFormBase
 * @typeofeditors ["CDE", "CFE"]
 * @returns {FormType}
 */
ApiFormBase.prototype.GetFormType = function(){ return new FormType(); };

/**
 * Returns the current form key.
 * @memberof ApiFormBase
 * @typeofeditors ["CDE", "CFE"]
 * @returns {string}
 */
ApiFormBase.prototype.GetFormKey = function(){ return ""; };

/**
 * Sets a key to the current form.
 * @memberof ApiFormBase
 * @typeofeditors ["CDE", "CFE"]
 * @param {string} sKey - Form key.
 * @returns {boolean}
 */
ApiFormBase.prototype.SetFormKey = function(sKey){ return true; };

/**
 * Returns the tip text of the current form.
 * @memberof ApiFormBase
 * @typeofeditors ["CDE", "CFE"]
 * @returns {string}
 */
ApiFormBase.prototype.GetTipText = function(){ return ""; };

/**
 * Sets the tip text to the current form.
 * @memberof ApiFormBase
 * @typeofeditors ["CDE", "CFE"]
 * @param {string} sText - Tip text.
 * @returns {boolean}
 */
ApiFormBase.prototype.SetTipText = function(sText){ return true; };

/**
 * Checks if the current form is required.
 * @memberof ApiFormBase
 * @typeofeditors ["CDE", "CFE"]
 * @returns {boolean}
 */
ApiFormBase.prototype.IsRequired = function(){ return true; };

/**
 * Specifies if the current form should be required.
 * @memberof ApiFormBase
 * @typeofeditors ["CDE", "CFE"]
 * @param {boolean} bRequired - Defines if the current form is required (true) or not (false).
 * @returns {boolean}
 */
ApiFormBase.prototype.SetRequired = function(bRequired){ return true; };

/**
 * Checks if the current form is fixed size.
 * @memberof ApiFormBase
 * @typeofeditors ["CDE", "CFE"]
 * @returns {boolean}
 */
ApiFormBase.prototype.IsFixed = function(){ return true; };

/**
 * Converts the current form to a fixed size form.
 * @memberof ApiFormBase
 * @param {twips} nWidth - The wrapper shape width measured in twentieths of a point (1/1440 of an inch).
 * @param {twips} nHeight - The wrapper shape height measured in twentieths of a point (1/1440 of an inch).
 * @typeofeditors ["CDE", "CFE"]
 * @returns {boolean}
 */
ApiFormBase.prototype.ToFixed = function(nWidth, nHeight){ return true; };

/**
 * Converts the current form to an inline form.
 * *Picture form can't be converted to an inline form, it's always a fixed size object.*
 * @memberof ApiFormBase
 * @typeofeditors ["CDE", "CFE"]
 * @returns {boolean}
 */
ApiFormBase.prototype.ToInline = function(){ return true; };

/**
 * Sets the border color to the current form.
 * @memberof ApiFormBase
 * @param {byte} r - Red color component value.
 * @param {byte} g - Green color component value.
 * @param {byte} b - Blue color component value.
 * @param {boolean} bNone - Defines that border color will not be set.
 * @typeofeditors ["CDE", "CFE"]
 * @returns {boolean}
 */
ApiFormBase.prototype.SetBorderColor = function(r, g, b, bNone){ return true; };

/**
 * Sets the background color to the current form.
 * @memberof ApiFormBase
 * @param {byte} r - Red color component value.
 * @param {byte} g - Green color component value.
 * @param {byte} b - Blue color component value.
 * @param {boolean} bNone - Defines that background color will not be set.
 * @typeofeditors ["CDE", "CFE"]
 * @returns {boolean}
 */
ApiFormBase.prototype.SetBackgroundColor = function(r, g, b, bNone){ return true; };

/**
 * Returns the text from the current form.
 * *Returns the value as a string if possible for the given form type*
 * @memberof ApiFormBase
 * @typeofeditors ["CDE", "CFE"]
 * @returns {string}
 */
ApiFormBase.prototype.GetText = function(){ return ""; };

/**
 * Clears the current form.
 * @memberof ApiFormBase
 * @typeofeditors ["CDE", "CFE"]
 */
ApiFormBase.prototype.Clear = function(){};

/**
 * Returns a shape in which the form is placed to control the position and size of the fixed size form frame.
 * The null value will be returned for the inline forms.
 * @memberof ApiFormBase
 * @typeofeditors ["CDE", "CFE"]
 * @returns {ApiShape} - returns the shape in which the form is placed.
 */
ApiFormBase.prototype.GetWrapperShape = function(){ return new ApiShape(); };

/**
 * Sets the placeholder text to the current form.
 * *Can't be set to checkbox or radio button.*
 * @memberof ApiFormBase
 * @param {string} sText - The text that will be set to the current form.
 * @typeofeditors ["CDE", "CFE"]
 * @returns {boolean}
 */
ApiFormBase.prototype.SetPlaceholderText = function(sText){ return true; };

/**
 * Sets the text properties to the current form.
 * *Used if possible for this type of form*
 * @memberof ApiFormBase
 * @typeofeditors ["CDE", "CFE"]
 * @param {ApiTextPr} oTextPr - The text properties that will be set to the current form.
 * @returns {boolean}  
 */
ApiFormBase.prototype.SetTextPr = function(oTextPr){ return true; };

/**
 * Returns the text properties from the current form.
 * *Used if possible for this type of form*
 * @memberof ApiFormBase
 * @typeofeditors ["CDE", "CFE"]
 * @returns {ApiTextPr}  
 */
ApiFormBase.prototype.GetTextPr = function(){ return new ApiTextPr(); };

/**
 * Place cursor before/after the current form.
 * @param {boolean} [isAfter=true]
 * @memberof ApiFormBase
 * @typeofeditors ["CDE"]
 */
ApiFormBase.prototype.MoveCursorOutside = function(isAfter){};

/**
 * Copies the current form (copies with the shape if it exists).
 * @memberof ApiFormBase
 * @typeofeditors ["CDE", "CFE"]
 * @returns {ApiForm}
 */
ApiFormBase.prototype.Copy = function(){ return new ApiForm(); };

/**
 * Checks if the text field content is autofit, i.e. whether the font size adjusts to the size of the fixed size form.
 * @memberof ApiTextForm
 * @typeofeditors ["CDE", "CFE"]
 * @returns {boolean}
 */
ApiTextForm.prototype.IsAutoFit = function(){ return true; };

/**
 * Specifies if the text field content should be autofit, i.e. whether the font size adjusts to the size of the fixed size form.
 * @memberof ApiTextForm
 * @param {boolean} bAutoFit - Defines if the text field content is autofit (true) or not (false).
 * @typeofeditors ["CDE", "CFE"]
 * @returns {boolean}
 */
ApiTextForm.prototype.SetAutoFit = function(bAutoFit){ return true; };

/**
 * Checks if the current text field is multiline.
 * @memberof ApiTextForm
 * @typeofeditors ["CDE", "CFE"]
 * @returns {boolean}
 */
ApiTextForm.prototype.IsMultiline = function(){ return true; };

/**
 * Specifies if the current text field should be miltiline.
 * @memberof ApiTextForm
 * @param {boolean} bMultiline - Defines if the current text field is multiline (true) or not (false).
 * @typeofeditors ["CDE", "CFE"]
 * @returns {boolean} - return false, if the text field is not fixed size.
 */
ApiTextForm.prototype.SetMultiline = function(bMultiline){ return true; };

/**
 * Returns a limit of the text field characters.
 * @memberof ApiTextForm
 * @typeofeditors ["CDE", "CFE"]
 * @returns {number} - if this method returns -1 -> the form has no limit for characters
 */
ApiTextForm.prototype.GetCharactersLimit = function(){ return 0; };

/**
 * Sets a limit to the text field characters.
 * @memberof ApiTextForm
 * @param {number} nChars - The maximum number of characters in the text field. If this parameter is equal to -1, no limit will be set.
 * A limit is required to be set if a comb of characters is applied.
 * Maximum value for this parameter is 1000000.
 * @typeofeditors ["CDE", "CFE"]
 * @returns {boolean}
 */
ApiTextForm.prototype.SetCharactersLimit = function(nChars){ return true; };

/**
 * Checks if the text field is a comb of characters with the same cell width.
 * @memberof ApiTextForm
 * @typeofeditors ["CDE", "CFE"]
 * @returns {boolean}
 */
ApiTextForm.prototype.IsComb = function(){ return true; };

/**
 * Specifies if the text field should be a comb of characters with the same cell width.
 * The maximum number of characters must be set to a positive value.
 * @memberof ApiTextForm
 * @param {boolean} bComb - Defines if the text field is a comb of characters (true) or not (false).
 * @typeofeditors ["CDE", "CFE"]
 * @returns {boolean}
 */
ApiTextForm.prototype.SetComb = function(bComb){ return true; };

/**
 * Sets the cell width to the applied comb of characters.
 * @memberof ApiTextForm
 * @param {mm} [nCellWidth=0] - The cell width measured in millimeters.
 * If this parameter is not specified or equal to 0 or less, then the width will be set automatically. Must be >= 1 and <= 558.8.
 * @typeofeditors ["CDE", "CFE"]
 * @returns {boolean}
 */
ApiTextForm.prototype.SetCellWidth = function(nCellWidth){ return true; };

/**
 * Sets the text to the current text field.
 * @memberof ApiTextForm
 * @param {string} sText - The text that will be set to the current text field.
 * @typeofeditors ["CDE", "CFE"]
 * @returns {boolean}
 */
ApiTextForm.prototype.SetText = function(sText){ return true; };

/**
 * Returns the current scaling condition of the picture form.
 * @memberof ApiPictureForm
 * @typeofeditors ["CDE", "CFE"]
 * @returns {ScaleFlag}
 */
ApiPictureForm.prototype.GetScaleFlag = function(){ return new ScaleFlag(); };

/**
 * Sets the scaling condition to the current picture form.
 * @memberof ApiPictureForm
 * @param {ScaleFlag} sScaleFlag - Picture scaling condition: "always", "never", "tooBig" or "tooSmall".
 * @typeofeditors ["CDE", "CFE"]
 * @returns {boolean}
 */
ApiPictureForm.prototype.SetScaleFlag = function(sScaleFlag){ return true; };

/**
 * Locks the aspect ratio of the current picture form.
 * @memberof ApiPictureForm
 * @param {boolean} [isLock=true] - Specifies if the aspect ratio of the current picture form will be locked (true) or not (false).
 * @typeofeditors ["CDE", "CFE"]
 * @returns {boolean}
 */
ApiPictureForm.prototype.SetLockAspectRatio = function(isLock){ return true; };

/**
 * Checks if the aspect ratio of the current picture form is locked or not.
 * @memberof ApiPictureForm
 * @typeofeditors ["CDE", "CFE"]
 * @returns {boolean}
 */
ApiPictureForm.prototype.IsLockAspectRatio = function(){ return true; };

/**
 * Sets the picture position inside the current form:
 * * <b>0</b> - the picture is placed on the left/top;
 * * <b>50</b> - the picture is placed in the center;
 * * <b>100</b> - the picture is placed on the right/bottom.
 * @memberof ApiPictureForm
 * @param {percentage} nShiftX - Horizontal position measured in percent.
 * @param {percentage} nShiftY - Vertical position measured in percent.
 * @typeofeditors ["CDE", "CFE"]
 * @returns {boolean}
 */
ApiPictureForm.prototype.SetPicturePosition = function(nShiftX, nShiftY){ return true; };

/**
 * Returns the picture position inside the current form.
 * @memberof ApiPictureForm
 * @typeofeditors ["CDE", "CFE"]
 * @returns {Array.<percentage>} Array of two numbers [shiftX, shiftY]
 */
ApiPictureForm.prototype.GetPicturePosition = function(){ return []; };

/**
 * Respects the form border width when scaling the image.
 * @memberof ApiPictureForm
 * @param {boolean} [isRespect=true] - Specifies if the form border width will be respected (true) or not (false).
 * @typeofeditors ["CDE", "CFE"]
 * @returns {boolean}
 */
ApiPictureForm.prototype.SetRespectBorders = function(isRespect){ return true; };

/**
 * Checks if the form border width is respected or not.
 * @memberof ApiPictureForm
 * @typeofeditors ["CDE", "CFE"]
 * @returns {boolean}
 */
ApiPictureForm.prototype.IsRespectBorders = function(){ return true; };

/**
 * Returns an image in the base64 format from the current picture form.
 * @memberof ApiPictureForm
 * @typeofeditors ["CDE", "CFE"]
 * @returns {base64img}
 */
ApiPictureForm.prototype.GetImage = function(){ return base64img; };

/**
 * Sets an image to the current picture form.
 * @memberof ApiPictureForm
 * @param {string} sImageSrc - The image source where the image to be inserted should be taken from (currently, only internet URL or base64 encoded images are supported).
 * @param {EMU} nWidth - The image width in English measure units.
 * @param {EMU} nHeight - The image height in English measure units.
 * @typeofeditors ["CDE", "CFE"]
 * @returns {boolean}
 */
ApiPictureForm.prototype.SetImage = function(sImageSrc, nWidth, nHeight){ return true; };

/**
 * Returns the list values from the current combo box.
 * @memberof ApiComboBoxForm
 * @typeofeditors ["CDE", "CFE"]
 * @returns {string[]}
 */
ApiComboBoxForm.prototype.GetListValues = function(){ return [""]; };

/**
 * Sets the list values to the current combo box.
 * @memberof ApiComboBoxForm
 * @param {string[]} aListString - The combo box list values.
 * @typeofeditors ["CDE", "CFE"]
 * @returns {boolean}
 */
ApiComboBoxForm.prototype.SetListValues = function(aListString){ return true; };

/**
 * Selects the specified value from the combo box list values. 
 * @memberof ApiComboBoxForm
 * @param {string} sValue - The combo box list value that will be selected.
 * @typeofeditors ["CDE", "CFE"]
 * @returns {boolean}
 */
ApiComboBoxForm.prototype.SelectListValue = function(sValue){ return true; };

/**
 * Sets the text to the current combo box.
 * *Available only for editable combo box forms.*
 * @memberof ApiComboBoxForm
 * @param {string} sText - The combo box text.
 * @typeofeditors ["CDE", "CFE"]
 * @returns {boolean}
 */
ApiComboBoxForm.prototype.SetText = function(sText){ return true; };

/**
 * Checks if the combo box text can be edited. If it is not editable, then this form is a dropdown list.
 * @memberof ApiComboBoxForm
 * @typeofeditors ["CDE", "CFE"]
 * @returns {boolean}
 */
ApiComboBoxForm.prototype.IsEditable = function(){ return true; };

/**
 * Checks the current checkbox.
 * @memberof ApiCheckBoxForm
 * @param {boolean} isChecked - Specifies if the current checkbox will be checked (true) or not (false).
 * @typeofeditors ["CDE", "CFE"]
 * @returns {boolean}
 */
ApiCheckBoxForm.prototype.SetChecked = function(isChecked){ return true; };

/**
 * Returns the state of the current checkbox (checked or not).
 * @memberof ApiCheckBoxForm
 * @typeofeditors ["CDE", "CFE"]
 * @returns {boolean}
 */
ApiCheckBoxForm.prototype.IsChecked = function(){ return true; };

/**
 * Checks if the current checkbox is a radio button. 
 * @memberof ApiCheckBoxForm
 * @typeofeditors ["CDE", "CFE"]
 * @returns {boolean}
 */
ApiCheckBoxForm.prototype.IsRadioButton = function(){ return true; };

/**
 * Returns the radio group key if the current checkbox is a radio button.
 * @memberof ApiCheckBoxForm
 * @typeofeditors ["CDE", "CFE"]
 * @returns {string}
 */
ApiCheckBoxForm.prototype.GetRadioGroup = function(){ return ""; };

/**
 * Sets the radio group key to the current radio button.
 * @memberof ApiCheckBoxForm
 * @param {string} sKey - Radio group key.
 * @typeofeditors ["CDE", "CFE"]
 */
ApiCheckBoxForm.prototype.SetRadioGroup = function(sKey){};

/**
 * Gets the date format of the current form.
 * @memberof ApiDateForm
 * @typeofeditors ["CDE", "CFE"]
 * @returns {string}
 * @since 8.1.0
 */
ApiDateForm.prototype.GetFormat = function() { return ""; };

/**
 * Sets the date format to the current form.
 * @memberof ApiDateForm
 * @typeofeditors ["CDE", "CFE"]
 * @param {string} sFormat - The date format. For example, mm.dd.yyyy
 * @returns {boolean}
 * @since 8.1.0
 */
ApiDateForm.prototype.SetFormat = function(sFormat){ return true; };

/**
 * Gets the used date language of the current form.
 * @memberof ApiDateForm
 * @typeofeditors ["CDE", "CFE"]
 * @returns {string}
 * @since 8.1.0
 */
ApiDateForm.prototype.GetLanguage = function() { return ""; };

/**
 * Sets the date language to the current form.
 * @memberof ApiDateForm
 * @typeofeditors ["CDE", "CFE"]
 * @param {string} sLangId - The date language. The possible value for this parameter is a language identifier as defined in
 * RFC 4646/BCP 47. Example: "en-CA".
 * @returns {boolean}
 * @since 8.1.0
 */
ApiDateForm.prototype.SetLanguage = function(sLangId){ return true; };

/**
 * Returns the timestamp of the current form.
 * @memberof ApiDateForm
 * @typeofeditors ["CDE", "CFE"]
 * @returns {number}
 * @since 8.1.0
 */
ApiDateForm.prototype.GetTime = function(){ return 0; };

/**
 * Sets the timestamp to the current form.
 * @memberof ApiDateForm
 * @typeofeditors ["CDE", "CFE"]
 * @param {number} nTimeStamp The timestamp that will be set to the current date form.
 * @returns {boolean}
 * @since 8.1.0
 */
ApiDateForm.prototype.SetTime = function(nTimeStamp){ return true; };

/**
 * Converts the ApiBlockLvlSdt object into the JSON object.
 * @memberof ApiBlockLvlSdt
 * @typeofeditors ["CDE"]
 * @param {boolean} bWriteNumberings - Specifies if the used numberings will be written to the JSON object or not.
 * @param {boolean} bWriteStyles - Specifies if the used styles will be written to the JSON object or not.
 * @returns {JSON}
 */
ApiBlockLvlSdt.prototype.ToJSON = function(bWriteNumberings, bWriteStyles){ return new JSON(); };

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
 * Converts a document to Markdown or HTML text.
 * @memberof ApiInterface
 * @typeofeditors ["CDE"]
 * @param {"markdown" | "html"} [sConvertType="markdown"] - Conversion type.
 * @param {boolean} [bHtmlHeadings=false] - Defines if the HTML headings and IDs will be generated when the Markdown renderer of your target platform does not handle Markdown-style IDs.
 * @param {boolean} [bBase64img=false] - Defines if the images will be created in the base64 format.
 * @param {boolean} [bDemoteHeadings=false] - Defines if all heading levels in your document will be demoted to conform with the following standard: single H1 as title, H2 as top-level heading in the text body.
 * @param {boolean} [bRenderHTMLTags=false] - Defines if HTML tags will be preserved in your Markdown. If you just want to use an occasional HTML tag, you can avoid using the opening angle bracket
 * in the following way: \<tag&gt;text\</tag&gt;. By default, the opening angle brackets will be replaced with the special characters.
 * @returns {string}
 */
ApiInterface.prototype.ConvertDocument = function(sConvertType, bHtmlHeadings, bBase64img, bDemoteHeadings, bRenderHTMLTags){ return ""; };

/**
 * Creates the empty text properties.
 * @memberof ApiInterface
 * @typeofeditors ["CDE", "CSE", "CPE"]
 * @returns {ApiTextPr}
 */
ApiInterface.prototype.CreateTextPr = function () { return new ApiTextPr(); };

/**
 * Creates a Text Art object with the parameters specified.
 * @memberof ApiInterface
 * @typeofeditors ["CDE"]
 * @param {ApiTextPr} [oTextPr=Api.CreateTextPr()] - The text properties.
 * @param {string} [sText="Your text here"] - The text for the Text Art object.
 * @param {TextTransform} [sTransform="textNoShape"] - Text transform type.
 * @param {ApiFill}   [oFill=Api.CreateNoFill()] - The color or pattern used to fill the Text Art object.
 * @param {ApiStroke} [oStroke=Api.CreateStroke(0, Api.CreateNoFill())] - The stroke used to create the Text Art object shadow.
 * @param {number} [nRotAngle=0] - Rotation angle.
 * @param {EMU} [nWidth=1828800] - The Text Art width measured in English measure units.
 * @param {EMU} [nHeight=1828800] - The Text Art heigth measured in English measure units.
 * @returns {ApiDrawing}
 */
ApiInterface.prototype.CreateWordArt = function(oTextPr, sText, sTransform, oFill, oStroke, nRotAngle, nWidth, nHeight) { return new ApiDrawing(); };

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
 * Returns the current comment ID. If the comment doesn't have an ID, null is returned.
 * @memberof ApiComment
 * @typeofeditors ["CDE"]
 * @returns {string}
 */
ApiComment.prototype.GetId = function (){ return ""; };

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
 * Returns the user ID of the comment author.
 * @memberof ApiComment
 * @typeofeditors ["CDE"]
 * @returns {string}
 */
ApiComment.prototype.GetUserId = function () { return ""; };

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
 * Returns the specified comment reply.
 * @memberof ApiComment
 * @typeofeditors ["CDE"]
 * @param {Number} [nIndex = 0] - The comment reply index.
 * @returns {ApiCommentReply}
 */
ApiComment.prototype.GetReply = function (nIndex) { return new ApiCommentReply(); };

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
 * Returns the user ID of the comment reply author.
 * @memberof ApiCommentReply
 * @typeofeditors ["CDE"]
 * @returns {string}
 */
ApiCommentReply.prototype.GetUserId = function () { return ""; };

/**
 * Sets the user ID to the comment reply author.
 * @memberof ApiCommentReply
 * @typeofeditors ["CDE", "CPE"]
 * @param {string} sUserId - The user ID of the comment reply author.
 * @returns {ApiCommentReply} - this
 */
ApiCommentReply.prototype.SetUserId = function (sUserId) { return new ApiCommentReply(); };

/**
 * Returns a type of the ApiWatermarkSettings class.
 * @memberof ApiWatermarkSettings
 * @typeofeditors ["CDE"]
 * @returns {"watermarkSettings"}
 */
ApiWatermarkSettings.prototype.GetClassType = function(){ return ""; };

/**
 * Sets the type of the watermark in the document.
 * @memberof ApiWatermarkSettings
 * @typeofeditors ["CDE"]
 * @param {WatermarkType} sType - The watermark type.
 */
ApiWatermarkSettings.prototype.SetType = function (sType){};

/**
 * Returns the type of the watermark in the document.
 * @memberof ApiWatermarkSettings
 * @typeofeditors ["CDE"]
 * @returns {WatermarkType}
 */
ApiWatermarkSettings.prototype.GetType = function (){ return new WatermarkType(); };

/**
 * Sets the text of the watermark in the document.
 * @memberof ApiWatermarkSettings
 * @typeofeditors ["CDE"]
 * @param {string} sText - The watermark text.
 */
ApiWatermarkSettings.prototype.SetText = function (sText){};

/**
 * Returns the text of the watermark in the document.
 * @memberof ApiWatermarkSettings
 * @typeofeditors ["CDE"]
 * @returns {string | null}
 */
ApiWatermarkSettings.prototype.GetText = function (){ return ""; };

/**
 * Sets the text properties of the watermark in the document.
 * @memberof ApiWatermarkSettings
 * @typeofeditors ["CDE"]
 * @param {ApiTextPr} oTextPr - The watermark text properties.
 */
ApiWatermarkSettings.prototype.SetTextPr = function (oTextPr){};

/**
 * Returns the text properties of the watermark in the document.
 * @memberof ApiWatermarkSettings
 * @typeofeditors ["CDE"]
 * @returns {ApiTextPr}
 */
ApiWatermarkSettings.prototype.GetTextPr = function (){ return new ApiTextPr(); };

/**
 * Sets the opacity of the watermark in the document.
 * @memberof ApiWatermarkSettings
 * @typeofeditors ["CDE"]
 * @param {number} nOpacity - The watermark opacity. This value must be from 0 to 255.
 */
ApiWatermarkSettings.prototype.SetOpacity = function (nOpacity){};

/**
 * Returns the opacity of the watermark in the document.
 * @memberof ApiWatermarkSettings
 * @typeofeditors ["CDE"]
 * @returns {number} - The watermark opacity. This value must be from 0 to 255.
 */
ApiWatermarkSettings.prototype.GetOpacity = function (){ return 0; };

/**
 * Sets the direction of the watermark in the document.
 * @memberof ApiWatermarkSettings
 * @typeofeditors ["CDE"]
 * @param {WatermarkDirection} sDirection - The watermark direction.
 */
ApiWatermarkSettings.prototype.SetDirection = function (sDirection){};

/**
 * Returns the direction of the watermark in the document.
 * @memberof ApiWatermarkSettings
 * @typeofeditors ["CDE"]
 * @returns {WatermarkDirection} - The watermark direction.
 */
ApiWatermarkSettings.prototype.GetDirection = function (){ return new WatermarkDirection(); };

/**
 * Sets the image URL of the watermark in the document.
 * @memberof ApiWatermarkSettings
 * @typeofeditors ["CDE"]
 * @param {string} sURL - The watermark image URL.
 */
ApiWatermarkSettings.prototype.SetImageURL = function (sURL){};

/**
 * Returns the image URL of the watermark in the document.
 * @memberof ApiWatermarkSettings
 * @typeofeditors ["CDE"]
 * @returns {string | null} - The watermark image URL.
 */
ApiWatermarkSettings.prototype.GetImageURL = function (){ return ""; };

/**
 * Returns the width of the watermark image in the document.
 * @memberof ApiWatermarkSettings
 * @typeofeditors ["CDE"]
 * @returns {EMU | null} - The watermark image width in EMU.
 */
ApiWatermarkSettings.prototype.GetImageWidth = function (){ return new EMU(); };

/**
 * Returns the height of the watermark image in the document.
 * @memberof ApiWatermarkSettings
 * @typeofeditors ["CDE"]
 * @returns {EMU | null} - The watermark image height in EMU.
 */
ApiWatermarkSettings.prototype.GetImageHeight = function (){ return new EMU(); };

/**
 * Sets the size (width and height) of the watermark image in the document.
 * @memberof ApiWatermarkSettings
 * @typeofeditors ["CDE"]
 * @param {EMU} nWidth - The watermark image width.
 * @param {EMU} nHeight - The watermark image height.
 */
ApiWatermarkSettings.prototype.SetImageSize = function (nWidth, nHeight){};

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


