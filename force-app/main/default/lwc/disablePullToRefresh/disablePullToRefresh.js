import { LightningElement } from "lwc";

export default class DocDisablePullToRefresh extends LightningElement {
  // Trigger this component's effect when the component loads
  connectedCallback() {
    this.disablePullToRefresh();
  }

  // Fire the event to disable pull-to-refresh on this page
  // This has an effect only in the Salesforce Mobile and
  // Mobile Publisher apps
  disablePullToRefresh() {
    // CustomEvent is standard JavaScript. See:
    // https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent/CustomEvent
    const disable_ptr_event = new CustomEvent("updateScrollSettings", {
      detail: {
        isPullToRefreshEnabled: false,
      },
      bubbles: true,
      composed: true,
    });
    this.dispatchEvent(disable_ptr_event);
  }
}