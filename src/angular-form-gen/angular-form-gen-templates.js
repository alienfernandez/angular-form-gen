// ATTENTION!
// DO NOT MODIFY THIS FILE BECAUSE IT WAS GENERATED AUTOMATICALLY
// SO ALL YOUR CHANGES WILL BE LOST THE NEXT TIME THE FILE IS GENERATED
angular.module('fg').run(['$templateCache', function($templateCache){
  $templateCache.put('angular-form-gen/edit/edit.ng.html', '<div class=\"fg-edit row form-group\" ng-form=\"$fg\"><div class=\"col-sm-8\"><div fg-form=\"\" fg-edit-canvas=\"\" fg-no-render=\"true\"></div></div><div class=\"col-sm-4\" ng-form=\"$palette\" fg-null-form=\"\"><div fg-form=\"\" fg-edit-palette=\"\" fg-no-render=\"true\"></div></div></div>');
  $templateCache.put('angular-form-gen/validation/summary.ng.html', '<ul class=\"fg-validation-summary help-block unstyled\" ng-if=\"field.state.$invalid && field.state.$dirty\"><li ng-repeat=\"(key, error) in field.state.$error\" ng-if=\"error\" fg-bind-expression=\"messages[key]\"></li></ul>');
  $templateCache.put('angular-form-gen/field-templates/default/checkbox.ng.html', '<div class=\"checkbox\"><label title=\"{{ field.schema.tooltip }}\"><input fg-field-input=\"\" id=\"{{ field.$_id }}\" type=\"checkbox\" tabindex=\"{{ tabIndex }}\" ng-model=\"form.data[field.schema.name]\"> <span ng-if=\"field.schema.nolabel\">{{ field.schema.displayName }}</span></label></div>');
  $templateCache.put('angular-form-gen/field-templates/default/checkboxlist.ng.html', '<div fg-checkboxlist=\"\" fg-field-input=\"\" ng-model=\"form.data[field.schema.name]\" name=\"{{ field.schema.name }}\"><div class=\"checkbox\" ng-repeat=\"option in field.schema.options\"><label title=\"{{ field.schema.tooltip }}\"><input type=\"checkbox\" tabindex=\"{{ tabIndex }}\" value=\"{{ option.value }}\" ng-model=\"form.data[field.schema.name][option.value]\"> <span>{{option.text || option.value}}</span></label></div></div>');
  $templateCache.put('angular-form-gen/field-templates/default/customtable.ng.html', '<div class=\"table-responsive\"><table class=\"table table-bordered\"><tbody ng-if=\"field.schema.validation.rowHeaders\"><tr ng-if=\"field.schema.validation.columnHeaders && field.schema.validation.columnHeaders.length +1> field.schema.validation.columnHeaders.split(\',\').length\"><td ng-if=\"field.schema.validation.rowHeaders && field.schema.validation.rowHeaders.length +1> field.schema.validation.rowHeaders.split(\',\').length\" style=\"width: 20%\"></td><td style=\"text-align: left\" ng-repeat=\"cHeader in field.schema.validation.columnHeaders.split(\',\') track by $index\"><strong>{{cHeader}}</strong></td></tr><tr ng-repeat=\"row in field.schema.validation.rowHeaders.split(\',\') track by $index\" ng-init=\"outerIndex = $index\"><td ng-if=\"field.schema.validation.rowHeaders && field.schema.validation.rowHeaders.length +1> field.schema.validation.rowHeaders.split(\',\').length\"><strong>{{row}}</strong></td><td ng-repeat=\"cellValue in field.schema.validation.columnHeaders.split(\',\') track by s+\'\'+$index\"><textarea rows=\"3\" ng-model=\"form.data[field.schema.name][outerIndex +\'\'+ $index]\"></textarea></td></tr></tbody></table></div>');
  $templateCache.put('angular-form-gen/field-templates/default/date.ng.html', '<div class=\"date-picker input-group\" ng-class=\"{ \'is-opened\': field.$opened == true }\"><span class=\"input-group-addon\" ng-click=\"field.$opened = true\"><i class=\"glyphicon glyphicon-calendar\"></i></span><div class=\"fg-line\" ng-class=\"{ \'fg-toggled\': field.$opened == true }\"><input fg-field-input=\"\" id=\"{{ field.$_id }}\" title=\"{{ field.schema.properties.tooltip }}\" tabindex=\"{{ tabIndex }}\" placeholder=\"{{ field.schema.properties.placeholder }}\" type=\"text\" class=\"form-control\" uib-datepicker-popup=\"dd/MM/yyyy\" close-text=\"Close\" is-open=\"field.$opened\" ng-model=\"field.data.value\" ng-click=\"field.$opened = true\" ng-required=\"field.schema.validation.required\"></div></div>');
  $templateCache.put('angular-form-gen/field-templates/default/datetime.ng.html', '<div class=\"date-picker input-group\" ng-class=\"{ \'is-opened\': field.$opened == true }\"><span class=\"input-group-addon\" ng-click=\"field.$opened = true\"><i class=\"glyphicon glyphicon-calendar\"></i></span><div class=\"fg-line\" ng-class=\"{ \'fg-toggled\': field.$opened == true }\"><input fg-field-input=\"\" id=\"{{ field.$_id }}\" title=\"{{ field.schema.properties.tooltip }}\" tabindex=\"{{ tabIndex }}\" placeholder=\"{{ field.schema.properties.placeholder }}\" type=\"text\" class=\"form-control\" datetime-picker=\"dd/MM/yyyy hh:mm a\" close-text=\"Close\" is-open=\"field.$opened\" ng-model=\"field.data.value\" ng-click=\"field.$opened = true\" ng-required=\"field.schema.validation.required\"></div></div>');
  $templateCache.put('angular-form-gen/field-templates/default/dropdownlist.ng.html', '<div fg-field-input=\"\" fg-dropdown-input=\"field.schema.options\" title=\"{{ field.schema.tooltip }}\" id=\"{{ field.$_id }}\" ng-model=\"form.data[field.schema.name]\" ng-required=\"field.schema.validation.required\" tabindex=\"{{ tabIndex }}\" placeholder=\"{{ field.schema.placeholder }}\" ng-minlength=\"{{ field.schema.validation.minlength }}\" ng-maxlength=\"{{ field.schema.validation.maxlength }}\" ng-pattern=\"{{ field.schema.validation.pattern }}\"></div>');
  $templateCache.put('angular-form-gen/field-templates/default/email.ng.html', '<input class=\"form-control\" fg-field-input=\"\" type=\"email\" id=\"{{ field.$_id }}\" title=\"{{ field.schema.tooltip }}\" tabindex=\"{{ tabIndex }}\" placeholder=\"{{ field.schema.placeholder }}\" ng-model=\"form.data[field.schema.name]\" ng-required=\"field.schema.validation.required\" ng-minlength=\"{{ field.schema.validation.minlength }}\" ng-maxlength=\"{{ field.schema.validation.maxlength }}\" ng-pattern=\"{{ field.schema.validation.pattern }}\">');
  $templateCache.put('angular-form-gen/field-templates/default/if-yes.ng.html', '<div class=\"checkbox\"><label title=\"{{ field.schema.tooltip }}\"><input fg-field-input=\"\" id=\"{{ field.$_id }}\" type=\"checkbox\" tabindex=\"{{ tabIndex }}\" ng-model=\"form.data[field.schema.name]\"> <span ng-if=\"field.schema.nolabel\">{{ field.schema.displayName }}</span></label><div ng-if=\"form.data[field.schema.name]\"><textarea class=\"form-control\" fg-field-input=\"\" fg-placeholder=\"field.schema.placeholder\" ng-model=\"form.data[field.schema.detailsYes]\" title=\"{{ field.schema.tooltip }}\" tabindex=\"{{ tabIndex }}\" ng-required=\"field.schema.validation.required\" ng-minlength=\"{{ field.schema.validation.minlength }}\" ng-maxlength=\"{{ field.schema.validation.maxlength }}\" ng-pattern=\"{{ field.schema.validation.pattern }}\">\n' +
    '        </textarea></div></div>');
  $templateCache.put('angular-form-gen/field-templates/default/label.ng.html', '<label id=\"{{ field.$_id }}\"></label>');
  $templateCache.put('angular-form-gen/field-templates/default/not-in-cache.ng.html', '<div class=\"fg-field-not-in-cache alert alert-error\"><p>No template registered in cache for field type \"{{ field.type }}\".</p></div>');
  $templateCache.put('angular-form-gen/field-templates/default/number.ng.html', '<input class=\"form-control\" fg-field-input=\"\" fg-input-number=\"\" type=\"text\" id=\"{{ field.$_id }}\" title=\"{{ field.schema.tooltip }}\" tabindex=\"{{ tabIndex }}\" placeholder=\"{{ field.schema.placeholder }}\" min=\"{{ field.schema.validation.min }}\" max=\"{{ field.schema.validation.max }}\" ng-model=\"form.data[field.schema.name]\" ng-required=\"field.schema.validation.required\" ng-minlength=\"{{ field.schema.validation.minlength }}\" ng-maxlength=\"{{ field.schema.validation.maxlength }}\" ng-pattern=\"{{ field.schema.validation.pattern }}\">');
  $templateCache.put('angular-form-gen/field-templates/default/paragraph.ng.html', '<div ng-if=\"!field.schema.validation.strong\" class=\"row\" style=\"text-align: left;margin-left: {{0.5 + (field.schema.validation.pixel ? field.schema.validation.pixel:0)}}%\"><p id=\"{{ field.$_id }}\">{{field.schema.value}}</p></div><div ng-if=\"field.schema.validation.strong\" class=\"row\" style=\"text-align: left;margin-left: {{0.5 + (field.schema.validation.pixel ? field.schema.validation.pixel:0)}}%\"><p style=\"color:black;\" id=\"{{ field.$_id }}\"><strong>{{field.schema.value}}</strong></p></div>');
  $templateCache.put('angular-form-gen/field-templates/default/password.ng.html', '<input class=\"form-control\" fg-field-input=\"\" type=\"password\" id=\"{{ field.$_id }}\" title=\"{{ field.schema.tooltip }}\" tabindex=\"{{ tabIndex }}\" placeholder=\"{{ field.schema.placeholder }}\" ng-model=\"form.data[field.schema.name]\" ng-required=\"field.schema.validation.required\" ng-minlength=\"{{ field.schema.validation.minlength }}\" ng-maxlength=\"{{ field.schema.validation.maxlength }}\" ng-pattern=\"{{ field.schema.validation.pattern }}\">');
  $templateCache.put('angular-form-gen/field-templates/default/radiobuttonlist.ng.html', '<div class=\"radio\" ng-repeat=\"option in field.schema.options\"><label title=\"{{ field.schema.tooltip }}\"><input fg-field-input=\"\" type=\"radio\" name=\"{{ field.schema.name }}[]\" tabindex=\"{{ tabIndex }}\" value=\"{{ option.value }}\" ng-model=\"form.data[field.schema.name]\" ng-required=\"field.schema.validation.required\"> <span>{{option.text || option.value}}</span></label></div>');
  $templateCache.put('angular-form-gen/field-templates/default/selectlist.ng.html', '<select class=\"form-control\" fg-selectlist=\"\" fg-field-input=\"\" id=\"{{ field.$_id }}\" title=\"{{ field.schema.tooltip }}\" ng-model=\"form.data[field.schema.name]\" ng-required=\"field.schema.validation.required\" tabindex=\"{{ tabIndex }}\"><option ng-repeat=\"option in field.schema.options\" value=\"{{ option.value }}\" ng-selected=\"form.data[field.schema.name] === option.value\">{{ option.text || option.value }}</option></select>');
  $templateCache.put('angular-form-gen/field-templates/default/text.ng.html', '<input class=\"form-control\" fg-field-input=\"\" type=\"text\" id=\"{{ field.$_id }}\" title=\"{{ field.schema.tooltip }}\" tabindex=\"{{ tabIndex }}\" placeholder=\"{{ field.schema.placeholder }}\" ng-model=\"form.data[field.schema.name]\" ng-required=\"field.schema.validation.required\" ng-minlength=\"{{ field.schema.validation.minlength }}\" ng-maxlength=\"{{ field.schema.validation.maxlength }}\" ng-pattern=\"{{ field.schema.validation.pattern }}\">');
  $templateCache.put('angular-form-gen/field-templates/default/textarea.ng.html', '<textarea class=\"form-control\" fg-field-input=\"\" fg-placeholder=\"field.schema.placeholder\" ng-model=\"form.data[field.schema.name]\" id=\"{{ field.$_id }}\" title=\"{{ field.schema.tooltip }}\" tabindex=\"{{ tabIndex }}\" ng-required=\"field.schema.validation.required\" ng-minlength=\"{{ field.schema.validation.minlength }}\" ng-maxlength=\"{{ field.schema.validation.maxlength }}\" ng-pattern=\"{{ field.schema.validation.pattern }}\">\n' +
    '</textarea>');
  $templateCache.put('angular-form-gen/field-templates/properties/checkbox.ng.html', '<div fg-tabs-pane=\"Properties\"><div fg-property-field-common=\"{ fieldname: true, displayname: true, tooltip: true }\"></div><div fg-property-field=\"fieldValue\"><div class=\"checkbox\"><label title=\"Set the initial value of this field.\"><input type=\"checkbox\" name=\"fieldValue\" ng-model=\"field.value\"> Initial value</label></div></div></div>');
  $templateCache.put('angular-form-gen/field-templates/properties/checkboxlist.ng.html', '<div fg-tabs-pane=\"Properties\"><div fg-property-field-common=\"{ fieldname: true, displayname: true, tooltip: true }\"></div></div><div fg-tabs-pane=\"Options\"><div fg-property-field-options=\"multiple\"></div></div><div fg-tabs-pane=\"Validation\"><div fg-property-field-validation=\"{ required: true }\"></div><div class=\"fg-property-field-validation\"><div fg-property-field=\"minoptions\" fg-property-field-label=\"Minimum options\"><input type=\"text\" fg-field-redraw=\"\" fg-input-number=\"\" title=\"The minimum number of options that should be selected.\" name=\"minoptions\" ng-model=\"field.validation.minoptions\" class=\"form-control\"></div><div ng-if=\"field.validation.minoptions >= 1\"><div fg-edit-validation-message=\"minoptions\"></div></div></div><div class=\"fg-property-field-validation\"><div fg-property-field=\"maxoptions\" fg-property-field-label=\"Maximum options\"><input type=\"text\" fg-field-redraw=\"\" fg-input-number=\"\" title=\"The maximum number of options that can be selected.\" name=\"maxoptions\" ng-model=\"field.validation.maxoptions\" class=\"form-control\"></div><div ng-if=\"field.validation.maxoptions >= 1\"><div fg-edit-validation-message=\"maxoptions\"></div></div></div></div>');
  $templateCache.put('angular-form-gen/field-templates/properties/customtable.ng.html', '<div fg-tabs-pane=\"Properties\"><div fg-property-field-common=\"{ fieldname: false, displayname: true, placeholder: false, tooltip: false }\"></div><div fg-property-field-value=\"\"><input type=\"text\" class=\"form-control\" name=\"fieldValue\" ng-model=\"field.value\"></div><div class=\"fg-property-field-validation\"><div fg-property-field=\"columnHeaders\" fg-property-field-label=\"Column Headers*\"><input fg-field-redraw=\"\" class=\"form-control\" type=\"text\" name=\"columnHeaders\" title=\"You need set Column Headers\" ng-model=\"field.validation.columnHeaders\"></div></div><div class=\"fg-property-field-validation\"><div fg-property-field=\"rowHeaders\" fg-property-field-label=\"Row Headers*\"><input fg-field-redraw=\"\" class=\"form-control\" type=\"text\" name=\"rowHeaders\" title=\"You need set Row Headers\" ng-model=\"field.validation.rowHeaders\"></div></div></div>');
  $templateCache.put('angular-form-gen/field-templates/properties/date.ng.html', '<div fg-tabs-pane=\"Properties\"><div fg-property-field-common=\"{ fieldname: true, displayname: true, placeholder: false, tooltip: false }\"></div></div><div fg-tabs-pane=\"Validation\"><div fg-property-field-validation=\"{ required: true, minlength: false, maxlength: false, pattern: false }\"></div></div>');
  $templateCache.put('angular-form-gen/field-templates/properties/datetime.ng.html', '<div fg-tabs-pane=\"Properties\"><div fg-property-field-common=\"{ fieldname: true, displayname: true, placeholder: false, tooltip: false }\"></div></div><div fg-tabs-pane=\"Validation\"><div fg-property-field-validation=\"{ required: true, minlength: false, maxlength: false, pattern: false }\"></div></div>');
  $templateCache.put('angular-form-gen/field-templates/properties/dropdownlist.ng.html', '<div fg-tabs-pane=\"Properties\"><div fg-property-field-common=\"{ fieldname: true, displayname: true, placeholder: true, tooltip: true }\"></div><div fg-property-field-value=\"\"><div fg-field-input=\"\" fg-dropdown-input=\"field.options\" ng-model=\"field.value\" ng-minlength=\"{{ field.schema.validation.minlength }}\" ng-maxlength=\"{{ field.schema.validation.maxlength }}\" ng-pattern=\"{{ field.schema.validation.pattern }}\"></div></div></div><div fg-tabs-pane=\"Validation\"><div fg-property-field-validation=\"{ required: true, minlength: true, maxlength: true, pattern: true }\"></div></div>');
  $templateCache.put('angular-form-gen/field-templates/properties/email.ng.html', '<div fg-tabs-pane=\"Properties\"><div fg-property-field-common=\"{ fieldname: true, displayname: true, placeholder: true, tooltip: true }\"></div><div fg-property-field-value=\"\"><input type=\"email\" class=\"form-control\" name=\"fieldValue\" ng-model=\"field.value\" ng-minlength=\"{{ field.validation.minlength }}\" ng-maxlength=\"{{ field.validation.maxlength }}\" ng-pattern=\"{{ field.validation.pattern }}\"></div></div><div fg-tabs-pane=\"Validation\"><div fg-property-field-validation=\"{ required: true, minlength: true, maxlength: true, pattern: true }\"></div></div>');
  $templateCache.put('angular-form-gen/field-templates/properties/if-yes.ng.html', '<div fg-tabs-pane=\"Properties\"><div fg-property-field-common=\"{ fieldname: true, displayname: true, placeholder: true, tooltip: true, children: [] }\"></div><div fg-property-field=\"fieldValue\"><div class=\"checkbox\"><label title=\"Set the initial value of this field.\"><input type=\"checkbox\" name=\"fieldValue\" ng-model=\"field.value\"> Initial value</label></div></div><div fg-tabs-pane=\"Validation\"><div fg-property-field-validation=\"{ required: true, minlength: true, maxlength: true, pattern: true }\"></div></div></div>');
  $templateCache.put('angular-form-gen/field-templates/properties/label.ng.html', '<div fg-tabs-pane=\"Properties\"><div fg-property-field-common=\"{ fieldname: false, displayname: true, placeholder: false, tooltip: false }\"></div><div fg-property-field-value=\"\"><input type=\"text\" class=\"form-control\" name=\"fieldValue\" ng-model=\"field.value\"></div></div>');
  $templateCache.put('angular-form-gen/field-templates/properties/number.ng.html', '<div fg-tabs-pane=\"Properties\"><div fg-property-field-common=\"{ fieldname: true, displayname: true, placeholder: true, tooltip: true }\"></div><div fg-property-field-value=\"\"><input fg-input-number=\"\" class=\"form-control\" type=\"text\" name=\"fieldValue\" ng-model=\"field.value\" min=\"{{ field.validation.min }}\" max=\"{{ field.validation.max }}\" ng-minlength=\"{{ field.validation.minlength }}\" ng-maxlength=\"{{ field.validation.maxlength }}\" ng-pattern=\"{{ field.validation.pattern }}\"></div></div><div fg-tabs-pane=\"Validation\"><div class=\"fg-property-field-validation\"><div fg-property-field=\"min\" fg-property-field-label=\"Minimum value\"><input fg-input-number=\"\" fg-field-redraw=\"\" class=\"form-control\" type=\"text\" name=\"min\" title=\"The minimum value that should be entered\" ng-model=\"field.validation.min\"></div><div ng-if=\"field.validation.min >= 0\"><div fg-edit-validation-message=\"min\"></div></div></div><div class=\"fg-property-field-validation\"><div fg-property-field=\"max\" fg-property-field-label=\"Maximum value\"><input fg-input-number=\"\" fg-field-redraw=\"\" class=\"form-control\" type=\"text\" name=\"max\" title=\"The maximum value that should be entered\" ng-model=\"field.validation.max\"></div><div ng-if=\"field.validation.max >= 0\"><div fg-edit-validation-message=\"max\"></div></div></div><div fg-property-field-validation=\"{ required: true, minlength: true, maxlength: true, pattern: true }\"></div></div>');
  $templateCache.put('angular-form-gen/field-templates/properties/paragraph.ng.html', '<div fg-tabs-pane=\"Properties\"><div fg-property-field-common=\"{ fieldname: false, displayname: false, placeholder: false, tooltip: false }\"></div><div fg-property-field-value=\"\"><input type=\"text\" class=\"form-control\" name=\"fieldValue\" ng-model=\"field.value\"></div><div class=\"fg-property-field-validation\"><div fg-property-field=\"pixel\" fg-property-field-label=\"Margin Left (%)\"><input fg-input-number=\"\" fg-field-redraw=\"\" class=\"form-control\" type=\"text\" name=\"pixel\" title=\"Margin Left (%)\" ng-model=\"field.validation.pixel\" min=\"0\" max=\"99\"></div></div><div class=\"fg-property-field-validation\"><div fg-property-field=\"strong\" fg-property-field-label=\"Strong\"><input type=\"checkbox\" ng-model=\"field.validation.strong\" title=\"Strong\"></div></div></div>');
  $templateCache.put('angular-form-gen/field-templates/properties/password.ng.html', '<div fg-tabs-pane=\"Properties\"><div fg-property-field-common=\"{ fieldname: true, displayname: true, placeholder: true, tooltip: true }\"></div><div fg-property-field-value=\"\"><input fg-input-number=\"\" class=\"form-control\" type=\"password\" name=\"fieldValue\" ng-model=\"field.value\" ng-minlength=\"{{ field.validation.minlength }}\" ng-maxlength=\"{{ field.validation.maxlength }}\" ng-pattern=\"{{ field.validation.pattern }}\"></div></div><div fg-tabs-pane=\"Validation\"><div fg-property-field-validation=\"{ required: true, minlength: true, maxlength: true, pattern: true }\"></div></div>');
  $templateCache.put('angular-form-gen/field-templates/properties/radiobuttonlist.ng.html', '<div fg-tabs-pane=\"Properties\"><div fg-property-field-common=\"{ fieldname: true, displayname: true, tooltip: true }\"></div></div><div fg-tabs-pane=\"Options\"><div fg-property-field-options=\"\"></div></div><div fg-tabs-pane=\"Validation\"><div fg-property-field-validation=\"{ required: true }\"></div></div>');
  $templateCache.put('angular-form-gen/field-templates/properties/selectlist.ng.html', '<div fg-tabs-pane=\"Properties\"><div fg-property-field-common=\"{ fieldname: true, displayname: true, tooltip: true }\"></div></div><div fg-tabs-pane=\"Options\"><div fg-property-field-options=\"\"></div></div><div fg-tabs-pane=\"Validation\"><div fg-property-field-validation=\"{ required: true }\"></div></div>');
  $templateCache.put('angular-form-gen/field-templates/properties/text.ng.html', '<div fg-tabs-pane=\"Properties\"><div fg-property-field-common=\"{ fieldname: true, displayname: true, placeholder: true, tooltip: true }\"></div><div fg-property-field-value=\"\"><input type=\"text\" class=\"form-control\" name=\"fieldValue\" ng-model=\"field.value\" ng-minlength=\"{{ field.validation.minlength }}\" ng-maxlength=\"{{ field.validation.maxlength }}\" ng-pattern=\"{{ field.validation.pattern }}\"></div></div><div fg-tabs-pane=\"Validation\"><div fg-property-field-validation=\"{ required: true, minlength: true, maxlength: true, pattern: true }\"></div></div>');
  $templateCache.put('angular-form-gen/field-templates/properties/textarea.ng.html', '<div fg-tabs-pane=\"Properties\"><div fg-property-field-common=\"{ fieldname: true, displayname: true, placeholder: true, tooltip: true }\"></div><div fg-property-field-value=\"\"><textarea name=\"fieldValue\" class=\"form-control\" ng-model=\"field.value\" ng-minlength=\"{{ field.validation.minlength }}\" ng-maxlength=\"{{ field.validation.maxlength }}\" ng-pattern=\"{{ field.validation.pattern }}\">\n' +
    '    </textarea></div></div><div fg-tabs-pane=\"Validation\"><div fg-property-field-validation=\"{ required: true, minlength: true, maxlength: true, pattern: true }\"></div></div>');
  $templateCache.put('angular-form-gen/common/jsonify/jsonify.ng.html', '<div class=\"jsonify\"><div class=\"btn-toolbar btn-toolbar-right\"><button class=\"btn btn-default btn-xs\" type=\"button\" title=\"Copy the json data.\" ng-click=\"copy()\"><span class=\"fa fa-clipboard\"></span></button> <button class=\"btn btn-default btn-xs\" type=\"button\" title=\"Display hidden properties.\" ng-click=\"displayHidden = !displayHidden\" ng-class=\"{ \'active\': displayHidden }\"><span class=\"fa fa-eye\"></span></button></div><pre><code>{{ jsonify | j$on:displayHidden }}</code></pre></div>');
  $templateCache.put('angular-form-gen/common/tabs/tabs-pane.ng.html', '<div class=\"fg-tabs-pane\" ng-show=\"tabs.active === pane\"><div ng-if=\"tabs.active === pane || pane.renderAlways\" ng-transclude=\"\"></div></div>');
  $templateCache.put('angular-form-gen/common/tabs/tabs.ng.html', '<div class=\"fg-tabs tabbable\"><ul class=\"nav nav-tabs\"><li ng-repeat=\"tab in tabs.items\" ng-class=\"{ active: tab === tabs.active, disabled: tab.disabled }\"><a href=\"\" ng-click=\"tabs.activate(tab)\">{{ tab.title }}</a></li></ul><div class=\"tab-content\" ng-transclude=\"\"></div></div>');
  $templateCache.put('angular-form-gen/edit/canvas/canvas.ng.html', '<div class=\"fg-edit-canvas\" ng-class=\"{ \'fg-edit-canvas-dragging\': dragging }\"><fieldset><legend>Canvas</legend><div class=\"fg-edit-canvas-area\" dq-drag-area=\"fg-edit-canvas\" dq-drag-enter=\"canvasCtrl.dragEnter()\" dq-drag-leave=\"canvasCtrl.dragLeave()\" dq-drop=\"canvasCtrl.drop()\"><div ng-if=\"!(schema.fields.length)\"><div ng-if=\"!dragPlaceholder.visible\" class=\"fg-edit-canvas-area-empty alert alert-info text-center\"><p class=\"fg-edit-canvas-area-empty-x\">X</p><p class=\"lead hidden-phone\"><strong>Drag</strong> one of the available <strong>templates</strong> from the <strong>palette</strong> onto this <strong>canvas</strong>.</p></div></div><div ng-repeat=\"field in schema.fields\"><div ng-class=\"{ \'fg-drag-placeholder-visible\' : dragPlaceholder.visible && dragPlaceholder.index === $index }\" class=\"fg-drag-placeholder\"></div><div fg-edit-canvas-field=\"\"></div></div><div ng-class=\"{ \'fg-drag-placeholder-visible\': dragPlaceholder.visible && dragPlaceholder.index == schema.fields.length }\" class=\"fg-drag-placeholder\"></div></div></fieldset></div>');
  $templateCache.put('angular-form-gen/form/field/field.ng.html', '<div class=\"fg-field-inner form-group\" ng-class=\"{ \'fg-field-required\': fieldSchema.validation.required, \'has-error\': form.state[field.name].$invalid }\"><div class=\"row\"><div class=\"col-sm-12\" ng-if=\"!field.schema.nolabel\"><label style=\"text-align: left; padding-left: 0.1%!important;\" class=\"control-label\" for=\"{{ field.$_id }}\">{{fieldSchema.displayName}}</label></div></div><div class=\"row\"><div class=\"col-sm-12\"><div ng-include=\"renderInfo.templateUrl\"></div><div fg-validation-summary=\"\" fg-validation-messages=\"fieldSchema.validation.messages\" ng-if=\"!noValidationSummary\"></div></div></div></div>');
  $templateCache.put('angular-form-gen/form/form-fields/form-fields.ng.html', '<div class=\"fg-form-fields\"><fieldset><div ng-repeat=\"field in form.schema.fields\"><div fg-field=\"field\"></div></div></fieldset></div>');
  $templateCache.put('angular-form-gen/edit/palette/palette.ng.html', '<div class=\"fg-edit-palette thisone\"><fieldset><div fg-edit-palette-categories=\"\" data-category=\"selectedCategory\"></div><div ng-repeat=\"template in templates | filter:templateFilter\" class=\"fg-field\" dq-draggable=\"fg-edit-canvas\" dq-drag-begin=\"{ source: \'palette\', field: template }\"><div class=\"fg-field-overlay\"><div class=\"btn-toolbar btn-toolbar-right\"><button class=\"btn btn-default btn-xs btn-primary\" type=\"button\" ng-click=\"schemaCtrl.addField(template)\" title=\"Add this field.\"><span class=\"fa fa-plus\"></span></button></div></div><div fg-field=\"template\" fg-tab-index=\"-1\" fg-no-validation-summary=\"true\" fg-edit-mode=\"true\"></div></div></fieldset></div>');
  $templateCache.put('angular-form-gen/edit/canvas/field/field.ng.html', '<div class=\"fg-field fg-field-{{ field.type }} fg-edit-canvas-field\" ng-class=\"{ \'error\': field.$_invalid, \'dragging\': field.$_isDragging }\" dq-draggable=\"fg-edit-canvas\" dq-drag-disabled=\"dragEnabled === false\" dq-drag-begin=\"canvasCtrl.dragBeginCanvasField($index, field)\" dq-drag-end=\"canvasCtrl.dragEndCanvasField(field)\"><div class=\"fg-field-overlay\" ng-mouseenter=\"dragEnabled = true\" ng-mouseleave=\"dragEnabled = false\"><div class=\"fg-field-overlay-drag-top\" dq-drag-enter=\"dragPlaceholder.index = $index\"></div><div class=\"fg-field-overlay-drag-bottom\" dq-drag-enter=\"dragPlaceholder.index = ($index + 1)\"></div><div class=\"btn-toolbar btn-toolbar-right\"><button class=\"btn btn-default btn-xs\" type=\"button\" ng-disabled=\"field.$_displayProperties && field.$_invalid\" ng-class=\"{ \'active\': field.$_displayProperties }\" ng-click=\"toggleProperties(field)\" title=\"Configure this field.\"><span class=\"fa fa-wrench\"></span></button> <button class=\"btn btn-default btn-xs\" type=\"button\" ng-click=\"schemaCtrl.swapFields($index - 1, $index)\" ng-disabled=\"$index === 0\" title=\"Move up\"><span class=\"fa fa-arrow-up\"></span></button> <button class=\"btn btn-default btn-xs\" type=\"button\" ng-click=\"schemaCtrl.swapFields($index, $index + 1)\" ng-disabled=\"$index === schema.fields.length - 1\" title=\"Move down\"><span class=\"fa fa-arrow-down\"></span></button> <button class=\"btn btn-default btn-xs btn-danger\" type=\"button\" ng-click=\"schemaCtrl.removeField($index)\" title=\"Remove\"><span class=\"fa fa-trash\"></span></button></div></div><div ng-form=\"\" fg-null-form=\"\"><div fg-field=\"field\" fg-tab-index=\"-1\" fg-edit-mode=\"true\" fg-no-validation-summary=\"true\"></div></div><div class=\"fg-field-properties-container\" ng-class=\"{ visible: field.$_displayProperties }\"><div fg-edit-canvas-field-properties=\"field\" ng-if=\"expanded\"></div></div></div>');
  $templateCache.put('angular-form-gen/edit/palette/categories/categories.ng.html', '<legend ng-click=\"paletteCategoriesMenuOpen = !paletteCategoriesMenuOpen\" ng-class=\"{ \'open\': paletteCategoriesMenuOpen }\">Palette <span class=\"fg-legend-extra fg-edit-palette-categories visible-xs-inline visible-md-inline visible-lg-inline\">- {{ categoryName || \'All field types\' }}</span> <i class=\"caret\"></i><ul class=\"dropdown-menu\"><li ng-repeat=\"(name, category) in categories\" ng-class=\"{ \'active\': categoryName === name }\"><a ng-click=\"setCategory(name, category)\">{{ name }}</a></li><li class=\"divider\"></li><li ng-class=\"{ \'active\': !category }\"><a ng-click=\"setCategory(null)\">All field types</a></li></ul></legend>');
  $templateCache.put('angular-form-gen/edit/canvas/field/properties/properties.ng.html', '<div class=\"fg-field-properties\"><div novalidate=\"\" ng-form=\"fieldPropertiesForm\"><div fg-tabs=\"property.tabs\"><div ng-include=\"renderInfo.propertiesTemplateUrl\"></div><div fg-tabs-pane=\"Debug\" order=\"1000\" auto-active=\"false\"><div data-jsonify=\"field\"></div></div></div></div></div>');
  $templateCache.put('angular-form-gen/edit/canvas/field/properties/options/options.ng.html', '<div ng-if=\"!field.options || field.options.length === 0\" ng-click=\"optionsCtrl.addOption()\" class=\"alert alert-info\"><h2>No options defined</h2><p class=\"lead\">Click here to add a new option definition to this field.</p></div><table ng-if=\"field.options.length > 0\" class=\"table-field-options\"><thead><tr><th></th><th>Value</th><th>Text</th><th><a href=\"\" class=\"btn btn-default btn-xs\" ng-click=\"optionsCtrl.addOption()\" title=\"Add a new option to the list\"><i class=\"fa fa-plus\"></i></a></th><th class=\"table-field-options-padding\"></th></tr></thead><tbody><tr ng-form=\"fieldOptionForm\" ng-repeat=\"option in field.options\" ng-class=\"{ \'error\': fieldOptionForm.$invalid }\"><td ng-if=\"multiple === false\"><input type=\"radio\" name=\"{{ field.name }}selection[]\" value=\"{{ option.value }}\" ng-model=\"field.value\" ng-click=\"optionsCtrl.toggleOption(option.value)\"></td><td ng-if=\"multiple === true\"><input type=\"checkbox\" name=\"{{ field.name }}selection[]\" value=\"{{ option.value }}\" ng-model=\"field.value[option.value]\"></td><td><input type=\"text\" name=\"optionValue\" ng-model=\"option.value\" class=\"form-control\" ng-required=\"field.type != \'selectlist\'\"></td><td><input type=\"text\" ng-model=\"option.text\" class=\"form-control\"></td><td><a href=\"\" class=\"btn btn-default btn-xs\" ng-click=\"optionsCtrl.removeOption($index)\" title=\"Remove this option from the list\"><i class=\"fa fa-trash\"></i></a></td><td></td></tr></tbody></table>');
  $templateCache.put('angular-form-gen/edit/canvas/field/properties/validation/validation-message.ng.html', '<div ng-form=\"valMsgForm\"><div fg-property-field=\"message\" fg-property-field-label=\"Message\"><input type=\"text\" name=\"message\" title=\"{{ tooltip }}\" placeholder=\"Optional message\" ng-model=\"field.validation.messages[validationType]\" class=\"form-control\"></div></div>');
  $templateCache.put('angular-form-gen/edit/canvas/field/properties/validation/validation.ng.html', '<div ng-if=\"fields.minlength\" class=\"fg-property-field-validation\"><div fg-property-field=\"minlength\" fg-property-field-label=\"Minimum length\"><input type=\"text\" fg-field-redraw=\"\" fg-input-number=\"\" title=\"The minimum length of characters that should be entered.\" name=\"minlength\" ng-model=\"field.validation.minlength\" class=\"form-control\"></div><div ng-if=\"field.validation.minlength >= 1\"><div fg-edit-validation-message=\"minlength\"></div></div></div><div ng-if=\"fields.maxlength\" class=\"fg-property-field-validation\"><div fg-property-field=\"maxlength\" fg-property-field-label=\"Maximum length\"><input type=\"text\" fg-field-redraw=\"\" fg-input-number=\"\" title=\"The maximum length of characters that should be entered.\" name=\"maxlength\" ng-model=\"field.validation.maxlength\" class=\"form-control\"></div><div ng-if=\"field.validation.maxlength >= 1\"><div fg-edit-validation-message=\"maxlength\"></div></div></div><div ng-if=\"fields.pattern\" class=\"fg-property-field-validation\"><div fg-property-field=\"pattern\" fg-property-field-label=\"Pattern\"><div fg-dropdown-input=\"patternOptions\" name=\"pattern\" title=\"The pattern that should match with the input value.\" fg-parse-pattern=\"\" fg-field-redraw=\"\" ng-model=\"field.validation.pattern\"></div></div><div ng-if=\"field.validation.pattern.length > 0\"><div fg-edit-validation-message=\"pattern\"></div></div></div><div ng-if=\"fields.required\" class=\"fg-property-field-validation\"><div fg-property-field=\"required\"><div class=\"checkbox\"><label title=\"Indicates if a value is required for this field.\"><input type=\"checkbox\" ng-model=\"field.validation.required\">Required</label></div></div><div ng-if=\"field.validation.required\"><div fg-edit-validation-message=\"required\"></div></div></div>');
  $templateCache.put('angular-form-gen/edit/canvas/field/properties/property-field/common.ng.html', '<div ng-if=\"fields.fieldname\"><div fg-property-field=\"fieldName\" fg-property-field-label=\"Name\"><input type=\"text\" class=\"form-control\" name=\"fieldName\" ng-model=\"field.name\" ng-required=\"true\" ng-pattern=\"/^[a-zA-Z]([\\w]+)?$/\" fg-unique-field-name=\"\"></div></div><div ng-if=\"fields.displayname\"><div fg-property-field=\"displayName\" fg-property-field-label=\"Display name\"><input type=\"text\" class=\"form-control\" name=\"displayName\" ng-model=\"field.displayName\"></div></div><div ng-if=\"fields.placeholder\"><div fg-property-field=\"fieldPlaceholder\" fg-property-field-label=\"Placeholder text\"><input type=\"text\" class=\"form-control\" name=\"fieldPlaceholder\" ng-model=\"field.placeholder\"></div></div><div ng-if=\"fields.tooltip\"><div fg-property-field=\"fieldTooltip\" fg-property-field-label=\"Tooltip\"><input type=\"text\" class=\"form-control\" name=\"fieldTooltip\" ng-model=\"field.tooltip\"></div></div>');
  $templateCache.put('angular-form-gen/edit/canvas/field/properties/property-field/field-value.ng.html', '<div ng-if=\"draw\"><div fg-property-field=\"fieldValue\" fg-property-field-label=\"Initial value\"><div ng-transclude=\"\"></div></div></div>');
  $templateCache.put('angular-form-gen/edit/canvas/field/properties/property-field/property-field.ng.html', '<div class=\"form-group fg-property-field\" ng-class=\"{ \'has-error\': fieldPropertiesForm[fieldName].$invalid }\"><label class=\"col-sm-5 col-md-4 control-label\">{{ fieldLabel }}</label><div class=\"col-sm-7 col-md-8\"><div ng-transclude=\"\"></div><div fg-validation-summary=\"{{ fieldName }}\"></div></div></div>');
}]);