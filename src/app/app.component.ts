import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="mydiy">主机app组件mydiy,这是在主机global style里定义的mydiy class,这里应该有样式</div>
    <button nz-button nzType="primary">主机app组件button，此时用了ng17的zorro</button>
    <nz-steps [nzCurrent]="1">
      <nz-step nzTitle="Finished" nzDescription="This is a description."></nz-step>
      <nz-step nzTitle="In Progress" nzSubtitle="Left 00:00:08" nzDescription="This is a description."></nz-step>
      <nz-step nzTitle="Waiting" nzDescription="This is a description."></nz-step>
    </nz-steps>
    <app-me></app-me>
  `,
})
export class AppComponent {
}
