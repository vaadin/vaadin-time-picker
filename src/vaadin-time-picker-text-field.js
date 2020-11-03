/**
@license
Copyright (c) 2018 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/
import { TextFieldElement } from '@vaadin/vaadin-text-field/src/vaadin-text-field.js';

const $_documentContainer = document.createElement('template');

$_documentContainer.innerHTML = `<dom-module id="vaadin-time-picker-text-field-styles" theme-for="vaadin-time-picker-text-field">
  <template>
    <style>
      :host([dir="rtl"]) [part="input-field"] {
        direction: ltr;
      }

      :host([dir="rtl"]) [part="value"]::placeholder {
        direction: rtl;
        text-align: left;
      }

      :host([dir="rtl"]) [part="input-field"] ::slotted(input)::placeholder {
        direction: rtl;
        text-align: left;
      }

      :host([dir="rtl"]) [part="value"]:-ms-input-placeholder,
      :host([dir="rtl"]) [part="input-field"] ::slotted(input):-ms-input-placeholder {
        direction: rtl;
        text-align: left;
      }
    </style>
  </template>
</dom-module>`;

document.head.appendChild($_documentContainer.content);
/**
  * The text-field element.
  *
  * ### Styling
  *
  * See [`<vaadin-text-field>` documentation](https://github.com/vaadin/vaadin-text-field/blob/master/src/vaadin-text-field.html)
  * for `<vaadin-time-picker-text-field>` parts and available slots (prefix, suffix etc.)
  *
  * See [ThemableMixin – how to apply styles for shadow parts](https://github.com/vaadin/vaadin-themable-mixin/wiki)
  *
  * @extends PolymerElement
  */
class TimePickerTextFieldElement extends TextFieldElement {
  static get is() {
    return 'vaadin-time-picker-text-field';
  }
}

customElements.define(TimePickerTextFieldElement.is, TimePickerTextFieldElement);
