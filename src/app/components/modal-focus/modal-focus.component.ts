import { Component, Type } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
	selector: 'altera-sobre',
	standalone: true,
	template: `
		<div class="modal-header">
			<h4 class="modal-title" id="modal-title">Alterar:</h4>
			<button
				type="button"
				class="btn-close"
				aria-describedby="modal-title"
				(click)="modal.dismiss('Cross click')"
			></button>
		</div>
		<div class="modal-body">
			



		</div>
		<div class="modal-footer">
			<button type="button" class="btn btn-outline-secondary" (click)="modal.dismiss('cancel click')">Cancelar</button>
			<button type="button" class="btn btn-danger" (click)="modal.close('Ok click')">Alterar</button>
		</div>
	`,
})
export class AlteraSobre {
	constructor(public modal: NgbActiveModal) {}
}

@Component({
	selector: 'ngbd-modal-confirm-autofocus',
	standalone: true,
	template: `
		<div class="modal-header">
			<h4 class="modal-title" id="modal-title">Login:</h4>
			<button
				type="button"
				class="btn-close"
				aria-label="Close button"
				aria-describedby="modal-title"
				(click)="modal.dismiss('Cross click')"
			></button>
		</div>
		<div class="modal-body">
    <form>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" #email>
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Senha</label>
    <input type="password" class="form-control" id="exampleInputPassword1" #senha>
  </div>
  <div class="mb-3 form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1">
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
		</div>
		<div class="modal-footer">
			<button type="button" class="btn btn-outline-secondary" (click)="modal.dismiss('cancel click')">Fechar</button>
			<button type="button" ngbAutofocus class="btn btn-danger" (click)="modal.close('Ok click')">Login</button>
		</div>
	`,
})
export class NgbdModalConfirmAutofocus {
	constructor(public modal: NgbActiveModal) {}
}

const MODALS: { [name: string]: Type<any> } = {
	focusFirst: AlteraSobre,
	autofocus: NgbdModalConfirmAutofocus,
};

@Component({ selector: 'ngbd-modal-focus', standalone: true, templateUrl: './modal-focus.component.html' })
export class NgbdModalFocus {
	withAutofocus = `<button type="button" ngbAutofocus class="btn btn-danger"
      (click)="modal.close('Ok click')">Ok</button>`;

	constructor(private _modalService: NgbModal) {}

	open(name: string) {
		this._modalService.open(MODALS[name]);
	}
}
