import '@vaadin/vaadin-combo-box/theme/material/vaadin-combo-box-light.js';
import '@vaadin/vaadin-text-field/theme/material/vaadin-text-field.js';
import '@vaadin/vaadin-material-styles/mixins/field-button.js';
import '@vaadin/vaadin-material-styles/font-icons.js';
import { html } from '@polymer/polymer/lib/utils/html-tag.js';

const $_documentContainer = html`<dom-module id="material-time-picker" theme-for="vaadin-time-picker">
  <template>
    <style include="material-field-button">
      [part~="toggle-button"]::before {
        content: var(--material-icons-clock);
      }
    </style>
  </template>
</dom-module>`;

document.head.appendChild($_documentContainer.content);
