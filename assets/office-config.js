(function (root, factory) {
    if (typeof module === 'object' && module.exports) {
        module.exports = factory()
        return
    }
    root.OfficeConfig = factory()
}(typeof globalThis !== 'undefined' ? globalThis : this, function () {
    'use strict'

    const DEFAULT_LANG = 'zh-CN'
    const DEFAULT_MODE = 'edit'
    const LOCAL_USER_ID = 'local-user'
    const LOCAL_USER_NAME = '本地用户'
    const EMPTY_UPDATED_AT = 0
    const LOCAL_BLOB_URL_PREFIX = 'blob:'

    const CELL_EXTENSIONS = new Set(['xls', 'xlsx', 'xlsm', 'ods', 'csv'])
    const SLIDE_EXTENSIONS = new Set(['ppt', 'pptx', 'odp', 'pps', 'ppsx'])
    const PDF_EXTENSIONS = new Set(['pdf', 'oxps', 'xps', 'djvu'])

    function normalizeExtension(ext) {
        return String(ext || '').toLowerCase()
    }

    function documentTypeOf(ext) {
        const normalized = normalizeExtension(ext)
        if (CELL_EXTENSIONS.has(normalized)) return 'cell'
        if (SLIDE_EXTENSIONS.has(normalized)) return 'slide'
        if (PDF_EXTENSIONS.has(normalized)) return 'pdf'
        return 'word'
    }

    function isLocalBlobUrl(url) {
        return String(url || '').startsWith(LOCAL_BLOB_URL_PREFIX)
    }

    function shouldOpenFromBinary(documentType, blobUrl) {
        return documentType === 'pdf' && isLocalBlobUrl(blobUrl)
    }

    function requireRecord(options) {
        if (!options || !options.record) {
            throw new Error('record is required')
        }
        if (!options.record.id) {
            throw new Error('record.id is required')
        }
        if (!options.record.name) {
            throw new Error('record.name is required')
        }
        if (!options.record.fileType) {
            throw new Error('record.fileType is required')
        }
        return options.record
    }

    function documentKeyOf(record) {
        return `${record.id}-${record.updatedAt || EMPTY_UPDATED_AT}`
    }

    function documentPermissions() {
        return { edit: true, download: true, print: true }
    }

    function localUser() {
        return { id: LOCAL_USER_ID, name: LOCAL_USER_NAME }
    }

    function buildDocumentConfig(record, blobUrl) {
        const documentType = documentTypeOf(record.fileType)
        const openFromBinary = shouldOpenFromBinary(documentType, blobUrl)
        const config = {
            url: openFromBinary ? undefined : blobUrl || undefined,
            title: record.name,
            fileType: normalizeExtension(record.fileType),
            key: documentKeyOf(record),
            permissions: documentPermissions()
        }

        if (documentType === 'pdf') {
            const pdfConfig = Object.assign({}, config, { isForm: false })
            if (openFromBinary) pdfConfig.localOpenFromBinary = true
            return pdfConfig
        }
        return config
    }

    function buildOnlyofficeConfig(options) {
        const record = requireRecord(options)
        const documentType = documentTypeOf(record.fileType)
        const config = {
            document: buildDocumentConfig(record, options.blobUrl),
            documentType: documentType,
            editorConfig: { mode: DEFAULT_MODE, lang: DEFAULT_LANG, user: localUser() }
        }
        if (shouldOpenFromBinary(documentType, options.blobUrl)) {
            config.localOpenFromBinary = true
        }
        return config
    }

    return {
        buildOnlyofficeConfig: buildOnlyofficeConfig,
        documentTypeOf: documentTypeOf
    }
}))
