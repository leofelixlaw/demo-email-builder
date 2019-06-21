
Supported components:
`mj-container`
`mj-section`
`mj-column`
`mj-text`
`mj-image`
`mj-button`
`mj-social`
`mj-divider`
`mj-spacer`


## Options

|Option|Description|Default|
|-|-|-
|`categoryLabel`|Category for blocks|`''`|
|`importPlaceholder`|Import placeholder MJML|`''`|
|`modalTitleImport`|Title for the import modal|`Import MJML`|
|`modalBtnImport`|Test for the import button|`Import`|
|`modalLabelImport`|Description for the import modal|`''`|
|`modalTitleExport`|Title for the export modal|`Export MJML`|
|`modalLabelExport`|Description for the export modal|`''`|
|`overwriteExport`|Overwrite default export command|`true`|
|`preMjml`|String before the MJML in export code|`''`|
|`postMjml`|String after the MJML in export code|`''`|
|`resetBlocks`|Clean all previous blocks if true|`true`|
|`resetDevices`|Clean all previous devices and set a new one for mobile|`true`|,
|`resetStyleManager`|Reset the Style Manager and add new properties for MJML|`true`|,




## Usage

```html
<link href="path/to/grapes.min.css" rel="stylesheet"/>
<script src="path/to/grapes.min.js"></script>
<script src="path/to/demo-email-builder.min.js"></script>

<div id="gjs">
  <!-- Your MJML body here -->
  <mj-container>
        <mj-section>
          <mj-column>
            <mj-text>My Company</mj-text>
          </mj-column>
        </mj-section>
  <mj-container>
</div>

<script type="text/javascript">
  var editor = grapesjs.init({
      fromElement: 1,
      container : '#gjs',
      plugins: ['demo-email-builder']
  });
</script>
```


