import '@vaadin/vaadin-combo-box/theme/lumo/vaadin-combo-box-light.js';
import '@vaadin/vaadin-lumo-styles/mixins/field-button.js';
import '@vaadin/vaadin-lumo-styles/font-icons.js';
import { html } from '@polymer/polymer/lib/utils/html-tag.js';

const $_documentContainer = html`<dom-module id="lumo-time-picker" theme-for="vaadin-time-picker">
  <template>
    <style include="lumo-field-button">
      [part~="toggle-button"]::before {
        content: var(--lumo-icons-clock);
      }
    </style>
  </template>
</dom-module>`;

document.head.appendChild($_documentContainer.content);
